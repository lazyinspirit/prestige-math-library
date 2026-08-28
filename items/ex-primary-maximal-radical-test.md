---
id: ex-primary-maximal-radical-test
kind: example
title: "In a concrete Artinian local quotient, maximal radical forces primaryity"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
deps: [def-primary-submodule-and-primary-ideal]
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., §18"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, §19"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
---

## Example

Let
$$ A=k[x,y]/(x^2,xy,y^2), \qquad \mathfrak m=(\bar x,\bar y). $$
Then every proper ideal $J \subsetneq A$ with $\sqrt{J}=\mathfrak m$ is
$\mathfrak m$-primary.

## Facts & Assumptions

**Given:** A field $k$, the Artinian local ring $A=k[x,y]/(x^2,xy,y^2)$ with maximal ideal $\mathfrak m=(\bar x,\bar y)$, and a proper ideal $J \subsetneq A$ satisfying $\sqrt{J}=\mathfrak m$.

[L1] A proper submodule is primary exactly when every zero divisor on the quotient acts nilpotently ([[def-primary-submodule-and-primary-ideal]]).

## Verification

**Proof technique:** direct.

1.1 In $A$, every quadratic monomial vanishes, so $$ \mathfrak m^2=(\bar x,\bar y)^2=0. $$ Consequently $(\mathfrak m/J)^2=0$ in the quotient ring $A/J$. [given, algebra]

2.1 The quotient $A/J$ is local with maximal ideal $\mathfrak m/J$. Any zero divisor in $A/J$ is a nonunit, hence lies in the maximal ideal $\mathfrak m/J$. By step 1.1 every element of $\mathfrak m/J$ is square-zero, so every zero divisor on $A/J$ acts nilpotently. [step 1.1, algebra]

3.1 Fact [L1] now shows that $J$ is primary, and its radical is $\mathfrak m$ by assumption. Hence $J$ is $\mathfrak m$-primary. [L1, step 2.1] ∎
