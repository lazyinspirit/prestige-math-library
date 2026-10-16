---
id: thm-qa-34-tang-recommendation-sampler
kind: theorem
title: Tang's conditional recommendation sampler
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 19
deps:
  - def-qa-34-l2-sample-query-access
  - def-qa-34-end-to-end-error-contract
  - def-qa-34-output-and-cost-types
  - def-qa-34-threshold-band-svd-target
  - lem-qa-34-normalized-vector-distribution-tv-bound
  - prop-qa-34-sample-inner-product-estimator
  - alg-qa-34-rejection-sampler-linear-combination
  - thm-qa-34-linear-combination-sampler-correct-and-cost
  - alg-qa-34-modfkv-low-rank-description
  - thm-qa-34-modfkv-low-rank-approximation
  - lem-qa-34-two-sketch-threshold-band-bound
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - thm-singular-value-decomposition
  - thm-operator-norm-is-the-largest-singular-value
  - def-countable-choice
  - def-dependent-choice
  - thm-countable-product-of-probability-spaces
  - thm-finite-and-countable-subadditivity-of-measures
  - cor-first-borel-cantelli-lemma-for-events
justified_by: []
proof_strategy: direct
axiom_use: "Countable choice and dependent choice are assumed in the Statement and used through F5 in step 3.1 to form the joint probability law of the potential adaptive row-sample batches. Full arbitrary-index choice is not assumed."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Ewin Tang, A quantum-inspired classical algorithm for recommendation systems, version 3
      url: https://arxiv.org/pdf/1807.04271v3
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes"
      url: https://arxiv.org/pdf/1907.09415
---

## Statement

Let $A\in\mathbb R^{m\times n}$ have the row/column entry-query and ℓ2-sampling access of [[def-qa-34-l2-sample-query-access]], let $F=\|A\|_F>0$, and fix a row $i$ with $\|D_{i,*}\|_2>0$. Here $D$ is the ModFKV matrix description from [[alg-qa-34-modfkv-low-rank-description]] and its success event is specified by [[thm-qa-34-modfkv-low-rank-approximation]]. Assume
$$0<\sigma\le F,\qquad 0<\epsilon\le\tfrac14\sqrt{\sigma/F},\qquad \epsilon^2\le\eta\le1,\qquad 0<\delta<1.$$
Assume countable choice and dependent choice, and model the finite sketch history together with the countably many potential fresh row-sample calls in the adaptive refinement by the joint product probability law supplied by [[thm-countable-product-of-probability-spaces]]. After a finite row-refinement stop, the capped rejection sampler uses its finite conditional law; the joint execution law is the countable mixture over finite stopping histories together with any residual nontermination event, on which no rejection call occurs.
There is a Tang recommendation procedure whose sketch succeeds unconditionally with probability at least $1-\delta/3$. For every fixed successful description having $D_{i,*}\ne0$, its conditional probability of a successful row estimate and an accepted sample is at least $1-2\delta/3$. Thus the unconditional probability of a nonzero realized target row together with failure of these guarantees is at most $\delta$. If the nonzero-row promise holds almost surely, this implies overall success probability at least $1-\delta$. For every fixed successful sketch and successful row estimate, the law of the accepted classical sample is within total variation $\epsilon$ (where $d_{\rm TV}(p,q)=\tfrac12\sum_a|p(a)-q(a)|$ as in [[def-qa-34-end-to-end-error-contract]]) of the normalized squared-entry distribution of $D_{i,*}$. A capped sampling failure returns FAIL; no conditional distribution is assigned to a zero target row. The nonzero-row hypothesis is a promise on the realized description, not an assumed ability to compute its full row norm. The failure bound is unconditional; it is not a claim that conditioning on a nonzero realized row preserves ModFKV's confidence. At constant precision its query and arithmetic-time bounds are respectively
$$\widetilde O\!\left(\frac{F^{18}}{\sigma^{18}\epsilon^8\eta^4}\right),\qquad \widetilde O\!\left(\frac{F^{24}}{\sigma^{24}\epsilon^{12}\eta^6}\right).$$
For the final $\epsilon$ total-variation guarantee, the finite row refinement below adds a query and arithmetic-time factor $\widetilde O(\|A_{i,*}\|_2^2/\|D_{i,*}\|_2^2)$. These bounds hold on the successful event; refinement terminates almost surely for every realized description satisfying the nonzero-row promise. Hidden logarithms, access-structure preprocessing, arithmetic precision, and the cost of writing the returned sample remain charged. The result is conditional on this exact input model and does not output $D$ as a full matrix or a full classical amplitude list.

## Facts & Assumptions

**Given:** The exact input access and parameters, and a realized nonzero target row as promised in the Statement.

[F1] [[thm-qa-34-modfkv-low-rank-approximation]] and its proof give a successful sketch with failure probability at most its assigned budget; [[lem-qa-34-two-sketch-threshold-band-bound]] gives $k<K$ and eigenvalues of $V^TV$ in $[1-tK,1+tK]$ for $V=S^TU\Sigma^{-1}$, where $t=\eta\epsilon^2/(1000K^2)$ and $tK\le1/2$. The retained singular values in $\Sigma$ lie in $[\sigma,F]$.

