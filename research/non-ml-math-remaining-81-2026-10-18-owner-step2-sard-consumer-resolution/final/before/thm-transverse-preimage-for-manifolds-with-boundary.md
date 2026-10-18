---
id: thm-transverse-preimage-for-manifolds-with-boundary
kind: theorem
title: "Transverse preimages for maps from manifolds with boundary"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-a-smooth-map-transverse-to-an-embedded-submanifold, thm-transverse-preimage-theorem, def-embedded-smooth-submanifold-with-boundary, def-neat-submanifold-of-a-manifold-with-boundary, thm-neat-submanifolds-have-boundary-adapted-slice-charts, thm-boundary-submanifolds-of-a-boundaryless-manifold-have-half-slice-charts, def-smooth-function-on-a-relatively-open-subset-of-a-half-space, def-smooth-map-between-manifolds-with-boundary, def-countable-choice, def-embedded-submanifold-and-slice-chart, def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary, thm-euclidean-inverse-function-theorem]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    scope: "Whole authored item, including statement or definition, every proof or verification step, and used direct supplier interfaces; completed prior Step5 reader/adjudicator evidence reconciled to the current mathematics. Transitive supplier proofs were not audited in full."
    delegated_by: "owner via tools/autopilot (frontier-38-owner-30)"
    evidence:
      - "research/frontier-38-owner-30-reader-12.md"
      - "research/frontier-38-owner-30-alpha-batch-12-5a.md"
      - "research/frontier-38-owner-30-step5-hash-12-post.json"
    reviewed_raw_sha256: "8a8e83a72994b29ab7f58a06b5a3dc5b89819c2fcd5de4636bff073da4e94e5b"
    content_sha256: "cfbeb76e82c0426ad3880e1d9048b2f070a7731e11b4bb45b2ece556279d39a7"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Victor Guillemin and Alan Pollack, Differential Topology (Prentice-Hall, 1974; complete 236-page PDF)"
      url: https://www.math.auckland.ac.nz/~hekmati/Books/GP.pdf
      locator: "Ch. 2 §4, printed pp. 78–79 (a transverse homotopy trace over $X\\times I$ is a 1-manifold with boundary)"
    - title: "John Milnor, Topology from the Differentiable Viewpoint (Princeton University Press; complete 76-page PDF, including the appendix Classifying 1-manifolds)"
      url: https://people.math.osu.edu/davis.12/courses/7851/milnortop.pdf
      locator: "§4, printed pp. 20–23 (the compact 1-manifold $F^{-1}(y)$ with boundary on the two copies of $M$); §2, Lemma 4, printed pp. 13–14"
---

## Statement

Let $W$ be a smooth manifold with boundary, $N$ a smooth manifold without boundary, $Z\subseteq N$ a closed embedded submanifold, and $F:W\to N$ a smooth map. Suppose that at every $p\in F^{-1}(Z)$ the differential is transverse to $Z$, $dF_p(T_pW)+T_{F(p)}Z=T_{F(p)}N$, and that the restriction $F|_{\partial W}$ is transverse to $Z$. Then $F^{-1}(Z)$ is an embedded smooth submanifold with boundary of $W$ of dimension $\dim W-\operatorname{codim}Z$, with

$$T_pF^{-1}(Z)=\{v\in T_pW:dF_p(v)\in T_{F(p)}Z\}$$

and $F^{-1}(Z)\cap\partial W=(F|_{\partial W})^{-1}(Z)$. If $\dim W-\operatorname{codim}Z\ge1$, then $F^{-1}(Z)$ is neat and

$$\partial\bigl(F^{-1}(Z)\bigr)=F^{-1}(Z)\cap\partial W=(F|_{\partial W})^{-1}(Z).$$

