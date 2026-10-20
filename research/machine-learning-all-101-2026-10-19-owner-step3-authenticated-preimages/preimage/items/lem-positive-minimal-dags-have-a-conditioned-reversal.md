---
id: lem-positive-minimal-dags-have-a-conditioned-reversal
kind: lemma
title: "Distinct positive minimal ANM DAGs contain a conditionally reversible edge"
status: draft
dependency_level: 3
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
deps:
  - def-additive-noise-model
  - def-d-separation-in-a-dag
  - lem-anm-joint-density
  - lem-anm-noise-independent-of-nondescendants
  - lem-anm-parent-dependence-persists-under-conditioning
  - lem-active-routes-in-a-finite-dag-have-active-paths
  - lem-anm-density-factorization-implies-dsep-conditional-independence
  - thm-lebesgue-outer-measure-and-measurability-are-translation-invariant
proof_strategy: direct
axiom_use: "All graph operations and choices are over finite sets. The density factorization uses Tonelli and finite products, so no choice axiom is required."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jonas Peters, Joris Mooij, Dominik Janzing, and Bernhard Schölkopf, Causal Discovery with Continuous Additive Noise Models, Proposition 29(i) and Appendix A.12"
      url: "https://jmlr.org/papers/volume15/peters14a/peters14a.pdf"
    - title: "Jonas Peters, Joris Mooij, Dominik Janzing, and Bernhard Schölkopf, Causal Discovery with Continuous Additive Noise Models, Appendix A.10, Lemma 38"
      url: "https://jmlr.org/papers/volume15/peters14a/peters14a.pdf"
---

## Statement

Let two finite causally sufficient additive-noise models on distinct DAGs
with the same vertex set have the same observational law, a strictly positive
joint density, and causal minimality in each model. If their DAGs are $G$ and $G'$, then there
are vertices $y,l$ and a set $S$ such that $y\to l$ in $G$, $l\to y$ in $G'$, and
$$\operatorname{pa}_G(l)\setminus\{y\}\subseteq S\subseteq \operatorname{nd}_G(l)\setminus\{y\},\qquad \operatorname{pa}_{G'}(y)\setminus\{l\}\subseteq S\subseteq \operatorname{nd}_{G'}(y)\setminus\{l\}.$$

## Statement references

[[def-additive-noise-model|Finite causally sufficient ANM models and causal minimality]]

[[def-d-separation-in-a-dag|Parents, children, descendants, and nondescendants in a finite DAG]]

[[lem-anm-joint-density|Positive product density of a finite additive-noise model]]

## Facts & Assumptions

**Given:** Two different finite causally sufficient ANM DAGs with a common strictly positive observational density, and causal minimality in both.

[F1] Each noise density is normalized and positive, and each model has the positive product density of its shifted noise densities. [[def-additive-noise-model]] [[lem-anm-joint-density]]

[F2] Each ANM noise is independent of every finite vector of its nondescendants. [[lem-anm-noise-independent-of-nondescendants]]

[F3] In a positive-density causally minimal ANM, every edge $i\to j$ remains conditionally dependent for every $S$ with $\operatorname{pa}(j)\setminus\{i\}\subseteq S\subseteq\operatorname{nd}(j)\setminus\{i\}$. The conditional-independence convention is the marginal-density factorization from that supplier. [[lem-anm-parent-dependence-persists-under-conditioning]]

[F4] A path is active given a conditioning set exactly when each noncollider is outside the set and each collider has a descendant in it. [[def-d-separation-in-a-dag]]

[F5] Every active finite route between distinct endpoints outside a conditioning set contains an active path with the same endpoints. [[lem-active-routes-in-a-finite-dag-have-active-paths]]

[F6] If a set d-separates two vertex sets in a finite ANM with positive product density, their marginal densities satisfy the conditional-independence factorization almost everywhere. [[lem-anm-density-factorization-implies-dsep-conditional-independence]]

[F7] A fixed real translation preserves the integral of a nonnegative Lebesgue-measurable function. [[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]]

## Proof

**Given:** The hypotheses in the Statement.

1.1 Repeatedly delete a vertex that is a sink in both graphs and has the same parent set in both. At each deletion, its equation contributes a single shifted noise-density factor, which integrates to one by [F7]; no remaining equation uses the deleted vertex, so the remaining law still has the positive ANM product density and all remaining edges remain causally minimal. The process cannot delete every vertex, since then the graphs would be equal. It stops only when no common sink with equal parent sets remains; therefore choose a remaining sink $l$ of $G$, which either has a different parent set in $G'$ or has a child in $G'$. [given, F1, F7, construct, contradiction]

