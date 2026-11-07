---
id: lem-flat-projective-euler-and-mixed-differences-specialize-over-a-dvr-in-zf
kind: lemma
title: Flat projective Euler and mixed-difference specialization over a DVR without Choice
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - cor-finite-variable-polynomial-ring-noetherian
  - cor-koszul-complex-resolves-a-regular-quotient
  - thm-localisation-of-modules-is-exact
  - thm-over-a-pid-flat-is-equivalent-to-torsion-free
  - lem-finite-graded-resolutions-and-projective-cech-cohomology-in-zf
  - cor-noether-normalisation-module-finiteness
justified_by: []
proof_strategy: direct
axiom_use: Work in ZF; the DVR and finite projective chart presentations are supplied, and every cover, resolution and coefficient operation below is finite.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: The Stacks Project, Cohomology of Schemes
      url: https://stacks.math.columbia.edu/tag/02KE
      locator: Euler-characteristic specialization convention; actual finite DVR graded-resolution argument supplied here, not imported.
---

## Statement

Work in ZF. Let $R$ be any DVR with uniformizer $t$, fraction field $K$ and residue field $k$, and let $X\hookrightarrow\mathbb P^N_R$ be a specified closed projective scheme. For every coherent sheaf $G$ on $X$ flat over $R$, the two fibre Euler characteristics are finite and
$$\chi(X_K,G_K\otimes O(a))=\chi(X_k,G_k\otimes O(a))\qquad(a\in\mathbb Z).$$
No completeness, residue-field enumeration, infinitude, smoothness, normality, reducedness or Cohen–Macaulay assumption is required. More generally, for any finite list of invertible sheaves $L_1,\ldots,L_r$ on $X$, their finite mixed Euler differences satisfy
$$\sum_A(-1)^{r-|A|}\chi\left(X_K,G_K\otimes\bigotimes_{i\in A}L_{i,K}\right)=\sum_A(-1)^{r-|A|}\chi\left(X_k,G_k\otimes\bigotimes_{i\in A}L_{i,k}\right).$$
In particular this conserves every numerical mixed intersection defined by these differences whenever the relevant fibre support-dimension bound makes it a top intersection.

The proof constructs a finite graded module $M$ over $R[x_0,\ldots,x_N]$ representing $G$, torsion-free over $R$, and a finite graded free resolution of $M$ of length at most $N+2$ whose reductions over both $K$ and $k$ stay exact. All required cohomology is the intrinsic finite projective Cech cohomology of the two field fibres; no arbitrary-base injective resolution or perfect-complex determinant theorem is used.

## Facts & Assumptions

**Given:** The DVR, specified projective embedding, coherent flat sheaf and finite line-bundle list in the Statement, with their finite affine presentations.

[F1] A polynomial algebra in finitely many variables over a Noetherian ring is Noetherian. [[cor-finite-variable-polynomial-ring-noetherian]]

[F2] A finite regular sequence on a finite free module has a finite free Koszul resolution of its quotient. [[cor-koszul-complex-resolves-a-regular-quotient]]

[F3] Localization preserves exact module sequences. [[thm-localisation-of-modules-is-exact]]

[F4] A module over a PID is flat exactly when it is torsion-free. [[thm-over-a-pid-flat-is-equivalent-to-torsion-free]]

[F5] Over any field, finite graded modules admit finite graded free resolutions, their projective Cech cohomology is finite, and a graded resolution with shifts $b$ computes the all-integer Euler polynomial as the alternating sum of $\binom{a-b+N}{N}$. [[lem-finite-graded-resolutions-and-projective-cech-cohomology-in-zf]]

[F6] Every nonzero finite-type algebra over a field is finite over a polynomial subalgebra. [[cor-noether-normalisation-module-finiteness]]

## Proof

1.1 The actual affine interpretation over this DVR needs no enumeration. Every nonzero finite-type algebra $A$ over $R$ has a field quotient: if $t$ is not a unit, $A/tA$ is nonzero finite type over $k$; if it is a unit, $A$ is finite type over $K$. A nonzero finite-type algebra over either field has a finite-dimensional field quotient by [F6]: take its finite polynomial normalization, quotient at the coordinate origin (finite Nakayama/determinant trick shows the quotient nonzero), then take a quotient of least positive vector-space dimension. Apply this also to any nonzero quotient of $A$. Thus proper ideals have maximal ideals on these charts and their principal localizations. Principal-open covers have finite unit-ideal witnesses, and module fractions glue on them by clearing finitely many denominators and using $1=\sum a_if_i^m$; the same formula contracts positive affine Cech cocycles. In particular the given chart-module data have their actual affine section interpretation. The DVR is Noetherian because any nonzero ideal has a member of least integer valuation generating that ideal. Hence its finite polynomial chart rings are Noetherian by [F1]. Submodules of finite free modules are finite by the coordinate-ideal induction, and all finite module kernels and quotients below are finitely presented. [F1, F6, given, construct, algebra]

