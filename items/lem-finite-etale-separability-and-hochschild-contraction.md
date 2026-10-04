---
id: lem-finite-etale-separability-and-hochschild-contraction
kind: lemma
title: "The diagonal of a finite étale algebra contracts its positive Hochschild cochains"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - def-axiom-of-choice
  - lem-finite-etale-algebra-module-presentation-and-rank
  - thm-etale-equivalent-flat-unramified-fp
  - thm-unramified-diagonal-open-immersion
  - thm-finite-morphism-integral-closed
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
    - title: "SGA 1, Exposé I §8 and Exposé IX §1; étale lifting through nilpotent ideals"
      url: https://arxiv.org/pdf/math/0206203
    - title: "Stacks Project, Étale Morphisms §15, Theorems 15.1–15.2; alternate separability proof expanded here"
      url: https://stacks.math.columbia.edu/download/etale.pdf
---

## Statement

Assume AC. Let $D$ be a finite étale algebra over a commutative ring $A$. There exists $e=\sum_i x_i\otimes y_i\in D\otimes_A D$ with
$$\sum_i x_iy_i=1,\qquad (a\otimes1)e=(1\otimes a)e\quad(a\in D).$$
For any $D$-bimodule $M$ whose left and right $A$-actions agree, define the Hochschild differential on $A$-multilinear cochains by
$$\delta c(a_1,\ldots,a_{n+1})=a_1c(a_2,\ldots,a_{n+1})+\sum_{j=1}^{n}(-1)^j c(a_1,\ldots,a_ja_{j+1},\ldots,a_{n+1})+(-1)^{n+1}c(a_1,\ldots,a_n)a_{n+1}.$$
For $n\ge1$, $hc(a_1,\ldots,a_{n-1})=\sum_i x_i c(y_i,a_1,\ldots,a_{n-1})$ satisfies $\delta h+h\delta=\operatorname{id}$. In particular every positive-degree cocycle is a coboundary. If $c$ vanishes whenever an input is $1$, so does $hc$ in positive degree.

## Facts & Assumptions

**Given:** AC, the algebra $D$ and its bimodule $M$, with agreeing left and right $A$-actions.

[F1] A finite étale map has open diagonal and is separated, so its diagonal is open and closed ([[thm-etale-equivalent-flat-unramified-fp]], [[thm-unramified-diagonal-open-immersion]], [[thm-finite-morphism-integral-closed]]). A finite étale algebra is finite projective ([[lem-finite-etale-algebra-module-presentation-and-rank]]). AC is inherited through these suppliers ([[def-axiom-of-choice]]).

## Proof

1.1 The open and closed diagonal in $\operatorname{Spec}(D\otimes_A D)$ corresponds to an idempotent $e$ on whose summand the multiplication map $\mu:D\otimes_A D\to D$ is an isomorphism, while the complementary summand is its kernel. Hence $\mu(e)=1$. For $a\in D$, $a\otimes1-1\otimes a$ is in that kernel and therefore annihilates $e$. Expressing the tensor $e$ as a finite sum gives the asserted identities. [F1, construct]

2.1 Agreement of the two $A$-actions makes $\delta$ preserve $A$-multilinearity and makes the tensor formula for $h$ well-defined. Expand $\delta(hc)+h(\delta c)$ using the displayed differential. The initial term in $h\delta c$ is $\sum_i x_i y_i c(a_1,\ldots,a_n)=c(a_1,\ldots,a_n)$. Every term combining two adjacent inputs cancels with its counterpart of opposite sign in $\delta hc$, and the last right-action terms cancel as well. The remaining pair is $a_1\sum_i x_i c(y_i,a_2,\ldots)-\sum_i x_i c(y_i a_1,a_2,\ldots)$, which is zero by $(a_1\otimes1)e=(1\otimes a_1)e$ and multilinearity. Thus $\delta h+h\delta=\operatorname{id}$ for $n\ge1$. For a cocycle $c$, this gives $c=\delta(hc)$. An input equal to $1$ after the inserted first input still makes each summand zero, proving the normalization assertion. [step 1.1, algebra] ∎
