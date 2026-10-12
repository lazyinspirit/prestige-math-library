---
id: ex-nrqm-oscillator-formal-nonnormalizable-solution
aliases: [nrqm-oscillator-example-formal-nonnormalizable-solution]
kind: example
domain: mathematics
title: "Formal nonnormalizable solution"
status: draft
origin: pipeline
dependency_level: 3
deps: [thm-nrqm-oscillator-hermite-recurrence, thm-nrqm-oscillator-hermite-orthogonality, thm-ftc-first-part, thm-ftc-second-part, thm-algebra-of-derivatives, thm-chain-rule, thm-derivative-of-exponential, def-complex-exponential, def-l-p-space-as-a-quotient-by-null-functions, def-complex-lp-and-euclidean-test-function-conventions, def-countable-choice]
dependency_roles:
  thm-nrqm-oscillator-hermite-recurrence: mathematical-premise
  thm-nrqm-oscillator-hermite-orthogonality: mathematical-premise
  thm-ftc-first-part: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-derivative-of-exponential: mathematical-premise
  def-complex-exponential: mathematical-premise
  def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
  def-complex-lp-and-euclidean-test-function-conventions: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, §8.3 pp. 177-179 (ground state equation and its unique normalized solution)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, §3.1 pp. 37-41 (first-order equation for the ground state and uniqueness of its solution)"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
---

## Example

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $g_0(y)=\pi^{-1/4}e^{-y^2/2}$ ([[thm-nrqm-oscillator-hermite-recurrence]](a)) and define

$$F(y):=\int_0^ye^{t^2}\,dt,\qquad u_2(y):=e^{-y^2/2}F(y)\qquad(y\in\mathbb R).$$

Then:

(a) $F$ is $C^1$ with $F'=e^{y^2}$, and $u_2$ is $C^2$ and solves the ground-state eigenvalue equation

$$u_2''(y)=(y^2-1)u_2(y)\qquad(y\in\mathbb R),$$

which is the equation $(-\partial_y^2+y^2)u=u$ satisfied by $g_0$ ([[thm-nrqm-oscillator-hermite-orthogonality]](b));

(b) the Wronskian is constant and nonzero,

$$W:=g_0u_2'-g_0'u_2=\pi^{-1/4},$$

so $g_0$ and $u_2$ are linearly independent solutions;

(c) $u_2\notin L^2(\mathbb R,dy)$: for $y\ge1$ one has $|u_2(y)|^2\ge e^{y^2-4y+2}$, which is not integrable, so $\int_{\mathbb R}|u_2|^2dy=+\infty$;

(d) every $C^2\cap L^2$ solution $u$ of $u''=(y^2-1)u$ is a constant multiple of $g_0$: the quantity $W(u):=g_0u'-g_0'u$ is constant for such $u$; if this constant is nonzero then $u(y)=g_0(y)\bigl(C+c\pi^{1/2}F(y)\bigr)$ for some constants with $c\ne0$, which grows like $e^{y^2/2}$ and is not in $L^2$; hence the constant is zero and $u/g_0$ is constant.

Thus $u_2$ is the classical formal second solution of the ground-state equation, and its failure to be square-integrable is what forces the $L^2$ eigenfunction to be the Gaussian.

## Facts & Assumptions

**Given:** $g_0(y)=\pi^{-1/4}e^{-y^2/2}$, $F(y)=\int_0^ye^{t^2}dt$, $u_2=e^{-y^2/2}F$.

[F1] $g_0'=-yg_0$ and $g_0''=(y^2-1)g_0$, so $(-\partial_y^2+y^2)g_0=g_0$; $g_0>0$ everywhere ([[thm-nrqm-oscillator-hermite-recurrence]](a),(d), [[thm-nrqm-oscillator-hermite-orthogonality]](b), [[thm-algebra-of-derivatives]], [[thm-chain-rule]], [[thm-derivative-of-exponential]]).

[F2] $F$ is differentiable with $F'=e^{y^2}$ ([[thm-ftc-first-part]]) and $F(y)\ge0$ for $y\ge0$.

