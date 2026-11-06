---
id: lem-cft-r5-joint-jordan-dilation-log-polynomial
kind: lemma
title: "Nilpotent parts on a joint cyclic subspace give finite logarithmic dilation factors"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 0
domain: mathematics
library: physics
deps: []
dependency_roles: {}
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Rongvoram Nivesvivat and Sylvain Ribault, Logarithmic CFT at Generic Central Charge: from Liouville Theory to the Q-state Potts Model, arXiv:2007.04190v1"
      url: https://arxiv.org/pdf/2007.04190v1
      locator: "Section 2.1, PDF pp. 3–5, differentiates dilation-eigenvector identities to obtain Jordan blocks; §3.1, PDF pp. 11–12, derives logarithmic two-point coefficients. The finite-dimensional exponential argument here is proved locally."
verification:
  precheck: pending
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Let $V$ be a complex vector space, let $A,B:V\to V$ be commuting linear maps, and let $v\in V$ satisfy $A^r v=0$ and $B^s v=0$ for positive integers $r,s$. Let $h,\bar h\in\mathbb C$. Let $U_z,U_\zeta\subset\mathbb C^\times$ be simply connected open sets, with chosen holomorphic logarithms $\ell_z$ and $\ell_\zeta$.

The span

$$W_v=\operatorname{span}_{\mathbb C}\{A^iB^jv:0\le i<r,\ 0\le j<s\}$$

is finite dimensional and invariant under $A$ and $B$. On $W_v$, define

$$D_v(z,\zeta)=\exp\!\bigl(\ell_z(z)(hI+A)\bigr)\exp\!\bigl(\ell_\zeta(\zeta)(\bar hI+B)\bigr).$$

Then

$$D_v(z,\zeta)v=e^{h\ell_z(z)+\bar h\ell_\zeta(\zeta)}\sum_{i=0}^{r-1}\sum_{j=0}^{s-1}\frac{\ell_z(z)^i\ell_\zeta(\zeta)^j}{i!\,j!}A^iB^jv.$$

For every linear functional $\lambda:W_v\to\mathbb C$, the normalized matrix coefficient $e^{-h\ell_z-\bar h\ell_\zeta}\lambda(D_vv)$ is the finite polynomial

$$\sum_{i=0}^{r-1}\sum_{j=0}^{s-1}\frac{\lambda(A^iB^jv)}{i!\,j!}\ell_z^i\ell_\zeta^j.$$

Thus the nilpotent generator parts $A|_{W_v},B|_{W_v}$ supply possible logarithmic terms; a chosen pairing may annihilate their positive-degree coefficients. Under a Euclidean loop about the origin, $\ell_z$ changes by $2\pi i$ and $\ell_\zeta$ by $-2\pi i$, so the continued dilation is

$$e^{2\pi i(hI+A)}e^{-2\pi i(\bar hI+B)}D_v.$$

Single-valuedness therefore requires a separate condition on the paired fields and matrix coefficients.

## Facts & Assumptions

**Given:** The vector space $V$, commuting endomorphisms $A,B$, a vector $v$ with the stated nilpotence orders, scalars $h,\bar h$, and the two chosen logarithm branches.

[A1] The positive integers $r,s$ satisfy $A^r v=0$ and $B^s v=0$.

[A2] The branches $\ell_z,\ell_\zeta$ are holomorphic logarithms on the specified simply connected subsets of $\mathbb C^\times$; on the Euclidean locus $\zeta=\bar z$, continuation around zero changes the branches by $2\pi i$ and $-2\pi i$, respectively.

## Proof

1.1 Since $A$ and $B$ commute, every $A^iB^jv$ with $i\ge r$ equals $B^jA^rv=0$, and every one with $j\ge s$ equals $A^iB^sv=0$. Thus $W_v$ is spanned by at most $rs$ vectors. Applying $A$ or $B$ to its spanning vectors either gives another listed vector or zero, so $W_v$ is invariant. [given, A1, algebra]

2.1 On $W_v$, the restrictions of $A$ and $B$ are nilpotent and commute. Expanding the two matrix exponentials and using the binomial identity for commuting operators gives
$D_vv=e^{h\ell_z+\bar h\ell_\zeta}\exp(\ell_zA)\exp(\ell_\zeta B)v$.
Every term with $i\ge r$ or $j\ge s$ vanishes by [A1], so the product of exponential series is exactly the displayed finite double sum. Applying $\lambda$ gives the normalized matrix coefficient. [given, A1, step 1.1, algebra]

3.1 Continuing the two logarithms by the changes in [A2] multiplies the first exponential by $e^{2\pi i(hI+A)}$ and the second by $e^{-2\pi i(\bar hI+B)}$. The factors commute with each other and with $D_v$, yielding the stated continuation formula. [given, A2, step 2.1, algebra] ∎
