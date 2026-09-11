---
id: lem-schwartz-cutoffs-from-the-standard-smooth-step
kind: lemma
title: Explicit compactly supported smooth cutoffs
deps: ["thm-exponential-beats-every-polynomial", "thm-chain-rule-for-total-derivatives", "def-ck-and-multi-index-notation-in-several-variables", "thm-heine-borel-rn"]
status: draft
origin: pipeline
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Semyon Dyatlov, MIT 18.155 (2022)
      url: https://math.mit.edu/~dyatlov/18.155/155-notes.pdf
      locator: Remark 11.5 and Exercise 11.1, pp.120,135 motivate the cutoff; explicit flat-function construction supplied locally, not asserted to occur in Exercise 11.1.
---

## Statement

For $n\ge1$, there exists $\chi\in C_c^\infty(\mathbb R^n)$ with $0\le\chi\le1$, $\chi=1$ on $|x|\le1$, and $\chi=0$ on $|x|\ge2$. For $R>0$, $\chi_R(x)=\chi(x/R)$ satisfies $\partial^\beta\chi_R(x)=R^{-|\beta|}(\partial^\beta\chi)(x/R)$. The construction requires no choice.

## Facts & Assumptions

**Given:** An integer $n\ge1$ and multi-indices as in [[def-ck-and-multi-index-notation-in-several-variables]].

[F1] Exponentials dominate fixed powers at positive infinity ([[thm-exponential-beats-every-polynomial]]).

[F2] The total chain rule holds ([[thm-chain-rule-for-total-derivatives]]).

[F3] Closed bounded subsets of Euclidean space are compact ([[thm-heine-borel-rn]]).

## Proof

**Proof technique:** direct.

1.1 Define $a(t)=e^{-1/t}$ for $t>0$ and $a(t)=0$ for $t\le0$. If $s=1/t$, induction gives $a^{(k)}(t)=P_k(s)e^{-s}$ on $t>0$, with $P_0=1$ and $P_{k+1}(s)=s^2(P_k(s)-P_k'(s))$. By [F1], both $P_k(s)e^{-s}$ and $sP_k(s)e^{-s}$ tend to zero as $s\to\infty$. Extending each derivative by zero to $t\le0$ is therefore continuous; its difference quotient at zero also tends to zero. Induction proves $a\in C^\infty(\mathbb R)$ with every derivative zero at zero. [F1, F2, algebra]

2.1 Set $\sigma(t)=a(t)/(a(t)+a(1-t))$. For $t\le0$, the second summand in the denominator is positive; for $t\ge1$, the first is positive; for $0<t<1$, both are positive. Thus the quotient is smooth, $0\le\sigma\le1$, and $\sigma=0$ on $t\le0$, $\sigma=1$ on $t\ge1$. Define $\chi(x)=\sigma((4-|x|^2)/3)$. Repeated [F2] proves smoothness, and the two constant regions give the claimed unit and zero regions, including their boundaries. Its closed support lies in the closed radius-two ball and is compact by [F3]. [step 1.1, F2, F3]

3.1 Differentiating $\chi(x/R)$ once in coordinate $j$ gives $R^{-1}(\partial_j\chi)(x/R)$. Iterating this identity in the prescribed multi-index order gives the asserted factor, including $\beta=0$. No selection was made in any construction. [step 2.1, F2, given] ∎
