---
id: ex-pullback-of-a-measurable-ellipse-field
kind: example
title: "Pullback of a measurable ellipse field under biholomorphic maps"
status: draft
origin: pipeline
deps:
  - def-countable-choice
  - def-complex-domain
  - def-biholomorphic-map
  - def-borel-and-lebesgue-measurable-function-on-rn
  - def-measurable-beltrami-coefficient
  - def-riemann-sphere-holomorphic-charts
  - def-weak-solution-beltrami-equation
  - def-wirtinger-derivatives
  - lem-classical-derivatives-are-weak-derivatives
dependency_level: 2
proof_strategy: direct
axiom_use: >-
  Countable Choice is inherited through the measurable-function,
  coefficient, and weak-solution interfaces used here; the explicit
  calculations make no selections. No full Axiom of Choice is used.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Christopher J. Bishop, Quasiconformal Mappings (Stony Brook Math 627 course notes, 164 pp.)"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math627.S18/QC.pdf"
      locator: "Ch. 2 §1, printed pp. 50–51: complex dilatation of real-linear maps, the half-angle direction of the major axis, and its transformation under conformal precomposition; the complete passage was read."
    - title: "Mikhail Lyubich, Conformal Geometry and Dynamics of Quadratic Polynomials, vol. I (book draft, Stony Brook)"
      url: "https://www.math.stonybrook.edu/~mlyubich/book.pdf"
      locator: "Ch. 2 §14.6, printed p. 198: measurable Beltrami differentials as conformal-structure data and their chart expressions on a quasiconformal surface; the complete section was read."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
aliases: []
---

## Example

Assume Countable Choice. Let $\Omega,\Omega'\subseteq\mathbb C$ be complex domains, let $\psi:\Omega'\to\Omega$ be biholomorphic, and let $\mu$ be a Beltrami coefficient on $\Omega$ ([[def-countable-choice]], [[def-complex-domain]], [[def-biholomorphic-map]], [[def-measurable-beltrami-coefficient]]).

(a) **Linear pullback and ellipse direction.** For $\Omega=\Omega'=\mathbb C$ and $\psi(\zeta)=\lambda\zeta$ with $\lambda\ne0$,
$$(\psi^*\mu)(\zeta)=\mu(\lambda\zeta)\frac{\overline\lambda}{\lambda}.$$
If $\mu\equiv\nu$ is constant, then the pulled-back coefficient is $\nu\overline\lambda/\lambda$ and $|\nu|$ is unchanged. For $\nu\ne0$, its complex phase changes by $-2\arg\lambda$, so its ellipse's unoriented major-axis line changes by $-\arg\lambda\pmod\pi$, because that direction is $\frac12\arg\nu$; for $\nu=0$ the field remains circular and has no distinguished direction. For a rotation $\rho_\theta(\zeta)=e^{i\theta}\zeta$, the coefficient class satisfies $\rho_\theta^*\mu=\mu$ exactly when
$$\mu(e^{i\theta}\zeta)=e^{2i\theta}\mu(\zeta)\quad\text{for almost every }\zeta.$$
The co-rotating model $\mu(\zeta)=c\,\zeta/\overline\zeta$ for $\zeta\ne0$, with $\mu(0)=0$ and $|c|<1$, satisfies this condition for every $\theta$.

(b) **Inversion and the sphere charts.** For a sphere coefficient with finite-chart component $\mu_0$, the biholomorphism $j(w)=1/w$ on the overlap $\mathbb C^\times$ of the finite and infinity charts ([[def-riemann-sphere-holomorphic-charts]]) gives
$$\mu_\infty(w)=\mu_0(1/w)\frac{w^2}{\overline w^{\,2}},\qquad w\ne0.$$
This is the transition law for the Beltrami coefficient between the two standard sphere charts in [[def-measurable-beltrami-coefficient]](d); its value at $w=0$ is immaterial to the almost-everywhere class.

