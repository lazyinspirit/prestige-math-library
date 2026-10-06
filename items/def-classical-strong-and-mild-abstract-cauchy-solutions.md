---
id: def-classical-strong-and-mild-abstract-cauchy-solutions
kind: definition
title: "Classical, strong and mild abstract Cauchy solutions"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 4
deps:
  - def-countable-choice
  - def-dependent-choice
  - thm-exponential-bound-for-a-c-zero-semigroup
  - lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves
  - def-infinitesimal-generator-of-a-c-zero-semigroup
  - def-strongly-continuous-semigroup
  - lem-variation-of-constants-integral-is-continuous-for-lone-time-forcing
  - def-bochner-integrable-function
  - def-frechet-derivative-between-banach-spaces
  - def-metric-continuity
justified_by: []
aliases: []
landmark: false
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Klaus-Jochen Engel and Rainer Nagel, One-Parameter Semigroups for Linear Evolution Equations, Graduate Texts in Mathematics 194 (complete author-hosted monograph)"
      url: "https://www.math.uni-tuebingen.de/de/forschung/agfa/members/engel-nagel_one-parameter-semigroups.pdf/%40%40download/file/engel-nagel_one-parameter-semigroups.pdf"
      locator: "Chapter II Section 6, Definitions 6.1, 6.3 and 6.8, printed pp. 145-151"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2026 author manuscript; complete 392-page archived text)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Chapter 11 Section 11.3, the paragraphs after Lemma 11.12, printed pp. 259-260"
verification:
  precheck: n/a
---

## Definition

Assume Countable Choice ([[def-countable-choice]]) for the Lebesgue time integrals. Let $A:D(A)\subseteq X\to X$ be a linear operator on a real or complex Banach space $X$, with the Banach graph conventions of [[def-infinitesimal-generator-of-a-c-zero-semigroup]]. Let $T_0>0$, $x\in X$ and let $f:(0,T_0)\to X$ be Bochner integrable ([[def-bochner-integrable-function]]). Consider the abstract Cauchy problem $u'(t)=Au(t)+f(t)$ for $0<t<T_0$, $u(0)=x$; endpoint equations are imposed only when $f$ is continuously extended to $[0,T_0]$. Derivatives use the underlying real structure, with one-sided derivatives at the endpoints. (1) A **classical solution** is a function $u\in C^1([0,T_0];X)$ with $u(t)\in D(A)$ for every $t\in[0,T_0]$, $Au\in C([0,T_0];X)$, $u\prime(t)=Au(t)+f(t)$ for $0<t<T_0$ and $u(0)=x$; here membership in $D(A)$ is with the graph norm and the derivative is the Fréchet derivative of a curve ([[def-frechet-derivative-between-banach-spaces]]). (2) A **strong solution** is a continuous $u\in C([0,T_0];X)$ with $u(t)\in D(A)$ for all $t$, $u(0)=x$, and $Au\in C([0,T_0];X)$, such that $u(t)=x+\int_0^t(Au(s)+f(s))\,ds$ for every $t$. (3) When $A$ generates a strongly continuous semigroup $T$ satisfying an exponential norm bound, a **mild solution** (variation-of-constants solution) is the continuous function given by the convergent Bochner integral $$u(t)=T(t)x+\int_0^tT(t-s)f(s)\,ds,$$ which is well defined by [[lem-variation-of-constants-integral-is-continuous-for-lone-time-forcing]]. (4) An **integral (integrated) solution** is a continuous $u$ with $\int_0^tu(s)\,ds\in D(A)$ and $u(t)=x+A\int_0^tu(s)\,ds+\int_0^tf(s)\,ds$ for all $t$; for $f=0$ this is the integrated form of the homogeneous problem. These are four formulations, with overlaps and equivalences under additional hypotheses: neither differentiability nor membership of $u(t)$ in $D(A)$ is asserted by the mild definition, and the definitions do not assign a derivative to a mild solution.

Here “strong solution” means the graph-continuous integral notion explicitly stated above; some sources use that term for an almost-everywhere differential notion instead. Engel–Nagel II.6.3 calls the homogeneous integral formulation “mild”, whereas the variation-of-constants terminology here follows Schnaubelt Definition 2.11. The mild and integral formulations coincide for generators by the variation-of-constants theorem; they are not asserted to be different classes. Under DC the exponential bound required for the mild formulation is automatic, by [[thm-exponential-bound-for-a-c-zero-semigroup]].

**Classical solution.** A classical solution is $C^1$ on the closed interval
and takes values in the domain of $A$ at every time, including the endpoints;
the equation $u\prime(t)=Au(t)+f(t)$ is required pointwise on $(0,T_0)$, and the derivative is
the Fréchet derivative of the curve
([[def-frechet-derivative-between-banach-spaces]]). Since $A$ is generally
unbounded, membership $u(t)\in D(A)$ and continuity of $Au$ are genuine restrictions. Together with continuity of $u$, they mean graph-norm continuity in $D(A)$
([[def-unbounded-linear-operator-domain-and-graph]]).

**Strong solution.** A strong solution need not be differentiable; instead
$Au$ is continuous, and the equation is imposed in integrated form
$u(t)=x+\int_0^t\bigl(Au(s)+f(s)\bigr)ds$, which makes sense because $Au$ is
continuous and $f$ is Bochner integrable
([[def-bochner-integrable-function]]). If $Au+f$ on $(0,T_0)$ extends continuously to $[0,T_0]$, this identity
gives $u\in C^1([0,T_0];X)$, with $u'=Au+f$ in the interior and one-sided
endpoint derivatives equal to the extension values, by
[[lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves]].
Thus strong and classical solutions coincide when $f$ extends continuously
to $[0,T_0]$; continuity only on $(0,T_0)$ does not ensure endpoint derivatives.

**Mild solution.** The mild solution is the explicit variation-of-constants
function
$$u(t)=T(t)x+\int_0^tT(t-s)f(s)\,ds,$$
which is a well-defined continuous $X$-valued function on $[0,T_0]$ by
[[lem-variation-of-constants-integral-is-continuous-for-lone-time-forcing]];
here $f$ need only be Bochner integrable, and no differentiability, no
membership of $u(t)$ in $D(A)$ and no pointwise equation are asserted.

**Integral (integrated) solution.** An integral solution replaces
differentiability by a weaker regularity: the primitive $\int_0^tu(s)\,ds$ lies
in $D(A)$ for every $t$, and
$u(t)=x+A\int_0^tu(s)\,ds+\int_0^tf(s)\,ds$ holds. For $f=0$ this is the
integrated form of the homogeneous problem $u'=Au$, $u(0)=x$; its advantage is
that it only evaluates $A$ on the primitive, which always lies in $D(A)$ when
$u$ is a mild solution of the homogeneous problem.

The definitions do not by themselves assert implications between the four
notions beyond the elementary ones visible above, and they do not assign a
derivative to a mild solution. The precise equivalence results under additional
hypotheses, and the separation of the notions when those hypotheses fail, are
proved as theorems and exhibited by counterexamples on the companion pages.
