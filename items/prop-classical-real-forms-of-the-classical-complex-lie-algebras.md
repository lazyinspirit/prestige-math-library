---
id: prop-classical-real-forms-of-the-classical-complex-lie-algebras
kind: proposition
title: Classical real forms of the classical complex lie algebras
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-classification-of-real-semisimple-lie-algebras, thm-classification-of-real-forms-by-vogan-diagrams, thm-vogan-and-satake-diagrams-give-equivalent-real-form-classifications, prop-classical-types-correspond-to-sl-so-and-sp, thm-real-forms-correspond-to-conjugate-linear-involutions, def-classical-complex-matrix-lie-algebras, def-real-form-of-a-complex-lie-algebra, def-compact-real-form-of-a-complex-semisimple-lie-algebra, def-split-real-form, def-axiom-of-choice, def-vogan-diagram]
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
root is the middle one). The
low-rank coincidences are $\mathfrak{sl}_2\cong\mathfrak{so}_3\cong
\mathfrak{sp}_2$, $\mathfrak{sp}_4\cong\mathfrak{so}_5$,
$\mathfrak{so}_4\cong\mathfrak{sl}_2\oplus\mathfrak{sl}_2$,
$\mathfrak{so}_6\cong\mathfrak{sl}_4$, together with
$\mathfrak{su}(1,1)\cong\mathfrak{sl}_2(\mathbb R)$,
$\mathfrak{so}(2,1)\cong\mathfrak{su}(1,1)$,
$\mathfrak{sp}(1,1)\cong\mathfrak{so}(4,1)$,
$\mathfrak{so}^{*}(4)\cong\mathfrak{su}(2)\oplus\mathfrak{su}(1,1)$ and
$\mathfrak{so}^{*}(6)\cong\mathfrak{su}(3,1)$.

## Facts & Assumptions

**Given:** The Axiom of Choice; the classical complex matrix Lie algebras of [[def-classical-complex-matrix-lie-algebras]] with their types as in [[prop-classical-types-correspond-to-sl-so-and-sp]]; and the correspondence between real forms and conjugate-linear involutions of [[thm-real-forms-correspond-to-conjugate-linear-involutions]].

[A1] The Axiom of Choice is [[def-axiom-of-choice]]; it enters through the classification theorem of [L4] and the matrix realizations of [L5].

[L1] A real Lie subalgebra $\mathfrak g_0$ of a complex Lie algebra $\mathfrak g$ is a real form if and only if it is the fixed locus of a conjugate-linear involution of $\mathfrak g$ ([[thm-real-forms-correspond-to-conjugate-linear-involutions]], [[def-real-form-of-a-complex-lie-algebra]]).

[L2] The classical complex Lie algebras $\mathfrak{sl}_m(\mathbb C)$, $\mathfrak{so}_{2n+1}(\mathbb C)$, $\mathfrak{sp}_{2n}(\mathbb C)$ and $\mathfrak{so}_{2n}(\mathbb C)$ are simple in the indicated ranges, with the low-rank coincidences listed in [[prop-classical-types-correspond-to-sl-so-and-sp]], and $\mathfrak{su}(p,q)$, $\mathfrak{so}(p,q)$, $\mathfrak{sp}(p,q)$, $\mathfrak{sp}_{2n}(\mathbb R)$, $\mathfrak{so}^{*}(2n)$, $\mathfrak{sl}_n(\mathbb R)$ and $\mathfrak{sl}_n(\mathbb H)$ are the real matrix algebras defined by real, Hermitian, quaternionic-Hermitian, symplectic, quaternionic-skew-Hermitian or quaternionic structures in [[def-classical-complex-matrix-lie-algebras]].

[L3] The compact real form of a complex semisimple Lie algebra is the real form whose Killing form is negative definite, and the split real form is the real form containing a Cartan subalgebra with simultaneously real-diagonalizable adjoint action; a form is compact exactly when it is the fixed locus of a conjugation with $\sigma(X)=-X$ for suitable matrix realizations ([[def-compact-real-form-of-a-complex-semisimple-lie-algebra]], [[def-split-real-form]]).

[L4] The real forms of a complex simple Lie algebra are classified by their Vogan diagrams, well defined up to equivalence, and two real forms are isomorphic exactly when their Vogan diagrams are equivalent; the Satake diagrams give the same classification; and the classification theorem lists, for each classical complex simple type $A_n$, $B_n$, $C_n$, $D_n$, all of its real forms up to isomorphism in the admissible ranges, together with the exceptional types ([[thm-classification-of-real-semisimple-lie-algebras]], [[thm-classification-of-real-forms-by-vogan-diagrams]], [[thm-vogan-and-satake-diagrams-give-equivalent-real-form-classifications]], [[def-vogan-diagram]]).

