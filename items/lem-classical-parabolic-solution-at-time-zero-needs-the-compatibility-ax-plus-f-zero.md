---
id: lem-classical-parabolic-solution-at-time-zero-needs-the-compatibility-ax-plus-f-zero
kind: lemma
title: Compatibility at time zero for a classical parabolic solution
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 5
deps: [def-infinitesimal-generator-of-a-c-zero-semigroup, def-classical-strong-and-mild-abstract-cauchy-solutions, def-resolvent-of-a-closed-operator, thm-generators-are-closed-and-densely-defined, def-frechet-derivative-between-banach-spaces, def-banach-space, def-unbounded-linear-operator-domain-and-graph, lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves, def-dependent-choice]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Klaus-Jochen Engel and Rainer Nagel, One-Parameter Semigroups for Linear Evolution Equations, Graduate Texts in Mathematics 194 (complete author-hosted monograph)"
      url: "https://www.math.uni-tuebingen.de/de/forschung/agfa/members/engel-nagel_one-parameter-semigroups.pdf/%40%40download/file/engel-nagel_one-parameter-semigroups.pdf"
      locator: 'Chapter II Section 4.b, orbit differentiability and the generator domain, printed pp. 109-112'
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2026 author manuscript; complete 392-page archived text)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: 'Chapter 11 Section 11.3, Lemma 11.12 and the strong-solution conditions, printed pp. 258-259'
verification:
  precheck: pass
---

## Statement

Assume Dependent Choice ([[def-dependent-choice]]) for the cited integral and semigroup suppliers.

