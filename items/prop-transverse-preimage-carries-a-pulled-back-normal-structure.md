---
id: prop-transverse-preimage-carries-a-pulled-back-normal-structure
kind: proposition
title: "Transverse preimages carry the pulled-back normal structure"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: ["def-disk-bundle-sphere-bundle-and-thom-space", "lem-transversality-is-equivalent-to-surjectivity-on-the-normal-quotient", "thm-transverse-preimage-theorem", "def-pullback-vector-bundle-and-pullback-section", "prop-normal-and-conormal-bundles-are-smooth-vector-bundles", "lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space", "def-smooth-function-on-a-relatively-open-subset-of-a-half-space", "def-neat-submanifold-of-a-manifold-with-boundary", "def-countable-choice"]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Stanford Math 215B notes, Lectures 14–15, Theorems 138–139"
      url: "https://web.stanford.edu/~lindrew/math215B.pdf"
      locator: "printed pp.44–46; collapse pullback, compact-support duality and Thom normalization"
    - title: "Lee, Introduction to Smooth Manifolds, tubular neighborhoods"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
      locator: "Tubular Neighborhoods; normal quotient identification"
---

## Statement

Let $E\to B$ be a smooth real vector bundle of rank $r$, let $\operatorname{Th}(E)$ be its Thom space and let $0_B\subset\operatorname{Th}(E)$ be the image of the zero section. Let $f:X\to\operatorname{Th}(E)$ be continuous and smooth on an open neighbourhood $W$ of $P=f^{-1}(0_B)$, with $f(W)$ contained in the smooth nonbasepoint stratum; write $f$ in a bundle chart of $E$ as $(g,h)$, with fibre coordinate $h$. Say that $f$ is **transverse to the zero section** when $dh_x$ is surjective for every $x\in P$. Then, assuming the countable-choice hypothesis $\mathrm{AC}_\omega$ ([[def-countable-choice]]) used only for the smooth normal-bundle structure of $P$ in $X$:

(i) If $X$ is boundaryless, $P$ is an embedded submanifold of $X$ of codimension $r$, with $T_xP=\ker dh_x$ for every $x\in P$;

(ii) In the boundaryless case, $df$ induces a specified smooth bundle isomorphism $\nu(P\subset X)\to (g|_P)^*E$, where $g|_P$ is the composite of $f|_P$ with the identification $0_B\cong B$, and a change of bundle chart acts on this isomorphism by the transition matrix;

For a general source, (i) and (ii) apply first to $P\cap\operatorname{Int}X$.

(iii) If $X$ has boundary, if $f|_{\partial X}$ is smooth near $P\cap\partial X$ and transverse to the zero section there as well, then $P$ is a neat embedded submanifold of $X$ with $\partial P=P\cap\partial X$, the tangent formula of (i) holds at boundary points, and the isomorphism of (ii) restricts over $\partial P$ to the corresponding isomorphism for $\partial P\subset\partial X$;

(iv) For every $r\ge0$, the image $0_B$ is closed in $\operatorname{Th}(E)$, so $P$ is closed in $X$ and compact whenever $X$ is compact. In rank zero, $\operatorname{Th}(E)=B_+$ with its disjoint basepoint, and $0_B=B$ is both closed and open; thus $P$ is clopen. Empty bases are included.

## Facts & Assumptions

**Given:** A smooth rank-$r$ bundle $E\to B$, and a map $f:X\to\operatorname{Th}(E)$ continuous and smooth with values in the nonbasepoint stratum near $P=f^{-1}(0_B)$, transverse to the zero section in the sense of the statement.

[F1] [[def-disk-bundle-sphere-bundle-and-thom-space]] identifies the nonbasepoint stratum of $\operatorname{Th}(E)$ with the total space $E$ by a diffeomorphism, and $0_B$ with the zero section.

[F2] [[lem-transversality-is-equivalent-to-surjectivity-on-the-normal-quotient]] identifies transversality to an embedded submanifold with surjectivity of the derivative onto the normal quotient.

[F3] [[thm-transverse-preimage-theorem]] makes the transverse preimage of an embedded submanifold an embedded submanifold of the stated codimension, with tangent space the inverse image of the target tangent space.

[F4] [[def-pullback-vector-bundle-and-pullback-section]] defines the pullback bundle.

[F5] Under $\mathrm{AC}_\omega$, the normal bundle $\nu(P\subset X)$ of an embedded submanifold is a smooth vector bundle ([[prop-normal-and-conormal-bundles-are-smooth-vector-bundles]]).

