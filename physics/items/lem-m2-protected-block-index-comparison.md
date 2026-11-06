---
id: lem-m2-protected-block-index-comparison
kind: lemma
title: M2 Protected Block Index Comparison
status: published
origin: session
domain: mathematics
library: physics
category: string-theory
dependency_level: 0
physical_scope: Pure mathematical conditional statement/example; no physical membrane realization asserted.
axiom_strength: ZF + AC
deps:
- def-axiom-of-choice
- lem-equivariant-finite-chart-symbol-calculus
- thm-rellich-compactness-from-w-one-p-to-lp-on-an-extension-domain
- thm-atkinson
- thm-bounded-inverse-theorem
- thm-orthogonal-decomposition-by-a-closed-subspace
- thm-smooth-partitions-of-unity-exist-on-manifolds
- thm-choice-implies-dependent-implies-countable-choice
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  lem-equivariant-finite-chart-symbol-calculus: mathematical-premise
  thm-rellich-compactness-from-w-one-p-to-lp-on-an-extension-domain: mathematical-premise
  thm-atkinson: mathematical-premise
  thm-bounded-inverse-theorem: mathematical-premise
  thm-orthogonal-decomposition-by-a-closed-subspace: mathematical-premise
  thm-smooth-partitions-of-unity-exist-on-manifolds: mathematical-premise
  thm-choice-implies-dependent-implies-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
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
  - title: Stefan Haller, The Atiyah–Singer Index Theorem, full lecture notes (2012/13)
    url: https://www.mat.univie.ac.at/~stefan/files/ASIT/ASIT.pdf
    locator: 'Part I §§1–3, pp. 3–12: Fredholm operators, index stability, and Atkinson''s theorem; Part II §2, pp. 64–78:
      elliptic differential operators'
---

## Statement

Assume the Axiom of Choice. A grading on a Hilbert space is an
orthogonal decomposition $H=H^+\oplus H^-$, equivalently the eigenspace
decomposition of a self-adjoint unitary involution $\Gamma$ with
$\Gamma|_{H^+}=I$ and $\Gamma|_{H^-}=-I$. An odd operator preserves its
domain under $\Gamma$ and satisfies $R\Gamma=-\Gamma R$ there; an even
operator commutes with $\Gamma$ on its domain. An even orthogonal
splitting $H=H_P\oplus H_H$ is one in which both summands are graded
subspaces. A possibly unbounded operator is Fredholm here when it is
Fredholm as a bounded map from its graph-norm domain to its Hilbert
target. For an odd Fredholm operator $R$, its even-to-odd block is
$R_+:\operatorname{dom}(R)\cap H^+\to H^-$, with cokernel
$H^-/\operatorname{ran}R_+$, and
$\operatorname{ind}(R_+):=\dim\ker R_+-\dim\operatorname{coker}R_+$.
Let
$H=H_P\oplus H_H$ be a graded Hilbert space with an even orthogonal
splitting, and let
$$
Q=\begin{pmatrix}A&B\\B^*&D\end{pmatrix}
$$
be odd and self-adjoint on $\operatorname{dom}(A)\oplus
\operatorname{dom}(D)$. Assume $A$ and $D$ are odd self-adjoint
operators, $B:H_H\to H_P$ is bounded and odd, and
$D:\operatorname{dom}(D)\to H_H$ is bijective with everywhere-defined
bounded inverse $D^{-1}:H_H\to H_H$ and range $\operatorname{dom}(D)$.
Suppose either (i) $H_P=L^2(C,E)$ for a compact smooth curve $C$
without boundary and a finite-rank graded Hermitian bundle $E\to C$,
with fixed smooth Riemannian metric and positive density on $C$.
Here $A$ is the $H^1(C,E)$ realization of a classical order-one
pseudodifferential operator: locally it is a finite sum of cutoff
Fourier quantizations of smooth matrix symbols $a(x,\xi)$ with
$|\partial_x^\alpha\partial_\xi^\beta a|\le
C_{\alpha\beta}(1+|\xi|^2)^{(1-|\beta|)/2}$, admitting homogeneous
expansions of degrees $1,0,-1,\ldots$: after subtracting the first
$N$ terms with a smooth cutoff near $\xi=0$, the remainder satisfies
the same estimates with $1$ replaced by $1-N$. Smooth-kernel
operators are also allowed.
Its leading symbol $a_1(x,\xi)$ is invertible for every real
$\xi\ne0$; $A$ is self-adjoint and odd on the stated domain.
Alternatively, (ii) $H_P$ is finite-dimensional. In case (ii),
$A$ is self-adjoint on all of $H_P$. Then
$$S:=A-BD^{-1}B^*$$
is self-adjoint and Fredholm on $\operatorname{dom}(A)$, and its
even-to-odd Fredholm index equals that of $A$. The operator $Q$ has
the same index. Its kernel is parity-preservingly isomorphic to
$\ker S$ by
$$u\longmapsto (u,-D^{-1}B^*u).$$
All Hilbert spaces, domains, blocks, and operator hypotheses are
mathematical inputs. This gives no physical membrane realization,
vacuum-rank conclusion, or singular uniform-gap conclusion.

