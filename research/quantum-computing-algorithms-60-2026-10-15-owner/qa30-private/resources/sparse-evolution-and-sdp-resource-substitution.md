# Private candidate: sparse evolution and the SDP/LP exponents

Private proof proposal only. No canonical carrier, metadata, receipt, gate,
readiness record, stamp or commit is changed. This note substitutes resource
interfaces; it does not rederive the accepted sparse-state or clean-work bridge.

## Actual suppliers inspected

The actual Statements and proofs read were:

- `items/lem-qa-25-sorted-xor-sparse-access-isometries.md`: its actual canonical Statement was reread after integration. The optional support-list variant permits extra listed zero-valued columns in a distinct sorted transposition-compatible union, and needs no value zero test. The exact decoded padded matrix is encoded with normalization $dh$ using $O(\log(d+1))$ location calls and $O(1)$ value calls, including adjoints and controls. An approximation to another target needs a separate operator-error bound; arithmetic, uniform preparation and rotations remain charged.
- `items/lem-qa-25-clean-subspace-unitary-hybrid.md`: its actual canonical Statement was reread; it gives inverse, reference, controlled, and repeated-unitary clean-input error bounds, without assuming actual intermediate work is clean.
- `items/thm-qa-25-qubitized-simulation-resource-bound.md`, `items/alg-qa-25-small-time-aware-simulator.md`, and `items/thm-qa-25-small-time-aware-simulator-correctness.md`: on successful certified compilation, a normalized signal for $H/\alpha$ simulates time $u$ with clean-input error $\zeta$ in $O(\alpha|u|+\log(1/\zeta))$ signal calls (a deliberately loose consequence of their sharper bound). Controls, phase generation, and every other cost coordinate remain explicit.
- `qa30-private/smooth-fourier-candidate.md`: finite coefficient construction, $O(\Delta^{-1}\log(1/e))$ largest evolution time, coefficient norm at most $B_+=1+e/8$, and $O(K_F L_F^2)$ arithmetic coefficient generation. For a Gibbs interval of width $O(K)$ and fixed $\Delta=1/2$, $K_F=\widetilde O(K)$, $L_F=\widetilde O(K^2)$, hence generation takes $\widetilde O(K^5)$ arithmetic operations.
- `qa30-private/trace/flagged-trace-ratio-candidate.md`: with $1\le\lambda_{\min}(G)\le2$, fixed common normalizations, and block error $e\le\theta/(100000n)$, a coherent trace label costs $\widetilde O(\sqrt n/\theta)$ complete flagged preparation/inverse calls. Each such call includes reference preparation. Its confidence can be reduced sufficiently for the robust-minimum cleaning hybrid by logarithmic repetition.
- `qa30-private/generalized-minimum-candidate.md` and `qa30-private/two-sparse/exact-geometric-oracle-candidate.md`: the finite capped minimum and robust coherent-label planar consumer give $\widetilde O(\sqrt m)$ coherent trace-label calls per round. Comparator arithmetic is separate.

The source full-text ranges read are arXiv:1705.01843v4 PDF pp.18–21
(diagonal and general flagged trace primitives) and pp.26–28 (resource sum).
The source URL is <https://arxiv.org/pdf/1705.01843v4>.

The following derivation assumes successful certified simulation/rotation
compilation under those interfaces. Their generation and bit/gate costs are
not converted into matrix input queries or silently bounded here.

## 1. Sparse sums from the actual raw input profile

Fix a round $t\ge1$. Its target MMW matrix is a linear combination of at
most $k_t=2t+1$ original matrices (repeated indices may be retained), because
each previous dual reply has support at most two. Real coefficients such
as $\eta=\sqrt{\log n/T}$ are not assumed rational. Before construction,
freeze certified finite rational approximations to the common real
coefficients, as specified below; the constituent matrix indices and
recorded replies are finite classical data. An identity shift adds at most one entry per row.
Use the safe sparse capacity $D_t=sk_t+1=O(st)$, where $s\ge1$.

