---
id: thm-green-function-symmetry
kind: theorem
title: Symmetry of the Dirichlet Green function
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript)"
      url: https://web.archive.org/web/20250601000000id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf
      locator: "§5.4 Lemma 5.23 two-pole proof, printed pp.126–127"
    - title: "Thomas Schmidt, Partial Differential Equations I (2026)"
      url: https://wwwp2.math.uni-hamburg.de/en/forschung/bereiche/am/geom-part-differentialgleichungen/dokumente/pde.pdf
      locator: "§2.8 symmetry remark (4), printed p.45; Schmidt uses ΔF=δ₀ and G≤0, so translate by Φ=−F and G_here=−G_Schmidt"
deps:
  - def-countable-choice
  - def-dirichlet-green-function-for-minus-laplacian
  - def-laplace-fundamental-solution-with-positive-minus-laplacian-sign
  - def-laplacian-of-a-c2-function
  - lem-laplace-fundamental-solution-is-harmonic-off-its-pole
  - cor-second-green-identity-on-a-bounded-c-one-domain
  - lem-euclidean-chart-measure-agrees-with-polar-surface-measure
  - cor-volume-of-the-unit-n-ball
  - thm-real-gamma-functional-equation
  - def-bounded-c-one-domain-boundary-charts-and-outward-normal
  - def-euclidean-spheres-and-closed-balls
  - def-euclidean-submersions-and-immersions
  - def-euclidean-inner-product
  - def-jacobian-matrix-and-gradient
  - def-regular-critical-points-values-and-level-sets
  - cor-regular-level-set-local-graph-theorem
  - lem-derivative-of-a-power
  - thm-algebra-of-derivatives
  - thm-continuous-partial-derivatives-imply-total-differentiability
  - cor-euclidean-closed-balls-and-spheres-are-compact
  - def-surface-integral-on-a-compact-c-one-hypersurface
  - def-classical-normal-derivative
  - def-directional-and-partial-derivatives
  - thm-real-power-continuity-and-derivatives
  - thm-logarithm-derivative-and-integral
  - thm-natural-logarithm-laws
  - thm-logarithm-slower-than-every-positive-power
  - thm-integral-triangle-inequality
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
proof_strategy: direct
---

## Statement

Assume Countable Choice, written $\mathrm{AC}_\omega$, and let $n\ge2$. Let $\Omega\subset\mathbb R^n$ be a bounded $C^1$ domain carrying a Dirichlet Green function $G_\Omega$ for $-\Delta$. Suppose its designated harmonic correctors satisfy $H_y\in C^2(\overline\Omega)$ for every $y\in\Omega$. Then
$$G_\Omega(x,y)=G_\Omega(y,x)\qquad(x,y\in\Omega,\ x\ne y).$$

## Facts & Assumptions

**Given:** Assume $\mathrm{AC}_\omega$, $n\ge2$, a bounded $C^1$ domain $\Omega$, the Green function defined by [[def-dirichlet-green-function-for-minus-laplacian]], and the stated $C^2(\overline\Omega)$ regularity of every corrector.

[A1] Countable Choice is the only choice assumption. The Green-kernel, surface-measure, and second Green identity conventions below assume it; all radius choices in the proof are pointwise. No full Axiom of Choice is used. ([[def-countable-choice]])

[F1] For each pole $p$, $G_\Omega(z,p)=\Phi(z-p)-H_p(z)$ is harmonic away from $p$, extends continuously to the boundary away from the pole, and has zero boundary trace. ([[def-dirichlet-green-function-for-minus-laplacian]])

[F14] A harmonic function is $C^2$ with $\Delta=0$. ([[def-laplacian-of-a-c2-function]])

[F15] The normalized kernel is smooth away from its pole. ([[lem-laplace-fundamental-solution-is-harmonic-off-its-pole]])

[F2] For $n\ge3$, $\Phi(z)=|z|^{2-n}/((n-2)\omega_{n-1})$; for $n=2$, $\Phi(z)=-(2\pi)^{-1}\log|z|$, where $\omega_{n-1}=|S^{n-1}|$. ([[def-laplace-fundamental-solution-with-positive-minus-laplacian-sign]])

[F3] On a bounded $C^1$ domain and real $C^2$-closure functions, the second Green identity is $$\int_D(v\Delta u-u\Delta v)\,dx=\int_{\partial D}(v\partial_\nu u-u\partial_\nu v)\,dS,$$ with every normal outward from $D$. ([[cor-second-green-identity-on-a-bounded-c-one-domain]])

[F4] The sphere chart measure scales by $r^{n-1}$ and $|S^{n-1}|=n|B_1|$. ([[lem-euclidean-chart-measure-agrees-with-polar-surface-measure]])

