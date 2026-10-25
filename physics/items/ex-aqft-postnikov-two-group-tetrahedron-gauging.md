---
id: "ex-aqft-postnikov-two-group-tetrahedron-gauging"
kind: "example"
title: "Nonzero Postnikov data retain higher gauge volume on a tetrahedron"
status: "published"
origin: "pipeline"
domain: "mathematics"
library: "mathematics"
dependency_level: 6
deps: ["thm-aqft-finite-two-group-gauging-gluing", "def-aqft-finite-background-two-groupoid", "thm-aqft-finite-background-two-groupoid-coherence"]
dependency_roles: {"thm-aqft-finite-two-group-gauging-gluing": "mathematical-premise", "def-aqft-finite-background-two-groupoid": "mathematical-premise", "thm-aqft-finite-background-two-groupoid-coherence": "mathematical-premise"}
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
sources: {"references": []}
generation: {"role": "example"}
---

## Example

On the ordered tetrahedron $0<1<2<3$, take $G=A=\mathbb Z_2$ with trivial action and $\beta(g,h,k)=ghk$. This is a normalized $3$-cocycle of nonzero class. There are $64$ background objects, all gauge equivalent. For unit weight the higher sum is $1$, with $\pi_1\cong\mathbb Z_2$ and $\pi_2\cong\mathbb Z_2$ at any background. The nonzero Postnikov cocycle is retained in the gauge transformations and their associator.

## Example references

[[thm-aqft-finite-two-group-gauging-gluing]]

[[def-aqft-finite-background-two-groupoid]]

[[thm-aqft-finite-background-two-groupoid-coherence]]

## Facts & Assumptions

**Given:** the full ordered tetrahedron (including all its faces and edges), the finite data in the Example, and the absolute background gauge $2$-groupoid, with all arithmetic modulo $2$. No boundary field is held fixed and no relative gauge restriction is imposed.

[F1] [[thm-aqft-finite-two-group-gauging-gluing]] gives $Z^{(2)}=\sum_{[x]}|\pi_2(x)|/|\pi_1(x)|=c(K)\sum_x1$, where $c(K)=|A|^{V-E}/|G|^V$ for unit weight. Its proof counts raw parameters; the particular stabilizers and transitivity below are calculated locally using [F2]–[F3].

[F2] [[def-aqft-finite-background-two-groupoid]] gives flat edges $a_{ij}+a_{jk}=a_{ik}$ and face constraint $B_{123}+B_{023}+B_{013}+B_{012}=\beta(a_{01},a_{12},a_{23})$. A raw arrow has arbitrary vertex labels $g_i$ and edge labels $\lambda_{ij}$, target edges $b_{ij}=g_i+a_{ij}+g_j$, and target faces $C=B+\zeta^g(a)+\delta\lambda$, where $\zeta^g_{ijk}(a)=\beta(g_i,a_{ij},a_{jk})+\beta(b_{ij},g_j,a_{jk})+\beta(b_{ij},b_{jk},g_k)$ and $(\delta\lambda)_{ijk}=\lambda_{jk}+\lambda_{ik}+\lambda_{ij}$. Two arrows with the same $g$ are related by a vertex $2$-cochain $t$ exactly when their edge labels differ by $(\delta t)_{ij}=t_j+t_i$; different $g$ have no $2$-arrows between them. Composition has edge label $\lambda+\mu+\tau$, with $\tau(h,g;a)_{ij}=\beta(h_i,g_i,a_{ij})+\beta(h_i,b_{ij},g_j)+\beta(c_{ij},h_j,g_j)$ for successive edge backgrounds $a,b,c$. Its associator is the vertex cochain $\sigma_i=\beta(k_i,h_i,g_i)$. The normalized group cocycle and group coboundary conventions are those inherited by this definition from its background-cochain supplier.

