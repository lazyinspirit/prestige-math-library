---
id: thm-norm-preserving-extension-from-any-subspace
kind: theorem
title: "A bounded linear functional on an arbitrary subspace extends with the same norm, without assuming the subspace is closed"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-hahn-banach-norm-preserving-extension,
       thm-complex-hahn-banach-norm-preserving-extension,
       rem-real-and-complex-normed-space-convention]
justified_by: []
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Daniel Daners, Introduction to Functional Analysis, Theorem 26.7"
      url: "https://www.maths.usyd.edu.au/u/athomas/FunctionalAnalysis/daners-functional-analysis-2017.pdf"
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, Corollary 4.15 and Theorem 4.14"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
---

## Statement

Let $X$ be a normed space over $\mathbb{R}$ or $\mathbb{C}$, let
$M \subseteq X$ be a linear subspace, and let $f_0:M \to \mathbb{R}$ or
$f_0:M \to \mathbb{C}$ be a bounded linear functional over the ambient scalar
field. Then there exists a bounded linear extension $F$ of $f_0$ to all of $X$
such that $\|F\|=\|f_0\|$.

No closedness hypothesis on $M$ is needed.

## Facts & Assumptions

**Given:** A normed space $X$ over $\mathbb{R}$ or $\mathbb{C}$, a linear
subspace $M \subseteq X$, and a bounded linear functional $f_0$ on $M$.

[L1] In the real case, a bounded linear functional on a subspace extends with
the same norm ([[thm-hahn-banach-norm-preserving-extension]]).

[L2] In the complex case, a bounded linear functional on a subspace extends with
the same norm ([[thm-complex-hahn-banach-norm-preserving-extension]]).

[L3] The page's normed-space language is read over either scalar field by the
convention of [[rem-real-and-complex-normed-space-convention]].

## Proof

**Proof technique:** direct.

1.1 If the scalar field is $\mathbb{R}$, then [L1] applies exactly as stated to the given subspace $M$ and produces a norm-preserving extension of $f_0$ to $X$. [L1, L3, given]

1.2 If the scalar field is $\mathbb{C}$, then [L2] applies exactly as stated to the given subspace $M$ and produces a norm-preserving extension of $f_0$ to $X$. [L2, L3, given]

2.1 Neither step 1.1 nor step 1.2 uses or requires that $M$ be closed; each cited theorem assumes only that $M$ is a linear subspace. Therefore every bounded linear functional on an arbitrary subspace extends with the same norm. [step 1.1, step 1.2, L1, L2] ∎
