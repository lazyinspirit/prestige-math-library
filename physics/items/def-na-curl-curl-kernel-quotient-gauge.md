---
id: def-na-curl-curl-kernel-quotient-gauge
kind: definition
title: Kernel quotient and gauge for discrete curl-curl
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps: [def-na-lowest-order-whitney-de-rham-spaces, def-na-hcurl-space, def-countable-choice]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Long Chen, Finite Element Methods for Maxwell Equations, complete lecture notes
      url: https://www.math.uci.edu/~chenlong/226/FEMMaxwell.pdf
    - title: "Douglas N. Arnold, Richard S. Falk, and Ragnar Winther, Finite element exterior calculus: from Hodge theory to numerical stability"
      url: https://sites.math.rutgers.edu/~falk/papers/bulletin-orig.pdf
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Definition

Assume Countable Choice for the graph-space uniqueness and $L^2$ conventions of [[def-na-hcurl-space]]. Let $V_h=N_h^1$ be the lowest-order edge space on a finite tetrahedral mesh, as in [[def-na-lowest-order-whitney-de-rham-spaces]]. It is finite dimensional: restriction to the finitely many cells injects it into the finite product of the local spaces, each spanned by at most six Whitney edge fields. Injectivity holds because the cells cover $\Omega$ up to their measure-zero facets. Use the componentwise real $L^2$ inner product defined in [[def-na-hcurl-space]]. Define its curl kernel and the $L^2$ gauge space by
$$K_h:=\{v_h\in V_h:\operatorname{curl}v_h=0\},\qquad Z_h:=V_h\cap K_h^\perp.$$
The quotient $\dot V_h:=V_h/K_h$ has norm $\|[v_h]\|_{\operatorname{curl}}:=\|\operatorname{curl}v_h\|_{L^2(\Omega)}$; this is well-defined and positive definite because two representatives differ by an element of $K_h$. The bilinear form induced by curl-curl is $a_h([u_h],[v_h])=(\operatorname{curl}u_h,\operatorname{curl}v_h)_{L^2}$. A representative of a quotient solution is fixed by the gauge condition $u_h\in Z_h$. The mixed gauge system uses a multiplier $p_h\in K_h$:
$$a_h(u_h,v_h)+(p_h,v_h)_{L^2}=f(v_h)\quad(v_h\in V_h),\qquad (u_h,q_h)_{L^2}=0\quad(q_h\in K_h).$$
The quotient energy norm, rather than the full $H(\operatorname{curl})$ norm, is the norm controlled by this definition.