## Facts & Assumptions

**Given:** Full AC; the graded Hilbert spaces and operators in the
statement. Give operator domains their graph norms; in case (i), identify
$H_P$ with $L^2(C,E)$ and $\operatorname{dom}(A)$ with $H^1(C,E)$.

[F1] [[def-axiom-of-choice]]: use the full Axiom of Choice as the
foundational convention for the cited Sobolev and elliptic interfaces.

[F2] [[lem-equivariant-finite-chart-symbol-calculus]]: a first-order
elliptic member of the classical class $\Psi^1$ defined by the local
quantizations in the Statement has Fredholm Sobolev realizations
and the stated local elliptic regularity.

[F3] [[thm-rellich-compactness-from-w-one-p-to-lp-on-an-extension-domain]]:
the inclusion $W^{1,2}\hookrightarrow L^2$ is compact on bounded
extension domains; a finite chart and partition argument gives the
compact inclusion $H^1(C,E)\hookrightarrow L^2(C,E)$.

[F4] [[thm-atkinson]]: a bounded operator between Banach spaces is
Fredholm exactly when it has a bounded two-sided inverse modulo compact
operators.

[F5] [[thm-orthogonal-decomposition-by-a-closed-subspace]]: each closed
subspace of a Hilbert space has an orthogonal complement and the space is
their direct sum.

[F6] [[thm-bounded-inverse-theorem]]: a bounded bijection between Banach
spaces has bounded inverse.

[F7] [[thm-smooth-partitions-of-unity-exist-on-manifolds]]: compact
manifolds admit smooth partitions subordinate to finite coordinate
covers.

[F8] [[thm-choice-implies-dependent-implies-countable-choice]]: in ZF,
$\mathrm{AC}\Rightarrow\mathrm{DC}\Rightarrow\mathrm{AC}_\omega$.
This supplies the weaker choice hypotheses of [F5]–[F7].

## Proof

1.1 Write $X=\operatorname{dom}(A)$ with its graph norm and
$Y=H_P$. In case (i), the compact boundaryless manifold hypothesis
and [F2], under full AC [F1], apply to the explicitly specified $A\in\Psi^1(C;E,E)$ and make
$A:H^1(C,E)\to L^2(C,E)$ Fredholm. Its Sobolev norm and graph norm
are equivalent: the graph norm is bounded by the Sobolev norm by [F2],
and the identity between these two Banach domains has bounded inverse
by [F6]. In case (ii), density of $\operatorname{dom}(A)$
and finite dimensionality give $\operatorname{dom}(A)=H_P$; hence $A$
is a map between finite-dimensional spaces and is Fredholm. [F1, F2, F6, given, algebra]

1.2 In case (i), the finite-chart Sobolev identification and partition
[F7] reduce the inclusion $H^1(C,E)\hookrightarrow L^2(C,E)$ to
finitely many bounded smooth extension domains. Rellich compactness
[F3] on each chart, combined over the finite cover, makes $X\hookrightarrow
Y$ compact. In case (ii), this inclusion has finite-dimensional target
and is compact. The use of the weaker Countable/Dependent Choice
hypotheses in [F3, F7] is supplied by [F8]. [F3, F7, F8, given,
algebra]

1.3 Put $K:=BD^{-1}B^*$. Since $D=D^*$ has a bounded everywhere-defined inverse,
$(D^{-1})^*=D^{-1}$. Thus $K^*=K$. Each of $B,D^{-1},B^*$
reverses grading, so their product $K$ reverses grading. A bounded
self-adjoint perturbation of $A$ is self-adjoint on
$\operatorname{dom}(A)$: the adjoint-domain identity
$(A-K)^*=A^*-K^*$ follows by moving the bounded term across the
Hilbert pairing. Therefore $S=A-K$ is odd and self-adjoint on the
stated domain. [given, algebra]

2.1 The operator $K:=BD^{-1}B^*:Y\to Y$ is bounded by the hypotheses.
Its restriction $X\to Y$ is compact as the composition of the
compact inclusion $X\hookrightarrow Y$ from step 1.2 with $K$.
[given, step 1.2, algebra]

3.1 For every $t\in[0,1]$, $A-tK:X\to Y$ is a compact perturbation
of the Fredholm operator $A$. Atkinson's theorem [F4] implies that
each $A-tK$ is Fredholm. Its odd block decomposition is a direct sum
of the two chiral maps, so each chiral map is Fredholm as well. [F4, step 1.1, step 2.1]

