# Frozen70-original consumer/use graph

`consumer-use-graph.json` is complete and will not be edited. SHA256: `cc5272b19f57a4534d6319e8a4966a7920cd6f6607292146a2df56c460e5d4f2`.

Exact scope:69current manifests,138pages,442owned source items,6629reached paths,70changed originals (44items+26categories),38777edges. It was computed ONCE using frontierMathematicsImportScope in authored mode; source pins/current70hashes and all captured manifest/carrier inputs were rehashed before output. Original identity/page-home indexes are metadata context for the existing API, not a proof audit. User/Root's actual frozen-source boundary remains required. No full preparation, authority, receipt, state, source or import write was performed.

For an item, select `changed_originals` by `id`. `direct_consumers` includes all immediate contextual/math/native users with source hashes, typed source/manifest edge fields and actual parsed Fact/step locators. `direct_owned_consumers` names immediate owned users. `transitive_owned_uses` includes every reachable owned user, a `direct` flag, current source/declaration hashes and one actual shortest `witness_path`. `final_edge_fact_uses` identifies the final supplier's actual linked Facts and numbered steps in the owned consumer. Empty locations mean the metadata graph edge exists without a parsed linked-Fact use; they are not a proof that the supplier is unused.

Top-level `edges` is the complete source/manifest supplier→consumer relation returned by the API, annotated with the fields that supply each edge. This scope actually uses deps and justified_by. Justification/discharge context is separately labelled in those fields; do not reinterpret every edge as an acyclic logical deps edge. Witness paths are one path per user, not all semantically possible uses or an acceptance verdict. `owned_consumers` gives all442current owned identity/class/page/hash/dependency rows.

For `_category.md`, rows are `node_kind: category-context-only`. They deliberately have no invented logical item edges. Context associations through actual reached item homes and current page prerequisites are separate fields and mean only catalogue context. No category prose statement is promoted to a mathematical supplier.

The JSON is about50MB because complete Fact/step texts recur across supplier/user witness rows. Read/select the one frozen file; do not duplicate it per reviewer. Example from physics cwd:

```
python3 - <<'PY'
import json
p='research/advanced-qft-supersymmetry-build-2026-10-23-owner-resolution/authored-original-source-review/consumer-use-graph.json'
g=json.load(open(p))
r=next(r for r in g['changed_originals'] if r.get('id')=='thm-riesz-representation-for-c0-functions-and-regular-measures')
print(r['direct_consumers'])
print([(u['id'],u['witness_path']) for u in r['transitive_owned_uses']])
PY
```

Use the actual supplierID from your partition if that example ID is absent. Reviewers retain ownership of actual supplier-hypothesis/interface and affected-consumer compatibility checks. This graph supplies scope and locations; no mathematical/physical/empirical acceptance, source-reading stamp or native coverage is inferred.
