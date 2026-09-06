---
id: lem-open-convex-set-recovered-from-its-gauge
kind: lemma
title: An open convex neighbourhood is recovered from its gauge
status: published
origin: pipeline
deps: [def-minkowski-functional, lem-minkowski-functional-is-sublinear, def-norm-and-normed-space]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: Gerald Teschl, Topics in Real and Functional Analysis, Lemma 5.1
      url: https://pdfcoffee.com/topics-in-real-and-functional-analysis-gerald-teschl-pdf-free.html
---

## Statement

If $U\subseteq X$ is open, convex, and $0\in U$, then $U$ is absorbing and

$$U=\{x\in X:p_U(x)<1\}.$$

## Facts & Assumptions

**Given:** An open convex $U\subseteq X$ containing $0$.

[F1] The gauge is defined for absorbing sets by an infimum over positive dilates ([[def-minkowski-functional]]).

## Proof

**Proof technique:** direct.

1.1 Openness gives $B(0,r)\subseteq U$ for some $r>0$. For any $x$, $x\in (\|x\|/r+1)U$, so $U$ is absorbing and [F1] applies. [given, F1, choose]

2.1 If $x\in U$, openness gives $\varepsilon>0$ with $(1+\varepsilon)x\in U$; hence $p_U(x)\le(1+\varepsilon)^{-1}<1$. [step 1.1, F1, given]

3.1 If $p_U(x)<1$, choose $t<1$ with $x\in tU$, say $x=tu$. Convexity and $0\in U$ imply $tu\in U$. Thus both inclusions hold. [step 1.1, F1, choose] ∎
