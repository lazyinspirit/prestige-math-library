---
id: lem-every-nonzero-verma-submodule-contains-a-singular-vector
kind: lemma
title: "Every nonzero Verma submodule contains a singular vector"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-weights-of-a-verma-module-lie-below-lambda, def-highest-weight-vector-and-cyclic-highest-weight-module]
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Pavel Etingof, Representations of Lie Groups, §15.1"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
---

## Statement

Every nonzero submodule of $M(\lambda)$ contains a nonzero vector annihilated
by $\mathfrak n^+$.

## Facts & Assumptions

**Given:** The weight support and finite weight spaces of [[prop-weights-of-a-verma-module-lie-below-lambda]].

## Proof

**Proof technique:** direct.

1.1 As in the weight-projection argument, a nonzero submodule has a nonzero weight vector.  Choose one of weight $\lambda-\beta$ with $\beta\in Q^+$ of minimal height among its occurring weights. [given, choose]

2.1 If $x\in\mathfrak g_\alpha\subseteq\mathfrak n^+$, then $xv$ has weight $\lambda-(\beta-\alpha)$.  If it were nonzero, $\beta-\alpha\in Q^+$ would have smaller height, contradicting the choice; hence $\mathfrak n^+v=0$. [given, contradiction] ∎