2.1 Partition the incident vertices by $Z=\operatorname{pa}_G(l)\cap\operatorname{pa}_{G'}(l)$, $Y=\operatorname{pa}_G(l)\cap\operatorname{ch}_{G'}(l)$, $W=\operatorname{pa}_G(l)\setminus(Z\cup Y)$, $D=\operatorname{pa}_{G'}(l)\setminus\operatorname{pa}_G(l)$, and $E=\operatorname{ch}_{G'}(l)\setminus\operatorname{pa}_G(l)$. These sets are pairwise disjoint, $\operatorname{pa}_G(l)=Z\cup Y\cup W$, $\operatorname{pa}_{G'}(l)=Z\cup D$, and $\operatorname{ch}_{G'}(l)=Y\cup E$. Put $T=Y\cup W$. [step 1.1, construct]

3.1 Suppose $T=\varnothing$ and $D\ne\varnothing$, and choose $d\in D$. Since $l$ is a sink in $G$, all vertices in $D\cup Z$ are nondescendants of $l$. By [F2], $N_l$ is independent of $(X_D,X_Z)$; the equation $X_l=f_l(X_Z)+N_l$ therefore makes the conditional density of $X_l$ given $(X_D,X_Z)$ independent of $X_D$. Its density factorization gives $X_l\perp_d X_D\mid X_Z$. Weak union follows directly by writing this factorization for the split $D=\{d\}\cup(D\setminus\{d\})$ and dividing by the positive marginal density: $X_l\perp_d X_d\mid X_{Z\cup(D\setminus\{d\})}$. This conditioning set contains all other parents of $l$ in $G'$ and contains no descendant of $l$ there, contradicting [F3] for $d\to l$ in $G'$. [F2, F3, step 2.1, algebra, contradiction]

