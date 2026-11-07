---
id: thm-weil-bound-for-complete-polynomial-character-sums-over-finite-fields
kind: theorem
title: "Weil bound for the complete character sums used in Burgess’s proof"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps: []
justified_by: []
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  scraped: []
  references:
    - title: "Marios Voskou, Burgess bounds: Character Sums and Dirichlet L-functions, UCL lecture slides (January 27, 2021)"
      url: "https://www.homepages.ucl.ac.uk/~ucahpet/Burgess.pdf"
      locator: "Lemma 1.1, prime-modulus section Pχ(f), PDF pp. 8–12: for a polynomial with t distinct roots of multiplicities strictly between 0 and ord(χ), and degree divisible by ord(χ), the complete sum is at most (t−2)√p+1. The rational-product case follows by replacing each denominator factor with its (d−1)-st power."
---

## Statement

Let p be an odd prime, let χ be a nontrivial multiplicative character of 𝔽ₚ of order d≥2, and let r≥1 with 2r≤p. If a₁,…,aᵣ,b₁,…,bᵣ are 2r distinct elements of 𝔽ₚ, then, with each summand at denominator zeros interpreted as 0, |Σₓ∈𝔽ₚχ(∏ᵢ₌₁ʳ(x+aᵢ)/∏ⱼ₌₁ʳ(x+bⱼ))|≤(2r−2)√p+1.

## Statement references

[Marios Voskou, Burgess bounds: Character Sums and Dirichlet L-functions, UCL lecture slides (January 27, 2021), Lemma 1.1, PDF pp. 8–12.](https://www.homepages.ucl.ac.uk/~ucahpet/Burgess.pdf)

## Facts & Assumptions

**Given:** The complete objects, parameters, conventions and hypotheses in the Statement.

[L1] The UCL notes invoke the Weil bound for these complete polynomial character sums; their proof of the Burgess estimate uses this as an external deep input. [Marios Voskou, Burgess bounds: Character Sums and Dirichlet L-functions, UCL lecture slides (January 27, 2021), Theorem 2, slide 6; composite Lemma 1.2, slides 14–16; prime-modulus estimates and final optimization outline, slides 17–34.](https://www.homepages.ucl.ac.uk/~ucahpet/Burgess.pdf)
