# Batch 63 notes — tgr-et02 / tgr-et02-examples

Run physics-remaining-80-2026-10-17, beta batch 63. This assignment owns
only the A/B pair tgr-et02 / tgr-et02-examples; every new carrier remains a
draft.

## Plan comparison and conflicts

The full design section at
research/plan-thermodynamics-and-general-relativity-track.md lines 387–407
reserves three A-page results (lem-tgr-gauge-killing-energy,
thm-tgr-electrochemical-stationarity, and
thm-tgr-finite-entropy-exchange-equilibrium) and one B example
(ex-tgr-electric-circulation-obstruction). The current plan-spec row agrees on
the page IDs, title, category, library, order 623, companion and requires:
["tgr-et01"]. Its empty item array is the expected pre-authoring placeholder;
the batch-63 manifest now records the finished inventory. There is no
plan-spec/design conflict in the assigned pair.

The older proposed-inventory.json also lists
def-tgr-future-mass-shell-measure, its tetrad-invariance result and Jüttner
integrals on TGR-ET01-A. Those are not in the exact TGR-ET01 design reservation
read for batch 62. They are unnecessary here: the local charged-data definition
uses only the massive shell set and proves the regularity needed to restrict its
transport field; it introduces no shell measure, normalization or Jüttner
claim. This inventory/design mismatch is recorded without taking ownership of
those TGR-ET01 items or adding them as logical prerequisites.

## Item inventory, dependencies and levels

The run dependency record puts batch 63 at level 1 with requires: ["62"].
The assigned item graph was expanded before authoring. Its item levels are:

| Item | In-run logical suppliers | Level |
|---|---|---:|
| thm-tgr-finite-entropy-exchange-equilibrium | none | 0 |
| def-tgr-charged-liouville-data | none; the TGR-ET01 geometry item is an unplaced draft outside this run item graph | 0 |
| lem-tgr-charged-liouville-preserves-mass-shell | def-tgr-charged-liouville-data (level 0) | 1 |
| lem-tgr-gauge-killing-energy | def-tgr-charged-liouville-data (level 0) | 1 |
| thm-tgr-electrochemical-stationarity | local definition and lemmas (levels 0–1); normalization and shell-polynomial drafts are outside this run item graph | 2 |
| ex-tgr-electric-circulation-obstruction | local definition and electrochemical theorem (level 2) | 3 |

The finite entropy-exchange theorem is independent of TGR-ET01 and is fully
proved locally. The charged geometry, thermal-normalization and shell-polynomial
item files currently exist as TGR-ET01 drafts, but the assigned TGR-ET01 page
manifest has no items and those draft proofs are not accepted. Their actual
statements and hypotheses were inspected against the conditional uses here;
the interfaces match. The placement and proof-status gaps are recorded in
batch-63.cross-batch-dependencies.json, and no draft result is treated as
established.

The added local definition supplies the charged trajectory, field, gauge,
units, mass-shell set and Liouville operator before any use. Its
well-definedness on the mass shell is established by the separate local lemma,
which cites the published choice-free inverse function theorem and proves
metric-shell tangency from antisymmetry of F. Imported math and the root
mathematics workspace are unchanged. The actual draft stationary geometry
definition inherits further GR suppliers and explicitly assumes
[[def-countable-choice]] for its smooth tangent-bundle structure; the new
charged items carry that same choice assumption directly, with no stronger
choice principle.

## Argument and prerequisites

lem-tgr-gauge-killing-energy fixes F=dA,
L_xi A=d Lambda_xi, Psi_xi=i_xi A-Lambda_xi,
Phi_xi=-c Psi_xi, and P=Mw, where w is the future unit tangent
parameterized by s_m=c tau. It expands Cartan's identity in coordinates,
uses the Killing equation to remove the metric term, and cancels the Lorentz
force against the derivative of q Phi_xi. The result is gauge invariant;
shifting the potential reference shifts both H_xi and mu_K by q C.
The proof does not claim trajectory existence.

