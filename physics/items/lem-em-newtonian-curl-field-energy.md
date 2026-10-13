---
id: lem-em-newtonian-curl-field-energy
kind: lemma
title: "Curl-field energy identity for Newtonian potentials of divergence-free compact currents"
domain: mathematics
status: published
origin: session
dependency_level: 1
proof_strategy: direct
deps:
  - lem-em-smooth-newtonian-upgrade
  - def-newtonian-potential
  - thm-decay-of-the-newtonian-potential-of-compactly-supported-data
  - lem-em-newtonian-far-field-gradient
  - lem-the-divergence-and-curl-of-a-cross-product
  - cor-the-curl-of-a-curl-of-a-c2-field
  - def-divergence-and-curl-of-a-c1-vector-field
  - def-laplacian-of-a-c2-function
  - def-cross-product-in-r3
  - def-euclidean-inner-product
  - def-metric-ball
  - thm-monotone-convergence-for-the-integral
  - thm-dominated-convergence
  - def-integral-over-a-measurable-set
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - def-integral-of-a-nonnegative-simple-function
  - prop-the-nonnegative-integral-agrees-with-the-simple-integral
  - def-ck-euclidean-maps-and-diffeomorphisms
  - lem-em-euclidean-balls-and-annuli-are-bounded-c-one-domains
  - thm-divergence-theorem-for-bounded-c-one-euclidean-domains
  - def-surface-integral-on-a-compact-c-one-hypersurface
  - lem-euclidean-chart-measure-agrees-with-polar-surface-measure
  - cor-volume-of-the-unit-n-ball
  - thm-real-gamma-functional-equation
  - cor-real-gamma-one-half-is-root-pi
  - thm-heine-borel-rn
  - thm-euclidean-heine-borel-pseudocompactness-and-extreme-values
  - thm-metric-open-set-algebra
  - def-metric-bounded-diameter
  - thm-compact-subset-is-closed-and-bounded
  - def-support-and-compactly-supported-riemann-integral-in-rn
  - thm-linearity-of-the-lebesgue-integral-on-l-one
  - lem-euclidean-balls-have-positive-finite-lebesgue-measure
  - lem-metrics-on-rn
  - cor-continuous-functions-are-borel-measurable
  - def-countable-choice
dependency_roles:
  lem-em-smooth-newtonian-upgrade: mathematical-premise
  def-newtonian-potential: mathematical-premise
  thm-decay-of-the-newtonian-potential-of-compactly-supported-data: mathematical-premise
  lem-em-newtonian-far-field-gradient: mathematical-premise
  lem-the-divergence-and-curl-of-a-cross-product: mathematical-premise
  cor-the-curl-of-a-curl-of-a-c2-field: mathematical-premise
  def-divergence-and-curl-of-a-c1-vector-field: mathematical-premise
  def-laplacian-of-a-c2-function: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-metric-ball: mathematical-premise
  thm-monotone-convergence-for-the-integral: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  def-integral-over-a-measurable-set: mathematical-premise
  prop-order-and-scalar-rules-for-the-nonnegative-integral: mathematical-premise
  def-integral-of-a-nonnegative-simple-function: mathematical-premise
  prop-the-nonnegative-integral-agrees-with-the-simple-integral: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  lem-em-euclidean-balls-and-annuli-are-bounded-c-one-domains: mathematical-premise
  thm-divergence-theorem-for-bounded-c-one-euclidean-domains: mathematical-premise
  def-surface-integral-on-a-compact-c-one-hypersurface: mathematical-premise
  lem-euclidean-chart-measure-agrees-with-polar-surface-measure: mathematical-premise
  cor-volume-of-the-unit-n-ball: mathematical-premise
  thm-real-gamma-functional-equation: mathematical-premise
  cor-real-gamma-one-half-is-root-pi: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  thm-euclidean-heine-borel-pseudocompactness-and-extreme-values: mathematical-premise
  thm-metric-open-set-algebra: mathematical-premise
  def-metric-bounded-diameter: mathematical-premise
  thm-compact-subset-is-closed-and-bounded: mathematical-premise
  def-support-and-compactly-supported-riemann-integral-in-rn: mathematical-premise
  thm-linearity-of-the-lebesgue-integral-on-l-one: mathematical-premise
  lem-euclidean-balls-have-positive-finite-lebesgue-measure: mathematical-premise
  lem-metrics-on-rn: mathematical-premise
  cor-continuous-functions-are-borel-measurable: mathematical-premise
  def-countable-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "John K. Hunter, Notes on Partial Differential Equations (UC Davis, 2014)"
      url: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf
      locator: "§2.6.1 and §2.7, printed pp. 33-37 (Newtonian potentials of compactly supported data, local integrability of the kernel and the far-field estimates); read in the previously stamped full text."
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript)"
      url: https://web.archive.org/web/20250601000000id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf
      locator: "§5.3, equations (5.21)-(5.26), printed pp. 117-118 (the fundamental solution, the Newtonian potential of compactly supported data and its local integrability); read in the previously stamped archived author manuscript."
