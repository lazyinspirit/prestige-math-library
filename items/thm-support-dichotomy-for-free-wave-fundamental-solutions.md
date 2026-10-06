---
id: thm-support-dichotomy-for-free-wave-fundamental-solutions
kind: theorem
title: "Sphere-supported versus interior-supported free wave kernels"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 6
proof_strategy: direct
deps: [thm-kirchhoff-formula-for-the-three-dimensional-wave-equation, thm-poisson-formula-for-the-two-dimensional-wave-equation, thm-odd-dimensional-wave-formula-by-spherical-means, thm-even-dimensional-wave-formula-by-descent, def-spherical-mean-of-space-dependent-data, lem-spherical-means-of-smooth-data-are-smooth, def-countable-choice, thm-differentiation-under-the-integral-sign-on-a-compact-rectangle, thm-algebra-of-derivatives, lem-smooth-bump-between-concentric-euclidean-balls, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]
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
      locator: "§7.2, printed pp. 174–176, (7.23)–(7.24) and the dimension contrast following Corollary 7.5"
    - title: "Victor Ivrii, Partial Differential Equations (University of Toronto, 2018, CC BY-SA)"
      url: "https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf"
      locator: "§9.1.3, printed p. 285, Remark 9.1.3 (the sphere only enters through the means in odd dimensions)"
    - title: "Sung-Jin Oh, Lecture Notes for Math 222A (UC Berkeley, 19 March 2024)"
      url: "https://math.berkeley.edu/~sjoh/pdfs/notes-math222a.pdf"
      locator: "Chapter 7, printed pp. 108–112: cone-supported kernels for odd $d\\ge3$ versus interior spreading for even $d$"
---


## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $c>0$ and let $u$ be the free solution assigned to admissible data $(u_0,u_1)$ by the formulas of the page (Kirchhoff, Poisson, odd- and even-dimensional formulas).
(i) If $n\ge3$ is odd and $t>0$, the value $u(x,t)$ depends on the displacement and velocity data only through their restrictions to a neighbourhood of the sphere $\partial B_{ct}(x)$: if two admissible data pairs agree on such a neighbourhood, their solutions agree at $(x,t)$. Pointwise agreement only on the sphere is not asserted.
(ii) If $n\ge2$ is even, $t>0$ and $u_1$ is supported in a compact subset of the open ball $B_{ct}(x)$, then the velocity contribution has the kernel form
$$c^{1-n}D_t^{k-1}W_{u_1}(x,ct)=\int_{B_{ct}(x)}u_1(y)\,K(|y-x|,t)\,dy,\qquad K(\rho,t):=c^{1-n}D_t^{k-1}\Bigl[\frac{1}{n!!V_n}\bigl(c^2t^2-\rho^2\bigr)^{-1/2}\Bigr]$$
for $0\le\rho<ct$, where $K$ is smooth on that region and $K(0,t)=a\,t^{-(n-1)}$ with $a=c^{-n}(-1)^{k-1}(2k-3)!!/(n!!V_n)\neq0$ (read $(2k-3)!!=1$ for $k=1$); consequently some data supported strictly inside $B_{ct}(x)$ give a nonzero velocity contribution, so the kernel fills the interior of the ball rather than sitting on the sphere. For displacement data also supported in a compact subset of the open ball, the displacement term has the corresponding kernel $\partial_tK(\rho,t)$.

## Facts & Assumptions

**Given:** Countable Choice, $c>0$, even $n=2k\ge2$, and velocity data $u_1$ supported in a compact subset of $B_{ct}(x)$.

[F1] The odd-dimensional formula expresses $u(x,t)$ as a finite combination of $t$-derivatives of $t\mapsto t^{n-2}M_{u_0}(x,ct)$ and $t\mapsto t^{n-2}M_{u_1}(x,ct)$ ([[thm-odd-dimensional-wave-formula-by-spherical-means]]).

[F2] For $m\ge1$ and $h\in C^m(\mathbb R^n)$, $(x,r)\mapsto M_h(x,r)$ is $C^m$ with all derivatives obtained by differentiating $h$ under the sphere integral ([[lem-spherical-means-of-smooth-data-are-smooth]]).

[F3] The even-dimensional formula reads $u=c^{1-n}\bigl[\partial_tD_t^{k-1}W_{u_0}(x,ct)+D_t^{k-1}W_{u_1}(x,ct)\bigr]$, with $W_f(x,ct)=(n!!V_n)^{-1}\int_{B_{ct}(x)}f(y)(c^2t^2-|y-x|^2)^{-1/2}dy$ ([[thm-even-dimensional-wave-formula-by-descent]], [[def-spherical-mean-of-space-dependent-data]]).

