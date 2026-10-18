---
id: thm-it-quantum-channel-capacity-regularized-coherent-information
kind: theorem
title: Regularized coherent-information formula for quantum capacity
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 9
deps:
  - def-it-quantum-channel-operational-capacities
  - def-it-quantum-channel-complement-and-coherent-information
  - lem-it-quantum-and-private-information-product-additivity
  - lem-it-finite-superadditive-sequence-limit
  - lem-it-quantum-entropy-maximized-at-maximally-mixed-state
  - thm-qc-finite-stinespring-dilation
  - thm-qc-purification-existence-and-unitary-equivalence
  - def-it-von-neumann-entropy
  - thm-natural-logarithm-laws
  - thm-qc-channels-compose-and-tensor
  - thm-qc-schmidt-decomposition
  - lem-qc-tensor-product-basis-and-dimension
  - lem-it-quantum-coherent-information-complement-identity
  - def-qc-density-operator
  - lem-it-flat-spectral-type-information-approximation
  - lem-it-flat-input-coherent-information-achievability
  - lem-it-dimension-dependent-quantum-entropy-continuity
  - thm-qc-fuchs-van-de-graaf
  - lem-qa-21-partial-trace-contracts-trace-norm-on-hermitians
  - thm-it-finite-quantum-mutual-information-data-processing
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; all spaces and sums are finite-dimensional."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information, Theorems 8.53–8.55"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
    - title: "Igor Devetak, The private classical capacity and quantum capacity of a quantum channel, Theorem 5 and Proposition 7"
      url: "https://arxiv.org/pdf/quant-ph/0304127"
    - title: "Mark M. Wilde, From Classical to Quantum Shannon Theory, §§24.4 and 24.8"
      url: "https://arxiv.org/pdf/1106.1445v8"
---
---
## Statement

Let $\mathcal N:A\to B$ be a finite-dimensional memoryless quantum channel. For $n\ge1$, put

$$q_n(\mathcal N):=\sup_{\rho\in\mathcal D(A^{\otimes n})}I_c(\rho,\mathcal N^{\otimes n}).$$

Under the subspace entanglement-transmission convention in [[def-it-quantum-channel-operational-capacities]],

$$Q(\mathcal N)=\lim_{n\to\infty}\frac{q_n(\mathcal N)}n=\sup_{n\ge1}\frac{q_n(\mathcal N)}n.$$

No general single-letter or additivity assertion is made.

## Facts & Assumptions

**Given:** The finite-dimensional memoryless channel and quantum-capacity convention in the Statement.

[F7] [[def-qc-density-operator]]: a rank-one projection onto a unit vector is a density operator.

[F1] [[def-it-quantum-channel-complement-and-coherent-information]]: $I_c(\rho,\mathcal N)=S(B)-S(RB)$ for a finite purification.

[F2] [[lem-it-quantum-and-private-information-product-additivity]]: coherent information is additive on product input states for product channels.

[F3] [[lem-it-quantum-entropy-maximized-at-maximally-mixed-state]] and [[def-it-von-neumann-entropy]]: every state has $S\ge0$ by the eigenvalue formula and $S\le\ln D$ on a $D$-dimensional register.

[F4] [[lem-it-finite-superadditive-sequence-limit]]: a linearly bounded superadditive sequence has normalized limit equal to its supremum.

[F5] [[lem-it-quantum-coherent-information-complement-identity]] and [[thm-qc-schmidt-decomposition]]: a pure input has zero coherent information because its receiver and environment outputs are the two marginals of a pure Stinespring output.

[F6] [[lem-qc-tensor-product-basis-and-dimension]] and [[thm-natural-logarithm-laws]]: $\dim(B^{\otimes n})=(\dim B)^n$ and $\ln(\dim(B^{\otimes n}))=n\ln(\dim B)$.



[F8] [[lem-it-flat-spectral-type-information-approximation]]: Exact flat spectral-type reduction of channel information.

[F9] [[lem-it-flat-input-coherent-information-achievability]]: Flat-input coherent information is achievable by subspace codes.

[F10] [[lem-it-dimension-dependent-quantum-entropy-continuity]]: Dimension-dependent quantum entropy continuity and Holevo control.

[F11] [[thm-qc-fuchs-van-de-graaf]]: Fuchs Van De Graaf.

[F12] [[lem-qa-21-partial-trace-contracts-trace-norm-on-hermitians]]: Partial trace contracts the trace norm on Hermitian operators.

