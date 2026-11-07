---
id: lem-tate-lattice-isomorphisms-give-prime-to-set-isogeny
kind: lemma
title: Tate lattice isomorphisms give an isogeny prime to a finite set
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
- def-axiom-of-choice
- def-dependent-choice
- thm-abelian-homomorphism-groups-finite-free-and-tate-faithful
- lem-multiplication-by-n-on-abelian-scheme
- lem-arith-dual-isogeny-kernel-and-abelian-biduality
- lem-arith-finite-cartier-duality-and-exactness
- thm-nonaffine-group-scheme-normal-subgroup-quotient
- lem-nonaffine-reduced-neutral-subgroup-over-perfect-field
- def-abelian-variety-over-a-field
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: G. Faltings and G. Wüstholz et al., Rational Points, Chapter V, Lemma 3.2
      url: https://yhzhumath.github.io/Mordell2024/RP.pdf
      locator: "Printed pp. 169–170, PDF pp. 177–178, read: matching integral Tate lattices at finitely many primes gives an isogeny of degree prime to those primes. The conditional proof below derives the integral Hom interface from rational surjectivity and the published saturation theorem."
verification: {}
---

## Statement

Assume AC and DC. Let $A,B$ be $k$-isogenous abelian varieties over a number field $k$, and let $P$ be a finite set of rational primes. For every $\ell\in P$, suppose the natural rational Tate map
$$\operatorname{Hom}_k(A,B)\otimes_{\mathbb Z}\mathbb Q_\ell\longrightarrow\operatorname{Hom}_{G_k}(V_\ell A,V_\ell B)$$
is surjective and that $T_\ell A$ and $T_\ell B$ are isomorphic as $G_k$-modules. Then there is a $k$-isogeny $A\to B$ whose degree is prime to every prime in $P$.

The rational Tate-map surjectivity and the lattice isomorphisms are hypotheses. This lemma does not prove Faltings's Tate-Hom theorem, finiteness of the possible lattices, or a uniform bound on the total degree.

## Facts & Assumptions

**Given:** AC, DC, the isogenous abelian varieties over the number field, the finite prime set, and the two hypotheses at every prime in the Statement.

[F1] The group $\operatorname{Hom}_k(A,B)$ is finite free over $\mathbb Z$, and its image after tensoring with $\mathbb Z_\ell$ is saturated in the full module of $\mathbb Z_\ell$-linear Tate-module maps ([[thm-abelian-homomorphism-groups-finite-free-and-tate-faithful]]).

[F2] Multiplication by an integer prime to the characteristic has finite étale kernel of rank $n^{2g}$ on a $g$-dimensional abelian variety ([[lem-multiplication-by-n-on-abelian-scheme]]).

[F3] An isogeny is finite flat and its degree is the rank of its kernel ([[lem-arith-dual-isogeny-kernel-and-abelian-biduality]]).

[F4] The reduced identity component of a finite-type group over a perfect field is a smooth connected subgroup, and a smooth connected proper group is an abelian variety ([[lem-nonaffine-reduced-neutral-subgroup-over-perfect-field]], [[def-abelian-variety-over-a-field]]).

[F5] A finite commutative group scheme of rank $d$ is killed by $d$; its quotient in an abelian variety has the fppf universal property ([[lem-arith-finite-cartier-duality-and-exactness]], [[thm-nonaffine-group-scheme-normal-subgroup-quotient]]).

## Proof

**Proof technique:** recover integral Tate maps by saturation, approximate finitely many local isomorphisms simultaneously, and inspect the kernel.

1.1 If $P=\varnothing$, choose any isogeny $A\to B$, which exists because isogeny is symmetric: for an isogeny in the reverse direction, its finite kernel is killed by its rank by [F5], so multiplication by that rank descends through the quotient [F5] to a homomorphism in the required direction. Its composites with the original isogeny are multiplication by that rank; it is therefore surjective and has finite kernel. Its degree is vacuously prime to every prime in $P$. Hence suppose $P\ne\varnothing$. Isogenous abelian varieties have the same dimension $g$. Put $M=\operatorname{Hom}_k(A,B)$; it is finite free by [F1]. [F1, F5, given, choose, construct, algebra]

2.1 Fix $\ell\in P$. Let $u:T_\ell A\to T_\ell B$ be a $G_k$-equivariant integral homomorphism. By the rational surjectivity hypothesis, $u\otimes1$ comes from some $x\in M\otimes\mathbb Q_\ell$. Multiplying $x$ by a sufficiently high power of $\ell$ places it in $M\otimes\mathbb Z_\ell$. The corresponding integral Tate map is $\ell^r u$. By [F1], the image of $M\otimes\mathbb Z_\ell$ is saturated in the full module of integral Tate maps; therefore $u$ itself lies in that image. This proves the integral Tate-Hom equality at the specified prime, without assuming it separately. [F1, given, step 1.1, construct, algebra]

3.1 For every $\ell\in P$, choose a $G_k$-equivariant isomorphism $u_\ell:T_\ell A\to T_\ell B$. By step 2.1 it is an $\ell$-adic linear combination of a fixed integral basis of $M$. For each basis coefficient, use the Chinese remainder theorem to choose an integer with the prescribed residues modulo every $\ell\in P$. The corresponding algebraic homomorphism $f:A\to B$ induces $u_\ell$ modulo $\ell$ for every $\ell\in P$, and hence an isomorphism $A[\ell]\to B[\ell]$ on geometric points by [F2]. [F2, given, step 1.1, step 2.1, choose, construct, algebra]

4.1 The kernel of $f$ contains no nonzero geometric $\ell$-torsion for any $\ell\in P$. If its identity component had positive dimension, its reduced identity component would be a positive-dimensional smooth connected proper subgroup of $A$ by [F4], hence an abelian variety, and [F2] would give it nonzero $\ell$-torsion, a contradiction. Thus $\ker f$ is finite. Its image has dimension $g$ and is a closed subgroup of the proper $g$-dimensional variety $B$, so it is all of $B$; $f$ is an isogeny. By [F3] its degree is the order of its finite geometric kernel in characteristic zero. If a prime $\ell\in P$ divided that order, the finite abelian group would contain nonzero $\ell$-torsion, contrary to step 3.1. Therefore $\deg f$ is prime to every prime in $P$. [F2, F3, F4, given, step 3.1, construct, algebra] ∎