[F2] With exact norm, fresh ℓ2 samples and entry queries to $x$, and entry queries and a known norm for $y$, [[prop-qa-34-sample-inner-product-estimator]] estimates $\langle x,y\rangle$ to error $\alpha\|x\|\|y\|$ with failure at most $\beta$ using $O(\alpha^{-2}\log(2/\beta))$ samples and queries.

[F3] Apply [[lem-qa-34-normalized-vector-distribution-tv-bound]] to the ordered pair $(y,x)$ and use symmetry of total variation: for nonzero vectors, $d_{\rm TV}(D_x,D_y)=d_{\rm TV}(D_y,D_x)\le2\|x-y\|/\|y\|$.

[F4] [[thm-qa-34-linear-combination-sampler-correct-and-cost]] proves exact sampling on acceptance and a miss probability at most the assigned budget under a proof-side cancellation bound and a finite cap.

[F5] Under countable choice and dependent choice, the finite sketch history and the countable stream of repeated fresh samples from the fixed row distribution admit the joint product probability law stated in the Statement ([[thm-countable-product-of-probability-spaces]]). Every finite stopping history has a finite conditional sampler law by [F4], so the stopped branches form a countable mixture; paths that never stop remain the residual nontermination event in the product row-sample space.

[F6] A countable union of events has probability at most the sum of their probabilities ([[thm-finite-and-countable-subadditivity-of-measures]]).

[F7] If a sequence of events has summable probabilities, only finitely many occur almost surely ([[cor-first-borel-cantelli-lemma-for-events]]).

[F8] By the singular-value decomposition and the operator-norm characterization, $\|VV^T\|_{\rm op}=\lambda_{\max}(V^TV)$ for the real matrix $V$ ([[def-operator-norm-on-a-finite-dimensional-inner-product-space]], [[thm-singular-value-decomposition]], [[thm-operator-norm-is-the-largest-singular-value]]).

## Proof


1.1 Put $b=\|A_{i,*}\|$. If $b=0$, return FAIL: then $D_{i,*}=0$ and the promised input is absent. Otherwise $b>0$ is available from exact access. Run ModFKV with failure budget $\delta/3$, retaining its rank $k$, sample count, and $V$ of [F1]. If the retained rank is $k=0$, return FAIL because again $D_{i,*}=0$. The sketch event of [F1] has probability at least $1-\delta/3$; all subsequent estimates use fresh randomness conditional on the actual sketch. Write $h=A_{i,*}S^T$ and $z=hU\Sigma^{-1}$, so $D_{i,*}=zV^T$. [given, F1, algebra, cases]

2.1 At stages $l=0,1,\ldots$, set $\rho_l=2^{-l}$, $\beta_l=\delta\,2^{-(l+1)}/3$, and $\alpha_l=\rho_l/\sqrt K$. Put $m_l=\lceil16/\alpha_l^2\rceil$ and choose the least positive integer $r_l$ with $2^{-r_l}\le\beta_l/q$. For each of the $q$ entries of $h$, use [F2]'s lower-median estimator with $m_l$ samples per block, $r_l$ blocks, tolerance $\alpha_l$, and failure budget $\beta_l/q$; use mutually independent fresh sample batches for these estimates. Each row of $S$ has norm $F/\sqrt q$. Thus on that stage's simultaneous success, $\|\widehat h_l-h\|\le\alpha_l bF$, and the explicit vector $\widehat z_l=\widehat h_lU\Sigma^{-1}$ obeys $\|\widehat z_l-z\|\le\rho_l b=:e_l$. Stop at the first stage with $\|\widehat z_l\|\ge(1+32/\epsilon)e_l$. All quantities in this rule are computable from stored coefficients and exact input row norms; no query of the unknown full output-row norm occurs. [F1, F2, step 1.1, construct, algebra]

3.1 Fix a realized sketch and use [F5] to predefine the disjoint finite sample batches for every potential stage $l$. Let $E_l$ be the cylinder event that at least one of that stage's $q$ inner-product estimates fails its tolerance. Fresh samples, [F2], and [F6] give $\mathbb P(E_l)\le\beta_l$. Since $\sum_{l\ge0}\beta_l=\delta/3$, [F6] gives $\mathbb P(\bigcup_l E_l)\le\delta/3$, and [F7] gives $\mathbb P(E_l\text{ infinitely often})=0$. Thus with probability at least $1-\delta/3$ every stage estimate succeeds, and almost surely all sufficiently late stage estimates succeed. On those late stages $\|\widehat z_l-z\|\le e_l\to0$, so $\widehat z_l\to z$. The nonzero-row promise implies $z\ne0$; hence the stopping threshold $(1+32/\epsilon)e_l$ tends to zero while $\|\widehat z_l\|\to\|z\|>0$, and the procedure terminates almost surely, including for a sketch outside the successful sketch event whenever its realized target row is nonzero. On the event that every stage estimate succeeds, it stops no later than a stage with $e_l\le\epsilon\|z\|/64$, because $\|\widehat z_l\|\ge\|z\|-e_l\ge(1+32/\epsilon)e_l$. Hence the stopped stage satisfies $2^l\le\max\{1,128b/(\epsilon\|z\|)\}$. [given, F2, F5, F6, F7, step 2.1, algebra]

