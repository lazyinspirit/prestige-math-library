---
id: "lem-em-ideal-cylindrical-sheet-field"
kind: "lemma"
title: 'The piecewise constant cylinder field $e_3\mathbf 1_{\{\rho<a\}}$: distributional curl on the cylinder'
domain: mathematics
status: draft
origin: session
dependency_level: 0
deps: ["def-bounded-piecewise-c-one-euclidean-domain", "def-cross-product-in-r3", "def-divergence-and-curl-of-a-c1-vector-field", "def-distribution", "def-distributional-derivative", "def-regular-distribution-from-a-locally-integrable-function", "def-surface-integral-on-a-compact-c-one-hypersurface", "def-test-function-space-d-of-an-open-set", "thm-tonelli-theorem-for-sigma-finite-product-spaces", "thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets", "prop-countable-subsets-of-rn-are-lebesgue-null", "prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets", "thm-divergence-theorem-for-bounded-piecewise-c-one-domains", "thm-locally-integrable-functions-embed-in-distributions", "def-countable-choice", "thm-lebesgue-measure-is-a-complete-measure"]
dependency_roles:
  "thm-lebesgue-measure-is-a-complete-measure": "mathematical-premise"
  "def-bounded-piecewise-c-one-euclidean-domain": "mathematical-premise"
  "def-cross-product-in-r3": "mathematical-premise"
  "def-divergence-and-curl-of-a-c1-vector-field": "mathematical-premise"
  "def-distribution": "mathematical-premise"
  "def-distributional-derivative": "mathematical-premise"
  "def-regular-distribution-from-a-locally-integrable-function": "mathematical-premise"
  "def-surface-integral-on-a-compact-c-one-hypersurface": "mathematical-premise"
  "def-test-function-space-d-of-an-open-set": "mathematical-premise"
  "thm-tonelli-theorem-for-sigma-finite-product-spaces": "mathematical-premise"
  "thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets": "mathematical-premise"
  "prop-countable-subsets-of-rn-are-lebesgue-null": "mathematical-premise"
  "prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets": "mathematical-premise"
  "thm-divergence-theorem-for-bounded-piecewise-c-one-domains": "mathematical-premise"
  "thm-locally-integrable-functions-embed-in-distributions": "mathematical-premise"
  "def-countable-choice": "mathematical-premise"
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
sources:
  references:
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (2026 printing, 236 pp.)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "Section 3.1.2 printed pp. 43-46 (the discontinuity $B_{\\rm above}-B_{\\rm below}=\\mu_0K$ at a surface current and the solenoid $B=\\mu_0IN\\hat z$); read in the stamped 236-page PDF."
    - title: "W. C. Chew, Lectures on Electromagnetic Field Theory, Purdue University (Fall 2020, 497 pp.)"
      url: "https://engineering.purdue.edu/wcchew/ece604f20/EMFTAll.pdf"
      locator: "Lecture 4 Section 4.3.3 printed pp. 46-48 (jump conditions at a current sheet, derived with the same pillbox/divergence-theorem bookkeeping); read in the stamped full text."
    - title: "David J. Griffiths, Introduction to Electrodynamics, 3rd edition (Prentice Hall 1999, 596 pp.; full scanned text)"
      url: "https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Physics/Electrodynamics/David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf"
      locator: "Section 5.3.3 printed pp. 226-228 (Example 5.8 uniform surface current and Example 5.9 the infinite solenoid, with the field jump and the field values used here); read in the stamped scanned full text."
---

## Statement

