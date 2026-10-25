---
id: thm-gaussian-linear-model-qr-and-exact-t-f-pivots
kind: theorem
title: "QR decomposition gives exact t and F pivots in the fixed Gaussian linear model"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 4
deps:
  - cor-dimension-of-a-direct-sum
  - thm-dimension-of-a-linear-subspace
  - cor-continuous-functions-are-borel-measurable
  - cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases
  - def-axiom-of-choice
  - def-chi-square-law
  - def-countable-choice
  - def-orthogonal-projection
  - def-statistic-and-estimator
  - def-standard-normal-and-normal-laws
  - lem-axiom-of-choice-implies-countable-choice
  - lem-measurable-functions-preserve-independence
  - lem-positive-df-chi-square-has-density-and-regular-cdf
  - lem-student-t-and-f-cdfs-are-continuous-and-strictly-increasing
  - thm-finite-dimensional-orthogonal-decomposition
  - thm-gram-schmidt-orthonormalisation
  - thm-grouping-independent-sigma-algebras
  - thm-least-squares-solutions-and-normal-equation
  - thm-orthogonal-transform-preserves-standard-normal-product-law
  - def-student-t-and-f-laws
  - prop-orthogonal-projection-formula-and-linearity
  - prop-pythagorean-parallelogram-and-polarisation-identities
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  repair: research/statistical-models-experiments-62-published-gaussian-regression-repair.json
sources:
  references:
    - title: "MIT 18.S096, Regression Analysis, Lecture 6, Normal Regression Models"
      url: "https://ocw.iti.hr/courses/mathematics/18-s096-topics-in-mathematics-with-applications-in-finance-fall-2013/lecture-notes/MIT18_S096F13_lecnote6.pdf"
    - title: "Yen-Chi Chen, UW STAT 512 Lecture 8: Linear Models and Multivariate Normal Distributions"
      url: "https://faculty.washington.edu/yenchic/20A_stat512/Lec8_Linear.pdf"
---

## Statement

Assume the Axiom of Choice. Fix a deterministic matrix $X\in\mathbb R^{n\times p}$ with $n>p\ge1$ whose $p$ columns are linearly independent. Use the experiment on $(\mathbb R^n,\mathcal B(\mathbb R^n))$ indexed by $(\beta,\sigma^2)\in\mathbb R^p\times(0,\infty)$, with observation $Y=X\beta+\varepsilon$ and independent errors $\varepsilon_i\sim N(0,\sigma^2)$. Define the least-squares statistic and residual sum of squares by
$$\widehat\beta=(X^TX)^{-1}X^TY,\qquad P_X=X(X^TX)^{-1}X^T,\qquad RSS_X=\|(I_n-P_X)Y\|^2,\qquad S^2=\frac{RSS_X}{n-p},\qquad S=\sqrt{S^2}.$$
For every nonzero $c\in\mathbb R^p$,
$$\widetilde T_c:=\begin{cases} \dfrac{c^T\widehat\beta-c^T\beta}{S\sqrt{c^T(X^TX)^{-1}c}},&S>0,\\ 0,&S=0 \end{cases} \sim t_{n-p},\qquad \frac{RSS_X}{\sigma^2}\sim\chi_{n-p}^2,$$
and $\widehat\beta$ is independent of $RSS_X$, with $S>0$ almost surely.

For nested deterministic full and reduced design spaces $W_R\subset W_U\subseteq\mathbb R^n$ of dimensions $p-q$ and $p$, where $q$ is an integer and $1\le q\le p<n$, let $P_R,P_U$ be the orthogonal projections onto these spaces and define $RSS_R=\|(I-P_R)Y\|^2$ and $RSS_U=\|(I-P_U)Y\|^2$. Under the null hypothesis that the mean vector belongs to $W_R$,
$$\widetilde F:=\begin{cases} \dfrac{(RSS_R-RSS_U)/q}{RSS_U/(n-p)},&RSS_U>0,\\ 0,&RSS_U=0 \end{cases} \sim F_{q,n-p}.$$
The numerator and denominator chi-square contributions are independent. All t and F denominator degrees of freedom in the statement are positive.

## Facts & Assumptions

