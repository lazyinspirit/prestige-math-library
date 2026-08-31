---
id: lem-transversality-is-equivalent-to-surjectivity-on-the-normal-quotient
kind: lemma
title: "Transversality is equivalent to surjectivity on the normal quotient"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-a-smooth-map-transverse-to-an-embedded-submanifold,
       def-normal-and-conormal-bundles-of-an-embedded-submanifold]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
---

## Statement

Let $F:M\to N$ be smooth, let $Z\subseteq N$ be an embedded submanifold, and let
$p\in F^{-1}(Z)$ with $y=F(p)$. Then $F$ is transverse to $Z$ at $p$ if and
only if the composite

$$
T_pM\xrightarrow{dF_p}T_yN\twoheadrightarrow T_yN/T_yZ
$$

is surjective.

## Facts & Assumptions

**Given:** A smooth map $F:M\to N$, an embedded submanifold $Z\subseteq N$, and a point $p\in F^{-1}(Z)$ with $y=F(p)$.

[F1] Transversality at $p$ means $dF_p(T_pM)+T_yZ=T_yN$ ([[def-a-smooth-map-transverse-to-an-embedded-submanifold]]).

[F2] The normal space of $Z$ at $y$ is the quotient $T_yN/T_yZ$ ([[def-normal-and-conormal-bundles-of-an-embedded-submanifold]]).

## Proof
**Proof technique:** direct.

1.1 Let $\pi:T_yN\to T_yN/T_yZ$ be the quotient map from [F2]. Its kernel is exactly $T_yZ$. Therefore $\pi(dF_p(T_pM))=T_yN/T_yZ$ if and only if $dF_p(T_pM)+T_yZ=T_yN$. [F2, given, algebra]

2.1 By [F1], the right-hand condition in step 1.1 is exactly transversality of $F$ to $Z$ at $p$. [F1, step 1.1]

3.1 Hence transversality is equivalent to surjectivity on the normal quotient. [step 2.1] ∎