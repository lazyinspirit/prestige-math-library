---
id: "lem-finite-cw-pairs-admit-finite-simplicial-homotopy-models"
kind: "lemma"
title: "Finite cw pairs admit finite simplicial homotopy models"
deps: ["lem-finite-simplicial-approximation-for-homology-comparison", "lem-cw-homotopy-equivalence-inclusions-are-strong-deformation-retracts", "def-geometric-realization-of-an-abstract-simplicial-complex"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  references:
    - title: "Hatcher, Algebraic Topology, Theorem 2C.5, construction and proof pp.182–184"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf"
      locator: "Theorem 2C.5, construction and proof pp.182–184"
status: published
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

4.1 Write $W=Z\cup_Y\bigcup_\alpha M(f_\alpha)$ and let $h_\alpha:S^{r-1}\times I\to W$ be the homotopy from the original attaching map at $t=0$ to the inclusion of the subdivided sphere in $M(f_\alpha)$ at $t=1$, supplied by step 3.1. Form $Z'=W\cup_{h_\alpha,\alpha}\bigcup_\alpha(D^r\times I)$. In each prism there is a strong deformation retraction onto $(S^{r-1}\times I)\cup(D^r\times\{1\})$, fixed on that side-and-top subset: for the unit disk, radially project from $(0,-1)$ to the side or top and join each point to its projection by a straight segment. The reflected formula retracts onto the side and bottom. Since each side is glued to $W$ and these homotopies fix it, they extend by the identity on $W$ and on the other prisms. Consequently $Z'$ strongly deformation retracts onto each end adjunction $W\cup_{h_\alpha(-,0)}\bigcup_\alpha D^r$ and $W\cup_{h_\alpha(-,1)}\bigcup_\alpha D^r$. This is the stronger common-space assertion needed here; the relative homotopy-equivalence conclusion of F2 alone would not imply it. [step 3.1, construct]

5.1 Each $M(f_\alpha)$ strongly deformation retracts onto its target subcomplex in $Y$ by step 2.1, so $W$ strongly deformation retracts onto $Z$, fixing $Z$. On the bottom end, extend this retraction over the newly attached disks by the identity, then extend the inductive retraction $Z\to X_{\rm old}$ over those same disks; both extensions are well defined because their attaching boundaries already lie in the fixed subspace. Their composite strongly deformation retracts the bottom end onto the new CW space. On the top end, extend the inductive retraction $Z\to Y$ by the identity on the cylinders and top disks; it fixes their attaching sphere in $Y$, and its target is exactly $Y\cup_\alpha C(f_\alpha)$, a finite simplicial complex. Composing with the two prism retractions from step 4.1 gives strong deformation retractions of $Z'$ onto both new models. [step 2.1, step 4.1, construct]

6.1 After finishing $A$, keep its common space $Z_A$ and its two strong deformation retracts $A$ and $L$. Repeat the construction for the finitely many cells of $X\setminus A$ in increasing dimension. Inductively retain $Z_A\subseteq Z$ and require both old retractions to carry $Z_A$ into $A$ or $L$, respectively; this holds at the initial stage. For each new prism, the retractions of step 4.1 fix the whole old space $W$ and therefore fix $Z_A$. The extensions in step 5.1 act on $Z_A$ only by the preceding pair-preserving retractions. Hence the induction preserves the designated subpair, and the final common pair $(Z,Z_A)$ strongly deformation retracts as a pair onto $(X,A)$ and onto a finite simplicial pair $(|K|,|L|)$. Composing the inclusions and retractions gives maps of pairs in both directions with pair homotopies to the identities. Empty $A$ uses $Z_A=\varnothing$, and empty $X$ gives the empty simplicial pair. [step 4.1, step 5.1] ∎
