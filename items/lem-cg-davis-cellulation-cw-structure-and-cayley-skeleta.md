---
id: "lem-cg-davis-cellulation-cw-structure-and-cayley-skeleta"
kind: lemma
title: "The Davis complex as a CW complex: disk cells and the Cayley skeleta"
status: draft
origin: pipeline
dependency_level: 19
deps: ["def-cg-spherical-nerve-coset-poset-and-davis-realization","lem-cg-spherical-coset-inclusion-and-intersection","lem-cg-finite-coxeter-orbit-polytopes-and-face-metrics","lem-cg-canonical-cell-exposed-faces-and-normal-cones","thm-cg-davis-complex-cell-incidence-and-stabilizers","def-cg-abstract-isometric-polyhedral-gluing-and-chain-metric","def-hh-coxeter-matrix-word-group-and-length","thm-hh-parabolic-minimal-representatives-and-length-additivity","def-cg-real-coxeter-form-and-reflection","def-cg-canonical-reflection-homomorphism","def-cell-attachment-by-a-characteristic-map","def-cw-complex-with-closure-finiteness-and-weak-topology","def-skeleta-cw-subcomplex-and-relative-cw-complex","lem-cellular-attachments-with-finite-boundary-support-form-a-cw-complex","def-homeomorphism-and-open-maps","def-cayley-graph","def-directed-labelled-cayley-graph", "thm-cg-finite-chamber-tiling-and-coset-face-identification", "lem-cg-reflection-form-invariance-and-rank-two-orders"]
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "M. W. Davis, The Geometry and Topology of Coxeter Groups, author manuscript of the first edition (Princeton Univ. Press, 2008)"
      url: "https://people.math.osu.edu/davis.12/davisbook.pdf"
      locator: "§7.3, Example 7.3.2(ii), Lemma 7.3.3 and its proof, the 'General Case' and Proposition 7.3.4, printed pp. 128-131 (dihedral cells, finite face posets, cellulation and skeleta); §2.1-2.2, printed pp. 15-20 (Cayley graph and the Cayley 2-complex convention omitting involution relator cells)"
    - title: "M. W. Davis, The Geometry and Topology of Coxeter Groups (MSC lecture slides, Tsinghua, 2013)"
      url: "https://people.math.osu.edu/davis.12/papers/Davis-MSC.pdf"
      locator: "slide 'Second realization: the cell complex Sigma' (cells, skeleta)"
---

## Statement

Let $(S,m)$ be a Coxeter matrix with $S$ finite, $W$ its presented group, and let $\Sigma$ carry the cellulation of [[thm-cg-davis-complex-cell-incidence-and-stabilizers]] with cells the spherical cosets $wW_T$, $T\in\mathbb S$ ([[def-cg-spherical-nerve-coset-poset-and-davis-realization]]); write $\mathbb S$ for the spherical subsets and $C_T$ for the Coxeter cells of [[lem-cg-finite-coxeter-orbit-polytopes-and-face-metrics]]. Then:

**(1) The cells are disks.** For $T=\emptyset$, $C_T=\{0\}$ is the closed zero-ball. For nonempty $T$, the cell $C_T$ is homeomorphic to the closed disk $\overline B(0,1)\subseteq V_T$ by the radial map $$\psi\colon C_T\to\overline B(0,1),\qquad \psi(0)=0,\quad \psi(x)=\frac{x}{t_{\max}(x/\|x\|_B)}\ (x\ne0),$$ where $t_{\max}(u)=\min\{\ell_i(0)/(\ell_i(0)-\ell_i(u)):\ell_i(u)<\ell_i(0)\}$ is the exit parameter of the unit ray through $u$ for a finite list of affine functions $\ell_i\ge0$ defining $C_T=\{v:\ell_i(v)\ge0\}$ with $\ell_i(0)>0$; $\psi$ carries the boundary $\partial C_T$ onto the unit sphere. Consequently the cells $wW_T$ admit characteristic maps from closed $|T|$-disks ([[def-cell-attachment-by-a-characteristic-map]]).

**(2) CW structure.** With these characteristic maps and the face-identification attaching maps, the cellulation is a CW complex in the sense of [[def-cw-complex-with-closure-finiteness-and-weak-topology]]: the weak topology is the topology of the gluing of [[thm-cg-davis-complex-cell-incidence-and-stabilizers]], and the cells meeting the closed cell $wW_T$ are the cells $vW_V$ with $vW_V\cap wW_T\ne\emptyset$, equivalently $v\in wW_TW_V$; by [[lem-cg-spherical-coset-inclusion-and-intersection]] (3) and the finiteness of the spherical subsets $V$ and of both $W_T$ and $W_V$ these are finitely many, so the closure finiteness condition (C) holds.

