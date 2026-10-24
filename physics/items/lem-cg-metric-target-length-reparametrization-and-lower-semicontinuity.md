---
id: lem-cg-metric-target-length-reparametrization-and-lower-semicontinuity
kind: lemma
title: "Length in a metric target: lower semicontinuity and arc-length reparametrization"
status: published
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 3
deps: [def-metric-space, lem-metric-nonnegativity, lem-metric-reverse-triangle, def-extended-reals, lem-extended-reals-complete, def-upper-bound, def-infimum, def-topology-of-uniform-convergence, def-limsup-and-liminf-of-nonnegative-extended-sequences, def-real-limit, thm-algebra-of-limits, lem-limit-preserves-order, cor-archimedean-reciprocal, lem-of-add-order, def-complete-ordered-field, cor-connected-subsets-of-the-line, cor-intermediate-value-theorem-topological, def-metric-continuity, def-equicontinuity, def-cg-abstract-isometric-polyhedral-gluing-and-chain-metric, thm-cg-polyhedral-chain-metric-topology-and-properness]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Martin R. Bridson and André Haefliger, Metric Spaces of Non-Positive Curvature (Springer Grundlehren 319, 1999; author-hosted PDF)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/bridsonhaefligerx.pdf"
      locator: "I.1.18-I.1.20, printed pp. 11-13 (length as the supremum of polygonal sums, the chord bound, invariance under monotone reparametrization, the arclength function, its continuity, the unique unit-speed reparametrization and lower semicontinuity under uniform convergence)"
verification:
  audited: "2026-10-08"
  precheck: pass
---

## Statement

Let $(X,d)$ be a metric space ([[def-metric-space]]) and let $a<b$ be real numbers. A **path** in $X$ is a map $\gamma\colon[a,b]\to X$. A **partition** of $[a,b]$ is a finite sequence $a=t_0<t_1<\dots<t_m=b$; the **polygonal sum** of $\gamma$ over that partition is $\sum_{i=1}^{m}d(\gamma(t_{i-1}),\gamma(t_i))$, and the **length** of $\gamma$ is the supremum
$$L(\gamma):=\sup\Bigl\{\,\sum_{i=1}^{m}d(\gamma(t_{i-1}),\gamma(t_i)) : a=t_0<\dots<t_m=b\,\Bigr\}\in[0,\infty]$$
For a singleton interval $[u,u]$, its only partition is the one-term sequence $u$, its polygonal sum is the empty sum $0$, and its path length is $0$. For nondegenerate intervals the supremum is taken in the extended reals ([[def-extended-reals]], [[lem-extended-reals-complete]], [[def-upper-bound]]); $\gamma$ is **rectifiable** if $L(\gamma)<\infty$. For $[u,v]\subseteq[a,b]$ write $\gamma|_{[u,v]}$ for the restriction of $\gamma$ to $[u,v]$, a path on $[u,v]$, and $L(\gamma|_{[u,v]})$ for its length.

**Chord bound and additivity at the initial point.** For $a\le u\le v\le b$ one has $d(\gamma(u),\gamma(v))\le L(\gamma|_{[u,v]})$, and for $a\le v\le w\le b$ one has $L(\gamma|_{[a,w]})=L(\gamma|_{[a,v]})+L(\gamma|_{[v,w]})$; in particular $s(t):=L(\gamma|_{[a,t]})$ is nondecreasing on $[a,b]$.

**(i) Lower semicontinuity.** If $\gamma_k,\gamma\colon[a,b]\to X$ are paths with $\sup_{t\in[a,b]}d(\gamma_k(t),\gamma(t))\to0$ (uniform convergence, [[def-topology-of-uniform-convergence]]), then $L(\gamma)\le\liminf_{k\to\infty}L(\gamma_k)$, the limit inferior being taken in $[0,\infty]$ ([[def-limsup-and-liminf-of-nonnegative-extended-sequences]]).

**(ii) Arc-length parametrization.** If $\gamma$ is continuous ([[def-metric-continuity]]) and rectifiable, with $L:=L(\gamma)<\infty$, then $s(t):=L(\gamma|_{[a,t]})$ defines a continuous nondecreasing surjection $s\colon[a,b]\to[0,L]$ with $s(a)=0$ and $s(b)=L$; there is a unique map $\bar\gamma\colon[0,L]\to X$ with $\gamma=\bar\gamma\circ s$; and $\bar\gamma$ is $1$-Lipschitz with $L(\bar\gamma|_{[r,q]})=q-r$ for all $0\le r\le q\le L$. If $L=0$ then $\gamma$ is constant, $[0,L]=\{0\}$, and $\bar\gamma$ is that constant.

