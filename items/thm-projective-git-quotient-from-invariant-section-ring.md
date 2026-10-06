---
id: thm-projective-git-quotient-from-invariant-section-ring
kind: theorem
title: The projective GIT quotient from the invariant section ring
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 10
justified_by: []
aliases: []
deps: [def-good-and-geometric-quotients-for-group-actions, def-homogeneous-coordinate-ring, lem-reynolds-operator-and-invariant-subring-properties, lem-graded-invariants-of-localization-at-an-invariant-element, lem-affine-chart-quotients-for-invariant-sections, def-invariant-section-ring-and-projective-git-quotient, def-semistable-and-stable-points-for-a-linearization, lem-ample-linearization-power-equivariant-embedding, lem-good-quotient-local-on-target, lem-ample-invariant-section-charts-are-affine, lem-section-ring-of-ample-line-bundle-finitely-generated, lem-invariants-of-finitely-generated-graded-rational-algebra-are-finitely-generated, lem-proj-of-finitely-generated-graded-algebra-is-projective, thm-linear-action-projective-git-quotient, lem-ample-stable-positive-power, thm-ample-powers-very-ample-proper-base, lem-proj-veronese-invariance, def-g-linearization-of-an-invertible-sheaf, def-ample-invertible-sheaf, def-projective-variety-classical, def-rational-action-on-affine-variety, def-axiom-of-choice, lem-graded-section-module-finite-projective, cor-projective-cohomology-finite-dimensional-field, lem-extend-sections-from-nonvanishing-open, thm-integrality-and-finite-module-equivalences]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Michel Brion, Introduction to actions of algebraic groups, Les cours du CIRM 1 (2010), no. 1, 1-22"
      url: "https://ccirm.centre-mersenne.org/item/10.5802/ccirm.1.pdf"
      locator: "Proposition 1.35 and the reduction preceding it, printed p. 12"
    - title: "Victoria Hoskins, Moduli Problems and Geometric Invariant Theory, FU Berlin lecture notes (2015/16)"
      url: "https://userpage.fu-berlin.de/hoskins/M15_Lecture_notes.pdf"
      locator: "Theorems 5.3 and 5.6, Remark 5.26"
    - title: "P. E. Newstead, Geometric Invariant Theory, lecture notes, CIMAT Guanajuato 2006 (CEL/HAL; archived copy)"
      url: "https://web.archive.org/web/20231019082211id_/https://cel.hal.science/cel-00392098/file/newstead_notes.pdf"
      locator: "Example 3.3, Theorem 3.4 and Section 3.5"
    - title: "I. Dolgachev, Lectures on Invariant Theory, London Mathematical Society Lecture Note Series 296, Cambridge University Press, 2003"
      url: "https://www.math.ens.psl.eu/~benoist/refs/Dolgachev.pdf"
      locator: "Theorem 8.1 and Proposition 8.1 with proofs, printed pp. 118-121"
---

## Statement

Assume AC inherited from the invariant-theory, Proj and ample-sheaf suppliers. Let $G$ be a complex reductive affine algebraic group acting algebraically on a complex projective variety $X$ ([[def-projective-variety-classical]]), and let $L$ be an ample $G$-linearized invertible sheaf ([[def-g-linearization-of-an-invertible-sheaf]], [[def-ample-invertible-sheaf]]). Let $R(X,L)=\bigoplus_{n\ge0}\Gamma(X,L^{\otimes n})$ and let $R(X,L)^G$ be its graded invariant subalgebra. Then:

(i) $R(X,L)^G$ is a finitely generated graded $\mathbb C$-algebra and the GIT quotient $Y=X/\!/_LG=\operatorname{Proj}R(X,L)^G$ is a projective $\mathbb C$-scheme of finite type;

(ii) the semistable locus $X^{ss}(L)$ ([[def-semistable-and-stable-points-for-a-linearization]]) is the union of the affine $G$-stable charts $X_\sigma$ over $\sigma\in\Gamma(X,L^{\otimes n})^G$, $n\ge1$, and is open in $X$; for every $m\ge1$ one has $X^{ss}(L)=X^{ss}(L^{\otimes m})$ and $X^s(L)=X^s(L^{\otimes m})$, and the Veronese isomorphism $\operatorname{Proj}R(X,L)^G\cong\operatorname{Proj}R(X,L^{\otimes m})^G$ identifies the two quotient data;

