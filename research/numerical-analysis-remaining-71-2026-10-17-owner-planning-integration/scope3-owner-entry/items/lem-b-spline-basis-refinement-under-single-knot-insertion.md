---
id: lem-b-spline-basis-refinement-under-single-knot-insertion
kind: lemma
title: A single new knot refines the B-spline basis
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps:
  - alg-single-new-b-spline-knot-insertion
  - def-b-spline-space-and-basis
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Carl de Boor, A Practical Guide to Splines, revised edition, Chapter XI, pp. 135–138
      url: https://www.stat.cmu.edu/~brian/valerie/617-2022/week07/spline%20references/pdfcookie.com_a-practical-guide-to-splines.pdf
    - title: Gershon Elber, Computer Aided Geometric Design, Chapter 7, Boehm's knot insertion
      url: https://class236716.cs.technion.ac.il/wp-content/uploads/2021/04/chapter7.pdf
---

## Statement

Let $t_0\le\cdots\le t_{n+p}$ be a clamped degree-$p$ knot vector as in
[[def-b-spline-space-and-basis]], with endpoints $a=t_0$ and $b=t_{n+p}$.
For a zero-based knot vector $v$, write $\xi(v)_j=v_{j-1}$ and
$B_{i,q,v}=B_{i+1,q,\xi(v)}$. Let $k$ satisfy $t_k<t_{k+1}$, let
$t_k<u<t_{k+1}$, and obtain $t'$ by inserting $u$ between $t_k$ and
$t_{k+1}$. For $0\le q\le p$, define
$$\lambda_i^{(q)}=\begin{cases}1,&i\le k-q,\\\frac{u-t_i}{t_{i+q}-t_i},&k-q+1\le i\le k,\\0,&i\ge k+1.\end{cases}$$
Then for every degree $q\in\{0,\ldots,p\}$, every old basis index
$0\le i\le n+p-q-1$, and every $x\in[a,b]$,
$$B_{i,q,t}(x)=\lambda_i^{(q)}B_{i,q,t'}(x)+(1-\lambda_{i+1}^{(q)})B_{i+1,q,t'}(x).$$

## Facts & Assumptions

**Given:** A clamped degree-$p$ knot vector, a nonempty span $[t_k,t_{k+1})$, and a new knot $u$ with $t_k<u<t_{k+1}$.

[F1] [[def-b-spline-space-and-basis]] defines degree-zero B-splines as half-open interval indicators, higher degrees by the Cox–de Boor recurrence, and zero-denominator terms as zero; at $b$ each basis function is assigned its left limit.

[F2] [[alg-single-new-b-spline-knot-insertion]] inserts $u$ between $t_k$ and $t_{k+1}$ in the zero-based knot vector, producing $t'$.

[A1] The knot vector is clamped, $t_k<t_{k+1}$, and $u$ is not already a knot.

## Proof

1.1 Since the knot vector is clamped, a nonempty span index satisfies $p\le k\le n-1$. The insertion map is $t'_j=t_j$ for $j\le k$, $t'_{k+1}=u$, and $t'_j=t_{j-1}$ for $j\ge k+2$. For $q=0$, $\lambda_i^{(0)}=1$ when $i\le k$ and $0$ when $i\ge k+1$. Every old half-open degree-zero cell other than $[t_k,t_{k+1})$ is unchanged or shifts by one index; the affected cell splits as $[t_k,u)\cup[u,t_{k+1})$. Thus the indicator identity holds for all degree-zero indices, including zero-length repeated-knot cells; at $u$ the right cell supplies the value. The value at $b$ follows by the stipulated left limit. [A1, F1, F2, algebra]

2.1 Fix $1\le q\le p$ and assume the identity holds in degree $q-1$. For $x\in[a,b)$, write $A_i=(x-t_i)/(t_{i+q}-t_i)$ and $D_i=(t_{i+q+1}-x)/(t_{i+q+1}-t_{i+1})$, with any zero-denominator term defined as zero as in [F1]; define $A'_i,D'_i$ using $t'$. Expanding the old recurrence and applying the degree-$(q-1)$ identity gives the coefficient triple $(A_i\lambda_i^{(q-1)},\ A_i(1-\lambda_{i+1}^{(q-1)})+D_i\lambda_{i+1}^{(q-1)},\ D_i(1-\lambda_{i+2}^{(q-1)}))$ on $B'_{i,q-1},B'_{i+1,q-1},B'_{i+2,q-1}$. Expanding the proposed refined expression gives $(\lambda_i^{(q)}A'_i,\ \lambda_i^{(q)}D'_i+(1-\lambda_{i+1}^{(q)})A'_{i+1},\ (1-\lambda_{i+1}^{(q)})D'_{i+1})$. It remains to prove these three coefficient equalities for $k-q\le i\le k$. [A1, F1, F2, step 1.1, induction]

3.1 For the first coefficient, at $i=k-q$ both $\lambda_i^{(q-1)}$ and $\lambda_i^{(q)}$ are $1$, and the insertion map gives $t'_i=t_i$ and $t'_{i+q}=t_{i+q}=t_k$. Hence $A'_i=A_i$; if this common denominator is zero, both terms are zero by [F1]. For $k-q+1\le i\le k$, put $a=t_i$, $b=t_{i+q}$ and $v=t'_{i+q}$. Then $a\le t_k<u<b$. At the lower index $i=k-q+1$, $v=u$ and $\lambda_i^{(q-1)}=1=(u-a)/(v-a)$. At higher indices in this range, the definition gives the same ratio because $v=t_{i+q-1}$. All denominators here are positive, and $A_i\lambda_i^{(q-1)}=((x-a)/(b-a))((u-a)/(v-a))=((u-a)/(b-a))((x-a)/(v-a))=\lambda_i^{(q)}A'_i$. This also covers $q=1$, where the lower-degree weight is the degree-zero value $1$. [A1, F1, step 2.1, algebra]

