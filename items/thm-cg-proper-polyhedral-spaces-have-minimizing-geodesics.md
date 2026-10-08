---
id: thm-cg-proper-polyhedral-spaces-have-minimizing-geodesics
kind: theorem
title: "Under the Axiom of Choice, proper polyhedral spaces admit minimizing geodesics"
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 4
deps: [def-cg-abstract-isometric-polyhedral-gluing-and-chain-metric, thm-cg-polyhedral-chain-metric-topology-and-properness, lem-cg-metric-target-length-reparametrization-and-lower-semicontinuity, cor-arzela-ascoli-subsequence-theorem-for-proper-metric-targets, def-geodesic-and-geodesic-metric-space, def-axiom-of-choice, def-metric-space, def-metric-ball, def-metric-bounded-diameter, def-metric-compactness, def-infimum, def-equicontinuity, thm-metric-regularity-hierarchy, thm-heine-borel-rn, lem-real-line-is-a-metric-space, def-isometry-and-metric-embedding, def-interval, def-limsup-and-liminf-of-nonnegative-extended-sequences, cor-archimedean-reciprocal]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Martin R. Bridson and André Haefliger, Metric Spaces of Non-Positive Curvature (Springer Grundlehren 319, 1999; author-hosted PDF)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/bridsonhaefligerx.pdf"
      locator: "I.1.18-I.1.20, printed pp. 11-13 (length, the chord bound, arclength reparametrization, lower semicontinuity); I.7.13 and I.7.19, printed pp. 101 and 105-111 (finitely many shapes: complete geodesic spaces)"
    - title: "Michael W. Davis, The Geometry and Topology of Coxeter Groups (first-edition author manuscript, 2007-2008)"
      url: "https://people.math.osu.edu/davis.12/davisbook.pdf"
      locator: "SS12.1, printed pp. 231-233 (piecewise Euclidean cell structure and the finite-shapes geodesic remark); Appendix I.3, printed pp. 507-508 (X_k-cell structures and the length metric)"
verification:
  precheck: pending
---

## Statement

**Assume the Axiom of Choice** ([[def-axiom-of-choice]]). Let $X$ be an isometric polyhedral gluing with standing hypotheses (H1)-(H3) of [[def-cg-abstract-isometric-polyhedral-gluing-and-chain-metric]], so that $(X,d)$ is a proper metric space by [[thm-cg-polyhedral-chain-metric-topology-and-properness]]. Then every pair $x,y\in X$ is joined by a minimizing geodesic: there is a path $\gamma\colon[0,d(x,y)]\to X$ with $\gamma(0)=x$, $\gamma(d(x,y))=y$ and $d(\gamma(s),\gamma(t))=|s-t|$ for all $s,t$ ([[def-geodesic-and-geodesic-metric-space]]); in particular $(X,d)$ is a geodesic metric space. More precisely, every sequence of chains from $x$ to $y$ whose lengths tend to $d(x,y)$ has a subsequence whose associated polygonal paths, each traversed at constant speed on the common domain $[0,1]$, converge uniformly to a continuous path of length $d(x,y)$ whose arc-length reparametrization is a minimizing geodesic from $x$ to $y$. The case $x=y$ is included: then $d(x,y)=0$ and the degenerate interval $[0,0]=\{0\}$ carries the geodesic $\gamma(0)=x$.

## Facts & Assumptions

**Given:** An isometric polyhedral gluing $X$ with (H1)-(H3), its chain metric candidate $d$, and points $x,y\in X$ with $R:=d(x,y)$; the Axiom of Choice is assumed.

[F1] Chains and the chain metric: a chain from $x$ to $y$ is a finite sequence $x=x_0,\dots,x_m=y$ such that each consecutive pair lies in a common cell; its length is the sum of the Euclidean distances of its steps computed in any common cells; $d$ is the infimum of the lengths of chains from $x$ to $y$, and these lengths form a nonempty set of reals. ([[def-cg-abstract-isometric-polyhedral-gluing-and-chain-metric]])

