---
id: lem-ip-calderon-rough-alessandrini-and-quotient-norm
kind: lemma
title: Rough conductivity Alessandrini identity and constant-quotient norm
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-ip-calderon-weak-dn-map-for-bounded-conductivities
  - lem-ip-calderon-rough-dn-map-wellposedness
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Caro, García and Reyes, Stability of the Calderón problem for less regular conductivities"
      url: "https://arxiv.org/pdf/1205.2487"
      locator: "Section 1 weak DN map convention and Section 2, Lemma 2.1 proof; the conductivity identity follows directly from weak solutions without extra coefficient regularity."
dependency_level: 5
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Statement

Assume the Axiom of Choice and Countable Choice. Let $\Omega\subset(0,1)^d$, $d\ge2$, be a nonempty bounded connected smooth domain, and let $\gamma_1,\gamma_2$ be real measurable conductivities with $0<m\le\gamma_j\le M<\infty$ almost everywhere. Put $\mathcal D=H^1(\Omega;\mathbb C)/H_0^1(\Omega;\mathbb C)$ and $E=\mathcal D/\mathbb C\mathbf1$, both with their quotient norms. For $f_j\in\mathcal D$, let $u_j$ be the weak $\gamma_j$-conductivity solution with trace class $f_j$. Then
$$((\Lambda_{\gamma_1}-\Lambda_{\gamma_2})f_1)(f_2)=\int_\Omega(\gamma_1-\gamma_2)\nabla u_1\cdot\overline{\nabla u_2}\,dx.$$
The exact norm equality
$$\|\Lambda_{\gamma_1}-\Lambda_{\gamma_2}\|_{\mathcal L(\mathcal D,\mathcal D^*)}=\|\dot\Lambda_{\gamma_1}-\dot\Lambda_{\gamma_2}\|_{\mathcal L(E,E^*)}=:\delta$$
holds, and consequently the integral above has absolute value at most $\delta\|[f_1]\|_E\|[f_2]\|_E$, and at most $\delta\|u_1\|_{H^1(\Omega)}\|u_2\|_{H^1(\Omega)}$. Here $[f_j]$ denotes the coset modulo constants; the stars denote continuous conjugate-linear duals.

## Statement references

[[def-ip-calderon-weak-dn-map-for-bounded-conductivities|Weak DN maps and their quotient by constants.]]

[[lem-ip-calderon-rough-dn-map-wellposedness|Existence and uniqueness for bounded positive conductivities.]]

## Facts & Assumptions

**Given:** The Axiom of Choice and Countable Choice, the domain and conductivities in the statement, and trace classes $f_1,f_2\in\mathcal D$.

[F1] The energy form is $a_j(v,w)=\int_\Omega\gamma_j\nabla v\cdot\overline{\nabla w}\,dx$, and $(\Lambda_{\gamma_j}f)(g)=a_j(u_{j,f},V_g)$ for every representative $V_g$ of $g$. The quotient norm of $[f]\in E$ is $\inf_{c\in\mathbb C}\|f+c\mathbf1\|_{\mathcal D}$. ([[def-ip-calderon-weak-dn-map-for-bounded-conductivities]])

[F2] Each trace class has a unique weak conductivity solution, $a_j(u_{j,f},z)=0$ for every $z\in H_0^1$, and the bounded DN map kills constants and annihilates constant test classes. ([[lem-ip-calderon-rough-dn-map-wellposedness]])

[A1] The Axiom of Choice and Countable Choice are assumed at [F1]–[F2]. ([[def-axiom-of-choice]], [[def-countable-choice]])

## Proof

**Given:** The data in the statement.

1.1 Let $v$ be the weak $\gamma_2$ solution with trace class $f_1$, available by [F2]. The difference $u_1-v$ belongs to $H_0^1$. The real-valuedness of $\gamma_2$ makes $a_2$ Hermitian, so $a_2(u_1-v,u_2)=\overline{a_2(u_2,u_1-v)}=0$. By the representative independence in [F1], $((\Lambda_{\gamma_1}-\Lambda_{\gamma_2})f_1)(f_2)=a_1(u_1,u_2)-a_2(v,u_2)=a_1(u_1,u_2)-a_2(u_1,u_2)$. Subtraction of these two integrals is precisely the asserted conductivity identity. All integrals are absolutely convergent since the coefficients are bounded and the solution gradients are square integrable. [A1, F1, F2, given, algebra]

1.2 Set $T=\Lambda_{\gamma_1}-\Lambda_{\gamma_2}$ and $b(f,g)=(Tf)(g)$. By [F2], $b(f+c\mathbf1,g+c'\mathbf1)=b(f,g)$ for all constants $c,c'$. If $N=\|T\|_{\mathcal L(\mathcal D,\mathcal D^*)}$, then $|b(f,g)|\le N\|f+c\mathbf1\|_{\mathcal D}\|g+c'\mathbf1\|_{\mathcal D}$. Taking the two infima independently gives $|b(f,g)|\le N\|[f]\|_E\|[g]\|_E$, including zero quotient norms. Thus the descended form has norm at most $N$. Conversely, the quotient map has norm at most one, so a bound $|b(f,g)|\le N'\|[f]\|_E\|[g]\|_E$ implies $|b(f,g)|\le N'\|f\|_{\mathcal D}\|g\|_{\mathcal D}$. Taking suprema over the two unit balls gives $N\le N'$. The operator norm into a conjugate-linear dual is exactly this supremum of absolute form values by the definition of the dual norm. Hence the two operator norms are equal. [F1, F2, algebra]

2.1 The descended form in step 1.2 is exactly the difference of the two induced DN maps, so its norm is the stated $\delta$. Applying its form bound to step 1.1 proves the first integral bound. Since $u_j$ represents $f_j$, the two successive quotient infima give $\|[f_j]\|_E\le\|f_j\|_{\mathcal D}\le\|u_j\|_{H^1}$. Multiplying these inequalities proves the second bound, with no coefficient-dependent norm conversion factor. [F1, step 1.1, step 1.2, algebra] ∎
