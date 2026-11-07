---
id: lem-torsor-twist-fiber-identifies-global-class
kind: lemma
title: A twisted fiber has a point exactly at the matching torsor class
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-axiom-of-choice
  - def-nonabelian-fppf-h1-as-torsors
  - def-twist-of-torsor-by-field-torsor-class
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Bjorn Poonen, Rational Points on Varieties, §8.4.1, Theorem 8.4.1"
      url: "https://math.mit.edu/~poonen/papers/Qpoints.pdf"
      locator: "The complete equivalence between a torsor fiber class and lifting to the corresponding twisted torsor."
    - title: "Bjorn Poonen, Rational Points on Varieties, §§6.5.6.2–6.5.6.4"
      url: "https://math.mit.edu/~poonen/papers/Qpoints.pdf"
      locator: "Inverse bitorsors and the contracted product of torsors."
verification: {}
---

## Statement

Assume the Axiom of Choice. Let $K$ be a field, let $G/K$ be a finite-type
affine group scheme, let $T\to\operatorname{Spec}K$ be a represented right
$G$-torsor with class $\tau\in H^1_{\mathrm{fppf}}(K,G)$, and let
$f:Z\to X$ be a represented right $G_X$-torsor over a finite-type
$K$-scheme. For any field extension $L/K$ and point $x\in X(L)$, let
$Z_x$ be the fiber torsor and let $\tau_L$ be the restriction of $\tau$ to
$H^1_{\mathrm{fppf}}(L,G_L)$. If $f^\tau:Z^\tau\to X$ is the twist defined
by $T$, then
$$x\in f^\tau\bigl(Z^\tau(L)\bigr)\quad\Longleftrightarrow\quad [Z_x]=\tau_L\text{ in }H^1_{\mathrm{fppf}}(L,G_L).$$

## Statement references

[[def-nonabelian-fppf-h1-as-torsors|Torsor classes as isomorphism classes]]

[[def-twist-of-torsor-by-field-torsor-class|The contracted-product twist]]

[Poonen, §8.4.1, Theorem 8.4.1](https://math.mit.edu/~poonen/papers/Qpoints.pdf)

## Facts & Assumptions

**Given:** AC, the field $K$, the group scheme $G$, the torsors $T$ and
$Z\to X$, a field extension $L/K$, and $x\in X(L)$.

[A1] The represented twist and its contracted product use the stated AC
convention. [[def-axiom-of-choice]]

[F1] A class in $H^1_{\mathrm{fppf}}(K,G)$ is the isomorphism class of a
represented right $G$-torsor, and this class restricts by base change.
[[def-nonabelian-fppf-h1-as-torsors]]

[F2] The twist is $Z^\tau=Z\times^{G_X}T_X^{-1}$, with $T^{-1}$ the inverse
bitorsor; contracted products and their actions commute with base change.
[[def-twist-of-torsor-by-field-torsor-class]]

## Proof

**Proof technique:** identify the twisted fiber as the difference of the two
torsors, then use the inverse bitorsor to test when that difference is trivial.

**Given:** The data above.

1.1 Pulling the contracted product back along $x:\operatorname{Spec}L\to X$
gives the right $G^\tau_L$-torsor
$$(Z^\tau)_x\cong Z_x\times^{G_L}(T_L^{-1})$$
by [F2]. A point of $f^\tau(Z^\tau(L))$ over $x$ is exactly an $L$-point of
this fiber. A torsor has an $L$-point if and only if it is trivial: a point
identifies the torsor with its group by the action isomorphism, and the
trivial torsor has its identity point. Thus the left side of the Statement
holds exactly when this contracted-product torsor is trivial. [A1, F1, F2,
given]

2.1 If $Z_x\cong T_L$ as right $G_L$-torsors, substitution in the contracted
product gives
$$Z_x\times^{G_L}T_L^{-1}\cong
T_L\times^{G_L}T_L^{-1}\cong G^\tau_L.$$
The last map is the canonical bitorsor multiplication map; after an fppf
trivialization of $T_L$, both sides identify with the regular $G^\tau_L$-torsor
and the map is the group action isomorphism. The quotient map and its inverse
are morphisms after this fppf cover; their compositions are identities there,
so the same identities descend for the quotient sheaves. Thus the twisted
fiber is trivial. [F2, step 1.1, algebra]

2.2 Conversely, if $Z_x\times^{G_L}T_L^{-1}$ is trivial, contract it with
$T_L$ using its left $G^\tau_L$-action and right $G_L$-action. The
associativity isomorphism sends $[[z,t^{-1}],t]$ to $[z,[t^{-1},t]]$ and is
well-defined by the diagonal action relation defining each quotient. After
trivializing $T_L$, the inverse-bitorsor product
$T_L^{-1}\times^{G^\tau_L}T_L$ is the regular $G_L$-torsor: the map is group
multiplication and its inverse inserts the identity. Thus the contracted
product is $Z_x\times^{G_L}G_L\cong Z_x$. Contracting the trivial right
$G^\tau_L$-torsor with $T_L$ gives $T_L$. Since these quotient identities
are isomorphisms after the fppf trivialization and agree on overlaps, they
descend; hence $Z_x\cong T_L$ as right $G_L$-torsors. By [F1], this is
equivalent to $[Z_x]=\tau_L$. [F1, F2, step 1.1, step 2.1, algebra] ∎

