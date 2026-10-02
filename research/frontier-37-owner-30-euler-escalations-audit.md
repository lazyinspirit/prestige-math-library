# Step 3 Euler/Riemann–Roch independent audit

**Scope and snapshot.** This report covers the exact 44 IDs in
`research/frontier-37-owner-30-batch-7.pages.json`, the current item-decision
and proof inputs, their batch-5/6 supplier interfaces, and all 32 rows whose
batch-7 coverage disposition is `deferred` or `out-of-scope`. The filesystem
and decision snapshot below was sampled on 2026-09-30 at 15:39 UTC while
batch-5/6 authors were still changing files. File hashes are point-in-time
evidence; re-read and re-hash before any owner decision after those writes
stabilize. This is an audit report only: no coverage row, shared decision,
receipt, gate, or published content was changed here.

## Batch-7 decision and proof findings

The manifest still has 34 A items and 10 B items. `itemDecision` currently
reports 4 closed (three `accept`, one `repaired`), 38 owner-held escalations,
and 2 items requiring a fresh item audit after the proof edits authorized by
root. Of the 38, eight still have their recorded author escalation reason;
the other 30 have changed transitive inputs and now require a current owner
decision. An old escalation receipt is not evidence that its supplier is
still missing or that the current proof has been re-read.

The four closed items are `def-genus-euler-characteristic-curve`,
`lem-nonzero-map-invertible-to-locally-free-injective`,
`lem-vector-bundle-p1-has-maximal-degree-line-subbundle`, and
`lem-vector-bundle-p1-extension-splits`. The two edited items are
`lem-smooth-curve-coherent-torsion-free-locally-free` and
`lem-vector-bundle-p1-maximal-line-quotient-locally-free`. They remain
review-required, with `current item audit required`; neither has a new owner
receipt.

### Authorized proof repairs

- In `lem-smooth-curve-coherent-torsion-free-locally-free`, a nonzero germ
  locus was incorrectly called open, and the proof used a nonexistent common
  open set for two sections. The proof now chooses a point with nonzero
  multiplier germ and uses integrality to show the nonzero section has
  nonzero germ there, so cancellation in the free stalk is valid. For the
  converse, the residue-zero locus on an affine neighborhood is finite by
  `lem-curve-closed-subsets-finite`; it is closed in the whole curve because
  its points are closed. Its complement is therefore an actual open set that
  covers with the affine neighborhood, and the section is a unit on the
  overlap. The claim is unchanged.
- In `lem-vector-bundle-p1-maximal-line-quotient-locally-free`, the same
  nonzero-germ/open-cover gap is repaired with a finite, globally closed
  residue-zero locus. The localization argument now proves vanishing
  element by element: for a fixed class, powers of the finitely many chart
  functions annihilate it, and those powers still generate the unit ideal.
  The rank computation was moved after local freeness is established, where
  the quotient stalk splits. The claim is unchanged.

These proof inputs and their matching batch-7 carrier edits have not been
reviewed or gated after the edits. Root owns that ordinary review and any
resulting decision.

### All 38 owner-held IDs and the current route

The routes below are the supplier IDs named by each stored author-level
escalation reason, reconciled against current batch-5/6 files and decisions.
“B6 owner” means an authored batch-6 file whose existing decision is now
stale (`changed inputs require a current owner decision`). “B5 review” means
the manifest still names the item but the current item audit is required;
the file was absent at the snapshot. “B5 closed” is available evidence, but
the batch-6 consumers and the batch-7 use have not thereby been re-read.
The route is to finish/accept the named batch-5/6 interface, re-read the
stated consuming steps recorded in the author report and each item’s flagged
fact, then make a current item decision. Preserve every current statement;
none of these rows recommends dropping its promised result.

