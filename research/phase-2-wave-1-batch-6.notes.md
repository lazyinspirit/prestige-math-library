# phase-2-wave-1 · beta batch 6 · blocker-resolution notes

Status: **direct Hall–Mal’cev/Bass–Guivarc’h mathematical and source objections resolved; full 2,540-ID transitive semantic audit not certified.**

Date: 2026-09-08. Scope: the Hall–Mal’cev Coordinates and Bass–Guivarc’h Growth A/B pair only. The engine remains paused. No published item/page, canonical plan/ledger, library file, or engine state was edited.

## Inventory and direct proof chain

The inventory remains 26 items: 19 on A and seven on B. No item identity, statement scope, addition, or deletion occurred in this blocker-resolution pass.

The direct chain is now source-read and locally reproducible:

- finite generation of subgroups, the finite characteristic torsion subgroup, and the torsion-free quotient are proved before coordinates;
- integral central-refinement coordinates are kept distinct from mixed lower-central coordinates;
- the mixed alphabet retains bounded representatives for finite cyclic factors and explicit carries to deeper ambient lower-central layers;
- weighted collection uses ambient weights throughout, handles inverse letters and basis replacements, records its phase recurrence, and terminates because errors strictly increase depth;
- last-central-term compression supplies the reverse distortion inequality without claiming arbitrary lower-central factors are undistorted;
- word-ball/coordinate-box inclusions are proved in both directions before lattice counting;
- the final Bass–Guivarc’h conclusion is two-sided polynomial growth with degree `D=Σ i·rank(γ_i/γ_{i+1})`, including finite groups with D=0, not an unsupported exact leading coefficient.

The corrected 837-page Druţu–Kapovich edition is authoritative for the collection route. The 585-page draft's claim that torsion-free G has torsion-free lower-central quotients is false. The revised Remark 13.83(2) supplies the Heisenberg-subgroup counterexample, and Lemma 14.21 retains torsion carries. The manifest never makes the rejected implication.

## Source dispositions

Coverage has 56 dispositions across three full-text sources:

- Löh, complete 266-page lecture notes: the nilpotent growth statement and surrounding polynomial-growth material were read; where the general Bass proof is omitted, the source is not treated as proof evidence.
- Druţu–Kapovich, 585-page draft: complete relevant torsion and last-central-term compression proofs were read, while the defective lower-central quotient/collection passage is explicitly rejected.
- Druţu–Kapovich, corrected 837-page edition: Theorems 13.63–13.64, Proposition 13.65, Lemma 13.69, Corollary 13.70, Remark 13.83, Lemmas 14.17 and 14.21, Propositions 14.20 and 14.25, and Theorem 14.26 were read through the needed proofs. These cover finite torsion, torsion-free quotient, corrected collection/carries, weighted boxes and the two growth inequalities.

The former **BG-FETCH** objection is stale and resolved. All three current coverage URLs have real body hashes and page counts, and source-fetch verification passes. No source was deleted or substituted merely to clear a gate.

## Exact remaining blocker

**BG-CLOSURE remains open.** The prior structural traversal resolved 2,540 ordinary dependency IDs with no missing IDs or ordinary cycles, but it did not semantically reread all 2,540 inherited statements, hypotheses, proofs and historical interface variants. The direct 26-item proof chain and its published interfaces are useful bounded progress; they do not certify that stronger obligation. Genuine inherited published-proof defects and central-ledger repairs remain Phase 3 work and were not closed here.

## Readiness boundary

The local 26-item scaffold and its source locators are ready for independent review and authoring. This is not a splice, publication, complete transitive closure, or Phase-3 certification. `BG-CLOSURE` is the exact remaining blocker to any stronger readiness claim.

## Step-3 fix pass

### BG-CLOSURE — confirmed fatal; open

The Alpha-a verdict correctly rejects the prior structural traversal as a
semantic closure audit. It resolved 2,540 IDs and found no ordinary missing-ID
or cycle error, but it did not read and record each inherited statement,
hypothesis, direction, convention, axiom strength, and actual proof use. I
rechecked the local 19-A/7-B proof order and its direct sources only: the
commutator convention, finite torsion reduction, torsion-carry coordinates,
ambient-weight collection, last-term compression, two-sided coordinate boxes,
and the two-sided Bass--Guivarc'h estimate are coherent, but none makes a
proof-by-proof certification of the inherited closure. The finding therefore
remains fatal and the consumer remains blocked.

Changed records: the A-page manifest now carries this disposition without
changing an item, dependency array, or inventory; coverage status and blockers
now state the unresolved audit explicitly. No new A/B pair is proposed because
the missing work is an audit of existing suppliers, not a missing mathematical
claim.

### BG-PLAN-A-ONLY — confirmed fatal; protected plan repair required

The live `research/plan-spec.json` path is exactly
`hall-malcev-coordinates-and-bass-guivarch-growth ->
cayley-graphs-word-metrics-and-quasi-isometry ->
applications-of-the-fundamental-group-examples`. The terminal supplier is a B
page, so it cannot support this A-page consumer. This is not repaired by the
batch's own direct requirements: they already match the BG list in the binding
design. The defect is the inherited Cayley header.

`research/plan-group-theory-track.md` §30.2 specifies the required existing
A-only replacement for that Cayley page:
`free-groups-and-presentations`, `metric-spaces`,
`graphs-walks-and-connectivity`, `trees-forests-and-spanning-trees`,
`semidirect-products-and-automorphism-groups`,
`completeness-and-uniform-continuity`, and `limits-of-real-functions`.
No new pair is needed. This batch is not authorized to edit the shared plan or
published header, so the consumer remains blocked until the authorized
plan/prose-scaffold writer installs that exact replacement and the resulting
closure is rechecked.

Changed records: the A-page manifest and coverage now retain the exact path,
binding replacement, owner boundary, and fatal status. The owned same-frontier
dependency input remains `[]`: this inherited supplier is not another Wave-1
batch. The three active direct source records and all 56 harvested
dispositions are unchanged; the issue is structural, not source availability
or mathematical scope.

### Checks run after this pass

- A current depth-first `requires` traversal from the BG A page reached 106
  pages and exactly one B supplier:
  `hall-malcev-coordinates-and-bass-guivarch-growth ->
  cayley-graphs-word-metrics-and-quasi-isometry ->
  applications-of-the-fundamental-group-examples`.
- `node tools/coverage-checklist.mjs
  research/phase-2-wave-1-batch-6.coverage.json --require-destination`:
  1 page, 56 harvested results, 0 errors, 1 pre-existing low-yield warning
  (20/56 included). The warning is not a disposition failure and is retained
  for Alpha review.
- `node tools/manifest-deps.mjs
  research/phase-2-wave-1-batch-*.pages.json`: 434 items, 0 normalized,
  0 errors.
- `node tools/content-policy.mjs research/phase-2-wave-1-batch-*.pages.json
  --manifest-only`: 434 scoped items, 0 errors, 0 warnings.
- `node tools/validate-plan.mjs research/plan-spec.json`: exit 0. It reports
  syntactic ordering/identity consistency but, as expected, does not reject
  the inherited B page in the `requires` closure; the targeted traversal above
  is the evidence for `BG-PLAN-A-ONLY`.
- `node tools/extcheck.mjs --quiet`: exit 0, with the repository's 63 existing
  recorded-not-proved warnings and no hard error. This does not certify the
  missing semantic audit.
- `node tools/source-fetch-check.mjs --coverage
  research/phase-2-wave-1-batch-6.coverage.json --stamp`: 3/3 fetch-verified,
  0 newly stamped, 0 documented drops.
