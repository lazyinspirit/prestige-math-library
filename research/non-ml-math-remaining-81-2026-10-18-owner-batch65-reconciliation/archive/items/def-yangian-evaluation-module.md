---
id: def-yangian-evaluation-module
kind: definition
title: "Evaluation modules of the type-A RTT Yangian"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps: [def-yangian-gl-n-rtt-presentation, def-matrix-units]
justified_by: [thm-yangian-evaluation-module-well-defined]
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "A. I. Molev, M. L. Nazarov, and G. I. Olshanski, Yangians and classical Lie algebras"
      url: "https://arxiv.org/pdf/hep-th/9409025"
      locator: "§§1.16–1.19: the evaluation homomorphism from Y(gl_N) to U(gl_N) and the matrix-unit convention."
    - title: "L. D. Faddeev, How Algebraic Bethe Ansatz Works for Integrable Model"
      url: "https://arxiv.org/pdf/hep-th/9605187"
      locator: "§3, equations (31)–(39): the fundamental Lax operator, permutation, and rational R-matrix in the spin-1/2 representation."
verification:
  precheck: n/a
---

## Definition

Let $N\ge2$, let $\mathfrak{gl}_N(\mathbb C)=M_N(\mathbb C)$ with commutator bracket, and write $E_{ij}$ for its matrix units from [[def-matrix-units]]. For a left $\mathfrak{gl}_N$-module $W$ with action $\rho$ and a parameter $a\in\mathbb C$, define the candidate evaluation module $W(a)$ by the generating-series action

$$t_{ij}(u)\longmapsto \delta_{ij}I_W-\frac{i\rho(E_{ij})}{u-a},$$

where $(u-a)^{-1}=u^{-1}\sum_{r\ge0}(a/u)^r$ is expanded at $u=\infty$. The map defines a Yangian module by [[thm-yangian-evaluation-module-well-defined]]. The rational expression has a pole at $u=a$; the formal series is always defined.

The dual-natural vector space $V_N^\vee$ has basis $f^1,\ldots,f^N$ and the candidate action $\rho^\vee(E_{ij})f^k=-\delta_{ik}f^j$. The following well-definedness theorem verifies that this is a $\mathfrak{gl}_N$-module. On it, the auxiliary matrix of the evaluation series is $I+iP_N/(u-a)$, so the unnormalized Lax matrix $(u-a)T_0(u)$ is $R_N(u-a)=(u-a)I+iP_N$.