| Batch-7 item | Recorded route suppliers; status at snapshot |
|---|---|
| `def-little-l-divisor` | `def-divisor-smooth-proper-curve` (B6 owner); `def-riemann-roch-space-of-divisor` (B6 owner) |
| `lem-riemann-roch-space-finite-dimensional` | `def-riemann-roch-space-of-divisor` (B6 owner); `lem-cartier-divisor-sheaf-invertible` (B5 closed) |
| `lem-divisor-order-monotonicity-sections` | `def-divisor-smooth-proper-curve`, `def-riemann-roch-space-of-divisor`, `thm-cartier-weil-divisors-curves-agree` (B6 owner) |
| `lem-add-one-point-exact-sequence-line-bundle` | `def-divisor-smooth-proper-curve`, `lem-degree-effective-divisor-nonnegative`, `thm-cartier-weil-divisors-curves-agree` (B6 owner) |
| `lem-add-one-point-euler-characteristic` | `def-divisor-smooth-proper-curve`, `lem-degree-effective-divisor-nonnegative` (B6 owner) |
| `lem-divisor-decomposition-positive-negative-points` | `def-divisor-smooth-proper-curve`, `lem-degree-effective-divisor-nonnegative` (B6 owner); stale owner receipt |
| `thm-euler-characteristic-degree-shift-curve` | `def-divisor-smooth-proper-curve`, `def-riemann-roch-space-of-divisor`, `lem-degree-effective-divisor-nonnegative` (B6 owner); stale owner receipt |
| `thm-riemann-roch-euler-characteristic-curve` | `def-divisor-smooth-proper-curve`, `def-riemann-roch-space-of-divisor` (B6 owner); `lem-cartier-divisor-sheaf-invertible` (B5 closed); stale owner receipt |
| `cor-riemann-inequality-divisor-sections` | `def-divisor-smooth-proper-curve`, `thm-cartier-weil-divisors-curves-agree`, `def-riemann-roch-space-of-divisor` (B6 owner); stale owner receipt |
| `cor-negative-degree-no-sections-rr` | `def-divisor-smooth-proper-curve`, `def-riemann-roch-space-of-divisor`, `lem-degree-effective-divisor-nonnegative` (B6 owner); stale owner receipt |
| `lem-h1-stabilizes-downward-point-removal` | `def-divisor-smooth-proper-curve`, `lem-degree-effective-divisor-nonnegative` (B6 owner) |
| `cor-existence-rational-function-bounded-pole` | `def-divisor-smooth-proper-curve`, `def-riemann-roch-space-of-divisor` (B6 owner); stale owner receipt |
| `cor-smooth-proper-curve-finite-map-projective-line` | `def-divisor-smooth-proper-curve`, `lem-function-with-poles-defines-map-p1` (B6 owner); `def-pullback-cartier-divisor` (B5 closed); stale owner receipt |
| `thm-h1-line-bundle-vanishes-sufficiently-high-degree` | `def-divisor-smooth-proper-curve`, `lem-function-with-poles-defines-map-p1` (B6 owner); `lem-cartier-divisor-addition-tensor` (B5 closed); stale owner receipt |
| `cor-riemann-theorem-large-degree` | `def-divisor-smooth-proper-curve`, `def-riemann-roch-space-of-divisor` (B6 owner); `lem-cartier-divisor-addition-tensor` (B5 closed); stale owner receipt |
| `thm-genus-zero-point-implies-projective-line` | `def-divisor-smooth-proper-curve`, `def-riemann-roch-space-of-divisor`, `lem-effective-divisors-sections-mod-scalars` (B6 owner); stale owner receipt |
| `lem-projective-line-divisors-classified-by-degree` | `def-divisor-smooth-proper-curve`, `thm-cartier-weil-divisors-curves-agree` (B6 owner); `thm-line-bundle-rational-section-cartier-divisor` (B5 closed); stale owner receipt |
| `cor-picard-projective-line-integers` | `cor-degree-descends-picard-curve`, `thm-cartier-divisors-mod-principal-to-picard` (B5 review, no file); stale owner receipt |
| `lem-degree-zero-effective-divisor-empty` | `def-divisor-smooth-proper-curve`, `lem-degree-effective-divisor-nonnegative` (B6 owner) |
| `cor-degree-zero-line-bundle-section-trivial` | `def-divisor-smooth-proper-curve`, `lem-degree-effective-divisor-nonnegative`, `thm-cartier-weil-divisors-curves-agree` (B6 owner); stale owner receipt |
| `cor-nontrivial-degree-zero-line-bundle-no-sections` | `def-divisor-smooth-proper-curve`, `lem-function-with-poles-defines-map-p1`, `thm-cartier-weil-divisors-curves-agree` (B6 owner); stale owner receipt |
| `def-index-speciality-divisor` | `def-divisor-smooth-proper-curve`, `thm-cartier-weil-divisors-curves-agree`, `def-riemann-roch-space-of-divisor` (B6 owner) |
| `thm-riemann-roch-as-l-minus-index` | `def-divisor-smooth-proper-curve`, `thm-cartier-weil-divisors-curves-agree`, `def-riemann-roch-space-of-divisor` (B6 owner); stale owner receipt |
| `def-nonspecial-divisor` | `def-divisor-smooth-proper-curve`, `thm-cartier-weil-divisors-curves-agree`, `def-riemann-roch-space-of-divisor` (B6 owner); stale owner receipt |
| `lem-large-positive-divisors-nonspecial` | `def-divisor-smooth-proper-curve`, `lem-function-with-poles-defines-map-p1` (B6 owner); `def-pullback-cartier-divisor` (B5 closed); stale owner receipt |
| `cor-dimension-complete-linear-system` | `def-complete-linear-system`, `def-divisor-smooth-proper-curve`, `lem-effective-divisors-sections-mod-scalars` (B6 owner); stale owner receipt |
| `rem-sharp-degree-thresholds-wait-for-duality` | `def-divisor-smooth-proper-curve`, `thm-cartier-weil-divisors-curves-agree`, `def-riemann-roch-space-of-divisor` (B6 owner); stale owner receipt |
| `thm-birkhoff-grothendieck-vector-bundles-p1` | `cor-degree-descends-picard-curve`, `thm-cartier-divisors-mod-principal-to-picard` (B5 review, no file); stale owner receipt |
| `ex-riemann-roch-projective-line-divisor` | `def-complete-linear-system`, `def-divisor-smooth-proper-curve` (B6 owner); stale owner receipt |
| `ex-genus-zero-conic-with-rational-point` | `def-divisor-smooth-proper-curve`, `thm-cartier-weil-divisors-curves-agree`, `def-riemann-roch-space-of-divisor` (B6 owner); stale owner receipt |
| `cex-genus-zero-without-rational-point-not-p1` | `def-divisor-smooth-proper-curve`, `def-riemann-roch-space-of-divisor`, `lem-effective-divisors-sections-mod-scalars` (B6 owner); stale owner receipt |
| `ex-adding-point-section-dimension-jump` | `def-divisor-smooth-proper-curve`, `def-riemann-roch-space-of-divisor`, `thm-cartier-weil-divisors-curves-agree` (B6 owner); stale owner receipt |
| `cex-riemann-inequality-not-equality-special-divisor` | `def-divisor-smooth-proper-curve`, `thm-cartier-weil-divisors-curves-agree`, `def-riemann-roch-space-of-divisor` (B6 owner); stale owner receipt |
| `ex-degree-zero-principal-divisor` | `def-divisor-smooth-proper-curve`, `def-riemann-roch-space-of-divisor` (B6 owner); `thm-principal-divisor-degree-zero-proper-curve` (B5 closed); stale owner receipt |
| `ex-linear-system-poles-at-one-point` | `def-base-point-linear-system`, `def-divisor-smooth-proper-curve`, `def-riemann-roch-space-of-divisor` (B6 owner); stale owner receipt |
| `ex-nonspecial-large-divisor` | `def-divisor-smooth-proper-curve` (B6 owner); `cor-degree-descends-picard-curve` (B5 review, no file); stale owner receipt |
| `cex-negative-degree-rr-right-side-negative` | `def-divisor-smooth-proper-curve`, `def-riemann-roch-space-of-divisor`, `lem-degree-effective-divisor-nonnegative` (B6 owner); stale owner receipt |
| `ex-empty-divisor-euler-characteristic` | `def-complete-linear-system`, `def-divisor-smooth-proper-curve` (B6 owner); stale owner receipt |

