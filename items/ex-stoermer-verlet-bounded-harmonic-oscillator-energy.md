---
id: ex-stoermer-verlet-bounded-harmonic-oscillator-energy
kind: example
title: Störmer–Verlet has bounded oscillatory energy error on the harmonic oscillator
status: draft
origin: pipeline
dependency_level: 0
deps:
  - def-leapfrog-step-map
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Ernst Hairer, Geometric Numerical Integration, TU München Lecture 3: Backward error analysis"
      url: "https://www.unige.ch/~hairer/poly_geoint/week3.pdf"
      locator: "PDF pp. 5–8"
    - title: "Nikolaj Nordkvist and Poul G. Hjorth, Classical Mechanics and Symplectic Integration"
      url: "https://backend.orbit.dtu.dk/ws/files/2512495/lecture_notes-1.pdf"
      locator: "§3.5, PDF pp. 45–46"
---

## Example

For $H(q,p)=\tfrac12(q^2+p^2)$, use the real-parameter kick and drift shears of [[def-leapfrog-step-map]] and define the signed kick-drift-kick step $S_h:=K_{h/2}\circ D_h\circ K_{h/2}$ for real $h$; for $h>0$ this is the published one-step map, and for $h<0$ it is its same-form signed-step extension. If $0<|h|<2$, this step preserves the positive quadratic form
$$\widetilde H_h(q,p)=\tfrac12\bigl((1-h^2/4)q^2+p^2\bigr).$$
Consequently its original-energy error is bounded uniformly over all step counts by
$$|H(q_n,p_n)-H(q_0,p_0)|\le \frac{h^2}{8}\left(\frac{2\widetilde H_h(q_0,p_0)}{1-h^2/4}+q_0^2\right).$$

## Facts & Assumptions

**Given:** The published kick-drift-kick map, $M=1$, $V(q)=q^2/2$, and $0<|h|<2$.

[F1] The force kicks and drifts are defined for real parameters, with formulas $K_a(q,p)=(q,p-aq)$ and $D_b(q,p)=(q+bp,p)$; their signed composition is $S_h=K_{h/2}\circ D_h\circ K_{h/2}$. For $h>0$ it is the one-step map in [[def-leapfrog-step-map]].

## Verification

1.1 The first kick gives $p_{1/2}=p-hq/2$, the drift gives $q_1=q+hp_{1/2}=(1-h^2/2)q+hp$, and the last kick gives $p_1=p_{1/2}-hq_1/2=-h(1-h^2/4)q+(1-h^2/2)p$. Thus $S_h=\begin{pmatrix}a&h\\-hs&a\end{pmatrix},\quad a=1-h^2/2,\quad s=1-h^2/4.$ [F1, given, algebra]

2.1 Direct multiplication gives $S_h^T\begin{pmatrix}s&0\\0&1\end{pmatrix}S_h=\begin{pmatrix}s(a^2+h^2s)&0\\0&a^2+h^2s\end{pmatrix}=\begin{pmatrix}s&0\\0&1\end{pmatrix},$ because $a^2+h^2s=1$. Hence $\widetilde H_h$ is exactly invariant. Since $s>0$, invariance implies $q_n^2\le2\widetilde H_h(q_0,p_0)/s$ for every $n$. [step 1.1, algebra]

3.1 The identity $\widetilde H_h=H-(h^2/8)q^2$ gives $H(q_n,p_n)-H(q_0,p_0)=\frac{h^2}{8}(q_n^2-q_0^2).$ Apply the bound from step 2.1 and the triangle inequality to obtain the stated uniform error estimate. [step 2.1, algebra] ∎
