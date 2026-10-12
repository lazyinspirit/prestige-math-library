---
id: "thm-generic-extension-transitivity-and-rank-bound"
kind: "theorem"
title: "Transitivity and a valuation rank bound"
deps: ["def-forcing-name-valuation-and-generic-extension", "def-forcing-names-and-name-rank", "def-membership-rank-of-a-set"]
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Karagila Proposition 2.9 p7; Marks Lemma 24.3 p98
      url: https://karagila.org/files/Forcing-2023.pdf
provenance:
  statement: ai-altered
  proof: ai-generated
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

In ZF, for a transitive ZF ground model M and any $G\subseteq P$, $M[G]$ is transitive. For each name tau, $\operatorname{rank}(\operatorname{val}_G(\tau))\le\operatorname{rk}_P(\tau)$. No axiom satisfaction or no-new-ordinals theorem is asserted here.

## Facts & Assumptions

**Given:** ZF; arbitrary G subset P. Subname decoding in transitive M proves transitivity, and the two recursive supremum formulas prove the rank bound even for empty G.

[F1] [[def-forcing-name-valuation-and-generic-extension]]: Valuation selects values of subnames, and M[G] consists of values of names in M.

[F2] [[def-forcing-names-and-name-rank]]: Every descendant of a name is a name, and name rank is the supremum of predecessor name-ranks plus one.

[F3] [[def-membership-rank-of-a-set]]: Membership rank is the supremum of the ranks of members plus one.

## Proof

1.1 If $x\in y\in M[G]$, write $y=\operatorname{val}_G(\tau)$ for a name $\tau\in M$. By F1 some $\langle\sigma,p\rangle\in\tau$ has $p\in G$ and $x=\operatorname{val}_G(\sigma)$. Transitivity of M, applied through the Kuratowski pair, gives $\sigma\in M$; F2 says that sigma is a name. Thus $x\in M[G]$, proving transitivity. [F1, F2]

2.1 Induct on the subname relation. Every member of the valuation of tau is the valuation of some sigma below tau, so F3 gives its rank as the supremum of their value-ranks plus one. By induction this is at most the supremum of $\operatorname{rk}_P(\sigma)+1$ over all subnames sigma, which F2 identifies with $\operatorname{rk}_P(\tau)$. With no selected subnames the value rank is zero and the inequality still holds. This includes both the empty name and empty G. [F1, F2, F3, step 1.1] ∎
