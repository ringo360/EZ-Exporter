import { cancel, intro, isCancel, outro, text } from '@clack/prompts';

intro('Hello');
const a = await text({
    message: 'input',
    placeholder: 'meh',
});
if (isCancel(a)) {
    cancel('Cancelled.');
    process.exit(0);
}
outro('End');
