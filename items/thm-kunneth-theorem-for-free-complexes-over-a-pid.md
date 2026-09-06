---
id: thm-kunneth-theorem-for-free-complexes-over-a-pid
title: "The Kunneth theorem for free complexes over a PID"
kind: theorem
status: published
origin: pipeline
deps: ["lem-the-kunneth-cross-product-map-is-well-defined-and-natural", "lem-the-kunneth-tor-map", "lem-boundaries-and-cycles-in-a-free-complex-over-a-pid-are-free", "def-tensor-product-total-complex-of-chain-complexes"]
proof_strategy: direct
sources:
  references:
    - title: "Weibel, An Introduction to Homological Algebra, Theorem 3.6.3, printed p. 88"
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

Let $R$ be a PID and $C,D$ be complexes of free $R$-modules for which each total degree has a finite direct-sum diagonal. There is a natural exact sequence $0\to\bigoplus_{p+q=n}H_pC\otimes_RH_qD\to H_n(C\otimes_RD)\to\bigoplus_{p+q=n-1}\operatorname{Tor}^R_1(H_pC,H_qD)\to0$.

## Proof

**Given:** free PID-complexes $C,D$ with finite direct-sum diagonal in every total degree.

1.1 Every $C_p$ is free, and every boundary module $d(C_p)=B_{p-1}C$ is free by [[lem-boundaries-and-cycles-in-a-free-complex-over-a-pid-are-free]]; hence all of these modules are flat. [given]

2.1 Weibel's cited Kunneth formula for complexes applies to the right complex $C$ and left complex $D$ under exactly the flatness conditions verified in step 1.1. It gives the displayed natural short exact sequence; its left map is the cross product of [[lem-the-kunneth-cross-product-map-is-well-defined-and-natural]], and its right map is the quotient of [[lem-the-kunneth-tor-map]]. The finite-diagonal hypothesis makes each displayed direct sum finite; an empty diagonal gives the zero module. [step 1.1, algebra] ∎