[F2] Under (H1)-(H3), $d$ is a metric on $X$ and every closed $d$-bounded subset of $X$ is compact, so $(X,d)$ is proper and complete; in particular closed balls are compact. ([[thm-cg-polyhedral-chain-metric-topology-and-properness]], [[def-metric-compactness]], [[def-metric-space]])

[F3] In a metric space: $d(\gamma(u),\gamma(v))\le L(\gamma|_{[u,v]})$ (chord bound) and $L(\gamma|_{[a,w]})=L(\gamma|_{[a,v]})+L(\gamma|_{[v,w]})$ for paths, where $L$ is the supremum of polygonal sums; $L$ is lower semicontinuous under uniform convergence; and a continuous rectifiable path $\gamma\colon[a,b]\to X$ has a continuous nondecreasing surjective arclength function $s\colon[a,b]\to[0,L]$ with $s(a)=0$, $s(b)=L$, through which it factors uniquely as $\gamma=\bar\gamma\circ s$ with $\bar\gamma$ $1$-Lipschitz and $L(\bar\gamma|_{[r,q]})=q-r$. ([[lem-cg-metric-target-length-reparametrization-and-lower-semicontinuity]], [[def-metric-space]])

[F4] **Axiom of Choice** ([[def-axiom-of-choice]]): every family of nonempty sets has a choice function.

[F5] Ascoli-Arzela for proper targets, under the Axiom of Choice: for a nonempty compact metric domain $Z$, a proper metric target $Y$ and an equicontinuous sequence $(f_k)$ in $C(Z,Y)$ that is pointwise bounded, some subsequence converges uniformly to a member of $C(Z,Y)$. ([[cor-arzela-ascoli-subsequence-theorem-for-proper-metric-targets]])

[F6] Geodesic segments: a map $\gamma\colon[0,\ell]\to X$ with $\gamma(0)=x$, $\gamma(\ell)=y$ and $d(\gamma(s),\gamma(t))=|s-t|$ for all $s,t$ is a geodesic segment from $x$ to $y$, and necessarily $\ell=d(x,y)$; $(X,d)$ is geodesic when every two points are joined by one. ([[def-geodesic-and-geodesic-metric-space]])

[F7] The infimum $R=\inf S$ of a nonempty set $S$ of reals is the greatest lower bound of $S$, so for every real $\varepsilon>0$ there is $t\in S$ with $t<R+\varepsilon$. ([[def-infimum]])

[F8] Boundedness, balls and continuity: a subset is bounded when it lies in a ball $B(x_0,\rho)$ with $\rho>0$, and the closed ball about $x$ of radius $r$ is $\{z:d(x,z)\le r\}$ ([[def-metric-bounded-diameter]], [[def-metric-ball]]); an $M$-Lipschitz map between metric spaces is continuous, and a family with a common Lipschitz constant $M$ is equicontinuous ([[thm-metric-regularity-hierarchy]], [[def-equicontinuity]], [[def-metric-space]]).

[F9] The closed interval $[0,1]\subset\mathbb R$ is a nonempty compact metric space: it is nonempty, closed and bounded, hence compact by Heine-Borel on the real line, and carries the subspace metric of the usual metric $d_{\mathbb R}(x,y)=|x-y|$. ([[thm-heine-borel-rn]], [[lem-real-line-is-a-metric-space]], [[def-isometry-and-metric-embedding]], [[def-interval]])

[F10] For a sequence $(a_k)$ in $[0,\infty]$, the limit inferior is the supremum of the tail infima: $\liminf_k a_k=\sup_N\inf_{k\ge N}a_k$, so $\inf_{k\ge N}a_k\le\liminf_k a_k$ for every $N$; and for every real $\varepsilon>0$ there is a natural $N\ge1$ with $1/N<\varepsilon$. ([[def-limsup-and-liminf-of-nonnegative-extended-sequences]], [[cor-archimedean-reciprocal]])

## Proof

**Given:** The gluing $X$ with (H1)-(H3), the metric $d$ and its properties [F2], points $x,y\in X$ and $R=d(x,y)$.

