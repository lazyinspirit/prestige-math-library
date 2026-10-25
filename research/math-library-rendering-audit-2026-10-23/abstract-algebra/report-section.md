## Abstract Algebra

Completed visual review of **1380 items across 78 pages**, with **2828 image tiles**. Findings: 21 confirmed. Evidence: [manifest](math-library-rendering-audit-2026-10-23/abstract-algebra/manifest.json), [coverage](math-library-rendering-audit-2026-10-23/abstract-algebra/combined-coverage.json), [receipt](math-library-rendering-audit-2026-10-23/abstract-algebra/category-review-receipt.json).

### Confirmed rendering defects

#### abstract-algebra / confirmed 001: `ex-cyclic-amalgamation-with-relation-xm-equals-yn`

- Location: **frontmatter title**; source lines 4.
- Pages: `free-products-and-amalgamation-examples`.
- Visible defect: The title prints the exponent markers literally as “x^m=y^n” instead of typesetting the powers.
- Future repair: Put the relation in math delimiters in the title, for example “$x^m=y^n$”.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/abstract-algebra/screenshots/ex-cyclic-amalgamation-with-relation-xm-equals-yn--01.png); [frozen source](math-library-rendering-audit-2026-10-23/abstract-algebra/snapshots/ex-cyclic-amalgamation-with-relation-xm-equals-yn.md).

Exact frozen source lines:

```text
4: title: "Amalgamating infinite cyclic groups by multiplication by m and n gives the presentation with relation x^m=y^n"
```

#### abstract-algebra / confirmed 002: `thm-isomorphisms-extend-to-splitting-fields`

- Location: **Proof technique**; source lines 50.
- Pages: `splitting-fields`.
- Visible defect: The Proof technique label visibly prints the dollar delimiters and TeX command literally (shown as “$N=\DEG F$” after the label styling), although the same line’s formula is typeset normally when it appears in proof text.
- Future repair: Render math in the Proof technique label, or phrase the label without inline math, such as “strong induction on the degree of f”.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/abstract-algebra/screenshots/thm-isomorphisms-extend-to-splitting-fields--01.png); [frozen source](math-library-rendering-audit-2026-10-23/abstract-algebra/snapshots/thm-isomorphisms-extend-to-splitting-fields.md).

Exact frozen source lines:

```text
50: **Proof technique:** strong induction on $n=\deg f$.
```

#### abstract-algebra / confirmed 003: `cor-abelian-p-groups-of-order-pn-are-counted-by-partitions`

- Location: **frontmatter title**; source lines 4.
- Pages: `the-structure-of-finite-abelian-groups`.
- Visible defect: The rendered item title displays p^n with a literal caret instead of typeset exponent notation.
- Future repair: Format p^n in math delimiters in the title, for example $p^n$.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/abstract-algebra/screenshots/cor-abelian-p-groups-of-order-pn-are-counted-by-partitions--01.png); [frozen source](math-library-rendering-audit-2026-10-23/abstract-algebra/snapshots/cor-abelian-p-groups-of-order-pn-are-counted-by-partitions.md).

Exact frozen source lines:

```text
4: title: "Isomorphism classes of abelian groups of order p^n are counted by partitions of n"
```

#### abstract-algebra / confirmed 004: `ex-the-five-abelian-groups-of-order-sixteen`

- Location: **Facts & Assumptions**; source lines 35.
- Pages: `the-structure-of-finite-abelian-groups-examples`.
- Visible defect: The internal-reference title at the end of this Fact visibly prints p^n with a literal caret; surrounding body math is typeset.
- Future repair: Format p^n in math delimiters in the referenced item title so the internal link label is typeset.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/abstract-algebra/screenshots/ex-the-five-abelian-groups-of-order-sixteen--01.png); [frozen source](math-library-rendering-audit-2026-10-23/abstract-algebra/snapshots/ex-the-five-abelian-groups-of-order-sixteen.md).

Exact frozen source lines:

```text
35: [L1] For a prime $p$ and $n>0$, isomorphism classes of abelian groups of order $p^n$ are in bijection with partitions of $n$. For $n=0$, the unique group is the trivial group and corresponds separately to the empty partition. ([[cor-abelian-p-groups-of-order-pn-are-counted-by-partitions]]).
```

