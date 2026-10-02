---
id: cor-riemann-theorem-large-degree
kind: corollary
title: "Riemann's theorem for sufficiently positive divisors"
status: draft
origin: pipeline
deps:
  - def-algebraic-curve-over-field
  - def-axiom-of-choice
  - def-divisor-smooth-proper-curve
  - def-genus-euler-characteristic-curve
  - def-little-l-divisor
  - thm-h1-line-bundle-vanishes-sufficiently-high-degree
  - thm-riemann-roch-euler-characteristic-curve
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
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
  precheck: pass
---

## Statement

Assume the Axiom of Choice as inherited from the vanishing theorem. Let $k$
be a field, let $C$ be a smooth proper geometrically integral curve over $k$
([[def-algebraic-curve-over-field]]) of genus $g=g(C)$
([[def-genus-euler-characteristic-curve]]), let
$\varphi:C\to\mathbb P^1_k$ be a finite $k$-morphism and let $A$ be an
effective divisor with
$\mathcal O_C(A)\cong\varphi^*\mathcal O_{\mathbb P^1_k}(1)$. Let $D_0$ be a
divisor on $C$ ([[def-divisor-smooth-proper-curve]]) and let $n_0$ be the
integer supplied for $D_0$ by
[[thm-h1-line-bundle-vanishes-sufficiently-high-degree]] for this fixed
morphism $\varphi$ and divisor $A$.
Then every divisor $D$ on $C$ with $D\ge D_0+n_0A$ satisfies
$$h^1(D)=0\qquad\text{and}\qquad l(D)=\deg_k(D)+1-g,$$
where $l(D)=h^0(D)=\dim_kH^0(C,\mathcal O_C(D))$ and
$h^1(D)=\dim_kH^1(C,\mathcal O_C(D))$ ([[def-little-l-divisor]]). In
particular both conclusions hold for every divisor of the form
$D=D_0+nA+E$ with $n\ge n_0$ and $E$ effective.

## Facts & Assumptions

**Given:** a field $k$, a smooth proper geometrically integral curve $C$ over $k$ of genus $g$, a finite $k$-morphism $\varphi:C\to\mathbb P^1_k$, an effective divisor $A$ with $\mathcal O_C(A)\cong\varphi^*\mathcal O(1)$, a divisor $D_0$ on $C$, and the integer $n_0$ supplied for $D_0$ by the vanishing theorem for this $\varphi$ and $A$.

[F1] Vanishing theorem: for the fixed curve, morphism $\varphi$ and effective divisor $A$, the integer $n_0$ satisfies $H^1(C,\mathcal O_C(D_0+nA+E))=0$ for every $n\ge n_0$ and every effective divisor $E$; equivalently $h^1(D)=0$ for every divisor $D$ with $D\ge D_0+n_0A$ ([[thm-h1-line-bundle-vanishes-sufficiently-high-degree]]).

[F2] Riemann-Roch in Euler-characteristic form: for every divisor $D$ on $C$ one has $h^0(D)-h^1(D)=\chi(C,\mathcal O_C(D))=\deg_k(D)+1-g$, with no Serre duality used ([[thm-riemann-roch-euler-characteristic-curve]]).

[F3] Notations: $l(D)=h^0(D)=\dim_kH^0(C,\mathcal O_C(D))$ and $h^i(D)=\dim_kH^i(C,\mathcal O_C(D))$ for $i\ge0$, and $g=g(C)=h^1(C,\mathcal O_C)=1-\chi(C,\mathcal O_C)$ is the genus ([[def-little-l-divisor]], [[def-genus-euler-characteristic-curve]], [[def-divisor-smooth-proper-curve]]).

[F4] The Axiom of Choice is available and is inherited from the vanishing theorem [F1] (through ampleness and Serre vanishing), the Riemann-Roch theorem [F2], and the dimension, genus and divisor interfaces [F3]; the argument below evaluates the two statements at the given divisor and selects nothing beyond the integer $n_0$ supplied by [F1] ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** read the vanishing of $h^1$ off the vanishing theorem, substitute it into the Euler-characteristic form of Riemann-Roch, and record the explicit form $D_0+nA+E$.

1.1 Vanishing above the threshold. Let $D$ be a divisor with $D\ge D_0+n_0A$. Writing $E:=D-(D_0+n_0A)\ge0$ exhibits $D=D_0+n_0A+E$ with $E$ effective, so [F1] gives $H^1(C,\mathcal O_C(D))=0$, that is $h^1(D)=0$. In particular, for every $n\ge n_0$ and every effective $E$ the divisor $D=D_0+nA+E$ satisfies $D\ge D_0+n_0A$ and therefore $h^1(D)=0$. [F1]

2.1 The dimension formula. For every divisor $D$ with $D\ge D_0+n_0A$, combining $h^1(D)=0$ of step 1.1 with the Riemann-Roch identity [F2] gives $$l(D)=h^0(D)=h^1(D)+\deg_k(D)+1-g=\deg_k(D)+1-g$$ by the notation [F3]: the section space has dimension exactly $\deg_k(D)+1-g$, with no correction term. [F2, F3, step 1.1]

3.1 The explicit form and choice accounting. Every divisor $D=D_0+nA+E$ with $n\ge n_0$ and $E$ effective satisfies $D\ge D_0+n_0A$, so step 1.1 gives $h^1(D)=0$ and step 2.1 gives $l(D)=\deg_k(D)+1-g$; the general divisor $D\ge D_0+n_0A$ is of this form with $n=n_0$, so both formulations coincide. The integer $n_0$ is the one supplied by the vanishing theorem for $D_0$ and the fixed morphism $\varphi$; it is not chosen here, and the Axiom of Choice is inherited through [F1], [F2] and [F3], as recorded in [F4]. [F1, F4, step 1.1, step 2.1] ∎
