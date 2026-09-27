---
id: cor-generic-translations-of-a-map-to-euclidean-space-are-transverse
kind: corollary
title: "Generic translations of a Euclidean-valued map are transverse"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-parametric-transversality,
       cor-a-submersion-is-transverse-to-every-embedded-submanifold]
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
    - title: "Marco Gualtieri, Topology I: Smooth Manifolds, cumulative notes"
      url: "https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes.pdf"
---

## Statement

Let $f:M\to\mathbb R^n$ be smooth and let $Z\subseteq\mathbb R^n$ be an embedded
submanifold. Then the set of $a\in\mathbb R^n$ for which the translated map

$$ f_a(p):=f(p)+a $$

fails to be transverse to $Z$ is a null subset of $\mathbb R^n$.

## Facts & Assumptions

**Given:** A smooth map $f:M\to\mathbb R^n$ and an embedded submanifold $Z\subseteq\mathbb R^n$.

[L1] Parametric transversality applies to a smooth family whose evaluation map is transverse to $Z$ ([[thm-parametric-transversality]]).

[L2] A submersion is transverse to every embedded submanifold ([[cor-a-submersion-is-transverse-to-every-embedded-submanifold]]).

## Proof
**Proof technique:** direct.

1.1 Define the smooth family $\mathcal F:M\times\mathbb R^n\to\mathbb R^n$ by $\mathcal F(p,a)=f(p)+a$. Its slice at $a$ is exactly $f_a$. [L1, given, construct]

2.1 The differential of $\mathcal F$ in the parameter direction is the identity on $\mathbb R^n$, so $\mathcal F$ is a submersion. Therefore [L2] gives $\mathcal F\pitchfork Z$. [L2, step 1.1, algebra]

3.1 Applying [L1] to this family shows that the nontransverse parameters form a null subset of $\mathbb R^n$. [L1, step 2.1] ∎