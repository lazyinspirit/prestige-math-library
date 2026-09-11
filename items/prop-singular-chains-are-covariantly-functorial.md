---
id: "prop-singular-chains-are-covariantly-functorial"
kind: "proposition"
title: "Singular chains are covariantly functorial"
deps: ["def-real-singular-chain-complex", "prop-singular-chains-and-homology-are-covariantly-functorial"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "DG-16 design; Hatcher/Park control"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
      locator: "DG-16 item 3; Hatcher §3.1 or Park §2 as applicable; source audit limitations in batch notes"
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

For a continuous map $f:X\to Y$, postcomposition defines a real-linear chain map $f_\#:C_\bullet(X;\mathbb R)\to C_\bullet(Y;\mathbb R)$. These maps satisfy $(g\circ f)_\#=g_\#f_\#$ and $(\operatorname{id}_X)_\#=\operatorname{id}$, so real singular chains are covariantly functorial.

## Facts & Assumptions

**Given:** Topological spaces and continuous maps $f:X\to Y$, $g:Y\to Z$.

[F1] Real chains have a supplied simplex basis and signed face differential, with zero groups in negative degrees ([[def-real-singular-chain-complex]]).

[F2] The coefficient-chain functor sends $f$ to postcomposition and respects identities and composition ([[prop-singular-chains-and-homology-are-covariantly-functorial]]).

## Proof

1.1 Define $f_\#(\sum a_\sigma[\sigma])=\sum a_\sigma[f\circ\sigma]$. Composites are continuous, the sum is finite, and collecting equal images preserves addition and real scalar multiplication. Under the real tensor identification this is exactly the map in [F2]. In negative degrees it is the unique map between zero spaces. [given, F1, F2]

2.1 For $k\ge1$, $\partial f_\#[\sigma]=\sum_{i=0}^k(-1)^i[f\circ\sigma\circ\delta_i]=f_\#\partial[\sigma]$. Real linearity extends equality to all chains; for $k\le0$ both composites are zero. This includes constant and degenerate simplices because the computation does not discard any face. [F1, step 1.1, algebra]

3.1 On every generator, $g_\#f_\#[\sigma]=[g\circ f\circ\sigma]=(g\circ f)_\#[\sigma]$ and $(\operatorname{id}_X)_\#[\sigma]=[\sigma]$. Finite linear extension proves both laws. They also hold on zero groups, including all chains of the empty space. On a point each nonnegative chain map induced by its identity is the identity of $\mathbb R$. All maps are given by formulas on supplied generators; no AC is used. [step 1.1, step 2.1, algebra] ∎
