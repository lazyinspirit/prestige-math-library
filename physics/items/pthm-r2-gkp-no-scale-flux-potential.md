---
id: pthm-r2-gkp-no-scale-flux-potential
kind: physics-theorem
title: GKP no-scale cancellation in the classical IIB flux potential
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 13
domain: physics
library: physics
deps:
- def-cmp-type-iib-o3-o7-orientifold-data
- def-cmp4-gkp-single-overall-kahler-modulus-coordinate
- post-r2-gvw-iib-flux-superpotential
- post-four-dimensional-n1-matter-coupled-supergravity
- pthm-four-dimensional-n1-fd-scalar-potential
dependency_roles:
  def-cmp-type-iib-o3-o7-orientifold-data: formulation-prerequisite
  def-cmp4-gkp-single-overall-kahler-modulus-coordinate: formulation-prerequisite
  post-r2-gvw-iib-flux-superpotential: physical-assumption
  post-four-dimensional-n1-matter-coupled-supergravity: physical-assumption
  pthm-four-dimensional-n1-fd-scalar-potential: physical-result
physical_scope: Conditional classical two-derivative four-dimensional Einstein-frame N=1 F-term calculation in the single-overall-Kähler-modulus
  Type IIB O3/O7 Calabi–Yau zero-mode truncation, with constant warp factor, zero background five-form flux, retention of the C4 zero mode and its self-dual five-form completion,
  a fixed Ricci-flat internal reference metric, and large radius, and no D-term sector. The flat-direction conclusion is on the locus where the axio-dilaton
  and complex-structure F-terms vanish. This is not a controlled vacuum, a complete ten-dimensional solution, or a post-uplift
  stabilization result.
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: Steven B. Giddings, Shamit Kachru, and Joseph Polchinski, Hierarchies from Fluxes in String Compactifications,
      arXiv:hep-th/0105097v2
    url: https://arxiv.org/pdf/hep-th/0105097v2
    locator: §2.3, equations (2.37)–(2.45), PDF pp. 13–14; Appendix A.1, equations (A.1)–(A.4), pp. 28–29.
  - title: 'Mariana Graña, Flux compactifications in string theory: a comprehensive review, arXiv:hep-th/0509003v3'
    url: https://arxiv.org/pdf/hep-th/0509003v3
    locator: §5.4, equations (5.27)–(5.28) and (5.43)–(5.47), printed pp. 40–43.
  - title: Jan Louis, Introduction to String Phenomenology, University of Hamburg preliminary lecture notes
    url: https://www.physik.uni-hamburg.de/th2/ag-louis/dokumente/lectures/ws-14-15/ws-14-15-lecture-notes.pdf
    locator: Full 89-page PDF; §§7.4.2–8.2, printed pp. 38–41, equations (8.4)–(8.12).
  - title: Jan Louis, Introduction to Supersymmetry and Supergravity
    url: https://www.physik.uni-hamburg.de/th2/ag-louis/dokumente/lectures/ws-15-16/ws-15-susy-lecture-notes.pdf
    locator: Chapter 10 opening, equations (10.1)–(10.2), printed p. 37; chiral fermion shifts and auxiliary order parameters.
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Use the single-overall-Kähler-modulus classical two-derivative Type IIB O3/O7 Calabi–Yau orientifold $N=1$ zero-mode truncation. Its internal metric is a fixed Ricci-flat reference Calabi–Yau metric, the warp factor is constant, background five-form flux is set to zero, while retaining the $C_4$ zero mode $C_{\mu\nu mn}=a_{\mu\nu}(x)\widetilde J_{mn}(y)$ along the reference Kähler form and its self-dual five-form completion; $b$ is the local scalar dual of this four-dimensional two-form mode, and the radius is in the GKP large-radius regime. Use the supplier-defined Weyl ansatz $ds^2_{10,E}=e^{-6u_E(x)}g_{4,E,\mu\nu}(x)dx^\mu dx^\nu+e^{2u_E(x)}\widetilde g_{mn}(y)dy^m dy^n$, where $u_E$ is the real four-dimensional volume field, $g_{4,E}$ is the four-dimensional Einstein metric, and $\widetilde g$ is the fixed Ricci-flat internal reference metric. The dimensionless Kähler coordinate is $\rho=b/\sqrt2+i e^{4u_E}$ with $\operatorname{Im}\rho>0$; write $u=u_E$. Let the finite index $a$ range over the retained complex-structure zero modes and let the dimensionless moduli be $\Phi^A=(\tau,z^a,\rho)$, the dimensionful chiral fields be $Z^A=M_P\Phi^A$, and $M_P>0$ with $M_P^{-2}=\kappa_4^2=8\pi G_N$. In the GKP wedge convention, $W(Z)=M_P^3 w_0(\tau,z)$, with $w_0$ proportional to $\int_X\Omega\wedge G_3$. The Kähler potential is $K(Z)=M_P^2 k_0(\Phi)$, where
$$
k_0=-\log[-i(\tau-\bar\tau)]-\log\!\left[i\int_X\Omega\wedge\bar\Omega\right]-3\log[-i(\rho-\bar\rho)].
$$
Let $K_{A\bar B}=\partial_{Z^A}\partial_{\bar Z^{\bar B}}K$ be the positive-definite Kähler metric and $K^{A\bar B}$ its inverse, and define
$$
D_{Z^A}W=\partial_{Z^A}W+\frac{K_{Z^A}}{M_P^2}W.
$$
$$
V_F=e^{K/M_P^2}\left[K^{A\bar B}D_{Z^A}W\,\overline{D_{Z^B}W}-\frac{3|W|^2}{M_P^2}\right].
$$
In the ungauged chiral F-term sector, $W$ is independent of $\rho$, $K_{Z^\rho}=-3M_P/(\rho-\bar\rho)$, and
$$
K^{Z^\rho\bar Z^{\bar\rho}}K_{Z^\rho}K_{\bar Z^{\bar\rho}}=3M_P^2.
$$
This cancels the negative term exactly and leaves
$$
V_{\mathrm{flux}}=e^{K/M_P^2}K^{I\bar J}D_{Z^I}W\,\overline{D_{Z^J}W}\geq 0,\qquad I=(\tau,z^a).
$$
For the supersymmetry interpretation adopt the following local chiral transformation rule on a constant-scalar bosonic configuration: $F^A=-e^{K/(2M_P^2)}K^{A\bar B}\overline{D_{Z^B}W}$ has mass dimension two, the chiral fermion variation is $\delta_\epsilon\chi^A=\sqrt2 F^A\epsilon$, and $\epsilon$ is a two-component complex Weyl spinor in a local Lorentz frame. Unbroken supersymmetry requires a nonzero spinor for which all fermion variations vanish; hence a nonzero $F^A$ excludes it. The sign of $F$ follows the declared auxiliary convention and does not affect this criterion. On any locus where $D_{Z^\tau}W=D_{Z^{z^a}}W=0$, $V_{\mathrm{flux}}=0$ for every $\rho$, while $D_{Z^\rho}W=-3W/[M_P(\rho-\bar\rho)]$ can be nonzero. Thus this flux F-term does not fix the overall modulus on that locus. At any point there with $W\ne0$, its constant-scalar bosonic configuration fails the stated necessary condition for unbroken supersymmetry; this is a conditional statement, not an assertion that such a flux realization exists. The statement excludes $\alpha'$, loop, nonperturbative, D-term, uplift, and off-shell warping corrections; it does not assert a flux choice, global solution, or controlled vacuum.

