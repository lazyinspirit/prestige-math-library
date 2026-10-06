---
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    delegated_by: "owner via frontier-38-owner-30 build dispatch"
    scope: "Historical completed Step 5 full authored item reading and mathematical acceptance; exact historical raw bytes differ from current only by publication status and verification metadata. Direct prerequisite interfaces checked; no recursive audit of supplier proofs."
    evidence:
      - "research/frontier-38-owner-30-reader-17.md"
      - "research/frontier-38-owner-30-alpha-batch-17-5a.md"
      - "research/frontier-38-owner-30-step5-hash-17-post-5a.json"
    content_sha256: "94d6566c32a4b8fa2c407f5c9b642d7813a35fef0384328ea39d8f41221d27de"
id: lem-markov-moves-preserve-oriented-closure-isotopy
kind: lemma
title: "Markov moves preserve the oriented closure up to isotopy"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-markov-conjugation-and-stabilization-moves, def-closure-of-a-geometric-braid,
       def-elementary-geometric-half-twist, def-braid-group-by-the-artin-presentation,
       lem-every-geometric-braid-is-braid-isotopic-to-a-smooth-braid,
       lem-each-oriented-reidemeister-move-is-realized-by-ambient-isotopy,
       lem-a-smooth-isotopy-of-compact-embedded-submanifolds-extends-to-an-ambient-isotopy,
       lem-closure-depends-only-on-the-braid-isotopy-class,
       lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space, def-countable-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Birman and Brendle, Braids: A Survey, Handbook of Knot Theory chapter, author manuscript; section 2.3 and Figures 3-12, printed pp. 17-19"
      url: "https://www.math.columbia.edu/~jb/Handbook-21.pdf"
    - title: "Traczyk, A new proof of Markov's braid theorem, Banach Center Publications 42 (1998), 409-419; section 1"
      url: "https://web.archive.org/web/20231206161844if_/http://matwbn.icm.edu.pl/ksiazki/bcp/bcp42/bcp42127.pdf"
---

## Statement