[L5] The source records, for each classical complex simple type, the identifications of the real forms with the classical matrix algebras: $\mathfrak{su}(p,q)$ for $\mathfrak{sl}_m(\mathbb C)$ at the painted root $\alpha_{m-p}$, $\mathfrak{so}(p,q)$ for $\mathfrak{so}_m(\mathbb C)$, $\mathfrak{sp}(p,q)$ and $\mathfrak{sp}(n,\mathbb R)$ for $\mathfrak{sp}_{2n}(\mathbb C)$, $\mathfrak{so}(p,q)$ and $\mathfrak{so}^{*}(2n)$ for $\mathfrak{so}_{2n}(\mathbb C)$, $\mathfrak{sl}_m(\mathbb R)$ for $\mathfrak{sl}_m(\mathbb C)$, and $\mathfrak{sl}(m,\mathbb H)$ for $\mathfrak{sl}_{2m}(\mathbb C)$ (Source, §10, Figure 6.1, printed pp. 413-415, and §11, tables (6.107) and (6.110), printed pp. 424 and 426).

[L6] Bidimensional and structural facts for the classical algebras: $\mathfrak{su}(p,q)\cong\mathfrak{su}(q,p)$, $\mathfrak{so}(p,q)\cong\mathfrak{so}(q,p)$ and $\mathfrak{sp}(p,q)\cong\mathfrak{sp}(q,p)$ by conjugation with the permutation of the two blocks of the form; $\mathfrak{sl}_m(\mathbb R)$ is the split form of $\mathfrak{sl}_m(\mathbb C)$ and $\mathfrak{sp}_{2n}(\mathbb R)$ that of $\mathfrak{sp}_{2n}(\mathbb C)$; and the low-rank isomorphisms $\mathfrak{sl}_2\cong\mathfrak{so}_3\cong\mathfrak{sp}_2$, $\mathfrak{sp}_4\cong\mathfrak{so}_5$, $\mathfrak{so}_4\cong\mathfrak{sl}_2\oplus\mathfrak{sl}_2$, $\mathfrak{so}_6\cong\mathfrak{sl}_4$, $\mathfrak{su}(1,1)\cong\mathfrak{sl}_2(\mathbb R)$, $\mathfrak{so}(2,1)\cong\mathfrak{su}(1,1)$, $\mathfrak{sp}(1,1)\cong\mathfrak{so}(4,1)$, $\mathfrak{so}^{*}(4)\cong\mathfrak{su}(2)\oplus\mathfrak{su}(1,1)$ and $\mathfrak{so}^{*}(6)\cong\mathfrak{su}(3,1)$ hold ([[def-classical-complex-matrix-lie-algebras]], [[prop-classical-types-correspond-to-sl-so-and-sp]], [[def-split-real-form]], [[def-compact-real-form-of-a-complex-semisimple-lie-algebra]]).

## Proof

**Proof technique:** direct.

1.1 Hermitian forms. For $p+q=m$ and $J=\operatorname{diag}(I_p,-I_q)$ the map $\sigma(X)=-JX^{*}J$ is a conjugate-linear involutive automorphism of $\mathfrak{sl}_m(\mathbb C)$, whose fixed locus is $\mathfrak{su}(p,q)=\{X\in\mathfrak{sl}_m(\mathbb C):X^{*}J+JX=0\}$; hence $\mathfrak{su}(p,q)$ is a real form of $\mathfrak{sl}_m(\mathbb C)$ with complexification $\mathfrak{sl}_m(\mathbb C)$, it is compact exactly when $q=0$, and $\mathfrak{su}(1,1)\cong\mathfrak{sl}_2(\mathbb R)$ since both are the real forms of $\mathfrak{sl}_2(\mathbb C)$ with a one-dimensional maximally compact Cartan subalgebra. [L1, L2, L3]

