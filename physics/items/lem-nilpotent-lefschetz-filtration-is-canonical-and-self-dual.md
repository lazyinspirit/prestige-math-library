---
id: lem-nilpotent-lefschetz-filtration-is-canonical-and-self-dual
kind: lemma
title: "The nilpotent Lefschetz filtration is canonical and self-dual"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 1
deps: [def-vector-space, def-linear-subspace, def-kernel-and-image-of-a-linear-map, def-nilpotent-endomorphism, thm-nilpotent-jordan-string-basis, def-dimension, thm-rank-nullity, thm-dimension-of-a-linear-subspace, thm-dual-family-is-a-basis-in-finite-dimension, def-annihilators-under-the-evaluation-pairing, thm-bilinear-forms-correspond-to-linear-maps-into-the-dual, def-bilinear-symmetric-skew-and-alternating-forms, def-matrix-radicals-rank-and-nondegeneracy-of-a-bilinear-form, thm-modules-over-a-ring-form-an-abelian-category, lem-graded-hard-lefschetz-has-a-canonical-primitive-decomposition]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "M. A. A. de Cataldo and L. Migliorini, «The Hodge theory of algebraic maps», arXiv:math/0306030v2 (complete arXiv PDF)"
      url: "https://arxiv.org/pdf/math/0306030"
      locator: "§2.2.3(c) printed p. 12; Theorem 4.4.4 printed p. 36; §4.5 formulas (22)–(27) printed pp. 37–38"
---

## Statement

Let $N$ be a nilpotent endomorphism of a finite-dimensional vector space $H$ over a field $F$ ([[def-nilpotent-endomorphism]]). An **admissible filtration** is an increasing finite filtration $W$ of $H$ by linear subspaces ([[def-linear-subspace]]): $W_i\subseteq W_{i+1}$ for all $i$, $W_i=0$ for all sufficiently negative $i$, $W_i=H$ for all sufficiently positive $i$, such that

$$N(W_i)\subseteq W_{i-2}\quad\text{for all }i,\qquad N^r:\operatorname{Gr}^W_r\longrightarrow\operatorname{Gr}^W_{-r}\text{ is an isomorphism for every }r\ge0,$$

where $\operatorname{Gr}^W_i:=W_i/W_{i-1}$ and the second map is the one induced by $N^r$, which is well defined because $N^r(W_r)\subseteq W_{-r}$ and $N^r(W_{r-1})\subseteq W_{-r-1}$. There is a unique admissible filtration $W$, and it is given intrinsically by

$$W_i=\sum_{a,b\ge0,\ a-b=i}\ker N^{a+1}\cap\operatorname{im}N^b .$$

If in addition $S$ is a nondegenerate bilinear form on $H$ with $S(Nv,w)+S(v,Nw)=0$ for all $v,w$ ([[def-bilinear-symmetric-skew-and-alternating-forms]], [[def-matrix-radicals-rank-and-nondegeneracy-of-a-bilinear-form]]), and $U^\perp:=\{x\in H:S(u,x)=0\text{ for every }u\in U\}$ for a subspace $U$, then $(W_i)^\perp=W_{-i-1}$ for every $i$, and consequently $S$ induces a perfect pairing between $\operatorname{Gr}^W_i$ and $\operatorname{Gr}^W_{-i}$; moreover for $i\ge0$ the form $S_i([v],[w]):=S(v,N^iw)$ on $\operatorname{Gr}^W_i$ is well defined and nondegenerate.

## Facts & Assumptions

**Given:** A field $F$, a finite-dimensional $F$-vector space $H$, a nilpotent endomorphism $N$ of $H$, an admissible filtration $W$ as in the Statement, and, where used, a nondegenerate bilinear form $S$ with $S(Nv,w)+S(v,Nw)=0$; the right-orthogonal complement $U^\perp=\{x:S(u,x)=0\text{ for all }u\in U\}$.

[F1] Jordan string basis: there is a basis of $H$ that is the concatenation of strings $v_1,\dots,v_l$ with $Nv_1=0$ and $Nv_t=v_{t-1}$ for $t\ge2$; for $H=0$ this is the empty family ([[thm-nilpotent-jordan-string-basis]]).

