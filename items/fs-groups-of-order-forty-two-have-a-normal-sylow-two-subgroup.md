---
id: fs-groups-of-order-forty-two-have-a-normal-sylow-two-subgroup
kind: false-statement
title: "False statement: every group of order $42$ has a normal Sylow $2$-subgroup"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-sylow-third-theorem, def-external-semidirect-product, thm-z-mod-p-is-a-field]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Consequences of the Sylow Theorems, Sections 1-5"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/sylowapp.pdf"
pipeline_run: null
---

## Statement

**False claim:** every group of order $42$ has a normal Sylow $2$-subgroup. See [[thm-sylow-third-theorem]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the false claim.

[L1] Let $|G|=p^am$ with $p\nmid m$. Then the number of Sylow $p$-subgroups satisfies $$n_p(G)\equiv1\pmod p,\qquad n_p(G)\mid m.$$. ([[thm-sylow-third-theorem]]).

[L2] Let $N$ and $H$ be groups (def-group), and let $\alpha:H\to\operatorname{Aut}(N)$ be an action by automorphisms (def-action-by-automorphisms). The external semidirect product $N\rtimes_\alpha H$ is the set $N\times H$ with multiplication. ([[def-external-semidirect-product]]).

[L3] For every prime $p$, the operations of addition and multiplication on $\mathbb Z/p$ make it a field (def-field). ([[thm-z-mod-p-is-a-field]]).

## Refutation

**Proof technique:** direct.

1.1 We construct the affine group $\mathbb F_7\rtimes\mathbb F_7^\times$ of order $42$. [L1, L2, L3, given, algebra]

2.1 Its seven involutions $x\mapsto -x+b$ generate seven Sylow $2$-subgroups, so none is normal. [step 1.1, given, algebra]

3.1 The translations $x\mapsto x+b$ form a subgroup of order $7$, and it is normal because $(x\mapsto ax+c)$ conjugates $x\mapsto x+b$ to $x\mapsto x+ab$, again a translation; so the group does have a normal Sylow $7$-subgroup, and it is only the Sylow $2$-subgroups that fail to be normal. The count $n_2=7$ of step 2.1 is consistent with [L1], since $7\equiv1\pmod2$ and $7\mid21$. This proves the stated claim. [step 2.1, L1, given, algebra] ∎
