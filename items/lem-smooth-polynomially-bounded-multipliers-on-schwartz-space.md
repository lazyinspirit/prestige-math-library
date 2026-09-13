---
id: lem-smooth-polynomially-bounded-multipliers-on-schwartz-space
kind: lemma
title: Smooth polynomially bounded multipliers on schwartz space
status: draft
origin: pipeline
deps: [def-schwartz-space-and-its-seminorms, def-schwartz-topology-and-convergence, def-ck-and-multi-index-notation-in-several-variables, def-tempered-distribution, def-weak-and-strong-topologies-on-tempered-distributions]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Semyon Dyatlov, Lecture notes for 18.155 (2022)"
      url: "https://web.archive.org/web/20250519141924if_/https://math.mit.edu/~dyatlov/18.155/155-notes.pdf"
      locator: "§11.2.1 item (2) and Exercise 11.3, pp. 127, 135"
    - title: "Radu Gelca, Functional Analysis"
      url: "https://www.math.ttu.edu/~rgelca/FUNCTANAL.pdf"
      locator: "Theorem 8.4.2, pp. 128–129"
proof_strategy: direct
---

## Statement

Let $a\in C^\infty(\mathbb R^n;\mathbb C)$ and suppose that for every
multi-index $\gamma$ there are $C_\gamma\geq0$ and an integer $m_\gamma\geq0$
such that

$$|\partial^\gamma a(x)|\leq C_\gamma(1+|x|)^{m_\gamma}.$$

Then $M_a:\varphi\mapsto a\varphi$ is a continuous complex-linear
endomorphism of $\mathcal S(\mathbb R^n)$.  Its transpose

$$\langle au,\varphi\rangle=\langle u,a\varphi\rangle$$

is a tempered distribution and depends continuously on $u$ for both the weak
and strong dual topologies.  Polynomials and Schwartz functions satisfy the
hypothesis; an arbitrary smooth function need not.

## Facts & Assumptions

**Given:** A smooth function $a$ with the derivative-by-derivative polynomial
bounds in the statement.

[F1] Schwartz seminorms and topology are those of
[[def-schwartz-space-and-its-seminorms]] and
[[def-schwartz-topology-and-convergence]], with multi-indices interpreted by
[[def-ck-and-multi-index-notation-in-several-variables]].

[F2] Tempered distributions are continuous functionals on $\mathcal S$, and
their weak and strong topologies test singletons and bounded subsets
([[def-tempered-distribution]],
[[def-weak-and-strong-topologies-on-tempered-distributions]]).

## Proof

**Proof technique:** Leibniz seminorm estimates and transposition.

1.1 Fix $\alpha,\beta$ and apply the multi-index Leibniz formula. [F1, algebra]

$$x^\alpha\partial^\beta(a\varphi) =\sum_{\gamma\leq\beta}{\beta\choose\gamma} x^\alpha(\partial^\gamma a)\partial^{\beta-\gamma}\varphi.$$

For each of the finitely many $\gamma$, expansion of
$(1+|x_1|+\cdots+|x_n|)^{m_\gamma}$ bounds that summand by a finite linear
combination of seminorms
$p_{\alpha+\delta,\,\beta-\gamma}(\varphi)$ with
$|\delta|\leq m_\gamma$.  Hence each output seminorm is bounded by finitely
many input seminorms. [F1, algebra]

2.1 Step 1.1 proves simultaneously that $a\varphi\in\mathcal S$ and that $M_a$ is continuous.  A polynomial has only finitely many nonzero derivatives and each grows polynomially.  If $a\in\mathcal S$, each derivative is bounded, so the hypothesis holds with exponent zero. [F1, step 1.1]

3.1 For $u\in\mathcal S'$, the composition $u\circ M_a$ is continuous and linear, hence tempered.  For a single test, $p_\varphi(au)=p_{a\varphi}(u)$, proving weak continuity of the transpose. [F2, step 2.1]

4.1 If $B$ is bounded in $\mathcal S$, the finite estimates of step 1.1 show that $M_a(B)$ is bounded.  Thus $p_B(au)=p_{M_a(B)}(u)$, proving strong continuity.  The derivative hypothesis is essential: for example $a(x)=e^{|x|^2}$ is smooth but does not map every Schwartz function to a Schwartz function.  No choice axiom is used. [F2, step 1.1] ∎
