---
id: ex-cm17-string-modes-and-tail-check
kind: example
title: "Two-mode fixed-end string: exact solution, d'Alembert cross-check and the O(N^{-4}) tail bound at N=1"
status: draft
origin: session
domain: physics
dependency_level: 11
deps: [thm-sine-and-cosine-addition-formulas, pthm-cm17-string-wave-solutions, thm-cm-smooth-string-fourier-series-solution, thm-cm-dalembert-formula-and-string-solutions, def-cm-sine-coefficients-of-periodic-functions, def-ck-euclidean-maps-and-diffeomorphisms, thm-sine-and-cosine-derivatives, cor-trigonometric-parity-and-pythagorean-identity, def-cm17-continuum-body-and-units]
dependency_roles:
  thm-sine-and-cosine-addition-formulas: mathematical-premise
  pthm-cm17-string-wave-solutions: physical-result
  thm-cm-smooth-string-fourier-series-solution: mathematical-premise
  thm-cm-dalembert-formula-and-string-solutions: mathematical-premise
  def-cm-sine-coefficients-of-periodic-functions: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
  def-cm17-continuum-body-and-units: formulation-prerequisite
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A worked fixed-end string problem of the adopted model: an initial displacement with two sine modes and zero initial velocity, its exact two-mode solution, agreement with the d'Alembert formula, mode frequencies and a finite check of the O(N^{-4}) tail bound at N=1. The example is an exact conditional computation within the linear string model and reports no measurement."
sources:
  references:
    - title: "K. Likharev, Essential Graduate Physics, Classical Mechanics (September 1, 2026 complete volume), Section 6.5 (standing waves of the fixed-end string and the mode frequencies)"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "R. Laugesen, Harmonic Analysis Lecture Notes (arXiv:0903.3845), Chapters 1-2 (Fourier coefficients, uniqueness and summability of the sine series)"
      url: "https://arxiv.org/pdf/0903.3845"
verification:
  precheck: pass
---

## Example

Let $L>0$ be a length, $c>0$ a speed, $A_*>0$ a displacement scale with
$[A_*]=\ell$, and $\beta\in\mathbb R\setminus\{0\}$ dimensionless. Let
$[x]=\ell$ and $[t]=\tau$, and consider the
fixed-end string model of [[pthm-cm17-string-wave-solutions]] with initial
displacement and velocity

$$F(x):=A_*\left[\sin\Bigl(\frac{\pi x}{L}\Bigr)+\beta\sin\Bigl(\frac{3\pi x}{L}\Bigr)\right],\qquad G(x):=0 .$$

Then $F$ is odd and $2L$-periodic of class $C^\infty$ and $G$ is odd and
$2L$-periodic of class $C^4$, with
$M_4=\sup|G^{(4)}|=0$ and
$M_5=\sup|F^{(5)}|\le A_*(\pi/L)^5(1+243|\beta|)=:\overline M_5$
([[def-cm-sine-coefficients-of-periodic-functions]]). Put
$\omega_n:=n\pi c/L$ and

$$u(t,x):=A_*\left[\cos(\omega_1t)\sin\Bigl(\frac{\pi x}{L}\Bigr) +\beta\cos(\omega_3t)\sin\Bigl(\frac{3\pi x}{L}\Bigr)\right].$$

Then:

1. the sine coefficients of $F$ are $b_1(F)=A_*$, $b_3(F)=\beta A_*$ and $b_n(F)=0$
   otherwise, and the coefficients of $G$ all vanish; hence the series
   solution of [[thm-cm-smooth-string-fourier-series-solution]] is exactly
   the displayed finite sum $u$;
2. $u$ is $C^\infty$ on $\mathbb R^2$, satisfies $u_{tt}=c^2u_{xx}$,
   vanishes at $x=0$ and $x=L$ for every $t$, and has
   $u(0,\cdot)=F$, $u_t(0,\cdot)=0$; by the uniqueness clause of the theorem
   it is the unique $C^2$ fixed-end solution with these data;
