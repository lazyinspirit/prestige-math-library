---
id: def-cmp-compactification-scale-hierarchy
kind: definition
title: Compactification EFT scales and validity window
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: physics
library: physics
category: string-theory
page: cmp-kaluza-klein-reduction-and-effective-theory
dependency_level: 9
physical_scope: "Classical spectrum and low-energy EFT scales for a declared compactification background. Statements about perturbative string theory are conditional on the stated string-frame, dilaton, warping, and weak-coupling assumptions."
deps:
  - def-cmp-integrating-out-and-wilsonian-effective-theory
  - def-cmp-kaluza-klein-reduction-ansatz-and-frames
  - pthm-cmp-unwarped-four-dimensional-planck-scale
dependency_roles:
  def-cmp-integrating-out-and-wilsonian-effective-theory: formulation-prerequisite
  def-cmp-kaluza-klein-reduction-ansatz-and-frames: formulation-prerequisite
  pthm-cmp-unwarped-four-dimensional-planck-scale: physical-result
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Steven B. Giddings, Shamit Kachru, and Joseph Polchinski, Hierarchies from Fluxes in String Compactifications, arXiv:hep-th/0105097v2"
      url: "https://arxiv.org/pdf/hep-th/0105097v2"
      locator: "Introduction and §§2–3, PDF pp. 2–16 and 23–27; warped local redshift and compact backreaction"
    - title: "Alex S. Arvanitakis, Olaf Hohm, Chris Hull, and Victor Lekeu, Homotopy Transfer and Effective Field Theory II: Strings and Double Field Theory, arXiv:2106.08343v2"
      url: "https://arxiv.org/pdf/2106.08343v2"
      locator: "§§2–4, PDF pp. 8–29; field modes, string momentum/winding sectors, and warped thresholds"
    - title: "Riccardo Penco, An Introduction to Effective Field Theories, arXiv:2006.16285v1"
      url: "https://arxiv.org/pdf/2006.16285v1"
      locator: "§1.1 and §§2.1–3.1; low-energy expansion parameter and matching"
---

## Definition

Fix a smooth compact internal space $Y$, a background, a set $\mathcal F_{\rm ret}$ of higher-dimensional field species represented in the lower-dimensional model, a set $\mathcal F_{\rm omit}$ of omitted physical sectors, and an external Einstein-frame metric. For each $\alpha\in\mathcal F_{\rm ret}$, let $\Sigma_{\rm KK}^{(\alpha)}\subseteq[0,\infty)$ be the mass-squared spectral support of the specified physical internal fluctuation operator for that parent field species, with the zero mode removed. “Retained-field spectrum” here means the internal modes of the declared parent field species, whether or not an individual massive mode is retained. Define
$$M_{\rm KK}:=\inf\left\{\sqrt{\lambda}:\lambda\in\bigcup_{\alpha\in\mathcal F_{\rm ret}}\Sigma_{\rm KK}^{(\alpha)},\ \lambda>0\right\}.$$
This is a spectral threshold, not necessarily an eigenvalue. If the set is empty put $M_{\rm KK}=+\infty$; if positive spectral values accumulate at zero, put $M_{\rm KK}=0$. A tachyonic background is outside this stable-spectrum definition.

For each declared omitted physical sector $\sigma$—for example, a bulk Kaluza–Klein tower, a warped-throat tower, an open-string sector, a string-oscillator sector, or a winding sector—let $\Sigma_\sigma\subseteq[0,\infty)$ be its physical mass-squared spectral support in the same external Einstein frame, including continuous spectrum. Define its threshold $M_\sigma^{\rm th}:=\inf\{\sqrt{\lambda}:\lambda\in\Sigma_\sigma\}$, with $M_\sigma^{\rm th}=+\infty$ when that sector is absent. For the finite declared list of omitted sector types $\mathfrak S_{\rm omit}$, define
$$M_{\rm gap}:=\inf\{M_\sigma^{\rm th}:\sigma\in\mathfrak S_{\rm omit}\}.$$
This threshold has units of inverse length. If there is no omitted sector, set $M_{\rm gap}=+\infty$; if the infimum is zero, then $M_{\rm gap}=0$ and there is no positive-gap derivative expansion. An omitted instability supplies no positive gap.

