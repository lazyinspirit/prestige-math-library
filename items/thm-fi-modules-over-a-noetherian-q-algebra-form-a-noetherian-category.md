---
id: thm-fi-modules-over-a-noetherian-q-algebra-form-a-noetherian-category
kind: theorem
title: "FI-modules over a Noetherian $\\mathbb Q$-algebra form a Noetherian category"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 5
deps: [def-finite-generation-and-generation-degree-of-an-fi-module,
       def-fi-coinvariant-functors-and-transition-maps,
       def-free-fi-module-generated-by-an-sm-module,
       lem-generated-in-degree-d-is-a-quotient-of-free-fi-modules,
       lem-free-fi-modules-have-explicit-weight-and-stability-bounds,
       lem-generation-degree-bounds-surjectivity-degree-and-weight,
       lem-fi-coinvariant-functors-detect-vanishing-in-bounded-weight,
       lem-specht-modules-classify-irreducibles-over-characteristic-zero-fields,
       thm-hilbert-basis-theorem,
       thm-finitely-generated-modules-over-noetherian-rings-are-noetherian,
       def-noetherian-ring,
       def-noetherian-module,
       def-restriction-and-extension-of-scalars,
       def-polynomial-ring-over-a-commutative-ring,
       def-weight-of-a-characteristic-zero-fi-module,
       def-fi-category-and-fi-module]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Thomas Church, Jordan S. Ellenberg and Benson Farb, “FI-modules and stability for representations of symmetric groups”, arXiv:1204.4533v4 (2014); published in Duke Math. J. 164 (2015) 1833–1910"
      url: "https://arxiv.org/pdf/1204.4533"
      locator: "Theorem 1.3 and its complete proof, printed pp. 3 and 20–21: a finitely generated FI-module over a Noetherian ring containing $\\mathbb Q$ has every sub-FI-module finitely generated; the proof goes through $\\Phi_a$, the graded $k[T]$-module, lifts of homogeneous generators, and restriction of scalars to $\\mathbb Q$"
    - title: "Thomas Church, Jordan S. Ellenberg, Benson Farb and Rohit Nagpal, “FI-modules over Noetherian rings”, Geom. Topol. 18 (2014) 2951–2984; author-hosted full text"
      url: "https://www.math.uchicago.edu/~farb/papers/FImodNoetherian.pdf"
      locator: "Theorem A with the alternative proof via shift functors, printed pp. 1–2 and 12–16 (recorded as the stronger result, not used in the proof below)"
---

## Statement

Let $k$ be a commutative Noetherian ring containing $\mathbb Q$
([[def-noetherian-ring]], [[def-restriction-and-extension-of-scalars]]), and
let $V$ be a finitely generated FI-module over $k$
([[def-finite-generation-and-generation-degree-of-an-fi-module]],
[[def-fi-category-and-fi-module]]). Then every sub-FI-module
$W\subseteq V$ is again finitely generated: the category of FI-modules over
$k$ is Noetherian, in the sense that every subobject of a finitely generated
object is finitely generated. The hypothesis that $k$ contains $\mathbb Q$ is
used only through the exactness of the functors $\Phi_a$ and through
restriction of scalars to $\mathbb Q$
([[def-fi-coinvariant-functors-and-transition-maps]]). No choice principle is
used.

## Facts & Assumptions

**Given:** A commutative Noetherian ring $k$ containing $\mathbb Q$; a finitely generated FI-module $V$ over $k$, generated in degree $\le a$ for some $a\ge0$, and a sub-FI-module $W\subseteq V$ ([[def-finite-generation-and-generation-degree-of-an-fi-module]], [[def-fi-category-and-fi-module]]); the graded $k[T]$-modules $\Phi_a(V)$ and $\Phi_a(W)$ with their transition maps $T$, where $k[T]$ is the polynomial ring in one variable over $k$ ([[def-fi-coinvariant-functors-and-transition-maps]], [[def-polynomial-ring-over-a-commutative-ring]]).

