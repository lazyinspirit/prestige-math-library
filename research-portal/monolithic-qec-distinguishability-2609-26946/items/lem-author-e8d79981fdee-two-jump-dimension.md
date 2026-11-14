---
id: lem-author-e8d79981fdee-two-jump-dimension
kind: lemma
domain: mathematics
title: Two-jump and total trajectory dimensions in the lowering model
status: draft
origin: session
deps:
  - lem-author-e8d79981fdee-one-jump-dimension
  - lem-author-e8d79981fdee-low-spin-support
  - lem-author-e8d79981fdee-integrated-trajectory-support
  - lem-qec-prereq-trajectory-dyson-expansion
  - def-qec-prereq-finite-gksl-channel-interface
  - math:def-qc-choi-matrix
  - math:def-countable-choice
  - math:thm-fubini-over-a-region-between-continuous-graphs
  - math:thm-riemann-fubini-on-product-rectangles
  - math:lem-bounded-borel-riemann-integrands-on-boxes-have-equal-lebesgue-integrals
dependency_roles:
  lem-author-e8d79981fdee-one-jump-dimension: mathematical-premise
  lem-author-e8d79981fdee-low-spin-support: mathematical-premise
  lem-author-e8d79981fdee-integrated-trajectory-support: mathematical-premise
  lem-qec-prereq-trajectory-dyson-expansion: mathematical-premise
  def-qec-prereq-finite-gksl-channel-interface: mathematical-premise
  math:def-qc-choi-matrix: mathematical-premise
  math:def-countable-choice: mathematical-premise
  math:thm-fubini-over-a-region-between-continuous-graphs: mathematical-premise
  math:thm-riemann-fubini-on-product-rectangles: mathematical-premise
  math:lem-bounded-borel-riemann-integrands-on-boxes-have-equal-lebesgue-integrals: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 4
---

## Statement

Assume the Axiom of Countable Choice for the integration results. For the finite matrices, parameters and basis of the one-jump lemma, and every finite $t>0$, the two-jump amplitude span is exactly $\operatorname{span}\{|e_{0,0}\rangle\langle e_{2,m}|:-2\leq m\leq2\}$, of dimension five. All amplitudes with three or more jumps vanish. The no-jump amplitude contributes one additional independent direction. The channel $\mathcal N_t=e^{t\mathcal L}$ is the finite GKSL channel constructed from the same $H$ and $L_q$. Its Choi rank, meaning the rank of its input-first unnormalized Choi matrix in the specified basis, is twelve if $\Delta=0$ and eighteen if $\Delta\ne0$. At $t=0$ it is one.

## Statement references

[[lem-author-e8d79981fdee-one-jump-dimension]]

[[lem-author-e8d79981fdee-low-spin-support]]

[[lem-author-e8d79981fdee-integrated-trajectory-support]]

[[lem-qec-prereq-trajectory-dyson-expansion]]

[[def-qec-prereq-finite-gksl-channel-interface]]

[[math:def-qc-choi-matrix]]

[[math:def-countable-choice]]

[[math:thm-fubini-over-a-region-between-continuous-graphs]]

[[math:thm-riemann-fubini-on-product-rectangles]]

[[math:lem-bounded-borel-riemann-integrands-on-boxes-have-equal-lebesgue-integrals]]

## Facts & Assumptions

[F1] The one-jump lemma specifies the diagonal $G$, downward jumps and their span dimensions. [[lem-author-e8d79981fdee-one-jump-dimension]]

[F2] Every allowed downward coefficient for $J=1,2$ is nonzero. [[lem-author-e8d79981fdee-low-spin-support]]

[F3] The ordered-jump expansion represents $\mathcal N_t$ by entrywise nested Riemann integrals, with amplitudes $D(t-s)L_qD(s)$ and $K_{qr}(s_1,s_2)=D(t-s_2)L_rD(s_2-s_1)L_qD(s_1)$. [[lem-qec-prereq-trajectory-dyson-expansion]]

[F4] Under Countable Choice, finitely many continuous matrix families on closed full-dimensional ordered simplexes, together with isolated matrices, give a Lebesgue-integrated map whose Choi matrix is the sum $Q$ of the vectorized outer products. Its rank is the dimension of the matrix span, which is unchanged by restricting the continuous families to interior times. Span dimensions add for families in disjoint matrix-unit coordinate sets. [[lem-author-e8d79981fdee-integrated-trajectory-support]]

[F5] For finite Hermitian $H$ and a finite jump family, the finite GKSL interface defines $\mathcal L(X)=-i[H,X]+\sum_q(L_qXL_q^\dagger-\{L_q^\dagger L_q,X\}/2)$ and the channel $\mathcal N_t=e^{t\mathcal L}$ for $t\geq0$, with $\mathcal N_0$ the identity. [[def-qec-prereq-finite-gksl-channel-interface]]

