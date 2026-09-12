---
id: "lem-invariants-for-a-group-extension-compose"
kind: "lemma"
title: "Invariants for a group extension compose"
deps: ["def-invariants-functor-of-a-group-module", "lem-kernel-subgroup-in-a-group-extension-is-normal-and-the-quotient-is-the-base"]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: "Weibel, 6.8.2"
      url: "https://math.mit.edu/~hrm/palestine/weibel/06-group_homology_and_cohomology.pdf"
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
proof_strategy: "direct"
---

## Statement

For an extension $1\to N\to G\xrightarrow{\pi}Q\to1$ and a left $G$-module $M$, the subgroup $M^N$ has the well-defined action $\pi(g)m=gm$, and $(M^N)^Q=M^G$ naturally as abelian groups.

## Facts & Assumptions

**Given:** The extension and module above.

[F1] Invariants are elements fixed by every element of the acting group ([[def-invariants-functor-of-a-group-module]]).

[F2] The kernel $N$ is normal and $G/N\cong Q$ ([[lem-kernel-subgroup-in-a-group-extension-is-normal-and-the-quotient-is-the-base]]).

## Proof

1.1 If $m\in M^N$, $g\in G$ and $n\in N$, then $n(gm)=g(g^{-1}ng)m=gm$ by normality. Thus $M^N$ is $G$-stable. If $g'=gn$ has the same image in $Q$, then $g'm=gnm=gm$. The proposed action is independent of a lift, and its identity and product laws follow from those of the $G$-action. No simultaneous selection of lifts is needed. [F1, F2]

2.1 Every $G$-fixed element is $N$-fixed and is fixed by each quotient element acting as in step 1.1. Conversely, if $m\in(M^N)^Q$, then $gm=\pi(g)m=m$ for every $g\in G$. This proves equality in both directions. A $G$-linear map sends fixed elements to fixed elements and respects the quotient action, so the equality is natural. It also applies to $M=0$, $N=1$ and $Q=1$. [F1, step 1.1] ∎
