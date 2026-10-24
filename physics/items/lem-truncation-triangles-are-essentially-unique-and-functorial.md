---
id: lem-truncation-triangles-are-essentially-unique-and-functorial
kind: lemma
title: "Truncation triangles are essentially unique and give adjoint truncation functors"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 1
deps: [def-truncation-functors-and-cohomology-of-a-t-structure, def-canonical-t-structure-on-a-derived-category, def-triangulated-category, def-triangulated-category-axiom-tr-three, def-morphism-and-isomorphism-of-triangles, prop-zero-and-split-triangles-are-distinguished, prop-distinguished-triangles-are-closed-under-shifts-and-both-rotations, thm-long-exact-hom-sequences-of-a-distinguished-triangle, cor-triangulated-five-lemma, def-additive-category, def-biproduct]
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
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "A. A. Beilinson, J. Bernstein and P. Deligne, «Faisceaux pervers», Astérisque 100 (1982), Société Mathématique de France (complete numdam PDF)"
      url: "https://www.numdam.org/item/AST_1982__100__1_0.pdf"
      locator: "§1.3.1–1.3.9, printed pp. 28–33; §5.4.10–5.4.13, printed pp. 143–147"
---

## Statement

Let $(\mathcal T^{\le0},\mathcal T^{\ge0})$ be a t-structure on a triangulated category $\mathcal T$, with truncations as in [[def-truncation-functors-and-cohomology-of-a-t-structure]].

(i) *Essential uniqueness.* For every $X$ and $n$, every distinguished triangle $A\to X\to B\to A[1]$ with $A\in\mathcal T^{\le n}$ and $B\in\mathcal T^{\ge n+1}$ is isomorphic to the truncation triangle $\tau_{\le n}X\to X\to\tau_{\ge n+1}X\to\tau_{\le n}X[1]$ by an isomorphism of triangles whose middle component is the identity of $X$; this isomorphism is unique.

(ii) *Adjunction and orthogonality.* The assignment $X\mapsto\tau_{\le n}X$ is a functor and for $T\in\mathcal T^{\le n}$ the map $\operatorname{Hom}(T,\tau_{\le n}X)\to\operatorname{Hom}(T,X)$, $f\mapsto(\tau_{\le n}X\to X)\circ f$, is a bijection natural in $X$; dually $\operatorname{Hom}(\tau_{\ge n}X,T)\to\operatorname{Hom}(X,T)$ is a bijection for $T\in\mathcal T^{\ge n}$. Moreover $\operatorname{Hom}(\mathcal T^{\le n},\mathcal T^{\ge n+1})=0$ for every $n$.

(iii) *Aisle criteria.* $X\in\mathcal T^{\le n}$ if and only if $\tau_{\le n}X\to X$ is an isomorphism, if and only if $\tau_{\ge n+1}X=0$, if and only if $\operatorname{Hom}(X,\mathcal T^{\ge n+1})=0$; dually $X\in\mathcal T^{\ge n}$ if and only if $X\to\tau_{\ge n}X$ is an isomorphism, if and only if $\tau_{\le n-1}X=0$, if and only if $\operatorname{Hom}(\mathcal T^{\le n-1},X)=0$.

(iv) *Extensions, direct sums and iteration.* In a distinguished triangle $X\to Y\to Z\to X[1]$, if $X,Z\in\mathcal T^{\le n}$ (respectively $\mathcal T^{\ge n}$), then $Y$ lies in the same aisle. If $X,Y\in\mathcal T^{\le n}$ then $Z\in\mathcal T^{\le n}$, while if $Y,Z\in\mathcal T^{\le n}$ then $X\in\mathcal T^{\le n+1}$; dually, if $Y,Z\in\mathcal T^{\ge n}$ then $X\in\mathcal T^{\ge n}$, while if $X,Y\in\mathcal T^{\ge n}$ then $Z\in\mathcal T^{\ge n-1}$. Also, a finite direct sum lies in $\mathcal T^{\le n}$ (respectively $\mathcal T^{\ge n}$) if and only if each summand does. For $m\le n$ there are canonical isomorphisms $\tau_{\le m}\tau_{\le n}\cong\tau_{\le m}$, $\tau_{\le n}\tau_{\le m}\cong\tau_{\le m}$, $\tau_{\ge n}\tau_{\ge m}\cong\tau_{\ge n}$ and $\tau_{\ge m}\tau_{\ge n}\cong\tau_{\ge n}$ compatible with the truncation maps, and $\tau_{\le m}\tau_{\ge n}=0$ when $m<n$.

