---
id: ex-cg-sphere-coxeter-complex-of-a3-and-a-parabolic-residue
kind: example
title: "The Coxeter complex of $A_3$: a triangulation of the sphere and the residue of a proper parabolic"
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 17
deps: [cor-symmetric-group-has-factorial-cardinality-again, cor-trigonometric-parity-and-pythagorean-identity, def-admissible-regular-parametrized-surface-patch, def-cg-canonical-reflection-homomorphism, def-cg-coxeter-diagram-components-and-finite-type, def-cg-finite-reflection-arrangement-and-spherical-chambers, def-cg-real-coxeter-form-and-reflection, def-definiteness-inertia-and-signature-data-over-the-reals, def-first-fundamental-form-and-surface-area-density, def-generated-subgroup, def-hh-coxeter-matrix-word-group-and-length, def-inversions-inversion-number-and-sign, def-surface-area-and-scalar-surface-integral-of-a-patch, lem-cg-reflection-form-invariance-and-rank-two-orders, lem-integral-additivity-over-a-content-zero-almost-partition, lem-cg-reflection-representation-descends-and-root-norms, thm-cg-finite-chamber-tiling-and-coset-face-identification, thm-cg-finite-parabolic-longest-element-and-opposition, thm-cg-finite-type-positive-definite-criterion, thm-change-of-variables-for-compact-jordan-sets, thm-ftc-second-part, thm-hh-parabolic-minimal-representatives-and-length-additivity, thm-jordan-boundary-criterion, thm-jordan-fubini-by-sections, thm-quarter-turn-values-and-shift-formulas, thm-sine-and-cosine-derivatives, thm-sine-cosine-signs-monotonicity-and-ranges, thm-lagrange, thm-chain-rule-for-total-derivatives, thm-euclidean-inverse-function-theorem, thm-heine-borel-rn, thm-compactness-under-continuous-maps, thm-sine-cosine-zero-sets-and-fundamental-period, thm-mean-value-inequality-for-total-derivatives, thm-continuous-functions-on-compact-jordan-sets-are-integrable]
aliases: []
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Michael W. Davis, The Geometry and Topology of Coxeter Groups (Princeton University Press 2008, first-edition author manuscript PDF)"
      url: "https://people.math.osu.edu/davis.12/davisbook.pdf"
      locator: "Chapter 6, section 6.6 (Theorem 6.6.3) and section 6.8 (the cosine matrix and dihedral angles of a spherical simplex, printed pp. 96-102); Appendix D.2, Examples D.2.1 (printed pp. 442-443)"
    - title: "Jean Michel, Lectures on Coxeter groups (Beijing lecture notes, April-May 2014, author-hosted PDF)"
      url: "https://webusers.imj-prg.fr/~jean.michel/papiers/cox.pdf"
      locator: "Section 5, Proposition 5.4(i) (the order of s_H s_H' equals pi divided by the angle of the walls, printed p. 7) and Proposition 5.8 (printed p. 9)"
verification:
  precheck: pass
---

## Example

Let $S=\{s_1,s_2,s_3\}$ with $m(s_i,s_i)=1$, $m(s_i,s_j)=3$ when $|i-j|=1$ and $m(s_i,s_j)=2$ when $|i-j|=2$ (type
$A_3$; thus $W\cong S_4$ and $|W|=24$), and let $\mathcal A$, $C$, the faces $\overline{C_I}$, the
sphere $S^2$, the coset face poset and the complex $\Sigma$ be as in
[[def-cg-finite-reflection-arrangement-and-spherical-chambers]] and
[[thm-cg-finite-chamber-tiling-and-coset-face-identification]]. Then:

