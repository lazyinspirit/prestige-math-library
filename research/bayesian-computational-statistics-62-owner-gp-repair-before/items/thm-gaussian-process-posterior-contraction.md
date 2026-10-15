---
id: thm-gaussian-process-posterior-contraction
kind: theorem
title: "Gaussian-process posterior contraction in density and regression models"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 9
deps:
  - lem-tight-borel-gaussian-law-has-separable-support
  - lem-log-gaussian-density-supnorm-controls-local-likelihood-distances
  - lem-binary-regression-l2-controls-local-likelihood-distances
  - lem-fixed-design-gaussian-regression-controls-local-likelihood-distances
  - lem-gaussian-linear-and-quadratic-statistic-tail
  - lem-independent-observation-posterior-denominator-lower-bound
  - lem-independent-posterior-splitting-from-tests-and-sieve-tail
  - lem-fixed-design-gaussian-regression-exponential-tests
  - lem-nondegenerate-gaussian-small-ball-controls-log-radius
  - lem-iid-posterior-denominator-lower-bound-from-kl-mass
  - lem-iid-sieve-entropy-produces-exponential-tests
  - def-parameter-measurable-statistical-model-as-markov-kernel
  - def-dominated-statistical-experiment
  - def-likelihood-density
  - def-measure-with-density
  - def-probability-measure
  - def-independent-random-elements
  - def-standard-normal-and-normal-laws
  - def-kullback-leibler-divergence
  - def-axiom-of-choice
  - def-countable-choice
  - def-hahn-banach-extension-principle-relative
  - def-borel-gaussian-random-element-on-a-separable-banach-space
  - def-banach-gaussian-covariance-operator-and-rkhs
  - def-gaussian-prior-concentration-function
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-support-of-banach-gaussian-is-closure-of-rkhs
  - thm-gaussian-concentration-sieve-bounds
  - thm-borell-sudakov-tsirelson-expansion-for-banach-gaussian-law
  - thm-finite-dimensional-gaussian-isoperimetric-expansion
proof_strategy: direct
axiom_use: "AC and countable choice are inherited from the Gaussian support/concentration chain; AC is also used by the directional-KL and normal-law suppliers. The separate relative Hahn–Banach principle is an explicit premise for the separable-support reduction and is not silently inferred from AC."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "A. W. van der Vaart and J. H. van Zanten, Rates of contraction of posterior distributions based on Gaussian process priors, §§2–3"
      url: "https://arxiv.org/pdf/0806.3024"
    - title: "Bas J. K. Kleijn, Aad W. van der Vaart and Harry van Zanten, Lectures on Nonparametric Bayesian Statistics, Chapters 9 and 12"
      url: "https://staff.fnwi.uva.nl/b.j.k.kleijn/NPBayes-LecNotes-2015.pdf"
    - title: "Subhashis Ghosal and Aad W. van der Vaart, Convergence rates of posterior distributions for noniid observations, §§2–3"
      url: "https://arxiv.org/pdf/0708.0491"
---

## Statement

Let $\epsilon_n>0$ satisfy $\epsilon_n\to0$ and $n\epsilon_n^2\to\infty$. For the centered tight Gaussian prior in each branch, let $\mu$ be its law and let $B$ be a separable closed Banach carrier with the norm inherited from that branch's stated function space, as supplied by [[lem-tight-borel-gaussian-law-has-separable-support]]. Write $\mathbb H$ for the covariance RKHS of $\mu$ on $B$, and define
$$\phi_{w_0}(\epsilon)=\inf_{\substack{h\in\mathbb H\\\|h-w_0\|_B<\epsilon}}\left\{\|h\|_{\mathbb H}^2-\log\mu(\epsilon B^\circ)\right\},\qquad \epsilon B^\circ=\{u\in B:\|u\|_B<\epsilon\}.$$
Suppose $\phi_{w_0}(\epsilon_n)\le n\epsilon_n^2$.

In each branch, parameter-to-data densities are jointly measurable and the posterior $\Pi_n$ is the data-indexed normalization of the prior times the likelihood on fibers with finite positive evidence.

