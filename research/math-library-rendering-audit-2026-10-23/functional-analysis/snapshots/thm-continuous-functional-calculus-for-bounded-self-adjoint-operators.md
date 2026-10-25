---
id: thm-continuous-functional-calculus-for-bounded-self-adjoint-operators
kind: theorem
title: Continuous functional calculus for bounded self adjoint operators
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [lem-polynomial-calculus-is-isometric-for-self-adjoint-operators, thm-complex-stone-weierstrass-self-adjoint, thm-bounded-operator-space-is-banach, def-axiom-of-choice, lem-spectrum-of-a-self-adjoint-operator-is-real, def-self-adjoint-complex-function-algebra, thm-uniform-limit-continuous-complex-functions, thm-complex-plane-is-complete, lem-bounded-hilbert-operators-form-a-c-star-algebra, def-c-star-algebra-generated-by-a-normal-operator, def-c-star-algebra, thm-bounded-inverse-theorem, thm-spectrum-is-nonempty-compact-and-norm-bounded, def-spectrum-and-resolvent-of-a-bounded-operator]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis, Theorem 5.54, printed pp.250–262"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
    - title: "Dana P. Williams, Lecture Notes on the Spectral Theorem, Example 4.9, pp.13–15"
      url: "https://www.math.dartmouth.edu/~dana/bookspapers/ln-spec-thm.pdf"
verification:
  audited: 2026-09-22
---

## Statement

Assume AC. For a bounded self-adjoint operator $T$ on a nonzero complex Hilbert space there is a unique isometric unital star-homomorphism $C(\sigma(T))\to\mathcal B(H)$, $f\mapsto f(T)$, sending the coordinate function $z$ to $T$, with range $C^*(I,T)$.

## Facts & Assumptions

[A1] For $T=T^*$ and a complex polynomial $p$ one has $\|p(T)\|=\max_{\lambda\in\sigma(T)}|p(\lambda)|$, restriction classes of polynomials on $\sigma(T)$ are well defined, and the class map is isometric ([[lem-polynomial-calculus-is-isometric-for-self-adjoint-operators]]).

[A2] $\sigma(T)\subseteq\mathbb R$ for self-adjoint $T$, and $\sigma(T)$ is nonempty and compact: $\mathcal B(H)$ is a unital complex Banach algebra, the operator spectrum agrees with the spectrum in $\mathcal B(H)$ by the bounded inverse theorem, and spectra in nonzero unital Banach algebras are nonempty and compact ([[lem-spectrum-of-a-self-adjoint-operator-is-real]], [[lem-bounded-hilbert-operators-form-a-c-star-algebra]], [[thm-bounded-inverse-theorem]], [[thm-spectrum-is-nonempty-compact-and-norm-bounded]], [[def-spectrum-and-resolvent-of-a-bounded-operator]]).

[A3] $C(X,\mathbb C)$ for compact Hausdorff $X$ denotes the continuous complex-valued functions, with complex function algebras, self-adjointness, unitality and point separation as defined there; the restrictions of polynomials to $\sigma(T)$ form such an algebra, and for $X=\sigma(T)$ they are point-separating because the coordinate function separates points ([[def-self-adjoint-complex-function-algebra]]).

[A4] Every unital point-separating self-adjoint complex function algebra on a nonempty compact Hausdorff space is uniformly dense in $C(X,\mathbb C)$ ([[thm-complex-stone-weierstrass-self-adjoint]]).

[A5] A uniform limit of continuous complex functions is continuous, and $\mathbb C$ is complete ([[thm-uniform-limit-continuous-complex-functions]], [[thm-complex-plane-is-complete]]).

[A6] $\mathcal B(H)$ is a complex Banach space with submultiplicative norm for composition, so operator-norm Cauchy sequences converge and multiplication is continuous ([[thm-bounded-operator-space-is-banach]], [[lem-bounded-hilbert-operators-form-a-c-star-algebra]]).

[A7] $C^*(I,T)$ is the norm closure of the unital $\ast$-algebra $P(T)$ of $\ast$-polynomials in $T$; a unital star-homomorphism between complex C\*-algebras is a bounded complex-linear map preserving products and adjoints ([[def-c-star-algebra-generated-by-a-normal-operator]], [[def-c-star-algebra]]).

[A8] AC is the hypothesis of the spectral and choice-consuming suppliers ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

