---
id: thm-single-hidden-layer-universal-approximation
kind: theorem
title: "Single-hidden-layer universal approximation"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - def-absolutely-continuous-with-respect-to-a-positive-measure
  - def-activation-class-locally-essentially-bounded-ae-continuous
  - def-calligraphic-l-p-on-a-measure-space
  - def-essential-supremum-with-respect-to-a-measure
  - def-l-infinity-on-a-measure-space
  - def-countable-choice
  - def-l-p-space-as-a-quotient-by-null-functions
  - def-measure
  - def-single-hidden-layer-network
  - thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space
  - thm-finite-measure-l-r-includes-into-l-p-for-p-less-r
  - thm-heine-borel-rn
  - thm-extreme-value-metric
  - thm-reals-cauchy-complete
  - thm-lebesgue-measure-of-a-box-of-every-kind
  - thm-lebesgue-inner-regularity-by-closed-and-compact-sets
  - thm-littlewood-characterisations-of-lebesgue-measurability
  - thm-borel-sets-are-lebesgue-measurable
  - lem-continuous-functions-dense-in-lp-for-compactly-supported-finite-borel-measures
  - lem-linear-ridge-pullback-of-null-sets-is-null
  - lem-nonzero-real-polynomial-zero-set-is-lebesgue-null
  - lem-polynomial-activation-bounded-degree-obstruction
  - lem-rough-nonpolynomial-activation-universal-on-compact-sets
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Leshno, Lin, Pinkus, and Schocken, Multilayer Feedforward Networks With a Non-Polynomial Activation Function Can Approximate Any Function, Definitions 3–5, Theorem 1, and complete proof in §6"
      url: "https://archive.nyu.edu/bitstream/2451/14329/1/IS-92-13.pdf"
    - title: "Kurt Hornik, Approximation Capabilities of Multilayer Feedforward Networks, Theorems 1–2 and complete proofs"
      url: "https://web.njit.edu/~usman/courses/cs675_fall18/hornik-nn-1991.pdf"
    - title: "Ian Goodfellow, Yoshua Bengio, and Aaron Courville, Deep Learning, §6.4.1"
      url: "https://www.deeplearningbook.org/contents/mlp.html"
---

## Statement

Assume Countable Choice. Fix $d\ge1$ and use the finite scalar single-hidden-layer family

$$\mathcal N_\sigma^{(d)}=\left\{x\mapsto c+\sum_{j=1}^m a_j\sigma(w_j\cdot x+b_j):m\in\mathbb N_0,\ c,a_j,b_j\in\mathbb R,\ w_j\in\mathbb R^d\right\}.$$

For every compact $K\subseteq\mathbb R^d$, if $\sigma\in\mathcal M_{\mathrm{pt}}$ is not equal almost everywhere to a polynomial, then $\mathcal N_\sigma^{(d)}$ is uniformly dense in $C(K,\mathbb R)$. More generally, if $\sigma\in\mathcal M$ is not polynomial almost everywhere, this family is dense for the essential-supremum seminorm on each such $K$ with respect to $d$-dimensional Lebesgue measure. If instead $\sigma$ agrees almost everywhere with a polynomial of degree at most $q$ for some $q\in\mathbb N_0$ (including the zero polynomial), the family is not uniformly dense on the segment $\{te_1:0\le t\le1\}$, and is not dense in the Lebesgue essential-supremum seminorm on $[0,1]^d$. Thus pointwise compact-uniform density for $\mathcal M_{\mathrm{pt}}$, and essential-supremum density for $\mathcal M$, each hold on every compact set if and only if $\sigma$ is not polynomial almost everywhere.

