---
id: lem-qc-optimal-cloning-worst-case-upper-bound
kind: lemma
title: "Optimal Cloning Worst Case Upper Bound"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 7
deps: ["def-qc-symmetric-subspace-projector", "thm-qc-symmetric-subspace-dimension-and-haar-moment", "def-qc-quantum-channel", "def-qc-fidelity", "def-axiom-of-choice", "lem-qc-symmetric-subspace-average-is-projector", "thm-singular-value-decomposition", "thm-non-negative-square-root-exists-and-is-unique", "thm-trace-of-ab-equals-trace-of-ba", "thm-qc-kraus-choi-equivalence", "thm-qc-trace-preserving-kraus-normalization", "thm-cauchy-schwarz-in-an-inner-product-space", "def-qc-dirac-notation-conversion"]
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
      locator: "§7.2, proof of Theorem 7.28, Haar-averaged upper bound."
---

## Statement

Assume the choice branch in [[thm-qc-symmetric-subspace-dimension-and-haar-moment]]. Let $d\ge1$ and $1\le n\le m$. Every channel $\Phi:\mathcal L((\mathbb C^d)^{\otimes n})\to\mathcal L((\mathbb C^d)^{\otimes m})$ has
$$\inf_{\|u\|=1}F\!\left(\Phi(|u\rangle\langle u|^{\otimes n}),|u\rangle\langle u|^{\otimes m}\right)^2\le\frac{N_n}{N_m},\qquad N_r=\binom{r+d-1}{d-1}.$$

## Facts & Assumptions

**Given:** $d\ge1$, $1\le n\le m$, a channel $\Phi$, and the normalized unitary-invariant measure in the stated choice branch.

[L1] The Haar moment is $\int |u\rangle\langle u|^{\otimes r}d\mu=\Pi_{\rm sym,r}/N_r$ ([[thm-qc-symmetric-subspace-dimension-and-haar-moment]], [[def-axiom-of-choice]]).

[L2] For a state $\eta$ and a pure projector $P_u$, the squared root fidelity is $F(\eta,P_u)^2=\operatorname{tr}(\eta P_u)$; this follows from the definition and the one-nonzero-singular-value formula ([[def-qc-fidelity]], [[thm-singular-value-decomposition]]).

[L3] A channel is completely positive and trace-preserving on the full operator space; it has a finite Kraus representation $\Phi(X)=\sum_a A_aXA_a^*$ with $\sum_aA_a^*A_a=I$ ([[def-qc-quantum-channel]], [[thm-qc-kraus-choi-equivalence]], [[thm-qc-trace-preserving-kraus-normalization]]).

[F1] For $r\in\{n,m\}$, $\Pi_{\rm sym,r}$ is the orthogonal projector onto the symmetric subspace; it and $I-\Pi_{\rm sym,r}$ are nonnegative ([[def-qc-symmetric-subspace-projector]], [[lem-qc-symmetric-subspace-average-is-projector]]).

[F2] If $A,B$ are nonnegative, then $\operatorname{tr}(AB)=\operatorname{tr}(B^{1/2}AB^{1/2})\ge0$ by cyclicity and positivity ([[thm-trace-of-ab-equals-trace-of-ba]], [[thm-non-negative-square-root-exists-and-is-unique]]).

[F3] Cauchy–Schwarz gives $|\langle x,y\rangle|^2\le\|x\|^2\|y\|^2$ ([[thm-cauchy-schwarz-in-an-inner-product-space]]). Rank-one operators act by $|x\rangle\langle y|z=\langle z,y\rangle x$ ([[def-qc-dirac-notation-conversion]]).

## Proof


1.1 Choose a finite Kraus family $(A_a)$ from [L3], and write $\Pi_n=\Pi_{\rm sym,n}$ and $\Pi_m=\Pi_{\rm sym,m}$. For each unit $u$, put $v=u^{\otimes n}$, $w=u^{\otimes m}$, and $f(u)=\operatorname{tr}(\Phi(|v\rangle\langle v|)|w\rangle\langle w|)$. By [L2], this is the squared root fidelity in the Statement. Since $v$ is a unit symmetric tensor, $\Pi_n v=v$ by [F1]. The Kraus formula, the rank-one convention, and Cauchy–Schwarz [F3] give $f(u)=\sum_a|\langle A_av,w\rangle|^2=\sum_a|\langle v,\Pi_n A_a^*w\rangle|^2\le\sum_a\|\Pi_n A_a^*w\|^2=\langle Cw,w\rangle$, where $C=\sum_aA_a\Pi_n A_a^*$ is self-adjoint and nonnegative: each quadratic form is $\|\Pi_n A_a^*w\|^2$. [given, L2, L3, F1, F3, algebra, choose]

2.1 Integrating this pointwise bound and applying the $m$-th Haar moment [L1] yields $\int f(u)d\mu(u)\le\operatorname{tr}(C\Pi_m)/N_m$. Since $C$ and $I-\Pi_m$ are nonnegative by step 1.1 and [F1], [F2] gives $\operatorname{tr}(C(I-\Pi_m))\ge0$, hence $\operatorname{tr}(C\Pi_m)\le\operatorname{tr}C$. Trace cyclicity [F2], normalization [L3], and [L1] give $\operatorname{tr}C=\sum_a\operatorname{tr}(\Pi_nA_a^*A_a)=\operatorname{tr}\Pi_n=N_n$. Therefore $\int f(u)d\mu(u)\le N_n/N_m$. The function $f$ is continuous in the finite coordinates of $u$, hence measurable; because $\mu$ is a probability measure, its infimum is no larger than its average. Thus $\inf_{\|u\|=1}f(u)\le N_n/N_m$, including $d=1$ and $n=m$. [given, L1, L3, F1, F2, step 1.1, algebra] ∎

