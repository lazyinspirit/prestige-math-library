---
id: lem-local-quadratic-norm-and-square-class-preparations
kind: lemma
title: Local quadratic norm and square-class preparations
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-order-two-herbrand-quotients-multiply, thm-quadratic-local-norm-group-has-index-two, lem-number-field-completion-tensor-and-norm-in-zf]
proof_strategy: direct
sources:
  references:
    - title: J. S. Milne, Class Field Theory, III section 1, Proposition 1.2; VII section 6, Proposition 6.8
      url: https://www.jmilne.org/math/CourseNotes/CFT.pdf
---

## Statement

For a finite extension $K/\mathbb Q_p$ of degree $d$, write $U_K$ for the unit group. Then $|U_K/U_K^2|=2$ and $|K^\times/K^{\times2}|=4$ if $p\ne2$; if $p=2$, these orders are $2^{d+1}$ and $2^{d+2}$. Squares form an open subgroup. For an unramified quadratic extension $L/K$, the unit norm $U_L\to U_K$ is surjective, and every norm-one unit is $y/\sigma y$ for a unit $y$. More generally, at a finite prime not dividing $2$ or any of the entries $a_1,\ldots,a_r$, an extension of number fields obtained by adjoining their square roots is unramified and its completion degree is at most $2$. The residue-field Frobenius generates its local Galois group. A unit $a$ has a square root in that completion of the base field exactly when Frobenius fixes a chosen square root of $a$ in the extension.

## Statement references

[[lem-order-two-herbrand-quotients-multiply]]

[[thm-quadratic-local-norm-group-has-index-two]]

[[lem-number-field-completion-tensor-and-norm-in-zf]]

## Facts & Assumptions

**Given:** The fields and entries in the statement. In the final assertion the entries are units at the prime, and $\sigma$ is the nontrivial automorphism of a quadratic extension. All residue fields are finite.

[F1] The order-two quotient $h$ multiplies in exact sequences and is unchanged by finite-index equivariant inclusions. [[lem-order-two-herbrand-quotients-multiply]]

[F2] Rings of integers of finite extensions of $\mathbb Q_p$ are full $\mathbb Z_p$-lattices, and logarithm identifies $1+p^n\mathcal O_K$ with $p^n\mathcal O_K$ for $n\ge2$, equivariantly for field automorphisms. These facts and their power-series proofs are supplied in [[thm-quadratic-local-norm-group-has-index-two]].

[F3] Number-field completions and their norm maps have the finite tensor and determinant descriptions proved in [[lem-number-field-completion-tensor-and-norm-in-zf]].

## Proof

1.1 Regard the groups $U_K$ and $\mathcal O_K$ as modules with trivial involution. Then $T_0(\mathcal O_K)=\mathcal O_K/2\mathcal O_K$ and $T_1(\mathcal O_K)=0$. By [F1] and [F2], $h(U_K)=|\mathcal O_K/2\mathcal O_K|$. On $U_K$, $T_1$ consists of the two elements $1,-1$, so $$|U_K/U_K^2|=2|\mathcal O_K/2\mathcal O_K|.$$ The latter ring has order $1$ if $p\ne2$ and $2^d$ if $p=2$, by its rank-$d$ integral lattice. Splitting the valuation gives one additional factor $2$ for $K^\times/K^{\times2}$. Finally a sufficiently small principal unit has half its logarithm still in the exponential domain, so is a square. For example $1+p^4\mathcal O_K\subseteq K^{\times2}$. Thus squares are open. [F1, F2, construct, algebra]

1.2 The multiplicative group of a finite field is cyclic. Here is the finite argument needed below. In a finite abelian group, the largest order $m$ of an element is divisible by every element order: otherwise combining the appropriate prime-power parts of two elements would produce order greater than $m$. The resulting exponent $m$ annihilates every element. For a finite subgroup of a field's multiplicative group, the root bound for $X^m-1$ therefore gives group order at most $m$; the cyclic subgroup of order $m$ gives the reverse inequality, so it is the whole group. If $l/k$ is a quadratic extension of finite fields, with $|k|=q$, its norm $x\mapsto x^{q+1}$ is consequently onto $k^\times$. Its trace $x\mapsto x+x^q$ is a nonzero $k$-linear map onto $k$: if it vanished identically, every $x\in l$ would satisfy $x^q=-x$, a polynomial with at most $q$ roots. [given, construct, algebra]

2.1 For an unramified quadratic $L/K$, a uniformizer $\pi$ of $K$ remains a uniformizer. The residue extension is quadratic, and $\sigma$ reduces to its nontrivial Frobenius. To verify this directly, lift a generator of the residue extension; its minimal polynomial has degree $2$ and separable irreducible reduction, so its two conjugates have distinct residues. In particular norm and trace reduce to the finite-field norm and trace in step 1.2. To lift a prescribed unit norm, first choose a unit of $L$ with the correct norm modulo $\pi$. For $n\ge1$, $$N(1+\pi^n x)\equiv1+\pi^n\operatorname{Tr}(x)\pmod{\pi^{n+1}}.$$ Surjectivity of residue trace therefore corrects the norm one digit at a time; the convergent product of the corrections has exactly the prescribed norm. Fixing a finite list of residue representatives and taking the first possible correction makes this a definite recursion. If $z\in U_L$ has norm $1$, the explicit Hilbert-90 calculation gives $z=y/\sigma y$ with $y=1+z$ when $z\ne-1$, and with a nonzero trace-zero $y$ when $z=-1$. Multiplying $y$ by $\pi^{-v_L(y)}\in K$ makes it a unit without changing the quotient. [step 1.2, construct, algebra]

2.2 At an odd-residue-characteristic place, a unit $a$ with square residue is a square locally. Start with a unit $x_0$ of that residue and use Newton iteration $$x_{n+1}=x_n-(x_n^2-a)/(2x_n).$$ The error valuation doubles at each iteration, denominators remain units, and completeness gives a square root. If the residue is nonsquare, $X^2-a$ has irreducible separable reduction. For its root $\alpha$, define the valuation of $c+d\alpha$ to be the minimum of the two coefficient valuations. This is multiplicative: after removing those powers of the base uniformizer, the reductions are nonzero in the field $k[T]/(T^2-\bar a)$, and their product is nonzero there. It extends the base valuation, is complete on the two coefficient coordinates, and has valuation ring $\mathcal O_K+\mathcal O_K\alpha$. The residue field has degree $2$ and $\pi$ remains a uniformizer. Thus this is the unramified quadratic extension. All nonsquare unit residues belong to the same square class of the cyclic residue group, so their ratios have square residue and hence are squares locally. Therefore adjoining any finite family of unit square roots gives either the base field or this single unramified quadratic field. [F3, step 1.2, construct, algebra]

3.1 In the nontrivial case of step 2.2, Frobenius on the quadratic residue field swaps the two residues of a square root of each nonsquare unit, whereas it fixes the base field and all roots of square units. This proves the final fixed-root criterion. In the trivial case both assertions hold with the identity Frobenius. For a global multiquadratic extension the number-field tensor decomposition [F3] identifies these local fields with exactly its completions. Thus the indicated primes are unramified, the local degree is at most $2$, and Frobenius generates the local Galois group as claimed. [F3, step 2.2, algebra] ∎

