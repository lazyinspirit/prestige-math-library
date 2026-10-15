---
id: lem-tdmath-particle-exponential-cutoff
kind: lemma
title: "Stability gives finite grand normalization and an exponential particle cutoff"
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 1
deps: [def-tdmath-stable-power-tempered-particle-model, def-tdmath-measure-integral, def-nonnegative-extended-series, def-lebesgue-measure-and-the-lebesgue-sigma-algebra, def-countable-choice, thm-borel-sets-are-lebesgue-measurable, prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets, thm-lebesgue-measure-of-a-box-of-every-kind, thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique, thm-borel-products-of-euclidean-spaces-are-euclidean-borel, def-extended-reals, def-borel-sigma-algebra-on-the-extended-real-line, def-extended-real-valued-measurable-function, cor-continuous-functions-are-borel-measurable, thm-composition-with-borel-functions-preserves-measurability, prop-closure-properties-of-measurable-functions-used-by-the-integral, def-real-exponential-function-and-e, lem-exponential-series-has-infinite-radius, thm-exponential-addition-formula, thm-exponential-is-strictly-increasing, def-factorial-and-falling-factorial, def-integer-power, lem-integer-part]
dependency_roles:
  def-tdmath-stable-power-tempered-particle-model: mathematical-premise
  def-tdmath-measure-integral: mathematical-premise
  def-nonnegative-extended-series: mathematical-premise
  def-lebesgue-measure-and-the-lebesgue-sigma-algebra: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-borel-sets-are-lebesgue-measurable: mathematical-premise
  prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets: mathematical-premise
  thm-lebesgue-measure-of-a-box-of-every-kind: mathematical-premise
  thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique: mathematical-premise
  thm-borel-products-of-euclidean-spaces-are-euclidean-borel: mathematical-premise
  def-extended-reals: mathematical-premise
  def-borel-sigma-algebra-on-the-extended-real-line: mathematical-premise
  def-extended-real-valued-measurable-function: mathematical-premise
  cor-continuous-functions-are-borel-measurable: mathematical-premise
  thm-composition-with-borel-functions-preserves-measurability: mathematical-premise
  prop-closure-properties-of-measurable-functions-used-by-the-integral: mathematical-premise
  def-real-exponential-function-and-e: mathematical-premise
  lem-exponential-series-has-infinite-radius: mathematical-premise
  thm-exponential-addition-formula: mathematical-premise
  thm-exponential-is-strictly-increasing: mathematical-premise
  def-factorial-and-falling-factorial: mathematical-premise
  def-integer-power: mathematical-premise
  lem-integer-part: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Stefan Adams, Mathematical Statistical Mechanics, MPI Lecture Note 30, §5.2"
      url: "https://files-www.mis.mpg.de/mpi-typo3/preprints/ln/lecturenote-3006.pdf"
    - title: "M. E. Fisher and J. L. Lebowitz, Asymptotic Free Energy of a System with Periodic Boundary Conditions, §§II–III, VI"
      url: "https://cmsr.rutgers.edu/images/people/lebowitz_joel/publications-archived/jll.pub_69.pdf"
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
---

## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$
([[def-countable-choice]]). Let $d\ge1$, let $\phi$ be a stable pair
potential as in [[def-tdmath-stable-power-tempered-particle-model]] with
stability constant $B$, and fix $a,\beta>0$. In fixed reference length and
energy units, put $\Lambda_L=[0,L]^d$ and define, for $N\ge1$,
$$Z_{L,N}:=\frac{a^N}{N!}\int_{\Lambda_L^N}e^{-\beta U_N(q_1,\ldots,q_N)}\,d\lambda_d^{\otimes N},$$
where $\lambda_d$ is Lebesgue measure restricted to the Borel subsets of
$\mathbb R^d$, $\lambda_d^{\otimes N}$ is its $N$-fold product measure. The
integrand uses the ordinary real exponential when $U_N<+\infty$ and is defined
to be $0$ when $U_N=+\infty$. Also,
$\int_{\Lambda_L^N}f\,d\lambda_d^{\otimes N}$ abbreviates the nonnegative
integral of $f\mathbf1_{\Lambda_L^N}$ on the full product space, using
[[def-tdmath-measure-integral]]. Set $Z_{L,0}=1$.
Define $\Xi_L:=\sum_{N=0}^{\infty}Z_{L,N}$ as the nonnegative extended sum of
[[def-nonnegative-extended-series]]. For $L\ge1$ put
$Q:=a e^{\beta B}$. Choose any real $K>eQ+1$ and set
$$n_L:=\lfloor K L^d\rfloor+1.$$
which satisfies $K L^d<n_L\le K L^d+1$ by the integer-part lemma
[[lem-integer-part]]. Let
$\Xi_L^{\mathrm{cut}}:=\sum_{N=0}^{n_L}Z_{L,N}$. Then
$$1\le\Xi_L\le e^{Q L^d},\qquad \sum_{N>n_L}Z_{L,N}\le e^{-L^d},\qquad \Xi_L^{\mathrm{cut}}\ge(1-e^{-L^d})\Xi_L.$$

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a dimension $d\ge1$, the model in [[def-tdmath-stable-power-tempered-particle-model]], its stability constant $B$, $a,\beta>0$, and $L\ge1$.

[A1] Stability means $U_N\ge-BN$ for every finite configuration and every $N\ge1$ ([[def-tdmath-stable-power-tempered-particle-model]]).

[L1] [[def-tdmath-measure-integral]] defines the nonnegative integral as the supremum of simple minorants. This current batch-11 definition is draft text; its exact interface is inspected in the batch dependency evidence.

[F1] [[def-countable-choice]] states $\mathrm{AC}_\omega$; the standard Lebesgue measure and box suppliers used here state this assumption explicitly.

[F2] [[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]] defines $\lambda_d$ as Lebesgue measure on the Lebesgue sigma-algebra. [[thm-borel-sets-are-lebesgue-measurable]] gives $\mathcal B(\mathbb R^d)\subseteq\mathcal L(\mathbb R^d)$ under $\mathrm{AC}_\omega$, so restricting $\lambda_d$ to Borel sets gives a measure. [[thm-lebesgue-measure-of-a-box-of-every-kind]] gives $\lambda_d([0,L]^d)=L^d$ and $\lambda_d([-k,k]^d)=(2k)^d$ for integers $k\ge1$. [[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]] gives the rectangle formula for finite products of sigma-finite measures.

[F3] [[prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]] gives sigma-finiteness of Lebesgue measure. For its Borel restriction, the Borel boxes $[-k,k]^d$ ($k\ge1$) cover $\mathbb R^d$ and have finite measure by [F2], so the restricted factors are sigma-finite and their finite product measures in the Statement exist.

[F4] [[def-real-exponential-function-and-e]] defines $e^x=\sum_{N=0}^{\infty}x^N/N!$, with integer powers as in [[def-integer-power]]; [[lem-exponential-series-has-infinite-radius]] proves convergence for every real $x$.

[F5] [[thm-exponential-addition-formula]] gives $e^xe^y=e^{x+y}$, and [[thm-exponential-is-strictly-increasing]] gives monotonicity of $e^x$.

[F6] [[def-factorial-and-falling-factorial]] defines $0!=1$ and the ordinary factorial recursion; [[def-nonnegative-extended-series]] defines the series sum as the supremum of its nonnegative partial sums, allowing $+\infty$.

[F7] [[thm-borel-products-of-euclidean-spaces-are-euclidean-borel]] identifies the finite product Borel sigma-algebra, and extended-real measurability means measurability of preimages of extended-real Borel sets ([[def-extended-real-valued-measurable-function]]). Coordinate-difference maps are continuous, hence Borel under $\mathrm{AC}_\omega$ ([[cor-continuous-functions-are-borel-measurable]]); composition with the Borel potential preserves measurability ([[thm-composition-with-borel-functions-preserves-measurability]]). Finite sums of the resulting extended-real measurable terms are measurable whenever defined ([[prop-closure-properties-of-measurable-functions-used-by-the-integral]]). On finite energy values $u$, $u\mapsto e^{-\beta u}$ is continuous; assigning the value $0$ at $u=+\infty$ remains Borel because $\{+\infty\}$ is Borel ([[def-extended-reals]], [[def-borel-sigma-algebra-on-the-extended-real-line]], [[thm-exponential-is-strictly-increasing]]). The box indicator is measurable, so the integrand extended by zero off $\Lambda_L^N$ is product-measurable.

