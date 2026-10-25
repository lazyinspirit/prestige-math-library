---
id: lem-polar-decomposition-and-nonzero-partial-isometries-in-factors
kind: lemma
title: Polar decomposition inside a von Neumann algebra and nonzero partial isometries between nonzero projections in a factor
status: published
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
deps:
  - def-axiom-of-choice
  - def-c-star-algebra-generated-by-a-normal-operator
  - def-hilbert-orthogonal-projection
  - def-hilbert-space-adjoint
  - def-isometry-coisometry-and-partial-isometry
  - def-operator-norm
  - def-real-and-complex-inner-product-space
  - def-self-adjoint-positive-unitary-and-normal-operator
  - def-strong-and-weak-operator-topologies
  - def-von-neumann-algebra-and-commutant
  - lem-kernel-range-orthogonality-for-hilbert-adjoints
  - lem-spectrum-of-a-positive-operator-is-nonnegative
  - thm-continuous-functional-calculus-for-bounded-self-adjoint-operators
  - thm-double-commutant-theorem-for-concrete-von-neumann-algebras
  - thm-orthogonal-decomposition-by-a-closed-subspace
  - thm-positive-square-root
  - cor-archimedean-reciprocal
dependency_level: 1
axiom_use: "Assume AC. The double-commutant, functional-calculus, and positive-square-root suppliers state AC; the Hilbert projection, orthogonal-decomposition, adjoint, range-orthogonality, partial-isometry, positive-spectrum, and generated-C*-algebra suppliers require Countable Choice, which follows from AC. The local polar map and factor argument make no family-wide selection."
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_audit: >-
  Assume AC. The double-commutant, functional-calculus, and positive-square-root
  suppliers state AC; the Hilbert projection, orthogonal-decomposition, adjoint,
  range-orthogonality, partial-isometry, positive-spectrum, and generated-C*-algebra
  suppliers require Countable Choice, which follows from AC. The polar-decomposition map is
  constructed from the fixed operator, and the factor argument uses no
  selection of a family of projections or partial isometries.
sources:
  references:
    - title: "Bruce Blackadar, Operator Algebras: Theory of C*-Algebras and von Neumann Algebras (author-hosted complete text)"
      url: "https://bruceblackadar.com/Mathematics/Cycr.pdf"
      locator: "Part I §§I.5.2.1–I.5.2.2, printed pp. 23–24: support projections and the complete polar-decomposition construction, including a strong-limit regularizer. Part III §III.1.3.10, printed p. 244: comparison for abelian projections via central supports; this does not supply the general nonzero-corner claim, which is proved locally."
    - title: "Bachir Bekka and Pierre de la Harpe, Unitary Representations of Groups, Duals, and Characters (arXiv:1912.07262v1, 16 December 2019; author-hosted complete book draft)"
      url: "https://arxiv.org/pdf/1912.07262"
      locator: "Appendix A.K, Definition A.K.2 and Definitions A.K.5–A.K.6, printed pp. 423–424, for factor-center, support-projection and central-support terminology. These passages do not prove polar decomposition or the general nonzero-corner claim."
verification:
  audited: "2026-10-08"
  precheck: pass
---
## Statement

Assume AC ([[def-axiom-of-choice]]). Let $H$ be a complex Hilbert space and
$M\subseteq\mathcal B(H)$ a concrete von Neumann algebra
([[def-von-neumann-algebra-and-commutant]]). If $H=\{0\}$, part 1 is the
trivial zero-operator decomposition and part 2 has no nonzero projection inputs;
assume $H\ne\{0\}$ for the remaining clauses. A projection means a self-adjoint
idempotent in $M$; for projections $r,p$, $r\le p$ means $rp=pr=r$.
Projections $r,s\in M$ are called equivalent when there is a partial isometry
$w\in M$ with $w^*w=r$ and $ww^*=s$. Write $pMq:=\{pmq:m\in M\}$. Then:

1. Every $x\in M$ has a polar decomposition $x=v|x|$, where
   $|x|:=(x^*x)^{1/2}\in M$ and $v\in M$ is a partial isometry
   ([[def-isometry-coisometry-and-partial-isometry]]) with $v^*v$ the
   orthogonal projection onto $(\ker x)^\perp$ and $vv^*$ the orthogonal
   projection onto $\overline{\operatorname{ran}x}$.
2. If $M$ is a factor, meaning $M\cap M'=\mathbb C I$, and $p,q\in M$ are
   nonzero projections, then $pMq\ne\{0\}$. In particular, a nonzero partial
   isometry $v\in M$ exists with $v^*v\le p$ and $vv^*\le q$; equivalently,
   a nonzero subprojection of $p$ is equivalent to a nonzero subprojection of
   $q$.

## Facts & Assumptions

**Given:** AC, a concrete von Neumann algebra $M\subseteq\mathcal B(H)$, and the factor condition where used.

