---
dependency_level: 5
id: thm-geometrically-ergodic-chain-strong-invariance-principle
kind: theorem
title: Strong invariance principle for geometrically ergodic chains
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
deps:
  - cor-countable-products-and-g-delta-subspaces-of-polish-spaces-are-polish
  - cor-first-borel-cantelli-lemma-for-events
  - cor-law-of-the-brownian-maximum
  - cor-markov-inequality-for-random-variables
  - def-axiom-of-choice
  - def-brownian-motion
  - def-geometric-and-uniform-ergodicity-for-mcmc-clt
  - def-invariant-and-stationary-distribution-for-a-markov-kernel
  - def-long-run-variance-for-stationary-markov-chain
  - def-measure-kernel-and-probability-kernel
  - def-real-exponential-function-and-e
  - def-scalar-poisson-count-law
  - def-state-dependent-one-step-minorization
  - def-time-homogeneous-markov-chain-with-transition-kernel
  - lem-adjacent-iid-finite-moment-vector-strong-approximation
  - lem-brownian-poisson-independent-clock-composition
  - lem-characteristic-function-of-a-normal-law
  - lem-finite-moment-moving-window-increments
  - lem-geometric-markov-chain-has-adjacent-iid-split-tours
  - lem-geometric-total-variation-rate-controls-strong-mixing
  - lem-geometrically-ergodic-chain-has-standard-borel-observation-factor
  - lem-harris-geometric-ergodicity-has-integrable-rate-envelope
  - lem-homogeneous-poisson-ordered-event-time-density
  - lem-iid-finite-moment-vector-strong-approximation
  - lem-measurable-observation-does-not-increase-mixing-coefficients
  - lem-real-line-is-standard-borel
  - lem-two-sided-mills-bounds-for-standard-normal-tail
  - lem-uncorrelated-jointly-gaussian-blocks-are-independent
  - lem-zero-variance-geometric-markov-sums-have-strong-rate
  - thm-converging-together-lemma
  - thm-countable-product-of-probability-spaces
  - thm-disintegration-of-a-joint-law-on-standard-borel-spaces
  - thm-existence-of-continuous-brownian-motion
  - thm-exponential-addition-formula
  - thm-finite-and-countable-subadditivity-of-measures
  - thm-ionescu-tulcea-construction-of-a-markov-chain
  - thm-strong-mixing-clt-with-moment-conditions
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: James M. Flegal and Galin L. Jones, Batch means and spectral variance estimators in Markov chain Monte Carlo, Lemma 3
      url: https://arxiv.org/pdf/0811.1729
    - title: Florence Merlevède and Emmanuel Rio, Strong approximation for additive functionals of geometrically ergodic Markov chains, Lemma 2.4 and proof roadmap
      url: https://hal.science/hal-01044508v1/document
    - title: Elena Bashtova and Alexey Shashkin, Strong Gaussian approximation for cumulative processes with heavy tails, Theorem 1 and calendar-time decomposition
      url: https://arxiv.org/pdf/2007.15481
axiom_use: Assume AC through the standard-Borel observation factor and multistep split tours, Gaussian and Brownian constructions, standard-Borel disintegration, countable products and probability-kernel extensions. All clock, covariance and delay arguments are supplied locally.
proof_strategy: direct
---

## Statement

Let $P$ be a geometrically ergodic Markov chain with invariant probability
$\pi$, let $g$ be real Borel, and suppose there are $\delta,\varepsilon>0$
with $\pi(|g|^{2+\delta+\varepsilon})<\infty$. Suppose also that a
state-dependent one-step minorization
[[def-state-dependent-one-step-minorization]] holds. For the Flegal–Jones
strong invariance principle convention, assume its asymptotic standard
deviation satisfies $0<\sigma_g<\infty$. Then on a suitable extension of the
chain's probability space there are a standard Brownian motion $B$, a finite
random constant $C(\omega)$, and a finite random index $N(\omega)$ such that
for all $n\ge N(\omega)$,
$$\left|\sum_{i=1}^n(g(X_i)-\pi(g))-\sigma_g B(n)\right|\le C(\omega)n^{1/(2+\delta)}\log n$$
almost surely.

