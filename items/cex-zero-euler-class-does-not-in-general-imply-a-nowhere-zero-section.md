---
id: cex-zero-euler-class-does-not-in-general-imply-a-nowhere-zero-section
kind: counterexample
title: Zero Euler class does not in general imply a nowhere-zero section
status: draft
origin: pipeline
deps: ["thm-oriented-clutching-classifies-oriented-bundles-over-spheres", "lem-pi-three-so-three-generated-by-the-quaternion-double-cover", "thm-covering-space-lifting-criterion", "cor-real-line-is-universal-cover-of-circle", "cor-homology-of-spheres", "thm-topological-universal-coefficient-short-exact-sequence-for-cohomology", "cor-short-exact-sequences-of-vector-bundles-split-over-the-base", "def-euler-class-by-zero-section-pullback-of-the-thom-class", "def-axiom-of-choice"]
proof_strategy: contradiction
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Allen Hatcher, Vector Bundles & K-Theory
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "§1.2 clutching, printed pp.25–27; §3.3 the Euler class as a primary obstruction, printed pp.98–106"
    - title: Haynes Miller, MIT 18.906 Algebraic Topology II lecture notes
      url: https://ocw.mit.edu/courses/18-906-algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf
      locator: "Lecture 20 clutching and Lecture 35 Euler obstruction, printed pp.66–68 and 129–132"
---

## Statement refuted

The converse of the vanishing criterion fails in general: the implication
$$\text{an oriented rank-}3\text{ real bundle }E\to S^4\text{ has }e(E)=0 \ \Longrightarrow\ E\text{ admits a nowhere-zero section}$$
is false. There is an oriented rank-three real bundle over $S^4$ whose Euler
class vanishes and which admits no nowhere-zero section.

## Facts & Assumptions

**Given:** AC, the sphere $S^4$ with its standard structure, and the covering homomorphism $\rho:S^3\to SO(3)$.

[F1] For $n\geq1$ and $k\geq1$, orientation-preserving isomorphism classes of oriented rank-$n$ real bundles over $S^k$ correspond bijectively to $[S^{k-1},\operatorname{SO}(n)]$ by clutching; the trivial bundle corresponds to the class of a constant map ([[thm-oriented-clutching-classifies-oriented-bundles-over-spheres]]).

[F2] Conjugation by the unit quaternions is a continuous surjective two-sheeted covering homomorphism $\rho:S^3\to SO(3)$ with kernel $\{\pm1\}$, where $\rho(q)(v)=qvq^{-1}$. Its homotopy class generates $\pi_3(SO(3))\cong\mathbb Z$, and the rank-three bundle $E_\rho\to S^4$ clutched by $\rho$ is nontrivial ([[lem-pi-three-so-three-generated-by-the-quaternion-double-cover]]).

[F5] $\widetilde H_k(S^4;\mathbb Z)=0$ for $k\neq4$ and $\widetilde H_4(S^4;\mathbb Z)=\mathbb Z$; hence $H^3(S^4;\mathbb Z)=0$ by the universal coefficient sequence ([[cor-homology-of-spheres]], [[thm-topological-universal-coefficient-short-exact-sequence-for-cohomology]]).

[F6] If a short exact sequence of numerable bundles over a paracompact Hausdorff base splits, here via a nowhere-zero section spanning a trivial line subbundle and a bundle metric on the quotient, then the middle bundle is the direct sum of the ends ([[cor-short-exact-sequences-of-vector-bundles-split-over-the-base]]).

[F7] The projection $\mathbb R\to\mathbb R/\mathbb Z\cong S^1$ is the universal covering of the circle, and a map from a simply connected space into $S^1$ lifts through it; since $\mathbb R$ is contractible, every map $S^3\to S^1$ is nullhomotopic ([[cor-real-line-is-universal-cover-of-circle]], [[thm-covering-space-lifting-criterion]]).

[F8] The Euler class of an oriented rank-three bundle over $S^4$ lies in $H^3(S^4;\mathbb Z)$ ([[def-euler-class-by-zero-section-pullback-of-the-thom-class]]).

[A1] AC is the Axiom of Choice in the form fixed by [[def-axiom-of-choice]].

## Counterexample
1.1 The witness. Via the clutching bijection [F1] with $k=4$ and $n=3$, let $E\to S^4$ be the oriented rank-three real bundle clutched by the map $\rho:S^3\to\operatorname{SO}(3)$ of [F2]. This is the witness; it is an oriented numerable bundle since $S^4$ is a CW complex. [F1, F2]

1.2 The Euler class vanishes. The bundle $E$ has rank three, so $e(E)\in H^3(S^4;\mathbb Z)$ by [F8]; this group is zero by [F5]. Hence $e(E)=0$. [F5, F8]

2.1 The witness is nontrivial. Clause 4 of [F2] is exactly the assertion that the clutching construction over the equatorial $S^3$ with clutching map $\rho$ produces a nontrivial oriented rank-three bundle $E_\rho\to S^4$. The witness of step 1.1 is this bundle, so it is nontrivial. Equivalently, clauses 2 and 3 of [F2] identify $[\rho]$ with a generator of $\pi_3(SO(3))\cong\mathbb Z$, hence with a nonconstant based homotopy class. No conversion from an unbased nullhomotopy to a based one is used here. [F2, step 1.1]

3.1 There is no nowhere-zero section. Suppose, for contradiction, that $\sigma$ is a nowhere-zero section of $E$. It spans a trivial line subbundle $\varepsilon^1\subseteq E$, and a bundle metric on the paracompact Hausdorff base $S^4$ splits the resulting sequence, so [F6] gives $E\cong\varepsilon^1\oplus F$ with $F$ an oriented rank-two real bundle over $S^4$. By [F1] the bundle $F$ is clutched by a map $S^3\to\operatorname{SO}(2)\cong S^1$, which is nullhomotopic by [F7], since every map from the simply connected $S^3$ to $S^1$ lifts through the contractible universal cover. Hence $F$ is trivial by [F1] and $E\cong\varepsilon^1\oplus F\cong\varepsilon^3$ is trivial, contradicting step 2.1. Therefore no nowhere-zero section exists. [F1, F6, F7, step 2.1, assume-contra, A1]

4.1 Conclusion. The bundle $E$ of step 1.1 is an oriented rank-three real bundle over $S^4$ with $e(E)=0$ by step 1.2 and no nowhere-zero section by step 3.1. This refutes the displayed implication and completes the counterexample. [step 1.1, step 1.2, step 3.1, discharge-contradiction: the triviality of E forced by a section contradicts its established nontriviality] ∎
