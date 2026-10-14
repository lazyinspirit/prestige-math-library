---
id: lem-clean-block-sparse-gaussian-covariance-minimax-lower-bound
kind: lemma
title: Clean block-sparse Gaussian covariance has squared operator lower rate s log(ep/s) over n
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
deps:
  - def-block-sparse-covariance-class
  - def-multivariate-normal-law
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - def-frobenius-matrix-norm
  - thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison
  - lem-gaussian-kullback-leibler-covariance-formula
  - thm-pinsker
  - thm-fano-packing
  - thm-product-kl-additivity
  - thm-two-point-le-cam-risk-bound
  - def-axiom-of-choice
  - def-measurable-function-between-measurable-spaces
  - def-borel-sigma-algebra
  - def-randomized-procedure-as-a-markov-kernel
  - def-dirac-measure
  - prop-dirac-measure-is-a-probability-measure
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_use: AC is inherited through the finite-dimensional Gaussian-law supplier and Fano packing theorem. Every packing used below is an explicit finite set and needs no further choice.
sources:
  references:
    - title: "Mengjie Chen, Chao Gao and Zhao Ren, Robust Covariance and Scatter Matrix Estimation under Huber's Contamination Model, proof of Theorem 3.7"
      url: "https://arxiv.org/pdf/1506.00691"
    - title: "Philippe Rigollet, 18.S997 High-Dimensional Statistics Lecture Notes, MIT OpenCourseWare, Chapter 5"
      url: "https://ocw.mit.edu/courses/18-s997-high-dimensional-statistics-spring-2015/619e4ae252f1b26cbe0f7a29d5932978_MIT18_S997S15_CourseNotes.pdf"
dependency_level: 6
---

## Statement

Assume AC. Fix $M>0$ and integers $1\le s\le p/2$. There are constants
$c_M,c_1>0$ such that if $s\log(ep/s)/n\le c_1$, then
$$\inf_{\widehat\Sigma}\sup_{\Sigma\in\mathcal F_{p,s}(M)} P_\Sigma^{\otimes n}\!\left\{\|\widehat\Sigma-\Sigma\|_{\rm op}^2 \ge c_M\frac{s\log(ep/s)}n\right\}\ge c_1.$$
The infimum is over Borel maps $(\mathbb R^p)^n\to\mathbb R^{p\times p}$.
This is the
single-common-block class, not a row-sparsity class.

## Facts & Assumptions

**Given:** AC, $M>0$, integers $p,n\ge1$ and $1\le s\le p/2$, and clean iid
observations with law $N_p(0,\Sigma)$ for an unknown
$\Sigma\in\mathcal F_{p,s}(M)$.

[F1] [[def-block-sparse-covariance-class]]: all off-diagonal entries of a
candidate covariance lie in one common block of size at most $s$.

[F2] [[lem-gaussian-kullback-leibler-covariance-formula]]: the KL divergence
between positive-definite centered Gaussian laws is
$\frac12[\operatorname{tr}(\Sigma_1^{-1}\Sigma_0)-p+
\log(\det\Sigma_1/\det\Sigma_0)]$.

[F3] [[thm-product-kl-additivity]]: KL divergence of finite product laws is
the sum of the component divergences.

[F4] [[thm-fano-packing]]: for a uniform finite family with pairwise
target separation $\Delta$ in a metric space and reference law $Q$, the
average squared-metric risk of any estimator kernel is at least
$\frac{\Delta^2}{4}\bigl(1-(K_Q+\log2)/\log N\bigr)$, where
$K_Q=N^{-1}\sum_{j=1}^N D(P_j\|Q)$. A classifier with the discrete metric
has risk equal to its error probability.

[F5] [[thm-pinsker]]: under the event-supremum total-variation convention,
$\|P-Q\|_{\rm TV}\le\sqrt{D(P\|Q)/2}$.

[F6] [[thm-two-point-le-cam-risk-bound]]: for two scalar targets at
distance $\Delta$, every estimator has maximum squared-error risk at
least $\frac{\Delta^2}{8}(1-\|P_0-P_1\|_{\rm TV})$. With binary targets
$0,1$ and binary actions, this is a testing-error lower bound.