The exact step numbers for each recorded use remain in the batch-7 item’s
flagged supplier facts and the route table in
`research/frontier-37-owner-30-step3b-pair-riemann-roch-for-curves-via-euler-characteristics.md`.
The batch-7 escalation notes name the original consuming steps; for example,
`def-riemann-roch-space-of-divisor` is consumed in the finite-dimensionality
proof at 1.3, 5.1, and 7.1, and the Birkhoff–Grothendieck proof flags the
Cartier/Picard dictionary as an input. Reuse those exact step references when
the current supplier statements are re-read.

### Supplier availability and hashes

At 15:39 UTC, the two batch-7 Picard routes still lack their batch-5
interfaces `cor-degree-descends-picard-curve` and
`thm-cartier-divisors-mod-principal-to-picard` (both manifest entries are
`current item audit required`; neither file exists). The Cartier–Weil route
also lacks current batch-5 proofs/decisions for
`lem-cartier-to-weil-respects-principal-and-addition`,
`lem-cartier-to-weil-injective-normal`, and
`thm-cartier-weil-isomorphism-locally-factorial` (manifest rows exist; files
are absent). These are not borrowable from adjacent receipts. Five earlier
batch-5 dictionary interfaces are now closed and authored:
`lem-cartier-divisor-sheaf-invertible`,
`lem-cartier-divisor-addition-tensor`,
`thm-line-bundle-rational-section-cartier-divisor`,
`def-pullback-cartier-divisor`, and
`thm-principal-divisor-degree-zero-proper-curve`.

