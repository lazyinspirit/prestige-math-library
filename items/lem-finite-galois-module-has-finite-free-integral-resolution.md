---
dependency_level: 1
id: lem-finite-galois-module-has-finite-free-integral-resolution
kind: lemma
title: Finite Galois modules admit finite integral free resolutions
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-profinite-group-by-inverse-limit
- def-continuous-cohomology-of-a-profinite-group-with-discrete-module
- def-axiom-of-choice
- def-dependent-choice
- thm-universal-property-of-free-modules
justified_by: []
proof_strategy: direct
axiom_use: Literal AC and DC. No enough-projectives premise for discrete continuous
  modules is used.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: J. S. Milne, Arithmetic Duality Theorems, second edition; local reconstruction
    url: https://www.jmilne.org/math/Books/ADTnot.pdf
    locator: 'Chapter I, Lemma 1.9 proof: finite torsion-free coefficient resolution;
      explicit subgroup-basis proof supplied here.'
verification: {}
---

## Statement

Assume AC and DC. Let $G$ be a profinite group and $M$ a finite abelian group with continuous left $G$-action and the discrete topology. There is a finite quotient $Q$ of $G$ and an exact sequence of continuous $G$-modules
$$0\longrightarrow L_1\longrightarrow L_0\longrightarrow M\longrightarrow0$$
where both $L_i$ are finite free as abelian groups and all three actions factor through $Q$. One may take $L_0=\mathbb Z^{(M)}$ with its permutation action and augmentation $[m]\mapsto m$. This is an integral free resolution of length one; it does not assert that the $L_i$ are projective $\mathbb Z[Q]$-modules, nor that tensoring a finite torsion coefficient with an arbitrary module has zero Tor.

## Statement references

[J. S. Milne, *Arithmetic Duality Theorems*, Chapter I, proof of Lemma 1.9](https://www.jmilne.org/math/Books/ADTnot.pdf)

## Facts & Assumptions

**Given:** The profinite group, finite continuous module, and literal AC/DC of the Statement.

[F1] Every element of a continuous discrete module has an open stabilizer. [[def-continuous-cohomology-of-a-profinite-group-with-discrete-module]] [[def-profinite-group-by-inverse-limit]]

[F2] The free module on a set has its canonical basis and extends maps on that basis uniquely to linear maps. [[thm-universal-property-of-free-modules]]

[A1] AC and DC are retained literally; the finite subgroup-basis construction below requires no further choices. [[def-axiom-of-choice]] [[def-dependent-choice]]

## Proof

**Given:** The data in the Statement.

1.1 The kernel of the action homomorphism $G\to\operatorname{Aut}(M)$ is the intersection of the stabilizers of the finitely many elements of $M$, hence is open by [F1] and normal as a kernel. Its quotient $Q$ is finite, since it embeds in the permutation group of the finite set $M$. Let $L_0=\mathbb Z^{(M)}$ by [F2], with $Q$ permuting the basis. The map $\epsilon([m])=m$ extends to an equivariant surjection $\epsilon:L_0\to M$. Put $L_1=\ker\epsilon$; it is $Q$-stable. The resulting kernel sequence is exact. [A1, F1, F2, given, construct]

2.1 Every subgroup $H\le\mathbb Z^s$ is finite free, as follows by induction on $s$. For $s=0$ it is zero. For $s>0$, the first-coordinate image is $d\mathbb Z$ for a unique $d\ge0$: a nonzero subgroup of $\mathbb Z$ has a least positive element by well-ordering, and division with remainder proves it generates. If $d=0$, apply induction inside $0\oplus\mathbb Z^{s-1}$. If $d>0$, choose one $h_0\in H$ with first coordinate $d$. Subtracting the corresponding integer multiple of $h_0$ from each $h\in H$ gives $$H=\mathbb Z h_0\oplus\bigl(H\cap(0\oplus\mathbb Z^{s-1})\bigr).$$ The sum is direct by its first coordinate. Induction supplies a finite basis of the second summand, so adjoining $h_0$ supplies one for $H$. Only finitely many witnesses are chosen in a construction for this fixed finite $s$. [A1, step 1.1, construct, algebra]

3.1 Apply step 2.1 to the subgroup $L_1$ of the finite free group $L_0$. This proves both $L_i$ finite free over $\mathbb Z$. Their $Q$-actions and hence $G$-actions are continuous because the open kernel of $G\to Q$ fixes every element. For $M=0$ one may use $L_0=L_1=0$; the prescribed alternative $L_0=\mathbb Z^{(\{0\})}$ also has kernel $\mathbb Z$ and gives an exact sequence. For trivial action or $G=1$, $Q$ may be trivial and the same construction applies. The argument concerns freeness over $\mathbb Z$ only, so it introduces neither group-ring projectivity nor a Tor-vanishing premise for $M$. [F1, F2, step 1.1, step 2.1, algebra] ∎
