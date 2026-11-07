---
id: lem-affine-azumaya-representatives-give-derived-twisted-local-models
kind: lemma
title: "Affine Azumaya representatives give derived twisted local models"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 10
deps:
  - def-axiom-of-choice
  - lem-standard-opens-proj-affine
  - thm-smooth-affine-commutative-groups-have-etale-fppf-comparison
  - thm-abelian-sheaves-on-a-site-have-enough-injectives
  - thm-pgl-torsors-classify-azumaya-algebras
  - lem-coherent-groupoid-modules-extend-from-invariant-open
justified_by: []
proof_strategy: direct
axiom_use: "AC is assumed for the declared site, groupoid-extension and PGL suppliers."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "A. J. de Jong, A result of Gabber"
      url: "https://www.math.columbia.edu/~dejong/papers/2-gabber.pdf"
      locator: "§2.5–2.14 and §3.4, affine local models and coherent extension; the supplied-affine-representability case is reconstructed here."
verification: {}
---

## Statement

Assume AC. Let $k$ be an infinite field, let $X$ be an integral quasi-projective finite-type $k$-scheme, and let $\alpha\in H^2_{\mathrm{et}}(X,\mathbb G_m)$. Suppose that for every affine open $V\subseteq X$ the restriction $\alpha|_V$ is represented by an Azumaya algebra. For the actual injective-resolution groupoid of $\alpha$, and every finite set $T$ of closed points of $X$, there is a coherent $\alpha$-twisted module of positive generic rank which is locally free near $T$. This statement assumes affine representability; it does not prove it.

## Facts & Assumptions

**Given:** The infinite field, integral quasi-projective scheme, cohomology class and affine-representability hypothesis in the Statement.

[A1] The Axiom of Choice is assumed. [[def-axiom-of-choice]]

[F1] A homogeneous principal open in projective space is affine. [[lem-standard-opens-proj-affine]]

[F2] Étale and fppf multiplicative cohomology agree on Noetherian schemes, and the fixed fppf site has actual injective resolutions. [[thm-smooth-affine-commutative-groups-have-etale-fppf-comparison]] [[thm-abelian-sheaves-on-a-site-have-enough-injectives]]

[F3] PGL torsors classify Azumaya algebras and their scalar lifting obstruction is the actual cohomological class. [[thm-pgl-torsors-classify-azumaya-algebras]]

[F4] Coherent modules on a Noetherian flat qcqs scheme groupoid extend from an invariant quasi-compact open. [[lem-coherent-groupoid-modules-extend-from-invariant-open]]

## Proof

**Proof technique:** find one affine neighborhood of the finite set, use its Azumaya splitting module, and extend through the actual resolution groupoid.

1.1 If $T$ is empty, replace it by one closed point of the nonempty finite-type scheme $X$; a model near that point also serves the empty set. Embed $X$ as an open subscheme of its projective closure $\overline X$, with closed boundary $Z=\overline X\setminus X$. For each $t\in T$ choose a homogeneous form vanishing on $Z$ but not at $t$. Raise their degrees to a common degree by multiplying by suitable coordinate powers which do not vanish at the corresponding point. Evaluation at each $t$ is a nonzero linear map on their finite-dimensional span. For each $t$, compose evaluation with a $k$-linear functional on the finite extension $\kappa(t)$ which is nonzero on its image. Since $k$ is infinite, the product of these finitely many nonzero linear forms is not the zero polynomial. Choose a form $f$ in the span nonzero at every point of $T$. By [F1], $\overline X\cap D_+(f)$ is affine; it lies in $X$ because $f$ vanishes on $Z$. Thus one affine open $V\subseteq X$ contains all of $T$. [A1, F1, given, choose, construct, algebra]

2.1 By hypothesis, choose an Azumaya algebra $\mathcal A$ on $V$ representing $\alpha|_V$. Fix an actual fppf injective resolution representing $\alpha$ as in [F2]. Its local solution groupoid has objects $s$ with $ds=\tau$ and arrows in $I^0$ with the prescribed differential; exactness gives local objects and arrows and the scalar automorphism band. By [F3], the groupoid of vector-bundle splittings of $\mathcal A$ has the same scalar obstruction class. To identify them, choose local splitting objects, lift their scalar transition defect into the same injective resolution, and use equality of the two $H^2$ classes to correct by a global $I^1$ coboundary; the resulting local identifications agree up to the scalar arrows and glue. The universal splitting modules therefore define a positive-rank locally free $\alpha$-twisted module $E$ over $V$. [A1, F2, F3, step 1.1, choose, construct, algebra]

3.1 Choose finitely many affine étale objects $U_i\to X$ on which the resolution groupoid has objects, and put $U=\coprod_iU_i$. Their images cover $X$ because $X$ is quasi-compact. The arrow scheme $R=U\times_{\mathscr G_\alpha}U$ is a $\mathbb G_m$-torsor over $U\times_XU$: it is the sheaf of arrows between two local objects and is represented by the complement of the zero section of the associated line bundle. Hence $U,R$ are Noetherian and quasi-compact, while the source and target maps are flat and quasi-separated; the identities and composition are the actual groupoid maps. The preimage of $V$ is an invariant quasi-compact open. Apply [F4] to extend the coherent groupoid module corresponding to $E$ from that open to the whole groupoid. Descent identifies this with a coherent $\alpha$-twisted module on $X$ whose restriction to $V$ is $E$. [A1, F2, F4, step 2.1, choose, construct, algebra]

4.1 The extended twisted module is locally free near $T$ because $T\subset V$. Its generic rank is the positive rank of $E$, since $X$ is integral and the nonempty open $V$ is dense. A coherent module of positive generic rank over an integral Noetherian scheme is locally free on some dense open, by finite presentation and a nonzero minor after passing to the generic point. This supplies the asserted local model. The affine-representability premise remains a premise. [step 1.1, step 2.1, step 3.1, algebra] ∎
