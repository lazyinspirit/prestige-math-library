---
id: lem-finite-field-schur-descent-and-restriction
kind: lemma
title: "Finite-field descent and restriction of Schur quiver representations"
status: published
dependency_level: 0
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - def-axiom-of-choice
  - thm-extensions-of-finite-fields-are-galois-with-cyclic-frobenius-group
  - thm-multiplicative-group-of-a-finite-field-is-cyclic
  - thm-dedekind-linear-independence-of-characters
  - thm-graded-krull-schmidt-for-finite-dimensional-graded-modules
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Olivier Schiffmann, Lectures on Hall Algebras"
      url: "https://arxiv.org/pdf/math/0611617v2"
      locator: "§§3.2–3.3 and Appendix A.2–A.4; the local proof supplies the finite-field and multiplicity details"
    - title: "Claus Michael Ringel, The Hall Algebra Approach to Quantum Groups, E.L.A.M. Lectures"
      url: "https://www.math.uni-bielefeld.de/~ringel/opus/elam.pdf"
      locator: "§2, Dynkin quivers; §§4–7, directed Hall products and simple-word generation"
---

## Statement

Let $Q$ be a finite quiver, $k=\mathbb F_q$, and $\overline k$ an algebraic
closure. A finite-dimensional representation $M$ over $\overline k$ is
called Schur here when $\operatorname{End}_{\overline k Q}M=\overline k$.
Let $\mathscr S$ be a Frobenius-stable set of Schur geometric isomorphism
classes of a fixed dimension vector $\delta$, consisting of representations
defined over some finite extensions. Every class fixed by the $m$th
Frobenius power has a model over $k_m=\mathbb F_{q^m}$, unique up to
$k_m$-isomorphism. If constants $c,C>0$ satisfy
$$c q^m\le|\operatorname{Fix}(\operatorname{Fr}^m;\mathscr S)|\le Cq^m$$
for all sufficiently large $m$, then for all sufficiently large $m$ there
are at least $c' q^m/m$ pairwise nonisomorphic indecomposable
$kQ$-representations of dimension $m\delta$, for a constant $c'>0$.
This conclusion also holds within the nilpotent representation category
when the classes in $\mathscr S$ are nilpotent.

## Facts & Assumptions

**Given:** The finite fields, Frobenius action, Schur classes and counting
bounds in the statement. Assume the inherited Axiom of Choice to choose
an algebraic closure and the standard finite-dimensional bases.

[F1] Finite field extensions are cyclic Galois and their multiplicative
groups are cyclic
([[thm-extensions-of-finite-fields-are-galois-with-cyclic-frobenius-group]],
[[thm-multiplicative-group-of-a-finite-field-is-cyclic]]).

[F2] Distinct field automorphisms are linearly independent as functions
([[thm-dedekind-linear-independence-of-characters]]).

[F3] Finite-dimensional quiver modules have unique finite indecomposable
decompositions by [[thm-graded-krull-schmidt-for-finite-dimensional-graded-modules]],
with path algebra and vector spaces concentrated in degree zero.

## Proof

1.1 Let $L/K$ be a finite cyclic extension with generator $\sigma$ of order $r$, and let $T$ be a $\sigma$-semilinear automorphism of a finite $L$-space with $T^r=1$. Fixed vectors span it over $L$. Otherwise quotient by their $L$-span and choose $\bar v\ne0$ there. Every average $\sum_{j=0}^{r-1}T^j(a v)$ is fixed, so in the quotient $\sum_j\sigma^j(a)T^j\bar v=0$ for all $a\in L$. A coordinate functional nonzero on $\bar v$ contradicts [F2]. Choose an $L$-basis among the fixed vectors. A linear combination is fixed exactly when all its coefficients are fixed by $\sigma$, so these same vectors are a $K$-basis of the fixed space. This proves semilinear vector-space descent, and invariant arrow maps descend in these bases. [F1, F2, given, algebra]

2.1 Suppose a geometric Schur class is fixed by $\operatorname{Fr}^m$. Choose a model and an intertwiner to its transform, all over a finite extension $L$ of $K=k_m$; enlarge $L$ if necessary so it is cyclic over $K$. The intertwiner defines a semilinear operator $T$ on the sum of the vertex spaces, preserving the vertex decomposition and commuting with all arrows. Its $r$th power is an endomorphism of the Schur representation, so is a common scalar $\lambda$. Commuting $T$ with $T^r$ gives $\sigma(\lambda)=\lambda$, hence $\lambda\in K^\times$. The norm $L^\times\to K^\times$ is onto: by [F1] it sends a cyclic generator to an element of order $|K^\times|$. Choose $a$ with norm $\lambda^{-1}$; then $(aT)^r=1$. Step 1.1 supplies fixed bases and a model over $K$. If two models over $K$ are geometrically isomorphic, their intertwiner space is the kernel of a matrix of linear equations over $K$, whose dimension stays $1$ after scalar extension. A nonzero rational intertwiner is therefore a scalar multiple over $\overline k$ of an isomorphism and is invertible. This proves uniqueness of the rational model. [F1, F2, step 1.1, algebra]

3.1 A class fixed by $\operatorname{Fr}^m$ with orbit length less than $m$ is fixed by $\operatorname{Fr}^d$ for some proper divisor $d$ of $m$. For each $d$, step 2.1 places these fixed classes in bijection with a subset of the isomorphism classes of dimension-$\delta$ representations over $k_d$. There are finitely many such representations up to isomorphism: after fixing the finite bases, there are finitely many arrow-matrix tuples over the finite field $k_d$. Thus each fixed set for a small $d$ is finite, and we may increase $C$ to cover the finitely many small extension degrees. The number of classes with orbit length less than $m$ is at most $\sum_{d\mid m,d<m}Cq^d\le Cm q^{m/2}$. Thus at least $cq^m-Cm q^{m/2}\ge(c/2)q^m$ classes have exact orbit length $m$ for large $m$, yielding at least $(c/2)q^m/m$ distinct Frobenius orbits. [F1, given, step 2.1, algebra]

4.1 For a Schur representative over $k_m$ with exact orbit length $m$, restrict every vertex space and arrow to $k$. Such a representative exists by step 2.1. After scalar extension to $\overline k$, the resulting representation is the direct sum of its $m$ Frobenius conjugates: the algebra $k_m\otimes_k\overline k$ is the product of $m$ copies of $\overline k$ under its distinct embeddings, since the finite extension is separable. Each conjugate is indecomposable, because its endomorphism ring is a field, and they are pairwise nonisomorphic by exact orbit length. If the restricted representation split over $k$, its two nonzero summands would, by [F3], partition this multiset into two nonempty Frobenius-stable subsets. Frobenius acts transitively, so no such partition exists. Hence restriction is indecomposable. Two restrictions from distinct orbits cannot be isomorphic, again by their scalar-extended decompositions and [F3]. Nilpotence of all sufficiently long paths is preserved by restriction. Combining with step 3.1 gives the stated bound. [F1, F3, step 2.1, step 3.1, algebra] ∎

