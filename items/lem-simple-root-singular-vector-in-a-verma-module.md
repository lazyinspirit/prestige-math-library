---
id: lem-simple-root-singular-vector-in-a-verma-module
kind: lemma
title: "The simple-root singular vector in a Verma module"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-verma-module, thm-pbw-model-of-a-verma-module, def-root-reflections-and-the-weyl-group-action, def-weyl-vector-rho-for-a-chosen-positive-system, lem-finite-semisimple-cartan-root-and-string-structure]
proof_strategy: direct
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-04-maintenance-receipts.jsonl (lem-simple-root-singular-vector-in-a-verma-module). No independent judge or whole-closure certification.
    delegated_by: owner
sources:
  references:
    - title: "Pavel Etingof, Representations of Lie Groups, Exercise 8.15(i)"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
---

## Statement

Let $\alpha_i$ be simple and put $m=\langle\lambda+\rho,\alpha_i^\vee\rangle$. If $m\in\mathbb Z_{>0}$, then $f_i^m v_\lambda$ is a singular vector in $M(\lambda)$ of weight $s_i\mathbin\cdot\lambda$.

## Facts & Assumptions

**Given:** The Verma convention [[def-verma-module]] and its supplied triangular root-space decomposition, together with the reflection and Weyl-vector conventions [[def-root-reflections-and-the-weyl-group-action]] and [[def-weyl-vector-rho-for-a-chosen-positive-system]].

[L1] The PBW model identifies $M(\lambda)$ with $U(\mathfrak n^-)v_\lambda$ as a vector space ([[thm-pbw-model-of-a-verma-module]]).

[L2] For a maximal-toral subalgebra of a finite-dimensional complex semisimple Lie algebra, [[lem-finite-semisimple-cartan-root-and-string-structure]] supplies normalized root vectors $e_i,f_i$ with $[e_i,f_i]=\alpha_i^\vee$ and the corresponding $\mathfrak{sl}_2$ relations.

## Proof

**Proof technique:** direct.

1.1 The supplied root-space direct sum has zero weight space $\mathfrak h$. Thus every $\operatorname{ad}(h)$ is diagonalizable, $\mathfrak h$ is abelian, and its centralizer is its zero weight space $\mathfrak h$; hence it is maximal toral. Apply [L2] to choose nonzero $e_i\in\mathfrak g_{\alpha_i}$ and $f_i\in\mathfrak g_{-\alpha_i}$ with $[e_i,f_i]=\alpha_i^\vee$. The resulting $\mathfrak{sl}_2$ relations give, by induction, $$e_i f_i^r v_\lambda =r(\langle\lambda,\alpha_i^\vee\rangle-r+1)f_i^{r-1}v_\lambda.$$ At $r=m=\langle\lambda,\alpha_i^\vee\rangle+1$ this is zero, while [L1] shows $f_i^m v_\lambda\ne0$. [L1, L2, given, algebra]

2.1 For $j\ne i$, $[e_j,f_i]=0$ because $\alpha_j-\alpha_i$ is not a root; hence every $e_j$ also kills $f_i^m v_\lambda$. Its weight is $\lambda-m\alpha_i=s_i(\lambda+\rho)-\rho$, so it is singular of the stated dot weight. [step 1.1, algebra] ∎
