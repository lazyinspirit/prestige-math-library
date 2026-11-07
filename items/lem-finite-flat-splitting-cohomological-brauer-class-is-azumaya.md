---
id: lem-finite-flat-splitting-cohomological-brauer-class-is-azumaya
kind: lemma
title: "A finite-flat splitting of a Brauer class gives an Azumaya algebra"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 10
deps:
  - def-axiom-of-choice
  - def-cohomological-brauer-group-of-a-variety
  - def-azumaya-algebra-on-a-variety
  - thm-pgl-torsors-classify-azumaya-algebras
  - thm-smooth-affine-commutative-groups-have-etale-fppf-comparison
  - thm-abelian-sheaves-on-a-site-have-enough-injectives
  - lem-site-slice-restriction-locality-and-composition
  - lem-faithfully-flat-effective-descent-of-modules-and-algebras
justified_by: []
proof_strategy: direct
axiom_use: "AC is assumed for the actual fppf injective models, site comparison and descent."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "A. J. de Jong, A result of Gabber"
      url: "https://www.math.columbia.edu/~dejong/papers/2-gabber.pdf"
      locator: "§2.5 and §2.13–2.15, gerbe and finite-flat pushforward; the injective-resolution construction below is reconstructed locally."
verification: {}
---

## Statement

Assume AC. Let $X$ be a Noetherian scheme, and let $\alpha\in H^2_{\mathrm{et}}(X,\mathbb G_m)$. Suppose a finite locally free surjective morphism $\pi:Y\to X$ has positive constant degree $d$ and $\pi^*\alpha=0$ in $H^2_{\mathrm{et}}(Y,\mathbb G_m)$. Then there is a degree-$d$ Azumaya algebra on $X$ whose étale cohomological class is $\alpha$. No Čech representative of $\alpha$ on an ordinary cover is assumed.

## Facts & Assumptions

**Given:** The Noetherian scheme, cohomology class and finite locally free splitting morphism in the Statement.

[A1] The Axiom of Choice is assumed. [[def-axiom-of-choice]]

[F1] Smooth affine étale and fppf cohomology agree on Noetherian schemes. [[thm-smooth-affine-commutative-groups-have-etale-fppf-comparison]]

[F2] On a fixed set-sized site, abelian sheaves have actual injective resolutions under AC. [[thm-abelian-sheaves-on-a-site-have-enough-injectives]]

[F3] Restriction to a site slice is exact and preserves injectives, so its restricted resolution computes actual cohomology. [[lem-site-slice-restriction-locality-and-composition]]

[F4] Faithfully flat module and algebra descent is effective. [[lem-faithfully-flat-effective-descent-of-modules-and-algebras]]

[F5] Degree-$d$ Azumaya algebras are classified by $\operatorname{PGL}_d$ torsors, and their scalar lifting obstruction is their cohomological class. [[def-azumaya-algebra-on-a-variety]] [[thm-pgl-torsors-classify-azumaya-algebras]]

## Proof

**Proof technique:** construct the splitting gerbe from one injective resolution and push a local splitting line through the finite-flat map.

1.1 Use [F1] to regard $\alpha$ as an fppf class. On a fixed set-sized big fppf site over $X$, take an injective resolution $\mathbb G_m\to I^0\to I^1\to I^2\to\cdots$ by [F2], and represent $\alpha$ by $\tau\in I^2(X)$ with $d\tau=0$. For $T\to X$, define an object to be $s\in I^1(T)$ with $ds=\tau|_T$, and an arrow $s\to t$ to be $a\in I^0(T)$ with $da=s-t$; arrows compose by addition. Exactness of the resolution as sheaves makes objects and arrows locally exist, and the automorphism sheaf of every object is $\ker(I^0\to I^1)=\mathbb G_m$. For descent, a compatible family of arrows is a Čech $1$-cocycle in $I^0$. Its Čech class vanishes: the augmented free-sheaf complex of a covering nerve is locally split, and applying $\operatorname{Hom}(-,I^0)$ is exact by injectivity. Adjusting the local objects by its Čech primitives makes them agree and hence glue in the sheaf $I^1$; arrows glue in $I^0$. These formulas give the actual $\mathbb G_m$-banded groupoid associated to the chosen representative, without assuming an ordinary Čech representative for $\alpha$. [A1, F1, F2, given, construct, algebra]

2.1 By [F3], the same resolution restricted to the slice over $Y$ computes $\pi^*\alpha$. Its vanishing therefore gives a global $s_Y\in I^1(Y)$ with $ds_Y=\tau|_Y$. If $s$ is an object over an fppf test $T\to X$, the sheaf $L_s$ of arrows from $s|_{Y_T}$ to $s_Y|_{Y_T}$ is a $\mathbb G_m$-torsor on $Y_T$: differences of arrows are unique units, and arrows exist locally by step 1.1. The associated line bundle is obtained by gluing trivial lines using those unit transitions. Set $E_s=(\pi_T)_*L_s$. Since $\pi_T$ is finite locally free of rank $d$, $E_s$ is finite locally free of rank $d$: on an affine trivialization it is the finite free algebra of the cover, and [F4] descends the local bases. [F3, F4, step 1.1, choose, construct, algebra]

3.1 An arrow $s\to t$ over $T$ induces an isomorphism $E_t\to E_s$. Changing the arrow by a unit of $T$ scales that isomorphism, so its conjugation action on endomorphism algebras is independent of the chosen arrow. Step 1.1 supplies objects locally and arrows locally between objects; the canonical conjugation maps consequently glue the algebras $\mathcal E nd(E_s)$ over all tests to an $\mathcal O_X$-algebra $\mathcal A$ by [F4]. Locally $E_s$ is free of rank $d$, so [F5] makes $\mathcal A$ a degree-$d$ Azumaya algebra. [F4, F5, step 1.1, step 2.1, construct, algebra]

4.1 The construction sends each local object $s$ to a splitting module $E_s$ of $\mathcal A$, and each automorphism $u\in\mathbb G_m$ of $s$ to scalar multiplication by $u$ on that module. Conversely, two local splitting modules of the same matrix algebra differ locally by a line, and an intertwiner is unique up to a scalar; this is the matrix-unit argument in [F5]. Thus the resulting groupoid of splitting modules has exactly the same local objects, arrows and scalar band as the resolution groupoid in step 1.1. On a common local refinement, its scalar triple-product defect is the cocycle obtained from the same $\tau$, so [F5] identifies its fppf class with $\alpha$. Finally [F1] transports that equality to étale cohomology. The degree-one cover and the zero class are included. [F1, F5, step 1.1, step 2.1, step 3.1, algebra] ∎
