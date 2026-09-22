---
id: lem-character-space-of-generated-normal-algebra-is-operator-spectrum
kind: lemma
title: Character space of generated normal algebra is operator spectrum
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-complex-metric-convergence-and-continuity, def-c-star-algebra-generated-by-a-normal-operator, lem-spectral-permanence-for-unital-c-star-subalgebras, thm-spectrum-as-character-values, lem-characters-on-a-commutative-c-star-algebra-preserve-star, def-axiom-of-choice, def-character-and-maximal-ideal-space, thm-maximal-ideal-space-is-compact-hausdorff, thm-bounded-inverse-theorem, thm-compactness-under-continuous-maps, thm-compact-subset-of-a-hausdorff-space-is-closed, def-spectrum-and-resolvent-of-a-bounded-operator, lem-bounded-hilbert-operators-form-a-c-star-algebra]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Dana P. Williams, Lecture Notes on the Spectral Theorem, Example 4.9, pp.13–15"
      url: "https://www.math.dartmouth.edu/~dana/bookspapers/ln-spec-thm.pdf"
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis, Definition 5.69 and Theorem 5.70, printed pp.268–273"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
---

## Statement

Assume AC. For a bounded normal operator $T$ on a nonzero complex Hilbert space, the map $\chi\mapsto\chi(T)$ is a homeomorphism from the character space $\Delta(C^*(I,T))$ onto the operator spectrum $\sigma(T)$.

## Facts & Assumptions

[A1] For normal $T$ the algebra $C^*(I,T)$ is a nonzero unital commutative C\*-algebra contained in $\mathcal B(H)$ with the same identity, and its elements are norm limits of $\ast$-polynomials in $T$ ([[def-c-star-algebra-generated-by-a-normal-operator]]).

[A2] The character space $\Delta(A)$ of a commutative unital complex Banach algebra carries the pointwise-evaluation topology, in which each evaluation $\chi\mapsto\chi(a)$ is continuous; for a nonzero commutative unital C\*-algebra it is nonempty and compact Hausdorff ([[def-character-and-maximal-ideal-space]], [[thm-maximal-ideal-space-is-compact-hausdorff]]).

[A3] $\sigma_{C^*(I,T)}(T)=\{\chi(T):\chi\in\Delta(C^*(I,T))\}$ ([[thm-spectrum-as-character-values]]).

[A4] $\sigma_{C^*(I,T)}(T)=\sigma_{\mathcal B(H)}(T)=\sigma(T)$ by spectral permanence and the bounded inverse theorem ([[lem-spectral-permanence-for-unital-c-star-subalgebras]], [[def-spectrum-and-resolvent-of-a-bounded-operator]], [[thm-bounded-inverse-theorem]], [[lem-bounded-hilbert-operators-form-a-c-star-algebra]]).

[A5] Characters satisfy $\chi(a^*)=\overline{\chi(a)}$, and a character is continuous for the norm ([[lem-characters-on-a-commutative-c-star-algebra-preserve-star]], [[thm-maximal-ideal-space-is-compact-hausdorff]]).

[A6] The spectrum is a subset of the metric space $\mathbb C$ with its usual subspace topology ([[def-spectrum-and-resolvent-of-a-bounded-operator]], [[def-complex-metric-convergence-and-continuity]]). It is Hausdorff: distinct $z,w$ have disjoint relative open balls of radius $|z-w|/3$, by the triangle inequality.

[A7] The continuous image of an arbitrary compact space is compact, and every compact subset of a Hausdorff space is closed; hence a continuous bijection from a compact space onto a Hausdorff space is a homeomorphism ([[thm-compactness-under-continuous-maps]], [[thm-compact-subset-of-a-hausdorff-space-is-closed]]).

[A8] AC is the global hypothesis ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

**Given:** A nonzero complex Hilbert space $H$ and a bounded normal operator $T\in\mathcal B(H)$, with $\Delta:=\Delta(C^*(I,T))$ and $\Phi(\chi):=\chi(T)$.

1.1 $\Phi$ maps $\Delta$ onto $\sigma(T)$: the character values of $T$ in $C^*(I,T)$ are exactly that spectrum, which equals the operator spectrum by spectral permanence. [A1, A3, A4]

1.2 $\Phi$ is continuous: evaluation at $T$ is continuous in the pointwise-evaluation topology. [A2]

1.3 $\Phi$ is injective: if $\chi(T)=\psi(T)$ then also $\chi(T^*)=\overline{\chi(T)}=\overline{\psi(T)}=\psi(T^*)$, so the two continuous characters agree on $I$, $T$ and $T^*$ and hence, by continuity and multiplicativity, on the norm closure of the unital $\ast$-algebra they generate, which is $C^*(I,T)$. [A1, A5, algebra]

2.1 The source $\Delta$ is compact Hausdorff and the target $\sigma(T)$ is Hausdorff, so the continuous bijection $\Phi$ carries closed subsets of $\Delta$ to compact, hence closed, subsets of $\sigma(T)$; therefore $\Phi^{-1}$ is continuous and $\Phi$ is a homeomorphism. [step 1.1, step 1.2, step 1.3, A2, A6, A7, A8] ∎
