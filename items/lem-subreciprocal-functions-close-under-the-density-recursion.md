---
id: lem-subreciprocal-functions-close-under-the-density-recursion
kind: lemma
title: "Admissible parameters for the density recursion"
status: draft
origin: pipeline
deps: [def-subreciprocal-function-and-ell-divisibility, thm-logarithm-change-of-base, thm-real-power-laws, thm-natural-logarithm-laws, lem-integer-part]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Bucic, Nguyen, Scott and Seymour, Induced subgraph density I"
      url: "https://arxiv.org/html/2301.10147v3"
      locator: "5.2, setup preceding claim (1)"
proof_strategy: direct
---

## Statement

Let $\ell$ be subreciprocal, $0<c<1/2$, $d>1$. Set $z=\ell(c)^{-1/2}$ and $b=2-\log_2(1-z)>2$. For $0<\epsilon<c$, put $L=\log_2(1/\epsilon)$, $Q=\log_2\ell(\epsilon)$, $x=2^{1-b}\epsilon$, $p=z\ell(x)$, and $\eta=x^d/4$. Let $t=-\lfloor-2L/\log_2p\rfloor$, and $\delta=2^{-20bdL^2/Q}$. Then $t$ is the least natural number with $p^t\geq\epsilon^{-2}$ and
$$0<\eta<1,\quad p>1,\quad p^2\geq\ell(x),\quad 1\leq t\leq5L/Q,\quad \delta<x^d\eta^t.$$
This asserts admissibility of the recursion parameters; no new operation on functions is implicit in the title.

## Facts & Assumptions

**Given:** A subreciprocal $\ell$, $0<c<1/2$, $d>1$, $0<\epsilon<c$, and the real parameters defined in the statement.

[F1] From [[def-subreciprocal-function-and-ell-divisibility]]: A function $\ell:(0,1/2)\to(0,\infty)$ is subreciprocal when it is nonincreasing and satisfies $1<\ell(x)\leq1/x$ throughout its domain.

[F2] For every real $y$, its unique integer part satisfies $\lfloor y\rfloor\leq y<\lfloor y\rfloor+1$. ([[lem-integer-part]]).

[F3] $\log_bx=\frac{\log x}{\log b},\qquad b^{\log_bx}=x,\qquad \log_b(b^u)=u\quad(u\in\mathbb R)$. ([[thm-logarithm-change-of-base]]).

[F4] $a^{r+s}=a^ra^s,\qquad (ab)^r=a^rb^r,\qquad (a/b)^r=a^r/b^r,\qquad (a^r)^s=a^{rs}$. ([[thm-real-power-laws]]).

## Proof

1.1 By [F1], $\ell(c)>1$, so $0<z<1$ and $0<1-z<1$. By [F3], $b=2-\log_2(1-z)>2$ satisfies $2^{2-b}=1-z$. Thus $0<x=\epsilon(1-z)/2<\epsilon<c<1/2$ and $0<\eta=x^d/4<1$. Every evaluation of $\ell$ is in its domain. [F1, F3, given]

2.1 Monotonicity in [F1] gives $\ell(x)\geq\ell(\epsilon)\geq\ell(c)=z^{-2}$. Consequently $p^2=z^2\ell(x)^2\geq\ell(x)>1$, so $p>1$. Also $0<Q\leq L$ because $1<\ell(\epsilon)\leq1/\epsilon$, and $\log_2p\geq Q/2>0$. [F1, step 1.1, algebra]

3.1 Put $u=2L/\log_2p>0$. Apply [F2] to $-u$ and negate: $u\leq t<u+1$. Thus $t\geq1$ is an integer; $t-1<u\leq t$ and [F3] give $p^{t-1}<\epsilon^{-2}\leq p^t$, which proves minimality among naturals. Since $u\leq4L/Q$ and $L/Q\geq1$, we have $t<4L/Q+1\leq5L/Q$. [F2, F3, step 2.1, algebra]

4.1 The inequality $\epsilon<1/2$ implies $\epsilon^{b-1}<2^{1-b}$, hence $x>\epsilon^b$, and $4^{-t}>\epsilon^{2t}$. By [F4], $x^d\eta^t=4^{-t}x^{d(t+1)}>\epsilon^{2t+bd(t+1)}$. Finally $4bdt-[2t+bd(t+1)]=bd(3t-1)-2t\geq2t(bd-1)>0$, so this exceeds $\epsilon^{4bdt}$. [F4, step 1.1, step 3.1, algebra]

5.1 Using $t\leq5L/Q$ gives $\epsilon^{4bdt}=2^{-4bdtL}\geq2^{-20bdL^2/Q}=\delta$. Combined with the strict inequality in the preceding step, this proves $\delta<x^d\eta^t$ and all the asserted bounds. [step 3.1, step 4.1, algebra] ∎

## Source notes

Proof/convention locator: [Bucic, Nguyen, Scott and Seymour, Induced subgraph density I](https://arxiv.org/html/2301.10147v3), 5.2, setup preceding claim (1).
