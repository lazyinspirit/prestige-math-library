---
id: ex-yangian-two-site-periodic-transfer-matrix
kind: example
title: "An explicit two-site periodic transfer matrix and permutation Hamiltonian"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 7
deps: [def-yangian-periodic-fundamental-chain, thm-yangian-periodic-transfer-matrices-commute, def-hh-rational-spectral-r-matrix]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "L. D. Faddeev, How Algebraic Bethe Ansatz Works for Integrable Model"
      url: "https://arxiv.org/pdf/hep-th/9605187"
      locator: "§3, equations (33)–(39), (41)–(47), and (63)–(65): the rational R-matrix, periodic monodromy and trace, and logarithmic-derivative Hamiltonian construction."
    - title: "F. Loebbert, Lectures on Yangian Symmetry"
      url: "https://arxiv.org/pdf/1606.02947"
      locator: "§§5.1–5.3: the fundamental Lax operator and periodic transfer matrix."
---

## Example

Take $N=2$, two sites, and equal inhomogeneities $a_1=a_2=i/2$ in [[def-yangian-periodic-fundamental-chain]]. With $P_{12}$ the flip of the two quantum factors, direct evaluation gives

$$\tau(u)=(2u^2+\tfrac12)I-P_{12},\quad \tau(i/2)=-P_{12},\quad \tau'(i/2)=2iI.$$

Consequently the normalized logarithmic-derivative operator

$$H=\frac{i}{2}\tau'(i/2)\tau(i/2)^{-1}-I$$

is $P_{12}-I$. This example is the explicit two-site specialization of the shared finite $\mathbb C^2$ family [[def-hh-rational-spectral-r-matrix]]; no new spin-$1/2$ spectral matrix is introduced.

## Facts & Assumptions

**Given:** The two-site chain at $N=2$ with equal inhomogeneities $i/2$, and the transfer-matrix definition and commutativity theorem.

[F1] [[def-yangian-periodic-fundamental-chain]]: $L_{0j}(u)=(u-a_j)I+iP_{0j}$, $M_0(u)=L_{01}(u)L_{02}(u)$, and $\tau(u)=\operatorname{tr}_0M_0(u)$.

[F2] [[thm-yangian-periodic-transfer-matrices-commute]]: the finite periodic chain satisfies $[\tau(u),\tau(v)]=0$ for all complex $u,v$.

[F3] [[def-hh-rational-spectral-r-matrix]]: on the ordered two-dimensional basis, $R(u)=uI+iP$ with $P(e_a\otimes e_b)=e_b\otimes e_a$.

## Proof

1.1 Set $q=u-i/2$. By [F1] and [F3], $M_0(u)=(qI+iP_{01})(qI+iP_{02})=q^2I+iq(P_{01}+P_{02})-P_{01}P_{02}$. The explicit partial traces are $\operatorname{tr}_0 I=2I$, $\operatorname{tr}_0P_{01}=\operatorname{tr}_0P_{02}=I$, and $\operatorname{tr}_0(P_{01}P_{02})=P_{12}$. For the last identity, expand $P_{0j}=\sum_{r,s}E_{rs}^{(0)}E_{sr}^{(j)}$, multiply using $E_{rs}E_{tu}=\delta_{st}E_{ru}$, and trace the auxiliary factor to obtain $\sum_{r,s}E_{sr}^{(1)}E_{rs}^{(2)}=P_{12}$. Therefore $\tau(u)=2(q^2+iq)I-P_{12}=(2u^2+\tfrac12)I-P_{12}$. [given, F1, F3, algebra]

2.1 Substitution $u=i/2$ gives $\tau(i/2)=-P_{12}$, and differentiating the polynomial gives $\tau'(i/2)=4(i/2)I=2iI$. Since $P_{12}^2=I$, the inverse of $-P_{12}$ is $-P_{12}$. Thus $(i/2)\tau'(i/2)\tau(i/2)^{-1}-I=(i/2)(2iI)(-P_{12})-I=P_{12}-I$. [given, F1, step 1.1, algebra]

3.1 The whole polynomial family commutes by [F2], including this specialization; the calculation above identifies one normalized logarithmic derivative and uses no limiting inverse at a singular spectral difference. [given, F2, step 2.1, algebra] ∎
