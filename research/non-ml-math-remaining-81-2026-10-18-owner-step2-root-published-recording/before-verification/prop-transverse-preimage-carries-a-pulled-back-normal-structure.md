---
id: prop-transverse-preimage-carries-a-pulled-back-normal-structure
kind: proposition
title: "Transverse preimages carry the pulled-back normal structure"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [ "def-disk-bundle-sphere-bundle-and-thom-space", "lem-transversality-is-equivalent-to-surjectivity-on-the-normal-quotient", "thm-transverse-preimage-theorem", "def-pullback-vector-bundle-and-pullback-section", "prop-normal-and-conormal-bundles-are-smooth-vector-bundles", "lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space", "def-smooth-function-on-a-relatively-open-subset-of-a-half-space", "def-neat-submanifold-of-a-manifold-with-boundary", "def-countable-choice", "def-normal-and-conormal-bundles-of-an-embedded-submanifold", "def-topological-manifold-without-boundary", "def-smooth-fibre-bundle-and-local-trivialization", "def-smooth-vector-bundle-rank-fibre-and-trivial-bundle", "def-vector-bundle-map-over-a-smooth-base-map", "def-vector-bundle-map-section-subbundle-and-isomorphism", "thm-tangent-and-cotangent-bundles-extend-over-a-manifold-boundary", "def-euclidean-upper-half-space-and-its-boundary" ]
proof_strategy: direct
verification:
  verified: { "model": "gpt-6.1-sol", "verdict": "pass", "date": "2026-10-03", "scope": "Recovered historical Step5 independent whole-item claim/body/proof read for prop-transverse-preimage-carries-a-pulled-back-normal-structure and actual needed supplier interfaces/source passages from frontier-38-owner-30 reader-14; unchanged reader mathematics. No fresh review or claim that a stamp was issued historically; external recursive proof closure/all bibliography excluded.", "delegated_by": "owner via tools/autopilot frontier-38-owner-30 Step5 reader dispatch", "content_sha256": "215a184e53f20553edc435cacfc6ca056f9b6cde4ec9f5fe9b3147a6e09d6e96", "evidence": [ "research/frontier-38-owner-30-reader-14.md", "research/frontier-38-owner-30-reader-findings-14.json", "research/frontier-38-owner-30-dispatch/reader-reader-14.result.json", "research/frontier-38-owner-30-step5-hash-14-pre.json" ], "historical_binding": { "commit": "d90f26208", "file": "items/prop-transverse-preimage-carries-a-pulled-back-normal-structure.md", "historical_raw_sha256": "72fe29a9c7fc43f830f7c06ed3f5a3396bb15de92b3612932d7a7e22f8b42942", "transformations": [ "remove only judge stamp using stripJudgeStamp", "publication changed status draft to published; verification metadata excluded from content hash" ], "source_snapshot": "sources and source locators included in the exact bound mathematical carrier", "read_completed_at": "2026-10-03T08:31:15.766Z" } }
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
provenance:
  statement: ai-altered
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

Let $E\to B$ be a smooth real vector bundle of rank $r$, let $\operatorname{Th}(E)$ be its Thom space and let $0_B\subset\operatorname{Th}(E)$ be the image of the zero section. Let $X$ be a smooth $n$-manifold, possibly with boundary, and let $f:X\to\operatorname{Th}(E)$ be continuous and smooth on an open neighbourhood $W$ of $P=f^{-1}(0_B)$, with $f(W)$ contained in the smooth nonbasepoint stratum; write $f$ in a bundle chart of $E$ as $(g,h)$, with fibre coordinate $h$. Say that $f$ is **transverse to the zero section** when $dh_x$ is surjective for every $x\in P$. Then, assuming the countable-choice hypothesis $\mathrm{AC}_\omega$ ([[def-countable-choice]]) used only for the smooth normal-bundle structure of $P$ in $X$:

(i) If $X$ is boundaryless and $r\le n$, $P$ is an embedded submanifold of $X$ of codimension $r$ (possibly empty), with $T_xP=\ker dh_x$ for every $x\in P$. If $r>n$, then $P=\varnothing$, with no codimension or negative-dimensional submanifold assertion;

(ii) In the boundaryless case, for every $r\ge0$, $df$ induces a specified smooth bundle isomorphism $\nu(P\subset X)\to (g|_P)^*E$, where $g|_P$ is the composite of $f|_P$ with the identification $0_B\cong B$, and a change of bundle chart acts on this isomorphism by the transition matrix. If $P=\varnothing$, the normal quotient is the empty coproduct over $P$, and this is the unique isomorphism to the empty pullback bundle; it may be equipped with the specified rank-$r$ empty-bundle structure, without assigning $P$ dimension $n-r$ when $r>n$;

For a general source, (i) and (ii) apply first to $P\cap\operatorname{Int}X$.

