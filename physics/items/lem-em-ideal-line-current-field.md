---
id: "lem-em-ideal-line-current-field"
kind: "lemma"
title: 'The azimuthal line field $\rho^{-1}e_\varphi$: local integrability and distributional curl on the axis'
domain: mathematics
status: draft
origin: session
dependency_level: 0
deps: ["def-borel-sigma-algebra", "def-borel-and-lebesgue-measurable-function-on-rn", "def-bounded-piecewise-c-one-euclidean-domain", "def-cross-product-in-r3", "def-divergence-and-curl-of-a-c1-vector-field", "def-distribution", "def-distributional-derivative", "def-integral-over-a-measurable-set", "def-regular-distribution-from-a-locally-integrable-function", "thm-locally-integrable-functions-embed-in-distributions", "def-scalar-and-vector-line-integrals-along-piecewise-c1-paths", "def-surface-integral-on-a-compact-c-one-hypersurface", "def-test-function-space-d-of-an-open-set", "thm-algebra-of-derivatives", "thm-divergence-theorem-for-bounded-piecewise-c-one-domains", "thm-dominated-convergence", "thm-heine-cantor-metric", "thm-polar-coordinates-formula-for-lebesgue-measure", "thm-tonelli-theorem-for-sigma-finite-product-spaces", "thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets", "cor-continuous-functions-are-borel-measurable", "prop-countable-subsets-of-rn-are-lebesgue-null", "def-countable-choice", "thm-linearity-of-the-lebesgue-integral-on-l-one"]
dependency_roles:
  "def-borel-sigma-algebra": "mathematical-premise"
  "def-borel-and-lebesgue-measurable-function-on-rn": "mathematical-premise"
  "thm-linearity-of-the-lebesgue-integral-on-l-one": "mathematical-premise"
  "def-bounded-piecewise-c-one-euclidean-domain": "mathematical-premise"
  "def-cross-product-in-r3": "mathematical-premise"
  "def-divergence-and-curl-of-a-c1-vector-field": "mathematical-premise"
  "def-distribution": "mathematical-premise"
  "def-distributional-derivative": "mathematical-premise"
  "def-integral-over-a-measurable-set": "mathematical-premise"
  "def-regular-distribution-from-a-locally-integrable-function": "mathematical-premise"
  "thm-locally-integrable-functions-embed-in-distributions": "mathematical-premise"
  "def-scalar-and-vector-line-integrals-along-piecewise-c1-paths": "mathematical-premise"
  "def-surface-integral-on-a-compact-c-one-hypersurface": "mathematical-premise"
  "def-test-function-space-d-of-an-open-set": "mathematical-premise"
  "thm-algebra-of-derivatives": "mathematical-premise"
  "thm-divergence-theorem-for-bounded-piecewise-c-one-domains": "mathematical-premise"
  "thm-dominated-convergence": "mathematical-premise"
  "thm-heine-cantor-metric": "mathematical-premise"
  "thm-polar-coordinates-formula-for-lebesgue-measure": "mathematical-premise"
  "thm-tonelli-theorem-for-sigma-finite-product-spaces": "mathematical-premise"
  "thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets": "mathematical-premise"
  "cor-continuous-functions-are-borel-measurable": "mathematical-premise"
  "prop-countable-subsets-of-rn-are-lebesgue-null": "mathematical-premise"
  "def-countable-choice": "mathematical-premise"
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
proof_strategy: direct
sources:
  references:
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (2026 printing, 236 pp.)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "Section 3.1.1 printed pp. 42-43 (the field of the infinite straight wire $B=\\mu_0I/(2\\pi r)$ and its circulation) and Section 3.1.2 printed pp. 43-46 (surface currents and the discontinuity of $B$); read in the stamped 236-page PDF."
    - title: "David J. Griffiths, Introduction to Electrodynamics, 3rd edition (Prentice Hall 1999, 596 pp.; full scanned text)"
      url: "https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Physics/Electrodynamics/David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf"
      locator: "Section 1.5.1 printed pp. 45-46 (the distributional divergence of the inverse-square radial field as the model computation of this kind) and Section 5.3.1 printed pp. 221-222 (circulation of the wire field and $\\nabla\\times B=\\mu_0J$); read in the stamped scanned full text."
    - title: "W. C. Chew, Lectures on Electromagnetic Field Theory, Purdue University (Fall 2020, 497 pp.)"
      url: "https://engineering.purdue.edu/wcchew/ece604f20/EMFTAll.pdf"
      locator: "Lecture 4 Section 4.3.3 printed pp. 46-48 (Ampere-law jump condition with a current sheet, the same distributional bookkeeping); read in the stamped full text."
