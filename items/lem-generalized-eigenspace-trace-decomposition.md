---
id: lem-generalized-eigenspace-trace-decomposition
kind: lemma
title: "Trace decomposition through generalized eigenspaces and the invariant quotient"
status: published
origin: pipeline
deps:
  - def-axiom-of-choice
  - def-algebraic-multiplicity-for-compact-operators
  - def-bounded-linear-operator
  - def-hilbert-orthogonal-projection
  - def-hilbert-space
  - def-invariant-subspace-and-induced-quotient-operator
  - def-jordan-block-and-jordan-string
  - def-quotient-seminorm
  - def-quotient-vector-space-and-canonical-projection
  - def-riesz-spectral-projection
  - def-real-and-complex-inner-product-space
  - def-separable-space
  - def-spectrum-and-resolvent-of-a-bounded-operator
  - def-trace-class-operator
  - def-trace-of-a-trace-class-operator
  - lem-closed-subspace-of-a-banach-space-is-banach
  - lem-orthogonal-projection-is-linear-self-adjoint-contractive
  - lem-quasinilpotent-trace-class-operator-has-zero-trace
  - lem-weyl-eigenvalue-singular-value-inequalities
  - prop-induced-quotient-operator-is-well-defined
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-fredholm-alternative-for-identity-minus-compact
  - thm-nilpotent-jordan-string-basis
  - thm-orthogonal-decomposition-by-a-closed-subspace
  - thm-quotient-seminorm-is-a-norm-iff-subspace-is-closed
  - thm-riesz-schauder-spectrum-of-a-compact-operator
  - thm-riesz-spectral-projection-properties
  - thm-separable-hilbert-space-has-a-countable-orthonormal-basis
  - thm-trace-class-is-a-two-sided-banach-operator-ideal
  - thm-trace-is-absolutely-convergent-and-basis-independent
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  scraped: []
  references:
    - title: "Kostenko, Trace Ideals with Applications, §3.4.4, Theorem 3.4.7 proof, printed pp. 41–42 (PDF pp. 50–51); comparison only"
      url: "https://users.fmf.uni-lj.si/kostenko/teach/IdealsNotes.pdf"
    - title: "van Neerven, Functional Analysis, Proposition 14.22, printed pp. 574–575 (PDF pp. 585–586), and Theorem 14.33 proof, §14.5.a, printed pp. 583–591 (PDF pp. 594–602); comparison only"
      url: "https://fa.ewi.tudelft.nl/~neerven/FA/JvN-Functional_Analysis.pdf"
pipeline_run: frontier-36-complete
---

## Statement

Assume the Axiom of Choice. Let $H$ be a separable complex Hilbert space and
let $T:H\to H$ be trace class. Write $\Lambda(T)=\{\lambda\in\sigma(T):
\lambda\ne0\}$, let $G_\lambda(T)$ be the generalized eigenspace and let
$m_{\mathrm{alg}}(\lambda;T)=\dim G_\lambda(T)$. Define
$$M:=\overline{\operatorname{span}\{G_\lambda(T):\lambda\in\Lambda(T)\}},\qquad P:=P_M,\qquad Q:=I-P,$$
where $P_M$ is the Hilbert orthogonal projection onto $M$. Put
$T_M:=T|_M$ and $D:=(QTQ)|_{M^\perp}$. Then $T_M$ and $D$ are trace class,
and $D$ has no nonzero spectral values (the assertion is vacuous if
$M^\perp=\{0\}$). With traces taken on their displayed Hilbert spaces,
$$\operatorname{tr}_H(T)=\operatorname{tr}_M(T_M)+\operatorname{tr}_{M^\perp}(D),\qquad \operatorname{tr}_M(T_M)=\sum_{\lambda\in\Lambda(T)}m_{\mathrm{alg}}(\lambda;T)\lambda,$$
and the eigenvalue sum is absolutely convergent. The extension $QTQ:H\to H$
is quasinilpotent and has trace zero.

## Facts & Assumptions

**Given:** AC; a separable complex Hilbert space $H$; and a trace-class operator
$T:H\to H$.

[A1] AC selects from every family of nonempty sets ([[def-axiom-of-choice]]).

