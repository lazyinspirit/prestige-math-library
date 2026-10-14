---
id: lem-finite-priors-approximate-gaussian-shift-bayes-risk
kind: lemma
title: Finite priors approximate Gaussian-shift Bayes values
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 5
deps:
  - def-bayes-and-minimax-risk
  - def-measure-kernel-and-probability-kernel
  - def-multivariate-normal-law
  - def-standard-normal-and-normal-laws
  - thm-independent-random-elements-have-product-joint-law
  - thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - def-total-variation-distance-for-probability-laws
  - thm-dominated-convergence
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-heine-borel-rn
  - thm-continuity-from-below-for-measures
  - def-euclidean-inner-product
  - thm-measurability-of-integration-against-a-kernel
  - lem-definite-quadratic-forms-have-a-uniform-sphere-bound
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "A. W. van der Vaart, Semiparametric Statistics, Theorem 4.14 and complete proof, pp. 46–48"
      url: https://sites.stat.washington.edu/jaw/COURSES/EPWG/stflour.pdf
    - title: "John Duchi, A few notes on contiguity, asymptotics, and local asymptotic normality, Theorem 3 and proof, pp. 17–18; local finite-prior proof supplied here"
      url: https://web.stanford.edu/class/stats300b/Notes/contiguity-and-asymptotics.pdf
---

## Statement

Assume AC. Let $Q_h=N_d(h,S)$ with $S\succ0$ and let $g:\mathbb R^d\to[0,M]$ have Lipschitz constant $B<\infty$. For every Borel probability prior $\pi$ on $\mathbb R^d$ and $\epsilon>0$, there is a finite-support prior $\pi_f$ whose Bayes value for loss $g(a-h)$ differs from that of $\pi$ by less than $\epsilon$. The comparison is uniform over all measurable randomized rules. In particular this applies to every diffuse Gaussian prior; no posterior selector assumption is needed.

## Facts & Assumptions

**Given:** AC, the Gaussian shift, bounded Lipschitz loss, prior and accuracy.

[F1] [[def-multivariate-normal-law]]: For positive finite dimension,
$N_d(h,S)$ is realized as $h+S^{1/2}G$ with independent standard-normal
coordinates. For $S\succ0$, the square root is invertible.

[F2] [[thm-dominated-convergence]] passes pointwise limits under an integrable envelope through an integral.

[F3] [[def-bayes-and-minimax-risk]] defines the prior risk $r_\pi(\delta)$
of a rule, and [[def-measure-kernel-and-probability-kernel]] defines
randomized rules. Here the Bayes value means $\inf_\delta r_\pi(\delta)$ over
those rules; this infimum is the local value under comparison, not a separate
definition supplied by the linked item.

[F4] [[def-total-variation-distance-for-probability-laws]] and [[thm-tonelli-theorem-for-sigma-finite-product-spaces]] give the bound $|E_Pf-E_Qf|\le M\|P-Q\|_{\rm TV}$ for $0\le f\le M$. The event-supremum distance satisfies the triangle inequality by the triangle inequality for each event difference.

[F5] [[thm-heine-borel-rn]] gives compactness of closed bounded parameter balls.

[F6] [[thm-continuity-from-below-for-measures]]: If $B_r\uparrow\mathbb R^d$,
then $\pi(B_r)\uparrow1$.

[F7] [[def-euclidean-inner-product]]: $\|h-h'\|_2$ is the Euclidean distance
used for the ball cover and Lipschitz bound.

[F8] [[thm-measurability-of-integration-against-a-kernel]]: Integrating a
jointly measurable nonnegative function against a probability kernel gives a
measurable function of the parameter.

[F9] [[lem-definite-quadratic-forms-have-a-uniform-sphere-bound]]: A positive
definite quadratic form on $\mathbb R^d$ has a positive lower bound on the
Euclidean unit sphere.

[A1] [[def-axiom-of-choice]] is retained for the Gaussian construction.

[F10] [[def-standard-normal-and-normal-laws]],
[[thm-independent-random-elements-have-product-joint-law]], and
[[thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets]]:
Standard-normal coordinates have scalar density
$\phi(t)=(2\pi)^{-1/2}e^{-t^2/2}$ and product joint law; product Lebesgue
measure agrees with Euclidean Lebesgue measure on Borel sets. Tonelli [F4]
therefore permits repeated integration of their product density.

