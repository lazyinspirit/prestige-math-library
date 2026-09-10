---
id: prop-invariant-families-are-sigma-algebras
kind: proposition
title: Both invariant families are sigma-algebras
deps: [def-strict-and-mod-null-invariant-sigma-algebras, thm-finite-and-countable-subadditivity-of-measures]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Sarig Proposition 1.1 proof; E–W Proposition 2.14
      url: https://www.weizmann.ac.il/math/sarigo/sites/math.sarigo/files/uploads/ergodicnotes.pdf
  scraped: []
status: published
origin: pipeline
proof_strategy: direct
---

## Statement

For any measure-preserving system, $\mathcal I$ and $\mathcal I'$ are sigma-algebras on $X$, and $\mathcal I\subseteq\mathcal I'$.

## Facts & Assumptions

[F1] The two families use exact equality and null symmetric difference, respectively [[def-strict-and-mod-null-invariant-sigma-algebras]].

[F2] A countable union of measurable null sets is null [[thm-finite-and-countable-subadditivity-of-measures]].

## Proof

**Given:** The objects and hypotheses in the statement.

1.1 $T^{-1}X=X$ and $T^{-1}\varnothing=\varnothing$. Also $T^{-1}(X\setminus E)=X\setminus T^{-1}E$ and $T^{-1}(\bigcup_jE_j)=\bigcup_jT^{-1}E_j$. Thus exact invariance is preserved under complements and countable unions, proving that $\mathcal I$ is a sigma-algebra. [F1]

2.1 The symmetric difference of the two complements is $T^{-1}E\mathbin\triangle E$. Further, $T^{-1}(\bigcup_jE_j)\mathbin\triangle\bigcup_jE_j\subseteq\bigcup_j(T^{-1}E_j\mathbin\triangle E_j)$. If all component differences are null, countable subadditivity makes the union null. Therefore $\mathcal I'$ is a sigma-algebra as well. Exact invariance gives empty symmetric difference, proving $\mathcal I\subseteq\mathcal I'$. [F1, F2, step 1.1] ∎
