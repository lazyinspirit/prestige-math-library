---
id: thm-normalizer-of-a-sylow-normalizer
kind: theorem
title: "A subgroup containing the normalizer of a Sylow subgroup is self-normalizing"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-sylow-second-theorem, def-normalizer-of-a-subgroup]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Consequences of the Sylow Theorems, Sections 1-5"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/sylowapp.pdf"
pipeline_run: null
---

## Statement

Let $P$ be a Sylow $p$-subgroup of a finite group $G$. If $N_G(P)\le H\le G$, then $N_G(H)=H$. In particular, $N_G(N_G(P))=N_G(P)$. See [[thm-sylow-second-theorem]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Statement.

[L1] Let $G$ be finite, let $P$ be a Sylow $p$-subgroup, and let $H\le G$ be a $p$-subgroup. There is $g\in G$ with $H\le gPg^{-1}$. In particular, for every Sylow $p$-subgroup $Q$ there is $g\in G$ with $Q=gPg^{-1}$, so the Sylow $p$-subgroups form one conjugacy class. ([[thm-sylow-second-theorem]]).

[L2] Let $H\le G$ be a subgroup (def-subgroup). The normalizer of $H$ in $G$ is $$N_G(H):=\{g\in G:gHg^{-1}=H\}.$$ Thus $g\in N_G(H)$ exactly when the conjugation automorphism $c_g$ preserves $H$ setwise (thm-conjugation-is-an-automorphism). The subgroup property is proved in lem-centralizers-and-normalizers-are-subgroups. ([[def-normalizer-of-a-subgroup]]).

## Proof

**Proof technique:** direct.

1.1 For $N_G(P)\le H\le G$ and $x\in N_G(H)$, the groups $P$ and $xPx^{-1}$ are Sylow in $H$. [L1, L2, given, algebra]

2.1 Conjugate them inside $H$; the resulting element puts $x$ in $H$. [step 1.1, given, algebra]

3.1 Specialize to $H=N_G(P)$ to obtain $N_G(N_G(P))=N_G(P)$. This proves the stated claim. [step 2.1, given, algebra] ∎
