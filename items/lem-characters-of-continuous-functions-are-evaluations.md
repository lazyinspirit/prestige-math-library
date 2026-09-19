---
id: lem-characters-of-continuous-functions-are-evaluations
kind: lemma
title: Characters of continuous functions are evaluations
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-characters-on-a-unital-banach-algebra-are-continuous, thm-urysohn-lemma, thm-uniform-cauchy-criterion-complex-functions, thm-complex-plane-is-complete, thm-compactness-under-continuous-maps, def-dependent-choice, def-character-and-maximal-ideal-space, def-compact-support-c-c-and-c-zero-on-an-lch-space]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Vahid Shirbisheh, Lectures on C-star Algebras, v2 — Remark 3.1.36 and §3.1, printed pp. 54–67"
      url: "https://arxiv.org/pdf/1211.3404"
    - title: "Theo Bühler and Dietmar A. Salamon, Functional Analysis — §5.5.1, printed pp. 258–262"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
    - title: "Dana P. Williams, Lecture Notes on the Spectral Theorem — Example 4.3, printed p. 9"
      url: "https://www.math.dartmouth.edu/~dana/bookspapers/ln-spec-thm.pdf"
---

## Statement

Assume the Axiom of Dependent Choice ([[def-dependent-choice]]). Let $K$ be a
nonempty compact Hausdorff space and let $C(K) = C(K,\mathbb C)$ be the complex
Banach algebra of continuous functions with pointwise operations and the
supremum norm ([[def-compact-support-c-c-and-c-zero-on-an-lch-space]] for the
notation $C(K)$). Then:

1. every character of $C(K)$ is the **evaluation** $\mathrm{ev}_x(f) = f(x)$ at a
   unique point $x \in K$;
2. the map $e : K \to \Delta(C(K))$, $e(x) := \mathrm{ev}_x$, is a
   **homeomorphism** onto $\Delta(C(K))$ with the pointwise-evaluation topology
   ([[def-character-and-maximal-ideal-space]]).

For $K = \varnothing$ the algebra $C(K) = \{0\}$ is the zero algebra and
$\Delta(C(K)) = \varnothing$, since the only linear map $\{0\} \to \mathbb C$ is
zero; the empty case is therefore consistent with the same formula and is
recorded here rather than proved as part of claim 2, whose proof uses
nonemptiness.

## Facts & Assumptions

**Given:** Dependent Choice, a nonempty compact Hausdorff space $K$, and the algebra $C(K)$ of continuous complex functions on $K$ with pointwise operations and the supremum norm.

[L1] A uniformly Cauchy sequence of complex-valued functions on a set converges
uniformly to a function ([[thm-uniform-cauchy-criterion-complex-functions]]).
If the domain is any topological space and all the functions are continuous,
the uniform limit is continuous: at a point, approximate the limit uniformly
by one function and apply that function's continuity.

[L2] $\mathbb C$ is complete, and a sequence in $\mathbb C$ converges if and only if it is Cauchy ([[thm-complex-plane-is-complete]]).

[L3] Every character of a nonzero unital complex Banach algebra is unital and contractive: $\chi(1) = 1$ and $|\chi(f)| \le \|f\|$ ([[thm-characters-on-a-unital-banach-algebra-are-continuous]]).

[L4] Under Dependent Choice the Urysohn lemma holds: in a normal space, disjoint closed sets are separated by a continuous function into $[0,1]$ ([[thm-urysohn-lemma]], [[def-dependent-choice]]).

[L5] A continuous bijection from a compact space onto a Hausdorff space is a homeomorphism ([[thm-compactness-under-continuous-maps]]).

## Proof

**Proof technique:** direct.

1.1 $C(K)$ is a nonzero commutative unital complex Banach algebra: pointwise operations give an associative commutative bilinear product and the constant function $\mathbf 1$ is a unit with $\|\mathbf 1\| = 1$; the supremum norm is submultiplicative and satisfies the triangle inequality; and $C(K)$ is complete, because a Cauchy sequence $(f_n)$ in the supremum norm is uniformly Cauchy, so its pointwise limit $f$ exists by [L2] and is continuous by [L1], and $\|f_n - f\|_\infty \to 0$ by the definition of uniform Cauchyness. Nonzero: since $K \ne \varnothing$, the constant function $\mathbf 1$ is not the zero function. [L1, L2, algebra]