The QA30 raw slot oracle need not sort a row. To answer a derived sorted
location query coherently, scan all $k_ts$ constituent slots, mask missing
slots, query the corresponding values, multiply by their recorded
coefficients, sort valid column/value records by the column, and merge equal
columns by summing their coefficient-weighted values. Include the identity
entry when required. Keep every distinct union column, including a column
whose summed value is zero; remove only duplicate column records, and fill
missing slots with the distinguished sentinel. A
fixed sorting network, finite scans and prefix counts implement this as a
total reversible circuit: retain its history, XOR-copy the selected answer,
then reverse. Mask invalid physical rows and slots to legal dummy queries.
Thus the derived location oracle has exactly the sorted total XOR interface
required by the accepted bridge. It uses $O(st)$ original matrix location
and value queries, including reversal. A derived value query uses $O(t)$
original entry queries by summing the $k_t$ entries directly; the looser
$O(st)$ bound suffices. All coefficients are frozen classical constants,
so a sequential hardwired scan supplies a concrete implementation without
assuming a free coherent coefficient lookup. Its description generation,
arithmetic precision and history space are charged.

Sorting uses $O(st\log^2(st+2))$ compare/exchange operations by a padded
bitonic sorting network: its recursive two half-sorts and logarithmic-depth
merge give $O(N\log^2N)$ comparators on a power-of-two padded list. Each
comparison, addition and multiplication has its actual
bit cost. This proves the matrix-query bound even if coefficient bit
lengths are large; it makes no unjustified polylogarithmic bit-cost claim.
In the source's separately supplied QRAM sparse-sum implementation, retain
its actual construction/update/query prices instead. These are two priced
implementations of the same required interface.

For an individual observable $A_j$, do the same row sorting with $k=1$:
a sorted location query costs $O(s)$ raw queries and an entry query costs
$O(1)$. This also works coherently in $j$, and avoids an unsupported
sorted-row assumption about the original inputs.

### Finite Hermitian values and target-error budget

Write the exact round exponent as $L_t=\sum_{\ell=1}^{k_t}c_\ell B_\ell$,
where every $B_\ell$ is an original Hermitian input matrix of norm at most
one. The value oracle describes those input matrices by their supplied
finite real/imaginary entry encodings. Choose a rational $\delta_t>0$ and
common real rational coefficients $\widehat c_\ell$ satisfying
$|\widehat c_\ell-c_\ell|\le\delta_t/k_t$. Decode the derived value oracle
as the exact rational matrix $\widehat L_t=\sum_\ell\widehat c_\ell B_\ell$.
Then it is exactly Hermitian and

$$\|\widehat L_t-L_t\|\le\sum_\ell|\widehat c_\ell-c_\ell|\|B_\ell\|
\le\delta_t.$$

Approximate common real coefficients, rather than rounding conjugate
entries independently. Thus conjugate symmetry is exact; the union of
the original Hermitian supports plus the diagonal is symmetric under
transposition, including its extra zero entries. Derived values agree
exactly with this decoded matrix even when cancellation occurs. No test
of an irrational target entry for zero is performed. Certification of
coefficient enclosures, including finite approximations to $\eta$, is
classical factory work and uses no matrix queries. The elementary log and
square-root descriptions permit arbitrarily small rational enclosures;
their actual arithmetic/bit cost remains in the factory price. If an input
value oracle itself approximates a different target matrix, additionally
charge its certified operator error: an entrywise error $u$ on an
$n\times n$ matrix gives operator error at most $nu$ by the Frobenius
bound. Without such a certificate, the exact decoded input is the theorem's
input matrix.

For Hermitian $F,\widehat F$ with norm difference at most $\delta_t$,
differentiating $e^{i(u-v)F}e^{iv\widehat F}$ and integrating from $0$ to
$u$ gives the Duhamel bound
$\|e^{iuF}-e^{iu\widehat F}\|\le|u|\delta_t$, also for negative time.
For positive semidefinite $G,\widehat G$, differentiate
$e^{-(a-v)G}e^{-v\widehat G}$ on $0\le v\le a$; both exponential factors
are contractions, so
$\|e^{-aG}-e^{-a\widehat G}\|\le a\|G-\widehat G\|$.
These identities use the finite matrix exponential derivative and the
fundamental theorem entrywise, and do not require commutation.
Allocate $\delta_t\le e/100$, where $e$ is the final flagged-block error
budget. The positive Gibbs-block perturbation is then at most $e/200$.
If a proof compares individual target evolutions instead, impose also
$\delta_t\le\zeta/(4(U_t+1))$, where $U_t$ bounds their total signed
absolute simulation time and $\zeta$ is their declared SELECT error.
This only increases coefficient precision logarithmically in $1/e,U_t,1/\zeta$;
no matrix-query factor changes. Finite rotation/signal synthesis errors
are allocated within the remaining block/isometry budget and priced
separately. All subsequent exact sparse encodings apply to the decoded
$\widehat L_t$ or its frozen rational shift, with these explicit errors
against the target.