- `node tools/frontier-dependency-ledger.mjs refresh --run phase-2-wave-1`:
  refreshed and deduplicated. No cross-batch row was added because no item,
  page, well-definedness, or load-bearing-forward dependency enters another
  Wave-1 batch.

## Scaffold-fix round

Date: 2026-09-08. Dispatch: `scaffold-fix-1-b6`. The only supplied closure
finding for this batch is `BG-CLOSURE`.

### BG-CLOSURE — confirmed fatal; open

**Disposition.** The finding cannot be rebutted or closed within batch-local
authority. The direct 19-A/7-B Hall--Mal'cev proof route remains coherent and
its source evidence remains current, but the inherited supplier closure has
both protected concrete defects and no complete semantic audit.

**Current evidence.** A fresh traversal of `research/plan-spec.json` reaches
105 pages including the unmaterialized BG root, 104 realized published supplier
pages, and zero B pages. The former B-edge objection is therefore stale.
However, the live Cayley A page now requires
`applications-of-the-fundamental-group`, `graphs-walks-and-connectivity`,
`trees-forests-and-spanning-trees`, and
`semidirect-products-and-automorphism-groups`. This still conflicts with the
exact list in `research/plan-group-theory-track.md` section 30.2:
`free-groups-and-presentations`, `metric-spaces`,
`graphs-walks-and-connectivity`, `trees-forests-and-spanning-trees`,
`semidirect-products-and-automorphism-groups`,
`completeness-and-uniform-continuity`, and `limits-of-real-functions`.
Substituting the binding list in a read-only traversal reduces the BG page
closure from 105 pages to 61; this batch is not authorized to synchronize the
shared plan or prose scaffold.

The 104 realized current suppliers list 2,565 distinct published items. Their
ordinary `deps` closure has 2,572 distinct published items, no unresolved ID,
no ordinary dependency cycle, and no recorded-not-proved item. Seven targets
escape the declared page closure, all on `darboux-lhopital-and-taylor`:
`def-higher-derivatives-and-smoothness`,
`def-taylor-polynomial-and-remainder`,
`lem-taylor-polynomial-derivatives`,
`lem-cauchy-mean-value-quotient-form`,
`thm-taylor-schlomilch-roche-remainder`,
`cor-taylor-lagrange-and-cauchy-remainders`, and
`cor-taylor-remainder-bound`. They enter through the published
`def-taylor-and-maclaurin-series` and
`thm-taylor-series-representation-by-remainder` on
`power-series-and-real-analytic-functions`. The exact current page path is
`hall-malcev-coordinates-and-bass-guivarch-growth ->
cayley-graphs-word-metrics-and-quasi-isometry ->
applications-of-the-fundamental-group ->
the-complex-exponential-and-eulers-formula ->
sine-cosine-and-the-definition-of-pi -> the-exponential-function ->
power-series-and-real-analytic-functions`. Applying the binding Cayley list
removes that branch from the BG closure. If the current Cayley list is retained,
an authorized writer must declare and audit the Darboux supplier instead.

Two already-confirmed published defects are also inherited. First,
`def-dependent-choice` is still homed on order-120
`compactness-in-metric-spaces` and uses the real-valued `def-sequence` to type
an arbitrary function from the naturals to a set. Second,
`thm-equivalent-characterizations-of-noetherian-modules` lies on the direct
path `BG -> modules-over-a-pid-and-canonical-forms ->
chain-conditions-and-semisimple-modules`; its statement, Facts block, and proof
use dependent choice while its `deps` array contains only
`def-noetherian-module`. The existing Phase-3 repair is to type DC through
`def-function`, rehome it immediately after `def-countable-choice`, and declare
it on the Noetherian theorem. These published files are read-only here.

**Change.** The batch manifest and coverage now replace the stale claim that a
B page remains in the live closure with the current census, the unresolved
Cayley design/plan conflict, the seven-item page-closure escape, and the two
published DC defects. No item, page, item inventory, dependency array, source,
locator, result disposition, shared plan, published file, or cross-batch input
was changed. No new A/B pair is required: every identified supplier already
exists.

**Remaining blocker.** The authorized central writer must reconcile the Cayley
requirements (and, if the current branch is retained, the Darboux page edge),
then the published-content owner must complete the DC definition/home and
Noetherian dependency repairs. Only the resulting closure can receive the
required item-by-item audit of statements, hypotheses, directions,
conventions, axiom strength, proofs, and actual uses. The consumer remains
blocked until those protected repairs and that audit are complete.

### Checks run in this round

- JSON parse for the batch manifest, coverage, and cross-batch input: pass.
- Batch `coverage-checklist --require-destination`: 1 page, 56 harvested
  results, 0 errors, 1 retained low-yield warning (20/56 scaffolded).
- Whole-run `manifest-deps`: 434 items, 0 normalized, 0 errors.
- Whole-run manifest-only `content-policy`: 434 items, 0 errors, 0 warnings.
- `validate-plan research/plan-spec.json`: exit 0; 1,616 pages, declared page
  order acyclic, and no item-level cycle, forward-reference error, B-page
  dependency, or unresolved ID among the 892 pages with item lists. Its 719
  empty planned inventories and disk/plan omissions do not certify the actual
  published item closure audited above.
- `extcheck --plan research/plan-spec.json`: exit 0; 15,416 items, 161
  recorded-not-proved items, and 63 existing warnings for results resting on
  them. The targeted ordinary-dependency traversal found none of those
  recorded items in BG's current 2,572-item closure.
- `source-fetch-check --coverage ...batch-6.coverage.json --stamp`: 3/3
  sources fetch-verified, 0 newly stamped, 0 documented drops.
- Strict `source-backing` against `phase-2-wave-1-url-liveness.json`: all 18
  authored results remain backed by an openable source or documented
  alternative.
- `frontier-dependency-ledger refresh --run phase-2-wave-1`: refreshed and
  deduplicated. Batch 6 remains `[]` because this round changed no page/item
  dependency and found no dependency on another Wave-1 batch.

## Scaffold-fix round

Dispatch: `scaffold-fix-2-b6`. This round addresses both current `work[]`
findings for `hall-malcev-coordinates-and-bass-guivarch-growth`. It supersedes
the preceding round's 105-page/Taylor account: the live Cayley cutover is now
present, and the current BG closure has 61 pages.

### BG-NOETHERIAN-CONSUMERS — partially resolved; two protected repairs remain

**Disposition and evidence.** The first reported defect was repaired
concurrently by the published-content owner during this round; the other two
remain in the current published files.

- Resolved: `thm-chain-conditions-in-short-exact-sequences` now proves the
  Noetherian extension direction directly from finite generators of `L ∩ N`
  and the image of `L`, chooses only finitely many lifts, and explicitly
  depends on `lem-finite-choice`. Stacks Project, Lemma 10.5.3 (Tag 0517),
  gives this exact finite-generation lifting argument; Arvind Nair,
  *Lectures on Algebra*, pp. 40–41, Lemma 4, gives the short-exact
  Noetherian/Artinian result. These sources are audit evidence only, not newly
  harvested batch-6 results.
- `thm-composition-series-iff-noetherian-and-artinian` declares DC only in its
  prose statement, omits `def-dependent-choice` from `deps`, and applies DC to
  a proper-maximal-successor relation that has no successor at zero. Its
  forward proof also turns ACC into Noetherianity through the supplier's
  DC-dependent direction. The exact repair is to prove simple factors
  finitely generated (a nonzero element generates a simple module), use the
  repaired short-exact theorem inductively, add the existing
  `def-dependent-choice`, and make zero a self-successor before applying DC.
  Nair, pp. 40–41, Lemma 5, independently gives finite length iff Noetherian and
  Artinian; formalizing its continuing-choice step requires the stated local
  DC contract.