The current manifest decisions are 36 closed and 10 review-required in batch
5, and 9 closed, 28 owner-held, and 12 review-required in batch 6. All ten
batch-5 review-required files were absent at the last inventory; only the
five named above lie on the inspected batch-7 routes. The batch-6 files in
the table below exist, but their old decisions are stale after their input
changes.

| Batch-6 supplier consumed by batch 7 | Current input status | Raw item SHA-256 |
|---|---|---|
| `def-divisor-smooth-proper-curve` | owner escalation; changed inputs | `cef1b2b60f5d8e8abe69ce79f169ea6385f0afc048ab40262b703130b0e668ee` |
| `def-riemann-roch-space-of-divisor` | owner escalation; changed inputs | `a03da3fd42ad298216248e16aab29ace95f7042d36722cba724f720ce3e20c42` |
| `thm-cartier-weil-divisors-curves-agree` | owner escalation; changed inputs | `7fcaa43bc6654e6a4e80a6b7b2384e4310078850ec0265ada2c5afcc14a84b38` |
| `lem-degree-effective-divisor-nonnegative` | owner escalation; changed inputs | `e6dd36c4874eeb69e2de8757c94ce0c249c946768af5203ba98d956bcf1c067a` |
| `lem-effective-divisors-sections-mod-scalars` | owner escalation; changed inputs | `9c62be203166573a9a84bc4c2af7895a990eb33d875e9e6e8c812195f5a4c378` |
| `lem-function-with-poles-defines-map-p1` | owner escalation; changed inputs | `ddea6b180cef15827783a075fd538af0739242c1001efbe2519b862eed74fecf` |
| `def-complete-linear-system` | owner escalation; changed inputs | `53289298614a8fc08d4375d0b27470537c3bcb08a50715a7a1dd0769cb401875` |
| `def-base-point-linear-system` | owner escalation; changed inputs | `e3c8547684ce3870d2a96b148901b01333834b8318e45b9c367f294274179016` |

These raw-file hashes stayed the same between the 15:32 and 15:39 checks; the
batch-6 decision reasons still report changed inputs. The live issue is
therefore owner re-review of the current supplier claims and their current
batch-5 dependencies, followed by re-reading batch-7 uses—not that these
eight batch-6 files are absent. Recompute both raw and transitive input hashes
after the concurrent writes drain.

## Batch-7 deferred/out-of-scope coverage audit

I checked each listed source claim against the batch-7 statements/proofs and
the current plan destinations. Most duality and Cartier/Picard deferrals are
well routed. The table identifies the rows whose grouping, destination, or
disposition needs owner reconciliation. No coverage or scope-decision JSON
was edited.