[F13] [[thm-it-finite-quantum-mutual-information-data-processing]]: Data processing for finite quantum mutual information.

## Proof

First establish the information-sequence limit, then prove the operational direct and converse bounds.

1.1 Set $q_0=0$. A unit vector in the nonzero space $A^{\otimes n}$ defines a pure input state by [F7]. Its Stinespring output on receiver and environment is pure; its two marginals have equal entropy by the Schmidt decomposition in [F5], so the coherent-information/complement identity in [F5] gives zero. For every input state, [F1] gives $I_c=S(B^n)-S(RB^n)\le S(B^n)$ because entropy is nonnegative by [F3]. The state $B^n$ lies on a space of dimension $(\dim B)^n$ by [F6], so [F3] gives $S(B^n)\le n\ln\dim B$. Thus $0\le q_n\le n\ln\dim B$. [F1, F3, F5, F6, F7, given, algebra]

2.1 For positive $m,n$, choose states within $\delta>0$ of the respective suprema $q_m$ and $q_n$. Their product is an admissible input for $\mathcal N^{\otimes(m+n)}$, and [F2] makes its coherent information the sum of the two values. Letting $\delta\downarrow0$ gives $q_{m+n}\ge q_m+q_n$. The linear bound in step 1.1 and [F4] show that $q_n/n$ converges to $\sup_{n\ge1}q_n/n$. [F2, F4, step 1.1, algebra, choose]

3.1 For any state $\rho$, apply the exact type reduction to $\rho^{\otimes m}$ and choose a type with $$I_c(\tau_t,\mathcal N^{\otimes m})\ge mI_c(\rho,\mathcal N)-d\ln(m+1).$$ Restrict the input of the $m$-use channel to that type subspace and apply the flat-input direct construction. Concatenating the type embedding with its isometric code preserves the operational encoder condition. Thus $$Q(\mathcal N)\ge I_c(\rho,\mathcal N)-\frac{d\ln(m+1)}m.$$ Here and below a negative right side is covered by rate zero. To pass from codes of length divisible by $m$ to all lengths $n$, take $k=\lfloor n/m\rfloor$, use the $k$-block code, and pad the remaining fewer than $m$ inputs with a fixed pure state; the decoder discards their outputs. Fidelity is unchanged and the rate loss tends to zero. Let $m\to\infty$. Applying this result to any fixed block channel $\mathcal N^{\otimes j}$ and padding again gives $Q(\mathcal N)\ge q_j/j$ for every $j$, and therefore the full regularized direct bound. [F8, F9, F10, F11, F12, F13, step 2.1, given, algebra, construct]

4.1 For a length-$n$ isometric code of dimension $K$, let $\rho=W(I_K/K)W^*$, let $\zeta_{RM}$ be its decoded entangled state, and put $t=T(\zeta,\Phi_K)$. Write $g(t)=(1+t)\ln(1+t)-t\ln t$, with $g(0)=0$. Fuchs–van de Graaf gives $t\le\sqrt{1-F_n}$, because $F_n$ is the squared overlap with the pure target. Partial-trace contraction gives $T(\zeta_M,I_K/K)\le t$. Quantitative continuity on dimensions $K$ and $K^2$ yields $$S(M)_\zeta\ge\ln K-t\ln K-g(t),\qquad S(RM)_\zeta\le2t\ln K+g(t).$$ Thus decoded coherent information is at least $(1-3t)\ln K-2g(t)$. A decoder cannot increase coherent information: its reference entropy is unchanged, and quantum mutual-information data processing applied to $I(R:B)$ gives $S(B)-S(RB)\ge S(M)-S(RM)$. Before decoding, the purification is the encoded half-maximally-entangled state, so its coherent information equals $I_c(\rho,\mathcal N^{\otimes n})\le q_n$. Consequently $$q_n\ge(1-3t)\ln K-2g(t).$$ For a reliable code sequence $t\to0$, and $K\le(\dim A)^n$ because the encoder is isometric. Divide by $n$ and use this uniform dimension bound to conclude that the limsup code rate is at most $\lim q_n/n$. Dimension-one codes need no continuity estimate. Combining the converse, the direct bound for every fixed block, and the stated proved superadditive limit gives exactly the retained full quantum-capacity statement. [F8, F9, F10, F11, F12, F13, step 3.1, given, algebra, construct] ∎