Assume Countable Choice ($\mathrm{AC}_\omega$), with the exact meaning of [[def-countable-choice]]. Let $a>0$, write $x=(x_1,x_2,x_3)$ and $\rho=\sqrt{x_1^2+x_2^2}$, let
$$S:=\{x\in\mathbb R^3:\rho=a\}$$
be the circular cylinder of radius $a$ about the third coordinate axis, with unit normal $e_\rho=\rho^{-1}(x_1,x_2,0)$ pointing from the interior region $\{\rho<a\}$ to the exterior region $\{\rho>a\}$, and let $e_\varphi=\rho^{-1}(-x_2,x_1,0)$ and $e_3=(0,0,1)$. Let $g:\mathbb R^3\to\mathbb R^3$ be the piecewise constant field
$$g(x):=\begin{cases}e_3,&\rho<a,\\ 0,&\rho>a,\end{cases}$$
extended arbitrarily on the three-dimensional Lebesgue-null set $S$, and let $T_g$ be its regular distribution ([[def-regular-distribution-from-a-locally-integrable-function]], [[thm-locally-integrable-functions-embed-in-distributions]]). For an $\mathbb R^3$-valued distribution $T=(T_1,T_2,T_3)$ whose components are scalar distributions of [[def-distribution]], a scalar test $\varphi\in C_c^\infty(\mathbb R^3)$ and a vector test $\psi\in C_c^\infty(\mathbb R^3;\mathbb R^3)$, the pairings used below are the componentwise readings of [[def-distributional-derivative]]:
$$\langle\operatorname{div}T,\varphi\rangle:=-\sum_{i=1}^{3}\langle T_i,\partial_i\varphi\rangle,\qquad \langle\operatorname{curl}T,\psi\rangle:=\sum_{i=1}^{3}\langle T_i,(\operatorname{curl}\psi)_i\rangle .$$
Then for every vector test $\psi$ and every scalar test $\varphi$,
$$\langle\operatorname{curl}T_g,\psi\rangle=\int_S e_\varphi\cdot\psi\,dS,\qquad \langle\operatorname{div}T_g,\varphi\rangle=0,$$
that is, $\operatorname{curl}T_g=e_\varphi\,\delta_S$ and $\operatorname{div}T_g=0$ in the distributional sense of [[def-distributional-derivative]]. The surface integral is that of [[def-surface-integral-on-a-compact-c-one-hypersurface]]; since $\psi$ has compact support it equals the integral over any compact cylinder segment containing $\operatorname{supp}\psi\cap S$. Equivalently, with $g_\pm$ the one-sided values and the normal $e_\rho$ from the minus to the plus side, $g_+-g_-=-e_3$, $e_\rho\times(g_+-g_-)=e_\varphi$ and $e_\rho\cdot(g_+-g_-)=0$. No product of distributions is formed.

## Facts & Assumptions

**Given:** Assume $\mathrm{AC}_\omega$; let $a>0$; let $\psi\in C_c^\infty(\mathbb R^3;\mathbb R^3)$ and $\varphi\in C_c^\infty(\mathbb R^3)$; let $S$, $e_\rho$, $e_\varphi$, $e_3$, $g$ and $T_g$ be as in the Statement.

[F1] $C_c^\infty(\mathbb R^3)$ and its finite componentwise variant $C_c^\infty(\mathbb R^3;\mathbb R^3)$ are the test spaces of [[def-test-function-space-d-of-an-open-set]]: their members are smooth and compactly supported, and every pairing below is against such a test.

[F2] The regular distribution $T_h$ of a locally integrable function acts by $\langle T_h,\chi\rangle=\int h\,\chi$ and depends only on the almost-everywhere class of $h$; locally integrable functions embed into distributions ([[def-regular-distribution-from-a-locally-integrable-function]], [[thm-locally-integrable-functions-embed-in-distributions]]).

[F3] Distributional derivatives act by signed differentiation of the test, $\langle\partial^\alpha u,\chi\rangle=(-1)^{|\alpha|}\langle u,\partial^\alpha\chi\rangle$ ([[def-distributional-derivative]]), and a vector distribution is a triple of scalar distributions in $\mathcal D'(\mathbb R^3)$ ([[def-distribution]]).

[F4] Under $\mathrm{AC}_\omega$, Tonelli applies to the $\sigma$-finite Euclidean Lebesgue products; $\lambda_m\times\lambda_n$ agrees with $\lambda_{m+n}$ on Borel sets for $m,n\ge1$, and every finite subset of $\mathbb R$ is $\lambda_1$-null ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]], [[thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets]], [[prop-countable-subsets-of-rn-are-lebesgue-null]]).

[F5] Assuming $\mathrm{AC}_\omega$, Lebesgue measure is finite on every bounded Lebesgue measurable set, so a bounded Borel function on $\mathbb R^3$ is locally integrable ([[prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]]). Lebesgue measure is complete ([[thm-lebesgue-measure-is-a-complete-measure]]); hence arbitrary finite changes of a measurable function on a null set remain measurable, because each changed preimage differs by a subset of that null set.

[F6] The cylinder $V=\{\rho<a,\ |x_3|<R\}$, $R>a$, has the finite piecewise $C^1$ presentation of [[def-bounded-piecewise-c-one-euclidean-domain]] given by the two planar disc caps and four lateral faces $X([j\pi/2,(j+1)\pi/2]\times[-R,R])$, $j=0,1,2,3$, where $X(\theta,z)=(a\cos\theta,a\sin\theta,z)$. Each angular interval lies inside an open interval of length less than $2\pi$, on which $X$ is an injective regular chart of Gram density $a$. The edge set consists of the four vertical seams and the two rim circles. In a lateral chart these have parameter sets contained in finitely many horizontal or vertical lines, which are planar-null by [F4], so the edges are surface-null; they are null in each planar cap as well, by applying [F4] to the at-most-two-point sections of its rim circle. The actual outward normals are $e_\rho$ on the lateral faces and $\pm e_3$ on the caps.

