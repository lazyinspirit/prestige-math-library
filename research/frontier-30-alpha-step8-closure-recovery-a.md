# Frontier-30 Step-8 closure recovery — group a, rejudge round 1

## Scope read

Read all 8 assigned pages, all 129 group-a items, and all 28 directly cited
published dependencies. The four exact live rejection tuples in the recovery
envelope were still current and unadjudicated when handled. No orphan tuple,
incoming alert, or cross-group defect was found.

## Sources consulted

- Pavel Etingof, [*Representations of Lie Groups*, Lecture
  13](https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec13.pdf),
  Theorem 13.5: for a complex semisimple Lie algebra, the center is polynomial
  on rank-many generators of the invariant degrees, the PBW symmetrization
  lifts homogeneous invariants centrally and gives
  $\operatorname{gr}Z(U(\mathfrak g))=S(\mathfrak g)^{\mathfrak g}$, and
  $U(\mathfrak g)$ is free over its center. This is the exact mathematical
  support used for both licensed repairs.
- Pavel Etingof, [*Lie Groups and Lie Algebras I & II*, Corollary
  13.8](https://ocw.mit.edu/courses/18-755-lie-groups-and-lie-algebras-ii-spring-2024/mit18_755_s24_lec_full.pdf):
  PBW symmetrization restricts to a filtered vector-space isomorphism from
  symmetric invariants to the center, with the expected associated-graded map.
  This confirms the local filtered argument inserted in both repaired items.
- Hochschild and Serre, [*Cohomology of Group
  Extensions*](https://www.sas.rochester.edu/mth/sites/doug-ravenel/otherpapers/hochschild-serre.pdf):
  the transgression is the natural map arising from the extension spectral
  sequence. The five-term disposition below does not import an unstated
  construction from this source; it rests on the target item's explicit [A1]
  assumption of the full exact sequence.

## Exact adjudications

| item | exact context | outcome | disposition |
|---|---|---|---|
| `cor-the-center-is-a-polynomial-algebra-of-rank-many-generators` | `1a23205b12f5a61707706e0b1e5767f7d1dbbe705d334856533c853462b602ea` | `confirmed_fatal` (`dependency_citation`) | The cited Harish-Chandra statement exports only an unfiltered algebra isomorphism, while the PBW-degree conclusion needs nontrivial filtered compatibility. Repaired under defect `frontier-30-S8R1-a-001`. |
| `prop-the-quadratic-casimir-element-is-central` | `c7190808f5a172e9346cc1e0755581906b7d708cb0837d17861b62167210d601` | `confirmed_nonfatal` | Step 2 identifies the canonical tensor with the identity and explicitly invokes Killing-form invariance. The displayed diagonal-invariance identity follows by the immediate bilinear calculation $B([x,y],z)+B(y,[x,z])=0$; a direct citation would be polish, not a fatal gap. No edit. |
| `thm-enveloping-algebra-is-free-over-its-center` | `0264e33f0f5050b06e55f4b40fe3db5889514fc310ec27155bc4e60d550b2911` | `confirmed_fatal` (`dependency_citation`) | The compact Harish-Chandra interface does not state invariant PBW lifting or the graded-center equality essential to step 1. Repaired under defect `frontier-30-S8R1-a-002`. |
| `thm-five-term-exact-sequence-as-extension-and-transgression-data` | `ffa6db96443f99ddcfad4780e87fe9d4e145cc95304266a9e890719e9bb3c218` | `confirmed_nonfatal` | “Exactly” overlooks that [L1] targets $H^1(N,A)$ rather than its $Q$-invariants. This is non-load-bearing: restriction lands in the invariant subgroup, [A1] explicitly assumes exactness of the full displayed five-term sequence, and step 1.3 derives the claimed kernel-image criterion directly from [A1]. No edit. |

## Licensed repairs

1. `cor-the-center-is-a-polynomial-algebra-of-rank-many-generators`
   now derives the filtered invariant-center identification from the explicit
   equivariant PBW symmetrization map. Chevalley restriction supplies
   homogeneous invariant generators, and a leading-symbol induction proves
   that their symmetrizations are algebraically independent central generators
   with the asserted PBW filtration degrees.
2. `thm-enveloping-algebra-is-free-over-its-center` now proves locally that PBW
   symmetrization is filtered and equivariant and hence that
   $\operatorname{gr}Z(U(\mathfrak g))=S(\mathfrak g)^{\mathfrak g}$. The
   existing harmonic-decomposition and filtered-graded argument then proves
   freeness without inflating the Harish-Chandra citation.

No `verification.judge` record was present on either repaired item. No
nonfatal item, contract, impact record, or judge verdict was edited.

## Rejudge targets

- `cor-the-center-is-a-polynomial-algebra-of-rank-many-generators`
- `thm-enveloping-algebra-is-free-over-its-center`

The engine owns the targeted rejudge and any context-expanded currency set.

## Cross-group alerts

None.

## Checks and blockers

- Focused `precheck`: 2/2 repaired items passed.
- Focused `rendercheck`: 2/2 repaired items passed with real KaTeX and YAML.
- `depcheck --quiet`: passed; existing corpus warnings only.
- `step8-scope.mjs check --run frontier-30`: passed with 7 groups, 694 items,
  no orphan rejection, and no cross-group alert.
- `step8-guard.mjs` against `pre-step8`: passed; all 176 current Step-8
  changes were licensed.
- `defect-ledger.mjs check`: the two group-a fatal rows are covered, but the
  global check did not pass because 17 confirmed-fatal tuples owned by groups
  d and f still lacked their matching defect-ledger rows at final check time.
  Those rows are outside this dispatch and were not altered here.

There is no blocker in group a's assigned work. The only observed global
residue is the out-of-scope defect-ledger work just recorded.
