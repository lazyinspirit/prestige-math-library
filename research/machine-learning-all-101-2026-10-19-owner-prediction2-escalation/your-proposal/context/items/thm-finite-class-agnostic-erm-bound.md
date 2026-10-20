---
id: thm-finite-class-agnostic-erm-bound
kind: theorem
title: "Finite-class agnostic ERM bound"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 5
deps:
  - def-realizable-and-agnostic-pac
  - def-supervised-learning-problem
  - def-population-and-empirical-risk
  - def-empirical-risk-minimizer
  - alg-finite-list-empirical-risk-minimizer
  - lem-finite-list-empirical-risk-selector-is-measurable
  - def-identically-distributed-and-iid-random-variables
  - def-natural-logarithm
  - thm-natural-logarithm-laws
  - thm-finite-class-uniform-deviation
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification: {}
sources:
  references:
    - title: "Mehryar Mohri, Afshin Rostamizadeh, and Ameet Talwalkar, Foundations of Machine Learning, 2nd ed., Chapter 2 Theorem 2.13 and proof"
      url: "https://www.dropbox.com/s/38p0j6ds5q9c8oe/10290.pdf?dl=1"
    - title: "Shai Shalev-Shwartz and Shai Ben-David, Understanding Machine Learning: From Theory to Algorithms, Chapter 4 §4.2 and Corollary 4.6"
      url: "https://www.inf.u-szeged.hu/~turan/ML-Konyv.pdf"
---

## Statement

Let $(\mathcal X,\Sigma_X)$ be a measurable space, let $P$ be a probability law on $\mathcal X\times\{0,1\}$, and let $\mathcal H$ be a finite nonempty class of measurable classifiers $h:\mathcal X\to\{0,1\}$. Let $Z_i=(X_i,Y_i)$, $1\le i\le m$, be IID with law $P$, where $m\ge1$, and define $R_P(h)=P\{h(X)\ne Y\}$ and $\widehat R_S(h)=m^{-1}\sum_{i=1}^m\mathbf 1\{h(X_i)\ne Y_i\}$. With natural logarithms, for $0<\delta<1$ put

$$a_{m,\mathcal H,\delta}:=\sqrt{\frac{\log|\mathcal H|+\log(2/\delta)}{2m}}.$$

Then, with probability at least $1-\delta$, both $|R_P(h)-\widehat R_S(h)|\le a_{m,\mathcal H,\delta}$ for every $h\in\mathcal H$ and

$$R_P(\widehat h_\eta(S))-\inf_{h\in\mathcal H}R_P(h)\le 2a_{m,\mathcal H,\delta}+\eta,$$

for each fixed finite tolerance $\eta\ge0$, where $\widehat h_\eta$ is the measurable finite-list empirical-risk selector applied with tolerance $\eta$ to an ordered list containing every member of $\mathcal H$ exactly once. In particular, exact ERM ($\eta=0$) has excess risk at most $2a_{m,\mathcal H,\delta}$. The conclusion is agnostic: it assumes no zero-risk classifier. No form of the Axiom of Choice is assumed.

## Statement references

[[def-realizable-and-agnostic-pac]]: defines realizable and agnostic PAC learning for finite measurable binary classes.

[[def-population-and-empirical-risk]]: defines population and empirical risk as expected loss and sample-average loss.

[[thm-finite-class-uniform-deviation]]: gives the choice-free two-sided tail bound for finite classes of measurable functions in $[0,1]$.

[[def-natural-logarithm]]: defines $\log$ as the inverse of $\exp$ on positive inputs.

[[thm-natural-logarithm-laws]]: establishes that $\log$ is increasing and obeys the product, quotient, and reciprocal laws.

[[alg-finite-list-empirical-risk-minimizer]]: specifies the deterministic finite-list ERM selector.

[[lem-finite-list-empirical-risk-selector-is-measurable]]: proves that selector measurable and exact or approximate ERM.

## Facts & Assumptions

**Given:** A measurable binary classification problem, a finite nonempty measurable classifier class $\mathcal H$, IID observations $Z_1,\ldots,Z_m$ with law $P$, $m\ge1$, $0<\delta<1$, and a finite tolerance $\eta\ge0$.

[A1] No form of the Axiom of Choice is assumed; the finite-list selector uses the given finite ordering, and the uniform-deviation supplier states that its proof is choice-free.

