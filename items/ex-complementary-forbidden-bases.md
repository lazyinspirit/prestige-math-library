---
id: ex-complementary-forbidden-bases
kind: example
title: "Complementary hereditary classes have complementary forbidden bases"
status: published
origin: session
deps: [thm-complementation-preserves-hereditary-classes-and-bases, ex-complete-graphs-as-a-hereditary-class, ex-edgeless-graphs-as-a-hereditary-class]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "ISGCI, Information System on Graph Classes and their Inclusions"
      url: "https://www.cs.sfu.ca/~pavol/graphclasses/"
pipeline_run: null
---

## Statement

The class of edgeless graphs is complementary to the class of complete graphs, and their minimal forbidden bases $\{K_2\}$ and $\{\overline K_2\}$ are complementary.

## Facts & Assumptions

**Given:** The classes $\mathcal K$ of complete graphs and $\mathcal E$ of edgeless graphs.

[L1] $\mathcal B(\mathcal K)=\{\overline K_2\}$ ([[ex-complete-graphs-as-a-hereditary-class]]).

[L2] $\mathcal B(\mathcal E)=\{K_2\}$ ([[ex-edgeless-graphs-as-a-hereditary-class]]).

[L3] Complementation complements the minimal basis of a hereditary class ([[thm-complementation-preserves-hereditary-classes-and-bases]]).

[F1] A graph belongs to the complement class of $\mathcal K$ exactly when its complement belongs to $\mathcal K$.

## Verification

**Proof technique:** direct.

1.1 Complementing a complete graph gives an edgeless graph and vice versa, so $\mathcal E=\overline{\mathcal K}$. [F1]

1.2 The two basis graphs satisfy $\overline{\overline K_2}=K_2$. [L1, L2]

2.1 Thus the displayed bases are complementary, exactly as the general theorem predicts. [step 1.1, step 1.2, L3] ∎
