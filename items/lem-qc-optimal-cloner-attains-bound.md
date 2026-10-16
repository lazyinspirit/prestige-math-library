---
id: lem-qc-optimal-cloner-attains-bound
kind: lemma
title: "Optimal Cloner Attains Bound"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 6
deps: ["def-qc-symmetric-subspace-projector", "thm-qc-symmetric-subspace-dimension-and-haar-moment", "thm-qc-kraus-map-completely-positive", "def-qc-quantum-channel", "def-qc-density-operator", "def-qc-dirac-notation-conversion", "def-qc-partial-trace", "thm-qc-partial-trace-characterization-and-basis-independence", "def-qc-tensor-register-and-permutation", "def-qc-tensor-map", "def-trace-of-an-endomorphism", "thm-trace-of-ab-equals-trace-of-ba", "def-axiom-of-choice", "lem-qc-symmetric-subspace-average-is-projector", "thm-non-negative-operator-characterisations", "thm-non-negative-square-root-exists-and-is-unique", "cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases"]
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
      locator: "§7.2, cloning construction and optimality, Theorem 7.28."
---

## Statement

Assume the choice branch in [[thm-qc-symmetric-subspace-dimension-and-haar-moment]]. Let $d\ge1$ and $1\le n\le m$. Write $N_r=\binom{r+d-1}{d-1}$ and let $\Pi_{\rm sym,r}$ project onto $\operatorname{Sym}^r(\mathbb C^d)$. For any fixed output density operator $\omega$ on $(\mathbb C^d)^{\otimes m}$, the map
$$\Phi(X)=\frac{N_n}{N_m}\Pi_{\rm sym,m}(X\otimes I^{\otimes(m-n)})\Pi_{\rm sym,m}+\operatorname{tr}((I-\Pi_{\rm sym,n})X)\,\omega$$
is a channel and satisfies $\operatorname{tr}(\Phi(|u\rangle\langle u|^{\otimes n})|u\rangle\langle u|^{\otimes m})=N_n/N_m$ for every unit $u\in\mathbb C^d$.

## Facts & Assumptions

**Given:** $d\ge1$, $1\le n\le m$, projectors $\Pi_{\rm sym,r}$, a fixed output density $\omega$, and the choice-dependent Haar-moment theorem.

[L1] $\Pi_{\rm sym,r}$ is the orthogonal projector on the permutation-invariant subspace ([[def-qc-symmetric-subspace-projector]], [[lem-qc-symmetric-subspace-average-is-projector]]). The QC02 permutation definition and the local projector proof are draft carriers.

[L2] $\dim\operatorname{Sym}^r=N_r$ and $\int |u\rangle\langle u|^{\otimes r}d\mu=\Pi_{\rm sym,r}/N_r$ ([[thm-qc-symmetric-subspace-dimension-and-haar-moment]], [[def-axiom-of-choice]]). The Haar supplier is a current draft; its choice assumption is explicit.

[L3] Finite Kraus sums are completely positive ([[thm-qc-kraus-map-completely-positive]]), and the partial trace satisfies $\operatorname{tr}(A(X\otimes I))=\operatorname{tr}(X\operatorname{Tr}_{m-n}A)$ ([[def-qc-partial-trace]], [[thm-qc-partial-trace-characterization-and-basis-independence]], [[thm-trace-of-ab-equals-trace-of-ba]]). The QC02 carriers are present as drafts; the trace identity follows from the stated trace-pairing characterization.

[F1] A quantum channel is completely positive and trace-preserving on the full operator space ([[def-qc-quantum-channel]]).

[F2] A density operator has trace one ([[def-qc-density-operator]]).

[F3] A nonnegative operator has an orthonormal eigenbasis with nonnegative eigenvalues ([[thm-non-negative-operator-characterisations]]).

[F4] Finite-dimensional complex inner-product spaces have orthonormal bases ([[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]]).

[F5] A nonnegative operator has a unique nonnegative square root ([[thm-non-negative-square-root-exists-and-is-unique]]).

[F6] Dirac outer products act by $z\mapsto\langle z,y\rangle x$, and tensor maps are the factorwise linear extensions on ordered tensor registers ([[def-qc-dirac-notation-conversion]], [[def-qc-tensor-map]], [[def-qc-tensor-register-and-permutation]]).

## Proof


1.1 Put $E=I-\Pi_{\rm sym,n}\ge0$ by [L1], so $E^{1/2}$ exists by [F5]. The first summand of $\Phi$ is completely positive: by [F4], choose an orthonormal product basis $(g_j)$ of the added registers and set $A_j=\sqrt{N_n/N_m}\,\Pi_{\rm sym,m}(I\otimes|g_j\rangle)$. Then $\sum_jA_jXA_j^*=\frac{N_n}{N_m}\Pi_{\rm sym,m}(X\otimes I^{\otimes(m-n)})\Pi_{\rm sym,m}$. When $m=n$, the added tensor unit has its single basis vector and this map is the identity before compression. By [F3], write $\omega=\sum_\ell s_\ell|f_\ell\rangle\langle f_\ell|$ in an orthonormal eigenbasis and choose an input orthonormal basis $(e_j)$ by [F4]. The second summand has Kraus operators $K_{\ell j}=\sqrt{s_\ell}|f_\ell\rangle\langle e_j|E^{1/2}$, using [F6] and the outer-product convention, since $\sum_{\ell,j}K_{\ell j}XK_{\ell j}^*=\operatorname{tr}(EX)\omega$. Thus both summands and their sum are completely positive by the finite Kraus theorem [L3]. [given, L1, L3, F3, F4, F5, F6, algebra, choose]

2.1 The Haar moment [L2], followed by the coordinate partial trace over the last $m-n$ factors, gives $\operatorname{Tr}_{m-n}(\Pi_{\rm sym,m})=(N_m/N_n)\Pi_{\rm sym,n}$, because each product-basis partial trace sends $|u\rangle\langle u|^{\otimes m}$ to $|u\rangle\langle u|^{\otimes n}$. Finite-dimensionality allows the partial trace to pass through the coordinatewise integral. Therefore $$\operatorname{tr}\!\left(\frac{N_n}{N_m}\Pi_{\rm sym,m}(X\otimes I)\Pi_{\rm sym,m}\right)=\operatorname{tr}(X\Pi_{\rm sym,n}),$$ where cyclicity, $\Pi_{\rm sym,m}^2=\Pi_{\rm sym,m}$, and [L3] were used. The second summand has trace $\operatorname{tr}(EX)\operatorname{tr}(\omega)=\operatorname{tr}(EX)$ by [F2]. Their sum is $\operatorname{tr}X$, so [F1] and step 1.1 make $\Phi$ a channel. [given, L1, L2, L3, F1, F2, F6, step 1.1, algebra]

3.1 For unit $u$, $|u\rangle^{\otimes n}$ lies in the symmetric subspace, so the second summand vanishes. Also $|u\rangle^{\otimes m}$ is fixed by $\Pi_{\rm sym,m}$. Its expectation in the first summand is therefore $(N_n/N_m)\langle u^{\otimes m}|(|u\rangle\langle u|^{\otimes n}\otimes I)|u^{\otimes m}\rangle=N_n/N_m$. This value is independent of $u$, proving the claim. [given, L1, step 2.1, algebra] ∎

