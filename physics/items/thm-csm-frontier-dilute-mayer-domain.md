---
id: thm-csm-frontier-dilute-mayer-domain
kind: theorem
title: "The stable continuum Mayer pressure series converges in an explicit dilute disk"
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 1
deps:
  - def-csm-stable-superstable-continuum-interaction
  - lem-csm-frontier-stable-mayer-tree-bound
  - def-countable-choice
  - prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets
  - thm-tdmath-dominated-convergence
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-lebesgue-outer-measure-and-measurability-are-translation-invariant
  - thm-composition-with-borel-functions-preserves-measurability
  - thm-arithmetic-and-lattice-operations-preserve-measurability
  - thm-exponential-is-strictly-increasing
  - def-real-exponential-function-and-e
  - thm-exponential-addition-formula
  - def-complex-numbers-and-arithmetic
  - def-complex-exponential
  - thm-complex-exponential-addition-and-real-extension
  - thm-termwise-differentiation-of-complex-power-series
  - cor-continuous-functions-are-borel-measurable
  - def-extended-real-valued-measurable-function
  - def-borel-sigma-algebra
  - def-borel-sigma-algebra-on-the-extended-real-line
  - thm-borel-products-of-euclidean-spaces-are-euclidean-borel
  - thm-borel-sets-are-lebesgue-measurable
  - thm-lebesgue-measure-of-a-box-of-every-kind
  - thm-integral-triangle-inequality
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - cor-additivity-of-the-nonnegative-lebesgue-integral
  - def-complex-conjugate-real-imaginary-part-and-modulus
  - lem-complex-conjugation-and-modulus-laws
  - lem-complex-modulus-of-real-embedding-equals-real-absolute-value
  - def-abs-value
  - lem-of-abs-value
  - def-sum-over-a-finite-index-set
justified_by: []
dependency_roles:
  def-csm-stable-superstable-continuum-interaction: mathematical-premise
  lem-csm-frontier-stable-mayer-tree-bound: mathematical-premise
  def-countable-choice: mathematical-premise
  prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets: mathematical-premise
  thm-tdmath-dominated-convergence: mathematical-premise
  thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
  thm-lebesgue-outer-measure-and-measurability-are-translation-invariant: mathematical-premise
  thm-composition-with-borel-functions-preserves-measurability: mathematical-premise
  thm-arithmetic-and-lattice-operations-preserve-measurability: mathematical-premise
  thm-exponential-is-strictly-increasing: mathematical-premise
  def-real-exponential-function-and-e: mathematical-premise
  thm-exponential-addition-formula: mathematical-premise
  def-complex-numbers-and-arithmetic: mathematical-premise
  def-complex-exponential: mathematical-premise
  thm-complex-exponential-addition-and-real-extension: mathematical-premise
  thm-termwise-differentiation-of-complex-power-series: mathematical-premise
  cor-continuous-functions-are-borel-measurable: mathematical-premise
  def-extended-real-valued-measurable-function: mathematical-premise
  def-borel-sigma-algebra: mathematical-premise
  def-borel-sigma-algebra-on-the-extended-real-line: mathematical-premise
  thm-borel-products-of-euclidean-spaces-are-euclidean-borel: mathematical-premise
  thm-borel-sets-are-lebesgue-measurable: mathematical-premise
  thm-lebesgue-measure-of-a-box-of-every-kind: mathematical-premise
  thm-integral-triangle-inequality: mathematical-premise
  prop-order-and-scalar-rules-for-the-nonnegative-integral: mathematical-premise
  cor-additivity-of-the-nonnegative-lebesgue-integral: mathematical-premise
  def-complex-conjugate-real-imaginary-part-and-modulus: mathematical-premise
  lem-complex-conjugation-and-modulus-laws: mathematical-premise
  lem-complex-modulus-of-real-embedding-equals-real-absolute-value: mathematical-premise
  def-abs-value: mathematical-premise
  lem-of-abs-value: mathematical-premise
  def-sum-over-a-finite-index-set: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
physical_scope: null
empirical_premises: []
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
sources:
  references:
    - title: "Suren Poghosyan and Daniel Ueltschi, Abstract cluster expansion with applications to statistical mechanical systems"
      url: "https://arxiv.org/pdf/0811.4281"
      locator: "§3, classical gas and explicit convergence condition, PDF pp. 4–5; §6, Proposition 6.1(a), PDF pp. 11–14; §7, Theorem 2.1 proof, PDF pp. 15–17."
    - title: "Aldo Procacci and Sergio A. Yuhjtman, Convergence of Mayer and Virial expansions and the Penrose tree-graph identity"
      url: "https://arxiv.org/pdf/1508.07379"
      locator: "§2.1, Theorem 0, equations (2.8)–(2.11); §2.2, Proposition 1, equation (2.18); §3 tree-graph identity and proof of Proposition 1; §4 Mayer coefficient integration and pressure-series bound."
