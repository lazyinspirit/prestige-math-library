---
id: thm-schur-orthogonality-for-compact-groups
kind: theorem
title: "Schur orthogonality for general compact groups"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps: [def-axiom-of-choice, cor-normalized-haar-probability-on-a-compact-group, lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets, def-topological-group, def-compact-space, def-hausdorff-space, def-strongly-continuous-unitary-representation, def-hilbert-space, def-real-and-complex-inner-product-space, def-matrix-coefficient-of-a-unitary-representation, thm-continuous-irreducible-unitary-representations-of-compact-groups-are-finite-dimensional, def-haar-averaging-operator-on-hom-spaces, lem-haar-averaging-projects-onto-the-intertwiner-space, thm-schurs-lemma-for-unitary-representations, def-bounded-linear-operator, def-operator-norm, def-trace-of-an-endomorphism, cor-trace-is-invariant-under-similarity, cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases, thm-bessel-inequality-and-finite-parseval-identity, thm-linearity-of-the-lebesgue-integral-on-l-one, def-integrable-real-and-complex-functions-and-their-integrals, thm-cauchy-schwarz-in-an-inner-product-space, def-linear-isometry-and-orthogonal-or-unitary-operator, def-linear-map]
provenance:
  statement: literature-derived
  proof: literature-derived
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Vera Serganova, Representation Theory, Chapter III §§1.6–2.1"
      url: "https://math.berkeley.edu/~serganov/math252/Bookrep.pdf"
    - title: "David Vogan, Review of Harmonic Analysis on Compact Groups, §§2.1–2.16"
      url: "https://math.mit.edu/~dav/compactrev.ps"
    - title: "Emmanuel Kowalski, An Introduction to the Representation Theory of Groups, §§5.2–5.6"
      url: https://people.math.ethz.ch/~kowalski/representation-theory.pdf
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $K$ be a compact
Hausdorff topological group ([[def-topological-group]], [[def-compact-space]],
[[def-hausdorff-space]]) with normalized Haar probability measure $\mu$
([[cor-normalized-haar-probability-on-a-compact-group]]), and let
$\pi:K\to U(V)$ and $\rho:K\to U(W)$ be irreducible strongly continuous unitary
representations of $K$ on nonzero complex Hilbert spaces $V$ and $W$
([[def-strongly-continuous-unitary-representation]], [[def-hilbert-space]]).
Let $d:=\dim_{\mathbb C}V$ be the degree of $\pi$, so that $d<\infty$ and
$d\ge1$. Matrix coefficients are written
$k\mapsto\langle\pi(k)v,w\rangle$ and $k\mapsto\langle\rho(k)v',w'\rangle$ with
the pairing linear in the first variable
([[def-matrix-coefficient-of-a-unitary-representation]],
[[def-real-and-complex-inner-product-space]]). Then:

1. **(Inequivalent pair.)** If $\pi$ and $\rho$ are not unitarily equivalent
   ([[def-linear-isometry-and-orthogonal-or-unitary-operator]]), then
   $$\int_K\langle\pi(k)v,w\rangle\,\overline{\langle\rho(k)v',w'\rangle}\,d\mu(k)=0$$
   for all $v,w\in V$ and all $v',w'\in W$: the matrix coefficients of
   inequivalent irreducibles are orthogonal in $L^2(K)$.
2. **(A single irreducible.)** For all $v,w,v',w'\in V$,
   $$\int_K\langle\pi(k)v,w\rangle\,\overline{\langle\pi(k)v',w'\rangle}\,d\mu(k)=\frac{1}{d}\,\langle v,v'\rangle\,\overline{\langle w,w'\rangle}.$$
   The case $d=1$ is included.
3. **(Equivalent models.)** If $U:V\to W$ is a unitary intertwiner, that is
   $U\pi(k)=\rho(k)U$ for every $k\in K$, then
   $$\int_K\langle\pi(k)v,w\rangle\,\overline{\langle\rho(k)Uv',Uw'\rangle}\,d\mu(k)=\frac{1}{d}\,\langle v,v'\rangle\,\overline{\langle w,w'\rangle}$$
   for all $v,w,v',w'\in V$.

## Facts & Assumptions

**Given:** AC; a compact Hausdorff group $K$ with normalized Haar probability
$\mu$; irreducible strongly continuous unitary representations $\pi$ on the
nonzero complex Hilbert space $V$ and $\rho$ on the nonzero complex Hilbert
space $W$; vectors $v,w\in V$ and $v',w'\in W$.

