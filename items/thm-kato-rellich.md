---
id: thm-kato-rellich
kind: theorem
title: "Kato-Rellich theorem"
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-relative-boundedness-with-respect-to-an-operator, thm-self-adjoint-resolvent-estimate, thm-self-adjointness-range-criterion, lem-neumann-series, def-symmetric-self-adjoint-and-essentially-self-adjoint, def-densely-defined-closed-and-closable-operator, def-resolvent-and-spectrum-of-a-closed-unbounded-operator, def-unbounded-linear-operator-domain-and-graph, thm-unbounded-borel-functional-calculus, thm-spectral-theorem-for-unbounded-self-adjoint-operators, def-projection-valued-measure, thm-bounded-borel-pvm-integral, lem-unbounded-pvm-integral-is-well-defined-and-closed, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Mathematical Methods in Quantum Mechanics, second edition"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe2.pdf"
      locator: "Theorem 6.4 with complete proof, pp.158-160"
verification:
  audited: 2026-09-22
---

## Statement

Assume the Axiom of Choice. Work on a complex Hilbert space with inner product linear in the first variable. Let $A$ be self-adjoint and let $B$ be symmetric with $D(A)\subseteq D(B)$ and
$A$-bound less than one ([[def-relative-boundedness-with-respect-to-an-operator]]).
Then $A+B$ with domain $D(A)$ is self-adjoint. If $A$ is merely essentially
self-adjoint and $B$ is symmetric with $D(A)\subseteq D(B)$ and $A$-bound less
than one, then $A+B$ on $D(A)$ is essentially self-adjoint and its closure is
the self-adjoint operator obtained by applying the first part to $\overline A$
and the graph-norm extension of $B|_{D(A)}$ to $D(\overline A)$. If $A\ge\gamma$ and
$(a,b)$ is an admissible pair for $B$ with $a<1$, then
$A+B\ge\gamma-\max\{a|\gamma|+b,\ b/(1-a)\}$.

## Facts & Assumptions

[A1] Relative boundedness supplies finite a,b>=0 with a<1 and $\|Bx\|\le a\|Ax\|+b\|x\|$ on D(A). The graph norm is $(\|x\|^2+\|Ax\|^2)^{1/2}$; graph closure defines the operator closure. [[def-relative-boundedness-with-respect-to-an-operator]] [[def-unbounded-linear-operator-domain-and-graph]] [[def-densely-defined-closed-and-closable-operator]]

[A2] Symmetry is the identity $\langle Tx,y\rangle=\langle x,Ty\rangle$ on the domain; self-adjoint operators are closed and densely defined. A densely defined symmetric S is self-adjoint if both ranges of S plus and minus i mu equal H for some mu>0. Nonreal points are resolvent points of a self-adjoint operator. The convention is R_T(z)=(z-T)^{-1}. [[def-symmetric-self-adjoint-and-essentially-self-adjoint]] [[thm-self-adjointness-range-criterion]] [[thm-self-adjoint-resolvent-estimate]] [[def-resolvent-and-spectrum-of-a-closed-unbounded-operator]]

[A3] If a bounded operator C has norm less than one, I-C has a bounded inverse given by the Neumann series. [[lem-neumann-series]]

[A4] On a nonzero H, a self-adjoint T has a regular PVM E, domain $\{x:\int v^2dE_x<\infty\}$, and $\|T x\|^2=\int v^2dE_x$, $\langle Tx,x\rangle=\int v\,dE_x$. Bounded integrals satisfy the norm bound and quadratic identity. Projections multiply by intersection; strong countable additivity holds. The Borel calculus has the product rule with domain D(g(T)) intersect D((fg)(T)), and the spectrum of T is the set of v for which every neighborhood has nonzero projection (apply its essential-range assertion to f(v)=v). [[thm-spectral-theorem-for-unbounded-self-adjoint-operators]] [[lem-unbounded-pvm-integral-is-well-defined-and-closed]] [[thm-bounded-borel-pvm-integral]] [[def-projection-valued-measure]] [[thm-unbounded-borel-functional-calculus]]

[A5] AC supplies the spectral theorem's choices and directly supplies the countable witness choices used by the range/adjoint interfaces and by sequences approximating a fixed point in a graph closure. [[def-axiom-of-choice]]

## Proof

**Proof technique:** direct.

**Given:** the operators and admissible pair (a,b) in the statement, with 0<=a<1 and b>=0.

1.1 If H={0}, all domains and graphs are zero and all conclusions hold directly. Otherwise use [A4]. For z=plus or minus i mu, mu>0, put r_z(v)=(z-v)^{-1}. The bounds |r_z(v)|<=1/mu and |v r_z(v)|<=1 show that r_z(A) maps H into D(A), that $\|r_z(A)\|\le1/\mu$, and that $\|A r_z(A)\|\le1$. The product rule gives (z-A)r_z(A)=I on H and r_z(A)(z-A)=I on D(A), so this is R_A(z). Thus $\|BR_A(z)\|\le a+b/\mu<1$ when, for example, $\mu=1+2b/(1-a)$. [A1, A2, A4, given]