---

## Statement

Assume the Axiom of Countable Choice. All displayed integrals use Lebesgue measure. All indices $n,N$ below range over $\mathbb N$. Fix $d\in\mathbb N$ with $d\geq1$, an even Borel pair potential $v:\mathbb R^d\to\mathbb R\cup\{+\infty\}$ with no $-\infty$ values, stable with constant $B\in\mathbb R$, $B\geq0$, and inverse parameter $\beta\in\mathbb R$ with $\beta>0$. Put $e^{-c(+\infty)}=0$ for every $c>0$, $f_\beta(x)=e^{-\beta v(x)}-1$, and $C_\beta=\int_{\mathbb R^d}|f_\beta(x)|\,dx<\infty$. For each $n\in\mathbb N$ with $n\geq2$, use

$$U_n(x_1,\ldots,x_n):=\sum_{G\in\mathcal C_n}\prod_{\{i,j\}\in E(G)}f_\beta(x_i-x_j),$$

where $\mathcal C_n$ is the set of connected simple graphs on $\{1,\ldots,n\}$; set $U_1=1$. For $L\in\mathbb R$ with $L>0$, let $\Lambda_L=[-L,L]^d$ and write $|\Lambda_L|:=\lambda_d(\Lambda_L)=(2L)^d$; define

$$\Xi_L(z):=\sum_{N=0}^{\infty}\frac{z^N}{N!}\int_{\Lambda_L^N}\exp\!\left(-\beta\sum_{1\leq i<j\leq N}v(x_i-x_j)\right)\,dx_1\cdots dx_N,$$

with the $N=0$ term equal to $1$. Set $b_1(L)=1$ and, for $n\geq2$,

$$b_n(L):=\frac1{n!|\Lambda_L|}\int_{\Lambda_L^n}U_n(x_1,\ldots,x_n)\,dx_1\cdots dx_n.$$

Also set $b_1=1$ and, for $n\geq2$,

$$b_n:=\frac1{n!}\int_{(\mathbb R^d)^{n-1}}U_n(0,x_2,\ldots,x_n)\,dx_2\cdots dx_n.$$

Let $\mathcal D=\{z\in\mathbb C:|z|e^{2\beta B+1}C_\beta<1\}$ when $C_\beta>0$, and let $\mathcal D=\mathbb C$ when $C_\beta=0$. On $\mathcal D$, the finite-volume connected pressure series $p_L(z):=\sum_{n\geq1}b_n(L)z^n$ and the limiting Mayer pressure series $p(z):=\sum_{n\geq1}b_nz^n$ converge absolutely and locally uniformly, are differentiable term by term, and satisfy

$$\Xi_L(z)=\exp\!\bigl(|\Lambda_L|p_L(z)\bigr),\qquad \lim_{L\to\infty}p_L(z)=p(z).$$

The convergence and derivative limits are uniform on every compact subdisc of $\mathcal D$. The pressure limit here is along centered cubes only.

## Statement references

[[def-csm-stable-superstable-continuum-interaction]]

[[lem-csm-frontier-stable-mayer-tree-bound]]

## Facts & Assumptions

**Given:** The potential, stability constant, inverse parameter, Mayer integrability, and Countable Choice stated above.

[F1] [[def-csm-stable-superstable-continuum-interaction]]: $v$ is even Borel with values in $\mathbb R\cup\{+\infty\}$, and stability means $\sum_{i<j}v(x_i-x_j)\geq-BN$ for every finite list of $N$ positions. Borel measurability means that preimages of target Borel sets are domain Borel sets, with $\mathcal B(\mathbb R^d)$ generated by Euclidean open sets and $\mathcal B(\overline{\mathbb R})$ the order Borel sigma-algebra ([[def-borel-sigma-algebra]], [[def-borel-sigma-algebra-on-the-extended-real-line]]).

[F2] [[lem-csm-frontier-stable-mayer-tree-bound]]: each $U_n$ is real-valued, $|U_n(x_1,\ldots,x_n)|\leq e^{2\beta Bn}\sum_{T\in\mathcal T_n}\prod_{\{i,j\}\in E(T)}|f_\beta(x_i-x_j)|$, and the pinned integral is at most $e^{2\beta Bn}n^{n-2}C_\beta^{n-1}$; graph components are maximal path-connected induced subgraphs, so every finite graph decomposes into a unique partition of its vertices into connected components; the tree count $n^{n-2}$ is proved by Prüfer words.

