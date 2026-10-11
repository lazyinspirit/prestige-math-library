---
id: lem-dj-bridge-permutation-form-invariance-and-restriction
kind: lemma
title: "The permutation form is H-contravariant and restricts to the DJ form"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 2
deps: [def-dj-bridge-row-column-permutation-modules-and-polytabloids, lem-dj-bridge-row-permutation-module-standard-action, def-generic-type-a-hecke-algebra]
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
    - title: "Andrew Mathas, Iwahori-Hecke algebras and Schur algebras of the symmetric group, author-hosted prepublication manuscript, 79 PDF pages"
      url: "https://web.math.ucsb.edu/~bigelow/books/mathas.pdf"
      locator: "Chapter 3, printed pp. 18-19 (PDF pp. 27-28): Lemma 3.2, Proposition 3.3 and Corollary 3.4, the row module M_lambda with its distinguished basis and the three-case action rule, in the normalization (T_i - q)(T_i + 1) = 0 used here."
    - title: "Steen Ryom-Hansen, On the denominators of Young's seminormal basis, arXiv:0904.4243v5, 28 PDF pages"
      url: "https://arxiv.org/pdf/0904.4243"
      locator: "Section 2, equations (5) and (6), PDF pp. 5-6: the standard basis x_st = T_{d(s)}^{-1} x_lambda T_{d(t)} and the action rules x_t T_i, in the same normalization; the contravariance of the row form is the classical self-adjointness of these rules."
---

## Statement

In the notation of
[[def-dj-bridge-row-column-permutation-modules-and-polytabloids]], for every
commutative ring $R$ and $q\in R^\times$, the permutation form $\beta$ on
$M(\lambda)$ is well defined, symmetric and $R$-bilinear, with
$\beta(x_\lambda T_d,x_\lambda T_e)=\delta_{d,e}q^{\ell(d)}$ on the
distinguished basis of
[[lem-dj-bridge-row-permutation-module-standard-action]]. It is
$H$-contravariant:
$$\beta(xh,y)=\beta(x,yh^*)\qquad(x,y\in M(\lambda),\ h\in H).$$
Its restriction $\beta_{P(\lambda)}$ to the polytabloid module $P(\lambda)$
satisfies the same identity for $x,y\in P(\lambda)$ and is called the DJ form.
Both $\beta$ and $\beta_{P(\lambda)}$ are compatible with every base change
$R\to R'$. No choice principle is used.

## Facts & Assumptions

**Given:** A commutative ring $R$, $q\in R^\times$, a partition
$\lambda\vdash n$, the Hecke algebra $H=H_{R,q}(S_n)$ with the standard basis
$\{T_w\}$, and the modules $M(\lambda)=x_\lambda H\supseteq P(\lambda)=z_\lambda H$
with the distinguished basis $\{x_d:=x_\lambda T_d:d\in D_\lambda\}$ of
[[def-dj-bridge-row-column-permutation-modules-and-polytabloids]].

[F1] $\{x_d:d\in D_\lambda\}$ is an $R$-basis of $M(\lambda)$, and for each
generator $T_i$ the action on it is: $x_dT_i=qx_d$ when $i,i+1$ lie in the same
row of the tableau $t^\lambda\cdot d$; otherwise $d^*:=ds_i\in D_\lambda$ and
$x_dT_i=x_{d^*}$ if $\ell(d^*)>\ell(d)$, while
$x_dT_i=qx_{d^*}+(q-1)x_d$ if $\ell(d^*)<\ell(d)$. Moreover
$P(\lambda)=z_\lambda H$ is a right ideal of $H$ contained in $M(\lambda)$
([[lem-dj-bridge-row-permutation-module-standard-action]]).

[F2] The star map is an $R$-algebra anti-automorphism of $H$ with $T_i^*=T_i$;
in particular it sends a product of generators to the reversed product
([[def-dj-bridge-row-column-permutation-modules-and-polytabloids]]).

[F3] $H$ is generated as an $R$-algebra by $T_1,\dots,T_{n-1}$, and all modules
are right modules
([[def-generic-type-a-hecke-algebra]],
[[def-dj-bridge-row-column-permutation-modules-and-polytabloids]]).

## Proof

**Proof technique:** direct.

1.1 **The form is well defined, symmetric and bilinear.** By [F1] the family $\{x_d:d\in D_\lambda\}$ is an $R$-basis of $M(\lambda)$, so there is exactly one $R$-bilinear form $\beta$ on $M(\lambda)$ whose Gram matrix in this basis is the diagonal matrix with entries $q^{\ell(d)}$, $d\in D_\lambda$; this form is symmetric because its Gram matrix is diagonal, and it is the permutation form of the statement. For $\lambda=\varnothing$ the basis is $\{1\}$ and $\beta(1,1)=q^0=1$. [F1, algebra]

