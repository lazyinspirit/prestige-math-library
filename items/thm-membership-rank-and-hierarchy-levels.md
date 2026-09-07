---
id: thm-membership-rank-and-hierarchy-levels
kind: theorem
title: "Rank characterizes hierarchy membership"
status: draft
origin: pipeline
deps: ["def-membership-rank-of-a-set", "prop-cumulative-hierarchy-transitivity-and-growth"]
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Marks, Set Theory, Berkeley edition \u2014 7.3 p.34; Weiss Exercise 33 p.100."
      url: "https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf"
---

## Statement

In ZF, for every set $x$ and ordinal $\alpha$,

$$x\in V_\alpha\iff\operatorname{rank}(x)<\alpha,\qquad x\subseteq V_\alpha\iff\operatorname{rank}(x)\le\alpha.$$

Thus $\operatorname{rank}(x)$ is the least $\alpha$ with $x\subseteq V_\alpha$, and $\operatorname{rank}(x)=\alpha$ iff $x\in V_{\alpha+1}\setminus V_\alpha$.

## Facts & Assumptions

**Given:** Work in ZF unless the statement explicitly weakens or supplements it; fix the objects and hypotheses of the statement.

[F1] Now assume ZF, including Foundation. Membership on the universe is well-founded and setlike, so its ordinal rank is defined for every set. Write $$\operatorname{rank}(x)=\sup\{\operatorname{rank}(y)+1:y\in x\}.$$ The empty supremum is $0$, so $\operatorname{rank}(\varnothing)=0$. If $y\in x$, then $\operatorname{rank}(y)<\operatorname{rank}(x)$. This is the Foundation-dependent special case of relation rank. The earlier construction of $V_\alpha$ did not require Foundation. Conventions and prerequisites: def-rank-of-a-well-founded-relation, thm-foundation-equivalent-to-hierarchy-exhaustion. ([[def-membership-rank-of-a-set]])

[F2] In ZF without Foundation, every $V_\alpha$ is transitive and $\alpha\le\beta$ implies $V_\alpha\subseteq V_\beta$. Also $V_\alpha\cap\operatorname{Ord}=\alpha$, and both $\alpha$ and $V_\alpha$ belong to $V_{\alpha+1}\setminus V_\alpha$. ([[prop-cumulative-hierarchy-transitivity-and-growth]])

## Proof

1.1 Induct on $\alpha$ for the membership equivalence, for all sets $x$ at once. At zero neither membership in the empty stage nor rank below zero holds. At a successor $\beta+1$, $x\in V_{\beta+1}$ iff every $y\in x$ lies in $V_\beta$, iff every $\operatorname{rank}(y)<\beta$, iff $\sup_{y\in x}(\operatorname{rank}(y)+1)\le\beta$, iff $\operatorname{rank}(x)<\beta+1$. All equivalences include the empty supremum case. [F1, F2]

2.1 At a nonzero limit $\lambda$, membership means membership in some $V_\beta$ with $\beta<\lambda$. By induction this implies rank below $\lambda$. Conversely if $\rho=\operatorname{rank}(x)<\lambda$, then $\rho+1<\lambda$ and induction puts $x$ in $V_{\rho+1}$, hence in $V_\lambda$. [F1, F2, step 1.1]

3.1 Now $x\subseteq V_\alpha$ iff each $y\in x$ has rank below $\alpha$, iff the supremum of their successor ranks is at most $\alpha$. This proves the subset equivalence. Taking $\alpha=\operatorname{rank}(x)$ gives the least-stage assertion; applying membership at $\alpha+1$ and at $\alpha$ gives the successor-shell assertion. [F1, step 1.1, step 2.1] ∎

