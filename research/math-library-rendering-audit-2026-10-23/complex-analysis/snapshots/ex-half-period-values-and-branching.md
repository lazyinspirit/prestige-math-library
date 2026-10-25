---
id: ex-half-period-values-and-branching
kind: example
title: "Half-period values of the square lattice"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-complex-lattice-and-complex-torus
  - def-weierstrass-elliptic-p-function
  - thm-weierstrass-p-normal-convergence-and-periodicity
  - thm-weierstrass-p-differential-equation
  - lem-weierstrass-p-degree-two-and-half-periods
  - ex-square-and-hexagonal-lattice-invariants
  - def-ramification-index-and-branch-value
  - thm-complex-numbers-form-a-field
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "J. S. Milne, Modular Functions and Modular Forms, Ch. 3, pp. 41-47"
      url: https://www.jmilne.org/math/CourseNotes/MF.pdf
      locator: "Ch. 3, 'The Weierstrass wp-function', printed pp. 43-45: the wp-series, double periodicity, the half-period zeros of wp', and the differential equation."
    - title: "C. T. McMullen, Advanced Complex Analysis, Math 213a course notes, Ch. 5 §5.1, pp. 79-90"
      url: https://people.math.harvard.edu/~ctm/home/text/class/harvard/213a/10/html/home/course/course.pdf
      locator: "Ch. 5 §5.1, Theorem 5.4 and Corollary 5.5 and the following discussion of the square lattice, printed pp. 82-83: the degree-two quotient of the torus and the three distinct finite branch values."
    - title: "NIST Digital Library of Mathematical Functions, §23.2 and §23.3"
      url: https://dlmf.nist.gov/23.2
      locator: "§23.2(i)-(iii), equations 23.2.1-23.2.14: lattices, the wp-series and periodicity; §23.3(i), equations 23.3.1-23.3.7: the invariants, the cubic 4z^3-g2z-g3 with roots e1,e2,e3, and g3=4e1e2e3."
verification:
  audited: 2026-10-02
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Example

Let $\Lambda_{\mathrm{sq}}=\mathbb Z+i\mathbb Z$ be the square lattice with its
oriented basis $(1,i)$, let $\wp=\wp_{\Lambda_{\mathrm{sq}}}$ with invariants
$g_2,g_3$, put $h:=(1+i)/2$, and let
$e_1:=\wp(1/2)$, $e_2:=\wp(i/2)$, $e_3:=\wp(h)$ be the three half-period
values. Then:

1. $\wp(h)=0$, so $e_3=0$;
2. the other two half-period values $e_1$ and $e_2$ are the two elements of the
   pair $\pm\sqrt{g_2}/2$ of roots of $4x^3-g_2x$; with the normalisation
   $\sqrt{g_2}:=2e_1$ one has $e_1=\sqrt{g_2}/2$ and $e_2=-\sqrt{g_2}/2$
   literally, and $g_2\ne0$;
3. the four branch values of the torus form
   $\bar\wp:T_{\Lambda_{\mathrm{sq}}}\to\widehat{\mathbb C}$ of $\wp$ — the
   images of its critical points
   ([[def-ramification-index-and-branch-value]]) — are exactly $0$,
   $\pm\sqrt{g_2}/2$ and $\infty$.

The verification below evaluates no Eisenstein sum: it uses the scaling
identity $\wp_{c\Lambda}(cz)=c^{-2}\wp_\Lambda(z)$ at $c=i$, the symmetry
$i\Lambda_{\mathrm{sq}}=\Lambda_{\mathrm{sq}}$, and the cubic differential
equation.

## Facts & Assumptions

**Given:** The square lattice $\Lambda_{\mathrm{sq}}=\mathbb Z+i\mathbb Z$ with its basis $(1,i)$, the Weierstrass function $\wp=\wp_{\Lambda_{\mathrm{sq}}}$ and its derivative $\wp'$, the invariants $g_2=60G_4$, $g_3=140G_6$, the torus $T_{\Lambda_{\mathrm{sq}}}=\mathbb C/\Lambda_{\mathrm{sq}}$ with class map $\pi$, the torus form $\bar\wp$ characterised by $\bar\wp\circ\pi=\wp$, the half-periods $h_1=1/2$, $h_2=i/2$, $h_3=(1+i)/2=h$ and the values $e_j=\wp(h_j)$.

