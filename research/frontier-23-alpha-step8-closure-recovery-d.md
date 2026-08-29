# Step 8 closure recovery - group d

## Rows handled

| item | context_sha256 | item_sha256 | outcome | disposition |
|---|---|---|---|---|
| `ex-the-splitting-lemma-instantiated-at-the-published-module-theorem` | `3334460765fc1a83a19d451cdd905afc883c63d13f36d30d84fbf033a8d6dd54` | `6910fd2b7288bbb8e4d31abdcbd38bff839c258f8be300eb7e27c0e18f33cf15` | `confirmed_nonfatal` | The module-category abelianness theorem supplies the omitted local citation; the repaired hypothesis and specialization remain correct. No edit. |
| `fs-member-equivalence-is-transitive-in-any-pointed-category-with-pullbacks` | `7aefa7a44cf94cbd42c2c24bb48a6efc48601a725c331c42c984962bbf9a7bc5` | `e9c802b5f8c7d7cb25efd429e30e553de055149976e0118df7084045fb22e227` | `confirmed_nonfatal` | The objection identifies an omitted citation to the member-equivalence definition. The common-cover witness remains valid. No edit. |
| `fs-the-members-of-an-object-form-an-abelian-group` | `0f555a6524e72e5e6e5e879fd95d75848141d506c421e54edb67470ef3d4613d` | `ca4de22fb13340b0df7015530320ea65df43795abef4d66a798ed043b95c8eb4` | `false_positive` | Fact L1 says only that the subtraction theorem itself supplies an existential witness rather than a binary operation. It does not claim that the theorem proves no operation exists; L2 independently supplies the counterexample. No edit. |
| `lem-induced-word-map-has-the-free-extension-property` | `7ba84f951a9d38783dd18cd2106bacbc521452ac390fefe1ca7e77abd760c76e` | `3aa5a6391479d31828376e3c1e3636a795a8c88970200a9ffcb4c93a4425eaff` | `confirmed_nonfatal` | The identity `epsilon epsilon = epsilon` and the following length calculation are immediate from the explicit word-concatenation definition. No edit. |
| `thm-ab5-is-equivalent-to-exactness-of-filtered-colimits` | `5bfe1282c347ebb971c9ac41279466d3a2efd11028723d8002f8d9d4f07a5d08` | `b0bc959e6059041443c3e937a9ae62645e8c1358671b8d038c151d4ae5ed336b` | `confirmed_nonfatal` | Factoring the colimit map through its image and pulling the epic leg back closes the image-of-pullback step. The theorem is also the exact statement of L5. No edit. |
| `thm-member-equivalence-is-transitive` | `6d91bb02b1b73496e84789f77e4c3a7550673b5a7dc724f6062915182b1e57c6` | `e36d5c117879d510aaca6a18d1dfc894d8fefcac1959f0a7c15b3d830e0a7bfd` | `confirmed_nonfatal` | The cited definition does not establish existence, but the published finite-limits theorem gives pullbacks in every abelian category. No edit. |

## Repairs and rejudge targets

No rejection was confirmed fatal. No item, page, proof contract, impact record,
verification field, judge record, or defect-ledger row was changed. There are no
new rejudge targets from this recovery cycle.

## Alerts

There were no incoming alerts, cross-group seams, or outgoing cross-group
findings.

## Checks

- Exact evidence join: 6 expected live tuples, 6 unique exact adjudications, 5
  confirmed nonfatal, 1 false positive, and 0 confirmed fatal.
- Step-8 scope check exited successfully with 4 groups and 504 partitioned
  items. The 15 remaining open rejection rows belong to other groups.
- Every adjudication row carries the current guard hash of its unchanged item.

## Blockers

None within group d. Whole-run closure still awaits the other groups' 15 routed
rows; the engine owns those dispatches and the stage transition.
