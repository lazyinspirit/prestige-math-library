---
id: thm-universal-property-of-verma-modules
kind: theorem
title: "The universal property of Verma modules"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-verma-module, def-highest-weight-vector-and-cyclic-highest-weight-module]
proof_strategy: direct
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Pavel Etingof, Lie Groups and Lie Algebras I & II, Proposition 25.10"
      url: "https://ocw.mit.edu/courses/18-755-lie-groups-and-lie-algebras-ii-spring-2024/mit18_755_s24_lec_full.pdf"
---

## Statement

For a $\mathfrak g$-module $V$, sending a homomorphism $T:M(\lambda)\to V$
to $T(v_\lambda)$ is a bijection onto the vectors $v\in V$ of weight
$\lambda$ annihilated by $\mathfrak n^+$.  Here $M(\lambda)$ is
[[def-verma-module]].  The nonzero vectors in this target are precisely the
highest-weight vectors of weight $\lambda$ from
[[def-highest-weight-vector-and-cyclic-highest-weight-module]]; the zero vector
corresponds to the zero homomorphism.

## Facts & Assumptions

**Given:** A $\mathfrak g$-module $V$ and $v\in V$ with $hv=\lambda(h)v$ and $\mathfrak n^+v=0$.

## Proof

**Proof technique:** direct.

1.1 Define $T(u\otimes c_\lambda)=uv$.  If $b=h+x\in\mathfrak b=\mathfrak h\oplus\mathfrak n^+$, then $bv=\lambda(h)v$, exactly the scalar by which $b$ acts on $c_\lambda$; hence $T(ub\otimes c_\lambda)=T(u\otimes bc_\lambda)$ and $T$ descends to the induced module. [given, construct]

2.1 The descended map is $\mathfrak g$-linear and sends $v_\lambda$ to $v$.  Conversely a homomorphism is determined by $v_\lambda$, since that vector generates $M(\lambda)$; its image necessarily has the two displayed properties. [given, algebra] ∎
