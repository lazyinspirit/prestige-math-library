---
id: def-cft-rank-one-square-zero-lattice-data
kind: definition
title: Explicit rank-one square-zero lattice fields
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: mathematics
dependency_level: 1
deps:
  - def-cft-feigin-fuchs-oscillator-data
  - def-formal-distribution-on-a-vector-space
dependency_roles:
  def-cft-feigin-fuchs-oscillator-data: mathematical-premise
  def-formal-distribution-on-a-vector-space: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: Dražen Adamović and Antun Milas, Lattice construction of logarithmic modules for certain vertex algebras
      url: https://arxiv.org/pdf/0902.3417v2
      locator: Sections 3–4, the rank-one lattice conventions and the extension $V_L\oplus V_{L-\alpha/p}$; the associated fields and square-zero sector are reconstructed explicitly here
    - title: Dražen Adamović and Antun Milas, On the triplet vertex algebra W(p)
      url: https://arxiv.org/pdf/0707.1857v2
      locator: Section 1, printed pp. 4–5, the lattice, conformal vector, screenings, and exponential product
---

## Definition

Fix an integer $p\ge2$. Let $P=\mathbb C[x_1,x_2,\ldots]$ with finite-variable polynomials, and for each $t\in\mathbb Q$ let $\mathcal F_t=P e^{t\alpha}$ be a labelled copy of $P$. On $\mathcal F_t$ define $\alpha_{-n}=x_n$, $\alpha_n=2pn\partial_{x_n}$ for $n\ge1$, and $\alpha_0=2pt I$. Let $L=\mathbb Z\alpha$ have bilinear form $\langle r\alpha,s\alpha\rangle=2prs$. For $\epsilon\in\{0,1\}$ define the sector of state charge $r=m-\epsilon/p$ by
$$\mathcal A_\epsilon=\bigoplus_{m\in\mathbb Z}\mathcal F_{m-\epsilon/p},\qquad \mathcal A=\mathcal A_0\oplus\mathcal A_1.$$
Write $V_L=\mathcal A_0$ and $I=\mathcal A_1$. Define two module sectors by
$$\mathcal M_\epsilon=\bigoplus_{m\in\mathbb Z}\mathcal F_{m+1/2-\epsilon/p},\qquad \mathcal M=\mathcal M_0\oplus\mathcal M_1.$$

For a state charge $r=m-\delta/p$ with $\delta\in\{0,1\}$, let $e_r$ shift the input charge $t$ to $t+r$ when the input sector label $\epsilon$ satisfies $\epsilon+\delta\le1$; set the action to zero if $\epsilon+\delta=2$. Use the same rule on $\mathcal A$ and $\mathcal M$. The scalar cocycle for every allowed shift is $1$. If two state charges have sector labels whose sum is at most one, their pairing $2prs$ is an even integer: at least one of the two labels is zero, and the pairing is then an even integer by the displayed charge formulas. The product of two sector-one states is defined to be zero.

On either $\mathcal A$ or $\mathcal M$, define the exponential field of state charge $r$ by
$$\mathcal E_r(z)=\exp\!\left(\sum_{n\ge1}\frac{r\alpha_{-n}}{n}z^n\right)\exp\!\left(-\sum_{n\ge1}\frac{r\alpha_n}{n}z^{-n}\right)e_r z^{r\alpha_0},$$
where $z^{r\alpha_0}f e^{t\alpha}=z^{2prt}f e^{t\alpha}$. Every allowed action has integer exponent $2prt$. On a forbidden action the field is zero. Each coefficient is algebraic: the annihilation exponential acts by a finite sum on a polynomial, and the creation exponential contributes finitely to any fixed power of $z$.

Put $b_n(z)=\partial_z^{n-1}\alpha(z)/(n-1)!$ for $n\ge1$, where $\alpha(z)=\sum_{k\in\mathbb Z}\alpha_k z^{-k-1}$. For a monomial state $x_{n_1}\cdots x_{n_\ell}e^{r\alpha}$, define its candidate field by
$$Y(x_{n_1}\cdots x_{n_\ell}e^{r\alpha},z)={:}b_{n_1}(z)\cdots b_{n_\ell}(z)\mathcal E_r(z){:}.$$
Here normal ordering is the finite sum over all choices of negative and nonnegative oscillator parts of the $\ell$ factors $b_{n_i}$, placing every negative part left of $\mathcal E_r$ and every nonnegative part right of it; factors in each group commute. Extend linearly and denote the resulting actions by $Y_{\mathcal A}$ and $Y_{\mathcal M}$ according to their target space. This definition gives candidate fields only; the vertex-algebra and module axioms are separate conclusions.

Set $\mathbf1=e^0$. On $\mathcal A$ define
$$T(f e^{t\alpha})=\left(\sum_{n\ge1}n x_{n+1}\partial_{x_n}f+t x_1f\right)e^{t\alpha}.$$

## Definition references

[[def-cft-feigin-fuchs-oscillator-data]]

[[def-formal-distribution-on-a-vector-space]]

[Adamović–Milas, lattice construction, Sections 3–4](https://arxiv.org/pdf/0902.3417v2)

[Adamović–Milas, triplet algebra, Section 1](https://arxiv.org/pdf/0707.1857v2)

## Remarks

The charge labels are algebraic copies; fractional labels do not denote analytic exponentials. The sector rule is precisely the square-zero extension convention: the sector-one part is an ideal candidate, and any product of two sector-one states is zero. The Jacobi, vacuum, creation, translation, and module properties of these fields are proved in a separate lemma. No screening-kernel equality, triplet-generation claim, or endpoint-module claim is part of this definition.
