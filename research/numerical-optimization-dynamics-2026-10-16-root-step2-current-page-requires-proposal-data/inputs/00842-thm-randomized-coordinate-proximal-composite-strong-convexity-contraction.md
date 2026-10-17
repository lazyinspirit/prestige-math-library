---
id: thm-randomized-coordinate-proximal-composite-strong-convexity-contraction
kind: theorem
title: "Proximal coordinate contraction from strong convexity of the composite"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - alg-randomized-coordinate-proximal-descent
  - lem-randomized-coordinate-prox-subproblem-well-defined
  - lem-coordinate-block-smoothness-descent-model
  - lem-coordinate-separable-penalty-is-proper-closed-convex
  - lem-proper-closed-convex-function-affine-minorant
  - lem-smooth-composite-sum-preserves-proper-closed-convexity
  - thm-heine-borel-rn
  - thm-euclidean-semicontinuous-extreme-value-theorem
  - def-proper-closed-convex-function-on-rn
  - thm-differentiable-convex-functions-and-gradient-inequality
  - def-c-one-map-and-local-inverse
  - thm-total-differentiability-gives-a-local-linear-bound-and-continuity
  - thm-induction-principle
  - lem-finite-sum-laws
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "Stephen J. Wright, Coordinate Descent Algorithms, §3.7 (coordinate model context; the composite-curvature variant is proved locally)"
      url: "https://arxiv.org/html/1502.04759v1"
      locator: "Adapted from §3.7, Theorem3.4 and its complete separable-model proof, especially (43)–(46). The source assumes strongly convex smooth f and gives its sharper factor. This item proves locally the composite-strong-convexity variant with t=mu/(Lmax+mu), block extension, attainment and accepted per-history inexact error convolution; that variant is not asserted verbatim in the source."
---

## Statement

For a finite horizon $k$, use an algorithm budget $K\ge k$ and do not request a proximal-gradient stopping tolerance before that horizon.

Let $B_1,\ldots,B_n$ be a partition of $\mathbb R^d$ into nonempty coordinate blocks, with $n,d\ge1$. Let $f:\mathbb R^d\to\mathbb R$ be convex and continuously differentiable, with positive block-gradient Lipschitz constants $L_i$, and let $g(x)=\sum_{i=1}^n g_i(x_{B_i})$, where each $g_i$ is proper, closed and convex in the closed-epigraph convention. Set $F=f+g$ and $L_{\max}=\max_iL_i>0$. Assume $F$ itself is $\mu$-strongly convex for some $\mu>0$: for finite-domain $x,y$ and $s\in[0,1]$,
$$F((1-s)x+sy)\le(1-s)F(x)+sF(y)-\frac\mu2s(1-s)\|x-y\|_2^2.$$
No strong convexity of $f$ alone is required, and no inequality $\mu\le L_{\max}$ is assumed.

Run [[alg-randomized-coordinate-proximal-descent]] from $F(x^0)<+\infty$, with common majorizer $M_i=L_{\max}$ and uniform independent block draws. Fix a finite horizon $k$ and deterministic bounds $\epsilon_0,\ldots,\epsilon_{k-1}\ge0$. Assume the first $k$ updates are executed with accepted inner-model gap certificates at most $\epsilon_j$ at every history in the finite block-history distribution; a stopping or failed call supplies no unexecuted later iterate. Then $F$ has a unique minimizer $x^*$ and, with
$$q_c=1-\frac{\mu}{n(L_{\max}+\mu)}\in(0,1),$$
$$\mathbb E[F(x^k)-F(x^*)]\le q_c^k(F(x^0)-F(x^*))+\sum_{j=0}^{k-1}q_c^{k-1-j}\epsilon_j.$$
The expectation is the finite weighted sum over the uniformly sampled block histories, not a distribution conditioned on successful calls. At $k=0$ the sum is empty and the bound is equality. Exact updates have $\epsilon_j=0$. This includes curvature contributed by the separable penalties; it does not assert the sharper factor $1-\mu/(nL_{\max})$ without additional smooth-part curvature.

## Facts & Assumptions

**Given:** The functions, constants, strong-convexity segment inequality, finite initial point, sampling rule and accepted per-history updates in the Statement.

[F1] [[alg-randomized-coordinate-proximal-descent]]: the selected block minimizes its quadratic model, or is accepted with certified model gap at most $\epsilon_k$; other blocks stay fixed.

[F2] [[lem-randomized-coordinate-prox-subproblem-well-defined]]: every exact block model has a unique minimizer and an accepted error-$\epsilon_k$ update raises $F$ by at most $\epsilon_k$.

[F3] [[lem-coordinate-block-smoothness-descent-model]]: the smooth term obeys the block quadratic upper model with constant $L_i\le L_{\max}$.

[F4] [[lem-coordinate-separable-penalty-is-proper-closed-convex]]: the finite separable sum $g$ is proper, closed and convex; its proof uses only closed sublevels of the block epigraphs and finite products of neighborhoods.

[F5] [[lem-proper-closed-convex-function-affine-minorant]]: a proper closed convex function on a finite-dimensional Euclidean space has an affine minorant.

[F6] [[lem-smooth-composite-sum-preserves-proper-closed-convexity]]: adding finite continuous convex $f$ to $g$ preserves properness, closedness and convexity.

[F7] [[thm-heine-borel-rn]]: closed bounded subsets of finite-dimensional Euclidean space are compact.

[F8] [[thm-euclidean-semicontinuous-extreme-value-theorem]]: a real-valued lower-semicontinuous function on a nonempty compact Euclidean set attains its minimum.

[F9] [[def-proper-closed-convex-function-on-rn]]: properness is nonempty finite domain, convexity is the extended-real segment inequality, and closedness is closedness of the epigraph.

