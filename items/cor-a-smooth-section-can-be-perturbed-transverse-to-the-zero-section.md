---
id: cor-a-smooth-section-can-be-perturbed-transverse-to-the-zero-section
kind: corollary
title: "A smooth section transverse to the zero section has a submanifold zero set"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [prop-the-zero-section-is-a-smooth-embedding,
       prop-a-vector-bundle-section-with-surjective-vertical-differential-at-every-zero-has-a-submanifold-zero-set]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed., Transversality"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
---

## Statement

Let $\pi:E\to M$ be a smooth vector bundle of rank $r$, and let $s:M\to E$ be
a smooth section. If $s$ is transverse to the zero section, then the zero set
$Z(s)$ is an embedded submanifold of codimension $r$.

## Facts & Assumptions

**Given:** A smooth vector bundle $\pi:E\to M$ of rank $r$ and a smooth section $s:M\to E$ that is transverse to the zero section.

[L1] The zero section is a smooth embedding ([[prop-the-zero-section-is-a-smooth-embedding]]).

[L2] A section with surjective vertical differential at every zero has a submanifold zero set ([[prop-a-vector-bundle-section-with-surjective-vertical-differential-at-every-zero-has-a-submanifold-zero-set]]).

## Proof
**Proof technique:** direct.

1.1 By [L1], the zero section is an embedded submanifold of $E$. At a zero $p\in Z(s)$, transversality of $s$ to the zero section means exactly that the induced quotient map $$ T_pM\longrightarrow T_{0_p}E/T_{0_p}(0_M(M))\cong E_p $$ is surjective, which is the vertical differential of $s$ at $p$. [L1, given, algebra]

2.1 Therefore the vertical differential of $s$ is surjective at every zero, so [L2] implies that $Z(s)$ is an embedded submanifold of codimension $r$. [L2, step 1.1] ∎