verification:
  precheck: pass
---

## Statement

Assume Countable Choice ($\mathrm{AC}_\omega$), with the exact meaning of [[def-countable-choice]]. Let $\mu_0>0$ be a real scalar parameter, let $J\in C_c^\infty(\mathbb R^3;\mathbb R^3)$ ([[def-ck-euclidean-maps-and-diffeomorphisms]]) with $\operatorname{div}J=0$ ([[def-divergence-and-curl-of-a-c1-vector-field]]), and define componentwise
$$A:=\mu_0N(J),\qquad A_i=\mu_0\,N(J_i),\qquad N f(x)=\int_{\mathbb R^3}\frac{f(y)}{4\pi|x-y|}\,d\lambda_3(y),$$
the Newtonian vector potential attached to [[def-newtonian-potential]] in dimension three. Then:

(a) $A\in C^\infty(\mathbb R^3;\mathbb R^3)$ with $\operatorname{div}A=0$ and $-\Delta A=\mu_0J$ pointwise on $\mathbb R^3$, componentwise ([[def-laplacian-of-a-c2-function]]);

(b) there is $C>0$ with $|\operatorname{curl}A(x)|\le C/(1+|x|^2)$ for every $x\in\mathbb R^3$; hence $\operatorname{curl}A\in L^2(\mathbb R^3;\mathbb R^3)$ and $\langle A,J\rangle\in L^1(\mathbb R^3)$, both in the ordinary Lebesgue sense ([[def-integral-over-a-measurable-set]]);

(c) the curl-field energy identity
$$\int_{\mathbb R^3}|\operatorname{curl}A|^2\,d\lambda_3=\mu_0\int_{\mathbb R^3}\langle A,J\rangle\,d\lambda_3$$
holds, and equivalently $\frac12\int_{\mathbb R^3}\langle A,J\rangle\,d\lambda_3=\frac1{2\mu_0}\int_{\mathbb R^3}|\operatorname{curl}A|^2\,d\lambda_3\ge0$.

The identity is stated for the explicit smooth compact currents and the Newtonian construction; no uniqueness, no decay of $A$ itself beyond the curl bound of (b), and no extension to singular currents is claimed.

## Facts & Assumptions

**Given:** Assume $\mathrm{AC}_\omega$, let $\mu_0>0$ and let $J\in C_c^\infty(\mathbb R^3;\mathbb R^3)$ satisfy $\operatorname{div}J=0$, with $A=\mu_0N(J)$ componentwise as in the Statement.

[A1] Countable Choice, written $\mathrm{AC}_\omega$, says every sequence of nonempty sets has a choice function. ([[def-countable-choice]]).

[F1] Assume $\mathrm{AC}_\omega$, let $\varepsilon_0>0$ and $f\in C_c^\infty(\mathbb R^3;\mathbb R)$ with $Nf(x)=\int_{\mathbb R^3}f(y)/(4\pi|x-y|)\,dy$. Then $Nf\in C^\infty(\mathbb R^3)$, $-\Delta Nf=f$ pointwise, and for every multi-index $\alpha$ one has $D^\alpha Nf=N(D^\alpha f)$. ([[lem-em-smooth-newtonian-upgrade]]).

[F2] For a measurable compactly supported $f$, the Newtonian potential is $Nf(x)=\int_{\mathbb R^n}\Phi(x-y)f(y)\,dy$ at each $x$ where the integral is absolutely finite. ([[def-newtonian-potential]]).

[F3] Assume Countable Choice, let $n\ge3$, let $f$ be integrable and zero outside $B_R(0)$, and put $M=\int f$. For $r=|x|>2R$, $\left|Nf(x)-\frac{M r^{2-n}}{(n-2)\omega_{n-1}}\right|\le\frac{2^{n-1}R}{\omega_{n-1}}\|f\|_1r^{1-n}$. ([[thm-decay-of-the-newtonian-potential-of-compactly-supported-data]]).

