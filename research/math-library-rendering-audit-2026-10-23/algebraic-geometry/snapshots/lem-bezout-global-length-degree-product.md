---
id: lem-bezout-global-length-degree-product
kind: lemma
title: Global length of a plane complete intersection equals the degree product
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 1
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-projective-plane-bezout-length-form, def-algebraically-closed-field, def-axiom-of-choice, def-extension-degree-and-finite-extension, def-plane-projective-curve, def-projective-scheme-from-a-homogeneous-quotient, def-residue-field-scheme-point, def-total-length-of-a-zero-dimensional-projective-scheme, prop-algebraically-closed-splitting-and-finite-extension-criteria, thm-projective-plane-complete-intersection-total-length]
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "William Fulton, Algebraic Curves: An Introduction to Algebraic Geometry (2008 electronic edition; Internet Archive copy of the author's PDF)"
      url: "https://web.archive.org/web/20240102232744id_/https://dept.math.lsa.umich.edu/~wfulton/CurveBook.pdf"
    - title: "Andreas Gathmann, Algebraic Geometry class notes (2002), Sections 6.1-6.2"
      url: "https://agag-gathmann.math.rptu.de/class/alggeom-2002/alggeom-2002.pdf"
---

## Statement

Assume the Axiom of Choice. Let $C=V(F)$ and $D=V(G)$ be plane projective curves of degrees $d,e\ge1$ over the algebraically closed field $k$ with no common component, and put $X=\operatorname{Proj}(k[x_0,x_1,x_2]/(F,G))$ [[def-projective-scheme-from-a-homogeneous-quotient]]. Then the total length of $X$ is $\operatorname{len}_k(X)=de$, and since every point of $X$ is $k$-rational (the residue field is a finite extension of the algebraically closed field $k$) this reads

$$ \sum_{x\in X}\ell_{\mathcal O_{X,x}}\bigl(\mathcal O_{X,x}\bigr)=de .$$

## Facts & Assumptions

**Given:** AC, an algebraically closed field $k$, plane projective curves $C=V(F)$, $D=V(G)$ of degrees $d,e\ge1$ with no common component, and $X=\operatorname{Proj}(k[x_0,x_1,x_2]/(F,G))$.

[F1] $F$ and $G$ are nonzero homogeneous forms of positive degrees $d,e$ and have no common nonconstant factor: a common nonconstant factor would have an irreducible factor $h$, and then $V(h)$ would be a component of both $C$ and $D$ [[def-plane-projective-curve]].

[F2] For nonzero plane forms of positive degrees with no common nonconstant factor, $X$ is nonempty and finite, its charts are zero-dimensional, and its total length in the sense of [[def-total-length-of-a-zero-dimensional-projective-scheme]] equals $de$: $\operatorname{len}_k(X)=de$ [[thm-projective-plane-complete-intersection-total-length]]. Equivalently $\operatorname{len}_k(X)=\sum_{x\in X}\ell_{\mathcal O_{X,x}}(\mathcal O_{X,x})[\kappa(x):k]=de$ [[cor-projective-plane-bezout-length-form]].

[F3] For each $x\in X$ the residue field $\kappa(x)$ is a finite extension of $k$ [[def-residue-field-scheme-point]], [[def-extension-degree-and-finite-extension]], and a finite extension of an algebraically closed field is trivial, i.e. $\kappa(x)=k$ [[prop-algebraically-closed-splitting-and-finite-extension-criteria]], [[def-algebraically-closed-field]].

[F4] AC is assumed; it is used through the complete-intersection length theorem and the projective-scheme construction [[def-axiom-of-choice]]. No further choice enters.

## Proof

1.1 By [F1] the pair $(F,G)$ satisfies the hypotheses of the published complete-intersection length theorem, so the projective scheme $X=\operatorname{Proj}(k[x_0,x_1,x_2]/(F,G))$ is zero-dimensional with finite point set and its total length over $k$ is $\operatorname{len}_k(X)=de$, the sum of the local lengths weighted by residue degrees. [F1, F2, given]

1.2 For every point $x\in X$ the residue field $\kappa(x)$ is a finite extension of the algebraically closed field $k$, hence equals $k$ and has degree $[\kappa(x):k]=1$. [F3]

2.1 Substituting the residue degrees $1$ of step 1.2 into the weighted sum of step 1.1 gives $\operatorname{len}_k(X)=\sum_{x\in X}\ell_{\mathcal O_{X,x}}(\mathcal O_{X,x})=de$, which is the displayed equality. [step 1.1, step 1.2, algebra, F4] ∎ 