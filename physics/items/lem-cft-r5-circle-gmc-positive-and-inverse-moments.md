---
id: lem-cft-r5-circle-gmc-positive-and-inverse-moments
kind: lemma
title: Circle Fourier GMC positive and inverse moments
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
dependency_level: 4
proof_strategy: direct
deps:
  - def-cft-r5-liouville-radial-hamiltonian-data
  - thm-rmk-positive-functional-is-integration-against-its-representing-measure
dependency_roles:
  def-cft-r5-liouville-radial-hamiltonian-data: mathematical-premise
  thm-rmk-positive-functional-is-integration-against-its-representing-measure: mathematical-premise
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Guillarmou, Kupiainen, Rhodes and Vargas, Conformal Bootstrap in Liouville Theory"
      url: https://arxiv.org/pdf/2005.11530v1
      locator: "Sections 1.2–1.6 and 3–6; explicit local construction below. Actual source-reading limits are recorded in the attached research proofs; no full-paper reading is asserted."
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

For $0<\gamma<\sqrt2$, the exact Fourier measures $m_{\gamma,N}$ in the radial data converge almost surely weakly to a finite positive Radon measure $m_\gamma$. Its mass $V=m_\gamma(T)$ is strictly positive almost surely, $\mathbb EV=2\pi$, and for every $1<p<\min(2,2/\gamma^2)$ the masses $V_N$ converge to $V$ in $L^p$, uniformly bounded in that norm. Every inverse moment $\mathbb E V^{-a}$, $a>0$, is finite. For each fixed finite oscillator projection $\Pi_K$, both $V^{1/2}\Pi_K$ and $V^{-1/2}\Pi_K$ are bounded into $L^2$; their constants may depend on $K$.

## Statement references

[[def-cft-r5-liouville-radial-hamiltonian-data]]

## Facts & Assumptions

**Given:** Exactly the parameters, concrete Gaussian/vertex conventions and weighted-domain conditions in the Statement.

[F1] [[def-cft-r5-liouville-radial-hamiltonian-data]]: the exact Fourier Gaussian coordinates, Hermite basis, cutoff circle measures and total masses.

[F2] [[thm-rmk-positive-functional-is-integration-against-its-representing-measure|Positive functionals on $C_c(X)$ are integration against a Radon measure]]: for the compact Hausdorff circle $T$, each positive real-linear functional on $C(T;\mathbb R)=C_c(T;\mathbb R)$ is integration against its finite representing Radon measure, whose mass is the functional evaluated at $1$.

## Proof

1.1 **C1. The covariance and the comparison calculation.** $K_{N}(t)=\sum _{n=1}^{N}$ cos(nt)/n. Uniformly for $|t|\le \pi$, $|K_{N}(t)−\log (1/(|t|+N^{-1}))|\le C$. [F1, construct, algebra]

2.1 For $N|t|\le 1$ this follows by subtracting $H_{N}$, since $\sum _{n\le N}(1−\cos (nt))/n\le C$ N²t². For N|t|>1 use the convergent sum $\sum _{n\ge 1}\cos (nt)/n=−\log (2|\sin (t/2)|)$ and summation by parts on its tail: geometric partial sums are bounded by 1/|sin(t/2)|, giving tail bound C/(N|t|). Adjusting C covers $N=1$ and circle distance near pi. [F1, step 1.1, construct, algebra]

3.1 Here is the Gaussian comparison used below, including its direction. For finite Gaussian vectors X,Y whose covariances satisfy $C_{X}(i,j)\le C_{Y}(i,j)$ for every pair, independent interpolation sqrt(1−s)X+sqrt(s)Y and Gaussian integration by parts give d/ds E $F(\sum _{i} w_{i} \exp (\gamma  X_{s}(i)−\gamma^2 \operatorname{Var}(X_{s}(i))/2))$ = (gamma²/2) $\sum _{i,j}(C_{Y}−C_{X})(i,j)$ $E[F''(M_{s}) w_{i} w_{j} \exp (\gamma  X_{s}(i)−...) \exp (\gamma  X_{s}(j)−...)]$. [F1, step 2.1, construct, algebra]