---

## Statement

Assume Countable Choice ($\mathrm{AC}_\omega$), with the exact meaning of [[def-countable-choice]]. Let $Z:=\{(0,0,x_3):x_3\in\mathbb R\}\subset\mathbb R^3$ be the third coordinate axis and let
$$f:\mathbb R^3\setminus Z\to\mathbb R^3,\qquad f(x)=\frac{(-x_2,\ x_1,\ 0)}{x_1^2+x_2^2},\qquad x=(x_1,x_2,x_3),$$
so that, in cylindrical notation $\rho=\sqrt{x_1^2+x_2^2}$ and $e_\varphi=\rho^{-1}(-x_2,x_1,0)$, one has $f=e_\varphi/\rho$ on the punctured space. Let $T_f$ be the regular distribution of $f$ on $\mathbb R^3$ ([[def-regular-distribution-from-a-locally-integrable-function]], [[thm-locally-integrable-functions-embed-in-distributions]]) and let $A$ be the $\mathbb R^3$-valued distribution
$$A(\psi):=\int_{\mathbb R}\psi_3(0,0,x_3)\,dx_3,\qquad\psi\in C_c^\infty(\mathbb R^3;\mathbb R^3),$$
the third-direction line measure on $Z$. For an $\mathbb R^3$-valued distribution $T=(T_1,T_2,T_3)$ whose components are scalar distributions of [[def-distribution]], the pairings used below are the componentwise readings of [[def-distributional-derivative]]:
$$\langle\operatorname{div}T,\varphi\rangle:=-\sum_{i=1}^{3}\langle T_i,\partial_i\varphi\rangle,\qquad \langle\operatorname{curl}T,\psi\rangle:=\sum_{i=1}^{3}\langle T_i,(\operatorname{curl}\psi)_i\rangle .$$
Then: (a) $f\in L^1_{\mathrm{loc}}(\mathbb R^3)$; (b) $\operatorname{div}f=0$ and $\operatorname{curl}f=0$ pointwise on $\mathbb R^3\setminus Z$; (c) for every vector test $\psi\in C_c^\infty(\mathbb R^3;\mathbb R^3)$ and every scalar test $\varphi\in C_c^\infty(\mathbb R^3)$,
$$\langle\operatorname{curl}T_f,\psi\rangle=2\pi\,A(\psi),\qquad \langle\operatorname{div}T_f,\varphi\rangle=0,$$
that is, $\operatorname{curl}T_f=2\pi\,e_3\,\delta_Z$ and $\operatorname{div}T_f=0$ in the distributional sense of [[def-distributional-derivative]]; and (d) for every $r>0$ and $h\in\mathbb R$, the circulation of $f$ along the positively oriented circle $\gamma_{r,h}:[0,2\pi]\to\mathbb R^3\setminus Z$, $\gamma_{r,h}(t)=(r\cos t,r\sin t,h)$, traversed once with increasing $t$, is $2\pi$ ([[def-scalar-and-vector-line-integrals-along-piecewise-c1-paths]], read componentwise). No product of distributions is formed.

## Facts & Assumptions

**Given:** Assume $\mathrm{AC}_\omega$; let $Z$, $f$, $e_\varphi$, $\rho$ be as in the Statement; let $\psi\in C_c^\infty(\mathbb R^3;\mathbb R^3)$ and $\varphi\in C_c^\infty(\mathbb R^3)$.

[F1] $C_c^\infty(\mathbb R^3)$ and $C_c^\infty(\mathbb R^3;\mathbb R^3)$ are the test spaces of [[def-test-function-space-d-of-an-open-set]], and $T_f$ is the regular distribution of the almost-everywhere class of $f$, acting by integration and depending only on that class ([[def-regular-distribution-from-a-locally-integrable-function]], [[thm-locally-integrable-functions-embed-in-distributions]]).

[F2] Distributional derivatives act by signed test differentiation, $\langle\partial^\alpha u,\chi\rangle=(-1)^{|\alpha|}\langle u,\partial^\alpha\chi\rangle$ ([[def-distributional-derivative]]), and a vector distribution is a triple of scalar distributions in $\mathcal D'(\mathbb R^3)$ ([[def-distribution]]); integrals over measurable subsets are those of [[def-integral-over-a-measurable-set]].

