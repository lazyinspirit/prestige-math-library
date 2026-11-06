---
id: lem-cft-local-field-reconstruction-and-uniqueness
kind: lemma
title: Reconstruction and uniqueness from creative local generating fields
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: mathematics
deps:
  - def-vertex-algebra-state-field
  - def-formal-distribution-on-a-vector-space
dependency_roles:
  def-vertex-algebra-state-field: mathematical-premise
  def-formal-distribution-on-a-vector-space: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: Christophe Nozaradan, Introduction to Vertex Algebras, reconstruction of vertex algebras from local fields
      url: https://arxiv.org/pdf/0809.1380
category: quantum-field-theory-mathematics
page: cft-euclidean-axioms-and-sewing
reference: items/lem-cft-local-field-reconstruction-and-uniqueness.md
dependency_level: 0
---

## Statement

Let $V$ be a complex vector space, $\mathbf1\ne0$, and $T\in\operatorname{End}V$ with $T\mathbf1=0$. Let $\{A^i(z)=\sum_{n\in\mathbb Z}A^i_nz^{-n-1}\}_{i\in I}$ be fields: for each $i,v$, $A^i_nv=0$ for sufficiently large $n$. Assume pairwise mutual locality with finite exponents, translation covariance $[T,A^i(z)]=\partial_z A^i(z)$, and creativity $A^i(z)\mathbf1\in V[\![z]\!]$ with constant term $a^i$. Assume the finite words $A^{i_1}_{n_1}\cdots A^{i_r}_{n_r}\mathbf1$, including the empty word, linearly span $V$. Then there is a unique vertex algebra $(V,\mathbf1,T,Y)$ with $Y(a^i,z)=A^i(z)$. All its fields lie in the linear span of the identity field and finite iterated $n$th products of the generating fields. Its state map on that field space is a bijection, and $Y(a_{(n)}b,z)=Y(a,z)_{(n)}Y(b,z)$. The full formal Jacobi identity holds.

More precisely, if $A,B,C$ have locality exponents $N,M,K$ for $(A,B),(A,C),(B,C)$ respectively, then $A_{(n)}B=0$ for $n\ge N$, and $M+K+N-n-1$ is a locality exponent for $(A_{(n)}B,C)$ when $n<N$. These are vectorwise fields; no uniform truncation bound over all vectors is asserted. If additionally $V=\bigoplus_{r\ge0}V_r$, $\mathbf1\in V_0$, $T V_r\subset V_{r+1}$, and each generator has an integral degree $d_i$ with $A^i_n V_r\subset V_{r+d_i-n-1}$, then $Y$ preserves this grading: for homogeneous $a\in V_d$, $a_{(n)}V_r\subset V_{r+d-n-1}$. Finite-dimensionality of the $V_r$, a conformal vector, unitarity, and simplicity are not conclusions of this lemma.

## Statement references

[[def-vertex-algebra-state-field]]

[[def-formal-distribution-on-a-vector-space]]

## Facts & Assumptions

[F1] Fields, ordinary commutators, generalized integer binomial coefficients, the expansions $\iota_{x,z}(x-z)^n$ and $\iota_{z,x}(x-z)^n$, and $n$th products have the exact conventions of [[def-formal-distribution-on-a-vector-space]]. No super signs are used.

[F2] The target vertex-algebra axioms are precisely truncation, vacuum/creation, translation covariance, and locality in [[def-vertex-algebra-state-field]]. Jacobi will also be proved explicitly, rather than assumed as a reconstruction theorem.

## Proof

**Given:** The fields, vacuum, translation, locality, spanning hypothesis, and, for the last assertion only, grading in the Statement. All residues below are formal coefficient extractions; infinite mode sums are interpreted on one vector at a time.

1.1 For fields $A,B$ put $D_n(z)=A(z)_{(n)}B(z)$. Direct expansion of the two binomial series gives $(D_n)_k v=\sum_{j\ge0}(-1)^j\binom nj\bigl(A_{n-j}B_{k+j}v-(-1)^n B_{n+k-j}A_jv\bigr)$. Both sums are finite: the first by truncation of $B$ on $v$, the second by truncation of $A$ on $v$. For sufficiently large $k$, the whole first sum vanishes, while the second involves only a fixed finite set of $j$ and vanishes by truncation of $B$ on those finitely many vectors $A_jv$. Thus $D_n$ is a field. If $(x-z)^N[A(x),B(z)]=0$ and $n\ge N$, the expansions of $(x-z)^n$ coincide and locality gives $D_n=0$. [given, F1, algebra]

