---
id: cex-the-central-character-does-not-determine-the-primitive-ideal
kind: counterexample
title: "The central character does not determine the primitive ideal"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 3
deps: [prop-annihilators-of-simple-highest-weight-modules-are-primitive, def-primitive-ideal-of-an-enveloping-algebra, def-annihilator-ideal-of-a-lie-algebra-module, cor-antidominant-verma-modules-are-simple, def-axiom-of-choice, def-special-linear-lie-algebra-sl-two, def-verma-module, prop-casimir-eigenvalue-on-a-highest-weight-module, thm-finite-dimensional-simple-modules-are-classified-by-dominant-highest-weights, prop-weights-of-a-verma-module-lie-below-lambda, cor-central-characters-are-dot-weyl-orbits, lem-the-central-reduction-of-usl2-is-simple-away-from-finite-dimensional-characters]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: contradiction
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "P. Etingof, Representations of Lie Groups (18.757, MIT OCW 2023 full notes)"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
      locator: "Section 25.1, note after Theorem 25.4, printed pp.123-124"
    - title: "R. E. Block, The irreducible representations of the Lie algebra sl(2) and of the Weyl algebra, Adv. Math. 39 (1981) 69-110"
      url: "https://mathdept.ucr.edu/sites/default/files/2019-11/Block%20AdvMath%201981.pdf"
      locator: "Introduction, printed pp.69-74; Sections 5.1-5.2, printed pp.92-94 (Casimir normalization and Verma modules)"
---

## Statement refuted

Assume the Axiom of Choice. The assertion that a central character determines
the primitive ideal over it is false. In $U(\mathfrak{sl}_2(\mathbb C))$, for
every integer $n\ge0$ the primitive ideals $I(n)=\operatorname{Ann}L(n)$ and
$J(n)=\operatorname{Ann}M(-n-2)$ are distinct, although $L(n)$ and the simple
Verma module $M(-n-2)$ have the same central character
$\chi_n=\chi_{-n-2}$. Thus the fibre of the central-character map on primitive
ideals has at least two points over every such $\chi_n$, and the assignment
$\lambda\mapsto\operatorname{Ann}L(\lambda)$ is not injective. In particular the
fibre over the regular integral central character $\chi_0$ already has two
points.

## Facts & Assumptions

**Given:** The Axiom of Choice, $\mathfrak g=\mathfrak{sl}_2(\mathbb C)$ with Casimir $\Omega$, an integer $n\ge0$, the finite-dimensional simple module $L(n)$, and the Verma module $M(-n-2)$.

[F1] $L(n)$ is a finite-dimensional simple module, and $I(n)=\operatorname{Ann}_{U(\mathfrak g)}L(n)$ is primitive; here $\Omega:=ef+fe+\tfrac12h^2$ is the normalized central Casimir, and the central-reduction lemma also gives $Z(U(\mathfrak g))=\mathbb C[\Omega]$ and the eigenvalue $\Omega\mapsto n(n+2)/2$ on $L(n)$ ([[thm-finite-dimensional-simple-modules-are-classified-by-dominant-highest-weights]], [[prop-annihilators-of-simple-highest-weight-modules-are-primitive]], [[lem-the-central-reduction-of-usl2-is-simple-away-from-finite-dimensional-characters]]).

[F2] $M(-n-2)$ is simple — its highest weight is antidominant, $\langle\lambda+\rho,\alpha^\vee\rangle<0$ for the positive root — so $J(n)=\operatorname{Ann}_{U(\mathfrak g)}M(-n-2)$ is primitive; $\Omega$ acts on $M(-n-2)$ by $(-n-2)(-n)/2=n(n+2)/2$, and every weight space of $M(-n-2)$ is finite-dimensional with weights $(-n-2)-2k$, $k\in\mathbb Z_{\ge0}$, so $M(-n-2)$ is infinite-dimensional ([[cor-antidominant-verma-modules-are-simple]], [[def-verma-module]], [[lem-the-central-reduction-of-usl2-is-simple-away-from-finite-dimensional-characters]], [[prop-weights-of-a-verma-module-lie-below-lambda]], [[def-axiom-of-choice]]).

