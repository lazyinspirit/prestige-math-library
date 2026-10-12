---
id: "cor-polar-form-of-the-metric-in-normal-coordinates"
kind: "corollary"
title: "Polar form of the metric in normal coordinates"
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["thm-gauss-lemma","def-normal-neighborhood-and-normal-coordinate-chart","def-riemannian-metric-and-riemannian-manifold","thm-real-power-continuity-and-derivatives","thm-chain-rule-for-differentials-of-smooth-maps","def-countable-choice"]
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry, Corollary 18.1.3(1) and proof, pp.135--136
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $U=\exp_p(D)$ be a normal neighbourhood centred at $p$ in a Riemannian manifold without boundary, and on $U\setminus\{p\}$ define
$$r(q)=|\exp_p^{-1}(q)|_{g_p}.$$
Then $r$ is smooth and $|\nabla r|_g=1$. Its radial unit vector is
$$\partial_r\big|_{q}=d(\exp_p)_v\left(\frac v{|v|_{g_p}}\right),\qquad v=\exp_p^{-1}(q),$$
and $\nabla r=\partial_r$. The tangent spaces to the level hypersurfaces of $r$ are orthogonal to $\partial_r$; equivalently, away from the centre,
$$g=dr^2+g_r,$$
where $g_r$ is the restriction of $g$ to the tangent spaces of the radial level sets. There are no radial--angular cross terms.

## Facts & Assumptions

**Given:** The centred normal neighbourhood in the statement.

[A1] [[def-countable-choice]] is the assumed $\mathrm{AC}_\omega$.

[F1] Under [A1], [[def-normal-neighborhood-and-normal-coordinate-chart]] gives an open star-shaped $D\subseteq T_pM$ and a diffeomorphism $\exp_p:D\to U$.

[F2] Under [A1], [[thm-gauss-lemma]] gives $g(d\exp_v(v),d\exp_v(w))=g_p(v,w)$, radial norm preservation, and radial orthogonality to images of sphere-tangent vectors.

[F3] The Riemannian metric is a positive-definite inner product on each tangent space ([[def-riemannian-metric-and-riemannian-manifold]]). On $(0,\infty)$, real powers have derivative $(s^\alpha)'=\alpha s^{\alpha-1}$ for every real $\alpha$ ([[thm-real-power-continuity-and-derivatives]]); the differential of a composite of smooth maps obeys the chain rule ([[thm-chain-rule-for-differentials-of-smooth-maps]]).

## Proof

**Proof technique:** direct.

1.1 Fix linear coordinates on the finite-dimensional space $T_pM$ and put $Q(v)=g_p(v,v)$. By [F3], $Q$ is a quadratic polynomial and is positive on $T_pM\setminus\{0\}$. The power derivative in [F3], applied successively with exponents $1/2, -1/2, -3/2,\ldots$, shows by induction that $s\mapsto s^{1/2}$ is smooth on $(0,\infty)$. Hence $|v|_{g_p}=Q(v)^{1/2}$ is smooth off zero, and its composite with the smooth inverse of [F1] proves that $r$ is smooth on $U\setminus\{p\}$. Since $dQ_v(z)=2g_p(v,z)$, the chain rule in [F3] gives, for $q=\exp_p(v)$ and $v\ne0$, $$dr_q(d\exp_v(z))=\frac{g_p(v,z)}{|v|_{g_p}}.$$ [F1, F3, algebra]

2.1 Put $e_r=v/|v|_{g_p}$. By [F2], $\partial_r=d\exp_v(e_r)$ has norm one. For every $X=d\exp_v(z)\in T_qU$, [F2] and step 1.1 give $$g_q(\partial_r,X)=g_p(e_r,z)=dr_q(X).$$ By the defining identity for the gradient and nondegeneracy of $g$, this proves $\nabla r=\partial_r$ and $|\nabla r|=1$. [F1, F2, step 1.1]

3.1 Decompose uniquely $z=a e_r+z_\perp$, where $a=g_p(z,e_r)$ and $z_\perp\perp v$. Step 1.1 gives $a=dr_q(X)$, while [F2] makes $d\exp_v(z_\perp)$ orthogonal to $\partial_r$. Thus $$X=dr_q(X)\,\partial_r+X_\perp,\qquad X_\perp\in\ker dr_q.$$ For two vectors $X,Y$, bilinearity and the two vanishing cross terms give $$g_q(X,Y)=dr_q(X)dr_q(Y)+g_q(X_\perp,Y_\perp).$$ Since $dr\ne0$, $\ker dr_q$ is the tangent space of the radial level hypersurface through $q$. This is exactly $g=dr^2+g_r$. [F2, step 1.1, step 2.1, algebra]

4.1 The centre is excluded because the norm need not be differentiable at zero; no polar formula is asserted there. In dimension zero $U\setminus\{p\}$ is empty. In dimension one the level tangent space is zero and the formula reduces to $g=dr^2$. An empty manifold has no centre. Positive and negative radial coordinate endpoints do not occur: $r>0$ on the stated domain, while arbitrary boundaries of the star-shaped set $D$ are not included. Assumption [A1] is inherited exactly through [F1]--[F2]; the unique orthogonal decomposition is a formula and requires no further choice. [A1, F1, F2, step 1.1, step 2.1, step 3.1] ∎
