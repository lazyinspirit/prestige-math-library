---
id: cor-high-dimensional-smooth-poincare-for-homotopy-spheres-bounding-a-contractible-manifold
kind: corollary
title: Homotopy spheres of dimension at least five bounding a contractible manifold are standard spheres
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 19
deps: ["thm-smooth-simply-connected-h-cobordism-theorem", "thm-whitehead-theorem", "thm-relative-hurewicz-theorem", "thm-fully-relative-poincare-lefschetz-duality", "thm-excision-for-singular-homology", "thm-long-exact-sequence-of-a-pair-in-singular-homology", "cor-seifert-van-kampen-simply-connected-overlap", "thm-homotopy-equivalences-induce-isomorphisms-on-singular-homology", "thm-higher-dimensional-spheres-are-simply-connected", "cor-contractible-nonempty-spaces-have-the-homology-of-a-point", "thm-the-cohomology-universal-coefficient-sequence-splits-nonnaturally", "prop-first-stiefel-whitney-class-classifies-orientability", "def-homotopy-equivalence", "def-simply-connected", "def-compact-space", "def-countable-choice", "def-smooth-manifold", "def-smooth-embedding", "thm-collar-neighborhood-theorem", "def-smooth-collar-of-a-manifold-boundary", "def-axiom-of-choice", "lem-a-handle-decomposition-gives-a-relative-cw-complex", "thm-long-exact-sequence-of-relative-homotopy-groups", "thm-absolute-hurewicz-theorem", "thm-cellular-approximation-for-maps-of-cw-pairs", "thm-smooth-partitions-of-unity-exist-on-manifolds"]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
  - title: John Milnor, Lectures on the h-Cobordism Theorem (notes by L. Siebenmann and J. Sondow, Princeton University Press 1965; scanned edition with searchable text layer)
    url: https://www.maths.ed.ac.uk/~v1ranick/surgery/hcobord.pdf
    locator: Introduction and §§1--9, printed pp. 1--113; §9 Proposition A, printed pp. 110--113
  - title: Wolfgang Lück, A Basic Introduction to Surgery Theory (ICTP lecture notes, 27 October 2004; complete author text)
    url: https://him-lueck.uni-bonn.de/data/ictp.pdf
    locator: Chapter 1, printed pp. 1--22 (§§1.1--1.5)
verification:
  precheck: pass
---
## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $X$ be a compact
contractible smooth $(n+1)$-manifold with connected boundary $\Sigma=\partial X$,
where $n\ge5$ and $\Sigma$ is a homotopy $n$-sphere (equivalently by Hurewicz and Whitehead:
$\Sigma$ is simply connected and
$H_*(\Sigma;\mathbb Z)\cong H_*(S^n;\mathbb Z)$)
([[def-simply-connected]], [[thm-absolute-hurewicz-theorem]], [[thm-whitehead-theorem]]). Then $X$ is
diffeomorphic to the disk $D^{n+1}$, and $\Sigma$ is diffeomorphic to $S^n$.
Consequently a smooth homotopy $n$-sphere, $n\ge5$, that bounds a compact
contractible smooth manifold is diffeomorphic to the standard sphere, and no
exotic sphere in these dimensions bounds a contractible manifold.

## Facts & Assumptions

**Given:** A compact contractible smooth $(n+1)$-manifold $X$ with connected boundary $\Sigma=\partial X$ a homotopy $n$-sphere, $n\ge5$; the Axiom of Choice.

[F1] A nonempty contractible space has the singular homology of a point in every degree and coefficient group ([[cor-contractible-nonempty-spaces-have-the-homology-of-a-point]]), and the relative chain complexes are free, so the cohomological universal coefficient sequence computes $H^j$ from the homology ([[thm-the-cohomology-universal-coefficient-sequence-splits-nonnaturally]]).

[F2] Under AC, for every numerable real bundle $E\to B$ of rank $n\ge0$ over a CW complex or an admissible base (a paracompact Hausdorff CGWH space of CW homotopy type), $w_1(E)=0$ if and only if $E$ is orientable; applied to the tangent bundle, this says $X$ is orientable since $w_1(TX)\in H^1(X;\mathbb Z/2)=0$ ([[prop-first-stiefel-whitney-class-classifies-orientability]]).

