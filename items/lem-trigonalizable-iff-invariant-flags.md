---
id: lem-trigonalizable-iff-invariant-flags
kind: lemma
title: Trigonalizable groups, invariant flags and embeddings into T_n
dependency_level: 7
deps:
  - lem-distinct-characters-are-linearly-independent
  - def-axiom-of-choice
  - lem-finite-dimensional-subcomodules-contain-elements
  - lem-nonaffine-group-image-exact-quotient-properties
  - thm-nonaffine-affine-normal-group-quotient-affine
  - thm-multiplicative-type-groups-and-galois-character-modules
  - def-affine-scheme
  - def-diagonalizable-group-and-character-module
  - def-group-scheme-over-a-field
  - def-trigonalizable-algebraic-group
  - def-unipotent-algebraic-group
  - def-upper-unitriangular-group-scheme
  - lem-nonaffine-affine-group-faithful-representation
  - lem-nonaffine-group-monomorphism-closed-immersion
  - lem-representations-of-diagonalizable-groups-are-sums-of-eigenspaces
  - thm-unipotent-group-triangular-criterion
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
status: draft
origin: pipeline
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
      locator: Proposition 16.2 and Corollaries 16.3-16.4, printed pp. 324-325
    - title: Florian Herzig, Linear Algebraic Groups (University of Toronto lecture notes, 2013)
      url: https://www.math.toronto.edu/~herzig/lin-alg-groups13.pdf
      locator: Proposition 119 (Lie-Kolchin), printed p. 50 (smooth connected solvable specialization only)
---
## Statement

Let $k$ be a field and let $G$ be an affine algebraic group over $k$ ([[def-affine-scheme]], [[def-group-scheme-over-a-field]]). Consider the following conditions:

(a) $G$ is trigonalizable ([[def-trigonalizable-algebraic-group]]);

(b) every finite-dimensional rational representation of $G$ admits a basis in which $G$ acts through upper triangular matrices;

(c) $G$ is isomorphic to a closed subgroup scheme of the upper triangular group scheme $T_n=D_n\ltimes U_n$ for some $n$ ([[def-upper-unitriangular-group-scheme]]);

(d) $G$ contains a normal unipotent closed subgroup $U$ ([[def-unipotent-algebraic-group]]) with $G/U$ diagonalizable ([[def-diagonalizable-group-and-character-module]]).

Without a choice assumption, (a) is equivalent to (b), (d) implies (a), and quotients of trigonalizable groups are trigonalizable. Assuming the Axiom of Choice ([[def-axiom-of-choice]]) for the faithful-embedding and geometric kernel/image suppliers, all four conditions are equivalent; closed subgroups are then trigonalizable, and trigonalizability is preserved by extension of the base field. Only these embedding and geometric-conversion routes use AC.

## Facts & Assumptions

**Given:** A field $k$ and an affine algebraic group $G$ over $k$; AC is assumed only for the embedding and geometric-conversion routes.

[F1] $G$ is trigonalizable when every simple rational representation of $G$ has dimension one. ([[def-trigonalizable-algebraic-group]])

[F2] Assume AC. $G$ has a faithful finite-dimensional representation, i.e. a monomorphism $G\to\mathrm{GL}_n$, and every monomorphism of finite-type group schemes over a field is a closed immersion. ([[lem-nonaffine-affine-group-faithful-representation]], [[lem-nonaffine-group-monomorphism-closed-immersion]])

[F3] Under AC for the geometric closed-subgroup conversion, $T_n=D_n\ltimes U_n$ is the upper triangular group scheme, $U_n$ is normal in $T_n$, $T_n/U_n\cong D_n$ is diagonalizable, and $U_n$ is unipotent, so a closed subgroup of $T_n$ intersected with $U_n$ is unipotent and its quotient embeds in $D_n$. ([[def-upper-unitriangular-group-scheme]], [[thm-unipotent-group-triangular-criterion]])

[F4] A diagonalizable group is trigonalizable, and a unipotent group is trigonalizable; every rational representation of a diagonalizable group is a choice-free direct sum of character eigenspaces, which may have arbitrary multiplicity. Every nonzero such representation contains a character line by taking a nonzero vector of a nonzero eigenspace; no simultaneous basis choice is used. ([[def-diagonalizable-group-and-character-module]], [[lem-representations-of-diagonalizable-groups-are-sums-of-eigenspaces]], [[def-trigonalizable-algebraic-group]])


