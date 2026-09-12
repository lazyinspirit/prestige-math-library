---
id: "thm-freudenthal-suspension-theorem"
kind: "theorem"
title: "Freudenthal suspension theorem"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["thm-homotopy-excision","def-adjunction-cone-suspension","thm-long-exact-sequence-of-relative-homotopy-groups","lem-cellular-mapping-cylinders-and-relative-cylinders-are-cw-complexes","lem-cw-quotients-and-collapse-of-a-contractible-subcomplex","lem-weak-equivalences-of-pairs-induce-isomorphisms-on-relative-homotopy","prop-higher-homotopy-basepoint-transport-and-moving-homotopies","lem-relative-cubical-disk-model-and-compression","lem-interval-exponential-law-and-quotient-homotopies"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Hatcher Corollary 4.24; May Chapter 11 §2
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch4.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

Let $(X,x_0)$ be a based CW complex that is $(n-1)$-connected, where $n\ge1$. Let $\Sigma X=C_+X\cup_X C_-X$ be its unreduced two-cone suspension, based at the lower cone point $p_-$. The suspension homomorphism
$$E:\pi_i(X,x_0)\longrightarrow\pi_{i+1}(\Sigma X,p_-),\qquad [h]\longmapsto[\Sigma h],$$
where the source sphere is also suspended by the two-cone construction and based at its lower cone point, is an isomorphism for $1\le i<2n-1$ and a surjection for $i=2n-1$. In degree zero both $\pi_0(X)$ and $\pi_1(\Sigma X)$ are singletons, so the corresponding pointed map is a bijection. The theorem and these precise basepoint conventions require no choice principle. No endpoint injectivity is asserted.

## Facts & Assumptions

[F1] [[thm-homotopy-excision]] applies to a CW union $A\cup B$ with nonempty path-connected subcomplex intersection $C$: if $(A,C)$ is $m$-connected and $(B,C)$ is $n$-connected, inclusion on relative homotopy is an isomorphism below $m+n$ and surjective at that positive endpoint. Its proof is choice-free, including pointed degree one.

[F2] [[def-adjunction-cone-suspension]] defines ordinary cones and the unreduced suspension, with their two distinct apices for nonempty $X$.

[F3] [[thm-long-exact-sequence-of-relative-homotopy-groups]] gives the natural pair sequence, with homomorphisms in the group ranges and exact pointed low terms.

[F4] [[lem-cellular-mapping-cylinders-and-relative-cylinders-are-cw-complexes]] proves the ordinary mapping cylinder of a cellular map is CW, with both endpoint spaces as subcomplexes, without choice. In particular it applies to the constant cellular map $X\to\{p\}$.

[F5] [[lem-cw-quotients-and-collapse-of-a-contractible-subcomplex]] proves that an ordinary CW quotient is CW and collapsing a nonempty contractible subcomplex is a homotopy and weak homotopy equivalence, at every basepoint. A contraction fixing its terminal point gives based inverse data there. It is choice-free.

[F6] [[lem-weak-equivalences-of-pairs-induce-isomorphisms-on-relative-homotopy]] gives a relative isomorphism in group degrees and a pointed bijection in degree one when both ambient and subspace maps are weak equivalences.

[F7] [[prop-higher-homotopy-basepoint-transport-and-moving-homotopies]] gives explicit isomorphisms under basepoint change and the formula for an unbased homotopy with its basepoint track. Hence a contractible space has trivial positive homotopy groups at every basepoint, even if its supplied contraction fixes only one point.

[F8] [[lem-relative-cubical-disk-model-and-compression]] identifies relative cubes with maps $(D^k,S^{k-1},b)\to(Y,A,a)$, preserving the distinguished-face boundary map under its specified boundary parametrization. The absolute group is the special case where the whole disk boundary is constant.

[F9] [[lem-interval-exponential-law-and-quotient-homotopies]] makes products of ordinary quotient maps with the time interval quotient, so the displayed cone and disk homotopies descend jointly in their parameters.

## Proof

**Given:** Fix $X,x_0,n$ as stated. Connectivity implies $X$ is nonempty and path connected. Write a cone point as $[x,t]_\pm$, where $t=0$ is its base $X$ and $t=1$ its apex $p_\pm$. No assumption that $x_0$ is a CW vertex is made.

1.1 The constant map $X\to\{p_+\}$ is cellular. Its ordinary mapping cylinder is $C_+X$, after reversing its cylinder coordinate; [F4] gives its CW structure with the base $X$ a subcomplex. Apply [F4] next to the cellular inclusion of that base into $C_+X$. Its mapping cylinder is $C_+X$ with one more cylinder on $X$, whose free end is a CW subcomplex. Collapse that entire free end by the first clause of [F5]. The quotient is $S=C_+X\cup_X C_-X$ with its ordinary two-cone topology, by the universal property of these quotients. The two cones are subcomplexes meeting precisely in $X$: their cells are their apices, the common base cells and the respective open prism cells. Thus [F1] applies to this CW union once the relative connectivities are checked. The maps $[x,t]_\pm\mapsto[x,t+s(1-t)]_\pm$ contract the cones to their apices and are continuous jointly by [F9]. By [F7] each cone has trivial positive homotopy groups at $x_0$ as well as at its apex. [F2, F4, F5, F7, F9, given]

2.1 In the sequence for $(C_\pm X,X,x_0)$, both positive absolute cone groups are trivial, so for every $k\ge2$ the boundary map $\partial:\pi_k(C_\pm X,X,x_0)\to\pi_{k-1}(X,x_0)$ is an isomorphism by [F3]. The degree-one relative set is a singleton too: its boundary lands in the single component of $X$, so all of it is the image of the trivial cone fundamental group by exactness. The inclusions are surjective on components. Since $\pi_j(X)=0$ for $1\le j\le n-1$, both cone pairs are $n$-connected, including $n=1$. Consequently [F1] gives an isomorphism $$e_k:\pi_k(C_+X,X,x_0)\longrightarrow\pi_k(S,C_-X,x_0)$$ for $1\le k<2n$ and a surjection for $k=2n$. In particular the relative target degree-one set is trivial. In the pair sequence for $(S,C_-X)$, exactness at $\pi_1(S)$ now shows that it is the image of $\pi_1(C_-X)=0$. Hence $S$ is simply connected: it is path connected since it is a union of two path-connected cones meeting in the nonempty $X$. This proves the stated degree-zero clause independently of any group structure on $\pi_0$. [F1, F3, step 1.1]

2.2 Let $Q=S/C_-X$ and $q:S\to Q$. The subcomplex $C_-X$ has the contraction in step 1.1, fixing $p_-$. Thus [F5] makes $q$ a weak equivalence at both $x_0$ and $p_-$, and its restriction $C_-X\to\{*\}$ is also a weak equivalence by that contraction and [F7]. Apply [F6] to this map of pairs. For $k\ge2$ it gives an isomorphism $$q_{\mathrm{rel}}:\pi_k(S,C_-X,x_0)\longrightarrow\pi_k(Q,\{*\},*)=\pi_k(Q,*).$$ The last equality is literal in the cubical definitions: every face is now required to map to $*$. Also $q_*:\pi_k(S,p_-)\to\pi_k(Q,*)$ is an isomorphism. These maps distinguish the equatorial basepoint $x_0$ used by excision from the apex basepoint $p_-$ promised for suspension; both have the same image in $Q$. [F5, F6, F7, F8, step 1.1]

3.1 For a based $h:S^i\to X$, set $k=i+1\ge2$ and view $D^k=C_+S^i$, with $S^i$ as boundary and its given point $b$ on that boundary. Use the boundary parametrization furnished by [F8]. The cone map $c_h:C_+S^i\to C_+X$ restricts to $h$ on the boundary and sends $b$ to $x_0$. It therefore represents a relative class with boundary $[h]$. By the isomorphism in step 2.1 this is exactly $\partial^{-1}[h]$. The map $q c_h$ is constant on the whole boundary, so its disk quotient represents $q_{\mathrm{rel}}e_k\partial^{-1}[h]$. To identify this with the promised suspended map, use the following explicit disk homotopy. In polar coordinates $z=ru$ in $D^k$ ($u\in S^i$), put $a_s=1-s/2$ and define $$G_s(ru)=\begin{cases}[h(u),1-r/a_s]_+,&0\le r\le a_s,\\ \big[h(u),2(r-a_s)\big]_-,&a_s\le r\le1.\end{cases}$$ At the common radius the two values agree at $h(u)\in X$. At $r=0$ the first value is the upper apex independent of $u$, and at $r=1$ the value is $[h(u),s]_-$ in the lower cone. The first formula has denominator at least $1/2$; the second region has $r\ge1/2$, so polar directions there have no center singularity. Quotient descent and closed pasting, with [F9] at the center and suspension identifications, prove joint continuity for $0\le s\le1$. For $s=0$ the map is $c_h$. For every $s$, $qG_s$ is constant on the boundary, so [F9] descends this homotopy to $D^k/S^{k-1}$. At $s=1$, its inner half is the upper cone on $h$ and its outer half is the lower cone on $h$, with the outside boundary collapsed to the lower apex. The radial identification of this disk quotient with $C_+S^i\cup_{S^i}C_-S^i$ is a homeomorphism: radius $0$ is the upper apex, radius $1/2$ the equator, and radius $1$ the lower apex, with inverse given by these two linear radial formulas. It is precisely the two-cone parametrization used to define $\Sigma h$. Therefore $$q_*[\Sigma h]=q_{\mathrm{rel}}e_k\partial^{-1}[h].$$ This equality uses the actual cone fillings and their quotient homotopy, not an unspecified identification of two abstract isomorphic groups. [F8, F9, step 2.1, step 2.2]

4.1 A based homotopy of $h$ suspends to a homotopy fixed at the lower apex, by [F9], so $E$ is well defined. Step 3.1 gives the identity of functions $$E=(q_*)^{-1}q_{\mathrm{rel}}e_{i+1}\partial^{-1}.$$ Each map on the right is a homomorphism for $i\ge1$ by [F1], [F3] and [F6]; the outside maps are isomorphisms by steps 2.1 and 2.2. This also proves that suspension is a homomorphism, including the possibly nonabelian source degree $i=1$. Hence it is an isomorphism when $i+1<2n$, namely $i<2n-1$, and a surjection when $i+1=2n$. Surjectivity follows by lifting through $q_*$, the inverse of $q_{\mathrm{rel}}$, and the endpoint-surjective $e_{i+1}$, then taking its boundary; injectivity below the endpoint follows through the same isomorphisms. No inference of endpoint injectivity occurs. [F1, F3, F6, F9, step 2.1, step 2.2, step 3.1]

5.1 For $n=1$ the only positive endpoint assertion is the surjection $\pi_1(X)\to\pi_2(S)$, and the positive isomorphism range is empty; step 2.1 covers degree zero and simple connectivity of $S$. If $X$ is a point its suspension is an interval with distinct apices, and the proof yields zero positive groups on both sides. Constant sphere maps suspend into the basepoint meridian interval and represent zero, also by step 4.1. Empty $X$ is excluded by the based connectivity hypothesis, so [F2]'s separate empty-space convention is never used. All cones, quotients, contractions, relative comparisons and the displayed homotopy are choice-free by their cited clauses. The proof uses neither the optional AC homotopy-inverse clause in homotopy-excision suppliers nor any later stable-homotopy theorem. This proves all stated ranges and conventions. [F1, F2, F3, F4, F5, F6, F7, F9, step 2.1, step 3.1, step 4.1] ∎
