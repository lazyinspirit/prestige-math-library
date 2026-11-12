---
id: lem-adjudicate-1ef158934564-singular-sphere-comparison
kind: lemma
title: Singular sphere classes and ordered suspension
status: published
domain: mathematics
deps:
  - thm-author-e0b0bf18ed2b-singular-realization-input
  - math:def-simplicial-set-homotopy-and-trivial-kan-fibration
  - math:def-higher-homotopy-group-by-based-cubes
  - math:thm-higher-homotopy-classes-form-groups-and-are-abelian-above-degree-one
  - math:thm-quotient-universal-property
  - math:cor-left-adjoints-preserve-colimits
  - math:lem-continuity-is-local-and-pastes
  - math:def-compactly-generated-conventions-for-based-homotopy
  - math:lem-kification-compact-tests-and-finite-constructions
  - math:def-smash-product-of-based-spaces
  - math:cor-heine-borel-in-the-product-topology
  - math:thm-metric-hausdorff-separation
  - math:thm-compactness-under-continuous-maps
  - math:thm-product-universal-property
dependency_roles:
  thm-author-e0b0bf18ed2b-singular-realization-input: mathematical-premise
  math:def-simplicial-set-homotopy-and-trivial-kan-fibration: mathematical-premise
  math:def-higher-homotopy-group-by-based-cubes: mathematical-premise
  math:thm-higher-homotopy-classes-form-groups-and-are-abelian-above-degree-one: mathematical-premise
  math:thm-quotient-universal-property: mathematical-premise
  math:cor-left-adjoints-preserve-colimits: mathematical-premise
  math:lem-continuity-is-local-and-pastes: mathematical-premise
  math:def-compactly-generated-conventions-for-based-homotopy: mathematical-premise
  math:lem-kification-compact-tests-and-finite-constructions: mathematical-premise
  math:def-smash-product-of-based-spaces: mathematical-premise
  math:cor-heine-borel-in-the-product-topology: mathematical-premise
  math:thm-metric-hausdorff-separation: mathematical-premise
  math:thm-compactness-under-continuous-maps: mathematical-premise
  math:thm-product-universal-property: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: Kerodon, The Homotopy Groups of a Kan Complex
      url: https://kerodon.net/tag/00VJ
      locator: Example 3.2.2.3; Construction 3.2.2.4; Notation 3.2.2.5; Example
        3.2.2.7; Theorem 3.2.2.10; Example 3.2.2.12 and Warning 3.2.2.14
      statement: For a pointed Kan complex, pointed simplex-quotient classes have a
        group law with the stated boundary-extension criterion. A simplex with
        faces (b,c,a,e,...,e) gives [c]=[b][a]. Degrees at least two are
        abelian; degree one uses composition order. The realized simplex modulo
        its boundary is a sphere, and singular sphere classes identify with
        topological sphere classes as sets.
      hypotheses: A pointed Kan complex and d >= 1; for the singular example, any
        based topological space. All displayed faces have constant boundary.
      reading_limits: Read the listed passages in the live subsection on 2026-11-12,
        including the face criterion and the explicit degree-one order warning.
        The general group-law proof in Section 3.2.3 was not read or
        reconstructed. The multiplication comparison below is a local proof, not
        a quoted comparison theorem.
    - title: Kerodon, Exactness of Geometric Realization
      url: https://kerodon.net/tag/013E
      locator: Corollary 3.6.2.2, statement and displayed proof
      statement: The canonical map |B x C| -> |B| x |C| is a homeomorphism if either
        simplicial factor is finite.
      hypotheses: Simplicial sets B and C, with at least one finite factor.
      reading_limits: Read the complete corollary and displayed proof on 2026-11-12.
        Its product-triangulation, finite-realization and mapping-space
        foundations remain imported. Applied here only when a factor is Delta^1,
        K, or a finite sphere.
    - title: Kerodon, Singular Simplicial Sets are Kan Complexes
      url: https://kerodon.net/tag/002K
      locator: Proposition 1.2.5.8, statement and proof including the barycentric
        horn-retraction formula
      statement: The singular simplicial set of every topological space is a Kan complex.
      hypotheses: Any topological space; choosing a basepoint supplies its constant
        pointed simplicial subset.
      reading_limits: Read the statement and complete displayed proof on 2026-11-12,
        including the barycentric horn retraction. Earlier realization
        foundations referred to in that proof were not independently
        reconstructed. Applied to arbitrary Z.