[F1] AC is the hypothesis of the bicommutant, continuous-calculus and positive-square-root suppliers; it supplies Countable Choice for the Hilbert projection, orthogonal-decomposition, adjoint, range-orthogonality, partial-isometry, positive-spectrum and generated-C*-algebra interfaces ([[def-axiom-of-choice]]).

[F2] A concrete von Neumann algebra is a unital $*$-subalgebra closed in WOT ([[def-von-neumann-algebra-and-commutant]]).

[F3] The reciprocal Archimedean bound gives $1/(n+1)\to0$ for $n\in\mathbb N$ ([[cor-archimedean-reciprocal]]). For bounded self-adjoint $b$, continuous functional calculus is isometric, sends the coordinate function to $b$, and has range $C^*(I,b)$; in particular $\|b\|=\max_{t\in\sigma(b)}|t|$. If $b$ is positive, then $\sigma(b)\subseteq[0,+\infty)$ ([[thm-continuous-functional-calculus-for-bounded-self-adjoint-operators]], [[lem-spectrum-of-a-positive-operator-is-nonnegative]]).

[F4] Every closed subspace $K$ has a Hilbert orthogonal projection ([[def-hilbert-orthogonal-projection]]).

[F5] A partial isometry is isometric on the orthogonal complement of its kernel and zero on its kernel ([[def-isometry-coisometry-and-partial-isometry]]).

[F6] For $x\in\mathcal B(H)$, $x^*x$ is positive because the adjoint identity gives $\langle x^*x\xi,\xi\rangle=\|x\xi\|^2\ge0$; every bounded positive operator has a unique positive square root ([[def-hilbert-space-adjoint]], [[def-real-and-complex-inner-product-space]], [[def-self-adjoint-positive-unitary-and-normal-operator]], [[thm-positive-square-root]]).

[F7] Norm convergence implies strong-operator convergence by $\|T\xi\|\le\|T\|\|\xi\|$, and $M$ is strongly closed by the double-commutant theorem ([[def-operator-norm]], [[def-strong-and-weak-operator-topologies]], [[thm-double-commutant-theorem-for-concrete-von-neumann-algebras]]).

[F8] $C^*(I,b)$ is the norm closure of the unital $*$-polynomials in $b$ ([[def-c-star-algebra-generated-by-a-normal-operator]]).

[F9] Every closed subspace $K$ gives an orthogonal decomposition $H=K\oplus K^\perp$ ([[thm-orthogonal-decomposition-by-a-closed-subspace]]).

[F10] For bounded $T$, $\overline{\operatorname{ran}T}=(\ker T^*)^\perp$ ([[lem-kernel-range-orthogonality-for-hilbert-adjoints]]).

[F11] The double-commutant theorem gives $M''=M$ ([[thm-double-commutant-theorem-for-concrete-von-neumann-algebras]]).

[F12] The Hilbert adjoint satisfies $\langle T\xi,\eta\rangle=\langle\xi,T^*\eta\rangle$ ([[def-hilbert-space-adjoint]]).

## Proof

**Proof technique:** direct.

**Given:** AC, $M$, and $x$ and $p,q$ where the corresponding clauses apply.

1.1 If $H=\{0\}$ then $M=\{0\}$, and the unique operator has the stated zero decomposition; there are no nonzero projections for part 2. Assume $H\ne\{0\}$ below. [given]

1.2 For the factor clause, fix a nonzero projection $q\in M$ and set $L=\overline{\operatorname{span}}\{mq\xi:m\in M,\xi\in H\}$. Since $q\ne0$, some $\xi$ has $q\xi\ne0$, and $I\in M$ puts $q\xi$ in the generating set, so $L\ne\{0\}$. This closed subspace is invariant under $M$ and its adjoints, hence reducing for $M$. It is also invariant under $M'$ and its adjoints, since for $c\in M'$ and $m\in M$, $cmq\xi=mcq\xi=mqc\xi$, hence reducing for $M'$. Thus its orthogonal projection $P_L$ commutes with both $M$ and $M'$. By [F11], $P_L\in M'\cap M''=M'\cap M$, the center of $M$. [F1, F2, F4, F11]

1.3 For arbitrary $x\in M$, put $b:=x^*x\in M$. By [F6], $b$ is positive and has a positive square root $a:=b^{1/2}$. Positivity makes $\langle a\xi,\xi\rangle$ real, and [F12] gives $\langle(a-a^*)\xi,\xi\rangle=0$ for every $\xi$. For $B(u,v):=\langle(a-a^*)u,v\rangle$, the four-term expansion $4B(u,v)=B(u+v,u+v)-B(u-v,u-v)+iB(u+iv,u+iv)-iB(u-iv,u-iv)$ therefore gives $B(u,v)=0$ for all $u,v$, hence $a=a^*$. The theorem puts $a$ in $C^*(I,b)$, which is contained in $M$ by [F2, F7, F8] because its generating $*$-polynomials lie in $M$. For every $\xi\in H$, $\|a\xi\|^2=\langle a^2\xi,\xi\rangle=\langle x^*x\xi,\xi\rangle=\|x\xi\|^2$, so $\ker a=\ker x$. [given, F2, F6, F7, F8, F12]

