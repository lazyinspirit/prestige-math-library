---
id: cor-center-is-morita-invariant-via-natural-endomorphisms
kind: corollary
title: "The center is Morita invariant, via natural endomorphisms of the identity"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 7
justified_by: []
aliases: []
proof_strategy: direct
deps: [thm-morita-equivalence-is-invertibility-of-a-bimodule, thm-unit-isomorphisms-for-module-tensor-products, def-center-of-a-ring, def-bimodule, def-natural-transformation, def-vertical-composition-of-natural-transformations, def-natural-isomorphism, def-equivalence-and-adjoint-equivalence-of-categories, thm-every-equivalence-can-be-made-an-adjoint-equivalence, def-preadditive-category, def-abelian-category, thm-modules-over-a-ring-form-an-abelian-category, def-hom-groups-and-induced-hom-maps, thm-an-equivalence-between-abelian-categories-is-exact]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "nLab, Morita equivalence, Definitions (the center of an algebra is isomorphic to the center of its category of modules; Morita equivalent algebras have isomorphic centers)"
      url: "https://ncatlab.org/nlab/show/Morita+equivalence"
    - title: "N. Johnson and D. Yau, 2-Dimensional Categories, §6.3 (evaluation and coevaluation between Hom and tensor)"
      url: "https://arxiv.org/pdf/2002.06055"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Let $A$ be a unital ring. Natural endomorphisms below are encoded by their component at the regular module $A$; the proof establishes that this component determines the entire family, and that the permissible components form a set. The monoid of natural endomorphisms of the identity functor $1_{A\text{-}\mathrm{Mod}}$ is a ring under componentwise addition and vertical composition, and evaluation at the component $A\to A$ identifies it with the ring of $(A,A)$-bimodule endomorphisms of ${}_AA_A$, hence with the center:
$$\operatorname{Nat}(1_{A\text{-}\mathrm{Mod}},1_{A\text{-}\mathrm{Mod}})\;\cong\;\operatorname{End}_{A\text{-}A}({}_AA_A)\;\cong\;Z(A)$$
(the second isomorphism is $f\mapsto f(1)$, with inverse $z\mapsto(a\mapsto za)$; [[def-center-of-a-ring]]). Consequently, if $A$ and $B$ are Morita equivalent — equivalently related by inverse bimodules — then $Z(A)\cong Z(B)$ as rings. No choice is used.

## Facts & Assumptions

**Given:** A unital ring $A$; $A\text{-Mod}$ is preadditive with abelian hom-groups and bilinear composition ([[thm-modules-over-a-ring-form-an-abelian-category]], [[def-abelian-category]], [[def-preadditive-category]], [[def-hom-groups-and-induced-hom-maps]]).

[F1] The center $Z(A)=\{z\in A:za=az\text{ for every }a\in A\}$ is a commutative subring of $A$ ([[def-center-of-a-ring]]).

[F2] A natural transformation $\alpha:1_{A\text{-}\mathrm{Mod}}\Rightarrow1_{A\text{-}\mathrm{Mod}}$ is a family of $A$-linear endomorphisms with $\alpha_Y\circ u=u\circ\alpha_X$ for every $A$-linear $u:X\to Y$, and vertical composition is componentwise with identity components $1_X$ ([[def-natural-transformation]], [[def-vertical-composition-of-natural-transformations]], [[def-natural-isomorphism]]).

[F3] An equivalence of categories consists of functors $F,G$ with natural isomorphisms $\eta:1\Rightarrow GF$ and $\varepsilon:FG\Rightarrow1$, and can be equipped as an adjoint equivalence; an equivalence between abelian categories is additive ([[def-equivalence-and-adjoint-equivalence-of-categories]], [[thm-every-equivalence-can-be-made-an-adjoint-equivalence]], [[thm-an-equivalence-between-abelian-categories-is-exact]]).

[F4] Two unital rings are Morita equivalent when there is an additive equivalence of their module categories, equivalently when they are related by inverse bimodules ([[thm-morita-equivalence-is-invertibility-of-a-bimodule]]).

## Proof

**Proof technique:** direct.

