---
id: ex-ising-periodic-path-space-and-two-sector-map
kind: example
title: "Ising periodic paths split into two spin-chain sectors"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 8
deps: [def-anyonic-fusion-path-space, lem-anyonic-fusion-path-basis, thm-anyonic-path-space-is-hilbert-under-unitarity, def-anyonic-local-channel-projector, ex-qc-tqc-ising-data, def-qc-tqc-unitary-fusion-category]
justified_by: []
proof_strategy: direct
axiom_use: None; the path count and basis map are finite and explicit.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Shu-Heng Shao, What’s Done Cannot Be Undone: TASI Lectures on Non-Invertible Symmetries"
      url: "https://arxiv.org/pdf/2308.00747"
      locator: "§§3.4.1–3.4.2, PDF pp. 34–38: periodic anyonic paths and the two Ising sectors."
    - title: "Chetan Nayak, Steven H. Simon, Ady Stern, Michael Freedman, and Sankar Das Sarma, Non-Abelian Anyons and Topological Quantum Computation"
      url: "https://arxiv.org/pdf/0707.1889"
      locator: "§IV.A, PDF pp. 31–32: Ising fusion rules, the three-σ F-block, and exchange phases."
verification:
  precheck: pass
---

## Example

Assume a coherent unitary Ising fusion category with simple objects $\mathbf1,\eta,D$ and fusion rules

$$\eta\otimes\eta\cong\mathbf1,\qquad \eta\otimes D\cong D\otimes\eta\cong D,\qquad D\otimes D\cong\mathbf1\oplus\eta.$$

Use reference charge $D$, a chain length $L\ge1$, and periodic boundary condition $x_{L+1}=x_1$. A basis path is a sequence $(x_1,\ldots,x_L)$ satisfying $x_\ell\otimes D\supset x_{\ell+1}$ for every $\ell$. For $L=2N$ with $N\ge1$, the path space is the orthogonal sum of two $2^N$-dimensional sectors. The one-step cyclic shift maps the two sectors to each other; the basis bijection does not identify the doubled path-space line operators with the single-lattice translated Ising operators.

In the three-$D$, total-$D$ sector, the supplied Ising data give

$$F^{DDD}_{D}=\frac1{\sqrt2}\begin{pmatrix}1&1\\1&-1\end{pmatrix},\qquad R^{DD}_{\mathbf1}=e^{-i\pi/8},\qquad R^{DD}_{\eta}=e^{3i\pi/8}$$

in the pullback convention of [[def-qc-tqc-r-symbol]]. This is a sector calculation only; the premise of a coherent Ising category is separate from this one-block verification.

## Facts & Assumptions

**Given:** A coherent unitary Ising fusion category with the displayed fusion rules, reference object $D$, chain length $L\ge1$, periodic path definition, and the supplied three-$D$/total-$D$ F/R sector.

[F1] [[def-anyonic-fusion-path-space]]: a closed periodic path uses labels $x_1,\ldots,x_L$, the condition $x_\ell\otimes D\supset x_{\ell+1}$, and the cyclic boundary condition $x_{L+1}=x_1$.

[F2] [[def-qc-tqc-unitary-fusion-category]]: the path space carries the orthogonal fusion-path inner product when multiplicity bases are orthonormal.

[F3] [[ex-qc-tqc-ising-data]]: only in the three-$D$, total-$D$ sector, the basis order is $(\mathbf1,\eta)$, the displayed F matrix is unitary, and the pullback R entries have modulus one with relative phase $i$. This supplier does not assert an all-label F/R table.

[F4] [[def-anyonic-local-channel-projector]]: in the pair-first basis, the vacuum projection is $\operatorname{diag}(1,0)$ and the fixed-tree projector is its conjugate by the F move.

## Verification

**Given:** The Ising fusion rules, even or odd length $L$, and the closed path condition.

1.1 If $x_\ell\in\{\mathbf1,\eta\}$, then $x_\ell\otimes D\cong D$, so the next label must be $D$. If $x_\ell=D$, then $D\otimes D\cong\mathbf1\oplus\eta$, so the next label is $\mathbf1$ or $\eta$. Thus any allowed path alternates between $D$ and the two-label set $\{\mathbf1,\eta\}$. Since $L\ge1$, an odd number of transitions changes parity and cannot return to $x_1$, so no closed path exists for odd $L$. [F1, given, algebra]

2.1 Let $L=2N$ with $N\ge1$. There are exactly two possible parity patterns: $H$ with $x_\ell=D$ for odd $\ell$, and $\bar H$ with $x_\ell=D$ for even $\ell$. In $H$, each of the $N$ even labels is independently $\mathbf1$ or $\eta$; all adjacent fusion conditions hold by step 1.1, including the wraparound edge. In $\bar H$, the same is true for the $N$ odd labels. Hence each sector has $2^N$ basis paths and the closed path space is their direct sum, of dimension $2^{N+1}$. [F1, F2, step 1.1, algebra]

3.1 For a path in $H$, define $b_j=0$ if $x_{2j}=\mathbf1$ and $b_j=1$ if $x_{2j}=\eta$, for $1\le j\le N$. This gives a bijection $\Phi_H:H\to(\mathbb C^2)^{\otimes N}$ on bases by $x\mapsto|b_1\cdots b_N\rangle$. Its inverse inserts the fixed odd labels $D$ and the even labels encoded by the bits. Define $\Phi_{\bar H}$ analogously from $x_{2j-1}$. These maps are bijections because each sector has exactly the independent $N$ binary choices counted in step 2.1. [step 2.1, construct]

4.1 Define one-step cyclic shift by $(Tx)_\ell=x_{\ell+1}$ with indices modulo $L$. It sends $H$ to $\bar H$ and $\bar H$ to $H$. For $x\in H$, $(Tx)_{2j-1}=x_{2j}$, so $\Phi_{\bar H}(Tx)=\Phi_H(x)$ on basis vectors. On the reverse sector it induces the cyclic bit shift. Thus the direct sum and single-sector tensor-product spaces have explicit different dimensions; the basis map alone establishes no equality of their represented symmetry operators. [step 2.1, step 3.1, algebra]

5.1 Put $G=2^{-1/2}\begin{pmatrix}1&1\\1&-1\end{pmatrix}$. Direct multiplication gives $G^\dagger G=I_2$, and both entries $R^{DD}_{\mathbf1},R^{DD}_{\eta}$ in [F3] have modulus one. Therefore the supplied three-$D$, total-$D$ recoupling and exchange blocks are unitary in this sector, and the vacuum channel projection in the other tree is $G^{-1}\operatorname{diag}(1,0)G=\frac12\begin{pmatrix}1&1\\1&1\end{pmatrix}$. This verifies the local matrix only under the stated coherent-category premise; it proves no all-label pentagon or hexagon system. [F3, F4, step 2.1, algebra] ∎

## Remarks

The category premise is not supplied by this example. The current PA-31 batch manifest has no authored items, and the current A-homed Ising data supplier verifies only this sector. The required root-quotient Ising category and full coherence check are recorded as an owner hold in the batch-77 cross-batch evidence.
