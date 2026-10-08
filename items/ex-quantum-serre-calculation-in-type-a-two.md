---
id: ex-quantum-serre-calculation-in-type-a-two
kind: example
title: "The quasiprimitive Serre element in type $A_2$"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - lem-coproduct-preserves-the-positive-and-negative-quantum-serre-ideals
  - def-drinfeld-jimbo-quantized-enveloping-algebra
  - def-symmetrizable-cartan-datum-for-a-quantum-group
  - def-quantum-integers-factorials-and-divided-powers-at-q-i
  - lem-q-binomial-expansion-for-q-commuting-elements
  - thm-tensor-product-of-algebras-over-a-commutative-ring
  - thm-serre-presentation-of-a-kac-moody-algebra
aliases: []
dependency_level: 5
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: "Richard Borcherds, Mark Haiman, Theo Johnson-Freyd, Nicolai Reshetikhin and Vera Serganova, Berkeley Lectures on Lie Groups and Quantum Groups"
      url: "https://categorified.net/LieQuantumGroups.pdf"
      locator: "Ch. 13, §13.1.3, Lemma 13.1.3.9 and its remark on Jantzen's q-binomial computation, printed p. 308: positive Serre quasiprimitivity; the six rank-two cancellations below are computed locally."
    - title: "Kyeonghoon Jeong, Seok-Jin Kang and Masaki Kashiwara, Crystal Bases for Quantum Generalized Kac-Moody Algebras, arXiv:math/0305390"
      url: "https://arxiv.org/pdf/math/0305390"
      locator: "§1, printed pp. 5–6, displays (1.4) and (1.6): the Serre sums, symmetric Gaussian coefficient and coproduct convention."
    - title: "Benjamin Enriquez, PBW and Duality Theorems for Quantum Groups and Quantum Current Algebras, Journal of Lie Theory 13 (2003), 21–64"
      url: "https://www.heldermann-verlag.de/jlt/jlt13/enrila.pdf"
      locator: "§1.1, printed p. 22, display (1): symmetric Gaussian binomials in the Serre convention."
    - title: "Alexander Kleshchev, Lectures on Infinite Dimensional Lie Algebras"
      url: "https://darkwing.uoregon.edu/~klesh/teaching/IDLALN1.pdf"
      locator: "Part I, §1.1.1, display (1.6), printed p. 4: the Serre relation in sl_n; n=3 gives the type-A2 relation used in the q=1 polynomial limit."
pipeline_run: frontier-43-complex-representation-15
---

## Statement

In the Drinfeld–Jimbo algebra of type $A_2$ (the Cartan datum $I=\{1,2\}$, $A=\begin{pmatrix}2&-1\\-1&2\end{pmatrix}$, $d_1=d_2=1$, so $q_1=q_2=q$) the Serre elements

$$\mathrm{Serre}^+_{12}=E_1^2E_2-[2]_qE_1E_2E_1+E_2E_1^2,\qquad \mathrm{Serre}^-_{12}=F_1^2F_2-[2]_qF_1F_2F_1+F_2F_1^2,\qquad [2]_q=q+q^{-1},$$

are quasiprimitive with explicit grouplike factors:

$$\Delta(\mathrm{Serre}^+_{12})=\mathrm{Serre}^+_{12}\otimes K_1^{-2}K_2^{-1}+1\otimes\mathrm{Serre}^+_{12},\qquad \Delta(\mathrm{Serre}^-_{12})=\mathrm{Serre}^-_{12}\otimes1+K_1^{2}K_2\otimes\mathrm{Serre}^-_{12}.$$

In particular every mixed bidegree term cancels. The polynomial positive Serre expression at $q=1$ is the classical Serre bracket $[e_1,[e_1,e_2]]=0$ of type $A_2$.

## Facts & Assumptions

**Given:** The Cartan matrix has $a_{12}=a_{21}=-1$ and symmetrizer $d_1=d_2=1$, so $q_1=q_2=q$ and the toral actions are those in [[def-symmetrizable-cartan-datum-for-a-quantum-group]] and [[def-drinfeld-jimbo-quantized-enveloping-algebra]]. The Drinfeld–Jimbo definition supplies the two Serre words; the coproduct/Serre lemma supplies the positive and negative toral-action Borel maps, and their images give the formulas in the Drinfeld–Jimbo quotient. Tensor-product multiplication is as stated in [[lem-coproduct-preserves-the-positive-and-negative-quantum-serre-ideals]] and [[thm-tensor-product-of-algebras-over-a-commutative-ring]].

[F1] $[2]_q=q+q^{-1}$ ([[def-quantum-integers-factorials-and-divided-powers-at-q-i]]).

[F2] If $yx=q_i^2xy$, then $(x+y)^N=\sum_{r=0}^N q_i^{r(N-r)}\binom Nr_i x^ry^{N-r}$ ([[lem-q-binomial-expansion-for-q-commuting-elements]]).

