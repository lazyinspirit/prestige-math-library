---
id: lem-rational-k-z-n-calculation-through-weak-cw-fiber-comparison
kind: lemma
title: "Rational cohomology of K(Z,n) through weak CW fiber comparison"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps:
  - lem-covering-homotopies-lift-by-finite-local-strips
  - lem-rationalization-is-exact-and-commutes-with-singular-homology
  - thm-cw-approximation-of-an-arbitrary-space
  - lem-weak-homotopy-equivalences-induce-integral-homology-isomorphisms-without-choice
  - thm-existence-and-homotopy-uniqueness-of-eilenberg-maclane-spaces
  - thm-long-exact-sequence-of-homotopy-groups-of-a-fibration
  - thm-mapping-path-factorization
  - thm-absolute-hurewicz-theorem
  - thm-fundamental-group-of-the-circle
  - cor-real-line-is-universal-cover-of-circle
  - cor-homology-of-spheres
  - cor-contractible-nonempty-spaces-have-the-homology-of-a-point
  - cor-cohomology-over-a-field-is-dual-to-homology-over-that-field
  - thm-cohomological-serre-spectral-sequence
  - thm-multiplicative-structure-on-the-cohomological-serre-spectral-sequence
  - thm-singular-cohomology-is-graded-commutative
  - prop-cup-product-is-natural-unital-and-associative
  - def-axiom-of-choice
dependency_level: 1
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Allen Hatcher, Algebraic Topology"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
      locator: "§5.1, cohomology spectral sequences and multiplicative structure, printed pp.543–549; strict-loop weak-CW comparison proved locally"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume AC. For each marked CW K(Z,n), n≥1, rational cohomology is Q[x_n] when n is even and Λ_Q(x_n) when n is odd, with |x_n|=n and x_n dual to the marked generator. In particular positive rational homology below 2n vanishes except for the one-dimensional group in degree n.

## Facts & Assumptions

**Given:** AC; a marked CW model $K(\mathbb Z,n)$, $n\ge1$, with its fundamental class; the actual path fibration $\Omega K(\mathbb Z,n)\to PK(\mathbb Z,n)\to K(\mathbb Z,n)$; and the rational rationalization interface of [[lem-rationalization-is-exact-and-commutes-with-singular-homology]].

[F1] Rationalization is exact, commutes with singular homology and identifies $H_j(Y;\mathbb Z)\otimes\mathbb Q$ with $H_j(Y;\mathbb Q)$ ([[lem-rationalization-is-exact-and-commutes-with-singular-homology]]).

[F2] The mapping-path factorization, the fibration exact sequence, CW approximation with prescribed basepoint, marked Eilenberg–Mac Lane uniqueness, weak-equivalence homology, absolute Hurewicz and the sphere homology computation supply the loop comparison ([[thm-mapping-path-factorization]], [[thm-long-exact-sequence-of-homotopy-groups-of-a-fibration]], [[thm-cw-approximation-of-an-arbitrary-space]], [[thm-existence-and-homotopy-uniqueness-of-eilenberg-maclane-spaces]], [[lem-weak-homotopy-equivalences-induce-integral-homology-isomorphisms-without-choice]], [[thm-absolute-hurewicz-theorem]], [[cor-homology-of-spheres]]).

[F3] Every covering is a Hurewicz fibration ([[lem-covering-homotopies-lift-by-finite-local-strips]]). The real line is the universal cover of the circle, the circle has fundamental group $\mathbb Z$, cohomology over a field is dual to homology, and the multiplicative cohomological Serre spectral sequence converges with a Leibniz rule ([[cor-real-line-is-universal-cover-of-circle]], [[thm-fundamental-group-of-the-circle]], [[cor-cohomology-over-a-field-is-dual-to-homology-over-that-field]], [[thm-cohomological-serre-spectral-sequence]], [[thm-multiplicative-structure-on-the-cohomological-serre-spectral-sequence]]).

[F4] Cup products are natural and unital and singular cohomology is graded commutative, so $x^2=0$ for odd-degree generators ([[prop-cup-product-is-natural-unital-and-associative]], [[thm-singular-cohomology-is-graded-commutative]]); a contractible nonempty space has the homology of a point ([[cor-contractible-nonempty-spaces-have-the-homology-of-a-point]]).

