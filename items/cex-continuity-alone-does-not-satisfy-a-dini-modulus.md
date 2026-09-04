---
id: cex-continuity-alone-does-not-satisfy-a-dini-modulus
kind: counterexample
title: "Continuity alone does not satisfy a Dini modulus"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [thm-dini-pointwise-convergence-criterion-for-fourier-series]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Richard S. Laugesen, Harmonic Analysis Lecture Notes"
      url: "https://arxiv.org/pdf/0903.3845"
    - title: "Loukas Grafakos, Classical Fourier Analysis, 3rd ed."
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
---

## Statement refuted

Assume the Axiom of Countable Choice.

Every continuous one-periodic function automatically satisfies the Dini
integrability condition at each point.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice and the Dini criterion on the Fourier page ([[thm-dini-pointwise-convergence-criterion-for-fourier-series]]).

[L1] Assuming the Axiom of Countable Choice, if $$\int_0^\delta \frac{|f(x+t)+f(x-t)-2s|}{t}\,dt<\infty,$$ then the Fourier partial sums converge to $s$ at $x$ ([[thm-dini-pointwise-convergence-criterion-for-fourier-series]]).

## Counterexample

**Proof technique:** direct.

1.1 Let $d(x,\mathbb Z):=\min_{m\in\mathbb Z}|x-m|$ and define the one-periodic function $$f(x):=\begin{cases} 0, & d(x,\mathbb Z)=0,\\ \displaystyle\frac{1}{\log(e/d(x,\mathbb Z))}, & d(x,\mathbb Z)>0. \end{cases}$$ Because $d(x,\mathbb Z)\to0$ exactly when $x$ approaches an integer and $1/\log(e/r)\to0$ as $r\downarrow0$, the function $f$ is continuous on $\mathbb T$. [given, algebra]

2.1 At $x=0$ one has $f(0)=0$ and, for $0<t\le1/4$, $d(t,\mathbb Z)=d(-t,\mathbb Z)=t$. Hence $$f(t)+f(-t)-2f(0)=\frac{2}{\log(e/t)}.$$ Therefore $$\int_0^{1/4}\frac{|f(t)+f(-t)-2f(0)|}{t}\,dt=2\int_0^{1/4}\frac{dt}{t\log(e/t)}=\infty,$$ because the change of variables $u=\log(e/t)$ turns the integral into $\int_{\log(4e)}^\infty du/u$. So the hypothesis in [L1] fails at $x=0$: $f$ is continuous but does not satisfy the Dini condition there. [L1, step 1.1, algebra] ∎