[F3] If $X=U\cup V$ is a two-set van Kampen cover with path-connected members and simply connected overlap, then $\pi_1(U)*\pi_1(V)\cong\pi_1(X)$; for $n\ge2$ the sphere $S^n$ is simply connected ([[cor-seifert-van-kampen-simply-connected-overlap]], [[thm-higher-dimensional-spheres-are-simply-connected]], [[def-simply-connected]]).

[F4] Excision: if $Z\subseteq X$ has closure contained in the interior of $A$, then $H_*(X-Z,A-Z;G)\cong H_*(X,A;G)$ for all degrees and coefficients, and the long exact sequence of a pair computes relative groups from acyclic absolute groups ([[thm-excision-for-singular-homology]], [[thm-long-exact-sequence-of-a-pair-in-singular-homology]]).

[F5] For a compact $\mathbb Z$-oriented manifold whose boundary is a disjoint union of two closed boundary manifolds $A\sqcup B$, cap with the relative fundamental class gives $H^p(W,A;\mathbb Z)\cong H_{n+1-p}(W,B;\mathbb Z)$ ([[thm-fully-relative-poincare-lefschetz-duality]]).

[F6] Compact smooth manifolds have finite CW homotopy models ([[lem-a-handle-decomposition-gives-a-relative-cw-complex]]). On these models, the relative homotopy exact sequence and relative Hurewicz convert a homology equivalence between simply connected spaces into a weak equivalence, and Whitehead makes it a homotopy equivalence under the assumed AC ([[thm-long-exact-sequence-of-relative-homotopy-groups]]); an h-cobordism is a cobordism whose two face inclusions are homotopy equivalences ([[thm-homotopy-equivalences-induce-isomorphisms-on-singular-homology]], [[thm-relative-hurewicz-theorem]], [[thm-whitehead-theorem]], [[def-homotopy-equivalence]]).

[F7] Every smooth manifold with boundary has a smooth collar, and a disk glued to a product along its boundary sphere restores the disk: $D^{n+1}\cong(S^n\times[0,1])\cup_{S^n\times\{0\}}D^{n+1}$ ([[thm-collar-neighborhood-theorem]], [[def-smooth-collar-of-a-manifold-boundary]]).

[F8] The h-cobordism theorem identifies every h-cobordism over a closed simply connected $n$-manifold with the product for $n\ge5$ ([[thm-smooth-simply-connected-h-cobordism-theorem]]).

## Proof

**Proof technique:** direct.

1.1 Choose an embedded closed $(n+1)$-disk $D^{n+1}\subset\operatorname{int}X$ ([[def-smooth-embedding]]) and put $W:=X\setminus\operatorname{int}D^{n+1}$; then $W$ is a compact smooth $(n+1)$-manifold with boundary the disjoint union $\Sigma\sqcup S^n$ of the given boundary and the boundary sphere of the removed disk, and $W$ is connected: remove a point at the disk center, reroute paths locally around that point in dimension $n+1\ge6$, then radially retract the punctured disk onto its boundary. The same construction retains compactness and the smooth boundary collars. [F1, given]

1.2 The compact smooth $X$ has CW homotopy type by [F6], and a finite chart cover with a subordinate smooth partition ([[thm-smooth-partitions-of-unity-exist-on-manifolds]]) supplies a numeration of its tangent bundle. Thus [F2] applies to this bundle. $X$ is orientable: $H_*(X;\mathbb Z/2)=H_*(\mathrm{pt};\mathbb Z/2)$ by [F1], so the universal coefficient sequence gives $H^1(X;\mathbb Z/2)=0$ (both $\operatorname{Hom}(H_1(X),\mathbb Z/2)$ and $\operatorname{Ext}(H_0(X),\mathbb Z/2)$ vanish because $H_1(X)=0$ and $H_0(X)=\mathbb Z$ is free); hence $w_1(TX)=0$ and by [F2] the tangent bundle $TX$ is orientable, so $X$ carries an orientation and $W$ inherits the restricted orientation. [F1, F2, F6, given]

