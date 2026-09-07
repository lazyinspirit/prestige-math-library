---
id: "lem-minimal-free-resolution-reduces-to-zero-differential"
kind: "lemma"
title: "minimal free resolution reduces to zero differential"
deps: ["lem-minimal-free-resolution-differentials-land-in-maximal-ideal", "def-balanced-tor-bifunctor"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Proposition 12.27 proof, p.121"
      url: "https://websites.umich.edu/~mmustata/CAnotes.pdf"
provenance:
  statement: literature-derived
  proof: ai-altered
status: "draft"
origin: "pipeline"
proof_strategy: "Explicit algebraic derivation"
---

## Statement

If $F_\bullet\to M$ is a minimal degreewise finite free resolution over a nonzero Noetherian local ring $(R,\mathfrak m,k)$, every differential of the unaugmented complex $k\otimes_RF_\bullet$ is zero.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement. We work with the Axiom of Choice; cited dependent-choice and resolution-existence hypotheses are retained.

[F1] [[lem-minimal-free-resolution-differentials-land-in-maximal-ideal]]: For an augmented degreewise finite free resolution over a nonzero Noetherian local ring $(R,\mathfrak m)$, minimality means that every positive differential matrix has entries in $\mathfrak m$. Equivalently no positive differential admits a unit pivot, or a nonzero two-term identity direct summand. A unit pivot can be cancelled without changing the resolved module.

[F2] [[def-balanced-tor-bifunctor]]: For a right $R$-module $N$, a left $R$-module $M$, and $i\geq0$, define $\operatorname{Tor}_i^R(N,M)$ to be either $H_i(N\otimes_RP_\bullet)$ for a projective resolution of $M$ or $H_i(Q_\bullet\otimes_RM)$ for a projective resolution of $N$, identified by the preceding natural balance isomorphism. On maps it uses the homology maps induced by comparison maps; coherence makes this a well-defined covariant bifunctor.

## Proof

1.1 Every positive differential matrix has entries in $\mathfrak m$. Tensoring with $k=R/\mathfrak m$ reduces those entries to zero. [F1]

2.1 Thus the unaugmented residue complex has zero differential in every degree, including its map from degree zero to zero. Its homology in degree $i$ is $k\otimes_RF_i$, and it computes $\operatorname{Tor}_i^R(k,M)$. The assertion includes the zero complex. [F2, step 1.1] ∎
