---
id: ex-the-dual-of-ell-two-is-ell-two-by-the-counting-measure-pairing
kind: example
title: "Every bounded linear functional on $\\ell^2$ is summation against a unique $\\ell^2$ sequence"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [cor-ell-p-duality-by-counting-measure, rem-ell-p-is-l-p-of-counting-measure]
proof_strategy: "Specialize the counting-measure duality corollary to $p=q=2$ and rewrite the integral pairing as an ordinary series."
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  references:
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., Section 6.2"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
    - title: "Richard F. Bass, Real Analysis for Graduate Students, Section 15.4"
      url: "https://www.math.wustl.edu/~victor/classes/ma5051/rags100514.pdf"
---

## Example

Every bounded linear functional $\Lambda:\ell^2\to\mathbb R$ has a unique
sequence $b=(b_n) \in \ell^2$ such that
$$\Lambda(a)=\sum_{n=0}^\infty a_nb_n\qquad(a \in \ell^2),$$
and
$$\|\Lambda\|=\|b\|_{\ell^2}.$$

## Facts & Assumptions

**Given:** A bounded linear functional $\Lambda$ on $\ell^2$.

[L1] The counting-measure corollary says that every bounded linear functional on $\ell^p$ is represented by a unique $\ell^q$ sequence, with equality of norms ([[cor-ell-p-duality-by-counting-measure]]).

[L2] On counting measure over $\mathbb N$, the integral pairing is exactly the series pairing for sequences ([[rem-ell-p-is-l-p-of-counting-measure]]).

## Verification

**Proof technique:** Specialize the counting-measure duality corollary to $p=q=2$ and rewrite the integral pairing as an ordinary series.

1.1 Apply [L1] with $p=q=2$. Then there is a unique sequence $b \in \ell^2$ such that $$\Lambda(a)=\sum_{n=0}^\infty a_nb_n$$ for every $a \in \ell^2$, and $$\|\Lambda\|=\|b\|_{\ell^2}.$$ [L1, given]

2.1 The summation formula is exactly the counting-measure integral pairing from [L2], so this is the concrete $\ell^2$ instance of the A-page theorem. [L2, step 1.1] ∎
