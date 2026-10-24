---
id: def-boone-group-presentation-and-special-word
kind: definition
title: "Boone group presentation and special word"
status: published
verification:
  audited: 2026-09-10
origin: pipeline
deps: ["def-boone-machine-semigroup-and-augmented-configurations", "def-recursive-and-finite-group-presentations"]
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Joseph J. Rotman, An Introduction to the Theory of Groups, Chapter 12, pp.430\u2013431, sharp notation and Boone presentation"
      url: "https://math.uchicago.edu/~shmuel/lg-readings/Joseph%20J.%20Rotman%2C%20The%20Word%20Problem%20.pdf"
---

## Definition

Use the finite positive presentation $\Gamma$ and its relation notation $F_iq_{a(i)}G_i=H_iq_{b(i)}K_i$ from [[def-boone-machine-semigroup-and-augmented-configurations]]. All generator alphabets below are disjointly tagged.

For a signed tape word $U=s_1^{e_1}\cdots s_m^{e_m}$, $e_j\in\{1,-1\}$, set $U^\#=s_1^{-e_1}\cdots s_m^{-e_m}$. Thus $(UV)^\#=U^\#V^\#$, $(U^\#)^\#=U$, and $\varepsilon^\#=\varepsilon$. A cancellation pair is carried to a cancellation pair; applying $\#$ twice recovers the original pair. Consequently this operation is well-defined on free tape words modulo free cancellation. It is neither reversal nor a claimed operation on the semigroup quotient.

Define $\mathcal B$ by generators $\bar S\sqcup\bar Q\sqcup\{r_i:i\in I\}\sqcup\{x,t,k\}$ and the following relations for every $s\in\bar S$ and $i\in I$:
$$xs=sx^2,\qquad r_i s=sxr_ix,$$
$$r_i^{-1}(F_i^\#q_{a(i)}G_i)r_i=H_i^\#q_{b(i)}K_i,$$
$$tr_i=r_it,\qquad tx=xt,\qquad kr_i=r_ik,\qquad kx=xk,$$
$$k(q^{-1}tq)=(q^{-1}tq)k.$$
Each displayed equation $u=v$ means the relator $uv^{-1}$ in the free-group quotient of [[def-recursive-and-finite-group-presentations]]. Both the generating set and relator list are finite. There are no other defining equations, in particular none commuting state letters with $x$.

A **special word** is the spelled word $\Sigma=X^\#q_jY$, where $X,Y\in\bar S^*$ are positive tape words (empty is allowed) and $q_j\in\bar Q$. Set $\Sigma^*=Xq_jY$, a nonempty positive semigroup word, and
$$W(\Sigma)=k\Sigma^{-1}t\Sigma k^{-1}\Sigma^{-1}t^{-1}\Sigma.$$
The operation $\#$ is on the tape words in this spelling, not on arbitrary elements of $\mathcal B$. For empty tape contexts, $\Sigma=q_j$ and $\Sigma^*=q_j$.

## Source locator

Rotman, Chapter 12, printed pp.430–431, sharp notation and the displayed Boone presentation. Inverses in $W$ reverse the full word; sharp preserves the order of its tape letters.