[F2] Graded hard Lefschetz: let $G^j$ be objects of an abelian category, zero for all but finitely many $j$, and $\lambda^j:G^j\to G^{j+2}$ morphisms with $\lambda^r:G^{-r}\to G^r$ an isomorphism for every $r\ge0$; with $\pi^{-r}:=\ker\lambda^{r+1}$ one has $G^{-r}=\bigoplus_{j\ge0}\lambda^j\pi^{-r-2j}$ and $G^r=\bigoplus_{j\ge0}\lambda^{r+j}\pi^{-r-2j}$, each restricted power being a monomorphism on its primitive source ([[lem-graded-hard-lefschetz-has-a-canonical-primitive-decomposition]]). The ambient category here is the category of $F$-vector spaces, which is abelian ([[thm-modules-over-a-ring-form-an-abelian-category]]).

[F3] Annihilator dimension: for a subspace $U$ of a finite-dimensional space $V$, the dual dimension is $\dim V^*=\dim V$ ([[thm-dual-family-is-a-basis-in-finite-dimension]]), the restriction $V^*\to U^*$, $f\mapsto f|_U$, is surjective because a basis of $U$ extends to a basis of $V$ ([[thm-dimension-of-a-linear-subspace]]), its kernel is the annihilator $U^\circ=\{\,f:f|_U=0\,\}$ ([[def-annihilators-under-the-evaluation-pairing]]), and rank-nullity ([[thm-rank-nullity]]) therefore gives $\dim U^\circ=\dim V-\dim U$. If $U\subseteq U'$ are subspaces of equal finite dimension, then $U=U'$ ([[thm-dimension-of-a-linear-subspace]]).

[F4] Bilinear correspondence: for any bilinear form $B$ the map $B^\flat:v\mapsto B(v,-)$ is linear in $v$, and $B\mapsto B^\flat$ is a linear bijection onto $\mathcal L(V,V^*)$ ([[thm-bilinear-forms-correspond-to-linear-maps-into-the-dual]]); for a nondegenerate form on a finite-dimensional space, $B^\flat$ is an isomorphism ([[def-matrix-radicals-rank-and-nondegeneracy-of-a-bilinear-form]]). Apply the same correspondence to the transpose form $S^{\mathrm{op}}(v,w):=S(w,v)$ to obtain $S^\sharp(x):=S(-,x)$; its kernel is the right radical, so it is an isomorphism by rank-nullity and equality of the finite dimensions of $H$ and $H^*$. Thus the right-orthogonal complement is $U^\perp=(S^\sharp)^{-1}(U^\circ)$.

## Proof

**Proof technique:** direct, with finite ascending inductions on filtration indices.

1.1 Fix a Jordan string basis of $H$ as in [F1], with strings $v_{c,1},\dots,v_{c,l_c}$ indexed by $c$. Give $v_{c,t}$ the **weight** $2t-l_c-1$, so that the weights on a string of length $l_c$ are $-l_c+1,-l_c+3,\dots,l_c-1$, and let $W_i$ be the span of all $v_{c,t}$ with weight at most $i$. [given, F1, construct]

1.2 On a Jordan string $v_1,\dots,v_l$, one has $\ker N^{a+1}=\langle v_t:1\le t\le\min(a+1,l)\rangle$ and $\operatorname{im}N^b=\langle v_t:1\le t\le l-b\rangle$, since $N^jv_t=v_{t-j}$ for $t>j$ and is zero otherwise. For $1\le t\le l$, the vector $v_t$ belongs to a summand $\ker N^{a+1}\cap\operatorname{im}N^b$ with $a-b=i$ exactly when some integer $b$ satisfies $\max(0,-i,t-i-1)\le b\le l-t$. Such a $b$ exists exactly when $2t-l-1\le i$: necessity follows from $t-i-1\le l-t$, and sufficiency follows because $l-t\ge0$ and $2t-l-1\le i$ also gives $-i\le l-t$. Thus the sum of these nested spans consists precisely of the string vectors of weight at most $i$, including the zero and whole-string cases. [given, algebra]

