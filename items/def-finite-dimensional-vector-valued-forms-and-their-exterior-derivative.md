---
id: def-finite-dimensional-vector-valued-forms-and-their-exterior-derivative
kind: definition
title: Finite-dimensional vector-valued forms and their exterior derivative
status: published
origin: pipeline
deps: ["def-vector-space", "def-dimension", "def-smooth-differential-k-form", "def-exterior-derivative-by-the-invariant-vector-field-formula", "lem-the-invariant-exterior-derivative-formula-is-c-infinity-multilinear"]
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Robert L. Bryant, An Introduction to Lie Groups and Symplectic Geometry
      url: https://math.duke.edu/~bryant/ParkCityLectures.pdf
      locator: Lecture 2, Definition 9 and Proposition 9 with the component expansion immediately after its proof, printed pages 27--28
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
---

## Definition

Let $M$ be a smooth manifold, let $V$ be a finite-dimensional real vector
space, and let $k\geq0$. A **smooth $V$-valued differential $k$-form** on
$M$ is a family of alternating $k$-linear maps

$$\alpha_p:(T_pM)^k\longrightarrow V$$

such that $\lambda\circ\alpha$ is a scalar smooth $k$-form in the sense of
[[def-smooth-differential-k-form]] for every $\lambda\in V^*$. Equivalently,
for one (and hence every) basis $(v_1,\ldots,v_r)$ of $V$, the unique
components in $\alpha=\sum_i v_i\alpha^i$ all belong to $\Omega^k(M)$.

For such an $\alpha$, its **componentwise exterior derivative** is the unique
$V$-valued $(k+1)$-form $d_V\alpha$ characterized by

$$\lambda\circ d_V\alpha=d(\lambda\circ\alpha)$$

for every $\lambda\in V^*$. Indeed, in a basis with dual basis
$(\lambda^1,\ldots,\lambda^r)$, set

$$d_V\alpha=\sum_i v_i\,d\alpha^i,\qquad \alpha^i=\lambda^i\circ\alpha.$$

The scalar formula defining $d$ is real-linear term by term
[[def-exterior-derivative-by-the-invariant-vector-field-formula]], and its
output is a smooth form
[[lem-the-invariant-exterior-derivative-formula-is-c-infinity-multilinear]].
Thus the displayed construction has the stated characterization. It is
independent of the chosen basis because linear functionals separate points of
$V$, and the characterization also proves uniqueness.

The two smoothness descriptions are equivalent in both directions: testing
all $\lambda$ includes the dual basis components, while every
$\lambda\circ\alpha$ is a fixed real linear combination of the components in
one basis. If $M$ is empty, these assignments and identities are vacuous. If
$V=0$, there is only the zero-valued form and its derivative is zero; if
$\dim V=1$, the definition is exactly the scalar definition after choosing
one nonzero basis vector. No metric, nondegeneracy, manifold boundary, or
endpoint is involved. A single finite basis exists by finite-dimensionality;
the definition is basis-independent and chooses no basis or family, so no
choice axiom is used.