(iii) the chart morphisms glue to a $G$-invariant morphism $\pi:X^{ss}(L)\to Y$ that is a good quotient in the sense of [[def-good-and-geometric-quotients-for-group-actions]]; in particular $\mathcal O_Y\cong(\pi_*\mathcal O_{X^{ss}(L)})^G$, $\pi$ is surjective, closed $G$-stable subsets have closed images, and disjoint closed $G$-stable subsets have disjoint images;

(iv) if $m\ge1$ and $i:X\hookrightarrow\mathbf P(V)$ is a $G$-equivariant closed immersion with $i^*\mathcal O(1)\cong L^{\otimes m}$ as $G$-linearized invertible sheaves ([[lem-ample-linearization-power-equivariant-embedding]]), then $X^{ss}(L)=X\cap\mathbf P(V)^{ss}$ and $X^s(L)=X\cap\mathbf P(V)^s$ for the linear action, so the definitions of [[def-semistable-and-stable-points-for-a-linearization]] agree with the embedded ones;

(v) no linearization of an arbitrary ample invertible sheaf is constructed or assumed possible, and no Hilbert--Mumford criterion is used or claimed.

## Facts & Assumptions

**Given:** A complex reductive affine algebraic group $G$, a complex projective variety $X$ with an algebraic action, an ample $G$-linearized invertible sheaf $L$, its section ring $R=R(X,L)$ and invariant part $R^G$, and an equivariant closed immersion $i:X\hookrightarrow\mathbf P(V)$ with $i^*\mathcal O(1)\cong L^{\otimes m}$ as $G$-linearized invertible sheaves when one is chosen.

[F1] *Finite generation.* The section ring $R(X,L)$ is a finitely generated graded $\mathbb C$-algebra, its invariant subalgebra $R^G$ is finitely generated, and $\operatorname{Proj}R^G$ is projective of finite type over $\mathbb C$ ([[lem-section-ring-of-ample-line-bundle-finitely-generated]], [[lem-invariants-of-finitely-generated-graded-rational-algebra-are-finitely-generated]], [[lem-proj-of-finitely-generated-graded-algebra-is-projective]]).

[F2] *Equivariant very ample power.* Some positive power of $L$ gives a $G$-equivariant closed immersion into a projective space of a finite-dimensional rational $G$-module, via its complete linear system ([[lem-ample-linearization-power-equivariant-embedding]]).

[F3] *Linear-action GIT theorem.* For a $G$-stable closed $X'\subseteq\mathbf P(V)$, the linear-action theorem gives its semistable/stable loci, the good quotient from the invariant coordinate ring, the orbit-closure description of quotient fibres, and the geometric quotient on the stable locus ([[thm-linear-action-projective-git-quotient]]).

[F4] *Coordinate charts.* For a homogeneous coordinate ring $A$ of a projective embedding and a homogeneous section $f\in A_+$, the chart $X_f$ is affine with coordinate ring $A_{(f)}$; the chart construction is compatible with localization ([[def-homogeneous-coordinate-ring]], [[lem-affine-chart-quotients-for-invariant-sections]]).

[F5] *Finite section modules over the coordinate ring.* Put $S=\mathbb C[V]=\operatorname{Sym}(V^*)$, let $A$ be the image of $S$ in the section ring of $L^{\otimes m}$, and for $0\le j<m$ put $M_j=\bigoplus_{k\ge0}\Gamma(X,L^{\otimes(mk+j)})$. The graded section-module theorem gives a finitely generated tail of each $M_j$ over $S$; the finitely many initial graded pieces are finite-dimensional by projective coherent cohomology, so each full $M_j$ is finite over $S$. The kernel of $S\to A$ acts by zero on every $M_j$, so $R(X,L)=\bigoplus_{j=0}^{m-1}M_j$ is a finite $A$-module ([[lem-graded-section-module-finite-projective]], [[cor-projective-cohomology-finite-dimensional-field]]). For $b\in R$, the module $R$ is faithful over $A[b]$ because an element annihilating it annihilates $1$; [[thm-integrality-and-finite-module-equivalences]] therefore makes $b$ integral over $A$.

