---
id: prop-canonical-quotient-map
kind: proposition
title: 'The canonical projection $\pi:G\to G/N$, $\pi(g)=gN$, is a surjective group homomorphism'
status: draft
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-quotient-group-laws, def-group-homomorphism, def-injection-surjection-bijection, def-coset]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Ernst, An Inquiry-Based Approach to Abstract Algebra, Quotients of Groups"
      url: "https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/An_Inquiry-Based_Approach_to_Abstract_Algebra_%28Ernst%29/06%3A_Products_and_Quotients_of_Groups/6.02%3A_Quotients_of_Groups"
pipeline_run: null
---

## Statement

Let $N\mathrel{\trianglelefteq}G$. The canonical projection

$$\pi:G\longrightarrow G/N,\qquad \pi(g):=gN,$$

is a surjective group homomorphism.

## Facts & Assumptions

**Given:** A group $G$, a normal subgroup $N\mathrel{\trianglelefteq}G$, and the quotient group $G/N$.

[L1] The quotient product is $(gN)(hN)=ghN$ ([[thm-quotient-group-laws]]).

[F1] A group homomorphism $f:G\to G'$ satisfies $f(gh)=f(g)f(h)$ for all $g,h\in G$ ([[def-group-homomorphism]]).

[F2] A function $f:A\to B$ is surjective if every $b\in B$ equals $f(a)$ for some $a\in A$ ([[def-injection-surjection-bijection]]).

[F3] Every left coset of $N$ has the form $gN$ for a representative $g\in G$ ([[def-coset]]).

## Proof

**Proof technique:** direct.

1.1 For $g,h\in G$, one has $\pi(gh)=ghN=(gN)(hN)=\pi(g)\pi(h)$, so $\pi$ is a group homomorphism. [L1, F1]

1.2 Every element of $G/N$ is a coset $gN=\pi(g)$ for some $g\in G$, so $\pi$ is surjective. [F2, F3]

2.1 Hence the canonical projection is a surjective group homomorphism. [step 1.1, step 1.2] ∎
