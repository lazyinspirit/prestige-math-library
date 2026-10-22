---
id: lem-ip-gaussian-beam-null-bicharacteristic
kind: lemma
title: Gaussian beams concentrated on an embedded null bicharacteristic
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 2
axiom_base: Countable Choice
deps:
  - thm-local-existence-uniqueness-and-smooth-dependence-for-manifold-integral-curves
  - lem-ip-borel-jet-realization-and-beam-patching
  - thm-ip-variable-metric-wave-ibvp-energy-wellposedness
  - lem-ip-riemannian-green-boundary-traces-and-wave-lifting
  - def-riemannian-metric-and-riemannian-manifold
  - def-riemannian-volume-density
  - def-countable-choice
  - def-principal-part-and-principal-symbol-of-a-scalar-pde
  - lem-principal-symbol-under-a-c-one-coordinate-change
  - def-tautological-one-form-on-a-cotangent-bundle
  - thm-the-canonical-cotangent-two-form-is-symplectic
  - def-symplectic-form-and-symplectic-manifold
  - def-hamiltonian-vector-field-and-hamiltonian-function
  - thm-hamiltonian-vector-fields-exist-uniquely-for-smooth-functions
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Lauri Oksanen, Mikko Salo, Plamen Stefanov, and Gunther Uhlmann, Inverse problems for real principal type operators (arXiv:2001.07599v2)"
      url: "https://arxiv.org/pdf/2001.07599v2"
      locator: "§3, Theorem 3.1, PDF p. 21 and proof through PDF p. 33: endpoint-localized residual, transported mass, phase, Riccati positivity, transport, Borel realization and patching. The no-cusp local phase argument is supplied below."
    - title: "Mikko Salo, On geometric inverse problems and microlocal analysis (full author lecture notes, arXiv:2312.08123v1)"
      url: "https://arxiv.org/pdf/2312.08123v1"
      locator: "§3.4, PDF pp. 32–39: Gaussian-beam construction sketch and its explicit proof boundary."
proof_strategy: complex phase, Riccati transport, Borel summation, and energy correction
---

## Statement

Assume Countable Choice. Let $X$ be a smooth spacetime manifold of dimension $m\ge2$ with a smooth positive density, and let $P=\sum_{|\alpha|\le2}a_\alpha(x)D^\alpha$ be a scalar second-order differential operator in local coordinates. Its principal symbol $p(x,\xi)=\sum_{|\alpha|=2}a_\alpha(x)\xi^\alpha$ is real and satisfies $dp\ne0$ on $\{p=0\}\subset T^*X\setminus0$. Equip $T^*X$ with its canonical cotangent symplectic form and define the Hamilton vector field by $\iota_{H_p}\omega_{\rm can}=dp$. A null bicharacteristic is a nonzero integral curve of $H_p$ contained in $\{p=0\}$. Let $\Gamma$ be a compact phase-space segment that is an injective immersion with no repeated phase points; assume its base projection is an immersion (the no-cusp condition) and that the segment is contained in the interior of $T^*X\setminus0$. For every integer $N\ge1$, there are complex smooth functions $u_\lambda$ supported in a fixed tubular neighborhood of the base curve of $\Gamma$, with a smooth cutoff equal to one near that curve, such that the following hold as $\lambda\to+\infty$:

