---
dependency_level: 9
id: thm-gaussian-process-posterior-contraction
kind: theorem
title: Gaussian-process posterior contraction in density and regression models
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
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
  - lem-separable-banach-has-countable-norming-family
proof_strategy: direct
axiom_use: AC and countable choice are inherited from the Gaussian support/concentration chain; AC is also used by the directional-KL and normal-law suppliers. The separate relative Hahn–Banach principle is an explicit premise for the separable-support reduction and is not silently inferred from AC.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: A. W. van der Vaart and J. H. van Zanten, Rates of contraction of posterior distributions based on Gaussian process priors, §§2–3
      url: https://arxiv.org/pdf/0806.3024
    - title: Bas J. K. Kleijn, Aad W. van der Vaart and Harry van Zanten, Lectures on Nonparametric Bayesian Statistics, Chapters 9 and 12
      url: https://staff.fnwi.uva.nl/b.j.k.kleijn/NPBayes-LecNotes-2015.pdf
    - title: Subhashis Ghosal and Aad W. van der Vaart, Convergence rates of posterior distributions for noniid observations, §§2–3
      url: https://arxiv.org/pdf/0708.0491
forward_refs:
  - cex-degenerate-gaussian-scale-prior-can-break-arbitrary-concentration-rate
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

3. **Fixed-design Gaussian regression.** For deterministic $x_1,\ldots,x_n$, assume independent $Y_i\sim N(w_0(x_i),\sigma_0^2)$, a centered tight Borel Gaussian prior $W$ in $\ell^\infty(\mathsf X)$ with $w_0$ in support, and an independent prior on the standard deviation $\sigma$ supported on a fixed $[a,b]\subset(0,\infty)$ containing $\sigma_0$, with Lebesgue density bounded below by a positive constant. Put $\rho_n=\max\{\epsilon_n,\sqrt{\log n/n}\}$ for $n\ge2$. Then for sufficiently large fixed $M$,
$$E_0\Pi_n\{\|w-w_0\|_n+|\sigma-\sigma_0|>M\rho_n\mid Y_{1:n}\}\longrightarrow0.$$
The sharper conclusion with $\epsilon_n$ in place of $\rho_n$ holds if the Gaussian law is not the point mass at zero. It also holds when $W=0$ almost surely and the scale-prior density is bounded above on a neighborhood of $\sigma_0$; this extra upper bound is needed only for that sharper degenerate-prior alternative, not for the universal $\rho_n$ conclusion. In the nondegenerate case $\rho_n=O(\epsilon_n)$, so the two formulations differ only by the fixed constant $M$. Here $\|w-w_0\|_n^2=n^{-1}\sum_i(w(x_i)-w_0(x_i))^2$.

The concentration-function hypothesis is interpreted on a separable Banach space carrying the prior. For a tight Gaussian law initially given in nonseparable $\ell^\infty(\mathsf X)$, the separable-support reduction is [[lem-tight-borel-gaussian-law-has-separable-support]]; the norm and prior law are restricted to that support space.

## Facts & Assumptions

**Given:** The three model contracts above, a common rate sequence satisfying $\epsilon_n\to0$ and $n\epsilon_n^2\to\infty$, and the displayed Gaussian concentration-function inequality.

[F8] [[thm-support-of-banach-gaussian-is-closure-of-rkhs]]: under AC and countable choice, a centered tight Borel Gaussian law on a real separable Banach space has support equal to the Banach-norm closure of its covariance RKHS.

[F9] [[def-gaussian-prior-concentration-function]]: the current definition uses $\inf_{\|h-w_0\|_B<\epsilon}\{\|h\|_{\mathbb H}^2-\log\mu(\epsilon B^\circ)\}$ for $w_0\in\overline{\mathbb H}^{\,B}$.

[F10] [[thm-gaussian-concentration-sieve-bounds]]: under AC and countable choice, the full-squared concentration hypothesis supplies measurable sieves with $\log N(3r,B_n,\|\cdot\|_B)\le6Cnr^2$, prior tail at most $e^{-Cnr^2}$, and mass at least $e^{-nr^2}$ in the $2r$-ball about the truth. Its sharp finite-dimensional expansion and Banach expansion suppliers have local proofs.

[F11] [[def-borel-gaussian-random-element-on-a-separable-banach-space]]: a centered Borel Gaussian random element is a Borel-measurable map into a real separable Banach space whose continuous linear images are centered normal.

