---
id: lem-mr-trapezoidal-mellin-kernel
kind: lemma
title: "Trapezoidal cutoffs and an absolutely convergent Mellin formula"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps:
  - thm-residue-theorem-null-homologous-cycle
  - thm-complex-exponential-is-entire-with-derivative-itself
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - thm-ftc-second-part
  - thm-logarithm-derivative-and-integral
  - thm-chain-rule
justified_by: []
aliases: []
sources:
  references:
    - title: "Matomäki and Radziwiłł, Multiplicative Functions in Short Intervals, §10, equation (29)"
      url: "https://arxiv.org/pdf/1501.04585v4"
---

## Statement

Let $0<a<b$ and $0<\xi<a$. Write $r_+=\max(r,0)$ and, for $u>0$, set
$$\eta(u)=\frac{(b+\xi-u)_+-(b-u)_+-(a-u)_++(a-\xi-u)_+}{\xi}.$$
This continuous cutoff is one on $[a,b]$, zero outside $[a-\xi,b+\xi]$, and linear on the two remaining segments. For $s=1+it$, define
$$K(s)=\frac{(b+\xi)^{s+1}-b^{s+1}-a^{s+1}+(a-\xi)^{s+1}}{\xi s(s+1)},\qquad z^s=\exp(s\log z)\quad(z>0).$$
Then
$$K(s)=\int_0^\infty\eta(u)u^{s-1}\,du,\qquad \eta(u)=\frac1{2\pi i}\int_{1-i\infty}^{1+i\infty}u^{-s}K(s)\,ds.$$
The contour integral is absolutely convergent for every $u>0$, including all cutoff corners. If $a=1$, $b=1+v$, $0<v\le1/8$ and $0<\xi=\delta v$ with $0<\delta\le1/4$, an absolute constant $C$ gives, for every real $t$,
$$|K(1+it)|\le C\min\left(v,\frac1{1+|t|},\frac1{\delta v(1+t^2)}\right),\qquad |K(1+it)-(1+\delta)v|\le C|t|v^2.$$
There is no arithmetic or moment hypothesis in this lemma.

## Statement references

[Matomäki–Radziwiłł, §10, equation (29), printed p. 31](https://arxiv.org/pdf/1501.04585v4)

## Facts & Assumptions

**Given:** The stated real parameters; powers of positive numbers use the real logarithm.

[F1] The residue theorem applies to finite rectangular contours around the poles of a meromorphic function: [[thm-residue-theorem-null-homologous-cycle]].

[F2] The exponential is entire with derivative itself, and $|\exp(z)|=\exp(\operatorname{Re}z)$: [[thm-complex-exponential-is-entire-with-derivative-itself]], [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]].

[F3] The fundamental theorem evaluates integrals of continuous derivatives; it applies componentwise to complex functions: [[thm-ftc-second-part]]. The logarithm has derivative $1/u$ and integral formula $\log u=\int_1^u dr/r$ ([[thm-logarithm-derivative-and-integral]]); use the real chain rule componentwise ([[thm-chain-rule]]).

## Proof

1.1 For $z>0$ put $J(z)=(2\pi i)^{-1}\int_{1-i\infty}^{1+i\infty}z^s/[s(s+1)]\,ds$. The integral converges absolutely since its integrand on this line is $O_z((1+t^2)^{-1})$. For $z>1$, shift the line to $\operatorname{Re}s=-M$, where $M>2$ is an integer. Horizontal integrals vanish as their heights tend to infinity, because their lengths are fixed before taking that limit and their integrands are $O_{M,z}(t^{-2})$. The residues crossed at $0,-1$ are $1,-z^{-1}$. The remaining vertical integral has absolute value at most $Cz^{-M}/(M-1)$: use $|s(s+1)|\ge (M-1)^2+t^2$. Letting $M\to\infty$ proves $J(z)=1-z^{-1}$. For $z\le1$, shift instead to $\operatorname{Re}s=M>1$, crossing no pole; the remaining absolute bound $Cz^M/(M-1)$ tends to zero, also when $z=1$. Thus $J(z)=(1-z^{-1})_+$ in all cases. [F1, F2, given, algebra]

2.1 For any $c>0$, multiplication of step 1.1 with $z=c/u$ by $c$ shows that $(c-u)_+=(2\pi i)^{-1}\int u^{-s}c^{s+1}/[s(s+1)]\,ds$. Apply this identity to the four positive numbers $b+\xi,b,a,a-\xi$ and take the indicated linear combination. Each integral is absolutely convergent, so the combination gives exactly the asserted inversion formula, even at the four corners. The piecewise description of $\eta$ follows directly by considering its four breakpoints. [step 1.1, given, algebra]

3.1 Integrating the two linear ramps and the constant plateau against $u^{s-1}$ gives the displayed expression for $K$. More explicitly, the product derivative $(\eta(u)u^s)'=\eta'(u)u^s+s\eta(u)u^{s-1}$ on each piece, with cancellation at the corners and zero values at the two support endpoints, yields $K(s)=-s^{-1}\int\eta'(u)u^s\,du$. On the left ramp $\eta'=1/\xi$, and on the right ramp $\eta'=-1/\xi$. Their primitives $u^{s+1}/(s+1)$ give the asserted expression. This also proves the Mellin-transform identity without an exchange of improper integrals. [F2, F3, step 2.1, algebra]

4.1 In the one-sided specialization the support lies in $[1-\delta v,1+(1+\delta)v]\subset[1/2,3/2]$, the area is $v+\xi=(1+\delta)v$, and $0\le\eta\le1$. Thus the transform formula gives $|K(1+it)|\le(1+\delta)v$. The formula $K(s)=-s^{-1}\int\eta'(u)u^s\,du$, with $\int|\eta'|=2$ and $|u^s|=u\le3/2$, gives $|K(1+it)|\le3/|1+it|$. The four-term expression gives $|K(1+it)|\le C/[\xi|s(s+1)|]\le C/[\delta v(1+t^2)]$. These three bounds prove the minimum bound. [F2, step 3.1, given, algebra]

5.1 By F2 and F3, $|e^{it\log u}-1|\le|t\log u|$; on the support $|\log u|\le C v$. Consequently $|K(1+it)-K(1)|\le\int\eta(u)|e^{it\log u}-1|\,du\le C|t|v^2$. Since $K(1)$ is the area $(1+\delta)v$, this is the last assertion. [F2, F3, step 4.1, algebra] ∎

## Remarks

The source uses a symmetric plateau $[1-v,1+v]$. The general formula includes that choice; the specialization here uses $[1,1+v]$ to retain the one-sided product interval of the intended consumer. The contour proof supplies inversion locally and spends no choice axiom.