1.2 Real and quaternionic forms of type $A$. The conjugation $X\mapsto\overline{X}$ is a conjugate-linear involutive automorphism of $\mathfrak{sl}_m(\mathbb C)$ whose fixed locus is $\mathfrak{sl}_m(\mathbb R)$, which is therefore a real form of $\mathfrak{sl}_m(\mathbb C)$; it is the split form of $\mathfrak{sl}_m(\mathbb C)$ because the diagonal Cartan subalgebra of real diagonal matrices has real eigenvalues under every adjoint operator. For even $m=2k$, let $J=\begin{pmatrix}0&I_k\\-I_k&0\end{pmatrix}$; the map $\sigma(X)=-J\overline{X}J$ is again a conjugate-linear involutive automorphism of $\mathfrak{sl}_{2k}(\mathbb C)$, and its fixed locus $\mathfrak{sl}_k(\mathbb H)=\mathfrak{su}^{*}(2k)=\{X\in\mathfrak{sl}_{2k}(\mathbb C):XJ=J\overline{X}\}$ is a real form of $\mathfrak{sl}_{2k}(\mathbb C)$ of real dimension $4k^2-1$. [L1, L2, L3]

1.3 Orthogonal forms. For $p+q=m$ let $I_{p,q}=\operatorname{diag}(I_p,-I_q)$; the map $X\mapsto-I_{p,q}X^{T}I_{p,q}$ is an involutive automorphism of $\mathfrak{so}_m(\mathbb C)$ whose fixed locus is $\mathfrak{so}(p,q)=\{X\in\mathfrak{so}_m(\mathbb C):X^{T}I_{p,q}+I_{p,q}X=0\}$, a real form of $\mathfrak{so}_m(\mathbb C)$ which is compact exactly when $q=0$; in particular $\mathfrak{so}(m)$ is the compact form of $\mathfrak{so}_m(\mathbb C)$. [L1, L2, L3]

1.4 Symplectic and quaternionic-orthogonal forms. For $p+q=n$ let $K=\operatorname{diag}(I_p,-I_q)$ on $\mathbb C^{2n}=\mathbb C^{2p}\oplus\mathbb C^{2q}$ and let $\mathfrak{sp}(p,q)$ be the intersection of $\mathfrak{sp}_{2n}(\mathbb C)$ with the fixed locus of the Hermitian conjugation $X\mapsto-KX^{*}K$; this is a real form of $\mathfrak{sp}_{2n}(\mathbb C)$, compact exactly when $q=0$. The real symplectic algebra $\mathfrak{sp}_{2n}(\mathbb R)=\mathfrak{sp}_{2n}(\mathbb C)\cap\mathfrak{gl}_{2n}(\mathbb R)$, the fixed locus of $X\mapsto\overline{X}$ in $\mathfrak{sp}_{2n}(\mathbb C)$, is a real form of $\mathfrak{sp}_{2n}(\mathbb C)$ and is its split form. Finally, for $n\ge2$ and $J=\begin{pmatrix}0&I_{\lfloor n/2\rfloor}\\-I_{\lfloor n/2\rfloor}&0\end{pmatrix}$ completed by a fixed coordinate when $n$ is odd, the intersection of $\mathfrak{so}_{2n}(\mathbb C)$ with the fixed locus of $X\mapsto-J\overline{X}J$ is the quaternionic orthogonal algebra $\mathfrak{so}^{*}(2n)=\{X\in\mathfrak{so}_{2n}(\mathbb C):XJ=J\overline{X}\}$, a real form of $\mathfrak{so}_{2n}(\mathbb C)$. Each displayed fixed locus is a real form of the classical complex simple algebra of the corresponding type by [L1] and the matrix identifications of [L2]. [L1, L2, L3]

2.1 Ranges and coincidences. The admissible ranges in the Statement remove the repetitions caused by the low-rank coincidences of [L2] and by the identifications $\mathfrak{su}(p,q)\cong\mathfrak{su}(q,p)$, $\mathfrak{so}(p,q)\cong\mathfrak{so}(q,p)$, $\mathfrak{sp}(p,q)\cong\mathfrak{sp}(q,p)$: exchanging the two blocks of the form conjugates the corresponding fixed loci, and the coincidences $\mathfrak{su}(1,1)\cong\mathfrak{sl}_2(\mathbb R)$, $\mathfrak{so}(2,1)\cong\mathfrak{su}(1,1)$, $\mathfrak{sp}(1,1)\cong\mathfrak{so}(4,1)$, $\mathfrak{so}^{*}(4)\cong\mathfrak{su}(2)\oplus\mathfrak{su}(1,1)$ and $\mathfrak{so}^{*}(6)\cong\mathfrak{su}(3,1)$ are the low-rank identifications among the families, recorded in the source (Knapp, printed p. 426). [L2, L6, step 1.1, step 1.3]

