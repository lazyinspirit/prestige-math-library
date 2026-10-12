---
id: thm-kernel-and-fibres-of-complex-exponential
kind: theorem
title: "$\\ker(\\exp)=2\\pi i\\mathbb Z$, and $\\exp z=\\exp w$ exactly when $z-w\\in2\\pi i\\mathbb Z$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, thm-exponential-is-strictly-increasing, thm-sine-cosine-zero-sets-and-fundamental-period, thm-sine-and-cosine-parametrize-the-unit-circle]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I: Complex Numbers and the Complex Exponential"
      url: "https://www.jirka.org/ra/html/sec_complexexp.html"
pipeline_run: null
---

## Statement

$$\ker(\exp)=2\pi i\mathbb Z,$$
and $\exp z=\exp w$ exactly when $z-w\in2\pi i\mathbb Z$. The conventions and prerequisite facts used below are recorded in [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]], [[thm-exponential-is-strictly-increasing]], [[thm-sine-cosine-zero-sets-and-fundamental-period]], [[thm-sine-and-cosine-parametrize-the-unit-circle]].

## Facts & Assumptions

**Given:** $z=x+iy$ and $w=u+iv$.

## Proof

**Proof technique:** direct.

1.1 Cartesian form shows $\exp z=1$ forces $e^x=1$ and $(\cos y,\sin y)=(1,0)$. [given]

1.2 Strict monotonicity gives $x=0$, while the trigonometric period theorem gives $y\in2\pi\mathbb Z$. [given]

2.1 The addition law turns equality of two exponential values into membership of $z-w$ in the kernel, and the converse is immediate. [given] ∎
