---
id: prop-specht-constituents-of-an-fi-module-have-bounded-first-row
kind: proposition
title: "A stability degree bounds the first row of every padding tail"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 5
deps: [def-injectivity-surjectivity-and-stability-degree-of-an-fi-module,
       def-weight-of-a-characteristic-zero-fi-module,
       lem-generation-degree-bounds-surjectivity-degree-and-weight,
       lem-fi-coinvariant-functors-detect-vanishing-in-bounded-weight,
       lem-generated-in-degree-d-is-a-quotient-of-free-fi-modules,
       def-free-fi-module-generated-by-an-sm-module,
       lem-branching-rule-for-specht-induction-and-coinvariants,
       def-finite-generation-and-generation-degree-of-an-fi-module,
       def-fi-coinvariant-functors-and-transition-maps,
       def-first-row-padding-of-a-partition,
       lem-specht-modules-classify-irreducibles-over-characteristic-zero-fields,
       thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order,
       def-fi-category-and-fi-module,
       def-quotient-module]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Thomas Church, Jordan S. Ellenberg and Benson Farb, “FI-modules and stability for representations of symmetric groups”, arXiv:1204.4533v4 (2014); published in Duke Math. J. 164 (2015) 1833–1910"
      url: "https://arxiv.org/pdf/1204.4533"
      locator: "Proposition 3.2.8 with its complete proof, printed p. 20: every constituent $V(\\lambda)_n$ of $V_n$ satisfies $\\lambda_1\\le\\operatorname{stab-deg}(V)$, proved via the filtration $F^mV=\\operatorname{span}(V_{\\le m})$"
    - title: "I. G. Macdonald, Symmetric Functions and Hall Polynomials, 2nd ed., Oxford Mathematical Monographs, 1995 (author-hosted full text)"
      url: "https://math.berkeley.edu/~corteel/MATH249/macdonald.pdf"
      locator: "Chapter I §5, (5.16)–(5.17), printed pp. 73–74: Pieri's rule, the horizontal-strip input used through the branching rule"
---

## Statement

Read missing partition parts as $0$ when comparing row lengths.

Let $k$ be a field of characteristic $0$, let $V$ be an FI-module over $k$
([[def-fi-category-and-fi-module]]), and put
$s:=\operatorname{stab-deg}(V)<\infty$
([[def-injectivity-surjectivity-and-stability-degree-of-an-fi-module]]). Then
for every $n\ge0$, every irreducible constituent $V(\lambda)_n$ of the
$kS_n$-module $V_n$ satisfies

$$\lambda_1\le s.$$

Equivalently, since the padded partition is
$\lambda[n]=(n-|\lambda|,\lambda_1,\lambda_2,\dots)$, the second row of the
Specht diagram $\lambda[n]$ has length at most $s$; the first row of the
padding tail is the second row of the full diagram
([[def-first-row-padding-of-a-partition]],
[[def-weight-of-a-characteristic-zero-fi-module]]). No choice principle is
used.

## Facts & Assumptions

**Given:** A field $k$ of characteristic $0$, an FI-module $V$ over $k$ with $s=\operatorname{stab-deg}(V)<\infty$, and for $m\ge0$ the sub-FI-module $F^mV:=\operatorname{span}_V(V_{\le m})$, with $F^{-1}V:=0$, the graded quotient $G_m:=F^mV/F^{m-1}V$ and its degree-$m$ part $H_m:=(G_m)_m$; for a partition $\mu\vdash m$, $V_\mu$ is the irreducible $kS_m$-module with label $\mu$ ([[lem-specht-modules-classify-irreducibles-over-characteristic-zero-fields]], [[def-weight-of-a-characteristic-zero-fi-module]], [[def-quotient-module]]).

[F1] $\operatorname{span}_V(V_{\le m})$ is the smallest sub-FI-module containing all values of $V$ in degrees $\le m$; it is generated in degree $\le m$, the inclusions $F^mV\subseteq F^{m+1}V$ hold, and $V=\bigcup_{m\ge0}F^mV$ because every element of $V_S$ is the bijection transport of an element of $V_{[|S|]}$ and hence lies in $(F^{|S|}V)_S$ ([[def-finite-generation-and-generation-degree-of-an-fi-module]]).

