---
id: lem-ip-calderon-radial-inclusion-dn-spectrum
kind: lemma
title: DN spectrum of a concentric radial conductivity inclusion
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-hk-and-hk-zero-notation
  - def-ip-calderon-admissible-conductivity-class
  - def-ip-calderon-weak-dn-map-for-bounded-conductivities
  - def-wkp-zero-as-a-sobolev-closure
  - lem-ip-calderon-boundary-trace-quotient-identification
  - lem-ip-calderon-rough-dn-map-wellposedness
  - thm-sobolev-gauss-green-formula-on-c-one-domains
  - thm-fourier-basis-and-parseval-on-the-n-torus
  - thm-smooth-up-to-the-boundary-density-on-smooth-domains
  - thm-monotone-convergence-for-the-integral
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Mikko Salo, Calderón problem (University of Helsinki lecture notes, Spring 2008)"
      url: "https://users.jyu.fi/~salomi/lecturenotes/calderon_lectures.pdf"
      locator: "Chapter 4, explicit concentric-disk inclusion example, printed pp. 29–30."
    - title: "Daniel Faraco and Martí Prats, Characterization for stability in planar conductivities"
      url: "https://arxiv.org/pdf/1701.06480"
      locator: "Section 2.1 and the unit-disk trace quotient convention, printed pp. 5–6."
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Statement

Assume the Axiom of Choice and Countable Choice. Let $D=B(x_0,a)\subset(0,1)^2$ be a disk with $a>0$, let $0<r\le a/2$, and let $\beta>0$. Define $\gamma_1\equiv1$ on $D$ and $\gamma_r:=1+\beta\chi_{B(x_0,r)}$, and put $\eta:=\beta/(2+\beta)$. Both conductivities belong to $\Gamma_{1,1+\beta}(D)$. For each $k\in\mathbb Z\setminus\{0\}$, with $n:=|k|$ and boundary Fourier mode $e_k(\theta):=e^{ik\theta}$, the induced weak DN maps on the trace quotient by constants satisfy
$$\dot{\Lambda}_{\gamma_1}[e_k]=\frac{n}{a}e_k,\qquad \dot{\Lambda}_{\gamma_r}[e_k]=\frac{n}{a}\frac{1+\eta(r/a)^{2n}}{1-\eta(r/a)^{2n}}e_k,$$
under the $L^2(\partial D)$ dual pairing; both maps annihilate the constant boundary class. If $Q_n:=\|[e_k]\|_{\mathcal D(D)/\mathbb C\mathbf1}^2$ is the squared trace-quotient-by-constants norm of the mode, then
$$2\pi n\le Q_n\le 2\pi n+\frac{\pi a^2}{n+1},$$
and
$$\|\dot{\Lambda}_{\gamma_r}-\dot{\Lambda}_{\gamma_1}\|_{\mathcal L(\mathcal D(D)/\mathbb C\mathbf1,(\mathcal D(D)/\mathbb C\mathbf1)^*)}\le\frac{2\eta}{1-\eta}(r/a)^2.$$

## Statement references

[[def-ip-calderon-admissible-conductivity-class|The uniformly elliptic coefficient class $\Gamma_{m,M}(\Omega)$.]]

[[def-hk-and-hk-zero-notation|The $H^1$ and $H_0^1$ Sobolev spaces.]]

[[def-ip-calderon-weak-dn-map-for-bounded-conductivities|The weak energy-form DN map on the trace quotient.]]

[[lem-ip-calderon-boundary-trace-quotient-identification|The trace quotient norm used for $\mathcal D(D)$.]]

## Facts & Assumptions

**Given:** The Axiom of Choice and Countable Choice; the disk $D=B(x_0,a)$; $0<r\le a/2$; $\beta>0$; and the measurable conductivities $\gamma_1,\gamma_r$.

[F1] For $\gamma\in\Gamma_{m,M}(D)$ the coefficient is real and uniformly bounded below and above; $H_0^1(D)$ is the closure of $C_c^\infty(D)$; and the DN map is the weak energy form on $\mathcal D(D)=H^1(D)/H_0^1(D)$ with representative-independent boundary functional. ([[def-ip-calderon-admissible-conductivity-class]], [[def-wkp-zero-as-a-sobolev-closure]], [[def-ip-calderon-weak-dn-map-for-bounded-conductivities]], [[lem-ip-calderon-rough-dn-map-wellposedness]])

[F2] The Fourier characters $e^{ik\theta}$ form a complete orthogonal basis of $L^2$ on the circle; Parseval and angular mode projections hold. ([[thm-fourier-basis-and-parseval-on-the-n-torus]])

[F3] For $H^1$ functions on a smooth disk, integration by parts identifies the weak energy form with the outward normal flux when the solution is smooth near the boundary. ([[thm-sobolev-gauss-green-formula-on-c-one-domains]])

