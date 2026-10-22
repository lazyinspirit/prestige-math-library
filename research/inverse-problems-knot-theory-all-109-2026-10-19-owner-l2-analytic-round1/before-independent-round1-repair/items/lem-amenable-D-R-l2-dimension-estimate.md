---
id: lem-amenable-D-R-l2-dimension-estimate
kind: lemma
title: "L²-dimension estimates for amenable D(R) groups"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 7
deps:
  - def-integral-half-solutions-strebel-and-l2-signatures
  - thm-amenable-von-neumann-l2-flatness
  - lem-finite-von-neumann-module-dimension-and-dense-quotients
justified_by:
  []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Jae Choon Cha, “Amenable L²-Theoretic Methods and Knot Concordance”"
      url: "https://arxiv.org/pdf/1010.1058"
      locator: "Theorem 2.2 and §3.1–3.3, dimension estimate"
    - title: "Jae Choon Cha and Kent E. Orr, “L²-signatures, homology localization, and amenable groups”"
      url: "https://arxiv.org/pdf/0910.3700"
      locator: "Theorem 6.6 and proof"
---

## Statement

Let R be Q or F_p, let Γ be a countable discrete amenable group in Strebel's class D(R), and let C_* be a bounded-below chain complex of right ZΓ-modules whose C_i are finitely generated free for i≤n. Give R the trivial Γ-action. If H_i(C_*⊗_{ZΓ}R)=0 for every i≤n, then H_i(C_*⊗_{ZΓ}NΓ) has von Neumann dimension zero for every i≤n. This is a dimension-zero conclusion and does not assert that the L²-homology module vanishes.

## Statement references

[Cha, Theorem 2.2 and §3](https://arxiv.org/pdf/1010.1058)

## Facts & Assumptions

**Given:** The field $R\in\{\mathbb Q,\mathbb F_p\}$, the amenable group $\Gamma\in D(R)$, the bounded-below chain complex and its finite-free terms through degree $n$, and the stated trivial-coefficient homology vanishing. Work in the standing full-AC convention of the L2-signature definitions.

[F1] The class $D(R)$ detects injectivity of maps between projective $R\Gamma$-modules from injectivity after augmentation to $R$. [[def-integral-half-solutions-strebel-and-l2-signatures]]

[F2] For every $\mathbb C\Gamma$-module $M$, amenability gives $\dim_{\mathcal N\Gamma}\operatorname{Tor}_1^{\mathbb C\Gamma}(M,\mathcal N\Gamma)=0$. [[thm-amenable-von-neumann-l2-flatness]]

[F3] Finite-matrix kernels are projection modules, polar decomposition preserves their trace dimensions, and quotienting a finite projection module by a Hilbert-dense submodule gives dimension zero. Dimension-zero modules have dimension-zero quotients. [[lem-finite-von-neumann-module-dimension-and-dense-quotients]]

## Proof

**Given:** The data and foundational convention above. Write $A=\mathcal N\Gamma$, and let $l$ be a lower bound with $C_i=0$ for $i<l$. If $n<l$, every claimed group is already zero, so assume $n\ge l$.

1.1 First replace the term above degree $n$ by a finite free module if necessary. The image of $d_{n+1}$ after tensoring with $R$ is the kernel of $d_n$ over $R$, a finite-dimensional space. Choose finitely many tensors in $C_{n+1}\otimes R$ whose boundaries span it, and expand each tensor as a finite sum $c\otimes r$. The finitely many resulting elements $c\in C_{n+1}$ define a finite free module $P_{n+1}$ with a map to $C_{n+1}$; compose this map with $d_{n+1}$. Keep $P_i=C_i$ for $l\le i\le n$ and set all other terms to zero. Since $d_nd_{n+1}=0$, this defines a bounded finite-free complex $P_*$ whose $R$-homology vanishes through degree $n$. Below $n$ its $A$-homology is the original one, and in degree $n$ its $A$-homology surjects onto the original one, since it has the same cycles and possibly fewer boundaries. It suffices by [F3] to prove the result for $P_*$. [given, F3, construct, algebra]

2.1 Over the field $R$, split the exact complex through degree $n$: choose vector-space complements of the kernels in each of its finitely many finite-dimensional terms, and invert each boundary map onto its image on the chosen complement. This gives maps $s_i:P_i\otimes R\to P_{i+1}\otimes R$, $l\le i\le n$, with $ds+sd=I$ through degree $n$. For $R=\mathbb F_p$, lift the finitely many matrix entries to integers and then to constant coefficients in $\mathbb Z\Gamma$, obtaining maps $D_i$. For $R=\mathbb Q$, choose a single positive integer $a$ clearing the denominators of all these finitely many matrices, and lift $a s_i$ instead; in the finite-field case put $a=1$. Set $D_i=0$ outside the indicated range. Then $f=dD+Dd$ is a chain map over $\mathbb Z\Gamma$, chain homotopic to zero, and its augmented matrix in degree $i\le n$ is $aI$, which is injective over $R$. [given, step 1.1, construct, algebra]

3.1 Apply [F1] to $f_i\otimes_{\mathbb Z}R$ on the free $R\Gamma$-module $P_i\otimes_{\mathbb Z}R$; its augmentation is injective by step 2.1, so this map is injective. Hence $f_i$ is injective over $\mathbb Z\Gamma$. For $R=\mathbb Q$ this follows by viewing a nonzero integral vector as a nonzero rational vector. For $R=\mathbb F_p$, an integral kernel vector has finitely many coefficients; divide them all by the largest common power of $p$. Torsion-freeness of the integral target preserves the kernel equation, and the resulting nonzero vector modulo $p$ contradicts injectivity. Passing to $\mathbb C\Gamma$ preserves this injection: any finite complex relation can be decomposed using a basis of the finite-dimensional rational span of its coefficients into rational relations, each of which clears denominators to an integral one. [F1, step 2.1, algebra]

4.1 Resolve the cokernel of the injective square matrix $f_i$ over $\mathbb C\Gamma$. The degree-one Tor group is the kernel of $f_i:A^{r_i}\to A^{r_i}$ after tensoring, where $r_i$ is the rank of $P_i$; this is the same free-presentation computation used to prove [F2]. Consequently [F2] makes that kernel dimension zero. Its projection has trace zero and is therefore zero by faithfulness in [F3]. Thus $f_i$ is injective on the Hilbert completion. Let $Z_i$ be the Hilbert kernel of $d_i$. The chain identity makes $f_i$ preserve $Z_i$. Its restriction to $Z_i$ has zero kernel, and polar decomposition in [F3] makes its Hilbert-closed image have the same trace dimension as $Z_i$; since that image lies in $Z_i$, faithfulness makes it dense in $Z_i$. [F2, F3, step 3.1, algebra]

5.1 The algebraic $A$-cycle module is the projection module $P_{Z_i}A^{r_i}$ and is Hilbert-dense in $Z_i$ by [F3]. On these cycles, $f_i=d_{i+1}D_i+D_{i-1}d_i=d_{i+1}D_i$, so its image is contained in the algebraic boundary module. Step 4.1 shows that these boundaries are Hilbert-dense in $Z_i$. The dense-quotient assertion in [F3] therefore gives dimension-zero $A$-homology of $P_*$ through degree $n$. The identity/surjection comparison of step 1.1 transfers this conclusion to $C_*$. The proof establishes vanishing of the dimension and does not assert algebraic vanishing of the homology module. [F3, step 1.1, step 4.1, algebra] ∎