When present, write $M_{\rm KK,omit}$, $M_{\rm throat}$, $M_{\rm open}$, and $M_{\rm string}$ for the thresholds $M_\sigma^{\rm th}$ of the omitted bulk Kaluza–Klein, warped-throat, open-string, and string-oscillator sectors, respectively. Each is $+\infty$ when its sector is absent, and $M_{\rm gap}$ is the infimum over the complete declared omitted-sector list, not just one of these examples.

If the canonically normalized $d$-dimensional Einstein–Hilbert coefficient is $1/(2\kappa_d^2)$ with $\kappa_d^{-2}>0$ and $d>2$, define the reduced Planck scale by $M_{d,\rm Pl}^{d-2}:=\kappa_d^{-2}$, with the positive real root. Thus $M_{d,\rm Pl}$ has units of inverse length. On a stated region $\mathcal O$ of the smooth time-oriented external spacetime $(M_d,g_E)$, choose a smooth local orthonormal frame $(e_0,\ldots,e_{d-1})$, with $g_E(e_a,e_b)=\operatorname{diag}(-1,1,\ldots,1)_{ab}$ and future-directed observer field $U=e_0$. No global frame is assumed. For a future causal momentum covector $k\in T_x^*M_d$, meaning $g_E^{-1}(k,k)\leq0$ and $k(U)<0$ (or $k=0$), its local energy is $E_U(k):=-k(U)$. Declare a momentum domain $\mathcal P\subseteq T^*M_d|_{\mathcal O}$ containing all momentum arguments of the omitted propagators being expanded, including off-shell momenta and all relevant channel sums. Choose a finite $E\geq0$ with $|p(e_a)|\leq E$ for every $p\in\mathcal P$ and every $a=0,\ldots,d-1$ throughout $\mathcal O$. This bounds local causal energies and every spatial component; a bound on causal energies alone would not control arbitrary spacelike momenta. The frame, region and momentum domain are input data, and $E$ has units of inverse length. For a nonempty stable omitted sector with $0<M_{\rm gap}<\infty$, the declared low-momentum derivative-expansion regime requires $E/M_{\rm gap}\leq\delta<1$, with $E\ll M_{\rm gap}$ denoting a family in which that ratio tends to zero with other declared bounds fixed. It also requires the specified propagator representations, analyticity domains and uniform Taylor remainder estimates of the integrating-out definition; a gap and this ratio alone do not establish locality or error control. For an empty omitted sector there is no omitted propagator to expand; zero gap supplies no such regime. When gravitational EFT control is claimed, impose separately $E\ll M_{d,\rm Pl}$.

Let $\alpha'>0$ have units of length squared. For a fixed unwarped circle, let $R=R_E>0$ be its proper radius in the higher-dimensional Einstein metric, and use that metric's external block as the external comparison metric, with no further lower-dimensional Weyl rescaling. The field-theory momentum contribution in this frame is $|n|/R_E$ for integer $n$; it is distinct from string winding. For the ten-dimensional string comparison assume a constant dilaton $\Phi_0$ and $G_E=e^{-\Phi_0/2}G_s$. The string-frame proper radius is $R_s=e^{\Phi_0/4}R_E$, while rest energies obey $M_E=e^{\Phi_0/4}M_s$. Thus string-frame momentum and winding contributions $|n|/R_s$ and $|w|R_s/\alpha'$, for $n,w\in\mathbb Z$ and tension $T=1/(2\pi\alpha')$, become $|n|/R_E$ and $e^{\Phi_0/2}|w|R_E/\alpha'$ in the common Einstein frame. These are contributions to the spectrum, not universal formulas for full string-state masses or sector thresholds; oscillator contributions and state constraints must also be supplied. Define the string-frame scale $M_s^{(s)}:=\alpha'^{-1/2}$. This is a characteristic scale, not automatically the exact oscillator threshold $M_{\rm string}$. In a winding sector, define $M_w$ as the lower mass threshold of the declared winding states in the chosen frame; it is $+\infty$ if that sector is absent and is the infimum of its spectral support if continuous. A winding-state threshold and a field-theory Fourier momentum threshold are different sectors.

