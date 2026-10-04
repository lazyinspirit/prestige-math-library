---
id: lem-nonaffine-subgroup-scheme-stabilizer-of-line
kind: lemma
title: "Every subgroup scheme of an affine group is a line stabilizer"
status: published
origin: pipeline
deps: [lem-nonaffine-affine-group-faithful-representation, cor-finite-type-algebra-over-noetherian-ring-is-noetherian]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Milne, Algebraic Groups (2022), Theorem 4.27 and Lemma 4.28, pp.94–95"
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
---

## Statement

Let $G$ be an affine finite-type group scheme over a field $k$ and $H\subseteq G$ any closed subgroup scheme. There is a finite-dimensional representation $V$ of $G$ and a line $L\subseteq V$ whose scheme-theoretic stabilizer equals $H$: for every $k$-algebra $R$, $H(R)=\{g\in G(R):gL_R=L_R\}$. No smoothness assumption is required.

## Facts & Assumptions

[F1] Every coordinate-Hopf-algebra comodule is a union of finite-dimensional subcomodules. ([[lem-nonaffine-affine-group-faithful-representation]])

[F2] A finite-type algebra over a field is Noetherian. ([[cor-finite-type-algebra-over-noetherian-ring-is-noetherian]])

## Proof

**Given:** $G$, its coordinate Hopf algebra $A$, and the Hopf ideal $I=\ker(A\to k[H])$.

1.1 Choose finitely many ideal generators of $I$ by [F2], and a finite-dimensional right-regular subcomodule $V\subset A$ containing them by [F1]. Set $W=I\cap V$. Choose a basis $(e_j)_{j\in J}$ of $W$ and extend it to $(e_i)_{i\in J\sqcup K}$ of $V$. Write $\Delta(e_j)=\sum_i e_i\otimes a_{ij}$. The stabilizer of $W$ is cut out by $a_{ij}$ for $j\in J,i\in K$. Indeed these equations say the lower-left matrix block is zero; an invertible block upper triangular matrix over any commutative $R$ has both diagonal blocks invertible, since their determinants have invertible product. Thus inclusion $gW_R\subset W_R$ gives equality. [F1, F2, given, construct, algebra]

2.1 Because $I$ is a Hopf ideal, $\Delta(I)\subset I\otimes A+A\otimes I$ and $\epsilon(I)=0$. In $V\otimes A$, the first condition says that all the displayed $a_{ij}$ with $i\in K,j\in J$ belong to $I$: project the first factor into $A/I$, where the images of the $e_i$ for $i\in K$ are independent. Conversely the counit identity gives $e_j=\sum_{i\in K}\epsilon(e_i)a_{ij}$ for $j\in J$. Since the $e_j$ span a space containing the ideal generators of $I$, those matrix entries generate $I$. The stabilizer is therefore exactly $H$ as a closed scheme. [step 1.1, algebra]

3.1 Put $d=\dim W$ and $L=\bigwedge^dW\subset\bigwedge^dV$. This is a line, including $d=0$. For a basis $e_1,\ldots,e_d$ of $W$ let $w=e_1\wedge\cdots\wedge e_d$. Over every $R$, $W_R=\{v\in V_R:w\wedge v=0\}$, by expanding $v$ in a basis extending that of $W$. If an automorphism $g$ stabilizes $L_R$, then $(\bigwedge^dg)w=cw$ for a unit $c\in R$; applying $\bigwedge^{d+1}g$ to $w\wedge v$ shows $gW_R\subset W_R$, and applying $g^{-1}$ gives equality. The converse follows by taking determinants on $W_R$. Thus the line stabilizer equals the subspace stabilizer from step 2.1, completing the proof on every algebra. [step 1.1, step 2.1, construct, algebra] ∎
