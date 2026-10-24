---
id: cor-kostant-cohomology-in-degrees-zero-and-top
kind: corollary
title: "Kostant cohomology in degrees zero and top"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 5
deps: [thm-kostant-nilradical-cohomology-theorem, prop-h-zero-is-the-invariant-subspace, prop-weyl-length-equals-positive-root-inversion-number, def-length-and-longest-element-of-a-finite-weyl-group, def-integral-dominant-and-strictly-dominant-weights, def-weyl-vector-rho-for-a-chosen-positive-system, def-weight-and-weight-space-of-a-lie-algebra-representation, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Faisal Al-Faisal, On the Representation Theory of Semisimple Lie Groups (University of Waterloo MMath thesis, 2010), §3.4 printed pp.73–77"
      url: "https://www.collectionscanada.gc.ca/obj/thesescanada/vol2/OWTU/TC-OWTU-5421.pdf"
      locator: "§3.4, printed pp.73 and 76–77, Remark 3.4.2 (H^0 is the highest-weight space) and Remark 3.4.6(i)"
    - title: "Peter Woit, Lie Algebra Cohomology and the Borel–Weil–Bott Theorem (Math G4344, Spring 2012), printed pp.1–7"
      url: "https://www.math.columbia.edu/~woit/LieGroups-2012/borelweilbott.pdf"
      locator: "printed p.4, Theorem 1, specialized locally to the endpoint lengths"
---

## Statement

Assume the Axiom of Choice. In the setting of [[thm-kostant-nilradical-cohomology-theorem]]:
$$H^0(\mathfrak n^+,V)=\mathbb C_\lambda$$
is the highest-weight line, i.e. the $\mathfrak n^+$-invariants; $H^{|\Phi^+|}(\mathfrak n^+,V)=\mathbb C_{w_0\cdot\lambda}$ for the longest element $w_0\in W$ ([[prop-weyl-length-equals-positive-root-inversion-number]]); and $H^k(\mathfrak n^+,V)=0$ for $k>|\Phi^+|$. When $\Phi^+=\varnothing$, $\mathfrak n^+=0$ and $H^0(\mathfrak n^+,k)=k$ with all higher cohomology zero.

## Facts & Assumptions

**Given:** The setting of [[thm-kostant-nilradical-cohomology-theorem]].

[L1] $H^k(\mathfrak n^+,V)\cong\bigoplus_{\ell(w)=k}\mathbb C_{w\cdot\lambda}$ as $\mathfrak h$-modules for every $k\ge0$ ([[thm-kostant-nilradical-cohomology-theorem]]).

[L2] The length function satisfies $\ell(w)=|\Phi_w|\le|\Phi^+|$, there is a unique longest element $w_0$, characterized by $w_0(\Phi^+)=\Phi^-$ and $\ell(w_0)=|\Phi^+|$, and $\ell(1)=0$; the unit is the only element of length $0$ ([[prop-weyl-length-equals-positive-root-inversion-number]], [[def-length-and-longest-element-of-a-finite-weyl-group]]).

[L3] The invariants in $V$ are the vectors killed by $\mathfrak n^+$; for the irreducible highest-weight module $V=L(\lambda)$ the invariants are the highest-weight line $V_\lambda=\mathbb C v_\lambda$ ([[prop-h-zero-is-the-invariant-subspace]], [[def-weight-and-weight-space-of-a-lie-algebra-representation]], [[def-integral-dominant-and-strictly-dominant-weights]], [[def-weyl-vector-rho-for-a-chosen-positive-system]]).

## Proof

**Proof technique:** specialize the length grading in Kostant's theorem at the two endpoints.

1.1 Degree zero: by [L2] the only element of length $0$ is $1$, and $1\cdot\lambda=1(\lambda+\rho)-\rho=\lambda$; by [L1] this gives $H^0(\mathfrak n^+,V)=\mathbb C_\lambda$, the highest-weight line, which is independently the space of $\mathfrak n^+$-invariants by [L3]. [L1, L2, L3]

1.2 Top degree: by [L2] the only element of length $|\Phi^+|$ is $w_0$, so [L1] gives $H^{|\Phi^+|}(\mathfrak n^+,V)=\mathbb C_{w_0\cdot\lambda}$. [L1, L2]

2.1 Degrees above the top: by [L2] no $w$ has $\ell(w)>|\Phi^+|$, so the direct sum in [L1] is empty and $H^k(\mathfrak n^+,V)=0$ for $k>|\Phi^+|$. If $\Phi^+=\varnothing$ then $\mathfrak n^+=0$, $W=\{1\}$, $|\Phi^+|=0$ and $w_0=1$, so the theorem reduces to $H^0(0,V)=V$ for the trivial coefficient module $k$ and vanishing in all positive degrees; this is the rank-zero case of the same formulas. [L1, L2, L3] ∎ 