| Source row in `batch-7.coverage.json` | Audit disposition / route |
|---|---|
| Fulton, Ch. 8 §8.4 Prop. 6: one-dimensional differential module | Keep deferred to the residue/duality pair; no use in the Euler-characteristic proof. |
| Fulton, Ch. 8 §8.6: canonical-divisor form of Riemann–Roch | Keep deferred to the duality pair; batch 7 proves the index/Euler-characteristic form. |
| Fulton, Ch. 8 §8.6 Prop. 9: speciality equals l(W−D) | Keep deferred to duality; this is precisely the duality identification absent here. |
| Fulton, Ch. 8 §8.6 Cor. 1: l(W)=g | Keep deferred to duality; batch 7 uses χ(O_C)=1−g, not h^0(K_C)=g. |
| Fulton, Ch. 8 §8.1 Props. 1–2: principal divisor degree zero and linear equivalence | Keep routed to Cartier/Weil and Picard; batch 7 consumes this dictionary. |
| Fulton, Ch. 8 §8.3 Cor. 3: universal high-degree formula | Keep deferred to duality; the current large-degree corollary is fixed-direction and does not identify i(D) with l(K−D). |
| Fulton, Ch. 8 §8.3 Prop. 5: plane-curve computation and adjoints | Keep routed to the curves page for the arithmetic-genus computation; the adjoint proof device has no consumer here. |
| Fulton, Ch. 8 §8.4 Lemmas 2–3 and Prop. 7: derivations, differentials, DVR/local parameter | **Split.** Differential and canonical material belongs to duality. The smooth-curve DVR/local-parameter result is already supplied by batch-6 `thm-local-ring-smooth-curve-dvr` (closed repaired) and is used by batch-7 proofs; it is not all deferred. |
| Fulton, Ch. 8 §8.5 Prop. 8/corollary: canonical plane-curve divisors, deg(W)=2g−2, ell(W)≥g | Keep deferred to duality. |
| Fulton, Ch. 8 §8.6 Corollaries 2–3: thresholds 2g−1 and 2g, base-point freeness | Keep deferred to duality; these use the full dual formula. |
| Fulton, Ch. 8 §8.1 residue theorem for adjoint curves | Keep out of scope for this Euler-characteristic route; no adjoint or residue proof is used. |
| Fulton, Ch. 8 §8.2 Prop. 4 preliminary estimate | Keep out of scope; no item consumes this estimate, and the page proves its Riemann inequality by another route. |
| Fulton, Ch. 8 §8.6 Clifford corollary | Keep out of scope; no current consumer. |
| Fulton, Chs. 8.1–8.6 Problems 8.1–8.30 as one block | **Narrow the block.** Problems 8.1 and 8.9 are separately inline with `lem-projective-line-divisors-classified-by-degree`; Problem 8.12 is separately inline with `cor-degree-zero-line-bundle-section-trivial`. The remaining problem set may stay out of scope. |
| Artin, Ch. 8 §8.1 branched covers, maximal-ideal products, local e-th-root form, finite Hom | **Split.** Branched-cover/local ramification statements route to the curves/ramification page. Maximal-ideal products route to divisor/DVR foundations (with the smooth-curve DVR already supplied here). The bundled finite-Hom result has no identified batch-7 consumer; retain only with a named consumer, otherwise mark out of scope. |
| Artin, Ch. 8 §8.3 Thm. 8.3.11: complex curve is a compact orientable surface | The current destination is unsupported: the scheme-theoretic geometric-genus comparison is not the compact-orientable-surface theorem. No matching promised result or plan item was located in the target curve page; use a separate complex-curve/topology destination or mark out of scope for this pair. |
| Artin, Ch. 8 §8.1 exactness of Hom/localization | Cartier/sheaf foundations are a plausible route, but the row names no exact target statement or consuming item. Split the exactness and localization claims and tie each to a concrete batch-5 proof input; otherwise defer to the general sheaf-foundations page or mark unused material out of scope. |
| Artin, Ch. 8 §8.1 notation π\(_*M\) | Keep out of scope; this is notation, not a separate result. |
| Artin, Ch. 8 §8.4.1 historical Birkhoff remarks | Keep out of scope; the theorem statement is covered by `thm-birkhoff-grothendieck-vector-bundles-p1`. |
| Vakil, Ch. 18 §§18.4.2–18.4.3, 18.4.6–18.4.7: line/coherent-sheaf degree and Pic degree map | **Split.** Degree of line bundles/Pic → ℤ routes to Cartier/Picard. General coherent-sheaf/vector-bundle degree χ(E)−rank(E)χ(O) is not the rank-one degree result proved here; route to a general curve vector-bundle Riemann–Roch item or leave out of this pair. |
| Vakil, Ch. 18 §§18.5.1–18.5.2 and Ex. 18.5.A(b): Serre duality and deg(ω_C)=2g−2 | Keep deferred to the duality pair. |
| Vakil, Ch. 18 §§18.5.3–18.5.4: dual Riemann–Roch and ω_(P¹)=O(−2) | Keep deferred to the duality pair. |
| Vakil, Ch. 18 §18.5.7: splitting failure on P^n, Horrocks criterion | **Wrong destination.** The duality pair contains no higher-dimensional vector-bundle/Horrocks result. Mark out of scope for this track or create a dedicated higher-dimensional bundle destination. |
| Vakil, Ch. 18 Ex. 18.5.I: arbitrary-rank Birkhoff induction | **Disposition is wrong.** This proof is already carried by `thm-birkhoff-grothendieck-vector-bundles-p1`: the current theorem has the arbitrary-rank induction/rank-reduction and uniqueness steps. Reclassify as inline to that theorem. |
| Vakil, Ch. 18 §18.4.5 Miracle, §18.4.10 universal conic, §§18.4.11–13 numerical equivalence | Keep out of scope for this pair. The universal family’s absence of a rational section differs from the B-page’s examples of fixed conics; neither numerical equivalence nor the topology comparison is consumed by the pair. |
| Stacks, Algebraic Curves §3 Lemmas 3.3–3.5/Remark 3.6: linear-series restriction, g^1_d map, r≤d and equality | **Split.** Restriction and the g^1_d→P^1 result fit the curve/linear-series destination. I found no claim proving the r≤d bound and equality/genus-zero criterion among the named batch-7 consumers; preserve it as a separate curve-page obligation only if planned, otherwise mark that portion out of scope. |
| Stacks §6 Lemmas 6.1–6.7: dualizing twists vanishing/global generation | Keep deferred to duality; these are not the fixed-direction vanishing proof. |
| Stacks §7 Lemmas 7.1–7.2: powers L^6 and L^2 very ample | Keep deferred to the duality/embedding pair; planned embedding corollaries are the relevant consumers. |
| Stacks §8 Lemmas 8.2–8.3: genus after field extension; deg(ω)=2g−2 | **Split.** Canonical degree belongs to duality. Field-extension invariance of genus is a separate base-change fact; no explicit target item for it was found in the listed curve/duality destinations. Name a curve base-change item or leave that part out of scope. |
| Stacks §8 Lemma 8.4: h^0(Ω)=g, deg(Ω)=2g−2 | Keep deferred to duality. |
| Stacks §5 formulas: degree of locally free sheaf, first Chern class, ample degree | **Split.** Rank-one degree/Pic compatibility routes to Cartier/Picard. Higher-rank degree, first Chern class and ample intersection need a vector-bundle/intersection-theory destination; the batch-7 line-bundle Euler characteristic statement does not supply the general formula. |
| Stacks §3 Lemma 3.5 equality case and §5 general fractional Gorenstein Riemann–Roch discussion | **Split and deduplicate.** The linear-series equality case duplicates the previous §3 row and should follow that row’s disposition. The fractional/higher-rank Gorenstein formula is outside this pair’s rank-one Euler-characteristic claim. |

