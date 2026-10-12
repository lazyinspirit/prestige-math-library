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

The hypothesis $e>n$ in [[thm-separated-hecke-residues-give-seminormal-idempotents-and-bases]] cannot be dropped. Take $F=\mathbb C$, $q=-1$ (so $e=e(\mathbb C,-1)=2$, [[def-quantum-characteristic-of-an-invertible-hecke-parameter]]), $n=3$ and $\lambda=(2,1)$. The two distinct standard tableaux $s=\begin{smallmatrix}1&2\\3\end{smallmatrix}$ and $t=\begin{smallmatrix}1&3\\2\end{smallmatrix}$ have contents $\operatorname{content}_s(1),\operatorname{content}_s(2),\operatorname{content}_s(3)=0,1,-1$ and $\operatorname{content}_t(1),\operatorname{content}_t(2),\operatorname{content}_t(3)=0,-1,1$, and the extended quantum-integer identity gives $[1]_{-1}=1=[-1]_{-1}$, since $[-1]_{-1}=-(-1)^{-1}[1]_{-1}=1$. Hence $$([\operatorname{content}_s(k)]_q)_{k=1,2,3}=(0,1,1)=([\operatorname{content}_t(k)]_q)_{k=1,2,3}\quad(q=-1):$$ the q-content sequences collide although $s\ne t$, so the separation conclusion of the theorem fails. The difference of the two putative separating eigenvalues at $k=2$ is $[-1]_{-1}-[1]_{-1}=0$. Thus interpolation cannot distinguish the two tableaux: a formula that excludes equal values may still define a polynomial, but it is not a separating projector for these two labels. The attempted generator formula has axial distance $\rho=2$ and $[\rho]_{-1}=0$. In fact $L_2$ has a nontrivial Jordan block on this cell, so this cell has no simultaneous JM-eigenbasis. This explicit example shows that the uniform separation hypothesis $e>n$ cannot be dropped; it does not claim that every individual cell at every parameter with $e\le n$ lacks a seminormal basis.

## Facts & Assumptions

**Given:** The field $\mathbb C$, $q=-1\in\mathbb C^{\times}$, $n=3$, the standard tableaux $s,t$ of shape $(2,1)$ above, and the q-integers of [[def-hecke-jucys-murphy-elements-and-q-contents]].

[F1] ([[def-quantum-characteristic-of-an-invertible-hecke-parameter]]) $e(\mathbb C,-1)=2$: the least $m\ge1$ with $[m]_{-1}=0$ is $m=2$, since $[2]_{-1}=1+q=0$ and $[1]_{-1}=1\ne0$.

[F2] ([[def-hecke-jucys-murphy-elements-and-q-contents]]) The q-content value of an entry is $[\operatorname{content}]_q$ with $[m]_q=1+q+\cdots+q^{m-1}$ for $m\ge0$ and $[-m]_q=-q^{-m}[m]_q$ for $m>0$; at $q=-1$ one has $[1]_{-1}=1$ and $[-1]_{-1}=-(-1)^{-1}[1]_{-1}=1$.

[F3] ([[thm-separated-hecke-residues-give-seminormal-idempotents-and-bases]]) Under the hypothesis $e>n$ the q-content sequence determines the standard tableau, and the denominators of the spectral projectors are nonzero.




## Counterexample

1.1 Contents of the two tableaux: for $s$ with rows $(1,2)$ and $(3)$ the nodes are $(1,1),(1,2),(2,1)$ for $1,2,3$, giving contents $0,1,-1$; for $t$ with rows $(1,3)$ and $(2)$ the nodes are $(1,1),(2,1),(1,2)$ for $1,2,3$, giving contents $0,-1,1$. [given]

2.1 Collision: by [F1] and [F2], $[2]_{-1}=0$ and $[1]_{-1}=[-1]_{-1}=1$; hence $[\operatorname{content}_s(1)]_{q}=0=[\operatorname{content}_t(1)]_q$, $[\operatorname{content}_s(2)]_q=1=[\operatorname{content}_t(2)]_q$ and $[\operatorname{content}_s(3)]_q=1=[\operatorname{content}_t(3)]_q$, so the two q-content sequences coincide even though $s\ne t$. [step 1.1, F1, F2]

3.1 Interpolation and axial distance. The eigenvalue difference that would be needed to distinguish $s$ and $t$ at $k=2$ is $1-1=0$. Equal-value exclusion in a polynomial product does not make its literal denominators zero; it instead loses the factor that could distinguish these tuples. No polynomial in the JM operators can provide the two distinct joint-eigenvalue labels used in the separated-range construction. For the swap of $2$ and $3$, $\rho=1-(-1)=2$ and $[2]_{-1}=0$, so the displayed separated-range generator formula is undefined here. [step 2.1, F1, F3]

4.1 Verify the failure of a JM-eigenbasis on this cell directly. Put $m_s=1+T_1$ and $m_t=(1+T_1)T_2$ modulo the higher row-shape ideal. The quadratic relation gives $m_sT_1=q m_s$. The higher row symmetrizer is $1+T_1+T_2+T_1T_2+T_2T_1+T_1T_2T_1$, so its vanishing in this cell gives $m_tT_1=-m_s-m_t$. At $q=-1$, since $L_2=q^{-1}T_1=-T_1$, it follows that $m_sL_2=m_s$ and $m_tL_2=m_s+m_t$. Thus $L_2-I$ is nonzero and $(L_2-I)^2=0$ on this two-dimensional cell. It is not diagonalizable over $\mathbb C$, so a simultaneous JM-eigenbasis cannot exist on this cell. Together with step 2.1 this supplies the claimed concrete boundary counterexample, without making a universal claim about all cells outside the separated range. [given, F2, step 3.1] ∎