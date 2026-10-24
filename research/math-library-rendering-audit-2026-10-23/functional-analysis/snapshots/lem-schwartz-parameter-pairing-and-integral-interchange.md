---
id: lem-schwartz-parameter-pairing-and-integral-interchange
kind: lemma
title: Schwartz parameter pairing and integral interchange
status: published
origin: pipeline
deps: [thm-finite-seminorm-bound-characterizes-tempered-distributions, thm-differentiation-polynomial-multiplication-translation-and-modulation-are-continuous-on-schwartz-space, thm-dominated-convergence, thm-integral-triangle-inequality, def-countable-choice]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Semyon Dyatlov, Lecture notes for 18.155 (2022)"
      url: "https://web.archive.org/web/20250519141924if_/https://math.mit.edu/~dyatlov/18.155/155-notes.pdf"
      locator: "Proofs of Propositions 11.26 and 11.28, pp. 129–131; Schwartz translation estimate compared with (11.31), p. 127"
    - title: "Radu Gelca, Functional Analysis"
      url: "https://www.math.ttu.edu/~rgelca/FUNCTANAL.pdf"
      locator: "Translation-difference lemma and proof of Theorem 8.4.4, pp. 130–131"
proof_strategy: direct
---

## Statement

For $\varphi\in\mathcal S(\mathbb R^n)$, the map

$$x\longmapsto T_x\varphi,\qquad (T_x\varphi)(y)=\varphi(x-y),$$

is $C^\infty$ as a map from $\mathbb R^n$ to Schwartz space, with
$\partial_x^\gamma T_x\varphi=T_x(\partial^\gamma\varphi)$.  This clause holds
in ZF.

Assume Countable Choice for the following integral clause.  Let $r\geq1$ and
let $H:\mathbb R^r\to\mathcal S(\mathbb R^n)$ be continuous in every Schwartz
seminorm.  Suppose each $\partial_y^\beta H(t,y)$ is jointly measurable and,
for every $\alpha,\beta$, there is $g_{\alpha\beta}\in L^1(\mathbb R^r)$ such
that

$$p_{\alpha\beta}(H(t))\leq g_{\alpha\beta}(t)$$

for almost every $t$.  Then
$G(y)=\int_{\mathbb R^r}H(t,y)\,dt$ belongs to $\mathcal S$, derivatives pass
under the integral, and every $u\in\mathcal S'$ satisfies

$$\left\langle u,\int H(t)\,dt\right\rangle =\int\langle u,H(t)\rangle\,dt.$$

All integrals in this clause are Lebesgue integrals.

## Facts & Assumptions

**Given:** A Schwartz function $\varphi$; for the second clause also [[def-countable-choice|Countable Choice]], a family $H$ with the stated seminorm majorants, and $u\in\mathcal S'$.

[F1] Fixed translations, reflection, and derivatives preserve Schwartz space continuously ([[thm-differentiation-polynomial-multiplication-translation-and-modulation-are-continuous-on-schwartz-space]]).

[F2] The functional $u$ obeys one finite Schwartz-seminorm estimate ([[thm-finite-seminorm-bound-characterizes-tempered-distributions]]).

[F3] Dominated convergence and the complex integral triangle inequality hold for the stated Lebesgue integrals ([[thm-dominated-convergence]], [[thm-integral-triangle-inequality]]).

## Proof

**Proof technique:** weighted Taylor remainders and explicit finite sums.

1.1 Fix a compact set of parameters $K$.  The inequality $1+|y|\leq(1+\sup_{x\in K}|x|)(1+|x-y|)$ transfers every polynomial weight in $y$ to one in $x-y$, uniformly for $x\in K$.  Apply the one-variable integral Taylor remainder along each coordinate. [F1, algebra]

$$p_{\alpha\beta}\!\left( \frac{T_{x+he_j}\varphi-T_x\varphi}{h}-T_x(\partial_j\varphi) \right)\longrightarrow0.$$

The same estimate applied to every derivative gives continuity of all iterated derivatives. [F1, algebra]

Iterating step 1.1 proves that $x\mapsto T_x\varphi$ is $C^\infty$ in the Schwartz topology and gives the displayed derivative formula.  When $\varphi=0$ every derivative is zero.  No integration on parameter space and no choice principle occurred. [step 1.1]

1.2 For the integral clause, differentiate under the integral and apply the integral triangle inequality pointwise in $y$. [F3]

$$\partial_y^\beta G(y)=\int\partial_y^\beta H(t,y)\,dt, \qquad p_{\alpha\beta}(G)\leq\int g_{\alpha\beta}(t)\,dt.$$

The derivative statement follows successively from difference quotients and dominated convergence; the seminorm estimate follows from the integral triangle inequality before taking the supremum in $y$.  Thus $G\in\mathcal S$. [F3]

1.3 Let $Q_R=[-R,R]^r$.  Subdivide it into the canonical equal mesh and form lower-corner finite sums $S_{R,m}$ for $H$.  Uniform continuity in each seminorm and [F3] make these sums converge to $G_R(y)=\int_{Q_R}H(t,y)\,dt$ in that seminorm.  Continuity of $u$ may therefore be passed through this explicit limit. [F2, F3]

$$u(G_R)=\lim_m u(S_{R,m}) =\lim_m\sum_Q |Q|u(H(t_Q)) =\int_{Q_R}u(H(t))\,dt.$$

The last equality is the same scalar step-function approximation. [F2, F3]

2.1 The finite estimate [F2] involves only finitely many seminorms.  Their $L^1$ majorants show both $G_R\to G$ in those seminorms and $\int_{Q_R}u(H(t))dt\to\int_{\mathbb R^r}u(H(t))dt$ as $R\to\infty$. Passing to the limit in step 1.3 proves the interchange formula.  Countable Choice is used exactly through [F3]'s Lebesgue interface; the finite-sum and continuity argument adds no stronger choice. [F2, F3, step 1.3] ∎