**Given:** A nonzero complex Hilbert space $H$, a bounded self-adjoint $T\in\mathcal B(H)$, and the set $A$ of restrictions to $\sigma(T)$ of complex polynomials.

1.1 The spectrum $\sigma(T)$ is a nonempty compact subset of $\mathbb R$. [A2]

1.2 The space $C(\sigma(T))$ with pointwise operations, conjugation and the supremum norm is a unital commutative C\*-algebra: pointwise products and conjugation satisfy the algebra axioms, the supremum norm is submultiplicative and satisfies $\|\overline f f\|_\infty=\|f\|_\infty^2$, and completeness follows because a supremum-norm Cauchy sequence of continuous functions has pointwise limits by completeness of $\mathbb C$, converges uniformly by the standard estimate, and has continuous limit; $A$ is a unital, self-adjoint and point-separating function algebra inside it, hence uniformly dense. [A3, A4, A5, algebra]

1.3 The map $\Phi:A\to\mathcal B(H)$, $p|_{\sigma(T)}\mapsto p(T)$, is well defined and is complex-linear, multiplicative, unital, star-preserving (for $\sigma(T)\subseteq\mathbb R$ the conjugate of $p|_{\sigma(T)}$ is $\overline p|_{\sigma(T)}$) and isometric. For the star identity, write $p(z)=\sum_{j=0}^m a_jz^j$: the C*-involution laws and $T^*=T$ give $p(T)^*=\sum_{j=0}^m\overline{a_j}(T^*)^j=\sum_{j=0}^m\overline{a_j}T^j$; on the real spectrum this polynomial equals $\overline{p(z)}$. [A1, A6, A7, algebra]

2.1 For $f\in C(\sigma(T))$ and polynomials $p_n$ with $\|p_n-f\|_\infty\le1/(n+1)$ (which exist by density) the sequence $p_n(T)$ is Cauchy in operator norm because $\|p_n(T)-p_m(T)\|=\|p_n-p_m\|_\infty\le\tfrac1{n+1}+\tfrac1{m+1}$, so it converges; the limit does not depend on the choice of sequence, since two such sequences differ in norm by at most $2/(n+1)$. [step 1.3, A6, A8]

3.1 Defining $\Psi(f)$ as that limit makes $\Psi:C(\sigma(T))\to\mathcal B(H)$ complex-linear, unital, multiplicative, star-preserving and isometric: each property holds for polynomial representatives by step 1.3 and passes to the limit by continuity of the algebra operations and the norm in $\mathcal B(H)$, while the norm identity passes by continuity of the modulus; moreover $\Psi(z)=T$. [step 2.1, step 1.3, A6, A7, algebra]

4.1 The range of $\Psi$ is $C^*(I,T)$: each $\Psi(f)$ is a norm limit of operators $p_n(T)$ lying in the unital $\ast$-algebra generated by $T$, so the range is contained in its closure; conversely $\Phi(p|_{\sigma(T)})=p(T)$ shows that every $\ast$-polynomial lies in the range, and the range is closed because $\Psi$ is isometric on the complete space established in step 1.2: a convergent sequence of images has Cauchy preimages, whose limit maps to its image limit, so it contains the closure. [step 3.1, step 1.2, A7]

4.2 With step 1.2, the map $\Psi$ is an isometric unital star-homomorphism of complex C\*-algebras in the sense of the definition, and $\Psi(z)=T$. [step 3.1, step 1.2, A7]

4.3 $\Psi$ is the only such map: if $\Xi$ is an isometric unital star-homomorphism with $\Xi(z)=T$, then $\Xi(p|_{\sigma(T)})=p(T)=\Psi(p|_{\sigma(T)})$ for every polynomial $p$, by multiplicativity, unitality and star-preservation; for $f\in C(\sigma(T))$ and approximating polynomials $p_n$ with $\|p_n-f\|_\infty\le1/(n+1)$, continuity of both isometric maps gives $\Xi(f)=\lim\Xi(p_n)=\lim p_n(T)=\Psi(f)$. [step 3.1, step 1.3, algebra]

5.1 The map $f\mapsto f(T):=\Psi(f)$ is therefore the unique isometric unital star-homomorphism $C(\sigma(T))\to\mathcal B(H)$ with $z\mapsto T$ and range $C^*(I,T)$. [step 4.1, step 4.2, step 4.3] ∎
