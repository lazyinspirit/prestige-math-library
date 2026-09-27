---
id: lem-quadratic-test-soundness
kind: lemma
title: "Quadratic tensor test rejects an inconsistent tensor"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-quadratic-consistency-test, thm-linearity-test-rejects-proportionally-to-distance, thm-linear-self-correction, def-self-correction-of-a-noisy-linear-function, lem-boolean-cube-fourier-inversion-and-parseval, def-linearity-test]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  scraped: []
  references:
    - title: "Arora and Barak, Computational Complexity: A Modern Approach, §18.4.2 Step 2 (rejection probability 1/4), printed pp. 382-383."
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
    - title: "Irit Dinur, The PCP theorem by gap amplification, §5 (consistency test), printed pp. 17-18."
      url: "https://www.cs.umd.edu/users/gasarch/TOPICS/pcp/dinur.pdf"
---

## Statement

Let $n\ge0$, let $u\in\mathbb F_2^n$ and let $w\in\mathbb F_2^{\,n\times n}$ be read as a matrix, with $W$ the matrix of entries $w_{ij}$ and $u\otimes u$ the matrix of entries $u_iu_j$. Suppose $W\ne u\otimes u$. Then:

1. **(Ideal test.)** The ideal tensor test of [[def-quadratic-consistency-test]] applied to the linear tables $f=\ell_u$ and $g=\ell_w$, where $\ell_w(z)=w\odot z$, rejects with probability at least $1/4$:
$$\varepsilon_{\rm ten}(\ell_u,\ell_w)\ \ge\ \frac14 .$$
2. **(Self-corrected test.)** If instead $f$ and $g$ are arbitrary tables at distances $\delta_f,\delta_g<1/4$ from $\ell_u$ and $\ell_w$ respectively, then with auxiliary points drawn independently as in the self-corrected tensor test,
$$\Pr\bigl[\text{self-corrected test rejects}\bigr]\ \ge\ \frac14-4\delta_f-2\delta_g .$$
In particular, whenever $4\delta_f+2\delta_g<1/4$ the self-corrected test rejects with probability bounded below by the positive constant $1/4-4\delta_f-2\delta_g$, and for $\delta_f,\delta_g\le\delta$ this is at least $1/4-6\delta$. More generally, if an ideal test using $c$ values from tables each within distance $\delta<1/4$ of a specified linear table rejects with probability at least $\pi$, then replacing those values by self-corrections makes it reject with probability at least $\pi-2c\delta$.

## Facts & Assumptions

**Given:** an integer $n\ge0$, vectors $u\in\mathbb F_2^n$, $w\in\mathbb F_2^{\,n\times n}$ with $W\ne u\otimes u$, independent uniform $r,s\in\mathbb F_2^n$, and the ideal and self-corrected tensor tests of [[def-quadratic-consistency-test]].

[F1] The ideal tensor test accepts exactly when $g(r\otimes s)=f(r)f(s)$, with $r,s$ independent uniform; for linear tables $f=\ell_u$, $g=\ell_w$ the two sides are $(u\cdot r)(u\cdot s)$ and $w\odot(r\otimes s)$ ([[def-quadratic-consistency-test]]).

[F2] For linear tables, $(u\otimes u)\odot(r\otimes s)=\sum_{i,j}u_iu_jr_is_j=(u\cdot r)(u\cdot s)$, and $w\odot(r\otimes s)=\sum_{i,j}w_{ij}r_is_j$, the matrix $W$ having entries $w_{ij}$ ([[def-quadratic-consistency-test]]).

[F3] For every nonzero vector $c\in\mathbb F_2^m$ the linear function $x\mapsto c\cdot x$ takes the value $1$ on exactly half of the cube $\mathbb F_2^m$; equivalently, two distinct linear Boolean functions disagree on exactly half the cube ([[lem-boolean-cube-fourier-inversion-and-parseval]]).

[F4] If a table $h$ has distance $\delta<1/4$ from a linear function $\ell$, then $\ell$ is the unique linear function at distance less than $1/4$, and at every fixed requested point the two-query self-corrector returns $\ell$ at that point with probability at least $1-2\delta$ ([[thm-linear-self-correction]], [[def-self-correction-of-a-noisy-linear-function]]).

[F5] The self-corrected tensor test replaces each of the three queried values by a two-query self-correction with independent auxiliary points and accepts exactly when the corrected values satisfy the tensor equation ([[def-quadratic-consistency-test]]).

## Proof

**Proof technique:** direct.

