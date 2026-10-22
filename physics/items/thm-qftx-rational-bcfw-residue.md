---
id: thm-qftx-rational-bcfw-residue
kind: theorem
title: Tree recursion under an explicit vanishing-boundary hypothesis
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 2
deps:
  - def-qftx-spinor-helicity
  - lem-qftx-spinor-factorization
dependency_roles:
  def-qftx-spinor-helicity: mathematical-premise
  lem-qftx-spinor-factorization: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: Henriette Elvang and Yu-tin Huang, Scattering Amplitudes
      url: https://arxiv.org/pdf/1308.1697
      locator: §§3.1–3.3, PDF pp. 34–45; shifted momenta, simple tree poles, factorization residues, the residue formula and the separate large-z condition.
    - title: Andrea Marzolla, The four-dimensional on-shell three-point amplitude in spinor-helicity formalism and BCFW recursion relations
      url: https://arxiv.org/pdf/1705.09678
      locator: §5, PDF pp. 28–33; complex two-line deformations, factorization channels and the residue at infinity.
    - title: Ruth Britto, Freddy Cachazo, Bo Feng, and Edward Witten, Direct Proof of Tree-Level Recursion Relation in Yang-Mills Theory
      url: https://arxiv.org/pdf/hep-th/0501052
      locator: §§2–3.1, PDF pp. 2–8; the matching two-line shift, generic rational poles, on-shell factorization residues, and the Yang-Mills helicity-specific proof of decay at infinity.
---

## Statement

Let $n\ge4$ and let $p_1,\ldots,p_n\in\mathbb C^4\setminus\{0\}$ be complex null momenta with $\sum_{a=1}^n p_a=0$. Choose spinor factors $\kappa(p_a)=\lambda_a\widetilde\lambda_a$, whose existence is established by the null-factorization result on this page, and choose distinct labels $i,j$. The spinor factors and $h$ use the convention in the spinor-helicity definition. For dimensionless $z\in\mathbb C$, make the two-line shift

$$\lambda_i(z)=\lambda_i+z\lambda_j,\qquad \widetilde\lambda_j(z)=\widetilde\lambda_j-z\widetilde\lambda_i,$$

leaving $\widetilde\lambda_i$, $\lambda_j$ and every other spinor unchanged; set $p_a(z)=\kappa^{-1}(\lambda_a(z)\widetilde\lambda_a(z))$.

Let $A(z)=F(z)/G(z)$, where $F,G\in\mathbb C[z]$, $G\not\equiv0$, and common factors are canceled. A finite pole is a zero of the reduced denominator $G$; it is simple when that zero has multiplicity one. Assume $A$ is regular at $z=0$, has distinct simple finite poles $z_1,\ldots,z_m\ne0$ and no other finite poles, and $A(z)\to0$ as $z\to\infty$. For a simple pole, define $r_\alpha=\operatorname{Res}_{z=z_\alpha}A(z)$ as the coefficient of $(z-z_\alpha)^{-1}$ in its Laurent expansion. Then

$$A(0)=-\sum_{\alpha=1}^m\frac{r_\alpha}{z_\alpha}=-\sum_{\alpha=1}^m\operatorname{Res}_{z=z_\alpha}\frac{A(z)}{z}.$$

For a factorization channel, choose a subset $S_\alpha\subset\{1,\ldots,n\}$ with $2\le|S_\alpha|\le n-2$, containing exactly one of $i,j$. Put $P_\alpha(z)=\sum_{a\in S_\alpha}p_a(z)$ and $Q_\alpha(z)=h(P_\alpha(z),P_\alpha(z))$. Assume every pole is assigned a distinct such channel with $Q_\alpha(z_\alpha)=0$ and $Q'_\alpha(z_\alpha)\ne0$. Since $z$ is dimensionless, $Q'_\alpha$ has the same inverse-length-squared units as $Q_\alpha$. If the residue factorization

