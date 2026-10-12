---
id: cex-residue-sequences-need-not-separate-when-e-is-at-most-n
kind: counterexample
title: "Residue sequences need not separate when e is at most n"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-hecke-jucys-murphy-elements-and-q-contents, def-quantum-characteristic-of-an-invertible-hecke-parameter, thm-separated-hecke-residues-give-seminormal-idempotents-and-bases]
justified_by: []
aliases: []
landmark: false
dependency_level: 12
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Andrew Mathas, Hecke algebras and Schur algebras of the symmetric group, complete prepublication manuscript (1998; expanded published edition: AMS University Lecture Series 15, 1999); complete 79-page manuscript, SHA-256 8cfeb611a95a3ff25cb95ad22bfd3a68475818301c34b04d131a8480a1b997e0"
      url: "https://web.math.ucsb.edu/~bigelow/books/mathas.pdf"
      locator: "Lemma 3.32 (whose proof uses e>n so that equal-residue nodes lie on diagonal lines), printed pp. 30-31; the boundary of Theorem 3.34"
---

## Statement refuted

The hypothesis $e>n$ in
[[thm-separated-hecke-residues-give-seminormal-idempotents-and-bases]] cannot be
dropped. Take $F=\mathbb C$, $q=-1$ (so $e=e(\mathbb C,-1)=2$,
[[def-quantum-characteristic-of-an-invertible-hecke-parameter]]), $n=3$ and
$\lambda=(2,1)$. The two distinct standard tableaux
$s=\begin{smallmatrix}1&2\\3\end{smallmatrix}$ and
$t=\begin{smallmatrix}1&3\\2\end{smallmatrix}$ have contents
$\operatorname{content}_s(1),\operatorname{content}_s(2),\operatorname{content}_s(3)=0,1,-1$
and
$\operatorname{content}_t(1),\operatorname{content}_t(2),\operatorname{content}_t(3)=0,-1,1$,
and since $[m]_{-1}=[m]+(-1)^{m-1}[1]_{-1}$ reduces modulo $e=2$ one has
$[1]_{-1}=1=[-1]_{-1}$
([[def-hecke-jucys-murphy-elements-and-q-contents]] for the extended quantum
integers). Hence
$$([\operatorname{content}_s(k)]_q)_{k=1,2,3}=(0,1,1)=([\operatorname{content}_t(k)]_q)_{k=1,2,3}\quad(q=-1):$$
the q-content sequences collide although $s\ne t$, so the separation conclusion
of the theorem fails. Moreover the interpolation denominator for $k=2$ is the
difference
$[\operatorname{content}_t(2)]_q-[\operatorname{content}_s(2)]_q=[-1]_{-1}-[1]_{-1}=0$,
so the projector $F_t$ of the theorem is not defined in this case; the same
collision $\rho\equiv0\bmod e$ makes $[\rho]_q=0$ in the generator formula of
the theorem's part 4. Consequently no seminormal basis is available beyond the
semisimple range, and the theorem's hypothesis $e>n$ is optimal.

## Facts & Assumptions

**Given:** The field $\mathbb C$, $q=-1\in\mathbb C^{\times}$, $n=3$, the standard tableaux $s,t$ of shape $(2,1)$ above, and the q-integers of [[def-hecke-jucys-murphy-elements-and-q-contents]].

[F1] ([[def-quantum-characteristic-of-an-invertible-hecke-parameter]]) $e(\mathbb C,-1)=2$: the least $m\ge1$ with $[m]_{-1}=0$ is $m=2$, since $[2]_{-1}=1+q=0$ and $[1]_{-1}=1\ne0$.

[F2] ([[def-hecke-jucys-murphy-elements-and-q-contents]]) The q-content value of an entry is $[\operatorname{content}]_q$ with $[m]_q=1+q+\cdots+q^{m-1}$ for $m\ge0$ and $[-m]_q=-q^{-m}[m]_q$ for $m>0$; at $q=-1$ one has $[1]_{-1}=1$ and $[-1]_{-1}=-[1]_{-1}=-1\cdot(-1)^{-1}=1$.

[F3] ([[thm-separated-hecke-residues-give-seminormal-idempotents-and-bases]]) Under the hypothesis $e>n$ the q-content sequence determines the standard tableau, and the denominators of the spectral projectors are nonzero.




## Counterexample

1.1 Contents of the two tableaux: for $s$ with rows $(1,2)$ and $(3)$ the nodes are $(1,1),(1,2),(2,1)$ for $1,2,3$, giving contents $0,1,-1$; for $t$ with rows $(1,3)$ and $(2)$ the nodes are $(1,1),(2,1),(1,2)$ for $1,2,3$, giving contents $0,-1,1$. [given]

2.1 Collision: by [F1] and [F2], $[2]_{-1}=0$ and $[1]_{-1}=[-1]_{-1}=1$; hence $[\operatorname{content}_s(1)]_{q}=0=[\operatorname{content}_t(1)]_q$, $[\operatorname{content}_s(2)]_q=1=[\operatorname{content}_t(2)]_q$ and $[\operatorname{content}_s(3)]_q=1=[\operatorname{content}_t(3)]_q$, so the two q-content sequences coincide even though $s\ne t$. [step 1.1, F1, F2]

3.1 Consequences: the collision at $k=2$ makes the denominator $[\operatorname{content}_t(2)]_q-[\operatorname{content}_s(2)]_q=1-1=0$ of the spectral projector $F_t$ vanish, and for the transposition swapping $2$ and $3$ the axial distance is $\rho=\operatorname{content}_s(2)-\operatorname{content}_s(3)=1-(-1)=2\equiv0\bmod2$, so $[\rho]_q=[2]_{-1}=0$ and the generator formula's coefficient $1/[\rho]_q$ is undefined. This is exactly the excluded case $e=2\le n=3$ of [F3], so the hypothesis $e>n$ cannot be weakened. [step 2.1, F1, F3] ∎
