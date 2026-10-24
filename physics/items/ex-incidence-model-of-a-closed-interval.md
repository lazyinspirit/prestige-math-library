---
id: ex-incidence-model-of-a-closed-interval
kind: example
title: "Incidence cochains of a closed interval"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 12
deps: [def-extension-by-zero-abelian-sheaf, def-geometric-realization-of-an-abstract-simplicial-complex, lem-constant-sheaf-is-the-sheaf-of-locally-constant-functions, lem-finite-simplicial-constructible-sheaves-have-a-derived-incidence-model, def-axiom-of-choice, def-sheaf-cohomology-derived-global-sections]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Mark Goresky, Lecture Notes on Sheaves and Perverse Sheaves, version of June 26, 2026"
      url: "https://www.math.ias.edu/~goresky/pdf/all2.pdf"
      locator: "§§2.1-2.3, §32.2"
---

## Example

Assume AC ([[def-axiom-of-choice]]). Stratify the closed interval by its endpoints and open edge. A finite constructible sheaf has vector spaces $V_0,V_1,V_e$ with generization maps $u_0:V_0\to V_e$ and $u_1:V_1\to V_e$. Its actual derived global sections are computed by
$$[V_0\oplus V_1\xrightarrow{u_0-u_1}V_e],$$
in degrees zero and one. Thus a constant sheaf $k$ has cohomology $k$ in degree zero and zero otherwise. Extension by zero of $k$ on the open edge has one copy of $k$ in degree one and zero otherwise.

## Facts & Assumptions

**Given:** The Axiom of Choice [[def-axiom-of-choice]], a field $k$, the full $1$-simplex $K$ with nonempty faces $v_0,v_1,e$ with $D=\varnothing$ and realization the closed interval $X=|K|$ ([[def-geometric-realization-of-an-abstract-simplicial-complex]]), and a sheaf $F$ on $X$ which is finite-rank locally constant on every open simplex, so that by the incidence model it corresponds to the finite-dimensional diagram with $V_0:=F_{v_0}$, $V_1:=F_{v_1}$, $V_e:=F_{b_e}$, where $b_e$ is the midpoint of the open edge and generization maps $u_0:V_0\to V_e$, $u_1:V_1\to V_e$. Cohomology is derived global sections ([[def-sheaf-cohomology-derived-global-sections]]) and the constant sheaf is the sheaf of locally constant functions ([[lem-constant-sheaf-is-the-sheaf-of-locally-constant-functions]]); extension by zero is that of [[def-extension-by-zero-abelian-sheaf]].

[F1] Actual derived incidence model ([[lem-finite-simplicial-constructible-sheaves-have-a-derived-incidence-model]]): the exact realization of finite-dimensional diagrams realizes $F$ as $q^{-1}V$, and ordinary cohomology of $q^{-1}V$ has a bounded finite cochain model computed from the diagram, agreeing with the derived global sections; the model is the finite incidence cochain complex of the diagram on the face poset.

[F2] Constant sheaf ([[lem-constant-sheaf-is-the-sheaf-of-locally-constant-functions]]): the constant sheaf $k_X$ has sections the locally constant $k$-valued functions, its stalks are $k$, and its restriction to every open simplex is constant with value $k$ and identity generization maps.

[F3] Extension by zero ([[def-extension-by-zero-abelian-sheaf]]): for the open edge inclusion $j:(0,1)\hookrightarrow X$, the sheaf $j_!k_{(0,1)}$ has stalk $k$ at points of the open edge and stalk $0$ at the two endpoints, and it is constant on each open simplex; hence its diagram has $V_0=V_1=0$, $V_e=k$ and zero generization maps.

[F4] Choice ([[def-axiom-of-choice]]): AC is assumed; the computation below is finite linear algebra and uses no further selection.

## Verification

1.1 The face poset is $P=\{v_0,v_1,e\}$ with $v_0\le e$ and $v_1\le e$, and every strict chain has length at most one. The incidence cochain model for the derived inverse limit of the diagram $(V_0,V_1,V_e,u_0,u_1)$ is the two-term complex with $C^0=V_0\oplus V_1\oplus V_e$, $C^1=V_e\oplus V_e$ and differential $d(v_0,v_1,w)=(w-u_0v_0,\,w-u_1v_1)$; by [F1] the cohomology of this complex is the actual derived global sections of $F$, so $R^i\Gamma(X,F)$ vanishes outside degrees $0$ and $1$. [F1, F4, given, construct]

2.1 Change coordinates invertibly in the source by $t:=w-u_1v_1$ and in the target by $(u,v):=(\text{first output}-\text{second output},\ \text{second output})$. In the new coordinates the differential is $d(t,v_0,v_1)=(u_1v_1-u_0v_0,\,t)$, which is the direct sum of the identity map $V_e\xrightarrow{\mathrm{id}}V_e$ and the two-term complex $[V_0\oplus V_1\xrightarrow{u_0-u_1}V_e]$ after multiplying the first target coordinate by $-1$. The identity summand is contractible, so $R^i\Gamma(X,F)\cong H^i[V_0\oplus V_1\xrightarrow{u_0-u_1}V_e]$ in degrees $0$ and $1$ and is zero in all other degrees. [step 1.1, algebra]

3.1 For the constant sheaf $F=k_X$ we have $V_0=V_1=V_e=k$ with both generization maps the identity by [F2], so the difference map $k\oplus k\to k$ is surjective with kernel the diagonal copy of $k$; hence $H^0=k$ and $H^1=0$, and all higher cohomology vanishes by step 2.1. For $F=j_!k_{(0,1)}$ the diagram is $V_0=V_1=0$, $V_e=k$ with zero maps by [F3], so the two-term complex reduces to a single copy of $k$ in degree $1$; hence $H^1=k$, $H^0=0$ and all other cohomology vanishes. This proves both stated computations, and no step selects from a family, so no choice beyond the inherited AC is used by the computation. [step 2.1, F2, F3, algebra] ∎
