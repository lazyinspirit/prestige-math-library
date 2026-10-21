---
id: lem-puncturing-smooth-four-ball-surfaces-gives-genus-preserving-knot-cobordisms
kind: lemma
title: "Puncturing a smooth four-ball surface gives a genus-preserving knot cobordism"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - thm-isotopy-extension
  - def-locally-flat-proper-surface-and-concordance-collars
  - def-countable-choice
  - lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space
justified_by: []
proof_strategy: direct
axiom_use: "Countable choice is inherited only from compact isotopy extension. All local graph and round-shell operations use finite data."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Rasmussen, Khovanov homology and the slice genus"
      url: https://arxiv.org/pdf/math/0402131v1
      locator: "Section4.4, PDF/printed p12 uses the general-genus puncturing construction. The actual round-shell proof is supplied below."
dependency_level: 1
---

## Statement

Assume countable choice. Let $F\subset B^4\subset\mathbb R^4$ be a compact connected oriented smoothly properly embedded surface of genus $g$, with its supplied smooth boundary collar and oriented boundary the knot $K\subset S^3$. There is an orientation-preserving ambient diffeomorphism $\Psi:B^4\to B^4$ equal to the identity on a neighborhood of the outer boundary, and $0<\varepsilon<1$, such that $\Psi(F)\cap B^4_\varepsilon$ is exactly a flat two-disk in a plane through $0$. The surface $\Psi(F)\setminus\operatorname{int}B^4_\varepsilon$, in the explicitly round shell $B^4\setminus\operatorname{int}B^4_\varepsilon\cong S^3\times[0,1]$, is a connected smooth oriented knot cobordism between $K$ and a standard unknot, with genus $g$ and Euler characteristic $-2g$. Both boundary components have product collars in a shell identification fixing $K$ and the inner sphere. The ambient diffeomorphism $\Psi$ fixes a sufficiently small restriction of the supplied outer collar; the shell coordinates may be adjusted there to make that surface collar a product. No assertion about the complement of an arbitrary embedded four-ball is used.

## Facts & Assumptions

**Given:** Countable choice and the compact smoothly embedded surface in the unit Euclidean ball.

[F1] Compact embedding isotopies extend to ambient isotopies supported in any prescribed neighborhood of their tracks, under countable choice. The source may have boundary, and no endpoint stationarity is required by clause4 ([[thm-isotopy-extension]]).

[F2] Smooth proper surface charts, the supplied smooth boundary collar and its restrictions have the meaning specified in [[def-locally-flat-proper-surface-and-concordance-collars]].

[F3] The smooth Euclidean inverse function theorem holds without choice ([[lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space]]). Apply it to projection from a smooth surface chart for the local graph, and to the map sending a collar chart to its boundary parameter and radial coordinate for the collar reparametrization. At a boundary point use the smooth chart extension and restrict its inverse to the half-space.

[A1] [[def-countable-choice]] is the precise axiom inherited from [F1].

## Proof

1.1 **Move a genuine ambient ball by translations.** Choose an interior point $p$ of $F$ and a radius $r>0$ with $|p|+r<1$. The embeddings of the closed radius-$r$ ball $D$ centered at $p$ given by $x\mapsto x-tp$, $0\le t\le1$, stay in the interior of $B^4$: the norm of a point in their image is at most $(1-t)|p|+r<1$. Their compact track has a neighborhood with closure in the interior of $B^4$. By [F1] this isotopy extends ambiently in $\mathbb R^4$ with support in that neighborhood. Its time-one map fixes an ambient neighborhood of the outer boundary, preserves orientation and takes $p$ to $0$, while agreeing with translation on the whole ball $D$. Replace $F$ by its image. No conclusion about any nonround ball complement has been drawn. [A1, F1, F2, given, construct]

