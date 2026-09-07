---
id: cex-extensionality-is-needed-for-injective-collapse
kind: counterexample
title: "Extensionality is needed for injective collapse"
status: published
origin: pipeline
deps: ["def-extensional-relation-and-collapse-map"]
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
proof_strategy: direct
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Marks, Set Theory, Berkeley edition \u2014 6.10\u20136.11 pp.31\u201332, sharpness instance."
      url: "https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf"
---

## Statement refuted

False claim: every well-founded relation has an injective collapse. Let $X=\{a,b\}$ with $a\ne b$ and $R=\varnothing$.

## Facts & Assumptions

**Given:** Work in ZF unless the statement explicitly weakens or supplements it; fix the objects and hypotheses of the statement refuted.

[F1] A setlike relation $R$ on $X$ is extensional when $\operatorname{pred}_R(x)=\operatorname{pred}_R(y)$ implies $x=y$ for $x,y\in X$. If $R$ is also well-founded, its collapse map is the unique definable function $$\pi(x)=\{\pi(y):yRx\}.$$ Existence and uniqueness follow from well-founded recursion with $G(x,h)=\operatorname{ran}(h)$, a set by Replacement. A collapse map is defined even without extensionality; injectivity is a further conclusion requiring extensionality. The construction for a supplied well-founded relation uses no ambient Foundation. Conventions and prerequisites: thm-recursion-on-well-founded-setlike-relations. ([[def-extensional-relation-and-collapse-map]])

## Counterexample

1.1 Every member of every nonempty subset of $X$ is minimal, so $R$ is well-founded and setlike. Its two predecessor sets are both empty, so it is not extensional. [F1]

2.1 The collapse rule gives $\pi(a)=\varnothing=\pi(b)$, because both predecessor images are empty. Thus the collapse exists but is not injective. [F1, step 1.1] ∎