Assume $\mathrm{AC}_\omega$. If $\beta'$ is obtained from $\beta$ by a
conjugation or by a stabilization or destabilization in the sense of
[[def-markov-conjugation-and-stabilization-moves]], then
$\widehat{\beta'}$ and $\widehat\beta$ are equivalent oriented links.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, braids $\beta\in B_n$ and $\beta'$ obtained from $\beta$ by one Markov move, and the closure construction of [[def-closure-of-a-geometric-braid]] with axis $A$.

[F1] Conjugation replaces $\beta$ by $\gamma\beta\gamma^{-1}\in B_n$, and stabilization replaces $\beta$ by the product of the standard inclusion of $\beta$ with $\sigma_n^{\pm1}\in B_{n+1}$, the new strand being added on the right; $\sigma_n$ is the elementary geometric half twist of the last two strands ([[def-markov-conjugation-and-stabilization-moves]], [[def-elementary-geometric-half-twist]]).

[F2] The closure of a braid based at $Q$ meets every page in exactly $n$ points; its components are the cycles of the endpoint permutation and its orientation runs from height $0$ to height $1$ along the strands ([[def-closure-of-a-geometric-braid]]).

[F3] Every geometric braid is braid-isotopic to a smooth braid, and the isotopy may be taken arbitrarily close to it and fixing the endpoints; $\mathrm{AC}_\omega$ is assumed there ([[lem-every-geometric-braid-is-braid-isotopic-to-a-smooth-braid]]).

[F4] Each oriented Reidemeister move, in particular the elimination of a kink, is realized by an ambient isotopy supported in a small ball ([[lem-each-oriented-reidemeister-move-is-realized-by-ambient-isotopy]]).


[F5] Under countable choice a smooth isotopy of a compact boundaryless manifold through embeddings extends to ambient isotopy, with support in a prescribed neighbourhood of the compact trace ([[lem-a-smooth-isotopy-of-compact-embedded-submanifolds-extends-to-an-ambient-isotopy]]).

[F6] Under countable choice changing a representative by endpoint-fixed braid isotopy leaves its oriented closure equivalent; smooth families with endpoint collars glue on one circle per permutation cycle ([[lem-closure-depends-only-on-the-braid-isotopy-class]]).


[F7] A smooth Euclidean map with nonsingular derivative has a smooth local inverse without choice; a previously constructed global inverse is therefore smooth wherever the derivative is nonsingular ([[lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space]]).

## Proof

**Proof technique:** direct.

1.1 **An explicit conjugation homotopy of configuration loops.** Use smooth representatives of $\beta,\gamma$ with flat endpoint collars by [F3], [F6]. For $0\le u\le1$, let $c_u$ be the initial path of $\gamma$ from its starting configuration $Q$ to $\gamma(u)$, parametrized smoothly as $\gamma(u\psi(t))$, where $\psi$ is increasing and constant on endpoint collars. Form the free configuration loop, in chronological order, $c_u^{-1}\cdot\beta\cdot c_u$, with the three pieces each occupying one third of the page parameter. It is based at the moving configuration $\gamma(u)$ and is smooth jointly in $u$ and page parameter, including seams, by these collars. Label the moving basepoints by the original strands of $\gamma$. Then a point labelled $j$ follows $c_u^{-1}$ to $q_j$, follows $\beta$ to $q_{\pi_\beta(j)}$, and follows $c_u$ to the moving point labelled $\pi_\beta(j)$. Thus the permutation cycles are the fixed cycles of $\pi_\beta$ in these transported labels. Concatenate each cycle on $\mathbb R/k\mathbb Z$ and apply the fixed $\varphi$ of [F2]. This gives a smooth isotopy of the compact union of cycle circles through embedded oriented closed $n$-braids: points are distinct at every page, and the page parameter has positive derivative. At $u=0$ it is $\beta$ with constant pauses; at $u=1$ its chronological pieces are $\gamma^{-1},\beta,\gamma$, so its actual product is $\gamma\beta\gamma^{-1}$. The pauses and different positive piece durations are endpoint-fixed reparametrizations covered by [F6]. Make the $u$ parameter constant near its ends and apply [F5] to the compact cycle embedding family. Its trace lies in $S^3\setminus A$, so choose support away from $A$. This proves conjugation invariance by an actual ambient isotopy. For $n=0$ it is the identity of the empty link. No continuity in a discrete word variable is asserted. [F1, F2, F3, F5, F6, construct]

1.2 **Put the stabilization in a fixed-framing local ball.** Here $n\ge1$ by [F1]. Choose a finite elementary-word representative of $\beta$ in which all old strands lie in a central disk cluster, with a short empty word interval at the cutting page; [F6] permits its endpoint collars. Before adding a point, match the original $n$-point base configuration to the first $n$ points of the $(n+1)$-point configuration. The increasing real affine map $x\mapsto\frac{n+1}{n+2}x-\frac{1}{4(n+2)}$ does so: substituting $q_j^{(n)}=(2j-n-1)/(4(n+1))$ gives $q_j^{(n+1)}=(2j-n-2)/(4(n+2))$. Extend its isotopy on the central cluster to the disk by finitely many small affine changes multiplied by a smooth cutoff equal to one on the cluster and zero outside a larger disk. Choose each increment with derivative norm of its displacement below one, just as in the point-motion construction below. This preserves order, carries each old half twist to its corresponding first-$n$ half twist, and introduces no rotation or framing twist. The resulting cycle family gives an ambient closure isotopy by [F5]. It therefore justifies the geometric realization of the standard inclusion, although the two canonical basepoint tuples differ. The added last point is initially to the right of this cluster. Move it along the real corridor beyond the cluster to $w=1-\varepsilon$, with $0<\varepsilon$ small, keeping all old strands fixed. Such point motions and the following collar motions are smooth disk isotopies: subdivide a compact collision-free point path into finitely many small displacements $v$ and use $x\mapsto x+\chi(x)v$, with support missing the other points and $\|D\chi\|_\infty|v|<1$. Its inverse exists uniquely by contraction of $x\mapsto y-\chi(x)v$, The explicit iterates have geometrically decreasing successive differences, so their limit exists uniquely. Its Jacobian determinant is $1+D\chi\cdot v>0$; [F7] makes that inverse smooth. Thus it is an orientation-preserving diffeomorphism equal to identity off its disk. Apply these motions independently of page angle for the added point, and periodically in the empty cutting-page interval for the selected last old strand. Move that old strand's short collar to $w=1-2\varepsilon$, retaining its connections to the old braid outside the interval along a narrow real corridor disjoint from the other strands. Transport the elementary last-pair half twist with this motion. Its connecting arc remains the real interval between these two points; an arc-fixing transverse compression in its disk collar makes its supporting strip arbitrarily thin. These are isotopies from the identity, not an arbitrary page-preserving change of framing, and their closed cycle families extend ambiently by [F5]; their endpoints therefore have the same oriented closures as the original fixed-product stabilization and old braid. The new point's whole constant closed strand and the relocated old collar now lie near $a_0=(0,1)\in A$. Indeed the fixed formula [F2] is $z=\sqrt{1-|w|^2}e^{2\pi it}$: if $|w-1|<3\varepsilon$, then $|z|^2<6\varepsilon$. Choose the half-twist strip inside this region and a short cutting-page interval, so a small ball at $a_0$ contains the entire added meridian circle, the last-pair crossing and only this one old-strand collar. All other old strands stay in the remote cluster. In local coordinates $(\operatorname{Re}z,\operatorname{Im}z,\operatorname{Im}w)$ with $\operatorname{Re}w=\sqrt{1-|z|^2-(\operatorname{Im}w)^2}$, the new constant point gives the planar circle $|z|=\sqrt{2\varepsilon-\varepsilon^2}$; the old collar is a short outer arc at radius $\sqrt{4\varepsilon-4\varepsilon^2}$. The one transported half twist joins this circle to that arc by one signed crossing strip. Recovering the crossing from this local Seifert picture is exactly the oriented Reidemeister-I curl, positive or negative according to $\sigma_n^{\pm1}$. Unwind it by [F4], leaving the old arc and the rest of the link. This local isotopy is in $S^3$; it may pass through the fixed axis inside this ball, as required when page count changes. The fixed disk formula introduces no extra full twist. This proves stabilization invariance for both signs and does not assume the original new basepoint was near the axis. [F1, F2, F3, F4, F5, F6, F7, construct]

2.1 **Inverses and finite sequences.** Run step 1.2 backwards for destabilization and step 1.1 backwards for inverse conjugation. A finite composition of these ambient isotopies preserves the oriented link. Countable choice is used only by the smoothing and isotopy-extension suppliers [F3], [F5], [F6]; the local Reidemeister model is [F4]. [F3, F4, F5, F6, step 1.1, step 1.2] ∎
