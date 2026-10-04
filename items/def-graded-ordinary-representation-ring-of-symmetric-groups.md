---
id: def-graded-ordinary-representation-ring-of-symmetric-groups
kind: definition
title: "The graded ordinary representation ring of the symmetric groups"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - def-virtual-character-and-character-ring-of-a-finite-group
  - def-finite-symmetric-group-and-permutation-notation
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "I. G. Macdonald, Symmetric Functions and Hall Polynomials, 2nd ed., Chapter I §7"
      url: "https://math.berkeley.edu/~corteel/MATH249/macdonald.pdf"
      locator: "Chapter I §7.1–7.3, printed pp. 112–114 (the ring $R$ of symmetric-group characters)"
    - title: "G. D. James, The Representation Theory of the Symmetric Groups, §6"
      url: "https://www-users.cse.umn.edu/~webb/oldteaching/Year2010-11/the-representation-theory-of-the-symmetric-groups-SLN.pdf"
      locator: "§6, printed pp. 22–26"
---

## Definition

For $n\ge0$ let $R(S_n)$ be the character ring of the finite group $S_n$, the
$\mathbb Z$-span of its irreducible complex characters
([[def-virtual-character-and-character-ring-of-a-finite-group]]), so that
$R(S_0)=\mathbb Z\cdot\mathbf 1$ for the trivial group $S_0=\{1\}$
([[def-finite-symmetric-group-and-permutation-notation]]). The **graded
ordinary representation ring of the symmetric groups** is the direct sum

$$R_S:=\bigoplus_{n\ge0}R(S_n),$$

the abelian group of finitely supported tuples $(f_n)_{n\ge0}$ with
$f_n\in R(S_n)$ and componentwise addition; an element $f\in R(S_n)$ is
**homogeneous of degree** $n$, and the degree-$n$ component of an element
$f=\sum_nf_n$ of $R_S$ is $f_n$. This item defines only the graded abelian
group and its degree decomposition: the multiplication used on $R_S$ is the
outer induction product of
[[def-outer-induction-product-for-symmetric-group-characters]], not the
tensor-product multiplication inside a single $R(S_n)$, and no ring axioms for
the outer product are assumed here. We write

$$R_{S,\mathbb Q}:=\mathbb Q\otimes_{\mathbb Z}R_S,\qquad R_{S,\mathbb C}:=\mathbb C\otimes_{\mathbb Z}R_S$$

for the scalar extensions. No choice principle is used.