[F8] [[lem-integer-part]] gives, for every real $x$, an integer $\lfloor x\rfloor$ with $\lfloor x\rfloor\le x<\lfloor x\rfloor+1$.

## Proof

1.1 By [A1] and $\beta>0$, every configuration satisfies $0\le e^{-\beta U_N}\le e^{\beta BN}$, with the value $0$ when $U_N=+\infty$. Fact [F7] makes the integrand and its restriction to $\Lambda_L^N$ measurable. Let $s=\sum_{j=1}^r c_j\mathbf1_{A_j}$ be any nonnegative simple minorant of $e^{-\beta U_N}\mathbf1_{\Lambda_L^N}$, written with disjoint measurable sets and finite coefficients $c_j\ge0$ as in [L1]. Every $A_j$ with $c_j>0$ is contained in $\Lambda_L^N$, and on it $c_j\le e^{\beta BN}$. For any measurable $E\subseteq\Lambda_L^N$, countable additivity applied to $\Lambda_L^N=E\sqcup(\Lambda_L^N\setminus E)$ gives $\lambda_d^{\otimes N}(E)\le\lambda_d^{\otimes N}(\Lambda_L^N)<\infty$. Applying this first to each $A_j$ and then to their finite disjoint union gives $$\int s\,d\lambda_d^{\otimes N}=\sum_{c_j>0}c_j\lambda_d^{\otimes N}(A_j) \le e^{\beta BN}\sum_{c_j>0}\lambda_d^{\otimes N}(A_j) =e^{\beta BN}\lambda_d^{\otimes N}\!\left(\bigcup_{c_j>0}A_j\right) \le e^{\beta BN}\lambda_d^{\otimes N}(\Lambda_L^N).$$ Taking the supremum over these minorants in [L1] proves the same bound for the restricted integrand's nonnegative integral. [A1, F1, F2, F3, F7, L1, algebra]

2.1 The box and product-measure formulas [F2, F3] give $\lambda_d^{\otimes N}(\Lambda_L^N)=L^{dN}$. Thus $Z_{L,N}\le(ae^{\beta B}L^d)^N/N!=(QL^d)^N/N!$ for $N\ge1$, and this also holds for $N=0$ since $Z_{L,0}=1$. [F2, F3, step 1.1, algebra]

3.1 Summing the nonnegative terms by [F6] and using [F4] gives $1\le\Xi_L\le\sum_{N=0}^{\infty}(QL^d)^N/N!=e^{QL^d}$; the lower bound is the empty-configuration term. [F4, F6, step 2.1]

3.2 By [F8], $KL^d<n_L\le KL^d+1$. If $N>n_L$, then $N>KL^d$, so $1\le e^{N-KL^d}$. Therefore $$\sum_{N>n_L}Z_{L,N}\le e^{-KL^d}\sum_{N>n_L}\frac{(eQL^d)^N}{N!}\le e^{-KL^d}e^{eQL^d}=e^{(eQ-K)L^d}\le e^{-L^d}.$$ The second inequality extends a nonnegative partial tail to the full exponential series; the equality uses [F5], and the last inequality follows from $K>eQ+1$ and [F5]. [F4, F5, F8, step 2.1, algebra]

4.1 For each $M>n_L$, split the $M$th partial sum into the fixed finite prefix $\Xi_L^{\mathrm{cut}}$ and the finite tail from $n_L+1$ through $M$. Taking suprema over $M$ in the nonnegative-series definition [F6] gives $\Xi_L=\Xi_L^{\mathrm{cut}}+\sum_{N>n_L}Z_{L,N}$; subtraction is valid because step 3.1 proves $\Xi_L<\infty$. Since $\Xi_L\ge1$, step 3.2 implies $\Xi_L^{\mathrm{cut}}\ge\Xi_L-e^{-L^d}\ge(1-e^{-L^d})\Xi_L$. [F6, step 3.1, step 3.2, algebra] ∎
