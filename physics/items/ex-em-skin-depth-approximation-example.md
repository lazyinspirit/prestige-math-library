---
id: ex-em-skin-depth-approximation-example
kind: example
title: "Numerical check of the good-conductor skin-depth bounds and the $\\sigma=0$ exclusion"
status: published
origin: pipeline
domain: physics
dependency_level: 20
deps: [pthm-em-conducting-skin-depth, def-em-medium-wave-parameters, post-em-material-closure, pthm-em-medium-plane-wave-fields]
dependency_roles:
  pthm-em-medium-plane-wave-fields: physical-result
  pthm-em-conducting-skin-depth: physical-result
  def-em-medium-wave-parameters: formulation-prerequisite
  post-em-material-closure: physical-assumption
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "Numerical illustration for declared model parameters in the isotropic scalar Ohmic branch: the good-conductor bounds |q-sqrt(b/2)|<=2t*sqrt(b/2) and |delta-sqrt(2/b)|<=4t*sqrt(2/b) at eps*omega/sigma=3/25 and the exclusion of sigma=0 from the finite-depth approximation. Excluded: any measured conductivity, any laboratory material, and any experimental or statistical claim."
sources:
  references:
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (2026 author-hosted revision, 236 pp.)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "\u00a77.6.2 printed pp. 207-209: the skin depth $\\delta=\\sqrt{2/(\\mu\\omega\\sigma_{\\mathrm{DC}})}$ and its regime of validity in the low-frequency Ohmic conductor; the numerical values here are declared dimensionless illustrations of that closed form, not data from the source."
    - title: "David J. Griffiths, Introduction to Electrodynamics, 3rd edition (Prentice Hall, 1999, 596-page retained scan)"
      url: "https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Physics/Electrodynamics/David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf"
      locator: "\u00a79.4.1 printed pp. 394-395 and Problem 9.19(a),(b) printed p. 396: the good-conductor skin depth $\\delta=\\lambda/(2\\pi)$ and the poor-conductor frequency-independent depth; the monotone comparison of the exact $q$ with $\\sqrt{\\mu\\sigma\\omega/2}$ used here is the quantitative form of the source's 'good conductor' discussion. Retained scan with OCR noise; the bounds were verified by the local computation in the batch notes."
verification:
  precheck: pass

---

## Example

Adopt the isotropic scalar Ohmic branch of [[post-em-material-closure]] at rest and the exact quantities of [[def-em-medium-wave-parameters]] and [[pthm-em-conducting-skin-depth]]. Let the declared parameters be $$\varepsilon=4\ \mathrm F\,\mathrm m^{-1},\qquad \mu=1\ \mathrm H\,\mathrm m^{-1},\qquad \sigma=100\ \mathrm S\,\mathrm m^{-1},\qquad \omega=3\ \mathrm s^{-1};$$ these are declared model parameters of the illustration, not measured values of any material. The numerical evaluations below use these SI units: $a,b,r$ have unit $\mathrm m^{-2}$, $p,q$ have unit $\mathrm m^{-1}$, and $\delta$ has unit m; $t=a/b$ is dimensionless. Then: (i) $a=\mu\varepsilon\omega^{2}=36$, $b=\mu\sigma\omega=300$, $r=\sqrt{a^{2}+b^{2}}=\sqrt{91296}$ and $t=a/b=3/25=0.12\le1/4$, so the good-conductor regime of [[pthm-em-conducting-skin-depth]](c) applies; (ii) the exact propagation and attenuation constants are $p=\sqrt{(r+36)/2}$ and $q=\sqrt{(r-36)/2}$, with $pq=b/2=150$ exactly; the decimal evaluations $r\approx302.15228$, $p\approx13.00293$, $q\approx11.53586$ satisfy $q<\sqrt{b/2}=\sqrt{150}\approx12.24745$ with $$|q-\sqrt{150}|\approx0.71159\le 2t\sqrt{150}=0.24\sqrt{150}\approx2.93939,$$ and for the skin depth $\delta=1/q\approx0.08669$ against $\sqrt{2/b}=1/\sqrt{150}\approx0.08165$ one has $$|\delta-\sqrt{2/b}|\approx0.00504\le 4t\sqrt{2/b}=0.48\sqrt{2/b}\approx0.03919 .$$ Thus the exact skin depth satisfies the stated good-conductor bound with the margin predicted by the theorem. (iii) for $\sigma=0$ (same $\varepsilon,\mu,\omega$) one has $b=0$, $q=0$, no attenuation and $\delta=+\infty$ by the convention of [[def-em-medium-wave-parameters]](c); the inequalities of (ii) do not apply, consistently with the exclusion recorded in [[pthm-em-conducting-skin-depth]](f). (iv) [Scope] the computation is an exact check of the stated inequalities for the declared model parameters (with dimensionless ratio $t$); it reports no measurement, no material identification and no empirical claim, and the decimal evaluations are displayed only as approximate illustrations of the exact expressions.

