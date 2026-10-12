---
id: cor-dj-bridge-specialization-and-composition-multiplicity-dictionary
kind: corollary
title: "Polytabloid specialization and the exact signed multiplicity dictionary"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 8
deps: [thm-dj-bridge-ordinary-specht-is-the-signed-conjugate-murphy-cell,
       def-integral-specht-lattice-and-base-change, lem-conjugate-specht-sign-duality-over-fields,
       prop-group-algebra-and-finite-field-specializations-of-the-generic-hecke-algebra,
       lem-dj-bridge-sign-automorphism-and-star-dual,
       lem-dj-bridge-murphy-cellular-basis-and-cell-form]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "G. D. James, The Representation Theory of the Symmetric Groups, Lecture Notes in Mathematics 682, Springer 1978; author-hosted scan"
      url: "https://www-users.cse.umn.edu/~webb/oldteaching/Year2010-11/the-representation-theory-of-the-symmetric-groups-SLN.pdf"
      locator: "Ordinary polytabloid Specht modules, the standard basis and the conjugate-sign duality; the q=1 clause below is the specialization of the Hecke comparison at this classical point."
    - title: "Alexander Kleshchev, Representation theory of symmetric groups and related Hecke algebras, arXiv:0909.4844v1 (survey), 66 PDF pages"
      url: "https://arxiv.org/pdf/0909.4844"
      locator: "Section 5.3, Remark 5.5 (PDF p. 24): the conjugate-sign simple dictionary, used to orient the label comparison; no multiplicity statement is imported from it."
    - title: "Andrew Mathas, Iwahori-Hecke algebras and Schur algebras of the symmetric group, author-hosted prepublication manuscript, 79 PDF pages"
      url: "https://web.math.ucsb.edu/~bigelow/books/mathas.pdf"
      locator: "Chapter 3, printed pp. 18-27 (PDF pp. 27-36): the row, Specht and Murphy cell modules with their forms, and the sign-twist normalization of the comparison."
---

## Statement

Assume the isomorphism $\Phi_\lambda$ and the exact unit identity of
[[thm-dj-bridge-ordinary-specht-is-the-signed-conjugate-murphy-cell]]. Then:

