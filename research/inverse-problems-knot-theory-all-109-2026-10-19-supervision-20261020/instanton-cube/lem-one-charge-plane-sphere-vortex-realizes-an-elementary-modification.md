---
id: lem-one-charge-plane-sphere-vortex-realizes-an-elementary-modification
kind: lemma
title: A one-charge plane-sphere vortex realizes an elementary modification
status: draft
origin: session
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - lem-lower-chamber-one-charge-bundles-are-elementary-modifications
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Vicente Munoz, Gromov-Witten invariants of the moduli of bundles on a surface, elementary transformations in Section5
      url: https://arxiv.org/abs/math/9910105
---

## Statement

Assume full AC. On $\mathbb C\times\mathbb{CP}^1$, with the Euclidean plane metric and sphere area $4\pi$, there is a smooth finite-action projectively ASD $U(2)$ connection of trace-free charge one. Its induced holomorphic bundle has generic sphere restriction $O^2$, unique jumping sphere at $0$ with restriction $O(-1)\oplus O(1)$, and the local elementary-modification presentation
$$0\longrightarrow O^2\longrightarrow E\longrightarrow O_{\{0\}\times\mathbb{CP}^1}(-1)\longrightarrow0.$$
The trace-free curvature decays exponentially in the plane direction, in a gauge with its limiting projective framing retained. Its energy in the standard trace-free normalization is $8\pi^2$. This constructs a genuine local charge-one model for the lower-chamber operation. It does not prove that every invertible complex extension frame has such a model with a prescribed asymptotic Hermitian frame, nor the global gluing/inverse theorem on $C\times\mathbb{CP}^1$.

## Facts & Assumptions

**Given:** The product metric and its complex orientation. Full AC is used for the function-space choices. [[def-axiom-of-choice]]

[F1] A locally free elementary modification with a unique $O(-1)\oplus O(1)$ jumping sphere is the local holomorphic model needed in [[lem-lower-chamber-one-charge-bundles-are-elementary-modifications]].

## Proof

1.1 **Solve the scalar radial equation directly.** Seek a radial real function with
$$u''+r^{-1}u'=2(e^u-1),\qquad u(r)=2\log r+c+O(r^2)\ (r\to0),\qquad u(r)\to0\ (r\to\infty).$$
The integral equation $(ru')'=2r(e^u-1)$ gives a unique local solution for each $c$ after subtracting $2\log r+c$. For very negative $c$, $u$ remains negative on any chosen fixed radius interval while the integral drives $ru'$ from two to a negative value; thus it reaches $u'=0$ before $u=0$. For very positive $c$, rescaling $r=e^{-c/2}s$ makes the curvature term uniformly small on a fixed $s$ interval, and $u$ crosses zero with positive derivative. These two behaviors are open in $c$. At a boundary shooting parameter neither occurs. Its solution remains negative with positive derivative for all $r$: reaching either forbidden event would place it in one of the open behaviors. Its increasing limit must be zero, because a negative limit makes $(ru')'$ bounded above by a negative multiple of $r$. The difference of two such solutions satisfies $\Delta w=2e^\xi w$, is bounded at zero and tends to zero at infinity; the maximum principle, with the removable bounded origin, proves uniqueness. Finally $v=-u$ satisfies $v''+r^{-1}v'=2v+O(v^2)$. Radial comparison with exponential multiples of the decaying modified-Bessel solution gives exponential decay, and the equation gives the same decay for all derivatives. [given, construct, algebra]

2.1 **The scalar solution supplies an actual projectively ASD connection.** Put $\phi=e^{u/2}e^{i\vartheta}$ and let $B=i(ru'/2-1)d\vartheta$ be the unitary connection on a plane line bundle. Both extend smoothly at zero in their holomorphic frame, since $u-2\log r$ is smooth in $r^2$. They satisfy
$$\bar\partial_B\phi=0,\qquad iF_B=(1-|\phi|^2)\omega_{\mathbb C},\qquad\frac{i}{2\pi}\int_{\mathbb C}F_B=1.$$
Use $a=B/2$. On the sphere let $b$ be the invariant unitary connection on $O(1)$ with $F_b=-i\omega_{S^2}/2$, and let $\beta$ be the invariant $(0,1)$ form with values in $O(-2)$, normalized so that its curvature contraction is $\omega_{S^2}/2$. On $O(-1)\oplus O(1)$ the standard unitary block connection has diagonal $a-b,-a+b$ and off-diagonal $\phi\beta$ and its negative adjoint. Its $(0,2)$ curvature is zero precisely by $\bar\partial_B\phi=0$. Its diagonal trace-free Kahler contraction is zero precisely by $iF_B=(1-|\phi|^2)\omega_{\mathbb C}$; the off-diagonal contraction vanishes by invariance. Thus its trace-free curvature is ASD. Although $a$ has limiting holonomy minus one, its adjoint framing is single valued. Add the central connection $B/2$ to obtain a genuine $U(2)$ connection with determinant $B$. This changes no trace-free equation. [step 1.1, construct, algebra]

3.1 **Its holomorphic type is the required actual modification.** The associated holomorphic family on the sphere is the extension of $O(1)$ by $O(-1)$ whose $H^1(O(-2))$ coefficient is the holomorphic vortex section, with a single simple zero at the origin. Off the origin it is the nonzero extension and hence $O^2$; at the origin it is the split $O(-1)\oplus O(1)$. Equivalently it has the local locally free presentation with relation column $(s,t,z)$, where $s,t$ are the two independent sections of $O(1)$ and $z$ is the plane coordinate. They have no common zero. The determinant of evaluation of its two generic sphere sections has a simple zero on $z=0$, and the quotient there is $O(-1)$. This gives the displayed elementary-modification sequence. Thus the model realizes the invertible extension frame, rather than a spherical degree-four point cycle. [F1, step 1.1, step 2.1, construct, algebra]

4.1 **Charge, decay and the limitation of the seed.** At infinity the unit-length off-diagonal field cancels the sphere monopole curvature, so the limiting sphere connection is projectively flat. Step 1.1 gives exponential trace-free curvature decay. To compute the relative topological charge, the diagonal plane flux of $a$ is one half and the monopole sphere degrees are minus one and plus one. Their relative second-Chern cross term is one; adding the central half-flux makes the two plane line fluxes one and zero and leaves this value one. Hence the trace-free action is $8\pi^2$. Translations of the zero and unitary changes of asymptotic frame give genuine further models. Arbitrary positive-Hermitian changes of an invertible complex extension matrix need not preserve the limiting Hermitian frame; a constant complex conjugation alone does not resolve that problem. Establishing a whole bounded-frame family with its uniform inverse, and controlling its limits at strictly semistable curve data, remain required for the global lower-chamber count. [step 1.1, step 2.1, step 3.1, construct, algebra]
