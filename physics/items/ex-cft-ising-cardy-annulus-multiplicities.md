---
id: ex-cft-ising-cardy-annulus-multiplicities
kind: example
title: Ising Cardy annulus multiplicities
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 4
deps:
  - def-cft-diagonal-rational-annulus-data
dependency_roles:
  def-cft-diagonal-rational-annulus-data: mathematical-premise
justified_by: []
proof_strategy: direct
domain: mathematics
library: mathematics
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: "John Cardy, Boundary Conformal Field Theory, arXiv:hep-th/0411189v2"
      url: https://arxiv.org/pdf/hep-th/0411189v2
      locator: "§3, equations (37)–(48), PDF pp. 12–14; the diagonal Ising example and its three boundary states."
    - title: "Paul Ginsparg, Applied Conformal Field Theory, Les Houches lectures (1988; published 1989), arXiv:hep-th/9108028v1"
      url: https://arxiv.org/pdf/hep-th/9108028v1
      locator: "§7.5, printed pp. 95–100, equations (7.20) and (7.22), Ising fusion products and character families."
---

## Example

Use the diagonal Ising VOA $V$ of central charge $c=\frac12$ and its three irreducible ordinary modules $M_0=V$, $M_\epsilon$, and $M_\sigma$, with conformal weights $0,\frac12,\frac1{16}$ and character labels $0,\epsilon,\sigma$ in that order; take the source modular matrix
$$S=\frac12\begin{pmatrix}1&1&\sqrt2\\1&1&-\sqrt2\\\sqrt2&-\sqrt2&0\end{pmatrix}.$$
Each Ising module is self-contragredient; fix module isomorphisms $J_i:M_i^\vee\to M_i$ and use the normalized weight-block coevaluation Ishibashi vectors from [[def-cft-diagonal-rational-annulus-data]]. With positive square roots in that convention, the Cardy coefficients are
$$|0\rangle=2^{-1/2}|0\rangle\rangle+2^{-1/2}|\epsilon\rangle\rangle+2^{-1/4}|\sigma\rangle\rangle,\quad|\epsilon\rangle=2^{-1/2}|0\rangle\rangle+2^{-1/2}|\epsilon\rangle\rangle-2^{-1/4}|\sigma\rangle\rangle,\quad|\sigma\rangle=|0\rangle\rangle-|\epsilon\rangle\rangle.$$
For $\delta>0$, the open and closed names are $q_o=e^{-\pi\delta}$ and $q_c=e^{-4\pi/\delta}$. The open-channel character sums for boundary labels $a,b\in\{0,\epsilon,\sigma\}$ are
$$\begin{array}{c|ccc}Z^{\rm open}_{ab}&b=0&b=\epsilon&b=\sigma\\\hline a=0&\chi_0(q_o)&\chi_\epsilon(q_o)&\chi_\sigma(q_o)\\a=\epsilon&\chi_\epsilon(q_o)&\chi_0(q_o)&\chi_\sigma(q_o)\\a=\sigma&\chi_\sigma(q_o)&\chi_\sigma(q_o)&\chi_0(q_o)+\chi_\epsilon(q_o)\end{array}$$
In particular the $\sigma$-$\sigma$ annulus has two open sectors, $0$ and $\epsilon$, each with multiplicity one.

## Example references

[[def-cft-diagonal-rational-annulus-data]]

## Facts & Assumptions

**Given:** The diagonal Ising character system, the displayed character $S$ transformation, and the Cardy-state construction in the source annulus conventions.

[F1] [[def-cft-diagonal-rational-annulus-data]]: the vacuum label is fixed by $M_0=V$. Since all Ising labels are self-dual, the closed overlap is $\sum_i S_{a i}S_{b i}\chi_i(q_c)/S_{0i}$; the nome parameters satisfy $\tau_c=-1/\tau_o$.

[A1] Cardy's diagonal Ising example supplies the three-label character transformation matrix $S$ above and the stated Cardy-state prescription. Ginsparg's lecture notes independently give the Ising character families and fusion products. The example is a matrix and character calculation conditional on those source data; it does not prove existence of a full local CFT or a path-integral realization.

## Proof

