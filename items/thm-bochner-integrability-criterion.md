---
id: thm-bochner-integrability-criterion
kind: theorem
title: "Bochner integrability criterion"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-bochner-integrable-function, thm-monotone-convergence-for-the-integral, thm-dominated-convergence, cor-additivity-of-the-nonnegative-lebesgue-integral, prop-order-and-scalar-rules-for-the-nonnegative-integral, thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable]
justified_by: []
forward_refs: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  scraped: []
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
      locator: "Section 11.6, Lemmas 11.30--11.31 and complete proofs, printed pp. 333--335"
pipeline_run: phase-2-next-18
---

## Statement

Let $f:\Omega\to X$ be strongly measurable. Then $f$ is Bochner integrable if
and only if

$$\int_\Omega\|f\|\,d\mu<\infty.$$

Here an a.e.-defined scalar function is integrated through any measurable
representative supplied by the strong simple approximation. Moreover the
Bochner integral is independent of the approximating sequence in its
definition.

## Facts & Assumptions

[L1] Bochner integrability means $L^1$ approximation by integrable simple
functions and defines the integral as the norm limit of their integrals
([[def-bochner-integrable-function]]).

[L2] Nonnegative integrals are monotone and positively homogeneous
([[prop-order-and-scalar-rules-for-the-nonnegative-integral]]) and additive
([[cor-additivity-of-the-nonnegative-lebesgue-integral]]).

[L3] Pointwise limits and countable suprema of measurable scalar functions are
measurable
([[thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable]]).

[L4] Scalar dominated convergence gives convergence in $L^1$
([[thm-dominated-convergence]]); its nonnegative foundation is monotone
convergence ([[thm-monotone-convergence-for-the-integral]]).

## Proof

**Proof technique:** direct.

**Given:** A strongly measurable $f$ and the conventions in the Statement.

1.1 Prove necessity of scalar norm integrability. [given, L1, L2]
Suppose first that $f$ is Bochner integrable and choose $(s_n)$ as in
[L1]. For some $n$, $\int\|f-s_n\|<\infty$, while integrability of the simple
function gives $\int\|s_n\|<\infty$. Since
$\|f\|\leq\|f-s_n\|+\|s_n\|$, [L2] gives $\int\|f\|<\infty$.
[given, L1, L2]

1.2 Prove approximation independence. [given, L1]
If $(s_n)$ and $(t_n)$ are any two defining approximations, the simple
norm inequality gives
$\|\int s_n-\int t_n\|\leq\int\|s_n-t_n\|$, which is at most
$\int\|s_n-f\|+\int\|f-t_n\|$. Both terms tend to zero, so the two norm limits
coincide. [given, L1]

1.3 Construct dominated simple approximants for sufficiency. [given, L3, construct]
Conversely assume $\int\|f\|<\infty$. On the exceptional measurable null
set of a strong approximation, replace both $f$ and every approximant by zero
(and call the representative again $f$). Thus measurable simple functions $u_n$ converge
pointwise to $f$; [L3] makes $\|f\|$ measurable. Define
$s_n=u_n\mathbf1_{\{\|u_n\|\leq2\|f\|\}}$. Then $s_n$ is simple and measurable,
$\|s_n\|\leq2\|f\|$, and $s_n\to f$ pointwise: when $f(\omega)\neq0$, the
inequality defining the retained part holds eventually, while at a zero of
$f$ either retained values tend to zero or the replacement is zero.
[given, L3, construct]

2.1 Verify that the constructed simple functions are integrable. [L2, step 1.3]
Each $s_n$ is integrable. Indeed, if a nonzero value $x$ occurs, its level
set is contained in $\{2\|f\|\geq\|x\|\}$, whose measure is at most
$2\int\|f\|/\|x\|<\infty$ by [L2]. [L2, step 1.3]

3.1 Obtain convergence in $L^1$. [L1, L4, step 1.3, step 2.1]
The pointwise convergence in step 1.3 and
$\|f-s_n\|\leq3\|f\|$ allow [L4] to be applied. Hence
$\int\|f-s_n\|\to0$. Together with step 2.1 this is exactly the approximation
required in [L1]. [L1, L4, step 1.3, step 2.1]

4.1 Step 1.1 proves necessity, step 3.1 proves sufficiency, and step 1.2 proves
that the resulting integral is approximation-independent. The zero function,
the empty measure space, and a single simple function are included by taking
the constant zero or constant simple approximation. [L1, step 1.1, step 1.2, step 3.1] ∎
