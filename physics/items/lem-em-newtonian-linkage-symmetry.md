---
id: lem-em-newtonian-linkage-symmetry
kind: lemma
title: "Symmetry and Fubini representation of the Newtonian linkage pairing"
domain: mathematics
status: draft
origin: session
dependency_level: 0
proof_strategy: direct
deps:
  - def-newtonian-potential
  - def-laplace-fundamental-solution-with-positive-minus-laplacian-sign
  - lem-laplace-fundamental-kernel-is-locally-integrable
  - lem-euclidean-chart-measure-agrees-with-polar-surface-measure
  - cor-volume-of-the-unit-n-ball
  - thm-real-gamma-functional-equation
  - cor-real-gamma-one-half-is-root-pi
  - def-support-and-compactly-supported-riemann-integral-in-rn
  - def-ck-euclidean-maps-and-diffeomorphisms
  - def-ck-and-multi-index-notation-in-several-variables
  - lem-metrics-on-rn
  - thm-metric-open-set-algebra
  - thm-heine-borel-rn
  - thm-euclidean-heine-borel-pseudocompactness-and-extreme-values
  - thm-compact-subset-is-closed-and-bounded
  - def-metric-bounded-diameter
  - def-integral-over-a-measurable-set
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - thm-integral-triangle-inequality
  - thm-linearity-of-the-lebesgue-integral-on-l-one
  - lem-euclidean-balls-have-positive-finite-lebesgue-measure
  - cor-c-one-change-of-variables-for-l-one-functions
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - thm-euclidean-lebesgue-measure-is-the-completion-of-the-product-of-lebesgue-measures
  - def-euclidean-inner-product
  - cor-continuous-functions-are-borel-measurable
  - lem-borel-representatives-make-the-convolution-integrand-borel-measurable
  - thm-borel-products-of-euclidean-spaces-are-euclidean-borel
  - thm-composition-with-borel-functions-preserves-measurability
  - def-countable-choice
dependency_roles:
  def-newtonian-potential: mathematical-premise
  def-laplace-fundamental-solution-with-positive-minus-laplacian-sign: mathematical-premise
  lem-laplace-fundamental-kernel-is-locally-integrable: mathematical-premise
  lem-euclidean-chart-measure-agrees-with-polar-surface-measure: mathematical-premise
  cor-volume-of-the-unit-n-ball: mathematical-premise
  thm-real-gamma-functional-equation: mathematical-premise
  cor-real-gamma-one-half-is-root-pi: mathematical-premise
  def-support-and-compactly-supported-riemann-integral-in-rn: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-ck-and-multi-index-notation-in-several-variables: mathematical-premise
  lem-metrics-on-rn: mathematical-premise
  thm-metric-open-set-algebra: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  thm-euclidean-heine-borel-pseudocompactness-and-extreme-values: mathematical-premise
  thm-compact-subset-is-closed-and-bounded: mathematical-premise
  def-metric-bounded-diameter: mathematical-premise
  def-integral-over-a-measurable-set: mathematical-premise
  prop-order-and-scalar-rules-for-the-nonnegative-integral: mathematical-premise
  thm-integral-triangle-inequality: mathematical-premise
  thm-linearity-of-the-lebesgue-integral-on-l-one: mathematical-premise
  lem-euclidean-balls-have-positive-finite-lebesgue-measure: mathematical-premise
  cor-c-one-change-of-variables-for-l-one-functions: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
  thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces: mathematical-premise
  thm-euclidean-lebesgue-measure-is-the-completion-of-the-product-of-lebesgue-measures: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  cor-continuous-functions-are-borel-measurable: mathematical-premise
  lem-borel-representatives-make-the-convolution-integrand-borel-measurable: mathematical-premise
  thm-borel-products-of-euclidean-spaces-are-euclidean-borel: mathematical-premise
  thm-composition-with-borel-functions-preserves-measurability: mathematical-premise
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

