---
id: lem-yangian-gl2-one-root-bethe-cancellation
kind: lemma
title: "The one-root gl2 Bethe equation cancels the unwanted transfer term"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps: [ def-yangian-gl-n-rtt-presentation, lem-yangian-rtt-component-commutator-form ]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "L. D. Faddeev, How Algebraic Bethe Ansatz Works for Integrable Model"
      url: "https://arxiv.org/pdf/hep-th/9605187"
      locator: "§§3–4, equations (66)–(97): RTT commutation relations, the one-root Bethe vector, and cancellation of its unwanted term."
    - title: "A. P. Isaev, Lectures on Quantum Groups and Yang-Baxter Equations"
      url: "https://arxiv.org/pdf/2206.08902"
      locator: "§5.1, equations (5.1.5)–(5.1.8): monodromy RTT, transfer-matrix commutativity, and the trace construction for a finite periodic chain."
---

## Statement

In $Y_i(\mathfrak{gl}_2)$ write $A(u)=t_{11}(u)$, $B(u)=t_{12}(u)$, and $D(u)=t_{22}(u)$. Let $\mathcal H$ be a representation equipped with a common spectral domain $\mathcal D\subseteq\mathbb C$ on which the represented series $A(u),B(u),D(u)$ have defined, regular operator values and the component RTT identities from [F1] hold pointwise for $u,v\in\mathcal D$ with $u\ne v$. Let $\Omega\in\mathcal H$ and scalar-valued functions $a,d$, regular on $\mathcal D$, satisfy $A(u)\Omega=a(u)\Omega$ and $D(u)\Omega=d(u)\Omega$ on $\mathcal D$. For $v\in\mathcal D$ with $B(v)\Omega\ne0$, if the one-root Bethe equation $a(v)=d(v)$ holds, then for every $u\in\mathcal D\setminus\{v\}$ the vector $B(v)\Omega$ is an eigenvector of $A(u)+D(u)$ with eigenvalue

$$\Lambda_v(u)=\frac{u-v-i}{u-v}a(u)+\frac{u-v+i}{u-v}d(u).$$

This one-root cancellation gives no completeness conclusion.

## Facts & Assumptions

**Given:** The RTT presentation for $N=2$, a representation with common spectral domain $\mathcal D$ as specified in the statement, and a vector satisfying the displayed vacuum eigenvalue conditions there.

[F1] [[lem-yangian-rtt-component-commutator-form]]: $x[t_{ij}(u),t_{kl}(v)]=i(t_{kj}(v)t_{il}(u)-t_{kj}(u)t_{il}(v))$ for $x=u-v$.

## Proof

1.1 For $u,v\in\mathcal D$ with $x=u-v\ne0$, apply [F1] to $(i,j,k,l)=(1,2,1,1)$ and interchange $u,v$; rearranging gives $A(u)B(v)=\frac{x-i}{x}B(v)A(u)+\frac{i}{x}B(u)A(v)$. Applying [F1] to $(i,j,k,l)=(2,2,1,2)$ gives $D(u)B(v)=\frac{x+i}{x}B(v)D(u)-\frac{i}{x}B(u)D(v)$. The common-domain assumption supplies these pointwise identities, and all divisions are by the nonzero scalar $x$. [given, F1, algebra]

2.1 Apply these identities to $\Omega$ and use its eigenvalue conditions on $\mathcal D$. The coefficient of $B(u)\Omega$ in $(A(u)+D(u))B(v)\Omega$ is $i(a(v)-d(v))/x$, which vanishes under $a(v)=d(v)$. The remaining coefficient of $B(v)\Omega$ is exactly $\Lambda_v(u)$, so the claimed eigenvector identity follows; nonzero-ness of $B(v)\Omega$ makes it an eigenvector rather than merely a zero-vector identity. [given, step 1.1, algebra] ∎
