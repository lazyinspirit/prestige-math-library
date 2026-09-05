---
id: lem-distinguished-opens-cover-every-open
kind: lemma
title: "Every Zariski-open subset is a union of distinguished opens"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [lem-zariski-closed-set-axioms, def-principal-distinguished-subset-of-spectrum]
justified_by: []
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, §14"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "The Stacks Project, Section 10.21: Open and closed subsets of spectra"
      url: "https://stacks.math.columbia.edu/tag/04PN"
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Statement

Let $R$ be a commutative ring. If $U\subseteq\operatorname{Spec}(R)$ is Zariski-open and $U=\operatorname{Spec}(R)\setminus V(I)$ for an ideal $I\trianglelefteq R$, then $$ U=\bigcup_{f\in I} D(f). $$ In particular, every Zariski-open subset is a union of distinguished opens.

## Facts & Assumptions

**Given:** A commutative ring $R$, an ideal $I\trianglelefteq R$, and $U=\operatorname{Spec}(R)\setminus V(I)$.

[L1] $D(f)$ is the set of prime ideals that do not contain $f$ ([[def-principal-distinguished-subset-of-spectrum]]).

## Proof

**Proof technique:** direct.

1.1 Let $\mathfrak p\in U$. Since $\mathfrak p\notin V(I)$, the ideal $I$ is not contained in $\mathfrak p$. Choose $f\in I\setminus\mathfrak p$. Then $\mathfrak p\in D(f)$ by [L1], so $$ U\subseteq\bigcup_{f\in I}D(f). $$ [L1, given, choose]

1.2 Conversely, if $\mathfrak p\in D(f)$ for some $f\in I$, then $f\notin\mathfrak p$, so certainly $I\nsubseteq\mathfrak p$. Hence $\mathfrak p\notin V(I)$ and therefore $\mathfrak p\in U$. Thus $$ \bigcup_{f\in I}D(f)\subseteq U. $$ [L1, given]

2.1 Steps 1.1 and 1.2 prove the displayed equality, so every Zariski-open subset is a union of distinguished opens. [step 1.1, step 1.2] ∎

