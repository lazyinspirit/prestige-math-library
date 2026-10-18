---
id: ex-conservative-overlap-transfer-under-smooth-deforming-flow
kind: example
title: "A smooth deforming flow remaps two cell averages conservatively"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps:
  - def-characteristic-cell-overlap-remapping
  - thm-periodic-c1-velocity-has-global-characteristic-flow
  - lem-periodic-characteristic-map-is-orientation-preserving
  - lem-periodic-flow-departure-cells-have-positive-finite-volume
  - def-countable-choice
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "European Centre for Medium-Range Weather Forecasts, Numerical Methods, Meteorological Training Course Lecture Series, 2002"
      url: "https://www.ecmwf.int/sites/default/files/elibrary/2002/16948-numerical-methods.pdf"
---

## Example

Assume Countable Choice. On the unit torus take the smooth autonomous velocity $b(x)=\sin(2\pi x)$ and any fixed time $T>0$. Its exact flow $\Phi=\Phi_{T,0}$ is an orientation-preserving diffeomorphism. Use source and arrival cells $C_1=A_1=[0,1/4)$ and $C_2=A_2=[1/4,1)$ in a fundamental interval, with initial cell averages $(\rho_1^0,\rho_2^0)=(1,0)$. The flow fixes $0$ and $1/2$; on $(0,1/2)$ it moves points strictly to the right. Define $r:=\Phi^{-1}(1/4)$.

## Facts & Assumptions

**Given:** Countable Choice, the velocity, flow, two-cell partition, initial averages, and remapping formula of [[def-characteristic-cell-overlap-remapping]].

[A1] [[def-countable-choice]]: countable choice is assumed in the Lebesgue-measurable-volume definition of the remap.

[F1] [[thm-periodic-c1-velocity-has-global-characteristic-flow]]: the smooth periodic velocity has a unique global flow, and constant solutions at zeros of $b$ remain fixed.

[F2] [[lem-periodic-characteristic-map-is-orientation-preserving]]: $\Phi$ is an increasing diffeomorphism of the periodic lift and has an increasing inverse.

[F3] [[def-characteristic-cell-overlap-remapping]]: $D_i=\Phi^{-1}(A_i)$, $\overline\rho_i=|D_i|^{-1}\sum_j|D_i\cap C_j|\rho_j^0$, and $\rho_i^1=(|D_i|/|A_i|)\overline\rho_i$.

[F4] [[lem-periodic-flow-departure-cells-have-positive-finite-volume]]: under Countable Choice, the departure cells and their Lebesgue volumes are well defined and positive.

## Proof

1.1 Since $b(x)>0$ on $(0,1/2)$, the forward trajectory from $1/4$ strictly increases and cannot reach the equilibrium $1/2$ at finite time by uniqueness in [F1]. Thus $\Phi(1/4)>1/4$, while $\Phi(0)=0$ and $\Phi(1/2)=1/2$. Monotonicity in [F2] gives $0<r<1/4$. With representatives in the open fundamental interval $(0,1)$, $D_1=(0,r)$ and $D_2=[r,1)$, so $|D_1|=r$, $|D_2|=1-r$, and the nonzero overlaps with the occupied source cell $C_1\cap(0,1)$ are $|D_1\cap C_1|=r$ and $|D_2\cap C_1|=1/4-r$. [given, A1, F1, F2, F4, algebra]

2.1 Formula [F3] gives $\overline\rho_1=1$ and $\overline\rho_2=(1/4-r)/(1-r)$. Since $|A_1|=1/4$ and $|A_2|=3/4$, the arrival averages are $\rho_1^1=4r>0$ and $\rho_2^1=\frac43(1/4-r)>0$. Their total mass is $\frac14\rho_1^1+\frac34\rho_2^1=r+(1/4-r)=1/4$, equal to the initial mass $\frac14\cdot1+\frac34\cdot0$. [given, A1, F3, F4, step 1.1, algebra] ∎
