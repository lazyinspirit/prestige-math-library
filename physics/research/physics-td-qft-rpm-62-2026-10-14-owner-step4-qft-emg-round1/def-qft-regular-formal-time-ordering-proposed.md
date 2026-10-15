---
id: def-qft-regular-formal-time-ordering
kind: definition
title: Regular time-ordered contraction coefficients
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 6
deps:
  - def-qft-regular-polynomial-functional-algebra
  - lem-qft-tensor-test-function-density
  - def-test-function-space-d-of-an-open-set
  - def-test-function-topology
  - def-distribution
  - def-schwartz-space-and-its-seminorms
  - def-schwartz-topology-and-convergence
  - def-tempered-distribution
  - thm-continuous-on-a-rectangle-is-riemann-integrable
  - thm-tensor-product-distributions-and-iterated-pairings
  - lem-distribution-pairing-with-smooth-parameter-families
  - lem-qft-free-time-ordered-kernel
dependency_roles:
  def-qft-regular-polynomial-functional-algebra: mathematical-premise
  lem-qft-tensor-test-function-density: mathematical-premise
  def-test-function-space-d-of-an-open-set: mathematical-premise
  def-test-function-topology: mathematical-premise
  def-distribution: mathematical-premise
  def-schwartz-space-and-its-seminorms: mathematical-premise
  def-schwartz-topology-and-convergence: mathematical-premise
  def-tempered-distribution: mathematical-premise
  thm-continuous-on-a-rectangle-is-riemann-integrable: mathematical-premise
  thm-tensor-product-distributions-and-iterated-pairings: mathematical-premise
  lem-distribution-pairing-with-smooth-parameter-families: mathematical-premise
  lem-qft-free-time-ordered-kernel: mathematical-premise
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Klaus Fredenhagen and Katarzyna Rejzner, Perturbative algebraic quantum field theory, complete lecture notes, sections 5–7
      url: https://arxiv.org/html/1208.1428
      locator: Complete 42-page notes, section 5, equations (56)–(64), section 6, equations (71)–(76), and section 7, condition T3 and equations (79)–(83), on regular contraction products, time ordering and causal factorization.
    - title: David Tong, Quantum Field Theory, complete author-hosted Cambridge lecture notes, chapter 3
      url: https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S3.html
      locator: Complete HTML chapter 3, sections 3.1.1 and 3.3.1–3.3.2, equations (3.221)–(3.245), on time ordering, Dyson coefficients and Wick contractions.
---

## Definition

Fix $\mu\ge0$ and the $(-+++)$, shell, Fourier, and coordinate conventions
of [[lem-qft-free-time-ordered-kernel]]. That current supplier states that
its relative-coordinate tempered distribution $H_\mu$ is symmetric, agrees
with the ordered Wightman kernels on strictly ordered time supports and on
spacelike-separated supports, and has no prefactor $i$ in its definition.
Its current carrier is a draft with a supplied conditional proof; the formula
below uses that exact interface. Complex integrals of compactly supported
regular kernels use the componentwise Riemann convention in
[[def-qft-regular-polynomial-functional-algebra]]: write the integrand as its
real part plus $i$ times its imaginary part and integrate each real component.

For open $\Omega\subseteq\mathbb R^m$, $\mathcal D(\Omega)$ is the space
of smooth compactly supported complex tests with the LF topology, and
$\mathcal D'(\Omega)$ is its continuous complex-linear dual, paired
bilinearly with no conjugation
([[def-test-function-space-d-of-an-open-set]], [[def-test-function-topology]],
[[def-distribution]]). Schwartz space consists of smooth functions with all
polynomially weighted derivatives bounded; $\mathcal S'$ is its continuous
complex-linear dual with bilinear pairing
([[def-schwartz-space-and-its-seminorms]],
[[def-schwartz-topology-and-convergence]], [[def-tempered-distribution]]).

For any relative-coordinate distribution $K\in\mathcal S'(\mathbb R^4)$,
define its translation-invariant two-point bidistribution
$\widetilde K\in\mathcal D'(\mathbb R^4\times\mathbb R^4)$ by
$$ \langle\widetilde K,\Psi\rangle =\left\langle K,\ z\longmapsto\int_{\mathbb R^4}\Psi(y+z,y)\,dy\right\rangle, \qquad \Psi\in\mathcal D(\mathbb R^4\times\mathbb R^4). $$
The inner function is a test function: its support lies in the difference
of the two compact coordinate projections of $\operatorname{supp}\Psi$;
each derivative in $z$ is the Riemann integral of the corresponding
first-variable derivative of $\Psi$ over a compact rectangle containing
the fixed compact second-variable projection; iterate the real
single-coordinate differentiation rule over every derivative in $z$ and
apply it to both real components
([[thm-continuous-on-a-rectangle-is-riemann-integrable]]).
On each fixed compact support space, every output derivative seminorm is
bounded by the volume of a compact rectangle containing the second-variable
projection times the corresponding source derivative seminorm. The support
of the output lies in the compact difference of the two projections. Thus
this map is continuous on each fixed-support test space, and hence on the LF
test topology [[def-test-function-topology]].
Thus the displayed formula defines a distribution without multiplying
singular distributions. Write $\mathsf H_\mu=\widetilde H_\mu$.

