---
id: op-cft-r5-exceptional-n1-lg-identification
kind: open-problem
title: Exceptional $N=1$ minimal model as the infrared limit of a two-field cubic Landau–Ginzburg model
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 2
domain: physics
library: physics
deps:
  - def-cft-r5-n1-superconformal-algebra
  - def-cft-r5-exceptional-n1-target-data
dependency_roles:
  def-cft-r5-n1-superconformal-algebra: mathematical-premise
  def-cft-r5-exceptional-n1-target-data: formulation-prerequisite
physical_scope: "Two-dimensional N=1 Landau–Ginzburg RG flow of two real scalar superfields with cubic superpotential and the proposed exceptional (E6,D8), m=12 endpoint, extended chiral algebra, R-parity and operator dictionary."
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Yu Nakayama, Andrei Katsevich, Igor R. Klebanov, Zimo Sun, Landau–Ginzburg description of an exceptional N=1 minimal model, arXiv:2609.10972v2"
      url: https://arxiv.org/pdf/2609.10972v2
      locator: "§2, equations (1)–(5) (cubic model, Euclidean superfield expansion and R-parity); §§3.2–3.6 (extended modules, graded fusion and R-parity); §4.1, especially equation (53) (canonical component kinetic normalization and interacting GNY action); §4.3 (RG-flow outcomes)."
verification:
  precheck: n/a
  sources_checked:
    date: 2026-11-04
    scope: Recorded source, statement and proof-status review for this open-problem in conformal-field-theory-string-theory-step3-fresh-2026-11-04, within the native reports' stated reading limits. This records no proof or new empirical validation.
    by: gpt-6-luna; native-step3-independent-reader; delegated by /root under owner authorization
---

## Open problem

Let $u=(u^1,u^2)\in\mathbb R^2$ be Euclidean spacetime coordinates. Let $\theta,\widetilde\theta$ be independent Grassmann-odd coordinates of mass dimension $-1/2$, so $\theta^2=\widetilde\theta^2=0$ and $\theta\widetilde\theta=-\widetilde\theta\theta$. In the source's Euclidean $d=2$ convention, take two real $N=1$ scalar superfields with component expansions

$$
X(u,\theta,\widetilde\theta)=\phi_X(u)+i\theta\psi_X(u)+i\widetilde\theta\widetilde\psi_X(u)+\theta\widetilde\theta F_X(u),\qquad Y(u,\theta,\widetilde\theta)=\phi_Y(u)+i\theta\psi_Y(u)+i\widetilde\theta\widetilde\psi_Y(u)+\theta\widetilde\theta F_Y(u).
$$

Here $\phi_X,\phi_Y,F_X,F_Y:\mathbb R^2\to\mathbb R$ are smooth real scalar profiles. Let $\Lambda_{\mathbb R}$ be a real Grassmann algebra and let $\Lambda=\Lambda_{\mathbb R}\otimes_{\mathbb R}\mathbb C$, with the antilinear involution $\rho(a\otimes z)=a\otimes\bar z$. Its odd generators anticommute. Use the real structure $\rho$ componentwise on $\mathbb C^2\otimes\Lambda_{\bar 1}$ and require $\rho(\Psi_i)=\Psi_i$, where $\Psi_i=(\psi_i,\widetilde\psi_i)^T$ for $i\in\{X,Y\}$. This is the Majorana reality convention for the continued Grassmann integration variables used here; the barred field below is a charge-conjugation transpose, not an independent field or a Hermitian adjoint. Take $[\phi_i]=0$, $[\Psi_i]=1/2$, $[F_i]=1$, and $g_1,g_2\in\mathbb R$ with mass dimension one, in units $\hbar=1$. The classical action is evaluated on smooth fields with boundary conditions making its spacetime integral finite; the existence of the continuum quantum theory is not assumed as a proved fact. The cubic superpotential is

$$
\mathcal W(X,Y)=\frac{g_1}{2}XY^2+\frac{g_2}{6}X^3.
$$

