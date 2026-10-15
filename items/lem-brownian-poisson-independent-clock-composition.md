---
dependency_level: 0
id: lem-brownian-poisson-independent-clock-composition
kind: lemma
title: Independent Brownian motion straightens a Poisson clock
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
deps:
  - def-axiom-of-choice
  - def-brownian-motion
  - def-scalar-poisson-count-law
  - def-real-exponential-function-and-e
  - thm-exponential-addition-formula
  - lem-brownian-gaussian-covariance-is-equivalent-to-independent-stationary-normal-increments
  - lem-uncorrelated-jointly-gaussian-blocks-are-independent
  - thm-existence-of-continuous-brownian-motion
  - thm-countable-product-of-probability-spaces
  - cor-coordinate-random-elements-on-a-countable-product-are-independent
  - cor-law-of-the-brownian-maximum
  - lem-two-sided-mills-bounds-for-standard-normal-tail
  - cor-markov-inequality-for-random-variables
  - cor-first-borel-cantelli-lemma-for-events
  - thm-mean-value-inequality-for-total-derivatives
  - thm-dynkin-pi-lambda
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: Florence Merlevède and Emmanuel Rio, Strong approximation for additive functionals of geometrically ergodic Markov chains, Lemma 2.4
      url: https://hal.science/hal-01044508v1/document
      locator: "Full author manuscript, printed pp. 6–7/PDF pp. 7–8: complete lemma statement, auxiliary-randomness clause, and opening Haar construction inspected. The source proves a sharper exponential-tail logarithmic bound. The weaker logarithmic-square estimate, continuous-time extension, and independence from the whole clock environment are proved locally below."
axiom_use: AC supplies the Brownian/normal-law constructions and the countable product extension carrying independent bridge motions. No strong approximation or KMT theorem is invoked.
---

## Statement

Assume AC. Let $\mathcal G$ be a sigma-algebra on a probability space, let $\lambda>0$, and let $N=(N(t))_{t\ge0}$ be $\mathcal G$-measurable at each time. Suppose $N(0)=0$, its paths are nondecreasing right-continuous integer-valued functions finite on bounded intervals, its increments on disjoint time intervals are independent, and $N(t)-N(s)$ has law $\operatorname{Pois}(\lambda(t-s))$ for $0\le s<t$. Let $B$ be a standard Brownian motion independent of $\mathcal G$.

On an extension preserving the original probability space there is a standard Brownian motion $W$, independent of $\mathcal G$, such that
$$\sup_{0\le t\le n}\left|B(t)-\lambda^{-1/2}W(N(t))\right|=O((\log(n+2))^2)\qquad\text{almost surely as }n\to\infty.$$
The almost-sure bound has a finite random constant and a finite random starting index. In particular $W$ is independent of the entire Poisson clock; $W$ and $B$ are not asserted to be independent.

## Facts & Assumptions

**Given:** AC, $\mathcal G$, $\lambda>0$, $N$, and the independent Brownian motion $B$ satisfying the Statement.

[A1] AC is assumed. [[def-axiom-of-choice]]

[F1] Brownian motion is continuous on a common probability-one event and is centered Gaussian with covariance $\min(s,t)$; conversely that covariance with common path continuity gives Brownian motion. [[def-brownian-motion]], [[lem-brownian-gaussian-covariance-is-equivalent-to-independent-stationary-normal-increments]]

[F2] Finite jointly Gaussian blocks with zero cross-covariance are independent, including singular blocks. [[lem-uncorrelated-jointly-gaussian-blocks-are-independent]]

[F3] A standard Brownian motion exists, and the countable product construction adjoins countably many independent copies independently of the original space. [[thm-existence-of-continuous-brownian-motion]], [[thm-countable-product-of-probability-spaces]], [[cor-coordinate-random-elements-on-a-countable-product-are-independent]]

[F4] The Poisson mass at $k\ge0$ with parameter $a>0$ is $e^{-a}a^k/k!$; at parameter zero it is the unit mass at zero. The exponential is its convergent power series and satisfies $e^{a+b}=e^ae^b$. [[def-scalar-poisson-count-law]], [[def-real-exponential-function-and-e]], [[thm-exponential-addition-formula]]

