---
id: thm-it-quantum-entropy-identities
kind: theorem
title: Finite quantum mutual information identities and the Holevo identity
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps: [def-it-finite-quantum-information-measures, def-it-classical-quantum-state-and-holevo-information, def-it-finite-dimensional-quantum-relative-entropy, def-it-von-neumann-entropy, lem-it-quantum-entropy-support-and-finiteness, def-qc-partial-trace, def-qc-first-factor-partial-trace, thm-qc-partial-trace-characterization-and-basis-independence, def-qc-tensor-register-and-permutation, thm-non-negative-operator-characterisations, thm-trace-of-ab-equals-trace-of-ba]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information, §§5.2.1–5.2.2 and §5.3.3"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
    - title: "Mark M. Wilde, From Classical to Quantum Shannon Theory, arXiv:1106.1445v8, §§11.1 and 11.8"
      url: "https://arxiv.org/pdf/1106.1445v8"
---

## Statement

For a finite-dimensional bipartite state $\rho_{AB}$,

$$I(A:B)_\rho=S(\rho_A)+S(\rho_B)-S(\rho_{AB})=D(\rho_{AB}\|\rho_A\otimes\rho_B).$$

For a finite classical-quantum state $\rho_{XB}=\sum_xp_x\Pi_x\otimes\rho_x$, its mutual information equals its Holevo information:

$$I(X:B)_\rho=S\!\left(\sum_xp_x\rho_x\right)-\sum_{x:p_x>0}p_xS(\rho_x)=\chi(\{p_x,\rho_x\}).$$

## Facts & Assumptions

**Given:** The finite-dimensional states in the Statement, with the root linear-first convention.

[F1] [[def-it-finite-quantum-information-measures]]: $I(A:B)_\rho=S(\rho_A)+S(\rho_B)-S(\rho_{AB})$ and $I(X:B)_\rho=S(\rho_X)+S(\rho_B)-S(\rho_{XB})$.

[F2] [[def-it-finite-dimensional-quantum-relative-entropy]]: on support inclusion, $D(A\|B)=\operatorname{tr}(A\ln A)-\operatorname{tr}(A\ln B)$ with support-restricted spectral logarithms.

[F3] [[lem-it-quantum-entropy-support-and-finiteness]]: $\operatorname{supp}(\rho_{AB})\subseteq\operatorname{supp}(\rho_A\otimes\rho_B)$, so the QRE in the Statement is finite.

[F4] [[def-it-classical-quantum-state-and-holevo-information]]: $\rho_{XB}=\sum_xp_x\Pi_x\otimes\rho_x$, $\rho_B=\sum_xp_x\rho_x$, and $\chi=S(\rho_B)-\sum_{p_x>0}p_xS(\rho_x)$.

[F5] [[thm-qc-partial-trace-characterization-and-basis-independence]]: $\operatorname{tr}((\operatorname{Tr}_B R)T)=\operatorname{tr}(R(T\otimes I_B))$.

[F6] [[def-qc-first-factor-partial-trace]]: $\operatorname{Tr}_A$ is the first-factor partial trace and has entries $(\operatorname{Tr}_A R)_{jj'}=\sum_iR_{(i,j),(i,j')}$. 

[F7] [[def-qc-partial-trace]]: the second-factor partial trace has entries $(\operatorname{Tr}_B R)_{ii'}=\sum_jR_{(i,j),(i',j)}$.

[F8] [[def-qc-tensor-register-and-permutation]]: tensor product bases retain the displayed factor order and use the product inner product.

[F9] [[thm-non-negative-operator-characterisations]]: non-negative operators have orthonormal eigenbases with nonnegative eigenvalues.

[F10] [[def-it-von-neumann-entropy]]: entropy is $-\operatorname{tr}(R\ln R)$, with zero-eigenvalue terms omitted.

## Proof

1.1 By [F3], the support condition in [F2] holds for $\rho_{AB}$ and $\rho_A\otimes\rho_B$, so the relative entropy is evaluated by its finite trace formula. [given, F2, F3]

2.1 Choose orthonormal eigenbases of the marginals using [F9], with positive eigenvalues $a_i$ for $\rho_A$ on its support and $b_j$ for $\rho_B$ on its support. Their product vectors form an orthonormal eigenbasis of $\rho_A\otimes\rho_B$ on its support by [F8], with eigenvalues $a_ib_j>0$. Since $\ln(a_ib_j)=\ln a_i+\ln b_j$, spectral calculus gives $\ln(\rho_A\otimes\rho_B)=(\ln\rho_A)\otimes I_B+I_A\otimes(\ln\rho_B)$ on that support. [given, F2, F8, F9, step 1.1, algebra, choose]

3.1 Extend each marginal logarithm by zero on its kernel, which does not affect the support-restricted traces by [F2] and [F3]. Taking $T=\ln\rho_A$ in [F5] gives $\operatorname{tr}(\rho_{AB}((\ln\rho_A)\otimes I_B))=\operatorname{tr}(\rho_A\ln\rho_A)$. For the second marginal, expanding the finite product-basis trace and using the entries in [F6] gives $\operatorname{tr}(\rho_{AB}(I_A\otimes\ln\rho_B))=\operatorname{tr}(\rho_B\ln\rho_B)$. Combining these identities with [F2] and step 2.1 yields $D(\rho_{AB}\|\rho_A\otimes\rho_B)=S(\rho_A)+S(\rho_B)-S(\rho_{AB})=I(A:B)_\rho$. [F1, F2, F3, F5, F6, step 2.1, algebra]

4.1 In the orthogonal blocks of $\rho_{XB}$, the eigenvalues are $p_x\lambda_{xj}$, where $\lambda_{xj}$ are the eigenvalues of $\rho_x$; zero-probability blocks contribute only zeros. By [F7] and $\operatorname{tr}ρ_x=1$, $\rho_X=\sum_xp_x\Pi_x$; its eigenvalues are $(p_x)$, and the $B$-marginal is $\bar\rho_B=\sum_xp_x\rho_x$ by [F4]. The block eigenvalues follow from [F9]. Expanding $-(p_x\lambda_{xj})\ln(p_x\lambda_{xj})$ and using $\sum_j\lambda_{xj}=1$ gives $S(\rho_{XB})=S(\rho_X)+\sum_{x:p_x>0}p_xS(\rho_x)$ by [F10]. Substitution into the definition [F1] cancels $S(\rho_X)$ and proves $I(X:B)_\rho=\chi(\{p_x,\rho_x\})$. [given, F1, F4, F7, F9, F10, step 2.1, algebra] ∎

