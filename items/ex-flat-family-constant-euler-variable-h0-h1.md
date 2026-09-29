---
id: ex-flat-family-constant-euler-variable-h0-h1
kind: example
title: "Compensating h0 and h1 jumps with constant Euler characteristic"
status: published
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - cor-euler-characteristic-locally-constant-flat-proper-family
  - def-axiom-of-choice
  - def-dependent-choice
  - def-euler-characteristic-coherent-sheaf
  - def-exact-sequence-sheaves
  - def-field
  - def-flat-and-faithfully-flat-modules-and-ring-maps
  - def-locally-finite-presentation-morphism
  - def-residue-field-scheme-point
  - def-sheaf-cohomology-derived-global-sections
  - ex-cohomology-o-d-projective-line-all-d
  - ex-upper-semicontinuity-jumping-h0
  - thm-long-exact-sequence-sheaf-cohomology
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "The Stacks Project, Cohomology of Schemes, Chapter 30, Sections 30.2-30.22"
      url: "https://stacks.math.columbia.edu/download/coherent.pdf"
    - title: "Ravi Vakil, The Rising Sea (29 August 2022), Sections 19.1, 19.6, 19.9, 28.1-28.2"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
verification:
  precheck: pass
  audited: 2026-09-30
---

## Statement

Let $k$ be a field ([[def-field]]), let $S=\operatorname{Spec}k[a]$ with origin
$(a)$ and generic point $\eta$, and let $\mathcal E$ be the rank-two
$S$-flat vector bundle on $X=\mathbb P^1_S$ of
[[ex-upper-semicontinuity-jumping-h0]], glued from the frames
$(u_0,v_0)$ over $U_0$ and $(u_1,v_1)$ over $U_1$ by
$$u_1=z^{-2}u_0,\qquad v_1=v_0+az^{-1}u_0,$$
with $0\to\mathcal O_X(-2)\to\mathcal E\to\mathcal O_X\to0$. For a point
$u\in S$ let $X_u$ be the fibre, $\mathcal E_u$ the pullback of $\mathcal E$
and
$$h^q(\mathcal E_u)=\dim_{\kappa(u)}H^q(X_u,\mathcal E_u)\qquad(q=0,1),$$
with cohomology as in [[def-sheaf-cohomology-derived-global-sections]] and
Euler characteristic $\chi(\mathcal E_u)=h^0(\mathcal E_u)-h^1(\mathcal E_u)$
([[def-euler-characteristic-coherent-sheaf]]). Then

1. at the origin, $(h^0,h^1)(\mathcal E_{(a)})=(1,1)$;
2. at every other point $u\ne(a)$ of $S$, including every closed point and the generic point $\eta$,
   $(h^0,h^1)(\mathcal E_u)=(0,0)$;
3. $\chi(\mathcal E_u)=0$ on every fibre, so the Euler characteristic is
   constant although $h^0$ and $h^1$ jump; this agrees with the local
   constancy of [[cor-euler-characteristic-locally-constant-flat-proper-family]]
   and shows that the corollary cannot be strengthened to local constancy of
   the individual $h^q$.

The field $k$ is arbitrary, including $k=\mathbb F_2$.

## Facts & Assumptions
**Given:** The Axiom of Choice (and the Axiom of Dependent Choice through the Euler-characteristic corollary), a field $k$, the base $S=\operatorname{Spec}k[a]$ and the glued rank-two $S$-flat bundle $\mathcal E$ on $\mathbb P^1_S$ of the companion example.

[F1] The bundle and its fibre sequences: $\mathcal E$ is locally free of rank two, finitely presented and flat over $S$, and sits in an exact sequence $0\to\mathcal O_X(-2)\to\mathcal E\to\mathcal O_X\to0$ with extension cocycle $a\,x_0^{-1}x_1^{-1}$, so that the fibre over a point $u\in S$ with residue field $\kappa(u)$ and scalar $\lambda=a(u)$ sits in $0\to\mathcal O(-2)\to\mathcal E_u\to\mathcal O\to0$ with extension class $\lambda\cdot[1/(x_0x_1)]$, a class that vanishes at the origin and is nonzero at every other point. Moreover $X\to S$ is proper of finite presentation. ([[ex-upper-semicontinuity-jumping-h0]], [[def-flat-and-faithfully-flat-modules-and-ring-maps]], [[def-locally-finite-presentation-morphism]], [[def-residue-field-scheme-point]])

[F2] Cohomology of the twisting sheaves on $\mathbb P^1$: for every field $\kappa$ and every $d\in\mathbb Z$ one has $h^0(\mathcal O(d))=\max(d+1,0)$ and $h^1(\mathcal O(d))=\max(-d-1,0)$; in particular $H^0(\mathcal O)\cong\kappa$, $H^1(\mathcal O)=0$ and $H^0(\mathcal O(-2))=0$, $H^1(\mathcal O(-2))\cong\kappa$. All higher cohomology vanishes. ([[ex-cohomology-o-d-projective-line-all-d]], [[def-sheaf-cohomology-derived-global-sections]])

[F3] The long exact sequence of the fibre sequence: $0\to H^0(\mathcal O(-2))\to H^0(\mathcal E_u)\to H^0(\mathcal O)\xrightarrow{\delta_u}H^1(\mathcal O(-2))\to H^1(\mathcal E_u)\to H^1(\mathcal O)\to0$ is exact, with $H^0(\mathcal O)$ and $H^1(\mathcal O(-2))$ one-dimensional $\kappa(u)$-vector spaces by [F2], and the connecting map $\delta_u$ is multiplication by the extension class $\lambda\cdot[1/(x_0x_1)]$, hence the zero map when $\lambda=0$ and an isomorphism when $\lambda\ne0$. The companion [[ex-upper-semicontinuity-jumping-h0]] computes the connecting map directly: lifting $1$ by $v_0$ and $v_1$ on the standard affine charts gives the Čech coboundary $v_1-v_0=\lambda z^{-1}u_0$ and hence $\delta_u(1)=\lambda[1/(x_0x_1)]$. ([[thm-long-exact-sequence-sheaf-cohomology]], [[def-exact-sequence-sheaves]], [F1], [F2])