**(iii) Equicontinuity of bounded arc-length families.** Call a path $\gamma\colon[a,b]\to X$ **arc-length parametrized** when $L(\gamma)<\infty$ and
$$L(\gamma|_{[s,t]})=\frac{t-s}{b-a}\,L(\gamma)\qquad\text{for all } a\le s\le t\le b .$$
If $M<\infty$ and the paths $\gamma_k\colon[0,1]\to X$ are arc-length parametrized with $L(\gamma_k)\le M$ for every $k$, then each $\gamma_k$ is $M$-Lipschitz and the family $(\gamma_k)$ is equicontinuous and uniformly equicontinuous ([[def-equicontinuity]]).

**(iv) Application to polyhedral gluings.** If $X$ carries the chain metric $d$ of an isometric polyhedral gluing with hypotheses (H1)-(H3) ([[def-cg-abstract-isometric-polyhedral-gluing-and-chain-metric]]), then $d$ is a metric on $X$ ([[thm-cg-polyhedral-chain-metric-topology-and-properness]] (1)), and clauses (i)-(iii) apply verbatim to paths in $(X,d)$.

No compactness, completeness, convexity or local structure of $X$ is used in (i)-(iii), and no Euclidean-target theorem on arc length is invoked: the statements are proved in the stated metric generality.

## Facts & Assumptions

**Given:** A metric space $(X,d)$, real numbers $a<b$, and paths $\gamma,\gamma_k\colon[a,b]\to X$ as in the Statement, together with the partition sums, the length $L$ and the restrictions $\gamma|_{[u,v]}$ defined there.

[F1] As a metric space, $(X,d)$ satisfies $d(x,x)=0$, $d(x,y)=d(y,x)$ and $d(x,z)\le d(x,y)+d(y,z)$ for all $x,y,z\in X$, and $d(x,y)\ge0$. [[def-metric-space]], [[lem-metric-nonnegativity]]

[F2] Reverse triangle inequality: $|d(x,z)-d(y,z)|\le d(x,y)$ for all $x,y,z\in X$. [[lem-metric-reverse-triangle]]

[F3] The extended real line $\overline{\mathbb{R}}$ is totally ordered, its order restricts to that of $\mathbb{R}$, and every subset of $\overline{\mathbb{R}}$ has a least upper bound and a greatest lower bound in $\overline{\mathbb{R}}$; a least upper bound of a set is an upper bound of it lying below every upper bound, and a greatest lower bound is a lower bound lying above every lower bound. [[def-extended-reals]], [[lem-extended-reals-complete]], [[def-upper-bound]], [[def-infimum]]

[F4] A sequence of maps into a metric space converges uniformly when one index serves every point of the domain: for every real $\varepsilon>0$ there is $K$ with $d(f_k(x),f(x))<\varepsilon$ for every $x$ and every $k\ge K$. [[def-topology-of-uniform-convergence]]

[F5] For a sequence $(a_k)$ in $[0,+\infty]$ the limit inferior is the supremum of the tail infima, $\liminf_k a_k=\sup_{N\in\mathbb{N}}\inf_{k\ge N}a_k$, all suprema and infima taken in $\overline{\mathbb{R}}$. [[def-limsup-and-liminf-of-nonnegative-extended-sequences]]

[F6] Real sequences: $x_k\to x$ means that for every real $\varepsilon>0$ there is $K$ with $|x_k-x|<\varepsilon$ for all $k\ge K$; a finite sum of convergent real sequences converges to the sum of the limits; and if $x_k\le y_k$ from some index on, then $\lim_k x_k\le\lim_k y_k$ whenever both limits exist. [[def-real-limit]], [[thm-algebra-of-limits]], [[lem-limit-preserves-order]]

[F7] Archimedean property and translation: for every real $\varepsilon>0$ there is a natural number $n\ge1$ with $1/n<\varepsilon$, and $x<y$ implies $x+z<y+z$ for reals $x,y,z$. [[cor-archimedean-reciprocal]], [[lem-of-add-order]]

[F8] The real line is the complete ordered field: every nonempty set of reals that is bounded above has a real least upper bound. Every interval is connected, and a continuous real-valued map on a connected space assumes every value between any two of its values. [[def-complete-ordered-field]], [[cor-connected-subsets-of-the-line]], [[cor-intermediate-value-theorem-topological]]

