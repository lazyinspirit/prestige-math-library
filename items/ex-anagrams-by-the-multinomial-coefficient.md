---
id: ex-anagrams-by-the-multinomial-coefficient
kind: example
title: "Arrangements of a word with repeated letters, counted by the multinomial coefficient"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-multinomial-coefficient, thm-multinomial-theorem, def-nat-finite-sum-and-product,
       def-finite-cardinality, def-factorial-and-falling-factorial, lem-nat-mult-cancellative]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-08-02
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Anagram (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Anagram"
    - title: "Multinomial theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Multinomial_theorem"
    - title: "Permutation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Permutation"
pipeline_run: null
---

## Example

Take the eleven-letter word $\mathrm{MISSISSIPPI}$, over the four-letter alphabet
$\{\mathrm{M},\mathrm{I},\mathrm{S},\mathrm{P}\}$, in which $\mathrm{M}$ occurs
once, $\mathrm{I}$ four times, $\mathrm{S}$ four times and $\mathrm{P}$ twice.
The number of distinct arrangements of its letters is

$$\binom{11}{1,4,4,2} = \frac{11!}{1!\,4!\,4!\,2!} = \frac{39916800}{1152} = 34650 .$$

**The modelling step is the mathematics.** An arrangement is a function from the
set of eleven positions to the four-letter alphabet whose fibre over each letter
has the prescribed size; that is literally an element of $\mathcal{B}(A,k)$ in
[[def-multinomial-coefficient]], with $A$ the set of positions, $m = 4$ and
$k = (1,4,4,2)$.

## Facts & Assumptions

**Given:** The position set $A$ with $\lvert A\rvert = 11$, the alphabet identified with $4 = \{0,1,2,3\}$ by $0 \mapsto \mathrm{M}$, $1 \mapsto \mathrm{I}$, $2 \mapsto \mathrm{S}$, $3 \mapsto \mathrm{P}$, and the tuple $k = (1,4,4,2)$; the factorials $1! = 1$, $2! = 2$, $4! = 24$ and $11! = 39916800$ ([[def-factorial-and-falling-factorial]]).

[L1] $\mathcal{B}(A,k)$ is the set of $c : A \to m$ with $\lvert c^{-1}[\{i\}]\rvert = k_i$ for every $i<m$; it is nonempty only if $\sum_{i<m}k_i = \lvert A\rvert$, and its cardinality is $\binom{\lvert A\rvert}{k}$ ([[def-multinomial-coefficient]], [[def-finite-cardinality]]).

[L2] $\binom{n}{k}\prod_{i<m}k_i! = n!$ ([[thm-multinomial-theorem]], clause 1).

[L3] Finite sums and products in $\mathbb{N}$ and cancellation by a nonzero natural ([[def-nat-finite-sum-and-product]], [[lem-nat-mult-cancellative]]).

## Verification

**Proof technique:** direct.

1.1 The modelling. An arrangement of the letters of $\mathrm{MISSISSIPPI}$ is a function $c$ assigning to each of the eleven positions one of the four letters, subject to the letter multiplicities; that is, $\lvert c^{-1}[\{0\}]\rvert = 1$, $\lvert c^{-1}[\{1\}]\rvert = 4$, $\lvert c^{-1}[\{2\}]\rvert = 4$ and $\lvert c^{-1}[\{3\}]\rvert = 2$. So the set of arrangements is exactly $\mathcal{B}(A,k)$ with $k = (1,4,4,2)$. [given, L1]

2.1 The hypothesis is satisfied, and it must be checked before the coefficient is written down: $\sum_{i<4}k_i = 1+4+4+2 = 11 = \lvert A\rvert$, so $k \in \mathcal{W}(11,4)$ and $\binom{11}{1,4,4,2}$ is defined. [step 1.1, L1, L3]

3.1 The value. By [L2], $\binom{11}{1,4,4,2}\cdot(1!\cdot 4!\cdot 4!\cdot 2!) = 11!$, that is $\binom{11}{1,4,4,2}\cdot(1\cdot 24\cdot 24\cdot 2) = 39916800$; the product of factorials is $1152$, and $1152 \cdot 34650 = 39916800$, so cancellation by the nonzero factor $1152$ gives $\binom{11}{1,4,4,2} = 34650$. [step 2.1, L2, L3]

4.1 Hence the word has exactly $34650$ distinct arrangements, this being $\lvert\mathcal{B}(A,k)\rvert$ by [L1]. [step 1.1, step 3.1, L1] ∎

## Remarks

- **Why the letters are identified with $\{0,1,2,3\}$.** [[def-multinomial-coefficient]] takes the colour set to be a natural number, so the alphabet has to be presented as one; any bijection will do, and the count does not depend on which. A different identification permutes the tuple $k$, and by clause 1 of [[thm-multinomial-theorem]] the coefficient is determined by $n$ together with the product $\prod_{i<m} k_i!$, which a permutation of the parts leaves unchanged. The invariance clause of [[def-multinomial-coefficient]] is a different statement: it says the count depends only on $\lvert A\rvert$, that is, only on the domain up to bijection.

- **The check in step 2.1 is not a formality.** If the multiplicities did not sum to the length, $\mathcal{B}(A,k)$ would be empty and the symbol $\binom{11}{k}$ would not be defined at all.
