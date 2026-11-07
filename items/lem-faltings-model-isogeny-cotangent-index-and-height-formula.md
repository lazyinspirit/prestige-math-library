---
dependency_level: 3
id: lem-faltings-model-isogeny-cotangent-index-and-height-formula
kind: lemma
title: Cotangent, determinant index and height for supplied model-isogeny data
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-axiom-of-choice
- def-dependent-choice
- def-number-field
- def-ring-of-integers-of-a-number-field
- def-fiberwise-semiabelian-group-scheme
- def-abelian-variety-over-a-field
- def-group-scheme-over-a-scheme
- def-sheaf-relative-differentials
- def-pullback-module-ringed-spaces
- thm-transitivity-sequence-schemes
- thm-right-exactness-of-tensor-products
- lem-differentials-commute-base-change-schemes
- lem-differentials-localization
- cor-fields-of-characteristic-zero-and-finite-fields-are-perfect
- cor-algebraic-extensions-of-perfect-fields-are-separable
- def-projective-module
- cor-ring-of-integers-is-a-dedekind-domain
- lem-dedekind-localisation-at-nonzero-prime-is-dvr
- thm-nakayama-lemma
- def-jacobson-radical-of-a-ring
- lem-nonzero-number-field-ideal-has-finite-quotient
- def-height-of-a-rank-one-normed-module-over-number-ring
- thm-height-of-a-rank-one-normed-module-independent-of-element
- def-archimedean-embeddings-and-number-field-signature
- lem-finite-chart-localization-for-compactly-supported-forms-on-manifolds-with-boundary
- thm-change-of-variables-for-oriented-manifold-diffeomorphisms
- prop-pullback-of-forms-is-smooth-functorial-and-preserves-wedges
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: G. Faltings, Endlichkeitssätze für abelsche Varietäten über Zahlkörpern
      (1983)
    url: https://archive.ymsc.tsinghua.edu.cn/pacm_download/355/9132-elc.pdf
    locator: §2 Definition, printed p. 350; §4 Lemma 5, printed pp. 358–359. The conditional
      cotangent/index/metric formulation separates supplied model and analytic data
      from their existence.
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice and Dependent Choice. Let $K$ be a number field, $R=\mathcal O_K$, and $X_1,X_2$ fiberwise semiabelian group schemes over $R$ of relative dimension $g\ge0$. Supply an $R$-homomorphism $\phi:X_1\to X_2$ whose generic fibre $\phi_K:A_1\to A_2$ is a finite surjective isogeny of abelian varieties of degree $d=[K(A_1):K(A_2)]$. Write $e_i$ for the identities, and supply the finite projective rank-$g$ modules $E_i=e_i^*\Omega_{X_i/R}$. Put
$$
G=X_1\times_{X_2,e_2}\operatorname{Spec}R,\qquad M=e^*\Omega_{G/R},\qquad \omega_i=\bigwedge_R^g E_i.
$$
Here $e$ is the induced identity of $G$; no finiteness or flatness of $G$ is assumed.

For each archimedean embedding, supply compact connected oriented complex manifolds $A_i(\mathbb C)$ of complex dimension $g$, the identifications of $\omega_i\otimes\mathbb C$ with their invariant top forms, and a holomorphic orientation-preserving $d$-sheeted covering representing $\phi_K$. Require these identifications to commute with pullback. Supply the positive integral norms
$$
\|\alpha\|_v^2=\frac{i^{g^2}}{2^g}\int_{A_i(\mathbb C)}\alpha\wedge\overline\alpha
$$
on these lines, with conjugate-compatible norms, and let $h_R(\omega_i)$ be their normed-module heights. All these model, covering and metric data are hypotheses.

