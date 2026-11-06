---
id: post-pure-spinor-superstring-model
kind: postulate
title: "Pure Spinor Superstring Model"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
category: string-theory
library: physics
dependency_level: 2
domain: physics
physical_scope: "Adopted minimal flat ten-dimensional Type II pure-spinor chiral worldsheet system and its formal BRST charge. Nonminimal quartet variables, amplitude measure, global path integral, and curved backgrounds are excluded."
deps:
  - def-st-string-tension-alpha-prime
dependency_roles:
  def-st-string-tension-alpha-prime: formulation-prerequisite
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Nathan Berkovits and Carlos R. Mafra, Pure spinor formulation of the superstring and its applications, arXiv:2210.10510v2"
      url: "https://arxiv.org/pdf/2210.10510v2"
      locator: "§2.2, printed pp. 6–9, equations (4)–(9): action with its minimal restriction, constrained ghosts, d and Π currents and OPEs; nonminimal quartet omitted here."
    - title: "Nathan Berkovits, ICTP Lectures on Covariant Quantization of the Superstring, arXiv:hep-th/0209059v1"
      url: "https://arxiv.org/pdf/hep-th/0209059v1"
      locator: "§§3.1–3.2, printed pp. 17–22, especially ghost-number current (3.16): Green–Schwarz constraints, pure-spinor variables and flat-space ghost grading."
verification:
  precheck: pass
  sources_checked:
    date: 2026-11-05
    scope: Recorded source, statement and proof-status review for this postulate in conformal-field-theory-string-theory-step3-fresh-2026-11-04, within the native reports' stated reading limits. This records no proof or new empirical validation.
    by: gpt-6.1-sol; native-step5-substantive-review; delegated by /root under owner authorization
---

## Postulate

Adopt the flat ten-dimensional pure-spinor worldsheet model with $x^m$, $\theta^\alpha$, $p_\alpha$, a complex bosonic chiral spinor $\lambda^\alpha$ satisfying $\lambda\gamma^m\lambda=0$, and conjugate $w_\alpha$ modulo the gauge shift $\delta w_\alpha=\Omega_m(\gamma^m\lambda)_\alpha$ for arbitrary local $\Omega_m$. Define $d_\alpha$ as the Green–Schwarz–Siegel supersymmetric constraint current and $Q=\oint \frac{dz}{2\pi i}\,\lambda^\alpha d_\alpha$ as the holomorphic BRST charge; a closed Type II model has independent left/right copies with the IIA/IIB chirality choices. The minimal model is distinct from the nonminimal quartet extension used to regularize some amplitude prescriptions.

Use the conventional target-length unit $\ell=\sqrt{\alpha'/2}$, so that the numerical value of $\alpha'$ in the following local operator formulas is $2$. This fixes units, not a physical restriction on string tension; no comparison of inequivalent normalizations is implied. In particular the displayed $d d$ coefficient is the normalized one, not a claim that it remains unchanged on restoring arbitrary target-length units.

Work on a dimensionless Euclidean worldsheet in the chiral operator-algebra convention, with target indices $m=0,\ldots,9$, ten-dimensional Minkowski continuation fixed by the source, and chiral spinor indices $\alpha=1,\ldots,16$. The coordinates $x^m$ have length units and $\alpha'$ has units of length squared. The spacetime fields are $x^m$, Grassmann-odd $\theta^\alpha$, and their first-order conjugates $p_\alpha$. The minimal bosonic ghost $\lambda^\alpha$ is a complex chiral $\operatorname{Spin}(10)$ spinor satisfying the pure-spinor constraint $\lambda\gamma^m\lambda=0$; the smooth locus away from $\lambda=0$ has complex dimension eleven. The conjugate $w_\alpha$ is defined modulo $\delta w_\alpha=\Omega_m(\gamma^m\lambda)_\alpha$ for arbitrary local $\Omega_m$. The source conformal weights are $h(x)=h(\theta)=h(\lambda)=0$ and $h(p)=h(w)=1$. In the source normalization, the matter OPEs are $x^m(z)x^n(w)\sim-(\alpha'/2)\eta^{mn}\log|z-w|^2$ and $p_\alpha(z)\theta^\beta(w)\sim\delta_\alpha^\beta/(z-w)$. Define $\Pi^m=\partial x^m+\frac12\theta\gamma^m\partial\theta$ and
$$d_\alpha=p_\alpha-\frac1{\alpha'}(\gamma_m\theta)_\alpha\partial x^m-\frac1{4\alpha'}(\gamma_m\theta)_\alpha(\theta\gamma^m\partial\theta),\qquad d_\alpha(z)d_\beta(w)\sim-\frac{(\gamma^m)_{\alpha\beta}\Pi_m(w)}{z-w}.$$
Adopt $Q=\oint dz/(2\pi i)\,\lambda^\alpha d_\alpha$. A closed Type II model has independent left and right copies; IIA uses opposite target spinor chiralities and IIB equal chiralities. The minimal system is not the nonminimal quartet extension.

