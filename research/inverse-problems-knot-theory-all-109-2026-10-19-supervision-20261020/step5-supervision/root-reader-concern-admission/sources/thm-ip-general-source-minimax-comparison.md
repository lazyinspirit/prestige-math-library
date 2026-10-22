---
id: thm-ip-general-source-minimax-comparison
kind: theorem
title: Cutoff risk and minimax RMS error over statistical ellipsoids
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - def-ip-gaussian-sequence-inverse-model
  - def-ip-statistical-ellipsoid-class
  - alg-ip-svd-truncated-estimator
  - thm-ip-truncated-estimator-exact-risk
  - lem-ip-univariate-gaussian-projection-minimax-comparison
  - def-bayes-and-minimax-risk
  - def-loss-function-and-risk
  - def-randomized-procedure-as-a-markov-kernel
  - def-countable-choice
  - def-real-exponential-function-and-e
  - def-factorial-and-falling-factorial
  - def-canonical-natural
  - lem-of-naturals-positive
  - thm-induction-principle
  - def-integer-power
  - lem-power-laws
  - lem-limit-preserves-order
  - thm-geometric-series
  - lem-finite-measure-uniqueness-on-a-pi-system
  - thm-euclidean-heine-borel-pseudocompactness-and-extreme-values
  - thm-continuous-preimages-of-borel-sets-are-borel
justified_by: []
proof_strategy: direct
axiom_use: Countable Choice is inherited through the inverse sequence model and the exact-risk supplier. The finite endpoint prior and the lower-bound calculation use no additional choice.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass

sources:
  references:
    - title: "Litao Ding and Peter Mathé, Minimax rates for statistical inverse problems under general source conditions, §1, equations (3)–(9), and the complete proof in §2, PDF pp. 1–5"
      url: https://arxiv.org/pdf/1707.01706v2
    - title: "Iain M. Johnstone, Gaussian estimation: Sequence and wavelet models, 2011 draft, §§4.3–4.6, printed pp. 104–113"
      url: https://mathweb.ucsd.edu/~jbradic/math281a/Johnstone.pdf
---

## Statement

Assume Countable Choice. Fix $\epsilon>0$, $Q\ge0$, a nonincreasing sequence $s_j>0$ with $s_j\to0$, and a nondecreasing sequence $a_j>0$. Observe $Z_j=\theta_j+\epsilon s_j^{-1}\xi_j$ for $j\ge1$, where the $\xi_j$ are independent standard normal variables, and let the unknown parameter range over
$$\Theta_a(Q)=\left\{\theta\in\ell^2(\mathbb N,\mathbb R):\sum_{j\ge1}a_j^2\theta_j^2\le Q^2\right\}.$$
Let $R_*(\epsilon)$ be the square root of the minimax expected squared $\ell^2$ error over all measurable deterministic or randomized estimators from the product Borel data space to $\ell^2$, and put
$$R_{\rm cut}(\epsilon)=\left[\inf_{D\in\mathbb N_0}\left\{\frac{Q^2}{a_{D+1}^2}+\epsilon^2\sum_{j=1}^{D}s_j^{-2}\right\}\right]^{1/2},\qquad\mathbb N_0=\{0,1,2,\ldots\}.$$
Then $R_*(\epsilon)\le R_{\rm cut}(\epsilon)\le2.2R_*(\epsilon)$.

## Statement references

[[def-ip-gaussian-sequence-inverse-model|Gaussian sequence inverse model]]

[[def-ip-statistical-ellipsoid-class|Weighted ellipsoid class]]

[[alg-ip-svd-truncated-estimator|Singular-value cutoff estimator]]

[[thm-ip-truncated-estimator-exact-risk|Exact worst-case cutoff risk]]

