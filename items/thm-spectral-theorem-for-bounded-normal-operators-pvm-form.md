---
id: thm-spectral-theorem-for-bounded-normal-operators-pvm-form
kind: theorem
title: Spectral theorem for bounded normal operators pvm form
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [lem-continuous-functional-calculus-produces-a-regular-pvm, thm-continuous-functional-calculus-for-bounded-normal-operators, thm-continuous-functional-calculus-properties, thm-bounded-borel-pvm-integral, thm-pvm-integral-is-a-star-homomorphism, thm-complex-stone-weierstrass-self-adjoint, def-spectrum-and-resolvent-of-a-bounded-operator, lem-spectral-permanence-for-unital-c-star-subalgebras, thm-bounded-inverse-theorem, thm-spectrum-is-nonempty-compact-and-norm-bounded, def-c-star-algebra-generated-by-a-normal-operator, def-projection-valued-measure, thm-continuous-image-of-a-compact-space-is-compact, def-hilbert-space, def-self-adjoint-positive-unitary-and-normal-operator, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis, Theorem 5.74, printed pp.288–291"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
    - title: "Dana P. Williams, Lecture Notes on the Spectral Theorem, Corollary 5.7, pp.19–20"
      url: "https://www.math.dartmouth.edu/~dana/bookspapers/ln-spec-thm.pdf"
---

## Statement

Assume AC. Let $T$ be a bounded normal operator on a nonzero complex Hilbert
space $H$, with operator spectrum $\sigma(T)$
([[def-spectrum-and-resolvent-of-a-bounded-operator]]). Then:

1. there is a unique regular projection valued measure $E$ on the Borel
   $\sigma$-algebra of the nonempty compact set $\sigma(T)\subseteq\mathbb C$
   such that $\int z\,dE(z)=T$ and, equivalently,
   $$\Phi_E(f)=f(T)\qquad\text{for every continuous }f:\sigma(T)\to\mathbb C,$$
   where $f(T)$ is the continuous functional calculus of
   [[thm-continuous-functional-calculus-for-bounded-normal-operators]] and
   $\Phi_E$ is the bounded Borel integral of the projection valued measure $E$;
   this $E$ is the **spectral projection valued measure** of $T$;
2. conversely, if $\Lambda\subseteq\mathbb C$ is nonempty and compact and $E$ is
   a regular projection valued measure on the Borel $\sigma$-algebra of
   $\Lambda$, then $T_E:=\int z\,dE(z)=\Phi_E(z)$ is a bounded normal operator
   with $\sigma(T_E)\subseteq\Lambda$ and $\|T_E\|\le\max_{z\in\Lambda}|z|$.

## Facts & Assumptions

[A1] For normal $T$ the map $\pi(f):=f(T)$ is the unique isometric unital star-isomorphism $C(\sigma(T))\to C^*(I,T)$ with $\pi(z)=T$; it is complex-linear, multiplicative, unital and star-preserving, and its range consists of the continuous-calculus operators ([[thm-continuous-functional-calculus-for-bounded-normal-operators]], [[thm-continuous-functional-calculus-properties]], [[def-c-star-algebra-generated-by-a-normal-operator]]).

[A2] $\sigma(T)$ is a nonempty compact subset of $\mathbb C$: the operator spectrum coincides with the spectrum of $T$ in the unital C\*-algebra $C^*(I,T)$ by spectral permanence and the bounded inverse theorem, and the spectrum of an element of a nonzero unital complex Banach algebra is nonempty and compact ([[lem-spectral-permanence-for-unital-c-star-subalgebras]], [[thm-bounded-inverse-theorem]], [[thm-spectrum-is-nonempty-compact-and-norm-bounded]], [[def-spectrum-and-resolvent-of-a-bounded-operator]]).

[A3] For a nonempty compact Hausdorff $K$ and a unital star-homomorphism $\pi:C(K;\mathbb C)\to\mathcal B(H)$ there is a unique regular PVM $E$ on the Borel $\sigma$-algebra of $K$ with $\Phi_E(f)=\pi(f)$ for every continuous $f$, and for bounded Borel $h$ the operator $\Phi_E(h)$ satisfies $\|\Phi_E(h)\|\le\|h\|_\infty$ ([[lem-continuous-functional-calculus-produces-a-regular-pvm]], [[thm-bounded-borel-pvm-integral]]).

[A4] For every PVM the map $\Phi_E$ is linear, unital, multiplicative and star-preserving on bounded Borel functions, $\Phi_E(z)=T_E$ is self-adjoint exactly when $z$ is real and $T_E$ is normal because $T_ET_E^*=\Phi_E(|z|^2)=T_E^*T_E$ ([[thm-pvm-integral-is-a-star-homomorphism]]).

[A5] For an orthogonal projection value $E(\Lambda)=I$ and a continuous bounded $g$ on $\Lambda$ the operators $\Phi_E(g)$ are bounded by $\|g\|_\infty$, and for $|\lambda-z|>0$ on $\Lambda$ the function $z\mapsto(\lambda-z)^{-1}$ is continuous ([[thm-bounded-borel-pvm-integral]], [[def-projection-valued-measure]]).

[A6] The $\ast$-polynomials in $z,\overline z$ are uniformly dense in $C(\Lambda;\mathbb C)$ for compact $\Lambda\subseteq\mathbb C$, and the image of a compact set under a continuous map is compact ([[thm-complex-stone-weierstrass-self-adjoint]], [[thm-continuous-image-of-a-compact-space-is-compact]]).

[A7] A bounded operator with a two-sided bounded inverse at $\lambda$ has $\lambda\notin\sigma(T)$; normality is $T^*T=TT^*$ ([[def-spectrum-and-resolvent-of-a-bounded-operator]], [[def-self-adjoint-positive-unitary-and-normal-operator]], [[def-hilbert-space]]).

[A8] AC is the declared choice hypothesis of this page from the construction item onward ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

**Given:** A nonzero complex Hilbert space $H$ and a bounded normal operator $T\in\mathcal B(H)$; for the converse a nonempty compact $\Lambda\subseteq\mathbb C$ and a regular PVM $E$ on its Borel $\sigma$-algebra.

1.1 Existence: $\sigma(T)$ is a nonempty compact subset of $\mathbb C$ and $\pi(f):=f(T)$ is a unital star-homomorphism $C(\sigma(T);\mathbb C)\to\mathcal B(H)$; applying the construction lemma to $K=\sigma(T)$ gives a regular PVM $E$ on the Borel $\sigma$-algebra of $\sigma(T)$ with $\Phi_E(f)=\pi(f)=f(T)$ for every continuous $f$; taking $f$ to be the coordinate function $z$ gives $\int z\,dE=\pi(z)=T$. [A1, A2, A3]

1.2 Converse, boundedness and normality: for a regular PVM $E$ on a nonempty compact $\Lambda$ the coordinate function is bounded by $\max_{z\in\Lambda}|z|$ and measurable, so $T_E=\Phi_E(z)$ is a bounded operator with $\|T_E\|\le\max_{z\in\Lambda}|z|$, its adjoint is $T_E^*=\Phi_E(\overline z)$ by conjugation preservation, and $T_ET_E^*=\Phi_E(z\overline z)=\Phi_E(\overline zz)=T_E^*T_E$ by multiplicativity, so $T_E$ is normal. [A4, A5]

2.1 Converse, spectrum: if $\lambda\in\mathbb C\setminus\Lambda$ then $\Lambda$ is closed and $g(z):=(\lambda-z)^{-1}$ is continuous on $\Lambda$ with $(\lambda-z)g(z)=1$; hence $(\lambda I-T_E)\Phi_E(g)=\Phi_E(\lambda\mathbf 1-z)\Phi_E(g)=\Phi_E((\lambda-z)g)=\Phi_E(\mathbf 1)=I$ and likewise $\Phi_E(g)(\lambda I-T_E)=I$, so $\lambda I-T_E$ has a two-sided bounded inverse and $\lambda\notin\sigma(T_E)$; therefore $\sigma(T_E)\subseteq\Lambda$. [step 1.2, A4, A5, A7]

2.2 Uniqueness for the direct statement: if $E'$ is a regular PVM on the Borel $\sigma$-algebra of $\sigma(T)$ with $\int z\,dE'=T$, then for every $\ast$-polynomial $p(z,\overline z)$ one has $\Phi_{E'}(p)=p(T_E',T_E'^*)=p(T,T^*)=p(T)=\Phi_E(p)$, using multiplicativity and conjugation preservation of $\Phi_{E'}$ together with $T_E'=T$ and the identification of $T^*$ with the calculus value of $\overline z$; since $\ast$-polynomials are uniformly dense in $C(\sigma(T))$ and both $\Phi_{E'}$ and $\Phi_E$ are bounded linear maps agreeing there, they agree on every continuous function, so $E'=E$ by the uniqueness clause of the construction lemma. [step 1.1, A1, A3, A6]

3.1 The spectral PVM $E$ of $T$ therefore exists, is unique among regular PVMs on $\sigma(T)$ whose coordinate integral is $T$, and satisfies $\Phi_E(f)=f(T)$ for all continuous $f$; conversely every coordinate integral of a regular PVM on a compact set is a bounded normal operator with spectrum inside that set. [step 1.1, step 1.2, step 2.1, step 2.2, A8] ∎
