---
id: "def-geometric-fibre"
kind: "definition"
title: "Geometric fibres and geometric points"
status: "draft"
origin: "pipeline"
deps: ["def-scheme-theoretic-fibre", "lem-base-extension-field-coordinate-ring", "def-algebraic-closure"]
provenance:
  statement: "literature-derived"
  proof: "not-applicable"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Vakil 10.4.3 and table (Rc), (Ic), (Cc)"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGmar3111public.pdf"
---

## Definition

A **geometric point** of a scheme $S$ is a morphism $\operatorname{Spec}\Omega\to S$ with $\Omega$ algebraically closed. For a morphism $f:X\to S$ and a specified point $s\in S$, choose an algebraic closure $\Omega/\kappa(s)$, in the sense of [[def-algebraic-closure]]. In this page the **geometric fibre of $f$ at $s$** means
$$X_{\bar s}=X_s\times_{\operatorname{Spec}\kappa(s)}\operatorname{Spec}\Omega.$$
Here $X_s$ is [[def-scheme-theoretic-fibre]], and its affine charts extend as in [[lem-base-extension-field-coordinate-ring]]. The choice includes the embedding of $\kappa(s)$; no preferred algebraic closure or preferred isomorphism between choices is implied.
