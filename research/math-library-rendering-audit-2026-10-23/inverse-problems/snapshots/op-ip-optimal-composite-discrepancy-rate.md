---
id: op-ip-optimal-composite-discrepancy-rate
kind: open-problem
title: Optimal rate for composite double discrepancy
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 7
deps:
  - def-ip-composite-double-regularization
  - thm-ip-double-discrepancy-conditional-convergence
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  sources_checked:
    date: "2026-10-22"
    scope: "Formulation and unresolved status reviewed in the completed delegated build; source-reading limits and evidence remain recorded in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    by: "gpt-6.1-sol delegated native review; publication authorized by owner"
  precheck: n/a
sources:
  references:
    - title: "Christina Brandt and Patrick Horn, Regularisation and Parameter Choice Rules for Composite Linear Inverse Problems, v1"
      url: "https://arxiv.org/pdf/2610.13483"
      locator: "Theorem 6, printed pp. 6–9; conclusion §4, printed p. 17; arXiv record submitted 9 October 2026."
---

## Open problem

Assume Countable Choice. Let $X,Y,Z$ be real or complex Hilbert spaces over one scalar field. Let compact linear maps $F:X\to Y$ and $G:Y\to Z$ have a common singular system indexed by a finite or countable set $J$: $(x_j)_{j\in J}$, $(y_j)_{j\in J}$, and $(z_j)_{j\in J}$ are orthonormal bases of $\overline{R(F^*)}$, $\overline{R(F)}=\overline{R(G^*)}$, and $\overline{R(G)}$, and $Fx_j=\lambda_jy_j$, $F^*y_j=\lambda_jx_j$, $Gy_j=\mu_jz_j$, and $G^*z_j=\mu_jy_j$ with $0<\lambda_j,\mu_j\le1$. Put $A:=G\circ F$. Let $\nu_0>2$, $1<\nu\le\nu_0-1$, $\rho>0$, $w\in X$ with $\|w\|_X\le\rho$, $x^\dagger:=|A|^\nu w$ where $|A|=(A^*A)^{1/2}$, and $z:=Ax^\dagger\ne0$. The common system makes $x^\dagger$ and $Fx^\dagger$ the minimum-norm solutions at their respective stages. For $H=F,G$, let $R^H_\eta:=f^H_\eta(H^*H)H^*$ and $p^H_\eta(t):=1-tf^H_\eta(t)$. Assume finite constants $C_H,S_H,K_H>0$ satisfy $\|HR^H_\eta\|\le C_H$, $\|I-HR^H_\eta\|\le S_H$, and $\|R^H_\eta\|\le K_H\eta^{-1/2}$ for every $\eta>0$; and, for every $0<s\le\nu_0$, assume a finite constant $D_H(s)$ satisfies $\sup_{j\in J}s_{H,j}^{s}|p^H_\eta(s_{H,j}^2)|\le D_H(s)\eta^{s/2}$ for every $\eta>0$, where $s_{F,j}=\lambda_j$ and $s_{G,j}=\mu_j$. Fix $\tau_G>S_G$ and $\tau_F>S_FC_G$. Let $(\alpha_k)_{k\ge1}$ and $(\gamma_\ell)_{\ell\ge1}$ be decreasing positive sequences with successive ratios in $[\theta,1)$ for one fixed $0<\theta<1$. For noisy data $z^\delta$ with $\|z^\delta-z\|_Z\le\delta$, choose the first indices $k,\ell$, when they exist, such that $\|GR^G_{\alpha_k}z^\delta-z^\delta\|_Z\le\tau_G\delta<\|GR^G_{\alpha_i}z^\delta-z^\delta\|_Z$ for every $i<k$, and $\|AR^F_{\gamma_\ell}R^G_{\alpha_k}z^\delta-GR^G_{\alpha_k}z^\delta\|_Z\le\tau_F\delta<\|AR^F_{\gamma_i}R^G_{\alpha_k}z^\delta-GR^G_{\alpha_k}z^\delta\|_Z$ for every $i<\ell$. For fixed factors, filters, parameter sequences and radius $\rho$, define $E_\delta$ as the supremum of $\|R^F_{\gamma_\ell}R^G_{\alpha_k}z^\delta-x^\dagger\|_X$ over all $w$ and all $z^\delta$ satisfying these source, noise, nonzero-data, and stopping-index conditions. Determine the sharp asymptotic order of $E_\delta$ as $\delta\downarrow0$ whenever this admissible set is nonempty. In particular, is the exponent $(\nu-1)/(\nu+1)$ in the upper bound $C_1\rho^{1/(\nu+1)}\delta^{\nu/(\nu+1)}+C_2\rho^{2/(\nu+1)}\delta^{(\nu-1)/(\nu+1)}$ optimal for fixed $\rho$, or can it be improved uniformly over this composite class?

## Open problem references

[Brandt and Horn, Theorem 6 and conclusion, printed pp. 6–9 and 17](https://arxiv.org/pdf/2610.13483)

## Status

As of 2026-10-21, the arXiv record lists v1 only. In §4, Brandt and Horn explicitly leave open whether their a-priori convergence speed is optimal. They separately call the double-discrepancy principle's finite-qualification result suboptimal and state its rate, but do not pose the DDP exponent's sharpness as that explicit open question or give a matching lower bound in Theorem 6. This item retains the DDP sharpness question as its own formulation rather than attributing it to the authors. Under the common singular system, source conditions, finite filter qualification, and both residual rules, the local theorem supplies a conditional two-term upper bound; the source's displayed radius exponent is inconsistent with its proof. Targeted searches for the exact arXiv identifier, title, and composite double-discrepancy optimality found no later resolution as of this date. No lower bound matching the two-stage rate is asserted here.

## Remarks

This formulation asks about the deterministic worst-case rate of the specified two-stage residual-selection rule; it is not a claim about optimality among all reconstruction procedures.
