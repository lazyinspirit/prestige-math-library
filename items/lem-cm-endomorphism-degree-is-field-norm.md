---
id: lem-cm-endomorphism-degree-is-field-norm
kind: lemma
title: CM endomorphism degree is its absolute algebra norm and is preserved at good reduction
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
deps:
- def-axiom-of-choice
- thm-choice-implies-dependent-implies-countable-choice
- def-cm-algebra-and-cm-type
- thm-complex-abelian-variety-uniformizes-as-complex-torus
- lem-good-reduction-specialization-injective-on-abelian-variety-endomorphisms
- thm-field-norm-and-trace-agree-with-operator-determinant-and-trace
- cor-index-of-a-full-rank-integer-sublattice-is-the-absolute-determinant
- lem-multiplication-by-n-on-abelian-scheme
- thm-nonaffine-abelian-multiplication-finite-faithfully-flat
- lem-arith-prime-to-characteristic-multiplication-etale
- lem-proper-source-to-separated-target-proper
- lem-quasi-finite-morphism-fibre-characterization
- thm-proper-quasi-finite-is-finite
- thm-generic-flatness-morphisms
- thm-finite-flat-modules-over-local-rings-are-free
- thm-locally-free-locus-finite-presentation-open
- thm-flatness-criteria-by-injections-and-ideals
- thm-faithfully-flat-descent-of-flatness
- thm-proper-ideal-contained-in-maximal-ideal
- lem-noetherian-flatness-by-fibres-finite-target-module
- cor-weak-nullstellensatz-algebraically-closed-coordinate-form
- thm-algebraic-embedding-extension
- thm-existence-of-algebraic-closures
- thm-fundamental-theorem-of-algebra-liouville-proof
justified_by: []
sources:
  references:
  - title: J. S. Milne, Complex Multiplication, July14,2020 version0.10
    url: https://www.jmilne.org/math/CourseNotes/CM.pdf
    locator: ChapterI sections2–3 (lattices and CM actions) and ChapterII section6 (models and specialization).
  - title: J. S. Milne, The Fundamental Theorem of Complex Multiplication (2007)
    url: https://arxiv.org/pdf/0705.3446
    locator: Section1 Proposition1.8 and Lemma1.11, printed7–8; the source Tate-module degree comparison is not imported.
---

## Statement

Assume the Axiom of Choice. Let $k$ be a number field or $\mathbb C$, let $A/k$ be an abelian variety of dimension $g\ge1$, and let $E=\prod_iE_i$ be a CM algebra of degree $2g$ with a unital embedding $\iota:E\hookrightarrow\operatorname{End}_k^0(A)$. Let $\alpha\in E^\times$ and suppose $\iota(\alpha)$ is represented by an actual endomorphism $a\in\operatorname{End}_k(A)$. Define $N_{E/\mathbb Q}(\alpha)=\prod_iN_{E_i/\mathbb Q}(\alpha_i)$. Then $a$ is a finite faithfully flat isogeny and
$$\deg(a)=|N_{E/\mathbb Q}(\alpha)|\in\mathbb Z_{>0}.$$
Here degree is the locally free rank of the finite morphism, equal also to $[k(A):a^*k(A)]$ and to the rank of its scheme-theoretic kernel over the ground field.

If $k$ is a number field and $A$ extends to an abelian scheme $\mathcal A/\mathcal O_{k,P}$ at a finite place $P$, its unique extension $\widetilde a$ is finite faithfully flat of this same degree. In particular the endomorphism induced on the special fibre, including when its degree is divisible by the residue characteristic and its kernel is nonreduced, has degree $|N_{E/\mathbb Q}(\alpha)|$. No maximal-order or unramifiedness condition on $E$ is needed.

## Facts & Assumptions

**Given:** AC and the field, CM action, endomorphism, and optional good-reduction model in the Statement.

[A1] AC implies DC and Countable Choice, as required by the arithmetic and multiplication suppliers ([[def-axiom-of-choice]], [[thm-choice-implies-dependent-implies-countable-choice]]).

[F1] A CM algebra is a finite product of CM number fields ([[def-cm-algebra-and-cm-type]]); its unital injective degree-$2g$ action is specified in the Statement. Complex uniformization supplies a full rank-$2g$ lattice with faithful integral and rational endomorphism action ([[thm-complex-abelian-variety-uniformizes-as-complex-torus]]).

[F2] Field norm is the determinant of multiplication on the field as a rational vector space ([[thm-field-norm-and-trace-agree-with-operator-determinant-and-trace]]). A full-rank integral matrix has lattice-cokernel order equal to the absolute determinant ([[cor-index-of-a-full-rank-integer-sublattice-is-the-absolute-determinant]]).

[F3] Nonzero integer multiplication on an abelian variety, or on an abelian scheme over a locally Noetherian base, is finite faithfully flat. Its kernel has rank $n^{2g}$, also in residue characteristics dividing $n$ ([[thm-nonaffine-abelian-multiplication-finite-faithfully-flat]], [[lem-multiplication-by-n-on-abelian-scheme]]). If $n$ is invertible on the base its torsion is étale ([[lem-arith-prime-to-characteristic-multiplication-etale]]).

