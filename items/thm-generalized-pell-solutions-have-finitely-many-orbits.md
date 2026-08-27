---
id: thm-generalized-pell-solutions-have-finitely-many-orbits
kind: theorem
title: "Generalized Pell solutions fall into finitely many Pell orbits"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-generalized-and-negative-pell-equations, def-norm-on-integer-square-root-order, def-fundamental-pell-solution, def-pell-equivalence-of-generalized-solutions, lem-pell-norm-multiplication]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Pell's Equation, II"
      url: "https://kconrad.math.uconn.edu/blurbs/ugradnumthy/pelleqn2.pdf"
    - title: "Peter Hackman, Elementary Number Theory"
      url: "https://www.yumpu.com/en/document/view/50680602/elementary-number-theory-linkaaping-university"
pipeline_run: null
---

## Statement

Let $D$ be a positive nonsquare integer, let $N\in\mathbb Z\setminus\{0\}$, and
let $\varepsilon_D>1$ be the fundamental Pell solution. Every integral solution
$$x^2-Dy^2=N$$
is Pell-equivalent to a solution
$$x_0+y_0\sqrt D$$
satisfying
$$|x_0|\le \frac{\sqrt{|N|}}2\left(\sqrt{\varepsilon_D}+\varepsilon_D^{-1/2}\right), \qquad |y_0|\le \frac{\sqrt{|N|}}{2\sqrt D}\left(\sqrt{\varepsilon_D}+\varepsilon_D^{-1/2}\right).$$
Consequently the generalized Pell equation has only finitely many
Pell-equivalence classes.

## Facts & Assumptions

**Given:** A nonzero integer $N$, the fundamental Pell solution $\varepsilon_D>1$, and a solution $\alpha=x+y\sqrt D$ of $N_D(\alpha)=N$.

[F1] Two norm-$N$ solutions are Pell-equivalent exactly when one is obtained from the other by multiplication by a power of $\varepsilon_D$ ([[def-pell-equivalence-of-generalized-solutions]]).

[F2] The Pell norm is multiplicative ([[lem-pell-norm-multiplication]]).

[F3] The fundamental solution satisfies $\varepsilon_D>1$ ([[def-fundamental-pell-solution]]).

## Proof

**Proof technique:** direct.

1.1 Put $$t:=\frac{|\alpha|}{\sqrt{|N|}}>0.$$ Because $\varepsilon_D>1$, the half-open intervals $$\left(\varepsilon_D^{m-1/2},\varepsilon_D^{m+1/2}\right]\qquad(m\in\mathbb Z)$$ partition $(0,\infty)$: their endpoints are strictly ordered, they tend to $0$ as $m\to-\infty$, and they tend to $+\infty$ as $m\to+\infty$. Hence there is a unique integer $k$ with $$\varepsilon_D^{-1/2}<t\varepsilon_D^{-k}\le \varepsilon_D^{1/2}.$$ Put $$\alpha_0:=\alpha\varepsilon_D^{-k}=x_0+y_0\sqrt D.$$ By [F1] and [F2], $\alpha_0$ is Pell-equivalent to $\alpha$ and still satisfies $$N_D(\alpha_0)=N.$$ [F1, F2, F3, given, algebra]

2.1 Let $$\beta:=|\alpha_0|.$$ Step 1.1 gives $$\sqrt{|N|}\,\varepsilon_D^{-1/2}<\beta\le \sqrt{|N|}\,\varepsilon_D^{1/2}.$$ Since $$\overline{\alpha_0}=x_0-y_0\sqrt D=\frac{N}{\alpha_0},$$ one has $$|\overline{\alpha_0}|=\frac{|N|}{\beta}\le \sqrt{|N|}\,\varepsilon_D^{1/2}$$ and also $|\overline{\alpha_0}|>\sqrt{|N|}\,\varepsilon_D^{-1/2}$. Therefore $$2|x_0|=|\alpha_0+\overline{\alpha_0}|\le \beta+|\overline{\alpha_0}|\le \sqrt{|N|}\left(\sqrt{\varepsilon_D}+\varepsilon_D^{-1/2}\right),$$ and similarly $$2\sqrt D\,|y_0|=|\alpha_0-\overline{\alpha_0}|\le \beta+|\overline{\alpha_0}|\le \sqrt{|N|}\left(\sqrt{\varepsilon_D}+\varepsilon_D^{-1/2}\right).$$ This is exactly the stated bound. [F2, step 1.1, algebra]

3.1 The bounds of step 2.1 leave only finitely many integer pairs $(x_0,y_0)$. Every solution is Pell-equivalent to one of them by step 1.1, so only finitely many Pell-equivalence classes occur. [step 1.1, step 2.1] ∎
