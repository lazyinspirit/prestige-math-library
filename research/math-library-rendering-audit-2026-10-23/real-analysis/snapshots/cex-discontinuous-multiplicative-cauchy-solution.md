---
id: cex-discontinuous-multiplicative-cauchy-solution
kind: counterexample
title: "A discontinuous positive solution of $F(x+y)=F(x)F(y)$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-every-independent-set-extends-to-a-basis, def-vector-space, def-additive-function, cor-irrationals-uncountable, thm-normalized-exponential-functional-equation, thm-exponential-addition-formula, cor-exponential-reciprocal-and-positivity, thm-exponential-is-strictly-increasing, def-axiom-of-choice]
justified_by: []
aliases: []
landmark: false
proof_strategy: constructive
verification:
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "MIT OpenCourseWare 18.100B Real Analysis, Spring 2025 full lecture notes"
      url: "https://live.ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/mit18_100b_s25_lec_full.pdf"
    - title: "J. Lebl, Basic Analysis, Analytic Functions"
      url: "https://www.jirka.org/ra/html/sec_analfuncs.html"
    - title: "S. G. Johnson, Exponential Functions"
      url: "https://math.mit.edu/~stevenj/exponential.pdf"
    - title: "E. Gselmann, habilitation thesis on functional equations"
      url: "https://math.unideb.hu/sites/default/files/upload_documents/habilitacios_ertekezes_gselmann.pdf"
pipeline_run: null
---

## Statement refuted

Every positive $F:\mathbb R\to(0,\infty)$ satisfying $F(x+y)=F(x)F(y)$ is continuous and equals an ordinary exponential.

## Facts & Assumptions

**Given:** An irrational real $b$, so $\{1,b\}$ is linearly independent over $\mathbb Q$, and the Axiom of Choice.

[L1] Every independent set extends to a basis ([[thm-every-independent-set-extends-to-a-basis]], [[def-vector-space]], [[def-axiom-of-choice]]).

[L2] A $\mathbb Q$-linear map is additive ([[def-additive-function]]).

[L3] The ordinary exponential is positive, injective, and multiplicative ([[cor-exponential-reciprocal-and-positivity]], [[thm-exponential-is-strictly-increasing]], [[thm-exponential-addition-formula]]).

## Counterexample

**Proof technique:** constructive.

1.1 Extend $\{1,b\}$ to a Hamel basis. Define the $\mathbb Q$-linear map $A$ by $A(1)=1$, $A(b)=0$, and $A(v)=v$ on the remaining chosen basis elements. Then $A$ is additive but not the identity. [L1, L2, construct]

2.1 Put $F(x)=\exp(A(x))$. Positivity and additivity give $F(x+y)=F(x)F(y)$, and $F(1)=e$.  [step 1.1, L3]

3.1 If $F$ were continuous, [[thm-normalized-exponential-functional-equation]] would give $F=\exp$; injectivity of $\exp$ would then give $A(x)=x$, contradicting $A(b)=0\ne b$.   [step 1.1, step 2.1, L3, given]

4.1 Thus $F$ is a discontinuous positive multiplicative solution. The construction uses Choice exactly in the basis extension.   [step 3.1, given, discharge-construct] ∎
