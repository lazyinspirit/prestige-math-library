---
id: ex-zariski-spectrum-of-the-integers
kind: example
title: "The spectrum of the integers has one generic point, closed points (p), and basic opens D(n)"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-principal-distinguished-subset-of-spectrum, cor-specialisation-order-is-prime-inclusion, cor-closed-points-of-spectrum-are-maximal-ideals]
justified_by: []
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, §14"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., §13"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Example

The prime spectrum of $\mathbb Z$ consists of the generic point $(0)$ together with the closed points $(p)$ for prime numbers $p$. For a nonzero integer $n$, the distinguished open subset $D(n)$ is $$ D(n)=\{(0)\}\cup\{(p):p\nmid n\}. $$

## Facts & Assumptions

**Given:** The ring $\mathbb Z$.

[L1] A point is a specialization of another exactly when the corresponding prime ideal contains the first one ([[cor-specialisation-order-is-prime-inclusion]]).

[L2] Closed points of a spectrum are exactly maximal ideals ([[cor-closed-points-of-spectrum-are-maximal-ideals]]).

[L3] $D(n)$ is the set of prime ideals that do not contain $n$ ([[def-principal-distinguished-subset-of-spectrum]]).

[A1] The prime ideals of $\mathbb Z$ are exactly $(0)$ and the ideals $(p)$ for prime numbers $p$, and the maximal ideals are exactly the ideals $(p)$.

## Verification

**Proof technique:** direct.

1.1 By [A1], the points of $\operatorname{Spec}(\mathbb Z)$ are $(0)$ and the prime ideals $(p)$. Since $(0)\subseteq(p)$ for every prime number $p$, fact [L1] shows that every $(p)$ is a specialization of $(0)$. Thus $(0)$ is the unique generic point. [L1, A1, given]

1.2 Fact [A1] says that the maximal ideals of $\mathbb Z$ are exactly the ideals $(p)$, so [L2] shows that the closed points of the spectrum are exactly the points $(p)$. [L2, A1]

1.3 For a nonzero integer $n$, fact [L3] says that $D(n)$ consists of the prime ideals that do not contain $n$. The point $(0)$ never contains a nonzero integer, and $(p)$ contains $n$ exactly when $p$ divides $n$. Hence $D(n)=\{(0)\}\cup\{(p):p\nmid n\}$. [L3, A1, given]

2.1 Therefore $\operatorname{Spec}(\mathbb Z)$ has one generic point, closed points $(p)$, and the distinguished opens described above. [step 1.1, step 1.2, step 1.3] ∎
