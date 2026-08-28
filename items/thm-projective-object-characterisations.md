---
id: thm-projective-object-characterisations
kind: theorem
title: "Projective object characterisations"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-projective-object, thm-the-pullback-of-an-epimorphism-is-an-epimorphism]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Pavel Etingof, Shlomo Gelaki, Dmitri Nikshych, and Victor Ostrik, Tensor Categories, Section 1.6"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
pipeline_run: frontier-22
---

## Statement

For an object $P$ of an abelian category, the following are equivalent:

1. $P$ is projective.
2. For every short exact sequence
   $$0\to K\to E\to M\to0,$$
   the induced sequence
   $$0\to\mathcal A(P,K)\to\mathcal A(P,E)\to\mathcal A(P,M)\to0$$
   is exact.
3. Every epimorphism $E\twoheadrightarrow P$ splits.

## Facts & Assumptions

**Given:** An object $P$ in an abelian category.

[L1] Projectivity is the lifting property against epimorphisms ([[def-projective-object]]).

[L2] In an abelian category, the pullback of an epimorphism is an epimorphism ([[thm-the-pullback-of-an-epimorphism-is-an-epimorphism]]).

[F1] For every short exact sequence, the functor $\mathcal A(P,-)$ is left exact; projectivity is exactly the extra surjectivity at the right-hand end.

## Proof

**Proof technique:** direct.

1.1 Assume $P$ is projective. Then [L1] gives a lift of every map $P\to M$ across every epimorphism $E\twoheadrightarrow M$, so the last map in condition 2 is surjective. Together with the left exactness in [F1], this proves condition 2. [L1, F1, assume-hyp]

1.2 Condition 2 clearly implies condition 1, because surjectivity of $\mathcal A(P,E)\to\mathcal A(P,M)$ for every short exact sequence is exactly the lifting property [L1]. [L1, assume-hyp]

1.3 If $P$ is projective and $q:E\twoheadrightarrow P$ is epic, apply [L1] to $1_P:P\to P$. A lift $s:P\to E$ with $q s=1_P$ is a section, so $q$ splits. [L1, assume-hyp]

1.4 Assume condition 3. Given an epimorphism $q:E\twoheadrightarrow M$ and a map $f:P\to M$, form the pullback of $q$ along $f$. By [L2], its projection to $P$ is epic, so condition 3 makes it split. Composing such a section with the other pullback leg gives a lift of $f$ across $q$. Thus $P$ is projective. [L2, assume-hyp, construct]

2.1 Steps 1.1 and 1.2 prove $1\Leftrightarrow2$, and steps 1.3 and 1.4 prove $1\Leftrightarrow3$. Hence all three conditions are equivalent. [step 1.1, step 1.2, step 1.3, step 1.4] ∎
