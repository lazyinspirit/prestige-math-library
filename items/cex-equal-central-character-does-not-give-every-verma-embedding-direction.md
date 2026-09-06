---
id: cex-equal-central-character-does-not-give-every-verma-embedding-direction
kind: counterexample
title: "Equal central character does not give every Verma embedding direction"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-central-characters-are-dot-weyl-orbits, thm-bgg-verma-homomorphism-criterion]
proof_strategy: direct
verification:
  audited: 2026-09-07
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Pavel Etingof, Representations of Lie Groups, Remark 15.10"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
---

## Statement refuted

Equal central character of $\lambda$ and $\mu$ implies both $M(\mu)\to M(\lambda)$ and $M(\lambda)\to M(\mu)$ are nonzero.

## Counterexample

**Given:** Dot-orbit central characters [[cor-central-characters-are-dot-weyl-orbits]] and the BGG criterion [[thm-bgg-verma-homomorphism-criterion]].

**Proof technique:** direct.

1.1 In a regular dominant integral $A_2$ dot orbit take $\mu=s_1\mathbin\cdot\lambda$. The weights have equal central character because they are dot conjugate. [given]

2.1 The BGG criterion gives $M(\mu)\hookrightarrow M(\lambda)$, but not the reverse map: $\lambda\not\uparrow\mu$, since the only directed reflection lowers the dominant weight. Thus central-character equality does not determine both directions. [step 1.1, algebra] ∎
