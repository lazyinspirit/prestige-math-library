---
id: lem-na-solenoidal-scalar-equations-give-weak-continuity
kind: lemma
title: Scalar weak equations give a weakly continuous Hilbert-space representative
status: draft
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps:
  - cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives
  - thm-locally-integrable-functions-embed-in-distributions
  - thm-riesz-representation-for-hilbert-space
  - thm-countable-union-of-null-is-null
  - def-separable-space
  - def-countable-choice
  - def-axiom-of-choice
  - lem-ac-supplies-countable-and-dependent-choice-for-banach-integration
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Christian Clason, Introduction to Finite Element Methods:
        evolution-space background"
      url: https://arxiv.org/pdf/1709.08618v2.pdf
      locator: Chapter 11 evolution-space context; the scalar-equation/Riesz argument
        is proved locally.
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Assume the Axiom of Choice. Let $0<T<\infty$, let $H$ be a separable real Hilbert space, let $X\subseteq H$ be a dense real linear subspace, and let $u_0\in H$. Suppose $u\in L^2(0,T;H)$ and $\|u(t)\|_H\le M$ for almost every $t$, for some finite $M$. Suppose also that for every $v\in X$ there is $h_v\in L^1(0,T)$ such that, for every $\eta\in C^1([0,T])$ vanishing near $T$,
$$-\int_0^T (u(t),v)_H\eta'(t)\,dt=\int_0^T h_v(t)\eta(t)\,dt+(u_0,v)_H\eta(0).$$
Then there is a unique weakly continuous map $\widetilde u:[0,T]\to H$ equal to $u$ almost everywhere and satisfying $\widetilde u(0)=u_0$. Here weak continuity means that $t\mapsto(\widetilde u(t),w)_H$ is continuous for every $w\in H$.

## Facts & Assumptions

**Given:** The Axiom of Choice, $0<T<\infty$, a separable real Hilbert space $H$, a dense real linear subspace $X\subseteq H$, $u_0\in H$, and the scalar weak equations in the Statement.

[F1] If a scalar $g\in L^1(0,T)$ has distributional derivative $h\in L^1(0,T)$, then it has a unique absolutely continuous representative on $[0,T]$ with derivative $h$ almost everywhere. ([[cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives]])

[F2] A locally integrable function that induces the zero distribution is zero almost everywhere; thus an $L^1$ distributional derivative is unique almost everywhere. ([[thm-locally-integrable-functions-embed-in-distributions]])

[F3] Every bounded real linear functional on a real Hilbert space is inner product with a unique vector. ([[thm-riesz-representation-for-hilbert-space]])

[F4] A separable space has a countable dense subset. ([[def-separable-space]])

[F5] A countable union of null sets is null. ([[thm-countable-union-of-null-is-null]])

[A1] The Axiom of Choice supplies Countable Choice, which selects a point from each nonempty member of the countable family of balls used to construct a dense subset of $X$. ([[def-axiom-of-choice]], [[lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]], [[def-countable-choice]])

## Proof

1.1 Choose a countable dense set $D\subseteq H$ by [F4]. For every $d\in D$ and positive rational $r$ for which $B_H(d,r)\cap X\ne\varnothing$, choose one point of that intersection using [A1]; the resulting countable set $W\subseteq X$ is dense in $H$. Indeed, given $y\in H$ and $\epsilon>0$, choose $d\in D$ with $\|y-d\|_H<\epsilon/4$, then a rational $r$ with $\|y-d\|_H<r<\epsilon-\|y-d\|_H$; density of $X$ makes the selected point available and it lies within $\epsilon$ of $y$. The rational linear span $W_0$ of $W$ is still countable and dense in $H$. [A1, F4, given, choose]

1.2 For $w\in W_0$, set $g_w(t)=(u(t),w)_H$ almost everywhere. Since $T<\infty$ and $u\in L^2(0,T;H)$, $g_w\in L^1(0,T)$; the scalar weak equation implies its distributional derivative is $h_w$. By [F1] it has a unique absolutely continuous representative $G_w$ on $[0,T]$. Integration by parts for $G_w$ and comparison with the given identity give $G_w(0)=(u_0,w)_H$. Moreover $|g_w(t)|\le M\|w\|_H$ almost everywhere, so continuity gives $|G_w(t)|\le M\|w\|_H$ for every $t\in[0,T]$. [A1, F1, given]

2.1 For $w,z\in W_0$ and rational $q$, the identities $g_{w+z}=g_w+g_z$ and $g_{qw}=qg_w$ hold almost everywhere. The corresponding identities for the continuous representatives hold everywhere, since two continuous functions equal almost everywhere on $[0,T]$ are equal everywhere. Thus for each fixed $t$, $w\mapsto G_w(t)$ is rational-linear on $W_0$ and bounded by $M\|w\|_H$. It extends uniquely by continuity from the dense set $W_0$ to a bounded real-linear functional $L_t$ on $H$; real linearity follows by approximating any real scalar by rationals. [F2, step 1.1, step 1.2, algebra]

3.1 By [F3], there is a unique $\widetilde u(t)\in H$ with $(\widetilde u(t),w)_H=L_t(w)$ for every $w\in H$. For $w\in W_0$, $t\mapsto(\widetilde u(t),w)_H=G_w(t)$ is continuous, and $\|\widetilde u(t)\|_H\le M$. For any $z\in H$, approximate it in norm by $w_k\in W_0$; then $\sup_t|(\widetilde u(t),z-w_k)_H|\le M\|z-w_k\|_H$, so $t\mapsto(\widetilde u(t),z)_H$ is a uniform limit of continuous functions and is continuous. Since $G_w(0)=(u_0,w)_H$ on the dense set $W_0$, Riesz uniqueness gives $\widetilde u(0)=u_0$. Choose a strongly measurable representative of $u$. For each $w\in W_0$, $(\widetilde u(t),w)_H=(u(t),w)_H$ outside a null set; [F5] makes their countable union null. Outside that union the two vectors have the same inner products with the dense set $W_0$, hence are equal. Thus $\widetilde u=u$ almost everywhere as $H$-valued functions. [F3, F5, step 1.1, step 1.2, step 2.1, algebra]

4.1 If $\widetilde u_1$ and $\widetilde u_2$ are two weakly continuous representatives of $u$, then for every $z\in H$ their scalar pairings are continuous and agree almost everywhere, hence agree for every $t$. Since this holds for every $z$, the Hilbert inner product separates vectors and $\widetilde u_1(t)=\widetilde u_2(t)$ for every $t$. [step 3.1, algebra] ∎
