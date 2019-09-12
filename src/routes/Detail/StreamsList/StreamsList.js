const React = require('react');
const PropTypes = require('prop-types');
const classnames = require('classnames');
const Icon = require('stremio-icons/dom');
const { Button, placeholderStyles } = require('stremio/common');
const Stream = require('./Stream');
const StreamPlaceholder = require('./StreamPlaceholder');
const useStreams = require('./useStreams');
const styles = require('./styles');

const StreamsList = ({ className, metaItem }) => {
    const streams = useStreams(metaItem);
    return (
        <div className={classnames(className, styles['streams-list-container'])}>
            <div className={classnames(styles['streams-scroll-container'], { [placeholderStyles['placeholder-container']]: streams.length === 0 })}>
                {
                    streams.length > 0 ?
                        streams.map((stream) => (
                            <Stream {...stream} key={stream.id} className={styles['stream']} />
                        ))
                        :
                        <React.Fragment>
                            <StreamPlaceholder className={styles['stream']} />
                            <StreamPlaceholder className={styles['stream']} />
                            <StreamPlaceholder className={styles['stream']} />
                            <StreamPlaceholder className={styles['stream']} />
                            <StreamPlaceholder className={styles['stream']} />
                            <StreamPlaceholder className={styles['stream']} />
                        </React.Fragment>
                }
            </div>
            <Button className={styles['install-addons-container']} title={'Install addons'} href={'#/addons'}>
                <Icon className={styles['icon']} icon={'ic_addons'} />
                <div className={styles['label']}>Install addons</div>
            </Button>
        </div>
    );
}

StreamsList.propTypes = {
    className: PropTypes.string,
    metaItem: PropTypes.object
};

module.exports = StreamsList;