[A2] In ZF, $\mathrm{AC}\Rightarrow\mathrm{DC}\Rightarrow\mathrm{AC}_\omega$
([[thm-choice-implies-dependent-implies-countable-choice]]).

[A3] A complex Hilbert space is a Banach space in its induced norm
([[def-hilbert-space]]).

[A4] A trace-class operator is compact and bounded
([[def-trace-class-operator]]).

[A5] A compact operator on a complex Banach space has finite-dimensional
generalized eigenspaces at its nonzero spectral values; every such value is an
eigenvalue, and only finitely many spectral values have modulus at least any
fixed $\varepsilon>0$ ([[thm-riesz-schauder-spectrum-of-a-compact-operator]]).

[A6] For each nonzero eigenvalue $\lambda$, $G_\lambda(T)$ is the stabilized
kernel of $(T-\lambda I)^m$, is finite dimensional, and
$m_{\mathrm{alg}}(\lambda;T)=\dim G_\lambda(T)=\operatorname{rank}P_\lambda$
([[def-algebraic-multiplicity-for-compact-operators]]).

[A7] For an isolated spectral value, the Riesz projection is a bounded
idempotent commuting with $T$, its range and kernel are closed invariant
subspaces giving a direct sum, and the restriction spectra are the two spectral
parts ([[def-riesz-spectral-projection]],
[[thm-riesz-spectral-projection-properties]]).

[A8] A subspace $W$ is $T$-invariant when $T(W)\subseteq W$, and this
invariance makes $\bar T(v+W):=T(v)+W$ a well-defined linear operator on $H/W$
with canonical projection $\pi:H\to H/W$ satisfying $\pi T=\bar T\pi$
([[def-invariant-subspace-and-induced-quotient-operator]],
[[def-quotient-vector-space-and-canonical-projection]],
[[prop-induced-quotient-operator-is-well-defined]]).

[A9] The quotient seminorm is $\|x+W\|=\inf_{w\in W}\|x+w\|$ and is a norm
when $W$ is closed ([[def-quotient-seminorm]],
[[thm-quotient-seminorm-is-a-norm-iff-subspace-is-closed]]).

[A10] Under AC, if $X$ is Banach and $K:X\to X$ is compact, then
$I-K$ is injective if and only if it is surjective, and either condition gives
a bounded inverse ([[thm-fredholm-alternative-for-identity-minus-compact]]).

[A11] A trace-class operator remains trace class after composition on either
side with bounded maps between Hilbert spaces
([[thm-trace-class-is-a-two-sided-banach-operator-ideal]]).

[A12] For every supplied Hilbert basis $E$ of a trace-class operator $S$, its
relative trace is $\operatorname{tr}_E(S)=\sum_{e\in E}\langle Se,e\rangle$;
the series is absolutely convergent, and the trace theorem identifies it with
the basis-independent trace $\operatorname{tr}(S)$
([[def-trace-of-a-trace-class-operator]],
[[thm-trace-is-absolutely-convergent-and-basis-independent]]).

[A13] A closed subspace of a Hilbert space is Hilbert; an orthogonal projection
onto a closed subspace gives $H=M\oplus M^\perp$, is self-adjoint, and is
contractive ([[thm-orthogonal-decomposition-by-a-closed-subspace]],
[[def-hilbert-orthogonal-projection]],
[[lem-orthogonal-projection-is-linear-self-adjoint-contractive]]).

[A14] From a supplied dense sequence in a Hilbert space, Gram--Schmidt gives
a finite or countable Hilbert basis ([[thm-separable-hilbert-space-has-a-countable-orthonormal-basis]]).

[A15] For a trace-class compact operator, the eigenvalue sequence repeated by
algebraic multiplicity can be listed so that
$\sum_j|\lambda_j(T)|\le\|T\|_1$
([[lem-weyl-eigenvalue-singular-value-inequalities]]).

[A16] Every finite-dimensional nilpotent endomorphism has an ordered basis
concatenating Jordan strings
([[thm-nilpotent-jordan-string-basis]]); on a string
$(v_1,\ldots,v_m)$ at $\lambda$,
$(T-\lambda I)v_1=0$ and $(T-\lambda I)v_j=v_{j-1}$ for $j\ge2$
([[def-jordan-block-and-jordan-string]]).

