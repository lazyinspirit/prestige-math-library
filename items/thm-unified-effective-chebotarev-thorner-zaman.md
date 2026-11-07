---
id: thm-unified-effective-chebotarev-thorner-zaman
kind: theorem
title: "Thorner–Zaman unified effective Chebotarev theorem"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 29
deps:
  - def-chebotarev-prime-ideal-counting-function
  - thm-thorner-zaman-exception-sensitive-hecke-zero-density
  - thm-smoothed-explicit-formula-for-abelian-chebotarev-prime-ideal-sums
  - thm-number-field-ray-class-field-artin-isomorphism
  - thm-conductor-discriminant-formula-for-abelian-extensions
  - lem-primitive-hecke-analytic-landau-page-family-core
  - lem-finite-convolution-chebotarev-smoothing-and-laplace-bounds
  - lem-uniform-hecke-contour-shift-and-infinite-smoothed-explicit-formula
  - lem-abelian-chebotarev-smoothed-relative-error-from-density
  - lem-chebotarev-unsmoothing-and-galois-subgroup-prime-transfer
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Jesse Thorner and Asif Zaman, A unified and improved Chebotarev density theorem"
      url: "https://msp.org/ant/2019/13-5/ant-v13-n5-p02-s.pdf"
      locator: "Theorem 1.4 and proof route in §§1–5, printed pp. 1039–1068; exceptional-sensitive zero density in Theorem 3.2."
    - title: "J. C. Lagarias and A. M. Odlyzko, Effective Versions of the Chebotarev Density Theorem"
      url: "https://aareyanmanzoor.github.io/assets/articles/lagarias-odlyzko.pdf"
      locator: "Theorems 1.1 and 1.3, printed pp. 409–464; comparison with the uniform Thorner–Zaman form."
    - title: "J. S. Milne, Class Field Theory, version 4.03"
      url: "https://www.jmilne.org/math/CourseNotes/CFT.pdf"
      locator: "Chapter VIII §7, Theorem 7.4 and Remark 7.5, printed pp. 259–260."
verification: {}
---

## Statement

Assume the Axiom of Choice, Countable Choice, and Dependent Choice. Let $L/F$ be a finite Galois extension of number fields with group $G$, and let $C\subseteq G$ be a conjugacy class. Let $H\le G$ be an abelian subgroup with $C\cap H\ne\varnothing$, let $K=L^H$ be its fixed field, and choose $g_C\in C\cap H$. Via Artin reciprocity, the characters $\chi\in\widehat H=\operatorname{Hom}(H,\mathbb C^\times)$ are finite-order Hecke characters of $K$; write $\mathfrak f_\chi$ for their finite conductor ideals and put $Q=\max_{\chi\in\widehat H}N_{K/\mathbb Q}\mathfrak f_\chi$, where $N_{K/\mathbb Q}$ is the absolute ideal norm, $D_K=|\operatorname{disc}(K/\mathbb Q)|$, and $n_K=[K:\mathbb Q]$. Assume $D_KQn_K^{n_K}>1$, so the displayed logarithms are defined. For $x>2$, put $\operatorname{Li}(x)=\int_2^x dt/\log t$ and let $\pi_C(x;L/F)$ count unramified nonzero prime ideals of $F$ by absolute norm and arithmetic Frobenius class. Here a Landau–Siegel zero means a zero in the common region $\operatorname{Re}s>1-\kappa/(\log(D_KQn_K^{n_K})+n_K\log3)$ with $\kappa=1/16{,}000{,}000$. There is at most one real $\chi_1\in\widehat H$ whose Hecke $L$-function has a Landau–Siegel zero
$$\beta_1=1-\frac{\lambda_1}{\log(D_KQn_K^{n_K})},\qquad 0<\lambda_1<\frac18.$$
If this zero exists, put $\theta_1=\chi_1(g_C)$; otherwise put $\theta_1=0$ and omit the $\operatorname{Li}(x^{\beta_1})$ term. There are absolute effectively computable constants $c_2,c_3>0$ such that, whenever $x\ge(D_KQn_K^{n_K})^{c_2}$,
$$\pi_C(x;L/F)=\frac{|C|}{|G|}\bigl(\operatorname{Li}(x)-\theta_1\operatorname{Li}(x^{\beta_1})\bigr)\left(1+O\!\left(\exp\!\left[-\frac{c_3\log x}{\log(D_KQn_K^{n_K})}\right]+\exp\!\left[-\frac{\sqrt{c_3\log x}}{\sqrt{n_K}}\right]\right)\right).$$
where $\pi_C(x;L/F)$ counts unramified nonzero prime ideals of $F$ by absolute norm and arithmetic Frobenius class.

## Statement references

[[def-chebotarev-prime-ideal-counting-function]]

[[thm-thorner-zaman-exception-sensitive-hecke-zero-density]]

[[thm-smoothed-explicit-formula-for-abelian-chebotarev-prime-ideal-sums]]

