---
id: thm-continuous-irreducible-unitary-representations-of-compact-groups-are-finite-dimensional
kind: theorem
title: "Irreducible unitary representations of compact groups are finite dimensional"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps: [def-axiom-of-choice, cor-normalized-haar-probability-on-a-compact-group, def-topological-group, def-compact-space, def-hausdorff-space, def-strongly-continuous-unitary-representation, def-hilbert-space, lem-a-rank-one-haar-average-is-a-nonzero-compact-intertwiner, thm-schurs-lemma-for-unitary-representations, lem-a-compact-scalar-identity-forces-finite-dimension, def-compact-linear-operator, def-bounded-linear-operator, def-dimension, def-linear-basis]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  references:
    - title: "Vera Serganova, Representation Theory, Chapter III §§1.6–2.1"
      url: "https://math.berkeley.edu/~serganov/math252/Bookrep.pdf"
    - title: "Emmanuel Kowalski, An Introduction to the Representation Theory of Groups, §§5.2–5.6"
      url: "https://people.math.ethz.ch/~kowalski/representation-theory.pdf"
    - title: "Bekka, de la Harpe and Valette, Kazhdan's Property (T), Appendix A §A.5"
      url: "https://ncatlab.org/nlab/files/BekkaHarpeValetteOnKashdanPropertyT.pdf"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $K$ be a compact
Hausdorff topological group ([[def-topological-group]], [[def-compact-space]],
[[def-hausdorff-space]]) and let $\pi:K\to U(H)$ be an irreducible strongly
continuous unitary representation of $K$ on a nonzero complex Hilbert space $H$
([[def-strongly-continuous-unitary-representation]], [[def-hilbert-space]]).
Then $H$ is finite dimensional: it admits an ordered basis of finite length
([[def-dimension]], [[def-linear-basis]]).

## Facts & Assumptions

**Given:** AC, a compact Hausdorff group $K$, and an irreducible strongly
continuous unitary representation $\pi$ of $K$ on a nonzero complex Hilbert
space $H$.

[F1] Under AC there is a normalized Haar probability measure on $K$, and for
every $\xi\in H$ with $\xi\ne0$ the rank-one average
$Q_\xi:=\int_K\pi(k)R_\xi\pi(k)^{-1}\,d\mu(k)$, where
$R_\xi x=\langle x,\xi\rangle\xi$, is a well-defined bounded operator on $H$
that is self-adjoint, nonzero, compact
([[def-compact-linear-operator]]), and satisfies
$\pi(g)Q_\xi=Q_\xi\pi(g)$ for every $g\in K$
([[lem-a-rank-one-haar-average-is-a-nonzero-compact-intertwiner]],
[[cor-normalized-haar-probability-on-a-compact-group]],
[[def-bounded-linear-operator]]).

[F2] Schur's lemma: for an irreducible strongly continuous unitary
representation of a topological group on a nonzero complex Hilbert space, every
bounded operator commuting with the representation is a scalar multiple of the
identity ([[thm-schurs-lemma-for-unitary-representations]]).

[F3] If a nonzero scalar multiple $cI_H$ of the identity of a real or complex
Hilbert space is a compact operator, then $H$ admits an ordered basis of finite
length; this implication is choice free
([[lem-a-compact-scalar-identity-forces-finite-dimension]]).

[F4] $\pi$ is a group homomorphism, and $I_H\ne0$ because $H\ne\{0\}$
([[def-strongly-continuous-unitary-representation]]).

## Proof

**Proof technique:** direct.

1.1 Since $H\ne\{0\}$, choose an element $\xi\in H$ with $\xi\ne0$, which is exactly the hypothesis under which [F1] applies. The operator $Q_\xi$ of [F1] is therefore well defined, bounded, self-adjoint, nonzero, compact, and commutes with every operator $\pi(g)$, that is, $Q_\xi\pi(g)=\pi(g)Q_\xi$ for all $g\in K$. [F1]

2.1 The operator $Q_\xi$ is a bounded operator commuting with the irreducible representation $\pi$, so Schur's lemma [F2] provides a scalar $c$ with $Q_\xi=cI_H$. Since $Q_\xi\ne0$ by step 1.1 while $I_H\ne0$ by [F4], the scalar satisfies $c\ne0$. [F2, F4, step 1.1]

3.1 Now $cI_H=Q_\xi$ is a nonzero compact scalar identity with $c\ne0$, so [F3] applied to the Hilbert space $H$ shows that $H$ admits an ordered basis of finite length. Hence every irreducible strongly continuous unitary representation of $K$ is finite dimensional. [F3, step 2.1] ∎