(iii) If $X$ has boundary, if $f|_{\partial X}$ is smooth near $P\cap\partial X$ and transverse to the zero section there as well, and if $r\le n$, then $P$ is a neat embedded submanifold of dimension $n-r$ with $\partial P=P\cap\partial X$, the tangent formula of (i) holds at boundary points, and the isomorphism of (ii) extends over $P$ and restricts over $\partial P$ to the corresponding isomorphism for $\partial P\subset\partial X$. If $r=n$, this boundary is empty. If $r>n$, then $P=\varnothing$ and the empty normal identifications of (ii), including their empty boundary restriction, apply; one may give $P$ the empty zero-dimensional neat structure without an expected-codimension claim;

(iv) For every $r\ge0$, the image $0_B$ is closed in $\operatorname{Th}(E)$, so $P$ is closed in $X$ and compact whenever $X$ is compact. In rank zero, $\operatorname{Th}(E)=B_+$ with its disjoint basepoint, and $0_B=B$ is both closed and open; thus $P$ is clopen. Empty bases are included.

## Facts & Assumptions

**Given:** A smooth rank-$r$ bundle $E\to B$, and a map $f:X\to\operatorname{Th}(E)$ continuous and smooth with values in the nonbasepoint stratum near $P=f^{-1}(0_B)$, transverse to the zero section in the sense of the statement.

[F1] [[def-disk-bundle-sphere-bundle-and-thom-space]] identifies the nonbasepoint stratum of $\operatorname{Th}(E)$ with the total space $E$ by a diffeomorphism, and $0_B$ with the zero section.

[F2] [[lem-transversality-is-equivalent-to-surjectivity-on-the-normal-quotient]] identifies transversality to an embedded submanifold with surjectivity of the derivative onto the normal quotient.

[F3] Under transversality, [[thm-transverse-preimage-theorem]] gives the embedded codimension-$r$ conclusion only when $r$ does not exceed the source dimension, and gives emptiness when it does; its tangent formula holds at every actual preimage point.

[F4] [[def-pullback-vector-bundle-and-pullback-section]] defines the pullback bundle.

[F5] In the boundaryless case, under $\mathrm{AC}_\omega$, the normal bundle $\nu(P\subset X)$ of an embedded submanifold is a smooth vector bundle ([[prop-normal-and-conormal-bundles-are-smooth-vector-bundles]]).

[F6] A smooth Euclidean map with invertible derivative has a smooth local inverse ([[lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space]]).

[F7] A smooth map on a relatively open subset of a half-space admits a smooth Euclidean extension near each of its points ([[def-smooth-function-on-a-relatively-open-subset-of-a-half-space]]).

[F8] Neatness of an embedded submanifold with boundary means $S\cap\partial X=\partial S$ and transversality to $\partial X$ ([[def-neat-submanifold-of-a-manifold-with-boundary]]).

[F9] The normal-bundle set is the coproduct of the fibrewise tangent quotients ([[def-normal-and-conormal-bundles-of-an-embedded-submanifold]]). An empty base is a smooth manifold of every nonnegative dimension; the empty projection is surjective, its empty cover provides local trivializations for each specified nonnegative rank, and the unique empty bundle map has itself as inverse ([[def-topological-manifold-without-boundary]], [[def-smooth-fibre-bundle-and-local-trivialization]], [[def-smooth-vector-bundle-rank-fibre-and-trivial-bundle]], [[def-vector-bundle-map-over-a-smooth-base-map]], [[def-vector-bundle-map-section-subbundle-and-isomorphism]]).

[F10] Tangent coordinates in smooth boundary charts have the full ambient dimension and smooth transition matrices ([[thm-tangent-and-cotangent-bundles-extend-over-a-manifold-boundary]]); the zero-dimensional half-space has empty boundary ([[def-euclidean-upper-half-space-and-its-boundary]]). Quotient frames in the half-slice charts below therefore construct the smooth boundary normal bundle directly.

[A1] Countable choice is [[def-countable-choice]]; it enters only through [F5].

## Proof

**Given:** The data and transversality hypotheses in the Statement; every asserted dimension is nonnegative, and the empty bundle case is interpreted as specified there.

1.1 Around $x\in P$ choose a bundle chart of $E$ over $U\subseteq B$ and use [F1] to view it as a smooth chart of the target near $f(x)$; on a sufficiently small neighbourhood of $x$ in $W$ write $f=(g,h)$ with $h$ valued in $\mathbb R^r$ and $g$ valued in $U$, so that $P\cap W=h^{-1}(0)$ and the normal space of the zero section at $f(x)$ is identified with the fibre $E_{g(x)}=\mathbb R^r$. The quotient of the target tangent space by the zero-section tangent space is the fibre, and the composite of $df_x$ with this quotient is exactly $dh_x$. The linear quotient calculation proved in [F2] identifies transversality with its surjectivity. This calculation uses only full tangent spaces and linear maps, so it also applies at a source boundary point; it does not invoke a boundaryless preimage theorem there. If another trivialization replaces $h$ by $T(g(x))h(x)$ with $T$ a smooth invertible matrix function, then at $h=0$ its derivative is $T(g(x))\,dh_x$, so surjectivity is chart-independent and the transition acts on the normal quotient by the same matrix. [F1, F2, given]

