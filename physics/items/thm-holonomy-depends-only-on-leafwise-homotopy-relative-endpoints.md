---
id: thm-holonomy-depends-only-on-leafwise-homotopy-relative-endpoints
kind: theorem
title: "Holonomy depends only on leafwise homotopy relative to endpoints"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 3
deps:
  - lem-holonomy-germ-is-independent-of-the-foliation-chart-chain
  - lem-a-leafwise-path-determines-a-germ-of-transverse-diffeomorphism
  - def-leafwise-path-and-leafwise-homotopy
  - def-local-transversal-to-a-regular-foliation
  - def-flat-chart-for-a-distribution
  - def-plaque-of-a-flat-chart
  - lem-overlapping-plaques-through-a-point-have-compatible-germs
  - def-regular-foliation-atlas
  - thm-lebesgue-number-lemma
  - def-countable-choice
  - thm-heine-borel-rn
  - thm-regular-foliations-and-integrable-distributions-correspond
  - thm-existence-and-uniqueness-of-maximal-connected-integral-manifolds
  - thm-smooth-inverse-function-theorem-on-manifolds
  - cor-interval-uncountable
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Danny Calegari, Foliations and the Geometry of 3-Manifolds (Oxford Mathematical Monographs)"
      url: "https://math.uchicago.edu/~dannyc/books/foliations/oupbook.pdf"
    - title: "Eckhard Meinrenken, Lie Groupoids and Lie Algebroids, lecture notes (University of Toronto MAT1341, Fall 2017)"
      url: "https://www.math.toronto.edu/mein/teaching/MAT1341_LieGroupoids/Groupoids.pdf"
    - title: "Leiden NCG seminar, Noncommutative Geometry of Foliations (2023 seminar notes)"
      url: "https://ncg-leiden.github.io/foliation2023/foliation_notes.pdf"
verification:
  precheck: pass
---

## Statement

Assume Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]). Let $F$
be a regular foliation of $M$, let $a,b$ be leafwise paths from $x$ to $y$ that
are leafwise homotopic relative to endpoints
([[def-leafwise-path-and-leafwise-homotopy]]), and let $T,T'$ be local
transversals at $x$ and $y$ ([[def-local-transversal-to-a-regular-foliation]]).
Then $h_a(T',T)=h_b(T',T)$ as germs. In particular the holonomy germ of a
leafwise path depends only on its leafwise homotopy class relative to endpoints
and on the endpoint transversals.

## Facts & Assumptions

**Given:** A leafwise homotopy $H:[0,1]^2\to M$ relative to endpoints from the leafwise path $a$ to the leafwise path $b$, with $a,b$ leafwise paths from $x$ to $y$, and local transversals $T$ at $x$ and $T'$ at $y$.

[F1] $H$ is continuous, $H(0,\cdot)=a$, $H(1,\cdot)=b$, $H(s,0)=x$, $H(s,1)=y$, and every slice $t\mapsto H(s,t)$ is a leafwise path ([[def-leafwise-path-and-leafwise-homotopy]]).

[F2] The holonomy germ of a leafwise path is well defined: it is unchanged by passing to a refinement of the chart chain, by changing the subdivision points, and by changing the auxiliary intermediate transversals, so it depends only on the leafwise path and the endpoint transversals ([[lem-holonomy-germ-is-independent-of-the-foliation-chart-chain]]).

[F3] $[0,1]^2$ is a compact metric space by [[thm-heine-borel-rn]]; every open cover has a Lebesgue number, so a sufficiently fine rectangular grid has every cell $[s_{j-1},s_j]\times[t_{k-1},t_k]$ mapped into a member of a given open cover of $[0,1]^2$ ([[thm-lebesgue-number-lemma]]).