[F1] $\Phi_a(U)_n=(U_{\mathbf a\sqcup n})_{S_n}$ and the transition map $T\colon\Phi_a(U)_n\to\Phi_a(U)_{n+1}$ comes from an injection $\mathbf a\sqcup n\to\mathbf a\sqcup n+1$ fixing $\mathbf a$; $\Phi_a$ is a functor to graded $k[T]$-modules and is exact when $k$ contains $\mathbb Q$, so for $W\subseteq V$ the map $\Phi_a(W)\to\Phi_a(V)$ is injective and a short exact sequence of FI-modules stays exact after $\Phi_a$ ([[def-fi-coinvariant-functors-and-transition-maps]]).

[F2] If $V$ is generated in degree $\le d$, then the evaluation map $\bigoplus_{m\le d}M(V_m)\twoheadrightarrow V$ is surjective, and if $V$ is finitely generated then $V_S$ is a finitely generated $k$-module for every finite set $S$; generation in degree $\le d$ passes to quotients ([[lem-generated-in-degree-d-is-a-quotient-of-free-fi-modules]], [[def-free-fi-module-generated-by-an-sm-module]], [[def-finite-generation-and-generation-degree-of-an-fi-module]]).

[F3] If $V$ is generated in degree $\le d$, then $\operatorname{surj-deg}(V)\le d$, i.e. $T\colon\Phi_r(V)_n\to\Phi_r(V)_{n+1}$ is surjective for all $r\ge0$ and all $n\ge d$; and over a field of characteristic $0$, generation in degree $\le d$ implies $\operatorname{weight}(V)\le d$ ([[lem-generation-degree-bounds-surjectivity-degree-and-weight]], [[lem-free-fi-modules-have-explicit-weight-and-stability-bounds]]).

[F4] If an FI-module $U$ over a characteristic-zero field has $\operatorname{weight}(U)\le a$, then, for every $n\ge a$, every subquotient $W_n$ of $U_n$ satisfies $W_n=0\iff(W_n)_{S_{n-a}}=0$ ([[lem-fi-coinvariant-functors-detect-vanishing-in-bounded-weight]]); weight is monotone under subquotients ([[def-weight-of-a-characteristic-zero-fi-module]]).

[F5] $k[T]$ is a Noetherian commutative ring ([[thm-hilbert-basis-theorem]], [[def-polynomial-ring-over-a-commutative-ring]]), and every finitely generated module over a Noetherian ring is Noetherian, so each of its submodules is finitely generated ([[thm-finitely-generated-modules-over-noetherian-rings-are-noetherian]], [[def-noetherian-module]], [[def-noetherian-ring]]).

[F6] Restriction of scalars along the unital homomorphism $\mathbb Q\to k$ turns each $k$-module into a $\mathbb Q$-vector space by the same abelian group, and turns each FI-module $U$ over $k$ into an FI-module $U^{\mathbb Q}$ over $\mathbb Q$ with the same underlying sets and maps ([[def-restriction-and-extension-of-scalars]]); the coinvariants of $U^{\mathbb Q}_{\mathbf a\sqcup n}$ over $\mathbb Q$ equal the coinvariants of $U_{\mathbf a\sqcup n}$ over $k$ as $\mathbb Q$-vector spaces, because a $k$-multiple $c(\sigma v-v)=\sigma(cv)-cv$ is itself such a relation, so the $k$-span of the set $\{\sigma v-v\}$ equals its $\mathbb Q$-span ([[def-fi-coinvariant-functors-and-transition-maps]]).

## Proof

**Proof technique:** direct.

1.1 By [F2] the $k$-module $V_n$ is finitely generated for every $n\ge0$, and since $k$ is Noetherian and $W_n\subseteq V_n$, each $W_n$ is a finitely generated $k$-module as well. [F2, F5, given]

2.1 The graded $k[T]$-module $\Phi_a(V)$ is finitely generated: by [F3] the map $T\colon\Phi_a(V)_n\to\Phi_a(V)_{n+1}$ is surjective for every $n\ge a$, so every element of $\Phi_a(V)$ lies in the $k[T]$-submodule generated by $\Phi_a(V)_0\oplus\cdots\oplus\Phi_a(V)_a$; each $\Phi_a(V)_i$ with $i\le a$ is a quotient of $V_{a+i}$, hence a finitely generated $k$-module by step 1.1, so it is generated by finitely many elements. [F2, F3, F5, step 1.1]