[F6] *Extension from a section chart.* If $f$ is a positive-degree section and $h\in\Gamma(X_f,\mathcal O_X)$, then after multiplying by a power of $f$ the function extends to a global section of the corresponding power of $L$; hence $\Gamma(X_f,\mathcal O_X)=R(X,L)_{(f)}$ ([[lem-extend-sections-from-nonvanishing-open]]).

[F7] *Reynolds operator and localization.* For a rational $G$-algebra, the Reynolds operator is natural under equivariant maps, is linear over invariant elements, preserves a $G$-stable grading, and invariants commute with localization at a homogeneous invariant ([[lem-reynolds-operator-and-invariant-subring-properties]], [[lem-graded-invariants-of-localization-at-an-invariant-element]]).

[F8] *Good quotients.* Good quotients are local on the target; the affine chart quotients in [F4] glue to the section-ring quotient, and the good quotient clauses include the invariant structure sheaf and closed/disjoint image properties ([[lem-good-quotient-local-on-target]], [[def-good-and-geometric-quotients-for-group-actions]]).

[F9] *Proj and Veronese.* Standard homogeneous opens cover Proj; for a graded ring, passing to a positive Veronese gives a canonical Proj isomorphism with matching localized degree-zero rings ([[lem-proj-veronese-invariance]]).

## Proof


**Proof technique:** direct.

1.1 *Finite generation and projectivity.* By F1 the invariant section ring $R^G$ is a finitely generated graded $\mathbb C$-algebra with degree-zero part $\mathbb C$, so $Y=\operatorname{Proj}R^G$ is projective of finite type. This proves (i). [F1]

1.2 *Choose an embedded model.* Fix any equivariant closed immersion $i:X\hookrightarrow\mathbf P(V)$ with $i^*\mathcal O(1)\cong L^{\otimes m}$ as $G$-linearized invertible sheaves, whose existence is F2. Let $X'=i(X)$, $S=\mathbb C[V]=\operatorname{Sym}(V^*)$, and let $A\subseteq R(X,L^{\otimes m})$ be the homogeneous coordinate ring, the image of the restriction map $S\to R(X,L^{\otimes m})$. [F2, given]

1.3 *The full section ring is finite over $A$.* For $0\le j<m$, the graded module $M_j=\bigoplus_{k\ge0}\Gamma(X,L^{\otimes(mk+j)})$ is the section module of the coherent sheaf $i_*L^{\otimes j}$ on $\mathbf P(V)$, so it is finite over $S$ by F5. If a homogeneous polynomial in $S$ restricts to zero on $X$, then it acts by zero on each $M_j$, since multiplication by it is restriction followed by multiplication of sections. Thus the $S$-actions on the $M_j$ factor through $A$, each $M_j$ is a finite $A$-module, and $R=\bigoplus_{j=0}^{m-1}M_j$ is a finite $A$-module. By the faithful-module criterion in F5 every homogeneous $\sigma\in R$ is integral over $A$. [F5, algebra]

2.1 *Invariant sections give invariant coordinate charts.* Let $\sigma\in R_n^G$ be homogeneous of positive degree. Since it is integral over $A$, it satisfies a monic relation over $A$; taking the homogeneous component of total degree $rn$ gives a relation $\sigma^r+\sum_{i=1}^r a_i\sigma^{r-i}=0$ with $a_i\in A\cap R_{in}$ (zero when $m\nmid in$). Apply the Reynolds operator of $R$ to this relation. Its naturality under multiplication by the invariant $\sigma$ and under the inclusion $A\hookrightarrow R$ gives $$\sigma^r+\sum_{i=1}^r R_A(a_i)\sigma^{r-i}=0,$$ where $R_A(a_i)\in A^G\cap R_{in}$ by F7. If $\sigma(x)\ne0$ at $x\in X$, not all $R_A(a_i)$ can vanish at $x$, since evaluating the displayed relation in the one-dimensional fiber of $L^{\otimes rn}$ would otherwise give $\sigma(x)^r=0$. Hence every point semistable for the full section ring lies in a nonvanishing chart of a positive-degree invariant in $A^G$. The reverse inclusion is immediate from $A^G\subseteq R^G$, so the embedded semistable locus $X'^{ss}$ equals $X^{ss}(L)$. The same monic relation shows that the charts $D_+(f)$ with $f\in A^G_+$ cover $\operatorname{Proj}R^G$: for any homogeneous prime avoiding $R^G_+$, choose $\sigma\in R^G_+$ outside it; some coefficient $R_A(a_i)$ in its relation must also be outside the prime. [F3, F7, step 1.3]