[F1] For a finite nonempty class $G$ of measurable functions $g:\mathcal Z\to[0,1]$ and IID observations with law $P$, $P\{\sup_{g\in G}|P_mg-Pg|\ge t\}\le2|G|e^{-2mt^2}$ for every $t>0$; its proof uses scalar exponential moments and finite independence and does not assume choice. [[thm-finite-class-uniform-deviation]]

[F2] A supervised prediction problem has measurable instance and label spaces, a joint law on their product, a class of measurable predictors, and a measurable loss. [[def-supervised-learning-problem]]

[F3] Population risk is the integral of the loss under the joint law, and empirical risk is the average loss on the ordered sample. With binary zero-one loss these are $P\{h(X)\ne Y\}$ and $m^{-1}\sum_i\mathbf1\{h(X_i)\ne Y_i\}$. [[def-population-and-empirical-risk]]

[F4] An $\eta$-approximate ERM has empirical risk at most the empirical infimum plus $\eta$ when that infimum is finite; an exact ERM attains the infimum. [[def-empirical-risk-minimizer]]

[F5] On a finite ordered list with finite empirical risks, the finite-list procedure returns the first list entry whose empirical risk is at most the minimum plus $\eta$; at $\eta=0$ it returns a first exact minimizer. [[alg-finite-list-empirical-risk-minimizer]]

[F6] For a finite ordered list of measurable predictors and finite $\eta\ge0$, the finite-list selector is measurable and is an $\eta$-approximate ERM; when $\eta=0$ it is an exact ERM. [[lem-finite-list-empirical-risk-selector-is-measurable]]

[F7] IID means the observations are mutually independent and identically distributed. [[def-identically-distributed-and-iid-random-variables]]

[F8] The natural logarithm is increasing, $\log 1=0$, and obeys the product, quotient, and reciprocal laws; it is the inverse of the exponential on positive reals. [[def-natural-logarithm]], [[thm-natural-logarithm-laws]]

## Proof

**Given:** The hypotheses in the Statement.

1.1 For each $h\in\mathcal H$, define $g_h(x,y)=\mathbf1\{h(x)\ne y\}$. Its unit-level set is $(h^{-1}\{0\}\times\{1\})\cup(h^{-1}\{1\}\times\{0\})$, a measurable union of rectangles because $h$ is measurable and $\{0,1\}$ is discrete. Thus $g_h$ is measurable and $[0,1]$-valued; $G:=\{g_h:h\in\mathcal H\}$ is finite and nonempty with $|G|\le|\mathcal H|$. By [F3], $Pg_h=R_P(h)$ and $P_mg_h=\widehat R_S(h)$. [given, F2, F3, F7, A1, construct]

2.1 By [F7], the observations meet the IID hypothesis of [F1]. Put $a=a_{m,\mathcal H,\delta}$. Since $|\mathcal H|\ge1$ and $2/\delta>1$, [F8] makes the numerator positive, so $a>0$. Apply [F1] to $G$ at $t=a$. By [F8], $\log|\mathcal H|+\log(2/\delta)=\log(2|\mathcal H|/\delta)$ and $e^{-\log(2|\mathcal H|/\delta)}=\delta/(2|\mathcal H|)$. Hence $2|G|e^{-2ma^2}\le2|\mathcal H|e^{-2ma^2}=\delta$. With probability at least $1-\delta$ every $h\in\mathcal H$ satisfies $|R_P(h)-\widehat R_S(h)|<a$, hence also the asserted non-strict bound. [F1, F7, F8, step 1.1, A1, algebra]

3.1 On that event, [F6] gives $\widehat R_S(\widehat h_\eta)\le\inf_{h\in\mathcal H}\widehat R_S(h)+\eta$. The deviation bound gives $R_P(\widehat h_\eta)\le\widehat R_S(\widehat h_\eta)+a$ and $\widehat R_S(h)\le R_P(h)+a$ for every $h$. Hence $\inf_{g\in\mathcal H}\widehat R_S(g)\le R_P(h)+a$ for every $h\in\mathcal H$, and taking the infimum over $h$ gives $\inf_{g\in\mathcal H}\widehat R_S(g)\le\inf_{h\in\mathcal H}R_P(h)+a$. Combining these inequalities gives $R_P(\widehat h_\eta)-\inf_{h\in\mathcal H}R_P(h)\le2a+\eta$. [F3, F4, F5, F6, step 2.1, algebra]

4.1 The event from step 2.1 has probability at least $1-\delta$, and step 3.1 establishes both stated inequalities on that event. This proves the claim for arbitrary $P$, whether or not the class is realizable. [step 2.1, step 3.1] ∎