[F2] Every quotient $U\twoheadrightarrow W$ of FI-modules satisfies $\operatorname{surj-deg}(W)\le\operatorname{surj-deg}(U)$ ([[lem-generation-degree-bounds-surjectivity-degree-and-weight]]); generation in degree $\le d$ passes to quotients, and for such a quotient the evaluation map $\bigoplus_{i\le d}M(W_i)\twoheadrightarrow W$ is surjective ([[lem-generated-in-degree-d-is-a-quotient-of-free-fi-modules]], [[def-free-fi-module-generated-by-an-sm-module]]).

[F3] For $\mu\vdash m$ and $0\le a\le m$, the coinvariants $(V_\mu)_{S_{m-a}}$ vanish if and only if $m-a>\mu_1$, i.e. $\mu_1<m-a$ ([[lem-fi-coinvariant-functors-detect-vanishing-in-bounded-weight]], [[def-fi-coinvariant-functors-and-transition-maps]]).

[F4] For a partition $\mu\vdash m$ and $n\ge m$, the constituents of $M(V_\mu)_n\cong\operatorname{Ind}_{S_m\times S_{n-m}}^{S_n}(V_\mu\boxtimes k)$ are the $V_\nu$ with $\nu\vdash n$ obtained from $\mu$ by adding one box in each of $n-m$ different columns, so $\nu_1\ge\nu_2$ and $\nu_2\le\mu_1$; and if $\nu=\lambda[n]$ then $\nu_2=\lambda_1$ ([[lem-branching-rule-for-specht-induction-and-coinvariants]], [[def-free-fi-module-generated-by-an-sm-module]], [[def-first-row-padding-of-a-partition]]).

[F5] $\Phi_a(V)_n=(V_{\mathbf a\sqcup n})_{S_n}$, and $T\colon\Phi_a(V)_n\to\Phi_a(V)_{n+1}$ is the map induced by an injection $\mathbf a\sqcup n\to\mathbf a\sqcup n+1$ fixing $\mathbf a$; $\operatorname{stab-deg}(V)=\max(\operatorname{inj-deg}(V),\operatorname{surj-deg}(V))$, so $\operatorname{surj-deg}(V)\le s$ ([[def-fi-coinvariant-functors-and-transition-maps]], [[def-injectivity-surjectivity-and-stability-degree-of-an-fi-module]]).

[F6] Over the characteristic-zero field $k$, every finite-dimensional $kS_m$-module is a direct sum of irreducibles $V_\mu$ ([[thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order]], [[lem-specht-modules-classify-irreducibles-over-characteristic-zero-fields]]), and $M$ is additive in its argument, so $M\bigl(\bigoplus_iN_i\bigr)\cong\bigoplus_iM(N_i)$ ([[def-free-fi-module-generated-by-an-sm-module]]).

## Proof

**Proof technique:** direct.

1.1 The $F^mV$ are sub-FI-modules with $F^mV\subseteq F^{m+1}V$, $V=\bigcup_mF^mV$, and each $F^mV$ is generated in degree $\le m$. [F1, given]

1.2 If every constituent of every $(G_m)_n$ has padding tail first row $\le s$, then so does every constituent of every $V_n$: let $V(\lambda)_n\cong P/Q$ be a constituent of $V_n$ and lift a $k$-basis of the finite-dimensional module $P/Q$ to elements of $P$ and take the span of their finite $S_n$-orbits, giving a finite-dimensional $kS_n$-submodule $P_0\subseteq P$ with $P_0+Q=P$; then $P_0/(P_0\cap Q)\cong P/Q$, and $P_0\subseteq(F^MV)_n$ for some $M$ because a finite basis of $P_0$ lies in a common filtration term. Intersecting the filtration with $P_0$ gives finite-dimensional successive factors embedding in $(G_m)_n$. Maschke splits this finite filtration, so every simple constituent of $P_0$ occurs in one of those factors; hence $V(\lambda)_n$ is a constituent of some $(G_m)_n$. [F1, F6, given, algebra]

