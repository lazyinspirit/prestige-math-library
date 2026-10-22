---
id: def-nrqmx-smooth-projector-bundle
kind: definition
domain: mathematics
library: mathematics
title: C2 projector bundles and Kato transport
status: draft
origin: pipeline
dependency_level: 0
deps:
  - def-smooth-manifold
  - def-c-r-and-smooth-maps-between-smooth-manifolds
  - def-finite-dimensional-vector-valued-forms-and-their-exterior-derivative
  - def-countable-choice
  - thm-nrqm-controlled-dynamics-finite-gapped-adiabatic-estimate
justified_by:
  - lem-nrqmx-projector-bundle-kato-well-definedness
dependency_roles:
  def-smooth-manifold: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  def-finite-dimensional-vector-valued-forms-and-their-exterior-derivative: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-nrqm-controlled-dynamics-finite-gapped-adiabatic-estimate: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: David Tong, Applications of Quantum Mechanics, University of Cambridge lecture notes
      url: https://www.damtp.cam.ac.uk/user/tong/aqm/aqm.pdf
    - title: J. E. Avron, R. Seiler, and L. G. Yaffe, Adiabatic Theorems and Applications to the Quantum Hall Effect
      url: https://phsites.technion.ac.il/avron/wp-content/uploads/sites/3/2013/05/commun_math_phys_110_33-49_1987.pdf
---

## Definition

Let $M$ be a finite-dimensional smooth manifold, let $d\geq1$ be an integer, and give $\mathbb C^d$ its standard Hermitian inner product. Let $P:M\to\operatorname{End}(\mathbb C^d)$ be a $C^2$ map such that $P(x)^2=P(x)=P(x)^*$ and $\operatorname{rank}P(x)=r$ is constant. Define
$$E_P=\{(x,v)\in M\times\mathbb C^d:P(x)v=v\},\qquad \pi(x,v)=x.$$
Its fiber at $x$ is $\operatorname{ran}P(x)$ with the inner product inherited from $\mathbb C^d$. For a $C^1$ section $s:U\to\mathbb C^d$ over an open $U\subseteq M$ satisfying $P s=s$, define the projected connection by $\nabla s=P\,ds$, where $d$ is the componentwise exterior derivative. For a $C^2$ path $\gamma:[0,1]\to M$, put $P_\gamma(t)=P(\gamma(t))$ and $K_\gamma(t)=[P_\gamma'(t),P_\gamma(t)]$. Kato transport along $\gamma$ is the matrix solution $W_\gamma'(t)=K_\gamma(t)W_\gamma(t)$, $W_\gamma(0)=I_d$.

The connection and Kato transport are defined from the projector family itself; no Schrödinger Hamiltonian or physical time evolution is needed. A coherent uniformly gapped spectral projection of a $C^2$ finite Hermitian family is one source of such a $C^2$ family: under Countable Choice, an earlier finite-dimensional adiabatic result supplies that regularity.

## Definition references

[[def-smooth-manifold]]

[[def-c-r-and-smooth-maps-between-smooth-manifolds]]

[[def-finite-dimensional-vector-valued-forms-and-their-exterior-derivative]]

[[def-countable-choice]]

[[thm-nrqm-controlled-dynamics-finite-gapped-adiabatic-estimate]]

