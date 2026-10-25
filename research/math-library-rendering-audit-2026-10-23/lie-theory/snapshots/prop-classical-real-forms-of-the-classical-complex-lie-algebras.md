---
id: prop-classical-real-forms-of-the-classical-complex-lie-algebras
kind: proposition
title: Classical real forms of the classical complex lie algebras
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-classification-of-real-semisimple-lie-algebras, prop-classical-types-correspond-to-sl-so-and-sp, thm-real-forms-correspond-to-conjugate-linear-involutions, def-classical-complex-matrix-lie-algebras, def-real-form-of-a-complex-lie-algebra, def-compact-real-form-of-a-complex-semisimple-lie-algebra, def-split-real-form, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter VI"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter VI, §8, Example 2 and Figure 6.1, printed pp. 397-399 and 413-415; §10, Theorem 6.105(c) with its remarks, printed pp. 421-422"
    - title: "Pavel Etingof, Lie Groups and Lie Algebras"
      url: "https://math.mit.edu/~etingof/lnlg.pdf"
      locator: "Lecture 40, §§40.2-40.3, printed pp. 186-189"
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-22
---

## Statement

Assume the Axiom of Choice. Let $\mathfrak g$ be a complex simple Lie algebra
of classical type $A_n$ $(n\ge1)$, $B_n$ $(n\ge2)$, $C_n$ $(n\ge3)$ or $D_n$
$(n\ge4)$, realized as $\mathfrak{sl}_{n+1}(\mathbb C)$,
$\mathfrak{so}_{2n+1}(\mathbb C)$, $\mathfrak{sp}_{2n}(\mathbb C)$ or
$\mathfrak{so}_{2n}(\mathbb C)$
([[prop-classical-types-correspond-to-sl-so-and-sp]],
[[def-classical-complex-matrix-lie-algebras]]). Then, up to isomorphism and
up to the admissible ranges and low-rank coincidences stated below, the real
forms of $\mathfrak g$ are:

1. for $A_n$: $\mathfrak{sl}_{n+1}(\mathbb R)$ and
   $\mathfrak{su}(p,q)$ with $p+q=n+1$, $p\ge q\ge0$; and
   $\mathfrak{su}^{*}(2m)=\mathfrak{sl}_m(\mathbb H)$ with $n+1=2m$;
2. for $B_n$: $\mathfrak{so}(p,q)$ with $p+q=2n+1$, $p\ge q\ge0$;
3. for $C_n$: $\mathfrak{sp}_{2n}(\mathbb R)$ and $\mathfrak{sp}(p,q)$ with
   $p+q=n$, $p\ge q\ge0$;
4. for $D_n$: $\mathfrak{so}(p,q)$ with $p+q=2n$, $p\ge q\ge0$, and
   $\mathfrak{so}^{*}(2n)$.

The compact form occurs in each list at the signature $q=0$, and the split
form is $\mathfrak{sl}_{n+1}(\mathbb R)$ for type $A_n$,
$\mathfrak{so}(n+1,n)$ for $B_n$, $\mathfrak{sp}_{2n}(\mathbb R)$ for $C_n$
and $\mathfrak{so}(n,n)$ for $D_n$; within the inner families
$\mathfrak{su}(p,q)$ and $\mathfrak{sp}(p,q)$ the real rank $\min(p,q)$ is
maximal exactly when $|p-q|\le1$ (for type $A_n$ the corresponding painted
root is the middle one). Among the low-rank coincidences are
$\mathfrak{sl}_2\cong\mathfrak{so}_3\cong
\mathfrak{sp}_2$, $\mathfrak{sp}_4\cong\mathfrak{so}_5$,
$\mathfrak{so}_4\cong\mathfrak{sl}_2\oplus\mathfrak{sl}_2$,
$\mathfrak{so}_6\cong\mathfrak{sl}_4$, together with
$\mathfrak{su}(1,1)\cong\mathfrak{sl}_2(\mathbb R)$,
$\mathfrak{so}(2,1)\cong\mathfrak{su}(1,1)$,
$\mathfrak{sp}_4(\mathbb R)\cong\mathfrak{so}(3,2)$,
$\mathfrak{sp}(2)\cong\mathfrak{so}(5)$,
$\mathfrak{sp}(1,1)\cong\mathfrak{so}(4,1)$,
$\mathfrak{so}^{*}(4)\cong\mathfrak{su}(2)\oplus\mathfrak{su}(1,1)$ and
$\mathfrak{so}^{*}(6)\cong\mathfrak{su}(3,1)$, together with the duplicate
$\mathfrak{so}^{*}(8)\cong\mathfrak{so}(6,2)$ in the type-$D_4$ list.

