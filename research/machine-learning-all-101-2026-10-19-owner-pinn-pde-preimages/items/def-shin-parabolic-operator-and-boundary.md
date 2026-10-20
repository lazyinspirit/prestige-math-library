---
id: def-shin-parabolic-operator-and-boundary
kind: definition
title: "Shin's parabolic operator, data, and initial-lateral boundary"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps: [def-parabolic-cylinder-and-parabolic-boundary, def-ck-and-multi-index-notation-in-several-variables]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Shin, Darbon, and Karniadakis, On the Convergence of Physics-Informed Neural Networks for Linear Second-Order Elliptic and Parabolic Type PDEs"
      url: "https://arxiv.org/pdf/2004.01806"
      locator: "equations (2.1)–(2.3), (3.9), Assumption 3.4"
    - title: "John K. Hunter, Notes on Partial Differential Equations"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "§6.2, variable-coefficient parabolic operator and energy form"
---

## Definition

Let $U\subset\mathbb R^d$ be bounded, let $T>0$, and set $Q=U\times(0,T)$ and
$$\Gamma_T=(\bar U\times\{0\})\cup(\partial U\times[0,T]).$$
The final-time face $U\times\{T\}$ is excluded from $\Gamma_T$. For time-dependent coefficients define
$$L_t[u]=\sum_{i,j=1}^dD_i\bigl(a_{ij}(x,t)D_j u+b_i(x,t)u\bigr)+\sum_{i=1}^d c_i(x,t)D_i u+d(x,t)u.$$
Where the coefficient derivatives exist, write its nondivergence expansion as
$$L_t[u]=\sum_{i,j}a_{ij}D_iD_j u+\sum_i\widetilde b_iD_i u+\widetilde c\,u,$$
where $\widetilde b_i=\sum_jD_j a_{ij}+b_i+c_i$ and $\widetilde c=\sum_iD_i b_i+d$. The initial-boundary value problem uses the sign convention
$$-u_t+L_t[u]=f\quad\hbox{in }Q,\qquad u=\varphi\quad\hbox{on }\partial U\times[0,T],\qquad u=g\quad\hbox{on }\bar U\times\{0\},$$
with compatibility $g(x)=\varphi(x,0)$ on $\partial U$. Its residual for a trial function $h$ is $f+h_t-L_t[h]$, and its prescribed-data error is measured on $\Gamma_T$.

For the source notation $C_{2+\alpha}(Q)$, use the parabolic distance
$$d_p((x,t),(y,s))=(|x-y|^2+|t-s|)^{1/2}.$$
Let $B=U\times\{0\}$ and $S_\tau=\partial U\times[0,\tau]$. For $P=(x,\tau)\in Q$, set $\delta(P)=\inf_{R\in B\cup S_\tau}d_p(P,R)$ and $\delta_{P,Q}=\min\{\delta(P),\delta(Q)\}$. For an integer $m\ge0$, define
$$|v|_{m,\alpha}=\sup_{P\in Q}\delta(P)^m|v(P)|+\sup_{P\ne Q\in Q}\delta_{P,Q}^{m+\alpha}\frac{|v(P)-v(Q)|}{d_p(P,Q)^\alpha}.$$
The class $C_{2+\alpha}(Q)$ consists of functions for which
$$|u|_{0,\alpha}+\sum_i|D_i u|_{1,\alpha}+\sum_{i,j}|D_{ij}u|_{1,\alpha}+|u_t|_{2,\alpha}<\infty,$$
with the indicated derivatives continuous in $Q$. This fixes the source's weighted parabolic Hölder convention.

## Definition references
[Shin et al., equations (2.1)–(2.3) and Assumption 3.4: parabolic sign convention, data, and coefficients](https://arxiv.org/pdf/2004.01806)

[Published parabolic-cylinder definition: initial and lateral boundary, excluding the final-time face](../../items/def-parabolic-cylinder-and-parabolic-boundary.md)

