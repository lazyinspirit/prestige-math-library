---
id: thm-two-metric-spaces-are-quasi-isometric-exactly-when-they-contain-bilipschitz-equivalent-separated-nets
kind: theorem
title: "Two metric spaces are quasi-isometric if and only if each contains a separated net and the two nets are bilipschitz equivalent"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-coarse-lipschitz-map-and-quasi-isometric-embedding, cor-quasi-isometries-are-exactly-the-coarsely-dense-quasi-isometric-embeddings, def-bilipschitz-embedding-and-bilipschitz-equivalence, def-separated-net-in-a-metric-space, def-axiom-of-choice, thm-zorn, prop-isometries-bilipschitz-equivalences-and-quasi-isometries-form-a-hierarchy, thm-quasi-isometry-is-an-equivalence-relation-on-metric-spaces, def-isometry-and-metric-embedding]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "C. Loh, Geometric Group Theory: An Introduction (2015 course version), 264 pp."
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ws1415/lecture_notes_old.pdf"
    - title: "C. Drutu and M. Kapovich, Geometric Group Theory (with an appendix by B. Nica), 837 pp."
      url: "https://www.math.ucdavis.edu/~kapovich/EPR/ggt.pdf"
---
## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]).

Two metric spaces are quasi-isometric if and only if each contains a separated net and the two nets are bilipschitz equivalent.

## Facts & Assumptions

**Given:** The hypotheses of the Statement, including the Axiom of Choice.

[F1] A subset of a metric space is a separated net when its points are uniformly separated and it is coarsely dense ([[def-separated-net-in-a-metric-space]]).

[L1] A map is $(L,C)$-coarse Lipschitz when $d(f(x),f(x'))\le L\,d(x,x')+C$, and an $(L,C)$-quasi-isometric embedding when in addition $L^{-1}d(x,x')-C\le d(f(x),f(x'))$ ([[def-coarse-lipschitz-map-and-quasi-isometric-embedding]]).

[L2] Under the Axiom of Choice, a map is a quasi-isometry if and only if it is a quasi-isometric embedding with coarsely dense image ([[cor-quasi-isometries-are-exactly-the-coarsely-dense-quasi-isometric-embeddings]]).

[L3] A map is a bilipschitz embedding when $c^{-1}d(x,x')\le d(f(x),f(x'))\le c\,d(x,x')$ for some $c>0$, and a bilipschitz equivalence when it is a bijective such map with bilipschitz inverse ([[def-bilipschitz-embedding-and-bilipschitz-equivalence]]).

[A1] > Every family of nonempty sets has a choice function >. ([[def-axiom-of-choice]]).

[L4] Under the Axiom of Choice, every nonempty poset in which every chain has an upper bound has a maximal element ([[thm-zorn]]).

[L5] Every bilipschitz equivalence is a quasi-isometry ([[prop-isometries-bilipschitz-equivalences-and-quasi-isometries-form-a-hierarchy]]).

[L6] Being quasi-isometric is a reflexive, symmetric and transitive relation on metric spaces ([[thm-quasi-isometry-is-an-equivalence-relation-on-metric-spaces]]).

[L7] A subset inherits the ambient metric, and its inclusion is an isometric embedding ([[def-isometry-and-metric-embedding]]).


## Proof

**Proof technique:** direct.

1.1 Let $X$ and $Y$ be quasi-isometric, and by [L2] choose a quasi-isometric embedding $f:X\to Y$ with coarsely dense image. Fix constants $L\ge1$, $C\ge0$ and $R\ge0$ such that $f$ is $(L,C)$-quasi-isometric and $f[X]$ is $R$-coarsely dense. Put $\delta:=2LC+1$. Consider the poset of $\delta$-separated subsets of $X$, ordered by inclusion. It is nonempty because $\varnothing$ is $\delta$-separated, and the union of a chain of $\delta$-separated subsets is again $\delta$-separated; so Zorn's lemma gives a maximal $\delta$-separated subset $A\subseteq X$. If some $x\in X$ satisfied $d(x,A)\ge\delta$, then $A\cup\{x\}$ would still be $\delta$-separated, contradicting maximality. Hence every point of $X$ lies within distance $\delta$ of $A$, so $A$ is a separated net in $X$. [F1, L1, L2, A1, L4]

2.1 For distinct $a,a'\in A$ one has $$ d_Y(f(a),f(a'))\ge L^{-1}d_X(a,a')-C\ge\Bigl(L^{-1}-\frac{C}{\delta}\Bigr)d_X(a,a') $$ and $$ d_Y(f(a),f(a'))\le\Bigl(L+\frac{C}{\delta}\Bigr)d_X(a,a'), $$ so the restriction $f|_A:A\to f[A]$ is bilipschitz. Also, if $y\in Y$, choose $x\in X$ with $d_Y(y,f(x))\le R$ and then choose $a\in A$ with $d_X(x,a)<\delta$; then $$ d_Y(y,f(a))\le d_Y(y,f(x))+d_Y(f(x),f(a))\le R+L\delta+C. $$ So $f[A]$ is a separated net in $Y$, bilipschitz equivalent to $A$. [F1, L1, L3, step 1.1]

3.1 Conversely, let $A\subseteq X$ and $B\subseteq Y$ be separated nets, and let $\phi:A\to B$ be a bilipschitz equivalence. By [L7] the inclusions $A\hookrightarrow X$ and $B\hookrightarrow Y$ are isometric embeddings, and because $A$ and $B$ are nets those inclusions have coarsely dense image; hence [L2] makes them quasi-isometries. By [L5] the map $\phi$ is a quasi-isometry. Transitivity of quasi-isometry now gives $X\simeq A\simeq B\simeq Y$, so $X$ and $Y$ are quasi-isometric. [F1, L2, L5, L6, L7, step 2.1] ∎
