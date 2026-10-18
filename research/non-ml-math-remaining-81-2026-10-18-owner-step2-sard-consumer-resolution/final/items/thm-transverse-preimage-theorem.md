---
id: thm-transverse-preimage-theorem
kind: theorem
title: "The transverse preimage theorem"
status: published
dependency_level: 2
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-transversality-is-equivalent-to-surjectivity-on-the-normal-quotient,
       thm-embedded-submanifolds-admit-local-defining-submersions,
       thm-a-regular-level-set-is-an-embedded-submanifold,
       prop-tangent-space-of-a-regular-level-set-is-the-kernel,
       def-embedded-submanifold-and-slice-chart]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  repair: research/non-ml-math-remaining-81-2026-10-18-owner-sard-completion/published-receipts/thm-transverse-preimage-theorem.json
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
    - title: "Marco Gualtieri, Topology I: Smooth Manifolds, cumulative notes"
      url: "https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes.pdf"
---

## Statement

Let $F:M^m\to N^n$ be smooth and let $Z\subseteq N$ be an embedded submanifold
of codimension $c$, and suppose $F\pitchfork Z$. If $c\le m$, then
$F^{-1}(Z)$ is an embedded submanifold of $M$ of codimension $c$ (possibly empty). If $c>m$,
then $F^{-1}(Z)=\varnothing$. In the first case, for each $p\in F^{-1}(Z)$,

$$ T_pF^{-1}(Z)=\{v\in T_pM:dF_p(v)\in T_{F(p)}Z\}. $$

## Facts & Assumptions

**Given:** A smooth map $F:M^m\to N^n$ transverse to an embedded submanifold $Z\subseteq N$.

[L1] Embedded submanifolds admit local defining submersions ([[thm-embedded-submanifolds-admit-local-defining-submersions]]).

[L2] Transversality to $Z$ is equivalent to surjectivity on the normal quotient ([[lem-transversality-is-equivalent-to-surjectivity-on-the-normal-quotient]]).

[L3] A regular level set is an embedded submanifold, and its tangent space is the kernel of the defining submersion differential ([[thm-a-regular-level-set-is-an-embedded-submanifold]], [[prop-tangent-space-of-a-regular-level-set-is-the-kernel]]).

[F3] An embedded $k$-submanifold has $0\le k\le m$ and is characterized by its slice-chart condition ([[def-embedded-submanifold-and-slice-chart]]).

## Proof
**Proof technique:** direct.

1.1 First suppose $c>m$. If $p\in F^{-1}(Z)$, [L2] says the composite $T_pM\to T_{F(p)}N/T_{F(p)}Z$ is surjective. Its target has dimension $c>m=\dim T_pM$, which is impossible, so the preimage is empty. Now suppose $c\le m$. If the preimage is empty, the embedded-submanifold conclusion in this dimension range is vacuous; otherwise fix $p\in F^{-1}(Z)$ and put $y=F(p)$. By [L1], choose a neighbourhood $V$ of $y$ and a submersion $h:V\to\mathbb R^c$ such that $Z\cap V=h^{-1}(0)$. [L1, L2, given, cases, contradiction, choose]

2.1 At $p$, the differential $dh_y$ kills exactly $T_yZ$. Therefore [L2] implies that $dh_y\circ dF_p=d(h\circ F)_p$ is surjective. So $0$ is a regular value of $h\circ F$ near $p$. [L2, step 1.1, algebra]

3.1 Since $(h\circ F)^{-1}(0)=F^{-1}(Z)\cap F^{-1}(V)$, [L3] shows that this set is an embedded codimension-$c$ submanifold near $p$, with tangent space $$ \ker d(h\circ F)_p=\{v:dF_p(v)\in T_yZ\}. $$ [L3, step 2.1, algebra]

4.1 The local models in step 3.1 cover every point of $F^{-1}(Z)$, so they give its embedded-submanifold structure and the stated tangent-space formula. If $c\le m$ and the preimage is empty, it is also an embedded submanifold of dimension $m-c$ by [F3], whose pointwise slice-chart condition is vacuous. Together with step 1.1 this proves both dimension cases. [F3, step 1.1, step 3.1, cases] ∎
