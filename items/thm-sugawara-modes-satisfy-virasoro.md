---
id: thm-sugawara-modes-satisfy-virasoro
kind: theorem
title: Sugawara modes satisfy Virasoro at every noncritical complex level
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 5
deps:
  - def-sugawara-modes
  - lem-sugawara-modes-act-on-currents
  - def-positive-energy-affine-module
  - def-untwisted-affine-central-extension
  - def-virasoro-algebra
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: Peter Haine, The Segal–Sugawara construction, §§3.2–3.3
      url: https://math.mit.edu/juvitop/pastseminars/notes_2019_Fall/12-11-19.pdf
---

## Statement

Let $\mathfrak g$ be a finite-dimensional complex simple Lie algebra with invariant form $B$ normalized so long roots have square $2$. On every restricted affine-current module $V$ of complex level $k\ne-h^\vee$ as in [[def-positive-energy-affine-module]], the operators of [[def-sugawara-modes]] satisfy
$$[L_m,L_n]=(m-n)L_{m+n}+\frac{c}{12}(m^3-m)\delta_{m+n,0}I_V,\qquad c=\frac{k\dim\mathfrak g}{k+h^\vee}.$$
Consequently these operators and $C\mapsto cI_V$ define a representation of [[def-virasoro-algebra]]. No energy grading, unitarity, irreducibility or integrability is assumed. The critical level is excluded from this normalized formula.

## Facts & Assumptions

**Given:** The restricted affine-current module $V$, its noncritical level $k$, and integers $m,n$.

[F1] [[def-sugawara-modes]]: writing $q=k+h^\vee$, $2qL_n=\sum_{a,r}:J_{e_a}(r)J_{e_a}(n-r):$ for a $B$-orthonormal complex basis, with the split at $r=0$; these sums are locally finite and basis independent.

[F2] [[lem-sugawara-modes-act-on-currents]]: $[L_m,J_x(r)]=-rJ_x(m+r)$ on this entire module class.

[F3] [[def-untwisted-affine-central-extension]]: $[J_x(s),J_y(t)]=J_{[x,y]}(s+t)+skB(x,y)\delta_{s+t,0}I_V$.

[F4] [[def-positive-energy-affine-module]]: all sufficiently large positive current modes annihilate any fixed vector.

[F5] [[def-virasoro-algebra]] fixes the bracket and cubic central normalization appearing in the Statement.

## Proof

1.1 Choose a $B$-orthonormal basis $(e_a)$ and abbreviate $a_r=J_{e_a}(r)$. Existence follows by finite diagonalization of the nondegenerate symmetric complex form, rescaling each nonzero diagonal entry by a complex square root. Put $p=m+n$ and let $N_r(A,B)$ mean $AB$ for $r<0$ and $BA$ for $r\ge0$; this subscript specifies the split, not an intrinsic index of $A$. Expanding by [F2] gives $$2q[L_m,L_n]=\sum_{a,r}\bigl(-rN_r(a_{m+r},a_{n-r})-(n-r)N_r(a_r,a_{p-r})\bigr).$$ This equality is algebraic on each $v\in V$. Truncate the original quadratic sum at $|r|\le R$; it stabilizes on $v$ and $L_mv$ by [F1], so its commutator stabilizes to the left side. On the right, in the positive tail the rightmost indices are $r$ or $m+r$, and in the negative tail they are $n-r$ or $p-r$; [F4] kills all these tails for large $R$. Thus the displayed sum is locally finite on $v$, and fixed reindexings below do not create limiting errors. [F1, F2, F4, given, algebra, choose]

2.1 Reindex the first term by $s=m+r$. It becomes $(m-s)N_{s-m}(a_s,a_{p-s})$, whereas the desired normal order is $N_s$. The second term already has the latter order. Their normally ordered coefficients combine to $(m-s)-(n-s)=m-n$. The order difference in the first term is $$N_{s-m}(a_s,a_{p-s})-N_s(a_s,a_{p-s})=f_m(s)[a_s,a_{p-s}],\qquad f_m(s)=\mathbf1_{s<m}-\mathbf1_{s<0}.$$ For $m>0$ it is the commutator for $0\le s<m$; for $m<0$ it is its negative for $m\le s<0$; for $m=0$ it is zero. Therefore $$2q[L_m,L_n]=2q(m-n)L_p+\sum_s(m-s)f_m(s)\sum_a[a_s,a_{p-s}].$$ Every correction sum is finite, including all zero-index endpoints. [F1, step 1.1, algebra]

3.1 By [F3], $[a_s,a_{p-s}]=sk\delta_{p,0}I_V$, since $[e_a,e_a]=0$ and $B(e_a,e_a)=1$. The correction in step 2.1 is consequently $k\dim(\mathfrak g)\delta_{p,0}I_V$ times $\sum_s s(m-s)f_m(s)$. For $m>0$, the finite sum is $m\sum_{s=0}^{m-1}s-\sum_{s=0}^{m-1}s^2=(m^3-m)/6$. For $m=-u<0$, put $s=-t$ in the negative interval; it becomes $-\sum_{t=1}^{u}t(u-t)=-(u^3-u)/6=(m^3-m)/6$. At $m=0$ both sides vanish. These finite arithmetic identities follow by induction from $\sum_{s=0}^{d-1}s=d(d-1)/2$ and $\sum_{s=0}^{d-1}s^2=d(d-1)(2d-1)/6$. Dividing step 2.1 by $2q\ne0$ gives exactly the stated central charge. The resulting brackets and the scalar central action satisfy [F5], hence give the claimed Virasoro representation, including when $V=0$. [F1, F3, F5, step 2.1, algebra] ∎
