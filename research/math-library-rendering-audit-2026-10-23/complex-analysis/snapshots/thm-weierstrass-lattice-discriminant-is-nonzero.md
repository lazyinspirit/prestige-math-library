---
id: thm-weierstrass-lattice-discriminant-is-nonzero
kind: theorem
title: "Nonvanishing of the lattice discriminant"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-complex-lattice-and-complex-torus
  - def-weierstrass-elliptic-p-function
  - def-projective-space-points
  - thm-weierstrass-p-differential-equation
  - lem-weierstrass-p-degree-two-and-half-periods
  - thm-discriminant-root-formula-and-repeated-root-criterion
  - def-discriminant-of-a-monic-polynomial
  - thm-complex-polynomial-has-exactly-degree-many-roots-counted-with-multiplicity
  - thm-holomorphic-implicit-function-theorem
  - lem-nonsingular-complex-algebraic-curve-holomorphic-charts
forward_refs: [ex-singular-cubic-degeneration]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "C. T. McMullen, Advanced Complex Analysis, Math 213a course notes, Ch. 5 §5.1, pp. 79-90"
      url: https://people.math.harvard.edu/~ctm/home/text/class/harvard/213a/10/html/home/course/course.pdf
      locator: "Ch. 5 §5.1, Theorem 5.4 and Corollary 5.5 (cubic factorization and degree-two quotient), Corollary 5.6 (bijection onto the smooth cubic), printed pp. 82-83."
    - title: "J. S. Milne, Modular Functions and Modular Forms, Ch. 3, pp. 41-47"
      url: https://www.jmilne.org/math/CourseNotes/MF.pdf
      locator: "Ch. 3, Proposition 3.11 and its proof, printed pp. 46-47: the cubic differential relation and the nonsingularity of the lattice cubic."
    - title: "NIST Digital Library of Mathematical Functions, §23.2"
      url: https://dlmf.nist.gov/23.2
      locator: "§23.2(iii), equations (23.2.9)-(23.2.10): the half-period derivative zeros and the invariants g₂, g₃ attached to them."
verification:
  audited: 2026-10-02
  precheck: pass
---

## Statement

Let $\Lambda=\mathbb Z\omega_1+\mathbb Z\omega_2$ be a full complex lattice with
oriented basis, with Weierstrass invariants $g_2=60G_4$, $g_3=140G_6$ and
discriminant
$$\Delta(\Lambda):=g_2^3-27g_3^2$$
([[def-weierstrass-elliptic-p-function]],
[[thm-weierstrass-p-differential-equation]]). Then:

1. $\Delta(\Lambda)\neq0$;
2. the polynomial $4x^3-g_2x-g_3$ has three distinct roots, namely the values
   $e_j=\wp_\Lambda(h_j)$ at the three nonzero half-periods
   $h_1=\omega_1/2$, $h_2=\omega_2/2$, $h_3=(\omega_1+\omega_2)/2$
   ([[lem-weierstrass-p-degree-two-and-half-periods]]);
3. consequently the projective cubic
   $$C_\Lambda=\{[X:Y:Z]\in\mathbb{CP}^2:Y^2Z=4X^3-g_2XZ^2-g_3Z^3\}$$
   is nonsingular in the Jacobian-rank sense at every point, including its
   unique point at infinity $O=[0:1:0]$
   ([[lem-nonsingular-complex-algebraic-curve-holomorphic-charts]]).

## Facts & Assumptions

**Given:** A full complex lattice $\Lambda=\mathbb Z\omega_1+\mathbb Z\omega_2$ with oriented basis; the Weierstrass function $\wp=\wp_\Lambda$ with invariants $g_2=60G_4$, $g_3=140G_6$ and $\Delta=g_2^3-27g_3^2$; the half-periods $h_1=\omega_1/2$, $h_2=\omega_2/2$, $h_3=(\omega_1+\omega_2)/2$; and the values $e_j=\wp(h_j)$.

[F1] $\Lambda\subseteq\mathbb C$ is a discrete full lattice and $\mathbb C/\Lambda=T_\Lambda$ is its torus ([[def-complex-lattice-and-complex-torus]]); $\wp$ is the Weierstrass function of $\Lambda$ and $G_4=\sum_{\omega\ne0}\omega^{-4}$, $G_6=\sum_{\omega\ne0}\omega^{-6}$ are absolutely convergent, with $g_2=60G_4$, $g_3=140G_6$ ([[def-weierstrass-elliptic-p-function]], [[thm-weierstrass-p-differential-equation]]). The standard affine charts of $\mathbb{CP}^2$ are the sets where one homogeneous coordinate is nonzero, with $[X:Y:Z]\leftrightarrow(X/Z,Y/Z)$ on $\{Z\ne0\}$ and $[X:Y:Z]\leftrightarrow(X/Y,Z/Y)$ on $\{Y\ne0\}$ ([[def-projective-space-points]]).

