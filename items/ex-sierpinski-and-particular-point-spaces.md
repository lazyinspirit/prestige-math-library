---
id: ex-sierpinski-and-particular-point-spaces
kind: example
title: "Sierpinski space and the particular-point topology, with their closures and their continuous maps"
status: published
origin: session
deps: [def-standard-topologies, def-interior-closure-boundary-top, thm-continuity-characterisations-top,
       def-topological-space, def-dense-top, def-continuous-map-top]
justified_by: []
aliases: []
landmark: false
short: "Sierpinski and particular-point spaces"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Sierpinski space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Sierpi%C5%84ski_space"
    - title: "Particular point topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Particular_point_topology"
pipeline_run: null
---

## Example

Let $X$ be a set, let $p \in X$, and give $X$ the particular-point topology
$\mathcal{T}_p = \{\varnothing\} \cup \{\, U \subseteq X : p \in U \,\}$
([[def-standard-topologies]]). Then, for $A \subseteq X$:

1. **Closed sets.** The closed subsets of $(X, \mathcal{T}_p)$ are $X$ together
   with the sets not containing $p$.
2. **Interior and closure** ([[def-interior-closure-boundary-top]]):
   $$\operatorname{int}(A) = \begin{cases} A & p \in A \\ \varnothing & p \notin A, \end{cases} \qquad \overline{A} = \begin{cases} X & p \in A \\ A & p \notin A. \end{cases}$$
   In particular $\{p\}$ is dense ([[def-dense-top]]) and is the smallest dense
   subset, while $X \setminus \{p\}$ has empty interior.
3. **No two nonempty open sets are disjoint**, since every nonempty open set
   contains $p$.
4. **Sierpinski space is the case of a two-point set.** With $S = \{a,b\}$,
   $a \ne b$, and particular point $b$, the topology is
   $\mathcal{T}_{\mathrm{Sier}} = \{\varnothing, \{b\}, S\}$; here
   $\overline{\{b\}} = S$ and $\overline{\{a\}} = \{a\}$, so $b$ is the open point
   and $a$ the closed point.
5. **Continuous maps into Sierpinski space are exactly the open subsets of the
   source.** For a topological space $Y$, the assignment
   $f \mapsto f^{-1}[\{b\}]$ is a bijection from the set of continuous maps
   $Y \to (S, \mathcal{T}_{\mathrm{Sier}})$ onto the topology of $Y$
   ([[thm-continuity-characterisations-top]]).

## Facts & Assumptions

**Given:** A set $X$ with a point $p \in X$ and the particular-point topology $\mathcal{T}_p$; a subset $A \subseteq X$; the two-point set $S = \{a,b\}$ with $a \ne b$ and particular point $b$; and a topological space $Y$ with topology $\mathcal{T}_Y$.

[A1] $\mathcal{T}_p$ consists of $\varnothing$ together with the subsets of $X$ containing $p$; a set is closed exactly when its complement is open ([[def-standard-topologies]], [[def-topological-space]]).

[A2] $\operatorname{int}(A)$ is the largest open subset of $A$ and $\overline{A}$ the smallest closed superset of $A$ ([[def-interior-closure-boundary-top]]).

[L1] $A$ is dense exactly when $\overline{A} = X$ ([[def-dense-top]]).

[L2] A map is continuous exactly when preimages of open sets are open ([[thm-continuity-characterisations-top]], clause (b), [[def-continuous-map-top]]).

## Verification

**Proof technique:** direct.

1.1 $F \subseteq X$ is closed exactly when $X \setminus F$ is open, that is exactly when $X \setminus F = \varnothing$, giving $F = X$, or $p \in X \setminus F$, that is $p \notin F$; this is claim 1. [A1]

1.2 If $p \in A$ then $A$ is open by [A1], so $\operatorname{int}(A) = A$; if $p \notin A$ then no nonempty open set is contained in $A$, every such set containing $p$, so $\operatorname{int}(A) = \varnothing$. [A1, A2]

1.3 Two nonempty open sets both contain $p$, so their intersection contains $p$ and is nonempty; this is claim 3. [A1]

1.4 For $S = \{a,b\}$ with particular point $b$, the subsets containing $b$ are $\{b\}$ and $S$, so $\mathcal{T}_b = \{\varnothing, \{b\}, S\}$, which is $\mathcal{T}_{\mathrm{Sier}}$. [A1]

2.1 If $p \notin A$ then $A$ is closed by step 1.1, so $\overline{A} = A$; if $p \in A$ then no closed set other than $X$ contains $A$, a closed proper subset omitting $p$ by step 1.1, so $\overline{A} = X$. [step 1.1, A2]

2.2 Let $f : Y \to S$ be any function; by [L2] and step 1.4, $f$ is continuous exactly when $f^{-1}[\varnothing] = \varnothing$, $f^{-1}[S] = Y$ and $f^{-1}[\{b\}]$ are all open in $Y$, and the first two always are; so $f$ is continuous exactly when $f^{-1}[\{b\}] \in \mathcal{T}_Y$. [step 1.4, L2]

3.1 Steps 1.2 and 2.1 give claim 2; in particular $\overline{\{p\}} = X$ makes $\{p\}$ dense by [L1], and it is contained in every dense set, since a set $A$ with $p \notin A$ has $\overline{A} = A \ne X$ whenever $p \notin A$. Also $\operatorname{int}(X \setminus \{p\}) = \varnothing$ by step 1.2. [step 1.2, step 2.1, L1]

3.2 By step 1.4 and step 2.1 applied to $S$: $\overline{\{b\}} = S$ since $b$ is the particular point, and $\overline{\{a\}} = \{a\}$ since $b \notin \{a\}$; this is claim 4. [step 2.1, step 1.4]

3.3 The assignment $f \mapsto f^{-1}[\{b\}]$ of step 2.2 is injective, since $f$ is determined by $f^{-1}[\{b\}]$ — its value is $b$ there and $a$ elsewhere — and surjective onto $\mathcal{T}_Y$, since for $U \in \mathcal{T}_Y$ the function taking the value $b$ on $U$ and $a$ off $U$ is continuous by step 2.2 and has $f^{-1}[\{b\}] = U$; this is claim 5. [step 2.2, L2]

4.1 Claims 1, 2, 3, 4 and 5 are established by step 1.1, step 3.1, step 1.3, step 3.2 and step 3.3 respectively. [step 1.1, step 1.3, step 3.1, step 3.2, step 3.3] ∎

## Remarks

- **Sierpinski space is the smallest space that is not indiscrete and not discrete**, and claim 5 is why it matters: it represents the notion "open set" as a mapping problem, in the same way that a two-element set represents "subset". Every topology on $Y$ is recovered as the set of continuous maps $Y \to S$.

- **The particular-point topology separates points only in the weakest sense.** Any two distinct points are distinguished by an open set: if one of them is $p$, then $\{p\}$ is open and contains $p$ but not the other; and if neither is $p$, then $\{x,p\}$ is open and contains $x$ but not $y$. Nothing stronger holds: by claim 3 no two points lie in disjoint open sets, and by claim 2 the singleton $\{p\}$ is dense, every nonempty open set containing $p$ by definition of the topology, so no open set separates any point from $p$. It is nevertheless first countable, since $\{\{x, p\}\}$ is a one-element neighbourhood base at $x$: any neighbourhood of $x$ contains an open set containing $x$, which contains $p$ as well.

- **A comparison with the cofinite topology.** Both have the property that any two nonempty open sets meet ([[ex-cofinite-topology]]), but the particular-point topology achieves it with a single point doing all the work, and it has non-closed points, which the cofinite topology does not.
