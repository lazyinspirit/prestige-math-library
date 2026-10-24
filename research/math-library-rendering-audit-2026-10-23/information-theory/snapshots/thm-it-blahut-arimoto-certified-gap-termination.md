---
id: thm-it-blahut-arimoto-certified-gap-termination
kind: theorem
title: "Blahut–Arimoto certified gap and termination"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 8
deps:
  - alg-it-finite-alphabet-blahut-arimoto
  - def-it-finite-mutual-information
  - thm-heine-borel-rn
  - thm-extreme-value-metric
  - thm-it-finite-kl-nonnegative-equality
  - alg-certified-elementary-range-evaluation
  - thm-real-elementary-range-enclosures
  - lem-directed-dyadic-rounding-enclosure-and-error
  - lem-range-reduced-exp-log-and-arctan-series-enclosures
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "No choice axiom is used; compactness and KL inequalities concern finite probability vectors."
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Robert M. Gray, Source Coding Theory, first edition"
      url: "https://ee.stanford.edu/~gray/sourcecodingtheory_rmg.pdf"
      locator: "Chapter 4, §4.4, printed pp. 96–97: the alternating-minimization update; the text expressly leaves convergence unproved."
    - title: "MIT OpenCourseWare 6.441, Chapter 25: Evaluating R(D)"
      url: "https://ocw.mit.edu/courses/6-441-information-theory-spring-2016/5721b7df786b416dadad7c7bb3364d00_MIT6_441S16_chapter_25.pdf"
      locator: "§25.2, PDF pp. 4–5 / printed pp. 258–259: parametric rate-distortion optimization and iterative algorithms."
---

## Statement

For the exact-real iteration of [[alg-it-finite-alphabet-blahut-arimoto]], let $L_\beta^*$ be the minimum of $I_{\rm nat}(X;\widehat X)+\beta\mathbb E d$ over all finite test channels. For every minimizer's output law $q^*$, every integer $t\ge0$, and full-support initialization $q_0$,
$$
0\le L_t-L_\beta^*\le\frac{D(q^*\|q_0)}{t+1}.
$$
For uniform $q_0$, this is at most $\ln n/(t+1)$. At every iteration the a-posteriori bound $L_t-L_\beta^*\le\ln\gamma_t$ holds; moreover $\gamma_t\to1$, including when all minimizers lie on the boundary of the reproduction simplex. Thus exact arithmetic eventually meets every positive tolerance, and under the algorithm's rational representability conditions its specified interval procedure eventually returns a certified iterate.

## Facts & Assumptions

**Given:** Positive finite source probabilities, finite nonnegative distortion and $\beta$, and a full-support initial reproduction law as in the algorithm.

[F1] [[alg-it-finite-alphabet-blahut-arimoto]]: $W_t(j|i)=q_t(j)e^{-\beta d_{ij}}/Z_i(q_t)$, $q_{t+1}=pW_t$, and $\gamma_t=\max_j\sum_i p_i e^{-\beta d_{ij}}/Z_i(q_t)$. Its exact-real recurrence accepts arbitrary full-support $q_0$; its interval procedure additionally requires rational $p_i,d_{ij},\beta,q_0(j)$ and positive rational $\tau$.

[F2] [[def-it-finite-mutual-information]]: finite mutual information is the finite joint-KL sum.

[F3] [[thm-it-finite-kl-nonnegative-equality]]: finite KL divergence is nonnegative and vanishes only for equal laws.

[F4] [[thm-heine-borel-rn]]: a closed subset of a finite-dimensional compact simplex is compact.

[F5] [[thm-extreme-value-metric]]: a continuous function on a nonempty compact metric space attains its minimum.

[F6] [[alg-certified-elementary-range-evaluation]] and [[thm-real-elementary-range-enclosures]]: each finite interval returned for an expression DAG encloses all exact node values.

[F7] [[lem-directed-dyadic-rounding-enclosure-and-error]] and [[lem-range-reduced-exp-log-and-arctan-series-enclosures]]: directed endpoint error and the exp/log series tails tend to zero as precision and truncation increase on bounded inputs.

## Proof




**Given:** The algorithm's data and suppliers [F1]–[F7].

