---
id: lem-cotangent-localization-at-rational-point
kind: lemma
title: "Cotangent spaces commute with localization at a rational point"
status: published
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-zariski-cotangent-space-point
  - thm-localisation-at-a-prime-is-local
  - prop-localisation-zero-equality-and-kernel-criteria
  - def-localisation-at-a-prime-ideal
  - thm-ideal-correspondence-for-localisation
  - def-sum-and-product-of-ideals
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry, v6.10, Ch. 1 §b Lemma 1.15; Ch. 4 §f item 4.30(d) and §g"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"

---

## Statement

Let $k$ be a field, let $A$ be a commutative $k$-algebra, and let $\mathfrak m\subset A$ be a maximal ideal whose residue field is $A/\mathfrak m=k$ via the structure map. Set $S=A\setminus\mathfrak m$, $A_{\mathfrak m}=S^{-1}A$, and $\mathfrak n=\mathfrak m A_{\mathfrak m}$. Use the conventions $\mathfrak m^0=A$ and $\mathfrak m^{r+1}=\mathfrak m^r\mathfrak m$, and similarly for $\mathfrak n$. For every $r\in\mathbb N$, the canonical map

$$\theta_r:\mathfrak m^r/\mathfrak m^{r+1}\longrightarrow\mathfrak n^r/\mathfrak n^{r+1},\qquad [a]\longmapsto a/1+\mathfrak n^{r+1}$$

is an isomorphism. At $r=1$ this is the localization comparison for the intrinsic cotangent space [[def-zariski-cotangent-space-point]].

## Facts & Assumptions

**Given:** A field $k$, a commutative $k$-algebra $A$, and a maximal ideal $\mathfrak m$ such that $A/\mathfrak m=k$ as a $k$-algebra.

[F1] [[def-zariski-cotangent-space-point]]: the intrinsic cotangent space at a point is the maximal ideal of its local ring modulo its square, over the residue field.

[F2] [[def-localisation-at-a-prime-ideal]]: for a prime ideal $\mathfrak p$, $A_{\mathfrak p}=(A\setminus\mathfrak p)^{-1}A$ and its elements are fractions $a/s$ with $s\notin\mathfrak p$.

[F3] [[thm-localisation-at-a-prime-is-local]]: $A_{\mathfrak p}$ is local with unique maximal ideal $\mathfrak pA_{\mathfrak p}=\{a/s:a\in\mathfrak p,\ s\notin\mathfrak p\}$.

[F4] [[thm-ideal-correspondence-for-localisation]]: for an ideal $I$ of $A$, its extension is $S^{-1}I=\{a/s:a\in I,\ s\in S\}$.

[F5] [[prop-localisation-zero-equality-and-kernel-criteria]]: $a/s=b/t$ in $S^{-1}A$ exactly when $u(at-bs)=0$ for some $u\in S$.

[F6] [[def-sum-and-product-of-ideals]]: the product $IJ$ of ideals consists of finite sums of products $ij$ with $i\in I$ and $j\in J$.

## Proof

**Proof technique:** direct.

1.1 Localization of the powers. If $ab\in\mathfrak m$, then $\bar a\bar b=0$ in the field $A/\mathfrak m$, so $\bar a=0$ or $\bar b=0$; hence $\mathfrak m$ is prime and $S=A\setminus\mathfrak m$ is multiplicative. By [F2] and [F3], $A_{\mathfrak m}=S^{-1}A$ and its maximal ideal is $\mathfrak n$. By [F4], $\mathfrak n=S^{-1}\mathfrak m$ and each extension $S^{-1}I$ consists of fractions with numerator in $I$. With the stated recursive convention for powers, [F6] gives $\mathfrak n^r=S^{-1}(\mathfrak m^r)$ for every $r\ge0$: it holds for $r=0$. If it holds at $r$, every element of $\mathfrak n^{r+1}=\mathfrak n^r\mathfrak n$ is a finite sum of products $(a_i/s_i)(b_i/t_i)=a_ib_i/(s_it_i)$ with $a_i\in\mathfrak m^r$ and $b_i\in\mathfrak m$, so it lies in $S^{-1}(\mathfrak m^{r+1})$. Conversely, writing a numerator in $\mathfrak m^{r+1}=\mathfrak m^r\mathfrak m$ as a finite sum of such products expresses every fraction in $S^{-1}(\mathfrak m^{r+1})$ as an element of $\mathfrak n^{r+1}$. Therefore $\theta_r$ is well-defined. [F2, F3, F4, F6, given, algebra]

2.1 Injectivity. Suppose $a\in\mathfrak m^r$ and $\theta_r([a])=0$. By step 1.1 and [F4], $a/1=b/s$ for some $b\in\mathfrak m^{r+1}$ and $s\in S$. By [F5], there is $u\in S$ with $u(as-b)=0$, so $us\,a=ub\in\mathfrak m^{r+1}$. The residue of $us$ in the field $A/\mathfrak m$ is nonzero; choose $t\in A$ whose residue is its inverse. Then $v=tus-1\in\mathfrak m$ and $a=tus\,a-va\in\mathfrak m^{r+1}+\mathfrak m\mathfrak m^r=\mathfrak m^{r+1}$. Thus $[a]=0$ and $\theta_r$ is injective. [step 1.1, F4, F5, F6, given, algebra]

3.1 Surjectivity and boundary instances. Let a class in $\mathfrak n^r/\mathfrak n^{r+1}$ be represented, by step 1.1 and [F4], by $a/s$ with $a\in\mathfrak m^r$ and $s\in S$. Choose $t\in A$ whose residue is the inverse of the nonzero residue of $s$. Then $1-ts\in\mathfrak m$, and $(a/s)-(ta/1)=((1-ts)a)/s\in S^{-1}(\mathfrak m^{r+1})=\mathfrak n^{r+1}$. Hence the class is $\theta_r([ta])$, proving surjectivity. This covers $r=0$, where the map is $A/\mathfrak m\to A_{\mathfrak m}/\mathfrak n$, and $r=1$, the cotangent-space map of [F1]. If $\mathfrak m=0$, then $A=k$: $\theta_0$ is the identity of $k$ and for every $r\ge1$ both sides are zero. The lifts $t$ above are chosen separately for each displayed fraction, so no choice principle is used. [step 1.1, F1, F4, F6, given, algebra] ∎