1. The phase has a formal transverse Taylor expansion solving the complex eikonal equation to every prescribed finite order; its transverse imaginary Hessian is positive definite along the curve and yields Gaussian decay away from the ray.
2. The amplitudes solve the transport hierarchy to the corresponding order and are realized by a Borel sum with a finite-coordinate-patch construction.
3. Write $s$ for a fixed smooth parameter on the projected curve and fix its origin. There is a smooth positive transported density $w(s)ds$, normalized by $w(0)=1$, such that the measures $|u_\lambda|^2dV_X$ converge against compactly supported smooth tests away from endpoint neighborhoods to $\int a(\pi\Gamma(s))w(s)ds$. The weight is the one determined by the leading transport equation; a general operator with complex lower-order coefficients need not give constant $w$. For the real formally self-adjoint wave operator, with parameter equal to physical time along a unit-speed spatial ray and the wave phase normalized by $|\partial_t\phi|=1$, the transport gives $w=1$.
4. For every compact set $K$ disjoint from neighborhoods of the two projected endpoints, $\|Pu_\lambda\|_{L^2(K)}=O(\lambda^{-N})$ for each requested $N$, after carrying the expansions sufficiently far. The endpoint cutoff generally produces a residual near those endpoints. In particular, if the segment extends outside a compact measurement domain and its two endpoint neighborhoods are disjoint from that domain, the residual has the asserted order throughout that domain.

The cutoff in the ambient extension is one along the portion of the ray under observation and vanishes beyond the extended endpoints. A segment wholly in the spacetime interior does not have a globally negligible endpoint residual. Its tube can be supported away from the boundary and then has zero boundary trace; a wave beam entering and exiting a measurement domain instead has its actual smooth boundary trace there. In this wave specialization, if the extended beam is zero near the required initial or terminal time, the zero-boundary energy correction on the measurement cylinder gives an exact solution with the same boundary data and an $O(\lambda^{-N})$ energy error for any requested $N$. The claim concerns an embedded segment in phase space and permits projected self-intersections.

## Statement references

[[lem-ip-borel-jet-realization-and-beam-patching]]

[[thm-ip-variable-metric-wave-ibvp-energy-wellposedness]]

[[lem-ip-riemannian-green-boundary-traces-and-wave-lifting]]

[[def-riemannian-metric-and-riemannian-manifold]]

[[def-riemannian-volume-density]]

[[def-countable-choice]]

[[def-principal-part-and-principal-symbol-of-a-scalar-pde]]

[[lem-principal-symbol-under-a-c-one-coordinate-change]]

[[def-tautological-one-form-on-a-cotangent-bundle]]

[[thm-the-canonical-cotangent-two-form-is-symplectic]]

[[def-symplectic-form-and-symplectic-manifold]]

[[def-hamiltonian-vector-field-and-hamiltonian-function]]

[[thm-hamiltonian-vector-fields-exist-uniquely-for-smooth-functions]]

## Facts & Assumptions

**Given:** The real quadratic principal symbol, an embedded compact null bicharacteristic with immersed projection, a positive smooth density, and a requested residual order; put $h=\lambda^{-1}$ and $d=m-1$.

[F1] [[lem-ip-borel-jet-realization-and-beam-patching]] realizes compatible transverse jets uniformly on compact parameter intervals. For a curve with projected crossings, apply it to the embedded graph $(\pi\Gamma(s),s)$ in $X\times\mathbb R$, and then restrict to separate local branches.

[F2] [[thm-local-existence-uniqueness-and-smooth-dependence-for-manifold-integral-curves]] gives smooth solutions and uniqueness for the finite linear ODE systems below.

[F3] [[thm-ip-variable-metric-wave-ibvp-energy-wellposedness]] gives forward and terminal zero-boundary energy corrections on a compact wave cylinder.


## Proof

1.1 Cover the parameter interval by finitely many small overlapping intervals on which the immersed base curve is embedded. In such an interval choose coordinates $(s,y)$ with the curve $y=0$ and with $s$ its prescribed parameter. The central covector satisfies $p=0$ and $p_{\xi_s}\ne0$, since the Hamilton velocity in these coordinates is a nonzero multiple of $\partial_s$. The formal implicit equation $p(s,y,\partial_s\phi,\partial_y\phi)=0$ can thus be solved recursively for the jets of $\partial_s\phi$. This is an evolution eikonal equation in $s$, with a smooth real reduced Hamiltonian in the real variables. Its zeroth and first jet equations are exactly the given Hamilton curve (after its parameter change). Initialize the transverse Hessian by $H(0)=iI$ in the chosen transverse coordinates. [F2, given, construct, algebra]

