---
id: lem-extensional-collapse-is-injective
kind: lemma
title: "An extensional collapse is injective"
status: draft
origin: pipeline
deps: ["def-extensional-relation-and-collapse-map", "def-rank-of-a-well-founded-relation"]
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Marks, Set Theory, Berkeley edition \u2014 6.11 proof p.32."
      url: "https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf"
---

## Statement

For a well-founded setlike extensional relation $R$ on a definable class $X$, its collapse map $\pi$ is injective.

## Facts & Assumptions

**Given:** Work in ZF unless the statement explicitly weakens or supplements it; fix the objects and hypotheses of the statement.

[F1] A setlike relation $R$ on $X$ is extensional when $\operatorname{pred}_R(x)=\operatorname{pred}_R(y)$ implies $x=y$ for $x,y\in X$. If $R$ is also well-founded, its collapse map is the unique definable function $$\pi(x)=\{\pi(y):yRx\}.$$ Existence and uniqueness follow from well-founded recursion with $G(x,h)=\operatorname{ran}(h)$, a set by Replacement. A collapse map is defined even without extensionality; injectivity is a further conclusion requiring extensionality. The construction for a supplied well-founded relation uses no ambient Foundation. Conventions and prerequisites: thm-recursion-on-well-founded-setlike-relations. ([[def-extensional-relation-and-collapse-map]])

[F2] For a well-founded setlike relation $R$ on $X$, its ordinal rank is the definable function determined by $$\rho_R(x)=\sup\{\rho_R(y)+1:yRx\}=\bigcup\{\rho_R(y)\cup\{\rho_R(y)\}:yRx\}.$$ To justify the definition, apply well-founded recursion to the total rule which returns this union if every value of its input function is an ordinal and returns $0$ otherwise. Well-founded induction shows that every actual value is an ordinal: predecessor values are ordinals by the induction hypothesis, their successors are ordinals, Replacement collects them, and their union is an ordinal, including the empty union $0$. Thus the default case never occurs. For $yRx$ the rank equation gives $\rho_R(y)<\rho_R(x)$. The definition requires no ambient Foundation for a supplied well-founded $R$. Conventions and prerequisites: thm-recursion-on-well-founded-setlike-relations, lem-ordinal-basics. ([[def-rank-of-a-well-founded-relation]])

## Proof

1.1 Prove by transfinite induction on $\alpha$ that any $x,y$ with $\max(\rho_R(x),\rho_R(y))=\alpha$ and $\pi(x)=\pi(y)$ are equal. For any $uRx$, the collapse equation supplies $vRy$ with $\pi(u)=\pi(v)$. Both predecessor ranks are smaller than their respective parent ranks, so their maximum is strictly below $\alpha$. The induction hypothesis gives $u=v$. [F1, F2]

2.1 It follows that every predecessor of $x$ is a predecessor of $y$. Interchanging $x,y$ proves the reverse inclusion; extensionality gives $x=y$. At rank zero both predecessor sets are empty and the same extensionality step applies without invoking an induction hypothesis. Every pair of ranks has an ordinal maximum, so the induction covers all pairs. [F1, F2, step 1.1] ∎

