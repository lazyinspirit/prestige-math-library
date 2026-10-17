---
id: ex-tgr-chiral-generator-rescaling
kind: example
title: Chiral covariance and generator reference rescaling
status: published
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 3
deps:
  - def-countable-choice
  - lem-tgr-exponential-current
  - lem-tgr-thermal-contour-spectrum
dependency_roles:
  def-countable-choice: mathematical-premise
  lem-tgr-exponential-current: mathematical-premise
  lem-tgr-thermal-contour-spectrum: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Robert M. Wald, The Thermodynamics of Black Holes
      url: https://arxiv.org/pdf/gr-qc/9912119
      locator: Section 3, PDF pp. 11–16; cited only as context for the exponential redshift and thermal scale.
    - title: Crispino, Higuchi, and Matsas, The Unruh effect and its applications
      url: https://arxiv.org/pdf/0710.5373
      locator: Section III.A.1–2, PDF pp. 19–22; detector-specific rates are not used as mathematical premises.
    - title: Ted Jacobson, Introduction to Quantum Fields in Curved Spacetime and the Hawking Effect
      url: https://arxiv.org/pdf/gr-qc/0308048
      locator: Section 6.2.1–6.2.3, PDF pp. 32–39; cited only for broader exponential-coordinate context.
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Example

Assume Countable Choice ($\mathrm{AC}_\omega$) as defined in [[def-countable-choice]]. Let $u$ be a length coordinate measured in metres, let $\kappa>0$ have units of inverse metres, and let $b>0$ be dimensionless; set $u'=u/b$ and $\kappa'=b\kappa$. Write $\beta=2\pi/\kappa$ and $\beta'=2\pi/\kappa'$ for the corresponding strip widths, measured in metres. Here “generator frequency” means only the angular Fourier-dual parameter: for the convention $\widehat g(\omega)=\int g(u)e^{-i\omega u}\,du$, $\omega$ has units of inverse metres and is not the eigenvalue of a separately asserted operator generator. To express it using an energy parameter, take $E>0$ in joules and a fixed formal $\sigma>0$ in joule-metres, and define $\omega=E/\sigma$; no physical energy or clock identification is assumed. For a primed parameter $E'>0$ in joules define $\omega'=E'/\sigma$. Matching the phase means $\omega'u'=\omega u$ for every $u\in\mathbb R$, and holds exactly when $E'=bE$, equivalently $\omega'=b\omega$. For $g'\in C_c^\infty(\mathbb R;\mathbb C)$ define the transformed current by $j'(g')=j_\kappa(g'(\cdot/b))$. If $j_\kappa$ is represented by a regular density, changing variables $u=bu'$ in this test pairing gives $j'(u')=b j_\kappa(bu')$; the same formula defines the density transformation distributionally. For $\varphi'\in C_c^\infty(\mathbb R;\mathbb C)$, the corresponding two-point test pairing transforms as $\langle C',\varphi'\rangle=\langle C_\kappa,b\varphi'(\cdot/b)\rangle$, equivalently $C'=b^2C_\kappa(b\,\cdot)$ as a distribution. Thus the covariance retains its chiral form, the spectrum acquires the factor $b$, and $\beta'\omega'=\beta\omega$, so the detailed-balance exponent is unchanged. This is a coordinate and parameter identity within the mathematical model; no physical clock normalization or temperature assignment is included.

## Facts & Assumptions

**Given:** Countable Choice and the current and spectrum of [[lem-tgr-exponential-current]] and [[lem-tgr-thermal-contour-spectrum]]. Let $b>0$ be dimensionless, let $\kappa>0$ have units of inverse length, let $u$ have units of length, and let $\sigma>0$ be a fixed formal scale with units of energy times length. For $E>0$, set $\omega=E/\sigma$, which has units of inverse length; no physical identification of $\sigma$ is assumed here.

[F1] [[lem-tgr-exponential-current]] defines the current by compact test smearing and gives covariance $C_\kappa(s)=-(\kappa^2/16\pi)\operatorname{csch}^2(\kappa(s-i0)/2)$.

[F2] [[lem-tgr-thermal-contour-spectrum]] gives $S_\kappa(\omega)=\omega/[2(e^{2\pi\omega/\kappa}-1)]$ and $S_\kappa(-\omega)=e^{2\pi\omega/\kappa}S_\kappa(\omega)$ for $\omega>0$.

[F3] Under the Fourier kernel $e^{-i\omega u}$, rescaling $u'=u/b$ leaves the phase invariant exactly when $\omega'=b\omega$. The covariance pairing in the Example follows from the two density factors, each transforming by $b$.

[A1] Assume Countable Choice [[def-countable-choice]], retaining the hypothesis of both tested-current and spectrum suppliers.

## Verification

1.1 Under [A1], change the length-flow coordinate to $u'=u/b$ and define the primed smeared current by $j'(g')=j_\kappa(g'(\cdot/b))$ for $g'\in C_c^\infty(\mathbb R)$. Since $u=bu'$, the current density transforms as $j'(u')=b j_\kappa(bu')$ in the distributional sense, so its two-point covariance is $C'(s')=b^2 C_\kappa(bs')$. Substituting [F1] and using $b>0$ to preserve the lower-boundary orientation gives $C'(s')=C_{b\kappa}(s')$. [given, A1, F1, algebra]

2.1 Put $\kappa'=b\kappa$ and $\omega'=b\omega$. Then [F2] gives
$$S_{\kappa'}(\omega')=\frac{b\omega}{2(e^{2\pi b\omega/(b\kappa)}-1)}=bS_\kappa(\omega),$$
and therefore $S_{\kappa'}(-\omega')/S_{\kappa'}(\omega')=e^{2\pi\omega/\kappa}$. For any $E'>0$ define $\omega'=E'/\sigma$. Phase preservation for every $u\in\mathbb R$ is the identity $E'u/(b\sigma)=Eu/\sigma$; comparing coefficients of $u$ and using $b,\sigma>0$ gives $E'/b=E$, hence $E'=bE$. Conversely, $E'=bE$ gives $E'u'/\sigma=(bE)(u/b)/\sigma=Eu/\sigma$ for every $u$, and therefore $\omega'=b\omega$. Equivalently, the length-flow strip width $\beta_\ell=2\pi/\kappa$ rescales to $\beta_\ell'=\beta_\ell/b$, while $\beta_\ell'\omega'=\beta_\ell\omega$. [given, F2, step 1.1, algebra] ∎
## Remarks

This is a coordinate and parameter identity within the specified one-dimensional model. The inverse-length generator frequency and the strip width are reference-normalized quantities; no invariant physical energy or black-hole temperature is inferred without a separate physical clock and unit assignment.
