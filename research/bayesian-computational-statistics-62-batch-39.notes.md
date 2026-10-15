# Bayesian and Computational Statistics — batch 39 notes

Run: `bayesian-computational-statistics-62`  
Pair: `adaptive-mcmc-convergence-and-limitations` / `adaptive-mcmc-convergence-and-limitations-examples`  
Batch dependency level from the dispatch: **4**; prerequisite batch: **35**.  
Pinned scheduling input: `17c13c2fd465e3d10d52824fd8e855172f1554647f2f93bfe89f4af7fffb04c4`.

## Plan comparison and reconciliation

The controlling design is §BCS-36 of
`research/plan-bayesian-computational-statistics-track.md`. It calls for
diminishing adaptation, containment, marginal convergence under simultaneous
uniform ergodicity or containment, the common drift/minorization route, and
counterexamples for convergence and strong-law overreach. Its inventory table
names four core items. The local manifest adds the definitions and intermediate
lemmas needed to prove those claims and supplies the three assigned examples;
it does not add a CLT or assert a general strong law.

`plan-spec.json` and the generated task list only BCS-32 as the page
prerequisite, while the controlling BCS-36 design lists BCS-29 and BCS-32. I
followed the controlling design and added
`general-state-mcmc-kernels-and-reversibility` to the A-page requirements; the
B page requires the A page. The B example uses the current BCS-29 reversibility
definition and invariance theorem. The A-page convergence proofs do not import
a reversibility result. `plan-spec.json` has empty item arrays for both pages;
the track inventory controls the four planned IDs.

The track description of Theorem 18 omits the support clause for the
minorizing measure. Roberts–Rosenthal Proposition 17 states that the measure is
on $C$, so the local geometric lemma requires $\nu_\gamma(C)=1$. Its proof
uses this in the first-hit argument to propagate the minorization after the
first visit to $C$. The source remark gives a separate way to drop strong
aperiodicity under an additional lower bound on $V$ outside $C$; that branch is
not claimed here.

The source’s Theorem 23 bounded-function weak law was read through its full
proof but is recorded out of scope: the assigned local claims concern marginal
convergence and strong-law failure. Example 24’s stronger strong-law failure
under Theorem 5 conditions is now covered by a separate local finite-state
construction in the assigned counterexample item. The source’s One-Two path
construction is not imported.

The added direct page requirement changes the input to the shared batch
scheduler. The read-only `batch-dependency-levels` check reports the stored
run artifact stale. BCS-29 is already upstream of BCS-32, so the assigned
maximum item level remains 4, but the owner must recompute the shared graph and
input hash after batch manifests settle. No scheduler or autopilot state was
edited.

## Inventory, in-run dependencies, and item levels

| Item | In-run suppliers | Level |
|---|---|---:|
| `def-diminishing-adaptation` | none | 0 |
| `lem-total-variation-coupling-and-kernel-contraction` | none | 0 |
| `def-adaptive-mcmc-containment` | `def-diminishing-adaptation` | 1 |
| `lem-adaptive-mcmc-block-perturbation-bound` | `def-diminishing-adaptation`; `lem-total-variation-coupling-and-kernel-contraction` | 1 |
| `lem-adaptive-mcmc-uniform-drift-minorization-bound` | `lem-total-variation-coupling-and-kernel-contraction` | 1 |
| `cex-diminishing-adaptation-alone-does-not-imply-strong-law` | `def-diminishing-adaptation` | 1 |
| `thm-adaptive-mcmc-converges-under-uniform-ergodicity-or-containment` | containment and diminishing-adaptation definitions; block perturbation and TV lemmas | 2 |
| `ex-adaptive-mcmc-loss-of-containment` | diminishing-adaptation and containment definitions | 2 |
| `cor-adaptive-mcmc-containment-from-uniform-drift-minorization` | containment and diminishing-adaptation definitions; geometric-rate lemma; adaptive convergence theorem | 3 |
| `ex-uniformly-ergodic-adaptive-mcmc-family` | diminishing-adaptation definition; adaptive convergence theorem | 3 |

All direct `deps` arrays match the carriers. The target labels recompute to
levels 0, 1, 2, and 3. The additional item suppliers are explicit in the
manifest; external dependencies do not raise an in-batch level.

## Mathematical and supplier audit

The total-variation helper proves the $[0,1]$ test-function dual formula,
kernel contraction, and a coupling bound using a measurable agreement event.
That formulation works on arbitrary measurable spaces without assuming the
diagonal is measurable. The block perturbation lemma proves its frozen-kernel
mixture is a probability measure and telescopes the adaptive/frozen difference.
The convergence theorem handles its two hypotheses separately: the
simultaneously uniform-ergodic case and containment, using boundedness and
convergence in probability of the adaptation sizes.