[A17] If $S$ is trace class on a separable complex Hilbert space and
$\sigma(S)\subseteq\{0\}$, then $\operatorname{tr}(S)=0$
([[lem-quasinilpotent-trace-class-operator-has-zero-trace]]).

[A18] The complex inner product is linear in its first argument and
conjugate-linear in its second ([[def-real-and-complex-inner-product-space]]).

[A19] A closed linear subspace of a Banach space is Banach in its induced norm
([[lem-closed-subspace-of-a-banach-space-is-banach]]).

[A20] For a bounded operator on a complex Banach space, $\lambda\notin\sigma(T)$
exactly when $\lambda I-T$ is bijective with bounded inverse
([[def-spectrum-and-resolvent-of-a-bounded-operator]]).

[A21] Boundedness of $T$ supplies a constant $C_T\ge0$ with
$\|Tx\|\le C_T\|x\|$ for every $x\in H$
([[def-bounded-linear-operator]]).

[A22] Separability of $H$ supplies a dense sequence in $H$
([[def-separable-space]]).

**Choice accounting:** The exact assumption is AC. It supplies DC for
Riesz--Schauder/Fredholm suppliers and AC$_\omega$ for trace, projection and
separable-basis suppliers. The Weyl list supplies an enumeration of the
nonzero eigenvalue multiset; AC$_\omega$ permits choosing Jordan-string bases
for its countably many finite-dimensional generalized eigenspaces. The basis
of $M^\perp$ is obtained by projecting a supplied dense sequence of $H$ and
applying the choice-free Gram--Schmidt construction. No ambient basis is used
without being supplied or constructed.

**Source audit:** Kostenko's §3.4.4 proof of Theorem 3.4.7 derives the
spectral product and trace identity by invoking Theorem 3.4.5, the Hadamard
minimal-type product formula. Van Neerven's Theorem 14.33 proof obtains the
determinant spectral product from Theorem 14.43, whose proof invokes Lemma 14.42;
Proposition 14.22 separately gives the eigenvalue absolute-sum bound and uses
finite-dimensional invariant generalized-eigenspace sums. These routes are
comparison only. This item proves the trace on $M$ using an adapted orthonormal
basis and proves the compressed quotient has no nonzero spectrum using Riesz
splitting and the compact Fredholm alternative. Kostenko's Theorem 3.4.7 proof
and van Neerven's Proposition 14.22 and Theorem 14.33 arguments were read in
full; no source premise is left unverified.

## Proof

**Proof technique:** direct.

1.1 If $H=\{0\}$, then $M=M^\perp=\{0\}$, all operators and traces in the claim are zero, and the eigenvalue sum is empty; hence assume $H\ne\{0\}$. [A3, A4, algebra]

2.1 Each $G_\lambda(T)$ is $T$-invariant because $(T-\lambda I)^mTx=T(T-\lambda I)^mx=0$ for $x\in G_\lambda(T)$; boundedness of $T$ then makes its closed span $M$ invariant. By [A13], $P=P_M$ and $Q=I-P$ are bounded orthogonal projections, $H=M\oplus N$ with $N=M^\perp$, and both $M,N$ are closed Hilbert subspaces. [A3, A4, A6, A13, step 1.1, algebra]

3.1 Let $i_M:M\hookrightarrow H$ and $i_N:N\hookrightarrow H$ be inclusions. Invariance gives $T_M=PTi_M$, while $D=QTi_N$ and $B:=QTQ$ on $H$; by [A11] all three are trace class, and $B|_M=0$, $B|_N=D$. [A11, step 2.1, algebra]

