---
id: ex-nrqm-fock-and-equilibrium-example-infinite-identical-mode-divergence
aliases: [nrqm-fock-and-equilibrium-example-infinite-identical-mode-divergence]
kind: example
domain: mathematics
title: "Infinite identical-mode divergence"
status: draft
origin: pipeline
dependency_level: 10
deps: [thm-nrqm-fock-and-equilibrium-countable-mode-product-criterion, thm-nrqm-fock-and-equilibrium-single-mode-thermal-trace, lem-nth-term-test, thm-logarithm-derivative-and-integral, thm-monotonicity-of-the-integral, def-natural-logarithm, def-series-and-absolute-convergence-in-a-normed-space, def-complex-exponential, def-l-p-space-as-a-quotient-by-null-functions, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  thm-nrqm-fock-and-equilibrium-countable-mode-product-criterion: mathematical-premise
  thm-nrqm-fock-and-equilibrium-single-mode-thermal-trace: mathematical-premise
  lem-nth-term-test: mathematical-premise
  thm-logarithm-derivative-and-integral: mathematical-premise
  thm-monotonicity-of-the-integral: mathematical-premise
  def-natural-logarithm: mathematical-premise
  def-series-and-absolute-convergence-in-a-normed-space: mathematical-premise
  def-complex-exponential: mathematical-premise
  def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "F. H. L. Essler, Advanced Quantum Theory (Oxford lecture notes, 2017/18), Sections 1.2 and 4.1 pp. 5-6, 25 (Fock-space occupation numbers; ideal Bose gas partition function)"
      url: "http://www-thphys.physics.ox.ac.uk/courses/C6/C6_2017/C6Notes/lecturenotes2017AQT.pdf"
    - title: "I. Burmistrov and A. Lunkin, Lecture Notes on Statistical Mechanics (HSE, 2023), Sections 1.1.2-1.1.6 pp. 12-18 (Gibbs distribution, entropy and systems with an arbitrary number of particles)"
      url: "http://home.itp.ac.ru/~burmi/HSE/Lectures-StatPhys-temp.pdf"
---

## Example

Assume the Axiom of Countable Choice and the Axiom of Choice. Let $H$ be a
separable infinite-dimensional complex Hilbert space with complete orthonormal
family $(e_j)_{j\ge1}$, let $\varepsilon_0>0$, $\beta>0$, and consider the
degenerate mode list
$$\varepsilon_j:=\varepsilon_0\quad(j\ge1)$$
(infinitely many modes of one and the same positive frequency). Adopt the
notation $F(H)$, $\mathcal M$, $v_I$, $\lambda_I$, $u_I$, $D_\beta$ of
[[thm-nrqm-fock-and-equilibrium-countable-mode-product-criterion]]. This
example verifies concretely that:

(a) the one-particle weight sum diverges for every $\beta>0$,
$$\sum_{j\ge1}e^{-\beta\varepsilon_j}=\sum_{j\ge1}e^{-\beta\varepsilon_0}=+\infty,$$
so the product criterion of
[[thm-nrqm-fock-and-equilibrium-countable-mode-product-criterion]] (d) is
violated;

(b) the grand-canonical weights do not converge: for every $N\ge1$
$$\sum_{\substack{I\in\mathcal M\\ I\subseteq\{1,\dots,N\}}}e^{-\beta\lambda_I}
=\prod_{j=1}^N\frac1{1-e^{-\beta\varepsilon_0}}
=(1-e^{-\beta\varepsilon_0})^{-N},$$
and these partial products increase to $+\infty$; quantitatively
$(1-e^{-\beta\varepsilon_0})^{-N}\ge e^{Ne^{-\beta\varepsilon_0}}$ for every
$N$;

(c) consequently
$$\sum_{I\in\mathcal M}e^{-\beta\lambda_I}=+\infty,$$
the diagonal operator $D_\beta$ is not trace class, and there is no finite
grand-canonical partition sum $\operatorname{tr}D_\beta$ for this mode list;

(d) the divergence is caused by the infinite multiplicity of the frequency, not
by its value: for the one-mode space $H=\mathbb C$ with frequency
$\omega=\varepsilon_0>0$, [[thm-nrqm-fock-and-equilibrium-single-mode-thermal-trace]]
gives the finite value $Z(\beta)=1/(1-e^{-\beta\omega})$ of the trace of the
weight operator, and the same formal expression is infinite here.

No thermodynamic interpretation of $\beta$, of $D_\beta$ or of the divergence
is asserted; the example is a statement about the convergence of the displayed
series for a degenerate mode list.

## Verification

**Given:** the separable infinite-dimensional $H$ with complete orthonormal family $(e_j)_{j\ge1}$, the constant mode list $\varepsilon_j=\varepsilon_0>0$, $\beta>0$, and the objects $\mathcal M,v_I,\lambda_I,D_\beta$ of [[thm-nrqm-fock-and-equilibrium-countable-mode-product-criterion]].

[F1] For every $N\ge1$, $\sum_{I\in\mathcal M,\ I\subseteq\{1,\dots,N\}}e^{-\beta\lambda_I}=\prod_{j=1}^N(1-e^{-\beta\varepsilon_j})^{-1}$, and $\sum_{I\in\mathcal M}e^{-\beta\lambda_I}<+\infty$ if and only if $\sum_{j\ge1}e^{-\beta\varepsilon_j}<+\infty$, in which case the sum equals the infinite product; $0<e^{-\beta\varepsilon_j}<1$ ([[thm-nrqm-fock-and-equilibrium-countable-mode-product-criterion]] (c), (d)).

[F2] $D_\beta$ is trace class exactly when $\sum_{I\in\mathcal M}e^{-\beta\lambda_I}<+\infty$, and then $\operatorname{tr}D_\beta$ equals that sum ([[thm-nrqm-fock-and-equilibrium-countable-mode-product-criterion]] (b), (e)).

[F3] If a series of reals converges then its terms tend to $0$; contrapositively, a series whose terms do not tend to $0$ diverges ([[lem-nth-term-test]], [[def-series-and-absolute-convergence-in-a-normed-space]]).

[F4] For $0<x<1$, $\log(1-x)\le-x$; for $x\ge1$, $\log x\le x-1$ and $1-1/x\le\log x$ ([[def-natural-logarithm]], [[thm-logarithm-derivative-and-integral]], [[thm-monotonicity-of-the-integral]]).

[F5] For the one-mode space $F(\mathbb C)$ with frequency $\omega>0$ and $\beta>0$, $Z(\beta)=\sum_{n\ge0}e^{-\beta\omega n}=1/(1-e^{-\beta\omega})$ and the weight operator $G_\beta e_n=e^{-\beta\omega n}e_n$ is trace class with $\operatorname{tr}G_\beta=Z(\beta)<\infty$ ([[thm-nrqm-fock-and-equilibrium-single-mode-thermal-trace]] (b), (c)).



1.1 [Divergence of the one-particle weights] By the definition of the mode list, $e^{-\beta\varepsilon_j}=e^{-\beta\varepsilon_0}>0$ for every $j$, a constant strictly positive sequence that does not converge to $0$; by [F3] the series $\sum_je^{-\beta\varepsilon_j}$ diverges, and since all its terms are positive its value is $+\infty$. This is (a). [F3, algebra]

1.2 [Divergent partial products and the finite-$N$ identity] By [F1] applied to the constant list, for every $N\ge1$, $\sum_{I\subseteq\{1,\dots,N\}}e^{-\beta\lambda_I}=\prod_{j=1}^N(1-e^{-\beta\varepsilon_0})^{-1}=(1-e^{-\beta\varepsilon_0})^{-N}$. Since $0<1-e^{-\beta\varepsilon_0}<1$, the powers $(1-e^{-\beta\varepsilon_0})^{-N}$ are finite for each $N$ and strictly increase; writing $x:=e^{-\beta\varepsilon_0}\in(0,1)$ and using $\log(1-x)\le-x$ of [F4], $-\log(1-x)\ge x$, so $(1-x)^{-N}=e^{-N\log(1-x)}\ge e^{Nx}\to+\infty$. This proves the identities and the quantitative lower bound of (b). [F1, F4, algebra]

2.1 [Divergence of the grand-canonical weights, no trace] By step 1.1 the series $\sum_je^{-\beta\varepsilon_j}$ is not finite, so the equivalence in [F1] gives $\sum_{I\in\mathcal M}e^{-\beta\lambda_I}=+\infty$; by step 1.2 its finite partial sums are finite and increasing, consistently. By [F2], $D_\beta$ is not trace class and $\operatorname{tr}D_\beta$ does not exist as a finite number. This is (c). [F1, F2, step 1.1, step 1.2]

2.2 [The single-mode contrast] For $H=\mathbb C$ with $\omega=\varepsilon_0$, [F5] gives $Z(\beta)=1/(1-e^{-\beta\omega})<\infty$ and a trace-class weight operator with trace $Z(\beta)$; the same closed-form expression appears in step 1.2 with each of the infinitely many factors equal to it, and the product of infinitely many factors bounded below by $1$ diverges: $(1-e^{-\beta\omega})^{-N}\ge 1$ for every $N$, with strict increase. Thus the infinite multiplicity, not the value of the positive frequency, produces the divergence. This is (d). [F5, step 1.2, algebra]

3.1 [Conclusion and scope] Steps 1.1-1.2 prove (a) and (b), step 2.1 proves (c), and step 2.2 proves (d). The scope paragraph of the example records that no thermodynamic interpretation of $\beta$, $D_\beta$ or the divergence is asserted. This completes the verification. [step 1.1, step 1.2, step 2.1, step 2.2] ∎
