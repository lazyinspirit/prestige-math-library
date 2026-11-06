---
id: thm-cft-2d-unitary-vira-norm-bounds
kind: theorem
title: Two positivity bounds from Virasoro norm identities
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 0
deps:
  - def-virasoro-highest-weight-module
  - def-virasoro-algebra
justified_by: []
domain: mathematics
library: mathematics
dependency_roles:
  def-virasoro-highest-weight-module: mathematical-premise
  def-virasoro-algebra: mathematical-premise
axiom_use: "No choice principle is used; the argument consists of two norm identities in the stated positive-inner-product domain."
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-05
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: "Paul Ginsparg, Applied Conformal Field Theory, Les Houches lectures (1988)"
      url: https://arxiv.org/pdf/hep-th/9108028
      locator: "§3.5, printed pp. 36–37 (PDF pp. 19–20), Eq. (3.19); §4.1, printed p. 46 (PDF p. 25), the positive-space condition."
    - title: "David Tong, String Theory, University of Cambridge Part III lecture notes (2009)"
      url: https://www.damtp.cam.ac.uk/user/tong/string/string.pdf
      locator: "§4.5.3–4.5.4, printed pp. 99–100 (PDF pp. 107–108), highest-weight and vacuum norm calculations."
---

## Statement

Let $\mathfrak V$ be the Virasoro algebra with central element $C$, represented by operators $L_n$ on an invariant complex inner-product space $\mathscr D$, with inner product conjugate-linear in the first variable and linear in the second. Assume $C=cI$, the form is positive definite, and for all vectors used below the adjoint identity $\langle L_nu,v\rangle=\langle u,L_{-n}v\rangle$ holds. If $v\ne0$ is a highest-weight vector of weight $h$ (so $L_nv=0$ for $n>0$ and $L_0v=hv$), then $h\in[0,\infty)$. If $\Omega\ne0$ is a vacuum vector with $L_n\Omega=0$ for every $n\ge-1$, then $c\in[0,\infty)$. These are only the two norm inequalities; no classification of unitary Virasoro representations is asserted.

## Facts & Assumptions

**Given:** A representation of the fixed Virasoro algebra on the invariant domain, a positive-definite inner product, the stated adjoint identities, and the highest-weight and vacuum vectors.

[F1] [[def-virasoro-algebra|Virasoro algebra in the $L_m$ convention]]: $[L_m,L_n]=(m-n)L_{m+n}+(m^3-m)\delta_{m+n,0}C/12$, and $C$ is central.

[F2] [[def-virasoro-highest-weight-module]]: A highest-weight vector $v\ne0$ satisfies $L_nv=0$ for all $n>0$, $L_0v=hv$, and $Cv=cv$; the definition itself asserts neither unitarity nor irreducibility.

[A1] The operators $L_n$ preserve the common domain, the inner product is positive definite, and the adjoint relation is valid on $(v,L_{-1}v)$ and $(\Omega,L_{-2}\Omega)$.

[A2] The vacuum vector is nonzero and obeys $L_n\Omega=0$ for every $n\ge-1$; in particular $L_0\Omega=L_2\Omega=0$.

## Proof
**Given:** [F1]–[F2], [A1]–[A2], and the indicated vectors.

1.1 For the highest-weight vector, adjointness gives $\|L_{-1}v\|^2=\langle v,L_1L_{-1}v\rangle$. Since $L_1v=0$, the operator product equals $[L_1,L_{-1}]v$; [F1] gives $[L_1,L_{-1}]=2L_0$ because $1^3-1=0$. Hence $\|L_{-1}v\|^2=2h\|v\|^2$. [given, F1, F2, A1, algebra]

1.2 For the vacuum, adjointness gives $\|L_{-2}\Omega\|^2=\langle\Omega,L_2L_{-2}\Omega\rangle=\langle\Omega,[L_2,L_{-2}]\Omega\rangle$ because $L_2\Omega=0$. By [F1], $[L_2,L_{-2}]=4L_0+(6/12)C=4L_0+(c/2)I$ on this representation; [A2] therefore gives $\|L_{-2}\Omega\|^2=(c/2)\|\Omega\|^2$. [given, F1, A1, A2, algebra]

2.1 The left side of step 1.1 is a nonnegative real number and $\|v\|^2>0$. Therefore $h=\|L_{-1}v\|^2/(2\|v\|^2)$ is real and nonnegative. [step 1.1, A1, algebra]

3.1 Positivity and $\|\Omega\|^2>0$ make $c=2\|L_{-2}\Omega\|^2/\|\Omega\|^2$ real and nonnegative. The two conclusions above give exactly the asserted bounds and no stronger representation-theoretic classification. [step 1.2, A1, algebra] ∎
