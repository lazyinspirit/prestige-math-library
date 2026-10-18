---
id: def-temperley-lieb-rank-one-lusztig-tilting-category
kind: definition
title: "The specified rank-one divided-power tilting category"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps:
  - def-lusztig-divided-power-integral-form
  - def-quantum-integers-factorials-and-divided-powers-at-q-i
  - thm-quantized-sl-two-string-formulas
  - def-drinfeld-jimbo-quantized-enveloping-algebra
  - thm-the-drinfeld-jimbo-formulas-define-a-hopf-algebra
  - def-rigid-object-and-rigid-monoidal-category
  - def-braiding
  - def-twist-and-ribbon-structure
justified_by: []
aliases: []
landmark: false
proof_strategy: null
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Stephen F. Sawin, Quantum Groups at Roots of Unity and Modularity"
      url: "https://arxiv.org/pdf/math/0308281"
      locator: "§§1–3, printed pp. 2–18: root and weight-lattice parameter conventions, ribbon form, Weyl modules and tilting filtrations."
    - title: "Henning Haahr Andersen and Daniel Tubbenhauer, Diagram Categories for Uq-Tilting Modules at Roots of Unity"
      url: "https://arxiv.org/pdf/1409.2799"
      locator: "§§2.1–2.3, PDF pp. 5–9: the q^2-order convention, divided-power specialization, Weyl bases, and tilting-filtration definitions."
verification:
  precheck: n/a
---

## Definition

Fix an integer $\ell\ge3$ and set $q=e^{\pi i/\ell}$, so the multiplicative order of $q^2$ is $\ell$. Use the divided-power integral form of [[def-drinfeld-jimbo-quantized-enveloping-algebra]] from [[def-lusztig-divided-power-integral-form]], specialized by $v\mapsto q$ to $\mathbb C$. In type $A_1$, write $K=K_h$ and $E,F$ for the rank-one generators. The convention is

$$KEK^{-1}=q^2E,\qquad KFK^{-1}=q^{-2}F,\qquad [E,F]=\frac{K-K^{-1}}{q-q^{-1}},$$

$$\Delta(K)=K\otimes K,\qquad \Delta(E)=E\otimes K+1\otimes E,\qquad \Delta(F)=F\otimes1+K^{-1}\otimes F.$$

This is the Sawin coproduct, rather than the inverse-$K$ coproduct in [[thm-the-drinfeld-jimbo-formulas-define-a-hopf-algebra]]. Its counit is $\varepsilon(K)=1$, $\varepsilon(E)=\varepsilon(F)=0$ and its antipode is $S(E)=-EK^{-1}$, $S(F)=-KF$, $S(K)=K^{-1}$. The exact integral transport is from the library algebra with opposite coproduct, by $E_{\rm target}=KE_{\rm lib}$, $F_{\rm target}=F_{\rm lib}K^{-1}$ and $K_{\rm target}=K_{\rm lib}$. Substituting these generators gives the displayed coproduct and unchanged mixed relation. On divided powers the formulas are $E_{\rm target}^{(r)}=v^{-r(r-1)}K^rE_{\rm lib}^{(r)}$ and $F_{\rm target}^{(r)}=v^{r(r-1)}F_{\rm lib}^{(r)}K^{-r}$; the inverse formulas also have Laurent-monomial coefficients, so the integral lattice and toral generators are preserved.

The Lusztig specialization includes all divided powers $E^{(r)},F^{(r)}$ and the toral quantum binomials; this is the divided-power form, not the small quantum group. A finite-dimensional module is **type 1** when it carries its integral-weight grading $M=\bigoplus_{m\in\mathbb Z}M_m$ with $K|_{M_m}=q^m$, the full toral character $T_{c,t}|_{M_m}=\begin{bmatrix}m+c\\t\end{bmatrix}_q I$ for every $c\in\mathbb Z$ and $t\ge0$, and $E^{(r)}M_m\subseteq M_{m+2r}$, $F^{(r)}M_m\subseteq M_{m-2r}$. The binomial is its Laurent-polynomial specialization, including negative upper indices. The grading is part of the data and is not collapsed when distinct weights have the same $K$ eigenvalue. Every module intertwiner preserves it: for $m<n$, $T_{-m,n-m}$ has eigenvalues $0$ and $1$ on weights $m$ and $n$.

For $a\ge0$, the Weyl module $\Delta(a)$ has basis $v_0,\ldots,v_a$ and actions

$$Kv_j=q^{a-2j}v_j,\qquad E^{(r)}v_j=\begin{bmatrix}a-j+r\\r\end{bmatrix}_qv_{j-r},\qquad F^{(r)}v_j=\begin{bmatrix}j+r\\r\end{bmatrix}_qv_{j+r},$$

where the Gaussian binomials are the Laurent-polynomial specializations of [[def-quantum-integers-factorials-and-divided-powers-at-q-i]], and $v_j=0$ outside $0\le j\le a$. Its dual is the dual Weyl module $\nabla(a)=\Delta(a)^\vee$. A **Weyl filtration** (respectively dual-Weyl filtration) is a finite submodule filtration whose successive quotients are modules $\Delta(a)$ (respectively $\nabla(a)$). A **tilting module** is a module with both filtrations.

Take $s=e^{\pi i/(2\ell)}$, so $s^2=q$. The ribbon category is the full weight-lattice extension $\mathcal U_s^\dagger(\mathfrak{sl}_2)$ of this Lusztig form, not its root-lattice restriction. Its toral factor is the completed function algebra on the weight lattice $P=\mathbb Z\omega$, acting on each weight space by its weight character. Before specialization, the rank-one universal $R$-matrix is the Sawin weight-lattice expression

$R=D\sum_{r\ge0}q^{r(r+1)/2}(1-q^{-2})^r[r]_q!E^{(r)}\otimes F^{(r)},\qquad D|_{M_m\otimes N_n}=s^{mn}.$

interpreted in the completed tensor product; at the root it means the image of the integral completed form, not termwise division by a vanishing $[r]_q!$. In ordinary powers the coefficient is $q^{r(r-1)/2}(q-q^{-1})^r/[r]_q!$; changing to two divided powers multiplies that coefficient by $([r]_q!)^2$. Thus the displayed divided-power coefficient is Laurent integral and vanishes for $r\ge\ell$ after specialization. The toral factor is the weight pairing, fixed explicitly by $D$ above. The pivotal map is $j_M(x)(\varphi)=\varphi(Kx)$ and the twist is $\theta=u^{-1}j$ for the Drinfeld map $u$. The object class of this page is the full subcategory of finite-dimensional integrable type-1 tilting modules for this weight-lattice ribbon extension. No assertion about semisimplicity or the trace radical is part of this definition.

## Remarks

The parameter dictionary is fixed: $q$ here is the standard rank-one parameter in $KEK^{-1}=q^2E$ and in $\delta=q+q^{-1}$. In Sawin's notation, type $A_1$ has $D=1$, source root degree $l=2\ell$, $l'=\ell$, and $q=s^2$; this is the weight-lattice/ribbon branch.

## Remark

Their full tensor, duality and ribbon identities on the tilting category are proved in [[lem-temperley-lieb-rank-one-ribbon-structure-from-the-finite-r-series]]. This is a forward exposition pointer, not a premise of the definition.