## Facts & Assumptions

**Given:** A t-structure $(\mathcal T^{\le0},\mathcal T^{\ge0})$ on a triangulated category $\mathcal T$, with $\mathcal T^{\le n}=\mathcal T^{\le0}[-n]$, $\mathcal T^{\ge n}=\mathcal T^{\ge0}[-n]$ and $\operatorname{Hom}(\mathcal T^{\le0},\mathcal T^{\ge1})=0$ ([[def-canonical-t-structure-on-a-derived-category]], [[def-truncation-functors-and-cohomology-of-a-t-structure]]).

[F1] For every object $W$ and distinguished triangle $X\to Y\to Z\to X[1]$, the sequences $\mathcal T(W,X)\to\mathcal T(W,Y)\to\mathcal T(W,Z)\to\mathcal T(W,X[1])$ and, dually, $\mathcal T(Z,W)\to\mathcal T(Y,W)\to\mathcal T(X,W)\to\mathcal T(Z[-1],W)$ are exact ([[thm-long-exact-hom-sequences-of-a-distinguished-triangle]]).

[F2] Orthogonality and monotonicity: $\operatorname{Hom}(\mathcal T^{\le n},\mathcal T^{\ge n+1})=0$ for every $n$ by the t-structure axiom $\operatorname{Hom}(\mathcal T^{\le0},\mathcal T^{\ge1})=0$ and the shift conventions, since a map $X\to Y$ with $X\in\mathcal T^{\le n}$ and $Y\in\mathcal T^{\ge n+1}$ is a map $X[n]\in\mathcal T^{\le0}\to Y[n]\in\mathcal T^{\ge1}$; moreover $\mathcal T^{\le m}\subseteq\mathcal T^{\le n}$ and $\mathcal T^{\ge n}\subseteq\mathcal T^{\ge m}$ whenever $m\le n$, because $\mathcal T^{\le0}[1]\subseteq\mathcal T^{\le0}$ and $\mathcal T^{\ge0}[-1]\subseteq\mathcal T^{\ge0}$ ([[def-canonical-t-structure-on-a-derived-category]]).

[F3] TR3: every commutative square on the first maps of two distinguished triangles extends to a morphism of triangles ([[def-triangulated-category-axiom-tr-three]], [[def-morphism-and-isomorphism-of-triangles]]); and a morphism of triangles with two adjacent isomorphism components has its third component an isomorphism ([[cor-triangulated-five-lemma]]).

[F4] The triangles $X\xrightarrow{1}X\to0\to X[1]$ and $X\to0\to X[1]\xrightarrow{1}X[1]$ are distinguished, and distinguished triangles are closed under translations and rotations ([[prop-zero-and-split-triangles-are-distinguished]], [[prop-distinguished-triangles-are-closed-under-shifts-and-both-rotations]]).

[F5] The triangulated category is additive, so finite biproducts exist, and $\mathcal T(X\oplus Y,W)\cong\mathcal T(X,W)\oplus\mathcal T(Y,W)$ and $\mathcal T(W,X\oplus Y)\cong\mathcal T(W,X)\oplus\mathcal T(W,Y)$ ([[def-additive-category]], [[def-biproduct]]).

## Proof

**Proof technique:** direct.

1.1 Let $A\xrightarrow{a}X\xrightarrow{b}B\to A[1]$ be distinguished with $A\in\mathcal T^{\le n}$ and $B\in\mathcal T^{\ge n+1}$. For $T\in\mathcal T^{\le n}$, the exact segment $\operatorname{Hom}(T,B[-1])\to\operatorname{Hom}(T,A)\xrightarrow{a_*}\operatorname{Hom}(T,X)\to\operatorname{Hom}(T,B)$ has zero outer terms by [F2], since $B[-1]\in\mathcal T^{\ge n+2}$. Thus $a_*$ is bijective. Dually, for $T\in\mathcal T^{\ge n+1}$ the segment $\operatorname{Hom}(A[1],T)\to\operatorname{Hom}(B,T)\xrightarrow{b^*}\operatorname{Hom}(X,T)\to\operatorname{Hom}(A,T)$ has zero outer terms, since $A[1]\in\mathcal T^{\le n-1}$, so $b^*$ is bijective. [F1, F2, algebra]

