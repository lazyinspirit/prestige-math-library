# Batch 22 authoring notes — inverse-problems-knot-theory-all-109-2026-10-19

The item checkpoints below are chronological. Their “pending” lines describe the authoring stage at that checkpoint; the final validation and Step-1 records at the end supersede those interim statuses.

## Scope, plan reconciliation, and inventory

This handoff owns only the A/B pair function-space-mcmc-and-pcn, its draft
items, and batch 22 evidence. The run-local owner direction was read before
construction and controls the compact statement-first, frontmatter-only page
policy. The repository instructions, schema, workflow, task, full IP-22 design
section, current plan projection, and batch dependency evidence were inspected.
No published item, shared plan, engine state, or existing verdict was edited.

The IP-22 design names the planned A items
alg-ip-prior-preserving-crank-nicolson,
thm-ip-pcn-posterior-invariance, and
thm-ip-pcn-small-step-acceptance-under-potential-bounds; it asks for B leaves
comparing pCN with a function-space random walk whose reverse proposal flow is
singular. The plan-spec.json rows match the design's page IDs, titles,
category, companion IDs, order 3040/3041, and all page-level requires edges.
Both plan-spec item arrays are empty, which is an unpopulated preauthoring
projection rather than a contradictory inventory. The batch manifest now
records the three planned A items and two B leaves, plus three A-page
intermediate results required for well-definedness and the complete symmetry
proof. The additions are:

- lem-ip-separable-hilbert-borel-laws-determined-by-orthonormal-coordinates,
  which supplies the measure-determination step for the Gaussian pair proof;
- lem-ip-pcn-transition-kernel-is-measurable, which proves the algorithm
  actually returns a probability kernel and justifies its definition;
- lem-ip-pcn-reference-pair-law-is-symmetric, which proves the pCN
  prior-flow symmetry used by posterior detailed balance.

These helpers retain the full design claims and add only the local prerequisites
needed to prove them. The 100-item page cap is not close to binding.

The design and plan-spec page interfaces agree. The assigned A page requires
the function-space prior, posterior propriety, general-state reversibility, and
MCMC ergodicity pages; its B companion requires the A page. The published
general-state MCMC page was inspected at its current path and its two item
carriers were read. Its reversibility definition is equality of the joint flow
with its coordinate transpose on an arbitrary measurable state space; its
theorem proves invariance with no standard-Borel or convergence assumption.
The published ergodicity/mixing page was also inspected. It records separate
recurrence and drift hypotheses and explicitly distinguishes invariance from
convergence. No MCMC convergence, ESS, mesh-independent cost, or approximate
forward-solver claim is used.

## Current supplier inspection

The actual, current bodies and proofs were read for:

- Batch 15: def-ip-prior-on-a-forward-domain,
  lem-ip-gaussian-series-prior-regularity, and
  lem-ip-coordinate-vectors-form-a-basis-of-ell-two. Their current Step-1
  readiness records are ready. The prior interface requires a Borel domain
  of full prior mass and a measurable forward-map restriction. The Gaussian
  series lemma proves the weighted Hilbert-valued limit, Borel Gaussian law,
  diagonal trace-class covariance, and its AC/Countable-Choice/Fernique
  branches. The coordinate lemma proves the canonical basis of real ell-two.
- Batch 16: def-ip-misfit-evidence-and-posterior-law and
  thm-ip-function-space-posterior-propriety. Their current Step-1 readiness
  records are ready. The definition permits a positive-infinite potential and
  defines the normalized update only when evidence is positive and finite.
  The theorem's common lower-envelope and continuity assumptions imply
  positive finite evidence at each declared datum.
- Published generic MCMC suppliers:
  def-general-state-reversibility-by-symmetric-flow-measure and
  thm-general-state-reversibility-implies-invariance. Their exact statements
  and complete proof were inspected; the theorem integrates the symmetric
  flow's two marginals and asserts invariance only.
- Published measurability and Gaussian suppliers:
  thm-measurability-of-integration-against-a-kernel,
  lem-prior-and-model-kernel-define-joint-law,
  def-borel-gaussian-random-element-on-a-separable-banach-space,
  def-multivariate-normal-law,
  lem-characteristic-function-of-a-multivariate-normal-law,
  thm-separable-hilbert-space-has-a-countable-orthonormal-basis,
  thm-parseval-equivalences-for-a-complete-orthonormal-family,
  lem-finite-measure-uniqueness-on-a-pi-system, and
  thm-fernique-integrability-for-separable-banach-gaussian-law. The complete
  local proofs and exact axiom interfaces needed by this batch were inspected.

No required supplier is missing or still being authored. The MCMC mixing page
is a page-level prerequisite and scope warning only; no mixing result is a
logical premise of the authored claims.

## Item dependency inventory and levels

