---
id: ex-chebotarev-abelian-extension
kind: example
title: "Effective Chebotarev in a ray-class field"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 30
deps:
  - def-chebotarev-prime-ideal-counting-function
  - thm-unified-effective-chebotarev-thorner-zaman
  - thm-number-field-ray-class-field-artin-isomorphism
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
proof_strategy: direct
axiom_use: >-
  AC, Countable Choice, and DC are inherited from the ray-class Artin and
  Thorner–Zaman suppliers. The singleton-class substitution uses only finite
  group facts.
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Jesse Thorner and Asif Zaman, A unified and improved Chebotarev density theorem"
      url: "https://msp.org/ant/2019/13-5/ant-v13-n5-p02-s.pdf"
      locator: "Theorem 1.4, printed pp. 1042–1043."
verification: {}
---

## Example

Assume the Axiom of Choice, Countable Choice, and Dependent Choice. Let $K$ be a number field, let $\mathfrak m$ be a modulus consisting of a nonzero integral ideal and a specified set of real places, and let $K_{\mathfrak m}/K$ be its ray class field. Write $\operatorname{Cl}_{\mathfrak m}(K)$ for the associated finite ray class group, let $h=|\operatorname{Cl}_{\mathfrak m}(K)|$, and let $g_a\in\operatorname{Gal}(K_{\mathfrak m}/K)$ be the arithmetic Artin image of a class $a\in\operatorname{Cl}_{\mathfrak m}(K)$. Put $D_K=|\operatorname{disc}(K/\mathbb Q)|$, $n_K=[K:\mathbb Q]$, and $Q_{\mathfrak m}=\max_{\chi\in\widehat{\operatorname{Cl}_{\mathfrak m}(K)}}N_{K/\mathbb Q}\mathfrak f_\chi$, where $\mathfrak f_\chi$ is the finite conductor ideal of the associated Hecke character and $N_{K/\mathbb Q}$ denotes absolute ideal norm. Assume $D_KQ_{\mathfrak m}n_K^{n_K}>1$. Here a Landau–Siegel zero means a zero in the common region $\operatorname{Re}s>1-\kappa/(\log(D_KQ_{\mathfrak m}n_K^{n_K})+n_K\log3)$ with $\kappa=1/16{,}000{,}000$. There is at most one real $\chi_1\in\widehat{\operatorname{Cl}_{\mathfrak m}(K)}$ whose Hecke $L$-function has a Landau–Siegel zero $\beta_1=1-\lambda_1/\log(D_KQ_{\mathfrak m}n_K^{n_K})$ with $0<\lambda_1<1/8$. Set $\theta_a=\chi_1(g_a)$ if this zero exists and $\theta_a=0$ otherwise. For $x>2$, put $\operatorname{Li}(x)=\int_2^xdt/\log t$ and let $\pi_{\{g_a\}}(x;K_{\mathfrak m}/K)$ count unramified nonzero prime ideals of $K$ by absolute norm and arithmetic Frobenius element $g_a$. For $x\ge(D_KQ_{\mathfrak m}n_K^{n_K})^{c_2}$, where $c_2,c_3>0$ are the absolute effective constants from the Thorner–Zaman theorem, these primes satisfy
$$\pi_{\{g_a\}}(x;K_{\mathfrak m}/K)=\frac1h\bigl(\operatorname{Li}(x)-\theta_a\operatorname{Li}(x^{\beta_1})\bigr)\left(1+O\!\left(\exp\!\left[-\frac{c_3\log x}{\log(D_KQ_{\mathfrak m}n_K^{n_K})}\right]+\exp\!\left[-\frac{\sqrt{c_3\log x}}{\sqrt{n_K}}\right]\right)\right),$$
with the exceptional-zero term omitted when there is no $\beta_1$.

## Example references

[[def-chebotarev-prime-ideal-counting-function]]

[[thm-unified-effective-chebotarev-thorner-zaman]]

[[thm-number-field-ray-class-field-artin-isomorphism]]

[Thorner and Zaman, Theorem 1.4](https://msp.org/ant/2019/13-5/ant-v13-n5-p02-s.pdf)

## Facts & Assumptions

**Given:** the data in the Example.

[F1] [[thm-number-field-ray-class-field-artin-isomorphism]]: the ray class group is isomorphic by Artin reciprocity to $\operatorname{Gal}(K_{\mathfrak m}/K)$; the ray-class Artin isomorphism is now supplied at the stated choice scope.

[F2] [[thm-unified-effective-chebotarev-thorner-zaman]]: Theorem 1.4 applies when an abelian subgroup $H$ intersects the chosen conjugacy class; the staged local proof uses the explicitly designated common-region exceptional occurrence.

[F3] [[def-chebotarev-prime-ideal-counting-function]]: $\pi_{\{g_a\}}$ counts unramified prime ideals by absolute norm and arithmetic Frobenius class.

[A1] AC, Countable Choice, and Dependent Choice are inherited from [F1] and [F2]. [[def-axiom-of-choice]] [[def-countable-choice]] [[def-dependent-choice]]

## Verification

**Given:** the data in the Example.

1.1 By [F1], $G=\operatorname{Gal}(K_{\mathfrak m}/K)$ is isomorphic to the finite abelian group $\operatorname{Cl}_{\mathfrak m}(K)$, and the Artin image $g_a$ represents the chosen class. Take $H=G$ in the Thorner–Zaman theorem; its fixed field is $K_{\mathfrak m}^G=K$. Since $G$ is abelian, the singleton $\{g_a\}$ is a conjugacy class and $H\cap\{g_a\}\ne\varnothing$. [F1, given, algebra]

2.1 Apply [F2] with $L=K_{\mathfrak m}$, $F=K$, $H=G$, $C=\{g_a\}$, and $g_C=g_a$. Then $|C|/|G|=1/h$ and the maximum conductor norm is $Q_{\mathfrak m}$, giving exactly the formula in the Example. [F2, F3, step 1.1, given, algebra] ∎

## Readiness

The specialization is complete conditional on [F1] and the exact staged parent [F2]; its readiness must be recorded after the parent is installed and recorded.