Assume Countable Choice ($\mathrm{AC}_\omega$), with the exact meaning of [[def-countable-choice]]. Let $N$ be the Newtonian potential transform of [[def-newtonian-potential]] in dimension $n=3$: for a measurable finite-valued function $f:\mathbb R^3\to\mathbb R$ whose support $\operatorname{supp}f=\overline{\{x\in\mathbb R^3:f(x)\ne0\}}$ is compact ([[def-support-and-compactly-supported-riemann-integral-in-rn]]),
$$Nf(x)=\int_{\mathbb R^3}\Phi(x-y)f(y)\,d\lambda_3(y)$$
at each $x\in\mathbb R^3$ where this integral is absolutely finite, where $\Phi$ is the normalized kernel of [[def-laplace-fundamental-solution-with-positive-minus-laplacian-sign]] with its value at the pole assigned $0$, so that $\Phi(z)=1/(4\pi|z|)$ for $z\ne0$; write also $g(0):=0$ and $g(z):=|z|^{-1}$ for $z\ne0$, so that $\Phi=g/(4\pi)$ pointwise on $\mathbb R^3$. Use the coordinate indices $i\in\{0,1,2\}$ of [[def-euclidean-inner-product]], with $u_i(x):=u(x)(i)$ and $\langle u(x),v(y)\rangle=\sum_{i=0}^2u_i(x)v_i(y)$. Let $\langle\cdot,\cdot\rangle$ be that Euclidean inner product, and let $C_c^\infty(\mathbb R^3;\mathbb R^3)$ be the set of maps each of whose three components is smooth ([[def-ck-euclidean-maps-and-diffeomorphisms]]) with compact support in the above sense; for a vector map $u$, set $\operatorname{supp}u:=\overline{\{x:u(x)\ne0\}}$, equivalently the finite union of its component supports. For $u,v\in C_c^\infty(\mathbb R^3;\mathbb R^3)$ write $Nu:=(Nu_0,Nu_1,Nu_2)$ componentwise, so that the linkage pairing is the map
$$B(u,v):=\int_{\mathbb R^3}\langle u(x),Nv(x)\rangle\,d\lambda_3(x).$$
Then all three integrals
$$\int_{\mathbb R^3}\langle u(x),Nv(x)\rangle\,d\lambda_3(x),\qquad\int_{\mathbb R^3}\langle Nu(x),v(x)\rangle\,d\lambda_3(x),\qquad\frac1{4\pi}\int_{\mathbb R^3}\int_{\mathbb R^3}\frac{\langle u(x),v(y)\rangle}{|x-y|}\,d\lambda_3(y)\,d\lambda_3(x)$$
converge absolutely ([[def-integral-over-a-measurable-set]], [[thm-integral-triangle-inequality]]) and have the same value; therefore $B$ is well defined, real-valued, symmetric, $B(u,v)=B(v,u)$, and bilinear over $\mathbb R$ in each argument. In particular the common value of the three integrals is unchanged by exchanging the two density fields $u$ and $v$.

## Facts & Assumptions

**Given:** Assume $\mathrm{AC}_\omega$, and let $u,v:\mathbb R^3\to\mathbb R^3$ be smooth with compact supports, with $N$, $B$ and $g$ as in the Statement.

[A1] Countable Choice, written $\mathrm{AC}_\omega$, says every sequence of nonempty sets has a choice function. ([[def-countable-choice]]).

[F1] For a measurable compactly supported $f$, the Newtonian potential is $Nf(x)=\int_{\mathbb R^n}\Phi(x-y)f(y)\,dy$ at each $x$ where the integral is absolutely finite. ([[def-newtonian-potential]]).

[F2] The normalized Laplace kernel is $\Phi_n(x)=|x|^{2-n}/((n-2)\omega_{n-1})$ for $n\ge3$ and $x\ne0$; its value at $0$ may be assigned arbitrarily, and $\omega_{n-1}$ is the chart surface measure, which agrees with the polar measure $\sigma$. ([[def-laplace-fundamental-solution-with-positive-minus-laplacian-sign]]).

[F3] The chart surface measure on $S^{n-1}$ equals the polar measure $\sigma$, and $|S^{n-1}|=n|B_1|$. ([[lem-euclidean-chart-measure-agrees-with-polar-surface-measure]]).

[F4] For every $n\ge1$, the unit ball has $V_n(1)=\pi^{n/2}/\Gamma(n/2+1)$. ([[cor-volume-of-the-unit-n-ball]]).

[F5] For every $s>0$, $\Gamma(s+1)=s\Gamma(s)$, and $\Gamma(1)=1$. ([[thm-real-gamma-functional-equation]]).

[F6] $\Gamma(1/2)=\sqrt\pi$. ([[cor-real-gamma-one-half-is-root-pi]]).