[F2] Every nonzero half-period $h$ of $\Lambda$, that is, $h\notin\Lambda$ with $2h\in\Lambda$, satisfies $\wp'(h)=0$; the zeros of $\wp'$ are exactly the $\Lambda$-translates of $h_1,h_2,h_3$, each of order one; the classes $[h_1],[h_2],[h_3]$ and the values $e_1,e_2,e_3\in\mathbb C$ are three distinct values each ([[lem-weierstrass-p-degree-two-and-half-periods]]).

[F3] $(\wp')^2=4\wp^3-g_2\wp-g_3$ on $\mathbb C\setminus\Lambda$ ([[thm-weierstrass-p-differential-equation]]).

[F4] (a) If $f$ is a monic polynomial of degree $n\ge1$ over a field and $f(t)=\prod_{i=1}^n(t-\alpha_i)$ in a splitting field, then $\operatorname{Disc}(f)=\prod_{i<j}(\alpha_i-\alpha_j)^2$, and $\operatorname{Disc}(f)=0$ if and only if $f$ has a repeated root ([[def-discriminant-of-a-monic-polynomial]], [[thm-discriminant-root-formula-and-repeated-root-criterion]]). (b) Every polynomial $f\in\mathbb C[x]$ of degree $n\ge1$ factors as $f=c\prod_{j=1}^r(x-\alpha_j)^{m_j}$ with $c\in\mathbb C^\times$ and $m_1+\cdots+m_r=n$, and these roots and multiplicities are uniquely determined ([[thm-complex-polynomial-has-exactly-degree-many-roots-counted-with-multiplicity]]).

[F5] (Implicit function theorem.) If $f$ is holomorphic near $(u_0,v_0)\in\mathbb C^2$, $f(u_0,v_0)=0$ and $\partial f/\partial v(u_0,v_0)\ne0$, then near $u_0$ there is a unique holomorphic $\varphi$ with $\varphi(u_0)=v_0$ and $f(u,\varphi(u))=0$, and locally $f(u,v)=0$ if and only if $v=\varphi(u)$ ([[thm-holomorphic-implicit-function-theorem]]).

[F6] A curve in a standard affine chart of $\mathbb{CP}^2$ that near a point is the common zero set of one holomorphic function of two variables, with nonzero complex gradient at that point, is nonsingular there in the Jacobian-rank sense of the chart lemma, whose Jacobian has rank $N-1=1$; the lemma then supplies a local parameter for the curve ([[lem-nonsingular-complex-algebraic-curve-holomorphic-charts]]).

## Proof

**Proof technique:** direct.

1.1 (The half-period values are roots of the cubic.) For each $j$ the point $h_j$ satisfies $h_j\notin\Lambda$ and $2h_j\in\Lambda$, so [F2] gives $\wp'(h_j)=0$. Since $h_j\notin\Lambda$, the differential equation [F3] may be evaluated at $h_j$: $0=\wp'(h_j)^2=4\wp(h_j)^3-g_2\wp(h_j)-g_3=4e_j^3-g_2e_j-g_3$. Hence each $e_j$ is a root of $p(x):=4x^3-g_2x-g_3$. [F2, F3, given, algebra]

1.2 (The three values are distinct.) By [F2] the three nonzero half-period classes $[h_1],[h_2],[h_3]$ and the three values $e_1,e_2,e_3$ are distinct. [F2, given]

2.1 (The discriminant does not vanish.) Put $P:=-\tfrac{g_2}{4}$ and $Q:=-\tfrac{g_3}{4}$, so that $q(x):=x^3+Px+Q$ is the monic cubic with $p=4q$. By step 1.1 each $e_j$ is a root of $q$, and by step 1.2 the three roots $e_1,e_2,e_3$ are distinct; since $\deg q=3$, [F4](b) gives $q(x)=(x-e_1)(x-e_2)(x-e_3)$ — the leading coefficient is $1$ and the three roots exhaust the multiplicities — and comparing coefficients with $x^3+Px+Q$ gives $$e_1+e_2+e_3=0,\qquad e_1e_2+e_1e_3+e_2e_3=P,\qquad e_1e_2e_3=-Q.$$ By [F4](a) applied to this split form, $\operatorname{Disc}(q)=\prod_{i<j}(e_i-e_j)^2$, which is nonzero because no factor $e_i-e_j$ with $i<j$ vanishes. I claim $$\operatorname{Disc}(q)=-4P^3-27Q^2.$$ Indeed put $u:=e_1+e_2$ and $v:=e_1e_2$; the coefficient relations give $e_3=-u$, hence $P=e_1e_2+e_1e_3+e_2e_3=v-u^2$ and $Q=-e_1e_2e_3=uv$, that is $u^2=v-P$ and $Q^2=u^2v^2=(v-P)v^2$. Moreover $$(e_1-e_2)^2=u^2-4v=(v-P)-4v=-3v-P,$$ and $e_1-e_3=2e_1+e_2$, $e_2-e_3=e_1+2e_2$, so $$(e_1-e_3)(e_2-e_3)=2e_1^2+5e_1e_2+2e_2^2=2(u^2-2v)+5v=2(v-P)+v=3v-2P .$$ Therefore $$\operatorname{Disc}(q)=(e_1-e_2)^2(e_1-e_3)^2(e_2-e_3)^2=(-3v-P)(3v-2P)^2=-(3v+P)(9v^2-12Pv+4P^2)=-(27v^3-27Pv^2+4P^3)=-4P^3-27(v^3-Pv^2)=-4P^3-27Q^2 .$$ Substituting $P=-g_2/4$ and $Q=-g_3/4$ gives $$\operatorname{Disc}(q)=-4\Bigl(-\frac{g_2}{4}\Bigr)^3-27\Bigl(-\frac{g_3}{4}\Bigr)^2=\frac{g_2^3}{16}-\frac{27g_3^2}{16}=\frac{\Delta}{16},$$ so $\Delta=16\operatorname{Disc}(q)\ne0$. [F4, given, step 1.1, step 1.2, algebra]

3.1 (Smoothness of the projective cubic.) The curve $C_\Lambda$ meets the chart $\{Z=0\}$ only in points with $0=Y^2\cdot0=4X^3$, that is $X=0$, so $O=[0:1:0]$ is its unique point at infinity; in the chart $\{Y\ne0\}$ with coordinates $u=X/Y$, $v=Z/Y$, the curve is the zero set of $G(u,v)=v-4u^3+g_2uv^2+g_3v^3$, and $\partial G/\partial v(0,0)=1+2g_2uv+3g_3v^2\big|_{(0,0)}=1\ne0$, so by [F5] there is a holomorphic $\varphi$ with $v=\varphi(u)$ on $G=0$ near $O$: the curve is nonsingular at $O$ with local parameter $u$, by [F6]. Every other point of $C_\Lambda$ lies in the chart $\{Z\ne0\}$, where the curve is the zero set of the polynomial $f(x,y)=y^2-4x^3+g_2x+g_3$ in the affine coordinates $x=X/Z$, $y=Y/Z$; its gradient $\nabla f=(-12x^2+g_2,\,2y)$ is nonzero at every point of $f=0$: if $y=0$ and $f(x,0)=0$, then $0=4x^3-g_2x-g_3=p(x)=4(x-e_1)(x-e_2)(x-e_3)$ by step 2.1, so $x=e_j$ for some $j$ and $-12x^2+g_2=-p'(e_j)=-4\prod_{k\ne j}(e_j-e_k)\ne0$ by the distinctness in step 1.2 — a contradiction; hence $\nabla f\ne0$ on the affine curve, which by [F6] is nonsingular in the Jacobian-rank sense at each of its points. Thus every point of $C_\Lambda$, including the unique point at infinity $O=[0:1:0]$, is nonsingular in the Jacobian-rank sense. [F1, F5, F6, step 2.1, step 1.2, algebra]

4.1 (Conclusion.) Step 1.1 exhibits $e_1,e_2,e_3$ as roots of $4x^3-g_2x-g_3$ with distinct classes of half-periods, step 1.2 makes them distinct values, step 2.1 proves $\Delta=16\operatorname{Disc}(q)\ne0$, and step 3.1 proves that the projective cubic $Y^2Z=4X^3-g_2XZ^2-g_3Z^3$ is nonsingular in the Jacobian-rank sense at all its points, including its unique point at infinity $O=[0:1:0]$. ∎

## Remarks

The three distinct roots are the branch values of the degree-two map
$\wp:T_\Lambda\to\widehat{\mathbb C}$, and the nonvanishing of $\Delta$ is the
statement that this cubic is a smooth elliptic curve rather than a nodal or
cuspidal degeneration; the smoothness at infinity is checked in the chart
where $Z/Y$ is the dependent variable, since $O$ is never in the chart
$Z\ne0$. The proof uses no elliptic integral and no Riemann-Roch theorem: the
distinctness of the roots comes from the fibre description of $\wp$, and the
algebraic discriminant is computed directly from the three roots by comparing
coefficients, without naming the roots. This is the theorem that rules out the degenerate cubic of
[[ex-singular-cubic-degeneration]] for coefficients coming from a lattice.
