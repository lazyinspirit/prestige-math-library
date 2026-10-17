---
id: alg-emg-rational-electrovac-verification
kind: algorithm
title: Finite exact rational electrovac tensor verification
status: published
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: mathematics
dependency_level: 0
deps:
  - def-polynomial-ring-on-a-family-of-indeterminates
  - cor-polynomial-ring-on-a-finite-family-agrees-with-the-iterated-construction
  - cor-multivariate-polynomial-ring-over-a-domain-is-a-domain
  - def-field-of-fractions
  - thm-algebra-of-derivatives
  - lem-derivative-of-a-power
dependency_roles:
  def-polynomial-ring-on-a-family-of-indeterminates: mathematical-premise
  cor-polynomial-ring-on-a-finite-family-agrees-with-the-iterated-construction: mathematical-premise
  cor-multivariate-polynomial-ring-over-a-domain-is-a-domain: mathematical-premise
  def-field-of-fractions: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  lem-derivative-of-a-power: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Tim Adamo and E. T. Newman, The Kerr-Newman Metric: A Review, arXiv:1410.6626v2"
      url: https://arxiv.org/pdf/1410.6626
      locator: "Sections 2.1-2.2: Kerr-Newman metric and Maxwell field and their direct Einstein-Maxwell verification"
physical_scope: null
---


## Definition

**Inputs.** Fix the integral domain
$P=\mathbb Q[r,y,M,a,q]$ on the ordered variables $(r,y,M,a,q)$ and its field of fractions
$K=\operatorname{Frac}(P)$. A run receives a symmetric $4\times4$ matrix
$g=(g_{ij})$ and a covector $A=(A_i)$ with entries in $K$, represented by
finite sparse polynomial numerator-denominator pairs, together with a specified
polynomial $w\in P$. It also receives the chart hypothesis that $\det g$ is
nonzero in $K$ and that on the real open chart under consideration all input
denominators are nonzero and $w=\sqrt{|\det g|}>0$. The coordinate derivations
are $\delta_0=\delta_3=0$, $\delta_1=\partial_r$, and $\delta_2=\partial_y$.
The chart hypothesis is input; the procedure does not prove Lorentz signature
or check the volume identity. For geometric interpretation use the curvature
convention $R(X,Y)Z=\nabla_X\nabla_YZ-\nabla_Y\nabla_XZ-\nabla_{[X,Y]}Z$,
with $R^a{}_{bcd}$ the coefficient of $R(\partial_c,\partial_d)\partial_b$ and
$\operatorname{Ric}_{bd}:=R^a{}_{bad}$. Expanding this definition yields the
coordinate Ricci schedule in Instruction 3.

**Outputs.** Return the finite tables of: the sixteen entries of
$gg^{-1}-I$; the six independent components of
$F_{ij}:=\delta_iA_j-\delta_jA_i$; all sixteen raised components
$F^{ij}$; the four Maxwell-density residuals
$\sum_i\delta_i(wF^{ij})$; all sixty-four Christoffel entries; the sixteen
Ricci entries
$$\operatorname{Ric}_{ij} =\sum_k\left(\delta_k\Gamma^k{}_{ij}-\delta_j\Gamma^k{}_{ik}\right) +\sum_{k,l}\left(\Gamma^k{}_{kl}\Gamma^l{}_{ij} -\Gamma^k{}_{jl}\Gamma^l{}_{ik}\right);$$
the scalar $F_{ij}F^{ij}$; the sixteen entries of
$$\operatorname{Ric}_{ij} -2\left(F_{ik}F_j{}^k-\frac14g_{ij}F_{kl}F^{kl}\right);$$
the scalar curvature and the Ricci-square. For every output rational function,
return its numerator-denominator pair, its exact numerator-zero flag, and the
finite list of all divisor polynomials used.

**Instructions.**

1. Represent a polynomial by its finite set of exponent-vector/coefficient
   pairs. Addition merges equal exponent vectors, multiplication enumerates
   every pair of input monomials and collects equal exponent vectors, and
   $\partial_r,\partial_y$ differentiate each monomial by the integer-power
   rule of [[lem-derivative-of-a-power]]. Represent a rational function by $(p,d)$ with $p,d\in P$ and
   $d\ne0$. Addition and multiplication use cross-products, and division
   replaces $(p,d)/(u,v)$ by $(pv,du)$ only when $u\ne0$ in $P$.
   Differentiation uses $(p'd-pd',d^2)$.

2. Compute $\det g$ by its twenty-four signed permutation products and form
   $g^{-1}$ from cofactors divided by $\det g$. Record and check all sixteen
   entries of $gg^{-1}-I$.

3. All indices in this instruction range over $\{0,1,2,3\}$, and
   $g^{ij}:=(g^{-1})_{ij}$. Compute every $F_{ij}$, then raise indices by
   $F_j{}^k:=\sum_l g^{kl}F_{jl}$ and
   $F^{ij}:=\sum_{k,l}g^{ik}g^{jl}F_{kl}$. Compute all four
   $\sum_i\delta_i(wF^{ij})$. Compute every Christoffel entry by
   $\Gamma^i{}_{jk}=\frac12\sum_lg^{il}
   (\delta_jg_{lk}+\delta_kg_{jl}-\delta_lg_{jk})$, then all sixteen Ricci
   entries by the displayed formula, with no symmetry-based component omitted.
   Compute $F_{ij}F^{ij}$, every Einstein residual, $g^{ij}\operatorname{Ric}_{ij}$
   and $g^{ik}g^{jl}\operatorname{Ric}_{ij}\operatorname{Ric}_{kl}$ by their
   full finite contractions.

4. Record every polynomial divisor introduced by inversion, division, or a
   rational derivative in the admissibility list. Do not remove a divisor from
   that list when a later cancellation removes its factor from the displayed
   numerator or denominator. Return failure if any required divisor is the
   zero polynomial or an input denominator is zero.

A zero flag means exactly that the polynomial numerator is the zero element of
$P$. No floating-point tolerance, parameter sample, convergence test, or
choice of roots is part of the procedure. This is a finite mathematical
procedure; its operational correctness, termination, and resource bounds are
separate proved claims.

