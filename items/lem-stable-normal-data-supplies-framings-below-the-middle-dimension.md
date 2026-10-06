---
id: lem-stable-normal-data-supplies-framings-below-the-middle-dimension
kind: lemma
title: Stable normal data supplies framings of the surgery spheres below the middle dimension
deps:
- def-countable-choice
- lem-relative-hurewicz-and-general-position-produce-surgery-spheres
- lem-stably-trivial-bundles-over-spheres-below-the-rank-are-trivial
- def-degree-one-normal-map-for-the-surgery-program
- def-framed-embedded-surgery-sphere
- def-normal-and-conormal-bundles-of-an-embedded-submanifold
- thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold
- def-stable-normal-bundle-of-a-compact-smooth-manifold
- def-surgery-trace-cobordism
- thm-upper-boundary-of-the-surgery-trace-is-the-surged-manifold
- lem-fundamental-class-of-a-boundary-pushes-forward-to-zero
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Andrew Ranicki, Algebraic and Geometric Surgery (Oxford Mathematical Monographs, Oxford University Press
      2002; complete electronic copy)
    url: https://math.uchicago.edu/~shmuel/tom-readings/ranicki-intro
    locator: Propositions 10.24 and 10.25(i), printed p. 210, and Definition 10.6, printed p. 197 (b-framed embeddings
      in a normal map; for $2n+1\le m$ every element of $\pi_{n+1}(f)$ can be killed)
  - title: Wolfgang Lück, A Basic Introduction to Surgery Theory (complete lecture notes, ICTP/Münster)
    url: https://him-lueck.uni-bonn.de/data/ictp.pdf
    locator: Chapter 3 §3.4, printed pp. 72-75 (the normal map, its bundle data, and the framing of the attached
      sphere)
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
proof_strategy: direct
dependency_level: 7
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $(f,b):M^m\to X$ be a degree-one normal map with $M$ connected and target stable bundle $\xi$, let $2p+2\le m$, $q=m-p$, and let $x\in\pi_{p+1}(f)$ have an embedded boundary sphere $g:S^p\hookrightarrow M$ and its supplied target nullhomotopy as in the representation lemma. For $p=0$, additionally require that transport in the determinant line of $\xi$ along the represented core path agrees with the two endpoint orientations supplied by $b$ and the orientation of $M$; this holds for every such class if $\xi$ is oriented compatibly with $b$. Then the rank-$q$ normal bundle $\nu_g$ is trivial, and its trivialization can be chosen compatible, after stabilization and homotopy, with the stable framing prescribed by $b$ and that nullhomotopy. Hence it gives a framed embedded surgery sphere $S^p\times D^q\hookrightarrow M$ representing valid normal-map surgery data. The ambient normal bundle of the Euclidean composite is only asserted stably trivial; cancellation of stable triviality uses $p<q$, not an arbitrary triviality of an orthogonal complement. The normal map and its stable bundle data extend over the trace even for the finite CW target: the surgery endpoint is again degree one and normally bordant to $(f,b)$.

## Facts & Assumptions

[F1] Below the middle dimension, relative map classes admit embedded sphere representatives with stably trivial pulled-back normal data. [[lem-relative-hurewicz-and-general-position-produce-surgery-spheres]]

[F2] Normal and conormal bundles of an embedded submanifold. [[def-normal-and-conormal-bundles-of-an-embedded-submanifold]]

[F3] Stable normal bundle of a compact smooth manifold. [[def-stable-normal-bundle-of-a-compact-smooth-manifold]]

[F4] A stably trivial smooth rank-$q$ bundle over $S^p$ is trivial when $p<q$. [[lem-stably-trivial-bundles-over-spheres-below-the-rank-are-trivial]]

[F5] A smooth embedded submanifold has a normal tubular neighbourhood under Countable Choice. [[thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold]]

[F6] A product embedding $S^p\times D^q\hookrightarrow M$ with its sphere as zero section is a framed embedded surgery sphere, by [[def-framed-embedded-surgery-sphere]].

[F7] The surgery trace is the incoming cylinder with the $(p+1)$-handle attached, with the outgoing face the surged manifold. [[def-surgery-trace-cobordism]], [[thm-upper-boundary-of-the-surgery-trace-is-the-surged-manifold]]

