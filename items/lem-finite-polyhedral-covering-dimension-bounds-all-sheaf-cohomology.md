---
id: lem-finite-polyhedral-covering-dimension-bounds-all-sheaf-cohomology
kind: lemma
title: "A polyhedral dimension bound for every sheaf"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 11
deps: [lem-refinement-limit-cech-cohomology-agrees-with-sheaf-cohomology,
       lem-c-soft-field-sheaves-are-compact-support-acyclic,
       lem-compact-support-calculus-of-extension-by-zero-and-closed-pushforward,
       def-compactly-supported-global-sections,
       def-extension-by-zero-abelian-sheaf,
       def-global-cech-cohomology-directed-limit,
       def-refinement-open-cover,
       def-cech-cohomology-open-cover,
       def-cech-cochain-complex-open-cover,
       def-sheaf-cohomology-derived-global-sections,
       thm-abelian-sheaves-have-enough-injectives,
       lem-sheaf-section-over-empty-set-terminal,
       def-axiom-of-choice,
       prop-a-finite-simplicial-complex-has-compact-hausdorff-realization,
       def-geometric-realization-of-an-abstract-simplicial-complex,
       def-locally-finite-and-finite-dimensional-simplicial-complex,
       def-barycentric-subdivision-of-an-abstract-simplicial-complex,
       def-canonical-barycentric-realization-map,
       thm-barycentric-subdivision-realizes-homeomorphically,
       lem-mesh-of-iterated-simplicial-barycentric-subdivision-tends-to-zero,
       def-open-and-closed-stars-in-a-subdivision,
       lem-finite-simplicial-weak-topology-agrees-with-euclidean-topology,
       thm-lebesgue-number-lemma,
       def-metric-bounded-diameter,
       def-subspace-topology-top, def-compact-space,
       def-locally-compact-space, def-hausdorff-space,
       thm-locally-compact-hausdorff-basics,
       thm-compact-subset-of-a-hausdorff-space-is-closed,
       lem-compactness-of-a-subspace-is-ambient,
       def-sheaf-on-topological-space,
       thm-choice-implies-dependent-implies-countable-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Cohomology of Sheaves (chapter 20); §16 Cohomology on Hausdorff quasi-compact spaces (Lemmas 16.1-16.2, tags 09V1-09V2)"
      url: "https://stacks.math.columbia.edu/download/cohomology.pdf"
      locator: '§16, pp. 26-28: the comparison between refinement-limit Čech cohomology and sheaf cohomology on a compact Hausdorff space, with the cofinal-family corollary used here'
    - title: "Jean-Louis Verdier, Dualite dans la cohomologie des espaces localement compacts, Seminaire N. Bourbaki 1964-1966, expose 300, pp. 337-349 (Novembre 1965)"
      url: "https://www.numdam.org/item/SB_1964-1966__9__337_0.pdf"
      locator: '§4, p. 347: any locally compact space locally isomorphic to an open subset of a finite polyhedron is cohomologically A-constructible, the pattern instantiated by clauses (1)-(2)'
    - title: "Pierre Schapira, An Introduction to Categories and Sheaves, lecture notes, 2023"
      url: "https://webusers.imj-prg.fr/~pierre.schapira/LectNotes/CatShv.pdf"
      locator: '§11.7 p. 221: Proposition 11.7.2 for a finite-dimensional manifold; the compact-support transport along the open inclusion used in clauses (2)-(3)'
---

## Statement

Assume the Axiom of Choice. Let $P=|K|$ be the realization of a finite abstract
simplicial complex $K$ of dimension $d$ (a finite compact polyhedron of
dimension $d$), and let $\mathcal F$ be a sheaf of abelian groups on $P$
([[def-geometric-realization-of-an-abstract-simplicial-complex]],
[[def-locally-finite-and-finite-dimensional-simplicial-complex]],
[[def-sheaf-on-topological-space]]); every clause applies to sheaves of
$k$-vector spaces. Then:

1. $H^q(P,\mathcal F)=0$ for every $q>d$
   ([[def-sheaf-cohomology-derived-global-sections]]);
2. for every open subspace $U\subseteq P$ and every sheaf $\mathcal E$ of
   abelian groups on $U$, one has $H^q_c(U,\mathcal E)=0$ for every $q>d$
   ([[def-compactly-supported-global-sections]]);
3. more generally, the same conclusions hold for every compact Hausdorff space
   in which every open cover admits a finite open refinement of order at most
   $d+1$ --- that is, a finite refinement such that every point lies in at most
   $d+1$ of its members --- and for every open subspace of such a space.

These bounds concern arbitrary sheaves, not merely cellular, constructible or
coherent ones. If $L\subseteq K$ is a subcomplex, then $|L|$ is closed in $P$,
the complement $P\setminus|L|$ is open, and every open subspace of
$P\setminus|L|$ is an open subspace of $P$; this is the fibre model on which
the bound is applied.

## Facts & Assumptions

**Given:** A finite abstract simplicial complex $K$ of dimension $d$, its realization $P=|K|$, a sheaf $\mathcal F$ of abelian groups on $P$, and the Axiom of Choice.

[F1] The realization of a finite complex is compact and Hausdorff; its weak topology is the Euclidean subspace topology, so $|K|$ is a compact metrizable space, and the dimension of $\operatorname{sd}^rK$ is at most $d$ for every $r$ ([[prop-a-finite-simplicial-complex-has-compact-hausdorff-realization]], [[lem-finite-simplicial-weak-topology-agrees-with-euclidean-topology]], [[def-barycentric-subdivision-of-an-abstract-simplicial-complex]], [[def-locally-finite-and-finite-dimensional-simplicial-complex]]).

[F2] Subdivision data: the canonical barycentric realization maps are homeomorphisms ([[thm-barycentric-subdivision-realizes-homeomorphically]]), and we transport stars and the original Euclidean metric through their iterates; the open star $\operatorname{st}_T(v)=\{x:x_v>0\}$ of a vertex $v$ of a complex $T$ is open and nonempty, the open stars of the vertices cover $|T|$, a point with support simplex $\sigma$ lies in exactly the stars of the vertices of $\sigma$, and every nonempty open star has diameter at most $2m(T)$ for the mesh $m(T)$; the mesh of iterated barycentric subdivisions of a finite complex satisfies $m(\operatorname{sd}^rK)\le\bigl(\tfrac{d}{d+1}\bigr)^r m(K)$ when $d\ge1$ and $m=0$ when $d=0$ or the complex is vertex-free, so $m(\operatorname{sd}^rK)\to0$ ([[def-open-and-closed-stars-in-a-subdivision]], [[def-canonical-barycentric-realization-map]], [[lem-mesh-of-iterated-simplicial-barycentric-subdivision-tends-to-zero]], [[def-metric-bounded-diameter]]).

[F3] Lebesgue number: every open cover of a compact metric space has a positive Lebesgue number $\delta$ such that every nonempty subset of diameter $<\delta$ lies in some member of the cover ([[thm-lebesgue-number-lemma]]).

[F4] Fixed-cover Čech theory: for an open cover $\mathcal U$ of a space $X$ indexed by a linearly ordered set, the ordered Čech cochain complex has $C^p(\mathcal U,\mathcal F)=\prod_{i_0<\dots<i_p}\mathcal F(U_{i_0}\cap\dots\cap U_{i_p})$ for $p\ge0$ and $C^p=0$ for $p<0$, a tuple factor over an empty intersection is the zero group, and an empty product is the zero group; $\check H^p(\mathcal U,\mathcal F)=0$ for $p<0$; refinements and refinement functions are as in the directed preorder of covers ([[def-cech-cochain-complex-open-cover]], [[def-cech-cohomology-open-cover]], [[lem-sheaf-section-over-empty-set-terminal]], [[def-refinement-open-cover]]).

[F5] The comparison theorem: on a compact Hausdorff space $X$ the refinement-limit Čech cohomology over all open covers is naturally isomorphic to sheaf cohomology in every degree, and if a family of open covers is cofinal --- every open cover has a refinement in the family --- and $\check H^p(\mathcal U,\mathcal F)=0$ for every cover $\mathcal U$ of the family and every $p>d$, then $H^p(X,\mathcal F)=0$ for every $p>d$ ([[lem-refinement-limit-cech-cohomology-agrees-with-sheaf-cohomology]], [[def-global-cech-cohomology-directed-limit]]).

[F6] Compact-support transport: for an open inclusion $j:U\hookrightarrow X$ into a compact Hausdorff space $X$ and every sheaf $\mathcal E$ on $U$ there are natural isomorphisms $R^q\Gamma_c(X,j_!\mathcal E)\cong R^q\Gamma_c(U,\mathcal E)$ for all $q\ge0$, and $H^q_c(X,j_!\mathcal E)=H^q(X,j_!\mathcal E)$ because $\Gamma_c=\Gamma$ on a compact space ([[lem-compact-support-calculus-of-extension-by-zero-and-closed-pushforward]], [[def-extension-by-zero-abelian-sheaf]], [[def-compactly-supported-global-sections]], [[thm-abelian-sheaves-have-enough-injectives]]).

[F7] Closed subcomplexes: for a finite subcomplex $L$ of a finite complex $K$ the inclusion $|L|\hookrightarrow|K|$ is a closed embedding, and open subsets of a subspace are traces of open subsets of the ambient space ([[lem-finite-simplicial-weak-topology-agrees-with-euclidean-topology]], [[def-subspace-topology-top]]).

[F8] The Axiom of Choice, from which dependent choice follows; dependent choice is used by the comparison and derived-functor theorems of facts F5 and F6 ([[def-axiom-of-choice]], [[thm-choice-implies-dependent-implies-countable-choice]]).

## Proof

**Proof technique:** direct.

1.1 **The polyhedron.** By [F1] the realization $P=|K|$ is a compact Hausdorff space whose weak topology is the Euclidean subspace topology of a finite-dimensional Euclidean space; in particular $P$ is a compact metric space, with the subspace metric and diameter as in [F2], and it is locally compact [F1]. Every simplex of $\operatorname{sd}^rK$ is a strict chain of nonempty faces of $\operatorname{sd}^{r-1}K$, hence has at most $\dim(\operatorname{sd}^{r-1}K)+1$ vertices, because a strictly increasing chain of faces of a complex of dimension $e$ adds at least one vertex at each step and every face has at most $e+1$ vertices; inductively $\dim\operatorname{sd}^rK\le\dim K=d$, so every simplex of $\operatorname{sd}^rK$ has at most $d+1$ vertices. [F1]

1.2 **The subcomplex clause.** Let $L\subseteq K$ be a subcomplex; $L$ is finite because $K$ is. By [F7] the inclusion $|L|\hookrightarrow P$ is a closed embedding, so $|L|$ is closed in $P$ and $P\setminus|L|$ is open; every open subspace of the subspace $P\setminus|L|$ is a trace of an open subspace of $P$, hence is itself open in $P$ [F7]. [F7]

1.3 **Čech cohomology vanishes above $d$ on a cover of order at most $d+1$.** Let $\mathcal V$ be a finite open cover of a space $X$ every point of which lies in at most $d+1$ members, and fix a linear order on its index set so that the ordered Čech complex of [F4] is defined. If $p>d$ then $p+1\ge d+2$ and any $p+1$ distinct members of $\mathcal V$ have empty intersection, because a common point would lie in $p+1\ge d+2$ members; each tuple intersection is therefore empty and each factor of $C^p(\mathcal V,\mathcal F)$ is the zero group, so $C^p(\mathcal V,\mathcal F)=0$ and hence $\check H^p(\mathcal V,\mathcal F)=0$ for every sheaf $\mathcal F$ on $X$. [F4]

2.1 **Star covers refine every cover with multiplicity at most $d+1$.** Assume first that $P$ is nonempty, let $\mathcal U$ be an open cover of $P$, and choose a Lebesgue number $\delta>0$ for $\mathcal U$ [F3]. By [F2] the mesh $m(\operatorname{sd}^rK)$ tends to $0$ as $r\to\infty$ (it is even $0$ when $d=0$), so choose $r$ with $2m(\operatorname{sd}^rK)<\delta$; then every nonempty open star of $T:=\operatorname{sd}^rK$ has diameter at most $2m(T)<\delta$ [F2], so by the Lebesgue property it lies in some member of $\mathcal U$. The open stars of the vertices of $T$ are open, nonempty and cover $|T|=P$ [F2], and there are finitely many of them because $T$ is finite; choosing for each vertex one member of $\mathcal U$ containing its star is a finite selection among nonempty sets, and defines a refinement function [F4], so the family of open stars is a finite open cover of $P$ refining $\mathcal U$ [F4]. Finally, if a point $x\in P$ lies in the stars of vertices $v_0,\dots,v_m$ of $T$, then all of $v_0,\dots,v_m$ belong to the support simplex of $x$, which by [F2] is a simplex of $T$ with at most $d+1$ vertices by [step 1.1]; hence $m+1\le d+1$, that is, every point lies in at most $d+1$ members of the cover. If $P$ is empty the empty cover refines $\mathcal U$ and has order $0$. [step 1.1, F2, F3, F4]

2.2 **Clause (3), the cohomological statement.** Let $X$ be a compact Hausdorff space in which every open cover admits a finite open refinement of order at most $d+1$. The family of all finite open covers of $X$ of order at most $d+1$ is cofinal among all open covers by hypothesis, and by [step 1.3] every member of the family has vanishing Čech cohomology above $d$ with values in every sheaf; the comparison theorem [F5] applies because $X$ is compact Hausdorff, so $H^q(X,\mathcal F)=0$ for every $q>d$ and every sheaf of abelian groups $\mathcal F$ on $X$. [step 1.3, F5]

3.1 **Clause (1).** The star covers produced in [step 2.1] form a family of open covers of $P$: for every open cover $\mathcal U$ the construction produces a finite cover by open stars of some $\operatorname{sd}^rK$ refining $\mathcal U$, so the family is cofinal in the directed preorder of covers, and by [step 1.3] each of its members has vanishing Čech cohomology above $d$ with values in every sheaf. Since $P$ is compact Hausdorff by [step 1.1], the cofinal-family corollary of the comparison theorem [F5] gives $H^q(P,\mathcal F)=0$ for every $q>d$ and every sheaf $\mathcal F$ of abelian groups on $P$. [step 1.1, step 2.1, step 1.3, F5]

3.2 **Clause (3), the compact-support statement.** Let $X$ be as in [step 2.2], let $U\subseteq X$ be open and let $\mathcal E$ be a sheaf on $U$. The compact space $X$ is locally compact because $X$ itself is a compact neighbourhood of every point ([[def-locally-compact-space]]), so the transport isomorphisms of [F6] apply with base space $X$: $R^q\Gamma_c(X,j_!\mathcal E)\cong R^q\Gamma_c(U,\mathcal E)$ with $j:U\hookrightarrow X$ the inclusion, and $H^q_c(X,j_!\mathcal E)=H^q(X,j_!\mathcal E)$; by [step 2.2] the latter vanishes for $q>d$, so $H^q_c(U,\mathcal E)=0$ for $q>d$. [step 2.2, F6]

4.1 **Clause (2).** Let $U\subseteq P$ be open and let $\mathcal E$ be a sheaf on $U$; write $j:U\hookrightarrow P$ for the open inclusion. By [F6] there are natural isomorphisms $R^q\Gamma_c(P,j_!\mathcal E)\cong R^q\Gamma_c(U,\mathcal E)$ for all $q\ge0$, and since $P$ is compact [step 1.1] the identification $H^q_c(P,j_!\mathcal E)=H^q(P,j_!\mathcal E)$ holds. By [step 3.1] the group on the right vanishes for $q>d$, hence $H^q_c(U,\mathcal E)=0$ for every $q>d$. [step 1.1, step 3.1, F6]

5.1 **Conclusion.** Clause (1) is [step 3.1], clause (2) is [step 4.1], and clause (3) is [step 2.2] together with [step 3.2]; the subcomplex statement is [step 1.2]. The isomorphism of [F5] and the derived transport of [F6] use dependent choice, a consequence of AC [F8]; the cover-theoretic construction of [step 2.1] selects only finitely many members of a cover by finite choice, and no other selection is made. [step 1.2, step 3.1, step 2.2, step 4.1, step 3.2, F5, F6, F8] ∎

## Remarks

- **What the bound does not require.** No constructibility, cellularity or coherence of the sheaf is assumed, and no particular cover of the polyhedron is fixed: the proof exhibits, for every cover, a barycentric star cover refining it with multiplicity at most $d+1$, and the refinement-limit Čech theory converts this multiplicity bound into the vanishing of arbitrary sheaf cohomology.

- **The hypothesis of clause (3).** The statement requires Hausdorffness for the comparison theorem [F5] and the compact-support transport [F6]. A single finite cover of order at most $d+1$ has vanishing fixed-cover Čech cohomology above $d$ by step 1.3. For refinement-limit Čech vanishing, covers of that order must form a cofinal family, as ensured by the hypothesis of clause (3); the existence of just one such cover gives no bound on the refinement limit.

- **The fibre model.** For a subcomplex $L\subseteq K$ the closed subspace $|L|$ and its open complement are the pieces on which the fibrewise dimension hypothesis of the finite-fibre-dimension theorem is verified: open subspaces of $P\setminus|L|$ are open in $P$ by [step 1.2], so clause (2) applies to them directly.
