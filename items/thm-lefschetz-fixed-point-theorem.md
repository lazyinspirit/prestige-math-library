---
id: thm-lefschetz-fixed-point-theorem
kind: theorem
title: "Lefschetz fixed point theorem"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-algebraic-lefschetz-number, cor-lefschetz-number-is-homotopy-invariant, thm-lefschetz-hopf-index-formula, def-global-geometric-lefschetz-number, thm-whitney-approximation-for-euclidean-valued-maps, thm-weak-whitney-proper-embedding-theorem, cor-a-closed-euclidean-submanifold-has-a-smooth-neighbourhood-retraction, thm-compactness-under-continuous-maps, def-singular-simplex-and-singular-chain-group-with-coefficients, def-axiom-of-choice, def-countable-choice, thm-heine-borel-rn]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  scraped: []
  references:
    - title: "Victor Guillemin and Alan Pollack, Differential Topology (Prentice-Hall 1974; complete 236-page PDF)"
      url: "https://www.math.auckland.ac.nz/~hekmati/Books/GP.pdf"
      locator: "Ch. 3 §4, printed p. 120 (Smooth Lefschetz Fixed-Point Theorem: L(f) nonzero implies a fixed point)"
    - title: "Eleny Ionel, notes by Andrew Lin, Stanford Math 215B Differential Topology, Winter 2023 (complete 63-page lecture notes)"
      url: "https://web.stanford.edu/~lindrew/math215B.pdf"
      locator: "Lecture 17, printed p. 55 (Corollary 156: the topological Lefschetz fixed point theorem)"
    - title: "Peter Wong, Lectures on Fixed Point Theory, Mini-Course XV Encontro Brasileiro de Topologia, Rio Claro 2006 (complete notes)"
      url: "https://www.dm.ufscar.br/profs/ebt/history/2006/files/fixed_point.pdf"
      locator: "Lecture II §5, printed p. 13 (Theorem 5.1 and the fixed point consequence)"
dependency_level: 12
---

## Statement

Assume AC ([[def-axiom-of-choice]]). Let $M$ be a closed smooth manifold and let
$f:M\to M$ be continuous. If $L(f)\neq0$
([[def-algebraic-lefschetz-number]]), then $f$ has a fixed point. No converse is
asserted: $L(f)=0$ does not force $f$ to be fixed-point-free, as the companion
counterexample shows.

## Facts & Assumptions

**Given:** AC, a closed smooth manifold $M$ and a continuous self-map $f$.

[F1] Under countable choice, $M$ admits a proper smooth Euclidean embedding ([[thm-weak-whitney-proper-embedding-theorem]]) and its closed image $S$ has an open neighbourhood $U$ with smooth retraction $r:U\to S$ ([[cor-a-closed-euclidean-submanifold-has-a-smooth-neighbourhood-retraction]]). AC implies the required countable choice ([[def-axiom-of-choice]], [[def-countable-choice]]).

[F2] A continuous Euclidean-valued map has a smooth approximation within any positive continuous error bound ([[thm-whitney-approximation-for-euclidean-valued-maps]]).

[F3] Continuous images of compact spaces are compact, and continuous real-valued functions on nonempty compact spaces attain extrema ([[thm-compactness-under-continuous-maps]], clauses 1–2). Closed bounded Euclidean subsets are compact ([[thm-heine-borel-rn]]).

[F4] Homotopic self-maps have the same Lefschetz number ([[cor-lefschetz-number-is-homotopy-invariant]]). A smooth fixed-point-free self-map in positive dimension has $L=I=0$, by [[thm-lefschetz-hopf-index-formula]] and the empty-sum convention of [[def-global-geometric-lefschetz-number]]. The trace definition is [[def-algebraic-lefschetz-number]].

[F5] Singular chains are finite formal sums of continuous simplices ([[def-singular-simplex-and-singular-chain-group-with-coefficients]]).

## Proof

1.1 Prove the contrapositive, assuming $f$ has no fixed point. If $M$ is empty, its homology groups and $L(f)$ are zero. If $\dim M=0$, compactness makes the discrete manifold finite. Every singular simplex is constant; in each point summand its boundary is multiplication by $\sum_{j=0}^k(-1)^j$, which is one for positive even $k$ and zero for odd $k$. Thus homology is zero in positive degrees and $H_0$ has the point basis. The matrix of $f_*$ on this basis has a diagonal one exactly at a fixed point, so its trace is zero. Hence $L(f)=0$. Assume now $M\ne\varnothing$ and $\dim M\ge1$. [given, F4, F5, cases]

1.2 Embed $M$ by $e$ as $S\subset\mathbb R^N$ and take $r:U\to S$ from [F1]. Write $F=e\circ f$. The function $x\mapsto\|e(x)-F(x)\|$ is continuous and positive, so [F3] gives a minimum $d>0$. Choose $b>0$ such that the closed $b$-neighbourhood $K$ of $S$ lies in $U$: finitely many open balls whose doubled balls lie in $U$ cover compact $S$, and the minimum of their radii supplies such a $b$ after shrinking. The set $K$ is compact by Euclidean closedness and boundedness. Continuity of $r$ on $K$ supplies $\eta>0$, with $\eta<b$, such that $\|y-z\|<\eta$ for $y,z\in K$ implies $\|r(y)-r(z)\|<d/2$: cover $K$ by neighbourhood balls on which oscillation is less than $d/4$, take a finite cover by their half-sized balls, and use the minimum half-radius. [given, F1, F3]

2.1 By [F2], choose smooth $A:M\to\mathbb R^N$ with $\|A(x)-F(x)\|<\eta$ for every $x$. The segments $(1-t)F(x)+tA(x)$ lie in $K\subset U$, so $H(t,x)=e^{-1}r((1-t)F(x)+tA(x))$ is a continuous homotopy from $f$ to the smooth self-map $g=e^{-1}rA$. Moreover $\|e(g(x))-F(x)\|=\|r(A(x))-r(F(x))\|<d/2$ since $r(F(x))=F(x)$. Thus $\|e(x)-e(g(x))\|>d/2$, and $g$ is fixed-point-free. [step 1.2, F1, F2, construct]

3.1 By [F4], $L(g)=0$ and $L(f)=L(g)$, proving the contrapositive and hence the fixed-point theorem for every closed smooth manifold. AC supplies the approximation and embedding hypotheses as well as those of the index formula. [step 1.1, step 2.1, F4] ∎

## Remarks

The converse fails: the identity of a positive-dimensional closed manifold with Euler characteristic zero has $L=0$ and fixes every point. The companion counterexample has two isolated fixed points with canceling indices.
