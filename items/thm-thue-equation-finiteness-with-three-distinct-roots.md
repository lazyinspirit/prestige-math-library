---
id: thm-thue-equation-finiteness-with-three-distinct-roots
kind: theorem
title: "Finiteness for a Thue equation whose binary form has at least three distinct roots"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 6
deps:
  - thm-unit-equation-finiteness-from-homogeneous-bound
  - lem-divisors-of-fixed-integer-are-finite-modulo-units
  - def-number-field
  - thm-finitely-generated-algebraic-extensions-are-finite
  - thm-the-complex-numbers-are-algebraically-closed
  - def-integral-element-and-algebraic-integer
  - cor-integral-elements-form-a-subring
  - def-ring-of-integers-of-a-number-field
  - def-s-integers-and-s-units-of-a-number-field
  - def-axiom-of-choice
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jan-Hendrik Evertse, Diophantine Equations (2017 author notes), Theorem 5.13 and proof"
      url: "https://pub.math.leidenuniv.nl/~evertsejh/dio17-5.pdf"
verification: {}
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice. Let $d\ge3$, let $F(X,Y)=a_0X^d+a_1X^{d-1}Y+\cdots+a_dY^d\in\mathbb Z[X,Y]$ with $a_0\ne0$, and suppose that $F(X,1)$ has at least three distinct zeros in $\mathbb C$. For every nonzero integer $m$, the equation $F(x,y)=m$ in $(x,y)\in\mathbb Z^2$ has only finitely many solutions.

## Statement references

[[def-axiom-of-choice]]

[[thm-unit-equation-finiteness-from-homogeneous-bound]]

[[lem-divisors-of-fixed-integer-are-finite-modulo-units]]

[[thm-the-complex-numbers-are-algebraically-closed]]

[[def-integral-element-and-algebraic-integer]]

[[cor-integral-elements-form-a-subring]]

[[def-ring-of-integers-of-a-number-field]]

[[def-s-integers-and-s-units-of-a-number-field]]