[F9] Metric continuity: $\gamma$ is continuous at $t$ when for every real $\varepsilon>0$ there is a real $\delta>0$ with $d(\gamma(t'),\gamma(t))<\varepsilon$ for every $t'$ with $|t'-t|<\delta$. [[def-metric-continuity]]

[F10] Uniform equicontinuity of a family of maps between metric spaces asks for one $\delta$ serving every member of the family and every pair of points within $\delta$; uniform equicontinuity implies equicontinuity. [[def-equicontinuity]]

[F11] For an isometric polyhedral gluing with hypotheses (H1)-(H3), the chain metric candidate is a metric on the gluing and its metric topology is the weak topology. [[def-cg-abstract-isometric-polyhedral-gluing-and-chain-metric]], [[thm-cg-polyhedral-chain-metric-topology-and-properness]]

## Proof

**Given:** A metric space $(X,d)$, real numbers $a<b$, a path $\gamma\colon[a,b]\to X$ and, where the clause says so, paths $\gamma_k$ as in the Statement.

1.1 (Chord bound, additivity at the initial point, monotonicity.) For $a\le u\le v\le b$ if $u=v$ both the chord and the length are $0$ by the singleton convention and [F1]; if $u<v$ the sequence $u,v$ is a partition of $[u,v]$ with polygonal sum $d(\gamma(u),\gamma(v))$, so $d(\gamma(u),\gamma(v))\le L(\gamma|_{[u,v]})$ because $L(\gamma|_{[u,v]})$ is the least upper bound of all polygonal sums [F3]. For $a\le v\le w\le b$ let first $P$ be a partition of $[a,w]$; inserting $v$ if it is absent gives a partition $P'$ of $[a,w]$ whose polygonal sum is at least that of $P$ by the triangle inequality [F1], and which is the union of a partition of $[a,v]$ and a partition of $[v,w]$. Hence every polygonal sum of $\gamma|_{[a,w]}$ is at most $L(\gamma|_{[a,v]})+L(\gamma|_{[v,w]})$, so $L(\gamma|_{[a,w]})\le L(\gamma|_{[a,v]})+L(\gamma|_{[v,w]})$ [F3]. Conversely, if both summands are finite, then for every real $\varepsilon>0$ there are partitions of $[a,v]$ and of $[v,w]$ with sums exceeding $L(\gamma|_{[a,v]})-\varepsilon/2$ and $L(\gamma|_{[v,w]})-\varepsilon/2$, and their union is a partition of $[a,w]$, so $L(\gamma|_{[a,w]})\ge L(\gamma|_{[a,v]})+L(\gamma|_{[v,w]})-\varepsilon$; as the real $\varepsilon>0$ is arbitrary, [F7] gives $L(\gamma|_{[a,w]})\ge L(\gamma|_{[a,v]})+L(\gamma|_{[v,w]})$. If $L(\gamma|_{[a,v]})=+\infty$, then every partition of $[a,v]$ extends by $w$ to a partition of $[a,w]$ with sum no smaller, since the added chord is nonnegative, so $L(\gamma|_{[a,w]})\ge L(\gamma|_{[a,v]})=+\infty$ and the two sides agree; and if $L(\gamma|_{[a,v]})<\infty$ while $L(\gamma|_{[v,w]})=+\infty$, then for every real $M$ there is a partition of $[v,w]$ with sum exceeding $M$, and adjoining any fixed partition of $[a,v]$ yields a partition of $[a,w]$ with sum exceeding $M$, so $L(\gamma|_{[a,w]})=+\infty$. The degenerate cases $v=a$ or $v=w$ follow directly from the singleton convention. This proves additivity, and monotonicity of $s$ follows from $s(w)=s(v)+L(\gamma|_{[v,w]})\ge s(v)$ for $v\le w$ because lengths are suprema of sums of nonnegative terms [F1, F3]. [F1, F3, F7]

1.2 (Lower semicontinuity.) Suppose $u\in\overline{\mathbb{R}}$ is an upper bound of the tail infima $\ell_N:=\inf_{k\ge N}L(\gamma_k)$ of [F5]; I show $u\ge L(\gamma)$. Assume $u<L(\gamma)$. Then $u$ is a real number, because $u=+\infty$ contradicts $u<L(\gamma)\le+\infty$ and $u=-\infty$ is impossible as all $L(\gamma_k)\ge0$ forces every $\ell_N\ge0$ [F1, F3]. Since $L(\gamma)$ is the least upper bound of the polygonal sums of $\gamma$ [F3] and $u<L(\gamma)$, some partition $P$ of $[a,b]$ has polygonal sum $S(P)>u$. By [F7] choose a natural number $n\ge1$ with $1/n<S(P)-u$. For each partition point $t_i$, the convergence $\sup_t d(\gamma_k(t),\gamma(t))\to0$ gives $d(\gamma_k(t_i),\gamma(t_i))\to0$ [F4]; consequently $S_k(P):=\sum_id(\gamma_k(t_{i-1}),\gamma_k(t_i))$ converges to $S(P)$ by [F2] and [F6]. So there is $K$ with $S_k(P)>S(P)-1/n>u$ for all $k\ge K$. Since $S_k(P)\le L(\gamma_k)$ by [F3], this gives $\ell_K=\inf_{k\ge K}L(\gamma_k)\ge S(P)-1/n>u$, contradicting that $u$ is an upper bound of the $\ell_N$. Hence every upper bound $u$ of the tail infima satisfies $u\ge L(\gamma)$, and since the least such upper bound is $\liminf_k L(\gamma_k)$ [F5], $L(\gamma)\le\liminf_k L(\gamma_k)$. [F1, F2, F3, F4, F5, F6, F7]

2.1 (The arclength function.) From now on assume that $\gamma$ is continuous and that $L:=L(\gamma)<\infty$; write $s(t):=L(\gamma|_{[a,t]})$. Then $s(a)=0$, $s(b)=L$, and $s$ is nondecreasing by [step 1.1]; moreover $s(w)-s(v)=L(\gamma|_{[v,w]})$ for all $a\le v\le w\le b$, by additivity at the initial point [step 1.1]. [step 1.1]

2.2 (Equicontinuity of bounded arc-length families.) Let $\gamma_k\colon[0,1]\to X$ be arc-length parametrized with $L(\gamma_k)\le M<\infty$. For $0\le s\le t\le1$ the chord bound [step 1.1] and the definition of arc-length parametrized give $d(\gamma_k(s),\gamma_k(t))\le L(\gamma_k|_{[s,t]})=(t-s)L(\gamma_k)\le M(t-s)$, so every $\gamma_k$ is $M$-Lipschitz. If $M=0$ then every $\gamma_k$ is constant by separation [F1] and the family is uniformly equicontinuous with any $\delta>0$. If $M>0$ and $\varepsilon>0$ is real, take $\delta:=\varepsilon/M>0$; then $d(\gamma_k(s),\gamma_k(t))\le M|s-t|<\varepsilon$ for all $k$ and all $s,t$ with $|s-t|<\delta$, so the family is uniformly equicontinuous, hence equicontinuous [F10]. [F1, F10, step 1.1]

3.1 ($s$ is continuous.) Fix $t\in[a,b)$ and a real $\delta>0$; put $\varepsilon:=\delta/2$. Since $L$ is the least upper bound of the polygonal sums, choose a partition $P$ of $[a,b]$ with polygonal sum $S(P)>L-\varepsilon$ [F3], and insert $t$ into $P$ if absent (the sum only increases [F1]); write $A$ and $B$ for the sums of the parts of $P$ on $[a,t]$ and on $[t,b]$, so that $A+B=S(P)$, and let $t^{+}$ be the successor of $t$ in $P$ when $t<b$. By continuity of $\gamma$ at $t$ [F9] choose $\eta\in(0,t^{+}-t]$ with $d(\gamma(t),\gamma(t'))<\varepsilon$ for $|t'-t|<\eta$; I claim $s(t+h)-s(t)\le\delta$ for every $h\in(0,\eta)$. Let $R$ be a partition of $[t,t+h]$; then the union of the parts of $P$ on $[a,t]$, of $R$, and of the part of $P$ on $[t^{+},b]$ is a partition of $[a,b]$ whose polygonal sum is $A+\mathrm{Sum}(R)+d(\gamma(t+h),\gamma(t^{+}))+\bigl(B-d(\gamma(t),\gamma(t^{+}))\bigr)\le L$, so $\mathrm{Sum}(R)\le L-S(P)+d(\gamma(t),\gamma(t^{+}))-d(\gamma(t+h),\gamma(t^{+}))\le L-S(P)+d(\gamma(t),\gamma(t+h))<\varepsilon+\varepsilon=2\varepsilon$ by the reverse triangle inequality [F2]. Taking the supremum over $R$ gives $s(t+h)-s(t)=L(\gamma|_{[t,t+h]})\le2\varepsilon=\delta$ [step 2.1]. The same argument applied to partitions of $[t-h,t]$ gives left-continuity at every $t\in(a,b]$; hence $s$ is continuous. [F1, F2, F3, F9, step 2.1]

4.1 ($s$ is surjective.) The interval $[a,b]$ is connected [F8] and $s\colon[a,b]\to\mathbb{R}$ is continuous [step 3.1] with $s(a)=0$ and $s(b)=L$ [step 2.1]; by the intermediate value theorem [F8], for every real $r$ with $0\le r\le L$ there is $t\in[a,b]$ with $s(t)=r$. [F8, step 2.1, step 3.1]

5.1 (Factorisation through $s$.) If $a\le u\le v\le b$ satisfy $s(u)=s(v)$, then $L(\gamma|_{[u,v]})=s(v)-s(u)=0$ [step 2.1], so $d(\gamma(u),\gamma(v))\le0$ by the chord bound [step 1.1] and hence $\gamma(u)=\gamma(v)$ by separation [F1]. Since $s$ is surjective [step 4.1], there is therefore a well-defined and unique map $\bar\gamma\colon[0,L]\to X$ with $\gamma=\bar\gamma\circ s$, namely $\bar\gamma(r):=\gamma(t)$ for any $t$ with $s(t)=r$. If $L=0$ then $s$ vanishes identically and the same argument with $u=a$, $v=b$ shows that $\gamma$ is constant; then $[0,L]=\{0\}$ and $\bar\gamma$ is that constant. [F1, step 1.1, step 2.1, step 4.1]

6.1 ($\bar\gamma$ is $1$-Lipschitz and has unit speed.) Given $0\le r\le q\le L$, choose by [step 4.1] points $u,v\in[a,b]$ with $s(u)=r$ and $s(v)=q$, and relabel so that $u\le v$; then $d(\bar\gamma(r),\bar\gamma(q))=d(\gamma(u),\gamma(v))\le L(\gamma|_{[u,v]})=s(v)-s(u)=q-r$ by the chord bound [step 1.1] and [step 2.1], so $\bar\gamma$ is $1$-Lipschitz. If $r=q$, the singleton-interval convention gives $L(\bar\gamma|_{[r,r]})=0=q-r$; hence assume $r<q$ for the length identity. Define, for each real $\rho$ with $0\le\rho\le L$, the number $u_\rho:=\sup\{t\in[a,b]:s(t)\le\rho\}$, which exists by the least-upper-bound property [F8] and satisfies $s(u_\rho)=\rho$: indeed $s(u_\rho)\le\rho$ because points of the set approach $u_\rho$ from below and $s$ is continuous [step 3.1], while if $u_\rho<b$ then every $t>u_\rho$ has $s(t)>\rho$ and continuity gives $s(u_\rho)\ge\rho$, and if $u_\rho=b$ then $s(u_\rho)=L\le\rho\le L$. Also $u_\rho\le u_{\rho'}$ for $\rho\le\rho'$, and $\bar\gamma(\rho)=\gamma(u_\rho)$ [step 5.1]. Now let $r=\rho_0<\dots<\rho_N=q$ be a partition of $[r,q]$; its polygonal sum for $\bar\gamma$ is $\sum_id(\gamma(u_{\rho_{i-1}}),\gamma(u_{\rho_i}))\le\sum_iL(\gamma|_{[u_{\rho_{i-1}},u_{\rho_i}]})=\sum_i(\rho_i-\rho_{i-1})=q-r$ by the chord bound [step 1.1] and [step 2.1], so $L(\bar\gamma|_{[r,q]})\le q-r$. Conversely let $v_0<\dots<v_N$ be a partition of $[u_r,u_q]$; its polygonal sum for $\gamma$ is $\sum_id(\bar\gamma(s(v_{i-1})),\bar\gamma(s(v_i)))$, the points $s(v_i)$ form a nondecreasing sequence from $r=s(v_0)$ to $q=s(v_N)$, and after deleting repetitions this is a partition of $[r,q]$ whose polygonal sum for $\bar\gamma$ is the same number; hence every polygonal sum of $\gamma|_{[u_r,u_q]}$ is at most $L(\bar\gamma|_{[r,q]})$, and $q-r=L(\gamma|_{[u_r,u_q]})\le L(\bar\gamma|_{[r,q]})$ [step 2.1]. Therefore $L(\bar\gamma|_{[r,q]})=q-r$. [F8, step 1.1, step 2.1, step 3.1, step 4.1, step 5.1]

7.1 (Application.) Let $X$ carry the chain metric $d$ of an isometric polyhedral gluing with (H1)-(H3); by [F11] this $d$ is a metric on $X$, so clauses (i)-(iii), whose statements and proofs mention only the metric space $(X,d)$, hold verbatim for paths in $(X,d)$; in particular the constants $a<b$ are arbitrary reals and no hypothesis beyond the metric axioms was used. [F11, step 1.2, step 2.2, step 6.1] ∎
