---
id: lem-author-13e6fe931c45-shifted-units
kind: lemma
title: Cohomology of shifted Nisnevich units
status: draft
domain: mathematics
deps:
  - def-derived-sections-on-sites
  - lem-nisnevich-line-bundle-torsors
dependency_roles:
  def-derived-sections-on-sites: mathematical-premise
  lem-nisnevich-line-bundle-torsors: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 14
---

## Statement
Assume the Axiom of Choice and the size bounds in [[def-derived-sections-on-sites]]. For a scheme $X$, put $A=R\Gamma_{\rm Nis}(X,\mathbb G_m)[-1]$, using the small Nisnevich site and the sheaf of units of [[lem-nisnevich-line-bundle-torsors]]. Then $H^i(A)=H^{i-1}_{\rm Nis}(X,\mathbb G_m)$ for every integer $i$; these groups are zero for $i\leq0$, the global units for $i=1$, and $\operatorname{Pic}(X)$ for $i=2$.

## Facts & Assumptions

**Given:** $X$, the stated site, Choice, and the size bounds.

**Goal:** Compute the indicated cohomology groups.

[F1] Derived sections of an abelian sheaf concentrated in degree zero have no negative cohomology ([[def-derived-sections-on-sites]]).

[F2] Degree-zero Nisnevich cohomology of $\mathbb G_m$ is $\Gamma(X,\mathcal O_X)^\times$, and degree one is $\operatorname{Pic}(X)$, the group of line bundles under tensor product ([[lem-nisnevich-line-bundle-torsors]]).

## Proof

1.1 For the cohomological shift, a complex $C[-1]$ has $C[-1]^i=C^{i-1}$, with the corresponding signed differential. Its cycles and boundaries in degree $i$ are those of $C$ in degree $i-1$, so $H^i(C[-1])=H^{i-1}(C)$. Apply this to the derived-sections complex. [given, algebra]

2.1 If $i\leq0$, then $i-1<0$, so [F1] gives zero. For $i=1,2$, [F2] gives global units and the Picard group respectively. These identifications use the specified small site and retain the Choice and size hypotheses. [F1, F2, step 1.1] ∎