(c) **Weak solutions pull back.** If $f$ is a weak solution of $f_{\bar z}=\mu f_z$ on $\Omega$ ([[def-weak-solution-beltrami-equation]]), then $f\circ\psi$ is a weak solution for $\psi^*\mu$ on $\Omega'$. For the rotation and constant-coefficient case, the affine map $A(z)=z+\nu\overline z$ gives an explicit check: $A$ solves the coefficient-$\nu$ equation, and $A(e^{i\theta}\zeta)=e^{i\theta}\zeta+\nu e^{-i\theta}\overline\zeta$ has coefficient $\nu e^{-2i\theta}$.

(d) **Dilatation is preserved.** For every such biholomorphism, $\|\psi^*\mu\|_\infty=\|\mu\|_\infty$ and hence $K(\psi^*\mu)=K(\mu)$; pointwise, the pulled-back ellipse has the same eccentricity as the ellipse at its image point.

## Facts & Assumptions

**Given:** Countable Choice; complex domains $\Omega,\Omega'$; a biholomorphism $\psi:\Omega'\to\Omega$; and a Beltrami coefficient $\mu$ on $\Omega$.

[F1] The coefficient pullback is $(\psi^*\mu)(\zeta)=\mu(\psi(\zeta))\overline{\psi'(\zeta)}/\psi'(\zeta)$ ([[def-measurable-beltrami-coefficient]]).

[F2] For $\mu\ne0$, its ellipse's major-axis direction is $\tfrac12\arg\mu\pmod\pi$; when $\mu=0$ the ellipse is a circle with no distinguished direction ([[def-measurable-beltrami-coefficient]]).

[F3] Biholomorphic pullback preserves the essential norm and $K$, and $K(\mu)=(1+\|\mu\|_\infty)/(1-\|\mu\|_\infty)$ ([[def-measurable-beltrami-coefficient]]).

[F4] A weak solution belongs to $W^{1,2}_{\mathrm{loc}}$ and satisfies $f_{\bar z}=\mu f_z$ almost everywhere; biholomorphic source changes have weak derivatives $(f\circ\psi)_\zeta=(f_z\circ\psi)\psi'$ and $(f\circ\psi)_{\bar\zeta}=(f_{\bar z}\circ\psi)\overline{\psi'}$ ([[def-weak-solution-beltrami-equation]]).

[F5] The Wirtinger derivatives of a $C^1$ map are $f_z=\tfrac12(D_xf-iD_yf)$ and $f_{\bar z}=\tfrac12(D_xf+iD_yf)$ ([[def-wirtinger-derivatives]]). For a $C^1$ map, the classical derivatives are its weak derivatives ([[lem-classical-derivatives-are-weak-derivatives]]); boundedness on compact patches gives local $W^{1,2}$ membership.

[F6] A complex domain is nonempty and open, and a biholomorphism is a bijective holomorphic map with holomorphic inverse ([[def-complex-domain]], [[def-biholomorphic-map]]).

[F7] The co-rotating model is Borel: $\zeta\mapsto c\zeta/\overline\zeta$ is continuous on the open set $\mathbb C^\times$, and assigning $0$ on the closed singleton $\{0\}$ preserves Borel measurability ([[def-borel-and-lebesgue-measurable-function-on-rn]]).

[F8] The model's modulus is bounded by $|c|<1$, so its measurable representative defines a Beltrami coefficient ([[def-measurable-beltrami-coefficient]]).

[F9] The finite and infinity chart expressions of a sphere coefficient are related by the pullback law, and the value of the infinity-chart expression at $w=0$ is immaterial ([[def-measurable-beltrami-coefficient]], [[def-riemann-sphere-holomorphic-charts]]).

## Verification

**Given:** The data in Facts & Assumptions, with $\lambda\ne0$ in (a), $|c|<1$ in the co-rotating model, and $\nu$ constant with $|\nu|<1$ in the affine check.

**Proof technique:** Compute each pullback factor and substitute the weak Wirtinger derivatives.

