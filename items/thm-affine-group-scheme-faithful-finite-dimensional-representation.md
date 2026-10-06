---
id: thm-affine-group-scheme-faithful-finite-dimensional-representation
kind: theorem
title: A finitely generated affine group scheme has a faithful finite-dimensional representation
status: draft
origin: pipeline
pipeline_run: "frontier-40-geometry-braids-rep-27"
dependency_level: 4
deps:
  - def-axiom-of-choice
  - def-closed-immersion-schemes
  - def-commutative-hopf-algebra-over-a-field
  - def-coordinate-hopf-algebra-of-affine-group-scheme
  - def-group-scheme-over-a-field
  - def-linear-basis
  - def-linear-isomorphism-and-invertible-linear-map
  - def-morphism-and-closed-subgroup-scheme
  - def-rational-representation-and-comodule-of-an-affine-group-scheme
  - def-tensor-product-of-modules-by-generators-and-relations
  - def-vector-space
  - cor-square-matrix-invertible-iff-determinant-is-a-unit
  - lem-affine-finite-type-scheme-coordinate-ring-finitely-generated
  - lem-finite-dimensional-subcomodules-contain-elements
  - lem-general-linear-group-scheme-and-its-coordinate-ring
  - lem-quotient-spectrum-map-is-a-closed-immersion
  - lem-representations-of-affine-group-schemes-are-comodules
  - thm-affine-scheme-ring-anti-equivalence
  - thm-yoneda-lemma-is-natural-in-both-variables
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
      locator: "Ch. 4 §4(c)-(d), Theorem 4.9, Corollary 4.10 and Remark 4.11, printed pp. 86-88 (PDF 97-99)."
    - title: J. Swanson (notes), J. Pevtsova (lecturer), Algebraic Groups Lecture Notes, University of Washington, Fall 2014
      url: https://www.jpswanson.org/notes/alggroups.pdf
      locator: "October 29th lecture, Theorem 117 with its proof, printed p. 29."
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice. Let $k$ be a field and let $A$ be a finitely generated commutative Hopf algebra over $k$ ([[def-commutative-hopf-algebra-over-a-field]]); put $G=\operatorname{Spec}A$, an affine group scheme of finite type over $k$ ([[def-group-scheme-over-a-field]]). Then there are a nonzero finite-dimensional $k$-vector space $V$ and a closed immersion of group schemes $G\hookrightarrow\operatorname{GL}_V$ ([[def-closed-immersion-schemes]]); choosing a basis identifies $\operatorname{GL}_V$ with $\operatorname{GL}_n$ over $k$. Equivalently, $G$ admits a faithful finite-dimensional rational representation, and one can be chosen as a subrepresentation of the regular representation $(A,\Delta)$. Moreover the same conclusion holds for every affine group scheme of finite type over $k$; that form additionally uses [[lem-affine-finite-type-scheme-coordinate-ring-finitely-generated]]. AC supplies affine quasi-compactness for the finite-type scheme assertions; the finite-subcomodule construction and surjective coefficient-ring calculation are choice-free.

## Facts & Assumptions

[F1] The regular coaction $\Delta\colon A\to A\otimes_kA$ makes $A$ an $A$-comodule, a rational representation of $G$ corresponds to an $A$-comodule structure, and the associated morphism $G\to\operatorname{GL}_n$ of a finite-dimensional comodule with basis $e_1,\dots,e_n$ and coefficients $\Delta(e_j)=\sum_ie_i\otimes a_{ij}$ has comorphism $x_{ij}\mapsto a_{ij}$; the coefficients satisfy $\Delta(a_{ij})=\sum_la_{il}\otimes a_{lj}$ and $\varepsilon(a_{ij})=\delta_{ij}$. ([[def-rational-representation-and-comodule-of-an-affine-group-scheme]], [[lem-representations-of-affine-group-schemes-are-comodules]])

[F2] Every finite subset of a comodule lies in a finite-dimensional subcomodule. ([[lem-finite-dimensional-subcomodules-contain-elements]])

[F3] The antipode identity gives $\sum_lS(a_{il})a_{lj}=\varepsilon(a_{ij})=\sum_la_{il}S(a_{lj})$, so a square matrix with these entries has two-sided inverse $(S(a_{ij}))$ and unit determinant; the coordinate ring of $\operatorname{GL}_n$ is $k[x_{ij},d^{-1}]$ with points the invertible matrices. ([[def-commutative-hopf-algebra-over-a-field]], [[cor-square-matrix-invertible-iff-determinant-is-a-unit]], [[lem-general-linear-group-scheme-and-its-coordinate-ring]])

