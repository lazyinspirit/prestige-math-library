---
id: thm-monoidal-functors-compose-and-laxness-is-preserved
kind: theorem
title: "Lax monoidal functors compose, and composition preserves strength and strictness"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-lax-strong-and-strict-monoidal-functor, def-monoidal-natural-transformation]
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

The composite of two lax monoidal functors is again lax monoidal. If both
functors are strong, the composite is strong; if both are strict, the composite
is strict.

## Facts & Assumptions

**Given:** Lax monoidal functors
$F:\mathcal C\to\mathcal D$ and $G:\mathcal D\to\mathcal E$.

[L1] A lax monoidal functor is a functor together with structure maps $F_2,F_0$ satisfying associativity and unit equations; strong means those maps are isomorphisms and strict means they are identities ([[def-lax-strong-and-strict-monoidal-functor]]).

[L2] A monoidal natural transformation is compatible with the binary and unit structure maps ([[def-monoidal-natural-transformation]]).

## Proof

**Proof technique:** direct.

1.1 Define the composite structure maps by $(GF)_0:=G(F_0)\circ G_0$ and $(GF)_{2;X,Y}:=G(F_{2;X,Y})\circ G_{2;F(X),F(Y)}$. These are the only typed composites from $G(F(X))\otimes G(F(Y))$ to $GF(X\otimes Y)$ and from the unit of $\mathcal E$ to $GF(\mathbf 1)$. [given, L1, construct]

2.1 Paste the associativity square for $G$ with the image under $G$ of the associativity square for $F$. The outside rectangle is exactly the associativity axiom for $(GF)_2$. Pasting the two unit squares gives the left and right unit axioms for $(GF)_0$. Hence $GF$ is lax monoidal. [step 1.1, L1, L2]

3.1 If both $F$ and $G$ are strong, then every map used in step 1.1 is an isomorphism, so $(GF)_0$ and $(GF)_2$ are isomorphisms. If both are strict, those maps are identities, so the composite structure maps are identities too. [step 1.1, step 2.1, L1]

4.1 Therefore composition preserves laxness, strength, and strictness. [step 2.1, step 3.1] ∎
