---
id: ex-phase-field-allen-cahn-stationary-front
kind: example
title: The one-dimensional Allen–Cahn double-well front
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps: [ def-phase-field-gradient-flow-and-double-well ]
proof_strategy: direct
aliases: []
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Jie Shen and Xiaofeng Yang, Numerical approximations of Allen-Cahn and
        Cahn-Hilliard equations, Discrete and Continuous Dynamical Systems A 28
        (2010), 1669–1691
      url: https://www.math.purdue.edu/~shen7/pub/ac_ch.pdf
      locator: "§1, equations (1.1)–(1.5), PDF pp. 1–2: the Allen–Cahn Euler–Lagrange
        equation and double-well model. The heteroclinic profile is verified
        directly here."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Example

For $\kappa,\varepsilon>0$, on the real line set
$$u_\varepsilon(x)=\tanh\!\left(\frac{x}{\sqrt{2\kappa}\,\varepsilon}\right).$$
This is a stationary finite-energy heteroclinic profile for the one-dimensional Allen–Cahn Euler–Lagrange equation $-\kappa u''+f_\varepsilon(u)=0$. It is a profile example on $\mathbb R$, not a boundary-value solution on a bounded no-flux interval.

## Facts & Assumptions

**Given:** The double-well potential and Allen–Cahn variational derivative in [[def-phase-field-gradient-flow-and-double-well]], with fixed $\kappa,\varepsilon>0$.

[F1] [[def-phase-field-gradient-flow-and-double-well]]: $f_\varepsilon(s)=(s^3-s)/\varepsilon^2$ and the stationary Allen–Cahn equation is $-\kappa u''+f_\varepsilon(u)=0$.

## Verification

1.1 Put $a=(\sqrt{2\kappa}\,\varepsilon)^{-1}$. Differentiation gives $u_\varepsilon'=a(1-u_\varepsilon^2)$ and $u_\varepsilon''=-2a^2u_\varepsilon(1-u_\varepsilon^2)=2a^2(u_\varepsilon^3-u_\varepsilon)$. Since $2\kappa a^2=\varepsilon^{-2}$, $-\kappa u_\varepsilon''+f_\varepsilon(u_\varepsilon)=0$ by [F1]. [F1, algebra]

2.1 The limits of $u_\varepsilon$ at $\pm\infty$ are $\pm1$. Also $1-u_\varepsilon^2=\operatorname{sech}^2(ax)$, so the energy density is $\frac{1}{2\varepsilon^2}\operatorname{sech}^4(ax)$, which is integrable because it decays exponentially at both ends. Hence the profile has finite energy and joins the two wells. [given, step 1.1, algebra] ∎

