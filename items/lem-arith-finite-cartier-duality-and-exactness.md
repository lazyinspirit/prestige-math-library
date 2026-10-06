---
id: lem-arith-finite-cartier-duality-and-exactness
kind: lemma
title: "Finite Cartier duality, exactness and exponent"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - def-abelian-variety-over-a-field
  - def-multiplicative-type-coordinate-hopf-algebra
  - lem-multiplicative-type-local-hopf-dictionary
  - thm-nonaffine-group-scheme-normal-subgroup-quotient
  - lem-nonaffine-group-monomorphism-closed-immersion
  - thm-structure-theorem-for-artinian-rings
  - thm-tensor-product-basis-from-bases
  - thm-adjugate-identity-over-a-commutative-ring
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Bosch, Lutkebohmert, Raynaud, Neron Models (1990), 7.3/2-3 (finite Cartier duality and exponent)"
      url: "https://www.math.stonybrook.edu/~kamenova/homepage_files/Bosch_Raynaud_Neron_Model_tc.pdf"
    - title: "B. Edixhoven, G. van der Geer, B. Moonen, Abelian Varieties (preliminary version 2012), Chapter 6 sections 1-3"
      url: "https://www.van-der-geer.nl/~gerard/AV.pdf"
---

## Statement

Assume AC and DC. Let $k$ be a field. A finite $k$-scheme is an **affine** $k$-scheme whose coordinate ring is a finite-dimensional $k$-algebra; the **rank** of a finite $k$-group scheme $H$ is $\dim_k\mathcal O(H)$.

Let $H$ be a finite commutative $k$-group scheme with coordinate algebra $B=\mathcal O(H)$ of rank $d$. The vector-space dual $B^*=\operatorname{Hom}_k(B,k)$, with multiplication dual to $\Delta_B$ and comultiplication dual to the multiplication of $B$, is a commutative Hopf $k$-algebra, and $H^D=\operatorname{Spec}B^*$ is a finite commutative $k$-group scheme of rank $d$ representing the functor
$$R\longmapsto\operatorname{Hom}_{R\text{-groups}}(H_R,\mathbf G_{m,R})$$
on $k$-algebras: the $R$-points of $H^D$ are the group-like elements of $B\otimes_kR$, equivalently the all-test characters of $H_R$. Evaluation and double vector-space duality give a natural Hopf isomorphism $H\cong H^{DD}$, and $H\mapsto H^D$ is functorial in $H$.

Cartier duality is a contravariant additive equivalence of the category of finite commutative $k$-group schemes with itself, and it preserves exactness with arrows reversed; a sequence of finite commutative $k$-group schemes is exact if and only if its Cartier dual is. A finite commutative $H$ of rank $d$ is killed by $d$: the endomorphism $[d]_H$ is zero. This holds for nonreduced $H$ and for $\operatorname{char}k$ dividing $d$.

In particular, for $n\ge1$ there is an isomorphism $\mu_n^D\cong(\mathbb Z/n)_k$ of finite commutative $k$-group schemes.

## Facts & Assumptions

**Given:** AC, DC, a field $k$, a finite commutative $k$-group scheme $H$ of rank $d$, and an integer $n\ge1$.

[F1] The coordinate algebra of an affine $k$-group scheme is a commutative Hopf $k$-algebra with comultiplication $\Delta$, counit $\epsilon$ and antipode $S$; a group-like element is an element $a$ with $\Delta(a)=a\otimes a$ and $\epsilon(a)=1$ ([[def-multiplicative-type-coordinate-hopf-algebra]]).

[F2] Affine $k$-group schemes are contravariantly equivalent to commutative Hopf $k$-algebras, a group character $G\to\mathbf G_m$ corresponds precisely to a group-like element of its coordinate algebra, and these correspondences commute with field extension ([[lem-multiplicative-type-local-hopf-dictionary]]).

[F3] The quotient $G/H$ of a separated finite-type $k$-group scheme by a closed normal subgroup scheme is represented by a separated finite-type $k$-group scheme, the projection is faithfully flat of finite presentation with scheme-theoretic kernel $H$, and the quotient is universal for homomorphisms killing $H$ ([[thm-nonaffine-group-scheme-normal-subgroup-quotient]], which assumes AC).