dependency_level: 1
---

## Statement
Let $Z$ be any based topological space. Write $D^n=\{(t_0,\ldots,t_n):t_i\geq0,\ \sum_i t_i=1\}$, and let $\Delta^n$ and $\partial\Delta^n$ be the standard simplicial simplex and boundary. Use the realization $|B|$, singular complex $(\operatorname{Sing}Z)_n=C(D^n,Z)$ and evaluation $\epsilon_Z([f,t])=f(t)$ of the pointed realization–singular adjunction. The simplicial operators on $\operatorname{Sing}Z$ are affine precomposition and its basepoint simplices are constant. A pointed simplicial set has a chosen map from $\Delta^0$; a pointed simplicial homotopy $H:\Delta^1\times B\to C$ is constant on $\Delta^1\times *$. A Kan complex is a simplicial set in which every map from a horn $\Lambda_i^n$ (the union of all faces of $\Delta^n$ except face $i$, for $n\geq1$) extends to $\Delta^n$. The complex $\operatorname{Sing}Z$ is Kan.

For $d\geq1$ put $T_d=\Delta^d/\partial\Delta^d$. Use the simplicial sphere-class group on $[T_d,\operatorname{Sing}Z]_*$, with multiplication normalized to traverse the left factor first in degree one: it is the opposite of Kerodon's composition-order group in degree one and Kerodon's abelian group in higher degrees. Denote it by $\pi_d^{\mathrm{simp}}$. On the topological side use the published cubical group, whose product traverses the left factor first in coordinate one. Set $S^d=I^d/\partial I^d$, based at the collapsed boundary, where $I=[0,1]$.

Specify the comparison parametrization as follows. Let $E_{d-1}=\{u\in\mathbb R^{d-1}:u_i\geq0,\ \sum_i u_i\leq1\}$ and fix the boundary-preserving radial homeomorphism $R_{d-1}:I^{d-1}\to E_{d-1}$ obtained by translating the cube center and the simplex barycenter to the origin and rescaling each ray by the ratio of its distances to their boundaries. In dimension zero both spaces are a point, with empty boundary. For $u=R_{d-1}(v)$ and $h=1-\sum_i u_i$, the formula $(s,v)\mapsto(h(1-s),hs,u)$ induces a based homeomorphism $q_d:S^d\to D^d/\partial D^d=|T_d|$. In degree one it runs from vertex $0$ to vertex $1$. Evaluated realization, parametrized by $q_d$, gives a natural group isomorphism $C_d:\pi_d^{\mathrm{simp}}(\operatorname{Sing}Z)\xrightarrow{\sim}\pi_d(Z)$, namely $[a]\mapsto[\epsilon_Z|a|q_d]$.

Here are the conventions for the more general representative assertion. Simplicial quotients are computed degreewise, and $B\wedge C=(B\times C)/((B\times *)\cup(*\times C))$. For arbitrary based topological spaces use the ordinary quotient $X\wedge Y=(X\times Y)/((X\times *)\cup(*\times Y))$. Put $K=T_1$, oriented by $|K|=I/\partial I=S^1$. There is a natural product-and-quotient homeomorphism $\rho_B:|K\wedge B|\xrightarrow{\sim}S^1\wedge|B|$ for every pointed simplicial set $B$. A finite simplicial set has finitely many nondegenerate simplices. For any finite pointed simplicial sphere $A$ and fixed based homeomorphism $u_A:S^d\xrightarrow{\sim}|A|$, evaluation gives a bijection $[A,\operatorname{Sing}Z]_*\to\pi_d(Z)$ by $[a]\mapsto[\epsilon_Z|a|u_A]$. This includes iterated smash powers of $K$, with their ordered cube-quotient realizations.

