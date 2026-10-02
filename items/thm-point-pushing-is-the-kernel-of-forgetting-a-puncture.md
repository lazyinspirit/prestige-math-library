---
id: thm-point-pushing-is-the-kernel-of-forgetting-a-puncture
kind: theorem
title: "Point pushing is the kernel of forgetting the last disk puncture"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps: [def-point-pushing-homomorphism-for-a-puncture,
       thm-pure-braid-forgetting-a-strand-short-exact-sequence,
       cor-pure-braids-are-pure-punctured-disk-mapping-classes,
       thm-braid-group-is-the-boundary-fixed-mapping-class-group-of-the-punctured-disk,
       cor-pure-geometric-braids-are-the-fundamental-group-of-ordered-configurations,
       thm-the-evaluation-bundle-boundary-map-is-an-isomorphism-for-the-disk,
       def-boundary-map-from-point-motions-to-punctured-disk-mapping-classes,
       def-axiom-of-choice,
       thm-choice-implies-dependent-implies-countable-choice,
       cor-compact-domain-maps-are-uniformly-continuous,
       thm-induced-fundamental-group-map-functoriality,
       lem-configuration-loops-admit-smooth-separated-point-motion-representatives,
       lem-smooth-finite-point-motions-extend-to-boundary-fixed-disk-isotopies,
       def-pure-mapping-class-group-of-a-punctured-disk,
       def-boundary-fixed-mapping-class-group-of-a-punctured-disk,
       lem-interior-and-closed-disk-configuration-spaces-are-homotopy-equivalent,
       thm-geometric-braids-are-the-fundamental-group-of-unordered-configurations,
       lem-the-point-motion-boundary-map-is-a-well-defined-homomorphism,
       def-geometric-braid-with-setwise-endpoints,
       thm-geometric-braids-form-a-group,
       def-based-loops-and-fundamental-group]
justified_by: []
aliases: []
landmark: true
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Joan S. Birman and Tara E. Brendle, Braids: A Survey, section 1.3 and the proof of Theorem 1, author manuscript pp. 5-7 (the Birman exact sequence)"
      url: "https://www.math.columbia.edu/~jb/Handbook-21.pdf"
    - title: "Benson Farb and Dan Margalit, A Primer on Mapping Class Groups, version 5.0 author draft, sections 4.2.1-4.2.3, printed pp. 101-105"
      url: "https://web.archive.org/web/20111027114600id_/http://www.math.uchicago.edu/~margalit/mcg/mcgv50.pdf"
    - title: "Edward Fadell and Lee Neuwirth, Configuration Spaces, sections II-IV, printed pp. 111-120"
      url: "https://tidsskrift.dk/math/article/download/10517/8538"
---

## Statement

