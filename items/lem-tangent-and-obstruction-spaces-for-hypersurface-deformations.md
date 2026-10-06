---
id: "lem-tangent-and-obstruction-spaces-for-hypersurface-deformations"
kind: "lemma"
title: "Tangent and obstruction spaces for hypersurface deformations"
status: draft
origin: pipeline
pipeline_run: "frontier-40-geometry-braids-rep-27"
dependency_level: 17
justified_by: []
aliases: []
deps:
  - "thm-jacobian-criterion-smooth-morphism"
  - "def-twisting-sheaf-proj"
  - "thm-cohomology-projective-space-twisting-sheaves"
  - "lem-hypersurface-deformations-classified-by-equation-deformations"
  - "lem-cohomology-of-hypersurface-twists"
  - "def-embedded-deformations-of-a-closed-subscheme"
  - "cor-deformation-cohomology-of-a-smooth-scheme"
  - "thm-conormal-sequence-closed-immersion"
  - "lem-smooth-closed-immersion-regular-conormal-sequence"
  - "def-internal-hom-qc-sheaves"
  - "def-locally-free-sheaf-finite-rank"
  - "def-degree-projective-hypersurface"
  - "def-smooth-morphism-schemes"
  - "def-axiom-of-choice"
proof_strategy: "direct"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  precheck: "pass"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Robin Hartshorne, Lectures on Deformation Theory (Berkeley Math 274 draft, 2004/2005)"
      url: "http://math.berkeley.edu/~robin/math274root.pdf"
      locator: "Chapter 1 Theorem 1.1(b),(c) and discussion (printed pages 1-3); Chapter 3 Section 21 Example 21.4 and its continuation, with the quadric row h^0(N)=9 (printed pages 112-113). Read 2026-10-06."
    - title: "The Stacks Project, The Cotangent Complex, complete chapter (Chapter 92)"
      url: "https://stacks.math.columbia.edu/download/cotangent.pdf"
      locator: "Lemma 92.9.1 (tag 08R5): L = Omega[0] for a smooth morphism, used for the abstract deformation spaces (printed pages 19-21, read 2026-10-05)"
---

## Statement

Assume the Axiom of Choice, inherited from the projective-space cohomology
suppliers ([[def-axiom-of-choice]]). Let $k$ be a field, $n\ge2$, $d\ge1$, let
$f\in S=k[x_0,\dots,x_n]$ be homogeneous of degree $d$, let
$X=Z(f)\subseteq\mathbb P^n_k$, and assume $X$ smooth over $k$ of pure
dimension $n-1$. Then the embedded deformation functor of $X$ in the fixed
$\mathbb P^n_k$ ([[def-embedded-deformations-of-a-closed-subscheme]]) has:

1. tangent space $H^0(X,\mathcal N_{X/\mathbb P^n})$ at the trivial
   deformation, and $\mathcal N_{X/\mathbb P^n}\cong\mathcal O_X(d)$, so the
   tangent space is
   $$H^0(X,\mathcal N_{X/\mathbb P^n})\cong H^0(X,\mathcal O_X(d))\cong(S/(f))_d,\qquad \dim_k=\binom{n+d}{n}-1;$$
2. vanishing obstruction space
   $H^1(X,\mathcal N_{X/\mathbb P^n})=H^1(X,\mathcal O_X(d))=0$, with the
   embedded deformation functor formally smooth and unobstructed: every
   embedded deformation over a small extension extends;
3. for the abstract deformation functor of $X$ as a $k$-scheme instead the
   tangent space is
   $\operatorname{Ext}^1_{\mathcal O_X}(L_{X/k},\mathcal O_X)\cong H^1(X,T_{X/k})$
   and the obstruction group is $H^2(X,T_{X/k})$
   ([[cor-deformation-cohomology-of-a-smooth-scheme]]); the two problems are
   related by the normal bundle sequence
   $0\to T_X\to i^*T_{\mathbb P^n}\to\mathcal N_{X/\mathbb P^n}\to0$
   ([[thm-conormal-sequence-closed-immersion]]), which need not have vanishing
   maps, so the embedded and abstract deformation spaces are different in
   general.

## Facts & Assumptions

**Given:** a field $k$, $n\ge2$, $d\ge1$, a homogeneous form $f\in S$ of degree $d$ with $X=Z(f)\subseteq\mathbb P^n_k$ smooth of pure dimension $n-1$, and the Axiom of Choice.

