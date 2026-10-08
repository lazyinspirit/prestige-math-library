---
id: ex-the-double-edge-quantum-serre-relation-for-affine-a-one
kind: example
title: "The double-edge Serre relation for the cyclic affine type $A_1^{(1)}$"
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
  - lem-quantum-pascal-recurrence-and-gaussian-integrality
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
      locator: "Ch. 13, §13.1.3, Lemma 13.1.3.9 and its remark on Jantzen's q-binomial computation, printed p. 308: positive Serre quasiprimitivity; the affine double-edge coefficient calculation is supplied locally."
    - title: "Benjamin Enriquez, PBW and Duality Theorems for Quantum Groups and Quantum Current Algebras, Journal of Lie Theory 13 (2003), 21–64"
      url: "https://www.heldermann-verlag.de/jlt/jlt13/enrila.pdf"
      locator: "§1.1, printed p. 22, display (1): the symmetric Gaussian coefficients and Serre relation exponent $1-a_{ij}$."
    - title: "Kyeonghoon Jeong, Seok-Jin Kang and Masaki Kashiwara, Crystal Bases for Quantum Generalized Kac-Moody Algebras, arXiv:math/0305390"
      url: "https://arxiv.org/pdf/math/0305390"
      locator: "§1, printed pp. 5–6, displays (1.4) and (1.6): the Serre sums and coproduct convention."
    - title: "Alexander Kleshchev, Lectures on Infinite Dimensional Lie Algebras"
      url: "https://darkwing.uoregon.edu/~klesh/teaching/IDLALN1.pdf"
      locator: "Part I, Example 1.5.4, printed p. 25: the affine $A_1^{(1)}$ Cartan matrix $\begin{pmatrix}2&-2\\-2&2\end{pmatrix}$; §1.1.1, display (1.6), printed p. 4: the classical Serre relation used at $q=1$."
pipeline_run: frontier-43-complex-representation-15
---

## Statement

For the double edge $a_{12}=a_{21}=-2$ (the Cartan matrix $\begin{pmatrix}2&-2\\-2&2\end{pmatrix}$ of the cyclic affine type $A_1^{(1)}$, with $d_1=d_2=1$) the quantum Serre relation has $m=1-a_{12}=3$:

$$\mathrm{Serre}^+_{12}=E_1^3E_2-[3]_qE_1^2E_2E_1+[3]_qE_1E_2E_1^2-E_2E_1^3,\qquad [3]_q=q^{2}+1+q^{-2},$$

and it is quasiprimitive:

$$\Delta(\mathrm{Serre}^+_{12})=\mathrm{Serre}^+_{12}\otimes K_1^{-3}K_2^{-1}+1\otimes\mathrm{Serre}^+_{12},\qquad \Delta(\mathrm{Serre}^-_{12})=\mathrm{Serre}^-_{12}\otimes1+K_1^{3}K_2\otimes\mathrm{Serre}^-_{12}.$$

The Gaussian coefficients satisfy $\sum_{r=0}^{3}(-1)^{r}q^{2r}\binom{3}{r}_q=0$. The polynomial positive Serre expression at $q=1$ is the classical cubic relation $\operatorname{ad}(e_1)^3e_2=0$ for this Cartan matrix.

## Facts & Assumptions

**Given:** The matrix has $a_{12}=a_{21}=-2$, symmetrizer $d_1=d_2=1$, and the Drinfeld–Jimbo positive and negative Serre words use $m=3$. The prescribed coproduct on the positive and negative toral-action Borels is as in [[lem-coproduct-preserves-the-positive-and-negative-quantum-serre-ideals]].

[F1] $q_i=q^{d_i}$, so $q_1=q_2=q$ ([[def-symmetrizable-cartan-datum-for-a-quantum-group]]).

[F2] $[3]_q=q^2+1+q^{-2}$ ([[def-quantum-integers-factorials-and-divided-powers-at-q-i]]).

[F3] If $yx=q_i^2xy$, then $(x+y)^N=\sum_{r=0}^Nq_i^{r(N-r)}\binom Nr_i x^ry^{N-r}$ ([[lem-q-binomial-expansion-for-q-commuting-elements]]).

[F4] $\sum_{r=0}^{3}(-1)^rq^{2r}\binom{3}{r}_q=0$ ([[lem-quantum-pascal-recurrence-and-gaussian-integrality]]).

[F5] The normalized positive coproduct is an algebra map on the toral-action Borel ([[lem-coproduct-preserves-the-positive-and-negative-quantum-serre-ideals]]).

[F6] The normalized negative formula is $\Delta_-(\mathrm{Serre}^-_{ij})=\mathrm{Serre}^-_{ij}\otimes1+K_i^{m_{ij}}K_j\otimes\mathrm{Serre}^-_{ij}$ ([[lem-coproduct-preserves-the-positive-and-negative-quantum-serre-ideals]]).

[F7] The toral action is $K_hE_iK_h^{-1}=q^{\langle\alpha_i,h\rangle}E_i$ ([[def-drinfeld-jimbo-quantized-enveloping-algebra]]).

[F8] The classical Kac–Moody presentation imposes $(\operatorname{ad}e_i)^{1-a_{ij}}e_j=0$ ([[thm-serre-presentation-of-a-kac-moody-algebra]]).