[F6] A smooth Euclidean map with invertible derivative has a smooth local inverse ([[lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space]]).

[F7] A smooth map on a relatively open subset of a half-space admits a smooth Euclidean extension near each of its points ([[def-smooth-function-on-a-relatively-open-subset-of-a-half-space]]).

[F8] Neatness of an embedded submanifold with boundary means $S\cap\partial X=\partial S$ and transversality to $\partial X$ ([[def-neat-submanifold-of-a-manifold-with-boundary]]).

[A1] Countable choice is [[def-countable-choice]]; it enters only through [F5].

## Proof

1.1 Around $x\in P$ choose a bundle chart of $E$ over $U\subseteq B$ and use [F1] to view it as a smooth chart of the target near $f(x)$; on $W$ write $f=(g,h)$ with $h$ valued in $\mathbb R^r$ and $g$ valued in $U$, so that $P\cap W=h^{-1}(0)$ and the normal space of the zero section at $f(x)$ is identified with the fibre $E_{g(x)}=\mathbb R^r$. By [F2] applied to the smooth map $f|_W$ and the embedded zero section, transversality at $x$ is exactly surjectivity of $dh_x$. If another trivialization replaces $h$ by $T(g(x))h(x)$ with $T$ a smooth invertible matrix function, then at $h=0$ its derivative is $T(g(x))\,dh_x$, so surjectivity is chart-independent and the transition acts on the normal quotient by the same matrix. [F1, F2, given]

2.1 Restricted to $W\cap\operatorname{Int}X$, the map $f$ takes values in the smooth stratum and, by step 1.1, is transverse to the embedded zero section there. The published transverse preimage theorem [F3] therefore makes $P$ an embedded submanifold of codimension $r$ of that open set, with $T_xP=\{v\in T_xX:df_x(v)\in T_{f(x)}0_B\}=\ker dh_x$. Since the interior points of $P$ are covered by these open sets, the interior part of $P$ is an embedded submanifold with the asserted tangent space. [F3, step 1.1]

3.1 The differential $dh_x$ factors through the quotient to a linear isomorphism $T_xX/T_xP\to E_{g(x)}$. Step 1.1 shows that these local isomorphisms transform by exactly the transition matrices of $E$, so they glue to a smooth bundle isomorphism $\nu(P\subset X)\to(g|_P)^*E$ over $P\cap\operatorname{Int}X$; smoothness of the normal bundle is [F5]. [F4, F5, step 1.1, step 2.1, algebra]

4.1 Let $x\in P\cap\partial X$ and use boundary coordinates $(u,t)$ with $t\ge0$. By [F7], the fibre coordinate $h(u,t)$ extends smoothly across $t=0$ near $x$. Boundary transversality says $d_u h(u,0)$ is surjective at $x$; hence, after reordering the $n-1$ tangential coordinates, an $r\times r$ minor in the first $r$ coordinates of $u$ is invertible. The map $(u,t)\mapsto(h(u,t),u_{r+1},\dots,u_{n-1},t)$ has invertible derivative, so [F6] makes it a local diffeomorphism. Its last coordinate is exactly the original $t$, so it maps the source half-space to $\{t\ge0\}$, without assuming an arbitrary nonlinear image of a half-space is linear. In these coordinates $P$ is precisely $\{h=0,t\ge0\}$, with boundary $\{h=0,t=0\}$, and its tangent space is $\ker dh$. These charts prove neateness. The same local normal quotient map as step 3.1 is a smooth bundle isomorphism at boundary points, and $T_x\partial X/T_x\partial P\to T_xX/T_xP$ is an isomorphism since $dh|_{T_x\partial X}$ is surjective. Thus its restriction is exactly the boundary normal identification. When $r=0$, the coordinate map is the identity and the same conclusion holds. [F6, F7, F8, step 1.1, step 2.1, step 3.1, algebra]

5.1 For $r>0$ and nonempty $B$, the zero section is closed in $D(E)$ and disjoint from $S(E)$; its saturation under the sphere collapse is itself, so the quotient topology makes its image closed. Passing to the compactly generated topology preserves this closed set. If $r=0$, [F1] uses the based empty-subspace quotient $B/\varnothing=B_+$, so $B$ and its added isolated basepoint are separate clopen pieces. Thus $0_B$ is closed for every rank, and $P=f^{-1}(0_B)$ is closed and therefore compact for compact $X$; in rank zero it is also open. For empty $B$, $0_B=\varnothing$ and every conclusion is vacuous. No choice beyond [A1] is used. [F1, A1, given, algebra] ∎
