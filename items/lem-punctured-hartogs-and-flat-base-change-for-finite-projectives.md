---
id: lem-punctured-hartogs-and-flat-base-change-for-finite-projectives
kind: lemma
title: "Depth two gives Hartogs extension on a punctured affine spectrum"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - def-axiom-of-choice
  - cor-regular-sequences-permutable-local
  - thm-associativity-of-balanced-tensor-products
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "SGA 1, Exposé X §3, purity and its dimension-two discriminant proof"
      url: https://arxiv.org/pdf/math/0206203
    - title: "Stacks Project, Fundamental Groups §§19–21, especially Lemmas 20.7 and 21.3–21.4"
      url: https://stacks.math.columbia.edu/download/pione.pdf
    - title: "Stacks Project, Algebraic and Formal Geometry §15, Lemmas 15.1 and 15.5; regular-case argument expanded here"
      url: https://stacks.math.columbia.edu/download/algebraization.pdf
---

## Statement

Assume AC. Let $(A,\mathfrak m)$ be a Noetherian local ring and $U=\operatorname{Spec}A\setminus\{\mathfrak m\}$. If a finite $A$-module $M$ admits a regular sequence $x,y\in\mathfrak m$, restriction gives
$$M\xrightarrow{\sim}\Gamma(U,\widetilde M).$$
In particular if $A$ has depth at least two then $\Gamma(U,\mathcal O_U)=A$. Under the same hypothesis $\operatorname{depth}A\ge2$, if $C$ is any flat $A$-algebra and $P$ is finite projective over $C$, then $P=\Gamma(U_C,\widetilde P)$, where $U_C=U\times_A\operatorname{Spec}C$. Under that hypothesis, restriction of finite projective $C$-modules to $U_C$ is fully faithful.

## Facts & Assumptions

**Given:** AC, the ring, punctured spectrum and modules in the Statement.

[F1] A finite-module regular sequence in the maximal ideal is permutable ([[cor-regular-sequences-permutable-local]]). Tensor products have their usual associative identifications ([[thm-associativity-of-balanced-tensor-products]]). AC is inherited from [F1] ([[def-axiom-of-choice]]).

## Proof

1.1 By [F1], both $x$ and $y$ act injectively on $M$. Moreover $y$ acts injectively on $M/x^rM$ for every $r\ge1$: its filtration by the powers of $x$ has successive quotients isomorphic to $M/xM$, on which $y$ is injective. Thus, inside $M_{xy}$, the intersection $M_x\cap M_y$ is $M$. Indeed if $a/x^r=b/y^t$, injectivity of $xy$ gives $y^t a=x^r b$ after clearing denominators. Injectivity of $y^t$ on $M/x^rM$ gives $a=x^r c$, so the common element is $c\in M$. [F1, algebra]

2.1 A section of $\widetilde M$ on $U$ restricts to elements of $M_x$ and $M_y$ agreeing in $M_{xy}$, hence comes from some $c\in M$ by step 1.1. The difference from the section defined by $c$ vanishes on $D(x)$. On any affine principal open contained in $U$, an element whose localization at $x$ is zero is killed by a power of $x$; injectivity of $x$ on the localized module forces it to vanish. Thus the difference vanishes on all of $U$. Conversely $M\to M_x$ is injective, so restriction is injective. This proves the Hartogs assertion. [step 1.1, algebra]

3.1 Assume $\operatorname{depth}A\ge2$ for these remaining assertions. Generate $\mathfrak m$ by $a_1,\ldots,a_s$, so that $U$ is covered by the finitely many affine opens $D(a_i)$. Sections of $\widetilde M$ are the kernel of the difference of the two maps $\prod_i M_{a_i}\rightrightarrows\prod_{i,j}M_{a_ia_j}$. A flat base change commutes with this finite kernel and these localizations. For $M=A$, step 2.1 therefore gives $\Gamma(U_C,\mathcal O)=C$. A finite projective $P$ is an idempotent summand of $C^r$, so applying that idempotent to the equality of sections gives $\Gamma(U_C,\widetilde P)=P$. The module $\operatorname{Hom}_C(P,Q)$ for two finite projectives is again finite projective (it is $P^*\otimes_C Q$); its sections on $U_C$ are therefore exactly its module elements. This proves full faithfulness. [F1, step 2.1, algebra] ∎
