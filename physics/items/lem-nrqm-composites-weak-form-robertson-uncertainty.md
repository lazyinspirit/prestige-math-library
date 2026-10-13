---
id: lem-nrqm-composites-weak-form-robertson-uncertainty
aliases: [nrqm-composites-weak-form-robertson-uncertainty]
kind: lemma
domain: mathematics
title: "Weak-form Robertson uncertainty on a common domain"
status: published
origin: pipeline
dependency_level: 0
deps: [thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces, def-adjoint-of-a-densely-defined-unbounded-operator, def-symmetric-self-adjoint-and-essentially-self-adjoint, def-schwartz-space-and-its-seminorms, thm-algebra-of-derivatives, thm-integration-by-parts, cor-primitives-of-a-continuous-function, def-improper-integral-at-infinity, def-hilbert-space, def-countable-choice]
dependency_roles:
  thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces: mathematical-premise
  def-adjoint-of-a-densely-defined-unbounded-operator: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  def-schwartz-space-and-its-seminorms: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-integration-by-parts: mathematical-premise
  cor-primitives-of-a-continuous-function: mathematical-premise
  def-improper-integral-at-infinity: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "MIT 8.05 Quantum Physics II (Fall 2013), Chapter 5 'Uncertainty Principle and Compatible Observables' (variance identity and Cauchy-Schwarz bound)"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/005979fa741c3ea2e0430456b70caf93_MIT8_05F13_Chap_05.pdf"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, §2.1 pp. 55-57 and §3.1 pp. 88-92 (self-adjoint operators and spectral measures)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $H$ be a complex Hilbert space ([[def-hilbert-space]]) and let $A,B$ be symmetric densely defined operators on $H$ ([[def-symmetric-self-adjoint-and-essentially-self-adjoint]], [[def-adjoint-of-a-densely-defined-unbounded-operator]]). Let $u\in D(A)\cap D(B)$ have $\|u\|=1$, and put

$$a:=\langle Au,u\rangle,\qquad b:=\langle Bu,u\rangle,\qquad x:=(A-a)u,\qquad y:=(B-b)u,\qquad \Delta A:=\|x\|,\qquad \Delta B:=\|y\| .$$

Then:

(a) $a$ and $b$ are real, $x,y\in H$, and $\Delta A\Delta B\ge|\langle x,y\rangle|\ge|\operatorname{Im}\langle x,y\rangle|$;

(b) *(refined form)* $(\Delta A)^2(\Delta B)^2\ge[\operatorname{Re}\langle x,y\rangle]^2+[\operatorname{Im}\langle x,y\rangle]^2$;

(c) if in addition $u\in D(AB)\cap D(BA)$, then $([A,B]u,u)=\langle ABu,u\rangle-\langle BAu,u\rangle=-2i\operatorname{Im}\langle Au,Bu\rangle=-2i\operatorname{Im}\langle x,y\rangle$, and consequently $\Delta A\Delta B\ge\frac12|([A,B]u,u)|$;

(d) for $c>0$, $H=L^2(\mathbb R)$ and the operators $Qf(x)=xf(x)$, $Pf(x)=-icf'(x)$ defined on the Schwartz space $\mathcal S(\mathbb R)$: every unit $f\in\mathcal S(\mathbb R)$ satisfies $(QP-PQ)f=icf$, the numbers $a_Q=\int_{\mathbb R}x|f(x)|^2dx$ and $b_P=\langle Pf,f\rangle$ are real, and with $x_Q:=(Q-a_Q)f$, $y_P:=(P-b_P)f$ one has $|\operatorname{Im}\langle x_Q,y_P\rangle|=c/2$; hence $\Delta Q\Delta P\ge c/2$ in the sense of the centered norms.

No assertion is made about products $AB$ off $D(AB)$ and the statement produces no energy-time inequality.

## Facts & Assumptions

**Given:** A complex Hilbert space $H$ with pairing linear in the first argument; symmetric densely defined $A,B$; a unit vector $u\in D(A)\cap D(B)$; in clause (d) the operators $Q,P$ on $\mathcal S(\mathbb R)$.

