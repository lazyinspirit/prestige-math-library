---
id: lem-adjoint-twisted-slope-is-rational-on-a-character-component
kind: lemma
title: "Rationality of the adjoint-twisted slope"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 11
deps:
  - def-character-variety-logarithmic-slope-invariant
  - def-adjoint-twisted-homology-and-culler-shalen-data
  - def-knot-a-polynomial
  - lem-knot-a-polynomial-boundary-elimination
  - lem-sl-two-character-trace-coordinate-model
  - lem-twisted-fox-jacobian-is-cellular-boundary
  - thm-irreducible-sl2-characters-determine-conjugacy-and-rational-descent
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Léo Bénard, François Florens, and Adrien Rodau, A slope invariant and the A-polynomial of knots, Proposition 3.8 and §§3.3–3.5"
      url: "https://arxiv.org/html/2103.14151"
    - title: "Stephan Tillmann, Varieties associated to 3-manifolds, §§4.5–4.8"
      url: "https://www.maths.usyd.edu.au/u/tillmann/papers/course.pdf"
---

## Statement

Assume full AC. Let $X$ be an irreducible component of the $SL_2(\mathbb C)$ character variety of a knot exterior that contains irreducible characters and has a nonempty dense Zariski-open locus of scheme-smooth, non-boundary-parabolic admissible characters. On this locus the Bénard–Florens–Rodau slope is invariant under conjugation and extends to a rational map $X\dashrightarrow\mathbb P^1(\mathbb C)$; when $X$ is one-dimensional its generic value lies in $\mathbb P^1(\mathbb C(X))$, and unless it is identically $\infty$ it is an ordinary rational function in $\mathbb C(X)$.

## Statement references

