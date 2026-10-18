---
id: thm-it-blahut-arimoto-certified-gap-termination
kind: theorem
title: "Blahut–Arimoto certified gap and termination"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 7
deps:
  - alg-it-finite-alphabet-blahut-arimoto
  - def-it-finite-mutual-information
  - thm-heine-borel-rn
  - thm-extreme-value-metric
  - thm-it-finite-kl-nonnegative-equality
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "No choice axiom is used; compactness and KL inequalities concern finite probability vectors."
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pending
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

For the iteration of [[alg-it-finite-alphabet-blahut-arimoto]], let \(L_\beta^*\) be the minimum of \(I_{\rm nat}(X;\widehat X)+\beta\mathbb E d\) over all finite test channels. For every minimizer's output law \(q^*\), every integer \(t\ge0\), and full-support initialization \(q_0\),
\[
0\le L_t-L_\beta^*\le\frac{D(q^*\|q_0)}{t+1}.
\]
For uniform \(q_0), this is at most \(\ln n/(t+1)\). At every iteration the a-posteriori bound \(L_t-L_\beta^*\le\ln\gamma_t\) holds; moreover \(\gamma_t\to1\), so every positive tolerance in the algorithm's stopping rule is eventually certified, including when all minimizers lie on the boundary of the reproduction simplex.

## Facts & Assumptions

**Given:** Positive finite source probabilities, finite nonnegative distortion and \(\beta\), and a full-support initial reproduction law as in the algorithm.

[F1] [[alg-it-finite-alphabet-blahut-arimoto]]: \(W_t(j|i)=q_t(j)e^{-\beta d_{ij}}/Z_i(q_t)\), \(q_{t+1}=pW_t\), and \(\gamma_t=\max_j\sum_i p_i e^{-\beta d_{ij}}/Z_i(q_t)\).

[F2] [[def-it-finite-mutual-information]]: finite mutual information is the finite joint-KL sum.

[F3] [[thm-it-finite-kl-nonnegative-equality]]: finite KL divergence is nonnegative and vanishes only for equal laws.

[F4] [[thm-heine-borel-rn]]: a closed subset of a finite-dimensional compact simplex is compact.

[F5] [[thm-extreme-value-metric]]: a continuous function on a nonempty compact metric space attains its minimum.

## Proof

**Given:** The algorithm's data and suppliers [F1]–[F5].

1.1 For a channel \(W\) with output pmf \(q_W\) and a full-support output reference pmf \(q\), expand finite KL sums to obtain
\[
G(W,q):=\sum_i p_iD(W(\cdot|i)\|q)+\beta\mathbb E d=L_\beta(W)+D(q_W\|q).
\]
For fixed \(q\), the update in [F1] satisfies \(\ln(W_q(j|i)/q(j))+\beta d_{ij}=-\ln Z_i(q)\); hence \(D(W(\cdot|i)\|q)+\beta\sum_jW(j|i)d_{ij}=D(W(\cdot|i)\|W_q(\cdot|i))-\ln Z_i(q)\). Nonnegativity [F3] shows that \(W_q\) minimizes this row, and summing gives \(F(q):=\min_WG(W,q)=-\sum_i p_i\ln Z_i(q)\). [F1, F2, F3, given, algebra]

1.2 The channel simplex is closed and bounded in finite-dimensional Euclidean space, hence compact by [F4]. The finite mutual-information objective is continuous by its entropy expression and continuity of \(-u\ln u\) at zero; distortion is linear. Thus [F5] gives a minimizer \(W^*\). Put \(q^*=q_{W^*}\), \(P^*(i,j)=p_iW^*(j|i)\). By [F3], every \(G(W,q)\ge L_\beta(W)\ge L_\beta^*\), while \(G(W^*,q^*)=L_\beta^*\). Therefore \(F(q^*)=L_\beta^*\) and \(q^*\) minimizes \(F\). [F2, F3, F4, F5, step 1.1, given, algebra]

2.1 For each iterate set \(P_t(i,j)=p_iW_t(j|i)\). The identities in step 1.1 give
\[
F(q_t)=L_t+D(q_{t+1}\|q_t),\qquad F(q_{t+1})\le G(W_t,q_{t+1})=L_t.
\]
Consequently \(L_{t+1}\le F(q_{t+1})\le L_t\): the objective sequence is nonincreasing. [F1, F2, F3, step 1.1, algebra]

