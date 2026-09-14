# Step 5A — group d (alpha), batches 7 and 8

Run `phase-2-next-18`, role alpha, label `5a-d`, covers batches 7 and 8.
Owned scope: the 43 + 49 = 92 authored items and the 4 + 4 = 8 A/B pages of
`research/phase-2-next-18-step5-scope-{7,8}.json`.

## Decisions

100 decisions (`authored:<batch>:<id>`, route `item` or `page`):
92 item decisions and 8 page decisions, all `accepted`, all with
`defect_ids: []`. No `repaired`, no `escalated`, no withdrawal, no new item,
page or pair. The engine's stamp step supplies the carrier hashes; the
group-d entries produce no routing error other than the expected pre-stamp
`decision-stale` notices.

## What was read and checked

Every item was read in full against its written argument, not against the
Step-3 scaffold checklist, and the load-bearing steps were checked against the
cited sources. Sources used (complete relevant sections; fetched this
dispatch):

- Miroslav Repický, *A proof of the independence of the Axiom of Choice from
  the Boolean Prime Ideal Theorem*, CMUC 56 (2015), pp.543-546
  (`https://im.saske.sk/~repicky/-r30.pdf`): Lemma 2, Corollary 3, the
  maximal-ideal construction and the final finite Boolean expansion.
- J. Donald Monk, *Set theory following Jech*, Theorem 29.28 region
  (`https://euclid.colorado.edu/~monkd/jech.pdf`), and Halpern–Läuchli,
  *A partition theorem*, Trans. AMS 124 (1966), pp.360-367
  (`https://www.cs.umd.edu/~gasarch/BLOGPAPERS/HL-1966.pdf`).
- Thomas Jech, *The Axiom of Choice* (`https://gwern.net/doc/math/1973-jech-theaxiomofchoice.pdf`):
  Theorem 7.1 and the basic Cohen model (pp.97-98); Theorem 10.6 with
  equations (10.2)-(10.8), Lemmas 10.7-10.9 and Problems 2-3
  (pp.142-144, 148) for Feferman–Levy.
- Solomon Feferman, *Some applications of the notions of forcing and generic
  sets* (`https://bibliotekanauki.pl/articles/1381977.pdf`), finite-parameter
  stages and Theorems 4.9/4.12.
- Eleftherios Tachtsis, *On the Existence of Free Ultrafilters on omega and on
  Russell-sets in ZF*, Bull. Pol. Acad. Sci. 63 (2015), pp.1-10
  (`https://www.impan.pl/shop/publication/transaction/download/product/91097`):
  the Blass parameter-HOD model (p.5) and the complete Theorem 4 tail-flip
  proof (pp.5-7).
- Brian Ransom, *On BPI in Symmetric Extensions Part 1*, arXiv:2511.21684
  (HTML v1 fetched): Definition 3.8 and Theorem 3.10 (filter extension
  property), Lemma 4.3 (Erdős–Rado), Lemma 4.5 with Appendix C (Todorčević–
  Farah Lemma 6.8), Theorems 5.23/5.27 and Corollary 5.28 (small-index
  transfer through `Coll(omega,Theta)`), Section 5.1 (the maps `Sigma`/`Gamma`).
- Joel David Hamkins, *Gap forcing* (`https://arxiv.org/pdf/math/9808011`) for
  the structure of the no-new-measurables argument in
  `thm-small-forcing-does-not-create-measurable-cardinals`; the classical
  statement (Lévy–Solovay small forcing does not create measurables) is
  literature-confirmed.
- Robert M. Solovay, *A model of set-theory in which every set of reals is
  Lebesgue measurable* (`https://people.math.ethz.ch/~fdalio/ZKmodel.pdf`)
  and Spencer Unger, *A Brief Account of Solovay's Model*
  (`https://www.math.toronto.edu/sunger/solovay-model.pdf`) for the collapse,
  absorption/homogeneity, `HOD(S)`, Borel-code, LM/BP/PSP and formalization
  clauses.

Selected verifications worth recording (each item's decision entry carries its
own specific evidence):

