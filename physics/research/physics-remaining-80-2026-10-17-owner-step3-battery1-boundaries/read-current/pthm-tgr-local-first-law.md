---
id: pthm-tgr-local-first-law
kind: physics-theorem
title: "Local Gibbs and parcel first law in the adopted material"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 7
proof_strategy: direct
deps:
  - post-tgr-local-material-thermodynamics
  - lem-tgr-local-gibbs-euler
  - def-tgr-local-fluid-state
dependency_roles:
  post-tgr-local-material-thermodynamics: physical-assumption
  lem-tgr-local-gibbs-euler: mathematical-premise
  def-tgr-local-fluid-state: mathematical-premise
justified_by: []
physical_scope: "Conditional local-equilibrium continuum material with the supplied C2 fixed-composition state function; local parcel calculus only, not a microscopic finite-particle process or global gravitating extensivity."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Éric Gourgoulhon, An Introduction to Relativistic Hydrodynamics, arXiv:gr-qc/0603009v1 (2006), §4.3 equations (4.10)–(4.14) and §5.3 equations (5.8)–(5.10)"
      url: "https://arxiv.org/pdf/gr-qc/0603009"
      locator: "Full 37-page PDF; §4.3, PDF pp. 16–17, equations (4.10)–(4.14): rest-frame total energy including rest mass, fixed-comoving-volume first law (4.12)–(4.13), and state derivatives (4.14). Section 5.3, PDF pp. 18–19: (5.8)–(5.9) are Gibbs/free-enthalpy and Euler identities; (5.10) explicitly allows volume variation and includes −p dV. The local parcel law is derived independently from E=N e(V/N,S/N) under the adopted fixed-composition model."
    - title: "Nicolas Borghini, Elements of Hydrodynamics, University of Bielefeld lecture notes (version of 2 September 2015), §§I.1.3 and IX.3.2"
      url: "https://www.physik.uni-bielefeld.de/~borghini/Teaching/Hydrodynamics15/Hydrodynamics.pdf"
      locator: "Full 184-page PDF; PDF pp. 4–5 and 148: the local-equilibrium continuum premise and the thermodynamic identity used in the perfect-fluid entropy calculation."
---

## Statement

In the adopted fixed-composition local-equilibrium material model of [[post-tgr-local-material-thermodynamics]], let $X\subset(0,\infty)\times\mathbb R$ be its open state domain, let $e\in C^2(X,\mathbb R)$ include the rest-energy contribution, and set $T=e_{\sigma_p}$, $p=-e_v$, $\varepsilon=ne$, and $\mu=e+pv-T\sigma_p$, with $n=1/v$ and $s=n\sigma_p$ as in [[def-tgr-local-fluid-state]]. The model's local state identities are
$$d\varepsilon=T\,ds+\mu\,dn,\qquad \varepsilon+p=Ts+\mu n,\qquad dp=s\,dT+n\,d\mu.$$
For a local continuum parcel with real extensive marker variable $\mathsf N>0$, proper volume $\mathsf V>0$, entropy $\mathsf S\in\mathbb R$, and $(\mathsf V/\mathsf N,\mathsf S/\mathsf N)\in X$, its adopted energy is $E=\mathsf N e(\mathsf V/\mathsf N,\mathsf S/\mathsf N)$. On this open parcel domain it obeys
$$dE=T\,d\mathsf S-p\,d\mathsf V+\mu\,d\mathsf N,\qquad E=T\mathsf S-p\mathsf V+\mu\mathsf N.$$
The count variable is treated continuously as part of the local-equilibrium continuum model; these differentials are not claims about discrete microscopic transitions. The result is conditional model calculus and does not establish that a chosen state function describes a particular material.

## Facts & Assumptions

**Given:** A nonempty open state domain $X\subset(0,\infty)\times\mathbb R$, a supplied $e\in C^2(X,\mathbb R)$, a state $(v,\sigma_p)\in X$, and a local-equilibrium continuum parcel with $\mathsf N,\mathsf V>0$ and $(\mathsf V/\mathsf N,\mathsf S/\mathsf N)\in X$.

