---
id: "def-integral-of-a-form-over-a-smooth-singular-simplex"
kind: "definition"
title: "Integral of a form over a smooth singular simplex"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
proof_strategy: direct
deps: ["def-standard-orientation-of-the-affine-simplex","def-smooth-singular-simplex","prop-pullback-of-forms-is-smooth-functorial-and-preserves-wedges","prop-local-coordinate-expression-for-a-differential-form","cor-volume-under-a-continuous-graph-over-a-jordan-base","thm-continuous-functions-on-compact-jordan-sets-are-integrable","def-riemann-integral-over-a-jordan-set"]
justified_by: ["lem-simplex-integrals-are-independent-of-affine-coordinate-identification"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Peter S. Park, Proof of de Rham's Theorem
      url: https://people.math.harvard.edu/~pspark/derham.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
---

## Definition

Let $\sigma:\Delta^k\to M$ be a smooth singular simplex and let $\omega$ be a smooth $k$-form on an open neighbourhood of its image in $M$. For $k\ge1$ put
$$T_k=\{x\in\mathbb R^k:x_j\ge0,\ \sum_jx_j\le1\},\qquad a(x)=v_0+\sum_{j=1}^kx_j(v_j-v_0).$$
Take a smooth extension $\bar\sigma$ near $\Delta^k$, restrict its domain so that $\omega$ is defined on its image, and write $a^*\bar\sigma^*\omega=f(x)\,dx_1\wedge\cdots\wedge dx_k$. Define
$$\int_\sigma\omega:=\int_{T_k}f(x)\,dx.$$
The right side is the Jordan-set Riemann integral. In degree zero define $\int_\sigma\omega=\omega(\sigma(v_0))$. This fixes the positive point convention. Reversing the domain orientation negates the integral. Independence of other positive affine coordinates is the forward justification [[lem-simplex-integrals-are-independent-of-affine-coordinate-identification]].

## Facts & Assumptions

[F1] [[def-standard-orientation-of-the-affine-simplex]] gives the positive affine coordinates $a$ and the positive zero-simplex convention.

[F2] [[def-smooth-singular-simplex]] requires one smooth neighbourhood extension but does not make an extension part of the simplex data.

[F3] [[prop-pullback-of-forms-is-smooth-functorial-and-preserves-wedges]] makes the displayed pullback smooth.

[F4] [[prop-local-coordinate-expression-for-a-differential-form]] gives its unique smooth top-form coefficient $f$.

[F5] [[cor-volume-under-a-continuous-graph-over-a-jordan-base]] makes a solid under a nonnegative continuous graph over a compact Jordan base compact and Jordan.

[F6] [[thm-continuous-functions-on-compact-jordan-sets-are-integrable]] gives integrability of a continuous coefficient on a compact Jordan set.

[F7] [[def-riemann-integral-over-a-jordan-set]] defines this integral by zero extension, with bounding-rectangle independence as its justification.

## Verification

**Given:** One simplex $\sigma$ and form $\omega$ as in the definition. The dimension $k$ is finite.

1.1 For $k=1$, $T_1=[0,1]$ is a compact Jordan interval. If $T_{k-1}$ is compact Jordan for $k\ge2$, then $T_k$ is its solid under the nonnegative continuous function $u\mapsto1-\sum_{j=1}^{k-1}u_j$. Applying [F5] inductively proves compactness and Jordan measurability in every positive dimension. This finite induction chooses no family of objects. [F5, given]

2.1 The inverse image under $\bar\sigma$ of the open domain of $\omega$ is an open neighbourhood of $\Delta^k$, so the restriction used in the definition exists. By [F3] and [F4], $f$ is smooth on an open neighbourhood of $T_k$, hence continuous on $T_k$. Step 1.1 and [F6] give a finite Riemann integral, and [F7] makes its value independent of a bounding rectangle. The coefficient itself need not have compact support on its neighbourhood. [F2, F3, F4, F6, F7, step 1.1]

3.1 Two extensions agree on the relative interior of $\Delta^k$, an open set in its affine span; their derivatives and hence pullback coefficients agree there. For any $x\in T_k$, the points $(1-t)x+tb$, where $b_j=1/(k+1)$ and $0<t\le1$, lie in the interior and converge to $x$ as $t\downarrow0$. Continuity of both coefficients forces equality at $x$. Thus their integrands are identical on all of $T_k$, proving extension independence, including along every face. [F2, F3, F4, step 2.1]

4.1 When $k=0$, evaluation needs no derivative or integration theorem in dimension zero. When $M$ is empty there is no simplex to which the definition applies. A zero form has zero coefficient and integral zero. Degenerate maps are allowed; if the derivative has rank less than $k>0$, alternation makes its top-form pullback zero. The affine domain and its faces are retained even for such maps. The definition uses one extension whose existence is part of [F2], and the resulting value is independent of it; it makes no simultaneous selection of extensions and uses no choice axiom. [F1, F2, F3, F4, step 3.1] ∎