[F7] The normalized Laplace kernel $\Phi$ is locally integrable on $\mathbb R^n$ for $n\ge2$. ([[lem-laplace-fundamental-kernel-is-locally-integrable]]).

[F8] For $f:\mathbb R^n\to\mathbb R$ the support is $\operatorname{supp}f:=\overline{\{x\in\mathbb R^n:f(x)\ne0\}}$, and $f$ is compactly supported when $\operatorname{supp}f$ is compact. ([[def-support-and-compactly-supported-riemann-integral-in-rn]]).

[F9] Let $k\in\mathbb N$, $m,q\ge1$ and $U\subseteq\mathbb R^m$ open; a map $f:U\to\mathbb R^q$ is of class $C^k$ when each component is of class $C^k$, and it is smooth, or $C^\infty$, when it is $C^k$ for every $k\in\mathbb N$, in particular for every $k\ge1$. ([[def-ck-euclidean-maps-and-diffeomorphisms]]).

[F10] A scalar function of class $C^k$ on $U$ has every iterated derivative $\partial_{i_r}\cdots\partial_{i_1}f$ for words of length $0\le r\le k$ existing and continuous on $U$; the word of length $0$ denotes $f$ itself. ([[def-ck-and-multi-index-notation-in-several-variables]]).

[F11] For $n\ge1$ the Euclidean distance $d_2$ is a metric on $\mathbb R^n$. ([[lem-metrics-on-rn]]).

[F12] In a metric space, closed balls $\bar B(x,r)$ are closed. ([[thm-metric-open-set-algebra]]).

[F13] A subset $K$ of $\mathbb R^n$ is compact if and only if it is closed and bounded for the Euclidean metric. ([[thm-heine-borel-rn]]).

[F14] A nonempty compact $A\subseteq\mathbb R^n$ has the property that every continuous $f:A\to\mathbb R$ attains a maximum and a minimum on $A$. ([[thm-euclidean-heine-borel-pseudocompactness-and-extreme-values]]).

[F15] Every compact subset of a metric space is closed and bounded. ([[thm-compact-subset-is-closed-and-bounded]]).

[F16] A subset $A$ of a metric space is bounded if $A=\emptyset$ or there are $x_0$ and $r>0$ with $A\subseteq B(x_0,r)$. ([[def-metric-bounded-diameter]]).

[F17] For a measurable $f:X\to[0,+\infty]$ and $E\in\mathcal A$, the integral over $E$ is $\int_E f\,d\mu:=\int f\chi_E\,d\mu$. ([[def-integral-over-a-measurable-set]]).

[F18] For measurable $f,g:X\to[0,+\infty]$ with $f\le g$, the integrals satisfy $\int f\,d\mu\le\int g\,d\mu$. ([[prop-order-and-scalar-rules-for-the-nonnegative-integral]]).

[F19] If $f\in L^1(\mu)$, then $\left|\int f\,d\mu\right|\le\int |f|\,d\mu$. ([[thm-integral-triangle-inequality]]).

[F20] The Lebesgue integral is complex-linear on $L^1(\mu)$. ([[thm-linearity-of-the-lebesgue-integral-on-l-one]]).

[F21] For $n\ge1$, $x\in\mathbb R^n$ and $r>0$, the Euclidean ball satisfies $0<\lambda(B(x,r))<\infty$. ([[lem-euclidean-balls-have-positive-finite-lebesgue-measure]]).

[F22] Assume Countable Choice. Let $U,V\subseteq\mathbb R^n$ be open and $T:U\to V$ a $C^1$ diffeomorphism. Then for every $f\in L^1(\lambda_n)$, $\int_V f(y)\,d\lambda_n(y)=\int_U f(T(x))\,|\det DT(x)|\,d\lambda_n(x)$. ([[cor-c-one-change-of-variables-for-l-one-functions]]).

[F23] For nonnegative product-measurable $f$ on a product of sigma-finite measure spaces, the iterated integrals and the product integral agree. ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]]).

[F24] For $f\in L^1(\mu\times\nu)$ on a product of sigma-finite measure spaces, the section integrals are integrable after the stated exceptional-set convention and the three integrals agree. ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]).

[F25] Under the identification $\mathbb R^{m+n}=\mathbb R^m\times\mathbb R^n$, the Lebesgue measure $\lambda_{m+n}$ is the completion of the product measure $\lambda_m\times\lambda_n$. ([[thm-euclidean-lebesgue-measure-is-the-completion-of-the-product-of-lebesgue-measures]]).

