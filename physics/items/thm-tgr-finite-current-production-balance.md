---
id: thm-tgr-finite-current-production-balance
kind: theorem
title: "Complete finite-slab production and outward-flux balance"
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 3
deps:
  - def-countable-choice
  - def-gr-smooth-lorentzian-objects
  - def-gr-metric-volume-form-and-current-flux
  - def-tgr-spacelike-current-slab
  - lem-tgr-c1-current-density-divergence
  - lem-tgr-coordinate-boxes-are-compact-jordan
  - lem-tgr-normal-flux-coordinate-density
  - def-riemann-integral-over-a-jordan-set
  - def-multidimensional-darboux-integral
  - def-multidimensional-darboux-sums
  - thm-ftc-second-part
  - thm-jordan-fubini-by-sections
dependency_roles:
  def-countable-choice: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-metric-volume-form-and-current-flux: mathematical-premise
  def-tgr-spacelike-current-slab: mathematical-premise
  lem-tgr-c1-current-density-divergence: mathematical-premise
  lem-tgr-coordinate-boxes-are-compact-jordan: mathematical-premise
  lem-tgr-normal-flux-coordinate-density: mathematical-premise
  def-riemann-integral-over-a-jordan-set: mathematical-premise
  def-multidimensional-darboux-integral: mathematical-premise
  def-multidimensional-darboux-sums: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  thm-jordan-fubini-by-sections: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: "Harvey Reall, Part III General Relativity, University of Cambridge lecture notes, 12 October 2022, §§8.6–8.7, printed pp. 108–110 (PDF pp. 109–111)"
      url: "https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
      locator: "§8.7 states Stokes' flux balance and the metric divergence theorem for non-null boundaries. The present proof is restricted to a finite coordinate box and proves the C¹ case directly."
    - title: "David Tong, General Relativity, University of Cambridge Part III Mathematical Tripos lecture notes, Michaelmas Term 2019, §3.2.4 and §4.5.5, printed pp. 110–112 and 187–189 (PDF pp. 117–119 and 194–196)"
      url: "https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
      locator: "§4.5.5 gives the current charge change plus boundary flux and requires no side outflow for equal slice charges. §3.2.4 states the smooth metric divergence theorem for purely spacelike or timelike boundaries. The coordinate-box proof here also allows null side faces because it uses the flux form/coordinate face integrals."
---

## Statement

Assume the $\mathrm{AC}_\omega$ background of
[[def-tgr-spacelike-current-slab]]. Let $K$, $\Sigma_t$, the $C^1$ current
$J$, its slice charge $Q_J(t)$ and its net outward side flux $\Phi_J(B)$ be
as in [[def-tgr-spacelike-current-slab]]. Use the oriented metric volume form
of [[def-gr-metric-volume-form-and-current-flux]] clause (a). Put
$\Pi:=\nabla_aJ^a$, using the $C^1$ divergence of
[[lem-tgr-c1-current-density-divergence]]. Then the exact finite-slab balance
is
$$Q_J(t_1)-Q_J(t_0)+\Phi_J(B)=\int_K\Pi\,\mathrm{vol}_g.$$
Here the four-volume integral is the Riemann integral on the bounded Jordan
slab $K$, whose compact closure is the supplied coordinate box. If
$\Pi\ge0$ everywhere on $K$, then
$Q_J(t_1)+\Phi_J(B)\ge Q_J(t_0)$. In particular, nonnegative local
production implies $Q_J(t_1)\ge Q_J(t_0)$ when the **net outward side flux**
is zero. If $\Pi=0$, the identity instead reads
$Q_J(t_1)-Q_J(t_0)=-\Phi_J(B)$, so zero production alone does not imply
constant slice charge.

## Facts & Assumptions

**Given:** The $\mathrm{AC}_\omega$ convention, a positively oriented Lorentzian coordinate slab $K=[t_0,t_1]\times\Omega$ with nondegenerate rectangular factors and compact closure $\overline K$, spacelike slices, its future unit normal and induced volume, and a $C^1$ current on a neighborhood of $\overline K$.

