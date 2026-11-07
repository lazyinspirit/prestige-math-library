---
id: lem-zarhin-trick-principal-polarization-on-four-copies-and-dual
kind: lemma
title: Zarhin’s trick gives a principal polarization on four copies and four dual
  copies
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
- def-axiom-of-choice
- def-dependent-choice
- def-abelian-variety-over-a-field
- def-polarization-of-an-abelian-variety
- thm-abelian-variety-dual-and-polarization
- thm-abelian-variety-is-projective
- lem-arith-dual-isogeny-kernel-and-abelian-biduality
- lem-arith-finite-cartier-duality-and-exactness
- thm-nonaffine-group-scheme-normal-subgroup-quotient
- lem-arith-symmetric-homomorphism-is-a-mumford-map
- lem-arith-homogeneous-bundle-vanishing-and-mumford-surjectivity
- lem-arith-polarization-and-picard-twist-ampleness
- lem-theorem-of-the-square-and-mumford-homomorphism
- lem-ample-pullback-finite-morphism
- lem-ample-stable-positive-power
- thm-nonaffine-abelian-multiplication-finite-faithfully-flat
- thm-lagrange-four-square-theorem
- thm-segre-line-bundle-external-tensor
- thm-proper-quasi-finite-is-finite
- thm-ample-powers-very-ample-proper-base
- lem-very-ample-implies-ample
- lem-proper-source-to-separated-target-proper
- lem-quasi-finite-morphism-fibre-characterization
- thm-existence-of-algebraic-closures
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
  - title: Faltings–Wüstholz, *Rational Points*, Chapter V, §3, Reduction 1
    url: https://yhzhumath.github.io/Mordell2024/RP.pdf
    locator: Printed pp. 168–169, Zarhin reduction to principally polarized varieties.
  - title: B. Edixhoven, G. van der Geer, B. Moonen, Abelian Varieties, preliminary
      chapters (2012)
    url: https://van-der-geer.nl/AV.pdf
    locator: Theorem11.29 complete proof, printed171–172 (PDF175–176), matrix(4);
      Proposition11.25 printed169–170; symmetric realization11.2 printed159–160. The
      Statement/quaternion matrix are source-backed; the explicit block inverse and
      ample-pullback/positive-power proof are reconstructed locally.
verification:
  precheck: pending
axiom_use: Literal AC and DC are retained through the published arbitrary-field projectivity,
  duality, Picard and cohomology providers. All integer-matrix operations are finite.
  Geometric realizing line bundles are chosen over an algebraic closure under AC;
  the final polarization morphism and inverse are defined over K. No separability
  of the polarization or prime-to-characteristic condition is imposed.
---

## Statement

Assume AC and DC. Let $A/K$ be an abelian variety over a field. Then the abelian variety $A^4\times(A^\vee)^4$ admits a principal polarization defined over $K$.

## Statement references

[[def-abelian-variety-over-a-field]]

[[def-polarization-of-an-abelian-variety]]

[[thm-abelian-variety-dual-and-polarization]]

