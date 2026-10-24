---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/ex-level-one-charge-zero-crystal-through-rank-four-at-e-three.json
  precheck: pass
id: ex-level-one-charge-zero-crystal-through-rank-four-at-e-three
kind: example
title: "The charge-zero level-one crystal through rank four at e = 3"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 21
deps: [def-symmetric-group-level-one-residue-and-partition-label-convention,
       thm-restricted-partition-component-is-the-basic-crystal-in-the-symmetric-group-convention]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Alexander Kleshchev, Representation Theory of Symmetric Groups and Related Hecke Algebras, Bull. AMS 47 (2010) 419-481, arXiv:0909.4844 (complete 66-page survey)"
      url: "https://arxiv.org/pdf/0909.4844"
      locator: "sec. 3.4, printed pp. 18-19 (top-to-bottom i-nodes, reduction of the i-signature by cancelling -+ pairs, good = leftmost surviving -, cogood = rightmost surviving +); Example 3.2(i), printed p. 19 (e-restricted labels for e>0, l=1); Theorem 8.2(ii), printed pp. 37-38"
    - title: "Bernard Leclerc, Fock space representations (complete author-hosted 38-page lecture notes)"
      url: "https://leclercb.users.lmno.cnrs.fr/lectnotes_final.pdf"
      locator: "sec. 3.14, printed pp. 25-26: the n-regular labels give the basic representation, so the rank-by-rank counts of the empty component are the multiplicities of V(Lambda_0); the restricted reading is related by the transpose/sign dictionary"
---
## Example

At $e = 3$, charge $\Lambda_0$, in the symmetric-group convention, the empty
component through rank four has exactly the following vertices, one row per
rank:

- rank $0$: $\varnothing$;
- rank $1$: $(1)$;
- rank $2$: $(2)$ and $(1,1)$;
- rank $3$: $(2,1)$ and $(1,1,1)$;
- rank $4$: $(3,1)$, $(2,2)$, $(2,1,1)$ and $(1,1,1,1)$.

These are exactly the $3$-restricted partitions of each size
($1,1,2,2,4$ of them). The cogood-addition arrows staying within ranks $0$-$4$
are
$$\varnothing \xrightarrow{\tilde f_0} (1); \qquad (1)\xrightarrow{\tilde f_1}(2),\quad (1)\xrightarrow{\tilde f_2}(1,1); \qquad (2)\xrightarrow{\tilde f_2}(2,1);$$
$$(1,1)\xrightarrow{\tilde f_1}(1,1,1); \qquad (2,1)\xrightarrow{\tilde f_0}(2,2),\quad (2,1)\xrightarrow{\tilde f_2}(3,1); \qquad (1,1,1)\xrightarrow{\tilde f_0}(1,1,1,1),\quad (1,1,1)\xrightarrow{\tilde f_1}(2,1,1).$$
All other additions from ranks $0$-$3$ vanish; additions from rank $4$ leaving
the displayed window are omitted, not declared zero. The good-deletion arrows
into the listed ranks are
$$(1)\xrightarrow{\tilde e_0}\varnothing; \qquad (2)\xrightarrow{\tilde e_1}(1),\quad (1,1)\xrightarrow{\tilde e_2}(1);$$
$$(2,1)\xrightarrow{\tilde e_2}(2),\quad (1,1,1)\xrightarrow{\tilde e_1}(1,1); \qquad (2,2)\xrightarrow{\tilde e_0}(2,1),\quad (3,1)\xrightarrow{\tilde e_2}(2,1),\quad (2,1,1)\xrightarrow{\tilde e_1}(1,1,1),\quad (1,1,1,1)\xrightarrow{\tilde e_0}(1,1,1).$$
In particular $(2,1)$ has no arrow of residue $1$ in either direction, and
$(2,1)\xrightarrow{\tilde f_2}(3,1)$ is the arrow whose conjugate is the
quantum-group Fock arrow $\tilde f_1$ from $(2,1)$ to $(2,1,1)$.

## Facts & Assumptions

**Given:** $e = 3$, charge $0$, and the modular signature, restricted-label and transport conventions of [[def-symmetric-group-level-one-residue-and-partition-label-convention]]; $i$-nodes are the addable and removable nodes of residue $i = c-r$.

[F1] The modular reduced $i$-signature lists the $i$-nodes top to bottom, cancels a $-$ above a $+$, and selects the first surviving $-$ as the good removable node and the last surviving $+$ as the cogood addable node; if a sign is missing the corresponding arrow is zero; a selected addition or deletion changes the number of diagram nodes of its residue by $1$ ([[def-symmetric-group-level-one-residue-and-partition-label-convention]]).

