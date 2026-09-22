---
id: lem-corson-stone-obstruction-is-ordinal-boundable
kind: lemma
title: "Corson's Stone obstruction is ordinal boundable"
status: published
origin: pipeline
deps: [def-corson-ordered-rational-permutation-model, lem-corson-rational-metric-not-metacompact, def-boundable-sentence-over-an-atom-set, def-metric-space, def-metacompact-space]
justified_by: []
provenance:
  statement: literature-derived
  proof: literature-derived
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Samuel Corson, The Independence of Stone's Theorem from the Boolean Prime Ideal Theorem"
      url: "https://arxiv.org/pdf/2001.06513"
      locator: "§§2-3, pp. 2-4"
verification:
  audited: 2026-09-22
---

## Statement

The sentence asserting that there is a rational-valued metric space with an
open cover having no point-finite open refining cover is an atom-blind
boundable sentence in the sense of
[[def-boundable-sentence-over-an-atom-set]], with the explicit absolute bound
$\omega + 41$ of the source's Lemma 5.

## Facts & Assumptions

**Given:** Corson's model and the covering failure certified in [[lem-corson-rational-metric-not-metacompact]].

[F1] A formula $\varphi(\vec x)$ is boundable when a fixed absolutely defined ordinal $\alpha$ makes ZFA prove $\varphi(\vec x)\leftrightarrow\varphi^{V_\alpha(\bigcup\vec x)}(\vec x)$; its existential closure is then a boundable sentence ([[def-boundable-sentence-over-an-atom-set]]).

[F2] The metric space is the ordered rational Urysohn space of [[def-corson-ordered-rational-permutation-model]], its metric is rational-valued, and its open cover has no point-finite refinement ([[lem-corson-rational-metric-not-metacompact]], [[def-metric-space]], [[def-metacompact-space]]).

[L1] With the standard set encodings, $\omega\in V_{\omega+1}(\varnothing)$, and successively constructing $(\omega,+)$, $\mathbb Z$, $(\mathbb Z,+)$, $\mathbb Q$, and $(\mathbb Q,+)$ puts $(\mathbb Q,+)$ in $V_{\omega+30}(\varnothing)$. [source, Corson Lemma 5]

[L2] With Kuratowski ordered pairs, each $(x,y)$ for $x,y\in X$ lies in $V_2(X)$, so the set $X\times X$ of all those pairs lies in $V_3(X)$, not necessarily in $V_2(X)$. The larger stated bounds remain valid: the pure rational codebook from [L1] dominates this one-level correction, so a function $d:X\times X\to\mathbb Q$ lies in $V_{\omega+33}(X)$; a family of subsets of $X$ lies in $V_2(X)$; an ordered triple $(X,d,\mathcal U)$ lies in $V_{\omega+37}(X)$; and a function from a natural number into an open cover of $X$ lies in $V_{\omega+41}(X)$. [L1, source, Corson Lemma 5]

## Proof

**Proof technique:** direct.

1.1 Let $\operatorname{Cov}(X,d,\mathcal U)$ say that $d$ is a rational-valued metric on $X$ and $\mathcal U$ is an open cover in its metric topology. Let $\operatorname{Ref}(X,d,\mathcal U,\mathcal V)$ say that both $\mathcal U$ and $\mathcal V$ satisfy $\operatorname{Cov}$ and that $\mathcal V$ refines $\mathcal U$. Let $\operatorname{Inj}(f,Y,Z)$ say that $f$ is an injection from $Y$ into $Z$. These are formulas built only from equality, membership, the carried sets, and the fixed pure rational codebook. [given, F1, F2]

2.1 Define $\Phi(X,d,\mathcal U)$ to be $\operatorname{Cov}(X,d,\mathcal U)$ together with the assertion that for every $\mathcal V\in\mathcal P(\mathcal P(X))$, if $\operatorname{Ref}(X,d,\mathcal U,\mathcal V)$, then some $x\in X$ has the following property: for every $n\in\omega$ there is $f\subseteq n\times\mathcal V$ such that $\operatorname{Inj}(f,n,\mathcal V)$ and $x\in f(m)$ for every $m<n$. Thus $\Phi$ says exactly that $\mathcal U$ has no point-finite open refining cover. [step 1.1]

3.1 The bounds [L1]-[L2] contain every object quantified in step 2.1: candidate covers and refinements lie in the second relative level over $X$, while every finite injection witnessing arbitrarily many members through $x$ lies below level $\omega+41$. Expanding the displayed definitions therefore gives the ZFA theorem $\Phi(X,d,\mathcal U)\leftrightarrow\Phi^{V_{\omega+41}(X\cup d\cup\mathcal U)}(X,d,\mathcal U)$. [step 2.1, L1, L2]

3.2 The formula is atom-blind: its base sort $X$ is used only opaquely through the carried metric, subsets, covers, and finite function graphs; its atomic tests are equality and membership together with the fixed pure rational parameter, and it never tests whether an element of $X$ is an atom or inspects its internal membership structure. [step 1.1, step 2.1]

4.1 By [F1] and step 3.1, the existential closure $\exists X\,\exists d\,\exists\mathcal U\,\Phi(X,d,\mathcal U)$ is boundable with the fixed absolute bound $\omega+41$; step 3.2 supplies the atom-blind typed certificate, and [F2] supplies a witness in Corson's model. [step 3.1, step 3.2, F1, F2] ∎
