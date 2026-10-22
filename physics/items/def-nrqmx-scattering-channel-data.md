---
id: def-nrqmx-scattering-channel-data
kind: definition
domain: mathematics
library: mathematics
title: Wave, scattering and channel operators
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 0
deps:
  - def-axiom-of-choice
  - def-bounded-linear-operator
  - def-symmetric-self-adjoint-and-essentially-self-adjoint
  - lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group
  - thm-canonical-spectral-type-decomposition
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group: mathematical-premise
  thm-canonical-spectral-type-decomposition: mathematical-premise
proof_strategy: not-applicable
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "D. R. Yafaev, Lectures on Scattering Theory, Lectures 1–2, especially Definitions 1.1–1.3 and equations (2.14)–(2.16)"
      url: "https://arxiv.org/pdf/math/0403213"
      locator: "PDF pp.2–3 and 10–11: wave and scattering operators, completeness, spectral representation, stationary scattering matrix."
---

## Definition

Assume the Axiom of Choice. Let $\mathcal H_0,\mathcal H$ be separable complex Hilbert spaces, $H_0$ and $H$ self-adjoint operators on them, and $J:\mathcal H_0\to\mathcal H$ a bounded linear map. Write $E_{H_0}$ and $E_H$ for their spectral projection valued measures. The absolutely continuous subspace $\mathcal H_{\mathrm{ac}}(H_0)$ consists of vectors $u$ for which the scalar measure $B\mapsto\|E_{H_0}(B)u\|^2$ is absolutely continuous with respect to Lebesgue measure; $P_{\mathrm{ac}}(H_0)$ is its orthogonal projection. Define the two-space wave operators, when the pointwise strong limits exist on $\mathcal H_0$, by

$$\Omega_\pm(H,H_0;J):=\operatorname*{s-lim}_{t\to\pm\infty} e^{itH}J e^{-itH_0}P_{\mathrm{ac}}(H_0),$$

where a strong limit means that for every $u\in\mathcal H_0$ the vector-valued expression converges in $\mathcal H$. The two signs are separate limits. When $J=I$ and $\mathcal H_0=\mathcal H$, write $\Omega_\pm(H,H_0)$. A wave operator is complete when its range is all of $\mathcal H_{\mathrm{ac}}(H)$. When both wave operators exist and are isometries on $\mathcal H_{\mathrm{ac}}(H_0)$, the scattering operator on that subspace is

$$S(H,H_0;J):=\Omega_+^*\Omega_-.$$

Whenever both wave operators exist, are isometries on $\mathcal H_{\mathrm{ac}}(H_0)$, and are complete with range $\mathcal H_{\mathrm{ac}}(H)$, the scattering operator $S(H,H_0;J)$ is unitary. For a fixed integer $r\ge1$ and an open energy interval $I\subset\mathbb R$, finite-channel data consists of the standard space $\mathbb C^r$ and a matrix field $S:I\to U(r)$, where

$$U(r):=\{U\in M_r(\mathbb C):U^*U=UU^*=I_r\}.$$

Here $U^*$ is conjugate transpose, $\operatorname{tr}U=\sum_{j=1}^r U_{jj}$, and $\det U$ is the usual alternating determinant. This matrix field is separate specified data; the definition does not assert that it is obtained from the abstract wave operators above.

## Channel diagram

```tikzcd
\mathcal H_{\mathrm{ac}}(H_0)
  \arrow[r, "\Omega_-"]
  \arrow[dr, "S"']
&
\mathcal H
  \arrow[d, "\Omega_+^*"]
\\
&
\mathcal H_{\mathrm{ac}}(H_0)
```

The upper arrow is $\Omega_-$ restricted to the free absolutely continuous subspace. The right arrow is the full adjoint $\Omega_+^*:\mathcal H\to\mathcal H_{\mathrm{ac}}(H_0)$; its codomain restriction follows from the factor $P_{\mathrm{ac}}(H_0)$ in the definition of $\Omega_+$. Whenever both limits exist, the diagonal arrow is their composite; if both are also isometries, this is the scattering operator $S=\Omega_+^*\Omega_-$ defined above. The diagram records this composition only and asserts neither existence nor completeness.

## Definition references

[[def-axiom-of-choice]]

[[def-bounded-linear-operator]]

[[def-symmetric-self-adjoint-and-essentially-self-adjoint]]

[[lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group]]

[[thm-canonical-spectral-type-decomposition]]
