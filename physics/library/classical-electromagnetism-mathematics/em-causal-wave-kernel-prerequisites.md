---
page: em-causal-wave-kernel-prerequisites
title: Causal kernels, gauge and point fields after wave existence
status: published
items: [def-em-potential-gauge-and-field-conventions, lem-em-gauge-wave-reachability, lem-em-retarded-wave-kernel, lem-em-smooth-forced-maxwell-cauchy-system, lem-em-point-retarded-potential-and-fields, thm-em-retarded-point-distributional-maxwell]
examples: []
---

This page supplies the mathematical layer that sits after wave existence and
before any physical adoption of the electromagnetic potentials: the vocabulary
of scalar-vector potential pairs, the retarded kernel, gauge reachability, the
forced Maxwell Cauchy system, and the point-history potentials and fields with
their distributional Maxwell equations. Everything here carries `domain:
mathematics` and depends only on mathematical suppliers; no postulate,
observation or empirical claim is made, and physical use remains with the
consuming electromagnetism pages.

The page opens with [[def-em-potential-gauge-and-field-conventions]], which
fixes the conventions once and for all: a potential pair of class $C^k$ on an
open $\Omega\subseteq\mathbb R^3\times\mathbb R$, the extension sense on closed
time slabs, the fields $E=-\nabla\varphi-\partial_tA$ and
$B=\operatorname{curl}A$, the Lorenz divergence
$G=\operatorname{div}A+c^{-2}\partial_t\varphi$, the gauge transform
$T_\chi(\varphi,A)=(\varphi-\partial_t\chi,A+\nabla\chi)$ and the normalization
$W=c^{-2}\partial_t^2-\Delta$. The definition asserts no existence or
solvability statement; those come with their own hypotheses.

[[lem-em-retarded-wave-kernel]] constructs the retarded kernel
$K(\psi)=(4\pi)^{-1}\int\psi(y,|y|/c)|y|^{-1}dy$ as a distribution and proves
that its support is exactly the retarded cone, that the convolution
$K*h$ with a compactly supported smooth $h$ is a $C^\infty$ function solving
$W(K*h)=h$ pointwise, and that $WK=\delta_{(0,0)}$ distributionally; no
smoothness of $K$ itself on the cone is claimed.
[[lem-em-gauge-wave-reachability]] then uses the free-space wave solution with
zero Cauchy data and source $G$ to reach Lorenz gauge from an arbitrary smooth
pair on a slab, preserving the fields, and records the homogeneous wave equation satisfied by
differences; boundary-value gauge fixing on bounded spatial domains is outside
it. [[lem-em-smooth-forced-maxwell-cauchy-system]] treats the stipulated smooth
first-order system $\partial_tE=c^2\operatorname{curl}B-J/\varepsilon$,
$\partial_tB=-\operatorname{curl}E$ with $\varepsilon\mu c^2=1$: it has a unique
smooth solution on a slab, the solution obeys both Gauss laws under the stated
compatibility of the data, and it obeys the $c$-cone of dependence.

The last two items pass to a point history. [[lem-em-point-retarded-potential-and-fields]]
computes the retarded pairings of the point current and of the retarded history
against the kernel, identifies them with the regular distributions of the
locally integrable zero extensions of $\varphi=C/(\kappa r)$ and
$A=\beta\varphi/c$, and derives the off-worldline Liénard–Wiechert fields with
the exact velocity/acceleration split, together with their higher-regularity
branches. [[thm-em-retarded-point-distributional-maxwell]] is the
distributional completion: the proper point-history pair satisfies the wave,
Lorenz and Maxwell equations in $\mathcal D'(\mathbb R^3\times\mathbb R)$ with
the exact point source, the fields have locally integrable representatives
whose regular distributions are those vector distributions, and the
off-worldline $C^1$ fields satisfy the source-free classical Maxwell equations
pointwise. No singular products, field values on the worldline, finite
self-energy or self-force law are asserted. The companion examples page
[[em-causal-wave-kernel-prerequisites-examples]] records the explicit static,
gauge and support checks of these conventions.
