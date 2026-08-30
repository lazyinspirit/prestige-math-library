---
id: thm-a-lax-monoidal-functor-carries-monoid-objects-to-monoid-objects
kind: theorem
title: "A lax monoidal functor carries monoid objects to monoid objects"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-lax-strong-and-strict-monoidal-functor, def-monoid-object-and-comonoid-object-in-a-monoidal-category]
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, Chapter 2.4"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
pipeline_run: null
---

## Statement

Let $F:\mathcal C\to\mathcal D$ be a lax monoidal functor. If
$(M,\mu,\eta)$ is a monoid object in $\mathcal C$, then $F(M)$ is a monoid
object in $\mathcal D$ with multiplication

$$F(M)\boxtimes F(M)\xrightarrow{F_{2;M,M}}F(M\otimes M)\xrightarrow{F(\mu)}F(M)$$

and unit

$$\mathbf 1'\xrightarrow{F_0}F(\mathbf 1)\xrightarrow{F(\eta)}F(M).$$

## Facts & Assumptions

**Given:** A lax monoidal functor $F:\mathcal C\to\mathcal D$ and a monoid
object $(M,\mu,\eta)$ in $\mathcal C$.

[L1] A lax monoidal functor has structure maps $F_2$ and $F_0$ satisfying associativity and unit compatibility ([[def-lax-strong-and-strict-monoidal-functor]]).

[L2] A monoid object is defined by multiplication and unit maps satisfying associativity and unit diagrams ([[def-monoid-object-and-comonoid-object-in-a-monoidal-category]]).

## Proof

**Proof technique:** direct.

1.1 Define $\mu':=F(\mu)\circ F_{2;M,M}$ and $\eta':=F(\eta)\circ F_0$. These are the only typed maps with the displayed source and target. [given, L1, L2, construct]

2.1 For associativity, paste the lax associativity square for $F$ with the image under $F$ of the monoid-object associativity square for $\mu$. Both composites from $(F(M)\boxtimes F(M))\boxtimes F(M)$ to $F(M)$ equal $F(\mu\circ(1_M\otimes\mu)\circ\alpha_{M,M,M})$ with the same inserted $F_2$-maps. Hence $\mu'$ is associative. [step 1.1, L1, L2]

2.2 The left and right unit diagrams for $\eta'$ are obtained in the same way by pasting the lax unit squares with the image under $F$ of the two unit diagrams for $(M,\mu,\eta)$. Thus $\eta'$ is a two-sided unit for $\mu'$. [step 1.1, L1, L2]

3.1 Therefore $(F(M),\mu',\eta')$ is a monoid object in $\mathcal D$. [step 2.1, step 2.2, L2] ∎