- `thm-principal-ideal-domains-are-unique-factorisation-domains` has an
  unconditional Statement/Given/dependency list but explicitly obtains a
  maximal principal ideal through the DC-costed maximal-condition
  characterization. Stacks Project, Lemmas 10.120.13 (Tag 034V) and 10.120.6
  (Tag 0AFT), confirm the standard Noetherian/atomic route but do not discharge
  this library's explicit choice-accounting obligation. The published owner
  must either declare the existing DC dependency and audit its propagation or
  install and audit a choice-free proof; this batch does not claim that DC is
  mathematically necessary.

The owned path into the last defect is
`thm-bass-guivarch-growth-degree-formula-with-proof ->
lem-weighted-coordinate-boxes-give-matching-growth-bounds ->
thm-last-lower-central-term-has-exact-weighted-distortion ->
lem-weighted-collection-in-lower-central-coordinates ->
lem-hall-malcev-finite-collection-alphabets-include-torsion-carries ->
lem-finite-lower-central-coordinate-systems-exist ->
lem-hall-malcev-torsion-is-a-finite-characteristic-subgroup ->
lem-hall-malcev-subgroups-of-finitely-generated-nilpotent-groups-are-finitely-generated
-> cor-submodules-of-finite-free-pid-modules ->
thm-simultaneous-basis-theorem-for-pid-submodules ->
lem-maximal-divisor-pivot-for-pid-submodules ->
thm-principal-ideal-domains-are-unique-factorisation-domains`.
Keith Conrad, *Modules over a PID*, Theorems 2.1–2.2, pp. 1–2, gives an
independent coordinate-projection induction for the finite-free submodule
result, but substituting that proof would not remove the existing page-level
PID supplier or authorize a batch-local edit to the published proof.

**Change.** Batch-local manifest and coverage metadata now record these exact
defects, repairs, and dependency path. No published item, item statement,
dependency array, inventory, source record, shared plan, or page requirement
was changed.

**Remaining blocker.** The published-content owner must apply and review the
composition-series and PID-to-UFD repairs. The consumer remains blocked
meanwhile.

### BG-CLOSURE — confirmed fatal; open

**Disposition and evidence.** A fresh traversal of the current plan reaches 61
pages including the unmaterialized BG root and 60 published A suppliers, with
no B page or missing page ID. The 60 published inventories plus the proposed
19 A items seed 1,577 distinct IDs; ordinary `deps` close on the same 1,577,
with no unresolved or recorded-not-proved item. This is a structural census,
not the contract's semantic certificate. A proof-by-proof certificate cannot
be issued while the two known published interfaces above remain defective;
doing so would certify statements and axiom scopes already shown inadequate.

**Change.** The manifest and coverage now replace the superseded 105-page
census with the live 61-page/1,577-item evidence and preserve the fatal
semantic-audit blocker. No new prerequisite A/B pair is required: all exact
repairs use existing earlier local interfaces, including the existing
`def-dependent-choice` where choice is retained.

**Remaining blocker.** After the protected consumer repairs, the resulting
closure still requires a complete audit of every statement, hypothesis,
direction, convention, axiom strength, proof, and actual use. Until both stages
are complete, `BG-CLOSURE` remains fatal and the pair is unpublishable.

### Checks run in this round

- JSON parse of the owned manifest, coverage, and cross-batch dependency file:
  pass. The batch-6 cross-batch file remains `[]`; no frontier refresh was
  needed because no page or item dependency changed.
- Fresh disk-backed closure traversal: 61 planned pages including the root, 60
  published suppliers, 0 B pages, 0 missing pages, and no page cycle. Published
  page frontmatter inventories plus the 19 proposed A items seed 1,577 item
  IDs; ordinary `deps` reach exactly those 1,577, with 0 unresolved IDs, 0 item
  cycles, 0 out-of-page homes, 0 recorded-not-proved items, and 0 items homed on
  `deferred-set-theory-beyond-choice`.
- `node tools/coverage-checklist.mjs
  research/phase-2-wave-1-batch-6.coverage.json --require-destination`: 1 page,
  56 harvested results, 0 errors, and the retained low-yield warning (20/56
  scaffolded).
- `node tools/manifest-deps.mjs
  research/phase-2-wave-1-batch-*.pages.json`: 434 items, 0 normalized, 0
  errors.
- `node tools/content-policy.mjs --manifest-only
  research/phase-2-wave-1-batch-*.pages.json`: 434 scoped items, 0 errors, 0
  warnings.
- `node tools/validate-plan.mjs research/plan-spec.json`: exit 0; declared page
  order acyclic, with no item cycle, forward-reference error, B-page
  dependency, or unresolved ID among the 892 pages carrying item lists. The
  reported 719 empty planned inventories are why this general check is not the
  semantic BG certificate.
- `node tools/extcheck.mjs --plan research/plan-spec.json`: exit 0; 15,416
  items, 161 recorded-not-proved items, and 63 existing warnings. The targeted
  BG traversal reaches none of those recorded items.
- `node tools/source-fetch-check.mjs --coverage
  research/phase-2-wave-1-batch-6.coverage.json --stamp`: 3/3 fetch-verified,
  0 newly stamped, 0 documented drops.
- Strict `node tools/source-backing.mjs` against
  `research/phase-2-wave-1-url-liveness.json`: all 18 authored results remain
  backed by an openable verified source or documented alternative.

### Local owner repair after the round-2 writer completed

The current coverage status supersedes the historical page-wide blocking
conclusions above; independent verdicts are unchanged. Added
`lem-hall-malcev-integer-abelian-structure-and-rank` before its consumers.
Finite coordinate induction and integer Euclidean reduction replace all
generic PID classification, submodule and free-rank imports. Hom(-,Q) proves
rank uniqueness and finite-kernel invariance locally. The finite-kernel
factor argument now identifies its kernel as an image of F intersect gamma_i,
without the former unsupported embedding assertion.

The revised pair has 20 A items and 7 B items. Its 254-node declared closure
does not reach the cited PID-to-UFD or composition-series defects. This is
not a semantic certificate. Conrad and Brussel full relevant proofs were
read; all five coverage sources are fetch-verified, including the two added
sources. Coverage has zero errors and one low-yield warning for review.
The shared consumer ledger and group-theory prose scaffold record this route.


## Final adjudication — scaffold-final-a-dd56d4fd02dbb1cd

BG accepted with the current local integer-abelian lemma, finite torsion and mixed-coordinate collection route. No batch-6 manifest was changed. The complete current proof-use audit, source locators, exact owner decisions needed, checks, and Phase-3 supplier/consumer repair strategies are in research/phase-2-wave-1-alpha-a-recheck.md. This supersedes earlier page-wide blocking conclusions. Published consumer debt remains open; no published proof was edited. Current owned cross-batch input remains [] after declared and implicit proof-use reconciliation.

## Step-5 authoring

Current dispatch: author-batch-6. Latest Alpha-a verdict is sufficient; historical blocking sections above are retained as history. Own 20 A items and 7 B items. No missing dispatch inputs; proof contracts absent initially and created here. No scope reduction is authorized or proposed. Canonical plan preserves the assigned A/B pair and requirements; prose inventory is shorter than the accepted 27-item manifest, whose additional commutator/torsion suppliers and counterexample are retained. Checks pending.

### Checkpoint `lem-hall-malcev-integer-abelian-structure-and-rank`

