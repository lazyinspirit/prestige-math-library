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
Its fiber at $x$ is $\operatorname{ran}P(x)$ with the inner product inherited from $\mathbb C^d$, using $\langle v,w\rangle=v^*w$. The following finite-regularity convention fixes the meaning of $d$ here. If $s:U\to\mathbb C^d$ is $C^1$, then $ds_x:T_xM\to\mathbb C^d$ is its differential, whose coordinate coefficients are continuous. If a $C^1$ one-form is written in coordinates as $\alpha=\sum_{j=1}^n\alpha_j\,dx^j$, define
$$d\alpha=\sum_{1\leq j<k\leq n}(\partial_j\alpha_k-\partial_k\alpha_j)\,dx^j\wedge dx^k$$
componentwise, whenever its coefficients are $C^1$. These derivatives have continuous coefficients. The chain rule and symmetry of mixed second derivatives make the definitions independent of $C^2$ coordinate changes; on smooth forms they agree with the componentwise exterior derivative. Wedge products of these forms are the pointwise alternating products, with matrix multiplication in the coefficient factors when present. In particular, $dP$ is a $C^1$ matrix-valued one-form.

For an open $U\subseteq M$, a $C^1$ section of $E_P$ is a $C^1$ map $s:U\to\mathbb C^d$ with $Ps=s$. A Hermitian connection at this regularity is a complex-linear operation from such sections to continuous $E_P$-valued one-forms satisfying $\nabla(fs)=df\,s+f\nabla s$ for $f\in C^1(U,\mathbb C)$ and
$$d(s^*t)=(\nabla s)^*t+s^*\nabla t$$
for all $C^1$ sections $s,t$. Define the projected connection by $\nabla s=P\,ds$.

For a $C^2$ path $\gamma:[0,1]\to M$, with derivatives extending continuously to the endpoints, put $P_\gamma(t)=P(\gamma(t))$ and $K_\gamma(t)=[P_\gamma'(t),P_\gamma(t)]$. Kato transport along $\gamma$ is the matrix solution $W_\gamma'(t)=K_\gamma(t)W_\gamma(t)$, $W_\gamma(0)=I_d$.

The connection and Kato transport are defined from the projector family itself; no Schrödinger Hamiltonian or physical time evolution is needed. For a one-parameter $C^2$ family $H:[0,1]\to\operatorname{Herm}(\mathbb C^d)$, with derivatives through order two continuous up to the endpoints, suppose $P(s)$ is the orthogonal spectral projection onto a subset of the spectrum, is continuous in operator norm, and that subset has distance at least $g>0$ from its complementary spectrum for every $s$. Under Countable Choice, the earlier finite-dimensional adiabatic result gives $P\in C^2([0,1],\operatorname{End}(\mathbb C^d))$ of constant rank; restriction to $M=(0,1)$ supplies an example of the projector families defined here.

## Definition references

[[def-smooth-manifold]]

[[def-c-r-and-smooth-maps-between-smooth-manifolds]]

[[def-finite-dimensional-vector-valued-forms-and-their-exterior-derivative]]

[[def-countable-choice]]

[[thm-nrqm-controlled-dynamics-finite-gapped-adiabatic-estimate]]

