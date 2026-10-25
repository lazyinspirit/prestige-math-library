---
id: prop-units-in-the-holomorphic-germ-ring
kind: proposition
title: "A germ is a unit exactly when its value at $0$ is nonzero, so $\\mathcal O_{m,0}$ is local"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-holomorphic-germ-ring-and-its-maximal-ideal, prop-algebra-of-holomorphic-functions-in-several-variables, def-local-ring, prop-holomorphic-functions-are-continuous-and-separately-holomorphic]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Jiří Lebl, Tasty Bits of Several Complex Variables, Section 6.1"
      url: "https://jirilebl.github.io/scv/scv.pdf"
    - title: "Jaap Korevaar and Jan Wiegerinck, Several Complex Variables, Section 4.5"
      url: "https://staff.fnwi.uva.nl/j.j.o.o.wiegerinck/edu/scv/scvboek.pdf"
pipeline_run: frontier-22
---

## Statement

Let $m\ge1$ and let $[f]\in\mathcal O_{m,0}$. Then $[f]$ is a unit in
$\mathcal O_{m,0}$ if and only if $f(0)\ne0$. Consequently
$\mathcal O_{m,0}$ is a local ring with maximal ideal $\mathfrak m_{m,0}$.

## Facts & Assumptions

**Given:** A germ $[f]\in\mathcal O_{m,0}$.

[L1] The germ ring $\mathcal O_{m,0}$ and the ideal $\mathfrak m_{m,0}$ are those of [[def-holomorphic-germ-ring-and-its-maximal-ideal]].

[L2] Holomorphic functions are continuous, and sums, products, and reciprocals on nonvanishing open sets are holomorphic ([[prop-holomorphic-functions-are-continuous-and-separately-holomorphic]], [[prop-algebra-of-holomorphic-functions-in-several-variables]]).

[L3] A local ring is a nonzero commutative ring with a unique maximal ideal ([[def-local-ring]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $f(0)\ne0$. Choose a representative, still called $f$, on a neighbourhood $U$ of $0$. By continuity from [L2], after shrinking $U$ we have $f(z)\ne0$ for every $z\in U$. Then [L2] makes $1/f$ holomorphic on $U$, so $[f][1/f]=[1]$ in $\mathcal O_{m,0}$. Hence $[f]$ is a unit. [given, L2]

1.2 Suppose $f(0)=0$. For any germ $[g]\in\mathcal O_{m,0}$ one has $(fg)(0)=f(0)g(0)=0$, so $[f][g]\ne[1]$. Therefore $[f]$ is not a unit. [given, L1, algebra]

2.1 Steps 1.1 and 1.2 show that the nonunits are exactly the germs vanishing at $0$, namely the elements of $\mathfrak m_{m,0}$ from [L1]. Any proper ideal contains no unit, so every proper ideal of $\mathcal O_{m,0}$ is contained in $\mathfrak m_{m,0}$. Since $1\notin\mathfrak m_{m,0}$, this ideal is proper and therefore the unique maximal ideal. By [L3], $\mathcal O_{m,0}$ is local. [step 1.1, step 1.2, L1, L3] ∎
