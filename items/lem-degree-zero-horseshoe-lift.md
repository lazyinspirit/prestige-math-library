---
id: lem-degree-zero-horseshoe-lift
kind: lemma
title: "The degree-zero horseshoe lift"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-projective-resolution-in-an-abelian-category, def-projective-object, def-exact-sequence-and-short-exact-sequence-in-an-abelian-category, thm-a-coproduct-of-projectives-is-projective-and-a-product-of-injectives-is-injective]
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra"
      url: "https://djvu.online/file/WrPctxOTQCdBj"
    - title: "Romyar Sharifi, Homological Algebra"
      url: "https://math.ucla.edu/~sharifi/homalg.pdf"
pipeline_run: frontier-28
---
## Statement

Let $$0\to A'\xrightarrow{i}A\xrightarrow{p}A''\to0$$ be a short exact sequence, and let $$P'_0\twoheadrightarrow A',\qquad P''_0\twoheadrightarrow A''$$ be the degree-zero terms of projective resolutions of $A'$ and $A''$. Then there exists an epimorphism $$\lambda_0:P'_0\oplus P''_0\twoheadrightarrow A$$ whose restrictions to the two summands are $i\varepsilon'$ and a lift of $\varepsilon''$ through $p$. In particular $P'_0\oplus P''_0$ is projective.
## Facts & Assumptions

**Given:** The short exact sequence above and projective resolutions of $A'$ and $A''$.

[L1] Projective resolutions provide the augmentations and projective degree-zero terms ([[def-projective-resolution-in-an-abelian-category]]).

[L2] Projective objects lift across epimorphisms ([[def-projective-object]]).

[L3] Finite coproducts of projectives are projective ([[thm-a-coproduct-of-projectives-is-projective-and-a-product-of-injectives-is-injective]]).

[L4] In the displayed short exact sequence, $p$ is the cokernel of $i$ ([[def-exact-sequence-and-short-exact-sequence-in-an-abelian-category]]).
## Proof

**Proof technique:** direct.

1.1 Since $p:A\twoheadrightarrow A''$ is epic and $P''_0$ is projective, [L2] lifts the augmentation $\varepsilon'':P''_0\to A''$ to a map $s:P''_0\to A$ with $ps=\varepsilon''$. [L1, L2, construct]

2.1 Define $\lambda_0=[i\varepsilon',s]:P'_0\oplus P''_0\to A$. To prove it epic without elements, let $c:A\to C$ satisfy $c\lambda_0=0$. Restricting to the first summand gives $ci\varepsilon'=0$, so $ci=0$ because $\varepsilon'$ is epic. By [L4], $c$ factors as $c=c'p$ for some $c':A''\to C$. Restricting to the second summand now gives $0=cs=c'ps=c'\varepsilon''$, so $c'=0$ because $\varepsilon''$ is epic. Thus $c=0$. In an abelian category the cokernel of $\lambda_0$ therefore vanishes, so $\lambda_0$ is epic. Its source is projective by [L3]. [L1, L3, L4, step 1.1] ∎