3.2 For the last coefficient, first take $k-q\le i\le k-1$ and put $c=t_{i+1}$, $d=t_{i+q+1}$, and $w=t'_{i+2}$. Then $c\le t_k<u<d$ and $w\le t_k$ for $i\le k-2$, while $w=u$ for $i=k-1$. In both cases $d-c>0$, $d-w>0$, and $\lambda_{i+2}^{(q-1)}=(u-w)/(d-w)$ (zero in the case $w=u$). Consequently $1-\lambda_{i+2}^{(q-1)}=(d-u)/(d-w)$, $1-\lambda_{i+1}^{(q)}=(d-u)/(d-c)$, and $D'_{i+1}=(d-x)/(d-w)$, while $D_i=(d-x)/(d-c)$. Multiplying proves $D_i(1-\lambda_{i+2}^{(q-1)})=(1-\lambda_{i+1}^{(q)})D'_{i+1}$. At $i=k$, both $\lambda_{k+2}^{(q-1)}$ and $\lambda_{k+1}^{(q)}$ are zero, and the insertion map gives $D'_{k+1}=D_k$. If their common denominator is zero, both terms are zero by [F1]; otherwise equality follows from the identical numerator and denominator. [A1, F1, step 2.1, algebra]

3.3 For the middle coefficient at the lower boundary $i=k-q$, put $c=t_{i+1}$ and $d=t_{k+1}$. Here $\lambda_i^{(q)}=1$ and $\lambda_{i+1}^{(q-1)}=1$, so the old middle coefficient is $D_i=(d-x)/(d-c)$. Also $1-\lambda_{i+1}^{(q)}=(d-u)/(d-c)$, $D'_i=(u-x)/(u-c)$, and $A'_{i+1}=(x-c)/(u-c)$. All displayed denominators are positive, and the new middle coefficient is $\lambda_i^{(q)}D'_i+(1-\lambda_{i+1}^{(q)})A'_{i+1}=(u-x)/(u-c)+(d-u)(x-c)/((d-c)(u-c))=(d-x)/(d-c)=D_i$. The omitted old term $A_i(1-\lambda_{i+1}^{(q-1)})$ is zero even if $A_i$ has zero denominator, because [F1] defines that term as zero and its multiplier is zero. At the upper boundary $i=k$, $\lambda_{i+1}^{(q-1)}=\lambda_{i+1}^{(q)}=0$, so the old middle coefficient is $A_i$. Put $a=t_k$ and $b=t_{k+q}$; then $a<u<b$. The insertion map gives $\lambda_i^{(q)}=(u-a)/(b-a)$, $D'_i=(b-x)/(b-u)$, and $A'_{i+1}=(x-u)/(b-u)$. Therefore the new middle coefficient is $\lambda_i^{(q)}D'_i+(1-\lambda_{i+1}^{(q)})A'_{i+1}=((u-a)(b-x)+(b-a)(x-u))/((b-a)(b-u))=(x-a)/(b-a)=A_i$. The old term $D_i\lambda_{i+1}^{(q-1)}$ is zero without division by its denominator. For the strict interior $k-q+1\le i\le k-1$, which is empty if $q=1$, put $a=t_i$, $c=t_{i+1}$, $b=t_{i+q}$, and $d=t_{i+q+1}$. The insertion span gives $a\le c\le t_k<u<t_{k+1}\le b\le d$, so every denominator below is positive. The old and refined middle coefficients are respectively $((x-a)(b-u)/(b-a)+(d-x)(u-c)/(d-c))/(b-c)$ and $((u-a)(b-x)/(b-a)+(d-u)(x-c)/(d-c))/(b-c)$. Their first numerator terms differ by $x-u$, since $(x-a)(b-u)-(u-a)(b-x)=(b-a)(x-u)$. Their second numerator terms differ by $u-x$, since $(d-x)(u-c)-(d-u)(x-c)=(d-c)(u-x)$. Thus their sum is equal. These lower, strict-interior, and upper cases prove the middle coefficient identity. [A1, F1, step 2.1, algebra]

4.1 For $i<k-q$, both weights in the refinement formula are $1$, and the complete local knot list used by $B_{i,q,t}$ is unchanged in $t'$, so the recursively defined basis function is unchanged. For $i\ge k+1$, both weights are $0$, and the local knot list shifts by one, giving $B_{i,q,t}=B_{i+1,q,t'}$. For the transition range, steps 3.1, 3.2 and 3.3 establish all three coefficients in step 2.1, so the Cox–de Boor expansions agree. Induction from the degree-zero base in step 1.1 proves the formula for every $q\le p$. The argument is pointwise on $[a,b)$ under the right-cell convention, including repeated knots; taking left limits gives the equality at $b$. No continuity at knots is assumed. [A1, F1, step 1.1, step 2.1, step 3.1, step 3.2, step 3.3, algebra, induction] ∎
