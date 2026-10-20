---
id: lem-zero-signal-isotropic-risk-limit
kind: lemma
title: Isotropic ridgeless risk limit when the signal is zero
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 8
deps:
  - lem-ridgeless-risk-decomposition
  - cor-isotropic-minimum-norm-risk-closure-under-edge-gap
  - def-axiom-of-choice
  - def-identically-distributed-and-iid-random-variables
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Hastie, Montanari, Rosset, and Tibshirani, Surprises in High-Dimensional Ridgeless Least Squares Interpolation"
      url: "https://arxiv.org/pdf/1903.08560"
      locator: "Theorem 1 and Appendix C.2; the local proof uses the current finite-fourth-moment corollary instead."
---

## Statement

Assume the Axiom of Choice. Let $(\xi_{ij})_{i,j\ge1}$ be one infinite iid
array of real random variables with mean zero, variance one, and finite fourth
moment. Let $p_n\ge1$ with $p_n/n\to\gamma\in(0,\infty)\setminus\{1\}$, and
let $X_n=(\xi_{ij})_{1\le i\le n,\,1\le j\le p_n}$ be its upper-left block.
Let $\varepsilon_n$ have independent centered components of variance
$\sigma^2$, independent of $X_n$, and let $z_{0,n}$ be independent of
$(X_n,\varepsilon_n)$, centered, and have covariance $I_{p_n}$. Set
$S_n=X_n^{\mathsf T}X_n/n$, $y_n=\varepsilon_n$,
$\widehat\beta_n=X_n^+y_n$, and
$$\mathcal R_n:=\mathbb E_{\varepsilon_n,z_{0,n}} \left[(z_{0,n}^{\mathsf T}\widehat\beta_n)^2\mid X_n\right].$$
Then almost surely
$$\mathcal R_n\longrightarrow \begin{cases} \displaystyle\frac{\sigma^2\gamma}{1-\gamma},&0<\gamma<1,\\[5pt] \displaystyle\frac{\sigma^2}{\gamma-1},&\gamma>1. \end{cases}$$

## Statement references

[[lem-ridgeless-risk-decomposition]]

[[cor-isotropic-minimum-norm-risk-closure-under-edge-gap]]

## Facts & Assumptions

**Given:** The nested real iid design, positive aspect ratio $\gamma\ne1$,
independent centered noise with covariance $\sigma^2I_n$, centered test feature
with covariance $I_{p_n}$, and the Axiom of Choice from the Statement.

[A1] The Axiom of Choice permits a choice function for every family of
nonempty sets ([[def-axiom-of-choice]]).

[F1] For the nested real iid finite-fourth-moment design and every deterministic
signal sequence of fixed norm $r>0$, the design-conditional risk tends almost
surely to $\sigma^2\gamma/(1-\gamma)$ for $\gamma<1$ and to
$r^2(1-1/\gamma)+\sigma^2/(\gamma-1)$ for $\gamma>1$
([[cor-isotropic-minimum-norm-risk-closure-under-edge-gap]]).

[F2] The conditional risk for a deterministic signal is its squared projection
onto $\ker X_n$ plus the signal-independent noise term
([[lem-ridgeless-risk-decomposition]]).

[F3] Iid entries are independent and share one common distribution
([[def-identically-distributed-and-iid-random-variables]]).

## Proof

1.1 For each $n$, let $e_{1,n}$ be the first standard basis vector in $\mathbb R^{p_n}$. For $a\in\{1,2\}$, let $\mathcal R_n^{(a)}$ denote the conditional risk with signal $\beta_n^{(a)}=a e_{1,n}$, and put $B_n=e_{1,n}^{\mathsf T}(I-X_n^+X_n)e_{1,n}$ and $V_n=(\sigma^2/n)\operatorname{tr}(S_n^+)$. [given, choose]

2.1 Applying [F2] to each auxiliary signal gives $\mathcal R_n^{(1)}=B_n+V_n$ and $\mathcal R_n^{(2)}=4B_n+V_n$. Applying [F1] with norms $1$ and $2$ gives almost-sure limits for both risks; the intersection of these two probability-one events still has probability one. The iid law is common in both applications by [F3]. [A1, F1, F2, F3, step 1.1, algebra]

3.1 The exact identities in step 2.1 give $V_n=(4\mathcal R_n^{(1)}-\mathcal R_n^{(2)})/3$. If $\gamma<1$, both risk limits in [F1] equal $\sigma^2\gamma/(1-\gamma)$, so $V_n$ tends to that quantity. If $\gamma>1$, their limits are respectively $1-1/\gamma+\sigma^2/(\gamma-1)$ and $4(1-1/\gamma)+\sigma^2/(\gamma-1)$; their indicated combination is $\sigma^2/(\gamma-1)$. [F1, step 2.1, algebra]

4.1 For the zero signal in the Statement, [F2] identifies $\mathcal R_n$ with the same $V_n$. Step 3.1 therefore gives both asserted limits. [given, F2, step 3.1] ∎ 