[F9] Tensor-product multiplication is $(a\otimes b)(c\otimes d)=ac\otimes bd$ ([[thm-tensor-product-of-algebras-over-a-commutative-ring]]).

[F10] The positive and negative Serre words have Gaussian coefficients and powers $1-a_{ij}$ ([[def-drinfeld-jimbo-quantized-enveloping-algebra]]).

## Proof

**Proof technique:** Use the q-binomial expansion for $\Delta(E_1)^3$, enumerate left/right choices in each four-letter Serre word, and collect the twelve mixed tensor words by bidegree.

1.1 For $i,j\in\{1,2\}$ the toral relations give $K_iE_iK_i^{-1}=q^2E_i$ and $K_iE_jK_i^{-1}=q^{-2}E_j$ when $i\ne j$. For $x_1=E_1\otimes K_1^{-1}$ and $y_1=1\otimes E_1$, this gives $y_1x_1=q^2x_1y_1$. [F1, F5, F7, F9, algebra]

1.2 Since $m_{12}=3$, [F6] gives $\Delta(\mathrm{Serre}^-_{12})=\mathrm{Serre}^-_{12}\otimes1+K_1^3K_2\otimes\mathrm{Serre}^-_{12}$, so the negative expansion also has no mixed bidegree terms. [F6, given]

2.1 Applying [F3] at $N=3$ gives $\Delta(E_1)^3=E_1^3\otimes K_1^{-3}+(1+q^2+q^4)E_1^2\otimes K_1^{-2}E_1+(1+q^2+q^4)E_1\otimes K_1^{-1}E_1^2+1\otimes E_1^3$. [step 1.1, F1, F3, F5, F9, algebra]

3.1 For each position of a positive Serre word, choose $L$ for $E_i\otimes K_i^{-1}$ or $R$ for $1\otimes E_i$. The left word preserves the $L$ letters and the right word preserves the $R$ letters, followed by the toral factors from $L$. Moving $K_i^{-1}$ past a later $E_j$ contributes $q^{-2}$ when $i=j$ and $q^2$ when $i\ne j$. In bidegree $(3,1)$ the coefficients, for $E_1^3\otimes E_2K_1^{-3}$, $E_1^2E_2\otimes E_1K_1^{-2}K_2^{-1}$, $E_1E_2E_1\otimes E_1K_1^{-2}K_2^{-1}$, and $E_2E_1^2\otimes E_1K_1^{-2}K_2^{-1}$, are respectively $q^6-[3]_qq^4+[3]_qq^2-1$, $1+q^{-2}+q^{-4}-[3]_qq^{-2}$, $-[3]_q(1+q^{-2})+[3]_q(1+q^{-2})$, and $[3]_q-(q^2+1+q^{-2})$. [F2, F5, F7, F9, F10, step 2.1, algebra]

3.2 In bidegree $(2,2)$ the coefficients, for $E_1^2\otimes E_1E_2K_1^{-2}$, $E_1^2\otimes E_2E_1K_1^{-2}$, $E_1E_2\otimes E_1^2K_1^{-1}K_2^{-1}$, and $E_2E_1\otimes E_1^2K_1^{-1}K_2^{-1}$, are respectively $q^4+q^2+1-[3]_q(q^2+1)+[3]_q$, $-[3]_q+[3]_q(1+q^{-2})-(1+q^{-2}+q^{-4})$, $1+q^{-2}+q^{-4}-[3]_q(1+q^{-2})+[3]_q$, and $-[3]_q+[3]_q(q^2+1)-(q^4+q^2+1)$. [F2, F5, F7, F9, F10, step 2.1, algebra]

3.3 In bidegree $(1,3)$ the coefficients, for $E_1\otimes E_1^2E_2K_1^{-1}$, $E_1\otimes E_1E_2E_1K_1^{-1}$, $E_1\otimes E_2E_1^2K_1^{-1}$, and $E_2\otimes E_1^3K_2^{-1}$, are respectively $[3]_q-[3]_q$, $-[3]_q(1+q^{-2})+[3]_q(1+q^{-2})$, $[3]_qq^{-2}-(1+q^{-2}+q^{-4})$, and $1-[3]_qq^2+[3]_qq^4-q^6$. These are all remaining mixed bidegrees. [F2, F5, F7, F9, F10, step 2.1, algebra]

4.1 Substituting $[3]_q=q^2+1+q^{-2}$ makes all twelve mixed coefficients in steps 3.1–3.3 zero; the last coefficient in step 3.3 is the alternating Gaussian identity [F4]. The all-left and all-right choices give exactly $\mathrm{Serre}^+_{12}\otimes K_1^{-3}K_2^{-1}$ and $1\otimes\mathrm{Serre}^+_{12}$. Thus the positive element is quasiprimitive. [F2, F4, F10, step 3.1, step 3.2, step 3.3, F9, algebra]

5.1 At $q=1$, $[3]_q=3$ and the positive Serre polynomial becomes $e_1^3e_2-3e_1^2e_2e_1+3e_1e_2e_1^2-e_2e_1^3=\operatorname{ad}(e_1)^3e_2$, which vanishes by [F8]. This specializes the polynomial Serre expression only, not the entire $\mathbb Q(q)$-algebra. [F8, algebra] ∎
