---
id: def-rank-one-heisenberg-vertex-algebra
kind: definition
title: "Rank-one Heisenberg oscillator fields and vacuum space"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps: [def-polynomial-ring-on-a-family-of-indeterminates, def-formal-distribution-on-a-vector-space]
justified_by: [thm-rank-one-heisenberg-vertex-operator-algebra]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Tomoyuki Arakawa and Anne Moreau, Arc Spaces and Vertex Algebras"
      url: "https://www.imo.universite-paris-saclay.fr/~anne.moreau/Arc_space-vertex_algebras-BOOK_version.pdf"
      locator: "Section 3.1, Example 3.1, and Section 3.3, Example 3.4: Heisenberg algebra and conformal field."
    - title: "Christophe Nozaradan, Introduction to Vertex Algebras"
      url: "https://arxiv.org/pdf/0809.1380"
      locator: "Section 2.7.3: free-boson commutators; Sections 3.3–3.4: normal products and divided derivatives."
---

## Definition

Let $P=\mathbb C[x_1,x_2,\ldots]$ be the polynomial algebra whose elements involve finitely many indeterminates, as in [[def-polynomial-ring-on-a-family-of-indeterminates]]. Give $x_r$ degree $r$ and write $P_d$ for its degree-$d$ subspace. On $P$, put

$$a_{-r}=x_r\cdot,\qquad a_r=r\frac{\partial}{\partial x_r}\quad(r\ge1),\qquad a_0=0,\qquad \mathbf1=1,\qquad T=\sum_{r\ge1}r x_{r+1}\frac{\partial}{\partial x_r}.$$

Every sum of operators here is applied to a polynomial and is then finite. Define $a(z)=\sum_{n\in\mathbb Z}a_nz^{-n-1}$, in the conventions of [[def-formal-distribution-on-a-vector-space]], and the divided derivative $b_r(z)=\partial_z^{r-1}a(z)/(r-1)!$ for $r\ge1$. In normal ordering, all modes $a_n$ with $n<0$ are moved to the left of all modes with $n\ge0$, preserving their respective internal orders. For a polynomial monomial $v=x_{r_1}\cdots x_{r_s}$ define the candidate field

$$Y(v,z)={:}b_{r_1}(z)\cdots b_{r_s}(z){:},\qquad Y(1,z)=I.$$

The empty normal product is the identity. The same-sign modes commute, so the formula is symmetric in the listed factors; it is extended linearly from the polynomial monomial basis. Set $\omega=\tfrac12 x_1^2$. The well-defined state-field and conformal-VOA structure on this vacuum space are proved in [[thm-rank-one-heisenberg-vertex-operator-algebra]]. The symbol $a_n$ is a current mode; in particular $Y(x_1,z)=a(z)$ and $Y(\omega,z)=\sum_nL(n)z^{-n-2}$ use different mode shifts.