[F3] [[def-countable-choice]] and [[prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]]: under Countable Choice, Lebesgue measure is sigma-finite and finite on bounded sets.

[F4] [[thm-tdmath-dominated-convergence]]: a.e. convergence under an integrable majorant permits passage of the limit through the integral.

[F5] [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]: absolutely integrable functions on sigma-finite product spaces may be integrated in either order.

[F6] [[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]]: Lebesgue measure and measurability are invariant under translations.

[F7] [[def-real-exponential-function-and-e]] and [[thm-exponential-addition-formula]]: $e^x=\sum_{k\geq0}x^k/k!$ and $e^{x+y}=e^xe^y$ on $\mathbb R$.

[F8] [[def-complex-numbers-and-arithmetic]], [[def-complex-exponential]], and [[thm-complex-exponential-addition-and-real-extension]]: the complex exponential is defined by its everywhere convergent power series and satisfies $\exp(u+v)=\exp(u)\exp(v)$.

[F9] [[thm-termwise-differentiation-of-complex-power-series]]: a complex power series differentiates term by term strictly inside its radius of convergence.

[F10] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]: nonnegative product-measurable functions on sigma-finite product spaces may be integrated in either order.

[F11] [[thm-composition-with-borel-functions-preserves-measurability]] and [[thm-arithmetic-and-lattice-operations-preserve-measurability]]: Borel composition and finite arithmetic preserve measurability wherever the operations are defined.

[F12] [[thm-exponential-is-strictly-increasing]]: the real exponential is continuous and increasing.

[F13] [[cor-continuous-functions-are-borel-measurable]]: under Countable Choice, continuous maps between Euclidean spaces are Borel measurable.

[F14] [[def-extended-real-valued-measurable-function]] and [[def-borel-sigma-algebra-on-the-extended-real-line]]: the extended real line carries its order Borel sigma-algebra, and $\{+\infty\}$ is Borel.

[F15] [[thm-borel-products-of-euclidean-spaces-are-euclidean-borel]]: for two Euclidean factors, the product Borel sigma-algebra equals the Borel sigma-algebra of the product Euclidean space.

[F16] [[thm-borel-sets-are-lebesgue-measurable]]: under Countable Choice, every Borel subset of $\mathbb R^d$ is Lebesgue measurable.

[F17] [[thm-lebesgue-measure-of-a-box-of-every-kind]]: every box in $\mathbb R^d$ has its product-of-side-lengths measure, including $|[-L,L]^d|=(2L)^d$.

[F18] [[thm-integral-triangle-inequality]]: for an integrable function, the modulus of its integral is at most the integral of its modulus.

[F19] [[prop-order-and-scalar-rules-for-the-nonnegative-integral]]: the nonnegative integral is monotone and homogeneous under nonnegative scalar multiplication.

[F20] [[cor-additivity-of-the-nonnegative-lebesgue-integral]]: the integral of a sum of nonnegative measurable functions is the sum of their integrals.

[F21] [[def-complex-conjugate-real-imaginary-part-and-modulus]] and [[lem-complex-conjugation-and-modulus-laws]]: $|x+iy|=\sqrt{x^2+y^2}$; complex modulus is nonnegative and multiplicative. The canonical real-embedding identity is stated in [[lem-complex-modulus-of-real-embedding-equals-real-absolute-value]]. Its current imported carrier is marked `published` and has `provenance.proof: ai-generated`, but records only `verification.precheck: pass`, with no `verification.audited` or `verification.verified`; the format pass does not evidence proof acceptance.

[F22] [[def-abs-value]], [[lem-of-abs-value]]: real absolute value is defined piecewise by sign and is nonnegative and multiplicative.

[F23] [[def-sum-over-a-finite-index-set]]: sums over finite sets are enumeration-independent finite sums, with empty sum $0$.

[A1] Assume Countable Choice, as required for sigma-finite Lebesgue products, Tonelli and Fubini.

## Proof

**Given:** [F1], [F2], [F3], [F4], [F5], [F6], [F7], [F8], [F9], [F10], [F11], [F12], [F13], [F14], [F15], [F16], [F17], [F18], [F19], [F20], [A1], and the definitions in the Statement.

