---
id: lem-tensor-hom-adjunction-for-bimodules
kind: lemma
title: "Tensor-Hom adjunction for bimodules over arbitrary unital rings"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps:
  - def-bimodule
  - def-left-and-right-modules
  - def-balanced-and-bilinear-maps
  - thm-universal-property-of-module-tensor-products
  - thm-bimodule-actions-induced-on-tensor-products
  - def-hom-groups-and-induced-hom-maps
  - prop-functoriality-of-module-tensor-products
  - def-adjunction-by-unit-counit-and-triangle-identities
justified_by: []
aliases: []
dependency_level: 0
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "M. Kamensky, Non-Commutative Algebra (BGU course notes, Spring 2017), §5.1, Theorem 5.1.43, Proposition 5.1.40, Lemma 5.1.46, Corollaries 5.1.48-5.1.49"
      url: "https://mkamensky.github.io/teaching/2017s/noncommutative-algebra/notes.pdf"
    - title: "A. Nyman and S. P. Smith, A Generalization of Watts's Theorem: Right Exact Functors on Module Categories, arXiv:0806.0832, Theorem 1.1-1.2, Propositions 3.2-3.3, Lemma 3.4"
      url: "https://arxiv.org/pdf/0806.0832"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Let $A$ and $B$ be unital rings, let $M$ be a $(B,A)$-bimodule, let $X$ be a
left $A$-module and let $Y$ be a left $B$-module. Then
$\operatorname{Hom}_B(M,Y)$ is a left $A$-module under

$$(a\varphi)(m)=\varphi(ma),$$

and currying

$$\Theta:\operatorname{Hom}_B(M\otimes_AX,Y)\to\operatorname{Hom}_A(X,\operatorname{Hom}_B(M,Y)),\qquad \Theta(F)(x)=[m\mapsto F(m\otimes x)],$$

is a bijection, natural in $X$ and $Y$, whose inverse sends $\varphi$ to the
$B$-linear map determined on elementary tensors by
$\Psi(\varphi)(m\otimes x)=\varphi(x)(m)$. The unit
$\eta_X:X\to\operatorname{Hom}_B(M,M\otimes_AX)$, $\eta_X(x)(m)=m\otimes x$,
and counit
$\varepsilon_Y:M\otimes_A\operatorname{Hom}_B(M,Y)\to Y$,
$\varepsilon_Y(m\otimes\varphi)=\varphi(m)$, satisfy the triangle identities of
[[def-adjunction-by-unit-counit-and-triangle-identities]]. Consequently
$T_M=M\otimes_A-$ is left adjoint to $\operatorname{Hom}_B(M,-)$. No
commutativity is assumed and no choice is used.

## Facts & Assumptions

**Given:** Unital rings $A,B$, a $(B,A)$-bimodule $M$, a left $A$-module $X$
and a left $B$-module $Y$.

[F1] Module laws: $m(a+a')=ma+ma'$, $(ma)a'=m(aa')$, $m1=m$ for the right
$A$-module $M$, and dually for left modules over $A$ and $B$
([[def-left-and-right-modules]]).

[F2] In a $(B,A)$-bimodule the two actions commute: $b(ma)=(bm)a$ for all
$b\in B$, $m\in M$, $a\in A$ ([[def-bimodule]]).

[F3] $\operatorname{Hom}_B(M,Y)$ is an abelian group under pointwise addition,
and postcomposition and precomposition by module maps are group homomorphisms
([[def-hom-groups-and-induced-hom-maps]]).

[F4] An $A$-balanced map $b:M\times X\to Z$ is additive in each variable and
satisfies $b(ma,x)=b(m,ax)$ ([[def-balanced-and-bilinear-maps]]).

[F5] Every balanced map $M\times X\to Z$ into an abelian group factors uniquely
as $\overline b\circ\tau$ through the universal balanced map
$\tau(m,x)=m\otimes x$ ([[thm-universal-property-of-module-tensor-products]]).

[F6] For a $(B,A)$-bimodule $M$ and a left $A$-module $X$ there is a unique
left $B$-module structure on $M\otimes_AX$ with $b(m\otimes x)=(bm)\otimes x$
([[thm-bimodule-actions-induced-on-tensor-products]]).

[F7] Module maps induce maps on tensor products, functorially:
$\operatorname{id}\otimes\operatorname{id}=\operatorname{id}$ and
$(f'\circ f)\otimes(g'\circ g)=(f'\otimes g')\circ(f\otimes g)$
([[prop-functoriality-of-module-tensor-products]]).

[F8] An adjunction $F\dashv G$ is a unit and counit satisfying the triangle
identities ([[def-adjunction-by-unit-counit-and-triangle-identities]]).

## Proof

**Proof technique:** direct.