2.1 The quadratic jet equation is the matrix Riccati equation $$H'+D+BH+HB^T+HCH=0,$$ where $C,D$ are real symmetric and $B$ real, the corresponding blocks of the reduced Hamiltonian Hessian. Solve instead $Y'=B^TY+CZ$, $Z'=-DY-BZ$, $Y(0)=I$, $Z(0)=iI$. Direct differentiation gives $Y^TZ-Z^TY=0$ and $Y^*Z-Z^*Y=2iI$. If $Yv=0$ the second identity gives $0=2i|v|^2$, so $Y$ is invertible on the whole interval. Consequently $H=ZY^{-1}$ is symmetric, solves the Riccati equation, and $$\operatorname{Im}H=(Y^{-1})^*Y^{-1}>0.$$ Compactness gives uniform positive lower and finite upper bounds. At an overlap transform all jets by the coordinate chain rule, carry these initial data to the next chart, and use ODE uniqueness. Positivity is unchanged by real coordinate change and persists on the finite cover. [F2, step 1.1, algebra]

3.1 For transverse degree $k\ge3$, differentiating the reduced eikonal equation $k$ times gives a finite linear ODE for the degree-$k$ phase jet: its highest jet enters linearly, with coefficients determined by the Hessian and the first derivatives of the reduced Hamiltonian; the inhomogeneous terms involve only lower jets and derivatives of the symbol. This follows by the product rule: terms containing a highest derivative of $\phi$ can have only one such factor, and the degree-$k+1$ derivative cancels against differentiation along the central Hamilton curve. Thus solve successively for every degree using [F2], matching all jets on overlaps. Apply [F1], or its explicit shrinking-cutoff series, to realize them. This yields a smooth phase with eikonal defect flat on each branch and $\operatorname{Im}\phi\ge c|y|^2$ after shrinking the transverse tube. [F1, F2, step 1.1, step 2.1, construct, algebra]

4.1 Define $T_\phi$ to be the coefficient of $h^{-1}$ in the exact conjugation identity $$P(e^{i\phi/h}a)=e^{i\phi/h}(h^{-2}p(x,d\phi)a+h^{-1}T_\phi a+Pa).$$ It is a first-order operator with derivative part $p_\xi(x,d\phi)\cdot D$, so its coefficient of $\partial_s$ on the ray is nonzero. Solve $T_\phi a_0=0$ and $T_\phi a_j=-Pa_{j-1}$ for $j\ge1$ to infinite transverse order. The central $a_0$ equation is a scalar homogeneous ODE with nonzero initial value, hence has nonvanishing exponential solution. For each successive transverse degree and amplitude index the differentiated equations are linear ODEs with already known right sides, by the same cancellation of derivatives along the curve as in step 3.1. Realize these jets by [F1]. The separate asymptotic series $a(x;h)\sim\sum_{j\ge0}h^ja_j(x)$ is realized by $\sum_jh^ja_j(x)\eta(h/\delta_j)$, with $\eta=1$ near zero and $\delta_j\downarrow0$ chosen so its $C^k$ tails are summable for every fixed $k$ and have the required $h$ asymptotic bounds. Explicitly, for each $j$ make $\delta_j<2^{-j}$ and $\delta_j^{j/2}(1+\|a_j\|_{C^j})<2^{-j}$; for fixed $k,J$, terms $j\ge\max(k,2J+2)$ are then $O(h^J)$ in $C^k$. Only finitely many earlier terms remain. This proves the full transport and Borel realization. [F1, F2, step 3.1, construct, algebra]