## Facts & Assumptions

**Given:** The chain, $g$, $\delta,\varepsilon$ and positive finite $\sigma_g$ in the Statement. AC is assumed under this item's axiom-use convention. The initial law is arbitrary.

[A1] AC is the convention for the Gaussian, path-law, standard-Borel disintegration and probability-space extension suppliers below. [[def-axiom-of-choice]]

[F1] For each specified initial law, an everywhere geometrically ergodic kernel on an arbitrary measurable space has a standard-Borel observation factor with the same initial and stationary real-observation path laws and moments. A joint observation/standard-Borel auxiliary law lifts to an extension of the entire original probability space. [[lem-geometrically-ergodic-chain-has-standard-borel-observation-factor]]

[F2] On a standard-Borel geometrically ergodic chain, a finite centered observable with stationary $v$th moment has, after an almost surely finite integer delay, actual adjacent-iid full calendar tours: lengths $L_j=L(U_j)\ge1$ are iid with exponential moment, rewards $Z_j=z(U_j,U_{j+1})$ are centered, and absolute tour envelopes $H_j=h(U_j,U_{j+1})$ have every moment $1\le q<v$. The full-tour occupation identity is $\mathbb E\sum b(X_t)=\mu_L\pi(b)$, where $\mu_L=\mathbb EL_0$. The same fixed post-delay tour law can be used for the specified and invariant initial laws. [[lem-geometric-markov-chain-has-adjacent-iid-split-tours]]

[F3] Centered adjacent-iid vectors of dimension at most two with finite $q$th moment admit, for every $2<p<q$, an original-process-preserving Gaussian partial-sum approximation with uniform error $o(n^{1/p})$. Its long-run covariance is $\Gamma=\mathbb EX_0X_0^T+\mathbb EX_0X_1^T+\mathbb EX_1X_0^T$, and a standard vector Brownian driver is supplied, including singular covariance. [[lem-adjacent-iid-finite-moment-vector-strong-approximation]]

[F4] Centered iid vectors in dimension two with finite $q$th moment, for $2<p<a<q$, have a preserving-extension Gaussian approximation of maximum error $O(n^{1/a}\log^3(en))=o(n^{1/p})$, with a standard vector Brownian driver. Singular covariance is allowed, so scalar variables can be embedded as $(Y,0)$. [[lem-iid-finite-moment-vector-strong-approximation]]

[F5] If a rate-$\lambda$ Poisson clock lies in a sigma-algebra independent of a standard Brownian motion $B$, there is an extended standard Brownian motion $W^*$ independent of that whole sigma-algebra such that $\sup_{t\le n}|B(t)-\lambda^{-1/2}W^*(N(t))|=O(\log^2(n+2))$ almost surely. [[lem-brownian-poisson-independent-clock-composition]]

[F6] Centered identically distributed independent or one-dependent $L^q$ variables, for $q>p>2$, have uniform $o(n^{1/p})$ increments over all windows of length at most $A n^{1/p}(\log n)^d$, simultaneously for fixed $A>0,d\ge0$. [[lem-finite-moment-moving-window-increments]]

[F7] A finite-window homogeneous Poisson process has, conditional on its total count, independent uniform unordered event positions; its ordered event density with $m$ total points in $(0,T]$ is $e^{-\lambda T}\lambda^m$. The scalar Poisson mass and the convergent exponential series are available. [[lem-homogeneous-poisson-ordered-event-time-density]], [[def-scalar-poisson-count-law]], [[def-real-exponential-function-and-e]], [[thm-exponential-addition-formula]]

[F8] Real sequences are standard Borel through their countable Polish product presentation. Standard-Borel joint laws have conditional probability kernels, and supplied kernels extend an arbitrary original probability space without changing its marginal. [[lem-real-line-is-standard-borel]], [[cor-countable-products-and-g-delta-subspaces-of-polish-spaces-are-polish]], [[thm-disintegration-of-a-joint-law-on-standard-borel-spaces]], [[thm-ionescu-tulcea-construction-of-a-markov-chain]]

