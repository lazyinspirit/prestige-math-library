---
id: thm-mutual-factorisation-defines-subobject-and-quotient-object-equivalence
kind: theorem
title: "Mutual factorisation is an equivalence relation on monomorphisms into an object and dually on epimorphisms out of it"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-subobject-and-quotient-object, def-monomorphism-and-epimorphism, def-isomorphism-groupoid-and-connected-category]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, section 4.5"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Statement

For monomorphisms into a fixed object, mutual factorisation as defined in [[def-subobject-and-quotient-object]] is an equivalence relation. If $m:A\to C$ and $n:B\to C$ mutually factor, the factor maps are unique inverse isomorphisms. Dually, mutual factorisation is an equivalence relation on epimorphisms out of a fixed object, and its factor maps are unique inverse isomorphisms.

## Facts & Assumptions

**Given:** Monomorphisms $m:A\to C$, $n:B\to C$, and $p:D\to C$, with the mutual-factorisation relation of [[def-subobject-and-quotient-object]].

[L1] A monomorphism is left-cancellable, an epimorphism is right-cancellable, and identities are both monic and epic ([[def-monomorphism-and-epimorphism]]).

[L2] A morphism with a two-sided inverse is an isomorphism, and that inverse is unique ([[def-isomorphism-groupoid-and-connected-category]]).

## Proof

**Proof technique:** direct.

1.1 Identity factorisations give reflexivity, exchanging the two factor maps gives symmetry, and composing factor maps gives transitivity. The same three operations work dually for epimorphisms. [given, L1]

2.1 Suppose $m=n\circ u$ and $n=m\circ v$. Then $m=m\circ v\circ u$, so monicity of $m$ gives $v\circ u=1_A$; similarly monicity of $n$ gives $u\circ v=1_B$. Thus $u$ and $v$ are inverse isomorphisms by [L2], and monicity makes each factor map unique. For epimorphisms the same equations are cancelled on the right, proving the dual claim. [step 1.1, L1, L2] ∎