5.1 On an embedded branch take $u_h=h^{-d/4}e^{i\phi/h}a(x;h)$ and a fixed transverse cutoff. For a flat defect $r$, Taylor's formula gives $|D^\alpha r|\le C_{k,\alpha}|y|^k$ for every $k$. Scaling $y=\sqrt h z$ and using $\operatorname{Im}\phi\ge c|y|^2$ shows $$\|h^{-d/4}|y|^ke^{-c|y|^2/h}\|_{L^2}\le C_kh^{k/2}.$$ Every application of $P$ loses at most two powers of $h$. Choose $k$ and the amplitude order large enough to dominate that loss and any requested $N$. Derivatives of the transverse cutoff are supported at fixed positive distance from the ray and are $O(h^\infty)$ by Gaussian decay. Thus the residual is $O(h^N)$ away from longitudinal endpoint cutoffs; at endpoints the commutator with a longitudinal cutoff remains, and no vanishing assertion is made there. This also proves uniform $L^2$ boundedness on each branch. [step 2.1, step 3.1, step 4.1, algebra]

6.1 To patch, use the compatible phase and amplitude jets constructed above and a finite partition in the curve parameter. On the overlap of adjacent descriptions, their phases and amplitudes differ by flat terms, so after multiplication by $h^{-d/4}e^{i\phi/h}$ their difference and any fixed number of derivatives are $O(h^N)$ for every $N$, by step 5.1. Derivatives of the partition cancel because its sum is one on each branch; their remaining flat differences have the same bound. Nonadjacent branches meeting at a projected crossing have distinct covectors: otherwise the phase-space curve would repeat a point. Compactness separates those covectors uniformly off a small neighborhood of the parameter diagonal. Mixed products therefore tend to zero: integrate by parts against the nonzero difference of the two real phase gradients, shrinking crossing neighborhoods so it remains bounded below. Each integration gains $h$, while each transverse Gaussian derivative loses at most $h^{-1/2}$ in its integral bounds; arbitrarily many integrations give arbitrary decay. Away from crossings ordinary Gaussian decay applies. Thus patching preserves the residual, positivity, and the sum of the branch mass limits, including at projected self-intersections. [F1, step 3.1, step 4.1, step 5.1, algebra]

7.1 Write the density in a branch as $\rho(s,y)|dsdy|$. Gaussian scaling and dominated convergence give $$|u_h|^2dV_X\ \longrightarrow\ w(s)ds,\qquad w(s)=\frac{\pi^{d/2}|a_0(s,0)|^2\rho(s,0)}{\sqrt{\det\operatorname{Im}H(s)}}.$$ This positive smooth function is fixed by the leading transport equation; choose the initial scalar amplitude to make $w(0)=1$. Coordinate changes preserve this expression as a density, and step 6.1 removes mixed terms. For a formally self-adjoint operator the leading transport equation and the Riccati determinant identity give $(p_{\xi_s}w)'=0$: this follows by multiplying $T_\phi a_0=0$ by $\bar a_0$, subtracting its conjugate, and using $\rho^{-1}\partial_j(\rho p_{\xi_j})$ for the real divergence term. For the real wave operator in physical-time coordinates the normalized central covector has $|\xi_t|=1$, hence $|p_{\xi_t}|=2$ is constant; its mass density is therefore constant and the chosen normalization gives $w=1$. Arbitrary complex lower-order terms instead enter the scalar amplitude ODE, giving precisely the transported weight above. [step 2.1, step 4.1, step 5.1, step 6.1, algebra]

8.1 If the endpoint cutoff regions lie outside the measurement cylinder, step 5.1 gives $\|Pu_h\|_{L^2(Q)}=O(h^N)$ for every $N$. In the wave case assume also the approximate beam vanishes near the initial slice for a forward correction or terminal slice for a backward correction. Apply [F3] to $-Pu_h$ with zero boundary and the corresponding zero endpoint data. Its energy norm is $O(h^N)$, since $\|Pu_h\|_{L^1_tL^2_x}\le\sqrt T\|Pu_h\|_{L^2(Q)}$. Adding this correction gives an exact solution with the actual approximate boundary data and the same normalized wave ray limit; the product error is bounded by Cauchy–Schwarz and uniform $L^2$ bounds. This proves every claimed localization and correction assertion. [F3, step 5.1, step 6.1, step 7.1, construct, algebra] ∎
