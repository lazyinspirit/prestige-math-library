---
id: def-csm-frontier-ssep-diffusive-model
kind: definition
title: "Symmetric exclusion process under diffusive scaling"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 2
deps:
  - def-axiom-of-choice
  - def-csm-dk-finite-reversible-rate-model
  - def-csm-frontier-finite-generator-chain
  - lem-csm-frontier-finite-generator-chain-existence
  - lem-csm-frontier-ssep-sector-connectivity
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-csm-dk-finite-reversible-rate-model: mathematical-premise
  def-csm-frontier-finite-generator-chain: mathematical-premise
  lem-csm-frontier-finite-generator-chain-existence: mathematical-premise
  lem-csm-frontier-ssep-sector-connectivity: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: null
sources:
  references:
    - title: "S. R. S. Varadhan, Hydrodynamic Scaling, Chapter 4 lecture notes"
      url: "https://math.nyu.edu/~varadhan/Spring2012/Chapter4.pdf"
      locator: "Section 4.3, printed pp. 53–54: symmetric exclusion generator, time acceleration N^2, and empirical measure normalization N^-d."
    - title: "Claudio Landim, Hydrodynamic Limit of Interacting Particle Systems, complete lecture notes"
      url: "https://math.arizona.edu/~sethuram/588/Landim.pdf"
      locator: "Chapter 2, Section 2.1, printed pp. 72–74: finite torus exclusion generator, configuration sectors, and symmetric rates."
    - title: "Shiba Biswal and Nicolas Lanchier, The simple exclusion process on finite connected graphs"
      url: "https://arxiv.org/pdf/1906.01752"
      locator: "Section 3, Lemmas 5–6: fixed-particle configuration classes on a finite connected graph."
verification:
  precheck: pending
---

## Definition

Assume the Axiom of Choice, meaning every family of nonempty sets has a choice function. Fix an integer $d\ge1$ and an integer $N\ge3$. Let $\Lambda_N=(\mathbb Z/N\mathbb Z)^d$, with each coordinate represented by $0,1,\ldots,N-1$, and let $\mathcal E_N$ be the set of unordered nearest-neighbor bonds $\{x,x+e_i\}$, where $1\le i\le d$ and addition is modulo $N$. The condition $N\ge3$ makes this a simple graph with each bond listed once as $x$ ranges over $\Lambda_N$. The site graph is connected because any two coordinate tuples are joined by finitely many steps of $+e_i$ or $-e_i$.

The configuration space is $\Omega_N=\{\eta:\Lambda_N\to\{0,1\}\}$, ordered lexicographically by its binary occupation vector in the fixed site order; this labels it as a finite set $\{1,\ldots,2^{N^d}\}$. The occupation $\eta_x$ is $1$ for an occupied site and $0$ for a vacant site. For $b=\{x,y\}\in\mathcal E_N$, let $\eta^b$ be the configuration obtained by swapping $\eta_x$ and $\eta_y$.

The coordinates $x/N$ have dimensionless spacing $1/N$ on the unit torus, and $t$ is dimensionless diffusive time: it is the microscopic unit-rate bond clock accelerated by the factor $N^2$. Thus the continuum heat equation below has normalized diffusion coefficient $D=1$.

Define a rate matrix $L_N$ on $\Omega_N$ by giving each distinct state change $\eta\to\eta^b\ne\eta$ rate $N^2$ and setting the diagonal entry to the negative sum of the off-diagonal row. If the two occupations on a bond agree, swapping them produces no state change and contributes no off-diagonal transition. On a column observable $f:\Omega_N\to\mathbb R$, use the row-generator convention $(L_Nf)(\eta)=\sum_{\xi\ne\eta}L_N(\eta,\xi)(f(\xi)-f(\eta))$; a row probability vector evolves by $p'=pL_N$. The **symmetric simple exclusion process (SSEP)** is the uniformized finite-state chain with rate matrix $L_N$ and any specified initial probability vector. The finite-generator existence result supplies its all-pairs transition matrices $e^{tL_N}$ and càdlàg paths. Every jump conserves $\sum_{x\in\Lambda_N}\eta_x$.

For $k=0,1,\ldots,N^d$, the fixed-occupancy sector is $\Omega_{N,k}=\{\eta\in\Omega_N:\sum_x\eta_x=k\}$. When $0<k<N^d$, this sector has at least two states and its transition graph is connected by the fixed-occupancy connectivity lemma. Setting every sector energy to $0$, $\beta=1$, and each allowed transition rate to $N^2$ makes this sector a finite reversible stochastic rate model with uniform stationary weights. The sectors $k=0$ and $k=N^d$ are singleton constant chains. The full SSEP state graph is reducible across particle-number sectors; the generic finite rate-matrix construction, not the irreducible reversible-model definition, defines the full process.

Let $\mathbb T^d=(\mathbb R/\mathbb Z)^d$ with normalized Haar measure $dx$. For $x\in\Lambda_N$, write $x/N\in\mathbb T^d$ for the point with coordinates represented in $[0,1)$. The empirical measure and its action on a smooth periodic test function $G$ are

$$\pi_t^N:=N^{-d}\sum_{x\in\Lambda_N}\eta_x(t)\,\delta_{x/N},\qquad \langle\pi_t^N,G\rangle:=\int_{\mathbb T^d}G\,d\pi_t^N=N^{-d}\sum_{x\in\Lambda_N}\eta_x(t)G(x/N).$$

Here $\delta_y$ denotes unit point mass at $y$. Thus $\pi_t^N$ is a finite positive measure of total mass at most $1$, not necessarily a probability measure. For a smooth periodic $G$, define its discrete Laplacian on grid points by

$$\Delta_NG(x/N):=N^2\sum_{i=1}^d\bigl[G((x+e_i)/N)+G((x-e_i)/N)-2G(x/N)\bigr].$$

## Definition references

[[def-axiom-of-choice]]

[[def-csm-dk-finite-reversible-rate-model]]

[[def-csm-frontier-finite-generator-chain]]

[[lem-csm-frontier-finite-generator-chain-existence]]

[[lem-csm-frontier-ssep-sector-connectivity]]