1.1 For every $N$-point configuration, the energy $E_N=\sum_{i<j}v(x_i-x_j)$ is an extended-real Borel function: coordinate differences are continuous and hence Borel [F13], composition with $v$ preserves Borel measurability [F11], and finite sums preserve it wherever defined. The map $u\mapsto e^{-\beta u}$ on the extended real line, assigned $0$ at $+\infty$ and $+\infty$ at $-\infty$, is Borel because it is continuous on $\mathbb R$ [F12] and the endpoints are Borel [F14]. Thus the Boltzmann integrand is Borel on $\mathbb R^{dN}$. For $N\geq2$, repeated application of the two-factor product identity [F15] identifies the finite product Borel sigma-algebra; the Borel-to-Lebesgue inclusion [F16] then makes the integrand product-measurable. For $N=0$ or $1$ the same measurability is immediate from the empty or one-factor product. The same extended exponential map and the Borel potential show that $f_\beta$ is Borel. Stability [F1] gives $E_N\geq-BN$, so the Boltzmann integrand is real, nonnegative and at most $e^{\beta BN}$, with a forbidden $+\infty$ configuration contributing $0$. Since $|\Lambda_L|=(2L)^d<\infty$ [F17], multiplicativity of complex modulus and its agreement with real absolute value [F21] bound the modulus of the $N$th term of $\Xi_L(z)$ by $(|z|e^{\beta B}|\Lambda_L|)^N/N!$. The sum of these bounds is finite for every $z$ by [F7], so $\Xi_L$ is entire. [A1, F1, F3, F7, F11, F12, F13, F14, F15, F16, F17, F21, given, algebra]

1.2 Stability at $N=2$ gives $v(x)\geq-2B$ for every $x\in\mathbb R^d$; hence $-1\leq f_\beta(x)\leq e^{2\beta B}-1$ by [F12]. Thus for each fixed $N$ every graph term in the finite expansion $\prod_{i<j}(1+f_\beta(x_i-x_j))$ is bounded and measurable on the finite-measure box $\Lambda_L^N$. Expanding the product gives a sum over all simple graphs; each graph decomposes uniquely into connected components as in [F2]. If the component sizes are $m_1,\ldots,m_k$, assigning the $N$ labels to an ordered list of blocks contributes $N!/\prod_jm_j!$, and division by $k!$ removes block order. Integrating a product over disjoint coordinate blocks factorizes by Fubini [F5], since the factors are bounded on finite-measure boxes. Therefore the coefficient of $z^N$ in $\Xi_L$ equals that in the formal exponential of $A_L(z):=\sum_{n\geq1}\frac{z^n}{n!}\int_{\Lambda_L^n}U_n(x_1,\ldots,x_n)\,dx_1\cdots dx_n$. [A1, F1, F2, F5, F11, F12, F17, F23, given, algebra]

1.3 For $n\geq2$, integrate the pointwise tree estimate [F2] over $\Lambda_L^n$. Root each tree at vertex $1$, then remove leaves other than the root. At each removal the leaf integral over $\Lambda_L$ is at most the whole-space integral $C_\beta$ by monotonicity [F19] and translation invariance [F6]; Tonelli [F10] applies to the nonnegative tree products. The final root integral is $|\Lambda_L|$. The labelled-tree count in [F2] is $n^{n-2}$. Finite additivity [F20] sums those tree integrals, giving $\int_{\Lambda_L^n}|U_n|\leq e^{2\beta Bn}|\Lambda_L|n^{n-2}C_\beta^{n-1}$. Thus $U_n$ is integrable on $\Lambda_L^n$. Regard its real values as complex values by the real embedding; [F21] identifies the complex modulus with real absolute value, so the integral triangle inequality [F18] gives $|b_n(L)|\leq e^{2\beta Bn}n^{n-2}C_\beta^{n-1}/n!$. The same bound holds for $|b_n|$ by the pinned estimate [F2]. [A1, F2, F3, F6, F10, F18, F19, F20, F21, F22, F17, given, algebra]