[Faltings–Wüstholz, *Rational Points*, Chapter V, §3](https://yhzhumath.github.io/Mordell2024/RP.pdf)

## Facts & Assumptions

**Given:** Exactly AC, DC, a field $K$ and an abelian variety $A/K$ in the Statement. No perfectness, characteristic-zero or separability-of-polarization hypothesis is added.

[A1] AC and DC are the literal inherited provider branch; AC permits an algebraic closure for the geometric line-bundle test ([[def-axiom-of-choice]], [[def-dependent-choice]], [[thm-existence-of-algebraic-closures]]).

[F1] Abelian varieties are proper smooth geometrically connected group varieties. They are projective over their original field under AC, and high powers of an ample bundle give projective embeddings ([[def-abelian-variety-over-a-field]], [[thm-abelian-variety-is-projective]], [[thm-ample-powers-very-ample-proper-base]]).

[F2] The dual, normalized Poincare bundle and canonical biduality exist; duality is contravariant and additive, and an ample line bundle gives a symmetric finite-flat isogeny ([[thm-abelian-variety-dual-and-polarization]], [[lem-arith-dual-isogeny-kernel-and-abelian-biduality]]).

[F3] A finite commutative group scheme of rank $n$ is killed by $n$ on all tests, including nonreduced groups in characteristic dividing $n$. The fppf quotient is universal for homomorphisms killing its kernel ([[lem-arith-finite-cartier-duality-and-exactness]], [[thm-nonaffine-group-scheme-normal-subgroup-quotient]]).

[F4] Nonzero integer multiplication on an abelian variety is finite faithfully flat, including when the characteristic divides that integer. A map from a proper scheme to a separated one is proper; finite geometric fibres imply quasi-finiteness for finite-type maps, and proper quasi-finite maps are finite ([[thm-nonaffine-abelian-multiplication-finite-faithfully-flat]], [[lem-proper-source-to-separated-target-proper]], [[lem-quasi-finite-morphism-fibre-characterization]], [[thm-proper-quasi-finite-is-finite]]).

[F5] Every nonnegative integer is a sum of four integer squares ([[thm-lagrange-four-square-theorem]]).

[F6] Mumford maps come from translation differences, have kernel $\operatorname{Pic}^0$ on all tests, and geometric symmetric homomorphisms are Mumford maps, including in characteristic two ([[lem-theorem-of-the-square-and-mumford-homomorphism]], [[lem-arith-homogeneous-bundle-vanishing-and-mumford-surjectivity]], [[lem-arith-symmetric-homomorphism-is-a-mumford-map]]).

[F7] Picard-zero twists of an ample bundle remain ample; finite morphism pullback preserves ampleness; and a line bundle is ample if and only if any fixed positive tensor power is ample ([[lem-arith-polarization-and-picard-twist-ampleness]], [[lem-ample-pullback-finite-morphism]], [[lem-ample-stable-positive-power]]).

[F8] The Segre embedding identifies its hyperplane bundle with the external tensor of hyperplane bundles; a projective embedding line bundle is ample over a field ([[thm-segre-line-bundle-external-tensor]], [[lem-very-ample-implies-ample]]).

[F9] A $K$-defined polarization is a $K$-homomorphism geometrically equal to the Mumford map of an ample bundle. The realizing bundle need not descend to $K$. A polarization is principal when its finite locally free degree is one ([[def-polarization-of-an-abelian-variety]]).

## Proof

**Proof technique:** direct.

1.1 Finite products of abelian varieties are abelian varieties: properness and smoothness are stable under products and the geometric fibres are products of connected varieties over an algebraically closed field. Duality identifies $(A^r)^\vee$ with $(A^\vee)^r$ without a new representation theorem: the inclusion/projection identities $p_j i_l=\delta_{jl}$ and $\sum_j i_jp_j=\operatorname{id}$ dualize by additivity to the corresponding biproduct identities. In these identifications an integer matrix dualizes to its transpose, since $[m]^\vee=[m]$ and duality is additive. We use canonical biduality throughout. [F1, F2, given, algebra]

1.2 Choose a $K$-defined ample invertible sheaf $L_0$ and its polarization $\lambda=\varphi_{L_0}:A\to A^\vee$ by [F1]–[F2]. Let $H=\ker\lambda$ and $n=\deg\lambda=\operatorname{rank}H\ge1$. These are scheme-theoretic data, and no reducedness of $H$ is assumed. [A1, F1, F2, given, choose]

2.1 By [F3], $[n]_H=0$. Since $\lambda$ is finite flat and surjective, and group identities identify its kernel pair with $A\times H$ via $(x,h)\mapsto(x,x+h)$, it realizes the fppf quotient by $H$. Consequently $[n]_A$ factors uniquely through a $K$-homomorphism $\lambda':A^\vee\to A$ with $\lambda'\lambda=[n]_A$. Composing with $\lambda$ gives $(\lambda\lambda')\lambda=[n]_{A^\vee}\lambda$, so cancelling the fppf epimorphism $\lambda$ proves $\lambda\lambda'=[n]_{A^\vee}$. Dualizing this latter equality under biduality gives $(\lambda')^\vee\lambda=[n]_A=\lambda'\lambda$; cancellation of the same epimorphism on the right proves symmetry of $\lambda'$. These are identities of fppf sheaf morphisms, hence of group schemes, and are valid on nonreduced tests. [F2, F3, step 1.2, algebra]

2.2 By [F5], choose $a,b,c,d\in\mathbb Z$ with $a^2+b^2+c^2+d^2=n-1$. Put $$ Q=\begin{pmatrix}a&-b&-c&-d\\ b&a&-d&c\\ c&d&a&-b\\ d&-c&b&a\end{pmatrix}. $$ Each row has squared length $n-1$, and its six row-dot-products are $ab-ab+cd-cd$, $ac-bd-ac+bd$, $ad+bc-bc-ad$, $bc+ad-ad-bc$, $bd-ac-bd+ac$, $cd-cd+ab-ab$, all zero. Thus $QQ^{\mathsf T}=(n-1)I_4$. Replacing $(a,b,c,d)$ by $(a,-b,-c,-d)$ replaces $Q$ by $Q^{\mathsf T}$, giving $Q^{\mathsf T}Q=(n-1)I_4$ too. For $n=1$ take the zero quadruple. [F5, step 1.2, choose, algebra]

2.3 Let $\mathcal H$ be the external tensor of eight copies of $L_0$ on $Z=A^8$. Choose $r\ge1$ such that $L_0^r$ gives a closed projective embedding by [F1]. The product of these eight embeddings followed by repeated Segre gives a closed embedding with line bundle $\mathcal H^r$ by [F8]. Hence $\mathcal H^r$ is ample, and [F7] makes $\mathcal H$ ample. Its Mumford map is $\operatorname{diag}(\Lambda,\Lambda)$: translation differences of the external tensor are the external tensors of the individual translation differences. More generally those differences prove $\varphi_{P\otimes Q}=\varphi_P+\varphi_Q$ and $\varphi_{h^*P}=h^\vee\varphi_Ph$ for any homomorphism $h$, since $h t_x=t_{h(x)}h$. The all-test Picard universal property identifies the latter pullback with $h^\vee$, so these equalities are identities of morphisms, including nilpotent tests. [F1, F2, F6, F7, F8, step 1.1, step 1.2, algebra]

3.1 The map $\lambda'$ is surjective since $\lambda'\lambda=[n]_A$ is surjective. Its kernel is a closed subgroup of $A^\vee[n]$, hence finite by [F4], and every nonempty geometric fibre is a translate of this finite kernel. The map is proper by [F4], since its source is proper and target separated, and it is quasi-finite by its finite geometric fibres. Thus it is finite. In particular finite pullback of ample bundles along $\lambda'$ is legitimate even when the characteristic divides $n$. [F1, F4, step 2.1, algebra]

3.2 Set $B=A^4$, $C=(A^\vee)^4$, $\Lambda=\lambda^{\times4}:B\to C$ and $\Lambda'=(\lambda')^{\times4}:C\to B$. The integer matrices $Q_B,Q_C$ commute with these scalar-diagonal maps. On $X=B\times C$, with dual $C\times B$, define $$ M(x,y)=(\Lambda x+Q_Cy,\ Q_B^{\mathsf T}x+\Lambda'y). $$ It is symmetric by step 1.1 and symmetry of $\lambda,\lambda'$. Its $K$-defined inverse is $$ N(u,v)=(\Lambda'u-Q_Bv,\ -Q_C^{\mathsf T}u+\Lambda v). $$ Indeed diagonal blocks of both products are $[n]-QQ^{\mathsf T}$ or $[n]-Q^{\mathsf T}Q$, hence identities; off-diagonal blocks vanish by commutation with $\Lambda,\Lambda'$. Thus $M$ is an isomorphism, of finite locally free degree one. No positivity claim has yet been inferred just from invertibility. [F2, step 1.1, step 2.1, step 2.2, algebra]

4.1 Put $Z=B\times B=A^8$ and define $$ f:Z\to X,\quad f(x,z)=(x,\Lambda z),\qquad g:X\to Z,\quad g(x,y)=([n]x,\Lambda'y). $$ These maps are finite, by finiteness of $\lambda,\lambda'$ and $[n]$, stability of finite maps under products and base change. They are surjective by the same facts, and satisfy $fg=[n]_X$, $gf=[n]_Z$. [F2, F4, step 2.1, step 3.1, algebra]

5.1 Define the integer unipotent automorphism $U:Z\to Z$ by $U(x,z)=(x+Q_Bz,z)$, with inverse $(x,z)\mapsto(x-Q_Bz,z)$. Thus $R=U^*\mathcal H$ is ample by [F7]. Direct block multiplication, using $Q^{\mathsf T}Q+I_4=nI_4$, gives $$ f^\vee Mf=\begin{pmatrix}\Lambda&Q_C\Lambda\\ \Lambda Q_B^{\mathsf T}&[n]\Lambda\end{pmatrix}=U^\vee\operatorname{diag}(\Lambda,\Lambda)U=\varphi_R. $$ This supplies an explicit ample Mumford map after pullback, rather than an abstract Rosati positivity assertion. [F7, step 1.1, step 2.2, step 2.3, step 3.2, step 4.1, algebra]

6.1 Work over an algebraic closure of $K$, allowed by [A1]. Since $M$ is symmetric, [F6] supplies an invertible sheaf $L$ on $X_{\overline K}$ with $\varphi_L=M_{\overline K}$, including characteristic two. The pullback formula in step 2.3 and step 5.1 give $\varphi_{f^*L}=f^\vee Mf=\varphi_R$. Therefore $f^*L\otimes R^{-1}\in\operatorname{Pic}^0(Z_{\overline K})$ by [F6]; because $R$ is ample, [F7] makes $f^*L$ ample. [A1, F6, F7, step 2.3, step 3.2, step 5.1, construct, algebra]

7.1 The finite map $g$ now gives $g^*f^*L=[n]^*L$ ample by [F7] and step 4.1. The Mumford maps of $[n]^*L$ and $L^{n^2}$ are both $n^2M$, by step 2.3 and $[n]^\vee=[n]$. Their ratio is in $\operatorname{Pic}^0(X_{\overline K})$, so twisting the known ample $[n]^*L$ makes $L^{n^2}$ ample by [F7]. Since $n^2\ge1$, positive-power invariance gives $L$ ample. This does not use converse finite-surjective ampleness descent, and does not divide by $n$ in the field. [F2, F6, F7, step 2.3, step 4.1, step 6.1, algebra]

8.1 Thus $M$ is a polarization by [F9], since its geometric realization $L$ is ample, and it is principal since it is the $K$-defined isomorphism of step 3.2. The geometric line bundle is not claimed to descend to $K$; the morphism $M$ and its inverse already do. All equations apply to nonreduced kernels, to characteristic two and to characteristic dividing $n$. For $n=1$, $Q=0$ and the same inverse and ampleness argument work. For $\dim A=0$, smooth proper geometric connectedness and the rational identity give $A=\operatorname{Spec}K$, so $n=1$ and the construction is the unique principal polarization. This proves the full original Statement. [A1, F1, F9, step 1.2, step 2.2, step 3.2, step 7.1, algebra] ∎

## Source adaptation

The original four-plus-four Statement and integer quaternion matrix are supported by Edixhoven–van der Geer–Moonen, Theorem11.29, printed171–172. The integral block inverse and the two-finite-pullback/positive-power ampleness argument are reconstructed here from the actual local provider proofs. The proof does not import the source's Weil-pairing descent criterion or a Rosati positivity theorem.
