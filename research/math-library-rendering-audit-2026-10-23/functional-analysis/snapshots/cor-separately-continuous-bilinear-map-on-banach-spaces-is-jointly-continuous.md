---
id: cor-separately-continuous-bilinear-map-on-banach-spaces-is-jointly-continuous
kind: corollary
title: "A separately continuous bilinear map on Banach spaces is jointly continuous"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-bounded-bilinear-map, thm-uniform-boundedness-principle, thm-bounded-bilinear-map-equivalences]
proof_strategy: direct
verification:
  audited: 2026-09-07
  precheck: pass
  judge: {model: "gpt-5.6-terra", verdict: pass, date: 2026-09-06}
sources: {references: [{title: "Buhler--Salamon, Functional Analysis, Corollary 2.7", url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"}]}
---
## Statement
Assume DC. If $X,Y$ are Banach, $Z$ normed, and $b:X\times Y\to Z$ is bilinear and separately continuous, then $b$ is jointly continuous.
## Facts & Assumptions
**Given:** DC, Banach $X,Y$, normed $Z$, and separately continuous bilinear $b$.
## Proof
**Proof technique:** direct.

1.1 For each $y$ in the unit ball of $Y$, $x\mapsto b(x,y)$ is bounded; for fixed $x$, separate continuity makes their values at $x$ bounded on that unit ball. [given]

2.1 Uniform boundedness [[thm-uniform-boundedness-principle]] gives $C$ with $\|b(x,y)\|\le C\|x\|\|y\|$. [step 1.1]

3.1 Thus $b$ is bounded in the sense of [[def-bounded-bilinear-map]], and the boundedness/joint-continuity equivalence [[thm-bounded-bilinear-map-equivalences]] yields joint continuity. [step 2.1] ∎
