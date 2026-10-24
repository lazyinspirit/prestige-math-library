---
id: thm-yoneda-embedding-is-fully-faithful
kind: theorem
title: "The Yoneda functor is fully faithful, and it is a full embedding when its object map is injective"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-contravariant-yoneda-lemma, def-yoneda-embedding,
       def-full-faithful-and-essentially-surjective-functor,
       def-embedding-of-categories]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "Emily Riehl, Category Theory in Context, Corollary 2.2.8"
      url: "https://emilyriehl.github.io/files/context.pdf"
    - title: "Tom Leinster, Basic Category Theory, Corollary 4.3.7"
      url: "https://arxiv.org/pdf/1612.09375.pdf"
pipeline_run: null
---

## Statement

Let $\mathcal C$ be locally small. For all objects $a,b$, the Yoneda assignment
induces a bijection

$$\mathcal C(a,b)\xrightarrow{\cong}\operatorname{Nat}(\mathcal C(-,a),\mathcal C(-,b)),\qquad f\longmapsto y(f),$$

where $y(f)_c(g)=f\circ g$. Thus, when $\mathcal C$ is small and $y$ is the
functor of [[def-yoneda-embedding]], it is fully faithful. If its object map is
also injective, it is a full embedding in the library's stronger sense.

## Facts & Assumptions

**Given:** A locally small category $\mathcal C$ and objects $a,b$.

[L1] Contravariant Yoneda gives $\operatorname{Nat}(\mathcal C(-,a),P)\cong P(a)$ by evaluation, with inverse $x\mapsto(f\mapsto P(f)(x))$ ([[cor-contravariant-yoneda-lemma]]).

[F1] The Yoneda assignment sends $f:a\to b$ to postcomposition $g\mapsto f\circ g$ ([[def-yoneda-embedding]]).

[F2] A functor is fully faithful exactly when each induced hom-map is bijective ([[def-full-faithful-and-essentially-surjective-functor]]).

[F3] An embedding is faithful and injective on objects, and a full embedding is additionally full ([[def-embedding-of-categories]]).

## Proof

**Proof technique:** direct.

1.1 Apply [L1] to $P=\mathcal C(-,b)$. Evaluation sends $\alpha:\mathcal C(-,a)\Rightarrow\mathcal C(-,b)$ to $\alpha_a(1_a)\in\mathcal C(a,b)$, and its inverse sends $f:a\to b$ to $g:c\to a\mapsto f\circ g$, which is exactly $y(f)$ by [F1]. [L1, F1]

2.1 Step 1.1 makes every Yoneda hom-map bijective, so [F2] gives full faithfulness whenever the small-source Yoneda functor is formed; the same bijections hold objectwise for every locally small $\mathcal C$. [step 1.1, F2]

3.1 If the object map of $y$ is injective, step 2.1 gives both fullness and faithfulness, so [F3] makes $y$ a full embedding. [step 2.1, F3] ∎
