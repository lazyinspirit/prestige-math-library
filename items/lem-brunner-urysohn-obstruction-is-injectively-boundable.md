---
id: lem-brunner-urysohn-obstruction-is-injectively-boundable
kind: lemma
title: "The Läuchli Urysohn obstruction is injectively boundable"
status: published
origin: pipeline
deps: [def-boundable-sentence-over-an-atom-set, lem-brunner-choice-and-urysohn-obstructions, def-brunner-ordered-lauchli-permutation-models, def-normal-and-t4-spaces, def-continuous-map-top, def-topological-space]
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Norbert Brunner, Geordnete Läuchli Kontinuen"
      url: "https://matwbn.icm.edu.pl/ksiazki/fm/fm117/fm11718.pdf"
      locator: "§§1-3, printed pp. 67-73"
    - title: "Eleftherios Tachtsis, The Boolean prime ideal theorem does not imply the extension of almost disjoint families to MAD families"
      url: "https://www.impan.pl/shop/en/publication/transaction/download/product/114057"
      locator: "Definitions 5.2-5.3 and Fact 5.4, printed pp. 110-111"
verification:
  audited: 2026-09-22
---

## Statement

Let $T$ be the sentence asserting that there are a topological space
$(X,\tau)$ and disjoint closed sets $E_0,E_1\subseteq X$ such that $X$ is normal
and no continuous $f:X\to\mathbb R$ satisfies $f[E_0]\subseteq\{0\}$ and
$f[E_1]\subseteq\{1\}$. The sentence $T$ is boundable, hence injectively
boundable, and it admits an **atom-blind typed transfer certificate** in the
sense of [[def-boundable-sentence-over-an-atom-set]]. A fixed absolute bound
below $\omega+\omega$ captures all subsets of $X$, members of $\tau$, and
candidate real-valued function graphs. Brunner's ordered continuum is a witness
to $T$ in each of the two permutation models.

## Facts & Assumptions

**Given:** The ordered Läuchli continuum $L$ of [[def-brunner-ordered-lauchli-permutation-models]], its two endpoint closed sets, and the failure of Urysohn's lemma in the two models of [[lem-brunner-choice-and-urysohn-obstructions]].

[F1] Boundable sentences over an atom set: a formula is boundable only when it is provably equivalent, uniformly in ZFA, to its relativisation to $V_\alpha(\bigcup \vec x)$ for a fixed absolutely defined ordinal $\alpha$; a syntactic restriction alone is insufficient ([[def-boundable-sentence-over-an-atom-set]]).

[F2] The space $L$ is a compact linearly ordered normal space with two distinct closed endpoint singletons, and every continuous real-valued function on it is constant ([[lem-brunner-choice-and-urysohn-obstructions]], [[def-normal-and-t4-spaces]], [[def-continuous-map-top]]).

[F3] Every boundable statement is, up to equivalence, injectively boundable (Pincus's Fact 5.4 as reproduced in the cited Tachtsis paper).

[L1] For the parameter tuple $(X,\tau,E_0,E_1)$ put $B=X\cup\tau\cup E_0\cup E_1$. Then $X,\tau,E_0,E_1$ and every subset of $X$ lie in $V_1(B)$. The canonical pure codes for $\mathbb R$, its topology, $0$ and $1$, and every graph $f\subseteq X\times\mathbb R$ lie in $V_{\omega+n}(B)$ for one fixed finite $n$: ordered-pair and graph coding adds only finitely many power-set iterations. Hence all of them lie below $V_{\omega+\omega}(B)$ ([[def-boundable-sentence-over-an-atom-set]]).

## Proof

**Proof technique:** direct.

1.1 Let $\Phi(X,\tau,E_0,E_1)$ be the following fixed membership-language formula: $\tau\subseteq\mathcal P(X)$ is a topology; $E_0,E_1\subseteq X$ are disjoint, nonempty and closed; every two disjoint closed subsets $C,D\subseteq X$ are contained in disjoint members of $\tau$; and there is no function graph $f\subseteq X\times\mathbb R$ whose inverse image of every open subset of $\mathbb R$ belongs to $\tau$ and which takes the constant values $0$ on $E_0$ and $1$ on $E_1$. This says exactly that $(X,\tau)$ is normal and the specified closed pair has no Urysohn separator. [F2]

2.1 To establish boundability it suffices to prove the uniform ZFA equivalence between $\Phi$ and its relativisation to the fixed segment $V_{\omega+\omega}(B)$. [step 1.1, F1, suffices: uniform relativisation]

2.2 Expand the abbreviations in step 1.1. The topology axioms quantify over members and subfamilies of $\tau$; closedness and normality quantify over subsets of $X$ and members of $\tau$; the function condition quantifies over ordered-pair graph entries; and continuity quantifies over the fixed pure real topology and subsets of $X$ obtained as graph preimages. Every one of these domains is contained in the relative segment of [L1]. Consequently ZFA proves
$$\Phi(X,\tau,E_0,E_1)\ \longleftrightarrow\ \Phi^{V_{\omega+\omega}(B)}(X,\tau,E_0,E_1).$$
For the forward implication, every quantified object in the expanded formula is present in the segment by step 1.1 and [L1], so restricting the quantifiers loses no candidate closed set, normality witness, real open set, or function graph. For the reverse implication the same domain equalities show that each restricted universal quantifier ranges over the entire bounded sort named in the unrestricted formula, and each restricted existential witness is an actual member of that sort. Thus the two formulas have identical bounded domains, uniformly in every ZFA universe. [step 1.1, step 2.1, L1, F1]

3.1 The relativised formula is atom-blind: its only atomic tests are equality and membership among the carried sorts and the fixed pure real codebook. Points of $X$ are treated opaquely; the formula never asks whether a point is an atom or examines any members it may have outside the carried incidence structure. Therefore the same typed formula describes a normal space and a failed separator after an atom-to-set embedding. [step 1.1, step 2.2, L1, F1]

4.1 By step 2.2 and [F1], the existential closure of $\Phi$ is boundable with the fixed absolute bound $\omega+\omega$; by [F3] it is injectively boundable, and step 3.1 supplies the atom-blind typed certificate. In each Läuchli model, take $X=L$, $\tau$ its order topology and $E_0=\{a\}$, $E_1=\{b\}$. They satisfy $\Phi$ by [F2], because a separator would be a nonconstant continuous real-valued map. [step 1.1, step 2.2, step 3.1, F1, F2, F3, discharge-construct] ∎


## Remarks

- **Why a certificate is needed at all.** The transfer theorem used below accepts a sentence together with an absolute bound and a typed incidence structure; without the certificate the transfer step would have to be taken on trust. The certificate produced here is the one the Pincus and Jech–Sochor interfaces consume.

- **What the certificate does not say.** It speaks only of the carried continuum and its separating functions; it asserts nothing about the rest of the permutation model, and in particular it does not certify countable choice or BPI, which are transferred through the separate exceptional clauses.