1.4 Fix $n\geq2$ and write $y_1=0$, $y_i=x_i-x_1$ for $i\geq2$. Translation invariance of $U_n$ gives $U_n(x_1,\ldots,x_n)=U_n(0,y_2,\ldots,y_n)$. By Tonelli [F10], translation invariance [F6], and the pinned integrability from [F2], $\int_{\Lambda_L^n}|U_n(x)|dx=\int_{(\mathbb R^d)^{n-1}}|U_n(0,y)|\,|\Lambda_L\cap(\Lambda_L-y_2)\cap\cdots\cap(\Lambda_L-y_n)|dy\leq|\Lambda_L|\int|U_n(0,y)|dy<\infty$, using the finite cube volume [F17]. Thus the integrand is absolutely integrable and Fubini [F5] applies. Translating each remaining coordinate in its section gives $b_n(L)=\frac1{n!}\int_{(\mathbb R^d)^{n-1}}U_n(0,y_2,\ldots,y_n)\theta_L(y)\,dy_2\cdots dy_n$, where $\theta_L(y)=\frac{|\Lambda_L\cap(\Lambda_L-y_2)\cap\cdots\cap(\Lambda_L-y_n)|}{|\Lambda_L|}=\prod_{j=1}^d(1-\frac{\max_i y_{i,j}-\min_i y_{i,j}}{2L})_+$, with $r_+=\max(r,0)$. For each fixed $y$, $0\leq\theta_L(y)\leq1$ and $\theta_L(y)\to1$. The cube-intersection volume formula follows from [F17]; $U_n$ is Borel by [F11, F13, F14, F15, F16], hence measurable. For every sequence $L_m\to\infty$, dominated convergence [F4] with majorant $|U_n(0,\cdot)|$ gives $b_n(L_m)\to b_n$. If the limit as a real variable $L\to\infty$ failed, some $\epsilon>0$ would have $|b_n(L)-b_n|\geq\epsilon$ for arbitrarily large $L$; Countable Choice [A1] selects such an $L_m\geq m$ for each $m$, contradicting the sequential conclusion. Hence $b_n(L)\to b_n$. [A1, F2, F3, F4, F5, F6, F10, F11, F13, F14, F15, F16, F17, given]

2.1 For every integer $n\geq2$, the positive series for $e^n$ in [F7] contains the term $n^n/n!$, so $n^{n-2}/n!\leq e^n/n^2$. If $C_\beta>0$, put $q(r)=rC_\beta e^{2\beta B+1}$. For $0<r$ with $q(r)<1$, step 1.3 yields $|b_n(L)|r^n\leq r e^{2\beta B+1}q(r)^{n-1}/n^2$ and $n|b_n(L)|r^{n-1}\leq e^{2\beta B+1}q(r)^{n-1}/n$; the same bounds hold for $b_n$. Both majorant series converge. If $C_\beta=0$, step 1.3 gives $b_n(L)=b_n=0$ for $n\geq2$. Each $U_n$ is real-valued by [F2], so each coefficient $b_n(L),b_n$ is real; [F21] identifies its complex-embedding modulus with its real absolute value and gives $|z^n|=|z|^n$. Hence the coefficient and derivative majorants bound the complex power-series terms on the corresponding closed subdiscs. Thus the pressure series and their formal derivative series converge uniformly on every closed subdisc strictly inside $\mathcal D$; [F9] identifies the derivatives with the termwise derivatives. [F2, F7, F9, F21, step 1.3, algebra]

3.1 The coefficient identity in step 1.2 is the formal identity $\Xi_L=\exp(A_L)$, and $A_L(z)=|\Lambda_L|p_L(z)$ by the definitions of $b_n(L)$. Fix a volume $L>0$ and a radius $r$ strictly inside $\mathcal D$. Step 2.1 gives $\sum_n|b_n(L)|r^n<\infty$, so $\sum_n|[z^n]A_L|r^n=|\Lambda_L|\sum_n|b_n(L)|r^n<\infty$ for this fixed volume. Expanding the complex exponential in [F8], the sum of absolute values of all terms is bounded by $\exp(\sum_n|[z^n]A_L|r^n)$; hence its products and coefficient sums may be regrouped, so the formal identity is an equality of convergent series and $\Xi_L(z)=\exp(|\Lambda_L|p_L(z))$. To pass to the limit on a compact subdisc $|z|\leq r$ inside $\mathcal D$, the pressure and derivative tails are uniformly bounded in $L$ by the convergent majorants of step 2.1. For each fixed $n$, step 1.4 gives coefficient convergence; finite partial sums and their derivatives therefore converge uniformly, and the uniform tail bounds give $p_L\to p$ and $p_L'\to p'$ uniformly there. [F8, F9, step 1.1, step 1.2, step 1.4, step 2.1] ∎


This result gives a sufficient dilute analyticity domain. It does not assert liquid-vapor coexistence, identify a physical phase boundary, or establish pressure limits along arbitrary shapes.

## Remarks

This result gives a sufficient dilute analyticity domain. It does not assert liquid-vapor coexistence, identify a physical phase boundary, or establish pressure limits along arbitrary shapes.

