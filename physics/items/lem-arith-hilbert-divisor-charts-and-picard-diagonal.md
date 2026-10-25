---
id: lem-arith-hilbert-divisor-charts-and-picard-diagonal
kind: lemma
title: "Hilbert divisor charts and the Picard diagonal"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - def-rigidified-relative-picard-functor-and-dual-abelian-variety
  - thm-hilbert-scheme-represents-projective-flat-families
  - lem-hilbert-regularity-propagation
  - thm-cohomology-and-base-change
  - lem-proper-flat-fp-cohomology-perfect-complex
  - thm-nonaffine-generic-scheme-quotient-flat-equivalence-relation
  - lem-nonaffine-effective-affine-algebra-descent
  - thm-nakayama-lemma
  - thm-valuative-criterion-separatedness
  - thm-serre-criterion-ampleness
  - lem-ample-stable-positive-power
  - thm-global-functions-proper-integral-variety
  - lem-noetherian-flatness-by-fibres-finite-target-module
  - def-flat-morphism-schemes
  - def-locally-finite-presentation-morphism
  - def-ample-invertible-sheaf
  - def-fppf-sheaf-and-sheafification
  - lem-fppf-sheafification-exists
  - lem-faithfully-flat-effective-descent-of-modules-and-algebras
  - thm-closed-subschemes-projective-space-homogeneous-ideals
  - def-invertible-sheaf
  - def-projective-space-points
  - lem-finite-presentation-image-constructible
  - lem-schematic-closure-and-dense-agreement
  - thm-proper-morphism-closed-image
  - lem-filtered-colimit-fp-scheme-stage
  - lem-nonempty-smooth-scheme-finite-separable-point
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "B. Edixhoven, G. van der Geer, B. Moonen, Abelian Varieties (2012), Chapters 2-3, 6-9, 11 (relative divisors and the Picard scheme); closure in owner-arithmetic-models/dual-source/proof-closure-packet.md"
      url: "https://www.van-der-geer.nl/~gerard/AV.pdf"
    - title: "S. Kleiman, The Picard Scheme, Theorem 4.8 divisor-chart proof (quotient step replaced locally by the published generic quotient)"
      url: "https://arxiv.org/pdf/math/0504020"
---

## Statement

Assume AC and DC as inherited from the supplied scheme and cohomology results. Let $A$ be a projective geometrically integral scheme over a field $k$. Write $\mathcal P_{A/k}$ for the fppf sheafification of $T\mapsto\operatorname{Pic}(A_T)/p_T^*\operatorname{Pic}(T)$. When a rational point $e\in A(k)$ is supplied, normalization along $e$ identifies it with the sheaf of $e$-rigidified line bundles; for an abelian variety this is [[def-rigidified-relative-picard-functor-and-dual-abelian-variety]]. Then:

(a) sufficiently positive relative effective Cartier divisors with fixed Hilbert polynomial form a finite-type open Hilbert chart $D$;

(b) on every test $T$ of the appropriate open positive-class subfunctor, the pullback of $D^+\to\mathcal P_{A/k}$ is a smooth proper surjective $T$-scheme, fppf-locally a projective-space bundle. If the test class is represented by a line bundle $\mathcal L$ on $A_T$, the pullback is $\mathbf P((p_{T,*}\mathcal L)^\vee)$. In general it can be a nonsplit form of projective space; when a rational point $e$ is supplied, rigidification removes this obstruction;

(c) the diagonal of the Picard sheaf is represented and quasi-compact, and the Picard scheme is separated once representability holds.

## Facts & Assumptions

**Given:** AC and DC, a projective geometrically integral $k$-scheme $A$, and a very ample line bundle $H$ on $A$.

[F1] The Hilbert scheme represents projective flat families with fixed Hilbert polynomial, and its relative effective-divisor locus is open: on a flat finitely presented family, being cut out fibrewise by a regular element with invertible ideal is open by the local flatness criterion and Nakayama, the bad locus being closed and proper over the base ([[thm-hilbert-scheme-represents-projective-flat-families]], [[lem-noetherian-flatness-by-fibres-finite-target-module]], [[thm-nakayama-lemma]], [[thm-proper-morphism-closed-image]], [[lem-finite-presentation-image-constructible]]).