Assume the Axiom of Choice and let $n\ge2$. Write
$Q_n=(q_1,\dots,q_n)$ for the base configuration of
[[def-boundary-fixed-mapping-class-group-of-a-punctured-disk]], and put
$Q'_n:=(q_1,\dots,q_{n-1})$, the truncation of $Q_n$. Here
$\operatorname{PMod}(D^2,Q'_n;\partial D^2)$ means the group of path
components of the boundary-fixed homeomorphisms fixing these $n-1$ points
individually; $Q'_n$ is not the canonical rank-$(n-1)$ configuration. Put
$Y_n:=\operatorname{int}D^2\setminus\{q_1,\dots,q_{n-1}\}$ for the disc with
the first $n-1$ punctures removed, and
$\operatorname{Push}_n:\pi_1(Y_n,q_n)\to\operatorname{PMod}(D^2,Q_n;\partial D^2)$
for the point-pushing homomorphism at the last puncture of
[[def-point-pushing-homomorphism-for-a-puncture]]. Further let
$$\psi:\operatorname{PMod}(D^2,Q_n;\partial D^2)\longrightarrow \operatorname{PMod}(D^2,Q'_n;\partial D^2)$$
be the homomorphism induced on the pointwise stabilisers by forgetting the
last marked point, that is, the map that regards a boundary-fixed
homeomorphism fixing $q_1,\dots,q_n$ as one fixing $q_1,\dots,q_{n-1}$. Then:

1. $\operatorname{Push}_n$ is injective;
2. its image is exactly the kernel of $\psi$;
3. $\psi$ is surjective, so with $F_{n-1}:=\pi_1(Y_n,q_n)$, the free group on
   the $n-1$ puncture meridians of
   [[thm-pure-braid-forgetting-a-strand-short-exact-sequence]], the sequence
   $$1\longrightarrow F_{n-1}\xrightarrow{\ \operatorname{Push}_n\ } \operatorname{PMod}(D^2,Q_n;\partial D^2)\xrightarrow{\ \psi\ } \operatorname{PMod}(D^2,Q'_n;\partial D^2)\longrightarrow 1$$
   is short exact.

No injectivity of $\operatorname{Push}_n$ is assumed anywhere in the
definition of point pushing; it is proved here from the Fadell-Neuwirth
sequence for the ordered configuration spaces.

## Facts & Assumptions

**Given:** the Axiom of Choice, an integer $n\ge2$, the canonical configuration $Q_n$ of [[def-boundary-fixed-mapping-class-group-of-a-punctured-disk]] and its truncation $Q'_n$, the punctured disc $Y_n$, the point-pushing homomorphism of [[def-point-pushing-homomorphism-for-a-puncture]] with the ordered lift $L_\gamma(t)=(q_1,\dots,q_{n-1},\gamma(t))$ of a based loop $\gamma:I\to Y_n$ at $q_n$, and the boundary map $\delta:\pi_1(C_m(\operatorname{int}D^2),[Q_m])\to \operatorname{Mod}(D^2,Q_m;\partial D^2)$ of [[def-boundary-map-from-point-motions-to-punctured-disk-mapping-classes]].

[A1] The Axiom of Choice holds ([[def-axiom-of-choice]]).

[F1] In ZF, AC implies DC and DC implies countable choice, so under [A1] the extension lemma of [F7] is available ([[thm-choice-implies-dependent-implies-countable-choice]]).

[F2] Under AC the forgetting map sits in the short exact sequence $1\to F_{n-1}\xrightarrow{\kappa}PB_n\xrightarrow{\varphi}PB_{n-1}\to1$, where $F_{n-1}=\pi_1(\operatorname{int}D^2\setminus\{q_1,\dots,q_{n-1}\},q_n)$ is the fundamental group of the fibre of the last-coordinate forgetful map, free on the $n-1$ positively oriented meridian classes, $\kappa$ is induced by the fibre inclusion $x\mapsto(q_1,\dots,q_{n-1},x)$ transported through the open-to-closed identification, and $\varphi$ is induced by forgetting the last coordinate ([[thm-pure-braid-forgetting-a-strand-short-exact-sequence]]).

[F3] The map $\Psi^{\mathrm{conf}}_m:G_m^{\mathrm{pure}}\to PB_m$, $\Psi^{\mathrm{conf}}_m([\beta])=(\iota^F_*[z_\beta])^{-1}$, is a group isomorphism, where $z_\beta$ is the coordinate path of the braid $\beta$ and $\iota^F_*$ is the open-to-closed isomorphism, and for a pure braid $z_\beta(1)=Q_m$ ([[cor-pure-geometric-braids-are-the-fundamental-group-of-ordered-configurations]], [[def-geometric-braid-with-setwise-endpoints]]).

[F4] The map $\Psi^{\mathrm{mc}}_m:=\delta\circ(\iota^C_*)^{-1}\circ\Phi:G_m\to \operatorname{Mod}(D^2,Q_m;\partial D^2)$ is a group isomorphism, and for every braid class $[\beta]\in G_m$ and every lift $g:I\to \operatorname{Homeo}^+(D^2,\partial D^2)$ of the raw slice loop $S(\beta)$ with $g(0)=\operatorname{id}$ one has $\Psi^{\mathrm{mc}}_m([\beta])=[g(1)]$. Moreover $\Psi^{\mathrm{mc}}_m(G_m^{\mathrm{pure}})= \operatorname{PMod}(D^2,Q_m;\partial D^2)$ ([[thm-braid-group-is-the-boundary-fixed-mapping-class-group-of-the-punctured-disk]], [[cor-pure-braids-are-pure-punctured-disk-mapping-classes]]).

[F5] Point pushing is defined by $\operatorname{Push}_n([\gamma])=\delta([\bar\gamma])$ with $\bar\gamma=p_n\circ L_\gamma$, it is a group homomorphism with values in $\operatorname{PMod}(D^2,Q_n;\partial D^2)$, no injectivity is asserted by the definition, and $\Psi^{\mathrm{mc}}_n([L_\gamma])=\operatorname{Push}_n([\gamma])^{-1}$; the boundary map $\delta$ is the connecting isomorphism of the evaluation fibration ([[def-point-pushing-homomorphism-for-a-puncture]], [[thm-the-evaluation-bundle-boundary-map-is-an-isomorphism-for-the-disk]], [[lem-the-point-motion-boundary-map-is-a-well-defined-homomorphism]]).

[F6] At the canonical configurations, the pure mapping class group is $\operatorname{PMod}(D^2,Q_m;\partial D^2)=\pi_0(F_m)$ for the pointwise stabiliser $F_m=\operatorname{Homeo}^+(D^2,\partial D^2;\hat Q_m)$, two boundary-fixed homeomorphisms fixing each $q_i$ lie in the same component exactly when they are isotopic rel $\partial D^2$ fixing each $q_i$ for all times, the product is $[f][g]=[f\circ g]$, and the canonical map $\operatorname{PMod}(D^2,Q_m;\partial D^2)\to \operatorname{Mod}(D^2,Q_m;\partial D^2)$ is injective ([[def-pure-mapping-class-group-of-a-punctured-disk]]). For $Q'_n$ we use the same pointwise-stabiliser formula as defined in the Statement; the same path and composition arguments give its group structure.

[F7] Every based loop of $C_m(\operatorname{int}D^2)$ at the canonical rank-$m$ configuration $[Q_m]$ is path homotopic relative to $\{0,1\}$ to a based loop whose unique ordered lift from $Q_m$ consists of smooth, pairwise collision-free coordinate paths constant near the two time endpoints ([[lem-configuration-loops-admit-smooth-separated-point-motion-representatives]]); under countable choice, smooth collision-free paths $z_1,\dots,z_m:\mathbb R\to\operatorname{int}D^2$ constant on $(-\infty,0]$ and on $[1,\infty)$ extend to a smooth isotopy $\Phi:D^2\times[0,1]\to D^2$ with $\Phi_0=\operatorname{id}$, every $\Phi_s$ a diffeomorphism fixing $\partial D^2$ pointwise, and $\Phi_s(z_j(0))=z_j(s)$ ([[lem-smooth-finite-point-motions-extend-to-boundary-fixed-disk-isotopies]]).

[F8] Induced maps on fundamental groups are functorial and commute with the open-to-closed inclusions: $p^D_*\circ\iota^F_*=\iota^F_*\circ p_*$ for the coordinate-forgetting maps and their open and closed disc versions ([[thm-induced-fundamental-group-map-functoriality]], [[lem-interior-and-closed-disk-configuration-spaces-are-homotopy-equivalent]], [[thm-pure-braid-forgetting-a-strand-short-exact-sequence]]).

[F9] Slicing is a bijection $S:G_m\to\pi_1(C_m(\operatorname{int}D^2),[Q_m])$, so a braid class is determined by its raw slice loop ([[thm-geometric-braids-are-the-fundamental-group-of-unordered-configurations]]).

[F10] On the compact metric domain $D^2$ the compact-open topology on $\operatorname{Homeo}^+(D^2,\partial D^2)$ is the topology of uniform convergence, and composition of homeomorphisms is continuous for it ([[def-boundary-fixed-mapping-class-group-of-a-punctured-disk]]). The product $D^2\times I$ is again a nonempty compact metric space, so a jointly continuous family $g:D^2\times I\to D^2$ is uniformly continuous there ([[cor-compact-domain-maps-are-uniformly-continuous]]); writing $g_s(x):=g(x,s)$ and measuring the product with a metric for which $d((x,s),(x,s'))=|s-s'|$, uniform continuity gives for every $\varepsilon>0$ a $\delta>0$ with $\sup_{x\in D^2}\lVert g_s(x)-g_{s'}(x)\rVert_2<\varepsilon$ whenever $|s-s'|<\delta$. Hence a jointly continuous family of homeomorphisms gives a continuous path $s\mapsto g_s$ in that topology ([[def-boundary-fixed-mapping-class-group-of-a-punctured-disk]], [[cor-compact-domain-maps-are-uniformly-continuous]]).


## Proof

**Proof technique:** direct.

1.1 *Choice bookkeeping.* By [F1] the Axiom of Choice [A1] yields dependent choice and countable choice, so the short exact sequence of [F2] and the extension lemma of [F7] are both available. [A1, F1, F2, F7]

1.2 *The forgetting homomorphism $\psi$.* Let $F_n$ be the pointwise stabiliser of $Q_n$, and let $F'$ be the pointwise stabiliser of $Q'_n$, as in [F6]. A homeomorphism fixing $q_1,\dots,q_n$ fixes $q_1,\dots,q_{n-1}$, so the inclusion $\operatorname{inc}:F_n\hookrightarrow F'$ is defined and continuous for the subspace topologies; define $\psi:=\pi_0(\operatorname{inc})$, that is, $\psi([f]):=[f]$ for the class of a homeomorphism $f\in F_n$ read in $\pi_0(F')=\operatorname{PMod}(D^2,Q'_n;\partial D^2)$ by [F6]. This is well defined: if $f$ and $f'$ are joined by a path in $F_n$, the same path lies in $F'$ and joins them there. It is a group homomorphism: for $[f],[g]\in\pi_0(F_n)$ one has $[f][g]=[f\circ g]$, and $\operatorname{inc}(f\circ g)=\operatorname{inc}(f)\circ\operatorname{inc}(g)$, so $\psi([f][g])=[f\circ g]=[f][g]=\psi([f])\psi([g])$. Thus $\psi$ is exactly the homomorphism that forgets the last marked point. [F6, given]

1.3 *An isomorphism from the pure braid group and the identification $\operatorname{Push}_n=\Theta_n\circ\kappa$.* By [F4] the restriction of $\Psi^{\mathrm{mc}}_n$ to $G_n^{\mathrm{pure}}$ is a group isomorphism onto $\operatorname{PMod}(D^2,Q_n;\partial D^2)$, and by [F3] the map $\Psi^{\mathrm{conf}}_n$ is a group isomorphism $G_n^{\mathrm{pure}}\to PB_n$; so $$\Theta_n:=\Psi^{\mathrm{mc}}_n\big|_{G_n^{\mathrm{pure}}}\circ (\Psi^{\mathrm{conf}}_n)^{-1}:PB_n\longrightarrow \operatorname{PMod}(D^2,Q_n;\partial D^2)$$ is a group isomorphism. Now let $[\gamma]\in\pi_1(Y_n,q_n)$. Its ordered lift $L_\gamma$ is a pure geometric braid based at $Q_n$: its coordinates are the constant paths at $q_1,\dots,q_{n-1}$ and the loop $\gamma$, they are pairwise distinct and lie in $\operatorname{int}D^2$, and $L_\gamma(0)=Q_n=L_\gamma(1)$, so $[L_\gamma]\in G_n^{\mathrm{pure}}$. Writing $i:Y_n\to F_n(\operatorname{int}D^2)$, $x\mapsto(q_1,\dots,q_{n-1},x)$ for the fibre inclusion, we have $i\circ\gamma=L_\gamma$, so by [F2] $$\kappa([\gamma])=\iota^F_*(i_*[\gamma])=\iota^F_*[L_\gamma].$$ The coordinate path of the braid $L_\gamma$ is $L_\gamma$ itself, so by [F3] $$(\Psi^{\mathrm{conf}}_n)^{-1}\bigl(\kappa([\gamma])^{-1}\bigr)=[L_\gamma],$$ while [F5] gives $\Psi^{\mathrm{mc}}_n([L_\gamma])=\operatorname{Push}_n([\gamma])^{-1}$. Applying the isomorphism $\Theta_n$ to the inverse of $\kappa([\gamma])$ we therefore get $$\Theta_n\bigl(\kappa([\gamma])^{-1}\bigr)=\operatorname{Push}_n([\gamma])^{-1}, \qquad\text{hence}\qquad \Theta_n\bigl(\kappa([\gamma])\bigr)=\operatorname{Push}_n([\gamma]),$$ because a group isomorphism carries inverses to inverses. [F2, F3, F4, F5]

1.4 *Reading $\Theta_m$ off a lifted isotopy.* Let $m\ge1$ and let $x\in PB_m$ with $[\beta]:=(\Psi^{\mathrm{conf}}_m)^{-1}(x)\in G_m^{\mathrm{pure}}$ and coordinate path $z=z_\beta$. Suppose $g:I\to\operatorname{Homeo}^+(D^2,\partial D^2)$ is a lift of the raw slice loop $S(\beta)$ with $g(0)=\operatorname{id}$ and with $g_s(q_j)=z_j(s)$ for all $j$ and $s$. Then $g$ is a lift of $S(\beta)$ with initial value the identity, so [F4] gives $\Psi^{\mathrm{mc}}_m([\beta])=[g(1)]$, and hence $$\Theta_m(x)=[g(1)]\in\operatorname{PMod}(D^2,Q_m;\partial D^2).$$ Moreover $g(1)(q_j)=z_j(1)=q_j$ for every $j$, because $[\beta]$ is pure, so $g(1)\in F_m$ is an element of the pointwise stabiliser and $[g(1)]$ is literally a class of $\pi_0(F_m)$. [F3, F4, given]

1.5 *Transport to the truncated configuration.* Write $C=(c_1,\dots,c_{n-1})$ for the canonical rank-$(n-1)$ configuration. The affine motion
$$\eta_j(t)=(1+t/n)q_j+t(h_{n-1},0),\qquad h_{n-1}=1/(4n),$$
carries $q_j$ to $c_j$: $q_j=(2j-n-1)/(4(n+1))$ gives $\eta_j(1)=(2j-n)/(4n)$. The points remain ordered and inside the disc, since each coordinate is a convex combination of its initial and terminal positions. Reparametrize by a smooth nondecreasing function equal to $0$ near $0$ and $1$ near $1$, and extend constantly outside $I$. By [F7] and step 1.1 this smooth separated motion extends to a boundary-fixed disk isotopy with endpoint $R$ satisfying $R(q_j)=c_j$ for $j<n$. Conjugation $f\mapsto RfR^{-1}$ identifies the pointwise stabiliser of $Q'_n$ with that of $C$, continuously in both directions by [F10]. It induces an isomorphism $C_R$ of their component groups. Also $R$ acts coordinatewise on configuration spaces and induces an isomorphism $R_*$ of their fundamental groups at these basepoints, commuting with the open-to-closed inclusions by [F8]. Define
$$\Theta':=C_R^{-1}\circ\Theta_{n-1}\circ R_*:\pi_1(F_{n-1}(D^2),Q'_n)\longrightarrow\operatorname{PMod}(D^2,Q'_n;\partial D^2),$$
where $\Theta_{n-1}$ is the canonical isomorphism of step 1.3. This is an isomorphism. If $z'$ is any ordered loop at $Q'_n$ lifted by an ambient isotopy $g$ from the identity, then $RgR^{-1}$ lifts $Rz'$ from the canonical configuration $C$. The inverse-slicing formula and step 1.4 give
$$\Theta'\bigl((\iota^F_*[z'])^{-1}\bigr)=[g_1].$$
This transported formula, rather than a canonical rank-$(n-1)$ identification at $Q'_n$, will be used below. [F3, F4, F7, F8, F10, step 1.1, step 1.3, step 1.4]

2.1 *Naturality at the actual truncation.* Let $x\in PB_n$ and choose its pure geometric representative $\beta=(\Psi_n^{\mathrm{conf}})^{-1}(x)$. By [F7] and [F9] its ordered path $z$ may be taken smooth and constant near the endpoints without changing its class. By step 1.1 and [F7], lift it to a boundary-fixed smooth isotopy $g$ from the identity with $g_s(q_j)=z_j(s)$; this is a continuous path of homeomorphisms by [F10]. Step 1.4 gives $\Theta_n(x)=[g_1]$. The same isotopy lifts the truncated loop $z'=(z_1,\dots,z_{n-1})$, based at $Q'_n$. By [F3] and [F8] the forgetting map of [F2] satisfies
$$\varphi(x)=(\iota^F_*[z'])^{-1}\in\pi_1(F_{n-1}(D^2),Q'_n).$$
Step 1.5 therefore gives $\Theta'(\varphi(x))=[g_1]$ in the component group of the pointwise stabiliser of $Q'_n$. Step 1.2 identifies this class with $\psi(\Theta_n(x))$. Thus $\psi\circ\Theta_n=\Theta'\circ\varphi$, with every map based at the specified configuration. [F2, F3, F7, F8, F9, F10, step 1.1, step 1.2, step 1.4, step 1.5]

3.1 *Exactness of the Birman sequence.* By step 1.3, $\operatorname{Push}_n=\Theta_n\circ\kappa$ with $\Theta_n$ an isomorphism and $\kappa$ injective by [F2], so $\operatorname{Push}_n$ is injective: if $\operatorname{Push}_n([\gamma])=1$, then $\kappa([\gamma])=\Theta_n^{-1}(1)=1$ and hence $[\gamma]=1$. Its image is $\Theta_n(\operatorname{im}\kappa)=\Theta_n(\ker\varphi)$ by the exactness in [F2]. By step 2.1 and the injectivity of $\Theta'$, $$\Theta_n^{-1}\bigl(\ker\psi\bigr)=\ker(\psi\circ\Theta_n) =\ker(\Theta'\circ\varphi)=\ker\varphi,$$ so $\Theta_n(\ker\varphi)=\ker\psi$ and $\operatorname{im}\operatorname{Push}_n=\ker\psi$; this proves claims 1 and 2. Finally $\psi\circ\Theta_n=\Theta'\circ\varphi$ is the composite of the surjection $\varphi$ of [F2] with the isomorphism $\Theta'$, hence surjective, and therefore $\psi$ itself is surjective. Inserting these three facts into the sequence displayed in the statement gives a short exact sequence, with $F_{n-1}=\pi_1(Y_n,q_n)$ the free group of [F2] on the $n-1$ puncture meridians. [F2, F4, step 1.3, step 2.1] ∎

## Remarks

- The proof never uses the splittings, the section, or any explicit generating family of $PB_n$: it transports the Fadell-Neuwirth short exact sequence of [[thm-pure-braid-forgetting-a-strand-short-exact-sequence]] through the two braid-to-mapping-class identifications, and the only geometric input beyond those identifications is the smooth representative and extension pair of [F7]. Injectivity of $\operatorname{Push}_n$ is obtained because the fibre inclusion $\kappa$ is injective, itself a consequence of $\pi_2(F_{n-1}(\operatorname{int}D^2))=0$.
- The identification $\operatorname{Push}_n=\Theta_n\circ\kappa$ is where the two inverse signs cancel: the configuration identification $\Psi^{\mathrm{conf}}$ and the mapping-class identification $\Psi^{\mathrm{mc}}$ both invert the raw slicing, so the point push of a loop agrees with the image of the fibre class in $PB_n$ rather than with its inverse. Without that check the exact sequence would only be correct up to inversion of the free factor.
- The Axiom of Choice is used twice: through the Fadell-Neuwirth fibration that supplies [F2], and through countable choice for the smooth motion extension in step 2.1. The evaluation-boundary isomorphism and the smooth extension lemma carry their own choice hypotheses, which [A1] discharges.
