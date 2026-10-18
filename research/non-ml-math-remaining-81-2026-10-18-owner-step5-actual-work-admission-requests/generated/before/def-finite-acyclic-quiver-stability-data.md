---
id: def-finite-acyclic-quiver-stability-data
kind: definition
title: "Finite-field stability data for an acyclic quiver"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps:
  - def-finite-field-and-its-order
  - def-abelian-category
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Tom Bridgeland, Hall algebras and Donaldson–Thomas invariants, §§4.4–4.6"
      url: "https://arxiv.org/pdf/1611.03696"
    - title: "Markus Reineke, The Harder–Narasimhan system in quantum groups and cohomology of quiver moduli, §§2–3"
      url: "https://arxiv.org/pdf/math/0204059"
verification:
  precheck: n/a
---

## Definition

Let $Q=(Q_0,Q_1,s,t)$ be a finite quiver: $Q_0$ and $Q_1$ are finite sets,
and $s,t:Q_1\to Q_0$ give the source and target of each arrow. Assume $Q$ has
no directed cycles. For a field $K$, a finite-dimensional representation $M$
assigns a finite-dimensional $K$-vector space $M_i$ to each $i\in Q_0$ and a
linear map $M_a:M_{s(a)}\to M_{t(a)}$ to each $a\in Q_1$. A morphism is a
family of linear maps at the vertices commuting with all arrow maps. Write
$\mathcal A_Q(K)$ for this category and
$\mathbf d(M)=(\dim_K M_i)_{i\in Q_0}\in\mathbb N^{Q_0}$ for its dimension
vector. For the finite-field Hall branch, fix $k=\mathbb F_q$ and write
$\mathcal A_Q=\mathcal A_Q(k)$. The next lemma proves the abelian and Euler
properties over any field, and the small finitary properties over $k$.

For $\mathbf d,\mathbf e\in\mathbb Z^{Q_0}$ define the bilinear form
$$\chi_Q(\mathbf d,\mathbf e)=\sum_{i\in Q_0}d_i e_i-\sum_{a:i\to j}d_i e_j,$$
and its skew-symmetrization
$\langle\mathbf d,\mathbf e\rangle=\chi_Q(\mathbf d,\mathbf e)-\chi_Q(\mathbf e,\mathbf d)$.
The next lemma proves that $\chi_Q(\mathbf d(M),\mathbf d(N))$ is the
Hom-minus-Yoneda-Ext$^1$ dimension for this arrow convention.

Fix $z_i\in\mathbb H:=\{z\in\mathbb C:\operatorname{Im}z>0\}$ for each
vertex and extend $Z(\mathbf d)=\sum_i d_i z_i$ additively. If
$\mathbf d\in\mathbb N^{Q_0}$ is nonzero, then
$\operatorname{Im}Z(\mathbf d)=\sum_i d_i\operatorname{Im}z_i>0$; thus its
principal argument lies in $(0,\pi)$. For a nonzero representation $M$, put
$\phi_Z(M)=\arg Z(\mathbf d(M))/\pi\in(0,1)$. Call
$M$ **$Z$-semistable** if every nonzero subrepresentation $U\subseteq M$
satisfies $\phi_Z(U)\le\phi_Z(M)$, and **$Z$-stable** if the inequality is
strict for every proper nonzero subrepresentation.

For a dimension vector $\mathbf d$, let
$$\operatorname{Rep}_{\mathbf d}(Q)=\prod_{a:i\to j} \operatorname{Hom}_k(k^{d_i},k^{d_j}),\qquad G_{\mathbf d}=\prod_{i\in Q_0}\operatorname{GL}_{d_i,k}.$$
The group $G_{\mathbf d}$ acts by change of bases. Define
$\operatorname{Rep}^{ss}_{\mathbf d}(Q,Z)$ geometrically: its points over an
algebraic closure $\bar k$ are representations for which every nonzero
$\bar k$-subrepresentation satisfies the semistability inequality. The
associated quotient stack is
$\mathfrak M^{ss}_{\mathbf d}(Q,Z)=[\operatorname{Rep}^{ss}_{\mathbf d}(Q,Z)/G_{\mathbf d}]$.
Here $[X/G]$ denotes the groupoid-valued quotient: over a scheme $S$ its
objects are $G$-torsors on $S$ with equivariant maps to $X$, and its arrows
are equivariant isomorphisms over $S$. The openness lemma below proves that
$\operatorname{Rep}^{ss}_{\mathbf d}$ is open.

For a finite groupoid $\mathcal G$, define its groupoid cardinality by
$$|\mathcal G|=\sum_{[x]\in\operatorname{Iso}(\mathcal G)} \frac{1}{|\operatorname{Aut}_{\mathcal G}(x)|}.$$
The rational-point groupoid of $\mathfrak M^{ss}_{\mathbf d}$ is finite, and
the finite-field descent lemma identifies it with the groupoid of finite-field
semistable representations and their isomorphisms. No Calabi–Yau structure,
potential, orientation data, vanishing cycles, or physical state-counting
identification is part of this definition.
