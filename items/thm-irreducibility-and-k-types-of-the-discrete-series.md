---
id: thm-irreducibility-and-k-types-of-the-discrete-series
kind: theorem
title: Irreducibility and K-types of the discrete series
status: draft
origin: pipeline
deps:
  - def-k-finite-and-smooth-vectors-for-sl2-r
  - def-holomorphic-and-antiholomorphic-discrete-series-models
  - lem-the-weighted-discrete-series-space-is-a-hilbert-space
  - lem-the-weighted-area-form-is-sl2-r-invariant
  - lem-highest-and-lowest-weight-submodules-at-principal-series-reducibility-points
  - def-axiom-of-choice
dependency_level: 8
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_audit: "AC is inherited through the weighted model and Hilbert/K-type suppliers. The invariant-subspace argument and ladder calculations use no further choice."
verification:
  precheck: pass
sources:
  references:
    - title: "Emmanuel Kowalski, An Introduction to the Representation Theory of Groups (AMS GSM 155; author's PDF)"
      url: "https://people.math.ethz.ch/~kowalski/representation-theory.pdf"
      locator: "§7.4, Proposition 7.4.16(2) and its isotypic-projection proof, printed pp. 305–306; Exercise 7.4.17, printed pp. 307–308"
    - title: "Matt Kerr, Notes on the Representation Theory of SL2(R) (CBMS workshop writeup)"
      url: "https://www.math.wustl.edu/~matkerr/sl2notes.pdf"
      locator: "§2, formulas (2.5)–(2.6), printed pp. 9–10 (K-weights and ladder actions)"
    - title: "Pavel Etingof, Representations of Lie Groups, MIT 18.757 Lecture 9"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec09.pdf"
      locator: "§9.1, printed pp. 48–49 (one-sided highest- and lowest-weight modules)"
---
## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). For every integer $n\ge2$, the representations $D_n^-=(\pi_n,\mathcal H_n^+)$ and $D_n^+=(\pi_n^-,\mathcal H_n^-)$ of $G=\mathrm{SL}_2(\mathbb R)$ are irreducible strongly continuous unitary representations. Their K-type decompositions are
$$\mathcal H_n^+=\overline{\bigoplus_{j\ge0}\mathbb C f_{n,j}},\qquad \pi_n(k_\theta)f_{n,j}=e^{-i(n+2j)\theta}f_{n,j},\qquad \mathcal H_n^-=\overline{\bigoplus_{j\ge0}\mathbb C\widetilde f_{n,j}},\qquad \pi_n^-(k_\theta)\widetilde f_{n,j}=e^{i(n+2j)\theta}\widetilde f_{n,j},$$
each character occurring with multiplicity one. The displayed algebraic K-finite subspaces $V_n^-,V_n^+$ of [[def-holomorphic-and-antiholomorphic-discrete-series-models]] are isomorphic as $(\mathfrak g,K)$-modules to $M^+_{-n}$ and $M^-_n$, the extremal submodules of [[lem-highest-and-lowest-weight-submodules-at-principal-series-reducibility-points]](b) at $\nu=n-1$; in particular, the Casimir $\Omega$ of [[def-k-finite-and-smooth-vectors-for-sl2-r]] acts on these algebraic modules by $\tfrac18((n-1)^2-1)$.

## Facts & Assumptions

**Given:** AC; the holomorphic and antiholomorphic models and their smooth displayed K-finite vectors; and the Hilbert, K-type, and invariant norm results of the preceding weighted-space items.

[F1] The displayed vectors are smooth and have derived actions $L_{E_+}f_{n,j}=-j f_{n,j-1}$ (zero for $j=0$), $L_{E_-}f_{n,j}=(n+j)f_{n,j+1}$; on conjugates, $L_{E_+}\widetilde f_{n,j}=(n+j)\widetilde f_{n,j+1}$ and $L_{E_-}\widetilde f_{n,j}=-j\widetilde f_{n,j-1}$ ([[def-holomorphic-and-antiholomorphic-discrete-series-models]]).

[F2] The $f_{n,j}$ form a complete orthogonal K-eigenbasis of $\mathcal H_n^+$, the projections $P_j$ have range $\mathbb C f_{n,j}$, and the conjugate family has the analogous properties ([[lem-the-weighted-discrete-series-space-is-a-hilbert-space]]).

[F3] The model actions are strongly continuous unitary representations on the Hilbert spaces ([[lem-the-weighted-area-form-is-sl2-r-invariant]]).

[F4] At $\nu=n-1$, the extremal modules $M^+_{-n}$ and $M^-_n$ are irreducible with the same K-weights and ladder actions; the Casimir acts on them by $\tfrac18((n-1)^2-1)$ ([[lem-highest-and-lowest-weight-submodules-at-principal-series-reducibility-points]](b)). The model's algebraic K-finite spans identify with these modules ([[def-holomorphic-and-antiholomorphic-discrete-series-models]]).

## Proof

**Proof technique:** direct.

**Given:** The assumptions and notation of the Statement.

1.1 Let $W\subseteq\mathcal H_n^+$ be a nonzero closed $G$-invariant subspace and choose $0\ne v\in W$. It is K-invariant. By [F2], $v=\sum_{j\ge0}P_jv$ in Hilbert norm, so some $P_jv$ is nonzero; each $P_jv$ belongs to $W$ because its defining K-orbit integral is a norm limit of sums of vectors in $W$. Thus $f_{n,j}\in W$ for some $j$. [F2, F3, algebra]

2.1 Since $W$ is closed and G-invariant, for every real $X\in\mathfrak g$ and smooth $w\in W$ the difference quotients $(\pi_n(\exp(tX))w-w)/t$ lie in $W$ and converge in norm to $L_Xw$; hence $L_Xw\in W$. Applying the complex-linear combinations $E_+$ and $E_-$ to the smooth K-finite vectors in [F1] shows that $W$ contains $f_{n,j-1}$ whenever $j>0$, and contains $f_{n,j+1}$ for every $j\ge0$, since the coefficients $-j$ and $n+j$ are nonzero in those cases. Iteration gives every $f_{n,k}\in W$. Their span is dense by [F2], so closedness yields $W=\mathcal H_n^+$. [F1, F2, step 1.1, algebra]

3.1 The same argument applies to $\mathcal H_n^-$: from any nonzero closed invariant subspace, a nonzero character projection gives some $\widetilde f_{n,j}$; the nonzero coefficients $n+j$ upward and $-j$ downward generate all $\widetilde f_{n,k}$, whose span is dense. Thus both representations are irreducible. Their strong continuity and unitarity are [F3]. [F1, F2, F3, step 1.1, step 2.1]

4.1 The module identifications in [F4] match the K-weights and both ladder operators, and therefore identify the algebraic K-finite modules of $D_n^-$ and $D_n^+$ with $M^+_{-n}$ and $M^-_n$. The same supplier gives the stated Casimir scalar on these modules, with the normalization of [[def-k-finite-and-smooth-vectors-for-sl2-r]]. [F4, algebra] ∎