[F1] $\mathbb C$ is a field; every complex number has a unique form $a+bi$ with $a,b\in\mathbb R$; and $(a+bi)(u+vi)=(au-bv)+(av+bu)i$ for real $a,b,u,v$ ([[thm-complex-numbers-form-a-field]]).

[F2] A full complex lattice is a subgroup $\Lambda=\mathbb Z\omega_1+\mathbb Z\omega_2\subseteq\mathbb C$ with $\omega_1,\omega_2$ real-linearly independent, and $(\omega_1,\omega_2)$ is oriented when $\operatorname{Im}(\omega_2/\omega_1)>0$; for either ordering, real-linear independence is equivalent to $\operatorname{Im}(\omega_2/\omega_1)\ne0$ ([[def-complex-lattice-and-complex-torus]]).

[F3] $\wp_\Lambda(z)=z^{-2}+\sum_{\omega\in\Lambda\setminus\{0\}}\bigl((z-\omega)^{-2}-\omega^{-2}\bigr)$ on $\mathbb C\setminus\Lambda$, the sum being the unordered finite-subset sum over the directed set of finite subsets of $\Lambda\setminus\{0\}$; the value depends only on the lattice ([[def-weierstrass-elliptic-p-function]]).

[F4] For every full lattice the sum defining $\wp_\Lambda$ converges absolutely at every $z\in\mathbb C\setminus\Lambda$ and uniformly on compact subsets; $\wp_\Lambda$ is holomorphic on $\mathbb C\setminus\Lambda$ and $\Lambda$-periodic, $\wp_\Lambda(z+\lambda)=\wp_\Lambda(z)$ for every $\lambda\in\Lambda$ and every $z\in\mathbb C$ with poles matched ([[thm-weierstrass-p-normal-convergence-and-periodicity]]).

