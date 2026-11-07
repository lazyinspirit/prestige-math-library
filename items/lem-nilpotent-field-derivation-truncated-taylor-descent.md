---
id: lem-nilpotent-field-derivation-truncated-taylor-descent
kind: lemma
title: Truncated Taylor descent for a p-nilpotent field derivation
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-derivation-algebra
  - def-extension-degree-and-finite-extension
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "P. Samuel, Lectures On Old And New Results On Algebraic Curves, Chapter III, printed pp. 71–75; explicit algebraic refinement"
      url: https://mathweb.tifr.res.in/Documents/Publications/Lectures/tifr36.pdf
verification: {}
---

## Statement

Let $L$ be a field of characteristic $p>0$, let $D:L\to L$ be a derivation
with $D^p=0$, and suppose $t\in L$ satisfies $D(t)=1$. Put $C=\ker D$ and
$$h(a)=\sum_{j=0}^{p-1}\frac{(-t)^j}{j!}D^j(a).$$
Then $C$ is a subfield, $h(a)\in C$ for every $a\in L$, and every element
has the unique expansion
$$a=\sum_{i=0}^{p-1}\frac{t^i}{i!}h(D^i a).$$
In particular $L=C(t)$ and $[L:C]=p$.
If $K\subseteq L$ is a subfield containing $t$ with $D(K)\subseteq K$, and
$K_0=K\cap C$, then $K=K_0(t)$, $[K:K_0]=p$, and the multiplication map
$$C\otimes_{K_0}K\longrightarrow L$$
is an isomorphism. Thus these two subfields are linearly disjoint over
$K_0$, with compositum all of $L$.

## Statement references

[Samuel, Chapter III, §2(E), Proposition 3, printed pp. 71–72](https://mathweb.tifr.res.in/Documents/Publications/Lectures/tifr36.pdf)

## Facts & Assumptions

**Given:** The field $L$, derivation $D$, prime $p$, element $t$ and, when
present, stable subfield $K$ of the Statement. Factorials below $p$ are
nonzero in the prime field and hence invertible.

[F1] A derivation is additive and satisfies the Leibniz rule; in particular
$D(1)=0$ and $D(a^{-1})=-a^{-2}D(a)$ for $a\ne0$.
[[def-derivation-algebra]]

[F2] The degree of a finite field extension is its vector-space dimension.
[[def-extension-degree-and-finite-extension]]

## Proof

**Proof technique:** direct; construct the horizontal projection by a finite
Taylor sum and invert it by a binomial cancellation.

1.1 The derivation laws make $C$ closed under addition, subtraction and multiplication, and the inverse formula [F1] makes it closed under inverses of nonzero elements. It contains the prime field. Hence $C$ is a field. Iterated Leibniz gives $D(t^j)=j t^{j-1}$. In differentiating $h(a)$, the derivative of the factor $(-t)^j/j!$ cancels the term coming from $D^{j-1}a$ for $1\le j<p$; the sole uncancelled final term contains $D^p a=0$. Thus $Dh(a)=0$ and $h(a)\in C$. [F1, given, algebra]

2.1 Expand the asserted Taylor sum as a double sum over $0\le i,j<p$. Terms with $i+j\ge p$ vanish since $D^p=0$. For each $m=i+j<p$, its coefficient of $t^mD^m a$ is $\sum_{i+j=m}(-1)^j/(i!j!)$, which equals $1$ for $m=0$ and $(1-1)^m/m!=0$ for $m>0$. The expansion is therefore exactly $a$. By step 1.1 all its coefficients lie in $C$, so $1,t,\ldots,t^{p-1}$ span $L$ over $C$. [given, algebra, step 1.1]

3.1 If $\sum_{i=0}^{p-1} c_i t^i=0$ with $c_i\in C$ and some coefficient nonzero, let $m$ be the largest index with $c_m\ne0$. Apply $D^m$: every term with lower exponent vanishes, while the last gives $m!c_m\ne0$, a contradiction. These powers are therefore independent, proving uniqueness of the expansion, $L=C(t)$ and degree $p$. In particular $t\notin C$ and the given derivation cannot be zero. [F1, F2, algebra, step 2.1]

4.1 For the stable subfield $K$, the same formula has $h(K)\subseteq K$ because $t\in K$ and $D(K)\subseteq K$. Step 1.1 then gives $h(K)\subseteq K_0$. Applying steps 2.1–3.1 within $K$ shows $K=K_0(t)$, with basis $1,t,\ldots,t^{p-1}$ over $K_0$. Its tensor product with $C$ is free over $C$ on the corresponding tensor basis. The multiplication map takes that basis to the basis of $L/C$ in step 3.1, so is a vector-space isomorphism, and it is a ring homomorphism by multiplication of pure tensors. It is therefore the claimed algebra isomorphism and proves linear disjointness. No algebraic-closedness, perfection, finite-generation or separability assumption on any constant field was used. [F2, given, algebra, step 1.1, step 2.1, step 3.1] ∎