**(i)** $B$ is positive definite and the spherical Coxeter complex is a triangulation of $S^2$ with
$24$ chambers (triangles), $36$ edges and $14$ vertices: the vertices are the cosets $wW_I$ with
$|I|=2$, namely the $4$ cosets $wW_{\{s_2,s_3\}}$, the $6$ cosets $wW_{\{s_1,s_3\}}$ and the $4$
cosets $wW_{\{s_1,s_2\}}$, where $W_{\{s_2,s_3\}}\cong W_{\{s_1,s_2\}}\cong S_3$ have order $6$ and
$W_{\{s_1,s_3\}}\cong\mathbb Z/2\times\mathbb Z/2$ has order $4$; the combinatorial Euler characteristic (vertices minus edges plus triangles) is
$14-36+24=2$.

**(ii)** The residue (equivalently the link) of a vertex of type $I$ with $|I|=2$ is the Coxeter
complex of the rank-two parabolic $W_I$: exactly $|W_I|$ chambers contain the vertex and the link is
a cycle with $|W_I|$ edges and $|W_I|$ vertices. For $I=\{s_2,s_3\}$ this is the hexagon of
$W_I\cong S_3$ of type $I_2(3)$, with six chambers and six edges through the vertex, and for
$I=\{s_1,s_3\}$ the $4$-cycle of $W_I\cong\mathbb Z/2\times\mathbb Z/2$ of type $I_2(2)$. The
residue of an edge ($|I|=1$) is two points, and the residue of a chamber is empty.

**(iii)** The fundamental spherical triangle $C\cap S^2$ has dihedral angles $\pi/3$, $\pi/3$ and
$\pi/2$, that is angle sum $7\pi/6$, and the $24$ chambers are its images under the $24$ isometries
$\rho(w)$, $w\in W$, of the sphere, so all chambers are congruent spherical triangles. Each has round surface area $\pi/6$, and their total area is $24(\pi/6)=4\pi$, the area of the round unit sphere.

**(iv)** $\ell(w_0)=|\Phi_+|=|T|=6$, $w_0^2=1$, $w_0$ corresponds to the reversal permutation of
$S_4$, and $\rho(w_0)e_{s_i}=-e_{s_{4-i}}$ for $i=1,2,3$; the permutation of
[[thm-cg-finite-parabolic-longest-element-and-opposition]] (1)(v) is $s_i\mapsto s_{4-i}$.

## Facts & Assumptions

**Given:** the three-element set $S=\{s_1,s_2,s_3\}$ with the Coxeter matrix of type $A_3$, the space $V=\mathbb R^S$ with the Coxeter form $B$, the presented group $W$ with length function $\ell$, the canonical reflection homomorphism $\rho$ with root system $\Phi=\Phi_+\sqcup\Phi_-$ and reflection set $T$, the dual action with chamber $C$, faces $\overline{C_I}$ and Tits cone, the arrangement $\mathcal A$, the unit sphere $S^2$, the coset face poset $\{wW_I:I\subsetneq S\}$ with $W_I=\langle s:s\in I\rangle$, and the triangulation $\Sigma$ of [[def-cg-finite-reflection-arrangement-and-spherical-chambers]] and [[thm-cg-finite-chamber-tiling-and-coset-face-identification]].

[F1] The Coxeter data of type $A_3$: $m(s_i,s_i)=1$, $m(s_i,s_j)=3$ for $|i-j|=1$, $m(s_i,s_j)=2$ for $|i-j|=2$; $B(e_{s_i},e_{s_j})=1$ for $i=j$, $-1/2$ for $|i-j|=1$ and $0$ for $|i-j|=2$; $\rho(s_i)=r_{e_{s_i}}$ with the reflection formula $r_a(v)=v-2B(v,a)a$ for $B(a,a)=1$, and every such $r_a$ is $B$-preserving; $\Phi=\{\rho(w)e_s:w\in W,\ s\in S\}$; every root has $B$-norm one ([[def-cg-real-coxeter-form-and-reflection]], [[lem-cg-reflection-form-invariance-and-rank-two-orders]] (2), [[def-cg-canonical-reflection-homomorphism]], [[def-hh-coxeter-matrix-word-group-and-length]], [[def-cg-coxeter-diagram-components-and-finite-type]], [[lem-cg-reflection-representation-descends-and-root-norms]] (3)).

