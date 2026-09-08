---
id: lem-equality-case-for-a-finite-sum-of-unit-complex-numbers
kind: lemma
title: "Equality in the unit-complex finite-sum bound"
status: published
origin: pipeline
pipeline_run: phase-2-wave-1
deps: [def-complex-conjugate-real-imaginary-part-and-modulus, def-sum-over-a-finite-index-set, lem-finite-sum-laws, def-finite-sum-in-a-commutative-monoid, lem-finite-sum-reindexing-and-fubini, lem-complex-conjugation-and-modulus-laws, thm-induction-principle, lem-of-square-monotone]
justified_by: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-09
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Etingof et al., Introduction to Representation Theory"
      url: "https://math.mit.edu/~etingof/reprbook.pdf"
---

## Statement

For an integer $n>0$ and $z_1,\ldots,z_n\in\mathbb C$ with $|z_i|=1$, one has $|\sum_{i=1}^n z_i|\le n$. Equality holds if and only if all the $z_i$ are equal. This includes $n=1$.

## Facts & Assumptions

**Given:** $n>0$ and $|z_i|=1$ for $1\le i\le n$; natural scalars in inequalities are their real images.

[F1] The modulus of $a+bi$ is the nonnegative square root of $a^2+b^2$ ([[def-complex-conjugate-real-imaginary-part-and-modulus]]).

[F2] Real finite sums may be computed in any enumeration ([[def-sum-over-a-finite-index-set]]).

[F3] Finite real sums distribute over addition and scaling, and a sum of nonnegative terms vanishes only when every term vanishes ([[lem-finite-sum-laws]]).

[F4] Complex finite sums are defined in the additive monoid, with empty sum zero ([[def-finite-sum-in-a-commutative-monoid]]).

[F5] Finite monoid sums can be reindexed, split over disjoint subsets, and summed in either order on a Cartesian product ([[lem-finite-sum-reindexing-and-fubini]]).

[F6] Conjugation preserves addition and multiplication; $z\overline z=|z|^2$, $|z|=0$ exactly when $z=0$, and $|zw|=|z||w|$ ([[lem-complex-conjugation-and-modulus-laws]]).

[F7] Base and successor steps establish a property for all finite lengths ([[thm-induction-principle]]).

[F8] For nonnegative reals, $a\le b$ if and only if $a^2\le b^2$ ([[lem-of-square-monotone]]).

## Proof

**Proof technique:** direct.

1.1 Put $S=\sum_{i=1}^n z_i$, using F4. For any complex finite lists, distributivity over a finite sum follows by induction: it holds for the empty sum; appending $a$ changes $cA$ to $c(A+a)=cA+ca$. Likewise conjugation through a finite sum holds at zero and is preserved by $\overline{A+a}=\overline A+\overline a$. F7 therefore gives these identities for every finite length. [F4, F6, F7, algebra]

2.1 Consequently $|S|^2=S\overline S=\sum_{i,j}z_i\overline{z_j}$. Split the pairs into $i=j$, $i<j$ and $j<i$, and reindex the third part by swapping its coordinates, as permitted by F5. The diagonal sum is $n$ since $z_i\overline{z_i}=1$, giving $|S|^2=n+\sum_{i<j}(z_i\overline{z_j}+z_j\overline{z_i})$. [step 1.1, F5, F6, given]

3.1 For each pair $i<j$, expand $|z_i-z_j|^2=(z_i-z_j)(\overline{z_i}-\overline{z_j})=2-z_i\overline{z_j}-z_j\overline{z_i}$. There are $n(n-1)/2$ such pairs: the count is zero at $n=1$, and adjoining index $n+1$ adds the $n$ pairs $(i,n+1)$, so the formula is preserved by $n(n-1)/2+n=n(n+1)/2$. Induction gives this count for all positive $n$. Adding the displayed expansions to step 2.1 cancels each off-diagonal term and yields $\sum_{i<j}|z_i-z_j|^2=n(n-1)-(|S|^2-n)=n^2-|S|^2$. [step 2.1, F6, F7, F3, F4, algebra]

4.1 Each squared modulus is a nonnegative real by F1 and F6. Use F2 to enumerate the pair set and F3 to conclude $n^2-|S|^2\ge0$. Since $|S|\ge0$ and $n>0$, F8 now gives $|S|\le n$. [step 3.1, F1, F2, F3, F6, F8]

4.2 If $|S|=n$, the identity in step 3.1 makes the sum of squared differences zero. F3 forces $|z_i-z_j|^2=0$ for every pair, and F6 gives $z_i=z_j$. For $n>1$, take the pairs $(1,j)$ to conclude every $z_j=z_1$. For $n=1$ that conclusion already holds and the pair sum is empty. [step 3.1, F3, F6, F4]

5.1 Conversely, if every $z_i=z_1$, repeated addition gives $S=nz_1$. Thus $|S|=|n||z_1|=n$ by F6 and the real modulus in F1. At $n=1$ this reads $|z_1|=1$. This proves both directions of the equality characterization. [F6, F1, given, step 4.2] ∎

## Sources

[Etingof et al.](https://math.mit.edu/~etingof/reprbook.pdf), Lemma 5.4.5 proof, p. 101, uses strictness for unequal unit roots. The pairwise squared-distance calculation supplies that equality argument locally for all unit complex numbers, without complex arguments or trigonometry.