The current run dependency artifact lists batch 22 at level 3 with prerequisite
batches 15 and 16. The actual in-run item levels below were computed from the
direct item deps, using the current batch 15/16 manifest labels and ascending
supplier order:

| Item | In-run supplier levels | Item level |
|---|---|---:|
| lem-ip-separable-hilbert-borel-laws-determined-by-orthonormal-coordinates | none | 0 |
| alg-ip-prior-preserving-crank-nicolson | def-ip-prior-on-a-forward-domain 1; def-ip-misfit-evidence-and-posterior-law 2 | 3 |
| lem-ip-pcn-transition-kernel-is-measurable | algorithm 3 | 4 |
| lem-ip-pcn-reference-pair-law-is-symmetric | algorithm 3; coordinate-law lemma 0 | 4 |
| thm-ip-pcn-small-step-acceptance-under-potential-bounds | algorithm 3; thm-ip-function-space-posterior-propriety 3 | 4 |
| thm-ip-pcn-posterior-invariance | kernel lemma 4; pair-symmetry lemma 4; algorithm 3 | 5 |
| cex-ip-infinite-dimensional-random-walk-reverse-flow-singular | lem-ip-gaussian-series-prior-regularity 2; pCN pair-symmetry lemma 4; lem-ip-coordinate-vectors-form-a-basis-of-ell-two 0 | 5 |
| ex-ip-pcn-normal-posterior-invariant | pCN invariance theorem 5; algorithm 3 | 6 |

The dispatched task's scheduling-input identifier remains
39238200a921d410259359c8dc7ca8eec58d1bad8de093ef2e4429f5bda80f5e. At the
initial checkpoint, the untracked run-level dependency artifact had
input_sha256 35bd18e05e1db8c57d68dd5e07d8fd1ce6660d8cf226a98ef075054fc1aa5e70
and raw SHA-256 263a46ef2783a66ee877349212286007443a2d2b0c2a664a5e6c35db4e5d70d0.
At final handoff, the live untracked artifact instead has input_sha256
afa735930ed9a7afab03e24ca9a2d535bfd768dff89ffa20e8a149dc88462bdf, raw
SHA-256 adb47bcfea5fc39e5069188327f568c56864c459569a66b2fb771183c9cfc6fb;
the current batch-22 manifest has raw SHA-256
9e21c6413c218e139a7ef0f113d68b25b87a161efef8d8d407b68eb87b730c43. Both
artifact snapshots identify batch 22 as level 3 with prerequisites 15 and 16,
but the dispatched scheduling input and live artifact hash differ, and the
artifact changed during this authoring window without a tracked git history.
The change's actor is not recoverable from the current untracked files; the
shared artifact was not edited by this pair. The local item levels use actual
manifest edges and supplier item labels.

## Source reading and scope

The complete relevant arguments were read in these full-text treatments:

- S. L. Cotter, G. O. Roberts, A. M. Stuart, and D. White, “MCMC Methods for
  Functions: Modifying Old Algorithms to Make Them Faster,” Statistical
  Science 28(3) (2013), full PDF. Sections 4.2 and 6.1 give the pCN proposal,
  prior-flow reversibility and random-walk obstruction; Section 6.2, Theorem
  6.4, gives small-step average acceptance under its stated potential bounds.
  The local proof is supplied in full rather than copied from the citation.
- M. Dashti and A. M. Stuart, The Bayesian Approach to Inverse Problems,
  full lecture notes, Chapter 8, §8.2, Definitions/Proposition 8.2.3–8.2.4 and
  Examples 8.2.6–8.2.7. The complete general-state detailed-balance argument
  and pCN/random-walk examples were inspected.
- M. Hairer, A. M. Stuart, and S. J. Vollmer, “Spectral gaps for a
  Metropolis–Hastings algorithm in infinite dimensions,” full paper, §§2.1–2.4.
  Its pCN convergence results have separate drift/Lipschitz hypotheses; they
  are not used to infer convergence from invariance.
- G. Teschl, Topics in Real and Functional Analysis, §2.1, Theorems 2.3–2.4,
  for countable Hilbert bases and Parseval's identity. The source statement
  and complete relevant reasoning were inspected.

One attempted Gelman et al. BDA3 PDF fetch for the scalar example failed at
the web tool's 55,911,785-byte content limit. A search found MIT 18.05 Class
15; the full 10-page note and its §§6–7 normal-normal derivation were read and
the item metadata now cites that source. The failed candidate, exact searches,
and successful alternative are preserved in coverage `retrieval_history`, and
the example's local conjugate-update supplier and dependency are recorded in
its item contract. No cited source remains unresolved or dropped, so no owner
escalation/source-drop record was needed. The coverage file records URLs,
locators, supported items, harvested result dispositions, and the successful
`source-fetch-check --stamp` evidence.

