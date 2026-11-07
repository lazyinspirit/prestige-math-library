---
id: lem-cyclotomic-character-unramified-away-from-ell
title: "The ℓ-adic cyclotomic character is unramified away from ℓ"
kind: lemma
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 8
deps:
  - thm-local-absolute-galois-group-residue-exact-sequence
  - thm-decomposition-group-at-a-global-place-is-the-local-absolute-galois-group
  - def-global-field
  - def-continuous-l-adic-galois-representation
  - def-unramified-galois-representation-at-a-place
  - def-absolute-galois-group-of-a-local-field
  - def-local-inertia-subgroup-of-absolute-galois-group
  - def-local-field-valuation-ring-uniformizer-and-residue-field
  - thm-absolute-galois-group-of-finite-field-is-procyclic
  - thm-unique-extension-of-a-nonarchimedean-absolute-value
  - def-arithmetic-frobenius-coset
  - thm-unramified-frobenius-element-exists-uniquely
  - def-axiom-of-choice
  - def-dependent-choice
  - def-countable-choice
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Jean-Pierre Serre, Abelian ℓ-adic Representations and Elliptic Curves, Chapter I, §§1.2 and 2.1"
      url: "https://www.math.mcgill.ca/darmon/courses/18-19/gs/serre-mcgill.pdf"
    - title: "J. S. Milne, Algebraic Number Theory, version 3.08, Chapter VII, Proposition 7.50, Corollaries 7.51–7.52, and Example 7.54"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
verification: {}
---

## Statement

Assume AC, DC, and Countable Choice as declared by the global and local
Galois-group interfaces. Let $F$ be a number field, let $\ell$ be a prime, and
fix a separable closure $\bar F/F$. For each $n\ge1$, the action of
$G_F=\operatorname{Gal}(\bar F/F)$ on the cyclic group of $\ell^n$-th roots
of unity defines a character
$\chi_{\ell,n}:G_F\to(\mathbb Z/\ell^n\mathbb Z)^\times$, characterized by
$\sigma(\zeta)=\zeta^{\chi_{\ell,n}(\sigma)}$ for every such root $\zeta$.
These characters are compatible under reduction and define the continuous
$\ell$-adic cyclotomic character
$\chi_\ell:G_F\to\mathbb Z_\ell^\times\subset\mathbb Q_\ell^\times$. If $v$
is a finite place of $F$ with residue field of order $q_v$ and residue
characteristic $p_v\ne\ell$, then $\chi_\ell$ is unramified at $v$, and its
value on arithmetic Frobenius is $q_v$.

## Statement references

