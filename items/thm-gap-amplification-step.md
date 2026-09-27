---
id: thm-gap-amplification-step
kind: theorem
title: "A complete uniform graph gap-amplification step"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [thm-degree-reduction-preserves-unsatisfaction, lem-constraint-expander-overlay, lem-powering-preserves-perfect-satisfiability, lem-powering-amplifies-small-gaps, def-gap-preserving-csp-reduction, def-constraint-graph-powering, def-degree-reduction-by-expander-clouds]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Irit Dinur, The PCP theorem by gap amplification, §1.3 Lemmas 1.6-1.7 and §1.2, printed pp. 5-7."
      url: "https://www.cs.umd.edu/users/gasarch/TOPICS/pcp/dinur.pdf"
    - title: "Arora and Barak, Computational Complexity: A Modern Approach, §18.5.1 Lemma 18.29 (graph gap amplification), printed pp. 371-373."
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Statement

Fix a finite alphabet $\Sigma$ with $\lvert\Sigma\rvert\ge2$ and put $D:=387$, $K:=20/7$, and let $\beta_0,t_0$ be the constants of [[lem-powering-amplifies-small-gaps]] for $d=D$, this $\Sigma$ and $\alpha_0:=\rho_2<1$, the spectral bound of [[lem-constraint-expander-overlay]]. For every integer $t\ge t_0$ there is a complete uniform gap-preserving reduction $R_t$ in the sense of [[def-gap-preserving-csp-reduction]], defined on binary constraint graphs over $\Sigma$ of arbitrary degree, with

- $R_t(G):=(R_{\deg}(G))_t$, where $R_{\deg}$ is the degree-reduction map of [[def-degree-reduction-by-expander-clouds]] and $(\cdot)_t$ is the local-view powering of [[def-constraint-graph-powering]];
- output alphabet $\Sigma_t=\Sigma^{\mathcal P_R}$ of size $\lvert\Sigma_t\rvert\le\lvert\Sigma\rvert^{D^{O(t)}}$, output degree bound $d_t:=2(2D)^{2t+1}=D^{O(t)}$, and blowup $C_t:=D\cdot(2D)^{2t+1}=D^{O(t)}$;
- gap map $g_t(\varepsilon)=\beta\sqrt t\,\min(\varepsilon,c/t)$ with $c:=DK=7740/7$ and $\beta:=\beta_0/(DK)>0$, so $\operatorname{UNSAT}(R_t(G))\ge\beta\sqrt t\,\min(\operatorname{UNSAT}(G),c/t)$ and hence $\operatorname{UNSAT}(G)\ge\varepsilon$ implies $\operatorname{UNSAT}(R_t(G))\ge\beta\sqrt t\,\min(\varepsilon,c/t)$;
- perfect completeness: $\operatorname{val}(G)=1$ implies $\operatorname{val}(R_t(G))=1$, and edgeless inputs are mapped to edgeless outputs;

and $R_t$ is deterministic and runs in time polynomial in the bit length of the explicit encoding of $G$. The constants $\beta,c,t_0$ and the parameters $\Sigma_t,d_t,C_t$ depend only on $\lvert\Sigma\rvert$ and $t$, never on $\lvert V(G)\rvert$ or $\lvert E(G)\rvert$. This is a single powering step, not the fixed-alphabet PCP iteration: the alphabet grows with $t$, and no claim is made here about reducing it.

## Facts & Assumptions

**Given:** a finite alphabet $\Sigma$ with $\lvert\Sigma\rvert\ge2$, integers $t\ge t_0$ and $D=387$, $K=20/7$, and the constants $\beta_0,t_0$ of [[lem-powering-amplifies-small-gaps]] for $d=D$, $\Sigma$ and $\alpha_0=\rho_2$.

[F1] $R_{\deg}$ is a complete uniform gap-preserving reduction for the fixed input alphabet $\Sigma$ and arbitrary input degrees, with output alphabet $\Sigma$, output degree bound $D$, blowup $D$, gap map $g_{\deg}(\varepsilon)=\varepsilon/(DK)$, and polynomial running time; on inputs with $E(G)\ne\varnothing$ its output is $D$-regular with $2\lvert E(G)\rvert$ vertices and $D\lvert E(G)\rvert$ ordinary edges over $\Sigma$ and normalized second eigenvalue bound at most $\rho_2<1$ ([[thm-degree-reduction-preserves-unsatisfaction]], [[lem-constraint-expander-overlay]], [[def-degree-reduction-by-expander-clouds]]).

[F2] For a $d$-regular graph $G$ with $n$ vertices, the powered graph $G_t$ has vertex set $V(G)$, two paired incidence slots for each of the $n(2d)^{2t+1}$ pairs (start vertex, pattern), degree $2(2d)^{2t+1}$, and $n(2d)^{2t+1}$ ordinary edges; its normalized adjacency is the length-$(2t+1)$ lazy-walk transition matrix, and its view alphabet is $\Sigma_t=\Sigma^{\mathcal P_R}$ with $R=t+\lceil\sqrt t\rceil$. Explicit relation tables are computable by enumerating patterns and tables, so $G_t$ is produced in time polynomial in its explicit encoding length ([[def-constraint-graph-powering]]).

[F3] If $\operatorname{val}(G_2)=1$ then $\operatorname{val}((G_2)_t)=1$ ([[lem-powering-preserves-perfect-satisfiability]]).

