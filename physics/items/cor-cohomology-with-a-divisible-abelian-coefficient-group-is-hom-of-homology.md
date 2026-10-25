---
id: cor-cohomology-with-a-divisible-abelian-coefficient-group-is-hom-of-homology
title: "Cohomology with a divisible abelian coefficient group is Hom of homology"
kind: corollary
status: published
origin: pipeline
deps: ["thm-universal-coefficient-theorem-for-cohomology-over-a-pid", "thm-injective-modules-over-a-pid-are-exactly-divisible"]
proof_strategy: direct
sources:
  references:
    - title: "Weibel, An Introduction to Homological Algebra"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-06
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Statement

If $C$ is a free abelian complex and $G$ is divisible, then $H^n\operatorname{Hom}_{\mathbb Z}(C,G)\cong\operatorname{Hom}_{\mathbb Z}(H_nC,G)$ naturally.

## Proof

**Given:** the cohomological UCT sequence and a divisible abelian group $G$.

1.1 A divisible abelian group is injective, so $\operatorname{Ext}^1_{\mathbb Z}(H_{n-1}C,G)=0$. [given]

2.1 The UCT evaluation map consequently has zero kernel and is already surjective, and therefore is the stated natural isomorphism. [step 1.1] ∎
