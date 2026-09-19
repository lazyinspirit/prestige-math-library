---
id: cor-critical-holder-boundary-at-zero-from-the-brownian-lil
kind: corollary
title: "The critical Hölder boundary at zero"
status: draft
origin: pipeline
deps: [cor-brownian-law-of-the-iterated-logarithm-at-zero, cor-brownian-paths-are-locally-holder-of-every-order-below-one-half, lem-rat-embeds-dense, def-axiom-of-choice, def-brownian-motion]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Nobuo Yoshida, Probability Theory, Section 6.3 (subcritical Hölder regularity and the critical-boundary remark)"
      url: "https://www.math.nagoya-u.ac.jp/~noby/pdf/prob.pdf"
    - title: "Rick Durrett, Probability: Theory and Examples, fifth edition, Theorem 8.5.1"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
---

## Statement

Let $B$ be a standard Brownian motion [[def-brownian-motion]]. Almost surely
both of the following hold.

1. For every exponent $0<\alpha<1/2$ and every $T>0$ the path is
   $\alpha$-Hölder on $[0,T]$, that is, locally below the critical exponent.
2. The path is not one-half Hölder at zero: there is no finite constant $C$
   and no $\delta>0$ with $|B_t|\le C\sqrt t$ for all $0<t<\delta$. In fact
   $|B_t|/\sqrt t$ is unbounded as $t\downarrow0$.

The failure is at the critical exponent and at the single point $0$; it is not
a statement about uniform Hölder regularity on intervals.

## Facts & Assumptions

**Given:** AC and a standard Brownian motion $B$.

[F1] There is a probability-one event on which, for every $T>0$ and every $0<\gamma<1/2$, a finite $K=K(\omega,T,\gamma)$ satisfies $|B_t-B_s|\le K|t-s|^\gamma$ for all $0\le s,t\le T$. [[cor-brownian-paths-are-locally-holder-of-every-order-below-one-half]]

[F2] Almost surely $\limsup_{t\downarrow0}\frac{B_t}{\sqrt{2t\log\log(1/t)}}=1$ and $\liminf_{t\downarrow0}\frac{B_t}{\sqrt{2t\log\log(1/t)}}=-1$. [[cor-brownian-law-of-the-iterated-logarithm-at-zero]]

[F3] The rationals are dense in $\mathbb R$. [[lem-rat-embeds-dense]]

[F4] AC is the ambient assumption of the Brownian interfaces. [[def-axiom-of-choice]]

## Proof

**Proof technique:** direct.

1.1 On the probability-one event of [F1], for every $T>0$ and every $0<\gamma<1/2$ there is a finite constant $K$ with $|B_t-B_s|\le K|t-s|^\gamma$ on $[0,T]$; since $[0,T]$ contains $0$ and the exponents are ordered, this is precisely assertion 1. [F1, given]

1.2 On the probability-one event of [F2], $\limsup_{t\downarrow0}|B_t|/\sqrt{2t\log\log(1/t)}=1$, because the two assertions of [F2] give both $+1$ and $-1$ as limit points of $B_t/\sqrt{2t\log\log(1/t)}$; equivalently there are $t_n\downarrow0$ with $|B_{t_n}|/\sqrt{2t_n\log\log(1/t_n)}\to1$. [F2]

2.1 For such a sequence, $\frac{|B_{t_n}|}{\sqrt{t_n}}=\sqrt{2\log\log(1/t_n)}\,\frac{|B_{t_n}|}{\sqrt{2t_n\log\log(1/t_n)}}\to\infty$; hence for every finite $C$ there are arbitrarily small $t>0$ with $|B_t|>C\sqrt t$, so no finite $C$ and no $\delta>0$ satisfy $|B_t|\le C\sqrt t$ on $(0,\delta)$, which is assertion 2. [step 1.2]

3.1 Intersecting the two probability-one events gives both assertions simultaneously; the quantifiers are covered as follows: the subcritical assertion is restricted to exponents below the critical value and makes no claim at $\alpha=1/2$; the exponents may be taken rational by [F3] and the horizons integer, both countable families, and larger exponents follow by monotonicity of power comparisons on $[0,T]$; the point $t=0$ is excluded from the one-half bound because only $t>0$ is quantified; and AC enters only through [F4]. [step 1.1, step 2.1, F3, F4, given] ∎

## Source notes

Yoshida, Section 6.3, proves the subcritical uniform Hölder statement and remarks that the one-half endpoint fails; Durrett's Theorem 8.5.1, transported to zero by time inversion, provides the explicit divergent sequence $|B_{t_n}|/\sqrt{t_n}\to\infty$ that rules out any finite one-half constant at the origin. The corollary keeps the two quantifier levels separate: uniform subcritical regularity on compact intervals, and pointwise failure of the critical exponent at zero.
