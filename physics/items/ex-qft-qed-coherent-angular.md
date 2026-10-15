---
id: ex-qft-qed-coherent-angular
kind: example
title: Fixed-vector transverse angular coefficient $8\pi/3$
status: published
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 4
deps:
  - lem-qft-qed-coherent-ir-obstruction
  - lem-euclidean-chart-measure-agrees-with-polar-surface-measure
  - def-surface-integral-on-a-compact-c-one-hypersurface
  - prop-degenerate-boxes-and-coordinate-hyperplanes-are-lebesgue-null
  - def-countable-choice
dependency_roles:
  lem-qft-qed-coherent-ir-obstruction: mathematical-premise
  lem-euclidean-chart-measure-agrees-with-polar-surface-measure: mathematical-premise
  def-surface-integral-on-a-compact-c-one-hypersurface: mathematical-premise
  prop-degenerate-boxes-and-coordinate-hyperplanes-are-lebesgue-null: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Jan Dereziński, Introduction to Representations of the Canonical Commutation and Anticommutation Relations, §§5.2–5.5 and 6.1
      url: https://arxiv.org/html/math-ph/0511030
      locator: Full author lecture-note HTML; bosonic Fock sectors, second quantization, and the Fock representation of the CCR.
    - title: David Tong, Quantum Field Theory, §6.2.1
      url: https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S6.html
      locator: Complete author-hosted Chapter 6 HTML; transverse photon modes and their angular polarization projection.
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

Let $e\in\mathbb R^3$ be a unit vector and $P_T(n)=I_3-nn^\top$ for $n\in S^2$. Then the angular coefficient in the coherent infrared family with $b(n)=\lambda P_T(n)e$, $\lambda\in\mathbb R\setminus\{0\}$, is
$$ \int_{S^2}|b(n)|^2\,d\Omega=\frac{8\pi\lambda^2}{3}. $$

## Facts & Assumptions

**Given:** The unit vector $e$, the scalar $\lambda\ne0$, and the transverse projection and angular integral in [[lem-qft-qed-coherent-ir-obstruction]].

[F1] [[lem-qft-qed-coherent-ir-obstruction]] uses $P_T(n)=I_3-nn^\top$ and $C_b=\int_{S^2}|b(n)|^2d\Omega$ for a measurable transverse $b\in L^2(S^2;\mathbb C^3)$.

[A1] $e\in\mathbb R^3$ is a unit vector and $\lambda\in\mathbb R\setminus\{0\}$, as stated in the Example.

[F2] [[lem-euclidean-chart-measure-agrees-with-polar-surface-measure]]: the Euclidean chart measure on $S^2$ equals polar surface measure and is invariant under orthogonal transformations.

[F3] [[def-surface-integral-on-a-compact-c-one-hypersurface]]: surface integration is the Euclidean chart integral with density $\sqrt{\det(DX^TDX)}$.

[F4] [[prop-degenerate-boxes-and-coordinate-hyperplanes-are-lebesgue-null]]: coordinate hyperplanes and singletons have Lebesgue measure zero, hence chart seams and poles have zero area when their coordinate parameter sets are null.

[A2] [[def-countable-choice]]: assume the same Countable Choice carried by the coherent-tail and surface-measure suppliers; no stronger choice principle is used.

## Verification

**Given:** [A1]–[A2], [F1]–[F4] and the specified $b(n)=\lambda P_T(n)e$.

1.1 Since [A1] gives $|e|=1$ and $|n|=1$, $|P_T(n)e|^2=e^\top(I_3-nn^\top)e=1-(n\cdot e)^2$. Rotational invariance in [F2] permits taking $e=(0,0,1)$. Use the chart $X(u,\phi)=(\sqrt{1-u^2}\cos\phi,\sqrt{1-u^2}\sin\phi,u)$ for $-1<u<1$ and $0<\phi<2\pi$. Its tangent vectors are orthogonal with squared lengths $(1-u^2)^{-1}$ and $1-u^2$, so [F3] gives area density $1$. The omitted azimuthal seam is a coordinate line in sphere graph charts, and each pole is a singleton in its graph chart; these parameter sets are null by [F4], and their chart integrals vanish. Thus with $u=n_3$ the angular integral is $2\pi\int_{-1}^{1}(1-u^2)\,du$. [A1, A2, F1, F2, F3, F4, algebra]

2.1 The integral equals $2\pi[u-u^3/3]_{-1}^{1}=8\pi/3$. Multiplying by $\lambda^2$ yields $C_b=8\pi\lambda^2/3>0$, which is the coefficient required by [F1]. [A1, A2, F1, step 1.1, algebra] ∎
