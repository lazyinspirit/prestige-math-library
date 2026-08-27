---
id: thm-hartogs-separate-holomorphy
kind: theorem
title: "Separate holomorphy implies joint holomorphy in finite dimensions"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-separately-holomorphic-function,
       lem-local-boundedness-of-separately-holomorphic-functions,
       thm-locally-bounded-separate-holomorphy]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Paul Garrett, Hartogs' Theorem: separate analyticity implies joint"
      url: "https://www-users.cse.umn.edu/~garrett/m/complex/hartogs.pdf"
    - title: "J. Lebl, Tasty Bits of Several Complex Variables, §1.2"
      url: "https://www.jirka.org/scv/scv.pdf"
pipeline_run: null
---

## Statement

Let $m\ge1$, let $U\subseteq\mathbb C^m$ be open, and let
$f:U\to\mathbb C$ be separately holomorphic. Then $f$ is holomorphic on $U$.

## Facts & Assumptions

**Given:** An open set $U\subseteq\mathbb C^m$ and a separately holomorphic
function $f:U\to\mathbb C$.

[L1] Separate holomorphy means one-variable holomorphy on every coordinate slice
([[def-separately-holomorphic-function]]).

[L2] A separately holomorphic function is locally bounded on every smaller
polydisc ([[lem-local-boundedness-of-separately-holomorphic-functions]]).

[L3] A separately holomorphic function that is locally bounded is jointly
holomorphic ([[thm-locally-bounded-separate-holomorphy]]).

## Proof

**Proof technique:** direct.

1.1 Fix $p\in U$. Because $U$ is open, there is a polydisc neighborhood $P\subseteq U$ of $p$. The restriction $f|_P$ is still separately holomorphic by [L1], so [L2] makes it locally bounded near $p$. [given, L1, L2]

2.1 Applying [L3] to that same restriction shows that $f$ is holomorphic on a neighborhood of $p$. As $p$ was arbitrary, $f$ is holomorphic on all of $U$. [step 1.1, L3] ∎
