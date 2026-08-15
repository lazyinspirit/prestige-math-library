---
id: prop-extension-of-scalars-preserves-flat-modules
kind: proposition
title: "Extension of scalars carries flat modules to flat modules"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-change-of-rings-for-extension-of-scalars, thm-flatness-criteria-by-injections-and-ideals, def-restriction-and-extension-of-scalars]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Stacks Project, Lemma 10.39.7"
      url: "https://stacks.math.columbia.edu/tag/00H9"
pipeline_run: null
---

## Statement

Let $R\to S$ be a homomorphism of commutative rings. If $M$ is a flat $R$-module, then its extension of scalars $S\otimes_RM$ is a flat $S$-module.

## Facts & Assumptions

**Given:** A ring map $R\to S$ and a flat $R$-module $M$.

[L1] For every right $S$-module $N$, there is a natural isomorphism $N\otimes_S(S\otimes_RM)\cong N\otimes_RM$ after restriction of scalars ([[cor-change-of-rings-for-extension-of-scalars]]).

[L2] A module is flat exactly when tensoring with it preserves injections ([[thm-flatness-criteria-by-injections-and-ideals]]).

[L3] Restriction of scalars leaves the underlying abelian group and function of a module map unchanged ([[def-restriction-and-extension-of-scalars]]).

## Proof

**Proof technique:** direct.

1.1 Let $u:N\to N'$ be an injection of right $S$-modules. By [L3], it is still injective after restriction to $R$-modules. [given, L3]

2.1 Since $M$ is flat, [L2] makes $u\otimes_R1_M:N\otimes_RM\to N'\otimes_RM$ injective. [step 1.1, L2]

3.1 Under the natural isomorphisms [L1], the map in step 2.1 is precisely $u\otimes_S1_{S\otimes_RM}$. Hence tensoring over $S$ with $S\otimes_RM$ preserves every injection. [step 2.1, L1]

4.1 By [L2] over the ring $S$, the extended module $S\otimes_RM$ is flat. [step 3.1, L2] ∎
