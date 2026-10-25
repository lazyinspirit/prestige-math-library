---
id: fs-every-short-exact-sequence-of-groups-splits
kind: false-statement
title: "False: every short exact sequence of groups splits"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-split-extension-of-groups, thm-subgroups-of-cyclic-groups-are-cyclic, lem-order-characterisation]
justified_by: []
aliases: []
landmark: false
proof_strategy: contradiction
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Group Theory"
      url: "https://www.jmilne.org/math/CourseNotes/GT.pdf"
pipeline_run: null
---

## Statement

**False claim:** every short exact sequence of groups has a homomorphic section and therefore splits.

## Facts & Assumptions

**Given:** A prime $p$ and the sequence induced by multiplication by $p$ and reduction modulo $p$,

$$1\to C_p\to C_{p^2}\mathrel{\mathop{\to}^{\pi}}C_p\to1.$$

[A1] The false claim says that this short exact sequence has a section.

[L1] A section is a homomorphism $s$ satisfying $\pi s=\operatorname{id}$ ([[def-split-extension-of-groups]]).

[L2] Every subgroup of a cyclic group is cyclic ([[thm-subgroups-of-cyclic-groups-are-cyclic]]).

[L3] The order criterion determines which multiples of a finite-order element are zero ([[lem-order-characterisation]]).

## Refutation

**Proof technique:** contradiction.

1.1 The kernel of reduction $\pi:C_{p^2}\to C_p$ is $pC_{p^2}$, which has order $p$ by [L3], so the displayed sequence is short exact. [L3, algebra]

1.2 Assume, for contradiction, that [A1] holds and let $s$ be a section. Since $\pi s$ is the identity, $s$ is injective and its image $H$ has order $p$. By [L2], $H=\langle[a]_{p^2}\rangle$ for some $a$. Its generator has order $p$, so [L3] gives $p^2\mid pa$ and hence $p\mid a$. Thus $H\subseteq pC_{p^2}$; both subgroups have $p$ elements, so $H=\ker\pi$. [A1, L1, L2, L3, assume-contra, algebra]

2.1 Hence $\pi s$ is zero, contradicting [L1]. Therefore this sequence does not split and [A1] is false. [step 1.2, A1, L1, discharge-contradiction] ∎
