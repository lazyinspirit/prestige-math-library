---
id: prop-ip-limited-angle-fourier-visibility
kind: proposition
title: Limited-angle data sample the visible Fourier wedge and zero frequency
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - def-ip-visible-covector-for-limited-angle-data
  - def-ip-schwartz-radon-transform
  - lem-ip-fourier-slice-identity-on-schwartz
  - thm-ip-fourier-slice-identity
  - cor-ip-limited-angle-compact-support-uniqueness
  - def-countable-choice
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Mikko Salo, On geometric inverse problems and microlocal analysis, §2.1"
      url: "https://users.jyu.fi/~salomi/pub/RICAM_notes_v1.pdf"
      locator: "§2.1, pp. 4–5, Theorems 2.1–2.2."
    - title: "Venkataswaran P. Krishnan and Eric Todd Quinto, Microlocal Analysis in Tomography"
      url: "https://math.tifrbng.res.in/~vkrishnan/Papers/Microlocal_Analysis_Tomography.pdf"
      locator: "§1.3.2, pp. 13–14, Theorems 2–3 and the complete limited-angle proof."
    - title: "Marco Mazzucchelli, Mikko Salo, and Leo Tzou, A general support theorem for analytic double fibration transforms"
      url: "https://arxiv.org/pdf/2306.05906"
      locator: "§1.2, Theorem 1.2, and §1.3, Theorem 1.3, pp. 4–5; contextual analytic-transform comparison."
---

## Statement

Assume the Axiom of Countable Choice. Let $\Theta\subset S^1$ be a nonempty proper open antipodally symmetric set whose complement contains a nonempty open arc, and let $W_\Theta=\{\sigma\theta:\theta\in\Theta,\ \sigma\in\mathbb R\setminus\{0\}\}$. For $f\in\mathcal S(\mathbb R^2)$ and every measured normal $\theta\in\Theta$, the one-dimensional Fourier transform in the offset variable obeys $\widehat{R_{\mathcal S}f}(\theta,\sigma)=\widehat f(\sigma\theta)$ for all $\sigma\in\mathbb R$. In particular, zero restricted data imply that $\widehat f$ vanishes on $W_\Theta$. If in addition $f\in C_c^\infty(\mathbb R^2)$, zero restricted data imply $f=0$ everywhere. For compactly supported inputs, the stated Countable Choice assumption identifies the Lebesgue line integrals here with the compact-support Riemann convention; the compact-support Fourier-slice and uniqueness results in that convention are proved without Countable Choice.

## Statement references

[Mikko Salo, On geometric inverse problems and microlocal analysis, §2.1](https://users.jyu.fi/~salomi/pub/RICAM_notes_v1.pdf)

[Venkataswaran P. Krishnan and Eric Todd Quinto, Microlocal Analysis in Tomography, §1.3.2](https://math.tifrbng.res.in/~vkrishnan/Papers/Microlocal_Analysis_Tomography.pdf)

[Marco Mazzucchelli, Mikko Salo, and Leo Tzou, A general support theorem for analytic double fibration transforms, §§1.2–1.3](https://arxiv.org/pdf/2306.05906)

## Facts & Assumptions

**Given:** The set $\Theta$, $W_\Theta$, and a function $f\in\mathcal S(\mathbb R^2)$; in the compact-support conclusion also $f\in C_c^\infty(\mathbb R^2)$ and $R_{\mathcal S}f(\theta,s)=0$ for every $\theta\in\Theta$ and $s\in\mathbb R$.

[F1] [[def-ip-visible-covector-for-limited-angle-data]]: the measured Fourier wedge is $W_\Theta=\{\sigma\theta:\theta\in\Theta,\ \sigma\ne0\}$.

[F2] [[def-ip-schwartz-radon-transform]]: $R_{\mathcal S}f(\theta,s)=\int_\mathbb R f(s\theta+t\theta^\perp)\,dt$ with Lebesgue measure; under Countable Choice, this agrees on compactly supported smooth inputs with the compact-support Riemann line integral.

[F3] [[lem-ip-fourier-slice-identity-on-schwartz]]: for $f\in\mathcal S$, $\widehat{R_{\mathcal S}f}(\theta,\sigma)=\widehat f(\sigma\theta)$.

[F4] [[thm-ip-fourier-slice-identity]]: for $f\in C_c^\infty$ and the IP-36 normalization, the same compact-support Fourier-slice identity holds.

[F5] [[cor-ip-limited-angle-compact-support-uniqueness]]: compactly supported smooth functions with zero data on a nonempty open set of line normals vanish everywhere; the proof uses the Riemann Fourier-Laplace transform and no Countable Choice.

[A1] [[def-countable-choice]]: Countable Choice is used by [F2] to identify the compact-support line-integral conventions and by [F3] for the general Schwartz Fourier-slice formula. The compact-support Fourier-slice and uniqueness results [F4]–[F5] themselves are choice-free in the Riemann convention.

## Proof

1.1 For each $\theta\in\Theta$ and $\sigma\in\mathbb R$, [F3] gives the Fourier-slice identity. If the restricted data vanish, their one-dimensional Fourier transforms vanish, so $\widehat f(\sigma\theta)=0$. Every point of $W_\Theta$ has this form, hence $\widehat f$ vanishes on $W_\Theta$. [given, F1, F2, F3, A1]

2.1 Now assume $f\in C_c^\infty$ and its restricted data are zero. By [F2] and the stated Countable Choice assumption, those data use the compact-support Riemann line-integral convention. The compact-support Fourier-slice identity [F4] gives $\widehat f(\sigma\theta)=0$ for every $\theta\in\Theta$ and $\sigma\in\mathbb R$, so the transform vanishes on the measured wedge. The compact-support uniqueness result [F5] then yields $f=0$ everywhere through its separate choice-free analytic-continuation proof. [F2, F4, F5, given] ∎