1. For every field $F$ and $q=1$, the module $P(\lambda)$ specializes to the
   ordinary integral-polytabloid Specht module
   $F\otimes_{\mathbb Z}S^\lambda_{\mathbb Z}$ of
   [[def-integral-specht-lattice-and-base-change]]: the basis
   $\{e_t=z_\lambda T_{d_{\lambda'}(t)}\}$ specializes to the standard
   polytabloid basis and the DJ form to the standard tabloid form. The sign
   automorphism $\theta$ becomes the pullback along the sign twist
   $w\mapsto\operatorname{sgn}(w)w$ of $F[S_n]$, and this specialization is
   compatible with the conjugate-sign dictionary of
   [[lem-conjugate-specht-sign-duality-over-fields]].

2. For a field $F$, a unit $q\in F^\times$ and partitions $\mu,\lambda\vdash n$
   with $D^{\mu'}_{\mathrm M}\ne0$ one has
   $[P(\lambda):D^{\mu}_{\mathrm{DJ}}]=[C_{\mathrm M}(\lambda'):D^{\mu'}_{\mathrm M}]$,
   and the simultaneous sign-automorphism pullback is the same $\theta$ on both
   sides: $(D^{\mu}_{\mathrm{DJ}})^\theta\cong D^{\mu'}_{\mathrm M}$.

3. Suppose a Schur-algebra corner is already proved to send the Weyl module
   $W(\lambda)$ to $C_{\mathrm M}(\lambda)$ and its head $L(\lambda)$ to
   $D^{\lambda}_{\mathrm M}$. Then that corner gives
   $F(W(\lambda'))\cong P(\lambda)^\theta$ and
   $F(L(\lambda'))\cong(D^{\lambda}_{\mathrm{DJ}})^\theta$, including the zero
   case; this is the $\theta$-twisted conjugate dictionary, never the untwisted
   conjugate-dual identity. No Schur-algebra theorem and no source-20
   convention is a prerequisite of this conditional dictionary.

No choice principle is used.

## Facts & Assumptions

**Given:** A field $F$ or a commutative ring $R$ with a unit $q$, a partition
$\lambda\vdash n$, the module $P(\lambda)=z_\lambda H$ with its basis
$\{e_t\}$, its DJ form and its head $D^{\lambda}_{\mathrm{DJ}}$, the cell
module $C_{\mathrm M}(\lambda')$ with basis $\{m_t\}$ and head
$D^{\lambda'}_{\mathrm M}$, the sign automorphism $\theta$, and the
isomorphism and unit identity of
[[thm-dj-bridge-ordinary-specht-is-the-signed-conjugate-murphy-cell]].

[F1] $\Phi_\lambda\colon P(\lambda)\to C_{\mathrm M}(\lambda')^\theta$ is an
$H$-module isomorphism with
$G_{\lambda'}^\theta(\Phi_\lambda x,\Phi_\lambda y)=u_\lambda(q)\beta_{P(\lambda)}(x,y)$
and $u_\lambda(q)=q^{\ell(w_0(S_{\lambda'}))-\ell(w_\lambda)}$
([[thm-dj-bridge-ordinary-specht-is-the-signed-conjugate-murphy-cell]]).

[F2] $\theta$ is the involutive sign automorphism; the twist $M^\theta$ has
action $m\cdot h=m\theta(h)$, is exact, preserves composition multiplicities
and maps simple modules to simple modules; at $q=1$ over a field, $\theta$ is
the pullback along $w\mapsto\operatorname{sgn}(w)w$
([[lem-dj-bridge-sign-automorphism-and-star-dual]]).

[F3] $S^\lambda_{\mathbb Z}$ has the standard polytabloids as a $\mathbb Z$-basis
and is base-change compatible: for every commutative ring $R$ the canonical map
$R\otimes_{\mathbb Z}S^\lambda_{\mathbb Z}\to R\otimes_{\mathbb Z}M^\lambda_{\mathbb Z}$
is injective onto the span of the polytabloids in the tabloid module, and the
standard polytabloids form an $R$-basis of the image
([[def-integral-specht-lattice-and-base-change]]).

[F4] The conjugate-sign dictionary
$S^\lambda_F\otimes\operatorname{sgn}\cong(S^{\lambda'}_F)^*$ holds over
every field, with the explicit sign-twisted tabloid homomorphism
([[lem-conjugate-specht-sign-duality-over-fields]]).

[F5] At $q=1$ the specialization is an isomorphism
$\mathbb C\otimes_{A,v\mapsto1}H_v(n)\cong\mathbb C[S_n]$ carrying $T_w$ to $w$,
compatible with the standard bases
([[prop-group-algebra-and-finite-field-specializations-of-the-generic-hecke-algebra]]).

[F6] The Murphy cell law and the cell form are defined by formulas with
coefficients in $\mathbb Z[q^{\pm1}]$ and commute with base change
([[lem-dj-bridge-murphy-cellular-basis-and-cell-form]]).



## Proof

**Proof technique:** direct.

1.1 **The specialization at $q=1$.** At $q=1$ the algebra $H$ is the group algebra $F[S_n]$ by [F5], with $T_w=w$. The assignment $b_r=x_\lambda T_{d_\lambda(r)}\mapsto\{t^\lambda\cdot d_\lambda(r)\}$ identifies the distinguished basis of $M(\lambda)$ with the tabloid basis of $M^\lambda_F$: the row group $S_\lambda$ acts on $t^\lambda$ by right multiplication with row-equivalent tabloids, and every tabloid is hit because $D_\lambda$ is a transversal. Under this identification $\beta$ becomes the standard orthonormal tabloid form, since every diagonal weight $q^{\ell(d_\lambda(r))}$ becomes $1$. Moreover $z_\lambda=x_\lambda T_{w_\lambda}y_{\lambda'}$ maps to the polytabloid of the column-filled tableau: $x_\lambda$ symmetrizes the rows, $w_\lambda$ carries $t^\lambda$ to $t_\lambda$, and $y_{\lambda'}=\sum_{u\in S_{\lambda'}}(-1)^{\ell(u)}T_u$ is the column antisymmetrizer of $t_\lambda$ at $q=1$ because $S_{\lambda'}$ is the column group of $\lambda$. Hence $e_t=z_\lambda T_{d_{\lambda'}(t)}$ maps to the polytabloid of the standard tableau obtained from $t_\lambda$ by the same permutation, and the family of these polytabloids is the standard basis of the image of $F\otimes_{\mathbb Z}S^\lambda_{\mathbb Z}$ in $F\otimes_{\mathbb Z}M^\lambda_{\mathbb Z}$ by [F3]. This gives the module and form part of clause 1 over every field; over $\mathbb Z$ the same computation gives the integral statement. [F3, F5, F6, algebra]

2.1 **The sign twist and the conjugate dictionary.** By [F2], at $q=1$ the automorphism $\theta$ is the pullback along $w\mapsto\operatorname{sgn}(w)w$, so the twisted module $P(\lambda)^\theta$ is $P(\lambda)\otimes\operatorname{sgn}$; the isomorphism of [F1] therefore identifies $P(\lambda)\otimes\operatorname{sgn}$ with the $\theta$-twist of $C_{\mathrm M}(\lambda')$. The same-shape duality and the sign lemma identify the conjugate dual module $(S^{\lambda'}_F)^*$ with $S^\lambda_F\otimes\operatorname{sgn}$ by [F4], with the explicit tabloid map written there; since our $\theta$ is the same sign automorphism on $F[S_n]$, the two constructions agree, which is the compatibility asserted in clause 1. [step 1.1, F1, F2, F4, algebra]

2.2 **Multiplicities.** Let $q$ be a unit of a field and $\mu\vdash n$ with $D^{\mu'}_{\mathrm M}\ne0$. By [F1] the twist $\Phi_\lambda$ is an isomorphism $P(\lambda)\to C_{\mathrm M}(\lambda')^\theta$, and by [F2] twisting is exact and multiplies no composition multiplicity: for every simple right $H$-module $S$ one has $[P(\lambda):S]=[C_{\mathrm M}(\lambda')^\theta:S]=[C_{\mathrm M}(\lambda'):S^\theta]$. Applying the head identity of [F1] with $\lambda$ replaced by $\mu$ gives $D^{\mu}_{\mathrm{DJ}}\cong(D^{\mu'}_{\mathrm M})^\theta$, and applying $\theta$ gives $(D^{\mu}_{\mathrm{DJ}})^\theta\cong D^{\mu'}_{\mathrm M}$. Substituting $S=D^{\mu}_{\mathrm{DJ}}$ yields $[P(\lambda):D^{\mu}_{\mathrm{DJ}}]=[C_{\mathrm M}(\lambda'):D^{\mu'}_{\mathrm M}]$, which is clause 2 together with the displayed identification of the simples. [step 1.1, F1, F2, algebra]

3.1 **The conditional Schur dictionary and conclusion.** If a corner is already proved to send $W(\lambda)$ to $C_{\mathrm M}(\lambda)$ and $L(\lambda)$ to $D^{\lambda}_{\mathrm M}$, then applying it to $\lambda'$ gives $F(W(\lambda'))=C_{\mathrm M}(\lambda')$ and $F(L(\lambda'))=D^{\lambda'}_{\mathrm M}$. Tensoring the isomorphism of [F1] by $\theta$ gives $P(\lambda)^\theta\cong C_{\mathrm M}(\lambda')$, and the head computation of step 2.2 gives $(D^{\lambda}_{\mathrm{DJ}})^\theta\cong D^{\lambda'}_{\mathrm M}$; hence $F(W(\lambda'))\cong P(\lambda)^\theta$ and $F(L(\lambda'))\cong(D^{\lambda}_{\mathrm{DJ}})^\theta$, including the zero case. This is a conditional application of the $\theta$-twisted identity and uses no Schur-algebra theorem as a prerequisite; the untwisted statement $C_{\mathrm M}(\lambda')\cong P(\lambda)^\circ$ without $\theta$ is a different formula. All constructions are exact and sign-free at the level of the group algebra, so no choice principle is used. [step 1.1, step 2.2, F1, F2, algebra] ∎

