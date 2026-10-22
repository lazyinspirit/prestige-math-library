---
id: prop-gr-fx-on-shell-current-closure
kind: proposition
title: On-shell closure and finite-region symplectic flux
status: draft
origin: pipeline
domain: mathematics
dependency_level: 3
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
deps:
  - def-gr-fx-covariant-presymplectic-current
  - lem-gr-fx-variation-commutator-identity
  - thm-stokes-theorem-for-smooth-singular-chains
dependency_roles:
  def-gr-fx-covariant-presymplectic-current: mathematical-premise
  lem-gr-fx-variation-commutator-identity: mathematical-premise
  thm-stokes-theorem-for-smooth-singular-chains: mathematical-premise
sources:
  references:
    - title: "Vivek Iyer and Robert M. Wald, Some Properties of Noether Charge and a Proposal for Dynamical Black Hole Entropy, §3, equations (44)–(47)"
      url: "https://arxiv.org/pdf/gr-qc/9403028"
    - title: "Geoffrey Compère and Adrien Fiorucci, Advanced Lectures on General Relativity, §1.3.1"
      url: "https://arxiv.org/pdf/1801.07064"
    - title: "Daniel Harlow and Jie-qiang Wu, Covariant phase space with boundaries, §2.2, equation (2.25)"
      url: "https://arxiv.org/pdf/1906.08616"
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Statement

Let $\mathcal L$ have a chosen first-variation decomposition with Euler
functional $E_\phi$. Take a smooth two-parameter field family and its
commuting coordinate variations $\delta_1,\delta_2$. If $E_\phi=0$ and each
variation satisfies the linearized equation, meaning
$(\delta_iE_\phi)[\eta]=0$ for every smooth test variation $\eta$ with the
input held fixed as in the definition, then $d_M\omega=0$. For a finite
oriented smooth singular four-chain $C$ with
$\partial C=\Sigma_2-\Sigma_1+B$, where the $\Sigma_i$ are oriented
three-chains and $B$ is the remaining oriented boundary chain,

$$\Omega_{\Sigma_2}-\Omega_{\Sigma_1}=-\int_B\omega.$$

Thus on-shell closure alone gives independence between cuts only when the
side flux vanishes.

## Statement references

[Some Properties of Noether Charge, §3](https://arxiv.org/pdf/gr-qc/9403028)

[Advanced Lectures on General Relativity, §1.3.1](https://arxiv.org/pdf/1801.07064)

[Covariant phase space with boundaries, §2.2](https://arxiv.org/pdf/1906.08616)

## Facts & Assumptions

**Given:** A chosen first-variation decomposition, a smooth two-parameter field family with commuting coordinate variations, a solution $\phi$ whose Euler functional vanishes, two variations satisfying the stated linearized equations, and a finite oriented smooth singular four-chain $C$ whose boundary is $\Sigma_2-\Sigma_1+B$.

[A1] $E_\phi=0$, and for each $i\in\{1,2\}$, $(\delta_iE_\phi)[\eta]=0$ for every smooth test variation $\eta$, with the input held fixed as specified in the chosen decomposition.

[F1] For commuting variations, $d_M\omega=(\delta_1E_\phi)[\delta_2\phi]-(\delta_2E_\phi)[\delta_1\phi]$. [[lem-gr-fx-variation-commutator-identity]]

[F2] For a finite smooth singular chain and a smooth form, $\int_C d\omega=\int_{\partial C}\omega$; chain integration is finite and linear. [[thm-stokes-theorem-for-smooth-singular-chains]]

[F3] $\Omega_\Sigma=\int_\Sigma\omega$ for each finite oriented smooth singular three-chain $\Sigma$. [[def-gr-fx-covariant-presymplectic-current]]

## Proof

**Given:** As in [A1] and [F1]–[F3].

1.1 By [A1], $(\delta_1E_\phi)[\delta_2\phi]=(\delta_2E_\phi)[\delta_1\phi]=0$. Substitution in [F1] gives $d_M\omega=0$ throughout the region. [A1, F1]

2.1 Apply [F2] to $C$: $0=\int_Cd_M\omega=\int_{\partial C}\omega =\Omega_{\Sigma_2}-\Omega_{\Sigma_1}+\int_B\omega$. The last equality uses the oriented boundary decomposition in the Given line and the linearity in [F2]–[F3]. [A1, F2, F3, step 1.1]

3.1 Rearranging step 2.1 gives $\Omega_{\Sigma_2}-\Omega_{\Sigma_1}=-\int_B\omega$. If $\int_B\omega=0$, the two cut forms agree; without that condition the identity permits a nonzero difference. [step 2.1, algebra] ∎

## Remarks

The chain is finite and compact in the sense of being a finite sum of compact simplex domains. No limit at spatial infinity, falloff assumption, or convergence of an exhaustion is included.
