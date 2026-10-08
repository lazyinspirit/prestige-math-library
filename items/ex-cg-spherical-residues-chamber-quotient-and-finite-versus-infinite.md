---
id: "ex-cg-spherical-residues-chamber-quotient-and-finite-versus-infinite"
kind: example
title: "Residues, the compact chamber quotient, and the finite Coxeter sphere versus the contractible Davis cell"
status: published
origin: pipeline
dependency_level: 20
deps: ["def-cg-spherical-nerve-coset-poset-and-davis-realization", "lem-cg-spherical-coset-inclusion-and-intersection", "lem-cg-finite-coxeter-orbit-polytopes-and-face-metrics", "thm-cg-davis-complex-cell-incidence-and-stabilizers", "lem-cg-davis-cellulation-cw-structure-and-cayley-skeleta", "thm-cg-finite-chamber-tiling-and-coset-face-identification", "def-hh-coxeter-matrix-word-group-and-length", "def-barycentric-subdivision-of-an-abstract-simplicial-complex", "def-simplicial-subcomplex-star-closure-and-link", "def-cg-real-coxeter-form-and-reflection", "lem-cg-reflection-form-invariance-and-rank-two-orders", "def-cg-canonical-reflection-homomorphism", "lem-cg-canonical-cell-exposed-faces-and-normal-cones"]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: "2026-10-08"
  precheck: pass
sources:
  references:
    - title: "M. W. Davis, The Geometry and Topology of Coxeter Groups (MSC lecture slides, Tsinghua, 2013)"
      url: "https://people.math.osu.edu/davis.12/papers/Davis-MSC.pdf"
      locator: "slides 'Properties of this cell structure on Sigma' and 'The dual construction of Sigma', printed pp. 14-15"
    - title: "M. W. Davis, The Geometry and Topology of Coxeter Groups, author manuscript of the first edition (Princeton Univ. Press, 2008)"
      url: "https://people.math.osu.edu/davis.12/davisbook.pdf"
      locator: "§7.2, Remark 7.2.1, Lemma 7.2.3 and the paragraph immediately after it (the simplex order complex and K as the cone on sd L), printed p. 127; §7.3, Lemma 7.3.3 with its proof and the 'General Case' paragraph, and Proposition 7.3.4, printed pp. 129-131"
---

## Example

Let $(S,m)$ be a Coxeter matrix with $S$ finite, let $W$ be its presented group, and let $\mathbb S$, $WS$, $\Sigma=|WS|$, the nerve $L$, and the chamber $K=|\mathbb S|$ be as in [[def-cg-spherical-nerve-coset-poset-and-davis-realization]]. For each spherical $T$, let $C_T=\operatorname{conv}(W_Tx_T)$ be the Coxeter cell defined from positive distances $d_s$ as in [[lem-cg-finite-coxeter-orbit-polytopes-and-face-metrics]]. Put $n=|S|$. Distinguish the simplicial order-complex structure on $\Sigma$ from its coarser Coxeter-cell structure. Then:

**(i)** In the simplicial order-complex structure, the link of the vertex $wW_\emptyset=\{w\}$ is $\operatorname{sd}L$. In the coarser polyhedral cell structure, its vertex link is $L$. For a cell $q=wW_T$, define its coface residue to be the order subcomplex induced by the cosets $uW_U\supseteq q$; its simplices are the chains of cells having $q$ as a face.

**(ii)** The orbit quotient $W\backslash\Sigma$ is homeomorphic to $K=|\mathbb S|$, a finite cone on $\operatorname{sd}L$; the action is proper and $K$ is a strict fundamental domain.

**(iii)** If $W$ is finite, then $S$ is the maximum spherical subset and $W_S=W$ indexes the unique top cell. For $n=0$, $\Sigma$ is a point and its boundary is $\emptyset=S^{-1}$. For $n\ge1$, $\Sigma$ is the barycentric subdivision of the convex cell $C_S$, hence a contractible $n$-ball, and its proper-coset cells form the boundary sphere $S^{n-1}$. The Coxeter complex is the dual triangulation of this boundary cellulation: a proper spherical coset $wW_I$ indexes a boundary cell of dimension $|I|$ and a Coxeter simplex of dimension $n-|I|-1$, with incidence reversed. Their barycentric subdivisions agree. The finite Coxeter complex has an $(n-1)$-simplex as a fundamental chamber; $K$ is instead the $n$-dimensional cone on $\operatorname{sd}L$.

