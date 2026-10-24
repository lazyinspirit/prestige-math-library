---
id: "cex-differentials-purely-inseparable-field-nonzero"
kind: "counterexample"
title: "A purely inseparable field has nonzero Omega"
status: published
origin: "pipeline"
pipeline_run: frontier-35-ten-categories
deps: ["cor-polynomial-ring-over-a-field-is-a-pid", "thm-polynomial-quotient-is-a-field-iff-irreducible", "thm-binomial-theorem-over-a-commutative-ring", "lem-prime-divides-intermediate-binomial-coefficients", "thm-polynomial-division-algorithm-over-a-field", "cor-jacobian-presentation-differentials", "thm-purely-inseparable-extension-characterizations"]
proof_strategy: "direct"
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-27
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  references:
    - title: "Stacks Algebra 10.131.9 and 10.158.1"
      url: "https://stacks.math.columbia.edu/download/algebra.pdf"
    - title: "Vakil 22.2.F, p.577"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
---

## Statement refuted

“If $L/k$ is a finite algebraic field extension, then $\Omega_{L/k}=0$.”

## Counterexample

Let $k$ be a field of characteristic $p>0$ and let $a\in k$ be an element that
is not a $p$-th power, $a\notin k^{p}=\{c^{p}:c\in k\}$. Set
$L=k[X]/(X^{p}-a)$ and let $\alpha$ be the class of $X$, so that
$\alpha^{p}=a$ and $L=k(\alpha)$. Then $X^{p}-a$ is irreducible over $k$, so
$L$ is a field, finite of degree $p$ over $k$, and purely inseparable over $k$;
nevertheless
$$\Omega_{L/k}=L\,\mathrm d\alpha\;\neq\;0,$$
with basis $\mathrm d\alpha$ over $L$. The vanishing derivative of $X^{p}-a$
is exactly what removes the relation in the Jacobian presentation of
$\Omega_{L/k}$.

## Facts & Assumptions

**Given:** A field $k$ of characteristic $p>0$, an element $a\in k\smallsetminus k^{p}$, the polynomial $f=X^{p}-a\in k[X]$, the quotient $L=k[X]/(f)$, and the class $\alpha$ of $X$ in $L$.

[F1] [[cor-polynomial-ring-over-a-field-is-a-pid]]: over a field $F$ the ring $F[x]$ is a principal ideal domain, so every element factors into irreducibles and every irreducible is prime.

[F2] [[thm-polynomial-quotient-is-a-field-iff-irreducible]]: for a nonconstant $q\in F[x]$, the quotient $F[x]/(q)$ is a field if and only if $q$ is irreducible.

[F3] [[thm-binomial-theorem-over-a-commutative-ring]]: in a commutative ring, $(u+v)^{p}=\sum_{i=0}^{p}\binom{p}{i}u^{p-i}v^{i}$.

[F4] [[lem-prime-divides-intermediate-binomial-coefficients]]: $p\mid\binom{p}{i}$ for $0<i<p$.

[F5] [[thm-polynomial-division-algorithm-over-a-field]]: for a field $F$, every $g\in F[x]$ and every nonzero divisor $d$ admit $g=qd+r$ with $r=0$ or $\deg r<\deg d$; in particular division by the monic polynomial $X-x$ evaluates: $g=q\,(X-x)+g(x)$.