[F7] Under that presentation the divergence theorem of [[thm-divergence-theorem-for-bounded-piecewise-c-one-domains]] holds: for every $C^1$ field $F$ on a neighborhood of the compact closure $\overline V$, $\int_V\operatorname{div}F\,d\lambda_3=\sum_j\int_{S_j}F\cdot\nu_j\,dS$, each face counted once off the edge set.

[F8] For $u=(u_x,u_y,u_z)$ and $v=(v_x,v_y,v_z)$ one has $u\times v=(u_yv_z-u_zv_y,\,u_zv_x-u_xv_z,\,u_xv_y-u_yv_x)$; in particular $A\times e_3=(A_2,-A_1,0)$, $e_3\times e_\rho=e_\varphi$, $(\psi\times e_3)\cdot e_\rho=\psi\cdot e_\varphi$, $e_\rho\times(-e_3)=e_\varphi$ and $e_\rho\cdot(-e_3)=0$ ([[def-cross-product-in-r3]]).

[F9] On a $C^1$ field $F$ the operators are $\operatorname{div}F=\partial_1F_1+\partial_2F_2+\partial_3F_3$ and $\operatorname{curl}F=(\partial_2F_3-\partial_3F_2,\ \partial_3F_1-\partial_1F_3,\ \partial_1F_2-\partial_2F_1)$ ([[def-divergence-and-curl-of-a-c1-vector-field]]).

[F10] The surface integral over a compact Borel face contained in a regular patch of a compactly supported integrand is the chart-defined integral of [[def-surface-integral-on-a-compact-c-one-hypersurface]], and it does not depend on the choice of a larger compact band containing the support of the integrand.

[F11] $\mathrm{AC}_\omega$ is the countable-choice principle invoked by the measure, surface and distribution interfaces above ([[def-countable-choice]]).

## Proof

**Proof technique:** direct; the nullity of the cylinder surface, the divergence theorem on the cylinder, and two coordinate computations.

1.1 The cylinder $S=\{x:x_1^2+x_2^2=a^2\}$ is closed, hence Borel. For each $(x_2,x_3)\in\mathbb R^2$, its section $S^{(x_2,x_3)}:=\{x_1\in\mathbb R:(x_1,x_2,x_3)\in S\}$ consists of at most the two values $\pm\sqrt{a^2-x_2^2}$ when $|x_2|\le a$, and is empty otherwise. Each section is $\lambda_1$-null by [F4]. Tonelli and product-measure agreement [F4] give $\lambda_3(S)=\int_{\mathbb R^2}\lambda_1(S^{(x_2,x_3)})\,d\lambda_2=0$. [given, F4]

2.1 The bounded Borel function $g_0:=e_3\mathbf 1_{\{\rho<a\}}$ agrees with $g$ off the null set $S$ of step 1.1, so completeness [F5] makes $g$ Lebesgue measurable with the same almost-everywhere class as $g_0$; by [F5] this class is locally integrable. Hence $T_g:=T_{g_0}$ is a well-defined distribution by [F2], and for the tests of [F1] the componentwise pairings of [F3] read $\langle\operatorname{curl}T_g,\psi\rangle=\int_{\mathbb R^3}g_0\cdot\operatorname{curl}\psi\,d\lambda_3$ and $\langle\operatorname{div}T_g,\varphi\rangle=-\int_{\mathbb R^3}g_0\cdot\nabla\varphi\,d\lambda_3$, where the componentwise sums against the vector tests are the ordinary finite sums of the stated integrals. [given, F1, F2, F3, F5, step 1.1]

3.1 Choose $R>a$ with $\operatorname{supp}\psi\cup\operatorname{supp}\varphi\subset W:=\{\rho<R,\ |x_3|<R\}$ and put $V:=\{\rho<a,\ |x_3|<R\}$. Since $\operatorname{curl}\psi$ and $\nabla\varphi$ are supported in $W$, and $g_0$ equals $e_3$ on $V$, equals $0$ on the open set $W\setminus\overline V$, and the remaining part $W\cap\partial V$ lies in the null set $S$ of step 1.1, the two integrals of step 2.1 reduce to integrals over $V$: $\int_{\mathbb R^3}g_0\cdot\operatorname{curl}\psi\,d\lambda_3=\int_V e_3\cdot\operatorname{curl}\psi\,d\lambda_3$ and $\int_{\mathbb R^3}g_0\cdot\nabla\varphi\,d\lambda_3=\int_V e_3\cdot\nabla\varphi\,d\lambda_3$. [given, step 1.1, step 2.1]

