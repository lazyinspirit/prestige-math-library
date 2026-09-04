---
id: fs-whole-semidirect-product-conjugacy-is-the-equivalence-relation-behind-first-cohomology
kind: false-statement
title: "FALSE: quotient-copy conjugacy is the equivalence relation behind first cohomology"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-first-cohomology-classifies-complements-up-to-kernel-conjugacy]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "David A. Craven, Finite Group Theory"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/finitegroups2012.pdf"
---

## Statement

The equivalence relation behind first cohomology is conjugacy by the canonical
quotient copy of $G$ in $A\rtimes G$.

## Facts & Assumptions

**Given:** The inversion action of $C_2=\langle t\rangle$ on the additive group
$A=\mathbb Z$.

[L1] First cohomology classifies complements up to conjugacy by the kernel copy
of $A$ ([[thm-first-cohomology-classifies-complements-up-to-kernel-conjugacy]]).

## Refutation

**Proof technique:** direct.

1.1 For every integer $m$, the map $z_m:C_2\to\mathbb Z$ given by $z_m(1)=0$ and $z_m(t)=m$ is a crossed homomorphism. Conjugation by the kernel element $(1,1)$ changes the graph of $z_1$ to the graph of $z_3$, since the corresponding principal cocycle has value $t\cdot(-1)-(-1)=2$ at $t$. Hence $z_1$ and $z_3$ represent the same class under the kernel-conjugacy relation of [L1]. [given, L1, algebra]

2.1 The quotient copy has only the elements $(0,1)$ and $(0,t)$. Conjugating the graph of $z_m$ by $(0,t)$ gives the graph of $z_{-m}$, so quotient-copy conjugacy sends $\Gamma_{z_1}$ only to itself or to $\Gamma_{z_{-1}}$, never to $\Gamma_{z_3}$. Thus quotient-copy conjugacy misses a pair that [L1] identifies, and it is not the equivalence relation defining $H^1$. [L1, step 1.1, algebra] ∎
