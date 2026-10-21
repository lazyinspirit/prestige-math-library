---
id: cex-knot-kt-37-boundary-case
kind: counterexample
title: "Omitting Khovanov normalization breaks Reidemeister I and the Jones Euler characteristic"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - def-kauffman-bracket-smoothing-and-loop-value
  - def-oriented-crossing-sign-writhe-and-blackboard-framing
  - def-khovanov-frobenius-algebra-and-cube-of-resolutions
  - alg-khovanov-chain-complex-from-diagram
  - lem-khovanov-cube-differential-squares-to-zero
  - def-oriented-reidemeister-moves
  - lem-each-oriented-reidemeister-move-is-realized-by-ambient-isotopy
  - thm-khovanov-chain-complex-from-diagram-procedure-properties
proof_strategy: direct
axiom_use: "The two finite raw cube calculations are choice-free; no Jones-invariance or choice hypothesis is needed to exhibit the failure."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Mikhail Khovanov, A categorification of the Jones polynomial, arXiv:math/9908171v2, §§2.2–2.4 and 5.1–5.2"
      url: "https://arxiv.org/pdf/math/9908171v2"
    - title: "Dror Bar-Natan, On Khovanov's categorification of the Jones polynomial, Algebraic & Geometric Topology 2 (2002), §§3.1 and 3.5.1"
      url: "https://arxiv.org/pdf/math/0201043"
    - title: "Louis H. Kauffman, An Introduction to Khovanov Homology, arXiv:1107.1524v2 (2022), §§3–4"
      url: "https://www.sas.rochester.edu/mth/sites/doug-ravenel/otherpapers/kaufmann.pdf"
    - title: "Melissa Zhang, Notes on Khovanov homology, arXiv:2501.03115v1, §§3.5–3.7"
      url: "https://arxiv.org/pdf/2501.03115v1"
---

## Statement refuted

For every nonempty finite regular oriented diagram $D$, form the integral Khovanov state cube but omit the cohomological shift $-n_-$ and quantum shift $n_+-2n_-$. The false claim is that the resulting raw cohomology groups are invariant under oriented Reidemeister moves and that their graded rank Euler characteristic equals the Jones polynomial with the usual unreduced unknot factor $q+q^{-1}$, under $q=-A^{-2}$ and $t=q^2=A^{-4}$.

## Statement references

[[def-khovanov-frobenius-algebra-and-cube-of-resolutions|Normalized shifts and local algebra maps]]

[[lem-khovanov-reidemeister-chain-homotopies|Type-I chain-complex cancellations]]

[[lem-khovanov-graded-euler-characteristic-jones-normalization|Normalized Euler characteristic]]

[[alg-khovanov-chain-complex-from-diagram|Raw state cube before normalization]]

[[thm-khovanov-euler-characteristic-is-jones|Jones Euler characteristic theorem]]

[Khovanov, *A categorification of the Jones polynomial* (1999), §§2.2–2.4 and 5.1–5.2](https://arxiv.org/pdf/math/9908171v2)

[Bar-Natan, *On Khovanov's categorification of the Jones polynomial* (2002), §§3.1 and 3.5.1](https://arxiv.org/pdf/math/0201043)

[Kauffman, *An Introduction to Khovanov Homology* (2022), §§3–4](https://www.sas.rochester.edu/mth/sites/doug-ravenel/otherpapers/kaufmann.pdf)

[Zhang, *Notes on Khovanov homology* (2025), §§3.5–3.7](https://arxiv.org/pdf/2501.03115v1)

## Facts & Assumptions

**Given:** The crossingless unknot, its positive and negative one-crossing curls, and the raw cube with both normalization shifts omitted.

[F1] The algebra $\mathcal A$ has basis $1,X$ in quantum degrees $1,-1$, and the edge operations are $m$ and $\Delta$ with the displayed values ([[def-khovanov-frobenius-algebra-and-cube-of-resolutions]]).

[F2] In the declared smoothing chart, the positive one-crossing curl has a two-circle $0$-resolution and one-circle $1$-resolution joined by $m$; the negative curl has one-circle $0$-resolution and a two-circle $1$-resolution joined by $\Delta$ ([[def-kauffman-bracket-smoothing-and-loop-value]], [[def-oriented-crossing-sign-writhe-and-blackboard-framing]], [[alg-khovanov-chain-complex-from-diagram]]).

[F3] A crossingless one-circle diagram has a unique state with no differential ([[alg-khovanov-chain-complex-from-diagram]]).

[F4] Each oriented type-I curl is realized by an ambient isotopy, so the curled diagram and the crossingless diagram represent the same oriented unknot ([[def-oriented-reidemeister-moves]], [[lem-each-oriented-reidemeister-move-is-realized-by-ambient-isotopy]]).

[F5] The signed cube differential squares to zero, and the raw cube is a bounded complex of finite-rank free abelian groups ([[lem-khovanov-cube-differential-squares-to-zero]], [[thm-khovanov-chain-complex-from-diagram-procedure-properties]]).


## Counterexample

1.1 The raw zero-crossing complex of $U$ is $\mathcal A$ in cohomological degree $0$ with zero differential by [F3]. Its generators $1,X$ have quantum degrees $1,-1$ by [F1], so its chain Euler polynomial is $q+q^{-1}$. [F1, F3, given, algebra]

1.2 In the positive curl, the $0$-state contributes $(q+q^{-1})^2$ and the $1$-state contributes $-q(q+q^{-1})$, because the state coordinate raises quantum degree by one and homological degree by one. Hence $\chi_q^{\mathrm{raw}}(U_+)=(q+q^{-1})^2-q(q+q^{-1})=1+q^{-2}=q^{-1}(q+q^{-1})$. In the negative curl, the $0$-state contributes $q+q^{-1}$ and the $1$-state contributes $-q(q+q^{-1})^2$. Hence $\chi_q^{\mathrm{raw}}(U_-)=(q+q^{-1})-q(q+q^{-1})^2=-q^3-q=-q^2(q+q^{-1})$. These computations use only the state modules and gradings before the writhe normalization. [F1, F2, algebra]

2.1 For each quantum degree, tensor the bounded finite-rank free complex with $\mathbb Q$. Clearing denominators shows that kernels and images localize to the kernels and images of the rationalized maps; applying the same argument to a kernel modulo the preceding image identifies rationalized cohomology with integral cohomology tensored with $\mathbb Q$. Its dimension is therefore the integral rank of cohomology. In the bounded rational complex, rank-nullity gives $\dim C^i=\dim H^i+\dim\operatorname{im}d^i+\dim\operatorname{im}d^{i-1}$; alternating over $i$ cancels the image terms. Thus the raw cohomology Euler polynomials equal the chain Euler polynomials in steps 1.1–1.2. The distinct Laurent polynomials $q+q^{-1}$, $q^{-1}(q+q^{-1})$, and $-q^2(q+q^{-1})$ come from diagrams of the same unknot by [F4]. The raw groups are consequently not invariant, and the raw unknot factor is not the claimed $q+q^{-1}$. [F4, F5, step 1.1, step 1.2, algebra] ∎