[F4] The trace quotient norm is the infimum of the $H^1$ norm over all interior representatives with the prescribed boundary class, and the trace identifies this quotient with the $W^{1/2,2}$ boundary space. ([[def-ip-calderon-weak-dn-map-for-bounded-conductivities]], [[lem-ip-calderon-boundary-trace-quotient-identification]])

[F5] Restrictions of smooth ambient functions are dense in $H^1(D)$ because the disk is a bounded smooth domain. ([[thm-smooth-up-to-the-boundary-density-on-smooth-domains]])

[F6] Monotone convergence allows the nonnegative angular Parseval sums to pass through the radial integral. ([[thm-monotone-convergence-for-the-integral]])

[F7] An $H^1$ function is an $L^2$ class whose first distributional derivatives are also $L^2$ classes. ([[def-hk-and-hk-zero-notation]])

[A1] The Axiom of Choice is assumed at the weak DN and smooth-density interfaces. ([[def-axiom-of-choice]])

[A2] Countable Choice is assumed at the Fourier basis, weak solution and monotone-convergence interfaces. ([[def-countable-choice]])

## Proof

**Given:** The data in the statement.

1.1 Let $n=|k|$, $s=r/a$, and $\sigma=1+\beta$. In polar coordinates $\rho=|x-x_0|$, seek a solution with angular mode $e^{ik\theta}$, using $u_i=A\rho^ne^{ik\theta}$ for $\rho<r$ and $u_o=(B\rho^n+C\rho^{-n})e^{ik\theta}$ for $r<\rho<a$. Continuity of $u$ and continuity of $\gamma\partial_\rho u$ at $\rho=r$ give $C r^{-2n}=-\eta B$ because $(\sigma-1)/(\sigma+1)=\eta$. The boundary condition $u_o(a,\theta)=e_k(\theta)$ then gives $Ba^n=(1-\eta s^{2n})^{-1}$. [given, construct, algebra]

2.1 Each piece is harmonic on its subdomain, and its value and conductivity-weighted normal derivative agree at $\rho=r$ by step 1.1. Both pieces and their classical gradients are bounded up to the interface because $r>0$. Testing a distributional first derivative against $\varphi\in C_c^\infty(D)$ and integrating by parts on the inner disk and annulus produces interface terms equal to the jump in $u$ times $\varphi$; the matching values cancel these terms, leaving the bounded piecewise classical derivatives. By [F7] the glued function belongs to $H^1(D)$. For any $z\in C_c^\infty(D)$, integration by parts on the inner disk and outer annulus cancels the interface flux terms and proves the weak equation. Since $C_c^\infty(D)$ is dense in $H_0^1(D)$ by [F1] and the energy form is continuous, the equation holds for every $z\in H_0^1(D)$. By [F1] the function is the unique solution for trace $e_k$. For any smooth representative $V$ of a boundary trace, the same piecewise integration by parts gives $$\int_D\gamma_r\nabla u\cdot\overline{\nabla V}\,dx=\int_{\partial D}\partial_\rho u_o(a,\theta)\overline{V}\,dS,$$ because the two interface flux terms cancel. The identity extends to every $V\in H^1(D)$ by the density of smooth ambient restrictions [F5], continuity of the energy form, and continuity of the trace. At $\rho=a$, the conductivity is $1$, so the outward flux is $$\partial_\rho u_o(a,\theta)=\frac{n}{a}\frac{1+\eta s^{2n}}{1-\eta s^{2n}}e_k(\theta).$$ Thus this is the weak DN functional, with the displayed eigenvalue under the $L^2(\partial D)$ pairing. For $\gamma_1\equiv1$, the harmonic extension $(\rho/a)^ne_k(\theta)$ gives flux $(n/a)e_k$, and the constant solution has zero flux. [A1, A2, F1, F3, F5, F7, step 1.1, algebra]