[F3] Under $\mathrm{AC}_\omega$, Tonelli's theorem gives $\int_{X\times Y}h\,d(\mu\times\nu)=\int_X\int_Yh\,d\nu\,d\mu$ for nonnegative measurable $h$ on a $\sigma$-finite product, and $\lambda_{m+n}$ agrees with $\lambda_m\times\lambda_n$ on Borel subsets of $\mathbb R^{m+n}=\mathbb R^m\times\mathbb R^n$ for $m,n\ge1$ ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]], [[thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets]]).

[F4] Under $\mathrm{AC}_\omega$, the polar-coordinate formula holds for every nonnegative Borel function on $\mathbb R^n$, and the polar surface measure $\sigma$ on the unit sphere is a finite Borel measure ([[thm-polar-coordinates-formula-for-lebesgue-measure]]).

[F5] Under $\mathrm{AC}_\omega$, every continuous map $\mathbb R^n\to\mathbb R^m$, $n,m\ge1$, is Borel measurable ([[cor-continuous-functions-are-borel-measurable]]), and every at most countable subset of $\mathbb R^m$, in particular every singleton, is Lebesgue null ([[prop-countable-subsets-of-rn-are-lebesgue-null]]). The Borel sigma-algebra is generated by the open sets ([[def-borel-sigma-algebra]]); a map $g:\mathbb R^n\to\mathbb R^m$ is Borel measurable when $g^{-1}(B)$ is Borel for every Borel $B\subseteq\mathbb R^m$ ([[def-borel-and-lebesgue-measurable-function-on-rn]]). Measurability of the zero extension from the punctured domain is proved locally in step 2.1.

[F6] On each coordinate line, a partial derivative is an ordinary one-variable derivative, so the sum, scalar-multiple, product and quotient rules apply pointwise to $C^1$ components; in particular $\partial_j(g/h)=(\partial_jg\,h-g\,\partial_jh)/h^2$ wherever $h\ne0$ ([[thm-algebra-of-derivatives]]).

[F7] Divergence and curl of $C^1$ fields are $\operatorname{div}F=\partial_1F_1+\partial_2F_2+\partial_3F_3$ and $\operatorname{curl}F=(\partial_2F_3-\partial_3F_2,\ \partial_3F_1-\partial_1F_3,\ \partial_1F_2-\partial_2F_1)$ ([[def-divergence-and-curl-of-a-c1-vector-field]]).

[F8] Write $e_\rho(x)=\rho^{-1}(x_1,x_2,0)$ on $\{\rho>0\}$ and $e_3=(0,0,1)$. For $u\times v=(u_2v_3-u_3v_2,\ u_3v_1-u_1v_3,\ u_1v_2-u_2v_1)$ one has $u\cdot(v\times w)=\det(u,v,w)=(u\times v)\cdot w$, $e_\varphi\times e_\rho=-e_3$, and on a circle of radius $r$ about $Z$ with parameter $t\mapsto(r\cos t,r\sin t,h)$ the velocity is $r\,e_\varphi$ ([[def-cross-product-in-r3]]).

[F9] The cylindrical annulus $V_\varepsilon=\{\varepsilon<\rho<R,\ |x_3|<R\}$, $0<\varepsilon<R$, has the finite piecewise $C^1$ presentation of [[def-bounded-piecewise-c-one-euclidean-domain]] given by two planar cap annuli and four quarter-cylinder faces on each of $\rho=\varepsilon$ and $\rho=R$. At radius $b\in\{\varepsilon,R\}$ the faces are $X_b([j\pi/2,(j+1)\pi/2]\times[-R,R])$, $j=0,1,2,3$, with $X_b(\theta,z)=(b\cos\theta,b\sin\theta,z)$, each restricted from an injective regular chart on a larger angular interval of length less than $2\pi$. The seams and rims are surface-null: in lateral coordinates they lie on finitely many horizontal or vertical parameter lines, null by [F3] and [F5], and a planar rim circle has at-most-two-point sections, giving nullity by the same facts. The outward normal on the inner cylinder is $-e_\rho$. The divergence theorem of [[thm-divergence-theorem-for-bounded-piecewise-c-one-domains]] applies to every $C^1$ field on a neighborhood of the compact closure.

[F10] The surface integral over a compact Borel face inside a regular chart is the chart formula of [[def-surface-integral-on-a-compact-c-one-hypersurface]]: for the cylinder chart $X(\theta,z)=(\varepsilon\cos\theta,\varepsilon\sin\theta,z)$ the Gram density is $\varepsilon$.