2.2 Expand the finite joint divergence using the update formula for \(W_t\):
\[
D(P^*\|P_t)=L_\beta^*+D(q^*\|q_t)-F(q_t).
\]
Indeed \(\ln W_t(j|i)=\ln q_t(j)-\beta d_{ij}-\ln Z_i(q_t)\); multiplying \(\ln(W^*/W_t)\) by \(p_iW^*_{ij}\) and summing gives the displayed identity. Marginalizing the joint laws over the reproduction coordinate and expanding the finite conditional sums gives
\[
D(P^*\|P_t)=D(q^*\|q_{t+1})+\sum_{j:q^*_j>0}q^*_jD(P^*(X\in\cdot\mid j)\|P_t(X\in\cdot\mid j))\ge D(q^*\|q_{t+1}),
\]
where [F3] supplies nonnegativity. Thus \(F(q_t)-L_\beta^*\le D(q^*\|q_t)-D(q^*\|q_{t+1})\). Since \(L_t\le F(q_t)\), the same upper bound holds for \(L_t-L_\beta^*\). [F2, F3, step 1.2, step 2.1, algebra]

2.3 Summing step 2.2 for \(s=0,\ldots,t\) telescopes to \(\sum_{s=0}^t(L_s-L_\beta^*)\le D(q^*\|q_0)\), since KL is nonnegative. By step 2.1 the gaps are nonincreasing, so \((t+1)(L_t-L_\beta^*)\le D(q^*\|q_0)\). If \(q_0\) is uniform, \(D(q^*\|q_0)=\ln n-H(q^*)\le\ln n\). [F3, step 2.1, step 2.2, algebra]

3.1 Define \(s_j(q_t)=\sum_i p_i e^{-\beta d_{ij}}/Z_i(q_t)=q_{t+1,j}/q_{t,j}\). For \(a_{ij}=e^{-\beta d_{ij}}/Z_i(q_t)\), concavity of \(\ln\) and \(F(q^*)=L_\beta^*\) give
\[
F(q_t)-L_\beta^*=\sum_i p_i\ln\left(\sum_jq_j^*a_{ij}\right)
\le\ln\left(\sum_jq_j^*s_j(q_t)\right)\le\ln\max_js_j(q_t)=\ln\gamma_t.
\]
Since \(L_t\le F(q_t)\), this proves the stated a-posteriori certificate. Also \(\sum_jq_{t,j}s_j(q_t)=1\), so \(\gamma_t\ge1\). [F1, step 1.2, step 2.1, algebra]

3.2 The sequence \(F(q_t)\) is nonincreasing by step 2.1 and bounded below by \(L_\beta^*\). Moreover, \(F(q_t)-F(q_{t+1})\ge D(q_{t+1}\|q_t)\), so this successive KL divergence tends to zero. Step 2.3 gives \(L_t\to L_\beta^*\); the first identity in step 2.1 then gives \(F(q_t)\to L_\beta^*\). The simplex is compact, and \(F\), each \(s_j\), and \(\gamma\) are continuous there because every \(Z_i(q)\ge\min_j e^{-\beta d_{ij}}>0\). Every cluster point of \(q_t\) is therefore a minimizer of \(F\). [F1, F5, step 1.2, step 2.1, step 2.3, algebra]

3.3 At any minimizer \(q\) of differentiable \(F(q)=-\sum_i p_i\ln Z_i(q)\), the coordinate derivative is \(-s_j(q)\). Moving mass between a positive coordinate and any other coordinate shows \(s_j(q)=1\) on the support and \(s_j(q)\le1\) off the support; the active value equals one because \(\sum_jq_js_j(q)=1\). Hence \(\gamma(q)=1\) at every minimizer. Compactness and continuity from step 3.2 imply \(\gamma_t\to1\): otherwise a subsequence bounded away from one would have a cluster point with the same property. Thus \(\ln\gamma_t\to0\), and every positive tolerance is eventually met. The argument permits zero coordinates in \(q^*\), so boundary minimizers are included. [F1, step 3.2, algebra] ∎
