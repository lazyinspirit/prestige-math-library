---
id: "rem-hom-of-homology-is-not-the-definition-of-singular-cohomology"
kind: "remark"
title: "Hom of homology is not the definition of singular cohomology"
deps: ["def-real-singular-chain-complex", "def-real-singular-cochain-complex", "def-real-singular-cohomology", "def-axiom-of-choice", "rem-dualizing-real-chain-complexes-requires-an-exactness-argument"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "DG-16 design; Hatcher/Park control"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
      locator: "DG-16 B inventory; explicit verification or unresolved witness in proof_plan"
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

For a topological space X, real singular cohomology is defined by $$H^n_{\mathrm{sing}}(X;\mathbb R)= \frac{\ker(\delta^n:C^n(X;\mathbb R)\to C^{n+1}(X;\mathbb R))} {\operatorname{im}(\delta^{n-1}:C^{n-1}(X;\mathbb R)\to C^n(X;\mathbb R))},$$ where $C^n(X;\mathbb R)=\operatorname{Hom}_{\mathbb R}(C_n(X;\mathbb R),\mathbb R)$ and $\delta f=f\circ\partial$. This definition is choice-free. Evaluation on cycles defines a natural real-linear map $$H^n_{\mathrm{sing}}(X;\mathbb R)\longrightarrow \operatorname{Hom}_{\mathbb R}(H_n(X;\mathbb R),\mathbb R).$$ Under AC this map is an isomorphism, by a theorem about functional extensions, not by the definition of singular cohomology. This distinction does not assert a counterexample to real-coefficient evaluation under AC.

## Facts & Assumptions

**Given:** The objects and separate axiom branches of the statement.

[F1] The real singular chain complex is unaugmented, with $\partial_0=0$, zero negative groups, and $\partial^2=0$ ([[def-real-singular-chain-complex]]).

[F2] Cochains are real-linear functionals, with differential $\delta^nf=f\circ\partial_{n+1}$, and their cohomology is the displayed kernel/image quotient ([[def-real-singular-cochain-complex]], [[def-real-singular-cohomology]]).

[F3] For a real chain complex, evaluation on cycles is well-defined and natural without choice; under AC it is an isomorphism by extension of functionals on cycles and boundaries ([[rem-dualizing-real-chain-complexes-requires-an-exactness-argument]], positive branch; [[def-axiom-of-choice]]).

## Proof

1.1 By [F1], $\partial_n\partial_{n+1}=0$, and hence for every cochain $f$ one has $\delta^{n+1}\delta^nf=f\partial_{n+1}\partial_{n+2}=0$. Thus the image in [F2] is a vector subspace of the kernel and the quotient exists. Both kernel and image are specified sets, and forming their quotient makes no selection of representatives. This verifies the choice-free definition. [F1, F2]

1.2 If $f$ is a cocycle and $z$ a cycle, set $\varepsilon([f])([z])=f(z)$. Replacing $z$ by $z+\partial c$ changes this value by $f(\partial c)=(\delta f)(c)=0$. Replacing $f$ by $f+\delta g$ changes it by $g(\partial z)=0$. Addition and scalar multiplication commute with evaluation, so it defines the claimed linear map on the two quotients. For a continuous map $u:X\to Y$, postcomposition on simplices commutes with each face, and hence with the signed boundary. Its chain map $u_\#$ therefore satisfies $f(u_\#z)=(f\circ u_\#)(z)$, which is the naturality identity on classes. Neither construction uses AC. [F1, F2]

2.1 Assume AC for this step. Apply the positive branch of [F3] to the real complex [F1]. Concretely, any functional on $H_n$ pulls back to the cycles and extends to $C_n$; the extension vanishes on boundaries, so gives a cocycle mapping to that functional. If a cocycle vanishes on cycles, the rule $b(\partial c)=f(c)$ is well-defined on the boundary subspace in degree $n-1$ and extends to $C_{n-1}$, giving $f=\delta b$ after that extension. These are exactly the surjectivity and injectivity arguments in [F3]; both use its AC extension clause. Conversely every coboundary vanishes on cycles by step 1.2. Thus evaluation is the asserted natural isomorphism. It is not an alternative definition, and no global family of cochain representatives was chosen. [F1, F3, step 1.2]

3.1 If $X=\varnothing$, all chain and cochain groups are zero and evaluation is the unique isomorphism between zero spaces in every degree. If $X$ is a point, there is one simplex in every nonnegative degree and $\partial_k$ is multiplication by $\sum_{i=0}^k(-1)^i$ for $k>0$: it is the identity in positive even degrees and zero in odd degrees, with $\partial_0=0$. Therefore $H_0=\mathbb R$ and $H_k=0$ for $k>0$; dually $H^0=\mathbb R$ and $H^k=0$ for $k>0$. Evaluation in degree zero sends the constant scalar cochain a to the functional $r\mapsto ar$, an isomorphism without choice. In negative degrees both sides vanish. For general X at degree zero there is no incoming coboundary, so the injectivity argument uses no negative-degree extension. Constant and repeated simplices are retained in these unnormalized complexes; the representative computations in step 1.2 apply to them as written. [F1, F2, step 1.2] ∎
