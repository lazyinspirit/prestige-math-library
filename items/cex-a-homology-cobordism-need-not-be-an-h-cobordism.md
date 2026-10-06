---
id: cex-a-homology-cobordism-need-not-be-an-h-cobordism
kind: counterexample
title: A homology cobordism need not be an h-cobordism
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 5
deps:
- cor-homotopic-maps-induce-the-same-map-on-singular-homology
- cor-seifert-van-kampen-simply-connected-overlap
- def-countable-choice
- def-h-cobordism
- def-homotopy-equivalence
- def-relative-singular-homology
- lem-a-handle-decomposition-gives-a-relative-cw-complex
- lem-metastable-embedding-for-maps-from-a-compact-manifold
- lem-outgoing-boundary-of-a-handle-attachment-trades-the-disk-factors
- lem-positively-oriented-bases-are-path-connected
- prop-higher-homotopy-basepoint-transport-and-moving-homotopies
- prop-relative-transversality-preserves-a-map-on-a-closed-good-region
- thm-cellular-approximation-for-maps-of-cw-pairs
- thm-cellular-boundary-is-the-incidence-degree-matrix
- thm-cellular-homology-computes-singular-homology
- thm-fully-relative-poincare-lefschetz-duality
- thm-handle-duality-from-negating-a-morse-function
- thm-higher-dimensional-spheres-are-simply-connected
- thm-induced-fundamental-group-map-functoriality
- thm-long-exact-sequence-of-a-pair-in-singular-homology
- thm-mayer-vietoris-sequence-in-singular-homology
- thm-morse-functions-and-handle-decompositions-correspond
- thm-relative-whitney-approximation-for-manifold-valued-maps
- thm-seifert-van-kampen
- thm-the-cohomology-universal-coefficient-sequence-splits-nonnaturally
- thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold
- def-axiom-of-choice
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
  - title: Alexandra Du, Contractible 4-Manifolds (Oberlin College senior thesis, 2022; complete text)
    url: https://etd.ohiolink.edu/acprod/odb_etd/ws/send_file/send?accession=oberlin1655202551635123&disposition=inline
    locator: '§4, pp. 14--17 (Mazur manifolds: W_k is a 0-handle with a dotted 1-handle and a k-framed 2-handle, W_k × [0,1] ≅ D^5, M_k = ∂W_k is a homology 3-sphere, and π_1(M_{-3}) ≅ ⟨a,b | b^5 = a^7, b^4 = a^2ba^2⟩ is infinite and nonabelian)'
  - title: John Milnor, Lectures on the h-Cobordism Theorem (notes by L. Siebenmann and J. Sondow, Princeton University Press 1965; scanned edition with searchable text layer)
    url: https://www.maths.ed.ac.uk/~v1ranick/surgery/hcobord.pdf
    locator: Introduction and §1, printed pp. 1--10 (relative homology of an h-cobordism and the simple-connectivity hypothesis of the theorem)
verification:
  precheck: pass
---
## Statement refuted

**False claim:** every compact connected oriented smooth cobordism $W$ with boundary $\partial W=N\sqcup S$, where $N,S$ are closed connected manifolds and both inclusions induce integral homology isomorphisms, is an h-cobordism.

The counterexample below is a smooth $6$-dimensional homology cobordism with $S\cong S^5$, $\pi_1(S)=1$, and $\pi_1(W)\ne1$.

## Facts & Assumptions

**Given:** The Axiom of Choice ([[def-axiom-of-choice]]). Start with an oriented $6$-dimensional $0$-handle and attach two $1$-handles, with oriented core generators $a,b$. The two words to be used for $2$-handle attachment are $w_1=a^2b^{-3}$ and $w_2=a^2(b^{-1}a)^{-5}$. No acyclic manifold or nontrivial boundary group is assumed; both are established below.

[F1] A finite handle decomposition has the relative CW homotopy type with one cell for each handle; cellular chains compute integral singular homology and the cellular boundary is the incidence-degree matrix ([[lem-a-handle-decomposition-gives-a-relative-cw-complex]], [[thm-cellular-homology-computes-singular-homology]], [[thm-cellular-boundary-is-the-incidence-degree-matrix]]).

