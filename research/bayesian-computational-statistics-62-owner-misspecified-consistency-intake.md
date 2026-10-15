# Focused owner intake: misspecified consistency

Run: `bayesian-computational-statistics-62`. Supplier: batch 12,
`thm-posterior-consistency-at-kl-projection`. This is an authoring escalation,
not an open-problem classification. The supplier currently has no Proof and
honestly records `provenance.proof: not-supplied`.

## Exact confirmed defect

The missing step is the weak-test to exponential-test amplification used by
Kleijn–van der Vaart (2012), Lemma 3.3, printed pp. 374–375, and then by
Corollaries 4.1–4.2, printed pp. 378–379. The proof centers block statistics
using unnormalized `Q_theta^N` integrals and applies a probability Hoeffding
bound. These are not probability expectations when the tilt has mass other
than one. The existing two-point mass-1000 example confirms this issue is
within the local model class, but does not refute posterior consistency.

The stronger amplification assertion is actually false; the next section
gives a normalized finite-KL model demonstrating this. Consequently an
invented corrected proof of that assertion cannot discharge the local gap.
The main posterior theorem itself has not been refuted by this example.

## Counterexample to exponential amplification

Let the sample space be `{z,1,2,...}` with counting measure and true law
`P0(k)=2^{-k}` on positive integers, `P0(z)=0`. For integers `j>=4` let
`a_j=2^j/j^2`. Define a selected model density by
`p_*(k)=2^{-k} exp(-2 a_k)` for `k>=4`, and `p_*(k)=2^{-k}` for
`k<4`; assign its remaining mass to `z`. Define each alternative on positive
integers by `p_j(k)=p_*(k) exp(-2+a_j 1_{k=j})`, and assign its remaining
mass to `z`. All these densities are finite and normalized: on every
positive integer, `p_j(k)<=exp(-2) P0(k)`, so their positive-integer mass is
at most `exp(-2)<1`.

The KL minimum at `*` is `K*=2 sum_{k>=4}k^{-2}<infinity`, and
`K(j)-K*=2-j^{-2}>0`; hence `*` is the unique minimizer. The likelihood
tilt has `P0`-density `r_j(k)=exp(-2+a_j1_{k=j})`. Give the parameter set
the discrete metric if a metric is desired. A proper prior with positive
mass at `*` satisfies every relative-KL-support hypothesis. Thus none of
the finite-KL or normalized-model conditions avoids the following failure.

Write `N_j(n)=sum_{i<=n}1_{X_i=j}` and
`phi_n=1_{sup_{j>=4} a_j N_j(n)>n}`. The random variable
`a_X 1_{X>=4}` is integrable with expectation `sum_{j>=4}j^{-2}<1`.
Since the displayed supremum is bounded by its sample sum, the strong law
gives `phi_n=0` eventually almost surely. On `phi_n=0`, every likelihood
product is bounded by `exp(-n)`, and therefore
`sup_j Q_j^n(1-phi_n)<=exp(-n)`. These are stronger than the assumed weak
test limits.

Nevertheless both errors cannot be exponentially small. For sufficiently
large `n`, choose the least `j_n>=4` with `a_{j_n}>=4n`. Since
`a_j/a_{j-1}=2(j-1)^2/j^2<2`, we have `4n<=a_{j_n}<8n`.
On `E_n={N_{j_n}(n)=1}` the product tilt density is at least `exp(2n)`.
Also `n 2^{-j_n}` lies between `1/(8j_n^2)` and `1/(4j_n^2)`, so
`P0^n(E_n)=n2^{-j_n}(1-2^{-j_n})^{n-1}` is bounded below by a positive
constant times `j_n^{-2}`. Since `j_n` is of order `log n`, this is of
order `(log n)^{-2}`. If tests `omega_n` satisfied uniformly exponential
type-II error `sup_j Q_j^n(1-omega_n)<=exp(-Dn)`, then
`P0^n[(1-omega_n)1_{E_n}]<=exp(-(D+2)n)` and hence
`P0^n omega_n >= P0^n(E_n)-exp(-(D+2)n)`. This excludes an exponential
type-I bound for every positive exponent.

This example does not refute the posterior theorem: the constructed tests
actually vanish eventually almost surely and already have exponential
type-II error. It only rules out the proposed stronger intermediate result.

## Source reading

