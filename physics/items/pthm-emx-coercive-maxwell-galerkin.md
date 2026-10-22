---
id: pthm-emx-coercive-maxwell-galerkin
kind: physics-theorem
title: Coercive shifted Maxwell Galerkin approximation
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 2
domain: physics
library: physics
proof_strategy: direct
deps:
  - def-countable-choice
  - def-emx-finite-energy-boundary-model
  - def-emx-whitney-semidescretization
  - def-na-hcurl-space
  - def-na-lowest-order-whitney-de-rham-spaces
  - def-na-zero-tangential-hcurl
  - lem-l-two-with-the-integral-pairing-is-a-hilbert-space
  - thm-lax-milgram
  - thm-na-uniformly-bounded-commuting-cochain-projection
dependency_roles:
  def-countable-choice: mathematical-premise
  def-emx-finite-energy-boundary-model: formulation-prerequisite
  def-emx-whitney-semidescretization: formulation-prerequisite
  def-na-hcurl-space: mathematical-premise
  def-na-lowest-order-whitney-de-rham-spaces: mathematical-premise
  def-na-zero-tangential-hcurl: mathematical-premise
  lem-l-two-with-the-integral-pairing-is-a-hilbert-space: mathematical-premise
  thm-lax-milgram: mathematical-premise
  thm-na-uniformly-bounded-commuting-cochain-projection: mathematical-premise
aliases: []
verification:
  precheck: pending
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: A conditional static-coefficient, lossless positive-shift weak Maxwell model on a bounded Lipschitz polyhedron with closure-defined PEC electric space and a shape-regular refining family of conforming lowest-order edge spaces. The theorem gives well-posedness and best-approximation convergence in a dimensionally scaled graph norm. It gives no real-frequency uniqueness, no error rate without further regularity, no assertion that any actual material satisfies the model, and no empirical claim.
sources:
  references:
    - title: "Long Chen, Finite Element Methods for Maxwell Equations, complete University of California, Irvine lecture notes, updated May 17 2024"
      url: https://www.math.uci.edu/~chenlong/226/FEMMaxwell.pdf
      locator: "Entire 10-page PDF inspected. Section 2, PDF pp. 6-8: the PEC H0(curl) variational formulation, discrete Poincare argument, and a different saddle-point error estimate; Section 3, PDF pp. 8-10: commuting finite-element subcomplexes."
    - title: "Ralf Hiptmair, Finite elements in computational electromagnetism, Acta Numerica 11 (2002), pp. 237-339, complete author-hosted PDF"
      url: https://people.math.ethz.ch/~hiptmair/Courses/CEM/HIP02.pdf
      locator: "Entire 103-page PDF inspected. Sections 5.1-5.2, printed pp. 307-310: real-frequency Maxwell resonance, failure of coercivity for the indefinite form, and discrete inf-sup error control. The present positive-shift form has a separate local Lax-Milgram proof."
    - title: "Douglas N. Arnold, Richard S. Falk, and Ragnar Winther, Finite element exterior calculus: from Hodge theory to numerical stability, Bulletin of the American Mathematical Society 47 (2010), pp. 281-354"
      url: https://sites.math.rutgers.edu/~falk/papers/bulletin-orig.pdf
      locator: "Entire 70-page PDF inspected. Sections 3.3-3.5 and 5.4-5.5, PDF pp. 23-27 and 54-57: bounded commuting cochain projections, approximation, and the canonical moment-domain limitation."
---

## Statement

Assume Countable Choice. Let Omega be a nonempty bounded Lipschitz polyhedron in R3 in one SI laboratory frame. Use the real space V:=H_0(curl;Omega), where H_0(curl;Omega) is the graph closure of compactly supported smooth vector fields as defined by the mathematical supplier. Let epsilon,mu:Omega -> Sym_3(R) be static measurable essentially bounded fields with units F m^-1 and H m^-1 and constants 0<a_epsilon<=b_epsilon<infinity and 0<a_mu<=b_mu<infinity such that, almost everywhere,

$$a_\varepsilon |v|^2\le v\cdot\varepsilon(x)v\le b_\varepsilon |v|^2,\qquad a_\mu |v|^2\le v\cdot\mu(x)v\le b_\mu |v|^2\quad(v\in\mathbb R^3).$$

Take the lossless branch sigma=0 of the semidiscrete Maxwell model. Fix a reference length ell_0>0 in metres, and equip V with the equivalent, dimensionally homogeneous graph norm

$$\|v\|_{V,\ell_0}^2:=\|v\|_{L^2(\Omega)}^2+\ell_0^2\|\operatorname{curl}v\|_{L^2(\Omega)}^2.$$

Let s>0 be a real frequency-shift parameter in s^-1, let F:V -> R be a bounded real linear functional scaled so that F(v) has units W s^-1 when v has electric-field units V m^-1, and define

$$a_s(u,v):=\int_\Omega\left(\mu^{-1}\operatorname{curl}u\cdot\operatorname{curl}v+s^2\varepsilon u\cdot v\right)\,dx.$$

Let {T_n}_{n>=1} be a shape-regular family of matching affine tetrahedral meshes of closure(Omega), with h_n:=max_{K in T_n} diam(K) tending to zero. For each mesh set V_n:=N_{h_n}^1 intersect H_0(curl;Omega), using the PEC Whitney edge space of [[def-emx-whitney-semidescretization]]. Let

$$\alpha:=\min\{(b_\mu\ell_0^2)^{-1},\,s^2a_\varepsilon\},\qquad M:=\max\{(a_\mu\ell_0^2)^{-1},\,s^2b_\varepsilon\}.$$

