---
id: lem-normal-form-pde-determines-a-unique-formal-taylor-series
kind: lemma
title: Formal recursion for solved analytic normal equations
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: 'Gantumur, Math 580 Lecture Notes 2: The Cauchy-Kovalevskaya Theorem'
      url: https://www.math.mcgill.ca/gantumur/math580f11/downloads/notes2.pdf
      locator: Gantumur, §4 Theorem 18 proof, equations (41)–(43), printed p. 9; higher-order recursion is expanded locally.
status: published
origin: pipeline
proof_strategy: direct
deps: ["lem-coefficient-majorisation-is-preserved-by-sums-products-composition-and-differentiation", "lem-analytic-cauchy-data-reduce-to-zero-data-in-normal-form"]
---

## Statement

For $m\ge1$ and analytic $F$ near zero, the scalar zero-data equation $\partial_t^mu=F(t,x,(\partial_x^\alpha\partial_t^ju)_{|\alpha|+j\le m,\ j<m})$ has a unique formal series $u\in\mathbb R\lbrack\lbrack x,t\rbrack\rbrack$ with $\partial_t^ju(0,x)=0$ for $j<m$. For $m=1$ this also holds for finite systems $u_t=F(t,x,u,D_xu)$. No convergence is asserted. Analytic data reduce to this statement by subtraction of their normal Taylor polynomial.

## Facts & Assumptions

**Given:** The analytic scalar solved normal equation and allowed jets stated above, with zero Cauchy data; or its finite first-order system version. General analytic data are handled by subtraction.

[F1] Composition of formal series with zero-constant inner arguments is defined coefficientwise. ([[lem-coefficient-majorisation-is-preserved-by-sums-products-composition-and-differentiation]]).

[F2] Subtracting the finite normal Taylor polynomial bijectively reduces analytic data to zero data. ([[lem-analytic-cauchy-data-reduce-to-zero-data-in-normal-form]]).

## Proof

1.1 Write $u=\sum_{\ell\ge0}a_\ell(x)t^\ell$ with $a_\ell\in\mathbb R\lbrack\lbrack x\rbrack\rbrack$. The initial conditions force $a_0=\cdots=a_{m-1}=0$. Consequently each allowed jet has a factor $t^{m-j}$ and in particular zero total constant term. F1 makes substitution into F a well-defined formal series in x,t. [given, F1]

2.1 For $q\ge0$, equating coefficients gives $\frac{(q+m)!}{q!}a_{q+m}(x)=[t^q]F(t,x,(\partial_x^\alpha\partial_t^ju))$. In the right side, a coefficient of t-degree at most q in an allowed jet uses only $a_\ell$ with $\ell-j\le q$, hence $\ell\le q+m-1$. Tangential differentiation changes x-degrees but never t-degree. Replacing u by its truncation through that index therefore leaves the coefficient unchanged. [step 1.1, algebra]

3.1 Starting at q=0, step 2.1 defines each new $a_{q+m}$ by division by the nonzero integer $(q+m)!/q!$. Every right-side coefficient is thus eventually matched, proving existence of a formal solution. The same recursion forces every coefficient of any other formal solution, proving uniqueness. For m=1 and a finite vector, apply the same recursion simultaneously to all components; no next coefficient of any component occurs on the right. F2 supplies the analytic-data reduction. [step 2.1, F2] ∎

## Source notes

Gantumur, §4 Theorem 18 proof, equations (41)–(43), printed p. 9; higher-order recursion is expanded locally.