1.1 (Realizing a chain by a path.) Every chain $x=x_0,\dots,x_m=y$ of length $\ell$ is the vertex sequence of a path $\gamma\colon[0,1]\to X$ traversing straight segments of the cells at constant speed, with $\gamma(0)=x$, $\gamma(1)=y$, $d(\gamma(s),\gamma(t))\le(t-s)\ell$ for all $s\le t$, and $L(\gamma)\le\ell$. Deleting one of each two consecutive equal points leaves a chain of the same length, so assume $x_{i-1}\ne x_i$ and put $L_i:=d_{p_i}(x_{i-1},x_i)>0$ and $\ell=L_1+\dots+L_m>0$; if $\ell=0$ the reduced chain is the single point $x=y$ and we take the constant path, for which all claims are immediate. For $t\in[0,1]$ define $\gamma(t)$ to be the point at fraction $(t-T_{i-1})/(T_i-T_{i-1})$ of the straight segment from $x_{i-1}$ to $x_i$ inside $C_{p_i}$, where $T_i:=(L_1+\dots+L_i)/\ell$; this is well defined because the segment lies in the convex cell $C_{p_i}$ [F1]. Given $s\le t$, the points $\gamma(s)$, the vertices $x_i$ strictly between the parameters $s$ and $t$, and $\gamma(t)$ form a chain whose steps lie in the traversed cells and whose length is the total traversed Euclidean distance $(t-s)\ell$, because the path moves at constant speed inside each cell; hence $d(\gamma(s),\gamma(t))\le(t-s)\ell$ by [F1]. Every polygonal sum of $\gamma$ over a partition is therefore at most $\ell$, so the supremum over partitions gives $L(\gamma)\le\ell$ [F3]. [F1, F3]

2.1 (Near-minimizing paths.) By [F7], for each $n\ge1$ there is a chain from $x$ to $y$ of length $\ell_n<R+1/n$; apply [F4] to the countable family of nonempty sets of such chains, recording in each chain a common cell for each step (only finitely many choices per chain). This selects a sequence of chains and their realizing paths from step 1.1. Each selected chain yields a path $\gamma_n\colon[0,1]\to X$ with $\gamma_n(0)=x$, $\gamma_n(1)=y$, $L(\gamma_n)\le\ell_n<R+1/n$ and $d(\gamma_n(s),\gamma_n(t))\le\ell_n\,|t-s|\le(R+1)|t-s|$, the last inequality because $1/n\le1$ and $R\ge0$. [F1, F4, F7, step 1.1]

3.1 (Equicontinuity and pointwise boundedness.) By step 2.1 each $\gamma_n$ is $(R+1)$-Lipschitz, hence continuous, and the family $(\gamma_n)$ is equicontinuous: for a real $\varepsilon>0$ the number $\delta:=\varepsilon/(R+1)>0$ satisfies $d(\gamma_n(s),\gamma_n(t))\le(R+1)|s-t|<\varepsilon$ for all $n$ and all $s,t$ with $|s-t|<\delta$. It is pointwise bounded: for every $t\in[0,1]$, $d(\gamma_n(t),x)=d(\gamma_n(t),\gamma_n(0))\le(R+1)t\le R+1$, so $\{\gamma_n(t):n\ge1\}\subseteq\bar B(x,R+1)\subseteq B(x,R+2)$ is bounded. [F8, step 2.1]

4.1 (The Ascoli subsequence.) The interval $[0,1]$ is a nonempty compact metric space [F9], the target $X$ is a proper metric space [F2], and $(\gamma_n)$ is an equicontinuous, pointwise bounded sequence of continuous maps by step 3.1, so the Ascoli-Arzela theorem [F5] — with its Choice hypothesis [F4] — gives a subsequence $(\gamma_{n_k})$ converging uniformly to a continuous $\gamma\colon[0,1]\to X$. Uniform convergence implies $\gamma(0)=x$ and $\gamma(1)=y$, since $\gamma_{n_k}(0)=x$ and $\gamma_{n_k}(1)=y$ for every $k$. [F2, F4, F5, F9, step 3.1]

