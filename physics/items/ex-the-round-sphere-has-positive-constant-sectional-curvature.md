---
id: ex-the-round-sphere-has-positive-constant-sectional-curvature
kind: example
title: The round sphere has positive constant sectional curvature
status: published
origin: pipeline
deps: ["def-countable-choice","thm-a-regular-level-set-is-an-embedded-submanifold","prop-tangent-space-of-a-regular-level-set-is-the-kernel","prop-christoffel-formula-for-the-levi-civita-connection","prop-connection-laws-in-directional-form","thm-gauss-equation-for-a-riemannian-submanifold","thm-weingarten-equation-and-adjointness-of-the-shape-operator","ex-euclidean-space-has-zero-curvature","def-sectional-curvature"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: Corollary 14.2.2 and Example 14.2.3, printed pages 104–105
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf
      locator: Equations (8.2)–(8.4), printed pages 140–141
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement

This item assumes $\mathrm{AC}_\omega$, namely [[def-countable-choice|countable choice]]. In the propagated dependency chain, that assumption is required through [[def-sectional-curvature]]; after those interfaces are fixed, the remaining local or finite argument makes no additional countable-family choice.

Assume $\mathrm{AC}_\omega$. Let $r>0$. For $n\ge2$, the round sphere

$$S^n_r=\{x\in\mathbb R^{n+1}:|x|=r\}$$

with its metric induced from Euclidean space has constant sectional curvature
$1/r^2$. For $n=0$ or $n=1$, its sectional-curvature domain is empty.

The choice assumption is inherited through both the smooth orthogonal
projection constructions used by the Gauss–Weingarten suppliers and the
sectional-curvature interface.

## Facts & Assumptions

**Given:** Countable choice, integers $n\ge0$, a real number $r>0$, and, when $n\ge2$, a point $x\in S^n_r$ and a tangent two-plane $\sigma\subseteq T_xS^n_r$.

[A1] $\mathrm{AC}_\omega$ is [[def-countable-choice|countable choice]] and is required here through [[def-sectional-curvature]]; after those supplied interfaces are fixed, the remaining local or finite calculation makes no additional countable-family choice.

[F1] Countable choice supplies a choice function for every countable family of nonempty sets. [[def-countable-choice]].

[F2] A nonempty regular level set is an embedded submanifold, and its tangent space is the kernel of the differential. [[thm-a-regular-level-set-is-an-embedded-submanifold]], [[prop-tangent-space-of-a-regular-level-set-is-the-kernel]].

[F3] Constant Euclidean metric coefficients give zero Levi–Civita symbols, and a connection is function-linear in its direction and satisfies the Leibniz rule in the differentiated field. [[prop-christoffel-formula-for-the-levi-civita-connection]], [[prop-connection-laws-in-directional-form]].

[F4] For a unit normal $\nu$, the page's sign convention is $(\overline\nabla_u\nu)^\top=-S_\nu u$ and $g(S_\nu u,v)=\langle\mathrm{II}(u,v),\nu\rangle$. [[thm-weingarten-equation-and-adjointness-of-the-shape-operator]].

[F5] The Gauss equation is $\operatorname{Rm}^S(u,v,z,w)=\operatorname{Rm}^{\mathbb R^{n+1}}(u,v,z,w)+\langle\mathrm{II}(u,w),\mathrm{II}(v,z)\rangle-\langle\mathrm{II}(u,z),\mathrm{II}(v,w)\rangle$. [[thm-gauss-equation-for-a-riemannian-submanifold]].

[F6] Euclidean space has zero Riemann curvature. [[ex-euclidean-space-has-zero-curvature]].

[F7] Sectional curvature is the Riemann numerator divided by the positive Gram determinant of a basis of the two-plane. [[def-sectional-curvature]].

## Verification

**Proof technique:** direct calculation.

1.1 Put $Q(y)=|y|^2$. On $Q^{-1}(r^2)$, one has $dQ_y(w)=2\langle y,w\rangle$ and $dQ_y(y)=2r^2\ne0$, so $r^2$ is a regular value; the level is nonempty because $(r,0,\ldots,0)$ lies in it. By [F2], $S^n_r$ is an embedded hypersurface and $T_yS^n_r=\ker dQ_y=y^\perp$. [F2, algebra, construct]

2.1 The field $\nu(y)=y/r$ has unit length and is normal by step 1.1. In Cartesian coordinates the metric coefficients are $\delta_{ab}$, so [F3] gives $\overline\nabla_{\partial_a}\partial_b=0$; applying the connection laws to $\nu=\sum_a(y^a/r)\partial_a$ gives $\overline\nabla_u\nu=u/r$ for every tangent $u$. This derivative is tangent by step 1.1, and [F4] therefore gives $S_\nu u=-u/r$. Since the normal space is spanned by $\nu$, [F4] then gives $\mathrm{II}(u,v)=-(1/r)g(u,v)\nu$. [F3, F4, step 1.1, algebra]

3.1 Let $(u,v)$ be any supplied basis of $\sigma$. Substitute $X=u$, $Y=Z=v$, $W=u$ and the formula from step 2.1 into [F5]. The ambient term is zero by [F6], while the two quadratic terms give $\operatorname{Rm}^{S^n_r}(u,v,v,u)=(1/r^2)(g(u,u)g(v,v)-g(u,v)^2)$. The denominator is positive by [F7], so division yields $K(\sigma)=1/r^2$, independently of $x$ and $\sigma$. [A1, F5, F6, F7, step 2.1, algebra]

4.1 The explicit point in step 1.1 proves that every $S^n_r$ here is nonempty. When $n=0$ or $n=1$ there is no tangent two-plane, so the curvature function has empty domain rather than a numerical exception; for $n\ge2$, [F7] excludes a degenerate Gram denominator. The required endpoint condition is $r>0$: at $r=0$ the level is not regular and $1/r^2$ is undefined. Countable choice [F1] is assumed because [F4]–[F5] inherit it from their smooth orthogonal projection construction and [F7] inherits it through the Riemann-tensor symmetries; the point, normal, and the basis used above are explicit or supplied, so the calculation makes no additional choice. The result is a direct equality and asserts no biconditional. [F1, F2, F4, F5, F7, step 1.1, step 2.1, step 3.1] ∎
