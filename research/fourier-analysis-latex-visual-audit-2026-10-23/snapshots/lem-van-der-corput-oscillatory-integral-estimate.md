---
id: lem-van-der-corput-oscillatory-integral-estimate
kind: lemma
title: Van der Corput oscillatory integral estimates in one dimension
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
- thm-algebra-of-derivatives
- thm-chain-rule-for-total-derivatives
- def-ck-and-multi-index-notation-in-several-variables
- def-nonnegative-lebesgue-integral
- thm-monotone-convergence-for-the-integral
- cor-newton-leibniz-with-finitely-many-exceptional-points
- thm-riemann-stieltjes-integration-by-parts
- cor-riemann-stieltjes-existence-bv-continuous
- cor-riemann-stieltjes-integral-bound
- thm-riemann-stieltjes-c1-integrator-reduction
- cor-riemann-stieltjes-agrees-with-riemann
- def-bounded-variation-and-total-variation
- thm-riemann-stieltjes-linearity-and-additivity
proof_strategy: direct
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    delegated_by: "owner via frontier-38-owner-30 build dispatch"
    scope: "Historical completed Step 5 full authored item reading and mathematical acceptance; exact historical raw bytes differ from current only by publication status and verification metadata. Direct prerequisite interfaces checked; no recursive audit of supplier proofs."
    evidence:
      - "research/frontier-38-owner-30-reader-6.md"
      - "research/frontier-38-owner-30-alpha-batch-6-5a.md"
      - "research/frontier-38-owner-30-step5-hash-6-post-5a.json"
    content_sha256: "1393cfc0f237eb4d68edfe959c0af33a55446f5aabf2317e930c909462876158"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Terence Tao, Lecture Notes 8 for Math 247B
    url: https://www.math.ucla.edu/~tao/247b.1.07w/notes8.pdf
    locator: Lemmas 2.4–2.5 and their complete interval proofs, printed p.5; amplitude transfer by bounded primitives is supplied locally.
---

## Statement

Let $k\ge1$. (a) (First-derivative version) If $\varphi\in C^1(\mathbb R)$ is real with $|\varphi'|\ge\lambda_1>0$ and $\varphi'$ monotone on a bounded interval $J$, then $\left|\int_J e^{2\pi i\lambda\varphi(x)}\,dx\right|\le2(\pi\lambda\lambda_1)^{-1}$ for every $\lambda>0$, uniformly in the length of $J$; if moreover $a\in C_c^1(\mathbb R)$ is complex-valued and $|\varphi'|\ge\lambda_1$ with $\varphi'$ monotone on $\operatorname{supp}a$, then $\left|\int e^{2\pi i\lambda\varphi(x)}a(x)\,dx\right|\le(\pi\lambda\lambda_1)^{-1}\|a'\|_{L^1}$ for every $\lambda>0$. (b) (Higher-derivative version) If $a\in C_c^1(\mathbb R)$ is complex-valued and $\varphi\in C^k(\mathbb R)$ is real with $|\varphi^{(k)}|\ge1$ on $\operatorname{supp}a$ for some $k\ge2$, then $\left|\int e^{2\pi i\lambda\varphi(x)}a(x)\,dx\right|\le C\lambda^{-1/k}$ for $\lambda\ge1$, where $C$ depends only on $k$, on $a$ and on finitely many derivative bounds for $\varphi$ near $\operatorname{supp}a$; for the quadratic phase $\varphi(x)=\pm x^2/2$ this gives the Fresnel bound $\left|\int e^{\pm\pi i\lambda x^2}a(x)\,dx\right|\le C_0(\|a\|_\infty+\|a'\|_{L^1})\lambda^{-1/2}$ with an absolute constant $C_0$.

## Facts & Assumptions

**Given:** $k\ge1$, a real phase $\varphi\in C^k$, and, where an amplitude occurs, a complex $a\in C_c^1(\mathbb R)$.

[F1] Riemann–Stieltjes integration by parts and the $C^1$-integrator reduction: if $f$ has bounded variation and $\alpha$ is continuous, $\int f\,d\alpha$ exists; when $\alpha=F$ is $C^1$ its derivative is continuous and $\int_u^v f\,dF=\int_u^vfF'$; and $\int_u^vf\,dF+\int_u^vF\,df=f(v)F(v)-f(u)F(u)$. Integrals of step functions against $\mathrm{id}$ agree with ordinary integrals, and the Stieltjes integral is linear in the integrand. ([[thm-riemann-stieltjes-integration-by-parts]], [[cor-riemann-stieltjes-existence-bv-continuous]], [[cor-riemann-stieltjes-integral-bound]], [[thm-riemann-stieltjes-c1-integrator-reduction]], [[cor-riemann-stieltjes-agrees-with-riemann]], [[thm-riemann-stieltjes-linearity-and-additivity]])