[F2] Type $A$ identification: $s_i\mapsto(i-1\ i)$ extends to an isomorphism $\varphi:W\to S_4$ (the library's symmetric group on the letters $\{0,1,2,3\}$), and $\ell(w)=\operatorname{inv}(\varphi(w))$ for every $w\in W$ ([[thm-hh-parabolic-minimal-representatives-and-length-additivity]] (4), [[def-inversions-inversion-number-and-sign]]).

[F3] $|S_4|=4!=24$ ([[cor-symmetric-group-has-factorial-cardinality-again]]).

[F4] Parabolic subsystems: for $J\subseteq S$ one has $W_J=\{w\in W:S(w)\subseteq J\}$ with $S(w)$ the support, $(W_J,J)$ is a Coxeter system whose intrinsic length is the restriction of $\ell$, and $W_J\cap S=J$ ([[thm-hh-parabolic-minimal-representatives-and-length-additivity]] (1), (2)). Consequently: $W_{\{s_i\}}=\{1,s_i\}$ has order $2$; the restrictions to $\{s_2,s_3\}$ and $\{s_1,s_2\}$ are of type $A_2$, so by (4) applied with $n=3$ the groups $W_{\{s_2,s_3\}}$ and $W_{\{s_1,s_2\}}$ are isomorphic to $S_3$ of order $6$; and $(s_1s_3)^2=1$ because $m(s_1,s_3)=2$, so $s_1s_3=s_3s_1$ and $W_{\{s_1,s_3\}}=\{1,s_1,s_3,s_1s_3\}$ has order $4$: the images of these four elements under [F2] are $1$, $(0\ 1)$, $(2\ 3)$ and $(0\ 1)(2\ 3)$, which are distinct.

[F5] The chamber tiling, the dual-basis description of the faces, the face dictionary and the triangulation: $V=\bigcup_{w\in W}wC$; for the $B$-dual basis $(v_s)_{s\in S}$ one has $C=\{\sum_s\lambda_sv_s:\lambda_s\ge0\}$ and $\overline{C_I}=\{\sum_{s\notin I}\lambda_sv_s:\lambda_s\ge0\}$; the assignment $wW_I\mapsto w\overline{C_I}$ is a bijection onto the proper faces with $wW_I=vW_J\iff w\overline{C_I}=v\overline{C_J}$ and $w\overline{C_I}\cap v\overline{C_J}=w\overline{C_{I\cup J\cup S(v^{-1}w)}}$; the dihedral angle between $H_{e_s}$ and $H_{e_t}$ is $\pi/m(s,t)$ in the sense of the tangent sector computed in [[thm-cg-finite-chamber-tiling-and-coset-face-identification]] (2); and $\Sigma=\{w\overline{C_I}\cap S^2:w\in W,\ I\subsetneq S\}$ is a finite simplicial complex whose faces have the vertices $\rho(w)v_s/\lVert v_s\rVert_B$ $(s\notin I)$, with pairwise disjoint relative interiors covering $S^2$ ([[thm-cg-finite-chamber-tiling-and-coset-face-identification]] (1)-(4)).

[F6] Since $W$ is finite, there is a unique $w_0\in W$ with $w_0\cdot C=-C$, equivalently with $N(w_0)=\Phi_+$; it satisfies $\ell(w_0)=|N(w_0)|=|\Phi_+|=|T|$, $w_0^2=1$, is the unique element of maximal length, and there is a permutation $\sigma$ of $S$ with $\rho(w_0)e_s=-e_{\sigma(s)}$, equivalently $w_0sw_0=\sigma(s)$, for every $s\in S$ ([[thm-cg-finite-parabolic-longest-element-and-opposition]] (1)(i)-(v)).

[F7] Finiteness criterion: $W$ is finite if and only if $B$ is positive definite ([[thm-cg-finite-type-positive-definite-criterion]] (1), [[def-definiteness-inertia-and-signature-data-over-the-reals]]).

[F8] A regular patch is parametrized on a compact Jordan region, and its area is the integral of the Gram density $J_\psi=\sqrt{\det(\langle\psi_i,\psi_j\rangle)_{i,j=1}^2}$ ([[def-admissible-regular-parametrized-surface-patch]], [[def-first-fundamental-form-and-surface-area-density]], [[def-surface-area-and-scalar-surface-integral-of-a-patch]]). Injective $C^1$ changes of coordinates with invertible derivative obey compact-Jordan change of variables ([[thm-change-of-variables-for-compact-jordan-sets]]). Bounded sets with content-zero boundary are Jordan measurable; integrals of bounded continuous densities add over finitely many Jordan pieces with content-zero overlaps ([[thm-jordan-boundary-criterion]], [[lem-integral-additivity-over-a-content-zero-almost-partition]]).

[F9] Sine and cosine have their usual derivatives, Pythagorean identity, signs and endpoint values ([[thm-sine-and-cosine-derivatives]], [[cor-trigonometric-parity-and-pythagorean-identity]], [[thm-sine-cosine-signs-monotonicity-and-ranges]], [[thm-quarter-turn-values-and-shift-formulas]]). Jordan-Fubini and the second fundamental theorem evaluate rectangular integrals ([[thm-jordan-fubini-by-sections]], [[thm-ftc-second-part]]).

[F10] For a subgroup $H$ of a finite group $G$, $[G:H]=|G|/|H|$ ([[thm-lagrange]]).

[F11] Totally differentiable Euclidean maps obey the chain rule, and a $C^1$ map between open subsets of $\mathbb R^2$ with invertible derivative has a local $C^1$ inverse ([[thm-chain-rule-for-total-derivatives]], [[thm-euclidean-inverse-function-theorem]]).

[F12] Closed bounded Euclidean sets are compact, and continuous real functions on nonempty compact sets attain their extrema ([[thm-heine-borel-rn]], [[thm-compactness-under-continuous-maps]]). The sine and cosine have fundamental period $2\pi$ and their stated zero sets ([[thm-sine-cosine-zero-sets-and-fundamental-period]]).

[F13] A bounded total derivative gives a Lipschitz bound on a convex open Euclidean domain ([[thm-mean-value-inequality-for-total-derivatives]]). A continuous density on a compact Jordan set is Riemann integrable ([[thm-continuous-functions-on-compact-jordan-sets-are-integrable]]).

## Verification

**Proof technique:** direct; coset counts, rank-two incidences, the type-$A$ length formula, and a choice-free finite-patch area calculation.

1.1 By [F2] and [F3] the group $W$ is finite, of order $24$; hence by [F7] the form $B$ is positive definite. [F2, F3, F7, algebra]

1.2 The subgroup orders of [F4] and [F10] give the coset counts $|W|/|W_I|$ for the proper subsets $I$: $|W|/|W_{\{s_i\}}|=12$ for the three one-element $I$, and for $|I|=2$ the values $24/6=4$, $24/4=6$ and $24/6=4$ for $I=\{s_2,s_3\}$, $\{s_1,s_3\}$ and $\{s_1,s_2\}$. [F3, F4, F10, algebra]

1.3 The faces containing $w\overline{C_I}$ are exactly $u\overline{C_K}$ with $u\in wW_I$ and $K\subseteq I$. If $u=wx$, $x\in W_I$, then $u\overline{C_I}=w\overline{C_I}$ because $x$ fixes this face pointwise by [F5]; and $K\subseteq I$ gives $\overline{C_I}\subseteq\overline{C_K}$. Conversely, if $w\overline{C_I}\subseteq u\overline{C_K}$, their intersection is $w\overline{C_I}$, so [F5] and the dual-basis formula give $I\cup K\cup S(u^{-1}w)=I$. Hence $K\subseteq I$ and $u^{-1}w\in W_I$ by [F4], equivalently $u\in wW_I$. [F4, F5, algebra]

1.4 Let $\sigma_0\in S_4$ be the reversal permutation $j\mapsto3-j$ $(j\in\{0,1,2,3\})$; it satisfies $\operatorname{inv}(\sigma_0)=6$ because every one of the six pairs $i<j$ is inverted, and $\operatorname{inv}(\tau)\le6$ for every $\tau\in S_4$ because an inversion set consists of pairs. Hence $\ell$ attains its maximum $6$ at $\varphi^{-1}(\sigma_0)$, and by [F6] the longest element $w_0$ is the unique element of maximal length; thus $w_0=\varphi^{-1}(\sigma_0)$ corresponds to the reversal permutation, and $\ell(w_0)=6=|\Phi_+|=|T|$ and $w_0^2=1$ by [F6]. [F2, F3, F6, algebra]

2.1 By [F5] the faces of $\Sigma$ are the cosets $wW_I$ with $I\subsetneq S$; a face of type $I$ is a spherical simplex on the $|S\setminus I|$ vertices $\rho(w)v_s/\lVert v_s\rVert_B$ ($s\notin I$). Hence the chambers (type $I=\emptyset$) number $|W|/|W_\emptyset|=24$, the edges (type $|I|=1$) number $3\cdot12=36$, and the vertices (type $|I|=2$, where the simplex is a single point) number $4+6+4=14$ by step 1.2; the alternating face count of this triangulation is $14-36+24=2$. Since $|S|=3$, [F5] realizes $\Sigma$ as a triangulation of $S^{2}$. This proves the combinatorial part of (i). [step 1.2, F5, algebra]

2.2 Let $I=\{s,t\}$ with $|I|=2$ and let $\sigma:=w\overline{C_I}$ be a vertex. By step 1.3 the chambers containing $\sigma$ are the chambers $uC$ with $u\in wW_I$, so there are $|W_I|$ of them; the edges containing $\sigma$ are the faces $u\overline{C_{\{r\}}}$ with $u\in wW_I$, $r\in I$ (step 1.3 with $K=\{r\}$), and two such faces coincide exactly when the cosets $uW_{\{r\}}$ and $u'W_{\{r'\}}$ coincide, by the dictionary $u\overline{C_{\{r\}}}=u'\overline{C_{\{r'\}}} \iff uW_{\{r\}}=u'W_{\{r'\}}$ of [F5]. Each chamber $uC$ through $\sigma$ contains exactly the two edges $u\overline{C_{\{s\}}}$ and $u\overline{C_{\{t\}}}$ through $\sigma$; and each edge $u\overline{C_{\{r\}}}$ through $\sigma$ lies, by step 1.3 with $I=\{r\}$, in exactly the two chambers $uC$ and $urC$ through $\sigma$. Counting the incidences between the chambers and the edges through $\sigma$ by chambers gives twice $|W_I|$, and by edges gives twice the number $e$ of edges; hence $e=|W_I|$. The chambers through $\sigma$ form a connected graph under the relation of sharing an edge, because $W_I=\langle s,t\rangle$ is generated by its two elements, so the consecutive chambers $uC$, $usC$ share $u\overline{C_{\{s\}}}$ and $uC$, $utC$ share $u\overline{C_{\{t\}}}$. A connected graph in which every vertex has degree $2$ is a cycle; hence the link of $\sigma$ is a cycle with $|W_I|$ edges and $|W_I|$ vertices, namely with $2\cdot m(s,t)$ of each. Its chamber edges are indexed by the coset $wW_I$ and its vertex edges by the cosets $uW_{\{r\}}$ ($u\in wW_I$, $r\in I$), which is the incidence structure of the Coxeter complex of the parabolic subsystem $(W_I,I)$: for $I=\{s_2,s_3\}$ (respectively $\{s_1,s_2\}$) this is the hexagon of $I_2(3)$ with $2\cdot3=6$ edges, and for $I=\{s_1,s_3\}$ the $4$-cycle of $I_2(2)$. The same count with $|I|=1$ shows that an edge lies in exactly $|W_I|=2$ chambers, so the link of an edge is two points, and the link of a chamber is empty. This proves (ii). [step 1.2, step 1.3, F4, F5, algebra]