[F5] For a standard normal $G$ and $x>0$, $\mathbb P(G>x)\le(2\pi)^{-1/2}x^{-1}e^{-x^2/2}$; reflection gives $\mathbb P(\sup_{s\le h}U(s)>x)=2\mathbb P(U(h)>x)$ for Brownian $U$, $h>0$. [[lem-two-sided-mills-bounds-for-standard-normal-tail]], [[cor-law-of-the-brownian-maximum]]

[F6] Markov's inequality applies to nonnegative variables; summable event probabilities imply that only finitely many events occur almost surely. [[cor-markov-inequality-for-random-variables]], [[cor-first-borel-cantelli-lemma-for-events]]

[F7] A differentiable map with uniformly bounded derivative on a convex open set is Lipschitz there. [[thm-mean-value-inequality-for-total-derivatives]]

[F8] Agreement of finite measures on a generating pi-system extends to its sigma-algebra. [[thm-dynkin-pi-lambda]]

## Proof

1.1 Work on common full-measure events of Brownian continuity and the assumed clock paths. For each integer $K\ge0$, [F4] gives $\mathbb P(N(n)\le K)=e^{-\lambda n}\sum_{k=0}^K(\lambda n)^k/k!\to0$. The events $\{N(n)\le K\}$ decrease in $n$, so continuity of probability shows that $N(n)$ is unbounded almost surely after taking the countable union over $K$. By [A1] and [F3], extend the space by independent standard Brownian motions $(U_j)_{j\ge0}$, independent also of the original variables. They will supply continuous bridges; the original space and all its joint laws are preserved by this product extension. [given, A1, F3, F4]

1.2 We prove the necessary uniform clock bounds directly. If $X\sim\operatorname{Pois}(a)$, summing [F4]'s nonnegative series gives $\mathbb E e^{\theta(X-a)}=\exp(a(e^\theta-1-\theta))$ for every real $\theta$. For $|\theta|<3$, the exponential series and $k!\ge2\cdot3^{k-2}$ for $k\ge2$ imply $e^\theta-1-\theta\le\theta^2/[2(1-|\theta|/3)]$. Exponential Markov and the choice $\theta=x/(a+x/3)$, applied with either sign, therefore give $\mathbb P(|X-a|\ge x)\le2\exp(-x^2/[2(a+x/3)])$ when $a>0,x>0$; at $a=0$ the deviation is zero. With $a=\lambda(v-u)$ this implies $\mathbb P(|N(v)-N(u)-\lambda(v-u)|\ge x)\le2\exp(-c_\lambda\min\{x^2/(v-u),x\})$ for a constant $c_\lambda>0$ and integer $0\le u<v$. This derivation uses only the Poisson mass series and Markov, not a strong approximation theorem. [given, F4, F6, algebra]

2.1 Partition the original time axis into macrointervals $[0,1],[1,2],[2,4],[4,8],\ldots$. For each macrointerval $I=[a,a+D]$, extract the root normal $R_I=(B(a+D)-B(a))/\sqrt D$. For every dyadic cell $J=[b,b+d]$ inside a macrointerval, of length $d\ge2$, extract its midpoint normal $G_J=2(B(b+d/2)-(B(b)+B(b+d))/2)/\sqrt d$. This is a countable iid standard-normal family, independent of $\mathcal G$. To verify independence, the midpoint contrast on $J$ has covariance zero with the endpoint increment on $J$ and with all Brownian evaluations outside its interior: for $t\le b$ the three covariance terms cancel, and for $t\ge b+d$ they are $2(b+d/2)-b-(b+d)=0$. Its variance is one by direct expansion of $\min(s,t)$. Two dyadic cells are either disjoint or nested; in the nested case, the larger cell's contrast uses only evaluations outside the smaller cell's interior or at its endpoints. Hence distinct contrasts and roots have zero covariance. Every finite family is jointly Gaussian by [F1], so repeated use of [F2] proves mutual independence. [given, F1, F2, step 1.1, construct]

