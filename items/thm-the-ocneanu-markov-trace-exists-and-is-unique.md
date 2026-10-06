---
id: thm-the-ocneanu-markov-trace-exists-and-is-unique
kind: theorem
title: "The Ocneanu Markov trace exists and is unique"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 4
deps: [def-markov-trace-on-the-type-a-hecke-tower, lem-the-hecke-tower-is-free-over-the-previous-level,
       thm-standard-basis-of-the-generic-type-a-hecke-algebra, def-generic-type-a-hecke-algebra]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Theo Johnson-Freyd, MATH 448 Reshetikhin-Turaev invariants, lecture notes 15 January 2016, Theorem 2.2 and its proof (Ocneanu's trace: existence and uniqueness)"
      url: "https://categorified.net/RTinvariants/Jan15.pdf"
    - title: "Joan S. Birman and Tara E. Brendle, Braids: A Survey, section 4.3 printed pp. 47-49 (Theorem 12: Ocneanu's trace on the Hecke tower)"
      url: "https://www.math.columbia.edu/~jb/Handbook-21.pdf"
---

## Statement

Let $H(1)\subset H(2)\subset\cdots$ be the type-A Hecke tower over
$\Lambda=\mathbb Z[v^{\pm1},z]$ of [[def-markov-trace-on-the-type-a-hecke-tower]].
Then there exists a unique Markov trace $(\operatorname{tr}_n)_{n\ge1}$ on this
tower in the sense of [[def-markov-trace-on-the-type-a-hecke-tower]]. Moreover
it satisfies, for all $n\ge1$, all $x,y\in H(n)$ and all $1\le i\le n-1$:

- (a) $\operatorname{tr}_n(T_i)=z$;
- (b) $\operatorname{tr}_{n+1}(xT_ny)=z\,\operatorname{tr}_n(xy)$;
- (c) $\operatorname{tr}_n$ is determined by (M1)--(M4) alone; it takes values in
  $\Lambda$ and is computed by iterating (b) along the free basis of
  [[lem-the-hecke-tower-is-free-over-the-previous-level]].

## Facts & Assumptions

**Given:** The Hecke tower $H(1)\subset H(2)\subset\cdots$ over $\Lambda=\mathbb Z[v^{\pm1},z]$. No choice principle is used.

[F1] Conditions (M1)--(M4) of a Markov trace and the equivalence of the two forms of (M4) ([[def-markov-trace-on-the-type-a-hecke-tower]]).

[F2] For every $n\ge1$, $H(n+1)=\bigoplus_{i=0}^{n}H(n)T_{w^{(i)}}$, where $w^{(i)}=s_ns_{n-1}\cdots s_{n-i+1}$ and $T_{w^{(i)}}=T_nT_{n-1}\cdots T_{n-i+1}$ for $i\ge1$; each element has a unique expression $\sum_ix_iT_{w^{(i)}}$ with $x_i\in H(n)$. Moreover $H(n+1)=H(n)\oplus(H(n)\otimes_{H(n-1)}H(n))$ as $H(n)$-bimodules, so every element of $H(n+1)$ determines a unique pair $(a,\xi)$ with $a\in H(n)$ and $\xi\in H(n)\otimes_{H(n-1)}H(n)$; a finite sum representing $\xi$ is taken modulo the tensor relations, including $xT_nhy=xhT_ny$ for $h\in H(n-1)$ ([[lem-the-hecke-tower-is-free-over-the-previous-level]]).

[F3] $H(n)$ has $\Lambda$-basis $\{T_w:w\in S_n\}$, and for $w\in S_n$, $T_wT_i=T_{ws_i}$ or $(v-1)T_w+vT_{ws_i}$ according as $\ell(ws_i)=\ell(w)+1$ or $\ell(ws_i)=\ell(w)-1$; the quadratic relation is $T_i^2=(v-1)T_i+v$ ([[thm-standard-basis-of-the-generic-type-a-hecke-algebra]], [[def-generic-type-a-hecke-algebra]]).

## Proof

1.1 **Uniqueness.** Suppose $(\operatorname{tr}_n)$ is a Markov trace. The base is $H(1)=\Lambda$, where $\operatorname{tr}_1(\lambda)=\lambda$ by (M1) and $\Lambda$-linearity. For $n\ge2$, [F2] at level $n-1$ gives each $y\in H(n)$ the unique expansion $y=\sum_{i=0}^{n-1}x_iT_{w^{(i)}}$ with $x_i\in H(n-1)$ and $T_{w^{(i)}}=T_{n-1}\cdots T_{n-i}$. By (M2), $\operatorname{tr}_n(x_0)=\operatorname{tr}_{n-1}(x_0)$; by (M3) and the two-sided form of (M4), $\operatorname{tr}_n(x_iT_{w^{(i)}})=\operatorname{tr}_n(T_{w^{(i)}}x_i)=z\operatorname{tr}_{n-1}(T_{n-2}\cdots T_{n-i}x_i)$ for $i\ge1$, an element of $H(n-1)$ on which $\operatorname{tr}_{n-1}$ is already defined. Hence $\operatorname{tr}_n$ is determined by $\operatorname{tr}_{n-1}$; induction gives uniqueness and (c). [F1, F2, algebra]

1.2 **Recursive construction.** Define $\operatorname{tr}_1:\Lambda\to\Lambda$ by $\operatorname{tr}_1(a)=a$. Suppose $\operatorname{tr}_n$ is defined. The bimodule isomorphism in [F2] is induced by $\mu_n(x\otimes y)=xT_ny$ and gives $H(n+1)=H(n)\oplus\operatorname{im}(\mu_n)$. The $\Lambda$-linear map $\tau_n:H(n)\otimes_{H(n-1)}H(n)\to\Lambda$, $x\otimes y\mapsto\operatorname{tr}_n(xy)$, is balanced: $(xh)\otimes y=x\otimes(hy)$ for $h\in H(n-1)$, and both tensors map to $\operatorname{tr}_n(xhy)$. Define $$\operatorname{tr}_{n+1}\bigl(a+\mu_n(\xi)\bigr):=\operatorname{tr}_n(a)+z\tau_n(\xi),\qquad a\in H(n),\ \xi\in H(n)\otimes_{H(n-1)}H(n).$$ The direct-sum decomposition and the isomorphism $\mu_n$ make this definition well defined and $\Lambda$-linear. Restriction to $H(n)$ gives (M2), and $\operatorname{tr}_{n+1}(1)=\operatorname{tr}_n(1)$ gives (M1). For each $i<n$, repeated restriction gives $\operatorname{tr}_n(T_i)=\operatorname{tr}_{i+1}(T_i)=z$ by the recursion at level $i$, proving (a). By construction, $$\operatorname{tr}_{n+1}(xT_ny)=z\operatorname{tr}_n(xy)\quad(x,y\in H(n));$$ this is the two-sided recursion, and $y=1$ gives (M4). Iterating it along the left basis of [F2] gives the recursive formula in (c). [F1, F2, construct]

2.1 **Cyclicity: reduction.** We prove cyclicity by induction. The base $H(1)=\Lambda$ is commutative, and $H(2)$ is generated over $\Lambda$ by the single element $T_1$, so its trace is cyclic. For $n\ge2$, assume $\operatorname{tr}_n$ is cyclic and consider $H(n+1)=H(n)\oplus I_n$, where $I_n$ is the $H(n)$-sub-bimodule spanned by $xT_ny$, as in [F2]. If $a,b\in H(n)$, cyclicity is the induction hypothesis. If $a\in H(n)$ and $b=xT_ny\in I_n$, then the construction in step 1.2 gives $\operatorname{tr}_{n+1}(ab)=z\operatorname{tr}_n(axy)$ and $\operatorname{tr}_{n+1}(ba)=z\operatorname{tr}_n(xya)$, equal by induction; linearity handles sums in $I_n$. Thus it remains the case $a=xT_ny$, $b=uT_nv$ with $x,y,u,v\in H(n)$. Applying the already proved one-in-$H(n)$ case to the outer factors reduces $\operatorname{tr}_{n+1}(ab)=\operatorname{tr}_{n+1}(T_n X T_nY)$ and $\operatorname{tr}_{n+1}(ba)=\operatorname{tr}_{n+1}(T_nY T_nX)$, where $X=yu$ and $Y=vx$. By that same case, this is equivalent to $$\operatorname{tr}_{n+1}(T_n X T_nY)=\operatorname{tr}_{n+1}(X T_nY T_n)\qquad(X,Y\in H(n)).$$ It remains to prove this identity. [F1, F2, step 1.2]

3.1 **The final cases.** Use [F2] at level $n-1$ to write $H(n)=H(n-1)\oplus H(n-1)T_{n-1}H(n-1)$; the balance here is over $H(n-2)$, since $T_{n-1}$ commutes with $H(n-2)$. If $X,Y\in H(n-1)$, then $T_n$ commutes with both and the desired identity follows from the quadratic relation for $T_n$. For $X=x'T_{n-1}x''$ with $x',x''\in H(n-1)$ and $Y\in H(n-1)$, commuting $T_n$ past $x',x'',Y$ and applying the braid relation gives $$\operatorname{tr}_{n+1}(T_nXT_nY)=z\operatorname{tr}_n(x'T_{n-1}^2x''Y).$$ On the other side, commute $T_n$ past $x''$ and $Y$, expand $T_n^2$, and use the two-sided recursion from step 1.2 to obtain $$\operatorname{tr}_{n+1}(XT_nYT_n)=(v-1)z\operatorname{tr}_n(x'T_{n-1}x''Y)+v\operatorname{tr}_n(x'T_{n-1}x''Y).$$ The level-$n$ recursion gives $\operatorname{tr}_n(x'T_{n-1}x''Y)=z\operatorname{tr}_{n-1}(x'x''Y)$, while restriction gives $\operatorname{tr}_n(x'x''Y)=\operatorname{tr}_{n-1}(x'x''Y)$. Expanding $T_{n-1}^2$ in the first display therefore yields the same expression as the right side. If $X\in H(n-1)$ and $Y\in H(n-1)T_{n-1}H(n-1)$, write $Y=y'T_{n-1}y''$ and put $a:=Xy'\in H(n-1)$. Since $T_n$ commutes with $X,y',y''$, the quadratic relation and two-sided recursion give $$\begin{aligned} \operatorname{tr}_{n+1}(T_nXT_nY) &=(v-1)z\operatorname{tr}_n(aT_{n-1}y'')+v\operatorname{tr}_n(aT_{n-1}y''),\\ \operatorname{tr}_{n+1}(XT_nYT_n) &=z(v-1)\operatorname{tr}_n(aT_{n-1}y'')+zv\operatorname{tr}_n(ay''). \end{aligned}$$ By (M2) and the two-sided recursion at level $n$, $\operatorname{tr}_n(ay'')=\operatorname{tr}_{n-1}(ay'')$ and $\operatorname{tr}_n(aT_{n-1}y'')=z\operatorname{tr}_{n-1}(ay'')$; hence these expressions agree. Finally let $X=x'T_{n-1}x''$ and $Y=y'T_{n-1}y''$ with all four coefficients in $H(n-1)$. Braid, commutation, and the two-sided recursion give $$\begin{aligned} \operatorname{tr}_{n+1}(T_nXT_nY)&=z\operatorname{tr}_n(x'T_{n-1}^2x''y'T_{n-1}y''),\\ \operatorname{tr}_{n+1}(XT_nYT_n)&=z\operatorname{tr}_n(x'T_{n-1}x''y'T_{n-1}^2y''). \end{aligned}$$ After expanding the squared generators, the terms with coefficient $z(v-1)$ agree. The remaining terms agree because the level-$n$ recursion and the induction hypotheses that $\operatorname{tr}_n$ and $\operatorname{tr}_{n-1}$ are cyclic give $$\operatorname{tr}_n(x'x''y'T_{n-1}y'')=z\operatorname{tr}_{n-1}(x'x''y'y''),\qquad \operatorname{tr}_n(x'T_{n-1}x''y'y'')=z\operatorname{tr}_{n-1}(x'x''y'y'').$$ Thus the central identity holds in every case, (M3) follows, and the induction is complete. [F1, F2, F3, step 1.2, step 2.1, algebra] ∎
