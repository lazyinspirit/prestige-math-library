---
id: thm-davenport-heilbronn-cubic-field-count
kind: theorem
title: "Davenport–Heilbronn count of nowhere-totally-ramified cubic fields"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 25
deps:
  - def-number-field
  - def-discriminant-of-a-number-field-basis-and-order
  - thm-delone-faddeev-cubic-rings-and-binary-cubic-forms
  - lem-cubic-fixed-good-congruence-orbit-asymptotic
  - lem-cubic-field-order-count-linear-upper-bound
  - lem-cubic-nonmaximal-tail-from-linear-order-bound
  - lem-cubic-total-ramified-tail-from-linear-order-bound
  - thm-euler-product-for-riemann-zeta
  - cor-basel-sum-by-residues
  - thm-constructible-inner-model-semantic-and-formal-schema
  - thm-delta-zero-absoluteness-for-transitive-sets
  - thm-ring-of-integers-free-of-rank-degree
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Bhargava, Shankar, and Tsimerman, On the Davenport–Heilbronn Theorems and Second-Order Terms, Theorem 20 and §§5–6.1, 8.1–8.3"
      url: "https://arxiv.org/pdf/1005.0672"
      locator: "Theorem 20 and printed §§5–6.1, 8.1–8.3"
    - title: "A. Landesman, Distributions of Class Groups of Global Fields, Lecture 3"
      url: "https://people.math.harvard.edu/~landesman/assets/class-groups-notes.pdf"
      locator: "§3, Davenport–Heilbronn theorem"
verification: {}
---

## Statement

For $X>0$ and $\epsilon\in\{+,-\}$, let $\mathcal C_\epsilon(X)$ be the set of isomorphism classes of degree-three number fields $L/\mathbb Q$ with $|\operatorname{Disc}(L)|<X$, with $\operatorname{Disc}(L)>0$ if $\epsilon=+$ and $\operatorname{Disc}(L)<0$ if $\epsilon=-$, and such that no rational prime is totally ramified in $L$ (that is, no prime above a rational prime has ramification index $3$). Then
$$\lim_{X\to\infty}\frac{|\mathcal C_+(X)|}{X}=\frac{1}{2\pi^2},\qquad \lim_{X\to\infty}\frac{|\mathcal C_-(X)|}{X}=\frac{3}{2\pi^2}.$$

## Statement references

[[def-number-field]]

[[def-discriminant-of-a-number-field-basis-and-order]]

[[thm-delone-faddeev-cubic-rings-and-binary-cubic-forms]]

