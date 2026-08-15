import subprocess, sys, re
path = sys.argv[1]
out = subprocess.run(['node','tools/tsx-run.mjs','tools/precheck.mts',path],
                     capture_output=True, text=True).stdout
if not out.startswith('REPAIR'):
    print('NOT A REPAIR:\n', out[:400]); sys.exit(1)
lines = out.split('\n')[1:]
canon = []
for l in lines:
    if l.startswith('  | '): canon.append(l[4:])
    elif l.strip()=='  |': canon.append('')
    elif canon: break
canon = '\n'.join(canon).rstrip('\n')
t = open(path).read()
i = t.index('**Given:**')
# find heading that precedes the proof body in canon and restore it
head = re.search(r'\n(## (?:Proof|Verification|Counterexample|Refutation))\n', t).group(1)
canon = re.sub(r'\n{2,}(\*\*Proof technique:\*\*)', f'\n\n{head}\n\n\\1', canon, count=1)
open(path,'w').write(t[:i] + canon + '\n')
print('adopted', path)