[[thm-number-field-ray-class-field-artin-isomorphism]]

[[thm-conductor-discriminant-formula-for-abelian-extensions]]

[Thorner and Zaman, Theorem 1.4](https://msp.org/ant/2019/13-5/ant-v13-n5-p02-s.pdf)

[Lagarias and Odlyzko, Theorems 1.1 and 1.3](https://aareyanmanzoor.github.io/assets/articles/lagarias-odlyzko.pdf)

[Milne, Class Field Theory, Chapter VIII §7](https://www.jmilne.org/math/CourseNotes/CFT.pdf)

## Remark

The stated subgroup form is the stronger Theorem 1.4 form. Taking $H=\langle g_C\rangle$ for an element $g_C\in C$ gives the cyclic-subgroup specialization used to recover the paper’s Theorem 1.1. As a group-theoretic quantity, $\theta_1$ may depend on the choice of $g_C$; when it is nonzero, the exceptional-zero condition makes its value well-defined.

## Remark references

[Thorner and Zaman, Theorem 1.1 and Theorem 1.4](https://msp.org/ant/2019/13-5/ant-v13-n5-p02-s.pdf)

[Thorner and Zaman, Remark 1.5](https://msp.org/ant/2019/13-5/ant-v13-n5-p02-s.pdf)

## Facts & Assumptions

**Given:** The full Galois extension, conjugacy class, abelian subgroup, chosen element, associated conductor family and the original AC/CC/DC hypotheses.

[F1] For the given abelian extension $L/K$, the locally proved common-region theorem designates its possible real simple exceptional occurrence $\beta_1$ in the explicit strip $\beta_1>1-\kappa/(\log A+n_K\log3)$ with $\kappa=1/16{,}000{,}000$. This is the Landau–Siegel exceptional occurrence used in the source's Theorem 3.1 and Theorem 1.4; the displayed $1/8$ is its consequent upper bound on $\lambda_1$, not a claim that every real zero in that wider numerical strip is unique. Its associated primitive character is real. The exact exception-sensitive zero density excludes just that occurrence and gives the stated relative factor. [[lem-primitive-hecke-analytic-landau-page-family-core]] [[thm-thorner-zaman-exception-sensitive-hecke-zero-density]]

[F2] Finite convolution constructs the nonnegative plateau weight and its exact Laplace transform. The primitive-Hecke contour identity and the full local zero summation prove the abelian smoothed estimate with a relative error, including the exceptional term and effective lower bound for its main term. [[lem-finite-convolution-chebotarev-smoothing-and-laplace-bounds]] [[lem-uniform-hecke-contour-shift-and-infinite-smoothed-explicit-formula]] [[lem-abelian-chebotarev-smoothed-relative-error-from-density]]

[F3] The locally proved unsmoothing and subgroup transfer lemma gives the abelian unweighted count and the finite Galois prime-orbit comparison with an effective polynomial-in-$A$ error. [[lem-chebotarev-unsmoothing-and-galois-subgroup-prime-transfer]]

[A1] Retain AC, CC and DC at the exact scopes of the cited arithmetic and analytic constructions. [[def-axiom-of-choice]] [[def-countable-choice]] [[def-dependent-choice]]

## Proof
1.1 Let $A=D_KQn_K^{n_K}>1$. The group $H$ is abelian, so the associated extension $L/K$ and its finite primitive Hecke family meet [F1]–[F3] with $h=|H|$. The designated exceptional occurrence, if present, is unique in the explicit common region and has real character $\chi_1$; its $\lambda_1=(1-\beta_1)\log A$ is positive and less than $1/8$. Its value at the prescribed $g_C$ is the original $\theta_1$; when absent the original no-exception convention applies. This is exactly the source's technical exceptional-zero designation; no uniqueness claim for the larger $1/8$ strip follows or is needed. [A1, F1, given, algebra]

2.1 Apply [F3] to $g_C\in H$. The abelian prime count has main term $\operatorname{Li}(x)-\theta_1\operatorname{Li}(x^{\beta_1})$ and relative error bounded by the two displayed decays, after changing absolute effective constants. This invokes the locally proved finite convolution, quantitative primitive contour, exception-sensitive density and zero-sum argument in [F2]–[F3]; no unproved sharp Stark bound or imported Chebotarev theorem is used. [F2, F3, step 1.1, algebra]

3.1 The same [F3] compares that abelian count to $\pi_C(x;L/F)$ by an explicit degree-one prime-orbit count and a polynomial-in-$A$ error for higher residue degrees and ramified primes. Its proof bounds that error relative to the exceptional main term using the proved weak real-zero gap; increasing the absolute lower-range constant and decreasing the absolute decay constant absorbs it. Multiplying by $|C|/|G|$ yields exactly the original formula, uniformly for all allowed groups, classes, fields, characters, signs, and $x$. With no exceptional zero, the omitted term and $\theta_1=0$ give the same conclusion. All constants remain absolute and effective. [F1, F3, step 1.1, step 2.1, algebra] ∎
