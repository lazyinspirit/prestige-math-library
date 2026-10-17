# Research-only Step6 closeout scope proposal

The existing six `additional_paths` rows fail the current strict row schema: their `sha256` and `reason` fields are absent. Their historical evidence file also has no `owned_paths` list. Keep that evidence unchanged; one new run-local ownership sidecar bridges the old six and the fourteen actually root-applied finite-smoke code/documentation paths.

`policy-template.UNSEALED.json` preserves the existing version, run, authorization, authorized_by, and exact reviewed_hook, changing only the additional_paths array. Each of twenty rows has exactly path, sha256, reason, and ownership_evidence. `ownership-evidence-template.UNSEALED.json` supplies the matching run and owned_paths records, retaining old evidence and actual ROOT application navigation. `path-index.json` is the compact exact path/reason list.

ROOT must replace every `ROOT_TO_SEAL_CURRENT_FILE_SHA256:...` sentinel with the actual lowercase raw-file SHA256 after the corresponding files are stable, using the identical value in policy and sidecar. These templates are deliberately NOT native-valid until sealed. Null would authorize deletion and is wrong for all twenty present regular files. Do not change the existing hook tuple, invent source/gate review credit, modify historical evidence, or widen the path list.

The new sidecar itself belongs to the existing run-local research selection automatically and must not receive a redundant additional_paths row. The same is true of the fifteen run-named proof-contract files already changed by the integration: no new scope row is needed for them. This proposal adds only the fourteen non-run-prefixed code/documentation paths from actual ROOT application.

No hashes, closeout preflight, workflow gates, canonical writes, source review, or recertification were performed by this helper. Root owns sealing and native validation. Exact before files are archived under before/; ROOT-application.txt was checked against the immutable application completion as JSON, and all twenty target paths were checked as present regular files without symlink components.