[F26] With coordinates indexed by $i<3$, $\langle x,y\rangle=\sum_{i=0}^2x_i y_i$; it satisfies $\langle x,y\rangle=\langle y,x\rangle$ for all $x,y\in\mathbb R^n$. ([[def-euclidean-inner-product]]).

[F27] Under Countable Choice, every continuous map $\mathbb R^n\to\mathbb R^m$ is Borel measurable. ([[cor-continuous-functions-are-borel-measurable]]).

[F28] If $\tilde f,\tilde g:\mathbb R^n\to\mathbb C$ are Borel measurable, then $(x,y)\mapsto\tilde f(x-y)\tilde g(y)$ is Borel measurable on $\mathbb R^{2n}$. ([[lem-borel-representatives-make-the-convolution-integrand-borel-measurable]]).

[F29] For positive Euclidean dimensions the Borel product sigma-algebra on $\mathbb R^m\times\mathbb R^n$ is the Euclidean Borel sigma-algebra of $\mathbb R^{m+n}$. ([[thm-borel-products-of-euclidean-spaces-are-euclidean-borel]]).

[F30] Composition of Borel measurable maps preserves Borel measurability. ([[thm-composition-with-borel-functions-preserves-measurability]]).



## Proof

**Proof technique:** direct.

1.1 The supports $K_u:=\operatorname{supp}u$ and $K_v:=\operatorname{supp}v$ are compact by [F8], hence closed and bounded in $(\mathbb R^3,d_2)$ by [F11] and [F15]; by [F16] there are $x_u,\rho_u$ and $x_v,\rho_v$ with $K_u\subseteq B(x_u,\rho_u)$ and $K_v\subseteq B(x_v,\rho_v)$ (for an empty support any pair works, since the empty set is bounded). Put $R:=\max\{|x_u|+\rho_u,\,|x_v|+\rho_v\}>0$. For $x\in K_u$ the triangle inequality gives $|x|\le|x_u|+|x-x_u|<|x_u|+\rho_u\le R$, and likewise on $K_v$, so $K_u\cup K_v\subseteq B_R(0)=B(0,R)$; moreover $u(x)=0$ for $x\notin K_u$ and $v(y)=0$ for $y\notin K_v$ by [F8]. [F8, F11, F15, F16, algebra]

1.2 For $z\ne0$, [F2] gives $\Phi(z)=|z|^{2-3}/((3-2)\omega_2)=|z|^{-1}/\omega_2$, and [F3] gives $\omega_2=|S^2|=3|B_1|$ with $|B_1|=V_3(1)$. By [F4], $V_3(1)=\pi^{3/2}/\Gamma(5/2)$; by [F5] applied twice and [F6], $\Gamma(5/2)=\frac32\cdot\frac12\cdot\Gamma(1/2)=\frac34\sqrt\pi$, hence $V_3(1)=\pi^{3/2}/(\frac34\sqrt\pi)=\frac43\pi$ and $\omega_2=4\pi$. Therefore $4\pi\Phi(z)=|z|^{-1}=g(z)$ for $z\ne0$; assigning the permitted pole value $\Phi(0)=0$ by [F2] gives $\Phi=g/(4\pi)$ on all of $\mathbb R^3$, so by [F1] the transform of the Statement is $Nf(x)=\frac1{4\pi}\int_{\mathbb R^3}f(y)g(x-y)\,d\lambda_3(y)$ at each $x$ where this integral is absolutely finite. [F1, F2, F3, F4, F5, F6, algebra]

1.3 For $i,j\in\{0,1,2\}$, by [F9] the components $u_i,v_j$ are smooth, so by [F10] they are continuous, and by [F27] they are Borel measurable; likewise $g$ is Borel measurable because assigning the value $0$ at the pole of the continuous function $z\mapsto|z|^{-1}$ on $\mathbb R^3\setminus\{0\}$ gives the function whose superlevel sets $\{g>t\}$ are $B_{1/t}(0)\setminus\{0\}$ for $t>0$, $\mathbb R^3\setminus\{0\}$ for $t=0$ and $\mathbb R^3$ for $t<0$, all open and hence Borel. Applying [F28] to $g$ and $v_j$ shows $(x,y)\mapsto g(x-y)v_j(y)$ is Borel on $\mathbb R^6$; the maps $(x,y)\mapsto u_i(x)$ are Borel as compositions with the continuous projection, and for each pair $(i,j)$ the map $\Phi_{ij}(x,y):=(u_i(x),\,g(x-y)v_j(y))$ has Borel preimages of open rectangles by [F29]; multiplication $\mathbb R^2\to\mathbb R$ is continuous, so [F30] makes $(x,y)\mapsto u_i(x)v_j(y)g(x-y)$ Borel, and the finite sum $H(x,y):=\langle u(x),v(y)\rangle g(x-y)$ is Borel as well. [F9, F10, F26, F27, F28, F29, F30]

