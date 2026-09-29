---
id: def-bochner-martinelli-kernel
kind: definition
title: The normalized Bochner–Martinelli kernel
status: published
origin: pipeline
deps:
  - def-bigraded-complex-differential-forms
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Lebl, Tasty Bits of Several Complex Variables, v4.4, Chapter 5 §5.1"
      url: https://www.jirka.org/scv/scv.pdf
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
---

## Definition

For $n\ge1$ and $\zeta\ne z$ in $\mathbb C^n$, set

$$\Omega_n(\zeta,z)=\frac{(n-1)!}{(2\pi i)^n}\sum_{j=1}^n\frac{\overline{\zeta_j-z_j}}{|\zeta-z|^{2n}}d\bar\zeta_1\wedge d\zeta_1\wedge\cdots\wedge\widehat{d\bar\zeta_j}\wedge d\zeta_j\wedge\cdots\wedge d\bar\zeta_n\wedge d\zeta_n.$$

Here the hat means that the indicated $d\bar\zeta_j$ factor is omitted, while
$d\zeta_j$ remains. Use the complex orientation determined by
$dx_1\wedge dy_1\wedge\cdots\wedge dx_n\wedge dy_n$, and the induced
outward-normal-first orientation on boundaries. For fixed $z$, this is a smooth
$(n,n-1)$ form in $\zeta$ away from $z$. Its coefficients are locally
integrable in pairings with smooth complementary $(0,1)$ forms near $\zeta=z$.
For $n=1$ it is
$$\Omega_1(\zeta,z)=\frac{d\zeta}{2\pi i(\zeta-z)}.$$

## Facts & Assumptions

**Given:** $n\ge1$ and distinct points $\zeta,z\in\mathbb C^n$; the coordinate
forms and bidegree decomposition are those of [[def-bigraded-complex-differential-forms]].

[F1] The complex cotangent basis separates holomorphic and antiholomorphic
factors into bidegrees ([[def-bigraded-complex-differential-forms]]).

## Proof

**Proof technique:** direct.

1.1 In each summand one $d\bar\zeta_j$ is omitted and all $n$ factors $d\zeta_1,\ldots,d\zeta_n$ remain, so every summand has bidegree $(n,n-1)$ by [F1]. Its scalar coefficient is smooth for $\zeta\ne z$. For $r=|\zeta-z|$, $|\overline{\zeta_j-z_j}/r^{2n}|\le r^{1-2n}$. On a compact neighborhood of $z$, a smooth complementary $(0,1)$ form has bounded coefficients; the resulting top-degree density is bounded by a constant times $r^{1-2n}$. Its absolute integral near $z$ is bounded by a constant multiple of $\int_0^\epsilon r^{1-2n}r^{2n-1}\,dr=\epsilon$. The finite sum is therefore locally integrable. [F1, given, algebra]

2.1 If $n=1$, the omitted antiholomorphic factor leaves only $d\zeta$, and $\overline{\zeta-z}/|\zeta-z|^2=1/(\zeta-z)$; since $(n-1)!/(2\pi i)^n=1/(2\pi i)$, the formula reduces to $d\zeta/(2\pi i(\zeta-z))$. [given, algebra] ∎