[F11] If $h_\varepsilon\to h$ pointwise on a set and $|h_\varepsilon|\le M$ for all $\varepsilon$ with $M$ integrable on a finite-measure region, then $\int h_\varepsilon\to\int h$ ([[thm-dominated-convergence]]); a continuous function is uniformly continuous on a compact metric set ([[thm-heine-cantor-metric]]). The Lebesgue integral is linear on integrable functions ([[thm-linearity-of-the-lebesgue-integral-on-l-one]]).

[F12] The circulation of a continuous field $F$ around a piecewise $C^1$ path $\gamma$ is the line integral $\int_\gamma F\cdot d\mathbf r$ of [[def-scalar-and-vector-line-integrals-along-piecewise-c1-paths]].

[F13] $\mathrm{AC}_\omega$ is the countable-choice principle invoked by the measure and distribution interfaces above ([[def-countable-choice]]).

## Proof

**Proof technique:** direct; local integrability by polar coordinates, one excision limit, and the divergence theorem on a cylindrical annulus.

1.1 The axis $Z=\{(0,0,x_3):x_3\in\mathbb R\}$ is closed, hence Borel. By [F3] in the product $\mathbb R^2\times\mathbb R$, $\lambda_3(Z)=\int_{\mathbb R}\lambda_2(\{(0,0)\})\,dx_3=0$, because the singleton in $\mathbb R^2$ is null by [F5]. [given, F3, F5]

1.2 On $\mathbb R^3\setminus Z$ the components of $f$ are quotients of polynomials with nonvanishing denominator $x_1^2+x_2^2$, so by [F6] the partial derivatives exist and satisfy $\partial_1f_1=\frac{2x_1x_2}{\rho^4}$, $\partial_2f_2=-\frac{2x_1x_2}{\rho^4}$, $\partial_1f_2=\frac{x_2^2-x_1^2}{\rho^4}$, $\partial_2f_1=\frac{x_2^2-x_1^2}{\rho^4}$ and $\partial_3f=0$. Summing by [F7] gives $\operatorname{div}f=\partial_1f_1+\partial_2f_2=0$, and the curl coordinates are $\partial_1f_2-\partial_2f_1=0$, $\partial_3f_1-\partial_1f_3=0$ and $\partial_2f_3-\partial_3f_2=0$; hence $\operatorname{div}f=\operatorname{curl}f=0$ pointwise on $\mathbb R^3\setminus Z$. [given, F6, F7]

1.3 Fix $r>0$ and a height $h\in\mathbb R$, and let $\gamma(t)=(r\cos t,r\sin t,h)$, $t\in[0,2\pi]$, a closed $C^1$ path whose velocity is $\gamma'(t)=r\,e_\varphi(\gamma(t))$ by [F8]. On the trace, $f(\gamma(t))=r^{-1}e_\varphi(\gamma(t))$, so the integrand of the vector line integral of [F12] is the constant $f(\gamma(t))\cdot\gamma'(t)=r^{-1}\cdot r=1$, and the circulation is $\int_0^{2\pi}1\,dt=2\pi$. [given, F8, F12]

2.1 Let $U=\mathbb R^3\setminus Z$ and define $\widetilde f:\mathbb R^3\to\mathbb R^3$ by $\widetilde f=f$ on $U$ and $\widetilde f=0$ on $Z$. For every open $O\subseteq\mathbb R^3$, continuity of $f$ on $U$ makes $f^{-1}(O)$ open in $U$, hence open in $\mathbb R^3$ because $U$ is open. The inverse image $\widetilde f^{-1}(O)$ is $f^{-1}(O)$ if $0\notin O$, and $f^{-1}(O)\cup Z$ if $0\in O$; both are Borel, since $Z$ is closed. The class $\mathcal C=\{B\subseteq\mathbb R^3:\widetilde f^{-1}(B)\text{ is Borel}\}$ is a sigma-algebra: inverse images preserve complements and countable unions. It contains every open set, hence every Borel set by [F5]. Thus $\widetilde f$ is Borel measurable without applying the cited full-space continuity result to $f$. For its local integrability, let $K\subset\mathbb R^3$ be compact and choose $R>0$, $H>0$ with $K\subset\{|x_3|\le H,\ \rho\le R\}$. By Tonelli [F3] and the polar formula [F4] in dimension two, applied to the nonnegative Borel function $u(x)=\rho^{-1}\mathbf 1_{\{|x_3|\le H,\ \rho\le R\}}(x)$ off $Z$, with $u=0$ on $Z$ (the same open-inverse-image argument proves measurability of $\rho^{-1}$ extended by zero, and restriction to this closed cylinder preserves it), $\int_{\mathbb R^3}u\,d\lambda_3=\int_{-H}^{H}\left(\int_{\rho\le R}\rho^{-1}\,d\lambda_2\right)dx_3=\int_{-H}^{H}R\,\sigma(S^1)\,dx_3=2HR\,\sigma(S^1)$, and this is finite because $\sigma$ is a finite measure [F4]. Since $|\widetilde f|=\rho^{-1}$ off $Z$ and $Z$ is null by step 1.1, $\mathbf 1_K|\widetilde f|\le u$ off a null set, so $\int_K|\widetilde f|\,d\lambda_3<+\infty$. Hence $f\in L^1_{\mathrm{loc}}(\mathbb R^3)$ and $T_f$ is a well-defined distribution by [F1], [F2]. [given, step 1.1, F1, F2, F3, F4, F5]

