---
id: lem-coderivation-extension-from-corestrictions
kind: lemma
title: "Coderivations of the reduced graded symmetric coalgebra are determined by corestrictions"
status: draft
dependency_level: 3
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - def-koszul-sign-rule-for-graded-tensors
  - def-reduced-graded-symmetric-coalgebra
  - lem-shuffle-coproduct-coassociative-cocommutative-conilpotent
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Tom Lada and Jim Stasheff, Introduction to sh Lie algebras for physicists, sh Lie Structures"
      url: "https://arxiv.org/pdf/hep-th/9209099"
    - title: "Jean-Louis Loday and Bruno Vallette, Algebraic Operads, Proposition 10.1.20"
      url: "https://www.math.univ-paris13.fr/~vallette/Operads.pdf"
---

## Statement

Let $W$ and $S^c(W)$ be as in
[[def-reduced-graded-symmetric-coalgebra]]. For any family of degree $+1$
graded-symmetric maps $q_n:S^n(W)\to W$, $n\ge1$, the formula

$$Q(w_1\odot\cdots\odot w_N) =\sum_{n=1}^{N}\ \sum_{\sigma\in\operatorname{Sh}(n,N-n)} \epsilon(\sigma;w_1,\ldots,w_N) q_n(w_{\sigma(1)}\odot\cdots\odot w_{\sigma(n)})\odot w_{\sigma(n+1)}\odot\cdots\odot w_{\sigma(N)}$$

defines a degree $+1$ coderivation of $S^c(W)$. It is the unique such
coderivation whose projection to $S^1(W)=W$ on $S^n(W)$ is $q_n$.
For $n=N$, the final tail is empty and the term means just
$q_N(w_{\sigma(1)}\odot\cdots\odot w_{\sigma(N)})$; in this case
$\operatorname{Sh}(N,0)$ contains only the identity permutation.

Here a degree-one **coderivation** is a linear map $Q:S^c(W)\to S^c(W)$ that
satisfies

$$\bar\Delta Q=(Q\otimes1+1\otimes Q)\bar\Delta,$$

where the tensor map $1\otimes Q$ uses the Koszul sign rule. The sum defining
$Q$ is finite on each input because $n\le N$.

## Facts & Assumptions

**Given:** A characteristic-zero graded vector space $W$, its reduced shuffle
coalgebra, and graded-symmetric degree-one maps $q_n:S^n(W)\to W$.

[F1] [[def-reduced-graded-symmetric-coalgebra]]: the coproduct is a sum over
unshuffles with Koszul signs, and its primitive subspace is $W$ by
[[lem-shuffle-coproduct-coassociative-cocommutative-conilpotent]].

[F2] [[def-koszul-sign-rule-for-graded-tensors]]: composing graded tensor
maps and reordering homogeneous factors multiplies their Koszul signs.

## Proof

1.1 The formula is well-defined on the graded-symmetric quotient: replacing a
representative by an adjacent graded swap bijects the unshuffle summands, and
the Koszul sign in [F2] gives the same graded-symmetric output. Each term is
finite because its consumed arity is at most the input length. [F1, F2,
construct]

1.2 In $\bar\Delta Q(x)$, choose the $n$ input labels consumed by one $q_n$,
then split the $q_n$ output and the unused labels into two nonempty ordered
blocks. The same terms occur in $(Q\otimes1+1\otimes Q)\bar\Delta(x)$ by
first splitting the original labels into those two blocks and applying $Q$ to
the block containing the chosen $q_n$ inputs. These are the same ordered
three-block decompositions; their signs agree by [F2], including the crossing
sign from $1\otimes Q$. Thus the formula satisfies the coderivation identity.
[F1, F2, algebra]

2.1 Let $Q'$ be another coderivation with the same corestrictions and put
$D=Q-Q'$. We prove by induction on input length that $D=0$. On length one,
$D$ is its zero corestriction. Assume $D=0$ on all lengths below $N$. For
$x\in S^N(W)$, every tensor factor in $\bar\Delta(x)$ has length below $N$;
the coderivation identity therefore gives $\bar\Delta D(x)=0$. Hence $D(x)$
is primitive. [F1, induction]

2.2 By [F1], primitive elements are exactly $W$, and the length-one
projection of $D(x)$ is zero because $Q$ and $Q'$ have the same
corestrictions. Thus $D(x)=0$. This completes the induction for every finite
length, so $Q=Q'$. [F1, step 2.1, discharge-induction] ∎
