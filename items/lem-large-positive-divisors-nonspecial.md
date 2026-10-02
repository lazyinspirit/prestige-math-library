---
id: lem-large-positive-divisors-nonspecial
kind: lemma
title: "Sufficiently positive divisors in a fixed direction are nonspecial"
status: draft
origin: pipeline
deps:
  - cor-smooth-proper-curve-finite-map-projective-line
  - def-algebraic-curve-over-field
  - def-axiom-of-choice
  - def-divisor-smooth-proper-curve
  - def-genus-euler-characteristic-curve
  - def-index-speciality-divisor
  - def-little-l-divisor
  - def-nonspecial-divisor
  - thm-h1-line-bundle-vanishes-sufficiently-high-degree
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
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement

Assume the Axiom of Choice as inherited from the vanishing theorem. Let $k$
be a field, let $C$ be a smooth proper geometrically integral curve over $k$
([[def-algebraic-curve-over-field]]), let $\varphi:C\to\mathbb P^1_k$ be a
finite $k$-morphism and let $A$ be an effective divisor on $C$ with
$\mathcal O_C(A)\cong\varphi^*\mathcal O_{\mathbb P^1_k}(1)$ — for instance
$A=(f)_\infty$ for a nonconstant $f\in k(C)^\times$, as produced by
[[cor-smooth-proper-curve-finite-map-projective-line]]
([[def-divisor-smooth-proper-curve]]). Let $D_0$ be a divisor on $C$. Then
there is an integer $n_0$, depending on $D_0$ and on the fixed morphism
$\varphi$ (through $A$), such that every divisor $D$ with
$D\ge D_0+n_0A$ is **nonspecial**:
$$H^1\bigl(C,\mathcal O_C(D)\bigr)=0.$$
Explicitly, every divisor of the form $D_0+nA+E$ with $n\ge n_0$ and $E$
effective is nonspecial.

*Fixed direction only.* This is only a statement about the fixed ample
direction $A$: it is **not** claimed that every divisor of degree greater than
$2g-2$ is nonspecial, which is a different statement requiring the duality
pair that follows this page. No threshold in terms of $\deg_k(D)$ alone and no
Serre duality is used or asserted here.

The example uses the finite-map construction
[[cor-smooth-proper-curve-finite-map-projective-line]] and the fixed-direction
vanishing theorem [[thm-h1-line-bundle-vanishes-sufficiently-high-degree]], as
stated in [F1].

## Facts & Assumptions

**Given:** a field $k$, a smooth proper geometrically integral curve $C$ over $k$, a finite $k$-morphism $\varphi:C\to\mathbb P^1_k$, an effective divisor $A$ on $C$ with $\mathcal O_C(A)\cong\varphi^*\mathcal O_{\mathbb P^1_k}(1)$, and a divisor $D_0$ on $C$.

[F1] Vanishing theorem: for the fixed curve, morphism $\varphi$ and effective divisor $A$, and for the given $D_0$, there is an integer $n_0$ such that $H^1(C,\mathcal O_C(D_0+nA+E))=0$ for every $n\ge n_0$ and every effective divisor $E$; equivalently $h^1(D)=0$ for every divisor $D$ with $D\ge D_0+n_0A$ ([[thm-h1-line-bundle-vanishes-sufficiently-high-degree]]).

[F2] Nonspecial divisors: $i(D)=h^1(C,\mathcal O_C(D))=\dim_kH^1(C,\mathcal O_C(D))$ is the index of speciality, and $D$ is nonspecial exactly when $i(D)=0$, that is, exactly when $H^1(C,\mathcal O_C(D))=0$; $D$ is special exactly when $i(D)\ge1$ ([[def-nonspecial-divisor]], [[def-index-speciality-divisor]], [[def-little-l-divisor]]).

[F3] Divisors: a divisor on $C$ is a finite formal integral combination of closed points, effective when all coefficients are nonnegative, and $D\ge D'$ means that $D-D'$ is effective ([[def-divisor-smooth-proper-curve]]).

[F4] The genus $g=g(C)=h^1(C,\mathcal O_C)$ is a nonnegative integer; the threshold $2g-2$ and the duality pair are not part of this lemma and no statement about them is made here ([[def-genus-euler-characteristic-curve]]).

[F5] The Axiom of Choice is available and is inherited only through the vanishing theorem [F1]; the argument below transforms the vanishing statement into the definition of nonspeciality and selects nothing beyond the integer $n_0$ supplied by [F1] ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** apply the fixed-direction vanishing theorem to $D_0$, then translate $h^1(D)=0$ into nonspeciality.

1.1 The fixed-direction threshold. By [F1] applied to the given divisor $D_0$ and the fixed morphism $\varphi$ and divisor $A$, there is an integer $n_0$ with $H^1(C,\mathcal O_C(D_0+nA+E))=0$ for every $n\ge n_0$ and every effective $E$, equivalently $h^1(D)=0$ for every divisor $D$ with $D\ge D_0+n_0A$; this integer depends only on $D_0$ and on $\varphi$ through the fixed sheaf $\mathcal O_C(A)\cong\varphi^*\mathcal O(1)$, not on $D$ or $E$. [F1]

2.1 Nonspeciality above the threshold. Let $D$ be a divisor with $D\ge D_0+n_0A$. By step 1.1, $h^1(D)=0$, and by [F2] the index of speciality vanishes exactly for the nonspecial divisors, so $D$ is nonspecial, that is, $H^1(C,\mathcal O_C(D))=0$. The same applies to every $D=D_0+nA+E$ with $n\ge n_0$ and $E$ effective, since such a divisor dominates $D_0+n_0A$ and is of the form covered by [F1]. [F2, step 1.1]

3.1 Conclusion, the fixed-direction restriction and choice accounting. Steps 1.1 and 2.1 show that every divisor $D\ge D_0+n_0A$, in particular every $D_0+nA+E$ with $n\ge n_0$ and $E$ effective, is nonspecial with $H^1(C,\mathcal O_C(D))=0$. Nothing is asserted about divisors merely of large degree: the lemma provides no universal bound in terms of $\deg_k(D)$ and $2g-2$, and no Serre duality enters, as [F4] records. The integer $n_0$ is the one supplied by [F1] for $D_0$ and the fixed morphism; it is not chosen, and the Axiom of Choice is inherited only through [F1], as recorded in [F5]. [F1, F2, F3, F4, F5, step 1.1, step 2.1] ∎
