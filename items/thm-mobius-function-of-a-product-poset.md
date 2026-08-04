---
id: thm-mobius-function-of-a-product-poset
kind: theorem
title: "The Möbius function of a product poset is the product of the Möbius functions"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-poset-mobius-recurrence, def-poset-interval-and-finiteness-conditions, lem-finite-sum-reindexing-and-fubini, thm-product-rule, thm-int-comm-ring, def-partial-order]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "F. Gotti, Incidence Algebras, MIT 18.211 notes"
      url: "https://math.mit.edu/~fgotti/docs/Courses/C.%20Combinatorial%20Analysis/38.%20Mobius%20Inversion%20Formula/Incidence%20Algebras.pdf"
    - title: "R. Stanley, Enumerative Combinatorics, Volume 1, §§3.6–3.8"
      url: "https://math.mit.edu/~rstan/ec/ec1.pdf"
pipeline_run: null
---

## Statement

Let $(P,\le_P)$ and $(Q,\le_Q)$ be locally finite posets. Define the **product order** on $P\times Q$ by

$$(p,q)\le(p',q')\quad\Longleftrightarrow\quad p\le_Pp'\text{ and }q\le_Qq'.$$

This relation is a partial order, the product poset is locally finite, and for comparable pairs

$$\mu_{P\times Q}\big((p,q),(p',q')\big)=\mu_P(p,p')\mu_Q(q,q').$$

```tikz
\begin{tikzpicture}[
  every node/.style={font=\scriptsize},
  elt/.style={draw,rounded corners=2pt,minimum width=15mm,minimum height=7mm,inner sep=1pt,fill=white}
]
\node[elt] (a00) at (0,0) {$(p_0,q_0)$};
\node[elt] (a10) at (2.5,0) {$(p_1,q_0)$};
\node[elt] (a01) at (.8,1.25) {$(p_0,q_1)$};
\node[elt] (a11) at (3.3,1.25) {$(p_1,q_1)$};
\node[elt] (a02) at (1.6,2.5) {$(p_0,q_2)$};
\node[elt] (a12) at (4.1,2.5) {$(p_1,q_2)$};

\draw[blue!75!black,line width=.9pt]
  (a00)--(a10) (a01)--(a11) (a02)--(a12);
\draw[orange!85!black,line width=.9pt]
  (a00)--(a01)--(a02) (a10)--(a11)--(a12);

\node[anchor=west] at (4.9,1.65) {$C_2\times C_3$};
\draw[blue!75!black,line width=.9pt] (4.95,1.05)--(5.55,1.05);
\node[anchor=west] at (5.7,1.05) {$P$-coordinate cover};
\draw[orange!85!black,line width=.9pt] (4.95,.5)--(5.55,.5);
\node[anchor=west] at (5.7,.5) {$Q$-coordinate cover};
\end{tikzpicture}
```

## Facts & Assumptions

**Given:** Locally finite posets $P,Q$ and elements $p\le_Pp'$, $q\le_Qq'$.

[F1] A partial order is reflexive, antisymmetric and transitive ([[def-partial-order]]).

[F2] Local finiteness means every closed interval is finite ([[def-poset-interval-and-finiteness-conditions]]).

[L1] A Cartesian product of finite sets is finite ([[thm-product-rule]]).

[L2] Finite Fubini interchanges a sum over a finite Cartesian product with its two iterated sums ([[lem-finite-sum-reindexing-and-fubini]]).

[L3] The Möbius function is the unique integer-valued function with diagonal value $1$ and vanishing interval sums off the diagonal ([[lem-poset-mobius-recurrence]], [[thm-int-comm-ring]]).

## Proof

**Proof technique:** direct.

1.1 The product relation is reflexive because both coordinate orders are reflexive; it is antisymmetric because two opposite product inequalities give equality in each coordinate; and it is transitive because coordinatewise inequalities compose. Hence it is a partial order. [F1]

1.2 Its intervals are exactly Cartesian products: $[(p,q),(p',q')]=[p,p']_P\times[q,q']_Q$. Both factors are finite by local finiteness, so the interval is finite by [L1]; thus $P\times Q$ is locally finite. [F2, L1]

1.3 Define $\nu((p,q),(p',q')):=\mu_P(p,p')\mu_Q(q,q')$. On the diagonal, $\nu((p,q),(p,q))=1\cdot1=1$. [L3]

2.1 For a nontrivial product interval, finite Fubini gives $\sum_{(p,q)\le(u,v)\le(p',q')}\nu((p,q),(u,v))=\left(\sum_{p\le_Pu\le_Pp'}\mu_P(p,u)\right)\left(\sum_{q\le_Qv\le_Qq'}\mu_Q(q,v)\right)$. [step 1.2, L2, L3]

3.1 Each factor in step 2.1 is $1$ when its endpoints agree and $0$ otherwise. Since the product interval is nontrivial, at least one coordinate pair has distinct endpoints, so the product is $0$. [step 2.1, L3]

4.1 Thus $\nu$ has the diagonal and recurrence properties of the Möbius function on $P\times Q$, and uniqueness in [L3] gives $\nu=\mu_{P\times Q}$. [step 1.3, step 3.1, L3] ∎
