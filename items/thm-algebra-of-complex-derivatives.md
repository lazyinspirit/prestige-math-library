---
id: thm-algebra-of-complex-derivatives
kind: theorem
title: "Linearity, product, reciprocal, and quotient rules for complex derivatives"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-complex-differentiability-holomorphic-and-entire,
       cor-complex-differentiability-implies-continuity,
       lem-complex-conjugation-and-modulus-laws]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-13
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, Proposition 2.2.4"
      url: "https://www.jirka.org/ca/ca.pdf"
    - title: "J. Orloff, MIT 18.04 Topic 2, §2.6.1"
      url: "https://ocw.mit.edu/courses/18-04-complex-variables-with-applications-spring-2018/330e301bd727c7bdaa679cf44cb75fe3_MIT18_04S18_topic2.pdf"
pipeline_run: null
---

## Statement

Let $f,g:U\to\mathbb C$ be complex differentiable at $a\in U$, and let $\alpha,\beta\in\mathbb C$. Then

$$ (\alpha f+\beta g)'(a)=\alpha f'(a)+\beta g'(a), $$

$$ (fg)'(a)=f'(a)g(a)+f(a)g'(a). $$

If $g(a)\ne0$, then $g$ is nonzero on some neighbourhood of $a$, the reciprocal $1/g$ is complex differentiable at $a$, and

$$ (1/g)'(a)=-\frac{g'(a)}{g(a)^2},\qquad (f/g)'(a)=\frac{f'(a)g(a)-f(a)g'(a)}{g(a)^2}. $$

Every constant function has derivative $0$, and the identity function has derivative $1$.

## Facts & Assumptions
**Given:** An open set $U\subseteq\mathbb C$, a point $a\in U$, functions $f,g:U\to\mathbb C$ complex differentiable at $a$, and scalars $\alpha,\beta\in\mathbb C$.

[F1] Complex differentiability at $a$ is existence of the difference-quotient limit at $a$ ([[def-complex-differentiability-holomorphic-and-entire]]).

[L1] A complex-differentiable function is continuous at the point of differentiability ([[cor-complex-differentiability-implies-continuity]]).

[L2] Complex modulus is definite, multiplicative, and subadditive ([[lem-complex-conjugation-and-modulus-laws]]).

## Proof

**Proof technique:** direct.

1.1 The difference quotients of a constant function and of the identity are respectively $0$ and $1$, so their derivatives have those values. [F1, algebra]

1.2 Taking the finite linear combination of the two difference quotients gives $(\alpha f+\beta g)'(a)=\alpha f'(a)+\beta g'(a)$. [given, F1, algebra]

1.3 For nonzero allowed $h$, $$\frac{f(a+h)g(a+h)-f(a)g(a)}h=f(a+h)\frac{g(a+h)-g(a)}h+g(a)\frac{f(a+h)-f(a)}h.$$ [algebra]

1.4 Suppose $g(a)\ne0$. Continuity [L1] supplies a neighbourhood of $a$ on which $|g(z)-g(a)|<|g(a)|$, and on this neighbourhood $g(z)\ne0$ by [L2]. [given, L1, L2]

2.1 By [L1], $f(a+h)\to f(a)$, while the two quotients in step 1.3 tend to $g'(a)$ and $f'(a)$; hence the product formula follows. [step 1.3, given, F1, L1, algebra]

2.2 For nonzero allowed $h$ in that neighbourhood, $$\frac{g(a+h)^{-1}-g(a)^{-1}}h=-\frac1{g(a+h)g(a)}\frac{g(a+h)-g(a)}h.$$ [step 1.4, algebra]

3.1 The reciprocal factor in step 2.2 tends to $1/g(a)^2$, so the reciprocal derivative is $-g'(a)/g(a)^2$. Applying the product rule to $f(1/g)$ and simplifying gives the quotient formula. [step 2.1, step 2.2, given, F1, L2, algebra] ∎
