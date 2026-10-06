---
id: lem-gradient-like-perturbation-separates-adjacent-critical-levels
kind: lemma
title: "Gradient-like perturbation separates adjacent critical levels"
status: published
origin: pipeline
dependency_level: 3
deps: [def-morse-function-adapted-to-a-cobordism, lem-spheres-of-adjacent-critical-levels-have-product-neighbourhoods, lem-a-sphere-with-a-product-neighbourhood-can-be-moved-off-a-lower-dimensional-submanifold, lem-flow-reparametrization-realizes-a-level-isotopy, def-downward-gradient-like-vector-field, thm-fundamental-theorem-on-flows, def-countable-choice, lem-manifold-bump-for-a-compact-set-inside-an-open-set, thm-compactly-supported-vector-fields-are-complete]
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "John Milnor, Lectures on the h-Cobordism Theorem (notes by L. Siebenmann and J. Sondow), Sections 2-4, printed pp. 10-48"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/surgery/hcobord.pdf"
    - title: "Andrei Pajitnov, Circle-Valued Morse Theory (de Gruyter Studies in Mathematics 32), Chapter 5 Sections 1-3 (pp. 163-189) and Chapter 4 Section 3 (pp. 132-162)"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/pajbook.pdf"
proof_strategy: "dimension count, moving-off diffeomorphism, flow realization"
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $f$ be adapted on a compact triad with adapted
field $X$, and let $P$ (value $c$) and $Q$ (value $c'>c$) be consecutive
critical levels such that $\operatorname{ind}(p)\ge\operatorname{ind}(q)$ for
all $p\in P$, $q\in Q$. Let $U$ be a prescribed neighbourhood of a regular level
$f^{-1}(v)$ with $c<v<c'$. Then there is a complete adapted downward
gradient-like field $X'$ for $f$, equal to $X$ outside $U$, such that for all
$q\in Q$ and $p\in P$ the crossing spheres $A_q$ and $B_p$ of the previous
lemma are pairwise disjoint.

Consequently no trajectory of $X'$ has one limit in $P$ and the other in $Q$,
and the corresponding compact trajectory sets are disjoint. The field change may be chosen arbitrarily small in $C^\infty$ on $W$.

## Facts & Assumptions

[F1] [[def-morse-function-adapted-to-a-cobordism]]: An adapted pair $(f,X)$ on a triad $(W;M_0,M_1)$ consists of a smooth Morse function $f:W\to[0,1]$ with $f^{-1}(0)=M_0$, $f^{-1}(1)=M_1$, constant on the faces, all critical points interior, nondegenerate and outside a fixed collar of $\partial W$, together with a complete downward gradient-like field $X$ for $f$ pointing outward along $M_0$ and inward along $M_1$.

[F2] [[lem-spheres-of-adjacent-critical-levels-have-product-neighbourhoods]]: Assume $\mathrm{AC}_\omega$. Let $f$ be adapted on a compact triad with field $X$ and let $P$ (value $c$), $Q$ (value $c'>c$) be consecutive critical levels with $v\in(c,c')$ regular. Then for each $q\in Q$ the crossing set $A_q\subseteq f^{-1}(v)$ of the trajectories through the local unstable disk $D_q$ is a compact embedded sphere of dimension $\operatorname{ind}(q)-1$, and for each $p\in P$ the crossing set $B_p$ of the trajectories through the local stable disk $E_p$ is a compact embedded sphere of dimension $n-\operatorname{ind}(p)-1$, with $A_q=\varnothing$ when $\operatorname{ind}(q)=0$ and $B_p=\varnothing$ when $\operatorname{ind}(p)=n$; For $n\ge1$, each of these spheres carries a product neighbourhood in the closed $(n-1)$-manifold $f^{-1}(v)$; for $n=0$, the regular fibre and all crossing sets are empty, with unique empty product maps and no dimension-$-1$ manifold. A trajectory has a limit in $Q$ exactly when it passes through the local unstable disk of that limit and a limit in $P$ exactly when it passes through the local stable disk of that limit, so a trajectory whose limits lie in $Q$ and $P$ crosses $f^{-1}(v)$ exactly once, at a point of $A_q\cap B_p$, and every point of $A_q\cap B_p$ lies on such a trajectory.

[F3] [[lem-a-sphere-with-a-product-neighbourhood-can-be-moved-off-a-lower-dimensional-submanifold]]: Assume $\mathrm{AC}_\omega$. Let $A,B\subseteq V$ be embedded submanifolds of a smooth manifold $V$, with $A$ compact, with $\dim A+\dim B<\dim V$, and suppose that $A$ has a product neighbourhood in $V$. Then for every neighbourhood of $A$ there is a diffeomorphism $h:V\to V$, smoothly isotopic to the identity and supported in that neighbourhood, with $h(A)\cap B=\varnothing$.

[F4] [[lem-flow-reparametrization-realizes-a-level-isotopy]]: Assume $\mathrm{AC}_\omega$. Let $X$ be a complete downward gradient-like field for a smooth function $f$, let $f^{-1}[a,b]$ be a compact regular band, and let $h_t$, $t\in[0,1]$, be a smooth isotopy of $f^{-1}(b)$ with $h_0=\mathrm{id}$ whose support is contained in a compact subset. Then there is a complete downward gradient-like field $X'$ for $f$, equal to $X$ outside $f^{-1}(a,b)$, such that the diffeomorphism $f^{-1}(a)\to f^{-1}(b)$ obtained by following $X'$-trajectories backwards equals $h_1\circ\varphi$, where $\varphi$ is the corresponding diffeomorphism for $X$.

[F5] [[def-downward-gradient-like-vector-field]]: Let $f$ be Morse. A smooth field $X$ is downward gradient-like for $f$ when $df_x(X_x)<0$ off $\operatorname{Crit}(f)$ and $X$ has the form $(2u,-2v)$ in Morse coordinates at every critical point.

[F6] [[thm-fundamental-theorem-on-flows]]: A smooth vector field on a manifold has a unique maximal local flow, smooth on an open domain, with interval fibres containing $0$.

[F7] [[def-countable-choice]]: The Axiom of Countable Choice $\mathrm{AC}_\omega$: every at most countable family of nonempty sets has a choice function.

[F8] [[lem-manifold-bump-for-a-compact-set-inside-an-open-set]] supplies the cutoff on a relatively compact carrier neighborhood, and [[thm-compactly-supported-vector-fields-are-complete]] gives completeness under $\mathrm{AC}_\omega$.

## Proof

**Given:** The adapted pair $(f,X)$ on the compact triad, the consecutive critical levels $P$ (value $c$) and $Q$ (value $c'>c$) with $\operatorname{ind}(p)\ge\operatorname{ind}(q)$ for all $p,q$, the regular value $v\in(c,c')$, and the prescribed neighbourhood $U$ of $f^{-1}(v)$.

1.1 If $n=0$, regularity gives $f^{-1}(v)=\varnothing$ and [F2] gives empty crossing sets. Take $X'=X$: every trajectory is constant, so there is no connection between the distinct levels, all required disjointness holds, and the field change is zero. Henceforth assume $n\ge1$. Since $f^{-1}(v)$ is compact and $U$ is an open neighbourhood of it, choose $a\in(c,v)$ such that the closed band $K:=f^{-1}[a,v]$ is contained in $U$; every value in the open interval $(c,c')$ is regular because $P$ and $Q$ are consecutive critical levels, so $a$ and $v$ are regular. The band $K$ is compact and contains no critical point, and $f^{-1}(v)$ is a closed embedded $(n-1)$-manifold. [F1, F2, given, choose]

