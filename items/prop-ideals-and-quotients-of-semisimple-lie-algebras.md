---
id: prop-ideals-and-quotients-of-semisimple-lie-algebras
kind: proposition
title: Ideals and quotients of semisimple Lie algebras
status: published
origin: pipeline
pipeline_run: phase-2-next-18
deps: [thm-semisimple-lie-algebras-decompose-as-direct-sums-of-simple-ideals, def-quotient-lie-algebra]
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Milne, Lie Algebras, Corollaries 4.16–4.17"
      url: https://www.jmilne.org/math/CourseNotes/LAG.pdf
      locator: "§4, Corollaries 4.16–4.17, printed pp. 44–45"
---

## Statement

Every ideal and every quotient of a finite-dimensional semisimple
characteristic-zero Lie algebra is semisimple. More precisely, relative to a
decomposition into simple ideals, every ideal is the sum of a subfamily of
the simple factors and has an ideal complement.

## Facts & Assumptions

**Given:** A decomposition
$\mathfrak g=\mathfrak g_1\oplus\cdots\oplus\mathfrak g_m$ into simple
ideals and an ideal $\mathfrak a\lhd\mathfrak g$.

[L1] Such a finite decomposition exists
([[thm-semisimple-lie-algebras-decompose-as-direct-sums-of-simple-ideals]]).

[L2] Quotients by ideals carry the published quotient bracket
([[def-quotient-lie-algebra]]).

## Proof

**Proof technique:** factorwise bracketing.

1.1 Let $p_i$ be projection to $\mathfrak g_i$. If $p_i(\mathfrak a)\ne0$, simplicity and nonabelianness give $[\mathfrak g_i,p_i(\mathfrak a)]=\mathfrak g_i$. But bracketing an element supported in the $i$th factor with an element of $\mathfrak a$ produces an element of $\mathfrak a$ supported only in that factor. Hence $\mathfrak g_i\subseteq\mathfrak a$. If the projection is zero, the factor does not occur. Therefore $\mathfrak a$ is exactly the direct sum of the factors for which its projection is nonzero. [L1, algebra]

2.1 The sum of the remaining factors is an ideal complement $\mathfrak b$, so $\mathfrak g=\mathfrak a\oplus\mathfrak b$. Both $\mathfrak a$ and $\mathfrak b$ are direct sums of simple ideals and hence semisimple. By [L2], projection restricts to an isomorphism $\mathfrak b\cong\mathfrak g/\mathfrak a$, so the quotient is semisimple as well. [L1, L2, step 1.1]

3.1 For $\mathfrak g=0$, the indexing family and both subfamilies are empty; the ideal and quotient are zero. The cases $\mathfrak a=0$ and $\mathfrak a=\mathfrak g$ correspond to the empty and full subfamilies and are included in step 2.1. [step 1.1, 2.1] ∎