---
id: thm-projective-space-proper-over-base
kind: theorem
title: "Finite-dimensional projective space is proper over every base"
status: draft
origin: pipeline
deps:
  - def-relative-projective-space-standard-charts
  - lem-projective-space-diagonal-closed
  - lem-projective-space-finite-type-over-base
  - def-locally-finite-type-and-finite-type-morphism
  - lem-universally-closed-valuative-existence-quasicompact
  - def-valuative-diagram-separatedness
  - def-valuation-ring
  - def-scheme
  - def-open-immersion-schemes
  - thm-affine-scheme-ring-anti-equivalence
  - def-finite-type-and-module-finite-algebras
  - def-proper-morphism
  - def-axiom-of-choice
  - lem-valuation-ring-is-local
  - cor-specialisation-order-is-prime-inclusion
  - def-specialisation-and-generic-point
  - def-morphism-of-schemes
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "The Stacks Project, Morphisms of Schemes, Lemma 29.44.5 (tag 01WC) and Section 29.42 (tag 01W0), properness of projective space"
      url: https://stacks.math.columbia.edu/tag/01WC
    - title: "The Stacks Project, Constructions, Lemma 27.8.11 (tag 01MF), universally closedness of projective space"
      url: https://stacks.math.columbia.edu/tag/01MF
    - title: "Vakil, The Rising Sea, sections on proper and projective morphisms and the valuative criteria"
      url: https://math.stanford.edu/~vakil/216blog/FOAGoct2111public.pdf
---

## Statement

Assume the Axiom of Choice. Let $S$ be a scheme and let $n\ge0$. Then the
structure morphism
$$\pi:\mathbb P^n_S\longrightarrow S$$
is proper. No Noetherian, field, reducedness or nonemptiness hypothesis is
imposed on $S$, and the empty base is included.

## Facts & Assumptions

**Given:** A scheme $S$, an integer $n\ge0$, the projection $\pi:\mathbb P^n_S\to S$ of the relative projective space of [[def-relative-projective-space-standard-charts]], and the Axiom of Choice.

[F1] The standard charts $U^S_i$ for $i=0,\dots,n$ are affine over $S$ and form an open cover of $\mathbb P^n_S$; over an affine base $S=\operatorname{Spec}A$ one has $U^A_i=\operatorname{Spec}A[x^{(i)}_\ell:\ell\ne i]$, the overlap $U^A_i\cap U^A_m$ is the distinguished open $D(x^{(i)}_m)\subseteq U^A_i$, and on it $x^{(m)}_\ell=x^{(i)}_\ell/x^{(i)}_m$ for every $\ell\ne m$, with the convention $x^{(i)}_i=1$ (so that $x^{(m)}_i=1/x^{(i)}_m$). The charts, their overlaps and these transitions commute with base change, and $\pi^{-1}(V)=\mathbb P^n_V$ for an open subscheme $V\subseteq S$. ([[def-relative-projective-space-standard-charts]])

[F2] For every scheme $S$ and every $n\ge0$ the diagonal $\Delta_{\mathbb P^n_S/S}$ is a closed immersion; hence $\mathbb P^n_S\to S$ is separated. ([[lem-projective-space-diagonal-closed]])

[F3] For every scheme $S$ and every $n\ge0$ the projection $\mathbb P^n_S\to S$ is of finite type. ([[lem-projective-space-finite-type-over-base]])

[F4] A morphism is of finite type exactly when it is locally of finite type and quasi-compact. ([[def-locally-finite-type-and-finite-type-morphism]])

[F5] Assume AC. Let $f:X\to S$ be a quasi-compact morphism. Then $f$ is universally closed if and only if every valuative diagram for $f$ over every valuation ring $R\subseteq K$ has a lift $\operatorname{Spec}R\to X$. ([[lem-universally-closed-valuative-existence-quasicompact]])

[F6] A valuative diagram for $f:X\to S$ consists of a valuation ring $R\subseteq K$ with fraction field $K$, a morphism $\operatorname{Spec}K\to X$ and a morphism $\operatorname{Spec}R\to S$ forming a commutative square; a lift is a morphism $\operatorname{Spec}R\to X$ making both triangles commute. ([[def-valuative-diagram-separatedness]])

