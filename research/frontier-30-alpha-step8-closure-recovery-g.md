# Frontier 30 — Step 8 closure recovery, group g, rejudge round 1

## Outcome

Handled all six exact current rejection tuples owned by group g: five are
`confirmed_fatal`, none is `confirmed_nonfatal`, and one is a
`false_positive`. Only the five fatal items were edited. No published item or
other group's content was changed, and no cross-group alert was needed.

The adjudication read all 38 items on the six owned pages and all 38 distinct
direct dependencies cited by those items. The five repairs are recorded by
defect rows `frontier-30-A8R1-g-001` through
`frontier-30-A8R1-g-005`.

## Exact rows handled

| item | context SHA-256 | pre-edit guard SHA-256 | outcome | disposition |
|---|---|---|---|---|
| `def-property-star-for-a-finite-family` | `7ddda0d032fe4e8c323f1187499ec6069313381c48276091ee986ce0fceb76ec` | `3128acd5f11e2870784d5f38c7ed871905ff71d1ac9f111d5c36e29ffd72130e` | `confirmed_fatal` (`dependency_citation`) | The definition quantified over `overline(F)`-free graphs without defining the complement family. It now defines the family of graph complements, cites the complement interface, and declares that dependency. |
| `ex-a-four-tooth-comb-with-a-special-vertex-triggers-property-star` | `db5ddf67e5011b770c67f2256b694cde1674581a3f79cd7277036e2c49bd7085` | `d4d434147886af0308dcd3ddf44272a022e19ad1098a868636f44014dc4bc76d` | `confirmed_fatal` (`other`) | The Given block called each four-vertex `B_i` a singleton block, contradicting the construction and width-four verification. It now says “blocks.” |
| `ex-the-lemma-three-five-parameter-choice-on-a-large-graph` | `40d7bf29ff7031f9b3a1924415a4f59c489649c675dde6204d24e19d1a732533` | `8578a2392eba558c5d8c894d7d57d695b2f5168481caf1ea02f9c7ac0259c223` | `confirmed_fatal` (`other`) | The title and final step falsely called `2^43` the first graph order above `2^42`. They now identify it as the next power-of-two graph order above the threshold. |
| `lem-property-star-and-leaf-reducibility-yield-five-comb-outcomes` | `da6ed717c5e8f3faf08d590b8c93739bbbdcfa8592e6563ba3f3106be2018f6a` | `1489d80723fb269951310628a29b8632fdd480add6aef9f7f211425f2d0f57ff` | `confirmed_fatal` (`dependency_citation`) | L1 omitted the hypotheses `ell,w >= 4` from property `(*)`. The restatement now retains them; step 4.1 already proves both before L1 is used. |
| `thm-morse-functions-are-dense-by-relative-jet-transversality` | `9a4defcffd249242dc6bf70fb338ebca434de8a176d04e4a348d887d70c000c1` | `b05e30e768b0b3205c51439c1a6fd766251a650b69c5dd273057a5c71fdb1fb4` | `confirmed_fatal` (`logic`) | Step 1.1 used a fixed `C^{n+1}` shell bound, which need not dominate the derivative order imposed by an arbitrary strong neighbourhood on that shell. The repair chooses a varying finite order `r_n >= n+1` and tolerance on every shell, with `r_n` dominating all local strong-neighbourhood constraints there. |
| `thm-property-star-and-leaf-reducibility-imply-generalized-niceness` | `8222c3b78dee335e6e8eb763f1484eed3e3adbfa766c59b4679fb67aa0da92d9` | `a3702dde75a432dfd0572544cb57cf71771ce720f174dcf4d119b7be0d50e980` | `false_positive` | The published blockade definition explicitly allows a real lower bound `ell` and defines it by integral actual length `t >= ell`, equivalently `t >= ceil(ell)`. Thus L3's `(epsilon^{-1},w)` and the dependency's `(ceil(epsilon^{-1}),w)` are exactly synonymous, and step 7 is licensed. No content or contract record changed. |

All six rows were appended exactly once to
`research/frontier-30-judge-adjudications.jsonl` with the pre-edit guard hashes
shown above. Every fatal row uses one of the required broad `defect_type`
values.

## Licensed repairs and closure targets

The current post-repair guard hashes are:

- `def-property-star-for-a-finite-family`:
  `620a53276d7a55d476d698b224ca2b588d777b73480fcacb40d383c581977a26`.
