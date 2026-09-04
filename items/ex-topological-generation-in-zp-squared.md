---
id: ex-topological-generation-in-zp-squared
kind: example
title: "In Zp squared, topological generation is detected by the Frattini quotient coordinates"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-topological-burnside-basis-theorem, def-external-direct-product-of-groups]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Alexander Lubotzky, Combinatorial group theory for pro-p groups"
      url: "https://www.researchgate.net/publication/242982224_Combinatorial_group_theory_for_pro-p_groups"
---

## Example

In $G=\mathbb Z_p\times\mathbb Z_p$, a pair $(u,v)$ topologically generates $G$
if and only if their reductions modulo $p$ form a basis of
$\mathbb F_p^2$.

## Facts & Assumptions

**Given:** The pro-$p$ group $G=\mathbb Z_p\times\mathbb Z_p$.

[L1] Topological generation in a finitely generated pro-$p$ group is detected
on the Frattini quotient ([[thm-topological-burnside-basis-theorem]]).

[F1] The external direct product is coordinatewise
([[def-external-direct-product-of-groups]]).

## Verification

**Proof technique:** direct.

1.1 By coordinatewise addition in [F1], the subgroup $pG$ consists of pairs whose two coordinates are divisible by $p$. Therefore $G/pG\cong(\mathbb Z_p/p\mathbb Z_p)\times(\mathbb Z_p/p\mathbb Z_p)\cong\mathbb F_p^2$. [F1, given, algebra]

2.1 The Frattini quotient of the abelian pro-$p$ group $G$ is exactly $G/pG$, so [L1] says that a subset topologically generates $G$ exactly when its image spans $\mathbb F_p^2$. For a pair $(u,v)$, spanning $\mathbb F_p^2$ is the same as being a basis. [L1, step 1.1, algebra] ∎
