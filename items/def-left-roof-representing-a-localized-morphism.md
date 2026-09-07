---
id: "def-left-roof-representing-a-localized-morphism"
kind: "definition"
title: "Left roof representing a localized morphism"
deps: ["def-multiplicative-system-in-a-category"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - url: "https://math.mit.edu/~hrm/palestine/weibel/10-derived_category.pdf"
      title: "10.3.1–10.3.14, pp. 379–384"
provenance:
  statement: ai-altered
  proof: not-applicable
status: "draft"
origin: "pipeline"
---

## Definition

For a multiplicative system as in [[def-multiplicative-system-in-a-category]], a **left roof** from $X$ to $Y$ is the typed pair $(s,f)$ with $s:U\to X$ in $S$ and $f:U\to Y$. Its intended localized value is $Q(f)Q(s)^{-1}$. Thus the common vertex is the source of both arrows. This is a syntactic presentation; existence of the localized category is a subsequent theorem.
