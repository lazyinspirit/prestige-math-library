---
id: def-cft-hlz-convergence-extension-property
kind: definition
title: "HLZ convergence and extension property"
status: published
origin: pipeline
domain: mathematics
library: mathematics
proof_strategy: direct
deps:
  - thm-cft-multipoint-analytic-extension-from-cutoff-exterior
  - thm-cft-strongly-graded-contragredient-duality
  - def-cft-logarithmic-intertwining-operator
  - def-cft-contragredient-module
  - def-cft-hlz-strongly-graded-generalized-module
  - def-cft-c1-cofinite-module
  - def-cft-quasi-finite-dimensional-module
dependency_roles:
  thm-cft-multipoint-analytic-extension-from-cutoff-exterior: mathematical-premise
  thm-cft-strongly-graded-contragredient-duality: mathematical-premise
  "def-cft-logarithmic-intertwining-operator": mathematical-premise
  "def-cft-contragredient-module": mathematical-premise
  "def-cft-hlz-strongly-graded-generalized-module": mathematical-premise
  "def-cft-c1-cofinite-module": mathematical-premise
  "def-cft-quasi-finite-dimensional-module": mathematical-premise
sources:
  references:
    - title: "Huang, Lepowsky, and Zhang, Logarithmic tensor category theory, Part V"
      url: "https://arxiv.org/pdf/1012.4199v3"
    - title: "Huang, Lepowsky, and Zhang, Logarithmic tensor category theory, Part VII, §11.1, equations (11.1)–(11.8), and §11.2, Theorems 11.6 and 11.8, Remark 11.7"
      url: "https://arxiv.org/pdf/1110.1929v2"
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
dependency_level: 4
---

## Definition

Let V be a strongly A-graded Möbius or conformal vertex algebra and C a full category of strongly Ã-graded generalized V-modules. The HLZ **convergence and extension property for products and iterates** consists of the following two-operator conditions.

For the scalar pairings, use the restricted graded dual $W'=\bigoplus_{h\in\mathbb C,\,\beta\in\widetilde A}(W^{(\beta)}_{[h]})^*$, with its componentwise evaluation pairing; each element has finite support in these gradings.

If $w$ has generalized weight $h\in\mathbb C$, set $\mathrm{wt}(w)=h$; every cutoff inequality below is an inequality of real numbers and uses the real part of the displayed sum of weights.

For the product condition, take $W1,W2,W3,W4,M1∈C$ and grading-compatible logarithmic intertwining operators $\mathcal Y_1,\mathcal Y_2$ of types $\binom{W_4}{W_1\ M_1}$ and $\binom{M_1}{W_2\ W_3}$. For every $β∈\widetilde A$ there is an integer Nβ depending only on $\mathcal Y_1,\mathcal Y_2,β$. For $\widetilde A$- and weight-homogeneous $w_1\in W_1^{(β_1)}$, $w_2\in W_2^{(β_2)}$ with $β1+β2=−β$, and any $w3∈W3, w4'∈W4'$, there are a finite $M∈Z+$, real exponents rk,sk, nonnegative integers ik,jk for $1≤k≤M$, a positive integer K independent of w1,w2 with $ik<K$, and functions fk holomorphic on $|ζ|<1$, such that $\operatorname{Re}(\mathrm{wt}(w_1)+\mathrm{wt}(w_2))+s_k>N_β$ for each k and the radial product series
$$\left.\left\langle w'_4,\mathcal Y_1(w_1,x_1)\mathcal Y_2(w_2,x_2)w_3\right\rangle\right|_{x_1=z_1,\,x_2=z_2}$$
is absolutely convergent for |z1|>|z2|>0 and analytically continues to
$$\sum_{k=1}^M z_2^{r_k}(z_1-z_2)^{s_k}(\log z_2)^{i_k}(\log(z_1-z_2))^{j_k}f_k\!\left(\frac{z_1-z_2}{z_2}\right)$$
on |z2|>|z1−z2|>0.

For the iterate condition, take W1,W2,W3,W4,M2∈C and grading-compatible logarithmic intertwining operators $\widetilde{\mathcal Y}_1,\widetilde{\mathcal Y}_2$ of types $\binom{W_4}{M_2\ W_3}$ and $\binom{M_2}{W_1\ W_2}$. For every β∈Ã there is an integer $\widetilde N_β$ depending only on these operators and β. For $\widetilde A$- and weight-homogeneous $w_2\in W_2^{(β_2)}$, $w_3\in W_3^{(β_3)}$ with β2+β3=−β, and any w1∈W1 and w4′∈W4′, there are a finite $\widetilde M$, real exponents $\widetilde r_k,\widetilde s_k$, nonnegative integers $\widetilde i_k,\widetilde j_k$, a positive integer $\widetilde K$ independent of w2,w3 with $\widetilde i_k<\widetilde K$, and functions $\widetilde f_k$ holomorphic on |ζ|<1, such that $\operatorname{Re}(\mathrm{wt}(w_2)+\mathrm{wt}(w_3))+\widetilde s_k>\widetilde N_β$ for each k and the radial iterate series
$$\left.\left\langle w'_4,\widetilde{\mathcal Y}_1(\widetilde{\mathcal Y}_2(w_1,x_0)w_2,x_2)w_3\right\rangle\right|_{x_0=z_1-z_2,\,x_2=z_2}$$
is absolutely convergent for |z2|>|z1−z2|>0 and analytically continues to
$$\sum_{k=1}^{\widetilde M} z_1^{\widetilde r_k}z_2^{\widetilde s_k}(\log z_1)^{\widetilde i_k}(\log z_2)^{\widetilde j_k}\widetilde f_k\!\left(\frac{z_2}{z_1}\right)$$
on |z1|>|z2|>0. All powers and logarithms in these continuation formulas are multivalued; the selected branches continue those of the radial series. Setting all logarithmic exponents to zero gives the corresponding property without logarithms.

