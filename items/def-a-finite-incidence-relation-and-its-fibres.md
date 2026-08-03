---
id: def-a-finite-incidence-relation-and-its-fibres
kind: definition
title: "A relation $R \\subseteq X \\times Y$ between finite sets, its row fibres $R_x$ and its column fibres $R^y$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-finite-cardinality, thm-subset-of-a-finite-set, thm-product-rule,
       def-injection-surjection-bijection, def-countable]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  verified:
    model: claude-fable-5
    verdict: certify
    date: 2026-07-29
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Double counting (proof technique) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Double_counting_(proof_technique)"
    - title: "R. Stanley, Enumerative Combinatorics, Vol. 1, Ch. 1"
      url: "https://en.wikipedia.org/wiki/Enumerative_Combinatorics"
pipeline_run: null
---

## Definition

Let $X$ and $Y$ be finite sets ([[def-countable]], [[def-finite-cardinality]])
and let $R \subseteq X \times Y$ be a relation between them. For $x \in X$ and
$y \in Y$ set

$$R_x := \{\, y \in Y \ :\ (x,y) \in R \,\}, \qquad R^{y} := \{\, x \in X \ :\ (x,y) \in R \,\},$$

the **row fibre** of $R$ at $x$ and the **column fibre** of $R$ at $y$.

```tikz
\begin{tikzpicture}
  \node at (0,3.0) {$X$};
  \node at (4.8,3.0) {$Y$};
  \node[draw,circle,inner sep=2pt] (x1) at (0,2.2) {$x_1$};
  \node[draw,circle,very thick,inner sep=2pt] (x2) at (0,1.1) {$x_2$};
  \node[draw,circle,inner sep=2pt] (x3) at (0,0) {$x_3$};
  \node[draw,circle,inner sep=2pt] (y1) at (4.8,2.2) {$y_1$};
  \node[draw,circle,very thick,inner sep=2pt] (y2) at (4.8,1.1) {$y_2$};
  \node[draw,circle,inner sep=2pt] (y3) at (4.8,0) {$y_3$};
  \draw (x1) -- (y1);
  \draw (x1) -- (y2);
  \draw (x2) -- (y2);
  \draw (x2) -- (y3);
  \draw (x3) -- (y1);
  \node at (2.4,-0.75) {Sample: $R_{x_2}=\{y_2,y_3\}$ and $R^{y_2}=\{x_1,x_2\}$.};
\end{tikzpicture}
```

**(a) Everything here is finite.** $X \times Y$ is finite ([[thm-product-rule]],
clause 1), so $R$ is finite as a subset of it, and $R_x \subseteq Y$ and
$R^{y} \subseteq X$ are finite as subsets of finite sets
([[thm-subset-of-a-finite-set]], clause 1). Hence $\lvert R\rvert$,
$\lvert R_x\rvert$ and $\lvert R^{y}\rvert$ are all defined, and each is a
natural number ([[def-finite-cardinality]]).

**(b) The fibres are the slices of $R$, up to a bijection.** For $x \in X$,

$$R \cap (\{x\} \times Y) \;=\; \{x\} \times R_x ,$$

since $(u,v)$ lies in the left-hand side exactly when $u = x$, $v \in Y$ and
$(x,v) \in R$, that is exactly when $u = x$ and $v \in R_x$. The map
$y \mapsto (x,y)$ is a bijection of $R_x$ onto $\{x\} \times R_x$, its two-sided
inverse being the second-coordinate map ([[def-injection-surjection-bijection]]),
so $\lvert\{x\} \times R_x\rvert = \lvert R_x\rvert$ by the transport clause (c)
of [[def-finite-cardinality]]. Symmetrically
$R \cap (X \times \{y\}) = R^{y} \times \{y\}$ and
$\lvert R^{y} \times \{y\}\rvert = \lvert R^{y}\rvert$.

**(c) The slices partition $R$.** The sets $\{x\} \times R_x$, for $x \in X$, are
pairwise disjoint, because a point of $\{x\} \times R_x$ has first coordinate
$x$; and their union is $R$, because every $(u,v) \in R$ has $u \in X$ and
$v \in R_u$. Symmetrically the sets $R^{y} \times \{y\}$, for $y \in Y$, are
pairwise disjoint with union $R$.

**(d) Neighbours.** When $X = Y$ and $R$ is **symmetric** ($(x,y) \in R$ implies
$(y,x) \in R$) and **irreflexive** ($(x,x) \notin R$ for every $x$), $R_x = R^{x}$
and this common set is called the set of **neighbours** of $x$; it is a subset of
$X \setminus \{x\}$.

## Remarks

- **A relation, not a matrix.** The object counted here is a subset of a product
  of two finite sets. Nothing about arrays, entries or indices by position is
  used, and the two fibre families are the only structure the counting arguments
  need.

- **No graph vocabulary.** Clause (d) fixes the words *symmetric*, *irreflexive*
  and *neighbour* for a relation on a single finite set. Nothing among this
  page's declared prerequisites defines a graph, and none of the results stated
  with clause (d) needs one.

- **Both fibre families are indexed by a finite set**, which is what lets the
  cardinalities be summed at all: a sum over a finite index set is defined only
  when the index set is finite ([[def-sum-over-a-finite-index-set]]).
