---
id: lem-two-variable-reciprocal-phase-completion-from-rank-three-bound
kind: lemma
title: "Two-variable reciprocal-phase completion from a rank-three bound"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps: []
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
---

## Statement

For a positive integer $k$ put $e_k(t)=e^{2\pi i t/k}$. Let $m$ be a squarefree positive integer, let $A,B,L,\gamma_1,\gamma_2$ be residue classes modulo $m$, and let $U,V>0$. Let $w_U(r)=\psi((r-r_0)/U)$ and $v_V(s)=\phi((s-s_0)/V)$, where $\psi,\phi$ are smooth compactly supported functions. Interpret the reciprocal phase as zero when either denominator is not invertible. Assume explicitly that for every prime $p\mid m$ and nonzero $t\in\mathbb F_p$,
$$\left|\sum_{xyz=t\atop x,y,z\in\mathbb F_p^\times}e_p(x+y+z)\right|\le 3p.$$
Then for every $\varepsilon>0$,
$$\left|\sum_{r,s\in\mathbb Z}w_U(r)v_V(s)e_m\!\left(\frac{A}{(s+Br+\gamma_1)(s+(B+L)r+\gamma_2)}\right)\right|
\ll_{\varepsilon,\psi,\phi}m^\varepsilon(A L,m)\left(\frac{U}{\sqrt m}+\sqrt m\right)\left(\frac{V}{\sqrt m}+\sqrt m\right).$$
The implied constant depends on fixed derivative bounds of the two cutoffs. The statement includes scales below one. The explicit rank-three finite-field hypothesis is not established by this lemma.

## Facts & Assumptions

**Given:** The displayed squarefree modulus, residue parameters, cutoffs and explicit rank-three finite-field bound.

## Proof

**Proof technique:** complete both variables, compute the local transforms and factor by the Chinese remainder theorem.

1.1 Fix a prime $p\mid m$ with $p\nmid AL$. The linear change $u=s+Br+\gamma_1$, $v=s+(B+L)r+\gamma_2$ is invertible over $\mathbb F_p$. Any additive Fourier twist in $(r,s)$ becomes $au+bv$ plus a constant. Hence the complete local transform is, up to a unit-modulus factor, [given, algebra]
$$S_p(A;a,b)=\sum_{u,v\in\mathbb F_p^\times}e_p\left(A/(uv)+au+bv\right).$$
If $a,b$ are nonzero, the change $x=A/(uv)$, $y=au$, $z=bv$ gives $xyz=Aab$, so the explicit hypothesis bounds $|S_p|$ by $3p$. If $a=0$, summing over $u$ gives $-1$ for each $v$, so $|S_p|\le p-1$; the same holds if $b=0$. [given, algebra]

2.1 For $p\mid AL$, the trivial estimate gives $|S_p|\le p^2$, including every singular or zero-denominator case. Factoring the squarefree modulus by CRT, with the usual unit multipliers in the local additive characters, shows that every two-dimensional complete Fourier transform has modulus at most [step 1.1, algebra]
$$3^{\omega(m)}m(AL,m)\ll_\varepsilon m^{1+\varepsilon}(AL,m).$$
The last bound follows by separating the finitely many primes below $3^{1/\varepsilon}$ from the others. For $m=1$ the same bound is immediate. [step 1.1, algebra]

3.1 Put $W(h)=m^{-1}\sum_{r\in\mathbb Z}w_U(r)e_m(-hr)$ and define $V(k)$ similarly. Discrete Fourier inversion gives the original weighted sum as the sum of $W(h)V(k)$ times the complete transforms of step 2.1. Poisson summation and rapid Fourier decay give, uniformly in the shifts and for every $U,V>0$, [step 2.1, algebra]
$$\sum_{h\bmod m}|W(h)|\ll_\psi 1+U/m,\qquad\sum_{k\bmod m}|V(k)|\ll_\phi 1+V/m.$$
Indeed Poisson bounds the first sum by $(U/m)\sum_{j\in\mathbb Z}|\widehat\psi(Uj/m)|$; rapid decay makes this $O(1+U/m)$, including $U<1$. Derivative bounds of polylogarithmic size add only the corresponding fixed polylogarithmic factor. [step 2.1, algebra]

4.1 Combine steps 2.1 and 3.1. Since $m(1+U/m)(1+V/m)=(U/\sqrt m+\sqrt m)(V/\sqrt m+\sqrt m)$, this is exactly the displayed estimate. [step 2.1, step 3.1, algebra] ∎
