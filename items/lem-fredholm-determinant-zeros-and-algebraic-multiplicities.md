---
id: lem-fredholm-determinant-zeros-and-algebraic-multiplicities
kind: lemma
title: "Zeros of the local Fredholm determinant"
status: published
origin: pipeline
deps:
  - def-axiom-of-choice
  - def-algebraic-multiplicity-for-compact-operators
  - def-determinant-of-a-linear-operator
  - def-hilbert-exterior-power-and-induced-operator
  - def-hilbert-space
  - def-riesz-spectral-projection
  - def-trace-class-operator
  - lem-fredholm-determinant-trace-norm-continuity-and-growth
  - lem-separable-trace-class-determinant-construction
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-determinant-of-a-triangular-matrix
  - thm-nilpotent-jordan-string-basis
  - thm-operator-determinant-is-basis-independent
  - thm-riesz-spectral-projection-properties
  - thm-riesz-schauder-spectrum-of-a-compact-operator
  - thm-trace-class-is-a-two-sided-banach-operator-ideal
  - thm-zero-order-factorization-holomorphic-function
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
    - title: "Kostenko, Trace Ideals with Applications, §3.4.4, Theorem 3.4.6, printed pp. 40–41 (PDF pp. 49–50)"
      url: "https://users.fmf.uni-lj.si/kostenko/teach/IdealsNotes.pdf"
pipeline_run: frontier-36-complete
---

## Statement

Assume the Axiom of Choice. Let $H$ be a separable complex Hilbert space and
let $T:H\to H$ be trace class. For every $z\in\mathbb C$,
$$D_T(z)=0\quad\Longleftrightarrow\quad I+zT\text{ is not boundedly invertible},$$
where $D_T$ is the locally constructed determinant. For every nonzero
eigenvalue $\lambda$ of $T$ (equivalently, every nonzero spectral value), the
zero at $z_0=-1/\lambda$ has order
$$m_{\mathrm{alg}}(\lambda;T).$$

## Facts & Assumptions

**Given:** AC; a separable complex Hilbert space $H$; a trace-class operator
$T:H\to H$; and, for the multiplicity claim, a nonzero eigenvalue $\lambda$
of $T$.

[A1] AC selects from every family of nonempty sets ([[def-axiom-of-choice]]).

[A2] A complex Hilbert space is a Banach space in its induced norm
([[def-hilbert-space]]).

[A3] In the trace-class definition, $T\in\mathcal B(H,K)$ is assumed compact
([[def-trace-class-operator]]).

[A4] For a compact operator, every nonzero spectral value is an eigenvalue
with finite-dimensional generalized eigenspace ([[thm-riesz-schauder-spectrum-of-a-compact-operator]]).

[A5] For every $\varepsilon>0$, a compact operator has only finitely many
spectral values with modulus at least $\varepsilon$
([[thm-riesz-schauder-spectrum-of-a-compact-operator]]).

[A6] A Riesz projection $P_E$ is defined for a clopen spectral subset
$E\subseteq\sigma(T)$ ([[def-riesz-spectral-projection]]).

[A7] A Riesz projection satisfies $P^2=P$, commutes with $T$, and gives the
closed invariant splitting $H=\operatorname{ran}P\oplus\ker P$
([[thm-riesz-spectral-projection-properties]]).

[A8] When the summands are nonzero, the restriction spectra are $E$ on
$\operatorname{ran}P$ and $\sigma(T)\setminus E$ on $\ker P$
([[thm-riesz-spectral-projection-properties]]).

[A9] For nonzero $\lambda\in\sigma(T)$, the algebraic multiplicity is the
finite dimension of $G_\lambda(T)=\ker(T-\lambda I)^{m_0}$ for a stabilized
exponent, and $G_\lambda(T)=\operatorname{ran}P_\lambda$
([[def-algebraic-multiplicity-for-compact-operators]]).

[A10] The local determinant is the entire exterior-trace series
$$D_U(w)=\sum_{n\ge0}w^n\operatorname{tr}(\Lambda^nU),$$
with $D_U(0)=1$ ([[lem-separable-trace-class-determinant-construction]]).

[A11] For bounded finite-rank $F$ and finite-dimensional invariant $E$ with
$\operatorname{ran}F\subseteq E$,
$$D_F(w)=\det_E(I_E+w(F|_E));$$ the determinant on the zero space is $1$
([[lem-separable-trace-class-determinant-construction]]).

[A12] Trace-class operators form a linear space and remain trace class under
left or right multiplication by bounded operators
([[thm-trace-class-is-a-two-sided-banach-operator-ideal]]).

[A13] For trace-class $A,B$ on the same separable Hilbert space,
$$D_{A+B+AB}(1)=D_A(1)D_B(1)$$
([[lem-fredholm-determinant-trace-norm-continuity-and-growth]]).

