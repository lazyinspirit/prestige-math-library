---
id: lem-aqft-invariant-quotient-exactness
kind: lemma
title: Exactness of invariant vectors for a finite-dimensional quotient
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 0
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
proof_strategy: direct
deps:
  - def-reductive-and-linearly-reductive-over-c
  - thm-complete-reducibility-and-reynolds-operator-for-complex-reductive-group
  - def-axiom-of-choice
dependency_roles:
  def-reductive-and-linearly-reductive-over-c: mathematical-premise
  thm-complete-reducibility-and-reynolds-operator-for-complex-reductive-group: mathematical-premise
  def-axiom-of-choice: mathematical-premise
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Michel Brion, Introduction to actions of algebraic groups, Theorems 1.23–1.24"
      url: "https://ccirm.centre-mersenne.org/item/10.5802/ccirm.1.pdf"
verification:
  precheck: pass
---
## Statement

Assume the Axiom of Choice. Let $G$ be a complex reductive affine algebraic group, let $V$ be a finite-dimensional complex vector space with an algebraic representation $\rho:G\to\operatorname{GL}(V)$, and let $N\leq V$ be a linear subspace satisfying $\rho(g)N=N$ for every $g\in G$. Define $V^G=\{v\in V:\rho(g)v=v\text{ for all }g\in G\}$, give $V/N$ the induced representation, and let $\pi:V\to V/N$ be the quotient map. Then the restriction $\pi^G:V^G\to(V/N)^G$ is surjective and has kernel $V^G\cap N$. Consequently the map

$$
V^G/(V^G\cap N)\longrightarrow(V/N)^G,\qquad v+(V^G\cap N)\longmapsto v+N
$$

is a canonical complex-linear isomorphism.

## Statement references

[Brion, Theorems 1.23–1.24, printed pp. 8–9](https://ccirm.centre-mersenne.org/item/10.5802/ccirm.1.pdf)

## Facts & Assumptions

**Given:** Full AC; a complex reductive affine algebraic group $G$; a finite-dimensional rational $G$-module $V$; and a $G$-stable subspace $N\leq V$.

[A1] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function.

[F1] [[def-reductive-and-linearly-reductive-over-c]]: $G$ is reductive when it has no nontrivial closed normal unipotent subgroup; here unipotent uses the fixed-vector condition on nonzero finite-dimensional rational modules.

[F2] [[thm-complete-reducibility-and-reynolds-operator-for-complex-reductive-group]]: assuming AC and complex reductive affine algebraic $G$, every rational $G$-module has a natural Reynolds projection onto its invariant subspace, and a surjective equivariant map of rational $G$-modules induces a surjective map of invariant subspaces.

## Proof

1.1 Since $N$ is $G$-stable, $g\cdot(v+N):=\rho(g)v+N$ is well-defined on $V/N$. In a basis extending a basis of $N$, the quotient action is the lower-right block of the algebraic matrix $\rho(g)$, so $V/N$ is a finite-dimensional rational $G$-module; the quotient map $\pi$ is surjective and equivariant. Its restriction maps $V^G$ into $(V/N)^G$, and its kernel is $\ker(\pi|_{V^G})=V^G\cap N$ by the definition of the quotient. [given, algebra]

1.2 Under A1 and the reductive hypothesis F1, apply F2 to the equivariant surjection $\pi$; it follows that $\pi^G:V^G\to(V/N)^G$ is surjective. [given, A1, F1, F2]

2.1 The displayed map is well-defined because changing $v$ by an element of $V^G\cap N$ leaves $v+N$ unchanged. It is injective by the kernel computation in step 1.1 and surjective by step 1.2, so it is the claimed canonical linear isomorphism. [given, step 1.1, step 1.2, algebra] ∎

## Remarks

The commutative diagram displays the exact invariant sequence established in the proof. The horizontal map $\pi^G$ is the quotient map restricted to invariants; the vertical arrows are the natural inclusions into the underlying modules. The top row is exact because steps 1.1 and 1.2 prove its kernel and surjectivity. The diagram summarizes those algebraic maps and is not a premise of the proof.

```tikzcd
0 \arrow[r] & V^G\cap N \arrow[r,hook,"\iota"] \arrow[d,hook] & V^G \arrow[r,"\pi^G"] \arrow[d,hook] & (V/N)^G \arrow[d,hook] \arrow[r] & 0 \\
0 \arrow[r] & N \arrow[r,hook,"\iota_N"] & V \arrow[r,"\pi"] & V/N \arrow[r] & 0
```
