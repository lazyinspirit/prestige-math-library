---
id: cor-na-mini-element-pressure-mass-block-spectrum
kind: corollary
title: "MINI Stokes block-preconditioned spectral intervals"
status: draft
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 9
deps:
  - def-na-symmetric-saddle-point-system-and-block-preconditioners
  - thm-na-symmetrically-preconditioned-saddle-point-spectrum
  - cor-na-mini-element-pressure-mass-schur-bounds
  - lem-na-mini-element-local-and-global-dimensions
  - def-countable-choice
proof_strategy: direct
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Michele Benzi, Gene H. Golub, and Jörg Liesen, Numerical solution of saddle point problems"
      url: "https://www.ime.unicamp.br/~pulino/MT404/TextosOnline/bgl04.pdf"
      locator: "§10.1.1 and §10.1.3, printed pp. 61–63 and 70–71: symmetric block-diagonal eigenvalues and steady Stokes mass-Schur equivalence."
verification: {}
---

## Statement

Assume Countable Choice and the hypotheses of
[[cor-na-mini-element-pressure-mass-schur-bounds]]. Precondition the steady
MINI saddle system symmetrically with
$P=\operatorname{diag}(A_h,\nu^{-1}M_Q)$, using the convention of
[[def-na-symmetric-saddle-point-system-and-block-preconditioners]]. Put
$$ c_-=(C_FC_{\rm div}(D))^{-2}/(1+d),\qquad c_+=d, \qquad \lambda_\pm(s)=\frac{1\pm\sqrt{1+4s}}2. $$
Every eigenvalue of the Cholesky-symmetrically preconditioned matrix lies in
$$ [\lambda_-(c_+),\lambda_-(c_-)]\;\cup\;\{1\}\;\cup\; [\lambda_+(c_-),\lambda_+(c_+)], $$
where $1$ has multiplicity $\dim V_h-\dim Q_h$ (zero when the dimensions
are equal). This interval is for the steady Stokes scaling $\gamma=1/\nu$;
it is not an iteration-count or solver-speed guarantee.

## Facts & Assumptions

**Given:** Countable Choice, the steady MINI Schur bounds, and the spectrum
formula for a symmetrically pressure-mass-preconditioned saddle system.

[F1] If the eigenvalues of the normalized Schur matrix lie in $[a,b]$, the
preconditioned saddle eigenvalues are $\lambda_-(\mu_j)$,
$\lambda_+(\mu_j)$, and $1$ with multiplicity $n-m$
([[thm-na-symmetrically-preconditioned-saddle-point-spectrum]]).

[F2] The MINI steady Schur bounds are
$(C_FC_{\rm div}(D))^{-2}(\nu(1+d))^{-1}M_Q\preceq S_h\preceq
d\nu^{-1}M_Q$
([[cor-na-mini-element-pressure-mass-schur-bounds]]).

[F3] The finite MINI spaces satisfy $\dim V_h=dN_{v,0}+dN_K$ and
$\dim Q_h=N_v-1$ ([[lem-na-mini-element-local-and-global-dimensions]]).

[A1] Countable Choice is the only choice principle used in the supplier
chain ([[def-countable-choice]]).

## Proof
1.1 The finite mesh contains a simplex, so [F3] gives $N_K\ge1$ and $N_v\ge d+1$; therefore both $V_h$ and $Q_h$ have positive dimensions as required by [F1]. Congruence of [F2] by $(\nu^{-1}M_Q)^{-1/2}$ shows that the normalized Schur eigenvalues $\mu_j$ lie in $$ \left[(C_FC_{\rm div}(D))^{-2}/(1+d),\ d\right]=[c_-,c_+]. $$ Since $Q_h$ is nonzero and $M_Q$ is positive definite, [F2] also forces $c_-\le c_+$; both endpoints are positive. [A1, F1, F2, F3, algebra]

2.1 The derivative formulas $\lambda_-'(s)=-(1+4s)^{-1/2}<0$ and $\lambda_+'(s)=(1+4s)^{-1/2}>0$ for $s>0$ show that the two eigenvalue branches map $[c_-,c_+]$ onto the two stated intervals. Applying [F1] therefore yields the displayed spectral enclosure and multiplicity. [F1, step 1.1, algebra] ∎
