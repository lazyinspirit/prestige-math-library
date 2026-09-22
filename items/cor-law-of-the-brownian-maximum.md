---
id: cor-law-of-the-brownian-maximum
kind: corollary
title: "Law of the Brownian maximum"
status: draft
origin: pipeline
deps: [thm-brownian-reflection-principle, def-standard-normal-and-normal-laws, def-cumulative-distribution-function-of-a-random-variable, lem-brownian-transition-semigroup-property, thm-substitution, thm-monotone-convergence-for-the-integral, thm-probability-law-and-distribution-function-correspondence, def-countable-choice, def-brownian-motion, def-axiom-of-choice, thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gregory F. Lawler, Stochastic Calculus: An Introduction with Applications, Proposition 2.7.2"
      url: "https://www.math.uchicago.edu/~lawler/finbook.pdf"
    - title: "Rick Durrett, Probability: Theory and Examples, fifth edition, Section 7.4"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
---

## Statement

Assume the Axiom of Choice, let $B$ be a standard Brownian motion
[[def-brownian-motion]]. Use the everywhere-continuous, zero-start
representative fixed in [[thm-brownian-reflection-principle]]: replace the
path by zero outside a measurable probability-one event of continuity and
zero start, retaining the notation $B$. Let $t>0$ and
$M_t:=\sup_{0\le s\le t}B_s$. This is a finite nonnegative random variable:
continuity gives boundedness on $[0,t]$ and identifies its supremum with the
supremum over the countable dense set $(\mathbb Q\cap[0,t])\cup\{t\}$.
With
$\Phi$ the standard normal distribution function,
$\Phi(x)=N(0,1)((-\infty,x])$
[[def-standard-normal-and-normal-laws]]
[[def-cumulative-distribution-function-of-a-random-variable]], one has for
every $x\ge0$
$$P(M_t\le x)=2\Phi\!\left(\frac{x}{\sqrt t}\right)-1 .$$
Consequently $M_t$ has the same law as $|B_t|$, and on $x>0$ the law of $M_t$
has the density
$$f(x)=\sqrt{\frac{2}{\pi t}}\,\exp\!\left(-\frac{x^2}{2t}\right).$$

## Facts & Assumptions

**Given:** AC, a standard Brownian motion $B$ in the stated everywhere-continuous zero-start representative, $t>0$ and $x\ge0$.

[F1] $P(M_t\ge a)=2P(B_t\ge a)$ for every $a>0$, and $M_t\ge a\iff\sup_{[0,t]}B\ge a$. [[thm-brownian-reflection-principle]]

[F2] The law of $B_t$ is $N(0,t)$, the law of $\sqrt tZ$ for a standard normal $Z$, whose density is $\varphi(y)=e^{-y^2/2}/\sqrt{2\pi}$; hence $P(a\le B_t\le b)=\int_a^b\varphi(y/\sqrt t)\,t^{-1/2}dy$ for $a<b$ and $P(B_t=c)=0$. [[lem-brownian-transition-semigroup-property]] [[def-standard-normal-and-normal-laws]]

[F3] Substitution for continuous integrands on compact intervals, with the Riemann–Lebesgue equality (under countable choice, supplied by AC), and monotone convergence for increasing nonnegative functions, in particular indicators. [[thm-substitution]] [[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]] [[thm-monotone-convergence-for-the-integral]]

[F4] A probability measure on $\mathbb R$ is determined by its distribution function on the intervals $(-\infty,x]$; this uses countable choice, which AC supplies. [[thm-probability-law-and-distribution-function-correspondence]] [[def-countable-choice]] [[def-axiom-of-choice]]

## Proof

**Proof technique:** direct.

1.1 For $x\ge0$ and positive integers $n$, put $a_n=x+1/n>0$. The events $\{M_t\ge a_n\}$ increase to $\{M_t>x\}$, and $\{B_t\ge a_n\}$ increase to $\{B_t>x\}$. Applying [F3] to their indicators and [F1] at each $a_n$ gives $P(M_t>x)=2P(B_t>x)$. (To use an index starting at zero, replace $n$ by $n+1$.) By [F2], $P(B_t>x)=1-\Phi(x/\sqrt t)$. Taking complements yields the asserted formula for every $x\ge0$, including $x=0$ since the even normal density has mass one and no atom, so $\Phi(0)=1/2$. [F1, F2, F3, given]

1.2 Define $G(x):=\int_0^x f(y)\,dy$ for $x\ge0$ with $f(y)=\sqrt{2/(\pi t)}e^{-y^2/(2t)}$. The substitution $y=\sqrt t\,u$, applied to the continuous integrand on $[0,x]$, gives $G(x)=2(\Phi(x/\sqrt t)-\Phi(0))=2\Phi(x/\sqrt t)-1$ for every $x>0$: indeed $f(\sqrt t u)\sqrt t=2\varphi(u)$. For $x\ge0$, the bound $0\le G(x)\le\sqrt{2/(\pi t)}x$ gives $G(0^+)=0$, and the same computation with the upper limit tending to $+\infty$, together with $\lim_{u\to\infty}\Phi(u)=1$, gives $\int_0^\infty f=1$. [F2, F3]

2.1 For $x\ge0$, $P(|B_t|\le x)=P(-x\le B_t\le x)=\Phi(x/\sqrt t)-\Phi(-x/\sqrt t)=2\Phi(x/\sqrt t)-1$ by the symmetry $\Phi(-u)=1-\Phi(u)$ of the standard normal law, which follows from the symmetry of its density $\varphi$; for $x<0$ both $P(M_t\le x)$ and $P(|B_t|\le x)$ vanish. Since the two distribution functions agree on all of $\mathbb R$, [F4] identifies the laws, so $M_t$ and $|B_t|$ have the same law. [F2, F4, step 1.1]

2.2 The measure with density $f$ on $(0,\infty)$, extended by zero on $(-\infty,0]$, is a probability measure whose distribution function at $x\ge0$ is $G(x)=2\Phi(x/\sqrt t)-1$ and at $x<0$ is $0$; by [F4] it therefore equals the law of $M_t$. Hence the law of $M_t$ has the density $f$ on $x>0$ and no atom at $0$. [F4, step 1.1, step 1.2]

3.1 The cases $x=0$ and $t>0$ are included in steps 1.1 and 2.2; the strict-tail identity was obtained by increasing indicator limits in step 1.1, and atomlessness of the maximum follows from its density in step 2.2. Countable choice in the Riemann–Lebesgue bridge and [F4] is supplied by the assumed AC. [F2, F4, given, step 1.2] ∎

## Source notes

Lawler, Proposition 2.7.2, supplies the reflection-based maximum formula. The strict tail is derived here by increasing indicator limits, including the endpoint zero. The density is identified through compact-interval substitution, the Riemann–Lebesgue bridge, and equality of distribution functions.
