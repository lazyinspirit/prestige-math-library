# Admission under the five-pair cap

The owner authorizes at most five additional existing Phase 2 pairs, provided
the additions do not introduce substantial unmet prerequisites themselves.
Admit **two**: Fourier Transform, Convolution and Approximate Identities
(FA22), then Schwartz Space and the Plancherel Theorem (FA23). Retain all
original20. Three slots remain unused; the earlier25-pair proposal is superseded.
This admission closes the identified Fourier supplier gap in the intended
construction; it does not claim that the Lie or large-cardinal gaps are solved.

## Evidence and limits

Root read every statement and strategy in the retained four-page batch8
inventory, the controlling FA22/23 sections, the later inventory amendments,
and the moved momentum example from batch7. All58 external item identities
in that retained inventory exist and are published; exact homes and hashes
are in the companion JSON. The three formerly local complex-Lp interfaces
are now published and must be imported. Mere publication is not the proof
argument: the dependency reductions and complete extra local argument below
explain why the unbuilt spectral/Hilbert chain is unnecessary.

Root read the complete published bounded dense-extension proof and complex
Lp completeness/a.e.-subsequence proof. The complex translation/convolution
interface was inspected, with its complete relevant approximate-identity
estimates; not every transitive ancestor was reread. Further prerequisite
auditing remains part of construction and author review. This receipt is not
independent mathematical approval or a fabricated whole-closure certificate.

Primary-source check: downloaded Dyatlov's MIT18.155 notes (2022) from
https://math.mit.edu/~dyatlov/18.155/155-notes.pdf and extracted/read the whole
section11.1, printed pp119–126, through Proposition11.18's proof. This covers
the Gaussian regularization and Schwartz transform/inversion argument, with
its different normalization explicitly accounted for. No reading of the rest
of the book is claimed. Source exercises remain local proof obligations,
not allegedly supplied arguments. The fresh successful download is separate
from the17 exhausted URLs in the old proposal; no retry exception is inferred.

## Complete inventory, without a new prerequisite chain

FA22 uses the published complex Lp conventions, convolution/mollification,
Fubini/Tonelli, Gaussian integration, Lebesgue differentiation, finite complex
measures and regularity interfaces. Its local Gaussian lemma is proved by
differentiation and integration by parts, without Schwartz theory or an ODE
existence theorem. The radial-majorant lemma explicitly supplies pointwise
approximation; finite-measure smoothing and uniqueness are before consumers.
The no-universal-rate example has the positive sum of modulated Gaussians
construction in the retained inventory, so it does not need Banach–Steinhaus.
The Poisson transform follows by the inverse transform of an exponential;
no residue theorem is required. Wiener orientation is not a proof supplier.

FA23 constructs its seminorm metric and completeness by uniform derivative
limits. It does not use a general locally convex space theorem. Parseval
follows from Schwartz inversion and absolutely integrable Fubini; Plancherel
then uses published L2 completeness and dense bounded extension. Surjectivity
comes from the inverse on the dense Schwartz space. Simultaneous L1/L2
approximation proves representative agreement. Periodic uniqueness follows
from published complex Stone–Weierstrass, avoiding a new Fourier-series pair.

For Hermite completeness, orthogonality to every Hermite function gives all
moments of f times the positive Gaussian equal to zero. The exponential
series is dominated in the integral by |f(x)| exp(-pi*x*x+2*pi*|xi|*|x|),
integrable by Cauchy–Schwarz and completing the real square. Fourier
uniqueness gives f times the Gaussian zero. To turn this into basis
completeness, finite orthogonal partial sums satisfy Bessel's inequality by
expanding the squared remainder norm. The increasing bounded sum of squared
coefficients converges; partial sums are Cauchy in L2. Their limit has a
remainder orthogonal to every Hermite function, hence zero. No arbitrary
Hilbert-basis selection, spectral theorem or Riesz representation is needed.

## Local multiplier lemma for the retained momentum example

Place `lem-real-ltwo-multipliers-and-unitary-transport` on FA23 A after
Plancherel, before its B consumers. Its definitions are part of the explicit
specialized statement, not appeals to an unbuilt general operator theory.
Work over complex L2, with inner product linear in its first argument.

Let m be a finite real measurable function. Define
D(M)={f in L2: mf in L2}, Mf=mf. The domain is dense: truncations
f_n=1_{|m|<=n}f lie in D(M) and converge by DCT. Define the adjoint domain
as the g for which there is h in L2 with <Mf,g>=<f,h> for every f in D(M).
Density makes h unique. Multiplication is symmetric since m is real and
both relevant products are integrable by Cauchy–Schwarz.

If g has adjoint value h, test with
f=1_{|m|<=n}(mg-h). This lies in D(M), since m is bounded on that set.
The defining identity gives the integral of |mg-h|^2 over that set equal
to zero. Their countable union is the whole space (up to any exceptional
null set used for m), so h=mg almost everywhere. Thus g is in D(M), and
M equals its adjoint with exactly the same domain. This proves
self-adjointness directly.

Define V_t f=exp(i*t*m)f, the explicit multiplication exponential. It is
unitary, V_s V_t=V_(s+t), and V_t f tends to f in L2 by DCT with majorant
4|f|^2. If f is in D(M), the difference quotients tend to iMf in L2, since
|exp(i*t*m)-1|/|t|<=|m| and the squared error is bounded by4|mf|^2.
Conversely, if these difference quotients have an L2 limit, their norms are
bounded along t=1/n. Fatou applied to their squared pointwise magnitudes
gives integral |mf|^2 finite. The previous direction then identifies the
limit as iMf. No abstract Stone theorem is used.

For a specified unitary U, transport the domain, adjoint test and group:
P=U^(-1)MU, D(P)=U^(-1)D(M), exp(i*t*P)=U^(-1)V_t U. Inner-product
preservation proves self-adjointness and the group/generator statements.
This defines the exponential for this explicitly diagonalized operator,
without assuming an unavailable general Borel functional calculus.

For the B example take U=Fourier and m(xi)=2*pi*xi. Schwartz
differentiation gives P=-i*d/dx there. The translation identity gives
U(f(.+t))=exp(2*pi*i*t*xi)Uf for Schwartz f. Translation and both sides
are L2 isometries, so density extends the equality to all L2. The exact
domain, self-adjointness, derivative action and exponential translation
claims of the moved example are all retained.

## Execution

The supplemental engine run `phase-2-fourier-support-2` owns these four pages
only, with FA22 before FA23 and explicit lower-order in-run dependence.
The original `phase-2-next-20` stays held with its artifacts intact. No
original pair has two writers. Normal scaffold, source, author and judgment
gates apply. If a new substantial prerequisite is discovered, hold that
admission rather than quietly consuming a sixth pair or certifying a gap.

The other three slots are reserved, not selected. In particular, do not
admit the root-system/highest-weight pairs merely because they supply needed
results: their own rank-one/semisimple prerequisite closure is still unresolved.

## Independent prerequisite review

The engine's `phase-2-fourier-support-2-alpha-step1-drift.md` independently
checks the complete retained inventories, current58 supplier hashes/homes,
source routes and local momentum/Hermite arguments. It returns no-drift
for both admitted pairs, with no omitted substantial prerequisite and no
requested additional pair. This supports admission under the owner's cap;
authoring and independent proof judgment still remain.