[F9] Markov's inequality, countable subadditivity and the first Borel–Cantelli lemma give the usual union and summability bounds. [[cor-markov-inequality-for-random-variables]], [[thm-finite-and-countable-subadditivity-of-measures]], [[cor-first-borel-cantelli-lemma-for-events]]

[F10] Brownian motion has continuous centered Gaussian paths with covariance $\min(s,t)$. Uncorrelated jointly Gaussian blocks are independent. Independent Brownian copies exist. Reflection and the normal Mills upper bound give $\mathbb P(\sup_{s\le h}|B(s)|>x)\le4e^{-x^2/(2h)}$ when $x/\sqrt h\ge1$. [[def-brownian-motion]], [[lem-uncorrelated-jointly-gaussian-blocks-are-independent]], [[thm-existence-of-continuous-brownian-motion]], [[thm-countable-product-of-probability-spaces]], [[cor-law-of-the-brownian-maximum]], [[lem-two-sided-mills-bounds-for-standard-normal-tail]]

[F11] An everywhere finite common geometric total-variation envelope admits an integrable geometric envelope, which implies exponential stationary strong mixing. A measurable observation does not increase those coefficients. [[lem-harris-geometric-ergodicity-has-integrable-rate-envelope]], [[lem-geometric-total-variation-rate-controls-strong-mixing]], [[lem-measurable-observation-does-not-increase-mixing-coefficients]]

[F12] A centered stationary $L^{2+\eta}$ sequence with $\sum_n\alpha(n)^{\eta/(2+\eta)}<\infty$ has an absolutely convergent covariance sum and a CLT with that variance, including zero. A perturbation tending to zero in probability preserves a distributional limit; centered normal characteristic functions identify their variances. [[thm-strong-mixing-clt-with-moment-conditions]], [[thm-converging-together-lemma]], [[lem-characteristic-function-of-a-normal-law]], [[def-long-run-variance-for-stationary-markov-chain]]

## Proof

1.1 Put $P_0=2+\delta$, $Q_0=2+\delta+\varepsilon$, and $f=g-\pi g$. The given moment makes $\pi|g|<\infty$, since $|g|\le1+|g|^{Q_0}$, and the finite-sum power inequality gives $\pi|f|^{Q_0}<\infty$. Choose $P_0<p<q<Q_0$ and set $b=1/p<1/P_0<1/2$. To obtain exactly the requested observation indices, apply [F1] to the chain starting at $X_1$, with its actual initial law, and observable $f$. This gives a standard-Borel factor retaining the full path $(f(X_1),f(X_2),\ldots)$, the stationary path and its moments, and an everywhere finite common geometric bound. Work on this factor until the original-space lift at the end. Apply [F2] there, retaining its finite prefix and integer delay $D$. Define $F(t)$ to be the sum of the first $\lfloor t\rfloor$ centered observations of the retained tail beginning at calendar position $D$, with the empty sum zero. This real-time tail process has cycle lengths $L_j$, centered rewards $Z_j$, envelopes $H_j$, and relative boundaries $T_0=0$, $T_k=\sum_{j<k}L_j$. Then $F(T_k)=\sum_{j<k}Z_j$, $\mathbb EH_0^q<\infty$, and $\mu=\mathbb EL_0\in[1,\infty)$. The pair $(Z_j,L_j-\mu)$ is a centered adjacent-iid vector in $L^q$; exponential length moments and $|Z_j|\le H_j$ verify its two coordinate moments. No iid assertion about the full tours is used. [A1, F1, F2, given, choose, construct, algebra]

