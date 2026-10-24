---
id: thm-conjugacy-of-cyclically-reduced-words
kind: theorem
title: "Two cyclically reduced words in a free group are conjugate if and only if one is a cyclic permutation of the other"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-cyclically-reduced-word, thm-reduced-words-form-the-free-group, thm-free-groups-unique-up-to-unique-isomorphism, thm-induction-principle]
justified_by: []
aliases: []
landmark: true
proof_strategy: induction
verification:
  audited: 2026-08-11
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Alexei Myasnikov and Vladimir Shpilrain, Combinatorics over Free Groups, Proposition 2"
      url: "https://web.stevens.edu/algebraic/alexeim/Teaching/Group%20Theory%20627/Sections/book/ALLBOOK.pdf"
    - title: "Wilhelm Magnus, Abraham Karrass, and Donald Solitar, Combinatorial Group Theory"
      url: "https://books.google.co.uk/books?id=QoiBAAAAIAAJ"
pipeline_run: null
---

## Statement

Let $u$ and $v$ be cyclically reduced words on $X\sqcup X^{-1}$. In the
reduced-word free group on $X$, the elements represented by $u$ and $v$ are
conjugate if and only if $v$ is a cyclic permutation of $u$.

Through the unique generator-compatible isomorphism, the same criterion holds
for elements represented by cyclically reduced words in any free group on
$X$.

## Facts & Assumptions

**Given:** Cyclically reduced words $u$ and $v$ on $X\sqcup X^{-1}$.

[L1] The reduced words on $X\sqcup X^{-1}$ form a group under concatenation followed by free reduction, and the map sending $x\in X$ to the one-letter word $x$ has the universal property of the free group on $X$ ([[thm-reduced-words-form-the-free-group]]).

[F1] A reduced word is cyclically reduced when it is empty or its first letter is not the formal inverse of its last letter ([[def-cyclically-reduced-word]]).

[L2] Free groups on the same set are uniquely isomorphic compatibly with their generators ([[thm-free-groups-unique-up-to-unique-isomorphism]]).

[L3] If a property $P$ satisfies $P(0)$ and $P(n)\Rightarrow P(n+1)$ for every natural number $n$, then $P(n)$ holds for every $n\in\mathbb N$ ([[thm-induction-principle]]).

## Proof

**Proof technique:** induction.

1.1 If $u=pq$ literally and $v=qp$, then $p^{-1}up=p^{-1}pqp$ freely reduces to $qp=v$, so every cyclic permutation of $u$ is conjugate to $u$. [L1]

1.2 For the converse, suppose $v=t^{-1}ut$ in the reduced-word group and take $t$ reduced. If $t=\varepsilon$, then $u=v$ as elements of the underlying set of reduced words in [L1], which is a cyclic permutation obtained by taking an empty prefix. [base, L1]

1.3 Assume the converse holds for conjugators shorter than a nonempty reduced word $t=a t'$, where $a$ is its first letter. [ih]

2.1 If neither seam in the literal word $t^{-1}ut$ cancels, that word is reduced and begins with the inverse of its last letter, so [F1] says it is not cyclically reduced; but by [L1] this reduced word is the group product $t^{-1}ut$ and hence equals the cyclically reduced word $v$, a contradiction. Thus at least one of the two seams cancels. [F1, L1, step 1.3]

3.1 If the right seam cancels, write $u=u'a^{-1}$; then $t^{-1}ut$ freely reduces to $(t')^{-1}(a^{-1}u')t'$, where $a^{-1}u'$ is a cyclic permutation of $u$. If the left seam cancels, write $u=au'$; then it freely reduces to $(t')^{-1}(u'a)t'$, where $u'a$ is a cyclic permutation of $u$. In either case the shifted word is cyclically reduced and the conjugator $t'$ is shorter. [step 2.1, L1]

4.1 Apply [L3] to the property that the converse holds for every conjugator of length at most $n$. The induction hypothesis makes $v$ a cyclic permutation of the shifted word in step 3.1; cyclic permutations compose, so $v$ is a cyclic permutation of $u$. [step 1.3, step 3.1, L3]

5.1 If one of $u,v$ is empty, conjugacy forces both to be the identity element, which is the empty word in the reduced-word group of [L1]. Combining this boundary with steps 1.1 and 4.1 proves both directions in the reduced-word model, and [L2] transports the criterion to every free group on $X$. [step 1.1, step 4.1, L1, L2, discharge-induction] ∎
