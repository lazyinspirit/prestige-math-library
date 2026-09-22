---
id: lem-edge-maps-of-a-bounded-skeletal-ahss
kind: lemma
title: Edge maps of a bounded skeletal AHSS
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: ["def-exact-couple", "thm-an-exact-couple-generates-a-spectral-sequence"]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Davis–Kirk, Lecture Notes in Algebraic Topology, §9.1, printed pp. 237–246"
      url: https://www.maths.gla.ac.uk/~mpowell/Davis_Kirk_Lecture%20notes%20in%20algebraic%20topology.pdf
      locator: "§9.1, exact filtration and edge maps, printed pp. 237–246"
---

## Statement

Let $X$ be a nonempty finite CW complex of dimension $N$. Consider the skeletal exact couples of given cohomology and homology theories on CW pairs, with natural pair long exact sequences and zero groups on the empty space. Their skeletal spectral sequences have the following edge maps. Set $X^p=\varnothing$ for $p<0$ and $X^p=X$ for $p\ge N$, and put
$$F^ph^n(X)=\ker(h^n(X)\to h^n(X^{p-1})),\qquad F_ph_n(X)=\operatorname{im}(h_n(X^p)\to h_n(X)).$$
The assertion concerns the spectral sequences of these given pair exact couples; no identification of their second pages is needed.

In cohomology, for every $0\le p\le N$ and every $q$ the pair map $k:h^{p+q}(X^p,X^{p-1})\to h^{p+q}(X^p)$ carries a
stable cycle of $E_\infty^{p,q}$ to a class in $h^{p+q}(X^p)$ that is the
restriction of a class on $X$, and the induced map
$$E_\infty^{p,q}\xrightarrow{\ \cong\ } F^ph^{p+q}(X)\big/F^{p+1}h^{p+q}(X),\qquad [e]\longmapsto [x]\quad\text{where }x|_{X^p}=k(e),$$
is an isomorphism; the lift $x$ is determined modulo $F^{p+1}$. In particular the $0$-column edge is the quotient
$h^n(X)\to h^n(X)/F^1h^n(X)\cong E_\infty^{0,n}$ induced by restriction to
$X^0$, and the top-column edge $E_\infty^{N,n-N}\cong F^Nh^n(X)\subseteq h^n(X)$
is the inclusion of the kernel of restriction to $X^{N-1}$.

In homology, the pair map $j:h_{p+q}(X^p)\to h_{p+q}(X^p,X^{p-1})$ descends in the opposite
direction to an isomorphism
$$F_ph_{p+q}(X)\big/F_{p-1}h_{p+q}(X)\xrightarrow{\ \cong\ }E^\infty_{p,q},$$
with $F_ph_n(X)=\operatorname{im}(h_n(X^p)\to h_n(X))$. The $0$-column edge is
the inclusion $F_0h_n(X)=\operatorname{im}(h_n(X^0)\to h_n(X))\subseteq h_n(X)$,
induced by the skeleton inclusion $h_n(X^0)\to h_n(X)$, and the top-column edge is the
quotient $h_n(X)\to h_n(X)/F_{N-1}h_n(X)\cong E^\infty_{N,n-N}$.

These identifications require boundedness of the skeletal index only: for each
fixed $p$ the stable terms exist because the filtration is finite in $p$, and no
boundedness, vanishing or first-quadrant hypothesis is imposed on the coefficient
index $q$. For empty $X$, every group and edge map is zero.

## Facts & Assumptions

**Given:** The theories and pair sequences in the Statement. Pair maps and skeletal maps are the usual restriction maps in cohomology and inclusion maps in homology.

[F1] An initial homological exact couple has $i,j,k$ of degrees $(1,-1),(0,0),(-1,0)$ and is exact at each vertex ([[def-exact-couple]]).

[F2] Its spectral pages are $N^r/B^r$, where $N^r=k^{-1}(\operatorname{im}i^{r-1})$ and $B^r=j(\ker i^{r-1})$, with the shifted indices specified in [[thm-an-exact-couple-generates-a-spectral-sequence]].

## Proof

**Proof technique:** direct.

1.1 For cohomology use homological indices $(a,b)$, putting $D_{a,b}=h^{-a-b-1}(X^{-a-1})$ and $E_{a,b}=h^{-a-b}(X^{-a},X^{-a-1})$. The maps $i,j,k$ are respectively restriction, pair boundary and pair-to-absolute map. The given pair sequences prove all three exactness conditions of [F1]. For homology put $D_{p,q}=h_{p+q}(X^p)$ and $E_{p,q}=h_{p+q}(X^p,X^{p-1})$; inclusion, pair map and boundary are $i,j,k$, and again the pair sequences prove exactness. Thus [F2] applies to both couples. In the cohomological output reindex $(a,b)=(-p,-q)$. [F1, F2, given]

