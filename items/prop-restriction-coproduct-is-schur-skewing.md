---
id: prop-restriction-coproduct-is-schur-skewing
kind: proposition
title: "The restriction coproduct is Schur skewing"
status: draft
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
dependency_level: 2
deps:
  - def-graded-ordinary-representation-ring-of-symmetric-groups
  - def-restriction-coproduct-on-the-graded-symmetric-group-character-ring
  - def-stable-graded-ring-of-symmetric-functions
  - def-skew-schur-function-by-hall-adjointness
  - def-littlewood-richardson-tableau-and-coefficient
  - lem-character-ring-of-a-direct-product-is-the-tensor-product
  - cor-frobenius-reciprocity-for-complex-characters
  - thm-outer-littlewood-richardson-rule
  - thm-irreducible-complex-characters-form-an-orthonormal-basis-of-the-class-functions
  - thm-frobenius-characteristic-sends-specht-characters-to-schur-functions
  - thm-littlewood-richardson-schur-product-expansion
  - thm-schur-functions-form-an-orthonormal-integral-basis
  - thm-tensor-product-basis-from-bases
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: "I. G. Macdonald, Symmetric Functions and Hall Polynomials, 2nd ed., Oxford Mathematical Monographs, 1995"
      url: "https://math.berkeley.edu/~corteel/MATH249/macdonald.pdf"
      locator: "Chapter I §7, Example 26, printed p. 134: the comultiplication corresponding under the characteristic map to the diagonal map on Λ, given by restriction to S_p×S_q; Chapter I §5, Example 25, printed pp. 91–93: the diagonal map on Λ. The complete restriction-character calculation is supplied locally from Frobenius reciprocity and the outer Littlewood–Richardson theorem."
    - title: "M. A. A. van Leeuwen, The Littlewood-Richardson rule, and related combinatorics"
      url: "https://arxiv.org/pdf/math/9908099"
      locator: "§§3.1–3.2, printed pp. 15–17: signature operations and their preservation of semistandard tableaux; the Schur product/skew Schur expansions are proved by the local item thm-littlewood-richardson-schur-product-expansion."
---

## Statement

Let $R_S=\bigoplus_{n\ge0}R(S_n)$ be the graded ordinary representation ring ([[def-graded-ordinary-representation-ring-of-symmetric-groups]]) and let $\Delta$ be its restriction coproduct using the ordered block embeddings $\iota_{a,b}:S_a\times S_b\to S_{a+b}$ and components $\Delta_{a,b}$ ([[def-restriction-coproduct-on-the-graded-symmetric-group-character-ring]]). Let $\operatorname{ch}:R_S\to\Lambda$ be the degreewise Frobenius characteristic, which sends $\chi^\lambda$ to $s_\lambda$ and maps the irreducible-character basis to the Schur basis ([[thm-frobenius-characteristic-sends-specht-characters-to-schur-functions]]). Define the $\mathbb Z$-linear map $\Delta_\Lambda:\Lambda\to\Lambda\otimes_{\mathbb Z}\Lambda$ on the Schur basis by

$$\Delta_\Lambda(s_\lambda):=\sum_{\mu\subseteq\lambda}s_\mu\otimes s_{\lambda/\mu},$$

where $s_{\lambda/\mu}$ is the skew Schur function ([[def-skew-schur-function-by-hall-adjointness]]). This defines a map because the Schur functions form a $\mathbb Z$-basis degree by degree ([[thm-schur-functions-form-an-orthonormal-integral-basis]]) and each displayed sum is finite. Then

$$(\operatorname{ch}\otimes\operatorname{ch})\,\Delta(f)=\Delta_\Lambda(\operatorname{ch}(f))\qquad(f\in R_S).$$

Equivalently, for every $\lambda\vdash n$ and $a+b=n$,

$$\iota_{a,b}^{*}\!\left(\operatorname{Res}^{S_n}_{H_{a,b}}\chi^\lambda\right)=\sum_{\substack{\mu\vdash a\\\nu\vdash b}}c^\lambda_{\mu\nu}\,\chi^\mu\boxtimes\chi^\nu,$$

where $H_{a,b}=\iota_{a,b}(S_a\times S_b)$ and $c^\lambda_{\mu\nu}$ is the Littlewood–Richardson coefficient ([[def-littlewood-richardson-tableau-and-coefficient]]). In particular, $c^\lambda_{\mu\nu}=0$ unless $\mu\subseteq\lambda$ and $|\lambda|=|\mu|+|\nu|$. No choice principle is used.