2.1 The closed ball $\bar B_{2R}(0)$ is closed by [F12] and bounded by [F16], hence compact in $(\mathbb R^3,d_2)$ by [F13]. Since $\Phi\ge0$ in dimension three and $\Phi=g/(4\pi)$ by step 1.2, [F7] and [F18] give $$K_R:=\int_{B_{2R}(0)}g\,d\lambda_3=\int_{B_{2R}(0)}4\pi\Phi\,d\lambda_3\le4\pi\int_{\bar B_{2R}(0)}\Phi\,d\lambda_3<\infty.$$ [F7, F12, F13, F16, F18, step 1.2, algebra]

3.1 Fix $x\in B_R(0)$. The translation-dilation map $T_x:\mathbb R^3\to\mathbb R^3$, $T_x(y):=x-y$, is smooth with $T_x^{-1}=T_x$ and $|\det DT_x(y)|=1$ for every $y$, so it is a $C^1$ diffeomorphism; and $T_x(B_R(0))=x-B_R(0)\subseteq B_{2R}(0)$, since $|x-y|\le|x|+|y|<2R$ for $|y|<R$. The function $g$ is nonnegative and $\lambda_3$-measurable, and $\int_{B_{2R}(0)}g<\infty$ by step 2.1, so $g\mathbf 1_{B_{2R}(0)}\in L^1(\lambda_3)$; applying [F22] to it and using [F18] and $T_x(B_R(0))\subseteq B_{2R}(0)$ yields $$\int_{B_R(0)}g(x-y)\,d\lambda_3(y)=\int_{T_x(B_R(0))}g(z)\,d\lambda_3(z)\le\int_{B_{2R}(0)}g\,d\lambda_3=K_R .$$ [F18, F22, step 2.1, step 1.2, algebra]

4.1 By step 1.1, $|u_i|\le M_u$ and $|v_j|\le M_v$ on all of $\mathbb R^3$ for the finite constants $M_u:=\max_{\bar B_R(0)}|u|$ and $M_v:=\max_{\bar B_R(0)}|v|$, which exist by [F14] applied to the continuous functions $|u|,|v|$ on the nonempty compact set $\bar B_R(0)$ of steps 1.1 and 2.1 (a vanishing field has $M=0$). The measure space is sigma-finite because $\mathbb R^3=\bigcup_{m=1}^\infty B_m(0)$ and each ball has finite measure by [F21]. Hence, using [F17] and [F23] for the nonnegative Borel function $|u_i(x)||v_j(y)|g(x-y)$ on $\mathbb R^3\times\mathbb R^3$, [F18] and step 3.1 give $$\int_{\mathbb R^3}\int_{\mathbb R^3}|u_i(x)||v_j(y)|g(x-y)\,d\lambda_3(y)\,d\lambda_3(x)=\int_{B_R(0)}\int_{B_R(0)}|u_i(x)||v_j(y)|g(x-y)\,d\lambda_3(y)\,d\lambda_3(x)\le M_uM_v\lambda_3(B_R(0))K_R<\infty,$$ with $\lambda_3(B_R(0))<\infty$ by [F21] and $K_R<\infty$ by step 2.1. Summing over the three pairs $(i,j)=(0,0),(1,1),(2,2)$ and using [F26] and $|\langle u,v\rangle|\le\sum_i|u_i||v_i|$, the double integral of $\langle u(x),v(y)\rangle g(x-y)/(4\pi)$ converges absolutely; by [F25] and [F29] the Euclidean and product-measure structures on $\mathbb R^6$ agree on Borel sets, so [F24] applies to this $L^1$ function and permits either order of integration. [F17, F18, F21, F23, F24, F25, F26, F29, step 2.1, step 3.1, step 1.3, step 1.1, algebra]

