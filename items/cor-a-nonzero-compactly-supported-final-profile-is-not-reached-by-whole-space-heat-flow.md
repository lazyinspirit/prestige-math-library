---
id: cor-a-nonzero-compactly-supported-final-profile-is-not-reached-by-whole-space-heat-flow
kind: corollary
title: Compactly supported nonzero terminal profiles are outside the heat range
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
deps:
  - thm-lebesgue-measure-of-a-box-of-every-kind
  - def-countable-choice
  - thm-positive-time-spatial-analyticity-of-heat-kernel-solutions
  - thm-identity-theorem-for-real-analytic-functions-on-an-interval
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "John K. Hunter, Notes on Partial Differential Equations (revised 18 June 2014, UC Davis)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "§5.2.2, printed p. 137 (spatial analyticity of positive-time heat flow after Proposition 5.14); the exact Lp statement used here is the published item thm-positive-time-spatial-analyticity-of-heat-kernel-solutions"
    - title: "Sung-Jin Oh, Lecture Notes for Math 222A (19 March 2024)"
      url: "https://math.berkeley.edu/~sjoh/pdfs/notes-math222a.pdf"
      locator: "§5.3, printed pp. 83–84 (smoothing of positive-time heat solutions)"
---

## Statement

Assume Countable Choice. Let $n\ge1$, $1\le p\le\infty$, $f\in L^p(\mathbb R^n)$
and $t>0$, and let $u$ be the everywhere-defined representative of the heat
evolution $H_tf$ supplied by
[[thm-positive-time-spatial-analyticity-of-heat-kernel-solutions]]. If $u$ has
compact support, then $u\equiv0$ and $H_tf=0$ as an element of
$L^p(\mathbb R^n)$. Consequently no nonzero compactly supported element of
$L^p(\mathbb R^n)$ equals $H_tf$ for any such $f$ and $t$. The same vanishing
conclusion holds when $u$ vanishes almost everywhere outside some compact set.

## Facts & Assumptions

**Given:** Countable Choice, $n\ge1$, $1\le p\le\infty$, $f\in L^p(\mathbb R^n)$, $t>0$, the representative $u$ of $H_tf$, and a point $x\in\mathbb R^n$.

[A1] Countable Choice is the hypothesis carried by the analyticity, integration and measure-theoretic suppliers below ([[def-countable-choice]]).

[F1] The representative $u$ of $H_tf$ is real analytic on $\mathbb R^n$, and for complex data its real and imaginary parts are real analytic; in particular $u$ is continuous and at every centre its Taylor series converges absolutely in every direction ([[thm-positive-time-spatial-analyticity-of-heat-kernel-solutions]]).

[F2] If $I\subseteq\mathbb R$ is an open interval and $g,h:I\to\mathbb R$ are real analytic with agreement set having an accumulation point lying inside $I$, then $g=h$ throughout $I$ ([[thm-identity-theorem-for-real-analytic-functions-on-an-interval]]).

[F3] A nonempty open subset of $\mathbb R^n$ contains a nondegenerate axis-parallel box and therefore has positive Lebesgue measure; hence a continuous function that vanishes almost everywhere on such a set vanishes at every one of its points. By [[thm-lebesgue-measure-of-a-box-of-every-kind]], that box has measure equal to the positive product of its side lengths; continuity turns a nonzero value into a nonzero lower bound on such a box.

## Proof

**Given:** Countable Choice, $n\ge1$, $1\le p\le\infty$, $f\in L^p(\mathbb R^n)$, $t>0$, the representative $u$ of $H_tf$, and $x\in\mathbb R^n$.

1.1 Let $e_1$ be the first standard basis vector and put $g(s):=u(x+se_1)$ for $s\in\mathbb R$. At a centre $c\in\mathbb R$, the expansion of [F1] about $x+ce_1$ converges absolutely in every direction, so substituting the displacement $\sigma e_1$ turns it into a one-variable power series $\sum_{k\ge0}a_k\sigma^k$ that converges absolutely for every real $\sigma$ and sums to $g(c+\sigma)$; hence $g$ is real analytic on $\mathbb R$. For complex-valued $u$ the same argument is applied to the real and imaginary parts of $g$, which are real analytic by [F1]. [A1, F1, given]

2.1 Assume now that $u$ has compact support. Then $\{u\ne0\}$ is bounded, so there is $R>0$ with $x+se_1\notin\{u\ne0\}$ whenever $|s|>R+|x|$, and for those $s$ the definition of $g$ gives $g(s)=0$. [given, step 1.1, algebra]

3.1 Suppose first that $u$ is real-valued and let $R$ be as in step 2.1. The zero set of $g$ contains the open interval $(R+|x|,\infty)$, so the point $c:=R+|x|+1$ is an accumulation point, lying in the interval $I:=\mathbb R$, of the agreement set of $g$ and the zero function; both are real analytic on $I$ by step 1.1, so [F2] gives $g\equiv0$ on $\mathbb R$, and evaluating at $s=0$ gives $u(x)=0$. [step 1.1, step 2.1, F2, given]

4.1 Suppose instead that $u$ is complex-valued with compact support. Then $\operatorname{Re}u$ and $\operatorname{Im}u$ are real analytic by [F1] and vanish outside the same bounded set, so step 3.1 applied to each of them gives $\operatorname{Re}u(x)=0$ and $\operatorname{Im}u(x)=0$; hence $u(x)=0$. [step 2.1, step 3.1, F1, given]

5.1 Since $x\in\mathbb R^n$ was arbitrary, steps 3.1 and 4.1 show that a compactly supported representative vanishes identically, so the class $H_tf$ is the zero class of $L^p(\mathbb R^n)$; consequently no nonzero compactly supported element of $L^p(\mathbb R^n)$ equals $H_tf$ for data and time as in the statement. [step 3.1, step 4.1, given]

6.1 Finally assume only that $u$ vanishes almost everywhere outside a compact set $K$. If $x\notin K$, choose $\rho>0$ with the ball $B(x,\rho)$ disjoint from $K$; then $u=0$ almost everywhere on the nonempty open set $B(x,\rho)$. If $u(x)\ne0$, continuity of $u$ from [F1] would give $|u|>|u(x)|/2>0$ on a smaller ball, so that this ball contains no point where $u$ vanishes, contradicting [F3]. Hence $u=0$ on $\mathbb R^n\setminus K$, so $u$ has compact support and step 5.1 applies. [step 5.1, F1, F3, given] ∎ 