**(3) Skeleta.** The skeleta ([[def-skeleta-cw-subcomplex-and-relative-cw-complex]]) are: $\Sigma^0=W$, the cosets $wW_\emptyset=\{w\}$; $\Sigma^1$ is the (undirected, $S$-labelled) Cayley graph of $(W,S)$ ([[def-cayley-graph]], [[def-directed-labelled-cayley-graph]]), each $1$-cell $wW_{\{s\}}=\{w,ws\}$ being an edge labelled $s$; and $\Sigma^2$ is Davis's reduced Cayley $2$-complex of the Coxeter presentation $W=\langle S\mid s^2\ (s\in S),\ (st)^{m(s,t)}\ (s\ne t,\ m(s,t)<\infty)\rangle$: the involution relators $s^2$ contribute only edge backtracks, with no $2$-cells, and the finite pair-relator circuits are identified up to cyclic shift and reversal; its $2$-cells are the cosets $wW_{\{s,t\}}$ with $m(s,t)<\infty$, each a $2m(s,t)$-gon whose boundary closed edge path is $w,ws,wst,\dots,w(st)^{m(s,t)}=w$.

**(4) Two-dimensional case.** For $|T|=2$, $C_T$ is the regular $2m(s,t)$-gon when $d_s=d_t$, and for $|T|=1$, $C_T$ is the interval from $-d_se_s$ to $d_se_s$; the cellulation has no cells of dimension $\ge3$ exactly when no three-element spherical subset exists.

## Facts & Assumptions

**Given:** A finite Coxeter matrix $(S,m)$, its presented group $W$, the spherical subsets $\mathbb S$, the Davis realization $\Sigma=|WS|$, the cells $C_T=\operatorname{conv}(W_Tx_T)$, and the cell charts indexed by spherical cosets $wW_T$.

[F1] For nonempty spherical $T$, in the finite-dimensional Euclidean space $(V_T,B_T)$ the cell $C_T$ is bounded, contains $0$ in its interior, and is defined by finitely many affine inequalities $\ell_i(v)\ge0$ with $\ell_i(0)>0$ ([[lem-cg-canonical-cell-exposed-faces-and-normal-cones]] (5), applied to $(W_T,T)$).

[F2] For every spherical $T$, $C_T$ has dimension $|T|$, its generating point is $x_T=\sum_{s\in T}d_sv_s^{(T)}$ with $B(x_T,e_s)=d_s$, and its nonempty faces are exactly $\operatorname{conv}(uW_Ux_T)$ for $u\in W_T$, $U\subseteq T$, each indexed by exactly one coset; face inclusion agrees with coset inclusion ([[lem-cg-finite-coxeter-orbit-polytopes-and-face-metrics]] (1)).

[F3] The canonical barycentric-subdivision map $|WS|\to X$ is a homeomorphism $\Sigma\cong X$ carrying the subposet below each spherical coset $q$ onto the barycentric subdivision of its cell $C_q$ ([[thm-cg-davis-complex-cell-incidence-and-stabilizers]] (1)).

[F16] Under the cellulation identification, the cells indexed by $wW_T$ have dimension $|T|$, and every point lies in the relative interior of exactly one cell ([[thm-cg-davis-complex-cell-incidence-and-stabilizers]] (2)).

[F4] A characteristic map is a continuous map from a closed disk whose interior maps homeomorphically onto the open cell and whose boundary maps into the preceding skeleton ([[def-cell-attachment-by-a-characteristic-map]]).

[F5] A homeomorphism is a continuous bijection with continuous inverse ([[def-homeomorphism-and-open-maps]]).

[F6] A CW complex is Hausdorff and has a filtration by skeleta with closure finiteness and the weak-topology condition ([[def-cw-complex-with-closure-finiteness-and-weak-topology]]).

[F7] The skeleta are the subcomplexes formed by cells of dimension at most the given degree ([[def-skeleta-cw-subcomplex-and-relative-cw-complex]]).

[F8] The choice-free attachment lemma constructs a CW complex from supplied cells with finite boundary support and their weak attachment topology ([[lem-cellular-attachments-with-finite-boundary-support-form-a-cw-complex]]).

[F9] A subset $T$ is spherical exactly when $W_T$ is finite, and $W_\emptyset=\{1\}$ ([[def-cg-spherical-nerve-coset-poset-and-davis-realization]]).

