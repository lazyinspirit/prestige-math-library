# Batch 12 — Galois orbits and descent

Date: 2026-09-08.

Status: **the 5/3 scaffold is mathematically and source-read complete. The
sole Step-3 shared-plan finding is resolved in the current plan; no
batch-local prerequisite repair remains.**

## Mathematical closure

No item was added or removed. The proof route is the central-idempotent route:

1. finite Galois descent identifies a semilinear space or algebra with scalar
   extension of its fixed points;
2. Galois permutes primitive central idempotents of the split algebra, and each
   orbit sum descends to a central idempotent of `A`;
3. a nontrivial central decomposition downstairs would split that orbit sum
   upstairs, so the descended idempotent is primitive;
4. Wedderburn–Artin gives one simple `A`-module class in each block;
5. after scalar extension, its constituents are exactly one Galois orbit.
   Twisting makes their multiplicities equal, and the regular block shows that
   the common multiplicity is a positive integer.

This does not assume multiplicity one. It keeps the twist convention exact:
`{}^sigma({}^tau W)={}^(sigma tau)W`.

The `C_3` example diagonalizes the displayed rational matrix after extension
to `Q(zeta)`. For `Q_8`, the idempotent `(1-z)/2` cuts out the Hamilton
division algebra; its positive norm proves division, and explicit matrices over
`Q(i)` split it as `M_2(Q(i))`. Scalar extension of the regular
division-module block is two copies of the degree-two simple module, yielding
the stable-character/multiplicity-two counterexample.

## Sources read

- Zheng, *Lectures on Algebra*, complete Theorem 3.8.1 proof pp.132–133,
  Wedderburn–Artin pp.117–118, Hamilton quaternion norm Example 3.7.4(3),
  and Proposition 4.3.2 with proof pp.145–146.
- Wiese, *Galois Representations*, 2.2.7–2.2.12 including the complete
  Krull–Schmidt proof of Proposition 2.2.11, and the cited §2.5
  realizability/Schur-index boundary.

Both PDFs are fetch-verified; the former DNS blocker is resolved.

Historical dependency variants are comparison evidence only. Every direct
interface used by these eight items was checked. No published or central file
was edited.

## Step-3 fix pass

### Fatal shared dependency finding (Alpha group `d` Step-3 review; no separate numerical finding ID was assigned)

- **Disposition:** resolved by an external shared-plan change; no batch-local
  item, page, or prerequisite pair was needed or added.
- **Evidence:** the current `plan-spec.json` has all four prescribed A-for-B
  substitutions: `algebraic-closure-embeddings-and-separability` requires
  `algebraic-extensions-degree-and-finite-fields`;
  `the-galois-correspondence` requires
  `algebraic-closure-embeddings-and-separability`;
  `finite-fields-and-cyclotomic-extensions` requires
  `the-galois-correspondence`; and
  `solvability-by-radicals-and-kummer-theory` requires
  `finite-fields-and-cyclotomic-extensions`. A fresh traversal from this A
  page reaches 69 pages and zero B pages, including both branches identified
  in the verdict.
- **Changed record:** `batch-12.coverage.json` now records the resolution in
  `dependency_audit`. The batch manifest is unchanged: its five direct
  prerequisites are A pages, all eight items retain explicit backward `deps`,
  and the B page remains a leaf. No cross-batch dependency was introduced; the
  owned cross-batch input remains the required empty array.
- **Source evidence:** Zheng §§3.2–3.3, 3.8, and 4.3 and Wiese §§2.2 and 2.5
  remain the two active full-text treatments. Their stored full-text stamps
  check 2/2, with no source drop or replacement.
- **Remaining blocker:** none in batch 12. The earlier review’s plan repair is
  now present; later stages must still use the current plan rather than the
  historical insufficiency verdict.

Checks run in this pass: batch coverage checklist (0 errors; reviewed 12/40
low-yield warning), source-fetch check (2/2), batch manifest-only content
policy (8 items, 0 errors), whole-run manifest-deps (434 items, 0 errors),
`validate-plan`, and `extcheck` (the repository’s existing 63 published
recorded-result notices remain outside this batch’s closure).


