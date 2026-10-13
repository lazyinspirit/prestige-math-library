---
id: lem-em-point-retarded-potential-and-fields
kind: lemma
title: "Retarded potentials of a point history as the retarded convolution of the point sources, and the off-worldline Lienard-Wiechert fields"
status: published
origin: pipeline
domain: mathematics
deps: [lem-em-global-retarded-root, lem-em-retarded-wave-kernel, lem-em-point-current-continuity, def-em-potential-gauge-and-field-conventions, def-countable-choice, def-vector-valued-derivative-and-integral, def-ck-euclidean-maps-and-diffeomorphisms, thm-chain-rule-for-total-derivatives, thm-algebra-of-derivatives, thm-clairaut-schwarz-mixed-partials, def-jacobian-matrix-and-gradient, def-directional-and-partial-derivatives, def-divergence-and-curl-of-a-c1-vector-field, def-euclidean-inner-product, def-cross-product-in-r3, lem-cross-product-is-bilinear-alternating-and-orthogonal, lem-divergence-and-curl-are-linear-and-obey-the-scalar-product-rules, cor-c-one-change-of-variables-for-l-one-functions, def-regular-distribution-from-a-locally-integrable-function, def-integrable-real-and-complex-functions-and-their-integrals, thm-extreme-value-metric, thm-heine-borel-rn, prop-order-and-scalar-rules-for-the-nonnegative-integral, lem-c-one-change-of-variables-for-nonnegative-borel-functions-via-radon-uniqueness, thm-polar-coordinates-formula-for-lebesgue-measure, thm-tonelli-theorem-for-sigma-finite-product-spaces, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, thm-borel-products-of-euclidean-spaces-are-euclidean-borel, thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets, def-distribution, def-test-function-topology, thm-integral-triangle-inequality, thm-linearity-of-the-lebesgue-integral-on-l-one, thm-nonnegative-integral-zero-iff-zero-almost-everywhere]
dependency_roles:
  lem-em-global-retarded-root: mathematical-premise
  lem-em-retarded-wave-kernel: mathematical-premise
  lem-em-point-current-continuity: mathematical-premise
  def-em-potential-gauge-and-field-conventions: mathematical-premise
  def-countable-choice: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-clairaut-schwarz-mixed-partials: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-divergence-and-curl-of-a-c1-vector-field: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  lem-cross-product-is-bilinear-alternating-and-orthogonal: mathematical-premise
  lem-divergence-and-curl-are-linear-and-obey-the-scalar-product-rules: mathematical-premise
  cor-c-one-change-of-variables-for-l-one-functions: mathematical-premise
  def-regular-distribution-from-a-locally-integrable-function: mathematical-premise
  def-integrable-real-and-complex-functions-and-their-integrals: mathematical-premise
  thm-extreme-value-metric: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  prop-order-and-scalar-rules-for-the-nonnegative-integral: mathematical-premise
  lem-c-one-change-of-variables-for-nonnegative-borel-functions-via-radon-uniqueness: mathematical-premise
  thm-polar-coordinates-formula-for-lebesgue-measure: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
  thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces: mathematical-premise
  thm-borel-products-of-euclidean-spaces-are-euclidean-borel: mathematical-premise
  thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets: mathematical-premise
  def-distribution: mathematical-premise
  def-test-function-topology: mathematical-premise
  thm-integral-triangle-inequality: mathematical-premise
  thm-linearity-of-the-lebesgue-integral-on-l-one: mathematical-premise
  thm-nonnegative-integral-zero-iff-zero-almost-everywhere: mathematical-premise
pipeline_run: physics-em-sr-40-2026-10-08
dependency_level: 4
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (2026 printing)"
      url: "https://www.damtp.cam.ac.uk/user/tong/em/electro.pdf"
      locator: "section 6.4.1, printed pp. 157-159, (6.30)-(6.36): the point charge density and current, the one-dimensional delta substitution and the Lienard-Wiechert potentials; section 6.4.3, printed pp. 161-164, (6.39)-(6.45): the kappa=1-R-hat dot v/c derivatives, the electric field (6.42) and the magnetic field (6.44)-(6.45)"
    - title: "Victor Ivrii, Partial Differential Equations (University of Toronto lecture-note textbook, 2026 printing, CC BY-SA)"
      url: "https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf"
      locator: "section 9.1.2, printed p. 284, (9.1.13): the retarded potential; section 9.1.1, printed pp. 281-282, (9.1.4): the c-normalization of the fundamental solution"
