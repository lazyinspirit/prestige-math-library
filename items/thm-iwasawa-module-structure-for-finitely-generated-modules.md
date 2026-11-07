---
id: thm-iwasawa-module-structure-for-finitely-generated-modules
kind: theorem
title: Structure theorem for finitely generated torsion $\mathbb Z_p\llbracket T\rrbracket$-modules
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 7
deps:
- lem-p-adic-power-series-noetherianity-and-coprime-finite-errors
- lem-coprime-cyclic-pid-quotients-split
- thm-adjugate-identity-over-a-commutative-ring
- thm-p-adic-weierstrass-preparation-for-iwasawa-power-series
- def-principal-ideal-domain
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: J. Sharifi, Iwasawa Theory lecture notes
    url: https://www.math.ucla.edu/~sharifi/iwasawa.pdf
    locator: Contextual Iwasawa structure reference only; no exact external theorem
      locator or full Sharifi proof freshly verified here.
verification: {}
axiom_use: No choice axiom is assumed. Finite prime valuations bound the special Smith
  construction; all presentation, denominator and relation witnesses are chosen only
  finitely. Finite modules need no continuity hypothesis.
---

## Statement

Let $\Lambda=\mathbb Z_p\llbracket T\rrbracket$ and let $M$ be a finitely generated torsion $\Lambda$-module. There are nonnegative integers $r,s$, positive integers $e_j,m_i$, and monic distinguished irreducible polynomials $f_i\in\mathbb Z_p[T]$ (that is, $f_i\equiv T^{\deg f_i}\pmod p$) such that there is a $\Lambda$-linear map with finite kernel and finite cokernel
$$M\longrightarrow\bigoplus_{j=1}^{r}\Lambda/(p^{e_j})\oplus\bigoplus_{i=1}^{s}\Lambda/(f_i^{m_i}).$$
The multiset of the prime powers $p^{e_j}$ and $f_i^{m_i}$ is unique. A map with finite kernel and cokernel is called a **pseudo-isomorphism** here.

## Statement references