[F4] Euler characteristics: for a point $u$ the Euler characteristic $\chi(\mathcal E_u)=h^0(\mathcal E_u)-h^1(\mathcal E_u)$ is a finite alternating sum, and for a proper morphism of finite presentation with a finitely presented module flat over the base the function $s\mapsto\chi(X_s,\mathcal F_s)$ is locally constant on $S$ ([[cor-euler-characteristic-locally-constant-flat-proper-family]], [[def-euler-characteristic-coherent-sheaf]]); the corollary inherits the Axiom of Choice and the Axiom of Dependent Choice ([[def-axiom-of-choice]], [[def-dependent-choice]]).

## Proof

**Proof technique:** direct: read the two low-degree cohomology groups of each fibre off the long exact sequence of $0\to\mathcal O(-2)\to\mathcal E_u\to\mathcal O\to0$, whose outer terms are known explicitly on $\mathbb P^1$, distinguishing only whether the connecting map (multiplication by the scalar $a(u)$ between one-dimensional spaces) is zero or an isomorphism, and compare the resulting alternating sums with the locally constant Euler characteristic.

1.1 The sequence and its outer terms. Fix $u\in S$ and write $\lambda=a(u)\in\kappa(u)$. By [F1] the fibre sequence $0\to\mathcal O(-2)\to\mathcal E_u\to\mathcal O\to0$ is exact, and by [F3] its long exact cohomology sequence begins and ends as $$0\to H^0(\mathcal O(-2))\to H^0(\mathcal E_u)\to H^0(\mathcal O)\xrightarrow{\delta_u}H^1(\mathcal O(-2))\to H^1(\mathcal E_u)\to H^1(\mathcal O)\to0,$$ with $H^0(\mathcal O(-2))=0$, $H^0(\mathcal O)\cong\kappa(u)$ and $H^1(\mathcal O(-2))\cong\kappa(u)$ by [F2] applied with $d=0$ and $d=-2$, and $H^1(\mathcal O)=0$. [F1, F2, F3]

1.2 The connecting map. By [F3] the map $\delta_u:H^0(\mathcal O)\to H^1(\mathcal O(-2))$ sends $1$ to the extension class $\lambda\cdot[1/(x_0x_1)]$; under the one-dimensional identifications of [F2], it is multiplication by $\lambda$. Hence $\delta_u=0$ when $\lambda=0$, and $\delta_u$ is an isomorphism when $\lambda\ne0$. [F1, F2, F3]

1.3 The special fibre. At the origin $u=(a)$ one has $\lambda=0$, so $\delta_u=0$; exactness of the sequence of 1.1 gives $H^0(\mathcal E_{(a)})\cong H^0(\mathcal O)\cong\kappa(u)$ and $H^1(\mathcal E_{(a)})\cong H^1(\mathcal O(-2))\cong\kappa(u)$, the maps $H^0(\mathcal O(-2))\to H^0(\mathcal E_u)$ and $H^1(\mathcal E_u)\to H^1(\mathcal O)$ having zero source and target respectively. Therefore $(h^0,h^1)(\mathcal E_{(a)})=(1,1)$. [F2, 1.1, 1.2]

1.4 The other fibres. If $u\ne(a)$ then $\lambda\ne0$: a prime of $k[a]$ containing $a$ contains the maximal ideal $(a)$ and hence equals $(a)$, so this includes all closed points of arbitrary residue degree and the generic point — so by 1.2 the map $\delta_u$ is an isomorphism between one-dimensional spaces. Exactness of 1.1 then gives $H^0(\mathcal E_u)=\ker\delta_u=0$ and $H^1(\mathcal E_u)=\operatorname{coker}\delta_u=0$, that is, $(h^0,h^1)(\mathcal E_u)=(0,0)$. [F2, 1.1, 1.2]

1.5 The Euler characteristic. By 1.3, $\chi(\mathcal E_{(a)})=1-1=0$; by 1.4, $\chi(\mathcal E_u)=0-0=0$ for every $u\ne(a)$. Hence $\chi(\mathcal E_u)=0$ for every $u\in S$, a constant, in agreement with the local constancy of [F4] applied to the proper morphism of finite presentation $X\to S$ and the finitely presented module $\mathcal E$ flat over $S$. [F1, F4, 1.3, 1.4]

2.1 Boundaries and consistency. The field $k$ is arbitrary, including $k=\mathbb F_2$; the special fibre is the origin $(a)$ with residue field $k$ and the generic fibre is computed over $k(a)$; every other point, including closed points of higher residue degree, falls under 1.4. The example shows that the Euler characteristic can be locally constant — here constant $0$ — while $h^0$ and $h^1$ both jump from $0$ to $1$ at the origin; their contributions to the alternating sum have opposite signs, so it is unchanged; the local constancy in [F4] therefore cannot be improved to local constancy of the individual $h^q$. The Axiom of Choice and the Axiom of Dependent Choice are inherited through [F4] and the long exact sequence of [F3], and the connecting-map identification is proved by the companion example's two-chart lift calculation; no further selection is made. [F3, F4, 1.1, 1.3, 1.4, 1.5] ∎
