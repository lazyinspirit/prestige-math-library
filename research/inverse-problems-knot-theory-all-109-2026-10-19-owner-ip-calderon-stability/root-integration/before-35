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

[F3] A circle integral of a holomorphic Laurent expansion picks its $z^{-1}$ coefficient. Green's second identity applies to harmonic functions on a smooth annulus. ([[cor-residue-theorem-circle]], [[cor-second-green-identity-on-a-bounded-c-one-domain]])

[A1] The Axiom of Choice and Countable Choice are inherited from the analytic and weak-solution interfaces. ([[def-axiom-of-choice]], [[def-countable-choice]])

## Proof

**Given:** The data in the statement and initially $k\ne0$.

1.1 The disk weak-solution interfaces follow from [F2] by the fixed map $T(z)=(1/2,1/2)+z/4$, whose image lies in $(0,1)^2$. In two dimensions this map preserves the Dirichlet energy, while its $H^1$ norm satisfies $\tfrac14\|v\|_{H^1(D_1)}\le\|v\circ T^{-1}\|_{H^1(T(D_1))}\le\|v\|_{H^1(D_1)}$. Thus weak solutions, constant quotients and bounded energy DN maps transport with fixed norm-equivalence constants. The equality between the full and constant-quotient norms also follows directly from the double-annihilation argument in [F2]. Let $U=u_2(z,k)$ and $V=\overline{u_1(z,-k)}$. Both solve their respective conductivity equations weakly, and both are smooth and harmonic near and outside $\partial D_1$, because the coefficients equal one there. The boundary Wronskian $W=\int_{\partial D_1}(U\partial_\nu V-V\partial_\nu U)\,ds$ therefore equals the bilinear DN pairing $\int_{\partial D_1}V(\Lambda_{\gamma_1}-\Lambda_{\gamma_2})U\,ds$, using symmetry and the weak energy definition in [F2]. This identity also follows without assuming interior smoothness: subtract the weak energy forms, whose restrictions to a harmonic boundary collar are the classical fluxes. On every exterior circle $|z|=R>1$, the Wronskian has this same value by [F3]. [A1, F1, F2, F3, given, algebra]

2.1 Write the exterior holomorphic pieces of $U$ as $e^{ikz}A_2(z,k)$ and of $V$ as $e^{-ikz}J_1(z,-k)$; the other two pieces are antiholomorphic. Cross Wronskians between a holomorphic and an antiholomorphic piece integrate to zero: their integrand is $i$ or $-i$ times the tangential derivative of their product. The holomorphic–holomorphic contribution is $2\pi$ times the $z^{-1}$ coefficient of $A_2\partial_zJ_1-J_1\partial_zA_2-2ikA_2J_1$, hence equals $-4\pi ik\overline{\tau_1(-k)}$. To check the circle factor, $\partial_\nu H=(z/R)H'$ for a holomorphic function and $dz=iz\,ds/R$, so its Wronskian integral is $(1/i)$ times the contour integral. The antiholomorphic–antiholomorphic contribution is similarly $4\pi i\overline k\tau_2(k)$; its contour runs clockwise in $\overline z$. Thus $W=4\pi i[\overline k\tau_2(k)-k\overline{\tau_1(-k)}]$. This calculation uses only the Laurent coefficients in [F1]; all derivative product terms start at order $z^{-2}$ and do not contribute. [F1, F3, step 1.1, algebra]

3.1 Apply the same calculation with the two conductivities equal to $\gamma_1$. The boundary pairing in step 1.1 is then zero, so $k\overline{\tau_1(-k)}=\overline k\tau_1(k)$. Substituting this relation in step 2.1 gives $W=4\pi i\overline k(\tau_2(k)-\tau_1(k))$. By [F2], the absolute DN pairing is at most $\delta$ times the product of the two trace-class norms modulo constants. Subtract $1$ from each solution representative to bound these norms by the $H^1$ norms of $u_j(\cdot,\pm k)-1$. The uniform bound in [F1] therefore gives $4\pi|k||\tau_2(k)-\tau_1(k)|\le C\delta |k|^2e^{C(1+|k|)}$. Divide by $4\pi|k|$ and enlarge $C$. At $k=0$, both amplitudes are zero by their definition. Finally $|k|\le e^{|k|}$ gives the second stated bound. [F1, F2, step 1.1, step 2.1, algebra] ∎