Let $1<p<\infty$, and let $\mu$ be a finite regular Borel measure concentrated on a compact $K\subseteq\mathbb R^d$ and absolutely continuous with respect to Lebesgue measure. Form the real $L^p(\mu)$ space using the Borel $\sigma$-algebra. For $\sigma\in\mathcal M$, a network is interpreted in this space through any Borel representative agreeing with it outside a Lebesgue-null set; these representatives exist, are integrable on $K$, and give a unique $L^p(\mu)$ class. This convention does not alter the actual pointwise network used in the uniform clause. For $\sigma\in\mathcal M$ and $\mu(\mathbb R^d)>0$, $\mathcal N_\sigma^{(d)}$ is dense in $L^p(\mu;\mathbb R)$ if and only if $\sigma$ is not polynomial almost everywhere. If $\mu=0$, then $L^p(\mu;\mathbb R)=\{0\}$ and the network family is dense for every $\sigma\in\mathcal M$, including polynomial activations.

These are existence statements without a quantitative width bound. They imply neither trainability nor statistical generalization, and compact-uniform approximation does not mean uniform approximation on all of $\mathbb R^d$.

## Statement references

[Leshno et al., Definitions 3–5, Theorem 1, and the complete proof in §6](https://archive.nyu.edu/bitstream/2451/14329/1/IS-92-13.pdf)

[Hornik, Approximation Capabilities of Multilayer Feedforward Networks, Theorems 1–2 and proofs](https://web.njit.edu/~usman/courses/cs675_fall18/hornik-nn-1991.pdf)

[Goodfellow et al., Deep Learning, §6.4.1: scope and non-quantitative warning](https://www.deeplearningbook.org/contents/mlp.html)

## Facts & Assumptions

**Given:** Countable Choice, $d\ge1$, a compact set $K$, an activation $\sigma$, and—when the $L^p$ clause is used—a finite regular Borel measure $\mu$ with $\mu\ll\lambda_d$, and $1<p<\infty$.

[F1] $\mathcal M$ consists of measurable, locally essentially bounded activations whose discontinuity-set closure is null; $\mathcal M_{\mathrm{pt}}$ additionally requires pointwise local boundedness ([[def-activation-class-locally-essentially-bounded-ae-continuous]]).

[F2] The network family is the scalar finite sum of affine ridge units with an output bias ([[def-single-hidden-layer-network]]).

[F3] Every nonpolynomial-almost-everywhere activation in $\mathcal M_{\mathrm{pt}}$ gives pointwise compact-uniform density ([[lem-rough-nonpolynomial-activation-universal-on-compact-sets]]).

[F4] Real-valued continuous functions restricted from $C_c(\mathbb R^d,\mathbb R)$ are dense in real $L^p(\mu)$ for finite regular compactly supported measures and $1\le p<\infty$ ([[lem-continuous-functions-dense-in-lp-for-compactly-supported-finite-borel-measures]]).

[F5] Nonconstant affine pullbacks of one-dimensional null sets are $d$-dimensional Lebesgue null ([[lem-linear-ridge-pullback-of-null-sets-is-null]]).

[F6] A nonzero real polynomial on $\mathbb R^d$ has a Lebesgue-null zero set ([[lem-nonzero-real-polynomial-zero-set-is-lebesgue-null]]).

[F7] If $\sigma$ is polynomial almost everywhere, single-hidden-layer networks fail uniform density on a compact segment ([[lem-polynomial-activation-bounded-degree-obstruction]]).

[F8] $L^p(\mu)$ identifies functions equal $\mu$-almost everywhere, and $\mu\ll\lambda_d$ means every Lebesgue-null set is $\mu$-null ([[def-calligraphic-l-p-on-a-measure-space]], [[def-l-p-space-as-a-quotient-by-null-functions]], [[def-absolutely-continuous-with-respect-to-a-positive-measure]]).

[F9] Closed bounded subsets of finite-dimensional Euclidean space are compact ([[thm-heine-borel-rn]]).

[F10] A measure is a nonnegative countably additive set function on a sigma-algebra; since $\mu$ is concentrated on $K$, countable additivity on $K\sqcup(\mathbb R^d\setminus K)$ gives $\mu(\mathbb R^d)=\mu(K)$ ([[def-measure]]).

[F11] For $1\le p\le\infty$, the quotient $L^p(\mu)$ has the norm induced by its integral or essential-supremum functional, and the norm satisfies the triangle inequality ([[thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space]]).

[F12] On a finite measure space, every essentially bounded function belongs to $L^p$ and $\|h\|_p\le\mu(X)^{1/p}\|h\|_\infty$ for $1\le p<\infty$; a pointwise bound $|h|\le M$ on the compact set carrying $\mu$ implies $\|h\|_\infty\le M$ ([[thm-finite-measure-l-r-includes-into-l-p-for-p-less-r]], [[def-essential-supremum-with-respect-to-a-measure]]).

[F13] A continuous real-valued function on a nonempty compact metric space attains its minimum ([[thm-extreme-value-metric]]).

[F14] Every Cauchy sequence of real numbers converges ([[thm-reals-cauchy-complete]]).

[F15] Under Countable Choice, the Lebesgue measure of $[0,1]^d$ is $1$ ([[thm-lebesgue-measure-of-a-box-of-every-kind]]).

[F16] Under Countable Choice, every Lebesgue measurable subset of $\mathbb R$ is an $F_\sigma$ set together with an outer-null set ([[thm-littlewood-characterisations-of-lebesgue-measurability]]).

[F17] Under Countable Choice every Borel subset of $\mathbb R^d$ is Lebesgue measurable ([[thm-borel-sets-are-lebesgue-measurable]]).

[F18] Under Countable Choice, for every Lebesgue measurable set $E$ of finite measure and $\varepsilon>0$ there is a compact $F\subseteq E$ with $\lambda_d(E\setminus F)<\varepsilon$ ([[thm-lebesgue-inner-regularity-by-closed-and-compact-sets]]).

[A1] Countable Choice means every sequence of nonempty sets has a function choosing one element from each ([[def-countable-choice]]).

## Proof

1.1 If $\sigma\in\mathcal M_{\mathrm{pt}}$ is nonpolynomial almost everywhere, [F3] proves pointwise uniform density on every compact $K$. If $\sigma$ is polynomial almost everywhere, [F7] gives a specific compact segment on which density fails. [given, F3, F7]

1.2 Now let $\sigma\in\mathcal M$ and put $C=\overline{D_\sigma}$, its closed null discontinuity set. Definition [F1] supplies the local essential bound and null-closure hypotheses. Define $\widetilde\sigma=\sigma$ off $C$ and $\widetilde\sigma=0$ on $C$. This is measurable and equals $\sigma$ almost everywhere. For a compact interval $J$, choose a larger compact interval $J'$ containing $J$ in its interior and an essential bound $M_{J'}$ for $\sigma$ there. At any $t\in J\setminus C$, continuity of $\sigma$ implies $|\sigma(t)|\le M_{J'}$: a strict violation would, by continuity, give an interval of positive measure inside $J'$ on which $|\sigma|>M_{J'}$. Thus $\widetilde\sigma$ is pointwise locally bounded; outside $C$ it is continuous, so the closure of its discontinuities is contained in $C$. It belongs to $\mathcal M_{\mathrm{pt}}$; if $\sigma$ is nonpolynomial almost everywhere, so is $\widetilde\sigma$. For any nonconstant affine form $T(x)=w\cdot x+b$ and any Lebesgue measurable $A\subseteq\mathbb R$, [F16] writes $A=H\cup W$ with $H$ an $F_\sigma$ set and $W$ outer null. Then $T^{-1}(H)$ is Borel, hence Lebesgue measurable by [F17], and $T^{-1}(W)$ is measurable and null by [F5]. Thus $\sigma\circ T$ is Lebesgue measurable, as is every finite network; constant affine forms give constant measurable units. This makes the essential-supremum seminorm in the Statement well-defined for raw networks. [given, F1, F5, F16, F17, A1, algebra]

1.3 For the converse, suppose $\sigma=p_0$ almost everywhere for a polynomial $p_0$ of degree $q$. By [F5] and [F8], every nonconstant unit equals $p_0(w_j\cdot x+b_j)$ for $\mu$-almost every $x$; constant-input units can be absorbed into the output bias. Hence every network represents, in $L^p(\mu)$, a polynomial of total degree at most $q$. [given, F2, F5, F8, A1, algebra]

2.1 For any finite $\widetilde\sigma$-network, a unit with $w_j\ne0$ differs from the corresponding $\sigma$-unit only on the null pullback $\{x:w_j\cdot x+b_j\in C\}$, null by [F5]. Replace the output bias by $c+\sum_{w_j=0}a_j(\widetilde\sigma(b_j)-\sigma(b_j))$ to absorb the constant-input units. The resulting $\sigma$-network equals the $\widetilde\sigma$-network almost everywhere in $\mathbb R^d$, and hence defines the same Borel $L^p(\mu)$ class under the representative convention when $\mu\ll\lambda_d$. For nonpolynomial-almost-everywhere $\sigma$, applying [F3] to $\widetilde\sigma$ and transferring these approximants proves essential-supremum density for $\mathcal M$ on every compact $K$. [step 1.2, F3, F5, F8, A1, algebra]

2.2 Assume $\mu(K)>0$ and let $P_q$ be the vector space of real polynomials in $d$ variables of total degree at most $q$. In a monomial basis its coefficient space is $\mathbb R^s$ for some finite $s\ge1$, with its Euclidean norm. Every monomial is bounded on compact $K$, so for coefficient vectors $a,b$ one has $\sup_K|P_a-P_b|\le\sum_{|\alpha|\le q}|a_\alpha-b_\alpha|\sup_K|x^\alpha|$, which tends to zero as $a-b\to0$. By [F12], $\|P_a-P_b\|_{L^p(\mu)}\le\mu(K)^{1/p}\sup_K|P_a-P_b|$; the reverse triangle inequality from [F11] therefore makes $P\mapsto\|P\|_{L^p(\mu)}$ continuous in the coefficients. For a nonzero coefficient vector, $P$ is a nonzero polynomial; by [F6] its zero set is Lebesgue null, hence $\mu$-null by [F8]. If its $L^p$ norm were zero, [F11] would make its class zero, so $P=0$ $\mu$-almost everywhere. This would give $\mu(K\setminus\{P=0\})=0$, whereas [F8] and [F10] give $\mu(K\setminus\{P=0\})=\mu(K)>0$, a contradiction. Thus the norm is positive on the coefficient unit sphere. That sphere is nonempty and compact by [F9], and [F13] gives a minimum $a>0$; homogeneity yields $\|P\|_{L^p(\mu)}\ge a|\operatorname{coeff}(P)|$. Any $L^p$-Cauchy sequence in $P_q$ therefore has Cauchy coefficient vectors. By [F14], their finitely many coordinates converge to those of a polynomial $P\in P_q$; the coefficient estimate above and [F12] imply convergence to $P$ in $L^p$. If a class lies in the closure of $P_q$, Countable Choice [A1] supplies a sequence from $P_q$ converging to it; the preceding argument and uniqueness of norm limits [F11] put that class in $P_q$. Hence $P_q$ is closed in $L^p(\mu)$. [step 1.3, F6, F8, F9, F10, F11, F12, F13, F14, A1, algebra]

3.1 To justify the Borel convention, $C$ is closed, $\widetilde\sigma=0$ on $C$, and $\widetilde\sigma$ is continuous on the open complement of $C$, so $\widetilde\sigma$ is Borel measurable. For any raw $\sigma$-network $N$, replace only its nonconstant units by $\widetilde\sigma$-units and keep each constant-input value $a_j\sigma(b_j)$ in the output bias. The resulting Borel function $N^*$ is bounded on $K$ by pointwise local boundedness of $\widetilde\sigma$ and compactness of each affine image. It equals $N$ outside the finite union of the closed Lebesgue-null sets $\{x:w_j\cdot x+b_j\in C\}$ with $w_j\ne0$, by [F5]. Hence $N^*$ lies in $L^p(\mu)$. Any two Borel representatives of $N$ agreeing with it Lebesgue-almost everywhere differ on a Borel Lebesgue-null set, which is $\mu$-null by [F8], so they define the same class. This also justifies the polynomial representatives in step 1.3 and the transfers in step 2.1 without assuming raw networks are Borel measurable. [step 1.2, step 1.3, step 2.1, F2, F5, F8, algebra]

3.2 The polynomial $r(x)=x_1^{q+1}$ is not in $P_q$ modulo $\mu$-almost-everywhere equality: for every $P\in P_q$, $r-P$ is a nonzero polynomial, so [F6]–[F8] imply $\mu(\{x\in K:r(x)=P(x)\})=0<\mu(K)$. Thus the closed subspace $P_q$ is proper and cannot be dense. Step 1.3 places the whole network family inside it, proving failure of $L^p$ density for polynomial-almost-everywhere activations. [step 1.3, step 2.2, F6, F8, A1, algebra]

4.1 Suppose $\mu(K)>0$. By [F10], $\mu$ is a measure, and the real Borel $L^p$ convention is fixed in the Statement. To prove the positive $L^p$ sufficiency, choose any real class $[f]\in L^p(\mu;\mathbb R)$ and $\varepsilon>0$. By [F4], choose $u\in C_c(\mathbb R^d,\mathbb R)$ with $\|f-u\|_{L^p(\mu)}<\varepsilon/2$. Apply [F3] to $\widetilde\sigma$ on $K$ to choose a network $N_{\widetilde\sigma}$ with $\sup_{x\in K}|N_{\widetilde\sigma}(x)-u(x)|<\varepsilon/(2\mu(K)^{1/p})$. By step 2.1 replace it by a $\sigma$-network equal $\mu$-almost everywhere. Using the Borel representative supplied by steps 2.1 and 3.1, equality of classes and [F12] give $\|N-u\|_{L^p(\mu)}=\|N_{\widetilde\sigma}-u\|_{L^p(\mu)}\le\mu(K)^{1/p}\sup_K|N_{\widetilde\sigma}-u|$. The triangle inequality [F11] yields $\|N-f\|_{L^p(\mu)}<\varepsilon$. [step 2.1, step 3.1, F3, F4, F8, F10, F11, F12, A1, choose, algebra]

5.1 If $\mu=0$, every measurable real function represents the zero class in $L^p(\mu;\mathbb R)$, and the network family contains zero by width zero and output bias zero. Thus it is dense regardless of $\sigma$. Together with steps 4.1 and 3.2, this proves the stated $L^p$ equivalence and its zero-measure boundary. [given, step 4.1, step 3.2, F2, F8, F10, A1, algebra]


6.1 Let $K=[0,1]^d$, which is compact by [F9], and define $\mu(A)=\lambda_d(A\cap K)$ for Borel $A$. By [F15], $\mu(K)=1$. This is a finite Borel measure concentrated on $K$ and absolutely continuous with respect to $\lambda_d$. It is regular: inner regularity follows by applying [F18] to $A\cap K$; for outer regularity, apply [F18] to $K\setminus A$ to choose a compact $F\subseteq K\setminus A$ with $\lambda_d((K\setminus A)\setminus F)<\varepsilon$, and use the open set $\mathbb R^d\setminus F\supseteq A$, for which $\mu((\mathbb R^d\setminus F)\setminus A)<\varepsilon$. Thus this $\mu$ satisfies the theorem's measure hypotheses. If a polynomial-almost-everywhere activation gave essential-supremum approximation to every continuous target there, [F12] and $\mu(K)=1$ would turn those approximations into $L^p(\mu)$ approximations, contradicting step 3.2 for $f(x)=x_1^{q+1}$. This proves the essential-supremum obstruction on the cube and completes both compact-set equivalences. [step 3.2, F9, F12, F15, F18] ∎

## Remarks

The absolute-continuity hypothesis in the $L^p$ equivalence is essential to this interface. Positivity of an arbitrary measure is insufficient: for $\mu=\delta_0$, every $L^p(\mu)$ class is specified by one real value, and the output bias alone realizes every such value even with the polynomial activation $\sigma=1$.

The broad class $\mathcal M$ concerns actual representatives, including their values on the closed null discontinuity set. Its essential-supremum conclusion cannot be replaced by a pointwise supremum conclusion. On a Lebesgue-null compact set the essential-supremum seminorm is zero, so that clause makes no assertion about approximation at individual points there.