#### abstract-algebra / confirmed 005: `thm-internal-external-semidirect-product-equivalence`

- Location: **Proof**; source lines 64.
- Pages: `semidirect-products-and-automorphism-groups`.
- Visible defect: The proof visibly prints the internal annotation [step 1.1, L1, algebra] as literal text after the sentence.
- Future repair: Replace the square-bracket annotation with the repository’s supported step/reference markup or remove it from the rendered proof text.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/abstract-algebra/screenshots/thm-internal-external-semidirect-product-equivalence--01.png), [tile 02](math-library-rendering-audit-2026-10-23/abstract-algebra/screenshots/thm-internal-external-semidirect-product-equivalence--02.png); [frozen source](math-library-rendering-audit-2026-10-23/abstract-algebra/snapshots/thm-internal-external-semidirect-product-equivalence.md).

Exact frozen source lines:

```text
64: so $\Phi$ is a homomorphism. It is surjective because $G=NH$. [step 1.1, L1, algebra]
```

#### abstract-algebra / confirmed 006: `ex-two-involutions-generate-the-infinite-dihedral-group`

- Location: **frontmatter title**; source lines 4.
- Pages: `free-products-and-amalgamation-examples`.
- Visible defect: The title prints both C_2 occurrences with literal underscores. The same free-product notation is typeset in the Example body.
- Future repair: Format the group notation in the title with inline math, for example "$C_2 * C_2$ is the infinite dihedral group" or use Unicode subscripts.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/abstract-algebra/screenshots/ex-two-involutions-generate-the-infinite-dihedral-group--01.png); [frozen source](math-library-rendering-audit-2026-10-23/abstract-algebra/snapshots/ex-two-involutions-generate-the-infinite-dihedral-group.md).

Exact frozen source lines:

```text
4: title: "C_2 free-product C_2 is the infinite dihedral group, and the product of its generators has infinite order"
```

#### abstract-algebra / confirmed 007: `lem-successive-p-multiple-quotients-recover-elementary-divisors`

- Location: **frontmatter title**; source lines 4.
- Pages: `the-structure-of-finite-abelian-groups`.
- Visible defect: The rendered title exposes the literal caret and braces in p^iG/p^{i+1}G; the body math is typeset.
- Future repair: Wrap the exponent expressions in math delimiters, or use plain typographic superscripts in the title.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/abstract-algebra/screenshots/lem-successive-p-multiple-quotients-recover-elementary-divisors--01.png); [frozen source](math-library-rendering-audit-2026-10-23/abstract-algebra/snapshots/lem-successive-p-multiple-quotients-recover-elementary-divisors.md).

Exact frozen source lines:

```text
4: title: "The successive quotients p^iG/p^{i+1}G recover the cyclic summand multiplicities of a finite abelian p-group"
```

#### abstract-algebra / confirmed 008: `lem-successive-p-multiple-quotients-recover-elementary-divisors`

- Location: **Facts & Assumptions**; source lines 39.
- Pages: `the-structure-of-finite-abelian-groups`.
- Visible defect: Several internal item identifiers are printed as literal source slugs inside the rendered Facts text instead of as readable references.
- Future repair: Replace bare item slugs in prose with rendered wiki links or readable titles.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/abstract-algebra/screenshots/lem-successive-p-multiple-quotients-recover-elementary-divisors--01.png), [tile 02](math-library-rendering-audit-2026-10-23/abstract-algebra/screenshots/lem-successive-p-multiple-quotients-recover-elementary-divisors--02.png); [frozen source](math-library-rendering-audit-2026-10-23/abstract-algebra/snapshots/lem-successive-p-multiple-quotients-recover-elementary-divisors.md).

Exact frozen source lines:

```text
39: [L3] **Natural exponents, in a monoid.** Let $(M,\cdot,e)$ be a monoid (def-semigroup-and-monoid) and $g \in M$. By the recursion theorem (thm-recursion), applied with the set $M$, the element $e$ and the function $x \mapsto x \cdot g$ from $M$ to $M$, there is exactly one function $\mathbb{N} \to M$, written $n \mapsto g^{n}$, with $$g^{0} = e, \qquad g^{\sigma(n)} = g^{n} \cdot g \quad (n \in \mathbb{N}).$$ In particular $g^{0} = e$ for **every** $g$, including $g = e$, and $g^{1} = g^{\sigma(0)} = e \cdot g = g$. Since $\mathbb{N}$ contains $0$ (def-natural-numbers), the exponent $0$ is a genuine value of the definition and not a separate convention. **Integer exponents, in a group.** Let $G$ be a group (def-group) and $g \in G$. Write $\iota : \mathbb{N} \to \mathbb{Z}$ for the embedding $k = [(k,0)]$ of lem-nat-embeds-int, which is injective, preserves addition, multiplication and order, and has as image exactly the nonnegative integers. For $x \in \mathbb{Z}$ define - $g^{x} := g^{k}$, the natural power, when $0 \le x$ and $x = k$; - $g^{x} := (g^{k})^{-1}$ when $x < 0$ and $-x = k$. **Why this is well defined.** The order on $\mathbb{Z}$ is total and antisymmetric (thm-int-ordered-ring, def-int-order), so exactly one of $0 \le x$ and $x < 0$ holds and the two clauses never both apply. In the first clause $x$ is nonnegative, so $x = k$ for some $k \in \mathbb{N}$, and $k$ is unique because $\iota$ is injective. In the second clause $x < 0$ gives $0 = x + (-x) < 0 + (-x) = -x$ by compatibility of the order with addition (thm-int-ordered-ring, def-int-operations), so $-x$ is a positive integer and again $-x = k$ for a unique $k$. The inverse $(g^{k})^{-1}$ is a single determined element by lem-inverse-unique and def-invertible-element. Finally the two readings of $g^{k}$, as a natural power and as an integer power, agree by construction, so no ambiguity is introduced. **Abbreviation.** In an exponent we write $k$ for the integer $k$ when a natural number $k$ is used where an integer is expected; this is unambiguous because $\iota$ is injective and preserves the arithmetic and the order, and because the two readings of $g^{k}$ agree as just noted. **Additive notation.** When the group is written additively the same object is written $n g$ or $n \cdot g$ rather than $g^{n}$, with $0 g = 0$ and $\sigma(n) g = n g + g$; the definitions are identical, only the symbols differ. ([[def-group-power]]).
```

#### abstract-algebra / confirmed 009: `lem-unique-subgroup-of-order-p-forces-cyclicity`

- Location: **Facts & Assumptions**; source lines 37, 43, 45.
- Pages: `the-structure-of-finite-abelian-groups`.
- Visible defect: Bare internal item identifiers appear in the rendered Facts text, including definition slugs and references to the power/order conventions.
- Future repair: Replace bare item slugs in prose with rendered wiki links or readable titles.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/abstract-algebra/screenshots/lem-unique-subgroup-of-order-p-forces-cyclicity--01.png); [frozen source](math-library-rendering-audit-2026-10-23/abstract-algebra/snapshots/lem-unique-subgroup-of-order-p-forces-cyclicity.md).

Exact frozen source lines:

```text
37: [L2] Let $G$ be a group and let $N\mathrel{\trianglelefteq}G$ be a normal subgroup (def-normal-subgroup). The **quotient group**, or **factor group**, $G/N$ has the left cosets $$G/N:=\{gN:g\in G\}$$ as its elements (def-coset, def-index), with product $$ (gN)(hN):=ghN.$$ Independence of the chosen representatives is proved in thm-coset-multiplication-well-defined-iff-normal, and the group axioms are proved in thm-quotient-group-laws. ([[def-quotient-group]]).
43: [L5] Let $G$ be a group and $g \in G$, with integer powers as in def-group-power. Then $$\langle g \rangle \;=\; \{\, g^{n} \;:\; n \in \mathbb{Z} \,\} ,$$ the cyclic subgroup generated by $g$ (def-generated-subgroup) being exactly the set of integer powers of $g$. Consequently every cyclic group is abelian, and so is every cyclic subgroup of any group. ([[lem-cyclic-subgroup-is-the-set-of-powers]]).
45: [L6] Let $G$ be a group, $g \in G$, and let orders be as in def-order-in-a-group. Throughout, a natural number written where an integer is expected means its image under the embedding $\iota : \mathbb{N} \to \mathbb{Z}$ of lem-nat-embeds-int. **Finite order.** Suppose $\operatorname{ord}(g) = n$ with $n \in \mathbb{N}$, $n \ge 1$. Then: 1. for every $k \in \mathbb{Z}$, $g^{k} = e$ if and only if $k = qn$ for some $q \in \mathbb{Z}$, that is, if and only if $n \mid k$ (thm-division-algorithm-in-z); 2. the powers $g^{0}, g^{1}, \dots, g^{n-1}$ are pairwise distinct: if $i, j \in \mathbb{N}$ with $i < n$, $j < n$ and $g^{i} = g^{j}$, then $i = j$; 3. $\langle g \rangle = \{\, g^{s} : s \in \mathbb{N},\ s < n \,\}$ and $\langle g \rangle \approx n$; so $\langle g \rangle$ is finite with $|\langle g \rangle| = n = \operatorname{ord}(g)$. **Infinite order.** If $\operatorname{ord}(g) = \infty$ then for $j, k \in \mathbb{Z}$, $g^{j} = g^{k}$ implies $j = k$; so the integer powers of $g$ are pairwise distinct and $\langle g \rangle$ is not finite. ([[lem-order-characterisation]]).
```

