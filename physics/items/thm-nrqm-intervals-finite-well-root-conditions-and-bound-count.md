---
id: thm-nrqm-intervals-finite-well-root-conditions-and-bound-count
aliases: [nrqm-intervals-and-contacts-finite-well-root-conditions-and-bound-count]
kind: theorem
domain: mathematics
title: "Finite square well: root conditions, simplicity and the bound-state count"
status: published
origin: pipeline
dependency_level: 4
deps: [def-nrqm-intervals-hilbert-sobolev-spaces, lem-nrqm-intervals-weak-derivative-ac-representative, lem-nrqm-intervals-endpoint-trace-and-half-line-decay, thm-nrqm-intervals-regular-ivp-parameter-series, thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators, def-complex-exponential, cor-complex-trigonometric-and-hyperbolic-addition-formulas, cor-complex-trigonometric-and-hyperbolic-derivatives, thm-derivative-of-exponential, thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces, def-hilbert-space, def-countable-choice, def-axiom-of-choice, lem-nrqm-intervals-integration-by-parts]
dependency_roles:
  lem-nrqm-intervals-integration-by-parts: mathematical-premise
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
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 9.7, Corollary 9.43 p. 219 (finiteness background for short-range negative spectra; the square-well roots and exact count are proved locally)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 5.1 pp. 75-77, equations (5.3)-(5.8) (even/odd square-well matching; the potential is shifted by -U here, and threshold counting is proved locally)"
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

[F1] $V$ is bounded, measurable and real. In clause (b) of [[thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators]], take $d=1$, $c=4\pi^2\frac{\hbar^2}{2m}=\frac{2\pi^2\hbar^2}{m}$ and $b=0$; the resulting free operator is $H_0=-\frac{\hbar^2}{2m}D^2$ on $D(H_0)=H^2(\mathbb R)$. Clause (c) then gives that $H=H_0+M_V$ is self-adjoint on this domain and has real spectrum.

[F2] If $H\psi=E\psi$ with $\psi\in H^2(\mathbb R)$, then its $H^2$ representative is globally $C^1$ and is $C^2$ on each open interval where $V$ is constant; there $-\frac{\hbar^2}{2m}\psi''+V\psi=E\psi$ holds classically. Indeed $\psi,\psi'$ have locally absolutely continuous representatives and the equation gives the continuous representative of $\psi''$ on each such interval ([[lem-nrqm-intervals-weak-derivative-ac-representative]]). The real exponential and sine/cosine derivative formulas used below are supplied by [[thm-derivative-of-exponential]] and [[cor-complex-trigonometric-and-hyperbolic-derivatives]]; the constant-coefficient solution classifications are proved in steps 1.3 and 2.1. The same regular-IVP supplier gives uniqueness for the central initial-value problem after translating it to a compact interval ([[thm-nrqm-intervals-regular-ivp-parameter-series]]).

[F3] For $\psi\in H^2(\mathbb R)$, $\langle H\psi,\psi\rangle=\frac{\hbar^2}{2m}\|\psi'\|_2^2-U\int_{[-a,a]}|\psi|^2\ge\frac{\hbar^2}{2m}\|\psi'\|_2^2-U\|\psi\|_2^2$. In particular, $\langle H\psi,\psi\rangle\ge-U\|\psi\|_2^2$, with equality exactly when $\psi'=0$ a.e. and $\int_{[-a,a]}|\psi|^2=\|\psi\|_2^2$, since the difference is the sum of the two nonnegative quantities $\frac{\hbar^2}{2m}\|\psi'\|_2^2$ and $U\int_{\mathbb R\setminus[-a,a]}|\psi|^2$.

## Proof

1.1 [Self-adjointness] This is [F1]. [F1]

1.2 [Energies $E\le-U$ are excluded] Let $H\psi=E\psi$ with $\|\psi\|_{L^2}=1$ and $E\le-U$. By [F3], $E=\langle H\psi,\psi\rangle =\frac{\hbar^2}{2m}\|\psi'\|_2^2+\int_{[-a,a]}V|\psi|^2$ and this is at least $-U$. Thus $E=-U$ and equality holds in the lower bound, so $\|\psi'\|_2=0$. The absolutely continuous representative of an $H^1$ function with derivative zero is constant on every bounded interval by [F2], hence is a single constant on $\mathbb R$; the only constant in $L^2(\mathbb R)$ is $0$. This contradicts $\|\psi\|_2=1$, so $E>-U$. [F2, F3, algebra]