[A1] The Countable Choice assumption is the tangent-bundle background recorded in [[def-countable-choice]] and [[def-gr-smooth-lorentzian-objects]]; no additional choice is used.

[F1] The definition gives the coordinate slice charge $Q_J(t)=\int_\Omega -g(J,n)\sqrt{\det h}\,d^3x$ and net side flux as the sum of upper-minus-lower $wJ^i$ face integrals ([[def-tgr-spacelike-current-slab]]).

[F2] On each slice, the normal charge equals its coordinate density integral $Q_J(t)=\int_\Omega wJ^0\,d^3x$ ([[lem-tgr-normal-flux-coordinate-density]]).

[F3] For a $C^1$ current, $\partial_a(wJ^a)=w\nabla_aJ^a$ ([[lem-tgr-c1-current-density-divergence]]).

[F4] The sets $K$, $\Omega$ and each $\Omega_i$ are bounded Jordan products, and every continuous density on their compact coordinate closures is Riemann integrable on them. In particular, the two endpoints of each closed coordinate interval have content zero, by the one-dimensional case of [[lem-tgr-coordinate-boxes-are-compact-jordan]].

[F5] For an integrable function on a bounded Jordan set whose coordinate sections are integrable outside a content-zero set, its integral equals the iterated section integral; in particular this applies to continuous functions on a product rectangle ([[thm-jordan-fubini-by-sections]]).

[F6] If $G$ is differentiable on a closed interval and $G'$ is integrable, then its integral is $G(b)-G(a)$, including the one-sided endpoint values ([[thm-ftc-second-part]]).

[F7] The integral over a Jordan set is the Riemann integral of its zero extension, and on a rectangle an integrable function's integral is the supremum of lower Darboux sums; lower sums use the cell infima times nonnegative rectangle volumes ([[def-riemann-integral-over-a-jordan-set]], [[def-multidimensional-darboux-integral]], [[def-multidimensional-darboux-sums]]).

[F8] In a positively oriented chart, $\mathrm{vol}_g=w\,dx^0\wedge dx^1\wedge dx^2\wedge dx^3$ ([[def-gr-metric-volume-form-and-current-flux]] clause (a)).

## Proof


**Proof technique:** direct; apply one-dimensional FTC on each coordinate and sum the six oriented side-face terms.

1.1 By [F3], $w\Pi=\partial_0(wJ^0)+\sum_{i=1}^3\partial_i(wJ^i)$ on the coordinate box. Since $g$ and $w$ are smooth and $J$ is $C^1$, this integrand and all face integrands are continuous; [F4] makes their compact-box integrals finite. [A1, F3, F4]

1.2 By [F2], $Q_J(t)=\int_\Omega wJ^0\,d^3x$. Fix $(x^1,x^2,x^3)\in\Omega$. Apply [F6] to the function $x^0\mapsto wJ^0(x^0,x^1,x^2,x^3)$ on $[t_0,t_1]$, then integrate over $\Omega$ using [F5]. This gives $$\int_K\partial_0(wJ^0)\,d^4x= \int_\Omega\bigl(wJ^0(t_1,\mathbf x)-wJ^0(t_0,\mathbf x)\bigr)\,d^3x =Q_J(t_1)-Q_J(t_0).$$ [F2, F5, F6]

1.3 For each fixed $i\in\{1,2,3\}$ and the other three coordinates, the section of $K$ in the $x^i$ coordinate is $(a_i,b_i)$. By [F7], its integral is defined using the zero extension to $[a_i,b_i]$. This extension differs from the continuous derivative $x^i\mapsto \partial_i(wJ^i)$ only at the two endpoints, which have content zero by [F4]; since the functions are bounded, covers of those points by intervals of arbitrarily small total length show from the Darboux definition that the two integrals agree. Apply [F6] on $[a_i,b_i]$, then integrate the endpoint difference over the remaining face coordinates by [F5]. This gives $$\int_K\partial_i(wJ^i)\,d^4x= \int_{\Omega_i}\left. wJ^i\right|_{x^i=b_i}- \left. wJ^i\right|_{x^i=a_i}\,d^3x_{\widehat i}.$$ By [F1], summing these three terms gives exactly $\Phi_J(B)$, with outward orientation and no choice of a unit normal on any side face. [F1, F4, F5, F6, F7]

