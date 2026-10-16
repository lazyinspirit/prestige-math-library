# Private candidate: spectral minimum and frozen Gibbs shift

No canonical content, metadata, receipts, checks, layout, hashes, readiness
records, stamps or commits changed. Actual suppliers read:
`thm-qa-28-spectral-estimation-guarantee`,
`thm-qa-28-spectral-law-measurement`, and
`thm-qa-30-generalized-minimum-guarantee`.
Proposed result: `lem-qa-30-spectral-minimum-shift`.

## Contract and finite sampler

Let $H=H^*$ on dimension $d\ge1$, with supplied rational $K\ge0$ and
$\|H\|\le K$. Supply a costed exact preparation of $\Phi_d$, controlled
Hamiltonian evolutions, their inverses, and input/success reflections.
Approximate implementations must obey the explicit hybrid budgets below.
Let $0<\delta<1$, $T=2K+1$ and $U=\exp(iH/T)$. Its signed eigenphases
are $\lambda/(2\pi T)\in(-1/(4\pi),1/(4\pi))$, so the principal phase
decoder is injective, even at the spectral endpoints.

Choose a certified rational $\pi_+\in(\pi,4)$ and let $M$ be the least
dyadic integer at least $128\pi_+T$. Thus
$128\pi T\le M<256\pi_+T$. Choose an odd number $r$ of QPE trials with
$r\ge8\ln(1/\nu)+8$, using a certified upper logarithm enclosure to
make this finite schedule executable. Choosing the least such odd $r$
with an enclosure of additive width at most one gives
$r=O(1+\ln(1/\nu))$.

Prepare $\Phi_d$ once. Run all $r$ QPE trials with fresh phase registers
but the **same** first reference factor as target. Preserve the entire
phase history. For a phase label $y$, take its principal representative
$z=y/M$ if $y/M<1/2$ and $z=y/M-1$ otherwise. Decode as $2\pi Tz$,
using a certified rational approximation to $\pi$ of error at most
$1/(32T)$ and rational rounding error at most $1/32$. Clip the decoded
value to $[-K,K]$. Compute the odd median reversibly, retaining every
phase, decoding, comparison and arithmetic register. The result $s$ is
a rational coherent spectral-score label. The complete circuit, including
reference preparation and all scratch, has its ordinary reversed-circuit
inverse. Controlled access is supplied or constructed gatewise and charged.
There is no measurement or postselection inside this spectral sampler.

## Conditional spectral accuracy, not independent spectral redraws

In an orthonormal eigenbasis $u_j$, the reference has the exact expansion
$$\Phi_d=d^{-1/2}\sum_{j=1}^d u_j\otimes\overline{u_j}.$$
The second factor is untouched. Conditional on one such abstract index $j$,
every QPE trial leaves $u_j$ unchanged and produces an independent phase
register with the eigenphase kernel. Thus the joint phase law conditional
on $j$ is a product of $r$ identical kernels. The median repetitions are
independent phase estimates of the **same eigenvalue**, not medians of
independently redrawn spectral values. No eigenbasis knowledge or
implementation of its basis change is needed: the untouched orthogonal
reference labels provide the preserved index in analysis. Degeneracy is
harmless; keep an orthonormal basis within each repeated eigenspace.
This is the finite expansion underlying the actual spectral-law theorem.

Apply the QA28 guarantee to $H/T$ with target scaled error
$\epsilon=1/(16T)$ and failure $\nu/2$. This matrix has norm below one,
and $M\epsilon\ge8\pi>6\pi$. The chosen repetition count suffices since
$8\ln(2/\nu)\le8\ln(1/\nu)+8$. The same conditional-product proof
applies with one persistent eigenvector rather than freshly preparing its
identical copies. The exact principal decoder's median therefore has
unscaled error at most $1/16$ except with probability $\nu/2$.
Equivalently one can apply the QA28 per-trial circular-tail and median
proof directly; its constant per-trial success is at least $3/4$, so no
stronger nearest-bin success assumption is needed.

For each phase label, $|z|\le1/2$, so the rational-$\pi$ substitution adds
error at most $T/(32T)=1/32$, and rounding adds at most $1/32$. Clipping
to an interval containing the true eigenvalue cannot increase error. The
median changes by at most the maximum change of its entries: if every
entry moves by at most $h$, at least half the new entries remain below
the old median plus $h$ and at least half remain above it minus $h$.
Thus the implemented rational median has error at most $1/8$ on the
exact-median good event. Allocate total controlled-simulation and other
unitary-synthesis vector error at most $\nu/4$ per conditional eigenindex
for the entire spectral sampler. Product telescoping bounds the deviation
by the sum of its slot errors; measurement total variation is at most
twice this vector error. The actual bad-label probability is therefore at
most $\nu$ at **every** index. A sufficient explicit schedule with $S$
implementation slots is operator error at most $\nu/(4S)$ per slot;
include controlled operations, inverse capabilities when consumed, and
reference-preparation error in that budget. Exact reference preparation
was assumed above; an approximate reference can instead be treated by a
separate whole-algorithm hybrid, since it need not preserve the abstract
index exactly.

