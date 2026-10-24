---
id: lem-qftx-compact-smooth-manifold-has-finite-good-cover-nerve-model
kind: lemma
title: A compact smooth manifold has a finite good-cover nerve model
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 0
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
deps:
  - def-axiom-of-choice
  - thm-existence-of-geodesically-convex-neighborhoods
  - thm-smooth-partitions-of-unity-exist-on-manifolds
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  thm-existence-of-geodesically-convex-neighborhoods: mathematical-premise
  thm-smooth-partitions-of-unity-exist-on-manifolds: mathematical-premise
justified_by: []
axiom_strength: ZF + AC
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references: []
landmark: false
---

## Statement

Assume AC. Let $F$ be a compact finite-dimensional Hausdorff second-countable smooth manifold without boundary and equip it with a Riemannian metric. An open set is strongly geodesically convex if every ordered pair of its points is joined by a unique affinely parametrized globally length-minimizing geodesic whose image stays in the set and whose connector depends smoothly on the endpoints. There are finitely many such open sets $U_1,\ldots,U_N$ covering $F$, every nonempty finite intersection of which is strongly geodesically convex. Let $K$ be the finite simplicial complex whose nonempty faces are the index sets $\sigma\subseteq\{1,\ldots,N\}$ for which $U_\sigma=\bigcap_{i\in\sigma}U_i$ is nonempty. Then its usual geometric realization $|K|$ is homotopy equivalent to $F$. For $F=\varnothing$, take $N=0$ and $K=\varnothing$.

## Facts & Assumptions

**Given:** AC, a compact smooth Riemannian manifold $F$, and the product topology on its finite simplicial complexes.

[A1] Full AC includes the countable-choice hypothesis of the convex-neighborhood and smooth partition-of-unity suppliers. [[def-axiom-of-choice]]

[F1] Every point has a strongly geodesically convex open neighborhood, every nonempty finite intersection of such neighborhoods is strongly geodesically convex, and the unique globally minimizing geodesic depends smoothly on its endpoints. [[thm-existence-of-geodesically-convex-neighborhoods]]

[F2] Every open cover of a smooth manifold has a smooth partition of unity subordinate to it. [[thm-smooth-partitions-of-unity-exist-on-manifolds]]

## Proof

**Given:** The data in the statement.

1.1 The neighborhoods in [F1] cover $F$; compactness gives a finite subcover $U_1,\ldots,U_N$. Each nonempty finite intersection remains strongly geodesically convex by [F1]. The nerve $K$ has finitely many vertices and faces, so it is a finite simplicial complex. If $F=\varnothing$, the empty cover and empty realization give the stated boundary case. [A1, F1, given, construct]

2.1 Choose a smooth partition of unity $\phi_1,\ldots,\phi_N$ subordinate to the finite cover by [F2]. Define $f:F\to |K|$ by $f(x)=\sum_i\phi_i(x)v_i$, where $v_i$ is the $i$th vertex. The active indices $\{i:\phi_i(x)>0\}$ all satisfy $x\in\operatorname{supp}\phi_i\subseteq U_i$, so they form a simplex of $K$; hence the formula lands in $|K|$. Finite sums of continuous coordinates make $f$ continuous. [A1, F2, step 1.1, construct]

3.1 Let $\operatorname{sd}K$ be the barycentric subdivision and $h:|\operatorname{sd}K|\to|K|$ its canonical homeomorphism, sending the vertex indexed by a face $\sigma$ to the barycenter of $\sigma$. For each nonempty face $\sigma$, choose $x_\sigma\in U_\sigma$; there are only finitely many such choices. Define $g:|\operatorname{sd}K|\to F$ on vertices by $g(\sigma)=x_\sigma$. Inductively, a simplex of $\operatorname{sd}K$ is a chain $\sigma_0\subsetneq\cdots\subsetneq\sigma_m$. Its face opposite $\sigma_0$ has already been mapped into $U_{\sigma_1}\subseteq U_{\sigma_0}$; cone that face to $x_{\sigma_0}$ along the unique minimizing geodesics in $U_{\sigma_0}$. This extension maps the entire chain simplex into $U_{\sigma_0}$. Deleting $\sigma_0$ gives the already assigned opposite face; deleting any other vertex restricts the same coning formula to the corresponding face. Thus all face definitions agree, and finite simplex-by-simplex pasting makes $g$ continuous. [A1, F1, step 1.1, construct]

4.1 For each $x\in F$, the support of $f(x)$ is a face $\sigma$ whose every $U_i$ contains $x$. Every chain simplex containing $h^{-1}f(x)$ has a smallest face $\sigma_0\subseteq\sigma$, so $x\in U_{\sigma_0}$; step 3.1 also gives $g h^{-1}f(x)\in U_{\sigma_0}$. The open set $P=\bigcup_i(U_i\times U_i)$ contains every pair $(x,g h^{-1}f(x))$. On each $U_i\times U_i$, the unique minimizing connector is continuous by [F1]; connectors from different members agree on overlaps because they are globally unique. They therefore define a continuous connector on $P$. Applying it to $x$ and $g h^{-1}f(x)$ gives a homotopy $g h^{-1}f\simeq\operatorname{id}_F$. [F1, step 2.1, step 3.1, construct]

5.1 For a face $\sigma_0$ of $K$, let $C_{\sigma_0}$ be the subcomplex of faces $\eta$ such that $\eta\cup\sigma_0$ is a face. It contracts to the barycenter of $\sigma_0$: for any point in a simplex $\eta$ of $C_{\sigma_0}$, the straight segment to that barycenter lies in the simplex $\eta\cup\sigma_0$. On a chain simplex with smallest face $\sigma_0$, the subdivision homeomorphism $h$ lands in $C_{\sigma_0}$; step 3.1 puts $g$ in $U_{\sigma_0}$, so every active vertex of $f g$ forms a face jointly with $\sigma_0$, and $f g$ also lands in $C_{\sigma_0}$. A face of the chain simplex has either the same smallest face or a larger one, whose carrier is contained in $C_{\sigma_0}$. Induct over the finite simplices of $\operatorname{sd}K$: the two endpoint maps and the already constructed boundary homotopy define a map from the boundary of each prism into its contractible carrier $C_{\sigma_0}$; coning that boundary map to the carrier's barycenter extends the homotopy over the prism, relative to its boundary. The finite extensions paste continuously and give $f g\simeq h$. Thus $g h^{-1}$ is a homotopy inverse for $f$, by steps 4.1 and 5.1. [F1, step 2.1, step 3.1, step 4.1, induction, construct] ∎
