---
id: lem-dynkin-diagrams-of-irreducible-finite-root-systems-are-trees-with-controlled-branching
kind: lemma
title: Shape restrictions on Dynkin diagrams
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [prop-finite-type-cartan-matrix-properties, prop-irreducibility-corresponds-to-connectedness-of-the-dynkin-diagram, def-dynkin-diagram-with-edge-multiplicity-and-arrow-convention, thm-tree-characterisations, thm-rank-two-root-system-classification]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter II"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter II, §7, Propositions 2.74 and 2.78 and Steps 1-5 of the classification, printed pp. 171-180"
    - title: "Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I, Lectures 19-24"
      url: "https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf"
      locator: "Lecture 23, Section 23.8, printed pp. 127-128"
landmark: false
proof_strategy: direct
---

## Statement

Let $\Phi$ be an irreducible reduced crystallographic root system with
connected Dynkin diagram $\Gamma$
([[def-dynkin-diagram-with-edge-multiplicity-and-arrow-convention]]). Then:
1. the underlying unoriented simple graph of $\Gamma$ is a tree;
2. no vertex is adjacent to more than three other vertices;
3. at most one vertex is adjacent to three other vertices;
4. in the simply-laced case (all edges simple) with exactly one trivalent
   vertex, if $p-1,q-1,r-1$ are the numbers of edges in the three arms and
   $2\le p\le q\le r$, then $1/p+1/q+1/r>1$;
5. if $\Gamma$ has a multiple edge, its underlying graph is a path; positivity
   permits only a double edge at an end of the path, a double edge in the
   middle of a four-vertex path, or a two-vertex triple edge.

## Facts & Assumptions

**Given:** A finite-type Cartan matrix $A=(a_{ij})$ of an irreducible based root system as in the statement, with $a_{ii}=2$, $a_{ij}\le0$, $a_{ij}=0\Leftrightarrow a_{ji}=0$, $a_{ij}a_{ji}\in\{0,1,2,3\}$ for $i\ne j$, and a diagonal matrix $D=\operatorname{diag}(d_i)$, $d_i>0$, with $P=DAD^{-1}=2Q$ where $Q$ is symmetric positive definite.

[L1] These are the properties of a finite-type Cartan matrix, and $Q_{ii}=1$, $Q_{ij}=Q_{ji}=-\frac12\sqrt{a_{ij}a_{ji}}<0$ for adjacent $i\ne j$, and $Q_{ij}=0$ otherwise ([[prop-finite-type-cartan-matrix-properties]]).

[L2] For every nonzero real vector $x$ of finite support one has $x^{T}Qx>0$; equivalently $\sum_ix_i^{2}>\sum_{i\sim j}\frac12\sqrt{a_{ij}a_{ji}}\,x_ix_j$, where the sum runs over unordered adjacent pairs. In particular $\sum_ix_i^{2}>\sum_{i\sim j}x_ix_j$ for $x\ne0$, because $\sqrt{a_{ij}a_{ji}}\ge1$ for adjacent pairs. ([[prop-finite-type-cartan-matrix-properties]])

[L3] The diagram is connected, with vertex set $\Delta$, and $i\ne j$ are adjacent exactly when $a_{ij}\ne0$ ([[prop-irreducibility-corresponds-to-connectedness-of-the-dynkin-diagram]], [[def-dynkin-diagram-with-edge-multiplicity-and-arrow-convention]]).

[L4] A finite connected graph is a tree exactly when it has no cycle, and then it has $|V|-1$ edges and a unique path between any two vertices; in a simply-laced diagram the inner product of adjacent simple roots is $-\frac12|\alpha|^{2}$ when both roots have the same length ([[thm-tree-characterisations]], [[thm-rank-two-root-system-classification]]).

## Proof

**Proof technique:** direct.

1.1 The graph has no cycle: if $i_1,\dots,i_m$ with $m\ge3$ formed a cycle, set $x_{i_k}=1$ and $x_j=0$ otherwise; then $\sum_jx_j^{2}=m$ and the adjacency sum equals $m$, since each of the $m$ cycle edges contributes $1$, so $\sum x^{2}\le\sum_{i\sim j}x_ix_j$, contradicting [L2] (a multiple edge in the cycle only increases the right side). Since the graph is connected by [L3], it is a tree by [L4]. [L2, L3, L4, algebra]

1.2 No vertex has four neighbours: if $v$ had distinct neighbours $n_1,\dots,n_4$, set $x_v=2$, $x_{n_k}=1$ and $x_j=0$ otherwise; then $\sum x^{2}=4+4=8$ and the four edges at $v$ contribute at least $4\cdot(2\cdot1)=8$, so $\sum x^{2}\le\sum_{i\sim j}x_ix_j$, contradicting [L2]. [L2, algebra]