3.2 Suppose $T=D=\varnothing$ and $E\ne\varnothing$. Choose $e\in E$ and put $R=\operatorname{pa}_{G'}(e)\setminus\{l\}$. Since $l$ is a sink in $G$, every vertex of $\{e\}\cup Z\cup R$ is a nondescendant of $l$. By [F2], $N_l$ is independent of $(X_e,X_R,X_Z)$; hence the conditional density of $X_l$ given these variables depends only on $X_Z$. Splitting off $X_e$ and dividing by the positive marginal density gives $X_l\perp_d X_e\mid X_{Z\cup R}$. In $G'$, $l\to e$, the set $Z\cup R$ contains all other parents of $e$, and each $z\in Z$ is an ancestor of $e$ along $z\to l\to e$, so this set contains no descendant of $e$. This contradicts [F3] for $l\to e$. If also $E=\varnothing$, then $l$ is a common sink with the same parent set and would have been deleted in step 1.1. [F2, F3, step 1.1, step 2.1, algebra, contradiction]

4.1 It remains that $T\ne\varnothing$. Choose $t\in T$ with no directed path in $G'$ from $t$ to any other member of $T$; such a vertex exists because the induced graph on finite $T$ is acyclic. We show that $t\notin W$. For contradiction suppose $t=w\in W$, and form $\widetilde G'$ by adding arrows $y'\to w$ for all $y'\in Y$ and $w'\to w$ for all $w'\in W\setminus\{w\}$. The graph is still acyclic: a new arrow could create a cycle only if $w$ already reached its tail, contrary to the choice of $w$. Also $l$ and $w$ are nonadjacent in $\widetilde G'$. [step 2.1, step 3.1, step 3.2, F4, construct, choose]

5.1 In $\widetilde G'$, choose a d-separating set $S_0$ for the nonadjacent vertices $l,w$. If $l$ is an ancestor of $w$, take $S_0=\operatorname{pa}_{\widetilde G'}(w)$: every path into $w$ ends through a conditioned parent, which is a noncollider on that path. If $l$ is not an ancestor of $w$, take $S_0=\operatorname{pa}_{\widetilde G'}(l)$. A path from $l$ to the nondescendant nonparent $w$ that starts with an arrow into $l$ is blocked at that conditioned parent; if it starts with an arrow out of $l$, its first edge traversed backward creates a collider descended from $l$, and that collider cannot have a descendant in a parent of $l$ without a directed cycle. Thus this parent set also d-separates $l,w$. [F4, step 4.1, construct]

6.1 Put $W_0=W\setminus\{w\}$ and $S=S_0\cup Y\cup Z\cup W_0$. Each $y'\in Y$ belongs to $S_0$, since $l\to y'\to w$ is a path with noncollider $y'$. Suppose a path $\pi$ from $l$ to $w$ is active given $S$. Its noncolliders lie outside $S_0$, and every collider with a descendant in $S_0$ is active given $S_0$. Since $S_0$ d-separates the endpoints, at least one collider on $\pi$ is not an ancestor of $S_0$; its descendant in $S$ must lie in $Z$ or $W_0$. Label every such collider by one such type, $Z$ or $W_0$. A labeled $Z$-collider $v$ has a directed path to some $z\in Z$, followed by $z\to l$; traversing this chain backward connects $l$ to $v$. The chain avoids $S_0$, since otherwise $v$ would be an ancestor of $S_0$. A labeled $W_0$-collider $u$ has a directed path to some $w'\in W_0$, followed by the added arrow $w'\to w$; this chain also avoids $S_0$. If only $Z$ labels occur, use the one nearest $w$, replace the prefix of $\pi$ by its backward chain from $l$, and retain the suffix. If only $W_0$ labels occur, use the one nearest $l$, retain the prefix, and replace the suffix by its forward chain to $w$. If both labels occur, take consecutive labeled colliders of different types; connect $l$ to the $Z$-collider by its backward chain, retain the segment between the two colliders in either direction, and connect the $W_0$-collider to $w$ by its forward chain. The resulting finite route has no conditioned noncollider: original noncolliders avoid $S_0$, connector interiors avoid $S_0$, and each selected collider becomes a noncollider at its junction. Every remaining collider has a descendant in $S_0$, because there is no differently labeled collider between the selected ones, and in the one-label cases the retained side contains no other newly opened collider. This is an active route given $S_0$, so [F5] gives an active path, contradicting the choice of $S_0$. Thus $S$ d-separates $l,w$ in $\widetilde G'$, and also in its subgraph $G'$. [F4, F5, step 5.1, construct, contradiction]

7.1 By [F6], $X_l\perp_d X_w\mid X_S$ in $G'$. In $G$, $w\to l$, and $S$ contains all other parents of $l$ and only nondescendants of the sink $l$. This contradicts [F3]. Therefore the selected maximal member $t$ cannot lie in $W$; it lies in $Y$. [F3, F6, step 2.1, step 6.1, contradiction]

8.1 Let the selected $y=t\in Y$, and set $Q=\operatorname{pa}_G(l)\setminus\{y\}$, $R=\operatorname{pa}_{G'}(y)\setminus\{l\}$, and $S=Q\cup R$. In $G$, $l$ is a sink, so every member of $S$ is a nondescendant of $l$, and $Q\subseteq S$. In $G'$, every member of $R$ is a parent of $y$. A vertex $z\in Z$ cannot be a descendant of $y$, since $z\to l\to y$ and a path $y\to\cdots\to z$ would create a directed cycle. Every vertex of $Y\setminus\{y\}\cup W$ is another member of $T$, so none is a descendant of $y$ by the choice of $t$. Hence $S$ is contained in the nondescendants of $y$ in $G'$ and contains all parents of $y$ other than $l$. The edges are $y\to l$ in $G$ and $l\to y$ in $G'$, so the vertices and $S$ satisfy the Statement. [step 2.1, step 4.1, step 7.1, construct] ∎

## References

[Peters et al., JMLR (2014), Proposition 29(i) and Appendix A.12](https://jmlr.org/papers/volume15/peters14a/peters14a.pdf)

[Peters et al., JMLR (2014), Appendix A.10, Lemma 38](https://jmlr.org/papers/volume15/peters14a/peters14a.pdf)

## Remarks

The schematic shows one representative from each incident-edge class. In $G$,
$y\in Y$, $c\in Z$, and $w\in W$ point into $l$. In $G'$, $c\in Z$ and
$d\in D$ point into $l$, while $l$ points to $y\in Y$ and $e\in E$; $w$ is
not adjacent to $l$. The diagram only records these incident relations. The
finite path argument in the proof establishes the claim and does not rely on
the drawing.

~~~tikz
\begin{tikzpicture}[>=stealth]
  \node[draw,circle] (c1) at (0,1) {$c\in Z$};
  \node[draw,circle] (y1) at (0,0) {$y\in Y$};
  \node[draw,circle] (w1) at (0,-1) {$w\in W$};
  \node[draw,circle] (l1) at (2,0) {$l$};
  \draw[->] (c1) -- (l1);
  \draw[->] (y1) -- (l1);
  \draw[->] (w1) -- (l1);
  \node at (1,-1.8) {$G$};

  \node[draw,circle] (c2) at (4,1) {$c\in Z$};
  \node[draw,circle] (d2) at (4,0) {$d\in D$};
  \node[draw,circle] (w2) at (4,-1) {$w\in W$};
  \node[draw,circle] (l2) at (6,0) {$l$};
  \node[draw,circle] (y2) at (8,1) {$y\in Y$};
  \node[draw,circle] (e2) at (8,-1) {$e\in E$};
  \draw[->] (c2) -- (l2);
  \draw[->] (d2) -- (l2);
  \draw[->] (l2) -- (y2);
  \draw[->] (l2) -- (e2);
  \node at (6,-1.8) {$G'$};
\end{tikzpicture}
~~~
