---
id: cor-unramified-prime-decomposition-in-a-cyclotomic-field
kind: corollary
title: Decomposition of an unramified prime in a cyclotomic field
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - thm-prime-factorisation-in-a-cyclotomic-field
  - thm-conductor-of-a-full-cyclotomic-field
  - lem-arithmetic-frobenius-on-a-cyclotomic-field
  - def-conductor-of-a-cyclotomic-field
  - def-order-in-a-group
  - def-prime-above-and-residue-degree
justified_by: []
forward_refs:
  - ex-reduced-conductor-of-q-zeta-six
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "J. S. Milne, Algebraic Number Theory, Ch. 8, Example 8.18"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
      locator: "Example 8.18, pp. 143-144: for p not dividing n the Frobenius of Q(zeta_n) has order f, the smallest integer with n | p^f - 1; the primes over p have residue degree f."
    - title: "Conrad-Landesman, Math 154 Algebraic Number Theory, Ch. 11, Theorem 11.6"
      url: "https://math.stanford.edu/~conrad/154Page/handouts/undergraduate-number-theory.pdf"
      locator: "Theorem 11.6 and Remark 11.7, pp. 61-62: for a reduced index N the unramified primes are exactly those not dividing N, with residue degrees the orders of the classes modulo N."
verification:
  audited: 2026-10-02
  precheck: pass
---

## Statement

Let $f$ be the conductor of the cyclotomic field $K=\mathbb Q(\zeta_f)$, and
let $\ell$ be a rational prime with $\ell\nmid f$. Then every prime
$\mathfrak P$ of $\mathcal O_K$ above $\ell$ has residue degree
$$\deg(\mathfrak P/\ell)=\operatorname{ord}_f(\ell),$$
the multiplicative order of $\ell$ modulo $f$, and there are exactly
$\varphi(f)/\operatorname{ord}_f(\ell)$ such primes.

## Facts & Assumptions

**Given:** A cyclotomic field $K=\mathbb Q(\zeta_f)$ presented by its conductor
$f$, so that $f$ is the least admissible index for $K$
([[def-conductor-of-a-cyclotomic-field]]), a rational prime $\ell$ with
$\ell\nmid f$, and the factorisation $f=\ell^{a}m$ with $\gcd(\ell,m)=1$ (so
$a=0$ and $m=f$ under the hypothesis $\ell\nmid f$).

[F1] The conductor $f$ of a full cyclotomic field is a reduced index: it is odd
or divisible by $4$ ([[thm-conductor-of-a-full-cyclotomic-field]],
[[def-conductor-of-a-cyclotomic-field]]).

[F2] Prime factorisation in a reduced cyclotomic field: for the reduced index
$f$, a rational prime $\ell$, and $f=\ell^{a}m$ with $\gcd(\ell,m)=1$,
$$\ell\mathcal O_K=(P_1\cdots P_g)^{e},\qquad e=\varphi(\ell^{a}),\ d=\operatorname{ord}_m(\ell),\ g=\varphi(m)/d,$$
with the $P_i$ pairwise distinct primes of residue degree $d$; here
$\operatorname{ord}_1(\ell)=1$
([[thm-prime-factorisation-in-a-cyclotomic-field]]).

[F3] For $\ell\nmid f$ the arithmetic Frobenius at every prime above $\ell$
is the automorphism
$\sigma_\ell$ with $\sigma_\ell(\zeta_f)=\zeta_f^{\,\ell}$
([[lem-arithmetic-frobenius-on-a-cyclotomic-field]]).

## Proof

**Proof technique:** direct.

1.1 By [F1], $f$ is a reduced index; as $\ell\nmid f$ the $\ell$-adic valuation is $a=0$, so $m=f$ and $e=\varphi(1)=1$. [F1]

2.1 Applying [F2] with $a=0$, $m=f$, the ideal $\ell\mathcal O_K$ factors as $P_1\cdots P_g$ with $g=\varphi(f)/d$ pairwise distinct primes of residue degree $d=\operatorname{ord}_f(\ell)$, so $\ell$ is unramified and these are exactly the primes above $\ell$. [F2, step 1.1]

3.1 Therefore every prime above $\ell$ has residue degree $\operatorname{ord}_f(\ell)$ and their number is $\varphi(f)/\operatorname{ord}_f(\ell)$. This degree also equals the order of the arithmetic Frobenius in [F3]: for $r\ge1$, $\sigma_\ell^r(\zeta_f)=\zeta_f^{\ell^r}$, so, since $\zeta_f$ has order $f$ and generates $K$, $\sigma_\ell^r=\mathrm{id}$ exactly when $\ell^r\equiv1\pmod f$. The least such $r$ is $\operatorname{ord}_f(\ell)$, including $r=1$ for $f=1$. [F2, F3, step 2.1, given] ∎

## Remarks

- **Conductor versus displayed index.** The statement is about the conductor
  $f$; for an unreduced displayed index such as $6$ the count and degrees are
  those of the reduced index $3$, as recorded in
  [[ex-reduced-conductor-of-q-zeta-six]].
- **Order-one convention.** For $f=1$ one has $\operatorname{ord}_1(\ell)=1$
  and the formula gives the single prime $\ell\mathbb Z=\ell\mathcal O_{\mathbb Q}$,
  consistent with $\varphi(1)=1$.
