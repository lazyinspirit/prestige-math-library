# Frontier 38 Step-1 re-adjudication: AV-7 and RL-5

Run: `frontier-38-owner-30`. This supplement re-adjudicates two findings from
the preserved first `1-drift` review. It does not edit or replace
`research/frontier-38-owner-30-step1-blockers.json` or the original drift
report. A fresh drift review must still test both findings after the local
bridge inventory and binding contract are stable.

## AV-7 — normal varieties, normalization, and Zariski's Main theorem

**Verdict: the local prerequisite chain is now authored, audited for dependency
closure and registered on A366.061; the preserved historical finding remains
open until a fresh drift/source gate and ordinary engine certification.** Keep
A/B at orders 366.061/366.062. Do not add AV-15/17/19 or any later page as a
supplier.

A366.061 retains its original page requirements: published tangent-space/
smoothness foundations, CA-19 normalization finiteness and CA-20 algebraic
Zariski Main. The local support packet is registered in plan-spec in this
dependency order:

1. lem-av7-finite-morphism-projective-over-projective-base;
2. lem-av7-zero-dimensional-standard-smooth-local-tools;
3. lem-av7-relative-integral-closure-finite-affine-charts;
4. lem-av7-integral-closure-elementary-etale-base-change;
5. lem-av7-coprime-factorization-finite-component-neighbourhoods;
6. lem-av7-classical-zmt-relative-integral-closure-neighbourhoods;
7. lem-av7-proper-quasi-finite-factor-is-finite.

Items 2–6 close the full nonaffine classical Zariski Main seam; item 7
derives proper quasi-finite finiteness from item 6; item 1 handles finite
morphism projectivity through a coherent algebra even when it is not locally
free. The original 24 A claims remain intact but are not yet counted among the
seven registered support rows in plan-spec. When the core claim items are
reconciled, the A-page target is 31 items, below the 100-item cap. No claim has
been narrowed and no future
AV-15/17/19 dependency has been added.

The source matrix in
research/frontier-38-owner-30-local-prereq-av7-zmt-projectivity.md records
the complete Stacks §37.43 proof and auxiliaries, EGA IV4 §§18.12.12–15,
Milne 8.45–8.54, and exact earlier published AG-P5/CA-19/CA-20 imports.
The local packet closes the finite-component, integral-closure base-change,
and faithfully-flat nonaffine descent interfaces explicitly. I audited all
seven item proofs and their direct contracts; local precheck is 7/0,
rendercheck covers 7 files, and actual-renderer layout is 7 items / 32 steps /
0 defects. The recursive closure is 1,403 nodes, with no missing or
nonpublished dependencies, cycles, or later Algebraic Geometry suppliers.

This is a prerequisite and plan integration, not a gate pass. The original
13-finding drift evidence is preserved byte-for-byte; generated manifests and
tasks remain held until A885 support is complete and all retained findings are
re-adjudicated by a fresh normal workflow run.

## RL-5 — projectives, standard filtrations, and BGG reciprocity

**Verdict: the owner-held statement conflict is corrected in the binding
design; the pair remains subject to normal Step-3 proof and review.** No page
edge, pair scope, projective-cover claim, Verma-flag claim, reciprocity claim,
or translation claim was removed.

The old row named `lem-a-sufficiently-antidominant-verma-is-projective-in-a-
truncation` while its proof condition was that no higher allowed weight can
link to the Verma. For the fixed positive-Borel/downward-weight convention,
that is maximality in the finite highest-weight-label poset. The row is now
`lem-maximal-verma-is-projective-in-a-finite-truncation`: for a finite
downward-closed ideal `Gamma` of labels in a fixed finite block, a maximal
`lambda` has `M(lambda)` projective in the corresponding Serre subcategory.
The proof is the exact top-weight functor
`Hom(M(lambda), X) ~= X[lambda]`: maximality makes every vector in that
weight space singular, and weight-space evaluation is exact. The truncation
concerns highest-weight labels, not the infinitely many weights inside each
Verma module and not a purported finite lower ideal in the whole weight
lattice.

The B counterexample now names the actual nonprojective object: in the regular
`sl_2` block, the antidominant Verma `M(-m-2)` is not projective, while
`M(m)` is projective under this convention. Its projective cover has the
nonsplit exact sequence
`0 -> M(m) -> P(-m-2) -> M(-m-2) -> 0` for `m >= 0`.

Source check: Etingof, *Representations of Lie Groups*, §16.3, Proposition
16.4 and Corollaries 16.5–16.6, printed pp. 86–87, gives the dominant
`M(lambda-rho)` projectivity via the exact top-weight functor and constructs
enough projectives by finite-dimensional tensoring. Example 20.8, printed
pp. 104–105, states the `sl_2` projective and Verma flags and explicitly
notes that `M(-lambda-2)` is not projective. Lin, Lecture 8, pp. 3–7, is the
independent comparison route recorded in RL-5. The retrieved/inspected full
text is `/tmp/prestige-bgg-review/etingof.txt`; the canonical locator is the
Etingof course PDF already recorded in `research/frontier-38-owner-30-alpha-
step1-drift.md`.

No run manifest, generated task, scope ledger, autopilot state, or old drift
receipt changed in this re-adjudication. The corrected RL-5 design is ready
for normal item planning/authoring; mathematical acceptance still belongs to
the ordinary gates.