1.3 [Parity and matching] Let $E=-\varepsilon\in(-U,0)$, $\kappa=\sqrt{2m\varepsilon}/\hbar$, $k=\sqrt{2m(U-\varepsilon)}/\hbar$, so $k^2+\kappa^2=K^2$. On an exterior interval the classical equation is $\psi''=\kappa^2\psi$. Put $g=\psi'-\kappa\psi$; then $g'=-\kappa g$, so $(e^{\kappa x}g)'=0$ and $g=Ce^{-\kappa x}$. Integrating $(e^{-\kappa x}\psi)'=Ce^{-2\kappa x}$ shows that every solution is $A e^{\kappa x}+B e^{-\kappa x}$. The $L^2$ condition removes the growing term on each exterior half-line, leaving multiples of $e^{-\kappa x}$ on $x>a$ and $e^{\kappa x}$ on $x<-a$. On $(-a,a)$ the equation is $\psi''=-k^2\psi$. The matrix mapping $(A,B)$ to the value and derivative of $A\cos(kx)+B\sin(kx)$ at any $x_0$ has determinant $k\ne0$, so choose $A,B$ to match the data of any solution there. The difference $w$ solves $w''=-k^2w$ with zero data at $x_0$; differentiating $|w'|^2+k^2|w|^2$ shows this quantity is constant, hence $w=0$. Thus every interior solution is $A\cos(kx)+B\sin(kx)$. The potential is even, so the reflection operator $(\Pi\psi)(x)=\psi(-x)$ commutes with $H$ on $H^2$ and maps every eigenspace to itself. Eigenspaces are at most one-dimensional: the solutions decaying as $x\to-\infty$ form a one-dimensional space $c\,e^{\kappa x}$ ($x<-a$), and the transfer through $(-a,a)$ is invertible by the just-proved initial-data representation, so at most one direction matches the decaying solution at $+\infty$. Hence $\Pi\psi=\pm\psi$: every eigenfunction is even or odd. For an even eigenfunction, $\psi(x)=A\cos(kx)$ on $(-a,a)$ and $\psi(x)=Be^{-\kappa|x|}$ for $|x|>a$; matching $\psi$ and $\psi'$ at $a$ gives $A\cos(ka)=Be^{-\kappa a},\qquad -Ak\sin(ka)=-\kappa Be^{-\kappa a},$ which eliminates $A,B$ and gives $k\tan(ka)=\kappa$. For an odd eigenfunction, $\psi(x)=A\sin(kx)$ on $(-a,a)$ and $\psi(x)=B\operatorname{sgn}(x)e^{-\kappa|x|}$ outside; matching gives $A\sin(ka)=Be^{-\kappa a}$ and $Ak\cos(ka)=-\kappa Be^{-\kappa a}$, i.e. $-k\cot(ka)=\kappa$. Conversely, if either condition holds with $k,\kappa>0$, $k^2+\kappa^2=K^2$, then the indicated piecewise function is $C^1$, piecewise $C^2$, satisfies $H\psi=E\psi$ on each constant-potential interval and decays exponentially. Its restrictions and their first derivatives are square-integrable, and its piecewise classical second derivative is square-integrable because the central interval is bounded and the exterior pieces decay exponentially. To verify the global weak derivatives, integrate against a compactly supported smooth test function separately on $(-\infty,-a)$, $(-a,a)$ and $(a,\infty)$: the boundary terms cancel at $\pm a$ for the first derivative because $\psi$ is continuous, and for the second derivative because $\psi'$ matches there. Thus the piecewise first and second derivatives are the global weak derivatives and belong to $L^2(\mathbb R)$, so $\psi\in H^2(\mathbb R)$ by [[def-nrqm-intervals-hilbert-sobolev-spaces]]. It is nonzero and therefore an eigenfunction. This proves (b). [F2, algebra]

