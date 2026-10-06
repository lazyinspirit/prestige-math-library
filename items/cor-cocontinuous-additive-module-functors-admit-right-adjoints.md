---
id: cor-cocontinuous-additive-module-functors-admit-right-adjoints
kind: corollary
title: "Additive cocontinuous module functors admit right adjoints"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps:
  - thm-eilenberg-watts-for-arbitrary-unital-rings
  - lem-tensor-hom-adjunction-for-bimodules
  - def-adjunction-by-unit-counit-and-triangle-identities
  - def-horizontal-composition-and-whiskering-of-natural-transformations
  - def-natural-isomorphism
  - def-vertical-composition-of-natural-transformations
  - def-bimodule
  - cor-left-adjoints-preserve-colimits
justified_by: []
aliases: []
dependency_level: 4
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

Let $A,B$ be unital rings. Every additive cocontinuous functor
$F:A\text{-}\mathbf{Mod}\to B\text{-}\mathbf{Mod}$ admits a right adjoint
$B\text{-}\mathbf{Mod}\to A\text{-}\mathbf{Mod}$: if $M$ is a $(B,A)$-bimodule
with $F\cong T_M$, then $F$ is left adjoint to
$\operatorname{Hom}_B(M,-)$. In particular $F$ is a left adjoint, so it
preserves every colimit that exists. No commutativity and no choice are used.

## Facts & Assumptions

**Given:** Unital rings $A,B$, an additive cocontinuous functor
$F:A\text{-}\mathbf{Mod}\to B\text{-}\mathbf{Mod}$, and
$G:=\operatorname{Hom}_B(M,-)$ for $M:=F(A)$.

[F1] $M=F(A)$ is a $(B,A)$-bimodule and $F$ is naturally isomorphic to
$T_M=M\otimes_A-$
([[thm-eilenberg-watts-for-arbitrary-unital-rings]], [[def-bimodule]]).

[F2] $T_M$ is left adjoint to $\operatorname{Hom}_B(M,-)$: there are a unit
$\eta:1\Rightarrow GT_M$ and a counit $\varepsilon:T_MG\Rightarrow1$
satisfying the triangle identities
([[lem-tensor-hom-adjunction-for-bimodules]]).

[F3] An adjunction is a unit and counit satisfying
$(\varepsilon F)\circ(F\eta)=1_F$ and $(G\varepsilon)\circ(\eta G)=1_G$;
componentwise, $\varepsilon_{FX}\circ F(\eta_X)=1_{FX}$ and
$G(\varepsilon_Y)\circ\eta_{GY}=1_{GY}$
([[def-adjunction-by-unit-counit-and-triangle-identities]]).

[F4] Left whiskering $H\alpha$ has components $H(\alpha_A)$ and right
whiskering $\alpha K$ has components $\alpha_{KB}$
([[def-horizontal-composition-and-whiskering-of-natural-transformations]]).

[F5] A natural isomorphism $\sigma$ has an inverse natural transformation
$\sigma^{-1}$ with $\sigma^{-1}\circ\sigma=1$ and $\sigma\circ\sigma^{-1}=1$
([[def-natural-isomorphism]]); vertical composition is componentwise
([[def-vertical-composition-of-natural-transformations]]).

[F6] A left adjoint preserves every colimit that exists
([[cor-left-adjoints-preserve-colimits]]).

## Proof

**Proof technique:** direct.

1.1 By [F1] there is a natural isomorphism $\sigma:T_M\Rightarrow F$ with inverse $\sigma^{-1}:F\Rightarrow T_M$, and $M$ is a $(B,A)$-bimodule. By [F2] there are a unit $\eta:1\Rightarrow GT_M$ and a counit $\varepsilon:T_MG\Rightarrow1$ satisfying the triangle identities of [F3] for the adjunction $T_M\dashv G$. [F1, F2, F5]

2.1 Transfer: put $\eta':= (G\sigma)\circ\eta:1\Rightarrow GF$ and $\varepsilon':=\varepsilon\circ(\sigma^{-1}G):FG\Rightarrow1$, using the whiskerings of [F4]; these are natural transformations by [F4] and [F5]. They satisfy the triangle identities of [F3]: at $X$, using naturality of $\sigma^{-1}$ at $G(\sigma_X)$, naturality of $\sigma$ at $\eta_X$ and naturality of $\varepsilon$ at $\sigma_X$, one computes $\varepsilon'_{F(X)}\circ F(\eta'_X)=\varepsilon_{F(X)}\circ(\sigma^{-1})_{G(F(X))}\circ F(G(\sigma_X))\circ F(\eta_X)=\varepsilon_{F(X)}\circ T_M(G(\sigma_X))\circ T_M(\eta_X)\circ\sigma_X^{-1}=\sigma_X\circ\varepsilon_{T_M(X)}\circ T_M(\eta_X)\circ\sigma_X^{-1}=\sigma_X\circ\sigma_X^{-1}=1_{F(X)}$; and at $Y$ one computes $G(\varepsilon'_Y)\circ\eta'_{G(Y)}=G(\varepsilon_Y)\circ G((\sigma^{-1})_{G(Y)})\circ G(\sigma_{G(Y)})\circ\eta_{G(Y)}=G(\varepsilon_Y)\circ\eta_{G(Y)}=1_{G(Y)}$, where the middle step cancels the inverse components of [F5]. Hence $F\dashv G$ in the sense of [F3]. [F3, F4, F5, step 1.1]

3.1 By step 2.1 the functor $F$ admits $G=\operatorname{Hom}_B(M,-)$ as right adjoint, so it is a left adjoint and [F6] applies; in particular it preserves every colimit that exists, consistently with its assumed cocontinuity. The transfer used only the displayed units, counits and inverse components, so no commutativity and no choice are involved. [F6, step 2.1] ∎
