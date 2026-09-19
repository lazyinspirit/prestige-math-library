---
id: ex-expected-exit-time-from-an-interval-via-ito-formula
kind: example
title: "Expected exit time from an interval"
status: draft
origin: pipeline
deps: [thm-dynkin-formula-for-bounded-brownian-stopping, def-brownian-motion-started-at-x, def-brownian-motion, def-c-c-and-c-c-infinity-on-rn, lem-schwartz-cutoffs-from-the-standard-smooth-step, thm-two-sided-exit-probability-for-brownian-motion, def-continuous-time-stopping-time, thm-dominated-convergence, thm-monotone-convergence-for-the-integral, def-continuity-real, thm-heine-cantor-r, def-axiom-of-choice, lem-ac-supplies-sequential-choices-for-probability-constructions, def-elementary-predictable-brownian-integrand]
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "Gregory F. Lawler, Stochastic Calculus: An Introduction with Applications, Section 3.5"
      url: "https://www.math.uchicago.edu/~lawler/finbook.pdf"
---

## Example

Assume the Axiom of Choice and the standing hypothesis (H) of
[[def-elementary-predictable-brownian-integrand]]. Let $a,b>0$, let $B^x=x+B$
be Brownian motion started at $x\in(-a,b)$
[[def-brownian-motion-started-at-x]], and let
$\tau:=\inf\{t\ge0:B^x_t\notin(-a,b)\}$ be the first exit time from the interval.
Then
$$E_x\tau=(x+a)(b-x),\qquad\text{in particular}\qquad E_0\tau=ab .$$

## Facts & Assumptions

**Given:** AC, (H), $a,b>0$, a start $x\in(-a,b)$, the shifted process $B^x$, and the exit time $\tau$ of $(-a,b)$.
 
[F1] **Dynkin formula.** If $f\in C_c^2(\mathbb R)$ and $\sigma$ is a bounded stopping time, then $E_x[f(B^x_\sigma)]=f(x)+E_x\int_0^\sigma\tfrac12f''(B^x_s)\,ds$. [[thm-dynkin-formula-for-bounded-brownian-stopping]] [[def-brownian-motion-started-at-x]]
 
[F2] **Cutoff extension of a quadratic.** For $u(y)=(y+a)(b-y)$ there is $f\in C_c^2(\mathbb R)$ with $f=u$ on a neighbourhood of $[-a,b]$ and $f''=-2$ there: multiply $u$ by a smooth compactly supported cutoff equal to $1$ on a neighbourhood of $[-a,b]$, using [[lem-schwartz-cutoffs-from-the-standard-smooth-step]]; the resulting function is $C_c^\infty$, hence $C_c^2$, and therefore bounded. [[def-c-c-and-c-c-infinity-on-rn]]
 
[F3] **Finiteness of the exit time and endpoint values.** The path of $B^x$ is continuous, $u(x)>0$ at the start and $u(-a)=u(b)=0$. By [[thm-two-sided-exit-probability-for-brownian-motion]], $B^x$ reaches $b$ before $-a$ with probability $(x+a)/(a+b)$. The reflected process $-B^x$ is Brownian motion started at $-x$ by [[def-brownian-motion]], so the same theorem on $(-b,a)$ gives probability $(b-x)/(a+b)$ that $B^x$ reaches $-a$ before $b$. These disjoint events have probabilities summing to $1$, hence $\tau<\infty$ almost surely; on $\{\tau<\infty\}$ continuity gives $B^x_\tau\in\{-a,b\}$ and $u(B^x_\tau)=0$. [[def-brownian-motion-started-at-x]] [[def-continuity-real]]
 
[F4] **Convergence tools.** Dominated convergence applies to bounded sequences of random variables; monotone convergence applies to nondecreasing nonnegative sequences, so $E(\tau\wedge n)\uparrow E\tau$ including the value $+\infty$. [[thm-dominated-convergence]] [[thm-monotone-convergence-for-the-integral]] [[def-continuity-real]]
 
[F5] **AC bookkeeping.** Choice is declared for the conditional-expectation interface. [[def-axiom-of-choice]]
 
 
 
 

## Verification

**Proof technique:** direct.
 
1.1 Applying Dynkin: for each $n$ the stopping time $\tau\wedge n$ is bounded, so [F1] applied to the function $f$ of [F2] gives $E_x[f(B^x_{\tau\wedge n})]=f(x)+E_x\int_0^{\tau\wedge n}\tfrac12f''(B^x_s)ds$. Since $B^x_s\in[-a,b]$ for $s\le\tau$ and $f=u$, $f''=u''=-2$ on a neighbourhood of $[-a,b]$, the right-hand side equals $u(x)-E_x(\tau\wedge n)$. [F1, F2]
 
2.1 Left-hand limit: on $\{\tau<\infty\}$ one has $B^x_{\tau\wedge n}\to B^x_\tau\in\{-a,b\}$ by continuity of the path, hence $f(B^x_{\tau\wedge n})\to0$; on $\{\tau=\infty\}$ (a null set by [F3]) the sequence stays bounded and the conclusion is not needed. Since $f$ is bounded, dominated convergence gives $E_x[f(B^x_{\tau\wedge n})]\to0$. [F3, F4, step 1.1]
 
3.1 Conclusion: combining steps 1.1 and 2.1, $u(x)-E_x(\tau\wedge n)\to0$, so $E_x(\tau\wedge n)\to u(x)$; by monotone convergence of the nondecreasing sequence $(\tau\wedge n)$ the limit of the expectations is $E_x\tau$, hence $E_x\tau=(x+a)(b-x)$. At $x=0$ this is $ab$. [F4, step 1.1, step 2.1]
 
4.1 Boundary and consistency cases: for $x\to-a$ or $x\to b$ the formula tends to $0$, consistent with the starting point being at the boundary; for $a=b$ and $x=0$ it gives $a^2$; the cutoff agrees with $u$ on a neighbourhood of the whole closed interval, so the computation is unaffected by the modification; the exit time is finite almost surely by [F3], and the argument does not need $E\tau<\infty$ in advance because monotone convergence allows the value $+\infty$ and the computation identifies it as finite; the bounded-stopping hypothesis of Dynkin's formula is met by $\tau\wedge n$ at each $n$; and AC enters only through [F5]. [F1, F3, F4, F5, step 3.1] ∎

## Source notes

Lawler, Section 3.5, obtains the expected exit time by the generator identity $\tfrac12u''=-1$; the proof above uses the Dynkin formula of this page on bounded truncations, the explicit $C^2$ cutoff, and monotone convergence to pass to the unbounded stopping time.
