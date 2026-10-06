---
id: lem-canonical-eilenberg-watts-comparison-is-balanced-and-natural
kind: lemma
title: "The canonical comparison to the tensor functor of $F(A)$ is balanced and natural"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps:
  - lem-evaluation-on-the-regular-module-has-a-commuting-right-action
  - thm-universal-property-of-module-tensor-products
  - thm-bimodule-actions-induced-on-tensor-products
  - def-natural-transformation
  - def-balanced-and-bilinear-maps
  - def-left-and-right-modules
  - prop-functoriality-of-module-tensor-products
justified_by: []
aliases: []
dependency_level: 1
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

Let $A,B$ be unital rings, let
$F:A\text{-}\mathbf{Mod}\to B\text{-}\mathbf{Mod}$ be additive, and let $M=F(A)$
carry the $(B,A)$-bimodule structure of
[[lem-evaluation-on-the-regular-module-has-a-commuting-right-action]]. For
$x\in X$ let $\ell_x:A\to X$, $\ell_x(a)=ax$. Then

$$\beta_X:M\times X\to F(X),\qquad \beta_X(m,x)=F(\ell_x)(m),$$

is balanced ([[def-balanced-and-bilinear-maps]]) and $B$-linear in $m$, so it
induces a unique group homomorphism

$$\tau_X:M\otimes_AX\to F(X),\qquad \tau_X(m\otimes x)=F(\ell_x)(m),$$

and each $\tau_X$ is $B$-linear. Moreover
$\tau:M\otimes_A-\Rightarrow F$ is natural:
$F(u)\circ\tau_X=\tau_Y\circ(1_M\otimes u)$ for every left $A$-linear
$u:X\to Y$ ([[def-natural-transformation]]). The construction of $\tau$ chooses
no presentation of $X$ and no elements.

## Facts & Assumptions

**Given:** Unital rings $A$, $B$, an additive functor
$F:A\text{-}\mathbf{Mod}\to B\text{-}\mathbf{Mod}$, the $(B,A)$-bimodule
$M=F(A)$ with $ma=F(r_a)(m)$ for $r_a(x)=xa$, a left $A$-module $X$, and
$x,x'\in X$, $a\in A$, $m\in M$, $b\in B$.

[F1] Left $A$-modules satisfy the module axioms, and right multiplication
$r_a(x)=xa$ is an endomorphism of the left $A$-module $A$
([[def-left-and-right-modules]]).

[F2] The formula $ma=F(r_a)(m)$ makes $M=F(A)$ a $(B,A)$-bimodule, so the
right $A$-action and the left $B$-action are defined and commute:
$b(ma)=(bm)a$
([[lem-evaluation-on-the-regular-module-has-a-commuting-right-action]]).

[F3] A balanced map $M\times X\to W$ into an abelian group is additive in each
variable and satisfies $c(ma,x)=c(m,ax)$
([[def-balanced-and-bilinear-maps]]).

[F4] Every balanced map $b:M\times X\to W$ into an abelian group factors
uniquely as $b=\overline b\circ\tau$ through the universal balanced map
$\tau(m,x)=m\otimes x$ ([[thm-universal-property-of-module-tensor-products]]).

[F5] If $M$ is a $(B,A)$-bimodule, then $M\otimes_AX$ carries a left
$B$-module structure with $b(m\otimes x)=(bm)\otimes x$
([[thm-bimodule-actions-induced-on-tensor-products]]).

[F6] A natural transformation $\alpha:F\Rightarrow G$ is a family of components
satisfying $G(u)\circ\alpha_X=\alpha_Y\circ F(u)$ for every $u:X\to Y$
([[def-natural-transformation]]).

[F7] Module maps induce tensor maps with
$(1_M\otimes u)(m\otimes x)=m\otimes u(x)$, functorially
([[prop-functoriality-of-module-tensor-products]]).

## Proof

**Proof technique:** direct.

1.1 For each $x\in X$ the map $\ell_x:A\to X$, $\ell_x(a)=ax$, is left $A$-linear, since $(a+a')x=ax+a'x$ and $(ca)x=c(ax)$; moreover $\ell_{x+x'}=\ell_x+\ell_{x'}$ and $\ell_{ax}=\ell_x\circ r_a$, because $\ell_{ax}(c)=(ca)x=c(ax)=(\ell_x\circ r_a)(c)$. [F1]

2.1 The pairing $\beta_X(m,x)=F(\ell_x)(m)$ is well defined because $F(\ell_x):M\to F(X)$ is a $B$-module homomorphism; it is additive in $m$ and $B$-linear in $m$ because $F(\ell_x)$ is, and additive in $x$ because $F(\ell_{x+x'})=F(\ell_x)+F(\ell_{x'})$ by additivity of $F$ and step 1.1. It is balanced: $\beta_X(ma,x)=F(\ell_x)(ma)=F(\ell_x)\bigl(F(r_a)(m)\bigr)=F(\ell_x\circ r_a)(m)=F(\ell_{ax})(m)=\beta_X(m,ax)$ by step 1.1, [F2] and functoriality. [F1, F2, F3, step 1.1]

3.1 By [F4] the balanced pairing $\beta_X$ induces a unique group homomorphism $\tau_X:M\otimes_AX\to F(X)$ with $\tau_X(m\otimes x)=F(\ell_x)(m)$. It is $B$-linear: by [F5] the left $B$-action on $M\otimes_AX$ satisfies $b(m\otimes x)=(bm)\otimes x$, and $\tau_X(b(m\otimes x))=F(\ell_x)(bm)=b\,F(\ell_x)(m)=b\,\tau_X(m\otimes x)$, because $F(\ell_x)$ is $B$-linear and elementary tensors generate; both sides are additive in the tensor variable, so equality on elementary tensors suffices. [F4, F5, step 2.1]

4.1 Naturality: for left $A$-linear $u:X\to Y$ one has $u\circ\ell_x=\ell_{u(x)}$, since $u(ax)=a\,u(x)$, hence $F(u)\circ F(\ell_x)=F(\ell_{u(x)})$ by functoriality. Evaluating at $m$ and using $[F7]$ gives $F(u)\bigl(\tau_X(m\otimes x)\bigr)=F(\ell_{u(x)})(m)=\tau_Y\bigl(m\otimes u(x)\bigr)=\tau_Y\bigl((1_M\otimes u)(m\otimes x)\bigr)$; both sides are additive in the tensor variable and agree on elementary tensors, so $F(u)\circ\tau_X=\tau_Y\circ(1_M\otimes u)$. [F6, F7, step 3.1]

5.1 Steps 3.1 and 4.1 show that the components $\tau_X$ are $B$-linear maps assembling into a natural transformation $\tau:M\otimes_A-\Rightarrow F$ with $\tau_X(m\otimes x)=F(\ell_x)(m)$; the formulas used only the given element $x$ and the module $A$, never a presentation of $X$, and no element of an auxiliary set is selected, so no presentation and no choice are involved. [F6, step 3.1, step 4.1] ∎