## Initial authoring state

The live autopilot status was recomputed from
.autopilot/inverse-problems-knot-theory-all-109-2026-10-19: the run remains
at 1-scaffold, with no worker in flight and an owner-held scaffold blocker.
That state and its verdict were not edited. The recent git log has no tracked
history for the untracked run-level dependency artifact or batch-22 scaffold
manifest. The only authorized output here is this pair's draft content and
batch-22 evidence.

Next action: author the listed A items in ascending item level, verify the
proof arguments against the inspected sources and supplier carriers, then
author B leaves, contracts, coverage, and local checks.

## Item checkpoint — lem-ip-separable-hilbert-borel-laws-determined-by-orthonormal-coordinates

The lemma proves that two Borel probability measures on a real Hilbert space
with a fixed finite or countable complete orthonormal basis agree whenever all
finite coordinate pushforwards agree. The proof identifies the Borel
sigma-algebra with the sigma-algebra generated by finite-coordinate cylinders:
Parseval writes each open ball using countably many finite-coordinate
inequalities, and separability supplies a countable ball base. Finite-measure
uniqueness on the resulting generating pi-system finishes the argument.
Its only axiom assumption is Countable Choice, used by the supplied Parseval
theorem; it does not assume AC.

Direct dependencies: def-borel-sigma-algebra,
def-borel-probability-law-on-a-polish-space, def-countable,
def-countable-choice, def-hilbert-space,
def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis,
def-norm-and-normed-space, def-probability-measure, def-separable-space,
cor-inner-product-induces-a-norm,
lem-finite-measure-uniqueness-on-a-pi-system,
lem-q-and-irrationals-dense-r, thm-cauchy-schwarz-in-an-inner-product-space,
thm-parseval-equivalences-for-a-complete-orthonormal-family,
thm-product-of-countable, and thm-rationals-countable. Its item level is 0
because it has no in-run supplier. Teschl, Topics in Real and Functional
Analysis, §2.1, Theorems 2.3–2.4, was read for countable bases and Parseval:
https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf.
The full local proofs of the finite-measure uniqueness and Parseval suppliers
were also inspected. The proof contract, source-fetch stamp, and scoped checks
remain pending; no readiness decision has been recorded yet.

Next action: author alg-ip-prior-preserving-crank-nicolson at item level 3.

### Completed item — alg-ip-prior-preserving-crank-nicolson

The algorithm takes a centered Borel Gaussian reference on a separable real
Hilbert space, a full-measure Borel forward domain, a Borel extended-real
potential with positive finite evidence, and beta in [0,1]. It extends the
potential by +infinity off the declared domain, proposes
sqrt(1-beta^2)u + beta xi with xi from the reference, accepts by the
potential ratio when both values are finite, and rejects otherwise. This
preserves the design's no-Lebesgue-density convention and gives a total
transition rule even when a proposal leaves a non-linear forward domain.

Direct deps: def-axiom-of-choice,
def-borel-gaussian-random-element-on-a-separable-banach-space,
def-ip-misfit-evidence-and-posterior-law,
def-ip-prior-on-a-forward-domain, and
def-measure-kernel-and-probability-kernel. Its local justified_by obligation
is lem-ip-pcn-transition-kernel-is-measurable, which will prove row
probability and Borel event measurability. The item level is 3 from the ready
batch-15 prior definition at level 1 and batch-16 posterior definition at
level 2. Full-text support is Cotter et al. §§4.2, 6.1–6.2; Dashti–Stuart
Chapter 8 §8.2; and Hairer–Stuart–Vollmer §2.1, all recorded in item metadata
and the pending batch coverage harvest.

The formula also makes the off-domain behavior explicit: proposals outside D
have infinite potential and are rejected. No forward-domain closure under
linear combinations is assumed. No mathematical or supplier gap remains for
this definition; formatting, fetch stamping, and the well-definedness lemma
remain pending.

Next action: author lem-ip-pcn-transition-kernel-is-measurable at item level 4.

### Completed item — lem-ip-pcn-transition-kernel-is-measurable

This lemma proves the exact well-definedness obligation of the algorithm.
For every Borel proposal set, the affine Gaussian proposal is a pushforward
probability and its event probability is measurable in the current state.
The proof separately verifies the extended potential's Borel extension,
acceptance-function measurability, rejection probability, pointwise
countable-additivity, and row mass one. It introduces no choice axiom.

