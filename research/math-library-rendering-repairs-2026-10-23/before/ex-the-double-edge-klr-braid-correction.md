---
id: ex-the-double-edge-klr-braid-correction
kind: example
title: "The double-edge $(e=2)$ KLR braid correction"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-quiver-hecke-klr-algebra-for-a-symmetrizable-cartan-datum, def-klr-grading-and-diagrammatic-composition, thm-klr-pbw-basis-theorem]
justified_by: []
aliases: []
landmark: false
dependency_level: 4
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'Raphael Rouquier, 2-Kac-Moody Algebras, arXiv:0812.5023v3 (66 pages)'
      url: 'https://arxiv.org/pdf/0812.5023'
      locator: '§3.2.1 relation list, printed pp. 22-24: the braid relation with the correction; §3.2.4, printed pp. 28-29: the double-edge specialization $Q_{ij}=-(u-v)^2$.'
    - title: 'Alexander Kleshchev, Representation theory of symmetric groups and related Hecke algebras, Bulletin of the AMS 47 (2010) 419-481 (survey), arXiv:0909.4844'
      url: 'https://arxiv.org/pdf/0909.4844'
      locator: '§2.6, Theorem 2.5, relations (2.22) and (2.24), printed pp. 10-11: the $e=2$ cases $\psi_r^2e(i)=(y_{r+1}-y_r)(y_r-y_{r+1})e(i)$ and $\psi_r\psi_{r+1}\psi_re(i)=(\psi_{r+1}\psi_r\psi_{r+1}-2y_{r+1}+y_r+y_{r+2})e(i)$.'
    - title: 'Mikhail Khovanov and Aaron D. Lauda, A diagrammatic approach to categorification of quantum groups II, Transactions of the AMS 363 (2011) 2685-2700, arXiv:0804.2080v1'
      url: 'https://arxiv.org/pdf/0804.2080'
      locator: '§1, relations (2) and (7) with the dot-count sums $d_{ij}$, printed pp. 1-4: the general quadratic and braid relations of which the double edge is the case $d_{ij}=d_{ji}=2$.'
---

## Example

Take the cyclic affine datum of type $A_1^{(1)}$: $I=\{i,j\}$, $a_{ij}=a_{ji}=-2$, so $b_{ij}=-2$ and $d_i=d_j=1$, with the KLR datum $Q_{ij}(u,v)=-(u-v)^2=Q_{ji}(v,u)$ (the quiver-with-automorphism specialization of [[def-quiver-hecke-klr-algebra-for-a-symmetrizable-cartan-datum]]). Then:

(a) On equal-colour pairs $\nu_r=\nu_{r+1}$ the quadratic relation is $\tau_r^2e(\nu)=0$, while on double-edge pairs $\nu_r=i,\nu_{r+1}=j$ it is $\tau_r^2e(\nu)=-(x_r-x_{r+1})^2e(\nu)$ (and symmetrically for $ji$).

(b) On $\nu=(i,j,i)$ the braid relation has the nonzero correction
$$\tau_2\tau_1\tau_2e(\nu)-\tau_1\tau_2\tau_1e(\nu)=\bigl(x_1+x_3-2x_2\bigr)e(\nu),$$
so the naive simply-laced braid relation fails; the correction is the divided difference $\dfrac{Q_{ij}(x_1,x_2)-Q_{ij}(x_3,x_2)}{x_3-x_1}$ of relation (7), the first divided difference of the quadratic parameter in its first variable, with the displayed sign.

(c) Degree check: the three factors of $\tau_2\tau_1\tau_2e(\nu)$ act successively on the pairs $(j,i)$, then $(i,i)$, then $(i,j)$ of the two-step permuted sequence, so their degrees are $-b_{ji}=2$, $-b_{ii}=-2$, $-b_{ij}=2$, totalling $2$; the right-hand side $x_1+x_3-2x_2$ also has degree $2$. Thus the correction is homogeneous, of degree $-2b_{ij}-2d_i=2$, while for a simple edge the corresponding correction is a degree-$0$ constant; the doubled Cartan entry raises the degree of the quadratic parameter $Q_{ij}$, hence that of the correction, by $2$.

## Facts & Assumptions

**Given:** The datum $I=\{i,j\}$, $a_{ij}=a_{ji}=-2$, $d_i=d_j=1$, $b_{ij}=-2$, and the KLR datum $Q_{ij}(u,v)=-(u-v)^2$, $Q_{ji}(u,v)=-(u-v)^2$, with $Q_{ii}=Q_{jj}=0$, on the algebra $R_3(Q)$ of [[def-quiver-hecke-klr-algebra-for-a-symmetrizable-cartan-datum]].