**Given:** The Axiom of Choice, fixed full-rank design matrices as in the Statement, and independent normal errors of variance $\sigma^2>0$.

[A1] The Axiom of Choice is assumed for the standard-normal construction and orthogonal-invariance theorem. [[def-axiom-of-choice]]

[A2] Under the Axiom of Choice, the sequence-selection conclusion of the countable-choice lemma gives Countable Choice, the hypothesis of the continuous-map measurability corollary. [[def-countable-choice]] [[lem-axiom-of-choice-implies-countable-choice]] [[cor-continuous-functions-are-borel-measurable]]

[F1] For a linear map between finite-dimensional inner-product spaces, least-squares minimizers satisfy the normal equation; with full column rank the solution is unique. [[thm-least-squares-solutions-and-normal-equation]]

[F2] Gram–Schmidt turns a finite independent list into an orthonormal list with the same successive spans. [[thm-gram-schmidt-orthonormalisation]]

[F3] Finite-dimensional subspaces have orthogonal complements and orthonormal bases. [[thm-finite-dimensional-orthogonal-decomposition]] [[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]]

[F4] Standardizing $N(0,\sigma^2)$ coordinates gives independent standard normals; an orthogonal transformation preserves their joint law and independent coordinates remain independent in disjoint blocks. [[def-standard-normal-and-normal-laws]] [[thm-orthogonal-transform-preserves-standard-normal-product-law]] [[thm-grouping-independent-sigma-algebras]] [[lem-measurable-functions-preserve-independence]]

[F5] The law of $\chi_k^2$ is the squared norm of $k$ independent standard normals; for $k\ge1$ it is positive almost surely. [[def-chi-square-law]] [[lem-positive-df-chi-square-has-density-and-regular-cdf]]

[F6] The t law is the piecewise ratio of an independent normal and positive-degree chi-square variable, and the F law is the corresponding ratio of independent positive-degree chi-square variables; both are set to zero on denominator-zero sets, and their CDFs are continuous and strictly increasing on their supports. [[def-student-t-and-f-laws]] [[lem-student-t-and-f-cdfs-are-continuous-and-strictly-increasing]]

[F7] A statistic is a measurable data map, and under Countable Choice continuous Euclidean maps are Borel measurable. [[def-statistic-and-estimator]] [[cor-continuous-functions-are-borel-measurable]]

[F8] Orthogonal projections are linear and satisfy $P_W^2=P_W$ and $I-P_W=P_{W^\perp}$. [[def-orthogonal-projection]] [[prop-orthogonal-projection-formula-and-linearity]]

[F9] If vectors $a,b$ are orthogonal, then $\|a+b\|^2=\|a\|^2+\|b\|^2$. [[prop-pythagorean-parallelogram-and-polarisation-identities]]

[F10] Every subspace of a finite-dimensional vector space is finite-dimensional,
and the dimension of a finite direct sum of finite-dimensional subspaces is
the sum of their dimensions. [[thm-dimension-of-a-linear-subspace]]
[[cor-dimension-of-a-direct-sum]]

## Proof

**Given:** The hypotheses in the Statement.

1.1 By full column rank, the columns of $X$ are linearly independent. Apply [F2] to obtain orthonormal columns of $Q\in\mathbb R^{n\times p}$ with the same successive spans. Expressing each column of $X$ in this basis gives $X=QR$, where $R$ is upper triangular; its diagonal entries are the nonzero Gram–Schmidt residual norms, so $R$ is invertible. Let $W=\operatorname{col}X$. The columns of $X$ form a basis of $W$, so $\dim W=p$. By [F3], $\mathbb R^n=W\oplus W^\perp$. The subspace $W^\perp$ is finite-dimensional by [F10], and direct-sum dimension additivity in [F10] gives $n=p+\dim W^\perp$, hence $\dim W^\perp=n-p$. By [F3], choose an orthonormal basis of this complement with exactly $n-p$ vectors as the columns of $Q_0$; together with $Q$ it forms an orthonormal basis $[Q\ Q_0]$ of $\mathbb R^n$. [F2, F3, F10, choose, algebra]

