# frontier-19 reader-1

## Fatal findings

- Subject: `cor-primitivity-is-equivalent-to-maximality-of-a-point-stabilizer`
  Location: item Statement/Proof
  Defect: `missing-hypothesis`
  Severity: fatal
  Evidence: the original claim failed on the one-point transitive action, where the action is primitive but the point stabilizer is all of `G`, not a maximal proper subgroup. Repaired by adding `|\Omega| > 1`, proving properness of `G_\alpha`, and updating the proof contract and batch metadata.

- Subject: `cor-doubly-transitive-actions-are-exactly-the-rank-two-transitive-actions`
  Location: item Statement/Proof
  Defect: `missing-hypothesis`
  Severity: fatal
  Evidence: with the library's current `2`-transitivity definition, the one-point action is vacuously doubly transitive but has rank `1`, not `2`. Repaired by adding the `|\Omega| > 1` hypothesis and updating the supporting contract and batch metadata.

- Subject: `def-growth-comparison-and-growth-type`
  Location: item Definition
  Defect: `ill-formed`
  Severity: fatal
  Evidence: `f,g` were declared on `\mathbb N`, but the comparison clause used `g(Cn+C)` for an arbitrary real constant `C`, which is not type-correct. Repaired by requiring `C \in \mathbb N`, then propagating the repair through `lem-growth-comparison-is-a-preorder`, `thm-growth-type-is-independent-of-the-finite-generating-set`, and `thm-growth-type-is-a-quasi-isometry-invariant-of-finitely-generated-groups`, with proof-contract updates.

## Nonfatal findings

- Subject: `thm-svarc-milnor-lemma`
  Location: item Proof
  Defect: proof-step gap
  Severity: nonfatal
  Evidence: the original proof established upper and lower control plus coarse density, but did not actually construct a coarse Lipschitz quasi-inverse despite the cited definition of quasi-isometry requiring one. Repaired by choosing coarse nearest orbit points and proving the quasi-inverse bounds explicitly.

- Subject: `fs-cobounded-and-cocompact-are-unconditionally-identical`
  Location: item Facts & Assumptions
  Defect: `ill-formed`
  Severity: nonfatal
  Evidence: the refutation used `cocompact` without any local meaning. Repaired by stating in the item that `cocompact` means compact orbit space.

- Subject: `thm-transitive-imprimitive-groups-embed-in-an-imprimitive-wreath-product`
  Location: item title
  Defect: `overstrong-title-or-statement`
  Severity: nonfatal
  Evidence: the item's Statement proves an embedding only after quotienting by the action kernel, with faithful actions as the special case. Repaired by retitling the item to match the proved claim and synchronizing batch metadata.

## Edits made

- `items/cor-primitivity-is-equivalent-to-maximality-of-a-point-stabilizer.md`: added the missing `|\Omega| > 1` hypothesis, corrected the title, and repaired the proof.
- `items/cor-doubly-transitive-actions-are-exactly-the-rank-two-transitive-actions.md`: added the missing `|\Omega| > 1` hypothesis, corrected the title, and repaired the forward direction.
- `items/def-growth-comparison-and-growth-type.md`: changed the comparison constant from an arbitrary real to a natural number.
- `items/lem-growth-comparison-is-a-preorder.md`: updated the preorder proof to the natural-number comparison constant.
- `items/thm-growth-type-is-independent-of-the-finite-generating-set.md`: repaired the growth-comparison proof so every radius input remains in `\mathbb N`.
- `items/thm-growth-type-is-a-quasi-isometry-invariant-of-finitely-generated-groups.md`: repaired the comparison proof with integerized constants and finite fiber bounds.
- `items/thm-svarc-milnor-lemma.md`: added the explicit coarse Lipschitz quasi-inverse construction required by the cited quasi-isometry definition.
- `items/fs-cobounded-and-cocompact-are-unconditionally-identical.md`: added the local meaning of `cocompact`.
- `items/thm-transitive-imprimitive-groups-embed-in-an-imprimitive-wreath-product.md`: narrowed the title to the kernel-modulo embedding claim actually proved.
- `research/frontier-19-batch-1.pages.json`: synchronized repaired item titles in the batch manifest.
- `research/frontier-19-batch-1.proof-contracts.json`: updated repaired derivations, boundary notes, and changed dependency quotes.
- `research/frontier-19-batch-1.coverage.json`: synchronized repaired item titles.
- `research/frontier-19-batch-1.notes.md`: synchronized repaired item titles.

No assigned A-page prose needed repair. No stale `verification.judge` blocks were present on the edited draft items.

## Coverage

- Item files opened: `106`
- Page files opened: `7`
- Blocker: none

## Page verdicts

- `blocks-primitivity-and-multiple-transitivity`: pass after repairing the two fatal one-point boundary defects.
- `blocks-primitivity-and-multiple-transitivity-examples`: pass.
- `geometric-actions-svarc-milnor-and-growth`: pass after repairing the growth-comparison typing defect and the Svarc-Milnor quasi-inverse gap.
- `geometric-actions-svarc-milnor-and-growth-examples`: pass after the local cocompactness clarification.