The uniform drift/minorization lemma is proved locally with a killed-chain
first-hit bound, an $L$-step small-set minorization, a split coupling with an
explicit measurable coupling flag, and a geometric tail estimate. It does not
import the BCS-32 geometric-ergodicity conclusion or its bivariate coupling
lemma. The corollary supplies the adaptive $V$-moment recursion, derives
containment by Markov’s inequality, and then applies the local convergence
theorem.

The loss-of-containment example gives an exact refresh-kernel recursion and a
positive lower bound on the adaptive marginal’s distance from $\pi$. The
uniform example checks reversibility on the two-state flow matrix and proves
the uniform rate directly. The strong-law counterexample uses three fixed
kernels, each with common uniform invariant law and a common geometric rate.
Rare block gates give $D_n\to0$ in probability; active blocks make the
conditional transition law produce IID Bernoulli$(9/10)$ outputs. A finite
second-moment/Markov bound and independent block gates prove that infinitely
many superlong active blocks keep the empirical mean above its target along a
subsequence. Countable Choice and Dependent Choice are used only through the
countable-product probability theorem.

Current BCS-29 supplier bodies were inspected: the symmetric-flow definition
and the complete reversibility-implies-invariance proof apply to the two-state
example. All five BCS-29 items have current Step 1 `ready` records. The current
BCS-32 page and its 26-item manifest were inspected; all 26 supplier items have
current Step 1 `ready` records. The exact small-set/drift definition gives the
pointwise minorization and drift clauses used locally. These records indicate
author readiness only, not independent mathematical acceptance.

## Sources and retrieval

The A page has two independent full-text treatments, including complete
lecture notes:

- Roberts and Rosenthal, “Coupling and Ergodicity of Adaptive MCMC,”
  `https://www.probability.ca/jeff/ftpdir/adapt.pdf`, complete 27-page PDF.
  Sections 2, 5, 6, and 7 were read for the adaptive setup, Theorems 5 and 13,
  Proposition 17, and Theorem 18. Section 9, including the complete Theorem 23
  proof and Example 24, was read for the strong-law/WLLN disposition.
- Fort, “Adaptive MCMC: theory and methods,”
  `https://www.math.univ-toulouse.fr/~gfort/Slides/Warwick09.pdf`, complete
  47-slide PDF. Slides 19–25 and 30–32 were read for marginal convergence,
  diminishing adaptation, containment, frozen-kernel comparison, and
  drift/minorization. Slides 34–40 were inspected and recorded out of scope for
  this pair’s claims about positive strong laws.

The coverage ledger records 13 harvested results and their dispositions.
`source-fetch-check --stamp` verified 2/2 sources; no retrieval failed, so no
`source_resolution` entry was needed. Fetch stamps: Roberts–Rosenthal, 209,275
bytes, 27 pages, SHA-256 prefix `02081427967a4d46`; Fort, 611,486 bytes, 47
pages, SHA-256 prefix `c02c04ddae5adefb`.

## Scoped checks and readiness

| Check | Result |
|---|---|
| Assigned item dependency levels | 10/10 match; levels 0–3 |
| Combined batch 32/35/39 dependency calculation | All batch-39 items match; one unrelated batch-32 example label mismatch (`ex-gibbs-chain-invariant-but-reducible`, 5 vs 0) |
| `manifest-deps` and carrier/manifest equality | 10 items; 0 missing arrays, 0 mismatches |
| Focused `depcheck` | 10 selected items; 0 errors, 0 warnings |
| Focused `fwdcheck` | 10 selected items and prerequisite graph; 0 errors, 0 warnings |
| Focused `extcheck` | 10 items; 0 unproved/external fallback records |
| `content-policy` | 10 items; 0 errors, 0 warnings |
| Normative `precheck` | 8 proof-bearing items; 0 failures |
| Strict proof contracts | 10/10 items; 0 errors, 0 warnings; 41 step derivations and 51 exact supplier citations |
| Citation fidelity | 51 citations; 0 missing quotes, 0 widening candidates |
| Explicit `proof-layout` | 10 items, 41 steps, 0 defects |
| `rendercheck` | 12 files; YAML and KaTeX checks pass |
| `coverage-checklist` | 1 A page, 13 harvested results; 0 errors, 0 warnings |
| `source-fetch-check` | 2/2 sources verified |

`step1-decisions record` wrote `ready` records with the exact declared direct
dependencies for all ten assigned items; a fresh hash check closes 10/10 for
this batch. The whole-run check remains open at 55/763 current records because
of unrelated missing or stale records elsewhere. Assigned records are author
readiness only; they are not independent approval or publication.
