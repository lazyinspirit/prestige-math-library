---
id: ex-class-group-from-small-prime-ideals
kind: example
title: "Higher-degree class group by norm exclusions"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - thm-minkowski-bound-for-ideal-classes
  - thm-reduction-mod-prime-irreducibility-test
  - thm-power-basis-discriminant-is-polynomial-discriminant
  - cor-squarefree-power-basis-discriminant-gives-ring-of-integers
  - cor-algebraic-integer-minimal-polynomial-criterion
  - cor-norm-of-a-prime-ideal
  - cor-discriminant-as-a-resultant-with-the-derivative
  - def-monic-resultant
  - def-discriminant-of-a-monic-polynomial
  - def-absolute-norm-of-an-ideal
  - cor-vietas-formulas-for-a-split-monic-polynomial
  - thm-gregory-leibniz-series-for-pi-from-a-finite-remainder
  - def-ideal-class-group-of-a-domain
  - def-axiom-of-choice
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "J. S. Milne, Algebraic Number Theory v3.08"
      url: "https://www.jmilne.org/math/CourseNotes/ANTc.pdf"
      locator: "Ch. 2 Example 2.39 p.39; Ch. 4 Example 4.8 p.72."
    - title: "William A. Stein, Algebraic Number Theory: A Computational Approach"
      url: "https://wstein.org/books/ant/ant.pdf"
      locator: "§7.3 class-group norm-exclusion method, pp.84-85."
verification:
  audited: 2026-10-02
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Example

Assume the Axiom of Choice. Let $\alpha$ be a root of
$f=X^5-X-1$ and $K=\mathbb Q(\alpha)$. Then $\mathcal O_K=\mathbb Z[\alpha]$,
$d_K=2869=19\cdot151$, the Minkowski constant satisfies $M_K<4$, and
$\operatorname{Cl}(\mathcal O_K)$ is trivial, because no nonzero integral
ideal of $\mathcal O_K$ has norm $2$ or $3$ and every class has a
representative of norm $<4$.

## Facts & Assumptions

**Given:** The Axiom of Choice, the polynomial $f=X^5-X-1\in\mathbb Z[X]$,
and a root $\alpha$ of $f$ with $K=\mathbb Q(\alpha)$.

[F1] Reduction modulo a prime: if $f\in\mathbb Z[x]$ is primitive of positive
degree, $p$ does not divide its leading coefficient, and the reduction
$\bar f\in\mathbb F_p[x]$ is irreducible, then $f$ is irreducible in
$\mathbb Q[x]$ ([[thm-reduction-mod-prime-irreducibility-test]]).

