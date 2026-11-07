---
id: thm-cft-rational-cardy-annulus-consistency
kind: theorem
title: Open/closed annulus consistency for a diagonal rational CFT
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 13
deps:
  - def-cft-r5-full-local-cft-data
  - lem-cft-character-hopf-normalization-and-fusion-diagonalization
  - def-cft-intertwining-operator-space
  - def-cft-conformal-boundary-and-defect-data
  - def-cft-diagonal-rational-annulus-data
  - thm-cft-strongly-rational-character-modularity
  - thm-cft-strong-rational-modular-category
  - thm-cft-voa-verlinde-formula
dependency_roles:
  def-cft-r5-full-local-cft-data: mathematical-premise
  lem-cft-character-hopf-normalization-and-fusion-diagonalization: mathematical-premise
  def-cft-intertwining-operator-space: mathematical-premise
  def-cft-conformal-boundary-and-defect-data: mathematical-premise
  def-cft-diagonal-rational-annulus-data: mathematical-premise
  thm-cft-strongly-rational-character-modularity: mathematical-premise
  thm-cft-strong-rational-modular-category: mathematical-premise
  thm-cft-voa-verlinde-formula: mathematical-premise
justified_by: []
proof_strategy: conditional-interface
domain: mathematics
library: mathematics
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "John Cardy, Boundary Conformal Field Theory, arXiv:hep-th/0411189v2"
      url: https://arxiv.org/pdf/hep-th/0411189v2
      locator: "§3, PDF pp. 10–14, equations (27)–(48), including the annulus channels, Cardy-state coefficients, and the diagonal Ising example."
    - title: "Yi-Zhi Huang, Vertex operator algebras and the Verlinde conjecture, arXiv:math/0406291v3"
      url: https://arxiv.org/pdf/math/0406291v3
      locator: "§1, PDF pp. 2–5, exact VOA hypotheses; §5, PDF pp. 52–57, Propositions 5.1 and 5.3, Corollary 5.4, Theorems 5.2, 5.5 and 5.6 with their proofs."
---

## Statement

Let $V$ be a strongly rational VOA in the shared convention. Let $I$ be its finite set of irreducible ordinary labels, $0$ its vacuum label, $i^*$ the restricted-contragredient label, and $S$ its actual character modular matrix in Huang's convention. Use the diagonal closed sector and normalized Ishibashi states of [[def-cft-diagonal-rational-annulus-data]]. Choose square roots $d_i^2=S_{0i}$ once. For boundary labels $a,b\in I$, construct the Cardy ket and bra by
$$|b\rangle=\sum_{i\in I}\frac{S_{bi}}{d_i}|i\rangle\rangle,\qquad \langle a|=\sum_{i\in I}\frac{S_{a^*i}}{d_i}\langle\langle i|,$$
and construct the open state space
$$\mathcal H_{ab}=\bigoplus_{j\in I}\mathcal I\binom{M_a}{M_b\ M_j}\otimes_{\mathbb C}M_j.$$
These constructed states satisfy Virasoro gluing. On the width-one annulus, with $q_o=e^{-\pi\delta}$ and $q_c=e^{-4\pi/\delta}$ for $\delta>0$, their closed overlap equals the open-channel trace on $\mathcal H_{ab}$ after the annulus modular transformation. Its open multiplicities are the finite nonnegative integers $n_{ab}^{\,j}=N_{bj}^{\,a}$. Virasoro gluing alone does not force this equality or these multiplicities for arbitrary boundary-state coefficients. The assertion constructs consistent annulus channel expressions; it does not assert existence of a full local boundary CFT from these data alone.

## Statement references

[[def-cft-intertwining-operator-space]]

[[def-cft-conformal-boundary-and-defect-data]]

[[def-cft-diagonal-rational-annulus-data]]

[[thm-cft-strongly-rational-character-modularity]]

[[thm-cft-strong-rational-modular-category]]

[[thm-cft-voa-verlinde-formula]]

## Facts & Assumptions

**Given:** The strongly rational VOA, its actual character convention, the normalized diagonal Ishibashi datum, the finite labels and the fixed square-root choices in the Statement. The open multiplicity spaces and Cardy coefficients are constructed below, not assumed to obey the annulus equality.

[F1] [[def-cft-conformal-boundary-and-defect-data]] imposes the local Virasoro gluing condition. It includes no higher-genus open/closed sewing axiom.

[F2] [[def-cft-diagonal-rational-annulus-data]] fixes the two nome conventions, the normalized Ishibashi overlap and the Cardy bra/ket convention. The definition explicitly treats general channel data as separate expressions.

[F3] [[thm-cft-strongly-rational-character-modularity]] proves the analytic character transformation $\chi_i(-1/\tau)=\sum_jS_{ij}\chi_j(\tau)$ in the actual full-trace convention.