[A14] The exterior action is given on wedges by
$(\Lambda^nU)(x_1\wedge\cdots\wedge x_n)=Ux_1\wedge\cdots\wedge Ux_n$,
and $\Lambda^0U=I_{\mathbb C}$; hence
$\Lambda^n(cU)=c^n\Lambda^nU$ for $n\ge1$
([[def-hilbert-exterior-power-and-induced-operator]]).

[A15] AC implies DC and hence Countable Choice
([[thm-choice-implies-dependent-implies-countable-choice]]); this supplies the
choice assumptions of [A10]–[A13].

[A16] Every finite-dimensional nilpotent endomorphism has an ordered basis
concatenating Jordan strings ([[thm-nilpotent-jordan-string-basis]]).

[A17] A finite-dimensional operator determinant is its matrix determinant in
an ordered basis ([[def-determinant-of-a-linear-operator]]).

[A18] That determinant is independent of the ordered basis
([[thm-operator-determinant-is-basis-independent]]).

[A19] The determinant of an upper or lower triangular matrix is the product
of its diagonal entries ([[thm-determinant-of-a-triangular-matrix]]).

[A20] A holomorphic function has a zero of order $d<\infty$ at $a$ exactly
when it factors locally as $(z-a)^d g(z)$ with $g(a)\ne0$
([[thm-zero-order-factorization-holomorphic-function]]).

**Source audit:** Kostenko, *Trace Ideals with Applications*, §3.4.4, Theorem 3.4.6 (printed pp. 40–41; PDF pp. 49–50), proves the same criterion and multiplicity claim. Its proof uses determinant multiplicativity for the invertible case, then a commuting Riesz projection, its finite-dimensional factor, and nonvanishing of the complementary determinant. I read that complete argument. The local proof below reconstructs those steps from the local determinant series, the proved local multiplicativity, and the library's Riesz-projection and algebraic-multiplicity suppliers; the cited theorem is not a proof premise. The projection is generally nonorthogonal, so the proof uses its bounded topological direct sum and does not use an orthogonal compression. No source uncertainty remains.

## Proof

**Proof technique:** direct.

1.1 If $T=0$, including when $H=\{0\}$, choose $F=T$ and $E=\{0\}$ in [A11]. Then $D_T\equiv1$ and $I+zT=I$ has its identity as bounded inverse for every $z$; there is no nonzero eigenvalue to consider. Hence assume $H\ne\{0\}$ and $T\ne0$. [A11]

1.2 For the multiplicity claim, let $\lambda\ne0$ be an eigenvalue of $T$. By [A2] and [A3], $H$ is a complex Banach space and $T$ is compact, so the Riesz–Schauder suppliers apply. The value $\lambda$ lies in $\sigma(T)$. By [A5], $S=\{\mu\in\sigma(T):|\mu|\ge|\lambda|/2\}$ is finite; every spectral point within distance $|\lambda|/2$ of $\lambda$ lies in $S$. If $S\setminus\{\lambda\}$ is empty, take $\delta=|\lambda|/4$; otherwise take $\delta$ positive and less than both $|\lambda|/2$ and the finitely many distances $|\lambda-\mu|$ for $\mu\in S\setminus\{\lambda\}$. Then $\delta$ isolates $\lambda$, so $E=\{\lambda\}$ is clopen in $\sigma(T)$ and [A1, A6] define its Riesz projection $P$. [A1, A2, A3, A5, A6]

1.3 For every trace-class $U$ and $c\in\mathbb C$, [A10] and [A14] give $$D_{cU}(1)=\sum_{n\ge0}\operatorname{tr}(\Lambda^n(cU))=D_U(c),$$ because the degree-zero term is $1$ on both sides and the degree-$n$ terms agree for each $n\ge1$; this includes $c=0$. [A10, A14]

2.1 Let $U$ be trace class and suppose $I+wU$ has bounded inverse $R$. Set $V:=-wUR$, which is trace class by [A12]. The right-inverse equation $(I+wU)R=I$ gives $wU+V+wUV=wU-wUR-w^2U^2R=wU-wU(I+wU)R=0$. Apply [A13] to $wU,V$ and use $D_0(1)=1$ from [A11] to get $1=D_{wU}(1)D_V(1)=D_U(w)D_V(1)$ by step 1.3. Thus $D_U(w)\ne0$. [A11, A12, A13, step 1.3, algebra]

