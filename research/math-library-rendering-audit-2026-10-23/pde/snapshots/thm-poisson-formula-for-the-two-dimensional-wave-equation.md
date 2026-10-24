---
id: thm-poisson-formula-for-the-two-dimensional-wave-equation
kind: theorem
title: "Poisson's formula in two dimensions by descent"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 4
proof_strategy: direct
deps: [thm-kirchhoff-formula-for-the-three-dimensional-wave-equation, lem-spherical-surface-integrals-project-onto-weighted-ball-integrals, def-spherical-mean-of-space-dependent-data, lem-spherical-means-of-smooth-data-are-smooth, thm-algebra-of-derivatives, def-countable-choice, thm-chain-rule-for-total-derivatives, thm-linear-change-of-variables-for-lebesgue-measure, thm-dominated-convergence, cor-euclidean-closed-balls-and-spheres-are-compact, thm-extreme-value-metric, cor-mean-value-theorem, thm-continuous-partial-derivatives-imply-total-differentiability, thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, AMS Graduate Studies in Mathematics)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "§7.1, printed p. 172, Poisson's formula (7.14) and Theorem 7.4"
    - title: "Victor Ivrii, Partial Differential Equations (University of Toronto, 2018, CC BY-SA)"
      url: "https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf"
      locator: "§9.1.4, printed pp. 285–286, method of descent (9.1.15)–(9.1.16)"
    - title: "Jared Speck, MIT 18.152 Introduction to Partial Differential Equations, Class Meeting #12: Kirchhoff's Formula and Minkowskian Geometry (Fall 2011)"
      url: "https://ocw.mit.edu/courses/18-152-introduction-to-partial-differential-equations-fall-2011/940561a138578640826f762b5a57bcad_MIT18_152F11_lec_12.pdf"
      locator: "§2, printed pp. 2–6: geometric background used by the descent (Lorentzian material excluded)"
---


## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $c>0$, $u_0\in C^3(\mathbb R^2)$, $u_1\in C^2(\mathbb R^2)$ and let $W$ be the weighted ball integral of [[def-spherical-mean-of-space-dependent-data]]. Then
$$u(x,t):=\frac{1}{2\pi c}\frac{\partial}{\partial t}\int_{B_{ct}(x)}\frac{u_0(y)}{\sqrt{c^2t^2-|y-x|^2}}\,dy+\frac{1}{2\pi c}\int_{B_{ct}(x)}\frac{u_1(y)}{\sqrt{c^2t^2-|y-x|^2}}\,dy\qquad(t>0)$$
defines a $C^2$ function on $\mathbb R^2\times(0,\infty)$ solving $u_{tt}=c^2\Delta u$; here the first $\partial_t$ differentiates the $C^1$ function $t\mapsto\int_{B_{ct}(x)}u_0(y)(c^2t^2-|y-x|^2)^{-1/2}dy$, which is legitimate by the projection identity, not by termwise differentiation of a singular integrand. Equivalently, for $t>0$,
$$u(x,t)=\frac{1}{2\pi ct}\int_{B_{ct}(x)}\frac{u_0(y)+\nabla u_0(y)\cdot(y-x)+t\,u_1(y)}{\sqrt{c^2t^2-|y-x|^2}}\,dy .$$
The extension to the initial time and the attainment of the data are treated later on this page.

## Facts & Assumptions

**Given:** Countable Choice, $c>0$, $u_0\in C^3(\mathbb R^2)$, $u_1\in C^2(\mathbb R^2)$, the weighted ball integral $W$ of [[def-spherical-mean-of-space-dependent-data]], and the extension $U_j(\xi,z):=u_j(\xi)$ of $u_j$ to $\mathbb R^3$.

[F1] In three dimensions the Kirchhoff expression $\partial_t\bigl[tM^{(3)}_{U_0}((\xi,z),ct)\bigr]+tM^{(3)}_{U_1}((\xi,z),ct)$ is a $C^2$ solution of $V_{tt}=c^2\Delta_3V$ ([[thm-kirchhoff-formula-for-the-three-dimensional-wave-equation]]).

[F2] For even $n$, $t^{n-1}M^{(n+1)}_G(x,0,ct)=\frac{(n-1)!!}{c^{n-1}}W_g(x,ct)$ for the cylindrical extension $G(\xi,z)=g(\xi)$, where $M^{(n+1)}$ is the $(n+1)$-dimensional spherical mean ([[lem-spherical-surface-integrals-project-onto-weighted-ball-integrals]]).

[F3] $W_f(x,ct)=(n!!V_n)^{-1}\int_{B_{ct}(x)}f(y)(c^2t^2-|y-x|^2)^{-1/2}dy$ for even $n$, with $n!!=n(n-2)\cdots2$ and $V_n$ the unit-ball volume ([[def-spherical-mean-of-space-dependent-data]]); in particular, the weight $w(z)=(1-|z|^2)^{-1/2}$ is integrable on $B_1\subset\mathbb R^2$ by the polar-coordinate integrability statement in that definition.

[F4] If measurable functions converge pointwise almost everywhere and are dominated by one nonnegative integrable function, their integrals converge ([[thm-dominated-convergence]]).

[F5] If $f$ is totally differentiable at $a$ and $g$ at $f(a)$ then $D(g\circ f)(a)=Dg(f(a))\circ Df(a)$ ([[thm-chain-rule-for-total-derivatives]]); for an invertible linear $T$ with matrix $A$, $\lambda_2(T[E])=|\det A|\lambda_2(E)$ ([[thm-linear-change-of-variables-for-lebesgue-measure]]); sums and products are differentiated by the usual rules ([[thm-algebra-of-derivatives]]). The required total differentiability follows from continuous coordinate partial derivatives ([[thm-continuous-partial-derivatives-imply-total-differentiability]]).

