---
id: def-nondegenerate-root-of-unity-level-one-hecke-regime
kind: definition
title: "The nondegenerate root-of-unity level-one Hecke regime"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 33
deps: [def-affine-and-cyclotomic-type-a-hecke-algebras,
       def-type-a-cyclotomic-specialization-of-the-qg-klr-algebras,
       def-quantum-characteristic-of-an-invertible-hecke-parameter,
       def-residue-sequence-idempotents-and-cyclotomic-hecke-blocks,
       prop-cyclotomic-hecke-algebras-of-level-one-are-finite-hecke-algebras,
       def-symmetric-group-level-one-residue-and-partition-label-convention,
       def-cyclic-affine-type-a-cartan-datum,
       def-klr-grading-and-diagrammatic-composition,
       cor-cyclotomic-hecke-blocks-inherit-a-nontrivial-z-grading,
       def-cyclotomic-klr-quotient-at-a-dominant-weight,
       thm-brundan-kleshchev-blockwise-hecke-klr-isomorphism,
       lem-dj-bridge-sign-automorphism-and-star-dual,
       thm-dj-bridge-ordinary-specht-is-the-signed-conjugate-murphy-cell,
       cor-dj-bridge-specialization-and-composition-multiplicity-dictionary]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Jonathan Brundan and Alexander Kleshchev, Graded decomposition numbers for cyclotomic Hecke algebras, arXiv:0901.4450v3, Adv. Math. 222 (2009) 1883-1942 (complete 57-page article)"
      url: "https://arxiv.org/pdf/0901.4450"
      locator: "Section 4.1-4.5, printed pp. 30-34: cyclotomic quotient, Hecke block, Theorem 4.1 and the Hecke-KLR relations (4.10); Section 2.4-2.10, printed pp. 6-10: graded module categories and duality conventions. Complete passages read."
    - title: "Susumu Ariki, On the decomposition numbers of the Hecke algebra of G(m,1,n), J. Math. Kyoto Univ. 36 (1996) 789-808"
      url: "https://projecteuclid.org/journals/journal-of-mathematics-of-kyoto-university/volume-36/issue-4/On-the-decomposition-numbers-of-the-Hecke-algebra-of-Gm/10.1215/kjm/1250518452.pdf"
      locator: "Section 1 parameter dictionary and Theorem 4.4 (printed pp. 806-807), read in the recovered full-text extraction of pp. 789-808."
    - title: "Alexander Kleshchev, Representation theory of symmetric groups and related Hecke algebras, arXiv:0909.4844v1, Bull. Amer. Math. Soc. 47 (2010) 419-481 (complete 66-page survey)"
      url: "https://arxiv.org/pdf/0909.4844"
      locator: "Section 2, printed pp. 6-17: cyclotomic Hecke and KLR conventions, weight idempotents and blocks; Section 8.1-8.5, printed pp. 33-39: Fock space and canonical bases. Complete passages read."
verification:
  precheck: pass
---

## Definition

**Parameters.** Let $F$ be a field and $\xi\in F^\times$ with finite quantum
characteristic $e=e(F,\xi)\in\{2,3,\dots\}$
([[def-quantum-characteristic-of-an-invertible-hecke-parameter]]). We work in
the NONDEGENERATE branch $\xi\ne1$; then $\xi$ is a primitive $e$-th root of
unity in $F$, and all statements on this page live in one of the two
sub-branches: (C0) $\operatorname{char}F=0$, or (CP)
$\operatorname{char}F=p>0$ with $p\nmid e$. The Hecke parameter is written
$\xi$ here; it is the letter $q$ of `def-affine-and-cyclotomic-type-a-hecke-algebras`.

**Hecke side.** Fix the level-one fundamental weight $\Lambda_0$ of the cyclic
affine type-$A$ datum with all $d_i=1$ and charge $0$
([[def-cyclic-affine-type-a-cartan-datum]]). With the conventions of
`def-affine-and-cyclotomic-type-a-hecke-algebras`, $H^\Lambda_d=H_{F,\xi}(S_d)$
is the finite type-$A$ Hecke algebra $T_r^2=(\xi-1)T_r+\xi$
(`prop-cyclotomic-hecke-algebras-of-level-one-are-finite-hecke-algebras`), and
$H^\Lambda_\alpha=e_\alpha H^\Lambda_d$ are its residue-content blocks
(`def-residue-sequence-idempotents-and-cyclotomic-hecke-blocks`).