## 2. Evolution SELECT without a frequency-count loss

Suppose a Hermitian matrix $F$ has sorted row capacity $d_F\ge1$ and a
known positive entry bound $h_F\ge\max|F_{ij}|$. The accepted bridge and
QA25 give, for a signed time $u$, an implemented unitary with clean-input
error at most $\zeta$ using

$$O\bigl((d_Fh_F|u|+\log(1/\zeta))\log(d_F+1)\bigr)$$

sorted location calls and $O(d_Fh_F|u|+\log(1/\zeta))$ value calls.
Use a supplied upper bound $h_F$; computing a global maximum entry is
unnecessary. All work is included in the clean isometry. Its actual
reversed and controlled circuits have the same order and error interface.

The Fourier terms have times $u_q=q\omega$, $|q|\le J$, with
$\omega=\pi/(2(r_F+\Delta))$ and $J=2M_F$. Their direct sum can be
implemented by the signed binary digits of $q$: for each binary place
$\ell$, apply the evolution at time $2^\ell\omega$, controlled on that
digit and the appropriate sign. There are $O(\log(J+2))$ such slots in
each sign branch, and

$$\sum_{\ell=0}^{\lceil\log_2(J+1)\rceil-1}2^\ell|\omega|<2(J+1)|\omega|.$$

The ideal factors commute because they are evolutions of the same $F$,
and their product in each label block is exactly $e^{iq\omega F}$.
Assign each controlled slot clean-input error at most
$\zeta/O(\log(J+2))$. The accepted clean-subspace hybrid proves the
complete SELECT error at most $\zeta$, even with shared retained simulator
work, coherent frequency labels, inverse use, and later repeated calls.
It does not assert full-space accuracy on dirty initial work.

To fit the rational-time QA25 implementation, replace $\omega$ by a rational
$\widehat\omega$ with $|\widehat\omega-\omega|\le
\zeta/(2(J+1)\max(1,\|F\|))$. The spectral scalar bound
$|e^{ia}-e^{ib}|\le|a-b|$ makes the additional error at most $\zeta/2$;
split the slot budget accordingly. The extra time/bit precision is
logarithmic in $J,\|F\|,1/\zeta$. Coefficient phases and their rounding
are already separately included in the Fourier construction.

Consequently the SELECT count is, with logarithms suppressed,

$$\widetilde O(d_Fh_F(J+1)|\omega|+1).$$

For the fixed extension margin $\Delta=1/2$ used for Gibbs and observable
functions, $(J+1)|\omega|=O(\log(1/e))$. Thus SELECT costs
$\widetilde O(d_Fh_F+1)$ sorted matrix queries, **not** this quantity
times the number of frequencies. The explicit frequency count is relevant
to coefficient PREPARE and storage, rather than to this binary evolution
sum.

The bridge pads $F$ to $F\oplus0$ on a larger physical register. Prepare
the reference state on the original $n$ labels. The ideal evolutions
preserve this original system subspace; the Fourier approximation is only
needed on its original spectrum. Padded zero eigenvalues outside the Gibbs
approximation interval do not invalidate that restricted statement.
Include both simulator-work and padded-system leakage in the isometry
error; the same hybrid bounds it. Do not replace $\Phi_n$ by the reference
state uniform over the larger padded register.

## 3. The round's flagged trace cost

