---
id: "cor-a-weakly-contractible-cw-complex-is-contractible"
kind: "corollary"
title: "A weakly contractible CW complex is contractible"
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["thm-whitehead-theorem","def-weak-homotopy-equivalence","def-homotopy-equivalence","def-higher-homotopy-group-by-based-cubes","def-cw-complex-with-closure-finiteness-and-weak-topology","prop-higher-homotopy-basepoint-transport-and-moving-homotopies","def-axiom-of-choice"]
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Hatcher Whitehead theorem consequence; May Chapter 10 §3
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch4.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

Assume the Axiom of Choice. Let $X$ be a nonempty CW complex with one path component, and suppose $\pi_n(X,x)=0$ for every $n\ge1$ at a basepoint $x\in X$. Then $X$ is contractible. Equivalently the homotopy-group hypothesis may be imposed at every basepoint. If $X$ is finite CW, the conclusion holds without any choice principle.

## Facts & Assumptions

[F1] [[thm-whitehead-theorem]] converts weak equivalences of CW complexes into homotopy equivalences, with a choice-free finite clause and an AC arbitrary-cell clause.

[F2] [[def-weak-homotopy-equivalence]] specifies all components and all source basepoints. [[def-higher-homotopy-group-by-based-cubes]] defines the groups via based maps and boundary-fixed homotopies.

[F3] [[def-homotopy-equivalence]] supplies a continuous inverse and both composite homotopies. [[def-cw-complex-with-closure-finiteness-and-weak-topology]] permits the CW structure on a singleton with one zero-cell.

[F4] [[prop-higher-homotopy-basepoint-transport-and-moving-homotopies]] makes the homotopy groups at the endpoints of any specified path isomorphic.

[A1] [[def-axiom-of-choice]] is assumed only when using the arbitrary-cell clause of [F1].

## Proof

**Given:** The nonempty one-component CW complex $X$ and the stated vanishing at $x$.

1.1 For any $z\in X$, a path from $x$ to $z$ exists because there is one path component. By [F4], its transport identifies $\pi_n(X,z)$ with the trivial group $\pi_n(X,x)$ for each $n\ge1$. Thus every basepoint has trivial positive homotopy groups. This is an argument for one arbitrary $z$, not a choice of paths for all points. Conversely vanishing at every basepoint includes the supplied $x$, proving the asserted equivalence of hypotheses. For a singleton $*$ there is exactly one based cube in each degree, so all its groups are trivial by [F2], and it has one component. [F2, F4, given]

2.1 Let $p:X\to *$ be the unique map. The component map is the bijection of two singleton sets. At each source point its map on positive groups is the unique map between trivial groups, an isomorphism by step 1.1. Hence $p$ is a weak homotopy equivalence [F2]. The target with one zero-cell is finite CW by [F3]. Apply [F1] to $p$: for finite $X$ both spaces are finite, so its finite clause applies without AC; for arbitrary $X$ use [A1]. Obtain a continuous $q:*\to X$ and a homotopy $qp\simeq\mathrm{id}_X$. [F1, F2, F3, A1, step 1.1]

3.1 The map $qp$ is constant at $q(*)$. Reversing the homotopy from step 2.1 gives a continuous $H:X\times I\to X$ with $H(z,0)=z$ and $H(z,1)=q(*)$, a contraction. The second inverse identity $pq=\mathrm{id}_*$ is automatic for the singleton. Empty $X$ is excluded explicitly and cannot provide such a point-valued inverse; a singleton $X$ is covered by its constant homotopy. No assertion that this contraction fixes an arbitrary prescribed point is needed. The finite branch spends no choice, and the general branch uses it solely through [F1]. [F3, step 2.1] ∎