In ten dimensions use the unshifted convention $G_E=e^{-\Phi/2}G_s$. For a static background dilaton $\Phi:Y\to\mathbb R$, the local Einstein-frame characteristic string scale is
$$M_s^{(E)}(y)=e^{\Phi(y)/4}M_s^{(s)},\qquad g_s(y):=e^{\Phi(y)}.$$
If $\Phi$ is constant, $g_s=e^{\Phi_0}$. A uniform weak-coupling regime on compact $Y$ requires $\sup_{y\in Y}e^{\Phi(y)}\ll1$; a pointwise condition applies only to a stated region.

For a warped Einstein-frame metric $ds_E^2=e^{2A(y)}g_d+e^{2B(y)}\hat g_Y$, a redshift formula requires a static observer convention. Suppose $g_d$ has a chosen unit timelike Killing field $\xi=\partial_t$ and static observers at fixed external spatial coordinates. Their unit tangent in the warped metric is $U=e^{-A(y)}\xi$, and their proper time is $d\tau=e^{A(y)}dt$. A local rest threshold $M^{(E)}(y)$ measured by $U$ therefore has threshold $M^{(t)}(y)=e^{A(y)}M^{(E)}(y)$ for frequency conjugate to $t$. If no such normalized static time exists, compare local orthonormal-frame energies and thresholds instead; a global warped KK mass is obtained from the full fluctuation spectral problem, not from a local warp factor.

To define a string-frame curvature/variation length, specify a compact region $K\subseteq Y$, a string-frame orthonormal frame, and a finite list $\mathcal Q$ of dimensionless normalized background fields with stated derivative orders $k_q\geq1$. Use the maximum absolute frame component norm and set
$$L_q:=\left(\sup_K\|\nabla_s^{k_q}q\|\right)^{-1/k_q}$$
with $L_q=+\infty$ when the supremum is zero. Also set $L_R:=(\sup_K\|\mathrm{Rm}(G_s)\|)^{-1/2}$, with $L_R=+\infty$ when that supremum is zero, and define $L_s:=\min(\{L_R\}\cup\{L_q:q\in\mathcal Q\})$. The region, frame, normalized fields, and derivative orders are part of this convention. If these bounds are not supplied, $L_s$ is undefined. A declared perturbative string expansion may use $\alpha'/L_s^2$ and the local $g_s$ as separate dimensionless control parameters; neither is inferred from $E/M_{\rm gap}$.

Large total internal volume alone implies neither a positive mass gap, a large ratio $M_{\rm gap}/E$, small $\alpha'/L_s^2$, nor weak local coupling.

## Definition references

[[def-cmp-integrating-out-and-wilsonian-effective-theory]]

[[def-cmp-kaluza-klein-reduction-ansatz-and-frames]]

[[pthm-cmp-unwarped-four-dimensional-planck-scale]]

## Facts & Assumptions

**Given:** A background with specified frame, dilaton, warp factor, retained and omitted modes, and the declared external Einstein-frame orthonormal frame, momentum domain and component bound.

[F1] [[def-cmp-integrating-out-and-wilsonian-effective-theory]]: for a stable omitted quadratic sector, $M_{\rm gap}$ is the infimum of the square roots of its physical mass-squared spectral support, including continuous spectrum; an empty omitted sector has threshold $+\infty$, while zero threshold supplies no positive-gap expansion. A local derivative expansion also requires a bound on every orthonormal momentum component, including off-shell and channel momenta, together with specified propagator representations, analyticity domains and uniform Taylor remainder estimates.

[F2] [[def-cmp-kaluza-klein-reduction-ansatz-and-frames]]: the internal geometry, field/mode ansatz, frame, and dilaton convention are explicit inputs.

[F3] [[pthm-cmp-unwarped-four-dimensional-planck-scale]]: for $d>2$ and positive canonical Einstein coefficient $1/(2\kappa_d^2)$, $M_{d,\rm Pl}^{d-2}=\kappa_d^{-2}$; the variable-volume and warped coefficients have the stated metric hypotheses.