Claim/conventions: Every subgroup of $\mathbb Z^n$ is free of rank at most $n$. Every subgroup of a finitely generated abelian group is finitely generated. Every finitely generated abelian group $M$ has a decomposition $M\cong\mathbb Z^r\oplus\bigoplus_{j=1}^t\mathbb Z/d_j\mathbb Z$, where $d_j>1$. Its torsion subgroup is precisely the finite summand, and $r$ is intrinsic. A surjection between finitely generated abelian groups with finite kernel preserves $r$. Empty sums and $n=0$ are allowed.

Sources: Keith Conrad, Modules over a PID — Theorem 2.2, pp.2–3; finite coordinate induction specialized to Z; Michael Brussel, Finitely Generated Modules over a PID — Theorem 1.0.1, p.3; Theorem 2.1.2, pp.4–5, Euclidean branch; section 3.2, p.8. Rank invariance via Hom(-,Q) is proved locally..
Dependencies: lem-subgroups-of-z-are-cyclic, thm-division-algorithm-in-z, thm-well-ordering-principle, thm-first-isomorphism-theorem-groups, thm-rat-field, cor-independent-set-is-no-larger-than-a-finite-spanning-set, prop-abelian-groups-are-z-modules.
Decision: Conrad Theorem 2.2 supports the finite projection splitting; Brussel Theorem 2.1.2 supports integer pivot descent. Both passages were read in full. Rank invariance is derived here using Hom(-,Q); no general PID factorization, maximal ideal, or choice axiom is used. Completed argument and step/citation/boundary mapping written; structural checks pending. No known local gap at this checkpoint. Next: next assigned item, then batch checks.

### Checkpoint `lem-hall-malcev-commutator-product-identities`

Claim/conventions: Use $[x,y]=xyx^{-1}y^{-1}$ and ${}^u v=uvu^{-1}$. Then $[x,yz]=[x,y]{}^y[x,z]$ and $[xy,z]={}^x[y,z][x,z]$. Whenever the relevant commutators are central, these pairings are multiplicative in both variables and $[x^a,y^b]=[x,y]^{ab}$ for all $a,b\in\mathbb Z$. Define $[x_1,\ldots,x_k]=[[x_1,\ldots,x_{k-1}],x_k]$, with $[x_1]=x_1$.

Sources: Druţu–Kapovich, Lectures on Geometric Group Theory (585-page draft) — Lemma 10.25 and Notation 10.26, printed p.281.
Dependencies: def-subgroup-commutator-and-lower-central-series.
Decision: The source product identities are expanded here in the fixed convention, including zero and negative exponents. Completed argument and step/citation/boundary mapping written; structural checks pending. No known local gap at this checkpoint. Next: next assigned item, then batch checks.

### Checkpoint `lem-hall-malcev-three-subgroup-containment`

Claim/conventions: For normal subgroups $A,B,C\trianglelefteq G$, $[[A,B],C]\le [[B,C],A]\,[[C,A],B]$.

Sources: Druţu–Kapovich, Lectures on Geometric Group Theory (585-page draft) — Lemmas 10.41, 10.43 and Corollary 10.44, printed p.286.
Dependencies: lem-hall-malcev-commutator-product-identities.
Decision: Hall identity and subgroup extension correspond to draft Lemmas 10.41 and 10.43 and Corollary 10.44. The actual cancellation and extension to all subgroup elements are supplied locally. Completed argument and step/citation/boundary mapping written; structural checks pending. No known local gap at this checkpoint. Next: next assigned item, then batch checks.

### Checkpoint `lem-hall-malcev-lower-central-commutators-add-weights`

Claim/conventions: For every group $G$ and $i,j\ge1$, $[\gamma_i(G),\gamma_j(G)]\le\gamma_{i+j}(G)$. The rule $(x\gamma_{i+1},y\gamma_{j+1})\mapsto[x,y]\gamma_{i+j+1}$ is a well-defined biadditive map between the abelian lower-central factors.

Sources: Druţu–Kapovich, Lectures on Geometric Group Theory (585-page draft) — Proposition 10.45, printed p.286, with Lemma 10.25.
Dependencies: lem-hall-malcev-three-subgroup-containment, lem-hall-malcev-commutator-product-identities.
Decision: Uniform induction follows draft Proposition 10.45. Representative independence and negative-input rules are derived explicitly. Completed argument and step/citation/boundary mapping written; structural checks pending. No known local gap at this checkpoint. Next: next assigned item, then batch checks.

### Checkpoint `lem-lower-central-quotients-of-finitely-generated-nilpotent-groups-are-finitely-generated-abelian`

Claim/conventions: If a group $G$ is generated by a finite set $S$, then $\gamma_i/\gamma_{i+1}$ is abelian and generated by images of the finitely many left-nested $i$-fold commutators in $S$ (with inverses allowed). If $G$ is nilpotent, each $\gamma_i$ is finitely generated.

Sources: Druţu–Kapovich, Lectures on Geometric Group Theory (585-page draft) — Lemma 10.31 and Corollary 10.32, printed pp.282–283.
Dependencies: lem-hall-malcev-commutator-product-identities, lem-hall-malcev-lower-central-commutators-add-weights, def-finitely-generated-group, thm-upper-and-lower-central-characterizations-of-nilpotence.
Decision: Draft Lemma 10.31 and Corollary 10.32 are proved by finite commutator expansion and finite extension lifting. No torsion-freeness is inferred. Completed argument and step/citation/boundary mapping written; structural checks pending. No known local gap at this checkpoint. Next: next assigned item, then batch checks.

### Checkpoint `lem-hall-malcev-subgroups-of-finitely-generated-nilpotent-groups-are-finitely-generated`

Claim/conventions: Every subgroup $K$ of a finitely generated nilpotent group $G$ is finitely generated.

Sources: Druţu–Kapovich, Lectures on Geometric Group Theory (585-page draft) — Theorem 10.40, printed p.285.
Dependencies: lem-lower-central-quotients-of-finitely-generated-nilpotent-groups-are-finitely-generated-abelian, lem-hall-malcev-integer-abelian-structure-and-rank, prop-abelian-groups-are-z-modules.
Decision: Draft Theorem 10.40 is realized by the intersection series, using the local integer lemma rather than generic PID results. Completed argument and step/citation/boundary mapping written; structural checks pending. No known local gap at this checkpoint. Next: next assigned item, then batch checks.

### Checkpoint `lem-hall-malcev-torsion-is-a-finite-characteristic-subgroup`

Claim/conventions: For finitely generated nilpotent $G$, the finite-order elements form a finite characteristic subgroup $T(G)$. The quotient $G/T(G)$ is torsion-free and nilpotent.

Sources: Druţu–Kapovich, Lectures on Geometric Group Theory (585-page draft) — Lemma 10.46, Theorem 10.47, Proposition 10.48, Corollaries 10.49 and 10.52, printed pp.287–288.
Dependencies: lem-hall-malcev-subgroups-of-finitely-generated-nilpotent-groups-are-finitely-generated, lem-hall-malcev-lower-central-commutators-add-weights, lem-hall-malcev-commutator-product-identities, thm-subgroups-quotients-and-finite-products-of-nilpotent-groups, lem-lower-central-quotients-of-finitely-generated-nilpotent-groups-are-finitely-generated-abelian.
Decision: Draft Lemma 10.46 is used only in class at least two, with its smaller-class bound proved here. Theorems 10.47–10.49 and Corollary 10.52 are expanded; finite torsion uses direct finite exponent counting. Completed argument and step/citation/boundary mapping written; structural checks pending. No known local gap at this checkpoint. Next: next assigned item, then batch checks.

