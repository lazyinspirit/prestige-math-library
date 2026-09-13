# Phase 2 next 21 — Step 3a scope review, group d

Run: `phase-2-next-21`  
Dispatch: `step3a-d-a40fd89f6c6bf5d0`  
Batches: 11, 12, 4  
Role: scope review only; no item-level proof approval or owner decision is made here.

## Evidence reviewed

I read the current twelve-page manifests, all three coverage ledgers and batch
notes, the current plan objects and scope ledger, the controlling SET-15,
SET-16, SET-18, SET-19, PT-13 and PT-14 prose, the drift report, dependency
records, and the current owner reconciliation. The six pairs contain 130
planned items (96 A and 34 B). Their 15 fetch-verified source records contain
172 harvested-result dispositions. The three coverage checks report no errors
or warnings, and `manifest-deps` reports 130 items with no errors. Each batch's
cross-batch dependency input is `[]`; the direct A-page requirements are all
earlier pages except for the intentional PT-14 dependency on PT-13. The only
owner reconciliation changes concern two differential-geometry pages and do
not affect this group. The drift report records `no-drift` for all six A pages.

For independent scope confirmation, I read the complete relevant preservation,
finite-support iteration, MA and symmetric-extension arguments in Karagila,
*Lecture Notes: Forcing & Symmetric Extensions*, Chapters 3–7 and 10
(https://karagila.org/files/Forcing-2023.pdf); the ZFA/permutation-model
development and complete First Embedding Theorem argument in Jech, *The Axiom
of Choice*, Chapters 4 and 6; the complete relevant discrete martingale sections
in van der Vaart, *Martingales, Diffusions and Financial Mathematics*, §§2.2,
2.4–2.6 and 2.8–2.9
(https://diamhomes.ewi.tudelft.nl/~avandervaart/books/stochint.pdf); and Roch's
complete Martingale CLT proof and Azuma–Hoeffding argument
(https://people.math.wisc.edu/~roch/grad-prob/gradprob-notes19.pdf and
https://people.math.wisc.edu/~roch/grad-prob/gradprob-notes20.pdf). These checks
confirm the selected theorem families and the principal hypothesis boundaries;
they are not proof approvals for the future items.

## Scope decisions

### `preservation-cohen-forcing-and-the-continuum` — sufficient

The 15-item A page supplies the preservation vocabulary and the standard
closure/distributivity and chain-condition theorems, nice-name reduction and
counting, Cohen and collapse forcings, the generalized Delta-system ccc
argument, mutual genericity, exact continuum control, a higher-regular failure
of GCH, and the formal negative consistency conclusions. The four B items test
nice names, Levy collapse, mutually generic coordinates, and the false ccc
versus countable-closure implication. This fully serves the page's role of
proving the negative CH/GCH clauses in the recorded independence remark.
Full Easton realization and singular-cardinal control belong to SET-31, while
choice failure belongs to the separate symmetric-model branch.

### `finite-support-iterations-and-martins-axiom` — sufficient

The 19-item A page covers two-step factorization, finite-support iterations,
complete embeddings, successor and limit ccc preservation, bounded-stage name
capture and size control, the definitions of `MA(kappa)` and MA, the countable
case and CH implication, reduction to small ccc orders, the omega-two
bookkeeping model of MA plus continuum aleph-two, formal consistency transfer,
and the promised exponentiation, meagre/null-union and ccc-product
consequences. The four examples include a two-step Cohen product, the MA
diagonal-real argument, small null/meagre sets, and the false implication
`MA -> CH`. This covers every clause assigned from `rem-martins-axiom`.
Suslin-hypothesis consequences are correctly developed on SET-17, and other
iteration supports and proper forcing begin later.

### `permutation-models-and-transfer-to-zf` — sufficient

The 13-item A page develops ZFA and its pure kernel, permutation actions,
supports and normal filters, hereditary symmetry and the Fraenkel–Mostowski
theorem; it then treats the basic, second Fraenkel and ordered Mostowski models,
boundable formulas, the Jech–Sochor first embedding and transfer theorem,
Pincus's interface and limitations, and a formal ZF transfer of the socks
failure. Four companion items isolate the decisive support calculations and
the false identification of ZFA with ZF. This is enough for the pair's role of
proving `rem-fraenkel-socks-model`, including the otherwise essential atom-to-ZF
step. Broader weak-choice transfer consequences are intentionally reserved for
the later choice-principle pages.

### `symmetric-extensions-and-basic-choice-failure-models` — sufficient

The 14-item A page contains the forcing-name action, symmetric systems and
supports, the symmetry lemma, canonical check names, the full transitive ZF
model theorem, the basic Cohen system, the symmetric orbit set without a
symmetric enumeration, its infinite Dedekind-finite set of reals and resulting
failure of well-orderability/AC, formal relative consistency, and a direct
atom-free socks model. The four B items test orbit/enumeration separation,
Dedekind-finiteness equivalences, the sock-swap argument, and the false claim
that symmetric submodels satisfy Choice. This supplies the intended direct
proofs behind the Cohen and Fraenkel recorded remarks. Symmetric collapse,
ultrafilter/BPI failures and stronger choice separations are coherent later
topics in SET-20 and SET-21.

### `martingale-inequalities-and-convergence` — sufficient

The 18-item A page provides the standard discrete-time core: upcrossings and
submartingale convergence, Doob's L1 and Lp maximal inequalities, Lp and UI
convergence and closed-martingale characterization, reverse martingales and
Levy upward/downward convergence, the zero-one application, conditional
Hoeffding, Azuma–Hoeffding, and a variance-clock/Lindeberg martingale CLT. Its
nine B items exercise forward and reverse conditional-expectation martingales,
random-walk estimates and terminal-value convergence, while explicitly testing
loss of mass, failure of L1 convergence and the p=1 maximal bound. This is a
substantive and balanced bridge from discrete martingales to stopping times.
Continuous-time martingales belong to PT-19; Burkholder-type and stochastic-
calculus inequalities are not promised by this focused page.

### `stopping-times-and-optional-stopping` — sufficient

The 17-item A page covers stopping-time event tests and constructions, the
sigma-algebra at a stopping time, stopped variables and processes,
measurability, stopped martingales, bounded optional sampling, three distinct
valid unbounded-limit hypotheses, Wald's first equation, and gambler's-ruin
probability and duration. The closing remark makes the passage-to-the-limit
obligation explicit. Nine companion items include biased and symmetric ruin,
Wald and likelihood-ratio applications, plus counterexamples for last-exit
times, unbounded hitting times, nonintegrable stopping times, and integrable
stopping with uncontrolled increments. This adequately covers discrete
optional stopping and its principal traps. Brownian stopping is assigned to
PT-19, and strong Markov applications follow after the Markov-chain interface.

## Non-scope warning

Published `prop-meagre-subsets-form-a-sigma-ideal` states that countable-union
closure assumes Countable Choice and its proof flattens a chosen sequence for
each member, but its frontmatter deps omit the already-published
`def-countable-choice`. This is a real published dependency/axiom-record defect.
It does not block the MA pair: `thm-ma-small-unions-of-meagre-sets` proves its
ZFC+MA assertion directly and does not depend on that proposition. No scaffold
or published item was edited by this review.

No pair needs enrichment or merger on scope grounds. No unresolved scope
uncertainty remains.
