---
id: def-coefficient-complete-codifferential-deformation
kind: definition
title: "Coefficient-complete fixed-carrier codifferential deformation"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - def-field
  - def-ring-characteristic
  - def-koszul-sign-rule-for-graded-tensors
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Marco Manetti, Deformation theory via differential graded Lie algebras, §1"
      url: "https://arxiv.org/pdf/math/0507284"
    - title: "Jean-Louis Loday and Bruno Vallette, Algebraic Operads, §§1.2, 2.2, 10.1"
      url: "https://www.math.univ-paris13.fr/~vallette/Operads.pdf"
---

## Definition

Let $k$ be a characteristic-zero field, let $B$ be a commutative unital $k$-algebra concentrated in degree zero, and let $I$ be an ideal such that $B\cong\varprojlim_{n\ge1}B/I^n$. Nilpotent ideals are included. Let $V$ be any graded $k$-vector space; no finite-dimensionality assumption is made. Use the graded tensor convention of [[def-koszul-sign-rule-for-graded-tensors]].

The carrier $C$ is either the coaugmented tensor coalgebra $T^c(V)=\bigoplus_{r\ge0}V^{\otimes r}$ with deconcatenation, or the coaugmented graded symmetric coalgebra $S^c(V)=\bigoplus_{r\ge0}S^r(V)$ with unshuffle coproduct. For the latter, $S^r$ means graded symmetric coinvariants, and the coproduct sums over all divisions of the inputs into two ordered sublists, with the Koszul sign. The empty word is $1_C$, the counit $\epsilon$ is projection to length zero, and the coaugmentation is inclusion of scalars. These formulas specify the carrier without requiring a cofree universal property.

Define its coefficient completion, filtration, and tensor target by

$$C_B=\varprojlim_n(C\otimes_k B/I^n),\qquad F^nC_B=\ker(C_B\longrightarrow C\otimes_k B/I^n),\qquad F^0C_B=C_B.$$

$$C_B\widehat\otimes_B C_B=\varprojlim_n((C\otimes_k C)\otimes_k B/I^n).$$

All inverse limits in this definition are in graded modules: explicitly $(C_B)^j=\varprojlim_n(C^j\otimes_k B/I^n)$ and $C_B=\bigoplus_j(C_B)^j$, and the tensor target is completed in each fixed total degree. All structure maps are extended degreewise through these inverse limits. This is coefficient completion of a direct sum: modulo each $I^n$ every element has finite length support. No unrestricted product over arities is included. Completed tensor powers and polynomial coefficients mean the analogous explicit inverse limits. A homogeneous map is understood in the grading induced by $C$, and continuity always means the displayed coefficient topology.

Let $E^d$ consist of continuous $B$-linear filtration-preserving homogeneous endomorphisms of degree $d$ on $C_B$, and set $E=\bigoplus_d E^d$, with composition $E^dE^e\subseteq E^{d+e}$. Completeness of this graded composition algebra always means completeness of each $E^d$ separately, not of its ungraded direct sum. All exponential and logarithm series below have inputs in $E^0$ and remain in $E^0$; their conjugation series on a homogeneous $T\in E^d$ remain in that same fixed $E^d$. Its order filtration is

$$F^pE=\{T:T(F^qC_B)\subseteq F^{p+q}C_B\text{ for every }q\ge0\}\quad(p\ge0).$$

Let $\mathfrak l\subset E$ be the homogeneous coderivations satisfying $T(1_C)=0$, $\epsilon T=0$, and

$$\Delta T=(T\otimes1+1\otimes T)\Delta.$$

The sign in $1\otimes T$ is the graded tensor sign. In particular these coderivations have zero nullary component. Fix $D\in\mathfrak l^1$ with $D^2=0$. A **coefficient-complete fixed-carrier codifferential deformation** is $D+R$ with $R\in F^1\mathfrak l^1$ and $(D+R)^2=0$. Its allowed equivalences are degree-zero continuous $B$-linear counital coaugmented coalgebra automorphisms $G$ such that $G-\operatorname{id}\in F^1E$, acting by $D+R\mapsto G(D+R)G^{-1}$.

Here identity modulo $I$ can equivalently be stated as $(G-\operatorname{id})(C_B)\subseteq F^1C_B$. To see the filtration implication without assuming that $I$ is finitely generated, observe that $F^qC_B$ is the closure of $C\otimes I^q$: modulo $F^n$, $n>q$, every element lifts from $C\otimes I^q$. By $B$-linearity a continuous map with image in $F^1$ carries that dense submodule into $F^{q+1}$; closedness gives the same inclusion on all $F^q$.

This contract uses all continuous coefficient-complete Taylor operations. It does not identify them with a naive algebraic tensor $\operatorname{Hom}_k(W,U)\otimes I$ when the coefficient algebra is infinite dimensional. Over a finite-dimensional coefficient algebra, expanding in a finite coefficient basis does give the usual tensor identification, without any finite-dimensionality assumption on $W,U$.