1.4 To verify the nonimplication by a current independent of any consuming counterexample, use $M=\mathbb R^4$ with $g=\operatorname{diag}(-1,1,1,1)$, future direction $\partial_0$, the standard positive coordinate orientation, and $K=[0,1]\times(0,1)^3$. Then $w=1$, $n=\partial_0$ and $dV_h=d^3x$, so these are the slab data of [F1]. For real constants $a,b\in[-1/4,1/4]$, set $J=(2+ax^0)\partial_0+bx^1\partial_1$. This is smooth on all of $\mathbb R^4$; on the compact slab closure, $J^0\ge7/4>|J^1|$ and $J^0>0$, so it is even future timelike there and on a neighborhood of the closure. Directly from [F1]–[F3] and the elementary rectangular integrals [F5]–[F6],
$$\Pi=a+b,\qquad Q_J(t)=2+at,\qquad Q_J(1)-Q_J(0)=a,\qquad \Phi_J(B)=b,\qquad \int_K\Pi\,\mathrm{vol}_g=a+b.$$
Indeed only the $x^1$ side pair contributes, and its upper-minus-lower density is $b$ on a face parameter rectangle of volume one. These evaluations do not use the balance conclusion or any later example. [A1, F1, F2, F3, F5, F6, construct, algebra]

2.1 Add the temporal identity of step 1.2 and the three spatial identities of step 1.3. Additivity of the finite Riemann integral and [F5] give $$\int_K\sum_{a=0}^3\partial_a(wJ^a)\,d^4x= Q_J(t_1)-Q_J(t_0)+\Phi_J(B).$$ By step 1.1 and the coordinate expression $\mathrm{vol}_g=w\,dx^0\wedge dx^1\wedge dx^2\wedge dx^3$ in [F8], the left side is $\int_K\Pi\,\mathrm{vol}_g$, proving the equality. [step 1.1, step 1.2, step 1.3, F5, F8, algebra]

2.2 In the family of step 1.4 take $a=-1/4$ and $b=1/4$. Then $\Pi=0$, $\Phi_J(B)=1/4$ and $Q_J(1)-Q_J(0)=-1/4$. This admissible smooth current has zero production and strictly decreasing slice charge, proving that zero production alone does not imply charge constancy. [step 1.4, algebra]

3.1 If $\Pi\ge0$, then $\Pi w\ge0$ because $w>0$. The zero extension of $\Pi w$ from $K$ to a containing rectangle is nonnegative; each of its lower Darboux sums is nonnegative by [F7], so $\int_K\Pi\,\mathrm{vol}_g\ge0$. The equality in step 2.1 yields $Q_J(t_1)+\Phi_J(B)\ge Q_J(t_0)$; setting the net side flux to zero gives the stated slice-charge inequality. If $\Pi=0$, step 2.1 gives $Q_J(t_1)-Q_J(t_0)=-\Phi_J(B)$. [step 2.1, F7, algebra]

4.1 Taking instead $a=b=1/4$ gives positive production $\Pi=1/2$ whose integral $1/2$ exceeds the positive outward flux $1/4$, with positive charge change $1/4$. Thus zero side flux is sufficient under nonnegative production but is not necessary for nondecreasing charge. The choice $a=1/4$, $b=-1/4$ also gives zero production, negative net side flux and positive charge change. These explicit cases establish both possibilities without treating a later consuming counterexample as a premise. [step 1.4, algebra] ∎

## Remarks

- This is an equality on the stated finite rectangular coordinate slab. It asserts no arbitrary-domain Stokes theorem, infinite exhaustion, boundary at infinity, or convergence result.
- For nonnegative production, zero **net** outward side flux is sufficient for endpoint charge monotonicity. The exact criterion is that integrated production is at least the net outward side flux, as illustrated in proof steps 1.4, 2.2 and 4.1. The theorem places no causal-character restriction on the side faces; their flux is defined by the three-form/coordinate face integral, so null side faces need no unit normal.
- This is a pure mathematical identity. A physical entropy interpretation, units, and a local second-law premise must be supplied separately.
