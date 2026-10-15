---
id: def-hh-specialization-and-regular-trace-determinant
kind: definition
title: "Finite Hecke specialization and its regular-trace determinant"
status: draft
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 0
deps: [def-algebra-over-a-commutative-ring, def-determinant-of-a-square-matrix, def-field, def-hh-coxeter-matrix-word-group-and-length, def-hh-universal-coxeter-hecke-parameters-and-presentation, def-trace-of-an-endomorphism, lem-hh-finite-matrix-and-module-preliminaries, lem-hh-finite-polynomial-and-localization-constructions, lem-hh-universal-presentations-and-base-change, thm-hh-generic-coxeter-hecke-standard-basis]
justified_by: [thm-hh-generic-finite-hecke-semisimplicity]
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Meinolf Geck, Modular Representations of Hecke Algebras, EPFL course notes"
      url: "https://arxiv.org/pdf/math/0511548"
      locator: "§§2 and 4.1, PDF pp. 6–7 and 15–16: finite Coxeter Hecke basis, the canonical trace, coefficient specialization, and generic semisimplicity context."
    - title: "Maarten Solleveld, Affine Hecke Algebras and Their Representations"
      url: "https://www.math.ru.nl/~solleveld/surveyHecke.pdf"
      locator: "§1.1, PDF pp. 4–5: normalized finite Hecke relations, symmetric trace, finite-dimensional deformation, and the rank-one exceptional case."
verification:
  precheck: n/a
---

## Definition

Let $k$ be a field of characteristic zero, let $S$ be a finite Coxeter generator set, and assume that the presented Coxeter group $W$ is finite. Let $\mathcal C$ be the set of odd-edge connected classes of $S$ from [[def-hh-universal-coxeter-hecke-parameters-and-presentation]]: one class joins generators connected by a chain of finite odd braid labels. Introduce one invertible parameter $v_C$ for each $C\in\mathcal C$ and put $R_k:=k[v_C^{\pm1}:C\in\mathcal C]$. Let $H_{R_k}(W)$ be the scalar extension of the universal Hecke algebra to $R_k$; its relations are $(T_s-v_{[s]})(T_s+v_{[s]}^{-1})=0$ and the Coxeter braid relations. By [[thm-hh-generic-coxeter-hecke-standard-basis]], $H_{R_k}(W)$ is a free $R_k$-module with basis $(T_w)_{w\in W}$.

For a homomorphism of commutative rings $\phi:R_k\to K$ to a field $K$, define the specialized algebra $H_\phi:=K\otimes_{R_k}H_{R_k}(W)$ and use the same symbol $T_w$ for the specialized basis element $1\otimes T_w$. For $z\in H_\phi$, let $L_z:H_\phi\to H_\phi$ be left multiplication, $L_z(x)=zx$. The **regular-trace pairing** on $H_\phi$ is

$$B_\phi(x,y):=\operatorname{Tr}_K(L_{xy}).$$

Its Gram matrix in the standard basis is $G_\phi=(\operatorname{Tr}_K(L_{T_xT_y}))_{x,y\in W}$, and its **regular-trace determinant** is $D_\phi:=\det(G_\phi)$. The same construction over $R_k$ gives a Laurent polynomial $D_W\in R_k$.

## Remarks

The matrix of $L_z$ in the standard basis has entries in $R_k$, so applying $\phi$ to that matrix gives the left-multiplication matrix on $H_\phi$. Since trace is the sum of diagonal entries, $D_\phi=\phi(D_W)$. If another $K$-basis has coordinate matrix $P\in\operatorname{GL}_{|W|}(K)$ relative to $(T_w)$, its Gram matrix is $P^{\mathsf T}G_\phi P$, so its determinant is $\det(P)^2D_\phi$. In particular, nonvanishing of the regular-trace determinant is independent of the chosen field basis. The regular-trace pairing is distinct from the canonical symmetrizing trace pairing used on the preceding trace page.