2.1 Since $q\ne0$, $qH\subseteq L$ is nonzero, so $P_L\ne0$. If $M$ is a factor, its center is $\mathbb C I$; the only nonzero scalar projection is $I$. Hence $P_L=I$ and $L=H$. [step 1.2, given]

2.2 Define $v_0$ on $\operatorname{ran}a$ by $v_0(a\xi)=x\xi$. The equality of norms in step 1.3 makes this well-defined and isometric. By [F10], $\overline{\operatorname{ran}a}=(\ker a^*)^\perp=(\ker a)^\perp=(\ker x)^\perp=:K$. It extends to an isometry from $K$ onto $F:=\overline{\operatorname{ran}x}$; extend it by zero on $\ker a=K^\perp$. Since $v$ is isometric on $K$ and zero on $K^\perp$, $\ker v=K^\perp$ and $v$ is a partial isometry. Also $x=va$. For $\xi\in K$ and any $\eta=\eta_K+\eta_{K^\perp}$, [F12] gives $\langle v^*v\xi,\eta\rangle=\langle v\xi,v\eta_K\rangle=\langle\xi,\eta_K\rangle=\langle\xi,\eta\rangle$, while $v^*v$ vanishes on $K^\perp$; hence $v^*v=P_K$. If $\zeta\in F^\perp$, then $\langle v^*\zeta,\xi\rangle=\langle\zeta,v\xi\rangle=0$ for every $\xi$, so $v^*\zeta=0$; on $F=vK$, $vv^*$ is the identity because $v^*v=P_K$. Thus $vv^*=P_F$. [F4, F5, F9, F10, F12, step 1.3]

3.1 If $pMq=\{0\}$, then $p$ annihilates every $mq\xi$ and hence their closed span $L=H$ from step 2.1. This forces $p=0$, a contradiction. Therefore $pMq\ne\{0\}$. [step 2.1]

3.2 Let $g_n(t)=t/(t+1/(n+1))$ on $\sigma(a)\subseteq[0,\|a\|]$, using [F3]. By [F3], $\|g_n(a)\|\le1$ and $(a+1/(n+1) I)^{-1}\in C^*(I,a)\subseteq M$ by [F2, F7, F8]. On $\operatorname{ran}a$, $(I-g_n(a))a=(1/(n+1))a(a+1/(n+1) I)^{-1}$ has norm at most $1/(n+1)$; on $\ker a$, $g_n(a)=0$. Since $\overline{\operatorname{ran}a}=(\ker a)^\perp$ and $\|g_n(a)\|\le1$, convergence on the dense subspace $\operatorname{ran}a+\ker a$ extends to $g_n(a)\to P_{(\ker a)^\perp}=v^*v$ strongly. Therefore $x(a+1/(n+1) I)^{-1}=v g_n(a)\to v(v^*v)=v$ strongly. Each approximant lies in $M$, so its strong closedness [F7] gives $v\in M$. [F1, F2, F3, F7, F8, step 1.3, step 2.2]

4.1 Apply step 3.1 with $p$ and $q$ interchanged to obtain a nonzero $x\in qMp$. Its polar partial isometry from steps 2.2 and 3.2 lies in $M$. Because $x=xp$, $(I-p)H\subseteq\ker x$, so the initial space $(\ker x)^\perp$ is contained in $pH$ and $v^*v\le p$; the containment gives $p(v^*v)=(v^*v)p=v^*v$. Because $x=qx$, $\operatorname{ran}x\subseteq qH$, so $vv^*\le q$; likewise $q(vv^*)=(vv^*)q=vv^*$. Since $v\ne0$ by $x=va\ne0$, its initial and final projections are nonzero. Thus $v^*v$ and $vv^*$ are nonzero equivalent subprojections of $p$ and $q$, respectively. [F5, step 2.2, step 3.1, step 3.2] ∎

## Source notes

Blackadar I.5.2.1–I.5.2.2, printed pp. 23–24, gives the support-projection and polar-decomposition construction and the strong-limit regularizer. The local proof supplies the positive-square-root membership in $M$ and verifies the strong limit used to place the partial isometry in $M$. Blackadar III.1.3.10, printed p. 244, concerns abelian projections and their central supports; it does not establish $pMq\ne0$ for arbitrary nonzero $p,q$, which is proved locally here. Bekka–de la Harpe Appendix A.K, printed pp. 423–424, gives factor-center and support terminology only. The scaffold's locator to pp. 434–440 points to bibliography and index pages, not Appendix A.K.
