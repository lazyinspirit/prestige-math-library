---
dependency_level: 0
id: lem-polymath8b-l2-marginal-is-well-defined
kind: lemma
title: "An $L^2$ function supported on an enlarged simplex has well-defined $L^2$ marginals"
status: draft
origin: pipeline
proof_strategy: direct
deps:
  - def-countable-choice
  - thm-lebesgue-measure-is-a-complete-measure
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - def-borel-and-lebesgue-measurable-function-on-rn
  - def-integrable-real-and-complex-functions-and-their-integrals
  - thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - thm-tonelli-and-fubini-for-completed-product-measures
  - thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets
  - cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure
  - thm-lebesgue-measure-of-a-box-of-every-kind
  - thm-borel-products-of-euclidean-spaces-are-euclidean-borel
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "D. H. J. Polymath, ‘Variants of the Selberg sieve, and bounded intervals containing many primes’ (2014), arXiv v4"
      url: "https://arxiv.org/pdf/1407.4897v4"
---

## Statement

Assume Countable Choice and use complete Lebesgue measure. Let $k\ge2$, $0<\epsilon<1$, and
$$D_{k,\epsilon}:=\{(t_1,\ldots,t_k)\in[0,\infty)^k:t_1+\cdots+t_k\le1+\epsilon\}.$$
If $F$ is a real Lebesgue-measurable function, $F=0$ almost everywhere outside $D_{k,\epsilon}$, and $\int_{\mathbb R^k}|F|^2\,d\lambda_k<\infty$, then for every $i$ there is a measurable function $G_{F,i}$, unique up to equality outside a Lebesgue-null set, such that
$$G_{F,i}(t_{-i})=\int_0^\infty F(t_1,\ldots,t_k)\,dt_i$$
for almost every section where the integral is defined, and
$$\int_{\mathbb R^{k-1}}|G_{F,i}(t_{-i})|^2\,d\lambda_{k-1}(t_{-i})\le(1+\epsilon)\int_{\mathbb R^k}|F|^2\,d\lambda_k.$$
Here “almost everywhere” means outside a set of Lebesgue measure zero.


## Statement references

[[thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz|Cauchy–Schwarz for $L^2$ functions]]

[[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces|Fubini for $L^1$ functions]]

[[def-countable-choice|Countable Choice]]

[[thm-lebesgue-measure-is-a-complete-measure|Completeness of Lebesgue measure under Countable Choice]]


## Facts & Assumptions

**Given:** $k\ge2$, $0<\epsilon<1$, and a real Lebesgue-measurable $F$ vanishing almost everywhere outside $D_{k,\epsilon}$ with finite square integral.

[F1] The $L^2$ pairing satisfies $|\int f\overline g|\le\|f\|_2\|g\|_2$ on every measure space ([[thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz]]).

[F2] For an $L^1$ function on a sigma-finite product, almost every section is $L^1$ and the section-integral functions give the product integral ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]).

[F3] $\lambda_k$ is Lebesgue measure on $\mathcal L(\mathbb R^k)$ ([[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]]).

[F4] A real Lebesgue-measurable function is measurable from the Lebesgue sigma-algebra to the Borel sigma-algebra ([[def-borel-and-lebesgue-measurable-function-on-rn]]).

[F5] A measurable real function is integrable when $\int|f|$ is finite ([[def-integrable-real-and-complex-functions-and-their-integrals]]).

[A1] Countable Choice supplies a choice function for every sequence of nonempty sets ([[def-countable-choice]]); the complete Lebesgue-measure theorem explicitly assumes this axiom ([[thm-lebesgue-measure-is-a-complete-measure]]).

[F6] [[thm-tonelli-and-fubini-for-completed-product-measures]]: under Countable Choice, an integrable function on the completed product of sigma-finite measure spaces has integrable sections outside null sets, measurable zero-completed section integrals, and equal iterated and completed-product integrals.

[F7] [[thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets]]: under Countable Choice, Euclidean product Lebesgue measure agrees with Euclidean Lebesgue measure on Borel sets.

[F8] [[cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure]]: under Countable Choice, Euclidean Lebesgue measure is precisely the completion of its Borel restriction.

[F9] [[thm-lebesgue-measure-of-a-box-of-every-kind]]: under Countable Choice, a bounded Euclidean box has measure equal to the product of its side lengths.

[F10] [[thm-borel-products-of-euclidean-spaces-are-euclidean-borel]]: the product of the two Euclidean Borel sigma-algebras is the Euclidean Borel sigma-algebra on the product.

[F11] [[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]]: sigma-finite product measure has the rectangle formula and is the unique measure on the product sigma-algebra with that formula.

## Proof

**Proof technique:** direct.

1.1 Fix $i$, and let $\beta_{k-1}$ and $\beta_1$ be the Borel restrictions of the corresponding Euclidean Lebesgue measures. They are sigma-finite by [F9]. By [F10] their product sigma-algebra is the Euclidean Borel sigma-algebra. The rectangle formula in [F11] and Borel agreement in [F7] give $\beta_k(A\times B)=\beta_{k-1}(A)\beta_1(B)$ for Borel rectangles; uniqueness in [F11] therefore identifies their product with the Borel restriction $\beta_k$ of Euclidean Lebesgue measure. By [F8], its completion is exactly $(\mathbb R^k,\mathcal L(\mathbb R^k),\lambda_k)$; the factor completions are the two factor Lebesgue spaces. Consequently [F6] applies to Euclidean Lebesgue-measurable integrands, with completed sections and the Euclidean integrals used here. Permuting coordinates makes this valid for every $i$. [F3, F6, F7, F8, F9, F10, F11, A1, given, construct]

1.2 The set $D_{k,\epsilon}$ is contained in $[0,1+\epsilon]^k$, which has finite measure by [F9]. Cauchy–Schwarz [F1], applied to $|F|$ and the indicator of $D_{k,\epsilon}$, gives $\int|F|\le\lambda_k(D_{k,\epsilon})^{1/2}(\int|F|^2)^{1/2}<\infty$; the almost-everywhere support condition permits this replacement in the integral. Thus $F\in L^1$; also $|F|^2\in L^1$. [given, F1, F3, F4, F5, F9, A1, algebra]

2.1 Apply [F6], using step 1.1, to $F$ and to $|F|^2$, which are integrable by step 1.2. For almost every $t_{-i}$ the section of $F$ is integrable and the section integral is measurable; define $G_{F,i}=0$ on the exceptional null set. If two representatives agree almost everywhere on the product, their difference is zero almost everywhere and the same completed-product theorem makes their section integrals equal almost everywhere. This gives a unique marginal class; [A1] supplies the complete-measure convention for null modifications. [given, F3, F4, F5, F6, A1, step 1.1, step 1.2, construct]

3.1 The almost-everywhere support condition also holds on almost every section: apply [F6] to the indicator of the null measurable set where $F$ is nonzero outside $D_{k,\epsilon}$. Therefore for almost every $t_{-i}$ the section vanishes outside an interval of length at most $1+\epsilon$. Cauchy–Schwarz [F1] on that interval gives $|G_{F,i}(t_{-i})|^2\le(1+\epsilon)\int_0^{1+\epsilon}|F(t)|^2\,dt_i$. Integrating over $t_{-i}$ and applying [F6] to $|F|^2$ yields the stated bound, so $G_{F,i}\in L^2(\mathbb R^{k-1})$. [given, F1, F3, F4, F5, F6, A1, step 1.1, step 2.1, algebra] ∎