[F5] Every vector of a rational representation lies in a finite-dimensional subrepresentation. A simple rational representation is therefore finite-dimensional, and a nonzero finite-dimensional module has a simple submodule by minimizing the dimension of nonzero submodules. ([[lem-finite-dimensional-subcomodules-contain-elements]])

[F6] Assume AC. A homomorphism of affine finite-type groups identifies its quotient by its scheme kernel with its closed scheme-theoretic image; quotients by closed normal affine subgroups are affine. A closed subgroup of a diagonalizable group is diagonalizable: its coordinate Hopf algebra is a quotient of $k[M]$, hence is spanned by images of group-like elements. Distinct such images are linearly independent by the group-like argument of [[lem-distinct-characters-are-linearly-independent]], so this quotient is the group algebra of the quotient of $M$ obtained by identifying equal images (Milne Theorem 12.9(c), printed pp. 233-234). ([[lem-nonaffine-group-image-exact-quotient-properties]], [[thm-nonaffine-affine-normal-group-quotient-affine]], [[thm-multiplicative-type-groups-and-galois-character-modules]])

## Proof

**Given:** A field $k$ and an affine algebraic group $G$ over $k$; AC is assumed only for the embedding and geometric-conversion routes.

1.1 Assume (a), and let $V$ be a nonzero finite-dimensional rational representation. By [F1] every simple subquotient of $V$ is one-dimensional (and trivial or a character), so $V$ contains a one-dimensional subrepresentation $V_1$; by induction on $\dim V$ the quotient $V/V_1$ has a complete $G$-stable flag with one-dimensional successive quotients, and pulling it back along $V\to V/V_1$ and prepending $V_1$ gives such a flag on $V$, i.e. a basis as in (b). Hence (a) implies (b). [F1]

1.2 Assume (b) and AC. By [F2] choose a faithful finite-dimensional representation $G\to\mathrm{GL}(V)$; in a basis as in (b) it factors through $T_n$ for $n=\dim V$, and the monomorphism $G\to T_n$ is a closed immersion by [F2]. Hence (b) implies (c). [F2]

1.3 Assume (c) and AC, so that $G\subseteq T_n$ is a closed subgroup scheme. Put $U=G\cap U_n$; it is a closed subgroup of the unipotent group $U_n$, hence unipotent, and it is normal in $G$ because $U_n$ is normal in $T_n$. The diagonal homomorphism $G\to D_n$ has scheme kernel $U$; by [F6], its affine quotient $G/U$ is its closed image in $D_n$ and is diagonalizable. Hence (c) implies (d) under the specified AC premise. [F3, F6]

1.4 Assume (d), and let $S$ be a simple rational representation of $G$. The definition of unipotence gives a nonzero fixed vector in the nonzero restricted representation $S|_U$; the fixed subspace $S^U$ is nonzero and $G$-stable because $U$ is normal. Since $U$ acts trivially on $S^U$, it is a representation of $G/U$, which is diagonalizable; the choice-free weight decomposition [F4] supplies a nonzero character eigenspace and hence a character line, and simplicity of $S$ forces $\dim S=1$. Hence (d) implies (a). [F4]

2.1 Conversely, (b) implies (a) without choice: a simple rational representation is finite-dimensional by [F5], and the first line of its triangular flag is a nonzero subrepresentation, hence is the whole representation. Together with step 1.1 this proves the choice-free equivalence (a) iff(b); step 1.4 proves the choice-free implication (d) implies(a). Steps1.2 and1.3 under AC complete the full equivalence. [F5, step 1.1, step 1.2, step 1.3, step 1.4]

3.1 A quotient $G/N$ is trigonalizable without choice because its simple representations pull back to simple representations of $G$: invariant subspaces are the same under the faithfully flat quotient. Assume AC for the remaining geometric routes. A closed subgroup $H\subseteq G$ inherits the closed embedding $G\hookrightarrow T_n$ from (c), and the proved implication (c) implies(d) implies(a) makes $H$ trigonalizable. For any field extension $k'/k$, base change gives $G_{k'}\hookrightarrow(T_n)_{k'}$, and the same implication over $k'$ gives trigonalizability. These arguments preserve all subgroup and field-extension claims with the local AC premise, without assuming that representations of $H$ extend to $G$. [F6, step 1.2, step 1.3, step 1.4] ∎