The local operator algebra is the tensor product of the matter and constrained ghost systems. In independent local coordinates on the smooth pure-spinor locus the ghost system is a first-order coordinate-momentum system: coordinate-coordinate OPEs are regular. In particular $\lambda^\alpha(z)\lambda^\beta(w)$ and $\lambda^\alpha(z)d_\beta(w)$ have no negative powers of $z-w$. Here $A(z)B(w)\sim\sum_{k\ge1}C_k(w)(z-w)^{-k}$ records only these negative powers, and “regular” means this sum is empty. Contour integrals mean formal residues. For mutually local homogeneous currents $A,B$ of parities $|A|,|B|\in\{0,1\}$, use the charge convention $A_0=\operatorname{Res}_z A(z)$ and $[A_0,B_0]_{\mathrm{gr}}=\operatorname{Res}_w\operatorname{Res}_{z=w}A(z)B(w)$, where $[U,V]_{\mathrm{gr}}=UV-(-1)^{|U||V|}VU$. The current $\lambda^\alpha d_\alpha$ is odd. These are local operator-algebra conventions; no global ghost measure is supplied.


The flat minimal action, in the review's matter/first-order normalization (its equation (4) with the nonminimal quartet omitted), is
$$S_{\mathrm{min}}=\frac1{2\pi}\int d^2z\,[\tfrac12\partial x^m\bar\partial x_m+p_\alpha\bar\partial\theta^\alpha-w_\alpha\bar\partial\lambda^\alpha].$$
For a closed Type II model add $\widetilde p_{\bar\alpha}\partial\widetilde\theta^{\bar\alpha}-\widetilde w_{\bar\alpha}\partial\widetilde\lambda^{\bar\alpha}$ inside this same integrand, with a single shared $x$ kinetic term. The ghost term is understood on local coordinates of the pure-spinor constraint modulo the stated $w$ gauge transformations, rather than as sixteen independent unconstrained pairs. The zero-mode singularity and global ghost measure are not specified by this local action.

The minimal ghost-number symmetry is $\lambda\mapsto e^\epsilon\lambda$, $w\mapsto e^{-\epsilon}w$, with $x,\theta,p$ neutral. Thus $\operatorname{gh}(\lambda)=1$, $\operatorname{gh}(w)=-1$, $\operatorname{gh}(x)=\operatorname{gh}(\theta)=\operatorname{gh}(p)=\operatorname{gh}(d)=\operatorname{gh}(\Pi)=0$, and $\operatorname{gh}(Q)=1$. The right-moving copy has the same assignments and its own ghost number; no nonminimal variables or measure prescription is adopted. This is the minimal part of the source action, not the nonminimal action or an amplitude prescription.

## Postulate references

[[def-st-string-tension-alpha-prime]]

[Nathan Berkovits and Carlos R. Mafra, Pure spinor formulation of the superstring and its applications, arXiv:2210.10510v2](https://arxiv.org/pdf/2210.10510v2)

[Nathan Berkovits, ICTP Lectures on Covariant Quantization of the Superstring, arXiv:hep-th/0209059v1](https://arxiv.org/pdf/hep-th/0209059v1)