## Verification



**Proof technique:** direct substitution in the exact identities and bounds of the skin-depth theorem, with the decimal displays read as roundings of the exact radicals.

**Given:** The declared parameters $\varepsilon=4$, $\mu=1$, $\sigma=100$, $\omega=3$ as the stated dimensionless representatives of the SI quantities of the Example, the branch assumption of [[post-em-material-closure]], and the exact quantities $a,b,r,p,q,\delta,t$ of [[def-em-medium-wave-parameters]] and [[pthm-em-conducting-skin-depth]].

[A1] The conditional plane-wave attenuation theorem [[pthm-em-conducting-skin-depth]]: in the declared scalar Ohmic branch with $\varepsilon,\mu,\omega,\sigma>0$, its exact identities (b) and good-conductor bounds (c) for $t\le1/4$ apply to a nonzero transverse plane-wave field with $k=\lambda n$, $|n|=1$, satisfying the four amplitude conditions of [[pthm-em-medium-plane-wave-fields]](b). A field meeting these hypotheses is constructed in step 1.1.

[F1] The medium parameters ([[def-em-medium-wave-parameters]]): $a=\mu\varepsilon\omega^2$, $b=\mu\sigma\omega$, $r=\sqrt{a^2+b^2}$, $p=\sqrt{(r+a)/2}$, $q=\sqrt{(r-a)/2}$, $\delta=1/q$ for $\sigma>0$ and $\delta=+\infty$ for $\sigma=0$; $t:=a/b$.

[F2] The plane-wave solution criterion of [[pthm-em-medium-plane-wave-fields]](b)-(c): for $\omega>0$, complex amplitudes $e,h$ and wavevector $k$, the smooth fields $E(x,\tau)=\operatorname{Re}(e\exp(i(k\cdot x-\omega\tau)))$, $H(x,\tau)=\operatorname{Re}(h\exp(i(k\cdot x-\omega\tau)))$, $D=\varepsilon E$, $B=\mu H$, with $\rho_f=0$, $J_{\mathrm{ext}}=0$ and $J_f=\sigma E$, satisfy the source-free macroscopic equations exactly when $k\cdot e=k\cdot h=0$, $k\times e=\omega\mu h$ and $k\times h=-(\omega\varepsilon+i\sigma)e$. The products are the componentwise complex bilinear products used there.

