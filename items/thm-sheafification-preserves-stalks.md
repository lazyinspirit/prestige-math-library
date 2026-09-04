---
id: thm-sheafification-preserves-stalks
kind: theorem
title: "Sheafification preserves stalks"
status: published
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-sheafification, lem-first-plus-construction-is-separated, lem-equality-in-a-filtered-colimit-of-sets-is-eventual]
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
    - title: "The Stacks Project, Sheaves on Spaces, Section 17"
      url: "https://stacks.math.columbia.edu/download/sheaves.pdf"
    - title: "Ravi Vakil, Foundations of Algebraic Geometry, Class 3, Section 4.8"
      url: "https://math.stanford.edu/~vakil/0506-216/216Ajun2807.pdf"
---

## Statement

Let $\mathcal F$ be a presheaf on a topological space $X$. For every $x\in X$,
the sheafification map induces a bijection
$$\eta_{\mathcal F,x}:\mathcal F_x\xrightarrow{\ \cong\ }(a\mathcal F)_x.$$

## Facts & Assumptions

**Given:** A presheaf $\mathcal F$ on $X$ and a point $x\in X$.

[F1] Sheafification is $a\mathcal F=(\mathcal F^+)^+$ with unit
$\eta_{\mathcal F}:\mathcal F\to a\mathcal F$ ([[def-sheafification]]).

[L1] For any presheaf, the first plus construction preserves stalks
([[lem-first-plus-construction-is-separated]]).

[F2] Equality in a filtered-colimit stalk is eventual on a smaller
neighbourhood ([[lem-equality-in-a-filtered-colimit-of-sets-is-eventual]]).

## Proof

**Proof technique:** direct.

1.1 Apply [L1] to the presheaf $\mathcal F$. This gives a bijection $$\mathcal F_x\xrightarrow{\ \cong\ }(\mathcal F^+)_x.$$ [L1, given]

2.1 Apply [L1] again, now to the presheaf $\mathcal F^+$. Since [L1] holds for every presheaf, it yields a bijection $$ (\mathcal F^+)_x\xrightarrow{\ \cong\ }((\mathcal F^+)^+)_x=(a\mathcal F)_x. $$ The reference to [F2] is the same eventual-equality argument used inside [L1] to prove injectivity on stalks. [L1, F2, step 1.1]

3.1 Composing the bijections of steps 1.1 and 2.1 gives the required isomorphism $$\mathcal F_x\xrightarrow{\ \cong\ }(a\mathcal F)_x.$$ By [F1], this composite is exactly the map induced by $\eta_{\mathcal F}$. [F1, step 1.1, step 2.1] ∎