## Statement references

[Giddings, Kachru, and Polchinski, §2.3, equations (2.37)–(2.45)](https://arxiv.org/pdf/hep-th/0105097v2)

[Graña, §5.4, equations (5.27)–(5.28) and (5.43)–(5.47)](https://arxiv.org/pdf/hep-th/0509003v3)

[Louis, §§7.4.2–8.2](https://www.physik.uni-hamburg.de/th2/ag-louis/dokumente/lectures/ws-14-15/ws-14-15-lecture-notes.pdf)

[Louis, Chapter 10, equations (10.1)–(10.2)](https://www.physik.uni-hamburg.de/th2/ag-louis/dokumente/lectures/ws-15-16/ws-15-susy-lecture-notes.pdf)

## Facts & Assumptions

**Given:** Work on the regular field patch with $\tau,\rho$ in the upper half-plane, $i\int_X\Omega\wedge\bar\Omega>0$, and a positive-definite Kähler metric. For $q=x+iy$ use Wirtinger derivatives $\partial_q=(\partial_x-i\partial_y)/2$ and $\partial_{\bar q}=(\partial_x+i\partial_y)/2$. Use the single-modulus coordinate, four-dimensional Einstein frame, and flux truncation in the Statement.

[F1] [[def-cmp-type-iib-o3-o7-orientifold-data]], Definition, fixes the smooth Calabi–Yau cover, complex orientation, holomorphic isometric involution, O3/O7 projection and separation of localized source data. Its current batch-77 manifest statement is nonempty. Use that complex orientation for the integrals here: in a holomorphic chart $z^j=x^j+i y^j$ with $\Omega=f\,dz^1\wedge dz^2\wedge dz^3$, one has $i\Omega\wedge\bar\Omega=8|f|^2dx^1\wedge dy^1\wedge dx^2\wedge dy^2\wedge dx^3\wedge dy^3>0$. Thus the complex-structure logarithm uses $+i$ with this orientation; GKP (2.38) writes $-i$ with its own orientation convention (see its footnote 7).

[F2] [[def-cmp4-gkp-single-overall-kahler-modulus-coordinate]], Definition in batch 82 at dependency level 12, gives $\rho=b/\sqrt2+i e^{4u_E}$, $\mathcal K=-3\log[-i(\rho-\bar\rho)]$, and $K=M_P^2\mathcal K$ in precisely the fixed Ricci-flat, constant-warp, one-modulus ansatz used here. Its proof obtains the local axion by dualizing the retained two-form on a sufficiently small external coordinate neighborhood; it does not specify a global period or prove a flux vacuum. Only this conditional coordinate and normalization interface is used below.

[F3] [[post-r2-gvw-iib-flux-superpotential]] adopts $W_{\mathrm{flux}}\propto\int_X\Omega\wedge G_3$ with $G_3=F_3-\tau H_3$ in the GKP equation (2.40) wedge order. It states that $W$ is independent of the Kähler modulus. This is a physical postulate, not a result derived from flux quantization.

[F4] [[post-four-dimensional-n1-matter-coupled-supergravity|Four-Dimensional $N=1$ Matter-Coupled Supergravity]] adopts the positive scalar metric, Kähler-covariant derivative and old-minimal auxiliary density. In the ungauged sector used here no moment-map or FI data enter. Differentiating its chiral auxiliary density with respect to $\bar F^{\bar B}$ gives $K_{A\bar B}F^A+e^{K/(2M_P^2)}\overline{D_{Z^B}W}=0$.

[F5] [[pthm-four-dimensional-n1-fd-scalar-potential|Four-Dimensional $N=1$ F- and D-Term Scalar Potential]], Statement and proof steps 1.1, 2.1 and 3.1, eliminates the chiral and gravity auxiliaries and gives the displayed dimensionful F-term potential. Positivity makes the chiral metric invertible; its stationary solution is $F^A=-e^{K/(2M_P^2)}K^{A\bar B}\overline{D_{Z^B}W}$. The result is conditional on the adopted auxiliary polynomial and does not establish a ten-dimensional realization.

[A1] In the displayed flux-only truncation there is no gauging, vector D-term, uplift contribution, or additional potential term; $V_{\mathrm{flux}}$ is the F-term potential $V_F$ in [F5].

[A2] The no-stabilization conclusion is only asserted along a locus where $D_{Z^\tau}W=D_{Z^{z^a}}W=0$. Away from that locus the remaining F-term can depend on $\rho$ through $e^{K/M_P^2}$.

[A3] Adopt the separable tree-level Kähler potential $k_0=-\log[-i(\tau-\bar\tau)]-\log[i\int_X\Omega\wedge\bar\Omega]-3\log[-i(\rho-\bar\rho)]$ displayed in the Statement. Its $\rho$-dependence is solely the final summand, so there are no mixed $\rho/I$ metric entries. This is an EFT premise, not a consequence of the no-scale cancellation.

[A4] Adopt the constant-scalar chiral fermion variation and necessary condition for unbroken supersymmetry explicitly stated above, as in Louis, Introduction to Supersymmetry and Supergravity, §10 opening, equations (10.1)–(10.2), printed p. 37. This is an additional physical transformation premise, not a consequence of the scalar-potential theorem. Only its necessary condition is used; no sufficient condition for a full supersymmetric spacetime is asserted.

## Proof

**Proof technique:** direct differentiation and substitution into the adopted N equals 1 F-term formula.

**Given:** [F1]–[F5] and [A1]–[A4].

1.1 Put $x=\rho-\bar\rho=2i\,\operatorname{Im}\rho$, which is nonzero because $\operatorname{Im}\rho>0$. The $\rho$-dependent term of $K$ is $-3M_P^2\log[-i(\rho-\bar\rho)]$. Since $Z^\rho=M_P\rho$, Wirtinger differentiation gives $K_{Z^\rho}=M_P^{-1}\partial_\rho K=-3M_P/x$. This is conditional on the exact GKP coordinate supplied in [F2]. [given, F1, F2, algebra]

2.1 Differentiate once more:
$$
K_{Z^\rho\bar Z^{\bar\rho}}=M_P^{-2}\partial_\rho\partial_{\bar\rho}K=-3/x^2=3/(4(\operatorname{Im}\rho)^2)>0.
$$
Its inverse is $K^{Z^\rho\bar Z^{\bar\rho}}=-x^2/3$, so $K^{Z^\rho\bar Z^{\bar\rho}}K_{Z^\rho}K_{\bar Z^{\bar\rho}}=3M_P^2$. [given, F2, step 1.1, algebra]

3.1 By [F3], $W$ is independent of $\rho$; hence $\partial_{Z^\rho}W=0$ and $D_{Z^\rho}W=K_{Z^\rho}W/M_P^2=-3W/(M_P x)$. Therefore $K^{Z^\rho\bar Z^{\bar\rho}}|D_{Z^\rho}W|^2=3|W|^2/M_P^2$ by step 2.1. [given, F3, F4, step 1.1, step 2.1, algebra]

4.1 The Kähler potential $k_0$ is a sum of a $\rho$ term and terms depending only on $\tau,z$, so $K_{Z^\rho\bar Z^{\bar I}}=0$ and the inverse metric is block diagonal. Substituting step 3.1 into [F5], the positive $\rho$ contribution cancels exactly with $-3|W|^2/M_P^2$. The remaining expression is $V_{\mathrm{flux}}=e^{K/M_P^2}K^{I\bar J}D_{Z^I}W\,\overline{D_{Z^J}W}$, $I=(\tau,z^a)$. [given, F5, A1, A3, step 3.1, algebra]

5.1 Positive definiteness of the $I$-block makes this quadratic form nonnegative. If all $D_{Z^I}W$ vanish, then $V_{\mathrm{flux}}=0$ for every $\rho$, so this locus does not fix the overall modulus in the stated truncation. If $W$ is nonzero there, step 3.1 gives $D_{Z^\rho}W\ne0$. By block diagonality and [F5], $F^\rho=-e^{K/(2M_P^2)}K^{Z^\rho\bar Z^{\bar\rho}}\overline{D_{Z^\rho}W}\ne0$. The linear map $\epsilon\mapsto\sqrt2 F^\rho\epsilon$ on the two-component spinor fibre then has zero kernel, so [A4] excludes unbroken supersymmetry for the constant-scalar configuration. If $W=0$, this auxiliary also vanishes and this obstruction is absent; no sufficient supersymmetry assertion follows. No claim is made that a flux choice or globally consistent solution realizing this locus exists. [given, F5, A2, A4, step 3.1, step 4.1, algebra] ∎

## Remarks

These are conditional predictions of the stated local effective model. Native readiness and historical escalation records are not proof premises or acceptance stamps. In particular, the general gauged moment-map interface remains an owner issue in batch 64; this calculation sets the gauging and D sector to zero and uses only its explicitly displayed chiral and gravity auxiliary polynomials.
