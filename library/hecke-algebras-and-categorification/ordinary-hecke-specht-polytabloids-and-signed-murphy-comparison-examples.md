---
page: ordinary-hecke-specht-polytabloids-and-signed-murphy-comparison-examples
title: "Ordinary Hecke Specht Polytabloids and Signed Murphy Comparison — Examples"
status: draft
requires: [ordinary-hecke-specht-polytabloids-and-signed-murphy-comparison]
items: []
examples: [cex-dj-bridge-untwisted-conjugation-changes-the-module,
           ex-dj-bridge-row-and-column-shapes-at-rank-three,
           ex-dj-bridge-singular-two-tableau-shape]
---

**Objective.** This companion works the comparison of
[[ordinary-hecke-specht-polytabloids-and-signed-murphy-comparison]] on the
smallest explicit instances. Every item is a dependency leaf, every
computation is finite and exact over $\mathbb Z[q^{\pm1}]$ before
specialization, and no choice principle is used.

## Examples and counterexample

- [[ex-dj-bridge-row-and-column-shapes-at-rank-three]] computes the four
  rank-one modules of the rank-three pair: $P((3))$ and
  $C_{\mathrm M}((3))$ act by $q$, $P((1^3))$ and $C_{\mathrm M}((1^3))$ act
  by $-1$, the self-form values are
  $1,q^{-3}p_3(q),p_3(q),1$ with $p_3(q)=(1+q)(1+q+q^2)$, and the comparison
  units are $u_{(3)}=1$ and $u_{(1^3)}=q^3$; at $q=1$ the values are
  $1,6,6,1$ and $\theta$ exchanges trivial and sign.
- [[ex-dj-bridge-singular-two-tableau-shape]] computes the full two-tableau
  comparison for $\lambda=(2,1)$: the row action matrices $R_1,R_2$, the
  polytabloid basis with unit embedding minor, the DJ Gram matrix
  $B=\left(\begin{smallmatrix}q+1&q^2\\q^2&q^3+q\end{smallmatrix}\right)$,
  the Murphy quotient with
  $G=\left(\begin{smallmatrix}q+1&-1\\-1&q^2+1\end{smallmatrix}\right)$, the
  isomorphism matrix $A$ with $AGA^{\mathsf T}=B$, and the perfect
  cross-pairing of determinant $-q^2$. At the singular parameter $q=-1$ the
  forms remain nonsingular, and at $q=1$ in characteristic two they reduce to
  $\left(\begin{smallmatrix}0&1\\1&0\end{smallmatrix}\right)$ with zero
  radical, separating a singular algebra parameter from degeneracy of this
  module form.
- [[cex-dj-bridge-untwisted-conjugation-changes-the-module]] refutes the
  untwisted conjugation: over $\mathbb Q$ at $q=1$ and $n=3$ the Murphy cell
  $C_{\mathrm M}((1^3))$ is the sign module while $P((3))$ and its dual are
  trivial, so $C_{\mathrm M}(\lambda')\cong P(\lambda)^\circ$ without
  $\theta$ fails; the correct formula is
  $C_{\mathrm M}(\lambda')\cong P(\lambda)^\theta$, and the conjugate
  chain reads $P(\lambda')\cong P(\lambda)^{\circ,\theta}$.