4.1 The index is locally constant along this norm-continuous path. To
verify this, fix a Fredholm map $L:X\to Y$, put
$N=\ker L$, $R=\operatorname{ran}L$, and choose the orthogonal
splittings $X=N\oplus X_1$ and $Y=R\oplus R^\perp$ by [F5].
The restriction $L:X_1\to R$ is a bounded bijection; [F6] gives a
bounded inverse. For every sufficiently small perturbation $E:X\to Y$,
the $X_1\to R$ block $G$ of $L+E$ remains invertible by the
Neumann series. In the decompositions above, write
$
L+E=\begin{pmatrix}E_{C,N}&E_{C,X_1}\\E_{R,N}&G\end{pmatrix},
\qquad C:=R^\perp.
$
Bounded invertible row and column operations reduce this block matrix
to $\operatorname{diag}(F,G)$, where
$F=E_{C,N}-E_{C,X_1}G^{-1}E_{R,N}:N\to C$. The finite-dimensional
map $F$ has index $\dim N-\dim C$, independent of its rank, and
$G$ has index zero. Thus $\operatorname{ind}(L+E)=
\dim N-\dim C=\operatorname{ind}L$ near $L$. Applying this argument on the Hilbert spaces $X^+$ and $Y^-$ to
$L=(A-tK)_+$, connectedness of $[0,1]$ gives
$\operatorname{ind}S_+=\operatorname{ind}A_+$. [F5, F6, step 3.1,
algebra]

4.2 On $X_Q:=\operatorname{dom}(A)\oplus\operatorname{dom}(D)$,
let $Q_0=A\oplus D$ and
$C_B=\begin{pmatrix}0&B\\B^*&0\end{pmatrix}$, so $Q=Q_0+C_B$ with
$C_B$ bounded on $H_P\oplus H_H$. For every $x\in X_Q$,
$$
\|Qx\|\le\|Q_0x\|+\|C_B\|\|x\|,\qquad \|Q_0x\|\le\|Qx\|+\|C_B\|\|x\|.
$$
Consequently the graph norms, for $x=(x_P,x_H)$,
$\|x\|_Q=(\|x\|^2+\|Qx\|^2)^{1/2}$ and
$\|x\|_{Q_0}=(\|x\|^2+\|Ax_P\|^2+\|Dx_H\|^2)^{1/2}$ are equivalent.
Thus the identity identifies the graph domain used to define the
Fredholm index of $Q$ with the direct-sum graph domain. Define the even
triangular map
$$T=\begin{pmatrix}I&0\\D^{-1}B^*&I\end{pmatrix}.$$
The map $D^{-1}B^*:H_P\to\operatorname{dom}(D)$ is bounded for the
graph norm because
$\|D^{-1}B^*x\|+\|D(D^{-1}B^*x)\|
\le(\|D^{-1}\|+1)\|B^*\|\|x\|$. Thus $T$ and
$T^{-1}=\begin{pmatrix}I&0\\-D^{-1}B^*&I\end{pmatrix}$ are bounded
inverses on $X_Q$ with its direct-sum graph norm, and hence on the
equivalent $Q$ graph norm. Direct block multiplication gives
$$Q=T^*\begin{pmatrix}S&0\\0&D\end{pmatrix}T.$$
Since $S=A-K$ with bounded $K$, the graph norm of $S$ is equivalent
to that of $A$. The outer maps are therefore bounded even isomorphisms
on the graph domain and Hilbert target. Right composition by $T$
identifies kernels, and left composition by $T^*$ identifies ranges and
cokernels; both preserve parity. The block-diagonal index is the sum of
the two block indices. Since $D$ is invertible, its chiral index is zero, and
$\operatorname{ind}Q_+=\operatorname{ind}S_+$.
[given, step 1.3, step 3.1, algebra]

5.1 If $u\in\ker S$, direct substitution gives
$Q(u,-D^{-1}B^*u)=(Su,0)=0$. Conversely, if $Q(u,v)=0$, its
second block equation and invertibility of $D$ force
$v=-D^{-1}B^*u$, and its first equation then gives $Su=0$.
The two assignments are inverse. The product $D^{-1}B^*$ is even,
so the isomorphism preserves parity. For an odd self-adjoint Fredholm
operator, the even-to-odd index is
$\dim\ker Q|_{H^+}-\dim\ker Q|_{H^-}$, because the cokernel of its
even-to-odd block is the kernel of its odd-to-even adjoint block.
The parity-preserving kernel isomorphism therefore gives the claimed
kernel comparison as well. [given, step 4.2, algebra] ∎