[F3] [[thm-aqft-finite-background-two-groupoid-coherence]] establishes that these arrows preserve background constraints and form the stated $2$-groupoid. It identifies $\pi_2(x)$ with $\ker(\delta_a:C^0\to C^1)$ and $\pi_1(x)$ with raw $1$-automorphisms modulo the $2$-arrows of [F2]. Thus $|\pi_1(x)|=|S_x|/|\operatorname{im}\delta_a|$, with no quotient of raw parameters by equality of their induced functions on backgrounds.

## Verification

1.1 Normalization is immediate. The cocycle equation expands to $hkl-(g+h)kl+g(h+k)l-gh(k+l)+ghk=0$ since each monomial occurs twice modulo $2$. If $\beta=\delta c$, its values at $(0,1,1)$ and $(1,0,1)$ imply $c(0,0)=c(0,1)=c(1,0)$. Then $(\delta c)(1,1,1)=c(1,0)-c(0,1)=0$, contradicting $\beta(1,1,1)=1$. [given, F2, algebra]

1.2 Set $x_0=0$ and $x_i=a_{0i}$ for $i>0$. Flatness on $0ij$ gives $a_{ij}=x_i+x_j$, so flat edges are in bijection with the three unrestricted potentials $x_1,x_2,x_3$, giving $8$ edge backgrounds. For each, the tetrahedron constraint in [F2] uniquely determines one face label from the other three, giving $8$ face assignments and $64$ objects in total. There are $V=4,E=6$, so [F1] gives $c=2^{4-6}/2^4=1/64$ and $Z=c\cdot64=1$. [given, F1, F2, algebra]

2.1 For any object choose the vertex labels $g_i=x_i$ from step 1.2 and first take edge parameters zero. The target has $b_{ij}=0$ and face labels $C=B+\zeta^g(a)$. By [F3] it is still a background, hence $\delta C=\beta(0,0,0)=0$. Now take identity vertex labels and set $\lambda_{0j}=0$ and $\lambda_{ij}=C_{0ij}$ for $0<i<j$. Normalization makes this second arrow's $\zeta$ zero. On $0ij$, $(\delta\lambda)_{0ij}=C_{0ij}$; on $123$, $(\delta\lambda)_{123}=C_{023}+C_{013}+C_{012}=C_{123}$ by $\delta C=0$. Thus its target faces are $C+\delta\lambda=0$. Every object is therefore equivalent to the zero background. [given, F2, F3, step 1.2, algebra]

3.1 At the zero background, an automorphism's target edges vanish exactly when all $g_i$ equal one constant $r\in\mathbb Z_2$. Every term of $\zeta$ then has a zero argument, so normalization gives $\zeta=0$; the remaining condition is $\delta\lambda=0$. Such edge cocycles have exactly the form $\lambda_{ij}=y_i+y_j$ with $y_0=0$, $y_i=\lambda_{0i}$, by the triangle equations. Hence there are $8$ of them and $16$ raw automorphisms. The map $t\mapsto\delta t$ has kernel the two constant vertex cochains and image precisely these $8$ edge cocycles: take $t_i=y_i$ for surjectivity. Therefore $\pi_2\cong\mathbb Z_2$ under addition. For two raw automorphisms all successive edge backgrounds are zero, so each term of $\tau$ also has a zero argument and composition is $(r,\lambda)(s,\mu)=(r+s,\lambda+\mu)$. The $2$-arrows quotient the entire edge-cocycle factor, preserving $r$, so $\pi_1\cong\mathbb Z_2$ as a group, also with order $16/8=2$. By the equivalence in step 2.1, these homotopy groups have the stated isomorphism types at every background. [given, F2, F3, step 2.1, algebra]

4.1 The single component has higher mass $2/2=1$ by [F1], agreeing with step 1.2. The nonzero $\beta$ is still present in the full background and gauge formulas. In particular, for three constant automorphism vertex labels $g,h,k$ at the zero background the associator is the constant vertex $2$-cochain $\sigma_i=khg$, nonzero when $g=h=k=1$. Its coboundary is zero, so it is a retained $2$-automorphism, not a discarded parameter. Thus no quotient by induced functions or replacement by a split model has entered the calculation. [F1, F2, step 1.1, step 1.2, step 2.1, step 3.1] ∎
