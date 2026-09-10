---
id: lem-translations-preserve-compactly-supported-continuous-functions
kind: lemma
title: Translations preserve compactly supported continuous functions
deps: [def-left-haar-integral-and-left-haar-measure, thm-compactness-under-continuous-maps, thm-finite-products-of-compact-spaces]
provenance:
  statement: literature-derived
  proof: ai-altered
status: draft
origin: pipeline
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Knapp, Advanced Real Analysis, VI §2, pp.225–230, Lemmas 6.9–6.13
      url: https://www.math.stonybrook.edu/~aknapp/download/a2-1-realanal-clickable.pdf
proof_strategy: direct
---

## Statement

For an LCH group $G$, $f\in C_c(G;\mathbb R)$ or $C_c(G;\mathbb C)$, and $K=\operatorname{supp}f$, one has $\operatorname{supp}(L_af)=aK$, $\operatorname{supp}(R_af)=Ka^{-1}$, and $\operatorname{supp}(f\circ\mathrm{inv})=K^{-1}$. All these functions belong to $C_c(G)$. At every $a_0\in G$, the maps $a\mapsto L_af$ and $a\mapsto R_af$ are continuous in uniform norm, with all supports in a fixed compact set on a neighbourhood of $a_0$.

## Facts & Assumptions

**Given:** $G,f,K,a_0$ as in the statement.

[F1] Multiplication and inversion are continuous; each point has a compact neighbourhood. ([[def-left-haar-integral-and-left-haar-measure]])

[F2] Continuous images of compact sets are compact. ([[thm-compactness-under-continuous-maps]])

[F3] The product of two compact spaces is compact. ([[thm-finite-products-of-compact-spaces]])

## Proof

**Proof technique:** direct.

1.1 The maps $x\mapsto ax$, $x\mapsto xa^{-1}$ and $x\mapsto x^{-1}$ have continuous inverses $x\mapsto a^{-1}x$, $x\mapsto xa$ and inversion. They therefore carry the closure of the nonzero set onto the closure of its image. This gives exactly the three stated support formulas, and continuity of the pullbacks and compactness of their supports follow. [F1, F2]

2.1 If $K=\varnothing$, then $f=0$ and every asserted norm difference is zero. Otherwise choose a compact neighbourhood $V$ of $a_0$ and an open $O$ with $a_0\in O\subseteq V$. The sets $VK$ and $KV^{-1}$ are compact images of compact products. Their union $C$ is compact: restrict any open cover to each of the two sets and join the finite subcovers. For $a\in V$ it contains all left and right supports at $a$ and $a_0$. [F1, F2, F3, step 1.1]

3.1 Fix $\epsilon>0$. The two jointly continuous functions $f(a^{-1}x)-f(a_0^{-1}x)$ and $f(xa)-f(xa_0)$ vanish at $(a_0,x)$. Collect all open rectangles about such points on which both absolute values are $<\epsilon/2$. Their second factors cover $C$, so finitely many suffice. Intersect their first factors with $O$, obtaining a neighbourhood $N$ of $a_0$. For $a\in N$ both differences are $<\epsilon/2$ throughout $C$ and vanish off $C$. Both uniform norms are therefore $\le\epsilon/2<\epsilon$, as required. Only finite selections occurred. [F1, step 2.1] ∎

## Sources

Knapp, Advanced Real Analysis, VI §2, pp.225–230, Lemmas 6.9–6.13. Local argument and conventions as displayed above.
