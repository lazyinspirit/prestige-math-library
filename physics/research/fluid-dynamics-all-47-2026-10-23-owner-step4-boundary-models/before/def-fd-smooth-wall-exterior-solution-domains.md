---
id: def-fd-smooth-wall-exterior-solution-domains
kind: definition
title: "Smooth bounded-wall and exterior solution domains"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 0
deps: []
dependency_roles: {}
justified_by: []
forward_refs: []
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "David Tong, Fluid Mechanics, Chapter 2, §§3.2.1–3.2.3"
      url: "https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids2.pdf"
verification:
  precheck: pending
---

## Definition

A bounded wall domain is a bounded connected open set $\Omega\subset\mathbb R^3$ with $C^2$ boundary. For $T>0$, its classical velocity fields are maps $u:[0,T]\times\overline\Omega\to\mathbb R^3$ in $C^1([0,T];C^2(\overline\Omega;\mathbb R^3))$, and its classical pressures are maps $p:[0,T]\times\overline\Omega\to\mathbb R$ in $C([0,T];C^1(\overline\Omega;\mathbb R))$. Here spatial derivatives through the indicated order extend continuously to the boundary, and time continuity and differentiability are taken in the corresponding spatial supremum norms. The boundary normal $n$ is the outward unit normal. A no-slip trace is $u|_{\partial\Omega}=0$, a prescribed moving-wall trace is $u|_{\partial\Omega}=g$, and an impermeable trace is $u\cdot n=0$; these are distinct boundary data.

An exterior domain is $\Omega_{\mathrm{ext}}=\mathbb R^3\setminus K$, where $K\subset\mathbb R^3$ is compact with $C^2$ boundary and $\Omega_{\mathrm{ext}}$ is connected. The exterior classical fields are maps $u:[0,T]\times\overline\Omega_{\mathrm{ext}}\to\mathbb R^3$ and $p:[0,T]\times\overline\Omega_{\mathrm{ext}}\to\mathbb R$, with $u\in C^1([0,T];C^2_{\mathrm{loc}}(\overline\Omega_{\mathrm{ext}};\mathbb R^3))$ and $p\in C([0,T];C^1_{\mathrm{loc}}(\overline\Omega_{\mathrm{ext}};\mathbb R))$. The local spaces require the indicated spatial derivatives to extend continuously up to $\partial K$; their topology is uniform convergence of those derivatives on each compact subset of the closure. The domain definition alone imposes no condition at infinity. An exterior energy argument must state additional decay or weighted-space hypotheses. We call the explicit bounds $|u(t,x)|=O(|x|^{-2})$, $|\nabla u(t,x)|=O(|x|^{-3})$, and $|p(t,x)|=O(|x|^{-2})$, uniform for $t\in[0,T]$, a cutoff-decay condition; this is additional solution data, not part of the bare exterior domain, and no energy identity follows from this definition alone.

## Definition references

[David Tong, *Fluid Mechanics*, Chapter 2, §§3.2.1–3.2.3](https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids2.pdf)
