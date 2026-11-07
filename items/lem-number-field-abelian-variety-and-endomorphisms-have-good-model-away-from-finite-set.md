---
id: lem-number-field-abelian-variety-and-endomorphisms-have-good-model-away-from-finite-set
kind: lemma
title: "An abelian variety and finitely many endomorphisms have a good model away from finitely many primes"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - def-abelian-variety-over-a-field
  - thm-abelian-variety-is-projective
  - thm-ring-of-integers-and-ideals-are-full-lattices
  - thm-number-field-integral-ideal-factorisation-in-zf
  - cor-finite-type-algebra-over-noetherian-ring-is-noetherian
  - thm-smooth-locus-open
  - thm-projective-morphism-proper
  - thm-proper-morphism-closed-image
  - lem-proper-flat-cohomology-perfect-complex
  - thm-global-functions-proper-integral-variety
  - thm-regular-local-rings-are-domains-and-cohen-macaulay
  - def-abelian-scheme
  - def-good-reduction-and-abelian-scheme-model
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Complex Multiplication, version0.10 (2020)"
      url: "https://www.jmilne.org/math/CourseNotes/CM.pdf"
      locator: "Section7, Specialization and Proposition7.7, printed54, passage read; the finite-equation construction and connected-fibre proof below are reconstructed locally."
    - title: "The Stacks Project, Cohomology of Schemes, Lemma30.22.1"
      url: "https://stacks.math.columbia.edu/tag/07VK"
      locator: "Bibliographic provenance for the actual published local perfect-complex supplier, whose literal Statement is used; no fresh full-source reading claimed."
verification: {}
---

## Statement

Assume AC. Let $K$ be a number field, let $A/K$ be an abelian variety, and let $f_1,\ldots,f_r\in\operatorname{End}_K(A)$ be a finite list, possibly empty. There is a finite set $S$ of nonzero prime ideals of $O_K$ and a projective abelian scheme $\mathcal A\to\operatorname{Spec}O_K[S^{-1}]$ with generic fibre $A$ on which every $f_j$ extends as a group endomorphism. Consequently $A$ has good reduction at every prime outside $S$. One may enlarge $S$ by any prescribed finite set. Every integral linear combination, sum, or composition of the $f_j$ extends by the same operations. No assertion of good reduction at the removed primes is made.

## Facts & Assumptions

**Given:** AC, $K$, $A/K$ and the finite list of actual $K$-endomorphisms. No good model is given.

[A1] AC implies DC for the supplied cohomology theorem. [[def-axiom-of-choice]] [[thm-choice-implies-dependent-implies-countable-choice]]

[F1] An abelian variety is a smooth proper geometrically connected group variety and is projective. The integer ring of a number field is a finite-rank integral lattice, hence Noetherian, and every nonzero integral ideal has finite prime factorization. Polynomial algebras over Noetherian rings are Noetherian. [[def-abelian-variety-over-a-field]] [[thm-abelian-variety-is-projective]] [[thm-ring-of-integers-and-ideals-are-full-lattices]] [[thm-number-field-integral-ideal-factorisation-in-zf]] [[cor-finite-type-algebra-over-noetherian-ring-is-noetherian]]

[F2] Smoothness has an open locus; projective morphisms are proper, and proper images of closed sets are closed. [[thm-smooth-locus-open]] [[thm-projective-morphism-proper]] [[thm-proper-morphism-closed-image]]

[F3] For a proper morphism over a Noetherian ring and a coherent sheaf flat over that ring, there is a bounded finite-projective complex, locally finite free, computing every coherent cohomology group after every base change; its degrees start at zero. [[lem-proper-flat-cohomology-perfect-complex]]

[F4] A proper geometrically integral variety has only its ground field as global regular functions. Regular local rings are domains, so components of a smooth variety over an algebraically closed field are disjoint. [[thm-global-functions-proper-integral-variety]] [[thm-regular-local-rings-are-domains-and-cohen-macaulay]]

[F5] A proper smooth group scheme with geometrically connected fibres is an abelian scheme, and an abelian-scheme model supplies good reduction. [[def-abelian-scheme]] [[def-good-reduction-and-abelian-scheme-model]]

## Proof

1.1 By [F1] choose a projective embedding of $A$. Its homogeneous ideal has finitely many generators. Clearing their finitely many denominators gives a projective model $\mathcal X$ over a localization $R_0=O_K[1/d]$, with generic fibre $A$. All rings here are Noetherian by [F1]. The only inverted primes are divisors of the nonzero element $d$, a finite set by integral ideal factorization. [A1, F1, given, choose, construct]

