---
id: thm-single-hidden-layer-universal-approximation
kind: theorem
title: "Single-hidden-layer universal approximation"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - def-absolutely-continuous-with-respect-to-a-positive-measure
  - def-activation-class-locally-essentially-bounded-ae-continuous
  - def-calligraphic-l-p-on-a-measure-space
  - def-countable-choice
  - def-l-p-space-as-a-quotient-by-null-functions
  - def-measure
  - def-single-hidden-layer-network
  - thm-heine-borel-rn
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

For every compact $K\subseteq\mathbb R^d$, if $\sigma\in\mathcal M_{\mathrm{pt}}$ is not equal almost everywhere to a polynomial, then $\mathcal N_\sigma^{(d)}$ is uniformly dense in $C(K,\mathbb R)$. More generally, if $\sigma\in\mathcal M$ is not polynomial almost everywhere, this family is dense for the essential-supremum seminorm on each such $K$ with respect to $d$-dimensional Lebesgue measure. If instead $\sigma$ agrees almost everywhere with a polynomial of degree at most $q$ for some $q\in\mathbb N_0$ (including the zero polynomial), the family is not uniformly dense on the segment $\{te_1:0\le t\le1\}$.

Let $1<p<\infty$, and let $\mu$ be a finite regular Borel measure concentrated on a compact $K\subseteq\mathbb R^d$ and absolutely continuous with respect to Lebesgue measure. Form the real $L^p(\mu)$ space using the Borel $\sigma$-algebra. For $\sigma\in\mathcal M$ and $\mu(\mathbb R^d)>0$, $\mathcal N_\sigma^{(d)}$ is dense in $L^p(\mu;\mathbb R)$ if and only if $\sigma$ is not polynomial almost everywhere. If $\mu=0$, then $L^p(\mu;\mathbb R)=\{0\}$ and the network family is dense for every activation, including polynomial activations.

These are existence statements without a quantitative width bound. They imply neither trainability nor statistical generalization, and compact-uniform approximation does not mean uniform approximation on all of $\mathbb R^d$.

## Statement references

