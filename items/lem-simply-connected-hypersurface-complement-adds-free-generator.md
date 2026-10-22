---
id: lem-simply-connected-hypersurface-complement-adds-free-generator
kind: lemma
title: "Cutting along a simply connected hypersurface adds one free generator"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps:
  - thm-seifert-van-kampen
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Stefan Friedl, Knot Theory, §5.1, The HNN-Gluing Theorem"
      url: "https://friedl.app.uni-regensburg.de/papers/2024_knot-theory-final.pdf"
      locator: "Theorem 5.1 and its normal-bundle setup, printed pp. 64–65, PDF pp. 64–66"
---

## Statement

Let $M$ be a connected smooth $3$-manifold without boundary, and let $S\subset M$
be a nonempty closed connected smooth embedded surface with
$\pi_1(S)=1$. Suppose there is an open neighborhood $N$ of $S$ such that
$N$ is path-connected and simply connected, and $N\setminus S$ has exactly two
path-connected simply connected components $N_-$ and $N_+$. Suppose also that
$M\setminus S$ is path-connected and contains an embedded compact arc
$\nu$ joining $N_-$ to $N_+$, with an open tubular neighborhood $T$ such that
$T\cap N$ consists of exactly two disjoint open $3$-balls, one in each side
component. Then
$$
\pi_1(M)\cong \pi_1(M\setminus S)*\mathbb Z.
$$
The cyclic factor is represented by a loop that joins the two sides of $N$ and
returns between them through $M\setminus S$.

## Statement references

[Friedl, Theorem 5.1](https://friedl.app.uni-regensburg.de/papers/2024_knot-theory-final.pdf)

## Facts & Assumptions

**Given:** The manifold, embedded surface, neighborhood, and path-connectivity and simple-connectivity hypotheses in the statement.

[F1] For an open cover by two path-connected sets with path-connected intersection, the fundamental group of the union is the pushout of the two inclusion homomorphisms. [[thm-seifert-van-kampen]]

## Proof

**Given:** The data above.

1.1 Put $U=M\setminus S$ and $V=N\cup T$. These are path-connected open sets covering $M$. Their intersection consists of $N_-$, $N_+$, and the tube joining their end balls. Cover the intersection by the two side components with the respective half of the tube. Each set is path-connected and simply connected, and their overlap is a contractible middle tube. Hence [F1] gives $\pi_1(U\cap V)=1$. [given, F1, construct]

2.1 Join the centers of the two end balls by an embedded arc $\alpha$ in the connected smooth $3$-manifold $N$, and let $Q$ be a thin open tubular neighborhood of $\alpha$ in $N$, enlarged at its ends to meet those balls. The open sets $N$ and $W=T\cup Q$ cover $V$. The set $W$ is a thickened loop formed by the two tubes $T$ and $Q$, so $\pi_1(W)\cong\mathbb Z$; $N\cap W$ is $Q$ together with the two end balls and is contractible. Since $N$ is simply connected, [F1] gives $\pi_1(V)\cong\mathbb Z$. [given, F1, step 1.1, construct]

3.1 Apply [F1] to the open cover $M=U\cup V$. Step 1.1 gives $\pi_1(U\cap V)=1$, while $\pi_1(U)=\pi_1(M\setminus S)$ and step 2.1 gives $\pi_1(V)=\mathbb Z$. The pushout is therefore the free product $\pi_1(M\setminus S)*\mathbb Z$. A generator of the second factor is represented by $\alpha$ followed by $\nu^{-1}$, proving the stated description. [F1, step 1.1, step 2.1, algebra] ∎

