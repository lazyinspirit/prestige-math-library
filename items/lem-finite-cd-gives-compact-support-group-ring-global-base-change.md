---
id: lem-finite-cd-gives-compact-support-group-ring-global-base-change
kind: lemma
title: Finite cohomological dimension gives compact-support group-ring global base change
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 11
deps:
  - def-axiom-of-choice
  - lem-etale-module-sheaves-have-exact-conservative-stalks-and-enough-injectives
  - lem-finite-cohomological-dimension-gives-coefficient-projection-and-perfectness
  - lem-finite-galois-cover-compact-support-sheaf-projection-formula
justified_by: []
proof_strategy: direct
axiom_use: AC is assumed for étale injective models and successive finite free resolutions.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Burns, Daoud and Liang, On Non-Noetherian Iwasawa Theory, section 3.2.2
      url: https://arxiv.org/pdf/2401.02946
---

## Statement

Assume AC. Let $j:U\hookrightarrow X$ be an open immersion of Noetherian schemes, $f:V\to U$ a finite étale torsor under a finite abelian group $\Gamma$, and $H\leq\Gamma$. For a prime $p$ and $r\geq1$ set $\Lambda=\mathbb Z/p^r$, $A=\Lambda[\Gamma]$, $B=\Lambda[\Gamma/H]$, $F=j_!f_*\Lambda$, and $F'=j_!f'_*\Lambda$ for $f':V/H\to U$.

Assume there is $D\geq0$ such that $H^q(X_{\mathrm{et}},G)=0$ for every étale sheaf $G$ of $\Lambda$-modules and every $q>D$. Then the canonical derived comparison
$$B\otimes_A^L R\Gamma(X_{\mathrm{et}},F)\longrightarrow R\Gamma(X_{\mathrm{et}},F')$$
is an isomorphism. It is compatible with successive group quotients and with coefficient reduction when the corresponding finite-level dimension bounds are supplied. No splitting-cover or subgroup-order invertibility hypothesis is needed. This statement assumes the cohomological-dimension bound; it does not establish that bound for a BDL curve or prove passage to $\mathbb Z_p$ coefficients, finite perfectness, or Weil–étale duality.

## Facts & Assumptions

**Given:** AC, the schemes, torsor, subgroup, finite coefficient ring and the explicit finite cohomological-dimension bound in the Statement.

[F1] Étale module sheaves over finite commutative rings have enough injectives under AC. [[lem-etale-module-sheaves-have-exact-conservative-stalks-and-enough-injectives]]

[F2] Under a finite cohomological-dimension bound, the coefficient projection argument uses finite free truncations and a degree-by-degree cone bound. The cited result states this for $\Lambda$-coefficients; the group-ring variant is proved below. [[lem-finite-cohomological-dimension-gives-coefficient-projection-and-perfectness]]

[F3] $F$ is $A$-flat and the canonical quotient map induces $B\otimes_A^L F\cong F'$, compatibly with coefficient reductions. [[lem-finite-galois-cover-compact-support-sheaf-projection-formula]]

[A1] AC supplies the injective models and successive choices of finite free resolutions. [[def-axiom-of-choice]]

## Proof

1.1 Forgetting $A$-module structure preserves injectives: its left adjoint $A\otimes_\Lambda-$ is exact because $A$ is finite free over $\Lambda$. Hence the given $\Lambda$-sheaf bound also bounds $H^q(X,G)$ for every $A$-module sheaf $G$. By finite truncation and the long exact sequences of hypercohomology, a bounded complex of such sheaves with cohomology in $[u,v]$ has derived global sections in $[u,v+D]$. In particular $C=R\Gamma(X,F)$ is concentrated in $[0,D]$. The canonical projection map is an isomorphism when the coefficient module is finite free over $A$ and, by finite sums and triangles, when it is a bounded finite-free complex. [F1, F2, A1, given, construct, algebra]

2.1 The finite ring $A$ is Noetherian and $B$ is a finite $A$-module. Choose a free resolution $Q^\bullet\to B$ in degrees at most zero with each term finite free: each successive kernel is a finite set and hence finitely generated. For $N\geq1$, let $Q_N$ be its finite brutal truncation in degrees $[-N,0]$, and let $Z_N=\ker(Q^{-N}\to Q^{-N+1})$. The cone of $Q_N\to B$ is $Z_N[N+1]$. By [F3], tensoring with $F$ is exact, so $F\otimes_A^L Z_N$ is a sheaf in degree zero. Step 1.1 therefore bounds $R\Gamma(X,F\otimes_A^L Z_N[N+1])$ above by $D-N-1$. On the module side, $C\otimes_A^L Z_N[N+1]$ has the same upper bound because $C$ lies in $[0,D]$ and a projective resolution of $Z_N$ may be taken in nonpositive degrees. [F2, F3, A1, step 1.1, given, choose, algebra]

3.1 In the natural comparison diagram for $Q_N\to B$, both approximation cones have cohomology zero above $D-N-1$ by step 2.1. The comparison for $Q_N$ is an isomorphism by step 1.1. For any fixed cohomological degree, choose $N$ sufficiently large; the two approximation maps are then isomorphisms in that degree, and the comparison for $B$ is an isomorphism there. This proves $B\otimes_A^LC\cong R\Gamma(X,B\otimes_A^LF)$. The orbit-sum isomorphism of [F3] identifies the target with $R\Gamma(X,F')$. Naturality of the finite-free comparisons and of the orbit sums gives compatibility for successive quotients and, when the corresponding dimension bounds are available, coefficient reductions. No claim about adic inverse limits or geometric finiteness follows from this argument. [F2, F3, step 1.1, step 2.1, given, choose, algebra] ∎