[F4] A surjective homomorphism $B\to A$ of commutative rings induces a closed immersion $\operatorname{Spec}A\to\operatorname{Spec}B$. ([[lem-quotient-spectrum-map-is-a-closed-immersion]])

[F5] An affine group scheme of finite type over $k$ has finitely generated coordinate ring; this is the declared use of AC. ([[lem-affine-finite-type-scheme-coordinate-ring-finitely-generated]], [[def-axiom-of-choice]])

## Proof

**Given:** AC, a field $k$, a finitely generated commutative Hopf algebra $A$ over $k$, and $G=\operatorname{Spec}A$.

1.1 Choose finitely many $k$-algebra generators $g_1,\dots,g_m$ of $A$. By [F1] the coaction $\Delta$ makes $A$ a comodule over itself, the regular representation, so by [F2] there is a finite-dimensional subcomodule $V\subseteq A$ containing $1,g_1,\dots,g_m$. Since $\varepsilon(1_A)=1_k\neq0$, one has $1_A\neq0$; hence $V\neq0$ because it contains $1$. [F1, F2]

2.1 Choose a basis $e_1,\dots,e_n$ of $V$ and write $\Delta(e_j)=\sum_ie_i\otimes a_{ij}$ with $a_{ij}\in A$. By [F1] the coefficient identities $\Delta(a_{ij})=\sum_la_{il}\otimes a_{lj}$ and $\varepsilon(a_{ij})=\delta_{ij}$ hold, and by the antipode identity of [F3] the matrix $(a_{ij})$ over $A$ has two-sided inverse $(S(a_{ij}))$, so $\det(a_{ij})$ is a unit. Hence $\Phi\colon k[x_{ij},d^{-1}]\to A$, $x_{ij}\mapsto a_{ij}$, $d^{-1}\mapsto\det(a_{ij})^{-1}$, is a well-defined $k$-algebra homomorphism, and by [F1] it is the comorphism of the rational representation $r\colon G\to\operatorname{GL}_n$ associated with the subcomodule $V\subseteq A$. [F1, F3, step 1.1]

3.1 The image of $\Phi$ contains every $a_{ij}=\Phi(x_{ij})$, and the counit identity $(\varepsilon\otimes\operatorname{id})\Delta=\operatorname{id}$ gives $e_j=\sum_i\varepsilon(e_i)a_{ij}\in\operatorname{im}\Phi$; hence $V\subseteq\operatorname{im}\Phi$. Since $\operatorname{im}\Phi$ is a $k$-subalgebra of $A$ containing $1$ and all generators $g_1,\dots,g_m$ of $A$, it is all of $A$: $\Phi$ is surjective. [F1, step 1.1, step 2.1, algebra]

4.1 By [F4] the morphism $\operatorname{Spec}\Phi\colon G\to\operatorname{GL}_n$ is a closed immersion. It is a morphism of group schemes: on $R$-points it is the group homomorphism $r_R$ (with $\operatorname{GL}_n(R)$ the invertible matrices), and two $k$-morphisms of affine schemes are equal exactly when they induce the same maps on $R$-points for every commutative $k$-algebra $R$, because the functor of points is fully faithful by the Yoneda lemma ([[thm-yoneda-lemma-is-natural-in-both-variables]], [[thm-affine-scheme-ring-anti-equivalence]]). Applying this to the morphisms $m_{\operatorname{GL}_n}\circ(r\times r)$ and $r\circ m_G$ and to the unit and inverse identities yields the three defining identities of a group-scheme morphism ([[def-morphism-and-closed-subgroup-scheme]]). The representation is faithful: surjectivity of $\Phi$ makes $g\mapsto g\circ\Phi$ injective on $R$-points for every commutative $k$-algebra $R$, so each $r_R$ is injective. Choosing a basis identifies $\operatorname{GL}_V$ with $\operatorname{GL}_n$ and realizes the representation on the nonzero finite-dimensional space $V$, a subrepresentation of the regular representation. [F1, F4, step 2.1, step 3.1, algebra]

5.1 If $G$ is any affine group scheme of finite type over $k$, then $A=\mathcal O(G)$ is a finitely generated $k$-algebra by [F5], using the assumed AC; steps 1.1-4.1 apply verbatim and produce the faithful finite-dimensional representation. The algebraic construction from a finitely generated Hopf algebra is choice-free: the coefficient calculation is finite, [F4] is choice-free, and [F2] uses only finite tensor expressions. AC is used to regard the constructed affine group objects, including $\operatorname{GL}_n$, as finite-type schemes via affine quasi-compactness. [F5, step 4.1, given] ∎
