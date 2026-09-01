---
id: thm-faithfully-flat-descent-of-flatness
kind: theorem
title: "Flatness descends along faithfully flat base change"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-flat-and-faithfully-flat-modules-and-ring-maps, prop-extension-of-scalars-preserves-flat-modules, prop-transitivity-of-flatness-under-change-of-rings, thm-faithfully-flat-ring-map-characterisations]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "Stacks Project, Lemma 10.39.8"
      url: "https://stacks.math.columbia.edu/tag/00H9"
    - title: "J. S. Milne, A Primer of Commutative Algebra, Proposition 11.9"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
---

## Statement

Let $R\to S$ be a faithfully flat homomorphism of commutative rings, and let $N$
be an $R$-module. Then $N$ is flat over $R$ if and only if $N\otimes_R S$ is
flat over $S$.

## Facts & Assumptions

**Given:** A faithfully flat map $R\to S$ and an $R$-module $N$.

[L1] Extension of scalars along a flat ring map preserves flatness
([[prop-extension-of-scalars-preserves-flat-modules]]).

[L2] Flatness is transitive under change of rings
([[prop-transitivity-of-flatness-under-change-of-rings]]).

[L3] Faithful flatness means exactness is reflected after tensoring with $S$
([[def-flat-and-faithfully-flat-modules-and-ring-maps]], [[thm-faithfully-flat-ring-map-characterisations]]).

## Proof

**Proof technique:** direct.


1.1 If $N$ is flat over $R$, then $N\otimes_R S$ is flat over $S$ by [L1]. [L1, given]


1.2 Conversely, assume $N\otimes_R S$ is flat over $S$. Let $ A\to B\to C $ be an exact sequence of $R$-modules. Tensoring with $N$ and then with $S$ gives $ ((A\otimes_R N)\otimes_R S)\to ((B\otimes_R N)\otimes_R S)\to ((C\otimes_R N)\otimes_R S). $ Associativity of tensor product identifies this with $ A\otimes_R (N\otimes_R S)\to B\otimes_R (N\otimes_R S)\to C\otimes_R (N\otimes_R S), $ which is exact because $N\otimes_R S$ is flat over $S$ and [L2] transports that flatness back along $R\to S$. [L2, given, algebra]


1.3 Since $R\to S$ is faithfully flat, [L3] reflects exactness. Therefore the sequence $ A\otimes_R N\to B\otimes_R N\to C\otimes_R N $ was already exact, so $N$ is flat over $R$. [L3]


2.1 Hence flatness descends and ascends along faithfully flat base change. [algebra] ∎