[Litao Ding and Peter Mathé, *Minimax rates for statistical inverse problems under general source conditions*, §1 and complete proof in §2](https://arxiv.org/pdf/1707.01706v2)

[Iain M. Johnstone, *Gaussian estimation: Sequence and wavelet models*, §§4.3–4.6](https://mathweb.ucsd.edu/~jbradic/math281a/Johnstone.pdf)

## Facts & Assumptions

[A1] [[def-countable-choice]]: Countable Choice is assumed by the compact SVD and complete-basis coordinate identification used by the Gaussian sequence model.

[F1] [[def-ip-gaussian-sequence-inverse-model]]: $Z_j=\theta_j+\epsilon s_j^{-1}\xi_j$ for independent standard normal coordinates, with parameter $\theta\in\ell^2(\mathbb N,\mathbb R)$ and data in the product Borel space $\mathbb R^\mathbb N$.

[F2] [[def-ip-statistical-ellipsoid-class]]: $\Theta_a(Q)=\{\theta\in\ell^2:\sum_{j\ge1}a_j^2\theta_j^2\le Q^2\}$, where $0<a_1\le a_2\le\cdots$; no divergence assumption on $a_j$ is made.

[F3] [[alg-ip-svd-truncated-estimator]]: For $D\in\mathbb N_0$, the cutoff estimator retains $Z_j$ for $j\le D$ and sets the other coordinates to zero.

[F4] [[thm-ip-truncated-estimator-exact-risk]]: Its proof establishes, for each $\theta\in\Theta_a(Q)$, $R_\theta(D)=\epsilon^2\sum_{j=1}^{D}s_j^{-2}+\sum_{j>D}\theta_j^2$; taking the supremum gives $Q^2/a_{D+1}^2+\epsilon^2\sum_{j=1}^{D}s_j^{-2}$, with the empty sum zero at $D=0$.

[F5] [[lem-ip-univariate-gaussian-projection-minimax-comparison]]: Assuming Countable Choice, in a scalar coordinate with noise standard deviation $\tau$ and interval half-width $r$, the prior on $\{-b,b\}$, $b=\min(r,\tau)$, has Bayes risk at least $\min(r^2,\tau^2)/\sqrt{2e}$.

[F6] [[def-loss-function-and-risk]], [[def-randomized-procedure-as-a-markov-kernel]], and [[def-bayes-and-minimax-risk]]: Risk is expected nonnegative loss, a randomized rule is a parameter-independent kernel from data to actions, minimax risk is the infimum of worst-case risks, and the average risk under any supported prior is no greater than worst-case risk.

[F7] [[def-real-exponential-function-and-e]], [[def-factorial-and-falling-factorial]], [[def-canonical-natural]], [[lem-of-naturals-positive]], [[thm-induction-principle]], [[def-integer-power]], [[lem-power-laws]], [[lem-limit-preserves-order]], and [[thm-geometric-series]]: $e=\sum_{n\ge0}1/n!$; factorial obeys $(n+1)!=(n+1)n!$; the canonical map preserves products and order; induction and passage of non-strict inequalities to limits are available; integer-power product and reciprocal laws hold; and $\sum_{k\ge0}3^{-k}=\sum_{k\ge0}(1/3)^k=3/2$.

[F8] [[lem-finite-measure-uniqueness-on-a-pi-system]]: Finite probability measures agreeing on a generating pi-system of cylinder sets agree on the generated product Borel sigma-algebra.

[F9] [[thm-euclidean-heine-borel-pseudocompactness-and-extreme-values]]: A continuous real-valued function on a nonempty closed bounded subset of finite-dimensional Euclidean space attains its maximum and minimum.

[F10] [[thm-continuous-preimages-of-borel-sets-are-borel]]: A continuous map has Borel preimages of Borel sets; $(\theta,a)\mapsto\|\theta-a\|_{\ell^2}^2$ is continuous and hence Borel measurable, and a finite-coordinate cutoff rule is Borel measurable.

**Given:** Countable Choice, the positive-noise Gaussian sequence experiment, $Q\ge0$, positive nonincreasing singular numbers $s_j\to0$, positive nondecreasing ellipsoid weights $a_j$, and the RMS minimax value $R_*(\epsilon)$ over all measurable deterministic or randomized rules.

## Proof


1.1 If $Q=0$, then $\Theta_a(Q)=\{0\}$. The zero estimator has minimax risk zero, and the $D=0$ cutoff expression is also zero, so the asserted inequalities hold. Hence assume $Q>0$. [given, F2, F3, F6, algebra]

1.2 Put $\tau_j^2=\epsilon^2s_j^{-2}$ and let $\mathcal C$ be the set of sequences $r_j\ge0$ with $\sum_j a_j^2r_j\le Q^2$. For $r\in\mathcal C$, define $J(r)=\sum_j\min(r_j,\tau_j^2)$. Since $a_j\ge a_1>0$, one has $\sum_jr_j\le Q^2/a_1^2$, so $J(r)$ is finite. [given, F1, F2, algebra]

1.3 As $s_j\to0$ and $\epsilon>0$, $\tau_j^2\to\infty$. Choose $N\ge1$ so that $\tau_j^2>Q^2/a_1^2$ for $j>N$. Every feasible $r$ then has $r_j<\tau_j^2$ on that tail. Replacing its tail by $\widetilde r_{N+1}=(\sum_{j>N}a_j^2r_j)/a_{N+1}^2$ at coordinate $N+1$ and zero thereafter preserves the weighted budget and does not decrease $J$, because $a_j\ge a_{N+1}$ for $j>N$ and $\sum_{j>N}r_j\le\widetilde r_{N+1}<\tau_{N+1}^2$. The finite-dimensional feasible set in coordinates $1,\ldots,N+1$ is nonempty (it contains zero), closed, and bounded (each coordinate is at most $Q^2/a_j^2$). The finite sum $J$ is continuous there, so [F9] gives a finite-support maximizer $r^*$. [given, F1, F2, F9, construct, algebra]

1.4 For $k\in\mathbb N$, put $c_k:=(k+3)!$. By induction, $c_k\ge6\cdot3^k$, with strict inequality for $k\ge1$: the base case is $c_0=3!=6$, and if $c_k\ge6\cdot3^k$, then $c_{k+1}=(k+4)c_k\ge4c_k\ge24\cdot3^k>18\cdot3^k=6\cdot3^{k+1}$, using $(k+4)\ge4$ and $c_k>0$. Thus for every $N\ge4$, $$\sum_{n=0}^{N}\frac1{n!}\le\frac52+\frac16\sum_{k=0}^{N-3}3^{-k}-\frac1{72},$$ because the $n=4$ term is strictly below its comparison term by $1/18-1/24=1/72$ and all other terms from $n\ge3$ are bounded by the induction. For $k=0$ one has $(1/3)^0=3^0=1$. For $k\ge1$, the product and reciprocal laws in [F7] give $3^k(1/3)^k=(3(1/3))^k=1$, hence $(1/3)^k=(3^k)^{-1}=3^{-k}$. Applying the geometric-series formula in [F7] at ratio $1/3$ therefore gives $\sum_{k\ge0}3^{-k}=1/(1-1/3)=3/2$. By [F7], the left partial sums tend to $e$ and these geometric sums tend to $3/2$; [F7] therefore gives $e\le\frac{11}{4}-\frac1{72}<\frac{11}{4}$. Hence $2\sqrt{2e}<\sqrt{22}<\frac{121}{25}=(\frac{11}{5})^2$. [F7, induction, algebra]

1.5 The compact-SVD coordinate realization uses Countable Choice [A1]. For each $D$, the first $D$ coordinate evaluations are measurable in the product Borel data space [F1], and their finite-support embedding into $\ell^2$ is continuous; thus the cutoff rule [F3] is measurable, including the constant rule at $D=0$. Its squared loss is measurable by [F10]. [given, A1, F1, F3, F10, construct]

2.1 Among the finite-support maximizers choose one, $r^*$, with the longest initial saturated segment, and let $D$ be its length; this choice exists because step 1.3 bounds the support by $N+1$. If $P=\{j:r_j^*\ge\tau_j^2\}$ had a later saturated index $j>D+1$, then $i=D+1$ is the first gap before such an index and $r_i^*<\tau_i^2$. Set $\delta=\tau_i^2-r_i^*>0$. Since $s_j$ is nonincreasing, $\tau_i^2\le\tau_j^2$, so $\delta\le\tau_i^2\le\tau_j^2\le r_j^*$. Replacing $r_i^*$ by $r_i^*+\delta$ and $r_j^*$ by $r_j^*-\delta$ does not increase the budget, since $a_i\le a_j$, and does not decrease $J$, since the gain at $i$ is $\delta$ and the loss at $j$ is at most $\delta$. It therefore gives a maximizer whose initial saturated segment has length at least $D+1$, a contradiction. Thus $P=\{1,\ldots,D\}$ for some $D\ge0$. [step 1.3, F2, construct, algebra]

2.2 Let the prior choose independently, for each $j\le N+1$, the two values $\pm b_j$ with equal probability, where $b_j=\min\{\sqrt{r_j^*},\tau_j\}$, and set all later coordinates to zero. Every point in its finite support belongs to $\Theta_a(Q)$ because $\sum_{j\le N+1}a_j^2b_j^2\le\sum_ja_j^2r_j^*\le Q^2$. For any such truth $\eta$, relative to the zero-truth product law $P_0$, the likelihood ratio is $L_\eta(z)=\prod_{j=1}^{N+1}\exp(\eta_jz_j/\tau_j^2-\eta_j^2/(2\tau_j^2))$. For a cylinder determined by a finite coordinate set $F$, split $F$ into active coordinates $F\cap\{1,\ldots,N+1\}$ and inactive coordinates. On each active coordinate, multiplying the zero-mean Gaussian density by its factor in $L_\eta$ gives the shifted Gaussian density; inactive coordinates retain their zero-truth density, and active likelihood factors outside $F$ integrate to one. Finite-coordinate independence therefore gives equality of the two probability measures on every such cylinder, and the product density integrates to one. These cylinders form a generating pi-system, so [F8] gives equality on the full product Borel sigma-algebra and proves that $L_\eta$ is the likelihood ratio for the entire experiment. The finite product prior and this factorized likelihood give a coordinatewise posterior. [given, F1, F2, F8, step 1.3, construct, algebra]

2.3 The admissible cutoff rule from step 1.5 has minimax risk no greater than its worst-case risk by [F6]. For each $D$ this risk is the exact expression in [F4]; taking the infimum over $D$ gives $R_*(\epsilon)\le R_{\rm cut}(\epsilon)$. [given, F4, F6, step 1.5, algebra]

3.1 Fix $r\in\mathcal C$ and $m\ge N+1$, and truncate $r$ after coordinate $m$; the truncation remains feasible. The segment from $r^*$ to this finite-support truncation is feasible, and its finite sum $J$ is maximized at its $r^*$ endpoint. Its right derivative there is therefore nonpositive. Since $P=\{1,\ldots,D\}$ by step 2.1, coordinates $j>D$ are strictly below their caps at $r^*$ and contribute their direction increments; coordinates $j\le D$ with $r_j^*>\tau_j^2$ contribute zero, while those with $r_j^*=\tau_j^2$ contribute $\min(r_j-\tau_j^2,0)$. Consequently $\sum_{D<j\le m}(r_j-r_j^*)+\sum_{\{j\le D:r_j^*=\tau_j^2\}}\min(r_j-\tau_j^2,0)\le0$. Letting $m\to\infty$ is legitimate because $\sum r_j$ and $\sum r_j^*$ converge. Rearranging gives $\sum_{j>D}r_j\le\sum_{j>D}r_j^*+\sum_{\{j\le D:r_j^*=\tau_j^2\}}(\tau_j^2-r_j)_+\le\sum_{j>D}r_j^*+\sum_{j=1}^{D}\tau_j^2$. [step 1.2, step 2.1, F2, algebra]

3.2 The randomized rule is a parameter-independent kernel from the data by [F6], so conditioning on its action does not alter the posterior established in step 2.2. For each active coordinate, the conditional squared error is its posterior variance plus a nonnegative squared displacement from the posterior mean. Thus every rule's prior-averaged risk is at least the sum of the scalar Bayes risks. Each scalar prior is supported at $\pm\min\{\sqrt{r_j^*},\tau_j\}$, so [F5] bounds that sum below by $\sum_{j\le N+1}\min(r_j^*,\tau_j^2)/\sqrt{2e}=J_*/\sqrt{2e}$. The supremum risk dominates the supported prior average; taking the minimax infimum gives $R_*(\epsilon)^2\ge J_*/\sqrt{2e}$. [given, F1, F2, F5, F6, step 1.3, step 2.2, algebra]

4.1 For any $\theta\in\Theta_a(Q)$, the sequence $r_j=\theta_j^2$ belongs to $\mathcal C$. Step 3.1 bounds its omitted squared norm. The cutoff risk is that tail plus the retained variance by [F4], so at the cutoff $D$ from step 2.1 its worst-case risk is at most $\sum_{j>D}r_j^*+2\sum_{j\le D}\tau_j^2\le2J_*$. Therefore $R_{\rm cut}(\epsilon)^2\le2J_*$. [given, F2, F3, F4, step 2.1, step 3.1, algebra]

5.1 Combining steps 4.1 and 3.2 yields $R_{\rm cut}(\epsilon)^2\le2\sqrt{2e}\,R_*(\epsilon)^2$. [step 3.2, step 4.1, algebra]

6.1 Since both risks are nonnegative, steps 5.1 and 1.4 imply $R_{\rm cut}(\epsilon)\le\frac{11}{5}R_*(\epsilon)$. [step 1.4, step 5.1, algebra] ∎
## Remarks

This compares expected squared sequence risk in the Gaussian experiment. It does not assert a deterministic worst-case error bound for arbitrary bounded data perturbations, and its constant-factor optimality is not Pinsker sharp-constant optimality.