[F3] The normalized positive coproduct assignment is an algebra map on the toral-action Borel ([[lem-coproduct-preserves-the-positive-and-negative-quantum-serre-ideals]]).

[F4] For every $i\ne j$, the normalized negative coproduct formula is $\Delta_-(\mathrm{Serre}^-_{ij})=\mathrm{Serre}^-_{ij}\otimes1+K_i^{m_{ij}}K_j\otimes\mathrm{Serre}^-_{ij}$ ([[lem-coproduct-preserves-the-positive-and-negative-quantum-serre-ideals]]).

[F5] In the classical Kac–Moody algebra, the Serre presentation imposes $(\operatorname{ad}e_i)^{1-a_{ij}}e_j=0$ ([[thm-serre-presentation-of-a-kac-moody-algebra]]).

[F6] Tensor-product multiplication is $(a\otimes b)(c\otimes d)=ac\otimes bd$ ([[thm-tensor-product-of-algebras-over-a-commutative-ring]]).

[F7] The toral action is $K_hE_iK_h^{-1}=q^{\langle\alpha_i,h\rangle}E_i$ ([[def-drinfeld-jimbo-quantized-enveloping-algebra]]).

[F8] The quantum Cartan datum fixes $q_i=q^{d_i}$, so $d_1=d_2=1$ gives $q_1=q_2=q$ ([[def-symmetrizable-cartan-datum-for-a-quantum-group]]).

[F9] The positive and negative Serre words are the sums in the Drinfeld–Jimbo presentation ([[def-drinfeld-jimbo-quantized-enveloping-algebra]]).

## Proof

**Proof technique:** Expand the positive three-letter words by choosing, at each position, a left coproduct term or a right coproduct term, and collect the six mixed tensor words.

1.1 The toral rules give $K_1E_1K_1^{-1}=q^2E_1$, $K_1E_2K_1^{-1}=q^{-1}E_2$, $K_2E_1K_2^{-1}=q^{-1}E_1$, and $K_2E_2K_2^{-1}=q^2E_2$. For $x_i=E_i\otimes K_i^{-1}$ and $y_i=1\otimes E_i$, these imply $y_ix_i=q^2x_iy_i$. [F3, F6, F7, F8, algebra]

1.2 Here $m_{12}=2$, so [F4] gives $\Delta(\mathrm{Serre}^-_{12})=\mathrm{Serre}^-_{12}\otimes1+K_1^2K_2\otimes\mathrm{Serre}^-_{12}$; thus the negative expansion has no mixed bidegree terms either. [F4, given]

2.1 Applying [F2] at $N=2$ gives $\Delta(E_i)^2=E_i^2\otimes K_i^{-2}+(1+q^2)E_i\otimes K_i^{-1}E_i+1\otimes E_i^2$. [step 1.1, F2, F3, F6, algebra]

3.1 To collect the positive expansion, for each original word choose $L$ for a position sent to $E_i\otimes K_i^{-1}$ and $R$ for one sent to $1\otimes E_i$. The left word preserves the $L$ letters; the right word preserves the $R$ letters, followed by the $K^{-1}$ factors from $L$. Moving a $K_i^{-1}$ across a later $E_j$ contributes $q^{-a_{ij}}$. In bidegree $(2,1)$ the coefficients of $E_1E_2\otimes E_1K_1^{-1}K_2^{-1}$, $E_1^2\otimes E_2K_1^{-2}$, and $E_2E_1\otimes E_1K_1^{-1}K_2^{-1}$ are respectively $1+q^{-2}-[2]_qq^{-1}$, $q^2-[2]_qq+1$, and $-[2]_q+q+q^{-1}$. [F1, F3, F6, F7, F9, step 2.1, algebra]

3.2 In bidegree $(1,2)$ the coefficients of $E_1\otimes E_1E_2K_1^{-1}$, $E_2\otimes E_1^2K_2^{-1}$, and $E_1\otimes E_2E_1K_1^{-1}$ are respectively $q^{-1}+q-[2]_q$, $1-[2]_qq+q^2$, and $-[2]_qq^{-1}+q^{-2}+1$. These six coefficient groups exhaust the non-extreme splits of the three-letter Serre words. [F1, F3, F6, F7, F9, step 1.1, step 2.1, algebra]

4.1 Substituting $[2]_q=q+q^{-1}$ makes all six coefficients in steps 3.1–3.2 zero. The all-left and all-right choices contribute exactly $\mathrm{Serre}^+_{12}\otimes K_1^{-2}K_2^{-1}$ and $1\otimes\mathrm{Serre}^+_{12}$, proving the positive formula. [F1, step 3.1, step 3.2, F6, algebra]

5.1 At $q=1$, the positive Serre polynomial becomes $e_1^2e_2-2e_1e_2e_1+e_2e_1^2=[e_1,[e_1,e_2]]$, which vanishes by the classical type-$A_2$ Serre relation [F5]. This is the specialization of the polynomial Serre expression only; it does not assert specialization of the whole algebra over $\mathbb Q(q)$. [F5, algebra] ∎
