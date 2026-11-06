---
id: def-cft-r5-charged-heisenberg-fock-space
kind: definition
title: Charged rank-one Heisenberg Fock space
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 0
domain: mathematics
library: mathematics
physical_scope: null
deps:
  - def-rank-one-heisenberg-vertex-algebra
dependency_roles:
  def-rank-one-heisenberg-vertex-algebra: mathematical-premise
justified_by:
  - lem-cft-r5-charged-heisenberg-fock-module
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Paul Ginsparg, Applied Conformal Field Theory, Les Houches 1988, arXiv:hep-th/9108028v1
      url: https://arxiv.org/pdf/hep-th/9108028v1
      locator: Section 8.1, printed pp. 112–114, oscillator Fock sectors and the left/right zero-mode weights.
    - title: Pavel Mnev and Nicolai Reshetikhin, Lecture notes on conformal field theory
      url: https://academicweb.nd.edu/~pmnev/f22/CFT_book.pdf
      locator: Section 6.1.6, printed pp. 199–200, Heisenberg descendants over the momentum-winding highest-weight states.
verification:
  precheck: n/a
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

Let $P=\mathbb C[x_1,x_2,\ldots]$, where each polynomial involves only finitely many variables. For a real charge $p$, the rank-one **charged Heisenberg Fock space** has algebraic core $F_p^{\mathrm{alg}}=P$. Its modes act by

$$a_{-k}f=x_k f,\qquad a_k f=k\frac{\partial f}{\partial x_k},\qquad a_0 f=p f\quad(k\ge1,\ f\in P).$$

Give the monomial basis the Hermitian inner product

$$\left\langle\prod_{k\ge1}x_k^{u_k},\prod_{k\ge1}x_k^{v_k}\right\rangle=\mathbf 1_{u=v}\prod_{k\ge1} k^{u_k}u_k!.$$

and let $F_p$ be its Hilbert completion. The current is $a(z)=\sum_{j\in\mathbb Z}a_jz^{-j-1}$. Normal ordering moves every negative-index mode to the left of every nonnegative-index mode. The conformal modes are

$$L_n^{(p)}=\frac12\sum_{j\in\mathbb Z}{:}a_j a_{n-j}{:}.$$

These sums are interpreted on $P$; their finite action is established by the cited well-definedness result. The vacuum vector $1\in P$ has charge $p$, oscillator number $0$, and declared conformal weight $p^2/2$.

## Definition references

[[def-rank-one-heisenberg-vertex-algebra]]

[Ginsparg, Section 8.1](https://arxiv.org/pdf/hep-th/9108028v1)

[Mnev–Reshetikhin, Section 6.1.6](https://academicweb.nd.edu/~pmnev/f22/CFT_book.pdf)

## Remarks

For $p=0$, the algebraic core and current modes agree with the vacuum oscillator space in [[def-rank-one-heisenberg-vertex-algebra]]. For $p\ne0$, the zero mode acts by the scalar $p$ and the lowest conformal weight is $p^2/2$. This is one chiral sector; it is not a full left/right theory.