Direct deps: alg-ip-prior-preserving-crank-nicolson,
def-borel-sigma-algebra, def-measure-kernel-and-probability-kernel,
def-real-exponential-function-and-e,
thm-arithmetic-and-lattice-operations-preserve-measurability,
thm-composition-with-borel-functions-preserves-measurability,
thm-continuous-preimages-of-borel-sets-are-borel,
thm-indefinite-integral-of-a-nonnegative-function-is-a-measure, and
thm-measurability-of-integration-against-a-kernel. Item level 4 follows from
the in-run algorithm at level 3. Full-text support is Cotter et al. §4.2 and
§6.1 and Dashti–Stuart Chapter 8 §8.2; the mechanical evidence is recorded in
the final coverage harvest, fetch stamp, and scoped checks below.

No missing kernel or measurability supplier remains. The algorithm's
justified_by pointer now has a complete assigned proof supplier. Its proof
contract, source-fetch stamp, proof-layout, scoped checks, and ready decision
are recorded in the final handoff section below.

Next action: author lem-ip-pcn-reference-pair-law-is-symmetric at item level 4.

### Completed item — lem-ip-pcn-reference-pair-law-is-symmetric

The lemma proves that for a centered Borel Gaussian law $\mu_0$ on a
separable real Hilbert space, independent $U,\xi\sim\mu_0$, and
$V=\sqrt{1-\beta^2}U+\beta\xi$, the Borel pair laws of $(U,V)$ and $(V,U)$
agree for every $\beta\in[0,1]$. The proof equips $H\times H$ with the sum
inner product, verifies its completeness, separability, product Borel
structure, and product orthonormal basis, proves all finite projections are
centered multivariate normal, computes matching covariance forms using
Fernique moments and factorization under independence, and applies the local
coordinate-law uniqueness lemma. The choice use is exactly AC for the
Gaussian/multivariate-normal interfaces and its implication of Countable
Choice for the coordinate-law supplier. No covariance inverse or Lebesgue
density is used; $\beta=0$ and $\beta=1$ are included.

Direct dependencies now include the algorithm and Gaussian interfaces,
Hilbert basis and countability facts, Borel product and random-law facts,
multivariate-normal characteristic-function uniqueness, Fernique, expectation
factorization, and
lem-ip-separable-hilbert-borel-laws-determined-by-orthonormal-coordinates.
Its item level is 4 from the algorithm at level 3; the coordinate-law helper
is level 0. Source support was inspected in full at Cotter et al. (2013),
§6.1, Theorem 6.2 and its prior-flow symmetry reasoning, and Dashti–Stuart,
Chapter 8, §8.2, Example 8.2.7:
https://eprints.maths.manchester.ac.uk/2215/1/1202.0709v3.pdf and
https://www.damtp.cam.ac.uk/research/cia/files/teaching/Inverse_Problems_2020/LectureNotes2020.pdf.
The item proof is local and does not claim the source citations alone complete
the coordinate-measure argument. Proof contract, coverage stamping, layout
validation, and the readiness decision remain pending.

Next action: author the small-step acceptance theorem at item level 4.

### Completed item — thm-ip-pcn-small-step-acceptance-under-potential-bounds

The theorem uses precisely the Cotter–Roberts–Stuart–White Assumptions 6.1:
$0\le\Phi(u)\le K(1+\|u\|^p)$ for $p,K>0$, and for each radius a finite
Lipschitz constant on that norm ball. For the full-space target, the local
function-space posterior-propriety result applies with $D=H$, singleton data,
and the zero lower envelope, giving $0<Z<\infty$; finite-valued $\Phi$ makes
the target equivalent to $\mu_0$. Fernique gives all polynomial moments under
the prior, and target moments are dominated by $Z^{-1}$ times prior moments.
Along any sequence $\beta_n\to0$, $V_{\beta_n}\to U$ almost surely. Local
Lipschitz continuity gives the potential difference tending to zero, while
the polynomial bound and Gaussian moments give an integrable envelope for
that difference. Dominated convergence then gives the mean acceptance limit
one. The result makes no mixing, convergence-rate, or cost claim.

Direct dependencies: algorithm and prior/posterior interfaces,
thm-ip-function-space-posterior-propriety, Fernique, zero-integral
characterization, and dominated convergence. Item level is 4 from the
algorithm (3) and posterior-propriety result (3). Cotter et al. (2013),
§6.2, Assumptions 6.1(1)–(2), Theorem 6.4, full paper:
https://eprints.maths.manchester.ac.uk/2215/1/1202.0709v3.pdf. The source
assumptions and conclusion were read in full; the local proof supplies the
moment domination and limiting argument. Contracts, fetch stamping, layout
validation, and readiness decision remain pending.

Next action: prove posterior invariance by detailed balance.

### Completed item — thm-ip-pcn-posterior-invariance

