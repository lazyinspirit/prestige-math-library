---
id: thm-frattini-argument
kind: theorem
title: "Frattini argument: if $N\\trianglelefteq G$ and $P$ is Sylow in $N$, then $G=N N_G(P)$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-sylow-second-theorem, def-normalizer-of-a-subgroup, lem-product-with-normal-subgroup]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "David A. Craven, Finite Group Theory, Sections 1.4 and 2.3"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/finitegroups2012.pdf"
pipeline_run: null
---

## Statement

If $N\trianglelefteq G$ is finite and $P$ is a Sylow $p$-subgroup of $N$, then $$G=N N_G(P).$$ See [[thm-sylow-second-theorem]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Statement.

[L1] Let $G$ be finite, let $P$ be a Sylow $p$-subgroup, and let $H\le G$ be a $p$-subgroup. There is $g\in G$ with $H\le gPg^{-1}$. In particular, for every Sylow $p$-subgroup $Q$ there is $g\in G$ with $Q=gPg^{-1}$, so the Sylow $p$-subgroups form one conjugacy class. ([[thm-sylow-second-theorem]]).

[L2] Let $H\le G$ be a subgroup (def-subgroup). The normalizer of $H$ in $G$ is $$N_G(H):=\{g\in G:gHg^{-1}=H\}.$$ Thus $g\in N_G(H)$ exactly when the conjugation automorphism $c_g$ preserves $H$ setwise (thm-conjugation-is-an-automorphism). The subgroup property is proved in lem-centralizers-and-normalizers-are-subgroups. ([[def-normalizer-of-a-subgroup]]).

[L3] If $H\le G$ and $N\mathrel{\trianglelefteq}G$, then $HN$ is a subgroup and $H\cap N\mathrel{\trianglelefteq}H$. Here $HN:=\{hn:h\in H,\ n\in N\}$. ([[lem-product-with-normal-subgroup]]).

## Proof

**Proof technique:** direct.

1.1 For each $g\in G$, normality makes $gPg^{-1}$ Sylow in $N$. [L1, L2, L3, given, algebra]

2.1 Sylow II inside $N$ supplies $n\in N$ conjugating it back to $P$, so $ng\in N_G(P)$ and $g\in N N_G(P)$. [step 1.1, given, algebra]

3.1 The reverse containment is immediate. This proves the stated claim. [step 2.1, given, algebra] ∎