## Facts & Assumptions

**Given:** A partition $\lambda\vdash n$, the graded character ring $R_S$, the ordered block restriction coproduct, and the Frobenius characteristic.

[F1] $R_S=\bigoplus_{n\ge0}R(S_n)$ is an algebraic direct sum; each $R(S_n)$ is the integral span of its irreducible characters, so every element has finite degree support ([[def-graded-ordinary-representation-ring-of-symmetric-groups]]).

[F2] For $a+b=n$, $\Delta_{a,b}(f)$ is the unique tensor whose image under the external-product isomorphism $\Phi_{a,b}:R(S_a)\otimes R(S_b)\to R(S_a\times S_b)$ is the restriction of $f$ to $H_{a,b}$ pulled back along $\iota_{a,b}$; the endpoints are $\Delta_{0,n}(f)=\mathbf1\otimes f$ and $\Delta_{n,0}(f)=f\otimes\mathbf1$ ([[def-restriction-coproduct-on-the-graded-symmetric-group-character-ring]]).

[F3] The characters $\chi^\mu\boxtimes\chi^\nu$, for irreducible characters of the two factors, form an orthonormal $\mathbb Z$-basis of $R(S_a\times S_b)$ ([[lem-character-ring-of-a-direct-product-is-the-tensor-product]]).

[F4] For a finite group $G$ and subgroup $H$, $\langle\operatorname{Ind}_H^G\alpha,\beta\rangle_G=\langle\alpha,\operatorname{Res}_H^G\beta\rangle_H$ for complex characters $\alpha,\beta$ ([[cor-frobenius-reciprocity-for-complex-characters]]).

[F5] The induced character from the external product satisfies $\chi^\mu\circ\chi^\nu=\sum_{\rho\vdash a+b}c^\rho_{\mu\nu}\chi^\rho$, and the multiplicity of $\chi^\rho$ is $c^\rho_{\mu\nu}$ ([[thm-outer-littlewood-richardson-rule]]).

[F6] The irreducible complex characters of every finite group form an orthonormal basis of its class functions ([[thm-irreducible-complex-characters-form-an-orthonormal-basis-of-the-class-functions]]).

[F7] For each $n$, $\operatorname{ch}$ maps the $\mathbb Z$-basis $\{\chi^\lambda:\lambda\vdash n\}$ of $R(S_n)$ bijectively to the $\mathbb Z$-basis $\{s_\lambda:\lambda\vdash n\}$ of $\Lambda^n$ ([[thm-frobenius-characteristic-sends-specht-characters-to-schur-functions]]).

[F8] $c^\lambda_{\mu\nu}$ is zero unless $\mu\subseteq\lambda$ and $|\lambda|=|\mu|+|\nu|$; for the empty factor, $c^\lambda_{\lambda,\varnothing}=c^\lambda_{\varnothing,\lambda}=1$ ([[def-littlewood-richardson-tableau-and-coefficient]]).

[F9] The skew Schur expansion is $s_{\lambda/\mu}=\sum_\nu c^\lambda_{\mu\nu}s_\nu$ when $\mu\subseteq\lambda$, and the Schur product expansion has the same coefficients ([[thm-littlewood-richardson-schur-product-expansion]]).

[F10] The stable Schur functions form a $\mathbb Z$-basis in each homogeneous component, with $s_\varnothing=1$ ([[thm-schur-functions-form-an-orthonormal-integral-basis]]).

[F11] $\Lambda=\bigoplus_{d\ge0}\Lambda^d$ is the algebraic graded direct sum, so its elements have finite degree support ([[def-stable-graded-ring-of-symmetric-functions]]).

[F12] If two free modules have bases $(e_i)$ and $(f_j)$, the tensors $(e_i\otimes f_j)$ form a basis of their tensor product, including empty basis cases ([[thm-tensor-product-basis-from-bases]]).

[F13] $s_{\lambda/\mu}$ denotes the skew Schur function defined using the Hall adjointness pairing; it is homogeneous of degree $|\lambda|-|\mu|$ when this is nonnegative ([[def-skew-schur-function-by-hall-adjointness]]).

## Proof

**Proof technique:** direct.