2.2 Put $M=\operatorname{ran}P$ and $N=\ker P$. By [A7], $H=M\oplus N$ is a bounded topological direct sum and both summands are $T$-invariant. By [A9], $M=G_\lambda(T)$ and $d:=\dim M=m_{\mathrm{alg}}(\lambda;T)<\infty$; since $\lambda$ is an eigenvalue, $d\ge1$. The restriction $J:=(T|_M)-\lambda I_M$ is nilpotent because $M=\ker(T-\lambda I)^{m_0}$ for a stabilized exponent. Both $TP$ and $T(I-P)$ are trace class by [A12]. [A7, A9, A12, step 1.2]

3.1 Set $A=zTP$ and $B=zT(I-P)$. Since $PT=TP$, $AB=z^2TPT(I-P)=z^2T^2P(I-P)=0$, while $A+B=zT$. Apply [A13] and then step 1.3 to obtain, for every $z\in\mathbb C$, $$D_T(z)=D_{zT}(1)=D_{zTP}(1)D_{zT(I-P)}(1)=D_{TP}(z)D_{T(I-P)}(z).$$ [A13, step 1.3, step 2.2, algebra]

3.2 The operator $TP$ has finite rank and range in $M$, and $M$ is invariant; since $P|_M=I_M$, [A11] gives $D_{TP}(z)=\det_M(I_M+z(T|_M))$. A Jordan-string basis from [A16] makes the matrix of the nilpotent $J$ triangular with zero diagonal; hence the matrix of $I_M+z(T|_M)$ is triangular with diagonal entries $1+z\lambda$. By [A17] and [A18] its operator determinant is this matrix determinant, and [A19] gives $$D_{TP}(z)=(1+z\lambda)^d.$$ [A11, A16, A17, A18, A19, step 2.2]

3.3 Put $z_0=-1/\lambda$ and $Q(z):=D_{T(I-P)}(z)$. On $M$, $T(I-P)$ is zero; on $N$, it is $T|_N$. If $N\ne\{0\}$, [A8] excludes $\lambda$ from $\sigma(T|_N)$, so $I_N+z_0T|_N=(\lambda I_N-T|_N)/\lambda$ has a bounded inverse. Its direct-sum inverse with $I_M$ is bounded because the projections $P$ and $I-P$ are bounded. If $N=\{0\}$, the complementary operator is just the identity on $M$. Thus $I+z_0T(I-P)$ is boundedly invertible on $H$. Since $T(I-P)$ is trace class by step 2.2, step 2.1 yields $Q(z_0)\ne0$. [A8, step 2.1, step 2.2]

4.1 By steps 3.1 and 3.2, $$D_T(z)=\lambda^d(z-z_0)^dQ(z).$$ The function $Q$ is entire by [A10], and step 3.3 gives $Q(z_0)\ne0$; since $\lambda\ne0$, $\lambda^dQ$ is holomorphic and nonzero at $z_0$. Thus [A20] shows that $D_T$ has a zero of order $d=m_{\mathrm{alg}}(\lambda;T)$ at $z_0$. [A10, A20, step 3.1, step 3.2, step 3.3]

5.1 If $z\ne0$ and $I+zT$ is not boundedly invertible, set $\lambda=-1/z$. Then $I+zT=z(T-\lambda I)$, so $\lambda\in\sigma(T)$; by [A2] and [A3], T is a compact operator on a complex Banach space, and [A4] makes $\lambda$ an eigenvalue. Step 4.1 applies and gives $D_T(z)=0$. The case $z=0$ is invertible and has $D_T(0)=1$ by [A10]. [A2, A3, A4, A10, step 1.2, step 4.1, algebra]

6.1 If $I+zT$ is boundedly invertible, step 2.1 with $U=T$ gives $D_T(z)\ne0$; together with step 5.1 this proves both directions of the stated iff. For every nonzero spectral value, [A4] supplies an eigenvalue, so step 4.1 proves the multiplicity claim on the full nonzero spectrum. [A4, step 2.1, step 5.1]

7.1 The zero operator and zero Hilbert space are covered by step 1.1; on $H=\mathbb C$ with $T=tI$, the determinant is $1+zt$, so for $t\ne0$ its zero is simple and $m_{\mathrm{alg}}(t;T)=1$, while $t=0$ has no zero and every $I+zT$ is invertible. An empty nonzero spectrum yields no noninvertible $I+zT$ by step 5.1. There is no interval parameter or one-sided endpoint. The exact assumption is AC [A1]; it is used through the Riesz–Schauder, Riesz-projection, and algebraic-multiplicity suppliers, and AC supplies the AC$_\omega$ required by the local determinant and trace-class suppliers through [A15]. The finite Jordan-string argument makes no additional choice. Both iff directions were proved in step 6.1; the multiplicity assertion is a factorization claim, not an iff. [A1, A4, A15, step 1.1, step 4.1, step 5.1, step 6.1]
\qed
