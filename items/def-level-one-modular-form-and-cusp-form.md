---
id: def-level-one-modular-form-and-cusp-form
kind: definition
title: "Level-one modular forms and cusp forms"
status: draft
origin: pipeline
deps:
  - def-modular-group-action-on-the-upper-half-plane
  - thm-standard-fundamental-domain-for-the-modular-group
  - def-compactified-level-one-modular-curve
  - thm-q-expansion-principle-at-the-cusp
  - def-complex-differentiability-holomorphic-and-entire
  - def-meromorphic-function-complex-domain
  - def-vector-space
  - thm-mobius-group-and-projective-linear-identification
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "D. Zagier, Elliptic Modular Forms and Their Applications, in The 1-2-3 of Modular Forms (Universitext, Springer, 2008)"
      url: "https://people.mpim-bonn.mpg.de/zagier/files/doi/10.1007/978-3-540-74119-0_1/fulltext.pdf"
      locator: "Section 1.1, equations (2)–(3), printed pp. 4–5; equation (4), p. 6."
    - title: "J. S. Milne, Modular Functions and Modular Forms (v1.31, 2017)"
      url: "https://www.jmilne.org/math/CourseNotes/MF.pdf"
      locator: "Definition 4.5 and the cusp condition, printed p. 49."
    - title: "C. T. McMullen, Advanced Complex Analysis, Math 213a course notes (Harvard, 2010)"
      url: "https://people.math.harvard.edu/~ctm/home/text/class/harvard/213a/10/html/home/course/course.pdf"
      locator: "Section 5.4, printed pp. 98–99: weight 2k, boundedness at infinity and cusp forms."
---

## Definition

Fix an integer $k$. A **modular form of weight $k$** for $PSL_2(\mathbb Z)$ is a
holomorphic function $f:\mathfrak H\to\mathbb C$
([[def-complex-differentiability-holomorphic-and-entire]]) such that

$$f(\gamma\cdot\tau)=(c\tau+d)^kf(\tau)$$

for every $\gamma=\bigl(\begin{smallmatrix}a&b\\c&d\end{smallmatrix}\bigr)\in
SL_2(\mathbb Z)$ and every $\tau\in\mathfrak H$
([[def-modular-group-action-on-the-upper-half-plane]]), and such that the
associated periodic function $F$ of
[[thm-q-expansion-principle-at-the-cusp]] is holomorphic at $q=0$. Since
$T=\bigl(\begin{smallmatrix}1&1\\0&1\end{smallmatrix}\bigr)$ acts by
$\tau\mapsto\tau+1$ with factor $1$, the law gives $f(\tau+1)=f(\tau)$, so the
q-expansion principle applies and $F$ is the unique holomorphic function on
$0<|q|<1$ with $f(\tau)=F(e^{2\pi i\tau})$. The form $f$ is a **cusp form** if
additionally $F(0)=0$.

Write $M_k$ and $S_k$ for the sets of modular and cusp forms of weight $k$. They
are $\mathbb C$-subspaces of the space of holomorphic functions on $\mathfrak
H$: sums and scalar multiples of functions satisfying the transformation law
satisfy it again, and the q-expansion condition is preserved because
$F_{af+bg}=aF_f+bF_g$ by uniqueness
([[def-vector-space]], [[def-meromorphic-function-complex-domain]]). The
transformation law is well posed: the factor $(c\tau+d)^k$ depends only on
$\gamma$ and, by the cocycle identity for the Möbius action, the conditions for
all $\gamma$ are consistent
([[thm-mobius-group-and-projective-linear-identification]]). Since
$-I\in SL_2(\mathbb Z)$ acts as the identity with factor $(-1)^k$, one has
$f=(-1)^kf$, so $M_k=\{0\}$ for odd $k$. The weight condition is compatible with
multiplication: $M_kM_\ell\subseteq M_{k+\ell}$ and $S_kM_\ell\subseteq
S_{k+\ell}$, because the products of the factors are $(c\tau+d)^{k+\ell}$ and
the q-expansion of a product has constant term $F_f(0)F_g(0)$.
