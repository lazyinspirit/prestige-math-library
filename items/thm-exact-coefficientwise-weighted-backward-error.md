---
id: thm-exact-coefficientwise-weighted-backward-error
kind: theorem
title: "Exact minimum formula for a fixed polynomial eigenpair's weighted backward error"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  - def-coefficientwise-weighted-backward-error-for-matrix-polynomial
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Michael Berhanu, The Polynomial Eigenvalue Problem, Chapter 3, §3.2, Theorem 3.3"
      url: "https://eprints.maths.manchester.ac.uk/582/1/mberhanu05.pdf"
    - title: "Françoise Tisseur and Karl Meerbergen, The Quadratic Eigenvalue Problem, §4.2"
      url: "https://eprints.maths.manchester.ac.uk/466/1/38198.pdf"
---

## Statement

Under the hypotheses of [[def-coefficientwise-weighted-backward-error-for-matrix-polynomial]], put
$$S:=\sum_{j=0}^{m}\omega_j^2|\alpha|^{2j}|\beta|^{2(m-j)}.$$
Then $S>0$, the infimum is attained, and
$$\eta_F(P,[\alpha:\beta],x;\omega)=\frac{\|P_h(\alpha,\beta)x\|_2}{\|x\|_2\sqrt{S}}.$$
At a finite parameter $[\lambda:1]$ this is $\|P(\lambda)x\|_2/(\|x\|_2\sqrt{\sum_j\omega_j^2|\lambda|^{2j}})$; at infinity $[1:0]$ it is $\|A_mx\|_2/(\omega_m\|x\|_2)$. When $\alpha\ne0$, setting $\mu=\beta/\alpha$ rewrites the same formula for $P^{\rm rev}_m(\mu)$ with reversed coefficient weights $\widetilde\omega_k:=\omega_{m-k}$.

## Facts & Assumptions

**Given:** A regular grade-$m$ matrix polynomial, $[\alpha:\beta]\in\mathbb P^1(\mathbb C)$, $x\ne0$, and weights $\omega_j>0$.

[F1] [[def-coefficientwise-weighted-backward-error-for-matrix-polynomial]]: the error is the infimum of $\left(\sum_j\|\Delta A_j\|_F^2/\omega_j^2\right)^{1/2}$ over coefficient perturbations satisfying $\sum_j(A_j+\Delta A_j)\alpha^j\beta^{m-j}x=0$.

## Proof

**Proof technique:** direct minimization.

1.1 Since $[\alpha:\beta]$ is nonzero, either $\alpha\ne0$ or $\beta\ne0$. If $\beta\ne0$, the $j=0$ term in $S$ is $\omega_0^2|\beta|^{2m}>0$; if $\beta=0$, then $\alpha\ne0$ and the $j=m$ term is $\omega_m^2|\alpha|^{2m}>0$. Thus $S>0$ and the displayed denominator is defined because also $x\ne0$. [given, F1, algebra]

2.1 We use only finite-dimensional estimates, derived as follows. For $u,v\in\mathbb C^d$ with $v\ne0$, put $c:=\langle u,v\rangle/\|v\|_2^2$. Direct expansion gives $\|u-cv\|_2^2=\|u\|_2^2-|\langle u,v\rangle|^2/\|v\|_2^2\ge0$, so $|\langle u,v\rangle|^2\le\|u\|_2^2\|v\|_2^2$; if $v=0$ the inequality is immediate. Since $\|u+v\|_2^2=\|u\|_2^2+\|v\|_2^2+2\operatorname{Re}\langle u,v\rangle\le(\|u\|_2+\|v\|_2)^2$, taking nonnegative square roots gives $\|u+v\|_2\le\|u\|_2+\|v\|_2$. Applying the inner-product bound to each row of any matrix $M$ and $\bar v$ and summing gives $\|Mv\|_2\le\|M\|_F\|v\|_2$. For real lists $a,b\in\mathbb R^d$ with $b\ne0$, set $t=(\sum_j a_jb_j)/(\sum_jb_j^2)$; direct expansion gives $\sum_j(a_j-tb_j)^2=\sum_j a_j^2-(\sum_j a_jb_j)^2/(\sum_jb_j^2)\ge0$, hence $(\sum_j a_jb_j)^2\le(\sum_j a_j^2)(\sum_j b_j^2)$, and the same inequality is immediate if $b=0$. For any feasible perturbations, $r=-\sum_j\Delta A_jc_jx$, where $c_j=\alpha^j\beta^{m-j}$. The derived matrix estimate, $\|c_jw\|_2=|c_j|\|w\|_2$, and repeated triangle inequality give $\|r\|_2\le\|x\|_2\sum_j|c_j|\|\Delta A_j\|_F$. Apply the derived real-list inequality to $a_j=\omega_j|c_j|$ and $b_j=\|\Delta A_j\|_F/\omega_j$ to obtain $\|r\|_2\le\|x\|_2\sqrt{\sum_j\omega_j^2|c_j|^2}\left(\sum_j\frac{\|\Delta A_j\|_F^2}{\omega_j^2}\right)^{1/2}=\|x\|_2\sqrt{S}\left(\sum_j\frac{\|\Delta A_j\|_F^2}{\omega_j^2}\right)^{1/2}$. Hence every feasible cost is at least $\|r\|_2/(\|x\|_2\sqrt S)$. [given, F1, step 1.1, algebra]

2.2 Define $\widehat{\Delta A}_j:=-\frac{\omega_j^2\overline{\alpha^j\beta^{m-j}}}{\|x\|_2^2S}\,r x^*$. Then $\widehat{\Delta A}_jc_jx=-\omega_j^2|c_j|^2r/S$, because $x^*x=\|x\|_2^2$. Summing over $j$ yields $\sum_j\widehat{\Delta A}_jc_jx=-r$, so these perturbations are feasible. [given, step 1.1, construct, algebra]

3.1 Directly from the entries of the rank-one matrix, $\|r x^*\|_F^2=\sum_{a,b}|r_a\overline{x_b}|^2=\|r\|_2^2\|x\|_2^2$. Therefore the cost of the feasible perturbations in step 2.2 is $\sum_j\|\widehat{\Delta A}_j\|_F^2/\omega_j^2=\|r\|_2^2/(\|x\|_2^2S)$. Taking square roots and combining with the lower bound in step 2.1 proves attainment and the formula. Substituting $[\lambda:1]$ leaves the terms $\omega_j^2|\lambda|^{2j}$; substituting $[1:0]$ leaves only $\omega_m^2$ and $P_h(1,0)=A_m$. When $\alpha\ne0$, set $\mu=\beta/\alpha$ and reindex with $k=m-j$; then $S=|\alpha|^{2m}\sum_{k=0}^m\omega_{m-k}^2|\mu|^{2k}$ and $P_h(\alpha,\beta)=\alpha^mP_m^{\rm rev}(\mu)$, so the homogeneous formula is precisely the reversed-polynomial formula with weights $\widetilde\omega_k=\omega_{m-k}$. The zero-residual case is included, with minimizer $\Delta A_j=0$. [F1, step 2.1, step 2.2, algebra] ∎
