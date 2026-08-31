---
id: thm-transverse-fibre-product-theorem
kind: theorem
title: "Transverse fibre products are embedded submanifolds"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-transverse-smooth-maps,
       thm-transverse-preimage-theorem,
       prop-the-diagonal-is-an-embedded-submanifold,
       prop-restrictions-corestrictions-and-products-of-smooth-maps-are-smooth]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Marco Gualtieri, Topology I: Smooth Manifolds, cumulative notes"
      url: "https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes.pdf"
---

## Statement

Let $F:M\to N$ and $G:P\to N$ be smooth and transverse. Then the fibre product

$$
M\times_N P:=\{(p,q)\in M\times P:F(p)=G(q)\}
$$

is an embedded submanifold of $M\times P$.

## Facts & Assumptions

**Given:** Smooth maps $F:M\to N$ and $G:P\to N$ with $F\pitchfork G$.

[F1] Two smooth maps are transverse when their differential images span the target tangent space at every coincidence point ([[def-transverse-smooth-maps]]).

[L1] The diagonal $\Delta_N\subseteq N\times N$ is an embedded submanifold ([[prop-the-diagonal-is-an-embedded-submanifold]]).

[L2] Products of smooth maps are smooth, and the transverse preimage theorem applies to a map transverse to an embedded submanifold ([[prop-restrictions-corestrictions-and-products-of-smooth-maps-are-smooth]], [[thm-transverse-preimage-theorem]]).

## Proof
**Proof technique:** direct.

1.1 Define $H:M\times P\to N\times N$ by $H(p,q)=(F(p),G(q))$. By [L2], $H$ is smooth, and $$ H^{-1}(\Delta_N)=\{(p,q):F(p)=G(q)\}=M\times_NP. $$ [L1, L2, given]

2.1 At a point $(p,q)$ with $F(p)=G(q)=y$, the tangent space to $\Delta_N$ is $\{(u,u):u\in T_yN\}$. Therefore transversality of $H$ to $\Delta_N$ means that every pair $(a,b)\in T_yN\times T_yN$ can be written as $$ (a,b)=(dF_pu,dG_qv)+(w,w). $$ This is equivalent to $a-b\in dF_p(T_pM)+dG_q(T_qP)$, which is exactly [F1]. [F1, step 1.1, algebra]

3.1 Hence $H\pitchfork\Delta_N$, so [L2] applied with [L1] shows that $M\times_NP$ is an embedded submanifold of $M\times P$. [L1, L2, step 2.1] ∎