[F4] A morphism from a proper scheme to a separated scheme over the same base is proper. A finite-type morphism with finite geometric fibres is quasi-finite, and a proper quasi-finite morphism is finite ([[lem-proper-source-to-separated-target-proper]], [[lem-quasi-finite-morphism-fibre-characterization]], [[thm-proper-quasi-finite-is-finite]]).

[F5] Generic flatness holds for finite-type morphisms over Noetherian integral bases. Finite flat modules over Noetherian local rings are free, and the free loci of finitely presented modules are open ([[thm-generic-flatness-morphisms]], [[thm-finite-flat-modules-over-local-rings-are-free]], [[thm-locally-free-locus-finite-presentation-open]]). Flatness can be tested by injectivity of $I\otimes_RM\to M$ for finitely generated ideals, and descends along faithfully flat base change ([[thm-flatness-criteria-by-injections-and-ideals]], [[thm-faithfully-flat-descent-of-flatness]]). Under AC every proper ideal is contained in a maximal ideal ([[thm-proper-ideal-contained-in-maximal-ideal]]).

[F6] In a Noetherian local tower $R\to S\to S'$ with a finite $S'$-module $M$, if $M$ is $R$-flat and $M/\mathfrak m_RM$ is flat over $S/\mathfrak m_RS$, then $M$ is $S$-flat ([[lem-noetherian-flatness-by-fibres-finite-target-module]]).

[F7] Endomorphisms of a number-field abelian variety with good reduction extend uniquely to the abelian-scheme model, preserving their ring identities ([[lem-good-reduction-specialization-injective-on-abelian-variety-endomorphisms]]).

[F8] Over an algebraically closed field, maximal ideals of a polynomial algebra are point-evaluation ideals; hence a nonempty finite-type scheme has a rational closed point, and its closed points detect a nonempty closed subset ([[cor-weak-nullstellensatz-algebraically-closed-coordinate-form]]).

[F9] Under AC every field has an algebraic closure ([[thm-existence-of-algebraic-closures]]), and a rational embedding extends across an algebraic extension into an algebraically closed field; the complex numbers are algebraically closed ([[thm-algebraic-embedding-extension]], [[thm-fundamental-theorem-of-algebra-liouville-proof]]).

## Proof

1.1 If $k$ is a number field, choose an embedding into $\mathbb C$ by [F9]; if $k=\mathbb C$, use the identity. Scalar extension is faithful on morphisms: the equalizer ideal of two morphisms into a separated target vanishes if it vanishes after a field extension, since tensoring with a field extension is faithfully flat. Thus $\operatorname{End}_k(A)$ injects into $\operatorname{End}_{\mathbb C}(A_{\mathbb C})$ and is torsion-free by the lattice action of [F1]. Write the rational endomorphism $\iota(\alpha^{-1})$ as $b/n$ for some actual endomorphism $b$ and integer $n\ge1$. The two inverse identities in the rational ring and this torsion-freeness give $ab=ba=[n]$ as actual morphisms. These identities remain true after every base change. [A1, F1, F9, given, choose, algebra]

2.1 We first prove finiteness and flatness over a field for endomorphisms $u,v$ of an abelian variety $B$ satisfying $uv=vu=[n]$, without a characteristic restriction. The kernel of $u$ is a closed subgroup scheme of $B[n]$, hence is finite by [F3]. Each nonempty geometric fibre of $u$ has a rational point by [F8]; translation by that point identifies it scheme-theoretically with this finite kernel. Thus all geometric fibres are finite. By [F4], $u$ is proper, quasi-finite, and hence finite. It is surjective because $uv=[n]$ and [F3] makes $[n]$ surjective. [A1, F3, F4, F8, step 1.1, algebra]

2.2 Put $H=\Lambda\otimes_{\mathbb Z}\mathbb Q$ for the complex uniformizing lattice of $A_{\mathbb C}$. By [F1] it has rational dimension $2g$ and a faithful $E$-action. For the central factor idempotents $e_i$ of $E=\prod_iE_i$, each $H_i=e_iH$ is nonzero and is a vector space of some dimension $m_i\ge1$ over $E_i$. Otherwise $e_i$ would act as zero and faithfulness would fail. Since $\sum_i[E_i:\mathbb Q]m_i=2g=\sum_i[E_i:\mathbb Q]$, every $m_i=1$. Thus $H$ is a free $E$-module of rank one. The determinant of $a$ on $H$ is therefore $N_{E/\mathbb Q}(\alpha)$ by [F2], factor by factor. Its matrix on the integral lattice $\Lambda$ is integral and nonsingular, so the absolute value of that determinant is a positive integer $D$. [F1, F2, step 1.1, algebra]