1.2 If $A\xrightarrow{f}B\to0\to A[1]$ is a distinguished triangle, then $f$ is an isomorphism. Indeed, the triangle $B\xrightarrow{1}B\to0\to B[1]$ is distinguished by [F4], and $(f,1_B,0)$ is a morphism of triangles from the first to the second, commuting with all three arrows; the components $1_B$ and $0\to0$ are adjacent isomorphisms, so $f$ is an isomorphism by [F3]. [F3, F4, algebra]

2.1 Claim (i). Let $A\xrightarrow{a}X\xrightarrow{b}B\to A[1]$ be distinguished with $A\in\mathcal T^{\le n}$, $B\in\mathcal T^{\ge n+1}$, and let $P\xrightarrow{p}X\xrightarrow{q}Q\to P[1]$ be the truncation triangle. By step 1.1 applied to the truncation triangle with $T=A$ there is a unique $f:A\to P$ with $pf=a$, and applied to the given triangle with $T=P$ there is a unique $f':P\to A$ with $af'=p$. Then $p(ff')=af'=p=p\,1_P$, and $ff'=1_P$ because $\operatorname{Hom}(P,P)\to\operatorname{Hom}(P,X)$ is injective by step 1.1 applied to the truncation triangle with $T=P$; symmetrically $f'f=1_A$ using the given triangle with $T=A$. So $f$ is an isomorphism. By TR3 [F3] the commutative square $(f,1_X)$ extends to a morphism of triangles $(f,1_X,g)$, which is an isomorphism of triangles because $f$ and $1_X$ are adjacent isomorphism components, and its middle component is the identity of $X$. For uniqueness, let $(f'',1_X,g'')$ be another such isomorphism; then $pf''=a$, so $f''=f$ by the uniqueness in step 1.1 applied to the truncation triangle with $T=A$. Hence the composite of $(f'' ,1_X,g'')$ with the inverse of $(f,1_X,g)$ is an automorphism $(1_A,1_X,d)$ of the given triangle; it satisfies $db=b$, and $\operatorname{Hom}(B,B)\to\operatorname{Hom}(X,B)$, $v\mapsto vb$, is injective by step 1.1 applied to the given triangle with $T=B\in\mathcal T^{\ge n+1}$, so $d=1_B$ and the isomorphism over $X$ is unique. [step 1.1, F3, algebra]

2.2 Claim (ii), the $\le$ side. Fix the truncation triangle $P_X\xrightarrow{p_X}X\xrightarrow{q_X}Q_X\to P_X[1]$ for every $X$. For $f:X\to Y$, the composite $f p_X$ lies in $\operatorname{Hom}(P_X,Y)$, and step 1.1 applied to the truncation triangle of $Y$ with $T=P_X\in\mathcal T^{\le n}$ gives a unique map $\tau_{\le n}f:P_X\to P_Y$ with $p_Y(\tau_{\le n}f)=fp_X$. This makes $\tau_{\le n}$ a functor: $\tau_{\le n}(1_X)=1_{P_X}$ by uniqueness, and for $X\xrightarrow{f}Y\xrightarrow{h}Z$ both $\tau_{\le n}(hf)$ and $\tau_{\le n}h\circ\tau_{\le n}f$ have the same composite with $p_Z$, so they are equal by the uniqueness. The map $\operatorname{Hom}(T,P_X)\to\operatorname{Hom}(T,X)$, $u\mapsto p_Xu$, is a bijection for $T\in\mathcal T^{\le n}$ by step 1.1 applied to the truncation triangle of $X$, and it is natural in $X$ because both $p_Y(\tau_{\le n}f\,u)$ and $f(p_Xu)$ equal $(fp_X)u$. Applying the same argument with arrows reversed to the truncation triangle at $n-1$, whose third vertex is $\tau_{\ge n}X$, makes $X\mapsto\tau_{\ge n}X$ a functor and gives a bijection $\operatorname{Hom}(\tau_{\ge n}X,T)\to\operatorname{Hom}(X,T)$ for $T\in\mathcal T^{\ge n}$. The final vanishing $\operatorname{Hom}(\mathcal T^{\le n},\mathcal T^{\ge n+1})=0$ is [F2]. [step 1.1, F2, algebra]

2.3 Claim (iii), the $\le$ side. Let $P\xrightarrow{p}X\xrightarrow{q}Q\to P[1]$ be the truncation triangle. The following are equivalent: (a) $X\in\mathcal T^{\le n}$; (b) $p$ is an isomorphism; (c) $Q=0$; (d) $\operatorname{Hom}(X,\mathcal T^{\ge n+1})=0$. (a)$\Rightarrow$(d) is [F2]. (a)$\Rightarrow$(c): if $X\in\mathcal T^{\le n}$ then $q\in\operatorname{Hom}(X,Q)=0$ by [F2], so $q^*(1_Q)=q=0=q^*(0)$, and $q^*:\operatorname{Hom}(Q,Q)\to\operatorname{Hom}(X,Q)$ is injective by step 1.1 applied to the truncation triangle with $T=Q\in\mathcal T^{\ge n+1}$, hence $1_Q=0$ and $Q$ is a zero object. (c)$\Rightarrow$(b): if $Q=0$, step 1.2 applied to the triangle $P\to X\to0\to P[1]$ makes $p$ an isomorphism. (b)$\Rightarrow$(c): if $p$ is an isomorphism, then in the exact sequence $\operatorname{Hom}(Q,Q)\xrightarrow{q^*}\operatorname{Hom}(X,Q)\xrightarrow{p^*}\operatorname{Hom}(P,Q)$ of [F1] the map $p^*$ is injective (a map $\varphi$ with $\varphi p=0$ vanishes because $p$ is an isomorphism), so $\operatorname{im}(q^*)=0$; since $q^*$ is a bijection by step 1.1, $1_Q=0$ and $Q=0$. (d)$\Rightarrow$(c): if $\operatorname{Hom}(X,\mathcal T^{\ge n+1})=0$ then $q=0$, so $q^*(1_Q)=0=q^*(0)$ and injectivity of $q^*$ gives $1_Q=0$, i.e. $Q=0$. Finally (b)$\Rightarrow$(a): if $p$ is an isomorphism then $X\cong P$ and $P\in\mathcal T^{\le n}$, so $X\in\mathcal T^{\le n}$. [step 1.1, step 1.2, F1, F2]

2.4 Claim (iii), the $\ge$ side, by the same arguments with the roles of the two maps interchanged. Let $P\xrightarrow{p}X\xrightarrow{q}Q\to P[1]$ be the truncation triangle at $n-1$, so that $P=\tau_{\le n-1}X$ and $Q=\tau_{\ge n}X$. Then: (a$'$) $X\in\mathcal T^{\ge n}$ implies $\operatorname{Hom}(\mathcal T^{\le n-1},X)=0$ by [F2], hence $p=0$ and $p_*(1_P)=p=0=p_*(0)$ with $p_*$ injective by step 1.1, so $P=0$; (b$'$) $P=0$ makes the triangle $X\to Q\to0\to X[1]$ distinguished by [F4], so $X\to Q$ is an isomorphism by step 1.2 and $X\cong Q\in\mathcal T^{\ge n}$; (c$'$) if $X\to Q$ is an isomorphism then $qp=0$ forces $p=0$ and hence $1_P=0$ as above, so $P=0$; (d$'$) if $\operatorname{Hom}(\mathcal T^{\le n-1},X)=0$ then $p=0$ and $1_P=0$ as in (a$'$), so $P=0$ and $X\in\mathcal T^{\ge n}$ by (b$'$); and $X\in\mathcal T^{\ge n}$ implies $\operatorname{Hom}(\mathcal T^{\le n-1},X)=0$ by [F2]. This proves $X\in\mathcal T^{\ge n}$ if and only if $X\to\tau_{\ge n}X$ is an isomorphism, if and only if $\tau_{\le n-1}X=0$, if and only if $\operatorname{Hom}(\mathcal T^{\le n-1},X)=0$. [step 1.1, step 1.2, F2, F4]

3.1 Claim (iv), extensions: let $X\to Y\to Z\to X[1]$ be distinguished. If $X,Z\in\mathcal T^{\ge n}$, then for $W\in\mathcal T^{\le n-1}$ exactness of $\operatorname{Hom}(W,X)\to\operatorname{Hom}(W,Y)\to\operatorname{Hom}(W,Z)$ and orthogonality force $\operatorname{Hom}(W,Y)=0$, hence $Y\in\mathcal T^{\ge n}$ by step 2.4. Dually, $X,Z\in\mathcal T^{\le n}$ force $Y\in\mathcal T^{\le n}$ using $\operatorname{Hom}(Z,W)\to\operatorname{Hom}(Y,W)\to\operatorname{Hom}(X,W)$ and step 2.3. Applying these extension statements to the rotations $Y\to Z\to X[1]\to$ and $Z[-1]\to X\to Y\to$, and using $X[1]\in\mathcal T^{\le n-1}$ when $X\in\mathcal T^{\le n}$ and $Z[-1]\in\mathcal T^{\ge n+1}$ when $Z\in\mathcal T^{\ge n}$, gives the four other bounds in (iv). [step 2.3, step 2.4, F1, F2, F4]

3.2 Claim (iv), direct sums: for objects $X,Y$ one has $\operatorname{Hom}(X\oplus Y,W)\cong\operatorname{Hom}(X,W)\oplus\operatorname{Hom}(Y,W)$ and $\operatorname{Hom}(W,X\oplus Y)\cong\operatorname{Hom}(W,X)\oplus\operatorname{Hom}(W,Y)$ by [F5]. Hence $X\oplus Y\in\mathcal T^{\le n}$ implies $\operatorname{Hom}(X,W)=0$ for every $W\in\mathcal T^{\ge n+1}$, as a direct summand of the vanishing group $\operatorname{Hom}(X\oplus Y,W)$, so $X\in\mathcal T^{\le n}$ and likewise $Y\in\mathcal T^{\le n}$ by step 2.3; conversely if $X,Y\in\mathcal T^{\le n}$ then every such $\operatorname{Hom}(X\oplus Y,W)$ vanishes and $X\oplus Y\in\mathcal T^{\le n}$ by step 2.3. The same argument with the second displayed bijection and step 2.4 gives the statement for $\mathcal T^{\ge n}$; the empty direct sum is the zero object and the claims are vacuous for it. [step 2.3, step 2.4, F5]

3.3 Claim (iv), iteration: let $m\le n$. Since $\tau_{\le m}X\in\mathcal T^{\le n}$, its truncation map $\tau_{\le n}\tau_{\le m}X\to\tau_{\le m}X$ is an isomorphism by step 2.3. Put $P=\tau_{\le m}\tau_{\le n}X$ and $Q=\tau_{\le m}X$, and let $\alpha:P\to X$ and $\beta:Q\to X$ be the composites of their truncation maps. For every $T\in\mathcal T^{\le m}$, composition with either $\alpha$ or $\beta$ is a bijection onto $\operatorname{Hom}(T,X)$ by step 2.2 and $\mathcal T^{\le m}\subseteq\mathcal T^{\le n}$. Thus there are unique $d:P\to Q$ and $v:Q\to P$ with $\beta d=\alpha$ and $\alpha v=\beta$, and injectivity gives $dv=1_Q$ and $vd=1_P$. These isomorphisms commute with the maps to $X$ and are natural by uniqueness. Dually, since $\tau_{\ge n}X\in\mathcal T^{\ge m}$, the map $\tau_{\ge n}X\to\tau_{\ge m}\tau_{\ge n}X$ is an isomorphism by step 2.4; the dual factorization argument identifies $\tau_{\ge n}\tau_{\ge m}X$ with $\tau_{\ge n}X$, compatibly with the maps from $X$. Finally, if $m<n$, then $\tau_{\ge n}X\in\mathcal T^{\ge m+1}$, so $\tau_{\le m}\tau_{\ge n}X=0$ by step 2.4. [step 2.2, step 2.3, step 2.4, F2]

4.1 Steps 2.1, 2.2, 2.3, 2.4, 3.1, 3.2 and 3.3 prove claims (i), (ii), (iii) and (iv) respectively, including the uniqueness of the isomorphism in (i), the naturality and the dual statements in (ii), all four equivalent formulations in (iii), and the closure, direct-sum and iteration statements in (iv). [step 2.1, step 2.2, step 2.3, step 2.4, step 3.1, step 3.2, step 3.3] ∎