[F12] [[def-banach-gaussian-covariance-operator-and-rkhs]]: under AC, the covariance RKHS is the completed covariance-form quotient embedded as a Hilbert space of shifts in the Banach space.

[A2] In the fixed-design branch the scale prior has density at least $c>0$ on $[a,b]$. For $r\downarrow0$, including when $\sigma_0$ is an endpoint, its $r$-neighborhood therefore has prior mass at least $cr$ once $r<b-a$. An upper density bound is assumed only in the sharper degenerate-prior alternative stated above.

[A3] Assume AC and countable choice for the Gaussian concentration-sieve interface [[def-axiom-of-choice]], [[def-countable-choice]]. The separate Hahn–Banach extension principle used in [F5] is not inferred from these assumptions.

[A4] Assume the separate relative Hahn–Banach extension principle [[def-hahn-banach-extension-principle-relative]] for the separable-support reduction [F5]; it is not silently deduced from AC.

[F1] [[lem-iid-posterior-denominator-lower-bound-from-kl-mass]]: for a jointly measurable dominated IID model, local prior mass at least $e^{-Cn\delta_n^2}$ on a set with directional KL and log-square at most $\delta_n^2$ gives a denominator lower bound $e^{-(C+2)n\delta_n^2}$ except with probability at most $(n\delta_n^2)^{-1}$.

[F2] [[lem-iid-sieve-entropy-produces-exponential-tests]]: same-metric packing entropy at radius $\delta_n$ bounded by $n\delta_n^2$ gives tests with exponentially small null and uniform alternative errors outside a sufficiently large multiple of $\delta_n$; for density $L^2$ the densities must be uniformly bounded.

[F3] [[lem-log-gaussian-density-supnorm-controls-local-likelihood-distances]], [[lem-binary-regression-l2-controls-local-likelihood-distances]], and [[lem-fixed-design-gaussian-regression-controls-local-likelihood-distances]] give the local Hellinger, density-$L^2$, directional KL and log-square comparisons used on this page.

[F4] [[lem-independent-observation-posterior-denominator-lower-bound]] and [[lem-independent-posterior-splitting-from-tests-and-sieve-tail]] give the non-IID denominator bound and the tested-numerator/sieve-tail split used in the IID and fixed-design arguments.

[F5] [[lem-tight-borel-gaussian-law-has-separable-support]]: a tight Borel Gaussian law in a Banach space is carried by a separable closed subspace without changing its support or inherited norm.

[F6] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]: joint measurability and Tonelli make the log-Gaussian normalizer a measurable function of the path.

[F7] [[lem-nondegenerate-gaussian-small-ball-controls-log-radius]]: if the prior has a nonzero Gaussian direction, $\phi_{w_0}(\epsilon)\le n\epsilon^2$ implies $\log(1/\epsilon)\le n\epsilon^2+C$ for a fixed constant.

[F13] A separable Banach space has a countable norming family under the declared Hahn–Banach and countable-choice assumptions. Thus a centered Gaussian law different from $\delta_0$ has a continuous linear functional with positive variance. [[lem-separable-banach-has-countable-norming-family]].


[F14] A supremum-norm sieve with covering entropy at radius $3r_n$ bounded by $6Cnr_n^2$ supplies fixed-design Gaussian tests outside a sufficiently large empirical-mean-plus-scale ball, with arbitrarily prescribed fixed exponential error exponent. [[lem-fixed-design-gaussian-regression-exponential-tests]].

[F15] The centered Gaussian residual-energy statistic has an exponential tail at deviations of order $R/\sqrt n$ for fixed $R$. [[lem-gaussian-linear-and-quadratic-statistic-tail]].

## Proof

**Given:** The hypotheses of the Statement and its three distinct model branches.

1.1 The separable-support reduction [F5] leaves the inherited norm, law and support point unchanged. For the first two branches use the rate $r_n=\epsilon_n$; for the universal fixed-design branch use $r_n=\rho_n$. The concentration function is nonincreasing in its radius, because its feasible RKHS approximation set grows and centered small-ball probabilities increase. Thus $\phi_{w_0}(r_n)\le\phi_{w_0}(\epsilon_n)\le n\epsilon_n^2\le nr_n^2$. Both choices satisfy $r_n\to0$ and $nr_n^2\to\infty$. By [F8], the support point lies in the RKHS closure. [A3, A4, F5, F8, F9, F11, F12, given, algebra]