2.1 Set $U=[Q\ Q_0]$. Then $U$ is orthogonal. Standardizing the independent errors gives $\eta=\varepsilon/\sigma$ with independent standard-normal coordinates, so [F4] makes $U^T\eta=(Z_Q,Z_0)$ a standard-normal product vector with independent coordinate blocks. Since $X=QR$ and $X^TX=R^TR$, the normal-equation solution in [F1] is $\widehat\beta=R^{-1}Q^TY=\beta+\sigma R^{-1}Z_Q$. Substituting $X=QR$ and $(R^TR)^{-1}=R^{-1}R^{-T}$ gives $P_X=Q R(R^TR)^{-1}R^TQ^T=Q[RR^{-1}R^{-T}R^T]Q^T=QQ^T$, because $RR^{-1}=I_p$ and $R^{-T}R^T=I_p$. Since $U$ is orthogonal, $I_n-P_X=Q_0Q_0^T$. Thus $(I_n-P_X)Y=\sigma Q_0Z_0$, so $RSS_X/\sigma^2=\|Z_0\|^2\sim\chi_{n-p}^2$ by [F5]. By [A2] and [F7], the linear maps defining $\widehat\beta$ and $Q_0Z_0$, and the squared-norm map defining $RSS_X$, are Borel; hence these quantities are measurable functions of the independent coordinate blocks and $\widehat\beta$ is independent of $RSS_X$ by [F4]. The map defining $\widehat\beta$ is linear and Borel, so it is a statistic for the stated experiment. The residual map and squared norm are continuous, so $RSS_X$ and $S$ are continuous. The piecewise t version in the Statement is Borel: its quotient is continuous on the Borel set $S>0$ and its value on $S=0$ is constant. Its denominator has positive degree $n-p$, hence $S>0$ almost surely by [F5]. [A1, A2, F1, F4, F5, F7, step 1.1, algebra]

3.1 For $c\ne0$, put $v=R^{-T}c$. Invertibility of $R$ gives $v\ne0$. Complete $v/\|v\|$ to an orthonormal basis of $\mathbb R^p$ by [F3]; applying [F4] to the resulting orthogonal matrix shows $G_c=v^TZ_Q/\|v\|\sim N(0,1)$. Under [A2], the continuous linear map defining $G_c$ is Borel. It is independent of $Q_0:=\|Z_0\|^2\sim\chi_{n-p}^2$, because $Z_Q$ and $Z_0$ are independent blocks and $G_c$ and the squared-norm map are measurable functions of those blocks. Since $X^TX=R^TR$, $\|v\|^2=c^TR^{-1}R^{-T}c=c^T(X^TX)^{-1}c$. Thus on $Q_0>0$ the displayed contrast ratio is $G_c/\sqrt{Q_0/(n-p)}$; on $Q_0=0$ its version $\widetilde T_c$ is zero. This is exactly the extension in the definition of $t_{n-p}$, so [F5]–[F6] give $\widetilde T_c\sim t_{n-p}$. [A2, F3, F4, F5, F6, step 2.1, algebra]