[F1] [[post-tgr-local-material-thermodynamics]] (draft physical postulate): for a selected fixed-composition branch, adopt a supplied $C^2$ state function $e(v,\sigma_p)$, $T=e_{\sigma_p}>0$, energy per marker including rest energy, and the parcel assignment $E=\mathsf N e(\mathsf V/\mathsf N,\mathsf S/\mathsf N)$. Its applicability is a model assumption; it asserts no universal or measured equation of state.

[F2] [[lem-tgr-local-gibbs-euler]] (draft mathematical supplier): for such an open $X$ and $C^2$ function $e$, with $v=1/n$, $\sigma_p=s/n$, $T=e_{\sigma_p}$, $p=-e_v$, $\varepsilon=ne$, and $\mu=e+pv-T\sigma_p$, it states $d\varepsilon=T\,ds+\mu\,dn$, $\varepsilon+p=Ts+\mu n$, $dp=s\,dT+n\,d\mu$, and on the positive open parcel domain it proves $dE=T\,d\mathsf S-p\,d\mathsf V+\mu\,d\mathsf N$ and $E=T\mathsf S-p\mathsf V+\mu\,\mathsf N$. These identities apply at exactly the stated open-domain and $C^2$ hypotheses.

[F3] [[def-tgr-local-fluid-state]]: on a nonempty open spacetime set, a $C^2$ state map $(v,\sigma_p)$ takes values in a nonempty open $X\subset(0,\infty)\times\mathbb R$ and defines $n=1/v$, $s=n\sigma_p$, $\varepsilon=ne$, $T=e_{\sigma_p}$, $p=-e_v$, and $\mu=e+pv-T\sigma_p$. The local differential calculation below uses this state definition and the adopted material model.

## Proof

1.1 By the state definitions, $de=e_v\,dv+e_{\sigma_p}\,d\sigma_p=-p\,dv+T\,d\sigma_p$, while $v=1/n$ and $\sigma_p=s/n$ give $dv=-dn/n^2$ and $d\sigma_p=ds/n-s\,dn/n^2$. Therefore $d\varepsilon=d(ne)=e\,dn+n\,de=T\,ds+(e+pv-T\sigma_p)\,dn=T\,ds+\mu\,dn$. Also $\varepsilon+p=n(e+pv)=n(T\sigma_p+\mu)=Ts+\mu n$. [given, F1, F2, F3, algebra]

1.2 On the open set $\mathcal D=\{(\mathsf S,\mathsf V,\mathsf N):\mathsf V>0,\mathsf N>0,(\mathsf V/\mathsf N,\mathsf S/\mathsf N)\in X\}$, the parcel energy is a $C^2$ composition. Differentiating at fixed other parcel coordinates gives $\partial_{\mathsf S}E=e_{\sigma_p}=T$, $\partial_{\mathsf V}E=e_v=-p$, and $\partial_{\mathsf N}E=e-(\mathsf V/\mathsf N)e_v-(\mathsf S/\mathsf N)e_{\sigma_p}=e+pv-T\sigma_p=\mu$. Thus $dE=T\,d\mathsf S-p\,d\mathsf V+\mu\,d\mathsf N$. [given, F1, F2, F3, construct, algebra]

2.1 Differentiate $\varepsilon+p=Ts+\mu n$ and substitute the first identity in step 1.1. The terms $T\,ds$ and $\mu\,dn$ cancel, leaving $dp=s\,dT+n\,d\mu$. This is a state-function identity on the open domain. [F2, F3, step 1.1, algebra]

3.1 Using $\mu=e+pv-T\sigma_p$ and $\mathsf V=\mathsf N v$, $\mathsf S=\mathsf N\sigma_p$, we have $T\mathsf S-p\mathsf V+\mu\mathsf N=\mathsf N(T\sigma_p-pv+e+pv-T\sigma_p)=\mathsf N e=E$. This is a deduction within the adopted continuum material model, not an empirical statement. [given, F1, F3, algebra] ∎
