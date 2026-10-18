---
id: thm-transverse-fibre-product-theorem
kind: theorem
title: "Transverse fibre products are embedded submanifolds"
status: published
dependency_level: 3
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
  repair: research/non-ml-math-remaining-81-2026-10-18-owner-sard-completion/published-receipts/thm-transverse-fibre-product-theorem.json
sources:
  scraped: []
  references:
    - title: "Marco Gualtieri, Topology I: Smooth Manifolds, cumulative notes"
      url: "https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes.pdf"
---

## Statement

Let $F:M\to N$ and $G:P\to N$ be smooth and transverse. Then the fibre product

$$ M\times_N P:=\{(p,q)\in M\times P:F(p)=G(q)\} $$

is an embedded submanifold of $M\times P$.

At each $(p,q)\in M\times_N P$, with $y=F(p)=G(q)$,

$$T_{(p,q)}(M\times_NP)=\{(u,v)\in T_pM\times T_qP:dF_p(u)=dG_q(v)\}.$$

If the fibre product is nonempty, then each of its components has dimension
$\dim M+\dim P-\dim N$.

## Facts & Assumptions

**Given:** Smooth maps $F:M\to N$ and $G:P\to N$ with $F\pitchfork G$.

[F1] Two smooth maps are transverse when their differential images span the target tangent space at every coincidence point ([[def-transverse-smooth-maps]]).

[F2] In a product chart the diagonal is parameterized by $u\mapsto(u,u)$; its differential is $w\mapsto(w,w)$.

[L1] The diagonal $\Delta_N\subseteq N\times N$ is an embedded submanifold ([[prop-the-diagonal-is-an-embedded-submanifold]]).

[L3] Products of smooth maps are smooth, and the transverse preimage theorem applies to a map transverse to an embedded submanifold ([[prop-restrictions-corestrictions-and-products-of-smooth-maps-are-smooth]], [[thm-transverse-preimage-theorem]]).

## Proof
**Proof technique:** direct.

1.1 Define $H:M\times P\to N\times N$ by $H(p,q)=(F(p),G(q))$. By [L3], $H$ is smooth, and $$ H^{-1}(\Delta_N)=\{(p,q):F(p)=G(q)\}=M\times_NP. $$ [L1, L3, given]

2.1 At a point $(p,q)$ with $F(p)=G(q)=y$, choose a chart of $N$ at $y$. In the product chart, $\Delta_N$ is parameterized by the diagonal map $u\mapsto(u,u)$; [F2] gives its differential $w\mapsto(w,w)$. Since [L1] makes this image an embedded submanifold, its tangent space is therefore $T_{(y,y)}\Delta_N=\{(w,w):w\in T_yN\}$. The image of $dH_{(p,q)}$ is $dF_p(T_pM)\times dG_q(T_qP)$. Thus transversality of $H$ to $\Delta_N$ means that every pair $(a,b)\in T_yN\times T_yN$ can be written as $$ (a,b)=(dF_pu,dG_qv)+(w,w). $$ This is equivalent to $a-b\in dF_p(T_pM)+dG_q(T_qP)$, which is exactly [F1]. [F1, F2, L1, step 1.1, algebra]

3.1 Hence $H\pitchfork\Delta_N$. By [L1, L3], its preimage is an embedded submanifold of $M\times P$, and the preimage tangent formula gives $$T_{(p,q)}(M\times_NP)=dH_{(p,q)}^{-1}(T_{(y,y)}\Delta_N)=\{(u,v):dF_p(u)=dG_q(v)\}.$$ If this preimage is nonempty, the high-codimension empty case of [L3] forces $\dim N\le\dim M+\dim P$; the codimension-$\dim N$ case then gives $\dim(M\times_NP)=\dim M+\dim P-\dim N$. [L1, L3, step 2.1, algebra, cases] ∎