1.2 Now suppose $W=0$ almost surely and its scale density $g$ is bounded above by $U<\infty$ on $|\sigma-\sigma_0|<\delta$ within $[a,b]$. The support assumption forces $w_0=0$. Put $S_n=\sum_iY_i^2$, $q=S_n/(n\sigma_0^2)$, and $L_n(\sigma)=(\sigma_0/\sigma)^n\exp[(1-\sigma_0^2/\sigma^2)S_n/(2\sigma_0^2)]$. On $E_R=\{|S_n-n\sigma_0^2|\le R\sqrt n\}$, write $z=(\sigma-\sigma_0)/\sigma_0$. Compactness of the positive scale interval and Taylor's formula give constants $c,C>0$ independent of $n,R$ with $$-Cn(\sigma-\sigma_0)^2-CR\sqrt n|\sigma-\sigma_0|\le\log L_n(\sigma)\le-cn(\sigma-\sigma_0)^2+CR\sqrt n|\sigma-\sigma_0|.$$ For verification, its deterministic part is $n[-\log(1+z)+(1-(1+z)^{-2})/2]$, negative away from zero, with second derivative $-2$ at zero; the remaining term is $(S_n-n\sigma_0^2)(1-(1+z)^{-2})/(2\sigma_0^2)$, bounded by $CR\sqrt n|z|$. The residual-energy tail in [F15] with zero mean shift gives $\limsup_nP_0(E_R^c)\le2e^{-c_0R^2}$ for fixed $R$. [F3, F15, given, algebra]

2.1 In log-Gaussian density estimation, evaluation measurability and Tonelli [F6] make $w\mapsto Z_w$ measurable. On its full-prior positive-finite set, $(w,x)\mapsto e^{w(x)}/Z_w$ is a jointly measurable density family. The $2r_n$ supremum ball has directional KL at most $2e^{4r_n}r_n^2$ and log-square at most $16r_n^2$ by [F3]. Choose a fixed sufficiently large $k$. Its prior mass is at least $e^{-nr_n^2}$ by [F10], so [F1] at radius $kr_n$ gives a denominator at least $e^{-A nr_n^2}$ for fixed $A=1+2k^2$ except with probability tending to zero. [F1, F3, F6, F10, step 1.1, given, choose]

2.2 In binary regression, [F3] places the $2r_n$ prior ball in a directional KL/log-square set of radius $k^2r_n^2$ for a fixed sufficiently large $k$. Its mass is at least $e^{-nr_n^2}$ by [F10], so [F1] gives the same type of denominator bound. The joint Bernoulli densities relative to $G\otimes\#$ are bounded by one, as required for the density-$L^2$ tests in [F2]. [F1, F2, F3, F10, step 1.1, given, choose]

2.3 For the universal fixed-design branch take $r_n=\rho_n$. On $\|w-w_0\|_\infty<2r_n$ and $|\sigma-\sigma_0|<r_n$, [F3] bounds average directional KL and log-square by $Kr_n^2$ for fixed $K$. Independence and [A2], together with [F10], give joint local prior mass at least $cr_ne^{-nr_n^2}$. Since $r_n\ge\sqrt{\log n/n}$, eventually $\log(1/r_n)\le\tfrac12\log n\le\tfrac12nr_n^2$; hence this mass is at least $e^{-C_0nr_n^2}$ for fixed $C_0$. The independent-observation denominator lemma in [F4] applies. [A2, F3, F4, F10, step 1.1, given, algebra]

2.4 For each branch choose $C>1$ larger than its denominator exponent; eventually $e^{-Cnr_n^2}<1/2$. Apply the prior sieve theorem [F10] using step 1.1 to get measurable $B_n$ with entropy at radius $3r_n$ at most $6Cnr_n^2$ and tail at most $e^{-Cnr_n^2}$. The same theorem supplies the local prior mass used in steps 2.1, 2.2, 2.3. [A3, F8, F9, F10, step 1.1, given, choose]

2.5 On $E_R$ integrate the likelihood over $|\sigma-\sigma_0|\le1/\sqrt n$ within $[a,b]$. This interval has length at least $1/\sqrt n$ for large $n$, even at an endpoint; [A2] and step 1.2 bound its integral below by $c_R/\sqrt n$ for some $c_R>0$. On the local neighborhood where $g\le U$, substitute $u=\sqrt n(\sigma-\sigma_0)$ in the numerator outside $M\epsilon_n$. Dividing by that lower bound gives at most $C_R\int_{|u|>M\sqrt n\epsilon_n}e^{-cu^2+CR|u|}du\to0$, since $n\epsilon_n^2\to\infty$. Outside the local neighborhood, step 1.2 bounds $L_n$ by $e^{-c'n}$ for large $n$, whose integral against the entire probability prior is at most $e^{-c'n}$; after dividing by the denominator this also tends to zero. First let $n\to\infty$ and then $R\to\infty$. This proves the sharper degenerate-prior contraction in probability for every fixed $M>0$. [A2, step 1.2, given, algebra]

