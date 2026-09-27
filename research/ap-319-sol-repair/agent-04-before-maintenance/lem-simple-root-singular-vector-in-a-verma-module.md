---
id: lem-simple-root-singular-vector-in-a-verma-module
kind: lemma
title: "The simple-root singular vector in a Verma module"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-verma-module, thm-pbw-model-of-a-verma-module, def-root-reflections-and-the-weyl-group-action, def-weyl-vector-rho-for-a-chosen-positive-system, prop-opposite-root-spaces-bracket-to-the-killing-dual-line]
proof_strategy: direct
verification:
  audited: 2026-09-07
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Pavel Etingof, Representations of Lie Groups, Exercise 8.15(i)"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
---

## Statement

Let $\alpha_i$ be simple and put $m=\langle\lambda+\rho,\alpha_i^\vee\rangle$. If $m\in\mathbb Z_{>0}$, then $f_i^m v_\lambda$ is a singular vector in $M(\lambda)$ of weight $s_i\mathbin\cdot\lambda$.

## Facts & Assumptions

**Given:** The Verma convention [[def-verma-module]], the reflection and Weyl-vector conventions [[def-root-reflections-and-the-weyl-group-action]] and [[def-weyl-vector-rho-for-a-chosen-positive-system]], and the root $\mathfrak{sl}_2$ line [[prop-opposite-root-spaces-bracket-to-the-killing-dual-line]].

[L1] The PBW model identifies $M(\lambda)$ with $U(\mathfrak n^-)v_\lambda$ as a vector space ([[thm-pbw-model-of-a-verma-module]]).

## Proof

**Proof technique:** direct.

1.1 Choose nonzero $e_i\in\mathfrak g_{\alpha_i}$ and scale $f_i\in\mathfrak g_{-\alpha_i}$ so that $[e_i,f_i]=\alpha_i^\vee$; the cited opposite-root bracket line permits this normalization.  The resulting $\mathfrak{sl}_2$ relations give, by induction, $$e_i f_i^r v_\lambda =r(\langle\lambda,\alpha_i^\vee\rangle-r+1)f_i^{r-1}v_\lambda.$$ At $r=m=\langle\lambda,\alpha_i^\vee\rangle+1$ this is zero, while [L1] shows $f_i^m v_\lambda\ne0$. [L1, given, algebra]

2.1 For $j\ne i$, $[e_j,f_i]=0$ because $\alpha_j-\alpha_i$ is not a root; hence every $e_j$ also kills $f_i^m v_\lambda$. Its weight is $\lambda-m\alpha_i=s_i(\lambda+\rho)-\rho$, so it is singular of the stated dot weight. [step 1.1, algebra] ∎
