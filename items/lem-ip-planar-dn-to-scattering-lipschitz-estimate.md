---
id: lem-ip-planar-dn-to-scattering-lipschitz-estimate
kind: lemma
title: Uniform DN-to-scattering stability for planar conductivities
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - lem-ip-planar-measurable-beltrami-cgo-solutions
  - lem-ip-planar-conductivity-cgo-logarithmic-phases
  - lem-ip-planar-scattering-dbar-equation-and-parameter-bounds
  - lem-ip-calderon-rough-alessandrini-and-quotient-norm
  - lem-ip-calderon-rough-dn-map-wellposedness
  - cor-residue-theorem-circle
  - cor-second-green-identity-on-a-bounded-c-one-domain
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Barceló, Faraco and Ruiz, Stability of Calderón inverse conductivity problem in the plane"
      url: "https://www.mis.mpg.de/preprints/2006/preprint2006_5.pdf"
      locator: "Section 4.2, Theorem 4.6, Lemmas 4.7–4.9 and full proof, preprint printed pp. 28–31 (PDF pp. 30–33). The proof here computes the exterior Wronskian by Laurent residues."
dependency_level: 6
---

## Statement

Assume the Axiom of Choice and Countable Choice. Let $0<a<1$, $0\le\kappa<1$, and let real $\mu_1,\mu_2$ be supported in $D_a$, with $\|\mu_j\|_\infty\le\kappa$. Set $\gamma_j=(1-\mu_j)/(1+\mu_j)$, and define their weak DN maps on $D_1$ and their scattering amplitudes $\tau_j$ by the preceding CGO construction. If $E=\mathcal D(D_1)/\mathbb C\mathbf1$ and
$$\delta=\|\dot\Lambda_{\gamma_1}-\dot\Lambda_{\gamma_2}\|_{\mathcal L(E,E^*)},$$
then
$$|\tau_1(k)-\tau_2(k)|\le C_\kappa\delta |k|e^{C_\kappa(1+|k|)}\qquad(k\in\mathbb C).$$
In particular this is at most $C_\kappa\delta e^{C_\kappa(1+|k|)}$ after increasing the constant; the assertion includes $k=0$.

## Statement references

[[lem-ip-planar-scattering-dbar-equation-and-parameter-bounds|The scattering-amplitude normalization.]]

[[lem-ip-calderon-rough-alessandrini-and-quotient-norm|The full and constant-quotient DN operator norms.]]

## Facts & Assumptions

**Given:** The Axiom of Choice and Countable Choice and the coefficients in the statement.

[F1] In the exterior disk, $u_j(z,k)=e^{ikz}A_j(z,k)+e^{-i\overline k\overline z}\overline{J_j(z,k)}$, where $A_j=(M_{+\mu_j}+M_{-\mu_j})/2=1+O(1/z)$ and $J_j=(M_{+\mu_j}-M_{-\mu_j})/2=\overline{\tau_j(k)}/z+O(z^{-2})$ are holomorphic. Moreover $\|u_j(\cdot,k)-1\|_{H^1(D_1)}\le C|k|e^{C(1+|k|)}$, by the uniform multiplier bounds. ([[lem-ip-planar-measurable-beltrami-cgo-solutions]], [[lem-ip-planar-conductivity-cgo-logarithmic-phases]], [[lem-ip-planar-scattering-dbar-equation-and-parameter-bounds]])

[F2] The weak DN maps are well-defined, Hermitian, kill constants, and their difference has the stated constant-quotient norm. ([[lem-ip-calderon-rough-dn-map-wellposedness]], [[lem-ip-calderon-rough-alessandrini-and-quotient-norm]])

[F3] Angular orthogonality on a circle gives $\int_0^{2\pi}e^{i\theta}L(Re^{i\theta})R\,d\theta=2\pi c_{-1}$ and $\int_0^{2\pi}e^{-i\theta}L(Re^{-i\theta})R\,d\theta=2\pi c_{-1}$ for Laurent series $L(w)=\sum_m c_mw^m$ converging uniformly on $|w|=R$. Green's second identity applies to real harmonic functions on a smooth annulus and extends to complex functions by bilinearity. ([[cor-second-green-identity-on-a-bounded-c-one-domain]])

[A1] The Axiom of Choice and Countable Choice are inherited from the analytic and weak-solution interfaces. ([[def-axiom-of-choice]], [[def-countable-choice]])

## Proof

**Given:** The data in the statement and initially $k\ne0$.