2.3 To compute the round area, use orthonormal coordinates for $B$ (successively subtract projections from the three basis vectors and divide by their positive norms). Put $\Delta=\{(u,t):u,t\ge0,\ u+t\le1\}$, $p(u,t)=(1-u-t)v_{s_1}+uv_{s_2}+tv_{s_3}$ and $\psi=p/\lVert p\rVert_B$. The coefficient-sum functional $L(\sum_i a_iv_{s_i})=\sum_i a_i$ satisfies $L(p)=1$, so $p\ne0$ on a neighbourhood of $\Delta$; moreover radial projection is injective on the affine plane $L=1$, with inverse $x\mapsto x/L(x)$ where $L(x)>0$. Its derivative on that plane is injective: $D(p/\lVert p\rVert_B)h=0$ forces $h$ parallel to $p$, whereas $L(h)=0$ and $L(p)=1$. Thus $\psi$ is a regular patch for $C\cap S^2$. For every $w$, $\psi_w=\rho(w)\psi$ is a regular patch for its chamber, and $B$-invariance gives identical Gram matrices and therefore identical densities $J_{\psi_w}=J_\psi$. Let $a=\int_\Delta J_\psi$; each chamber has area $a$. [F1, F5, F8, F11, F13, step 1.1, algebra, construct]

