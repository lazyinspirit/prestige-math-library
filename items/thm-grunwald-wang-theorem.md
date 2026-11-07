---
id: thm-grunwald-wang-theorem
kind: theorem
title: "Grunwald–Wang theorem for finite-order idèle-class characters"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 24
deps:
  - def-number-field
  - def-idele-group-of-a-global-field
  - def-idele-class-group-of-a-global-field
  - thm-global-artin-reciprocity-and-norm-index
  - thm-global-class-field-existence-number-field
  - lem-number-field-open-idelic-subgroup-contains-norm-group
  - lem-local-cyclic-algebra-invariant-artin-compatibility
  - thm-local-artin-reciprocity-and-norm-index
  - thm-number-field-infinitely-many-nonsplit-primes
  - thm-grunwald-wang-character-theorem-under-choice
  - lem-finite-local-character-extension-obstruction-in-zf
  - thm-constructible-inner-model-semantic-and-formal-schema
  - thm-delta-zero-absoluteness-for-transitive-sets
  - thm-rational-polynomial-root-isolation-is-sound-and-finite
  - thm-ring-of-integers-free-of-rank-degree
  - lem-number-field-completion-tensor-and-norm-in-zf
  - thm-cyclotomic-polynomials-are-irreducible-over-the-rationals
  - thm-cyclotomic-polynomials-are-monic-integer-polynomials-of-degree-euler-totient
  - thm-global-field-element-integral-at-all-but-finitely-many-places
proof_strategy: class-field-character-extension
axiom_use: >-
  No ambient Choice is used; the choice-qualified theorem is applied inside the constructible universe and transferred by finite arithmetic codes.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Class Field Theory, version 4.03"
      url: "https://www.jmilne.org/math/CourseNotes/CFT.pdf"
      locator: "Chapter VIII §2, Theorem 2.4, printed pp.231–233; statement, with proof referred to Artin–Tate."
    - title: "Song Wang, An Effective Version of the Grunwald–Wang Theorem"
      url: "https://thesis.caltech.edu/6803/1/Wang_s_2002.pdf"
      locator: "Chapter 0 §0.2, Theorems 0.2–0.4; Chapter 1 §§1.3–1.4, printed pp.7–8 and 20–38."
    - title: "Emil Artin and John Tate, Class Field Theory"
      url: "https://books.google.com/books?id=8odbx9-9HBMC"
      locator: "Chapter X, Theorem 5; full proof text not available in the retrieved copy."
verification: {}
---

## Statement

Let $K$ be a number field, let $S$ be a finite set of places of $K$, and
let $\chi_v:K_v^\times\to\mathbb C^\times$ be continuous finite-order
characters for $v\in S$. Put
$$m=\operatorname{lcm}_{v\in S}\operatorname{ord}(\chi_v),$$
with $m=1$ when every $\chi_v$ is trivial. There is a continuous finite-order
character $\chi:C_K\to\mathbb C^\times$ whose restriction to each embedded
local factor $K_v^\times$ is $\chi_v$. If the special case below does not
occur, $\chi$ can be chosen of order $m$. To state the exception, fix the
compatible roots $\zeta_{2^r}=e^{2\pi i/2^r}$ for $r\ge1$, so
$\zeta_{2^{r+1}}^2=\zeta_{2^r}$, and put
$\eta_{2^r}=\zeta_{2^r}+\zeta_{2^r}^{-1}$. Let $s$ be the largest integer
with $\eta_{2^s}\in K$; then
$\eta_{2^{s+1}}\notin K$. The special case occurs exactly when all of the
following hold: $-1$, $2+\eta_{2^s}$, and $-2-\eta_{2^s}$ are nonsquares in
$K^\times$; $m=2^t m'$ for an odd integer $m'$ and an integer $t>s$; and
$$S_0:=\{v:v\text{ is a finite place above }2,\ -1,\ 2+\eta_{2^s},\ -2-\eta_{2^s}\text{ are all nonsquares in }K_v^\times\}\subseteq S.$$
In that case set $a_0=(2+\eta_{2^s})^{m/2}$. A global character of order
$m$ matching the given local characters exists if and only if
$$\prod_{v\in S_0}\chi_v(a_0)=1.$$
If this product is not $1$, no matching global character has order $m$, but
one exists of order $2m$.

## Statement references
[[def-number-field]]

[[def-idele-group-of-a-global-field]]

[[def-idele-class-group-of-a-global-field]]

[[thm-global-artin-reciprocity-and-norm-index]]

[[thm-global-class-field-existence-number-field]]

[[lem-number-field-open-idelic-subgroup-contains-norm-group]]

[[thm-local-artin-reciprocity-and-norm-index]]

[[thm-number-field-infinitely-many-nonsplit-primes]]

[[thm-cyclotomic-polynomials-are-irreducible-over-the-rationals]]

[[thm-cyclotomic-polynomials-are-monic-integer-polynomials-of-degree-euler-totient]]

[[thm-global-field-element-integral-at-all-but-finitely-many-places]]

