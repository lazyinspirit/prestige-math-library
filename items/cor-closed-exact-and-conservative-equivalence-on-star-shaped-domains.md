---
id: cor-closed-exact-and-conservative-equivalence-on-star-shaped-domains
kind: corollary
title: "On a star-shaped open domain, closed, exact, conservative, path-independent, and zero-loop are equivalent"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-star-shaped-open-subset-of-rn, def-closed-and-exact-c1-vector-fields, def-piecewise-c1-path-connected-conservative-and-path-independent, thm-exact-c1-vector-fields-are-closed, thm-poincare-lemma-for-star-shaped-domains, thm-conservative-path-independent-and-zero-loop-equivalence]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "J.-B. Campesato, Poincare Lemma, sections 1 and 2"
      url: "https://www.math.toronto.edu/campesat/ens/1920/poincare.pdf"
pipeline_run: null
---

## Statement

Let $U\subseteq\mathbb R^n$ be open and star-shaped, and let $F:U\to\mathbb R^n$ be $C^1$. The following are equivalent:

1. $F$ is closed;
2. $F$ is exact;
3. $F$ is conservative;
4. $F$ is path-independent;
5. every closed piecewise-$C^1$ path $\gamma$ in $U$ satisfies $\int_\gamma F\cdot d\mathbf r=0$.

## Facts & Assumptions
**Given:** The star-shaped domain and $C^1$ field in the Statement.

[L1] A star-shaped open set is nonempty and contains every segment from a star centre to a point of the set ([[def-star-shaped-open-subset-of-rn]]).

[L2] Exactness uses a $C^2$ potential, whereas conservativity uses a $C^1$ potential ([[def-closed-and-exact-c1-vector-fields]], [[def-piecewise-c1-path-connected-conservative-and-path-independent]]).

[L3] Every exact $C^1$ field is closed, and every closed $C^1$ field on a star-shaped domain is exact ([[thm-exact-c1-vector-fields-are-closed]], [[thm-poincare-lemma-for-star-shaped-domains]]).

[L4] For a continuous field on a nonempty open piecewise-$C^1$ path-connected domain, conservativity, path independence, and the zero-loop condition are equivalent ([[thm-conservative-path-independent-and-zero-loop-equivalence]]).



## Proof

**Proof technique:** direct.

1.1 If $a$ is a star centre, any $x,y\in U$ are joined by the segment from $x$ to $a$ followed by the segment from $a$ to $y$. By [L1] these segments lie in $U$, so $U$ is piecewise-$C^1$ path-connected. [given, L1]

1.2 Conditions 1 and 2 are equivalent by the two implications in [L3]. [given, L3]

1.3 Condition 2 implies condition 3 by [L2]. Conversely, if $F=\nabla\phi$ with $\phi$ merely $C^1$, then the first partials of $\phi$ are the components of the $C^1$ field $F$; hence $\phi$ is $C^2$, and condition 2 holds. [given, L2, algebra]

2.1 By step 1.1, all hypotheses of [L4] hold, so conditions 3, 4, and 5 are equivalent. [step 1.1, L4]

3.1 Combining steps 1.2, 1.3, and 2.1 proves the five-way equivalence. [step 1.2, step 1.3, step 2.1] ∎
