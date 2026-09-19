---
id: thm-borel-functional-calculus-for-bounded-normal-operators
kind: theorem
title: Borel functional calculus for bounded normal operators
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-borel-functional-calculus-for-a-bounded-normal-operator, thm-pvm-integral-is-a-star-homomorphism, thm-bounded-borel-pvm-integral, thm-continuous-functional-calculus-for-bounded-normal-operators, thm-continuous-functional-calculus-properties, lem-continuous-functional-calculus-produces-a-regular-pvm, thm-spectral-theorem-for-bounded-normal-operators-pvm-form, thm-bounded-c-zero-functionals-are-regular-complex-measure-integrals, thm-hilbert-adjoint-properties, def-self-adjoint-positive-unitary-and-normal-operator, def-hilbert-space, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis, Theorem 5.75, printed pp.291–295"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
    - title: "Dana P. Williams, Lecture Notes on the Spectral Theorem, Theorem 5.6(c), p.18"
      url: "https://www.math.dartmouth.edu/~dana/bookspapers/ln-spec-thm.pdf"
---

## Statement

Assume AC. Let $T$ be a bounded normal operator on a nonzero complex Hilbert
space $H$, let $E$ be its spectral projection valued measure on $\sigma(T)$, and
let $f\mapsto f(T)$ be the bounded Borel functional calculus of
[[def-borel-functional-calculus-for-a-bounded-normal-operator]]. Then:

1. $f(T)$ extends the continuous calculus: for continuous $f$ it agrees with
   the operator denoted $f(T)$ by
   [[thm-continuous-functional-calculus-for-bounded-normal-operators]], and
   $\mathbf 1_B(T)=E(B)$ for every Borel $B\subseteq\sigma(T)$;
2. the calculus is linear, unital, multiplicative and star-preserving:
   $(af+bg)(T)=af(T)+bg(T)$, $\mathbf 1(T)=I$, $(fg)(T)=f(T)g(T)$ and
   $\overline f(T)=f(T)^*$;
3. $\|f(T)x\|^2=\int|f|^2\,dE_x$ for every $x\in H$ and
   $\|f(T)\|=\|f\|_{E,\infty}\le\|f\|_\infty$, the exact norm being the
   $E$-essential supremum of $f$; in particular $f(T)$ is normal with
   $f(T)^*=\overline f(T)$;
4. if $(f_n)$ are uniformly bounded Borel functions, $f$ is bounded Borel, and
   $f_n\to f$ pointwise $E$-almost everywhere, then $f_n(T)\to f(T)$ in the
   strong operator topology;
5. every $S\in\mathcal B(H)$ commuting with $T$ and $T^*$ commutes with every
   $f(T)$.

## Facts & Assumptions

[A1] The spectral PVM $E$ of $T$ is the unique regular PVM on the Borel $\sigma$-algebra of $\sigma(T)$ with $\int z\,dE=T$; it is obtained from the continuous calculus $\pi(f)=f(T)$ by the construction that represents each continuous functional $f\mapsto\langle\pi(f)x,y\rangle$ by a unique finite regular complex measure $\mu_{x,y}$ with $\int f\,d\mu_{x,y}=\langle f(T)x,y\rangle$, and then $\langle E(B)x,y\rangle=\mu_{x,y}(B)$ and $\langle\Phi_E(h)x,y\rangle=\int h\,d\mu_{x,y}$ for every bounded Borel $h$ ([[lem-continuous-functional-calculus-produces-a-regular-pvm]], [[thm-spectral-theorem-for-bounded-normal-operators-pvm-form]]).

[A2] For continuous $f$ the calculus satisfies $\Phi_E(f)=f(T)$, and the map $f\mapsto f(T)$ on $C(\sigma(T))$ is a unital star-homomorphism that commutes with every $S$ satisfying $ST=TS$ and $ST^*=T^*S$ ([[thm-continuous-functional-calculus-for-bounded-normal-operators]], [[thm-continuous-functional-calculus-properties]], [[def-borel-functional-calculus-for-a-bounded-normal-operator]]).

[A3] $\Phi_E$ is linear, unital, multiplicative and star-preserving on bounded Borel functions, $\|\Phi_E(f)\|=\|f\|_{E,\infty}$, $\|\Phi_E(f)x\|^2=\int|f|^2\,dE_x$, and uniformly bounded pointwise $E$-almost everywhere convergence implies strong convergence; by definition $f(T)=\Phi_E(f)$ ([[thm-pvm-integral-is-a-star-homomorphism]], [[thm-bounded-borel-pvm-integral]], [[def-borel-functional-calculus-for-a-bounded-normal-operator]]).

[A4] An operator $S$ commutes with $T$ and $T^*$; the adjoint satisfies $\langle Sx,y\rangle=\langle x,S^*y\rangle$ and normal means $NN^*=N^*N$ ([[thm-hilbert-adjoint-properties]], [[def-self-adjoint-positive-unitary-and-normal-operator]], [[def-hilbert-space]]).

[A5] If two finite regular complex measures on a compact metric space have equal integrals against every continuous function then they are equal, because bounded complex functionals on $C(K;\mathbb C)$ have a unique representing regular complex measure ([[thm-bounded-c-zero-functionals-are-regular-complex-measure-integrals]]).

[A6] AC is the declared choice hypothesis of this page from the construction item onward ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

**Given:** A nonzero complex Hilbert space $H$, a bounded normal operator $T$ with spectral PVM $E$ and Borel calculus $f\mapsto f(T)=\Phi_E(f)$, and a bounded operator $S$ commuting with $T$ and $T^*$.

1.1 Clauses 1 to 4: the agreement with the continuous calculus and $\mathbf 1_B(T)=E(B)$ are the definition of the Borel calculus and the identification $\Phi_E(\mathbf 1_B)=E(B)$; linearity, unitality, multiplicativity and conjugation preservation, the quadratic identity, the norm formula and the strong-convergence property are the corresponding properties of $\Phi_E$; normality follows because $f(T)f(T)^*=\Phi_E(f\overline f)=\Phi_E(\overline ff)=f(T)^*f(T)$. [A2, A3]

1.2 The measures $\mu_{Sx,y}$ and $\mu_{x,S^*y}$ coincide: for every continuous $f$ one has $\int f\,d\mu_{Sx,y}=\langle f(T)Sx,y\rangle=\langle Sf(T)x,y\rangle=\langle f(T)x,S^*y\rangle=\int f\,d\mu_{x,S^*y}$, using the commutant clause of the continuous calculus and the adjoint identity; both are finite regular complex measures, so equality of their integrals against all continuous functions gives $\mu_{Sx,y}=\mu_{x,S^*y}$. [A1, A2, A4]

2.1 The commutant clause: for every bounded Borel $h$ and all $x,y\in H$ one has $\langle h(T)Sx,y\rangle=\int h\,d\mu_{Sx,y}=\int h\,d\mu_{x,S^*y}=\langle h(T)x,S^*y\rangle=\langle Sh(T)x,y\rangle$, so $Sh(T)=h(T)S$; in particular $S$ commutes with every spectral projection $E(B)=\mathbf 1_B(T)$ and with every Borel calculus operator. [A1, step 1.2, A3, A4, A5]

3.1 All five clauses hold: the Borel calculus extends the continuous calculus, is a unital star-homomorphism with $E$-essential-supremum norm, is strongly continuous under uniformly bounded pointwise $E$-almost everywhere convergence, and every operator commuting with $T$ and $T^*$ commutes with all of it. [step 1.1, step 2.1, A6] ∎