4.1 This follows by differentiating the Gaussian density (or by integrating the one-variable identity E[Zg(Z)]=E[g'(Z)] successively); the diagonal first-derivative terms cancel exactly against the variance normalization. Thus convex F gives E $F(M_{X})\le E$ $F(M_{Y})$, and concave F reverses the inequality. Riemann sums pass to the continuous finite-N fields by continuity. Powers $x^{q}$, $0<q<1$, are obtained by replacing x with x+delta and then decreasing delta to zero; F(x)=exp(−t x) needs no truncation. Adding an independent common Gaussian of variance C multiplies a qth moment by exp(gamma² C(q²−q)/2). [F1, step 3.1, construct, algebra]

5.1 For an interval $I$ of length $r\le1$ with $Nr\ge1$, rescale it to a unit interval. The covariance estimate gives $K_N(r(s-t))\ge\log(1/r)+K_{\lfloor Nr\rfloor}(s-t)-C$ for $0\le s,t\le1$. [F1, step 4.1, construct, algebra]

6.1 The constant $C$ in step 5.1 is independent of $N,r$. Add a common Gaussian of variance $C$ to the actual field; its covariance then dominates that of the comparison field. Concave Gaussian comparison and the common-Gaussian moment factor bound the $q$th moment by a constant times the rescaled unit-interval mass moment. Jensen bounds that moment by one, giving $\mathbb E[m_N(I)^q]\le C_q r^{\xi(q)}$, where $\xi(q)=(1+\gamma^2/2)q-\gamma^2q^2/2$ for $0<q<1$. (1) [F1, step 5.1, construct, algebra]

7.1 All covariance comparisons concern entries, not positive-semidefinite ordering of their difference. The interpolation proof requires precisely this entrywise condition. Neither an independence assertion for actual disjoint arcs nor exact scale invariance of the Fourier field is used. [F1, step 6.1, construct, algebra]

8.1 **C2. Uniform positive moments and the actual measure limit.** Put $p=1+q$ with $0<q<\operatorname{min}(1,2/\gamma^2−1)$. The elementary exponential tilt of the joint Gaussian density gives $E[V_{N}^{p}]$ = $\int _{T}$ $E[(\int _{T} \exp (\gamma^2 K_{N}(x−y)) m_{N}(dy))^{q}]$ dx. [F1, step 7.1, construct, algebra]

9.1 Divide the y-integral into dyadic shells about x down to radius comparable to 1/N and the remaining ball. Concavity gives $(\sum  a_{k})^{q}\le \sum$ $a_{k}^{q}$. On a shell of radius $r\ge 1/N$ the covariance estimate bounds the tilt by C $r^{−\gamma^2}$, while (1) bounds the qth mass moment by C $r^{\xi (q)}$. The same estimate holds for the final radius 1/N ball. The resulting geometric series is bounded uniformly in N because $\xi (q)−\gamma^2q=q(1−\gamma^2(1+q)/2)>0$. [F1, step 8.1, construct, algebra]

10.1 The finitely many macroscopic arcs only change its constant. Thus $\operatorname{sup}_{N}$ $E[V_{N}^{p}]<\infty$ for the entire specified p range. [F1, step 9.1, construct, algebra]

11.1 The Fourier modes are independent across n, and their normalized exponential has conditional mean one. Hence for every bounded nonnegative deterministic g, integral g $dm_{N}$ is a nonnegative martingale. The preceding $L^{p}$ bound and domination by ||g||infinity $V_{N}$ give uniform integrability and $L^{p}$ boundedness. Martingale convergence can be proved directly by the usual upcrossing inequality: buy at a and sell at b for successive crossings, conditional mean-zero increments bound expected completed gains, hence each rational interval has finitely many crossings; boundedness in $L^{p}$ excludes an infinite limit. Conditional Jensen and uniform integrability identify the limit's conditional expectations, and the standard tail truncation plus convergence in probability proves $L^{p}$ convergence (alternatively apply the upcrossing argument to the uniformly $L^{p}$-bounded martingale and its conditional limit). [F1, step 10.1, construct, algebra]

12.1 Apply this simultaneously to a countable uniformly dense real trigonometric-polynomial family containing the constant $1$. On the resulting probability-one set, convergence on the dense family and bounded total masses extend the limits by uniform approximation to a bounded positive real-linear functional $\Lambda$ on $C(T;\mathbb R)$. Since $T$ is compact Hausdorff, $C_c(T;\mathbb R)=C(T;\mathbb R)$; [F2] represents $\Lambda$ by a finite positive Radon measure $m_\gamma$, with $m_\gamma(T)=\Lambda(1)$. Uniform approximation then gives $\int f\,dm_{\gamma,N}\to\int f\,dm_\gamma$ for every continuous $f$, so the measures converge weakly. The total mass has $\mathbb E V=2\pi$ by the $L^1$ convergence in step 11.1, and it has the stated positive moments. This constructs the exact Fourier circle datum required in the radial Hamiltonian. [F1, F2, step 11.1, construct, algebra]

13.1 **C3. A two-arc comparison, positivity, and negative moments.** Fix two disjoint closed arcs $I_{1},I_{2}$ of length 2pi r with $r>0$ sufficiently small, separated by positive distance. For x,y in different arcs $K_{N}(x−y)$ is bounded above uniformly in N. Parameterize each arc by $x=a_{j}+r$ theta, $0\le \theta \le 2\pi$. Within one arc the covariance estimate gives $K_{N}(r(\theta −\theta '))$ $\le$ $C+\log (1/r)+K_{\lfloor Nr\rfloor}(\theta −\theta ')$. [F1, step 12.1, construct, algebra]

14.1 The inequality also holds when theta−theta' is close to 2pi: the rescaled periodic covariance increases there and so is an upper bound; away from the two endpoints it is just the preceding logarithmic estimate. The finitely many N with $Nr<1$ are irrelevant for taking limits. Choose a common Gaussian Z of variance $A=C+\log (1/r)$, increasing C if necessary. Let $X^{(1)},X^{(2)}$ be independent Fourier fields with cutoff floor(Nr), independent of Z. Their copies plus Z dominate the actual covariance entrywise on the union of the two arcs (cross covariance of the model is A). The convex comparison for exp(−t x), followed by the already established convergence, gives for phi(t)=E exp(−tV) phi(t) $\le$ E[phi(t B)^2], $B=r$ exp(gamma Z−gamma² A/2)>0. (2) [F1, step 13.1, construct, algebra]

15.1 Indeed V is at least the sum of the actual arc masses; the model arc masses are B times two independent copies of V. This is a comparison inequality, not a false independence/scaling identity for the actual arc masses. [F1, step 14.1, construct, algebra]

16.1 Let t tend to infinity in (2). With $a=P(V=0)$, dominated convergence gives $a\le a²$. Since E V=2pi and V is finite, a cannot be one. Therefore $a=0$, so phi(t)->0. [F1, step 15.1, construct, algebra]

17.1 For every $\epsilon\in(0,1)$, the lognormal lower tail gives $\mathbb P(B<e^{-\epsilon s})\le C e^{-c_\epsilon s^2}$ for all sufficiently large $s$. [F1, step 16.1, construct, algebra]

18.1 Put $\psi(s)=\phi(e^s)$. Splitting the expectation in (2) on the event $B<e^{-\epsilon s}$ yields $\psi(s)\le\psi((1-\epsilon)s)^2+C e^{-c_\epsilon s^2}$. (3) [F1, step 17.1, construct, algebra]

19.1 Choose epsilon small and $1<\delta <2$ with $2(1−\epsilon )^{\delta }>1$. Since psi tends to zero, choose a large initial interval [(1−epsilon)S,S] where $\psi <1/4$ and then $b>0$ small enough that $\psi (s)\le \exp (−b s^{\delta })/2$ there. Enlarging S and decreasing $b\le 1$ if necessary makes the Gaussian error at most $\exp (−b s^{\delta })/4$ for $s\ge S$. Induction on intervals [S(1−epsilon)^{-m},S(1−epsilon)^{-m−1}] using (3) proves $\phi (t)\le C$ exp(−b (log t)^delta), $t\ge 2$. (4) [F1, step 18.1, construct, algebra]

20.1 The strict inequality $2(1-\epsilon)^\delta>1$ absorbs the squared term, and the exponent $2$ in the Gaussian error exceeds $\delta$. Tonelli's theorem and the elementary gamma integral give, for every $a>0$, $\mathbb E[V^{-a}]=\Gamma(a)^{-1}\int_0^\infty t^{a-1}\phi(t)\,dt<\infty$ by (4). [F1, step 19.1, construct, algebra]

21.1 These inverse moments are the tail control used at the confining end of the scattering argument. [F1, step 20.1, construct, algebra]

22.1 **C4. Finite oscillator channels.** Every fixed finite Hermite polynomial belongs to every finite $L^{r}$ of the Gaussian law. Holder therefore gives $E[V^{1+\epsilon '}|p|^{r}]<\infty$ for some epsilon'>0 whenever a particular finite r is needed, by choosing epsilon' below the positive-moment margin and the complementary Gaussian exponent appropriately. The inverse moments similarly give $E[V^{−1}|p|²]<\infty$. For a finite oscillator projection $\Pi _{K}$, both $V^{1/2}\Pi _{K}$ and $V^{−1/2}\Pi _{K}$ are bounded operators into L². Constants depend on K; no uniform-in-K polynomial estimate is asserted or needed. [F1, step 21.1, construct, algebra] ∎
