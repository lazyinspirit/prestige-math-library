---
id: def-peripheral-boundary-preserving-automorphism-of-f-n
kind: definition
title: "Peripheral-boundary-preserving automorphisms of F_n"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
dependency_level: 1
deps: [def-free-group, def-group-isomorphism-and-automorphism, thm-reduced-words-form-the-free-group, def-standard-meridians-of-a-punctured-disk]
justified_by: []
aliases: []
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Emil Artin, Theory of Braids, Annals of Mathematics 48 (1947), pp. 101-126, equations (11), (13), (16) and Theorem 16, printed pp. 111-115"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/artinbraids.pdf"
    - title: "Juan Gonzalez-Meneses, Basic results on braid groups, section 1.6, Theorem 1.3 and the preceding paragraph (the two necessary conditions), printed pp. 9-10"
      url: "https://arxiv.org/pdf/1010.0321"
---

## Definition

Let $n\in\mathbb N$ and let
$F_n=\langle x_1,\dots,x_n\rangle$ be the free group of [[def-free-group]] on
the $n$ letters $x_1,\dots,x_n$, with reduced words and free reduction as in
[[thm-reduced-words-form-the-free-group]]. The **ordered boundary product** is
the element
$$\delta:=x_1x_2\cdots x_n\in F_n,$$
the word $x_1\cdots x_n$; under the identification of $x_i$ with the class of
the standard meridian of [[def-standard-meridians-of-a-punctured-disk]] it is
the element represented by the positively oriented boundary loop (proved in
`lem-the-oriented-boundary-loop-represents-the-ordered-product-of-the-standard-meridians`).

An automorphism $A\in\operatorname{Aut}(F_n)$
([[def-group-isomorphism-and-automorphism]]) is
**peripheral-boundary-preserving** if

1. **(peripheral)** for every $i$ the element $A(x_i)$ is conjugate in $F_n$
   to one of the generators $x_1,\dots,x_n$; equivalently, after rewriting
   $A(x_i)$ in the reduced normal form of
   [[thm-reduced-words-form-the-free-group]], there are a permutation $\pi$ of
   $\{1,\dots,n\}$ and a reduced word $Q_i$ with
   $$A(x_i)=Q_i^{-1}\,x_{\pi(i)}\,Q_i;\qquad\text{and}$$
2. **(boundary-preserving)** $A$ fixes the ordered boundary product,
   $$A(x_1x_2\cdots x_n)=x_1x_2\cdots x_n .$$

These are exactly the two hypotheses of Artin's characterization of the braid
subgroup of $\operatorname{Aut}(F_n)$.

**The two formulations of condition 1 agree.** If
$A(x_i)=Q_i^{-1}x_{\pi(i)}Q_i$, its class in the abelianisation
$F_n^{\mathrm{ab}}\cong\mathbb Z^n$ is the class of $x_{\pi(i)}$; conversely,
an automorphism induces an automorphism of $\mathbb Z^n$, so if every
$A(x_i)$ is conjugate to a generator, the assignment
$e_i\mapsto e_{\pi(i)}$ is an invertible self-map of the basis and $\pi$ is a
permutation. The element $Q_i$ is not unique, but it is unique up to
left-multiplication by powers of the middle generator: if
$Q^{-1}x_jQ=R^{-1}x_jR$ then $RQ^{-1}$ commutes with $x_j$, hence lies in the
centraliser $\langle x_j\rangle$, so $R=x_j^mQ$ for some integer $m$; thus the invariant content of condition 1 is
"$A(x_i)$ is conjugate to a generator", and the displayed form is a normalised
way of writing that conjugacy. Condition 2 fixes the ordered product itself,
not merely its conjugacy class or its image in the abelianisation. No choice
principle is used in this definition.

## Remarks

- For $n\le1$ the group $F_n$ is trivial or infinite cyclic and the conditions
  are checked directly; the ordered product is $x_1$ for $n=1$.
- For $n\ge2$ the conditions are independent. The basis transposition
  $x_1\leftrightarrow x_2$ preserves peripheral conjugacy classes and changes
  $\delta$. Conversely, the substitution $x_1\mapsto x_1^{-1}$,
  $x_2\mapsto x_1^2x_2$, fixing the other generators, fixes $\delta$ and is
  an involution, hence an automorphism. Its image of $x_1$ has abelianised
  class $-e_1$, so it is not conjugate to any positive basis generator.