[F2] The empty component of the transported Fock crystal is exactly the set of $e$-restricted partitions, with these operators, so the vertices reachable from $\varnothing$ within a rank range are obtained by iterating the selected cogood additions, and a listed absence of a surviving sign is a genuine zero arrow ([[thm-restricted-partition-component-is-the-basic-crystal-in-the-symmetric-group-convention]]).

## Verification

**Proof technique:** direct.

1.1 The vertex list is the list of $3$-restricted partitions by rank. A partition is $3$-restricted when $\lambda_a - \lambda_{a+1} < 3$ for all $a$ (padded by zeros). Rank $0$: $\varnothing$. Rank $1$: $(1)$. Rank $2$: the partitions of $2$ are $(2)$ and $(1,1)$, and both satisfy the inequalities ($2 - 0 = 2 < 3$, and $1 - 1 = 0$, $1 - 0 = 1 < 3$). Rank $3$: the partitions are $(3)$, $(2,1)$, $(1,1,1)$; $(3)$ fails since $3 - 0 = 3$, while $(2,1)$ has $2 - 1 = 1 < 3$ and $(1,1,1)$ has parts differences $0, 1 < 3$. Rank $4$: the partitions are $(4)$, $(3,1)$, $(2,2)$, $(2,1,1)$, $(1,1,1,1)$; $(4)$ fails ($4 - 0 = 4 \ge 3$) and the other four satisfy $3 - 1 = 2 < 3$, $2 - 2 = 0 < 3$, $2 - 1 = 1 < 3$ together with $1 - 1 = 0$, and $0,0,0 < 3$. Hence the displayed list has $1,1,2,2,4$ shapes, and by [F2] these are precisely the component vertices in ranks $0$-$4$. [given, F2]

1.2 The additions from ranks $0$-$2$. Write each signature as the word of signs of the listed nodes and reduce. $\varnothing$: color $0$ has the single addable node $(1,1)$, word $+$, cogood $(1,1)$, hence $\tilde f_0\varnothing = (1)$; colors $1,2$ have no nodes, so those arrows are zero. $(1)$: color $0$ has the removable node $(1,1)$, word $-$ (no cogood, $\tilde f_0 = 0$); color $1$ has the addable node $(1,2)$, word $+$, so $\tilde f_1(1) = (2)$; color $2$ has the addable node $(2,1)$ of residue $-1 \equiv 2$, word $+$, so $\tilde f_2(1) = (1,1)$. $(2)$: color $0$ has no nodes ($\tilde f_0 = \tilde e_0 = 0$); color $1$ has the removable $(1,2)$, word $-$, so $\tilde f_1(2) = 0$ and $\tilde e_1(2) = (1)$; color $2$ has the addable $(1,3)$ and the addable $(2,1)$, both of residue $2$, in the top-to-bottom word $++$, whose last surviving $+$ is $(2,1)$, so $\tilde f_2(2) = (2,1)$ and $\tilde e_2(2) = 0$. $(1,1)$: color $0$ has no nodes; color $1$ has the addables $(1,2)$ and $(3,1)$, word $++$, cogood $(3,1)$, so $\tilde f_1(1,1) = (1,1,1)$; color $2$ has the removable $(2,1)$ of residue $-1 \equiv 2$, word $-$, so $\tilde e_2(1,1) = (1)$ and $\tilde f_2(1,1) = 0$. [given, F1]

2.1 The additions from rank $3$ and the vanishing claims. $(2,1)$: color $0$ has the addable $(2,2)$ (residue $0$), word $+$, so $\tilde f_0(2,1) = (2,2)$; color $1$ has the removable $(1,2)$ and the addable $(3,1)$, top-to-bottom word $-+$, which cancels, so $\tilde f_1 = \tilde e_1 = 0$ and in particular $(2,1)$ has no residue-$1$ arrow; color $2$ has the addable $(1,3)$ above the removable $(2,1)$, word $+-$ with no cancellable pair, so the last surviving $+$ is $(1,3)$, giving $\tilde f_2(2,1) = (3,1)$, and the first surviving $-$ is $(2,1)$, giving $\tilde e_2(2,1) = (2)$. $(1,1,1)$: color $0$ has the addable $(4,1)$ (residue $-3 \equiv 0$), word $+$, so $\tilde f_0(1,1,1) = (1,1,1,1)$; color $1$ has the addable $(1,2)$ above the removable $(3,1)$, word $+-$ with no cancellable pair, so $\tilde f_1(1,1,1) = (2,1,1)$ and $\tilde e_1(1,1,1) = (1,1)$; color $2$ has no nodes. These are all the additions from ranks $0$-$3$ inside the window, and every other color at these vertices has just been shown to have no surviving selected sign, hence a zero arrow. [given, F1, step 1.2]

