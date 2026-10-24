---
id: lem-general-linear-group-scheme-and-its-coordinate-ring
kind: lemma
title: The general linear group scheme and its coordinate ring
status: published
origin: pipeline
pipeline_run: "frontier-40-geometry-braids-rep-27"
dependency_level: 0
deps:
  - def-axiom-of-choice
  - def-determinant-of-a-square-matrix
  - def-finite-type-and-module-finite-algebras
  - def-group-scheme-over-a-field
  - def-linear-basis
  - def-linear-isomorphism-and-invertible-linear-map
  - def-locally-finite-type-and-finite-type-morphism
  - def-principal-localisation
  - def-ring-homomorphism
  - def-tensor-product-of-modules-by-generators-and-relations
  - def-vector-space
  - cor-affine-scheme-quasi-compact
  - cor-square-matrix-invertible-iff-determinant-is-a-unit
  - thm-adjugate-identity-over-a-commutative-ring
  - thm-affine-fibre-product-tensor-ring
  - thm-affine-scheme-ring-anti-equivalence
  - thm-determinant-multiplicative
  - thm-ring-matrix-arithmetic-laws
  - thm-universal-property-of-localisation
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
      locator: "Ch. 2 §§2.2 and 2.8, printed pp. 40-41 (PDF 51-52): coordinate rings and group laws of $\\mathbf G_m$ and $\\operatorname{GL}_n$."
    - title: J. Swanson (notes), J. Pevtsova (lecturer), Algebraic Groups Lecture Notes, University of Washington, Fall 2014
      url: https://www.jpswanson.org/notes/alggroups.pdf
      locator: "October 1st lecture, Example 31(2)-(3), printed pp. 10-11: translation of $\\operatorname{GL}_n$ and $\\mathbf G_m$ into comultiplication formulas."
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice for the finite-type assertion. Let $k$ be a field, let $n\ge1$, and put $d=\det(x_{ij})\in k[x_{ij}:1\le i,j\le n]$. Then $\operatorname{GL}_n=\operatorname{Spec}k[x_{ij},d^{-1}]$ is a group scheme of finite type over $k$ ([[def-group-scheme-over-a-field]]) whose structure comorphisms are
$$\Delta(x_{ij})=\sum_{l=1}^{n}x_{il}\otimes x_{lj},\qquad\varepsilon(x_{ij})=\delta_{ij},\qquad S(x_{ij})=\text{the }(i,j)\text{-entry of }d^{-1}\operatorname{adj}(X),$$
and for every commutative unital $k$-algebra $R$ the group $\operatorname{GL}_n(R)$ is the group of invertible $n\times n$ matrices over $R$. If $V$ is a $k$-vector space with basis $e_1,\dots,e_n$, then the functor $R\mapsto\operatorname{Aut}_R(V\otimes_kR)$ is naturally identified with $\operatorname{GL}_n$. In particular $\operatorname{GL}_1=\mathbf G_m=\operatorname{Spec}k[t,t^{-1}]$ is the multiplicative group scheme, with $\Delta(t)=t\otimes t$, $\varepsilon(t)=1$ and $S(t)=t^{-1}$. For $V=0$ put $\operatorname{GL}_0=\operatorname{Spec}k$, with the trivial group structure and $\operatorname{GL}_0(R)=\operatorname{Aut}_R(0)=\{1\}$; its coordinate ring is $k$ and its matrix has no entries. The coordinate constructions and point identifications are choice-free; AC is used for affine quasi-compactness in the finite-type assertion.

## Facts & Assumptions

[F1] Matrix multiplication over a commutative ring is associative and unital, determinants are multiplicative, the adjugate identities $X\operatorname{adj}(X)=\operatorname{adj}(X)X=\det(X)I_n$ hold, and a square matrix is invertible exactly when its determinant is a unit. ([[thm-ring-matrix-arithmetic-laws]], [[thm-determinant-multiplicative]], [[thm-adjugate-identity-over-a-commutative-ring]], [[cor-square-matrix-invertible-iff-determinant-is-a-unit]])

[F2] Ring homomorphisms correspond contravariantly to morphisms of affine spectra, and $\operatorname{Spec}(B\otimes_kC)\cong\operatorname{Spec}B\times_k\operatorname{Spec}C$. ([[thm-affine-scheme-ring-anti-equivalence]], [[thm-affine-fibre-product-tensor-ring]])

[F3] If a unital homomorphism $B\to C$ of commutative rings sends every element of a multiplicative set $S\subseteq B$ to a unit, then it factors uniquely through the localisation $B\to S^{-1}B$. ([[thm-universal-property-of-localisation]], [[def-principal-localisation]])