3. the d'Alembert formula of [[thm-cm-dalembert-formula-and-string-solutions]]
   with data $(F,0)$ gives the same field:
   $\tfrac12[F(x-ct)+F(x+ct)]=u(t,x)$ by the product-to-sum identity
   ([[thm-sine-and-cosine-addition-formulas]],
   [[cor-trigonometric-parity-and-pythagorean-identity]]);
4. the tail bound at $N=1$ is verified: with
   $S_1u=A_*\cos(\omega_1t)\sin(\pi x/L)$ one has
   $|u-S_1u|=A_*|\beta||\cos(\omega_3t)||\sin(3\pi x/L)|\le A_*|\beta|$, while the
   theorem gives $|u-S_Nu|\le C(N+1)^{-4}$ with
   $C\le\overline C:=4A_*(1+243|\beta|)$, so the explicit upper estimate is
   $A_*(1+243|\beta|)/4$ at $N=1$, which also dominates the direct bound
   $A_*|\beta|$ for every $\beta$;
5. the mode frequencies satisfy $[\omega_n]=\tau^{-1}$ under
   $[c]=\ell\tau^{-1}$ and $[L]=\ell$ ([[def-cm17-continuum-body-and-units]]).

## Facts & Assumptions

**Given:** the string data $L>0$, $c>0$, $A_*>0$ with $[A_*]=\ell$; the dimensionless parameter $\beta\ne0$; the functions $F,G$ and the field $u$.

[F1] Fixed-end theorem ([[thm-cm-smooth-string-fourier-series-solution]], [[def-cm-sine-coefficients-of-periodic-functions]]): for odd $2L$-periodic $C^5$ displacement data $F$ and odd $2L$-periodic $C^4$ velocity data $G$, the sine series with coefficients $a_n=b_n(F)$, $d_n=b_n(G)/\omega_n$ solves the fixed-end problem, is unique among $C^2$ solutions, and satisfies the tail bound $|u-S_Nu|\le C(N+1)^{-4}$ with $C=2\bigl(2L^5M_5/\pi^5+2L^5M_4/(c\pi^5)\bigr)$.

[F2] d'Alembert formula ([[thm-cm-dalembert-formula-and-string-solutions]]): for $F\in C^2(\mathbb R)$ and $G\equiv0$ the field $\tfrac12[F(x-ct)+F(x+ct)]$ is $C^2$ and solves $u_{tt}=c^2u_{xx}$ with $u(0,\cdot)=F,u_t(0,\cdot)=0$; uniqueness among $C^2$ fields on $\mathbb R^2$ holds.

[F3] Trigonometry and derivatives ([[thm-sine-and-cosine-addition-formulas]], [[thm-sine-and-cosine-derivatives]], [[cor-trigonometric-parity-and-pythagorean-identity]], [[def-ck-euclidean-maps-and-diffeomorphisms]]): $F$ and $G$ have the stated smoothness and parity; $\sin a\cos b=\tfrac12[\sin(a+b)+\sin(a-b)]$; $\omega_3=3\omega_1$; and $|F^{(5)}|=A_*\bigl|(\pi/L)^5\cos(\pi x/L)+243\beta(\pi/L)^5\cos(3\pi x/L)\bigr|\le A_*(\pi/L)^5(1+243|\beta|)$.

[F4] String model ([[pthm-cm17-string-wave-solutions]]): the model equation is $u_{tt}=c^2u_{xx}$ for the transverse displacement with the stated idealizations and dimension conventions ([[def-cm17-continuum-body-and-units]]).

## Verification

**Proof technique:** direct; identify the finite sine expansion of the two-mode data, verify the equation and data mode by mode, cross-check with the d'Alembert formula and evaluate the tail bound at $N=1$.

