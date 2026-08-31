---
id: thm-transverse-preimage-theorem
kind: theorem
title: "The transverse preimage theorem"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-transversality-is-equivalent-to-surjectivity-on-the-normal-quotient,
       thm-embedded-submanifolds-admit-local-defining-submersions,
       thm-a-regular-level-set-is-an-embedded-submanifold,
       prop-tangent-space-of-a-regular-level-set-is-the-kernel]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
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
of codimension $c$. If $F\pitchfork Z$, then $F^{-1}(Z)$ is an embedded
submanifold of $M$ of codimension $c$. For each $p\in F^{-1}(Z)$,

$$
T_pF^{-1}(Z)=\{v\in T_pM:dF_p(v)\in T_{F(p)}Z\}.
$$

## Facts & Assumptions

**Given:** A smooth map $F:M^m\to N^n$ transverse to an embedded submanifold $Z\subseteq N$.

[L1] Embedded submanifolds admit local defining submersions ([[thm-embedded-submanifolds-admit-local-defining-submersions]]).

[L2] Transversality to $Z$ is equivalent to surjectivity on the normal quotient ([[lem-transversality-is-equivalent-to-surjectivity-on-the-normal-quotient]]).

[L3] A regular level set is an embedded submanifold, and its tangent space is the kernel of the defining submersion differential ([[thm-a-regular-level-set-is-an-embedded-submanifold]], [[prop-tangent-space-of-a-regular-level-set-is-the-kernel]]).

## Proof
**Proof technique:** direct.

1.1 Fix $p\in F^{-1}(Z)$ and put $y=F(p)$. By [L1], choose a neighbourhood $V$ of $y$ and a submersion $h:V\to\mathbb R^c$ such that $Z\cap V=h^{-1}(0)$. [L1, given, choose]

2.1 At $p$, the differential $dh_y$ kills exactly $T_yZ$. Therefore [L2] implies that $dh_y\circ dF_p=d(h\circ F)_p$ is surjective. So $0$ is a regular value of $h\circ F$ near $p$. [L2, step 1.1, algebra]

3.1 Since $(h\circ F)^{-1}(0)=F^{-1}(Z)\cap F^{-1}(V)$, [L3] shows that this set is an embedded codimension-$c$ submanifold near $p$, with tangent space $$ \ker d(h\circ F)_p=\{v:dF_p(v)\in T_yZ\}. $$ [L3, step 2.1, algebra]

4.1 Because $p$ was arbitrary, these local models glue to an embedded submanifold structure on $F^{-1}(Z)$ with the stated tangent-space formula. [step 3.1] ∎