[F10] For every $T\subseteq S$, $W_T$ is the Coxeter group with restricted Coxeter matrix on $T$; when $T=\{s\}$ the presentation has only $s^2=1$, so every word reduces to $1$ or $s$, and the map to the two-element group sending $s$ to its nonidentity element separates them. Hence $W_{\{s\}}=\{1,s\}$ ([[thm-hh-parabolic-minimal-representatives-and-length-additivity]] (2), [[def-hh-coxeter-matrix-word-group-and-length]]).

[F11] The undirected Cayley graph has vertices $W$ and edges $\{g,gs\}$, while its directed labelled version has an arc $(g,s,gs)$ for each $g\in W$, $s\in S$ ([[def-cayley-graph]], [[def-directed-labelled-cayley-graph]]).

[F12] For a presentation, Davis's Cayley 2-complex attaches 2-cells along circuits of relators other than words $s$ or $s^2$; circuits are identified up to cyclic shift and reversal, and cells are attached equivariantly by the group (Davis, *The Geometry and Topology of Coxeter Groups*, §2.2, pp. 19–20). Thus the Coxeter relators $(st)^{m(s,t)}$ with distinct $s,t$ and finite $m(s,t)$ supply the 2-cells, while the involution relations $s^2$ do not add 2-cells.

[F13] In a finite rank-two Coxeter system the simple mirrors bound the fundamental sector of angle $\pi/m$ ([[thm-cg-finite-chamber-tiling-and-coset-face-identification]] (2)). Their reflections preserve the positive-definite plane form, and their product has determinant $1$ and trace $2\cos(2\pi/m)$, hence is a rotation by $\pm2\pi/m$ ([[lem-cg-reflection-form-invariance-and-rank-two-orders]] (2),(3)).

[F14] $B(e_s,e_s)=1$ ([[def-cg-real-coxeter-form-and-reflection]] (2)).

[F19] The simple reflection formula is $r_{e_s}(v)=v-\frac{2B(v,e_s)}{B(e_s,e_s)}e_s$ ([[def-cg-real-coxeter-form-and-reflection]] (3)).

[F20] The notation $r_s$ means $r_{e_s}$ for every $s\in S$ ([[def-cg-canonical-reflection-homomorphism]]).

[F21] The canonical reflection homomorphism satisfies $\rho(s)=r_s$ for every $s\in S$ ([[def-cg-canonical-reflection-homomorphism]] (1)).



[F15] For spherical $T,V$, the coset subsets meet exactly when $w^{-1}v\in W_TW_V$ ([[lem-cg-spherical-coset-inclusion-and-intersection]] (3)).

[F17] In the isometric gluing, $U\subseteq X$ is open exactly when $U\cap\iota_p(C_p)$ is relatively open in every cell image $\iota_p(C_p)$ ([[def-cg-abstract-isometric-polyhedral-gluing-and-chain-metric]], Definition (iii)).

[F18] The cell intersection condition says that images of cells indexed by spherical cosets meet exactly in the image of the face indexed by their intersection coset, and are disjoint when the cosets are disjoint ([[thm-cg-davis-complex-cell-incidence-and-stabilizers]] (1)).

## Proof

**Proof technique:** direct.

1.1 Fix a spherical $T$. If $T=\emptyset$, then $V_T=\{0\}$, $x_T=0$, and $C_T=\{0\}$, so the unique map from this point to the closed zero-ball is a homeomorphism and both boundaries are empty. Suppose $T\ne\emptyset$. Write $C_T=\{v:\ell_i(v)\ge0\ (i\in I)\}$ as in [F1], with $I$ finite and $\ell_i(0)>0$. For a unit vector $u\in V_T$, at least one index satisfies $\ell_i(u)<\ell_i(0)$: otherwise $\ell_i(su)=\ell_i(0)+s(\ell_i(u)-\ell_i(0))\ge0$ for every $s\ge0$ and every $i$, so the whole ray would lie in the bounded set $C_T$. Along that ray, each index with $\ell_i(u)<\ell_i(0)$ imposes $s\le\ell_i(0)/(\ell_i(0)-\ell_i(u))$, while the other indices impose no upper bound. Thus $C_T\cap\{su:s\ge0\}=\{su:0\le s\le t_{\max}(u)\}$, with $t_{\max}(u)$ the finite positive minimum in clause (1). [given, F1, algebra]