Write $L_t=\eta H^{(t)}$ for the target Gibbs exponent, with
$\|L_t\|\le\eta t$, and use the finite exactly Hermitian $\widehat L_t$
from Section 1 with $\delta_t\le\min(1/8,e/100)$. ShiftMin is executed
once on $\widehat L_t$ and measured to obtain a rational
$\widetilde\lambda$ within $1/4$ of $\lambda_{\min}(\widehat L_t)$ on its
good event. Set $\widehat G_t=\widehat L_t-\widetilde\lambda I+(3/2)I$
and $G_t=L_t-\widetilde\lambda I+(3/2)I$. The minimum-eigenvalue
quadratic-form characterization and $\|\widehat L_t-L_t\|\le\delta_t$
give $|\lambda_{\min}(\widehat L_t)-\lambda_{\min}(L_t)|\le\delta_t$.
Consequently $\lambda_{\min}(\widehat G_t)\in[5/4,7/4]$ and
$\lambda_{\min}(G_t)\in[9/8,15/8]$. In particular both satisfy

$$1\le\lambda_{\min}(G_t),\lambda_{\min}(\widehat G_t)\le2,\qquad
\|G_t\|,\|\widehat G_t\|\le2\eta t+2=2K_t,\quad K_t:=1+\eta t.$$

The scalar shift leaves the normalized Gibbs state unchanged. A
constant-resolution phase label and capped generalized minimum, starting
from the original maximally entangled reference, use
$\widetilde O(\sqrt n)$ constant-time evolution-label preparations;
the individual eigenvectors each have weight $1/n$. Choose their failure
tails for the robust cleaning hybrid; their worst-case caps and precision
grow only logarithmically. The shift-finding matrix-query cost is therefore
$\widetilde O(\sqrt nD_tK_t)$ derived sorted queries, or
$\widetilde O(\sqrt n s^2t^2K_t)$ raw queries. The separate ShiftMin
spectral/minimum proof supplies its label guarantee; the present argument
prices each required evolution. Freeze the shift and all ensuing synthesis
data before the indexed trace labels are built.

For $e\le\theta/(100000n)$ (and any smaller hybrid-driven tolerance), the
Gibbs Fourier primitive has coefficient norm $B_G^+=1+e/8$, frequency
count $\widetilde O(K_t)$, and fixed margin $1/2$. Choose
$h_G\ge2K_t$ with $h_G=O(K_t)$ supplied as a certified rational upper bound.
Construct the Fourier block for $\widehat G_t$ using, for example,
$e/10$ analytic/finite-circuit error; Section 1 adds at most $e/200$
against $e^{-G_t/2}$, so the total remains below the trace proof's $e$
budget. The analytic parameter $e/10$ naturally permits normalization
$1+e/80$; dilute that successful amplitude further by the known scalar
$(1+e/80)/(1+e/8)$ to obtain the required common normalization
$B_G^+=1+e/8$. Use the same final normalization for the observable and
baseline; finite dilution synthesis is part of the remaining $e$ budget.
Its evolution SELECT uses
$\widetilde O(D_tK_t)$ derived sorted location/value calls. The square-root
observable primitive has norm bound $1$, capacity $s$, and constant-width
interval and margin, so costs $\widetilde O(s)$ sorted calls. After the
row-sorting costs of Section 1, a complete flagged preparation uses

$$Q_{\mathrm{flag},t}=\widetilde O(D_tK_t\,st+s\,s)
=\widetilde O(s^2t^2K_t)$$

original matrix queries. Its actual inverse and controlled forms have the
same query order. The common-normalization baseline uses the same frozen
Gibbs block and the scalar amplitude $I/(2B_A^+)$, so it is no more
expensive. It is essential to use the same $B_A^+$ in both branches.

The inspected flagged-trace ratio proof then yields

$$Q_{\mathrm{trace},t}=\widetilde O\left(
\frac{\sqrt n}{\theta}s^2t^2K_t\right).$$

This includes all Gibbs preparations and their inverses inside the
relative-probability estimator; it is not an assertion that a normalized
postselected Gibbs state can be inverted. The once-per-round shift cost
is dominated because $\theta\le1$. The two-sparse geometric oracle and
its robust-minimum consumer require $\widetilde O(\sqrt m)$ such trace
labels, plus a scalar $C$ label. Therefore

$$Q_{\mathrm{round},t}=\widetilde O\left(
\frac{\sqrt{nm}s^2}{\theta}t^2(1+\eta t)\right).$$

The same formula applies to an arbitrary exact supplied $\Phi_n$ contract
in the query coordinate. Reference preparation cost is counted repeatedly
in the gate coordinate below.

## 4. Sum and explicit nonquery coordinates

