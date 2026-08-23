---
id: lem-closure-in-an-ultrafilter-algebra-topology
kind: lemma
title: "Under the ultrafilter lemma, closure in an ultrafilter-algebra topology is the image of ultrafilters containing the set"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-topology-induced-by-an-ultrafilter-algebra, lem-the-open-sets-induced-by-an-ultrafilter-algebra-form-a-topology, def-interior-closure-boundary-top, def-the-ultrafilter-endofunctor-unit-and-multiplication, thm-ultrafilter-characterisation, def-ultrafilter-extension-principle]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Goubault-Larrecq, Algebras of filter-related monads: I. Ultrafilters and Manes' theorem, Lemma A"
      url: "https://topology.lmf.cnrs.fr/algebras-of-the-filter-related-monads-i-ultrafilters-and-manes-theorem/"
pipeline_run: null
---

## Statement

Assume UL/BPI. Let $\xi:\beta X\to X$ be an ultrafilter algebra, give $X$ its induced topology, and put

$$\widehat A:=\{\mathcal U\in\beta X:A\in\mathcal U\}.$$

Then for every $A\subseteq X$,

$$\overline A=\xi[\widehat A].$$

## Facts & Assumptions

**Given:** UL/BPI, an ultrafilter algebra $\xi:\beta X\to X$, its induced topology, and a subset $A\subseteq X$.

[L1] The closure of $A$ is the smallest closed subset containing $A$ ([[def-interior-closure-boundary-top]]).

[L2] The ultrafilter extension principle says that every filter on a set is contained in an ultrafilter on that set ([[def-ultrafilter-extension-principle]]).

[L3] Flattening satisfies $B\in\mu_X(\mathbb W)$ exactly when $\widehat B\in\mathbb W$ ([[def-the-ultrafilter-endofunctor-unit-and-multiplication]]).

[L4] An ultrafilter contains exactly one of $C$ and $X\setminus C$ for every $C\subseteq X$ ([[thm-ultrafilter-characterisation]]).

## Proof

**Proof technique:** direct.

1.1 If $x\in A$, its principal ultrafilter contains $A$ and the algebra unit law gives $\xi(\eta_X(x))=x$. Hence $A\subseteq\xi[\widehat A]$; when $A=\varnothing$, no ultrafilter contains it and both sides of this inclusion are empty. [given, construct]

1.2 A set $C\subseteq X$ is induced-closed exactly when every ultrafilter containing $C$ has its algebra value in $C$: this is the complement of the defining induced-open implication, using [L4]. [L4, algebra]

2.1 Put $C=\xi[\widehat A]$ and fix an ultrafilter $\mathcal V$ with $C\in\mathcal V$. On $\beta X$, the family consisting of $\widehat A$ and all $\xi^{-1}[B]$ for $B\in\mathcal V$ has the finite-intersection property: for a finite intersection $B$ of members of $\mathcal V$, choose $x\in B\cap C$ and then an ultrafilter in $\widehat A$ mapping to $x$. By [L2], extend this family to an ultrafilter $\mathbb W$ on $\beta X$. [step 1.2, L2, choose]

3.1 Since $\widehat A\in\mathbb W$, [L3] gives $A\in\mu_X(\mathbb W)$. Since every $\xi^{-1}[B]$ with $B\in\mathcal V$ lies in $\mathbb W$, maximality gives $\beta(\xi)(\mathbb W)=\mathcal V$. The algebra multiplication law yields $\xi(\mathcal V)=\xi\mu_X(\mathbb W)\in\xi[\widehat A]=C$. Thus $C$ is induced-closed by step 1.2. [step 2.1, L3, algebra]

4.1 If $D$ is any induced-closed superset of $A$, every ultrafilter containing $A$ contains $D$, so step 1.2 gives $\xi[\widehat A]\subseteq D$. By steps 1.1 and 3.1, $\xi[\widehat A]$ is itself a closed superset of $A$, hence it is the closure by [L1]. This also gives $\overline\varnothing=\varnothing$. [step 1.1, step 3.1, L1] ∎
