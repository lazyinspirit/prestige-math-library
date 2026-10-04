---
id: ex-the-krammer-fraction-field-generator-matrices-for-b-three
kind: example
title: The Krammer fraction-field generator matrices for B three
status: published
origin: pipeline
deps: [def-lawrence-krammer-bigelow-representation, thm-the-integral-lkb-module-is-free-of-rank-n-choose-two]
justified_by: []
aliases: []
dependency_level: 11
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Krammer, Braid groups are linear, Ann. of Math. 155 (2002) 131-156"
      url: "https://arxiv.org/pdf/math/0405198"
      locator: "Section 3, printed pp. 139-142: the seven-case formula for sigma_k x_{ij}, the free module with basis x_{ij}, and Lemma 3.2"
    - title: "Bigelow, The Lawrence-Krammer representation, arXiv:math/0204057v1"
      url: "https://arxiv.org/pdf/math/0204057"
      locator: "Section 4.2, printed pp. 12-13: the six-case Krammer-generation formula with the parameter translation, and the warning that the matrix model is only fraction-field isomorphic to H_2(C-tilde) for n>=3"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
---
## Example

For $n=3$ Krammer's fraction-field model of the
[[def-lawrence-krammer-bigelow-representation]] is a free module with basis
$x_{12},x_{13},x_{23}$ over $\Lambda=\mathbb Z[q^{\pm1},t^{\pm1}]$, on which
the generators act by the seven-case formula
$$\sigma_k x_{k,k+1}=tq^2x_{k,k+1};\qquad \sigma_k x_{ik}=(1-q)x_{ik}+q x_{i,k+1}\ (i<k);$$
$$\sigma_k x_{i,k+1}=x_{ik}+tq^{k-i+1}(q-1)x_{k,k+1}\ (i<k);$$
$$\sigma_k x_{kj}=tq(q-1)x_{k,k+1}+q x_{k+1,j}\ (k+1<j);$$
$$\sigma_k x_{k+1,j}=x_{kj}+(1-q)x_{k+1,j}\ (k+1<j);$$
$$\sigma_k x_{ij}=x_{ij}\ (i<j<k\ \text{or}\ k+1<i<j);\qquad \sigma_k x_{ij}=x_{ij}+tq^{k-i}(q-1)^2x_{k,k+1}\ (i<k<k+1<j).$$

This example records the two resulting $3\times3$ matrices over $\Lambda$,
checks the braid relation by direct multiplication, and checks the full-twist
value $q^{2n}t^2=q^6t^2$ at $n=3$. The model is a fraction-field model: by
[[thm-the-integral-lkb-module-is-free-of-rank-n-choose-two]] it is not
integrally identified with the closed-surface basis $\{v_{i,j}\}$ when
$n\ge3$, and the parameter translation between Krammer's and Bigelow's
conventions is $t_{\mathrm{Krammer}}=-t_{\mathrm{Bigelow}}$.

## Verification

**Given:** the seven-case formula displayed above with $n=3$ (so
$k\in\{1,2\}$), the basis ordered as $(x_{12},x_{13},x_{23})$, and matrices
acting on column vectors, the columns being the images of the basis vectors.

1.1 The columns for $\sigma_1$. Every case with $i<k$ is vacuous for $k=1$. The case $\sigma_1x_{1,2}=tq^2x_{1,2}$ gives the first column $(tq^2,0,0)$; the case $k+1<j$ applied to $(k,j)=(1,3)$ gives $\sigma_1x_{1,3}=tq(q-1)x_{1,2}+qx_{2,3}$; and the case for $x_{k+1,j}$ with $(k+1,j)=(2,3)$ gives $\sigma_1x_{2,3}=x_{1,3}+(1-q)x_{2,3}$. Hence $$M_1=\begin{pmatrix}tq^2&tq(q-1)&0\\0&0&1\\0&q&1-q\end{pmatrix}.$$ [given, algebra]

1.2 The columns for $\sigma_2$. For $k=2$ the case $i<k$ with $i=1$ gives $\sigma_2x_{1,2}=(1-q)x_{1,2}+qx_{1,3}$; the case $x_{i,k+1}$ with $i=1$ gives $\sigma_2x_{1,3}=x_{1,2}+tq^2(q-1)x_{2,3}$; and the case $x_{k,k+1}$ gives $\sigma_2x_{2,3}=tq^2x_{2,3}$. Hence $$M_2=\begin{pmatrix}1-q&1&0\\q&0&0\\0&tq^2(q-1)&tq^2\end{pmatrix}.$$ [given, algebra]

2.1 The braid relation by direct multiplication. Multiplying the two matrices gives $$M_1M_2=\begin{pmatrix}0&tq^2&0\\0&tq^2(q-1)&tq^2\\ q^2&-q^2t(q-1)^2&-q^2t(q-1)\end{pmatrix}.$$ Multiplying this product on the right by $M_1$ and on the left by $M_2$ gives, by expansion of the nine entries of each of the two products, $$M_1M_2M_1=M_2M_1M_2= \begin{pmatrix}0&0&tq^2\\0&tq^3&0\\tq^4&0&0\end{pmatrix}=:\Delta .$$ Each entry of the two triple products is a sum of at most three Laurent monomials; collecting the terms in each of the nine positions gives the displayed common value, so the braid relation $\rho(\sigma_1)\rho(\sigma_2)\rho(\sigma_1) =\rho(\sigma_2)\rho(\sigma_1)\rho(\sigma_2)$ holds. [step 1.1, step 1.2, algebra]

3.1 The full twist. The matrix $\Delta$ has a single nonzero entry in each row and column, so squaring it multiplies the diagonal entries $tq^2\cdot tq^4=t^2q^6$, $(tq^3)^2=t^2q^6$, $tq^4\cdot tq^2=t^2q^6$ and kills all off-diagonal entries: $$\bigl(\rho(\sigma_1)\rho(\sigma_2)\rho(\sigma_1)\bigr)^2 =\Delta^2=q^6t^2I_3,$$ which is the value $q^{2n}t^2$ of the full-twist scalar at $n=3$. The columns of $\Delta$ are exactly the values $\Delta x_{2,3}=tq^2x_{1,2}$, $\Delta x_{1,3}=tq^3x_{1,3}$, $\Delta x_{1,2}=tq^4x_{2,3}$ predicted by the half-twist identity of the source Section 3, $\Delta x_{n+1-j,n+1-i}=tq^{i+j-1}x_{ij}$. [step 2.1, algebra]

4.1 Invertibility and conventions. Since $\det M_1=\det M_2=-q^3t$ is a unit of $\Lambda$, both matrices lie in $\mathrm{GL}_3(\Lambda)$. The matrices above are those of Krammer's fraction-field model with basis $x_{12},x_{13},x_{23}$, not matrices in Bigelow's integral closed-surface basis; the two models are isomorphic as $B_n$-representations only after fraction-field extension for $n\ge3$, and the translation between the parameters is $t_{\mathrm{Krammer}}=-t_{\mathrm{Bigelow}}$, so the displayed formulas record Krammer's normalization and not Bigelow's. [step 2.1, step 3.1, algebra] ∎
