---
id: lem-em-helmholtz-boundary-representation
kind: lemma
domain: mathematics
title: "Exact Helmholtz boundary representation with actual traces"
status: draft
origin: pipeline
pipeline_run: physics-em-sr-40-2026-10-08
dependency_level: 2
deps: [thm-interior-derivative-estimates-for-harmonic-functions, lem-em-outgoing-source-helmholtz-and-diffraction, cor-second-green-identity-on-a-bounded-c-one-domain, lem-em-outgoing-spherical-hankel-dtn-bounds, def-surface-integral-on-a-compact-c-one-hypersurface, def-countable-choice, def-bounded-c-k-domain-and-boundary-charts, thm-euclidean-tubular-neighbourhood-theorem, thm-dominated-convergence, def-axiom-of-choice, lem-em-spherical-harmonic-basis-and-addition, lem-euclidean-chart-measure-agrees-with-polar-surface-measure, cor-cauchy-schwarz-inequality-for-l-two, def-cross-product-in-r3, thm-algebra-of-derivatives, thm-chain-rule-for-total-derivatives, thm-newton-leibniz-with-interior-derivative]
dependency_roles:
  thm-interior-derivative-estimates-for-harmonic-functions: mathematical-premise
  lem-em-outgoing-source-helmholtz-and-diffraction: mathematical-premise
  cor-second-green-identity-on-a-bounded-c-one-domain: mathematical-premise
  lem-em-outgoing-spherical-hankel-dtn-bounds: mathematical-premise
  def-surface-integral-on-a-compact-c-one-hypersurface: mathematical-premise
  def-countable-choice: mathematical-premise
  def-bounded-c-k-domain-and-boundary-charts: mathematical-premise
  thm-euclidean-tubular-neighbourhood-theorem: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  lem-em-spherical-harmonic-basis-and-addition: mathematical-premise
  lem-euclidean-chart-measure-agrees-with-polar-surface-measure: mathematical-premise
  cor-cauchy-schwarz-inequality-for-l-two: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-newton-leibniz-with-interior-derivative: mathematical-premise
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "S. Dyatlov, Lecture notes for 18.155: distributions, elliptic regularity, and applications (MIT), Sections 9.1-9.2 and 15.1"
      url: "https://math.mit.edu/~dyatlov/18.155/155-notes.pdf"
      locator: "Sections 9.1-9.2 (fundamental solutions and interior elliptic regularity) and 15.1 (elliptic regularity in Sobolev spaces) are context only, not an exterior boundary-representation or DtN theorem; the collar-exhaustion, exterior-truncation and coefficient-decay arguments are local."
    - title: "NIST Digital Library of Mathematical Functions, Section 10.47 and Section 10.50"
      url: "https://dlmf.nist.gov/10.50"
      locator: "Spherical Bessel/Hankel functions and Wronskian relations, used through the cited batch supplier lem-em-outgoing-spherical-hankel-dtn-bounds for the exact radial functions and bounds."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
---

## Statement

Assume Countable Choice ($\mathrm{AC}_\omega$), with the exact meaning of [[def-countable-choice]]. Let $\Omega\subset\mathbb R^3$ be a bounded $C^\infty$ domain of [[def-bounded-c-k-domain-and-boundary-charts]], let $k>0$ and $x\in\Omega$, and use the outgoing kernel $G_k$ of [[lem-em-outgoing-source-helmholtz-and-diffraction]]. A sufficient classical specialization is that $u$ and $f$ extend smoothly to an open neighbourhood of the closed domain and $(-\Delta-k^2)u=f$ there. More generally, retain the justified weaker classical-trace branch: $u$ is $C^2$ inside $\Omega$, $u$ and all first derivatives extend continuously to its closure, $f=(-\Delta-k^2)u$ belongs to $L^1(\Omega)$, and the equation holds inside. The boundary values and normal derivative in the formula below are these actual continuous traces. Then

