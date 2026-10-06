---
id: lem-finite-holonomy-acts-on-a-small-transverse-disk
kind: lemma
title: Finite holonomy acts on a small transverse disk
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps:
- def-holonomy-representation-and-holonomy-group-of-a-leaf
- def-local-transversal-to-a-regular-foliation
- def-germ-of-a-local-diffeomorphism-at-a-point
- lem-germs-of-local-diffeomorphisms-form-a-group
- def-embedded-submanifold-and-slice-chart
- def-smooth-manifold
- def-countable-choice-principle-for-foliation-pair
- thm-euclidean-inverse-function-theorem
- thm-chain-rule-for-total-derivatives
- thm-existence-of-normal-neighborhoods
- cor-local-formula-for-distance-from-the-center-of-a-normal-neighborhood
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
sources:
  scraped: []
  references:
  - title: Ieke Moerdijk and Janez Mrčun, Introduction to Foliations and Lie Groupoids (Cambridge Studies in Advanced
      Mathematics 91, 2003)
    url: https://www.cambridge.org/core/books/introduction-to-foliations-and-lie-groupoids/75BBFED277FF39A56594731202789016
    locator: 'Design locators: §2.3, pp. 30–33 (local Reeb stability)'
  - title: Leiden NCG seminar, Noncommutative Geometry of Foliations (2023 seminar notes; complete PDF)
    url: https://ncg-leiden.github.io/foliation2023/foliation_notes.pdf
    locator: §2.1–§2.2, printed pp. 11–15 (germs of transverse diffeomorphisms and finite holonomy)
  - title: Bruno Scárdua, On the existence of stable compact leaves for transversely holomorphic foliations
    url: https://arxiv.org/pdf/1204.0095
    locator: §2, PDF p. 2 (statement of the tubular local Reeb theorem; no proof of that theorem is supplied there)
dependency_level: 5
---

## Statement

Assume Countable Choice $\mathrm{AC}_\omega$
([[def-countable-choice-principle-for-foliation-pair]]). Let $F$ be a regular
foliation, $L$ a leaf, $x\in L$, and $T$ a local transversal to $F$ at $x$
chosen to be an embedded open disk
([[def-local-transversal-to-a-regular-foliation]]). Suppose
$H=\operatorname{Hol}(L,x)\le\operatorname{Diff}_x(T)$ is finite
([[def-holonomy-representation-and-holonomy-group-of-a-leaf]]). Then there is
an $H$-invariant open neighbourhood $D\subseteq T$ of $x$ such that:

1. every $h\in H$ has a representative diffeomorphism defined on $D$ with
   $h(D)=D$, and these representatives make $H$ act on $D$ by diffeomorphisms
   restricting the given germs;
2. each $h\in H$ extends to a diffeomorphism defined on a neighbourhood of the
   closure of $D$;
3. if in addition the finitely many germs preserve a smooth Riemannian metric germ on $T$, the
   disk $D$ may be taken to be an open metric ball.

Any open $H$-invariant $D$ suffices for the finite-holonomy normal model.

## Facts & Assumptions

**Given:** A regular foliation $F$, a leaf $L$ with $x\in L$, an embedded open disk transversal $T$ at $x$, and a finite holonomy group $H=\operatorname{Hol}(L,x)$.

[F1] The holonomy group $H$ is the image of the holonomy representation $\rho_x:\pi_1(L,x)\to\operatorname{Diff}_x(T)$, a subgroup of the group of germs of local diffeomorphisms of $T$ at $x$ ([[def-holonomy-representation-and-holonomy-group-of-a-leaf]], [[def-local-transversal-to-a-regular-foliation]]).

[F2] Elements of $\operatorname{Diff}_x(T)$ are germs of local diffeomorphisms fixing $x$; two representatives of the same germ agree on a neighbourhood of $x$; and $\operatorname{Diff}_x(T)$ is a group under composition with the germ of the identity as unit ([[def-germ-of-a-local-diffeomorphism-at-a-point]], [[lem-germs-of-local-diffeomorphisms-form-a-group]]).