Then $f=e_1^*(d\phi)$ fits in an exact sequence
$$
0\longrightarrow E_2\xrightarrow{f}E_1\longrightarrow M\longrightarrow0
$$
with $M$ a finite additive group. For $0\ne u\in\omega_2$ one has
$$
\#(\omega_1/R\det(f)u)=\#M\,\#(\omega_2/Ru),\qquad \|\det(f)u\|_v^2=d\|u\|_v^2,
$$
and consequently
$$
h_R(\omega_2)=h_R(\omega_1)+\frac12\log d-\frac{\log\#M}{[K:\mathbb Q]}.
$$
This is a formula for the supplied normed modules; it asserts neither existence of the data nor their identification with stable heights after arbitrary base change.

## Statement references

[Faltings, §4 Lemma 5, printed pp. 358–359](https://archive.ymsc.tsinghua.edu.cn/pacm_download/355/9132-elc.pdf). The source's isogeny-height computation is adapted here to separate the cotangent/index/complex-integral calculation from model existence and semistable height comparison. The proof below establishes this conditional formulation locally.

## Facts & Assumptions

**Given:** Exactly the model, morphism, module, covering, orientation, positive norm and compatibility data in the Statement; no finite-flat-kernel or model-existence theorem is assumed.

[A1] AC and DC are retained literally; AC supplies the Dedekind and Nakayama contexts below ([[def-axiom-of-choice]], [[def-dependent-choice]]).

[F1] Number fields, their integer rings, abelian varieties, group kernels and the fibrewise model convention specify the algebraic data ([[def-number-field]], [[def-ring-of-integers-of-a-number-field]], [[def-abelian-variety-over-a-field]], [[def-group-scheme-over-a-scheme]], [[def-fiberwise-semiabelian-group-scheme]]).

[F2] Relative differentials, pullback and transitivity give a right-exact cotangent sequence; tensor and differential base change preserve the indicated right-exact sequence ([[def-sheaf-relative-differentials]], [[def-pullback-module-ringed-spaces]], [[thm-transitivity-sequence-schemes]], [[thm-right-exactness-of-tensor-products]], [[lem-differentials-commute-base-change-schemes]], [[lem-differentials-localization]]).

[F3] Characteristic-zero fields are perfect and their algebraic extensions are separable ([[cor-fields-of-characteristic-zero-and-finite-fields-are-perfect]], [[cor-algebraic-extensions-of-perfect-fields-are-separable]]).

[F4] $R$ is Dedekind, its nonzero-prime localizations are DVRs and its nonzero ideal quotients are finite ([[cor-ring-of-integers-is-a-dedekind-domain]], [[lem-dedekind-localisation-at-nonzero-prime-is-dvr]], [[lem-nonzero-number-field-ideal-has-finite-quotient]]).

[F5] Projective modules split surjections; Nakayama applies to the maximal ideal of a local ring ([[def-projective-module]], [[thm-nakayama-lemma]], [[def-jacobson-radical-of-a-ring]]).

[F6] Normed-module heights are generator-independent with archimedean weights $\epsilon_v=1,2$ whose sum is $[K:\mathbb Q]$ ([[def-height-of-a-rank-one-normed-module-over-number-ring]], [[thm-height-of-a-rank-one-normed-module-independent-of-element]], [[def-archimedean-embeddings-and-number-field-signature]]).

[F7] Compactly supported forms admit finite chart localization, integration is linear and local, and oriented diffeomorphisms satisfy change of variables ([[lem-finite-chart-localization-for-compactly-supported-forms-on-manifolds-with-boundary]], [[thm-change-of-variables-for-oriented-manifold-diffeomorphisms]]).

[F8] Pullback of forms preserves wedges and composition ([[prop-pullback-of-forms-is-smooth-functorial-and-preserves-wedges]]).

## Proof

**Proof technique:** direct.

1.1 Apply transitivity to $X_1\to X_2\to\operatorname{Spec}R$ and pull back along $e_1$. The identity $\phi e_1=e_2$ identifies the first term with $E_2$; right exactness of tensor and differential base change in the Cartesian kernel square identify the last term with $M$. Thus $E_2\xrightarrow f E_1\to M\to0$ is exact. This uses no flatness of $G$. [F1, F2, given]

1.2 Put $F_i=K(A_i)$. The finite extension $F_1/F_2$ is separable by [F3]. For an algebraic generator $a$ with separable minimal polynomial $P$, differentiation relative to $F_2$ gives $P'(a)\,da=0$ and hence $da=0$; finite generation gives $\Omega_{F_1/F_2}=0$. Differential localization and transitivity therefore make $F_1\otimes_{F_2}\Omega_{F_2/K}\to\Omega_{F_1/K}$ surjective. Translation identifies the cotangent bundle of a smooth group with the tensor of its identity cotangent and its structure sheaf: at a point $x$, translate by $x^{-1}$, with inverse translation by $x$; the group identities make these differential maps inverse. This construction commutes with group homomorphisms. Over $F_1$ the displayed map is consequently $f_K\otimes_KF_1$ between $g$-dimensional spaces. It is an isomorphism, and faithful field extension makes $f_K$ an isomorphism. [F1, F2, F3, given, algebra]

1.3 Let $\beta$ be a top-degree form on one target complex manifold. Use a finite smooth localization of its compact support subordinate to coordinate neighbourhoods that are evenly covered by the given covering. Such neighbourhoods may be shrunk inside covering charts; [F7] supplies the subordinate localization. On each of the $d$ sheets, the covering is an oriented diffeomorphism, so change of variables gives the integral of the localized pullback equal to the localized target integral. Its support in each sheet is compact because that sheet maps homeomorphically to the chart, so extension by zero is legitimate. Summing the $d$ sheets and the finite localization gives $\int_{A_1(\mathbb C)}\phi^*\beta=d\int_{A_2(\mathbb C)}\beta$. [F7, given, algebra]

2.1 A finite projective module is a direct summand of a finite free module, by splitting a finite free surjection. Thus $E_2$ is torsion-free. Since $f_K$ is injective, $f$ is injective. Its cokernel $M$ is finitely generated as a quotient of $E_1$, and $M\otimes_RK=0$. Each member of a finite generating set is killed by a nonzero element of $R$; the product $a\ne0$ kills $M$. It is a quotient of $(R/aR)^n$, so [F4] makes $M$ finite. [F4, F5, step 1.1, step 1.2, given, algebra]

2.2 Fix a nonzero prime $\mathfrak p$ of $R$. Over the DVR $S=R_{\mathfrak p}$, lift a basis of $E_i/\mathfrak p E_i$ after localization. Nakayama makes the resulting map $S^r\to(E_i)_{\mathfrak p}$ surjective. Projectivity splits it; its kernel is finite since $S$ is Noetherian, and reducing the splitting modulo the maximal ideal gives zero kernel modulo that ideal. Nakayama makes the kernel zero. Tensoring with $K$ gives $r=g$. In these bases $f_{\mathfrak p}$ is a square matrix with nonzero determinant. [A1, F4, F5, step 1.2, given, algebra]

2.3 Apply this to $\beta=\alpha\wedge\overline\alpha$. Pullback preserves the wedge by [F8] and commutes with conjugation because it is defined by the real differential; the supplied form identification identifies its pullback with $\det(f)\alpha$. The positive metric formula gives $\|\det(f)u\|_v^2=d\|u\|_v^2$. For $g=0$, compact connected complex zero-manifolds are points, so the supplied covering has $d=1$ and the same computation is integration of a zero-form at a point. [F8, step 1.3, given, algebra]

3.1 If $g=0$, both localized modules and both cokernels are zero, so their lengths agree. For $g>0$, choose a nonzero matrix entry of least valuation, put it first by row and column swaps, and multiply a row by a unit to make it a uniformizer power. It divides every entry; elementary row and column operations clear its column and row. Induction diagonalizes the remaining block, giving entries $\pi^{a_j}$ up to units. Thus the length of $M_{\mathfrak p}$ is $\sum_j a_j$, equal to the valuation of the determinant and to the length of the localized determinant cokernel $D=\operatorname{coker}(\det f)$. Exterior powers commute with localization by their tensor-quotient construction. [F4, step 2.2, given, algebra]

4.1 The top exterior powers $\omega_i$ are finite projective rank-one modules: splitting the finite free surjection in step 2.1 supplies a finite projective complement $Q_i$ with $E_i\oplus Q_i\cong R^N$. The exterior-power decomposition of this direct sum exhibits $\bigwedge^g E_i$ as a summand of the finite free module $\bigwedge^g R^N$. The map $\det f$ is generically invertible and hence injective, with finitely generated torsion cokernel $D$. The annihilator argument of step 2.1 makes $D$ finite. Every finite $R$-module has a finite composition series, by successively taking a maximal proper submodule of the finite underlying set. A simple factor is $R/\mathfrak p$; localization kills it except at that maximal ideal, where its length is one. Counting factors therefore gives $\#D=\prod_{\mathfrak p}\#(R/\mathfrak p)^{\operatorname{length}D_{\mathfrak p}}=\#M$ by step 3.1. [F4, F5, step 2.1, step 3.1, given, algebra]

5.1 For $0\ne u\in\omega_2$, injectivity of $\det f$ gives the short exact sequence $0\to\omega_2/Ru\to\omega_1/R\det(f)u\to D\to0$. The first two quotients are finite by the same finite torsion argument. Multiplying cardinalities proves the stated index formula. If $g=0$, both $E_i$ are zero, $M=0$, and $\det f:R\to R$ is the identity; the same formula holds. [step 2.1, step 4.1, given, algebra]

6.1 By [F6] compute both heights with $u$ and $\det(f)u$. Step 5.1 multiplies the finite numerator by $\#M$, and step 2.3 multiplies the archimedean denominator by $d^{\sum_v\epsilon_v/2}=d^{[K:\mathbb Q]/2}$. Hence $H_R(\omega_1)=\#M\,H_R(\omega_2)/d^{[K:\mathbb Q]/2}$. Taking logarithms and dividing by $[K:\mathbb Q]$ proves the formula. No assertion identifying these module heights with stable heights or asserting existence of the supplied models or coverings has entered the proof. [F6, step 5.1, step 2.3, given, algebra] ∎
