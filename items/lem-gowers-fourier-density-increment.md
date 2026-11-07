---
id: lem-gowers-fourier-density-increment
kind: lemma
title: "A large nonzero Fourier coefficient yields a denser subprogression"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps: [def-finite-density-k-term-arithmetic-progression]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "W. T. Gowers, A new proof of Szemerédi’s theorem"
      url: "https://www.cs.umd.edu/~gasarch/TOPICS/vdw/sz-thm-gowers-proof.pdf"
      locator: "§2, Lemma 2.3 and Corollaries 2.4–2.5; Corollary 2.5 is the large-Fourier-coefficient density increment"
    - title: "Terence Tao and Van H. Vu, Additive Combinatorics"
      url: "https://www.cs.umd.edu/~gasarch/COURSES/752/S22/AddComb.pdf"
      locator: "Chapter 10, Theorem 10.8 and the Roth density-increment proof"
---

## Statement

Let $0<\eta\le1$, let $N\ge(64\pi/\eta)^2$ be an integer, and let $A\subseteq[N]$ have density $\rho:=|A|/N$. For an integer $r$ with $1\le r<N$, define the unnormalised Fourier coefficient $\widetilde{1_A}(r):=\sum_{x=1}^{N}1_A(x)e^{-2\pi i r x/N}$. If $|\widetilde{1_A}(r)|\ge\eta N$, then there is an arithmetic progression $P\subseteq[N]$ with $|P|\ge\eta^2\sqrt N/(260\pi)$ and $|A\cap P|/|P|\ge\rho+\eta/20$.

## Statement references

[[def-finite-density-k-term-arithmetic-progression]]

[Gowers, *A new proof of Szemerédi’s theorem*, §2, Corollary 2.5](https://www.cs.umd.edu/~gasarch/TOPICS/vdw/sz-thm-gowers-proof.pdf)

[Tao and Vu, *Additive Combinatorics*, Chapter 10, Theorem 10.8](https://www.cs.umd.edu/~gasarch/COURSES/752/S22/AddComb.pdf)

## Facts & Assumptions

**Given:** $0<\eta\le1$, $N\ge(64\pi/\eta)^2$, $A\subseteq[N]$, $\rho=|A|/N$, and $1\le r<N$ with $|\widetilde{1_A}(r)|\ge\eta N$.

[A1] The interval $[N]$ is the set of integers $1,\ldots,N$, and a progression is an ordered finite list with one fixed positive integer difference ([[def-finite-density-k-term-arithmetic-progression]]).

## Proof

1.1 Define the balanced function $f(x):=1_A(x)-\rho$ for $x\in[N]$. Since $1\le r<N$, the finite geometric sum $\sum_{x=1}^{N}e^{-2\pi i r x/N}=0$, so $\sum_x f(x)e^{-2\pi i r x/N}=\widetilde{1_A}(r)$ and its magnitude is at least $\eta N$. Also $f$ is real, $|f(x)|\le1$, and $\sum_x f(x)=0$. [given, A1, algebra]

1.2 Put $K:=\lfloor\sqrt N\rfloor$. Partition the circle $\mathbb R/\mathbb Z$ into $K$ half-open arcs of length $1/K$ and place the $K+1$ residues $0,r/N,2r/N,\ldots,Kr/N$ into them. Take the lexicographically first pair of indices in a common arc; subtracting them gives an integer $u$ with $1\le u\le K$ and distance from $ur/N$ to the nearest integer at most $1/K$. [given, choose]

2.1 Let $L:=\lfloor\eta K/(16\pi)\rfloor$. The lower bound on $N$ gives $K\ge\sqrt N/2$ and $\eta K/(16\pi)\ge2$, hence $\eta\sqrt N/(64\pi)\le L\le\eta\sqrt N/(16\pi)$. Partition $[N]$ into its residue classes modulo $u$, then divide each class in increasing order into consecutive blocks of at most $L$ entries. Each block is a progression of difference $u$. If there are $M$ blocks, then $M\le N/L+u\le(64\pi/\eta+1)\sqrt N\le65\pi\sqrt N/\eta$. [given, A1, step 1.2, algebra]

3.1 On any block $P$ with first term $x_0$, each term has form $x_0+ju$ with $0\le j<L$. By step 1.2, the phase changes by at most $2\pi j/K\le\eta/8$, so $|e^{-2\pi i r x/N}-e^{-2\pi i r x_0/N}|\le\eta/8$. Summing this error against $|f(x)|\le1$ over all blocks gives at most $\eta N/8$. Therefore $\sum_P|\sum_{x\in P}f(x)|\ge|\sum_x f(x)e^{-2\pi i r x/N}|-\eta N/8\ge7\eta N/8$. [given, step 1.1, step 1.2, step 2.1, algebra]

4.1 The block sums are real and sum to zero. Their positive parts therefore sum to half their total absolute sum, at least $7\eta N/16\ge\eta N/4$. Take the first block $P$ in partition order with $\sum_{x\in P}f(x)\ge\eta N/(4M)\ge\eta^2\sqrt N/(260\pi)$. Since $f(x)\le1$, this also implies $|P|\ge\eta^2\sqrt N/(260\pi)$. Finally, $|A\cap P|/|P|=\rho+|P|^{-1}\sum_{x\in P}f(x)\ge\rho+\eta/20$, using $|P|\le L\le\eta\sqrt N/(16\pi)$. [given, A1, step 2.1, step 3.1, algebra] ∎

## Remarks

The constants here are a direct, weaker-constant version of the local phase-partition argument. The conclusion is only used when the stated large-coefficient hypothesis holds.
