---
id: cex-unsymmetrized-q-parameters-break-the-cartan-normalization
kind: counterexample
title: Unsymmetrized parameters break the coproduct of the Serre ideal
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
- lem-coproduct-preserves-the-positive-and-negative-quantum-serre-ideals
- def-drinfeld-jimbo-quantized-enveloping-algebra
- def-symmetrizable-cartan-datum-for-a-quantum-group
- def-quantum-integers-factorials-and-divided-powers-at-q-i
aliases: []
dependency_level: 5
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
  - title: Benjamin Enriquez, PBW and Duality Theorems for Quantum Groups and Quantum
      Current Algebras, Journal of Lie Theory 13 (2003), 21-64
    url: https://www.heldermann-verlag.de/jlt/jlt13/enrila.pdf
    locator: '§1.1, printed p. 22: the symmetrizer relation d_i a_ij=d_j a_ji, which
      identifies the compatibility condition absent from the test assignment.'
  - title: Richard Borcherds, Mark Haiman, Theo Johnson-Freyd, Nicolai Reshetikhin
      and Vera Serganova, Berkeley Lectures on Lie Groups and Quantum Groups
    url: https://categorified.net/LieQuantumGroups.pdf
    locator: 'Ch. 13, §13.1.3, Lemma 13.1.3.9 and Corollary 13.1.3.10, printed pp.
      308-309: the positive toral-action Borel and the normalized Serre coideal statement.'
  - title: Kyeonghoon Jeong, Seok-Jin Kang and Masaki Kashiwara, Crystal Bases for
      Quantum Generalized Kac-Moody Algebras, arXiv:math/0305390
    url: https://arxiv.org/pdf/math/0305390
    locator: '§1, printed pp. 5-6, Definition 1.2 and display (1.6): the standard
      symmetrized parameters and coproduct convention.'
pipeline_run: frontier-43-complex-representation-15
---

## Statement refuted

The following assertion is false: for every generalized Cartan matrix and every assignment of node parameters $q_i$, the standard Drinfeld–Jimbo coproduct formulas descend to the full node-toral presentation, including its mixed and Serre relations, with $K_i E_jK_i^{-1}=q_i^{a_{ij}}E_j$.

Take $A=\begin{pmatrix}2&-1\\-2&2\end{pmatrix}$, whose standard symmetrizer is $\operatorname{diag}(2,1)$, but assign $q_1=q_2=q$, with $q$ indeterminate. Precisely, let $B$ be the $\mathbb Q(q)$-algebra on $E_1,E_2,F_1,F_2,K_1^{\pm1},K_2^{\pm1}$, with commuting invertible toral generators, relations
$$K_iE_jK_i^{-1}=q^{a_{ij}}E_j,\quad K_iF_jK_i^{-1}=q^{-a_{ij}}F_j,\quad [E_i,F_j]=\delta_{ij}\frac{K_i-K_i^{-1}}{q-q^{-1}},$$
and both symmetric quantum Serre families with the common parameter $q$. This explicitly changed parameter assignment is the test presentation, not the symmetrized algebra of [[def-drinfeld-jimbo-quantized-enveloping-algebra]]. Put $S=E_1^2E_2-[2]_qE_1E_2E_1+E_2E_1^2=0$ in $B$.

The assignments $\Delta(E_i)=E_i\otimes K_i^{-1}+1\otimes E_i$, $\Delta(F_i)=F_i\otimes1+K_i\otimes F_i$, $\Delta(K_i)=K_i\otimes K_i$ fail to define an algebra map $B\to B\otimes B$. In an explicit representation of $B$ below, the proposed image of $S$ acts on $v_0\otimes v_1$ by
$$q^{-2}(1-q)(1+q^2)v_2\otimes v_2\ne0.$$
Thus the previously detected positive-Borel defect survives in the full quotient. The same proposed formulas already fail the off-diagonal mixed relation $[E_1,F_2]=0$.

## Facts & Assumptions

**Given:** The explicitly stated unsymmetrized full presentation $B$, with $q$ indeterminate.

[F1] The symmetric Gaussian coefficients are $[2]_q=q+q^{-1}$ and $[3]_q=q^2+1+q^{-2}$ ([[def-quantum-integers-factorials-and-divided-powers-at-q-i]]).

[F2] The displayed inverse-$K$ positive coproduct and its negative counterpart are the normalized Drinfeld–Jimbo convention; with the correct node parameters their Serre mixed terms cancel ([[lem-coproduct-preserves-the-positive-and-negative-quantum-serre-ideals]], [[def-drinfeld-jimbo-quantized-enveloping-algebra]]).