2.1 Apply [F3] jointly to $(Z_j,L_j-\mu)$. Write its long-run covariance as $\Gamma=\begin{pmatrix}u&c\\c&s^2\end{pmatrix}\ge0$. Since the lengths are iid, $s^2=\operatorname{Var}(L_0)$; the reward and cross entries still include their actual lag-one terms. The Gaussian approximation gives a continuous centered Gaussian vector process $A$ of covariance $\min(t,r)\Gamma$ such that $\max_{k\le n}|F(T_k)-A_1(k)|=o(n^b)$ and $\max_{k\le n}|T_k-\mu k-A_2(k)|=o(n^b)$. For now suppose $s>0$. Put $a=c/s^2$ and $v^2=u-c^2/s^2\ge0$. Then $B_0=A_2/s$ is standard Brownian. If $v>0$, $B=(A_1-aA_2)/v$ is standard Brownian independent of the entire process $B_0$: each finite stack is jointly Gaussian and every cross-covariance is $(c-as^2)\min(t,r)=0$, so [F10] gives independence on finite rational-time cylinders and continuity extends it to all times. If $v=0$, the residual Gaussian process is zero on rational times almost surely and hence identically zero; adjoin an independent unused $B$. Thus, with independent $B,B_0$, we have $\max_{k\le n}|F(T_k)-a(T_k-\mu k)-vB(k)|=o(n^b)$ and $\max_{k\le n}|T_k-\mu k-sB_0(k)|=o(n^b)$. This regression uses the full $c=\Gamma_{12}$, not just the covariance inside a single cycle. [F2, F3, F10, step 1.1, construct, algebra]

3.1 Define $\gamma=s^2/\mu$ and $\lambda=\mu^2/s^2$, so $\lambda\gamma=\mu$ and $\gamma\sqrt\lambda=s$. Choose any fixed $r>p$ and $r<a_1<q_1<\infty$. Apply [F4] to the centered iid scalar Poisson variables $C_i-\lambda$, embedded as $(C_i-\lambda,0)$, obtaining a joint law with a standard Brownian driver $B'_0$ and $\max_{k\le n}|\sum_{i=1}^kC_i-\lambda k-\sqrt\lambda B'_0(k)|=o(n^{1/r})$. Their moments of every order follow directly from the Poisson exponential series in [F7]. By [F8], disintegrate this joint law to a kernel for the entire count sequence given the integer driver sequence, and evaluate it at the already present $(B_0(k))_{k\ge0}$. This preserves all original variables and reproduces the asserted count/driver joint law. The kernel depends only on $B_0$ and is sampled using new randomness independent of everything earlier, so $B$ remains independent of the joint pair $(B_0,(C_i)_i)$. Conditional on $C_i=m$, insert $m$ independent uniform positions in $(i-1,i]$, independently over unit intervals and of earlier variables given the counts. By [F7] these are the exact finite-window Poisson laws. More explicitly, partitioning a unit interval into lengths $d_j$ gives multinomial conditional counts; summing their mass against $\operatorname{Pois}(\lambda)$ yields the product $\prod_j e^{-\lambda d_j}(\lambda d_j)^{k_j}/k_j!$. Hence the resulting locally finite simple right-continuous clock $N$ has independent Poisson increments of rate $\lambda$, $N(k)=\sum_{i\le k}C_i$, and remains independent of $B$ jointly with $B_0$. [A1, F4, F7, F8, F10, step 2.1, choose, construct, algebra]

3.2 Two uniform bounds control the remaining calendar errors. By the common $q$th envelope moment and [F9], $\mathbb P(\max_{j\le C2^h}H_j>\eta2^{h/p})\le C'\eta^{-q}2^{h(1-q/p)}$, summable in $h$. Intersecting Borel–Cantelli events over positive rational $\eta$ and integer $C$ yields $\max_{j\le Cn}H_j=o(n^b)$ without any independence requirement. For any standard Brownian motion and fixed $A,C>0$, cover $[0,C2^h]$ by overlapping intervals of length $2A\cdot2^{hb}$. Every pair of times at distance at most $A\cdot2^{hb}$ lies in one such interval, and [F10] bounds the oscillation tail at $K\sqrt{2^{hb}h}$ by $4e^{-cK^2h}$. There are at most $C'2^{h(1-b)}+2$ intervals. Taking $K$ large and using [F9] gives the uniform modulus $O(n^{b/2}\sqrt{\log n})=o(n^b)$ for windows of length $An^b$; for fixed window length the same proof gives $O(\sqrt{\log n})$. All fixed integer $A,C$ can be placed on one event. Finally [F6] applies to the centered one-dependent rewards $Z_j$, so their partial-sum increments over at most $An^b$ consecutive cycle indices, among the first $Cn$ indices, are uniformly $o(n^b)$. A finite random bound for $A$ or $C$ is covered by their countably many integer choices. [F2, F6, F9, F10, step 1.1, step 2.1, algebra]