verification:
  precheck: pass
---

## Statement

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]). Let $c>0$, $q\in\mathbb R$, $\varepsilon_0>0$, put $\mu_0:=(c^2\varepsilon_0)^{-1}$ and $C:=q/(4\pi\varepsilon_0)$, and let $z:\mathbb R\to\mathbb R^3$ be of class $C^3$ with $|z'(s)|\le v_*<c$ for every $s\in\mathbb R$ ([[def-vector-valued-derivative-and-integral]]). Write $\Omega:=\mathbb R^3\times\mathbb R$ and $\Gamma:=\{(z(s),s):s\in\mathbb R\}\subseteq\Omega$. For $(x,t)\in\Omega\setminus\Gamma$ let $s=s(x,t)$ be the unique retarded root of [[lem-em-global-retarded-root]] with $t-s=|x-z(s)|/c$, and put $R:=x-z(s)$, $r:=|R|>0$, $n:=R/r$, $\beta:=z'(s)/c$, $\kappa:=1-n\cdot\beta$, $N:=n\cdot\beta$, $D:=\kappa r$, $\dot\beta:=z''(s)/c$ and $d:=n\cdot\dot\beta$ ([[def-euclidean-inner-product]]). Then:

(a) the scalar distribution $\rho\in\mathcal D'(\Omega)$ and the vector distribution $J\in(\mathcal D'(\Omega))^3$ of [[lem-em-point-current-continuity]],

$$\langle\rho,\psi\rangle=q\int_{\mathbb R}\psi(z(s),s)\,ds,\qquad \langle J,\psi\rangle=q\int_{\mathbb R}z'(s)\,\psi(z(s),s)\,ds,$$

satisfy $\partial_t\rho+\operatorname{div}J=0$.

(b) Let $K$ be the retarded wave kernel of [[lem-em-retarded-wave-kernel]] and, for $\psi\in\mathcal D(\Omega)$ and $\tau\in\mathbb R$, $y\in\mathbb R^3$, put $(K\circledast\psi)(y,\tau):=\langle K,\psi(y+\cdot,\tau+\cdot)\rangle$. Define the retarded-history pairings by the explicit integrals

$$\langle\Phi,\psi\rangle:=\frac{q}{\varepsilon_0}\int_{\mathbb R}(K\circledast\psi)(z(s),s)\,ds,\qquad \langle\Upsilon,\psi\rangle:=\mu_0q\int_{\mathbb R}z'(s)(K\circledast\psi)(z(s),s)\,ds.$$

Here the second integral is componentwise. The notation $\varepsilon_0^{-1}\langle\rho,K\circledast\psi\rangle$ and $\mu_0\langle J,K\circledast\psi\rangle$, if used, means precisely these explicit history integrals, rather than ordinary distribution action on a compactly supported test. These pairings define distributions on $\Omega$, are finite for every $\psi\in\mathcal D(\Omega)$ and satisfy the exact retarded-convolution identities

$$\langle\Phi,\psi\rangle=\int_{\Omega\setminus\Gamma}\frac{C\,\psi(x,t)}{\kappa(x,t)\,r(x,t)}\,dx\,dt,\qquad \langle\Upsilon,\psi\rangle=\int_{\Omega\setminus\Gamma}\frac{\beta(x,t)}{c}\,\frac{C\,\psi(x,t)}{\kappa(x,t)\,r(x,t)}\,dx\,dt$$

(for $\Upsilon$, componentwise against $\psi\in\mathcal D(\Omega)$; both integrands are continuous on the open set $\Omega\setminus\Gamma$ and integrable there against $\psi$). Consequently the potentials are the $C^2$ functions

$$\varphi:=\frac{C}{D}=\frac{C}{\kappa r}:\Omega\setminus\Gamma\to\mathbb R,\qquad A:=\frac{\beta\,\varphi}{c}=\frac{\beta\,C}{c\,\kappa r}:\Omega\setminus\Gamma\to\mathbb R^3$$

off the worldline, and the zero extensions $\widetilde\varphi,\widetilde A$ on $\Gamma$ belong to $L^1_{\mathrm{loc}}(\Omega)$; $\Phi$ is the regular distribution of $\widetilde\varphi$, and $\Upsilon$ that of $\widetilde A$ ([[def-regular-distribution-from-a-locally-integrable-function]]).