[F2] Continuous manifold-valued maps admit smooth approximation; a smooth map of a compact $1$-manifold into a boundaryless manifold of dimension at least $3$ is homotopic to an embedding. Relative transversality preserves a prescribed good region ([[thm-relative-whitney-approximation-for-manifold-valued-maps]], [[lem-metastable-embedding-for-maps-from-a-compact-manifold]], [[prop-relative-transversality-preserves-a-map-on-a-closed-good-region]]).

[F3] Positive bases of an oriented finite-dimensional real vector space are joined by smooth paths; a framed embedded submanifold has a tubular neighbourhood, and handle attachment exchanges the disk factors in its outgoing boundary ([[lem-positively-oriented-bases-are-path-connected]], [[thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold]], [[lem-outgoing-boundary-of-a-handle-attachment-trades-the-disk-factors]]).

[F4] Reversing an adapted Morse function replaces each index $k$ by $6-k$ and reverses the handle order; adapted Morse functions and finite handle decompositions correspond ([[thm-handle-duality-from-negating-a-morse-function]], [[thm-morse-functions-and-handle-decompositions-correspond]]). Cellular approximation for CW pairs applies relative to the boundary subcomplex ([[thm-cellular-approximation-for-maps-of-cw-pairs]]).

[F5] Van Kampen computes the fundamental group of a union; if its connected overlap is simply connected, the group is the free product of the two groups ([[thm-seifert-van-kampen]], [[cor-seifert-van-kampen-simply-connected-overlap]]). Spheres of dimension at least two are simply connected ([[thm-higher-dimensional-spheres-are-simply-connected]]).

[F6] Mayer--Vietoris and the long exact sequence of a pair are exact; homotopic maps induce the same homology map ([[thm-mayer-vietoris-sequence-in-singular-homology]], [[thm-long-exact-sequence-of-a-pair-in-singular-homology]], [[cor-homotopic-maps-induce-the-same-map-on-singular-homology]]).

[F7] The cohomology universal coefficient sequence applies to free integral chain complexes, and fully relative Poincare--Lefschetz duality identifies $H^p(W,S;\mathbb Z)$ with $H_{6-p}(W,N;\mathbb Z)$ for a compact oriented $W$ with $\partial W=N\sqcup S$ ([[thm-the-cohomology-universal-coefficient-sequence-splits-nonnaturally]], [[thm-fully-relative-poincare-lefschetz-duality]], [[def-relative-singular-homology]]).

[F8] A homotopy equivalence induces an isomorphism on fundamental groups, with the basepoint-track correction for moving homotopies; an h-cobordism requires both face inclusions to be homotopy equivalences ([[thm-induced-fundamental-group-map-functoriality]], [[prop-higher-homotopy-basepoint-transport-and-moving-homotopies]], [[def-homotopy-equivalence]], [[def-h-cobordism]]).

[A1] Full AC licenses the UCT and fully relative duality in [F7] and the arbitrary-CW cellular approximation in [F4]. Restricting a choice function to a countable family gives the countable choice used by approximation, transversality, tubular neighborhoods and handle/Morse comparison ([[def-axiom-of-choice]], [[def-countable-choice]]). The integer matrix and permutation calculations are finite.

## Counterexample

1.1 (The $1$-handlebody.) Let $Y$ be the $0$-handle with the two $1$-handles attached orientation-compatibly. It is compact, connected and oriented, and has the homotopy type of the wedge of two circles by [F1], so $\pi_1(Y)$ is freely generated by $a,b$. Its boundary is connected: each $1$-handle deletes two $5$-disks from the connected boundary and joins their boundary spheres by the connected cylinder $[-1,1]\times S^4$. The dual decomposition of $(Y,\partial Y)$ has only indices $5,6$ by [F4]. A relative CW pair with cells only in dimensions at least $3$ induces a fundamental-group isomorphism: cellular approximation moves loops into the boundary and homotopies of loops into the boundary because their domains have dimensions $1,2$. Hence $\pi_1(\partial Y)\to\pi_1(Y)$ is an isomorphism and the words $w_1,w_2$ can be represented by loops in $\partial Y$. [F1, F4, F5, given, A1]