2.1 $\pi_1(W)=1$: use the open cover $U=X\setminus D_0$, $V=\operatorname{int}D^{n+1}$, where $D_0$ is a smaller concentric closed disk. Radial compression retracts $U$ onto $W$, $V$ is contractible and $U\cap V\cong S^n\times(a,1)$ is simply connected by [F3]. Both open members are path connected by step 1.1 and radial compression. Van Kampen therefore gives $\pi_1(X)\cong\pi_1(W)*\pi_1(D^{n+1})=\pi_1(W)$, and $\pi_1(X)=1$ because $X$ is contractible, so $\pi_1(W)=1$. [F3, given]

2.2 $H_*(W,S^n;\mathbb Z)=0$: let $D_0\subset\operatorname{int}D^{n+1}$ be a smaller closed concentric disk; then excision [F4] with $Z=D_0$ and $A=D^{n+1}$ gives $H_*(X-D_0,D^{n+1}-D_0;\mathbb Z)\cong H_*(X,D^{n+1};\mathbb Z)=0$, the last vanishing because $X$ and $D^{n+1}$ are acyclic and [F4] computes the pair by its long exact sequence; the pair $(X-D_0,D^{n+1}-D_0)$ deformation retracts through a collar onto $(W,S^n)$, so $H_*(W,S^n;\mathbb Z)=0$ as well. [F4, step 1.1]

3.1 $H_*(W,\Sigma;\mathbb Z)=0$: by step 1.2 the manifold $W$ is compact and $\mathbb Z$-oriented with boundary the disjoint union $\Sigma\sqcup S^n$, so [F5] with $A=S^n$, $B=\Sigma$ gives $H_k(W,\Sigma;\mathbb Z)\cong H^{n+1-k}(W,S^n;\mathbb Z)$; by the universal coefficient sequence [F1] applied to the relative chain complex and step 2.2, the group $H^{n+1-k}(W,S^n;\mathbb Z)$ vanishes, so $H_k(W,\Sigma;\mathbb Z)=0$. [F1, F5, step 1.2, step 2.2]

4.1 Both end inclusions induce homology isomorphisms by the pair sequences and steps 2.2–3.1. The sources and $W$ are nonempty simply connected. Transport each map to the finite CW models of [F6] and replace it by a cellular map under AC ([[thm-cellular-approximation-for-maps-of-cw-pairs]]). Its CW mapping-cylinder pair is $1$-connected and has zero relative integral homology. Inductively, if its relative homotopy groups below $j\ge2$ vanish, relative Hurewicz in [F6] identifies $\pi_j$ with the zero $H_j$; hence all relative groups vanish. The relative homotopy exact sequence makes the map a weak equivalence, and Whitehead yields a homotopy inverse. Transport it back to the original manifolds. Thus the two actual end inclusions are homotopy equivalences and $W$ is an h-cobordism. [F4, F6, step 2.1, step 2.2, step 3.1]

5.1 By the h-cobordism theorem [F8] applied to the h-cobordism $W$ with $\dim W=n+1\ge6$, there is a diffeomorphism $W\to S^n\times[0,1]$ that is the identity on $S^n$; its restriction to the other face is a diffeomorphism $\Sigma\to S^n$. Gluing the disk back along the collar by [F7] identifies $X$ with $(S^n\times[0,1])\cup_{S^n\times\{0\}}D^{n+1}\cong D^{n+1}$, so $X$ is diffeomorphic to the disk and $\Sigma$ to $S^n$. This is Milnor's Proposition A of §9. [F7, F8, step 4.1] ∎

The full AC hypothesis licenses the cited UCT, orientability, duality, Hurewicz and CW comparison results as stated. The h-cobordism theorem itself uses only countable choice; AC supplies it by restricting a choice function to a countable family. For the parenthetical homology-sphere criterion, absolute Hurewicz gives vanishing homotopy below n and a map $S^n\to\Sigma$ representing a generator of $H_n$; it is a homology equivalence, so the same CW comparison proves it is a homotopy equivalence.
