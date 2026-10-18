---
id: lem-finite-factor-projection-comparison-and-normalized-trace
kind: lemma
title: "Projection comparison and unique normalized traces in finite factors"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - def-axiom-of-choice
  - def-von-neumann-algebra-and-commutant
  - def-tracial-state-and-faithful-normal-trace-on-a-von-neumann-algebra
  - lem-polar-decomposition-and-nonzero-partial-isometries-in-factors
  - thm-borel-functional-calculus-for-bounded-normal-operators
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Assume AC. Zorn supplies maximal orthogonal families and cyclic decompositions. AC supplies the hypotheses of the published functional analytic suppliers; all nonseparable index sets are allowed."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Claire Anantharaman and Sorin Popa, An Introduction to II1 Factors"
      url: "https://www.math.ucla.edu/~popa/Books/IIun.pdf"
      locator: "Lemma 4.1.1 and Proposition 4.1.3 (pp. 59–60), Proposition 4.2.1 (p. 61). Complete arguments read; finite-trace comparison is proved locally from the published polar/nonzero-corner supplier."
---

## Statement

Assume AC. In a factor $Q$, any two projections $p,q$ are comparable by subequivalence.
If $Q$ has a faithful normal semifinite trace $s$ and $s(p),s(q)<\infty$, then
$p\precsim q$ if and only if $s(p)\le s(q)$, and equality means equivalence.
Every nonzero corner of a diffuse factor is again a diffuse factor. A diffuse
finite factor has a unique normalized tracial state. Finite matrix
amplifications of a II1 factor and all their nonzero corners are II1 factors.

## Facts & Assumptions

**Given:** AC and the algebras, traces, Hilbert modules, and finite dimension hypotheses in the Statement.

[F1] AC permits Zorn maximality and implies Countable Choice and the ultrafilter lemma required by the Hilbert and compactness suppliers. ([[def-axiom-of-choice]])

[F2] A concrete von Neumann algebra is a WOT-closed unital star-algebra; commutants are WOT closed and multiplication by a fixed bounded operator is WOT continuous. ([[def-von-neumann-algebra-and-commutant]])

[F3] A faithful normal tracial state is positive, faithful, tracial, normalized, and WOT continuous on the operator unit ball. ([[def-tracial-state-and-faithful-normal-trace-on-a-von-neumann-algebra]])

[F4] Under AC, polar decomposition stays inside a von Neumann algebra, and any two nonzero projections in a factor have nonzero equivalent subprojections. No separability hypothesis occurs. ([[lem-polar-decomposition-and-nonzero-partial-isometries-in-factors]])

[F5] Under AC, bounded Borel functional calculus supplies spectral projections, the star-homomorphism identities, the spectral norm estimate, and strong convergence for uniformly bounded pointwise convergent functions; all operators used below are bounded. ([[thm-borel-functional-calculus-for-bounded-normal-operators]])

## Proof

**Given:** The hypotheses of the Statement and the stated prerequisite contracts.

1.1 Use the actually read canonical supplier $lem-polar-decomposition-and-nonzero-partial-isometries-in-factors$: nonzero projections in a factor have nonzero equivalent subprojections, and polar decompositions stay in the algebra. Choose a maximal family of partial isometries with pairwise orthogonal initial projections under $p$ and pairwise orthogonal final projections under $q$. Their strong sum $v$ is a partial isometry. If both $p-v^*v$ and $q-vv^*$ were nonzero, the canonical supplier supplies another nonzero partial isometry between them, contradicting maximality. This proves comparison. For projections of finite trace, if $s(p)\le s(q)$ and comparison gives the reverse embedding, its leftover in $p$ has trace at most zero, and faithfulness kills it. The equality clause follows identically. Only finite-trace comparisons are needed below; the false claim that arbitrary infinite-trace projections are equivalent in a nonseparable semifinite factor is NOT used. [F1, F2, F3, F4, F5, given]

2.1 For a corner $pQp$, a nontrivial central projection $r$ would have $rQ(p-r)=r(pQp)(p-r)=0$, contradicting the canonical nonzero-corner supplier. The center has no nontrivial projections, so spectral calculus makes it scalar. A minimal projection in $pQp$ is also minimal in $Q$, since every subprojection of it belongs to the corner. This proves diffuseness. For a matrix amplification, commuting with all matrix units makes its center scalar when $Q$ is a factor. It is diffuse: if it had a minimal projection $r$, a nonzero corner linking $r$ to $e_11$ supplies a nonzero subprojection of $e_11$ equivalent to $r$; that would be a minimal projection in $e_11 M_k(Q)e_11\cong Q$, a contradiction. Its matrix trace is faithful and normal by the finite sum formula. [F1, F2, F3, F4, F5, step 1.1]

3.1 For uniqueness of trace, first bisect every nonzero projection $p$ in a diffuse factor into equivalent halves. A maximal orthogonal family of pairs of equivalent nonzero projections under $p$ exhausts $p$: a nonzero remainder splits into two nonzero projections, between which the canonical supplier supplies another pair. The sums of the first and second members are equivalent and sum to $p$. Iterate to partition $1$ into $2^n$ equivalent projections. Every normalized tracial state takes value $2^-n$ on these. For a projection $q$, comparison with the successive partial sums traps the value of every tracial state between $k/2^n$ and $(k+1)/2^n$ for some $k$ (equality at an endpoint causes no difficulty). Let $n\to \infty $ to get uniqueness on projections. Finite spectral step approximations give norm density of their linear span in the self-adjoint part; positivity makes states bounded, so uniqueness holds everywhere. No normality of the second tracial state is required. [F1, F2, F3, F4, F5, step 2.1] ∎