2.1 Spread the identity, inversion, multiplication and the finitely many $f_j$ over another such localization. Here is the finite-presentation justification, also for multiplication whose source is a product. Use finitely many standard affine source charts and refine them by finitely many principal opens on which the generic map lands in an affine target chart. Each target coordinate is a fraction of polynomials on that open. Include their finitely many coefficients and invert their number-field denominators. The assertions that these opens cover each generic source chart have finite witnesses $1\in(g_1,\ldots,g_t)$ in its coordinate ring; clear the coefficients of these witnesses too. Target equations and overlap agreements are identities in finitely presented algebras after localization, and each identity holding over $K$ is killed by a nonzero element of $R_0$; finitely many generators and identities require only finitely many further denominators. These data glue the morphisms over the new base. Apply the same argument to the finitely many group identities, the assertion that each $f_j$ respects them, and the identity-point equations. All hold generically, so one more localization makes them hold identically. Thus the resulting projective model is a commutative group scheme and carries all the specified endomorphisms. [F1, step 1.1, construct, algebra]

3.1 Its nonsmooth locus is closed and misses the generic fibre by [F1, F2]. Its proper image is therefore a closed subset of the integral one-dimensional base missing the generic point. Such a subset lies in the prime divisors of a nonzero base element: its defining ideal contains such an element, and [F1] supplies its finite prime factorization. Invert that element. The group model is now smooth and hence flat, projective and finitely presented over a Noetherian domain $R$. Its relative tangent bundle at the identity is finite locally free of rank $\dim A$; its rank is constant on the connected base. Fibre translations show that each smooth geometric fibre has this dimension. [F1, F2, step 2.1, algebra]

4.1 Apply [F3] to $\mathcal O_{\mathcal X}$, which is coherent and flat over $R$ because the model is smooth. Localize once more at a nonzero element so the finite-projective terms of its bounded cohomology complex $C^\bullet$ are free. This is possible by choosing a basis over $K$ and clearing denominators for the basis and its inverse; finitely many terms require finitely many denominators. Put $n=\operatorname{rank}C^0$ and $h=\operatorname{rank}_K(d^0_K:C^0_K\to C^1_K)$, with $C^1=0$ permitted. By [F4] and geometric integrality of $A$, $\dim_KH^0(A,\mathcal O_A)=1$, so $n-h=1$. Invert a nonzero $h$-minor of the matrix of $d^0$; if $h=0$, use the empty minor $1$. All $(h+1)$-minors vanish identically because they vanish over the fraction field and the base is a domain. The matrix therefore has rank exactly $h$ over every residue field and its algebraic closure. Since the complex starts in degree zero, [F3] gives $\dim_{\overline{\kappa(s)}}H^0(\mathcal X_{\overline{\kappa(s)}},\mathcal O)=n-h=1$ for every base point $s$. This step includes complexes with one term and avoids assuming base change for $H^0$ without a proof. [A1, F3, F4, step 3.1, construct, algebra]

5.1 A smooth proper geometric fibre is reduced and has finitely many irreducible components. Its regular local rings are domains by [F4], so distinct components cannot meet; the components are open and closed. Each is a nonempty proper integral variety over an algebraically closed field and has a one-dimensional ring of global functions by [F4]. The global-function ring of their finite disjoint union is their product. Its dimension is one by step 4.1, hence there is exactly one component. Every geometric fibre is therefore connected. With step 3.1 this proves the model is an abelian scheme by [F5], giving good reduction at every retained prime. [F4, F5, step 3.1, step 4.1, algebra]

6.1 Only finitely many nonzero elements of $O_K$ were inverted in all the preceding steps, so [F1] makes the removed prime set $S$ finite. An additional finite prime set may be removed by base change, preserving the projective abelian scheme and its endomorphisms. The group-scheme operations give extensions of sums, integral multiples and compositions of the $f_j$ by applying exactly those operations; they agree with the original maps on the generic fibre. The empty list requires no endomorphism charts, and dimension zero is the identity section with the same argument. This proves all assertions. [F1, F5, step 2.1, step 5.1, construct, algebra] ∎

## Source-reading boundary

Milne CM Section7, Specialization and Proposition7.7, printed54, was read in full. The actual construction above uses finite polynomial data and the literal published perfect-complex cohomology supplier; it does not import an unproved good-reduction existence theorem. The Stacks reference records that supplier's bibliographic provenance only. No new Stacks-source reading, semistable reduction theorem, Neron-model theorem or everywhere-good-reduction conclusion is claimed.
