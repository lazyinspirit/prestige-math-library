---
id: lem-rees-module-finiteness-and-stable-filtrations
kind: lemma
title: "Over a Noetherian ring, an ideal filtration is stable exactly when its Rees module is finite, and the Rees algebra is Noetherian"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-rees-algebra-and-rees-module, def-graded-ring-and-graded-module, thm-finite-generation-and-finite-presentation-over-a-noetherian-ring, thm-noetherian-ring-ideal-characterisations, cor-finite-variable-polynomial-ring-noetherian]
aliases: []
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Allen B. Altman and Steven L. Kleiman, A Term of Commutative Algebra, Lemma (20.17)"
      url: "https://web.mit.edu/18.705/www/12Nts.pdf"
    - title: "Stacks Project, Sections 10.51 and 10.70"
      url: "https://stacks.math.columbia.edu/tag/00IJ"
---

## Statement

Let $R$ be a Noetherian commutative ring, let $I\subset R$ be an ideal, and let
$M=M_0\supseteq M_1\supseteq\cdots$ be a filtration of a finite $R$-module $M$
such that $IM_n\subseteq M_{n+1}$ for all $n$.

The filtration is **$I$-stable** when $M_{n+1}=IM_n$ for all sufficiently large
$n$. Then:

1. the filtration is $I$-stable if and only if its Rees module
   $\mathcal R(M_\bullet)$ is a finite graded module over the Rees algebra
   $\mathcal R(I)$;
2. the Rees algebra $\mathcal R(I)$ is Noetherian.

## Facts & Assumptions

**Given:** A Noetherian commutative ring $R$, an ideal $I\subset R$, and a finite $R$-module $M$ with filtration $M_\bullet$ as above.

[L1] The Rees algebra and Rees module are the graded objects $$ \mathcal R(I)=\bigoplus_{n\ge0}I^nt^n,\qquad \mathcal R(M_\bullet)=\bigoplus_{n\ge0}M_nt^n $$ ([[def-rees-algebra-and-rees-module]], [[def-graded-ring-and-graded-module]]).

[L2] Over a Noetherian ring, every finitely generated module is Noetherian, so each of its submodules is finitely generated ([[thm-finite-generation-and-finite-presentation-over-a-noetherian-ring]]).

[L3] In a Noetherian ring every ideal is finitely generated ([[thm-noetherian-ring-ideal-characterisations]]).

[L4] A polynomial ring in finitely many variables over a Noetherian commutative ring is Noetherian ([[cor-finite-variable-polynomial-ring-noetherian]]).

## Proof

**Proof technique:** direct.


1.1 If the filtration is $I$-stable from some index $c$ onward, then $ \mathcal R(M_\bullet)=\sum_{n=0}^c \mathcal R(I)\cdot (M_nt^n), $ because for $n>c$ every element of $M_nt^n$ is a product of an element of $I^{n-c}t^{n-c}$ with one of $M_ct^c$. Since $R$ is Noetherian and $M$ is finite, [L2] makes each submodule $M_n\subseteq M$ finitely generated. Therefore finitely many homogeneous elements in degrees at most $c$ generate $\mathcal R(M_\bullet)$ over $\mathcal R(I)$. [L1, L2, given, algebra]


1.2 Conversely, suppose $\mathcal R(M_\bullet)$ is generated over $\mathcal R(I)$ by homogeneous elements lying in degrees at most $c$. For $n\ge c$, every element of $M_{n+1}t^{n+1}$ is therefore a sum of products $ (I^{n+1-d}t^{n+1-d})(m_dt^d) $ with $d\le c$, hence lies in $I M_nt^{n+1}$. Thus $M_{n+1}\subseteq IM_n$. The reverse inclusion is part of the filtration hypothesis, so $M_{n+1}=IM_n$ for all $n\ge c$. [L1, given, algebra]


1.3 By [L3], choose generators $I=(f_1,\ldots,f_s)$. Sending $X_i$ to $f_it$ defines a surjective graded map $ R[X_1,\ldots,X_s]\twoheadrightarrow \mathcal R(I). $ By [L4] its source is Noetherian, so its quotient $\mathcal R(I)$ is Noetherian. [L3, L4, construct]


2.1 Steps 1.1 and 1.2 prove the equivalence, and step 1.3 proves that $\mathcal R(I)$ is Noetherian. [step 1.1, step 1.2, step 1.3] ∎
