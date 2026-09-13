---
id: fs-pbw-symmetrization-is-an-algebra-isomorphism-for-a-nonabelian-lie-algebra
kind: false-statement
title: PBW symmetrization is generally not multiplicative
status: draft
origin: pipeline
pipeline_run: phase-2-next-21
deps: [thm-pbw-symmetrization-is-a-vector-space-isomorphism-in-characteristic-zero]
landmark: false
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Etingof, MIT 18.745 notes, Corollary 13.7, printed p. 75"
      url: https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf
---

## Statement

For a nonabelian Lie algebra $\mathfrak g$ in characteristic zero, PBW
symmetrization $S(\mathfrak g)\to U(\mathfrak g)$ is an algebra isomorphism.

## Facts & Assumptions

**Given:** A characteristic-zero nonabelian Lie algebra with a supplied basis.

[L1] Symmetrization is a vector-space isomorphism with
$\operatorname{sym}(x)=\iota_{\mathfrak g}(x)$ and
$\operatorname{sym}(xy)=\tfrac12(\iota_{\mathfrak g}(x)\iota_{\mathfrak g}(y)+\iota_{\mathfrak g}(y)\iota_{\mathfrak g}(x))$
([[thm-pbw-symmetrization-is-a-vector-space-isomorphism-in-characteristic-zero]]).

## Refutation

**Proof technique:** direct computation.

1.1 Choose $x,y$ with $[x,y]\ne0$. The enveloping relation gives $\iota_{\mathfrak g}(y)\iota_{\mathfrak g}(x)=\iota_{\mathfrak g}(x)\iota_{\mathfrak g}(y)-\iota_{\mathfrak g}([x,y])$, so [L1] yields $\operatorname{sym}(xy)=\iota_{\mathfrak g}(x)\iota_{\mathfrak g}(y)-\tfrac12\iota_{\mathfrak g}([x,y])$. [given, L1, choose, algebra]

2.1 But $\operatorname{sym}(x)\operatorname{sym}(y)=\iota_{\mathfrak g}(x)\iota_{\mathfrak g}(y)$, and PBW injectivity, contained in [L1], makes $\iota_{\mathfrak g}([x,y])\ne0$. Hence the two expressions differ and symmetrization is not multiplicative. [step 1.1, L1, algebra] ∎