- `ex-a-four-tooth-comb-with-a-special-vertex-triggers-property-star`:
  `4e78e6f4358ee61c23fcc046c05476ddb9dc75377321adb4c3eb58cc41bb03ab`.
- `ex-the-lemma-three-five-parameter-choice-on-a-large-graph`:
  `95e094796b2e58d664489d97dd38dab7fdf022a1b6cfd886e6202050efe64ce0`.
- `lem-property-star-and-leaf-reducibility-yield-five-comb-outcomes`:
  `24776de3671baefb8de156e530cab5085d5ee372fbbc43529cae89d1664ebd78`.
- `thm-morse-functions-are-dense-by-relative-jet-transversality`:
  `ecac0a7cc4014071389d0a73be39b0ad7a449a054a64a19c879c82de336ebc20`.

Rejudge targets: none. The durable cycle receipt records two frozen contexts
for each of the six handled items. The five repaired fatal items have therefore
exhausted the two-context budget and are terminal-adjudication targets; a third
judge cycle is not permitted. This dispatch initiated neither a judge cycle nor
terminal adjudication.

## Documentary synchronization

- Regenerated the three repaired proof-bearing batch-14 contract entries.
- Regenerated the repaired Morse theorem's batch-18 contract entry.
- Rebuilt the merged proof contract from the twenty current batch contracts.
- Appended the five fatal defects through the locked
  `tools/defect-ledger.mjs append` interface, which also refreshed the generated
  defect-ledger view.

## Sources consulted

- Chris Wendl, *Functional Analysis* lecture notes,
  <https://www.mathematik.hu-berlin.de/~wendl/Winter2020/FunkAna/lecturenotes.pdf>.
  The discussion of the strong (also called very strong) `C-infinity`
  topology permits a locally finite cover with an independently chosen finite
  derivative order on each member, with no global bound on those orders. This
  confirms the Morse rejection and supports the varying `r_n` repair.
- Morris W. Hirsch, *Differential Topology*, Chapter 2, Section 1,
  <https://webhomes.maths.ed.ac.uk/~v1ranick/papers/hirschdx.pdf>. The strong
  topology is described by locally finite chart/compact families with
  independently chosen positive tolerances. This supports converting a chosen
  strong neighbourhood into shellwise smallness constraints.
- Marco Gualtieri, *Topology I: Smooth Manifolds, Part 10*,
  <https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes-10.pdf>.
  The parametric transversality theorem and its relative cutoff construction
  support the finite-dimensional perturbation and protected-neighbourhood
  parts of the repaired Morse proof.

The other five decisions are settled by literal contradictions or exact
equivalences in the current item and dependency files; no external
mathematical claim was needed for them.

## Cross-group alerts

None. There were no incoming alerts, and the rejection checks exposed no
defect in another group's item. No row was written to
`research/frontier-30-step8-cross-group.jsonl`.

## Checks

- Exact tuple join: six distinct current tuples, each with exactly one
  adjudication; five fatal and one false positive.
- Repair integrity: all five fatal items changed from their recorded pre-edit
  guard hashes; the false-positive item retained its exact guard hash.
- Focused precheck: four repaired proof-bearing items passed in stored phase
  form.
- Focused render check: all five repaired files passed YAML, wikilink,
  delimiter, and KaTeX validation.
- Scoped content policy: 38 batch-14/batch-18 items, zero errors and zero
  warnings.
- Strict proof contracts: 3/3 repaired batch-14 entries and 1/1 repaired
  batch-18 entry passed with zero errors and warnings.
- Citation fidelity: 97 citations over 35 proof-bearing owned items; no missing
  quote and no widening candidate.
- Boundary audit: 280 rows over the two owned batch contracts; no template
  reuse or contradicted disposition detected.
- Risk-review gate: 17/17 batch-14 and 18/18 batch-18 proof-bearing items
  routed with zero errors.
- Dependency check: no cycles, unresolved references, or draft item on a
  published page; 433 standing repository warnings remained.
- Defect-ledger validation: 511 current Frontier-30 rows checked with zero
  schema errors at validation time.
- Required Step-8 scope check: seven groups and 694 items partitioned, 17
  other-group open rejections routed at check time, and zero cross-group
  alerts.
- Required Step-8 guard: all 176 whole-run changes were licensed by an exact
  confirmed-fatal adjudication or another allowed repair path.

## Blockers

No group-g mathematical, ownership, alert, contract, ledger, or focused-check
blocker remains. Terminal adjudication of the five twice-rejected repaired
items, closure refresh, and stage transition remain engine-owned.