[F4] [[thm-cft-voa-verlinde-formula]] proves finite ordinary intertwiner dimensions, $S_{0i}\ne0$ and the exact character formula $N_{bj}^{\,a}=\sum_iS_{bi}S_{ji}S_{a^*i}/S_{0i}$.

[F5] [[lem-cft-character-hopf-normalization-and-fusion-diagonalization]] supplies symmetry of this actual character matrix. No identification with an arbitrary independently chosen Hopf matrix is made.

[F6] [[def-cft-intertwining-operator-space]] specifies the actual ordinary logarithm-free intertwiner space used as each open multiplicity space.

[F7] [[def-cft-r5-full-local-cft-data]] is a genus-zero local field/OPE package and explicitly does not impose higher-genus sewing or factorization. Its use in F1 therefore does not silently add the annulus equality.

## Proof

1.1 For each a,b,j construct the vector space U_ab^j=I(M_a;M_b,M_j). By F4 and F6 its dimension is the finite nonnegative integer N_bj^a. Define H_ab as its finite direct sum of U_ab^j tensor M_j, with V acting trivially on the first tensor factor and by its actual module action on the second. Every character series converges absolutely locally uniformly by F3; hence its graded trace is the analytic sum Z_open(q_o)=sum_j N_bj^a chi_j(q_o). This constructs the open multiplicities rather than postulating the desired dimensions of an independently chosen open state space. [given, F3, F4, F6, construct]

1.2 Since every S_0i is nonzero by F4, the chosen d_i are nonzero. Form the stated finite linear combinations of the normalized Ishibashi states. Each Ishibashi state solves the Virasoro gluing equations by F2, so both combinations solve those equations coefficientwise in the declared completion. Their overlap is the convergent character sum Z_closed(q_c)=sum_i (S_(a*)i S_bi/S_0i) chi_i(q_c): the two denominators multiply to d_i squared=S_0i and cross-sector overlaps vanish by normalization. The finite sector sum and character convergence justify its evaluation. [given, F2, F3, F4, construct]

2.1 Put tau_o=i delta/2 and tau_c=2i/delta for delta>0. Then tau_c=-1/tau_o and the prescribed nomes are q_o=exp(2 pi i tau_o), q_c=exp(2 pi i tau_c). Apply F3 to each term in step1.2 and exchange the two finite sums. This gives Z_closed(q_c)=sum_j [sum_i S_(a*)i S_bi S_ij/S_0i] chi_j(q_o). All expressions are analytic on the annulus parameter domain. [given, F2, F3, step 1.2, algebra]

3.1 Symmetry in F5 gives S_ij=S_ji. The bracketed coefficient in step2.1 is therefore N_bj^a by F4, with exactly its contragredient label and no complex conjugation. It is the dimension of the actual space constructed in step1.1. Consequently Z_closed(q_c)=Z_open(q_o) for all delta>0, and every open multiplicity is a nonnegative integer. No Cardy equality was used as an assumption in this calculation. [F4, F5, step 1.1, step 2.1, algebra]

4.1 We verify the necessary qualification for arbitrary gluing data by a counterexample at the exact declared interfaces. Take V=C1, omega=0 and c=0, its one simple module C, its character chi=1, and S=(1). Its full genus-zero bulk package is the one-dimensional constant-field package with normalized vacuum functional, satisfying F7. All Virasoro operators vanish. The diagonal normalized Ishibashi vector e has overlap1. Choose an open sector H_aa=C with multiplicity1, and choose the arbitrary gluing boundary state |a>=2^(1/4)e with its equal real bra. It satisfies every local gluing equation in F1 and the general channel datum in F2. Its closed self-overlap is sqrt(2), whereas the open trace is1, before and after every modular substitution. Its closed coefficient is not an integer. This does not contradict step3.1: its coefficient is not the constructed Cardy coefficient. F7 expressly excludes higher-genus sewing, so there is no hidden sewing premise excluding this data from the local interfaces. Thus gluing alone cannot imply the stronger arbitrary-state assertion. [F1, F2, F7, step 3.1, construct]

5.1 Steps1.1–3.1 prove the full constructed-Cardy-state equality and integrality claims, including actual open state spaces and convergence. Step4.1 proves the stated limitation for arbitrary gluing states. The construction gives the two consistent annulus channel expressions under the normalized diagonal datum; no existence theorem for a complete local boundary CFT or its other sewing equations is inferred. [F1, F2, F3, F4, F5, F6, F7, step 1.1, step 1.2, step 3.1, step 4.1, algebra] ∎

## Scope correction

The former public wording asserted equality and integrality for arbitrary boundary coefficients satisfying only Virasoro gluing. The explicit one-dimensional counterexample in step4.1 refutes that assertion under the actual local data definitions. The necessary correction preserves and proves the full standard Cardy construction, constructs its open multiplicity spaces from finite ordinary intertwiner spaces, and retains gluing as a local condition. It adds neither annulus equality nor desired multiplicities as an assumption. This is an explicit correction of a false qualification, not an inference that a full boundary CFT exists from its annulus expressions.