1.1 For each conductivity $\gamma_j$ on $D_1$, define its transport $\widetilde\gamma_j$ on $T(D_1)$ by $\widetilde\gamma_j(Tz)=\gamma_j(z)$, where $T(z)=(1/2,1/2)+z/4$. The image is the radius-$1/4$ disk in $(0,1)^2$, so [F2] applies there; pulling the weak solutions and energy forms back by $T$ gives the weak theory on $D_1$. In two dimensions the Dirichlet energy is invariant, and $\tfrac14\|v\|_{H^1(D_1)}\le\|v\circ T^{-1}\|_{H^1(T(D_1))}\le\|v\|_{H^1(D_1)}$, so the trace quotients and bounded DN maps transport with fixed norm-equivalence constants. The equality between the full and constant-quotient norms follows from the double-annihilation argument in [F2]. Put $f_1=[u_1(\cdot,-k)]$ and $f_2=[u_2(\cdot,k)]$, and set $U=u_2(z,k)$, $V=\overline{u_1(z,-k)}$. By the weak Alessandrini identity from [F2], $((\Lambda_{\gamma_1}-\Lambda_{\gamma_2})f_1)(f_2)=\int_{D_1}(\gamma_1-\gamma_2)\nabla u_1(z,-k)\cdot\overline{\nabla u_2(z,k)}\,dA$. Since the conductivities are real and equal to $1$ near $\partial D_1$, Green's identity on that collar identifies the complex conjugate of this pairing with $W:=\int_{\partial D_1}(U\partial_\nu V-V\partial_\nu U)\,ds$. This uses the trace of $u_1(\cdot,-k)$ in the first slot and the trace of $u_2(\cdot,k)$ in the second slot; it does not treat either solution as a solution for the other conductivity. The identity is valid for weak interior solutions because only their smooth harmonic boundary collars are integrated by parts. On every exterior annulus $1<|z|<R$, both $U$ and $V$ are harmonic. Applying the second Green identity to their real and imaginary parts shows that the Wronskian with counterclockwise orientation has the same value on every circle $|z|=R>1$. [A1, F1, F2, F3, given, algebra]

2.1 On a fixed circle $|z|=R>1$, write the holomorphic pieces as $H(z)=e^{ikz}A_2(z,k)$ for $U$ and $G(z)=e^{-ikz}J_1(z,-k)$ for $V$; the other pieces are antiholomorphic. A holomorphic–antiholomorphic cross term integrates to zero because its Wronskian density is a constant multiple of the tangential derivative of the product. For the holomorphic pair, $HG'-GH'=A_2\partial_zJ_1-J_1\partial_zA_2-2ikA_2J_1$. Its $z^{-1}$ Laurent coefficient is $-2ik\overline{\tau_1(-k)}$, since $A_2=1+O(z^{-1})$, $\partial_zA_2=O(z^{-2})$, and $J_1(z,-k)=\overline{\tau_1(-k)}z^{-1}+O(z^{-2})$. If $L(z)=\sum_{m\in\mathbb Z}c_mz^m$ is any of these exterior Laurent series, direct parametrization $z=Re^{i\theta}$ gives $\int_0^{2\pi}e^{i\theta}L(Re^{i\theta})R\,d\theta=2\pi c_{-1}$; all other powers integrate to zero by angular orthogonality. Since $\partial_\nu H=e^{i\theta}H'$, this proves that the holomorphic–holomorphic Wronskian contribution is $-4\pi ik\overline{\tau_1(-k)}$ without invoking a general residue theorem. For the antiholomorphic pair $\widetilde H=e^{-i\overline k\overline z}\overline{J_2(z,k)}$ and $\widetilde G=e^{i\overline k\overline z}\overline{A_1(z,-k)}$, the coefficient of $\overline z^{-1}$ in $\widetilde H\partial_{\bar z}\widetilde G-\widetilde G\partial_{\bar z}\widetilde H$ is $2i\overline k\tau_2(k)$. Direct parametrization, with $\overline z=Re^{-i\theta}$, gives its contribution $4\pi i\overline k\tau_2(k)$. Hence $W=4\pi i[\overline k\tau_2(k)-k\overline{\tau_1(-k)}]$. These calculations use only the exterior Laurent expansions in [F1]. [F1, step 1.1, algebra]

3.1 Apply the same calculation with the two conductivities equal to $\gamma_1$. The boundary pairing in step 1.1 is then zero, so $k\overline{\tau_1(-k)}=\overline k\tau_1(k)$. Substituting this relation in step 2.1 gives $W=4\pi i\overline k(\tau_2(k)-\tau_1(k))$. By [F2], the absolute DN pairing is at most $\delta$ times the product of the two trace-class norms modulo constants. Subtract $1$ from each solution representative to bound these norms by the $H^1$ norms of $u_j(\cdot,\pm k)-1$. The uniform bound in [F1] therefore gives $4\pi|k||\tau_2(k)-\tau_1(k)|\le C\delta |k|^2e^{C(1+|k|)}$. Divide by $4\pi|k|$ and enlarge $C$. At $k=0$, both amplitudes are zero by their definition. Finally $|k|\le e^{|k|}$ gives the second stated bound. [F1, F2, step 1.1, step 2.1, algebra] ∎