1.1 [Substitution and solution witness, clause (i)] By [F1], $a=\mu\varepsilon\omega^2=1\cdot4\cdot9=36$ and $b=\mu\sigma\omega=1\cdot100\cdot3=300$; hence $r=\sqrt{a^2+b^2}=\sqrt{36^2+300^2}=\sqrt{91296}$ and $t=a/b=36/300=3/25$. To meet [A1]'s field hypotheses, write $u_1=(1,0,0)$, $u_2=(0,1,0)$, $u_3=(0,0,1)$ for the Cartesian unit directions, choose $E_*=1\ \mathrm V\,\mathrm m^{-1}$, and set $\lambda=p+iq$, $n=u_3$, $k=\lambda u_3$, $e=E_*u_1\ne0$ and $h=\lambda E_*u_2/(\mu\omega)$, which has units $\mathrm A\,\mathrm m^{-1}$. By [F1], $\lambda^2=\mu\varepsilon\omega^2+i\mu\sigma\omega$, so $k\cdot e=k\cdot h=0$, $k\times e=\lambda E_*u_2=\mu\omega h$ and $k\times h=-\lambda^2E_*u_1/(\mu\omega)=-(\varepsilon\omega+i\sigma)e$. Thus the $C^\infty$ maps $E,H:\mathbb R^3\times\mathbb R\to\mathbb R^3$ of [F2], with these amplitudes and the stated $D,B,J_f$, satisfy the equations and are transverse; restrict them to $\Omega\times I$ with $\Omega=\{x_3>0\}$ and $I=\mathbb R$, where the decaying branch is bounded. This is an auxiliary ideal solution, with no interface or empirical assertion. Since $|n|=1$ and $3/25\le1/4$ (equivalently $12\le25$), all hypotheses of [A1](b),(c) now hold and its good-conductor bounds apply. [given, A1, F1, F2, construct, algebra]

1.2 [Exact identities, clause (ii)] By [F1] and [A1](b), $p=\sqrt{(r+a)/2}=\sqrt{(\sqrt{91296}+36)/2}$, $q=\sqrt{(r-a)/2}=\sqrt{(\sqrt{91296}-36)/2}$ and $pq=b/2=150$ exactly. Since $91296<336^2=112896$, positivity and the square-root order give $r=\sqrt{91296}<336$, hence $q^2=(r-36)/2<300/2=b/2$, so $q<\sqrt{150}=\sqrt{b/2}$; and the exact bounds of [A1](c) read $|q-\sqrt{150}|\le(6/25)\sqrt{150}=\frac{2\varepsilon\omega}{\sigma}\sqrt{\frac{\mu\sigma\omega}{2}}$ and $|\delta-\sqrt{2/b}|\le(12/25)\sqrt{2/b}=\frac{4\varepsilon\omega}{\sigma}\sqrt{\frac{2}{\mu\sigma\omega}}$. [A1, F1, algebra]

1.3 [The $\sigma=0$ exclusion, clause (iii)] For the same $\varepsilon,\mu,\omega$ and $\sigma=0$, [F1] gives $b=0$, $r=a$, $q=\sqrt{(r-a)/2}=0$ and $\delta=+\infty$ by the convention of [F1]; the identities and bounds of [A1](b),(c) carry the hypothesis $b>0$, equivalently $\sigma>0$, and are not evaluated at $b=0$, which is the exclusion recorded in [A1](f). [given, A1, F1, algebra]

2.1 [Decimal displays and the bound comparisons] The decimal numbers displayed in clause (ii) of the Example are the stated roundings of the exact quantities $r=\sqrt{91296}$, $p=\sqrt{(r+36)/2}$, $q=\sqrt{(r-36)/2}$, $\delta=1/q$, $\sqrt{150}$ and $\sqrt{2/300}$; reading them as roundings, the comparisons $|q-\sqrt{150}|\le(6/25)\sqrt{150}$ and $|\delta-\sqrt{2/b}|\le(12/25)\sqrt{2/b}$ displayed there are instances of the exact inequalities of step 1.2, and the numerical magnitudes quoted in the Example are not independent assertions of exact decimal arithmetic. In particular the inequalities hold with the margin predicted by [A1](c) for the declared dimensionless ratio $t=3/25$. [step 1.2, A1, algebra]

3.1 [Scope, clause (iv)] The computation used only the declared parameters, the branch assumption [A1] and the exact definitions [F1]; it reports no measurement, no material identification and no empirical or statistical claim, and the decimal displays of the Example are approximate illustrations of the exact expressions, as stated. No choice principle is used. [given, step 2.1, step 1.3, A1, F1] ∎
