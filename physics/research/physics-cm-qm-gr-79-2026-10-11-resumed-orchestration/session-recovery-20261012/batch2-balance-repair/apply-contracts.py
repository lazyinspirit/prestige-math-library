from guarded_io import *
for batch in [2,31,19,22]:
 write(f'research/{RUN}-batch-{batch}.proof-contracts.json',(BASE/f'metadata-candidates/batch-{batch}.proof-contracts.json').read_text())
