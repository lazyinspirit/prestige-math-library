---
id: lem-transitive-subgroups-of-s-four-and-the-resolvent-action
kind: lemma
title: "The transitive subgroups of $S_4$ and their action on the three pairings"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-alternating-group, def-normal-subgroup, thm-lagrange, def-quotient-group, cor-orbit-stabilizer-cardinality, thm-sylow-second-theorem]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "K. Conrad, Galois Groups of Cubics and Quartics, Table 3"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/cubicquartic.pdf"
    - title: "J. S. Milne, Fields and Galois Theory, v5.10, Quartic polynomials"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
pipeline_run: null
---

## Statement

Up to conjugacy, the transitive subgroups of $S_4$ are $S_4,A_4,D_4,C_4$, and $V_4$, with the stated action on the three pairings. If

$$V_4=\{1,(12)(34),(13)(24),(14)(23)\},$$

then the action on the three partitions of $\{1,2,3,4\}$ into two unordered pairs has kernel $V_4$. The corresponding data are:

| $H$ | $\lvert H\cap V_4\rvert$ | image on pairings | $H\le A_4$ |
|---|---:|---|---|
| $S_4$ | $4$ | $S_3$ | no |
| $A_4$ | $4$ | $A_3$ | yes |
| $D_4$ | $4$ | $C_2$ | no |
| $C_4$ | $2$ | $C_2$ | no |
| $V_4$ | $4$ | trivial | yes |

## Facts & Assumptions

**Given:** The natural action of $S_4$ on four symbols; orbit-stabilizer cardinality ([[cor-orbit-stabilizer-cardinality]]); Lagrange's theorem ([[thm-lagrange]]); conjugacy of Sylow subgroups ([[thm-sylow-second-theorem]]); and kernels as normal subgroups with quotient image ([[def-normal-subgroup]], [[def-quotient-group]]).

[L1] Thus $A_n$ consists exactly of the even permutations ([[def-alternating-group]]).

## Proof

**Proof technique:** direct.

1.1 Acting on the explicitly listed pairings gives a homomorphism $\theta:S_4\to S_3$. A permutation fixes all three pairings exactly when it is the identity or one of the three double transpositions, so $\ker\theta=V_4$. [algebra]

2.1 If $H\le S_4$ is transitive on four symbols, orbit-stabilizer makes $4$ divide $|H|$ and Lagrange makes $|H|$ divide $24$, so $|H|\in\{4,8,12,24\}$. Order $24$ gives $S_4$. An order-$12$ subgroup has index two and is normal; if it contained an odd permutation, the conjugates of that transposition or four-cycle would generate $S_4$, so it is $A_4$. An order-$8$ subgroup is Sylow and hence conjugate to the standard $D_4$. For order $4$ the action is regular; an element of order four gives $C_4$, and otherwise all nonidentity elements have order two and give $V_4$. [step 1.1, given]

3.1 Intersecting representatives with the kernel in step 1.1 gives the second column of the table, and the quotient orders give the pairing images. By [L1], $S_4,D_4,C_4$ contain odd permutations, whereas $A_4$ and $V_4$ do not. These invariants give the displayed rows; only $D_4$ and $C_4$ share the same nontrivial intransitive pairing image, and their different kernel orders distinguish them. [step 1.1, step 2.1, L1, algebra] ∎
