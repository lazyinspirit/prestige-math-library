---
id: lem-integrable-round-disk-boundary-attachment-exhausts-its-nodal-limit
kind: lemma
title: "The integrable round disk attachment exhausts its nodal limit"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [def-countable-choice, lem-integrable-round-disk-boundary-attachment-has-an-explicit-regular-strip-family, thm-proper-round-disk-component-boundary-degeneration-count-is-one, lem-transverse-linear-strip-cauchy-riemann-isomorphism, lem-product-integrable-transverse-strip-end-exponential-asymptotics, thm-countable-choice-bubbled-transverse-strip-breaking-compactness, thm-continuous-partials-and-cauchy-riemann-imply-holomorphic, thm-zero-order-factorization-holomorphic-function]
dependency_level: 15
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
---

## Statement

Assume Countable Choice. Use the standard integrable proper round disk component $A$, actual transverse generator $x$, radial second-system crossing germ, and whole-image ordered product chart of the explicit boundary-attachment theorem. Thus $\chi(\overline A)=\overline{\mathbb D}$, $\chi(x_i)=1$, and $W=i(1-\chi)/(1+\chi)$. Take the inactive coordinate disks small enough that their first-system arcs are real lines, their second-system crossing germs are imaginary lines, and they are disjoint from $\overline A$ and one another.

Every nonconstant smooth finite-energy standard holomorphic strip of actual domain $A$, with both ends $x$, whose full closed image lies in this ordered product chart and whose entire upper boundary lies in the specified product crossing germ, is exactly
$$u(s,t)=u_\epsilon(s-b,t),\qquad \epsilon>0,\quad b\in\mathbb R,$$
where $u_\epsilon$ is the explicit family and its upper edge lies in that germ. Both parameters are unique. Its actual regularity and index are those of that family.

In particular suppose a bounded-energy sequence of such standard domain-$A$ strips has an actual bubbled-strip limit, after longitudinal translation, consisting of the constant strip $x$ and precisely the unique unit-domain disk attached at $(0,0)$. Require the actual smooth core convergence and connecting-annulus and outer-tail image collapse supplied by bubbled-strip compactness; there are no other nonconstant components. No whole-image-chart or upper-germ assumption on the sequence is needed here. Eventually every strip belongs to the displayed family, with $\epsilon_n\to0$ and $b_n\to0$. Thus the exact integrable family exhausts this nodal limit.

This proves exhaustion for this integrable disk-component model. It does not supply uniform gluing for perturbed structures, count or factor a many-boundary component, or classify all low-index boundary strata.

## Statement references

[[lem-integrable-round-disk-boundary-attachment-has-an-explicit-regular-strip-family]]

## Facts & Assumptions

**Given:** The actual disk-component model, ordered product neighborhood, physical boundary curves and fixed generator. Domain means actual root multiplicity on every component of the complement of both attaching systems.

[F1] [[lem-integrable-round-disk-boundary-attachment-has-an-explicit-regular-strip-family]] constructs the exact family $W=-\epsilon/\sinh(\pi z/2)$, its domain, energy, two-dimensional regular kernel and local zero charts. [[thm-proper-round-disk-component-boundary-degeneration-count-is-one]] supplies its whole-image product chart, unique nodal disk and positive separation from all inactive circles.

[F2] [[lem-product-integrable-transverse-strip-end-exponential-asymptotics]] gives actual all-order end decay at rate $\pi/2$ in the exact real/imaginary generator charts. [[lem-transverse-linear-strip-cauchy-riemann-isomorphism]] gives zero kernel of $D_0=\partial_s+i\partial_t$ on the whole $H^1$ strip with real lower and imaginary upper boundary values.

[F3] Smooth real-boundary holomorphic functions reflect across a straight edge: conjugation matches tangential and normal derivatives, and [[thm-continuous-partials-and-cauchy-riemann-imply-holomorphic]] applies. [[thm-zero-order-factorization-holomorphic-function]] gives the isolated finite power order at a zero of a nonzero holomorphic germ.

[F4] [[thm-countable-choice-bubbled-transverse-strip-breaking-compactness]] supplies actual smooth convergence on all component cores, matched nodes and collapse of images on connecting and outer regions. Its local bubble-tree supplier supplies the corresponding collapsed annuli. These are the convergence properties used in the sequential assertion, not formal compactification axioms.

## Proof

1.1 Write the actual strip in its ordered product chart. Every inactive coordinate is holomorphic, has real lower boundary and imaginary upper boundary, and tends to zero at both ends after centering its node coordinate. By [F2] its tails and every derivative decay exponentially, and its middle is smooth on a compact strip, so it belongs to the whole $H^1$ domain in [F2]. It is therefore identically zero. Only the active root varies. Its interior image lies in $A$: a value outside $\overline A$ gives, by holomorphic openness, nearby points outside the finite attaching curves with positive actual multiplicity where the domain is zero. A value on $\partial A$ at an interior source point gives the same contradiction on its exterior side. Nonconstancy excludes an identically boundary-valued root. The active coordinate consequently has $W$ in the open upper half-plane on the interior. On the lower edge $W$ is real, except at the target value $\chi=-1$ where it can be infinite; on the upper edge it is finite imaginary and stays in its crossing germ. [F1, F2, given, construct, contradiction]

