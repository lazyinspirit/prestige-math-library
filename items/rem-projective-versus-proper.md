---
id: rem-projective-versus-proper
kind: remark
title: Projective and proper are distinct notions
status: published
origin: pipeline
deps:
  - def-projective-morphism-pre-proj
  - thm-projective-morphism-proper
  - def-proper-morphism
  - lem-closed-gluing-of-two-projective-three-spaces-is-proper
  - lem-line-bundles-on-projective-three-space-restrict-by-degree
  - lem-uniqueness-of-twists-on-the-projective-line
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  references:
    - title: "Vakil, The Rising Sea §§8.3, 11.3, 17.4"
      url: https://math.stanford.edu/~vakil/216blog/FOAGoct2111public.pdf
---

## Remark

Under the finite-dimensional H-projective convention of
[[def-projective-morphism-pre-proj]], projectivity strengthens properness: a
projective morphism is a closed immersion into a relative projective space
followed by the projection, and [[thm-projective-morphism-proper]] proves that
every such morphism is proper. This is the implication that holds with no extra
hypotheses; properness by itself is the weaker notion, defined by
separatedness, finite type and universal closedness, with no reference to an
ambient projective space ([[def-proper-morphism]]).

The converse genuinely needs extra hypotheses, and over an algebraically closed
field it is false. [[lem-closed-gluing-of-two-projective-three-spaces-is-proper]]
constructs a proper $k$-scheme by gluing two copies of $\mathbb P^3_k$ along a
line and a smooth plane conic in each, exchanging the line and the conic under
the identifications; the glued scheme is proper over $k$, but it admits no
closed immersion into any $\mathbb P^N_k$. The obstruction is a degree
argument. If such a closed immersion existed, then the pullback $\mathcal L$ of
$\mathcal O(1)$ would restrict to $\mathcal O(n_1)$ and $\mathcal O(n_2)$ on
the two copies of $\mathbb P^3_k$, with $n_1,n_2>0$, because on each copy the
restriction is the pullback of $\mathcal O(1)$ along a closed immersion
([[lem-line-bundles-on-projective-three-space-restrict-by-degree]]). Restricting
instead to the glued curves, and using that a twist on $\mathbb P^1_k$
determines its index ([[lem-uniqueness-of-twists-on-the-projective-line]]), the
identification of the first line with the second conic gives $n_1=2n_2$, while
the identification of the first conic with the second line gives $2n_1=n_2$.
The two equations force $3n_1=0$, hence $n_1=n_2=0$ in $\mathbb Z$, contradicting
$n_1>0$. So no such immersion exists.

Thus "projective" and "proper" are genuinely distinct: the first is a special
case of the second, and the second does not imply the first. The companion
examples page carries the coordinate model of the glued scheme and the full
nonprojectivity calculation; the empty scheme, which is both proper and
projective, is not the witness, and no Noetherian hypothesis is involved in
either direction.