1.1 For each partition $\lambda$, the set of subpartitions $\mu\subseteq\lambda$ is finite, so the displayed sum defining $\Delta_\Lambda(s_\lambda)$ is an element of $\Lambda\otimes\Lambda$. The degreewise Schur basis [F10] and the direct-sum grading [F11] give a unique $\mathbb Z$-linear extension to all of $\Lambda$. By the skew expansion [F9], the support condition [F8], and the definition of the skew Schur function [F13], this extension has the finite coefficient form $\Delta_\Lambda(s_\lambda)=\sum_{a+b=|\lambda|}\sum_{\mu\vdash a,\,\nu\vdash b}c^\lambda_{\mu\nu}s_\mu\otimes s_\nu$. [F8, F9, F10, F11, F13, algebra]

1.2 Fix $\lambda\vdash n$ and $a+b=n$, and let $\theta=\iota_{a,b}^{*}(\operatorname{Res}^{S_n}_{H_{a,b}}\chi^\lambda)\in R(S_a\times S_b)$, as in [F2]. By [F3], this honest character is a nonnegative integral sum of the orthonormal external-product basis characters. Thus the coefficient of $\chi^\mu\boxtimes\chi^\nu$ in $\theta$ is $\langle\chi^\mu\boxtimes\chi^\nu,\theta\rangle_{S_a\times S_b}$, because that coefficient is an integer and the basis is orthonormal. [F2, F3, given]

2.1 Frobenius reciprocity [F4] identifies that coefficient with $\langle\operatorname{Ind}^{S_n}_{H_{a,b}}((\chi^\mu\boxtimes\chi^\nu)\circ\iota_{a,b}^{-1}),\chi^\lambda\rangle_{S_n}$. Under the explicit ordered-block identification in [F2], this induced character is the outer product from [F5]; the zero-based to one-based relabeling required by its definition is checked in the proof of [F5]. By [F5] and orthonormality [F6], the inner product is exactly $c^\lambda_{\mu\nu}$. [F2, F4, F5, F6, step 1.2]

3.1 Since the external products form a basis by [F3], the coefficient calculation in step 2.1 gives $\iota_{a,b}^{*}(\operatorname{Res}^{S_n}_{H_{a,b}}\chi^\lambda)=\sum_{\mu\vdash a,\,\nu\vdash b}c^\lambda_{\mu\nu}\chi^\mu\boxtimes\chi^\nu$. Applying $\Phi_{a,b}^{-1}$ as in [F2] yields $\Delta_{a,b}(\chi^\lambda)=\sum_{\mu,\nu}c^\lambda_{\mu\nu}\chi^\mu\otimes\chi^\nu$. [F2, F3, step 2.1]

4.1 Applying $\operatorname{ch}\otimes\operatorname{ch}$ to the component formula in step 3.1 and using [F7] gives $\sum_{a+b=n}\sum_{\mu\vdash a,\nu\vdash b}c^\lambda_{\mu\nu}s_\mu\otimes s_\nu$. By [F9] and the definition [F13], this is $\sum_{\mu\subseteq\lambda}s_\mu\otimes s_{\lambda/\mu}=\Delta_\Lambda(s_\lambda)$, using step 1.1. Thus the characteristic identity holds for each $\chi^\lambda$. [F7, F9, F13, step 1.1, step 3.1]

5.1 Conversely, [F1], [F7], [F10], [F11], and [F12] show that $\operatorname{ch}\otimes\operatorname{ch}:R_S\otimes R_S\to\Lambda\otimes\Lambda$ is an isomorphism: it sends the basis tensors $\chi^\mu\otimes\chi^\nu$ bijectively to $s_\mu\otimes s_\nu$. Hence the characteristic identity for $\chi^\lambda$ determines each bidegree component uniquely. Applying the inverse tensor basis map and then $\Phi_{a,b}$ from [F2] recovers the restriction formula in the Statement. This proves the reverse implication in the stated equivalence. [F1, F2, F7, F10, F11, F12, step 3.1, step 4.1]

6.1 Every element of $R_S$ is a finite integral linear combination of the basis characters by [F1] and [F7], and both coproducts and the characteristic map are $\mathbb Z$-linear, so the identity extends to every $f\in R_S$. For $\lambda=\varnothing$ the only term is $1\otimes1$; when $a=0$ or $b=0$, the empty-factor coefficient in [F8] is one and [F2] gives the endpoint identity. Coefficients outside $\mu\subseteq\lambda$ or the required sizes vanish by [F8]. All sums and basis expansions are finite, so no choice principle is used. [F1, F2, F7, F8, step 1.1, step 4.1] ∎