3.1 The regular-distribution pairings of [F1] and [F2] give $\langle\operatorname{curl}T_f,\psi\rangle=\int_{\mathbb R^3}f\cdot\operatorname{curl}\psi\,d\lambda_3$ and $\langle\operatorname{div}T_f,\varphi\rangle=-\int_{\mathbb R^3}f\cdot\nabla\varphi\,d\lambda_3$, the integrands being dominated by $\|\operatorname{curl}\psi\|_\infty\rho^{-1}\mathbf 1_{\operatorname{supp}\psi}$ and $\|\nabla\varphi\|_\infty\rho^{-1}\mathbf 1_{\operatorname{supp}\varphi}$, which are integrable by step 2.1. Fix $R>0$ with $\operatorname{supp}\psi\cup\operatorname{supp}\varphi\subset\{\rho<R,\ |x_3|<R\}$ and put $V_\varepsilon:=\{\varepsilon<\rho<R,\ |x_3|<R\}$ for $0<\varepsilon<R$. The functions $\mathbf 1_{V_\varepsilon}f\cdot\operatorname{curl}\psi$ are dominated by $|f\cdot\operatorname{curl}\psi|$ and converge pointwise off the null axis $Z$ of step 1.1 to $f\cdot\operatorname{curl}\psi$; by [F11], $\int_{\mathbb R^3}f\cdot\operatorname{curl}\psi\,d\lambda_3=\lim_{\varepsilon\to0}\int_{V_\varepsilon}f\cdot\operatorname{curl}\psi\,d\lambda_3$, and the same argument gives $\int_{\mathbb R^3}f\cdot\nabla\varphi\,d\lambda_3=\lim_{\varepsilon\to0}\int_{V_\varepsilon}f\cdot\nabla\varphi\,d\lambda_3$. [given, step 1.1, step 2.1, F1, F2, F11]

4.1 On the neighborhood $\{\rho>\varepsilon/2\}$ of the compact closure $\overline{V_\varepsilon}$ the field $\psi\times f$ is $C^1$, since $f$ is smooth there, and by [F7] its divergence is $\operatorname{div}(\psi\times f)=f\cdot\operatorname{curl}\psi-\psi\cdot\operatorname{curl}f$; here $\operatorname{curl}f=0$ on $V_\varepsilon$ by step 1.2. Applying the divergence theorem [F9] on $V_\varepsilon$ gives $\int_{V_\varepsilon}f\cdot\operatorname{curl}\psi\,d\lambda_3=\int_{\partial V_\varepsilon}(\psi\times f)\cdot\nu\,dS$. The faces at $\rho=R$ and at $|x_3|=R$ contribute $0$ because $\operatorname{supp}\psi\subset\{\rho<R,\ |x_3|<R\}$; on the inner cylinder the outward normal is $-e_\rho$ and $f=e_\varphi/\varepsilon$, so by [F8] the remaining term is $(\psi\times e_\varphi)\cdot(-e_\rho)/\varepsilon=-\psi\cdot(e_\varphi\times e_\rho)/\varepsilon=\psi_3/\varepsilon$, and the surface integral of [F10] over the chart $X(\theta,z)=(\varepsilon\cos\theta,\varepsilon\sin\theta,z)$ gives $\int_{\rho=\varepsilon,|x_3|<R}\frac{\psi_3}{\varepsilon}\,dS=\int_0^{2\pi}\int_{-R}^{R}\psi_3(\varepsilon\cos\theta,\varepsilon\sin\theta,z)\,dz\,d\theta .$ [given, step 1.2, step 3.1, F7, F8, F9, F10]

