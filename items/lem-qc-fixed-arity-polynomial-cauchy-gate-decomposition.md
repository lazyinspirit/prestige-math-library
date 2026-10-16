---
id: lem-qc-fixed-arity-polynomial-cauchy-gate-decomposition
kind: lemma
title: Effective Exact Gate Factors for Fixed Local Unitaries
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 13
deps:
  - lem-qc-fixed-dimension-interval-arithmetic
  - alg-qc-two-level-unitary-elimination
  - thm-qc-two-level-unitary-elimination-correct
  - alg-qc-two-level-gate-to-elementary-gates
  - thm-qc-multicontrolled-ancilla-resource-tradeoff
  - thm-qc-one-control-unitary-two-cnot
  - thm-complex-spectral-theorem-for-normal-endomorphisms
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Dieter van Melkebeek and Thomas Watson, Time-Space Efficient Simulations of Quantum Computations, final 2012 version, §4.3"
      url: https://theoryofcomputing.org/articles/v008a001/v008a001.pdf
    - title: "Adriano Barenco et al., Elementary gates for quantum computation, §§5–8"
      url: https://arxiv.org/pdf/quant-ph/9503016
---

## Statement

Fix a positive integer $k$ and a finite collection $\mathcal U$ of fixed unitary matrices, each on between one and $k$ qubits. Suppose every real and imaginary matrix coordinate has a deterministic Cauchy procedure returning error at most $2^{-p}$ in time polynomial in $p+1$. There exist exact no-ancilla one-qubit/CNOT factor lists for all $U\in\mathcal U$, with a common constant bound on their lengths, such that every coordinate of every one-qubit factor also has a polynomial-time Cauchy procedure. All scalar phases in the exact matrix products are retained.

The lists and Cauchy programs may depend on the fixed collection $\mathcal U$. In particular their finite zero/nonzero decisions and branch choices may be hardcoded. The claim is an existence statement for each fixed machine's finite transition set, not an algorithm that decides equality of arbitrary Cauchy-name inputs. It supplies effective target matrices for finite-precision compilation, not a compiler by itself.

## Facts & Assumptions

**Given:** Fixed $k$, a finite fixed transition set $\mathcal U$, and the coordinate Cauchy programs in the statement.

[F1] [[lem-qc-fixed-dimension-interval-arithmetic]] gives polynomial bit-cost fixed-dimensional sums, products, quotients with a supplied positive divisor lower bound, and nonnegative square roots, including zero. Rational rescaling extends its square-root range $[0,1]$ to any fixed bounded interval.

[F2] [[alg-qc-two-level-unitary-elimination]] uses finitely many Givens row operations with $h=\sqrt{|a|^2+|b|^2}$ when $b\ne0$; [[thm-qc-two-level-unitary-elimination-correct]] proves the exact resulting two-level/diagonal factorization, without discarding phases.

[F3] [[alg-qc-two-level-gate-to-elementary-gates]] implements a two-level block by fixed basis permutations, one pattern-controlled one-qubit block, and inverse permutations, including negative controls.

[F4] [[thm-qc-multicontrolled-ancilla-resource-tradeoff]] supplies the exact no-workspace square-root recursion for controlled one-qubit matrices. The borrowed-wire controlled-$X$ calls in that recursion have fixed elementary implementations.

[F5] [[thm-qc-one-control-unitary-two-cnot]] implements $C(U)$ by three one-qubit target matrices $A,B,C$, one control phase, and two CNOTs, using the stated Euler and half-angle formulas.

[F6] [[thm-complex-spectral-theorem-for-normal-endomorphisms]] gives orthogonal eigenspace projectors for each two-dimensional unitary.

## Proof


1.1 Fixed finite compositions of polynomial-Cauchy scalars remain polynomial-Cauchy under the operations of [F1], provided each nonzero divisor has a fixed positive lower bound. There are only finitely many scalars in a fixed finite expression tree, so for its nonzero divisors some integer $B$ has $|z|\ge2^{-B}$ throughout; $B$ may be hardcoded. A fixed zero is returned as zero. Nonnegative roots are allowed even at zero, and nested roots only multiply the requested precision by a fixed constant at each of finitely many levels. Thus the finite compositions still use polynomial time in $p+1$. Conjugation merely changes an imaginary sign. [given, F1, construct, algebra]

1.2 The path instruction in [F3] is an exact factorization. Each prescribed pattern-controlled $X$ exchanges precisely the adjacent path labels $g_j,g_{j+1}$ and fixes every other computational-basis label, because its $n-1$ controls must match the common bits. Let $P$ be the permutation effected by the swaps in their stated order. Then $P(x)=g_{d-1}$ and $P(y)=y=g_d$. The middle block, with the stated block reversal when the target bit of $g_{d-1}$ is $1$, acts by $V$ on the ordered pair $(g_{d-1},g_d)$ and fixes its complement. The complete chronological list therefore has matrix $P^*MP$, where $M$ is that middle block. Since $P$ is a permutation and maps $x,y$ to the selected pair, no other basis label maps into that pair; the conjugate acts by $V$ on $(x,y)$ and fixes every other basis vector. The controlled-gate expansions are exact by [F4] and [F5], and the negative-control conjugations retain their exact matrices. Thus every two-level factor used here is exactly the one specified by [F3], including its scalar phase. [F3, F4, F5, construct, algebra]