[Jean-Pierre Serre, *Abelian ℓ-adic Representations and Elliptic Curves*, Chapter I, §§1.2 and 2.1](https://www.math.mcgill.ca/darmon/courses/18-19/gs/serre-mcgill.pdf)

[J. S. Milne, *Algebraic Number Theory*, version 3.08, Chapter VII, Proposition 7.50, Corollaries 7.51–7.52, and Example 7.54](https://www.jmilne.org/math/CourseNotes/ANT.pdf)

## Facts & Assumptions

**Given:** AC, DC, and Countable Choice, a number field $F$, a prime $\ell$,
a separable closure $\bar F/F$, and a finite place $v$ with residue field
$\mathbb F_{q_v}$ of characteristic $p_v\ne\ell$.

[A1] [[def-axiom-of-choice]]: AC is the choice-function axiom used in the
absolute-Galois and place conventions.

[A2] [[def-dependent-choice]]: DC is retained from the stated consumer hypotheses; the AC global/local proof implies DC and CC, without an additional independent DC use.

[A3] [[def-countable-choice]]: Countable Choice is selected choice from a
countable family of nonempty sets and is required by the local completion and
finite-unramified-extension suppliers.

[F1] [[def-global-field]]: a number field is a finite extension of $\mathbb Q$.

[F2] [[def-continuous-l-adic-galois-representation]]: the global representation
uses the Krull topology on $G_F$ and the $\ell$-adic topology on
$\mathbb Q_\ell$.

[F3] [[def-local-field-valuation-ring-uniformizer-and-residue-field]]: the
completion $F_v$ is a complete discretely valued local field with finite
residue field $\mathbb F_{q_v}$.

[F4] [[def-unramified-galois-representation-at-a-place]]: unramified at $v$
means that the representation is trivial on $I_{\bar v}$.

[F5] [[def-absolute-galois-group-of-a-local-field]]: the local absolute
Galois group is the inverse limit of finite Galois groups with inverse-limit
topology. Its current body is present and draft.

[F6] [[def-local-inertia-subgroup-of-absolute-galois-group]]: local inertia is
the inverse limit of finite inertia groups $G_0(E/F_v)$, which act trivially
on finite residue fields. Its current body is present and draft.

[F7] [[thm-absolute-galois-group-of-finite-field-is-procyclic]]: the arithmetic
Frobenius $x\mapsto x^{q_v}$ is a topological generator of the absolute
Galois group of the finite residue field. Its current proof is draft.

[F8] [[def-arithmetic-frobenius-coset]]: in a finite Galois extension of
number fields, arithmetic Frobenius is normalized by the residue power map
$x\mapsto x^{q_v}$; geometric Frobenius is its inverse.

[F9] [[thm-unramified-frobenius-element-exists-uniquely]]: in an unramified
finite Galois extension of number fields, the arithmetic Frobenius coset has
one representative characterized by this residue action.

[F10] [[thm-unique-extension-of-a-nonarchimedean-absolute-value]]: every
finite extension of the complete nonarchimedean field $F_v$ has the unique
extending absolute value, so each finite field containing a root of unity has
a well-defined valuation ring and residue map.

[F12] [[thm-decomposition-group-at-a-global-place-is-the-local-absolute-galois-group]]: under AC, the global decomposition group at every finite place is the local absolute Galois group; the identification preserves residue kernels, and all prolongations are conjugate with residue maps commuting with arithmetic Frobenius.

[F13] [[thm-local-absolute-galois-group-residue-exact-sequence]]: under AC the local residue action is surjective and has kernel absolute inertia.


## Proof


1.1 For every $n$, $X^{\ell^n}-1$ is separable over $F$ because $\operatorname{char}F=0$. The Galois action on its cyclic root group is by power automorphisms, so it defines $\chi_{\ell,n}$; its finite splitting field gives an open kernel in the Krull topology, and the compatible inverse limit is continuous in the $\ell$-adic topology. [A1, F1, F2, given, construct]

1.2 If two $\ell^n$-th roots $\zeta,\zeta'$ have the same residue, their quotient $\eta=\zeta'/\zeta$ is an $\ell^n$-th root reducing to $1$. By [F10] this residue is defined in a finite extension containing the roots. Since $X^{\ell^n}-1=(X-1)(1+X+\cdots+X^{\ell^n-1})$, $\eta\ne1$ would force the second factor to vanish, but its residue is $\ell^n\ne0$ because $p_v\ne\ell$. Thus $\zeta=\zeta'$. [F3, F10, given, algebra]

2.1 For $\sigma\in I_{\bar v}$, the local/global interface [F12] makes its residue action trivial. Then $\sigma(\zeta)$ and $\zeta$ have the same residue for every $\ell^n$-th root $\zeta$; step 1.2 makes them equal for every $n$, hence $\chi_\ell|_{I_{\bar v}}=1$ and the character is unramified at $v$. [A2, A3, F4, F5, F6, step 1.2, F12, F13, given]

3.1 By [F12, F13], an arithmetic Frobenius lift acts on residues by $x\mapsto x^{q_v}$. Thus $\sigma(\zeta)$ and $\zeta^{q_v}$ are $\ell^n$-th roots with the same residue; step 1.2 makes them equal. Therefore $\chi_{\ell,n}(\operatorname{Frob}_v)=q_v\bmod\ell^n$ for every $n$, so $\chi_\ell(\operatorname{Frob}_v)=q_v$ in $\mathbb Z_\ell^\times$. [A2, A3, F7, F8, F9, step 1.2, F12, F13, algebra] ∎
