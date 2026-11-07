---
id: lem-twisted-local-models-yield-global-vector-bundle-over-infinite-field
kind: lemma
title: "Twisted local models yield a global vector bundle over an infinite field"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 11
deps:
  - def-axiom-of-choice
  - lem-infinite-field-ample-cone-avoidance-with-prescribed-fibres
  - lem-twisted-kernel-removes-prescribed-singular-points
  - lem-nonsurjective-matrix-locus-has-expected-codimension
  - lem-cech-twisted-vector-bundle-produces-azumaya-algebra
justified_by: []
proof_strategy: direct
axiom_use: "AC is assumed for the declared cone, kernel, dimension and descent suppliers."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "A. J. de Jong, A result of Gabber"
      url: "https://www.math.columbia.edu/~dejong/papers/2-gabber.pdf"
      locator: "§3.6–3.22, codimension induction; the supplied-local-model infinite-field construction is reconstructed here."
verification: {}
---

## Statement

Assume AC. Let $k$ be an infinite field, let $X$ be an integral quasi-projective finite-type $k$-scheme, and let $c$ be a multiplicative Čech $2$-cocycle on an étale cover with a specified $1$-cochain trivializing $c^n$ for some $n\ge1$. Suppose that for every finite set $T$ of closed points of $X$ there is a coherent $c$-twisted module of positive generic rank, locally free on a dense open and near every point of $T$. Then there is a positive-rank finite locally free $c$-twisted module on $X$, and the cohomology class of $c$ is represented by an Azumaya algebra. The local-model hypothesis and the Čech data are explicit premises, not conclusions of this lemma.

## Facts & Assumptions

**Given:** The infinite field, integral quasi-projective scheme, Čech twisting data and local-model hypothesis in the Statement.

[A1] The Axiom of Choice is assumed. [[def-axiom-of-choice]]

[F1] High ample twists admit a section avoiding a supplied high-codimension cone while taking prescribed values at finitely many points outside the good open. [[lem-infinite-field-ample-cone-avoidance-with-prescribed-fibres]]

[F2] A supplied map with the stated local block and good-open conditions has a coherent twisted kernel locally free at those points and on that open. [[lem-twisted-kernel-removes-prescribed-singular-points]]

[F3] The codimension of the rank-deficient $t\times m$ matrix locus is $m-t+1$ over an algebraically closed field. [[lem-nonsurjective-matrix-locus-has-expected-codimension]]

[F4] A positive-rank Čech-twisted vector bundle yields an Azumaya algebra with the same cohomology class. [[lem-cech-twisted-vector-bundle-produces-azumaya-algebra]]

## Proof

**Proof technique:** improve the codimension of the nonfree locus using finitely many twisted modules and one global avoiding map.

1.1 Put $d=\dim X$. For $c_0\ge1$, let $H(c_0)$ assert that for every finite closed-point set $T$ there is a coherent $c$-twisted module of constant positive rank on the complement of its nonfree locus $Z$, with $\operatorname{codim}Z\ge c_0$ and $T\cap Z=\varnothing$. The given local-model hypothesis is $H(1)$: on the integral Noetherian scheme, a coherent module of positive generic rank is locally free on a dense open, and its nonfree locus is closed by finite presentation and Fitting minors. If $H(d+1)$ holds, its closed nonfree locus is empty. [A1, given, construct, algebra]

2.1 Assume $H(c_0)$ and fix $T$. Choose $F_1,\dots,F_{n+1}$ successively. After choosing $F_i$, select one closed point on each codimension-$c_0$ component of its nonfree locus outside all previously chosen nonfree loci; add those points and $T$ to the prescribed set for $F_{i+1}$. Such a point exists: a codimension-$c_0$ component contained in a previous nonfree locus would equal a previous component of the same codimension, but $F_i$ is free at that component's previously selected point. A nonempty open in a finite-type $k$-scheme contains a closed point. Thus, at each selected point for $F_i$, every other $F_j$ is locally free. The finite construction uses [A1]. [A1, step 1.1, choose, construct, algebra]

3.1 Replace the $F_i$ by finite direct sums so their positive generic ranks all equal a common $r$, and increase $r$ until $nr^{n+1}+1>d$; their nonfree loci do not change. Form $G_1=\bigoplus_iF_i^{\oplus r^n}$ and $G_2=\bigotimes_iF_i$, identifying the twist $c^{n+1}$ with $c$ using the given cochain. Let $U$ be the complement of the union of the nonfree loci, and let $\mathcal H=\mathcal H om(G_1,G_2)$, an ordinary coherent sheaf because the common scalar twisting cancels. On $U$ the nonsurjective maps form a closed cone whose geometric fibre is the deficient $r^{n+1}\times(n+1)r^{n+1}$ matrix locus; its codimension is $nr^{n+1}+1$ by [F3]. [F3, step 2.1, choose, construct, algebra]

4.1 At a selected point for $F_i$, the tensor product of the other $n$ locally free twisted factors is an ordinary rank-$r^n$ vector bundle, using the specified trivialization of $c^n$. Choose its local basis and an ample-line fibre basis. The identity on $F_i^{\oplus r^n}$ and zero on the other summands define a prescribed value in the fibre of $\mathcal H$ there. These points lie outside $U$. By [F1] a sufficiently high ample twist has a global section $\psi:G_1\to G_2\otimes L$ which takes those finitely many values and is surjective on $U$. The exact local kernel calculation [F2] then gives a coherent $c$-twisted kernel, locally free of positive rank on $U$ and at every selected point. Since $T\subset U$, it is also locally free at $T$. [A1, F1, F2, step 2.1, step 3.1, choose, construct, algebra]

5.1 The nonfree locus of the kernel is a closed subset of the union of the nonfree loci of the $F_i$, and it omits a selected point of every codimension-$c_0$ component of that union. A codimension-$c_0$ irreducible component of the kernel's nonfree locus would have to equal one of those components, a contradiction. Hence its codimension is at least $c_0+1$, proving $H(c_0+1)$. Finite induction reaches $H(d+1)$; step 1.1 gives a positive-rank twisted vector bundle on all of $X$, and [F4] gives the Azumaya algebra with class $[c]$. The empty selected sets and $n=1$ are included. [F4, step 1.1, step 4.1, algebra] ∎
