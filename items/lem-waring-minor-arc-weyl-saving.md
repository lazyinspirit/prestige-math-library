---
id: lem-waring-minor-arc-weyl-saving
kind: lemma
title: "A Weyl saving on the chosen Waring minor arcs"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
  - def-real-power
  - def-waring-one-variable-mean-value
  - alg-circle-method-major-minor-arc-decomposition
  - thm-dirichlet-rational-approximation-with-denominator-range
  - thm-classical-weyl-inequality
  - lem-integer-part
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: n/a
sources:
  references:
    - title: "T. D. Wooley, Vinogradov's Mean Value Theorem via Efficient Congruencing"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n3-p12-p.pdf"
      locator: "§10, minor-arc estimate in the proof of Theorem 1.4, printed p. 1620"
    - title: "N. Assing, The Circle Method and Waring's Problem"
      url: "https://www.math.uni-bonn.de/people/assing/lectures/circle_method.pdf"
      locator: "§5.1, Weyl's inequality and rational approximation, printed pp. 28–30"
---

## Statement

Let $k\ge2$ and $N\ge16$ be integers, put $P=\lfloor N^{1/8}\rfloor$ and $Q=\lfloor N^{1/16}\rfloor$, and let $\mathbb T=\mathbb R/\mathbb Z$ have distance $\|t\|_{\mathbb T}=\min_{m\in\mathbb Z}|t-m|$. Let $\mathfrak m$ be the complement of the arcs
$$\left\{\alpha\in\mathbb T:\left\|\alpha-\frac aq\right\|_{\mathbb T}\le\frac{16P}{qN^k}\right\},\qquad 1\le q\le Q,\quad 0\le a<q,$$
where $a$ and $q$ have no positive common divisor other than $1$.
For every $\varepsilon>0$ there is a constant $C_{k,\varepsilon}$ such that, with $\delta_k=1/(16\cdot2^{k-1})$,
$$\sup_{\alpha\in\mathfrak m}\left|\sum_{x=1}^N e(\alpha x^k)\right|\le C_{k,\varepsilon}N^{1-\delta_k+\varepsilon},$$
where $e(t)=\exp(2\pi i t)$.

## Statement references

[Wooley, §10, minor-arc estimate](https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n3-p12-p.pdf)

[Assing, §5.1](https://www.math.uni-bonn.de/people/assing/lectures/circle_method.pdf)

## Facts & Assumptions

**Given:** The parameters and minor arcs in the Statement.

[F1] Dirichlet approximation supplies coprime $a,q$ with $q\le Y$ and $|\alpha-a/q|\le1/(qY)$ for every $Y\ge1$ ([[thm-dirichlet-rational-approximation-with-denominator-range]]).

[F2] If $(a,q)=1$ and $|\alpha-a/q|\le q^{-2}$, then for every $\eta>0$,
$$\left|\sum_{x=1}^Ne(\alpha x^k)\right|\le C_{k,\eta}N^{1+\eta}\left(q^{-1}+N^{-1}+qN^{-k}\right)^{1/2^{k-1}}$$
([[thm-classical-weyl-inequality]]).

[F3] For $t\ge1$, $\lfloor t\rfloor\ge t/2$ ([[lem-integer-part]]).

## Proof

**Proof technique:** Dirichlet approximation followed by Weyl's inequality.

1.1 Apply [F1] with $Y=N^k/(16P)\ge1$. It gives coprime $a,q$ with $q\le Y$ and $|\alpha-a/q|\le16P/(qN^k)$. Since $q\le Y$, this error is at most $q^{-2}$. If $q\le Q$, the point $\alpha$ lies in one of the removed arcs, contrary to $\alpha\in\mathfrak m$. Hence $q>Q$. [F1, given, algebra]

1.2 From [F3], $Q\ge N^{1/16}/2$ and $P\ge N^{1/8}/2$. Consequently
$$q^{-1}<Q^{-1}\le2N^{-1/16},\qquad N^{-1}\le N^{-1/16},\qquad qN^{-k}\le YN^{-k}=\frac1{16P}\le\frac18N^{-1/8}\le\frac18N^{-1/16}.$$
Thus the parenthesis in [F2] is at most $4N^{-1/16}$. [F2, F3, step 1.1, algebra]

2.1 Apply [F2] with $\eta=\varepsilon$. By step 1.2,
$$\left|\sum_{x=1}^Ne(\alpha x^k)\right|\le C_{k,\varepsilon}N^{1+\varepsilon}(4N^{-1/16})^{1/2^{k-1}}\le C'_{k,\varepsilon}N^{1-\delta_k+\varepsilon},$$
uniformly in $\alpha\in\mathfrak m$. Taking the supremum proves the assertion. [F2, step 1.2, algebra] ∎
