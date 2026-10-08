---
id: def-bergman-space-and-kernel
kind: definition
title: 'The Bergman space $A^2(\Omega)$ and the Bergman kernel'
status: draft
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
dependency_level: 2
proof_strategy: direct
deps:
  - cor-holomorphic-functions-in-several-variables-are-smooth
  - def-balls-and-polydiscs-in-complex-euclidean-space
  - def-complex-l-two-inner-product
  - def-complex-lp-and-euclidean-test-function-conventions
  - def-countable-choice
  - def-holomorphic-function-in-several-complex-variables
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - def-trace-sigma-algebra
  - lem-bergman-evaluation-bound-on-compact-subsets
  - lem-bergman-mean-value-l2-bound
  - lem-l-two-with-the-integral-pairing-is-a-hilbert-space
  - prop-algebra-of-holomorphic-functions-in-several-variables
  - rem-complex-euclidean-space-dictionary
  - thm-borel-sets-are-lebesgue-measurable
  - thm-borel-sigma-algebra-of-a-subspace-is-the-trace
  - thm-lebesgue-measure-is-a-complete-measure
  - thm-riesz-representation-for-hilbert-space
  - thm-trace-is-a-sigma-algebra
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: Jiří Lebl, Tasty Bits of Several Complex Variables
      url: https://www.jirka.org/scv/scv.pdf
      locator: >-
        §5.2, printed pp. 160–162 (PDF pp. 159–161): the A² definition, full proof of Lemma 5.2.1 (compact evaluation bounds and closedness), the Riesz/kernel construction, and Exercise 5.2.2(a)/Example 5.2.4 on A²(C^m). The exercise is not proved there; the local mean-value proof is supplied here. The displayed conjugation in K_U(z,ζ̄)=overline(k_z(ζ)) agrees with the first-variable-linear convention used below.
    - title: Zbigniew Błocki, The Bergman Kernel and Metric
      url: https://gamma.im.uj.edu.pl/~blocki/publ/ln/bergman.pdf
      locator: >-
        §1, printed pp. 1–2: the L² holomorphic space, bounded evaluation, and the unique Riesz element KΩ(·,w) with f(w)=⟨f,KΩ(·,w)⟩. This is the first-variable-linear kernel convention used here.
---

## Definition

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$
([[def-countable-choice]]), let $m\ge1$, and let $\Omega\subseteq\mathbb C^m$ be a
nonempty open set. Read $\mathbb C^m$ as $\mathbb R^{2m}$ through
[[rem-complex-euclidean-space-dictionary]]. Give $\Omega$ the trace of the
Lebesgue sigma-algebra and the restricted measure $\lambda_\Omega$ induced by
$\lambda_{2m}$, namely $\lambda_\Omega(E):=\lambda_{2m}(E)$ for
$E\in\mathcal L(\mathbb R^{2m})|_\Omega$; write $L^2(\Omega)$ for the
resulting complex $L^2$ space.

Let $\mathcal A^2(\Omega)$ be the holomorphic functions $f$ on $\Omega$ with
$\int_\Omega |f|^2\,d\lambda_\Omega<\infty$, and let
$$A^2(\Omega):=\{[f]_{L^2(\Omega)}:f\in\mathcal A^2(\Omega)\}.$$
The argument below shows that each such class has a unique holomorphic
representative and that $A^2(\Omega)$ is a closed complex linear subspace of
$L^2(\Omega)$. Give it the inherited inner product
$$\langle[f],[g]\rangle:=\int_\Omega f\overline g\,d\lambda_\Omega,$$
which is linear in the first variable. Thus $A^2(\Omega)$ is a Hilbert space.

For each $w\in\Omega$, evaluation $E_w([f])=f(w)$ is a bounded linear
functional on $A^2(\Omega)$. Riesz representation gives a unique
$k_w\in A^2(\Omega)$ such that
$$f(w)=\langle[f],k_w\rangle\qquad(f\in\mathcal A^2(\Omega)).$$
The **Bergman kernel** is
$$K_\Omega(z,w):=k_w(z),\qquad z,w\in\Omega,$$
where $k_w(z)$ means evaluation of the unique holomorphic representative of
$k_w$. In particular $k_z=K_\Omega(\cdot,z)$ and the displayed Riesz identity
is the reproducing property. For $\Omega=\mathbb C^m$, $A^2(\Omega)=\{0\}$ and
$K_\Omega\equiv0$; no positivity of $K_\Omega$ is asserted for general
unbounded $\Omega$.

## Facts & Assumptions

[A1] The only choice principle is $\mathrm{AC}_\omega$; it is used by the
Lebesgue, complex $L^2$, Bergman mean/evaluation, and Riesz suppliers, and to
select an approximating sequence in the closedness argument. No full Axiom of
Choice is used ([[def-countable-choice]]).

[F1] $\lambda_{2m}$ is a complete measure on the Lebesgue sigma-algebra of
$\mathbb R^{2m}$. Its trace on the open, hence Lebesgue-measurable, set $\Omega$
is a measure on the trace sigma-algebra $\mathcal L(\mathbb R^{2m})|_\Omega$
([[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]],
[[thm-lebesgue-measure-is-a-complete-measure]], [[def-trace-sigma-algebra]],
[[thm-trace-is-a-sigma-algebra]], [[thm-borel-sets-are-lebesgue-measurable]]).