[F4] For every labeling $\varphi$ of $(G_2)_t$, $\operatorname{UNSAT}_\varphi((G_2)_t)\ge\beta_0\sqrt t\,\min(\operatorname{UNSAT}(G_2),1/t)$ whenever $t\ge t_0$ and $G_2$ is $D$-regular over $\Sigma$ with normalized second eigenvalue bound at most $\rho_2$ and at least one edge ([[lem-powering-amplifies-small-gaps]]).

[F5] A complete uniform gap-preserving reduction has arity two throughout, maps edgeless inputs to edgeless outputs, obeys $|E(R(G))|\le C|E(G)|$ and $|V(R(G))|\le C|E(G)|$ on nonempty inputs, and its parameters depend only on the fixed input parameters and on the reduction itself ([[def-gap-preserving-csp-reduction]]).

## Proof

**Proof technique:** direct.

1.1 If $G$ is $D$-regular over $\Sigma$ with at least one edge, [F2] gives a powered graph on $|V(G)|$ vertices, degree $d_t=2(2D)^{2t+1}$, and $|E(G_t)|=|V(G)|(2D)^{2t+1}=2(2D)^{2t+1}|E(G)|/D\le C_t|E(G)|$, since $D\ge2$. Also $|V(G_t)|=|V(G)|=2|E(G)|/D\le C_t|E(G)|$. Completeness is [F3], the gap bound is [F4], and the construction is explicit and polynomial for fixed $D,t,|\Sigma|$ by [F2]. This establishes the powering facts on the regular intermediate graphs used below. [F2, F3, F4, algebra]

2.1 The gap map of the composite is $g(\varepsilon)=g_t(g_{\deg}(\varepsilon))=\beta_0\sqrt t\,\min(\varepsilon/(DK),1/t)$ with $g_{\deg}(\varepsilon)=\varepsilon/(DK)$ as in [F1]; writing $\min(\varepsilon/(DK),1/t)=(1/(DK))\min(\varepsilon,DK/t)$ gives $g(\varepsilon)=\beta\sqrt t\,\min(\varepsilon,c/t)$ with $\beta=\beta_0/(DK)$ and $c=DK>0$. [F1, step 1.1, algebra]

3.1 Define $R_t(G)=(R_{\deg}(G))_t$. If $E(G)\ne\varnothing$, [F1] gives a $D$-regular intermediate graph with $2|E(G)|$ vertices, so [F2] gives $|V(R_t(G))|=2|E(G)|$, degree $d_t$, and $|E(R_t(G))|=2|E(G)|(2D)^{2t+1}\le C_t|E(G)|$ because $D\ge2$; the vertex bound follows as well. Completeness follows by [F1] and [F3]. Applying [F1] and then [F4] gives the gap map of step 2.1. If $E(G)=\varnothing$, the first map returns the empty graph and the powered output is empty, so the empty-input, completeness, and gap-at-zero clauses hold. The construction is deterministic and polynomial time: [F1] computes the intermediate graph in polynomial time and its size is $O(|E(G)|)$ for fixed $D,|\Sigma|$, after which [F2] enumerates a fixed number of patterns per vertex and writes fixed-size tables. Thus $R_t$ satisfies the clauses of [F5] directly, without applying a composition theorem whose second-stage domain is larger than the regular range used here. [F1, F2, F3, F4, F5, step 2.1, algebra]

4.1 The alphabet size obeys $\lvert\Sigma_t\rvert=\lvert\Sigma\rvert^{(2D)^{R}}$ with $R=t+\lceil\sqrt t\rceil$, which is at most $\lvert\Sigma\rvert^{D^{O(t)}}$; the degree $2(2D)^{2t+1}$ and blowup $D(2D)^{2t+1}$ are both $D^{O(t)}$; and the gap inequality for inputs with $\operatorname{UNSAT}(G)\ge\varepsilon$ follows from the gap map of step 2.1 and the monotonicity of $\varepsilon\mapsto\min(\varepsilon,c/t)$. This proves every clause of the statement, with the stated dependence of all constants on $\lvert\Sigma\rvert$ and $t$ only. [F1, F2, step 1.1, step 2.1, step 3.1, algebra] ∎

## Remarks

- **The loss factor of the page is here.** The factor $DK=7740/7$ of [[thm-degree-reduction-preserves-unsatisfaction]] is absorbed into $\beta$ and into the saturation threshold $c$, exactly as the promised claim allows; no other quantity of the composite depends on the internal constant $129$ of the cloud construction. The saturation threshold $c/t$ is inherited from the $\min(\varepsilon,1/t)$ of the powering lemma, scaled by the degree-reduction loss.
- **Not yet a PCP reduction.** The output alphabet $\Sigma_t$ grows like $\lvert\Sigma\rvert^{D^{O(t)}}$, and the output degree $d_t$ also grows with $t$; both are constants for fixed $t$, which is what the statement needs, but a fixed-alphabet PCP requires the alphabet-reduction step that is owned by the following page. The obligation is recorded in the coverage record of this page rather than discharged here.
- **Determinism.** The reduction enumerates all patterns and all relation tables instead of sampling them, so no random choices and no choice principle are used; the graph family $H_r$ inside $R_{\deg}$ is the explicit one supplied by the published expander construction. The pair $\Sigma_t$ is fixed by listing the patterns in a fixed order, which also fixes the tie-breaking order used by the plurality decoding of [[def-plurality-decoding-of-powered-local-views]].