2.1 Here is an explicit locality calculation. Suppose $(x-z)^N[A(x),B(z)]=(x-w)^M[A(x),C(w)]=(z-w)^K[B(z),C(w)]=0$. For $n<N$ set $s=N-n-1\ge0$. Multiply the residue defining $[D_n(z),C(w)]$ by $(z-w)^{K+M+s}$ and use $(z-w)^{M+s}=\sum_{j=0}^{M+s}\binom{M+s}{j}(x-w)^{M+s-j}(-(x-z))^j$. In a term $j\le s$, there remain factors $(x-w)^M$ and $(z-w)^K$, so $C$ commutes through both $A$ and $B$ and the four commutator terms cancel. In a term $j>s$, the power $n+j\ge N$ is nonnegative, so its two binomial expansions coincide and $(x-z)^{n+j}[A(x),B(z)]=0$ cancels the same four terms before taking the residue. All outside factors are polynomials, so these manipulations are finite sums. This proves the stated exponent $K+M+s$. [given, F1, step 1.1, algebra]

2.2 Suppose in addition $A,B$ are translation covariant. Apply $[T,-]$ to their residue definition, replace commutators by $\partial_x A$ and $\partial_z B$, and move $\partial_x$ from $A$ by formal integration by parts. Since $\partial_x(x-z)^n=-\partial_z(x-z)^n$ in each expansion, this gives $[T,D_n(z)]=\partial_z D_n(z)$. For any translation-covariant field $E$, the Laurent series $E(z)\mathbf1$ satisfies $\partial_z(E(z)\mathbf1)=T(E(z)\mathbf1)$. It has no negative powers: a least negative power $q$ would have derivative coefficient $q[z^q]E(z)\mathbf1$ at degree $q-1$, while the right side has no term there. The coefficient recursion therefore gives $E(z)\mathbf1=e^{zT}E_{-1}\mathbf1$. In particular all such fields are creative. For creative $A,B$, set $a=A_{-1}\mathbf1$, $b=B_{-1}\mathbf1$. Formula 1.1 at $k=-1$ gives $(D_n)_{-1}\mathbf1=A_n b$: every $A_j\mathbf1$ with $j\ge0$ and every $B_{-1+j}\mathbf1$ with $j\ge1$ vanishes. [given, F1, step 1.1, algebra]

2.3 We prove Jacobi by coefficient extraction, including negative binomial indices. Fix local $A,B$ with exponent $N$, integers $m,n$, and $D_j=A_{(j)}B$. Then $\operatorname{Res}_x x^m\bigl(\iota_{x,z}(x-z)^n A(x)B(z)-\iota_{z,x}(x-z)^n B(z)A(x)\bigr)=\sum_{i\ge0}\binom mi z^{m-i}D_{n+i}(z)$. If $n\ge N$ both sides vanish. Otherwise set $s=N-n-1$. In the Laurent polynomial ring $\mathbb C[x^{\pm1},z^{\pm1}]$, the difference $x^m-\sum_{i=0}^{s}\binom mi z^{m-i}(x-z)^i$ is divisible by $(x-z)^{s+1}$: substitute $x=z+h$ and take its Taylor coefficients through order $s$; this argument works for negative $m$ because $x$ and $z$ are units. Multiplying this difference by the two $n$th-product kernels leaves a common Laurent polynomial times $(x-z)^N[A(x),B(z)]$, which is zero. The remaining terms give the displayed equality. Its right-hand sum is finite since $D_{n+i}=0$ for $n+i\ge N$. [F1, step 1.1, algebra]

3.1 Let $\mathcal U$ be the complex linear span of the identity field and all finite bracketed $n$th-product expressions in the generators. Every member is a translation-covariant field by 1.1 and 2.2. Every pair is mutually local: induct on the sum of the numbers of generators/identity symbols in two bracketed expressions; when one is a product, its two factors have smaller total complexity with the other expression, so 2.1 applies; the base is the given generator locality and the identity commutes with every field. Finite linear combinations remain local by taking the maximum of finitely many exponents. Define $\epsilon(E)=E_{-1}\mathbf1$. Formula 2.2 gives $\epsilon(A_{(n)}B)=A_n\epsilon(B)$. Repeatedly applying it shows that the image of $\epsilon$ contains every spanning word from the Statement, hence is all of $V$. [given, step 1.1, step 2.1, step 2.2, construct]