1.2 For $q\in Q$ and $p\in P$ let $A_q,B_p\subseteq f^{-1}(v)$ be the crossing spheres of [F2]. They are compact embedded spheres, possibly empty, and by [F2] each carries a product neighbourhood in $f^{-1}(v)$. Moreover the spheres $A_q$ with $q\in Q$ are pairwise disjoint, and so are the spheres $B_p$ with $p\in P$: a point of $f^{-1}(v)$ lies on a unique trajectory, and a trajectory has at most one limit in each of the two time directions, so the critical point whose local disk the trajectory passes through is determined by the point. [F2, F6, algebra]

1.3 Compute the dimensions: $\dim A_q=\operatorname{ind}(q)-1$ when $\operatorname{ind}(q)\ge1$ and $A_q=\varnothing$ when $\operatorname{ind}(q)=0$, while $\dim B_p=n-\operatorname{ind}(p)-1$ when $\operatorname{ind}(p)\le n-1$ and $B_p=\varnothing$ when $\operatorname{ind}(p)=n$. For a nonempty pair, $\dim A_q+\dim B_p=(\operatorname{ind}(q)-1)+(n-\operatorname{ind}(p)-1)=n-2-(\operatorname{ind}(p)-\operatorname{ind}(q))\le n-2<n-1=\dim f^{-1}(v)$, because $\operatorname{ind}(p)\ge\operatorname{ind}(q)$ by hypothesis. [F2, algebra]

1.4 For a finite pairwise disjoint compact family $A_i$ and finite family $B_j$ satisfying the dimension inequalities, choose disjoint product tubes of the $A_i$. In the projection construction of [F3], avoid the union of the finitely many projected $B_j$ inside each tube: every projected image is null, their finite union is null, and its complement is dense. With a fixed product-tube cutoff, a single arbitrarily small nonzero translation therefore avoids every $B_j$ at once, and its compactly supported flow stays inside the tube. Composing the flows on the disjoint tubes gives an isotopy $l$ with $l(A_i)\cap B_j=\varnothing$ for every pair. Set $h=l^{-1}$; then $A_i\cap h(B_j)=\varnothing$. By the fixed-cutoff parameter-flow argument in [F3], the whole isotopy and its inverse may be chosen arbitrarily $C^\infty$-close to the identity. Unlike successive moves against different $B_j$ in the same tube, this argument preserves every avoidance condition. [F3, F7, construct, algebra]