[Evertse, *Diophantine Equations*, Chapter 5, Theorem 5.13 and proof](https://pub.math.leidenuniv.nl/~evertsejh/dio17-5.pdf)

## Facts & Assumptions

**Given:** The Axiom of Choice, a binary form $F$ with the stated hypotheses, and a nonzero integer $m$.

[A1] The finite unit-equation theorem is under AC and applies to every number field and fixed nonzero coefficients in that field. ([[def-axiom-of-choice]], [[thm-unit-equation-finiteness-from-homogeneous-bound]])

[F1] The complex numbers are algebraically closed, so a monic polynomial over $\mathbb Z$ factors into linear factors over $\mathbb C$. ([[thm-the-complex-numbers-are-algebraically-closed]])

[F2] A root of a monic polynomial in $\mathbb Z[X]$ is an algebraic integer, hence belongs to the ring of integers of any number field containing it. ([[def-integral-element-and-algebraic-integer]], [[def-ring-of-integers-of-a-number-field]])

[F3] A field generated over $\mathbb Q$ by finitely many algebraic numbers is a finite extension of $\mathbb Q$. ([[thm-finitely-generated-algebraic-extensions-are-finite]])

[F4] For a nonzero algebraic integer $c$, its divisors in $\mathcal O_K$ form finitely many classes modulo units. ([[lem-divisors-of-fixed-integer-are-finite-modulo-units]])

[F5] Integral elements over $\mathbb Z$ are closed under addition, subtraction, and multiplication, so the displayed products of roots and integer variables lie in $\mathcal O_K$. ([[cor-integral-elements-form-a-subring]])

[F6] For a number field $K$, the units are $\mathcal O_K^\times$, with multiplication inherited from $K^\times$. ([[def-s-integers-and-s-units-of-a-number-field]])

## Proof

1.1 Write $F(X,Y)=a_0X^d+a_1X^{d-1}Y+\cdots+a_dY^d$. Define $F'(U,Y)=U^d+a_1U^{d-1}Y+a_2a_0U^{d-2}Y^2+\cdots+a_da_0^{d-1}Y^d$ and $m'=a_0^{d-1}m$. Then $F'(a_0x,y)=a_0^{d-1}F(x,y)$ for every $(x,y)$. Thus $(x,y)\mapsto(a_0x,y)$ injects the solution set of $F(x,y)=m$ into that of $F'(U,Y)=m'$, where $F'(U,1)$ is monic and has the same number of distinct roots as $F(X,1)$. It suffices to prove finiteness for this normalized equation. [given, algebra]

2.1 By [F1], write $F'(U,1)=\prod_{i=1}^t(U-\alpha_i)^{r_i}$ with distinct $\alpha_i\in\mathbb C$, positive multiplicities $r_i$, and $t\ge3$. Set $K=\mathbb Q(\alpha_1,\ldots,\alpha_t)$, which is a number field by [F3]. Each $\alpha_i$ is integral by [F2]. [F1, F2, F3, step 1.1]

3.1 Let $(u,v)\in\mathbb Z^2$ satisfy $F'(u,v)=m'$. Since $m'\ne0$, each $u-\alpha_i v$ is nonzero, and $\prod_{i=1}^t(u-\alpha_i v)^{r_i}=m'$. The quotient $m'/(u-\alpha_i v)=\prod_{j\ne i}(u-\alpha_j v)^{r_j}(u-\alpha_i v)^{r_i-1}$ is an algebraic integer by [F2] and [F5], so each $u-\alpha_i v$ divides $m'$ in $\mathcal O_K$. By [F4], for each $i$ only finitely many unit classes can occur. Choose one representative $\mu_i$ from each such class; then $u-\alpha_i v=\mu_i\varepsilon_i$ for some unit $\varepsilon_i\in\mathcal O_K^\times$. [F2, F4, F5, step 2.1, algebra]

4.1 Choose three distinct roots $\alpha_1,\alpha_2,\alpha_3$. Direct expansion gives Siegel’s identity $(\alpha_2-\alpha_3)(U-\alpha_1Y)+(\alpha_3-\alpha_1)(U-\alpha_2Y)+(\alpha_1-\alpha_2)(U-\alpha_3Y)=0$. Dividing its specialization at $(u,v)$ by $(\alpha_2-\alpha_1)(u-\alpha_3v)\ne0$ yields $\frac{\alpha_2-\alpha_3}{\alpha_2-\alpha_1}\frac{u-\alpha_1v}{u-\alpha_3v}+\frac{\alpha_3-\alpha_1}{\alpha_2-\alpha_1}\frac{u-\alpha_2v}{u-\alpha_3v}=1$. After substituting step 3.1, this is a unit equation $\left(\frac{\alpha_2-\alpha_3}{\alpha_2-\alpha_1}\frac{\mu_1}{\mu_3}\right)\frac{\varepsilon_1}{\varepsilon_3}+\left(\frac{\alpha_3-\alpha_1}{\alpha_2-\alpha_1}\frac{\mu_2}{\mu_3}\right)\frac{\varepsilon_2}{\varepsilon_3}=1$. All displayed coefficients are nonzero because the roots are distinct and the representatives are nonzero. [A1, F6, step 3.1, algebra]

5.1 There are finitely many triples $(\mu_1,\mu_2,\mu_3)$ by step 3.1. For each triple, [A1] gives only finitely many pairs $(\varepsilon_1/\varepsilon_3,\varepsilon_2/\varepsilon_3)$ solving its unit equation. Hence only finitely many ratios $R=(u-\alpha_1v)/(u-\alpha_3v)=(\mu_1/\mu_3)(\varepsilon_1/\varepsilon_3)$ can occur. [A1, step 3.1, step 4.1]

6.1 For a fixed occurring ratio $R=1$, distinctness of $\alpha_1,\alpha_3$ forces $v=0$, and the normalized equation $F'(u,0)=u^d=m'$ has at most $d$ integer solutions. For a fixed occurring ratio $R\ne1$, cross-multiplication gives $u/v=(R\alpha_3-\alpha_1)/(R-1)$ and $v\ne0$. Substituting into $F'(u,v)=v^dF'(u/v,1)=m'$ gives a nonzero equation $v^d=m'/F'((R\alpha_3-\alpha_1)/(R-1),1)$, which has at most $d$ complex roots and hence at most $d$ integer choices of $v$; each determines $u$. Thus each ratio gives finitely many integer pairs, and the finite ratio set gives finitely many normalized solutions. By step 1.1 the original solution set is finite. [step 1.1, step 5.1, algebra] ∎
## Remarks

This theorem asserts finiteness only. Effective determination of the finite divisor representatives and unit solutions belongs to the separate algorithms; those procedures retain their own unresolved computational prerequisites.

## Remarks references

[Evertse, *Diophantine Equations*, Chapter 5, §5.3](https://pub.math.leidenuniv.nl/~evertsejh/dio17-5.pdf)