1.2 By [F18], the closed cells $vW_V$ and $wW_T$ meet exactly when the spherical coset subsets $vW_V$ and $wW_T$ meet. By [F15], this is equivalent to $w^{-1}v\in W_TW_V$, hence to $v\in wW_TW_V$; conversely, $v=wab$ with $a\in W_T$, $b\in W_V$ gives the common element $wa=vb^{-1}$. There are finitely many spherical $V\subseteq S$, and each product $wW_TW_V$ is finite because spherical $W_T,W_V$ are finite. Thus only finitely many cells meet a fixed closed cell, proving closure finiteness (C). The gluing definition [F17] tests openness cellwise; by taking complements this is exactly condition (W) in [F6]. [F6, F9, F15, F17, F18, algebra]

2.1 Assume $T\ne\emptyset$. For each unit $u_0$, let $I_0=\{i:\ell_i(u_0)<\ell_i(0)\}$, which is nonempty by [step 1.1]. Every $f_i(u)=\ell_i(0)/(\ell_i(0)-\ell_i(u))$ for $i\in I_0$ is continuous near $u_0$. If $i\notin I_0$ and $\ell_i(u_0)>\ell_i(0)$, that index remains inactive near $u_0$; if $\ell_i(u_0)=\ell_i(0)$, its value tends to $+\infty$ whenever it becomes active as $u\to u_0$. Choose $j\in I_0$; $f_j$ stays bounded on a sufficiently small neighborhood, so after shrinking that neighborhood no newly active equality index can attain the minimum. There $t_{\max}=\min_{i\in I_0}f_i$, proving continuity at $u_0$. By [F1], choose $\epsilon>0$ with $\{v:\|v\|_B<\epsilon\}\subset C_T$ and $R<\infty$ with $C_T\subseteq\{v:\|v\|_B\le R\}$. The ray description gives $\epsilon\le t_{\max}(u)\le R$ for every unit $u$. [step 1.1, F1, algebra]

3.1 For $T\ne\emptyset$, define $\theta:\overline B(0,1)\to C_T$ by $\theta(0)=0$ and, for $y\ne0$, $t=\|y\|_B$, $u=y/t$, and $\theta(y)=t\,t_{\max}(u)u$. The ray description shows $\theta(y)\in C_T$. If $x=su\in C_T$ with $u$ unit, then $\psi(x)=(s/t_{\max}(u))u$ and $\theta(\psi(x))=x$; conversely, for $y=tu\ne0$, $\psi(\theta(y))=tu=y$, and both composites fix $0$. Away from $0$ both maps are continuous by continuity of $t_{\max}$; at $0$, $\|\theta(y)\|_B\le R\|y\|_B$ and $\|\psi(x)\|_B\le\|x\|_B/\epsilon$, so both are continuous there. Thus $\theta$ and the stated $\psi$ are mutually inverse homeomorphisms by [F5]. For $s<t_{\max}(u)$ all inequalities defining $C_T$ are strict at $su$, so continuity of the finite affine list makes $su$ an interior point; at $s=t_{\max}(u)$ at least one inequality is equality, and for every larger $s$ that inequality fails. Thus the boundary consists exactly of $t_{\max}(u)u$ for unit $u$, and $\psi$ maps it onto the unit sphere. [step 1.1, step 2.1, F1, F5, algebra]

4.1 For nonempty $T$, the map $\theta$ of [step 3.1], followed by the cell chart $C_T\to C_{wW_T}\subseteq\Sigma$ of [F3], is a characteristic map for the cell indexed by $wW_T$. Its interior maps homeomorphically onto the open cell by [F16]. If $x$ is a boundary point, some defining inequality $\ell_i(x)$ is $0$, since otherwise the finite affine list stays positive in a neighborhood of $x$; then $C_T\cap\{\ell_i=0\}$ is a face: if a strict convex combination has $\ell_i$-value $0$, both endpoint values are $0$. It is proper because $\ell_i(0)>0$; by [F2] it is a lower-dimensional cell. Thus the boundary maps into the preceding skeleton. For $T=\emptyset$, the one-point chart is the characteristic map of a zero-cell, with empty boundary. [step 3.1, F1, F2, F3, F4, F5, F16]

5.1 Each cell boundary is a union of finitely many proper nonempty faces by [F2], and each such face is indexed by $w'W_U$ with $U\subsetneq T$, so it lies in the preceding skeleton since its dimension is $|U|<|T|$. For a zero-cell this is the empty union. The zero-skeleton is the discrete set $W$. Attach the characteristic disks of [step 4.1] in increasing dimension; every attaching map has finite boundary support, and the weak attachment topology agrees with the gluing topology from [F17] because it tests openness on closed cell images, and each characteristic map is a homeomorphism onto its closed cell by [F3],[F5]. Since $S$ is finite, there are finitely many dimensions. The choice-free attachment lemma [F8] therefore gives the asserted CW structure with the given cells and topology, including its Hausdorff condition. [step 4.1, step 1.2, F2, F3, F4, F5, F6, F7, F8, F17]