### Checkpoint `lem-hall-malcev-upper-central-factors-are-torsion-free`

Claim/conventions: If a nilpotent group $G$ has torsion-free center, all upper-central factors $Z_{i+1}(G)/Z_i(G)$ are torsion-free, and $G$ is torsion-free. Here $Z_0=1$ and $Z_{i+1}/Z_i=Z(G/Z_i)$.

Sources: Druţu–Kapovich, Lectures on Geometric Group Theory (585-page draft) — Lemma 10.51, printed p.288.
Dependencies: lem-hall-malcev-commutator-product-identities, thm-upper-and-lower-central-characterizations-of-nilpotence.
Decision: Draft Lemma 10.51 supplies the detection argument; the printed ascending-index slips are corrected explicitly. Completed argument and step/citation/boundary mapping written; structural checks pending. No known local gap at this checkpoint. Next: next assigned item, then batch checks.

### Checkpoint `lem-hall-malcev-integral-coordinates-from-a-central-cyclic-refinement`

Claim/conventions: A finitely generated torsion-free nilpotent group has a finite central series with infinite cyclic nontrivial factors. Ordered lifts along its descending version $G=H_0\trianglerighteq\cdots\trianglerighteq H_m=1$, with $H_{j-1}/H_j=\langle u_jH_j\rangle\cong\mathbb Z$, give a bijection $\mathbb Z^m\to G$, $(a_1,\ldots,a_m)\mapsto u_1^{a_1}\cdots u_m^{a_m}$.

Sources: Druţu–Kapovich, Lectures on Geometric Group Theory (585-page draft) — Lemma 10.51, printed p.288; central-factor refinement derived locally.
Dependencies: lem-hall-malcev-upper-central-factors-are-torsion-free, lem-hall-malcev-subgroups-of-finitely-generated-nilpotent-groups-are-finitely-generated, lem-hall-malcev-integer-abelian-structure-and-rank.
Decision: Central refinement follows the upper-center argument in draft Lemma 10.51. These integral coordinates are not assigned unisolated lower-central weights. Completed argument and step/citation/boundary mapping written; structural checks pending. No known local gap at this checkpoint. Next: next assigned item, then batch checks.

### Checkpoint `def-bass-guivarch-dimension`

Claim/conventions: For a finitely generated nilpotent group $G$ of class $c$, let $r_i$ be the number of infinite cyclic summands in $\gamma_i(G)/\gamma_{i+1}(G)$. These factors are finitely generated abelian by [[lem-lower-central-quotients-of-finitely-generated-nilpotent-groups-are-finitely-generated-abelian]], and the number is intrinsic by [[lem-hall-malcev-integer-abelian-structure-and-rank]]. Equivalently $r_i=\dim_{\mathbb Q}\operatorname{Hom}(\gamma_i/\gamma_{i+1},(\mathbb Q,+))$.

Define the **Bass–Guivarc'h dimension** and the **nilpotent Hirsch length** by
$$D(G)=\sum_{i=1}^c i r_i,\qquad h(G)=\sum_{i=1}^c r_i.$$
For $G=1$, use $c=0$ and empty sums equal to zero. Inserting trailing trivial factors does not change either sum. These definitions concern nilpotent groups only.

Sources: Druţu–Kapovich, Geometric Group Theory (837-page edition) — Definition 13.46, printed p.474.
Dependencies: lem-lower-central-quotients-of-finitely-generated-nilpotent-groups-are-finitely-generated-abelian, lem-hall-malcev-integer-abelian-structure-and-rank.
Decision: Revised Definition 13.46 supplies the weighted and unweighted sums; the local integer lemma supplies well-defined ranks. Completed argument and step/citation/boundary mapping written; structural checks pending. No known local gap at this checkpoint. Next: next assigned item, then batch checks.

### Checkpoint `def-lower-central-generators-and-weighted-coordinate-length`

Claim/conventions: Let $G$ be finitely generated nilpotent with $\gamma_{c+1}=1$. Choose, in each finitely generated abelian factor $\gamma_i/\gamma_{i+1}$, an ordered cyclic decomposition, and lift its generators to elements $u_{ij}\in\gamma_i$. Infinite cyclic factors use exponents $a_{ij}\in\mathbb Z$; a finite cyclic factor of order $d_{ij}>1$ uses $a_{ij}\in\{0,\ldots,d_{ij}-1\}$. All factors exist by [[lem-lower-central-quotients-of-finitely-generated-nilpotent-groups-are-finitely-generated-abelian]] and [[lem-hall-malcev-integer-abelian-structure-and-rank]]. Order products by increasing $i$, then increasing $j$. Assign $u_{ij}$ weight $i$.

For a normalized tuple $a$, its **integer weighted coordinate length** is the least integer $R\ge0$ such that $|a_{ij}|\le R^i$ on every infinite factor and $R\ge1$ whenever a residue coordinate is nonzero. The zero tuple has length zero. For real $R\ge1$ let $Q(R)$ consist of all ordered products with $|a_{ij}|\le\lfloor R^i\rfloor$ on infinite factors and every allowed finite residue. The number of infinite coordinates in layer $i$ is $r_i$ of [[def-bass-guivarch-dimension]]. Unique parametrization of group elements is justified by [[lem-finite-lower-central-coordinate-systems-exist]].

For any finite labelled alphabet whose weight-$i$ letters represent elements of $\gamma_i$, a word has **weighted word counts** $(N_1,\ldots,N_c)$ if it has $N_i$ letters of assigned weight $i$; inverse letters retain that weight. These are counts before normalization, distinct from coordinate exponents and from the minimal ordinary word length of [[def-word-length-with-respect-to-a-generating-set]]. Identity letters may be deleted. An lcs generating alphabet means its letters of weights at least $i$ generate $\gamma_i$.

Integral coordinates from a central cyclic refinement and mixed lower-central coordinates are different constructions. Even in a torsion-free group, finite cyclic lower-central factors must keep their residue coordinates. For a group with torsion, use $G/T(G)$ before invoking a torsion-free integral model; keep finite kernel representatives when lifting back.

Sources: Druţu–Kapovich, Geometric Group Theory (837-page edition) — Definitions 14.18–14.19 and Proposition 14.25, printed pp.504–505,510–511.
Dependencies: lem-lower-central-quotients-of-finitely-generated-nilpotent-groups-are-finitely-generated-abelian, def-bass-guivarch-dimension, def-word-length-with-respect-to-a-generating-set, lem-hall-malcev-integer-abelian-structure-and-rank.
Decision: Revised Definitions 14.18–14.19 provide lcs alphabets and weighted word counts. The mixed tuple conventions match Proposition 14.25. Completed argument and step/citation/boundary mapping written; structural checks pending. No known local gap at this checkpoint. Next: next assigned item, then batch checks.

### Checkpoint `lem-hall-malcev-finite-normal-quotients-preserve-lower-central-ranks`

Claim/conventions: If $F$ is finite normal in a finitely generated nilpotent group $G$, then $D(G/F)=D(G)$ and $h(G/F)=h(G)$. If $G$ has class $c\ge1$ and $H=\gamma_c(G)$, its quotient has the same factors in layers $i<c$, so $D(G/H)=D(G)-cr_c$.