[F2] Discriminant and resultant: for monic $f$ of degree $n$,
$\operatorname{Res}(f,f')=(-1)^{n(n-1)/2}\operatorname{Disc}(f)$
([[cor-discriminant-as-a-resultant-with-the-derivative]]), and in an algebra
in which $f$ splits with roots $r_1,\dots,r_n$ one has
$\operatorname{Res}(f,f')=\prod_if'(r_i)$ and
$\operatorname{Disc}(f)=\prod_{i<j}(r_i-r_j)^2$
([[def-monic-resultant]], [[def-discriminant-of-a-monic-polynomial]]).

[F3] Vieta: if $f=t^n+a_1t^{n-1}+\cdots+a_n$ splits in a commutative algebra
as $f(t)=\prod_{i=1}^n(t-\alpha_i)$, then $a_k=(-1)^ke_k(\alpha_1,\dots,\alpha_n)$
([[cor-vietas-formulas-for-a-split-monic-polynomial]]).

[F4] Power-basis discriminant: if $f$ is the degree-$n$ monic minimal
polynomial of $\alpha$, then
$\operatorname{disc}(1,\alpha,\dots,\alpha^{n-1})=\operatorname{Disc}(f)$
([[thm-power-basis-discriminant-is-polynomial-discriminant]]).

[F5] If integral $\alpha$ generates $K$ and its power-basis discriminant is
squarefree, then $\mathcal O_K=\mathbb Z[\alpha]$
([[cor-squarefree-power-basis-discriminant-gives-ring-of-integers]]).

[F6] $\alpha\in\mathcal O_K$ exactly when its monic minimal polynomial over
$\mathbb Q$ lies in $\mathbb Z[X]$
([[cor-algebraic-integer-minimal-polynomial-criterion]]).

[F7] For a nonzero integral ideal $\mathfrak a$ of norm $N\mathfrak a=p$ with
$p$ a rational prime: $N\mathfrak a=|\mathcal O_K/\mathfrak a|$, and for a
nonzero prime $\mathfrak P$ one has $N\mathfrak P=p^f\ge2$
([[def-absolute-norm-of-an-ideal]], [[cor-norm-of-a-prime-ideal]]).

[F8] Minkowski bound: every class of $\operatorname{Cl}(\mathcal O_K)$
contains an integral ideal $\mathfrak b$ with $N\mathfrak b\le M_K$
([[thm-minkowski-bound-for-ideal-classes]],
[[def-ideal-class-group-of-a-domain]]).

[F9] Gregory-Leibniz: the partial sum of $\sum_k(-1)^k/(2k+1)$ through
$N=7$ is $33976/45045>3/4$ with positive remainder, giving $\pi>3$
([[thm-gregory-leibniz-series-for-pi-from-a-finite-remainder]]).

## Proof

1.1 Reduction modulo 3: $\bar f=X^5+2X+2$ has values $2,2,2$ at $0,1,2$, so it has no linear factor; division by the three monic irreducible quadratics leaves remainders $2$ for $X^2+1$ (where $X^2\equiv-1$), $X+2$ for $X^2+X+2$ (where $X^2\equiv-X-2$), and $X+2$ for $X^2+2X+2$ (where $X^2\equiv-2X-2$); hence $\bar f$ has no factor of degree at most $2$, and a degree-$5$ reducible polynomial would have one, so $\bar f$ is irreducible over $\mathbb F_3$. [algebra]

1.2 Discriminant: in $\mathbb C$ write $f=\prod_{i=1}^5(t-r_i)$; by [F2] and [F3], $\operatorname{Disc}(f)=\operatorname{Res}(f,f')=\prod_i(5r_i^4-1)$ and $\prod_ir_i=-a_5=1$. Since $f(r_i)=0$ and $r_i\ne0$ (as $f(0)=-1$), we have $r_i^4=(r_i+1)/r_i$ and $5r_i^4-1=(4r_i+5)/r_i$; moreover $\prod_i(4r_i+5)=4^5\prod_i(r_i+5/4)=-4^5f(-5/4)=-1024\bigl(-\frac{3125}{1024}+\frac54-1\bigr)=2869$. Hence $\operatorname{Disc}(f)=2869$. [F2, F3, algebra]

2.1 By [F1] with $p=3$ the polynomial $f$ is irreducible over $\mathbb Q$, so it is the minimal polynomial of $\alpha$, $K=\mathbb Q(\alpha)$ has degree $5$, and $\alpha\in\mathcal O_K$ by [F6]. [F1, F6, step 1.1]

2.2 No ideal of norm $2$ or $3$: if $N\mathfrak a=p\in\{2,3\}$, then $\mathcal O_K/\mathfrak a$ is a commutative ring with $p$ elements, hence isomorphic to $\mathbb F_p$; the composite $\mathbb Z[X]\to\mathcal O_K\to\mathbb F_p$ with $X\mapsto\bar\alpha$ kills $f$, so $f$ has a root mod $p$ by [F7]; but $f\bmod3$ has values $2,2,2$ and $f\bmod2$ has values $1,1$ at all elements of their prime fields, a contradiction. [F7, step 1.1, algebra]

3.1 The factorisation $2869=19\cdot151$ consists of distinct primes, so $\operatorname{Disc}(f)$ is squarefree; by [F2] and [F4] the power-basis discriminant of $\alpha$ is $2869$, so [F5] gives $\mathcal O_K=\mathbb Z[\alpha]$ and $d_K=2869$. [F4, F5, step 2.1, step 1.2, algebra]

3.2 Signature: $f'=5X^4-1$ vanishes exactly at $\pm c$ with $c=5^{-1/4}$; since $c^4=1/5$, $f(-c)=-c^5+c-1=\frac45c-1<0$ and $f(c)=c^5-c-1=-\frac45c-1<0$, using $0<c<1$. The derivative is positive on $(-\infty,-c)$, negative on $(-c,c)$, and positive on $(c,\infty)$, so the local maximum and local minimum are both negative. Since $f(x)\to-\infty$ as $x\to-\infty$ and $f(x)\to+\infty$ as $x\to+\infty$, there is exactly one real root and two conjugate pairs of nonreal roots, that is $(r_1,r_2)=(1,2)$. [step 2.1, algebra]

4.1 Minkowski constant: $M_K=(4/\pi)^2\frac{5!}{5^5}\sqrt{2869}=\frac{120}{3125}\bigl(\frac4\pi\bigr)^2\sqrt{2869}<\frac{120}{3125}\cdot\frac{16}{9}\cdot54=\frac{11520}{3125}<4$, using $\pi>3$ of [F9] and $\sqrt{2869}<54$. [F9, step 3.1, step 3.2, algebra]

5.1 Every class of $\operatorname{Cl}(\mathcal O_K)$ has an integral representative $\mathfrak b$ with $N\mathfrak b\le M_K<4$ by [F8] and step 4.1; the norm is a positive integer, so $N\mathfrak b\in\{1,2,3\}$, and step 2.2 rules out $2$ and $3$, leaving $N\mathfrak b=1$, i.e. $\mathfrak b=\mathcal O_K$; hence every class is principal and $\operatorname{Cl}(\mathcal O_K)$ is trivial. [F8, step 3.1, step 4.1, step 2.2]

6.1 Therefore $\mathcal O_K=\mathbb Z[\alpha]$, $d_K=2869=19\cdot151$, $M_K<4$, and $\operatorname{Cl}(\mathcal O_K)$ is trivial. [step 3.1, step 4.1, step 5.1] ∎

## Remarks

The example illustrates the standard norm-exclusion computation in degree
$5$: irreducibility modulo the small prime $3$ produces the field, the
resultant computation of the discriminant certifies the ring of integers
because $2869=19\cdot151$ is squarefree, and the small primes $2$ and $3$
are eliminated by checking that $f$ has no root modulo them. A root modulo
$p$ is exactly what a nonzero ideal of norm $p$ would produce.