[F4] Assume $\mathrm{AC}_\omega$, let $n\ge3$, let $f\in L^1(\mathbb R^n)$ vanish outside a closed ball of radius $R$, and let $Nf$ be the Newtonian potential. Then for every $x$ with $|x|>2R$ the gradient is absolutely convergent and $|\nabla(Nf)(x)|\le\frac{2^{n-1}\|f\|_1}{\omega_{n-1}|x|^{n-1}}$. ([[lem-em-newtonian-far-field-gradient]]).

[F5] For $C^1$ fields on an open $U\subseteq\mathbb R^3$, $\operatorname{div}(F\times G)=\langle\operatorname{curl}F,G\rangle-\langle F,\operatorname{curl}G\rangle$. ([[lem-the-divergence-and-curl-of-a-cross-product]]).

[F6] For a $C^2$ field $F$ on an open $U\subseteq\mathbb R^3$, $\operatorname{curl}\operatorname{curl}F=\nabla\operatorname{div}F-\Delta F$. ([[cor-the-curl-of-a-curl-of-a-c2-field]]).

[F7] The divergence and curl are defined pointwise from first partial derivatives; for $F=(F_x,F_y,F_z)$ one has $\operatorname{div}F=\partial_xF_x+\partial_yF_y+\partial_zF_z$ and $\operatorname{curl}F=(\partial_yF_z-\partial_zF_y,\ \partial_zF_x-\partial_xF_z,\ \partial_xF_y-\partial_yF_x)$. ([[def-divergence-and-curl-of-a-c1-vector-field]]).

[F8] For a $C^2$ function the Laplacian is $\Delta f=\operatorname{div}\nabla f$, and for a $C^2$ map $\Delta F$ is componentwise. ([[def-laplacian-of-a-c2-function]]).

[F9] The cross product in coordinates is $(u\times v)_x=u_yv_z-u_zv_y$, with the cyclic permutations for the other two coordinates. ([[def-cross-product-in-r3]]).

[F10] The Euclidean inner product is $\langle x,y\rangle=\sum_{k<n}x_ky_k$, and it is symmetric. ([[def-euclidean-inner-product]]).

[F11] $B(x,r)=\{y:d(x,y)<r\}$ is the open ball of the metric space. ([[def-metric-ball]]).

[F12] Let $0\le f_1\le f_2\le\cdots$ be measurable with $f_n\uparrow f$ pointwise. Then $\int f_n\,d\mu\uparrow\int f\,d\mu$. ([[thm-monotone-convergence-for-the-integral]]).

[F13] Let $f_n\to f$ almost everywhere with $|f_n|\le g$ almost everywhere for a single integrable nonnegative $g$. Then $f\in L^1$ and $\int f_n\,d\mu\to\int f\,d\mu$. ([[thm-dominated-convergence]]).

[F14] For measurable $f:X\to[0,+\infty]$ and $E\in\mathcal A$, $\int_Ef\,d\mu:=\int f\chi_E\,d\mu$. ([[def-integral-over-a-measurable-set]]).

[F15] For measurable $f,g:X\to[0,+\infty]$ with $f\le g$ one has $\int f\,d\mu\le\int g\,d\mu$. ([[prop-order-and-scalar-rules-for-the-nonnegative-integral]]).

[F16] For a nonnegative simple measurable function $s=\sum_jc_j\chi_{E_j}$ the simple integral is $\int s\,d\mu=\sum_jc_j\mu(E_j)$. ([[def-integral-of-a-nonnegative-simple-function]]).

[F17] The nonnegative integral of a nonnegative simple function equals its simple integral. ([[prop-the-nonnegative-integral-agrees-with-the-simple-integral]]).

[F18] Let $k\in\mathbb N$ and let $U\subseteq\mathbb R^3$ be open; a map on $U$ is of class $C^k$ when each component is, and it is smooth when it is $C^k$ for every $k\in\mathbb N$, in particular for every $k\ge1$. ([[def-ck-euclidean-maps-and-diffeomorphisms]]).

[F19] Assume $\mathrm{AC}_\omega$ and $0<\varepsilon<R$. Then $B_R=\{x:|x|<R\}$ is a bounded $C^1$ domain with boundary $S_R$ and outward normal $\nu(x)=x/|x|$, the divergence theorem applies on $B_R$, and each sphere $S_r$ is a compact embedded $C^1$ hypersurface carrying a finite Borel surface measure with the standard graph charts. ([[lem-em-euclidean-balls-and-annuli-are-bounded-c-one-domains]]).

