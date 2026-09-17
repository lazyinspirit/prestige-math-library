---
id: def-densely-defined-closed-and-closable-operator
kind: definition
title: "Densely defined, closed and closable operators, and cores"
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-unbounded-linear-operator-domain-and-graph, def-dense-top, def-complete-metric-space, def-hilbert-space]
proof_strategy: not-applicable
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Dana P. Williams, Lecture Notes on the Spectral Theorem"
      url: "https://www.math.dartmouth.edu/~dana/bookspapers/ln-spec-thm.pdf"
      locator: "Definition 7.11, Definition 7.15 and the graph-norm discussion, pp.31-32"
    - title: "Theo Buehler and Dietmar A. Salamon, Functional Analysis"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
      locator: "Chapter 6, Sec. 6.1, graph and closability discussion"
---

## Definition

Let $T$ be a linear operator on $H$ with domain $D(T)$ and graph $\Gamma(T)$
([[def-unbounded-linear-operator-domain-and-graph]]).

$T$ is **densely defined** when $D(T)$ is a dense subset of $H$
([[def-dense-top]]); **closed** when $\Gamma(T)$ is a closed subset of
$H\oplus H$; and **closable** when $T$ has a closed extension.
Recall that the graph norm is $\|x\|_T=(\|x\|^2+\|Tx\|^2)^{1/2}$.

**The graph-norm dictionary.** The following three statements are part of the
definition's content and are proved in the remarks below rather than assumed:

1. $\|\cdot\|_T$ is a norm on $D(T)$, and
   $x\mapsto(x,Tx)$ is an isometric isomorphism of $(D(T),\|\cdot\|_T)$ onto
   $\Gamma(T)$;
2. $T$ is closed if and only if $(D(T),\|\cdot\|_T)$ is a complete metric space
   ([[def-complete-metric-space]]);
3. if $T$ is closed, then $D(T)$ is a Hilbert space for the inner product
   $\langle x,y\rangle_T=\langle x,y\rangle+\langle Tx,Ty\rangle$ whose induced
   norm is $\|\cdot\|_T$.

A linear subspace $D_0\subseteq D(T)$ is a **core** for a closed operator $T$
when $D_0$ is dense in $(D(T),\|\cdot\|_T)$, equivalently when
$\overline{\Gamma(T|_{D_0})}=\Gamma(T)$, where the closure is taken in
$H\oplus H$ and $T|_{D_0}$ denotes the restriction of $T$ to $D_0$.

## Remarks

**Claim 1.** $\|\cdot\|_T=\|\cdot\|$ holds on $\ker T$, and
$\|x\|\le\|x\|_T$ always. $\|\cdot\|_T$ is a seminorm because $\|\cdot\|$ and
$T$ are linear, and it is definite because $\|x\|_T=0$ forces $\|x\|=0$ and
$x=0$. The map $x\mapsto(x,Tx)$ is linear, isometric by definition, and its
image is $\Gamma(T)$ with
$\|(x,Tx)\|^2=\|x\|^2+\|Tx\|^2=\|x\|_T^2$; a linear isometry is injective, so
it is a bijection onto $\Gamma(T)$.

**Claim 2.** A subset of a complete metric space is complete for the subspace
metric exactly when it is closed, and $H\oplus H$ is complete with
$\|(x,y)\|$ ([[def-complete-metric-space]], [[def-hilbert-space]]), while
$\Gamma(T)$ carries the subspace metric. Since the map of claim 1 is an
isometry onto $\Gamma(T)$, the space $(D(T),\|\cdot\|_T)$ is complete exactly
when $\Gamma(T)$ is closed, that is, exactly when $T$ is closed.

**Claim 3.** If $T$ is closed then $\Gamma(T)$ is a closed subspace of the
Hilbert space $H\oplus H$, hence a Hilbert space in its own right, and the
inner product $\langle(x,Tx),(y,Ty)\rangle=\langle x,y\rangle+\langle Tx,Ty\rangle$
transfers to $D(T)$ through the isometry of claim 1, making $D(T)$ a Hilbert
space with inner product $\langle x,y\rangle_T$ and induced norm
$\|\cdot\|_T$.

**Core.** If $D_0$ is dense in $(D(T),\|\cdot\|_T)$, then every $x\in D(T)$ is
the $\|\cdot\|_T$-limit of a sequence from $D_0$, hence
$(x,Tx)=\lim(x_n,Tx_n)\in\overline{\Gamma(T|_{D_0})}$, so
$\Gamma(T)\subseteq\overline{\Gamma(T|_{D_0})}\subseteq\Gamma(T)$ and the
closures agree. Conversely if the closures agree, the set of pairs
$(x,Tx)$ with $x\in D_0$ has closure $\Gamma(T)$, so every point of $\Gamma(T)$
is a limit of points $(x_n,Tx_n)$ with $x_n\in D_0$, and the isometry of
claim 1 turns this into $\|x-x_n\|_T\to0$.