## Final adjudication — scaffold-final-d-39b8e7c7f70f07ef

This section supersedes earlier current-status assertions. See `research/phase-2-wave-1-alpha-d-recheck.md` for the complete current proof audit, source readings, scope dispositions and checks. The 5-A/3-B pair is repaired with confidence 1. The classification theorem now proves finite-group semisimplicity inline by finite basis projection, invertibility of group order, averaging and strict-dimension induction. Its dependency on `cor-group-algebra-is-semisimple-when-char-k-does-not-divide-group-order` was removed because its complete mathematical use was replaced. Added earlier dependency IDs and Zheng Theorem 4.1.6 coverage are explicit in the manifest/coverage. No batch-2 lemma is used implicitly.

Phase-3 debt for canonical-ledger reconciliation: `items/thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order.md` A1/A2 need `lem-characteristic-divisibility-and-invertibility-of-a-natural-scalar-in-a-field` and `lem-finite-dimensional-subspace-admits-a-linear-projection-without-choice`, already planned in batch 2. Its consumer `items/cor-finite-dimensional-representations-are-completely-reducible-when-char-k-does-not-divide-group-order.md` needs explicit strict dimension descent via `thm-dimension-of-a-linear-subspace` clause 2 and `thm-strong-induction`; then recheck `items/cor-group-algebra-is-semisimple-when-char-k-does-not-divide-group-order.md`. This formerly load-bearing chain no longer supplies the owned proof. The canonical ledger already contains the two batch-2-to-Maschke edges; these notes supply the exact affected clauses and induction strategy. Published files remain unchanged.

## Step-5 authoring

### Checkpoint: definition and fixed-point lemma

Authored `def-semilinear-galois-action-on-a-scalar-extended-algebra` and
`lem-galois-fixed-points-recover-a-finite-dimensional-scalar-extension`.
Inverse pullback changes the scalar structure; transported matrices are
sigma(rho(a)), proved in the definition. Tensor balancing is over F.
The lemma proves the trace-dual identity, invariant spanning, minimal-relation
injectivity, both directions of canonical fixedness, and algebra/unit
compatibility. Zero and E=F cases are explicit. No dependency edits yet.
Read every direct external dependency statement from current items. Sources
reopened on the web and complete relevant local PDF passages read: Zheng
117–118, 125, 132–133, 139, 145–146; Wiese 28–30, 34, 37–41, 70.
Wiese Remark 2.2.8(iv)'s inverse-matrix wording is not adopted; the draft's
formula is independently calculated from its scalar action. No source is
dropped. Checks pending; next: orbit idempotents, primitive blocks, classification.

### Checkpoint: orbit sums and primitive blocks

Authored `lem-galois-orbit-sums-of-split-central-idempotents-descend` and
`lem-a-descended-galois-orbit-idempotent-is-primitive`. All central idempotents
upstairs are unique subset sums; both support/twist directions are checked.
Descent reflects centrality by testing every commutator. A nonempty invariant
subset of one orbit is the entire orbit, which proves primitivity. Conversely
products with the complete orbit family recover every primitive idempotent.
The matrix-unit calculation proves simplicity of each ring block, with finite
F-dimension proving Artinianity; the endomorphism orientation is D^op.
Sources: Zheng 3.2.1, 3.2.3, 3.3.2, Warning 3.3.3(1), 3.8.1 (117–118,
132–133). Zero algebra and singleton cases explicit. Checks pending. Next:
classification and the inline averaging specialization; make direct finite-
dimension dependencies explicit where the completed proof uses them.

### Checkpoint: classification theorem

