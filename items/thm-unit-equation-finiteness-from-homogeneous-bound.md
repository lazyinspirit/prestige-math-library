---
id: thm-unit-equation-finiteness-from-homogeneous-bound
kind: theorem
title: "Finiteness of the two-variable number-field unit equation from a homogeneous logarithmic bound"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 5
deps:
  - cor-effective-lower-bound-for-algebraic-unit-exponential-form
  - lem-fundamental-unit-exponents-bounded-by-logarithmic-house
  - thm-s-unit-theorem
  - def-fundamental-units
  - def-s-integers-and-s-units-of-a-number-field
  - def-number-field
  - def-archimedean-embeddings-and-number-field-signature
  - thm-product-formula-for-number-fields
  - def-axiom-of-choice
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jan-Hendrik Evertse, Diophantine Equations (2017 author notes), Theorem 5.12 proof"
      url: "https://pub.math.leidenuniv.nl/~evertsejh/dio17-5.pdf"
verification: {}
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice. Let $K$ be a number field and let $\alpha,\beta\in K^\times$. Then the set
$$\{(x,y)\in(\mathcal O_K^\times)^2:\alpha x+\beta y=1\}$$
is finite.

## Statement references

[[def-number-field]]

[[def-s-integers-and-s-units-of-a-number-field]]

[[thm-s-unit-theorem]]

[[def-fundamental-units]]

[[def-axiom-of-choice]]

[[cor-effective-lower-bound-for-algebraic-unit-exponential-form]]

[Evertse, *Diophantine Equations*, Chapter 5, Theorem 5.12 proof](https://pub.math.leidenuniv.nl/~evertsejh/dio17-5.pdf)

## Facts & Assumptions

**Given:** The Axiom of Choice, a number field $K$, nonzero $\alpha,\beta\in K$, and units $x,y\in\mathcal O_K^\times$ satisfying $\alpha x+\beta y=1$.

[A1] The unit-group structure and all fundamental-unit data are considered under the Axiom of Choice. ([[def-axiom-of-choice]], [[thm-s-unit-theorem]])

[F1] With $r=r_1+r_2-1$, every unit has a unique expression $\zeta\epsilon_1^{n_1}\cdots\epsilon_r^{n_r}$ with $\zeta\in\mu(K)$, and $\mu(K)$ is finite. ([[thm-s-unit-theorem]], [[def-fundamental-units]])

[F2] For a fixed fundamental-unit system there is $c_0>0$ such that $\max_j|n_j|\le c_0\log M(u)$, where $M(u)=\max_{\sigma:K\hookrightarrow\mathbb C}|\sigma(u)|$. ([[lem-fundamental-unit-exponents-bounded-by-logarithmic-house]])

[F3] For fixed nonzero algebraic numbers $\gamma_0,\ldots,\gamma_s$ and integers $c_0',\ldots,c_s'$ with $\prod_j\gamma_j^{c_j'}\ne1$, the homogeneous corollary gives an effective lower bound of the form $|\prod_j\gamma_j^{c_j'}-1|>\exp(-C[\log(B+2)]^2)$, where $B=\max_j|c_j'|$ and $C$ depends only on the fixed numbers and their number. ([[cor-effective-lower-bound-for-algebraic-unit-exponential-form]])

[F4] The product of $|\sigma(u)|$ over all $d=[K:\mathbb Q]$ embeddings is $1$ for every unit $u\in\mathcal O_K^\times$. ([[def-s-integers-and-s-units-of-a-number-field]], [[thm-product-formula-for-number-fields]])

## Proof


1.1 Put $r=r_1+r_2-1$. If $r=0$, [F1] makes the unit group finite, so the solution set is a subset of the finite set $\mu(K)^2$. Suppose $r>0$ and write any solution as $x=\zeta_1\prod_j\epsilon_j^{a_j}$ and $y=\zeta_2\prod_j\epsilon_j^{b_j}$ by [F1]. Set $B=\max_j(|a_j|,|b_j|)$. If $B=0$, only finitely many torsion pairs occur. If $B>0$, interchange $(\alpha,x)$ and $(\beta,y)$ if necessary so $\max_j|b_j|=B$. [A1, F1, given, algebra]

2.1 By [F2], $M(y)\ge\exp(B/c_0)$. There are finitely many embeddings, so choose $\sigma:K\hookrightarrow\mathbb C$ with $|\sigma(y)|$ minimal. Since $r>0$, one has $d\ge2$. Choose an embedding where the maximum $M(y)$ is attained. Every other modulus is at least $|\sigma(y)|$, so [F4] gives $1=\prod_{\tau}|\tau(y)|\ge M(y)|\sigma(y)|^{d-1}$. Hence $|\sigma(y)|\le\exp(-B/(c_0(d-1)))$. [F2, F4, step 1.1, choose]

2.2 The algebraic number $\sigma(\alpha x)=\sigma(\alpha\zeta_1)\prod_j\sigma(\epsilon_j)^{a_j}$ is not $1$, since $\sigma(\beta y)\ne0$. Apply [F3] to the fixed algebraic numbers $\sigma(\alpha\zeta_1),\sigma(\epsilon_1),\ldots,\sigma(\epsilon_r)$ with exponents $1,a_1,\ldots,a_r$. The maximum exponent is at most $B$ (as $B\ge1$). There are only finitely many embeddings and finitely many $\zeta_1\in\mu(K)$, so taking the maximum of their constants gives one $C_1>0$ with $|1-\sigma(\alpha x)|>\exp(-C_1[\log(B+2)]^2)$. [F1, F3, step 1.1, algebra]

3.1 The equation gives $|1-\sigma(\alpha x)|=|\sigma(\beta)||\sigma(y)|\le C_\beta\exp(-cB)$, where $c=1/(c_0(d-1))$ and $C_\beta=\max_{\tau}|\tau(\beta)|>0$. [given, step 2.1, algebra]

4.1 Combining steps 3.1 and 2.2 yields $\exp(-C_1[\log(B+2)]^2)<C_\beta e^{-cB}$. Since $cB-C_1[\log(B+2)]^2\to+\infty$ as $B\to\infty$, this inequality can hold for only finitely many integer values of $B$. For each bounded $B$, there are finitely many exponent vectors and finitely many torsion choices by [F1], so only finitely many pairs $(x,y)$ solve the equation. [F1, step 3.1, step 2.2, algebra] ∎
## Remarks

This theorem proves finiteness only; it does not assert that a basis of fundamental units, the torsion subgroup, or a numerical exponent bound can be computed from a field presentation. The separate effective determination theorem retains those obligations.

## Remarks references

[Evertse, *Diophantine Equations*, Chapter 5, §5.3](https://pub.math.leidenuniv.nl/~evertsejh/dio17-5.pdf)
