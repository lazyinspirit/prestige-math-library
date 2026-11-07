---
id: lem-continuous-l-adic-representation-admits-stable-lattice
title: "A continuous representation of a profinite group preserves a lattice"
kind: lemma
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-group
  - def-vector-space
  - def-profinite-group-by-inverse-limit
  - thm-inverse-limit-of-finite-discrete-groups-is-hausdorff-compact-and-totally-disconnected
  - def-field-of-p-adic-numbers
  - def-p-adic-integers-as-compatible-residue-classes
  - cor-zp-is-the-valuation-ring-of-qp
  - cor-maximal-ideal-and-residue-field-of-zp
  - lem-p-adic-balls-are-clopen
  - def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Jean-Pierre Serre, Abelian ℓ-adic Representations and Elliptic Curves, Chapter I, §1.1"
      url: "https://www.math.mcgill.ca/darmon/courses/18-19/gs/serre-mcgill.pdf"
---

## Statement

Assume the Axiom of Choice. Let $G$ be a profinite group, let $\ell$ be a
prime, and let $V$ be a finite-dimensional $\mathbb Q_\ell$-vector space with
its $\ell$-adic topology. Let $\rho:G\to\operatorname{GL}_{\mathbb Q_\ell}(V)$
be a continuous group homomorphism, where the automorphism group has the
topology induced from $\operatorname{End}_{\mathbb Q_\ell}(V)$. A **full
$\mathbb Z_\ell$-lattice** in $V$ means a finitely generated compact open
$\mathbb Z_\ell$-submodule whose $\mathbb Q_\ell$-span is $V$. Then there is a full lattice
$\Lambda\subseteq V$ such that $\rho(g)\Lambda=\Lambda$ for every $g\in G$.

## Statement references

[Jean-Pierre Serre, *Abelian ℓ-adic Representations and Elliptic Curves*, Chapter I, §1.1](https://www.math.mcgill.ca/darmon/courses/18-19/gs/serre-mcgill.pdf)

## Facts & Assumptions

**Given:** AC, a profinite group $G$, a prime $\ell$, a finite-dimensional
$\mathbb Q_\ell$-vector space $V$, and a continuous homomorphism
$\rho:G\to\operatorname{GL}_{\mathbb Q_\ell}(V)$.

[A1] [[def-axiom-of-choice]]: AC is the assertion that every family of
nonempty sets has a choice function.

[F1] [[def-profinite-group-by-inverse-limit]]: A profinite group is a
topological group isomorphic to an inverse limit of finite discrete groups.

[F2] [[thm-inverse-limit-of-finite-discrete-groups-is-hausdorff-compact-and-totally-disconnected]]:
under AC, an inverse limit of finite discrete groups is compact.

[F3] [[def-field-of-p-adic-numbers]] and
[[def-p-adic-integers-as-compatible-residue-classes]]: $\mathbb Q_\ell$ has
its $\ell$-adic topology and $\mathbb Z_\ell$ is its compatible-residue
integer ring; [[cor-zp-is-the-valuation-ring-of-qp]] identifies it with the
closed unit ball.

[F4] [[cor-maximal-ideal-and-residue-field-of-zp]]: the nonunits of
$\mathbb Z_\ell$ are exactly $\ell\mathbb Z_\ell$.

[F5] [[lem-p-adic-balls-are-clopen]]: every closed $\ell$-adic ball is open.

[F6] Under AC, the inverse limit defining $\mathbb Z_\ell$ is compact by
[[thm-inverse-limit-of-finite-discrete-groups-is-hausdorff-compact-and-totally-disconnected]].

## Proof


1.1 Choose a $\mathbb Q_\ell$-basis and its basis lattice $\Lambda_0$. In this basis the stabilizer $H=\operatorname{GL}_n(\mathbb Z_\ell)$ is open: the entry conditions are open by [F3], [F5], and the determinant-unit condition is open by [F4], [F5]. The preimage $H_G=\rho^{-1}(H)$ is an open subgroup of $G$. AC compactness of $G$ by [F1], [F2] makes its coset cover $G/H_G$ finite, so the orbit of $\Lambda_0$ is finite. [A1, F1, F2, F3, F4, F5, F6, given, choose]

2.1 Sum the finite orbit. The sum is finitely generated; it is compact as the continuous sum image of the finite product of compact orbit lattices; it is open because it contains the open submodule $\Lambda_0$; it spans $V$, and $G$ permutes the orbit, so stabilizes the sum. [step 1.1, given, construct] ∎
