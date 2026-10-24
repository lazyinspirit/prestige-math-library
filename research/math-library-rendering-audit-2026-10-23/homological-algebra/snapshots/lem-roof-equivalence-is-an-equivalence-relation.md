---
id: "lem-roof-equivalence-is-an-equivalence-relation"
kind: "lemma"
title: "Roof equivalence is an equivalence relation"
deps: ["def-common-refinement-equivalence-of-roofs", "def-multiplicative-system-in-a-category"]
verification:
  audited: 2026-09-07
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
  proof: ai-altered
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

For any two objects $X,Y$ of a category with a two-sided multiplicative system $S$, common refinement is an equivalence relation on left roofs from $X$ to $Y$.

## Facts & Assumptions

**Given:** For any two objects $X,Y$ of a category with a two-sided multiplicative system $S$, common refinement is an equivalence relation on left roofs from $X$ to $Y$.

[F1] The common-refinement conditions are equality of the composite denominators in $S$ and equality of the numerators ([[def-common-refinement-equivalence-of-roofs]]).

[F2] The two Ore axioms and the two cancellation directions hold for the given multiplicative system ([[def-multiplicative-system-in-a-category]]).

## Proof

1.1 For a roof $(s,f)$, take both refinement legs to be its vertex identity. This gives reflexivity. Interchanging the two refinement legs gives symmetry. These arguments also cover identity roofs and coincident vertices. [F1, given]

1.2 For transitivity suppose $(s,f)\sim(t,g)$ via $a,b$ and $(t,g)\sim(u,h)$ via $c,d$. Thus $r=sa=tb\in S$ and $q=tc=ud\in S$, while $fa=gb$ and $gc=hd$. Apply Ore to $r$ and $q$: obtain $v$ in $S$ and $w$ with $rv=qw\in S$. [F1, F2]

2.1 Now $tbv=tcw$. Cancellation of the postcomposed denominator $t$ supplies $e\in S$ such that $bve=cwe$. Therefore $save=udwe=rve\in S$ and $fave=gbve=gcwe=hdwe$. The legs $ave,dwe$ witness $(s,f)\sim(u,h)$. Only $v,e$, and the displayed composite denominator were asserted to lie in $S$. [F2, step 1.2, algebra] ∎
