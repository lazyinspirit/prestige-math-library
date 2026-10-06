---
id: lem-affine-dirichlet-trace-class-is-nonempty-convex-and-weakly-closed
kind: lemma
title: "The affine Dirichlet trace class is nonempty, convex and weakly closed"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 1
deps: [lem-norm-closed-convex-sets-are-weakly-closed, thm-bounded-right-inverse-for-the-sobolev-trace, thm-kernel-of-the-trace-is-w-one-p-zero, thm-lp-trace-operator-on-a-bounded-c-one-domain, thm-sharp-trace-theorem-for-w-one-p, def-wkp-zero-as-a-sobolev-closure, def-sobolev-space-wkp-and-its-norm]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2026 author manuscript; complete 392-page archived text)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Section 13.2, Example 13.7, printed pp. 299-300"
    - title: "Francesco Paolo Maiale (course by Giovanni Alberti), Lecture Notes Calculus of Variations A, University of Pisa (last update 21 August 2019; complete 149-page notes)"
      url: "https://poisson.phc.dm.unipi.it/~fpmaiale/notes/CdV-A.pdf"
      locator: "Chapter 2 Section 3, admissible classes and trace data, printed pp. 41-43"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice. Let $n\ge2$ and let $\Omega\subseteq\mathbb R^n$ be a bounded $C^1$ domain, $1<p<\infty$, and let $g\in W^{1-1/p,p}(\partial\Omega)$ lie in the trace range of $T:W^{1,p}(\Omega)\to W^{1-1/p,p}(\partial\Omega)$ ([[thm-sharp-trace-theorem-for-w-one-p]], [[thm-lp-trace-operator-on-a-bounded-c-one-domain]]). Then the affine trace class
$$K_g:=\{v\in W^{1,p}(\Omega):Tv=g\}$$
is nonempty, convex, norm closed in $W^{1,p}(\Omega)$ and weakly closed; moreover, for every right inverse $R$ of $T$ with $TRg=g$, $K_g=Rg+W^{1,p}_0(\Omega)$ ([[thm-bounded-right-inverse-for-the-sobolev-trace]], [[thm-kernel-of-the-trace-is-w-one-p-zero]], [[def-wkp-zero-as-a-sobolev-closure]]).

## Facts & Assumptions

**Given:** The Axiom of Choice; $n\ge2$; a bounded $C^1$ domain $\Omega\subseteq\mathbb R^n$, $1<p<\infty$, and $g\in W^{1-1/p,p}(\partial\Omega)$ lying in the range of the trace operator $T:W^{1,p}(\Omega)\to W^{1-1/p,p}(\partial\Omega)$ of [[thm-lp-trace-operator-on-a-bounded-c-one-domain]]; the affine class $K_g:=\{v\in W^{1,p}(\Omega):Tv=g\}$.

[F1] For the stated $n\ge2$ and $1<p<\infty$, the trace operator $T:W^{1,p}(\Omega)\to W^{\theta,p}(\partial\Omega)$, $\theta=1-1/p$, is bounded and surjective onto the fractional Sobolev space ([[thm-sharp-trace-theorem-for-w-one-p]], [[thm-lp-trace-operator-on-a-bounded-c-one-domain]]).

[F2] There is a bounded right inverse $R:W^{\theta,p}(\partial\Omega)\to W^{1,p}(\Omega)$ with $T\circ R=\mathrm{id}$; it is not unique ([[thm-bounded-right-inverse-for-the-sobolev-trace]]).

[F3] $\ker T=W_0^{1,p}(\Omega)$, the $W^{1,p}$-closure of $C_c^\infty(\Omega)$ ([[thm-kernel-of-the-trace-is-w-one-p-zero]], [[def-wkp-zero-as-a-sobolev-closure]]); in particular $W_0^{1,p}(\Omega)$ is a linear subspace of $W^{1,p}(\Omega)$, which is a normed space for $\|\cdot\|_{W^{1,p}(\Omega)}$ ([[def-sobolev-space-wkp-and-its-norm]]).

[F4] Under the Axiom of Choice, every convex subset of a real or complex normed space that is closed in the norm topology is weakly closed ([[lem-norm-closed-convex-sets-are-weakly-closed]]).

## Proof

**Proof technique:** direct, by writing $K_g$ as a translate of the kernel of the trace and applying the closed-convex weak-closure lemma.

1.1 Nonemptiness. Since $g$ lies in the range of $T$ there is $u\in W^{1,p}(\Omega)$ with $Tu=g$, so $K_g\ne\varnothing$; alternatively [F2] gives $Rg\in K_g$ because $TRg=g$. [F1, F2, given]

1.2 The class is a translate of the kernel. Fix a right inverse $R$ of $T$, which exists by [F2] and satisfies $TRg=g$. For $u\in W^{1,p}(\Omega)$ one has $u\in K_g\iff Tu=g\iff T(u-Rg)=0\iff u-Rg\in\ker T=W_0^{1,p}(\Omega)$, using linearity of $T$ and [F3]. Hence $K_g=Rg+W_0^{1,p}(\Omega)$. [F2, F3, given]

2.1 Convexity. Let $u,v\in K_g$ and $\lambda\in[0,1]$. By step 1.2 the elements $u-Rg$ and $v-Rg$ lie in the linear subspace $W_0^{1,p}(\Omega)$, so $\lambda u+(1-\lambda)v-Rg=\lambda(u-Rg)+(1-\lambda)(v-Rg)\in W_0^{1,p}(\Omega)$ and therefore $\lambda u+(1-\lambda)v\in K_g$. Thus $K_g$ is convex. [F3, step 1.2]

2.2 Norm closedness. The operator $T$ is bounded by [F1], hence continuous, and $K_g=T^{-1}(\{g\})$ is the preimage of the singleton $\{g\}$, which is closed in the normed space $W^{1-1/p,p}(\partial\Omega)$; a continuous preimage of a closed set is closed. So $K_g$ is closed in the norm topology of $W^{1,p}(\Omega)$. [F1, F3, step 1.2]

3.1 Weak closedness. By steps 2.1 and 2.2 the set $K_g$ is convex and closed in the norm topology, so [F4] applies under the Axiom of Choice and $K_g$ is weakly closed. [F4, step 2.1, step 2.2]

4.1 The identity for an arbitrary right inverse. Let $R$ be any bounded right inverse of $T$, so that $TRg=g$. The argument of step 1.2 used only this identity and the kernel description [F3], so it gives $K_g=Rg+W_0^{1,p}(\Omega)$ for this $R$ as well. This, together with steps 1.1, 2.1 and 3.1, establishes every clause of the statement. [F2, F3, step 1.2, step 3.1] ∎