4.1 We record the uniform estimates used for this clock and for Brownian motion. Summing the Poisson mass series gives $\mathbb E e^{\theta(N(v)-N(u)-\lambda(v-u))}=\exp(\lambda(v-u)(e^\theta-1-\theta))$. The exponential series and $k!\ge2\cdot3^{k-2}$ for $k\ge2$ give $e^\theta-1-\theta\le\theta^2/[2(1-|\theta|/3)]$ for $|\theta|<3$. Exponential Markov with parameter $x/(\lambda(v-u)+x/3)$ and either sign therefore bounds the increment deviation tail by $2\exp[-c_\lambda\min\{x^2/(v-u),x\}]$. On dyadic horizons $n$, take $x=K(\sqrt{(v-u)\log(n+2)}+\log(n+2))$ and union over the at most $(Cn+1)^2$ integer intervals in $[0,Cn]$. A sufficiently large deterministic $K$ makes the probabilities summable, so [F9] proves this bound for all such intervals eventually almost surely, for every positive integer $C$ by countable intersection. In particular unit counts are $O(\log n)$ uniformly, intervals of integer length at least $n^b$ have count increase at least $\lambda/2$ times their length eventually, and $N(t)/t\to\lambda$. Also [F10], a union bound and [F9] make all within-unit Brownian oscillations up to time $Cn$ be $O(\sqrt{\log n})$. These estimates require no independence between evaluation times and the Brownian motion. Consequently the integer coupling in step 3.1 extends to $\sup_{z\le n}|\gamma N(z)-\mu z-sB_0(z)|=o(n^b)$, and step 2.1 gives $\max_{k\le n}|T_k-\gamma N(k)|=o(n^b)$. [F7, F9, F10, step 2.1, step 3.1, construct, algebra]

5.1 Let $m(t)=\max\{k:T_k\le t\}$ and $y(t)=\inf\{z:N(z)>t/\gamma\}$. Brownian reflection on dyadic horizons gives $\sup_{z\le n}|B_0(z)|=O(\sqrt{n\log n})=o(n)$; thus step 2.1 implies $T_k/k\to\mu$. Together with $N(z)/z\to\lambda$, this gives $m(t),y(t)=O(t)$, absorbing their finite initial values. Put $k=\lfloor y(t)\rfloor$. Monotonicity gives $\gamma N(k)\le t<\gamma N(k+1)$, except for an integer endpoint convention which is covered by shifting at most two indices. The unit-count bound in step 4.1 therefore gives $|\gamma N(k)-t|=O(\log n)$ uniformly for $t\le n$. On every required range of $O(n)$ indices, $|T_j-\gamma N(j)|\le n^b$ eventually by its little-o bound. Choose an integer $J$ with $\gamma\lambda J/2>4$. The lower-increment bound in step 4.1 makes a change of $\lceil Jn^b\rceil$ indices change $\gamma N$ by more than $2n^b+O(\log n)$ eventually. The corresponding $T$ values bracket $t$, using index zero at the lower boundary. Thus $\sup_{t\le n}|m(t)-y(t)|=O(n^b)$. The countable estimates for all deterministic horizon multipliers cover a finite random multiplier as well. This is a direct monotone inverse comparison, not an imported renewal approximation. [F9, F10, step 1.1, step 2.1, step 4.1, construct, choose, algebra]