[F3] For this matrix the correct symmetry is $q_1=q^2$, $q_2=q$; the assignment tested above violates $q_1^{a_{12}}=q_2^{a_{21}}$ ([[def-symmetrizable-cartan-datum-for-a-quantum-group]]).

## Counterexample

1.1 On a four-dimensional $\mathbb Q(q)$-space with basis $v_0,v_1,v_2,v_3$, let $K_1$ have eigenvalues $(1,q^{-1},q,1)$ and $K_2$ have eigenvalues $(q^{-1},q,q^{-1},q)$. Define $E_1v_1=v_2$, $F_1v_2=v_1$, $E_2v_0=v_1$, $E_2v_2=v_3$, $F_2v_1=v_0$, $F_2v_3=v_2$, and make all other $E/F$ actions zero. Both toral operators are commuting and invertible. An $E_1$ arrow changes the pair of toral exponents by $(2,-2)$ and each $E_2$ arrow changes it by $(-1,2)$; the $F$ arrows reverse these changes. Hence all toral-action relations hold. [given, construct]

2.1 The diagonal entries of $[E_1,F_1]$ are $(0,-1,1,0)$, and those of $[E_2,F_2]$ are $(-1,1,-1,1)$. Each toral exponent is $0$ or $\pm1$, so these are precisely the entries of $(K_i-K_i^{-1})/(q-q^{-1})$. For each off-diagonal pair, both operator products $E_1F_2,F_2E_1$ and $E_2F_1,F_1E_2$ are zero: none of their two-arrow sequences is composable on a basis vector. Thus all four mixed relations hold. [step 1.1, algebra]

2.2 On its tensor square put $D_i=E_i\otimes K_i^{-1}+1\otimes E_i$. Direct computation gives $D_1(v_0\otimes v_1)=v_0\otimes v_2$ and $D_2(v_0\otimes v_1)=q^{-1}v_1\otimes v_1$. Also $D_1(v_1\otimes v_1)=qv_2\otimes v_1+v_1\otimes v_2$, so $D_1^2D_2(v_0\otimes v_1)=(1+q^{-2})v_2\otimes v_2$. Applying $D_2$ to $v_0\otimes v_2$ gives $qv_1\otimes v_2+v_0\otimes v_3$, whose $D_1$ image is $v_2\otimes v_2$; thus $D_1D_2D_1(v_0\otimes v_1)=v_2\otimes v_2$. Finally $D_1^2(v_0\otimes v_1)=0$, so the last Serre term contributes zero. [F2, step 1.1, algebra]

3.1 All four squares $E_1^2,E_2^2,F_1^2,F_2^2$ are zero. The compositions $E_1E_2E_1$ and $F_1F_2F_1$ are zero as well: after the first color-1 arrow, the color-2 arrow either vanishes or leads to a vector on which the final color-1 arrow vanishes. These identities give both length-three Serre relations $S^\pm_{12}=0$. Every term of $S^\pm_{21}$ contains a square or cube of the color-2 operator, since its four words are $X_2^3X_1$, $X_2^2X_1X_2$, $X_2X_1X_2^2$, and $X_1X_2^3$. Hence both length-four Serre relations vanish too. Steps 1.1 and 2.1 and these checks verify every defining relation of $B$, so the free-generator assignment factors through a representation of the full quotient. [F1, step 1.1, step 2.1, algebra]

4.1 By [F1] and step 2.2, the proposed coproduct image of $S$ acts as $(1+q^{-2}-q-q^{-1})v_2\otimes v_2=q^{-2}(1-q)(1+q^2)v_2\otimes v_2$, which is nonzero over $\mathbb Q(q)$. Since $S=0$ in the full represented algebra $B$, this contradicts the relation preservation required of a coproduct algebra map $B\to B\otimes B$. Independently, expanding the off-diagonal mixed commutator gives $[\Delta(E_1),\Delta(F_2)]=(q-1)K_2E_1\otimes F_2K_1^{-1}$: the cross scalar is $q_1^{a_{12}}q_2^{-a_{21}}-1=q-1$. Its action on $v_1\otimes v_1$ is $(q-1)v_2\otimes v_0\ne0$. Thus both the full Serre and mixed-relation failures are detected without an assumption of triangular decomposition. [F1, F2, F3, step 1.1, step 3.1, step 2.2, algebra] ∎
