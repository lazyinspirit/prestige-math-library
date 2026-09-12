---
id: thm-bpi-equivalent-to-set-ultrafilter-lemma
kind: theorem
title: BPI and the set ultrafilter lemma are equivalent
status: published
origin: pipeline
deps: [thm-bpi-equivalent-to-boolean-filter-extension, lem-finite-boolean-algebras-are-powersets-of-atoms, def-filter, def-ultrafilter, lem-fip-generates-filter]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Tressl, Stone Duality for Boolean Algebras, 2.3.1–2.3.3; local finite-character construction"
      url: https://personalpages.manchester.ac.uk/staff/Marcus.Tressl/papers/StoneDualityBooleanAlgebras.pdf
---

## Statement

ZF proves that BPI is equivalent to UFL, the assertion that every proper set filter extends to a set ultrafilter.

## Facts & Assumptions

[F1] [[thm-bpi-equivalent-to-boolean-filter-extension]] equates BPI with proper Boolean filter extension.

[F2] [[lem-finite-boolean-algebras-are-powersets-of-atoms]] gives an atom below every nonzero element of a finite Boolean algebra, and its atom-membership characters.

[F3] [[def-filter]] and [[def-ultrafilter]] define proper set filters and their maximal extensions.

[F4] [[lem-fip-generates-filter]] generates a proper set filter from a family with the finite intersection property, including the empty finite intersection.

## Proof

**Given:** ZF. Each implication assumes only its stated principle.

1.1 Assume BPI. A proper set filter on $S$ is exactly a proper Boolean filter in $\mathcal P(S)$: meets are intersections, the unit is $S$ and zero is $\varnothing$. Its maximal proper Boolean extension supplied by F1 is therefore a set ultrafilter by F3. This also covers all possible instances when $S=\varnothing$, since then no proper filter exists. [F1, F3, algebra]

1.2 Assume UFL and fix a proper Boolean filter $F$ in $B$. Let $E$ be the set of pairs $(C,h)$ with $C\subseteq B$ a finite Boolean subalgebra and $h:C\to2$ a Boolean homomorphism. Every finite subset $K$ of $B$ is contained in a finite subalgebra: enumerate $K$ as $b_1,\ldots,b_n$, form the at most $2^n$ meets choosing $b_i$ or $\neg b_i$, and take all joins of these cells. Distributivity partitions $1$ into those cells; their joins are closed under all Boolean operations and contain $K$. No simultaneous enumeration of all finite subsets is required. [given, algebra]

2.1 On $E$ impose requirements $D_b=\{(C,h):b\in C\}$ for $b\in B$ and $T_f=\{(C,h):f\in C,\ h(f)=1\}$ for $f\in F$. A finite list of requirements mentions finitely many $b$ and $f$. Choose a finite subalgebra containing them by step 1.2. Their filter meet $u$ is nonzero, including $u=1$ if no $f$ occurs. F2 supplies an atom $a\le u$ in that subalgebra. The character $h(c)=1$ exactly when $a\le c$ meets all listed requirements. This proves FIP, including nonemptiness of $E$ for the empty list. By F4 these sets generate a proper set filter; UFL gives an ultrafilter $W$ containing it. [F2, F4, step 1.2, given, algebra]

3.1 A set ultrafilter $W$ decides every subset $H\subseteq E$: if $H\notin W$, adjoining it makes an improper filter by maximality, so a finite intersection from $W$ is disjoint from $H$, putting $E\setminus H$ in $W$. Both cannot belong to $W$. For each $b$, the two disjoint fibres $D_{b,i}=\{(C,h):b\in C,\ h(b)=i\}$ partition the $W$-large set $D_b$. Exactly one fibre is in $W$ by this decision property. Define $v(b)$ to be its unique label. [F3, step 2.1, algebra]

4.1 Intersect the large fibres for $b,c,b\wedge c$ and their domains. Their intersection is nonempty by properness. At any pair $(C,h)$ in it, $v(b\wedge c)=h(b\wedge c)=h(b)\wedge h(c)=v(b)\wedge v(c)$. The same argument with $b,c,b\vee c$ proves join preservation; with $b,\neg b$ it proves complement preservation. Since every local character takes $0$ to $0$ and $1$ to $1$, so does $v$. The requirements $T_f$ force $v(f)=1$ for all $f\in F$. [F3, step 2.1, step 3.1, algebra]

5.1 The set $U=v^{-1}(\{1\})$ is a proper Boolean filter containing $F$, by the identities in step 4.1. It decides complementary pairs. Any larger filter would contain some $b$ with $v(b)=0$ and also $\neg b\in U$, hence contain zero; thus $U$ is maximal proper. F1 now gives BPI. Properness of $F$ excludes the trivial algebra; the finitely many witness selections above are valid in ZF, and the labels in step 3.1 are unique. QED. [F1, step 3.1, step 4.1, algebra]
