---
id: thm-there-is-in-general-no-constant-enriched-functor
kind: theorem
title: "Constant enriched functors need not exist"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-enriched-category, def-enriched-functor, def-the-underlying-ordinary-category-of-an-enriched-category]
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "G. M. Kelly, Basic Concepts of Enriched Category Theory, Section 3.9"
      url: "https://www.scribd.com/document/891660167/tr10"
---

## Statement

There exist $\mathcal V$-categories whose underlying ordinary categories admit
an ordinary constant functor, but no corresponding $\mathcal V$-functor with
that constant object value. In particular, constant enriched functors do not
exist in general.

## Facts & Assumptions

**Given:** The base $\mathcal V=\mathbf{Ab}$.

[L1] A $\mathcal V$-functor must preserve enriched identities and enriched composition ([[def-enriched-functor]]).

[L2] The underlying ordinary category keeps only global elements of the hom-object ([[def-the-underlying-ordinary-category-of-an-enriched-category]]).

[L3] A $\mathcal V$-category is determined by its hom-objects together with identity and composition maps ([[def-enriched-category]]).

## Proof

**Proof technique:** direct.

1.1 Let $\mathcal I$ be the one-object $\mathbf{Ab}$-category with hom-object $\mathbb Z$, so its unique object has endomorphism object the tensor unit. Let $\mathcal T$ be the one-object $\mathbf{Ab}$-category with hom-object $0$, the terminal object of $\mathbf{Ab}$; the identity map $\mathbb Z\to0$ and the zero composition make this a valid $\mathbf{Ab}$-category by [L3]. [L3, given]

2.1 The underlying ordinary category $\mathcal T_0$ has one object and one morphism, because $\mathbf{Ab}(\mathbb Z,0)$ is a singleton by [L2]. The underlying ordinary category $\mathcal I_0$ also has one object, with morphism set $\mathbf{Ab}(\mathbb Z,\mathbb Z)$. Sending the unique object of $\mathcal T_0$ to the unique object of $\mathcal I_0$ and its identity to $1_{\mathbb Z}$ therefore defines an ordinary constant functor $\mathcal T_0\to\mathcal I_0$. [L2, step 1.1]

2.2 A $\mathbf{Ab}$-enriched functor $\mathcal T\to\mathcal I$ would need a hom-object map $0\to\mathbb Z$ preserving the enriched identity. But the identity in $\mathcal T$ is the unique map $\mathbb Z\to0$, and the identity in $\mathcal I$ is $1_{\mathbb Z}:\mathbb Z\to\mathbb Z$; preserving identities would force the composite $\mathbb Z\to0\to\mathbb Z$ to be $1_{\mathbb Z}$, impossible because the composite through $0$ is the zero homomorphism. This contradicts [L1]. [L1, step 1.1, algebra]

3.1 Hence the ordinary constant functor of step 2.1 has no enriched lift, so constant enriched functors need not exist. [step 2.1, step 2.2] ∎
