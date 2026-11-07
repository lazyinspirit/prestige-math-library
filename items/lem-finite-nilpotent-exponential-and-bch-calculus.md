---
dependency_level: 3
id: lem-finite-nilpotent-exponential-and-bch-calculus
kind: lemma
title: Finite nilpotent exponential and BCH calculus
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-malcev-basis-and-rationality
  - def-filtered-nilpotent-lie-group-and-nilmanifold
  - lem-tangent-space-of-a-lie-group-is-a-lie-algebra
  - def-lie-group
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Ben Green and Terence Tao, The quantitative behaviour of polynomial orbits on nilmanifolds
      url: https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n2-p02-p.pdf
      locator: Appendix A opening and A.1–A.3, printed pp. 525–528
---

## Statement

Let $G/\Gamma$ be an $m$-dimensional nilmanifold with a supplied Mal’cev basis $X=(X_1,\ldots,X_m)$, so that $E_X(t)=\exp(t_1X_1)\cdots\exp(t_mX_m)$ is a supplied smooth diffeomorphism $\mathbb R^m\to G$ and every basis tail is a Lie ideal. Let the tangent Lie algebra $\mathfrak g$ have nilpotence step at most $s\ge1$. Without a choice assumption, its exponential map is a global diffeomorphism. The maps $F_X=\psi_X\circ\exp$ and $A_X=\log_X\circ E_X=F_X^{-1}$, where $\log_X$ records the $X$ coefficients of the logarithm, are triangular polynomial maps with diagonal $1$ and degree $O_{m,s}(1)$. If the structure constants have rational heights at most $Q\ge2$, all their coefficient heights are $Q^{O_{m,s}(1)}$.

There is a finite BCH Lie polynomial $B_s(U,V)$, with universal rational coefficients and brackets of length at most $s$, such that $\exp U\exp V=\exp B_s(U,V)$. Inversion in exponential coordinates is $U\mapsto-U$, and $\operatorname{Ad}(\exp U)=\sum_{r=0}^{s-1}(\operatorname{ad}U)^r/r!$. Every Lie subalgebra $\mathfrak h$ has a closed connected embedded exponential subgroup $\exp\mathfrak h$, with tangent algebra $\mathfrak h$; ideals give normal subgroups, and exponential images preserve intersections. An already specified connected embedded Lie subgroup equals the exponential image of its tangent algebra. Nested exponential ideals have the dimensions prescribed by their Lie algebras; a one-dimensional quotient between consecutive tails is the additive real line, with no nonzero period.

## Statement references

[Green–Tao, Appendix A](https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n2-p02-p.pdf)

## Facts & Assumptions

**Given:** The group, supplied global chart, basis tails, and parameters in the statement. A constant $C$ below depends only on $m,s$ and may increase finitely many times.

[F1] The supplied Mal’cev chart, its basis one-parameter subgroups, the ideal tails and the lattice convention are those of [[def-malcev-basis-and-rationality]].

[F2] Nilpotence is the terminating lower central series of the tangent Lie algebra. [[def-filtered-nilpotent-lie-group-and-nilmanifold]]

[F3] The tangent bracket is the bracket of left invariant derivations, and multiplication and inversion are smooth. [[lem-tangent-space-of-a-lie-group-is-a-lie-algebra]] [[def-lie-group]]

## Proof

1.1 Write $\mathfrak h_j=\operatorname{span}(X_{j+1},\ldots,X_m)$, including $\mathfrak h_0=\mathfrak g$ and $\mathfrak h_m=0$. Every $\operatorname{ad}V$ is nilpotent by the lower central series. It preserves consecutive ideal tails, and its induced map on the one-dimensional space $\mathfrak h_{j-1}/\mathfrak h_j$ is therefore a nilpotent scalar, hence zero. Thus $[\mathfrak g,X_j]\subset\mathfrak h_j$. The index of every component of a nonzero nested bracket is strictly greater than every basis index occurring in that bracket. [F1, F2, algebra]

1.2 Define $\operatorname{Ad}(a)$ as the differential at the identity of conjugation by $a$. For the supplied curve $a(t)=\exp(tX_i)$, the identity $\operatorname{Ad}(a(t+u))=\operatorname{Ad}(a(t))\operatorname{Ad}(a(u))$ gives $T'(t)=T(t)\operatorname{ad}X_i$: its derivative at zero is $\operatorname{ad}X_i$ by the left invariant bracket convention. More explicitly, conjugation transports the left invariant field with value $V$ to the field with value $\operatorname{Ad}(a(t))V$; differentiating this transport at zero gives $[X_i,V]$. Multiplying $T(t)$ by the finite polynomial $\sum_{r=0}^{s-1}(-t\operatorname{ad}X_i)^r/r!$ and differentiating proves $T(t)=\sum_{r=0}^{s-1}t^r(\operatorname{ad}X_i)^r/r!$. No ODE existence theorem is involved. [F1, F2, F3, algebra]