[F6] [[cor-jacobian-presentation-differentials]]: for $P=A[x_1,\dots,x_n]$ and $B=P/(f_1,\dots,f_r)$ one has $\Omega_{B/A}\cong B^{n}/\sum_j B(\partial f_j/\partial x_1,\dots,\partial f_j/\partial x_n)$; in particular for $n=r=1$, $\Omega_{B/A}\cong B/(q')$ for $q$ the single relation.

[F7] [[thm-purely-inseparable-extension-characterizations]]: in characteristic $p>0$, an element of an algebraic extension is purely inseparable over the base exactly when some $p$-power of it lies in the base.

## Verification

1.1 The class $\alpha$ satisfies $\alpha^{p}=a$ by construction, and $L=k(\alpha)$, since $L$ is generated as a $k$-algebra by $\alpha$. If $f=X^{p}-a$ is irreducible, then $L$ is a field of degree $p$ over $k$ and $\alpha$ is a primitive element; the next steps establish the irreducibility. [given]

2.1 Assume for contradiction that $f$ is reducible. Since $k[X]$ is a principal ideal domain [F1], a reducible nonzero non-unit factors into irreducibles, so $f$ has a monic irreducible factor $m$ of degree $d$ with $1\le d\le p-1$. Let $A=k[X]/(m)$, a field by [F2], and let $x$ denote the class of $X$ in $A$; then $m(x)=0$, and $x^{p}=a$ because $m$ divides $f=X^{p}-a$ in $k[X]\subseteq A[X]$. [F1, F2, step 1.1]

3.1 In $A[X]$ the binomial theorem [F3] together with $p\mid\binom{p}{i}$ for $0<i<p$ [F4] gives the Frobenius identity $(X-x)^{p}=X^{p}-x^{p}=X^{p}-a$, the intermediate coefficients vanishing in $A$ of characteristic $p$; hence $m$, considered in $A[X]$, divides $(X-x)^{p}$. [F3, F4, step 2.1]

4.1 On the other hand $m(x)=0$, so the division algorithm in the field $A$ [F5] gives $m=q\,(X-x)+m(x)=q\,(X-x)$, that is, $X-x$ divides $m$. In the principal ideal domain $A[X]$ [F1], the degree-one polynomial $X-x$ is irreducible (a factorization would have to split the degree $1$ into two nonnegative degrees, forcing a degree-$0$ factor, which is a unit of $A[X]$), so the only monic factor of $(X-x)^{p}$ of degree $d$ is $(X-x)^{d}$; since $m$ is monic of degree $d$, we get $m=(X-x)^{d}$. [F1, F5, step 3.1]

5.1 Comparing the coefficient of $X^{d-1}$ in the identity $m=(X-x)^{d}$ of step 4.1 gives: the coefficient of $X^{d-1}$ in $(X-x)^{d}$ is $-d\,x$, and the coefficient of $X^{d-1}$ in $m\in k[X]$ lies in $k$, so $d\,x\in k$. Since $1\le d\le p-1$ and $k$ has characteristic $p$, the class of $d$ in $k$ is nonzero and invertible, so $x=d^{-1}(d\,x)\in k$; then $a=x^{p}\in k^{p}$, contradicting the hypothesis $a\notin k^{p}$. Hence $f=X^{p}-a$ is irreducible, $L$ is a field with $[L:k]=p$, and $L=k(\alpha)$. [step 2.1, step 4.1, given]

6.1 Now compute the differentials. Apply [F6] with $A=k$, $n=r=1$, $P=k[X]$, $q=f=X^{p}-a$ and $B=L$: the derivative is $f'=pX^{p-1}=0$, because $p=0$ in $k$, so the relation submodule $L\cdot f'(\alpha)$ is zero and $\Omega_{L/k}\cong L/(0)$ with the image of the basis vector written $\mathrm d\alpha$. Thus $\Omega_{L/k}\cong L\,\mathrm d\alpha\cong L$ as $L$-modules, in particular $\Omega_{L/k}\neq0$ because the field $L$ is nonzero. [F6, step 5.1]

6.2 The extension is finite, algebraic and purely inseparable: every element of $L=k(\alpha)$ is a polynomial $\sum_ic_i\alpha^{i}$ with $c_i\in k$ by step 5.1, and its $p$-th power is $\sum_ic_i^{p}a^{i}\in k$ because $\alpha^{p}=a$ and the Frobenius map is additive in characteristic $p$ [F3]. So every element of $L$ has its $p$-th power in $k$, and the elementwise criterion of [F7] makes $L/k$ purely inseparable; by step 5.1 it is finite of degree $p$. [F3, F7, step 5.1, given]

7.1 Combining steps 6.1 and 6.2: $\Omega_{L/k}$ is a free $L$-module of rank one and hence nonzero, while $L/k$ is a finite algebraic purely inseparable extension. This refutes the displayed statement and shows that the vanishing of $\Omega$ for finite separable extensions cannot be extended to all finite algebraic extensions; the obstruction is precisely the vanishing derivative $f'=0$ of the inseparable polynomial $X^{p}-a$. [step 6.1, step 6.2] ∎