[F5] With the invariants $g_2=60G_4$ and $g_3=140G_6$ one has $(\wp')^2=4\wp^3-g_2\wp-g_3$ on $\mathbb C\setminus\Lambda$ ([[thm-weierstrass-p-differential-equation]]).

[F6] For the square lattice $g_3(\Lambda_{\mathrm{sq}})=0$ and $g_2(\Lambda_{\mathrm{sq}})\ne0$ ([[ex-square-and-hexagonal-lattice-invariants]]).

[F7] For a full lattice $\Lambda=\mathbb Z\omega_1+\mathbb Z\omega_2$ with $h_1=\omega_1/2$, $h_2=\omega_2/2$, $h_3=(\omega_1+\omega_2)/2$ one has $\wp'(h)=0$ for every $h\in\mathbb C\setminus\Lambda$ with $2h\in\Lambda$, and the zeros of $\wp'$ are precisely the $\Lambda$-translates of $h_1,h_2,h_3$, each of order one ([[lem-weierstrass-p-degree-two-and-half-periods]]).

[F8] For the same data the classes $[h_1],[h_2],[h_3]$ are three distinct nonzero half-period classes, the values $e_1,e_2,e_3$ are three distinct complex numbers, and the torus form $\bar\wp:T_\Lambda\to\widehat{\mathbb C}$ of $\wp$ has critical points exactly $[0],[h_1],[h_2],[h_3]$, with branch values $\bar\wp([0])=\infty$ and $e_1,e_2,e_3$ ([[lem-weierstrass-p-degree-two-and-half-periods]]).

[F9] For a nonconstant holomorphic map $f:X\to Y$ of Riemann surfaces, a branch value of $f$ is a point $y\in Y$ for which there is a critical point $x\in X$ with $f(x)=y$, and the set of all branch values is the branch locus of $f$ ([[def-ramification-index-and-branch-value]]).

## Verification

1.1 (The square lattice, its symmetry and its half-periods.) Since every complex number is uniquely $a+bi$ with $a,b\in\mathbb R$, the pair $\{1,i\}$ spans $\mathbb C$ over $\mathbb R$ and $a+bi=0$ forces $a=b=0$, so $1,i$ are real-linearly independent and $\Lambda_{\mathrm{sq}}=\mathbb Z+i\mathbb Z$ is a full complex lattice with oriented basis $(1,i)$, as $\operatorname{Im}(i/1)=1>0$; multiplication by $i$ maps $\Lambda_{\mathrm{sq}}$ into itself because $i\cdot1=i$ and $i\cdot i=-1$ both lie in it, and multiplication by $i$ is a bijection of $\mathbb C$ with inverse multiplication by $i^{-1}=-i$ (as $i\cdot(-i)=1$), which also preserves $\Lambda_{\mathrm{sq}}$, so $i\Lambda_{\mathrm{sq}}=\Lambda_{\mathrm{sq}}$; with the oriented basis $(1,i)$ the half-periods of the degree-two lemma are $h_1=1/2$, $h_2=i/2$, $h_3=(1+i)/2=h$, and these are nonzero classes, so $h\notin\Lambda_{\mathrm{sq}}$; moreover $2h_1=1$, $2h_2=i$ and $2h_3=1+i$ lie in $\Lambda_{\mathrm{sq}}$, and $h-ih=\tfrac12(1+i)(1-i)=\tfrac12(1-i^2)=1$. [F1, F2, F8, given, algebra]

1.2 (The scaling identity for the $\wp$-series.) Let $\Lambda=\mathbb Z\omega_1+\mathbb Z\omega_2$ be a full lattice, $c\in\mathbb C^\times$ and $z\in\mathbb C\setminus\Lambda$; then $c\Lambda=\mathbb Z(c\omega_1)+\mathbb Z(c\omega_2)$ is again a full lattice, because $a(c\omega_1)+b(c\omega_2)=c(a\omega_1+b\omega_2)$ vanishes for real $a,b$ only if $a\omega_1+b\omega_2=0$, and $\omega\mapsto c\omega$ is a bijection $\Lambda\to c\Lambda$; for every finite $F\subseteq\Lambda\setminus\{0\}$ one has $\sum_{\omega\in F}\bigl((cz-c\omega)^{-2}-(c\omega)^{-2}\bigr)=c^{-2}\sum_{\omega\in F}\bigl((z-\omega)^{-2}-\omega^{-2}\bigr)$ by the multiplication formula and $(c\zeta)^{-2}=c^{-2}\zeta^{-2}$; the finite subsets of $c\Lambda\setminus\{0\}$ are exactly the image sets $cF$, so the finite-subset net defining $\wp_{c\Lambda}(cz)$ is the constant $(cz)^{-2}=c^{-2}z^{-2}$ plus $c^{-2}$ times the finite-subset net defining $\wp_\Lambda(z)$, which converges at $z\notin\Lambda$ by the absolute-convergence clause; hence $\wp_{c\Lambda}(cz)=c^{-2}\wp_\Lambda(z)$. [F1, F2, F3, F4, algebra]

2.1 (The scaling identity at $c=i$.) Taking $c=i$ and $\Lambda=\Lambda_{\mathrm{sq}}$ in step 1.2, and using $i\Lambda_{\mathrm{sq}}=\Lambda_{\mathrm{sq}}$ from step 1.1 as well as $i^{-2}=(i^2)^{-1}=(-1)^{-1}=-1$, gives $\wp(iz)=-\wp(z)$ for every $z\in\mathbb C\setminus\Lambda_{\mathrm{sq}}$. [step 1.1, step 1.2, algebra]

2.2 (The cubic relation at each half-period.) Fix $j\in\{1,2,3\}$: by step 1.1, $h_j\notin\Lambda_{\mathrm{sq}}$ and $2h_j\in\Lambda_{\mathrm{sq}}$, so the degree-two lemma gives $\wp'(h_j)=0$; since $h_j\in\mathbb C\setminus\Lambda_{\mathrm{sq}}$, the differential equation may be evaluated there, giving $0=(\wp'(h_j))^2=4\wp(h_j)^3-g_2\wp(h_j)-g_3=4e_j^3-g_2e_j-g_3$, and with $g_3=0$ for the square lattice this reads $e_j(4e_j^2-g_2)=0$. [F5, F6, F7, given, algebra]

