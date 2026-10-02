---
id: cor-quadratic-reciprocity-via-frobenius
kind: corollary
title: Quadratic reciprocity via Frobenius
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - thm-quadratic-frobenius-restriction-identity
  - thm-legendre-symbol-multiplicativity
  - thm-first-supplement-to-quadratic-reciprocity
  - def-legendre-symbol
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "J. S. Milne, Algebraic Number Theory, Ch. 8, Example 8.19"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
      locator: "Example 8.19, pp. 143-144: (q, K/Q) restricts to (q/p) on the quadratic subfield and also equals (d/q) for d = (-1)^{(p-1)/2}p; multiplying by the first supplement gives the reciprocity law."
    - title: "Jerry Shurman, Math 361 Ninth Lecture, section 4"
      url: "https://people.reed.edu/~jerry/361/lectures/lec09.pdf"
      locator: "Lecture 9, section 4, pp. 7-8: the Frobenius restriction identity Frob_{q,F}: sqrt(p*) -> (p*/q) sqrt(p*) together with Frob_{q,F}: sqrt(p*) -> (q/p) sqrt(p*)."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement

For distinct odd primes $p$ and $q$,
$$\left(\frac pq\right)\left(\frac qp\right)=(-1)^{(p-1)(q-1)/4}.$$

## Facts & Assumptions

**Given:** Distinct odd primes $p$ and $q$, and
$p^{*}=(-1)^{(p-1)/2}p$.

[F1] Quadratic Frobenius restriction identity: for distinct odd primes $p,q$,
$$\left(\frac{p^{*}}q\right)=\left(\frac qp\right)$$
([[thm-quadratic-frobenius-restriction-identity]]).

[F2] Legendre symbol multiplicativity: $(ab/q)=(a/q)(b/q)$ for all integers
$a,b$; consequently $(((-1)^{k}p)/q)=((-1)/q)^{k}(p/q)$ for every integer $k\ge0$,
and $(a/q)\in\{-1,0,1\}$ with $(a/q)=0$ exactly when $q\mid a$
([[thm-legendre-symbol-multiplicativity]], [[def-legendre-symbol]]).

[F3] First supplement: $(-1/q)=(-1)^{(q-1)/2}$
([[thm-first-supplement-to-quadratic-reciprocity]]).

[F4] $q\nmid p$, so $(p/q)\ne0$ and hence $(p/q)^{2}=1$
([[def-legendre-symbol]]).

## Proof

**Proof technique:** direct.

1.1 By [F2], $p^{*}=(-1)^{(p-1)/2}p$ gives $\left(\frac{p^{*}}q\right)=\left(\frac{-1}q\right)^{(p-1)/2}\left(\frac pq\right)$. [F2]

1.2 By [F3], $\left(\frac{-1}q\right)^{(p-1)/2}=(-1)^{((p-1)/2)((q-1)/2)}=(-1)^{(p-1)(q-1)/4}$, the exponent $(p-1)(q-1)/4$ being an integer because $p-1$ and $q-1$ are even. [F3, algebra]

1.3 Since $p\ne q$, the symbol $(p/q)$ is $\pm1$, so $(p/q)^{2}=1$. [F4]

2.1 Substituting step 1.2 into step 1.1 gives $\left(\frac{p^{*}}q\right)=(-1)^{(p-1)(q-1)/4}\left(\frac pq\right)$. [step 1.1, step 1.2]

3.1 Combining with [F1], $\left(\frac qp\right)=\left(\frac{p^{*}}q\right)=(-1)^{(p-1)(q-1)/4}\left(\frac pq\right)$. [F1, step 2.1]

4.1 Multiplying both sides of step 3.1 by $\left(\frac pq\right)$ and using $(p/q)^{2}=1$ from step 1.3 yields $\left(\frac pq\right)\left(\frac qp\right)=(-1)^{(p-1)(q-1)/4}\left(\frac pq\right)^{2}=(-1)^{(p-1)(q-1)/4}$. [step 1.3, step 3.1] ∎

## Remarks

- **The earlier reciprocity theorem is not used.** The only inputs are the
  Frobenius restriction identity, Legendre multiplicativity and the first
  supplement; in particular neither the published quadratic reciprocity
  theorem nor an analytic Gauss-sum sign is a supplier.
- **Symmetry check.** $(p-1)(q-1)/4$ is symmetric in $p$ and $q$, as the
  product form must be; the two special values $p=q$ and the case $p=2$ are
  excluded, the latter being exactly the case covered by the second supplement
  [[cor-second-supplement-via-cyclotomic-frobenius]].