[F2] A continuous monotone real function has variation equal to the absolute difference of its endpoint values. If it has constant sign and modulus at most $M$, that variation is at most $M$. For a complex $C^1$ function $a$, the fundamental theorem gives $|a(v)-a(u)|\le\int_u^v|a'|$ and hence $\operatorname{Var}(a)\le\int|a'|$. Stieltjes identities apply componentwise. ([[def-bounded-variation-and-total-variation]], [[cor-riemann-stieltjes-integral-bound]], [[cor-newton-leibniz-with-finitely-many-exceptional-points]])

[F3] Smooth calculus: products, quotients with nonvanishing denominators, compositions and higher derivatives are computed by the algebra and chain rules; $\varphi'$ monotone and nonzero makes $1/\varphi'$ monotone and nonzero, and $\varphi\in C^k$ gives continuity of $\varphi^{(k)}$ on compacta. ([[thm-algebra-of-derivatives]], [[thm-chain-rule-for-total-derivatives]], [[def-ck-and-multi-index-notation-in-several-variables]])

## Proof

**Proof technique:** direct; prove uniform pure-phase estimates on intervals, then transfer them to amplitudes by integration against a bounded primitive on each component of the nonzero set.

1.1 First derivative on an interval. Write $F=e^{2\pi i\lambda\varphi}$ and $g=1/\varphi'$ on $[u,v]\subset J$. The continuous derivative has constant sign; $g$ is monotone of that sign and $|g|\le\lambda_1^{-1}$. Stieltjes integration by parts gives $\int_u^vF=(2\pi i\lambda)^{-1}(g(v)F(v)-g(u)F(u)-\int_u^vF\,dg)$. Its modulus is at most $(2\pi\lambda)^{-1}(|g(v)|+|g(u)|+|g(v)-g(u)|)\le(\pi\lambda\lambda_1)^{-1}$. This stronger bound implies the displayed pure-phase estimate in (a), and also bounds the primitive on every subinterval. Endpoint inclusion does not change the integral. [F1, F2, F3, given, algebra]

2.1 First-derivative amplitude bound. On each component $(u,v)$ of $\{a\ne0\}$, $a$ vanishes at the endpoints and the hypotheses on $\operatorname{supp}a$ give the estimate of step 1.1 on every subinterval. Thus $P(x)=\int_u^xF$ has modulus at most $(\pi\lambda\lambda_1)^{-1}$, and ordinary integration by parts gives $\int_u^vFa=-\int_u^vPa'$. Summing gives $|\int Fa|\le(\pi\lambda\lambda_1)^{-1}\|a'\|_1$. The components are canonically at most countable by assigning to each its first rational in a fixed enumeration; the sum is justified by $\int|a|<\infty$ and the sum of $\int_u^v|a'|$ being at most $\|a'\|_1$. No reciprocal of $\varphi'$ is used in gaps outside the support. [F1, F2, F3, step 1.1]

2.2 Higher-derivative interval estimate. Suppose $|\varphi^{(k)}|\ge\gamma>0$ throughout a bounded interval $J$, $k\ge2$. We prove that every subinterval has pure-phase integral bounded by $C_k(\lambda\gamma)^{-1/k}$, independently of its length. The derivative $\varphi^{(k)}$ has constant sign, so $\varphi^{(k-1)}$ is monotone. For $\tau>0$, the set $|\varphi^{(k-1)}|\le\tau$ is an interval of length at most $2\tau/\gamma$, by the fundamental theorem. Its complement has at most two intervals on which $|\varphi^{(k-1)}|\ge\tau$. For $k=2$, step 1.1 applies there because $\varphi'$ is monotone. For $k>2$, use induction with lower bound $\tau$. The resulting bound is $2\tau/\gamma+2C_{k-1}(\lambda\tau)^{-1/(k-1)}$. Set $\tau=\gamma^{(k-1)/k}\lambda^{-1/k}$ to obtain the asserted bound. The same reasoning on any subinterval proves the primitive bound required below. [F1, F3, step 1.1, algebra]

3.1 Higher-derivative amplitude bound. On every component $(u,v)$ of $\{a\ne0\}$, the hypothesis $|\varphi^{(k)}|\ge1$ holds throughout that interval. Step 2.2 with $\gamma=1$ gives a primitive $P(x)=\int_u^xF$ bounded by $C_k\lambda^{-1/k}$. Since $a(u)=a(v)=0$, integration by parts yields $|\int_u^vFa|\le C_k\lambda^{-1/k}\int_u^v|a'|$. Sum over the canonically countable components as in step 2.1 to obtain $|\int Fa|\le C_k\lambda^{-1/k}\|a'\|_1$. This stronger estimate implies (b) with the stated constant dependence, even for disconnected support; no lower derivative bound in its gaps is assumed. [F1, F2, F3, step 2.1, step 2.2]

4.1 Quadratic phase. For $\varphi=\pm x^2/2$, the second derivative has modulus one on every interval. Apply step 2.2 directly on one interval containing $\operatorname{supp}a$ and integrate against its bounded primitive. This gives $|\int e^{\pm\pi i\lambda x^2}a|\le C_0\lambda^{-1/2}\|a'\|_1$, which implies the stated Fresnel estimate with $\|a\|_\infty+\|a'\|_1$. No scale-dependent cutoff derivative enters. [F1, F2, step 2.2] ∎