[F3] For $\mathfrak{sl}_2$, equal values of the character on $\Omega$ give equal central characters: $\chi_n=\chi_{-n-2}$ by [F1], [F2] and [[cor-central-characters-are-dot-weyl-orbits]], because $0$ and $-2$ (and generally $n$ and $-n-2$) lie in the same dot orbit. [F1, F2]

[F4] If $K$ is the annihilator of a module $M$, then $U(\mathfrak g)/K$ embeds into $\operatorname{End}_{\mathbb C}(M)$ and acts faithfully on $M$; the image of a finite-dimensional vector space under a linear map is finite-dimensional, since the images of a finite basis span the image ([[def-annihilator-ideal-of-a-lie-algebra-module]], [[def-primitive-ideal-of-an-enveloping-algebra]]).

[F5] If the normalized Casimir value $c$ is not $m(m+2)/2$ for any integer $m\ge0$, every Verma module with that value is simple and its annihilator is the central ideal ([[lem-the-central-reduction-of-usl2-is-simple-away-from-finite-dimensional-characters]]). A simple Verma module equals its unique simple quotient $L(\lambda)$ ([[prop-annihilators-of-simple-highest-weight-modules-are-primitive]]).

## Counterexample

**Proof technique:** contradiction.

1.1 By [F1] and [F2] both $I(n)$ and $J(n)$ are primitive ideals, and both modules have the same central character $\chi_n$ by [F3]. [F1, F2, F3]

1.2 To verify the separate noninjectivity assertion, take the distinct highest weights $1/2$ and $-5/2$. Their normalized Casimir eigenvalue is $5/8$, and their central characters agree because $Z(U(\mathfrak g))=\mathbb C[\Omega]$. This value is not a finite-dimensional Casimir value: $n(n+2)/2$ is $0$ at $n=0$ and at least $3/2$ at every integer $n\ge1$. Therefore [[lem-the-central-reduction-of-usl2-is-simple-away-from-finite-dimensional-characters]] makes both Verma modules simple and gives the same central ideal as their annihilator. Their unique simple quotients are the Verma modules themselves, so $I(1/2)=I(-5/2)$ although $1/2\ne-5/2$. [F1, F5, algebra]

1.3 Suppose $I(n)=J(n)=:K$. By [F4] the algebra $A:=U(\mathfrak g)/K$ embeds into $\operatorname{End}_{\mathbb C}L(n)$, because $K$ is the kernel of the action on $L(n)$; hence $A$ is finite-dimensional. [F1, F4, assume-contra]

2.1 Also by [F4] $A$ acts faithfully on $M(-n-2)$. Fix $0\ne m\in M(-n-2)$ and consider the map $A\to M(-n-2)$, $a\mapsto am$: it is $A$-linear because $b(am)=(ba)m$, and its image is a nonzero $A$-submodule of $M(-n-2)$, hence equals $M(-n-2)$ because $M(-n-2)$ is simple by [F2]. The images of a finite basis of $A$ thus span $M(-n-2)$, which is finite-dimensional. [step 1.3, F2, F4, algebra]

3.1 But $M(-n-2)$ is infinite-dimensional by [F2], since its weights $(-n-2)-2k$, $k\in\mathbb Z_{\ge0}$, are infinitely many distinct weights with finite-dimensional weight spaces. This contradiction shows $I(n)\ne J(n)$; the two distinct primitive ideals share the central character $\chi_n$, so a central character does not determine the primitive ideal. Taking $n=0$ exhibits two points in the fibre over the regular integral central character $\chi_0$. [step 2.1, F2, F3, discharge-contradiction] ∎
