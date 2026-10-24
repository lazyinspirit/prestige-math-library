---
id: def-cg-deletion-chain-labels-and-shelling
kind: definition
title: "Deleted-position labels from a fixed reduced expression, the lexicographic shelling criterion, and Möbius data"
status: published
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 16
deps: [def-hh-coxeter-matrix-word-group-and-length, def-cg-canonical-reflection-homomorphism, def-cg-bruhat-order-by-reflection-chains, lem-cg-bruhat-chain-refinement-and-gradedness, def-poset-interval-and-finiteness-conditions, def-graded-poset-and-rank, thm-cg-bruhat-lifting-and-cover-criterion, def-cg-finite-lattice-congruence-and-interval-projections, lem-cg-lexicographic-chain-shelling-and-mobius-cancellation, def-abstract-simplicial-complex, def-face-poset-and-order-complex, def-poset-mobius-function, lem-poset-mobius-recurrence]
justified_by: [thm-cg-bruhat-deletion-label-shelling]
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Anders Björner and Francesco Brenti, Combinatorics of Coxeter Groups (Graduate Texts in Mathematics 231, Springer 2005; author-hosted complete PDF)"
      url: "https://sites.math.washington.edu/~billey/classes/reflection.groups/references/EntireBook.pdf"
      locator: "Sections 2.2 and 2.5-2.7, printed pp. 33-36, 45 and 48-55 (augmentation and lifting; quotients; deleted-position labels of maximal chains; Lemmas 2.7.2-2.7.4, Theorem 2.7.5, Corollaries 2.7.10-2.7.11 and Exercise 13), and Appendix A2.2-A2.4, printed pp. 302-305 (Möbius and shellability facts; cited, not consumed)"
verification:
  audited: "2026-10-08"
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Definition

Let $W$ be the group presented by a Coxeter matrix $(S,m)$, with length function $\ell$, reflection set $T$ and Bruhat order $\le$ ([[def-hh-coxeter-matrix-word-group-and-length]], [[def-cg-canonical-reflection-homomorphism]], [[def-cg-bruhat-order-by-reflection-chains]]). Let $u\le v$ in $W$ and fix a reduced expression $v=s_1\cdots s_q$, where $q=\ell(v)$.

**(1) Maximal chains.** By [[lem-cg-bruhat-chain-refinement-and-gradedness]] the interval $[u,v]=\{x\in W:u\le x\le v\}$ ([[def-poset-interval-and-finiteness-conditions]]) is finite and graded with rank function $x\mapsto\ell(x)-\ell(u)$ ([[def-graded-poset-and-rank]]); a maximal chain of $[u,v]$ is a chain of covers $m\colon v=x_0\gtrdot x_1\gtrdot\cdots\gtrdot x_k=u$ with $k=\ell(v)-\ell(u)$, where $\gtrdot$ is the covering relation of [[def-graded-poset-and-rank]].

**(2) The deleted-position labeling.** Let $m\colon v=x_0\gtrdot x_1\gtrdot\cdots\gtrdot x_k=u$ be a maximal chain of $[u,v]$. Recursively, suppose that $P_j\subseteq\{1,\dots,q\}$ satisfies $|P_j|=q-j$ and that $x_j=\prod_{p\in P_j}s_p$ (product in increasing order of positions) is a reduced expression of $x_j$. By the cover criterion and reflection deletion of [[thm-cg-bruhat-lifting-and-cover-criterion]] (3), applied to the reduced expression $x_j=\prod_{p\in P_j}s_p$, the cover $x_j\gtrdot x_{j+1}$ determines a unique position $\lambda_{j+1}(m)\in P_j$ with $x_{j+1}=\prod_{p\in P_j\setminus\{\lambda_{j+1}(m)\}}s_p$, and this deletion word is a reduced expression of $x_{j+1}$; put $P_{j+1}:=P_j\setminus\{\lambda_{j+1}(m)\}$. This defines the **label word** $\lambda(m)=(\lambda_1(m),\dots,\lambda_k(m))$ of $m$. Its entries are pairwise distinct, because $P_0\supsetneq P_1\supsetneq\cdots\supsetneq P_k$. Hence $m\mapsto\lambda(m)$ is a descending rooted-chain labeling of $[u,v]$ in the sense of [[def-cg-finite-lattice-congruence-and-interval-projections]] (2), with values in the linearly ordered set $\{1,\dots,q\}$: a label is determined by the chain above its step and need not be a function of that step alone. The notions *increasing*, *falling*, *descent set* and the lexicographic order $\prec$ of label words are those of [[def-cg-finite-lattice-congruence-and-interval-projections]] (3).

**(3) Rooted intervals.** If $u\le a<b\le v$ and $c$ is a descending chain from $v$ to $b$, the induced labeling of the rooted interval $([a,b],c)$ ([[def-cg-finite-lattice-congruence-and-interval-projections]] (2)) is again a deleted-position labeling of $[a,b]$: its labels are positions in the reduced expression of $b$ obtained from $v=s_1\cdots s_q$ by deleting the positions of the steps of $c$, and the label of a step of a maximal chain of $[a,b]$ is the position of the letter it deletes from that retained expression. Labels compared inside one rooted interval therefore belong to the one ordered set $\{1,\dots,q\}$. The labeling depends on the fixed reduced expression of $v$; no two label words obtained from different fixed expressions are compared anywhere on this page.

**(4) The lexicographic shelling criterion.** Let $K$ be a finite abstract simplicial complex ([[def-abstract-simplicial-complex]]) whose facets — its maximal simplices under inclusion — are listed in a linear order $F_1,\dots,F_t$. The order is a **shelling** of $K$, and $K$ is **shellable**, if for all $i<k$ there are $j<k$ and a vertex $x\in F_k$ with $F_i\cap F_k\subseteq F_j\cap F_k=F_k\setminus\{x\}$; this is the exact earlier-facet codimension-one intersection criterion. The facets of the order complex $\Delta([u,v])$ of $[u,v]$ are the maximal chains of $[u,v]$, and those of $\Delta((u,v))$ are the maximal chains of the open interval $(u,v)$ ([[def-face-poset-and-order-complex]]). The **lexicographic order of maximal chains** of $[u,v]$ is $m'\prec m:\iff\lambda(m')\prec\lambda(m)$.

**(5) Möbius data.** $\mu$ denotes the Möbius function of a finite poset ([[def-poset-mobius-function]]), so that on $[u,v]$ one has $\mu(x,x)=1$ and $\mu(x,y)=-\sum_{x\le z<y}\mu(x,z)$ for $x<y$ ([[lem-poset-mobius-recurrence]]).

This item asserts neither that the labeling satisfies the no-tie condition (N) or the lex-increasing property (L) of [[def-cg-finite-lattice-congruence-and-interval-projections]] (4), nor that the lexicographic order is a shelling; both are proved in [[thm-cg-bruhat-deletion-label-shelling]], the recorded justifier of this definition, before any consumer uses them.