1. **Log-Gaussian density estimation.** On a measurable space $(\mathsf X,\mathcal A)$ with sigma-finite measure $\nu$, let $W$ be a tight centered Borel Gaussian random element in $\ell^\infty(\mathsf X)$, and let $w_0$ belong to its support. Assume path evaluation $(w,x)\mapsto w(x)$ is jointly measurable, $Z_w=\int e^w\,d\nu\in(0,\infty)$ for prior-almost every $w$ and for $w_0$, and set $p_w=e^w/Z_w$, $p_0=p_{w_0}$. For IID data $X_1,\ldots,X_n\sim P_0$, sufficiently large fixed $M$ gives
$$E_0\Pi_n\{w:h(P_w,P_0)>M\epsilon_n\mid X^n\}\longrightarrow0.$$
When $0<\nu(\mathsf X)<\infty$, bounded paths imply the required normalizers are finite and positive.

2. **Binary regression.** Let $(X_i,Y_i)$ be IID, with $X_i\sim G$, $Y_i\in\{0,1\}$ and $P_0(Y=1\mid X=x)=f_0(x)=\Psi(w_0(x))\in(0,1)$. Assume $\Psi:\mathbb R\to(0,1)$ is differentiable, $\sup|\Psi'|<\infty$, and $\sup|\Psi'/[\Psi(1-\Psi)]|<\infty$. Suppose the prior is either a tight centered Gaussian law in $L^2(G)$ with a jointly measurable evaluation version representing its $L^2(G)$ element almost everywhere, or a tight centered Gaussian law in $\ell^\infty(\mathsf X)$ with jointly measurable evaluation and bounded $w_0$; in either case $w_0$ belongs to the prior support. Then for sufficiently large fixed $M$,
$$E_0\Pi_n\{\|\Psi(w)-f_0\|_{L^2(G)}>M\epsilon_n\mid (X_i,Y_i)_{i=1}^n\}\longrightarrow0.$$

3. **Fixed-design Gaussian regression.** For deterministic $x_1,\ldots,x_n$, assume independent $Y_i\sim N(w_0(x_i),\sigma_0^2)$, a centered tight Borel Gaussian prior $W$ in $\ell^\infty(\mathsf X)$ with $w_0$ in support, and an independent prior on the standard deviation $\sigma$ supported on a fixed $[a,b]\subset(0,\infty)$ containing $\sigma_0$, with Lebesgue density bounded below by a positive constant. Then for sufficiently large fixed $M$,
$$E_0\Pi_n\{\|w-w_0\|_n+|\sigma-\sigma_0|>M\epsilon_n\mid Y_{1:n}\}\longrightarrow0,$$
where $\|w-w_0\|_n^2=n^{-1}\sum_i(w(x_i)-w_0(x_i))^2$.

The concentration-function hypothesis is interpreted on a separable Banach space carrying the prior. For a tight Gaussian law initially given in nonseparable $\ell^\infty(\mathsf X)$, the separable-support reduction is [[lem-tight-borel-gaussian-law-has-separable-support]]; the norm and prior law are restricted to that support space.

## Facts & Assumptions

**Given:** The three model contracts above, a common rate sequence satisfying $\epsilon_n\to0$ and $n\epsilon_n^2\to\infty$, and the displayed Gaussian concentration-function inequality.

[F8] [[thm-support-of-banach-gaussian-is-closure-of-rkhs]]: under AC and countable choice, a centered tight Borel Gaussian law on a real separable Banach space has support equal to the Banach-norm closure of its covariance RKHS.

[F9] [[def-gaussian-prior-concentration-function]]: the current definition uses $\inf_{\|h-w_0\|_B<\epsilon}\{\|h\|_{\mathbb H}^2-\log\mu(\epsilon B^\circ)\}$ for $w_0\in\overline{\mathbb H}^{\,B}$.

