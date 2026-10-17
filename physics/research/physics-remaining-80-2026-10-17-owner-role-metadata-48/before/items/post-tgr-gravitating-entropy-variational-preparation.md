---
id: post-tgr-gravitating-entropy-variational-preparation
kind: postulate
title: "Supplied thermodynamic chart and gravitational entropy variation model"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 7
deps:
  - def-tgr-framework-units
  - post-tgr-local-material-thermodynamics
  - def-tgr-spherical-static-state-domain
  - def-tgr-spherical-entropy-constraint-functional
dependency_roles:
  def-tgr-framework-units: formulation-prerequisite
  post-tgr-local-material-thermodynamics: physical-assumption
  def-tgr-spherical-static-state-domain: formulation-prerequisite
  def-tgr-spherical-entropy-constraint-functional: formulation-prerequisite
justified_by: []
physical_scope: >-
  Fixed-radius static spherical Lambda=0 Einstein-fluid model with a supplied
  compatible local-material entropy chart, positive-b profiles, proper entropy
  and particle number, Einstein mass-energy constraint, constrained first
  variations and a specified boundary clock; no arbitrary barotropic EOS,
  entropy maximum, maximizing-profile existence, vacuum match, empirical claim,
  or dynamical stability.
empirical_premises: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "P.-H. Chavanis, Statistical mechanics of self-gravitating systems in general relativity: I. The quantum Fermi gas, arXiv:1908.10806v1 (2019), Sec. III.E, Eqs. (138)–(163)"
      url: "https://arxiv.org/pdf/1908.10806"
verification:
  precheck: pass
---

## Postulate

Assume $\mathrm{ZF}+\mathrm{AC}_\omega$ exactly as in [[def-tgr-spherical-entropy-constraint-functional]]. Adopt a separate static, spherically symmetric, isotropic $\Lambda=0$ Einstein-fluid preparation using the geometry and $(-,+,+,+)$, $x^0=ct$ conventions of [[def-tgr-spherical-static-state-domain]], without a separate barotropic relation $\varepsilon=\mathcal E(P)$. The adopted field equation is $G^a{}_b=(8\pi G/c^4)T^a{}_b$ with $T^a{}_b=\operatorname{diag}(-\varepsilon(r),P(r),P(r),P(r))$ and the signed curvature convention in [[def-tgr-spherical-static-state-domain]]. Fix a radius $R>0$, and supply a $C^2$ open state chart $\mathcal U\subset(0,\infty)^2$ with coordinates energy density $\varepsilon$ in $\mathrm{J\,m^{-3}}$ and fixed-composition marker number density $n$ in $\mathrm{m^{-3}}$. Supply $s\in C^2(\mathcal U,\mathbb R)$ in $\mathrm{J\,K^{-1}\,m^{-3}}$ with $s_\varepsilon>0$, and define
$$\Theta:=1/s_\varepsilon,\qquad \mu:=-\Theta s_n,\qquad P:=\Theta s+\mu n-\varepsilon.$$
Assume this chart is compatible with the adopted material energy-per-marker function $e(v,\sigma_p)$ of [[post-tgr-local-material-thermodynamics]]: $v=1/n$, $\sigma_p=s/n$, $\varepsilon=n e(1/n,s/n)$, and $\Theta=e_{\sigma_p}>0$ on the supplied chart. The symbols $\Theta,\mu,P$ respectively have units kelvins, joules, and $\mathrm{J\,m^{-3}}$. The local identities $d\varepsilon=\Theta\,ds+\mu\,dn$ and $dP=s\,d\Theta+n\,d\mu$ are those of the exact mathematical chart definition [[def-tgr-spherical-entropy-constraint-functional]].

For positive even $C^2$ profiles $(\varepsilon(r),n(r))$ with compact range in $\mathcal U$, define $M,b,S,N_b,E$ exactly by [[def-tgr-spherical-entropy-constraint-functional]] and require $b(r)\ge b_*>0$ on $[0,R]$. The adopted proper entropy and particle number are $S=4\pi\int_0^R s r^2b^{-1/2}dr$ and $N_b=4\pi\int_0^R n r^2b^{-1/2}dr$, while the constrained mass-energy is $E=c^2M(R)=4\pi\int_0^R\varepsilon r^2dr$. Restrict variations to the supplied positive-$b$ chart at fixed $R$ and fixed $E,N_b$, and choose the boundary time normalization $e^{\phi(R)}=\sqrt{b(R)}$.

This model supplies local material thermodynamics and a gravitational mass constraint as assumptions. Its variation problem is not an independent derivation of all Einstein equations. A stationary profile is only a first-variation critical point; no entropy maximum, existence of a maximizing profile, boundary vacuum matching, or physical observation is assumed.