$$u(x)=\int_\Omega G_k(x-y)f(y)\,dy+\int_{\partial\Omega}\bigl[G_k(x-y)\partial_nu(y)-u(y)\partial_{n_y}G_k(x-y)\bigr]dS_y,$$

with $n$ the outward domain normal; both integrals are absolutely convergent. Merely being smooth on the open domain without these trace/integrability data is insufficient.

For an exterior $D=\mathbb R^3$ minus the closure of a bounded smooth obstacle, retain the exterior counterpart with actual inner boundary traces: suppose $u$ is $C^2$ on $D$ with $u$ and first derivatives continuous to its compact boundary, solves $(-\Delta-k^2)u=f$ there, $f$ is locally continuous and $\int_D|G_k(x-y)f(y)|dy$ is finite at the observation $x$, and the prescribed outgoing condition gives, uniformly on spheres at infinity, $u(y)=O(|y|^{-1})$ and $\partial_ru(y)-iku(y)=o(|y|^{-1})$. Then the same formula holds with volume $D$ and its obstacle boundary, with $n$ outward from $D$. Compactly supported $L^1$ sources with the displayed local regularity are a sufficient source subclass. For the smooth-trace modal outgoing specialization beyond a source-containing sphere of radius $R_0>0$, retain the declared full Axiom of Choice ([[def-axiom-of-choice]]) for this sufficient branch. Write the smooth angular trace as $g(n)=u(R_0n)$, use the real unit-sphere harmonics of [[lem-em-spherical-harmonic-basis-and-addition]], set $c_{lm}=\int_{S^2}g(n)Y_{lm}(n)d\Omega(n)$, and define the outgoing modal class outside that sphere by

$$u(rn)=\sum_{l=0}^\infty\sum_{m=1}^{2l+1}c_{lm}\,\frac{h_l(kr)}{h_l(kR_0)}Y_{lm}(n),\qquad r\ge R_0,$$

where $h_l$ are exactly the earlier explicit functions of [[lem-em-outgoing-spherical-hankel-dtn-bounds]]. The proof establishes smooth convergence, the homogeneous exterior equation, the actual trace $g$, the uniform bound $\sup_{r\ge R_0,n\in S^2}r|u(rn)|<\infty$ and the uniform Sommerfeld residual $\sup_{n\in S^2}r|\partial_ru(rn)-iku(rn)|\to0$. Thus this smooth modal branch satisfies the prescribed far conditions without a later same-page supplier. Its full-Choice premise is retained; the earlier prescribed-outgoing branch remains under Countable Choice.

The Green formula uses the consistent actual pair of traces. Assigning both aperture values independently does not establish an exact boundary problem; a declared scalar aperture-source model remains a separate approximation. No weak boundary trace or normal trace for arbitrary rough data is asserted by mere interior smoothness.

## Facts & Assumptions
**Given:** Countable Choice; a bounded $C^\infty$ domain $\Omega$ with outward normal $n$ and compact boundary $S=\partial\Omega$; $k>0$; the outgoing kernel $G_k$ with $(-\Delta-k^2)G_k=\delta_0$ and $(\Delta+k^2)G_k=0$ off the pole ([[lem-em-outgoing-source-helmholtz-and-diffraction]]); and the data of the three branches.

[F1] **Second Green identity.** On a bounded $C^1$ domain, $\int_\Omega(v\Delta u-u\Delta v)=\int_{\partial\Omega}(v\partial_\nu u-u\partial_\nu v)$ with outward normal ([[cor-second-green-identity-on-a-bounded-c-one-domain]]), applied to the real and imaginary parts and combined complex-bilinearly.

[F2] **Normal tube and collar.** Under Countable Choice, a compact smooth boundary has a tubular neighbourhood and a positive smooth radius; the collar $S_t=\{p-tn(p)\}$ is a smooth surface inside the domain bounding the inner domain $\Omega_t$, and in normal graph charts the surface Jacobian and outward normals converge uniformly to those of $S$ as $t\downarrow0$ ([[thm-euclidean-tubular-neighbourhood-theorem]], [[def-bounded-c-k-domain-and-boundary-charts]], [[def-surface-integral-on-a-compact-c-one-hypersurface]], [[lem-euclidean-chart-measure-agrees-with-polar-surface-measure]]).

