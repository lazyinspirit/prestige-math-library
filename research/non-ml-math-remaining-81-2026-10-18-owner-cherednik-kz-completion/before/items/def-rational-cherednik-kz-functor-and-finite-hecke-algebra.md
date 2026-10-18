---
id: def-rational-cherednik-kz-functor-and-finite-hecke-algebra
kind: definition
title: "The KZ monodromy functor and the reflection Hecke algebra"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 10
deps:
  - def-rational-cherednik-reflection-data-and-parameters
  - def-rational-cherednik-category-o
  - lem-rational-cherednik-dunkl-localization-and-flat-connection
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Pavel Etingof and Xiaoguang Ma, Lecture Notes on Cherednik Algebras"
      url: "https://arxiv.org/pdf/1001.0432"
      locator: "§§5.10 and 6.1–6.2, KZ connection, braid group and Hecke relations, PDF pp. 42–47."
    - title: "Victor Ginzburg, Nicolas Guay, Eric Opdam, and Raphael Rouquier, On the category O for rational Cherednik algebras"
      url: "https://arxiv.org/pdf/math/0212036"
      locator: "§§3.1–3.2 and Remarks 3.1–3.2, parameter conventions, PDF pp. 9–10; §§5.1–5.3, localization, KZ monodromy, and Hecke parameters, PDF pp. 16–21."
verification:
  precheck: n/a
---

## Definition

Fix $(W,\mathfrak h,c)$ as above and use $\mathfrak h_{\rm reg}$ and $\delta$ from [[lem-rational-cherednik-dunkl-localization-and-flat-connection]]. For $b\in\mathfrak h_{\rm reg}$, define the **reflection braid group** $B_W$ to be the orbifold fundamental group of $W\curvearrowright\mathfrak h_{\rm reg}$. Equivalently, its arrows at $b$ are homotopy classes of pairs $(w,\gamma)$ with $w\in W$ and $\gamma:b\to wb$; composition concatenates paths after applying the first endpoint group element, with the corresponding operator order. A $W$-equivariant local system on $\mathfrak h_{\rm reg}$ therefore gives a representation of $B_W$.

For $M\in\mathcal O_c(W,\mathfrak h)$, localize to $M_{\rm reg}$ and restrict along the Dunkl localization isomorphism to the differential-operator algebra. By [[lem-rational-cherednik-dunkl-localization-and-flat-connection]], this is a finite-rank vector bundle with integrable $W$-equivariant connection. Its fiber at $b$, with parallel transport, defines the **KZ monodromy functor** $\operatorname{KZ}:\mathcal O_c\to\mathbb C[B_W]\text{-mod}$. The convention here is monodromy of horizontal sections for the left differential-module connection.

For each reflecting hyperplane $H$, the pointwise stabilizer $W_H$ is cyclic: it acts faithfully on the one-dimensional quotient $\mathfrak h/H$. Put $e_H=|W_H|$ and $\zeta_H=e^{2\pi i/e_H}$. Choose a generator $s_H$ whose eigenvalue on the conormal line $\mathbb C\alpha_H\subset\mathfrak h^*$ is $\zeta_H$, and write $c_{H,\ell}=c_{s_H^\ell}$ for $1\le\ell<e_H$. Then $s_H^{-1}$ acts on the normal coordinate by $\zeta_H$, so a positive meridian lifts through angle $2\pi/e_H$ and ends at the $s_H^{-1}$-translate; the endpoint identification is the action of $s_H$. On a $W_H$-character where $s_H$ acts by $\zeta_H^j$, put
$$r_{H,j}=\sum_{\ell=1}^{e_H-1}c_{H,\ell}(1-\zeta_H^{j\ell}),\qquad \mu_{H,j}=\zeta_H^j\exp\!\left(-\frac{2\pi i}{e_H}r_{H,j}\right)\qquad(0\le j<e_H).$$
The local connection and meridian calculation giving these roots on standard modules is proved in [[lem-rational-cherednik-standard-module-local-connection-residue]] and [[thm-rational-cherednik-kz-standard-modules-factor-through-hecke]]. In GGOR's $k_{H,j}$ normalization, the connection residue on the character $\det^{-j}|_{W_H}$ is $-e_Hk_{H,j}$. Because this character has $s_H$-eigenvalue $\zeta_H^j$, matching the locally computed residue gives $k_{H,j}=-r_{H,j}/e_H$; their Hecke root $\det(s_H)^{-j}e^{2\pi i k_{H,j}}$ is then exactly $\mu_{H,j}$. This makes the parameter translation explicit while retaining the present left-connection and positive-meridian conventions.

The **finite reflection Hecke algebra** $\mathcal H_{q(c)}(W)$ is the quotient of $\mathbb C[B_W]$ by
$$\prod_{j=0}^{e_H-1}(T_H-\mu_{H,j})=0\qquad(H\in\mathcal A),$$
where $T_H$ is the positive meridian class in the quotient, computed by parallel transport on its positive lift and then identifying the endpoint by $s_H$. Thus both the loop orientation and endpoint action are fixed. In particular $\mu_{H,0}=1$. This definition makes no dimension or freeness claim for $\mathcal H_{q(c)}(W)$.

## Remarks

The braid-group representation and quotient Hecke algebra are defined here. The standard-module residue calculation is proved locally; factorization for every object of $\mathcal O$ and the quotient equivalence are retained as separate claims with explicit proof status in [[thm-rational-cherednik-kz-factors-through-hecke-algebra]] and [[thm-rational-cherednik-kz-quotient-equivalence-under-bmr-rank]].
