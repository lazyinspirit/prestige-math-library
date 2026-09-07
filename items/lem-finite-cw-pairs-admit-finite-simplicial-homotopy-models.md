---
id: "lem-finite-cw-pairs-admit-finite-simplicial-homotopy-models"
kind: "lemma"
title: "Finite cw pairs admit finite simplicial homotopy models"
deps: ["lem-finite-simplicial-approximation-for-homology-comparison", "lem-cw-homotopy-equivalence-inclusions-are-strong-deformation-retracts", "def-geometric-realization-of-an-abstract-simplicial-complex"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Hatcher, Algebraic Topology, Theorem 2C.5, construction and proof pp.182–184"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf"
      locator: "Theorem 2C.5, construction and proof pp.182–184"
status: "draft"
origin: "pipeline"
proof_strategy: "Build Hatcher simplicial M(f) over each simplex by coning M(f restricted to boundary), retaining the target and barycentrically subdivided domain. Contractibility plus the previous HEP lemma supplies the retraction, then adjust its endpoint to f. Build C(f) by adjoining the cone on the domain. First model A, then attach the finitely many cells of X outside A; keep both A-models in the common double-cylinder construction. Check every retraction preserves the designated subpair. This proves the pair version rather than assuming that separate models for X and A are compatible."
---

## Statement

Every finite CW pair $(X,A)$ is homotopy equivalent as a pair to a finite simplicial pair $(|K|,|L|)$. In particular there are maps of pairs in both directions whose composites are homotopic to the identities through maps preserving the designated subspaces.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement above.

[F1] For finite simplicial pairs $(K,L)$ and $(P,Q)$, every continuous map $f:(|K|,|L|)\to(|P|,|Q|)$ is homotopic through maps of pairs to a simplicial map $(\operatorname{sd}^r K,\operatorname{sd}^r L)\to(P,Q)$ for some $r\ge0$. ([[lem-finite-simplicial-approximation-for-homology-comparison]])

[F2] If $A\subset X$ is a CW subcomplex and its inclusion is a homotopy equivalence, then $X$ strongly deformation retracts onto $A$. Moreover, if $(Y,B)$ is a CW pair and $u_0,u_1:B\to Z$ are homotopic, then the adjunction spaces $Z\cup_{u_0}Y$ and $Z\cup_{u_1}Y$ are homotopy equivalent relative to their common subspace $Z$. ([[lem-cw-homotopy-equivalence-inclusions-are-strong-deformation-retracts]])

[F3] Let $(V,K)$ be an abstract simplicial complex. Its **geometric realization** $|K|$ is the set of functions $\alpha:V \to [0,1]$ such that: 1. $\alpha(v)=0$ for all but finitely many $v \in V$; 2. $\sum_{v \in V}\alpha(v)=1$; 3. the support $\operatorname{supp}(\alpha):=\{v \in V:\alpha(v)\neq 0\}$ is a simplex of $K$. For each simplex $\sigma=\{v_0,\dots,v_n\}$ of $K$, write $$|\sigma|:=\{\alpha \in |K| : \operatorname{supp}(\alpha)\subseteq \sigma\}.$$ Sending $\alpha$ to the barycentric tuple $(\alpha(v_0),\dots,\alpha(v_n))$ identifies $|\sigma|$ with the geometric simplex spanned by the standard basis vectors indexed by $v_0,\dots,v_n$, so $|\sigma|$ carries its Euclidean simplex topology. We give $|K|$ the **weak topology** with respect to these simplex inclusions: a subset $U\subseteq |K|$ is declared open exactly when $U\cap|\sigma|$ is open in $|\sigma|$ for every simplex $\sigma$ of $K$. ([[def-geometric-realization-of-an-abstract-simplicial-complex]])

## Proof

1.1 We first describe a finite simplicial replacement for the cylinder of a simplicial map $f:P\to Q$. Start with $Q$ and an edge from each vertex $v$ of $P$ to $f(v)$, using disjoint domain vertices. Having constructed the part over $\partial\sigma$ for a simplex $\sigma$ with image face $\tau$, adjoin the cone on $M(f|_{\partial\sigma}:\partial\sigma\to\tau)$ with a fresh apex. This contains the subdivided simplex as the cone on its subdivided boundary. The base already retracts to the contractible simplex $\tau$, so both base and cone are contractible; the inclusion is a CW homotopy equivalence and F2 gives a strong deformation retraction to the base. Attach these finite pieces along their specified faces. Fresh vertices and the shared face construction make the intersections exactly subcomplexes in the sense of F3. [F2, F3]

2.1 Successively retract the cone pieces in decreasing dimension. The resulting retraction $r:M(f)\to Q$ carries each domain simplex into its image face $\tau$, so $r|_P$ is homotopic there to $f$ by straight lines. Extend that endpoint adjustment over $M(f)$, fixed on $Q$, by the CW HEP used in F2. Thus the domain inclusion is homotopic in $M(f)$ to $f$ with the prescribed endpoint. Adjoin a cone on the subdivided copy of $P$; the result $C(f)$ is a finite simplicial complex. This construction does not assume the ordinary mapping cylinder itself is simplicial. [F2, step 1.1]

3.1 Here is the induction with subpairs retained. Begin with the finitely many vertices of $A$, and adjoin its cells in increasing dimension. At each stage retain a common CW space $Z$ having both the current CW space and its simplicial model $Y$ as deformation retracts. Given finitely many new attaching maps $S^{r-1}\to X_{\mathrm{old}}$, retract to $Y$ and approximate simplicially by F1 after finitely many subdivisions of the sphere domains. For $r=0$, just adjoin isolated vertices. For $r\ge1$, adjoin the complexes $M(f)$ to $Z$ along $Y$. Each added subdivided sphere is homotopic in this common space to its original attaching map, by the old retraction homotopy, the simplicial approximation homotopy, and the cylinder homotopy just built. [F1, F2, step 2.1]

4.1 For each of these homotopies glue $D^r\times I$ along its boundary cylinder. The bottom contains the original attached cell, and the top contains the cone on the new sphere; the top simplicial space is $Y\cup C(f)$ over all the new cells. The prism retractions in F2 give deformation retractions to the two end adjunctions. The old retractions extend over an attaching disk by first extending the boundary homotopy over its collar; this is again the relative prism construction, fixed on the unaltered old end. Hence the new common space has both new ends as deformation retracts. This is a finite construction and preserves the earlier common subspace wherever no new cell is being attached. [F2, step 3.1]

5.1 After finishing $A$, keep its common space $Z_A$ and its two retracts $A$ and $L$. Now repeat the same construction for the cells of $X\setminus A$ in increasing dimension, with $Z_A$ designated as the subspace throughout. The homotopies on $Z_A$ are exactly its old retraction homotopies and remain within $Z_A$; every prism newly attached for a cell outside $A$ leaves this designated subspace alone. Thus the final common pair $(Z,Z_A)$ retracts as a pair to $(X,A)$ and to a finite simplicial pair $(K,L)$. Composing its retractions gives the required pair homotopy equivalence. Empty $A$ uses $Z_A=\varnothing$, and empty $X$ gives the empty simplicial pair. [F2, step 4.1] ∎
