---
id: def-cft-triplet-lattice-screening-data
kind: definition
title: Rank-one lattice and square-zero screening data for the triplet construction
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 0
domain: mathematics
library: mathematics
deps:
  - def-formal-distribution-on-a-vector-space
dependency_roles:
  def-formal-distribution-on-a-vector-space: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Dražen Adamović and Antun Milas, Lattice construction of logarithmic modules for certain vertex algebras
      url: https://arxiv.org/pdf/0902.3417v2
      locator: "§§3–4, especially the square-zero extension action on printed p.7; §5, (5.1)–(5.2). The oscillator formulas spell out these lattice conventions; their vertex/module identities require separate proof."
    - title: Dražen Adamović and Antun Milas, On the triplet vertex algebra W(p)
      url: https://arxiv.org/pdf/0707.1857v2
      locator: "§1, printed pp.4–7: rank-one lattice, conformal vector, screenings and triplet generators; §3, printed pp.13–15: endpoint labels."
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

Fix an integer $p\ge2$. Let $L=\mathbb Z\alpha$ with bilinear form $\langle r\alpha,s\alpha\rangle=2prs$, and put $P=\mathbb C[x_1,x_2,\ldots]$, where every polynomial uses finitely many variables. Write $\mathcal F_t=P e^{t\alpha}$ for a copy of $P$ labelled by $t\in\mathbb Q$. On it define $\alpha_{-n}=x_n$, $\alpha_n=2pn\partial_{x_n}$ for $n\ge1$, and $\alpha_0=2ptI$. Write $\alpha(z)=\sum_{n\in\mathbb Z}\alpha_nz^{-n-1}$. The vector $e^{t\alpha}$ means $1\in\mathcal F_t$; it is not an analytic exponential.

Use two distinguished sectors indexed by $\epsilon=0,1$:
$$\mathcal A=\bigoplus_{\epsilon=0}^1\bigoplus_{n\in\mathbb Z}\mathcal F_{n-\epsilon/p},\qquad \mathcal M=\bigoplus_{\epsilon=0}^1\bigoplus_{n\in\mathbb Z}\mathcal F_{n+1/2-\epsilon/p}.$$
The sector-one subspace of $\mathcal A$ is denoted $I$ and its sector-zero subspace $V_L$. A state charge $r=m-\delta/p$ carries sector $\delta\in\{0,1\}$. The charge shift $e_r$ sends $f e^{t\alpha}$ in sector $\epsilon$ to $f e^{(t+r)\alpha}$ in sector $\epsilon+\delta$ when $\epsilon+\delta\le1$, and to zero otherwise. This rule applies on both $\mathcal A$ and $\mathcal M$. In particular two sector-one actions have zero composite. The scalar cocycle for allowed shifts is $\varepsilon(r,s)=1$; there is no extra phase. For two state charges with sector sum at most one, $\langle r\alpha,s\alpha\rangle=2prs$ is an even integer, so this choice has commutator $(-1)^{2prs}=1$. The multiplication involving two sector-one states is defined to be zero, rather than a fractional-power generalized lattice product.

Define exponential fields on either vector space by
$$\mathcal E_r(z)=\exp\!\left(\sum_{n\ge1}\frac{r\alpha_{-n}}n z^n\right)\exp\!\left(-\sum_{n\ge1}\frac{r\alpha_n}n z^{-n}\right)e_r z^{r\alpha_0},$$
where $z^{r\alpha_0}f e^{t\alpha}=z^{2prt}f e^{t\alpha}$. For every allowed action the exponent $2prt$ is an integer. On a disallowed action the field is zero. Each coefficient is defined algebraically: the annihilation exponential is finite on a polynomial, and the creation exponential has only finitely many contributions to a fixed power of $z$.

Put $b_n(z)=\partial_z^{n-1}\alpha(z)/(n-1)!$. For a monomial state $x_{n_1}\cdots x_{n_k}e^{r\alpha}$ define its field by $Y(x_{n_1}\cdots x_{n_k}e^{r\alpha},z)={:}b_{n_1}(z)\cdots b_{n_k}(z)\mathcal E_r(z){:}$. Here normal ordering means the following explicit finite distribution over the $k$ oscillator factors: split each $b_n$ into its part with oscillator index less than zero and its part with index at least zero; sum over all choices, placing every chosen negative part to the left of $\mathcal E_r$ and every chosen nonnegative part to its right. Factors within either group commute. Extend linearly, and distinguish $Y_{\mathcal A}$ and $Y_{\mathcal M}$ by the space acted upon. This definition gives candidate state fields, not a waiver of their vertex/module Jacobi obligations.

Set $\mathbf1=e^0$, $\omega=(x_1^2/(4p)+(p-1)x_2/(2p))e^0$, $v=e^{-\alpha/p}$, $Q=(e^\alpha)_{(0)}$ and $F=e^{-\alpha}$, $H=QF$, $E=Q^2F$, using coefficients $Y(a,z)=\sum_{k\in\mathbb Z}a_{(k)}z^{-k-1}$. Let $W$ be the smallest linear subspace of $V_L$ containing $\mathbf1,\omega,F,H,E$ and closed under every product $a_{(k)}b$ of its elements, for $k\in\mathbb Z$; it exists as the intersection of all such subspaces. Once the vertex and conformal identities are established, this is the vertex subalgebra generated by the four displayed states, denoted $W(p)$ here. Equality with the full kernel $\ker_{V_L}v_{(0)}$ is a further structural assertion, not part of the definition and not required for the four-generator construction.

For $a\in W$ use the explicit screening-deformation candidate
$$\widetilde Y(a,z)=Y_{\mathcal M}(a,z)+\sum_{n\ge1}\frac{(-1)^{n+1}}n z^{-n}Y_{\mathcal M}(v_{(n)}a,z).$$
Define $P_+^{p-1}$ as the span of all finite words of its modes applied to $e^{\alpha/2}$, and $M_1$ as the corresponding cyclic span generated by $e^{-\alpha/2}$. These spans are defined within $\mathcal M$; their module, containment and grading properties are separate assertions. The endpoint convention is $\Lambda(p-1)=W e^{(p-2)\alpha/(2p)}\subset\bigoplus_n\mathcal F_{n+(p-2)/(2p)}$ and $\Pi(1)=W e^{-\alpha/2}\subset\bigoplus_n\mathcal F_{n+1/2}$ for the undeformed lattice fields. These definitions specify particular cyclic spaces; their irreducibility and their identification with the extension endpoints also require proof.

## Definition references

[[def-formal-distribution-on-a-vector-space]]

[Adamović–Milas, lattice construction, §§3–5](https://arxiv.org/pdf/0902.3417v2)

[Adamović–Milas, triplet algebra, §§1 and 3](https://arxiv.org/pdf/0707.1857v2)