[J. Sharifi, *Iwasawa Theory* (contextual structure reference; exact locator unverified)](https://www.math.ucla.edu/~sharifi/iwasawa.pdf)

## Facts & Assumptions

**Given:** A prime $p$, $R=\mathbb Z_p\llbracket T\rrbracket$, and a finitely generated torsion $R$-module $M$ as in the Statement.

[F1] The ring $R$ is Noetherian local with maximal ideal $\mathfrak m=(p,T)$ and has explicit unique prime factorization into $p$ and monic distinguished irreducible polynomials. Its finitely generated modules have finite presentations and finitely generated submodules. A finitely generated module killed by $f\ne0$ is finite if its localizations at the finitely many irreducible factors of $f$ vanish. [[lem-p-adic-power-series-noetherianity-and-coprime-finite-errors]]

[F2] Finite pairwise coprime cyclic quotients over a PID split by the explicit Chinese remainder/Bezout map, including empty and singleton lists. [[lem-coprime-cyclic-pid-quotients-split]]

[F3] A positive-sized square matrix over a commutative ring satisfies the adjugate determinant identity. [[thm-adjugate-identity-over-a-commutative-ring]]

[F4] The monic distinguished polynomial and unit factors in p-adic Weierstrass preparation are unique. [[thm-p-adic-weierstrass-preparation-for-iwasawa-power-series]]

[F5] A PID is a domain in which every ideal is principal; no general factorization theorem is part of this definition. [[def-principal-ideal-domain]]

## Proof

1.1 If $M=0$, use the zero target and empty lists. Otherwise choose finitely many generators of $M$ and nonzero annihilators of each. Their product is a nonzero annihilator $f$ because $R$ is a domain by [F1]. It is a nonunit since $M\ne0$. List its distinct prime factors as $h_1,\ldots,h_l$ and put $\Sigma=R\setminus\bigcup_i(h_i)$, a multiplicative set containing $1$ but not $0$. Let $A=\Sigma^{-1}R$. By the explicit factorization in [F1], every nonzero element of $A$ is uniquely a unit times $\prod_i h_i^{e_i}$: factors outside this list belong to $\Sigma$ and become units, while each $h_i$ remains a nonunit. This gives nonnegative valuations $v_i$ on $A\setminus\{0\}$, and its units are exactly the elements whose $v_i$ all vanish. [F1, given, construct, algebra]

1.2 For uniqueness, first prove that a finite $R$-module $Q$ vanishes at each prime-element localization without presuming a continuous action. The descending sequence $\mathfrak m^nQ$ consists of subsets of the finite set $Q$ and stabilizes, since a strict inclusion decreases cardinality. Write its stable member as $U=\mathfrak mU$. It is finite, hence has a finite generating list. Express this equality on those generators by a matrix $B$ with entries in $\mathfrak m$. The matrix $I-B$ kills the generator vector. Its determinant is $1$ modulo $\mathfrak m$ and is a unit by locality in [F1], so [F3] gives $U=0$. The zero module or an empty list is immediate. Hence $\mathfrak m^nQ=0$ for some $n$. For $h=p$, the element $T\in\mathfrak m$ is outside $(h)$; for a distinguished irreducible $h$, $p\in\mathfrak m$ is outside $(h)$. Its $n$th power kills $Q$ and is a unit after localization. Thus $Q_{(h)}=0$. [F1, F3, given, construct, algebra]

2.1 Every ideal $J$ of $A$ is principal. For $J\ne0$ let $\nu_i=\min\{v_i(x):0\ne x\in J\}$, choose finitely many $x_i\in J$ attaining these minima, and put $d=\prod_i h_i^{\nu_i}$. Every element of $J$ is divisible by $d$ in $A$. The element $y=\sum_i(x_i/d)\prod_{j\ne i}h_j$ has valuation zero at every $h_i$: modulo $(h_i)A$, which is prime as a localization of the prime $(h_i)$, all terms except the $i$th vanish and that term is nonzero. Thus $y$ is a unit. Since $dy\in J$, we have $d\in J$ and $J=dA$. The zero ideal is principal too, so [F5] makes $A$ an actual PID by this finite construction. In particular an ideal $(a,b)$ has a generator $d$, with $d=ra+sb$, and its valuations are the coordinatewise minima. [F5, step 1.1, construct, algebra]

3.1 A finite matrix over this particular $A$ has Smith diagonal form without invoking a generic PID-to-UFD theorem. Choose a nonzero entry $a$ as pivot and move it to the upper left. If an entry $b$ in its row or column is not divisible by $a$, use the Bezout relation from step 2.1 in an invertible two-by-two row or column operation to replace the pivot by $\gcd(a,b)$; the matrix with rows $(r,s)$ and $(-b/d,a/d)$ has determinant $1$. The sum $\sum_i v_i(a)$ strictly decreases. Once the pivot divides its row and column, clear them. If it does not divide an entry of the remaining block, add that entry's row to the pivot row and perform the same gcd descent. At most the initial finite valuation sum many descents can occur before the pivot divides every entry. Clear its row and column and induct on the smaller matrix. Its entries remain divisible by the first pivot, giving a divisibility diagonal. Zero matrices and empty dimensions are immediate. All choices lie in finite sequences bounded by valuation descent and finite matrix size, not an infinite dependent selection. [step 1.1, step 2.1, construct, algebra]

4.1 By [F1], choose an actual finite presentation $R^u\to R^v\to M\to0$. Localization gives the same quotient presentation over $A$: clearing finitely many denominators proves both the image and relation identities. Apply step 3.1 to its finite matrix. Its cokernel is a direct sum of cyclic quotients and a free module. The latter is zero because the nonzero $f$ annihilates $\Sigma^{-1}M$ over the domain $A$. Each nonunit diagonal element is a unit times a finite product of powers of the $h_i$. Its distinct prime powers are pairwise coprime by step 2.1, so [F2] splits it. This gives an isomorphism $\alpha:\Sigma^{-1}M\to\Sigma^{-1}E$, where $E$ is a finite direct sum of the original $R/(h_i^e)$, with positive exponents and unit or zero summands omitted. [F1, F2, step 1.1, step 2.1, step 3.1, construct, algebra]

5.1 To produce the required map FROM $M$, write the images under $\alpha$ of the $v$ presentation generators with denominators in $\Sigma$. Their finite product $s$ gives elements $y_j\in E$ representing $s\alpha(m_j)$ and a map $R^v\to E$. Each of the $u$ relation generators has image zero after localization, so choose one $t_k\in\Sigma$ killing that image. Multiply all $y_j$ by $t=\prod_k t_k$; the resulting map kills every relation and factors to an $R$-linear map $\phi:M\to E$. Its localization is $st\alpha$, an isomorphism since $st$ is a unit in $A$. Empty presentation/relation lists use the product $1$. This is one finite common denominator including ALL relations. [F1, step 4.1, construct, algebra]

6.1 Its kernel $K$ is finitely generated by [F1], and its cokernel $C$ is finitely generated as a quotient of $E$. The kernel is killed by $f$; the cokernel is killed by the product of the prime powers defining $E$. Their annihilators thus have irreducible factors only among the $h_i$. The localized isomorphism in step 5.1 makes both $K_{(h_i)}$ and $C_{(h_i)}$ zero: a zero localized kernel element is killed by a denominator in $\Sigma$, and a localized cokernel class is in the image after clearing such a denominator; every denominator in $\Sigma$ is outside $(h_i)$. The finite-error criterion [F1] now proves both $K$ and $C$ finite. Normalize each $h_i$ as $p$ or its monic distinguished irreducible polynomial using [F1]; the target is exactly the displayed module in the original Statement, with every p-power part retained. [F1, step 1.1, step 4.1, step 5.1, algebra]

7.1 Consequently ANY map with finite kernel and cokernel becomes an isomorphism at every $(h)$, by clearing denominators and step 1.2. The ring $R_{(h)}$ is explicitly a DVR: its nonzero elements are powers of $h$ times units by [F1], and least valuations generate its ideals. For a finite elementary module localized there, the residue-field dimension of $h^{n-1}M_{(h)}/h^nM_{(h)}$ is the number of its exponents at least $n$. These canonical finite dimensions determine every exponent multiplicity by successive differences, and are preserved by isomorphisms. No residue-field finiteness is required. They recover the full multiset, including p-power exponents. Finally two monic distinguished polynomials associate in $R$ must be equal by [F4]. This proves the exact uniqueness in the Statement and completes the proof for every prime without a choice axiom. [F1, F4, step 6.1, step 1.2, algebra] ∎