[F5] A bounded $C^1$ domain is a nonempty bounded open set with locally $C^1$ graph boundary; connectedness is not required, and $C^2(\overline D)$ uses continuous extensions of derivatives through order two. ([[def-bounded-c-one-domain-boundary-charts-and-outward-normal]])

[F6] The sphere $S_2(a,r)$ is the level set $F^{-1}(r^2)$ of $F(z)=\langle z-a,z-a\rangle$; the coordinate partials $\partial_iF(z)=2(z_i-a_i)$ are continuous, so the continuous-partials theorem gives $DF(z)h=2\langle z-a,h\rangle$, and at $z\in S_2(a,r)$ one has $DF(z)(z-a)=2r^2\ne0$; thus $r^2$ is a regular value, and positive-radius spheres are regular level sets and hence locally $C^1$ graphs by the regular-level graph theorem. ([[def-euclidean-spheres-and-closed-balls]], [[cor-regular-level-set-local-graph-theorem]], [[def-regular-critical-points-values-and-level-sets]], [[def-euclidean-submersions-and-immersions]], [[def-jacobian-matrix-and-gradient]], [[thm-continuous-partial-derivatives-imply-total-differentiability]], [[lem-derivative-of-a-power]], [[thm-algebra-of-derivatives]], [[def-euclidean-inner-product]])

[F16] Every positive-radius Euclidean sphere is compact. ([[cor-euclidean-closed-balls-and-spheres-are-compact]])

[F7] The classical normal derivative is the gradient dotted with the outward unit normal. ([[def-classical-normal-derivative]])

[F8] Directional derivatives are derivatives of the line map $t\mapsto f(a+tw)$. ([[def-directional-and-partial-derivatives]])

[F9] For $s>0$, $(s^\alpha)'=\alpha s^{\alpha-1}$; for $s>0$, $\log'(s)=1/s$. ([[thm-real-power-continuity-and-derivatives]], [[thm-logarithm-derivative-and-integral]])

[F10] $\log(1/s)=-\log s$ for $s>0$, and $\log x/x\to0$ as $x\to+\infty$. ([[thm-natural-logarithm-laws]], [[thm-logarithm-slower-than-every-positive-power]])

[F11] $V_2(1)=\pi$, using $\Gamma(2)=1$ from the Gamma functional equation; hence $\omega_1=|S^1|=2\pi$. ([[cor-volume-of-the-unit-n-ball]], [[thm-real-gamma-functional-equation]])

[F12] For an integrable surface function, the modulus of its integral is at most the integral of its modulus; the nonnegative integral is monotone and homogeneous. ([[thm-integral-triangle-inequality]], [[prop-order-and-scalar-rules-for-the-nonnegative-integral]])

[F13] On a compact embedded $C^1$ hypersurface the chart formula defines surface integration and area. ([[def-surface-integral-on-a-compact-c-one-hypersurface]])

## Proof

**Proof technique:** direct.

1.1 Fix distinct $x,y\in\Omega$. Openness gives radii $r_x,r_y>0$ with $\overline B_2(x,r_x),\overline B_2(y,r_y)\subset\Omega$. For $0<\varepsilon<\min\{r_x/4,r_y/4,|x-y|/5\}$ put $D_\varepsilon=\Omega\setminus(\overline B_2(x,\varepsilon)\cup\overline B_2(y,\varepsilon))$. The balls are disjoint and lie strictly inside $\Omega$. The point $x+2\varepsilon e_1$ lies in $D_\varepsilon$, so it is nonempty; it is bounded and open. Its boundary is the disjoint union of $\partial\Omega$ and the two spheres. The outer boundary remains locally a $C^1$ graph; each sphere is a regular level set and the positive separations prevent any boundary intersections. Thus $D_\varepsilon$ is a bounded $C^1$ domain under [F5] even if it is disconnected. On either spherical boundary, with $\theta=(z-a)/\varepsilon$ for its centre $a$, the outward normal of $D_\varepsilon$ is $-\theta$. [given, F5, F6, choose, algebra]

2.1 On $D_\varepsilon$ set $u(z)=G_\Omega(z,x)$ and $v(z)=G_\Omega(z,y)$. By [F1] and [F14], both are harmonic there. Their $C^2(\overline\Omega)$ correctors and the smooth-kernel fact [F15] show $u,v\in C^2(\overline{D_\varepsilon})$. Apply [F3]. The volume integral is zero; on $\partial\Omega$ both functions vanish, so the outer boundary integral is zero. Therefore $0=I_x(\varepsilon)+I_y(\varepsilon)$, where $I_a(\varepsilon):=\int_{S_2(a,\varepsilon)}(v\partial_\nu u-u\partial_\nu v)\,dS$ and each normal is outward from $D_\varepsilon$. [A1, F1, F3, F5, F14, F15, step 1.1, algebra]