- Repický Lemma 2/Corollary 3 continuity: the fresh-row enlargement, the
  reduction of a counterexample tuple to ground indices, the injectivity and
  `k`-bound, the disjoint-transposition symmetry step, the compatibility of
  `p` with `pi r`, and the sub-box consequence.
- Repický-style maximal ideal: only maximality inside the supported
  definability class is claimed, exactly as the Step-3b source gap required.
- Search-and-shift BPI: statement and every numbered step matched to Ransom
  Def 3.8/Thm 4.1, Lemma 4.5 (TF95 Lemma 6.8 through Appendix C), the
  `Sigma`/`Gamma` reindexing and Corollary 5.28; the `D = empty` case and the
  restoration of the omitted coordinates of `p*` were checked separately.
- Feferman–Levy: bounded layer supports, Jech Lemma 10.7 (fixed Boolean values
  project to initial layers, including `m = 0`), the layer cardinal bounds,
  countability of each layer, the countable-union theorem, `omega_1^N =
  aleph_omega^V` by the least-`A_k` bound, cf `= omega`, and the failure of
  `AC_omega`.
- Feferman's tail-flip model: the identification `M* = HS^G_F` was verified
  through the orbit-join projection (the join over the `H_m`-orbit of a
  condition is its initial-layer restriction), the Theorem 4.12 prime-ideal
  argument, and the finite-fragment consistency transfers.
- Blass's model: with `S = union of the finite-modification classes plus f`,
  the members of `S minus {f}` are reals, so the proof's parameter language is
  faithful to Tachtsis. The Russell-set tail flip and the `V_0 = L[a_k : k in
  K]` step of the all-ultrafilters theorem were checked (every element of
  `L[c]` is hereditarily definable from the finitely many reals `c` and
  ordinals; the residual quotient is weakly homogeneous by finite flips that
  fix all defining parameters, which transfers `U`'s `kappa`-completeness from
  `N` to `V_0` and contradicts `V = L`). Only a reading technicality remains:
  "decided by the top condition of `Q`" is the standard reduction to a
  condition of the generic that forces uniqueness of the defining formula.
- Halpern–Läuchli: the three word rules, the `d`-induction rearrangement, the
  finite density-preserving thinning for Rule 3 (least witnesses, no choice),
  the dense-matrix dichotomy, and the finite-level partition theorem under its
  explicitly declared AC (the bad-colouring tree and König step).
- BPI/UFL and finite diagrams: the finite atom extension, the countable
  compactness tree with its ZF definable good-successor branch, and both
  directions of BPI iff set-UFL, including the quotient/complement-ideal
  constructions and boundary cases.
- Solovay: the collapse setup and complete projections, localization of real
  and countable ordinal data, absorption/homogeneity, the `HOD(S)` ZF and
  real-parameter reduction, ambient omega-closure and internal DC, Borel-code
  absoluteness, random/Cohen largeness, Borel representatives, LM, BP, the
  perfect tree and PSP, the Euclidean digit-interleaving transfer, the Vitali/
  Bernstein/Hamel/Cauchy/Banach–Tarski exclusions, the separate `L(R)`
  treatment, and the one-way proof transformer. Boundary cases (empty set,
  whole space, radius zero, `n = 1`, zero exceptions) were checked.

## Local suppliers and plan amendments

None. No missing prerequisite required a new local definition or lemma; no
manifest, contract scope, page order or dependency declaration needed an
amendment. The only shared records touched are the risk-review fields described
below and the two ledgers.

## Risk reviews (same read)

33 HIGH/CRITICAL items lacked a complete `risk_review` in the owning batch
contracts (6 in batch 7, 27 in batch 8). Specific complete entries were written
during this same read with `tools/apply-risk-reviews.mjs` (reviewer
`phase-2-next-18-alpha-d-5a`, 33 applied, 0 orphans). Both owned contract
checks now pass:

- `node tools/risk-report.mjs research/phase-2-next-18-batch-7.proof-contracts.json --require-reviewed`
  -> `risk-report: 0 error(s), 39 item(s) routed`.
- `node tools/risk-report.mjs research/phase-2-next-18-batch-8.proof-contracts.json --require-reviewed`
  -> `risk-report: 0 error(s), 49 item(s) routed`.

## Published findings (canonical ledger)

