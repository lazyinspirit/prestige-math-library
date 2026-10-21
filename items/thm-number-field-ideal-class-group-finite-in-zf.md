---
id: thm-number-field-ideal-class-group-finite-in-zf
kind: theorem
title: "The ideal class group of a number field is finite in ZF"
status: draft
origin: session
deps: [lem-axis-box-lattice-point-in-zf, thm-number-field-integral-ideal-factorisation-in-zf, thm-ring-of-integers-and-ideals-are-full-lattices, thm-ring-of-integers-free-of-rank-degree, thm-principal-ideal-norm-is-absolute-field-norm, thm-ideal-norm-is-multiplicative, lem-finitely-many-number-field-ideals-of-bounded-norm, def-minkowski-embedding-of-a-number-field, def-field-norm-and-trace]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "J. S. Milne, Algebraic Number Theory, Theorems 4.3 and 4.4"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
---

## Statement

In ZF, for every number field $K$, all nonzero fractional ideals of $R=\mathcal O_K$ are invertible, and their quotient by the principal fractional ideals is a finite abelian group $\mathrm{Cl}(K)$. More explicitly, let $n=r+2s$ be the degree and signature of $K$, and let $D>0$ be the covolume of the unscaled Minkowski lattice of $R$. Every ideal class has an integral representative of norm less than $2^{s+1}D$. In particular, some positive integer $h$ annihilates $\mathrm{Cl}(K)$, so every nonzero prime ideal has principal $h$th power. No choice principle is assumed.

## Facts & Assumptions

**Given:** $K,R,n,r,s,D$ as in the statement; Minkowski coordinates are the real embeddings and the real and imaginary parts of one embedding from each complex-conjugate pair.

[F1] Nonzero integral ideals admit unique finite prime factorisation in ZF, and equality of such ideals can be tested at all maximal localizations, whose nonzero ideals are powers of their maximal ideal ([[thm-number-field-integral-ideal-factorisation-in-zf]]).

[F2] $R$ and its nonzero fractional ideals have full Minkowski lattices with explicit finite bases, and $R$ has an integral basis ([[thm-ring-of-integers-and-ideals-are-full-lattices]], [[thm-ring-of-integers-free-of-rank-degree]]).

[F3] Principal integral ideal norms equal absolute field norms, and integral ideal norms are multiplicative ([[thm-principal-ideal-norm-is-absolute-field-norm]], [[thm-ideal-norm-is-multiplicative]]).

[F4] There are finitely many integral ideals of bounded norm ([[lem-finitely-many-number-field-ideals-of-bounded-norm]]).

[F5] The axis-box lattice theorem is choice free ([[lem-axis-box-lattice-point-in-zf]]).

[F6] Multiplication by $a$ is conjugated by the invertible Minkowski basis matrix in [F2] to the block-diagonal real map with real blocks $\sigma_i(a)$ and complex blocks $\begin{pmatrix}\operatorname{Re}\tau_j(a)&-\operatorname{Im}\tau_j(a)\\\operatorname{Im}\tau_j(a)&\operatorname{Re}\tau_j(a)\end{pmatrix}$. Taking determinants, each complex block contributes $|\tau_j(a)|^2$. Therefore in the Minkowski coordinates, $|N_{K/\mathbb Q}(a)|=\prod_{i=1}^r|\sigma_i(a)|\prod_{j=1}^s|\tau_j(a)|^2$ ([[def-minkowski-embedding-of-a-number-field]], [[def-field-norm-and-trace]]).

## Proof

1.1 Fix one integral basis of $R$ and use its finite integer coordinates to give every element of $R$ a natural-number code. Fix a nonzero prime $\mathfrak p$ and a nonzero $a\in\mathfrak p$, for example its least-coded nonzero element. Factor $(a)=\mathfrak p^eQ$ with $e\ge1$ and $Q$ a product of the other prime powers. The inequality $e\ge1$ follows either by localization at $\mathfrak p$ or by primality applied to the product and maximality of distinct prime factors. Then $J=a^{-1}\mathfrak p^{e-1}Q$ is a fractional ideal and $\mathfrak pJ=R$. Thus every nonzero prime ideal is invertible, and [F1] makes every nonzero integral ideal invertible. If $I$ is fractional, choose $0\ne d\in R$ with $dI\subseteq R$; then $I=d^{-1}(dI)$ is invertible too. An inverse is unique: $IJ=IH=R$ implies $J=J(IH)=(JI)H=H$. Products are commutative and associative directly from finite sums of products, so fractional ideals form an abelian group; its principal ideals are a subgroup. [F1, F2, given, algebra]

1.2 For completeness the covolume of an integral ideal $I$ is $N(I)D$. In the fixed basis of $R$, its full integral basis gives a nonsingular integer matrix $A$, and its index is $[\mathbb Z^n:A\mathbb Z^n]=|\det A|$. This index identity uses a finite induction: project the subgroup onto the first coordinate, whose image is $d\mathbb Z$ with $d>0$; a lift with first coordinate $d$, together with an inductive basis of the kernel, gives a block triangular matrix. Cosets are represented uniquely by first-coordinate residues $0,\ldots,d-1$ and representatives for the kernel in the remaining coordinates. Both the index and the absolute determinant are therefore $d$ times their respective kernel values; the base case has value one. Changing between two integer bases has determinant $\pm1$, since the transition and its inverse are integer matrices. The index is by definition $N(I)$ and determinants multiply under basis changes, proving the covolume identity. [F2, algebra]

2.1 Apply [F5] to the lattice of a nonzero integral ideal $I$, using the same bound $t=(2N(I)D)^{1/n}$ on every one of its $n$ real coordinates. Its product is $2N(I)D$, strictly larger than the covolume. We obtain $0\ne a\in I$ with real embedding absolute values below $t$ and each complex embedding absolute value below $\sqrt2t$. Consequently [F6] gives $|N_{K/\mathbb Q}(a)|<2^st^n=2^{s+1}N(I)D$. Put $J=(a)I^{-1}$. This is integral because $(a)\subseteq I$ and multiplication by $I^{-1}$ preserves inclusion. From $IJ=(a)$ and [F3] we obtain $N(J)=|N_{K/\mathbb Q}(a)|/N(I)<2^{s+1}D$. Its class is the inverse of the class of $I$. [F3, F5, F6, step 1.1, step 1.2, algebra]

3.1 Every fractional ideal class has an integral representative, by multiplying the ideal by its clearing denominator. Inversion permutes the class group, so step 2.1 shows that the finite set of integral ideals of norm less than $2^{s+1}D$ surjects onto the class group. Finiteness follows from [F4], using any larger bound at least one if necessary. Let $h$ be the factorial of the finite cardinality of this group. For any element $g$, two of $1,g,\ldots,g^m$ repeat when the group has cardinality $m$; hence the least positive order of $g$ is at most $m$ and divides $m!$. Thus $g^h=1$, and in particular $\mathfrak p^h$ is principal. All constructions used finite induction, finite sets or least codes after fixing one integral basis. There was no simultaneous selection over an arbitrary family. [F4, step 1.1, step 2.1, algebra] ∎