[F4] If $G(y,s)$ is continuous with continuous $\partial_sG$ on a compact rectangle, then $s\mapsto\int G(y,s)\,dy$ is $C^1$ with derivative $\int\partial_sG$; iterating gives the higher derivatives when they are continuous ([[thm-differentiation-under-the-integral-sign-on-a-compact-rectangle]]).

[F5] Sums, constant multiples of differentiable functions are differentiable with the usual rules ([[thm-algebra-of-derivatives]]).

## Proof

1.1 Part (i). By [F1] the value $u(x,t)$ is computed from the functions $r\mapsto M_{u_0}(x,r)$ and $r\mapsto M_{u_1}(x,r)$ and their $r$-derivatives at $r=ct$, and by [F2] these are obtained by differentiating the defining sphere integrals. For $r$ in a neighbourhood of $ct$, $M_f(x,r)$ is the average of $f$ over $\partial B_r(x)$, a sphere contained in the chosen neighbourhood of $\partial B_{ct}(x)$; hence all these quantities depend on $f$ only through its restriction to that neighbourhood, and so does $u(x,t)$. [F1, F2, algebra]

1.2 Part (ii), kernel form. Fix $t>0$ and let $u_1$ vanish on a neighbourhood of $\partial B_{ct}(x)$; the assumed compact support lies inside the open ball, so there is $\varepsilon\in(0,t)$ with $\operatorname{supp}u_1\subseteq B_{c(t-\varepsilon)}(x)$. For $|s-t|<\varepsilon/2$ the integrand $u_1(y)(c^2s^2-|y-x|^2)^{-1/2}$ and all its $s$-derivatives are continuous on a fixed box containing the support, with the product integrand extended by zero where $u_1=0$, for $s\in[t-\varepsilon/2,t+\varepsilon/2]$, so by [F4] applied successively in each coordinate of the box, with Fubini ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]), the derivative $D_t^{k-1}$ passes under the integral sign: $c^{1-n}D_t^{k-1}W_{u_1}(x,ct)=\int_{B_{ct}(x)}u_1(y)K(|y-x|,t)\,dy$ with $K(\rho,t)=c^{1-n}D_t^{k-1}\bigl[(n!!V_n)^{-1}(c^2t^2-\rho^2)^{-1/2}\bigr]$. For displacement data $u_0$ with the same compact-interior support condition, one additional time differentiation under the fixed-box integral gives the kernel $\partial_tK(|y-x|,t)$. [F3, F4, algebra]

1.3 The interior kernel. The identity $D_t(c^2t^2-\rho^2)^{-p}=-2pc^2(c^2t^2-\rho^2)^{-p-1}$ gives by induction $K(\rho,t)=b(c^2t^2-\rho^2)^{-(2k-1)/2}$, where $b=c^{1-n}(-1)^{k-1}(2k-3)!!c^{2k-2}/(n!!V_n)\ne0$ and $(-1)!!=1$ for $k=1$. Thus $K$ has a fixed nonzero sign throughout $0\le\rho<ct$. In particular $K(0,t)=c^{-n}(-1)^{k-1}(2k-3)!!t^{-(n-1)}/(n!!V_n)$, the stated value. [F5, algebra]

2.1 Admissible interior data. Choose $0<\delta<ct/2$ and, by [[lem-smooth-bump-between-concentric-euclidean-balls]] translated to centre $x$, choose $u_1\in C_c^\infty(B_{2\delta}(x))$ with $0\le u_1\le1$ and $u_1=1$ on $\overline B_\delta(x)$. This is admissible in every dimension here. The actual contribution is $\int_{B_{2\delta}(x)}u_1(y)K(|y-x|,t)\,dy$, including the transition annulus. By step 1.3 its integrand has one sign and is strictly of that sign on the inner ball, of positive volume, so the contribution is nonzero. The same construction around any point strictly inside the ball shows that the interior kernel is nonzero throughout, rather than just at the centre. [F3, step 1.2, step 1.3, algebra]

3.1 Collecting: in odd dimensions the value depends only on data near the sphere $\partial B_{ct}(x)$ (a statement about open neighbourhoods, not about pointwise traces), while in even dimensions the velocity kernel is the explicitly displayed smooth function of $\rho<ct$, nonzero at the centre, so interior data contribute. [given] ∎