[F1] Relations (4) and (7) of [[def-quiver-hecke-klr-algebra-for-a-symmetrizable-cartan-datum]]: $\tau_a^2e(\nu)=Q_{\nu_a\nu_{a+1}}(x_a,x_{a+1})e(\nu)$, and the braid relation with correction $\bigl(Q_{\nu_a\nu_{a+1}}(x_a,x_{a+1})-Q_{\nu_a\nu_{a+1}}(x_{a+2},x_{a+1})\bigr)/(x_{a+2}-x_a)$ when $\nu_a=\nu_{a+2}$.

[F2] Grading ([[def-klr-grading-and-diagrammatic-composition]]): $\deg x_a=2d_{\nu_a}$, $\deg\tau_a=-b_{\nu_a\nu_{a+1}}$, and every defining relation is homogeneous.

[F3] PBW basis ([[thm-klr-pbw-basis-theorem]]): in each block $e(\nu)R_3(Q)e(\nu')$ the monomials $\tau_wx_1^{a_1}x_2^{a_2}x_3^{a_3}e(\nu')$ with $w\nu'=\nu$ and $a_1,a_2,a_3\ge0$ form a $k$-basis, so a computation of an element on the spanning monomials determines it.

## Verification

**Proof technique:** direct computation from the defining relations, then degree bookkeeping.

1.1 (a) Specialize relation (4) of [F1]. On an equal-colour pair $\nu_r=\nu_{r+1}$ one has $Q_{\nu_r\nu_{r+1}}=Q_{ii}=0$ or $Q_{jj}=0$, so $\tau_r^2e(\nu)=0$. On $(i,j)$ one has $Q_{ij}(x_r,x_{r+1})=-(x_r-x_{r+1})^2$, and on $(j,i)$ the symmetric formula $Q_{ji}(u,v)=-(u-v)^2$ gives the same expression, so $\tau_r^2e(\nu)=-(x_r-x_{r+1})^2e(\nu)$ in both orientations. [given, F1, algebra]

1.2 (b) On $\nu=(i,j,i)$ the outer colours $i,i$ agree and the middle colour differs, so relation (7) of [F1] applies with $a=1$: the left side is $\tau_2\tau_1\tau_2e(\nu)-\tau_1\tau_2\tau_1e(\nu)$ in the sign normalization fixed there (relation (6) of the definition, in which $\tau_1x_1-x_2\tau_1=e(\nu)$ on the equal-colour component), and the right side is $\bigl(Q_{ij}(x_1,x_2)-Q_{ij}(x_3,x_2)\bigr)/(x_3-x_1)$. Substituting $Q_{ij}(u,v)=-(u-v)^2$ gives $\bigl((x_3-x_2)^2-(x_1-x_2)^2\bigr)/(x_3-x_1)=(x_3-x_1)(x_3+x_1-2x_2)/(x_3-x_1)=x_1+x_3-2x_2$, a polynomial. The element $(x_1+x_3-2x_2)e(\nu)$ is nonzero by [F3], since its distinct dot monomials have coefficients $1,1,-2$, and the first two remain nonzero in every characteristic. [given, F1, F3, algebra]

1.3 (c) In the word $\tau_2\tau_1\tau_2e(\nu)$ the factors are applied right to left: the rightmost $\tau_2$ acts on the pair of positions $(2,3)$ of $\nu=(i,j,i)$, which carries colours $(j,i)$, so its degree is $-b_{ji}=2$; the middle $\tau_1$ then acts on the pair of positions $(1,2)$ of the permuted sequence $(i,i,j)$, which carries equal colours $(i,i)$, so its degree is $-b_{ii}=-2$; the leftmost $\tau_2$ acts on the pair of positions $(2,3)$ of $(i,i,j)$, which carries colours $(i,j)$, so its degree is $-b_{ij}=2$. The composite has degree $2+(-2)+2=2$. [given, F2, algebra]

2.1 The right-hand side $x_1+x_3-2x_2$ is a sum of degree-$2$ monomials, so the correction in (b) is homogeneous of degree $2=-2b_{ij}-2d_i$ (with $b_{ij}=-2$, $d_i=1$); on a simple edge $a_{ij}=-1$ with $d_i=d_j=1$ the analogous correction is the degree-$0$ constant $Q_{ij}(x_1,x_2)-Q_{ij}(x_3,x_2)$ divided by $x_3-x_1$, so the doubled Cartan entry is exactly what raises the degree of the correction by $2$. [step 1.2, step 1.3, F1, F2, algebra] ∎