2.2 For dyadic horizons $n=2^m$, write $\ell=\log(n+2)$. Applying step 1.2 with $x=K(\sqrt{(v-u)\ell}+\ell)$ and choosing a sufficiently large deterministic $K$ makes the probability at most $2(n+2)^{-6}$. There are at most $(n+1)^2$ integer intervals in $[0,n]$. The union bound and [F6] show that, almost surely eventually on dyadic horizons, every such interval satisfies $|N(v)-N(u)-\lambda(v-u)|\le K(\sqrt{(v-u)\ell}+\ell)$. Choose a deterministic $A>1$ sufficiently large. For every dyadic cell of length $d\ge A\ell$, its normalized half-counts $\alpha=L_J/(\lambda d)$ and $\beta=Q_J/(\lambda d)$ then lie in $[1/4,3/4]$. For every integer point $j$ in the cell, with $x=(j-b)/d$ and $z=(N(j)-N(b))/(\lambda d)$, one has $|z-x|+|\alpha-1/2|+|\beta-1/2|\le C\sqrt{\ell/d}$. Indeed the interval estimate gives this bound first with an additional term $C\ell/d$, which is at most another constant times $\sqrt{\ell/d}$ since $d\ge A\ell$. The same estimate implies that every integer interval of length at most $2A\ell$ has count increase at most $C\ell$. Constants here and below are deterministic and may depend on $\lambda,A,K$. [F6, step 1.2, algebra, choose]

3.1 For a cell $J=[b,b+d]$ put $C_J=N(b+d)-N(b)$, with half-counts $L_J=N(b+d/2)-N(b)$ and $Q_J=C_J-L_J$ when $d\ge2$. Prescribe a $W$ increment $\sqrt{C_I}R_I$ over the count interval $[N(a),N(a+D)]$ of each macrointerval, starting from $W(0)=0$ and concatenating the macrointervals. Given both endpoint values for $J$, if $C_J>0$ prescribe its count-midpoint value as $W(N(b))+(L_J/C_J)(W(N(b+d))-W(N(b)))+\sqrt{L_JQ_J/C_J}\,G_J$. When $C_J=0$ all three count times agree and the midpoint value is that endpoint. When only one half-count is zero the displayed prescription also equals the appropriate existing endpoint. Recurse down to unit cells. For a unit cell $[j,j+1]$ of count length $c>0$, with left count time $h=N(j)$ and prescribed endpoint increment $Y$, fill its count interval continuously by $W(h+s)=W(h)+(s/c)Y+\sqrt c\,(U_j(s/c)-(s/c)U_j(1))$ for $0\le s\le c$. Zero-count leaves require no filling. Unboundedness from step 1.1 makes these intervals cover $[0,\infty)$. All operations depend measurably on finitely many integer counts and Gaussian evaluations for each fixed $W(t)$: partition by the first integer $j$ with $N(j)>t$ and its finite count history. The resulting countable pieces give measurable evaluations, including endpoints. [F1, F3, step 1.1, step 2.1, construct]

3.2 The tail bound in [F5] gives $\mathbb P(|G|>x)\le2e^{-x^2/2}$ for $x\ge1$. On $[0,n]$ the number of root and midpoint coefficients in step 2.1 is at most $2n$. A union bound with $x=K_1\sqrt\ell$, followed by [F6] with $K_1$ sufficiently large, shows that their maximum absolute value is $O(\sqrt\ell)$ almost surely eventually along dyadic horizons. Also [F5] and the union bound give, for Brownian $U$, $\mathbb P(\sup_{s\le h}|U(s)|>x)\le4e^{-x^2/(2h)}$ when $x/\sqrt h\ge1$. Therefore a bridge $U(s)-(s/h)U(h)$ over length $h$ has supremum tail bounded by $4e^{-x^2/(8h)}$ for $x/(2\sqrt h)\ge1$, since its supremum is at most twice that of $U$. These estimates also apply to translated Brownian increment paths by [F1]. [F1, F5, F6, step 2.1]

4.1 Fix a deterministic finite count history. The Gaussian split used in step 3.1 is exact: if an interval has total increment $Y\sim N(0,c)$ and child lengths $l,r\ge0$, $l+r=c>0$, independent $G\sim N(0,1)$ gives child increments $Y_L=(l/c)Y+\sqrt{lr/c}\,G$ and $Y_R=Y-Y_L$. Their variances are $l,r$ and their covariance is $lr/c-lr/c=0$. Thus they are independent by [F2], with zero-length increments identically zero. Recursing proves independent normal increments of the prescribed count lengths over all nonzero unit leaves, also across macrointervals. For the independent bridge $\beta(s)=U_j(s)-sU_j(1)$, [F1] directly gives mean zero, continuous paths, endpoints zero, and covariance $\min(s,t)-st$. Filling a leaf as in step 3.1 therefore gives centered Gaussian increments whose covariance at offsets $s,t$ is $st/c+c(\min(s/c,t/c)-st/c^2)=\min(s,t)$. Different leaves have independent increment processes because their endpoint increments are independent and all bridge motions are independent. Summing these increments shows that, for every finite evaluation list, $W$ has centered Gaussian covariance $\min(s,t)$ on this fixed count history. [F1, F2, F3, step 2.1, step 3.1, algebra]

