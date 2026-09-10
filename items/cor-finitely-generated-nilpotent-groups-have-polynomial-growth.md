---
id: cor-finitely-generated-nilpotent-groups-have-polynomial-growth
kind: corollary
title: "Finitely generated nilpotent groups have polynomial growth"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-polynomial-subexponential-exponential-and-intermediate-growth, thm-bass-guivarch-growth-degree-formula-with-proof, def-bass-guivarch-dimension, def-growth-comparison-and-growth-type]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6-astra
    verdict: pass
    date: 2026-09-09
    scope: "Owner-authorized local proof and direct supplier-interface audit; targeted precheck/rendercheck passed; no independent judgment."
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "C. Löh, Geometric Group Theory, Sections 5.1-5.3"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ss22/lecture_notes.pdf"
    - title: "C. Drutu and M. Kapovich, Lectures on Geometric Group Theory, Chapter 5"
      url: "https://www.math.ucdavis.edu/~kapovich/EPR/kapovich_drutu.pdf"
pipeline_run: null
---

## Statement

Every finitely generated nilpotent group has polynomial growth.

## Facts & Assumptions

**Given:** A finitely generated nilpotent group $G$.

[L1] For every finite generating set $S$, the proved Bass–Guivarc'h bound gives
$\beta_{G,S}(n)\le C_S n^{D(G)}$ for all integers $n\ge1$, where $C_S>0$
([[thm-bass-guivarch-growth-degree-formula-with-proof]]). Here
$D(G)=\sum_i i r_i$ is a nonnegative integer, including $D(G)=0$ for finite
groups ([[def-bass-guivarch-dimension]]).

[L2] Polynomial growth means that $\beta_G \preccurlyeq n^d$ for some integer $d \ge 0$ ([[def-polynomial-subexponential-exponential-and-intermediate-growth]]).

[F1] The comparison $f\preccurlyeq g$ means that some integer $C\ge1$
satisfies $f(n)\le Cg(Cn+C)+C$ for every $n\ge0$
([[def-growth-comparison-and-growth-type]]).

## Proof

**Proof technique:** direct.

1.1 Fix a finite generating set $S$ and put $d=D(G)$. Choose an integer $C\ge\max(1,C_S)$. For $n\ge1$, [L1] gives $\beta_{G,S}(n)\le C_Sn^d\le C(Cn+C)^d+C$. At $n=0$, the word ball consists of the identity, so the same inequality holds. Thus $\beta_{G,S}\preccurlyeq n^d$ by [F1]; for $d=0$ use the constant polynomial $1$. [L1, F1, algebra]

2.1 Therefore [L2] makes $G$ a group of polynomial growth. [L2, step 1.1] ∎