1.2 **Orbits of one generator.** Fix $i$ and abbreviate $x_d:=x_\lambda T_d$. Partition $D_\lambda$ into the set $S$ of those $d$ for which $i,i+1$ lie in the same row of $t^\lambda\cdot d$, and the remaining set $D$; for $d\in D$ the element $d^*:=ds_i$ again lies in $D_\lambda$ and $(d^*)^*=d$, by the second and third cases of [F1] applied twice. Thus $D$ is partitioned into two-element orbits $\{u,v\}$ with $v=us_i$ and $\ell(v)=\ell(u)+1$, and the action on such an orbit is $x_uT_i=x_v$, $x_vT_i=qx_u+(q-1)x_v$, while $x_dT_i=qx_d$ for $d\in S$. In particular each $x_dT_i$ lies in the span of the orbit of $d$. [F1, algebra]

2.1 **Self-adjointness of the generators.** For all $x,y\in M(\lambda)$ one has $\beta(xT_i,y)=\beta(x,yT_i)$. Since the orbit spans are mutually orthogonal for $\beta$ and $\beta$ is diagonal in the basis, it suffices to check the four basis pairings inside a two-element orbit $\{u,v\}$ with $\ell(v)=\ell(u)+1$: $\beta(x_uT_i,x_u)=0=\beta(x_u,x_uT_i)$ and $\beta(x_vT_i,x_v)=0=\beta(x_v,x_vT_i)$ because $\beta(x_u,x_v)=0$ and $\beta(x_v,x_u)=0$; $\beta(x_uT_i,x_v)=\beta(x_v,x_v)=q^{\ell(v)}=q^{\ell(u)+1}=\beta(x_u,qx_u+(q-1)x_v)=\beta(x_u,x_vT_i)$; and $\beta(x_vT_i,x_u)=q\,\beta(x_u,x_u)=q^{\ell(u)+1}=\beta(x_v,x_v)=\beta(x_v,x_uT_i)$. For $d\in S$ one has $\beta(x_dT_i,x_e)=q\,\delta_{d,e}q^{\ell(d)}=\beta(x_d,x_eT_i)$ for every $e$, because $\beta$ is diagonal, $x_eT_i$ has no $x_d$ component unless $e=d$, and $x_dT_i=qx_d$; pairings between different orbits vanish on both sides. Hence the identity holds on basis vectors and extends by bilinearity to all $x,y\in M(\lambda)$. [step 1.1, step 1.2, F1, algebra]

3.1 **Words, all of $H$, and restriction.** For every word $h=T_{i_1}\cdots T_{i_r}$ of generators and all $x,y\in M(\lambda)$ one has $\beta(xh,y)=\beta(x,yh^*)$, where $h^*=T_{i_r}\cdots T_{i_1}$: this follows from step 2.1 by induction on $r$, moving one generator at a time from the first to the second argument. Since the generators span $H$ as an $R$-algebra by [F3], every $h\in H$ is a finite $R$-linear combination of such words, and by [F2] the element $h^*$ is obtained from the same expression by reversing each word; bilinearity therefore gives $\beta(xh,y)=\beta(x,yh^*)$ for all $h\in H$. Finally $P(\lambda)$ is a right ideal contained in $M(\lambda)$ by [F1], so the same identity holds for $x,y\in P(\lambda)$; its restriction to $P(\lambda)$ is the DJ form of the statement. [step 2.1, F1, F2, F3, algebra]

4.1 **Base change.** Under a ring map $R\to R'$ with $q\mapsto q'\in(R')^\times$, the distinguished basis of [F1] base-changes to the distinguished basis of $M_{R'}(\lambda)=x'_\lambda H_{R',q'}(S_n)$ and the weights $q^{\ell(d)}$ specialize, so $\beta$ base-changes to the permutation form over $R'$; the identity of step 3.1 is an identity of Laurent polynomials in $q$ between matrix entries in the basis, so it specializes termwise. The ideal $P(\lambda)=z_\lambda H$ base-changes to $z'_\lambda H_{R',q'}(S_n)$ because base change is right exact on right ideals generated by one element, and restriction commutes with the specialization, so $\beta_{P(\lambda)}$ base-changes as well. [step 3.1, F1, F2, algebra]

5.1 The permutation form is well defined, symmetric and bilinear by step 1.1, is $H$-contravariant by step 3.1, and its restriction to $P(\lambda)$ satisfies the same identity; both forms are base-change compatible by step 4.1. Only the distinguished basis, inversion counts and the algebra structure of $H$ are used; no choice principle is used. [step 1.1, step 3.1, step 4.1] ∎