Sources: Druţu–Kapovich, Geometric Group Theory (837-page edition) — Theorem 14.26 reduction, printed p.511; the exact rank verification is supplied locally.
Dependencies: lem-lower-central-quotients-of-finitely-generated-nilpotent-groups-are-finitely-generated-abelian, def-bass-guivarch-dimension, thm-subgroups-quotients-and-finite-products-of-nilpotent-groups, lem-hall-malcev-integer-abelian-structure-and-rank.
Decision: Revised Theorem 14.26 motivates the reduction. The finite factor kernel is proved as an image of F intersect gamma_i, not incorrectly as a subgroup of F. Completed argument and step/citation/boundary mapping written; structural checks pending. No known local gap at this checkpoint. Next: next assigned item, then batch checks.

### Checkpoint `lem-growth-is-unchanged-by-quotienting-a-finite-normal-subgroup`

Claim/conventions: For a finite generating set $S$ of a group $G$, finite normal $F$, and $q:G\to G/F$, one has $|B_{qS}(n)|\le |B_S(n)|\le |F|\,|B_{qS}(n)|$ for every integer $n\ge0$. Balls use generators and their inverses.

Sources: Druţu–Kapovich, Geometric Group Theory (837-page edition) — Theorem 14.26 finite-kernel reduction, printed p.511; direct fiber-count proof.
Dependencies: def-word-length-with-respect-to-a-generating-set, lem-word-length-is-well-defined-and-satisfies-the-length-laws, prop-word-metric-balls-are-finite-exactly-when-the-generating-set-is-finite.
Decision: The finite-quotient growth reduction in revised Theorem 14.26 is replaced by exact ball images and finite fiber cardinalities. No later quasi-isometry invariance theorem is used. Completed argument and step/citation/boundary mapping written; structural checks pending. No known local gap at this checkpoint. Next: next assigned item, then batch checks.

### Checkpoint `lem-finite-lower-central-coordinate-systems-exist`

Claim/conventions: For every finitely generated nilpotent $G$, $Q=G/T(G)$ has integral coordinates along a central cyclic refinement. Separately, both $Q$ and $G$ have unique mixed lower-central ordered coordinates: each infinite factor uses an integer exponent, and each order-$d$ finite factor uses one residue $0\le a<d$. There are exactly $r_i$ unbounded exponents of weight $i$. All choices needed are finite.

Sources: Druţu–Kapovich, Geometric Group Theory (837-page edition) — Proposition 14.25, pp.510–511, and Remark 13.83, p.484.
Dependencies: def-lower-central-generators-and-weighted-coordinate-length, lem-hall-malcev-torsion-is-a-finite-characteristic-subgroup, lem-hall-malcev-integral-coordinates-from-a-central-cyclic-refinement, lem-hall-malcev-finite-normal-quotients-preserve-lower-central-ranks, lem-hall-malcev-integer-abelian-structure-and-rank.
Decision: Revised Proposition 14.25 supports the mixed normal form. The finite-torsion quotient is formed before using integral central-refinement coordinates; torsion in lower-central factors is retained. Completed argument and step/citation/boundary mapping written; structural checks pending. No known local gap at this checkpoint. Next: next assigned item, then batch checks.

### Checkpoint `lem-hall-malcev-finite-collection-alphabets-include-torsion-carries`

Claim/conventions: A finite lower-central generating alphabet in a finitely generated nilpotent group can be enlarged to a finite alphabet closed under commutators and finite-order carries: if $x\in\gamma_i\setminus\gamma_{i+1}$ has order $d<\infty$ modulo $\gamma_{i+1}$, then $x^d$ is included (unless it is $1$). Inverses are included. Every letter has its ambient lower-central depth, and changes to the chosen cyclic-factor lists have fixed finite replacement words.

Sources: Druţu–Kapovich, Geometric Group Theory (837-page edition) — Lemma 14.17, pp.503–504.
Dependencies: lem-finite-lower-central-coordinate-systems-exist, lem-hall-malcev-lower-central-commutators-add-weights.
Decision: Revised Lemma 14.17 supplies the finite closure construction. Fixed cyclic-basis replacements and inverse letters are explicitly retained. Completed argument and step/citation/boundary mapping written; structural checks pending. No known local gap at this checkpoint. Next: next assigned item, then batch checks.

### Checkpoint `lem-weighted-collection-in-lower-central-coordinates`

Claim/conventions: Fix a finitely generated nilpotent group $G$ of class $c$, a mixed lower-central coordinate system, and a finite alphabet of letters assigned weight $i$ only if their values lie in $\gamma_i(G)$. For every $\lambda\ge1$ there is $C$ such that, for $R\ge1$, a word with at most $\lambda R^i$ letters of each weight $i$ has normalized free coordinates in layer $j$ bounded in absolute value by $CR^j$, with canonical bounded residues in finite factors. If its value lies in $\gamma_k$, all earlier coordinates vanish. In particular a word of ordinary length $n$ has free coordinate bounds $C\max(1,n)^j$. Constants depend on the fixed alphabets, coordinate system and $\lambda$, not on the word or $R$.

Sources: Druţu–Kapovich, Geometric Group Theory (837-page edition) — Lemma 14.21 and Proposition 14.25, pp.505–508,510–511; retain the last-layer conclusion only from part II.
Dependencies: lem-hall-malcev-finite-collection-alphabets-include-torsion-carries, lem-hall-malcev-commutator-product-identities, lem-hall-malcev-lower-central-commutators-add-weights, lem-finite-lower-central-coordinate-systems-exist.
Decision: Revised Lemma 14.21 supplies collection by extraction. The recurrence is proved here using cumulative ambient-depth counts for arbitrary layer i. Carries are delayed until a generator is fully extracted, so their contribution is explicitly bounded. No change to promised scope. Completed argument and step/citation/boundary mapping written; structural checks pending. No known local gap at this checkpoint. Next: next assigned item, then batch checks.

### Checkpoint `lem-hall-malcev-powers-in-the-last-central-term-have-short-words`

Claim/conventions: If $G$ is finitely generated nilpotent of class $c\ge1$, then for every fixed $z\in\gamma_c(G)$ and finite generating set $S$ there is $C_z$ such that $|z^m|_S\le C_z|m|^{1/c}$ for every nonzero integer $m$. Also $z^0=1$.

Sources: Druţu–Kapovich, Lectures on Geometric Group Theory (585-page draft) — Lemma 12.38, pp.321–322.
Dependencies: lem-lower-central-quotients-of-finitely-generated-nilpotent-groups-are-finitely-generated-abelian, lem-hall-malcev-commutator-product-identities, lem-word-length-is-well-defined-and-satisfies-the-length-laws, thm-subgroups-quotients-and-finite-products-of-nilpotent-groups.
Decision: Draft Lemma 12.38 is expanded with quotient class degeneracy, zero remainder, signs and fixed-element constants. Centrality is the exact reason lifting errors disappear. Completed argument and step/citation/boundary mapping written; structural checks pending. No known local gap at this checkpoint. Next: next assigned item, then batch checks.

### Checkpoint `thm-last-lower-central-term-has-exact-weighted-distortion`

Claim/conventions: Let $G$ be finitely generated nilpotent of class $c\ge1$, and $H=\gamma_c(G)$. For fixed finite word metrics on $G$ and $H$, there is $C\ge1$ with $C^{-1}|h|_H^{1/c}-C\le |h|_G\le C|h|_H^{1/c}+C$ for every $h\in H$. If $H$ is infinite, $\Delta(n)=\max\{|h|_H:h\in H,\ |h|_G\le n\}$ lies between positive multiples of $n^c$ for all sufficiently large integers n. If $H$ is finite, $\Delta$ is bounded.