[F7] [[def-measurable-function-between-measurable-spaces]],
[[def-borel-sigma-algebra]], [[def-randomized-procedure-as-a-markov-kernel]],
[[def-dirac-measure]], and
[[prop-dirac-measure-is-a-probability-measure]]: a Borel finite-valued
classifier defines a deterministic probability kernel by its Dirac law.

## Proof

1.1 Suppose $s=1$ and $p\ge3$. For $1\le j\le p$, let $\Sigma_j=(M/2)I+h e_je_j^T$, where $h=\gamma M\sqrt{\log p/n}$. These matrices are diagonal, so [F1] places them in $\mathcal F_{p,1}(M)$. Since $\log p/n\le c_1$, choose $\gamma\sqrt{c_1}\le1/2$ so their largest eigenvalue is at most $M$. Their pairwise operator distance is $h$. Relative to $Q_0=N_p(0,(M/2)I)$, [F2] and $t=2h/M\le1$ give $$D(N_p(0,\Sigma_j)\|Q_0)=\frac12[t-\log(1+t)]\le t^2/4.$$ The inequality follows by integrating $x/(1+x)\le x$ from $0$ to $t$. By [F3], each $n$-sample KL is at most $\gamma^2\log p$. [F1, F2, F3, algebra]

1.2 The remaining case with $s=1$ is $p=2$. Let $\Sigma_0=(M/2)I$ and $\Sigma_1=(M/2)I+h e_1e_1^T$, where $h=\gamma M\sqrt{\log(2e)/n}$. The sample-size condition and small $\gamma$ make both matrices members of $\mathcal F_{2,1}(M)$. With $t=2h/M\le1/2$, [F2] gives $$D(N_2(0,\Sigma_0)\|N_2(0,\Sigma_1)) =\frac12[\log(1+t)+(1+t)^{-1}-1]\le t^2/4.$$ The derivative of the bracket is $t/(1+t)^2\le t$, proving the inequality. By [F3], choose $\gamma$ small enough that the $n$-sample KL is at most $1/2$. Pinsker [F5] gives total variation at most $1/2$; [F6] then gives maximum binary testing error at least $1/16$. A wrong nearest covariance decision forces error at least $h/2$, and its decision cells are Borel by finite distance comparisons, so [F7] gives an admissible test kernel. Thus one law has probability at least $1/16$ of squared error at least $h^2/4=\gamma^2M^2\log(2e)/(4n)$, which is the required rate. [F2, F3, F5, F6, F7, algebra]

1.3 Suppose $s\ge2$, and put $k=s-1$ and $m=\lfloor(p-1)/k\rfloor$. Since $p\ge2s$, $m\ge2$. Partition $km$ of the $p-1$ coordinates other than coordinate $1$ into $k$ disjoint groups of size $m$. For each word $\omega\in[m]^k$, select its indexed coordinate in every group and form the unit vector $v_\omega\in\mathbb R^p$ with value $k^{-1/2}$ on those $k$ coordinates and zero elsewhere. There are $m^k$ words. Greedily retain a word and delete its Hamming ball of radius $\lfloor k/100\rfloor$. Each ball has at most $$\sum_{j\le k/100}\binom{k}{j}(m-1)^j \le\exp\!\left(kh(1/100)+(k/100)\log m\right)$$ words. To obtain the binomial sum bound, put $\alpha=1/100$; in $1=\sum_{j=0}^k\binom{k}{j}\alpha^j(1-\alpha)^{k-j}$, each weight for $j\le\alpha k$ is at least $e^{-kh(\alpha)}$, and $(m-1)^j\le m^{\alpha k}$. [F1, construct, algebra]

2.1 Use the $p$ diagonal matrices from step 1.1 as the packing and $Q_0^{\otimes n}$ as reference. Choose $\gamma$ so their average KL is at most $\frac{1}{10}\log p$. The Fano factor $1-\frac{1}{10}-\log2/\log p>1/4$ for $p\ge3$, so [F4] gives classification error greater than $1/16$. Classify an estimator by its nearest covariance, resolving ties by least index. This rule is Borel because its decision cells are finite intersections of strict or weak comparisons of continuous distances, and [F7] turns it into a deterministic test kernel. If it is misclassified, the triangle inequality forces operator error at least $h/2$. Thus the supremum tail probability is greater than $1/16$ at threshold $h^2/4$. Because $\log(ep)=1+\log p\le2\log p$, $h^2/4\ge\gamma^2M^2\log(ep)/(8n)$, giving the required rate after reducing $c_M$ if needed. [F4, F7, step 1.1, algebra]