[F1] Finite dimensionality: the representation spaces of irreducible strongly
continuous unitary representations of $K$ are finite dimensional, so
$d:=\dim V<\infty$ and $\dim W<\infty$, and $d\ge1$ because $V\ne\{0\}$
([[thm-continuous-irreducible-unitary-representations-of-compact-groups-are-finite-dimensional]],
[[def-strongly-continuous-unitary-representation]]).

[F2] Schur's lemma: every bounded self-intertwiner of an irreducible strongly
continuous unitary representation is a scalar multiple of the identity, and a
nonzero bounded intertwiner between two such representations forces them to be
unitarily equivalent; hence inequivalent irreducibles admit no nonzero bounded
intertwiner ([[thm-schurs-lemma-for-unitary-representations]]).

[F3] Haar averaging: the weak operator integral
$\langle A(T)x,z\rangle=\int_K\langle\sigma(k)T\pi_0(k)^{-1}x,z\rangle\,d\mu(k)$
defines a linear contraction $A$ on the bounded operators between the carrier
spaces of strongly continuous unitary representations $\pi_0$ and $\sigma$, and
its range is exactly the space of bounded intertwiners
([[def-haar-averaging-operator-on-hom-spaces]],
[[lem-haar-averaging-projects-onto-the-intertwiner-space]]); here $A$ is
linear and $\|A(T)\|\le\|T\|$
([[def-bounded-linear-operator]], [[def-operator-norm]]).

[F4] Trace: for a finite-dimensional complex vector space with an orthonormal
basis $e_1,\dots,e_d$, the trace of an endomorphism $T$ satisfies
$\operatorname{tr}(T)=\sum_{i=1}^d\langle Te_i,e_i\rangle$ and
$\operatorname{tr}(cI)=c\,d$; similar endomorphisms have equal trace, so
$\operatorname{tr}(\pi(k)T\pi(k)^{-1})=\operatorname{tr}(T)$ for every $k$
([[def-trace-of-an-endomorphism]],
[[cor-trace-is-invariant-under-similarity]],
[[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]]).

[F5] Orthonormal expansions: for an orthonormal basis $e_1,\dots,e_d$ of a
finite-dimensional inner product space and any vector $y$, one has
$y=\sum_{i=1}^d\langle y,e_i\rangle e_i$; the pairing is linear in the first
variable and conjugate-linear in the second, so a finite sum pulls out of the
first variable,
$\bigl\langle\sum_{i=1}^dc_ie_i,z\bigr\rangle=\sum_{i=1}^dc_i\langle e_i,z\rangle$
([[thm-bessel-inequality-and-finite-parseval-identity]],
[[def-real-and-complex-inner-product-space]]).

[F6] Scalar integral: for a probability measure, $\int_K1\,d\mu=1$, finite sums
and scalar multiples of integrable functions integrate termwise
([[thm-linearity-of-the-lebesgue-integral-on-l-one]],
[[def-integrable-real-and-complex-functions-and-their-integrals]]).

[F7] A rank-one operator $Tx=\langle x,v'\rangle v$ is linear
([[def-linear-map]]) and bounded with $\|Tx\|\le\|v'\|\,\|x\|\,\|v\|$ by the
Cauchy--Schwarz inequality
([[thm-cauchy-schwarz-in-an-inner-product-space]]).

[F8] A unitary intertwiner $U:V\to W$ is a bijective linear isometry satisfying
$U\pi(k)=\rho(k)U$; hence
$\langle\rho(k)Uv',Uw'\rangle=\langle U\pi(k)v',Uw'\rangle=\langle\pi(k)v',w'\rangle$
([[def-linear-isometry-and-orthogonal-or-unitary-operator]],
[[def-real-and-complex-inner-product-space]]).

## Proof

**Proof technique:** direct.

1.1 Fix $v,w\in V$ and $v',w'\in W$. By [F1] the dimensions $d=\dim V$ and $\dim W$ are finite and $d\ge1$. [F1]

1.2 Inequivalent case. Assume first that $\pi$ and $\rho$ are not unitarily equivalent, and define $T:W\to V$ by $Tx:=\langle x,v'\rangle v$. By [F7] the operator $T$ is bounded of rank one. Applying the Haar averaging operator $A$ of [F3] to the pair $(\rho,\pi)$ of representations, the operator $A(T):W\to V$ is a bounded intertwiner, so $A(T)\rho(k)=\pi(k)A(T)$ for every $k$. Since $\pi$ and $\rho$ are inequivalent irreducible representations, Schur's lemma [F2] forces $A(T)=0$. [F2, F3, F7]