For the algorithm's total potential extension $\bar\Phi$, write
$w=e^{-\bar\Phi}$. The proof first identifies the reference joint flow
$\Lambda_0=\mu_0(du)Q_\beta(u,dv)$ with the law of
$(U_0,\sqrt{1-\beta^2}U_0+\beta\xi)$ for independent reference draws; the
pair-symmetry supplier makes this flow symmetric. The pointwise identity
$w(u)\alpha(u,v)=\min\{w(u),w(v)\}$ holds both for finite potential values
and when either value is $+\infty$, so the accepted target flow is a
symmetric multiplier of $\Lambda_0$. The rejection flow lies on the diagonal
and is symmetric because coordinate swap fixes every diagonal point. Their
sum is the general-state joint flow, hence the kernel is reversible and
invariant. This proves no uniqueness, convergence, mixing, ESS, mesh-cost,
or approximate-solver assertion.

Direct in-run suppliers: the algorithm at level 3, and the probability-kernel
and reference-pair-law lemmas at level 4; the final theorem is level 5. The
proof also uses the general-state symmetric-flow definition and
reversibility-implies-invariance theorem, plus the joint-law construction and
change-of-variables facts. Source passages inspected: Cotter et al. (2013),
§4.2 eq. (4.7) and §6.1 Thm. 6.2;
https://eprints.maths.manchester.ac.uk/2215/1/1202.0709v3.pdf; Dashti–Stuart,
Chapter 8 §8.2, Def. 8.2.3 and Prop. 8.2.4;
https://www.damtp.cam.ac.uk/research/cia/files/teaching/Inverse_Problems_2020/LectureNotes2020.pdf;
Roberts–Rosenthal (2004), §2, Definition and Proposition 1,
https://www.probability.ca/jeff/ftpdir/probsurv.pdf. All relevant full-text
arguments were read. Proof contract, coverage stamping, layout validation,
and readiness decision remain pending.

Next action: construct the infinite-dimensional random-walk reverse-flow
singularity counterexample.

### Completed item — cex-ip-infinite-dimensional-random-walk-reverse-flow-singular

For $H=\ell^2(\mathbb N)$, the item uses independent coordinate pairs
$X_j,Y_j\sim N(0,1)$ and the trace-class Gaussian reference with coordinates
$U_j=2^{-j/2}X_j$, $\xi_j=2^{-j/2}Y_j$. For a fixed $\beta\in(0,1]$ and
random-walk proposal $V=U+\beta\xi$, the scaled coordinate increments
$D_j=2^j(V_j^2-U_j^2)=2\beta X_jY_j+\beta^2Y_j^2$ are IID, have mean
$\beta^2$, and have finite second moment bounded by $8\beta^2+6\beta^4$.
The finite-variance strong law makes the Borel event
$A_\beta=\{n^{-1}\sum_{j\le n}2^j(v_j^2-u_j^2)\to\beta^2\}$ full under
the forward flow and null under its transpose, where the limit is
$-\beta^2$. Thus the flows are mutually singular, and neither is absolutely
continuous with respect to the other. The same-scale pCN pair flow is
symmetric by the local pair-law lemma. The proof includes construction of the
independent Gaussian series and measurability of the separating event.

Direct dependencies include the batch-15 Gaussian-series and ell-two basis
suppliers and the batch-22 pCN pair-law lemma. The item level is 5 because its
highest in-run supplier is the pair-law lemma at level 4. Source arguments
read: Cotter et al. (2013), §4.2 eq. (4.3) and §6.1 Thm. 6.3,
https://eprints.maths.manchester.ac.uk/2215/1/1202.0709v3.pdf; and
Dashti–Stuart, Chapter 8 §8.2, Examples 8.2.6–8.2.7,
https://www.damtp.cam.ac.uk/research/cia/files/teaching/Inverse_Problems_2020/LectureNotes2020.pdf.
The cited sources motivate the random-walk/pCN comparison; the local
strong-law separator is fully proved. Contracts, coverage stamping, layout
validation, and readiness decision remain pending.

Next action: complete the scalar normal-posterior pCN example.

### Completed item — ex-ip-pcn-normal-posterior-invariant

The example uses the prior $N(0,1)$, one observation $Y\mid u\sim N(u,1)$,
and datum $0$. The ready batch-16 normal-normal conjugate supplier, at
$\mu_0=0$, $\tau_0^2=\sigma^2=1$, and $n=1$, gives posterior $N(0,1/2)$.
The likelihood density is a constant times $e^{-u^2/2}$, so the pCN potential
is $\Phi(u)=u^2/2$ and its acceptance probability is
$\min\{1,e^{(u^2-v^2)/2}\}$. The batch-22 invariance theorem then gives
invariance for every $\beta\in[0,1]$; at $\beta=0$ this is the identity
transition, and at $\beta=1$ the prior-independence proposal is corrected by
the displayed ratio.

