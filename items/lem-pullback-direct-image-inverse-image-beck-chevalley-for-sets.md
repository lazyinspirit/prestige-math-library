---
id: lem-pullback-direct-image-inverse-image-beck-chevalley-for-sets
kind: lemma
title: "Direct and inverse image satisfy Beck–Chevalley for pullback squares of sets"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-pullbacks-and-pushouts, def-power-set, def-image-and-preimage-under-a-relation]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Lemma 5.5.10"
      url: "https://emilyriehl.github.io/files/context.pdf"
    - title: "D. Mehrle, Category Theory Part III, Exercise 5.22"
      url: "https://pi.math.cornell.edu/~dmehrle/notes/partiii/cattheory_partiii_notes.pdf"
pipeline_run: null
---

## Statement

Let

$$\begin{matrix}P&\xrightarrow{q}&Y\\ p\downarrow&&\downarrow g\\ X&\xrightarrow{f}&Z\end{matrix}$$

be a pullback square of sets. For every $A\subseteq X$,

$$q[p^{-1}[A]]=g^{-1}[f[A]].$$

Equivalently, direct image and inverse image satisfy $q_!p^*=g^*f_!$ on power sets. The formula remains valid for empty fibres and identity pullbacks.

## Facts & Assumptions

**Given:** The displayed pullback square and a subset $A\subseteq X$.

[L1] A pullback of $X\xrightarrow fZ\xleftarrow gY$ has projections satisfying $fp=gq$ and the universal property for every compatible pair ([[def-pullbacks-and-pushouts]]).

[L2] Membership in a direct image or inverse image is witnessed by the corresponding relation equation ([[def-image-and-preimage-under-a-relation]]).

## Proof

**Proof technique:** direct.

1.1 If $y\in q[p^{-1}[A]]$, then some $w\in P$ satisfies $q(w)=y$ and $p(w)\in A$. The pullback equation gives $g(y)=gq(w)=fp(w)$, so $g(y)\in f[A]$ and $y\in g^{-1}[f[A]]$. [L1, L2]

1.2 Conversely, if $y\in g^{-1}[f[A]]$, choose $x\in A$ with $f(x)=g(y)$. The pullback universal property supplies the unique $w\in P$ with $p(w)=x$ and $q(w)=y$, so $y\in q[p^{-1}[A]]$. If the fibre is empty, both existential conditions fail. [L1, L2, construct]

2.1 Steps 1.1 and 1.2 prove equality. Identity squares give the identity direct and inverse images; if one map is a section of the other, the same equality specializes to the usual section–retraction image formulas. [step 1.1, step 1.2] ∎