thm-tgr-electrochemical-stationarity first proves the local whole-mass-shell
Liouville criterion: beta is Killing and
d zeta=-c q i_beta F. The conditional consuming proof applies the current
draft mass-shell-polynomial lemma to its symmetric quadratic and linear terms;
the exact four-dimensional, time-oriented, positive-mass interface matches.
Under the separate global potential symmetry and current draft
thermal-normalization lemma, the closed differential equation integrates on connected O to
N mu+q Phi_xi=mu_K, with N T=T_K. The two displayed local/global
grand-exponent forms are then checked algebraically. The proof explicitly
distinguishes the global compensator hypothesis from mere stationarity of F.

thm-tgr-finite-entropy-exchange-equilibrium treats finitely many abstract
cells with C1 concave entropies, independent energy and count coordinates,
and two affine constraints. It proves the constraint rows have rank two, derives
the multipliers from the annihilator of their kernel, checks the converse, and
uses concavity for a global maximum and strict concavity for uniqueness. It
asserts neither existence nor boundary attainment.

ex-tgr-electric-circulation-obstruction uses
O=R x S^1_L x R^2, F=E_0 dx^0 wedge vartheta, and
A=E_0 x^0 vartheta. The field is exact and stationary but
i_xi F=E_0 vartheta has period E_0 L != 0. The local Liouville criterion
would force a global zeta to have nonzero integral around a closed loop,
contradicting the zero period of an exact differential. The example does not
claim a global gauge compensator; it demonstrates why the global exactness
hypothesis is substantive.

## Source reading and dispositions

Six active full texts were inspected and source-fetch stamped: David Tong's
complete GR lecture notes §4.3.2; the authors' full eight-page
Constructing massive particles surfaces in static spacetimes preprint,
§II; Shi et al.'s complete eight-page charged-fluid paper §§2–3; Rueda,
Ruffini and Xue's full 12-page article §4; David Tong's Statistical Physics
chapter 1; and David Schaich's complete 171-page Statistical Physics notes,
Unit 6 pp. 80–90. Each source coverage row records its exact supported item
and its limitations. The notes supply context and convention checks; all
asserted results have local conditional proofs.

The Springer route for the Bogush–Kobialko–Gal’tsov article failed its initial
full-text attempt and five retries due to a short interstitial and cookie
walls. The same complete paper was recovered from the authors' arXiv v1 HTML.
The Springer route remains in coverage as a documented source-route drop; no
item or mathematical claim was dropped. A Caltech Ph236 lecture PDF candidate
also failed a direct curl retrieval because of an SSL hostname mismatch; full
independent treatments were located and inspected, and that route is not cited
as an active source.

`source-fetch-check --stamp` verified all six active full-text rows and
validated the seventh row as a documented route drop; no new stamps were
needed. The scoped content-policy, focused depcheck, manifest-integrity,
precheck, rendercheck, proof-layout, proof-contract and item dependency-level
checks passed. Proof-layout reports 6 changed items and 19 proof steps.

The shared batch dependency check reports a stale input digest after the
batch-63 manifest was finalized. An in-memory recomputation confirms the batch
63 row remains dependency level 1 with requires ["62"]. The run-level record is
shared owner evidence and was left unchanged.

## Readiness

`thm-tgr-finite-entropy-exchange-equilibrium` is recorded ready: it has no
prerequisites, complete proof and contract, and assigned-page placement. The
other five items are recorded escalated. The actual TGR-ET01 draft statements
match the uses, but the blank page manifest and unapproved proofs keep the
charged definition, its consumers and the B example conditional. All assigned
authoring is complete; independent review and TGR-ET01 resolution remain open.
The full-run Step 1 check remains open beyond this dispatch (82 of 288 run
items ready at the latest check); within batch 63, the one ready record is
closed and the five escalations remain current.
