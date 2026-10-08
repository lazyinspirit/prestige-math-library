---
id: thm-kazhdan-lusztig-inversion-formula
kind: theorem
title: The Kazhdan–Lusztig inversion formula
status: draft
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
deps: [def-inverse-kazhdan-lusztig-polynomials, thm-r-polynomial-recursion-and-degree-bounds, thm-existence-and-uniqueness-of-the-kazhdan-lusztig-basis, lem-bruhat-order-basic-properties-for-permutations]
dependency_level: 7
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "G. Lusztig, Hecke Algebras with Unequal Parameters, revised version arXiv:math/0208154v2 — §10.1–10.2: the inverse chain formula, inverse-matrix identities, and signed convention; §10.7: the dual-basis interpretation."
      url: "https://arxiv.org/pdf/math/0208154"
      locator: "§10.1–10.2, printed pp. 46–47, and §10.7, printed p. 48; the chain definition, matrix argument, sign convention, and dual-basis calculation were read in full, including a visual check of printed p. 47."
verification:
  precheck: pass
---

## Facts & Assumptions

**Given:** $n\ge1$ and the finite standard and Kazhdan–Lusztig bases of $H_v(n)$.

[F1] Bar-duality gives $P=R\bar P$, and $R\bar R=\bar R R=I$ ([[thm-existence-and-uniqueness-of-the-kazhdan-lusztig-basis]], [[thm-r-polynomial-recursion-and-degree-bounds]]).

[F2] The chain-defined matrix $Q'$ is the two-sided inverse of $P$, and the classical sign matrix $S$ gives $Q=S Q'S$ ([[def-inverse-kazhdan-lusztig-polynomials]]).

[F3] Bruhat intervals in $S_n$ are finite ([[lem-bruhat-order-basic-properties-for-permutations]]).

## Statement

Let $P=(p_{x,w})$, $Q'=(q'_{x,w})$ and $R=(r_{x,y})$ be the triangular matrices of [[thm-existence-and-uniqueness-of-the-kazhdan-lusztig-basis]], [[def-inverse-kazhdan-lusztig-polynomials]] and [[thm-r-polynomial-recursion-and-degree-bounds]]. Then (a) $P=R\bar P$, $\bar P=\bar RP$, and $R\bar R=\bar RR=1$; (b) $Q'P=PQ'=1$, and the inversion formulas $$\overline{q'_{x,w}}=\sum_{x\le z\le w}q'_{x,z}r_{z,w},\qquad \overline{q_{x,w}}=\sum_{x\le z\le w}q_{x,z}\overline{r_{z,w}}$$ hold, i.e. $\bar Q'=Q'R$ and $\bar Q=Q\bar R$; (c) for the dual basis $D_x(\underline H_w)=\delta_{x,w}$ from [[def-inverse-kazhdan-lusztig-polynomials]], $D_x(H_w)=q'_{x,w}$. The inversion is proved from the bar-duality relations alone (no finite case check).

## Proof

**Proof technique:** compare the coefficient matrices and use the chain inverse defining $Q'$.

1.1 **Bar-duality matrices.** Entrywise bar applied to $P=R\bar P$ gives $\bar P=\bar R P$, because bar is an involution and is multiplicative on matrices over the commutative coefficient ring. The R theorem gives both $R\bar R=I$ and $\bar R R=I$. Thus (a) holds. [F1, algebra]

2.1 **The inverse matrix identity.** By [F2], $Q'=P^{-1}$. From $P=R\bar P$, inversion gives $Q'=\bar P^{-1}R^{-1}=\bar Q'\bar R$, since $\bar P^{-1}=\overline{P^{-1}}=\bar Q'$ and $R^{-1}=\bar R$. Applying entrywise bar yields $\bar Q'=Q'R$. Its $(x,w)$ entry is $\overline{q'_{x,w}}=\sum_zq'_{x,z}r_{z,w}$; triangular support restricts this finite sum to $x\le z\le w$. [F1, F2, F3, step 1.1, algebra]

3.1 **The signed inverse formula.** Let $S$ be diagonal with $S_{x,x}=\mathrm{sgn}(x)$, so $S^2=I$. From [F2], $Q=SQ'S$; from the R bar-symmetry, $\bar R=SRS$. Therefore $\bar Q=S\bar Q'S=SQ'RS=(SQ'S)(SRS)=Q\bar R$, whose $(x,w)$ entry is $\overline{q_{x,w}}=\sum_zq_{x,z}\overline{r_{z,w}}$. Triangular support again restricts to $x\le z\le w$. [F1, F2, F3, step 2.1, algebra]

4.1 **Dual-basis interpretation.** Since $(\underline H_w)$ is a basis of the finite free module $H_v(n)$, its coordinate functionals $D_x$ form the dual basis and satisfy $D_x(\underline H_w)=\delta_{x,w}$. Put $d_{x,w}:=D_x(H_w)$. Evaluating on $\underline H_w=\sum_zp_{z,w}H_z$ gives $DP=I$; because $P$ is invertible, $D=P^{-1}=Q'$, so $D_x(H_w)=q'_{x,w}$. Conversely, if the dual evaluations are $q'_{x,w}$, the identity $Q'P=I$ gives $D_x(\underline H_w)=\delta_{x,w}$. This proves (c). All sums are finite by [F3], and no choice principle is used. [F1, F2, F3, step 1.1, step 2.1, algebra] ∎

## Remarks

Open supplier obligation: `thm-existence-and-uniqueness-of-the-kazhdan-lusztig-basis` → `thm-kazhdan-lusztig-inversion-formula`, consuming the basis/bar-duality clauses in F1 and steps 1.1–4.1. The basis supplier's coefficientwise-nonnegativity clause is unused but remains owner-held. The inverse-definition supplier `def-inverse-kazhdan-lusztig-polynomials` is itself provisional on this same basis obligation; this theorem uses its chain-matrix inverse and sign convention in steps 2.1, 3.1, and 4.1. Keep this theorem escalated until the basis supplier is resolved and both exact uses are rechecked.