## Generalized minimum application and frozen shift

Let $Q_{\rm cap}$ bound the sampler, inverse and controlled sampler calls
in the canonical generalized-minimum algorithm at confidence $\delta/2$.
Choose, for example,
$$0<\nu\le\frac{\delta^2}{10^{12}d(Q_{\rm cap}+1)^2}.$$
This is stronger than $\nu\le(\delta/(16Q_{\rm cap}))^2$ for positive
$Q_{\rm cap}$. The uniform-index direct-sum cleaning argument of
`thm-qa-30-generalized-minimum-guarantee` is basis independent: its
per-index rotations may be described in the orthogonal
$\overline{u_j}$ reference sectors for analysis only. They are not
implemented spectral projectors. Run that theorem with $N=d$ on the
rational score order. With probability at least $1-\delta$, it returns a
good score $s$ not strictly larger than every good score at any one index.
A good selected score obeys $s\ge\lambda_{\min}(H)-1/8$. At an index
of minimum eigenvalue, **every** good score is at most
$\lambda_{\min}(H)+1/8$. If the selected score exceeded that upper bound,
all good labels at that index would be strictly smaller, contradicting
nondomination. Therefore
$$\lambda_{\min}(H)-1/8\le s\le\lambda_{\min}(H)+1/8.$$
Individual phase labels need not have appreciable probability; only the
uniform index and the per-index bad-label bound were used.

Measure the returned rational $s$ once and put $\widetilde\lambda=s-1/8$.
Then $\lambda_{\min}(H)-1/4\le\widetilde\lambda\le\lambda_{\min}(H)$.
Define and freeze
$$G=H-(\widetilde\lambda-3/2)I.$$
Its smallest eigenvalue lies in $[3/2,7/4]$, so in particular
$I\preceq G$ and $\lambda_{\min}(G)\le2$. A finite certified upper norm
bound is $K+|\widetilde\lambda-3/2|$. If a coarser grid is desired, use
$\widetilde\lambda=\lfloor8s\rfloor/8-1/8$; then
$\lambda_{\min}(H)-3/8<\widetilde\lambda\le\lambda_{\min}(H)$ and
the smallest eigenvalue lies in $[3/2,15/8)$, still meeting both promises.
Both variants are finite rational operations, including $K=0$ and all
rounding ties.

This measurement and all resulting norm bounds, coefficients, cutoffs and
synthesis precisions occur once per MMW round. Freeze them before the
coherent indexed trace sampler is built. Subsequent uses apply one fixed
$G$ and its fixed Gibbs blocks; they do not rerun or remeasure ShiftMin.
Identity shifts cancel in $e^{-G}/\operatorname{tr}(e^{-G})$, so this
freezing supplies the intended normalized Gibbs state. A failed outer
confidence event is budgeted probabilistically, not silently excluded.

## Charged cost without a second factor of K

The minimum theorem uses $O(\sqrt d(1+\ln(1/\delta)))$ complete spectral
sampler/inverse/reflection calls on every branch. Each sampler includes
one preparation of cost $C_\Phi$, its $r$ QPE trials, all retained decoding
and median arithmetic, and any synthesis precision needed above. Its
inverse repeats the reference inverse and reverses all of that work.
All arithmetic/comparisons in the coherent sampler are charged quantum
gates and workspace, not free classical preprocessing. Certified frozen
schedule construction outside that sampler also has its declared cost.

A QPE trial implemented with power evolution uses controlled
$\exp(iH2^\ell/T)$ for $0\le\ell<\log_2M$. Their total physical evolution
time is
$$\sum_\ell 2^\ell/T=(M-1)/T<256\pi_+,$$
and each individual time is also bounded by this absolute constant.
Thus each trial has total physical simulation time $O(1)$, not $O(K)$.
With repeated base-$U$ access there are $M-1=O(K+1)$ base calls instead;
these are distinct resource models. Do not multiply the power-access
physical-time sum by an additional $M$.

Precisely, with declared evolution cost $C_H(t,\varepsilon)$, charge
$\sum_\ell C_H(2^\ell/T,\varepsilon_\ell)$ per QPE trial, plus QFT,
control, arithmetic and preparation costs, with the errors summed as above.
If an independently proved sparse-simulation profile bounds that sum by
$\widetilde O(d_HK)$ (or its nonzero-overhead variant when $K=0$), then
one spectral sampler has that evolution cost times the confidence/cleaning
polylogarithms, and ShiftMin has
$\widetilde O(\sqrt d\,d_HK)$ evolution-access cost, with preparation and
other charged coordinates added. This is a conditional substitution, not
an unproved Hamiltonian-simulation theorem or a total-gate claim. In
particular the preceding time accounting produces no $K^2$ factor.
The finite $Q_{\rm cap}$ determines $\nu$, after which logarithmic
confidence and synthesis budgets are fixed; no unknown stopping time is
used to choose an error tolerance retrospectively.