[F5] AC chooses CW models, marked equivalences and a detecting functional in the field-duality argument ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 For n≥2 the actual loop fiber of the path fibration of K(Z,n) is path-connected and has Z as its only positive homotopy group, in degree n−1, by the fibration exact sequence. A weak CW approximation L→ΩK(Z,n), preserving a basepoint vertex, makes L a marked K(Z,n−1). Marked CW uniqueness gives a marked homotopy equivalence K(Z,n−1)→L. Its composite into the strict loop fiber is a weak equivalence. The published weak-equivalence/homology lemma and the rationalization lemma identify rational homology; natural field-dual evaluation identifies rational cohomology as well. Pullback preserves cup products by the published cup-product supplier, so this is an actual cohomology-ring isomorphism. A homotopy inverse on the strict fiber is unnecessary. This construction is independent of the cohomology calculation and of Schön's theorem. [given, F1, F2, F5]

2.1 Use the standard circle CW structure with one vertex and one edge. The real-line covering is a Hurewicz fibration by the covering-homotopy supplier; its contractible total, discrete fiber, and fibration exact sequence give no higher circle homotopy groups, while the published circle fundamental-group theorem marks its degree-one group as $\mathbb Z$. Thus $S^1$ is a marked CW $K(\mathbb Z,1)$. CW uniqueness, sphere homology and field duality give H^*(K(Z,1);Q)=Λ(x_1). Induct on n≥2 using the preceding loop comparison. Write A=H^*(K(Z,n);Q). First integral Hurewicz, the rationalization lemma and field duality give A^0=Q, A^p=0 for 0<p<n and A^n=Q. The rational cohomological Serre sequence of the path fibration has E_2=A⊗H^*(K(Z,n−1);Q): each nonzero fiber degree group is Q, so no infinite-dimensional constant-coefficient identification is being assumed. Its abutment is Q in degree zero and zero elsewhere. [step 1.1, F2, F3]

3.1 For even n the fiber ring is Λ(y), |y|=n−1. Only rows 0 and n−1 occur. The only possible differential is d_n and it is nonzero, because otherwise y would survive in the positive-degree contractible abutment. Its value is a nonzero scalar multiple of the normalized generator x∈A^n; rescale the rational fiber generator y so that d_n(y)=x. For each p≥0 the map A^p y→A^{p+n}, a y↦(−1)^p a x, is injective: its upper-row kernel has no incoming differential, no subsequent outgoing differential, and would survive in positive total degree. It is surjective because its bottom-row cokernel also has no remaining incoming or outgoing differential and would survive. Induction on degree, starting with A^0=Q and the initial vanishing, therefore gives A=Q[x]. [step 2.1, F3, algebra]

4.1 For odd n the fiber ring is Q[y], |y|=n−1 even. Before page n no differential joins two occupied rows. The class y has only the possible differential d_n into A^n, and must die. Its value is a nonzero scalar multiple of the normalized generator x∈A^n; rescale the rational fiber generator y so that d_n(y)=x. Graded commutativity gives x^2=0, and the Leibniz formula gives d_n(y^k)=k y^{k−1}x. Suppose A has a nonzero class in some degree p>n; choose the least such p. A nonzero bottom-row class a∈A^p cannot be hit by d_n: its source has base degree p−n, which is zero by initial vanishing and minimality unless p−n=n, when its differential is a scalar multiple of x^2=0. A later d_r hitting a must have source base degree p−r<p and fiber degree r−1. Nonzero smaller base degrees can only be 0 or n. In base degree 0 every positive power y^k was killed injectively by d_n, since k≠0 in Q and x y^{k−1}≠0 on that page. In base degree n every x y^k is the d_n-boundary d_n(y^{k+1})/(k+1). Thus neither possible column can supply a later incoming differential. No differential leaves the bottom row. Hence a survives to the zero positive-degree abutment, a contradiction. It follows that A=Λ(x). [step 3.1, F3, F4, algebra]

5.1 A natural field-dual evaluation identifies zero cohomology with zero homology: a nonzero vector is detected by a functional under AC. The degree-n homology is Q by integral first Hurewicz and the rationalization lemma. The stated low-degree homology follows. These arguments also show exactly why the weak-fiber comparison suffices for every use of the published calculation's strict-fiber interface. [step 4.1, F1, F3, F5] ∎
