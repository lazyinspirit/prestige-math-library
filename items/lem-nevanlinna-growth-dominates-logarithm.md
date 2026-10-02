---
id: lem-nevanlinna-growth-dominates-logarithm
kind: lemma
title: "Transcendental characteristic dominates logarithmic growth"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - thm-ahlfors-shimizu-characteristic-identity
  - thm-rational-functions-characterized-by-logarithmic-characteristic
  - def-nevanlinna-counting-proximity-and-characteristic
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Alexandre Eremenko, Lectures on Nevanlinna Theory, §§4–6"
      url: "https://www.math.purdue.edu/~eremenko/dvi/weizmann.pdf"
      locator: "§4, printed pp. 6–9: the Ahlfors–Shimizu characteristic and its convexity; §5, printed pp. 9–13: growth and the Second Main Theorem"
    - title: "Goldberg–Ostrovskii, Value Distribution of Meromorphic Functions"
      url: "https://www.math.purdue.edu/~eremenko/dvi/GOmainfile.pdf"
      locator: "Ch. 1 §5–§6 and Ch. 3 §1–§2, printed pp. 23–28 and 87–98: the convex Ahlfors–Shimizu characteristic and the rational growth characterization"
---

## Statement

Let $f$ be a nonconstant meromorphic function on $\mathbb C$. If $f$ is
transcendental, then
$$ \frac{T(r,f)}{\log r}\longrightarrow+\infty\qquad(r\to\infty). $$
Consequently, off the exceptional set belonging to any occurrence of
$S(r,f)$, the right-hand side
$C\bigl(\log^+T(r,f)+\log r\bigr)$ is $o\bigl(T(r,f)\bigr)$.

If $f$ is rational of degree $d\ge1$, then $T(r,f)=d\log r+O(1)$, and this
$O(1)$ term is $o\bigl(T(r,f)\bigr)$.

## Facts & Assumptions

**Given:** A nonconstant meromorphic function $f$ on $\mathbb C$, with chordal characteristic $T(r,f)$ as in [[def-nevanlinna-counting-proximity-and-characteristic]].

[F1] Ahlfors–Shimizu: $T(r,f)=T_{\rm AS}(r,f)+C_\infty(f)$ for a constant $C_\infty(f)$, where $T_{\rm AS}$ is finite and nondecreasing in $r$ and convex as a function of $\log r$ ([[thm-ahlfors-shimizu-characteristic-identity]]).

[F2] $f$ is rational if and only if $T(r,f)=O(\log r)$; more precisely, if $f$ is rational of degree $d\ge1$, then $T(r,f)=d\log r+O(1)$ ([[thm-rational-functions-characterized-by-logarithmic-characteristic]]).

[F3] $T$ is nondecreasing, and $T(r,f)>1$ for all sufficiently large $r$; the characteristic is finite for every $r>0$ ([[def-nevanlinna-counting-proximity-and-characteristic]]).

## Proof

**Proof technique:** shift the convex Ahlfors–Shimizu potential to the logarithmic variable; a bounded ratio on an unbounded sequence and the convexity chord bound force $T=O(\log r)$, which the rational characterization converts into a contradiction with transcendence.

1.1 Put $u(x):=T(e^x,f)$ for $x\in\mathbb R$. By [F1], $u(x)-C_\infty(f)$ is convex and nondecreasing in $x$; hence $u$ itself is convex and nondecreasing. By [F3], $u(x)>1$ for all sufficiently large $x$. [F1, F3, construct]

1.2 Since $T$ is nondecreasing by [F3], the limit $L:=\lim_{r\to\infty}T(r,f)$ exists in $(0,+\infty]$. If $L<\infty$, then $T(r,f)=O(1)=O(\log r)$, so [F2] would make $f$ rational, contrary to transcendence; hence $L=+\infty$, that is, $T(r,f)\to\infty$. [F2, F3, algebra]

2.1 (Convexity chord bound) Put $x_0:=1$. By convexity of $u$ from step 1.1, for all $x_0\le x\le y$,
$$ u(x)\le u(x_0)+\frac{x-x_0}{y-x_0}\bigl(u(y)-u(x_0)\bigr). $$
[step 1.1, algebra]

3.1 Assume for contradiction that $\liminf_{r\to\infty}T(r,f)/\log r<\infty$. Then there are a constant $C<\infty$ and a sequence $x_n\to+\infty$ with $u(x_n)\le C x_n$ for every $n$. Discard finitely many terms so that $x_n\ge2x_0$ for all $n$; applying the chord bound of step 2.1 with $y=x_n$ to each $x\in[x_0,x_n]$ gives
$$ u(x)\le u(x_0)+C x_n\frac{x-x_0}{x_n-x_0}\le u(x_0)+2C(x-x_0), $$
because $x_n\ge2x_0$ gives $x_n/(x_n-x_0)\le2$. Thus $T(e^x,f)=u(x)\le C'x$ for all $x\ge1$, i.e. $T(r,f)=O(\log r)$. [step 1.1, step 2.1, algebra]

4.1 By [F2] the bound $T(r,f)=O(\log r)$ makes $f$ rational, contradicting the hypothesis. Therefore $\liminf_{r\to\infty}T(r,f)/\log r=+\infty$, which for a nonnegative function is the assertion $T(r,f)/\log r\to+\infty$. [F2, step 3.1, discharge-contradiction]

5.1 By step 1.2, $T(r,f)\to\infty$, so $\log^+T(r,f)=o(T(r,f))$; by step 4.1, $\log r=o(T(r,f))$. Hence $\log^+T(r,f)+\log r=o(T(r,f))$: for every $\varepsilon>0$ the inequality $C(\log^+T(r,f)+\log r)\le\varepsilon T(r,f)$ holds for all sufficiently large $r$. In particular this applies to the right-hand side of any occurrence of $S(r,f)$ at every nonexceptional large radius. [step 1.2, step 4.1, algebra]

6.1 If $f$ is rational of degree $d\ge1$, then [F2] gives $T(r,f)=d\log r+O(1)\ge\frac d2\log r$ for all large $r$, so $T(r,f)\to\infty$ and $O(1)=o(T(r,f))$. [F2, algebra] ∎