4.2 Fix a large dyadic horizon and a macrointerval $I=[a,a+D]\subseteq[0,n]$. If $D>A\ell$, stop its binary tree at cells with lengths in $[A\ell,2A\ell)$; if $D\le A\ell$, stop at the root. For an integer $j\in I$, consider the piecewise-linear interpolant of $B(j)-B(a)$ on this stopped grid, and the piecewise-linear interpolant of $\lambda^{-1/2}(W(N(j))-W(N(a)))$ on the corresponding count grid, evaluated at $N(j)$. Repeated midpoint interpolation from step 3.1 expands each interpolant in the same root normal and in the midpoint normals of its ancestor chain. In an active cell of length $d$ containing $j$ in its left half, the coefficients of its midpoint normal are respectively $\sqrt d\,x$ and $\sqrt d\,z\sqrt{\beta/[\alpha(\alpha+\beta)]}$, with $x,z,\alpha,\beta$ as in step 2.2. This follows by multiplying the left interpolation fraction $z/\alpha$ by $\lambda^{-1/2}\sqrt{L_JQ_J/C_J}$. In the right half the coefficients are obtained by replacing $(x,z,\alpha,\beta)$ by $(1-x,\alpha+\beta-z,\beta,\alpha)$. At a midpoint or endpoint these same formulas agree with the endpoint prescription. [step 2.1, step 3.1, step 2.2, algebra]

5.1 For any finite list of evaluation times, partition the original space into countably many $\mathcal G$-events specifying a long enough finite integer count history to cover them. The Gaussian and added bridge variables are independent of $\mathcal G$; step 4.1 shows that on every such count configuration the resulting evaluation law is the same Brownian Gaussian law. Consequently, for any $A\in\mathcal G$ and any Borel set $H$ of that finite evaluation vector, summing over this partition gives $\mathbb P(A\cap\{(W(t_i))_i\in H\})=\mathbb P(A)\nu_H$, where $\nu_H$ is its Brownian probability. No regular conditional probability on the original space is needed. The construction has common continuous paths: count intervals have integer endpoints, finitely many nonzero intervals meet each bounded count-time interval, their bridges are continuous, and endpoint prescriptions agree. Thus [F1] makes $W$ standard Brownian. Continuous evaluations are limits of rational evaluations, and [F8] extends the factorization from rational cylinders to $\sigma(W(t):t\ge0)$. Therefore $W$ is independent of all of $\mathcal G$, not just of $N$. [F1, F3, F8, step 1.1, step 3.1, step 4.1]

5.2 The function $z\sqrt{\beta/[\alpha(\alpha+\beta)]}$ has uniformly bounded first derivatives for $1/4\le\alpha,\beta\le3/4$ and $0\le z\le2$: its displayed denominators are bounded away from zero, and differentiating gives only bounded products of these reciprocals and square roots. One may take a slightly larger open convex box still with positive $\alpha,\beta$ and use [F7]. At $(\alpha,\beta,z)=(1/2,1/2,x)$ its value is $x$. Hence step 2.2 bounds the midpoint coefficient discrepancy by $C\sqrt\ell$. The normalized right-half prefix differs from its deterministic value by at most another constant times $\sqrt{\ell/d}$, so the same bound applies there. The root coefficients for a large macrointerval are $\sqrt D\,x$ and $\sqrt D\,z/\sqrt{C_I/(\lambda D)}$; the same bounded-derivative argument and step 2.2 bound their discrepancy by $C\sqrt\ell$. By step 3.2, each shared Gaussian coefficient therefore contributes at most $C\ell$ to the interpolant difference. At most $1+\log_2 n$ coefficients occur on an ancestor chain, so the increment-interpolant error is $O(\ell^2)$. [F7, step 2.2, step 3.2, step 4.2, algebra]

