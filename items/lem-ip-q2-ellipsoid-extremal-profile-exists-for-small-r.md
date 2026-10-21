---
id: lem-ip-q2-ellipsoid-extremal-profile-exists-for-small-r
kind: lemma
title: Existence of a finite q=2 ellipsoid extremal profile for small radius
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - def-ip-minimax-detection-risk-and-separation
  - thm-intermediate-value
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Yuri I. Ingster, Theofanis Sapatinas and Irina A. Suslina, Minimax signal detection in ill-posed inverse problems, §4.1, Remark 4.1"
      url: https://arxiv.org/pdf/1001.1853
    - title: "Evarist Giné and Richard Nickl, Mathematical Foundations of Infinite-Dimensional Statistical Models, §6.2.3"
      url: https://www.statslab.cam.ac.uk/~rn289/Site/__files/FULLPDF.pdf
---

## Statement

Assume the minimax detection-risk definition with $q=2$, and let $a_j$ and $\sigma_j$ be positive nondecreasing sequences tending to infinity. There is a constant $r_0>0$ such that for every $r\in(0,r_0)$ there exist $A,z_0>0$ with finite nonempty $S=\{j:Aa_j^2<1\}$ for which
$$\widetilde\eta_j^2=z_0^2\sigma_j^2(1-Aa_j^2)_+$$
satisfies
$$\sum_{j\ge1}\sigma_j^2\widetilde\eta_j^2=r^2,\qquad \sum_{j\ge1}a_j^2\sigma_j^2\widetilde\eta_j^2=1.$$

## Statement references

[Ingster, Sapatinas and Suslina, *Minimax signal detection in ill-posed inverse problems*, §4.1, Remark 4.1](https://arxiv.org/pdf/1001.1853)

[Giné and Nickl, *Mathematical Foundations of Infinite-Dimensional Statistical Models*, §6.2.3](https://www.statslab.cam.ac.uk/~rn289/Site/__files/FULLPDF.pdf)

## Facts & Assumptions

**Given:** Positive nondecreasing $a_j,\sigma_j\to\infty$ in the q=2 Gaussian sequence detection class.

[F1] [[def-ip-minimax-detection-risk-and-separation]]: the two constraints defining $\Theta_2(r)$ are $\sum_j a_j^2\sigma_j^2\eta_j^2\le1$ and $\sum_j\sigma_j^2\eta_j^2\ge r^2$.

[F2] [[thm-intermediate-value]]: if a real-valued function is continuous on a closed bounded interval and a target lies between its endpoint values, it takes that target at some point of the interval; no additional choice assumption is needed.

## Proof

1.1 Put $b_j=a_j^2$ and $c_j=\sigma_j^4$. For $0<A<b_1^{-1}$ define the finite sums $$N(A)=\sum_{j\ge1}c_j(1-Ab_j)_+,\qquad D(A)=\sum_{j\ge1}c_jb_j(1-Ab_j)_+,$$ and $R(A)=N(A)/D(A)$. The active set is finite because $b_j\to\infty$, and it is nonempty because $A<b_1^{-1}$. On every compact subinterval of $(0,b_1^{-1})$, only finitely many indices can be active; each summand is continuous and vanishes at its activation endpoint. Thus $R$ is continuous and $D(A)>0$. [given]

2.1 The ratio is a weighted average of $1/b_j$: with $p_j(A)=c_jb_j(1-Ab_j)_+/D(A)$, the numbers $p_j(A)$ are nonnegative, sum to one, and $R(A)=\sum_jp_j(A)/b_j$. Fix $K>0$ and choose $j_0$ so $b_j\ge K$ for $j\ge j_0$. The head weight $\sum_{j<j_0}p_j(A)$ tends to zero as $A\downarrow0$: its numerator is bounded by the fixed finite sum $\sum_{j<j_0}c_jb_j$, while for any $M\ge j_0$ the denominator is at least $\frac12\sum_{j=j_0}^M c_jb_j$ once $A b_M\le1/2$. Since $c_jb_j\to\infty$, these finite partial sums can be made arbitrarily large. Also $R(A)\le b_1^{-1}\sum_{j<j_0}p_j(A)+1/K$, so $\limsup_{A\downarrow0}R(A)\le1/K$. As $K$ is arbitrary, $R(A)\to0$. [step 1.1, algebra]

2.2 Let $m_0$ be the largest index with $b_{m_0}=b_1$; it is finite because $b_j\to\infty$. For $A$ sufficiently close to $b_1^{-1}$ from below, the active set is exactly $\{1,\ldots,m_0\}$ and all its $b_j$ equal $b_1$. Hence $R(A)=b_1^{-1}$ there. [given, step 1.1, algebra]

3.1 By step 1.1, $R$ is continuous on $(0,b_1^{-1})$. Given $r^2\in(0,b_1^{-1})$, steps 2.1 and 2.2 let us choose $0<A_-<A_+<b_1^{-1}$ with $R(A_-)<r^2$ and $R(A_+)=b_1^{-1}$. Apply [F2] to the restriction of $R$ to $[A_-,A_+]$ to obtain $A$ with $R(A)=r^2$. Set $z_0^2=r^2/N(A)>0$ and define $\widetilde\eta_j^2=z_0^2\sigma_j^2(1-Ab_j)_+$. Its support is the finite active set, and $$\sum_j\sigma_j^2\widetilde\eta_j^2=z_0^2N(A)=r^2,\qquad \sum_ja_j^2\sigma_j^2\widetilde\eta_j^2=z_0^2D(A)=\frac{r^2D(A)}{N(A)}=1.$$ Taking $r_0=b_1^{-1/2}$ proves the assertion and, by [F1], the profile belongs to $\Theta_2(r)$. [F1, F2, step 1.1, step 2.1, step 2.2, construct, algebra] ∎