1.1 Coefficients: by the orthogonality of the sine family, $b_n(F)=\frac{2}{L}\int_0^LF(x)\sin(n\pi x/L)\,dx$ equals $A_*$ for $n=1$, $\beta A_*$ for $n=3$ and $0$ otherwise ([[def-cm-sine-coefficients-of-periodic-functions]]); likewise $b_n(G)=0$ for all $n$. Hence the series solution of [F1] is $\sum_n[b_n(F)\cos(\omega_nt)+0]\sin(n\pi x/L)=u(t,x)$, a finite sum. [given, F1, algebra]

2.1 Equation and data: the model equation is the one of [F4], and differentiating the two terms twice in $t$ and $x$ gives $u_{tt}=-\sum_{n\in\{1,3\}}\omega_n^2[\ldots]$ and $c^2u_{xx}=-c^2\sum_n(n\pi/L)^2[\ldots]$, which agree because $\omega_n=cn\pi/L$; at $t=0$ the cosines equal $1$ so $u(0,\cdot)=F$, and $u_t(t,x)=-\sum_n\omega_n\sin(\omega_nt)[\ldots]$ vanishes at $t=0$, giving $u_t(0,\cdot)=0$. Boundary conditions hold since each $\sin(n\pi x/L)$ vanishes at $x=0,L$. [step 1.1, F3, F4, algebra]

3.1 Uniqueness: by [F1] the solution is unique among $C^2$ fields on $[0,T]\times[0,L]$ with these boundary and initial data; the displayed $u$ is therefore the model's solution. [step 2.1, F1]

3.2 d'Alembert cross-check: by the product-to-sum identity of [F3], $\tfrac12[F(x-ct)+F(x+ct)]=\tfrac{A_*}{2}[\sin(\pi(x-ct)/L)+\sin(\pi(x+ct)/L)]+\tfrac{\beta A_*}{2}[\sin(3\pi(x-ct)/L)+\sin(3\pi(x+ct)/L)]=A_*\cos(\omega_1t)\sin(\pi x/L)+\beta A_*\cos(\omega_3t)\sin(3\pi x/L)=u(t,x)$, so the two formulas agree for these data. [step 2.1, F2, F3, algebra]

4.1 Tail bound at $N=1$: $S_1u=A_*\cos(\omega_1t)\sin(\pi x/L)$, so $|u-S_1u|=A_*|\beta||\cos(\omega_3t)||\sin(3\pi x/L)|\le A_*|\beta|$. Differentiating $F$ five times by [F3] gives $F^{(5)}(x)=A_*(\pi/L)^5\bigl(\cos(\pi x/L)+243\beta\cos(3\pi x/L)\bigr)$, hence $M_5\le\overline M_5=A_*(\pi/L)^5(1+243|\beta|)$, while $M_4=0$. Thus the constant in [F1] satisfies $C=4L^5M_5/\pi^5\le\overline C:=4A_*(1+243|\beta|)$; applying [F1] yields $|u-S_1u|\le C2^{-4}\le\overline C2^{-4}=A_*(1+243|\beta|)/4$. This explicit upper estimate also dominates the direct bound $A_*|\beta|$, since $1+243|\beta|\ge4|\beta|$, and preserves the theorem’s $O(N^{-4})$ estimate with $C\le\overline C$ for every $N\ge1$. Equality between $M_5$ and $\overline M_5$ is not required. [step 2.1, F1, F3, algebra] ∎

## Remarks

- The two-mode data make every series finite, so the check isolates the theorem's content — the mode frequencies, the boundary and initial conditions, uniqueness, the d'Alembert correspondence and the tail constant — without requiring convergence arguments beyond the supplier theorem.

- Modes with larger $n$ oscillate faster and the displayed bound is deliberately conservative at small $N$; the $O(N^{-4})$ decay becomes informative for large mode numbers and smooth data, as the theorem states. No measured frequency, tension or density appears.
