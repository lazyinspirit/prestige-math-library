---
id: thm-qsmx-cmi-and-channel-dpi
kind: theorem
title: Conditional mutual information and finite channel monotonicity
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 1
deps:
  - def-qsmx-information-conventions
  - def-qsm-dt-channel-definition
  - def-qc-partial-trace
  - def-it-finite-dimensional-quantum-relative-entropy
  - lem-qsm-matrix-state-calculus
  - thm-it-finite-strong-subadditivity
  - thm-it-quantum-relative-entropy-partial-trace-data-processing
  - thm-qsm-dt-choi-kraus
dependency_roles:
  def-qsmx-information-conventions: mathematical-premise
  def-qsm-dt-channel-definition: mathematical-premise
  def-qc-partial-trace: mathematical-premise
  def-it-finite-dimensional-quantum-relative-entropy: mathematical-premise
  lem-qsm-matrix-state-calculus: mathematical-premise
  thm-it-finite-strong-subadditivity: mathematical-premise
  thm-it-quantum-relative-entropy-partial-trace-data-processing: mathematical-premise
  thm-qsm-dt-choi-kraus: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: John Watrous, The Theory of Quantum Information, Chapter 5, Theorem 5.35 and proof; Theorem 5.36 and proof, author-hosted manuscript
      url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.5.pdf
    - title: Mark M. Wilde, From Classical to Quantum Shannon Theory, Chapter 11, Theorems 11.7.1 and 11.8.1; Corollary 11.9.1, second-edition prepublication full text
      url: https://arxiv.org/pdf/1106.1445v8
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Statement

Let $H_A,H_B,H_C$ be nonzero finite-dimensional complex inner-product spaces and let $\rho_{ABC}$ be a density operator on $H_A\otimes H_B\otimes H_C$. With dimensionless entropy $S$ and conditional mutual information $I(A:C\mid B)$ defined by the conventions below,

$$I(A:C\mid B)_\rho=S(\rho_{AB})+S(\rho_{BC})-S(\rho_B)-S(\rho_{ABC})\ge0.$$

Also let $d,e\ge1$ and let $\Phi:M_d(\mathbb C)\to M_e(\mathbb C)$ be a finite completely positive trace-preserving map. For all positive semidefinite $X,Y\in M_d(\mathbb C)$,

$$D(\Phi(X)\|\Phi(Y))\le D(X\|Y),$$

where $D$ is the support-sensitive finite-dimensional quantum relative entropy: it equals $\operatorname{Tr}(X\log X)-\operatorname{Tr}(X\log Y)$ when $\operatorname{supp}X\subseteq\operatorname{supp}Y$, and $+\infty$ otherwise. These are finite-dimensional mathematical statements. The channel inequality is one-sided and asserts no equality condition, recovery map, or infinite-dimensional extension.

## Statement references

[[def-qsmx-information-conventions]]

[[def-qsm-dt-channel-definition]]

[[def-it-finite-dimensional-quantum-relative-entropy]]

[[thm-it-finite-strong-subadditivity]]

[[thm-it-quantum-relative-entropy-partial-trace-data-processing]]

[[thm-qsm-dt-choi-kraus]]

## Stinespring factorization diagram

```tikzcd
\begin{tikzcd}
M_d(\mathbb C)_+ \arrow[r, "X\mapsto VXV^*"] \arrow[dr, "\Phi"'] & \operatorname{End}(\mathbb C^e\otimes\mathcal E)_+ \arrow[d, "\operatorname{Tr}_{\mathcal E}"] \\
& M_e(\mathbb C)_+
\end{tikzcd}
```

Here $M_d(\mathbb C)_+$ denotes positive semidefinite matrices, $\mathcal E$ is the finite environment constructed in step 1.2, and $V$ is its isometry. The triangle commutes because step 1.2 computes $\operatorname{Tr}_{\mathcal E}(VXV^*)=\Phi(X)$ entrywise. The proof uses that computation and the stated partial-trace inequality, not the diagram.

## Facts & Assumptions

**Given:** The spaces and state in the first clause of the Statement; integers $d,e\ge1$ and the finite channel $\Phi$ in the second clause. Use natural logarithms and the ordered finite tensor conventions of the cited definitions.