(c) Let $E:=-\nabla\varphi-\partial_tA$ and $B:=\operatorname{curl}A$ on $\Omega\setminus\Gamma$ ([[def-em-potential-gauge-and-field-conventions]]). Then, off the worldline,

$$E=C\left[\frac{(1-|\beta|^2)(n-\beta)}{\kappa^3r^2}+\frac{n\times\bigl((n-\beta)\times\dot\beta\bigr)}{c\,\kappa^3r}\right],\qquad B=\frac{n\times E}{c}.$$

The fields $E,B$ are $C^1$ off the worldline. More generally, if $z\in C^k$, $k\ge3$, the retarded root is $C^k$, the potentials are $C^{k-1}$ and the fields are $C^{k-2}$ there; if $z\in C^\infty$, all these objects are smooth off the worldline. The result is a mathematical model computation for the stipulated uniformly subluminal smooth worldline and the retarded choice; no self-force law, no radiation-reaction postulate and no physical Maxwell coupling is asserted or proved.

## Facts & Assumptions

**Given:** The constants $c,q,\varepsilon_0,\mu_0,C$, the all-time uniformly subluminal $C^3$ trajectory $z$, the domain $\Omega=\mathbb R^3\times\mathbb R$ with its worldline graph $\Gamma$, and the retarded data $s,R,r,n,\beta,\kappa,N,D,\dot\beta,d$ of the Statement.

[F1] For an open interval $I$, a $C^1$ trajectory $z:I\to\mathbb R^3$ whose graph map into an open $\Omega$ is proper, and $\psi\in\mathcal D(\Omega)$, the functionals $\langle\rho,\psi\rangle=q\int_I\psi(z(s),s)ds$ and $\langle J,\psi\rangle=q\int_Iz'(s)\psi(z(s),s)ds$ are distributions and satisfy $\partial_t\rho+\operatorname{div}J=0$; properness is automatic for $I=\mathbb R$ ([[lem-em-point-current-continuity]]).

[F2] For $c>0$ and $C^1$ $z$ with $|z'|\le v_*<c$ there is exactly one retarded root $s$ of $t-s=|x-z(s)|/c$, with $s\le t$ and equality exactly on the worldline; off it $s<t$, $r=|x-z(s)|$ satisfies $r=c(t-s)>0$, $\kappa=1-n\cdot z'(s)/c$ obeys $1-v_*/c\le\kappa\le1+v_*/c$, and $\partial_ts=1/\kappa$, $\nabla s=-n/(c\kappa)$; a $C^k$ trajectory gives a $C^k$ root on the off-worldline domain, in particular $C^3$ for $C^3$ $z$ ([[lem-em-global-retarded-root]]).

[F3] For the retarded kernel $K$ one has $(K\circledast\psi)(y,\tau)=(4\pi)^{-1}\int\psi(y+w,\tau+|w|/c)|w|^{-1}dw$ for $\psi\in\mathcal D(\Omega)$ ([[lem-em-retarded-wave-kernel]]).

[F4] For a potential pair, $E=-\nabla\varphi-\partial_tA$, $B=\operatorname{curl}A$ ([[def-em-potential-gauge-and-field-conventions]]).

[F5] A locally integrable function defines the regular functional $u_f(\varphi)=\int f\varphi$; distributions are the continuous complex-linear functionals on the LF test space, whose fixed-support seminorms bound absolute pairings ([[def-regular-distribution-from-a-locally-integrable-function]], [[def-distribution]], [[def-test-function-topology]]).

[F6] Under $\mathrm{AC}_\omega$, for nonnegative Borel $g$ on $\mathbb R^n$, $\int_{\mathbb R^n}g\,d\lambda_n=\int_0^\infty\int_{S^{n-1}}g(r\omega)r^{n-1}d\sigma(\omega)dr$; in particular $\int_{B_L}|w|^{-1}dw=\sigma(S^2)L^2/2$ ([[thm-polar-coordinates-formula-for-lebesgue-measure]]).

[F7] Tonelli and Fubini on sigma-finite products: nonnegative measurable functions may be integrated in either order, and for $f\in L^1(\mu\times\nu)$ the three integrals agree ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]], [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]).