Direct dependencies: batch-22 algorithm (3) and invariance theorem (5), plus
the normal-law density and conjugate-update suppliers. The item level is 6.
The source recovery history is preserved: the original Gelman et al. BDA3 PDF
URL was attempted with web.open but failed because its 55,911,785-byte content
exceeded that tool's fetch limit. An alternative search located MIT 18.05,
Spring 2022, Class 15, full 10-page PDF; §§6–7 and the worked
completion-of-square example were read. Its URL is
https://ocw.mit.edu/courses/18-05-introduction-to-probability-and-statistics-spring-2022/mit18_05_s22_class15-prep.pdf.
The pCN source was also read at Cotter et al. (2013), §4.2 eq. (4.7),
https://eprints.maths.manchester.ac.uk/2215/1/1202.0709v3.pdf. The item source
metadata now cites the successful MIT full text. Coverage retrieval history
will retain the failed candidate and the successful alternative. Contracts,
coverage stamping, layout validation, and readiness decision remain pending.

Next action: synchronize cross-batch dependency evidence and review all eight
carriers for statement and proof-format compliance.

## Final scoped validation and run-wide blockers

The batch manifest now mirrors all eight carriers and the A/B frontmatter-only
inventories. The direct in-run graph is acyclic and has these final levels:
coordinate-law lemma 0; algorithm 3; kernel, pair-symmetry, and small-step
items 4; posterior invariance and random-walk counterexample 5; scalar normal
example 6. A scoped in-memory dependency calculation over the 114 nonempty
pages in the run's current manifests, including the actual batch-15 and
batch-16 suppliers, found no graph errors and matched all eight declared
levels. The written batch-22 cross-batch file contains all nine direct edges
to batch-15/16 suppliers; a manifest cross-check reported nine expected, nine
actual, with no missing or extra edges.

The table records every in-run and batch-15/16 edge used for the level
calculation. The batch manifest retains each carrier's complete direct
dependency array, including published suppliers.

Exact in-run supplier IDs used for the levels above:

| Item | In-run dependencies | Cross-batch dependencies | Level |
|---|---|---|---:|
| lem-ip-separable-hilbert-borel-laws-determined-by-orthonormal-coordinates | none | none | 0 |
| alg-ip-prior-preserving-crank-nicolson | none | def-ip-prior-on-a-forward-domain (15); def-ip-misfit-evidence-and-posterior-law (16) | 3 |
| lem-ip-pcn-transition-kernel-is-measurable | alg-ip-prior-preserving-crank-nicolson | none | 4 |
| lem-ip-pcn-reference-pair-law-is-symmetric | alg-ip-prior-preserving-crank-nicolson; lem-ip-separable-hilbert-borel-laws-determined-by-orthonormal-coordinates | none | 4 |
| thm-ip-pcn-small-step-acceptance-under-potential-bounds | alg-ip-prior-preserving-crank-nicolson | def-ip-prior-on-a-forward-domain (15); def-ip-misfit-evidence-and-posterior-law (16); thm-ip-function-space-posterior-propriety (16) | 4 |
| thm-ip-pcn-posterior-invariance | alg-ip-prior-preserving-crank-nicolson; lem-ip-pcn-reference-pair-law-is-symmetric; lem-ip-pcn-transition-kernel-is-measurable | def-ip-prior-on-a-forward-domain (15); def-ip-misfit-evidence-and-posterior-law (16) | 5 |
| cex-ip-infinite-dimensional-random-walk-reverse-flow-singular | lem-ip-pcn-reference-pair-law-is-symmetric | lem-ip-coordinate-vectors-form-a-basis-of-ell-two (15); lem-ip-gaussian-series-prior-regularity (15) | 5 |
| ex-ip-pcn-normal-posterior-invariant | alg-ip-prior-preserving-crank-nicolson; thm-ip-pcn-posterior-invariance | none | 6 |

The exact direct dependency arrays, including published prerequisites, are
mirrored from each carrier in the batch manifest. They are also listed here
for the final handoff:

- `lem-ip-separable-hilbert-borel-laws-determined-by-orthonormal-coordinates`: def-borel-sigma-algebra, def-borel-probability-law-on-a-polish-space, def-countable, def-countable-choice, def-hilbert-space, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, def-norm-and-normed-space, def-probability-measure, def-separable-space, lem-finite-measure-uniqueness-on-a-pi-system, lem-q-and-irrationals-dense-r, cor-inner-product-induces-a-norm, thm-cauchy-schwarz-in-an-inner-product-space, thm-parseval-equivalences-for-a-complete-orthonormal-family, thm-product-of-countable, thm-rationals-countable.

- `alg-ip-prior-preserving-crank-nicolson`: def-axiom-of-choice, def-borel-gaussian-random-element-on-a-separable-banach-space, def-ip-misfit-evidence-and-posterior-law, def-ip-prior-on-a-forward-domain, def-measure-kernel-and-probability-kernel; justified_by: lem-ip-pcn-transition-kernel-is-measurable.