[F10] [[thm-differentiable-convex-functions-and-gradient-inequality]]: for convex differentiable $f$, $f(w)\ge f(x)+\langle\nabla f(x),w-x\rangle$.

[F11] [[def-c-one-map-and-local-inverse]] and [[thm-total-differentiability-gives-a-local-linear-bound-and-continuity]]: the $C^1$ smooth term is continuous, as required by [F6].

[F12] [[thm-induction-principle]]: a recurrence bound holding at zero and preserved at successors holds for every finite horizon.

[F13] [[lem-finite-sum-laws]]: finite weighted sums obey additivity and scaling for averaging over block choices and histories.

[A1] The segment strong-convexity inequality in the Statement holds for $F$, with $\mu>0$; $f$ is convex and $L_{\max}>0$.

[A2] Every executed history through the horizon has accepted certificates, with deterministic errors $\epsilon_j$; block sampling remains independent and uniform, without conditioning on successful histories. Finite-sum laws [F13] justify averaging the conditional bounds over these histories.

## Proof

1.1 By [F4], $g$ is proper closed convex, and by [F11], $f$ is continuous. Applying [F6] makes $F$ proper closed convex. Define $H(x)=F(x)-\mu\|x\|_2^2/2$, keeping $+\infty$ off the finite domain. It is proper. The identity $$\|(1-s)x+sy\|_2^2=(1-s)\|x\|_2^2+s\|y\|_2^2-s(1-s)\|x-y\|_2^2$$ and [A1] show $H$ is convex, including the extended-real endpoint convention. The epigraph of $H$ is the preimage of the closed epigraph of $F$ under the continuous map $(x,a)\mapsto(x,a+\mu\|x\|_2^2/2)$; hence $H$ is closed. By [F5] applied to $H$, $F(x)\ge\mu\|x\|_2^2/2+\langle a,x\rangle+b$ for some $a,b$, so $F$ is coercive. For a finite-domain $\bar x$, the nonempty sublevel $S=\{x:F(x)\le F(\bar x)\}$ is closed by the closed epigraph and bounded by coercivity, hence compact by [F7]. The restriction $F|_S$ is real-valued and lower semicontinuous, so [F8] attains its minimum. Points outside $S$ cannot improve it. The midpoint inequality [A1] forbids distinct minimizers, giving a unique $x^*$. [A1, F4, F5, F6, F7, F8, F9, F11, given, construct, algebra]

1.2 Fix a finite current point $x$. For block $i$ let $z_i$ be the exact minimizer of $$Q_i(u)=\langle\nabla_i f(x),u-x_{B_i}\rangle+\frac{L_{\max}}2\|u-x_{B_i}\|_2^2+g_i(u).$$ Existence and uniqueness follow from [F2]. Define $$M_x(w)=f(x)+\langle\nabla f(x),w-x\rangle+\frac{L_{\max}}2\|w-x\|_2^2+g(w).$$ Separation of the finite block sum shows $z=(z_i)_i$ minimizes $M_x$, and $\sum_i[Q_i(z_i)-Q_i(x_{B_i})]=M_x(z)-F(x)$. By [F3] and $L_i\le L_{\max}$, the actual update in a sampled block satisfies $$F(x^+)\le F(x)+Q_i(z_i)-Q_i(x_{B_i})+\epsilon_j.$$ By [F13], averaging over the uniform block choice at this fixed history therefore gives $$\mathbb E[F(x^+)\mid\text{history}]\le F(x)+\frac{M_x(z)-F(x)}n+\epsilon_j.$$ All quantities are finite at these points because accepted model gaps and exact block minima are finite. [A2, F1, F2, F3, F13, given, algebra]

2.1 By [F10], convex differentiability of $f$ gives $f(x)+\langle\nabla f(x),w-x\rangle\le f(w)$. Thus, for $w_s=(1-s)x+sx^*$, $$M_x(w_s)-F(x)\le F(w_s)-F(x)+\frac{L_{\max}s^2}2\|x^*-x\|_2^2.$$ These segment values are finite by convexity of the effective domain. Apply [A1] to obtain $$M_x(z)-F(x)\le-s(F(x)-F(x^*))+\frac{L_{\max}s^2-\mu s(1-s)}2\|x^*-x\|_2^2.$$ Choose $s=\mu/(L_{\max}+\mu)\in(0,1)$. The squared-distance coefficient vanishes, so $M_x(z)-F(x)\le-s(F(x)-F(x^*))$. This does not require $\mu\le L_{\max}$. [A1, F9, F10, step 1.1, step 1.2, given, algebra]

3.1 Substitute step 2.1 in step 1.2 to get $$\mathbb E[F(x^{j+1})-F(x^*)\mid\text{history}]\le q_c(F(x^j)-F(x^*))+\epsilon_j.$$ By [A2] all histories in the finite product distribution are present; summing the inequality with their weights gives $\phi_{j+1}\le q_c\phi_j+\epsilon_j$, where $\phi_j=\mathbb E[F(x^j)-F(x^*)]$. No conditioning on the event of a successful inner solve is used. [A2, step 1.2, step 2.1, algebra]

4.1 The proposed bound at $k=0$ is $\phi_0=\phi_0$. If $\phi_j\le q_c^j\phi_0+\sum_{\ell<j}q_c^{j-1-\ell}\epsilon_\ell$, multiply by $q_c>0$ and use step 3.1 to obtain the bound at $j+1$. By [F12], finite induction proves the displayed convolution. It specializes to exact-update contraction when every $\epsilon_j=0$. [F12, step 2.1, step 3.1, algebra] ∎
