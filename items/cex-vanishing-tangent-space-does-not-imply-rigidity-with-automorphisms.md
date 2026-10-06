---
id: "cex-vanishing-tangent-space-does-not-imply-rigidity-with-automorphisms"
kind: "counterexample"
title: "Vanishing deformation tangent space does not force rigidity of the deformation groupoid"
status: draft
origin: pipeline
pipeline_run: "frontier-40-geometry-braids-rep-27"
dependency_level: 17
justified_by: []
aliases: []
deps:
  - "thm-jacobian-criterion-smooth-morphism"
  - "cor-vanishing-ext-one-implies-rigidity-of-deformation-classes"
  - "lem-cotangent-complex-truncation-and-smooth-case"
  - "lem-ext-of-locally-free-sheaf-via-cohomology"
  - "lem-differentials-polynomial-algebra-free"
  - "thm-qc-sheaf-affine-higher-cohomology-vanishes"
  - "thm-obstructions-lie-in-ext-two-cotangent-complex"
  - "lem-affine-deformations-obstruction-and-torsor"
  - "def-infinitesimal-deformation-functor-over-square-zero-extension"
  - "def-derivation-algebra"
  - "def-axiom-of-choice"
  - "thm-choice-implies-dependent-implies-countable-choice"
proof_strategy: "direct"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  precheck: "pass"
sources:
  references:
    - title: "The Stacks Project, The Cotangent Complex, complete chapter (Chapter 92)"
      url: "https://stacks.math.columbia.edu/download/cotangent.pdf"
      locator: "Lemma 92.16.1(3) and Lemma 92.21.1(3): automorphisms of a deformation lift form Ext^0 = Der (printed pages 25-28 and 30-33, read 2026-10-05)"
    - title: "Edoardo Sernesi, An overview of classical deformation theory"
      url: "http://www.mat.uniroma3.it/users/sernesi/sernesioverviewdefth.pdf"
      locator: "Section 2b (pp. 5-6): automorphisms of a first-order thickening inducing the identity correspond to derivations, while H^1(X,Theta_X)=0 forces triviality of deformation classes (read 2026-10-05)"
---

## Statement refuted

**Statement refuted.** Let $k$ be a field and let $X$ be a flat, locally
finitely presented $k$-scheme with
$\operatorname{Ext}^1_{\mathcal O_X}(L_{X/k},\mathcal O_X)=0$. Then the
deformation groupoid of $X$ is trivial: every deformation of $X$ over every
local Artin $k$-algebra with residue field $k$ is isomorphic to the trivial
deformation by a unique isomorphism, and in particular the trivial deformation
has no non-identity automorphisms reducing to the identity modulo the maximal
ideal.

## Facts & Assumptions

**Given:** a field $k$, the affine line $X=\mathbb A^1_k=\operatorname{Spec}k[x]$, and the Axiom of Choice.

[F1] The presentation $k[x]=k[t]/(0)$ has no relations, so its empty Jacobian minor is $1$; the Jacobian criterion makes $\mathbb A^1_k$ smooth over $k$ ([[thm-jacobian-criterion-smooth-morphism]]). Also $\Omega^1_{\mathbb A^1_k/k}\cong\mathcal O_{\mathbb A^1_k}$ is free of rank one; hence $L_{X/k}\simeq\Omega^1_{X/k}[0]$. ([[lem-differentials-polynomial-algebra-free]], [[lem-cotangent-complex-truncation-and-smooth-case]])

[F2] For a locally free finite-rank $F$ one has $\operatorname{Ext}^i_{\mathcal O_X}(F,M)\cong H^i(X,\mathcal Hom(F,M))$; in particular $\operatorname{Ext}^1(L_{X/k},\mathcal O_X)\cong H^1(X,\mathcal O_X)$ for $F=\Omega^1_{X/k}\cong\mathcal O_X$. ([[lem-ext-of-locally-free-sheaf-via-cohomology]])

[F3] Higher quasi-coherent cohomology of the affine scheme $\mathbb A^1_k$ vanishes, so $H^1(\mathbb A^1_k,\mathcal O)=0$. ([[thm-qc-sheaf-affine-higher-cohomology-vanishes]])

