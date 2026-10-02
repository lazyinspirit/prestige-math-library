---
id: lem-haar-averaging-projects-onto-the-intertwiner-space
kind: lemma
title: "Haar averaging projects contractively onto the bounded intertwiners"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps: [def-axiom-of-choice, def-haar-averaging-operator-on-hom-spaces, def-strongly-continuous-unitary-representation, def-hilbert-space, def-bounded-linear-operator, def-operator-norm, cor-normalized-haar-probability-on-a-compact-group, def-measure-space, def-measure-preserving-transformation-and-system, thm-integrals-are-invariant-under-measure-preserving-maps, thm-riesz-representation-for-hilbert-space, def-real-and-complex-inner-product-space, lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-10-02
  precheck: pass
sources:
  references:
    - title: "David Vogan, Review of Harmonic Analysis on Compact Groups, §§2.1–2.16"
      url: "https://math.mit.edu/~dav/compactrev.ps"
    - title: "Emmanuel Kowalski, An Introduction to the Representation Theory of Groups, §§5.2–5.6"
      url: "https://people.math.ethz.ch/~kowalski/representation-theory.pdf"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $K$ be a compact
Hausdorff group with normalized Haar probability measure $\mu$
([[cor-normalized-haar-probability-on-a-compact-group]]), and let
$\pi:K\to U(H)$ and $\sigma:K\to U(J)$ be strongly continuous unitary
representations of $K$ on complex Hilbert spaces $H$ and $J$
([[def-strongly-continuous-unitary-representation]], [[def-hilbert-space]]).
Write
$$\operatorname{Hom}_K(H,J):=\{T\in\mathcal B(H,J):T\pi(g)=\sigma(g)T\text{ for every }g\in K\}$$
for the space of bounded intertwiners and let
$A:\mathcal B(H,J)\to\mathcal B(H,J)$ be the Haar averaging operator of
[[def-haar-averaging-operator-on-hom-spaces]], so that
$$\langle A(T)v,w\rangle=\int_K\langle\sigma(k)T\pi(k)^{-1}v,w\rangle\,d\mu(k)$$
for all $T\in\mathcal B(H,J)$, $v\in H$, $w\in J$. Then:

1. $A$ is idempotent, $A\circ A=A$, and its range is exactly
   $\operatorname{Hom}_K(H,J)$: $A(T)$ intertwines for every bounded $T$, and
   $A(T)=T$ for every bounded intertwiner $T$;
2. $A$ is a contraction, $\|A(T)\|\le\|T\|$ for every $T\in\mathcal B(H,J)$,
   hence $\|A\|\le1$;
3. $\|A\|=1$ if $\operatorname{Hom}_K(H,J)\ne\{0\}$, and $\|A\|=0$ if
   $\operatorname{Hom}_K(H,J)=\{0\}$.

## Facts & Assumptions

**Given:** AC, a compact Hausdorff group $K$ with normalized Haar probability
$\mu$, strongly continuous unitary representations $\pi$ on $H$ and $\sigma$ on
$J$, the averaging map $A$ of the definition item, and a bounded linear operator
$T\in\mathcal B(H,J)$.

[F1] The operator $A(T)$ is well defined by the weak operator integral: for all
$v\in H$ and $w\in J$ the displayed pairing formula holds; the integrand is
continuous on $K$, hence bounded and integrable against $\mu$; $A$ is linear in
$T$; and $\|A(T)\|\le\|T\|$ ([[def-haar-averaging-operator-on-hom-spaces]],
[[def-bounded-linear-operator]]). The definition uses Countable Choice, which
follows from AC, through the Riesz representation theorem for $J$
([[thm-riesz-representation-for-hilbert-space]],
[[def-real-and-complex-inner-product-space]],
[[lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]]).

[F2] The normalized Haar probability is left invariant and $\mu(K)=1$; for
$h\in K$ the left translation $T_h(k):=hk$ is a measurable self-map with
$\mu(T_h^{-1}E)=\mu(h^{-1}E)=\mu(E)$, hence measure preserving, so
$\int_Kf(hk)\,d\mu(k)=\int_Kf(k)\,d\mu(k)$ for every integrable $f$
([[cor-normalized-haar-probability-on-a-compact-group]],
[[def-measure-preserving-transformation-and-system]],
[[thm-integrals-are-invariant-under-measure-preserving-maps]],
[[def-measure-space]]).

[F3] $\pi$ and $\sigma$ are group homomorphisms into the unitary groups, so
$\pi(e)=\mathrm{id}_H$, $\pi(h^{-1}k)^{-1}=\pi(k)^{-1}\pi(h)$,
$\sigma(hk)=\sigma(h)\sigma(k)$, and $\sigma(h)^{-1}=\sigma(h^{-1})$; each
$\sigma(h)$ is unitary with $\langle\sigma(h)x,y\rangle=\langle x,\sigma(h)^{-1}y\rangle$.
A bounded operator $T:H\to J$ is an **intertwiner**, written
$T\in\operatorname{Hom}_K(H,J)$, exactly when $T\pi(g)=\sigma(g)T$ for every
$g\in K$ ([[def-strongly-continuous-unitary-representation]]).

[F4] For bounded operators $\|Bv\|\le\|B\|\,\|v\|$ for every vector $v$, the
operator norm is the supremum of $\|Bv\|$ over the closed unit ball (also when the domain is zero), and $\|B\|=0$
exactly when $B=0$ ([[def-operator-norm]], [[def-bounded-linear-operator]]).

## Proof

**Proof technique:** direct.

1.1 Let $T\in\mathcal B(H,J)$, $h\in K$, $v\in H$ and $w\in J$. Using unitarity of $\sigma(h)$ and the pairing formula of [F1], $\langle\sigma(h)A(T)v,w\rangle=\langle A(T)v,\sigma(h)^{-1}w\rangle=\int_K\langle\sigma(k)T\pi(k)^{-1}v,\sigma(h)^{-1}w\rangle\,d\mu(k)=\int_K\langle\sigma(h)\sigma(k)T\pi(k)^{-1}v,w\rangle\,d\mu(k)=\int_K\langle\sigma(hk)T\pi(k)^{-1}v,w\rangle\,d\mu(k)$ by the homomorphism property of [F3]. Substituting $k=h^{-1}k'$ and using left invariance of $\mu$ as recorded in [F2], this equals $\int_K\langle\sigma(k')T\pi(h^{-1}k')^{-1}v,w\rangle\,d\mu(k')=\int_K\langle\sigma(k')T\pi(k')^{-1}\pi(h)v,w\rangle\,d\mu(k')=\langle A(T)\pi(h)v,w\rangle$, by [F3] and the pairing formula of [F1] again. As $v,w$ are arbitrary, $\sigma(h)A(T)=A(T)\pi(h)$, and as $h$ is arbitrary, $A(T)$ is an intertwiner. [F1, F2, F3]

1.2 Let $T\in\operatorname{Hom}_K(H,J)$ and $k\in K$. Then $\sigma(k)T\pi(k)^{-1}=\sigma(k)\sigma(k)^{-1}T=T$ by the intertwining relation and the homomorphism properties of [F3]. Hence the integrand of the pairing formula is the constant $k\mapsto\langle Tv,w\rangle$, whose integral against the probability measure $\mu$ is again $\langle Tv,w\rangle$; therefore $\langle A(T)v,w\rangle=\langle Tv,w\rangle$ for all $v,w$ and $A(T)=T$. [F1, F3]

1.3 For every $T\in\mathcal B(H,J)$ the definition of $A$ gives $\|A(T)\|\le\|T\|$ by [F1], so the operator norm of the linear map $A$ satisfies $\|A\|\le1$ by the supremum description in [F4]. [F1, F4]

2.1 Let $T\in\mathcal B(H,J)$. By step 1.1 the operator $A(T)$ lies in $\operatorname{Hom}_K(H,J)$, and step 1.2 applied to that intertwiner gives $A(A(T))=A(T)$. Hence $A\circ A=A$, so $A$ is idempotent, and $\operatorname{range}(A)\subseteq\operatorname{Hom}_K(H,J)$; conversely every $S\in\operatorname{Hom}_K(H,J)$ satisfies $S=A(S)$ by step 1.2, so $\operatorname{Hom}_K(H,J)\subseteq\operatorname{range}(A)$. Thus the range of $A$ is exactly $\operatorname{Hom}_K(H,J)$. [F1, step 1.1, step 1.2]

3.1 If $\operatorname{Hom}_K(H,J)\ne\{0\}$, choose a nonzero intertwiner $S$. Then $S=A(S)$ by step 1.2, so $\|S\|=\|A(S)\|\le\|A\|\,\|S\|$ by [F4], and since $\|S\|\ne0$ this gives $\|A\|\ge1$; with step 1.3, $\|A\|=1$. If instead $\operatorname{Hom}_K(H,J)=\{0\}$, then $\operatorname{range}(A)=\{0\}$ by step 2.1, so $A(T)=0$ for every $T$ and $\|A\|=0$ by [F4]. Together with the contraction bound this proves the precise norm statement. [F4, step 1.2, step 1.3, step 2.1] ∎