[F7] A subring $V\subseteq K$ is a valuation ring of $K$ if for every $x\in K^\times$ at least one of $x$ and $x^{-1}$ belongs to $V$ ([[def-valuation-ring]]); a valuation ring is local and its nonunits form its unique maximal ideal ([[lem-valuation-ring-is-local]]).

[F8] A scheme is a locally ringed space in which every point has an open neighbourhood which, with the restricted structure sheaf, is an affine scheme. ([[def-scheme]])

[F9] A morphism $j:U\to X$ is an open immersion if it identifies $U$ isomorphically with an open subscheme of $X$; in particular a morphism whose image lies in an open subscheme factors through it. ([[def-open-immersion-schemes]])

[F10] For commutative unital rings $A,B$ the assignment $\varphi\mapsto\operatorname{Spec}(\varphi)$ gives a natural bijection $\operatorname{Hom}_{\rm CRing}(A,B)\cong\operatorname{Hom}_{\rm LRS}(\operatorname{Spec}B,\operatorname{Spec}A)$. ([[thm-affine-scheme-ring-anti-equivalence]])

[F11] Iterating the universal property of a polynomial ring gives a unique unital ring homomorphism $\operatorname{ev}:R[x_1,\dots,x_m]\to A$ extending a prescribed map $R\to A$ and sending each $x_i$ to a prescribed element $a_i\in A$. ([[def-finite-type-and-module-finite-algebras]])

[F12] A morphism of schemes is proper if and only if it is separated, of finite type, and universally closed. ([[def-proper-morphism]])

[F13] The Axiom of Choice states that every family of nonempty sets has a choice function. ([[def-axiom-of-choice]])

[F14] In the spectrum of a ring, a point $\mathfrak q$ is a specialization of $\mathfrak p$ exactly when $\mathfrak p\subseteq\mathfrak q$. ([[cor-specialisation-order-is-prime-inclusion]])

[F15] A morphism of schemes is a morphism of the underlying locally ringed spaces, so its underlying map is continuous. ([[def-morphism-of-schemes]])

## Proof

**Proof technique:** direct: finite type and separatedness come from the standard charts and the diagonal; existence of valuative lifts is the homogeneous-coordinate computation, with the largest coordinate selected by the valuation-ring dichotomy.

1.1 By [F3] the morphism $\pi$ is of finite type, hence by [F4] it is locally of finite type and quasi-compact, and by [F2] it is separated. [F2, F3, F4]

1.2 Let a valuative diagram for $\pi$ be given: a valuation ring $R\subseteq K$ with fraction field $K$, morphisms $a:\operatorname{Spec}K\to\mathbb P^n_S$ and $b:\operatorname{Spec}R\to S$, and $j:\operatorname{Spec}K\to\operatorname{Spec}R$ with $\pi\circ a=b\circ j$ [F6]. Let $s_R\in\operatorname{Spec}R$ be the point corresponding to the unique maximal ideal of $R$, which exists by [F7]. For every $\mathfrak p\in\operatorname{Spec}R$ we have $\mathfrak p\subseteq\mathfrak m_R$, so $s_R$ is a specialization of $\mathfrak p$ by [F14]. Continuity of $b$ [F15] shows that $b(s_R)$ is a specialization of $b(\mathfrak p)$. Choose an affine open $V=\operatorname{Spec}A\subseteq S$ containing $b(s_R)$ [F8]. Since $V$ is open and contains the specialization $b(s_R)$, it contains every generalization $b(\mathfrak p)$: otherwise its closed complement would contain $b(\mathfrak p)$ and hence its closure, including $b(s_R)$. Thus the image of $b$ lies in $V$ and $b$ factors through $V$ [F9]. Since $\pi(a(\eta))=b(j(\eta))\in V$, the map $a$ factors through the open subscheme $\pi^{-1}(V)=\mathbb P^n_A\subseteq\mathbb P^n_S$ [F1, F9]. Replacing $S$ by $V$, it suffices to construct a lift over the affine base $A$; when $S=\varnothing$ there is no morphism $\operatorname{Spec}R\to S$ at all, so assume from here on that the diagram exists. [F1, F6, F7, F8, F9, F14, F15]

