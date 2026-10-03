---
id: lem-heat-kernel-normalisation-scaling-and-derivatives
kind: lemma
title: "Normalisation, parabolic scaling, heat equation and derivative bounds for the heat kernel"
status: draft
origin: pipeline
deps:
  - def-ck-and-multi-index-notation-in-several-variables
  - def-ck-euclidean-maps-and-diffeomorphisms
  - def-countable-choice
  - def-heat-kernel
  - def-l-one-approximate-identity-on-rn
  - thm-algebra-of-derivatives
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - thm-chain-rule
  - thm-ck-euclidean-maps-closed-under-algebra-and-composition
  - thm-clairaut-schwarz-mixed-partials
  - thm-derivative-of-exponential
  - thm-dominated-convergence
  - thm-euclidean-lebesgue-measure-is-the-completion-of-the-product-of-lebesgue-measures
  - thm-exponential-beats-every-polynomial
  - thm-gaussian-integral
  - thm-linear-change-of-variables-for-lebesgue-measure
  - thm-tonelli-and-fubini-for-completed-product-measures
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Jared Speck, MIT 18.152 Introduction to Partial Differential Equations, Class Meeting #5: The Fundamental Solution for the Heat Equation (Fall 2011)"
      url: "https://ocw.mit.edu/courses/18-152-introduction-to-partial-differential-equations-fall-2011/9acdeff6449529106ac254f7ada967da_MIT18_152F11_lec_05.pdf"
      locator: "Lemma 1.0.1 and Lemma 1.0.2, pp. 1–3 (heat equation, unit mass, pointwise limits)"
    - title: "John K. Hunter, Notes on Partial Differential Equations (revised 18 June 2014, UC Davis)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "printed p. 131, formulas (5.8)–(5.9) and smoothing discussion"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, AMS Graduate Studies in Mathematics)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "printed p. 152, formula (6.36) and the normalisation by Lemma 6.4"
    - title: "Victor Ivrii, Partial Differential Equations (University of Toronto, 2018, CC BY-SA)"
      url: "https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf"
      locator: "§3.1.2, printed pp. 100–103, formulas (3.1.10)–(3.1.15), and §3.2.4, printed p. 111, formula (3.2.24)"
---

## Statement

Assume Countable Choice and let $n\ge1$. For every $t>0$: (i) $\Gamma(\cdot,t)>0$
and $\int_{\mathbb R^n}\Gamma(x,t)\,dx=1$; (ii) parabolic scaling:
$\Gamma(\lambda x,\lambda^2t)=\lambda^{-n}\Gamma(x,t)$ for every $\lambda>0$ and
$x\in\mathbb R^n$; (iii) $\Gamma$ is $C^\infty$ on
$\mathbb R^n\times(0,\infty)$ and solves the heat equation there,
$\partial_t\Gamma(x,t)=\Delta_x\Gamma(x,t)$; (iv) for every multi-index $\alpha$
there is $C_{n,\alpha}<\infty$ with
$|D^\alpha_x\Gamma(x,t)|\le C_{n,\alpha}t^{-(|\alpha|+n)/2}e^{-|x|^2/(8t)}$ for
all $x\in\mathbb R^n$, $t>0$; in particular $\|\Gamma(\cdot,t)\|_1=1$ and
$(\Gamma(\cdot,t))_{t>0}$ is an $L^1$ approximate identity on $\mathbb R^n$.

## Facts & Assumptions

**Given:** Countable Choice, $n\ge1$, together with $t,\lambda>0$, a multi-index $\alpha$ and $\delta>0$ wherever these appear.

[A1] Countable Choice is the hypothesis carried by the measure-theoretic and change-of-variables suppliers below ([[def-countable-choice]]).

[F1] For $n\ge1$ and $t>0$ the heat kernel is $\Gamma(x,t)=(4\pi t)^{-n/2}\exp(-|x|^2/(4t))$, it is strictly positive, and its causal extension vanishes for $t\le0$ ([[def-heat-kernel]]).

[F2] $\int_{-\infty}^{\infty}e^{-x^2}\,dx=\sqrt\pi$ ([[thm-gaussian-integral]]).

[F3] Under $\mathbb R^{m+n}=\mathbb R^m\times\mathbb R^n$, the Lebesgue measure $\lambda_{m+n}$ is the completion of the product measure $\lambda_m\times\lambda_n$ ([[thm-euclidean-lebesgue-measure-is-the-completion-of-the-product-of-lebesgue-measures]]).

[F4] On completed sigma-finite product measure spaces, a nonnegative completed-product-measurable $f$ has measurable sections outside measurable null sets. Set the inner integrals to zero on those exceptional sets; the resulting measurable functions have integrals equal to $\int f\,d\overline{\mu\times\nu}$ ([[thm-tonelli-and-fubini-for-completed-product-measures]]). For the continuous Euclidean Gaussian integrands used here, every section is measurable, so the ordinary iterated integrals give the same value.