1.3 Same-representation case. Now take $\rho=\pi$ on $W=V$ and $T:V\to V$, $Tx=\langle x,v'\rangle v$ as before, a bounded finite-rank operator. The average $A(T):V\to V$ is a bounded self-intertwiner of the irreducible representation $\pi$, so Schur's lemma [F2] provides a scalar $c$ with $A(T)=cI$. [F2, F3, F7]

1.4 The rank-one trace is $\operatorname{tr}(T)=\langle v,v'\rangle$: in the orthonormal basis $e_1,\dots,e_d$, the matrix of $T$ has entries $\langle Te_j,e_i\rangle=\langle e_j,v'\rangle\langle v,e_i\rangle$, so $\operatorname{tr}(T)=\sum_{i=1}^d\langle e_i,v'\rangle\langle v,e_i\rangle=\sum_{i=1}^d\langle v,e_i\rangle\langle e_i,v'\rangle=\bigl\langle\sum_{i=1}^d\langle v,e_i\rangle e_i,v'\bigr\rangle=\langle v,v'\rangle$, pulling the finite sum out of the first variable by [F5] and using the orthonormal expansion $v=\sum_{i=1}^d\langle v,e_i\rangle e_i$ of [F5]. [F4, F5]

2.1 Evaluating at $w'$ and $w$, the weak pairing formula of [F3] for the pair $(\rho,\pi)$ and the definition of $T$ give $\langle A(T)w',w\rangle=\int_K\langle\pi(k)T\rho(k)^{-1}w',w\rangle\,d\mu(k)=\int_K\langle\rho(k)^{-1}w',v'\rangle\,\langle\pi(k)v,w\rangle\,d\mu(k)$. Unitarity of $\rho(k)$ gives $\langle\rho(k)^{-1}w',v'\rangle=\langle w',\rho(k)v'\rangle=\overline{\langle\rho(k)v',w'\rangle}$, so the integral equals $\int_K\langle\pi(k)v,w\rangle\,\overline{\langle\rho(k)v',w'\rangle}\,d\mu(k)$. Since $A(T)=0$ by step 1.2, this integral is $0$. [F3, F7, step 1.2]

2.2 The trace of $A(T)$ computes $c$ and the trace of $T$: by [F4] applied to an orthonormal basis $e_1,\dots,e_d$ of $V$, $\operatorname{tr}(A(T))=\sum_{i=1}^d\langle A(T)e_i,e_i\rangle=\sum_{i=1}^d\int_K\langle\pi(k)T\pi(k)^{-1}e_i,e_i\rangle\,d\mu(k)=\int_K\operatorname{tr}\bigl(\pi(k)T\pi(k)^{-1}\bigr)d\mu(k)=\int_K\operatorname{tr}(T)\,d\mu(k)=\operatorname{tr}(T)$, using the weak pairing formula of [F3] for $\langle A(T)e_i,e_i\rangle$, termwise integration by [F6], the trace of the conjugated endomorphism in [F4], and $\mu(K)=1$ in [F6]. On the other hand $\operatorname{tr}(A(T))=\operatorname{tr}(cI)=cd$ by [F4]. [F3, F4, F6, step 1.3]

3.1 Combining steps 1.3, 2.2 and 1.4 gives $cd=\operatorname{tr}(A(T))=\operatorname{tr}(T)=\langle v,v'\rangle$, hence $c=d^{-1}\langle v,v'\rangle$. Evaluating the weak pairing formula of [F3] at $w'$ and $w$ exactly as in step 2.1 then gives $\int_K\langle\pi(k)v,w\rangle\,\overline{\langle\pi(k)v',w'\rangle}\,d\mu(k)=\langle A(T)w',w\rangle=c\,\langle w',w\rangle=\frac{1}{d}\langle v,v'\rangle\overline{\langle w,w'\rangle}$, where the last equality uses $\langle w',w\rangle=\overline{\langle w,w'\rangle}$. [F3, step 2.2, step 1.4, step 2.1, algebra]

4.1 Equivalent models. If $U:V\to W$ is a unitary intertwiner, then by [F8] the coefficient $\langle\rho(k)Uv',Uw'\rangle$ equals $\langle\pi(k)v',w'\rangle$, so the integral in claim 3 reduces to the integral of claim 2 and equals $d^{-1}\langle v,v'\rangle\overline{\langle w,w'\rangle}$. Together with steps 2.1 and 3.1 this proves the orthogonality of matrix coefficients for inequivalent irreducibles, the normalized $d^{-1}$ formula for a single irreducible including $d=1$, and the equivalent-model form. [F8, step 2.1, step 3.1] ∎