6.1 Let $E_i$ be the interarrival times of $N$. Their iid exponential law follows from [F7]: for $0<t_1<\cdots<t_k\le T$, sum its ordered density over all total counts $m\ge k$ and integrate the last $m-k$ ordered points above $t_k$. The simplex volume is $(T-t_k)^{m-k}/(m-k)!$, so the first-$k$ density is $e^{-\lambda T}\lambda^k\sum_{j\ge0}(\lambda(T-t_k))^j/j!=\lambda^ke^{-\lambda t_k}$. Increasing $T$ covers the whole ordered simplex. The spacing change of variables has determinant one and gives $\prod_{i=1}^k\lambda e^{-\lambda e_i}$ on positive spacings. Hence $\mathbb EE_i=1/\lambda$, $\operatorname{Var}(E_i)=1/\lambda^2$ and all moments are finite, by elementary exponential integration and integration by parts for integer moments, bounding other positive powers by the next integer power plus one. Apply [F4] to $(E_i-1/\lambda,0)$ with the same auxiliary exponent $r>p$, and glue its Brownian driver $V$ to the entire already realized arrival sequence by [F8], using a fresh kernel depending only on that sequence. Then $\max_{k\le n}|\sum_{i=1}^kE_i-k/\lambda-V(k)/\lambda|=o(n^{1/r})$. Since $y(t)=\sum_{i\le\lfloor t/\gamma\rfloor+1}E_i$, set $V_1(t)=\sqrt\gamma V(t/\gamma)$ and use step 4.1's within-unit Brownian bound to obtain $\sup_{t\le n}|y(t)-t/\mu-V_1(t)/(\lambda\sqrt\gamma)|=o(n^b)$. The clock sigma-algebra generated by $B_0,N,V_1$ and their fresh clock randomness remains independent of $B$: each new kernel depended on $B_0$ or on the clock alone and used randomness independent of earlier variables. [F4, F7, F8, F10, step 3.1, step 4.1, step 5.1, construct, algebra]

7.1 Apply [F5] to $B$, $N$ and this entire clock sigma-algebra. It supplies a standard Brownian motion $W^*$ independent of that sigma-algebra, hence independent of $V_1$, and $\sup_{z\le n}|B(z)-\lambda^{-1/2}W^*(N(z))|=O(\log^2(n+2))$. Define $G(t)=(v/\sqrt\lambda)W^*(t/\gamma)-(a\mu/(\lambda\sqrt\gamma))V_1(t)$. It is continuous centered Gaussian with independent stationary increments and variance per unit time $v^2/(\lambda\gamma)+a^2\mu^2/(\lambda^2\gamma)=(v^2+a^2s^2)/\mu=u/\mu$. Thus, when $u>0$, $G=\kappa W$ for a standard Brownian $W$ and $\kappa=\sqrt{u/\mu}$. When $u=0$, positive semidefiniteness forces $a=v=0$, so $G=0$ and adjoin an unused standard $W$. The case $v=0$ needs no residual normalization or nonzero Brownian coefficient. [F5, F10, step 2.1, step 3.1, step 6.1, construct, algebra]

8.1 For $y=y(t)$, the following exact decomposition has eight terms: $F(t)-G(t)=\sum_{i=1}^8\Phi_i(t)$, where $\Phi_1=F(t)-F(T_{m(t)})$, $\Phi_2=F(T_{m(t)})-F(T_{\lfloor y\rfloor})$, $\Phi_3=F(T_{\lfloor y\rfloor})-aT_{\lfloor y\rfloor}+a\mu y-vB(y)$, $\Phi_4=a(T_{\lfloor y\rfloor}-\gamma N(y))$, $\Phi_5=-a\mu(y-t/\mu-V_1(t)/(\lambda\sqrt\gamma))$, $\Phi_6=v(B(y)-\lambda^{-1/2}W^*(N(y)))$, $\Phi_7=(v/\sqrt\lambda)(W^*(N(y))-W^*(t/\gamma))$, and $\Phi_8=a(\gamma N(y)-t)$. Adding these expressions cancels every intermediate reward, clock and Gaussian evaluation and leaves exactly $F(t)-G(t)$. This verifies the signs and deterministic drift, including the bounded last term. [step 2.1, step 5.1, step 6.1, step 7.1, construct, algebra]