[F10] [[thm-gaussian-concentration-sieve-bounds]]: for $n\ge1$, $\epsilon>0$, $C>1$, $e^{-Cn\epsilon^2}<1/2$, $w_0\in\overline{\mathbb H}^{\,B}$ and its stated concentration function at most $n\epsilon^2$, a measurable sieve has $\log N(3\epsilon,B_n,\|\cdot\|_B)\le6Cn\epsilon^2$, tail at most $e^{-Cn\epsilon^2}$, and local mass at least $e^{-n\epsilon^2}$ in the $2\epsilon$-ball about $w_0$. The sieve proof's displayed concentration formula uses a half-squared RKHS penalty, whereas [F9] defines the full-squared penalty here; because each half-penalty is no greater than the corresponding full penalty, [F9]'s premise implies the sieve proof's premise. Its proof chain still depends on the incomplete [[thm-finite-dimensional-gaussian-isoperimetric-expansion]] proof.

[F11] [[def-borel-gaussian-random-element-on-a-separable-banach-space]]: a centered Borel Gaussian random element is a Borel-measurable map into a real separable Banach space whose continuous linear images are centered normal.

[F12] [[def-banach-gaussian-covariance-operator-and-rkhs]]: under AC, the covariance RKHS is the completed covariance-form quotient embedded as a Hilbert space of shifts in the Banach space.

[A2] The fixed-design proof also needs $\Pi_\sigma(|\sigma-\sigma_0|<\epsilon_n)\ge e^{-C_\sigma n\epsilon_n^2}$ for some fixed $C_\sigma$, or another verified joint local-mass argument. A density bounded below gives only a constant times $\epsilon_n$. If $W$ has a nonzero Gaussian direction, [[lem-nondegenerate-gaussian-small-ball-controls-log-radius]] implies $\log(1/\epsilon_n)=O(n\epsilon_n^2)$ from the concentration condition, which supplies this mass bound. The stated assumptions also allow $W=0$ and rates for which that implication is unavailable; this remaining fixed-scale case is unresolved.

[A3] Assume AC and countable choice for the Gaussian concentration-sieve interface [[def-axiom-of-choice]], [[def-countable-choice]]. The separate Hahn–Banach extension principle used in [F5] is not inferred from these assumptions.

[A4] Assume the separate relative Hahn–Banach extension principle [[def-hahn-banach-extension-principle-relative]] for the separable-support reduction [F5]; it is not silently deduced from AC.

[F1] [[lem-iid-posterior-denominator-lower-bound-from-kl-mass]]: for a jointly measurable dominated IID model, local prior mass at least $e^{-Cn\delta_n^2}$ on a set with directional KL and log-square at most $\delta_n^2$ gives a denominator lower bound $e^{-(C+2)n\delta_n^2}$ except with probability at most $(n\delta_n^2)^{-1}$.

[F2] [[lem-iid-sieve-entropy-produces-exponential-tests]]: same-metric packing entropy at radius $\delta_n$ bounded by $n\delta_n^2$ gives tests with exponentially small null and uniform alternative errors outside a sufficiently large multiple of $\delta_n$; for density $L^2$ the densities must be uniformly bounded.

[F3] [[lem-log-gaussian-density-supnorm-controls-local-likelihood-distances]], [[lem-binary-regression-l2-controls-local-likelihood-distances]], and [[lem-fixed-design-gaussian-regression-controls-local-likelihood-distances]] give the local Hellinger, density-$L^2$, directional KL and log-square comparisons used on this page.

[F4] [[lem-independent-observation-posterior-denominator-lower-bound]] and [[lem-independent-posterior-splitting-from-tests-and-sieve-tail]] give the non-IID denominator bound and the tested-numerator/sieve-tail split used in the IID and fixed-design arguments.

[F5] [[lem-tight-borel-gaussian-law-has-separable-support]]: a tight Borel Gaussian law in a Banach space is carried by a separable closed subspace without changing its support or inherited norm.

[F6] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]: joint measurability and Tonelli make the log-Gaussian normalizer a measurable function of the path.

[F7] [[lem-nondegenerate-gaussian-small-ball-controls-log-radius]]: if the prior has a nonzero Gaussian direction, $\phi_{w_0}(\epsilon)\le n\epsilon^2$ implies $\log(1/\epsilon)\le n\epsilon^2+C$ for a fixed constant.

## Proof

**Given:** The hypotheses of the Statement.