3.1 For each angle $\theta$, define $(R_\theta U)(x)=U(x_0+Q_\theta(x-x_0))$ on $D$, where $Q_\theta$ is the planar rotation matrix, and define $P_kU=(2\pi)^{-1}\int_0^{2\pi}e^{-ik\theta}R_\theta U\,d\theta$. By density [F5] and the rotation isometries, $\theta\mapsto R_\theta U$ is strongly continuous in $H^1(D)$ for every $U$, so this integral is the $H^1$ limit of its Riemann sums. Rotations preserve the $H^1(D)$ inner product; Minkowski's inequality makes $P_k$ a contraction, and character orthogonality [F2] makes it a self-adjoint projection with pairwise orthogonal ranges. For $w\in C_c^\infty(D)$, the map $\theta\mapsto R_\theta w$ is continuous in $H^1$ and every Riemann sum of the displayed integral is in $C_c^\infty(D)$, so $P_kw\in H_0^1(D)$; contraction and density in the definition of $H_0^1$ extend this invariance to all of $H_0^1(D)$. For a smooth restriction $U$, the polar-coordinate chain rule gives the $H^1$ norm as the integral of $|U|^2+|\partial_\rho U|^2+\rho^{-2}|\partial_\theta U|^2$ against $\rho\,d\rho d\theta$. Parseval [F2] for these three terms and monotone convergence [F6] in the radial integral show that the finite orthogonal sums $S_N:=\sum_{|k|\le N}P_k$ converge to $U$ in $H^1(D)$. For a general $U\in H^1(D)$, approximate by smooth restrictions using [F5]; on each annulus $\epsilon<\rho<a$ the polar map is a $C^1$ diffeomorphism, so the polar norm and Fourier identities pass to the limit there, and monotone convergence [F6] as $\epsilon\downarrow0$ gives the full-disk identities. Each $S_N$ is an orthogonal projection and hence a contraction; density [F5] therefore extends $S_NU\to U$ to every $U\in H^1(D)$. The induced quotient modes are thus a complete orthogonal family in $\mathcal D(D)$, and the constant mode is orthogonal to every nonzero mode. Since the trace is bounded and rotation-equivariant on smooth functions, [F4] and [F5] extend commutation to all of $H^1(D)$; the trace-kernel identity in [F4] then shows that each projected boundary class is a scalar multiple of one mode. For any $H^1$ representative $U$ of the boundary mode $e_k$, let $v(\rho)$ be its $k$th angular Fourier coefficient. Parseval gives $$\|U\|_{H^1(D)}^2\ge 2\pi\int_0^a\left(|v'(\rho)|^2\rho+\frac{n^2|v(\rho)|^2}{\rho}\right)d\rho.$$ The trace condition gives $v(a)=1$. On every interval $[\epsilon,a]$, the one-dimensional Sobolev representative of $v$ is absolutely continuous, and expansion of the square yields $$\int_\epsilon^a\left(|v'|^2\rho+\frac{n^2|v|^2}{\rho}\right)d\rho=\int_\epsilon^a\left|v'-\frac n\rho v\right|^2\rho\,d\rho+n|v(a)|^2-n|v(\epsilon)|^2.$$ The full energy being finite implies $\int_0^a|v(\rho)|^2\rho^{-1}d\rho<\infty$, so there is a sequence $\epsilon_j\downarrow0$ with $v(\epsilon_j)\to0$; otherwise $|v|$ would be bounded below near zero and this integral would diverge. Letting $\epsilon=\epsilon_j$ and using nonnegativity of the square proves that the radial energy is at least $n$. Thus every representative has squared $H^1$ norm at least $2\pi n$, so [F4] gives $Q_n^{\mathcal D}:=\|e_k\|_{\mathcal D(D)}^2\ge2\pi n$. The harmonic lift $(\rho/a)^ne_k$ has squared $H^1$ norm $2\pi n+\pi a^2/(n+1)$ by direct radial integration, so [F4] gives $Q_n^{\mathcal D}\le2\pi n+\pi a^2/(n+1)$. Orthogonality of the constant mode to $e_k$ gives $\|e_k+c\mathbf1\|_{\mathcal D}^2=Q_n^{\mathcal D}+|c|^2\|\mathbf1\|_{\mathcal D}^2$; the constant class has positive norm by the trace isomorphism [F4]. Taking the infimum over $c$ shows that the statement's further quotient norm satisfies $Q_n=Q_n^{\mathcal D}$. [A1, A2, F2, F4, F5, F6, step 2.1, algebra]

4.1 The weak DN map is diagonal on the complete orthogonal quotient modes from step 3.1; the constant mode is orthogonal to all nonzero modes, so quotienting by constants leaves $Q_n$ unchanged: angular integration makes the pairing of mode $e_k$ with any distinct mode zero, and step 2.1 gives its diagonal coefficient. For finite sums, the dual norm of the difference applied to $\sum a_ke_k$ is $\bigl(\sum_{k\ne0}|a_k|^2(2\pi a|\lambda_n(r)-n/a|)^2/Q_n\bigr)^{1/2}$; boundedness [F1] and density extend this formula to all inputs. Therefore $$\|\dot{\Lambda}_{\gamma_r}-\dot{\Lambda}_{\gamma_1}\|=\sup_{k\ne0}\frac{2\pi a\,|\lambda_n(r)-n/a|}{Q_n},\qquad \lambda_n(r)-\frac na=\frac{2n}{a}\frac{\eta s^{2n}}{1-\eta s^{2n}}.$$ Using $Q_n\ge2\pi n$, $0<s\le1/2$, and $0<\eta<1$, this is at most $$\sup_{n\ge1}\frac{2\eta s^{2n}}{1-\eta s^{2n}}\le\frac{2\eta}{1-\eta}s^2.$$ This proves all asserted eigenvalue and operator-norm formulas. [A1, A2, F1, F2, step 2.1, step 3.1, algebra] ∎