9.1 Uniformly for $t\le n$, the first term is $o(n^b)$ by the incomplete-cycle bound in [F2] and step 3.2. The second is $o(n^b)$ by the inverse comparison in step 5.1 and [F6]. The third is $o(n^b)$ by step 2.1 at $\lfloor y\rfloor$, the bounded fractional-part drift $a\mu(y-\lfloor y\rfloor)$, and the within-unit Brownian bound. The fourth is $o(n^b)$ by the length/Poisson comparison at $\lfloor y\rfloor$ and the $O(\log n)$ count increase between that point and $y$. The fifth is $o(n^b)$ by step 6.1, and the sixth is $O(\log^2 n)=o(n^b)$ by step 7.1. The strict inverse of the simple Poisson clock satisfies $N(y(t))=\lfloor t/\gamma\rfloor+1$, so its distance from $t/\gamma$ is at most one; step 3.2's fixed-window Brownian bound makes the seventh term $O(\sqrt{\log n})=o(n^b)$, while $|\Phi_8|\le|a|\gamma$. The indices $m(t),y(t)$ are $O(n)$ by step 5.1, so every approximation was evaluated inside its verified range. Therefore $\sup_{t\le n}|F(t)-\kappa W(t)|=o(n^b)$ for $s>0$. [F2, F5, F6, step 2.1, step 4.1, step 5.1, step 6.1, step 7.1, step 3.2, step 8.1, algebra]

10.1 If $s^2=0$, the iid lengths have variance zero, hence $L_j=\mu$ for every $j$ simultaneously almost surely. In particular $T_k=\mu k$; positive semidefiniteness of $\Gamma$ implies $c=0$. The joint approximation [F3] gives $F(T_k)=\sqrt u\,B(k)+o(n^b)$ uniformly for $k\le n$, with a standard Brownian $B$ when $u>0$, and an unused one when $u=0$. For $t\le n$, $m(t)=\lfloor t/\mu\rfloor$, so step 3.2's fixed-window modulus replaces $B(m(t))$ by $B(t/\mu)$ at error $o(n^b)$. The incomplete-tour bound is again $o(n^b)$. Thus $\sup_{t\le n}|F(t)-\sqrt u B(t/\mu)|=o(n^b)$. The process $W(t)=\sqrt\mu B(t/\mu)$ is standard Brownian by its continuous Gaussian covariance and increments, and the coefficient is the same $\kappa=\sqrt{u/\mu}$. This proves the tail approximation in every covariance case, including a zero residual or zero full Gaussian covariance, without inverting a singular matrix. [F2, F3, F10, step 1.1, step 2.1, step 3.2, step 9.1, algebra, construct]

11.1 Restore the finite initial segment of [F2]. Let $A$ be its finite centered reward and $D$ its finite integer length. For $n\ge D$, the actual sum is $A+F(n-D)$. Keep the same standard Brownian motion $W$ and use $A+F(n-D)-\kappa W(n)=A+[F(n-D)-\kappa W(n-D)]+\kappa[W(n-D)-W(n)]$. The fixed-window Brownian estimates in step 3.2 hold on one event for every positive integer window length. On that event choose an integer at least the finite random $D$; then $\max_{D\le k\le n}|W(k-D)-W(k)|=O(\sqrt{\log n})$, regardless of any dependence of $D$ and $W$. Finitely many earlier indices contribute a finite maximum. Steps 9.1 and 10.1 therefore give the complete-path bound $\max_{k\le n}|\sum_{i=1}^k f(X_i)-\kappa W(k)|=o(n^b)$ in the factor construction. Neither a moment of the initial law nor an assertion that a randomly shifted Brownian path is standard has been used. [F1, F2, F10, step 3.2, step 9.1, step 10.1, algebra]