1.1 Since $\lambda\ne0$, $\psi(\zeta)=\lambda\zeta$ has holomorphic inverse $\zeta\mapsto\zeta/\lambda$. The pullback formula [F1] gives $\psi^*\mu=(\mu\circ\psi)\overline\lambda/\lambda$. Writing $\lambda=re^{i\phi}$ yields $\overline\lambda/\lambda=e^{-2i\phi}$, so a constant $\nu$ keeps modulus $|\nu|$ and, when $\nu\ne0$, its phase changes by $-2\phi$. The direction formula in [F2] therefore gives the pulled-back major-axis line at angle $\tfrac12\arg\nu-\phi\pmod\pi$; when $\nu=0$, [F2] says the ellipse is a circle and no direction is defined. [F1, F2, F6, algebra]

1.2 For $\rho_\theta(\zeta)=e^{i\theta}\zeta$, [F1] reads $\rho_\theta^*\mu=(\mu\circ\rho_\theta)e^{-2i\theta}$. Equality as almost-everywhere coefficient classes is equivalent, after multiplication by the nonzero constant $e^{2i\theta}$, to $\mu(e^{i\theta}\zeta)=e^{2i\theta}\mu(\zeta)$ almost everywhere. This proves both directions of the stated equivalence. [F1, algebra]

1.3 The map $j(w)=1/w$ on $\mathbb C^\times$ is its own holomorphic inverse. Its derivative is $j'(w)=-w^{-2}$, so $\overline{j'(w)}/j'(w)=w^2/\overline w^{\,2}$. Substitution in [F1] gives $\mu_0(1/w)w^2/\overline w^{\,2}$ on the chart overlap; [F9] makes the value at $w=0$ immaterial to the chartwise coefficient. [F1, F6, F9, algebra]

1.4 On each relatively compact coordinate patch, use [F4] and the weak equation to obtain $(f\circ\psi)_{\bar\zeta}=(\mu\circ\psi)(f_z\circ\psi)\overline{\psi'}$. The other formula in [F4] gives $(f\circ\psi)_\zeta=(f_z\circ\psi)\psi'$, so multiplying it by $\psi^*\mu=(\mu\circ\psi)\overline{\psi'}/\psi'$ from [F1] gives the same expression. The $W^{1,2}_{\mathrm{loc}}$ membership is also part of [F4], proving the pulled-back weak-solution claim. [F1, F4]

2.1 By [F7] the model is measurable, and by [F8] it satisfies $\|\mu\|_\infty\le |c|<1$, so it is a Beltrami coefficient. For $\zeta\ne0$, $\mu(e^{i\theta}\zeta)=c e^{2i\theta}\zeta/\overline\zeta=e^{2i\theta}\mu(\zeta)$; at $\zeta=0$ both sides are $0$. Thus the covariance holds everywhere and step 1.2 gives rotational invariance. [F7, F8, step 1.2, algebra]

2.2 The affine map $A(z)=z+\nu\overline z$ is $C^1$, and [F5] gives $A_z=1$ and $A_{\bar z}=\nu$, so it is a weak solution for the constant coefficient $\nu$. Directly, $(A\circ\rho_\theta)(\zeta)=e^{i\theta}\zeta+\nu e^{-i\theta}\overline\zeta$, whose Wirtinger derivatives are $e^{i\theta}$ and $\nu e^{-i\theta}$; their ratio is $\nu e^{-2i\theta}$, as in step 1.1. [F5, step 1.1, algebra]

3.1 The pullback and norm formulas [F1, F3] give $\|\psi^*\mu\|_\infty=\|\mu\|_\infty$; since $K(\mu)=(1+\|\mu\|_\infty)/(1-\|\mu\|_\infty)$, this implies $K(\psi^*\mu)=K(\mu)$. The pointwise modulus identity also preserves each ellipse's eccentricity under coordinate pullback. [F1, F3, algebra] ∎
