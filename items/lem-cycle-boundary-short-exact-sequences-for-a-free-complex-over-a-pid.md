---
id: lem-cycle-boundary-short-exact-sequences-for-a-free-complex-over-a-pid
title: "The cycle-boundary short exact sequences for a free complex over a PID"
kind: lemma
status: published
origin: pipeline
deps: ["def-chain-complex-in-an-abelian-category", "def-homology-object-of-a-chain-complex", "def-principal-ideal-domain"]
proof_strategy: direct
sources:
  references:
    - title: "Weibel, An Introduction to Homological Algebra"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-06
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Statement

For every chain complex $C$, the differential and quotient maps give exact sequences $0\to Z_nC\to C_n\xrightarrow{d_n}B_{n-1}C\to0$ and $0\to B_nC\to Z_nC\to H_nC\to0$.

## Proof

**Given:** $Z_nC=\ker d_n$, $B_nC=\operatorname{im}d_{n+1}$, and $H_nC=Z_nC/B_nC$.

1.1 Corestricting $d_n:C_n\to C_{n-1}$ to its image gives a surjection $C_n\twoheadrightarrow B_{n-1}C$ whose kernel is $Z_nC$. [given]

2.1 Since $d_nd_{n+1}=0$, $B_nC\subseteq Z_nC$; the quotient map $Z_nC\twoheadrightarrow Z_nC/B_nC=H_nC$ has kernel $B_nC$, proving both sequences. [step 1.1, algebra] ∎
