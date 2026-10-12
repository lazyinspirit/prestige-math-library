---
id: thm-nrqm-intervals-barrier-transfer-and-thick-limit-error
aliases: [nrqm-intervals-and-contacts-barrier-transfer-and-thick-limit-error]
kind: theorem
domain: mathematics
title: "Rectangular barrier: transmission coefficients and the thick-barrier error"
status: draft
origin: pipeline
dependency_level: 0
deps: [def-complex-exponential, cor-complex-trigonometric-and-hyperbolic-addition-formulas, cor-complex-trigonometric-and-hyperbolic-derivatives, thm-derivative-of-exponential, def-continuity-real, def-derivative, def-countable-choice]
dependency_roles:
  def-complex-exponential: mathematical-premise
  cor-complex-trigonometric-and-hyperbolic-addition-formulas: mathematical-premise
  cor-complex-trigonometric-and-hyperbolic-derivatives: mathematical-premise
  thm-derivative-of-exponential: mathematical-premise
  def-continuity-real: mathematical-premise
  def-derivative: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 9.1 pp. 181-186 and Section 9.6 pp. 214-221 (transfer matrices and transmission for piecewise constant potentials)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics (Cappella Archive, 2008/2010), Chapter 4 pp. 65-88 (rectangular barrier transmission and thick-barrier approximation; consulted for the structure of the matching calculation, with all constants recomputed here)"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
---

## Statement

Assume Countable Choice ([[def-countable-choice]]). Let $a>0$, let
$U>E>0$ and $m,\hbar>0$, and put
$k:=\frac{\sqrt{2mE}}{\hbar}>0,\qquad
\kappa:=\frac{\sqrt{2m(U-E)}}{\hbar}>0 .$
Consider bounded functions $\psi:\mathbb R\to\mathbb C$ that are $C^1$ on
$\mathbb R$, twice continuously differentiable on each of $(-\infty,0)$,
$(0,a)$, $(a,\infty)$, and satisfy
$-\frac{\hbar^2}{2m}\psi''+V\psi=E\psi,\qquad
V(x)=\begin{cases}U,&0<x<a,\\0&\text{otherwise},\end{cases}$
on each of the three intervals. Then:

(a) exactly one such $\psi$ has the *transmission asymptotics*: its
restriction to $(-\infty,0)$ equals $e^{ikx}+re^{-ikx}$ and its restriction
to $(a,\infty)$ equals $te^{ikx}$, for uniquely determined $r,t\in\mathbb C$;

(b) with $D:=2\cosh(\kappa a)+i\bigl(\tfrac{\kappa}{k}-\tfrac{k}{\kappa}\bigr)\sinh(\kappa a)$,
$t=\frac{2e^{-ika}}{D},\qquad
T:=|t|^2=\Bigl[1+\frac{U^2\sinh^2(\kappa a)}{4E(U-E)}\Bigr]^{-1},\qquad
R:=|r|^2=1-T ;$

(c) with $q:=e^{-2\kappa a}$, $C:=U^2/\bigl(4E(U-E)\bigr)$ and
$\delta:=\bigl(\tfrac4C-2\bigr)q+q^2$,
$T=\frac{(4/C)\,q}{1+\delta}$. Put
$\eta:=|\tfrac4C-2|q+q^2$. Whenever $\eta<1$,
$$\Bigl|T-\frac{16E(U-E)}{U^2}\,q\Bigr| \le\frac{16E(U-E)}{U^2}\,q\,\frac{\eta}{1-\eta}.$$
In addition, whenever $|\delta|\le\tfrac12$,
$$\Bigl|T-\frac{16E(U-E)}{U^2}\,q\Bigr| \le\frac{32E(U-E)}{U^2}\,q\,|\delta|.$$

No $L^2$ normalisation is asserted: $\psi$ is a bounded generalised solution,
not an element of $L^2(\mathbb R)$.

## Facts & Assumptions

**Given:** $a,U,E,m,\hbar>0$ with $U>E$; $k,\kappa$ as displayed; the piecewise constant $V$.

[F1] Solutions of $v''=\alpha v$ on an interval are exactly $v=c_1e^{\lambda x}+c_2e^{-\lambda x}$ with $\lambda^2=\alpha$ (for $\alpha>0$, $\lambda=\sqrt\alpha>0$); solutions of $v''=-\beta^2v$ are exactly $v=c_1e^{i\beta x}+c_2e^{-i\beta x}$; in each case the two displayed functions are $C^\infty$ solutions ([[thm-derivative-of-exponential]], [[cor-complex-trigonometric-and-hyperbolic-derivatives]]) and the solution space is two-dimensional because the initial data $v(x_0),v'(x_0)$ determine the coefficients uniquely.