1.1 For every reproduction pmf $q$, including boundary points of the simplex, define $G(W,q):=\sum_i p_iD(W(\cdot|i)\|q)+\beta\mathbb E d$, where a row divergence is $+\infty$ if that row puts positive mass outside the support of $q$. Since each $p_i>0$, $G(W,q)$ is finite only when every row is supported on $\{j:q(j)>0\}$. Also $Z_i(q)>0$ for every pmf $q$, because $e^{-\beta d_{ij}}>0$ and $q$ has total mass one. Define $W_q(j|i)=q(j)e^{-\beta d_{ij}}/Z_i(q)$, which is zero off that support. For every supported row, expansion of finite KL sums gives $$D(W(\cdot|i)\|q)+\beta\sum_jW(j|i)d_{ij}=D(W(\cdot|i)\|W_q(\cdot|i))-\ln Z_i(q).$$ Nonnegativity [F3] shows that $W_q$ minimizes each row; unsupported rows have infinite objective and cannot improve it. Therefore $F(q):=\min_WG(W,q)=-\sum_i p_i\ln Z_i(q)$ on the closed simplex. If $q_W$ is the output law of $W$, expansion on the common support gives $G(W,q)=L_\beta(W)+D(q_W\|q)$ when $q_W$ is supported on $q$; otherwise both sides are $+\infty$. [F1, F2, F3, given, algebra]

1.2 Fix an integer $t$. The recurrence through $t$ is a finite expression DAG with positive exact divisors and logarithm arguments, since every iterate has full support. The algorithm uses mantissa precision $r^2$, exponent bounds $-r,r$, and truncation $N=r$. Uniformly for each endpoint $x$ in a fixed bounded input interval, the evaluator in [F6] uses $s=r+2$ squarings after reducing to $u=x/2^s$. On a fixed bounded neighborhood of $x$, [F7] bounds the initial series error by $C^{r+1}2^{-s(r+1)}/(r+1)!$ for some fixed $C\ge1$, and the endpoint rounding error by $O(2^{-r^2})$. The exact intermediate exponentials are uniformly bounded; on a fixed larger bounded interval, squaring is Lipschitz with some fixed constant $A>1$. Thus the total endpoint error after $s$ rounded squarings is at most $A^{r+2}$ times the initial error plus $O(A^{r+2}2^{-r^2})$, which tends to zero. The exact exponential is Lipschitz on that interval, so a shrinking input interval has a shrinking output enclosure. This bound also ensures the rounded intermediates remain in that larger interval for all sufficiently large $r$. Logarithm range reduction on a fixed positive compact interval uses only finitely many bins; its series tails tend to zero, and its endpoint operations are continuous there. Rational input rounding likewise converges by [F7]. Applying these bounds successively to the finite recurrence DAG shows every requested enclosure width tends to zero. All exact positive divisors and logarithm arguments are eventually separated from zero, and the expanding exponent range eventually avoids overflow. The finite maximum forming $G_t$ preserves convergence, so its logarithm enclosure also shrinks to $\ln\gamma_t$. Soundness follows from [F6]. Hence each fixed-$t$ precision loop terminates with the required width. [F1, F6, F7, given, algebra]

2.1 The channel simplex is closed and bounded in finite-dimensional Euclidean space, hence compact by [F4]. The finite mutual-information objective is continuous by its entropy expression and continuity of $-u\ln u$ at zero; distortion is linear. Thus [F5] gives a minimizer $W^*$. Put $q^*=q_{W^*}$, $P^*(i,j)=p_iW^*(j|i)$. Step 1.1 gives $G(W,q)\ge L_\beta(W)\ge L_\beta^*$ for every $W,q$, while $G(W^*,q^*)=L_\beta^*$ because $q^*$ is the output marginal of $W^*$. Therefore $F(q^*)=L_\beta^*$ and $q^*$ minimizes the boundary-extended $F$. [F2, F3, F4, F5, step 1.1, given, algebra]

2.2 For each iterate set $P_t(i,j)=p_iW_t(j|i)$. The identities in step 1.1 give $$ F(q_t)=L_t+D(q_{t+1}\|q_t),\qquad F(q_{t+1})\le G(W_t,q_{t+1})=L_t. $$ Consequently $L_{t+1}\le F(q_{t+1})\le L_t$: the objective sequence is nonincreasing. [F1, F2, F3, step 1.1, algebra]