[F6] In the ordered input basis, with matrix units $E_{ij}$, the input-first Choi matrix is $J(\Phi)=\sum_{i,j=1}^9E_{ij}\otimes\Phi(E_{ij})$. Write $z(A)=\sum_{i=1}^9e_i\otimes Ae_i$, where $(e_i)_{i=1}^9$ is the specified basis $(e_{J,m})$ in its fixed order. [[math:def-qc-choi-matrix]]

[F7] A continuous real integrand on a closed region between continuous graphs is Riemann integrable over that region. Riemann--Fubini on a rectangle gives either iterated order when every section in that order is integrable. Under Countable Choice, a bounded Borel Riemann integrand on a nondegenerate box has the same Lebesgue integral. These statements apply separately to real and imaginary parts. [[math:thm-fubini-over-a-region-between-continuous-graphs]] [[math:thm-riemann-fubini-on-product-rectangles]] [[math:lem-bounded-borel-riemann-integrands-on-boxes-have-equal-lebesgue-integrals]]

[F8] Countable Choice is assumed as in the integrated-support and Riemann--Lebesgue comparison suppliers. It selects from countably indexed families of nonempty sets; no claim of necessity for this finite-matrix conclusion is made. [[math:def-countable-choice]]

## Proof

**Given:** The finite data and hypotheses in the Statement, including Countable Choice.

**Goal:** Establish the asserted dimension and Choi-rank identities.

1.1 Diagonal propagation preserves $J$ and each jump lowers it by one. Thus a two-jump amplitude is supported only on $J=2\to0$, and three or more jumps vanish. For fixed polarizations $q,r$ its only possible input is $m=-q-r$; its coefficient is the product $\gamma b_{2,m,q}b_{1,m+q,r}$ and three nonzero diagonal exponential factors. For each $m=-2,-1,0,1,2$ choose respectively $(q,r)=(1,1),(1,0),(0,0),(-1,0),(-1,-1)$. Both transitions are allowed and [F2] makes their product nonzero at every interior ordered time. Therefore these amplitudes span all five stated matrix units. [F1, F2, F3, algebra]

2.1 Every surviving amplitude is continuous on its closed interval or ordered triangle, since its entries are products of the diagonal exponentials in [F1]. For a real or imaginary entry $f$ of an integrand, the triangle $E=\{(s_1,s_2):0\leq s_1\leq s_2\leq t\}$ is the region between the graphs $s_2=s_1$ and $s_2=t$ over $s_1\in[0,t]$. By [F7], $f$ is Riemann integrable over $E$, so its zero extension to $[0,t]^2$ is Riemann integrable. This extension is bounded and Borel because $E$ is closed and $f$ is continuous on $E$. Every section at fixed $s_2$ is continuous on $[0,s_2]$ and zero beyond it, with at most one jump discontinuity, so is Riemann integrable. Riemann--Fubini in the reverse coordinate order identifies the square integral with $\int_0^t\int_0^{s_2}f(s_1,s_2)\,ds_1\,ds_2$. The box comparison in [F7], using [F8], identifies it with the $\lambda_2$ integral over $E$. The same box comparison in dimension one applies to the continuous single-jump integrands on $[0,t]$. Consequently all surviving integrals in [F3] are the entrywise Lebesgue integrals required by [F4]. [given, F1, F3, F7, F8, step 1.1, algebra]

3.1 The data in [F1] have Hermitian $H$ (all its diagonal entries are real), and three finite jump matrices, so [F5] constructs the channel used in [F3]. By step 1.1 the expansion has only the isolated matrix $D(t)$, three interval families and nine triangle families; step 2.1 puts them in the integration convention of [F4]. The finite Choi sum in [F6] commutes with these entrywise integrals: finite sums commute with limits of Riemann sums, and step 2.1 identifies those integrals with their Lebesgue counterparts. Expanding a single term gives $J(X\mapsto AXA^\dagger)=z(A)z(A)^\dagger$. Thus the trajectory expression has Choi matrix $Q$ exactly as asserted in [F4], and [F4] identifies its rank with the full amplitude-span dimension. The no-jump matrix $D(t)$ is nonzero and diagonal. Its span, the one-jump span and the two-jump span have pairwise disjoint matrix-unit coordinates (changes in $J$ of zero, one and two). Their dimensions therefore add by [F4], giving $1+6+5=12$ at $\Delta=0$ and $1+12+5=18$ at $\Delta\ne0$. At zero time [F5] gives the identity channel; its Choi matrix is $z(I)z(I)^\dagger$ by [F6], which has rank one since $z(I)\ne0$. [F1, F3, F4, F5, F6, step 1.1, step 2.1, algebra] ∎
