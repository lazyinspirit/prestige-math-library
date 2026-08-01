---
id: thm-normal-subgroup-characterisations
kind: theorem
title: "Equivalent characterisations of a normal subgroup by conjugates and left and right cosets"
status: published
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-normal-subgroup, lem-group-inverse-laws]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "Encyclopedia of Mathematics, Normal subgroup"
      url: "https://encyclopediaofmath.org/wiki/Normal_subgroup"
pipeline_run: null
---

## Statement

Let $N\le G$. The following conditions are equivalent:

1. $N\mathrel{\trianglelefteq}G$ ([[def-normal-subgroup]]);
2. $gNg^{-1}\subseteq N$ for every $g\in G$;
3. $gN=Ng$ for every $g\in G$, where these are the left and right cosets of
   $N$ represented by $g$.

## Facts & Assumptions

**Given:** A group $G$ and a subgroup $N\le G$.

[F1] The subgroup $N$ is normal when $gNg^{-1}=N$ for every $g\in G$ ([[def-normal-subgroup]]).

[L1] In a group, $(g^{-1})^{-1}=g$ and $(gh)^{-1}=h^{-1}g^{-1}$ ([[lem-group-inverse-laws]]).

## Proof

**Proof technique:** direct.

1.1 Condition 1 implies condition 2 because equality implies containment. [F1]

1.2 Suppose condition 2 holds. Applying it to $g^{-1}$ gives $g^{-1}Ng\subseteq N$; conjugating this containment by $g$ and using $(g^{-1})^{-1}=g$ gives $N\subseteq gNg^{-1}$, while condition 2 gives the reverse containment. Hence $gNg^{-1}=N$ for every $g$, so condition 1 holds. [given, L1, algebra]

1.3 Suppose condition 1 holds. If $x\in gN$, then $x=gn=(gng^{-1})g$ for some $n\in N$, and $gng^{-1}\in N$ by [F1], so $x\in Ng$. Replacing $g$ by $g^{-1}$ gives the reverse inclusion, hence $gN=Ng$. [given, F1, L1, algebra]

1.4 Suppose condition 3 holds. For $n\in N$, the element $gn$ lies in $gN=Ng$, so $gn=n'g$ for some $n'\in N$; therefore $gng^{-1}=n'\in N$. Thus $gNg^{-1}\subseteq N$ and condition 2 holds. [given, algebra]

2.1 Steps 1.1 through 1.4 prove that conditions 1, 2, and 3 are equivalent. [step 1.1, step 1.2, step 1.3, step 1.4] ∎