1.2 For every $x \in K$ the evaluation $\mathrm{ev}_x(f) := f(x)$ is a character of $C(K)$: it is complex-linear, multiplicative, and nonzero since $\mathrm{ev}_x(\mathbf 1) = 1 \ne 0$. [algebra]

1.3 For any characters $\chi \ne \psi$ of $C(K)$ there is $f$ with $\chi(f) \ne \psi(f)$, so the evaluation-open sets $\{\varphi : |\varphi(f)-\chi(f)| < \varepsilon\}$ and $\{\varphi : |\varphi(f)-\psi(f)| < \varepsilon\}$ with $\varepsilon = |\chi(f)-\psi(f)|/2$ are disjoint; hence $\Delta(C(K))$ is Hausdorff in the pointwise-evaluation topology. [algebra]

1.4 The map $e : K \to \Delta(C(K))$, $e(x) = \mathrm{ev}_x$, is continuous, because for each $f \in C(K)$ the composition $x \mapsto \mathrm{ev}_x(f) = f(x)$ is continuous by the continuity of $f$. [1.2, algebra]

1.5 The evaluations are pairwise distinct: if $x \ne y$ in $K$, then $\{x\}$ and $\{y\}$ are disjoint closed subsets of the normal space $K$, so by [L4] there is a continuous $f : K \to [0,1]$ with $f(x) = 0$ and $f(y) = 1$; then $\mathrm{ev}_x(f) = 0 \ne 1 = \mathrm{ev}_y(f)$. [L4, algebra]

2.1 Let $\chi$ be a character of $C(K)$. Suppose that the ideals' common zero set is empty, that is, for every $x \in K$ there is $f_x \in \ker\chi$ with $f_x(x) \ne 0$. The sets $U_x := \{f_x \ne 0\}$ are open and cover $K$, so by compactness there are $x_1,\dots,x_n \in K$ with $K = \bigcup_{i \le n} U_{x_i}$. Then $g := \sum_{i\le n} |f_{x_i}|^2 = \sum_{i\le n} \overline{f_{x_i}} f_{x_i}$ lies in $\ker\chi$ (a finite sum of products of elements of the ideal $\ker\chi$) and satisfies $g > 0$ on $K$; hence $1/g \in C(K)$ and $\mathbf 1 = g \cdot (1/g) \in \ker\chi$, so $\chi(\mathbf 1) = 0$, contradicting $\chi(\mathbf 1) = 1$ from [L3] and [step 1.1]. Hence there is $x \in K$ with $f(x) = 0$ for every $f \in \ker\chi$. [1.1, 1.2, L3, algebra]

3.1 With $x$ as in [step 2.1], $\ker\chi \subseteq \ker\mathrm{ev}_x$. Both are kernels of nonzero multiplicative linear functionals, hence both are maximal ideals: if $f \notin \ker\chi$ then every $h \in C(K)$ has $h - (\chi(h)/\chi(f))f \in \ker\chi$, so any ideal strictly containing $\ker\chi$ contains $f$ and hence equals $C(K)$. Therefore $\ker\chi = \ker\mathrm{ev}_x$. [1.2, step 2.1, algebra]

4.1 Hence for every $f \in C(K)$ one has $f - f(x)\mathbf 1 \in \ker\mathrm{ev}_x = \ker\chi$, so $\chi(f) = f(x)\chi(\mathbf 1) = f(x)$, using $\chi(\mathbf 1) = 1$ from [L3]; thus $\chi = \mathrm{ev}_x$, and by [step 1.5] the point $x$ is unique. [1.5, step 3.1, L3, algebra]

5.1 By [step 1.2], [step 1.5] and [step 4.1] the map $e$ is a bijection from $K$ onto $\Delta(C(K))$; by [step 1.4] it is continuous, $K$ is compact, and by [step 1.3] $\Delta(C(K))$ is Hausdorff, so [L5] makes $e$ a homeomorphism. [step 1.2, step 1.3, step 1.4, step 1.5, step 4.1, L5] ∎

## Remarks

- **Dependent Choice is inherited from Urysohn.** It is used twice: for the separation of distinct points in [step 1.5], and nowhere else; the common-zero argument is choice-free once finitely many functions are chosen by compactness.
- **The empty case.** If $K = \varnothing$ then $C(K) = \{0\}$ and there is no character, so $\Delta(C(K)) = \varnothing = e[K]$, and claim 2 holds trivially with the empty map; the proof above uses $K \ne \varnothing$ only to know that $\mathbf 1 \ne 0$ in $C(K)$.
