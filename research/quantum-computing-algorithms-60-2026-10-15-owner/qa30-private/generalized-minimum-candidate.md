# Private supplier candidate — capped quantum quantile minimum

Candidate IDs: `alg-qa-30-capped-generalized-minimum` and
`thm-qa-30-generalized-minimum-guarantee`. No existing carrier edited.
This proves the generic minimum interface needed by ShiftMin and the
coherent-label two-sparse oracle. Its procedure adds one direct verified
sample before each random-Grover batch; that addition preserves all source
query orders and avoids the near-unit-success endpoint of BBHT analysis.

## Contract and finite procedure

Let $V$ coherently prepare a finite distribution on exactly ordered binary
score/label encodings. Supply $V,V^\dagger$, controlled versions when used,
the all-zero reflection, and the exact reversible comparison predicate.
For $N\ge1$ and $0<\delta<1$, a trial begins with one fresh sample as its
incumbent. At search stage $j=0,1,\ldots$, first try one direct sample;
if it is strictly smaller, replace the incumbent and restart $j=0$.
Otherwise prepare a fresh $V$ and draw a uniform integer
$q\in\{0,\ldots,K_j-1\}$, $K_j=\lceil(3/2)^j\rceil$.
Apply $q$ Grover iterations for the predicate score < incumbent, measure,
and verify that predicate before accepting an improvement. Otherwise
increase $j$. Keep all label/value workspace when preparing/inverting.
The two reflections use the predicate and the all-zero input state.

Precharge a stage its worst-case $4K_j+4$ primitive preparation/inverse/
reflection calls. A trial stops before a stage exceeding total charge
$100000\lceil\sqrt N\rceil$, returning its incumbent. Repeat independently
$R=\lceil20\ln(1/\delta)\rceil+20$ trials and return the least measured
score. This is finite on every branch; charge reversible arithmetic,
comparisons, randomness and output separately. To draw the random index, try five independent blocks of $\lceil\log_2K_j\rceil$ bits, use the first integer below $K_j$, and declare that random part failed if all five are out of range. Each accepted value is uniform, acceptance is at least $31/32$, and the exhaustive finite schedule cannot be blocked by a rejection loop. These classical draws are charged separately.

For $q(v)=\Pr(\text{score}<v)$, the output satisfies $q(v)<1/N$ with
probability at least $1-\delta$. In particular, if the minimum score has
probability at least $1/N$, the output is a minimum. The primitive-call
bound is $O(\sqrt N(1+\ln(1/\delta)))$ deterministically.

## Proof

**Given:** The supplied coherent sampler and exact comparison/reflections.

1.1 Write $p=\Pr(\text{score}<v)$ for an incumbent. The good/bad decomposition of $V|0\rangle$ has amplitudes $\sin\theta=\sqrt p$ and $\cos\theta=\sqrt{1-p}$. Multiplication of the two reflection matrices gives the usual rotation by $2\theta$, so after $q$ iterates the success probability is $\sin^2((2q+1)\theta)$. The normalized good projection is the same vector for every iterate. Hence every verified improvement, whether direct or amplified, has the original distribution conditioned on score < incumbent. For $0<p<1$, summing the geometric progression of $e^{4iq\theta}$ gives the random-iteration average $1/2-\sin(4K\theta)/(4K\sin(2\theta))$. [given, algebra]

1.2 If $p\le1/2$, then $\sin(2\theta)=2\sqrt{p(1-p)}\ge\sqrt{2p}$. Put $t=5/(2\sin(2\theta))\ge5/2$, and let $J$ be the first stage with $K_J\ge t$. For every subsequent stage, step 1.1 gives conditional Grover success at least $2/5$; five bounded bit attempts make the random part accepted with probability at least $31/32$, so stage survival is at most $49/80$. The pre-threshold charge is at most $42t$: use $\sum_{j\le J}(4K_j+4)\le12(3/2)^J+8(J+1)$, $(3/2)^J<(3/2)t$, and $J+1\le3t$. The remaining expected charge is at most $\sum_{h\ge0}(49/80)^h(6t(3/2)^h+8)=960t/13+640/31$. Together these are below $128t$, hence below $256/\sqrt p$. If $p>1/2$, the direct sample alone makes stage survival at most $1/2$, and total expected charge is at most $\sum_{j\ge0}2^{-j}(4(3/2)^j+8)=32\le256/\sqrt p$. Thus every verified improvement has expected charge at most $256/\sqrt p$. [step 1.1, algebra]

2.1 For clarity choose dyadic rank bands $[a,2a)$, $a=2^\ell/N$, truncated at one. If an incumbent lies in such a band, the next improvement has probability at least $1/2$ of having rank below $a$. Indeed, under the distribution conditioned below the incumbent, the total mass of scores whose strict lower cumulative mass is less than $a$ is at least $a$; an atom crossing that cumulative threshold is included, so discreteness cannot reduce that mass. The conditional mass is at least $a/q(v)\ge1/2$. Ranks decrease, so each band is entered at most once and has at most two visits in expectation. The expected charge until rank is below $1/N$ is therefore at most $1+512\sqrt N\sum_{\ell\ge0}2^{-\ell/2}<2048\sqrt N$. Markov's inequality at the declared finite cap $100000\lceil\sqrt N\rceil$ gives trial failure below $1/8$. Truncation is coupled to the precharged unbounded procedure: on paths whose hitting charge is within the cap, no precharge check stops the trial before its successful incumbent. [step 1.1, step 1.2, algebra]

2.2 Independent trials each succeed with probability at least $7/8$. Returning their smallest score preserves success whenever one trial succeeds. The all-failure probability is at most $8^{-R}\le\delta$ for the stated repetition count. A cutoff with $q(v)<1/N$ is at or below any score whose cumulative mass is at least $1/N$; this proves the minimum specialization. No probability of an exact score atom is assumed beyond the stated quantile/minimum promise. [step 2.1, algebra] ∎

## Coherent approximate labels and robust nondomination

Suppose the sampler preserves a uniform input index $j\in[m]$ and has
bad-estimate probability at most $\nu$ for each $j$. In analysis only,
replace its per-index output by the normalized good projection. The good
subspace can depend on the true value; no implementation of that projector
is assumed. For each $j$, a two-dimensional rotation takes the actual unit
output to its good normalization with operator distance at most $2\sqrt\nu$:
its angle has cosine $\sqrt{1-p_{bad}}$, so $2\sin(\gamma/2)\le2\sqrt\nu$.
The direct sum of these rotations over the preserved index gives a unitary
sampler replacement with the same operator bound. Inverses and controlled
versions have the same bound. For at most $Q$ sampler calls, telescoping
products gives output-vector error at most $2Q\sqrt\nu$, and any measured
event changes by at most $4Q\sqrt\nu$. This also covers adaptive classical
branches by retaining measurement results as orthogonal history registers.

Run the quantile algorithm with $N=m$ and confidence $\delta/2$ on that
ideal cleaned sampler, and choose $\nu\le(\delta/(16Q))^2$. The ideal output
is good and has less than $1/m$ strict-lower score mass. Thus no index can
have every good output score strictly below the returned score: that one
index alone would contribute probability $1/m$. The hybrid bound transfers
this good-output/nondomination property to the implemented sampler with
failure at most $\delta$. It does not require the selected score atom to
have probability $1/m$, does not union-bound unmeasured branches as
classical samples, and does not infer a simultaneous deterministic table
of all estimates. The separate planar oracle proof handles compatible
completion of its two score orders.

No canonical items, contracts, hashes, readiness records, stamps, tests or gates changed.