Put $Q=Rr/\varepsilon$ in the nontrivial accuracy regime $Q\ge1$;
otherwise use $\max(1,Q)$ or the algorithm's trivial coarse-accuracy
branch. The MMW supplier gives
$T=\widetilde O(Q^2)$, $\eta=\widetilde O(Q^{-1})$, and
$\theta^{-1}=O(Q)$. Thus, for one threshold run,

$$\sum_{t=1}^TQ_{\mathrm{round},t}
=\widetilde O\left(\sqrt{nm}s^2Q(T^3+\eta T^4)\right)
=\widetilde O(\sqrt{nm}s^2Q^8).$$

Binary search adds only its declared logarithmic number of threshold runs.
The $1$ in $K_t=1+\eta t$ costs $\widetilde O(Q^7)$, so early small-time
rounds do not invalidate the source exponent. A constant number of
coefficient-list insertions per round costs $O(T)$ insertions, priced at
their actual record/bit cost. Frozen matrix rows are never classically
materialized for all $n$ indices.

Here is an explicit additive resource record rather than a gate claim
inferred from matrix queries. Let $N_{\mathrm{flag},t}$ be the number of
complete flag-circuit calls, forward, inverse, and controlled, in the round;
let $N_{\mathrm{shift},t}$ count reference/evolution-label preparations for
the once-per-round shift. Then

$$N_{\mathrm{flag},t}=\widetilde O(\sqrt{nm}/\theta),\qquad
N_{\mathrm{shift},t}=\widetilde O(\sqrt n).$$

If $C_\Phi$ prices one preparation or actual reversal, their total charge is
$O(\sum_t(N_{\mathrm{flag},t}+N_{\mathrm{shift},t})C_\Phi)$, up to the
explicit constant number of preparation/inverse uses in the primitive
definitions. In particular it is $\widetilde O(\sqrt{nm}Q^3C_\Phi)$ for
one run; it is not one isolated additive $C_\Phi$. For power-of-two $n$,
the inspected reference-state definition gives $C_\Phi=O(\log n)$;
for general $n$ retain the actual supplied repeated price and any reference
approximation error. The same applies to uniform sparse-slot preparations.

For each round add the actual once-only factory cost $F_t$: measured shift
postprocessing, frozen coefficient/index records, Fourier coefficients,
each simulator's phase lists, all exact arithmetic/certification, circuit
description and their storage/preprocessing. The Gibbs coefficients cost
$\widetilde O(K_t^5)$ arithmetic operations and must be generated only
once in that factory, then reused in the fixed sampler. Their summed
arithmetic count is

$$\widetilde O\left(\sum_{t=1}^T(1+\eta t)^5\right)
=\widetilde O(T+\eta^5T^6)=\widetilde O(Q^7).$$

The observable Taylor/arcsine coefficient pattern is common to every
$A_j$; its Fourier data are generated once and its SELECT is indexed by
$j$. Thus this part does not require an $m$-fold factory. Its numerical
bit cost, and all simulator phase-generation costs in $F_t$, are actual
additional costs even when their arithmetic count is bounded.

A finite coefficient table of length $J_t=\widetilde O(K_t)$ can be
prepared by a binary tree of conditional rotations with $O(J_t)$ nodes:
each node uses its subtree weight ratio and splits its incoming amplitude
between its two children; induction gives the square-root leaf weights.
Zero-weight nodes have any fixed completion. Put the coefficient phases
in SELECT, and implement normalization slack by flag dilution. This proves
an $O(J_t)$ rotation/table-use count; rotation synthesis, weight sums and
bit precision are separately priced. This cost is no larger in arithmetic
count than $D_tK_t$ per flag call. No free coefficient PREPARE is assumed.

More generally let $G_{\mathrm{flag},t}$ be the actual nonquery gate cost of
one complete flag circuit, including its repeated sparse-state preparation,
reversible sorted-row arithmetic, rotations/reflections, PREPARE/SELECT,
precision and work; let $G_{\mathrm{shift},t}$ price one shift-label call.
Let $A_t$ price the remaining AE/QFT histories, exact geometric comparator,
rounding/division, capped-minimum random bits, and classical control. Add
QRAM construction/update/query prices if that implementation is chosen,
and output/record bit-writing costs $W$. The justified gate/time record is