[F8] Euclidean Borel sets are the Borel sets of the product structure, and the Lebesgue product measure agrees with Euclidean Lebesgue measure on Borel sets ([[thm-borel-products-of-euclidean-spaces-are-euclidean-borel]], [[thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets]]).

[F9] Under $\mathrm{AC}_\omega$, for a $C^1$ diffeomorphism $T:U\to V$ of open sets, $\int_Vg=\int_Ug(T)|\det DT|$ for nonnegative Borel $g$, and $\int_Vf=\int_Uf(T)|\det DT|$ for $f\in L^1(V)$ ([[lem-c-one-change-of-variables-for-nonnegative-borel-functions-via-radon-uniqueness]], [[cor-c-one-change-of-variables-for-l-one-functions]]).

[F10] The integral is linear on $L^1$, satisfies $|\int f|\le\int|f|$, nonnegative integrals are monotone and scale, and a nonnegative measurable function has zero integral exactly when it vanishes almost everywhere ([[thm-linearity-of-the-lebesgue-integral-on-l-one]], [[thm-integral-triangle-inequality]], [[prop-order-and-scalar-rules-for-the-nonnegative-integral]], [[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]]).

[F11] Compact subsets of $\mathbb R^n$ are bounded and closed, and continuous real functions on compacta are bounded and attain extremes ([[thm-heine-borel-rn]], [[thm-extreme-value-metric]]).

[F12] The gradient, the coordinate partial derivatives, and the divergence and curl on $C^1$ fields are those fixed by the cited definitions; vector-valued one-variable derivatives and integrals are defined componentwise ([[def-jacobian-matrix-and-gradient]], [[def-directional-and-partial-derivatives]], [[def-divergence-and-curl-of-a-c1-vector-field]], [[def-vector-valued-derivative-and-integral]]).

[F13] The chain rule for total derivatives, the algebra of one-variable derivatives, equality of mixed second partials for $C^2$ functions, and the $C^k$ vocabulary hold as cited ([[thm-chain-rule-for-total-derivatives]], [[thm-algebra-of-derivatives]], [[thm-clairaut-schwarz-mixed-partials]], [[def-ck-euclidean-maps-and-diffeomorphisms]]).

[F14] The Euclidean inner product is bilinear and symmetric and the cross product is bilinear and alternating; in particular $n\times(n-\beta)=-n\times\beta$ ([[def-euclidean-inner-product]], [[def-cross-product-in-r3]], [[lem-cross-product-is-bilinear-alternating-and-orthogonal]]).

[F15] The divergence and curl obey $\operatorname{curl}(fF)=\nabla f\times F+f\operatorname{curl}F$ ([[lem-divergence-and-curl-are-linear-and-obey-the-scalar-product-rules]]).

[A1] The Axiom of Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]).

## Proof

**Proof technique:** direct.

1.1 Since $z$ is $C^3$, it is $C^1$, and $I:=\mathbb R$ is open; the graph map $s\mapsto(z(s),s)$ into $\Omega=\mathbb R^3\times\mathbb R$ is proper because a compact subset of $\Omega$ has bounded time coordinate, so its inverse image in $\mathbb R$ is closed and bounded. Hence [F1] applies with $q,\varepsilon_0$ as given: the functionals $\rho,J$ of the Statement are distributions on $\Omega$ and $\partial_t\rho+\operatorname{div}J=0$, which is (a). [given, F1, F11]

1.2 Finiteness and bounds for the history pairings. Fix $\psi\in\mathcal D(\Omega)$; by compactness of its support choose reals $M\ge0$ and $t_0\le t_1$ with $\operatorname{supp}\psi\subseteq\{(x,t):|x|\le M,\ t_0\le t\le t_1\}$, and put $A_\psi:=\sup|\psi|<\infty$, $Z:=|z(0)|$, $S:=\max\{0,(M+Z-ct_0)/(c-v_*)\}$, $H:=\max\{S,|t_1|\}$, $L:=1+M+Z+v_*H$, $T:=\max\{0,t_1+S\}$ and $M_Q:=T\sigma(S^2)L^2/(8\pi)$. If $g(s,w):=(z(s)+w,s+|w|/c)$ lies in $\operatorname{supp}\psi$, then $s\le t_1$; and for $s\le0$ the bound $|z(s)|\le Z+v_*|s|$ gives $t_0\le s+|w|/c\le-(1-v_*/c)|s|+(M+Z)/c$, so $s\ge-S$. Also $|w|\le M+|z(s)|\le M+Z+v_*H<L$. Therefore $\bigl|\langle\Phi,\psi\rangle\bigr|\le\frac{|q|}{\varepsilon_0}\int_{-S}^{t_1}\frac{1}{4\pi}\int_{B_L}\frac{A_\psi}{|w|}\,dw\,ds\le\frac{|q|M_Q A_\psi}{\varepsilon_0}$, and componentwise $\bigl|\langle\Upsilon_j,\psi\rangle\bigr|\le\mu_0|q|v_*M_Q A_\psi$. These bounds are fixed-support seminorms, so $\Phi$ and the components of $\Upsilon$ are distributions. [given, F3, F5, F6, F10, F11, A1]