[F3] **Dominated convergence and calculus.** Dominated convergence for a dominated pointwise-convergent family ([[thm-dominated-convergence]]); the product, chain and algebra rules and the coordinate FTC ([[thm-algebra-of-derivatives]], [[thm-chain-rule-for-total-derivatives]], [[thm-newton-leibniz-with-interior-derivative]]).

[F4] **Spherical harmonics and Cauchy-Schwarz.** The complete orthonormal basis and addition theorem of [[lem-em-spherical-harmonic-basis-and-addition]], with $\|Y_{lm}\|_\infty\le\sqrt{(2l+1)/(4\pi)}$, and Cauchy-Schwarz in $L^2(S^2)$ ([[cor-cauchy-schwarz-inequality-for-l-two]]).

[F5] **Hankel functions.** The explicit $h_l$ of [[lem-em-outgoing-spherical-hankel-dtn-bounds]] solve the spherical radial Helmholtz equation, have nonincreasing $F_l(z):=z^2|h_l(z)|^2$: the stated logarithmic bound $\operatorname{Re}(h_l'/h_l)\le-1/z$ gives $F_l'/F_l=2/z+2\operatorname{Re}(h_l'/h_l)\le0$, and the logarithmic-derivative bounds give $|kh_l'(kr)/h_l(kr)|\le(l+1)/r+k$ for $r>0$; the cross product is that of [[def-cross-product-in-r3]].

[F6] **Angular operator.** For a smooth function $w$ on $S^2$ and the elementary coordinate rotations $Q_j(t)$, the generator $L_jw=\frac{d}{dt}w(Q_j(t)n)|_{t=0}$ has tangent velocity $e_j\times n$; the surface measure is rotation invariant, and $\Lambda=\sum_jL_j^2$ satisfies $\int(L_jw)v=-\int w(L_jv)$ by differentiating the invariant integral with uniform difference quotients, and on ambient extensions $\sum_jL_j^2=|x|^2\Delta-(x\cdot\nabla)^2-x\cdot\nabla$ ([[lem-euclidean-chart-measure-agrees-with-polar-surface-measure]], [[def-cross-product-in-r3]], [F3]).

[F7] **Interior harmonic derivatives.** Under Countable Choice, for a harmonic $v$ and $B_\rho(x)\Subset\Omega$, $|D^\alpha v(x)|\le C_{3,\alpha}\rho^{-3-|\alpha|}\int_{B_\rho(x)}|v|$ ([[thm-interior-derivative-estimates-for-harmonic-functions]]).




## Proof

**Proof technique:** direct.

1.1 Bounded smooth specialization: apply the second Green identity [F1] on $\Omega\setminus\overline B_\delta(x)$ to $u$ and $y\mapsto G_k(x-y)$; since $(-\Delta-k^2)u=f$ and $(\Delta+k^2)G_k=0$ off the pole, the $k^2$ terms cancel and $-\int_{\Omega\setminus B_\delta}G_k(x-y)f(y)dy=\int_{\partial\Omega}(G_k\partial_nu-u\partial_nG_k)+\int_{\partial B_\delta(x)}(G_k\partial_{n'}u-u\partial_{n'}G_k)$; the inner-sphere term tends to $-u(x)$ because $G_k=1/(4\pi\delta)+O(1)$, $\partial_{n'}G_k=1/(4\pi\delta^2)+O(1/\delta)$ with $n'=-(y-x)/\delta$, the derivative-test term is $O(\delta)$ and the sphere area is $4\pi\delta^2$; the volume integral tends to the absolutely convergent $\int_\Omega G_k(x-y)f(y)dy$ because $f$ is continuous near $x$ and $G_k$ is locally integrable. This gives the displayed interior formula. [given, F1, F3, algebra]

1.2 Modal branch: for smooth $g$ set $c_{lm}=\int_{S^2}gY_{lm}d\Omega$; by [F6] the operator $\Lambda$ is symmetric for the integral pairing and annihilates constants, and since each $Y_{lm}$ is the restriction of a degree-$l$ homogeneous harmonic polynomial, Euler's identity and the ambient formula for $\sum_jL_j^2$ give $\Lambda Y_{lm}=-l(l+1)Y_{lm}$; hence for every integer $p\ge1$ and $l\ge1$, $[l(l+1)]^pc_{lm}=\int_{S^2}(-\Lambda)^pg\,Y_{lm}d\Omega$ and Cauchy-Schwarz [F4] gives $|c_{lm}|\le\|\Lambda^pg\|_2[l(l+1)]^{-p}$. [given, F4, F6, algebra]

1.3 Radial majorants: with $\phi_l(r)=h_l(kr)/h_l(kR_0)$ and $F_l$ of [F5], $|h_l(kr)|/|h_l(kR_0)|=(R_0/r)\sqrt{F_l(kr)/F_l(kR_0)}\le R_0/r$; more precisely the monotonicity of $F_l$ and $F_l(kR_0)=k^2R_0^2|h_l(kR_0)|^2$ give $|\phi_l(r)|\le R_0/r$ and $|\phi_l'(r)|=|kh_l'(kr)|/|h_l(kR_0)|\le[(l+1)/r+k]|\phi_l(r)|$, hence $r|\phi_l'(r)-ik\phi_l(r)|\le R_0[(l+1)/r+2k]\le l+1+2kR_0$ for $r\ge R_0$; for every fixed $l$ the explicit outgoing polynomial gives $r(\phi_l'(r)-ik\phi_l(r))\to0$ as $r\to\infty$. [given, F5, algebra]

2.1 Weaker trace branch: let $S_t$ be the inner collar surface of [F2] with inner domain $\Omega_t\ni x$; for small $t$ the punctured Green argument of step 1.1 applies on $\Omega_t$, so $u(x)=\int_{\Omega_t}G_k(x-y)f(y)dy+\int_{S_t}(G_k\partial_{n_t}u-u\partial_{n_t}G_k)dS$; as $t\downarrow0$ the traces $u|_{S_t}$ and $\partial_{n_t}u|_{S_t}$ converge uniformly to the actual continuous traces on $S$ and the surface Jacobians and normals converge uniformly by [F2], so the boundary integrals converge to the displayed ones with the compact chart formula; the volume integrals increase to $\Omega$ and converge by dominated convergence [F3] using the integrable majorant $\mathbf 1_\Omega|G_k(x-\cdot)||f|$. [step 1.1, F2, F3, algebra]

2.2 Exterior branch: for a large ball $B_R$ containing $x$ and the obstacle, apply the same punctured identity on $D_R=(D\cap B_R)\setminus\overline B_\delta(x)$; the inner boundary term tends to $-u(x)$ as in step 1.1 and the obstacle boundary contributes the displayed trace integral, while the outer sphere term is $\int_{|y|=R}(v\partial_Ru-u\partial_Rv)dS$ with $v=G_k(x-y)$; writing it as $\int[v(\partial_Ru-iku)-u(\partial_Rv-ikv)]dS$, the kernel estimates $v=O(R^{-1})$ and $\partial_Rv-ikv=O(R^{-2})$ for fixed $x$ combine with the prescribed far conditions to bound the integrand by $o(R^{-2})$ uniformly, so the outer term tends to $0$ after multiplication by the area $4\pi R^2$; absolute convergence of the volume term follows from the stated integrability of $G_k(x-\cdot)f$ on $D$. [step 1.1, given, F1, F3, algebra]

2.3 With $p=2$ and the addition diagonal $\|Y_{lm}\|_\infty\le\sqrt{(2l+1)/(4\pi)}$ [F4], the weighted sum $W=\sum_{l,m}(l+1+2kR_0)|c_{lm}|\,\|Y_{lm}\|_\infty$ is finite: the $l=0$ term is finite and for $l\ge1$ the degree-$l$ contribution is at most a constant times $(2l+1)(l+1+2kR_0)\sqrt{(2l+1)/(4\pi)}[l(l+1)]^{-2}=O(l^{-3/2})$, which is summable. [step 1.2, F4, algebra]

3.1 By steps 2.3 and 1.3 the modal series and its first radial derivatives are dominated on $r\ge R_0$ by $W<\infty$, so they converge absolutely and uniformly there and on every closed exterior annulus; the coordinate FTC [F3] identifies the radial derivative of the sum with the summed derivative, and all higher derivatives converge on compact exterior annuli as follows. For the solid harmonics $P_{lm}(x)=|x|^lY_{lm}(x/|x|)$, the addition bound on $Y_{lm}$ and a ball of radius $1/[2(l+1)]$ about $n\in S^2$ give $|P_{lm}|\le e^{1/2}\sqrt{(2l+1)/(4\pi)}$ on that ball. Hence [F7] bounds each order-$a$ derivative at $n$ by $C_a(l+1)^{a+1/2}$. Chain rules in a finite sphere atlas give polynomial bounds on every fixed angular derivative. The radial ODE and the first logarithmic-derivative bound of step 1.3 give polynomial bounds in $l$ on every fixed radial derivative on a compact annulus. For any required derivative order choose $p$ in step 1.2 sufficiently large that these polynomial factors, the $(2l+1)$ multiplicity and $[l(l+1)]^{-p}$ have a summable product. Thus every fixed derivative series converges uniformly, and repeated coordinate FTC identifies those series with the actual Cartesian derivatives. Therefore the modal series defines a $C^\infty$ exterior field; at $r=R_0$ completeness of the harmonics [F4] and continuity give the actual trace $g$, and if the coefficients are recorded in the sphere-normalised basis $Y^{R_0}_{lm}(R_0n)=R_0^{-1}Y_{lm}(n)$ they become $R_0c_{lm}$, giving the same displayed expansion. [step 2.3, step 1.3, F3, F4, F5, F7, algebra]

4.1 Each summand $\phi_l(r)Y_{lm}(n)$ is annihilated by $\Delta+k^2$: the angular eigenvalue and the radial Helmholtz equation of [F5] give the polar Laplacian identity, and finite combinations of two radial and angular derivatives with smooth coefficients identify $\Delta$; termwise second derivatives prove the equation for the uniformly convergent limit on each compact exterior set, and uniqueness of limits identifies it as the homogeneous exterior solution with the trace $g$. [step 3.1, F5, F6, F3, algebra]

5.1 Bounds: step 1.3 gives $r|u(rn)|\le R_0W$ uniformly; and $r|\partial_ru(rn)-iku(rn)|\le\sum_{l,m}|c_{lm}|\|Y_{lm}\|_\infty\,r|\phi_l'(r)-ik\phi_l(r)|\le W$ for all $r\ge R_0$, so the amplitude bound holds; for the Sommerfeld residual, given $\epsilon$ choose a finite degree cutoff with tail $<\epsilon/2$ by step 2.3 and then the finitely many remaining terms have fixed finite angular suprema and radial residuals tending to $0$ by step 1.3, giving $\sup_nr|\partial_ru(rn)-iku(rn)|\to0$. [step 2.3, step 1.3, step 4.1, algebra] ∎

The full Axiom of Choice is retained only for the smooth modal branch, as declared; the bounded, weak-trace and exterior branches use Countable Choice through the cited Green, tubular and surface interfaces. Assigning boundary values and normal derivatives independently is not asserted to solve a boundary problem, and no rough weak-trace Green theorem is claimed.