[F1] The embedded deformation functor of $X$ in $\mathbb P^n$ is isomorphic to the equation-deformation functor $R\mapsto\{F\in(S\otimes_kR)_d:F\equiv f\bmod\mathfrak m_R\}/(R^\times)$, it is formally smooth and unobstructed, and its tangent space at the trivial deformation is $(S/(f))_d\cong H^0(X,\mathcal O_X(d))$ of dimension $\binom{n+d}{n}-1$. ([[lem-hypersurface-deformations-classified-by-equation-deformations]])

[F2] $\mathcal N_{X/\mathbb P^n}=\mathcal Hom_{\mathcal O_X}(\mathcal I/\mathcal I^2,\mathcal O_X)\cong\mathcal O_X(d)$ with $\mathcal I/\mathcal I^2\cong\mathcal O_X(-d)$ invertible, $H^0(X,\mathcal O_X(d))\cong(S/(f))_d$ of the stated dimension, and $H^1(X,\mathcal O_X(d))=0$. ([[lem-cohomology-of-hypersurface-twists]], [[def-internal-hom-qc-sheaves]], [[def-locally-free-sheaf-finite-rank]], [[def-degree-projective-hypersurface]])

[F3] For the smooth $k$-scheme $X$ the abstract deformation tangent space is $\operatorname{Ext}^1_{\mathcal O_X}(L_{X/k},\mathcal O_X)\cong H^1(X,T_{X/k})$ and the obstruction group is $H^2(X,T_{X/k})$. ([[cor-deformation-cohomology-of-a-smooth-scheme]])

[F4] For the smooth closed immersion $i:X\hookrightarrow\mathbb P^n_k$ the normal bundle sequence $0\to T_X\to i^*T_{\mathbb P^n}\to\mathcal N_{X/\mathbb P^n}\to0$ is exact. ([[thm-conormal-sequence-closed-immersion]], [[lem-smooth-closed-immersion-regular-conormal-sequence]], [[def-smooth-morphism-schemes]])

[F5] Projective space is smooth by its polynomial charts and the Jacobian criterion with no relations ([[thm-jacobian-criterion-smooth-morphism]]). For $\mathbb P^1_k$, $H^1(\mathbb P^1_k,\mathcal O(2))=0$. ([[thm-cohomology-projective-space-twisting-sheaves]])

## Proof

**Proof technique:** read the tangent and obstruction spaces of the embedded functor from the equation functor and the normal-sheaf computation, and compare with the abstract deformation spaces through the normal bundle sequence.

1.1 Tangent space and normal sheaf. By [F1] the tangent space of the embedded deformation functor at the trivial deformation is $(S/(f))_d\cong H^0(X,\mathcal O_X(d))$, of dimension $\binom{n+d}{n}-1$; by [F2] the normal sheaf is $\mathcal N_{X/\mathbb P^n}\cong\mathcal O_X(d)$, so $H^0(X,\mathcal N_{X/\mathbb P^n})\cong H^0(X,\mathcal O_X(d))$ has the same dimension. This proves part (1). [F1, F2, given]

1.2 Obstruction space and formal smoothness. By [F2], $H^1(X,\mathcal N_{X/\mathbb P^n})=H^1(X,\mathcal O_X(d))=0$; independently, [F1] proves that the equation functor is formally smooth and unobstructed, so every embedded deformation over a small extension extends. This proves part (2). [F1, F2, given]

2.1 Comparison with abstract deformations. By [F3] the abstract deformation functor has tangent space $H^1(X,T_{X/k})$ and obstruction group $H^2(X,T_{X/k})$; [F4] provides the normal bundle sequence relating $T_X$, $i^*T_{\mathbb P^n}$ and $\mathcal N_{X/\mathbb P^n}$. No injectivity or surjectivity of the comparison map between embedded and abstract deformations is asserted, since the maps in the normal bundle sequence need not vanish; the two deformation problems are therefore different in general, as claimed in part (3). [F2, F3, F4, step 1.1]

3.1 For an explicit difference, take the line $X=Z(x_0)\subset\mathbb P^2_k$, which is $\mathbb P^1_k$. Its embedded tangent space has dimension $\binom{3}{2}-1=2$ by step 1.1. On the two standard charts of $\mathbb P^1$, use coordinates $u$ and $v=u^{-1}$. The tangent frames satisfy $\partial_v=-u^2\partial_u$, so after changing one frame by $-1$ the tangent line bundle is $\mathcal O(2)$ (the standard twisting transition is $u^2$). Thus [F5] gives $H^1(X,T_X)=0$, while the embedded tangent space has dimension two. This proves the claimed difference in general without identifying the two functors. Choice is inherited from the cited suppliers. [F3, F5, step 1.1, algebra] ∎ 