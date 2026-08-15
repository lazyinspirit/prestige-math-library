---
id: lem-adjunct-formulas-are-mutually-inverse
kind: lemma
title: 'The unit and counit transpose formulas are mutually inverse'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-adjunction-by-unit-counit-and-triangle-identities, def-adjunct-and-transposition-under-an-adjunction]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'Tom Leinster, Basic Category Theory, Lemmas 2.2.2 and 2.2.4'
      url: 'https://arxiv.org/pdf/1612.09375.pdf'
    - title: 'Emily Riehl, Category Theory in Context, 2nd ed., Theorem 4.2.7'
      url: 'https://emilyriehl.github.io/files/context.pdf'
pipeline_run: null
---

## Statement

Let $F\dashv G$ have unit $\eta$ and counit $\varepsilon$. For every $u:Fc\to d$ and $v:c\to Gd$,

$$ (u^\flat)^\sharp=u,\qquad (v^\sharp)^\flat=v, $$

where transposition is defined in [[def-adjunct-and-transposition-under-an-adjunction]].

## Facts & Assumptions

**Given:** An adjunction $F\dashv G$ with unit $\eta$ and counit $\varepsilon$, objects $c,d$, and morphisms $u:Fc\to d$ and $v:c\to Gd$.

[L1] The triangle identities are $\varepsilon_{Fc}\circ F(\eta_c)=1_{Fc}$ and $G(\varepsilon_d)\circ\eta_{Gd}=1_{Gd}$ ([[def-adjunction-by-unit-counit-and-triangle-identities]]).

[L2] The transpose formulas are $u^\flat=G(u)\circ\eta_c$ and $v^\sharp=\varepsilon_d\circ F(v)$ ([[def-adjunct-and-transposition-under-an-adjunction]]).

## Proof

**Proof technique:** direct.

1.1 Expanding the first composite gives $(u^\flat)^\sharp=\varepsilon_d\circ FG(u)\circ F(\eta_c)$. [L2, algebra]

1.2 Naturality of $\varepsilon$ at $u$ gives $\varepsilon_d\circ FG(u)=u\circ\varepsilon_{Fc}$. [given]

1.3 Expanding the second composite gives $(v^\sharp)^\flat=G(\varepsilon_d)\circ GF(v)\circ\eta_c$. [L2, algebra]

1.4 Naturality of $\eta$ at $v$ gives $GF(v)\circ\eta_c=\eta_{Gd}\circ v$. [given]

2.1 Substituting step 1.2 into step 1.1 and applying the first triangle identity yields $(u^\flat)^\sharp=u\circ\varepsilon_{Fc}\circ F(\eta_c)=u$. [step 1.1, step 1.2, L1]

3.1 Substituting step 1.4 into step 1.3 and applying the second triangle identity yields $(v^\sharp)^\flat=G(\varepsilon_d)\circ\eta_{Gd}\circ v=v$. [step 1.3, step 1.4, L1] ∎