Authored `thm-galois-orbits-classify-simple-modules-after-splitting-base-change`.
The proof constructs each matrix-unit module decomposition, compares the
extended regular block to n copies of E tensor S, and uses Jordan–Hölder
only for finite simple decompositions. Canonical semilinear maps give the
common positive multiplicity, without assuming one. Intrinsic support proves
both bijection directions. The finite-group specialization constructs P and Q,
checks equivariance and splitting, and proves finite complete reducibility by
strict-dimension induction before applying the splitting-field endomorphism
hypothesis. No existence of E is asserted. Sources: Zheng 4.3.2 and 4.1.6;
Wiese 2.2.9–2.2.12. Direct semisimple-ring definition will be added to deps;
no same-frontier supplier is used. Checks pending. Next: C3, Q8 and obstruction.

### Checkpoint: C3 and Q8 examples

Authored `ex-galois-descent-for-the-two-nontrivial-characters-of-c-three`:
M^2 and M^3, eigenvectors (1,-lambda), irreducibility, rational central
idempotent, evaluation kernel and whole split algebra all computed. Traces
are 2,-1,-1. Sources: Zheng 3.8.2 and Wiese 2.2.12, specialized locally.
Authored `ex-the-rational-simple-block-of-the-quaternion-group`: disjoint
pairs prove the rational block basis, the norm supplies an explicit inverse,
I,U,V,UV give the full matrix algebra over Q(i), the complementary sign
matrix splits the other four blocks, column ideals give W twice, and V
intertwines conjugation. Character values and all conjugacy classes checked.
Sources: Zheng 3.7.4(3), 4.3.2; Wiese 2.4.2(ii), Exercise 14. The exercise
is not used as proof. No generated statement or later Schur-index supplier
is used. Next: rational two-dimensional obstruction, contracts, checks.

### Checkpoint: counterexample and page assembly

Authored `cex-a-galois-stable-character-need-not-have-schur-index-one`:
Z^2=I and trace -2 force Z=-I by the explicit plus/minus eigenspace splitting;
the basis (x,Rx) gives J, anticommutation forces T=[[a,b],[b,-a]], and T^2
cannot be -I over Q. The displayed D realizes twice the character, so the
least positive multiplicity is exactly two. Sources: Wiese 2.5.10 and the
fully proved owned quaternion example, not an unproved exercise assertion.
Both assigned library pages now exist as draft, with all 5 A / 3 B items.
No judge stamps existed or were added. Definition provenance is ai-altered
because of the explicit repaired scalar/basis convention; its proof remains
not-applicable. All seven proof-bearing items retain ai-altered statement and
proof provenance, with both source treatments retained where assigned.

Dependency edits: primitive-block lemma adds the published finite-subspace
result for the Artinian chain argument; classification adds the published
semisimple-ring definition and group-algebra basis theorem; C3 and Q8 add the
same published group-algebra basis theorem at the actual coefficient uses.
The consumer-owned cross-batch input was atomically maintained as []: these
are earlier published suppliers, not another frontier batch. No shared ledger
refresh was run because this dispatch restricts writes to owned input/content;
the serial ledger owner can reconcile that unchanged empty edge set.
The plan's two page IDs, requirements and item lists match this batch. Only
owned direct dependency declarations were expanded; no scope was narrowed.
Next: exact step/citation/boundary contracts and required checks.

### Final Step-5 receipt

All assigned mathematical arguments and pages are authored. The 47 numbered
steps are mapped exactly once in the eight item-specific contracts; the
definition additionally records its balancing, twist and unit checks. Every
contract fact has an exact current dependency excerpt and all actual step uses.
Boundary worksheets distinguish excluded zero values, included zero objects,
finite nonempty choices, identity/singleton cases and both relevant directions.
These are author evidence, not an independent verdict.

Final local corrections: the primitive-block proof declares the fixed-point
lemma directly for its scalar-extension injection. The classification's final
splitting step repeats the elementary column-endomorphism calculation for an
arbitrary matrix factor before concluding it is split; it does not apply a
descent lemma before its splitting hypothesis is known. The quaternion example
also explicitly decomposes both regular modules to justify semisimplicity.
The fixed-point and primitive-block statements expose their already-proved
injection and opposite-ring interfaces in both files and manifest. These are
clarifications of the promised arguments, not changed scope.