2.1 Over the affine base the charts $U^A_i=\operatorname{Spec}A[x^{(i)}_\ell:\ell\ne i]$, $i=0,\dots,n$, form an open cover of $\mathbb P^n_A$ [F1], so the point $a(\eta)$ lies in some chart $U^A_i$, which we fix; then $a$ factors through $U^A_i$ [F9]. By [F10] the morphism from $\operatorname{Spec}K$ to the affine chart $U^A_i$ corresponds to an $A$-algebra homomorphism $\psi:A[x^{(i)}_\ell:\ell\ne i]\to K$. Put $a_\ell:=\psi(x^{(i)}_\ell)\in K$ for $\ell\ne i$ and $a_i:=1\in K$. [F1, F9, F10, step 1.2]

3.1 The tuple $a_0,\dots,a_n$ has $a_i=1$, so some entry is nonzero. We claim that there is an index $m$ with $a_m\ne0$ and $a_j/a_m\in R$ for every $j$. Start with $m:=i$ and process the indices $j\ne i$ one at a time, maintaining the invariant that $a_m\ne0$ and $a_{j'}/a_m\in R$ for every already processed $j'$. If $a_j=0$, then $a_j/a_m=0\in R$ and $m$ is kept. If $a_j\ne0$, apply [F7] to $x=a_j/a_m\in K^\times$: either $a_j/a_m\in R$, and $m$ is kept, or $a_m/a_j\in R$, and we replace $m$ by $j$; in the second case $a_{j'}/a_j=(a_{j'}/a_m)(a_m/a_j)\in R$ for every processed $j'$, so the invariant is preserved. At the end $a_j/a_m\in R$ for all $j$, as claimed. [F7, step 2.1]

4.1 Since $a_m=\psi(x^{(i)}_m)\ne0$, the point $a(\eta)$ lies in the distinguished open $D(x^{(i)}_m)=U^A_i\cap U^A_m$ [F1], so $a$ factors through the open subscheme $U^A_m$ [F9]. By the transition formula $x^{(m)}_\ell=x^{(i)}_\ell/x^{(i)}_m$ of [F1], the restriction of $a$ to $U^A_m$ corresponds by [F10] to the $A$-algebra homomorphism $A[x^{(m)}_\ell:\ell\ne m]\to K$ sending $x^{(m)}_\ell$ to $c_\ell:=a_\ell/a_m$, and $c_\ell\in R$ for every $\ell\ne m$ by step 3.1. [F1, F9, F10, step 3.1]

5.1 Define $\varphi:A[x^{(m)}_\ell:\ell\ne m]\to R$ to be the $A$-algebra homomorphism with $\varphi(x^{(m)}_\ell)=c_\ell$; it exists and is unique with these values and the prescribed restriction to $A$ by the iterated universal property of polynomial rings [F11], and its composite with $A\to A[x^{(m)}]$ is the structure map $A\to R$ encoded by $b$. Let $c:\operatorname{Spec}R\to U^A_m\subseteq\mathbb P^n_A\subseteq\mathbb P^n_S$ be the morphism corresponding to $\varphi$ under [F10]. [F10, F11, step 4.1]

6.1 The composite $\pi\circ c$ corresponds under [F10] to the ring map $A\to A[x^{(m)}]\to R$, which is the structure map encoded by $b$; hence $\pi\circ c=b$. [F10, step 5.1]

6.2 The composite $c\circ j:\operatorname{Spec}K\to U^A_m$ corresponds under [F10] to the $A$-algebra map $A[x^{(m)}]\to K$ sending $x^{(m)}_\ell$ to $c_\ell$, and by step 4.1 this is the same map that the restriction of $a$ to $U^A_m$ corresponds to; hence $c\circ j=a$. [F10, step 4.1, step 5.1]

7.1 Steps 1.2 through 6.2 produce a lift for an arbitrary valuative diagram for $\pi$ over an arbitrary valuation ring. Since $\pi$ is quasi-compact by step 1.1, [F5] shows that $\pi$ is universally closed. By [F12] a separated, finite-type, universally closed morphism is proper; with steps 1.1 and 1.2 this proves that $\pi:\mathbb P^n_S\to S$ is proper. The Axiom of Choice [F13] enters exactly through [F5]; the construction chose an affine open $V$, one chart among the finitely many, and the index $m$ by a finite induction, so no other selection is made. [F5, F12, F13, step 1.1, step 6.2] ∎