1.4 [Monotone branches] For $k\in(0,K)$ put $\kappa(k):=\sqrt{K^2-k^2}>0$, a strictly decreasing continuous function. Define on each interval $B_n:=\bigl(\frac{n\pi}{2a},\frac{(n+1)\pi}{2a}\bigr)$ the function $L_n(k):=\begin{cases}k\tan(ka),&n\text{ even},\\ -k\cot(ka),&n\text{ odd}.\end{cases}$ Each $L_n$ is strictly increasing on $B_n$: for $n$ even, $L_n'(k)=\tan(ka)+ka\sec^2(ka)>0$ because $ka\in(n\pi/2,(n+1)\pi/2)$ with $n$ even lies in a range where $\tan(ka)>0$; for $n$ odd, $L_n(k)=-k\cot(ka)$ with $\cot(ka)<0$ and $L_n'(k)=-\cot(ka)+ka\csc^2(ka)>0$. Moreover, $\lim_{k\to(\frac{n\pi}{2a})^+}L_n(k)=0^+$ and $\lim_{k\to(\frac{(n+1)\pi}{2a})^-}L_n(k)=+\infty$ for every $n\ge0$. [F2, algebra]

2.1 [Energies $E\ge0$ are excluded] Let $H\psi=E\psi$ with $\psi\ne0$ and $E\ge0$. By [F2], on $(a,\infty)$ the classical equation is $\psi''=-k_0^2\psi$ with $k_0=\sqrt{2mE}/\hbar\ge0$ (and $\psi''=0$ when $E=0$). If $E>0$, the classification proved in step 1.3 applies with $k=k_0$ and gives $\psi(x)=A\cos(k_0x)+B\sin(k_0x)$. The identity $|\psi|^2=|A|^2\cos^2(k_0x)+|B|^2\sin^2(k_0x)+2\operatorname{Re}(A\overline B)\sin(k_0x)\cos(k_0x)$ and the antiderivatives of $\cos^2$, $\sin^2$ and $\sin\cos$ give $\int_a^X|\psi|^2=\frac{|A|^2+|B|^2}{2}(X-a)+O(1)$ as $X\to\infty$. Thus $L^2$ membership forces $A=B=0$, so $\psi=0$ on $(a,\infty)$. If $E=0$, every solution of $\psi''=0$ is affine, and an affine $L^2$ function vanishes identically, so again $\psi=0$ there. The same argument on $(-\infty,-a)$ shows $\psi=0$ outside $[-a,a]$. The global $C^1$ representative then has $\psi(a)=\psi'(a)=0$, and on $(-a,a)$ it solves $\psi''=-\frac{2m(E+U)}{\hbar^2}\psi$ with these terminal data. After translating $(-a,a)$ to a compact interval, uniqueness in [[thm-nrqm-intervals-regular-ivp-parameter-series]] makes it vanish identically, so $\psi=0$, a contradiction. Hence $E<0$, and with step 1.2, $E\in(-U,0)$. [step 1.2, step 1.3, F2, algebra]

2.2 [Existence and uniqueness of roots] Fix $n\ge0$ with $\frac{n\pi}{2a}<K$, and consider $F_n:=L_n-\kappa$ on $B_n\cap(0,K)$, a strictly increasing continuous function. Near the left endpoint, $L_n\to0^+$ while $\kappa>0$ (since the left endpoint is $<K$), so $F_n<0$ there; put $r_n=(n+1)\pi/(2a)$. If $r_n\le K$, the one-sided limit $L_n(k)\to+\infty$ as $k\uparrow r_n$ makes $F_n>0$ near that endpoint, including when $r_n=K$; no value of $L_n$ at its pole is taken. If $K<r_n$, then $K$ is interior to the branch, $L_n(K)>0$ is well defined, and $\kappa(k)\to0$ as $k\uparrow K$, again giving $F_n>0$. Hence by the intermediate value theorem $F_n$ has a zero, and strict monotonicity makes it unique and interior. If instead $\frac{n\pi}{2a}\ge K$, then $k<K$ on $B_n$ never holds, so no root. On each $B_n$ the other parity expression is negative and cannot equal $\kappa>0$. At branch endpoints the matching equations of step 1.3 either require a pole denominator to be nonzero or give a zero left side, again excluding a root with $\kappa>0$. Since $\{B_n:n\ge0\}$ covers $(0,\infty)$ except the endpoints, these are all roots in $(0,K)$; the number of $n\ge0$ with $\frac{n\pi}{2a}<K$ is $\lceil2aK/\pi\rceil$, which is (d). [step 1.4, algebra]

3.1 [Assembly] By steps 1.2, 2.1 and 1.3 every negative eigenvalue has one of the two root forms, with simple eigenspace, and by step 2.2 the roots are exactly the described ones with the stated count. Steps 1.1, 1.2, 1.3, 2.1 and 2.2 give (a)-(d). [step 1.1, step 2.1, step 1.3, step 2.2] ∎
