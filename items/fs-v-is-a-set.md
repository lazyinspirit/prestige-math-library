---
id: fs-v-is-a-set
kind: false-statement
title: "V is a set"
status: published
origin: pipeline
deps: ["cor-universe-is-the-class-union-of-its-stages", "def-membership-rank-of-a-set"]
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Moschovakis, Lecture Notes in Logic (2014) \u2014 Appendix app6 p.3; Marks hierarchy rank formula."
      url: "https://www.math.ucla.edu/~ynm/lectures/lnl.pdf"
---

## Statement

False statement: the class $V$ of all sets is itself a set. Equivalently, there is a set containing every set as an element.

## Facts & Assumptions

**Given:** Work in ZF unless the statement explicitly weakens or supplements it; fix the objects and hypotheses of the statement.

[F1] In ZF every set $x$ belongs to $V_{\operatorname{rank}(x)+1}$. Consequently $V=\bigcup_{\alpha\in\operatorname{Ord}}V_\alpha$ in the class sense: every set lies in a stage. This is not a union indexed by a set of all ordinals. ([[cor-universe-is-the-class-union-of-its-stages]])

[F2] Now assume ZF, including Foundation. Membership on the universe is well-founded and setlike, so its ordinal rank is defined for every set. Write $$\operatorname{rank}(x)=\sup\{\operatorname{rank}(y)+1:y\in x\}.$$ The empty supremum is $0$, so $\operatorname{rank}(\varnothing)=0$. If $y\in x$, then $\operatorname{rank}(y)<\operatorname{rank}(x)$. This is the Foundation-dependent special case of relation rank. The earlier construction of $V_\alpha$ did not require Foundation. Conventions and prerequisites: def-rank-of-a-well-founded-relation, thm-foundation-equivalent-to-hierarchy-exhaustion. ([[def-membership-rank-of-a-set]])

## Refutation

1.1 Suppose a set $U$ contains every set. In particular it contains itself, since $U$ is a set. Under ZF its membership rank is an ordinal, and the strict membership-rank inequality gives $\operatorname{rank}(U)<\operatorname{rank}(U)$. [F2]

2.1 An ordinal cannot be strictly below itself, so such $U$ does not exist. The class-union assertion about the hierarchy states only that every set belongs to some stage, and therefore does not supply a set U to evade this contradiction. [F1, step 1.1] ∎