[F4] Every deformation of $X=\mathbb A^1_k$ over every local Artin $k$-algebra with residue field $k$ is isomorphic to the trivial deformation, because $\operatorname{Ext}^1_{\mathcal O_X}(L_{X/k},\mathcal O_X)=0$. ([[cor-vanishing-ext-one-implies-rigidity-of-deformation-classes]])

[F5] The automorphism group of a deformation lift over a small extension is $\operatorname{Ext}^0_{\mathcal O_X}(L_{X/A},\mathcal O_X\otimes_AI)\cong\operatorname{Der}_A(\mathcal O_X,\mathcal O_X\otimes_AI)$, and infinitesimal automorphisms of the trivial deformation over $k[\epsilon]$ are exactly the $k[\epsilon]$-algebra automorphisms reducing to the identity. ([[thm-obstructions-lie-in-ext-two-cotangent-complex]], [[lem-affine-deformations-obstruction-and-torsor]], [[def-derivation-algebra]], [[def-infinitesimal-deformation-functor-over-square-zero-extension]])

## Counterexample

**Proof technique:** compute the vanishing of Ext^1 for the affine line, exhibit an explicit non-identity infinitesimal automorphism of the trivial deformation, and then use rigidity of deformation classes.

1.1 The affine line has vanishing deformation tangent space. The affine line is quasi-compact and separated, so it satisfies the geometric hypotheses of [F4]. By [F1], $L_{X/k}\simeq\Omega^1_{X/k}[0]\cong\mathcal O_X[0]$, so [F2] and [F3] give $\operatorname{Ext}^1_{\mathcal O_X}(L_{X/k},\mathcal O_X)\cong H^1(\mathbb A^1_k,\mathcal O_{\mathbb A^1_k})=0$. [F1, F2, F3]

1.2 A non-identity infinitesimal automorphism. Consider the trivial deformation $\operatorname{Spec}k[\epsilon][x]$ over the dual numbers and the $k[\epsilon]$-algebra endomorphism $\sigma\colon k[\epsilon][x]\to k[\epsilon][x]$, $x\mapsto x+\epsilon x^2$. It is a well-defined $k[\epsilon]$-algebra map because $x+\epsilon x^2$ is a polynomial; its inverse is $\tau\colon x\mapsto x-\epsilon x^2$, since $\sigma(\tau(x))=x+\epsilon x^2-\epsilon(x+\epsilon x^2)^2=x+\epsilon x^2-\epsilon x^2=x$ and likewise $\tau(\sigma(x))=x$ because $\epsilon^2=0$. Moreover $\sigma$ reduces to the identity modulo $\epsilon$ but $\sigma(x)-x=\epsilon x^2\ne0$, so $\sigma$ is a non-identity automorphism of the trivial deformation reducing to the identity. [F5, given, algebra]

2.1 All deformation classes are trivial. Since $\operatorname{Ext}^1_{\mathcal O_X}(L_{X/k},\mathcal O_X)=0$ by step 1.1, [F4] gives that for every local Artin $k$-algebra $A$ with residue field $k$ every deformation of $\mathbb A^1_k$ over $\operatorname{Spec}A$ is isomorphic to the trivial deformation; this confirms the hypothesis and the $\operatorname{Ext}^1$-part of the refuted statement. [F4, step 1.1]

3.1 Identification with a derivation and conclusion. By [F5] the infinitesimal automorphism group of the trivial deformation is $\operatorname{Ext}^0_{\mathcal O_X}(L_{X/k},\mathcal O_X)=\operatorname{Der}_k(k[x],k[x])=k[x]\partial_x$, which is infinite-dimensional; the automorphism $\sigma$ of step 1.2 corresponds to the derivation $x^2\partial_x$. Hence the deformation groupoid is not trivial and the trivial deformation is not rigid, although its tangent space vanishes by step 1.1 and all deformation classes are trivial by step 2.1. The correct statement is rigidity of isomorphism classes ([[cor-vanishing-ext-one-implies-rigidity-of-deformation-classes]]); rigidity of the groupoid would require the additional vanishing of $\operatorname{Ext}^0$, which fails here. [F4, F5, step 1.1, step 1.2, step 2.1] ∎ 