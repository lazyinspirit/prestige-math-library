---
page: balanced-triples-and-global-crystal-bases-examples
title: "Balanced Triples and Global Crystal Bases — Examples"
status: draft
requires: [balanced-triples-and-global-crystal-bases]
items: []
examples: [       cex-bar-invariance-and-mod-q-congruence-without-balancedness,
       ex-canonical-global-basis-normalization-in-symmetric-type,
       ex-lower-and-upper-global-bases-in-a-small-highest-weight-module,
       ex-balanced-triple-for-the-two-dimensional-quantum-sl-two-module]
---

**Objective.** This companion page works the globalization machinery of
[[balanced-triples-and-global-crystal-bases]] on the smallest concrete
instances and on the exact boundaries of its hypotheses. Every item is a
dependency leaf: nothing outside this page depends on it, and every
computation is a finite Laurent-polynomial or crystal-string calculation.

## What the examples show

- [[ex-canonical-global-basis-normalization-in-symmetric-type]] matches
  four normalizations that are easy to conflate: in rank one the lower
  global vectors are the divided powers $F^{(n)}$ with Kashiwara norm
  $1/[n]_{q^2}!$, transported Lusztig norm
  $\prod_r(1-q^{2r})^{-1}$, ordinary-power factor $[n]_q!$ and Drinfeld
  generator scalar $1/(q-q^{-1})$; in type $A_2$ degree
  $\alpha_1+\alpha_2$ it exhibits the exact lower vectors $F_1F_2,F_2F_1$
  with Gram matrix $\begin{pmatrix}1&q\\q&1\end{pmatrix}$ and its genuine
  non-unimodular inverse-Gram duals.
- [[ex-lower-and-upper-global-bases-in-a-small-highest-weight-module]]
  computes both global bases of the rank-one module $V(m\omega)$ from the
  diagonal norms $d_{m,n}=q^{n(m-n)}\binom{m}{n}_q$. For $m=2$ the upper
  lattice $M_A^\vee=Aw_0\oplus A(1+q^2)^{-1}w_1\oplus Aw_2$ properly
  contains the lower lattice, with middle quotient $A/(1+q^2)$; the two
  lattices share one $A_0$ crystal lattice and the adjoint bar is the one
  fixing the upper basis.

## What the counterexamples show

- [[cex-bar-invariance-and-mod-q-congruence-without-balancedness]] gives
  two witnesses that bar invariance plus a nonzero crystal residue do not
  suffice: the mixed lattice $L'=A_0(v+w)\oplus qA_0v$ in the
  two-dimensional $\mathfrak{sl}_2$-module has balanced part
  $\mathbb Z(v+w)$ and misses the residue class of $qv$, and in the trivial
  module the valid crystal lattice $q^{-1}A_0v$ has two distinct bar-fixed
  integral lifts $(q+q^{-1})v$ and $(q+q^{-1})v+v$ of the same class. The
  integral balanced map, not bar invariance alone, is what the uniqueness
  theorem uses.
- [[ex-balanced-triple-for-the-two-dimensional-quantum-sl-two-module]]
  performs the positive computation on the same module: the balanced
  triple $V_A=Av\oplus Aw$ with its shifted chart residues, the exact
  quasi-$R$ $\Theta=1+(q-q^{-1})E\otimes F$, the tensor bar values, the
  corrected tensor global basis $vv,vw,wv+qvw,ww$, and the contrast with
  the nonbalanced mixed lattice $L'$ whose bar-fixed vector $v+w$ cannot
  be globalized onto the class of $qv$.

Together the four items calibrate the main page: they show the exact
convention dictionary, the genuine difference between the two integral
lattices, and the two ways in which a naive lattice or a naive lift fails,
while the balanced globalization theorem retains its full strength.
