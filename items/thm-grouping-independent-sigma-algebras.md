---
id: thm-grouping-independent-sigma-algebras
kind: theorem
title: "Disjoint groups of an independent sigma-algebra family remain independent"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-independent-sigma-algebras-and-events, thm-pi-system-criterion-for-independent-sigma-algebras]
proof_strategy: direct
sources:
  references:
    - title: "Rick Durrett, Probability: Theory and Examples, 5th ed., Theorem 2.1.9"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Statement

Let $(\mathcal F_i)_{i\in I}$ be an independent family of sigma-algebras on a
probability space, and let $J_0,\dots,J_{m-1}\subseteq I$ be pairwise disjoint
index sets. For each $r<m$, define

$$\mathcal G_r:=\sigma\left(\bigcup_{i\in J_r}\mathcal F_i\right).$$

Then the sigma-algebras $\mathcal G_0,\dots,\mathcal G_{m-1}$ are independent.

## Facts & Assumptions

**Given:** An independent family $(\mathcal F_i)_{i\in I}$ and pairwise
disjoint index sets $J_0,\dots,J_{m-1}$.

[L1] Independence of sigma-algebras means finite intersections of events from
distinct member sigma-algebras satisfy the product formula.
([[def-independent-sigma-algebras-and-events]])

[L2] Independent pi-systems containing the whole space generate independent
sigma-algebras.
([[thm-pi-system-criterion-for-independent-sigma-algebras]])

## Proof

**Proof technique:** direct.

1.1 For each $r<m$, let $\Pi_r$ be the class consisting of $\Omega$ together with all finite intersections $\bigcap_{i\in F}A_i$, where $F\subseteq J_r$ is finite and $A_i\in\mathcal F_i$ for every $i\in F$. Each $\Pi_r$ contains $\Omega$ and is closed under finite intersections, so it is a pi-system. Moreover $\sigma(\Pi_r)=\mathcal G_r$ by definition of $\mathcal G_r$. [given]

1.2 Fix $C_r\in\Pi_r$ for each $r<m$. Because the index sets $J_r$ are pairwise disjoint, the event $\bigcap_{r<m}C_r$ is a finite intersection of events taken from distinct members of the original independent family. Hence [L1] gives $$\mathbb P\left(\bigcap_{r<m}C_r\right)=\prod_{r<m}\mathbb P(C_r).$$ [given, L1]

2.1 Step 1.2 says that the pi-systems $\Pi_0,\dots,\Pi_{m-1}$ are independent. Applying [L2] and using step 1.1 yields independence of $\sigma(\Pi_r)=\mathcal G_r$ for every $r<m$. [L2, step 1.1, step 1.2] ∎
