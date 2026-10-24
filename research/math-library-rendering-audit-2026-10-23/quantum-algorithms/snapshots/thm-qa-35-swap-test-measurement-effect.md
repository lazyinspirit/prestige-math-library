---
id: thm-qa-35-swap-test-measurement-effect
kind: theorem
title: "Swap-test measurement and pure-state outcome law"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 4
deps: ["def-qa-35-swap-test-effect", "def-qc-tensor-map", "thm-qc-tensor-map-composition-and-adjoint", "thm-qc-projective-measurement-outcome-law", "thm-qc-computational-basis-orthonormal", "def-qc-dirac-notation-conversion", "def-trace-of-an-endomorphism", "thm-bessel-inequality-and-finite-parseval-identity", "lem-qc-tensor-product-basis-and-dimension", "def-qc-density-operator", "def-qc-pure-state-and-ray", "thm-qc-ray-projector-well-defined-and-bijective"]
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; all distributions, sums, bases, and selection sets are finite."
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Harry Buhrman, Richard Cleve, John Watrous, Ronald de Wolf, Quantum Fingerprinting"
      url: https://arxiv.org/pdf/quant-ph/0102001
      locator: "Complete 8-page paper, especially §2, PDF pp.2–4, code fingerprints and swap-test analysis."
    - title: "John Watrous, The Theory of Quantum Information"
      url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf
      locator: "§1.1.3 (operator decompositions and norms), §2.1.2 (density operators), §2.3.1 (measurements), and §3.1.1, Theorem 3.4 (binary state discrimination)."
---

## Statement

The operators $P_\pm=(I\pm F)/2$ are complementary orthogonal projections, and on unit vectors $\psi,\phi$ the antisymmetric outcome on $|\psi\otimes\phi\rangle$ has probability $(1-|\langle\psi|\phi\rangle|^2)/2$.

## Facts & Assumptions

**Given:** A finite-dimensional complex inner-product space $H$, unit vectors $\psi,\phi\in H$, and the swap $F$ and operators $P_\pm$ of [[def-qa-35-swap-test-effect]].

[F1] [[def-qa-35-swap-test-effect]]: $F(u\otimes v)=v\otimes u$, $P_+=(I+F)/2$, and $P_-=(I-F)/2$.

[F2] [[lem-qc-tensor-product-basis-and-dimension]]: The elementary tensors of the factor bases, ordered lexicographically, form an orthonormal basis of the tensor register.

[F3] [[def-qc-dirac-notation-conversion]]: $|x\rangle\langle y|$ acts on $z$ by $z\mapsto\langle z,y\rangle_{\mathrm{root}}x$.

[F4] [[def-qc-pure-state-and-ray]]: If $u$ is a unit representative, its associated operator is $P_u=|u\rangle\langle u|$.

[F5] [[thm-qc-ray-projector-well-defined-and-bijective]]: Each $P_u$ is non-negative and has trace one.

[F6] [[thm-qc-projective-measurement-outcome-law]]: For a density operator $\rho$ and projective measurement $(P_a)$, $p_\rho(a)=\operatorname{tr}(\rho P_a)$ lies in $[0,1]$ and the probabilities sum to one.

[F7] [[def-trace-of-an-endomorphism]]: The trace is defined by the matrix trace in any ordered basis and is basis-independent.

[F8] [[thm-bessel-inequality-and-finite-parseval-identity]]: If $(e_i)$ is an orthonormal basis, then $v=\sum_i\langle v,e_i\rangle e_i$.

## Proof

**Proof technique:** direct.

1.1 On the orthonormal product basis in [F2], $F(e_i\otimes e_j)=e_j\otimes e_i$. This basis permutation is unitary and is its own inverse, so $F^*=F$ and $F^2=I$. Direct expansion now gives $P_\pm^*=P_\pm$, $P_\pm^2=P_\pm$, $P_+P_-=0$, and $P_++P_-=I$. Thus they form a complementary projective two-outcome measurement. [given, F1, F2, algebra]

2.1 Put $v=\psi\otimes\phi$, which is a unit vector by the tensor inner product. By [F3], $|v\rangle\langle v|$ sends $z$ to $\langle z,v\rangle v$, and [F4]–[F5] make this a density operator. In an orthonormal basis $(e_k)$, the diagonal coefficient of $|v\rangle\langle v|P_-$ at $e_k$ is $\langle P_-e_k,v\rangle\langle v,e_k\rangle$. If $[P_-]_{ik}$ and $v_i$ are the matrix and vector coordinates, this coefficient is $\sum_i[P_-]_{ik}\overline{v_i}v_k$; summing over $k$ by [F7] gives $\sum_{i,k}[P_-]_{ik}v_k\overline{v_i}=\langle P_-v,v\rangle$. This is the coordinate expansion asserted by [F8], and yields $\operatorname{tr}(|v\rangle\langle v|P_-)=\sum_k\langle P_-e_k,v\rangle\langle v,e_k\rangle=\langle P_-v,v\rangle,$ so [F6] makes this the outcome probability. Also $\langle Fv,v\rangle=\langle\phi,\psi\rangle\langle\psi,\phi\rangle=|\langle\psi,\phi\rangle|^2$ by the tensor inner product and [F1]. Hence $\Pr[-]=\langle P_-v,v\rangle=\frac{1-|\langle\psi,\phi\rangle|^2}{2}.$ The complementary outcome has the remaining probability. [step 1.1, F1, F3, F4, F5, F6, F7, F8, algebra] ∎
