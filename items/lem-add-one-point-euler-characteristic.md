---
id: lem-add-one-point-euler-characteristic
kind: lemma
title: "Euler characteristic changes by the residue degree"
status: published
origin: pipeline
deps:
  - def-algebraic-curve-over-field
  - def-axiom-of-choice
  - def-dependent-choice
  - def-coherent-module-scheme
  - def-degree-divisor-proper-curve
  - def-dimension
  - def-divisor-smooth-proper-curve
  - def-euler-characteristic-coherent-sheaf
  - def-sheaf-cohomology-derived-global-sections
  - lem-add-one-point-exact-sequence-line-bundle
  - lem-degree-effective-divisor-nonnegative
  - lem-euler-characteristic-additive-short-exact
  - lem-riemann-roch-space-finite-dimensional
  - thm-choice-implies-dependent-implies-countable-choice
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
    - title: "Michael Artin, MIT 18.721 Introduction to Algebraic Geometry (July 20, 2020 notes), Ch. 8"
      url: "https://math.mit.edu/classes/18.721/ag-jul20.pdf"
    - title: "Ravi Vakil, The Rising Sea (version of October 21, 2025), Chs. 18.5 and 21"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf"
pipeline_run: frontier-37-owner-30
verification:
  audited: 2026-10-02
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement

Assume the Axiom of Choice, inherited from the Euler-characteristic,
finiteness and skyscraper suppliers below. Let $k$ be a field, let $C$ be a
smooth proper geometrically integral curve over $k$
([[def-algebraic-curve-over-field]]), let $D$ be a divisor on $C$
([[def-divisor-smooth-proper-curve]]) and let $p\in C$ be a closed point with
residue degree $d=[\kappa(p):k]$
([[def-degree-divisor-proper-curve]]). Then
$$\chi\bigl(C,\mathcal O_C(D+p)\bigr)=\chi\bigl(C,\mathcal O_C(D)\bigr)+d,$$
and more generally
$$\chi\bigl(C,\mathcal O_C(D+E)\bigr)=\chi\bigl(C,\mathcal O_C(D)\bigr)+\deg_k(E)$$
for every effective divisor $E\ge0$ on $C$, where $\chi$ is the Euler
characteristic of coherent sheaves on the proper $k$-scheme $C$
([[def-euler-characteristic-coherent-sheaf]]). Both identities hold in
$\mathbb Z$.

The short exact sequence
$0\to\mathcal O_C(D)\to\mathcal O_C(D+p)\to i_{p,*}\kappa(p)\to0$, the
cokernel $Q_E$ of $\mathcal O_C(D)\to\mathcal O_C(D+E)$ together with
$\dim_kH^0(C,Q_E)=\deg_k(E)$ and the higher vanishing, and the coherence of
$i_{p,*}\kappa(p)$ and of $Q_E$ are supplied by
[[lem-add-one-point-exact-sequence-line-bundle]]. That current supplier states
and proves the Cartier-to-Weil, Cartier-sheaf and local-order interfaces used
to construct the sequence; its Cartier-to-Weil route obtains Dependent Choice
from the Axiom of Choice by
[[thm-choice-implies-dependent-implies-countable-choice]]. This corollary uses
the stated sequence interface and does not certify its separate suppliers.

## Facts & Assumptions

**Given:** the Axiom of Choice inherited from the Euler-characteristic, finiteness and skyscraper suppliers; a field $k$, a smooth proper geometrically integral curve $C$ over $k$, a divisor $D$ on $C$, a closed point $p\in C$ and an effective divisor $E\ge0$ on $C$.

[F1] The curve $C$ is proper and geometrically integral over the field $k$, and $\deg_k$ is the group homomorphism on divisors with $\deg_k(D')=\sum_xn_x[\kappa(x):k]$ ([[def-algebraic-curve-over-field]], [[def-divisor-smooth-proper-curve]], [[def-degree-divisor-proper-curve]], [[lem-degree-effective-divisor-nonnegative]]).

[F2] For every divisor $D'$ the sheaf $\mathcal O_C(D')$ is a coherent $\mathcal O_C$-module ([[lem-riemann-roch-space-finite-dimensional]], [[def-coherent-module-scheme]]).

[F3] Adding one point: $0\to\mathcal O_C(D)\to\mathcal O_C(D+p)\to i_{p,*}\kappa(p)\to0$ is a short exact sequence of coherent $\mathcal O_C$-modules, $H^0(C,i_{p,*}\kappa(p))\cong\kappa(p)$ has $k$-dimension $d=[\kappa(p):k]$ while $H^q(C,i_{p,*}\kappa(p))=0$ for every $q\ge1$; and for every effective divisor $E\ge0$ the cokernel $Q_E$ of $\mathcal O_C(D)\to\mathcal O_C(D+E)$ is a coherent $\mathcal O_C$-module with $H^q(C,Q_E)=0$ for every $q\ge1$ and $\dim_kH^0(C,Q_E)=\deg_k(E)$ ([[lem-add-one-point-exact-sequence-line-bundle]]).