3.1 In the density branch intersect $B_n$ with the measurable positive-finite-normalizer set, changing its prior tail by zero. From a radius-$3r_n$ cover, select a valid center for every cover ball meeting that intersection; finite selection doubles the radius to $6r_n$ without increasing the number. The pairwise norm comparison [F3] sends this to a Hellinger cover of radius at most $7r_n$ for large $n$. Thus any $14r_n$-separated set has size at most $e^{6Cnr_n^2}$. Taking packing radius at least $\max\{14,\sqrt{6C}\}r_n$, [F2] gives tests with null and uniform sieve alternative errors at most $e^{-Tnr_n^2}$ for any fixed desired $T>A$, by increasing the alternative multiple. The denominator and sieve tail now satisfy the posterior split in [F4], proving contraction in probability. [F2, F3, F4, F6, F10, step 2.1, step 2.4, given, choose]

3.2 In binary regression the norm-ball and sieve cover map by [F3] to density-$L^2$ balls and covers of constant times $r_n$. Taking packing radius at least twice the cover radius and at least $\sqrt{6C}r_n$ gives packing entropy at most its squared radius times $n$. By [F2] and [F4], the tests, denominator and sieve tail prove contraction in probability. Since the joint Bernoulli densities satisfy $d_2(q_w,q_{w_0})=\sqrt2\|\Psi(w)-f_0\|_{L^2(G)}$, this is the stated binary distance. [F2, F3, F4, F10, step 2.2, step 2.4, choose, algebra]

3.3 In fixed-design regression take the product sieve $B_n\times[a,b]$. Its prior tail is at most $e^{-Cnr_n^2}$, and its function component has the radius-$3r_n$ cover from step 2.4. The local fixed-design testing lemma [F14] gives tests outside $\|w-w_0\|_n+|\sigma-\sigma_0|>Mr_n$ with errors at most $e^{-Tnr_n^2}$ for any fixed $T$ by choosing fixed $M$ large. Choose $T$ and $C$ above the denominator exponent in step 2.3. The posterior split [F4] proves the universal $\rho_n$ contraction in probability. [F4, F10, F14, step 2.3, step 2.4, given, choose]

4.1 If the Gaussian law is not $\delta_0$, [F13] supplies a continuous linear functional with nonzero Gaussian variance. Indeed, otherwise every member of a countable norming family would vanish almost surely, forcing $\|W\|=0$ almost surely. By [F7] there is a fixed constant $D$ such that $\log(1/\epsilon_n)\le n\epsilon_n^2+D$. Put $t_n=n\epsilon_n^2\to\infty$; then $\log n=\log t_n+2\log(1/\epsilon_n)\le3t_n+2D$ eventually, since $\log t_n\le t_n$. Consequently $\rho_n\le C_1\epsilon_n$ for fixed $C_1$. The universal conclusion in step 3.3 therefore proves the sharper $\epsilon_n$ conclusion after enlarging $M$ by $C_1$. [A3, A4, F7, F13, step 3.3, given, algebra]

5.1 In each proved branch the posterior tail is a random variable $T_n\in[0,1]$ converging to zero in probability. For $\eta>0$, $ET_n\le\eta+P(T_n>\eta)$; first take the limit superior and then $\eta\downarrow0$. Thus all asserted expectation limits follow. The universal fixed-design rate requires no upper bound on the scale density; the sharper degenerate alternative uses only the explicitly local upper bound. [step 3.1, step 3.2, step 3.3, step 4.1, step 2.5, given, algebra] ∎

## Remarks

A scale density bounded below supplies interval mass of order its radius, but the Gaussian concentration condition does not bound the logarithm of that radius when $W=0$. An unrestricted scale density can have spikes that make the originally proposed arbitrary $\epsilon_n$ rate false; [[cex-degenerate-gaussian-scale-prior-can-break-arbitrary-concentration-rate]] gives an explicit counterexample. The universal $\rho_n$ rate retains every allowed prior. A nonzero Gaussian direction or a local upper scale-density bound in the degenerate case supplies the sharper alternative by separate proved arguments.
