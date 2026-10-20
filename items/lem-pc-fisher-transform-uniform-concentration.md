---
id: lem-pc-fisher-transform-uniform-concentration
kind: lemma
title: "Uniform concentration of Gaussian sample partial correlations"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-sample-partial-correlation
  - def-gaussian-partial-correlation
  - thm-gaussian-zero-partial-correlation-is-conditional-independence
  - thm-nondegenerate-multivariate-normal-law-has-density
  - def-axiom-of-choice
  - def-multivariate-normal-law
proof_strategy: direct
axiom_use: "Assume AC through the Gaussian-law and conditional-independence interfaces; the residual and concentration calculations are finite-dimensional."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Kalisch and Bühlmann, Estimating High-Dimensional Directed Acyclic Graphs with the PC-Algorithm, Appendix A.2.1, Lemma 3, printed p. 631"
      url: "https://www.jmlr.org/papers/volume8/kalisch07a/kalisch07a.pdf"
    - title: "Lauritzen, Graphical Models lecture notes, §4.1.3, Proposition 4.2, pp. 97–98"
      url: "https://web.math.ku.dk/~lauritzen/papers/gmnotes.pdf"
---

## Statement

Fix $0\le M<1$. There are constants $c_M>0$ and $C_M<\infty$ such that the
following holds. Let $X^{(1)},\ldots,X^{(n)}$ be independent observations from
a nondegenerate Gaussian law, and let $i,j,S$ be as in the definitions of
population and sample partial correlation. Suppose
$|\rho_{ij\mid S}|\le M$ and $n-|S|-3>0$. Then, for $0<t\le1$,
$$ \mathbb P\!\left(\left|g(\widehat\rho_{ij\mid S})-g(\rho_{ij\mid S})\right|>t\right) \le C_M\exp\!\left(-c_M(n-|S|-1)t^2\right), $$
where $g(r)=\tfrac12\log((1+r)/(1-r))$. The constants do not depend on
$i,j,S,n$ or the Gaussian mean and covariance beyond the bound $M$.

## Statement references