[F4] The Euler characteristic of a coherent module $\mathcal F$ on a scheme $X$ proper over $k$ is $\chi(X,\mathcal F)=\sum_{q\ge0}(-1)^q\dim_kH^q(X,\mathcal F)$, a finite alternating sum of finite dimensions, and $\chi(X,0)=0$ for the zero sheaf ([[def-euler-characteristic-coherent-sheaf]], [[def-sheaf-cohomology-derived-global-sections]], [[def-dimension]]).

[F5] If $0\to\mathcal F'\to\mathcal F\to\mathcal F''\to0$ is a short exact sequence of coherent $\mathcal O_X$-modules on a scheme $X$ proper over $k$, then $\chi(X,\mathcal F)=\chi(X,\mathcal F')+\chi(X,\mathcal F'')$ ([[lem-euler-characteristic-additive-short-exact]]).

[F6] The Axiom of Choice is used exactly through the Euler-characteristic supplier [F4], the finiteness and coherence suppliers [F2] and the single-point sequence supplier [F3]; no further selection is made below ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct; apply additivity of the Euler characteristic to the single-point sequence, evaluate $\chi$ on the skyscraper through its cohomology, and repeat for the iterated cokernel.

1.1 Set-up. By [F1] the curve $C$ is proper over $k$, and by [F2] the sheaves $\mathcal O_C(D)$ and $\mathcal O_C(D+p)$ are coherent $\mathcal O_C$-modules; consequently all Euler characteristics below are those of [F4]. By [F3] the sequence $0\to\mathcal O_C(D)\to\mathcal O_C(D+p)\to i_{p,*}\kappa(p)\to0$ is a short exact sequence of coherent $\mathcal O_C$-modules with $H^0(C,i_{p,*}\kappa(p))\cong\kappa(p)$ of $k$-dimension $d$ and $H^q(C,i_{p,*}\kappa(p))=0$ for every $q\ge1$. [F1, F2, F3]

1.2 The general effective shift. Let $E\ge0$ be effective. By [F2] the sheaves $\mathcal O_C(D)$ and $\mathcal O_C(D+E)$ are coherent, and by [F3] the cokernel $Q_E$ of $\mathcal O_C(D)\to\mathcal O_C(D+E)$ is coherent with $H^q(C,Q_E)=0$ for $q\ge1$ and $\dim_kH^0(C,Q_E)=\deg_k(E)$; hence $\chi(C,Q_E)=\dim_kH^0(C,Q_E)=\deg_k(E)$ by the definition of $\chi$ in [F4]. Applying additivity [F5] to $0\to\mathcal O_C(D)\to\mathcal O_C(D+E)\to Q_E\to0$ gives $\chi(C,\mathcal O_C(D+E))=\chi(C,\mathcal O_C(D))+\chi(C,Q_E)=\chi(C,\mathcal O_C(D))+\deg_k(E)$. [F2, F3, F4, F5]

2.1 The Euler characteristic of the skyscraper. By [F4] the Euler characteristic of the coherent module $i_{p,*}\kappa(p)$ on the proper $k$-scheme $C$ is the alternating sum $\sum_{q\ge0}(-1)^q\dim_kH^q(C,i_{p,*}\kappa(p))$; by step 1.1 every term with $q\ge1$ vanishes and the remaining term is $\dim_kH^0(C,i_{p,*}\kappa(p))=\dim_k\kappa(p)=d$. Hence $\chi(C,i_{p,*}\kappa(p))=d$. [F3, F4, step 1.1]

3.1 The one-point shift. Applying additivity [F5] to the short exact sequence of step 1.1 gives $\chi(C,\mathcal O_C(D+p))=\chi(C,\mathcal O_C(D))+\chi(C,i_{p,*}\kappa(p))=\chi(C,\mathcal O_C(D))+d$ by step 2.1. [F5, step 1.1, step 2.1]

4.1 Conclusion and choice accounting. Step 3.1 gives the one-point identity and step 1.2 the identity for every effective divisor $E$, both in $\mathbb Z$ because they are alternating sums of finite dimensions and the degree $\deg_k(E)$ is an integer. The Axiom of Choice is used only through the suppliers recorded in [F6], namely the Euler-characteristic definition of [F4] and the finiteness, coherence and skyscraper suppliers of [F2] and [F3], which themselves inherit it; no further selection is made above. [F2, F3, F4, F6, step 3.1, step 1.2] ∎
