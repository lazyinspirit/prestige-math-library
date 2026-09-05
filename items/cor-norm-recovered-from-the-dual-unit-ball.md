---
id: cor-norm-recovered-from-the-dual-unit-ball
kind: corollary
title: "The norm of a vector is the supremum of |f(x)| over the dual unit ball"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-dual-space-of-a-normed-space, thm-dual-norms-every-vector]
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Daniel Daners, Introduction to Functional Analysis, Remark 25.2(c)"
      url: "https://www.maths.usyd.edu.au/u/athomas/FunctionalAnalysis/daners-functional-analysis-2017.pdf"
    - title: "Daniel Daners, Introduction to Functional Analysis, Corollary 26.5"
      url: "https://www.maths.usyd.edu.au/u/athomas/FunctionalAnalysis/daners-functional-analysis-2017.pdf"
---

## Statement

Let $X$ be a normed space over $\mathbb{R}$ or $\mathbb{C}$. Then for every
$x \in X$,

$$\|x\|=\sup\{|f(x)|:f \in X^*,\ \|f\| \le 1\}.$$

## Facts & Assumptions

**Given:** A normed space $X$ over $\mathbb{R}$ or $\mathbb{C}$ and a vector
$x \in X$.

[L1] The dual norm on $X^*$ is the operator norm, so
$|f(x)| \le \|f\|\,\|x\|$ for every $f \in X^*$
([[def-dual-space-of-a-normed-space]]).

[L2] Every nonzero vector admits a norming functional
([[thm-dual-norms-every-vector]]).

## Proof

**Proof technique:** direct.

1.1 If $f \in X^*$ and $\|f\| \le 1$, then [L1] gives $$|f(x)| \le \|f\|\,\|x\| \le \|x\|.$$ So the displayed supremum is at most $\|x\|$. [L1, given]

2.1 If $x=0$, step 1.1 already shows that the supremum is $0$, so the formula holds. Assume now that $x \ne 0$. By [L2], choose $g \in X^*$ with $\|g\|=1$ and $g(x)=\|x\|$. Then the displayed supremum is at least $|g(x)|=\|x\|$. [L2, given, choose]

3.1 Step 1.1 gives an upper bound of $\|x\|$, and step 2.1 gives equality. So $$\|x\|=\sup\{|f(x)|:f \in X^*,\ \|f\| \le 1\}.$$ [step 1.1, step 2.1] ∎