5.1 (The limit has length $R$.) By lower semicontinuity [F3], $L(\gamma)\le\liminf_kL(\gamma_{n_k})$. For every real $\varepsilon>0$, the strictly increasing positive indices $n_k$ tend to infinity (inductively $n_k\ge k+1$), so $L(\gamma_{n_k})\le R+1/n_k<R+\varepsilon$ for all sufficiently large $k$ [step 2.1, F10]. Every tail, including those starting earlier, contains such a term; its infimum is therefore at most $R+\varepsilon$. Taking the supremum of all tail infima gives $\liminf_k L(\gamma_{n_k})\le R+\varepsilon$ by [F10]. As this holds for every $\varepsilon>0$, that limit inferior is at most $R$, and hence $L(\gamma)\le R$. Conversely the two-point partition gives $d(\gamma(0),\gamma(1))\le L(\gamma)$ [F3], that is $R\le L(\gamma)$ by step 4.1. Therefore $L(\gamma)=R<\infty$. [F3, F10, step 2.1, step 4.1]

6.1 (The minimizing geodesic.) Since $\gamma$ is continuous and rectifiable with $L(\gamma)=R$, clause (ii) of [F3] provides a continuous nondecreasing surjection $s\colon[0,1]\to[0,R]$ with $s(0)=0$, $s(1)=R$, a unique $\bar\gamma\colon[0,R]\to X$ with $\gamma=\bar\gamma\circ s$, and $L(\bar\gamma|_{[r,q]})=q-r$ for all $0\le r\le q\le R$; in particular $\bar\gamma(0)=\gamma(0)=x$ and $\bar\gamma(R)=\gamma(1)=y$. Let $0\le r\le q\le R$. The chord bound gives $d(\bar\gamma(r),\bar\gamma(q))\le L(\bar\gamma|_{[r,q]})=q-r$, and the triangle inequality for $d$ [F2] together with the chord bound on $[0,r]$ and $[q,R]$ gives $$R=d(x,y)\le d(x,\bar\gamma(r))+d(\bar\gamma(r),\bar\gamma(q))+d(\bar\gamma(q),y)\le r+d(\bar\gamma(r),\bar\gamma(q))+(R-q),$$ so $d(\bar\gamma(r),\bar\gamma(q))\ge q-r$. Hence $d(\bar\gamma(r),\bar\gamma(q))=q-r$ for all $r\le q$, and $\bar\gamma$ is a geodesic segment from $x$ to $y$ in the sense of [F6]; as $x,y$ were arbitrary, $(X,d)$ is geodesic. [F2, F3, F6, step 4.1, step 5.1]

7.1 (The subsequence clause.) Let now $(C^{(n)})$ be any sequence of chains from $x$ to $y$ with lengths $\ell_n\to R$, and choose realizing paths $\gamma_n$ from step 1.1 using [F4] if common cells are not already specified; then $L(\gamma_n)\le\ell_n$ and $d(\gamma_n(s),\gamma_n(t))\le\ell_n|t-s|$, and $\ell_n\le R+1$ for all sufficiently large $n$, so each $\gamma_n$ is $M$-Lipschitz with the common constant $M:=1+\sup_n\ell_n<\infty$ and the family is equicontinuous and pointwise bounded (all values lie in the bounded set $\bar B(x,M)$, since $d(\gamma_n(t),x)\le\ell_nt\le M$). Ascoli's theorem [F5] gives a uniformly convergent subsequence, and its limit has the same endpoints. The proof of step 5.1 applies because $L(\gamma_{n_k})\le\ell_{n_k}\to R$: every tail infimum is at most $R+\varepsilon$ for every $\varepsilon>0$, so lower semicontinuity and the chord bound give limit length exactly $R$ and whose arc-length reparametrization is, by step 6.1, a minimizing geodesic from $x$ to $y$. [F4, F5, F8, F10, step 1.1, step 3.1, step 5.1, step 6.1] ∎