2.1 Fix $0\le p\le N$, $q\in\mathbb Z$ and $n=p+q$. Substituting the cohomological groups of step 1.1 in [F2] gives $N^r=k^{-1}(\operatorname{im}(h^n(X^{p+r-1})\to h^n(X^p)))$ and $B^r=j(\ker(h^{n-1}(X^{p-1})\to h^{n-1}(X^{p-r})))$. For $r\ge N+2$, the former skeleton is $X$ and the latter is empty. Hence $N^\infty=k^{-1}(\operatorname{im}(h^n(X)\to h^n(X^p)))$ and $B^\infty=\operatorname{im}j=\ker k$. Put $K=\operatorname{im}(h^n(X)\to h^n(X^p))\cap\ker(h^n(X^p)\to h^n(X^{p-1}))$. Exactness says $\operatorname{im}k$ is the second factor, so $k$ maps $N^\infty$ onto $K$ with kernel $B^\infty$. Restriction maps $F^ph^n(X)$ onto $K$: a lift $x$ of a member of $K$ restricts to zero on $X^{p-1}$. Its kernel is $F^{p+1}$. The two quotient isomorphisms give exactly the claimed map, with its lift independent modulo $F^{p+1}$. [F1, F2, step 1.1, algebra]

2.2 In homology [F2] gives $N^r=k^{-1}(\operatorname{im}(h_{n-1}(X^{p-r})\to h_{n-1}(X^{p-1})))$ and $B^r=j(\ker(h_n(X^p)\to h_n(X^{p+r-1})))$. Thus for $r\ge N+2$, $N^\infty=\ker k=\operatorname{im}j$ and $B^\infty=j(\ker u)$, where $u:h_n(X^p)\to h_n(X)$. Define $\operatorname{im}j\to F_p/F_{p-1}$ by $j(x)\mapsto u(x)+F_{p-1}$. Two lifts differ by $\ker j=\operatorname{im}(h_n(X^{p-1})\to h_n(X^p))$, so this is well defined and surjective. Its kernel equals $j(\ker u)$: if $u(x)$ comes from $y\in h_n(X^{p-1})$, subtract the image of $y$ from $x$ to get a lift with zero image in $h_n(X)$ and unchanged $j(x)$. Conversely such a lift plainly maps to zero. Quotienting gives $E^\infty_{p,q}\cong F_p/F_{p-1}$. Its inverse is induced by $j$, not by a map from $E^1$ directly to $h_n(X)$. [F1, F2, step 1.1, algebra]

3.1 The cohomological filtration has $F^0=h^n(X)$ and $F^{N+1}=0$, since restriction to the empty space is zero and restriction to $X$ is the identity. At $p=0$, step 2.1 identifies the quotient by $F^1$ with the image of restriction to $X^0$ and hence with $E_\infty^{0,n}$. At $p=N$, its lift $x$ is already a class on $X$, yielding the inclusion $E_\infty^{N,n-N}\cong F^N\hookrightarrow h^n(X)$. These are precisely the stated cohomological edges. [step 2.1, given, algebra]

3.2 Likewise $F_{-1}=0$ and $F_N=h_n(X)$. At $p=0$ step 2.2 gives $E^\infty_{0,n}\cong F_0$ followed by the inclusion in $h_n(X)$; the composite from $h_n(X^0)$ is the original skeletal inclusion map. At $p=N$, the map induced by $j$ is the quotient $h_n(X)\to h_n(X)/F_{N-1}\cong E^\infty_{N,n-N}$. Thus the homological edges have the asserted directions. [step 2.2, given, algebra]

4.1 The same bound $r\ge N+2$ worked for every $q$ in steps 2.1 and 2.2. Outside $0\le p\le N$ the pair terms vanish by exactness for an identical pair, so all their later subquotients vanish. No boundedness on $q$ is used. If $N=0$, the two edges coincide with the identity under the displayed identifications. If $X$ is empty, exactness and the zero absolute groups make all relative groups and pages zero. The representative arguments establish unique cosets and never choose a family of lifts; no additional choice principle is used. [F2, step 2.1, step 2.2, step 3.1, step 3.2, algebra] ∎

## Source notes

Loizides, *The Atiyah–Hirzebruch Spectral Sequence*, §3.2, printed pp.7–8,
https://math.gmu.edu/~yloizide/Atiyah-Hirzebruch.pdf , proves the cohomological stable subquotient and its kernel-filtration identification in Lemma 3.6 and Theorem 3.4. Here both variances and the extreme edge maps are calculated directly from the exact-couple subquotient theorem.
