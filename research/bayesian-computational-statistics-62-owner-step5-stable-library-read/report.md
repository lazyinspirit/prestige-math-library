# Step5 recurrent concurrent read failure

The actual19:00:53.989Z gate failed on missing frontmatter in a foreign quantum item. Its current file has the expected frontmatter/id and quantum pipeline ownership. Together with the earlier recovered foreign ENOENT, this is sufficient operational evidence for bounded save-window tolerance rather than repeated unmodified retries.

The proposed two-file repair retries only transient absent/frontmatter/id-shape reads at most six times, waits at most3.1seconds and fails closed on persistence. It computes guard_sha256 from the same successful source string already used for raw/statement hashes, and removes workflow.hashes' second path read. Every item is still inventoried; nothing is skipped or granted a passing result. All scope, supplier, evidence and later drift checks remain unchanged.

Exact before-code guards and documentation accompany the patch. No live code/source/state/hash/certification change or optional test/partial gate/model call was performed. Root owns independent implementation review, commit, recertification and the full native batteries.
