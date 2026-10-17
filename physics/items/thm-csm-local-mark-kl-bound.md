---
id: thm-csm-local-mark-kl-bound
kind: theorem
title: Spatial random-occupation conditional mark entropy bound
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 6
deps:
  - def-axiom-of-choice
  - def-csm-full-marked-model
  - def-csm-marked-periodic-continuation
  - def-tdmath-poisson-configuration-reference
  - lem-csm-kl-chain-disjoint
  - lem-csm-information-contraction-pinsker
  - thm-csm-full-shell-positional-minimizer
  - thm-csm-uniform-phase-shell-entropy
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-csm-full-marked-model: mathematical-premise
  def-csm-marked-periodic-continuation: mathematical-premise
  def-tdmath-poisson-configuration-reference: mathematical-premise
  lem-csm-kl-chain-disjoint: mathematical-premise
  lem-csm-information-contraction-pinsker: mathematical-premise
  thm-csm-full-shell-positional-minimizer: mathematical-premise
  thm-csm-uniform-phase-shell-entropy: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "H.-O. Georgii and H. Zessin, Large deviations and the maximum entropy principle for marked point random fields"
      url: "https://www.mathematik.uni-muenchen.de/~georgii/papers/GiiZess.pdf"
      locator: "Sections 2.3–3, printed pp.184–195 / PDF viewer pp.8–19, and Section 5, printed pp.197–204 / PDF viewer pp.21–28: marked conditional laws, entropy chain rules and local restrictions."
    - title: "H.-O. Georgii, Probabilistic aspects of entropy, in Entropy"
      url: "https://www.mathematik.uni-muenchen.de/~georgii/papers/Dresden.pdf"
      locator: "Section 6, PDF viewer pp.10–12: stationary entropy density and local conditioning context."
---

## Statement

Assume AC and the hypotheses of [[thm-csm-full-shell-positional-minimizer]]. Let $M_n^{\rm ph}$ be the normalized phase-reference restriction to $A_n$, and let $B_n$ be its positional marginal. Given the full position configuration $q$, let $b_{n,A}(\cdot|q)$ be the shell conditional law of marks on the marked local restriction of [[def-csm-marked-periodic-continuation]]. By torus translation invariance, represent any bounded Borel region $\Delta$ by a fixed translate inside $\Lambda_{L_n}$ for all sufficiently large $n$. Choose an axis-parallel half-open cube $C\supseteq\Delta$ of side $\ell>0$, independent of $n$, and pack $L_n^{\rm pack}=\lfloor L_n/\ell\rfloor^d$ disjoint translates of $C$ into the periodic cube, so $L_n^{\rm pack}/V_n\to1/|C|$. For the independent Gaussian mark reference $\nu_b$ of [[def-csm-full-marked-model]],
$$E_{B_n}D(b_{n,\Delta}(\cdot|q)||\nu_b^{\otimes N_\Delta(q)})\leq D(M_n^{\rm ph}||C_n^{\rm ph})/L_n^{\rm pack}.$$
Thus the left side tends to zero. When $\Delta$ itself is an axis-parallel half-open cube, take $C=\Delta$ to obtain the stated packing rate $1/|\Delta|$. Occupancy $N_\Delta(q)$ is random; the comparison is for the full spatially selected set of particles, not a fixed set of labels.

## Facts & Assumptions

**Given:** AC, the shell and canonical phase laws, standard-Borel finite-region restrictions, a fixed bounded Borel region, and the Gaussian mark kernel.

[A1] AC is used in the conditional-law and entropy-chain results ([[def-axiom-of-choice]]).

[F1] [[def-csm-full-marked-model]] and [[thm-csm-full-shell-positional-minimizer]]: conditional canonical marks are $\nu_b^{\otimes N_n}$; the shell conditional kernel is obtained by restricting the finite mark reference to its energy band; the shell law is invariant under torus translations.

[F2] [[def-tdmath-poisson-configuration-reference]] and [[def-csm-marked-periodic-continuation]]: finite configurations have measurable cell counts and lexicographic coordinate codes; marked periodic restrictions to bounded regions are finite and measurable, so after conditioning on positions each block is a finite-dimensional standard-Borel coordinate space.

[F3] [[lem-csm-kl-chain-disjoint]]: relative entropy against a product reference is at least the sum of disjoint-block conditional mark divergences.

[F4] [[lem-csm-information-contraction-pinsker]]: measurable restriction of a mark vector cannot increase its relative entropy against the corresponding product reference.

[F5] [[thm-csm-uniform-phase-shell-entropy]]: full shell-to-canonical relative entropy is finite and $o(V_n)$.

## Proof

**Given:** The hypotheses and definitions above.

1.1 The phase reference has a measurable density. For each $q$, integrate the band indicator over the $N_n$-mark reference; Tonelli gives a measurable normalizer. On the $B_n$-full set where it is positive, division gives the conditional kernel $b_n(\cdot|q)$; choose a fixed probability kernel on the null complement. The conditional chain rule, nonnegativity of the positional divergence, and [F3] give
$$J_n:=E_{B_n}D(b_n(.|q)||ν_b^{⊗N_n})\le D(M_n^{ph}||C_n^{ph}).$$
[A1, F1, F3, F5, construct]

2.1 For each $q$, partition its finitely many points into those in each of the $L_n^{\rm pack}$ disjoint translates $C_j$ packed in the periodic cube, plus the remainder. This is a measurable finite partition; ordering the points by the cell codes in [F2] identifies each block with a finite-dimensional standard-Borel mark space, even though its size depends on $q$. The Gaussian product reference factors over these disjoint sets. Applying [F3] conditionally gives
$$D(b_n(.|q)||ν_b^{⊗N_n})\ge\sum_{j=1}^{L_n^{pack}}D(b_{n,j}(.|q)||ν_b^{⊗N_{Δ_j}(q)}),$$
where an empty block contributes zero. Joint torus-translation invariance transports each block law and its reference kernel, so the integrated divergence is the same for every translate. Averaging and discarding the nonnegative remainder term bounds the divergence for a chosen translate of $C$ by $J_n/L_n^{\rm pack}$. [F1, F2, F3, step 1.1, algebra]

3.1 For $\Delta\subseteq C$, restriction of the ordered mark vector on $q\cap C$ to the points in $q\cap\Delta$ is measurable. Data processing [F4] gives $D(b_{n,\Delta}(\cdot|q)||\nu_b^{\otimes N_\Delta(q)})\leq D(b_{n,C}(\cdot|q)||\nu_b^{\otimes N_C(q)})$ for $B_n$-almost every $q$. Integrating and applying step 2.1 bounds the left side by $J_n/L_n^{\rm pack}$. By [F5], $J_n=o(V_n)$, while $L_n^{\rm pack}/V_n\to1/|C|>0$; therefore the bound tends to zero. [F4, F5, step 2.1] ∎
