---
id: ex-qftx-gaga-analytic-projective-point
kind: example
title: Finite-support coherent sheaves have finite-dimensional global sections
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 7
deps:
  - def-axiom-of-choice
  - def-sheaf-on-topological-space
  - def-skyscraper-sheaf-abelian-group
  - def-sheaf-cohomology-derived-global-sections
  - def-stalk-of-presheaf
  - def-complex-manifolds-and-holomorphic-vector-bundles
  - thm-flasque-sheaves-acyclic
  - thm-qftx-gaga-analytic-compact-projective-coherent-finiteness
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-sheaf-on-topological-space: mathematical-premise
  def-skyscraper-sheaf-abelian-group: mathematical-premise
  def-sheaf-cohomology-derived-global-sections: mathematical-premise
  def-stalk-of-presheaf: mathematical-premise
  def-complex-manifolds-and-holomorphic-vector-bundles: mathematical-premise
  thm-flasque-sheaves-acyclic: mathematical-premise
  thm-qftx-gaga-analytic-compact-projective-coherent-finiteness: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: The Stacks Project, Cohomology of Sheaves
      url: https://stacks.math.columbia.edu/tag/0099
      locator: "Section 6.27, Definition 6.27.1: skyscraper sheaves and their sections."
    - title: The Stacks Project, Cohomology of Sheaves
      url: https://stacks.math.columbia.edu/tag/09SV
      locator: "Section 20.12, Definition 20.12.1 and Lemma 20.12.3: flasque sheaves and their acyclicity."
verification:
  precheck: pending
page: qftx-gaga-compact-coherent-finiteness-examples
category: quantum-field-theory-mathematics
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
---

## Example

Assume full AC. Let $0\le r\le3$ and let $\mathcal F$ be a coherent analytic module on $P^r(\mathbb C)$ whose support $S:=\{x\in P^r(\mathbb C):\mathcal F_x\ne0\}$ is finite. Assume each stalk $\mathcal F_x$ is finite-dimensional over $\mathbb C$, and put $\ell:=\sum_{x\in S}\dim_{\mathbb C}\mathcal F_x$. Then $H^0(P^r(\mathbb C),\mathcal F)\cong\bigoplus_{x\in S}\mathcal F_x$ has complex dimension $\ell$, and $H^q(P^r(\mathbb C),\mathcal F)=0$ for every $q>0$. Here $H^q$ is ordinary right-derived sheaf cohomology and $\ell$ is the total complex length of the finite-support sheaf.

## Example references

[The Stacks Project, Section 6.27](https://stacks.math.columbia.edu/tag/0099)

[The Stacks Project, Section 20.12](https://stacks.math.columbia.edu/tag/09SV)

## Facts & Assumptions

**Given:** Full AC; $0\le r\le3$; a coherent analytic module $\mathcal F$ on $P^r(\mathbb C)$; a finite support set $S$; and finite-dimensional complex stalks $\mathcal F_x$ for $x\in S$.

[F1] On compact projective space, every cohomology group of a coherent analytic module is finite-dimensional and Hausdorff in the coherent-section Čech topology ([[thm-qftx-gaga-analytic-compact-projective-coherent-finiteness]]). This example determines the exact dimensions for finite support.

[F2] For a point inclusion $i_x:\{x\}\hookrightarrow X$ and an abelian group $A$, the skyscraper sheaf $i_{x,*}A$ has sections $A$ on opens containing $x$ and $0$ on opens not containing $x$ ([[def-skyscraper-sheaf-abelian-group]]).

[F3] A flasque sheaf has surjective restriction maps to every smaller open set, and every flasque abelian sheaf is acyclic for derived global sections ([[thm-flasque-sheaves-acyclic]]).

[F4] The stalk $\mathcal F_x$ consists of germs of sections near $x$, and a sheaf with zero stalk at every point is the zero sheaf ([[def-stalk-of-presheaf]]).

[F5] For $r\ge1$, $P^r(\mathbb C)$ has the stated complex-manifold structure and is Hausdorff by definition ([[def-complex-manifolds-and-holomorphic-vector-bundles]]). For $r=0$, its definition as the space of lines in $\mathbb C$ gives a singleton, which is Hausdorff. In either case, a finite set of distinct points has pairwise disjoint neighborhoods.

[F6] A sheaf satisfies unique gluing: sections on an open cover that agree on overlaps glue uniquely ([[def-sheaf-on-topological-space]]).

[F7] Degree-zero right-derived sheaf cohomology is canonically the global-sections group ([[def-sheaf-cohomology-derived-global-sections]]).

[A1] Full AC is the set-choice postulate and is the hypothesis of flasque acyclicity ([[def-axiom-of-choice]], [[thm-flasque-sheaves-acyclic]]).

## Proof

1.1 By [F1], the cohomology groups in the Statement are finite-dimensional under the stated compactness and coherence assumptions. If $S=\varnothing$, [F4] makes $\mathcal F=0$, so all claims hold with $\ell=0$. Suppose $S\ne\varnothing$. When $r=0$, $S$ consists of the unique point of $P^0$; take its neighborhood to be all of $P^0$. When $r\ge1$, [F5] and finite Hausdorff separation give pairwise disjoint open neighborhoods $V_x$ of the points of $S$. In either case, on each punctured neighborhood $V_x\setminus\{x\}$ every stalk of $\mathcal F$ vanishes by the definition of $S$, so the restriction there is the zero sheaf by [F4]. [F1, F4, F5, given, construct]

2.1 For each $x\in S$, the germ map from $\mathcal F|_{V_x}$ to the skyscraper sheaf $i_{x,*}\mathcal F_x$ is an isomorphism. It is injective on sections because a section with zero germ at $x$ and zero stalk at every other point has zero germ everywhere, hence is zero by the uniqueness clause [F6]. It is surjective on sections over an open $W\subseteq V_x$ containing $x$: represent a desired germ by a section on a smaller neighborhood of $x$, restrict to the punctured overlap where $\mathcal F$ is zero, and glue that section to zero on $W\setminus\{x\}$ using [F6]. For $W$ not containing $x$, both section groups are zero. [F2, F4, F6, step 1.1, given]

3.1 The open complement $P^r\setminus S$ has zero restriction of $\mathcal F$, and the neighborhoods $V_x$ are pairwise disjoint. The local isomorphisms of step 2.1 therefore glue to a sheaf isomorphism $\mathcal F\cong\bigoplus_{x\in S}i_{x,*}\mathcal F_x$, where the sum is finite. Each skyscraper is flasque by [F2], since every restriction is either the identity or the map onto $0$; hence their finite direct sum is flasque. By [F3] and the ambient AC [A1], $H^q(P^r,\mathcal F)=0$ for $q>0$. [A1, F2, F3, F6, step 2.1, algebra]

4.1 Taking global sections of the finite direct-sum decomposition in step 3.1 and using [F7] gives $H^0(P^r,\mathcal F)=\Gamma(P^r,\mathcal F)\cong\bigoplus_{x\in S}\mathcal F_x$. Its dimension is the finite sum $\ell$ from the Statement. [F2, F7, step 3.1, given] ∎