2.1 (Embedded framed attaching loops.) Apply [F2] first to smooth representatives and then to their disjoint union $S^1\sqcup S^1\to\partial Y$. The target has dimension $5\ge2\cdot1+1$, so a homotopic embedding gives two disjoint embedded circles representing the words (up to basepoint conjugacy, which leaves their normal closure unchanged). Each oriented circle in the oriented $5$-manifold has an oriented rank-four normal bundle. Pull that bundle back to $[0,1]$ by cutting the circle at one point: finite successive local trivializations give a smooth oriented frame over the interval, arranged near the endpoints to be the pullbacks of one fixed seam trivialization up to constant matrices. The endpoint gluing is then a constant $A\in\mathrm{GL}^+(4,\mathbb R)$. By [F3] join the identity to $A^{-1}$ by a smooth path, made constant near its endpoints, and multiply the interval frame by that path. The adjusted frames agree under endpoint gluing and are smooth across the seam, giving a global framing. Tubular neighbourhoods supply disjoint attaching regions $S^1\times D^4$, so attach two orientation-compatible $2$-handles to obtain a compact oriented smooth $6$-manifold $X$. [F2, F3, step 1.1, construct, A1]

3.1 (Boundary connectedness and group.) Removing the two circle cores from $\partial Y$ leaves it path connected: a path between two points can be perturbed relative to endpoints to be transverse to those circles, and $1+1<5$ forces the perturbed path to miss them. Radially pushing the punctured normal $4$-disks outward shows that deleting the interiors of small tubular neighbourhoods also leaves a connected complement. Each $2$-handle replaces $S^1\times D^4$ by the connected $D^2\times S^3$, glued along the connected $S^1\times S^3$; hence $N=\partial X$ is connected. It is a closed smooth $5$-manifold. The dual decomposition of $(X,N)$ has indices $4,5,6$, so the same relative cellular-approximation argument as in step 1.1 gives $\pi_1(N)\cong\pi_1(X)$. [F2, F3, F4, step 1.1, step 2.1, A1]

3.2 (Acyclicity.) By [F1], $X$ has one $0$-cell, two $1$-cells and two $2$-cells with attaching words $w_1,w_2$. Traversing a letter contributes its signed exponent to the incidence degree on the corresponding $1$-cell; the exponent vectors are $(2,-3)$ for $w_1$ and $(-3,5)$ for $w_2$, since $2-5=-3$ for the exponent of $a$ in $w_2$. Thus the cellular chain complex is $0\to\mathbb Z^2\xrightarrow{d_2}\mathbb Z^2\xrightarrow{0}\mathbb Z\to0$, with $d_2=\begin{pmatrix}2&-3\\-3&5\end{pmatrix}$. Its determinant is $10-9=1$ and its integral inverse is $\begin{pmatrix}5&3\\3&2\end{pmatrix}$. Consequently $H_0(X;\mathbb Z)=\mathbb Z$ and $\widetilde H_j(X;\mathbb Z)=0$ for every $j$. [F1, step 2.1, algebra]

4.1 (A nontrivial fundamental group.) Van Kampen gives $\pi_1(X)=\langle a,b\mid a^2b^{-3}=1,\ a^2(b^{-1}a)^{-5}=1\rangle$. Map $a$ to $(12)(34)$ and $b$ to $(135)$ in the permutation group on five letters, composing right to left. Then $a^2=b^3=1$, and direct composition gives $b^{-1}a=(12534)$, of order $5$, so both relators map to the identity. This defines a homomorphism from $\pi_1(X)$ whose value on $a$ is nonidentity, proving $\pi_1(X)\ne1$; step 3.1 also gives $\pi_1(N)\ne1$. [F5, step 2.1, step 3.1, construct, algebra]