[F5] An invertible linear $T:\mathbb R^n\to\mathbb R^n$ carries Lebesgue measurable sets to Lebesgue measurable sets and satisfies $\lambda_n(T[E])=|\det A|\lambda_n(E)$ for every Lebesgue measurable $E$ ([[thm-linear-change-of-variables-for-lebesgue-measure]]).

[F6] For a $C^1$ diffeomorphism $T:U\to V$ of open sets and every nonnegative Lebesgue measurable $f:V\to[0,\infty]$, $\int_Vf(y)\,dy=\int_Uf(T(x))|\det DT(x)|\,dx$ ([[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]).

[F7] If $f_n\to f$ almost everywhere and $|f_n|\le g$ almost everywhere for a single integrable nonnegative $g$, then $\int f_n\to\int f$ ([[thm-dominated-convergence]]).

[F8] For every $m\in\mathbb N$ and real $a>0$, $x^m/\exp(ax)\to0$ as $x\to+\infty$ ([[thm-exponential-beats-every-polynomial]]).

[F9] If $g$ is differentiable at $c$ and $f$ is differentiable at $g(c)$, then $(f\circ g)'(c)=f'(g(c))g'(c)$ ([[thm-chain-rule]]).

[F10] Derivatives of sums, scalar multiples, products and quotients obey the sum, scalar, product and quotient rules ([[thm-algebra-of-derivatives]]).

[F11] Finite componentwise sums, products and scalar multiples of $C^k$ Euclidean maps are $C^k$, and composites of composable $C^k$ Euclidean maps are $C^k$, for every $k\in\mathbb N$ ([[thm-ck-euclidean-maps-closed-under-algebra-and-composition]]).

[F12] The real exponential function is $C^\infty$ and $\exp^{(m)}=\exp$ for every $m\in\mathbb N$ ([[thm-derivative-of-exponential]]).

[F13] An $L^1$ approximate identity on $\mathbb R^n$ is a family $(K_\varepsilon)_{\varepsilon>0}\subseteq L^1(\mathbb R^n)$ with $\int K_\varepsilon=1$, with $\|K_\varepsilon\|_1$ bounded independently of $\varepsilon$, and with $\int_{|x|>\delta}|K_\varepsilon|\to0$ as $\varepsilon\to0^+$ for every $\delta>0$ ([[def-l-one-approximate-identity-on-rn]]).



## Proof

**Proof technique:** direct.

1.1 Work under [A1] and fix $t>0$. By [F1], $\Gamma(x,t)=(4\pi t)^{-n/2}\exp(-|x|^2/(4t))$. Let $T(u)=(4t)^{1/2}u$, an invertible linear self-map of $\mathbb R^n$ with $\det DT(u)=(4t)^{n/2}>0$ in the sense of [F5], and put $\varphi(x)=\exp(-|x|^2/(4t))\ge0$; since $T$ is a $C^1$ diffeomorphism and $\varphi$ is nonnegative and measurable, [F6] applied with $U=V=\mathbb R^n$ gives $\int_{\mathbb R^n}\Gamma(x,t)\,dx=(4\pi t)^{-n/2}\int_{\mathbb R^n}\exp(-|u|^2)(4t)^{n/2}\,du=\pi^{-n/2}\int_{\mathbb R^n}e^{-|u|^2}\,du$. By [F3] the Lebesgue integral over $\mathbb R^n$ is the completed product integral, so Tonelli's theorem [F4] factorises $\int_{\mathbb R^n}e^{-|u|^2}\,du=\prod_{i<n}\int_{\mathbb R}e^{-u_i^2}\,du_i=(\sqrt\pi)^n$ by the one-dimensional Gaussian integral [F2]; hence $\int_{\mathbb R^n}\Gamma(x,t)\,dx=1$, absolutely and as a nonnegative integral, and with the strict positivity recorded in [F1] this proves (i). [A1, F1, F2, F3, F4, F5, F6, given, algebra]

1.2 Scaling: for $\lambda>0$, [F1] gives $\Gamma(\lambda x,\lambda^2t)=(4\pi\lambda^2t)^{-n/2}\exp(-|\lambda x|^2/(4\lambda^2t))=\lambda^{-n}(4\pi t)^{-n/2}\exp(-|x|^2/(4t))=\lambda^{-n}\Gamma(x,t)$, using $|\lambda x|^2=\lambda^2|x|^2$ and $(4\pi\lambda^2t)^{-n/2}=\lambda^{-n}(4\pi t)^{-n/2}$, which is (ii). [F1, given, algebra]

1.3 Smoothness: the map $(x,t)\mapsto-|x|^2/(4t)$ is a quotient of polynomials defined and smooth on the open set $\mathbb R^n\times(0,\infty)$, the map $\exp$ is $C^\infty$ by [F12], and $t\mapsto(4\pi t)^{-n/2}$ is a nonzero scalar multiple of $t^{-n/2}$, smooth for $t>0$; closure under products, scalar multiples and composition [F11] makes $(x,t)\mapsto\Gamma(x,t)$ $C^\infty$ on $\mathbb R^n\times(0,\infty)$. [F1, F11, F12, given, algebra]

1.4 Derivative bound at $t=1$: by induction on $|\alpha|$ we show that $D^\alpha\Gamma(x,1)=P_\alpha(x)e^{-|x|^2/4}$ for a polynomial $P_\alpha$ with $K_\alpha:=\sup_{x\in\mathbb R^n}|P_\alpha(x)|e^{-|x|^2/8}<\infty$. For $\alpha=0$, [F1] gives $P_0=(4\pi)^{-n/2}$, and $K_0<\infty$ because $e^{-|x|^2/8}$ is bounded and tends to $0$ at infinity. If the claim holds for $\alpha$, then differentiating once more in a coordinate multiplies by a linear polynomial (the derivative of $P_\alpha$ plus $-(x_i/2)P_\alpha$) and keeps the Gaussian factor, so the polynomial form is preserved; for the finiteness, each monomial $x^\beta$ of $|P_\alpha|$ satisfies $|x^\beta|e^{-|x|^2/8}\le|x|^{|\beta|}e^{-|x|^2/8}\to0$ as $|x|\to\infty$ by [F8] applied to the radial variable $|x|$, and a continuous function on $\mathbb R^n$ that tends to $0$ at infinity is bounded, so the supremum is finite. Hence $|D^\alpha\Gamma(x,1)|\le K_\alpha e^{-|x|^2/8}$ for every $x$. [F1, F8, F12, given, algebra]

2.1 Derivatives: differentiating the formula of [F1] in the coordinate $x_i$ with the one-variable chain and product rules [F9, F10] and $\exp'=\exp$ [F12] gives $\partial_{x_i}\Gamma=-(x_i/(2t))\Gamma$ and, differentiating once more, $\partial_{x_i}\partial_{x_i}\Gamma=-(1/(2t))\Gamma+(x_i^2/(4t^2))\Gamma$; differentiating in $t$ gives $\partial_t\Gamma=(-n/(2t)+|x|^2/(4t^2))\Gamma$. Summing the spatial identities over $i$ yields $\Delta_x\Gamma=\sum_{i<n}\partial_{x_i}\partial_{x_i}\Gamma=(-n/(2t)+|x|^2/(4t^2))\Gamma=\partial_t\Gamma$ on $\mathbb R^n\times(0,\infty)$, which together with step 1.3 is (iii). [step 1.3, F1, F9, F10, F12, given, algebra]

2.2 Derivative bound at general $t$: by step 1.2 applied with $\lambda=\sqrt t$ and with $x$ replaced by $x/\sqrt t$, $\Gamma(x,t)=t^{-n/2}\Gamma(x/\sqrt t,1)$ for every $x$ and $t>0$; differentiating this identity $\alpha$ times in $x$, the chain rule [F9] contributes one factor $t^{-1/2}$ for each spatial derivative, so $D^\alpha\Gamma(x,t)=t^{-(n+|\alpha|)/2}(D^\alpha\Gamma)(x/\sqrt t,1)$, and step 1.4 yields $|D^\alpha\Gamma(x,t)|\le K_\alpha t^{-(n+|\alpha|)/2}e^{-|x|^2/(8t)}$, which is (iv) with $C_{n,\alpha}=K_\alpha$. [step 1.2, step 1.4, F9, given, algebra]

2.3 Tail estimate: by step 1.2, $\Gamma(x,t)=t^{-n/2}\Gamma(x/\sqrt t,1)$; applying the diffeomorphism substitution [F6] to $x=\sqrt t\,z$ gives $\int_{|x|>\delta}\Gamma(x,t)\,dx=\int_{|z|>\delta/\sqrt t}\Gamma(z,1)\,dz$ for every $\delta>0$. As $t\downarrow0^+$ the integrands $1_{\{|z|>\delta/\sqrt t\}}\Gamma(z,1)$ are dominated by the fixed integrable function $\Gamma(\cdot,1)$ from step 1.1 and converge pointwise to $0$ at every $z$, including $z=0$, so dominated convergence [F7] gives $\int_{|z|>\delta/\sqrt t}\Gamma(z,1)\,dz\to0$; with unit mass and positivity from step 1.1 and [F1], the three defining clauses of [F13] hold for the family $K_\varepsilon:=\Gamma(\cdot,\varepsilon)$, so $(\Gamma(\cdot,t))_{t>0}$ is an $L^1$ approximate identity. [step 1.1, step 1.2, F1, F6, F7, F13, given]

3.1 Steps 1.1, 1.2, 1.3, 2.1, 1.4, 2.2 and 2.3 prove (i) unit mass and positivity, (ii) parabolic scaling, (iii) smoothness and the heat equation, (iv) the derivative bounds with finite constants $C_{n,\alpha}=K_\alpha$, and the unit $L^1$ norm together with the approximate-identity property of [F13]; this is the whole statement. [step 1.1, step 1.2, step 1.3, step 2.1, step 1.4, step 2.2, step 2.3, F13] ∎