#### abstract-algebra / confirmed 010: `cor-each-factor-is-a-retract-of-a-free-product`

- Location: **Facts & Assumptions**; source lines 39.
- Pages: `free-products-and-amalgamation`.
- Visible defect: Bare internal item identifiers are printed in the rendered Facts paragraph instead of readable references.
- Future repair: Replace bare item slugs in prose with rendered wiki links or readable titles.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/abstract-algebra/screenshots/cor-each-factor-is-a-retract-of-a-free-product--01.png); [frozen source](math-library-rendering-audit-2026-10-23/abstract-algebra/snapshots/cor-each-factor-is-a-retract-of-a-free-product.md).

Exact frozen source lines:

```text
39: [L3] Let $(M,\cdot,e)$ and $(M',\cdot',e')$ be monoids (def-semigroup-and-monoid). A **monoid homomorphism** from $M$ to $M'$ is a function $f : M \to M'$ such that - **(H1)** $f(x \cdot y) = f(x) \cdot' f(y)$ for all $x, y \in M$; - **(H2)** $f(e) = e'$. Let $G$ and $G'$ be groups (def-group). A **group homomorphism** from $G$ to $G'$ is a function $f : G \to G'$ satisfying (H1) alone: $$f(xy) \;=\; f(x)\, f(y) \qquad \text{for all } x, y \in G .$$ Condition (H2) is not imposed for groups because it follows: a group homomorphism automatically satisfies $f(e) = e'$ and $f(x^{-1}) = f(x)^{-1}$ (lem-group-homomorphism-basic-properties). For monoids it does **not** follow and must be assumed, which is why the two definitions differ. A homomorphism from a structure to itself is an **endomorphism**. The identity map of $M$ is a monoid homomorphism, and a composite of monoid homomorphisms is one, since $(g \circ f)(xy) = g(f(x)f(y)) = g(f(x))\,g(f(y))$ and $(g \circ f)(e) = g(e') = e''$; the same computation, without the second clause, shows a composite of group homomorphisms is a group homomorphism. ([[def-group-homomorphism]]).
```

#### abstract-algebra / confirmed 011: `thm-cauchy-for-finite-abelian-groups`

- Location: **Facts & Assumptions**; source lines 43, 47.
- Pages: `the-structure-of-finite-abelian-groups`.
- Visible defect: Facts text visibly leaks bare internal item identifiers such as def-normal-subgroup, def-coset, and thm-division-algorithm-in-z.
- Future repair: Replace bare item slugs in prose with rendered wiki links or readable titles.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/abstract-algebra/screenshots/thm-cauchy-for-finite-abelian-groups--01.png), [tile 02](math-library-rendering-audit-2026-10-23/abstract-algebra/screenshots/thm-cauchy-for-finite-abelian-groups--02.png); [frozen source](math-library-rendering-audit-2026-10-23/abstract-algebra/snapshots/thm-cauchy-for-finite-abelian-groups.md).

Exact frozen source lines:

```text
43: [L5] Let $G$ be a group and let $N\mathrel{\trianglelefteq}G$ be a normal subgroup (def-normal-subgroup). The **quotient group**, or **factor group**, $G/N$ has the left cosets $$G/N:=\{gN:g\in G\}$$ as its elements (def-coset, def-index), with product $$ (gN)(hN):=ghN.$$ Independence of the chosen representatives is proved in thm-coset-multiplication-well-defined-iff-normal, and the group axioms are proved in thm-quotient-group-laws. ([[def-quotient-group]]).
47: [L7] Let $G$ be a group, $g \in G$, and let orders be as in def-order-in-a-group. Throughout, a natural number written where an integer is expected means its image under the embedding $\iota : \mathbb{N} \to \mathbb{Z}$ of lem-nat-embeds-int. **Finite order.** Suppose $\operatorname{ord}(g) = n$ with $n \in \mathbb{N}$, $n \ge 1$. Then: 1. for every $k \in \mathbb{Z}$, $g^{k} = e$ if and only if $k = qn$ for some $q \in \mathbb{Z}$, that is, if and only if $n \mid k$ (thm-division-algorithm-in-z); 2. the powers $g^{0}, g^{1}, \dots, g^{n-1}$ are pairwise distinct: if $i, j \in \mathbb{N}$ with $i < n$, $j < n$ and $g^{i} = g^{j}$, then $i = j$; 3. $\langle g \rangle = \{\, g^{s} : s \in \mathbb{N},\ s < n \,\}$ and $\langle g \rangle \approx n$; so $\langle g \rangle$ is finite with $|\langle g \rangle| = n = \operatorname{ord}(g)$. **Infinite order.** If $\operatorname{ord}(g) = \infty$ then for $j, k \in \mathbb{Z}$, $g^{j} = g^{k}$ implies $j = k$; so the integer powers of $g$ are pairwise distinct and $\langle g \rangle$ is not finite. ([[lem-order-characterisation]]).
```

#### abstract-algebra / confirmed 012: `thm-groups-of-order-thirty-have-a-normal-sylow-subgroup`

- Location: **Facts & Assumptions**; source lines 52.
- Pages: `sylow-theorems-and-nilpotent-groups`.
- Visible defect: The rendered Facts text prints the internal identifier def-normal-subgroup literally.
- Future repair: Replace the bare item slug with a rendered wiki link or the definition title.
- Image evidence: [tile 02](math-library-rendering-audit-2026-10-23/abstract-algebra/screenshots/thm-groups-of-order-thirty-have-a-normal-sylow-subgroup--02.png); [frozen source](math-library-rendering-audit-2026-10-23/abstract-algebra/snapshots/thm-groups-of-order-thirty-have-a-normal-sylow-subgroup.md).

Exact frozen source lines:

```text
52: [L10] A group $G$ is simple if $G\ne\{1\}$ and its only normal subgroups are $\{1\}$ and $G$, where normality is as in def-normal-subgroup. ([[def-simple-group]]).
```

#### abstract-algebra / confirmed 013: `lem-products-of-normal-p-subgroups`

- Location: **Facts & Assumptions**; source lines 38.
- Pages: `sylow-theorems-and-nilpotent-groups`.
- Visible defect: Bare internal item identifiers are printed in the rendered Facts text instead of readable references.
- Future repair: Replace bare item slugs in prose with rendered wiki links or readable titles.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/abstract-algebra/screenshots/lem-products-of-normal-p-subgroups--01.png); [frozen source](math-library-rendering-audit-2026-10-23/abstract-algebra/snapshots/lem-products-of-normal-p-subgroups.md).

Exact frozen source lines:

```text
38: [L1] Let $p$ be a prime natural number (def-prime). A finite $p$-group is a finite group $P$ (def-group, def-finite-cardinality) whose order has the form $$|P|=p^n$$ for some $n\in\mathbb N$, with natural exponentiation as in def-nat-power. The case $n=0$ permits the trivial group. A finite $p$-group is nontrivial exactly when $n\ge 1$. ([[def-finite-p-group]]).
```

#### abstract-algebra / confirmed 014: `ex-sylow-subgroups-of-s-four`

- Location: **Facts & Assumptions**; source lines 38, 42.
- Pages: `sylow-theorems-and-nilpotent-groups-examples`.
- Visible defect: The rendered Facts paragraphs expose multiple bare internal item identifiers, including def-sylow-p-subgroup and def-symmetric-group.
- Future repair: Replace bare item slugs in prose with rendered wiki links or readable titles.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/abstract-algebra/screenshots/ex-sylow-subgroups-of-s-four--01.png); [frozen source](math-library-rendering-audit-2026-10-23/abstract-algebra/snapshots/ex-sylow-subgroups-of-s-four.md).

