---
id: lem-finite-factor-projection-comparison-and-normalized-trace
kind: lemma
title: "Projection comparison and unique normalized traces in finite factors"
status: draft
dependency_level: 0
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - def-axiom-of-choice
  - def-von-neumann-algebra-and-commutant
  - def-tracial-state-and-faithful-normal-trace-on-a-von-neumann-algebra
  - lem-polar-decomposition-and-nonzero-partial-isometries-in-factors
  - thm-zorn
  - thm-borel-functional-calculus-for-bounded-normal-operators
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Assume AC. Zorn supplies maximal orthogonal families and cyclic decompositions. AC supplies the hypotheses of the published functional analytic suppliers; all nonseparable index sets are allowed."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
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
Every nonzero corner of a diffuse factor is again a diffuse factor. If a diffuse
factor is equipped with a faithful normal normalized trace, that trace is its
unique normalized tracial state. Finite matrix amplifications of a II1 factor
and all their nonzero corners are II1 factors.

## Facts & Assumptions

**Given:** AC and the algebras, traces, Hilbert modules, and finite dimension hypotheses in the Statement.

[F1] AC is the global choice hypothesis. ([[def-axiom-of-choice]])

[F2] A concrete von Neumann algebra is a WOT-closed unital star-algebra; commutants are WOT closed and multiplication by a fixed bounded operator is WOT continuous. ([[def-von-neumann-algebra-and-commutant]])

[F3] A faithful normal tracial state is positive, faithful, tracial, normalized, and WOT continuous on the operator unit ball. ([[def-tracial-state-and-faithful-normal-trace-on-a-von-neumann-algebra]])

[F4] Under AC, polar decomposition stays inside a von Neumann algebra, and any two nonzero projections in a factor have nonzero equivalent subprojections. No separability hypothesis occurs. ([[lem-polar-decomposition-and-nonzero-partial-isometries-in-factors]])

[F5] Under AC, bounded Borel functional calculus supplies spectral projections, the star-homomorphism identities, the spectral norm estimate, and strong convergence for uniformly bounded pointwise convergent functions; all operators used below are bounded. ([[thm-borel-functional-calculus-for-bounded-normal-operators]])

[F6] For a faithful normal semifinite trace $s$, traciality gives $s(v^*v)=s(vv^*)$ for a partial isometry $v$ when these projection traces are finite, and positivity makes $s$ monotone on projections. (Given.)

[F7] Under AC, every nonempty poset in which every chain has an upper bound has a maximal element. ([[thm-zorn]])

## Proof

**Given:** The hypotheses of the Statement and the stated prerequisite contracts.

1.1 Use the canonical supplier: nonzero projections in a factor have nonzero equivalent subprojections, and polar decompositions stay in the algebra. By [F7], choose a maximal family of partial isometries with pairwise orthogonal initial projections under $p$ and pairwise orthogonal final projections under $q$. Their strong sum $v$ is a partial isometry. If both $p-v^*v$ and $q-vv^*$ were nonzero, the supplier would give another nonzero partial isometry between them, contradicting maximality. This proves comparison. If $p\precsim q$, a witnessing partial isometry has initial projection $p$ and final projection $r\le q$, so [F6] gives $s(p)=s(r)\le s(q)$. Conversely, suppose $s(p)\le s(q)$. If comparison gives $p\precsim q$, the conclusion already holds; otherwise $q\precsim p$. A witnessing partial isometry then has initial projection $q$ and final projection $r\le p$, so $s(q)=s(r)\le s(p)\le s(q)$. Hence $s(p)=s(q)$ and $s(p-r)=0$; faithfulness gives $r=p$, so $p$ and $q$ are equivalent and in particular $p\precsim q$. If $s(p)=s(q)$, the same argument applied to either subequivalence shows equivalence. Only finite-trace comparisons are used below; no claim is made that arbitrary infinite-trace projections in a nonseparable semifinite factor are equivalent. [F1, F2, F3, F4, F5, F6, F7, given]

2.1 For a corner $pQp$, a nontrivial central projection $r$ would have $rQ(p-r)=r(pQp)(p-r)=0$, contradicting the canonical nonzero-corner supplier. The center has no nontrivial projections, so spectral calculus makes it scalar. A minimal projection in $pQp$ is also minimal in $Q$, since every subprojection of it belongs to the corner. This proves diffuseness. If $Q$ has faithful normal normalized trace $\tau$, every nonzero corner has faithful normal normalized trace $\tau_p(x)=\tau(x)/\tau(p)$. For a matrix amplification, commuting with all matrix units makes its center scalar when $Q$ is a factor. It is diffuse: if it had a minimal projection $r$, a nonzero corner linking $r$ to $e_11$ supplies a nonzero subprojection of $e_11$ equivalent to $r$; that would be a minimal projection in $e_11 M_k(Q)e_11\cong Q$, a contradiction. Its matrix trace is faithful and normal by the finite sum formula, and every nonzero corner inherits the faithful normal normalized trace by dividing by its value at the corner projection. Thus the stated nonzero corners are II$_1$ factors. [F1, F2, F3, F4, F5, step 1.1]

3.1 For uniqueness of trace, let $\tau$ be the faithful normal normalized trace supplied on the diffuse factor. First bisect every nonzero projection $p$ into equivalent halves. A maximal orthogonal family of pairs of equivalent nonzero projections under $p$ exhausts $p$: a nonzero remainder splits into two nonzero projections, between which the canonical supplier supplies another pair. The sums of the first and second members are equivalent and sum to $p$. Iterate to partition $1$ into $2^n$ equivalent projections. Every normalized tracial state takes value $2^{-n}$ on each. For $q\ne0,1$, choose $k$ with $k/2^n\le\tau(q)<(k+1)/2^n$ and let $r_j$ be the sum of the first $j$ pieces of this partition. The finite-trace comparison in step 1.1 gives $r_k\precsim q\precsim r_{k+1}$. Hence every normalized tracial state $\varphi$ satisfies $k/2^n=\varphi(r_k)\le\varphi(q)\le\varphi(r_{k+1})=(k+1)/2^n$. Letting $n\to\infty$ gives $\varphi(q)=\tau(q)$; the cases $q=0,1$ are immediate. Finite spectral step approximations give norm density of the linear span of projections in the self-adjoint part; positivity makes states bounded, so $\varphi=\tau$ everywhere. No normality of $\varphi$ is required. [F1, F2, F3, F4, F5, F6, F7, step 2.1] ∎
