---
id: "lem-finite-relative-homotopy-lifting-across-a-weak-equivalence"
kind: "lemma"
title: "Finite relative homotopy lifting across a weak equivalence"
verification:
  audited: 2026-09-13
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["def-weak-homotopy-equivalence","lem-a-weak-equivalence-of-cw-complexes-has-vanishing-relative-homotopy-groups","lem-relative-cubical-disk-model-and-compression","prop-relative-cw-inclusions-are-cofibrations","def-skeleta-cw-subcomplex-and-relative-cw-complex","lem-interval-exponential-law-and-quotient-homotopies","lem-finite-choice"]
sources:
  references:
    - title: May, A Concise Course in Algebraic Topology, Chapter10 §3 HELP, p75;
        Hatcher Lemma4.6 p347; finite-relative ordinary-space proof with
        explicit time schedule
      url: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

Let $f:P\to Y$ be a weak homotopy equivalence of arbitrary spaces, and let $(K,L)$ be a CW pair with finitely many cells outside $L$. Given continuous maps $u:L\to P$, $v:K\to Y$ and a homotopy $T:L\times I\to Y$ with $T(l,0)=v(l)$ and $T(l,1)=f(u(l))$, there are a continuous map $w:K\to P$ extending $u$ and a homotopy $J:v\simeq fw$ such that
$$J(l,t)=T(l,\lambda(t)),\qquad \lambda(t)=\min(4t,1).$$
In particular, if $fu=v|_L$ and $T$ is constant in time, then $fw\simeq v$ rel $L$. More generally $J$ is stationary at every point of $L$ at which $T$ is stationary. No choice principle is required; $L$ may have arbitrary size and dimension.

## Facts & Assumptions

[F1] [[def-weak-homotopy-equivalence]] gives all-basepoint weak equivalence. [[lem-a-weak-equivalence-of-cw-complexes-has-vanishing-relative-homotopy-groups]] supplies component bijectivity and relative triviality for its ordinary mapping-cylinder source inclusion. That item's proof also establishes the embedded endpoints, retraction and continuous height deformation for arbitrary spaces.

[F2] [[lem-relative-cubical-disk-model-and-compression]] compresses a null relative disk into the subspace while fixing its entire boundary, in every positive degree including one.

[F3] [[prop-relative-cw-inclusions-are-cofibrations]] gives the choice-free HEP for every CW subcomplex, with arbitrary target.

[F4] [[def-skeleta-cw-subcomplex-and-relative-cw-complex]] gives the subcomplexes $L\cup K^d$ and their attachment structure. [[lem-interval-exponential-law-and-quotient-homotopies]] says that an attachment quotient remains quotient after product with $I$. [[lem-finite-choice]] permits finitely many witness selections without AC.

## Proof

**Given:** The spaces and maps in the statement. Write $M=M_f$, with $j:P\hookrightarrow M$, $k:Y\hookrightarrow M$ and $r:M\to Y$, so $rj=f$ and $rk=\mathrm{id}_Y$.

1.1 The ordinary cylinder formulas and embeddings in [F1] are valid without separation assumptions. On $L\times I$ define a homotopy starting at $kv|_L$ by $$B(l,s)=\begin{cases}kT(l,2s),&0\le s\le1/2,\\{}[u(l),2s-1],&1/2\le s\le1.\end{cases}$$ At $s=1/2$ the two values are $kfu(l)=[u(l),0]$, so finite closed pasting gives continuity. At $s=1$, its value is $ju(l)$. By [F3], extend $B$ from $L$ to a homotopy $V:K\times I\to M$ starting at $kv$. Put $b=V(-,1)$, so $b|_L=ju$. Projection by $r$ on $L$ gives the precise formula $rB(l,s)=T(l,\min(2s,1))$. [F1, F3, given]

2.1 We compress this $b$ into $j(P)$ rel $L$ using only finitely many source-cell choices. Write $D_d=L\cup K^d$, with $D_{-1}=L$. Suppose a current map $b_{d-1}:K\to M$ equals $ju$ on $L$ and takes $D_{d-1}$ into $j(P)$. For a relative $d$-cell, its characteristic disk followed by $b_{d-1}$ has boundary in $j(P)$. If $d\ge1$, mark a fixed boundary point and use its actual image $j(p)$ as basepoint. The relative class is null by [F1], so [F2] gives a compression into $j(P)$ fixing all boundary points. If $d=0$, the component-surjectivity of $j$ in [F1] gives a path from the image of that vertex into $j(P)$. There are only finitely many relative cells in this dimension, so [F4] supplies their finitely many compression witnesses. [F1, F2, F4, step 1.1]

3.1 Glue these disk homotopies to the stationary homotopy on $D_{d-1}$. They agree on every attaching identification, because disk boundaries were fixed. By [F4], $D_d$ is the quotient of $D_{d-1}$ and the finitely many characteristic $d$-disks by their boundary identifications, and the product of this quotient with $I$ is again quotient. The compatible continuous homotopies on those pieces therefore descend to a continuous homotopy on $D_d\times I$, even with an infinite-dimensional $L$. Extend it to $K$ by [F3] for $(K,D_d)$. Its endpoint $b_d$ sends $D_d$ into $j(P)$ and retains $ju$ on $L$. Starting from $b_{-1}=b$, perform these stages through the maximum dimension of the finite set of relative cells. The HEP is specified without choices, and the remaining witness selections are a finite sequence. Concatenation gives a continuous $C:K\times I\to M$ from $b$ to a map into $j(P)$, fixed on $L$. If there are no relative cells, take $C$ constant. Its endpoint factors continuously through the embedded subspace $j(P)$ by [F1]; denote the resulting map by $w:K\to P$. It satisfies $w|_L=u$. [F1, F3, F4, step 1.1, step 2.1]

4.1 Concatenate $V$ and $C$ on the two half-intervals and compose with $r$: $$J(x,t)=\begin{cases}rV(x,2t),&0\le t\le1/2,\\rC(x,2t-1),&1/2\le t\le1.\end{cases}$$ The seam is $rb(x)$, the initial value is $v(x)$ and the final value is $fw(x)$. On $L$, step 1.1 gives $J(l,t)=T(l,\min(4t,1))$ for the first half; on the second half $C$ is constantly $ju$, and its projection is $fu(l)=T(l,1)$. Hence the displayed formula holds for all $t$. In particular any stationary $T$ track stays stationary, and strict commuting data yield the rel-$L$ conclusion. [F1, step 1.1, step 3.1]

5.1 If $P$ is empty, weak equivalence forces $Y$ empty. Existence of $v$ then forces $K$ and $L$ empty, and the unique maps satisfy the result. Empty $L$ otherwise imposes no boundary condition; zero relative cells give $w=u$ and the same reparametrized $T$. A zero-cell uses a path, and a one-cell compression fixes its two possibly distinct endpoints by [F2]. No choice is made on all of $L$: its homotopy is prescribed as data, and only the finitely many cells outside it request witnesses. The formula in step 4.1 checks $t=0,1/4,1/2,1$, so the plateau in $\lambda$ is intentional and no claim of extending the original time parametrization is made. This proves every assertion choice-free. [F1, F2, F4, step 1.1, step 3.1, step 4.1] ∎