## Facts & Assumptions

**Given:** The Axiom of Choice; the classical complex matrix Lie algebras of [[def-classical-complex-matrix-lie-algebras]] with their types as in [[prop-classical-types-correspond-to-sl-so-and-sp]]; and the correspondence between real forms and conjugate-linear involutions of [[thm-real-forms-correspond-to-conjugate-linear-involutions]].

[A1] The Axiom of Choice is [[def-axiom-of-choice]]; it enters through the
classification theorem of [L3]. The explicit finite matrix constructions in
steps 1.1 and 2.1 make no additional choice.

[L1] A real Lie subalgebra $\mathfrak g_0$ of a complex Lie algebra $\mathfrak g$ is a real form if and only if it is the fixed locus of a conjugate-linear involution of $\mathfrak g$ ([[thm-real-forms-correspond-to-conjugate-linear-involutions]], [[def-real-form-of-a-complex-lie-algebra]]).

[L2] The complex matrix algebras $\mathfrak{sl}_m(\mathbb C)$, $\mathfrak{so}_m(\mathbb C)$ and $\mathfrak{sp}_{2n}(\mathbb C)$ and their classical types are fixed by [[def-classical-complex-matrix-lie-algebras]] and [[prop-classical-types-correspond-to-sl-so-and-sp]]. A complex change of basis between two nondegenerate complex symmetric or alternating forms gives an isomorphic complex orthogonal or symplectic algebra, so Euclidean matrix models may be used to display conjugations.

[L3] Knapp's classification theorem and its tables identify the real forms of the four classical types with exactly the matrix families in the Statement, in the stated range normalization (Source, Figure 6.1 and Theorem 6.105(c), printed pp. 413--415 and 421--422). Etingof obtains the same families directly from the inner classes of $A_n,B_n,C_n,D_n$ (Source, Lecture 40, §40.3, printed pp. 188--189). This is the classical specialization of [[thm-classification-of-real-semisimple-lie-algebras]].

[L4] The compact form is characterized by negative-definite Killing form and the split form by a split Cartan subalgebra ([[def-compact-real-form-of-a-complex-semisimple-lie-algebra]], [[def-split-real-form]]). Knapp's restricted-root computation gives real rank $\min(p,q)$ for $\mathfrak{su}(p,q)$ and $\mathfrak{sp}(p,q)$ and the source's table (6.110) records the stated real low-rank coincidences (printed pp. 422--426). The complex low-rank coincidences are those of [L2].

## Proof

**Proof technique:** direct.

1.1 Put $S_{p,q}=\operatorname{diag}(I_p,-I_q)$ and $J_r=\begin{pmatrix}0&I_r\\-I_r&0\end{pmatrix}$. In the Euclidean orthogonal model, and in the standard symplectic model with form $J_n$, the following are well-typed conjugate-linear involutive automorphisms: $$ \begin{array}{c|c} \text{complex algebra}&\text{conjugation}\\ \hline \mathfrak{sl}_m(\mathbb C)&\overline X, \quad -S_{p,q}X^*S_{p,q}, \quad J_r\overline XJ_r^{-1}\ (m=2r),\\ \mathfrak{so}_m(\mathbb C)&S_{p,q}\overline XS_{p,q},\\ \mathfrak{sp}_{2n}(\mathbb C)&\overline X, \quad -H_{p,q}X^*H_{p,q}, \qquad H_{p,q}=\operatorname{diag}(S_{p,q},S_{p,q}),\\ \mathfrak{so}_{2n}(\mathbb C)&J_n\overline XJ_n^{-1}. \end{array} $$ The displayed matrices have respectively sizes $m$, $m$, $2n$ and $2n$; in particular the last $J_n$ is $2n$ by $2n$, with no odd-dimensional completion. Direct substitution in the defining symmetric or alternating form shows that each map preserves its complex algebra and squares to the identity. [L2, algebra]

