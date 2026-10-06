---
id: def-rational-representation-and-comodule-of-an-affine-group-scheme
kind: definition
title: Rational representations and comodules of an affine group scheme
status: draft
origin: pipeline
pipeline_run: "frontier-40-geometry-braids-rep-27"
dependency_level: 2
deps:
  - def-commutative-hopf-algebra-over-a-field
  - def-coordinate-hopf-algebra-of-affine-group-scheme
  - def-group-scheme-over-a-field
  - def-linear-isomorphism-and-invertible-linear-map
  - def-linear-map
  - def-linear-subspace
  - def-tensor-product-of-modules-by-generators-and-relations
  - def-vector-space
  - lem-general-linear-group-scheme-and-its-coordinate-ring
justified_by:
  - lem-representations-of-affine-group-schemes-are-comodules
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
      locator: "Ch. 4 §4(a), printed pp. 83-85 (PDF 94-96), and §4(c)-(d), printed pp. 86-88 (PDF 97-99)."
    - title: J. Swanson (notes), J. Pevtsova (lecturer), Algebraic Groups Lecture Notes, University of Washington, Fall 2014
      url: https://www.jpswanson.org/notes/alggroups.pdf
      locator: "October 22nd lecture, Definitions 103-105 and Remark 104, printed pp. 26-27; October 27th lecture, Definitions 107-108, printed pp. 27-28."
---

## Definition

Let $k$ be a field, let $G$ be an affine group scheme of finite type over $k$ ([[def-group-scheme-over-a-field]]) with coordinate Hopf algebra $(A,\Delta,\varepsilon,S)$ ([[def-coordinate-hopf-algebra-of-affine-group-scheme]]), and let $V$ be a $k$-vector space ([[def-vector-space]]).

(a) For a commutative unital $k$-algebra $R$ put $V_R=V\otimes_kR$ and $\operatorname{GL}_V(R)=\operatorname{Aut}_R(V_R)$ ([[def-linear-isomorphism-and-invertible-linear-map]]); a **rational representation** of $G$ on $V$ is a morphism of group functors $r\colon G\to\operatorname{GL}_V$, that is, a natural family of group homomorphisms $G(R)\to\operatorname{Aut}_R(V_R)$ in $R$. When $V$ is finite dimensional, a choice of basis identifies $\operatorname{GL}_V$ with the group functor represented by the affine scheme $\operatorname{GL}_n$ of [[lem-general-linear-group-scheme-and-its-coordinate-ring]], using $\operatorname{GL}_0=\operatorname{Spec}k$ when $V=0$. The identification uses its choice-free point formulas.

(b) An **$A$-comodule structure** on $V$ is a $k$-linear map $\rho\colon V\to V\otimes_kA$ ([[def-linear-map]], [[def-tensor-product-of-modules-by-generators-and-relations]]) with
$$(\rho\otimes\operatorname{id}_A)\rho=(\operatorname{id}_V\otimes\Delta)\rho,\qquad(\operatorname{id}_V\otimes\varepsilon)\rho=\operatorname{id}_V;$$
a subspace $W\subseteq V$ is a **subcomodule** if $\rho(W)\subseteq W\otimes_kA$ ([[def-linear-subspace]]).

(c) The two notions correspond: a comodule structure $\rho$ gives the representation by $r_R(g)(v\otimes1)=(\operatorname{id}_V\otimes g)\rho(v)$, extended $R$-linearly, and this assignment is a bijection onto the rational representations of $G$ on $V$ under which subcomodules correspond to subrepresentations; the proof is [[lem-representations-of-affine-group-schemes-are-comodules]].

(d) The coaction $\Delta\colon A\to A\otimes_kA$ makes $A$ itself an $A$-comodule, the **regular representation** of $G$. A representation $r$ is **faithful** if every $r_R$ is injective.

The axioms in (b) are exactly the two comodule diagrams; no smoothness, reducedness or finite-dimensionality of $V$ is imposed, and a basis of $V$ is chosen only to name the matrix group $\operatorname{GL}_n$.