4.1 On the successful sketch and estimation event, at the stopping stage $\|z\|\ge\|\widehat z\|-e\ge32e/\epsilon$. With $x=\widehat zV^T$ and $y=D_{i,*}=zV^T$, [F1] gives $\|x-y\|/\|y\|\le\sqrt3 e/\|z\|\le\sqrt3\epsilon/32$. In particular $x\ne0$, and [F3] yields $d_{\rm TV}(D_x,D_y)\le\sqrt3\epsilon/16<\epsilon$. This holds for every fixed successful sketch and estimate, so any mixture of their accepted output laws has the same bound when compared with the corresponding mixture of target laws. [F1, F3, step 2.1, step 3.1, algebra]

5.1 Form the coefficient row $w=\widehat z\Sigma^{-1}U^T$, so $x=wS$. Its numerator in the cancellation ratio is $\sum_j\|w_jS_{j,*}\|^2=(F^2/q)\|w\|^2\le(F^2/(q\sigma^2))\|\widehat z\|^2$. On the successful sketch, $\|x\|^2\ge\tfrac12\|\widehat z\|^2$, so the ratio is at most $2K/q$. Take $C_0=2K/q$ as a proof-side bound and integer cap $R=\lceil2K\log(3/\delta)\rceil$, then invoke the finite sampler [F4] with $q$ terms and cap $R$. The bound $C\le C_0$ is established only on the successful sketch event; the procedure does not test or require a certificate for it. On every other history the sampler is still executable: if its component-square sum is zero it returns FAIL immediately, and otherwise its finite proposal/acceptance loop returns an accepted index or FAIL by the cap. Conditional on any fixed good coefficients, [F4] gives miss probability at most $\delta/3$ and accepted law exactly $D_x$. [F1, F4, step 4.1, algebra, construct]

6.1 Sketch failure has probability at most $\delta/3$. Conditional on every fixed sketch, any row-estimation failure has probability at most $\delta/3$ by step 3.1. Conditional on a successful sketch and row estimate with nonzero target row, capped rejection failure has probability at most $\delta/3$ by [F4]. By [F5], the finite conditional rejection laws are attached to their countably many finite stopping histories, so the failure event is measurable in the joint execution model; [F6] bounds the union of the sketch, estimation, and applicable rejection failures by $\delta$. Conditioning on rejection success does not manufacture confidence: for each fixed successful estimate its accepted law is already $D_x$ by [F4]. Step 4.1 supplies the asserted total-variation conclusion on that branch. Outside it the routine may return FAIL or an uncontrolled sample; no assertion treats a failed event as successful. [F4, F5, F6, step 1.1, step 3.1, step 4.1, step 5.1, algebra]

6.2 Stage $l$ uses $O(qK4^l\log(2q/\beta_l))$ queries and arithmetic for inner products, plus $O(qk)$ coefficient arithmetic. Summing geometrically to the stopping stage gives $\widetilde O(qK\epsilon^{-2}b^2/\|z\|^2+qK)$ on simultaneous success. Since $\|D_{i,*}\|\le\sqrt{3/2}\|z\|$, this is $\widetilde O(qK\epsilon^{-2}(1+b^2/\|D_{i,*}\|^2))$. Rejection uses $O(K\log(3/\delta))$ trials with $O(q)$ queries per trial; forming its weights costs $O(qk)$. Even the looser $\widetilde O(Kq^2)$ bound suffices. [F1, F2, F4, step 3.1, step 5.1, algebra]

7.1 Substituting $q=\widetilde O(K^4/(\eta^2\epsilon^4))$, the base query bound $\widetilde O(Kq^2)$ is $\widetilde O(K^9/(\eta^4\epsilon^8))$, and the SVD time $\widetilde O(q^3)$ is $\widetilde O(K^{12}/(\eta^6\epsilon^{12}))$. Since $q\ge\epsilon^{-2}$, the refined estimate cost in step 6.2 is at most these base bounds times $\widetilde O(1+b^2/\|D_{i,*}\|^2)$. On the successful sketch, $D_{i,*}=A_{i,*}VV^T$ and [F1], [F8] give $\|VV^T\|_{\rm op}=\lambda_{\max}(V^TV)\le1+tK\le3/2$. Hence $\|D_{i,*}\|\le(3/2)b$, so this last factor is $\widetilde O(b^2/\|D_{i,*}\|^2)$. Replacing $K$ by $F^2/\sigma^2$ gives the stated powers, with all access preprocessing, precision and writing costs charged separately. [F1, F8, step 1.1, step 6.2, algebra] ∎

