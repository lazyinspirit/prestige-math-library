---
id: lem-qc-symmetric-power-irreducible
kind: lemma
title: "Symmetric Power Irreducible"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 4
deps: ["def-qc-symmetric-subspace-projector", "thm-qc-unitary-group-compact", "lem-qc-symmetric-subspace-average-is-projector", "def-qc-tensor-register-and-permutation", "def-qc-tensor-map", "thm-qc-tensor-map-composition-and-adjoint"]
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
      locator: "§7.2, proof of Theorem 7.28; local weight-space proof supplied."
---

## Statement

For every positive integer $d$ and integer $k\ge0$, the natural unitary action of $U(d)$ on $\operatorname{Sym}^k(\mathbb C^d)$ is irreducible.

## Facts & Assumptions

**Given:** $d\ge1$, $k\ge0$, and the natural action $U^{\otimes k}$ on the permutation-invariant subspace.

[F1] $U(d)$ is the group of $d\times d$ unitary matrices ([[thm-qc-unitary-group-compact]]).

[F2] $\operatorname{Sym}^k(\mathbb C^d)$ is the range of the permutation-average projector; its vectors are exactly those fixed by every tensor-factor permutation ([[def-qc-symmetric-subspace-projector]], [[lem-qc-symmetric-subspace-average-is-projector]]).

[L1] [[def-qc-tensor-map]] defines $U^{\otimes k}$ as the factorwise tensor map. The ordered register and permutation convention [[def-qc-tensor-register-and-permutation]] shows on elementary tensors that this map commutes with each factor permutation. The tensor-map adjoint and composition identities [[thm-qc-tensor-map-composition-and-adjoint]] make $U^{\otimes k}$ a unitary representation when $U$ is unitary. The QC02 interfaces are present as draft carriers.

## Proof


1.1 If $k=0$, the tensor unit is one-dimensional and the action is trivial, so the representation is irreducible. Suppose $k\ge1$. Let $e_1,\ldots,e_d$ be the standard orthonormal basis of $\mathbb C^d$. For each multi-index $\alpha=(\alpha_1,\ldots,\alpha_d)\in\mathbb N^d$ with $\sum_j\alpha_j=k$, let $\Omega_\alpha$ be the set of words of length $k$ in which $j$ occurs $\alpha_j$ times, and set $v_\alpha=|\Omega_\alpha|^{-1/2}\sum_{(i_1,\ldots,i_k)\in\Omega_\alpha}e_{i_1}\otimes\cdots\otimes e_{i_k}$. The sets $\Omega_\alpha$ partition the elementary tensor basis, so the $v_\alpha$ are orthonormal. A vector fixed by all permutations has equal coefficients on each permutation orbit $\Omega_\alpha$; hence these vectors span exactly the symmetric subspace in [F2]. [given, F2, L1, algebra]

1.2 Put $t=(2k+1)^{-1}$ and $D=\operatorname{diag}(e^{it},e^{it^2},\ldots,e^{it^d})\in U(d)$. Each $v_\alpha$ is an eigenvector of $D^{\otimes k}$ with eigenvalue $\lambda_\alpha=e^{i\sum_j\alpha_jt^j}$. These eigenvalues are distinct: for $\alpha\ne\beta$, let $\ell$ be the first index with $c_\ell:=\alpha_\ell-\beta_\ell\ne0$. Then $|c_\ell|t^\ell\ge t^\ell$, while $|\sum_{j>\ell}c_jt^j|\le k t^{\ell+1}/(1-t)=t^\ell/2$; thus the phase difference is nonzero. Also $|\sum_jc_jt^j|\le kt/(1-t)=1/2<2\pi$, so the phase difference is not a nonzero multiple of $2\pi$. [given, F1, algebra]

2.1 Let $W\ne\{0\}$ be a subspace invariant under every $U^{\otimes k}$, and choose $0\ne w=\sum_\alpha c_\alpha v_\alpha\in W$. At least one coefficient $c_\alpha$ is nonzero. Because the eigenvalues in step 1.2 are distinct, the interpolation polynomial $p_\alpha(z)=\prod_{\beta\ne\alpha}(z-\lambda_\beta)/(\lambda_\alpha-\lambda_\beta)$ satisfies $p_\alpha(D^{\otimes k})w=c_\alpha v_\alpha$. Invariance under $D^{\otimes k}$ and linearity imply $v_\alpha\in W$. If $d=1$, step 1.1 has only the single multi-index $(k)$, so this already gives $W=\operatorname{Sym}^k(\mathbb C)$. Hence assume $d\ge2$ in the transfer argument below. [step 1.1, step 1.2, choose, algebra]

3.1 Fix indices $i\ne j$ with $\alpha_i>0$, let $q>0$ be sufficiently small, and set $c=(1+q^2)^{-1/2}$ and $s=q(1+q^2)^{-1/2}$, so $c^2+s^2=1$. The unitary rotation sending $e_i\mapsto ce_i+se_j$, $e_j\mapsto-se_i+ce_j$ and fixing all other $e_\ell$ sends $v_\alpha$ into the symmetric subspace by [L1]. The coefficient of $v_\beta$ for $\beta=\alpha-e_i+e_j$ is the positive factor $\sqrt{|\Omega_\beta|/|\Omega_\alpha|}$ times $$s c^{\alpha_i+\alpha_j-1}P(q^2),\qquad P(z)=\sum_{r=0}^{\min(\alpha_i-1,\alpha_j)}(-1)^r\binom{\alpha_i-1}{r}\binom{\alpha_j+1}{r+1}z^r.$$ This follows by counting which $r$ output $i$-positions came from $j$ and which $r+1$ output $j$-positions came from $i$ in the tensor expansion. Since $P(0)=\alpha_j+1>0$ and $P$ is a polynomial, choose $q>0$ small enough that $P(q^2)\ne0$. The rotated vector lies in $W$ by invariance; applying the interpolation projection from step 2.1 for weight $\beta$ isolates a nonzero multiple of $v_\beta$, so $v_\beta\in W$. [step 2.1, F1, L1, choose, algebra]

4.1 Repeating step 3.1 transfers one unit from any coordinate with $\alpha_i>\beta_i$ to one with $\alpha_j<\beta_j$. Any two nonnegative multi-indices of total $k$ are connected by finitely many such transfers. Thus $W$ contains every basis vector $v_\beta$ from step 1.1 and equals $\operatorname{Sym}^k(\mathbb C^d)$. Every nonzero invariant subspace is therefore the whole representation, proving irreducibility. [step 1.1, step 3.1, algebra] ∎