1.2 For any nonzero-space self-adjoint T and real c, the spectral-measure equivalence $T\ge c$ if and only if $E(( -\infty,c))=0$ follows directly. If T>=c and $J_n=[-(n+1),c-1/(n+1)]$ has a nonzero projection, a nonzero x in its range belongs to D(T), has E_x carried by J_n, and satisfies $\langle Tx,x\rangle\le(c-1/(n+1))\|x\|^2$, a contradiction. These increasing sets exhaust (-infinity,c), so countable additivity gives zero projection. Conversely zero projection below c gives $\langle Tx,x\rangle=\int v\,dE_x\ge c\|x\|^2$ for every x in D(T). Also if every real t<c is a resolvent point, the essential-range characterization in [A4] supplies a zero-projection open neighborhood of each t. The rational intervals contained in such neighborhoods form a countable cover of (-infinity,c); their union has zero projection by countable subadditivity of each E_x. Therefore again T>=c. This does not require a finite spectral infimum or any resolvent-distance formula. [A4]

2.1 Put S=A+B on exactly D(A). For z=plus or minus i mu the identity $z-S=(I-BR_A(z))(z-A)$ holds on D(A), since R_A(z)(z-A)x=x there. The first factor is boundedly invertible by [A3], and z-A is bijective D(A) to H. Hence both nonreal shifts of S are onto. S is symmetric by summing the two symmetry identities and densely defined because D(A) is dense. The range criterion makes S self-adjoint. No second-resolvent identity with a previously closed S is assumed. [A1, A2, A3, step 1.1]

3.1 Suppose A>=gamma and let lambda+gamma=d>0. By step 1.2 E_A is carried by [gamma,infinity). Define r(v)=(-lambda-v)^{-1} on that half-line and zero outside. For v>=gamma, $|r(v)|\le1/d$ and $|v r(v)|\le\max(1,|\gamma|/d)$: for v>=0 the ratio v/(v+lambda) is monotone with its maximum at an endpoint or its limiting value 1; for gamma<=v<0, (-v)/(v+lambda) decreases with v since lambda>0 in that case. The spectral product rule shows r(A)=R_A(-lambda), exactly as in step 1.1, and hence $\|BR_A(-\lambda)\|\le a\max(1,|\gamma|/d)+b/d$. Put $C=\max\{a|\gamma|+b,b/(1-a)\}$. For every d>C this last bound is strictly below one: if d>=|gamma| it equals a+b/d<1 (also when b=0); if d<|gamma| it equals (a|gamma|+b)/d<1. The factorization of step 2.1 therefore proves that every real number t<gamma-C is in rho(S), with bounded inverse $R_A(t)(I-BR_A(t))^{-1}$. Apply step 1.2 to the already self-adjoint S to obtain S>=gamma-C, the stated bound including its endpoint. [A1, A3, A4, step 1.1, step 2.1, step 1.2]

4.1 If A is essentially self-adjoint, put T=closure(A). For each x in D(T) choose x_n in D(A) with x_n to x and Ax_n to Tx, using [A5]. The inequality in [A1] applied to x_n-x_m makes Bx_n Cauchy. Define Btilde x as its limit. Two such approximations give the same limit by the same inequality applied to their difference. Approximating x and y and their linear combinations proves linearity, $\|\widetilde Bx\|\le a\|Tx\|+b\|x\|$, and symmetry by passing to the limit in $\langle Bx_n,y_n\rangle=\langle x_n,By_n\rangle$. It extends B restricted to D(A); no extension of B's possibly larger domain is claimed. Step 2.1 makes T+Btilde self-adjoint. The inclusion A+B subset T+Btilde and closedness give closure(A+B) subset T+Btilde. Conversely the same approximating sequences satisfy (A+B)x_n to (T+Btilde)x, giving the reverse graph inclusion. This proves essential self-adjointness and the exact closure formula. If A>=gamma in this case, taking limits of its quadratic inequality gives T>=gamma; step 3.1 then gives the bound for the closure and its restriction A+B. [A1, A2, A5, step 2.1, step 3.1]

5.1 The choice use is exactly [A5]. The cases B=0 or a=b=0 are admitted by the same estimates and return the original lower bound. Dimension one requires no change. The strict hypothesis a<1 is used in the positive choice of mu and in b/(1-a); no conclusion at a=1 is asserted. The endpoint gamma-C is included by the zero-projection argument, without asserting that the spectrum is nonempty on the zero space. [A1, A5, step 1.1, step 3.1, step 4.1] ∎



## Source notes

Teschl, Section 6.1, Lemma 6.3 and Theorem 6.4, printed pp.158–159 (PDF pp.169–170), supply the imaginary and real resolvent perturbation method. Signs here are computed for the library convention (z-A)^{-1}. The numerical bound is derived above directly from equation (6.3); the proof does not rely on a spectral-distance claim or endpoint continuity of a concave function.
