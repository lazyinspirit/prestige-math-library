---
id: ex-tgrx-fr-stationary-entropy
kind: example
title: f(R) stationary entropy coefficient
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 4
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - pthm-tgrx-noether-first-law
  - pthm-tgrx-noether-horizon-entropy-variation
dependency_roles:
  pthm-tgrx-noether-first-law: physical-result
  pthm-tgrx-noether-horizon-entropy-variation: physical-result
physical_scope: >
  Classical f(R) metric Lagrangians on smooth stationary nondegenerate
  bifurcate horizons under the algebraic-curvature assumptions of the
  stationary Noether first law. This is not a dynamical entropy law.
sources:
  references:
    - title: "Vivek Iyer and Robert M. Wald, Some Properties of Noether Charge and a Proposal for Dynamical Black Hole Entropy, §§4–6"
      url: "https://arxiv.org/pdf/gr-qc/9403028"
    - title: "Geoffrey Compère and Adrien Fiorucci, Advanced Lectures on General Relativity, §1.3.3"
      url: "https://arxiv.org/pdf/1801.07064"
verification:
  precheck: pending
---

## Example

In units with $c=1$, let $\mathcal L=f(R)\boldsymbol\epsilon_g/(16\pi G)$, where $G>0$ is Newton's constant and $f$ is $C^1$ on an open interval containing the scalar-curvature values on $B$. The function $f$ has the units of $R$ and $f'(R)$ is dimensionless. Under the same smooth stationary horizon assumptions as the preceding theorem,
$$S_W=\frac{k_B}{4G\hbar}\int_B f'(R)\,dA_B.$$
The example computes the Noether-charge functional only; it asserts no monotonicity along a dynamical horizon.

## Facts & Assumptions

**Given:** The algebraic-curvature stationary data and $C^1$ function $f$ in the Example.

[F1] [[pthm-tgrx-noether-horizon-entropy-variation]]: for an algebraic-curvature Lagrangian, $S_W=-(2\pi k_B/\hbar)\int_B P^{abcd}\epsilon_{ab}\epsilon_{cd}\,dA_B$.

[F2] The curvature convention and scalar $R=g^{ac}g^{bd}R_{abcd}$ are those explicitly fixed in the Statement of [[pthm-tgrx-noether-horizon-entropy-variation]].

## Verification

**Given:** The Lagrangian and curvature convention of the Example and [F1]–[F2].

1.1 Holding $g$ fixed and varying only the algebraic curvature slot gives
$$\delta\ell=\frac{f'(R)}{16\pi G}\delta R
=\frac{f'(R)}{32\pi G}(g^{ac}g^{bd}-g^{ad}g^{bc})\delta R_{abcd},$$
because $\delta R_{abcd}=-\delta R_{abdc}$ and exchanging $c,d$ in the second summand changes its sign. Thus $P^{abcd}=\frac{f'(R)}{32\pi G}(g^{ac}g^{bd}-g^{ad}g^{bc})$. [F1, F2, algebra]

1.2 Contracting with the normalized binormal gives
$$P^{abcd}\epsilon_{ab}\epsilon_{cd}
=\frac{f'(R)}{32\pi G}\bigl(\epsilon^{cd}\epsilon_{cd}-\epsilon^{dc}\epsilon_{cd}\bigr)
=-\frac{f'(R)}{8\pi G},$$
since $\epsilon^{cd}\epsilon_{cd}=-2$ and $\epsilon^{dc}\epsilon_{cd}=2$. Substitute this pointwise contraction into [F1] and integrate over $B$ to obtain the displayed expression. The integral allows $R$ and $f'(R)$ to vary over the horizon. [F1, step 1.1, algebra] ∎