3.1 (The vanishing $\wp(h)=0$.) By step 1.1, $h\notin\Lambda_{\mathrm{sq}}$ and $h=ih+1$ with $1\in\Lambda_{\mathrm{sq}}$; hence $h$ lies in the domain of $\wp$ and the periodicity and step 2.1 give $\wp(h)=\wp(ih+1)=\wp(ih)=-\wp(h)$, so $2\wp(h)=0$, and since $\mathbb C$ is a field in which $2\ne0$ this forces $\wp(h)=0$; thus $e_3=\wp(h_3)=\wp(h)=0$. [F1, F4, step 1.1, step 2.1, algebra]

4.1 (The two nonzero half-period values and the factorisation of the cubic.) By step 3.1, $e_3=0$, and by the degree-two lemma $e_1,e_2,e_3$ are pairwise distinct, so $e_1,e_2\ne0$; step 2.2 for $j=1,2$ then gives $e_j(4e_j^2-g_2)=0$ with $e_j\ne0$, hence $4e_1^2=g_2=4e_2^2$ and $e_1^2=e_2^2$, that is $(e_1-e_2)(e_1+e_2)=0$ in the field $\mathbb C$, so $e_1-e_2\ne0$ forces $e_1+e_2=0$ and $e_2=-e_1$; consequently $g_2=4e_1^2\ne0$, and substituting $g_2=4e_1^2$ and $g_3=0$ gives the polynomial identity $4x^3-g_2x-g_3=4x^3-4e_1^2x=4x(x-e_1)(x+e_1)$, so the cubic $4x^3-g_2x-g_3$ has exactly the roots $0,e_1,-e_1$, which are pairwise distinct; with the normalisation $\sqrt{g_2}:=2e_1$ one has $(\sqrt{g_2})^2=4e_1^2=g_2$ and $\pm\sqrt{g_2}/2=\pm e_1$, so the other two half-period values $e_1=\wp(1/2)$ and $e_2=\wp(i/2)=-e_1$ are exactly the two distinct roots $\pm\sqrt{g_2}/2$ of $4x^3-g_2x$. [F1, F6, F8, step 3.1, step 2.2, algebra]

5.1 (The four branch values.) By the degree-two lemma the torus form $\bar\wp$ of $\wp$ has critical points exactly $[0],[h_1],[h_2],[h_3]$, with branch values $\bar\wp([0])=\infty$ and $e_1,e_2,e_3$, so by the definition of a branch value its branch locus is the four-element set $\{\infty,e_1,e_2,e_3\}$; by step 4.1 this set is $\{\infty,0,e_1,-e_1\}=\{\infty,0,\pm\sqrt{g_2}/2\}$ with $e_1\ne0$, so the branch locus of $\bar\wp$ consists exactly of the four distinct values $\infty,0,\sqrt{g_2}/2,-\sqrt{g_2}/2$. [F8, F9, step 4.1, algebra]

6.1 (Assembly.) Step 3.1 proves $\wp(h)=0$ for $h=(1+i)/2$, so the half-period value $e_3$ is $0$; step 4.1 proves that $e_1$ and $e_2$ are the two distinct roots $\pm\sqrt{g_2}/2$ of $4x^3-g_2x$ for the normalisation $\sqrt{g_2}=2e_1$, and that $g_2\ne0$; step 5.1 proves that the branch values of the torus form of $\wp$ are exactly $0,\pm\sqrt{g_2}/2,\infty$. These are the three assertions of the example. ∎ [step 3.1, step 4.1, step 5.1]

## Remarks

The sign in $\wp(h)=0$ comes from the scaling identity alone: $i$ is a
similarity of the square lattice, and under it $\wp$ is multiplied by
$i^{-2}=-1$, while $h$ and $ih$ differ by the period $1$. The remaining
half-period values are then forced by the cubic: everything is a root of
$4x^3-g_2x$ because $g_3=0$, and the two nonzero roots sum to zero, matching
$e_2=-e_1$. The four branch values of the degree-two map
$\bar\wp:T_{\Lambda_{\mathrm{sq}}}\to\widehat{\mathbb C}$ are consequently
$\infty$ and the three finite values $0,\pm\sqrt{g_2}/2$ — the two-element
pair beyond $0$ being exactly the pair of nonzero roots, without any need to
evaluate $g_2$ numerically.
