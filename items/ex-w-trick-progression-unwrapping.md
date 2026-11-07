---
id: ex-w-trick-progression-unwrapping
kind: example
title: "Unwrapping a W-tricked progression of prime values"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - lem-unwrap-w-tricked-progression-to-primes
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Ben Green and Terence Tao, The primes contain arbitrarily long arithmetic progressions, Annals of Mathematics 167 (2008)"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v167-n2-p03.pdf"
      locator: "§9, proof of Theorem 1.1, printed pp. 523–524"
---
## Example

For $W=2$, $b=1$, and the index progression $2,5,8$, the W-tricked values are $Wn+b=5,11,17$. A positive prime is an integer greater than $1$ whose only positive divisors are $1$ and itself. The unwrapping lemma gives a prime progression with common difference $6$.

## Example references

[[lem-unwrap-w-tricked-progression-to-primes|Unwrapping a supported W-tricked progression]]

[Green and Tao, §9, proof of Theorem 1.1](https://annals.math.princeton.edu/wp-content/uploads/annals-v167-n2-p03.pdf)

## Facts & Assumptions

**Given:** $W=2$, $b=1$, and the index progression $2,5,8$.

[F1] [[lem-unwrap-w-tricked-progression-to-primes]]: If $W(n_0+jd)+b$ is a positive prime for every $j=0,\ldots,k-1$ and $d>0$, these values form a prime progression with common difference $Wd$.

## Proof

1.1 The indices have common difference $3$, and their W-tricked values are $2\cdot2+1=5$, $2\cdot5+1=11$, and $2\cdot8+1=17$. If an integer $m>1$ is composite, it has a factor $u$ with $2\le u\le\sqrt m$: write $m=uv$ with $1<u\le v$, so $u^2\le uv=m$. For $5$, the only integer $u$ in this range is $2$, and $5$ is not divisible by $2$. For $11$, the candidates are $2,3$, and its remainders are $1,2$. For $17$, the candidates are $2,3,4$, and its remainders are $1,2,1$. Thus none has a proper factor and all three are prime. [given, algebra]

1.2 Applying [F1] to these prime values gives common difference $W\cdot3=6>0$. Thus $5,11,17$ is the claimed prime progression. [F1, step 1.1, algebra] ∎
