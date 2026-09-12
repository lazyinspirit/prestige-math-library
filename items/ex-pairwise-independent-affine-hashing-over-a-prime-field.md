---
id: "ex-pairwise-independent-affine-hashing-over-a-prime-field"
kind: "example"
title: "Pairwise independent affine hashing over a prime field"
status: published
origin: "pipeline"
deps: ["def-pairwise-independent-hash-family-interface", "thm-z-mod-p-is-a-field"]
justified_by: []
landmark: false
provenance:
  statement: ai-generated
  proof: ai-altered
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  scraped: []
  references:
    - title: "Local finite-field affine-hashing calculation"
      url: https://cs.yale.edu/homes/aspnes/classes/469/notes.pdf
generation:
  role: example
proof_strategy: "direct"
---

## Example

In $\mathbb F_5=\mathbb Z/5$, take all 25 seeds $(a,b)$ and $h_{a,b}(x)=ax+b$, including zero slope. At inputs 1,3, the outputs 2,4 come from the unique seed $(1,1)$. Each ordered output pair occurs once, but the family is not three-wise independent, since $h(2)=2h(1)-h(0)$.

## Facts & Assumptions

**Given:** Uniform sampling of the 25 ordered residue pairs. All following arithmetic is modulo 5.

[F1] Affine maps over a finite field have uniform marginals and exactly one seed for each prescribed output pair at distinct inputs ([[def-pairwise-independent-hash-family-interface]]).

[F2] The residue ring modulo a prime is a field ([[thm-z-mod-p-is-a-field]]).

## Verification

1.1 The integer 5 is prime: it is greater than one, and its possible positive proper divisors 2,3,4 do not divide it (remainders 1,2,1 respectively). Therefore F2 constructs the field used here, with residues 0,1,2,3,4. Its nonzero inverses are $1^{-1}=1$, $2^{-1}=3$, $3^{-1}=2$, $4^{-1}=4$, as $1,6,6,16$ all have remainder one. In particular division by the difference $3-1=2$ is valid. [F2, given]

2.1 Solving $a+b=2$ and $3a+b=4$ gives $2a=2$, hence $a=3\cdot2=1$ and $b=1$. Direct substitution gives $h(1)=2$, $h(3)=4$. More generally outputs u,v give $a=3(v-u)$, $b=u-a$, a unique seed as in F1. Each joint output has probability $1/25$ and each marginal $1/5$, so these two values are independent uniform. This counts all slopes, including zero when u=v. [step 1.1, F1]

3.1 For every seed, $h(0)=b$, $h(1)=a+b$, and $h(2)=2a+b=2h(1)-h(0)$. Thus $h(0)=0$ and $h(1)=0$ force b=a=0 and consequently $h(2)=0$. The event $(h(0),h(1),h(2))=(0,0,1)$ has probability zero, whereas three independent uniform values would give $1/125$. This is a concrete failure of three-wise independence, consistent with the pairwise conclusion. [step 2.1, given] ∎