4.1 Let $(\lambda_j)$ be the finite or countable nonzero eigenvalue list from [A15], repeated by algebraic multiplicity. For each distinct $\lambda$, choose a Jordan-string basis of $G_\lambda(T)$ for $(T-\lambda I)|_{G_\lambda(T)}$ using [A6, A16]. These generalized eigenspaces are linearly independent: in a finite relation $\sum_\mu x_\mu=0$, $x_\mu\in G_\mu$, applying $R_\lambda=\prod_{\mu\ne\lambda}(T-\mu I)^{m_\mu}$ kills every other term, while each factor on $G_\lambda$ is $(\lambda-\mu)I+N_\lambda$ with $N_\lambda$ nilpotent and hence invertible by a finite geometric sum; thus $x_\lambda=0$. Order the distinct eigenvalues by their first occurrence in $(\lambda_j)$ and concatenate their string bases. Every finite initial span is $T$-invariant, and its successive one-dimensional quotient acts by the corresponding eigenvalue. Applying Gram--Schmidt preserves these initial spans, so it gives a Hilbert basis $(e_j)$ of $M$ with $Te_j-\lambda'_je_j\in\operatorname{span}(e_1,\ldots,e_{j-1})$, where $(\lambda'_j)$ is a reordering of $(\lambda_j)$. By [A12], [A18], and [A15], $\operatorname{tr}_M(T_M)=\sum_j\langle Te_j,e_j\rangle=\sum_j\lambda'_j=\sum_j\lambda_j$, and the sum is absolutely convergent. The empty and finite lists give the empty and finite bases. [A1, A2, A6, A12, A15, A16, A18, step 3.1, algebra]

4.2 Let $X:=H/M$ with its quotient norm and let $\pi:H\to X$ be the canonical projection. By [A8, A9], $\bar T(x+M)=Tx+M$ is well defined. For $m\in M$, $Tx+Tm\in Tx+M$, so [A21] gives $\|\bar T(x+M)\|\le C_T\|x+m\|$; taking the infimum over $m$ shows that $\bar T$ is bounded. The map $J:N\to X$, $J(n)=n+M$, is an isometric isomorphism: every coset has the representative $Qx\in N$, and $\|n+M\|=\inf_{m\in M}\|n-m\|=\|n\|$ by orthogonality. For $D=Q T|_N$, $JD=\bar T J$. [A8, A9, A13, A21, step 2.1, step 3.1, algebra]

5.1 By [A22] take a dense sequence $(h_j)$ in $H$. Contractivity of $P,Q$ makes $(Ph_j)$ dense in $M$ and $(Qh_j)$ dense in $N$, so [A14] supplies Hilbert bases $E_M$ of $M$ and $E_N$ of $N$; the basis of $M$ may be the adapted one from step 4.1. Their union is a Hilbert basis of $H$. For $e\in E_M$, $Te=T_Me$; for $f\in E_N$, $Tf-Bf=PTf\in M\perp f$, and $Be=0$. Summing the absolutely convergent diagonal series from [A12] over these two disjoint basis parts yields $\operatorname{tr}_H(T)=\operatorname{tr}_M(T_M)+\operatorname{tr}_H(B)$ and $\operatorname{tr}_H(B)=\operatorname{tr}_N(D)$. [A12, A13, A14, A22, step 2.1, step 3.1]

5.2 Fix $\lambda\ne0$ with $\lambda\notin\sigma(T)$ and set $A=\lambda I-T$. By [A20], $A$ has a bounded inverse on $H$. Its restriction to $M$ is injective; $A|_M=\lambda(I_M-T_M/\lambda)$, where $T_M$ is compact by [A4, step 3.1], and $M$ is Banach by [A3, A13, A19]. The Fredholm alternative [A10] makes $A|_M$ surjective with bounded inverse. Consequently $A^{-1}(M)=M$ and the induced quotient operator $\bar A=\lambda I_X-\bar T$ has the bounded inverse induced by $A^{-1}$. [A3, A4, A8, A10, A13, A19, A20, step 2.1, step 3.1, step 4.2, algebra]