[A1] [[def-qsmx-information-conventions]]: $I(A:C\mid B)_\rho=S(\rho_{AB})+S(\rho_{BC})-S(\rho_B)-S(\rho_{ABC})$, with each marginal formed by partial trace.

[A2] [[def-qsm-dt-channel-definition]]: a finite channel is a complex-linear completely positive and trace-preserving map on matrix algebras.

[F1] [[thm-it-finite-strong-subadditivity]]: for a density operator on any ordered finite triple $H_A\otimes H_B\otimes H_C$, $S(\rho_{AB})+S(\rho_{BC})\ge S(\rho_B)+S(\rho_{ABC})$.

[F2] [[thm-it-quantum-relative-entropy-partial-trace-data-processing]]: for positive semidefinite $R,S$ on a finite tensor product, $D(\operatorname{Tr}_E R\|\operatorname{Tr}_E S)\le D(R\|S)$, including the extended-real support-failure cases.

[F3] [[thm-qsm-dt-choi-kraus]]: a finite CPTP map has a finite Kraus representation $\Phi(X)=\sum_{a=1}^qK_aXK_a^*$, and trace preservation entails $\sum_aK_a^*K_a=I_d$.

[F4] [[def-qc-partial-trace]]: in product bases, the partial trace over the second factor sums diagonal blocks in that factor.

[F5] [[def-it-finite-dimensional-quantum-relative-entropy]]: $D(R\|S)$ is finite on support inclusion and $+\infty$ otherwise; the finite branch uses support-restricted spectral logarithms.

[F6] [[lem-qsm-matrix-state-calculus]]: positive finite matrices have finite spectral decompositions and spectral logarithms on their positive supports; the finite trace is basis-independent and satisfies $\operatorname{Tr}(AB)=\operatorname{Tr}(BA)$.

## Proof

1.1 By [A1], the left side of the first assertion is the displayed four-entropy difference. Apply [F1] to the given state with the same factor order; the resulting inequality is exactly $I(A:C\mid B)_\rho\ge0$. [given, A1, F1]

1.2 By [F3], choose a finite Kraus list $K_1,\ldots,K_q$ with $\sum_aK_a^*K_a=I_d$; because $d\ge1$, this identity rules out $q=0$. Let $\mathcal E=\mathbb C^q$ with orthonormal basis $(f_a)$ and define $V:\mathbb C^d\to\mathbb C^e\otimes\mathcal E$ by $Vx=\sum_aK_ax\otimes f_a$. Orthogonality of the $f_a$ gives $\langle Vx,Vy\rangle=\sum_a\langle K_ax,K_ay\rangle=\langle x,(\sum_aK_a^*K_a)y\rangle=\langle x,y\rangle$, so $V^*V=I_d$. The coordinate formula [F4] then gives $\operatorname{Tr}_{\mathcal E}(VXV^*)=\sum_aK_aXK_a^*=\Phi(X)$ for every $X\in M_d(\mathbb C)$. [given, A2, F3, F4, construct, algebra]

2.1 The isometry $V$ maps each positive-eigenvalue eigenspace of $X\ge0$ onto the corresponding eigenspace of $VXV^*$, with the same eigenvalue; the orthogonal complement of $\operatorname{ran}V$ is in the kernel. Hence $\operatorname{supp}(VXV^*)=V(\operatorname{supp}X)$, and likewise for $Y$. Because $V$ is injective, support inclusion holds for $X,Y$ exactly when it holds for $VXV^*,VYV^*$. If it fails, both relative entropies are $+\infty$ by [F5]. If it holds, the support-restricted spectral logarithms satisfy $\log(VXV^*)=V(\log X)V^*$ and $\log(VYV^*)=V(\log Y)V^*$ on the corresponding supports. The trace identity in [F6] therefore yields $D(VXV^*\|VYV^*)=D(X\|Y)$. [given, F5, F6, step 1.2, algebra]

3.1 Apply [F2] to $R=VXV^*$ and $S=VYV^*$, which are positive semidefinite because $V$ is linear and $X,Y\ge0$. By step 1.2 their partial traces are $\Phi(X),\Phi(Y)$, and by step 2.1 their relative entropy equals $D(X\|Y)$. Thus $D(\Phi(X)\|\Phi(Y))\le D(X\|Y)$, including when the right side is $+\infty$. [given, F2, step 1.2, step 2.1, algebra] ∎
