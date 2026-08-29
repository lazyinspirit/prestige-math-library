---
id: prop-basic-value-properties-of-a-complex-character
kind: proposition
title: "For a complex character, $\\chi(1)=\\dim V$, $\\chi$ is a class function, and $|\\chi(g)|\\le\\chi(1)$ with equality exactly at scalars"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-an-element-of-finite-order-acts-diagonalisably-over-an-algebraically-closed-field-of-characteristic-zero, cor-order-of-element-divides-group-order, def-character-of-a-complex-representation, def-class-function-and-the-space-of-complex-class-functions, def-complex-conjugate-real-imaginary-part-and-modulus, thm-trace-is-sum-of-eigenvalues, thm-trace-of-ab-equals-trace-of-ba]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Proposition 3.1.1"
      url: "https://www-users.math.umn.edu/~webb/RepBook/RepBookLatex.pdf"
    - title: "Shani Meynet and Robert Moscrop, McKay quivers and decomposition, Appendix A.3"
      url: "https://link.springer.com/article/10.1007/s11005-023-01685-9"
---

## Statement

Let $G$ be a finite group, let $V$ be a finite-dimensional complex
representation of $G$, and let $\chi=\chi_V$ be its character. Then, for all
$g,h\in G$:

1. $\chi(1)=\dim V$;
2. $\chi(ghg^{-1})=\chi(h)$, so $\chi$ is a class function;
3. $\chi(g)$ is a sum of $\dim V$ roots of unity, namely the eigenvalues of
   $\rho(g)$ counted with multiplicity;
4. $|\chi(g)|\le\chi(1)$, with equality if and only if $\rho(g)$ is a scalar
   operator;
5. $\chi(g^{-1})=\overline{\chi(g)}$.

## Facts & Assumptions

**Given:** A finite group $G$, a finite-dimensional complex representation $\rho:G\to\operatorname{GL}(V)$ with character $\chi$.

[F1] The character is $\chi(g)=\operatorname{tr}\rho(g)$, the trace of the action operator ([[def-character-of-a-complex-representation]]).

[F2] In a finite group, every element $g$ has finite order dividing $|G|$ ([[cor-order-of-element-divides-group-order]]).

[A1] An element of finite order acts diagonalisably on a finite-dimensional space over an algebraically closed field of characteristic zero ([[cor-an-element-of-finite-order-acts-diagonalisably-over-an-algebraically-closed-field-of-characteristic-zero]]).

[A2] If the characteristic polynomial of an endomorphism splits as $\prod_i(x-\lambda_i)$, then its trace is the sum of the eigenvalues $\sum_i\lambda_i$ ([[thm-trace-is-sum-of-eigenvalues]]).

[A3] $\operatorname{tr}(AB)=\operatorname{tr}(BA)$ whenever the products are defined ([[thm-trace-of-ab-equals-trace-of-ba]]).

[A4] Complex conjugation distributes over addition and multiplication, fixes real numbers, and satisfies $|\overline z|=|z|$ ([[def-complex-conjugate-real-imaginary-part-and-modulus]]).

[A5] For complex numbers $z_1,\dots,z_d$, the triangle inequality $|\sum_iz_i|\le\sum_i|z_i|$ holds, and equality holds exactly when all the nonzero $z_i$ share one argument.

[A6] A function $f:G\to\mathbb C$ is a class function exactly when it is constant on every conjugacy class ([[def-class-function-and-the-space-of-complex-class-functions]]).

## Proof

**Proof technique:** direct.

1.1 In any ordered basis of $V$ the matrix of $\rho(1)=\operatorname{id}_V$ is the identity matrix, whose trace is the number of basis vectors. Hence $\chi(1)=\operatorname{tr}(\operatorname{id}_V)=\dim V$, which is claim 1. [F1, given, algebra]

1.2 For the same reason $\rho(g)$ and $\rho(h)$ compose as in the group, so $\chi(ghg^{-1})=\operatorname{tr}(\rho(g)\rho(h)\rho(g)^{-1}) =\operatorname{tr}(\rho(h)\rho(g)^{-1}\rho(g))=\operatorname{tr}\rho(h) =\chi(h)$, the middle step being [A3] applied to $A=\rho(g)$ and $B=\rho(h)\rho(g)^{-1}$. [F1, A3, given]

1.3 By [F2], $g$ has finite order $n$ with $n\mid|G|$, so $\rho(g)^n=\rho(g^n)=\operatorname{id}_V$. Since $\mathbb C$ is algebraically closed of characteristic zero, [A1] gives a basis of $V$ in which $\rho(g)$ is diagonal with diagonal entries $\lambda_1,\dots,\lambda_d$, where $d=\dim V$; each $\lambda_i^n=1$, so each $\lambda_i$ is a root of unity. [F2, A1, given]

2.1 By step 1.2 the value of $\chi$ does not change under conjugation, so $\chi$ is constant on each conjugacy class and hence is a class function in the sense of [A6], which is claim 2. [step 1.2, A6]

2.2 In that basis the characteristic polynomial of $\rho(g)$ is $\prod_{i=1}^{d}(x-\lambda_i)$, so [A2] gives $\chi(g)=\operatorname{tr}\rho(g)=\sum_{i=1}^{d}\lambda_i$, a sum of $d=\dim V$ roots of unity, which is claim 3. [F1, A2, step 1.3, step 1.1]

2.3 Conversely, if $\rho(g)=\lambda\operatorname{id}_V$ for a scalar $\lambda$, first consider the degenerate case $V=0$. Then $\chi(g)=0=\chi(1)$, so the equality clause of claim 4 holds. If $V\ne0$, then the identity $\rho(g)^n=\operatorname{id}_V$ of step 1.3 reads $\lambda^n\operatorname{id}_V=\operatorname{id}_V$, and evaluating it on a nonzero vector gives $\lambda^n=1$. Thus $\lambda$ is a root of unity and $|\lambda|=1$; then $\chi(g)=\lambda\dim V$ and $|\chi(g)|=\dim V=\chi(1)$. This closes the biconditional in claim 4. [F1, step 1.1, step 1.3, algebra]

2.4 The inverse operator has the inverse eigenvalues, and a root of unity $\lambda$ satisfies $\lambda^{-1}=\overline\lambda$ because $|\lambda|=1=\lambda\overline\lambda$. [step 1.3, A4, algebra]

3.1 Applying [A5] to the eigenvalues of step 1.3 gives $|\chi(g)|=|\sum_i\lambda_i|\le\sum_i|\lambda_i|=d=\dim V=\chi(1)$, which is the inequality in claim 4. [A5, step 2.2, step 1.3, step 1.1]

4.1 Equality holds in step 3.1 exactly when the equality clause of [A5] applies: since every $|\lambda_i|=1$, all the eigenvalues share one argument, so all the $\lambda_i$ are equal to one root of unity $\lambda$. The diagonal form of step 1.3 then shows $\rho(g)=\lambda\operatorname{id}_V$, a scalar operator. [A5, step 1.3, algebra]

5.1 Hence, using [A2] for $\rho(g^{-1})=\rho(g)^{-1}$ and the additivity of conjugation from [A4], $\chi(g^{-1})=\sum_i\lambda_i^{-1}=\sum_i\overline{\lambda_i} =\overline{\sum_i\lambda_i}=\overline{\chi(g)}$, which is claim 5. [A2, A4, step 2.4, step 2.2] ∎
