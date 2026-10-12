---
id: cex-dj-bridge-untwisted-conjugation-changes-the-module
kind: counterexample
title: "Untwisted conjugation changes the module"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 9
deps: [thm-dj-bridge-ordinary-specht-is-the-signed-conjugate-murphy-cell,
       cor-dj-bridge-specialization-and-composition-multiplicity-dictionary,
       thm-dj-bridge-murphy-cell-is-the-same-shape-specht-dual]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
verification:
  precheck: pass
sources:
  references:
    - title: "G. D. James, The Representation Theory of the Symmetric Groups, Lecture Notes in Mathematics 682, Springer 1978; author-hosted scan"
      url: "https://www-users.cse.umn.edu/~webb/oldteaching/Year2010-11/the-representation-theory-of-the-symmetric-groups-SLN.pdf"
      locator: "Ordinary polytabloids and the sign representation; the rank-three witness below compares the sign Murphy cell of (1,1,1) with the trivial polytabloid module of (3) at q=1."
    - title: "Andrew Mathas, Iwahori-Hecke algebras and Schur algebras of the symmetric group, author-hosted prepublication manuscript, 79 PDF pages"
      url: "https://web.math.ucsb.edu/~bigelow/books/mathas.pdf"
      locator: "Chapter 3, printed p. 25 (PDF p. 34): the Warning after Corollary 3.19 recording that the ordinary Specht module, not the conjugate cell, is the untwisted counterpart; the computation below is the elementary rank-three check."
---

## Statement refuted

**Refuted claim:** the same-shape duality
$C_{\mathrm M}(\lambda)\cong P(\lambda)^\circ$ of
[[thm-dj-bridge-murphy-cell-is-the-same-shape-specht-dual]] may be applied
without a sign twist, i.e. one may conclude
$C_{\mathrm M}(\lambda')\cong P(\lambda)^\circ$ directly.

This is false. Over $\mathbb Q$ at $q=1$ and $n=3$ the Murphy cell module
$C_{\mathrm M}((1^3))$ is the sign module, in which $T_i$ acts by $-1$, while
the ordinary polytabloid module $P((3))$ and its contragredient dual are
trivial, in which $T_i$ acts by $+1$. Hence
$C_{\mathrm M}(\lambda')\cong P(\lambda)^\circ$ without $\theta$ fails in
general. The correct bridge is
$C_{\mathrm M}(\lambda')\cong P(\lambda)^\theta$ of
[[thm-dj-bridge-ordinary-specht-is-the-signed-conjugate-murphy-cell]];
combining it with same-shape duality gives
$P(\lambda')\cong P(\lambda)^{\circ,\theta}$, which is a different formula.
No choice principle is used.

## Facts & Assumptions

**Given:** The field $\mathbb Q$, the specialization $q=1$ of the type-$A$
Hecke algebra $H$, the polytabloid module $P((3))=z_{(3)}H$ with its DJ form,
the Murphy cell module $C_{\mathrm M}((1^3))$ with its form, and the comparison
theorem
[[thm-dj-bridge-ordinary-specht-is-the-signed-conjugate-murphy-cell]] together
with its corollary
[[cor-dj-bridge-specialization-and-composition-multiplicity-dictionary]].

[F1] At $q=1$ the specialization of $H$ is the group algebra $\mathbb Q[S_3]$
and the sign automorphism $\theta$ is the pullback along
$w\mapsto\operatorname{sgn}(w)w$; the partitions $(3)$ and $(1^3)$ are
conjugate ([[cor-dj-bridge-specialization-and-composition-multiplicity-dictionary]]).

[F2] The comparison theorem gives
$P((3))\cong C_{\mathrm M}((1^3))^\theta$ with the exact unit
$u_{(3)}=q^{\ell(w_0(S_{(1^3)}))-\ell(w_{(3)})}$
([[thm-dj-bridge-ordinary-specht-is-the-signed-conjugate-murphy-cell]]).

[F3] $P((3))=x_{(3)}H$ is spanned by $x_{(3)}=\sum_{w\in S_3}T_w$, and
$x_{(3)}T_i=q\,x_{(3)}$ for $i=1,2$; the contragredient dual of a
one-dimensional module with trivial action is trivial
([[thm-dj-bridge-ordinary-specht-is-the-signed-conjugate-murphy-cell]]).

[F4] In $C_{\mathrm M}((1^3))$ one has $f^{(1^3)}=1$, the higher ideal
$I^{\rhd(1^3)}$ contains the elements $1+T_i$, and the cell form has value
$G_{(1^3)}(m_0,m_0)=1$
([[cor-dj-bridge-specialization-and-composition-multiplicity-dictionary]],
[[thm-dj-bridge-ordinary-specht-is-the-signed-conjugate-murphy-cell]]).



## Counterexample

**Proof technique:** direct.

1.1 **The ordinary module is trivial.** At $q=1$ one has $x_{(3)}=\sum_{w\in S_3}T_w$ and $x_{(3)}T_i=\sum_wT_wT_i=\sum_wT_{ws_i}=x_{(3)}$ for each generator, because right multiplication by $s_i$ permutes the group and every $T_{ws_i}$ is again one of the summed basis elements; with the scalar carried along this reads $x_{(3)}T_i=q\,x_{(3)}=x_{(3)}$ at $q=1$, and $P((3))=x_{(3)}H=\mathbb Q\,x_{(3)}$ is one-dimensional. Its dual is therefore also one-dimensional with trivial action. [F3, algebra]

1.2 **The cell is sign.** At $q=1$ the element $1+T_i$ lies in the higher ideal $I^{\rhd(1^3)}$, because $1+T_1$ and $1+T_2$ are the Murphy elements $x_{(2,1)}$ of shape $(2,1)\rhd(1^3)$ and $I^{\rhd(1^3)}$ is the span of all Murphy elements of shapes $\rhd(1^3)$; hence in the one-dimensional cell $m_0(1+T_i)=0$, that is, $m_0T_i=-m_0$. The cell form value is $1$, and the module is the sign module. [F4, algebra]

2.1 **No untwisted isomorphism.** A right $H$-module isomorphism $f\colon C_{\mathrm M}((1^3))\to P((3))^\circ$ would satisfy $f(mh)=f(m)h$ for every $h$; taking $h=T_i$ and a nonzero $m$ gives $f(-m)=f(m)$ because $C_{\mathrm M}((1^3))$ has $T_i$ acting by $-1$ and $P((3))^\circ$ has $T_i$ acting by $+1$, while $f(-m)=-f(m)$ in characteristic zero, so $-f(m)=f(m)$ forces $f(m)=0$, contradicting injectivity over $\mathbb Q$. Therefore no such isomorphism exists and the untwisted claim is false. The twisted statement is consistent: on $C_{\mathrm M}((1^3))^\theta$ the generator $T_i$ acts by the ordinary action of $\theta(T_i)=-T_i$, that is by $+1$, matching $P((3))$, and the unit is $u_{(3)}=1$ by [F2]. [step 1.1, step 1.2, F1, F2, algebra] ∎