2.1 A square root of any fixed polynomial-Cauchy unit scalar $u$ can also be selected polynomially. Choose a fixed $\zeta\in\{1,-1,i,-i\}$ with $\operatorname{Re}(\zeta u)\ge1/2$; such a choice exists because the larger absolute coordinate of a unit complex number is at least $1/\sqrt2$. Put $v=\zeta u$ and $a=\sqrt{(1+\operatorname{Re}v)/2}$, $b=\operatorname{Im}v/(2a)$. Then $a\ge\sqrt3/2$ and $(a+ib)^2=v$. Multiply by either fixed algebraic square root of $\zeta^{-1}$ and choose its fixed sign to obtain either desired root of $u$. Step 1.1 applies with a positive constant denominator. Iterating gives any fixed finite tower of coherently chosen phase half-roots. A root of a fixed nonzero complex scalar $z$ is obtained by first normalizing $z/|z|$ and multiplying its unit root by $\sqrt{|z|}$; the zero case is hardcoded separately. [step 1.1, F1, construct, algebra]

2.2 For each $U\in\mathcal U$, run the finite algebraic Givens construction [F2] as a mathematical factorization. Hardcode its actual finite skip decisions $b=0$; no run-time zero test on a varying Cauchy name is required. In each unskipped operation $h>0$ is a fixed constant, so all entries of that Givens matrix and the updated matrix are polynomial-Cauchy by step 1.1. There are at most $2^k(2^k-1)/2$ operations, a constant. The terminal diagonal entries and the exact two-level adjoints therefore have polynomial-Cauchy entries. A phase on one chosen computational word is a pattern-controlled $\operatorname{diag}(1,\lambda)$ or $\operatorname{diag}(\lambda,1)$ on a selected wire, with the other wires matching that word; hence the terminal diagonal is a fixed finite product of pattern-controlled one-qubit matrices of the same effective class. [given, F2, step 1.1, construct, algebra]

3.1 The square roots required by [F4] preserve this effective class. For a fixed two-dimensional unitary $W$, if $W=\lambda I$ choose a unit root $\mu$ by step 2.1 and take $\mu I$. Otherwise the spectral theorem [F6] gives two distinct eigenvalues. The nonzero discriminant $d_0=(\operatorname{tr}W)^2-4\det W$ has a root $d$ as in step 2.1, and $\lambda_\pm=(\operatorname{tr}W\pm d)/2$ have modulus one. The projector $P_+=(W-\lambda_-I)/(\lambda_+-\lambda_-)$ and $P_-=I-P_+$ are orthogonal by [F6]. Choose unit roots $\mu_\pm$ and put $V=\mu_+P_++\mu_-P_-$. Then $V$ is unitary, $V^2=W$, and every entry is polynomial-Cauchy by step 1.1 and step 2.1. The scalar/nonscalar branch and the positive eigenvalue-gap lower bound are fixed choices, not input-dependent equality decisions. [F4, F6, step 1.1, step 2.1, step 1.2, algebra, construct]

3.2 The constant one-control construction [F5] is effective as well. Choose a unit root $\lambda$ of $\det W$ by step 2.1 and normalize $S=\lambda^{-1}W\in SU(2)$. Write $S=\begin{pmatrix}a&-\overline c\\c&\overline a\end{pmatrix}$ and $\rho=|a|$, $\sigma=|c|$. If $\rho>0$ use $a/\rho$ for its phase, otherwise fix its arbitrary phase to $1$; treat $c/\sigma$ the same way. Choose fixed real arguments $\gamma,\eta$ with $a=e^{-i\gamma}\rho$ and $c=e^{i\eta}\sigma$, and choose $0\le\theta\le\pi$ with $\cos(\theta/2)=\rho$, $\sin(\theta/2)=\sigma$. These are only notation: the algorithm never computes their real arguments. Every matrix entry of the Euler factors and of $A,B,C$ in [F5] is a finite sum or product of the unit phases and their coherently selected half-roots, together with $\rho,\sigma$, $\sqrt{(1+\rho)/2}$ and $\sqrt{(1-\rho)/2}$. Indeed the latter are $\cos(\theta/4),\sin(\theta/4)$; the z-rotation entries are exponentials of half-angles of $\alpha=\gamma+\eta$ and $\beta=\gamma-\eta$, hence phase roots from step 2.1. Choose their fixed signs to match these displayed arguments. Thus all four arbitrary one-qubit matrices in the exact controlled construction are polynomial-Cauchy; their multiplication retains the control phase $\operatorname{diag}(1,\lambda)$ exactly. No numerical angle oracle is assumed. [F5, step 1.1, step 2.1, construct, algebra]

4.1 Apply the Gray-path implementation [F3] to each two-level block from step 2.2, and apply the no-workspace recursion [F4] to its pattern-controlled gates and to the diagonal phase gates. Negative controls and permutation gates have fixed algebraic entries. Each root step stays in the effective class by step 3.1 and each controlled base case does so by step 3.2. The number of controls, recursion depth, blocks, and elementary gates is bounded by a constant depending on $k$ and the finite fixed collection. Therefore only finitely many branch choices and divisor lower bounds are needed in total; hardcode them and the corresponding polynomial-Cauchy programs into the simulator. Exact factorization follows from step 1.2 and step 3.1 and step 3.2 and [F2]–[F5], including each scalar phase; the resulting gate factors and lengths have precisely the asserted properties. [F2, F3, F4, F5, step 2.2, step 1.2, step 3.1, step 3.2, construct] ∎