2.1 If $x\in P$, step 1.1 makes $dh_x:T_xX\to\mathbb R^r$ surjective, so $r\le n$. Thus $r>n$ forces $P=\varnothing$ before any expected-dimensional chart is constructed. More generally, whenever $P$ is empty, both $(g|_P)^*E$ and the normal-quotient coproduct are empty. By [F9] the unique map between them is a smooth bundle isomorphism, with the specified rank-$r$ empty bundle model; all transition and boundary-restriction formulas are vacuous. For $r\le n$ the empty preimage can have dimension $n-r$; for $r>n$ use its empty zero-dimensional structure and make no codimension claim. Hence it remains to construct the nonempty local normal identifications. [F9, step 1.1, algebra, cases]

3.1 Restricted to $W\cap\operatorname{Int}X$, the map $f$ takes values in the smooth stratum and, by step 1.1, is transverse to the embedded zero section there. In the dimension range $r\le n$ established at every such point, [F3] therefore makes the interior part of $P$ an embedded submanifold of codimension $r$ of that open set, with $T_xP=\{v\in T_xX:df_x(v)\in T_{f(x)}0_B\}=\ker dh_x$. Since the interior points of $P$ are covered by these open sets, the interior part of $P$ is an embedded submanifold with the asserted tangent space. [F3, step 1.1, step 2.1]

4.1 The differential $dh_x$ factors through the quotient to a linear isomorphism $T_xX/T_xP\to E_{g(x)}$. Step 1.1 shows that these local isomorphisms transform by exactly the transition matrices of $E$, so they glue to a smooth bundle isomorphism $\nu(P\subset X)\to(g|_P)^*E$ over $P\cap\operatorname{Int}X$; smoothness of the normal bundle is [F5]. [F4, F5, step 1.1, step 3.1, algebra]

5.1 If $n=0$, the ambient boundary is empty by [F10]. Otherwise let $x\in P\cap\partial X$. Boundary transversality makes a map from an $(n-1)$-dimensional space onto $\mathbb R^r$, so $r\le n-1$; the case $r=n$ therefore has no such point. If $r=0$, the fibre map has its sole value in $\mathbb R^0$, so $P$ is locally all of $X$, its normal quotient is the zero bundle, and all boundary identifications are the identity on zero fibres. For $r>0$ use boundary coordinates $(u,t)$ with $t\ge0$. By [F7], the fibre coordinate $h(u,t)$ extends smoothly across $t=0$ near $x$. Boundary transversality says $d_u h(u,0)$ is surjective at $x$; hence, after reordering the $n-1$ tangential coordinates, an $r\times r$ minor in the first $r$ coordinates of $u$ is invertible. The map $(u,t)\mapsto(h(u,t),u_{r+1},\dots,u_{n-1},t)$ has invertible derivative, so [F6] makes it a local diffeomorphism. Its last coordinate is exactly the original $t$, so it maps the source half-space to $\{t\ge0\}$, without assuming an arbitrary nonlinear image of a half-space is linear. In these coordinates $P$ is precisely $\{h=0,t\ge0\}$, with boundary $\{h=0,t=0\}$, and its tangent space is $\ker dh$. These charts prove neateness. In these half-slice coordinates the tangent bundle of $P$ is spanned by the free $u$ and $t$ coordinate vectors, and the classes of the $r$ coordinate vectors in the $h$ directions form a smooth frame for $TX|_P/TP$ by [F10]. This constructs its smooth normal-bundle structure directly at boundary points, rather than applying the boundaryless supplier [F5] outside its contract. The same local normal quotient map as step 4.1 is consequently a smooth bundle isomorphism at boundary points, and $T_x\partial X/T_x\partial P\to T_xX/T_xP$ is an isomorphism since $dh|_{T_x\partial X}$ is surjective. Thus its restriction is exactly the boundary normal identification. The empty boundary restriction is the unique map handled in step 2.1. [F6, F7, F8, F9, F10, step 1.1, step 2.1, step 3.1, step 4.1, algebra]

6.1 For $r>0$ and nonempty $B$, the zero section is closed in $D(E)$ and disjoint from $S(E)$; its saturation under the sphere collapse is itself, so the quotient topology makes its image closed. Passing to the compactly generated topology preserves this closed set. If $r=0$, [F1] uses the based empty-subspace quotient $B/\varnothing=B_+$, so $B$ and its added isolated basepoint are separate clopen pieces. Thus $0_B$ is closed for every rank, and $P=f^{-1}(0_B)$ is closed and therefore compact for compact $X$; in rank zero it is also open. For empty $B$, $0_B=P=\varnothing$; the asserted normal structure is the unique empty bundle isomorphism of step 2.1, while all pointwise conclusions are vacuous. No choice beyond [A1] is used. [F1, F9, A1, step 2.1, given, algebra] ∎