$$r_\alpha=\frac{\displaystyle\sum_{s\in\mathcal H_\alpha}A_{L,s}(z_\alpha)A_{R,-s}(z_\alpha)}{Q'_\alpha(z_\alpha)}$$

holds, where $\mathcal H_\alpha$ is the finite set of internal helicity labels and $A_{L,s},A_{R,-s}$ are the supplied complex values for the two lower-point channel subproblems at the shifted factorization kinematics, with the internal momenta $P_\alpha(z_\alpha)$ and $-P_\alpha(z_\alpha)$ null, then

$$A(0)=-\sum_{\alpha=1}^m\frac{1}{z_\alpha Q'_\alpha(z_\alpha)}\sum_{s\in\mathcal H_\alpha}A_{L,s}(z_\alpha)A_{R,-s}(z_\alpha).$$

This is the BCFW recursion for the stated shift. The residue-factorization equality and the vanishing at infinity are hypotheses here; this theorem does not derive them for a chosen QFT model.

## Statement references

[[def-qftx-spinor-helicity]]

[[lem-qftx-spinor-factorization]]

[Elvang and Huang, *Scattering Amplitudes*, §§3.1–3.3](https://arxiv.org/pdf/1308.1697)

[Marzolla, *The four-dimensional on-shell three-point amplitude in spinor-helicity formalism and BCFW recursion relations*, §5](https://arxiv.org/pdf/1705.09678)

[Britto, Cachazo, Feng, and Witten, *Direct Proof of Tree-Level Recursion Relation in Yang-Mills Theory*, §§2–3.1](https://arxiv.org/pdf/hep-th/0501052)

## Facts & Assumptions

**Given:** $n\ge4$, nonzero complex null external momenta with total momentum zero, the specified shift of two distinct legs, and a rational $A(z)$ regular at zero with only the distinct simple finite poles stated above and $A(z)\to0$ at infinity. For the recursion conclusion also assume the displayed finite-channel residue factorization and simple channel zeros.

[F1] [[def-qftx-spinor-helicity]]: a spinor factorization has matrix entries $\kappa(p)_{a\dot a}=\lambda_a\widetilde\lambda_{\dot a}$.

[F2] [[def-qftx-spinor-helicity]]: $h(p,q)=p^0q^0-p^1q^1-p^2q^2-p^3q^3$.

[F3] [[lem-qftx-spinor-factorization]]: $\det\kappa(p)=h(p,p)$ for every $p$.

[F4] [[lem-qftx-spinor-factorization]]: every nonzero complex null external momentum has spinor factors.

[A1] The shift changes only $\lambda_i$ and $\widetilde\lambda_j$ by the displayed amounts; total external momentum is zero before shifting.

[A2] $A(z)$ is rational, regular at $0$, has only the stated distinct nonzero simple finite poles, and tends to zero at infinity.

[A3] At each pole, the finite factorization channel satisfies $Q_\alpha(z_\alpha)=0$, $Q'_\alpha(z_\alpha)\ne0$, and the stated product-and-helicity-sum residue identity.

## Proof

1.1 The finite collection of initial spinor factors exists by [F4]; since $n$ is finite, choose them successively without an arbitrary-family choice principle. In matrix coordinates, $\kappa(p_i(z))=(\lambda_i+z\lambda_j)\widetilde\lambda_i=\kappa(p_i)+z\lambda_j\widetilde\lambda_i$ and $\kappa(p_j(z))=\lambda_j(\widetilde\lambda_j-z\widetilde\lambda_i)=\kappa(p_j)-z\lambda_j\widetilde\lambda_i$. Each shifted matrix is an outer product by [F1], hence has determinant zero; [F3] and [F2] then give nullness, and the two added terms cancel. Thus $\sum_a p_a(z)=0$. [given, F1, F2, F3, F4, A1, choose, algebra]

1.2 Set $r_\alpha=\operatorname{Res}_{z=z_\alpha}A(z)$. The rational function $A(z)-\sum_{\alpha=1}^m r_\alpha/(z-z_\alpha)$ has no finite pole, so it is a polynomial; it tends to zero at infinity by [A2], so that polynomial is zero. Evaluating the resulting partial-fraction identity at $z=0$ gives $A(0)=-\sum_\alpha r_\alpha/z_\alpha$. [A2, algebra]

2.1 Since $z_\alpha\ne0$, the factor $1/z$ is regular there and $\operatorname{Res}_{z=z_\alpha}(A(z)/z)=r_\alpha/z_\alpha$. This proves the residue form. Under [A3], substitute each stated factorization for $r_\alpha$ to obtain the claimed recursion. No contour or large-z model estimate is used beyond the explicit decay hypothesis. [A2, A3, step 1.2, algebra] ∎

## Remarks

The proof establishes a rational-function identity and a conditional substitution. Rationality, simple factorization poles, the residue product, and decay for a particular tree amplitude remain separate model-specific obligations. No loop integration, nonperturbative S-matrix construction, or convergence result for perturbative gravity follows.