[F3] If $G$ is differentiable with integrable derivative on $[a,b]$, then $\int_a^bG'=G(b)-G(a)$ ([[thm-ftc-second-part]]); a nonnegative function bounded below by a positive constant on a half-line is not integrable there ([[def-l-p-space-as-a-quotient-by-null-functions]], [[def-complex-lp-and-euclidean-test-function-conventions]]).

## Verification

1.1 [(a) the formal solution] By [F2], $F\in C^1$ with $F'=e^{y^2}$, so $u_2$ is $C^2$ with, using the product rule and [F1], $u_2'=e^{-y^2/2}(F'-yF)=e^{-y^2/2}\bigl(e^{y^2}-yF\bigr)$ and $u_2''=e^{-y^2/2}\bigl(2ye^{y^2}-F-yF'-y(e^{y^2}-yF)\bigr)=(y^2-1)u_2$ because the $e^{y^2}$ terms cancel. Since $(-\partial_y^2+y^2)g_0=g_0$ by [F1], the equation $u''=(y^2-1)u$ is exactly the ground-state eigenvalue equation. [given, F1, F2, algebra]

1.2 [(c) nonintegrability] For $y\ge1$, $F(y)=\int_0^ye^{t^2}dt\ge\int_{y-1}^ye^{t^2}dt\ge e^{(y-1)^2}$ because $t\ge y-1\ge0$ on the interval and $t\mapsto e^{t^2}$ is increasing there. Hence $|u_2(y)|^2=e^{-y^2}F(y)^2\ge e^{-y^2}e^{2(y-1)^2}=e^{y^2-4y+2}$ for $y\ge1$; the lower bound exceeds $1$ for $y\ge4$, so $\int_{\mathbb R}|u_2|^2dy\ge\int_4^\infty1\,dy=+\infty$ by [F3]. Hence $u_2\notin L^2(\mathbb R,dy)$. [given, F2, F3, algebra]

2.1 [(b) the Wronskian] Using $g_0'=-yg_0$ from [F1] and the first formula of step 1.1, $W=g_0u_2'-g_0'u_2=\pi^{-1/4}e^{-y^2/2}\cdot e^{-y^2/2}(e^{y^2}-yF)+y\pi^{-1/4}e^{-y^2/2}\cdot e^{-y^2/2}F=\pi^{-1/4}(1-yFe^{-y^2}+yFe^{-y^2})=\pi^{-1/4}$, a nonzero constant; hence $g_0,u_2$ are linearly independent (if $ag_0+bu_2=0$, applying $W(g_0,v):=g_0v'-g_0'v$ gives $b\pi^{-1/4}=0$, hence $b=0$, and then $a=0$ because $g_0>0$). [step 1.1, F1, algebra]

3.1 [(d) all $L^2$ solutions are multiples of $g_0$] Let $u$ be a $C^2$ solution of $u''=(y^2-1)u$ and put $W(u):=g_0u'-g_0'u$. Then $W(u)'=g_0u''-g_0''u=g_0(y^2-1)u-(y^2-1)g_0u=0$ using [F1], so $W(u)=c$ is constant. On each interval where $g_0>0$ (all of $\mathbb R$ by [F1]) one has $(u/g_0)'=W(u)/g_0^2=c/g_0^2$, and since $1/g_0^2=\pi^{1/2}e^{y^2}$ is continuous, [F3] integrated from $0$ to $y$ gives $u(y)=g_0(y)\bigl(C+c\pi^{1/2}F(y)\bigr)$ for $C=u(0)/g_0(0)$. If $c\ne0$, choose $Y\ge1$ so large that $|c|\sqrt\pi F(y)\ge2|C|$ for all $y\ge Y$; such $Y$ exists by step 1.2. The reverse triangle inequality gives $|C+c\sqrt\pi F(y)|\ge\tfrac12|c|\sqrt\pi F(y)$, hence for $y\ge Y$, $|u(y)|\ge\tfrac12|c|\pi^{1/2}g_0(y)e^{(y-1)^2}=\tfrac12|c|\pi^{1/4}e^{y^2/2-2y+1}$ by the lower bound on $F$, which grows like $e^{y^2/2}$ and is not square-integrable by [F3]; so $u\notin L^2$. Therefore if $u\in L^2$ then $c=0$ and $u=Cg_0$. [step 1.1, F1, F3, algebra] ∎