[F20] On a bounded $C^1$ Euclidean domain the divergence theorem holds with the outward normal, $\int_\Omega\operatorname{div}F\,d\lambda=\int_{\partial\Omega}\langle F,\nu\rangle\,dS$. ([[thm-divergence-theorem-for-bounded-c-one-euclidean-domains]]).

[F21] On a compact embedded $C^1$ hypersurface the surface integral is defined by finitely many graph charts, and for a bounded continuous $g$ with finite area one has $\int_S|g|\,dS\le\sup_S|g|\int_S1\,dS$. ([[def-surface-integral-on-a-compact-c-one-hypersurface]]).

[F22] The chart surface measure on $S^{n-1}$ equals the polar measure $\sigma$, scaling by $r$ multiplies surface measure by $r^{n-1}$, and $|S^{n-1}|=n|B_1|$. ([[lem-euclidean-chart-measure-agrees-with-polar-surface-measure]]).

[F23] For every $n\ge1$, $V_n(1)=\pi^{n/2}/\Gamma(n/2+1)$. ([[cor-volume-of-the-unit-n-ball]]).

[F24] For every $s>0$, $\Gamma(s+1)=s\Gamma(s)$. ([[thm-real-gamma-functional-equation]]).

[F25] $\Gamma(1/2)=\sqrt\pi$. ([[cor-real-gamma-one-half-is-root-pi]]).

[F26] A subset of $\mathbb R^n$ is compact if and only if it is closed and bounded for the Euclidean metric. ([[thm-heine-borel-rn]]).

[F27] Every continuous $f:A\to\mathbb R$ on a nonempty compact $A\subseteq\mathbb R^n$ attains a maximum and a minimum on $A$. ([[thm-euclidean-heine-borel-pseudocompactness-and-extreme-values]]).

[F28] Closed balls $\bar B(x,r)$ in a metric space are closed. ([[thm-metric-open-set-algebra]]).

[F29] A subset $A$ of a metric space is bounded if $A=\emptyset$ or there are $x_0$ and $r>0$ with $A\subseteq B(x_0,r)$. ([[def-metric-bounded-diameter]]).

[F30] Every compact subset of a metric space is closed and bounded. ([[thm-compact-subset-is-closed-and-bounded]]).

[F31] For $f:\mathbb R^n\to\mathbb R$ the support is $\operatorname{supp}f=\overline{\{x:f(x)\ne0\}}$, and $f$ is compactly supported when that support is compact. ([[def-support-and-compactly-supported-riemann-integral-in-rn]]).

[F32] The Lebesgue integral is linear on $L^1(\mu)$. ([[thm-linearity-of-the-lebesgue-integral-on-l-one]]).

[F33] For $n\ge1$ the Euclidean distance $d_2$ is a metric on $\mathbb R^n$. ([[lem-metrics-on-rn]]).

[F34] Under Countable Choice every continuous map $\mathbb R^n\to\mathbb R^m$ is Borel measurable. ([[cor-continuous-functions-are-borel-measurable]]).

[F35] Assume $\mathrm{AC}_\omega$, let $n\ge1$, $x\in\mathbb R^n$ and $r>0$; then the Euclidean ball $B(x,r)$ is Lebesgue measurable with $0<\lambda_n(B(x,r))<\infty$. ([[lem-euclidean-balls-have-positive-finite-lebesgue-measure]]).



## Proof

**Proof technique:** direct.

1.1 The supports of the components $J_i$ are compact by [F31] and bounded by [F30], [F33] and [F29]. Fix $R>0$ with $\operatorname{supp}J\subseteq B_R(0)=B(0,R)$, an open ball in the sense of [F11] (for the empty case any $R$ works), and put $r_0:=\max\{2R,1\}$. [F11, F29, F30, F31, F33, algebra]

1.2 By [F1] applied to each component $J_i$ (with [F18] supplying the smoothness of the components of $J$), each $A_i=\mu_0N(J_i)$ lies in $C^\infty(\mathbb R^3)$ and satisfies $-\Delta A_i=\mu_0J_i$ and $D^\alpha A_i=\mu_0N(D^\alpha J_i)$ for every multi-index $\alpha$; in particular $A$ is $C^\infty$, hence $C^2$ for [F6], and [F8] gives $-\Delta A=\mu_0J$ componentwise. Moreover $\operatorname{div}A=\sum_i\partial_iA_i=\mu_0\sum_iN(\partial_iJ_i)=\mu_0N(\operatorname{div}J)=0$ pointwise, where the middle equality uses [F1] with $\alpha=e_i$ and the linearity [F32] (with [F2] supplying the integral representation). [F1, F2, F6, F7, F8, F18, F32, algebra]

