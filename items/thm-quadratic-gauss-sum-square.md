---
id: thm-quadratic-gauss-sum-square
kind: theorem
title: Square of the quadratic Gauss sum
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-quadratic-gauss-sum-in-a-cyclotomic-field
  - thm-legendre-symbol-multiplicativity
  - thm-first-supplement-to-quadratic-reciprocity
  - prop-legendre-symbol-on-units-is-homomorphism
  - def-legendre-symbol
  - def-roots-of-unity-in-a-field
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Jerry Shurman, Math 361 Ninth Lecture, section 2"
      url: "https://people.reed.edu/~jerry/361/lectures/lec09.pdf"
      locator: "Lecture 9 section 2, pp. 5-6: evaluation of tau_p^2 by the substitution t = su and the two inner geometric sums."
    - title: "J. S. Milne, Algebraic Number Theory, Ch. 8, Example 8.19"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
      locator: "Ch. 8, Example 8.19, p. 144: tau_p^2 = (-1)^{(p-1)/2} p."
verification:
  audited: 2026-10-02
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement

For every odd prime $p$ and every primitive $p$-th root of unity $\zeta_p$,
with $\tau_p=\sum_{a\bmod p}(a/p)\zeta_p^{\,a}$,
$$\tau_p^{2}=p^{*}=(-1)^{(p-1)/2}p .$$

## Facts & Assumptions

**Given:** An odd prime $p$, a fixed primitive $p$-th root of unity
$\zeta=\zeta_p$ in a fixed algebraic closure of $\mathbb Q$, and the Gauss sum
$\tau:=\tau_p=\sum_{a\bmod p}(a/p)\zeta^{a}$.

[F1] $\tau=\sum_{s=1}^{p-1}(s/p)\zeta^{s}\in\mathbb Z[\zeta]$, the term
$a=0$ vanishing because $(0/p)=0$
([[def-quadratic-gauss-sum-in-a-cyclotomic-field]],
[[def-legendre-symbol]]).

[F2] The Legendre symbol is multiplicative for all integer numerators:
$(uv/p)=(u/p)(v/p)$ for all $u,v\in\mathbb Z$
([[thm-legendre-symbol-multiplicativity]]).

[F3] Restricted to $(\mathbb Z/p)^{\times}$ the Legendre symbol is a surjective
homomorphism onto $\{\pm1\}$ with kernel the nonzero square classes
([[prop-legendre-symbol-on-units-is-homomorphism]]); hence
$\sum_{u=1}^{p-1}(u/p)=0$, because choosing $v$ with $(v/p)=-1$ and
substituting $u\mapsto vu$ permutes the nonzero classes and multiplies the sum
by $-1$, forcing it to be $0$.

[F4] First supplement: $(-1/p)=(-1)^{(p-1)/2}$
([[thm-first-supplement-to-quadratic-reciprocity]]).

[F5] For an element $x$ with $x^{p}=1$ and $x\ne1$ one has
$\sum_{s=0}^{p-1}x^{s}=\frac{x^{p}-1}{x-1}=0$, so
$\sum_{s=1}^{p-1}x^{s}=-1$; and $\zeta$ has order $p$, so
$\zeta^{1+u}\ne1$ exactly when $u\not\equiv-1\pmod p$
([[def-roots-of-unity-in-a-field]]).

## Proof

**Proof technique:** direct.

1.1 Squaring the sum of [F1] and multiplying out the finite product of sums gives $\tau^{2}=\sum_{s=1}^{p-1}\sum_{t=1}^{p-1}(s/p)(t/p)\zeta^{s+t}$. [F1]

1.2 For every integer $u\not\equiv0\pmod p$ the inner geometric sum over $s$ is $\sum_{s=1}^{p-1}\zeta^{s(1+u)}=-1$ when $u\not\equiv-1\pmod p$, while for $u\equiv-1\pmod p$ it equals $\sum_{s=1}^{p-1}1=p-1$. [F5]

2.1 Multiplication by $u$ permutes the nonzero classes modulo $p$, so substituting $t\equiv su\pmod p$ in the double sum of step 1.1 rewrites it as $\tau^{2}=\sum_{u=1}^{p-1}\sum_{s=1}^{p-1}(s/p)(su/p)\zeta^{s(1+u)}=\sum_{u=1}^{p-1}(u/p)\sum_{s=1}^{p-1}\zeta^{s(1+u)}$, using multiplicativity of the Legendre symbol in the last equality. [F2, step 1.1]

3.1 Substituting the two evaluations of step 1.2, the contribution of $u\equiv-1\pmod p$ is $(-1/p)(p-1)$ and every other $u$ contributes $-(u/p)$; hence $\tau^{2}=(-1/p)(p-1)-\bigl(\sum_{u=1}^{p-1}(u/p)-(-1/p)\bigr)=p\,(-1/p)-\sum_{u=1}^{p-1}(u/p)=p\,(-1/p)$, since the character sum vanishes by [F3]. [F3, step 1.2, step 2.1]

4.1 By the first supplement [F4], $(-1/p)=(-1)^{(p-1)/2}$, so $\tau^{2}=(-1)^{(p-1)/2}p=p^{*}$. [F4, step 3.1] ∎

## Remarks

- **Only finite sums and the first supplement are used.** Neither quadratic
  reciprocity nor any analytic determination of the sign of $\tau_p$ enters;
  the square $p^{*}$ is insensitive to replacing $\zeta_p$ by another primitive
  $p$-th root, since that multiplies $\tau_p$ by $\pm1$.
- **Nonvanishing.** Since $p^{*}=\pm p\ne0$ in the domain $\mathbb Z[\zeta_p]$,
  the identity shows that $\tau_p\ne0$, which is what makes the fixed field
  computation in [[thm-quadratic-subfield-of-a-prime-cyclotomic-field]]
  possible.
