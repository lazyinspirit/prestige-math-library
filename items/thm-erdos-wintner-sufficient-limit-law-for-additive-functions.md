---
id: thm-erdos-wintner-sufficient-limit-law-for-additive-functions
kind: theorem
title: "Erdős–Wintner sufficient criterion and random prime-power limit"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - def-additive-arithmetic-function
  - thm-fundamental-theorem-of-arithmetic
  - def-prime
  - def-uniform-finite-probability-space
  - def-convergence-in-distribution-of-random-elements
  - thm-first-mertens-theorem-for-primes
  - thm-chebyshev-prime-counting-bounds
  - lem-mean-square-prime-divisor-sum
  - thm-chinese-remainder-theorem
  - thm-countable-product-of-probability-spaces
  - cor-coordinate-random-elements-on-a-countable-product-are-independent
  - def-countable-choice
  - def-dependent-choice
  - def-natural-numbers
  - lem-nat-embeds-int
  - thm-euclid-infinitude-of-primes
  - lem-infinite-subset-of-natural-numbers-has-canonical-increasing-enumeration
  - thm-geometric-series
  - def-power-set
  - def-sigma-algebra
  - def-dirac-measure
  - prop-dirac-measure-is-a-probability-measure
  - def-probability-measure
  - thm-nonnegative-weighted-sums-of-measures
  - cor-kolmogorov-two-series-sufficiency
  - cor-first-borel-cantelli-lemma-for-events
  - lem-measurable-functions-preserve-independence
  - thm-portmanteau-theorem
  - thm-continuity-from-above-for-measures
  - lem-distance-to-set-is-lipschitz
  - thm-dominated-convergence
  - lem-probability-measure-basic-identities
  - def-measurable-function-between-measurable-spaces
  - def-borel-sigma-algebra
  - prop-closure-properties-of-measurable-functions-used-by-the-integral
  - thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable
  - thm-complex-coordinate-isometry-and-topology-transport
  - thm-rational-box-generators-of-the-borel-sigma-algebra-on-rn
  - thm-composition-with-borel-functions-preserves-measurability
  - def-measurable-function-between-measurable-spaces
  - def-borel-sigma-algebra
  - prop-closure-properties-of-measurable-functions-used-by-the-integral
  - thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable
  - thm-complex-coordinate-isometry-and-topology-transport
  - thm-rational-box-generators-of-the-borel-sigma-algebra-on-rn
  - thm-composition-with-borel-functions-preserves-measurability
justified_by: []
proof_strategy: finite-prime approximation, prime-power decomposition, and closed-neighborhood convergence
axiom_use: "Countable Choice and Dependent Choice are used only through the countable-product probability-space theorem; no full Axiom of Choice is asserted or used."
sources:
  scraped: []
  references:
    - title: "Emmanuel Kowalski, Probabilistic Number Theory, Chapter 2.2, Theorem 2.2.1 and its complete sufficient-direction proof"
      url: "https://www.math.ethz.ch/~kowalski/probabilistic-number-theory.pdf"
      locator: "2021 ETH Zürich notes, PDF pp. 26–29 (printed chapter pp. 22–25); complex-valued additive functions, three series, geometric valuation model, truncation, and mean-square tail estimate."
    - title: "H. L. Montgomery and R. C. Vaughan, Multiplicative Number Theory III, §23.3, Theorem 23.9 and proof"
      url: "https://personal.science.psu.edu/rcv4/571s25/Vol3.pdf"
      locator: "PDF pp. 22–23, Theorem 23.9 and sufficient-direction proof for real-valued additive functions; used as an independent real-valued treatment only."
---

## Statement

