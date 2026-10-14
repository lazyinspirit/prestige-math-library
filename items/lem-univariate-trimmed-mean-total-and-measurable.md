---
id: lem-univariate-trimmed-mean-total-and-measurable
kind: lemma
title: "The split-sample univariate trimmed mean is total and Borel measurable"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 1
deps: [alg-univariate-trimmed-mean, def-borel-sigma-algebra, def-measurable-function-between-measurable-spaces]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Gábor Lugosi and Shahar Mendelson, Robust Multivariate Mean Estimation: The Optimality of Trimmed Mean, §2"
      url: "https://arxiv.org/pdf/1907.11391"
      locator: "PDF pp. 8–9; split-sample order statistics and winsorized univariate estimator. The item proves continuity and Borel measurability locally."
    - title: "Gábor Lugosi, Mean Estimation in High Dimension, §2"
      url: "https://ems.press/content/book-chapter-files/33347?nt=1"
      locator: "PDF pp. 2–3; independent trimmed-mean and finite-variance context."
---

## Statement

Fix an integer $N\ge1$, $0<\varepsilon\le1/4$, and the split-sample rule in [[alg-univariate-trimmed-mean]]. It defines a total continuous, hence Borel measurable, map $\mathbb R^{2N}\to\mathbb R$ for every admissible pair of observed samples, including tied values.

## Facts & Assumptions

**Given:** $N\ge1$, $0<\varepsilon\le1/4$, and two real samples of length $N$.

[F1] The algorithm uses ranks $r(u)=\lceil uN\rceil$, sets its cutoffs to the second-half order statistics at ranks $r(\varepsilon)$ and $r(1-\varepsilon)$, clips first-half observations with $\phi_{\alpha,\beta}(x)=\min\{\beta,\max\{\alpha,x\}\}$, and returns their finite average ([[alg-univariate-trimmed-mean]]).

[F2] A map between measurable spaces is Borel when preimages of Borel sets are Borel; open sets belong to the Borel sigma-algebra ([[def-measurable-function-between-measurable-spaces]], [[def-borel-sigma-algebra]]).

## Proof

**Proof technique:** direct.

**Given:** $N\ge1$, $0<\varepsilon\le1/4$, and two real samples of length $N$.

1.1 Since $0<\varepsilon\le1/4$, both $\varepsilon$ and $1-\varepsilon$ lie in $(0,1]$. Thus $1\le r(\varepsilon),r(1-\varepsilon)\le N$, and monotonicity of the ceiling gives $r(\varepsilon)\le r(1-\varepsilon)$. The corresponding sorted values therefore satisfy $\alpha\le\beta$, so every clipped value in [F1] is a finite real and the output is defined for every input, including ties. [F1, given, algebra]

1.2 For a scalar list $y_1,\ldots,y_N$, its $k$th order statistic equals $\min_{J\subseteq\{1,\ldots,N\},\,|J|=k}\max_{j\in J}y_j$: every $k$-subset has a maximum at least the $k$th smallest value, while the indices of the first $k$ sorted values attain it. This is a finite minimum of finite maxima of coordinate functions, hence is continuous in the list. The two cutoff maps in [F1] are therefore continuous; $\phi_{\alpha,\beta}(x)$ is continuous in $(\alpha,\beta,x)$ because it is a composition of minimum and maximum, and the final finite average is continuous. Hence the estimator is a continuous map on $\mathbb R^{2N}$. [F1, given, algebra]

2.1 For any Borel target set, its preimage under a continuous map is Borel: preimages of open sets are open, and the sets whose preimages are Borel form a sigma-algebra containing all open sets. By [F2] this is exactly Borel measurability, so the total estimator from step 1.1 is Borel. [F2, step 1.1, step 1.2] ∎