[F1] For a symmetric operator $T$ (so $T\subseteq T^*$) and $v\in D(T)$, $\langle Tv,v\rangle=\langle v,Tv\rangle=\overline{\langle Tv,v\rangle}$, so the number is real ([[def-symmetric-self-adjoint-and-essentially-self-adjoint]], [[def-adjoint-of-a-densely-defined-unbounded-operator]]).

[F2] If $T$ is symmetric and $v\in D(T)$, then $(T-\lambda)v\in H$ for every real $\lambda$; and $\|(T-\lambda)v\|^2=\|Tv\|^2-2\lambda\operatorname{Re}\langle Tv,v\rangle+\lambda^2\|v\|^2$, so centering by the real mean $\lambda=\langle Tv,v\rangle$ is legitimate ([[def-symmetric-self-adjoint-and-essentially-self-adjoint]]).

[F3] In a complex inner product space, $|\langle v,w\rangle|\le\|v\|\,\|w\|$ and $|\langle v,w\rangle|^2=(\operatorname{Re}\langle v,w\rangle)^2+(\operatorname{Im}\langle v,w\rangle)^2$ ([[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]).

[F4] $\mathcal S(\mathbb R)$ consists of $C^\infty$ complex functions all of whose polynomial-weighted derivatives are bounded; in particular $f,f',xf,xf'\in L^2(\mathbb R)$ and $xf(x)\overline{f(x)}\to0$ as $x\to\pm\infty$ for every $f\in\mathcal S(\mathbb R)$ ([[def-schwartz-space-and-its-seminorms]]).

[F5] Sums, scalar multiples and products of differentiable real functions satisfy $(fg)'=f'g+fg'$, and the derivative of a complex-valued differentiable function is computed componentwise ([[thm-algebra-of-derivatives]]).

[F6] For differentiable real $u,v$ on $[a,b]$ with integrable derivatives, $\int_a^buv'=u(b)v(b)-u(a)v(a)-\int_a^bu'v$ ([[thm-integration-by-parts]]); a continuous real function on an interval has a primitive and $\int_a^bG'=G(b)-G(a)$ for it ([[cor-primitives-of-a-continuous-function]]); the improper integral over an unbounded interval is the limit of the compact-interval integrals ([[def-improper-integral-at-infinity]]).

## Proof

1.1 [Reality of the means] By [F1] applied to $T=A$ and $T=B$, $a=\langle Au,u\rangle$ and $b=\langle Bu,u\rangle$ are real. Hence $x=Au-au\in H$ and $y=Bu-bu\in H$, and $\Delta A=\|x\|$, $\Delta B=\|y\|$ are the norms of the centered vectors; the centering by the real means is the construction recorded in [F2]. [given, F1, F2, algebra]

1.2 [Boundary-vanishing pairing identity on the Schwartz space] Let $f,g\in\mathcal S(\mathbb R)$. Applying [F6] on $[-R,R]$ to the real and imaginary parts of $f$ and $\overline g$ and summing the four identities gives $\int_{-R}^Rf'\overline g=\bigl[f\overline g\bigr]_{-R}^{R}-\int_{-R}^Rf\overline{g'}$; by [F4] the boundary term $f(R)\overline g(R)-f(-R)\overline g(-R)$ tends to $0$ as $R\to\infty$, while both improper integrals converge absolutely because $f'\overline g$ and $f\overline{g'}$ are products of Schwartz functions; taking the limit in [F6]'s finite identity therefore gives $\int_{\mathbb R}f'\overline g=-\int_{\mathbb R}f\overline{g'}$. [given, F4, F5, F6, algebra]

2.1 [Cauchy-Schwarz bounds] By [F3], $\Delta A\Delta B=\|x\|\,\|y\|\ge|\langle x,y\rangle|$, and $|\langle x,y\rangle|\ge|\operatorname{Im}\langle x,y\rangle|$; squaring the first identity of [F3] gives $(\Delta A)^2(\Delta B)^2\ge(\operatorname{Re}\langle x,y\rangle)^2+(\operatorname{Im}\langle x,y\rangle)^2$. This is (a) and (b). [step 1.1, F3, algebra]

2.2 [The position-momentum commutator] For $f\in\mathcal S(\mathbb R)$ the product rule [F5] applied componentwise gives $(xf)'(x)=f(x)+xf'(x)$ and hence $(QP-PQ)f(x)=x(-icf'(x))-(-ic)(f(x)+xf'(x))=icf(x)$, so $QP-PQ=icI$ on $\mathcal S(\mathbb R)$. Moreover $\displaystyle\int_{\mathbb R}(x|f|^2)'(x)\,dx=0$: on $[-R,R]$ the evaluation clause of [F6] gives $\int_{-R}^{R}(x|f|^2)'\,dx=x|f|^2\big|_{-R}^{R}$, which tends to $0$ by [F4], and $(x|f|^2)'=|f|^2+2\operatorname{Re}(xf'\overline f)$ is continuous and dominated by an integrable Schwartz bound, so its improper integral over $\mathbb R$ exists by [F6] and equals this limit. Expanding and using $\int_{\mathbb R}|f|^2=1$ yields $\int_{\mathbb R}xf'\overline f\,dx+\int_{\mathbb R}xf\overline{f'}\,dx=-1$; the second integral equals $\overline{\int_{\mathbb R}x f'\overline f\,dx}$ by complex conjugation, so $2\operatorname{Re}\int_{\mathbb R}xf'\overline f\,dx=-1$. [step 1.2, F4, F5, F6, algebra]

3.1 [Commutator pairing] Assume $u\in D(AB)\cap D(BA)$. Using symmetry of $A$ with $Bu\in D(A)$ and symmetry of $B$ with $Au\in D(B)$, $\langle ABu,u\rangle=\langle Bu,Au\rangle$ and $\langle BAu,u\rangle=\langle Au,Bu\rangle$, so $([A,B]u,u)=\langle Bu,Au\rangle-\langle Au,Bu\rangle=\overline{\langle Au,Bu\rangle}-\langle Au,Bu\rangle=-2i\operatorname{Im}\langle Au,Bu\rangle$. Since $a,b\in\mathbb R$, expanding $\langle x,y\rangle=\langle(A-a)u,(B-b)u\rangle$ gives $\langle x,y\rangle=\langle Au,Bu\rangle-ab$ and therefore $\operatorname{Im}\langle x,y\rangle=\operatorname{Im}\langle Au,Bu\rangle$; combining with step 2.1 gives $\Delta A\Delta B\ge\frac12|([A,B]u,u)|$. [step 1.1, step 2.1, algebra]

4.1 [The uncertainty product for the Schwartz pair] Let $f\in\mathcal S(\mathbb R)$ have $\|f\|=1$ and put $a_Q=\int_{\mathbb R}x|f|^2dx\in\mathbb R$, $b_P=\langle Pf,f\rangle=-ic\int_{\mathbb R}f'\overline f\,dx$; step 1.2 with $g=f$ gives $\int_{\mathbb R}f'\overline f=-\overline{\int_{\mathbb R}f'\overline f}$, so this number is purely imaginary and $b_P$ is real. With $x_Q=(Q-a_Q)f$ and $y_P=(P-b_P)f$, both in $L^2(\mathbb R)$ by [F4], one computes $\langle x_Q,y_P\rangle=\langle Qf,Pf\rangle-a_Qb_P$, using $\langle Qf,f\rangle=a_Q$, $\langle f,Pf\rangle=\overline{\langle Pf,f\rangle}=b_P$ and $\|f\|=1$. Now $\operatorname{Im}\langle Qf,Pf\rangle$: writing $w=\int_{\mathbb R}xf\overline{f'}\,dx$ and using $\langle Qf,Pf\rangle=\int_{\mathbb R}xf\overline{(-icf')}=icw$, and $w+\overline w=\int_{\mathbb R}x(|f|^2)'=-1$ from step 2.2, so $\operatorname{Re}w=-\tfrac12$ and $\operatorname{Im}\langle Qf,Pf\rangle=c\operatorname{Re}w=-\tfrac c2$. Hence $|\operatorname{Im}\langle x_Q,y_P\rangle|=c/2$, and the Cauchy-Schwarz computation of step 2.1 applied to the explicitly centered vectors $x_Q,y_P$ gives $\Delta Q\Delta P\ge c/2$. [step 2.1, step 2.2, F4, algebra] ∎