5.1 For every $x\in\mathbb R^3$, $x-B_R(0)\subseteq B_{|x|+R}(0)$; the change of variables $z=x-y$ of [F22] and local integrability [F7] give $\int |v_j(y)|\Phi(x-y)\,dy\le M_v(4\pi)^{-1}\int_{\bar B_{|x|+R}(0)}g(z)\,dz<\infty$. The same argument applies to $u$, so $Nu,Nv$ are defined everywhere. Their components are measurable: apply [F23] to the nonnegative Borel integrands $\Phi(x-y)v_j^\pm(y)$ and take the difference of the finite section integrals, and likewise for $u$. By [F20], $\langle u(x),Nv(x)\rangle=(4\pi)^{-1}\int\langle u(x),v(y)\rangle g(x-y)\,dy$. Pointwise, its absolute value is at most $(4\pi)^{-1}\sum_j\int |u_j(x)||v_j(y)|g(x-y)\,dy$; integrating this bound and using step 4.1 proves absolute integrability. Integration of the preceding equality therefore gives the displayed double-integral representation in the Statement by [F24]. Every fraction with denominator $|x-y|$ is interpreted using $g(0)=0$ as stipulated there. [F7, F18, F19, F20, F22, F23, F24, step 1.1, step 1.3, step 4.1, algebra]

6.1 The same computation with the roles of $u$ and $v$ exchanged, using [F24] to interchange the two orders of integration of the common absolutely convergent double integral of step 4.1, gives $$\int_{\mathbb R^3}\langle Nu(x),v(x)\rangle\,d\lambda_3(x)=\frac1{4\pi}\int_{\mathbb R^3}\int_{\mathbb R^3}\frac{\langle u(x),v(y)\rangle}{|x-y|}\,d\lambda_3(y)\,d\lambda_3(x).$$ [F24, step 4.1, step 5.1, algebra]

6.2 For bilinearity let $u^{(1)},u^{(2)},v,\alpha,\beta$ be given as in the Statement, with $w:=\alpha u^{(1)}+\beta u^{(2)}$. The componentwise linearity of the Newtonian integral [F20] and step 1.1's support bound for the union of the supports show $Nw=\alpha Nu^{(1)}+\beta Nu^{(2)}$ at every point, hence $B(w,v)=\alpha B(u^{(1)},v)+\beta B(u^{(2)},v)$ by [F20] and the absolute finiteness of step 4.1 (the argument of steps 1.1-6.1 applies verbatim to $w$, whose support is contained in the union of the two supports and hence bounded). The second-slot computation is the same with the roles exchanged. [F20, step 4.1, step 5.1, algebra]

7.1 Steps 5.1, 6.1 and the definition of $B$ show that $B(u,v)$ is well defined and real-valued, that all three integrals of the Statement are absolutely convergent with that common value, and that the exchanged pairing satisfies $B(v,u)=\frac1{4\pi}\int\int\frac{\langle v(y),u(x)\rangle}{|y-x|}\,d\lambda_3(x)\,d\lambda_3(y)$; since $|x-y|=|y-x|$ and $\langle v(y),u(x)\rangle=\langle u(x),v(y)\rangle$ by [F26], [F24] identifies this with $B(u,v)$, giving symmetry. [F24, F26, step 5.1, step 6.1, algebra]

8.1 If $u=0$ or $v=0$ then all integrands above vanish identically, all three integrals are $0$, and the symmetry and bilinearity identities hold trivially; the empty support case was already admitted in step 1.1. The proof uses Countable Choice exactly through [A1] in the cited change-of-variables, product-measure, ball-measure and Borel-measurability interfaces, and no full Axiom of Choice. [A1, F22, F24, F25, step 1.1, step 7.1, step 6.2, cases] ∎



## Source notes

Hunter §2.6.1 and §2.7, printed pp. 33-37, treat the Newtonian potential of compactly supported data and its local kernel estimates; Teschl §5.3, equations (5.21)-(5.26), printed pp. 117-118, records the fundamental solution and the local integrability of the kernel. Neither text states the linkage pairing $B(u,v)$ or its symmetry; the statement and its proof assemble the two cited representations with the Tonelli/Fubini machinery of the measure-theory pages. The kernel normalization $\omega_2=4\pi$ used for the $n=3$ specialization is computed here from the chart-surface-measure convention, the unit-ball volume formula and the Gamma functional equation rather than quoted as a numerical convention.
