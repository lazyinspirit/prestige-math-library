---
id: thm-a-separating-set-is-equivalently-a-jointly-faithful-family-of-representables
kind: theorem
title: "In a locally small category, separating and coseparating sets are equivalently jointly faithful families of representables"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-separating-set-and-coseparating-set, def-small-locally-small-and-large-category, thm-hom-assignments-are-functors, def-full-faithful-and-essentially-surjective-functor]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-16
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, section 4.7"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Statement

Let $\mathcal C$ be locally small and let $\mathcal G$ be a set of objects. Then $\mathcal G$ is separating if and only if the family of covariant representables
$$\mathcal C(G,-):\mathcal C\to\mathbf{Set}\qquad(G\in\mathcal G)$$
is jointly faithful. Dually, a set $\mathcal H$ is coseparating if and only if the family $\mathcal C(-,H):\mathcal C^{\mathrm{op}}\to\mathbf{Set}$ is jointly faithful.

Here a family of functors $(F_i)_{i\in I}$ with common domain is **jointly faithful** when, for every parallel pair $f,g:X\to Y$ in that domain, $F_i(f)=F_i(g)$ for all $i\in I$ implies $f=g$. For a one-member family this is faithfulness in the sense of [[def-full-faithful-and-essentially-surjective-functor]].

## Facts & Assumptions

**Given:** A locally small category $\mathcal C$ and supplied sets of objects $\mathcal G$ and $\mathcal H$.

[L1] Local smallness makes every hom-collection $\mathcal C(X,Y)$ a set ([[def-small-locally-small-and-large-category]]).

[L2] In a locally small category the hom-assignments $\mathcal C(G,-)$ and $\mathcal C(-,H)$ are functors to $\mathbf{Set}$ ([[thm-hom-assignments-are-functors]]).

[L3] A functor $F$ is **faithful** when every induced $F_{A,B}:\mathcal C(A,B)\to\mathcal D(FA,FB)$ is injective ([[def-full-faithful-and-essentially-surjective-functor]]). Joint faithfulness of a family is the condition stated in this item's own Statement, and is not taken from the cited definition.

[L4] A separating set detects distinct maps by precomposition, while a coseparating set detects them by postcomposition ([[def-separating-set-and-coseparating-set]]).

## Proof

**Proof technique:** direct.

1.1 If $\mathcal G$ is separating and $f,g:X\to Y$ have equal images under every $\mathcal C(G,-)$, then $f\circ h=g\circ h$ for every $G\in\mathcal G$ and $h:G\to X$; [L4] forces $f=g$. Conversely, joint faithfulness says that distinct $f,g$ have unequal images under some $\mathcal C(G,-)$, which means some $h:G\to X$ satisfies $fh\ne gh$. Thus the separating and joint-faithfulness conditions are equivalent. [L1, L2, L3, L4]

2.1 Applying the same argument in the opposite category exchanges precomposition with postcomposition and proves that $\mathcal H$ is coseparating exactly when the contravariant representables $\mathcal C(-,H)$ are jointly faithful. [step 1.1, L2, L3, L4] ∎
