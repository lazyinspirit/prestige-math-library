---
id: lem-cm-second-difference-remainder-bound
kind: lemma
title: "The centered second difference differs from the second derivative by at most $Ma^2/12$ when $|u''''|\\le M$"
status: published
origin: pipeline
domain: mathematics
dependency_level: 0
deps: [def-derivative, def-ck-euclidean-maps-and-diffeomorphisms, thm-ftc-first-part, thm-ftc-second-part, def-oriented-integral, thm-additivity-over-subintervals, thm-chain-rule-for-total-derivatives, thm-algebra-of-derivatives, def-interval, thm-extreme-value-metric, thm-heine-borel-rn, def-metric-ball]
dependency_roles:
  def-derivative: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  thm-ftc-first-part: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  def-oriented-integral: mathematical-premise
  thm-additivity-over-subintervals: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-interval: mathematical-premise
  thm-extreme-value-metric: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  def-metric-ball: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "I. Stewart, Advanced Classical Mechanics (MIT 8.09/8.309 Fall 2014), Section 6.1 (the discrete-to-continuum limit of the chain)"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
    - title: "K. Likharev, Essential Graduate Physics, Classical Mechanics (September 1, 2026 complete volume), Section 6.3 (the continuum limit of the chain and its regime of validity)"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"

  precheck: pass
---

## Statement

Let $J\subseteq\mathbb R$ be a nonempty open interval ([[def-interval]]), let $u:J\to\mathbb R$ be of class $C^4$ ([[def-ck-euclidean-maps-and-diffeomorphisms]]), let $x\in J$ and $a>0$ satisfy $[x-a,x+a]\subseteq J$, and put

$$M:=\sup_{s\in[x-a,x+a]}|u''''(s)|<+\infty .$$

Then

$$\left|\frac{u(x+a)-2u(x)+u(x-a)}{a^2}-u''(x)\right|\le\frac{M\,a^2}{12}.$$

## Facts & Assumptions

**Given:** The open interval $J$, the $C^4$ function $u$, the point $x\in J$ and $a>0$ with $[x-a,x+a]\subseteq J$, and the bound $M$.

[F1] Fundamental theorem of calculus: for a $C^1$ function $\varphi$ on an interval and points $r<s$ in it, $\int_r^s\varphi'=\varphi(s)-\varphi(r)$; moreover $\int_s^r=-\int_r^s$, and the integral is additive over subintervals ([[thm-ftc-second-part]], [[def-oriented-integral]], [[thm-additivity-over-subintervals]]).

[F2] The bound $M$ is the maximum of the continuous function $|u''''|$ on the compact set $[x-a,x+a]$, so $|u''''|\le M$ there ([[thm-extreme-value-metric]], [[thm-heine-borel-rn]], [[def-metric-ball]]); derivatives and sums compose by the chain and algebra rules ([[thm-chain-rule-for-total-derivatives]], [[thm-algebra-of-derivatives]], [[def-derivative]]).

[F3] (Second-order integral remainder.) If $\varphi\in C^2$ on an interval containing $[0,a]$, then $\varphi(a)=\varphi(0)+\varphi'(0)a+\int_0^a(a-s)\varphi''(s)\,ds$. By the product rule, $\frac{d}{ds}((a-s)\varphi'(s))=-\varphi'(s)+(a-s)\varphi''(s)$; integrating this identity with [F1] and rearranging gives the displayed formula.

## Proof

**Proof technique:** direct; apply the second-order integral remainder to two affine scans of $u$ and bound the double remainder.

1.1 Fix $s\in[0,a]$ and apply [F3] to $\varphi_+(r):=u(x+r)$ on $[0,s]$: since $\varphi_+''(r)=u''(x+r)$ and $\varphi_+'(0)=u'(x)$, $$u(x+s)=u(x)+u'(x)s+\int_0^s(s-r)u''(x+r)\,dr .$$ Applying [F3] to $\varphi_-(r):=u(x-r)$ on $[0,s]$, with $\varphi_-''(r)=u''(x-r)$, $$u(x-s)=u(x)-u'(x)s+\int_0^s(s-r)u''(x-r)\,dr .$$ [given, F1, F2, F3, algebra]

2.1 Add the two identities of step 1.1 with $s=a$ and subtract $2u(x)$: $$u(x+a)-2u(x)+u(x-a)=\int_0^a(a-s)\bigl(u''(x+s)+u''(x-s)\bigr)ds .$$ Apply [F3] once more to the $C^2$ function $r\mapsto\psi(r):=u''(x+r)+u''(x-r)$ on $[0,s]$, whose value and first derivative at $0$ are $\psi(0)=2u''(x)$ and $\psi'(0)=0$: $$u''(x+s)+u''(x-s)=2u''(x)+\int_0^s(s-r)\bigl(\psi''(r)\bigr)dr=2u''(x)+\int_0^s(s-r)\bigl(u''''(x+r)+u''''(x-r)\bigr)dr .$$ [step 1.1, F1, F3, algebra]

3.1 Substitute step 2.1 into step 2.1's first identity to obtain $$u(x+a)-2u(x)+u(x-a)-a^2u''(x)=\int_0^a(a-s)\int_0^s(s-r)\bigl(u''''(x+r)+u''''(x-r)\bigr)dr\,ds .$$ Bounding the inner integral by $2Ms^2/2=Ms^2$ via [F2] and [F1] (monotone bounds for the Riemann integral), and then $\int_0^a(a-s)Ms^2ds=Ma^4/12$, gives $$\bigl|u(x+a)-2u(x)+u(x-a)-a^2u''(x)\bigr|\le\frac{Ma^4}{12}.$$ Dividing by $a^2>0$ proves the statement. [step 2.1, F1, F2, algebra] ∎

## Remarks

- The constant $1/12$ is sharp for the class $C^4$ with a uniform fourth-derivative bound: the estimate is an equality for a quartic profile $u(x)=x^4/24$ with $u''''=1$ after comparing the two required bounds, and the factor arises solely from $\int_0^a(a-s)s^2ds$. The lemma states only the upper bound.

- Only derivatives up to order four on the closed interval $[x-a,x+a]$ are used; the function need not be periodic and no boundary conditions enter.