$$\sum_t\left[F_t+N_{\mathrm{flag},t}(C_\Phi+G_{\mathrm{flag},t})
+N_{\mathrm{shift},t}(C_\Phi+G_{\mathrm{shift},t})+A_t\right]
+G_{\mathrm{QRAM}}+W,$$

with the same threshold-run repetition factor. If $G_{\mathrm{flag},t}$
already includes reference preparation, omit the separately written
$C_\Phi$ to avoid double counting. Similarly include ordinary input-query
gates at their actual prices if not counted in $G_{\mathrm{flag},t}$.
This preserves the source's same-order gate theorem precisely when these
explicit prices and precision/bit lengths fit its computational model and
$\widetilde O(\sqrt{nm}s^2Q^8)$ envelope. Otherwise the proved statement
is the matrix-query theorem together with this actual additive record.

## 5. Diagonal LP primitive and exponent five

This improvement requires a different primitive; setting $s=1$ in the
general bound is insufficient. Suppose every input matrix is diagonal.
The round's target scalar diagonal entry $L_t(i)$ is the recorded sum of at most
$k_t$ input diagonal entries. Use its finite common-coefficient
approximation $\widehat L_t$ from Section 1, now with
$\delta_t\le\min(1/8,\mu/100)$. A coherent evaluation of a finite
$\widehat L_t(i)$, or its uncomputation, costs $O(t)$ original value
queries and needs no sparse-location access. Prepare a uniform index and
a scalar label within $1/8$ of $\widehat L_t(i)$, then use the robust
approximate-minimum interface. On its good event the returned label
$\widetilde\lambda$ is within $1/8$ of
$\lambda_{\min}(\widehat L_t)$: goodness bounds it below that minimum
minus $1/8$, while nondomination at an index attaining that minimum bounds
it above that minimum plus $1/8$. Deterministic rational-grid scalar
rounding supplies such a label without an irrational comparison; any
additional bad-label probability is budgeted by the robust supplier.
The cost is $\widetilde O(\sqrt n)$ evaluations. Measure this label once
per round and freeze it. Set

$$\widehat g_i=\widehat L_t(i)-\widetilde\lambda+3/2,\qquad
g_i=L_t(i)-\widetilde\lambda+3/2.$$

The same margin proof as Section 3 gives both minima in $[1,2]$, and
$|g_i-\widehat g_i|\le\delta_t$. Thus
$Z=\sum_i e^{-g_i}\ge e^{-2}$, and the scalar shift preserves the target
Gibbs ratio. There is no exact comparison between irrational energies.

For an observable diagonal entry $a_i\in[-1,1]$, define

$$f_i=\frac{1+a_i/2}{4}e^{-g_i}\in[0,1].$$

Prepare the original $\Phi_n$ (or a supplied uniform index with its own
price), evaluate $\widehat g_i,a_i$ into finite reversible work, and rotate a flag
so its success probability is an approximation $\widehat f_i$ with
$|\widehat f_i-f_i|\le\mu$. Specifically allocate at most $\mu/2$ to
the finite scalar arithmetic/rotation relative to the decoded
$\widehat g_i$; because both energies are positive,
$|e^{-g_i}-e^{-\widehat g_i}|\le\delta_t$ by the scalar Duhamel bound,
so the target probability adds at most $(3/8)\delta_t<\mu/2$.
All value and arithmetic work may be kept
in the unitary sampler; its inverse is the complete actual reversal.
Orthogonality of the index/reference labels makes the success probability
an additive-$\mu$ approximation of

$$p_A=\frac1{4n}\sum_i(1+a_i/2)e^{-g_i},\qquad
p_0=\frac1{4n}\sum_i e^{-g_i}.$$

The baseline uses $a_i=0$ with the same shift and scalar normalization.
It has $p_0\ge e^{-2}/(4n)>1/(32n)$, and $p_A\ge p_0/2$. Choosing
$\mu\le\theta/(100000n)$ gives positive implemented floors at least
$1/(1024n)$ and the same ratio-stability/RelProb proof as the inspected
flagged-trace candidate. Thus a coherent trace label requires
$\widetilde O(\sqrt n/\theta)$ scalar flag calls.