2.1 Apply step 1.4 on $V=f^{-1}(v)$ with $A_i$ the nonempty spheres $A_q$ and $B_j$ the nonempty spheres $B_p$, and prescribed neighbourhood $N$ a tubular neighbourhood of $\bigcup_qA_q$ in $f^{-1}(v)$. The dimension inequality is step 1.3, and the product neighbourhoods and the pairwise disjointness are step 1.2; hence there is a diffeomorphism $h$ of $f^{-1}(v)$, isotopic to the identity and compactly supported, with $A_q\cap h(B_p)=\varnothing$ for all $q,p$. [F2, F3, step 1.2, step 1.3, step 1.4, construct]

3.1 Realize $h$ by a perturbation of the field. The isotopy from the identity to $h$ constructed in step 1.4 has compact support, so the construction in the proof of [F4] applies inside the compact regular band $K=f^{-1}[a,v]$ with the isotopy of the level $f^{-1}(v)$ and produces a complete downward gradient-like field $X'$ for $f$, equal to $X$ outside $f^{-1}(a,v)\subseteq K\subseteq U$, whose trajectory transport $\varphi'$ from level $a$ to level $v$ satisfies $\varphi'=h\circ\varphi$, where $\varphi$ is the transport of $X$. In particular $X'$ is again an adapted field: it equals $X$ near $\partial W$, where it still points outward along $M_0$ and inward along $M_1$, it has the same critical points as $X$ because $f$ is unchanged and no point of $f^{-1}(a,v)$ is critical, and it has a complete collar carrier. Extend its compact interior field change by zero to the carrier of $X$ and multiply the ambient result by a cutoff equal to one near $W$ and compactly supported in a relatively compact carrier neighborhood. It is complete by [F8] and restricts to $X'$. This replaces the global completeness step of [F4]'s construction; its level-flow and isotopy construction uses only the interior band. With this band and its normalized coordinates fixed, the field is $\lambda F_*(-\partial_s)$ as in [F4]. As the level isotopy tends to the identity in $C^\infty$, this formula tends to $X$ in $C^\infty$ on the compact band, including its fixed endpoint neighbourhoods. Therefore the interior change can be made arbitrarily small. [F1, F4, F5, F8, step 1.1, step 2.1, construct]

4.1 Identify the new crossing spheres. Write $T:f^{-1}(v)\to f^{-1}(a)$ for the map that follows the $X$-trajectory downwards from level $v$ to level $a$, so that $B_p=T^{-1}(B_p^a)$, where $B_p^a$ is the crossing set of the $E_p$-trajectories at level $a$. The new crossing sphere of $p$ is the preimage of $B_p^a$ under the new downward transport from $v$ to $a$, which is the inverse of $\varphi'=h\circ\varphi$; hence $B'_p=(\varphi^{-1}\circ h^{-1})^{-1}(B_p^a)=\varphi'(B_p^a)=h(\varphi(B_p^a))=h(T^{-1}(B_p^a))=h(B_p)$. For $q\in Q$ the crossing sphere is unchanged, $A'_q=A_q$, because $X'=X$ above the level $v$: the trajectory through a point of $f^{-1}(v)$ agrees with the old one above that level, so its past limit is the same for $X'$ and for $X$. [F4, F6, step 1.2, step 3.1, algebra]

5.1 A trajectory of $X'$ has a limit in $Q$ exactly when it passes through the local unstable disk of that limit and a limit in $P$ exactly when it passes through the local stable disk of that limit, by the same local model argument as in [F2]; the field $X'$ is complete and adapted by step 3.1, so the correspondence of [F2] applies to the pair $(f,X')$. Hence a trajectory of $X'$ whose limits lie in $Q$ and $P$ crosses $f^{-1}(v)$ exactly once, at a point of $A'_q\cap B'_p=A_q\cap h(B_p)$, and this set is empty by step 2.1. Therefore no trajectory of $X'$ has one limit in $P$ and the other in $Q$. [F2, step 2.1, step 3.1, step 4.1, algebra]

6.1 In the intermediate regular band the two trajectory sets are disjoint compact flow tubes over the disjoint crossing spheres. In a larger compact band containing just $P,Q$, their closures are still disjoint: any additional limiting critical trajectory would be a broken connection between $Q$ and $P$, and step 5.1 excludes such connections; the exact Morse-chart flow gives this compactness argument, as detailed in the interchange lemma's Proof 1.1–2.1. Thus the field change supplies the no-connection hypothesis needed for interchange. [F2, F6, step 5.1, algebra] ∎