Exact frozen source lines:

```text
38: [L1] For a finite group $G$ and a prime $p$, let $\operatorname{Syl}_p(G)$ be the set of Sylow $p$-subgroups (def-sylow-p-subgroup). Define $$n_p(G):=|\operatorname{Syl}_p(G)|.$$ This cardinal is defined even before existence is proved because $\operatorname{Syl}_p(G)$ is a subset of the finite power set of $G$; thm-sylow-first-theorem later shows it is nonzero. ([[def-number-of-sylow-p-subgroups]]).
42: [L3] Let $n\in\mathbb N$, so that $n=\{0,1,\dots,n-1\}$ (def-natural-numbers). The symmetric group on $n$ letters is $$S_n:=\operatorname{Sym}(n)=\operatorname{Sym}(\{0,1,\dots,n-1\}),$$ the group of all bijections of $n$ under composition (def-symmetric-group), with the composition convention. ([[def-finite-symmetric-group-and-permutation-notation]]).
```

#### abstract-algebra / confirmed 015: `ex-unit-group-modulo-one-hundred-decomposition`

- Location: **frontmatter title**; source lines 4.
- Pages: `the-structure-of-finite-abelian-groups-examples`.
- Visible defect: The rendered title visibly prints the underscores in C_20 and C_2 instead of typesetting these as subscripts; the formula in the Example body renders correctly.
- Future repair: Typeset the title formula, for example: title: "The unit group modulo one hundred is isomorphic to $C_{20} \times C_2$".
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/abstract-algebra/screenshots/ex-unit-group-modulo-one-hundred-decomposition--01.png); [frozen source](math-library-rendering-audit-2026-10-23/abstract-algebra/snapshots/ex-unit-group-modulo-one-hundred-decomposition.md).

Exact frozen source lines:

```text
4: title: "The unit group modulo one hundred is isomorphic to C_20 times C_2"
```

#### abstract-algebra / confirmed 016: `ex-complements-of-a-maximal-cyclic-subgroup-need-not-be-unique`

- Location: **frontmatter title**; source lines 4.
- Pages: `the-structure-of-finite-abelian-groups-examples`.
- Visible defect: The rendered title shows “C_p times C_p” with the underscores visible as literal characters instead of subscript notation.
- Future repair: Format both cyclic-group names in inline math, for example “Complements of a maximal cyclic subgroup in $C_p\times C_p$ need not be unique”.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/abstract-algebra/screenshots/ex-complements-of-a-maximal-cyclic-subgroup-need-not-be-unique--01.png); [frozen source](math-library-rendering-audit-2026-10-23/abstract-algebra/snapshots/ex-complements-of-a-maximal-cyclic-subgroup-need-not-be-unique.md).

Exact frozen source lines:

```text
4: title: "Complements of a maximal cyclic subgroup in C_p times C_p need not be unique"
```

#### abstract-algebra / confirmed 017: `ex-amalgamating-c-two-inside-c-four-and-c-six`

- Location: **frontmatter title**; source lines 4.
- Pages: `free-products-and-amalgamation-examples`.
- Visible defect: The rendered title exposes the underscore subscripts and caret exponents literally as “C_2”, “C_4”, “C_6”, “a^2=b^3”.
- Future repair: Use inline math delimiters for the group orders and exponent relation, e.g. $C_2$, $C_4$, $C_6$, and $a^2=b^3$.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/abstract-algebra/screenshots/ex-amalgamating-c-two-inside-c-four-and-c-six--01.png); [frozen source](math-library-rendering-audit-2026-10-23/abstract-algebra/snapshots/ex-amalgamating-c-two-inside-c-four-and-c-six.md).

Exact frozen source lines:

```text
4: title: "Amalgamating C_2 inside C_4 and C_6 gives the presentation with a^2=b^3"
```

#### abstract-algebra / confirmed 018: `ex-c-two-free-product-c-three-is-infinite`

