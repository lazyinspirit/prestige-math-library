---
id: prop-qft-scalar-engineering-dilation
kind: proposition
title: Scalar engineering dimensions and tree-level dilation
status: published
origin: pipeline
domain: mathematics
deps: []
dependency_roles: {}
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Mark Srednicki, Quantum Field Theory, author-posted prepublication draft, §12, equations (12.5)–(12.11)"
      url: "https://web.physics.ucsb.edu/~mark/ms-qft-DRAFT.pdf"
    - title: "David Tong, Quantum Field Theory, §3 Interacting Fields, equations (3.202)–(3.204)"
      url: "https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S3.html"
dependency_level: 0
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
---

## Statement

Let $D\in\mathbb Z_{\ge1}$, let $\phi\in C_c^\infty(\mathbb R^D;\mathbb R)$ (the smooth real-valued functions with compact support), let $r\ge3$ be an integer, and let $g_r\in\mathbb R\setminus\{0\}$. The Euclidean gradient is $\nabla_E\phi:=(\partial_1\phi,\ldots,\partial_D\phi)$ and its squared norm is $|\nabla_E\phi|^2:=\sum_{j=1}^D(\partial_j\phi)^2$. With Lebesgue measure $d^Dx$ on $\mathbb R^D$, define the real-valued functionals

$$S_{\mathrm{kin}}(\phi):=\frac12\int_{\mathbb R^D}|\nabla_E\phi(x)|^2\,d^Dx,\qquad S_r(\phi):=g_r\int_{\mathbb R^D}\phi(x)^r\,d^Dx.$$

They are finite because $\phi$ and its derivatives have compact support. Use the following formal natural-unit mass-degree convention: set $\hbar=c=1$, assign degree $-1$ to each coordinate $x^\mu$ ($1\le\mu\le D$), degree $1$ to each partial derivative, and degree $-D$ to $d^Dx$; degrees add under products. Normalize both displayed functionals as dimensionless action terms of degree $0$. The symbols $[\phi]$ and $[g_r]$ denote their formal mass degrees in this convention; these are the engineering dimensions. They are $[\phi]=(D-2)/2$ and $[g_r]=D-r(D-2)/2$. Under the dilation $\phi_b(x)=b^{-(D-2)/2}\phi(x/b)$ for $b>0$, $S_{\mathrm{kin}}(\phi_b)=S_{\mathrm{kin}}(\phi)$ and $S_r(\phi_b)=b^{D-r(D-2)/2}S_r(\phi)$. Call the monomial relevant, marginal, or irrelevant at tree level according as this dilation exponent is positive, zero, or negative. Thus a quartic monomial has exponent $4-D$: it is relevant for $D<4$, marginal by engineering dimension for $D=4$, and irrelevant for $D>4$. These labels concern only this classical engineering-dimension convention; no quantum correction, fixed point, or renormalization-group flow is asserted.

## Facts & Assumptions

**Given:** $D\in\mathbb Z_{\ge1}$, $b>0$, $\phi\in C_c^\infty(\mathbb R^D;\mathbb R)$, integer $r\ge3$, and real scalar $g_r\ne0$.

[A1] The statement's formal natural-unit mass-degree convention assigns $[x^\mu]=-1$, $[\partial_\mu]=1$, $[d^Dx]=-D$, and degree $0$ to both $S_{\mathrm{kin}}$ and $S_r$; degrees add under products, with $\hbar=c=1$.

[A2] The specified functionals are the Lebesgue integrals of the Euclidean-gradient and monomial densities in the statement; compact support makes both integrals finite.

## Proof

**Given:** The dimension convention [A1] and the functionals and domain in [A2].

1.1 Since $S_{\mathrm{kin}}$ has degree $0$ and $d^Dx$ has degree $-D$, its integrand $|\nabla_E\phi|^2$ has degree $D$. Each Euclidean partial derivative contributes degree $1$, so $2+2[\phi]=D$ and $[\phi]=(D-2)/2$. [given, A1, A2, algebra]

1.2 By the chain rule, $\partial_j(\phi_b)(x)=b^{-(D-2)/2-1}(\partial_j\phi)(x/b)$ for each $j=1,\ldots,D$. With $x=by$, Lebesgue measure contributes $b^D$ and the two differentiated fields contribute $b^{-(D-2)-2}=b^{-D}$, so $S_{\mathrm{kin}}(\phi_b)=S_{\mathrm{kin}}(\phi)$. [given, A2, algebra]

2.1 By [A1], $S_r$ has degree $0$, so its integrand $g_r\phi^r$ must have degree $D$. Therefore $[g_r]+r[\phi]=D$, and substituting step 1.1 gives $[g_r]=D-r(D-2)/2$. [given, A1, A2, step 1.1, algebra]

3.1 For the monomial, the same Lebesgue change of variables gives $S_r(\phi_b)=g_r b^D b^{-r(D-2)/2}\int\phi(y)^r d^Dy=b^{D-r(D-2)/2}S_r(\phi)$. At $r=4$ the exponent is $4-D$, whose sign gives the stated relevant, marginal, or irrelevant tree-level label. [given, A1, A2, step 1.1, algebra] ∎
