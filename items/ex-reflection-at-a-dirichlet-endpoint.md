---
id: ex-reflection-at-a-dirichlet-endpoint
kind: example
title: "Odd reflection at a Dirichlet endpoint"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 4
deps: [def-countable-choice, thm-conservation-of-total-wave-energy, thm-dalembert-formula, def-wave-equation-cauchy-data-and-wave-speed, def-wave-energy-and-energy-flux, def-support-and-compactly-supported-riemann-integral-in-rn, thm-ftc-second-part, thm-continuous-implies-integrable, thm-darboux-equals-riemann, thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral, thm-heine-borel-rn, thm-extreme-value-metric, thm-heine-cantor-metric]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Victor Ivrii, Partial Differential Equations (University of Toronto, 2018, CC BY-SA)"
      url: "https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf"
      locator: "§2.6.1, printed pp. 67-69, Example 2.6.1(b) and (2.6.12): Dirichlet reflection at the left end, with the reflected wave re-entering with reversed sign; §2.7, Problem 1: Dirichlet conservation on the half-line (homogeneous case)"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, AMS Graduate Studies in Mathematics)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "§4.4, printed pp. 88-90, Problem 4.16: the wave equation on $(0,\\infty)$ with Dirichlet data by reflection"
verification:
  precheck: pass
---

## Example

Assume the Axiom of Countable Choice. Let $c>0$, let $u_0\in C_c^2(\mathbb R)$
and $u_1\in C_c^1(\mathbb R)$ be odd — equivalently, data on the half-line
$x>0$ extended oddly — and let $U$ be the d'Alembert solution of the whole-line
problem with data $(u_0,u_1)$ ([[thm-dalembert-formula]]). Then:

(i) $U(\cdot,t)$ is odd for every $t$, so $u:=U|_{x>0}$ solves the Dirichlet
half-line problem $u_{tt}=c^2u_{xx}$ on $x>0$ with $u(0,t)=0$ and data
$u_0|_{x>0}$, $u_1|_{x>0}$;

(ii) for data obtained by oddly extending $u_0=\phi$, $u_1=c\phi'$ from
$x>0$, where $\phi\in C_c^2((0,\infty))$, the reflected part re-enters with
reversed sign:

$$u(x,t)=\phi(x+ct)-\phi(ct-x)\qquad(0<x<ct);$$

(iii) the half-line energy
$E_{(0,\infty)}(t)=\frac12\int_0^\infty(u_t^2+c^2u_x^2)\,dx$ equals half the
whole-line energy of $U$ and is constant in $t$ (Ivrii's Dirichlet case of the
half-line energy problem).

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$; $c>0$; odd compactly supported data $u_0\in C_c^2(\mathbb R)$, $u_1\in C_c^1(\mathbb R)$; the d'Alembert solution $U$ of the whole-line problem, and for part (ii) a fixed $\phi\in C_c^2((0,\infty))$ with $u_0=\phi$, $u_1=c\phi'$ on $x>0$.

[F1] D'Alembert's formula: for $U_0\in C^2(\mathbb R)$, $U_1\in C^1(\mathbb R)$ the whole-line solution is $U(x,t)=\frac12[U_0(x+ct)+U_0(x-ct)]+\frac1{2c}\int_{x-ct}^{x+ct}U_1(s)\,ds$, a $C^2$ classical solution of $u_{tt}=c^2u_{xx}$. ([[thm-dalembert-formula]])

[F2] Conservation in case (a): a homogeneous solution whose spatial support is contained in a fixed compact set throughout a time interval has constant total energy on that interval. ([[thm-conservation-of-total-wave-energy]])

[F3] The energy density is $e=\tfrac12(U_t^2+c^2U_x^2)$. By [F1] and the support definition, the spatial support of $U(\cdot,t)$ is contained in $(\operatorname{supp}U_0\cup\operatorname{supp}U_1)+[-ct,ct]$. ([[def-wave-energy-and-energy-flux]], [[def-support-and-compactly-supported-riemann-integral-in-rn]])

[F4] The integral of a continuous derivative on a closed interval equals the endpoint difference; its Darboux, Riemann and Lebesgue integrals agree. ([[thm-ftc-second-part]], [[thm-continuous-implies-integrable]], [[thm-darboux-equals-riemann]], [[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]])

[F5] Closed bounded Euclidean sets are compact; continuous functions on nonempty compact sets are bounded and uniformly continuous. ([[thm-heine-borel-rn]], [[thm-extreme-value-metric]], [[thm-heine-cantor-metric]])

## Verification

1.1 Oddness is preserved and the half-line problem is solved: if $U_0=u_0$ and $U_1=u_1$ are odd, then each term of [F1] is odd in $x$: for the first term, replacing $x$ by $-x$ interchanges the two arguments of the odd function $U_0$ and changes the sign, and for the integral term the substitution $s\mapsto-s$ together with oddness of $U_1$ reverses the orientation of the interval and the sign of the integrand, leaving the integral odd in $x$; hence $U(\cdot,t)$ is odd for every $t$, so $U(0,t)=0$; therefore $u:=U|_{x>0}$ is a $C^2$ solution of $u_{tt}=c^2u_{xx}$ on $x>0$ with trace $u(0,t)=0$ and the prescribed initial data $u_0|_{x>0}$, $u_1|_{x>0}$, which is (i). [given, F1, algebra]

2.1 Reflection with reversed sign: take $u_0=\phi$ and $u_1=c\phi'$ with $\phi$ compactly supported in $(0,\infty)$, extended oddly, and $0<x<ct$; in [F1] the first term is $\frac12[\phi(x+ct)-\phi(ct-x)]$ because $x-ct<0<x+ct$ and $U_0(-\xi)=-\phi(\xi)$ for $\xi>0$; the integral term is $\frac1{2c}\bigl[c\phi(x+ct)-c\phi(ct-x)\bigr]$ by [F4] applied to the odd extension of $c\phi'$ on the two subintervals cut by $0$; adding, $u(x,t)=\phi(x+ct)-\phi(ct-x)$ as claimed; for $x>ct$ the same computation gives $u(x,t)=\phi(x+ct)$, the incoming left-moving profile, so the second term is precisely the reflection. [given, step 1.1, F1, F4, algebra]

3.1 Half-line energy: for each $t$ the density $e(U)(x,t)=\frac12(U_t^2+c^2U_x^2)$ is even in $x$, because $U(\cdot,t)$ odd makes $U_t(\cdot,t)$ odd and $U_x(\cdot,t)$ even; hence $\int_{\mathbb R}e\,dx=2\int_0^\infty e\,dx$, that is, $E_{(0,\infty)}(t)=\frac12E_{\mathbb R}(t)$; fix $T_0>0$; by [F3] the support of $U(\cdot,t)$ is contained in the fixed compact set $K:=(\operatorname{supp}u_0\cup\operatorname{supp}u_1)+[-cT_0,cT_0]$ for every $t\in[0,T_0]$, so [F2] makes $E_{\mathbb R}$ constant on $(0,T_0)$; moreover $E_{\mathbb R}(t)=\int_K e(U)(x,t)\,dx$ there and at the endpoints, and uniform continuity of $e(U)$ on $K\times[0,T_0]$ together with the finite measure of $K$ makes this energy continuous on $[0,T_0]$, so the constancy extends to both endpoints; hence $E_{(0,\infty)}=\frac12E_{\mathbb R}$ is constant on $[0,T_0]$, and since $T_0$ was arbitrary it is constant on $[0,\infty)$, which is (iii). [given, step 1.1, F1, F2, F3, algebra, F5] ∎