[F4] Under the assumed Axiom of Choice ([[def-axiom-of-choice]]), for a finitely generated $k$-algebra $R$ the structure morphism $\operatorname{Spec}R\to\operatorname{Spec}k$ is locally of finite type by its single affine chart, and it is quasi-compact because affine schemes are quasi-compact; hence it is of finite type. ([[def-locally-finite-type-and-finite-type-morphism]], [[def-finite-type-and-module-finite-algebras]], [[cor-affine-scheme-quasi-compact]])

[F5] For a $k$-vector space $V$ with basis $e_1,\dots,e_n$, an $R$-linear automorphism of $V\otimes_kR$ is determined by, and equivalent to, its invertible matrix in that basis. ([[def-linear-basis]], [[def-linear-isomorphism-and-invertible-linear-map]], [[def-vector-space]])

## Proof

**Given:** A field $k$, an integer $n\ge1$, the polynomial algebra $B=k[x_{ij}]$ with $d=\det(x_{ij})$, and the principal localisation $A=B_d=k[x_{ij},d^{-1}]$ with localisation map $\lambda\colon B\to A$.

1.1 Define a $k$-algebra homomorphism $\bar\Delta\colon B\to A\otimes_kA$ by $\bar\Delta(x_{ij})=\sum_lx_{il}\otimes x_{lj}$ ([[def-tensor-product-of-modules-by-generators-and-relations]]). With $X^{(1)}=(x_{ij}\otimes1)$ and $X^{(2)}=(1\otimes x_{ij})$ one has $\bar\Delta(X)=X^{(1)}X^{(2)}$, so [F1] gives $\bar\Delta(d)=\det(X^{(1)})\det(X^{(2)})=(d\otimes1)(1\otimes d)=d\otimes d$, a unit of $A\otimes_kA$; the identities $\det(X^{(1)})=d\otimes1$ and $\det(X^{(2)})=1\otimes d$ are the Leibniz formula ([[def-determinant-of-a-square-matrix]]) applied termwise to the ring homomorphisms $B\to A\otimes_kA$, $x_{ij}\mapsto x_{ij}\otimes1$ and $x_{ij}\mapsto1\otimes x_{ij}$ ([[def-ring-homomorphism]]). By [F3] there is a unique $k$-algebra homomorphism $\Delta\colon A\to A\otimes_kA$ with $\Delta\lambda=\bar\Delta$. [F1, F3, given, algebra]

1.2 Define $\bar\varepsilon\colon B\to k$ by $\bar\varepsilon(x_{ij})=\delta_{ij}$; then $\bar\varepsilon(d)=\det(I_n)=1$ is a unit, so by [F3] there is a unique $k$-algebra homomorphism $\varepsilon\colon A\to k$ with $\varepsilon\lambda=\bar\varepsilon$. [F1, F3, algebra]

1.3 Let $M=(m_{ij})$ be the matrix over $A$ with entries $m_{ij}=d^{-1}(\operatorname{adj}X)_{ij}$, and define the $k$-algebra homomorphism $\bar S\colon B\to A$ by $\bar S(x_{ij})=m_{ij}$. Since $X\operatorname{adj}(X)=\operatorname{adj}(X)X=dI_n$ over $A$ by [F1], multiplying by $d^{-1}$ gives $XM=I_n=MX$; multiplicativity of the determinant gives $\bar S(d)\cdot d=\det(M)\det(X)=\det(MX)=\det(I_n)=1$, so $\bar S(d)=d^{-1}$ is a unit and [F3] yields a unique $k$-algebra homomorphism $S\colon A\to A$ with $S\lambda=\bar S$. [F1, F3, algebra]

2.1 Coassociativity holds on the generators: $(\Delta\otimes\operatorname{id})\Delta(x_{ij})=\sum_{l,k}x_{ik}\otimes x_{kl}\otimes x_{lj}=(\operatorname{id}\otimes\Delta)\Delta(x_{ij})$ by associativity of matrix multiplication in [F1]. Both sides are $k$-algebra homomorphisms $A\to A\otimes_kA\otimes_kA$ agreeing on all $x_{ij}$, hence on $d$ and on $d^{-1}$, so they agree on $A$ by [F3]. [F1, F3, step 1.1, algebra]

3.1 The counit identities hold on the generators: $(\varepsilon\otimes\operatorname{id})\Delta(x_{ij})=\sum_l\delta_{il}x_{lj}=x_{ij}=\sum_lx_{il}\delta_{lj}=(\operatorname{id}\otimes\varepsilon)\Delta(x_{ij})$, with the canonical identification $k\otimes_kA\cong A\cong A\otimes_kk$; agreement on generators and on $d^{-1}$ as in step 2.1 extends this to $A$. [F1, step 1.1, step 1.2, algebra]