1.1 By [F11], the prior is a Borel Gaussian random element and [F12] supplies its covariance RKHS. If it is initially realized in nonseparable $\ell^\infty(\mathsf X)$ or $L^2(G)$, apply [F5] under AC and the separate Hahn–Banach premise [A4] to obtain a separable closed Banach support space $E$ carrying the law; the support point $w_0$ lies in $E$, and the inherited norm and prior probabilities are unchanged. [A3, A4, F5, F11, F12, given]

1.2 In log-Gaussian density estimation, joint measurability of evaluation and Tonelli [F6] make $w\mapsto Z_w$ measurable; on the stated positive-finite-normalizer set, $(w,x)\mapsto e^{w(x)}/Z_w$ is a jointly measurable density family. The local $2\epsilon_n$ supremum ball has directional KL at most $2e^{4\epsilon_n}\epsilon_n^2$ and log-square at most $16\epsilon_n^2$ by [F3]; choose a fixed $k$ with $k^2\ge16$ and apply [F1] at $\delta_n=k\epsilon_n$. Its prior mass is at least $e^{-n\epsilon_n^2}$, so the denominator is at least $e^{-A n\epsilon_n^2}$ with $A=1+2k^2$, except with probability tending to zero. [F1, F3, F6, given, choose]

1.3 In binary regression, the prior-ball comparison [F3] places the $2\epsilon_n$-ball in a directional KL/log-square set of radius $k^2\epsilon_n^2$ for a fixed sufficiently large $k$. Its prior mass is at least $e^{-n\epsilon_n^2}$ by [F10], so [F1] gives a denominator lower bound $e^{-A n\epsilon_n^2}$ with fixed $A=1+2k^2$ and probability tending to one. The joint Bernoulli densities are bounded by one relative to $G\otimes\#$, as required by the $d_2$ branch of [F2]. [F1, F2, F3, F10, given, choose]

1.4 In fixed-design regression, for $\|w-w_0\|_\infty<2\epsilon_n$ and $|\sigma-\sigma_0|<\epsilon_n$, [F3] bounds each average directional KL and log-square by $K\epsilon_n^2$ for a fixed $K\ge1$. Independence of the two prior components and the scale-density lower bound give joint local prior mass at least $c\epsilon_n e^{-n\epsilon_n^2}$. If the extra bound in [A2] holds, this is at least $e^{-C_0n\epsilon_n^2}$ for some fixed $C_0$ and all sufficiently large $n$, so [F4] supplies the non-IID denominator lower bound. If a nonzero Gaussian direction is known, [F7] gives $\log(1/\epsilon_n)\le n\epsilon_n^2+C$ and therefore verifies the scale-mass bound. [A2, F3, F4, F7, given, choose]

2.1 In $E$, $w_0\in\operatorname{supp}(\mu)$ implies $w_0\in\overline{\mathbb H}^{\,E}$ by [F8] under [A3]. By [F9] the displayed condition uses the full squared RKHS penalty. The current sieve proof uses one half of that penalty; for every feasible $h$, $\|h\|_{\mathbb H}^2/2\le\|h\|_{\mathbb H}^2$, so its concentration quantity is no larger and the displayed upper bound implies the sieve premise. Choose $C>1$ larger than the denominator exponents required below; eventually $e^{-Cn\epsilon_n^2}<1/2$. The stated interface [F10] supplies measurable sieves $B_n\subset E$ with the entropy, prior-tail, and local prior-mass bounds. Its current proof chain is not complete because the finite-dimensional expansion proof is absent. [A3, F8, F9, F10, step 1.1, given, choose]