- `lem-ip-pcn-transition-kernel-is-measurable`: alg-ip-prior-preserving-crank-nicolson, def-borel-sigma-algebra, def-measure-kernel-and-probability-kernel, def-real-exponential-function-and-e, thm-arithmetic-and-lattice-operations-preserve-measurability, thm-composition-with-borel-functions-preserves-measurability, thm-continuous-preimages-of-borel-sets-are-borel, thm-indefinite-integral-of-a-nonnegative-function-is-a-measure, thm-measurability-of-integration-against-a-kernel.

- `lem-ip-pcn-reference-pair-law-is-symmetric`: alg-ip-prior-preserving-crank-nicolson, def-axiom-of-choice, def-borel-gaussian-random-element-on-a-separable-banach-space, def-countable-choice, def-dual-space-of-a-normed-space, def-hilbert-space, def-law-or-distribution-of-a-random-element, def-moments-variance-and-covariance, def-independent-random-elements, def-multivariate-normal-law, def-separable-space, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, def-product-sigma-algebra-and-finite-product-sigma-algebras, def-second-countable-space, lem-borel-product-of-second-countable-spaces, lem-characteristic-function-of-a-multivariate-normal-law, lem-characteristic-function-of-a-normal-law, lem-characteristic-functions-under-affine-maps-and-independent-sums, lem-countable-iff-surjection-from-n, lem-ip-separable-hilbert-borel-laws-determined-by-orthonormal-coordinates, thm-choice-implies-dependent-implies-countable-choice, thm-factorization-of-expectations-for-independent-variables, thm-independent-random-elements-have-product-joint-law, thm-fernique-integrability-for-separable-banach-gaussian-law, thm-linearity-of-the-lebesgue-integral-on-l-one, thm-product-of-countable, thm-separable-hilbert-space-has-a-countable-orthonormal-basis, thm-uniqueness-of-a-law-from-its-characteristic-function.

- `thm-ip-pcn-small-step-acceptance-under-potential-bounds`: alg-ip-prior-preserving-crank-nicolson, def-axiom-of-choice, def-borel-gaussian-random-element-on-a-separable-banach-space, def-hilbert-space, def-ip-misfit-evidence-and-posterior-law, def-ip-prior-on-a-forward-domain, def-separable-space, def-integral-over-a-measurable-set, thm-dominated-convergence, thm-fernique-integrability-for-separable-banach-gaussian-law, thm-ip-function-space-posterior-propriety, thm-nonnegative-integral-zero-iff-zero-almost-everywhere.

- `thm-ip-pcn-posterior-invariance`: alg-ip-prior-preserving-crank-nicolson, def-axiom-of-choice, def-general-state-reversibility-by-symmetric-flow-measure, def-ip-misfit-evidence-and-posterior-law, def-ip-prior-on-a-forward-domain, def-law-or-distribution-of-a-random-element, def-measure-kernel-and-probability-kernel, def-probability-measure, def-product-sigma-algebra-and-finite-product-sigma-algebras, def-independent-random-elements, lem-borel-product-of-second-countable-spaces, lem-ip-pcn-reference-pair-law-is-symmetric, lem-ip-pcn-transition-kernel-is-measurable, lem-prior-and-model-kernel-define-joint-law, thm-change-of-variables-for-expectation, thm-general-state-reversibility-implies-invariance, thm-independent-random-elements-have-product-joint-law, thm-rectangle-criterion-for-independent-random-elements, thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique.

- `cex-ip-infinite-dimensional-random-walk-reverse-flow-singular`: cor-countable-independent-copies-exist, cor-iid-finite-variance-strong-law, def-axiom-of-choice, def-borel-sigma-algebra, def-countable-choice, def-dependent-choice, def-identically-distributed-and-iid-random-variables, def-independent-random-elements, def-law-or-distribution-of-a-random-element, def-measure-kernel-and-probability-kernel, def-standard-normal-and-normal-laws, lem-ip-coordinate-vectors-form-a-basis-of-ell-two, lem-ip-gaussian-series-prior-regularity, lem-ip-pcn-reference-pair-law-is-symmetric, lem-ip-separable-hilbert-borel-laws-determined-by-orthonormal-coordinates, lem-measurable-functions-preserve-independence, lem-normal-location-scale-mean-and-variance, lem-standard-normal-fourth-moment, lem-prior-and-model-kernel-define-joint-law, thm-arithmetic-and-lattice-operations-preserve-measurability, thm-change-of-variables-for-expectation, thm-choice-implies-dependent-implies-countable-choice, thm-continuous-preimages-of-borel-sets-are-borel, thm-grouping-independent-sigma-algebras, thm-independent-random-elements-have-product-joint-law, thm-measurability-of-integration-against-a-kernel, thm-factorization-of-expectations-for-independent-variables, lem-borel-product-of-second-countable-spaces.