4.1 The field $F_0:=\varphi e_3$ is $C^1$ on $\mathbb R^3$, hence on a neighborhood of $\overline V$, and by [F9] its divergence is $\operatorname{div}F_0=\partial_3\varphi=e_3\cdot\nabla\varphi$. The divergence theorem [F7] on the presentation [F6] gives $\int_V e_3\cdot\nabla\varphi\,d\lambda_3=\int_{\partial V}\varphi\,e_3\cdot\nu\,dS$. On the lateral face $\nu=e_\rho$ and $e_3\cdot e_\rho=0$ by [F8]; on the two disc caps $x_3=\pm R$ the test $\varphi$ vanishes because $\operatorname{supp}\varphi\subset\{|x_3|<R\}$; hence $\int_V e_3\cdot\nabla\varphi\,d\lambda_3=0$. With steps 2.1 and 3.1 this proves $\langle\operatorname{div}T_g,\varphi\rangle=0$ for every scalar test. [step 2.1, step 3.1, F6, F7, F8, F9]

4.2 The field $G_0:=\psi\times e_3$ is $C^1$ on $\mathbb R^3$, and by [F8] its coordinates are $G_0=(\psi_2,-\psi_1,0)$, so by [F9] $\operatorname{div}G_0=\partial_1\psi_2-\partial_2\psi_1=(\operatorname{curl}\psi)_3=e_3\cdot\operatorname{curl}\psi$. The divergence theorem [F7] on the presentation [F6] gives $\int_V e_3\cdot\operatorname{curl}\psi\,d\lambda_3=\int_{\partial V}G_0\cdot\nu\,dS$. The disc caps carry $\psi=0$ by the support condition, while on the lateral face $\nu=e_\rho$ and $G_0\cdot e_\rho=(\psi\times e_3)\cdot e_\rho=\psi\cdot e_\varphi$ by [F8]; therefore $\int_V e_3\cdot\operatorname{curl}\psi\,d\lambda_3=\int_{\rho=a,\ |x_3|<R}e_\varphi\cdot\psi\,dS$, and by [F10] the last integral equals $\int_S e_\varphi\cdot\psi\,dS$ because $e_\varphi\cdot\psi$ is compactly supported and vanishes off the compact band $\{\rho=a,\ |x_3|\le R\}$. With steps 2.1 and 3.1 this is $\langle\operatorname{curl}T_g,\psi\rangle=\int_S e_\varphi\cdot\psi\,dS$ for every vector test, which is the claimed identification $\operatorname{curl}T_g=e_\varphi\,\delta_S$. [step 2.1, step 3.1, F6, F7, F8, F9, F10]

5.1 The one-sided values of $g$ across $S$ are $g_+=0$ and $g_-=e_3$, so $g_+-g_-=-e_3$ and, by [F8], $e_\rho\times(g_+-g_-)=e_\rho\times(-e_3)=e_\varphi$ and $e_\rho\cdot(g_+-g_-)=e_\rho\cdot(-e_3)=0$, which is the stated equivalence. The two distributional identities of steps 4.1 and 4.2 involve only integrals of locally integrable functions against smooth tests, so no product of two distributions is formed anywhere; the only multiplication on $S$ is that of the compactly supported function $e_\varphi\cdot\psi$ with the surface measure of [F10]. Countable Choice is used in step 1.1 through the product-measure and finite-null-set suppliers [F4] and is inherited only through the cited measure, surface and distribution interfaces [F11]; no stronger choice principle occurs. [step 4.1, step 4.2, F2, F4, F8, F10, F11] ∎

## Source notes

Tong, Section 3.1.2, printed pp. 43-46, and Chew, Lecture 4 Section 4.3.3, printed pp. 46-48, present the current-sheet jump with exactly the pillbox bookkeeping carried out above at the distributional level; Griffiths, Section 5.3.3, printed pp. 226-228, computes the uniform-surface-current and infinite-solenoid fields whose interface content this lemma records as the identity $\operatorname{curl}T_g=e_\varphi\delta_S$. The lemma itself is a pure distributional computation on the declared piecewise constant field and uses no physical assumption.
