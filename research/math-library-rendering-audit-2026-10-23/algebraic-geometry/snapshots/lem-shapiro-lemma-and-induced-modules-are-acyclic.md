---
id: lem-shapiro-lemma-and-induced-modules-are-acyclic
kind: lemma
title: Shapiro's lemma for the trivial subgroup and acyclicity of free comodules
dependency_level: 4
deps:
  - def-affine-scheme
  - def-commutative-hopf-algebra-over-a-field
  - def-hochschild-cohomology-of-algebraic-groups
  - def-rational-representation-and-comodule-of-an-affine-group-scheme
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
status: published
origin: pipeline
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
      locator: Proposition 15.4 (Shapiro's lemma) and Proposition 15.12, printed pp. 305 and 310-311
    - title: J. S. Milne, Algebraic Groups (v2.00, 20 December 2015 author-hosted preliminary edition)
      url: https://www.jmilne.org/math/CourseNotes/iAG200.pdf
      locator: Proposition 16.4, printed pp. 271-272; Proposition 16.12, printed p. 276
---
## Statement

Let $k$ be a field and let $G$ be an affine algebraic group over $k$ with coordinate ring $A=O(G)$, a commutative Hopf algebra ([[def-affine-scheme]], [[def-commutative-hopf-algebra-over-a-field]]). For a $k$-vector space $V$ let $\mathrm{Ind}^G(V)$ be the $G$-module whose $R$-points are the set $\operatorname{Nat}(G_R,V_R^{\mathrm a})$ of natural transformations on commutative $R$-algebras; equivalently, regular $V_R$-valued functions on $G_R$, with $G$ acting by $R$-points and $(g\cdot\varphi)(x)=\varphi(xg)$; this is the induced module of the trivial subgroup of $G$. Then:

**(a) Shapiro's lemma.** $H^n(G,\mathrm{Ind}^G(V))=0$ for all $n\ge1$, where $H^\bullet$ is Hochschild cohomology ([[def-hochschild-cohomology-of-algebraic-groups]]).

**(b) Free comodules are acyclic.** Equip $V\otimes_kA$ with its free $A$-comodule structure $\rho(v\otimes a)=v\otimes\Delta(a)$, i.e. the comodule structure of [[def-rational-representation-and-comodule-of-an-affine-group-scheme]]. Then $\mathrm{Ind}^G(V)\cong(V\otimes_kA)^{\mathrm{a}}$ as $G$-modules, and consequently
$$H^n(G,V\otimes_kA)=0\qquad\text{for all }n\ge1.$$

The pair report records that the general form of Shapiro's lemma for a subgroup $H\subseteq G$, $H^n(G,\mathrm{Ind}_H^GM)\cong H^n(H,M)$, is part of the scaffolded claim but requires homological machinery beyond the present page and is therefore not stated here; only the trivial-subgroup case used by the later items is proved.

## Facts & Assumptions

**Given:** A field $k$, an affine algebraic group $G$ with coordinate Hopf algebra $A$, and a $k$-vector space $V$.

[F1] Hochschild cochains are natural transformations, with the displayed inhomogeneous coboundary; for rational coefficients $W$ they are $W\otimes A^{\otimes n}$. ([[def-hochschild-cohomology-of-algebraic-groups]])

[F2] A rational representation is a comodule, and $V\otimes A$ has coaction $\operatorname{id}_V\otimes\Delta$. ([[def-rational-representation-and-comodule-of-an-affine-group-scheme]])

[F3] Yoneda identifies natural transformations from an affine represented functor to the additive functor of a vector space with its value on the representing algebra. (evaluate a natural transformation at the universal point over the representing algebra, and recover its other values by base change).

## Proof

**Given:** The data above, with $\mathrm{Ind}^G(V)(R)=\operatorname{Nat}(G_R,V_R^{\mathrm a})$ and right-translation action.

1.1 Over a $k$-algebra $R$, Yoneda gives $\operatorname{Nat}(G_R,V_R^{\mathrm a})=V\otimes_kR\otimes_RA_R=V\otimes_kA\otimes_kR$. The identifications are natural under base change. Right translation of a regular function corresponds to $\operatorname{id}_V\otimes\Delta$, so they identify $\mathrm{Ind}^G(V)$ with the additive functor of the free comodule $V\otimes A$. [F2, F3]

1.2 A degree-$n$ cochain with induced coefficients is a regular $V$-valued function $f(g_1,\dots,g_n)(x)$ on $G^{n+1}$. Make the invertible change of variables
$$F(x_0,\dots,x_n)=f(x_0^{-1}x_1,x_1^{-1}x_2,\dots,x_{n-1}^{-1}x_n)(x_0).$$
Its inverse sets $x_0=x$ and $x_i=xg_1\cdots g_i$. Under these maps the induced-coefficient coboundary becomes $\delta F=\sum_{i=0}^{n+1}(-1)^iF(x_0,\dots,\widehat{x_i},\dots,x_{n+1})$: the first term uses right translation of the function argument, the middle terms multiply adjacent differences, and the last deletes the last point. [F1, step 1.1, algebra]

2.1 For $n\ge1$ define $sF(x_0,\dots,x_{n-1})=F(e,x_0,\dots,x_{n-1})$. This is regular and natural. The alternating omission formula gives $s\delta+\delta s=\operatorname{id}$: the omission of the inserted identity in $s\delta$ gives $F$, while every remaining term is the corresponding term of $\delta s$ with opposite sign. Thus if $\delta F=0$, then $F=\delta(sF)$, so all cohomology in degrees $n\ge1$ vanishes. Transporting through step 1.2 proves (a). [step 1.2, algebra]

3.1 The natural isomorphism of step 1.1 identifies the complexes for induced coefficients and the free comodule, so their cohomology agrees. Step 2.1 therefore proves $H^n(G,V\otimes A)=0$ for every $n\ge1$, which is (b). [step 1.1, step 2.1] ∎
