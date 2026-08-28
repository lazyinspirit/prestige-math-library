---
id: thm-a-projective-generator-detects-isomorphisms
kind: theorem
title: "A projective generator detects isomorphisms"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-generator-and-cogenerator-of-a-category, thm-projective-object-characterisations, thm-the-cancellation-and-epimorphism-descriptions-of-a-generator-agree]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Pavel Etingof, Shlomo Gelaki, Dmitri Nikshych, and Victor Ostrik, Tensor Categories, Section 1.6"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
pipeline_run: frontier-22
---

## Statement

Let $P$ be a projective generator of an abelian category. If

$$\mathcal A(P,f):\mathcal A(P,A)\to\mathcal A(P,B)$$

is an isomorphism for a morphism $f:A\to B$, then $f$ is an isomorphism.

## Facts & Assumptions

**Given:** A projective generator $P$ and a morphism $f:A\to B$.

[L1] Projectivity makes $\mathcal A(P,-)$ exact on short exact sequences
([[thm-projective-object-characterisations]]).

[L2] A generator is equivalently an object whose canonical coproduct maps are
epic
([[thm-the-cancellation-and-epimorphism-descriptions-of-a-generator-agree]]).

## Proof

**Proof technique:** direct.

1.1 Apply [L1] to the short exact sequences $0\to\ker(f)\to A\to \operatorname{im}(f)\to0$ and $0\to\operatorname{im}(f)\to B\to\operatorname{coker}(f)\to0$. Since $\mathcal A(P,f)$ is an isomorphism, the first sequence forces $\mathcal A(P,\ker(f))=0$ and the second forces $\mathcal A(P,\operatorname{coker}(f))=0$. [L1, construct]
2.1 Let $X$ be any object with $\mathcal A(P,X)=0$. By [L2], the canonical map $\coprod_{u\in\mathcal A(P,X)} P\to X$ is epic. But the indexing set is empty, so this is the zero map $0\to X$. An epic zero map forces $X=0$. Applying this to the objects in step 1.1 gives $\ker(f)=0=\operatorname{coker}(f)$. [L2, step 1.1]
3.1 Therefore $f$ is both monic and epic, hence an isomorphism in an abelian category. [step 2.1] ∎