3.2 The antipode identities hold on the generators: $m_A(S\otimes\operatorname{id})\Delta(x_{ij})=\sum_lS(x_{il})x_{lj}=(MX)_{ij}=\delta_{ij}=\varepsilon(x_{ij})$ and $m_A(\operatorname{id}\otimes S)\Delta(x_{ij})=(XM)_{ij}=\delta_{ij}$, so $m_A(S\otimes\operatorname{id})\Delta=u_A\varepsilon=m_A(\operatorname{id}\otimes S)\Delta$ on generators, both sides being $k$-algebra homomorphisms $A\to A$; agreement on the generators extends the identity to $A$ as in step 2.1. [F1, step 1.1, step 1.2, step 1.3, algebra]

4.1 By [F2] the ring maps $\Delta,\varepsilon,S$ are comorphisms of morphisms $m\colon\operatorname{GL}_n\times_k\operatorname{GL}_n\to\operatorname{GL}_n$, $e\colon\operatorname{Spec}k\to\operatorname{GL}_n$ and $i\colon\operatorname{GL}_n\to\operatorname{GL}_n$, where $\operatorname{GL}_n=\operatorname{Spec}A$: the identifications $\operatorname{Spec}(A\otimes_kA)\cong\operatorname{GL}_n\times_k\operatorname{GL}_n$ and $\operatorname{Spec}(A\otimes_kA\otimes_kA)\cong\operatorname{GL}_n\times_k\operatorname{GL}_n\times_k\operatorname{GL}_n$ hold. The comorphisms of $m\circ(m\times\operatorname{id})$ and $m\circ(\operatorname{id}\times m)$ are $(\Delta\otimes\operatorname{id})\Delta$ and $(\operatorname{id}\otimes\Delta)\Delta$, equal by step 2.1, so the two composites agree since $\operatorname{Spec}$ is a contravariant equivalence; the identities $m\circ(e\times\operatorname{id})=\operatorname{id}=m\circ(\operatorname{id}\times e)$ and $m\circ(i,\operatorname{id})=e\circ p=m\circ(\operatorname{id},i)$ follow in the same way from steps 3.1 and 3.2. Thus $\operatorname{GL}_n$ is a $k$-group scheme, and it is of finite type because $A$ is the finitely generated $k$-algebra $k[x_{ij},d^{-1}]$ and [F4] applies. [F2, F4, step 2.1, step 3.1, step 3.2, algebra]

5.1 For every commutative unital $k$-algebra $R$ there is a natural bijection between $k$-algebra homomorphisms $A\to R$ and $n\times n$ matrices $N$ over $R$ with unit determinant: a map restricts to $B\to R$ giving $N=(N_{ij})$ with $\det(N)=\varphi(d)$ a unit, and conversely a matrix with unit determinant gives $B\to R$, $x_{ij}\mapsto N_{ij}$, which sends $d$ to a unit and factors uniquely through $A$ by [F3]; by [F1] the unit-determinant matrices are exactly the invertible ones. Under this bijection the group law induced by $m$ is matrix multiplication, $(\varphi\psi)(x_{ij})=\sum_l\varphi(x_{il})\psi(x_{lj})$, the identity is $I_n$, and $i$ induces matrix inversion, so $\operatorname{GL}_n(R)$ is the group of invertible matrices over $R$. [F1, F3, step 1.1, step 1.3, step 4.1, algebra]

6.1 If $V$ is a $k$-vector space with basis $e_1,\dots,e_n$, then [F5] identifies $\operatorname{Aut}_R(V\otimes_kR)$ with the invertible $n\times n$ matrices over $R$ naturally in $R$, and step 5.1 identifies the latter with $\operatorname{GL}_n(R)$; hence the functor $R\mapsto\operatorname{Aut}_R(V\otimes_kR)$ is naturally identified with $\operatorname{GL}_n$. [F5, step 5.1, algebra]

7.1 For $n=1$ the constructions specialize: $d=x_{11}$, $\operatorname{adj}(X)=1$, so with $t=x_{11}$ one has $A=k[t,t^{-1}]$, $\Delta(t)=t\otimes t$, $\varepsilon(t)=1$ and $S(t)=t^{-1}$, and step 5.1 identifies the points with $R^\times$; this is $\mathbf G_m$. For $V=0$, the singleton functor $R\mapsto\operatorname{Aut}_R(0)$ is represented by $\operatorname{Spec}k$, whose identity, multiplication and inverse are the unique possible maps; it is of finite type since its one-point space is quasi-compact. This supplies $\operatorname{GL}_0$ without a determinant formula. The coordinate and point constructions are choice-free; [F4] uses AC for the finite-type assertion when $n\ge1$. [F3, F4, step 1.1, step 5.1, given] ∎