4.2 On the same neighborhood the field $\varphi f$ is $C^1$, and $\operatorname{div}(\varphi f)=f\cdot\nabla\varphi+\varphi\operatorname{div}f$ by [F7]; here $\operatorname{div}f=0$ on $V_\varepsilon$ by step 1.2. The divergence theorem [F9] gives $\int_{V_\varepsilon}f\cdot\nabla\varphi\,d\lambda_3=\int_{\partial V_\varepsilon}\varphi\,f\cdot\nu\,dS$. On both cylinder faces $f\cdot\nu=0$ because $f\perp e_\rho$, and on the two cap annuli $\varphi=0$ because $\operatorname{supp}\varphi\subset\{|x_3|<R\}$; hence $\int_{V_\varepsilon}f\cdot\nabla\varphi\,d\lambda_3=0$ for every $\varepsilon$. [given, step 1.2, step 3.1, F7, F9]

5.1 With step 4.2, the identity $\int_{\mathbb R^3}f\cdot\nabla\varphi\,d\lambda_3=\lim_{\varepsilon\to0}\int_{V_\varepsilon}f\cdot\nabla\varphi\,d\lambda_3$ of step 3.1 gives $\int_{\mathbb R^3}f\cdot\nabla\varphi\,d\lambda_3=0$, and therefore $\langle\operatorname{div}T_f,\varphi\rangle=0$ for every scalar test $\varphi$ by step 3.1. [step 3.1, step 4.2]

5.2 The double integral of step 4.1 has the limit $\int_0^{2\pi}\int_{-R}^{R}\psi_3(0,0,z)\,dz\,d\theta=2\pi\,A(\psi)$ as $\varepsilon\to0$. Indeed, $\psi_3$ is continuous on $\mathbb R^3$, hence uniformly continuous on the compact set $\{x:\rho\le R,\ |x_3|\le R\}$ by [F11], so for $\eta>0$ there is $\delta>0$ with $|\psi_3(\varepsilon\cos\theta,\varepsilon\sin\theta,z)-\psi_3(0,0,z)|\le\eta$ whenever $0<\varepsilon<\delta$ and $(\theta,z)\in[0,2\pi]\times[-R,R]$; dominated convergence [F11] on the finite-measure rectangle, or equivalently the estimate with the constant majorant $\eta$, gives convergence of the double integrals; the limit integrand does not depend on $\theta$, and finite linearity [F11] gives the iterated integral $\left(\int_0^{2\pi}1\,d\theta\right)\left(\int_{-R}^{R}\psi_3(0,0,z)\,dz\right)=2\pi\,A(\psi)$. [step 4.1, F11]

6.1 Combining steps 3.1, 4.1 and 5.2, $\langle\operatorname{curl}T_f,\psi\rangle=\int_{\mathbb R^3}f\cdot\operatorname{curl}\psi\,d\lambda_3=\lim_{\varepsilon\to0}\int_{V_\varepsilon}f\cdot\operatorname{curl}\psi\,d\lambda_3=\lim_{\varepsilon\to0}\int_0^{2\pi}\int_{-R}^{R}\psi_3(\varepsilon\cos\theta,\varepsilon\sin\theta,z)\,dz\,d\theta=2\pi\,A(\psi)$ for every vector test $\psi$, which is the claimed identification $\operatorname{curl}T_f=2\pi\,e_3\,\delta_Z$. [step 3.1, step 4.1, step 5.2]

7.1 Steps 5.1 and 6.1 prove the two distributional identities of (c), step 1.2 proves the pointwise vanishing (b), and step 1.3 proves the circulation (d); step 2.1 is (a). Every pairing above is an integral of a locally integrable function against a smooth test, so no product of two distributions is formed. Countable Choice is used only through the measure and distribution interfaces [F13], namely Tonelli, polar coordinates, the nullity of countable sets and the regular-distribution embedding; no stronger choice principle occurs. [step 1.2, step 1.3, step 2.1, step 5.1, step 6.1, F2, F13] ∎

## Source notes

Tong, Section 3.1.1, printed pp. 42-43, and Griffiths, Section 5.3.1, printed pp. 221-222, supply the wire field and its circulation; the distributional identity $\operatorname{curl}T_f=2\pi e_3\delta_Z$ is the exact mathematical content behind the distributional divergence computation of Griffiths, Section 1.5.1, printed pp. 45-46, and the sheet bookkeeping of Chew, Lecture 4 Section 4.3.3, printed pp. 46-48. The lemma is a pure computation on the declared explicit field.