6.1 The zero-cells are $wW_\emptyset=\{w\}$ by [F3] and [F9], so $\Sigma^0=W$. Each one-cell is $wW_{\{s\}}=\{w,ws\}$ and its boundary vertices are $w$ and $ws$; its label is $s$, giving exactly the undirected Cayley graph by [F11]. Now fix distinct $s,t$ and put $m=m(s,t)$. By [F10], $W_{\{s,t\}}$ has presentation $\langle s,t\mid s^2=t^2=1,(st)^m=1\rangle$ if $m<\infty$, and omits the last relation if $m=\infty$. When $m<\infty$, writing $r=st$ and using $srs=r^{-1}$ reduces every word to $r^k$ or $sr^k$, $0\le k<m$, so the group has at most $2m$ elements. The map to the group of pairs $D_m=\mathbb Z/m\times\{\pm1\}$ with multiplication $(a,\epsilon)(b,\delta)=(a+\epsilon b,\epsilon\delta)$, $s\mapsto(0,-1)$ and $t\mapsto(1,-1)$, is onto: these images are involutions and their product $(-1,1)$ generates the rotation subgroup; hence $|D_m|=2m$ gives $|W_{\{s,t\}}|=2m$. When $m=\infty$, the maps $s(x)=-x$, $t(x)=2-x$ on $\mathbb R$ satisfy the involution relations and make $st$ a nonzero translation, so $W_{\{s,t\}}$ is infinite. Hence $\{s,t\}$ is spherical exactly when $m<\infty$. For finite $m$, the boundary walk of $wW_{\{s,t\}}$ alternates the $s$- and $t$-edges and has vertices $w(st)^k$ and $w(st)^ks$ ($0\le k<m$), all distinct by the dihedral normal forms; it closes at $w(st)^m=w$. By [F2] these alternating rank-one cosets are edges of the cell, so the closed walk through all $2m$ vertices is its polygon boundary. Translates of this circuit are indexed by the left cosets $wW_{\{s,t\}}$, since its vertices are exactly that coset and its cyclic order is the unique alternating circuit in the rank-two Cayley graph. By [F12], the 2-cells are precisely these circuits: the relators $(st)^m$ attach polygonal cells and the relators $s^2$ add none. [step 5.1, F2, F3, F7, F9, F10, F11, F12, F16, algebra]

7.1 For $T=\{s\}$, $v_s^{(T)}=e_s$ because $B(e_s,e_s)=1$, so $x_T=d_se_s$ by [F2]; since $r_s=r_{e_s}$ by [F20] and $\rho(s)=r_s$ by [F21], [F19] gives $sx_T=-d_se_s$ and $C_T=[-d_se_s,d_se_s]$. For $T=\{s,t\}$ with finite $m$, [step 6.1] gives the $2m$-gon. By [F13], its generating mirrors bound a sector of angle $\pi/m$; equality $d_s=d_t$ means $x_T$ is equidistant from those walls, hence lies on their angle bisector. The product of the two wall reflections rotates by $2\pi/m$, so the dihedral orbit has arguments $\theta+2k\pi/m$ and $-\theta+2k\pi/m$ with $\theta=\pi/(2m)$, which are the $2m$ equally spaced arguments $\theta+j\pi/m$; their convex hull is regular. Finally, cells of dimension at least $3$ correspond exactly to spherical subsets of size at least $3$ by [F2], [F3], and [F16]; any such subset contains a spherical three-element subset because its parabolic subgroup is finite by [F9], and every spherical three-element subset gives a three-dimensional cell. Thus there are no cells of dimension $\ge3$ exactly when no three-element spherical subset exists. [step 6.1, F2, F3, F9, F13, F14, F16, F19, F20, F21, algebra]

8.1 Clauses (1)–(4) follow from [step 3.1] with [step 4.1], [step 1.2] with [step 5.1], [step 6.1], and [step 7.1], respectively. No Choice is used: each exit parameter is a minimum over a specified nonempty finite set, and all cell maps and attachments are explicitly supplied; the finite-dimensional disk identifications require only finite-dimensional Euclidean bases. [step 3.1, step 4.1, step 1.2, step 5.1, step 6.1, step 7.1, F8, given] ∎