Two additional `inline` mappings are inaccurate, though they are not part of
the requested 32 declined rows:

1. Fulton Ch. 8 §8.2 Lemma 1 is the equality
   \(\dim(L_S(D')/L_S(D))=\deg_S(D'-D)\) for a finite set \(S\). The
   mapped `lem-divisor-order-monotonicity-sections` proves the global
   quotient bound \(L(D')/L(D)\hookrightarrow\bigoplus_p\kappa(p)\), not
   the local finite-\(S\) equality. Treat Lemma 1 as a separate deferred or
   out-of-scope result unless an exact proof is added.
2. Fulton’s Noether reduction lemma involving \(l(W-D-P)\) and \(l(W-D)\)
   is mapped to `lem-h1-stabilizes-downward-point-removal`. That item only
   proves \(h^1(D+p)\le h^1(D)\) from the cohomology exact sequence; it
   neither mentions \(W\) nor proves Noether’s comparison. Route the source
   lemma to duality, or mark its comparison as a distinct unscaffolded claim.

The full source strings and locator evidence are retained in
`research/frontier-37-owner-30-batch-7.coverage.json`; the row findings above
are audit recommendations for the owner’s coverage/scope reconciliation.

## Batch-26/27 group-i source disposition audit

Snapshot: 2026-09-30 15:55 UTC. This is a separate report-only audit of the 20 group-i source declines in
batches 26 and 27. At inspection, all 20 rows in
`research/frontier-37-owner-30-alpha-i-scope-decisions.json` still had
`decision: pending` and empty evidence. The recommendations below do not edit
those decisions or coverage records.

I compared the rows with the actual finished A-page manifests, item statements
and proof routes, plan destinations, and the stored full-text retrieval records
in each batch coverage file. The batch-26 manifest's 14 A items and the
batch-27 manifest's 15 A items all have item files. Batch 26's selected route
uses the plane logarithmic-derivative proof for the plane SMT, and separately
uses exterior characteristic, inversion, the exterior logarithmic-derivative
estimate, and annular Jensen for the punctured-disc theorem. Batch 27 proves
fixed-lattice analytic facts: the zero/pole and residue laws, the degree-two
Weierstrass map, generation of the elliptic-function field by ℘ and ℘′, the
associated nonsingular cubic, and its chord-tangent law. It does not assert
the group-valued Abel criterion, general divisor existence, a general
genus-one Riemann–Roch dimension formula, classification of all tori/cubics,
or complex multiplication arithmetic.

The full-text records for the relevant source material are present in
coverage: Eremenko (18 PDF pages, hash prefix `a0de520912ea9817`), Goldberg–
Ostrovskii (495, `57977e671d5bf1b8`), Laine (62, `07e3e6c50805821f`), Quang
(17, `d94b7a25ed813af1`), Kondratyuk (13, `ba78d47e1ddbeddc`), Lund–Ye (8,
`8648c790f814b66d`), and Simonič (18, `90ecc7e241f08402`); Milne (134,
`977f06a4e838c43c`), McMullen's earlier course notes (106,
`60f8ccafc4084b83`) and 2025 notes (181, `d2d50d6112bcb0fc`), Ahlfors (347,
`8aa98a45a8c074b9`), Stein–Shakarchi (398, `7593f7d36e04422c`), and DLMF
§23.2 (`c4799cff40944291`, 11,082 text characters). The source-row names and
locators below identify the exact claims; the stored fetch records bind the
full source files.

### Batch 26: retain all 11 rows as out of scope

Each recommendation is `stands` as out of scope. These are alternative
geometric proofs, different domain/characteristic theorems, unclaimed
refinements, or bibliographic material. None supplies a missing premise of
the selected proof route.

| Decline ID | Source claim | Recommendation and evidence from the selected claims |
|---|---|---|
| `d284fb66d4047856b202cc4620b735b0656eb9ecb6eca27f8dba74687c040367` | Eremenko §4, Gauss–Bonnet and spherical pullback metric | `stands` out of scope. The plane SMT proof uses target separation and logarithmic derivatives; the separate local theorem is proved on an exterior domain. The metric derivation supplies neither selected route. |
| `3519156c1318a50533b783d8b71dc83d60b626049f8d1dc8435bdea0e8393560` | Eremenko §5, Ahlfors negative-curvature proof of SMT | `stands` out of scope. This is another proof of the plane SMT, while the authored proof explicitly uses the logarithmic-derivative argument. |
| `46e37b67f82323ff6ecc7add2b8c763e73229e72438c8c9de1d5dca67c334153` | Eremenko §5, unit-disc SMT with boundary-distance error | `stands` out of scope. Its full-disc boundary parameter and error involving `log(1/(1-r))` are not the exterior radius `R` and finite-linear-measure error after puncture inversion. |
| `ec2e78c2ce19b915d3ccd223693dc5c9c85b676232885b6c0a2ecc8791f350be` | Eremenko §6, derivative-characteristic corollary | `stands` out of scope. The page proves a proximity estimate for `f′/f`; it does not promise derivative characteristic growth, and no selected proof consumes that corollary. |
| `eb09983fa11587e36e474a829535b133fef230e0c272e8b64e8f672e6c24a6f3` | Goldberg–Ostrovskii Ch. 3 §1, sharper coefficient `rho−1` for finite order | `stands` out of scope. The page's finite-order strengthening is the all-large-radii `O(log r)` error for its `q−2` inequality; neither the SMT nor defect-relation proof uses this sharper coefficient. The separate example checks sharpness of `q−2`, not this refinement. |
| `364666fa5cf4251f9653bcd9d3b9f527e9c1551971dd5766b62b98ab6f0ac1cc` | Goldberg–Ostrovskii Ch. 1 §5, Tsuji characteristic on the upper half-plane | `stands` out of scope. The local theorem defines a circular exterior characteristic for `|w|>1`; the proof does not identify it with Tsuji's upper-half-plane/logarithmic-cover characteristic. |
| `816f7da240f0f3389de016452fd2b01e6fa923e33bd69a57e203af46afb172d8` | Goldberg–Ostrovskii Ch. 3 §3, Tsuji logarithmic derivative and second fundamental theorem | `stands` out of scope. The authored punctured-disc proof instead invokes the exterior-domain logarithmic-derivative result and explicitly handles the exterior radius and the puncture map. No transfer from the Tsuji covering radius or its error is proved. |
| `50b89a0efaaa2274a2702f50a09e93508314ed1df544fbdecbcc2d85d6da5e00` | Laine §6, four-value theorem with multiplicity sharing | `stands` out of scope. The manifest promises the five-value uniqueness theorem, not the distinct four-value result with its additional multiplicity-sharing hypothesis. |
| `de5b31cc778cd39df2593a5c5d81323b683fe38ff8bda746e03be26d0e694c7d` | Kondratyuk–Laine bibliography entry on multiply connected domains | `stands` out of scope. This is a reference entry, not an invoked theorem or proof input; no current item claims or consumes it. |
| `cfdf413dc6fff5db2fdd90652825782c76d13a5c5434569587ded85747c2e05d` | Quang Theorem 2.2, SMT on symmetric annulus `A(R0)` | `stands` out of scope. Its domain is `1/R0 < |z| < R0`; the authored local theorem is on the one-sided exterior after inversion. The annular theorem would need an additional extension/domain argument absent from the proof. |
| `55ac795f690810e09ac8cf7f0574f52504969c20c74dc039f9b31a02623d38d1` | Quang, symmetric-annulus characteristic and error `S_f` | `stands` out of scope. Its boundary and exceptional-set conventions concern a symmetric annulus, not the exterior-circle variable used in the item. |

Batch 26 has no future-destination claim among these 11 rows. The page's
actual item list is present in its library carrier; no inference from the
empty `items` array in the planning placeholder is needed for this audit.

### Batch 27: retain two out-of-scope rows and seven planned deferrals

The two rows already marked out of scope should `stand`. For the seven rows
deferred to later pages, the mathematical destinations are appropriate and
the scope decisions should `stand` as deferrals, with an inventory caveat:
`divisors-riemann-roch-and-duality` and
`level-one-modular-forms-and-the-j-invariant` both have empty item arrays in
`research/plan-spec.json`, and neither destination page file currently exists.
These are planned routes, not supplied results. Reconcile each deferred source
to a named item when its destination is scaffolded; do not treat this pair's
decision as proof or closure of the destination theorem.

| Decline ID | Source claim | Recommendation and evidence from the selected claims |
|---|---|---|
| `7fc85b3134ec740e7742c8c138e1753b4d08182d4df769b90c7cb029f41580ec` | Milne Prop. 3.1(c), Abel sum of a principal divisor | `stands` deferred to divisor/Riemann–Roch. The current divisor-law theorem equates total zero and pole multiplicities and proves a residue sum; it does not state the group-valued Abel-sum condition. |
| `af11ca5d66b8ed00fdee8aa8646dd9e74f21761899fe5de6c602d5dbac393936` | Milne Prop. 3.3 and Cor. 3.4–3.5, torus homomorphisms and isomorphism classes | `stands` deferred to the j-invariant page. The A-page constructs and studies a torus for a fixed lattice and its basis; it does not classify homomorphisms or isomorphism classes of arbitrary tori. |
| `6cc36ea4cc1068a71087a59e45cbd481466ebb4712bb6d73d44c690dd6341c26` | Milne Cor. 3.6, complex multiplication of torus endomorphisms | `stands` out of scope. This requires arithmetic of endomorphism orders/complex multiplication, not the fixed-lattice analytic claims in this pair. |
| `07a3919af4f955c00e7d4afb99176dc314d27e0743f85b8298c31a8dd6f3d482` | Milne Thm. 3.8, prescribed elliptic zero and pole divisors | `stands` deferred to divisor/Riemann–Roch. The current page has no general existence theorem for a meromorphic function with a prescribed divisor; its field-generation result is not that criterion. |
| `cdaaadc458dd4c4f6884b3da43793b44e263194f99fc41d0f6644e7c27d7417c` | Milne Prop. 3.12 converse and Prop. 3.13, all elliptic curves and category equivalences | `stands` deferred to the j-invariant/classification page. The current cubic theorem maps a torus arising from a given lattice to its associated cubic; it does not prove the converse for every smooth cubic or classify all elliptic curves. |
| `f74a20259046866114e1a9fe3887ec726c9ca765a8c37dfad6c0ad101236ad71` | McMullen, basic property (3), Abel sum of zeros and poles | `stands` deferred to divisor/Riemann–Roch. The fixed-lattice divisor and residue laws do not assert that the sum of zero classes equals the sum of pole classes in the torus. |
| `a66718586de0d9098c82da7681dfda295b4f6fdf1648ff863bb5a7ecff1089c6` | McMullen Thm. 5.7, dimensions of elliptic functions with bounded poles | `stands` deferred to divisor/Riemann–Roch. The explicit description `K(TΛ)=C(℘,℘′)` and degree-two map do not calculate the dimension of arbitrary divisor pole spaces. |
| `bc36f7bd94b8da5cb47d8846342cb0b6e463eeea674665deb723622106e56721` | McMullen, alternative one-direction trigonometric sums and `G1` | `stands` out of scope. This is auxiliary, basis-dependent/quasimodular material; the current canonical ℘ and sigma claims neither use nor promise its construction. |
| `844275dc729336a39b901b64e41e61b5533ee4eb4c4b4d2cd56f6172152224c7` | McMullen Thm. 5.21, degree-zero divisor principal iff its Abel sum vanishes | `stands` deferred to divisor/Riemann–Roch. The complete iff criterion, especially its existence direction, is absent from the current fixed-lattice analytic theorems. |

The full source locators, stored fetch metadata, original reasons and row hashes
remain in `research/frontier-37-owner-30-batch-26.coverage.json`,
`research/frontier-37-owner-30-batch-27.coverage.json`, and the pending
group-i decision file. This appendix records only recommendations for the
owner's later scope-decision integration; no source disposition, coverage row,
item, manifest, receipt, or gate was changed here.
