---
id: lem-analytic-cauchy-data-reduce-to-zero-data-in-normal-form
kind: lemma
title: Subtracting analytic Cauchy jets
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: 'Gantumur, Math 580 Lecture Notes 2: The Cauchy-Kovalevskaya Theorem'
      url: https://www.math.mcgill.ca/gantumur/math580f11/downloads/notes2.pdf
      locator: Gantumur, §4 Corollary 20 proof, printed p. 11; the finite Taylor subtraction is computed locally.
    - title: 'Ageno, Part III: Analysis of Partial Differential Equations'
      url: https://giacomoageno.github.io/LectureNotesAPDE.pdf
      locator: Ageno §2.3.3, proof of Theorem 2.22, PDF pp. 25–27; independent comparison for the analytic reduction and majorant argument.
status: draft
origin: pipeline
proof_strategy: direct
deps: ["def-real-analytic-germ-in-several-variables", "lem-coefficient-majorisation-is-preserved-by-sums-products-composition-and-differentiation", "thm-symmetry-of-higher-mixed-partials"]
---

## Statement

Let $m\ge1$. Suppose $\partial_t^m u=F(t,x,(\partial_x^\alpha\partial_t^j u)_{|\alpha|+j\le m,\ j<m})$ is analytic near the initial jet supplied by analytic functions $g_j(x)$, $0\le j<m$. The substitution $u=v+P$, $P(t,x)=\sum_{j=0}^{m-1}t^jg_j(x)/j!$, bijectively transforms solutions with $\partial_t^ju(0,x)=g_j(x)$ into solutions of a solved analytic equation with exactly the same allowed jet orders and zero Cauchy data.

## Facts & Assumptions

**Given:** An analytic solved normal equation of order m and analytic data $g_j(x)$ for its first m normal derivatives; for the first-order vector assertion the analytic right side is evaluated at the stated initial data and gradient.

[F1] Finite analytic sums, derivatives and substitutions remain analytic on smaller neighborhoods. ([[lem-coefficient-majorisation-is-preserved-by-sums-products-composition-and-differentiation]]).

## Proof

1.1 For $0\le j<m$, differentiation gives $\partial_t^jP=\sum_{\ell=j}^{m-1}t^{\ell-j}g_\ell(x)/(\ell-j)!$. Thus $\partial_t^jP(0,x)=g_j(x)$ and $\partial_t^mP=0$. Its tangential derivatives are obtained by replacing $g_\ell$ with $\partial_x^\alpha g_\ell$ and are analytic by F1. [given, F1, algebra]

2.1 For each allowed slot $(\alpha,j)$ put $P_{\alpha,j}=\partial_x^\alpha\partial_t^jP$. The transformed right-hand side is $\widetilde F(t,x,(V_{\alpha,j}))=F(t,x,(V_{\alpha,j}+P_{\alpha,j}(t,x)))$. This finite analytic substitution is made near the actual initial jet, so after translation of that centre F1 applies to zero-constant increments. It is analytic near $(0,0,0)$ and introduces no new derivative slot. Since $\partial_t^mP=0$, $\partial_t^mu=F$ is exactly $\partial_t^mv=\widetilde F$. [given, step 1.1, F1]

3.1 Step 1.1 gives $\partial_t^jv(0,x)=\partial_t^ju(0,x)-g_j(x)$, so the old data hold precisely when all the new data vanish. Conversely adding P to any zero-data solution reverses step 2.1 and restores every old data function. Addition and subtraction of P are inverse maps on the solution germs. [step 1.1, step 2.1, algebra] ∎

## Source notes

Gantumur, §4 Corollary 20 proof, printed p. 11; the finite Taylor subtraction is computed locally.

