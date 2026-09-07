---
id: "lem-geometric-fibre-choice-independent"
kind: "lemma"
title: "Independence of the chosen algebraic closure"
status: published
origin: "pipeline"
deps: ["def-geometric-fibre", "cor-algebraic-closures-are-isomorphic-over-the-base", "lem-base-change-composition"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Vakil 10.4.3 and scalar extension 10.2.3"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGmar3111public.pdf"
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice. For two algebraic closures $\Omega_1,\Omega_2$ of $\kappa(s)$, a chosen $\kappa(s)$-isomorphism $\sigma:\Omega_1\to\Omega_2$ identifies the two geometric fibres after transport of scalars. In particular their isomorphism-invariant properties agree. No canonical choice of this identification is asserted.

## Facts & Assumptions

**Given:** The objects, hypotheses and conventions in the statement above.

[F1] A **geometric point** of a scheme $S$ is a morphism $\operatorname{Spec}\Omega\to S$ with $\Omega$ algebraically closed. For a specified point $s\in S$, choose an algebraic closure $\Omega/\kappa(s)$, in the sense of def-algebraic-closure. In this page the **geometric fibre at $s$** means $$X_{\bar s}=X_s\times_{\operatorname{Spec}\kappa(s)}\operatorname{Spec}\Omega.$$ Here $X_s$ is def-scheme-theoretic-fibre, and its affine charts extend as in lem-base-extension-field-coordinate-ring. The choice includes the embedding of $\kappa(s)$; no preferred algebraic closure or preferred isomorphism between choices is implied. ([[def-geometric-fibre]])

[F2] Assuming the Axiom of Choice, any two algebraic closures of a field $F$ are $F$-isomorphic. No uniqueness of the isomorphism is asserted. ([[cor-algebraic-closures-are-isomorphic-over-the-base]])

[F3] For $S''\xrightarrow{k}S'\xrightarrow{h}S$ and an $S$-scheme $X$, there is a canonical isomorphism $$(X\times_S S')\times_{S'}S''\cong X\times_S S''.$$ It is functorial in $X$ and compatible with the induced maps of $S$-schemes. ([[lem-base-change-composition]])

## Proof

1.1 F2 supplies a base-field isomorphism $\sigma:\Omega_1\to\Omega_2$ under Choice. By F1 the two fibres are $X_s\times_{\kappa(s)}\operatorname{Spec}\Omega_i$. [given, F1, F2]

2.1 Base change the first fibre along $\sigma$ and apply F3 to identify it with the second fibre. On affine charts the ring isomorphism is $a\otimes\lambda\mapsto a\otimes\sigma(\lambda)$, whose inverse uses $\sigma^{-1}$. Empty charts and the identity choice satisfy the same formulas. Thus the schemes are isomorphic after scalar transport, and all isomorphism-invariant properties agree, independently of the chosen isomorphism. [F3, step 1.1] ∎