1.3 Suppose $m\le s$. Then every constituent $V_\mu$ of $H_m$ has $\mu_1\le m\le s$ because $\mu\vdash m$. [given]

1.4 Suppose $m\ge s+1$ and set $\overline V:=V/F^{m-1}V$ and $a_0:=m-s-1\ge0$. As a quotient of $V$, the FI-module $\overline V$ has $\operatorname{surj-deg}(\overline V)\le s$ by [F2], so $T\colon\Phi_{a_0}(\overline V)_s\to\Phi_{a_0}(\overline V)_{s+1}$ is surjective. Its domain is $(\overline V_{m-1})_{S_s}=0$ because $\overline V_{m-1}=0$, and its target is $(\overline V_m)_{S_{s+1}}$; also $\overline V_m=V_m/\operatorname{span}_V(V_{<m})_m\cong H_m$ by the second isomorphism theorem. Hence $(H_m)_{S_{s+1}}=0$, and for every constituent $V_\mu$ of $H_m$ the coinvariants $(V_\mu)_{S_{s+1}}$ are a subquotient of $(H_m)_{S_{s+1}}$, hence vanish; by [F3] applied with $a=m-(s+1)$, so that $m-a=s+1$, this says $s+1>\mu_1$, i.e. $\mu_1\le s$. [F2, F3, F5, given]

2.1 The quotient $G_m$ is generated in degree $\le m$ and has $(G_m)_i=0$ for $i<m$, so by [F2] the evaluation map $M(H_m)\twoheadrightarrow G_m$ is surjective. Hence every constituent of $(G_m)_n$ is a constituent of $M(H_m)_n$. [F1, F2, step 1.1]

2.2 Every constituent of $M(H_m)_n$ has padding tail first row $\le s$: let $V(\lambda)_n\cong P/Q$ be a constituent of $M(H_m)_n$ and choose $x\in P\setminus Q$; the $S_n$-orbit span $X$ of $x$ is finite-dimensional, and $X/(X\cap Q)$ is a nonzero submodule of the simple $V(\lambda)_n$, hence isomorphic to it, so $V(\lambda)_n$ is a constituent of $X$. Since $X$ lies in the direct sum $\bigoplus_{T\subseteq[n],|T|=m}H_m(T)$ over finitely many $T$, after transporting by bijections $[m]\to T$ for these finitely many subsets, the projections of $X$ to the summands $H_m(T)$ generate a finite-dimensional $kS_m$-submodule $N\subseteq H_m$ with $X\subseteq M(N)_n$; so $V(\lambda)_n$ is a constituent of $M(N)_n$. By [F6] write $N\cong\bigoplus_\mu V_\mu^{\oplus c_\mu}$ (finite sum over partitions $\mu\vdash m$ with $c_\mu\ne0$); every such $V_\mu$ is a constituent of $H_m$, so $\mu_1\le s$ by steps 1.3 and 1.4. By [F6] $M(N)\cong\bigoplus_\mu M(V_\mu)^{\oplus c_\mu}$, and by [F4] every constituent $V_\nu$ of $M(V_\mu)_n$ satisfies $\nu_2\le\mu_1\le s$; a constituent of a finite direct sum is a constituent of one summand, so for the constituent $V(\lambda)_n\cong V_{\lambda[n]}$ of $M(N)_n$ we get $\lambda_1=(\lambda[n])_2\le s$. [F1, F4, F6, step 1.4]

3.1 Steps 2.1 and 2.2 show that every constituent of every $(G_m)_n$ has padding tail first row at most $s$ (for $m\le s$ via step 1.3, for $m\ge s+1$ via step 1.4), and step 1.2 transfers this bound to every constituent $V(\lambda)_n$ of $V_n$; thus $\lambda_1\le s$ always. Since $\lambda[n]=(n-|\lambda|,\lambda_1,\lambda_2,\dots)$, the number $\lambda_1$ is the length of the second row of the Specht diagram $\lambda[n]$. No choice was used. [step 1.2, step 1.3, step 1.4, step 2.1, step 2.2] ∎