Independently fetched the full authoritative 29-page Kleijn–van der Vaart
article from `https://pure.uva.nl/ws/files/1850322/114737_376240.pdf` and
read the complete Lemma 3.3 argument and all of Section 4.1, including
Lemma 4.1 and Corollaries 4.1–4.2. The full PDF was locally extracted with
PyMuPDF. Also fetched the full 458-page July 2025 Kleijn book manuscript
from the URL in the supplier and read the relevant discussion and local
test/denominator arguments around printed pp. 158–163; this does not supply
an independently verified proof of the missing general amplification.
No claim of reading the entire book or article is made.

At the root owner's request the source comparison was extended within the
same focused investigation. Read the complete July 2025 book Theorem
5.3.1 and proof, printed pp. 158–160, its invoked Theorem 5.3.5 and proof,
printed pp. 163–165, and the Chapter 9 setup and Proposition 9.3.1, printed
pp. 298–302. Theorem 5.3.1 concludes root-n posterior contraction **in
probability**, under additional local smoothness, exponential envelope,
score invertibility, and prior-density hypotheses. Its test-construction
proof asserts that distant weak tests have uniform exponential power and
refers to Chapter 9. Chapter 9 explicitly starts with a model that is a
collection of probability distributions; its Proposition 9.3.1 states
equivalence of weak uniform testing and both-error exponential testing in
that probability model. It does not provide a proof for arbitrary
unnormalized likelihood tilts. Consequently these full relevant book
arguments do not close the missing general bridge. In contrast, the
2012 article's Corollaries 4.1–4.2 explicitly state almost-sure convergence,
so the current broad a.s. conclusion was not obtained by accidentally
reading a probability-convergence arrow as an a.s. statement. Corollary
4.2's separately identified outside-mass typo remains distinct.

Also fetched the complete Ramamoorthi–Sriram–Martin full text
`https://arxiv.org/pdf/1312.4620` and read Sections 1–3, including all
displayed proofs in those sections. Its a.s. results use convexity,
fractional-moment separation and covering/prior-tail hypotheses, or
fixed-fractional-moment and likelihood-ratio-continuity hypotheses. It
does not establish the present unrestricted weak-test interface. Its
comparison of a.s. with mean convergence concerns Kleijn–van der Vaart
2006, not the 2012 Corollary 4.1 a.s. assertion.

Fetched Bochkina's complete review PDF from
`https://www.maths.ed.ac.uk/~nbochkin/ReviewBvMmisspecifiedBochkinaRevision.pdf`
and read the relevant Sections 1.4.2–1.4.3. Those sections discuss
convex/fractional-moment and covering conditions, with separate
parameter-contraction premises for BvM. They give no correction or proof
of the missing 2012 amplification. This is a record of the actual sections
read, not a claim of complete review-paper reading.

Inspected Kleijn's current homepage and Research page for an erratum or
correction link, and Crossref's title-query entry for DOI
`10.1214/12-ejs675`; the returned entry has no `relation` or `update-to`
correction metadata. No erratum was located in those inspected sources.
General Google and DuckDuckGo HTML searches returned challenge/unusable
pages, so they provide no evidence of absence. This limited search does
not assert that no correction exists anywhere.

## Consumer intake

The actual supplier appears as an item link only in its own carrier and
its home page at this snapshot. Batch 13 retains the planned page edge
from `misspecified-posterior-consistency`, but its actual items do not use
the missing theorem as a proof premise. Read the complete Statements and
Proofs of its compact-uniform LAN-to-BvM theorem, QMD-to-BvM corollary,
misspecified iid LAN theorem, conditional misspecified iid BvM corollary,
and misspecified MLE sandwich theorem. The conditional iid BvM corollary
explicitly assumes contraction outside `n^{-1/2} M_n` for every divergent
deterministic `M_n` and states that ordinary KL consistency alone does not
discharge this premise. MLE consistency is also separately assumed. No
mathematical amendment to these items is implied by fixing this supplier;
the retained page edge is sequencing/context unless a richer rate theorem
is proved separately. This is a focused supplier-use assessment, not a
whole-item audit or acceptance of batch 13.

## Proposed next action and writer guard

Preserve the original weak-test, nonunique-minimizer, sigma-finite-tilt
scope while searching for a direct proof, possibly via almost-surely
vanishing type-I tests with exponential type-II power. Two delegated
Sol 6.1 medium investigations have been used; the first supplied the exact
counterexample above and the second is investigating the main theorem.
Do not narrow the Statement silently and do not present the false
amplification as a local supplier. No source carrier has been edited.
Native batch 12 was still active at the last state inspection; the owner
must confirm its `endedAt` before any overlapping source edits.

## Final focused investigation disposition