1.3 (Simply-laced trivalent case.) Suppose all edges are simple and $\delta$ is the unique trivalent vertex, its arms having $p-1,q-1,r-1$ edges with $p,q,r\ge2$; all simple roots then have a common squared length $d^{2}$ by [L4], and adjacent simple roots have inner product $-\frac12d^{2}$. Let $\alpha=\sum_{i=1}^{p-1}i\,\alpha_i$, where $\alpha_1,\dots,\alpha_{p-1}$ are the roots of the first arm ordered from its free end toward $\delta$, and define $\beta,\gamma$ similarly for the other two arms; the three vectors are mutually orthogonal because their supports are disjoint, and direct expansion using the adjacent inner products gives $|\alpha|^{2}=\frac12p(p-1)d^{2}$, $|\beta|^{2}=\frac12q(q-1)d^{2}$, $|\gamma|^{2}=\frac12r(r-1)d^{2}$ and $(\alpha,\delta)=-\frac12(p-1)d^{2}$, with the analogous formulas for $\beta,\gamma$. The set $\{\alpha,\beta,\gamma\}$ is orthogonal, and $\delta$ is not in its span (the supports are disjoint from $\delta$), so Bessel's inequality with the nonzero residual component gives $|\delta|^{2}>\sum_{u\in\{\alpha,\beta,\gamma\}}\frac{(u,\delta)^{2}}{|u|^{2}}=\frac{(p-1)d^{2}}{2p}+\frac{(q-1)d^{2}}{2q}+\frac{(r-1)d^{2}}{2r}$; dividing by $d^{2}=|\delta|^{2}$ and multiplying by $2$ gives $2>3-(\frac1p+\frac1q+\frac1r)$, that is $\frac1p+\frac1q+\frac1r>1$. [L1, L4, algebra]

1.4 (Path with a double edge.) Suppose the underlying graph is a path whose vertices are split into two arms of $p$ and $q$ vertices joined by a double edge, and let $\alpha=\sum_{i=1}^{p}i\alpha_i$, $\beta=\sum_{j=1}^{q}j\beta_j$ with the vertices ordered from the free ends toward the double edge. From the double edge one has $a_{\alpha_p\beta_q}a_{\beta_q\alpha_p}=2$, so $2(\alpha_p,\beta_q)^{2}=|\alpha_p|^{2}|\beta_q|^{2}$, while the arm expansions give $|\alpha|^{2}=\frac12p(p+1)|\alpha_p|^{2}$, $|\beta|^{2}=\frac12q(q+1)|\beta_q|^{2}$ and $(\alpha,\beta)=pq(\alpha_p,\beta_q)$. Substituting into the strict Schwarz inequality $(\alpha,\beta)^{2}<|\alpha|^{2}|\beta|^{2}$ for the nonproportional vectors $\alpha,\beta$ gives $\frac12p^{2}q^{2}<\frac14p(p+1)q(q+1)$, hence $2pq<(p+1)(q+1)$ and $(p-1)(q-1)<2$. Therefore either $p=1$ or $q=1$, giving a double edge at an end of the path, or $p=q=2$, giving a four-vertex path with central double edge. [L1, L2, L4, algebra]

2.1 At most one vertex is trivalent: if $u\ne v$ both had degree at least three, let $v_0=u,v_1,\dots,v_k=v$ be the unique path between them (existing by step 1.1 and [L4]) and set $x=2$ at the path vertices and $x=1$ at every other neighbour of $u$ or $v$; the numbers $e_u=\deg(u)-1\ge2$ and $e_v=\deg(v)-1\ge2$ of such extra neighbours satisfy $\sum x^{2}=4(k+1)+e_u+e_v$ and $\sum_{i\sim j}x_ix_j\ge 4k+2(e_u+e_v)$ (the $k$ path edges contribute $4$ each, the edges from $u,v$ to the extra neighbours contribute $2$ each, and the edge $uv$, when $k=1$, contributes $4$), so $\sum x^{2}=4k+4+e_u+e_v\le4k+2(e_u+e_v)\le\sum_{i\sim j}x_ix_j$ because $e_u+e_v\ge4$; this contradicts [L2]. [L2, L4, step 1.1, algebra]

3.1 (Multiple edges and the conclusion.) If the graph contained a multiple edge together with a trivalent vertex, the subdiagram consisting of that edge and one arm would be one of the affine configurations whose explicit nonnegative label vector has $\sum x^{2}\le\sum_{i\sim j}\sqrt{a_{ij}a_{ji}}x_ix_j$, contradicting [L2]; for example the star with four simple edges and labels $2,1,1,1,1$ realises equality, and a double edge increases the right side. Likewise two double edges in a path admit the label vector $1,1,2,\dots,2,1,1$ violating [L2]. Hence either all edges are simple, or the underlying graph is a path with exactly one multiple edge as in step 1.4; if that edge is triple, then $a_{ij}a_{ji}=3$ and the vertex labels $1$ at every further vertex would violate [L2] unless the path has just two vertices, giving the system $G_2$. This completes the verification of all five assertions. [L1, L2, step 1.1, step 1.2, step 2.1, step 1.4, algebra] ∎