If $\dim W=\operatorname{codim}Z$, transversality of the boundary restriction forces $F^{-1}(Z)\cap\partial W=\varnothing$: a space of dimension $\dim W-1$ cannot surject onto the $\operatorname{codim}Z$ normal directions. Thus the zero-dimensional preimage also has the asserted empty boundary. If $\dim W<\operatorname{codim}Z$, the preimage is empty by the same rank bound. These include the empty-preimage cases.

## Facts & Assumptions

**Given:** A smooth map $F:W\to N$ from a manifold with boundary to a boundaryless manifold, a closed embedded submanifold $Z\subseteq N$ of codimension $c$, and transversality of $F$ and of $F|_{\partial W}$ to $Z$.

[F1] A slice chart for $Z$ at $z\in Z$ is a chart $y:V\to y(V)\subseteq\mathbb R^{n'}$ with $y(Z\cap V)=y(V)\cap(\mathbb R^{n'-c}\times\{0\})$; the last $c$ coordinates of $y$ then define a submersion on $V$ with zero set $Z\cap V$ ([[def-embedded-submanifold-and-slice-chart]]).

[F2] Transversality of $F$ to $Z$ means $dF_p(T_pW)+T_{F(p)}Z=T_{F(p)}N$ at every $p\in F^{-1}(Z)$, and $F|_{\partial W}$ is transverse to $Z$ when the same condition holds for the restricted differential on $T_p\partial W$ at every $p\in F^{-1}(Z)\cap\partial W$ ([[def-a-smooth-map-transverse-to-an-embedded-submanifold]]).

[F3] Boundary charts of $W$ are homeomorphisms $\varphi:U\to\varphi(U)\subseteq\mathbb H^n$ with $\varphi(U\cap\partial W)=\varphi(U)\cap\{x_n=0\}$ ([[def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary]]).

