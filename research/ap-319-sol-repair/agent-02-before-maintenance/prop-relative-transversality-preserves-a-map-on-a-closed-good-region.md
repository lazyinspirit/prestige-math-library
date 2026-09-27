---
id: prop-relative-transversality-preserves-a-map-on-a-closed-good-region
kind: proposition
title: "Relative transversality preserves a map on a closed good region"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-a-tubular-target-produces-a-submersive-finite-dimensional-perturbation-family,
       thm-parametric-transversality,
       prop-a-null-set-has-dense-complement-in-a-positive-dimensional-manifold,
       cor-every-closed-subset-of-a-manifold-is-the-zero-set-of-a-smooth-nonnegative-function]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Marco Gualtieri, Topology I: Smooth Manifolds, Part 10, Theorem 3.29"
      url: "https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes-10.pdf"
---

## Statement

Let $f:M\to N$ be smooth and let $Z\subseteq N$ be a closed embedded
submanifold. Suppose $f$ is already transverse to $Z$ on an open neighbourhood
of a closed set $A\subseteq M$. Then in the transversality homotopy theorem one
can choose the perturbation family so that the perturbed map and the whole
homotopy agree with $f$ on a smaller neighbourhood of $A$.

## Facts & Assumptions

**Given:** A smooth map $f:M\to N$ that is transverse to $Z$ on an open neighbourhood of a closed set $A\subseteq M$.

[L2] A smooth map admits a finite-dimensional perturbation family whose evaluation map is a submersion ([[lem-a-tubular-target-produces-a-submersive-finite-dimensional-perturbation-family]]).

[L3] Parametric transversality makes the nontransverse parameter set null, and a null subset of a positive-dimensional parameter ball has dense complement ([[thm-parametric-transversality]], [[prop-a-null-set-has-dense-complement-in-a-positive-dimensional-manifold]]).

[L4] Every closed subset is the zero set of a smooth nonnegative function ([[cor-every-closed-subset-of-a-manifold-is-the-zero-set-of-a-smooth-nonnegative-function]]).

## Proof
**Proof technique:** direct.

1.1 Choose open sets $A\subseteq W$ with $\overline W\subseteq V$ inside the region where $f$ is already transverse to $Z$. By [L4], choose a smooth nonnegative function $\eta$ whose zero set is exactly $\overline W$, and put $\lambda:=\eta/(1+\eta)$. Then $0\le\lambda<1$ and its zero set is $\overline W$. [L4, given, choose, algebra]

1.2 Let $\mathcal F:M\times B\to N$ be the perturbation family from [L2], where $B\subseteq\mathbb R^m$ and $\mathcal F_0=f$. If $m=0$, the submersion $\mathcal F_p:B\to N$ forces $N$ to be zero-dimensional. Every map into a zero-dimensional manifold is transverse to every embedded submanifold, so in this case take the perturbed map and homotopy to be constantly $f$. Hence assume $m\ge1$, and shrink $B$ to a ball centred at $0$. [L2, given]

2.1 Since $0\le\lambda<1$ and the centred ball $B$ is convex, $\lambda(p)^2a\in B$ for every $(p,a)\in M\times B$. Define $$\mathcal G(p,a):=\mathcal F\bigl(p,\lambda(p)^2a\bigr).$$ This is a smooth family with $\mathcal G_0=f$. [L2, step 1.1, step 1.2, construct]

3.1 If $p\notin\overline W$, then $\lambda(p)>0$. The derivative of $a\mapsto\mathcal G(p,a)$ is the surjective derivative of $\mathcal F_p$ composed with multiplication by the positive scalar $\lambda(p)^2$, so $\mathcal G$ is a submersion there. If $p\in\overline W$, then $\lambda(p)=0$ and $d(\lambda^2)_p=0$, and the chain rule gives $$d\mathcal G_{(p,a)}(v,w)=df_p(v).$$ Because $\overline W\subseteq V$ and $f\pitchfork Z$ on $V$, the full evaluation map $\mathcal G$ is transverse to $Z$ on this second region as well. Thus $\mathcal G\pitchfork Z$ everywhere. [L2, step 1.1, step 2.1, algebra]

4.1 Parametric transversality in [L3] makes the set of parameters whose slices are not transverse to $Z$ a null subset of $B$. Since $m\ge1$, the dense-complement clause of [L3] makes its complement nonempty. Choose $a\in B$ there and put $g:=\mathcal G_a$; then $g\pitchfork Z$. [L3, step 1.2, step 3.1, choose]

5.1 On $W$ one has $\lambda=0$, so $g=f$. Because the centred ball $B$ contains the whole segment from $0$ to $a$, the formula $$H(p,t):=\mathcal G(p,ta)$$ defines a homotopy from $f$ to $g$. It agrees with $f$ on $W$ for every $t\in I$. Therefore the perturbed map and the whole homotopy coincide with $f$ on the smaller neighbourhood $W$ of $A$. [step 1.1, step 2.1, step 4.1] ∎
