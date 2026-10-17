---
id: ex-tgrmath-parcel-rest-shift
kind: example
title: "Parcel derivatives and rest-energy shift"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 2
proof_strategy: direct
deps:
  - def-tgr-local-fluid-state
  - lem-tgr-local-gibbs-euler
dependency_roles:
  def-tgr-local-fluid-state: mathematical-premise
  lem-tgr-local-gibbs-euler: mathematical-premise
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Éric Gourgoulhon, An Introduction to Relativistic Hydrodynamics, arXiv:gr-qc/0603009v1 (2006), §4.3 equations (4.11)–(4.14)"
      url: "https://arxiv.org/pdf/gr-qc/0603009"
    - title: "Nicolas Borghini, Elements of Hydrodynamics, University of Bielefeld lecture notes (2015), §§IX.2 and Appendix A"
      url: "https://www.physik.uni-bielefeld.de/~borghini/Teaching/Hydrodynamics15/Hydrodynamics.pdf"
---

## Example

Let $e_0\in C^2(X,\mathbb R)$ be any specified single-marker state function on a nonempty open state domain $X\subset(0,\infty)\times\mathbb R$. Fix a mass per marker $m\ge0$ with units $\mathrm{kg\,marker^{-1}}$ and $c>0$ with units $\mathrm{m\,s^{-1}}$, and define
$$e_m(v,\sigma_p):=e_0(v,\sigma_p)+mc^2.$$
Then $e_m\in C^2(X,\mathbb R)$. The derived temperature and pressure are unchanged, while $H_m=H_0+mc^2$, $\mu_m=\mu_0+mc^2$, $\varepsilon_m=\varepsilon_0+nmc^2$, and $h_m=h_0+nmc^2$. For parcel totals, $E_m(\mathsf S,\mathsf V,\mathsf N)=E_0(\mathsf S,\mathsf V,\mathsf N)+\mathsf Nmc^2$. This is a mathematical change of the state function by a constant rest-energy offset, not an empirical statement about a material.

## Facts & Assumptions

**Given:** The state domain, state function, marker volume and entropy coordinates from [[def-tgr-local-fluid-state]], and the differential identities of [[lem-tgr-local-gibbs-euler]].

[F1] [[def-tgr-local-fluid-state]]: $T=e_{\sigma_p}$, $p=-e_v$, $\varepsilon=ne$, $H=e+pv$, $h=\varepsilon+p$, and $\mu=H-T\sigma_p$.

[F2] [[lem-tgr-local-gibbs-euler]]: the parcel energy $E(\mathsf S,\mathsf V,\mathsf N)=\mathsf N e(\mathsf V/\mathsf N,\mathsf S/\mathsf N)$ has differential $dE=T\,d\mathsf S-p\,d\mathsf V+\mu\,d\mathsf N$.

[A1] $m\ge0$ and $c>0$ are fixed parameters, so the added energy per marker is the constant $mc^2$ on $X$.

## Verification

1.1 Since $mc^2$ is constant in $(v,\sigma_p)$, $(e_m)_{\sigma_p}=(e_0)_{\sigma_p}$ and $-(e_m)_v=-(e_0)_v$. Thus the derived temperature and pressure are unchanged. [F1, A1, algebra]

2.1 The definitions give $H_m=e_m+p_mv=H_0+mc^2$ and $\mu_m=H_m-T_m\sigma_p=\mu_0+mc^2$. [F1, step 1.1, A1, algebra]

2.2 With $n=1/v$ unchanged, $\varepsilon_m=ne_m=\varepsilon_0+nmc^2$ and $h_m=\varepsilon_m+p_m=h_0+nmc^2$. [F1, step 1.1, A1, algebra]

3.1 At fixed $(\mathsf S,\mathsf V,\mathsf N)$, the parcel construction gives $E_m=E_0+\mathsf Nmc^2$. Differentiating adds only $mc^2\,d\mathsf N$ to $dE_0$; hence at fixed marker count it changes neither the entropy derivative $T$ nor the pressure-work derivative $-p$. This agrees with the chemical-potential shift in step 2.1 and the parcel first law in [F2]. [F2, step 2.1, A1, algebra] ∎