2.1 All poles of $W$ are isolated points of the finite lower boundary. In fact $\chi$ is smooth there with values on the unit circle. Near a point with $\chi=-1$, the holomorphic coordinate $1/W$ has real boundary values and is not identically zero; [F3] extends it and gives a zero of finite order $r$. Hence $W=c(z-b)^{-r}+O((z-b)^{1-r})$, with real nonzero leading coefficient $c$. The condition $\operatorname{Im}W>0$ on the open upper half-disk forces $r=1$ and $c<0$: for $z-b=\rho e^{i\theta}$ the leading imaginary part is $-c\rho^{-r}\sin(r\theta)$; for $r\ge2$ it has both signs for $0<\theta<\pi$, and for $r=1$ its positivity requires the stated sign. Thus every pole is simple. There are finitely many: [F2] excludes them on both far tails, while isolated reflected zeros on a compact lower segment cannot accumulate. There is at least one. Otherwise $W$ would be bounded on the compact middle and tend to zero on the tails, whereas the unit domain requires preimages of arbitrarily large upper-half-plane values away from the finite curve system. [F2, F3, step 1.1, construct, algebra]

3.1 There is exactly one pole. Each simple pole with negative real residue gives one interior preimage of every sufficiently large value $iR$: its reciprocal is a holomorphic local coordinate at that boundary point, and the preimage of $1/(iR)$ lies on the upper source side, by the sign computed in step2.1. Distinct pole neighborhoods are disjoint. For large $R$ choose the value off both attaching systems; equivalently vary $iR$ slightly if necessary. Its target point lies in $A$ and has total actual multiplicity one. Thus two poles would contradict the domain. Denote the unique pole by $b$ and its residue by $c<0$, and put $\epsilon=-\pi c/2>0$. Subtract the explicit scalar function $-\epsilon/\sinh(\pi(z-b)/2)$. It has precisely the same simple pole and residue. The difference therefore extends smoothly across $b$, is holomorphic on the whole strip, and has real lower and imaginary upper boundary values. At the ends it belongs to $H^1$ by [F2] and the exponential formula; on the finite middle its canceled pole is removable by [F3]. The zero-kernel assertion in [F2] makes the difference zero. This proves the claimed exact formula. The pole position recovers $b$ and its residue recovers $\epsilon$, proving uniqueness. Actual regularity, index and the local two-parameter zero chart now follow from [F1], without an additional transversality hypothesis. [F1, F2, F3, step 2.1, construct, algebra]

4.1 Consider the actual sequence in the sequential assertion. The images of the limiting base and bubble are contained in the union of $\overline A$ in its active coordinate and the constant inactive coordinates. This compact union is contained in the open whole-image ordered product chart, with positive distance from its complement. Smooth convergence on finitely many compact component cores puts their images in that neighborhood. The remaining connecting annuli, far portions of the bubble near its node and outer strip tails have arbitrarily small image diameter and matched node value $x$, by [F4]. Choose the cores large enough, then the sequence index large enough, to put those remaining images there too. Thus the full images eventually lie in the required product chart. The whole upper physical boundary converges uniformly to $x$: on each finite base core it stays away from the lower attachment point and converges smoothly to the constant base, and its two outer tails have collapsed images near $x$. The lower half-disk containing the bubbling cores can be chosen with radius less than $1/4$, so none meets that upper edge. Hence that entire edge eventually lies in the prescribed product crossing germ. Steps1.1–3.1 apply to every sufficiently late sequence member. This derives the chart and germ hypotheses from the actual nodal convergence, rather than adding them to the sequence. [F4, step 1.1, step 3.1, construct, algebra]

5.1 For the resulting parameters the upper-edge formula is $W(s,1)=i\epsilon_n/\cosh(\pi(s-b_n)/2)$. Uniform convergence of that whole edge to $x$, just proved, makes its supremum $\epsilon_n$ tend to zero. At $s=b_n,t=0$ the target value is always $\chi=-1$, a fixed positive distance from $x_i$. Outer-tail image collapse bounds $b_n$ in a fixed compact longitudinal interval. Any subsequential limit other than zero would contradict smooth convergence of the constant base away from the one attachment point, evaluated at $(b_n,0)$. Therefore $b_n\to0$. This proves sequential exhaustion, with the actual positive-parameter local regular charts already established by [F1]. No uniform inverse at the nodal parameter, perturbed-structure collar, or general boundary-stratum classification has been inferred. [F1, F4, step 3.1, step 4.1, algebra] ∎