4.1 The state map is injective without a dimension argument. Suppose $E\in\mathcal U$ has $\epsilon(E)=0$. Then $E(z)\mathbf1=0$ by 2.2. If $E(z)v=0$ and $A^i(w)$ is a generator, locality gives $(z-w)^L E(z)A^i(w)v=(z-w)^L A^i(w)E(z)v=0$. The left-hand product $E(z)A^i(w)v$ belongs to $V((z))((w))$: its $w$ powers are bounded below, and every $w$ coefficient is a Laurent series in $z$. In this iterated-series module multiplication by $z-w$ is invertible, with inverse $z^{-1}\sum_{j\ge0}(w/z)^j$. Thus $E(z)A^i_n v=0$ for every $n$. Induction on word length and the spanning hypothesis give $E(z)=0$ on $V$. Consequently $\epsilon:\mathcal U\to V$ is a linear bijection. [given, step 2.2, step 3.1, algebra]

5.1 Define $Y(a,z)=\epsilon^{-1}(a)$. The identity field has state $\mathbf1$, so $Y(\mathbf1,z)=\operatorname{id}$. The generators have states $a^i$, so $Y(a^i,z)=A^i(z)$. Truncation, translation covariance, mutual locality, and $Y(a,z)\mathbf1=e^{zT}a$ follow from 3.1 and 2.2. These are all the axioms in [F2]. Moreover $Y(a,z)_{(n)}Y(b,z)$ lies in $\mathcal U$ and has state $a_{(n)}b$ by 2.2; injectivity gives the claimed state-product identity. Directly in the residue definition, $A_{(-2)}\operatorname{id}=\partial_z A$, so this identity also gives $Y(Ta,z)=\partial_zY(a,z)$. [F2, step 2.2, step 3.1, step 4.1, construct]

6.1 Write $\delta(u)=\sum_{r\in\mathbb Z}u^r$. The equality of 2.3 is exactly the result of taking $\operatorname{Res}_{x_0}x_0^n\operatorname{Res}_{x_1}x_1^m$ in the formal-distribution identity $x_0^{-1}\delta((x_1-z)/x_0)A(x_1)B(z)-x_0^{-1}\delta((z-x_1)/(-x_0))B(z)A(x_1)=z^{-1}\delta((x_1-x_0)/z)\sum_jD_j(z)x_0^{-j-1}$. In the first two terms the binomial expansions are respectively in nonnegative powers of $z$ and $x_1$; in the third, $(x_1-x_0)^r$ is expanded in nonnegative powers of $x_0$. Indeed $\operatorname{Res}_{x_1}x_1^m z^{-1}\delta((x_1-x_0)/z)=(z+x_0)^m$ expanded in nonnegative powers of $x_0$, giving exactly the right side of 2.3 after the remaining residue. These moments for every integer $m,n$ determine every coefficient in $x_1,x_0$, proving the identity. The subsequent $z$ coefficients are well defined on each vector: they are finite sums by 1.1 and $D_j=0$ for $j\ge N$. Substituting $A=Y(a)$, $B=Y(b)$ and the state-product identity identifies the right side as $z^{-1}\delta((x_1-x_0)/z)Y(Y(a,x_0)b,z)$. This is the full Jacobi identity. Explicitly, its coefficients are $\sum_{i\ge0}\binom mi(a_{(n+i)}b)_{(m+k-i)}=\sum_{i\ge0}(-1)^i\binom ni\bigl(a_{(m+n-i)}b_{(k+i)}-(-1)^n b_{(n+k-i)}a_{(m+i)}\bigr)$ for all integers $m,n,k$; each side is finite after application to a vector. [F1, step 1.1, step 5.1, step 2.3, algebra]

6.2 For uniqueness, any other vertex algebra $Y'$ with the same vacuum, translation and generating fields has every $Y'(v)$ local with the generators and creative with state $v$. By 2.1 and induction it is local with every field in $\mathcal U$. For $E=Y'(v)-Y(v)$, the proof of 4.1 uses only locality with the generators, creativity, translation covariance, and the generating-word spanning condition; it therefore applies to $E$ even before knowing that $E\in\mathcal U$. Its state is zero, so $E=0$. Thus $Y'=Y$. [given, step 2.1, step 4.1, step 5.1, algebra]

7.1 Under the additional grading hypotheses, the identity has degree zero. If fields $A,B$ have degrees $d,e$, respectively, the mode formula in 1.1 shows that $(A_{(n)}B)_k$ shifts degree by $d+e-n-k-2$, so $A_{(n)}B$ has degree $d+e-n-1$. Every bracketed expression is therefore homogeneous when its generators are homogeneous. Its state has that degree, since the vacuum has degree zero. The span of these homogeneous fields is all $\mathcal U$, and the graded bijection $\epsilon$ transports their degrees to $V$. Hence the claimed graded truncation convention holds for every $Y(a)$. No analytic bound or conformal vector has been assumed or deduced. Together with 5.1, 6.1, and 6.2 this proves all assertions. [given, step 1.1, step 3.1, step 4.1, step 5.1, step 6.1, step 6.2, algebra] ∎