HLZ's **multipoint extension** is a separate conclusion, not part of the binary definition. In the ungraded auxiliary-group case $A=\widetilde A=\{0\}$, suppose every generalized module in C is C1-cofinite in the sense of def-cft-c1-cofinite-module and quasi-finite-dimensional in the sense of def-cft-quasi-finite-dimensional-module. For any $n≥1$ and objects W0,W1,…,Wn+1 in C, the $n=1$ case uses one intertwining operator of type $\binom{W_0}{W_1\ W_2}$; for $n≥2$ also take intermediate modules $M1,…,M_{n−1}$ in C and a composable chain of operators of types $\binom{W_0}{W_1\ M_1},\binom{M_1}{W_2\ M_2},\ldots,\binom{M_{n-1}}{W_n\ W_{n+1}}$. For all these data, every scalar coefficient
$$\left\langle w'_0,\mathcal Y_1(w_1,z_1)\cdots\mathcal Y_n(w_n,z_n)w_{n+1}\right\rangle$$
is absolutely convergent for |z1|>⋯>|zn|>0 and extends multivalued analytically to the configuration space zi≠0 and zi≠zj for i≠j. Near any possible boundary divisor zi=0, zi=∞ or zi=zj, including their permitted intersections, it has the local expansion form of a solution of a regular-singular differential system in the precise sense specified by HLZ Part VII, Remark 11.7 and Theorem 11.8 (using Knapp, Appendix B). This is the separate multipoint consequence of HLZ Part VII §11.2, Theorem 11.8; it is not inferred from the binary definition without those finiteness hypotheses.

## Definition references

[[def-cft-c1-cofinite-module]]

[[def-cft-quasi-finite-dimensional-module]]

[[thm-cft-multipoint-analytic-extension-from-cutoff-exterior]]

## Facts & Assumptions

**Given:** Work over C with the formal-variable, grading, and branch conventions in the linked definitions.

[F1] [[def-cft-logarithmic-intertwining-operator]] supplies the formal logarithmic series, Jacobi, lower truncation, derivative, Möbius brackets and grading-compatibility convention; these formal axioms do not assert analytic convergence.

[F2] [[thm-cft-strongly-graded-contragredient-duality]] constructs the actual restricted dual in the full strong Möbius/conformal setting, with $W'{}^{(\beta)}_{[h]}=(W^{(-\beta)}_{[h]})^*$, opposite-field action, fixed-string truncation, and double-dual evaluation. No CFT-type or global grading bound is assumed in that theorem.

[F3] [[def-cft-hlz-strongly-graded-generalized-module]] supplies the strongly graded module hypotheses and grading-compatible morphism convention.

[F4] [[thm-cft-multipoint-analytic-extension-from-cutoff-exterior]] proves exactly the separate multipoint conclusion from the stated objectwise hypotheses. In a given chain every leaf and intermediate module is C1-cofinite and quasi-finite; its output is quasi-finite. Its finite quotient keeps the output dual in a fixed finite weight cutoff rather than assuming that dual C1-cofiniteness follows from the output. Global dilation handles infinity without reflecting that dual into an unbounded input. No category closure, real-weight/nilpotence qualification beyond the local quasi-finite definition, or relative tensor-product existence is added. The source HLZ VII §§11.1–11.2, Theorems11.6/11.8 and Remark11.7 supplies literature attribution and the expansion convention; its published theorem is not an unproved local premise.

## Proof

1.1 Pairing a composable product with a restricted-dual vector gives a scalar series whose nested region is fixed by the order of the insertions. [given, F1, F2, F3, algebra]

2.1 The binary product/iterate conditions are the stated definitions. For the separate multipoint assertion, the actual chain has precisely the leaves, intermediate modules and quasi-finite output required by F4. Apply that locally proved theorem to each restricted-dual scalar coefficient. It proves all-index absolute convergence, continuation, infinity and simultaneous boundary expansions with the same branches, so the conclusion is not being inferred from formal operator axioms or smooth single-divisor pole bounds alone. [given, F1, F2, F3, F4, step 1.1, algebra] ∎