3.1 Since $\Phi_a(W)$ is a $k[T]$-submodule of the finitely generated module $\Phi_a(V)$ over the Noetherian ring $k[T]$, it is a finitely generated $k[T]$-module; writing a finite generating set as finite sums of homogeneous components, the homogeneous components of the generators form a finite generating set consisting of elements $x_1,\dots,x_r$ with $x_i\in\Phi_a(W)_{n_i}$. [F1, F5, step 2.1, algebra]

4.1 For each $i$ choose a lift $w_i\in W_{a+n_i}$ of $x_i$ (possible because $\Phi_a(W)_{n_i}$ is a quotient of $W_{a+n_i}$), and for each $n<a$ choose a finite generating set of the $k$-module $W_n$, which is possible by step 1.1; let $\widetilde W\subseteq W$ be the sub-FI-module generated by all these elements. Then $\Phi_a(\widetilde W)=\Phi_a(W)$: the inclusion gives $\Phi_a(\widetilde W)\subseteq\Phi_a(W)$, while each $x_i$ is the image of $w_i\in\widetilde W$, so $\Phi_a(\widetilde W)$ contains a generating set of $\Phi_a(W)$. By exactness [F1], applied to $0\to\widetilde W\to W\to W/\widetilde W\to0$, we get $\Phi_a(W/\widetilde W)=0$. [F1, step 1.1, step 3.1]

5.1 Let $U:=W/\widetilde W$. Restricting scalars to $\mathbb Q$ gives an FI-module $U^{\mathbb Q}$ over $\mathbb Q$, a subquotient of $V^{\mathbb Q}$ by construction. The evaluation surjection $\bigoplus_{m\le a}M(V_m)\twoheadrightarrow V$ remains a surjection of $\mathbb Q$-vector spaces after restriction, and the restriction of the free $k$-FI-module $M(V_m)$ is the free $\mathbb Q$-FI-module on $V_m^{\mathbb Q}$, because both are the same direct sum of the same coefficient spaces with the same transition maps; hence $V^{\mathbb Q}$ is generated in degree $\le a$ over $\mathbb Q$ by [F2]. Therefore $\operatorname{weight}(V^{\mathbb Q})\le a$ by [F3] applied over the characteristic-zero field $\mathbb Q$, and $\operatorname{weight}(U^{\mathbb Q})\le a$ because weight is monotone under subquotients [F4]. [F1, F2, F3, F4, F6, step 4.1, given]

6.1 By [F6] the coinvariants of $U^{\mathbb Q}$ are the restriction of the coinvariants of $U$, so $\Phi_a(U^{\mathbb Q})=0$ by step 4.1. Hence for every $n\ge a$ the coinvariants $(U^{\mathbb Q}_n)_{S_{n-a}}=\Phi_a(U^{\mathbb Q})_{n-a}$ vanish, and step 5.1 with [F4] gives $U^{\mathbb Q}_n=0$, which forces $U_n=0$; for $n<a$ the module $U_n$ vanishes by the choice of generators of $W_n$ in step 4.1. Thus $U=0$, that is $W=\widetilde W$ is generated by the finite set of elements chosen in step 4.1, so $W$ is finitely generated. [F4, F6, step 4.1, step 5.1]

7.1 Steps 1.1–6.1 prove that every sub-FI-module $W$ of a finitely generated FI-module $V$ over a commutative Noetherian ring $k$ containing $\mathbb Q$ is finitely generated, so the category of FI-modules over $k$ is Noetherian. All generating sets and lifts chosen are finite, the Hilbert basis theorem enters only through its choice-free finite-generation form [F5], and no map $k\to\mathbb C$ or basis of an infinite-dimensional rational space is used. [step 1.1, step 2.1, step 3.1, step 4.1, step 5.1, step 6.1] ∎