Assume the Axiom of Countable Choice and the Axiom of Dependent Choice. Let $g:\mathbb N_{\ge1}\to\mathbb C$ be additive, and suppose the following prime series converge in increasing-prime order: $$\sum_{|g(p)|\le1}\frac{g(p)}p,\qquad \sum_{|g(p)|\le1}\frac{|g(p)|^2}p<\infty,\qquad \sum_{|g(p)|>1}\frac1p<\infty.$$
For each integer $N\ge1$, let $U_N$ be uniform on $\{1,\ldots,N\}$. There is a sequence $(V_p)_p$ of independent geometric random variables, indexed by primes and satisfying $\mathbb P(V_p=j)=(1-1/p)p^{-j}$ for every integer $j\ge0$, such that the series
$$G:=\sum_p g(p^{V_p})$$
converges almost surely in increasing-prime order and
$$g(U_N)\Rightarrow G\qquad(N\to\infty).$$

## Statement references

[Kowalski, *Probabilistic Number Theory*, Chapter 2.2, Theorem 2.2.1 and proof](https://www.math.ethz.ch/~kowalski/probabilistic-number-theory.pdf)

[Montgomery and Vaughan, *Multiplicative Number Theory III*, §23.3, Theorem 23.9 and proof (real-valued case)](https://personal.science.psu.edu/rcv4/571s25/Vol3.pdf)

## Facts & Assumptions

**Given:** Countable Choice, Dependent Choice, an additive $g:\mathbb N_{\ge1}\to\mathbb C$ satisfying the three displayed series conditions, and the finite uniform random integer $U_N$.

[A1] Under Countable Choice and Dependent Choice, any countable family of probability spaces has a product probability space with the prescribed finite-coordinate product marginals. ([[def-countable-choice]], [[def-dependent-choice]], [[thm-countable-product-of-probability-spaces]])

[F1] Additivity means $g(mn)=g(m)+g(n)$ for coprime positive integers, and every integer factors uniquely into prime powers; in particular $g(n)=\sum_{p\mid n}g(p^{v_p(n)})$ and $g(1)=0$. ([[def-additive-arithmetic-function]], [[thm-fundamental-theorem-of-arithmetic]])

[F2] On $\{1,\ldots,N\}$, $\mathbb P(d\mid U_N)=\lfloor N/d\rfloor/N\le1/d$; for distinct primes, simultaneous divisibility is governed by the Chinese remainder theorem. ([[def-uniform-finite-probability-space]], [[thm-chinese-remainder-theorem]])

[F3] The finite prime-divisor sum satisfies $\mathbb E|\sum_{p\le N}a_p(\mathbf1_{p\mid U_N}-\mathbb P(p\mid U_N))|^2\le C\sum_{p\le N}|a_p|^2/p$. ([[lem-mean-square-prime-divisor-sum]])

[F4] $\pi(y)\ll y/\log y$, so $\pi(N)/N\to0$. ([[thm-chebyshev-prime-counting-bounds]])

[F5] Independent square-integrable real random variables whose means form a convergent series and whose variances have finite sum have an almost-surely convergent sum. ([[cor-kolmogorov-two-series-sufficiency]])

[F6] If the sum of event probabilities is finite, only finitely many of those events occur almost surely. ([[cor-first-borel-cantelli-lemma-for-events]])

[F7] Measurable coordinatewise functions of independent random elements remain independent. ([[lem-measurable-functions-preserve-independence]])

[F8] For Borel probabilities on a metric space, convergence in distribution is equivalent to the closed-set upper bound in the Portmanteau theorem. ([[thm-portmanteau-theorem]])

[F9] Distance to a nonempty set is $1$-Lipschitz, so closed neighborhoods of closed sets are closed. ([[lem-distance-to-set-is-lipschitz]])

[F10] A decreasing sequence of measurable sets in a finite measure space has measures decreasing to the measure of its intersection. ([[thm-continuity-from-above-for-measures]])

[F11] Bounded almost-surely convergent measurable functions have convergent integrals. ([[thm-dominated-convergence]])

[F12] A finite union of events has probability at most the sum of their probabilities. ([[lem-probability-measure-basic-identities]])

[F13] The positive primes form an infinite subset of $\mathbb N$ by the natural embedding and Euclid's theorem; the canonical increasing-enumeration lemma supplies their bijective sequence. For a prime $p$, on $\mathbb N$ (which contains $0$) put $w_{p,j}=(1-1/p)p^{-j}$ and $\mu_p=\sum_{j\ge0}w_{p,j}\delta_j$ on the sigma-algebra of all subsets. The geometric-series formula gives $\sum_jw_{p,j}=1$; the weighted-Dirac theorem makes $\mu_p$ a measure of total mass $1$, and $\mu_p(\{j\})=w_{p,j}$. Thus each coordinate is a probability space with the required geometric law. ([[def-prime]], [[lem-nat-embeds-int]], [[thm-euclid-infinitude-of-primes]], [[lem-infinite-subset-of-natural-numbers-has-canonical-increasing-enumeration]], [[def-natural-numbers]], [[thm-geometric-series]], [[def-power-set]], [[def-sigma-algebra]], [[def-dirac-measure]], [[prop-dirac-measure-is-a-probability-measure]], [[def-probability-measure]], [[thm-nonnegative-weighted-sums-of-measures]])

[F14] Under the measure of the countable product of probability spaces, the coordinate maps have the specified coordinate laws and form an independent family. ([[cor-coordinate-random-elements-on-a-countable-product-are-independent]])

[F15] Measurability means that preimages of measurable sets are measurable; every function from a full-power-set space is measurable, and finite sums of measurable real functions are measurable. ([[def-measurable-function-between-measurable-spaces]], [[prop-closure-properties-of-measurable-functions-used-by-the-integral]])

[F16] For a sequence of real measurable functions, its convergence set is measurable and its pointwise limit is measurable wherever the sequence converges, after assigning a value off the convergence set. ([[thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable]])

[F17] The coordinate bijection $\Phi:\mathbb C\to\mathbb R^2$ is a homeomorphism; rational open boxes generate the Borel sigma-algebra of $\mathbb R^2$. Therefore a complex-valued function is Borel measurable when the inverse images of those coordinate boxes are measurable. ([[thm-complex-coordinate-isometry-and-topology-transport]], [[thm-rational-box-generators-of-the-borel-sigma-algebra-on-rn]], [[def-borel-sigma-algebra]])

[F18] Composing a measurable map with a Borel measurable outer function preserves measurability. ([[thm-composition-with-borel-functions-preserves-measurability]])

## Proof

**Proof technique:** finite-prime approximation, prime-power decomposition, and closed-neighborhood convergence.

1.1 Prescribe $b(p^k)=g(p)$ when $k=1$ and $|g(p)|\le1$, and $b(p^k)=0$ otherwise; using [F1], define $g^\flat(n)=\sum_{p\mid n}b(p^{v_p(n)})$ and put $g^\sharp=g-g^\flat$. Coprime integers have disjoint prime supports, so $g^\flat$ is additive; hence $g^\sharp$ is additive and $g=g^\flat+g^\sharp$ on all positive integers. [given, F1, algebra]

2.1 Enumerate the primes increasingly as $(p_n)_{n\in\mathbb N}$ by [F13] and apply [A1] to the probability spaces $(\mathbb N,\mathcal P(\mathbb N),\mu_{p_n})$. By [F14], the coordinate projections $V_{p_n}$ are measurable, independent, and satisfy $\mathbb P(V_p=j)=(1-1/p)p^{-j}$. By [F15], each map $j\mapsto g(p^j)$ and its real and imaginary parts are measurable on the full-power-set coordinate; [F18] makes their compositions with $V_p$ measurable. Finite sums give measurable real and imaginary parts for each $G_M$, and [F17] makes $G_M$ a complex random element. The small part is $Y_p^\flat=g(p)\mathbf1_{\{V_p=1\}}$ when $|g(p)|\le1$, and $0$ otherwise; its real and imaginary coordinate maps are measurable by [F15] and [F18]. Its mean is $(1-1/p)g(p)/p$ on the small primes; the mean series converges because its difference from $\sum_{|g(p)|\le1}g(p)/p$ is absolutely bounded termwise by $1/p^2$. For each real and imaginary part, the variance sum is at most $\sum_{|g(p)|\le1}|g(p)|^2/p<\infty$. By [F7], the resulting real coordinate families are independent; [F5], using their convergent mean series and summable variances, makes each uncentered real series converge almost surely. Intersecting the two probability-one events proves almost-sure convergence of $\sum_pY_p^\flat$. [given, step 1.1, A1, F5, F7, F13, F14, F15, F17, F18, algebra]

2.2 By the split in step 1.1, for $M<p\le N$ the omitted large-part summands have $|g(p)|>1$ at exponent one or exponent at least two. [F12] gives $\mathbb P(\text{some such summand is nonzero})\le\sum_{p>M}1/p^2+\sum_{p>M,\ |g(p)|>1}1/p$, which tends to zero as $M\to\infty$. [step 1.1, F1, F2, F12, algebra]

3.1 By step 1.1, the large part is $Y_p^\sharp=g^\sharp(p^{V_p})$, a measurable random element by [F15] and [F18]; hence each event $\{Y_p^\sharp\ne0\}$ is measurable. It can be nonzero only if $V_p\ge2$ or if $V_p=1$ and $|g(p)|>1$. Thus $\sum_p\mathbb P(Y_p^\sharp\ne0)\le\sum_p1/p^2+\sum_{|g(p)|>1}1/p<\infty$. The first sum converges by comparison with $\sum_{n\ge2}1/(n(n-1))$. By [F6], only finitely many large-part terms are nonzero almost surely, while step 2.1 gives almost-sure convergence of the small-part series. Hence $G_M:=\sum_{p\le M}g(p^{V_p})$ converges almost surely. Let $u_M=\operatorname{Re}G_M$ and $v_M=\operatorname{Im}G_M$; by [F16] their convergence sets are measurable, and by [F17] their intersection $A$ is exactly the complex convergence set. The preceding almost-sure convergence gives $\mathbb P(A)=1$. Define $\widetilde u_M=u_M$ on $A$ and $0$ off $A$, and define $\widetilde v_M$ similarly. For any Borel $B\subseteq\mathbb R$, $\{\widetilde u_M\in B\}$ is $(A\cap\{u_M\in B\})\cup A^c$ if $0\in B$, and $A\cap\{u_M\in B\}$ otherwise; both sets are measurable. The same formula applies to $\widetilde v_M$. These sequences converge pointwise everywhere, so [F16] makes their limits $u,v$ measurable. By [F17] $G:=u+iv$ is a complex random element, and on $A$ it equals the series $\sum_pg(p^{V_p})$. [given, step 1.1, step 2.1, F6, F15, F16, F17, F18, algebra]

3.2 Fix $M$. For any fixed tuple $(k_p)_{p\le M}$ of nonnegative integers, the event $v_p(U_N)=k_p$ for all $p\le M$ is a union of residue classes modulo $D=\prod_{p\le M}p^{k_p+1}$. The Chinese remainder theorem gives exactly $\prod_{p\le M}(p-1)$ such classes, so its probability tends, as $N\to\infty$, to $\prod_{p\le M}(1-1/p)p^{-k_p}$, the joint probability of $(V_p)_{p\le M}=(k_p)_{p\le M}$. The valuation tails obey $\mathbb P(\exists p\le M:v_p(U_N)\ge K)\le\sum_{p\le M}p^{-K}$, with the same bound for the limiting vector. For each bounded continuous test function on $\mathbb C$, first restrict to the finitely many patterns with all $k_p<K$, pass to the limit by the residue-class count, and then let $K\to\infty$. This proves $G_{N,M}:=\sum_{p\le M}g(p^{v_p(U_N)})\Rightarrow G_M$. [given, step 2.1, A1, F2, algebra]

3.3 For the remaining small-prime terms, put $a_p=g(p)$ when $|g(p)|\le1$ and $a_p=0$ otherwise. Their tail is $\sum_{M<p\le N}a_p\mathbf1_{p\mid U_N}-\sum_{M<p\le N}a_p\mathbf1_{p^2\mid U_N}$. The second sum has expected absolute value at most $\sum_{p>M}p^{-2}$. For the first sum, its mean is $\sum_{M<p\le N}a_p/p+O(\pi(N)/N)$, whose limsup tends to zero with $M$ by the assumed convergence and [F4]. Its centered second moment is at most $C\sum_{p>M}|a_p|^2/p$ by [F3], which also tends to zero. Pointwise, $\mathbf1_{|Z|>\varepsilon}\le |Z|^2/\varepsilon^2$ and $\mathbf1_{|D|>\varepsilon}\le |D|/\varepsilon$; integrate these inequalities and use [F12] with step 2.2 to combine the centered-sum, prime-square, and large-part tails. This proves $\lim_{M\to\infty}\limsup_{N\to\infty}\mathbb P(|g(U_N)-G_{N,M}|>\varepsilon)=0$ for every $\varepsilon>0$. [given, step 1.1, step 2.2, F3, F4, F12, algebra]

4.1 Step 3.1 gives $G_M\to G$ almost surely, with $G_M$ and $G$ measurable. For each bounded continuous $\phi:\mathbb C\to\mathbb R$, [F18] makes $\phi(G_M)$ measurable, and [F11] yields $\mathbb E\phi(G_M)\to\mathbb E\phi(G)$, so $G_M\Rightarrow G$. Fix a nonempty closed set $F\subseteq\mathbb C$ and $\varepsilon>0$, and let $F^{[\varepsilon]}=\{z:d(z,F)\le\varepsilon\}$; it is closed by [F9]. If $g(U_N)\in F$ and $|g(U_N)-G_{N,M}|\le\varepsilon$, then $G_{N,M}\in F^{[\varepsilon]}$. Applying [F8] first to step 3.2 and then to $G_M\Rightarrow G$ gives $\limsup_{N\to\infty}\mathbb P(g(U_N)\in F)\le\mathbb P(G\in F^{[\varepsilon]})+\limsup_{N\to\infty}\mathbb P(|g(U_N)-G_{N,M}|>\varepsilon)$ after letting $M\to\infty$ and using step 3.3. The empty closed set is immediate. As $\varepsilon\downarrow0$, the closed neighborhoods decrease to $F$; [F10] makes their probabilities decrease to $\mathbb P(G\in F)$. The closed-set criterion [F8] proves $g(U_N)\Rightarrow G$. [given, F8, F9, F10, F11, F18, step 3.1, step 3.2, step 3.3] ∎

## Proof references

[[def-additive-arithmetic-function]]

[[thm-fundamental-theorem-of-arithmetic]]

[[def-uniform-finite-probability-space]]

[[thm-chinese-remainder-theorem]]

[[thm-countable-product-of-probability-spaces]]

[[cor-kolmogorov-two-series-sufficiency]]

[[cor-first-borel-cantelli-lemma-for-events]]

[[lem-measurable-functions-preserve-independence]]

[[thm-portmanteau-theorem]]

[[thm-continuity-from-above-for-measures]]

[[lem-distance-to-set-is-lipschitz]]

[[thm-dominated-convergence]]

[[lem-probability-measure-basic-identities]]

[[def-measurable-function-between-measurable-spaces]]

[[def-borel-sigma-algebra]]

[[prop-closure-properties-of-measurable-functions-used-by-the-integral]]

[[thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable]]

[[thm-complex-coordinate-isometry-and-topology-transport]]

[[thm-rational-box-generators-of-the-borel-sigma-algebra-on-rn]]

[[thm-composition-with-borel-functions-preserves-measurability]]
