---
id: def-gr-periodic-torus-and-sobolev-spaces
kind: definition
title: "The 2 pi-periodic three-torus, its normalized measure, test functions and the Sobolev spaces H^s"
status: published
origin: session
domain: mathematics
dependency_level: 0
provenance:
  statement: ai-altered
  proof: not-applicable
proof_strategy: null
deps: [def-the-one-dimensional-torus-and-normalized-haar-integral, thm-tonelli-theorem-for-sigma-finite-product-spaces, def-complex-lp-and-euclidean-test-function-conventions, def-l-p-space-as-a-quotient-by-null-functions, thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space, lem-l-two-with-the-integral-pairing-is-a-hilbert-space, def-weak-derivative-of-a-locally-integrable-function, def-ck-and-multi-index-notation-in-several-variables, def-c-r-and-smooth-maps-between-smooth-manifolds, thm-fourier-basis-and-parseval-on-the-n-torus, def-countable-choice]
dependency_roles:
  def-the-one-dimensional-torus-and-normalized-haar-integral: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
  def-complex-lp-and-euclidean-test-function-conventions: mathematical-premise
  def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
  thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space: mathematical-premise
  lem-l-two-with-the-integral-pairing-is-a-hilbert-space: mathematical-premise
  def-weak-derivative-of-a-locally-integrable-function: mathematical-premise
  def-ck-and-multi-index-notation-in-several-variables: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  thm-fourier-basis-and-parseval-on-the-n-torus: mathematical-premise
  def-countable-choice: mathematical-premise
sources:
  references:
    - title: "M. E. Taylor, Fourier Analysis, Distributions, and Constant-Coefficient Linear PDE (UNC lecture notes, 2018), Section 1 (Fourier series on the torus T^n): characters, Fourier coefficients, the Parseval identity and convergence of the coefficient series"
      url: "https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/fourier.pdf"
    - title: "E. Wiedemann (ed. J. Skipper), Lecture Notes: Navier-Stokes Equations (Universitat Ulm, WS 2018/19), Section 2.1 (Fourier characterisation of the Sobolev spaces H^s(T^3), the continuous embedding H^s(T^3) into L-infinity and the Banach-algebra property for s>3/2) and Section 4.3 (Agmon's inequality)"
      url: "https://www.uni-ulm.de/fileadmin/website_uni_ulm/mawi.inst.020/skipper/NSEEmilFinished.pdf"
    - title: "J. K. Hunter, Notes on Partial Differential Equations (UC Davis lecture notes), Chapter 3 (Sobolev Spaces), Sections 3.1 (weak derivatives), 3.4 (properties of weak derivatives), 3.5 (Sobolev spaces), 3.7-3.8 (Sobolev embedding) and 3.10 (compactness results)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
verification:
  precheck: pending
---

## Definition

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$
([[def-countable-choice]]) for the quotient, product-measure and integration
clauses below, as in [[def-the-one-dimensional-torus-and-normalized-haar-integral]].

**(a) The 2 pi-periodic torus.** Let $\mathbb T_{2\pi}:=\mathbb R/2\pi\mathbb Z$
carry the quotient topology, and let
$$\mathbb T^3_{2\pi}:=\mathbb T_{2\pi}\times\mathbb T_{2\pi}\times\mathbb T_{2\pi}$$
with the product topology; write $q:\mathbb R^3\to\mathbb T^3_{2\pi}$ for the
quotient map and $[x]:=(x^1+2\pi\mathbb Z,x^2+2\pi\mathbb Z,x^3+2\pi\mathbb Z)$.
The map $[0,2\pi)^3\to\mathbb T^3_{2\pi}$, $x\mapsto[x]$, is a bijection. The
normalized product measure $\mu$ is $\mu_{\mathbb T}\otimes\mu_{\mathbb T}\otimes\mu_{\mathbb T}$,
where $\mu_{\mathbb T}$ is the normalized measure of
[[def-the-one-dimensional-torus-and-normalized-haar-integral]] transported by
$t\mapsto2\pi t$; it is a probability measure on the Borel sets of
$\mathbb T^3_{2\pi}$ and $\int f\,d\mu=(2\pi)^{-3}\int_{[0,2\pi)^3}f\circ q\,d\lambda_3$
for bounded measurable $f$ ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]]).

**(b) Test functions and continuous classes.** For $N\ge1$ let
$C^\infty(\mathbb T^3_{2\pi};\mathbb R^N)$ be the set of maps
$u:\mathbb T^3_{2\pi}\to\mathbb R^N$ whose pullbacks
$\widetilde u:=u\circ q:\mathbb R^3\to\mathbb R^N$ are smooth;
these are the **smooth test functions** (real-valued when $N=1$).
Equivalently every smooth map $\widetilde u:\mathbb R^3\to\mathbb R^N$
that is $2\pi$-periodic in each coordinate descends to the unique map
$u([x])=\widetilde u(x)$, since periodicity makes this value independent of
$x$ in its equivalence class. For an integer $m\ge0$, define
$C^m(\mathbb T^3_{2\pi};\mathbb R^N)$ similarly by requiring
$\widetilde u\in C^m(\mathbb R^3;\mathbb R^N)$
([[def-c-r-and-smooth-maps-between-smooth-manifolds]]), and define
$D^\alpha u([x]):=D^\alpha\widetilde u(x)$ for $|\alpha|\le m$.
Derivatives of a periodic $C^m$ map are periodic, so these values are
well-defined, with
$$\|u\|_{C^m}:=\max_{|\alpha|\le m}\ \sup_{x\in\mathbb T^3_{2\pi}}|(D^\alpha u)(x)|,$$
where the multi-index derivative is that of
[[def-ck-and-multi-index-notation-in-several-variables]].