- Location: **frontmatter title**; source lines 4.
- Pages: `free-products-and-amalgamation-examples`.
- Visible defect: The rendered title prints the underscores in “C_2” and “C_3” as raw source notation.
- Future repair: Format the group names with inline math, e.g. $C_2$ and $C_3$.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/abstract-algebra/screenshots/ex-c-two-free-product-c-three-is-infinite--01.png); [frozen source](math-library-rendering-audit-2026-10-23/abstract-algebra/snapshots/ex-c-two-free-product-c-three-is-infinite.md).

Exact frozen source lines:

```text
4: title: "C_2 free-product C_3 has presentation with only the two factor relations and is infinite"
```

#### abstract-algebra / confirmed 019: `ex-successive-p-layers-read-a-cyclic-decomposition`

- Location: **frontmatter title**; source lines 4.
- Pages: `the-structure-of-finite-abelian-groups-examples`.
- Visible defect: The rendered title exposes raw underscores, braces, and carets in the cyclic-group orders.
- Future repair: Use inline math for the displayed group, e.g. $C_p^2	imes C_{p^3}	imes C_{p^4}^2$.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/abstract-algebra/screenshots/ex-successive-p-layers-read-a-cyclic-decomposition--01.png); [frozen source](math-library-rendering-audit-2026-10-23/abstract-algebra/snapshots/ex-successive-p-layers-read-a-cyclic-decomposition.md).

Exact frozen source lines:

```text
4: title: "Successive p-multiple layers recover the summands of C_p^2 times C_{p^3} times C_{p^4}^2"
```

#### abstract-algebra / confirmed 020: `ex-successive-p-layers-read-a-cyclic-decomposition`

- Location: **Facts & Assumptions**; source lines 35.
- Pages: `the-structure-of-finite-abelian-groups-examples`.
- Visible defect: The linked item title is displayed literally as “p^iG/p^{i+1}G”, exposing carets and braces instead of typeset powers.
- Future repair: Give the internal link an explicit math-formatted label or revise the linked item title to use inline math delimiters.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/abstract-algebra/screenshots/ex-successive-p-layers-read-a-cyclic-decomposition--01.png); [frozen source](math-library-rendering-audit-2026-10-23/abstract-algebra/snapshots/ex-successive-p-layers-read-a-cyclic-decomposition.md).

Exact frozen source lines:

```text
35: [L1] Suppose $G\cong\prod_{j<r}C_{p^{e_j}}$ with $e_j\ge1$, and in additive notation write $p^iG=\{p^ig:g\in G\}$. Define $d_i$ by $|p^iG/p^{i+1}G|=p^{d_i}$. Then $$d_i=|\{j:e_j\ge i+1\}|.$$ Consequently, for every $k\ge1$, the number of summands of order $p^k$ is $d_{k-1}-d_k$, so the elementary divisors are intrinsic. ([[lem-successive-p-multiple-quotients-recover-elementary-divisors]]).
```

#### abstract-algebra / confirmed 021: `thm-fundamental-theorem-of-finite-abelian-groups-elementary-divisor-form`

- Location: **Facts & Assumptions**; source lines 41.
- Pages: `the-structure-of-finite-abelian-groups`.
- Visible defect: The linked item title is displayed literally as “p^iG/p^{i+1}G”, exposing carets and braces instead of typeset powers.
- Future repair: Give the internal link an explicit math-formatted label or revise the linked item title to use inline math delimiters.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/abstract-algebra/screenshots/thm-fundamental-theorem-of-finite-abelian-groups-elementary-divisor-form--01.png); [frozen source](math-library-rendering-audit-2026-10-23/abstract-algebra/snapshots/thm-fundamental-theorem-of-finite-abelian-groups-elementary-divisor-form.md).

Exact frozen source lines:

```text
41: [L4] Suppose $G\cong\prod_{j<r}C_{p^{e_j}}$ with $e_j\ge1$, and in additive notation write $p^iG=\{p^ig:g\in G\}$. Define $d_i$ by $|p^iG/p^{i+1}G|=p^{d_i}$. Then $$d_i=|\{j:e_j\ge i+1\}|.$$ Consequently, for every $k\ge1$, the number of summands of order $p^k$ is $d_{k-1}-d_k$, so the elementary divisors are intrinsic. ([[lem-successive-p-multiple-quotients-recover-elementary-divisors]]).
```