2.2 The retained code $\mathcal W$ has pairwise Hamming distance greater than $k/100$ and $$\log|\mathcal W|\ge k[(99/100)\log m-h(1/100)] \ge\frac{9}{10}k\log m\ge\frac{9}{80}s\log(ep/s).$$ Here $h(1/100)<\frac{3}{50}$ and $\log m\ge\log2>\frac{69}{100}$. Also $m\ge p/(2s)$ because $(p-1)/(s-1)\ge p/s$ and $\lfloor x\rfloor\ge x/2$ for $x\ge2$. Thus $\log(ep/s)=1+\log(p/s)\le1+\log2+\log m\le4\log m$, and $k\ge s/2$. Further $|\mathcal W|\ge3$: if $k=1$, then $m\ge3$ and no word is removed by a radius-zero ball; if $k\ge2$, the displayed bound gives $\log|\mathcal W|\ge\frac{9}{5}\log2>\log3$. Distinct code vectors satisfy $\|v_\omega-v_{\omega'}\|_2^2=2d_H(\omega,\omega')/k>1/50$. [step 1.3, algebra]

3.1 Define $\Sigma_\omega=(M/2)I+a(e_1v_\omega^T+v_\omega e_1^T)$, where $a=\gamma M\sqrt{s\log(ep/s)/n}$. The off-diagonal entries lie in the block formed by coordinate $1$ and the $k=s-1$ selected coordinates, so $\Sigma_\omega\in\mathcal F_{p,s}(M)$ by [F1]. The perturbation has eigenvalues $a,-a$ on $\operatorname{span}\{e_1,v_\omega\}$ and zero on its orthogonal complement. Choose $\gamma\sqrt{c_1}\le1/4$, so $a\le M/4$; then every $\Sigma_\omega$ is positive definite and has top eigenvalue at most $M$. For distinct codewords, $$\|\Sigma_\omega-\Sigma_{\omega'}\|_{\rm op} =a\|v_\omega-v_{\omega'}\|_2>a/8.$$ [F1, step 2.2, algebra]

4.1 Let $Q_0=N_p(0,(M/2)I)$. The relative perturbation has eigenvalues $2a/M,-2a/M$ and zero otherwise. By [F2], $$D(N_p(0,\Sigma_\omega)\|Q_0) =-\frac12\log(1-(2a/M)^2)\le4(a/M)^2.$$ The scalar inequality follows by integrating $(1-x)^{-1}\le2$ from $0$ to $x=(2a/M)^2\le1/2$. By [F3], the $n$-sample KL to $Q_0^{\otimes n}$ is at most $4\gamma^2s\log(ep/s)$. Since $\log|\mathcal W|\ge\frac{9}{10}s\log(ep/s)/8$, choose $\gamma^2\le\frac{9}{3200}$ so this KL is at most $\frac{1}{10}\log|\mathcal W|$. [F2, F3, step 2.2, step 3.1, algebra]

5.1 The Fano factor obeys $$1-\frac{1}{10}-\frac{\log2}{\log|\mathcal W|} \ge1-\frac{1}{10}-\frac{\log2}{\log3}>\frac14.$$ Thus [F4] gives every classifier error greater than $1/16$. Nearest-covariance classification from any estimator is wrong only when its operator error is at least half the separation from step 3.1, hence at least $a/16$. The finite nearest-code rule is Borel by finite distance comparisons, so [F7] makes it a classifier kernel. The supremum tail probability at threshold $a^2/256$ is therefore greater than $1/16$, proving the rate for $s\ge2$. [F4, F7, step 2.2, step 3.1, step 4.1, algebra]

6.1 Choose $c_1\le1/16$ and $c_M\le\gamma^2M^2/256$. The bounds from steps 2.1, 1.2, and 5.1 cover the cases $s=1,p\ge3$, $s=1,p=2$, and $s\ge2$, respectively, and give probability at least $c_1$ at threshold $c_Ms\log(ep/s)/n$. Taking the infimum over estimators and combining the cases proves the claim. [step 2.1, step 1.2, step 5.1, algebra] ∎