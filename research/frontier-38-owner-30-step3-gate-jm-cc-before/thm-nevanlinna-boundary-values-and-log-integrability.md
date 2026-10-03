---
id: thm-nevanlinna-boundary-values-and-log-integrability
kind: theorem
title: "Boundary values and log-integrability of Nevanlinna-class functions"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [thm-lebesgue-decomposition-exists-for-sigma-finite-signed-measures, thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality, lem-hardy-log-integrability-of-boundary-values, lem-poisson-integral-of-a-singular-circle-measure-has-zero-nontangential-limit, def-nevanlinna-class-on-the-disc, thm-nevanlinna-class-is-bounded-quotient-class, lem-nevanlinna-blaschke-factorization, lem-nevanlinna-sup-mean-criterion, thm-harnack-convergence-positive-harmonic-functions, thm-poisson-nontangential-maximal-bound, thm-fatou-nontangential-boundary-theorem-harmonic, def-circle-maximal-function-and-nontangential-region, thm-harmonic-conjugate-on-homologically-simply-connected-domains, prop-star-shaped-plane-domains-are-homologically-simply-connected, thm-holomorphic-logarithms-homologically-simply-connected-domains, thm-blaschke-product-boundary-values-and-zeros, def-blaschke-product, cor-bounded-harmonic-functions-have-nontangential-limits, thm-fatou-lemma, def-plane-harmonic-function, thm-c2-holomorphic-components-are-harmonic, def-axiom-of-choice, def-countable-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. B. Garnett, Bounded Analytic Functions, revised first edition, Chapter II §5"
      url: "https://dokumen.pub/bounded-analytic-functions-0387336214-9780387336213.html"
      locator: "printed pp. 67-69: every $f\\in N$ has finite nontangential boundary values a.e. and $\\log|f^*|\\in L^1$, via $\\log|g|$ as the difference of two nonnegative harmonic functions and (5.4)."
    - title: "R. K. Srivastava, Lecture Notes on Hardy Spaces (MA650, IIT Guwahati), §6.3"
      url: "https://fac.iitg.ac.in/rksri/MA650%20Advanced%20Hardy%20Spaces%20Notes.pdf"
      locator: "The Nevanlinna class and its boundary behaviour, printed pp. 64-69: boundary values of $N$-functions and the integrability of $\\log|f^*|$."
---

## Statement

Let $f\in N(\mathbb D)$ with $f\not\equiv0$. Then $f$ has finite nontangential
limits $f^*(\zeta)$ for $m$-almost every $\zeta\in\mathbb T$, and
$\log|f^*|\in L^1(\mathbb T,m)$; in particular $f^*\ne0$ $m$-almost
everywhere.

## Facts & Assumptions

**Given:** The Axiom of Choice, hence countable choice ([[def-axiom-of-choice]], [[def-countable-choice]]); a function $f\in N(\mathbb D)$, $f\not\equiv0$; its Blaschke factorization $f=Bg$ with zero-free $g\in N(\mathbb D)$; and a harmonic majorant $h_0\ge0$ of $\log^+|g|$.

[L1] Blaschke factorization of a Nevanlinna function: $f=Bg$ with $B$ the Blaschke product of the zeros of $f$, $g$ holomorphic and zero-free on $\mathbb D$, and $g\in N(\mathbb D)$ ([[lem-nevanlinna-blaschke-factorization]]).

[L2] $g$ is zero-free, so it has a holomorphic logarithm on the simply connected disc: $g=e^{L}$ for a holomorphic $L$, whence $\log|g|=\operatorname{Re}L$ is harmonic on $\mathbb D$ ([[thm-holomorphic-logarithms-homologically-simply-connected-domains]], [[prop-star-shaped-plane-domains-are-homologically-simply-connected]], [[def-plane-harmonic-function]]).

[L3] Under AC a nonnegative harmonic $u$ has a representation $u=P[\sigma]$ by a finite positive measure of mass $u(0)$. Decompose it as $a\,m+\sigma_s$, with $a\ge0$ in $L^1$. The Poisson integral of $a$ has nontangential limit $a$ almost everywhere, and the singular part has nontangential limit zero almost everywhere. Hence $u^*=a\in L^1$ and $\int u^*dm\le u(0)$. ([[thm-harnack-convergence-positive-harmonic-functions]], [[thm-lebesgue-decomposition-exists-for-sigma-finite-signed-measures]], [[thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality]], [[thm-fatou-nontangential-boundary-theorem-harmonic]], [[lem-poisson-integral-of-a-singular-circle-measure-has-zero-nontangential-limit]])

[L4] A Blaschke product $B$ has finite nontangential limits $B^*$ at $m$-almost every point with $|B^*|=1$ $m$-almost everywhere ([[thm-blaschke-product-boundary-values-and-zeros]], [[def-blaschke-product]]).

[L5] Real and imaginary parts of holomorphic functions are harmonic, and bounded complex harmonic functions have nontangential limits almost everywhere ([[thm-c2-holomorphic-components-are-harmonic]], [[cor-bounded-harmonic-functions-have-nontangential-limits]]).



[L6] Every $g\in N$ can be written $g=a/b$ with bounded holomorphic $a,b$ and zero-free $b$. Such nonzero bounded functions have finite nontangential limits, and $\log|b^*|\in L^1$, so $b^*
e0$ almost everywhere. ([[thm-nevanlinna-class-is-bounded-quotient-class]], [[cor-bounded-harmonic-functions-have-nontangential-limits]], [[lem-hardy-log-integrability-of-boundary-values]])

## Proof

**Proof technique:** direct.

1.1 The two nonnegative harmonic functions. By [L1] write $f=Bg$ with $g$ zero-free and $g\in N(\mathbb D)$. Let $h_0\ge0$ be a harmonic majorant of $\log^+|g|$ and put $W:=h_0-\log|g|$. Since $g$ is zero-free, $\log|g|$ is harmonic by [L2]; hence $W$ is harmonic, and $W\ge0$ because $\log|g|\le\log^+|g|\le h_0$. Thus $h_0$ and $W$ are nonnegative harmonic functions on $\mathbb D$. [given, L1, L2, algebra]

2.1 Boundary values of $h_0$ and $W$. By [L3] applied to $h_0$ and to $W$, both have finite nontangential limits $h_0^*$ and $W^*$ at $m$-almost every point of $\mathbb T$, with $\int_{\mathbb T}h_0^*dm\le h_0(0)<+\infty$ and $\int_{\mathbb T}W^*dm\le W(0)=h_0(0)-\log|g(0)|<+\infty$. [step 1.1, L3]

3.1 Complex boundary values and log-integrability of $g$. By [L6], write the zero-free $g=a/b$ with $a,b$ bounded holomorphic and $b$ zero-free. Both have finite nontangential limits almost everywhere, and $b^*\ne0$ there, so $g$ has the finite limit $g^*=a^*/b^*$. Intersect this full-measure set with that of step 2.1. There, $\log|g(z)|=h_0(z)-W(z)\to h_0^*-W^*$, a finite real value, so $|g^*|=e^{h_0^*-W^*}>0$ and $\log|g^*|=h_0^*-W^*$. Consequently $\int|\log|g^*||dm\le\int h_0^*dm+\int W^*dm<\infty$. Complex convergence came from the bounded quotient; modulus convergence then identifies its nonzero modulus. [step 1.1, step 2.1, L2, L6, algebra]

4.1 Boundary values of $f$. By [L4] the Blaschke product $B$ has finite nontangential limits $B^*$ with $|B^*|=1$ $m$-almost everywhere. At every point where $B^*$ and $g^*$ both exist, the product $f=Bg$ has the nontangential limit $f^*=B^*g^*$ (limits of products), and $|f^*|=|g^*|\ne0$ there. Hence $f^*$ exists, is finite and nonzero $m$-almost everywhere; and $\log|f^*|=\log|g^*|\in L^1(\mathbb T,m)$ by step 3.1. [step 3.1, L1, L4, algebra]

5.1 Assembly. Steps 1.1, 2.1, 3.1 and 4.1 establish, for $f=Bg$ with $g$ zero-free in $N(\mathbb D)$: the a.e. existence of finite nonzero nontangential limits of $f$, and $\log|f^*|\in L^1$. The Axiom of Choice is used exactly through the Herglotz representation in [L3] and the bounded-harmonic limits in [L5]; both are carried in the dependency list. [step 3.1, step 4.1, L3, L5] ∎
