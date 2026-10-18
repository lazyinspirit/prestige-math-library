---
id: lem-numerated-real-vector-bundle-embeds-in-finite-trivial-bundle
kind: lemma
title: "A numerated real bundle embeds in a finite trivial bundle"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: real-clifford-modules-ko-and-abs-orientations
dependency_level: 0
deps: [def-real-and-complex-topological-vector-bundle, def-partition-of-unity-subordinate-to-a-cover]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "M. F. Atiyah, K-Theory (lectures, notes by D. W. Anderson, 1967), with K-Theory and Reality reprint"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/atiyahk.pdf"
    - title: "Max Karoubi, Lectures on K-theory, ICTP Lecture Notes (2004)"
      url: "https://webusers.imj-prg.fr/~max.karoubi/Publications/71.pdf"
    - title: "Jost-Hinrich Eschenburg and Bernhard Hanke, Bott–Thom isomorphism, Hopf bundles and Morse theory (2021)"
      url: "https://arxiv.org/pdf/2011.14368"
---

## Statement

Let $X$ be compact Hausdorff and let $E\to X$ be a rank-$r$ real vector bundle with a finite linear trivializing cover $(U_i,\tau_i)$ and a subordinate finite partition of unity $(\rho_i)$. Then some $N$ and a bundle $F\to X$ satisfy $E\oplus F\cong X\times\mathbb R^N$. The embedding and orthogonal complement construction uses only the supplied finite numeration.

## Facts & Assumptions
**Given:** A compact Hausdorff space $X$, a rank-$r$ real vector bundle $E\to X$, finitely many linear charts $\tau_i:E|_{U_i}\to U_i\times\mathbb R^r$, and a finite subordinate partition $\rho_1,\ldots,\rho_s$.

[F1] Each bundle chart restricts on every fiber to a linear isomorphism $E_x\cong\mathbb R^r$ ([[def-real-and-complex-topological-vector-bundle]]).

[F2] Subordination means $\operatorname{supp}(\rho_i)\subseteq U_i$ ([[def-partition-of-unity-subordinate-to-a-cover]]).

## Proof

**Proof technique:** explicit weighted chart embedding.

1.1 If $X=\varnothing$, the conclusion is vacuous; assume $X$ is nonempty. For each $i$ define the $i$th component of $\Phi:E\to X\times\mathbb R^{rs}$ over $x$ by $\sqrt{\rho_i(x)}\tau_i(v)$ when $x\in U_i$, and by zero when $x\notin U_i$. The real square-root function is continuous on $[0,\infty)$ (away from zero, $|\sqrt a-\sqrt b|=|a-b|/(\sqrt a+\sqrt b)$; at zero, $0\le\sqrt a<\varepsilon$ whenever $0\le a<\varepsilon^2$). Because $\operatorname{supp}(\rho_i)\subseteq U_i$, every point outside $U_i$ has a neighborhood on which $\rho_i=0$; hence extending the chart component by zero is continuous there, and within $U_i$ it is a product of continuous coordinate functions. Hence each component, and therefore $\Phi$, is continuous. It is fiberwise linear. [given, F1, F2, construct]


2.1 If $v\in E_x$ is nonzero, the partition identity gives some $i$ with $\rho_i(x)>0$. Then $x\in U_i$ and [F1] makes $\tau_i(v)\ne0$, so the $i$th component of $\Phi_x(v)$ is nonzero. Thus each $\Phi_x$ is injective and has rank $r$. [given, F1, step 1.1, algebra]


3.1 In local bundle coordinates, the matrix of $\Phi$ has rank $r$ at every point. At any chosen $x$, some $r\times r$ minor is nonzero; continuity keeps that minor nonzero on a neighborhood. After reordering the target coordinates, the image there is the graph of a continuous matrix over $\mathbb R^r$. Thus $E'=\Phi(E)$ is a rank-$r$ subbundle of the trivial bundle. [step 2.1, algebra]


4.1 On a neighborhood with a continuous frame matrix $Q$ for $E'$, the orthogonal projection onto $E'$ is $P=Q(Q^{\mathsf T}Q)^{-1}Q^{\mathsf T}$. The Gram matrix $Q^{\mathsf T}Q$ is positive definite and invertible; its inverse varies continuously because each inverse entry is a cofactor divided by the nonzero determinant, so $P$ is continuous. Therefore $I-P$ has locally constant rank $rs-r$ and its image is a subbundle $F=E'^{\perp}$. Fiberwise orthogonal decomposition gives $E'\oplus F=X\times\mathbb R^{rs}$, and $\Phi$ identifies $E$ with $E'$. If $r=0$, take $E'=0$ and $F=X\times\mathbb R^0$. [step 2.1, step 3.1, algebra] ∎