2.1 Construct a finite graded presentation of $G$ on the ambient projective space. A finite chart-generator list extends to twisted global sections by multiplying by powers of a chart coordinate and clearing the finitely many overlap fractions and discrepancies, as in the affine gluing of step 1.1. This gives $E_0=\bigoplus O(-b)\to G$ surjective. Its kernel has finite chart data by step 1.1 and [F3]. Apply the same construction to that kernel, with shifts larger than all the $b$, obtaining $E_1\to E_0\to G\to0$. The morphism $E_1\to E_0$ is a homogeneous polynomial matrix over $R$: the standard Laurent-monomial Cech calculation over coefficient ring $R$ gives $H^0(O(c))=R[x_0,\ldots,x_N]_c$ for $c\ge0$. That calculation simply toggles the least missing vertex in each Laurent exponent complex; its coefficients may be in any ring, and needs no basis selection. If $N=0$, the one chart gives $R$ in every twist, and we used only nonnegative degree differences. The finite graded cokernel $M_0$ of the matrix therefore represents $G$ by exact chart localization. Let $T=\{z\in M_0:t^nz=0\text{ for some }n\}$. It is a finite graded submodule by step 1.1, and one finite power of $t$ kills its finite generating list. Its associated chart sheaf vanishes, because it injects into the $R$-flat, hence $t$-torsion-free sheaf $G$. Thus $M=M_0/T$ is finite graded, $R$-torsion-free and still represents $G$. [F3, step 1.1, construct, algebra]

3.1 Put $S=R[x_0,\ldots,x_N]$ and $m=(t,x_0,\ldots,x_N)$. For any finite graded $S$-module $H$, lift a finite homogeneous $k$-basis of $H/mH$ to obtain a minimal graded free cover. The lifts generate: for its cokernel $Q=mQ$, examine degrees from its lower bound upwards. In the lowest remaining degree $q$, the finite $R$-module $Q_q$ satisfies $Q_q=tQ_q$ and is zero by the determinant form of Nakayama; induction proves every degree zero. The kernel of a minimal cover is contained in $m$ times the free module. By the finite kernel property in step 1.1, repeat this construction through the prescribed finite stage $F_{N+4}$ for $M$. This augmented partial resolution is exact through degree $N+3$, and all its differentials have coefficients in $m$. The sequence $t,x_0,\ldots,x_N$ is regular on $S$: after quotienting by $t$ and each initial variable one still has a polynomial ring over the field $k$, on which the next variable is injective. Thus [F2] gives its free Koszul resolution of $k$ of length $N+2$. [F2, step 1.1, step 2.1, construct, algebra]

4.1 Compare this Koszul complex with the finite partial free resolution in step 3.1 by their tensor double complex. In the Koszul direction, homology is $k\otimes_SF_\bullet$. In the other direction, exactness of the augmented partial resolution gives $K(t,x)\otimes_SM$ in all total degrees at most $N+3$. This is the finite row-filtration comparison; the extra finite stages ensure that no missing top kernel occurs in the compared degrees. In degree $N+3$ the latter complex has zero homology, while the former has zero differentials by minimality and homology $F_{N+3}/mF_{N+3}$. Step 3.1's graded Nakayama makes $F_{N+3}=0$. Hence $F_0,\ldots,F_{N+2}$ is an exact finite graded free resolution of $M$. Every one of its successive kernels is $R$-torsion-free, since it is a submodule of a free $S$-module; $M$ is also torsion-free by step 2.1. The DVR is a PID, so all these modules are $R$-flat by [F4]. Each short exact kernel sequence therefore stays exact after tensoring with $k$ or $K$. The same finite graded free shifts consequently resolve both fibre modules. [F4, step 2.1, step 3.1, algebra]

5.1 Sheafifying these two fibre resolutions gives the actual sheaves $G_k,G_K$. Indeed on every finite chart, localization and taking the homogeneous degree zero commute with these coefficient quotients, and $M$ represents $G$ by step 2.1. Apply the field computation [F5] to either resolution. For every integer $a$ both fibre Euler values are the identical finite expression
$$\sum_{j,b}(-1)^j\beta_{j,b}\binom{a-b+N}{N},$$
where $F_j=\bigoplus_bS(-b)^{\beta_{j,b}}$. Their finite-dimensional cohomology and the intrinsic interpretation on $X_k,X_K$ are also supplied by [F5], because the closed-immersion chart modules give identical Cech complexes on the ambient projective charts. This proves equality for every twist, including negative integers, without asserting constancy of each cohomology dimension. [F5, step 2.1, step 4.1, algebra]

6.1 For any subset $A$ of the finite bundle list, $G\otimes\bigotimes_{i\in A}L_i$ is again a coherent $R$-flat sheaf: its finite local frames identify it with $G$ as an $R$-module sheaf. Apply step 5.1 with twist zero to each of these finitely many sheaves and take their alternating sum. This is precisely the displayed equality of mixed Euler differences. No fibre smoothness or purity was needed. If a support-dimension bound identifies either expression as a top numerical mixed intersection, the equality still holds as the same finite integer. [step 5.1, algebra]

7.1 Zero sheaves and empty finite generator lists use the zero resolution. The empty bundle list is step 5.1 with twist zero, so it is included. If $N=0$, step 2.1 uses the one-chart calculation, and the finite resolution argument still has the regular sequence $t,x_0$ of length two. Finite residue fields need no avoidance argument, because all covers, gluing and Nakayama operations were algebraic. Generic and special sheaves may have nonreduced or embedded support: only flatness of the supplied sheaf over the DVR was used for fibre exactness. Thus the stated complete DVR-model specialization layer follows without generic proper-base cohomology or a determinant functor. [step 1.1, step 2.1, step 4.1, step 5.1, step 6.1, algebra] ∎