5.3 Fix $\lambda\ne0$ with $\lambda\in\sigma(T)$. By [A5], $\lambda$ is an eigenvalue; the finiteness of every nonzero spectral annulus isolates it, so [A7] gives the Riesz projection $P_\lambda$, with $G:=G_\lambda(T)=\operatorname{ran}P_\lambda$ and $Y:=\ker P_\lambda$. Put $M_0:=M\cap Y$. For $x\in G_\mu(T)$ with $\mu\ne\lambda$, $P_\lambda x\in G$ and $(T-\mu I)^mP_\lambda x=P_\lambda(T-\mu I)^mx=0$; on $G$, $T-\mu I=(\lambda-\mu)I+N_\lambda$ is invertible, so $P_\lambda x=0$, while $P_\lambda$ is the identity on $G$. Continuity and the definition of $M$ give $P_\lambda(M)\subseteq G\subseteq M$, hence $M=G\oplus M_0$. If $Y\ne\{0\}$, [A7] gives that $A_Y:=\lambda I_Y-T|_Y$ is boundedly invertible; its restriction to $M_0$ is injective. The subspace $M_0$ is closed in $M$, so [A19] makes it Banach. The restriction $T|_{M_0}$ is compact because a bounded sequence in $M_0$ has a subsequence whose $T$-images converge in $H$, and the limit lies in $M_0$ by closedness. Thus [A10] makes $A|_{M_0}=\lambda(I_{M_0}-T|_{M_0}/\lambda)$ boundedly invertible and $A_Y^{-1}(M_0)=M_0$. Thus $A_Y$ and its inverse both preserve $M_0$, so they induce mutually inverse bounded operators on $Y/M_0$. The map $\Phi:Y/M_0\to H/M$, $y+M_0\mapsto y+M$, is well defined and bounded: changing $y$ by an element of $M_0$ does not change its image, and $\|y+M\|\le\|y+M_0\|$. It is onto because $x+M=(I-P_\lambda)x+M$ and $(I-P_\lambda)x\in Y$; it is one-to-one because $Y\cap M=M_0$. Its inverse is therefore $x+M\mapsto(I-P_\lambda)x+M_0$. This inverse is well defined since $(I-P_\lambda)M\subseteq M_0$, and bounded with norm at most $\|I-P_\lambda\|$: for every $m\in M$, $(I-P_\lambda)(x+m)$ represents the same image modulo $M_0$, so taking the infimum over $m$ gives the bound. The map $\Phi$ intertwines the induced operators because $A_Yy+M=Ay+M$ for $y\in Y$. Hence $\bar A=\lambda I_X-\bar T$ is boundedly invertible. If $Y=\{0\}$ then $P_\lambda=I_H$, so $G=H\subseteq M$, hence $M=H$ and $X=\{0\}$, whose unique endomorphism is bijective, giving the same quotient conclusion. [A3, A4, A5, A6, A7, A8, A9, A10, A19, A20, step 2.1, step 3.1, step 4.2, algebra]

6.1 Steps 5.2--5.3 show that $\lambda I_X-\bar T$ is boundedly invertible for every $\lambda\ne0$. By step 4.2, $\lambda I_N-D$ is also boundedly invertible. Since $B=0_M\oplus D$ on the orthogonal sum $H=M\oplus N$, the operator $\lambda I_H-B=\lambda I_M\oplus(\lambda I_N-D)$ has a bounded inverse for every $\lambda\ne0$. Thus [A20] gives $\sigma_H(B)\subseteq\{0\}$; the compression $D$ has no nonzero spectral values whenever $N\ne\{0\}$. [A20, step 4.2, step 5.2, step 5.3, algebra]

7.1 Apply [A17] to the trace-class quasinilpotent operator $B$ on the original separable $H$ to get $\operatorname{tr}_H(B)=0$. Step 5.1 then gives $\operatorname{tr}_H(T)=\operatorname{tr}_M(T_M)$, and step 4.1 identifies this with the absolutely convergent eigenvalue sum. If there are no nonzero eigenvalues then $M=0$, $B=T$, and the same argument yields the empty sum $0$; this includes $T=0$. If $H=\mathbb C$ and $T=qI$, then for $q\ne0$ the sole eigenvalue is $q$ with multiplicity one, $M=H$, and the two traces are $q$ and $0$; for $q=0$ the eigenvalue list and $M$ are empty/zero and all traces vanish. There is no endpoint parameter, and the statement is not an equivalence, so both iff directions are inapplicable. AC is explicit in [A1] and propagates to AC$_\omega$ through [A2] for the trace, Weyl, projection and basis suppliers. [A1, A2, A17, step 4.1, step 5.1, step 6.1]
\qed