4.1 For the nested models, let $W_D=W_U\cap W_R^\perp$. For $u\in W_U$, its orthogonal decomposition relative to $W_R$ has a $W_R$ component and a remaining component in $W_U\cap W_R^\perp=W_D$, because $W_R\subseteq W_U$. Thus [F3] gives $W_U=W_R\oplus W_D$ and $\mathbb R^n=W_U\oplus W_U^\perp$. All these subspaces are finite-dimensional by [F10]. Applying direct-sum dimension additivity in [F10] to the two decompositions gives $p=(p-q)+\dim W_D$ and $n=p+\dim W_U^\perp$, hence $\dim W_D=q$ and $\dim W_U^\perp=n-p$. Combining the orthogonal decompositions gives $\mathbb R^n=W_R\oplus W_D\oplus W_U^\perp$, including the zero-dimensional $W_R$ case $q=p$. Choose orthonormal bases in these three spaces and concatenate them into an orthogonal matrix $V$. By [F4], the coordinates of $V^T\varepsilon/\sigma$ in the three blocks are independent standard normals. Under the null, $P_R(X\beta)=P_U(X\beta)=X\beta$, so $(I-P_R)Y=(I-P_R)\varepsilon=P_{W_D}\varepsilon+P_{W_U^\perp}\varepsilon$ and $(I-P_U)Y=(I-P_U)\varepsilon=P_{W_U^\perp}\varepsilon$: here [F8] identifies $I-P_R=P_{W_R^\perp}$ and $I-P_U=P_{W_U^\perp}$, while the direct sum in [F3] splits the first projection into the two orthogonal components. The coordinate-block maps and the linear projections are continuous, and squared norms are continuous, so [A2] and [F7] make all these random vectors and real variables measurable. Orthogonality and [F9] give $RSS_R-RSS_U=\sigma^2\sum_{j=1}^{q}G_j^2$ and $RSS_U=\sigma^2\sum_{j=1}^{n-p}H_j^2$, where the $G$ and $H$ coordinate blocks are independent standard-normal blocks. By [F5] these sums are independent $\sigma^2\chi_q^2$ and $\sigma^2\chi_{n-p}^2$ variables; both degrees are positive. The piecewise ratio $\widetilde F$ is Borel, since it is continuous on the Borel set $RSS_U>0$ and constant on $RSS_U=0$. Its value is the scaled ratio on $Q_H:=\sum_{j=1}^{n-p}H_j^2>0$ and $0$ when $Q_H=0$; by [F6] this is exactly the defined $F_{q,n-p}$ version. The F denominator is positive almost surely by [F5], so $\widetilde F\sim F_{q,n-p}$. [A1, A2, F3, F4, F5, F6, F7, F8, F9, F10, step 1.1, algebra] ∎


## Remarks

The blocks below depict orthogonal summands, not subspaces drawn to scale. All subspaces are deterministic. In the first row, $W=\mathrm{col}(X)$; the fitted statistic depends on the $W$ error block, while the residual depends on the independent $W^\perp$ error block (steps 1.1–3.1).

```tikz
\begin{tikzpicture}[every node/.style={align=center},block/.style={draw,rounded corners,minimum width=3.6cm,minimum height=1.65cm}]
\node at (0,3.2) {$\mathbb R^n=W\oplus W^\perp$};
\node[block] at (-2.1,1.9) {$W=\mathrm{col}(X)$\\$\dim W=p$\\$P_W\varepsilon=\sigma QZ_Q$};
\node[block] at (2.1,1.9) {$W^\perp$\\$\dim W^\perp=n-p$\\$P_{W^\perp}\varepsilon=\sigma Q_0Z_0$};
\node at (0,1.9) {$\oplus$};
\node at (0,0.5) {$Z_Q\ \mathrm{and}\ Z_0\ \mathrm{independent},\qquad RSS_X/\sigma^2=\|Z_0\|^2\sim\chi^2_{n-p}$};
\node at (0,-0.7) {$\mathbb R^n=W_R\oplus W_D\oplus W_U^\perp,\qquad W_D=W_U\cap W_R^\perp$};
\node[block,minimum width=3.2cm] at (-3.7,-2) {$W_R$\\$\dim W_R=p-q$\\$P_R\varepsilon$};
\node[block,minimum width=3.2cm] at (0,-2) {$W_D$\\$\dim W_D=q$\\$P_{W_D}\varepsilon$};
\node[block,minimum width=3.2cm] at (3.7,-2) {$W_U^\perp$\\$\dim W_U^\perp=n-p$\\$P_{W_U^\perp}\varepsilon$};
\node at (-1.85,-2) {$\oplus$};
\node at (1.85,-2) {$\oplus$};
\node at (0,-3.5) {$\mathrm{Under\ the\ null:}\quad (RSS_R-RSS_U)/\sigma^2\sim\chi_q^2,\quad RSS_U/\sigma^2\sim\chi_{n-p}^2$};
\end{tikzpicture}
```

In the second row, the three projected error blocks are independent. Under the null hypothesis, the squared norms of the middle and right blocks are respectively $RSS_R-RSS_U$ and $RSS_U$, giving the independent chi-square contributions in the F ratio (step 4.1). When $q=p$, the left block is the zero space and its projected error is zero. The rigorous proof above is independent of this illustration.