**Given:** The diagonal Ising character system, the displayed character $S$ transformation, and the Cardy-state construction in the source annulus conventions.

1.1 The rows of $S$ are $(\frac12,\frac12,\frac1{\sqrt2})$, $(\frac12,\frac12,-\frac1{\sqrt2})$, and $(\frac1{\sqrt2},-\frac1{\sqrt2},0)$. Their squared norms are $1$ and their pairwise inner products are $0$, so $SS^T=I$. The vacuum-row entries are $(\frac12,\frac12,\frac1{\sqrt2})$, hence the positive roots are $d_0=d_\epsilon=2^{-1/2}$ and $d_\sigma=2^{-1/4}$. Substitution into the Cardy coefficient formula gives the three displayed states. [given, F1, A1, algebra]

2.1 For fixed $b$, the coefficient of $\chi_j(q_o)$ after modularly transforming the closed overlap is $m_{ab}^{\,j}=\sum_i\frac{S_{a i}S_{b i}S_{ij}}{S_{0i}}=\left(S\,\operatorname{diag}\!\left(\frac{S_{bi}}{S_{0i}}\right)S^T\right)_{a j},$ using symmetry of the displayed matrix and $S_{0i}\ne0$. The three diagonal ratio matrices, for $b=0,\epsilon,\sigma$, have entries respectively $(1,1,1)$, $(1,1,-1)$, and $(\sqrt2,-\sqrt2,0)$. [given, F1, A1, step 1.1, algebra]

3.1 For $b=0$, the ratio matrix is the identity, so $m_{\cdot,0}^{\,\cdot}=SS^T=I$. For $b=\epsilon$, direct multiplication with $\operatorname{diag}(1,1,-1)$ gives the second matrix below; for $b=\sigma$, multiplication with $\operatorname{diag}(\sqrt2,-\sqrt2,0)$ gives the third: $m_{\cdot,0}^{\,\cdot}=I,\qquad m_{\cdot,\epsilon}^{\,\cdot}=\begin{pmatrix}0&1&0\\1&0&0\\0&0&1\end{pmatrix},\qquad m_{\cdot,\sigma}^{\,\cdot}=\begin{pmatrix}0&0&1\\0&0&1\\1&1&0\end{pmatrix}.$ with rows indexed by $a$ and columns by $j$ in the order $0,\epsilon,\sigma$. For the potentially nontrivial last row, the formula in step 2.1 gives $m_{\sigma\sigma}^{\,0}=\frac{(1/\sqrt2)^2(1/2)}{1/2}+\frac{(-1/\sqrt2)^2(1/2)}{1/2}=1,\quad m_{\sigma\sigma}^{\,\epsilon}=\frac{(1/\sqrt2)^2(1/2)}{1/2}+\frac{(-1/\sqrt2)^2(1/2)}{1/2}=1,\quad m_{\sigma\sigma}^{\,\sigma}=\frac{(1/\sqrt2)^2(1/\sqrt2)}{1/2}+\frac{(-1/\sqrt2)^2(-1/\sqrt2)}{1/2}=0.$ Thus every coefficient is $0$ or $1$, and the $\sigma$-$\sigma$ row has one unit coefficient in each of columns $0,\epsilon$. [given, A1, step 2.1, algebra]

4.1 Reading the matrices row by row gives the displayed open-channel table. The coefficient formula in step 2.1 came from applying the character $S$ transform to the closed overlap, so each table entry equals that closed-channel expression after $\tau_c=-1/\tau_o$. These are nonnegative integer multiplicities for all nine boundary pairs. The calculation verifies the annulus character identity for this supplied Ising Cardy datum only. [given, F1, A1, step 2.1, step 3.1, algebra] ∎

## Proof status

The finite character-matrix calculation is complete under [A1]. It treats the diagonal Ising Cardy states and supplies no claim about arbitrary Virasoro-gluing states or a full local CFT construction.

## Remarks

Ginsparg's lecture notes independently give $\sigma\times\sigma=0+\epsilon$, $\epsilon\times\epsilon=0$, and $\epsilon\times\sigma=\sigma$. The annulus multiplicity matrices above are checked directly from the displayed $S$ matrix, so the example does not rely on a categorical Hopf-link matrix.
