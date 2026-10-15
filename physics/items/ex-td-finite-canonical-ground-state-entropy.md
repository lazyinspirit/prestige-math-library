---
id: ex-td-finite-canonical-ground-state-entropy
kind: example
title: Residual entropy in a finite canonical model
status: draft
origin: pipeline
domain: physics
library: physics
physical_scope: A finite discrete Gibbs preparation with a specified energy gap and entropy convention, using a positive Kelvin-valued canonical parameter; no identification with an entropy-derived macroscopic temperature, macroscopic entropy postulate, or empirical material is assumed.
deps:
  - def-td-si-quantities
  - def-td-temperature-pressure-chemical-potential
  - def-natural-logarithm
  - thm-natural-logarithm-laws
  - thm-exponential-limits-and-range
  - thm-logarithm-slower-than-every-positive-power
dependency_roles:
  def-td-si-quantities: formulation-prerequisite
  def-td-temperature-pressure-chemical-potential: formulation-prerequisite
  def-natural-logarithm: mathematical-premise
  thm-natural-logarithm-laws: mathematical-premise
  thm-exponential-limits-and-range: mathematical-premise
  thm-logarithm-slower-than-every-positive-power: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: David Tong, Statistical Physics, complete Chapter 4 lecture-note PDF, §4.5
      url: https://davidtong.org/pdfs/teaching/statistical-physics/statphys4.pdf
    - title: Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, Chapter 2, §2.6.2
      url: https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/CH02.pdf
dependency_level: 6
---

## Example

Let $X=\{1,\ldots,N\}$ be a finite set of microstates with energy values $E_i$ in joules. Let $E_0=\min_i E_i$, let exactly $g\ge1$ states have energy $E_0$, and suppose every other state has energy at least $E_0+\Delta$ for one fixed gap $\Delta>0$ joules. For $T>0$ kelvins, use $T$ as the positive parameter in this finite canonical model and adopt the probabilities
$
w_i(T)=\exp\!\left(-\frac{E_i-E_0}{k_{\mathrm B}T}\right),\qquad
Z(T)=\sum_{i=1}^{N}w_i(T),\qquad
p_i(T)=\frac{w_i(T)}{Z(T)}
$
and the model entropy
$
S_G(T)=-k_{\mathrm B}\sum_{i=1}^{N}p_i(T)\log p_i(T).
$
Then
$
\lim_{T\downarrow0}S_G(T)=k_{\mathrm B}\log g.
$
This is a calculation for the adopted finite statistical model, not a deduction of the canonical preparation from macroscopic thermodynamics.

## Facts & Assumptions

**Given:** The finite state set, its energy values, the positive gap, $T>0$, and the specified canonical probabilities and entropy in the Example.

[F1] [[def-td-si-quantities]]: $k_{\mathrm B}>0$ has units $\mathrm{J\,K^{-1}}$, so each exponent is dimensionless and $S_G$ is in $\mathrm{J\,K^{-1}}$.

[F2] [[def-td-temperature-pressure-chemical-potential]]: The macroscopic thermodynamic temperature $T_c$ is the entropy-derived state function $1/S_{c,U}$ on a designated open chart. The canonical parameter $T$ here is not identified with that function; the Gibbs probabilities are adopted as a separate finite model.

[F3] [[def-natural-logarithm]]: $\log$ is the natural logarithm with domain $(0,\infty)$.

[F4] [[thm-natural-logarithm-laws]]: $\log$ is continuous and strictly increasing, and $\log(1/x)=-\log x$ for $x>0$.

[F5] [[thm-exponential-limits-and-range]]: $\exp(x)\to0$ as $x\to-\infty$.

[F6] [[thm-logarithm-slower-than-every-positive-power]]: $\log x/x\to0$ as $x\to+\infty$.

## Verification

1.1 In the limit of the stipulated canonical parameter $T\downarrow0$ [F2], each excited state $i\notin G:=\{i:E_i=E_0\}$ has $(E_i-E_0)/(k_{\mathrm B}T)\to+\infty$, so $w_i(T)\to0$ by [F5]. Ground-state weights are $1$. Since there are finitely many states, $Z(T)\to g$, each ground-state probability tends to $1/g$, and each excited-state probability tends to $0$. [given, F1, F2, F5, algebra]

2.1 By continuity of $\log$ at $1/g>0$ from [F4], the total ground-state contribution to entropy tends to $ -k_{\mathrm B}g\frac1g\log(1/g)=k_{\mathrm B}\log g. $ [F1, F3, F4, step 1.1, algebra]

2.2 For an excited state with $p_i(T)\to0$, set $x=1/p_i(T)\to+\infty$. By [F4], $p_i\log p_i=-\log(x)/x$, which tends to $0$ by [F6]. The finite sum of excited-state contributions therefore tends to $0$. [F3, F4, F6, step 1.1, algebra]

3.1 Combining the ground and excited contributions in the finite sum gives $S_G(T)\to k_{\mathrm B}\log g$. In the $g=1$ case this limit is $0$; for $g>1$ it is positive because $\log$ is strictly increasing and $\log1=0$. [F1, F4, step 2.1, step 2.2, algebra] ∎