1.1 For $a\in A$ and $\varphi\in\operatorname{Hom}_B(M,Y)$ the map $m\mapsto\varphi(ma)$ is additive and $B$-linear, since $\varphi(b(ma))=\varphi((bm)a)=b\,\varphi(ma)$ by [F2] and $B$-linearity of $\varphi$. Hence $(a\varphi)(m):=\varphi(ma)$ defines an element of $\operatorname{Hom}_B(M,Y)$, and the resulting action satisfies the left $A$-module axioms, inherited pointwise from the right $A$-module laws of $M$ and the group structure of $\operatorname{Hom}_B(M,Y)$: $(a+a')\varphi=a\varphi+a'\varphi$, $(aa')\varphi=a(a'\varphi)$, $1\varphi=\varphi$ and $a(\varphi+\psi)=a\varphi+a\psi$. [F1, F2, F3]

1.2 For $F\in\operatorname{Hom}_B(M\otimes_AX,Y)$ set $\Theta(F)(x)(m):=F(m\otimes x)$. For fixed $x$ the map $m\mapsto F(m\otimes x)$ is additive and $B$-linear, because $b(m\otimes x)=(bm)\otimes x$ by [F6] and $F$ is $B$-linear, so $\Theta(F)(x)\in\operatorname{Hom}_B(M,Y)$; moreover $\Theta(F)(x+x')=\Theta(F)(x)+\Theta(F)(x')$ and $\Theta(F)(ax)=a\,\Theta(F)(x)$ because $m\otimes(ax)=(ma)\otimes x$, so $\Theta(F)\in\operatorname{Hom}_A(X,\operatorname{Hom}_B(M,Y))$, and $\Theta$ is additive. [F1, F3, F6]

2.1 For $\varphi\in\operatorname{Hom}_A(X,\operatorname{Hom}_B(M,Y))$ the pairing $u(m,x):=\varphi(x)(m)$ is balanced: it is additive in each variable, and $u(ma,x)=\varphi(x)(ma)=(a\varphi(x))(m)=\varphi(ax)(m)=u(m,ax)$ by step 1.1 and $A$-linearity of $\varphi$. By [F5] it induces a unique group homomorphism $\Psi(\varphi):M\otimes_AX\to Y$ with $\Psi(\varphi)(m\otimes x)=\varphi(x)(m)$, and $\Psi(\varphi)$ is $B$-linear because $\Psi(\varphi)(b(m\otimes x))=\varphi(x)(bm)=b(\varphi(x)(m))$ by [F6] and $B$-linearity of each $\varphi(x)$. [F1, F3, F4, F5, F6, step 1.1]

2.2 Naturality: for $A$-linear $g:X'\to X$ one has $\Theta(F\circ(1_M\otimes g))(x')(m)=F(m\otimes g(x'))=\Theta(F)(g(x'))(m)$, so $\Theta$ is natural in $X$; for $B$-linear $h:Y\to Y'$ one has $\Theta(h\circ F)(x)(m)=h(F(m\otimes x))=h_*(\Theta(F)(x))(m)$, so $\Theta$ is natural in $Y$. [F3, F7, step 1.2]

3.1 $\Theta$ and $\Psi$ are mutually inverse: $\Theta(\Psi(\varphi))(x)(m)=\Psi(\varphi)(m\otimes x)=\varphi(x)(m)$, and $\Psi(\Theta(F))$ agrees with $F$ on every elementary tensor, so the two $B$-linear maps are equal by the uniqueness clause of [F5]. [F5, step 1.2, step 2.1]

4.1 Put $\eta_X:=\Theta(1_{M\otimes_AX})$, so $\eta_X(x)(m)=m\otimes x$, and $\varepsilon_Y:=\Psi(1_{\operatorname{Hom}_B(M,Y)})$, so $\varepsilon_Y(m\otimes\varphi)=\varphi(m)$. The triangle identities hold: $\varepsilon_{M\otimes_AX}\circ(1_M\otimes\eta_X)$ and $1_{M\otimes_AX}$ agree on every elementary tensor, since $\varepsilon_{M\otimes_AX}(m\otimes\eta_X(x))=\eta_X(x)(m)=m\otimes x$; and $\operatorname{Hom}_B(M,\varepsilon_Y)\circ\eta_{\operatorname{Hom}_B(M,Y)}$ and the identity agree on every $\varphi$, since $\varepsilon_Y(m\otimes\varphi)=\varphi(m)$ for all $m$. [F5, F7, step 1.2, step 2.1, step 3.1]

5.1 By step 4.1 the functors $T_M=M\otimes_A-$ and $\operatorname{Hom}_B(M,-)$ carry a unit and counit satisfying the triangle identities, so $T_M$ is left adjoint to $\operatorname{Hom}_B(M,-)$ in the sense of [F8]. [F8, step 4.1] ∎