**KLR side.** Use the type-$A$ specialization $Q^A$ of
`def-type-a-cyclotomic-specialization-of-the-qg-klr-algebras` with the same $e$
and the STANDARD homogeneous first-strand cyclotomic quotient
$R^\Lambda_\alpha$ of [[def-cyclotomic-klr-quotient-at-a-dominant-weight]]: the
cyclotomic relation is $y_1^{\delta_{i_1,0}}e(i)=0$, induction appends on the
right, and the grading is $\deg e(i)=0$, $\deg y_r=2$,
$\deg\psi_re(i)=-a_{i_ri_{r+1}}$
([[def-klr-grading-and-diagrammatic-composition]]). The transported grading on
$H^\Lambda_\alpha$ uses a FIXED admissible local normalising series
(`cor-cyclotomic-hecke-blocks-inherit-a-nontrivial-z-grading`); a different
series gives a graded-isomorphic transported algebra via $\rho'\rho^{-1}$, and
the graded multiplicities studied below do not depend on the choice.

**Grading and Fock variables.** All grading shifts and all global-basis
polynomials are in the variable $q$, $A=\mathbb Z[q,q^{-1}]$. Thus
$\xi\in F^\times$ (the Hecke parameter) and $q$ (the grading variable) are
INDEPENDENT data; the phrase "Ariki's normalization $\xi=q^2$" is retained only
as the source dictionary of [Ariki 1996], whose Hecke parameters are powers of
a square, and no numerical relation or specialization between $\xi$ and $q$ is
imposed.