Sources: Druţu–Kapovich, Geometric Group Theory (837-page edition) — Proposition 14.20 and Lemma 14.21, printed pp.504–508 (finite last terms handled separately locally); Druţu–Kapovich, Lectures on Geometric Group Theory (585-page draft) — Corollary 12.39, printed pp.322–323.
Dependencies: lem-weighted-collection-in-lower-central-coordinates, lem-hall-malcev-powers-in-the-last-central-term-have-short-words, lem-hall-malcev-integer-abelian-structure-and-rank, lem-word-length-is-well-defined-and-satisfies-the-length-laws.
Decision: Revised Proposition 14.20 and draft Corollary 12.39 supply the two routes. The infinite-H hypothesis is necessary for positive-power distortion growth; finite H is handled separately. Completed argument and step/citation/boundary mapping written; structural checks pending. No known local gap at this checkpoint. Next: next assigned item, then batch checks.

### Checkpoint `lem-weighted-coordinate-boxes-give-matching-growth-bounds`

Claim/conventions: For a fixed mixed lower-central coordinate system of a finitely generated nilpotent group G and fixed finite generating set S, there exist a,b>0 such that $Q(an)\subseteq B_S(n)\subseteq Q(bn)$ for all sufficiently large integers n. For real R>=1, $|Q(R)|=\prod_{i=1}^c(2\lfloor R^i\rfloor+1)^{r_i}\prod_{i,j:\ d_{ij}<\infty}d_{ij}$. Consequently $|B_S(n)|$ is between positive multiples of $n^{D(G)}$.

Sources: Druţu–Kapovich, Geometric Group Theory (837-page edition) — Proposition 14.25 and Theorem 14.26, pp.510–512; two-sided box inclusion proved by the stated local induction.
Dependencies: lem-finite-lower-central-coordinate-systems-exist, lem-weighted-collection-in-lower-central-coordinates, thm-last-lower-central-term-has-exact-weighted-distortion, def-bass-guivarch-dimension, lem-growth-is-unchanged-by-quotienting-a-finite-normal-subgroup, lem-hall-malcev-finite-normal-quotients-preserve-lower-central-ranks.
Decision: Revised Proposition 14.25 provides controlled normal forms. The converse inclusion is proved locally by quotient lifting and a compressed central correction; uniqueness, not redundant alphabets, justifies counting. Completed argument and step/citation/boundary mapping written; structural checks pending. No known local gap at this checkpoint. Next: next assigned item, then batch checks.

### Checkpoint `thm-bass-guivarch-growth-degree-formula-with-proof`

Claim/conventions: For every finitely generated nilpotent group G and finite generating set S, there are constants $0<c_S\le C_S$ with $c_S n^{D(G)}\le|B_S(n)|\le C_S n^{D(G)}$ for every integer n>=1. This includes finite groups, for which D=0. The polynomial degree is independent of S; no exact leading coefficient or limit is asserted.

Sources: Druţu–Kapovich, Geometric Group Theory (837-page edition) — Theorem 14.26, pp.511–512; independent statement check: Löh Theorem 5.3.6, printed p.140.
Dependencies: lem-weighted-coordinate-boxes-give-matching-growth-bounds, def-bass-guivarch-dimension, lem-growth-is-unchanged-by-quotienting-a-finite-normal-subgroup, lem-hall-malcev-finite-normal-quotients-preserve-lower-central-ranks, thm-two-finite-generating-sets-of-a-group-give-bilipschitz-equivalent-word-metrics, thm-last-lower-central-term-has-exact-weighted-distortion, lem-hall-malcev-integer-abelian-structure-and-rank.
Decision: Revised Theorem 14.26 is matched by both coordinate-box proof and explicit class-induction fiber counting. Löh Theorem 5.3.6 is independent statement backing only, since its general proof is omitted. Completed argument and step/citation/boundary mapping written; structural checks pending. No known local gap at this checkpoint. Next: next assigned item, then batch checks.

### Checkpoint `ex-bass-dimension-of-a-free-abelian-group`

Claim/conventions: For $G=\mathbb Z^d$ with $d\ge0$, $D(G)=d$. Standard word balls have size bounded above and below by positive multiples of $n^d$ for n>=1.

Sources: Druţu–Kapovich, Geometric Group Theory (837-page edition) — Theorem 14.26 abelian base, p.511.
Dependencies: thm-bass-guivarch-growth-degree-formula-with-proof, def-bass-guivarch-dimension.
Decision: Revised Theorem 14.26 abelian base is accompanied here by the explicit lattice interval calculation. Completed argument and step/citation/boundary mapping written; structural checks pending. No known local gap at this checkpoint. Next: next assigned item, then batch checks.

### Checkpoint `ex-bass-dimension-of-the-discrete-heisenberg-group`

Claim/conventions: Let $H=\operatorname{UT}_3(\mathbb Z)$, writing $(a,b,c)$ for the matrix with entries a at (1,2), b at (2,3), and c at (1,3). Then $\gamma_2(H)=\{(0,0,c):c\in\mathbb Z\}$, $\gamma_3(H)=1$, $r_1=2$, $r_2=1$, and $D(H)=4$. Its word balls for any finite generating set have degree four.

Sources: Druţu–Kapovich, Lectures on Geometric Group Theory (585-page draft) — Exercise 10.30, p.282; Example 5.3.7 in Löh.
Dependencies: thm-bass-guivarch-growth-degree-formula-with-proof, def-bass-guivarch-dimension.
Decision: Draft Exercise 10.30 and Löh Example 5.3.7 support the example; the matrix law, normal form and both lower-central inclusions are calculated here. Completed argument and step/citation/boundary mapping written; structural checks pending. No known local gap at this checkpoint. Next: next assigned item, then batch checks.

### Checkpoint `ex-central-distortion-in-the-discrete-heisenberg-group`

Claim/conventions: In the integer Heisenberg group with horizontal generators x,y and central z=[x,y], $\sqrt{|m|}\le |z^m|_{x,y}\le8\sqrt{|m|}$ for every nonzero integer m, and $|z^0|=0$. Therefore the distortion of the center is quadratic.

Sources: Druţu–Kapovich, Lectures on Geometric Group Theory (585-page draft) — Corollary 12.39, pp.322–323; Heisenberg specialization.
Dependencies: ex-bass-dimension-of-the-discrete-heisenberg-group, thm-last-lower-central-term-has-exact-weighted-distortion.
Decision: Draft Corollary 12.39 is specialized to a directly calculated rectangular commutator word; the lower estimate is obtained from the prefix matrix recurrence. Completed argument and step/citation/boundary mapping written; structural checks pending. No known local gap at this checkpoint. Next: next assigned item, then batch checks.

### Checkpoint `ex-bass-dimension-of-unitriangular-four-by-four-integers`

Claim/conventions: For $G=\operatorname{UT}_4(\mathbb Z)$, the subgroup $\gamma_i(G)$ consists of matrices whose superdiagonals of distance less than i vanish. The successive free ranks are 3,2,1, giving h=6 and D=10, and every finite word metric has degree-ten ball growth.

Sources: Druţu–Kapovich, Lectures on Geometric Group Theory (585-page draft) — Exercise 10.30, p.282, specialized to n=4 and Z.
Dependencies: thm-bass-guivarch-growth-degree-formula-with-proof, lem-hall-malcev-lower-central-commutators-add-weights, def-bass-guivarch-dimension.
Decision: Draft Exercise 10.30 is specialized to integer 4-by-4 matrices, with both subgroup inclusions and the six-entry normal form calculated. Completed argument and step/citation/boundary mapping written; structural checks pending. No known local gap at this checkpoint. Next: next assigned item, then batch checks.

### Checkpoint `ex-hirsch-length-and-growth-degree-need-not-agree`

