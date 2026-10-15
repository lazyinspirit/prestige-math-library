---
id: ex-tdmath-nonunique-variational-minimizers
kind: example
title: Nonunique minimizers allow distinct local accumulation limits
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 7
deps:
  - thm-tdmath-continuum-variational-pressure
  - thm-tdmath-specific-entropy-density
  - lem-tdmath-relative-entropy-variational-and-chain-rules
  - def-tdmath-local-tame-topology
dependency_roles:
  thm-tdmath-continuum-variational-pressure: mathematical-premise
  thm-tdmath-specific-entropy-density: mathematical-premise
  lem-tdmath-relative-entropy-variational-and-chain-rules: mathematical-premise
  def-tdmath-local-tame-topology: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "H.-O. Georgii, Large deviations and the equivalence of ensembles for Gibbsian particle systems with superstable interaction"
      url: "https://www.mathematik.uni-muenchen.de/~georgii/papers/LDPsuperstable.pdf"
      locator: "Theorems 1–2, printed pp.178–181 / PDF pp.8–11: stationary variational minimizer set; this example is an abstract consequence, not an asserted phase-transition model."
---

## Example

Suppose $J(P)=I(P)+\beta\Phi(P)-\rho(P)\log z$ has two distinct stationary minimizers $P_0\ne P_1$ with equal finite value $m$. Every finite mixture $P_\theta=\theta P_0+(1-\theta)P_1$, $0\leq\theta\leq1$, also minimizes $J$. The sequence of stationary laws alternating between $P_0$ and $P_1$ has two distinct local accumulation points and does not converge. This conditional mathematical example shows why compactness alone yields minimizer-set accumulation; it does not assert a finite-volume ensemble realizes the sequence or that a particular continuum potential exhibits coexistence.

## Facts & Assumptions

**Given:** Two distinct stationary minimizers $P_0,P_1$ with finite equal minimum $m$.

[F1] [[thm-tdmath-continuum-variational-pressure]]: $\Phi(P)$ is the limit of normalized finite-volume expected energies, and $\rho(P)$ is expected unit-cell count.

[F2] [[thm-tdmath-specific-entropy-density]]: $I(P)$ is the large-cube limit of relative entropies against the unit-intensity Poisson reference.

[F3] [[lem-tdmath-relative-entropy-variational-and-chain-rules]]: relative entropy obeys the mixture-label chain rule and is nonnegative.

[F4] [[def-tdmath-local-tame-topology]]: $\tau_L$ tests every bounded measurable local observable.

## Verification

**Given:** The assumptions above.

1.1 Let $P,R$ be stationary laws of finite specific entropy and let $P_\theta=\theta P+(1-\theta)R$. For a bounded cube $G$, the binary-label chain rule [F3] gives $$ \theta D(P_G\Vert Q_G)+(1-\theta)D(R_G\Vert Q_G) =D((P_\theta)_G\Vert Q_G)+I(S;X_G), $$ where $S$ is the mixture label and $X_G$ the observed configuration. Since $0\leq I(S;X_G)\leq H(S)<\infty$, divide by $|G|$ and take the cube limit [F2]; $H(S)/|G|\to0$, so $I(P_\theta)=\theta I(P)+(1-\theta)I(R)$. The expectation defining $\rho$ is affine. For finite energy densities, $E_{P_\theta}H_G=\theta E_PH_G+(1-\theta)E_RH_G$ for every $G$; dividing by volume and taking limits gives affinity of $\Phi$. Thus $J$ is affine on finite mixtures of finite-$J$ laws. [F1, F2, F3, algebra]

2.1 Applying step 1.1 to $P_0,P_1$ gives $J(P_\theta)=\theta J(P_0)+(1-\theta)J(P_1)=m$, so every mixture is a minimizer. Put $P_{2n}=P_0$ and $P_{2n+1}=P_1$. The even and odd subsequences converge locally to $P_0$ and $P_1$. Since distinct laws differ on a bounded-region measurable event, its indicator is a bounded local test by [F4] with different expectations; the full sequence therefore has no $\tau_L$ limit. Both accumulation points are minimizers. [given, F4, step 1.1, algebra] ∎