[F2] Addition formulas for the hyperbolic functions: $\cosh0=1$, $\sinh0=0$, $\frac{d}{dx}\cosh(\kappa x)=\kappa\sinh(\kappa x)$, $\frac{d}{dx}\sinh(\kappa x)=\kappa\cosh(\kappa x)$, and $\cosh^2-\sinh^2=1$ ([[cor-complex-trigonometric-and-hyperbolic-addition-formulas]], [[cor-complex-trigonometric-and-hyperbolic-derivatives]]).

[F3] If $J(x)=\operatorname{Im}(\overline{\psi(x)}\psi'(x))$ is piecewise $C^1$ and $\psi''=\lambda(x)\psi$ with $\lambda$ real-valued on an interval, then $J'=\operatorname{Im}(|\psi'|^2+\overline\psi\psi'')=\operatorname{Im}(\lambda|\psi|^2)=0$ on that interval, so $J$ is constant there ([[def-derivative]], [[def-continuity-real]]); here $\lambda=2m(V-E)/\hbar^2$ is real on each of the three intervals.

## Proof

1.1 [Shape of bounded solutions] On $(-\infty,0)$ the equation is $\psi''=-k^2\psi$, so by [F1] every solution has the form $c_1e^{ikx}+c_2e^{-ikx}$; every such function is bounded on the half-line. On $(0,a)$ the equation is $\psi''=\kappa^2\psi$, so by [F1] every solution has the form $Ae^{\kappa x}+Be^{-\kappa x}$. On $(a,\infty)$ the equation is again $\psi''=-k^2\psi$, so every solution has the form $c_3e^{ikx}+c_4e^{-ikx}$. Hence a function as in the statement is described by the six constants $(c_1,c_2,A,B,c_3,c_4)$ with the pair $(c_1,c_2)$ and the pair $(c_3,c_4)$ unrestricted by boundedness. [F1]

2.1 [Matching and the transfer matrix] Write $\psi_<,\psi_0,\psi_>$ for the three restrictions. The conditions that $\psi$ be $C^1$ at $0$ and $a$ are the four linear equations $\psi_<(0)=\psi_0(0),\quad \psi_<'(0)=\psi_0'(0),\quad \psi_0(a)=\psi_>(a),\quad \psi_0'(a)=\psi_>'(a),$ and the transmission asymptotics of (a) impose $c_1=1$ and $c_4=0$. The map carrying the interior data $(\psi_0(0),\psi_0'(0))$ to $(\psi_0(a),\psi_0'(a))$ is the matrix $M:=\begin{pmatrix}\cosh(\kappa a)&\kappa^{-1}\sinh(\kappa a)\\\kappa\sinh(\kappa a)&\cosh(\kappa a)\end{pmatrix}$: its columns are the values at $a$ of the two solutions $x\mapsto\cosh(\kappa x)$ and $x\mapsto\kappa^{-1}\sinh(\kappa x)$ of $\psi''=\kappa^2\psi$ with data $(1,0)$ and $(0,1)$ at $0$, and by [F1] every solution of the interior equation is a unique linear combination of these two. Hence the matching equations at $0$ and $a$ are equivalent to the single vector equation $\begin{pmatrix}te^{ika}\\ikte^{ika}\end{pmatrix}=M\begin{pmatrix}1+r\\ik(1-r)\end{pmatrix}.$ Multiplying by $M^{-1}=\begin{pmatrix}\cosh(\kappa a)&-\kappa^{-1}\sinh(\kappa a)\\-\kappa\sinh(\kappa a)&\cosh(\kappa a)\end{pmatrix}$, which is a two-sided inverse because $\det M=\cosh^2(\kappa a)-\sinh^2(\kappa a)=1\ne0$ by [F2], and reading off the two components gives $r=C_+t-1$ and $r=1+Bt$, where $C_+:=\bigl(\cosh(\kappa a)-i\tfrac k\kappa\sinh(\kappa a)\bigr)e^{ika}$ and $B:=-\bigl(\cosh(\kappa a)+i\tfrac\kappa k\sinh(\kappa a)\bigr)e^{ika}$. Since $C_+-B=\bigl[2\cosh(\kappa a)+i\bigl(\tfrac\kappa k-\tfrac k\kappa\bigr)\sinh(\kappa a)\bigr]e^{ika}=De^{ika}$ and $|D|\ge|\operatorname{Re}D|=2\cosh(\kappa a)\ge2>0$, these two affine relations determine $(r,t)$ uniquely: $t=2/(C_+-B)=2e^{-ika}/D$ and $r=C_+t-1$. Consequently a transmission solution has at most one pair $(r,t)$ and hence at most one $\psi$, since $(r,t)$ determines the interior data $(1+r,ik(1-r))$ and the two exterior pieces. [step 1.1, F1, F2, algebra]

3.1 [Existence of the transmission solution] Conversely, let $r:=C_+t-1$ and $t:=2/(C_+-B)=2e^{-ika}/D$ be the unique pair of step 2.1, let $\psi_0$ be the solution of $\psi''=\kappa^2\psi$ on $(0,a)$ with $(\psi_0(0),\psi_0'(0))=(1+r,ik(1-r))$ supplied by [F1], and define $\psi(x):=e^{ikx}+re^{-ikx}$ for $x\le0$, $\psi:=\psi_0$ on $(0,a)$ and $\psi(x):=te^{ikx}$ for $x\ge a$. The relations $r=C_+t-1$ and $r=1+Bt$ are exactly the two components of the vector equation of step 2.1, so $(\psi_0(a),\psi_0'(a))=(te^{ika},ikte^{ika})$; hence the three pieces match in value and derivative at $0$ and at $a$, the glued function is $C^1$ on $\mathbb R$ and $C^\infty$ on each of the three open intervals with $-\frac{\hbar^2}{2m}\psi''+V\psi=E\psi$ by [F1], and it is bounded, with exactly the prescribed transmission asymptotics. Together with the uniqueness of step 2.1 this proves (a) and gives the first display of (b), $t=2e^{-ika}/D$. [step 2.1, F1, F2, algebra]

4.1 [Transmission coefficient] Since $|e^{-ika}|=1$, $T=|t|^2=4/|D|^2$, and by [F2] $|D|^2=4\cosh^2(\kappa a)+\Bigl(\frac\kappa k-\frac k\kappa\Bigr)^2 \sinh^2(\kappa a) =4+\Bigl[4+\Bigl(\frac\kappa k-\frac k\kappa\Bigr)^2\Bigr]\sinh^2(\kappa a).$ Now $\bigl(\tfrac\kappa k-\tfrac k\kappa\bigr)^2 =\frac{(\kappa^2-k^2)^2}{k^2\kappa^2} =\frac{\bigl(2m(U-2E)/\hbar^2\bigr)^2}{k^2\kappa^2}$ because $\kappa^2-k^2=\frac{2m}{\hbar^2}\bigl((U-E)-E\bigr)$, and $k^2\kappa^2=(2mE)(2m(U-E))/\hbar^4$, so $4+\Bigl(\frac\kappa k-\frac k\kappa\Bigr)^2 =\frac{4E(U-E)+(U-2E)^2}{E(U-E)} =\frac{U^2}{E(U-E)} .$ Therefore $|D|^2=4+\frac{U^2}{E(U-E)}\sinh^2(\kappa a) =4\bigl[1+\tfrac{U^2\sinh^2(\kappa a)}{4E(U-E)}\bigr]$ and $T=\bigl[1+\tfrac{U^2\sinh^2(\kappa a)}{4E(U-E)}\bigr]^{-1}$. [step 3.1, F2, algebra]

5.1 [Flux conservation] Put $J(x)=\operatorname{Im}(\overline{\psi(x)}\psi'(x))$. On each of the three intervals $J$ is constant by [F3], and by continuity of $\psi,\psi'$ it is the same constant on all of $\mathbb R$. On $(-\infty,0)$, $\psi=e^{ikx}+re^{-ikx}$ gives $J=\operatorname{Im}\bigl[ik-ikre^{-2ikx}+ik\overline re^{2ikx}-ik|r|^2\bigr] =k(1-|r|^2)$ (the two oscillating terms are conjugate imaginary and cancel). On $(a,\infty)$, $\psi=te^{ikx}$ gives $J=k|t|^2$. Hence $k(1-|r|^2)=k|t|^2$, i.e. $R+T=1$, which is the second display of (b). [step 2.1, step 4.1, F3, algebra]

5.2 [Thick-barrier form and controlled error] With $q=e^{-2\kappa a}$ one has $\sinh^2(\kappa a)=(e^{\kappa a}-e^{-\kappa a})^2/4=(q^{-1}-2+q)/4$, so with $C=U^2/(4E(U-E))$, [step 4.1, algebra]
$$T=\Bigl[1+\frac C4(q^{-1}-2+q)\Bigr]^{-1}=\frac{(4/C)q}{1+(\tfrac4C-2)q+q^2},$$
multiplying numerator and denominator by $4q/C$. Since $16E(U-E)/U^2=4/C$, the exact difference is
$$T-\frac4Cq=-\frac4Cq\,\frac{\delta}{1+\delta},\qquad \delta=\Bigl(\frac4C-2\Bigr)q+q^2.$$
Put $\eta=|\tfrac4C-2|q+q^2$, so $|\delta|\le\eta$. If $\eta<1$, then $|1+\delta|\ge1-|\delta|\ge1-\eta>0$ and $\frac{|\delta|}{|1+\delta|}\le\frac{\eta}{1-\eta}$, which gives the first error bound in (c). If $|\delta|\le\tfrac12$, then $|1+\delta|\ge\tfrac12$ and $|T-\tfrac4Cq|\le\tfrac4Cq\cdot2|\delta|$, which is the second error bound in (c) after substituting $4/C=16E(U-E)/U^2$. [step 4.1, algebra] ∎