Claim/conventions: The nilpotent Hirsch length and growth degree need not agree: for the integer Heisenberg group H, h(H)=3 and D(H)=4; for $\operatorname{UT}_4(\mathbb Z)$, h=6 and D=10.

Sources: Druţu–Kapovich, Geometric Group Theory (837-page edition) — Definition 13.46, p.474.
Dependencies: ex-bass-dimension-of-the-discrete-heisenberg-group, ex-bass-dimension-of-unitriangular-four-by-four-integers, def-bass-guivarch-dimension.
Decision: Revised Definition 13.46 supplies the distinction between the two sums; actual factor calculations are cited at their uses. Completed argument and step/citation/boundary mapping written; structural checks pending. No known local gap at this checkpoint. Next: next assigned item, then batch checks.

### Checkpoint `cex-counting-every-lower-central-generator-with-weight-one`

Claim/conventions: The claim that every independent lower-central coordinate in every word ball of a finitely generated nilpotent group has range bounded linearly in the radius is false. Counting all such coordinates with weight one can therefore give the wrong polynomial degree.

Sources: Druţu–Kapovich, Lectures on Geometric Group Theory (585-page draft) — Corollary 12.39 and Theorem 12.48, pp.322–323,328–329.
Dependencies: ex-bass-dimension-of-the-discrete-heisenberg-group, ex-central-distortion-in-the-discrete-heisenberg-group.
Decision: Draft Corollary 12.39 supplies the central compression phenomenon. The actual refutation uses a concrete commutator word and quantifies against every possible linear constant. Completed argument and step/citation/boundary mapping written; structural checks pending. No known local gap at this checkpoint. Next: next assigned item, then batch checks.

### Checkpoint `cex-torsion-free-nilpotent-group-with-torsion-in-abelianization`

Claim/conventions: Torsion-free nilpotent groups can have torsion in their lower-central factors. For each fixed integer p>=2, the subgroup $G=\{(a,pb,c):a,b,c\in\mathbb Z\}$ of the integer Heisenberg group is torsion-free and has $G/[G,G]\cong\mathbb Z^2\oplus\mathbb Z/p\mathbb Z$.

Sources: Druţu–Kapovich, Geometric Group Theory (837-page edition) — Remark 13.83(2), p.484.
Dependencies: ex-bass-dimension-of-the-discrete-heisenberg-group, lem-finite-lower-central-coordinate-systems-exist.
Decision: Revised Remark 13.83(2) supplies this family. The subgroup, torsion-free power calculation, exact commutator subgroup and quotient map are all verified locally. Completed argument and step/citation/boundary mapping written; structural checks pending. No known local gap at this checkpoint. Next: next assigned item, then batch checks.

Both assigned pages are now written at their canonical group-theory paths with all 27 stable item IDs. Every item has a completed local argument or definition and a contract. No items are generated-statement dependencies; all statements retain ai-altered provenance, proofs ai-altered except definitions not-applicable. No judge stamps existed on these new files. Required checks now follow.

### Step-5 final completion and checks

Completed all 27 assigned item IDs listed in the checkpoints above (20 A, 7 B), with both pages: `hall-malcev-coordinates-and-bass-guivarch-growth` and `hall-malcev-coordinates-and-bass-guivarch-growth-examples`. Final content is at `library/group-theory/<page.id>.md`. The manifest inventory is unchanged; direct dependency additions are only exact uses of earlier owned items. The coordinate definition uses `justified_by: [lem-finite-lower-central-coordinate-systems-exist]`, not a cyclic deps edge. Consumer-batch input was atomically reconciled to `[]` and the unified ledger refreshed. No other-batch, published-content, plan, or workflow-state file was authored.

Final mathematical details: Hall cancellation uses the repository commutator convention. Collection tracks cumulative ambient-depth counts with U_j(l+1)<=U_j(l)+U_(j-i)(l), proved per extraction, and reduces finite residues only after collecting each generator, bounding every carry explicitly. Quotient lifting plus this collection bound and central compression prove the reverse box inclusion. Heisenberg verification uses the explicit uniform bound sqrt(|m|)<=|z^m|<=12sqrt(|m|); its quadratic-distortion constants are 1/288 and 1 for n>=18. The full center is identified explicitly by commutation with x and y. Both directions of lower-central membership in the mixed coordinates are recorded in the existence lemma. The final canonical phase numbers are those in the items/contracts; early checkpoint step labels and provisional Heisenberg constants are superseded by these final files.

Checks actually run:

- `node tools/tsx-run.mjs tools/precheck.mts` with every one of the 27 explicit manifest item paths: final pass, 25 proof-bearing items checked, 0 failures; the two definitions have no proof-format body. Initial phase repairs were adopted, including canonical grouping/reordering, with contract references synchronized.
- Bare `node tools/validate-plan.mjs`: returned usage, exit 2, because this executable requires a plan path. The completed invocation `node tools/validate-plan.mjs research/plan-spec.json` passed, exit 0. Its global warning output includes unrelated redundant prerequisites and planned inventories not yet materialized; these are not batch-owned failures and do not certify mathematics.
- `node tools/content-policy.mjs research/phase-2-wave-1-batch-6.pages.json`: final pass, 27 scoped items, 0 errors, 0 warnings. Initial compact/indentless YAML declarations were rewritten to canonical block provenance/sources and flow dependency arrays.
- `node tools/proof-contract.mjs research/phase-2-wave-1-batch-6.proof-contracts.json --strict`: final pass, 27/27 items, 0 errors, 0 warnings. Every actual numbered step is mapped once, with exact local source-statement excerpts and uses; all eight boundary fields are item-specific. The initial omitted in-prose step reference was repaired.
- `node tools/rendercheck.mjs` with all 27 items and both page paths: final pass, 29 files, including real KaTeX and renderer YAML parsing. Nested commutator brackets were spaced to prevent wikilink interpretation, and one replacement-induced delimiter defect was repaired.
- Read-only inventory reconciliation: all 27 item dependency arrays and the well-definedness edge match the manifest; both page inventories match; all owned files are draft and direct suppliers resolve.
- `node tools/frontier-dependency-ledger.mjs refresh --run phase-2-wave-1`: passed after dependency edits and final consumer-input reconciliation.

Provenance: all 27 statements retain the accepted `ai-altered` provenance. The 25 supplied arguments are `ai-altered`; the two definitions are `not-applicable`. No generated statements, recorded-unproved substitutes, source drops, new AC assumptions, judge records, or audit attestations were introduced. Only successful mechanical precheck status is recorded. Exact author-hosted passages were recovered/read: DK draft 10.25–10.26, 10.30–10.32, 10.40–10.52 and 12.38–12.39; revised Definition 13.46, Remark 13.83(2), Lemma 14.17, Definitions 14.18–14.19, Lemma 14.21 and concluding Proposition 14.20 proof, Proposition 14.25, and Theorem 14.26; Conrad Theorem 2.2 pp.2–3; Brussel Theorem 2.1.2 Euclidean branch pp.4–5 and section 3.2 p.8; Löh Theorem 5.3.6 and Example 5.3.7 p.140. The two DK editions are one treatment. Löh is statement support only, with its own reference URL now recorded on the relevant theorem/example. The known false draft assertion about torsion-free lower-central quotients is not used.

Unresolved mathematical or scope obligations: none identified in the assigned local arguments. No narrowing, removal, new prerequisite pair, or plan restructuring is proposed. Historical published-consumer/closure debt remains under the latest Alpha adjudication and is not claimed resolved by these format checks. This is completed Step-5 draft authoring, not independent review or publication.