1.1 The difference $D:=W-u\otimes u$ is a nonzero matrix over $\mathbb F_2$, so some column of $D$ is nonzero; fix such a column $j$ and let $c$ be that column, a nonzero vector with $(rD)_j=c\cdot r$ for every row vector $r$. [F2, given, choose]

2.1 By [F3] applied to the nonzero $c$ of step 1.1 the functional $r\mapsto(rD)_j$ equals $1$ on exactly half of the cube, so the set of $r$ with $rD\ne0$ has probability at least $1/2$, because $(rD)_j=1$ makes the row vector $rD$ nonzero. [F3, step 1.1, algebra]

3.1 Conditioned on any fixed $r$ with $rD\ne0$ the map $s\mapsto rDs=(rD)\cdot s$ is a nonzero linear functional of $s$, so by [F3] it equals $1$ for exactly half of the $s$; since $s$ is independent of $r$, this conditional probability is $1/2$ for every such $r$. For linear tables the ideal test rejects exactly when $w\odot(r\otimes s)\ne(u\cdot r)(u\cdot s)$, and by [F2] the two sides differ by $w\odot(r\otimes s)-(u\otimes u)\odot(r\otimes s)=r(W-u\otimes u)s=rDs$, a bit; hence rejection is the event $rDs=1$ and its probability is at least $\frac12\cdot\frac12=\frac14$, which proves the first clause. For $n=0$ the hypothesis $W\ne u\otimes u$ is empty, the one-point cube having $u\otimes u$ as its only element. [F1, F2, F3, step 2.1, algebra]

4.1 For the second clause let $E$ be the event that all three self-corrections return the true linear values, namely $\operatorname{Corr}_f(r)=\ell_u(r)$, $\operatorname{Corr}_f(s)=\ell_u(s)$ and $\operatorname{Corr}_g(r\otimes s)=\ell_w(r\otimes s)$; by [F4] and the union bound $\Pr[E^c]\le2\delta_f+2\delta_f+2\delta_g=4\delta_f+2\delta_g$, since each failure bound holds uniformly at every requested point. On $E$ the self-corrected test of [F5] reads exactly the values the ideal test reads at the same pair $(r,s)$, so its outcome coincides with the ideal outcome. With $\pi\ge1/4$ the ideal rejection probability of step 3.1, the union bound, without an independence assumption between $E$ and $(r,s)$, gives $$\Pr[\text{self-corrected rejects}]\ \ge\ \Pr\bigl[\{rDs=1\}\cap E\bigr]\ \ge\ \pi-\Pr[E^c]\ \ge\ \frac14-4\delta_f-2\delta_g .$$ [F4, F5, step 3.1, algebra]

5.1 Steps 3.1 and 4.1 are the two clauses of the statement. If $\delta_f,\delta_g\le\delta$ the second bound is at least $1/4-6\delta$. For the general clause, let $I$ be the event that the specified ideal test rejects, so $\Pr[I]\ge\pi$, and let $E_c$ be the event that all $c$ corrections return their specified linear values. The uniform bound of [F4] and the union bound give $\Pr[E_c^c]\le2c\delta$ even when requested points depend on the test randomness. On $I\cap E_c$ the corrected test rejects, so $\Pr[\text{corrected test rejects}]\ge\Pr[I]-\Pr[E_c^c]\ge\pi-2c\delta$. ∎ [F4, step 3.1, step 4.1, given, algebra]

## Remarks

- **Where each factor of $1/2$ comes from.** The proof needs two independent half-cube events: a nonzero row functional in $r$, then a nonzero functional in $s$. This is the random subsum principle in its two-variable form, cited from the character lemma rather than reproved, and it is the only probabilistic input to the ideal analysis; the value $1/4$ is exactly the product of the two halves and is therefore not improvable by this argument.
- **Dependence of the corrected values.** The auxiliary points $y,y',Y$ are drawn independently, while the two query points within each correction are linked by the requested point. The union bound uses only the separate failure estimates, which hold for each requested point; it requires no independence between the correction event and the ideal rejection event.
- **Why this suffices for the tester.** The constant-query tester of [[lem-exponential-base-assignment-tester-from-quadratic-oracles]] tests tables that are promised to pass a $0.99$-linearity test, so their distances from linear are at most $0.01$; with $\delta_f,\delta_g\le0.01$ the bound of the second clause is at least $1/4-0.06>0.19$, a positive constant independent of $n$ and of the tables. This is the sense in which the tensor test has soundness error bounded away from zero, and it is what the composition step later consumes.
