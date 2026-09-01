---
id: thm-every-braided-monoidal-category-is-monoidally-equivalent-to-a-strict-braided-one
kind: theorem
title: "Every braided monoidal category is monoidally equivalent to a strict braided one"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-braided-monoidal-functor, def-monoidal-equivalence, thm-mac-lane-strictification]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "Michael Muger, Tensor Categories: A Selective Guided Tour, Section 4"
      url: "https://arxiv.org/pdf/0804.3587"
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, Chapter 8.1"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
---

## Statement

Let $(\mathcal C,c)$ be a braided monoidal category. Then there exists a strict
monoidal category $\mathcal D$, a braiding $c^{\mathrm{str}}$ on $\mathcal D$,
and a monoidal equivalence $F:\mathcal C\to\mathcal D$ such that $F$ is a
braided monoidal functor.

## Facts & Assumptions

**Given:** A braided monoidal category $(\mathcal C,c)$.

[L1] Mac Lane strictification gives a monoidal equivalence from $\mathcal C$ to a strict monoidal category ([[thm-mac-lane-strictification]]).

[L2] A monoidal equivalence consists of a strong monoidal functor with strong monoidal quasi-inverse data ([[def-monoidal-equivalence]]).

[L3] A braided monoidal functor is a strong monoidal functor whose tensor constraint intertwines the two braidings ([[def-braided-monoidal-functor]]).

[F1] The braided strictification theorem in the cited monoidal-category source
states that Mac Lane's strictification carries a unique transported braiding
for which the strictification equivalence is braided monoidal.

## Proof

**Proof technique:** direct.

1.1 Apply [L1] and [L2] to obtain a monoidal equivalence $F:\mathcal C\to\mathcal D$ with $\mathcal D$ strict. By [F1], the braiding $c$ transports across the full strong monoidal equivalence to a braiding $c^{\mathrm{str}}$ on $\mathcal D$. [L1, L2, F1, given, choose]

2.1 The transported braiding is characterized by the compatibility square $$J_{Y,X}\circ c^{\mathrm{str}}_{F(X),F(Y)}=F(c_{X,Y})\circ J_{X,Y}.$$ Thus [L3] makes $F$ braided monoidal, and $\mathcal C$ is braided-monoidally equivalent to the strict braided monoidal category $(\mathcal D,c^{\mathrm{str}})$. [L3, F1, step 1.1] ∎