4.2 (Puncturing and the open cover.) Choose one interior coordinate disk $j:B^6\hookrightarrow\operatorname{int}X$, let $D=j(B^6)$ and $S=\partial D\cong S^5$, and put $W=X\setminus\operatorname{int}D$. It is a compact oriented smooth manifold with boundary $N\sqcup S$. Set $D_0=j(\{|x|\le1/2\})$, $U=X\setminus D_0$, $V=\operatorname{int}D$. These are open in $X$, cover it, and overlap in $j(\{1/2<|x|<1\})\cong S^5\times(1/2,1)$. The overlap retracts onto its radius-$3/4$ sphere, and $U$ strongly deformation retracts onto $W$ by pushing radius $r$ to $(1-t)r+t$ on $1/2<r\le1$ and fixing $W$. The radius-$3/4$ sphere inclusion and $S$ inclusion in $U$ are homotopic by interpolating radii. The open ball $V$ contracts radially to its centre. The reduced degree-zero Mayer--Vietoris sequence, with connected overlap, connected $V$ and connected $X$, gives $\widetilde H_0(U)=0$; since $U$ is a manifold it is locally path connected and therefore path connected, as is $W$. [F6, step 3.1, step 3.2, construct]

5.1 (The sphere end is a homology equivalence.) For $j\ge1$, the Mayer--Vietoris map $H_j(U\cap V)\to H_j(U)\oplus H_j(V)$ is an isomorphism because both adjacent positive-degree groups of $X$ vanish by step 3.2 and $H_j(V)=0$. Via the radial homotopies in step 4.2 this is exactly the inclusion-induced map $H_j(S;\mathbb Z)\to H_j(W;\mathbb Z)$. In degree zero it is an isomorphism since $S,W$ are nonempty and connected. The long exact sequence of $(W,S)$ therefore gives $H_j(W,S;\mathbb Z)=0$ for all $j\ge0$. [F6, step 3.2, step 4.2]

6.1 (The other end is a homology equivalence.) The relative singular chain complex is free over $\mathbb Z$ (its basis is the singular simplices not lying wholly in $S$). Its homology vanishes by step 5.1, so the universal coefficient sequence in [F7] has zero Hom and Ext terms and gives $H^p(W,S;\mathbb Z)=0$ for every $p$. Duality with $\partial W=N\sqcup S$ then gives $H_j(W,N;\mathbb Z)=H^{6-j}(W,S;\mathbb Z)=0$ for $0\le j\le6$; for $j>6$, apply the Morse/handle correspondence of [F4] to the compact triad $(W;N,S)$ and the CW comparison of [F1]: its relative cells have indices at most $6$, so those higher relative homology groups also vanish. Thus the long exact sequence of $(W,N)$ makes its inclusion an integral homology isomorphism in every degree. [F1, F4, F6, F7, step 4.2, step 5.1]

7.1 (Failure of the h-cobordism condition.) In the cover of step 4.2, $V$ is contractible and $U\cap V\simeq S^5$ is simply connected; van Kampen gives $\pi_1(U)\cong\pi_1(X)$. The radial deformation retraction identifies $\pi_1(W)\cong\pi_1(U)\ne1$ by step 4.1. But $\pi_1(S)=\pi_1(S^5)=1$ by [F5], so $S\hookrightarrow W$ cannot be a homotopy equivalence by [F8]. Both end inclusions are integral homology isomorphisms by steps 5.1 and 6.1, yet one fails the defining homotopy-equivalence condition. Hence $W$ is a homology cobordism which is not an h-cobordism, refuting the claim. [F5, F8, step 4.1, step 4.2, step 5.1, step 6.1] ∎

## Remarks

The four-dimensional Mazur route is a conditional variant only. If a compact contractible smooth $4$-manifold $Z$ is supplied whose boundary has nontrivial fundamental group, then puncturing an interior $4$-disk gives a homology cobordism from that boundary to $S^3$ which is not an h-cobordism, by the same Mayer--Vietoris, duality and van Kampen arguments. Du §4 discusses Mazur manifolds and such boundary-group presentations. The required contractibility and boundary-group calculation are not proved locally here; no Mazur datum is used as a prerequisite or as evidence for the counterexample above. The explicit six-dimensional construction supplies the generic claim without an additional Kirby or Wirtinger calculation.