Choose $\gamma_1=\left(\begin{smallmatrix}0&1\\1&0\end{smallmatrix}\right)$ and $\gamma_2=\left(\begin{smallmatrix}1&0\\0&-1\end{smallmatrix}\right)$, so $\{\gamma_\mu,\gamma_\nu\}=2\delta_{\mu\nu}I$. These real matrices preserve the stated real structure. Put $C=i\left(\begin{smallmatrix}0&1\\-1&0\end{smallmatrix}\right)$, define $\bar\Psi_j:=\Psi_j^T C$, and set $\not\partial=\gamma^1\partial_1+\gamma^2\partial_2$. In particular the kinetic bilinear means the ordered Grassmann expression $\bar\Psi_j\not\partial\Psi_j=\sum_{\mu=1}^2\Psi_j^T C\gamma_\mu\partial_\mu\Psi_j$, with derivatives acting on the field to their right. The scalar bilinear is $\bar\Psi_j\Psi_k=\Psi_j^T C\Psi_k$. This fixes both bilinears, including their common phase, in a real Clifford basis for the Euclidean continuation. Let $h_{ijk}:=\partial_i\partial_j\partial_k\mathcal W$ for polynomial derivatives in the field variables $X,Y$. The source's canonical component action after eliminating the algebraic auxiliary fields is $S_E=\int_{\mathbb R^2}d^2u\,\mathcal L_E$, where

$$
\mathcal L_E=\frac12\sum_{i=X,Y}(\partial_\mu\phi_i)^2+\frac12\sum_{i=X,Y}\bar\Psi_i\not\partial\Psi_i+\frac12\sum_{i,j,k=X,Y}h_{ijk}\phi_i\bar\Psi_j\Psi_k+\frac12\sum_{i=X,Y}(\partial_i\mathcal W)^2.
$$

In $\mathcal L_E$, the derivatives of $\mathcal W$ are evaluated at $X=\phi_X(u)$ and $Y=\phi_Y(u)$. In the source's spinor convention $\bar\Psi_k\Psi_l=i(\psi_k\widetilde\psi_l+\psi_l\widetilde\psi_k)$. The R-parity acts as $\Phi(u,\theta,\widetilde\theta)\mapsto-\Phi(u,-\theta,\widetilde\theta)$ for $\Phi=(X,Y)$; equivalently it sends $(\phi_i,\psi_i,\widetilde\psi_i,F_i)$ to $(-\phi_i,\psi_i,-\widetilde\psi_i,F_i)$. Determine whether the continuum theory at the proposed coupled fixed point flows in $d=2$ to the exceptional $(E_6,D_8)$, $m=12$ $N=1$ minimal-model target defined in [[def-cft-r5-exceptional-n1-target-data|Source-defined exceptional $N=1$ minimal-model target data]], including its extended $SW(3/2,5/2)$ chiral algebra, R-parity grading and operator dictionary. The $N=1$ super-Virasoro subalgebra uses [[def-cft-r5-n1-superconformal-algebra|$N=1$ superconformal mode algebra in NS and Ramond sectors]].

The target in the question is the extended super-$W_3$ model, not a theory specified only by the $N=1$ super-Virasoro algebra.

## Status

Open as of 2026-10-26. The current arXiv record lists v2, last revised 2026-09-28, and describes the identification as a proposal. Its evidence includes modular/fusion matching and a Gross–Neveu–Yukawa analysis at $d=4-\epsilon$ with a weakly coupled fixed point near $g_1/g_2=3/2+O(\epsilon)$; dimensions continued to $d=2$ are reported as approximate. Neither that continuation nor the modular/fusion data prove the exact two-dimensional RG endpoint, full local OPE data, or operator dictionary. The $g_1=g_2$ decoupled fixed point is the separate $m=10$, $(D_6,E_6)$ case, not the proposed target. The scope of this status check is the cited current arXiv version and targeted search recorded in batch-29 notes; it is not an exhaustive literature review.
