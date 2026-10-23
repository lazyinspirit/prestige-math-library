---
id: def-fd-polytropic-symmetric-variables
kind: definition
title: "Sound-speed variables for polytropic Euler"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 1
deps:
  - def-fd-periodic-fourier-sobolev-spaces
  - def-countable-choice
dependency_roles:
  def-fd-periodic-fourier-sobolev-spaces: mathematical-premise
  def-countable-choice: mathematical-premise
justified_by: []
forward_refs: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "François Golse, The Boltzmann Equation and Its Hydrodynamic Limits, §7.4"
      url: "https://www.cmls.polytechnique.fr/perso/golse/Surveys/FGHdBookEvEq.pdf"
verification:
  precheck: pending
---

## Definition

Assume Countable Choice. Let $d\in\{1,2,3\}$, $\kappa>0$, $\gamma>1$, and put $a=(\gamma-1)/2$. For positive density $\rho>0$, define the polytropic pressure $p(\rho)=\kappa\rho^\gamma$, sound speed $c(\rho)=\sqrt{p'(\rho)}=\sqrt{\kappa\gamma}\,\rho^a$, and sound-speed variable $r=c/a$. The map $\rho\mapsto r$ is a smooth bijection $(0,\infty)\to(0,\infty)$ with inverse $\rho=(ar/\sqrt{\kappa\gamma})^{1/a}$. For a velocity $u\in\mathbb R^d$, set $q=(r,u_1,\ldots,u_d)\in\mathbb R^{d+1}$. Let $e_0,e_1,\ldots,e_d$ be the standard basis of $\mathbb R^{d+1}$, with $e_0$ the scalar coordinate and $e_j$ the velocity coordinate $u_j$. Define the real matrix
$$A_j(q)=u_j I_{d+1}+ar(e_0e_j^{\mathsf T}+e_je_0^{\mathsf T}),\qquad 1\le j\le d.$$
Each $A_j(q)$ is symmetric and linear in $q$. The first-order system $q_t+\sum_{j=1}^d A_j(q)\partial_jq=0$ means the pair
$$r_t+u\cdot\nabla r+ar\,\operatorname{div}u=0,\qquad u_t+u\cdot\nabla u+ar\nabla r=0.$$
For periodic use on $Q_d=(\mathbb R/2\pi\mathbb Z)^d$, take normalized measure $d\mu=(2\pi)^{-d}dx$, Fourier coefficients $\widehat q(k)=\int q(x)e^{-ik\cdot x}\,d\mu(x)$, weights $w_k=(1+|k|^2)^{1/2}$, and $\|q\|_{H^m}^2=\sum_{k\in\mathbb Z^d}w_k^{2m}|\widehat q(k)|^2$, componentwise; real fields satisfy $\widehat q(-k)=\overline{\widehat q(k)}$. These are the periodic Fourier-space conventions used for $H^m$ in this development.

## Definition references

[[def-fd-periodic-fourier-sobolev-spaces]]

[[def-countable-choice]]

[François Golse, *The Boltzmann Equation and Its Hydrodynamic Limits*, §7.4](https://www.cmls.polytechnique.fr/perso/golse/Surveys/FGHdBookEvEq.pdf)