3.1 *Identify the two quotient targets chartwise.* For $f\in A^G_+$, the affine chart $X_f$ has ring $A_{(f)}$ by F4. Fractions in $R_{(f)}$ are regular on $X_f$, and F6 shows that every regular function there is such a fraction, so $A_{(f)}=\Gamma(X_f,\mathcal O_X)=R_{(f)}$ as $G$-algebras. Taking invariants and using F7 gives $(A^G)_{(f)}=(R^G)_{(f)}$. The $D_+(f)$ for $f\in A^G_+$ cover both $\operatorname{Proj}A^G$ and $Y=\operatorname{Proj}R^G$ by step 2.1; these identical chart rings and their localization maps therefore glue to a canonical isomorphism $\theta:\operatorname{Proj}A^G\xrightarrow{\sim}Y$. On every chart the quotient morphisms from $X_f$ are induced by the same inclusion of invariant regular functions into $\Gamma(X_f,\mathcal O_X)$, so $\theta$ identifies the linear-action quotient with the section-ring quotient. [F4, F6, F7, step 2.1]

3.2 *Compare positive tensor powers and embedded data.* For $r\ge1$, the $r$-th Veronese of $R^G$ is $R(X,L^{\otimes r})^G$, so F9 identifies the Proj quotient data for $L$ and $L^{\otimes r}$. The nonvanishing locus of a section equals that of every positive tensor power, so the semistable loci coincide; closedness of orbits in that same locus and finiteness of stabilizers then give equality of the stable loci. For the fixed compatible embedding in step 1.2, step 2.1 proves that the definitions on $X'=i(X)$ agree with those from the full section ring. Moreover the equivariant surjection $S\to A$ induces a surjection $S^G\to A^G$ by F7; hence invariant forms on $X'$ lift to invariant forms on $\mathbf P(V)$, giving $X'^{ss}=X'\cap\mathbf P(V)^{ss}$. The orbit closure of a point of $X'$ in the ambient semistable locus stays in $X'$, because $X'$ is closed and invariant; closedness there is therefore equivalent to closedness in $X'^{ss}$, and stabilizers agree. Thus $X'^s=X'\cap\mathbf P(V)^s$. This proves (iv) and all Veronese claims. [F3, F7, F9, step 2.1]

4.1 *Transport GIT properties.* The linear-action theorem F3 applies to $X'\subseteq\mathbf P(V)$. By steps 2.1 and 3.1 its semistable set, quotient target, and quotient morphism identify with $X^{ss}(L)$, $Y$, and $\pi$ respectively. Thus the section-ring morphism is a good quotient with the orbit-closure description of its fibres, proving (iii); the linear theorem also gives openness and $G$-stability of both loci, the stable geometric quotient, and the invariant-chart criterion. Since stability is defined by finite stabilizer and closed orbit inside the same identified semistable set, its locus agrees with $X'^s$, proving (ii) and the stable-locus assertions in (iv). All these constructions use the given linearization and the cited orbit/quotient results; they construct no linearization and use no Hilbert--Mumford criterion, proving (v). [F3, F8, step 2.1, step 3.1]

5.1 Assertions (i)-(v) are established: (i) in step 1.1, (ii)-(iv) in steps 2.1, 3.1 and 3.2, and (v) in step 4.1. The proof uses only the given linearization and the orbit/quotient suppliers; it constructs no linearization and invokes no numerical criterion. [F1, F2, F3, F7, F8, F9, step 1.1, step 2.1, step 3.1, step 4.1, step 3.2] ∎

## Remarks

- **The repair of the Veronese step.** The projectivity of $Y$ uses [[lem-proj-of-finitely-generated-graded-algebra-is-projective]] in its corrected form, for the particular common multiple $d=kL$ supplied there; the equality of the loci under every positive power $m$ is proved separately and does not use generation in degree one of an arbitrary Veronese.
- **No linearization existence.** The result assumes the linearization of $L$.