**(iv)** With equal distances, the finite rank-two cases $m(s,t)=3$ and $m(s,t)=4$ have regular hexagon and octagon top cells. The all-right-angled rank-three case has a rectangular box top cell, a Euclidean cube when its three distances agree. In the infinite-dihedral case $\Sigma$ is a line, and for a universal Coxeter matrix with at least three generators it is a regular tree. Contractibility of a general infinite Davis complex is not asserted here; it is the later CAT(0) theorem.

## Facts & Assumptions

**Given:** A finite Coxeter matrix $(S,m)$, its presented group $W$, the spherical-subset poset $\mathbb S$, the spherical-coset poset $WS$, its order-complex realization $\Sigma$, the nerve $L$, the chamber $K$, the positive distances $d_s$, the Coxeter cells $C_T$ and generating points $x_T$, and $n=|S|$.

[F1] A subset $T\subseteq S$ is spherical exactly when $W_T$ is finite; $W_\emptyset=\{1\}$ and every singleton is spherical; the nonempty simplices of the nerve $L$ are the nonempty spherical subsets. ([[def-cg-spherical-nerve-coset-poset-and-davis-realization]] (1)).

[F2] $\Sigma=|WS|$ is the geometric realization of the inclusion poset of spherical cosets, and its simplices are finite chains. ([[def-cg-spherical-nerve-coset-poset-and-davis-realization]] (3)).

[F3] $K=|\mathbb S|$ is the cone with apex $\emptyset$ on $\operatorname{sd}L$; since $S$ is finite, $K$ is finite and compact. ([[def-cg-spherical-nerve-coset-poset-and-davis-realization]] (3)).

