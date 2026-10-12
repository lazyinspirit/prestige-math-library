---
id: thm-nrqm-intervals-finite-well-root-conditions-and-bound-count
aliases: [nrqm-intervals-and-contacts-finite-well-root-conditions-and-bound-count]
kind: theorem
domain: mathematics
title: "Finite square well: root conditions, simplicity and the bound-state count"
status: draft
origin: pipeline
dependency_level: 3
deps: [def-nrqm-intervals-hilbert-sobolev-spaces, lem-nrqm-intervals-weak-derivative-ac-representative, lem-nrqm-intervals-endpoint-trace-and-half-line-decay, thm-nrqm-intervals-regular-ivp-parameter-series, thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators, def-complex-exponential, cor-complex-trigonometric-and-hyperbolic-addition-formulas, cor-complex-trigonometric-and-hyperbolic-derivatives, thm-derivative-of-exponential, thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces, def-hilbert-space, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  def-nrqm-intervals-hilbert-sobolev-spaces: mathematical-premise
  lem-nrqm-intervals-weak-derivative-ac-representative: mathematical-premise
  lem-nrqm-intervals-endpoint-trace-and-half-line-decay: mathematical-premise
  thm-nrqm-intervals-regular-ivp-parameter-series: mathematical-premise
  thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators: mathematical-premise
  def-complex-exponential: mathematical-premise
  cor-complex-trigonometric-and-hyperbolic-addition-formulas: mathematical-premise
  cor-complex-trigonometric-and-hyperbolic-derivatives: mathematical-premise
  thm-derivative-of-exponential: mathematical-premise
  thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 9.1 pp. 181-186 and Section 9.6 pp. 214-221 (finitely many negative eigenvalues for short-range potentials, root conditions and oscillation counting)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics (Cappella Archive, 2008/2010), Chapter 4 pp. 65-88 (finite square well: even and odd root conditions and bound-state counting; consulted for the branch structure, with the proof written out here)"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
---

## Statement

Assume the Axiom of Choice and Countable Choice ([[def-axiom-of-choice]],
[[def-countable-choice]]). Let $a>0$, $U>0$, $m,\hbar>0$ and put
$K:=\sqrt{2mU}/\hbar>0$. Let $V:\mathbb R\to\mathbb R$ be $V(x)=-U$ for
$|x|\le a$ and $V(x)=0$ for $|x|>a$, and let
$H\psi:=-\frac{\hbar^2}{2m}\psi''+V\psi,\qquad D(H):=H^2(\mathbb R),$
with $H^2$ of [[def-nrqm-intervals-hilbert-sobolev-spaces]]. Then:

(a) $H$ is self-adjoint on $H^2(\mathbb R)$;

(b) *root conditions.* $E\in\mathbb R$ with $-U<E<0$ is an eigenvalue of $H$
if and only if, writing $E=-\varepsilon$, $\kappa:=\sqrt{2m\varepsilon}/\hbar$
and $k:=\sqrt{2m(U-\varepsilon)}/\hbar$ (so that $k,\kappa>0$ and
$k^2+\kappa^2=K^2$), the pair $(k,\kappa)$ satisfies
$k\tan(ka)=\kappa\qquad\text{(even case)}\qquad\text{or}\qquad
-k\cot(ka)=\kappa\qquad\text{(odd case)} .$
Every such eigenvalue is simple, and its eigenfunction is, up to a nonzero
scalar, $x\mapsto\cos(kx)$ on $(-a,a)$ continued by $ce^{-\kappa|x|}$ outside
in the even case and $x\mapsto\sin(kx)$ on $(-a,a)$ continued by
$c\,\operatorname{sgn}(x)e^{-\kappa|x|}$ outside in the odd case;

(c) *range of energies.* There are no eigenvalues $E\le-U$ and no eigenvalues
$E\ge0$; hence all eigenvalues of $H$ lie in $(-U,0)$ and are given by (b);

(d) *bound count.* The number of negative eigenvalues of $H$ equals
$\Bigl\lceil\frac{2aK}{\pi}\Bigr\rceil,$
and more precisely the equations of (b) have exactly one solution $k$ in each
interval $\bigl(\frac{n\pi}{2a},\frac{(n+1)\pi}{2a}\bigr)$, $n\ge0$, whose
left endpoint satisfies $\frac{n\pi}{2a}<K$, and no solution in $(0,K)$
elsewhere; the solutions are alternatively of even type ($n$ even) and odd
type ($n$ odd).

## Facts & Assumptions

**Given:** $a,U,m,\hbar>0$, $K=\sqrt{2mU}/\hbar$, the potential $V$ (bounded measurable real, $|V|\le U$, support $[-a,a]$), and the operator $H$ on $D(H)=H^2(\mathbb R)$.

[F1] $V$ is bounded and measurable; by [[thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators]] clause (c) (with $d=1$ and the free operator $H_0=-\frac{\hbar^2}{2m}D^2$ of clause (b)) the operator $H=H_0+M_V$ is self-adjoint on $D(H_0)=H^2(\mathbb R)$ and its spectrum is real.

[F2] Eigenfunctions: if $H\psi=E\psi$ with $\psi\in H^2(\mathbb R)$, $\psi\ne0$, then $\psi$ has a global $C^1$ representative, whose restrictions to the three open constant-potential intervals are $C^2$, and $-\frac{\hbar^2}{2m}\psi''+V\psi=E\psi$ holds classically on each of the three intervals; on each interval the solution space of the corresponding constant-coefficient equation is two-dimensional, spanned by the exponentials/trigonometric functions listed in [[def-complex-exponential]], with derivatives as in [[thm-derivative-of-exponential]] and [[cor-complex-trigonometric-and-hyperbolic-derivatives]], and with the addition formulas of [[cor-complex-trigonometric-and-hyperbolic-addition-formulas]] for the Wronskian and matching computations ([[lem-nrqm-intervals-weak-derivative-ac-representative]] for the classical representative).

[F3] Quadratic form: for $\psi\in H^2(\mathbb R)$, $\langle H\psi,\psi\rangle=\frac{\hbar^2}{2m}\|\psi'\|_2^2+\int V|\psi|^2\ge\frac{\hbar^2}{2m}\|\psi'\|_2^2-U\|\psi\|_2^2$; for $\psi\ne0$ the two terms cannot both be extremal, since an $H^2$ class has a continuous representative ([[lem-nrqm-intervals-endpoint-trace-and-half-line-decay]]), so a.e. constancy on $(-a,a)$ with vanishing outside would contradict $H^1$ regularity across $\pm a$.

## Proof

1.1 [Self-adjointness] This is [F1]. [F1]

1.2 [Energies $E\le-U$ are excluded] Let $H\psi=E\psi$ with $\|\psi\|_{L^2}=1$ and $E\le-U$. By [F3], $E=\langle H\psi,\psi\rangle =\frac{\hbar^2}{2m}\|\psi'\|_2^2+\int_{[-a,a]}V|\psi|^2$ (the integral is supported on $[-a,a]$), and $\int_{[-a,a]}V|\psi|^2=-U\int_{[-a,a]}|\psi|^2\ge-U\|\psi\|^2=-U$. If $E\le-U$, both inequalities must be equalities: $\|\psi'\|_2=0$ and $\int_{[-a,a]}|\psi|^2=\|\psi\|^2=1$. The first equality forces the class $\psi$ to be constant ([[lem-nrqm-intervals-weak-derivative-ac-representative]]: its absolutely continuous representative has derivative $0$), while the second forces this constant to vanish outside a null set of $[-a,a]$, so $\psi=0$ almost everywhere, contradicting $\|\psi\|=1$. Hence $E>-U$. [F3, algebra]

1.3 [Parity and matching] Let $E=-\varepsilon\in(-U,0)$, $\kappa=\sqrt{2m\varepsilon}/\hbar$, $k=\sqrt{2m(U-\varepsilon)}/\hbar$, so $k^2+\kappa^2=K^2$. On $|x|>a$ the classical equation is $\psi''=\kappa^2\psi$ with $\kappa>0$, so an $L^2$ solution is a multiple of $e^{-\kappa|x|}$ on $x>a$ and of $e^{\kappa x}$ on $x<-a$. On $(-a,a)$ it satisfies $\psi''=-k^2\psi$, so the space of solutions is spanned by $\cos(kx)$ and $\sin(kx)$. The potential is even, so the reflection operator $(\Pi\psi)(x)=\psi(-x)$ commutes with $H$ on $H^2$ and maps every eigenspace to itself. Eigenspaces are at most one-dimensional: the solutions decaying as $x\to-\infty$ form a one-dimensional space $c\,e^{\kappa x}$ ($x<-a$), and the transfer through $(-a,a)$ is invertible (two independent solutions of $\psi''=-k^2\psi$ are independent at every point), so at most one direction matches the decaying solution at $+\infty$. Hence $\Pi\psi=\pm\psi$: every eigenfunction is even or odd. For an even eigenfunction, $\psi(x)=A\cos(kx)$ on $(-a,a)$ and $\psi(x)=Be^{-\kappa|x|}$ for $|x|>a$; matching $\psi$ and $\psi'$ at $a$ gives $A\cos(ka)=Be^{-\kappa a},\qquad -Ak\sin(ka)=-\kappa Be^{-\kappa a},$ which eliminates $A,B$ and gives $k\tan(ka)=\kappa$. For an odd eigenfunction, $\psi(x)=A\sin(kx)$ on $(-a,a)$ and $\psi(x)=B\operatorname{sgn}(x)e^{-\kappa|x|}$ outside; matching gives $A\sin(ka)=Be^{-\kappa a}$ and $Ak\cos(ka)=-\kappa Be^{-\kappa a}$, i.e. $-k\cot(ka)=\kappa$. Conversely, if either condition holds with $k,\kappa>0$, $k^2+\kappa^2=K^2$, then the indicated piecewise function is $C^1$, piecewise $C^2$, satisfies $H\psi=E\psi$ on each constant-potential interval and decays exponentially. Its restrictions and their first derivatives are square-integrable, and its piecewise classical second derivative is square-integrable because the central interval is bounded and the exterior pieces decay exponentially. To verify the global weak derivatives, integrate against a compactly supported smooth test function separately on $(-\infty,-a)$, $(-a,a)$ and $(a,\infty)$: the boundary terms cancel at $\pm a$ for the first derivative because $\psi$ is continuous, and for the second derivative because $\psi'$ matches there. Thus the piecewise first and second derivatives are the global weak derivatives and belong to $L^2(\mathbb R)$, so $\psi\in H^2(\mathbb R)$ by [[def-nrqm-intervals-hilbert-sobolev-spaces]]. It is nonzero and therefore an eigenfunction. This proves (b). [F2, algebra]

1.4 [Monotone branches] For $k\in(0,K)$ put $\kappa(k):=\sqrt{K^2-k^2}>0$, a strictly decreasing continuous function. Define on each interval $B_n:=\bigl(\frac{n\pi}{2a},\frac{(n+1)\pi}{2a}\bigr)$ the function $L_n(k):=\begin{cases}k\tan(ka),&n\text{ even},\\ -k\cot(ka),&n\text{ odd}.\end{cases}$ Each $L_n$ is strictly increasing on $B_n$: for $n$ even, $L_n'(k)=\tan(ka)+ka\sec^2(ka)>0$ because $ka\in(n\pi/2,(n+1)\pi/2)$ with $n$ even lies in a range where $\tan(ka)>0$; for $n$ odd, $L_n(k)=-k\cot(ka)$ with $\cot(ka)<0$ and $L_n'(k)=-\cot(ka)+ka\csc^2(ka)>0$. Moreover, $\lim_{k\to(\frac{n\pi}{2a})^+}L_n(k)=0^+$ and $\lim_{k\to(\frac{(n+1)\pi}{2a})^-}L_n(k)=+\infty$ for every $n\ge0$. [F2, algebra]

2.1 [Energies $E\ge0$ are excluded] Let $H\psi=E\psi$ with $\psi\ne0$ and $E\ge0$. By [F2], on $(a,\infty)$ the classical equation is $\psi''=-k_0^2\psi$ with $k_0=\sqrt{2mE}/\hbar\ge0$ (and $\psi''=0$ when $E=0$). If $E>0$, every solution on $(a,\infty)$ is $c_1e^{ik_0x}+c_2e^{-ik_0x}$; if the pair $(c_1,c_2)$ were nonzero, then $\int_a^X|\psi|^2=|c_1|^2+|c_2|^2$ times $(X-a)$ plus a bounded oscillating term, which tends to infinity, contradicting $\psi\in L^2$, so $(c_1,c_2)=0$ and $\psi=0$ on $(a,\infty)$; if $E=0$, every solution on $(a,\infty)$ is affine, and an affine $L^2$ function vanishes identically, so again $\psi=0$ there. The same argument on $(-\infty,-a)$ shows $\psi=0$ outside $[-a,a]$. Then the $C^1$ representative of $\psi$ (its $H^2$ class is $C^1$ with absolutely continuous derivative) has $\psi(a)=\psi'(a)=0$, and on $(-a,a)$ it solves the second-order equation with $k_0\ge0$ and these terminal data; by uniqueness of the linear initial value problem ([[thm-nrqm-intervals-regular-ivp-parameter-series]] with the constant potential $-U$) it vanishes identically, so $\psi=0$, a contradiction. Hence $E<0$, and with step 1.2, $E\in(-U,0)$. [step 1.2, F2, algebra]

2.2 [Existence and uniqueness of roots] Fix $n\ge0$ with $\frac{n\pi}{2a}<K$, and consider $F_n:=L_n-\kappa$ on $B_n\cap(0,K)$, a strictly increasing continuous function. Near the left endpoint, $L_n\to0^+$ while $\kappa>0$ (since the left endpoint is $<K$), so $F_n<0$ there; put $r_n=(n+1)\pi/(2a)$. If $r_n\le K$, the one-sided limit $L_n(k)\to+\infty$ as $k\uparrow r_n$ makes $F_n>0$ near that endpoint, including when $r_n=K$; no value of $L_n$ at its pole is taken. If $K<r_n$, then $K$ is interior to the branch, $L_n(K)>0$ is well defined, and $\kappa(k)\to0$ as $k\uparrow K$, again giving $F_n>0$. Hence by the intermediate value theorem $F_n$ has a zero, and strict monotonicity makes it unique and interior. If instead $\frac{n\pi}{2a}\ge K$, then $k<K$ on $B_n$ never holds, so no root. Since $\{B_n:n\ge0\}$ covers $(0,\infty)$ except the endpoints, these are all roots in $(0,K)$; the number of $n\ge0$ with $\frac{n\pi}{2a}<K$ is $\lceil2aK/\pi\rceil$, which is (d). [step 1.4, algebra]

3.1 [Assembly] By steps 1.2, 2.1 and 1.3 every negative eigenvalue has one of the two root forms, with simple eigenspace, and by step 2.2 the roots are exactly the described ones with the stated count. Steps 1.1, 1.2, 1.3, 2.1 and 2.2 give (a)-(d). [step 1.1, step 2.1, step 1.3, step 2.2] ∎