[F2] Relative Castelnuovo-Mumford regularity conditions are finitely many higher-cohomology vanishings, the universal finite cohomology complex computes them compatibly with base change, and regularity propagates to all required nonnegative twists; Serre vanishing makes every individual test family locally lie in such a chart ([[lem-hilbert-regularity-propagation]], [[lem-proper-flat-fp-cohomology-perfect-complex]], [[thm-cohomology-and-base-change]], [[thm-serre-criterion-ampleness]], [[lem-ample-stable-positive-power]], [[def-ample-invertible-sheaf]]).

[F3] A flat equivalence relation of finite type with a monomorphism to the square, on a separated finite-type scheme with flat projections, has a saturated open with quotient ([[thm-nonaffine-generic-scheme-quotient-flat-equivalence-relation]]); arbitrary test families descend to finitely generated algebras by finite-presentation spreading ([[lem-filtered-colimit-fp-scheme-stage]], [[lem-nonaffine-effective-affine-algebra-descent]]).

[F4] Geometrically integral proper fibres have only scalar global functions, and their nonzero sections of invertible sheaves are regular ([[thm-global-functions-proper-integral-variety]]). Over arbitrary test algebras, a finite affine Cech cover of the separated $k$-scheme $A$ gives $\Gamma(A_T,\mathcal O)=\Gamma(T,\mathcal O)$, since tensoring over $k$ preserves its equalizer. The nonempty smooth locus of a geometrically integral finite-type $k$-scheme has a point over a finite separable extension ([[lem-nonempty-smooth-scheme-finite-separable-point]]). Finite free universal cohomology complexes and affine algebra descent represent and descend the isomorphism locus below; the Picard functor is sheafified as above ([[def-fppf-sheaf-and-sheafification]], [[lem-fppf-sheafification-exists]], [[def-projective-space-points]]).

## Proof

**Proof technique:** direct: realize divisor classes in Hilbert charts, represent the linear-system fibres by projective spaces, quotient by linear equivalence, and control the diagonal.

1.1 Fix the very ample $\mathcal H$ on $A$. The relative effective-divisor functor is an open subscheme of the Hilbert scheme by [F1]: being cut out by a fibrewise regular element with invertible ideal is open, and for a fixed Hilbert polynomial the divisor scheme $D$ is finite type and quasi-projective. Impose a fixed Castelnuovo-Mumford regularity bound by finitely many higher-cohomology vanishings with respect to $\mathcal H$; by [F2] these vanishings propagate to all nonnegative twists and are computed by the universal finite cohomology complex, so they cut out an open positive chart $D^+$; do not define openness by an infinite intersection of vanishings. Serre vanishing ensures that after twisting by a sufficiently high power of $\mathcal H$ every individual test family lies locally on its base in such a chart. A line bundle satisfying these conditions has finite locally free sections of positive rank, compatibly with every base change. [F1, F2, given, construct]

2.1 Given $c\in\mathcal P_{A/k}(T)$, choose an fppf covering $T'\to T$ on which $c$ has a line-bundle representative $\mathcal L$. On $T'$ its divisor fibre is $\mathbf P((p_*\mathcal L)^\vee)$: fibrewise nonzero sections, including twists by base line bundles, give exactly the relative effective Cartier divisors, since the geometric fibres are integral. Positivity makes $p_*\mathcal L$ locally free of positive rank and compatible with base change by step 1.1. The two pullbacks of these projective bundles have canonical identifications, because both represent the same divisor-class fibre functor; they satisfy the cocycle condition. These projective spaces descend to a scheme: locally their common rank is $r$, the canonical relative anticanonical bundle is $\mathcal O(r)$ and its section algebra and homogeneous embedding equations descend by faithfully flat module/algebra descent. Taking the descended relative Proj gives a projective scheme whose pullback is the projective bundle; the canonical identifications glue these schemes on $T$. Its smoothness, properness and surjectivity follow from the projective-space description after the cover (flatness descends and the geometric fibres are projective spaces). A representative on $T$ itself gives the displayed projective bundle directly. If $e$ exists, normalize representatives along $e$; scalar global functions make every rigidified isomorphism unique, so their descent data satisfy the cocycle condition and descend a line bundle on $A_T$. Without $e$ this last conclusion is not asserted. This proves (b) on arbitrary tests. [F2, F3, F4, step 1.1, construct]

