---
id: ex-iid-sequence-with-a-prescribed-law
kind: example
title: "An i.i.d. sequence with a prescribed law"
status: draft
origin: pipeline
deps: [thm-countable-product-of-probability-spaces, cor-coordinate-random-elements-on-a-countable-product-are-independent, def-countable-choice, def-dependent-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, Section 2.1.4"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
---

## Example

Assume countable choice and dependent choice. Given any probability law $\nu$
on $(S,\Sigma)$, equip $S^{\mathbb N}$ with its cylinder sigma-algebra and
the canonical product probability
and set $X_n(x)=x_n$. Then $(X_n)$ is an i.i.d. $S$-valued sequence with
common law $\nu$.

## Facts & Assumptions

**Given:** Countable choice, dependent choice, and a probability space
$(S,\Sigma,\nu)$, repeated at every index $n\in\mathbb N$.

[F1] The stated choice principles give the canonical countable product
probability. ([[thm-countable-product-of-probability-spaces]])

[F2] Its coordinate maps are independent copies with the prescribed law.
([[cor-coordinate-random-elements-on-a-countable-product-are-independent]])

## Verification

1.1 Apply [F1] with $(E_n,\mathcal E_n,\mu_n)=(S,\Sigma,\nu)$ for every $n\in\mathbb N$. It gives the canonical probability on the cylinder sigma-algebra of $S^{\mathbb N}$. By [F2], its coordinate maps $X_n(x)=x_n$ are independent and each has law $\nu$. [given, F1, F2]

2.1 Its finite-family conclusion is independence, while its one-coordinate conclusion is the common marginal; together these are the definition of i.i.d. [step 1.1] ∎