1.3 For $r>r_0\ge2R$ and each $i$, [F3] with $n=3$ gives $\left|N J_i(x)-\frac{M_i}{4\pi r}\right|\le\frac{R\|J_i\|_1}{\pi r^2}$, where $M_i=\int J_i$ and $r=|x|$; hence $|A_i(x)|\le \mu_0\left(\frac{|M_i|}{4\pi}+\frac{R\|J_i\|_1}{\pi}\right)\frac1r$, and [F4] with $n=3$ gives $|\nabla A_i(x)|\le\frac{\mu_0\|J_i\|_1}{\pi r^2}$. By [F28], [F26], [F33] and [F27], the closed ball $\bar B_{r_0}(0)$ is compact and each of the continuous functions $A_i$ and $\partial_kA_i$ attains a finite maximum on it, so there are finite constants $c_1,c_2$ with $|A(x)|\le c_1$ and $|\partial_kA_i(x)|\le c_2$ for all $x$ and $i,k$; consequently $A$ and all its first partials are bounded on $\mathbb R^3$. [F3, F4, F26, F27, F28, F33, algebra]

2.1 By [F9] each coordinate of $\operatorname{curl}A$ is a difference of two entries of $\nabla A$, so [F7] yields $|\operatorname{curl}A(x)|\le 2\sum_{i,k}|\partial_kA_i(x)|\le 18c_2$ for $|x|\le r_0$, while for $|x|>r_0$ the gradient bound of step 1.3 gives $|\operatorname{curl}A(x)|\le 2\sum_{i,k}\frac{\mu_0\|J_i\|_1}{\pi|x|^2}\le\frac{36\mu_0\max_i\|J_i\|_1}{\pi|x|^2}$. Hence $|\operatorname{curl}A(x)|\le C/(1+|x|^2)$ on all of $\mathbb R^3$ with $C:=\max\{1,18c_2(1+r_0^2),\,72\mu_0\max_i\|J_i\|_1/\pi\}$. Moreover $\langle A,J\rangle$ is continuous because $A$ is $C^\infty$ by step 1.2 and $J$ is smooth, it is supported in the compact set $\operatorname{supp}J\subseteq B_R(0)$ with $R>0$, and it is bounded by $3c_1\max_i\|J_i\|_\infty$: by [F10], $|\langle A,J\rangle|\le\sum_i|A_i|\,|J_i|\le c_1\sum_i|J_i|\le 3c_1\max_i\|J_i\|_\infty$, since each $|A_i|\le|A|\le c_1$. Since $|\langle A,J\rangle|\mathbf 1_{B_R(0)}\le 3c_1\max_i\|J_i\|_\infty\,\mathbf 1_{B_R(0)}$ pointwise, [F14] and [F15] give $$\int_{\mathbb R^3}|\langle A,J\rangle|\,d\lambda_3=\int_{B_R(0)}|\langle A,J\rangle|\,d\lambda_3\le 3c_1\max_i\|J_i\|_\infty\int_{B_R(0)}1\,d\lambda_3=3c_1\max_i\|J_i\|_\infty\,\lambda_3\bigl(B_R(0)\bigr)<\infty,$$ the middle equality being the simple integral of the indicator by [F16] and [F17], and the finiteness of $\lambda_3(B_R(0))$ being [F35]. [F7, F9, F10, F14, F15, F16, F17, F35, step 1.2, step 1.3, algebra]

2.2 On $\mathbb R^3$ one has, by [F5], [F6], [F10] and step 1.2, $$\operatorname{div}(A\times\operatorname{curl}A)=\langle\operatorname{curl}A,\operatorname{curl}A\rangle-\langle A,\operatorname{curl}\operatorname{curl}A\rangle=|\operatorname{curl}A|^2-\mu_0\langle A,J\rangle,$$ because $\operatorname{curl}\operatorname{curl}A=\nabla\operatorname{div}A-\Delta A=-\Delta A=\mu_0J$. The fields $A$ and $\operatorname{curl}A$ are $C^1$ by step 1.2, so [F5] applies. [F5, F6, F10, step 1.2, algebra]

