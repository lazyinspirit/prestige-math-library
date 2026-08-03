---
id: thm-group-actions-correspond-to-homomorphisms
kind: theorem
title: 'Actions of $G$ on $X$ correspond exactly to homomorphisms $G\to\operatorname{Sym}(X)$'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-group-action, def-group-homomorphism, lem-group-homomorphism-basic-properties, def-symmetric-group, lem-symmetric-group-is-a-group]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-03
sources:
  scraped: []
  references:
    - title: "Brosnan, Group actions"
      url: "https://math.umd.edu/~pbrosnan/notes/ugalg/sect0034.html"
pipeline_run: null
---

## Statement

For groups $G$ and a set $X$, left actions of $G$ on $X$ are in bijection with
group homomorphisms $\rho:G\to\operatorname{Sym}(X)$. The action attached to
$\rho$ is $g\cdot x:=\rho(g)(x)$; the homomorphism attached to an action sends
$g$ to the permutation $x\mapsto g\cdot x$.

## Facts & Assumptions

**Given:** A group $G$ with identity $e$ and a set $X$.

[L1] A left action satisfies $e\cdot x=x$ and $(gh)\cdot x=g\cdot(h\cdot x)$
([[def-group-action]]).

[L2] $\operatorname{Sym}(X)$ is the group of bijections $X\to X$ under
composition ([[def-symmetric-group]], [[lem-symmetric-group-is-a-group]]).

[L3] A group homomorphism preserves multiplication and sends the identity to the
identity ([[def-group-homomorphism]], [[lem-group-homomorphism-basic-properties]]).

## Proof

**Proof technique:** direct.

1.1 Given an action, define $\rho(g)(x)=g\cdot x$. The maps $\rho(g)$ are bijective: $\rho(g^{-1})$ is a two-sided inverse because the action laws give $g^{-1}\cdot(g\cdot x)=x=g\cdot(g^{-1}\cdot x)$. [L1, given, algebra]

1.2 Conversely, let $\rho:G\to\operatorname{Sym}(X)$ be a homomorphism and set $g\cdot x=\rho(g)(x)$. Then $e\cdot x=\rho(e)(x)=x$, and $(gh)\cdot x=\rho(g)(\rho(h)(x))=g\cdot(h\cdot x)$. [L2, L3, given]

2.1 The action law gives $\rho(gh)(x)=g\cdot(h\cdot x)=(\rho(g)\circ\rho(h))(x)$ for every $x$; thus $\rho(gh)=\rho(g)\circ\rho(h)$, so $\rho$ is a homomorphism into $\operatorname{Sym}(X)$. [step 1.1, L1, L2, L3, given]

3.1 The two constructions recover their input pointwise, so they are mutually inverse correspondences. [step 2.1, step 1.2] ∎
