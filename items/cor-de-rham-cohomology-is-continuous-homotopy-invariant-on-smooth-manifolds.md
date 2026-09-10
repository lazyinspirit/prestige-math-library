---
id: "cor-de-rham-cohomology-is-continuous-homotopy-invariant-on-smooth-manifolds"
kind: "corollary"
title: "De rham cohomology is continuous homotopy invariant on smooth manifolds"
deps: ["cor-smoothly-homotopic-maps-induce-the-same-de-rham-map", "thm-de-rham-cohomology-is-smooth-homotopy-invariant", "def-the-standard-smooth-step-function", "thm-composition-respects-homotopy", "def-countable-choice", "prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure", "thm-every-smooth-manifold-embeds-in-some-finite-dimensional-euclidean-space", "thm-whitney-approximation-for-euclidean-valued-maps", "thm-smooth-partitions-of-unity-exist-on-manifolds", "def-smooth-partition-of-unity-subordinate-to-an-open-cover", "def-normal-addition-map-for-a-euclidean-submanifold", "lem-normal-addition-is-a-local-diffeomorphism-along-the-zero-section"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, second edition"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Assume countable choice $\mathrm{AC}_\omega$. Continuously homotopic smooth maps induce equal de Rham maps. Continuous homotopy equivalences between smooth manifolds induce inverse de Rham graded algebra maps via smooth representatives, independently of those representatives.

## Facts & Assumptions

**Given:** Boundaryless smooth manifolds and countable choice. First let $F:P\to N$ be continuous and smooth on an open $V$ containing a closed set $A$.

[F1] [[cor-smoothly-homotopic-maps-induce-the-same-de-rham-map]]: Smoothly homotopic smooth maps induce equal maps on de Rham cohomology in every degree.

[F2] [[thm-de-rham-cohomology-is-smooth-homotopy-invariant]]: A smooth homotopy equivalence induces an isomorphism of de Rham graded real algebras.

[F3] [[def-the-standard-smooth-step-function]]: Let $\beta$ be the standard flat function. The **standard smooth step function** is $$ \sigma(t):=\frac{\beta(t)}{\beta(t)+\beta(1-t)}. $$ Because $\beta$ is smooth and positive on $(0,\infty)$, the denominator is positive on $(0,1)$, while $\sigma(t)=0$ for $t\le 0$ and $\sigma(t)=1$ for $t\ge 1$.

[F4] [[thm-composition-respects-homotopy]]: Let $f,g:X\to Y$ be continuous and suppose $f\simeq_A g$ for a subspace $A\subseteq X$. 1. If $u:W\to X$ is continuous, $B\subseteq W$, and $u[B]\subseteq A$, then $f\circ u\simeq_B g\circ u$. 2. If $v:Y\to Z$ is continuous, then $v\circ f\simeq_A v\circ g$.

[F5] [[def-countable-choice]]: The **Axiom of Countable Choice**, written $\mathrm{AC}_\omega$, is the following statement. > For every family $(X_n)_{n \in \mathbb{N}}$ of nonempty sets indexed by > $\mathbb{N}$ there is a function $f$ with domain $\mathbb{N}$ such that > $f(n) \in X_n$ for every $n \in \mathbb{N}$. Equivalently, in the vocabulary of def-choice-function: every at most countable family of nonempty sets (def-countable) has a choice function.

[F6] [[prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure]]: Let $(M,\mathcal S)$ and $(N,\mathcal T)$ be smooth manifolds of dimensions $m$ and $n$. Then $M\times N$ with the product topology is a topological $(m+n)$-manifold. If $\mathcal A$ and $\mathcal B$ are smooth atlases with $[\mathcal A]=\mathcal S$ and $[\mathcal B]=\mathcal T$, then the set of product charts $$\mathcal A\times\mathcal B:=\bigl\{\,\bigl(V\times W,\ \varphi\times\psi\bigr):(V,\varphi)\in\mathcal A,\ (W,\psi)\in\mathcal B\,\bigr\}$$ is a smooth atlas on $M\times N$, and the maximal atlas it generates is independent of the presenting atlases: it depends only on $\mathcal S$ and $\mathcal T$. This maximal atlas is the **product smooth structure** of $M\times N$.

[F7] [[thm-every-smooth-manifold-embeds-in-some-finite-dimensional-euclidean-space]]: Assume countable choice $\mathrm{AC}_\omega$. Every smooth manifold embeds smoothly in some finite-dimensional Euclidean space. More precisely, for a smooth $n$-manifold $M$ there are a bounded smooth map $G:M\to\mathbb R^{4(2n+1)}$ and a smooth nonnegative proper exhaustion $\rho:M\to\mathbb R$ such that $$J:M\longrightarrow\mathbb R^{4(2n+1)}\times\mathbb R,\qquad J(p)=(G(p),\rho(p))$$ is a proper smooth embedding. In particular the bounded-plus-proper form is available when $M$ is noncompact.

[F8] [[thm-whitney-approximation-for-euclidean-valued-maps]]: Assume countable choice $\mathrm{AC}_\omega$. Let $F:M\to\mathbb R^k$ be continuous, where $M$ is a smooth manifold, and let $\varepsilon:M\to(0,\infty)$ be a positive continuous error function. Then there exists a smooth map $\widetilde F:M\to\mathbb R^k$ such that $$\|\widetilde F(p)-F(p)\|<\varepsilon(p)\qquad\text{for all }p\in M.$$

[F9] [[thm-smooth-partitions-of-unity-exist-on-manifolds]]: Every open cover of a smooth manifold admits a smooth partition of unity subordinate to it.

[F10] [[def-smooth-partition-of-unity-subordinate-to-an-open-cover]]: Let $M$ be a smooth manifold and let $(U_i)_{i\in I}$ be an open cover of $M$. A family of smooth functions $(\phi_i)_{i\in I}$ with $\phi_i:M\to [0,1]$ is a **smooth partition of unity subordinate to** $(U_i)_{i\in I}$ when: 1. the family $(\operatorname{supp}(\phi_i))_{i\in I}$ is locally finite; 2. $\operatorname{supp}(\phi_i)\subseteq U_i$ for every $i\in I$; and 3. $\sum_i \phi_i(p)=1$ for every $p\in M$.

[F11] [[def-normal-addition-map-for-a-euclidean-submanifold]]: Let $S\subseteq\mathbb R^m$ be an embedded smooth submanifold. Using the Euclidean inner product, define its **orthogonal normal bundle** by $$ N^\perp S:=\{(p,v)\in S\times\mathbb R^m:v\perp T_pS\}. $$ Local slice charts and orthogonal projection onto $T_pS$ give this set its standard smooth rank-$(m-\dim S)$ vector-bundle structure. The **normal addition map** is $$ E:N^\perp S\to\mathbb R^m,\qquad E(p,v):=p+v. $$ It restricts on the zero section to the inclusion $S\hookrightarrow\mathbb R^m$ and is the basic model map used to build Euclidean tubular neighbourhoods.

[F12] [[lem-normal-addition-is-a-local-diffeomorphism-along-the-zero-section]]: Let $S\subseteq\mathbb R^m$ be an embedded smooth submanifold, and let $E:N^\perp S\to\mathbb R^m$ be its normal addition map. For every $p\in S$ the differential $$ dE_{(p,0)}:T_{(p,0)}(N^\perp S)\to T_p\mathbb R^m\cong\mathbb R^m $$ is an isomorphism. Consequently, $E$ is a local diffeomorphism at every point of the zero section.

## Proof

**Proof technique:** direct.

1.1 If $P$ is empty the smoothing assertion is immediate; if $N$ is empty a map forces $P$ empty. Otherwise the repaired embedding theorem gives a proper smooth embedding $j:N\to\mathbb R^m$ under the assumed countable choice. Put $S=j(N)$ and let $E(p,v)=p+v$ on its orthogonal normal bundle. The bundle has the subspace topology in $S\times\mathbb R^m$, and $E$ is a local diffeomorphism at every $(p,0)$. [F5, F7, F11, F12, given]

1.2 Apply the partition theorem to $\{V,P\setminus A\}$. In its refinement-indexed output assign a function to $V$ whenever its support is contained in $V$, and to $P\setminus A$ otherwise. Let $\chi$ be the sum of the first group. Locally finite smooth sums give $0\le\chi\le1$ and smoothness. Each grouped union of closed supports is closed, since locally it is a finite union; the first is contained in $V$, and the second misses $A$. Therefore $\operatorname{supp}\chi\subseteq V$, and $\chi=1$ on the open complement of the second union, a neighbourhood of $A$. [F9, F10, given]

2.1 For $p\in S$ put $V_a(p)=\{(q,v):|q-p|<a,\ |v|<a\}$ and let $h(p)$ be the supremum of the radii $0<a\le1$ for which $E|_{V_a(p)}$ is a diffeomorphism onto its image. Local invertibility and the subspace topology provide at least one such radius, so $0<h(p)\le1$. Eligibility is downward closed, and every $a<h(p)$ is smaller than an eligible radius. Each point or pair of points in $V_{h(p)}(p)$ therefore lies in a smaller eligible set: $E$ is locally invertible and injective on all of $V_{h(p)}(p)$. [step 1.1, construct]

2.2 The countable-choice cost in this partition application can be implemented in its coordinate-ball construction as follows. Form all admissible chart tuples, and for each member of a fixed countable basis contained in an eligible chart use countable choice to select a tuple; these charts cover. Take least suitable integer indices in the exhaustion refinement. For each compact annulus, the set of finite ordered lists of nested chart pairs covering it is nonempty by compactness; countable choice selects those lists and then the countable family of bump functions. Their normalized locally finite sum is the partition used above. This uses no point-indexed choice and no dependent choice. [F5, F9, step 1.2]

3.1 If $0<a<h(p)-|p-q|$, the triangle inequality gives $V_a(q)\subseteq V_{h(p)}(p)$. The restriction of an injective local diffeomorphism to this open set is a diffeomorphism onto its open image, so $h(q)\ge a$. Taking suprema, and exchanging $p,q$, proves $|h(p)-h(q)|\le|p-q|$; when the lower bound is nonpositive, positivity suffices. Thus $h$ is continuous. [step 2.1, algebra]

4.1 The set $\Omega=\{(p,v):|v|<h(p)/2\}$ is open, and $E$ is locally invertible there. If $E(p,v)=E(q,w)$, relabel so $h(q)\le h(p)$. Then $|p-q|\le|v|+|w|<(h(p)+h(q))/2\le h(p)$, and both pairs lie in $V_{h(p)}(p)$. Its injectivity gives $(p,v)=(q,w)$. Hence $E:\Omega\to U=E(\Omega)$ is an injective open local diffeomorphism; its local smooth inverses agree. The map $r=\pi E^{-1}:U\to S$ is smooth and satisfies $r(p)=p$. [F11, step 2.1, step 3.1]

5.1 If $U^c$ is nonempty, set $e(x)=\min(1,\operatorname{dist}(jF(x),U^c)/2)$, and otherwise set $e=1$. For a nonempty set $B\subseteq\mathbb R^m$, triangle inequalities and infima give $|\operatorname{dist}(z,B)-\operatorname{dist}(z\prime,B)|\le|z-z\prime|$; distances are finite by fixing one point of $B$. Openness of $U$ makes this distance positive at $jF(x)$. Thus $e$ is finite, positive and continuous, and $B_{e(x)}(jF(x))\subseteq U$. Euclidean Whitney approximation supplies smooth $Q:P\to\mathbb R^m$ with $|Q-jF|<e$. [F5, F8, step 4.1]

6.1 Put $R=\chi jF+(1-\chi)Q$. It is smooth on $V$, and outside $\operatorname{supp}\chi$ it agrees locally with $Q$, hence is globally smooth. It agrees with $jF$ near $A$, and $|R-jF|=(1-\chi)|Q-jF|<e$. Consequently $G=j^{-1}rR$ is smooth, agrees with $F$ near $A$, and $j^{-1}r((1-s)jF+sR)$ is a continuous homotopy from $F$ to $G$ fixed on $A$: its whole segment stays in $B_e(jF)$. [step 4.1, step 5.1, step 1.2]

7.1 Now let $H:M\times[0,1]\to N$ continuously join smooth maps $f_0,f_1$. On the smooth product $P=M\times\mathbb R$, put $\lambda(t)=\sigma(3t-1)$ and $F(x,t)=H(x,\lambda(t))$. It is smooth on $V=M\times((-\infty,1/3)\cup(2/3,\infty))$, where it equals an endpoint map. The closed set $A=M\times((-\infty,1/4]\cup[3/4,\infty))$ lies in $V$. Step 6.1 gives a smooth map fixed near these collars. Its restriction to $M\times[0,1]$ is a smooth homotopy with exact endpoints $f_0,f_1$. Thus their induced maps agree. [F1, F3, F6, step 6.1]

8.1 Taking $A=V=\varnothing$ and $\chi=0$ in step 6.1 gives a smooth representative of every continuous map, with an explicit homotopy to it. If continuous $f,g$ are homotopy inverses, choose smooth representatives $f\prime,g\prime$. Composition of homotopies and their concatenation give $g\prime f\prime\simeq\operatorname{id}$ and $f\prime g\prime\simeq\operatorname{id}$. Step 7.1 smooths each of these endpoint homotopies; smooth homotopy invariance now makes $(f\prime)^*,(g\prime)^*$ inverse graded algebra maps. Two smooth representatives of one continuous class are continuously homotopic by concatenation, so step 7.1 also proves independence. [F2, F4, step 6.1, step 7.1] ∎

## Source locator

Lee, Theorem 6.21, pp.136–137; normal addition and tubular retraction, pp.137–141; Theorem 6.26, p.141; Theorem 17.11, pp.445–446. The bounded supremum tube proof and smaller closed collars are the explicit local construction here, supported by the declared normal-addition local inverse. The current published embedding and absolute approximation proofs, repaired 2026-09-09, were read in full; no historical relative-Whitney assertion is imported.