[F4] A homomorphism of separated finite-type $k$-group schemes with trivial scheme-theoretic kernel is a closed immersion, and its scheme-theoretic image is a closed subgroup scheme ([[lem-nonaffine-group-monomorphism-closed-immersion]], which assumes AC).

[F5] A commutative Artinian ring is the product of its localizations at its finitely many maximal ideals ([[thm-structure-theorem-for-artinian-rings]]); in particular a zero-dimensional finite-type $k$-scheme is finite.

[F6] A tensor product of free modules is free with the pairwise tensor basis, and the dual of a finite free module has the dual basis ([[thm-tensor-product-basis-from-bases]]).

[F7] For a square matrix $A$ over a commutative ring, $A\operatorname{adj}(A)=\det(A)I$; in particular multiplication by a unit of a finite free algebra has invertible determinant ([[thm-adjugate-identity-over-a-commutative-ring]]).

## Proof

**Proof technique:** direct. The dual Hopf algebra is constructed by transposing structure maps, the dual functor is identified by the character/group-like dictionary, and the exponent is obtained from a determinant argument, so no reducedness or separability hypothesis enters.

1.1 Let $B=\mathcal O(H)$ and $B^*=\operatorname{Hom}_k(B,k)$. Define the comultiplication of $B^*$ as the transpose of the multiplication of $B$, its multiplication as the transpose of $\Delta_B$, its unit as the transpose of $\epsilon$, its counit as the transpose of the unit of $B$, and its antipode as the transpose of the antipode. Transposing the commutative diagrams that express coassociativity, the counit and antipode identities, commutativity of $B$ and cocommutativity of $\Delta_B$ (the latter because $H$ is commutative) gives the corresponding identities for $B^*$: finite-dimensional duality is an exact contravariant equivalence of finite-dimensional $k$-vector spaces and carries commutative diagrams to commutative diagrams. Hence $B^*$ is a commutative Hopf $k$-algebra with $\dim_kB^*=d$, and $\operatorname{Spec}B^*$ is an affine $k$-group scheme of rank $d$ by [F1] and [F2]. [F1, F2, F6, algebra]

2.1 For every $k$-algebra $R$, an $R$-point of $\operatorname{Spec}B^*$, that is, a $k$-algebra map $B^*\to R$, corresponds by transpose to a group-like element of $B\otimes_kR$: multiplicativity and unitality of the map are exactly the identities $\Delta(\chi)=\chi\otimes\chi$ and $\epsilon(\chi)=1$ for the transpose $\chi$. By the character/group-like dictionary in [F2] these are exactly the $R$-group homomorphisms $H_R\to\mathbf G_{m,R}$, and the correspondence is natural in $R$. Therefore $H^D=\operatorname{Spec}B^*$ represents the stated functor, and transposing a Hopf map $B\to B'$ dualizes to a Hopf map $(B')^*\to B^*$, so $H\mapsto H^D$ is a functor. [F1, F2, step 1.1, algebra]

3.1 The evaluation map $B\to(B^*)^*$ is an isomorphism of $k$-vector spaces because $B$ is finite dimensional, and it is compatible with $\Delta$, the multiplication, the unit, the counit and the antipode, since both sides are obtained by transposing the structure maps twice; hence it is a Hopf isomorphism, and accordingly $H\cong H^{DD}$ naturally. The same evaluation pairing gives the stated biduality. [F1, F2, step 1.1, step 2.1, algebra]

