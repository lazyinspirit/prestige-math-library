---
id: def-tgrx-hadamard-stress-contract
kind: definition
title: Hadamard and renormalized stress contract
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: physics
library: physics
dependency_level: 4
deps:
  - def-qftx-wavefront-hadamard
  - post-tgrx-free-collapse-scattering
dependency_roles:
  def-qftx-wavefront-hadamard: mathematical-premise
  post-tgrx-free-collapse-scattering: formulation-prerequisite
physical_scope: "An input contract for a real free scalar Klein-Gordon field on a smooth globally hyperbolic Lorentzian four-manifold without boundary, with a supplied positive Hadamard state and a selected local, covariant, conserved stress prescription. It does not assert existence or uniqueness of such states or construct the local parametrix."
empirical_premises: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Stefan Hollands and Robert M. Wald, Quantum fields in curved spacetime, complete review"
      url: "https://arxiv.org/pdf/1401.2026"
      locator: "Complete 77-page PDF retrieved; §2, PDF pp. 13–15, especially the local Hadamard form and state-independent singular part; §3.1, PDF pp. 38–45, for Hadamard normal ordering, local covariance, and smooth stress-tensor expectations."
    - title: "Ted Jacobson, Introduction to Quantum Fields in Curved Spacetime and the Hawking Effect, complete lecture notes"
      url: "https://arxiv.org/pdf/gr-qc/0308048"
      locator: "Complete 59-page lecture-note PDF retrieved; §4.5, PDF pp. 16–17, equations (4.29)–(4.30), for the coincident stress divergence, common short-distance behavior, finite state differences, and local conserved curvature ambiguity."
    - title: "L. H. Ford, Quantum Field Theory in Curved Spacetime, complete lecture notes"
      url: "https://arxiv.org/pdf/gr-qc/9707062"
      locator: "Complete 44-page lecture-note PDF retrieved; §3, PDF pp. 19–21, equations (3.6)–(3.12), for Hadamard point splitting and state-independent curvature ambiguities. Ford uses signature (+---); no curvature-variation signs are imported."
verification:
  precheck: n/a
---

## Definition

Let $(M,g)$ be a Hausdorff, second-countable, oriented, time-oriented,
globally hyperbolic smooth Lorentzian four-manifold without boundary, with
signature $(-,+,+,+)$. An orientation is a smooth choice of orientation in
each tangent space, and a time orientation selects the future timelike cone.
A causal curve is piecewise $C^1$ with tangent consistently future- or
past-directed and causal; $J^\pm(p)$ denote points reachable from or reaching
$p$ by such curves. Strong causality means every point has arbitrarily small
neighborhoods that each causal curve meets in a connected parameter
interval. Global hyperbolicity means strong causality and compact causal
diamonds $J^+(p)\cap J^-(q)$. Fix a real scalar Klein-Gordon operator
$P=-g^{ab}\nabla_a\nabla_b+V$, where $\nabla$ is the Levi-Civita connection
and $V$ is a prescribed smooth real scalar of dimension $\mathrm{m^{-2}}$ in
length coordinates. Use the canonical field length degree
$\mathrm{m^{-1}}$ used for the framework's free scalar field, so its
two-point distribution and subtraction kernel have length degree
$\mathrm{m^{-2}}$. Supply the free-field $*$-algebra $\mathcal A_P$ and its
real test-function smearing map $\Phi:C_c^\infty(M;\mathbb R)\to\mathcal A_P$;
smearing uses $d\mathrm{vol}_g$. This is model input, not a field-algebra
construction claim. In the massless minimally coupled collapse
specialization, [[post-tgrx-free-collapse-scattering]] specifies bosonic
Fock quantization, the smeared field operators, and the positive normalized
state convention. A **state** $\omega$ is a positive normalized linear
functional on $\mathcal A_P$, so $\omega(A^*A)\ge0$ and $\omega(1)=1$.
Its two-point distribution $W_\omega\in\mathcal D'(M\times M)$, in the
test-density convention, is defined by the pairings
$W_\omega(f,h)=\omega(\Phi(f)\Phi(h))$ for compactly supported smooth real
tests $f,h$, extended complex linearly. Require
$P_xW_\omega=P_yW_\omega=0$ and
$\operatorname{WF}(W_\omega)=\mathcal C_g^+$, where $\mathcal C_g^+$ consists
of pairs $(x,\xi;y,-\zeta)$ with nonzero future-null covectors $\xi,\zeta$
that are equal at a coincident point or are the metric-dual tangents, with a
common positive scale, along one nonconstant future-directed null geodesic;
the two base points need not be ordered along that geodesic. This is the
positive-frequency Hadamard convention in [[def-qftx-wavefront-hadamard]],
whose definition fixes this relation without a base-point order.
$\operatorname{WF}$ records nonzero cotangent directions in which localized
Fourier transforms fail rapid decay. The
framework's massless, minimally coupled collapse scalar is one
specialization; its Schwarzschild and scattering assumptions are not imposed
on this general contract.

For each open convex normal neighborhood $U\subset M$ (an open set such that
for every $p\in U$ the exponential map at $p$ restricts to a diffeomorphism
from a star-shaped open neighborhood of $0\in T_pM$ onto $U$), supply a
locally covariant Hadamard singular bidistribution $H_\mu$ for $P$. The scale
$\mu>0$ is fixed and has units $\mathrm{m^{-1}}$. “Hadamard singular
bidistribution” here means the prescribed local, state-independent singular
part determined by $(g,P,\mu)$, with
$W_\omega-H_\mu\in C^\infty(U\times U)$. The parametrix pieces, the
bidifferential operators below, and their resulting coincident values must be
compatible on overlaps. This is supplied data: the definition proves no
parametrix construction or general existence theorem.

Supply a finite-order bidifferential operator $D_{ab}(x,y)$ which maps a
smooth biscalar on $U\times U$ to a smooth covariant symmetric two-tensor at
$x$; any coefficient bitensors and parallel transports needed to define its
indices are part of the supplied operator. Also supply a smooth, symmetric,
state-independent local curvature tensor $C_{ab}[g;\mu,\mathbf c]$, where
$\mathbf c$ is the fixed list of finite renormalization conditions. “Local”
means determined by the values of $g$, $P$, and their derivatives at the
point, through finitely many curvature contractions; it has no state or
distant-geometry dependence. Require local covariance: whenever
$\psi:(M,g)\to(M',g')$ is a smooth embedding with $\psi^*g'=g$, preserves the
time orientation, and has causally convex image (every causal curve segment
in $M'$ with endpoints in the image stays in the image), the assigned local
prescription on $(M,g)$ is the pullback of the one on $(M',g')$. Require
conservation,
$\nabla^aT^{\mathrm{ren}}_{ab}=0$, with the index raised using $g^{ab}$.

Define the renormalized stress tensor by
$$T^{\mathrm{ren}}_{ab}[g,\omega](x):=\lim_{y\to x}D_{ab}(x,y)\bigl(W_\omega-H_\mu\bigr)(x,y)+C_{ab}[g;\mu,\mathbf c](x).$$
The limit is taken inside a convex normal neighborhood. It exists because
$W_\omega-H_\mu$ is smooth and $D_{ab}$ has finite order. In SI units and
length coordinates $x^0=ct$, the normalization of $D_{ab}$ is part of the
chosen scalar-field prescription and its output, as well as $C_{ab}$, has
stress-energy units $\mathrm{J\,m^{-3}}$. No pointwise product of the
singular distributions $W_\omega$ and $H_\mu$ is taken.

## Definition references

[[def-qftx-wavefront-hadamard]]

[[post-tgrx-free-collapse-scattering]]

