---
id: rem-the-covering-criterion-and-the-member-calculus-are-the-same-tool
kind: remark
title: "The covering criterion and the member calculus are the same tool"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-equivalence-of-members,
       thm-chasing-rule-exactness-detected-by-members,
       thm-the-covering-criterion-for-exactness]
justified_by: []
verification:
  audited: 2026-08-29
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 12.5, Lemma 12.5.15"
      url: "https://stacks.math.columbia.edu/tag/00ZX"
    - title: "Saunders Mac Lane, Categories for the Working Mathematician, Theorem VIII.4.3(v)"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
pipeline_run: frontier-23
---

The two formulations carry the same data. Both begin with the composite-zero
condition $g f = 0$. A member of $Y$ is an arrow into $Y$, and equivalence of
members in [[def-equivalence-of-members]] is exactly agreement after
precomposition with one common pair of epimorphic covers. Thus the existence of
$x$ with $f x \equiv y$ in
[[thm-chasing-rule-exactness-detected-by-members]] is the same lifting
assertion as the existence of an epic cover $k:V \to W$ and a morphism
$l:V \to X$ with $y k = f l$ in
[[thm-the-covering-criterion-for-exactness]].
