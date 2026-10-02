---
id: rem-sharp-degree-thresholds-wait-for-duality
kind: remark
title: "Why the sharp degree thresholds wait for the duality pair"
status: draft
origin: pipeline
deps:
  - cor-riemann-theorem-large-degree
  - def-algebraic-curve-over-field
  - def-axiom-of-choice
  - def-genus-euler-characteristic-curve
  - def-index-speciality-divisor
  - def-little-l-divisor
  - lem-large-positive-divisors-nonspecial
  - thm-h1-line-bundle-vanishes-sufficiently-high-degree
  - thm-riemann-roch-as-l-minus-index
  - thm-riemann-roch-euler-characteristic-curve
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "William Fulton, Algebraic Curves (Internet Archive copy), Chs. 8 and 6"
      url: "https://web.archive.org/web/20240102232744id_/https://dept.math.lsa.umich.edu/~wfulton/CurveBook.pdf"
    - title: "Ravi Vakil, The Rising Sea (version of October 21, 2025), Ch. 18.5 and Ch. 21"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf"
    - title: "The Stacks Project, Algebraic Curves (tag 0BRV)"
      url: "https://stacks.math.columbia.edu/download/curves.pdf"
pipeline_run: frontier-37-owner-30
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Remark

Let $k$ be a field and let $C$ be a smooth proper geometrically integral curve
over $k$ ([[def-algebraic-curve-over-field]]) of genus $g=g(C)$
([[def-genus-euler-characteristic-curve]]). This page proves the
Euler-characteristic form of Riemann-Roch,
$$l(D)-i(D)=h^0\bigl(C,\mathcal O_C(D)\bigr)-h^1\bigl(C,\mathcal O_C(D)\bigr)=\deg_k(D)+1-g,$$
with $i(D)\ge0$, in the notation $l(D)=h^0(D)$ and $i(D)=h^1(D)$ of
[[def-little-l-divisor]] and [[def-index-speciality-divisor]]
([[thm-riemann-roch-as-l-minus-index]],
[[thm-riemann-roch-euler-characteristic-curve]]), and it proves the
fixed-direction Serre vanishing theorem
[[thm-h1-line-bundle-vanishes-sufficiently-high-degree]]: for a fixed finite
$k$-morphism $\varphi:C\to\mathbb P^1_k$ and a fixed effective divisor $A$ with
$\mathcal O_C(A)\cong\varphi^*\mathcal O_{\mathbb P^1_k}(1)$, and for every
divisor $D_0$ on $C$, there is an integer $n_0=n_0(D_0,\varphi)$ such that
$$H^1\bigl(C,\mathcal O_C(D_0+nA+E)\bigr)=0$$
for every $n\ge n_0$ and every effective divisor $E$, equivalently $h^1(D)=0$
for every divisor $D\ge D_0+n_0A$. Through
[[cor-riemann-theorem-large-degree]] and
[[lem-large-positive-divisors-nonspecial]] this yields the exact count
$l(D)=\deg_k(D)+1-g$ and nonspeciality, again only for $D\ge D_0+n_0A$: the
bound is a bound along one fixed ample direction, it depends on $D_0$ and on
$\varphi$, and it is not a bound in $\deg_k(D)$.

The classical degree thresholds are not available on this page and must not be
quoted from it. Each of the following rests on the identification
$i(D)=l(K_C-D)$ supplied by Serre duality, in the pair on residues, Serre
duality and the full Riemann-Roch theorem that follows this page:

1. the canonical identities $\deg_k K_C=2g-2$ and $h^0(C,K_C)=g$ for a
   canonical divisor $K_C$;
2. vanishing $i(D)=0$, equivalently $l(D)=\deg_k(D)+1-g$, for every divisor of
   degree greater than $2g-2$ — not merely along one fixed ample direction;
3. base-point-freeness of every invertible sheaf of degree at least $2g$;
4. very ampleness of every invertible sheaf of degree at least $2g+1$.

In the vocabulary of the index of speciality
([[def-index-speciality-divisor]]) the missing ingredient is exactly a
description of the dual space of $H^1(C,\mathcal O_C(D))$: nothing on this page
identifies that space with the space of sections of a complementary invertible
sheaf, defines a canonical divisor, or proves a threshold in terms of
$\deg_k(D)$ alone. The batch-8 items `cor-canonical-degree-two-g-minus-two`,
`cor-h0-canonical-differentials-genus`,
`cor-h1-line-bundle-vanishes-degree-over-two-g-minus-two`,
`thm-degree-two-g-line-bundle-basepoint-free` and
`thm-degree-two-g-plus-one-line-bundle-very-ample` are the destinations of
that material in the following duality pair. This remark does not use those
results; it records that the present page proves only the fixed-direction form
stated above.

The Axiom of Choice is inherited here from the suppliers named above and is
not otherwise used: the remark selects nothing and adds no choice principle of
its own ([[def-axiom-of-choice]]).