3.1 For flatness in step 2.1, first work over an algebraically closed extension of the field, available by [A1] and [F9]. By [F5], a dense open part of the integral target $B$ has flat inverse image; surjectivity and [F8] supply a closed source point $x_0$ above it. For every other closed source point $x$, translations by $x-x_0$ and $u(x-x_0)$ intertwine $u$, and therefore carry flatness at $x_0$ to flatness at $x$. For a closed target point $y$, the finite algebra over $\mathcal O_{B,y}$ has finitely many maximal ideals, precisely the closed source points above $y$. Its localizations at these maximal ideals are flat over $\mathcal O_{B,y}$. For every finitely generated ideal $I$ the kernel of $I\otimes D\to D$ vanishes at each maximal localization, so it is zero: a nonzero element has proper annihilator contained in a maximal ideal, where it remains nonzero. Thus [F5] makes $D$ flat, hence free over the Noetherian local target. The free locus of $u_*\mathcal O_B$ is open by [F5] and contains every closed point; [F8] makes it the entire target. Flatness descends to the original field by [F5]. Therefore $u$ is finite locally free and, being surjective, faithfully flat; its rank is constant on connected $B$. Over the target generic point the finite algebra is a domain and hence a field, namely the source function field, so this rank is also the function-field extension degree. This proves the field assertion for $a,b$ and, later, for their geometric-fibre reductions. [A1, F5, F8, F9, step 2.1, algebra]

4.1 Let $L:V\to V$ be the complex-linear differential of $a_{\mathbb C}$. Its inverse is $db/n$ by step 1.1. The points of the kernel in $V/\Lambda$ are $L^{-1}\Lambda/\Lambda$, and multiplication by $L$ identifies this group with $\Lambda/L\Lambda$. By [F2] its order is $D$. Scheme-theoretically this kernel is a closed subscheme of $A_{\mathbb C}[n]$; by [F3] the latter is finite étale since the characteristic is zero. Over $\mathbb C$ its coordinate algebra is a finite product of copies of $\mathbb C$, and every quotient of such an algebra is again a product of copies of $\mathbb C$. Hence the kernel is reduced and its scheme rank is exactly its number $D$ of points. By step 3.1, $a_{\mathbb C}$ is finite locally free, so its rank is the rank of its identity fibre, namely $D$. Locally free rank is unchanged by field extension; therefore $\deg(a)=D=|N_{E/\mathbb Q}(\alpha)|$. [F1, F2, F3, step 1.1, step 3.1, step 2.2, algebra]

4.2 Now let $R=\mathcal O_{k,P}$ and let $\mathcal A/R$ be a good-reduction model. By [F7], $a,b$ extend uniquely to endomorphisms $\widetilde a,\widetilde b$ with both composites $[n]$. The scheme-theoretic kernel of $\widetilde a$ is a closed subscheme of the finite $R$-scheme $\mathcal A[n]$. On each geometric fibre the argument of steps 2.1–3.1 proves that $\widetilde a$ is a finite flat surjective isogeny, including in residue characteristic dividing $n$. Consequently [F4] makes the proper morphism $\widetilde a:\mathcal A\to\mathcal A$ finite and surjective. For local rings at a source point $x$, its image $y$, and their common base point $s$, apply [F6] to $R_s\to\mathcal O_{\mathcal A,y}\to\mathcal O_{\mathcal A,x}$ and $M=\mathcal O_{\mathcal A,x}$. Smoothness of $\mathcal A/R$ makes $M$ flat over $R_s$, and fibrewise flatness supplies the other hypothesis. Thus $\widetilde a$ is flat and finite locally free. [F3, F4, F5, F6, F7, step 2.1, step 3.1, algebra]

5.1 The target $\mathcal A$ is connected: its generic fibre is connected and dense. Density follows from flatness over the DVR, since a nonempty affine open has a torsion-free coordinate ring, and inverting a uniformizer cannot make that ring zero. Any clopen partition would partition the generic fibre, and the part missing that dense fibre would be empty. The locally free rank of $\widetilde a$ is therefore constant, and its generic rank is $D$ by step 4.1. Every fibre has that same rank after base change. Its identity fibre, the kernel of the induced special-fibre map, retains that full scheme rank even if it is nonreduced. Surjectivity in step 4.2 makes the extension faithfully flat. This proves all stated degree and specialization assertions. [F3, F5, step 4.1, step 4.2, algebra] ∎

## Source-reading boundary

The determinant interpretation uses the local completed uniformization supplier and published norm/index and algebraic finite-flatness inputs. Milne's cached CM notes were consulted at ChapterI section2, Propositions2.1–2.2 and ChapterII section6, Propositions6.4 and6.10; the cached 2007 article was additionally read at section1 Proposition1.8 and Lemma1.11, printed7–8. The source invokes a Tate-module degree comparison, which is replaced here by the complex lattice and finite-flat model argument. No Shimura–Taniyama factorization, centralizer theorem, Frobenius-weight statement or reflex reciprocity theorem is used as a premise.