[F4] The germ $h_a(T',T)$ is, by construction, the germ of the composite of the chart-wise plaque transports along a finite chart chain of $a$: for a subdivision $0=t_0<\dots<t_N=1$, foliation charts $U_1,\dots,U_N$ with $a([t_{i-1},t_i])\subseteq U_i$ and local transversals $T_i$ at $a(t_i)$, the chart-wise transport inside $U_i$ matches points of the transversals at $a(t_{i-1})$ and $a(t_i)$ with equal transverse coordinates, and these germs compose ([[lem-a-leafwise-path-determines-a-germ-of-transverse-diffeomorphism]]).

[F5] Under the assumed Countable Choice, leaves are maximal connected integral manifolds, with their intrinsic second-countable smooth structure; connected integral manifolds factor smoothly through them ([[thm-regular-foliations-and-integrable-distributions-correspond]], [[thm-existence-and-uniqueness-of-maximal-connected-integral-manifolds]]).

[F6] A smooth map with invertible differential is locally a diffeomorphism ([[thm-smooth-inverse-function-theorem-on-manifolds]]); a nondegenerate real interval is uncountable ([[cor-interval-uncountable]]).

## Proof

**Proof technique:** direct.

1.1 **The homotopy image lies in one leaf.** Since $H(s,0)=x$ for every $s$ and every slice $t\mapsto H(s,t)$ is a leafwise path, the point $H(s,t)$ lies in the leaf $L$ through $x$ for every $(s,t)$. Consequently for every curve $c:[0,1]\to[0,1]^2$ the composite $H\circ c$ is a leafwise path in $L$, and if $c$ runs from $(0,0)$ to $(1,1)$ then $H\circ c$ runs from $x$ to $y$. [F1, given]

2.1 **Staircase paths in the square.** The sets $H^{-1}(U)$, over foliation charts of $F$, form an open cover of the square; by [F3] there are grids $0=s_0<\dots<s_m=1$ and $0=t_0<\dots<t_n=1$ such that $H$ maps every cell $R_{jk}=[s_{j-1},s_j]\times[t_{k-1},t_k]$ into a single foliation chart. Consider the monotone lattice paths from $(0,0)$ to $(1,1)$ built from the unit steps $E$ (increasing $s$) and $N$ (increasing $t$). Starting from the path $\sigma_0=E^mN^n$, the bottom edge followed by the right edge, bubble the $N$ steps to the left: each of the $n$ steps $N$ crosses each of the $m$ steps $E$ once, in $mn$ successive interchanges of an adjacent pair $EN$ into $NE$, until the path $\sigma_{mn}=N^nE^m$, the left edge followed by the top edge, is reached. Parametrise the paths $\sigma_0,\dots,\sigma_{mn}$ so that $\sigma_\ell$ and $\sigma_{\ell+1}$ coincide outside a subinterval on which they run from the common start of the interchanged steps to their common end along the two L-routes (the two two-segment side paths) of the cell spanned by those steps. Then each $P_\ell:=H\circ\sigma_\ell$ is, by step 1.1, a leafwise path from $x$ to $y$, with $P_0$ a reparametrisation of the concatenation of the constant path at $x$ with $b$, and $P_{mn}$ a reparametrisation of the concatenation of $a$ with the constant path at $y$. [F1, F3, step 1.1, construct]

2.2 **Adding one interchange changes nothing.** Fix $\ell$, let $R$ be the cell spanned by the interchanged steps, mapped by $H$ into a foliation chart $U$, and let $C_1,C_2$ be the common start and the common end of the two interchanged steps, so that $\sigma_\ell$ and $\sigma_{\ell+1}$ agree outside one parameter interval on which they run from $C_1$ to $C_2$ along the two L-routes of $R$. The image $H(R)$ is connected and lies in $U\cap L$ by step 1.1, and it lies in one plaque as follows. By [F5], give $L$ its intrinsic second-countable manifold structure. Each plaque of $U$ in $L$ is intrinsically open: its inclusion factors smoothly through $L$ with invertible differential, since both tangent images equal $TF$, and [F6] applies. Distinct plaques are disjoint, so assigning the least index of a nonempty basic open set contained in each plaque injects this family into an enumerated basis. Thus the transverse values of $L\cap U$ are countable. Every transverse coordinate of the connected continuous image $H(R)$ is constant, since two values would force a nondegenerate interval of values, contrary to [F6]. The image lies in one connected level-set component, hence one plaque. In particular $p:=H(C_1)$ and $q:=H(C_2)$ lie in a common plaque of $U$, and both routes have images in $U$. Choose local transversals $S_p$ at $p$ and $S_q$ at $q$, a subdivision of $[0,1]$ that contains the two parameter values belonging to $C_1$ and $C_2$ and has no further subdivision point between them, foliation charts equal to $U$ on the middle interval and covering the common outer parts of the two paths, and intermediate transversals accordingly: this subdivision, these charts and these transversals satisfy the admissibility condition of [F4] for $P_\ell$ and for $P_{\ell+1}$, because outside the middle interval the two paths coincide and inside it both routes have images in $U$ with endpoints in a common plaque. Every chart-wise transport of [F4] is determined by its chart and its two transversals alone, so $P_\ell$ and $P_{\ell+1}$ receive one and the same composite germ; by [F4] that germ is a germ of each of the two paths, and by [F2] it is the intrinsic holonomy germ of each. Hence $h_{P_\ell}(T',T)=h_{P_{\ell+1}}(T',T)$. [F1, F2, F4, F5, F6, step 1.1, construct]

3.1 **Conclusion.** Chaining step 2.2 over $\ell=0,\dots,mn-1$ gives $h_{P_0}(T',T)=h_{P_{mn}}(T',T)$. By step 2.1 the paths $P_0$ and $P_{mn}$ are reparametrisations of $c_x*b$ and of $a*c_y$, where $c_x,c_y$ denote the constant paths at $x,y$; reparametrising a chart chain changes only its subdivision points, so by [F2] it suffices to compare the germs of the two concatenations. Apply [F4] to $c_x*b$ with a chart chain whose subdivision contains the junction, whose chart on the constant piece is a foliation chart around $x$, and whose intermediate transversal at the junction is $T$ itself: the transport along the constant piece matches equal transverse coordinates at the single point $x$, so it is the identity germ of $(T,x)$, while the composite along the remaining pieces is a chain composite of $b$ and therefore equals $h_b(T',T)$ by [F2]; hence $h_{P_0}(T',T)=h_b(T',T)$. The same argument applied to $a*c_y$ with intermediate transversal $T'$ at $y$ gives $h_{P_{mn}}(T',T)=h_a(T',T)$. Therefore $h_a(T',T)=h_b(T',T)$ for leafwise homotopic paths with the same endpoints, and the holonomy germ depends only on the leafwise homotopy class relative to endpoints and on the endpoint transversals. [F1, F2, F4, step 2.1, step 2.2] ∎
