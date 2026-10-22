---
id: lem-csm-frontier-fk-influence-threshold
kind: lemma
title: "A maximum conditional edge influence bound for finite FK measures"
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 3
deps:
  - def-csm-frontier-fk-real-boundaries
  - lem-csm-frontier-fk-fkg-spatial-markov
dependency_roles:
  def-csm-frontier-fk-real-boundaries: mathematical-premise
  lem-csm-frontier-fk-fkg-spatial-markov: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
physical_scope: null
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Benjamin Graham and Geoffrey Grimmett, Influence and sharp-threshold theorems for monotonic measures"
      url: https://arxiv.org/pdf/math/0505057
      locator: "Theorem 2.10 and proof; Sections 3–5, monotone-measure and random-cluster specialization."
    - title: "Geoffrey Grimmett, Svante Janson, and James Norris, Influence in Product Spaces"
      url: https://arxiv.org/pdf/1207.1780
      locator: "Theorem 1.1 and Theorems 2.2–2.4, Lebesgue-cube and general product-space influence interfaces."
verification:
  precheck: pending
---

## Statement

Let $G=(V,E,\partial)$ be a finite undirected multigraph, let $B\subseteq V$ have boundary partition $\xi$, fix $q\geq1$, $\varepsilon\in(0,1/2)$, and $p\in[\varepsilon,1-\varepsilon]$, and let $\phi=\phi_{G,p,q}^{\xi}$ be the finite FK law. For every increasing event $A\subseteq2^E$ with $0<\phi(A)<1$ and $|E|\geq2$, define the conditional influence of edge $e$ by

$$I_A(e):=\phi(A\mid \omega_e=1)-\phi(A\mid\omega_e=0).$$

There is a constant $c(q,\varepsilon)>0$ such that

$$\max_{e\in E}I_A(e)\geq c(q,\varepsilon)\,\phi(A)(1-\phi(A))\frac{\log|E|}{|E|}.$$

## Statement references

[[def-csm-frontier-fk-real-boundaries]]

[[lem-csm-frontier-fk-fkg-spatial-markov]]

## Facts & Assumptions

**Given:** A finite FK law with $q\geq1$, $\varepsilon\in(0,1/2)$, $p\in[\varepsilon,1-\varepsilon]$, an increasing event $A$ with $0<\phi(A)<1$, and $|E|\geq2$.

[F1] The finite FK law is positive and log-supermodular, and its conditional laws inherit the FKG association inequality ([[lem-csm-frontier-fk-fkg-spatial-markov]]).

[F2] The mass, boundary partition, and finite configuration space are those of [[def-csm-frontier-fk-real-boundaries]].

[A1] **Unresolved mathematical input for this conditional draft.** For each integer $n\geq2$ there is a constant $c_0>0$ such that if $C\subseteq[0,1]^n$ is an increasing measurable set with Lebesgue measure $0<\lambda(C)<1$, then for some coordinate $i$,

$$\lambda^{n-1}\{x_{-i}:\mathbf1_C(x_{-i},1)-\mathbf1_C(x_{-i},0)=1\}\geq c_0\lambda(C)(1-\lambda(C))\frac{\log n}{n}.$$

This is the continuous-cube BKKKL input stated in the cited product-space literature. The local proof of [A1] has not been supplied; its source-fetch route and escalation are recorded in `research/physics-non-fluid-129-2026-10-21-r2-batch-97.coverage.json`.

## Proof

1.1 Order the edges as $e_1,\ldots,e_n$. For every prefix configuration $\eta$ define $a_j(\eta):=\phi(\omega_{e_j}=1\mid\omega_{e_i}=\eta_i,\ i<j)$. Positivity makes each conditional probability lie in $(0,1)$. To compare prefixes $\eta\leq\eta'$, change their coordinates from $0$ to $1$ one at a time. For one such change, condition on the other fixed prefix coordinates and let $\mu_0,\mu_1$ be the two conditional laws on the remaining edges. Both are positive and log-supermodular by [F1]. Their likelihood ratio $R(z)=\mu_1(z)/\mu_0(z)$ is increasing in $z$: for $z\leq z'$, the log-supermodular inequality applied to $(z',1)$ and $(z,0)$ gives $\mu_1(z')\mu_0(z)\geq\mu_1(z)\mu_0(z')$. Since $\mu_0$ is FKG-associated by [F1], every increasing $h$ satisfies $\mathbb E_{\mu_1}h=\mathbb E_{\mu_0}(hR)/\mathbb E_{\mu_0}R\geq\mathbb E_{\mu_0}h$. Apply this with $h=\mathbf1_{\{\omega_{e_j}=1\}}$ at each prefix change to see that $a_j$ is increasing. With independent uniform coordinates $U_1,\ldots,U_n$, recursively set $\omega_{e_j}=\mathbf1_{\{U_j>1-a_j(\omega_{e_1},\ldots,\omega_{e_{j-1}})\}}$. The chain rule for conditional probabilities gives law $\phi$, while monotonicity of the $a_j$ makes the map $U\mapsto\omega$ coordinatewise increasing. Hence $C:=\{U:\omega(U)\in A\}$ is increasing and $\lambda(C)=\phi(A)$. [F1, F2, construct]

2.1 Fix $e\in E$ and repeat the construction with $e$ first; call its preimage of $A$ the increasing set $C_e$. Fix all uniforms except $U_e$. In the original ordering, $U_e=1$ forces $e$ open because every threshold is below $1$; in the reordered construction it is open first. For any fixed previously generated prefix, the conditional FK law on the remaining edges is FKG; positive association gives $\mathbb E[h\mid e=1]\geq\mathbb E[h]$ for every increasing $h$, since $\operatorname{Cov}(h,\mathbf1_{\{e=1\}})\geq0$, and conditioning on $e=0$ gives the reverse stochastic order. Thus, while the prefix edges before $e$ in the original order are sampled without conditioning on $e$, the reordered construction samples them conditional on $e=1$ and the same uniforms make each reordered prefix edge at least its original value. The later edges preserve that order by induction using the increasing thresholds from step 1.1. With $U_e=0$, both constructions force $e$ closed and the conditional-prefix inequalities reverse, so the reordered output is coordinatewise no larger. As $A$ is increasing, these pointwise comparisons give $\lambda(C\mid U_e=1)\leq\lambda(C_e\mid U_e=1)$ and $\lambda(C\mid U_e=0)\geq\lambda(C_e\mid U_e=0)$. In the reordered construction, conditioning $U_e$ to $1$ or $0$ samples exactly the FK law conditional on $e$ being open or closed, so its endpoint fiber difference is $I_A(e)$. Subtracting the two inequalities proves that the fiber influence of $C$ in coordinate $e$ is at most $I_A(e)$. [F1, step 1.1, algebra]

3.1 Apply [A1] to the increasing set $C$ from step 1.1. For some edge coordinate $e$, its fiber influence is at least $c_0\phi(A)(1-\phi(A))\log n/n$. Step 2.1 bounds this fiber influence above by $I_A(e)$, giving the claimed inequality with $c(q,\varepsilon)=c_0$. This is a conditional deduction from [A1]; it does not establish [A1]. [A1, step 1.1, step 2.1] ∎

## Remarks

The carrier retains the full planned claim and the complete FK transfer argument. Readiness remains escalated until [A1] is proved locally on this A page or an exact current mathematical supplier with a complete inspected proof is adopted by the owner.