2.1 For a smooth curve $c$, set $\omega(c')=(L_{c^{-1}})_*c'$. Differentiating multiplication gives $\omega((ab)')=\operatorname{Ad}(b^{-1})\omega(a')+\omega(b')$. Consequently $\omega(E_X(t(u))')=M(t(u))t'(u)$, where column $i$ of $M(t)$ is $\exp(-t_m\operatorname{ad}X_m)\cdots\exp(-t_{i+1}\operatorname{ad}X_{i+1})X_i$, with each matrix exponential the finite polynomial from step 1.2. Strict nesting makes $M$ lower triangular with diagonal $1$; row $k$ depends only on $t_1,\ldots,t_{k-1}$. Thus $M^{-1}=\sum_{j=0}^{m-1}(-1)^j(M-I)^j$ is polynomial with the same triangular property. Expanding these fixed finite products shows that their degrees and coefficient counts depend only on $m,s$, and their rational coefficient heights are at most $Q^C$. [F3, step 1.1, step 1.2, algebra]

3.1 For $V=\sum v_iX_i$, recursively define $t_k(u)=uv_k+\int_0^u R_k(t_1(w),\ldots,t_{k-1}(w),v_1,\ldots,v_{k-1})\,dw$, where $R_k$ is row $k$ of $(M^{-1}-I)v$. This is a finite construction: by induction each integrand is a polynomial, so each $t_k$ is a polynomial in $u,v$. The curve $a_V(u)=E_X(t(u))$ has constant left logarithmic velocity $V$ and starts at the identity. Two curves with the same constant left logarithmic velocity and initial value are equal, because differentiating their quotient $b(u)a(u)^{-1}$ gives zero. Compare $a_V(u+b)$ and $a_V(b)a_V(u)$ to obtain $a_V(u+b)=a_V(b)a_V(u)$; hence $a_V$ is the unique one-parameter subgroup tangent to $V$. Rescaling the recursion gives $a_V(u)=a_{uV}(1)$. This constructs the exponential on all tangent vectors from the supplied basis curves. [F1, F3, step 2.1, construct, algebra]

4.1 Set $\exp V=a_V(1)$. Its second coordinates have the form $F_X(v)_k=v_k+P_k(v_1,\ldots,v_{k-1})$. Solve successively $v_1=t_1$ and $v_k=t_k-P_k(v_1,\ldots,v_{k-1})$ to obtain the polynomial inverse $A_X$. Since $E_X$ is a supplied diffeomorphism, $\exp=E_X\circ F_X$ is a global diffeomorphism. The recursion uses only a bounded number of polynomial substitutions and integrations; integration divides by positive integers bounded by the preceding polynomial degrees. Thus degrees and coefficient counts are bounded in terms of $m,s$, and rational coefficient heights are $Q^C$. This proof uses the global supplied chart rather than a covering-space or Lie-integration theorem. [F1, step 3.1, algebra]

5.1 To compute the exponential differential, take $a(u,t)=\exp(t(V+uW))$ and let $B(t)=\omega(\partial_u a(0,t))$. For a smooth two-parameter map, put $A=\omega(\partial_t a)$ and $B=\omega(\partial_u a)$. Differentiating products and inverses twice gives $\partial_tB-\partial_uA=[B,A]$. Equivalently, writing the pulled-back coordinate vector fields in a left invariant frame, equality of mixed partial derivatives gives this identity, with the structure constants of the bracket as its commutator terms. Here $A=V+uW$, so $B'=W-[V,B]$ and $B(0)=0$. Multiply by the finite matrix $\exp(t\operatorname{ad}V)$ and integrate to obtain $\omega(d\exp_V W)=D(\operatorname{ad}V)W$, where $D(T)=\sum_{r=0}^{s-1}(-1)^rT^r/(r+1)!$. Smoothness needed for the differentiation was established in step 4.1. [F3, step 1.2, step 4.1, algebra]

6.1 The polynomial $D$ has constant term $1$, so finite geometric inversion modulo $T^s$ gives a rational polynomial $f$ with $D(T)f(T)=1$ whenever $T^s=0$. Construct a Lie polynomial $Z(t;U,V)$ by bracket length: set $Z_1=U+tV$, and for $2\le r\le s$ let $Z_r(0)=0$ and let $Z_r'$ be the bracket-length-$r$ part of $f(\operatorname{ad}(Z_1+\cdots+Z_{r-1}))V$. That part depends only on the already constructed terms; its coefficients are polynomials in $t$, so finite integration defines $Z_r$. Brackets longer than $s$ vanish, so $Z=\sum_{r=1}^s Z_r$ satisfies $Z'=f(\operatorname{ad}Z)V$ and $Z(0)=U$ after evaluation in $\mathfrak g$. Step 5.1 implies that $\exp Z(t)$ and $\exp U\exp(tV)$ have the same left velocity $V$ and the same initial value. Their quotient has derivative zero, proving equality. Therefore $B_s(U,V)=Z(1;U,V)$ is the asserted BCH polynomial, with linear term $U+V$ and quadratic term $[U,V]/2$. All remaining terms have rational coefficients depending only on $s$ and bracket length at most $s$. [F2, step 3.1, step 5.1, construct, algebra]

7.1 The one-parameter law gives $\exp(U)^{-1}=\exp(-U)$. Repeating step 1.2 for the now constructed one-parameter subgroup $\exp(tU)$ proves $\operatorname{Ad}(\exp U)=\exp(\operatorname{ad}U)$, with the latter finite. If $\mathfrak h$ is a Lie subalgebra, BCH and inversion show that $H=\exp\mathfrak h$ is a subgroup. It is closed, connected and embedded because $\exp$ is a diffeomorphism and $\mathfrak h$ is a closed linear subspace; its tangent algebra is $\mathfrak h$. Ideals are preserved by the finite adjoint polynomial and hence give normal subgroups. Injectivity gives $\exp\mathfrak h\cap\exp\mathfrak k=\exp(\mathfrak h\cap\mathfrak k)$. For an ideal $\mathfrak i$, projection of BCH gives a group law on $\mathfrak g/\mathfrak i$: associativity and inverses follow by projecting the already proved identities on $\mathfrak g$. Its kernel is exactly $\mathfrak i$, so exponential coordinates identify $G/\exp\mathfrak i$ with this vector-space group, with a smooth linear section in first coordinates. Applying the same construction to nested ideals gives the difference of their dimensions. In a nested basis ending in an ideal these quotient coordinates are just the complementary coordinates. A consecutive one-dimensional tail quotient has the additive first coordinate, so it is $\mathbb R$ and has no nonzero period. [step 1.2, step 4.1, step 6.1, algebra]

8.1 If $K$ is a given embedded connected Lie subgroup with tangent algebra $\mathfrak h$, the ambient curve $\exp(tV)$ for $V\in\mathfrak h$ lies in $K$ locally. Indeed the left invariant field $V$ is tangent to $K$ at every point of $K$; in a submanifold chart writing $K$ as normal coordinates $w=0$, its normal component satisfies $|f(u,w)|\le C|w|$ on a small compact box. For the already existing ambient curve, $|w(t)|\le C\int_0^t|w(r)|\,dr$. On an interval of length less than $1/(2C)$ the supremum of $|w|$ is at most half itself, so it is zero; the negative-time argument is identical. The one-parameter law extends membership to every $t$ using a single sufficiently large integer. For the reverse inclusion, every point of the connected manifold $K$ is reachable from $e$ by a finite piecewise smooth path in $K$: the reachable set and its complement are both open, using straight segments in small convex coordinate neighborhoods. Fix such a path $c(t)$ and put $Z(t)=\log c(t)$ and $V(t)=\omega(c'(t))\in\mathfrak h$. Steps 5.1–6.1 give $Z'=f(\operatorname{ad}Z)V$. Choose a linear complement to $\mathfrak h$ and let $w$ be the complementary component of $Z$. The right side has zero complementary component when $w=0$, because $\mathfrak h$ is a Lie subalgebra and $V\in\mathfrak h$. It is a finite polynomial, so on the bounded sets traced by $Z,V$ it gives $|w'|\leq C|w|$. Since $w(0)=0$, the same supremum argument on finitely many subintervals of length less than $1/(2C)$ proves $w=0$ on the entire path. Hence every endpoint belongs to $\exp\mathfrak h$, proving $K=\exp\mathfrak h$ without an inverse-function or ODE-existence theorem. This assumes the specified embedded structure, not a closed-subgroup theorem. The zero-dimensional case has empty matrices and the one-point group. Every construction above is finite and uses no countable choice. [F3, step 3.1, step 4.1, step 5.1, step 6.1, step 7.1, algebra] ∎

## Remarks

The source reading for this reconstruction covers GT12 Definitions 2.1–2.6 and the complete Appendix A, not the whole paper. Appendix A assumes the global exponential facts at its opening; the argument here reconstructs them from the stronger global Mal’cev chart explicitly supplied in the hypotheses. The published local BCH and exponential-diffeomorphism items, which assume countable choice, are not used. No assertion about constructing a global chart from only abstract simply connected nilpotent Lie-group hypotheses is made.