3.1 Fix $r>r_0$. By [F19] the ball $B_r(0)$ is a bounded $C^1$ domain with boundary $S_r$ and outward normal $\nu(x)=x/|x|$, and [F20] applied to $F=A\times\operatorname{curl}A$ together with step 2.2 gives $$\oint_{S_r}\langle A\times\operatorname{curl}A,\nu\rangle\,dS=\int_{B_r(0)}|\operatorname{curl}A|^2\,d\lambda_3-\mu_0\int_{B_r(0)}\langle A,J\rangle\,d\lambda_3 .$$ [F19, F20, step 2.2]

3.2 For $r>r_0$ the boundary term is bounded by the decay estimates: [F21] and the componentwise bound $|(u\times v)_x|\le2\max_k|u_k|\max_k|v_k|$ from [F9] give $$\left|\oint_{S_r}\langle A\times\operatorname{curl}A,\nu\rangle\,dS\right|\le\int_{S_r}|A\times\operatorname{curl}A|\,dS\le 4\sup_{S_r}|A|\sup_{S_r}|\operatorname{curl}A|\int_{S_r}1\,dS .$$ By [F22], [F23], [F24] and [F25] the sphere area is $\int_{S_r}1\,dS=|S^2|r^2=3V_3(1)r^2=4\pi r^2$, and by steps 1.3 and 2.1, $\sup_{S_r}|A|\le c_1'\,r^{-1}$ and $\sup_{S_r}|\operatorname{curl}A|\le c_2'\,r^{-2}$ for constants $c_1',c_2'$ independent of $r$. Hence the boundary term is at most $16\pi c_1'c_2'/r$, which tends to $0$ as $r\to\infty$. [F9, F21, F22, F23, F24, F25, step 1.3, step 2.1, algebra]

4.1 Let $r_n\uparrow\infty$ with $r_n>r_0$. The functions $|\operatorname{curl}A|^2\mathbf 1_{B_{r_n}(0)}$ are nonnegative and measurable by [F34], and increase to $|\operatorname{curl}A|^2$; [F12] therefore gives $$\int_{B_{r_n}(0)}|\operatorname{curl}A|^2\,d\lambda_3\uparrow L:=\int_{\mathbb R^3}|\operatorname{curl}A|^2\,d\lambda_3\in[0,+\infty].$$ The functions $\langle A,J\rangle\mathbf 1_{B_{r_n}(0)}$ converge pointwise to $\langle A,J\rangle$ and are dominated by the integrable function $|\langle A,J\rangle|$ of step 2.1, so [F13] gives $\int_{B_{r_n}(0)}\langle A,J\rangle\,d\lambda_3\to\int_{\mathbb R^3}\langle A,J\rangle\,d\lambda_3$, a finite real number. Passing to the limit in the identity of step 3.1 using the vanishing boundary term of step 3.2 yields $L=\mu_0\int_{\mathbb R^3}\langle A,J\rangle$, so $\operatorname{curl}A\in L^2(\mathbb R^3;\mathbb R^3)$ and the identity of (c) holds; the equivalent form follows by dividing by $2\mu_0>0$, and $L\ge0$ gives the final inequality. [F12, F13, F34, step 2.1, step 3.1, step 3.2, algebra]

5.1 Clauses (a), (b), (c) are now established: (a) in step 1.2, the decay bound and the $L^1$ statement (b) in steps 2.1 and 4.1, and the identity with its equivalent form in step 4.1. The hypothesis $\operatorname{div}J=0$ was used only in step 1.2; smoothness and compact support only in steps 1.1 through 1.3; no uniqueness of $A$, no decay of $A$ beyond the curl bound, and no singular-current extension is asserted. Countable Choice enters only through the cited Newtonian, measure and surface interfaces, not through any selection. [A1, F1, F3, F4, F12, F13, F20, step 1.1, step 1.2, step 1.3, step 2.1, step 4.1] ∎



## Source notes

Hunter §2.6.1 and §2.7, printed pp. 33-37, and Teschl §5.3, equations (5.21)-(5.26), printed pp. 117-118, supply the Newtonian potential, the local kernel estimates and the far-field behaviour behind the decay steps. Neither text states the curl-field energy identity in this exact form; the present proof assembles it from the supplied smoothness and decay of the Newtonian potential, the vector-calculus identity for $\operatorname{div}(F\times G)$, the divergence theorem on a ball and the monotone-convergence argument. The local identities $\operatorname{div}A=0$ and $-\Delta A=\mu_0J$ are recorded pointwise for the explicit smooth compact currents; the fine behaviour of the fields at a singular current is not treated.
