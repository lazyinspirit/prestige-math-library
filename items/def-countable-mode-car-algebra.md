---
id: def-countable-mode-car-algebra
kind: definition
title: Countably Infinite-Mode CAR C*-Algebra
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: car-algebras-majorana-generators-and-clifford-comparison
dependency_level: 6
deps:
  - lem-finite-mode-car-canonical-inclusions-are-isometric
  - def-finite-mode-car-algebra
  - thm-finite-mode-car-algebra-is-full-matrix-algebra
  - def-c-star-algebra
  - thm-rationals-countable
  - thm-n-cross-n-countable
  - lem-rat-embeds-dense
justified_by: []
landmark: false
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Günther Hörmann, C*-Algebras with Aspects of Quantum Physics, Chapter 6, §6.4"
      url: https://www.mat.univie.ac.at/~gue/lehre/2324CStarQP/CAQP.pdf
    - title: "Jan Dereziński, Introduction to Representations of the Canonical Commutation and Anticommutation Relations, §§4.1 and 4.2"
      url: https://arxiv.org/pdf/math-ph/0511030
---

## Definition

Let $\mathbb N=\{1,2,\ldots\}$ be the countable mode set. For each $n$ take the universal finite-mode C*-algebra $\mathsf{CAR}_n$ whose dense algebraic presentation is [[def-finite-mode-car-algebra]]. Identify each stage with its image in the next under the isometric inclusion of [[lem-finite-mode-car-canonical-inclusions-are-isometric]]. The inclusions are compatible, injective, and preserve the C*-norm. Their union $\mathsf{CAR}_{\mathrm{loc}}=\bigcup_{n\ge0}\mathsf{CAR}_n$ is therefore a normed $*$-algebra with norm $\|x\|=\|x\|_{\mathsf{CAR}_n}$ whenever $x\in\mathsf{CAR}_n$; isometry makes this independent of the stage. Define the **countably infinite-mode CAR C*-algebra** $\mathsf{CAR}_{\mathbb N}$ to be the norm completion of $\mathsf{CAR}_{\mathrm{loc}}$ in the sense of [[def-c-star-algebra]]. Its canonical generator $a_j$ is the image of the $j$th finite-mode generator in any stage $n\ge j$. The C*-axioms pass to the completion because each finite stage satisfies them and multiplication and involution are continuous. The universal property of this inductive-limit construction is proved in [[thm-countable-mode-car-has-universal-inductive-limit-norm]].

The existence of this particular completion needs no choice principle. Let $\pi_n:\mathsf{CAR}_n\to M_{2^n}(\mathbb C)$ be the occupation-basis isomorphism of [[thm-finite-mode-car-algebra-is-full-matrix-algebra]], and let $D_n\subseteq\mathsf{CAR}_n$ be the inverse image of $M_{2^n}(\mathbb Q(i))$, where $\mathbb Q(i)=\{a+ib:a,b\in\mathbb Q\}$. Write $\mathbb N_0=\{0,1,2,\ldots\}$ for coding indices, to distinguish it from the positive mode set $\mathbb N$. The theorem [[thm-rationals-countable]] supplies a surjection $\mathbb N_0\to\mathbb Q$, and pairing two such indices by [[thm-n-cross-n-countable]] gives an explicit enumeration of $\mathbb Q(i)$. In these coordinates the canonical inclusion is $A\mapsto A\otimes I_2$ ([[lem-finite-mode-car-canonical-inclusions-are-isometric]]), so $D_n\subseteq D_{n+1}$. Each finite array of Gaussian rationals is coded by a finite tuple in $\mathbb N_0$; repeated pairing, followed by pairing with the stage index, enumerates $D=\bigcup_{n\ge0}D_n$ without choosing from a family of stage enumerations. Entrywise approximation of real and imaginary parts by rationals ([[lem-rat-embeds-dense]]) shows Gaussian-rational matrices are dense in each finite-dimensional matrix stage: in fixed size $m$, $\|A-B\|_{\mathrm{op}}\le m\max_{r,s}|a_{rs}-b_{rs}|$. Hence $D$ is dense in $\mathsf{CAR}_{\mathrm{loc}}$.

Concretely, form the set of Cauchy sequences in $\mathsf{CAR}_{\mathrm{loc}}$, identify two sequences when the norm of their termwise difference tends to zero, and use the limiting norm and termwise algebra operations. Write $\widehat d([a_n],[b_n])=\lim_n\|a_n-b_n\|$ for the resulting completion metric. Products are well defined because Cauchy sequences are bounded and $\|x_my_m-x_ny_n\|\le\|x_m\|\,\|y_m-y_n\|+\|x_m-x_n\|\,\|y_n\|$; the involution is isometric. Thus the completion is a normed $*$-algebra, and its C*-identity passes to limits. It is complete without Countable Choice: the constant-sequence image of $\mathsf{CAR}_{\mathrm{loc}}$ is dense in the sequence-class completion, so $D$ is dense there too. Fix the explicit enumeration $q:\mathbb N_0\twoheadrightarrow D$. For any Cauchy sequence $(x_m)$ of completion points, let $d_m$ be the first $q(r)$ within $2^{-m}$ of $x_m$. The least-index rule defines each $d_m$ uniquely. The triangle inequality shows $(d_m)$ is Cauchy; for $m,n$ sufficiently large, $\widehat d(x_m,d_n)\le\widehat d(x_m,x_n)+2^{-n}$ is arbitrarily small, so the class $[d_n]$ is the limit of $(x_m)$. Hence this sequence-class construction is a completion of $\mathsf{CAR}_{\mathrm{loc}}$ and defines $\mathsf{CAR}_{\mathbb N}$ choice-free. Its canonical generators and inductive-limit norm are unchanged.
