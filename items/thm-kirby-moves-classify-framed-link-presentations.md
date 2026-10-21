---
id: thm-kirby-moves-classify-framed-link-presentations
kind: theorem
title: "Kirby moves classify integral framed-link presentations"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 7
deps:
  - def-integral-framed-link-surgery-diagram
  - def-kirby-moves-on-integral-framed-links
  - lem-kirby-moves-preserve-surgery-manifold
  - lem-relative-three-bordism-surgery-presentation
  - lem-zero-meridian-pairs-are-generated-by-kirby-moves-in-s-three
  - def-axiom-of-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Justin Roberts, Kirby calculus in manifolds with boundary"
      url: "https://arxiv.org/pdf/math/9812086"
      locator: "pp. 1–4; the complete smooth oriented relative existence and marked calculus arguments are supplied by the proved local dependencies."
    - title: "Robion Kirby, A Calculus for Framed Links in S3"
      url: "https://math.berkeley.edu/~kirby/papers/Kirby%20-%20A%20calculus%20for%20framed%20links%20in%20S%5E3%20-%20MR0467753.pdf"
      locator: "Theorem 1 and complete proof, §§2–3, printed pp. 36–45"
    - title: "Nikolai Saveliev, Lectures on the Topology of 3-Manifolds"
      url: "https://poisson.phc.dm.unipi.it/~camponovo/libri/3mani.pdf"
      locator: "Theorem 3.1 and K1/K2 definitions, Lecture 3 §3.2, printed pp. 45–46"
---

## Statement

Assume the Axiom of Choice. Let $D_0$ and $D_1$ be finite integral framed-link surgery diagrams in the standard oriented $3$-sphere, with surgery results $M_0$ and $M_1$. Then $M_0$ and $M_1$ are orientation-preservingly diffeomorphic if and only if $D_0$ and $D_1$ are related by a finite sequence of ambient isotopies, framed handle slides, and additions or deletions of split $\pm1$-framed unknots.

## Statement references

[[def-integral-framed-link-surgery-diagram|Integral framed-link diagrams and surgery results]]

[[def-kirby-moves-on-integral-framed-links|Ambient isotopy, framed handle slides, and stabilization]]

[[lem-relative-three-bordism-surgery-presentation|Proved marked relative surgery calculus]]

[[lem-zero-meridian-pairs-are-generated-by-kirby-moves-in-s-three|Elimination of zero-meridian pairs in the three-sphere]]

[Kirby, A Calculus for Framed Links in S3, Theorem 1 and proof](https://math.berkeley.edu/~kirby/papers/Kirby%20-%20A%20calculus%20for%20framed%20links%20in%20S%5E3%20-%20MR0467753.pdf)

[Saveliev, Lecture 3 §3.2, Theorem 3.1](https://poisson.phc.dm.unipi.it/~camponovo/libri/3mani.pdf)


## Facts & Assumptions

**Given:** Full AC, finite integral framed diagrams $D_0,D_1$ in the standard oriented $S^3$, and their oriented surgery results $M_0,M_1$.

[A1] [[def-axiom-of-choice]] is inherited by the suppliers below.

[F1] [[def-integral-framed-link-surgery-diagram]] and [[def-kirby-moves-on-integral-framed-links]] specify the integer-framing, ambient-isotopy, fully framed band-slide and split signed-unit-unknot conventions.

[F2] [[lem-kirby-moves-preserve-surgery-manifold]] proves that each allowed move, and hence each finite sequence, preserves the orientation-preserving diffeomorphism type of the surgery output.

[F3] [[lem-relative-three-bordism-surgery-presentation]] proves marked relative surgery completeness. In the empty-decoration, closed-boundary case with fixed base $N=S^3$, any prescribed orientation-preserving diffeomorphism of two surgery outputs is realized by a finite sequence of exterior framed isotopies, split signed-unit-unknot moves O1, framed slides O2, and moves O3 inserting or deleting a framed knot together with its small disk-zero-framed meridian. The proof supplies the signature-adjusted marked five-bordism, common middle trace, based descending handle movie and its full framed conversion; none of those constructions is inferred from a generic function path alone.

[F4] [[lem-zero-meridian-pairs-are-generated-by-kirby-moves-in-s-three]] proves that every such O3 insertion or deletion, using the positively oriented small meridian, is a finite sequence of the moves in [F1], with the full component framings retained.

## Proof

1.1 If $D_0,D_1$ are related by the stated finite sequence, apply [F2] to each move and compose its orientation-preserving diffeomorphisms. The result is an orientation-preserving diffeomorphism $M_0\to M_1$. [given, A1, F1, F2, construct]

1.2 Conversely, let $f:M_0\to M_1$ be an orientation-preserving diffeomorphism. Use the two given diagrams as undecorated presentations based in the same standard oriented $S^3$. Take empty external boundary, empty ribbon graph and arbitrary equal auxiliary weights; the global supplier's undecorated comparison is independent of its later decoration and evaluation clauses. Every component framing is its actual normal two-disk framing, as in [F1]. Thus [F3] applies to this specified $f$ and yields a finite O1/O2/O3 and framed-isotopy sequence from $D_0$ to $D_1$. In particular it compares the given endpoint diagrams; it does not merely produce some new presentations of their output manifolds. [given, A1, F1, F3, construct]

2.1 The O1 and O2 operations in this sequence are precisely the split signed-unit-unknot moves and fully framed slides of [F1]. Replace each O3 insertion or deletion by the finite sequence supplied by [F4]. That lemma has no restriction on the companion knot's linking with the rest of the diagram, so it applies at every intermediate stage. Its integer normal framings agree with [F1]. This replacement need not preserve the particular marked map $f$, which the present claim does not require, but it preserves the exact endpoint framed diagrams. A finite list with finitely many finite replacements is finite. [F1, F3, F4, step 1.2, construct]

3.1 The resulting sequence uses only ambient isotopy, fully framed handle slides and split $\pm1$ unknot stabilization or destabilization. It joins $D_0$ to $D_1$, proving the converse. Together with step 1.1 this establishes the equivalence with all stated orientation, smoothness and finiteness conventions. [F1, step 1.1, step 2.1] ∎
