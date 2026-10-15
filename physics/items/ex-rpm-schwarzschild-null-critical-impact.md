---
id: ex-rpm-schwarzschild-null-critical-impact
kind: example
title: "An exact turning ray and the critical Schwarzschild impact parameter"
status: published
origin: session
domain: physics
library: physics
dependency_level: 2
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
deps:
  - pthm-rpm-schwarzschild-null-scattering
  - lem-rpm-schwarzschild-null-geodesic-reduction
dependency_roles:
  pthm-rpm-schwarzschild-null-scattering: physical-result
  lem-rpm-schwarzschild-null-geodesic-reduction: mathematical-premise
physical_scope: "Exact Schwarzschild exterior geodesic example for the ideal-light model. It is not a finite-resolution image or measured lensing result."
sources:
  references:
    - title: "David Tong, General Relativity, author-hosted Chapter 1 HTML of the complete lecture notes, §§1.2.5 and 1.3.1–1.3.5 (printed pp. 24–46)"
      url: "https://davidtong.org/teaching/general-relativity/grhtml/S1"
    - title: "Sean Carroll, Lecture Notes on General Relativity, complete lecture notes, §7, pp. 177–179"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
---

## Example

Use the SI Schwarzschild convention of the scattering model: $s=2G_Nm_*/c^2>0$ and the areal radius $r>s$ are lengths in metres, with $m_*$ in kilograms, $G_N$ in cubic metres per kilogram per squared second, and $c$ in metres per second. The impact parameters $b,b_c$ are also lengths in metres; $H(r)=(1-s/r)/r^2$ has units inverse square metres, so $b^2H(r)$ is dimensionless. No numerical mass or measured length is stipulated. Take the incoming equatorial future-null rays with $E>0$ and $L\ge0$ of the scattering supplier, so $b=L/E=|L|/E$. The critical impact parameter is $b_c=3\sqrt3s/2$. Choose $b=2\sqrt2s>b_c$. The radial factor is $1-b^2(1-s/r)/r^2$.

1. At $r=2s$, this factor is $1-(8s^2)(1/2)/(4s^2)=0$. Because $2s>3s/2$ and $H(r)=(1-s/r)/r^2$ is strictly decreasing for $r>3s/2$, $r_*=2s$ is the unique outer turning point. The ideal incoming ray turns there and returns outward.
2. At the critical value, direct factorization gives

   $$1-b_c^2H(r)=\frac{(2r-3s)^2(r+3s)}{4r^3}.$$

   Thus the critical inward ray from infinity approaches $r=3s/2$ asymptotically, and the azimuthal integral diverges logarithmically; it does not complete a finite number of windings before reaching the circular orbit in affine parameter.

## Facts & Assumptions

**Given:** Schwarzschild exterior with $s>0$, an ideal future-null ray, and the impact-parameter classification theorem.

[F1] The critical impact parameter is $b_c=3\sqrt3s/2$, $H$ decreases for $r>3s/2$, and the radial first integral is $\dot r^2=E^2(1-b^2H)$ ([[lem-rpm-schwarzschild-null-geodesic-reduction]]).

[F2] For $b>b_c$ the incoming ray turns at its unique outer root; for $b=b_c$ it approaches the photon sphere with logarithmically divergent affine and angular integrals ([[pthm-rpm-schwarzschild-null-scattering]]).

## Verification

**Proof technique:** evaluate the radial factor at the proposed turning radius, use monotonicity for uniqueness, and factor the critical radial polynomial.


1.1 Since $(2\sqrt2s)^2=8s^2$ and $H(2s)=1/(8s^2)$, the radial factor vanishes at $2s$. Also $2\sqrt2s>3\sqrt3s/2$ because $32>27$, and $H$ is strictly decreasing above $3s/2$, so this is the unique outer root. The turning and return classification follows from [F2]. [given, F1, F2, algebra]

1.2 Substituting $b_c^2=27s^2/4$ and $H=(r-s)/r^3$ and expanding the numerator verifies the displayed factorization. The double zero at $r=3s/2$ and the theorem's affine and angular quadratures then give the critical asymptote and logarithmic divergence. [F1, F2, algebra]

2.1 These are exact ideal-geodesic conclusions in the Schwarzschild model; no wave-optics or observational statement is added. [step 1.1, step 1.2, given] ∎