[F11] [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]:
Under countable choice, a $C^1$ diffeomorphism transforms a nonnegative
Lebesgue integral with the absolute Jacobian determinant. AC supplies
countable choice here and in [F10].

## Proof

1.1 If dimension zero is admitted with the singleton empty-tuple Gaussian convention, there is only one parameter, observation and action. Every prior is the point mass at that parameter and is already finitely supported; every rule has risk $g(0)$. Taking $\pi_f=\pi$ gives zero discrepancy. No positive-dimension density, sphere or compactness theorem is needed. Henceforth let $d\ge1$. [given, construct, algebra]

2.1 Write $A=S^{1/2}$. By [F1] and [F10], $Q_h$ is the law of $h+AG$, and repeated scalar integration gives $G$ density $(2\pi)^{-d/2}e^{-\|z\|_2^2/2}$. Applying [F11] to $z\mapsto h+Az$ gives the density $q_h(y)=(2\pi)^{-d/2}|\det A|^{-1}\exp[-(y-h)^TS^{-1}(y-h)/2]$. The map $h\mapsto Q_h$ is continuous in total variation: when $h_j\to h$, these densities converge pointwise. The matrix $S^{-1}$ is positive definite because $x^TS^{-1}x=(S^{-1}x)^TS(S^{-1}x)>0$ for $x\ne0$. By [F9], $y^TS^{-1}y\ge c\|y\|_2^2$ for some $c>0$. On a fixed bounded set of shifts, the density formula and $\|y-h\|_2^2\ge\|y\|_2^2/2-\|h\|_2^2$ bound all these densities by $C\exp(-c'\|y\|_2^2)$ for constants $C,c'>0$. This envelope is integrable by repeated scalar Gaussian integration [F4, F10, F11], so [F2] gives $L^1$ convergence; for every event, its probability difference is at most that $L^1$ distance. On a compact ball this continuity is uniform: otherwise there are $h_j,h'_j$ in the ball with $\|h_j-h'_j\|_2\to0$ but TV distances bounded below. Compactness gives a subsequence with both converging to the same h; pointwise continuity and the event-supremum triangle inequality from [F4] contradict that lower bound. [F1, F2, F4, F5, F7, F9, F10, F11, A1, step 1.1, given, algebra]

3.1 For a randomized rule $\delta_y(da)$, write $R_\delta(h)=\int\int g(a-h)\delta_y(da)Q_h(dy)$. Change the loss argument first and the sampling law second. [F4] yields $|R_\delta(h)-R_\delta(h')|\le B\|h-h'\|_2+M\|Q_h-Q_{h'}\|_{\rm TV}$, independently of the rule. Each risk is between zero and $M$. The inner kernel integral is jointly measurable in $(h,y)$ by [F8]; multiplying by the jointly measurable Gaussian density and integrating in y makes $R_\delta(h)$ measurable. [F1, F3, F4, F8, step 2.1, algebra]

4.1 The balls $B_r=\{h:\|h\|_2\le r\}$ increase to $\mathbb R^d$, so [F6] lets us choose a closed ball with discarded prior mass less than $\tau$. Cover this compact ball by open balls of radius $\eta/2$; [F5] gives a finite subcover. Intersect the first ball with the closed ball, then successively remove the previous covering sets from each later intersection. This makes a finite Borel partition whose cells have diameter at most $\eta$. Assign one point to each nonempty cell and send points outside the closed ball to zero. The resulting finite-valued map q is Borel, and $\pi_f=\pi\circ q^{-1}$. On the ball, step 3.1 bounds $|R_\delta(h)-R_\delta(q(h))|$ by $B\eta+M\omega(\eta)$, where the compact-ball TV modulus satisfies $\omega(\eta)\to0$ by step 2.1. Outside, use $M$. Thus prior risks differ uniformly over rules by at most $B\eta+M\omega(\eta)+M\tau$. Choose the ball first for small tail, then the cell diameter small on that fixed ball. This makes the bound less than $\epsilon$; taking infima over the same rules preserves it. [F3, F5, F6, step 2.1, step 3.1, construct, algebra] ∎