2.1 **Flatten the surface on an actual neighborhood of zero.** Let $P$ be the tangent plane of the new surface at $0$. Orthogonal projection to $P$ has invertible derivative on that tangent plane, so [F3] writes the surface as $(u,h(u))$ in $P\oplus P^\perp$, with $h(0)=0$ and $Dh(0)=0$. Choose one sufficiently small closed disk in the $u$ coordinates. Its graph is a compact embedded disk in the interior of $B^4$. The maps $u\mapsto(u,(1-t)h(u))$ are an isotopy of that compact disk, since projection to $u$ remains injective with injective differential. Choose the disk small enough that its entire compact track lies in the interior of $B^4$. Apply [F1] again there, obtaining an ambient orientation-preserving diffeomorphism that fixes an ambient neighborhood of the outer boundary and maps the full graph disk to the flat disk. The surface is now exactly $P$ near $0$: the disk interior is an open neighborhood of $0$ within the embedded surface. Its complement outside a smaller such graph disk is compact and misses $0$, so it has positive distance from $0$. Choose $\varepsilon>0$ smaller than that distance and the flat disk radius, and less than $1$. Then the surface meets the actual round ball $B^4_\varepsilon$ precisely in $P\cap B^4_\varepsilon$. Compose the two ambient diffeomorphisms to obtain $\Psi$. They fix a common ambient neighborhood $N$ of the outer boundary. For the supplied collar $c:K\times[0,\eta)\to F$, the open set $c^{-1}(N)$ contains $K\times\{0\}$. A finite cover of the compact circle by product neighborhoods gives one $0<\delta<\eta$ with $c(K\times[0,\delta])\subset N$. Thus $\Psi$ fixes this sufficiently small restriction of the supplied collar; no fixedness of its entire image is asserted. [F1, F2, F3, step 1.1, construct]

3.1 **Use only the concentric round shell.** The explicit map $(z,t)\mapsto(\varepsilon+(1-\varepsilon)t)z$ is a diffeomorphism $S^3\times[0,1]\to B^4\setminus\operatorname{int}B^4_\varepsilon$. The inner boundary curve is the great circle $P\cap S^3_\varepsilon$, hence a standard unknot after radial rescaling; an orthonormal basis of $P$ extends by finite linear algebra to an oriented orthonormal basis of $\mathbb R^4$, giving an orientation-preserving linear rotation identifying it with the usual equator. Near the inner sphere the surface is a radial product in $P$, so this radial shell coordinate already supplies its product collar. [F2, step 2.1, construct, algebra]

4.1 **Respect a restriction of the given outer surface collar.** For completeness the original outer surface collar need not be radial. In its smooth proper half-space chart the radial coordinate has nonzero inward derivative along a transverse collar direction. In a supplied parametrization of that collar, [F3] and compactness of its boundary circle therefore reparametrize it, for $r$ near $1$, as $(r f_r(\theta))$ with $f_r:S^1\hookrightarrow S^3$ a smooth embedding family and $f_1$ the original parametrized $K$. By [F1] on $S^3$, choose a smooth ambient family $G_r$ with $G_1=\mathrm{id}$ and $G_r f_1=f_r$. Choose a smooth function $h(r)$ equal to $r$ near $1$ and to $1$ near the inner edge of this thin outer collar, with values in the parameter interval where $G$ is defined. The fiberwise diffeomorphism $(z,r)\mapsto(G_{h(r)}^{-1}z,r)$ is the identity at $r=1$ and near that inner edge, so extends as the identity over the rest of the shell; near the outer end it takes the surface to the literal product $K\times[1-\delta,1]$. Thus adjust the shell identification by this map. It leaves the inner sphere and the boundary knot fixed, and changes neither genus nor the fixedness of a sufficiently small restriction of the supplied outer collar by $\Psi$ from steps 1.1–2.1. Removing one interior disk from a connected surface leaves it connected, retains genus and adds one boundary circle; its Euler characteristic decreases from $1-2g$ to $-2g$. Orient the resulting shell surface as a cobordism from the inner unknot to $K$. Reversing the interval and the surface orientation gives the reverse direction if desired; a half-turn reverses the orientation of the standard unknot. This proves the full genus, orientation and collared-end assertions under countable choice, using only an explicitly concentric shell. [F1, F2, F3, step 1.1, step 2.1, step 3.1, construct, algebra] ∎
