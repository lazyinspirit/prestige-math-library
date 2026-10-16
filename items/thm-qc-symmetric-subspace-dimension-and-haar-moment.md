---
id: thm-qc-symmetric-subspace-dimension-and-haar-moment
kind: theorem
title: "Symmetric Subspace Dimension And Haar Moment"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 5
deps: ["def-qc-symmetric-subspace-projector", "lem-qc-symmetric-power-irreducible", "thm-qc-unitary-group-compact", "cor-normalized-haar-probability-on-a-compact-group", "def-axiom-of-choice", "lem-qc-symmetric-subspace-average-is-projector", "def-self-adjoint-and-normal-endomorphism", "thm-complex-spectral-theorem-for-normal-endomorphisms", "def-qc-dirac-notation-conversion", "def-qc-tensor-register-and-permutation", "def-qc-tensor-map", "thm-qc-tensor-map-composition-and-adjoint", "def-trace-of-an-endomorphism", "thm-qc-ray-projector-well-defined-and-bijective"]
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
      locator: "§7.1.1–7.2, symmetric-subspace dimension and Haar/spherical moment route."
---

## Statement

Assume the axiom-of-choice branch used by [[cor-normalized-haar-probability-on-a-compact-group]]. For integers $d\ge1$ and $k\ge0$, put $N_k=\binom{k+d-1}{d-1}$. Then $\dim\operatorname{Sym}^k(\mathbb C^d)=N_k$, and if $\mu$ is the probability measure on the unit sphere obtained by pushing normalized Haar probability on $U(d)$ through $U\mapsto Ue_1$, then
$$\int |u\rangle\langle u|^{\otimes k}\,d\mu(u)=\frac{1}{N_k}\Pi_{\mathrm{sym},k}.$$
For $k=0$, the tensor power and projector are the identity on the one-dimensional tensor unit.

## Facts & Assumptions

**Given:** $d\ge1$, $k\ge0$, the natural tensor action of $U(d)$, and the stated normalized Haar probability.

[F1] The symmetric subspace is the range of the average of the $k!$ tensor-factor permutations ([[def-qc-symmetric-subspace-projector]], [[lem-qc-symmetric-subspace-average-is-projector]]). The current QC02 permutation definition and the local projector lemma specify the action used here; both are draft carriers.

[F2] The representation of $U(d)$ on this subspace is irreducible ([[lem-qc-symmetric-power-irreducible]]).

[F3] The unitary group is compact and normalized Haar probability exists on it under the declared choice axiom ([[thm-qc-unitary-group-compact]], [[cor-normalized-haar-probability-on-a-compact-group]], [[def-axiom-of-choice]]). The owner-published root bodies exist; their hypotheses and the stated conditional branch were checked.

[F4] A self-adjoint endomorphism is normal and thus has an orthonormal eigenbasis by the finite-dimensional complex spectral theorem ([[def-self-adjoint-and-normal-endomorphism]], [[thm-complex-spectral-theorem-for-normal-endomorphisms]]).

[F5] For a unit vector $u$, $P_u=|u\rangle\langle u|$ is a rank-one orthogonal projection of trace one; tensor maps give $P_u^{\otimes k}=|u^{\otimes k}\rangle\langle u^{\otimes k}|$, and $u^{\otimes k}$ is a unit vector by the product inner product. Every tensor-factor permutation fixes $u^{\otimes k}$, so this tensor is symmetric ([[thm-qc-ray-projector-well-defined-and-bijective]], [[def-qc-dirac-notation-conversion]], [[def-qc-tensor-register-and-permutation]], [[def-qc-tensor-map]], [[thm-qc-tensor-map-composition-and-adjoint]]).

## Proof

1.1 For each weak composition $\alpha_1+\cdots+\alpha_d=k$ with $\alpha_j\ge0$, sum and normalize the elementary tensors in which index $j$ occurs $\alpha_j$ times. Different compositions have disjoint orthonormal tensor supports, and permutation invariance forces coefficients to be constant on each such orbit, so these vectors form a basis of $\operatorname{Sym}^k(\mathbb C^d)$ by [F1]. Weak compositions correspond bijectively to placements of $d-1$ separators among $k+d-1$ positions (the numbers of stars before, between, and after separators recover the parts). There are $\binom{k+d-1}{d-1}=N_k$ such placements. For $k=0$ this gives the single empty tensor. [given, F1, algebra]

1.2 The pushforward measure $\mu$ is invariant under every $V\in U(d)$: left invariance of Haar gives $VU$ the same distribution as $U$, and $(VU)e_1=V(Ue_1)$. Define the finite-dimensional operator integral $M=\int |u\rangle\langle u|^{\otimes k}\,d\mu(u)$. By [F5], every integrand is a rank-one projection onto a symmetric tensor and has trace one, so $M=\Pi_{\rm sym}M\Pi_{\rm sym}$ by [F1]. Invariance gives $V^{\otimes k}M(V^{\otimes k})^*=M$. [given, F1, F3, F5, algebra]

2.1 The coordinate integral in step 1.2 is self-adjoint and nonnegative: each integrand is a rank-one orthogonal projection by [F5], so $M^*=M$ and $\langle Mv,v\rangle=\int|\langle v,u^{\otimes k}\rangle|^2\,d\mu(u)\ge0$. Since $M=\Pi_{\rm sym}M\Pi_{\rm sym}$, its restriction to the symmetric subspace is self-adjoint and nonnegative. By the spectral theorem [F4], that restriction has an orthogonal decomposition into eigenspaces. Each eigenspace is invariant under $U(d)$ because $M$ commutes with the representation by step 1.2; irreducibility [F2] therefore permits only one eigenspace, so $M=c\Pi_{\rm sym}$ for some $c\ge0$. Taking traces gives $1=\operatorname{tr}M=c\operatorname{tr}\Pi_{\rm sym}=cN_k$, since every integrand has trace one by [F5] (also for $k=0$). Thus $c=1/N_k$, proving the moment identity. [given, F1, F2, F4, F5, step 1.2, algebra] ∎
