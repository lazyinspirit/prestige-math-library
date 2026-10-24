---
id: "lem-classical-zero-locus-ideal-radical-invariance"
kind: "lemma"
title: "A classical zero locus depends only on the generated ideal and its radical"
status: published
origin: "pipeline"
deps: ["def-classical-affine-algebraic-set-with-empty-boundaries", "thm-generated-ideal-description-in-a-commutative-ring", "def-radical-of-an-ideal"]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry v6.10, §2a p. 36; Theorem 2.16 preamble p. 42"
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
landmark: false
proof_strategy: direct
---

## Statement

For $S\subseteq R=k[x_1,\ldots,x_n]$, one has $V(S)=V((S))=V(\sqrt{(S)})$.

## Facts & Assumptions

**Given:** An algebraically closed field $k$, a nonnegative integer $n$, and a subset $S\subseteq R=k[x_1,\ldots,x_n]$.

[F1] Zero loci mean simultaneous vanishing ([[def-classical-affine-algebraic-set-with-empty-boundaries]]).

[F2] Elements of $(S)$ are finite sums $\sum r_i s_i$ ([[thm-generated-ideal-description-in-a-commutative-ring]]).

[F3] Membership in the radical means a positive power lies in the ideal ([[def-radical-of-an-ideal]]).

## Proof

**Proof technique:** direct.

1.1 If $a\in V(S)$, then every $q=\sum_i r_i s_i\in(S)$ satisfies $q(a)=\sum_i r_i(a)s_i(a)=0$. Conversely $S\subseteq(S)$, so vanishing on $(S)$ implies vanishing on $S$. Thus $V(S)=V((S))$. [F1, F2, given, algebra]

2.1 Write $J=(S)$. If $a\in V(J)$ and $q^m\in J$ for $m\ge1$, then $q(a)^m=0$, hence $q(a)=0$ in the field $k$. Thus $V(J)\subseteq V(\sqrt J)$. The reverse inclusion follows from $J\subseteq\sqrt J$. [F1, F3, step 1.1, algebra] ∎


## Sources

Source comparison: Milne, *Algebraic Geometry*, v6.10, §2a p. 36; Theorem 2.16 preamble p. 42. Conventions here distinguish arbitrary affine algebraic sets from nonempty irreducible varieties.
