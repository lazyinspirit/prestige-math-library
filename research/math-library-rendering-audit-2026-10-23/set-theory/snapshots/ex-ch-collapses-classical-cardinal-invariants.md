---
id: ex-ch-collapses-classical-cardinal-invariants
kind: example
title: Under CH the classical cardinal invariants all equal aleph one
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [lem-basic-pseudointersection-and-tower-bounds, def-pseudointersection-and-tower-numbers, lem-basic-bounding-and-dominating-relations, def-eventual-domination-bounding-and-dominating-numbers, def-splitting-and-reaping-numbers, lem-splitting-reaping-comparison-with-b-and-d, lem-basic-ideal-cardinal-inequalities, def-null-and-meagre-cardinal-invariants, def-aleph-and-beth-hierarchies, def-cardinal-arithmetic, lem-ordinal-trichotomy, def-cardinal, def-axiom-of-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "J. D. Monk, Continuum cardinals, Theorem 1 and the surrounding elementary bounds, printed pp.1, 8, 15, 19"
      url: "https://euclid.colorado.edu/~monkd/cont_card.pdf"
    - title: "Tomek Bartoszynski, Invariants of Measure and Category, Sections 1-2, printed pp.1-3"
      url: "https://arxiv.org/pdf/math/9910015"
verification:
  audited: 2026-09-27
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
---

## Statement

In ZFC (with the Axiom of Choice [[def-axiom-of-choice]]), assume the Continuum Hypothesis, in the form $\mathfrak c=2^{\aleph_0}=\aleph_1$
([[def-cardinal-arithmetic]], [[def-aleph-and-beth-hierarchies]]). Then the six
combinatorial invariants and the eight ideal invariants of this pair of pages
all collapse to $\aleph_1$:

$$p=t=b=d=s=r=\aleph_1,\qquad \operatorname{add}(\mathcal I)=\operatorname{cov}(\mathcal I)=\operatorname{non}(\mathcal I)=\operatorname{cof}(\mathcal I)=\aleph_1\quad(\mathcal I=\mathcal N,\mathcal M).$$

## Facts & Assumptions

**Given:** ZFC and the Continuum Hypothesis, stated as $\mathfrak c=2^{\aleph_0}=\aleph_1$.

[F1] $p$ and $t$ are cardinals with $\aleph_1\le p\le t\le\mathfrak c=2^{\aleph_0}$. ([[lem-basic-pseudointersection-and-tower-bounds]], [[def-pseudointersection-and-tower-numbers]])

[F2] $b$ and $d$ are cardinals with $\aleph_1\le b=\operatorname{cf}(b)\le\operatorname{cf}(d)\le d\le\mathfrak c$. ([[lem-basic-bounding-and-dominating-relations]], [[def-eventual-domination-bounding-and-dominating-numbers]])

[F3] $s$ and $r$ are cardinals with $\aleph_1\le s\le d\le\mathfrak c$ and $\aleph_1\le b\le r\le\mathfrak c$. ([[lem-splitting-reaping-comparison-with-b-and-d]], [[def-splitting-and-reaping-numbers]])

[F4] For $\mathcal I=\mathcal N$ and $\mathcal I=\mathcal M$ the eight numbers satisfy $\aleph_1\le\operatorname{add}(\mathcal I)\le\min(\operatorname{cov}(\mathcal I),\operatorname{non}(\mathcal I))\le\max(\operatorname{cov}(\mathcal I),\operatorname{non}(\mathcal I))\le\operatorname{cof}(\mathcal I)\le\mathfrak c$. ([[lem-basic-ideal-cardinal-inequalities]], [[def-null-and-meagre-cardinal-invariants]])

[F5] In ZFC, hence under the Axiom of Choice, all the numbers above are cardinals, hence ordinals, and for ordinals $\alpha,\beta,\gamma$ with $\alpha\le\beta\le\alpha$ one has $\alpha=\beta$, because exactly one of $\alpha\in\beta$, $\alpha=\beta$, $\beta\in\alpha$ holds. ([[def-axiom-of-choice]], [[def-cardinal]], [[lem-ordinal-trichotomy]])

## Proof

**Proof technique:** direct.

1.1 By [F1], $\aleph_1\le p\le t\le\mathfrak c=\aleph_1$, so $p$ and $t$ are pinched between $\aleph_1$ and $\aleph_1$. [given, F1]

1.2 By [F2], $\aleph_1\le b\le d\le\mathfrak c=\aleph_1$, so $b$ and $d$ are pinched between $\aleph_1$ and $\aleph_1$. [given, F2]

1.3 By [F4], for $\mathcal I=\mathcal N$ and $\mathcal I=\mathcal M$ each of the four numbers lies between $\aleph_1$ and $\mathfrak c=\aleph_1$. [given, F4]

2.1 By [F3] together with step 1.2, $\aleph_1\le s\le d\le\aleph_1$ and $\aleph_1\le b\le r\le\mathfrak c=\aleph_1$, so $s$ and $r$ are pinched between $\aleph_1$ and $\aleph_1$. [step 1.2, given, F3]

3.1 Every one of the fourteen numbers is an ordinal $x$ with $\aleph_1\le x\le\aleph_1$, so $x=\aleph_1$ by the antisymmetry clause of [F5]; this gives $p=t=b=d=s=r=\aleph_1$ and $\operatorname{add}(\mathcal I)=\operatorname{cov}(\mathcal I)=\operatorname{non}(\mathcal I)=\operatorname{cof}(\mathcal I)=\aleph_1$ for both ideals $\mathcal I=\mathcal N,\mathcal M$, as claimed. ∎ [step 1.1, step 1.2, step 1.3, step 2.1, F5]