1.3 The retarded substitution map. Put $U:=\mathbb R\times(\mathbb R^3\setminus\{0\})$, $V:=\Omega\setminus\Gamma$ and $g(s,w):=(z(s)+w,\,s+|w|/c)$. Then $V$ is open: $\Gamma$ is closed, since a convergent sequence $(z(s_j),s_j)\to(x,t)$ has $s_j\to t$, hence $x=z(t)$ by continuity. The map $g:U\to V$ is a bijection with inverse $(x,t)\mapsto(s(x,t),x-z(s(x,t)))$: the root $s(x,t)$ of [F2] exists, satisfies $x-z(s)\ne0$ exactly off the worldline, and $s(x,t)$ is $C^1$ there because $z$ is $C^3$; conversely no image point lies on $\Gamma$, for $|w|=|z(t)-z(s)|\le v_*|t-s|=v_*|w|/c$ is impossible for $w\ne0$. The map is $C^1$ with derivative matrix (in the order $s,w_1,w_2,w_3$) whose last row is $(1,w/(c|w|))$ and whose first column is $(z'(s),1)$ with the identity in the remaining block; expanding along the last row gives $\det Dg(s,w)=-1+z'(s)\cdot w/(c|w|)=-\kappa(s,w)$, so $|\det Dg|=\kappa$, and $\kappa\ge1-v_*/c>0$ by [F2]. If $g(s,w)=g(s',w')$ then $|s-s'|=||w'|-|w||/c\le|z(s')-z(s)|/c\le(v_*/c)|s-s'|$, hence $s=s'$ and $w=w'$. By [F9], for every nonnegative Borel $h$ on $V$ one has $\int_Vh=\int_Uh(g)\kappa\,ds\,dw$, and for every $f\in L^1(V)$, $\int_Vf=\int_Uf(g)\kappa\,ds\,dw$. [given, F2, F9, F13, F14]

1.4 Retarded derivative identities. On $V$, with $s=s(x,t)$ the root of [F2]: $s_t=1/\kappa$ and $\nabla s=-n/(c\kappa)$. Hence $r_t=n\cdot(-z'(s)s_t)=-cN/\kappa$ and $\nabla r=n/\kappa$; $R_t=-z'(s)s_t=-c\beta/\kappa$ and $\partial_iR=e_i+\beta n_i/\kappa$; $\beta_t=\dot\beta s_t=\dot\beta/\kappa$ and $\partial_i\beta=\dot\beta\,\partial_is=-\dot\beta n_i/(c\kappa)$. Since $\kappa=1-N$ and $D=\kappa r=r-R\cdot\beta$, the product rules with the bilinearity of the inner product give $D_t=r_t-R_t\cdot\beta-R\cdot\beta_t=(c(|\beta|^2-N)-rd)/\kappa$ and, componentwise, $\partial_iD=\partial_ir-(\partial_iR)\cdot\beta-R\cdot\partial_i\beta=n_i(1-|\beta|^2+rd/c)/\kappa-\beta_i$, that is, $\nabla D=\bigl((1-|\beta|^2+rd/c)/\kappa\bigr)n-\beta$. [given, F2, F12, F13, F14]

1.5 The needed triple-product identity follows directly from the coordinate definition in [F14]. For arbitrary $a,b,u\in\mathbb R^3$, the first component of $a\times(b\times u)$ is $a_2(b_1u_2-b_2u_1)-a_3(b_3u_1-b_1u_3)=b_1(a_2u_2+a_3u_3)-u_1(a_2b_2+a_3b_3)=b_1(a\cdot u)-u_1(a\cdot b)$, since the terms $b_1a_1u_1-u_1a_1b_1$ cancel. Cyclic permutation gives the other two components, so $a\times(b\times u)=b(a\cdot u)-u(a\cdot b)$. With $a=n$, $b=n-\beta$, $u=\dot\beta$ this gives $n\times((n-\beta)\times\dot\beta)=d(n-\beta)-\kappa\dot\beta$, since $n\cdot n=1$. [F14, algebra]

2.1 Scalar pairing identity. Insert the kernel identity [F3] into the definition of $\Phi$: $\langle\Phi,\psi\rangle=\frac{q}{4\pi\varepsilon_0}\int_{\mathbb R}\int_{\mathbb R^3}\psi(g(s,w))|w|^{-1}\,dw\,ds$. The double integral is absolutely convergent by the cylinder estimate of step 1.2, so Fubini's theorem reorders it, and the substitution identity of step 1.3 for the $L^1$ function $\psi/(\kappa r)$ on $V$ (whose absolute integral is finite by the same cylinder estimate) turns it into $\langle\Phi,\psi\rangle=\int_V\frac{C\psi(x,t)}{\kappa(x,t)r(x,t)}\,dx\,dt$, since $r(g(s,w))=|w|$, $\kappa(g(s,w))=\kappa(s,w)$ and the Jacobian factor $\kappa$ cancels $\kappa^{-1}$. [step 1.2, step 1.3, F3, F7, F9, F10]

2.2 Vector pairing identity. Componentwise, $\langle\Upsilon_j,\psi\rangle=\frac{\mu_0q}{4\pi}\int_{\mathbb R}\int_{\mathbb R^3}z_j'(s)\psi(g(s,w))|w|^{-1}\,dw\,ds$; the double integral is absolutely bounded by $\mu_0|q|v_*$ times the scalar majorant of step 1.2, Fubini applies, and the substitution of step 1.3 gives $\langle\Upsilon_j,\psi\rangle=\frac{\mu_0qc}{4\pi}\int_V\frac{\beta_j\psi}{\kappa r}\,dx\,dt$, where $\beta_j(s)=\beta_j(g(s,w))$ and $z_j'=c\beta_j$. Since $\frac{\mu_0qc}{4\pi}=\mu_0\varepsilon_0c\cdot\frac{q}{4\pi\varepsilon_0}=\frac{C}{c}\cdot c^2\mu_0\varepsilon_0=\frac{C}{c}$, this is $\langle\Upsilon_j,\psi\rangle=\int_V\frac{\beta_j(x,t)}{c}\frac{C\psi}{\kappa r}\,dx\,dt$. [step 1.2, step 1.3, F3, F7, F9, F10, F14]

3.1 Potentials and regular distributions. By [F2] the root is $C^3$ off the worldline, so $r,n$ are $C^3$, $\beta$ is $C^2$, $\kappa$ is $C^2$ and $D=\kappa r$ is $C^2$ with $D>0$ on $V$; hence $\varphi=C/D$ and $A=\beta\varphi/c$ are of class $C^2$ on $V$, and the identities of steps 2.1 and 2.2 read $\langle\Phi,\psi\rangle=\int_V\varphi\psi$ and $\langle\Upsilon_j,\psi\rangle=\int_V A_j\psi$ for every test $\psi$. The graph $\Gamma$ is closed, hence Borel, and null: for each time $t$ its spatial section $\{z(t)\}$ is a singleton, so Tonelli together with the product identification of Euclidean measure gives $\lambda_4(\Gamma)=\int_{\mathbb R}\lambda_3(\{z(t)\})\,dt=0$. Therefore $\int_V\varphi\psi=\int_\Omega\widetilde\varphi\,\psi$ and $\int_VA_j\psi=\int_\Omega\widetilde A_j\psi$ for the zero extensions. Finally $\widetilde\varphi,\widetilde A$ are locally integrable: for a compact $Q\subseteq\Omega$ the substitution identity of step 1.3 and the cylinder bound of step 1.2 give $\int_\Omega|\widetilde\varphi|\mathbf 1_Q\le |C|\int_U\mathbf 1_Q(g)|w|^{-1}ds\,dw\le4\pi |C|\,M_{Q'}$ with $M_{Q'}=T'\sigma(S^2)L'^2/(8\pi)<\infty$ for the window constants of $Q$. Hence the regular functionals of $\widetilde\varphi,\widetilde A$ are distributions and $\Phi=u_{\widetilde\varphi}$, $\Upsilon=u_{\widetilde A}$. [step 1.2, step 1.3, step 2.1, step 2.2, F2, F5, F7, F8, F9, F10]

4.1 The electric field. On $V$, $\nabla\varphi=-C\nabla D/D^2$, $\varphi_t=-CD_t/D^2$ and $A=\beta\varphi/c$, so $A_t=(\dot\beta\varphi/\kappa+\beta\varphi_t)/c=\dot\beta C/(c\kappa D)-\beta CD_t/(cD^2)$ and $E=-\nabla\varphi-A_t=\frac{C}{D^2}\bigl(\nabla D+\frac{\beta D_t}{c}\bigr)-\frac{C\dot\beta}{c\kappa D}$. Substituting the identities of step 1.4, the bracket equals $\frac{1}{\kappa}\bigl(1-|\beta|^2+\frac{rd}{c}\bigr)(n-\beta)$, so $E=C\frac{(1-|\beta|^2)(n-\beta)+rd(n-\beta)/c}{\kappa^3r^2}-\frac{C\dot\beta}{c\kappa D}=\frac{C}{\kappa^3r^2}\Bigl[(1-|\beta|^2)(n-\beta)+\frac{r}{c}\bigl(d(n-\beta)-\kappa\dot\beta\bigr)\Bigr]$, using $D=\kappa r$ to write the second summand over the common denominator. The cross-product identity $n\times((n-\beta)\times\dot\beta)=d(n-\beta)-\kappa\dot\beta$ of step 1.5 then gives the displayed electric field. [step 1.4, step 1.5, step 3.1, F4, F12, F13, F14]

5.1 The magnetic field and regularity. By [F15] and the chain rule, $\operatorname{curl}A=\nabla(\varphi/c)\times\beta+(\varphi/c)\operatorname{curl}\beta$ with $\operatorname{curl}\beta=\nabla s\times\dot\beta$, so $\operatorname{curl}A=-\frac{C\nabla D\times\beta}{cD^2}-\frac{C\,n\times\dot\beta}{c^2\kappa^2r}$. Substituting $\nabla D$ from step 1.4 and using $n\times(n-\beta)=-n\times\beta$ gives $\operatorname{curl}A=-C\bigl[\frac{1-|\beta|^2+rd/c}{c\kappa^3r^2}(n\times\beta)+\frac{n\times\dot\beta}{c^2\kappa^2r}\bigr]$. Crossing the field of step 4.1 with $n/c$ gives the same expression, because $n\times n=0$, $n\times(n-\beta)=-n\times\beta$ and $n\times(d(n-\beta)-\kappa\dot\beta)=-d(n\times\beta)-\kappa(n\times\dot\beta)$; hence $B=n\times E/c$. Since for $z\in C^3$ the root is $C^3$ and $\nabla D,D_t,\beta,\dot\beta,\kappa,r,n$ are as in step 1.4 with $\kappa r>0$ on $V$, both displayed fields are $C^1$ on $V$; the same computation with a $C^k$ trajectory uses the $C^k$ root branch of [F2] and gives $C^{k-2}$ fields, and the smooth branch gives smooth fields. [step 1.4, step 4.1, F2, F4, F13, F14, F15] ∎

## Remarks

- **Choice accounting.** $\mathrm{AC}_\omega$ is used through the polar formula and the two change-of-variables theorems (step 1.3 and the polar bound of step 1.2); the root lemma, the current continuity and the algebraic computations are choice-free as stated in their own items.

- **What the retarded selection does and does not do.** The pairings select the retarded history $s<t$ through the kernel $K$ and the root of [F2]. No statement is made about exactly two solutions, about arbitrary nonzero Cauchy data, about finite self-energy or about a self-force law; the fields are computed from the stipulated potential pair off the worldline only.

- **Signs.** The conventions $E=-\nabla\varphi-\partial_tA$, $B=\operatorname{curl}A$ and $C=q/(4\pi\varepsilon_0)$, $\mu_0=(c^2\varepsilon_0)^{-1}$ are those fixed in [F4] and the Statement; the formula for $B$ is the consequence $B=n\times E/c$, not an independent convention.
