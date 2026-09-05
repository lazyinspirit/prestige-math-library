---
id: thm-jump-functions-have-derivative-zero-almost-everywhere
kind: theorem
title: "A jump function has derivative zero almost everywhere"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-countable-choice, def-jump-function-of-an-increasing-function, thm-differentiation-of-borel-measures-finite-on-compact-sets-on-r-n, thm-froda]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Richard F. Bass, Real Analysis for Graduate Students, Theorem 14.5"
      url: "https://draft-r-bass-scholar.media.uconn.edu/wp-content/uploads/sites/3926/2024/12/real-analysis-for-graduate-students_version-50_accessible.pdf"
    - title: "A. M. Bruckner, J. B. Bruckner, and B. S. Thomson, Real Analysis, 2nd ed."
      url: "https://classicalrealanalysis.info/documents/BBT-AlllChapters-Landscape.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]).

Let $F : [a,b] \to \mathbb{R}$ be nondecreasing, and let $J_F$ be its jump
function. Then $J_F$ is differentiable almost everywhere on $(a,b)$ and

$$
J_F'(x) = 0
$$

for almost every $x \in (a,b)$.

## Facts & Assumptions

**Given:** Countable choice, a nondecreasing function $F : [a,b] \to \mathbb{R}$, and its jump function $J_F$.

[A1] The symbols are those of the statement.

## Proof

**Proof technique:** direct.

1.1 By [[thm-froda]], the discontinuity set of $F$ in $(a,b)$ is at most countable; enumerate it as $(s_n)_{n \ge 1}$. Define two discrete finite measures on $[a,b]$ by $$\mu_L:=\sum_{n \ge 1}\bigl(F(s_n)-F(s_n^-)\bigr)\delta_{s_n}, \qquad \mu_R:=\beta_a\delta_a+\sum_{n \ge 1}\bigl(F(s_n^+)-F(s_n)\bigr)\delta_{s_n},$$ and put $\mu:=\mu_L+\mu_R$. The masses are nonnegative, and for every $x>a$ the definition of [[def-jump-function-of-an-increasing-function]] gives $$J_F(x)=\mu_L((a,x])+\mu_R([a,x)).$$ Because $\mu$ is concentrated on the countable set $\{a,s_1,s_2,\dots\}$, it is singular with respect to Lebesgue measure. [given, construct]

2.1 Fix $x \in (a,b)$ and $h>0$ small. From the representation in step 1.1 one gets $$0 \le J_F(x+h)-J_F(x) \le \mu([x,x+h]), \qquad 0 \le J_F(x)-J_F(x-h) \le \mu([x-h,x]).$$ Apply [[thm-differentiation-of-borel-measures-finite-on-compact-sets-on-r-n]] to $\mu$ and the interval families $[x,x+h]$ and $[x-h,x]$. Since the absolutely continuous part of $\mu$ is zero, the two interval ratios $\mu([x,x+h])/h$ and $\mu([x-h,x])/h$ tend to $0$ for almost every $x$. Therefore the right and left difference quotients of $J_F$ both tend to $0$ for almost every $x \in (a,b)$. [step 1.1]

3.1 At every point where both one-sided difference quotients tend to $0$, the two-sided derivative exists and equals $0$. Hence $J_F'$ exists and is $0$ almost everywhere on $(a,b)$. [step 2.1] ∎