3.1 The linear-equivalence relation $R\subseteq D^+\times_kD^+$ is represented: two divisor families are equivalent when their classes agree, whose projections are smooth projective bundles: the test $D^+$ carries the universal divisor line bundle, so the represented-case clause of step 2.1 applies. It is a monomorphism into the square. Hence the generic quotient theorem [F3] applies and yields a nonempty saturated open $W\subseteq D^+$ with a quotient representing the corresponding open subfunctor of the Picard sheaf; all-test statements reduce to finitely generated test algebras by finite-presentation spreading. [F3, step 2.1, algebra]

4.1 First suppose a point $e\in A(k)$ is supplied. On a Noetherian product $T$ of divisor charts normalize $\mathcal M=\mathcal L_1^{-1}\otimes\mathcal L_2$ along $e$. Apply [F2] to $\mathcal M$ and $\mathcal M^{-1}$, locally choosing finite free complexes in nonnegative degrees. Their degree-zero kernels represent sections on every test, and evaluation at $e$ is represented by linear chain maps to $\mathcal O_T$ (a finite free complex permits such a representative). Impose the finitely many linear equations $d(s)=0$, $d(t)=0$, $e(s)=e(t)=1$ in the product of the two degree-zero affine vector bundles. The product $st$ is a global function, hence a scalar by [F4], and its value at $e$ is $1$, so $st=1$. Thus this closed affine scheme represents exactly the unique rigidified isomorphism $\mathcal L_1\to\mathcal L_2$ when one exists. It represents the diagonal and is of finite presentation. For general $A$, pass to a finite separable extension having a rational point by [F4]. The affine representations of the equality-of-classes functor carry canonical descent data, even when the chosen rational points differ on overlaps; affine descent [F3] makes the diagonal affine over $T$. Finite-presentation spreading and fppf-local representatives extend this conclusion from chart products to arbitrary tests. [F2, F3, F4, step 3.1, algebra]

5.1 To check separatedness once representability holds, apply the valuative criterion. After a faithfully flat field extension a rational section is available, so normalize a line bundle $\mathcal M$ on $A_V$ for a DVR $V$ whose class is generically zero. Choose inverse generic trivializing sections. Proper coherent cohomology makes their section modules finite over $V$, and flatness of the line bundles injects them into the generic section spaces. Rescale each generic section by a power of the uniformizer until it extends and its reduction is nonzero: a finite torsion-free module over a DVR is a lattice, and the exact sequence for multiplication by the uniformizer makes the reduction map on global sections injective. On the integral special fibre the product of these two nonzero sections is nonzero. Their global product is a scalar by [F4], so it is a unit of $V$. The extended sections are therefore inverse trivializations after rescaling by that unit; normalization at the section makes the generic isomorphism extend uniquely. This proves the valuative criterion, and hence separatedness of the locally finite-type Picard representative. [F2, F3, F4, step 4.1, algebra]

6.1 Finally the universal Hilbert ideal is flat over its Noetherian chart base, and on a fibre where it is a line bundle the Noetherian fibrewise-flatness criterion makes it flat and the finite-flat local-freeness criterion makes it rank one; the locus is open, and proper projection of its failure gives the divisor open in the Hilbert chart. Arbitrary test families descend locally to finitely generated $k$-algebras by finite-presentation spreading of the line bundle and its inverse, so the representing opens and linear-system universal properties apply to every test. [F1, F2, F3, step 4.1, algebra] ∎