Completed item IDs:
- `def-semilinear-galois-action-on-a-scalar-extended-algebra`
- `lem-galois-fixed-points-recover-a-finite-dimensional-scalar-extension`
- `lem-galois-orbit-sums-of-split-central-idempotents-descend`
- `lem-a-descended-galois-orbit-idempotent-is-primitive`
- `thm-galois-orbits-classify-simple-modules-after-splitting-base-change`
- `ex-galois-descent-for-the-two-nontrivial-characters-of-c-three`
- `ex-the-rational-simple-block-of-the-quaternion-group`
- `cex-a-galois-stable-character-need-not-have-schur-index-one`

Completed page IDs (both under `library/representation-theory/`):
- `galois-orbits-and-descent-of-simple-finite-group-modules`
- `galois-orbits-and-descent-of-simple-finite-group-modules-examples`

Checks actually run and results:

- `node tools/tsx-run.mjs tools/precheck.mts` with all eight explicit manifest
  item paths: final **7 checked, 0 failing**; the definition has no phase proof.
  Initial output required canonical phase repair for all seven arguments;
  adopted the checker-returned ordering and numbering and reran successfully.
- Bare `node tools/validate-plan.mjs`: exit 2 (this CLI requires a plan path).
  Corrected invocation `node tools/validate-plan.mjs research/plan-spec.json`:
  final exit 0, 930 pages with item lists and 683 without. Redundant-prerequisite
  informational notices are global. No shared plan was changed.
- `node tools/content-policy.mjs research/phase-2-wave-1-batch-12.pages.json`:
  final **8 scoped, 0 errors, 0 warnings**. The initial source-URL failures were
  due to the tool's list-indentation expectation; canonical indented YAML
  reference lists fixed them without changing sources or provenance.
- `node tools/proof-contract.mjs research/phase-2-wave-1-batch-12.proof-contracts.json --strict`:
  final **8/8 checked, 0 errors, 0 warnings**. A stale prose range left by
  canonical renumbering was corrected before the final pass.
- `node tools/rendercheck.mjs` with all eight owned items and two page paths:
  **10 files pass**, including actual KaTeX parsing and renderer YAML parsing.
- Read-only frontier `collect`: batch-12 input present, no cross-batch edges,
  no orphaned reviews. The consumer input is atomically maintained as `[]`.
- Current plan plus actual library-home traversal: A closure 69 pages, B
  closure 70 pages, no B supplier, all direct supplier homes within the
  respective closure; headers and manifest deps/provenance agree, all owned
  files remain draft and carry no judge stamp. A first plan-only home lookup
  missed the existing `def-field` home; the corrected check includes actual
  library pages and passes. This was a diagnostic lookup omission, not a
  missing mathematical supplier.

Provenance decisions: all eight statements are ai-altered; seven completed
proofs are ai-altered and the definition's proof is not-applicable. No generated
statement or generation role is introduced. Both assigned authoritative
sources remain in use, with exact named passages recorded above and in the
contracts. No source drop, recorded-not-proved substitute, forward reference,
new arbitrary-index choice assumption, or judge/owner attestation was added.
Verification.precheck records only the actual local format result (n/a for
the definition). Historical independent reviews are preserved.

Unresolved owned mathematical or scope obligations: **none**. No promised
item was dropped or narrowed, and no Alpha scope amendment is proposed.
The previously recorded published Maschke-chain and Schur-index consumer
repairs remain Phase-3 obligations for their owners, not premises of this
batch's proofs. Published content, plans, workflow state, shared review files
and other batches were not edited. The shared derived frontier ledger was not
rewritten under this consumer-only dispatch; its unchanged empty batch-12 edge
set is ready for the serial owner's ordinary reconciliation.

Next action: the build driver can consume the authored batch manifest and
contracts. Step 5 has not judged, published, or advanced workflow state.
