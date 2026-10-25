---
id: fs-freeness-of-chain-groups-can-be-dropped-from-the-classical-kunneth-statement
title: "Freeness of chain groups cannot simply be dropped from the classical Kunneth statement"
kind: false-statement
status: published
origin: pipeline
deps: ["thm-kunneth-theorem-for-free-complexes-over-a-pid"]
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

The classical free-complex Kunneth argument cannot simply omit freeness of chain groups: it uses freeness to make cycle and boundary modules flat and to control the Tor edge.

## Refutation

**Given:** the complexes $C=D=\mathbb Z/2$ concentrated in degree zero, viewed
as complexes of nonfree abelian groups.

1.1 Their ordinary tensor complex is concentrated in degree zero, so $H_1(C\otimes_{\mathbb Z}D)=0$. On the other hand, $H_0C=H_0D=\mathbb Z/2$ and $\operatorname{Tor}^{\mathbb Z}_1(H_0C,H_0D)=\mathbb Z/2$. [given]

2.1 If the classical free-complex Kunneth short exact sequence were asserted unchanged after simply deleting freeness, then in total degree one it would surject from the zero group $H_1(C\otimes D)$ onto the nonzero Tor group from step 1.1. That is impossible. Hence freeness cannot simply be dropped without replacing ordinary tensor by a derived construction or adding suitable flatness hypotheses. [step 1.1] ∎
