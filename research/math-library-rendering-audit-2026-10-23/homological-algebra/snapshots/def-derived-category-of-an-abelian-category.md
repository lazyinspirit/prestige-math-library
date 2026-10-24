---
id: "def-derived-category-of-an-abelian-category"
kind: "definition"
title: "Derived category of an abelian category"
deps: ["thm-the-calculus-of-fractions-constructs-the-localization", "lem-quasi-isomorphisms-admit-the-roof-calculus-in-the-homotopy-category", "def-cochain-complex-in-an-abelian-category", "def-bounded-bounded-below-and-bounded-above-complex"]
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - url: "https://stacks.math.columbia.edu/tag/05RR"
      title: "13.11.1–13.11.6"
provenance:
  statement: ai-altered
  proof: not-applicable
landmark: true
status: published
origin: "pipeline"
---

## Definition

Let $\mathcal A$ be an abelian category. We use cochains as in [[def-cochain-complex-in-an-abelian-category]], with $X[k]^n=X^{n+k}$ and $d_{X[k]}^n=(-1)^kd_X^{n+k}$. Thus $H^n(X[k])=H^{n+k}(X)$. The cochain category $K(\mathcal A)$ is the reindexed published homotopy category. Put

$$D(\mathcal A)=K(\mathcal A)[\mathrm{qis}^{-1}],\qquad Q:K(\mathcal A)\longrightarrow D(\mathcal A).$$

Likewise $D^-,D^+,D^b$ initially mean the localizations of the termwise bounded variants of [[def-bounded-bounded-below-and-bounded-above-complex]]. Roof morphisms exist by [[lem-quasi-isomorphisms-admit-the-roof-calculus-in-the-homotopy-category]] and [[thm-the-calculus-of-fractions-constructs-the-localization]] under its standing size hypothesis: a small category of complexes, or supplied small cofinal denominator families. Every assertion of Hom sets is under that hypothesis. In the bounded module models, supplied replacements will separately exhibit those Hom sets. No general local-smallness theorem for unbounded $D(\mathcal A)$ is asserted.

The cone convention is $\operatorname{Cone}(f)^n=Y^n\oplus X^{n+1}$, $d(y,x)=(d_Yy+fx,-d_Xx)$, and its triangle ends in $X[1]$.
