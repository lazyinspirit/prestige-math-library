---
id: def-endomorphism-division-algebra-of-an-irreducible
kind: definition
title: "The endomorphism division algebra of an irreducible representation"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-intertwiner-equivalent-and-faithful-representations, def-subrepresentation-and-irreducible-representation, cor-schurs-lemma-for-irreducible-representations, def-division-ring]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Gabor Wiese, Galois Representations, Section 2.5"
      url: "https://r.jina.ai/https://math.uni.lu/wiese/notes/GalRep.pdf"
    - title: "Weizhe Zheng, Lectures on Algebra, Section 4.2"
      url: "https://server.mcm.ac.cn/~zheng/algebra.pdf"
---

## Definition

For an irreducible finite-dimensional $F$-representation $V$ of $G$, put
$$D_V:=\operatorname{End}_{F[G]}(V)=\operatorname{End}_G(V).$$
Schur's lemma says that every nonzero member of this endomorphism ring is
invertible, so $D_V$ is a division ring ([[cor-schurs-lemma-for-irreducible-representations]]).
We call it the **endomorphism division algebra** of $V$.  Scalars give a
central embedding $F\hookrightarrow D_V$.
