---
id: thm-strong-separation-of-closed-and-compact-convex-sets
kind: theorem
title: Strong separation of a closed and a compact convex set
status: published
origin: pipeline
deps: [thm-separation-of-disjoint-convex-sets-one-open, def-weak-and-strict-separation, lem-distance-to-set-is-lipschitz, thm-extreme-value-metric, def-metric-compactness, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-04-maintenance-receipts.jsonl (thm-strong-separation-of-closed-and-compact-convex-sets). No independent judge or whole-closure certification.
    delegated_by: owner
sources:
  references:
    - title: Gerald Teschl, Topics in Real and Functional Analysis, Corollary 5.4
      url: https://pdfcoffee.com/topics-in-real-and-functional-analysis-gerald-teschl-pdf-free.html
---

## Statement

Assume the Axiom of Choice. Let $C,K\subseteq X$ be disjoint nonempty convex sets, where $C$ is closed and
$K$ is compact. Then they are strongly separated by a nonzero functional in
$X^*$.

## Facts & Assumptions

**Given:** The Axiom of Choice and disjoint nonempty convex $C,K$, with $C$ closed and $K$ compact.

[F1] Distance to a fixed nonempty set is continuous (indeed $1$-Lipschitz) ([[lem-distance-to-set-is-lipschitz]]).

[F2] A continuous real-valued function on a compact metric space attains its minimum ([[thm-extreme-value-metric]]).

[F3] Disjoint convex sets, one open, are strictly separated by a nonzero continuous functional ([[thm-separation-of-disjoint-convex-sets-one-open]]).

[A1] [[def-axiom-of-choice]] supplies the Hahn–Banach premise in [F3].

## Proof

**Proof technique:** direct.

1.1 By [F1]--[F2], $d(k,C)$ has a minimum $\delta$ on $K$. It is positive: a zero minimum would put some $k\in K$ in the closed set $C$. Choose $0<r<\delta$. [F1, F2, given, choose]

2.1 The thickening $W=C+B(0,r)$ is open and convex and is disjoint from $K$. Under [A1], apply [F3] to $W,K$ to obtain nonzero $f$ with $\operatorname{Re}f(w)<\operatorname{Re}f(k)$ for $w\in W,k\in K$. [step 1.1, F3, A1]

3.1 For $c\in C$, take the supremum over $b\in B(0,r)$ in the inequalities from step 2.1. Since $\sup_{\|b\|<r}\operatorname{Re}f(b)=r\|f\|$, this gives $\operatorname{Re}f(c)+r\|f\|\le\operatorname{Re}f(k)$ for every $k\in K$. Hence $\sup_C\operatorname{Re}f+r\|f\|\le\inf_K\operatorname{Re}f$, a positive gap. [step 2.1, algebra] ∎