[Bhargava, Shankar, and Tsimerman, *On the Davenport–Heilbronn Theorems and Second-Order Terms*, Theorem 20 and §§5–6.1, 8.1–8.3](https://arxiv.org/pdf/1005.0672)

[A. Landesman, *Distributions of Class Groups of Global Fields*, Lecture 3](https://people.math.harvard.edu/~landesman/assets/class-groups-notes.pdf)

## Facts & Assumptions

**Given:** A real $X>0$; $\mathcal C_\pm(X)$ count cubic fields up to $\mathbb Q$-isomorphism by absolute discriminant and sign.

[F1] Under AC and Countable Choice, for any finite prime set $S$ the fixed-good-congruence count of cubic field orders with discriminant sign $\epsilon$ has limiting density $\frac{\pi^2}{12n_\epsilon}\prod_{p\in S}(1-p^{-2})^2$, where $n_+=6,n_-=2$. [[lem-cubic-fixed-good-congruence-orbit-asymptotic]]

[F2] Under AC, the number $N(Y)$ of orders in cubic number fields of absolute discriminant below $Y$ satisfies $N(Y)\le CY$ for one absolute $C$. Given this bound and AC, Countable Choice and DC, the number nonmaximal at a prime $p$ is at most $4CX/p^2$, and the number of cubic fields totally ramified at $p$ is at most $B_CX/p^2$ for a constant independent of $p,X$. [[lem-cubic-field-order-count-linear-upper-bound]] [[lem-cubic-nonmaximal-tail-from-linear-order-bound]] [[lem-cubic-total-ramified-tail-from-linear-order-bound]]

[F3] The Euler product and Basel sum give $\prod_p(1-p^{-2})=1/\zeta(2)=6/\pi^2$. [[thm-euler-product-for-riemann-zeta]] [[cor-basel-sum-by-residues]]

[F4] In ZF, each fixed proof using ZFC holds relativized to the transitive constructible universe $\mathcal L$, and bounded arithmetic is absolute between transitive models. Integer rings of number fields are finite free over $\mathbb Z$. [[thm-constructible-inner-model-semantic-and-formal-schema]] [[thm-delta-zero-absoluteness-for-transitive-sets]] [[thm-ring-of-integers-free-of-rank-degree]]

[F5] Delone–Faddeev gives a discriminant-preserving bijection between irreducible integral cubic-form orbits and orders in cubic fields. [[thm-delone-faddeev-cubic-rings-and-binary-cubic-forms]]

## Proof

1.1 First work under AC, Countable Choice and DC. For a finite prime set $S_T=\{p:p\le T\}$, let $N_{\epsilon,T}(X)$ count cubic field orders of discriminant sign $\epsilon$ and absolute discriminant below $X$ that are maximal and not totally ramified locally at each $p\in S_T$. Every field in $\mathcal C_\epsilon(X)$ contributes its maximal order. Conversely, any counted order not arising this way is nonmaximal at some $p>T$, or is maximal but its field is totally ramified at some $p>T$. By [F2], for $D=4C+B_C$ the difference satisfies $0\le N_{\epsilon,T}(X)-|\mathcal C_\epsilon(X)|\le DX\sum_{p>T}p^{-2}$. The union bound is valid for the countable sum, which converges. [F2, F5, given, algebra]

2.1 Divide by $X$ and take upper and lower limits with fixed $T$. By [F1], both are within $D\sum_{p>T}p^{-2}$ of $\frac{\pi^2}{12n_\epsilon}\prod_{p\le T}(1-p^{-2})^2$. The error tends to zero as $T\to\infty$. By [F3] the product tends to $36/\pi^4$, so the limits exist and are $3/(n_\epsilon\pi^2)$: namely $1/(2\pi^2)$ and $3/(2\pi^2)$. Thus the Statement holds with the three choice assumptions. [F1, F3, step 1.1, algebra]

3.1 To remove ambient choice, use the constructible universe $\mathcal L$ from [F4]. Every cubic field and its integer ring have a finite rational multiplication table and a finite integral basis; these are natural-number codes in $\mathcal L$. Isomorphism of two coded fields is existence of a rational matrix satisfying finitely many multiplication identities. An integral ring is maximal exactly when no finite rational-coordinate overorder exists, an arithmetic condition on its multiplication table. For a maximal cubic ring, total ramification at $p$ is equivalent to its finite residue algebra modulo $p$ being $\mathbb F_p[t]/(t^3)$; this is a finite multiplication-table test. All these statements quantify only over integers and finite tuples, so their truth is the same inside and outside $\mathcal L$ by [F4]. Selecting the least integer code for each isomorphism class gives the same canonically coded classes in both universes, with identical discriminants and signs. [F4, step 2.1, given, construct, algebra]

4.1 Inside $\mathcal L$, apply the fixed proof in steps 1.1–2.1. The count for each positive integer bound $n$ is finite there, hence its finite list of least codes and its cardinality are the same outside by step 3.1. The constants have the same rational cuts: $\pi^2=6\sum_{j\ge1}j^{-2}$ by [F3], and the rational partial sums and the bound $\sum_{j>N}j^{-2}\le1/N$ give an explicit common approximation. The assertion that the common integer sequence divided by $n$ converges to either constant is a formula using only quantifiers over natural numbers and comparisons with these rational approximations, hence is absolute by [F4]. Finally, monotonicity squeezes any real $X\to\infty$ between adjacent positive integer bounds. This proves the original limits in ambient ZF, with no extra choice hypothesis. [F3, F4, step 2.1, step 3.1, algebra] ∎