[Milne, *Class Field Theory*, VIII §2, Theorem 2.4](https://www.jmilne.org/math/CourseNotes/CFT.pdf)

[Wang, *An Effective Version of the Grunwald–Wang Theorem*, 0.2 and 1.3–1.4](https://thesis.caltech.edu/6803/1/Wang_s_2002.pdf)

[Artin–Tate, *Class Field Theory*, Chapter X, Theorem 5](https://books.google.com/books?id=8odbx9-9HBMC)
## Facts & Assumptions

**Given:** The original unqualified number field, local characters, finite place set and exceptional parameters in the Statement.

[F1] Under AC, Countable Choice and DC, the full Grunwald–Wang character theorem has exactly the Statement's characters, exceptional conditions, product criterion and order-$2m$ alternative. It will be applied only inside the constructible universe. [[thm-grunwald-wang-character-theorem-under-choice]]

[F2] In ZF, finite local-character tables and local power tests have the same finite codes inside and outside the constructible universe. A finite-order internal or ambient idèle-class character has a counterpart in the other universe with the same image, exact order and local tables. [[lem-finite-local-character-extension-obstruction-in-zf]]

[F3] Each fixed ZFC proof holds relativized to the transitive constructible universe $\mathcal L$, and bounded arithmetic on common natural-number codes is absolute. Real algebraic roots have finite rational isolation data. The number field's integer ring is finite free over $\mathbb Z$, and finite-place completions and residue quotients exist in ZF. [[thm-constructible-inner-model-semantic-and-formal-schema]] [[thm-delta-zero-absoluteness-for-transitive-sets]] [[thm-rational-polynomial-root-isolation-is-sound-and-finite]] [[thm-ring-of-integers-free-of-rank-degree]] [[lem-number-field-completion-tensor-and-norm-in-zf]]

[F4] Cyclotomic polynomials are irreducible over $\mathbb Q$ and have degree $\varphi(n)$. [[thm-cyclotomic-polynomials-are-irreducible-over-the-rationals]] [[thm-cyclotomic-polynomials-are-monic-integer-polynomials-of-degree-euler-totient]]

## Proof

**Proof technique:** transfer the finite arithmetic and local-character data to $\mathcal L$, apply the complete conditional theorem there, and transfer the finite ray character back with its exact order.

**Given:** The data in the Statement, with no ambient choice assumption.

1.1 Choose a finite rational basis of $K$ and use its rational multiplication table. Field elements, integer-ring ideals and their finite residue quotients have the same arithmetic codes in $\mathcal L$ and outside: integrality is an arithmetic condition, and every additive subgroup of a finite free $\mathbb Z$-module has finite generators by projecting to one coordinate and inducting on the kernel. The finitely many places in $S$ have the same prime-ideal or real-embedding codes. Each $\chi_v$ has values in $\mu_m\subseteq\mu_{2m}$. By the local finite-power quotient construction in [F2], its full restriction is determined by a finite table on algebraic representatives, and the same table defines an internal character. The local orders and their least common multiple $m$ are therefore the same in both universes. [F2, F3, given, construct, algebra]

2.1 Every $\zeta_{2^r}$ and $\eta_{2^r}$ is algebraic and has a rational isolation code in $\mathcal L$; equality with an element of the common rational-coordinate field $K$ is an arithmetic test. By [F4], $[\mathbb Q(\zeta_{2^r}):\mathbb Q]=2^{r-1}$ and $\zeta_{2^r}$ has degree at most two over $\mathbb Q(\eta_{2^r})$, so $[\mathbb Q(\eta_{2^r}):\mathbb Q]$ is unbounded. The largest $s$ in the Statement is consequently finite and identical internally and externally. Global squareness of the three elements is the existence of a rational-coordinate field element satisfying a polynomial equation, hence is absolute. At a finite completion the corresponding local square test is absolute by the finite residue-tree construction in [F2]; the finitely many primes above $2$ have the same ideal codes. Hence $S_0$, the special-case truth value, and the finite product $\prod_{v\in S_0}\chi_v(a_0)$ are identical inside $\mathcal L$ and outside. [F2, F3, F4, step 1.1, construct, algebra]

3.1 Inside $\mathcal L$, [F3] supplies the assumptions of [F1]. Apply [F1] to the internal local-character tables. Outside the special case it gives a matching global character of order exactly $m$; in the special case it gives one of order $m$ when the displayed product is one and one of order $2m$ when that product is nontrivial. All these characters take values in $\mu_{2m}$. By the internal-to-ambient transfer in [F2], each has an ambient continuous idèle-class counterpart with the same image and exact order, and the same local tables. The tables determine the original local characters, so these counterparts have exactly the restrictions and orders asserted in the Statement. This includes $m=1$ and empty $S$. [F1, F2, F3, step 1.1, step 2.1, construct]

4.1 In the special case with nontrivial displayed product, suppose an ambient matching global character of order $m$ existed. Viewed as $\mu_{2m}$-valued, its finite ray-class table transfers back into $\mathcal L$ by the converse direction of [F2], with the same image, exact order and prescribed local tables. Step 2.1 gives the same nontrivial product internally, contradicting the order-$m$ nonexistence part of [F1]. Thus no such ambient character exists; the order-$2m$ character from step 3.1 supplies the stated alternative. When the product is one, step 3.1 supplies the required order-$m$ character. All clauses of the original Statement follow without ambient Choice. [F1, F2, step 2.1, step 3.1, algebra] ∎
