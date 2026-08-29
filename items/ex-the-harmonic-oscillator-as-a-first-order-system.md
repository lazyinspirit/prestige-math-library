---
id: ex-the-harmonic-oscillator-as-a-first-order-system
kind: example
title: "The harmonic oscillator as a first-order system"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-fundamental-theorem-for-autonomous-smooth-odes,
       ex-a-linear-system-and-its-fundamental-matrix]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Nigel Hitchin, Differentiable Manifolds, Appendix §10.2"
      url: "https://web.archive.org/web/20201111215108id_/https://people.maths.ox.ac.uk/hitchin/files/LectureNotes/Differentiable_manifolds/manifolds2014.pdf"
    - title: "Chin-Lung Wang, Banach Calculus, §4.1"
      url: "https://www.math.ntu.edu.tw/~dragon/Lecture%20Notes/Banach%20Calculus%202012.pdf"
pipeline_run: null
---

## Example

The second-order equation

$$q''+q=0$$

becomes the first-order system

$$\begin{pmatrix}q\\p\end{pmatrix}'=\begin{pmatrix}0&1\\-1&0\end{pmatrix}\begin{pmatrix}q\\p\end{pmatrix}.$$

Its solutions are

$$q(t)=q_0\cos t+p_0\sin t,\qquad p(t)=-q_0\sin t+p_0\cos t.$$

## Facts & Assumptions

**Given:** The matrix $A=\begin{pmatrix}0&1\\-1&0\end{pmatrix}$.

[L1] Autonomous smooth ODEs have unique local solutions ([[thm-fundamental-theorem-for-autonomous-smooth-odes]]).

[L2] The linear-system example shows how to read a first-order matrix system and its solution operator ([[ex-a-linear-system-and-its-fundamental-matrix]]).

## Verification

**Proof technique:** direct.

1.1 Setting $p=q'$ turns $q''+q=0$ into the displayed first-order system, and [given] conversely differentiating the first equation and substituting the second recovers $q''+q=0$. [given]

2.1 Differentiating the displayed sine-cosine formulas gives [L1, L2, step 1.1] $q'=p$ and $p'=-q$, so they solve the first-order system with $(q(0),p(0))=(q_0,p_0)$. By [L1] the solution is unique, and [L2] identifies the system as the oscillator written in first-order form. [L1, L2, step 1.1]

3.1 Therefore the harmonic oscillator fits the first-order smooth-ODE framework [step 2.1] exactly as claimed. [step 2.1] ∎
