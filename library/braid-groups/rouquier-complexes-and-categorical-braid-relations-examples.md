---
page: rouquier-complexes-and-categorical-braid-relations-examples
title: "Rouquier Complexes and Categorical Braid Relations — Examples"
status: draft
requires: [rouquier-complexes-and-categorical-braid-relations]
items: []
examples: [ex-the-rouquier-complex-of-a-positive-three-strand-braid,
           ex-the-three-term-rouquier-braid-equivalence-in-type-a-two,
           ex-normalized-comparison-maps-around-a-relation-loop,
           cex-isomorphic-hecke-classes-do-not-by-themselves-prove-homotopy-equivalent-complexes]
---

The four entries make the categorical braid relations concrete in the smallest
nontrivial cases. For the positive word $\sigma_1\sigma_2\in B_3$ the Rouquier
complex $F(\sigma_1\sigma_2)$ is displayed as the three-term complex
$[B_1\otimes_RB_2\to B_1(1)\oplus B_2(1)\to R(2)]$ with its two differentials
written out, and the identity $d^1d^0=0$ is checked on every simple tensor.
The four left-basis tensors of $B_1\otimes_RB_2$ are $u_1\otimes u_2$,
$u_1\otimes(1\otimes\alpha_2)$, $(1\otimes\alpha_1)\otimes u_2$ and
$(1\otimes\alpha_1)\otimes(1\otimes\alpha_2)$, where $u_i=1\otimes1$;
their internal degrees are $-2,0,0,2$, and the cohomological and internal
degrees of the generators of every term are recorded.

The type $A_2$ example writes the two eight-term complexes $F_sF_tF_s$ and
$F_tF_sF_t$ explicitly, uses the decompositions
$B_sB_tB_s\cong B_{sts}\oplus B_s$ and $B_tB_sB_t\cong B_{sts}\oplus B_t$
together with $B_sB_s\cong B_s(1)\oplus B_s(-1)$ and the analogous splitting
for $B_t$, exhibits the contractible summands with their contracting
homotopies, and identifies the common surviving complex built from $B_{sts}$,
so the three-term braid equivalence $F_sF_tF_s\simeq F_tF_sF_t$ is realised by
explicit chain maps with no shift.

The relation-loop example takes the braid
$\sigma_1\sigma_2\sigma_1=\sigma_2\sigma_1\sigma_2\in B_3$ and three signed
words for it, including one obtained by appending a cancelling pair, and
verifies that the normalized comparison maps compose around the resulting loop:
the displayed derived composites satisfy $c_{u,w}c_{t,u}=c_{t,w}$ and
$c_{w,t}c_{t,w}=1_{M_t}$, where $M_t$ is the tensor graph model for $t$.
Their unique normalized degree-zero lifts give
$\gamma_{u,w}\circ\gamma_{t,u}=\gamma_{t,w}$ and the inverse composite
$\gamma_{w,t}\circ\gamma_{t,w}=1_{F(t)}$.

The counterexample closes the page by separating decategorification from
homotopy type. The zero-differential complex $Z_i=[B_i\xrightarrow{0}R(1)]$
has the same alternating class as the generator complex $F_i$, namely
$[B_i]-[R(1)]$, but $H^0(Z_i)=B_i$ is free of rank two as a left
$R$-module while $H^0(F_i)=R_{s_i}(-1)$ is free of rank one, and
$H^1(Z_i)=R(1)\ne0$ while $H^1(F_i)=0$; hence the two complexes are not
homotopy equivalent, and equal classes in the split Grothendieck ring do not by
themselves prove that two complexes are homotopy equivalent.
