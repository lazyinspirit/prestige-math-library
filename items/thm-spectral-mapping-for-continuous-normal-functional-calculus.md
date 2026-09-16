---
id: thm-spectral-mapping-for-continuous-normal-functional-calculus
kind: theorem
title: Spectral mapping for continuous normal functional calculus
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-continuous-functional-calculus-for-bounded-normal-operators, lem-spectral-permanence-for-unital-c-star-subalgebras, def-axiom-of-choice, def-c-star-algebra-generated-by-a-normal-operator, thm-spectrum-as-character-values, lem-character-space-of-generated-normal-algebra-is-operator-spectrum, def-spectrum-and-resolvent-of-a-bounded-operator, def-self-adjoint-positive-unitary-and-normal-operator, def-c-star-algebra]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis, Theorem 5.70, printed pp.268–273"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
    - title: "Dana P. Williams, Lecture Notes on the Spectral Theorem, Example 4.9, pp.13–15"
      url: "https://www.math.dartmouth.edu/~dana/bookspapers/ln-spec-thm.pdf"
---

## Statement

Assume AC. For a bounded normal operator $T$ on a nonzero complex Hilbert space and $f\in C(\sigma(T))$, the operator $f(T)$ is normal and $\sigma_{\mathcal B(H)}(f(T))=f(\sigma(T))$. This includes constant functions and disconnected spectra.

## Facts & Assumptions

[A1] The normal calculus $f\mapsto f(T)$ is an isometric unital star-isomorphism $C(\sigma(T))\to C^*(I,T)$ with $z\mapsto T$, so $f(T)^*=\overline f(T)$ and $f(T)g(T)=(fg)(T)$ ([[thm-continuous-functional-calculus-for-bounded-normal-operators]]).

[A2] The algebra $C^*(I,T)$ is commutative when $T$ is normal, and it is a unital C\*-subalgebra of $\mathcal B(H)$ with the same identity ([[def-c-star-algebra-generated-by-a-normal-operator]] as used by the calculus, [[def-c-star-algebra]]).

[A3] For a unital C\*-subalgebra $B\subseteq A$ with the same identity one has $\sigma_B(b)=\sigma_A(b)$ for every $b\in B$ ([[lem-spectral-permanence-for-unital-c-star-subalgebras]]).

[A4] For a nonzero commutative unital complex Banach algebra $C$ and $c\in C$ one has $\sigma_C(c)=\{\chi(c):\chi\in\Delta(C)\}$ ([[thm-spectrum-as-character-values]]).

[A5] For normal $T$ the map $\Phi(\chi)=\chi(T)$ is a homeomorphism $\Delta(C^*(I,T))\to\sigma(T)$, so $\Phi(\Delta(C^*(I,T)))=\sigma(T)$ ([[lem-character-space-of-generated-normal-algebra-is-operator-spectrum]]).

[A6] The operator spectrum of $f(T)\in C^*(I,T)\subseteq\mathcal B(H)$ is the spectrum in $\mathcal B(H)$ ([[def-spectrum-and-resolvent-of-a-bounded-operator]] for the spectrum convention).

[A7] A multiplication operator on a commutative algebra is determined by its values under characters, and a constant function $f\equiv c$ gives $f(T)=cI$ with $\sigma(cI)=\{c\}$ ([[def-self-adjoint-positive-unitary-and-normal-operator]] for the scalar-multiple convention).

[A8] AC is the hypothesis of the permanence and character-space suppliers ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

**Given:** A nonzero complex Hilbert space $H$, a bounded normal $T\in\mathcal B(H)$ and $f\in C(\sigma(T))$, with $f(T)$ the image of $f$ under the normal calculus.

1.1 $f(T)$ lies in the commutative C\*-algebra $C^*(I,T)$ and $f(T)^*=\overline f(T)$ also lies there, so the two commute and $f(T)$ is normal. [A1, A2]

1.2 The spectrum of $f(T)$ computed in $C^*(I,T)$ is the set of character values: for $\chi\in\Delta(C^*(I,T))$ one has $\chi(f(T))=(\Psi(f))^{\wedge}(\chi)=f(\Phi(\chi))$, because $\Psi$ is a $\ast$-isomorphism onto $C^*(I,T)$ and $\Phi(\chi)=\chi(T)$; hence $\sigma_{C^*(I,T)}(f(T))=f(\Phi(\Delta(C^*(I,T))))=f(\sigma(T))$. [A1, A4, A5]

2.1 Spectral permanence for the unital C\*-subalgebra $C^*(I,T)\subseteq\mathcal B(H)$ gives $\sigma_{\mathcal B(H)}(f(T))=\sigma_{C^*(I,T)}(f(T))=f(\sigma(T))$. [step 1.1, step 1.2, A3, A6, A8]

3.1 Hence $f(T)$ is normal and its operator spectrum is the image of the spectrum of $T$ under $f$; constant functions give $f(T)=cI$ and $f(\sigma(T))=\{c\}$, and no connectedness of $\sigma(T)$ is used, so disconnected spectra are covered by the same pointwise argument. [step 2.1, A7] ∎