For $F\in\mathcal P_{\mathrm{reg}}(\mathbb R^4)$, define its support as the
finite union of the coordinate projections of the supports of its nonconstant
symmetric coefficient kernels. This is a compact set and is presentation
independent by [[lem-qft-tensor-test-function-density]]. For compact
$A,B\subset\mathbb R^4$, write $A\succcurlyeq_{\mathrm{out}} B$ when
$$ x-y\notin C_-:=\{(t,\mathbf x)\in\mathbb R^4:t\le-|\mathbf x|\} \quad\text{for every }x\in A,\ y\in B. $$
This means the first support has no point in the closed causal past of the
second, using the supplier's fixed inertial chart.

Put $X:=\mathbb R^4$, the spacetime domain used throughout this definition. For $n\ge1$, let $\mathcal Q_n$ consist of finite coefficient families in
$n$ independent real smooth fields $\phi_1,\ldots,\phi_n$ of the form
$$Q(\phi_1,\ldots,\phi_n)=\sum_{\mathbf r}\int q_{\mathbf r}(\mathbf x^{(1)},\ldots,\mathbf x^{(n)})\prod_{i=1}^{n}\prod_{a=1}^{r_i}\phi_i(x_a^{(i)})\,d\mathbf x,$$
where $\mathbf r=(r_1,\ldots,r_n)\in\mathbb N_0^n$ ranges over a finite set,
$q_{\mathbf r}\in C_c^\infty(X^{r_1}\times\cdots\times X^{r_n};\mathbb C)$,
and each coefficient is symmetric within every block
$\mathbf x^{(i)}=(x_1^{(i)},\ldots,x_{r_i}^{(i)})$. The product
$\prod_iF_i(\phi_i)$ of regular polynomials is in $\mathcal Q_n$.

For $1\le i<j\le n$, define the one-pair contraction
$D_{\mathsf H}^{ij}:\mathcal Q_n\to\mathcal Q_n$ linearly and termwise on
each block coefficient $q_{\mathbf r}$. It is zero if $r_i=0$ or $r_j=0$;
otherwise it has multidegree $\mathbf r-\mathbf e_i-\mathbf e_j$ and
coefficient
$$q'_{\mathbf r-\mathbf e_i-\mathbf e_j}(\mathbf x')=r_i r_j\left\langle\mathsf H_\mu,(x,y)\longmapsto q_{\mathbf r}(\ldots,x,\ldots,y,\ldots)\right\rangle,$$
where $x$ occupies the first variable of block $i$, $y$ occupies the first
variable of block $j$, and the uncontracted variables $\mathbf x'$ are held
as parameters. The result remains symmetric within each remaining block.
The parameter-pairing theorem
[[lem-distribution-pairing-with-smooth-parameter-families]] makes this
coefficient smooth and compactly supported. The factor $r_i r_j$ counts the
choices of one variable from each symmetric block, so this is exactly one
functional derivative in each of the independent field slots followed by
pairing against $\mathsf H_\mu$.

For $r\ge1$, define full symmetrization by
$$\operatorname{Sym}_r h(x_1,\ldots,x_r)=\frac1{r!}\sum_{\pi\in S_r}h(x_{\pi(1)},\ldots,x_{\pi(r)}),$$
with $\operatorname{Sym}_0$ the identity. For $Q\in\mathcal Q_n$, define
$m_nQ$ by setting $\phi_1=\cdots=\phi_n=\phi$ and replacing each remaining
block coefficient by its full symmetrization across all variables. For a finite-degree $Q$, the
formal exponential is defined coefficientwise by
$$\exp\!\left(\eta\sum_{1\le i<j\le n}D_{\mathsf H}^{ij}\right)Q =\sum_{r\ge0}\frac{\eta^r}{r!}\left(\sum_{1\le i<j\le n}D_{\mathsf H}^{ij}\right)^rQ,$$
which terminates because each contraction lowers total degree by two. The
parameter $\eta$ is formal and fixed by complex conjugation. Define
$$ T_n^H(F_1,\ldots,F_n)(\phi) =m_n\exp\!\left(\eta\sum_{1\le i<j\le n}D_{\mathsf H}^{ij}\right) \prod_{i=1}^nF_i(\phi_i), \qquad T_0^H=1,\quad T_1^H(F)=F. $$
The tensor-product distribution theorem
[[thm-tensor-product-distributions-and-iterated-pairings]] and the
parameter-pairing theorem above make every contraction well defined; no
diagonal product occurs. Symmetry of $\mathsf H_\mu$ makes $T_n^H$ symmetric
in its inputs.

For any $V\in\mathcal P_{\mathrm{reg}}(\mathbb R^4)$ and formal coupling $z$,
define
$$ S_z^H(V)=\sum_{n=0}^{\infty}\frac{(iz/\eta)^n}{n!}\,T_n^H(V,\ldots,V) \quad\text{with coefficients in }\mathcal P_{\mathrm{reg}}(\mathbb R^4)[\eta,\eta^{-1}]. $$
This is a coefficientwise formal series; the definition asserts no
convergence in $z$, no time-ordered product for singular local functionals,
and no continuum interacting field.
