---
id: ex-sylow-subgroups-of-affine-group-modulo-five
kind: example
title: "Sylow subgroups of $\\operatorname{Aff}(\\mathbb Z/5)$: $n_2=5$ and $n_5=1$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-sylow-third-theorem, cor-sylow-subgroup-normal-iff-unique, def-external-semidirect-product, thm-z-mod-p-is-a-field]
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

## Example

In $\operatorname{Aff}(\mathbb Z/5)$, the translation subgroup is the unique Sylow $5$-subgroup and the five point stabilizers are the Sylow $2$-subgroups. Thus $n_5=1$ and $n_2=5$. See [[thm-sylow-third-theorem]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Example.

[L1] Let $|G|=p^am$ with $p\nmid m$. Then the number of Sylow $p$-subgroups satisfies $$n_p(G)\equiv1\pmod p,\qquad n_p(G)\mid m.$$. ([[thm-sylow-third-theorem]]).

[L2] A Sylow $p$-subgroup of a finite group is normal if and only if it is the unique Sylow $p$-subgroup. ([[cor-sylow-subgroup-normal-iff-unique]]).

[L3] Let $N$ and $H$ be groups (def-group), and let $\alpha:H\to\operatorname{Aut}(N)$ be an action by automorphisms (def-action-by-automorphisms). The external semidirect product $N\rtimes_\alpha H$ is the set $N\times H$ with multiplication. ([[def-external-semidirect-product]]).

[L4] For every prime $p$, the operations of addition and multiplication on $\mathbb Z/p$ make it a field (def-field). ([[thm-z-mod-p-is-a-field]]).

## Verification

**Proof technique:** direct.

1.1 Composition identifies the affine maps $x\mapsto ax+b$, with $a\in\mathbb F_5^\times$ and $b\in\mathbb F_5$, with $\mathbb F_5\rtimes\mathbb F_5^\times$. The multiplier map has the translation subgroup as its kernel, so that normal subgroup has order $5$ and is the unique Sylow $5$-subgroup. [L1, L2, L3, L4, given, algebra]

2.1 For each $c\in\mathbb F_5$, the stabilizer of $c$ consists of the four maps $x\mapsto a(x-c)+c$. It has order $4$, the full $2$-part of the group order $20$, and hence is Sylow. [step 1.1, given, algebra]

3.1 The five point stabilizers are distinct, and Sylow III permits at most five Sylow $2$-subgroups. Consequently they are all of them, so $n_2=5$ and $n_5=1$. This proves the stated claim. [step 2.1, given, algebra] ∎
