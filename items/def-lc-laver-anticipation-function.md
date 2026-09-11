---
id: "def-lc-laver-anticipation-function"
kind: "definition"
title: "Laver anticipation functions"
deps: ["def-lc-fine-ultrafilters-strong-compactness-and-supercompactness", "thm-lc-supercompactness-closed-embedding-characterization", "def-axiom-of-choice"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Laver (1978), pp.385–388; full-text source unresolved
      url: https://link.springer.com/content/pdf/10.1007/BF02761175.pdf
provenance:
  statement: ai-altered
  proof: not-applicable
status: published
origin: "pipeline"
---

## Definition

Work in ZFC, with [[def-axiom-of-choice]], and suppose kappa is supercompact in the sense of [[def-lc-fine-ultrafilters-strong-compactness-and-supercompactness]]. A **Laver anticipation function** is a set function $\ell:\kappa\to V_\kappa$ such that for every set x and every cardinal lambda>=kappa there is a supercompactness embedding $j:V\to M$ with

$$\operatorname{crit}(j)=\kappa,\qquad j(\kappa)>\lambda,\qquad {}^\lambda M\subseteq M,\qquad j(\ell)(\kappa)=x.$$

Here the sequence-closure condition and embeddings have the precise definable-class, set-restriction and formula-by-formula meaning in [[thm-lc-supercompactness-closed-embedding-characterization]]. In particular no uniform truth predicate for V or unrestricted class quantifier is introduced: the witness is supplied by a definition with set parameters, and its elementarity is verified as a schema. Since j(ell) is a function with domain j(kappa) and kappa<j(kappa), its value at kappa is well-defined. The anticipated x can have rank at least kappa; only the original values ell(alpha), alpha<kappa, must lie in V_kappa. Lambda=kappa and x=empty are included. This definition asserts no existence of such ell; that is the separate existence theorem.
