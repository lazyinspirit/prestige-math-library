---
id: def-hh-coxeter-matrix-word-group-and-length
kind: definition
title: "Coxeter matrices, the presented Coxeter group, reduced words, length, and standard parabolic subgroups"
status: draft
origin: pipeline
dependency_level: 0
deps: [def-alphabet-words-and-reduction, def-free-group, thm-reduced-words-form-the-free-group, def-group-presentation, def-relators-relations-and-finite-presentations, prop-normal-closure-is-products-of-conjugates, thm-von-dyck, prop-equality-of-words-in-a-presentation, def-normal-closure, def-quotient-group, thm-quotient-group-universal-property, def-group-homomorphism, def-generated-subgroup, def-group, def-group-power, def-natural-numbers, thm-well-ordering-principle]
justified_by: [thm-hh-coxeter-exchange-deletion-and-faithfulness, thm-hh-parabolic-minimal-representatives-and-length-additivity]
aliases: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
proof_strategy: definition
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: "George Lusztig, Hecke Algebras with Unequal Parameters (revised 2014 book text, arXiv:math/0208154v2)"
      url: "https://arxiv.org/pdf/math/0208154"
    - title: "Michael W. Davis, The Geometry and Topology of Coxeter Groups (Princeton University Press 2008; author's complete PDF)"
      url: "https://people.math.osu.edu/davis.12/davisbook.pdf"
---

## Definition

Let $S$ be a finite set and let $m:S\times S\to\{1,2,3,\dots\}\cup\{\infty\}$ satisfy $m(s,s)=1$ for all $s\in S$ and $m(s,t)=m(t,s)\in\{2,3,\dots\}\cup\{\infty\}$ for all $s\ne t$. Such an $m$ is a **Coxeter matrix** on $S$.

**The presented group.** Let $R\subseteq F(S)$ be the set of relators
$$R:=\{s^2:s\in S\}\cup\{(st)^{m(s,t)}:s,t\in S,\ m(s,t)<\infty\},$$
where $F(S)$ is the free group on $S$ ([[def-free-group]], [[thm-reduced-words-form-the-free-group]]) and $(st)^k$ is the $k$-fold product ([[def-group-power]]), and let $N:=\langle\!\langle R\rangle\!\rangle_{F(S)}$ be the normal closure of $R$ in $F(S)$ ([[def-normal-closure]], [[prop-normal-closure-is-products-of-conjugates]]). Define
$$W:=F(S)/N,$$
and write $s$ (as well as $sN$) for the image of $s\in S$ in $W$ ([[def-quotient-group]], [[def-group]]).

**Universal property.** For every group $G$ and every map $f:S\to G$ with $f(s)^2=1$ for all $s\in S$ and $(f(s)f(t))^{m(s,t)}=1$ in $G$ for all $s\ne t$ with $m(s,t)<\infty$, there is a unique group homomorphism $\varphi:W\to G$ with $\varphi(s)=f(s)$ for all $s\in S$ ([[def-group-homomorphism]], [[thm-quotient-group-universal-property]], [[thm-von-dyck]], [[def-group-presentation]], [[def-relators-relations-and-finite-presentations]], [[prop-equality-of-words-in-a-presentation]]).

**Length and reduced words.** For $w\in W$ put
$$\ell(w):=\min\{k\in\mathbb{N}:\ \text{there exist }s_1,\dots,s_k\in S\text{ with }w=s_1\cdots s_k\}.$$
The minimum exists: every element of the free group $F(S)$ is represented by a finite word in $S\cup S^{-1}$ ([[def-alphabet-words-and-reduction]]), and $s^{-1}=s$ in $W$ because $s^2\in R$, so every element of $W$ is the value of a finite word in $S$; the set of admissible $k\in\mathbb{N}$ is therefore nonempty and has a least element by the well-ordering principle ([[thm-well-ordering-principle]], [[def-natural-numbers]]). A word $(s_1,\dots,s_k)$ in $S$ is a **reduced expression** of $w$ when $w=s_1\cdots s_k$ and $k=\ell(w)$, and **nonreduced** otherwise. The empty word $(\;)$ is a word in $S$ of length $0$, and $\ell(1)=0$; it is the reduced expression of $1$.

**Terminology.** The pair $(W,S)$ is the **Coxeter system** presented by the Coxeter matrix $(S,m)$; when $s\mapsto s$ is understood, we also say that $W$ is the Coxeter group presented by $(S,m)$.

**Standard parabolic subgroups.** For $J\subseteq S$ put $W_J:=\langle\{s:s\in J\}\rangle\le W$ ([[def-generated-subgroup]]).

**Conventions.** $m(s,t)$ is declared to be the order of $st$ in $W$; a value $m(s,t)=\infty$ imposes no relator on $s,t$. This definition asserts no finiteness, faithfulness, or completeness property of the presentation: the statements that the elements $s\in S$ are pairwise distinct in $W$ (so that $S$ may be viewed as a labelled subset of $W$), that $\ell(s)=1$, that a word is reduced exactly when it admits no two-letter deletion, and that $(W_J,J)$ is the Coxeter system presented by the restricted matrix $m|_J$ with intrinsic length equal to the ambient length are recorded with their justifiers below and are not used before those results.

## Remarks

The properties announced in the Conventions paragraph are supplied later in this pair: pairwise distinctness of the simple generators, $\ell(s)=1$, and the deletion characterisation of reduced words in [[thm-hh-coxeter-exchange-deletion-and-faithfulness]]; the intrinsic presentation and length of the standard parabolic subgroups in [[thm-hh-parabolic-minimal-representatives-and-length-additivity]]. Until those results are available, $W$ and $\ell$ are to be read exactly as constructed above.

No form of choice is used in the construction: $W$ is the quotient of the free group on the finite set $S$ by an explicitly generated normal closure, and the only minimisation in the definition is over a nonempty set of natural numbers.
