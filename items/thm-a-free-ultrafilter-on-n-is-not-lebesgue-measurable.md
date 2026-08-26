---
id: thm-a-free-ultrafilter-on-n-is-not-lebesgue-measurable
kind: theorem
title: "A free ultrafilter on $\\mathbb{N}$, viewed as a subset of $\\{0,1\\}^{\\mathbb{N}}$ and hence of $[0,1]$, is not Lebesgue measurable"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-finite-binary-digit-changes-do-not-alter-zero-one-measure,
       thm-ultrafilter-characterisation, def-ultrafilter, lem-countable-sets-are-null,
       thm-lebesgue-measure-of-a-box-of-every-kind, thm-lebesgue-outer-measure-and-measurability-are-translation-invariant,
       thm-lebesgue-measure-under-dilations-and-reflections,
       def-countable-choice]
justified_by: []
aliases: []
landmark: true
proof_strategy: contradiction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jacek Cichoń, Aleksander Kharazishvili, and Bogdan Węglorz, Subsets of the Real Line, Theorem 8.13"
      url: "https://ki.pwr.edu.pl/cichon/Materialy/BOOK.pdf"
    - title: "S. Sierpiński, Sur un problème concernant les ensembles mesurables superficiellement, Fund. Math. 1 (1920)"
      url: "https://eudml.org/doc/212823"
pipeline_run: null
---

## Statement

Assume the Axiom of Countable Choice. Let $\mathcal{U}$ be a free ultrafilter on
$\mathbb{N}$, let $D$ be the dyadic rationals in $[0,1]$, and put
$X:=[0,1]\setminus D$. Every $x\in X$ has a unique binary expansion
$x=0.b_0b_1b_2\ldots$; write $S_x:=\{n\in\mathbb N:b_n=1\}$. Define

$$E_{\mathcal{U}}:=\{\,x\in X:S_x\in\mathcal U\,\}.$$

Then $E_{\mathcal{U}}$ is not Lebesgue measurable. This is what the title means
by viewing $\mathcal{U}$ as a subset of $\{0,1\}^{\mathbb{N}}$ and hence of
$[0,1]$: the dyadic ambiguity is removed on the null set $D$.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, a free ultrafilter $\mathcal{U}$ on $\mathbb{N}$, and the associated sets $D$, $X$, and $E_{\mathcal{U}} \subseteq X$.

[L1] A measurable subset of $[0,1]$ that is invariant under changing finitely many binary digits has measure $0$ or $1$ ([[lem-finite-binary-digit-changes-do-not-alter-zero-one-measure]]).

[L2] In an ultrafilter on a set $X$, for every $A \subseteq X$ exactly one of $A$ and $X \setminus A$ lies in the ultrafilter ([[thm-ultrafilter-characterisation]]).

[L3] A free ultrafilter is a non-principal ultrafilter ([[def-ultrafilter]]).

[L4] Every at most countable subset of $\mathbb{R}$ has measure zero ([[lem-countable-sets-are-null]]).

[L5] Assuming countable choice, every interval with any endpoint convention is Lebesgue measurable with its usual length ([[thm-lebesgue-measure-of-a-box-of-every-kind]]).

[L6] Assuming countable choice, Lebesgue outer measure, Lebesgue measurability and Lebesgue measure are unchanged by translation ([[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]]).

[L7] Assuming countable choice, reflection in the origin preserves Lebesgue measurability and Lebesgue measure ([[thm-lebesgue-measure-under-dilations-and-reflections]]).

## Proof

**Proof technique:** contradiction.

1.1 No singleton belongs to $\mathcal{U}$: if $\{n\} \in \mathcal{U}$, then every set containing $n$ lies in $\mathcal{U}$ by upward closure, and [L2] excludes every set omitting $n$, so $\mathcal{U}$ is principal at $n$, contradicting [L3]. Consequently no finite set belongs to $\mathcal{U}$, by induction on the size of the finite set using [L2] and the implication $A \cup B \in \mathcal{U} \Rightarrow A \in \mathcal{U}$ or $B \in \mathcal{U}$. Therefore every cofinite subset of $\mathbb{N}$ belongs to $\mathcal{U}$. [L2, L3, algebra]

2.1 If $A,B \subseteq \mathbb{N}$ differ by finitely many points, then $A \in \mathcal{U}$ if and only if $B \in \mathcal{U}$. Indeed, with $F := \mathbb{N} \setminus (A \triangle B)$, step 1.1 gives $F \in \mathcal{U}$; if $A \in \mathcal{U}$ then $A \cap F = B \cap F \in \mathcal{U}$, hence $B \in \mathcal{U}$ by upward closure, and the converse is symmetric. A binary expansion represents a dyadic point exactly when it is eventually $0$ or eventually $1$, and finite digit changes preserve that property. Thus two points represented by expansions differing at finitely many indices are either both in $D$, hence both outside $E_{\mathcal U}$, or both in $X$, where their unique expansions give sets with finite symmetric difference. Therefore $E_{\mathcal U}$ is invariant under changing finitely many binary digits. [step 1.1, L2, algebra]

3.1 Suppose, for contradiction, that $E_{\mathcal{U}}$ is Lebesgue measurable. Then step 2.1 and [L1] give $\lambda(E_{\mathcal{U}})\in\{0,1\}$. [step 2.1, L1, assume-contra]

4.1 The set $D$ is countable, hence null by [L4]. For $x\in X$, the unique binary expansion of $r(x):=1-x$ is obtained by complementing every digit, so $S_{r(x)}=\mathbb N\setminus S_x$. Therefore $r$ maps $X$ to itself and [L2] gives $x\in E_{\mathcal U}$ if and only if $r(x)\notin E_{\mathcal U}$. For measurable $M\subseteq X$, one has $r[M]=(-M)+1$, so reflection invariance [L7] followed by translation invariance [L6] gives $\lambda(r[M])=\lambda(M)$. Applying this to $M=E_{\mathcal U}$ and using $\lambda(D)=0$ and $\lambda([0,1])=1$ from [L5] yields $$\lambda(E_{\mathcal U})=\lambda(r[E_{\mathcal U}])=\lambda(X\setminus E_{\mathcal U})=1-\lambda(E_{\mathcal U}),$$ so $\lambda(E_{\mathcal U})=1/2$. [step 3.1, L2, L4, L5, L6, L7]

5.1 The value $1/2$ from step 4.1 contradicts the dichotomy of step 3.1. Therefore $E_{\mathcal{U}}$ is not Lebesgue measurable. [step 3.1, step 4.1, discharge-contradiction] ∎
