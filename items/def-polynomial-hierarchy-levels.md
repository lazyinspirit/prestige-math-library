---
id: def-polynomial-hierarchy-levels
kind: definition
title: "Polynomial hierarchy levels"
status: draft
origin: pipeline
deps: [def-p]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Arora–Barak, Computational Complexity, 2007 draft; §§5.1–5.2, Definitions5.1,5.4, pp91–92."
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Definition

All languages are subsets of $\{0,1\}^*$. Put $\Sigma_0^p=\Pi_0^p=P$ as in [[def-p]]. For a fixed integer $k\ge1$, $L\in\Sigma_k^p$ means that a deterministic polynomial-time predicate $R$ and polynomially bounded, polynomial-time computable lengths $p_1,\ldots,p_k$ satisfy
$$x\in L\iff \exists y_1\in\{0,1\}^{p_1(|x|)}\ \forall y_2\in\{0,1\}^{p_2(|x|)}\cdots Q_k y_k\in\{0,1\}^{p_k(|x|)}\ R(x,y_1,\ldots,y_k).$$
Here $Q_j$ is existential for odd $j$ and universal for even $j$. Starting universally defines $\Pi_k^p$. Write $\mathrm{PH}=\bigcup_{k\ge0}\Sigma_k^p$. The level and all polynomials are fixed for a language, not part of the input. Length zero allows the single empty string. Variable-length witnesses can be encoded with a length field and padding; every padded string decodes to a bounded-length string, so universal blocks introduce no invalid-witness exception.
