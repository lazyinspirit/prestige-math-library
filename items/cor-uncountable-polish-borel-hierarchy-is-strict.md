---
id: cor-uncountable-polish-borel-hierarchy-is-strict
kind: corollary
title: "Strict Borel hierarchy in every uncountable Polish space"
status: published
origin: pipeline
deps: ["thm-universal-borel-sets-and-strict-hierarchy", "thm-uncountable-analytic-sets-contain-cantor-copies", "def-axiom-of-choice"]
justified_by: []
forward_refs: []
landmark: false
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  scraped: []
  references:
    - title: "Corollary 2.38, printed p24; its perfect-set supplier is now local"
      url: "https://homepages.math.uic.edu/~marker/math512/dst.pdf"
---
## Statement

In ZFC, for every uncountable Polish $X$ and $1\leq\alpha<\beta<\omega_1$, $\Sigma^0_\alpha(X)$ is a proper subset of $\Sigma^0_\beta(X)$, and $\Pi^0_\alpha(X)$ is a proper subset of $\Pi^0_\beta(X)$.

## Facts & Assumptions

[F1] [[thm-universal-borel-sets-and-strict-hierarchy]] supplies both pointclass differences in every metrizable space containing a Cantor copy.

[F2] [[thm-uncountable-analytic-sets-contain-cantor-copies]] supplies a Cantor copy in every uncountable Polish space.

[A1] Assume [[def-axiom-of-choice]].

## Proof

**Given:** The space and positive countable ranks of the statement.

1.1 Apply F2 with A1 to X itself, obtaining a Cantor subspace. X is metrizable since it is Polish. Thus F1 with A1 gives $D\in\Pi^0_\alpha(X)\setminus\Sigma^0_\alpha(X)$. [F1, F2, A1]

2.1 For $\alpha>1$, each union of sets of lower $\Pi$ rank allowed at rank $\alpha$ is also allowed at rank $\beta$. For $\alpha=1$, fix a compatible metric d: every open U is $\bigcup_n\{x:(\forall y\notin U)\ d(x,y)\geq1/(n+1)\}$, a union of closed sets. Closedness follows from the triangle inequality, and equality from the ball criterion for openness; if U=X the condition is vacuous, and if U is empty take y=x to exclude every x. Thus $\Sigma^0_\alpha\subseteq\Sigma^0_\beta$ also at rank one. The constant sequence D puts D in $\Sigma^0_\beta$, proving this inclusion proper by step 1.1. Complementation gives $\Pi^0_\alpha\subseteq\Pi^0_\beta$ and its properness, since $X\setminus D$ belongs to the latter but not the former. QED. [step 1.1]