[F8] The image of the boundary fundamental class in the oriented bordism vanishes; functorial pushforward therefore preserves the degree-one target class. [[lem-fundamental-class-of-a-boundary-pushes-forward-to-zero]]

## Proof


**Given:** Countable choice, the normal-map datum, the embedded representative and target nullhomotopy, and $q=m-p\ge p+2$.

1.1 The representation lemma proves that $g^*\nu_M$ is stably trivial, with the stable trivialization determined by $b$ and the pulled-back target bundle over the nullhomotopy disk. The tangent-normal identity along $g$ is $g^*TM=TS^p\oplus\nu_g$. The standard radial normal line of $S^p\subset\mathbb R^{p+1}$ gives $TS^p\oplus\varepsilon^1\cong\varepsilon^{p+1}$. Adding the stable normal splitting of $TM$ shows that $\nu_g$ is stably trivial. Equivalently the normal bundle of the Euclidean composite splits as $\nu_g\oplus g^*\nu_M$ and is stably trivial; neither summand is declared actually trivial merely because it is a complement. [given, construct, algebra, F1, F2, F3]

2.1 Since $p<q$, the sphere-bundle cancellation lemma gives an actual normal frame. For the stable-framing comparison below take $p\ge1$; the zero-sphere determinant comparison is treated separately below. We also check compatibility with the prescribed stable framing: in its construction the images of the added trivial directions form a map $T:S^p\to V_k(\mathbb R^{q+k})$. The nullhomotopy of $T$ over the ball and the full complementary frame constructed there give a full orthogonal completion on the boundary which itself extends over the ball. Therefore the difference between the resulting stabilized actual frame and the supplied stable frame is nullhomotopic. Smoothing its normal sections preserves this homotopy class. Thus the actual framing realizes the supplied stable normal data, not merely the abstract isomorphism type of the bundle. [step 1.1, construct, F4]

3.1 The tubular neighbourhood theorem turns this frame into a product embedding of a neighbourhood of the zero section. Compactness of $S^p$ supplies one uniform sufficiently small normal radius, which can be rescaled to $D^q$. It is the required framed embedded surgery sphere. The compatible stable framing together with the chosen nullhomotopy is precisely the normal-map extension data consumed by the surgery bordism supplier. For $p=0$, choose endpoint bases compatible with the incoming orientations and the handle radial-line convention. The determinant-transport hypothesis puts their comparison matrices in the same component of the general linear group, so an interval interpolation extends them; finite bases alone would not ensure this compatibility. All other cases use the stated rank inequality. [step 2.1, construct, F5, F6]

4.1 Construct the extension of the normal datum explicitly. The target nullhomotopy trivializes its pulled-back stable bundle over the core disk by the finite continuous projection construction. The trace handle has trivial tangent bundle, so its stable normal bundle has a fixed trivialization. Along the attaching sphere the comparison of these two stable trivializations with the incoming datum $b$ is precisely the stabilized difference checked nullhomotopic in step 2.1 for $p\ge1$, or interpolated with compatible determinant signs in step 3.1 for $p=0$; this is the framing compatibility, including the radial tangent line of the sphere. Use that nullhomotopy to extend the comparison matrix over the core disk, constant on a short attaching collar, and extend it over the normal $D^q$ factor by its contraction. It agrees with $b$ on the handle attaching region after collar interpolation, so pastes to a stable bundle isomorphism $B$ over the trace. The map itself extends by the supplied core nullhomotopy and contraction of the $D^q$ factor; no smoothing into the CW target is asserted. Restricting to the outgoing face gives $(f',b')$. The oriented trace has boundary $M'\sqcup(-M)$, and pushing its boundary fundamental class to $X$ gives zero, so $f'_*[M']=f_*[M]=[X]$. Thus the endpoint is degree one and $(F,B)$ is a normal bordism over the same target datum. This proves the finite-CW-target extension directly, rather than invoking the source13 proposition whose statement currently assumes a smooth target and already-supplied $B$. [step 2.1, step 3.1, construct, F7, F8] ∎
