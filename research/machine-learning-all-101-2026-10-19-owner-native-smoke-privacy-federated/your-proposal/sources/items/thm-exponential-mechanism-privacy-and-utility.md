---
id: thm-exponential-mechanism-privacy-and-utility
kind: theorem
title: Exponential mechanism privacy and utility
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - alg-exponential-mechanism
  - def-exponential-mechanism-utility-sensitivity
  - def-differential-privacy-and-adjacency
  - def-natural-logarithm
  - thm-natural-logarithm-laws
  - thm-exponential-addition-formula
  - thm-exponential-is-strictly-increasing
  - cor-exponential-reciprocal-and-positivity
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: No choice axiom is used.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Cynthia Dwork and Aaron Roth, The Algorithmic Foundations of Differential Privacy"
      url: https://privacytools.seas.harvard.edu/resource/thealgorithmicfoundationsofdifferentialprivacypdf
    - title: "Salil Vadhan, The Complexity of Differential Privacy, 2017 manuscript"
      url: https://salil.seas.harvard.edu/sites/g/files/omnuum4266/files/salil/files/manuscript_2017.pdf
---

## Statement

Let $\mathcal D$ be the set of finite-support record-count databases, with neighbors defined by adding or removing one record occurrence. Let $R$ be a nonempty finite set independent of the database, and let $u:\mathcal D\times R\to\mathbb R$ be a real-valued utility with finite positive attained global utility sensitivity $\Delta_u$. For $\varepsilon>0$, use weights $w_D(r)=\exp(\varepsilon u(D,r)/(2\Delta_u))$ and normalize them over $R$ as in the exponential mechanism. Its output law is $(\varepsilon,0)$-differentially private. For a fixed database $D$, let
$$ \operatorname{OPT}_u(D)=\max_{r\in R}u(D,r),\qquad R_{\operatorname{OPT}}=\{r\in R:u(D,r)=\operatorname{OPT}_u(D)\}. $$
For every $t>0$, if $M(D)$ denotes the random output, then
$$
\Pr\!\left[u(D,M(D))\le\operatorname{OPT}_u(D)-\frac{2\Delta_u}{\varepsilon}\left(\ln\frac{|R|}{|R_{\operatorname{OPT}}|}+t\right)\right]\le e^{-t}.
$$

## Statement references

[[alg-exponential-mechanism|The finite-range exponential mechanism]]

[[def-exponential-mechanism-utility-sensitivity|Global utility sensitivity]]

[Dwork and Roth, *The Algorithmic Foundations of Differential Privacy*, §§3.4–3.5, printed pp. 36–41.](https://privacytools.seas.harvard.edu/resource/thealgorithmicfoundationsofdifferentialprivacypdf)

[Vadhan, *The Complexity of Differential Privacy*, Proposition 4.2 and proof, PDF pp. 33–34.](https://salil.seas.harvard.edu/sites/g/files/omnuum4266/files/salil/files/manuscript_2017.pdf)

## Facts & Assumptions

**Given:** A nonempty finite database-independent range $R$, utility $u$, $\varepsilon>0$, $\Delta_u>0$, neighboring databases $D\sim D'$, and $t>0$.

[F1] [[alg-exponential-mechanism|Exponential mechanism]] assigns weight $w_D(r)=\exp(\varepsilon u(D,r)/(2\Delta_u))$, normalizer $Z_D=\sum_{r\in R}w_D(r)$, and output mass $w_D(r)/Z_D$.

[F2] [[def-exponential-mechanism-utility-sensitivity|Utility sensitivity]] gives $|u(D,r)-u(D',r)|\le\Delta_u$ for every neighboring pair and every $r\in R$.

[F3] Finiteness and nonemptiness of $R$ make $\operatorname{OPT}_u(D)$ attained and $1\le|R_{\operatorname{OPT}}|\le|R|$.

[F4] [[def-differential-privacy-and-adjacency|Differential privacy]] requires the event inequality for both ordered directions of every neighboring pair.

[F5] [[def-natural-logarithm|Natural logarithm]] and [[thm-natural-logarithm-laws|its inverse/exponential laws]] give $e^{-\ln x}=1/x$ for $x>0$.

[F6] [[thm-exponential-addition-formula|The exponential addition formula]], [[thm-exponential-is-strictly-increasing|strict monotonicity]], and [[cor-exponential-reciprocal-and-positivity|positivity and the reciprocal identity]] give $\exp(u+v)=\exp(u)\exp(v)$, make $\exp$ increasing, and give $\exp(-u)=1/\exp(u)>0$ for real $u,v$.

## Proof

1.1 For every $r\in R$, [F2] and monotonicity and addition for $\exp$ from [F6] give $w_D(r)\le e^{\varepsilon/2}w_{D'}(r)$; summing gives $Z_D\le e^{\varepsilon/2}Z_{D'}$. Applying the same argument with $D,D'$ interchanged gives $Z_{D'}\le e^{\varepsilon/2}Z_D$. Since the weights and normalizers are positive, [F6] then yields $(w_D(r)/Z_D)/(w_{D'}(r)/Z_{D'})\le e^\varepsilon$. Interchanging $D,D'$ gives the reverse point-mass bound. Summing over any event $A\subseteq R$ gives both $(\varepsilon,0)$ event inequalities, so [F4] proves privacy. [F1, F2, F4, F6, given, algebra]

2.1 By [F3], the maximizing set is nonempty and its elements each have weight $e^{\varepsilon\operatorname{OPT}_u(D)/(2\Delta_u)}$. Let $B$ be the event in the Statement. For each $r\in B$, its defining score inequality, monotonicity and addition for $\exp$ from [F6], and [F5] imply $w_D(r)\le e^{\varepsilon\operatorname{OPT}_u(D)/(2\Delta_u)}(|R_{\operatorname{OPT}}|/|R|)e^{-t}$. There are at most $|R|$ such elements, while the normalizer is at least the sum of the maximizing weights, namely $|R_{\operatorname{OPT}}|e^{\varepsilon\operatorname{OPT}_u(D)/(2\Delta_u)}$. Therefore the probability of $B$ is at most $e^{-t}$. If $B$ is empty its probability is zero and the same bound holds. [F1, F3, F5, F6, given, algebra] ∎
