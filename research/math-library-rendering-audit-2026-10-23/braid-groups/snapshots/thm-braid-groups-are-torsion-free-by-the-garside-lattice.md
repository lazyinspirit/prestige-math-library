---
id: thm-braid-groups-are-torsion-free-by-the-garside-lattice
kind: theorem
title: "Braid groups are torsion free by the garside lattice"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [thm-left-and-right-divisibility-extend-to-lattice-orders-on-the-braid-group,
       def-braid-group-by-the-artin-presentation]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "J. Gonzalez-Meneses, Basic results on braid groups, Proposition 4.1, printed p. 30"
      url: "https://arxiv.org/abs/1010.0321"
verification:
  audited: 2026-09-27
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
---

## Statement

Let $n\ge0$ and let $B_n$ be the braid group of
[[def-braid-group-by-the-artin-presentation]]. If $x\in B_n$ and $x^{r}=1$ for
some integer $r\ge1$, then $x=1$. Equivalently, $B_n$ is **torsion free**: its
only element of finite order is the identity.

The proof uses the fact that the left divisibility order of
[[thm-left-and-right-divisibility-extend-to-lattice-orders-on-the-braid-group]]
makes $B_n$ a lattice in which left translations are lattice automorphisms, and
it does not use the normal form of
[[thm-left-garside-normal-form-is-unique]]. For $n=0,1$ the group $B_n$ is
trivial, since its presentation has no generator, and the assertion holds
vacuously. No choice principle is used.

## Facts & Assumptions

**Given:** A natural number $n\ge0$, the braid group $B_n$, an element $x\in B_n$ and an integer $r\ge1$ with $x^{r}=1$.

[F1] $B_n$ is a group, with $x^{0}=1$ and $x^{r}=x\,x^{r-1}$ for $r\ge1$; elements can be cancelled in a group ($yd=zd$ implies $y=z$).

[F2] The left divisibility order $\preccurlyeq_L$ on $B_n$ of [[thm-left-and-right-divisibility-extend-to-lattice-orders-on-the-braid-group]] is a partial order under which every pair of elements has a greatest lower bound $u\wedge_Lv$ and a least upper bound, and every left translation is a lattice automorphism: $z(u\wedge_Lv)=zu\wedge_Lzv$ for all $u,v,z\in B_n$. Consequently every nonempty finite family has a greatest lower bound, obtained by iterating the binary meet.

[F3] For $n=0$ and $n=1$ the presentation of [[def-braid-group-by-the-artin-presentation]] has no generator and no relation, so $B_n$ is the trivial group.

## Proof

**Proof technique:** direct.

1.1 **The case $n\le1$.** If $n=0$ or $n=1$, then $B_n$ is trivial by [F3], so its only element is $1$ and the statement is vacuous. [F3]

1.2 **The meet of the orbit.** Let $n\ge2$ and $x^{r}=1$ with $r\ge1$. The family $\{1,x,x^{2},\dots,x^{r-1}\}$ is finite and nonempty, so its greatest lower bound $d:=1\wedge_Lx\wedge_Lx^{2}\wedge_L\cdots\wedge_Lx^{r-1}$ exists and is unique by [F2] (for $r=1$ the family is $\{x^{0}\}=\{1\}$ and $d=1$; for $r\ge2$ iterate the binary meet). [F1, F2]

2.1 **Left multiplication permutes the family.** By [F2], left multiplication by $x$ distributes over finite meets, so $xd=x\wedge_Lx^{2}\wedge_L\cdots\wedge_Lx^{r-1}\wedge_Lx^{r}=x\wedge_Lx^{2}\wedge_L\cdots\wedge_Lx^{r-1}\wedge_L1$, where the last step uses $x^{r}=1$ [F1]. The family $\{x,x^{2},\dots,x^{r-1},1\}$ is the same set as $\{1,x,\dots,x^{r-1}\}$, and the meet does not depend on the order in which the binary meets are taken by [F2]; hence $xd=d$. [F1, F2, step 1.2]

3.1 **Cancellation.** Since $xd=d=1\cdot d$, cancelling $d$ on the right in the group [F1] gives $x=1$. Hence a braid of finite order $r\ge1$ is trivial; equivalently, no nonidentity element of $B_n$ has finite order. [F1, step 2.1]

4.1 **Assembly.** Step 1.1 disposes of $n\le1$ and step 3.1 of $n\ge2$, so every element of finite order in $B_n$ is the identity. The only structural input is the group lattice of [F2] and its compatibility with left multiplication; no positivity of $x$, no normal form and no geometric model is used. In particular the argument also applies verbatim to every Garside group whose left order is a lattice with left translations acting by lattice automorphisms. No choice principle is used. ∎ [step 1.1, step 1.2, step 2.1, step 3.1]

## Remarks

- **Why the meet is stable.** The identity
  $x(1\wedge x\wedge\cdots\wedge x^{r-1})=x\wedge x^{2}\wedge\cdots\wedge x^{r}$
  is the whole argument: the cyclic shift of the family $\{1,x,\dots,x^{r-1}\}$
  produces the same set, so $xd=d$ and cancellation finishes. This is Garside's
  fourth proof of torsion freeness, as reproduced in J. González-Meneses,
  *Basic results on braid groups*, Proposition 4.1, printed p. 30.
- **Consistency with the centre.** Together with
  [[thm-the-center-of-b-n-is-generated-by-the-full-twist-for-n-greater-than-two]]
  this shows that $\langle\Delta^{2}\rangle$ is infinite cyclic, since
  $\Delta^{2}\neq1$ and no nonidentity braid has finite order; this is used in
  the companion example page.
- Nothing here uses the Axiom of Choice or any weaker choice principle: the
  meet is taken over a finite family listed from the given element $x$.