Let $Z'$ be any based space and let $\sigma:S^1\wedge Z\to Z'$ be based and continuous. Define $t_\sigma:K\wedge\operatorname{Sing}Z\to\operatorname{Sing}Z'$ as the pointed adjoint of $\sigma(1_{S^1}\wedge\epsilon_Z)\rho_{\operatorname{Sing}Z}$. For every such $a:A\to\operatorname{Sing}Z$ the following equality has domain $|K\wedge A|$:
$$\epsilon_{Z'}\bigl|t_\sigma\circ(1_K\wedge a)\bigr|=\sigma\circ(1_{S^1}\wedge(\epsilon_Z|a|))\circ\rho_A.$$
For the sphere-class version use $u_{K\wedge A}=\rho_A^{-1}(1_{S^1}\wedge u_A)\chi_d$, where $\chi_d:S^{d+1}\xrightarrow{\sim}S^1\wedge S^d$ is induced by the identity on the ordered cube $I\times I^d$, with its exterior boundary collapsed. This places the new coordinate first.

There is also a compactly generated version. For based CG spaces define $X\wedge_kY=k((X\times_kY)/(X\vee Y))$, where $X\times_kY=k(X\times Y)$ and $X\vee Y$ is the union of the two basepoint axes. On CGWH inputs this is the published smash. Every realization is CG, and $\rho_B$ also identifies $|K\wedge B|$ with $S^1\wedge_k|B|$, using the displayed CG formula for intermediate realization factors. For based CG $Z,Z'$ and based continuous $\sigma:S^1\wedge_kZ\to Z'$, the same adjunction construction and representative equality hold with $\wedge_k$ on topological factors. Kification preserves the cubical maps and boundary-fixed homotopies defining these sphere classes. In particular this applies to CGWH spaces and requires no well-pointedness of $Z$.

## Statement references
[[thm-author-e0b0bf18ed2b-singular-realization-input]]

[[math:def-simplicial-set-homotopy-and-trivial-kan-fibration]]

[[math:def-higher-homotopy-group-by-based-cubes]]

[[math:thm-higher-homotopy-classes-form-groups-and-are-abelian-above-degree-one]]

[[math:thm-quotient-universal-property]]

[[math:cor-left-adjoints-preserve-colimits]]

[[math:lem-continuity-is-local-and-pastes]]

[[math:def-compactly-generated-conventions-for-based-homotopy]]

[[math:lem-kification-compact-tests-and-finite-constructions]]

[[math:def-smash-product-of-based-spaces]]

[[math:cor-heine-borel-in-the-product-topology]]

[[math:thm-metric-hausdorff-separation]]

[[math:thm-compactness-under-continuous-maps]]

[[math:thm-product-universal-property]]

## Facts & Assumptions
**Given:** $Z,Z',d,K,A,u_A$ and $\sigma$ as in the Statement, with its specified simplicial multiplication and either of its topology conventions.

**Goal:** Prove the group comparison and the ordered-suspension equality.

[F1] The pointed realization–singular adjunction sends $a$ to $\epsilon_Z|a|$, naturally, and supplies its realization and singular constructions. [[thm-author-e0b0bf18ed2b-singular-realization-input]]

[F2] The published simplicial definition supplies standard simplices, boundaries, degreewise products and simplicial homotopies. Kerodon supplies the Kan property of $\operatorname{Sing}Z$ and the sphere-class group. Its face criterion implies $[c]=[b][a]$ for faces $(b,c,a,e,\ldots,e)$ of a $(d+1)$-simplex, where $e$ is constant. In degree one our multiplication is opposite to Kerodon's; higher groups are abelian. [[math:def-simplicial-set-homotopy-and-trivial-kan-fibration]]

[F3] Kerodon Corollary 3.6.2.2 makes the canonical map $|B\times C|\to|B|\times|C|$ a homeomorphism whenever one simplicial factor is finite. We use it with $\Delta^1$, $K$ or finite sphere factors. Example 3.2.2.3 identifies $|T_d|$ with the simplex modulo its boundary, a topological sphere.

[F4] The published cubical group has product $(a*b)(s,v)=a(2s,v)$ for $s\leq1/2$ and $b(2s-1,v)$ for $s\geq1/2$; it is a group for every $d\geq1$. [[math:def-higher-homotopy-group-by-based-cubes]], [[math:thm-higher-homotopy-classes-form-groups-and-are-abelian-above-degree-one]]

[F5] Maps agreeing on a finite closed cover paste continuously, and maps constant on quotient fibers descend continuously. Left adjoints preserve existing colimits; by [F1] this applies to realization and its pointed quotients. [[math:lem-continuity-is-local-and-pastes]], [[math:thm-quotient-universal-property]], [[math:cor-left-adjoints-preserve-colimits]]

[F6] Use compact-Hausdorff-test kification. For CG source $T$, continuity of $T\to X$ is equivalent to continuity into $kX$. Finite k-products are categorical, ordinary quotients of CG spaces are CG, and kification preserves cubical maps and relative homotopies. The displayed CG smash agrees with the published CGWH formula on its stated inputs. [[math:def-compactly-generated-conventions-for-based-homotopy]], [[math:lem-kification-compact-tests-and-finite-constructions]], [[math:def-smash-product-of-based-spaces]]

[F7] Closed bounded Euclidean subsets are compact, and metric spaces are Hausdorff. Continuous images of compact spaces are compact, and a continuous bijection from compact to Hausdorff is a homeomorphism. Continuity into a product is tested on its coordinates; only this choice-free characteristic property of the product theorem is used. [[math:cor-heine-borel-in-the-product-topology]], [[math:thm-metric-hausdorff-separation]], [[math:thm-compactness-under-continuous-maps]], [[math:thm-product-universal-property]]

## External input
The three references import the simplicial sphere-group structure, its face criterion and order convention, and the simplex-quotient sphere model (reference 0); the finite-factor realization homeomorphism (reference 1); and the singular Kan property (reference 2). The hypotheses are a pointed Kan target in positive degree, simplicial sets with a finite factor, and an arbitrary topological space, respectively. They apply here since $\operatorname{Sing}Z$ is Kan, $d\geq1$, and $K,\Delta^1$ are finite. The group comparison, its cubical parametrization and the suspension calculation are proved locally below; their proofs are not attributed to those references.

## Proof
1.1 First justify the parametrization in the Statement. The radial map $R_{d-1}$ and its inverse are continuous: for each centered polytope the distance to its boundary along a unit ray is a positive continuous function, given by the minimum of the applicable finitely many facet-distance ratios; these distances are bounded above and bounded away from zero, so the radial formulas extend continuously at the center. They preserve boundaries. The formula defining $q_d$ is continuous by coordinate tests in [F7]. It carries the exterior boundary of $I^d$ into $\partial D^d$; away from that boundary it is bijective, since $u$ and $s=t_1/(t_0+t_1)$ recover the parameters. Every boundary point maps to the basepoint after the quotient. It therefore induces a continuous bijection $q_d$. Its source is compact by [F7] and quotient descent, and its target is Hausdorff by the sphere model in [F3] and [F7], so it is a homeomorphism. By [F1], [F3], maps from any finite pointed $A$ to $\operatorname{Sing}Z$ correspond to based maps $|A|\to Z$; the same adjunction on $\Delta^1\times A$ identifies pointed homotopies in both directions, since its realization is $I\times|A|$. Thus evaluation gives the asserted class bijections; [F2] supplies the group on $T_d$. To verify its multiplication, let $a,b:D^d\to Z$ be constant on the boundary. In $D^{d+1}$ put $F_i=\{t_i=0\}$ and $m=\min(t_0,t_2)$. The continuous map $r(t)=(t_0-m,t_1+2m,t_2-m,t_3,\ldots,t_{d+1})$ retracts onto $F_0\cup F_2$. Paste $b$ on $F_0$ and $a$ on $F_2$ in increasing-vertex coordinates; they agree at the basepoint on the intersection. By [F5] composition with $r$ gives a singular simplex $w$ with faces $d_0w=b$, $d_2w=a$, $d_1w=c$ and $d_jw=e$ for $j\geq3$: for these last faces $r$ leaves $t_j=0$ and lands in the boundary of $F_0$ or $F_2$. The same observation on the boundary of $F_1$ shows that $c$ has constant boundary. On $F_1$ use $(t_0,t_2,u)=(h(1-s),hs,u)$ with $u=R_{d-1}(v)$. For $s\leq1/2$, $r$ lands on $F_2$ with increasing-vertex coordinates $(h(1-2s),2hs,u)$; for $s\geq1/2$ it lands on $F_0$ with coordinates $(2h(1-s),h(2s-1),u)$. Consequently $cq_d$ is exactly the coordinate-one concatenation of $aq_d$ followed by $bq_d$, including the boundary values. This also directly checks the degree-one order. Hence its topological class is $C_d([a])*C_d([b])$ by [F4]. The face criterion gives $[c]=[b][a]$ in Kerodon's group, equal to our normalized product of $[a]$ and $[b]$ in degree one and to their product in higher degrees by commutativity. The class bijection is therefore a group isomorphism. Postcomposition commutes with evaluation and the formulas, proving naturality. [F1, F2, F3, F4, F5, F7, construct]

2.1 By [F1], [F3], [F5], realization preserves product with $K$ and the pointed quotient defining its smash. More explicitly, continuous based maps out of either $|K\wedge B|$ or $S^1\wedge|B|$ correspond to continuous maps out of $S^1\times|B|$ that are constant on both basepoint axes; this identifies the canonical $\rho_B$ as a natural homeomorphism. Each realization is CG: if a subset is k-closed, its inverse image along every compact Hausdorff characteristic simplex $D^n\to|B|$ is closed by [F7], and the defining quotient topology then makes the subset closed. The finite-factor homeomorphism makes $S^1\times|B|$ CG because it is $|K\times B|$, and its ordinary smash quotient is CG by [F6]. Thus $\rho_B$ also has the asserted kified target. For CG $Z$, functoriality of k-products and quotient descent make $1\wedge_k\epsilon_Z$ continuous, so adjunction defines $t_\sigma$ in this convention too. By its definition $\epsilon_{Z'}|t_\sigma|=\sigma(1\wedge\epsilon_Z)\rho_{\operatorname{Sing}Z}$. Compose with $|1_K\wedge a|$ and use naturality of $\rho$ to obtain the displayed equality. To pass to classes, a pointed simplicial homotopy $H:\Delta^1\times A\to\operatorname{Sing}Z$ defines the pointed homotopy $(s,k\wedge x)\mapsto t_\sigma(k\wedge H(s,x))$; this is well-defined on the smash because $H(s,*)=*$ and $t_\sigma$ is pointed. Its realization is a based ordinary homotopy by the finite $\Delta^1$ product comparison. The CG version preserves these cubical classes and boundary-fixed homotopies by [F6] and quotient descent. With $u_{K\wedge A}$ as stated, this is exactly suspension with the new coordinate first. Iteration of the same product-and-quotient argument gives the ordered cube-quotient models for smash powers of $K$ and the map $\chi_d$. [F1, F3, F5, F6, F7, step 1.1] ∎
