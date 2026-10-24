---
id: prop-covariance-factor-model-rotation-ambiguity
kind: proposition
title: "Orthogonal rotation preserves the covariance factor model"
status: published
dependency_level: 1
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-covariance-factor-model]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  scraped: []
  references:
    - title: "Trevor Hastie, Robert Tibshirani, and Jerome Friedman, The Elements of Statistical Learning, second edition, corrected 12th printing"
      url: "https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS"
      locator: "§14.7.1, printed pp. 558–560, equations (14.79)–(14.81)"
---

## Statement

In the covariance factor model, write $X=AS+\varepsilon$ with $A\in\mathbb R^{p\times q}$, $q<p$, $\mathbb E[S]=\mathbb E[\varepsilon]=0$, $\operatorname{Cov}(S)=I_q$, $\operatorname{Cov}(\varepsilon)=D$ diagonal positive, and $\operatorname{Cov}(S,\varepsilon)=0$. Then

$$\operatorname{Cov}(X)=AA^T+D.$$

For every orthogonal matrix $R\in\mathbb R^{q\times q}$, the transformed loadings and factors $A_R=AR^T$ and $S_R=RS$ give another representation with the same covariance matrix. Thus covariance alone does not identify a unique loading matrix or latent orientation. This is a covariance-model claim; if the factors are additionally required to be mutually independent, the proposition does not claim that arbitrary rotations preserve that extra requirement.

## Statement references

[Hastie, Tibshirani, and Friedman, §14.7.1](https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS)

## Facts & Assumptions

**Given:** A covariance factor model and an orthogonal matrix $R$, so $R^TR=I_q$.

[F1] [[def-covariance-factor-model]]: $X=AS+\varepsilon$, with zero means, $\operatorname{Cov}(S)=I_q$, $\operatorname{Cov}(\varepsilon)=D$, and $\operatorname{Cov}(S,\varepsilon)=0$.

## Proof

1.1 By [F1], bilinearity of covariance gives $\operatorname{Cov}(X)=A\operatorname{Cov}(S)A^T+A\operatorname{Cov}(S,\varepsilon)+\operatorname{Cov}(\varepsilon,S)A^T+\operatorname{Cov}(\varepsilon)=AA^T+D$. [F1, given, algebra]

2.1 The transformed factors have mean zero, covariance $R I_q R^T=I_q$, and cross-covariance $\operatorname{Cov}(RS,\varepsilon)=R\operatorname{Cov}(S,\varepsilon)=0$. Also $A_RS_R=AR^TRS=AS$, and $A_RA_R^T+D=AR^TRA^T+D=AA^T+D$. Hence the transformed pair is another covariance factor model with the same covariance. [F1, step 1.1, algebra] ∎

## Remarks

For a fixed residual vector $e\in\mathbb R^p$, define $f_e(s)=As+e$ and $f_{R,e}(t)=AR^Tt+e$. The square commutes because $f_{R,e}(Rs)=AR^TRs+e=f_e(s)$:

```tikzcd
[column sep=large, row sep=large, scale=1.6, transform shape]
\mathbb R^q \arrow[r, "f_e"] \arrow[d, "R"'] & \mathbb R^p \arrow[d, "\mathrm{id}"] \\
\mathbb R^q \arrow[r, "f_{R,e}"'] & \mathbb R^p
```

Taking $s=S(\omega)$ and $e=\varepsilon(\omega)$ shows that the two representations give the same observed vector pointwise. Step 2.1 separately checks the covariance-model conditions and $A_RA_R^T+D=AA^T+D$. The diagram asserts no preservation of mutual independence under rotation.
