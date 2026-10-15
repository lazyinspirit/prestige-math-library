---
id: lem-qft-finite-mode-occupation-basis
kind: lemma
title: "Finite fermion-mode occupation basis"
status: published
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 2
deps:
  - def-qft-fock-and-test-spaces
  - lem-qft-fock-ccr-car
  - def-countable-choice
  - lem-nrqm-composites-hilbert-tensor-construction
  - lem-nrqm-composites-permutation-sector-projections
dependency_roles:
  def-qft-fock-and-test-spaces: mathematical-premise
  lem-qft-fock-ccr-car: mathematical-premise
  def-countable-choice: mathematical-premise
  lem-nrqm-composites-hilbert-tensor-construction: mathematical-premise
  lem-nrqm-composites-permutation-sector-projections: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "John B. Kogut, An Introduction to Lattice Gauge Theory and Spin Systems, Reviews of Modern Physics 51 (1979)"
      url: "https://chimera.roma1.infn.it/ENZO/FC/ESTRATTI/DUALITY/kogut1979.pdf"
      locator: "Complete 55-page review; relevant Hamiltonian and Gauss-law treatment in §VI.C, printed pp. 694–696. The Rome1 PDF is byte-identical to the previously retrieved full text."
    - title: "Patrick Emonts and Erez Zohar, Gauss Law, Minimal Coupling and Fermionic PEPS for Lattice Gauge Theories, SciPost Physics Lecture Notes 12 (2020)"
      url: "https://arxiv.org/html/1807.01294"
      locator: "Full-text arXiv HTML rendition; §§2.1–2.4, printed pp. 3–8. The corresponding complete 32-page PDF was also retrieved and read."
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
---

## Statement

Assume Countable Choice. Let $\mathcal K$ be a finite-dimensional complex Hilbert space with a finite ordered orthonormal basis $(e_j)_{j\in J}$, and use the antisymmetric Fock construction and second-variable-linear convention of [[def-qft-fock-and-test-spaces]]. Assume its fermionic operators satisfy the CAR of [[lem-qft-fock-ccr-car]]. For $S=\{j_1<\cdots<j_k\}\subseteq J$, set
$$\xi_S=c^\dagger(e_{j_1})\cdots c^\dagger(e_{j_k})\Omega,\qquad \xi_\varnothing=\Omega.$$
Then $(\xi_S)_{S\subseteq J}$ is an orthonormal basis of $\mathcal F_a(\mathcal K)$. For each $j\in J$, the bounded number operator $N_j=c^\dagger(e_j)c(e_j)$ is an orthogonal projection and
$$N_j\xi_S=\mathbf1_{j\in S}\xi_S.$$
Consequently, for any partition $J=\bigsqcup_{x\in V}J_x$ into finite site-mode sets, $n_x=\sum_{j\in J_x}N_j$ is bounded self-adjoint and acts on $\xi_S$ by the occupation count $N_x(S)=|S\cap J_x|\in\{0,\ldots,|J_x|\}$.



## Facts & Assumptions

**Given:** Countable Choice, the finite-dimensional Hilbert space and ordered basis, the Fock construction, and the CAR operators above.

[A1] Countable Choice is the principle that every countable family of nonempty sets has a choice function. [[def-countable-choice]]

[F1] [[def-qft-fock-and-test-spaces]]: the antisymmetric Fock space is the square-summable direct sum of the ranges of $P_{a,k}$ and has vacuum $\Omega$.

[F2] [[def-qft-fock-and-test-spaces]]: creation on sector $k$ is $c_k^\dagger(h)\Psi_k=\sqrt{k+1}P_{a,k+1}(h\otimes\Psi_k)$.

[F3] [[lem-qft-fock-ccr-car]]: under Countable Choice and separability, the fermionic creation and annihilation operators are bounded on the whole Fock space and satisfy the CAR there.

[F4] [[lem-nrqm-composites-hilbert-tensor-construction]] and [[lem-nrqm-composites-permutation-sector-projections]]: products of complete orthonormal bases form a complete orthonormal basis in the completed tensor product, and $P_{a,k}$ is the orthogonal antisymmetrizing projection. The tensor supplier is stated with first-variable-linear pairings. On the tensor powers with the second-variable-linear convention of [F1], apply it to the conjugate first-variable-linear pairings $(u,v)_1:=\langle v,u\rangle_2$; conjugation preserves norms, orthogonality and completeness, so the product-basis conclusion is unchanged.