Four published Recorded remarks carry defects whose exact replacement suppliers
are the new items on the two owned pages. They were recorded in
`research/published-consumer-supplier-ledger.md` in the new section
"Alpha-d Step 5A published-supplier findings — 2026-09-14", under the
`mkdir`-serialized lock (acquired, re-read, merged, released; no contention),
with raw SHA-256 hashes, exact evidence, supplier mapping, repair strategy and
A-P classification, and with the deduplicated index rows and counts updated
(A-P 326 -> 330, queues 1,881 -> 1,885, indexed published items 2,954 -> 2,957):

- `rem-halpern-levy-bpi-not-ac` (`9004404806ffac1d211891512cf0b3345b8cfde6bfb4ee6395a162e2cf0186ea`):
  the body assigns the hard BPI half to the Halpern–Läuchli partition theorem
  and calls it genuinely required, while Repický gives a complete elementary
  proof and this run's route is the Halpern–Lévy search-and-shift property.
  Repoint to `thm-basic-cohen-model-satisfies-bpi-and-fails-choice` /
  `cor-relative-consistency-of-bpi-without-choice-over-zf`; independent
  combinatorics supplier `thm-halpern-lauchli-dense-matrix-dichotomy`.
- `rem-feferman-levy-model` (`fad0be90df9ad726e13aed46a2c64db583ac644e357146f18fe8b52dd1205fb0`):
  "symmetric submodel with finite supports" misdescribes the normal filter
  generated by the bounded initial-layer stabilizers `H_m` and omits the
  functional-triple condition convention. Repoint to the new
  Feferman–Levy chain after publication.
- `rem-solovay-model` (`7cf11a84d6ac21e11623f1df1f9b4e1763460293087d15f5b1c95b1acf693360`):
  correct statement and model distinction, but the collapse, homogeneity,
  LM/BP/PSP and named negative consequences are all unproved locally. Repoint
  to `thm-solovay-model-regularity-relative-to-an-inaccessible` and the exact
  negative suppliers, retaining the inaccessible antecedent.
- `rem-banach-tarski` (`235142952acab3faf2b251c2adbf85031303bd458f082fc28198f25054f6ca03`):
  unproved positive theorem and piece-count claims; only the negative Solovay
  clause has a supplier map in this run
  (`lem-solovay-universal-measurability-transfers-to-euclidean-spaces`,
  `cor-solovay-model-has-no-banach-tarski-decomposition`).

No published byte was edited; this dispatch does not licence published repairs.
The remaining cited published suppliers were read as interfaces and no further
published-item defect was confirmed. This is a defect-focused reading, not a
whole-closure audit, and it certifies no published proof.

## Frontier dependency ledger

`research/phase-2-next-18-batch-8.cross-batch-dependencies.json` (the only
owned cross-batch consumer input; batch 7 has no cross-batch edge) still had
Step-1-era evidence that predates authoring. All 13 rows were rewritten with
current evidence: 12 rows stay `open` because the batch-7 (and batch-9)
suppliers are authored and 5A-accepted but unpublished, and one row
(`thm-halpern-lauchli-and-the-basic-cohen-bpi-model` ->
`lem-basic-cohen-continuity-forces-the-maximal-ideal-to-be-prime`) is
`removed`, because that use was actually replaced during authoring by the
search-and-shift semantic theorem and no such item exists in the manifest.
`node tools/frontier-dependency-ledger.mjs refresh --run phase-2-next-18`
succeeded; every declared edge now carries a review row, all batches have
inputs, and the single orphaned review is the documented removed row for
Step-8 reconciliation.

## Checks and blockers

- Owned risk checks with `--require-reviewed`: both pass (above).
- `node tools/step5-scope.mjs check --run phase-2-next-18 --phase adjudicate`:
  the only group-d diagnostics are pre-stamp `decision-stale` notices, which
  the engine's `step5-scope.mjs stamp` step resolves; no group-d routing,
  ownership, duplicate, missing or wrong-verdict error. Remaining errors in
  that run-wide check belong to other groups' unfinished dispatches.
- No blockers. No item needed escalation: every apparent gap examined during
  this read was resolved by the authored text, by a checked source, or by a
  routine reading convention recorded above.
