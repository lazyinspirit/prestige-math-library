---
id: def-balanced-bracket-word
kind: definition
title: "Balanced bracket words, defined by the recursive grammar"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-finite-words-factor-avoidance-and-prefix-states, def-finite-cardinality, thm-subset-of-a-finite-set, def-power-set, thm-induction-principle, thm-cardinality-of-a-set-of-functions]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "D. Guichard, An Introduction to Combinatorics and Graph Theory, §3.5"
      url: "https://www.whitman.edu/mathematics/cgt_online/cgt.pdf"
pipeline_run: null
---

## Definition

Let $\Sigma:=\{\texttt{(},\texttt{)}\}$ and let
$\Sigma^{*}:=\bigcup_{\ell\in\mathbb{N}}\Sigma^{\ell}$ be the set of all finite
words over $\Sigma$, the words of length $\ell$ being the functions
$\{0,\dots,\ell-1\}\to\Sigma$ ([[def-finite-words-factor-avoidance-and-prefix-states]]).
Write $\varepsilon$ for the empty word and $uv$ for concatenation.

Call a set $X\subseteq\Sigma^{*}$ **grammatical** when $\varepsilon\in X$ and
$\texttt{(}u\texttt{)}v\in X$ for all $u,v\in X$. The set $\Sigma^{*}$ itself is
grammatical, so the family of grammatical subsets is a nonempty subfamily of
$\mathcal{P}(\Sigma^{*})$ ([[def-power-set]]), and we may define

$$\mathcal{B} := \bigcap\{\, X\subseteq\Sigma^{*} : X \text{ is grammatical} \,\},$$

the **balanced bracket words**. Thus $\mathcal{B}$ is itself grammatical, and it is
contained in every grammatical set.

**Structural induction, which is what the definition is for.** If
$X\subseteq\mathcal{B}$ is grammatical then $X=\mathcal{B}$, since $\mathcal{B}$ is
contained in every grammatical set. So to prove that every balanced bracket word
has a property it suffices to prove it for $\varepsilon$ and to prove it for
$\texttt{(}u\texttt{)}v$ whenever it holds for $u$ and for $v$.

**Every nonempty balanced word factors as $\texttt{(}u\texttt{)}v$.** Put
$\mathcal{B}':=\{\varepsilon\}\cup\{\,\texttt{(}u\texttt{)}v : u,v\in\mathcal{B}\,\}$.
Then $\mathcal{B}'\subseteq\mathcal{B}$ because $\mathcal{B}$ is grammatical, and
$\mathcal{B}'$ is itself grammatical: it contains $\varepsilon$, and if
$u,v\in\mathcal{B}'$ then $u,v\in\mathcal{B}$, so
$\texttt{(}u\texttt{)}v\in\mathcal{B}'$ by construction. By the previous paragraph
$\mathcal{B}'=\mathcal{B}$, which is the assertion.

**Lengths.** Every $w\in\mathcal{B}$ has even length: this holds for $\varepsilon$,
and if $u$ and $v$ have even lengths then so does $\texttt{(}u\texttt{)}v$, whose
length is $\lvert u\rvert+\lvert v\rvert+2$. So put, for $n\in\mathbb{N}$,

$$\mathcal{B}_n := \{\, w\in\mathcal{B} : \lvert w\rvert = 2n \,\}.$$

Then $\mathcal{B}_0=\{\varepsilon\}$, since a balanced word of length $0$ is
$\varepsilon$ and $\varepsilon\in\mathcal{B}$; and for every $n$,

$$\mathcal{B}_{n+1} = \bigcup_{i\le n}\{\, \texttt{(}u\texttt{)}v : u\in\mathcal{B}_i,\ v\in\mathcal{B}_{n-i} \,\},$$

by the factorisation clause together with the additivity of lengths. In
particular $\mathcal{B}_1=\{\texttt{()}\}$ and
$\mathcal{B}_2=\{\texttt{(())},\texttt{()()}\}$.

**Each $\mathcal{B}_n$ is finite**, being a subset of the set $\Sigma^{2n}$ of
words of length $2n$, which is finite with $2^{2n}$ elements
([[thm-cardinality-of-a-set-of-functions]], [[thm-subset-of-a-finite-set]],
[[def-finite-cardinality]]).

## Remarks

- **The grammar is the definition, and that is deliberate.** The set could
  instead have been defined by the counting condition — every prefix has at least
  as many $\texttt{(}$ as $\texttt{)}$, with equal totals — and then the theorem
  that follows would be a tautology. Taking the recursive description as the
  definition makes the equivalence of the two descriptions something to prove, and
  it is that equivalence that the counting arguments use.

- **No parser and no stack.** The definition quantifies over subsets of
  $\Sigma^{*}$ and takes an intersection. Nothing about reading a word left to
  right is assumed; the left-to-right characterisation is the content of the next
  item.

- **Why the graded pieces are indexed by half the length.** A balanced word has
  even length, and every count on this page is stated in the number of bracket
  pairs. The displayed recursion for $\mathcal{B}_{n+1}$ is the same shape as the
  first-return decomposition of a Dyck path, which is why the two families have
  the same counts.