Then there is a unique u in V satisfying a_s(u,v)=F(v) for every v in V. For each n there is a unique Galerkin solution u_n in V_n satisfying a_s(u_n,v_n)=F(v_n) for every v_n in V_n. For every n,

$$\|u-u_n\|_{V,\ell_0}\le \frac{M}{\alpha}\inf_{v_n\in V_n}\|u-v_n\|_{V,\ell_0},$$

and u_n converges to u in the V,ell_0 norm as n tends to infinity. Both alpha and M have units (H m)^-1, so their ratio is dimensionless.

## Statement references

[[def-countable-choice]]

[[def-em-si-conventions]]

[[def-emx-finite-energy-boundary-model]]

[[def-emx-whitney-semidescretization]]

[[def-na-hcurl-space]]

[[def-na-lowest-order-whitney-de-rham-spaces]]

[[def-na-zero-tangential-hcurl]]

[[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]]

[[thm-lax-milgram]]

[[thm-na-uniformly-bounded-commuting-cochain-projection]]

## Facts & Assumptions

**Given:** The coefficient, domain, SI, and closure-defined PEC conventions in the Statement; Countable Choice; and the stated mesh family.

[F1] [[def-emx-finite-energy-boundary-model]]: epsilon and mu are real symmetric static multiplication fields, essentially bounded, with almost-everywhere uniform positive lower and upper bounds. Their SI units are F m^-1 and H m^-1.

[F2] [[def-na-hcurl-space]] and [[def-na-zero-tangential-hcurl]]: H(curl;Omega) is the real L^2 graph space of the distributional curl with norm squared ||v||_2^2+||curl v||_2^2; H_0(curl;Omega) is exactly the closure of C_c^\infty(Omega;R3) in that graph norm. The graph closure is not replaced by an unproved trace-kernel identification.

[F3] [[thm-lax-milgram]]: on a real Hilbert space, a bounded coercive real bilinear form and a bounded real linear functional have a unique weak solution.

[F4] [[thm-na-uniformly-bounded-commuting-cochain-projection]]: for this shape-regular refining tetrahedral family there are boundary-corrected projections pi_{h,0}^1:H_0(curl;Omega)->N_h^1 intersect H_0(curl;Omega), identity on each target space and strongly convergent in the graph norm on H_0(curl;Omega). The theorem does not identify these projections with raw edge moments.

[F6] [[def-emx-whitney-semidescretization]] and [[def-na-lowest-order-whitney-de-rham-spaces]]: for each mesh in the family the conforming PEC trial space is exactly V_n=N_{h_n}^1 intersect H_0(curl;Omega); the underlying lowest-order space on a finite mesh is finite-dimensional.

[A1] Countable Choice is the exact choice strength of the imported real L^2 and weak-derivative interfaces; the local Hilbert-space and finite-element arguments add no stronger choice axiom. [[def-countable-choice]] [[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]]

## Proof

1.1 The distributional graph of curl is closed: if v_j->v and curl v_j->w in L^2, then for every compactly supported smooth test field phi, integral(v dot curl phi)=lim_j integral(v_j dot curl phi)=lim_j integral(curl v_j dot phi)=integral(w dot phi); hence curl v=w distributionally. L^2 is complete under [A1] and [[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]], so H(curl;Omega) is Hilbert, and its graph-closed subspace H_0(curl;Omega) is Hilbert. Since ell_0 is fixed and positive, ||.||_{V,ell_0} is equivalent to the defining graph norm and gives the same complete space. [F2, A1, algebra]

1.2 From [F1], the eigenvalues of mu^-1 lie between b_mu^-1 and a_mu^-1. Therefore a_s(v,v)>=b_mu^-1||curl v||_2^2+s^2a_epsilon||v||_2^2>=alpha||v||_{V,ell_0}^2. Cauchy-Schwarz and the upper coefficient bounds give |a_s(u,v)|<=a_mu^-1||curl u||_2||curl v||_2+s^2b_epsilon||u||_2||v||_2<=M||u||_{V,ell_0}||v||_{V,ell_0}. Since s has units s^-1, ell_0 has units m, and epsilon and mu have units F m^-1 and H m^-1 by [F1], both constants have units (H m)^-1; alpha>0 and M<infinity by the stated strict bounds. [given, F1, algebra]

2.1 Apply [F3] to the real Hilbert space and form of steps 1.1-1.2 to obtain the unique u. By [F6], each V_n is finite-dimensional and closed in V; restricting the same bounded coercive form and F to V_n gives the unique Galerkin solution u_n, including the zero-space case. If F=0, the zero vector is the solution on V and on every V_n by uniqueness. [F3, F6, step 1.1, step 1.2, given]

3.1 Put e_n:=u-u_n. For any w_n in V_n, Galerkin orthogonality gives a_s(e_n,u_n-w_n)=0, so a_s(e_n,e_n)=a_s(e_n,u-w_n). Coercivity and boundedness from step 1.2 imply alpha||e_n||_{V,ell_0}^2<=a_s(e_n,e_n)<=M||e_n||_{V,ell_0}||u-w_n||_{V,ell_0}. If e_n=0 the asserted estimate is immediate; otherwise divide by alpha||e_n|| and take the infimum over w_n. [step 1.2, step 2.1, algebra]

4.1 By [F4], pi_{h_n,0}^1 u belongs to V_n and converges to u in the unscaled H(curl) graph norm; equivalence of the fixed ell_0-scaled norm gives ||u-pi_{h_n,0}^1u||_{V,ell_0}->0. Thus the best-approximation infimum in step 3.1 tends to zero, and the error estimate proves u_n->u in V,ell_0. No interpolation by pointwise edge restrictions is used. [F4, step 3.1, algebra] ∎
