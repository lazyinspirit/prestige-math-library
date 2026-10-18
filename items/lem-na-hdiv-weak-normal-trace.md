---
id: lem-na-hdiv-weak-normal-trace
kind: lemma
title: Weak normal trace by Green duality
status: draft
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps:
  [
    def-na-hdiv-space,
    def-sobolev-space-wkp-and-its-norm,
    def-wkp-zero-as-a-sobolev-closure,
    cor-cauchy-schwarz-inequality-for-l-two,
    def-countable-choice
  ]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Daniele Boffi, Franco Brezzi and Michel Fortin, Mixed Finite Element
        Methods and Applications"
      url: https://www.karlin.mff.cuni.cz/~knobloch/FILES/Boffi-Brezzi-Fortin-Mixed_FEMs_and_Applications.pdf
      locator: "Complete textbook, Chapter 2 §2.1.1, Lemma 2.1.1 and its proof: normal
        trace in the dual trace space and Green's formula."
    - title: "Jean-Luc Guermond, MATH 661 Fall 2025, Part III Chapter 16: Local
        interpolation in H(div) and H(curl) (I)"
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap16.pdf
      locator: "Complete chapter, §16.1.1: face degrees of freedom and their Sobolev
        regularity domain."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Assume Countable Choice for the Sobolev-space interfaces below. Let $D\subseteq\mathbb R^d$ be open and $v\in H(\operatorname{div};D)$. Define the trace quotient
$$T_D:=H^1(D)/H^1_0(D),\qquad \|[w]\|_{T_D}:=\inf_{z\in H^1_0(D)}\|w+z\|_{H^1(D)}.$$
Then the formula
$$
\langle\gamma_n v,[w]\rangle:=\int_D\bigl(v\cdot\nabla w+(\operatorname{div}v)w\bigr)\,dx
$$
is independent of the representative $w$, defines a bounded real linear functional $\gamma_n v\in T_D'$, and satisfies $\|\gamma_n v\|_{T_D'}\le\|v\|_{H(\operatorname{div};D)}$. This functional is the weak normal trace; no pointwise boundary value is asserted.

## Facts & Assumptions

**Given:** Countable Choice; an open set $D$; a real $v\in H(\operatorname{div};D)$; $H^1(D)=W^{1,2}(D)$ and $H^1_0(D)=W^{1,2}_0(D)$.

[A1] Countable Choice is assumed by the cited Sobolev class and zero-boundary closure interfaces. ([[def-countable-choice]], [[def-sobolev-space-wkp-and-its-norm]], [[def-wkp-zero-as-a-sobolev-closure]])

[F1] The distributional divergence satisfies $\int_D v\cdot\nabla\phi+ (\operatorname{div}v)\phi=0$ for every $\phi\in C_c^\infty(D;\mathbb R)$. ([[def-na-hdiv-space]])

[F2] $H^1_0(D)$ is the $H^1$-norm closure of $C_c^\infty(D;\mathbb R)$. ([[def-wkp-zero-as-a-sobolev-closure]])

[F3] The real $L^2$ Cauchy–Schwarz inequality controls both scalar pairings and the componentwise vector pairing. ([[cor-cauchy-schwarz-inequality-for-l-two]])

## Proof

1.1 For $w\in H^1(D)$ put $L_v(w):=\int_D(v\cdot\nabla w+(\operatorname{div}v)w)$. The two integrals are finite by [F3], and Cauchy–Schwarz in $\mathbb R^2$ gives $|L_v(w)|\le\|v\|_2\|\nabla w\|_2+\|\operatorname{div}v\|_2\|w\|_2\le\|v\|_{H(\operatorname{div};D)}\|w\|_{H^1(D)}.$ Thus $L_v$ is a bounded real linear functional on $H^1(D)$. [F1, F3, algebra]

2.1 For every $\phi\in C_c^\infty(D;\mathbb R)$, [F1] gives $L_v(\phi)=0$. If $z\in H^1_0(D)$, then for each $\varepsilon>0$, [F2] gives such a $\phi$ with $\|z-\phi\|_{H^1}<\varepsilon$; step 1.1 yields $|L_v(z)|=|L_v(z-\phi)|\le\|v\|_{H(\operatorname{div})}\varepsilon$. Since this holds for every $\varepsilon>0$, $L_v(z)=0$. Therefore $L_v$ is constant on each coset of $H^1_0(D)$ and defines $\gamma_n v$ on $T_D$. [A1, F1, F2, step 1.1, choose, algebra]

3.1 For any $[w]\in T_D$, step 2.1 makes $L_v(w)$ the same for every representative. Applying step 1.1 to every representative $w+z$, $z\in H^1_0(D)$, and taking the infimum of their $H^1$ norms gives $|\langle\gamma_n v,[w]\rangle|\le\|v\|_{H(\operatorname{div};D)}\|[w]\|_{T_D}$. Hence $\gamma_n v$ is bounded with the claimed norm. [step 1.1, step 2.1, algebra] ∎