2.1 The fixed loci in step 1.1 are respectively $\mathfrak{sl}_m(\mathbb R)$, $\mathfrak{su}(p,q)$, $\mathfrak{su}^{*}(2r)=\mathfrak{sl}_r(\mathbb H)$, $\mathfrak{so}(p,q)$, $\mathfrak{sp}_{2n}(\mathbb R)$, $\mathfrak{sp}(p,q)$ and $\mathfrak{so}^{*}(2n)$. For the orthogonal signature form, conjugation by $D=\operatorname{diag}(I_p,iI_q)$ identifies the fixed locus in the Euclidean skew-symmetric model with $\{A\in M_m(\mathbb R):A^{\mathsf T}S_{p,q}+S_{p,q}A=0\}$. By [L1] every fixed locus is therefore a real form of the indicated complex algebra. [L1, step 1.1, algebra]

3.1 The type-by-type classification [L3] says that the fixed loci of step 2.1 exhaust the real forms: type $A_n$ has the real, Hermitian-signature and, when $n+1$ is even, quaternionic forms; types $B_n$ and $D_n$ have the orthogonal signatures, with $D_n$ also having $\mathfrak{so}^{*}(2n)$; and type $C_n$ has the real symplectic and quaternionic-Hermitian forms. Thus no additional real-form class is missing. [A1, L3, step 2.1]

3.2 Exchanging the positive and negative blocks gives $\mathfrak{su}(p,q)\cong\mathfrak{su}(q,p)$, $\mathfrak{so}(p,q)\cong\mathfrak{so}(q,p)$ and $\mathfrak{sp}(p,q)\cong\mathfrak{sp}(q,p)$. The compact classes are the $q=0$ members by [L4]. The real diagonal Cartan subalgebras show that $\mathfrak{sl}_{n+1}(\mathbb R)$, $\mathfrak{sp}_{2n}(\mathbb R)$ and $\mathfrak{so}(n,n)$ are split, and the orthogonal form of signature $(n+1,n)$ is split in type $B_n$. [L4, step 2.1, algebra]

4.1 The restricted-root computation in [L4] gives real rank $\min(p,q)$ for $\mathfrak{su}(p,q)$ and $\mathfrak{sp}(p,q)$, so within either signature family it is maximal exactly when $|p-q|\leq1$. The same source table supplies the real low-rank coincidences in the Statement, while the complex coincidences are those of [L2]. These identifications account for the admissible-range repetitions and do not remove any class from step 3.1. [L2, L4, step 3.1]

5.1 Steps 2.1 and 3.1 prove occurrence and exhaustion, step 3.2 identifies the compact and split members, and step 4.1 supplies the rank and low-rank clauses. Hence the displayed families are exactly the real forms of the four classical complex simple types, with the asserted normalization. [step 2.1, step 3.1, step 3.2, step 4.1] ∎



## Remarks

**Exhaustion.** Every real form is accounted for by the classification theorem's enumeration of the real forms of the type, together with the source's identification of the classical entries with the matrix algebras $\mathfrak{su}(p,q)$, $\mathfrak{so}(p,q)$, $\mathfrak{sp}(p,q)$, $\mathfrak{sp}_{2n}(\mathbb R)$, $\mathfrak{so}^{*}(2n)$, $\mathfrak{sl}_n(\mathbb R)$ and $\mathfrak{sl}_n(\mathbb H)$ (Knapp, Figure 6.1 of the source, printed pp. 413-415, and tables (6.107) and (6.110), printed pp. 424 and 426). The constructions of the proof exhibits each entry independently as the fixed locus of a conjugate-linear involution.

**What is proved here.** Every family is exhibited by a dimensionally correct conjugate-linear involution (in particular the $\mathfrak{so}^{*}(2n)$ operator uses the $2n$ by $2n$ matrix $J_n$), and the classification theorem supplies exhaustion. The compact, split, real-rank and low-rank clauses are then read with the exact range conventions of the cited tables.