[F3] An embedded open disk transversal $T$ is a smooth manifold containing $x$; a diffeomorphism defined on an open subset of $T$ restricts smoothly to open subsets ([[def-embedded-submanifold-and-slice-chart]], [[def-smooth-manifold]]).

[F4] The derivative of a composite is the composite of the derivatives, and an invertible derivative gives a $C^1$ local inverse, smooth when the map is smooth ([[thm-chain-rule-for-total-derivatives]], [[thm-euclidean-inverse-function-theorem]]).

[F5] Under $\mathrm{AC}_\omega$, a Riemannian exponential map gives normal neighborhoods. In a normal ball distance from its center equals the tangent-vector norm, and a curve leaving a smaller normal ball must first attain that radius ([[thm-existence-of-normal-neighborhoods]], [[cor-local-formula-for-distance-from-the-center-of-a-normal-neighborhood]]).

## Proof

**Proof technique:** direct.

1.1 (Domains before invariance.) In transverse coordinates with $x=0$, choose one representative $f_h$ of each of the finitely many germs, with $f_1=\mathrm{id}$. There are neighborhoods $U_1\Subset U_0$ of zero such that every $f_h$ is defined on $U_0$, every $f_h(U_1)$ lies in $U_0$, and $f_g\circ f_h=f_{gh}$ on $U_1$ for every $g,h\in H$. Indeed each relation is a germ equality, and only finitely many domains, images and relations have to be accommodated. No invariance of $U_1$ is assumed. [F1, F2, choose]

2.1 (Invariant neighborhood.) Put $D_0=\bigcap_{h\in H}f_h(U_1)$. This open neighborhood of zero lies in $U_1$ because $f_1=\mathrm{id}$. For $z\in D_0$ and each $h$, write $z=f_h(y_h)$ with $y_h\in U_1$. Then $f_g(z)=f_{gh}(y_h)\in f_{gh}(U_1)$ for every $h$, so $f_g(D_0)\subseteq D_0$. The inverse relation on $D_0$ gives equality. Hence these restrictions realize a genuine action. Work in the connected component containing zero, which every $f_h$ preserves. [F2, F3, step 1.1]

3.1 (A disk and extensions.) Let $A_h=Df_h(0)$; F4 gives $A_{gh}=A_gA_h$. On $D_0$ set $k(z)=|H|^{-1}\sum_h A_h^{-1}f_h(z)$. Then $Dk(0)=I$ and reindexing the sum gives $k(f_g(z))=A_gk(z)$. F4 gives a smooth inverse for $k$ near zero. Shrink that inverse domain by intersecting its finitely many group translates, so it remains an invariant neighborhood on which $k$ is injective. Average a Euclidean inner product over the linear maps $A_h$. A sufficiently small ball for that inner product, with its closure inside the image of the inverse domain, is invariant under every $A_h$. Its inverse image $D$ under $k$ is therefore an invariant open disk with compact closure inside $D_0\subseteq U_1$. Every $f_h$ is defined on $U_0$, a neighborhood of that closure. In transverse dimension zero the same assertions hold with $D=\{x\}$. [F3, F4, step 1.1, step 2.1, construct]

3.2 (Prescribed metric case.) If a smooth Riemannian metric germ is supplied, choose the representatives and domains of step 1.1 inside its common isometry domain. On the connected $D_0$ the resulting action is by isometries fixing $x$, so it preserves intrinsic distance from $x$. By F5 a sufficiently small such metric ball is a normal exponential ball and hence an open disk: take its radius below the first-exit bound for a relatively compact normal neighborhood. Its compact closure lies in $D_0$, so the extensions from step 1.1 still apply. This uses the supplied metric, without replacing it by an unrelated averaged one. [F5, step 1.1, step 2.1]

4.1 Thus finite holonomy is represented by a smooth action on an invariant transverse disk, with each representative defined past its closure. In the prescribed Riemannian metric case this disk may be chosen to be a metric ball. [step 3.1, step 3.2] ∎
