---
id: lem-ltwo-normalisation-of-sine-modes-on-the-interval
kind: lemma
title: L2 normalisation of the sine modes on an interval
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
deps:
  - def-countable-choice
  - thm-chain-rule
  - thm-sine-and-cosine-addition-formulas
  - thm-sine-and-cosine-derivatives
  - thm-sine-cosine-zero-sets-and-fundamental-period
  - cor-primitives-of-a-continuous-function
  - thm-first-fundamental-theorem-of-calculus-for-l-one
  - lem-l-two-with-the-integral-pairing-is-a-hilbert-space
  - def-l-p-space-as-a-quotient-by-null-functions
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, AMS Graduate Studies in Mathematics)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: '§3.1, printed pp. 50–54 (sine modes $e^{-(\pi n)^2t}\sin(\pi nx)$ for the thin rod and the energy functional (3.24))'
---

## Statement

Assume Countable Choice. For all integers $k,l\ge1$,
$$\int_0^\pi\sin(kx)\sin(lx)\,dx=\frac\pi2\,\delta_{kl}.$$
In particular $\|\sin(k\cdot)\|_{L^2(0,\pi)}=\sqrt{\pi/2}$.

## Facts & Assumptions

**Given:** Countable Choice and integers $k,l\ge1$, and the trigonometric functions of the power-series definition.

[A1] Countable Choice is the ambient hypothesis inherited through the L² inner-product dictionary [F5] ([[def-countable-choice]]).

[F1] Angle addition: $\sin(x+y)=\sin x\cos y+\cos x\sin y$ and $\cos(x+y)=\cos x\cos y-\sin x\sin y$ ([[thm-sine-and-cosine-addition-formulas]]).

[F2] $\sin'=\cos$ and $\cos'=-\sin$, with $\sin0=0$ ([[thm-sine-and-cosine-derivatives]]).

[F3] $\sin x=0$ exactly for $x=m\pi$, $m\in\mathbb Z$ ([[thm-sine-cosine-zero-sets-and-fundamental-period]]).

[F4] On an order-convex $I$ with at least two elements, a continuous function has primitives, and for $a<b$ in $I$ and any primitive $G$ one has $\int_a^b f=G(b)-G(a)$ ([[cor-primitives-of-a-continuous-function]]).

[F5] $L^2(0,\pi)$ is the quotient space of [[def-l-p-space-as-a-quotient-by-null-functions]], and under its Countable Choice hypothesis the integral pairing of [[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]] satisfies $\langle f,f\rangle=\|f\|_{L^2(0,\pi)}^2=\int_0^\pi|f|^2$; Countable Choice is inherited from that supplier ([[def-countable-choice]]).

[F6] Chain rule: $(f\circ g)'(c)=f'(g(c))g'(c)$ at a differentiability point ([[thm-chain-rule]]).

## Proof

**Given:** Countable Choice and integers $k,l\ge1$.

1.1 Combining the two addition formulas [F1] gives the product-to-sum identity $2\sin(kx)\sin(lx)=\cos((k-l)x)-\cos((k+l)x)$ for all real $x$; when $k=l$ it reads $2\sin^2(kx)=1-\cos(2kx)$, which is the same identity with $\cos(0)=1$. [F1, given]

2.1 For every nonzero integer $m$ the function $x\mapsto\sin(mx)/m$ is a primitive of $x\mapsto\cos(mx)$ on $[0,\pi]$ by [F2] and [F6], so the evaluation clause of [F4] ([F3] for the vanishing of sine at the endpoints) gives $\int_0^\pi\cos(mx)\,dx=\frac{\sin(m\pi)-\sin0}{m}=0$; also $\int_0^\pi1\,dx=\pi$. [step 1.1, F2, F3, F4, F6, given]

3.1 If $k\ne l$ then both $k-l$ and $k+l$ are nonzero integers, so step 2.1 and step 1.1 give $\int_0^\pi\sin(kx)\sin(lx)\,dx=\frac12(0-0)=0$; if $k=l$ then $k-l=0$ and $k+l=2k\ne0$, so $\int_0^\pi\sin(kx)^2dx=\frac12(\pi-0)=\frac\pi2$. Hence the displayed identity holds for all integers $k,l\ge1$. [step 1.1, step 2.1, given]

4.1 Taking $k=l$ and using the inner-product dictionary [F5] gives $\|\sin(k\cdot)\|_{L^2(0,\pi)}^2=\int_0^\pi\sin(kx)^2dx=\frac\pi2$ and hence $\|\sin(k\cdot)\|_{L^2(0,\pi)}=\sqrt{\pi/2}$. The integral computation of steps 1.1–3.1 is choice-free; the only use of Countable Choice is the inheritance through [F5] in this last step, needed to read the quotient norm as the integral pairing. [step 3.1, A1, F5, given] ∎ 