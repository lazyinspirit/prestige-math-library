---
id: thm-tdmath-canonical-grand-duality
kind: theorem
title: Canonical–grand-canonical thermodynamic duality
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 6
deps:
  - def-tdmath-superstable-regular-interaction
  - thm-tdmath-decreasing-integrable-tail-free-cube-pressure
  - thm-tdmath-canonical-interior-density-limit
  - thm-tdmath-finite-dimensional-biconjugation
dependency_roles:
  def-tdmath-superstable-regular-interaction: mathematical-premise
  thm-tdmath-decreasing-integrable-tail-free-cube-pressure: mathematical-premise
  thm-tdmath-canonical-interior-density-limit: mathematical-premise
  thm-tdmath-finite-dimensional-biconjugation: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "H.-O. Georgii, Large deviations and the equivalence of ensembles for Gibbsian particle systems with superstable interaction"
      url: "https://www.mathematik.uni-muenchen.de/~georgii/papers/LDPsuperstable.pdf"
      locator: "Theorems 2 and 4, printed pp.175–178 / PDF pp.5–8, variational pressure and ensemble equivalence; the exact fixed-density extension is supplied by the local canonical proof."
    - title: "D. Dereudre, Introduction to the theory of Gibbs point processes"
      url: "https://arxiv.org/pdf/1701.08105"
      locator: "Section 2.6, PDF pp.24–26, finite-range Gibbs variational principle; the present tail class and endpoint conventions are proved locally."
---

## Statement

Let $F_\beta$ be the finite concave canonical rate on the interior attainable-density interval from [[thm-tdmath-canonical-interior-density-limit]]. Extend it by $F_\beta(0)=0$, by its interior upper-semicontinuous limit at any finite upper endpoint of its effective domain, and by $-\infty$ outside the closed effective domain; retain the value $-\infty$ if the endpoint limit is $-\infty$. For $\alpha\in\mathbb R$, define
$$P(\alpha,\beta)=\lim_{L\to\infty}L^{-d}\log\Xi_L(e^\alpha,\beta),$$
whose existence is [[thm-tdmath-decreasing-integrable-tail-free-cube-pressure]]. Then
$$P(\alpha,\beta)=\sup_{\rho\geq0}\bigl(F_\beta(\rho)+\alpha\rho\bigr),\qquad F_\beta(\rho)=\inf_{\alpha\in\mathbb R}\bigl(P(\alpha,\beta)-\alpha\rho\bigr)$$
for every $\rho$ in the closed effective domain of $F_\beta$. These are thermodynamic limits of positional partition functions. They do not assert local-observable equivalence, a finite-volume endpoint realization, or a thin energy-shell limit.

## Facts & Assumptions

**Given:** A stable regular pair potential, $\beta>0$, its free-cube canonical partition functions, and the exact entropy/rate conventions above.

[F1] [[thm-tdmath-canonical-interior-density-limit]]: for each interior attainable $\rho>0$ and every sequence $N_L/L^d\to\rho$, $L^{-d}\log Z(L,N_L;\beta)\to F_\beta(\rho)$; the proof supplies the slab-packing inequality and sparse low-density lower bound.

[F2] [[thm-tdmath-decreasing-integrable-tail-free-cube-pressure]]: stability bounds the grand tail exponentially and the free-cube grand-pressure limit exists for every positive activity.

[F3] [[thm-tdmath-finite-dimensional-biconjugation]]: a proper closed convex function on finite-dimensional Euclidean space equals its biconjugate under the stated extended-real conventions.

[A1] Stability supplies a finite $B\geq0$ with $U_N\geq-BN$ ([[def-tdmath-superstable-regular-interaction]]).

## Proof

**Given:** The hypotheses and suppliers in Facts & Assumptions.