1.1 ($\operatorname{Nat}(1,1)$ is a ring.) For natural endomorphisms $\alpha,\beta$ of $1_{A\text{-}\mathrm{Mod}}$, define $\alpha+\beta$ componentwise by $(\alpha+\beta)_X=\alpha_X+\beta_X$ in the abelian group $\operatorname{Hom}_A(X,X)$; this is natural because for $u:X\to Y$ both $(\alpha+\beta)_Y\circ u$ and $u\circ(\alpha+\beta)_X$ equal $u\alpha_X+u\beta_X$ by bilinearity of composition. Componentwise addition inherits associativity, commutativity, the zero transformation and additive inverses from the hom-groups, and vertical composition distributes over it on both sides because composition of $A$-linear maps is bilinear: $\gamma_X\circ(\alpha_X+\beta_X)=\gamma_X\alpha_X+\gamma_X\beta_X$ and $(\alpha_X+\beta_X)\circ\gamma_X=\alpha_X\gamma_X+\beta_X\gamma_X$. Finally the identity $1_1$ and the zero transformation are natural. Hence $\operatorname{Nat}(1,1)$ is a ring under componentwise addition and vertical composition. [F2, given, algebra]

1.2 (Identification with the center.) Let $\alpha:1\Rightarrow1$ and set $z=\alpha_A(1)$. Left $A$-linearity gives $\alpha_A(a)=az$, while naturality at the left $A$-linear right multiplication $r_a:A\to A$ gives $\alpha_A(a)=za$. Thus $z\in Z(A)$ and $\alpha_A$ is a bimodule endomorphism. For $x\in X$, the left $A$-linear map $\ell_x:A\to X$, $a\mapsto ax$, gives by naturality $\alpha_X(x)=\ell_x(z)=zx$. Conversely, if $z\in Z(A)$, $\eta^z_X(x)=zx$ is additive, satisfies $z(ax)=a(zx)$, and commutes with every $A$-linear map, so it is a natural endomorphism. The assignments $\alpha\mapsto z$ and $z\mapsto\eta^z$ are inverse. They preserve addition, identities, and multiplication since $\eta^z\circ\eta^w=\eta^{zw}$. A bimodule endomorphism $f:A\to A$ similarly satisfies $f(a)=af(1)=f(1)a$, so evaluation identifies it with a unique central element and every central element supplies one. This proves both ring isomorphisms. [F1, F2, given, algebra]

1.3 (Morita transport.) Let $F:A\text{-Mod}\to B\text{-Mod}$ be an additive equivalence, equipped as an adjoint equivalence with quasi-inverse $G$, unit $\eta$ and counit $\varepsilon$ by [F3]. For $\alpha\in\operatorname{Nat}(1_{A},1_{A})$ define $\beta_X:=\varepsilon_X\circ F(\alpha_{GX})\circ\varepsilon_X^{-1}$ for $X\in B\text{-Mod}$. Each $\beta_X$ is an endomorphism of $X$, and $\beta$ is natural: for $u:X\to Y$, naturality of $\varepsilon$ gives $\varepsilon_Y^{-1}\circ u=FG(u)\circ\varepsilon_X^{-1}$, hence $\beta_Y\circ u=\varepsilon_Y\circ F(\alpha_{GY}\circ G(u))\circ\varepsilon_X^{-1}=\varepsilon_Y\circ F(G(u)\circ\alpha_{GX})\circ\varepsilon_X^{-1}=u\circ\beta_X$. The assignment $\alpha\mapsto\beta$ is additive because $F$ is additive and composition is bilinear; it carries identities to identities and composites to composites because $F$ and $\varepsilon$ are functorial; and the symmetric formula $\alpha'_Y=\eta_Y^{-1}\circ G(\beta_{FY})\circ\eta_Y$ using $\eta$ is inverse to it, by the triangle identities and the naturality of $\eta$ and $\varepsilon$. Hence it is a ring isomorphism $\operatorname{Nat}(1_A,1_A)\cong\operatorname{Nat}(1_B,1_B)$. [F2, F3, given, algebra]

2.1 (Conclusion.) If $A$ and $B$ are Morita equivalent, [F4] supplies an additive equivalence $F:A\text{-Mod}\to B\text{-Mod}$, and step 1.3 gives a ring isomorphism $\operatorname{Nat}(1_A,1_A)\cong\operatorname{Nat}(1_B,1_B)$; composing with the identifications of step 1.2 gives a ring isomorphism $Z(A)\cong Z(B)$. For $A=B$ the identity functor recovers the first identification, so the statement holds in general. No element outside the given rings and functors is chosen and no choice principle is used. [F4, step 1.1, step 1.2, step 1.3] ∎