[Bénard, Florens, and Rodau, Proposition 3.8 and §§3.3–3.5](https://arxiv.org/html/2103.14151)

[Tillmann, §§4.5–4.8](https://www.maths.usyd.edu.au/u/tillmann/papers/course.pdf)

## Facts & Assumptions

**Given:** Full AC, the irreducible character component and its dense open smooth, non-boundary-parabolic admissible locus from the Statement; all its hypotheses are retained.

[F1] An irreducible character component has an actual absolutely irreducible generic representation over a field of degree at most two over its function field. It spreads to representatives of every complex character on a dense principal open; the quadratic automorphism is explicit simultaneous conjugation. [[lem-irreducible-sl2-character-components-have-specializing-quadratic-models]]

[F2] For an actual knot exterior, the finite presentation matrices compute its actual twisted first homology and the actual ordered peripheral inclusion, without a presentation-spine assertion. Their entries and the two word-cycle columns are polynomial in representation entries and a supplied invariant vector. [[lem-presentation-complex-computes-twisted-first-homology-and-peripheral-cycles]]

[F3] A nonparabolic commuting torus pair has a common invariant vector given by either nonparabolic matrix minus half its trace. The complementary plane contracts explicitly; the two ordered torus classes are a basis and commute with conjugation and field extension. [[lem-nonparabolic-adjoint-torus-homology-has-explicit-peripheral-basis]]

[F4] Finite matrix rank charts give actual homology bases and the peripheral kernel line, with specialization compatibility after finite localization. The line is unchanged by chain basis changes, boundary corrections and common nonzero rescaling of both peripheral columns. [[lem-finite-homology-kernel-lines-have-rational-rank-charts]]

[F5] Equal irreducible complex trace characters determine simultaneous conjugacy. The slope of the ordered kernel line is the projective ratio in the original Definition. [[lem-equal-irreducible-sl2-traces-determine-conjugacy]] [[def-character-variety-logarithmic-slope-invariant]]

## Proof

1.1 **Conjugation and the actual peripheral basis.** Simultaneous conjugation by an invertible matrix sends each coefficient vector to its conjugate and intertwines every intrinsic path transport. It therefore is an isomorphism of the actual local coefficient complexes and carries the ordered peripheral cycles and their inclusion kernel to the corresponding ones. Rescaling their common invariant vector rescales both columns and leaves that kernel in the two prescribed coordinates unchanged. Thus the slope is conjugation invariant wherever its given admissible definition applies. For a non-boundary-parabolic torus pair, at least one of the longitude and meridian matrices has trace squared different from four: if both traces squared were four, simultaneous triangularization of the commuting pair would give diagonal eigenvalues in $\{1,-1\}$, and the same would hold for every peripheral word, the boundary-parabolic case. Choose one such loop $\delta$. If $\delta$ is the longitude, apply [F3] with the two torus generators interchanged and then restore the ordered (longitude,meridian) coordinates. In either case $u=\rho(\delta)-\operatorname{tr}(\rho(\delta))I/2$ is nonzero and its two named classes are an actual basis. The common fixed coefficient space is exactly the line spanned by $u$, by the complementary-plane contraction in [F3]; hence every admissible choice of common vector gives this same ordered kernel. [F2, F3, F5, given, construct, algebra]

2.1 **An actual generic family on the component.** Put $A=\mathbb C[X]$ and $K=\operatorname{Frac}(A)$. Apply [F1] to obtain $\sigma$ over $L$, with $[L:K]\le2$, and its spreading ring $B$ over a principal localization of $A$. The proof of [F1] also gives a nonempty open irreducible-character certificate on $X$. Intersect it with the supplied dense admissible open; this is nonempty because $X$ is irreducible. At a point of this intersection choose $\delta$ as in step1.1. Its discriminant is then a nonzero regular function on $X$, so enlarge the localization to invert it. All generic matrices and $u$ are now in $B$, and every point of this principal open has an actual irreducible representative obtained by specialization. No representation over $K$ itself, nor any abstract rational quotient descent, is being assumed. [F1, step 1.1, given, construct, algebra]

3.1 **Verify the geometric rank hypothesis before invoking a kernel chart.** Use [F2] with the actual exterior and its fixed finite presentation and peripheral words. Over $B$ this gives finite matrices $D_2,D_1$ and $U=(u_\lambda,u_\mu)$ satisfying $D_1D_2=D_1U=0$; these identities hold because they hold over the field $L$ and $B$ injects into $L$. Let $\beta=\operatorname{rank}_L D_2$ and $r=\operatorname{rank}_L(D_2\mid U)$. Finite Gaussian elimination over $L$ provides invertible row and column transformations taking each of these two matrices to its identity-plus-zero block form. Clear the finitely many nonzero denominators of all entries of these transformations and their inverse matrices. Zero entries require no inversion. The norm argument in [F1] realizes all these inversions by shrinking the principal open in $X$. The block identities then hold in $B$ and persist under every specialization $B\to\mathbb C$; hence both ranks are respectively $\beta$ and $r$ at every such specialization. The principal open meets the supplied dense admissible locus. At a point of that intersection, [F2] identifies the quotient images of $U$ with the actual peripheral inclusion, and step1.1 identifies its domain with the actual two-dimensional torus homology. Admissibility says its kernel has dimension one, so its image has dimension one. Thus $r-\beta=1$. This proves the generic rank hypothesis from the given actual geometric locus, rather than postulating it for an abstract matrix family. [F1, F2, step 1.1, step 2.1, construct, algebra]

4.1 **Construct the algebraic homology line with actual specializations.** Apply [F4] to the domain $B$ and its fraction field $L$, taking its matrices $B,C$ there to be $D_2,D_1$ here. Step3.1 supplies exactly its rank-one hypothesis. After a finite localization it gives explicit split bases for cycles, boundaries and homology and a kernel line generated by $(-b,a)$, with one of $a,b$ invertible and quotient images of the two $U$ columns equal to $a e_1,b e_1$. Once again [F1] converts this finite localization to one principal localization of $A$. Every complex specialization now computes the actual specialized homology and kernel, by [F4], and [F2] identifies them with the actual exterior and ordered peripheral inclusion. The slope is therefore $[a:b]$, since applying minus the second coordinate divided by the first to $[-b:a]$ gives $a/b$. Zero and infinity are retained. This also supplies the requested constant-rank homology bundles on this finite covering open, rather than relying on a possibly nonalgebraic unit-vector choice. [F1, F2, F4, step 3.1, construct, algebra]

5.1 **Descend the constructed line to the character field.** The matrix construction commutes with field automorphisms: all word actions, boundaries and $u$ use polynomial operations and rational constants. Under simultaneous conjugation, the invertible map $\operatorname{Ad}(P)$ intertwines the coefficient matrices and sends $u$ to its new value, so carries their actual homology quotient and peripheral map to the corresponding ones, without changing the two input coordinates. Thus its kernel line, and hence $[a:b]$, is invariant. In the quadratic case [F1] supplies $\tau(\sigma)=P\sigma P^{-1}$; the same compatibility shows $\tau[a:b]=[a:b]$. The explicit projective descent in [F1] places that point in $\mathbb P^1(K)$. In the degree-one case it already lies there. This is descent of an explicitly constructed rational line, not the inference that pointwise conjugacy alone implies rationality. [F1, F2, F4, step 4.1, construct, algebra]

6.1 **Identify the rational extension with the slope.** Normalize a nonzero homogeneous coordinate of this $K$-point to one and clear its finitely many $A$ denominators. Shrinking once more also makes its equality with the $B$ rank-chart line an equality at every specialized point. Its coordinates define a rational map $X\dashrightarrow\mathbb P^1$, regular on this nonempty dense principal open. At every point there in the original admissible locus, step4.1 gives its actual BFR slope. Every irreducible representative with that character is conjugate to the specialized representative by [F5], and step1.1 gives identical values. Choices of words, pivots, model or shrinking yield the same rational map: both maps agree with the actual slope on the intersection with the dense given locus; cross multiplication of their rational homogeneous coordinates then vanishes on a dense set, and hence vanishes in the coordinate domain. Thus the generically defined slope has the asserted rational extension. For a one-dimensional $X$ the same homogeneous coordinates give a point of $\mathbb P^1(\mathbb C(X))$. If its second coordinate is nonzero, their quotient belongs to $\mathbb C(X)$ and gives the ordinary rational function, allowing poles at individual points. If its second coordinate is zero, it is the identically infinite projective function. No generic finiteness assertion is made, and no value at a singular or inadmissible point is assigned by this proof. The scheme-smooth condition is retained as supplied; the finite-rank argument needs no stronger interpretation of it and imports no tangent-space theorem. This proves the full stated rationality and conjugation assertions, independently of the logarithmic Gauss or ideal-point theorems. [F1, F4, F5, step 1.1, step 4.1, step 5.1, construct, algebra] ∎
