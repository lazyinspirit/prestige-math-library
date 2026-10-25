---
id: cex-characteristic-initial-data-for-a-fully-nonlinear-equation
kind: counterexample
title: "Characteristic initial data need not determine a fully nonlinear solution"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-fully-nonlinear-first-order-pde-and-complete-integral, def-lagrange-charpit-characteristic-system, thm-local-fully-nonlinear-cauchy-problem-by-charpit]
justified_by: []
proof_strategy: direct
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "First order PDE: The Methods of Characteristics"
      url: "https://www.kth.se/social/files/560a55b6f276543ece51692f/Lectures_Method_of_Characteristics.pdf"
---

## Statement refuted

Characteristic initial data always determine a unique local fully nonlinear classical solution.

## Counterexample

**Given:** The equation $F(x,y,z,p_x,p_y)=p_x^2=0$ and data $u(x,0)=0$.

**Proof technique:** direct.

1.1 Here $F_p=(2p_x,0)=0$ on $F=0$, so $[F_p,D\gamma]$ has rank $1<2$ for $\gamma(y)=(y,0)$. [given, algebra]

1.2 Every $u(x,y)=f(y)$ with $f(0)=0$ has $u_x=0$, hence solves $F=0$ and attains the data. [given, algebra]

2.1 Choosing distinct such $f$ gives distinct local solutions, and step 1.1 identifies the failed rank hypothesis. [step 1.1, step 1.2, construct] ∎