For completeness, this flag arithmetic does not conceal a polynomial
dependence on $\max_i g_i$. Choose the integer
$B=\lceil\log_2(32/\mu)\rceil$, computed by a finite rational doubling
comparison. If $\widehat g_i\ge B$, use zero for its exponential; since
$\exp(1)\ge2$, the error is at most $e^{-B}\le2^{-B}\le\mu/32$.
Otherwise $\widehat g_i\in[1,B]$. Starting at $n=2$, double $n$ until
the exact rational factorial test $3^BB^n/n!\le\mu/64$ passes, and
evaluate the Taylor series for $e^{-\widehat g_i}$ through degree $n-1$.
Its absolute remainder is at most $e^BB^n/n!\le3^BB^n/n!\le\mu/64$,
using $\exp(1)<3$. This loop is finite and has polynomial-logarithmic
truncation order: for even $n\ge4B^2$,
$B^n/n!\le(2B^2/n)^{n/2}\le2^{-n/2}$. Thus any even
$n\ge\max(4B^2,2\lceil\log_2(64\cdot3^B/\mu)\rceil)$ passes; the
first passing dyadic $n$ is at most twice this bound and is
$O(\log^2(1/\mu))$. Powers, factorials and comparisons are finite integer
operations. Exact rational polynomial evaluation avoids cancellation
roundoff entirely; the term count and numerator/denominator bit lengths
are polynomial in $\log(1/\mu)$ and the actual input-energy encoding
length. Round only its final rational result to the required grid.
Clip the resulting probability to $[0,1]$, which cannot increase error.

An angle for this probability can also be computed in polynomially many
$\log(1/\mu)$ operations and bits: bisect $[0,\pi/2]$, approximate
$\sin^2$ at each midpoint to fixed error $\mu/32$ by its bounded-argument
Taylor series, and compare with the target probability. If the comparison
interval straddles the target, return that midpoint, whose probability
error is at most $\mu/16$ after accounting for target rounding. Otherwise
the comparison determines the correct half. After
$O(\log(1/\mu))$ bisections, monotonicity and
$|\sin^2x-\sin^2y|\le2|x-y|$ ensure the same accuracy from the interval
width. Certified approximations to $\pi$ and the arithmetic are charged.
Reversible evaluation of that angle followed by its binary-controlled
rotations implements the flag; control, inverse, rotation synthesis and
bit costs are explicit. Large $g_i$ requires reading/comparing its actual
encoding, but no $\|L_t\|$ dependence in the **matrix-query count**.

Each scalar flag therefore uses $O(t)$ raw matrix queries, its inverse
the same, giving a diagonal trace label cost
$\widetilde O(\sqrt n\,t/\theta)$. The once-per-round approximate minimum costs
$\widetilde O(\sqrt n\,t)$ and is dominated. Two sparse replies then cost
$\widetilde O(\sqrt{nm}\,t/\theta)$ per round. Finally

$$\widetilde O\left(\frac{\sqrt{nm}}\theta\sum_{t=1}^Tt\right)
=\widetilde O(\sqrt{nm}\,Q T^2)
=\widetilde O(\sqrt{nm}\,Q^5).$$

There is no extra $sT$ sparse-row growth and no $K_t$ evolution factor:
the diagonal scalar construction has replaced both. Reference preparation
is still repeated $\widetilde O(\sqrt{nm}Q^3)$ times per threshold run;
all diagonal arithmetic, exact-value comparisons, compilation, classical
preprocessing, output-bit and optional QRAM prices remain in the additive
record of Section 4. The source's same-order LP gate conclusion is
conditional on those explicit prices fitting its stated gate model and
the $\widetilde O(\sqrt{nm}Q^5)$ envelope.

## Integration obligations retained by the parent

These resource substitutions use the separately proved spectral ShiftMin,
flagged-trace ratio, robust minimum, geometric oracle, MMW and binary-search
interfaces. They require the accepted XOR bridge and clean-subspace hybrid
to be integrated supplier-first. No QA28 matrix-function Statement alone
supplies the evolution or Fourier compilation bound. The only unpriced
parts are explicitly named nonquery coordinates, not missing query-count
factors. Finite success of the certified simulator/compiler remains its
supplier obligation; no successful compilation or gate fit is fabricated
by this note.
