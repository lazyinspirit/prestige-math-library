---
id: thm-uniqueness-of-lp-mild-heat-solutions-in-the-convolution-class
kind: theorem
title: "Uniqueness of strongly continuous mild heat solutions"
status: draft
origin: pipeline
deps:
  - def-countable-choice
  - thm-heat-cauchy-solution-for-lp-data
  - thm-l-one-approximate-identities-converge-in-l-p
landmark: false
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "John K. Hunter, Notes on Partial Differential Equations (revised 18 June 2014, UC Davis)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "§5.1.1–5.1.2, printed pp. 129–131, (5.6)–(5.9), Theorem 5.5"
    - title: "Jared Speck, MIT 18.152 Introduction to Partial Differential Equations, Class Meeting #5: The Fundamental Solution for the Heat Equation (Fall 2011)"
      url: "https://ocw.mit.edu/courses/18-152-introduction-to-partial-differential-equations-fall-2011/9acdeff6449529106ac254f7ada967da_MIT18_152F11_lec_05.pdf"
      locator: "Definition 1.0.1, p. 1, formula (1.0.2), and §1.1, pp. 4–5"
---

## Statement

Assume Countable Choice. Let $n\ge1$, $1\le p<\infty$, $T>0$,
$u\in C([0,T];L^p(\mathbb R^n))$, $u(0)=f$, and $u(t)=H_{t-s}u(s)$ for every
$0<s<t\le T$. Then $u(t)=H_tf$ for all $0\le t\le T$. Hence the heat
evolution is the unique solution in this class. This is uniqueness for the
semigroup relation, not an unrestricted classical uniqueness assertion or a
claim of strong continuity on all $L^\infty$.

## Facts & Assumptions

**Given:** Countable Choice, $n\ge1$, $1\le p<\infty$, $T>0$,
$u\in C([0,T];L^p(\mathbb R^n))$ with $u(0)=f$ and
$u(t)=H_{t-s}u(s)$ for all $0<s<t\le T$, and $t\in(0,T]$ with $s\in(0,t)$.

[A1] Countable Choice is the hypothesis carried by the evolution suppliers
below ([[def-countable-choice]]).

[F1] For $1\le p<\infty$ the heat evolution satisfies the semigroup law
$H_{t+s}=H_tH_s$ on $L^p$ for all $s,t\ge0$ with $H_0$ the identity, the
contraction bound $\|H_rf\|_p\le\|f\|_p$, and strong continuity at zero,
$\|H_rf-f\|_p\to0$ as $r\downarrow0^+$, for every $f\in L^p$
([[thm-heat-cauchy-solution-for-lp-data]]).

[F2] If $(K_\varepsilon)$ is an $L^1$ approximate identity and $f\in L^p$,
$1\le p<\infty$, then $\|f*K_\varepsilon-f\|_p\to0$
([[thm-l-one-approximate-identities-converge-in-l-p]]); this is the mechanism
behind the strong continuity recorded in [F1].



## Proof

**Proof technique:** direct.

1.1 Fix $t\in(0,T]$ and $0<s<t$. By the assumed semigroup relation at time $t$ and at time $s$, and by linearity of $H_{t-s}$ and the semigroup law of [F1], $u(t)-H_tf=H_{t-s}u(s)-H_{t-s}H_sf=H_{t-s}\bigl(u(s)-H_sf\bigr)$. [A1, F1, given]

2.1 Norm bound: applying the contraction clause of [F1] to the last expression and then the triangle inequality gives $\|u(t)-H_tf\|_p\le\|u(s)-H_sf\|_p\le\|u(s)-f\|_p+\|f-H_sf\|_p$. [step 1.1, F1, given]

3.1 Limit: the continuity of $u$ at $0$ in the $L^p$ norm gives $\|u(s)-f\|_p=\|u(s)-u(0)\|_p\to0$ as $s\downarrow0^+$, and the strong continuity clause of [F1] gives $\|H_sf-f\|_p\to0$; hence the right-hand side of step 2.1 tends to $0$, so the nonnegative number $\|u(t)-H_tf\|_p$ is $0$ and $u(t)=H_tf$ in $L^p$ for every $t\in(0,T]$. At $t=0$ the identity $u(0)=f=H_0f$ is the hypothesis and the identity case of [F1]. [F1, F2, step 2.1, given, algebra]

4.1 Existence in the same class: the map $t\mapsto H_tf$ lies in $C([0,T];L^p)$: at $t=0$ this is the strong continuity of [F1], and for $t>0$ and $h>0$ the semigroup law and contraction give $\|H_{t+h}f-H_tf\|_p\le\|H_hf-f\|_p$, while for $h<0$ with $t+h\ge0$ they give $\|H_{t+h}f-H_tf\|_p\le\|H_{-h}f-f\|_p$, and both bounds tend to $0$ as $|h|\to0$. [step 3.1, F1, given]

5.1 Steps 1.1, 2.1 and 3.1 show that any $u$ in the stated class coincides with $t\mapsto H_tf$ on $[0,T]$, and step 4.1 shows that $t\mapsto H_tf$ itself lies in that class, so the heat evolution is the unique solution of the semigroup relation with the given initial datum in $C([0,T];L^p)$. [step 3.1, step 4.1, given] ∎