4.1 Fix a $k$-algebra $R$, a point $h\in H(R)$ and a character $\chi\in H^D(R)$; by step 2.1 the character $\chi$ is a group-like unit of $B_R=B\otimes_kR$. Translation by $h$ is the $R$-automorphism $t_h$ of $H_R$ with inverse $t_{h^{-1}}$, so it induces an $R$-algebra automorphism $t_h^*$ of $B_R$, and multiplication by $\chi$ induces an invertible $R$-linear endomorphism $m_\chi$ of the free $R$-module $B_R$ of rank $d$. Because $\chi$ is a character, $m_{t_h^*\chi}=t_h^*m_\chi(t_h^*)^{-1}$ and $(t_h^*\chi)(b)=\chi(bh)=\chi(b)\chi(h)$, so $t_h^*\chi=\chi(h)\chi$. Taking determinants gives $\operatorname{Norm}(\chi(h)\chi)=\operatorname{Norm}(\chi)$, where $\operatorname{Norm}(\psi)=\det(m_\psi)$; conjugation preserves determinants, multiplication by the scalar $\chi(h)$ multiplies determinants by $\chi(h)^d$, and $\operatorname{Norm}(\chi)$ is invertible by [F7] applied to the invertible endomorphism $m_\chi$. Cancelling the unit $\operatorname{Norm}(\chi)$ yields $\chi(h)^d=1$ in $R$. [F6, F7, step 3.1, algebra]

5.1 Apply step 4.1 to $H^D$, of rank $d$. Fix a $k$-algebra $R$ and $y\in H^D(R)$, represented by a group-like element $a\in B\otimes_kR$ as in step 2.1. Pass to $R'=B\otimes_kR$ and take the universal point $h\in H(R')$, which via $H\cong H^{DD}$ is a character of $(H^D)_{R'}$. Evaluation of that character on $y_{R'}$ is exactly $a\in R'$. The determinant identity of step 4.1 consequently gives $a^d=1$. Thus the character corresponding to $[d]y$ is trivial, and $[d]y=0$ by the representing identification of step 2.1. This proves $[d]_{H^D}=0$ on every test. Duality is faithful by step 3.1, and dualizing multiplication by $d$ gives multiplication by $d$ (composition of a character with $[d]$ is its $d$-th power), so $[d]_H=0$. The use of a universal character after base extension, rather than only characters over the original $R$, retains infinitesimal points. [F2, step 4.1, algebra]

6.1 Let $f:H\to H'$ be a morphism of finite commutative $k$-group schemes. Its scheme-theoretic kernel is a closed subgroup scheme, and its scheme-theoretic image is a closed subgroup scheme by [F4]; quotients of finite commutative group schemes by closed subgroup schemes are finite by [F3], [F5], since the faithfully flat quotient of the zero-dimensional scheme $H$ is a separated finite-type $k$-scheme of dimension zero. The kernel and image identifications make the category of finite commutative $k$-group schemes abelian: finite products and products of morphisms exist, every morphism has a kernel and a cokernel, and the fppf kernel-image identities hold. More explicitly, the induced map from $H/\ker f$ to the scheme-theoretic image of $f$ has trivial kernel, hence is a closed immersion by [F4]; it is schematically dominant by the definition of the image, hence is an isomorphism. Thus coimage equals image. Cartier duality is an additive contravariant equivalence by steps 2.1 and 3.1 (it exchanges products with coproducts because $\mathcal O(H\times_kH')=B\otimes_kB'$ dualizes to $B^*\otimes_k(B')^*$), and an additive equivalence of abelian categories preserves kernels and cokernels, hence carries exact sequences to exact sequences with the arrows reversed. [F3, F4, F5, step 3.1, step 5.1, algebra]

7.1 For $H=\mu_n$ one has $B=k[t]/(t^n-1)$ with $\Delta(t)=t\otimes t$, so the elements $t^j$, $j=0,\dots,n-1$, are group-like and form a $k$-basis; by steps 1.1 and 2.1 the dual basis elements $e_m$ of $B^*$ satisfy $e_ie_j=\delta_{ij}e_i$ and $\Delta(e_m)=\sum_{i+j\equiv m}e_i\otimes e_j$. Thus $B^*$ is the algebra of $k$-valued functions on $\mathbb Z/n\mathbb Z$ with pointwise multiplication and the comultiplication dual to addition modulo $n$, that is, $\mu_n^D\cong(\mathbb Z/n)_k$. [F2, F6, step 6.1, algebra] ∎

The construction nowhere uses reducedness of $H$: the determinant argument is over the finite free $R$-module $B_R$, and it applies also when $\operatorname{char}k$ divides the rank $d$.