6.1 We control the discarded bridge pieces uniformly. Each stopped cell has deterministic length at most $2A\ell$ and, on the count event from step 2.2, count length at most $C\ell$. The Brownian deviation from linear interpolation on a cell is a continuous bridge with the covariance computed in step 4.1, regardless of the endpoint values. Step 3.2 therefore bounds the probability that its supremum exceeds $K_2\ell$ by $4e^{-cK_2^2\ell}$. There are at most $n$ stopped cells. For the $W$ bridges the same estimate holds on every count history having these length bounds, by the conditional Gaussian calculation in steps 4.1, 5.1; summing over the count configurations gives the identical unconditional bound on the good count event. Choose $K_2$ large, add the summable failure probability of that count event, and apply [F6]. Thus all discarded $B$ and scaled $W$ bridge pieces are $O(\ell)$ almost surely eventually. This argument includes zero count length, whose bridge is identically zero. [F6, step 4.1, step 5.1, step 2.2, step 3.2, step 4.2]

7.1 A completed large macrointerval contributes only its root error $|\sqrt D-\sqrt{C_I/\lambda}|\,|R_I|\le C\ell$ by steps 2.2, 3.2. For a macrointerval of length at most $A\ell$, its entire $B$ increment supremum and its scaled $W$ increment supremum are $O(\ell)$ by the same reflection and count-history argument as step 6.1, applied without subtracting an interpolant. There are at most $1+\log_2 n$ macrointervals before time $n$. Add the root or small-macrointerval errors of the completed macrointervals, then the interpolant error from step 5.2 and the two leaf errors from step 6.1 in the last one. This gives $\max_{j\le n,\ j\in\mathbb N_0}|B(j)-\lambda^{-1/2}W(N(j))|=O(\ell^2)$ almost surely along dyadic horizons. [step 2.2, step 3.2, step 5.2, step 6.1, algebra]

8.1 For real $t\in[j,j+1]$, Brownian reflection and a union bound over the $n$ unit intervals make $|B(t)-B(j)|=O(\sqrt\ell)$ uniformly eventually almost surely. Step 2.2 gives $N(j+1)-N(j)\le C\ell$. On every such count history, step 5.1 gives Brownian law for $W$, and reflection bounds its increment supremum on each $[N(j),N(j+1)]$ by $K_3\ell$ except on a probability bounded by $4ne^{-cK_3^2\ell}$; this is summable on dyadic horizons when $K_3$ is large. Integrating over the count configurations and using [F6] shows that these $W$ increments are uniformly $O(\ell)$. Monotonicity of $N$ places $N(t)$ in that count interval. Add these two bounds to step 7.1 to obtain the required real-time supremum on dyadic horizons. For any real $n\ge2$, the next dyadic horizon is less than $2n$, and its logarithm differs from $\log(n+2)$ by a bounded additive constant, proving the asserted bound at every horizon. [given, F1, F5, F6, step 5.1, step 2.2, step 3.2, step 7.1]

9.1 The finite initial time range is absorbed into the random constant: $B$ is bounded there by continuity, $N$ is bounded there by hypothesis, and $W$ is bounded on the corresponding compact count-time interval by continuity. Repeated or zero count times were treated in steps 3.1, 4.1. The restriction $\lambda>0$ is needed for the displayed scaling and the lower large-cell count bounds; no assertion is made at rate zero. Step 5.1 proves the full claimed independence, while steps 7.1, 8.1 prove the approximation. AC was used precisely through [F1]–[F3] and the product extension in step 1.1; all concentration, interpolation, and countable-event arguments are local. [A1, F1, F2, F3, step 1.1, step 3.1, step 4.1, step 5.1, step 7.1, step 8.1] ∎

## Source notes

The complete source PDF was retrieved. Lemma 2.4's full statement, its auxiliary-randomness clause, and the opening Haar construction were inspected, together with the introduction and proof roadmap. The source's detailed exponential-tail estimates were not represented as independently verified. The proof above supplies its own weaker logarithmic-square bound, which is sufficient for every fixed positive polynomial approximation scale. It invokes no KMT, embedding, renewal approximation, or unproved strong-approximation result.