[F2] Holomorphic functions on $\Omega$ are continuous; their restrictions are
Borel measurable on the subspace $\Omega$, and the subspace Borel sigma-algebra
is the trace of the ambient Borel sigma-algebra, hence is contained in the
trace Lebesgue sigma-algebra ([[def-holomorphic-function-in-several-complex-variables]],
[[cor-holomorphic-functions-in-several-variables-are-smooth]],
[[thm-borel-sigma-algebra-of-a-subspace-is-the-trace]],
[[thm-borel-sets-are-lebesgue-measurable]]).

[F3] Complex linear combinations of holomorphic functions are holomorphic
([[prop-algebra-of-holomorphic-functions-in-several-variables]]).

[F4] With the pairing $\int f\overline g\,d\lambda_\Omega$, complex
$L^2(\Omega)$ is a Hilbert space under $\mathrm{AC}_\omega$; the pairing is
linear in its first variable and induces the quotient $L^2$ norm
([[def-complex-l-two-inner-product]],
[[def-complex-lp-and-euclidean-test-function-conventions]],
[[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]]).

[F5] On each nonempty compact $K\subseteq\Omega$, point evaluation is bounded
by $\sup_K|f|\le C_K\|f\|_{L^2(\Omega)}$
([[lem-bergman-evaluation-bound-on-compact-subsets]]).

[F6] An $L^2$ limit class of holomorphic $L^2$ functions has a holomorphic
representative ([[lem-bergman-evaluation-bound-on-compact-subsets]]).

[F7] For a holomorphic $f$ on a polydisc with closure in $\Omega$,
$$|f(a)|^2\le\frac{1}{\pi^m\prod_{j<m}r_j^2}\int_{\Delta_{\mathbf r}(a)}|f|^2\,d\lambda_{2m},$$
where $\Delta_{\mathbf r}(a)$ is the polydisc of positive radii
([[def-balls-and-polydiscs-in-complex-euclidean-space]],
[[lem-bergman-mean-value-l2-bound]]).

[F8] Every bounded linear functional on a complex Hilbert space has a unique
Riesz representer $y$ with $F(x)=\langle x,y\rangle$
([[thm-riesz-representation-for-hilbert-space]]).

## Proof

**Proof technique:** direct, using the preceding compact evaluation and mean-value estimates.

**Given:** $\mathrm{AC}_\omega$, $m\ge1$, a nonempty open $\Omega\subseteq\mathbb C^m$, and the Lebesgue measure and function-space conventions above.

1.1 By [F2], every holomorphic function is measurable for $\lambda_\Omega$, so the definition of $\mathcal A^2(\Omega)$ is meaningful. If $f,g\in\mathcal A^2(\Omega)$ determine the same $L^2$ class, then $h=f-g$ is holomorphic by [F3] and has $\|h\|_{L^2(\Omega)}=0$ by [F4]. For each $w\in\Omega$, the singleton $\{w\}$ is compact, so [F5] gives $|h(w)|\le C_{\{w\}}\|h\|_{L^2(\Omega)}=0$. Thus $f=g$ on $\Omega$, proving uniqueness of the holomorphic representative and well-definedness of evaluation. [F2, F3, F4, F5, given]

1.2 If $\Omega=\mathbb C^m$, then for every $a\in\mathbb C^m$ and every $R>0$, [F7] gives $|f(a)|^2\le(\pi R^2)^{-m}\int_{\Delta_R(a)}|f|^2\,d\lambda_{2m}\le(\pi R^2)^{-m}\|f\|_{L^2(\mathbb C^m)}^2$. Letting $R\to\infty$ and using $m\ge1$ gives $f(a)=0$ for every $a$, so $A^2(\mathbb C^m)=\{0\}$. [A1, F1, F4, F7, given]

2.1 The image $A^2(\Omega)$ is a complex linear subspace by [F3] and [F4]. To prove it is closed, let $g$ lie in its $L^2$ closure. For each $n\ge1$, the set of $A^2$ classes within distance $1/n$ of $g$ is nonempty; [A1] selects a sequence of such classes, and step 1.1 gives each a unique holomorphic representative $f_n$. Then $f_n\to g$ in $L^2(\Omega)$, so [F6] supplies a holomorphic representative $F$ of $g$. Since $g\in L^2(\Omega)$, this representative belongs to $\mathcal A^2(\Omega)$, and $g\in A^2(\Omega)$. Hence the image is closed. [A1, F3, F4, F6, step 1.1, given]

3.1 The closed subspace $A^2(\Omega)$ of the Hilbert space in [F4] is complete: each Cauchy sequence in it converges in $L^2(\Omega)$ and its limit lies in $A^2(\Omega)$ by step 2.1. For fixed $w\in\Omega$, evaluation is well-defined by step 1.1, complex-linear by [F3], and bounded by [F5] with $K=\{w\}$. Applying [F8] gives a unique $k_w\in A^2(\Omega)$ such that $f(w)=\langle[f],k_w\rangle$ for every $f\in\mathcal A^2(\Omega)$. [A1, F3, F4, F5, F8, step 1.1, step 2.1, given]

4.1 Define $K_\Omega(z,w)=k_w(z)$ using the unique holomorphic representative from step 1.1. Then $k_z=K_\Omega(\cdot,z)$ and the identity in step 3.1 is exactly the reproducing property. If $\Omega=\mathbb C^m$, step 1.2 gives $A^2(\mathbb C^m)=\{0\}$, so every evaluation functional and its unique Riesz representer vanish; hence $K_{\mathbb C^m}\equiv0$. [step 1.1, step 1.2, step 3.1] ∎