3.1 Expand the finite joint divergence using the update formula for $W_t$: $$ D(P^*\|P_t)=L_\beta^*+D(q^*\|q_t)-F(q_t). $$ Indeed $\ln W_t(j|i)=\ln q_t(j)-\beta d_{ij}-\ln Z_i(q_t)$; multiplying $\ln(W^*/W_t)$ by $p_iW^*_{ij}$ and summing gives the displayed identity. Marginalizing the joint laws over the reproduction coordinate and expanding the finite conditional sums gives $$ D(P^*\|P_t)=D(q^*\|q_{t+1})+\sum_{j:q^*_j>0}q^*_jD(P^*(X\in\cdot\mid j)\|P_t(X\in\cdot\mid j))\ge D(q^*\|q_{t+1}), $$ where [F3] supplies nonnegativity. Thus $F(q_t)-L_\beta^*\le D(q^*\|q_t)-D(q^*\|q_{t+1})$. Since $L_t\le F(q_t)$, the same upper bound holds for $L_t-L_\beta^*$. [F2, F3, step 2.1, step 2.2, algebra]

3.2 Define $s_j(q_t)=\sum_i p_i e^{-\beta d_{ij}}/Z_i(q_t)=q_{t+1,j}/q_{t,j}$. For $a_{ij}=e^{-\beta d_{ij}}/Z_i(q_t)$, concavity of $\ln$ and $F(q^*)=L_\beta^*$ give $$ F(q_t)-L_\beta^*=\sum_i p_i\ln\left(\sum_jq_j^*a_{ij}\right) \le\ln\left(\sum_jq_j^*s_j(q_t)\right)\le\ln\max_js_j(q_t)=\ln\gamma_t. $$ Since $L_t\le F(q_t)$, this proves the stated a-posteriori certificate. Also $\sum_jq_{t,j}s_j(q_t)=1$, so $\gamma_t\ge1$. [F1, step 2.1, step 2.2, algebra]

4.1 Summing step 3.1 for $s=0,\ldots,t$ telescopes to $\sum_{s=0}^t(L_s-L_\beta^*)\le D(q^*\|q_0)$, since KL is nonnegative. By step 2.2 the gaps are nonincreasing, so $(t+1)(L_t-L_\beta^*)\le D(q^*\|q_0)$. If $q_0$ is uniform, $D(q^*\|q_0)=\ln n-H(q^*)\le\ln n$. [F3, step 2.2, step 3.1, algebra]

5.1 The sequence $F(q_t)$ is nonincreasing by step 2.2 and bounded below by $L_\beta^*$. Moreover, $F(q_t)-F(q_{t+1})\ge D(q_{t+1}\|q_t)$, so this successive KL divergence tends to zero. Step 4.1 gives $L_t\to L_\beta^*$; the first identity in step 2.2 then gives $F(q_t)\to L_\beta^*$. The simplex is compact, and $F$, each $s_j$, and $\gamma$ are continuous there because every $Z_i(q)\ge\min_j e^{-\beta d_{ij}}>0$. Every cluster point of $q_t$ is therefore a minimizer of $F$. [F1, F5, step 2.1, step 2.2, step 4.1, algebra]

6.1 At any minimizer $q$ of differentiable $F(q)=-\sum_i p_i\ln Z_i(q)$, the coordinate derivative is $-s_j(q)$. Moving mass between a positive coordinate and any other coordinate shows $s_j(q)=1$ on the support and $s_j(q)\le1$ off the support; the active value equals one because $\sum_jq_js_j(q)=1$. Hence $\gamma(q)=1$ at every minimizer. Compactness and continuity from step 5.1 imply $\gamma_t\to1$: otherwise a subsequence bounded away from one would have a cluster point with the same property. By step 1.2, the enclosure upper endpoints satisfy $u_t\le\ln\gamma_t+1/(t+1)$, so $u_t\to0$ and every positive tolerance is eventually met. The argument permits zero coordinates in $q^*$, so boundary minimizers are included. [F1, step 5.1, step 1.2, algebra] ∎