2.2 By [F2] and [F9], for $s>0$ the radial derivative is $\Phi_n'(s)=-1/(\omega_{n-1}s^{n-1})$ when $n\ge3$. For $n=2$ the same formula follows from [F9] and [F11]. The direction of the hole normal is $-\theta$ by step 1.1, and [F7]–[F8] identify the normal derivative with differentiation in that direction. Thus on a hole sphere, $\partial_\nu\Phi(z-a)=-\Phi_n'(\varepsilon)=1/(\omega_{n-1}\varepsilon^{n-1})$. By [F4] and [F13], its sphere area is $\omega_{n-1}\varepsilon^{n-1}$; the singular normal derivative consequently has integral $1$. The compact-sphere hypothesis for [F13] follows from [F16]. The corrector and its first derivatives are bounded near each pole by their continuity. [A1, F2, F4, F7, F8, F9, F11, F13, F16, step 1.1, algebra]

3.1 On $S_2(x,\varepsilon)$, [F1] and [F14] make $v$ and $\nabla v$ continuous across $x$, so $v(z)\to v(x)$ uniformly there and $\partial_\nu v$ is bounded. The singular profile and local boundedness of $H_x$ give $|u(z)|\le C\varepsilon^{2-n}$ for $n\ge3$, and $|u(z)|\le C(1+|\log\varepsilon|)$ for $n=2$. By [F12] and the sphere-area formula in [F4], $\left|\int_{S_2(x,\varepsilon)}u\partial_\nu v\,dS\right|\le \sup|\partial_\nu v|\sup|u|\,\omega_{n-1}\varepsilon^{n-1}$, which is $O(\varepsilon)$ for $n\ge3$ and $O(\varepsilon(1+|\log\varepsilon|))$ for $n=2$. Also [F7]–[F8] and step 2.2 give $\partial_\nu u=1/(\omega_{n-1}\varepsilon^{n-1})-\partial_\nu H_x$. Since $v$ and $DH_x$ are bounded near $x$, [F12] and [F4] bound the corrector contribution by $O(\varepsilon^{n-1})$. The remaining term is the surface average of $v$: its difference from $v(x)$ is at most $\sup_{S_2(x,\varepsilon)}|v-v(x)|$, which tends to zero by continuity and the area formula [F4]. Finally, for $0<\varepsilon<1$, [F10] with $t=1/\varepsilon$ gives $\varepsilon|\log\varepsilon|=\log(t)/t\to0$. Therefore $I_x(\varepsilon)\to v(x)=G_\Omega(x,y)$. [F1, F2, F4, F7, F8, F9, F10, F12, F13, F14, step 2.1, step 2.2, algebra]

4.1 At $y$, the same estimates as in step 3.1 with the pole roles reversed give $\int_{S_2(y,\varepsilon)}v\partial_\nu u\,dS\to0$ and $\int_{S_2(y,\varepsilon)}u\partial_\nu v\,dS\to u(y)$. Hence $I_y(\varepsilon)\to-u(y)=-G_\Omega(y,x)$. [F1, F2, F4, F7, F8, F9, F10, F12, F13, F14, step 2.1, step 2.2, step 3.1, algebra]

5.1 Taking limits in the identity from step 2.1 using the two limits in steps 3.1 and 4.1 gives $G_\Omega(x,y)-G_\Omega(y,x)=0$. The estimates cover the logarithmic case $n=2$ and the power cases $n\ge3$; the theorem excludes $n=1$ and the coincident poles because its Green function is defined only for distinct poles. Countable Choice is inherited through [A1] and the cited kernel and surface-measure conventions; radius choices are pointwise, and no full Axiom of Choice is used. There is no iff claim. [A1, F1, F2, F4, F10, step 2.1, step 3.1, step 4.1, cases, algebra] ∎

## Source notes

Teschl §5.4, Lemma 5.23, printed pp.126–127, applies the second Green identity on a twice-punctured domain and takes the two sphere limits separately. Its kernel indexing is transposed relative to this pair, so the proof here uses $u(z)=G_\Omega(z,x)$ and $v(z)=G_\Omega(z,y)$ directly from the local Green definition and does not assume symmetry. Schmidt §2.8, symmetry remark (4), printed p.45, gives the two-pole calculation under $C^1$ regularity off the poles. Schmidt uses $\Delta F=\delta_0$ and a nonpositive Green function; the convention here is $\Phi=-F$ and $G_\Omega=-G_{\rm Schmidt}$. The signs above are independently checked from the local positive-minus-Laplacian kernel and the outward normals of the punctured domain.