12.1 Identify $\kappa$ without making an unsupported second-moment inference from the almost-sure approximation. Use the same factor and fixed post-delay tour law under invariant initial law, as supplied in [F1]–[F2]. Steps 2.1, 3.1, 3.2, 4.1, 5.1, 6.1, 7.1, 8.1, 9.1, 10.1, 11.1 then give a CLT with variance $\kappa^2=u/\mu$: the approximation error divided by $\sqrt n$ tends to zero almost surely since $b<1/2$, and $\kappa W(n)/\sqrt n$ has exactly the centered normal law of variance $\kappa^2$ for each $n$; apply [F12]'s converging-together result. Independently, [F11] gives exponential stationary strong mixing of the original observations. Their $Q_0$th moment, with $Q_0>2$, satisfies [F12]'s moment regime because every positive power of an exponential rate is summable. Hence [F12] gives the stationary CLT with its absolutely convergent covariance-sum variance $\sigma_g^2$, the asymptotic variance in the Statement's convention. The stationary observation-path equality in [F1] makes these two limits refer to the same law. Uniqueness of centered normal characteristic functions, $e^{-t^2\kappa^2/2}=e^{-t^2\sigma_g^2/2}$, gives $\kappa^2=\sigma_g^2$. The assumed positivity therefore gives $\kappa=\sigma_g>0$. This argument uses no uniform-integrability assumption on the approximation error. [F1, F2, F11, F12, step 1.1, step 7.1, step 10.1, step 11.1, given, algebra]

13.1 Finally preserve the actual original chain probability space. The factor construction gives a joint law of its real observation sequence and the rational-time coordinates of the final standard Brownian motion $W$. Both are standard-Borel real sequence spaces by [F8]. Use [F1]'s lifting assertion, or disintegrate this joint law and apply its conditional kernel at the actual sequence $(f(X_1),f(X_2),\ldots)$ by [F8]; this preserves the entire original probability space and reproduces that observation/Gaussian-coordinate joint law. The approximation event uses only these observations and integer driver coordinates, so it still has probability one. The rational coordinates extend to a continuous Brownian path on a common measurable full-measure event: for each positive integers $M,k$, some integer $l$ makes all rational pairs in $[0,M]$ at distance below $1/l$ have coordinate difference below $1/k$. This is a Borel condition and has probability one under the original Brownian rational law; completeness of $\mathbb R$ gives a unique consistent continuous extension on compact intervals. Every fixed real-time evaluation is the limit along a deterministic rational sequence, hence measurable; on the null failure event set the path to zero. Its finite-dimensional laws agree with standard Brownian laws by continuity, so [F10] identifies genuine standard Brownian motion on the extension. With $B=W$, steps 11.1, 12.1 give error $o(n^{1/p})$, and $p>P_0$ implies $n^{1/p}/(n^{1/P_0}\log n)\to0$. Choosing the finite eventual bound and starting index in this almost-sure comparison gives precisely the $C(\omega),N(\omega)$ in the Statement. AC was used through the stated local Gaussian, factor, tour and extension suppliers; the full moment range, arbitrary initial law, positive-variance convention and original observation indices are retained. [A1, F1, F8, F10, step 1.1, step 11.1, step 12.1, given, construct, algebra] ∎

## Source notes

Flegal–Jones Lemma 3 supplies the stated rate. Its cited older scalar regenerative route does not itself provide the unrestricted moment-range proof. The argument above instead uses the fully local joint adjacent-iid approximation, delayed multistep tour construction and independent Brownian/Poisson composition. The latter's source manuscript statement and roadmap, and the complete almost-sure proof of Theorem 1 in Bashtova–Shashkin's heavy-tail paper motivating the calendar-time decomposition, were retrieved and inspected as recorded in the owner research notes; no external theorem replaces a proof premise here. The zero-variance rate is proved separately in [[lem-zero-variance-geometric-markov-sums-have-strong-rate]]; the Statement here retains its explicit positive-variance hypothesis.
