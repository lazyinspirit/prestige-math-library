---
id: "thm-fully-relative-poincare-lefschetz-duality"
kind: "theorem"
title: "Fully relative Poincaré–Lefschetz duality"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["thm-poincare-lefschetz-duality","def-relative-cap-product","thm-excision-for-singular-homology","thm-five-lemma-for-a-morphism-of-long-exact-sequences","def-axiom-of-choice","thm-topological-collaring-for-manifold-boundaries","def-relative-cup-product","thm-excision-for-singular-cohomology","thm-long-exact-sequence-of-a-pair-in-singular-homology","thm-long-exact-sequence-of-a-pair-in-singular-cohomology","thm-homotopic-maps-induce-equal-maps-in-singular-cohomology","cor-homotopic-maps-induce-the-same-map-on-singular-homology","lem-a-collar-identifies-boundary-local-homology-with-the-pair-fundamental-class","lem-compatible-local-orientation-classes-exist-over-compact-subsets","thm-cap-product-boundary-identity","prop-cap-product-naturality-and-projection-formula"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Hatcher, Algebraic Topology, Theorem 3.43, pp.254–255
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch3.pdf
    - title: Miller, Lectures on Algebraic Topology, Theorem 37.1
      url: https://math.mit.edu/~hrm/papers/notes-905.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

Assume AC. Let $M$ be a compact $R$-oriented $n$-manifold with boundary $D$, where $R$ is commutative unital. Suppose $D=A\cup B$, where $A,B$ are compact $(n-1)$-manifolds with common boundary $C=\partial A=\partial B=A\cap B$. Cap with the relative fundamental class gives an isomorphism
$$H^p(M,A;R)\xrightarrow{\sim}H_{n-p}(M,B;R),\qquad a\longmapsto a\cap[M,D]$$
for every integer $p$. The relative cap uses the compatible collar replacement proved below. Either piece or their intersection may be empty. AC is inherited from Poincaré–Lefschetz duality, with no additional choice principle used in the replacement.

## Facts & Assumptions

[F1] [[thm-poincare-lefschetz-duality]] gives the actual cap isomorphisms $H^k(X,\partial X;R)\to H_{m-k}(X;R)$ and $H^k(X;R)\to H_{m-k}(X,\partial X;R)$ for compact oriented $m$-manifolds.

[F2] [[def-relative-cap-product]] constructs the quotient-chain relative cap and its descent. [[def-relative-cup-product]] proves the chain and cochain equivalence from quotienting by the sum of two open-member subcomplexes to quotienting by chains on their union, including explicit operators $1-P=\partial E+E\partial$ that preserve the union.

[F3] [[thm-excision-for-singular-homology]] and [[thm-excision-for-singular-cohomology]] give the pair restriction isomorphisms under the closed-subset-in-interior hypothesis.

[F4] [[thm-five-lemma-for-a-morphism-of-long-exact-sequences]] applies to the displayed exact windows.

[F5] [[thm-long-exact-sequence-of-a-pair-in-singular-homology]] and [[thm-long-exact-sequence-of-a-pair-in-singular-cohomology]] give the pair sequences. The latter's proof constructs connecting cocycles by extension and proves exactness element by element for the short exact cochain sequence.

[F6] [[thm-topological-collaring-for-manifold-boundaries]] supplies collars of $C$ in $A$ and in $B$ and the compact boundary manifold $D$ of $M$.

[F7] [[thm-homotopic-maps-induce-equal-maps-in-singular-cohomology]] and [[cor-homotopic-maps-induce-the-same-map-on-singular-homology]] imply that the collar retractions give absolute homology and cohomology isomorphisms.

[F8] [[lem-a-collar-identifies-boundary-local-homology-with-the-pair-fundamental-class]] proves $\partial[M,D]=[D]$ and characterizes relative fundamental classes by their orientation restrictions on a compact collar core.

[F9] [[thm-cap-product-boundary-identity]] supplies the cap boundary sign. [[prop-cap-product-naturality-and-projection-formula]] proves naturality already on chains; the same equality passes to relative quotients whenever the indicated subspaces are preserved.

[F10] [[def-axiom-of-choice]] is assumed for the atlas and universal-coefficient uses inherited through [F1].

[F11] [[lem-compatible-local-orientation-classes-exist-over-compact-subsets]] gives the unique compact-support orientation class on a boundaryless manifold and injectivity of its restrictions to all points of the compact support.

## Proof

**Given:** The manifolds, decomposition, coefficients and orientation in the statement. Write $z=[M,D]$. The orientation on $D$ is that of [F8]. Since $B\setminus C=D\setminus A$ and $A\setminus C=D\setminus B$ are open in $D$ (both pieces are compact and hence closed), they have the restricted orientation; these are the orientations on the interiors of $B,A$. If $A$ or $B$ is empty, the assertion is exactly one of [F1]'s two maps. Empty $D$ and dimension zero are thereby included. Assume both pieces are nonempty below.

1.1 If $C\ne\varnothing$, use [F6] to glue its two collars into a map $c:C\times(-1,1)\to D$, with negative height on $A$ and positive height on $B$. This is a homeomorphism onto an open neighborhood of $C$. Indeed it is bijective onto the union of the two collar images, with their only intersection at $C$. The two halves are closed in the source and their images closed relative to the union, since $A,B$ are closed in $D$; the two continuous inverse maps therefore paste continuously. The image is open: each complement of a collar image is closed in its compact piece, hence closed in $D$, and their union is the complement of the glued image. Fix $0<\epsilon<1$ and set $U=A\cup c(C\times[0,\epsilon))$ and $V=B\cup c(C\times(-\epsilon,0])$. They are open in $D$: the complement of $U$ is the closed collar complement in $B$, and similarly for $V$. They cover $D$ and have intersection $W=c(C\times(-\epsilon,\epsilon))$. If $C=\varnothing$, the disjoint compact pieces are open in $D$; set $U=A,V=B,W=\varnothing$. [F6, given]

2.1 The space $U$ deformation retracts onto $A$ by replacing positive seam height $t$ with $(1-s)t$ and fixing $A$. This is continuous at height zero by the collar coordinates, and outside the attached strip it is the identity. Likewise $V$ retracts onto $B$. Denote the latter retraction by $r$. If $C\ne\varnothing$, set $C_\epsilon=c(C\times[0,\epsilon))\subset B$. The retraction and its homotopy send $W$ into $W$, with image $C_\epsilon$ at the end, so $(V,W)$ retracts onto $(B,C_\epsilon)$. The inclusion $C\to C_\epsilon$ is also a deformation retract. For $C=\varnothing$, take $C_\epsilon=\varnothing$ and all these maps are identities. By [F7], the pair sequences [F5] and [F4], the inclusions induce isomorphisms on relative homology and cohomology for $(M,A)\to(M,U)$, $(M,B)\to(M,V)$, $(B,C)\to(B,C_\epsilon)$ and $(B,C_\epsilon)\to(V,W)$. The maps of pair sequences commute directly on inclusion/quotient chains and restriction cochains; their connectors commute by lifting the same representative. Thus the five-lemma applications have their required naturality. [F4, F5, F7, step 1.1]

2.2 There is a short exact cochain sequence $$0\to C^*(M,D;R)\to C^*(M,U;R)\to C^*(D,U;R)\to0.$$ The last map is restriction. A cochain on $D$ vanishing on $U$ extends by zero on the other simplices of $M$ and still vanishes on $U$, proving surjectivity in every degree. Its kernel is precisely the cochains vanishing on $D$. The resulting cohomology sequence is exact, with connector $[\gamma]\mapsto[\delta\widetilde\gamma]$: two extensions differ by a cochain vanishing on $D$, so they give the same relative class; changing $\gamma$ by a coboundary and extending its primitive also changes that class by zero. Exactness at the middle term follows by subtracting an extended primitive when the restriction is a coboundary. At the right term, a connector that bounds allows subtracting the relative primitive from an extension to make it closed. At the left term, a relative cocycle bounding in $C^*(M,U)$ is the connector of that primitive's restriction. These are all three positions, including the initial zero-degree injection because negative cochains vanish. Thus no unproved triple-sequence theorem is needed. [F5, step 1.1]

3.1 Put $Q=C_*(M;R)/(C_*(U;R)+C_*(V;R))$. Since $U,V$ are open in their union $D$, [F2] gives the canonical chain equivalence $q:Q\to C_*(M,D;R)$ and its dual equivalence. Let $\widehat z=q_*^{-1}z$. The relative cap of [F2] gives $S_p:H^p(M,U;R)\to H_{n-p}(M,V;R)$ by $a\mapsto a\cap\widehat z$. Transport this map through the isomorphisms of step 2.1 to define the claimed map on $(M,A)$ and $(M,B)$. This is a compatible neighborhood replacement, rather than an assertion that arbitrary closed pieces form an open triad. If smaller positive collar widths are used with the same collars, inclusions commute with $q$ and with the cap formula, so the transported map is unchanged. For two choices of collars, there are common smaller neighborhoods of this form: the compact sets $A,B$ have open neighborhoods equal to the intersections of the respective $U$'s and $V$'s in $D$, and compactness of $C$ puts sufficiently thin strips of the first collar inside these neighborhoods. This last assertion follows from finitely many product neighborhoods of points of $C\times\{0\}$, taking the minimum of their finitely many positive widths. The same comparison through these inclusions shows independence of the collars. [F2, step 1.1, step 2.1]

3.2 Restriction gives an isomorphism $H^k(D,U)\to H^k(V,W)$ by [F3]: excise the closed set $D\setminus V$, which is contained in the open $U$. Together with step 2.1 this identifies $H^k(D,U)$ with $H^k(B,C)$. The analogous inclusion on relative homology is an isomorphism by the same excision. The class of $[D]$ in $H_{n-1}(D,U)$ corresponds under this homology comparison to a class $b_V$ in $H_{n-1}(V,W)$. We prove that its image $d=r_*b_V$ in $H_{n-1}(B,C_\epsilon)$ is the image of $[B,C]$. Put $N=B\setminus C$ and $K=B\setminus C_\epsilon$. The collar makes $C_\epsilon$ open in $B$, so $K$ is compact and lies in the boundaryless manifold $N$. Excision of the closed set $C$ inside $C_\epsilon$ identifies $H_{n-1}(B,C_\epsilon)$ with $H_{n-1}(N,N\setminus K)$. At every $x\in K$, the retraction is the identity near $x$ and the preceding excision comparison is induced by inclusion, so $d$ restricts to the prescribed local generator inherited from $[D]$. By the pointwise injectivity and realization in [F11], $d$ is the unique orientation class supported on $K$. The image of $[B,C]$ has the same description: [F8] gives its prescribed generator at every point of $N$, hence at every point of $K$, and the same excision square transports those values. Therefore the two classes in $H_{n-1}(B,C_\epsilon)$ agree. If $C$ is empty, $K=B$ and the identical argument compares the absolute classes. [F3, F8, F11, step 1.1, step 2.1]

4.1 It follows that $$E_k:H^k(D,U)\longrightarrow H_{n-1-k}(V),\qquad [\gamma]\longmapsto[(\gamma|_V)\cap b_V]$$ is an isomorphism. More precisely, first pass by step 3.2 to $H^k(V,W)$, then restrict to $H^k(B,C_\epsilon)$ and to $H^k(B,C)$. Step 2.1 proves that these are isomorphisms; the last class caps with $[B,C]$ by [F1] to give an isomorphism to $H_{n-1-k}(B)$. Include $B$ into $V$, an isomorphism on homology by step 2.1. This composite equals $E_k$. Indeed $r$ and inclusion are inverse on the relative groups, $r_*b_V$ is the image of $[B,C]$ by step 3.2, and the relative version of the literal chain naturality identity [F9] identifies the two cap outputs after $r_*$. Since $r_*$ is an isomorphism on absolute homology, the outputs in $V$ agree. This also proves that the definition of $E_k$ is independent of all representatives. [F1, F2, F9, F10, step 2.1, step 3.2]

4.2 For use in the exact diagram, representatives can be chosen compatibly as follows. Start with a relative cycle $v$ for $z$, so $b=\partial v$ is a cycle in $D$ for $[D]$, by [F8]. Use the operator $E$ of [F2] for the open cover $U,V$ of $D$, and replace $v$ by $v-Eb$. Its boundary is $Pb=b-\partial Eb$, since $\partial b=0$, and lies in $C_*(U)+C_*(V)$. Thus it represents $\widehat z$ in $Q$. Write $Pb=b_U+b_V$ by assigning each simplex in both members to $U$ and each remaining simplex to its member. This is a specified linear splitting on the small simplex basis. Since $\partial b_U=-\partial b_V$ and the intersection of these simplex subcomplexes is $C_*(W)$, $b_V$ is a relative cycle of $(V,W)$ and represents precisely the excision class in step 3.2. In the rest of the proof use this adjusted $v$, so $\partial v=b_U+b_V$. [F2, F8, step 3.1, step 3.2]

5.1 Use step 2.2's exact five-term window $$H^{p-1}(D,U)\xrightarrow{\delta}H^p(M,D)\to H^p(M,U)\to H^p(D,U)\xrightarrow{\delta}H^{p+1}(M,D)$$ above the pair homology window $$H_{n-p}(V)\to H_{n-p}(M)\to H_{n-p}(M,V)\xrightarrow{(-1)^p\partial}H_{n-p-1}(V)\to H_{n-p-1}(M).$$ The five vertical maps are $E_{p-1},T_p,S_p,E_p,T_{p+1}$, where $T_k$ is cap with $z$ from [F1] for $M$. The first, second, fourth and fifth are isomorphisms by [F1] and step 4.1. Both rows are exact; the unit multiplying the homology connector leaves its kernel and image unchanged. [F1, F2, F5, F10, step 2.2, step 4.1]

6.1 All four squares commute using the adjusted cycle of step 4.2. A degree-$(p-1)$ cocycle $\gamma$ on $(D,U)$ extends to a cochain $\widetilde\gamma$ on $(M,U)$ as in step 2.2. The cap with $b_U$ is zero, because it vanishes on all simplices in $U$. Thus [F9] gives $$\delta\widetilde\gamma\cap v=\widetilde\gamma\cap b_V+(-1)^p\partial(\widetilde\gamma\cap v),$$ which proves $T_p\delta=i_*E_{p-1}$. Replacing $p$ by $p+1$ proves the last square. The second square compares the same cap chain in $M$ and modulo $V$, so commutes literally. For a cocycle $\varphi$ on $(M,U)$, [F9] gives $\partial(\varphi\cap v)=(-1)^p\varphi\cap b_V$, again because the $b_U$ term vanishes. Hence $(-1)^p\partial S_p=E_p\,\mathrm{res}$, the third square with precisely the chosen sign. For a negative source cochain degree these are the zero identities; all cap expressions of negative output degree are zero with the same boundary formula. [F2, F9, step 2.2, step 4.2, step 5.1]

7.1 The five lemma [F4] applied to steps 5.1–6.1 proves that $S_p$ is an isomorphism. Transporting through step 2.1 proves the claimed isomorphism of step 3.1. Empty pieces were handled in the Given paragraph; a disjoint decomposition with $C=\varnothing$ uses literal open pieces throughout. For the zero ring all groups and classes are zero. In dimension one the boundary pieces are zero-manifolds with empty common boundary and [F1] on each point is multiplication by its orientation unit. Empty $M$ and dimension zero reduce to the ordinary empty-boundary case. All integer degrees, in particular $p=0,n$, have already been included in the exact-window computation; ordinary degree-zero groups are used. Degenerate simplices stay in their declared subspaces under face restriction and the small-chain operators. The only AC use is [F10]'s inherited atlas and local UCT choices in [F1]. Two supplied collars, finitely many compact-neighborhood widths, the explicit small-chain operator and extension by zero require no further AC or selection of component orientations. [F1, F2, F4, F6, F8, F9, F10, step 2.1, step 3.1, step 5.1, step 6.1] ∎