3.1 The three vertices of the spherical triangle $C\cap S^2$ lie each on a pair of the walls $H_{e_{s_1}},H_{e_{s_2}},H_{e_{s_3}}$, so by the dihedral-angle clause of [F5] its interior angles are $\pi/m(s_1,s_2)=\pi/3$, $\pi/m(s_2,s_3)=\pi/3$ and $\pi/m(s_1,s_3)=\pi/2$, with sum $7\pi/6$; every chamber is $wC$ for a unique $w\in W$, and $\rho(w)$ preserves $B$ by [F1], hence is an isometry of $(V,B)$ carrying $C\cap S^2$ onto $wC\cap S^2$; so all $24$ chambers are congruent spherical triangles. [F1, F5, step 2.1, algebra]

3.2 Here is the finite chart comparison needed to sum these areas; no independence of an arbitrary surface presentation is assumed. In orthonormal coordinates let $\eta(\phi,\theta)=(\sin\phi\cos\theta,\sin\phi\sin\theta,\cos\phi)$ and $R_\varepsilon=[\varepsilon,\pi-\varepsilon]\times[\varepsilon,2\pi-\varepsilon]$, $0<\varepsilon<\pi/2$. This is an injective regular chart, with Gram matrix $\operatorname{diag}(1,\sin^2\phi)$, so $J_\eta=\sin\phi$. Cut $R_\varepsilon$ by the chamber walls and let $E_{w,\varepsilon}=\eta^{-1}(\psi_w(\Delta))\cap R_\varepsilon$, $D_{w,\varepsilon}=\psi_w^{-1}(\eta(R_\varepsilon))\cap\Delta$. These compact sets are Jordan: away from the latitude-chart seam and poles, great circles have nonzero tangent and their chart preimages are locally smooth arcs; in the radial charts the chamber edges are straight segments, and latitude and longitude boundaries have smooth arc preimages. A finite cover of each compact arc by regular curve pieces suffices. A $C^1$ curve on a neighbourhood of a compact interval has bounded derivative by [F12], and hence a Lipschitz bound $M$ there by [F13]; it has content zero in the plane: divide the interval into $n$ equal parts and cover each image by a square of side at most $2M$ times the part length (enlarging by $1/n^2$ if necessary); the total square area tends to zero. Finite unions and points have the same property, so the boundary criterion in [F8] applies, and the overlaps between different $E_{w,\varepsilon}$ have content zero by [F5]. On a neighbourhood of $D_{w,\varepsilon}$ the transition $h=\eta^{-1}\circ\psi_w$ is an injective $C^1$ coordinate change with invertible derivative: radial projection has the explicit inverse in step 2.3 and the latitude chart has a $C^1$ inverse away from its seam and poles: at each point choose two ambient coordinate components on which its derivative has nonzero determinant and apply [F11]. The remaining sphere coordinate is locally the fixed-sign function $\pm\sqrt{1-x_i^2-x_j^2}$, since it is nonzero there; thus the local inverse also applies to $\psi_w$, and the inverses agree on overlaps by injectivity of $\eta$. The chain rule [F11] yields $G_{\psi_w}=Dh^{\mathsf T}(G_\eta\circ h)Dh$, hence $J_{\psi_w}=(J_\eta\circ h)|\det Dh|$. Change of variables and finite additivity in [F8] now give $\sum_w\int_{D_{w,\varepsilon}}J_\psi=\sum_w\int_{E_{w,\varepsilon}}\sin\phi=\int_{R_\varepsilon}\sin\phi$. [F5, F8, F9, F11, F12, F13, step 2.3, algebra]