3.1 Let $B_n'=B_n\cap\{w:0<Z_w<\infty\}$, a measurable sieve with the same prior-tail bound as $B_n$ by [F6] and [F10]. From a radius-$3\epsilon_n$ cover of $B_n$, choose one valid point from each ball meeting $B_n'$ by finite recursion; this uses no more centers and gives a radius-$6\epsilon_n$ cover of $B_n'$. For large $n$, the pairwise version of [F3] sends it to a Hellinger cover of radius at most $7\epsilon_n$. Any $14\epsilon_n$-separated density set has at most one point in each cover element, so its packing number is at most $e^{6Cn\epsilon_n^2}$. Choose $r_n=\max\{14,\sqrt{6C}\}\epsilon_n$; then $\log D(r_n,\{p_w:w\in B_n'\},h)\le nr_n^2$. Choose $C>A$ in step 2.1. By [F2], for any prescribed $T>A$, a sufficiently large fixed multiple of $r_n$ has null and uniform sieve type-II errors at most $e^{-Tn\epsilon_n^2}$. [F2, F3, F6, F10, step 2.1, step 1.2, given, choose]

3.2 The $2\epsilon_n$-ball and the sieve cover in the selected Banach norm map by [F3] to local $d_2$-distance and $d_2$-cover radius at most a fixed constant times $\epsilon_n$. Taking a fixed packing radius at least twice that cover radius and at least $\sqrt{6C}\epsilon_n$ gives $\log D(r_n,\mathcal F_n,d_2)\le nr_n^2$. The tests in [F2] and sieve tail from [F10] now satisfy the hypotheses of the split in [F4], since $C>A$ by step 2.1 and the test multiple can be chosen large. Since $d_2(q_w,q_{w_0})=\sqrt2\|\Psi(w)-f_0\|_{L^2(G)}$, the asserted binary-regression conclusion follows in probability. [F2, F3, F4, F10, step 2.1, step 1.3, choose]

3.3 The fixed-design sieve is $B_n\times[a,b]$, so its prior tail is at most $e^{-Cn\epsilon_n^2}$ by [F10]. The local $2\epsilon_n$ supremum cover of $B_n$ and [[lem-fixed-design-gaussian-regression-exponential-tests]] give, for a sufficiently large fixed $M$, null and uniform sieve type-II errors smaller than $e^{-Tn\epsilon_n^2}$ for any prescribed $T>C_0+2K^2$. The choice in step 2.1 makes $C$ larger than the denominator exponent in step 1.4; choose $M$ accordingly. [F10, step 2.1, step 1.4, given, choose]

4.1 The prior outside $B_n'$ is at most $e^{-Cn\epsilon_n^2}$: [F10] bounds the mass outside $B_n$, and the removed invalid-normalizer set has prior measure zero. Also $C>A$ by the choice in step 2.1. Applying the tested-numerator/sieve-tail split in [F4] gives convergence of posterior mass outside the selected Hellinger ball in $P_0^n$-probability. [F4, F10, step 2.1, step 1.2, step 3.1]

4.2 Under [A2], the denominator bound from step 1.4 and the sieve-tail and test bounds from step 3.3 satisfy [[lem-independent-posterior-splitting-from-tests-and-sieve-tail]], proving fixed-design posterior contraction in probability. The scale density lower bound alone does not verify [A2] when $W=0$ and $\log(1/\epsilon_n)$ is not $O(n\epsilon_n^2)$; hence the fixed-design branch in its full stated scope is not discharged by this draft. [A2, F4, step 1.4, step 3.3]

5.1 In the log-density and binary cases, and in the fixed-design case whenever step 4.2 applies, posterior tail mass is a random variable in $[0,1]$ converging to zero in probability. For every $\eta>0$, its expectation is at most $\eta+\Pr\{\text{tail mass}>\eta\}$; taking the limit superior and then letting $\eta\downarrow0$ proves convergence of the expectations. Thus the expected-posterior conclusions hold for the proved branches. [step 4.1, step 3.2, step 4.2, given, algebra] ∎

## Remarks

The current Batch-15 support/concentration page and item bodies have been inspected. Its page states the full-squared concentration convention; the current Banach expansion proof uses its countable-base fact for the countable subcover and continuity from above for decreasing sets. The sieve/expansion chain still depends on [[thm-finite-dimensional-gaussian-isoperimetric-expansion]], whose current item explicitly has no supplied proof. No acceptance or readiness is inferred from these draft bodies. The fixed-design proof also has the explicit scale-local-mass gap [A2] for the allowed degenerate Gaussian prior. This Step-1 draft does not record independent acceptance or readiness for the full statement.