## Proof

**Given:** [A1], [F1]–[F4], and the finite ordered orthonormal basis of $\mathcal K$.

1.1 For $k=0$, $\xi_\varnothing=\Omega$ is the unit vacuum. For $k\ge1$, repeated application of the creation formula in [F2] gives $$\xi_S=\sqrt{k!}\,P_{a,k}(e_{j_1}\otimes\cdots\otimes e_{j_k}).$$ The product-basis theorem in [F4], under [A1], makes elementary tensors of basis vectors a complete orthonormal basis of $\mathcal K^{\widehat\otimes k}$. If an index repeats, antisymmetrization is zero by pairing permutations that differ by swapping the equal factors. If all indices are distinct, their antisymmetrization is, up to the permutation sign, a scalar multiple of the vector displayed for the uniquely ordered subset $S$. [A1, F1, F2, F4, given, algebra]

2.1 For $k\ge1$ and distinct increasing indices, $\|P_{a,k}(e_{j_1}\otimes\cdots\otimes e_{j_k})\|^2=\langle e_{j_1}\otimes\cdots\otimes e_{j_k},P_{a,k}(e_{j_1}\otimes\cdots\otimes e_{j_k})\rangle_2=1/k!$, since only the identity permutation has nonzero inner product with that ordered elementary tensor. Distinct subsets have orthogonal permutation orbits in the tensor basis, so $\langle\xi_S,\xi_T\rangle_2=\mathbf1_{S=T}$. The vacuum case has norm one by step 1.1. [A1, F4, step 1.1, algebra]

3.1 For each $k\ge1$, the bounded projection $P_{a,k}$ maps the complete basis of elementary tensors onto a dense subspace of its range. Step 1.1 shows this image is spanned by the $\xi_S$ with $|S|=k$; step 2.1 shows those vectors are orthonormal. Thus they form a basis of each antisymmetric sector. If $k>|J|$, every elementary basis tensor repeats an index and its projection vanishes, so that sector is zero. The direct-sum construction and completeness supplied by [A1], [F1] and [F3], together with the unit vacuum in step 1.1, now show that all $\xi_S$ form an orthonormal basis of $\mathcal F_a(\mathcal K)$. [A1, F1, F3, F4, step 1.1, step 2.1, algebra]

4.1 Write $c_j=c(e_j)$ and $c_j^\dagger=c^\dagger(e_j)$. By [F3] both operators are bounded, so $N_j=c_j^\dagger c_j$ is bounded. If $j\notin S$, anticommute $c_j$ through the creation factors in $\xi_S$ using the mixed CAR; it reaches $\Omega$ and annihilates it, so $N_j\xi_S=0$. If $j=j_\ell\in S$, anticommuting it past the first $\ell-1$ distinct creators gives $c_j\xi_S=(-1)^{\ell-1}\xi_{S\setminus\{j\}}$; creating $j$ again and reordering it into its original position gives the same sign, so $N_j\xi_S=\xi_S$. Thus by the ONB in step 3.1, $N_j$ is the diagonal multiplier $\mathbf1_{j\in S}$; its diagonal values are real and idempotent, so it is a self-adjoint orthogonal projection. [A1, F1, F3, step 3.1, algebra]

5.1 On every basis vector $\xi_S$, the finite sum $n_x=\sum_{j\in J_x}N_j$ acts by $|S\cap J_x|$. These are real numbers between zero and $|J_x|$, so the bounded diagonal operator $n_x$ is self-adjoint. If $z\in\mathbb C\setminus\{0,\ldots,|J_x|\}$, the diagonal operator with entries $(|S\cap J_x|-z)^{-1}$ is bounded by $\operatorname{dist}(z,\{0,\ldots,|J_x|\})^{-1}$ and is an inverse for $n_x-zI$; hence $z$ is outside its spectrum. [given, step 3.1, step 4.1, algebra] ∎