4.1 The omitted radial parameter sets approach the preimage of the single longitude seam and the two poles. That compact preimage has content zero: the seam lies on a great circle, whose radial preimage lies on a straight line, and each pole has at most one preimage. For any finite open rectangle cover of that set, compactness places all omitted points in the cover once $\varepsilon$ is sufficiently small: otherwise a compact subset outside the cover would meet arbitrarily narrow seam or pole strips despite its image avoiding the seam and poles. Since $J_\psi$ is continuous and bounded on $\Delta$, the omitted integral is bounded by its bound times the total area of such a cover, and so tends to zero. There are only $24$ patches, hence the left side in step 3.2 tends to $24a$. By [F9] the right side is $(2\pi-2\varepsilon)\int_\varepsilon^{\pi-\varepsilon}\sin\phi\,d\phi=(2\pi-2\varepsilon)2\cos\varepsilon$, tending to $4\pi$; the full latitude patch on $[0,\pi]\times[0,2\pi]$ itself has area $\int_0^{2\pi}\int_0^\pi\sin\phi\,d\phi\,d\theta=4\pi$, with its only seam identifications and rank failures on the parameter boundary. Thus the actual finite chamber sum equals the round sphere area, $24a=4\pi$, and $a=\pi/6$. Together with step 3.1 this proves (iii). All covers and coordinate choices are finite; no choice principle is used. [F8, F9, F12, F13, step 2.3, step 3.2, step 3.1, algebra]

5.1 Conjugating the adjacent transposition $(i-1\ i)$ by the reversal $\sigma_0$ gives $(\sigma_0(i-1)\ \sigma_0(i))=(4-i\ 3-i)$, which is the adjacent transposition $(3-i\ 4-i)$, that is $s_{4-i}$ under the identification of [F2]; hence $w_0s_iw_0=s_{4-i}$ for $i=1,2,3$. By [F6] the permutation $\sigma$ with $\rho(w_0)e_{s_i}=-e_{\sigma(s_i)}$ satisfies $\sigma(s_i)=s_{4-i}$, so $\rho(w_0)e_{s_i}=-e_{s_{4-i}}$. This proves (iv). [step 1.4, F2, F6, algebra] ∎

## Remarks

- **The area uses symmetry and finite patch integrals.** Steps 2.3, 3.2 and 4.1 prove the needed chart comparison locally and divide the sphere area by the $24$ congruent chambers. No spherical-excess theorem or examples-page supplier is used.

- **The residue is an incidence statement.** Clause (ii) identifies the residue of a face with the Coxeter complex of the parabolic subsystem through its incidence structure (chambers, edges and their containment). It does not construct an abstract simplicial complex separate from $\Sigma$ and does not assert a metric identification with a standard simplex.
