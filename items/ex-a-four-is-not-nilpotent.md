---
id: ex-a-four-is-not-nilpotent
kind: example
title: "$A_4$ is not nilpotent"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-sylow-characterizations-of-finite-nilpotence, def-alternating-group, cor-sylow-subgroup-normal-iff-unique]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-sonnet-5"
    verdict: pass
    date: 2026-08-17
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Consequences of the Sylow Theorems, Sections 1-5"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/sylowapp.pdf"
pipeline_run: null
---

## Example

The group $A_4$ has a normal Klein four Sylow $2$-subgroup and four nonnormal Sylow $3$-subgroups. Consequently $A_4$ is not nilpotent. See [[thm-sylow-characterizations-of-finite-nilpotence]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Example.

[L1] For a finite group $G$, the following are equivalent: $G$ is nilpotent; every Sylow subgroup is normal; $G$ is the internal direct product of its Sylow subgroups; and every maximal subgroup of $G$ is normal. ([[thm-sylow-characterizations-of-finite-nilpotence]]).

[L2] For $n\in\mathbb N$, the alternating group is the kernel of the sign homomorphism, $$A_n:=\ker(\operatorname{sgn}:S_n\to\{+1,-1\})=\{\sigma\in S_n:\operatorname{sgn}(\sigma)=1\}.$$ Thus $A_n$ consists exactly of the even permutations. The subgroup and normality assertions implicit in the word “group” follow from thm-image-subgroup-and-kernel-normal. ([[def-alternating-group]]).

[L3] A Sylow $p$-subgroup of a finite group is normal if and only if it is the unique Sylow $p$-subgroup. ([[cor-sylow-subgroup-normal-iff-unique]]).

## Verification

**Proof technique:** direct.

1.1 The eight $3$-cycles in $A_4$ occur in four inverse pairs, so they generate four distinct subgroups of order $3$. These are all the Sylow $3$-subgroups. [L1, L2, L3, given, algebra]

2.1 Since there is more than one Sylow $3$-subgroup, none is normal and the Sylow characterization rules out nilpotence. By contrast, the identity together with the three double transpositions is a conjugation-invariant Klein four group, hence the normal Sylow $2$-subgroup. This proves the stated claim. [step 1.1, given, algebra] ∎