[Leshno et al., Definitions 3–5, Theorem 1, and the complete proof in §6](https://archive.nyu.edu/bitstream/2451/14329/1/IS-92-13.pdf)

[Hornik, Approximation Capabilities of Multilayer Feedforward Networks, Theorems 1–2 and proofs](https://web.njit.edu/~usman/courses/cs675_fall18/hornik-nn-1991.pdf)

[Goodfellow et al., Deep Learning, §6.4.1: scope and non-quantitative warning](https://www.deeplearningbook.org/contents/mlp.html)

## Facts & Assumptions

**Given:** Countable Choice, $d\ge1$, a compact set $K$, an activation $\sigma$, and—when the $L^p$ clause is used—a finite regular Borel measure $\mu$ with $\mu(K)>0$, $\mu\ll\lambda_d$, and $1<p<\infty$.

[F1] $\mathcal M$ consists of measurable, locally essentially bounded activations whose discontinuity-set closure is null; $\mathcal M_{\mathrm{pt}}$ additionally requires pointwise local boundedness ([[def-activation-class-locally-essentially-bounded-ae-continuous]]).

[F2] The network family is the scalar finite sum of affine ridge units with an output bias ([[def-single-hidden-layer-network]]).

[F3] Every nonpolynomial-almost-everywhere activation in $\mathcal M_{\mathrm{pt}}$ gives pointwise compact-uniform density ([[lem-rough-nonpolynomial-activation-universal-on-compact-sets]]).

[F4] Real-valued continuous functions restricted from $C_c(\mathbb R^d,\mathbb R)$ are dense in real $L^p(\mu)$ for finite regular compactly supported measures and $1\le p<\infty$ ([[lem-continuous-functions-dense-in-lp-for-compactly-supported-finite-borel-measures]]).

[F5] Nonconstant affine pullbacks of one-dimensional null sets are $d$-dimensional Lebesgue null ([[lem-linear-ridge-pullback-of-null-sets-is-null]]).

[F6] A nonzero real polynomial on $\mathbb R^d$ has a Lebesgue-null zero set ([[lem-nonzero-real-polynomial-zero-set-is-lebesgue-null]]).

[F7] If $\sigma$ is polynomial almost everywhere, single-hidden-layer networks fail uniform density on a compact segment ([[lem-polynomial-activation-bounded-degree-obstruction]]).

[F8] $L^p(\mu)$ identifies functions equal $\mu$-almost everywhere, and $\mu\ll\lambda_d$ means every Lebesgue-null set is $\mu$-null ([[def-calligraphic-l-p-on-a-measure-space]], [[def-l-p-space-as-a-quotient-by-null-functions]], [[def-absolutely-continuous-with-respect-to-a-positive-measure]]).

[F9] Closed bounded subsets of finite-dimensional Euclidean space are compact ([[thm-heine-borel-rn]]).

[F10] A measure is a nonnegative countably additive set function on a sigma-algebra ([[def-measure]]).

[A1] Countable Choice means every sequence of nonempty sets has a function choosing one element from each ([[def-countable-choice]]).

## Proof

1.1 If $\sigma\in\mathcal M_{\mathrm{pt}}$ is nonpolynomial almost everywhere, [F3] proves pointwise uniform density on every compact $K$. If $\sigma$ is polynomial almost everywhere, [F7] gives a specific compact segment on which density fails. [given, F3, F7]

1.2 Now let $\sigma\in\mathcal M$ and put $C=\overline{D_\sigma}$, its closed null discontinuity set. Definition [F1] supplies the local essential bound and null-closure hypotheses. Define $\widetilde\sigma=\sigma$ off $C$ and $\widetilde\sigma=0$ on $C$. This is measurable and equals $\sigma$ almost everywhere. On a compact interval $J$, choose an essential bound $M_J$ for $\sigma$. At any $t\in J\setminus C$, continuity of $\sigma$ implies $|\sigma(t)|\le M_J$: a strict violation would, by continuity, give an interval of positive measure on which $|\sigma|>M_J$. Thus $\widetilde\sigma$ is pointwise locally bounded; outside $C$ it is continuous, so the closure of its discontinuities is contained in $C$. It belongs to $\mathcal M_{\mathrm{pt}}$ and remains nonpolynomial almost everywhere. [given, F1, A1, algebra]

1.3 For the converse, suppose $\sigma=p_0$ almost everywhere for a polynomial $p_0$ of degree $q$. By [F5] and [F8], every nonconstant unit equals $p_0(w_j\cdot x+b_j)$ for $\mu$-almost every $x$; constant-input units can be absorbed into the output bias. Hence every network represents, in $L^p(\mu)$, a polynomial of total degree at most $q$. [given, F2, F5, F8, A1, algebra]

2.1 For any finite $\widetilde\sigma$-network, a unit with $w_j\ne0$ differs from the corresponding $\sigma$-unit only on the null pullback $\{x:w_j\cdot x+b_j\in C\}$, null by [F5]. Replace the output bias by $c+\sum_{w_j=0}a_j(\sigma(b_j)-\widetilde\sigma(b_j))$ to absorb the constant-input units. The resulting $\sigma$-network equals the $\widetilde\sigma$-network almost everywhere in $\mathbb R^d$, and hence also $\mu$-almost everywhere when $\mu\ll\lambda_d$. Applying [F3] to $\widetilde\sigma$ and transferring these approximants proves essential-supremum density for $\mathcal M$ on every compact $K$. [step 1.2, F3, F5, F8, A1, algebra]

2.2 Let $P_q$ be the vector space of real polynomials in $d$ variables of total degree at most $q$. In a monomial basis its coefficient space is finite dimensional. The map $P\mapsto\|P\|_{L^p(\mu)}$ is continuous in the coefficients because $K$ is compact and $\mu$ is finite. It is strictly positive on every nonzero coefficient vector: by [F6] its zero set is Lebesgue null, hence $\mu$-null by [F8], while $\mu(K)>0$. The coefficient unit sphere is closed and bounded, hence compact by [F9]; the norm map has a positive minimum $a$ there, so $\|P\|_{L^p(\mu)}\ge a|\operatorname{coeff}(P)|$. Any $L^p$-Cauchy sequence in $P_q$ has Cauchy coefficients and converges to a polynomial in $P_q$, so $P_q$ is closed in $L^p(\mu)$. [step 1.3, F6, F8, F9, F10, A1, algebra]

3.1 Suppose $\mu(K)>0$. By [F10], $\mu$ is a measure, and the real Borel $L^p$ convention is fixed in the Statement. To prove the positive $L^p$ sufficiency, choose any real class $[f]\in L^p(\mu;\mathbb R)$ and $\varepsilon>0$. By [F4], choose $u\in C_c(\mathbb R^d,\mathbb R)$ with $\|f-u\|_{L^p(\mu)}<\varepsilon/2$. Apply [F3] to $\widetilde\sigma$ on $K$ to choose a network $N_{\widetilde\sigma}$ with $\sup_{x\in K}|N_{\widetilde\sigma}(x)-u(x)|<\varepsilon/(2\mu(K)^{1/p})$. By step 2.1 replace it by a $\sigma$-network equal $\mu$-almost everywhere. The inequality $\|N-u\|_{L^p(\mu)}\le\mu(K)^{1/p}\sup_K|N-u|$ and the triangle inequality yield $\|N-f\|_{L^p(\mu)}<\varepsilon$. [step 2.1, F3, F4, F8, F10, A1, choose, algebra]

3.2 The polynomial $r(x)=x_1^{q+1}$ is not in $P_q$ modulo $\mu$-almost-everywhere equality: for every $P\in P_q$, $r-P$ is a nonzero polynomial, so [F6]–[F8] imply $\mu(\{x\in K:r(x)=P(x)\})=0<\mu(K)$. Thus the closed subspace $P_q$ is proper and cannot be dense. Step 1.3 places the whole network family inside it, proving failure of $L^p$ density for polynomial-almost-everywhere activations. [step 1.3, step 2.2, F6, F8, A1, algebra]

4.1 If $\mu=0$, every measurable real function represents the zero class in $L^p(\mu;\mathbb R)$, and the network family contains zero by width zero and output bias zero. Thus it is dense regardless of $\sigma$. Together with steps 3.1 and 3.2, this proves the stated $L^p$ equivalence and its zero-measure boundary. [given, step 3.1, step 3.2, F2, F8, F10, A1, algebra] ∎

