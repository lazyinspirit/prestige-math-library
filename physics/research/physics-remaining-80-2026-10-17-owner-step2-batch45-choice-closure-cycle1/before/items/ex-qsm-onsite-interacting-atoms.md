---
id: ex-qsm-onsite-interacting-atoms
kind: example
title: "Repulsive Fermi covariance and zero-temperature Bose occupation step"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 5
deps:
  - pthm-qsm-onsite-interacting-atoms
dependency_roles:
  pthm-qsm-onsite-interacting-atoms: physical-result
physical_scope: "A symmetric-parameter instance of the finite Fermi atom and a single Bose zero-temperature boundary in the isolated onsite models. No lattice or material-specific conclusion is drawn."
empirical_premises: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Immanuel Bloch, Jean Dalibard, and Wilhelm Zwerger, Many-body physics with ultracold gases, §§IV.A and IV.E"
      url: "https://arxiv.org/pdf/0704.3011"
---

## Example

For the Fermi atom of [[pthm-qsm-onsite-interacting-atoms]], set $h=0$, $\mu=\epsilon$, and $U>0$. Then $\Xi_F=3+e^{-\beta U}$ and $\operatorname{Cov}(n_\uparrow,n_\downarrow)=(e^{-\beta U}-1)/(3+e^{-\beta U})^2<0$. For the Bose site, set $\mu=\epsilon+U$ with $U>0$; the two zero-temperature minimizing occupations are $1$ and $2$, each with limiting Gibbs probability $1/2$, and the entropy tends to $k_B\log2$.

## Facts & Assumptions

**Given:** $\beta>0$, $U>0$, and the two exact onsite model statements.

[F1] [[pthm-qsm-onsite-interacting-atoms]]: at $h=0$, $\mu=\epsilon$, the Fermi covariance has the displayed formula; for the Bose site the boundary $\mu=\epsilon+Ur$ has exactly the adjacent minimizing occupations $r,r+1$ with equal zero-temperature limiting probabilities.

## Verification

1.1 Substituting $h=0$ and $\mu=\epsilon$ into the Fermi weights gives $w_\uparrow=w_\downarrow=1$, $w_2=e^{-\beta U}$, and $\Xi_F=3+e^{-\beta U}$. Since $U,\beta>0$, $e^{-\beta U}<1$, so [F1] gives the strictly negative covariance stated in the Example. [given, F1, algebra]

2.1 In the Bose result of [F1], set $r=1$ and $\mu=\epsilon+U$. The adjacent minimizing occupations are $1,2$, their limiting probabilities are $1/2,1/2$, and the binary entropy is $-k_B(2)(1/2)\log(1/2)=k_B\log2$. [given, F1, algebra] ∎