[Kalisch and Bühlmann, Appendix A.2.1, Lemma 3](https://www.jmlr.org/papers/volume8/kalisch07a/kalisch07a.pdf)

[Lauritzen, §4.1.3, Proposition 4.2 (Gaussian conditional-independence criterion)](https://web.math.ku.dk/~lauritzen/papers/gmnotes.pdf)

## Facts & Assumptions

**Given:** A nondegenerate Gaussian law, independent observations, a pair $i,j$, a conditioning set $S$, the bound $|\rho_{ij\mid S}|\le M<1$, and $n-|S|-3>0$.

[F1] The population partial correlation is the normalized off-diagonal entry of the Gaussian conditional covariance block. [[def-gaussian-partial-correlation]]

[F2] Under a nondegenerate Gaussian law, the sample partial correlation is the correlation of the two residual columns after projection off the intercept and conditioning columns; the Fisher transform is $g(r)=\operatorname{atanh}(r)$. [[def-sample-partial-correlation]]

[F3] The Gaussian conditional covariance block $K_{ij\mid S}$ is positive definite. [[thm-gaussian-zero-partial-correlation-is-conditional-independence]]

[F4] A nondegenerate Gaussian vector has its usual Lebesgue density, so every proper linear subspace has probability zero. [[thm-nondegenerate-multivariate-normal-law-has-density]]

[F5] A Gaussian vector has normal scalar linear projections with the corresponding projected means and variances. [[def-multivariate-normal-law]]

[A2] AC is assumed by the supplied Gaussian probability interfaces. [[def-axiom-of-choice]]

## Proof

1.1 Put $Y=(X_i,X_j)$ and $Z=X_S$. For nonempty $S$, define $B=\Sigma_{Y,S}\Sigma_{S,S}^{-1}$ and $U=Y-\mu_Y-B(Z-\mu_S)$. Covariance algebra gives $\operatorname{Cov}(U)=K_{ij\mid S}$ and $\operatorname{Cov}(U,Z)=0$. The vector $(U,Z)$ is jointly Gaussian by [F5], since every scalar projection is an affine scalar projection of $X$. Its covariance is block diagonal and positive definite by [F3] and positive definiteness of $\Sigma_{S,S}$. Its density from [F4] factors into the Gaussian densities of $U$ and $Z$: both the determinant and the quadratic form split by blocks. Integrating over rectangles proves independence of $U$ and $Z$. For empty $S$, take $U=Y-\mu_Y$ with covariance $K_{ij\mid\varnothing}$; independence from the empty conditioning tuple is automatic. Across observations the residual pairs are independent, and their entire sample is independent of the conditioning sample, because the joint observation densities multiply. The $S$ coordinates have a nondegenerate Gaussian density because their covariance is a positive-definite principal submatrix. If $|S|=0$, the intercept design has rank one. If $s=|S|>0$, successive independent sample points in $\mathbb R^s$ are affinely independent until there are $s+1$: after $r\le s$ affinely independent points, their affine span has dimension $r-1<s$, and the next point has a density, so lies in that span with probability zero by [F4]. Thus the intercept and $S$ design has rank $s+1$ almost surely. Conditional on that design, an orthonormal basis of its orthogonal complement has dimension $m=n-|S|-1$. In that basis the projected residual pairs are $m$ independent copies of this Gaussian residual; standardizing the two coordinates does not change their sample correlation. Thus the sample partial correlation has the same distribution as $R_m=\frac{\sum_{r=1}^m U_rV_r}{(\sum_{r=1}^mU_r^2)^{1/2}(\sum_{r=1}^mV_r^2)^{1/2}},\qquad m=n-|S|-1,$ for $m$ independent copies $(U_r,V_r)$ of the standardized pair, whose correlation is $\rho=\rho_{ij\mid S}$ by [F1]. The hypothesis gives $m\ge3$. Their covariance block is positive definite by [F3], so the first residual sample column is nonzero almost surely, and conditional on that column the second has a density in $\mathbb R^m$. Its probability of lying in the first column's one-dimensional span is zero by [F4], since $m\ge2$. Thus the two residual columns have rank two almost surely. Together with the full-rank intercept and $S$ design, this makes the centered sample covariance block on $\{i,j\}\cup S$ positive definite. Therefore $R_m\in(-1,1)$ almost surely and the Fisher transform is defined. [given, F1, F2, F3, F4, F5, A2, algebra]

2.1 Represent $U_r=X_r$ and $V_r=\rho X_r+\sqrt{1-\rho^2}E_r$ with independent standard normal vectors $X,E\in\mathbb R^m$. Put $A=\|X\|$, $Z=\langle E,X/A\rangle$, and $W=\|E-ZX/A\|$. Rotational invariance of the standard Gaussian density implies that $A^2\sim\chi_m^2$, $Z\sim N(0,1)$, and $W^2\sim\chi^2_{m-1}$ are independent. Direct substitution gives $R_m=\frac{q}{\sqrt{q^2+W^2}},\qquad q=\frac{\rho A}{\sqrt{1-\rho^2}}+Z,$ and hence $g(R_m)=\operatorname{arsinh}(q/W)$. Rotational invariance follows directly from the standard Gaussian density, and it makes $A,Z,W$ independent. Also $\operatorname{arsinh}(\rho/\sqrt{1-\rho^2})=g(\rho)$. [step 1.1, F4, construct, algebra]

3.1 Let $B=M/\sqrt{1-M^2}$ and $L=4B+2$. On the event $|A/\sqrt m-1|\le\delta,\quad |W/\sqrt m-1|\le\delta,\quad |Z|/\sqrt m\le\delta,$ where $0<\delta\le1/2$, one has $\left|\frac qW-\frac{\rho}{\sqrt{1-\rho^2}}\right| \le \frac{(2B+1)\delta}{1-\delta}\le L\delta.$ Since $|\operatorname{arsinh}'(x)|=1/\sqrt{1+x^2}\le1$, step 2.1 yields $|g(R_m)-g(\rho)|\le L\delta$. [F1, F2, step 2.1, algebra]

4.1 For $Q\sim\chi_k^2$, its moment generating function, obtained by multiplying the $k$ one-dimensional Gaussian integrals, is $\mathbb E e^{sQ}=(1-2s)^{-k/2}$ for $s<1/2$. For $\delta>0$, Markov's inequality optimized at $s=\delta/[2(1+\delta)]$ gives $\mathbb P(Q/k\ge1+\delta)\le e^{-k(\delta-\log(1+\delta))/2}$. For $0<\delta<1$, the negative choice $s=-\delta/[2(1-\delta)]$ gives $\mathbb P(Q/k\le1-\delta)\le e^{-k(-\delta-\log(1-\delta))/2}$. Put $\delta_+=2u+u^2\le3$ and $\delta_-=2u-u^2\ge u$. The inequalities $\delta-\log(1+\delta)=\int_0^\delta x/(1+x)\,dx\ge\delta^2/8$ for $0\le\delta\le3$ and $-\delta-\log(1-\delta)\ge\delta^2/2$ imply $\mathbb P\bigl(|\sqrt{Q/k}-1|>u\bigr)\le2e^{-ku^2/8}\qquad(0<u<1).$ Applying this to $A^2$ and $W^2$, and using $|\sqrt{(m-1)/m}-1|\le1/m\le\delta/2$, shows that $|W/\sqrt m-1|>\delta$ implies $|W/\sqrt{m-1}-1|>\delta/2$. Thus for $2/m\le\delta\le1/2$, $\mathbb P\bigl(|A/\sqrt m-1|>\delta\text{ or }|W/\sqrt m-1|>\delta\bigr) \le4e^{-m\delta^2/64}.$ The standard normal moment generating function $\mathbb Ee^{sZ}=e^{s^2/2}$, with Markov's inequality optimized at $s=\delta\sqrt m$, gives $\mathbb P(|Z|/\sqrt m>\delta)\le2e^{-m\delta^2/2}$. For $0<\delta<2/m$, the trivial bound $1\le6e^{-m\delta^2/64}$ applies. Thus the complement of the event in step 3.1 has probability at most $6e^{-m\delta^2/64}$ for every $0<\delta\le1/2$. [step 2.1, step 3.1, F4, algebra]

5.1 Set $\delta=t/L$. Since $L\ge2$ and $0<t\le1$, step 3.1 applies and its complement contains the event in the Statement. Step 4.1 therefore bounds that event by $6\exp(-mt^2/(64L^2))$. Taking $C_M=6$ and $c_M=(64L^2)^{-1}$ proves the claim. [given, step 3.1, step 4.1, algebra] ∎
