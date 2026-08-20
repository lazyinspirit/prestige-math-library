---
id: thm-regular-covering-characterizations
kind: theorem
title: "A connected covering is regular exactly when its induced subgroup is normal, exactly when deck transformations act transitively on a fibre"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-regular-covering, lem-covering-basepoint-change-conjugates-subgroup,
       lem-deck-transformations-correspond-to-normalizer-cosets,
       def-normal-subgroup, thm-normal-subgroup-characterisations,
       prop-monodromy-acts-by-bijections-and-detects-components,
       thm-path-lifting-for-covering-maps]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology, Proposition 1.39(a)"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf"
    - title: "J. Peter May, A Concise Course in Algebraic Topology, Chapter 3, Section 7"
      url: "https://math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
pipeline_run: null
---

## Statement

Let $p:(E,e_0)\to(B,b_0)$ be a covering with path-connected total space and path-connected locally path-connected base. Put

$$G=\pi_1(B,b_0),\qquad H=p_*\pi_1(E,e_0).$$

The following are equivalent:

1. $p$ is regular ([[def-regular-covering]]);
2. $H\trianglelefteq G$;
3. $\operatorname{Deck}(E/B)$ acts transitively on the fibre $p^{-1}(b_0)$.

No finiteness hypothesis is imposed on the fibre or on the index of $H$.

## Facts & Assumptions

**Given:** The connected based covering and groups $G,H$ in the Statement.

[L1] The subgroup at the endpoint $e_0\cdot g$ of a lifted loop is $g^{-1}Hg$ ([[lem-covering-basepoint-change-conjugates-subgroup]]).

[L2] A deck transformation sends $e_0$ to $e_0\cdot g$ exactly when $g\in N_G(H)$ ([[lem-deck-transformations-correspond-to-normalizer-cosets]]).

[F1] A subgroup is normal exactly when it is preserved under conjugation by every group element ([[thm-normal-subgroup-characterisations]]).

[F2] In a path-connected covering, the right-monodromy orbit through a fibre point is the whole fibre ([[prop-monodromy-acts-by-bijections-and-detects-components]]).

[F3] A path has a unique lift from each prescribed point over its initial point ([[thm-path-lifting-for-covering-maps]]).

## Proof

**Proof technique:** direct.

1.1 By [F2], every point of $p^{-1}(b_0)$ has the form $e_0\cdot g$ for some $g\in G$, and [L1] records the subgroup at that point. [L1, F2]

2.1 By [L2], a deck transformation reaches $e_0\cdot g$ from $e_0$ exactly when $g$ normalizes $H$. Hence the deck action on $p^{-1}(b_0)$ is transitive exactly when $N_G(H)=G$, which by [F1] is exactly when $H\trianglelefteq G$. This proves the equivalence of clauses 2 and 3. [step 1.1, L2, F1]

3.1 For the implication from normality to regularity, clause 2 gives clause 3 by step 2.1. Let $e,e'$ lie over an arbitrary $b\in B$, choose a path from $b$ to $b_0$, and lift it from $e,e'$ to points $u,u'$ over $b_0$. Clause 3 gives a deck transformation $\tau$ with $\tau(u)=u'$. Applying $\tau$ to the reverse lift from $u$ produces a lift from $u'$, so uniqueness in [F3] gives $\tau(e)=e'$. Thus the deck group is transitive on every fibre and the covering is regular. [step 2.1, F3]

4.1 For the converse implication from regularity, the definition makes the deck action transitive on $p^{-1}(b_0)$, so clause 3 holds. Step 2.1 then gives $N_G(H)=G$, and [F1] gives $H\trianglelefteq G$. Thus clauses 1, 2, and 3 are equivalent. [step 2.1, F1] ∎

