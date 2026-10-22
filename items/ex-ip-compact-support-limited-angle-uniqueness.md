---
id: ex-ip-compact-support-limited-angle-uniqueness
kind: example
title: A compactly supported bump remains uniquely determined from limited angles
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
deps:
  - def-ip-visible-covector-for-limited-angle-data
  - lem-smooth-bump-between-concentric-euclidean-balls
  - lem-ip-compact-support-fourier-laplace-is-entire
  - thm-ip-fourier-slice-identity
  - cor-ip-limited-angle-compact-support-uniqueness
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
      locator: "§2.1, pp. 4–5, Theorems 2.1–2.2: Fourier-slice identity and full-angle uniqueness by Fourier inversion."
    - title: "Venkataswaran P. Krishnan and Eric Todd Quinto, Microlocal Analysis in Tomography"
      url: "https://math.tifrbng.res.in/~vkrishnan/Papers/Microlocal_Analysis_Tomography.pdf"
      locator: "§1.3.2, pp. 13–14, Theorem 3 and its complete compact-support uniqueness proof."
---

## Example

Let $\Theta\subset S^1$ be a nonempty proper open antipodally symmetric set whose complement contains a nonempty open arc. Write $\theta^\perp=(-\theta_2,\theta_1)$ and define the line Radon integral by $Rg(\theta,s)=\int_{\mathbb R}g(s\theta+t\theta^\perp)\,dt$ using the compact-support Riemann integral in $t$. Choose a smooth function $\psi$ supported in $B_1(0)$ and equal to one on $\overline B_{1/2}(0)$. For every $h\in C_c^\infty(B_1(0);\mathbb C)$, equality of the restricted line data $Rh(\theta,s)=R\psi(\theta,s)$ for all $\theta\in\Theta$ and $s\in\mathbb R$ forces $h=\psi$. The Fourier-Laplace transforms of these compactly supported functions are entire in each complex frequency coordinate, so their agreement on the measured open wedge determines their values at every real frequency. In particular, $R\psi$ is not identically zero.

## Example references

[[def-ip-visible-covector-for-limited-angle-data|Measured Fourier wedge and blind directions]]

[[lem-ip-compact-support-fourier-laplace-is-entire|Compact-support entire Fourier-Laplace transform]]

[[cor-ip-limited-angle-compact-support-uniqueness|Choice-free compact-support uniqueness from an open set of angles]]

[Mikko Salo, On geometric inverse problems and microlocal analysis, §2.1](https://users.jyu.fi/~salomi/pub/RICAM_notes_v1.pdf)

[Venkataswaran P. Krishnan and Eric Todd Quinto, Microlocal Analysis in Tomography, §1.3.2](https://math.tifrbng.res.in/~vkrishnan/Papers/Microlocal_Analysis_Tomography.pdf)

## Facts & Assumptions

**Given:** The set $\Theta$, a smooth bump $\psi$ supported in $B_1(0)$ and equal to one on $\overline B_{1/2}(0)$, and a compactly supported smooth function $h$ with the same restricted line data as $\psi$.

[F1] [[def-ip-visible-covector-for-limited-angle-data]]: the Fourier wedge of measured line normals is $W_\Theta=\{\sigma\theta:\theta\in\Theta,\ \sigma\ne0\}$, a nonempty open sector when $\Theta$ is nonempty and open.

[F2] [[lem-smooth-bump-between-concentric-euclidean-balls]]: a smooth compactly supported function equal to one on a smaller concentric ball and supported in a larger ball exists.

[F3] [[lem-ip-compact-support-fourier-laplace-is-entire]]: the compact-support Riemann Fourier-Laplace transform is entire in each coordinate and restricts to the usual compact-support Fourier transform on real frequencies.

[F4] [[thm-ip-fourier-slice-identity]]: with the compact-support Riemann line-integral convention, the Fourier transform of Radon data equals the object Fourier transform on the ray $\sigma\theta$.

[F5] [[cor-ip-limited-angle-compact-support-uniqueness]]: zero limited-angle data for a compactly supported smooth function force that function to vanish everywhere, by the choice-free analytic-continuation argument.

## Verification

**Proof technique:** direct.

1.1 The ball $B_1(0)$ contains a smaller concentric ball, so [F2] supplies a bump with the stated support and plateau. It is nonzero because it equals one on the nonempty inner ball. [F2, given, construct]

1.2 If $h$ has the same restricted data as $\psi$, linearity of the line integral gives $R(h-\psi)(\theta,s)=0$ for every measured pair. By [F4], the Fourier transforms of $h$ and $\psi$ agree on $W_\Theta$; [F3] identifies these values as restrictions of their coordinate-entire Fourier-Laplace transforms. Applying [F5] to the compactly supported difference $h-\psi$ gives $h-\psi=0$ everywhere. [F1, F3, F4, F5, given]

2.1 If the data of $\psi$ were zero, [F5] would imply $\psi=0$, contradicting its value one on $\overline B_{1/2}(0)$. Thus its restricted data are nonzero while uniquely determining it in the stated compact-support class. [F5, step 1.1, algebra] ∎