[F4] Coset inclusion is characterized by $wW_T\subseteq w'W_{T'}$ if and only if $T\subseteq T'$ and $w^{-1}w'\in W_{T'}$. ([[lem-cg-spherical-coset-inclusion-and-intersection]] (2)).

[F5] $\operatorname{sd}L$ has vertices the nonempty faces of $L$ and simplices the strict chains of nonempty faces. ([[def-barycentric-subdivision-of-an-abstract-simplicial-complex]]).

[F6] For spherical $T$, $x_T=\sum_{s\in T}d_sv_s^{(T)}$ and $C_T=\operatorname{conv}(W_Tx_T)$ is a compact convex polyhedral cell of dimension $|T|$ with $0$ in its interior; its nonempty faces are exactly $\operatorname{conv}(uW_Ux_T)$, indexed uniquely by $uW_U$. ([[lem-cg-finite-coxeter-orbit-polytopes-and-face-metrics]] (1)).

[F7] The canonical map $|WS|\to X$ is a homeomorphism onto the glued complex and carries the subposet below each cell address $q$ onto the barycentric subdivision of $C_q$. ([[thm-cg-davis-complex-cell-incidence-and-stabilizers]] (1)).

[F8] Under this identification, the cells indexed by $wW_T$ have dimension $|T|$, and there is one $W$-orbit of cells for each spherical type. ([[thm-cg-davis-complex-cell-incidence-and-stabilizers]] (2)).

[F9] The cellular $W$-action on $\Sigma$ is proper. ([[thm-cg-davis-complex-cell-incidence-and-stabilizers]] (3)).

[F10] $W\backslash\Sigma$ is compact and homeomorphic to $K$, which is a strict fundamental domain. ([[thm-cg-davis-complex-cell-incidence-and-stabilizers]] (4)).

[F11] For finite type with $n\ge1$, the Coxeter complex triangulates $S^{n-1}$; the simplex labelled by $W_\emptyset$ has the standard chamber section $C\cap S^{n-1}$ as its spherical realization, and maximal simplices are indexed by chambers. ([[thm-cg-finite-chamber-tiling-and-coset-face-identification]] (4)).

[F12] The one-skeleton of $\Sigma$ is the undirected $S$-labelled Cayley graph; its finite rank-two cells are the cosets $wW_{\{s,t\}}$. ([[lem-cg-davis-cellulation-cw-structure-and-cayley-skeleta]] (3)).

[F13] For $|T|=2$, $C_T$ is the regular $2m(s,t)$-gon when $d_s=d_t$. ([[lem-cg-davis-cellulation-cw-structure-and-cayley-skeleta]] (4)).

[F14] The Coxeter presentation has relators $s^2$ for $s\in S$ and $(st)^{m(s,t)}$ for distinct $s,t$ with finite $m(s,t)$; an infinite label imposes no relator. ([[def-hh-coxeter-matrix-word-group-and-length]], Definition).

[F15] The Coxeter form has $B(e_s,e_s)=1$ and $B(e_s,e_t)=-\cos(\pi/m(s,t))$ for finite $m(s,t)$. ([[def-cg-real-coxeter-form-and-reflection]] (2)).

[F16] Each simple reflection is linear and involutive, fixes $e_s^\perp$ pointwise, preserves $B$, and sends $e_s$ to $-e_s$. ([[lem-cg-reflection-form-invariance-and-rank-two-orders]] (2)).

[F17] The canonical reflection homomorphism satisfies $\rho(s)=r_{e_s}$ for every $s\in S$. ([[def-cg-canonical-reflection-homomorphism]] (1)).

[F18] In the coarser cell structure on the Davis complex, the link of each vertex is isomorphic to the nerve $L(W,S)$. (Davis, *The Geometry and Topology of Coxeter Groups*, Proposition 7.3.4, printed p. 130).

[F19] The simplicial link of a simplex $\sigma$ consists of simplices $\tau$ disjoint from $\sigma$ for which $\sigma\cup\tau$ is a simplex. ([[def-simplicial-subcomplex-star-closure-and-link]]).

[F20] Every nonempty Coxeter cell $C_T$ is homeomorphic to a closed $|T|$-ball, and its boundary maps to the unit sphere; the empty type is a point. ([[lem-cg-davis-cellulation-cw-structure-and-cayley-skeleta]] (1)).

[F21] The Coxeter simplex labelled by $wW_I$ has vertices $wW_{S\setminus\{s\}}$ for $s\notin I$, hence dimension $n-|I|-1$. ([[thm-cg-finite-chamber-tiling-and-coset-face-identification]] (4)).

[F22] In finite type, every $W$-orbit in $V$ meets the standard chamber $C$ in exactly one point; intersecting with the invariant sphere gives a strict fundamental chamber section. ([[thm-cg-finite-chamber-tiling-and-coset-face-identification]] (1)).

[F23] Coset-face incidence in the finite Coxeter complex reverses coset inclusion: $wW_I\subseteq vW_J$ if and only if $w\overline{C_J}\subseteq v\overline{C_I}$. ([[thm-cg-finite-chamber-tiling-and-coset-face-identification]] (3)).

[F24] If two spherical cosets meet, their intersection is a coset of type $T\cap T'$. ([[lem-cg-spherical-coset-inclusion-and-intersection]] (3)).

[F25] For the finite subsystem $(W_T,T)$ and $x_T$ in its open chamber, the inversion expansion gives $x_T-\rho(u)x_T\in V_{T,+}$ for every $u\in W_T$ ([[lem-cg-canonical-cell-exposed-faces-and-normal-cones]] (1)).

## Verification

**Proof technique:** incidence calculations in the coset poset and local orbit computations.

1.1 A simplex in the simplicial link of $q=wW_\emptyset=\{w\}$ is a chain $q<q_1<\cdots<q_k$ in $WS$; this is the link convention of [F19]. Write $q_i=v_iW_{T_i}$. By [F4], $q\subseteq q_i$ forces $q_i=wW_{T_i}$, and the same criterion shows that $q_1<\cdots<q_k$ exactly when $\emptyset\subsetneq T_1\subsetneq\cdots\subsetneq T_k$; conversely every such chain of nonempty spherical types gives a simplex in the link. By [F5], these are precisely the simplices of $\operatorname{sd}L$. The coface residue of any cell $q$ is the order subcomplex induced by $WS_{\ge q}$, since an order-complex simplex is a chain; this gives the asserted residue. [F1, F2, F4, F5, F19, algebra]

1.2 By [F9] the $W$-action on $\Sigma$ is proper. By [F10] its orbit quotient is homeomorphic to $K$ and $K$ is a strict fundamental domain. Since $S$ is finite, $K$ is finite by [F3], hence the quotient is compact. [F3, F9, F10, algebra]

1.3 Suppose $W$ is finite. Then $S\in\mathbb S$ and $W_S=W$ is the maximum coset, so [F7] identifies $\Sigma$ with the barycentric subdivision of the unique top cell $C_S$. If $n=0$, $C_S$ and $\Sigma$ are points and their boundary is $\emptyset=S^{-1}$. If $n\ge1$, [F20] makes $C_S$ a closed $n$-ball with boundary $S^{n-1}$, and [F7] gives the same topology for $\Sigma$; in particular $\Sigma$ is contractible. Its boundary cells are indexed by the proper spherical cosets $wW_I$ with $I\subsetneq S$; [F6,F8] give their dimensions $|I|$. By [F21,F23], the same coset labels a Coxeter simplex of dimension $n-|I|-1$, and its face incidence reverses coset inclusion. Thus the boundary cellulation and Coxeter triangulation are dual. Their face-poset flags correspond by reversing each finite coset chain, so the barycentric subdivisions are isomorphic. By [F11,F22], the standard chamber section $C\cap S^{n-1}$ is a fundamental $(n-1)$-simplex of the Coxeter complex; $K$ is instead the $n$-dimensional cone on $\operatorname{sd}L$ by [F3]. [F3, F6, F7, F8, F11, F20, F21, F22, F23, algebra]

1.4 For a finite rank-two system with $m(s,t)=3$ or $4$, choose $d_s=d_t$. [F13] gives a regular $2m(s,t)$-gon, so the $A_2$ and $B_2$ top cells are a hexagon and an octagon; [F7] identifies their Davis complexes with the barycentric subdivisions of these cells. For the all-right-angled three-generator case, [F14] gives $s^2=t^2=1$ and $(st)^2=1$, so $st=(st)^{-1}=ts$ for each pair. The homomorphism $W\to(\mathbb Z/2)^3$ sending each generator to its basis vector is therefore well-defined, and the homomorphism back sending the basis vectors to $a,b,c$ is well-defined by commutativity and involutivity; their composites fix generators, so $W\cong(\mathbb Z/2)^3$. By [F15] the Coxeter form is diagonal with $B(e_s,e_s)=1$; [F16,F17] make each simple reflection flip just its own coordinate. Then $v_s^{(S)}=e_s$, $x_S=\sum_s d_se_s$, and the orbit consists of all sign vectors $\sum_s\varepsilon_s d_se_s$. Its convex hull is the product $\prod_s[-d_se_s,d_se_s]$, a box and a cube when the distances agree, by [F6]. The finite Davis complex is its barycentric subdivision by [F7]. [F6, F7, F13, F14, F15, F16, F17, algebra]

1.5 If $W$ is infinite then $S\notin\mathbb S$, so there is no top cell; its $0$-cells are indexed by all $w\in W$, so $\Sigma$ is not a single finite polytope. For the universal Coxeter matrix, each distinct pair has label $\infty$. Let $R$ be the set of finite words with no equal adjacent letters, including the empty word. For each $s\in S$, define a permutation $\lambda_s$ of $R$ by deleting an initial $s$ when present and otherwise prefixing $s$. Each $\lambda_s$ is an involution; because [F14] leaves only the relators $s^2$, the assignment extends to a homomorphism $W\to\operatorname{Sym}(R)$. With composition acting right-to-left, any word $s_1\cdots s_k\in R$ maps the empty word to $s_1\cdots s_k$, so no nonempty word in $R$ represents the identity. For distinct $s,t$, the alternating words $(st)^k$ lie in $R$ and map the empty word to distinct words of lengths $2k$; hence every subgroup generated by at least two generators is infinite and is not spherical. By [F1], the only spherical types are $\emptyset$ and the singletons, so the only cells are vertices and edges; by [F8,F12], $\Sigma$ is the Cayley graph. A closed path with no immediate backtracking has adjacent distinct edge labels, so its label is a nonempty word in $R$ representing $1$, impossible by the action just constructed. The Cayley graph is connected because $S$ generates $W$, hence it is a tree. For $|S|=2$ it is the bi-infinite line; for $|S|\ge3$, distinct generators give distinct neighbors at each vertex, so it is a regular tree of valence $|S|$. [F1, F8, F12, F14, algebra]

2.1 Fix the vertex $wW_\emptyset=\{w\}$. Every incident cell is $q=wW_T$ by [F4]; in its $\dot q$-chart this vertex is $\rho(a)x_T$ with $a=\dot q^{-1}w\in W_T$. At $x_T$, [F25] puts every orbit difference $\rho(u)x_T-x_T$ in $-V_{T,+}:=\{-\sum_{s\in T}c_se_s:c_s\ge0\}$, while $\rho(s)x_T-x_T=-2d_se_s$ for every $s\in T$ by [F6, F15, F16, F17]. Thus the nonnegative hull of $C_T-x_T$, its tangent cone, is exactly $-V_{T,+}$. Because the $e_s$ are independent and $d_s>0$, its nonzero rays have the cross-section $\{-\sum_sc_se_s:c_s\ge0,\ \sum_sc_s=1\}$, a simplex with vertices labelled by $T$; radial normalization identifies this cross-section with the spherical link. The face indexed by $W_U$, $U\subseteq T$, has tangent cone $-V_{U,+}$ by the same argument for its orbit hull [F6, F25], so it contributes precisely the simplex face on $U$. Applying the isometry $\rho(a)$ gives the same labelled link at $\rho(a)x_T$. The empty type contributes the empty simplex. By [F24] two incident cells $wW_T,wW_{T'}$ meet in $wW_{T\cap T'}$, and the face isometries in [F7] identify their links along precisely the face on $T\cap T'$. These simplices are exactly the nerve $L$ by [F1]. The simplicial link from step 1.1 is its barycentric subdivision, in agreement with [F18]. [step 1.1, F1, F4, F6, F7, F15, F16, F17, F18, F24, F25, algebra]

3.1 Clauses (i)–(iv) follow from steps 1.1, 2.1, 1.2, 1.3, 1.4 and 1.5. All constructions are explicit and use only finite-dimensional coordinate calculations and finite case distinctions; no selection from an arbitrary family is used, so the Axiom of Choice is not needed. [step 1.1, step 2.1, step 1.2, step 1.3, step 1.4, step 1.5, given] ∎

## Remarks

This item remains escalated while its in-run suppliers require current decisions and the Step 3a owner hold on the corrected manifest Statement remains open. Consumer ex-cg-spherical-residues-chamber-quotient-and-finite-versus-infinite uses def-cg-spherical-nerve-coset-poset-and-davis-realization in steps 1.1, 1.2, 1.3, 1.5, and 2.1; lem-cg-spherical-coset-inclusion-and-intersection in steps 1.1 and 2.1; lem-cg-finite-coxeter-orbit-polytopes-and-face-metrics in steps 1.3, 1.4, and 2.1; thm-cg-davis-complex-cell-incidence-and-stabilizers in steps 1.2, 1.3, 1.5, 2.1, and 3.1; and lem-cg-davis-cellulation-cw-structure-and-cayley-skeleta in steps 1.3, 1.4, and 1.5. Its cross-batch suppliers are thm-cg-finite-chamber-tiling-and-coset-face-identification (step 1.3); def-hh-coxeter-matrix-word-group-and-length (steps 1.4 and 1.5); and def-cg-real-coxeter-form-and-reflection, lem-cg-reflection-form-invariance-and-rank-two-orders, and def-cg-canonical-reflection-homomorphism (step 1.4). The published barycentric-subdivision and simplicial-link definitions are used in step 1.1. The current supplier statements were inspected provisionally; keep each edge open until the supplier decision and this exact proof use are reconciled. The successor corrected A4 to preserve face/coset inclusion and simultaneously reversed orders; the explicit face formulas used here in steps 1.3, 1.4 and 2.1 remain valid. The example derives the finite and universal cases locally and does not consume later companion examples as suppliers.