Subsequent actual native state inspection records batch 12 ending
`2026-10-15T06:26:27.586Z`, successfully, and batch 13 ending
`2026-10-15T06:24:31.964Z`, successfully. Exact supplier and splitting-lemma
source before images were preserved in the sibling directory
`bayesian-computational-statistics-62-owner-misspecified-consistency-before/`.
No source edit was made before or after drain.

The independent alternative-proof branch did not find either a valid
exact-scope proof or a counterexample to the main posterior theorem.
The normalization route has a specific remaining obstacle. With a good
block set `A_N`, `P0^N(A_N^c)=alpha_N` and
`sup_theta Q_theta^N(A_N)<=beta_N`, one can use original `P_theta`
probability normalization on rejected blocks and pay the common weight
`G_N=sum_{i<=N}log(p0/pstar)(X_i)`. Integrability controls
`E0[G_N^+1_{A_N^c}]=o(N)` when `alpha_N` tends to zero (by uniform
integrability of sample averages), but does not compare that quantity to
`log(1/beta_N)`, which can itself be `o(N)`. No argument establishing the
required comparison was verified. This is an obstruction to that attempted
proof, not a counterexample to the theorem.

Another correct observation is that the ordinary restricted-prior
likelihood marginal `M_n^V=int_V prod_i(p_theta/p0)(X_i) Pi(dtheta)` is a
nonnegative `P0`-martingale. The weak tests imply convergence in probability
to zero of the relative numerator
`M_n^V/prod_i(pstar/p0)(X_i)`. Neither martingale convergence nor this
in-probability statement supplies the missing relative rate or almost-sure
posterior conclusion. They are not recorded as proof completion.

The original theorem Statement is unchanged and remains genuinely blocked
on a local proof. It is not classified as false or open. The root owner
was informed of this exact disposition. No optional tests or gates were
run, and no item changed, so no final item proof-layout invocation is
applicable at this handoff.

## Sound repair proposal, not applied

The following is available if the root owner concludes that a necessary
hypothesis repair is appropriate. It preserves arbitrary sigma-finite
tilts, nonunique KL minimizers, almost-sure posterior convergence, and
nonsummable type-I errors. It does change the original weak-test interface
and therefore requires explicit owner direction and the same reviewer’s
consumer checks before application.

In the main theorem replace exactly its test hypothesis and last sentence
by tests with `phi_n(X_1,...,X_n)->0` `P0^infinity`-almost surely and, for
some `beta_eta>0`,
`sup_{d(theta,Theta*)>eta}Q_theta^n(1-phi_n)<=exp(-n beta_eta)` eventually.
The type-I expectations need not be summable or exponentially small.
Equivalently the a.s. premise may be discharged by summable first moments.

The local proof is then complete: choose `0<epsilon<alpha<beta_eta`, use
the existing denominator lemma to obtain `D_n>=exp(-n alpha)` eventually
almost surely, and define
`N_n=int_V prod_i(p_theta/pstar)(X_i)(1-phi_n) Pi(dtheta)`.
Tonelli gives `E0[e^{n alpha}N_n]<=exp[-n(beta_eta-alpha)]`.
Markov and Borel–Cantelli give `e^{n alpha}N_n->0` almost surely, and the
posterior splitting inequality gives
`Pi(V|X)<=phi_n+e^{n alpha}N_n->0`. The hypothesis is strictly weaker than
requiring exponentially small type-I errors; the finite-KL counterexample
above satisfies it while admitting no such exponential type-I tests.

A source-exact intermediate repair can generalize the existing
`lem-exponential-test-posterior-splitting-at-kl-projection` Statement by
replacing only its type-I exponential bound with the a.s. convergence
premise; retain the same type-II bound and `beta>epsilon`. In its Proof
step 1.1 retain the choice `epsilon<alpha<beta` and denominator conclusion,
and replace the subsequent Markov/Borel–Cantelli argument for `phi_n`
with the explicitly assumed a.s. convergence. Steps 1.2, 2.1 and 3.1 are
unchanged. The main theorem would then be a two-step application of that
generalized lemma. Its contract must cite that lemma at the application
step, record the unchanged denominator use, and record AC only as already
inherited through the supplied-density/KL convention. Manifest hypotheses
and provenance must mirror the actual repaired Statement; this document
does not edit or certify them.

If applied, downstream batch 13 still cannot use ordinary consistency to
discharge a root-n parameter-rate premise. Its five reviewed conditional
results need no Statement repair for this supplier-use issue; its page
handoff may describe the proved sufficient test interface rather than an
unavailable unconditional weak-test proof. Preserve the actual planned
page edge and all conditional rate hypotheses.
