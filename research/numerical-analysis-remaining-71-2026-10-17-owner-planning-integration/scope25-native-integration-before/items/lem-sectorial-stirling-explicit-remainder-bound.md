---
id: lem-sectorial-stirling-explicit-remainder-bound
kind: lemma
title: Explicit sectorial remainder bound for the right-half-plane log-Gamma branch
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-binet-loggamma-right-halfplane-identity, def-loggamma-right-halfplane-branch]
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: DLMF, §5.11, Stirling's formula and Binet's integral
      url: https://dlmf.nist.gov/5.11
    - title: N. M. Temme, “Numerical aspects of special functions,” Acta Numerica 17 (2008), §§2–5
      url: https://ir.cwi.nl/pub/11612/11612C.pdf
dependency_level: 3
---

## Statement

Fix $0<\delta\le\pi/2$ and $z\in\mathbb C$ with $\operatorname{Re}z>0$.
For the branch $\ell_+$ from [[def-loggamma-right-halfplane-branch]],
[[lem-binet-loggamma-right-halfplane-identity]] gives
$$\ell_+(z)=\left(z-\frac12\right)\operatorname{Log}z-z+ \frac12\log(2\pi)+R(z), \qquad R(z)=\int_0^\infty\frac{\Phi(u)}{(u+z)^2}\,du,$$
where $\Phi(u)=\int_0^u(\lfloor v\rfloor-v+1/2)\,dv$. Then
$$|R(z)|\le \frac{1}{8\sin^2(\delta/2)|z|}.$$
For $\delta=\pi/2$, the bound is $1/(4|z|)$. The relative error after
exponentiating the three main terms is at most $\exp(|R(z)|)-1$.

## Facts & Assumptions

**Given:** $0<\delta\le\pi/2$ and $\operatorname{Re}z>0$.

[F1] [[lem-binet-loggamma-right-halfplane-identity]]: the exact branch
identity and its remainder representation hold, with
$\Phi(n+t)=t(1-t)/2$ on each unit interval.

## Proof
1.1 The formula in [F1] defines $\Phi(n+t)=t(1-t)/2$ for integer $n\ge0$ and $0\le t\le1$. Hence $0\le\Phi(u)\le1/8$ for every $u\ge0$. [F1, algebra]

1.2 Put $r=|z|$ and $\theta=\arg z$. Since $|\theta|<\pi/2\le\pi-\delta$, one has $\cos\theta\ge-\cos\delta$. Therefore $$|u+z|^2\ge u^2+r^2-2ur\cos\delta \ge\sin^2(\delta/2)(u+r)^2,$$ where the difference in the last inequality is $\cos^2(\delta/2)(u-r)^2\ge0$. Thus $|u+z|^{-2}\le\sin^{-2}(\delta/2)(u+r)^{-2}$. [given, algebra]

2.1 Applying steps 1.1 and 1.2 to the remainder in [F1] gives $$|R(z)|\le\frac{1}{8\sin^2(\delta/2)}\int_0^\infty\frac{du}{(u+r)^2} =\frac{1}{8\sin^2(\delta/2)r}.$$ For any complex $w$, $|e^w-1|\le e^{|w|}-1$ by the exponential series; apply this with $w=R(z)$. [F1, step 1.1, step 1.2, algebra] ∎