**(c) The Hilbert space $L^2$.** For $N\ge1$ let
$L^2(\mathbb T^3_{2\pi};\mathbb R^N)$ be the quotient of the set of measurable
$u$ with $\int|u|^2\,d\mu<\infty$ by the $\mu$-a.e. zero functions
([[def-l-p-space-as-a-quotient-by-null-functions]],
[[thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space]]),
with inner product $\langle u,v\rangle_2=\int u\cdot v\,d\mu$ and norm
$\|u\|_2=\langle u,u\rangle_2^{1/2}$; it is a real Hilbert space
([[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]]). For
$u\in L^2(\mathbb T^3_{2\pi};\mathbb R^N)$ and $k\in\mathbb Z^3$ the
**$k$-th Fourier coefficient** is the vector
$$\widehat u(k):=\int_{\mathbb T^3_{2\pi}}u(x)\,e^{-ik\cdot x}\,d\mu(x)\in\mathbb C^N ,$$
where $e^{-ik\cdot x}:=\chi_{-k}$ with $\chi_k([x]):=\exp(i\,k\cdot x)$; here
$u$ is read through any representative. Write $\chi_k:\mathbb T^3_{2\pi}\to\mathbb C$,
$k\in\mathbb Z^3$, for these **characters**; under the identification
$x=2\pi y$ they are the characters $\exp(2\pi i\,k\cdot y)$ of
[[thm-fourier-basis-and-parseval-on-the-n-torus]], so $(\chi_k)_{k\in\mathbb Z^3}$
is an orthonormal basis of the complex space $L^2(\mathbb T^3_{2\pi};\mathbb C)$.

**(d) Weak derivatives and the periodic Sobolev spaces.** For
$u,v\in L^1(\mathbb T^3_{2\pi};\mathbb R)$ and $\alpha\in\mathbb N_0^3$ say that
$v$ is the **weak derivative** $D^\alpha u$ if
$$\int_{\mathbb T^3_{2\pi}}u\,D^\alpha\varphi\,d\mu=(-1)^{|\alpha|}\int_{\mathbb T^3_{2\pi}}v\,\varphi\,d\mu$$
for every $\varphi\in C^\infty(\mathbb T^3_{2\pi};\mathbb R)$, where $D^\alpha\varphi$
is the multi-index derivative of the periodic representative
([[def-weak-derivative-of-a-locally-integrable-function]] records the
Euclidean analogue). For an integer $s\ge0$ let
$$H^s(\mathbb T^3_{2\pi};\mathbb R^N):=\Bigl\{u\in L^2(\mathbb T^3_{2\pi};\mathbb R^N):\ \text{for every }|\alpha|\le s\text{ there is }v_\alpha\in L^2(\mathbb T^3_{2\pi};\mathbb R^N)\text{ with }v_\alpha=D^\alpha u\Bigr\},$$
the vector-valued weak derivative being componentwise, and put
$$\|u\|_{H^s}:=\Bigl(\sum_{|\alpha|\le s}\|D^\alpha u\|_2^2\Bigr)^{1/2}.$$
The classes $L^2\subseteq L^1$ on the probability space, so the integrals in the
test identity are finite: $|\int u\,D^\alpha\varphi\,d\mu|\le\|u\|_2\|D^\alpha\varphi\|_2$
by Cauchy--Schwarz. The definition asserts neither that the weak derivative
exists nor that the two norms compared in the next item are equivalent; those
are proved in [[lem-gr-periodic-fourier-differentiation-and-norm-equivalence]].

**(e) Conventions.** $O\subseteq\mathbb R^m$ open, $I\subseteq\mathbb R$ an
interval and maps $F:I\times\mathbb T^3_{2\pi}\times O\to\mathbb R^{m'}$ are
called smooth when the representative $G(t,x,u):=F(t,q(x),u)$ is
locally the restriction of a smooth Euclidean map: for every
$(t,x,u)\in I\times\mathbb R^3\times O$ there are an open neighborhood
$V\subseteq\mathbb R^{4+m}$ and $\widetilde G\in C^\infty(V;\mathbb R^{m'})$
with $\widetilde G=G$ on $V\cap(I\times\mathbb R^3\times O)$.
For open $I$ this is the ordinary Euclidean definition. For nonopen $I$
it is the local extension convention at included endpoints, also admitting
a singleton interval. On a nondegenerate interval endpoint time derivatives
are the limits of interior derivatives; on a singleton no time derivative
is specified without choosing an extension. Throughout this page the torus is always this
$2\pi$-periodic one; a statement "for every $x$" means for every point of
$\mathbb T^3_{2\pi}$, and "a.e." means $\mu$-a.e.