**Fock side.** Use the level-one symmetric model of
[[def-symmetric-group-level-one-residue-and-partition-label-convention]]: charge
$0$, node residues $c-r$, standard vectors $M_\mu$ for ALL partitions $\mu$,
basic/restricted labels the $e$-restricted partitions
$RP_\alpha=\{\lambda:\lambda_a-\lambda_{a+1}<e,\ \operatorname{cont}(\lambda)=\alpha\}$,
empty component $B(\Lambda_0)$. For $\lambda\in RP$ the conjugate $\lambda'$ is
$e$-regular. Write $P(\nu)$ for the independently constructed ordinary
Dipper--James Specht module and $D_{\rm DJ}^{\nu}$ for its form quotient in
`thm-dj-bridge-ordinary-specht-is-the-signed-conjugate-murphy-cell`. Define
$\theta(T_r)=(\xi-1)-T_r=-\xi T_r^{-1}$, the involutive sign automorphism of
[[lem-dj-bridge-sign-automorphism-and-star-dual]]. After converting right
modules to left modules through the star anti-involution, the intrinsic
restricted Murphy simple with label $\lambda$ is the $\theta$-pullback of
$D_{\rm DJ}^{\lambda'}$, not the untwisted ordinary module. This is an ungraded
convention dictionary. The pullback can move blocks: on the multiplicative
Jucys--Murphy elements $\theta(X_j)=X_j^{-1}$, so charge-zero residue content
is sent from $\alpha$ to $-\alpha$. Thus the ordinary module before pullback has
the conjugate content; no claim identifies it untwisted inside the same block.
At $\xi=1$ the separate specialization theorem
`cor-dj-bridge-specialization-and-composition-multiplicity-dictionary`
identifies $\theta$ with sign tensoring over every field; $\xi=1$ remains
outside the present nondegenerate regime.

No choice principle is used.

## Facts & Assumptions

**Given:** A field $F$, a parameter $\xi\in F^\times$ of finite quantum characteristic $e\in\{2,3,\dots\}$ with $\xi\ne1$, the level-one datum $(\Lambda_0,0)$ of the cyclic affine type-$A$ Cartan datum, the Hecke and KLR towers with their blocks, and the symmetric level-one Fock model.

[F1] The quantum characteristic $e(F,\xi)$ and the requirement that a finite quantum characteristic forces $\xi$ to be a primitive $e$-th root of unity in the nondegenerate branch are as declared in [[def-quantum-characteristic-of-an-invertible-hecke-parameter]].

[F2] The level-one cyclic affine type-$A$ datum has all $d_i=1$, charge $0$, and $(\Lambda_0,\alpha_i)=\langle\Lambda_0,h_i\rangle=\delta_{i,0}$ ([[def-cyclic-affine-type-a-cartan-datum]]).

[F3] The standard homogeneous cyclotomic quotient is the quotient of the KLR algebra by the first-strand cyclotomic ideal, with the diagrammatic grading $\deg e(i)=0$, $\deg y_r=2d_i$ and $\deg\psi_re(i)=-a_{i_ri_{r+1}}$ ([[def-cyclotomic-klr-quotient-at-a-dominant-weight]], [[def-klr-grading-and-diagrammatic-composition]]).

[F4] In the symmetric level-one model the node residues are $c-r$, the standard vectors $M_\mu$ are indexed by all partitions, the restricted labels are the $e$-restricted partitions of the given content and the empty component is the basic crystal $B(\Lambda_0)$ ([[def-symmetric-group-level-one-residue-and-partition-label-convention]]).

[F5] The sign automorphism $\theta(T_r)=(\xi-1)-T_r$ is an involution of the finite Hecke algebra and satisfies $\theta(X_j)=X_j^{-1}$ on the multiplicative Jucys--Murphy elements ([[lem-dj-bridge-sign-automorphism-and-star-dual]]).

[F6] The Hecke side is $H^\Lambda_d=H_{F,\xi}(S_d)$ (`prop-cyclotomic-hecke-algebras-of-level-one-are-finite-hecke-algebras`), whose residue-content blocks are the $e_\alpha H^\Lambda_d$ (`def-residue-sequence-idempotents-and-cyclotomic-hecke-blocks`); the blockwise KLR isomorphism and the inherited transported grading are `thm-brundan-kleshchev-blockwise-hecke-klr-isomorphism` and `cor-cyclotomic-hecke-blocks-inherit-a-nontrivial-z-grading`, and the ordinary Specht-form dictionary is `thm-dj-bridge-ordinary-specht-is-the-signed-conjugate-murphy-cell`.

## Proof

**Proof technique:** direct.

1.1 **The level-one cyclotomic relation.** By [F2], $(\Lambda_0,\alpha_i)=\delta_{i,0}$, so the cyclotomic polynomial of the level-one Hecke presentation is $\prod_i(X_1-\xi^i)^{(\Lambda_0,\alpha_i)}=X_1-1$ and the KLR first-strand cyclotomic relation is $y_1^{\delta_{i,0}}e(i)=0$ [F2, F3]. Consequently the level-one Hecke quotient is the finite type-$A$ Hecke algebra with $T_r^2=(\xi-1)T_r+\xi$ and its residue-content blocks are the $e_\alpha H^\Lambda_d$, as stated by the level-one finite-Hecke supplier [F6]. [F2, F3, F6]

1.2 **The two sub-branches.** By [F1] the given $\xi\ne1$ has multiplicative order $e$. In characteristic $p>0$, if $p\mid e$, then $X^e-1=(X^{e/p}-1)^p$ implies $\xi^{e/p}=1$, contradicting this order. Thus $p\nmid e$ follows from the stated parameter hypothesis. In characteristic zero no such restriction is needed; both branches use the primitive root already given in $F$. [F1, algebra]

1.3 **Grading and transport conventions.** The KLR degrees are $\deg e(i)=0$, $\deg y_r=2$ and $\deg\psi_re(i)=-a_{i_ri_{r+1}}$ in the type-$A$ specialization with all $d_i=1$ [F3]. Transporting along the blockwise KLR isomorphism and an admissible local normalising series gives each Hecke block a $\mathbb Z$-grading, nontrivial on the corollary's level-one $e=2$ rank-two sector and trivial on a one-dimensional block, and two admissible series differ by the graded automorphism $\rho'\rho^{-1}$, so all graded multiplicities below are independent of the choice [F6]. [F3, F6]

1.4 **The Fock conventions.** The symmetric model has charge $0$, residues $c-r$, standard vectors indexed by all partitions, restricted labels the $e$-restricted partitions $RP_\alpha$, and empty component $B(\Lambda_0)$; the conjugate of a restricted partition is $e$-regular [F4]. These are exactly the labels used by the global basis expansions of the page. [F4]

1.5 **The theta dictionary and content reflection.** The sign automorphism satisfies $\theta(T_r)=(\xi-1)-T_r=-\xi T_r^{-1}$ and is an involution [F5]. On the finite level-one tower the Jucys--Murphy elements are the palindromic words $X_j=\xi^{1-j}T_{j-1}\cdots T_1T_1\cdots T_{j-1}$; applying $\theta$ to this palindrome inverts the generators in reversed order, which reproduces the same palindrome inverted, and the $2j-2$ factors contribute $(-\xi)^{2j-2}=\xi^{2j-2}$, so $\theta(X_j)=X_j^{-1}$ exactly, the scalar $1$ being the product of the displayed factors [F5]. On a generalized eigenvector with $X_jv=\xi^iv$ one therefore has $X_j^{-1}v=\xi^{-i}v$, so pulling back along the involution $\theta$ reflects every residue $i$ to $-\xi$-power $i\mapsto-i$ and hence sends charge-zero content $\alpha$ to $-\alpha$; the ordinary module carries the conjugate content before pullback and is not identified untwisted in the same block [F5, F6]. [F5, F6]

2.1 **The ungraded convention dictionary and no choice.** After converting right modules to left modules through the star anti-involution, the intrinsic restricted Murphy simple with label $\lambda$ is the $\theta$-pullback of $D_{\rm DJ}^{\lambda'}$, by the ordinary Specht-form comparison of [F6]; the Laurent-unit form factor of that comparison preserves radicals, so it includes the zero-quotient case and the dictionary is stable under applying the involution twice [F6]. The parameter $\xi$ of the Hecke algebra and the grading variable $q$ are kept independent, and no numerical relation between them is imposed. Every clause of the definition is a convention or a finite computation, so no choice principle is used. [F5, F6, given] ∎