[F4] If $G:M^m\to N^{n'}$ is smooth on a boundaryless manifold and transverse to $Z$, then $G^{-1}(Z)$ is an embedded submanifold of codimension $c$ with $T_pG^{-1}(Z)=\{v\in T_pM:dG_p(v)\in T_{G(p)}Z\}$ ([[thm-transverse-preimage-theorem]]).

[F5] An embedded submanifold with boundary $S\subseteq W$ is neat when $S\cap\partial W=\partial S$ and $S$ is transverse to $\partial W$; a neat submanifold has boundary charts simultaneously straightening $S$ and $\partial W$ ([[def-neat-submanifold-of-a-manifold-with-boundary]], [[thm-neat-submanifolds-have-boundary-adapted-slice-charts]]).

[F6] A smooth function on a relatively open subset of $\mathbb H^n$ extends locally to a smooth function on an open subset of $\mathbb R^n$, and the chain rule holds for smooth maps between manifolds with boundary ([[def-smooth-function-on-a-relatively-open-subset-of-a-half-space]], [[def-smooth-map-between-manifolds-with-boundary]]). The Euclidean inverse function theorem applies to an invertible local extension ([[thm-euclidean-inverse-function-theorem]]).

## Proof

**Proof technique:** reduce to a submersion identity in a half-space chart, then apply the inverse function theorem in the two cases.

1.1 Fix $p\in F^{-1}(Z)$ and put $z:=F(p)$; write $n:=\dim W$ and $n':=\dim N$. At a boundary point choose a boundary chart $x:U\to x(U)\subseteq\mathbb H^n$ with $x(p)=0$; at an interior point use an ordinary Euclidean chart centred at $p$ and a slice chart $y:V\to y(V)$ of $Z$ at $z$ with $y(z)=0$, and let $g$ be the last $c$ coordinates of $y$ on $V$. Then $G:=g\circ F$ is defined near $p$ on a relatively open half-space set, and for $q$ near $p$ one has $G(q)=0$ exactly when $F(q)\in Z$. At such a $q$ the differential $dG_q=dg_{F(q)}\circ dF_q$ is surjective: $dg_{F(q)}$ is surjective with kernel $T_{F(q)}Z$, so its image of $dF_q(T_qW)$ is $(dF_q(T_qW)+T_{F(q)}Z)/T_{F(q)}Z=T_{F(q)}N/T_{F(q)}Z$, which is all of $\mathbb R^c$ by [F2]. At boundary points, on the face $\{x_n=0\}$ the same computation with $T_q\partial W$ in place of $T_qW$ is surjective by the transversality of $F|_{\partial W}$. [F1, F2, F3, F6, given, algebra]

2.1 (Interior points.) If $p\in F^{-1}(Z)\cap\operatorname{int}W$, then $F|_{\operatorname{int}W}$ is smooth and transverse to $Z$ on the boundaryless manifold $\operatorname{int}W$, so [F4] shows that $F^{-1}(Z)\cap\operatorname{int}W$ is an embedded submanifold of $\operatorname{int}W$ of codimension $c$ with the stated tangent space; in the chart $x$ this exhibits $F^{-1}(Z)$ near $p$ as a coordinate subspace $\{x^{n-c+1}=\dots=x^n=0\}$ intersected with the chart, so $p$ is an interior point of $F^{-1}(Z)$. [F1, F4, step 1.1]

2.2 (Boundary points.) If $p\in F^{-1}(Z)\cap\partial W$, then in the coordinates of 1.1 the differential $dG_p:\mathbb R^n\to\mathbb R^c$ is surjective and, by the face part of 1.1, its restriction to the face $\mathbb R^{n-1}\times\{0\}$ is surjective. Choose a set $A$ of $c$ coordinate directions inside the face on which the resulting square minor of $dG_p$ is invertible, let $B$ be the remaining $n-1-c$ face directions, and define $\Phi:=(G,\,x_B,\,x_n)$ near $p$. Its differential is block triangular with invertible diagonal blocks, hence invertible; by [F6] the components extend smoothly to an open neighbourhood of $p$ in $\mathbb R^n$, so the inverse function theorem makes $\Phi$ a local diffeomorphism at $p$. Since $\Phi$ has last coordinate $x_n$, it carries $\{G=0,\ x_n\ge0\}=F^{-1}(Z)$ near $p$ onto the relatively open subset $\{0\}\times\mathbb R^{n-1-c}\times[0,\infty)$ of the half-space $\mathbb H^{n-c}$; therefore $F^{-1}(Z)$ is near $p$ an embedded $(n-c)$-dimensional submanifold with boundary, with boundary exactly $F^{-1}(Z)\cap\partial W$ and tangent space $\{v\in T_pW:dF_p(v)\in T_zZ\}$, and the chart $\Phi$ simultaneously straightens the preimage and the face. [F1, F2, F3, F6, step 1.1, construct]

3.1 (Assembly.) The charts produced in 2.1 and 2.2 cover $F^{-1}(Z)$; any two of them are restrictions of charts of $W$, so their transitions are restrictions of smooth half-space transitions and the induced structure is a smooth structure on $F^{-1}(Z)$ making it an embedded submanifold with boundary of $W$, of dimension $n-c=\dim W-\operatorname{codim}Z$, with the tangent formula and with interior $F^{-1}(Z)\cap\operatorname{int}W$ and boundary $F^{-1}(Z)\cap\partial W=(F|_{\partial W})^{-1}(Z)$. If $n-c\ge1$, the local model of 2.2 shows that the preimage is transverse to $\partial W$ and meets it exactly in its boundary, so $F^{-1}(Z)$ is neat and $\partial F^{-1}(Z)=F^{-1}(Z)\cap\partial W$; the charts of 2.2 are precisely the boundary-adapted slice charts of [F5]. If $n-c=0$, boundary points are impossible because the face differential would have rank $c=n$ on an $(n-1)$-dimensional space. The preimage is discrete, lies in the interior, and has empty boundary. If $n<c$, even the full differential cannot be surjective, so the preimage is empty. The construction uses the charts named at each point and no choice principle; the atlas of the preimage is the set of all charts so obtained. [F4, F5, step 2.1, step 2.2, given] ∎
