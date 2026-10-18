---
id: lem-yangian-gl2-one-root-bethe-cancellation
kind: lemma
title: "The one-root gl2 Bethe equation cancels the unwanted transfer term"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps: [def-yangian-gl-n-rtt-presentation, lem-yangian-rtt-component-commutator-form]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "L. D. Faddeev, How Algebraic Bethe Ansatz Works for Integrable Model"
      url: "https://arxiv.org/pdf/hep-th/9605187"
      locator: "§§3–4, equations (66)–(97): RTT commutation relations, the one-root Bethe vector, and cancellation of its unwanted term."
    - title: "A. P. Isaev, Lectures on Quantum Groups and Yang-Baxter Equations"
      url: "https://arxiv.org/pdf/2206.08902"
      locator: "§5.1: algebraic Bethe ansatz on a finite periodic chain and the Bethe-equation condition."
---

## Statement

In $Y_i(\mathfrak{gl}_2)$ write $A(u)=t_{11}(u)$, $B(u)=t_{12}(u)$, and $D(u)=t_{22}(u)$. Let $\mathcal H$ be a representation with a vector $\Omega$ and scalar-valued functions $a(u),d(u)$, regular at the parameter $v$, such that $A(u)\Omega=a(u)\Omega$, $D(u)\Omega=d(u)\Omega$, and $B(v)\Omega\ne0$. For $u\ne v$, if the one-root Bethe equation $a(v)=d(v)$ holds, then $B(v)\Omega$ is an eigenvector of $A(u)+D(u)$ with eigenvalue

$$\Lambda_v(u)=\frac{u-v-i}{u-v}a(u)+\frac{u-v+i}{u-v}d(u).$$

This one-root cancellation gives no completeness conclusion.

## Facts & Assumptions

**Given:** The RTT presentation for $N=2$, a representation, and a vector satisfying the displayed vacuum eigenvalue conditions.

[F1] [[lem-yangian-rtt-component-commutator-form]]: $x[t_{ij}(u),t_{kl}(v)]=i(t_{kj}(v)t_{il}(u)-t_{kj}(u)t_{il}(v))$ for $x=u-v$.

## Proof

1.1 Apply [F1] to $(i,j,k,l)=(1,2,1,1)$ and interchange $u,v$; rearranging gives $A(u)B(v)=\frac{x-i}{x}B(v)A(u)+\frac{i}{x}B(u)A(v)$ for $x=u-v\ne0$. Applying [F1] to $(i,j,k,l)=(2,2,1,2)$ gives $D(u)B(v)=\frac{x+i}{x}B(v)D(u)-\frac{i}{x}B(u)D(v)$. All divisions are by the stated nonzero scalar $x$. [given, F1, algebra]

1.2 Apply these identities to $\Omega$ and use its eigenvalue conditions. The coefficient of $B(u)\Omega$ in $(A(u)+D(u))B(v)\Omega$ is $i(a(v)-d(v))/x$, which vanishes under $a(v)=d(v)$. The remaining coefficient of $B(v)\Omega$ is exactly $\Lambda_v(u)$, so the claimed eigenvector identity follows; nonzero-ness of $B(v)\Omega$ makes it an eigenvector rather than merely a zero-vector identity. [given, step 1.1, algebra] ∎