3.1 The deletions from rank $4$ and the boundary. $(2,2)$: the only removable node is $(2,2)$, of residue $0$ with word $-$, so $\tilde e_0(2,2) = (2,1)$, and there is no removable node of residue $1$ or $2$, so the good deletions $\tilde e_1$ and $\tilde e_2$ are zero; the addable nodes $(1,3)$ of residue $2$ and $(3,1)$ of residue $1$ are each the unique surviving $+$ of their color, so $\tilde f_2$ adds $(1,3)$ and $\tilde f_1$ adds $(3,1)$, both additions leaving rank $5$ and therefore omitted from the displayed window. $(3,1)$: color $2$ has the removables $(1,3)$ and $(2,1)$, both of residue $2$, word $--$, whose first surviving $-$ is $(1,3)$, so $\tilde e_2(3,1) = (2,1)$; color $1$ has the addable $(3,1)$ of residue $1$ and color $0$ the addables $(1,4)$, $(2,2)$ of residue $0$, all with no surviving $-$ for a good deletion and with cogood additions leaving rank $5$. $(2,1,1)$: color $1$ has the removables $(1,2)$ and $(3,1)$, word $--$ of residue $1$, first surviving $-$ equal to $(1,2)$, so $\tilde e_1(2,1,1) = (1,1,1)$; color $0$ has the addables $(2,2)$ and $(4,1)$, whose cogood is $(4,1)$ and leaves rank $5$; color $2$ has the single addable $(1,3)$, leaving rank $5$, and no removable. $(1,1,1,1)$: the only removable node is $(4,1)$ of residue $0$, so $\tilde e_0(1,1,1,1) = (1,1,1)$; the addables $(1,2)$ and $(5,1)$ have residues $1$ and $2$ and lead to rank $5$, so they are omitted rather than declared zero. Finally the conjugate comparison: transposition sends $(3,1)$ to $(2,1,1)$, fixes $(2,1)$, negates residues, so the arrow $(2,1)\xrightarrow{\tilde f_2}(3,1)$ corresponds to the quantum-group arrow $\tilde f_1$ from $(2,1)$ to $(2,1,1)$ with $f_2$ reflecting to $f_{-2} = f_1$. [given, F1, step 2.1] ∎


## Remarks

The rank-by-rank graph below displays the same restricted-label component.
An edge labelled $i$ points downwards for $\tilde f_i$; traversing it upwards
means $\tilde e_i$. The labels are residues modulo $3$, not multiplicities.
Only ranks $0$ through $4$ are drawn: arrows out of rank $4$ are omitted,
not declared zero. The verification above establishes all arrows independently
of this illustration.

```tikz
\begin{tikzpicture}[x=1.15cm,y=1cm,>=stealth, every node/.style={inner sep=4pt}]
\node (v0) at (0,0) {$\emptyset$};
\node (v1) at (0,-1.3) {$(1)$};
\node (v2a) at (-1.8,-2.6) {$(2)$};
\node (v2b) at (1.8,-2.6) {$(1,1)$};
\node (v3a) at (-1.8,-3.9) {$(2,1)$};
\node (v3b) at (1.8,-3.9) {$(1,1,1)$};
\node (v4a) at (-2.9,-5.2) {$(3,1)$};
\node (v4b) at (-0.8,-5.2) {$(2,2)$};
\node (v4c) at (0.9,-5.2) {$(2,1,1)$};
\node (v4d) at (3.1,-5.2) {$(1,1,1,1)$};
\draw[->] (v0) -- node[right] {$0$} (v1);
\draw[->] (v1) -- node[above left] {$1$} (v2a);
\draw[->] (v1) -- node[above right] {$2$} (v2b);
\draw[->] (v2a) -- node[left] {$2$} (v3a);
\draw[->] (v2b) -- node[right] {$1$} (v3b);
\draw[->] (v3a) -- node[left] {$2$} (v4a);
\draw[->] (v3a) -- node[right] {$0$} (v4b);
\draw[->] (v3b) -- node[left] {$1$} (v4c);
\draw[->] (v3b) -- node[right] {$0$} (v4d);
\end{tikzpicture}
```