1.3 Consequences of [F2] for an admissible filtration $W$. The graded pieces $\operatorname{Gr}_s=W_s/W_{s-1}$ are $F$-vector spaces, zero for all but finitely many $s$, and $N$ induces $\bar N:\operatorname{Gr}_s\to\operatorname{Gr}_{s-2}$. Putting $G^j:=\operatorname{Gr}_{-j}$ and $\lambda^j:=\bar N:G^j\to G^{j+2}$, the hypothesis says that $\lambda^r:G^{-r}\to G^r$, which is $\bar N^r:\operatorname{Gr}_r\to\operatorname{Gr}_{-r}$, is an isomorphism for every $r\ge0$. [F2] therefore gives, with $P_m:=\ker(\bar N^{m+1}:\operatorname{Gr}_m\to\operatorname{Gr}_{-m-2})$ for $m\ge0$, the decompositions $\operatorname{Gr}_s=\bigoplus_{m\ge|s|,\ m\equiv s\,(2)}\bar N^{(m-s)/2}P_m$ for every $s$ (the first display of [F2] for $s\ge0$, the second for $s<0$), each restricted power being a monomorphism. Moreover for $t\le -q$ the map $\bar N^q:\operatorname{Gr}_{t+2q}\to\operatorname{Gr}_t$ is surjective: with $m':=-t\ge q$ each summand $\bar N^{m'+j}P_{m'+2j}$ of the displayed decomposition of $\operatorname{Gr}_t$ equals $\bar N^q(\bar N^{m'+j-q}P_{m'+2j})$, and $\bar N^{m'+j-q}P_{m'+2j}\subseteq\operatorname{Gr}_{m'+2j-2(m'+j-q)}=\operatorname{Gr}_{t+2q}$. [F2, given, algebra]

1.4 For a subspace $U\subseteq H$, [F4] gives $U^\perp=(S^\sharp)^{-1}(U^\circ)$, hence $\dim U^\perp=\dim H-\dim U$ by [F3]. Define the left-orthogonal complement ${}^{\perp}U:=\{v:S(v,u)=0\text{ for all }u\in U\}$. Using $S^\flat$ instead gives $\dim{}^{\perp}U=\dim H-\dim U$. The inclusion $U\subseteq{}^{\perp}(U^\perp)$ follows directly from $S(U,U^\perp)=0$; both sides have the same dimension, so ${}^{\perp}(U^\perp)=U$ by [F3]. Also $H^\perp=0$ by nondegeneracy and $\{0\}^\perp=H$. No symmetry of $S$ is used. [F3, F4, given, algebra]

1.5 Skew-adjointness iterated: $S(N^rv,w)=(-1)^rS(v,N^rw)$ for all $r\ge0$, by induction on $r$ from $S(Nv,w)=-S(v,Nw)$. [given, algebra]

2.1 The filtration of step 1.1 is admissible: it is increasing and finite by construction, and $N(W_i)\subseteq W_{i-2}$ because $Nv_{c,t}=v_{c,t-1}$ has weight $2(t-1)-l_c-1=(2t-l_c-1)-2$ while $Nv_{c,1}=0$. [step 1.1, algebra]

2.2 The filtration of step 1.1 satisfies the intrinsic formula of the Statement: both $W_i$ and the sum $\sum_{a-b=i}\ker N^{a+1}\cap\operatorname{im}N^b$ are direct sums over the strings of their chainwise parts, because $N$ preserves each string span and the spans of the strings form a direct sum decomposition of $H$; by the chainwise computation of step 1.2 these parts are the same span of weights at most $i$. [step 1.1, step 1.2, algebra]

2.3 The filtration of step 1.1 has $N^r:\operatorname{Gr}_r\to\operatorname{Gr}_{-r}$ an isomorphism for every $r\ge0$: chainwise, $\operatorname{Gr}_r$ is spanned by the classes of the $v_{c,t}$ of weight exactly $r$, and $N^r$ sends such a class to the class of $v_{c,t-r}$ of weight $-r$, which is an isomorphism on each string and hence on the direct sum of the stringwise graded pieces. [step 1.1, algebra]

2.4 For any admissible $W$ the graded surjectivity of step 1.3 upgrades to $N^{m+1}(W_{m-1})=W_{-m-3}$ for every $m\ge0$. Indeed $N^{m+1}(W_{m-1})\subseteq W_{-m-3}$, and for surjectivity one shows $W_s\subseteq N^{m+1}(W_{m-1})$ by ascending induction on $s$: for $x\in W_s$ apply step 1.3 with $q=m+1$ and $t=s\le -m-3$ to get $y\in W_{s+2m+2}$ with $[N^{m+1}y]=[x]$ in $\operatorname{Gr}_s$; then $N^{m+1}y-x\in W_{s-1}$, which lies in the image by the induction hypothesis, so $x$ does too; the induction starts with $W_s=0$ for $s$ very negative and runs up to $s=-m-3$. Note $s+2m+2\le m-1$, so $y$ may be taken in $W_{m-1}$. [step 1.3, algebra]

2.5 Define $W'_i:=(W_{-i-1})^\perp$ for every $i$. Then $W'$ is an increasing finite filtration: $i\le j$ gives $W_{-i-1}\supseteq W_{-j-1}$ and hence $W'_i\subseteq W'_j$; for $i$ very negative, $W_{-i-1}=H$ and $W'_i=H^\perp=0$; for $i$ very positive, $W_{-i-1}=0$ and $W'_i=\{0\}^\perp=H$. Moreover $N(W'_i)\subseteq W'_{i-2}$: for $x\in(W_{-i-1})^\perp$ and $w\in W_{-i+1}$ one has $S(w,Nx)=-S(Nw,x)=0$ because $Nw\in W_{-i-1}$, so $Nx\in(W_{-i+1})^\perp=W'_{i-2}$. [step 1.4, step 1.5, given, algebra]

3.1 Fix an admissible $W$. Only finitely many $P_m$ in step 1.3 are nonzero, and each is finite-dimensional by [F3]; choose a finite basis of each using the extension theorem in [F3]. For each of these finitely many basis classes choose a representative $v\in W_m$. Primitivity gives $N^{m+1}v\in W_{-m-3}$, since its class in $\operatorname{Gr}_{-m-2}$ vanishes. By step 2.4 choose $u\in W_{m-1}$ with $N^{m+1}u=N^{m+1}v$ and replace $v$ by $v-u$. The representative now satisfies $N^{m+1}v=0$. Its string $v,Nv,\dots,N^mv$ lies in $W_m,W_{m-2},\dots,W_{-m}$ and has graded classes $\bar N^i[v]$ of weight $m-2i$. All selections are finite. [given, F3, step 1.3, step 2.4, choose, construct]

3.2 The pairing $\operatorname{Gr}^W_{-i}\times\operatorname{Gr}^{W'}_i\to F$, $([v],[x])\mapsto S(v,x)$, is well defined: $x\in W'_i=(W_{-i-1})^\perp$ kills errors in $W_{-i-1}$ in the first variable, and errors in $W'_{i-1}=(W_{-i})^\perp$ kill $v\in W_{-i}$ in the second. If $S(v,W'_i)=0$, then $v\in{}^{\perp}((W_{-i-1})^\perp)=W_{-i-1}$ by step 1.4, so the left kernel vanishes. If $S(W_{-i},x)=0$, then $x\in W'_{i-1}$, so the right kernel vanishes. The pairing induces injections from each graded space to the dual of the other; [F3] then forces their dimensions to agree, and rank-nullity makes both injections isomorphisms. Thus the pairing is perfect. [step 1.4, step 2.5, F3, algebra]

4.1 The graded classes of the string vectors of step 3.1 are linearly independent and span every $\operatorname{Gr}_s$: in the decomposition of step 1.3, $\operatorname{Gr}_s$ is the direct sum over $m\ge|s|$, $m\equiv s\ (2)$ of the images of the monomorphisms $\bar N^{(m-s)/2}:P_m\to\operatorname{Gr}_s$, so the images of the chosen bases form a basis of $\operatorname{Gr}_s$. Hence the string vectors are linearly independent, since a nontrivial finite combination would have a nonzero class in the largest weight occurring. They span $H$ by ascending induction on $s$: if every element of $W_{s-1}$ is a combination of string vectors of weight at most $s-1$ and $x\in W_s$, then either $[x]=0$ in $\operatorname{Gr}_s$ and $x\in W_{s-1}$, or $[x]$ is a combination of string classes of weight exactly $s$, and subtracting the corresponding string vectors leaves an element of $W_{s-1}$; the induction starts where $W_s=0$. This proves $W_s\subseteq\langle\text{string vectors of weight}\le s\rangle$ for every $s$, and the reverse inclusion is clear; consequently the string vectors form a basis of $H$ and $W_i$ is exactly the span of those of weight at most $i$. [step 1.3, step 3.1, algebra]

4.2 For any admissible $W$ the $W'$-graded maps $\bar N^r:\operatorname{Gr}^{W'}_r\to\operatorname{Gr}^{W'}_{-r}$ are isomorphisms. Let $\psi:\operatorname{Gr}^W_{-r}\to(\operatorname{Gr}^{W'}_r)^*$ and $\phi:\operatorname{Gr}^W_r\to(\operatorname{Gr}^{W'}_{-r})^*$ be the isomorphisms induced by the perfect pairings of step 3.2, and let $T:=\bar N^r:\operatorname{Gr}^{W'}_r\to\operatorname{Gr}^{W'}_{-r}$. For $y\in W_r$ and $x\in W'_r$ steps 1.5 and the definitions give $\psi(\bar N^r[y])([x])=S(N^ry,x)=(-1)^rS(y,N^rx)=(-1)^r(T^*\phi[y])([x])$, so $T^*=(-1)^r\psi\bar N^r\phi^{-1}$ is an isomorphism because $\bar N^r:\operatorname{Gr}^W_r\to\operatorname{Gr}^W_{-r}$ is an isomorphism by the admissibility of $W$; a linear map between finite-dimensional spaces whose transpose is an isomorphism is itself an isomorphism: surjectivity of $T^*$ forces $\ker T=0$ because every functional on the source then factors through $T$, and bijectivity of $T^*$ and [F3] give equality of the source and target dimensions, so rank-nullity makes $T$ surjective as well. [given, step 1.5, step 3.2, F3, algebra]

5.1 Every admissible $W$ equals the intrinsic formula and hence the filtration of step 1.1; in particular the admissible filtration is unique. The strings of step 3.1 form a basis of $H$ and satisfy $N^{m+1}v=0$, so each is a Jordan string for $N$ in the sense of [F1]; the chainwise computation of step 1.2 applied to this basis says that $\sum_{a-b=i}\ker N^{a+1}\cap\operatorname{im}N^b$ is exactly the span of the string vectors of weight at most $i$, which is $W_i$ by step 4.1. This formula depends only on $N$, and the filtration of step 1.1 satisfies it too by step 2.2; hence every admissible $W$ equals it. [F1, step 1.2, step 2.2, step 4.1]

6.1 The filtration $W'$ of step 2.5 is admissible: it is an increasing finite filtration with $N(W'_i)\subseteq W'_{i-2}$ by step 2.5, and its graded maps are isomorphisms by step 4.2. By the uniqueness of step 5.1, $W'=W$. [step 2.5, step 4.2, step 5.1]

7.1 Consequently $(W_i)^\perp=W_{-i-1}$ for every $i$: $W'=W$ reads $(W_{-i-1})^\perp=W_i$, and reindexing $j:=-i-1$ gives the claim. Moreover the pairing $\operatorname{Gr}^W_i\times\operatorname{Gr}^W_{-i}\to F$, $([v],[w])\mapsto S(v,w)$, is perfect: it is the pairing of step 3.2 read with $W'=W$. [step 3.2, step 6.1]

8.1 The forms $S_i$ are well defined and nondegenerate. For the restriction of $S$ to a pairing on $\operatorname{Gr}^W_i$: an error $v'\in W_{i-1}$ in the first argument contributes $S(v',N^iw)=0$ because $N^iw\in W_{-i}$ and $(W_{i-1})^\perp=W_{-i}$ by step 7.1, and an error $w'\in W_{i-1}$ in the second contributes $S(v,N^iw')=0$ because $N^iw'\in W_{-i-1}=(W_i)^\perp$ by admissibility and step 7.1. Thus $S_i$ is well defined on $\operatorname{Gr}^W_i\times\operatorname{Gr}^W_i$, and it is the composite of the perfect pairing $\langle[v],[x]\rangle:=S(v,x)$ of step 7.1 with the second variable $[w]\mapsto N^i[w]$, which is an isomorphism $\operatorname{Gr}^W_i\to\operatorname{Gr}^W_{-i}$ by the admissibility of $W$; hence the induced map $\operatorname{Gr}^W_i\to(\operatorname{Gr}^W_i)^*$, $[v]\mapsto S_i([v],-)$ is an isomorphism: $S_i$ is nondegenerate. [given, step 7.1]

9.1 Steps 2.1, 2.2 and 2.3 exhibit the admissible filtration and identify it with the intrinsic formula; step 5.1 proves that any admissible filtration equals that formula, which is uniqueness; steps 6.1, 7.1 and 8.1 prove the self-duality, the perfect pairing and the descended forms $S_i$. The zero space is included: its empty string basis of [F1] gives the zero filtration $W_i=0=H$, which is admissible and agrees with the intrinsic formula, which is zero for every $i$. [step 2.1, step 2.2, step 2.3, step 5.1, step 6.1, step 7.1, step 8.1] ∎
