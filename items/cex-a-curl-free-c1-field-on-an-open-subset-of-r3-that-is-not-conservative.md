---
id: cex-a-curl-free-c1-field-on-an-open-subset-of-r3-that-is-not-conservative
kind: counterexample
title: "A curl-free $C^1$ field on the complement of a line that is not conservative"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-curl-vanishes-exactly-when-a-field-is-closed, def-divergence-and-curl-of-a-c1-vector-field, cor-a-curl-free-c1-field-on-a-star-shaped-open-subset-of-r3-is-conservative, def-piecewise-c1-path-connected-conservative-and-path-independent, cor-conservative-fields-are-path-independent-and-have-zero-circulation, def-scalar-and-vector-line-integrals-along-piecewise-c1-paths, thm-algebra-of-derivatives, thm-sine-and-cosine-derivatives, cor-trigonometric-parity-and-pythagorean-identity, thm-ftc-second-part, def-star-shaped-open-subset-of-rn, def-jacobian-matrix-and-gradient, def-euclidean-inner-product, thm-path-connected-implies-connected, thm-polar-form-with-unique-principal-argument, def-metric-topology, def-metric-ball, lem-metrics-on-rn]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis II, Example 9.3.7"
      url: "https://www.jirka.org/ra/html/sec_pathind.html"
    - title: "J.-B. Campesato, Poincare Lemma, section 1"
      url: "https://www.math.toronto.edu/campesat/ens/1920/poincare.pdf"
    - title: "J. Feldman, A. Rechnitzer and E. Yeager, CLP-4 Vector Calculus, section 4.4"
      url: "https://personal.math.ubc.ca/~CLP/CLP4/clp_4_vc/clp_4_vc.html"
pipeline_run: null
---

## Statement refuted

Every curl-free $C^1$ vector field on a connected open subset of $\mathbb R^3$ is conservative.

## Facts & Assumptions

**Given:** On $U=\mathbb R^3\setminus\{(0,0,z):z\in\mathbb R\}$ let $$F(x,y,z)=\left(\frac{-y}{x^2+y^2},\frac{x}{x^2+y^2},0\right).$$

[L1] For a $C^1$ field on an open subset of $\mathbb R^3$, closedness is equivalent to vanishing curl ([[cor-curl-vanishes-exactly-when-a-field-is-closed]]).

[F1] The curl is $(\partial_yF_z-\partial_zF_y,\ \partial_zF_x-\partial_xF_z,\ \partial_xF_y-\partial_yF_x)$ ([[def-divergence-and-curl-of-a-c1-vector-field]]).

[L2] On a star-shaped open subset of $\mathbb R^3$, a curl-free $C^1$ field is conservative ([[cor-a-curl-free-c1-field-on-a-star-shaped-open-subset-of-r3-is-conservative]]).

[F2] A field is conservative when it has a potential ([[def-piecewise-c1-path-connected-conservative-and-path-independent]]).

[L3] Conservative fields have zero circulation around every closed piecewise-$C^1$ path in the domain ([[cor-conservative-fields-are-path-independent-and-have-zero-circulation]]).

[F3] Vector line integrals are computed from $\langle F(\gamma(t)),\gamma'(t)\rangle$ ([[def-scalar-and-vector-line-integrals-along-piecewise-c1-paths]]).

[L4] Sums, products, and nonvanishing quotients differentiate by the usual rules ([[thm-algebra-of-derivatives]]).

[L5] $(\sin t)'=\cos t$ and $(\cos t)'=-\sin t$ ([[thm-sine-and-cosine-derivatives]]).

[L6] $\sin^2t+\cos^2t=1$ ([[cor-trigonometric-parity-and-pythagorean-identity]]).

[L7] If $a<b$, $G$ is differentiable on $[a,b]$, and $G'=f$ is integrable there, then $\int_a^bf=G(b)-G(a)$ ([[thm-ftc-second-part]]).

[F4] A star-shaped open set contains every segment from a chosen centre to every point of the set ([[def-star-shaped-open-subset-of-rn]]).

[F5] The Jacobian matrix records the coordinate partial derivatives ([[def-jacobian-matrix-and-gradient]]).

[F6] $\langle x,y\rangle=\sum_{k<n}x_ky_k$ ([[def-euclidean-inner-product]]).

[L8] Every path-connected space is connected ([[thm-path-connected-implies-connected]]).

[F7] A subset of a metric space is open when each of its points contains an open metric ball lying in the subset; on $\mathbb R^3$ the Euclidean metric is the square root of the sum of the three squared coordinate differences ([[def-metric-topology]], [[def-metric-ball]], [[lem-metrics-on-rn]]).

[L9] Every nonzero point $(x,y)$ of the plane has a representation $(x,y)=r(\cos\theta,\sin\theta)$ with $r>0$ ([[thm-polar-form-with-unique-principal-argument]]).

## Counterexample

**Proof technique:** direct.

1.1 The field is $C^1$ on $U$, because the denominator $x^2+y^2$ never vanishes there and the coordinate functions are rational in $x$ and $y$. [L4, F5, F6, given]

2.1 The first two curl coordinates vanish because $F_z=0$ and the first two components do not depend on $z$, while the third is $\partial_x(x/(x^2+y^2))-\partial_y(-y/(x^2+y^2))=0$ by the quotient rule and cancellation. Therefore $\operatorname{curl}F=0$ on $U$. [step 1.1, F1, L4]

2.2 On the unit circle $\gamma(t)=(\cos t,\sin t,0)$, $0\le t\le2\pi$, one has $F(\gamma(t))=(-\sin t,\cos t,0)=\gamma'(t)$ by [L5] and [L6], so $\int_\gamma F\cdot d\mathbf r=\int_0^{2\pi}1\,dt=2\pi$ by [F3], [F6], and [L7]. [step 1.1, F3, F6, L5, L6, L7]

3.1 By [L1], the field is closed on $U$. [step 2.1, L1]

3.2 If $F$ were conservative, [L3] and [F2] would force the closed-loop integral in step 2.2 to be $0$, a contradiction. Hence $F$ is not conservative. [step 2.2, L3, F2]

4.1 The domain is open, connected, and not star-shaped. To see openness, fix $p=(x,y,z)\in U$ and put $d=\tfrac12\max\{|x|,|y|\}>0$. Every point of the deleted axis differs from $p$ by at least $2d$ in one of its first two coordinates, so the Euclidean ball $B(p,d)$ misses that axis and lies in $U$. To see connectedness, use [L9] to write $(x,y)=r(\cos\theta,\sin\theta)$ with $r>0$. The circular arc $s\mapsto(r\cos((1-s)\theta),r\sin((1-s)\theta),z)$ joins $(x,y,z)$ to $(r,0,z)$, the radial segment $s\mapsto((1-s)r+s,0,z)$ joins that point to $(1,0,z)$, and the vertical segment $s\mapsto(1,0,(1-s)z)$ joins it to $(1,0,0)$; all three pieces are piecewise $C^1$ and stay in $U$. Thus $U$ is path-connected and hence connected by [L8]. Finally, for any proposed star centre, the segment to its reflection across the deleted axis meets that axis, so $U$ is not star-shaped. This is exactly the hypothesis of [L2] that fails. [step 3.2, L2, F4, F7, L8, L9] ∎

## Remarks

- Restricting to the plane $z=0$ recovers the published planar vortex example. The three-dimensional version shows that the same obstruction survives on the complement of a line.
