---
id: lem-pullbacks-of-monomorphisms-are-monomorphisms-and-pushouts-of-epimorphisms-are-epimorphisms
kind: lemma
title: "A pullback of a monomorphism is a monomorphism, and a pushout of an epimorphism is an epimorphism"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-pullbacks-and-pushouts, lem-limit-legs-are-jointly-monic-and-colimit-legs-jointly-epic, prop-limit-colimit-duality, def-monomorphism-and-epimorphism]
justified_by: []
aliases: []
landmark: false
proof_strategy: cancellation
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-13
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, Exercise 3.1.v"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: frontier-12
---

## Statement

In a pullback square

```tikzcd
P \arrow[r, "q"] \arrow[d, "p"'] & Y \arrow[d, "m"] \\
X \arrow[r, "f"'] & Z
```

if $m$ is monic, then $p$ is monic. Dually, in a pushout square, the pushout
of an epimorphism is an epimorphism.

## Facts & Assumptions

**Given:** The displayed pullback and a monomorphism $m$.

[F1] The pullback legs satisfy $fp=mq$ and have the stated universal property
([[def-pullbacks-and-pushouts]]).

[L1] Pullback legs are jointly monic
([[lem-limit-legs-are-jointly-monic-and-colimit-legs-jointly-epic]]).

[F2] A monomorphism cancels on the left and an epimorphism cancels on the right
([[def-monomorphism-and-epimorphism]]).

[L2] Pullbacks dualize to pushouts ([[prop-limit-colimit-duality]]).

## Proof

**Proof technique:** cancellation.

1.1 Let $r,s:W\to P$ satisfy $pr=ps$. Then $mqr=fpr=fps=mqs$ by the pullback equation. [F1, given, algebra]

2.1 Since $m$ is monic, [F2] gives $qr=qs$. The two pullback legs now have equal composites with $r$ and $s$, so [L1] gives $r=s$. Thus $p$ is monic. [F2, L1, step 1.1]

3.1 Reversing the displayed square changes the pullback into a pushout, $m$ into an epimorphism, and the conclusion into epicity of its pushout. Applying [L2] to steps 1.1 and 2.1 proves the dual assertion. [L2, step 1.1, step 2.1] ∎
