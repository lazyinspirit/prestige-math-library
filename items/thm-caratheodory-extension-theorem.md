---
id: thm-caratheodory-extension-theorem
kind: theorem
title: "Assuming countable choice, a premeasure extends through its induced outer measure"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-premeasure-induced-set-function-is-an-outer-measure, lem-induced-outer-measure-agrees-with-premeasure, lem-source-algebra-is-caratheodory-measurable, thm-caratheodory-outer-measure-theorem, def-generated-sigma-algebra, thm-generated-sigma-algebra-exists-and-is-minimal, def-countable-choice]
aliases: []
landmark: true
short: "premeasure extension"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: "G. Folland, Real Analysis, 2nd ed., Theorem 1.14"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
    - title: "T. Tao, An Introduction to Measure Theory, Theorem 1.7.8"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
pipeline_run: null
---

## Statement

Assume the Axiom of Countable Choice. If $\mu_0$ is a premeasure on an algebra $\mathcal A_0$ of subsets of $X$ and $\mu^*$ is its induced outer set function, then $\mathcal A_0\subseteq\mathcal M_{\mu^*}$ and $\mu^*|_{\mathcal A_0}=\mu_0$. The restriction of $\mu^*$ to $\sigma(\mathcal A_0)$ is therefore a measure extending $\mu_0$.

Equivalently: assuming countable choice, the induced outer measure restricts to a complete measure on its Carathéodory sigma-algebra and to a measure on $\sigma(\mathcal A_0)$ extending $\mu_0$.

## Facts & Assumptions

**Given:** Countable choice, a premeasure $\mu_0$ on $\mathcal A_0$, and its induced outer set function $\mu^*$.

[L1] Assuming countable choice, the outer set function induced by a premeasure is an outer measure. ([[cor-premeasure-induced-set-function-is-an-outer-measure]])

[L2] The Carathéodory measurable subsets form a sigma-algebra, and the restriction of the outer measure to it is a complete measure. ([[thm-caratheodory-outer-measure-theorem]])

[L3] For every $A\in\mathcal A_0$, the outer measure induced by a premeasure satisfies $\mu^*(A)=\mu_0(A)$. ([[lem-induced-outer-measure-agrees-with-premeasure]])

[L4] Assuming countable choice, every member of the source algebra is Carathéodory measurable for the induced outer measure. ([[lem-source-algebra-is-caratheodory-measurable]])

[L5] For every $\mathcal E\subseteq\mathcal P(X)$, $\sigma_X(\mathcal E)$ is the unique smallest sigma-algebra on $X$ containing $\mathcal E$. ([[thm-generated-sigma-algebra-exists-and-is-minimal]])
## Proof

**Proof technique:** direct.

1.1 By [L1], $\mu^*$ is an outer measure, and [L2] makes its restriction to $\mathcal M_{\mu^*}$ a complete measure. [L1, L2]

1.2 By [L4], $\mathcal A_0\subseteq\mathcal M_{\mu^*}$, and [L3] identifies the restricted values there with $\mu_0$. [L3, L4]

2.1 Since $\mathcal M_{\mu^*}$ is a sigma-algebra containing $\mathcal A_0$, [L5] gives $\sigma(\mathcal A_0)\subseteq\mathcal M_{\mu^*}$; restricting the measure from step 1.1 to this generated sigma-algebra and using step 1.2 gives the claimed extension, with no sigma-finiteness hypothesis. [step 1.1, step 1.2, L5, algebra] ∎