[F6] A continuous function on a compact metric space is bounded, and closed Euclidean balls are compact ([[cor-euclidean-closed-balls-and-spheres-are-compact]], [[thm-extreme-value-metric]]).

[F7] A real function continuous on a closed interval and differentiable on its interior has a difference quotient equal to a derivative at an interior point ([[cor-mean-value-theorem]]).

## Proof

1.1 Descent. Extend $u_0,u_1$ to $U_0,U_1$ on $\mathbb R^3$ by $U_j(\xi,z):=u_j(\xi)$; these are $C^3$ respectively $C^2$. By [F1] the function $V(\xi,z,t):=\partial_t\bigl[tM^{(3)}_{U_0}((\xi,z),ct)\bigr]+tM^{(3)}_{U_1}((\xi,z),ct)$ is $C^2$ on $\mathbb R^3\times(0,\infty)$ with $V_{tt}=c^2\Delta_3V$. Since $U_j(\xi+ct\omega',z+ct\omega_3)=u_j(\xi+ct\omega')$ does not depend on $z$, the sphere means of $U_0,U_1$ at centre $(\xi,z)$ are independent of $z$; hence $V$ is independent of $z$, so $\partial_z^2V=0$, $\Delta_3V=\Delta_2V$, and the restriction $u(x,t):=V(x,0,t)$ is a $C^2$ function on $\mathbb R^2\times(0,\infty)$ with $u_{tt}=c^2\Delta_2u$. [F1, algebra]

1.2 The weighted-ball form. By [F2] with $n=2$ and $G=U_j$, $t\,M^{(3)}_{U_j}((x,0),ct)=\frac{1!!}{c}W_{u_j}(x,ct)=\frac1cW_{u_j}(x,ct)$; therefore $u(x,t)=\frac1c\bigl[\partial_tW_{u_0}(x,ct)+W_{u_1}(x,ct)\bigr]$. With $n=2$, $n!!V_n=2\pi$, [F3] reads $W_f(x,ct)=\frac{1}{2\pi}\int_{B_{ct}(x)}f(y)(c^2t^2-|y-x|^2)^{-1/2}dy$, so $u$ is the displayed Poisson expression; the derivative $\partial_t$ acts on the $C^1$ function $t\mapsto W_{u_0}(x,ct)$, since $W_{u_0}(x,ct)=ctM^{(3)}_{U_0}((x,0),ct)$ by [F2], and the spherical mean is $C^3$, and not by differentiating a singular integrand. [F2, F3, algebra]

1.3 The integrated equivalent form. For fixed $x$ put $w(z):=(1-|z|^2)^{-1/2}$ on $B_1\subset\mathbb R^2$ and $A(x,t):=\int_{B_1}u_0(x+ctz)w(z)\,dz$. By [F3], $w\in L^1(B_1)$. To differentiate in $t$, fix compact sets $K\subset\mathbb R^2$ and $J\subset(0,\infty)$ for $x$ and $t$. Choose a closed ball $Q$ containing $x+c(t+s)z$ for $x\in K$, $t\in J$, $|s|$ sufficiently small and $|z|\le1$. By [F6], $C:=\sup_Q|\nabla u_0|<\infty$. The difference quotients of $u_0(x+ctz)$ in $t$, for these parameters and sufficiently small increments $h$, are bounded in absolute value by $cC|z|$ by [F7]. After multiplication by $w(z)$ they are dominated by the locally uniform integrable function $cC|z|w(z)$. They converge pointwise to $c\nabla u_0(x+ctz)\cdot z\,w(z)$, so [F4] gives $\partial_tA(x,t)=c\int_{B_1}\nabla u_0(x+ctz)\cdot z\,w(z)\,dz$. The same argument for spatial difference quotients, and dominated convergence applied to convergent parameter sequences with the same compact-set majorant, shows that these first derivatives are continuous locally; in particular $A$ is $C^1$ in $(x,t)$. Now [F5] gives $I(x,t):=\int_{B_{ct}(x)}u_0(y)(c^2t^2-|y-x|^2)^{-1/2}dy=ctA(x,t)$, hence $\partial_t I=cA+ct\partial_tA$. The same change of variables gives $\int_{B_{ct}(x)}\nabla u_0(y)\cdot(y-x)(c^2t^2-|y-x|^2)^{-1/2}dy=(ct)^2\int_{B_1}\nabla u_0(x+ctz)\cdot z\,w(z)\,dz=(ct)^2\partial_tA/c$. Therefore $\frac{1}{2\pi c}\bigl[\partial_t I+\int_{B_{ct}(x)}u_1(y)(c^2t^2-|y-x|^2)^{-1/2}dy\bigr]=\frac{1}{2\pi ct}\int_{B_{ct}(x)}\frac{u_0(y)+\nabla u_0(y)\cdot(y-x)+tu_1(y)}{\sqrt{c^2t^2-|y-x|^2}}dy$, which is the equivalent form. [F3, F4, F5, F6, F7, algebra]

2.1 Both displays therefore define the same $C^2$ solution of the two-dimensional homogeneous wave equation on $\mathbb R^2\times(0,\infty)$; the limit at $t\downarrow0$ and the attainment of the data are the subject of the data-attainment lemma below. [given] ∎ 
