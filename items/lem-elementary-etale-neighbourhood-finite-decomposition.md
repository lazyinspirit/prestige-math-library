---
id: lem-elementary-etale-neighbourhood-finite-decomposition
kind: lemma
title: "Finite decomposition around isolated fibre points after an elementary étale change"
status: draft
origin: pipeline
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-axiom-of-choice
  - def-elementary-etale-neighbourhood
  - def-finite-morphism-schemes
  - lem-etale-neighbourhood-isolated-fibre-point-finite
  - lem-etale-stable-base-change-composition
  - lem-fibre-product-open-restriction
  - lem-points-of-scheme-fibre-product-residue-tensors
  - lem-proper-source-to-separated-target-proper
  - cor-finite-morphism-proper
  - thm-proper-morphism-closed-image
  - lem-separated-stable-under-base-change
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "The Stacks Project, More on Morphisms, Section 37.41 (étale neighbourhoods)"
      url: https://stacks.math.columbia.edu/tag/04HF
---

## Statement

Assume the Axiom of Choice. Let $f:X\to S$ be separated and locally of
finite type, let $s\in S$, and let $x_1,\ldots,x_n$ be distinct isolated
points of the fibre $X_s$, where $n\ge0$. There is an elementary étale
neighbourhood $(U,u)\to(S,s)$ with $\kappa(u)=\kappa(s)$ and an open-and-closed
decomposition
$$X\times_S U=W\sqcup V_1\sqcup\cdots\sqcup V_n$$
such that every $V_i\to U$ is finite, $(V_i)_u$ consists of one point $v_i$
mapping to $x_i$ with $\kappa(v_i)=\kappa(x_i)$, and $W_u$ has no point
mapping to any $x_i$.

The induction below uses the locally proved single-point construction
[[lem-etale-neighbourhood-isolated-fibre-point-finite]].

## Facts & Assumptions
**Given:** The data and hypotheses in the Statement.

[F1] An isolated point of a fibre of a locally finite type morphism admits,
after an elementary étale base change, an open neighbourhood finite over
the new base with singleton chosen fibre and unchanged residue field. The
recorded proof constructs the finite selected component from published algebraic Zariski Main and the coprime lifting lemma
([[lem-etale-neighbourhood-isolated-fibre-point-finite]]).

[F2] Étale morphisms are stable under composition and base change, and an
elementary étale neighbourhood has the chosen residue field unchanged
([[lem-etale-stable-base-change-composition]],
[[def-elementary-etale-neighbourhood]]).

[F3] If $V\to U$ is finite then it is proper
([[cor-finite-morphism-proper]]); if $Z\to U$ is separated, a $U$-morphism
from the proper $V$ to $Z$ is proper
([[lem-proper-source-to-separated-target-proper]]) and hence closed
([[thm-proper-morphism-closed-image]]). Separatedness is stable under base
change ([[lem-separated-stable-under-base-change]]).

[F4] Fibre products commute with restriction to open subschemes
([[lem-fibre-product-open-restriction]]). When $u$ has the same residue field
as $s$, a point $x\in X_s$ has a unique point over the pair $(x,u)$ in
$X\times_SU$, because
$\kappa(x)\otimes_{\kappa(s)}\kappa(u)=\kappa(x)$, and that point has residue
field $\kappa(x)$
([[lem-points-of-scheme-fibre-product-residue-tensors]]).

[F5] A finite morphism has affine finite module charts
([[def-finite-morphism-schemes]]). AC is the choice-function axiom
([[def-axiom-of-choice]]).



## Proof

**Proof technique:** finite induction from the single-point finite neighbourhood.

1.1 For $n=0$ take $U=S$, $u=s$, the identity étale morphism, and $W=X$; the empty list of finite pieces satisfies every condition. Suppose inductively that the assertion holds for $x_1,\ldots,x_{i-1}$, over an elementary étale neighbourhood $(U,u)\to(S,s)$ with decomposition $X_U=W\sqcup V_1\sqcup\cdots\sqcup V_{i-1}$. By [F4] the point $x_i$ has a unique lift $\widetilde x_i\in(X_U)_u$ with residue field $\kappa(x_i)$; distinctness of the original points and the fibre conditions put it in $W_u$. It remains isolated in $W_u$, because $W_u$ is open in $(X_U)_u$ and base change by the residue-field isomorphism identifies this fibre with $X_s$. [F2, F4]

2.1 Apply [F1] to the separated, locally finite type morphism $W\to U$ at $\widetilde x_i$. It gives an elementary étale neighbourhood $(U',u')\to(U,u)$ and an open $V_i'\subseteq W_{U'}$ containing the selected point, finite over $U'$, with singleton fibre over $u'$ and the same residue field. The composite $(U',u')\to(S,s)$ is elementary étale by [F2] and $\kappa(u')=\kappa(u)=\kappa(s)$. Base change all prior pieces to $U'$; they remain disjoint open-and-closed pieces, finite over $U'$, with their singleton chosen fibres and residue fields by [F4] and finite-module base change. [F1, F2, F4, F5, step 1.1]

3.1 The new open immersion $V_i'\hookrightarrow W_{U'}$ is also closed. Indeed $V_i'\to U'$ is finite and hence proper by [F3], and $W_{U'}\to U'$ is separated as an open-and-closed subscheme of the separated base change $X_{U'}\to U'$; [F3] makes $V_i'\to W_{U'}$ proper and therefore closed. Thus $V_i'$ is open and closed in $W_{U'}$ and in $X_{U'}$. Let $W'=W_{U'}\smallsetminus V_i'$, an open-and-closed complement. It has no point over $u'$ mapping to any $x_j$ with $j\le i$: the earlier points lie in their preserved $V_j$ and the new point lies in $V_i'$. This completes the induction step. [F3, F4, step 2.1]

4.1 Finite induction through $i=n$ gives the displayed decomposition and all fibre conditions. The case of an empty fibre is covered by $n=0$. No quasi-compactness of $X$ or $S$ is used, and nonreduced singleton fibres are allowed. AC is spent only through [F1] and the finite/proper suppliers; the single-point étale neighbourhood is supplied by [F1]. [F1, F2, F3, F4, F5, step 1.1, step 2.1, step 3.1] ∎