2.2 Compact and split extremes. In the lists of the Statement the parameter $q=0$ gives the compact form in each family, by the descriptions of steps 1.1, 1.3 and 1.4 and the characterization of [L3]; the split forms are $\mathfrak{sl}_{n+1}(\mathbb R)$ for type $A_n$, $\mathfrak{so}(n+1,n)$ for type $B_n$, $\mathfrak{sp}_{2n}(\mathbb R)$ for type $C_n$, and $\mathfrak{so}(n,n)$ for type $D_n$ (the diagonal form $\mathfrak{so}(p,q)$ with $p+q=2n$ has real rank $\min(p,q)$, maximal at $p=q=n$, so $\mathfrak{so}(n,n)$ is split for every $n\ge4$ and in particular for both parities); these are all entries of the displayed lists in the corresponding admissible ranges. [L2, L3, L6, step 1.1, step 1.3, step 1.4]

3.1 Every real form of a classical complex simple Lie algebra appears in the displayed list. Let $\mathfrak g$ be the complex simple algebra $\mathfrak{sl}_{n+1}(\mathbb C)$, $\mathfrak{so}_{2n+1}(\mathbb C)$, $\mathfrak{sp}_{2n}(\mathbb C)$ or $\mathfrak{so}_{2n}(\mathbb C)$ of type $A_n$, $B_n$, $C_n$ or $D_n$ and let $\mathfrak g_0$ be a real form of $\mathfrak g$. By [L4] the isomorphism class of $\mathfrak g_0$ is one of the classes in the classification list for the type of $\mathfrak g$, and by the identifications of [L5] the classes of the four classical types are exactly the following matrix algebras: for $A_n$, the compact form $\mathfrak{su}(n+1)$, the split form $\mathfrak{sl}_{n+1}(\mathbb R)$, the intermediate forms $\mathfrak{su}(p,q)$ with $p+q=n+1$, $p\ge q>0$, and $\mathfrak{su}^{*}(2m)=\mathfrak{sl}_m(\mathbb H)$ when $n+1=2m$; for $B_n$, the compact form $\mathfrak{so}(2n+1)$ and the forms $\mathfrak{so}(p,q)$ with $p+q=2n+1$, $p\ge q>0$; for $C_n$, the compact form $\mathfrak{sp}(n)$, the split form $\mathfrak{sp}_{2n}(\mathbb R)$, and the forms $\mathfrak{sp}(p,q)$ with $p+q=n$, $p\ge q>0$; and for $D_n$, the compact form $\mathfrak{so}(2n)$, the forms $\mathfrak{so}(p,q)$ with $p+q=2n$, $p\ge q>0$, and $\mathfrak{so}^{*}(2n)$, with the split form contained among the $\mathfrak{so}(p,q)$ as in step 2.2. Each of these algebras appears in the displayed lists of the Statement, in one of the indicated admissible ranges, so $\mathfrak g_0$ is isomorphic to an entry of the displayed lists. [L4, L5, step 2.2]

3.2 Each entry of the displayed lists occurs. By steps 1.1-1.4 every algebra displayed in the Statement is the fixed locus of a conjugate-linear involution of the corresponding classical complex simple Lie algebra, hence a real form of it; the admissible ranges remove only repetitions by steps 2.1 and 2.2, so no entry is lost. [L1, L2, step 1.1, step 1.2, step 1.3, step 1.4, step 2.1, step 2.2]

4.1 The two directions of step 3.1 and step 3.2 together give the assertion: up to isomorphism, and up to the admissible ranges and low-rank coincidences stated in the Statement, the real forms of a classical complex simple Lie algebra are exactly the algebras displayed in the list of the Statement. [step 3.1, step 3.2] ∎



## Remarks

**Exhaustion.** Every real form is accounted for by the classification theorem's enumeration of the real forms of the type, together with the source's identification of the classical entries with the matrix algebras $\mathfrak{su}(p,q)$, $\mathfrak{so}(p,q)$, $\mathfrak{sp}(p,q)$, $\mathfrak{sp}_{2n}(\mathbb R)$, $\mathfrak{so}^{*}(2n)$, $\mathfrak{sl}_n(\mathbb R)$ and $\mathfrak{sl}_n(\mathbb H)$ (Knapp, Figure 6.1 of the source, printed pp. 413-415, and tables (6.107) and (6.110), printed pp. 424 and 426). The constructions of the proof exhibits each entry independently as the fixed locus of a conjugate-linear involution.

**What is proved here.** Every algebra in the Statement is exhibited as the fixed locus of a conjugate-linear involution of the corresponding classical complex simple Lie algebra, hence is a real form of it; the compact forms and the split forms occur at the stated extreme signatures; the low-rank coincidences listed in the Statement are the standard identifications among the families; and the list exhausts all real forms by the classification theorem.