Let $A$ be the generator of a strongly continuous semigroup on a Banach space
$X$ ([[def-infinitesimal-generator-of-a-c-zero-semigroup]], [[def-banach-space]]),
let $b>0$, $x\in X$, and let $f:[0,b]\to X$ be continuous with $f(0)$ defined.
Suppose $u\in C([0,b],X)\cap C^1((0,b],X)$ satisfies $u(0)=x$, $u(t)\in D(A)$
and $u'(t)=Au(t)+f(t)$ for every $t\in(0,b]$, and suppose
$\lim_{t\downarrow0}u'(t)$ exists in $X$ (in particular if $u\in C^1([0,b],X)$).
Then $x\in D(A)$ and
$$\lim_{t\downarrow0}u'(t)=Ax+f(0);$$
consequently $u$ extends to a classical solution on $[0,b]$ in the sense of
[[def-classical-strong-and-mild-abstract-cauchy-solutions]] exactly when this
limit exists, and in the PDE realisation $x\in D(A)$ is precisely the
boundary-and-domain compatibility of the initial datum. **One-order propagation under stronger regularity.** If, in addition, $f\in C^1([0,b],X)$, $u\in C^1((0,b],D(A))$ in the graph norm ([[def-unbounded-linear-operator-domain-and-graph]]), and $Ax+f(0)\in D(A)$ with $u'(t)\to Ax+f(0)$ in the graph norm as $t\downarrow0$, then $u'$ is right-differentiable at $0$ with $(u')'(0)=A(Ax+f(0))+f'(0)$. No choice principle beyond Dependent Choice is used.

## Facts & Assumptions

**Given:** A strongly continuous semigroup with generator $A$ on the Banach space $X$, the closed operator $A$ with domain $D(A)$, a continuous $f:[0,b]\to X$ with $f(0)$ defined, and $u\in C([0,b],X)\cap C^1((0,b],X)$ with $u(0)=x$, $u(t)\in D(A)$, $u'(t)=Au(t)+f(t)$ on $(0,b]$ and $y:=\lim_{t\downarrow0}u'(t)$ existing in $X$. For the one-order propagation clause, also assume $f\in C^1([0,b],X)$, $u\in C^1((0,b],D(A))$ in graph norm, $Ax+f(0)\in D(A)$, and $u'(t)\to Ax+f(0)$ in graph norm.

[L1] $A$ is closed and densely defined: its graph $\{(v,Av):v\in D(A)\}$ is closed in $X\times X$ ([[thm-generators-are-closed-and-densely-defined]]).

[L2] A classical solution on $[0,b]$ is a function in $C^1([0,b],X)$ with values in $D(A)$, $Au\in C([0,b],X)$, satisfying the equation on $(0,b)$ and the initial condition; continuous forcing on $[0,b]$ extends the equation to the endpoints ([[def-classical-strong-and-mild-abstract-cauchy-solutions]]).

[L3] [[def-unbounded-linear-operator-domain-and-graph]]: the graph norm on $D(A)$ is $\|v\|_A=(\|v\|^2+\|Av\|^2)^{1/2}$, so $A:D(A)_{\mathrm{graph}}\to X$ is bounded.

[L4] [[lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves]]: if a continuous Banach-valued curve is differentiable on $(0,b)$ and its derivative extends continuously to $[0,b]$, then its increment equals the integral of that derivative.

## Proof

**Proof technique:** direct.

1.1 Limit of $Au(t)$. For $t\in(0,b]$ the equation gives $Au(t)=u'(t)-f(t)$, and $u'(t)\to y$ by the hypothesis while $f(t)\to f(0)$ by continuity; hence $Au(t)\to y-f(0)$ in $X$. [given, algebra]

1.2 Limit of $u(t)$. By continuity of $u$ at $0$ and $u(0)=x$ one has $u(t)\to x$ as $t\downarrow0$ ([[def-frechet-derivative-between-banach-spaces]]), and $u(t)\in D(A)$ for every $t\in(0,b]$. [given]

2.1 Closedness forces the endpoint compatibility. The pairs $(u(t),Au(t))$ lie in the graph of $A$ for $t\in(0,b]$ and converge to $(x,y-f(0))$ by [step 1.1] and [step 1.2]; since the graph is closed by [L1], the limit lies in the graph: $x\in D(A)$ and $Ax=y-f(0)$, that is $\lim_{t\downarrow0}u'(t)=Ax+f(0)$. [step 1.1, step 1.2, L1, given]

3.1 Equivalence with the classical solution. If the limit exists, [step 2.1] shows $x\in D(A)$ and, using $Au(t)=u'(t)-f(t)\to Ax$, the derivative $u'$ extends continuously to $[0,b]$ with value $Ax+f(0)=Au(0)+f(0)$. By [L4] applied to $u$ on $[0,t]$, $u(t)-u(0)=\int_0^t u'(s)\,ds$, so the right derivative at $0$ is this limiting value. Hence $u\in C^1([0,b],X)$ solves the equation at every point of $[0,b]$ and is a classical solution by [L2]; conversely a classical solution has $u\in C^1([0,b],X)$, so its one-sided derivative at $0$ exists and the limit does. [step 2.1, L2, L4, given]

3.2 (One-order propagation under stronger regularity) Assume the additional hypotheses in the final Statement clause and put $w(0):=Ax+f(0)$, $w(t):=u'(t)$ for $t>0$. By [L3], $A$ is bounded from the graph-norm domain into $X$; since $u$ is $C^1$ there in graph norm and $f\in C^1$, differentiating $u'=Au+f$ on $(0,b]$ gives $w'(t)=Aw(t)+f'(t)$. The graph-norm convergence of $w$ and continuity of $f'$ imply $w'(t)\to A(Ax+f(0))+f'(0)$. By [L4] on $[0,t]$, $w(t)-w(0)=\int_0^t w'(s)\,ds$; dividing by $t$ and using continuity of the integrand at $0$ gives the stated right derivative of $u'$ at $0$. [step 2.1, L3, L4, given, algebra]

4.1 Assembly. [step 2.1] proves $x\in D(A)$ and the value of the limit; [step 3.1] gives the stated equivalence with the classical solution; [step 3.2] proves the one-order propagation. The argument used only continuity, closedness of the graph and the equation, so no choice principle beyond Dependent Choice was used. [step 2.1, step 3.1, step 3.2, given] ∎ 