1.1 Fix an interior attainable density $\rho>0$ and a sequence $N_L/L^d\to\rho$. The grand sum contains the nonnegative term $e^{\alpha N_L}Z(L,N_L;\beta)$, so $\liminf_{L\to\infty}L^{-d}\log\Xi_L(e^\alpha,\beta)\geq F_\beta(\rho)+\alpha\rho$ by [F1]. Taking the supremum over interior densities gives the lower bound. The vacuum term $Z(L,0)=1$ gives the value $0$ at density zero. Endpoint values are limits from the interior by their definition, so they do not enlarge the supremum. [F1, F2, algebra]

1.2 Put $q=e^{\alpha+\beta B}$. For each $N\geq0$, stability and the box-volume formula give $e^{\alpha N}Z(L,N;\beta)\leq(qL^d)^N/N!$. Choose $K>eq+1$. For $N>KL^d$, $1\leq e^{N-KL^d}$, so the factorial bound gives $\sum_{N>KL^d}e^{\alpha N}Z(L,N;\beta) \leq e^{-KL^d}\sum_{N\geq0}\frac{(eqL^d)^N}{N!} \leq e^{-L^d}.$ The remaining at most $KL^d+2$ terms are bounded by their maximum times this number; its logarithm divided by $L^d$ tends to zero. [A1, F2, algebra]

2.1 Choose maximizing retained particle numbers and a subsequence with $N_L/L^d\to\rho\in[0,K]$; nested-interval bisection on the compact interval $[0,K]$ supplies the subsequence. The canonical upper rate is at most $b(\rho)\leq F_\beta(\rho)$, since the one-term mixture in the definition of $F_\beta$ includes $b(\rho)$. At $\rho=0$, stability gives upper rate at most $0=F_\beta(0)$. If $u$ is a finite upper endpoint and $b(u)>-\infty$, mix a preparation approaching $b(u)$ with an interior preparation of density $r<u$, in slab fractions $1-\epsilon$ and $\epsilon$. The exact packing inequality in [F1] gives $F_\beta((1-\epsilon)u+\epsilon r)\geq(1-\epsilon)b(u)+\epsilon b(r).$ As $\epsilon\downarrow0$, the left side tends to the assigned interior endpoint limit; hence $b(u)\leq F_\beta(u)$. If $b(u)=-\infty$ this bound is automatic. Outside the closed effective domain, $b(\rho)=-\infty$, again because a finite $b(\rho)$ would make $F_\beta(\rho)\geq b(\rho)$. Thus the maximum retained term has limiting rate at most $\sup_{\rho\geq0}(F_\beta(\rho)+\alpha\rho)$. The tail estimate in step 1.2 and the lower bound in step 1.1 prove the first equality. [F1, F2, step 1.1, step 1.2, algebra]

3.1 The extension $F_\beta$ is proper, upper-semicontinuous and concave. It is finite and concave on its open effective interior by [F1], hence continuous there. At zero, stability and the concavity of $g(\rho)=\rho(1+\beta B-\log\rho)$ give $F_\beta(\rho)\leq g(\rho)\to0$. The sparse separated-cell lower bound in [F1] gives $F_\beta(\rho)\geq c\rho$ for a fixed finite $c$, so $F_\beta(\rho)\to0=F_\beta(0)$. At any finite upper endpoint use the assigned interior upper-semicontinuous limit; outside the closed effective domain set $F_\beta=-\infty$. Hence $G=-F_\beta$, with $G=+\infty$ on negative densities, is a proper closed convex extended-real function on $\mathbb R$. Its conjugate is $G^*(\alpha)=\sup_{\rho\geq0}\{\alpha\rho+F_\beta(\rho)\}=P(\alpha,\beta)$ by steps 1.1–2.1. Applying [F3] gives $G(\rho)=\sup_\alpha\{\alpha\rho-P(\alpha,\beta)\}$, which is the second equality. The endpoint convention is needed for closedness; it asserts no finite-volume endpoint realization. [F1, F2, F3, step 2.1, algebra] ∎
