---
id: def-boundable-sentence-over-an-atom-set
kind: definition
title: Boundable sentences over an atom set
status: draft
origin: pipeline
deps: [def-zfa-universe-atoms-and-kernel, def-power-set, def-coded-first-order-zf-theory]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - {title: "Jech, The Axiom of Choice, Chapter 6 Problem 1, p. 95", url: "https://gwern.net/doc/math/1973-jech-theaxiomofchoice.pdf"}
---

## Definition

For a set $X$, define the relative hierarchy by

$$V_0(X)=X,\qquad V_{\alpha+1}(X)=V_\alpha(X)\cup\mathcal P(V_\alpha(X)),\qquad V_\lambda(X)=\bigcup_{\alpha<\lambda}V_\alpha(X).$$

For a finite tuple of sets $\vec x=(x_0,\ldots,x_{k-1})$, put $\bigcup\vec x=x_0\cup\cdots\cup x_{k-1}$. The free variables here range over sets, not bare atoms; atoms can still occur as members of those sets and in quantified tests. A formula $\varphi(\vec x)$ is **boundable** when there is a fixed ordinal $\alpha$, given by an absolute definition, such that ZFA proves

$$\varphi(\vec x)\quad\longleftrightarrow\quad\varphi^{V_\alpha(\bigcup\vec x)}(\vec x).$$

where the superscript means that every quantifier is relativized to the displayed relative-rank segment. A sentence is boundable when it is the existential closure $\exists\vec x\,\varphi(\vec x)$ of such a formula. Thus syntactically bounding the quantifiers is not alone sufficient: the displayed equivalence must be provable uniformly in ZFA. After tuple, ordered-pair, relation, and function encodings are expanded, a fixed finite stack of power sets is a common way to prove this equivalence.

For example, “there is a countable family of pairs without a choice function” is boundable: witnesses code the family and its $\omega$-enumeration; pair membership and a proposed choice graph live within finitely many power-set iterates, yielding the required ZFA-provable relativization equivalence. This does not make the full Axiom of Choice, arbitrary sentences, or unrestricted conjunctions boundable.

Relative-rank boundability alone gives no ZFA-to-ZF transfer. The broad syntax can test whether an object is an atom or has no members; such tests need not be preserved when atoms are replaced by sets. Transfer requires an additional typed certificate: all quantifiers range over named carried sorts, the base sort is opaque, and every atomic incidence and any pure parameter are preserved. An existential sentence follows only after its transported typed witness implies the target sentence. The certificate must also bound every possible choice graph, not just the given family. A hierarchy based only on the atom set needs an ordinal height such as $\omega+\omega$ to contain the pure $\omega$ and all its graph codes; the finite-stack observation above uses the already supplied family and enumeration parameters.
