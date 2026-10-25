---
id: lem-the-commutator-of-vector-field-derivations-is-a-derivation
kind: lemma
title: "The commutator of vector-field derivations is again a derivation"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-lie-bracket-of-smooth-vector-fields, prop-a-vector-field-acts-as-a-derivation-of-smooth-functions]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
    - title: "Nigel Hitchin, Differentiable Manifolds"
      url: "https://courses.maths.ox.ac.uk/pluginfile.php/31073/mod_resource/content/1/Manifold_notes.pdf"
---

## Statement

Let $X$ and $Y$ be smooth vector fields on $M$. Then the commutator
$[X,Y]:C^\infty(M)\to C^\infty(M)$ defined by
$[X,Y]f=X(Yf)-Y(Xf)$ is an $\mathbb R$-linear derivation.

## Facts & Assumptions

**Given:** Smooth vector fields $X$ and $Y$ on $M$ and smooth functions $f,g$.

[L1] Each smooth vector field acts on $C^\infty(M)$ as a derivation ([[prop-a-vector-field-acts-as-a-derivation-of-smooth-functions]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], both $X$ and $Y$ are $\mathbb R$-linear derivations, so their commutator is automatically $\mathbb R$-linear. It remains to prove the Leibniz rule. [L1, given]

1.2 Expand $X(Y(fg))$ using [L1] twice: $$ X(Y(fg))=X(f\,Yg+g\,Yf)=Xf\,Yg+f\,X(Yg)+Xg\,Yf+g\,X(Yf). $$ [L1, given]

1.3 Similarly, $$ Y(X(fg))=Yf\,Xg+f\,Y(Xg)+Yg\,Xf+g\,Y(Xf). $$ [L1, given]

2.1 Subtracting step 1.3 from step 1.2 cancels the mixed first-order products, leaving $$ [X,Y](fg)=f[X,Y]g+g[X,Y]f. $$ [step 1.2, step 1.3, algebra]

3.1 Therefore $[X,Y]$ is an $\mathbb R$-linear derivation of $C^\infty(M)$. [step 1.1, step 2.1] ∎