- `ex-ip-pcn-normal-posterior-invariant`: alg-ip-prior-preserving-crank-nicolson, def-axiom-of-choice, def-standard-normal-and-normal-laws, lem-normal-location-scale-density, thm-ip-pcn-posterior-invariance, thm-normal-normal-conjugate-update.


Final scoped checks:

- `source-fetch-check --coverage research/inverse-problems-knot-theory-all-109-2026-10-19-batch-22.coverage.json --stamp`: 8/8 sources fetch-verified, 0 drops. This includes Cotter et al., Dashti–Stuart, Hairer–Stuart–Vollmer, Teschl, Roberts–Rosenthal, and MIT 18.05. The original Gelman PDF fetch failure and successful MIT alternative search/read are preserved in `retrieval_history`.
- `coverage-checklist`: 2 page entries, 28 harvested results, 0 errors, 0 warnings.
- `proof-contract --strict`: 7/7 proof-bearing items checked, 0 errors, 0 warnings; the contracts record 109 exact supplier excerpts and all numbered proof steps.
- `proof-layout` on the eight changed items: 8 items, 36 steps, 0 defects.
- `rendercheck` on eight items and two pages: passed; frontmatter parses, math renders, and there are no multiline displays or wikilinks inside math.
- `statement-first` on all eight items plus page-frontmatter/body checks: 0 errors; both authored page bodies are empty.
- `prosecheck` on the same ten files: 0 errors, 0 warnings.
- Focused `depcheck` on all eight items: 0 errors, 0 warnings; it checked the selected items and their 1,706-item / 469-page prerequisite closure.

Two repository-wide checks are blocked by material outside this pair. The
full-run `item-dependency-levels.mjs check --run` reports empty scaffold
inventories and pre-existing declared-level mismatches in other batches; none
of the eight batch-22 items appears in its mismatch list, and the scoped graph
calculation above verifies their actual levels. The full-run
`batch-dependency-levels.mjs check --run` fails before graph evaluation while
parsing `items/lem-kontsevich-morse-isotopy-decomposition.md:23`: the unquoted
source title `Gualtieri, Topology I: Smooth Manifolds, §3.4, Theorem 3.26` is
treated as a nested YAML mapping. This published dependency item is outside
batch 22 and was not edited. The run-wide `proof-contract-coverage.mjs` also
stops on an empty/invalid inventory for
`khovanov-to-floer-spectral-sequence`, outside this batch; the batch-22 strict
contract check passes independently. These blockers are recorded for the
owner's shared-run reconciliation.

The dispatch scheduling-input hash and the current untracked run dependency
artifact hash remain inconsistent as recorded above. No shared plan, shared
run-level dependency artifact, engine state, or owner verdict was changed.

The carrier, contract, source, and placement evidence is complete; final
per-item Step-1 dispositions are recorded below.

## Step-1 readiness records

`node tools/step1-decisions.mjs record` wrote `ready` records for all eight
assigned items, binding each carrier to its declared dependencies and, for
the algorithm, its `justified_by` kernel lemma. A direct verification through
the Step-1 decision reader reports all eight records `closed: true`, with
matching hashes. No existing escalation or owner-owned record was overwritten.

The run-wide readiness scan before these writes reported 390 ready of 618
items and remained open on other pairs' escalations and empty scaffold
inventories. This does not affect the eight local record hashes or certify the
run. The final run-wide item-level command still returns exit 1 with unrelated
inventory and pre-existing level mismatches (106 output lines total); none of
the eight batch-22 IDs is in its error list. The scoped 114-nonempty-page
dependency calculation matched all eight declared levels. The batch-level
check remains blocked by the malformed outside-scope YAML carrier named above,
and the run-wide proof-contract coverage check remains blocked by the empty
Khovanov spectral-sequence inventory. The batch-22 contracts and all local
checks pass independently.

This completes the assigned batch-22 Step-1 authoring scope. All work remains
draft and awaits independent review and owner reconciliation of the shared
run-level scheduling-hash discrepancy and the outside-scope gate blockers.

## Final live autopilot status

Status was recomputed from
`.autopilot/inverse-problems-knot-theory-all-109-2026-10-19` after authoring.
The run is still active at `1-scaffold`, with 51/109 pairs covered; batch 22
is still listed among missing scaffold pairs while artifact completion is
deferred until authoring coverage is complete and writers drain. Nothing is
currently in flight. The owner-held Step-1 blocker still points to
`research/inverse-problems-knot-theory-all-109-2026-10-19-step1-blockers.json`.
The shared run state and blocker were not changed; the eight local `ready`
records do not close that run-level gate or certify publication.