[A1] For the flat-circle check take a fixed unwarped circle of Einstein-frame proper radius $R=R_E>0$, use the Einstein metric's external block without further Weyl rescaling, take a free minimally coupled parent scalar of Einstein-frame mass $m_0\geq0$, and use natural units $\hbar=c=1$. For the circle string comparison take ten dimensions, constant $\Phi=\Phi_0$, $R_s=e^{\Phi_0/4}R_E$, the declared perturbative string spectrum, and tension $T=1/(2\pi\alpha')$. Local scale conversions on other backgrounds use the separately stated dilaton and observer conventions.

## Proof


1.1  On the flat circle the internal eigenfunctions are $e^{iny/R}$, and $-\partial_y^2e^{iny/R}=(n^2/R^2)e^{iny/R}$. For the parent scalar of [A1], the total free mass squared is $m_n^2=m_0^2+n^2/R^2$, so the lightest nonzero momentum mode has mass $\sqrt{m_0^2+R^{-2}}$; only for $m_0=0$ is this threshold $1/R$. The momentum contribution $|n|/R$ is a field fluctuation threshold, not a winding threshold. For the string comparison of [A1], a winding number $w$ means the string wraps the circle $|w|$ times; tension times wrapped length gives the string-frame rest contribution $T(2\pi|w|R_s)=|w|R_s/\alpha'$. Since $R_s=e^{\Phi_0/4}R_E$ and $M_E=e^{\Phi_0/4}M_s$, its Einstein-frame contribution is $e^{\Phi_0/2}|w|R_E/\alpha'$, whereas the momentum contribution converts to $e^{\Phi_0/4}|n|/R_s=|n|/R_E$. Full thresholds require the declared string spectrum, including oscillator contributions; they cannot be identified with either contribution alone. [given, A1, F2, algebra]

1.2  Since $G_E=e^{-\Phi/2}G_s$, a local proper interval obeys $ds_E=e^{-\Phi/4}ds_s$. The energy, inverse proper time, therefore obeys $M_E=e^{\Phi/4}M_s$, giving $M_s^{(E)}(y)=e^{\Phi(y)/4}\alpha'^{-1/2}$. Under the static convention in the Definition, $U=e^{-A}\partial_t$ is unit timelike and $d\tau=e^A dt$, so a local rest energy $M^{(E)}$ corresponds to frequency threshold $e^{A(y)}M^{(E)}$. [given, A1, F2, algebra]

1.3  By the declared frame bounds, $\alpha'/L_s^2$ is dimensionless and compares the squared string length with the shortest listed curvature/variation length. The local coupling is $g_s(y)=e^{\Phi(y)}$; uniform perturbative control requires it to be small throughout the compact region. Neither condition follows from $E/M_{\rm gap}\ll1$ or from total volume being large. [given, A1, F2, algebra]

2.1 A global warped KK threshold depends on the complete physical internal fluctuation operator and its measure, not just the value of a local warp factor. For every momentum in the declared domain, the component bound gives $|g_E^{-1}(p,p)|=|-p(e_0)^2+\sum_{a=1}^{d-1}p(e_a)^2|\leq dE^2$, including off-shell and channel momenta. Thus the Definition uses the full momentum-bound convention of [F1]. Its low-momentum ratio must be supplemented by the propagator analyticity and uniform remainder controls required there; neither a local warp factor nor a positive gap supplies them. The separate gravitational comparison uses the Planck normalization of [F3] and is an additional adopted control condition. [given, F1, F3, step 1.2, algebra]

3.1  If the shifted-dilaton convention is used, set $\Phi'=\Phi-\Phi_0$ and $G'_E=e^{-\Phi'/2}G_s=e^{\Phi_0/2}G_E$. This is a constant Weyl rescaling relative to the unshifted Einstein metric; masses measured with that metric rescale by the inverse constant length factor. Convert all of $E$, $M_{\rm gap}$, and $M_{d,\rm Pl}$ together before comparing inequalities. No scale hierarchy or string-vacuum existence follows from these definitions alone. [given, F2, F3, step 1.2, algebra] ∎
