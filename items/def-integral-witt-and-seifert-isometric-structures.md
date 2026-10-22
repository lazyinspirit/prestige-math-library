---
id: def-integral-witt-and-seifert-isometric-structures
kind: definition
title: "Integral Witt classes and rational Seifert isometric structures"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 9
deps:
  - def-metabolic-seifert-form-and-algebraic-knot-concordance
  - def-knot-seifert-pairing-and-matrix
  - def-axiom-of-choice
justified_by: []
aliases: []
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Charles Livingston, A Survey of Classical Knot Concordance"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/living.pdf"
      locator: "§2.2 and §3.4, printed pp. 323–327"
    - title: "Charles Livingston, The concordance genus of a knot, II"
      url: "https://msp.org/agt/2009/9-1/agt-v9-n1-p06-p.pdf"
      locator: "§2, printed pp. 169–171"
    - title: "Neal W. Stoltzfus, Algebraic Computations of the Integral Concordance and Double Null Concordance Group of Knots"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/stoltzfus2.pdf"
      locator: "§II, pp. 275–278"
---

## Definition

Assume the full Axiom of Choice when an integral Seifert lattice comes from a knot's positive-push pairing. For an integral Seifert lattice $(H,V)$, its integral Witt class is its class in $G_{\mathbb Z}$ from the definition of metabolic Seifert form and algebraic knot concordance. An isomorphism $(W,B,T)\to(W',B',T')$ of rational isometric structures is a rational-linear bijection $P:W\to W'$ such that $B'(Px,Py)=B(x,y)$ and $PT=T'P$. A rational isometric structure is a triple $(W,B,T)$ in which $W$ is a finite-dimensional even-dimensional $\mathbb Q$-vector space, $B:W\times W\to\mathbb Q$ is a nonsingular symmetric bilinear form, $T:W\to W$ is an invertible linear map satisfying $B(Tx,Ty)=B(x,y)$ for all $x,y\in W$, and $I-T$ is invertible. Such a structure is metabolic if it has a $T$-invariant subspace $L\subset W$ with $\dim_{\mathbb Q}L=\frac12\dim_{\mathbb Q}W$ and $B|_{L\times L}=0$. Define the rational Witt group $G_{\mathbb Q}$ by direct sum of isomorphism classes, with metabolic structures set equal to zero. For a nonsingular integral Seifert matrix $V$, the associated matrix pair is $(B,T)=(V+V^T,V^{-1}V^T)$; whether this pair is a rational isometric structure is established separately.

The definition concerns finite-rank bilinear forms and isometry data. It does not identify the unrelated Witt Lie algebra with either $G_{\mathbb Z}$ or $G_{\mathbb Q}$.

## Definition references

[[def-metabolic-seifert-form-and-algebraic-knot-concordance|The integral metabolic relation and algebraic concordance group]]

[[def-knot-seifert-pairing-and-matrix|The integral Seifert matrix convention]]
