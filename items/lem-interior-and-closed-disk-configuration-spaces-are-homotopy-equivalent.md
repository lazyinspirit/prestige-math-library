---
id: lem-interior-and-closed-disk-configuration-spaces-are-homotopy-equivalent
kind: lemma
title: "The interior-disc and closed-disc configuration spaces are homotopy equivalent"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-ordered-configuration-space, def-unordered-configuration-space,
       prop-the-symmetric-group-acts-freely-on-ordered-configurations,
       def-homotopy-equivalence, def-homotopy-relative-and-path-homotopy,
       def-complex-numbers-and-arithmetic, thm-complex-numbers-form-a-field,
       lem-complex-conjugation-and-modulus-laws,
       def-complex-metric-convergence-and-continuity, def-metric-ball,
       def-metric-topology, lem-vector-operations-are-continuous-in-a-normed-space,
       thm-product-universal-property, lem-continuity-is-local-and-pastes,
       def-continuous-map-top, def-product-topology, def-topological-space,
       def-quotient-topology, thm-quotient-universal-property,
       def-based-loops-and-fundamental-group, thm-fundamental-group-laws,
       lem-path-conjugation-isomorphism-of-fundamental-groups,
       def-induced-homomorphism-on-fundamental-groups,
       thm-induced-fundamental-group-map-functoriality,
       def-group-isomorphism-and-automorphism]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Juan Gonzalez-Meneses, Basic results on braid groups, sections 1.1 and 1.3, printed pp. 3-6"
      url: "https://arxiv.org/pdf/1010.0321"
    - title: "Allen Hatcher, Algebraic Topology, section 0, printed p. 3"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
verification:
  precheck: pass
---

## Statement

Write $$D^2:=\{\,z\in\mathbb C:|z|\le1\,\},\qquad \operatorname{int}D^2:=\{\,z\in\mathbb C:|z|<1\,\}$$ for the closed unit disc and its interior in $\mathbb C$; the topological interior of $D^2$ in $\mathbb C$ is exactly $\operatorname{int}D^2$ (step 1.1), so the notation is accurate. For $n\in\mathbb N$ write $F_n(D^2)$, $F_n(\operatorname{int}D^2)$ for the ordered configuration spaces and $C_n(D^2)$, $C_n(\operatorname{int}D^2)$ for the unordered ones ([[def-ordered-configuration-space]], [[def-unordered-configuration-space]]), with quotient maps $p_X:F_n(X)\to C_n(X)$. Let $\iota^F:F_n(\operatorname{int}D^2)\to F_n(D^2)$ be the inclusion and let $\iota^C:C_n(\operatorname{int}D^2)\to C_n(D^2)$ be the map induced by $\iota^F$ on the orbit quotients (constructed in step 3.2). Put $$\rho^F(x_1,\dots,x_n):=\Big(\frac{x_1}{2},\dots,\frac{x_n}{2}\Big),\qquad H_t(x_1,\dots,x_n):=\Big(\big(1-\tfrac t2\big)x_1,\dots,\big(1-\tfrac t2\big)x_n\Big)\quad(t\in I),$$ for $x\in F_n(D^2)$. Then for every $n\in\mathbb N$:

1. $H$ is a homotopy from $\operatorname{id}_{F_n(D^2)}$ to the composite $\iota^F\circ\rho^F$, and the restriction of $H$ to $F_n(\operatorname{int}D^2)\times I$ is a homotopy from $\operatorname{id}_{F_n(\operatorname{int}D^2)}$ to $\rho^F\circ\iota^F$; hence $\iota^F$ is a homotopy equivalence ([[def-homotopy-equivalence]]) with homotopy inverse $\rho^F$.
2. $H$ descends to a homotopy $H^{C}:C_n(D^2)\times I\to C_n(D^2)$ from $\operatorname{id}_{C_n(D^2)}$ to $\iota^C\circ\rho^{C}$, where $\rho^{C}$ is the map induced by $\rho^F$ (step 4.2); likewise the descended homotopy restricted to $C_n(\operatorname{int}D^2)$ exhibits $\rho^{C}\circ\iota^{C}\simeq\operatorname{id}_{C_n(\operatorname{int}D^2)}$ (step 6.1). Hence $\iota^{C}$ is a homotopy equivalence with homotopy inverse $\rho^{C}$, and the two equivalences are compatible with the quotient maps: $$p_{D^2}\circ H_t=H^{C}_t\circ p_{D^2},\qquad p_{\operatorname{int}D^2}\circ\rho^F=\rho^{C}\circ p_{D^2},\qquad \iota^{C}\circ p_{\operatorname{int}D^2}=p_{D^2}\circ\iota^F .$$
3. For every $q\in F_n(\operatorname{int}D^2)$ the induced homomorphisms of fundamental groups ([[def-induced-homomorphism-on-fundamental-groups]]) $$\iota^F_*:\pi_1\big(F_n(\operatorname{int}D^2),q\big)\to\pi_1\big(F_n(D^2),q\big),\qquad \iota^{C}_*:\pi_1\big(C_n(\operatorname{int}D^2),[q]\big)\to\pi_1\big(C_n(D^2),[q]\big)$$ are isomorphisms. In particular the closed-disc and open-disc models compute the same fundamental groups at every configuration of interior points, so no boundary basepoint change is needed when a later result is stated on either model.

The case $n=0$ is included: $F_0$ and $C_0$ of either space are one-point spaces, and the assertions are the trivial ones.

## Facts & Assumptions

**Given:** A natural number $n$, the closed unit disc $D^2=\{z\in\mathbb C:|z|\le1\}$ and the open disc $\operatorname{int}D^2=\{z\in\mathbb C:|z|<1\}$, the unit interval $I=[0,1]$, and the four configuration spaces of the statement with the maps $\iota^F,\iota^C,\rho^F,H,p_X$.

[F1] Points of $F_n(X)$ are the tuples $(x_1,\dots,x_n)\in X^n$ with $x_i\neq x_j$ for $i\neq j$, carrying the subspace topology of the product $X^n$; $F_0(X)$ is a one-point space, $F_1(X)$ is canonically homeomorphic to $X$ by single-coordinate evaluation, and the label $i$ names the coordinate of index $i-1$ under the identification $\kappa(i)=i-1$ of $\{1,\dots,n\}$ with $n=\{0,\dots,n-1\}$ ([[def-ordered-configuration-space]]).

[L2] $C_n(X)=F_n(X)/S_n$ carries the quotient topology of the canonical projection $p_X:F_n(X)\to C_n(X)$, which is a quotient map; two tuples lie in the same orbit exactly when they differ by a permutation of coordinates, and the basepoint of $C_n(X)$ at $q\in F_n(X)$ is the orbit $[q]$ ([[def-unordered-configuration-space]]). The formula $(\sigma\cdot x)_i=x_{\sigma^{-1}(i-1)+1}$ defines a continuous action of $S_n$ on $F_n(X)$, by homeomorphisms of $F_n(X)$, and this action is free ([[prop-the-symmetric-group-acts-freely-on-ordered-configurations]]).

[L3] A homotopy from $f$ to $g$ is a continuous map $H:X\times I\to Y$ with $H(\cdot,0)=f$ and $H(\cdot,1)=g$, and $f:X\to Y$ is a homotopy equivalence when there is a continuous $g:Y\to X$ with $g\circ f\simeq\operatorname{id}_X$ and $f\circ g\simeq\operatorname{id}_Y$ ([[def-homotopy-relative-and-path-homotopy]], [[def-homotopy-equivalence]]).

[L4] $\mathbb C$ is a field ([[thm-complex-numbers-form-a-field]]) and its modulus satisfies $|z|\ge0$, $|z|=0\Longleftrightarrow z=0$, $|zw|=|z||w|$ and $|z+w|\le|z|+|w|$ for all $z,w$ ([[lem-complex-conjugation-and-modulus-laws]]); the metric of the plane is $d_{\mathbb C}(z,w)=|z-w|$ ([[def-complex-metric-convergence-and-continuity]]).

[L5] The open balls $B(z,\varepsilon)=\{w:d_{\mathbb C}(z,w)<\varepsilon\}$ are a basis of the metric topology, so a subset of $\mathbb C$ is open exactly when every point of it has a ball around it contained in the set ([[def-metric-ball]], [[def-metric-topology]]); scalar multiplication $\mathbb C\times\mathbb C\to\mathbb C$, $(\lambda,z)\mapsto\lambda z$, is continuous ([[lem-vector-operations-are-continuous-in-a-normed-space]]); a map into a product space is continuous exactly when all its components are ([[thm-product-universal-property]]); composites and restrictions of continuous maps are continuous, and a function is continuous as soon as its restrictions to the members of a finite closed cover are continuous ([[lem-continuity-is-local-and-pastes]], [[def-continuous-map-top]]); open boxes form a basis of the product topology ([[def-product-topology]]), and finite unions of open sets are open ([[def-topological-space]]).

[L6] For a quotient map $q:X\to Y$, a function $k:Y\to W$ is continuous if and only if $k\circ q$ is continuous, and a continuous map on $X$ that is constant on the fibres of $q$ factors uniquely through $q$ by a continuous map ([[thm-quotient-universal-property]], [[def-quotient-topology]]).

[L7] The product $[\alpha][\beta]=[\alpha*\beta]$ traverses $\alpha$ first and $\beta$ second, and makes $\pi_1(X,x_0)$ a group whose identity is the class of the constant loop $c_{x_0}$ and in which $[\alpha]^{-1}=[\bar\alpha]$ ([[def-based-loops-and-fundamental-group]], [[thm-fundamental-group-laws]]). Concatenation of paths respects path homotopy rel endpoints, is associative up to such homotopy, absorbs constant paths, and $\lambda*\bar\lambda$ is nullhomotopic rel endpoints; a path $c$ from $x_0$ to $x_1$ gives by $[\alpha]\mapsto[\bar c*\alpha*c]$ an isomorphism $\pi_1(X,x_0)\cong\pi_1(X,x_1)$ ([[lem-path-conjugation-isomorphism-of-fundamental-groups]]).

[L8] A bijective group homomorphism is a group isomorphism ([[def-group-isomorphism-and-automorphism]]); for continuous $f$ the assignment $f_*([\alpha])=[f\circ\alpha]$ is a well-defined group homomorphism and $(g\circ f)_*=g_*\circ f_*$ ([[def-induced-homomorphism-on-fundamental-groups]], [[thm-induced-fundamental-group-map-functoriality]]).



## Proof

**Proof technique:** direct.

1.1 *The interior of $D^2$ is $\operatorname{int}D^2$.* By [L4] the ball of radius $\varepsilon$ about $z$ is $\{w:|w-z|<\varepsilon\}$. If $|z|<1$, put $\varepsilon:=1-|z|>0$; then every $w$ with $|w-z|<\varepsilon$ has $|w|\le|w-z|+|z|<\varepsilon+|z|=1$, so the ball lies in $D^2$, and by [L5] $z$ is an interior point. If $|z|=1$ and $\varepsilon>0$, the point $w:=(1+\varepsilon/2)z$ has $|w-z|=(\varepsilon/2)|z|=\varepsilon/2<\varepsilon$ but $|w|=1+\varepsilon/2>1$, so it lies outside $D^2$ and no ball about $z$ is contained in $D^2$. If $|z|>1$ then $z\notin D^2$. Hence the interior of $D^2$ in $\mathbb C$ is exactly $\{z:|z|<1\}$. [L4, L5]

1.2 *Scaling by $\lambda\in(0,1]$ preserves configurations.* Let $\lambda\in(0,1]$, let $m\in\mathbb N$ and let $x\in F_m(D^2)$ or $x\in F_m(\operatorname{int}D^2)$ according to the case, and put $\lambda x:=(\lambda x_1,\dots,\lambda x_m)$. Then $|\lambda x_i|=|\lambda|\,|x_i|=\lambda|x_i|\le|x_i|\le1$, with $|\lambda x_i|\le|x_i|<1$ when all $|x_i|<1$; and $\lambda x_i=\lambda x_j$ implies $x_i=\lambda^{-1}\lambda x_i=\lambda^{-1}\lambda x_j=x_j$ because $\lambda\neq0$. So $\lambda x\in F_m(D^2)$, and $\lambda x\in F_m(\operatorname{int}D^2)$ whenever $x\in F_m(\operatorname{int}D^2)$. [F1, L4]

1.3 *The quotient projection is open.* Let $V\subseteq F_m(X)$ be open. A tuple $x$ lies in $p_X^{-1}(p_X(V))$ exactly when $x=\sigma\cdot v$ for some $\sigma\in S_m$ and $v\in V$, so $p_X^{-1}(p_X(V))=\bigcup_{\sigma\in S_m}\sigma(V)$. Each $\sigma(V)$ is open because $\sigma$ acts by a homeomorphism of $F_m(X)$ ([L2]), so this finite union is open by [L5]; hence $p_X(V)$ is open in the quotient topology ([[def-quotient-topology]]). Thus $p_X$ is an open map. [L2, L5]

1.4 *Moving-basepoint lemma.* Let $Y$ be a space, let $c:I\to Y$ be continuous and let $G:I\times I\to Y$ be continuous with $G(0,u)=G(1,u)=c(u)$ for every $u\in I$; write $G_0(s):=G(s,0)$ and $G_1(s):=G(s,1)$, loops at $c(0)$ and $c(1)$. Then $G_0*c\simeq c*G_1$ rel endpoints. Indeed, put $A(s):=(2s,0)$ for $s\le\frac12$ and $A(s):=(1,2s-1)$ for $s\ge\frac12$, and $B(s):=(0,2s)$ for $s\le\frac12$ and $B(s):=(2s-1,1)$ for $s\ge\frac12$; on each of the two closed halves a single continuous formula is given, and at $s=\frac12$ both formulas for $A$ give $(1,0)$ and both formulas for $B$ give $(0,1)$, so by the finite closed pasting of [L5] $A$ and $B$ are continuous paths in $I\times I$ with $A(0)=B(0)=(0,0)$ and $A(1)=B(1)=(1,1)$. Put $P_t(s):=(1-t)A(s)+tB(s)$ for $(s,t)\in I\times I$, a continuous map into $I\times I$. Then $(s,t)\mapsto G(P_t(s))$ is continuous, for each $t$ it is a path from $G(0,0)=c(0)$ to $G(1,1)=c(1)$, and $G\circ P_0=G\circ A=G_0*c$, $G\circ P_1=G\circ B=c*G_1$, because for $s\le\frac12$ one has $G(A(s))=G(2s,0)=G_0(2s)$ and $G(B(s))=G(0,2s)=c(2s)$, while for $s\ge\frac12$ one has $G(A(s))=G(1,2s-1)=c(2s-1)$ and $G(B(s))=G(2s-1,1)=G_1(2s-1)$. So $G\circ P$ is a path homotopy rel endpoints from $G_0*c$ to $c*G_1$. [L3, L5]

2.1 *The scaling map and the homotopy are well defined.* Put $\lambda(t):=1-t/2$ for $t\in I$; then $1/2\le\lambda(t)\le1$, so $\lambda(t)\in(0,1]$, and $\lambda(0)=1$, $\lambda(1)=1/2$. Define $H_t(x):=(\lambda(t)x_1,\dots,\lambda(t)x_n)$ and $\rho^F:=H_1$. By step 1.2, $H_t$ maps $F_n(D^2)$ into itself and $F_n(\operatorname{int}D^2)$ into itself, so $H_1=\rho^F$ is a well-defined map $F_n(D^2)\to F_n(\operatorname{int}D^2)$ and $H_0=\operatorname{id}_{F_n(D^2)}$. Consequently $H_1=\iota^F\circ\rho^F$ as maps $F_n(D^2)\to F_n(D^2)$, and the restriction of $H$ to $F_n(\operatorname{int}D^2)\times I$ is a homotopy within $F_n(\operatorname{int}D^2)$ from $\operatorname{id}_{F_n(\operatorname{int}D^2)}$ to $\rho^F\circ\iota^F$. [step 1.2, F1, algebra]

3.1 *Joint continuity of $H$.* The map $(x,t)\mapsto(\lambda(t),x_i)$ from $F_n(D^2)\times I$ to $\mathbb C\times\mathbb C$ is continuous: its first component is the composite of the projection to $I$ with the affine map $t\mapsto1-t/2$, its second the composite of the projection to $F_n(D^2)$ with the $i$-th coordinate projection of the product $\mathbb C^n$. Hence $(x,t)\mapsto\lambda(t)x_i$ is continuous as a composite with scalar multiplication [L5], so $(x,t)\mapsto H_t(x)$ is continuous into the product $\mathbb C^n$ by the component criterion and, since its values lie in the subspace, into $F_n(D^2)$; the restricted map $F_n(\operatorname{int}D^2)\times I\to F_n(\operatorname{int}D^2)$ is continuous for the same reason. Thus $H$ and its restriction are continuous homotopies. [F1, L5, step 2.1]

3.2 *Equivariance and the induced map $\iota^C$.* For $\sigma\in S_n$, $x\in F_n(D^2)$, $t\in I$ and every label $i$ one has $(H_t(\sigma\cdot x))_i=\lambda(t)(\sigma\cdot x)_i=\lambda(t)x_{\sigma^{-1}(i-1)+1}=(\sigma\cdot H_t(x))_i$, so $H_t(\sigma\cdot x)=\sigma\cdot H_t(x)$; with $t=1$ this gives $\rho^F(\sigma\cdot x)=\sigma\cdot\rho^F(x)$. Hence $p_{D^2}\circ\iota^F$ is constant on the fibres of $p_{\operatorname{int}D^2}$, and since it is continuous, [L6] factors it uniquely through a continuous $\iota^C$ with $\iota^C\circ p_{\operatorname{int}D^2}=p_{D^2}\circ\iota^F$, sending the orbit of $x$ to the same orbit viewed in $F_n(D^2)$; $\iota^C$ is injective because two orbits of $F_n(\operatorname{int}D^2)$ that coincide as subsets of $F_n(D^2)$ are equal. It is also open onto its image: for $V\subseteq C_n(\operatorname{int}D^2)$ open, $W:=p_{\operatorname{int}D^2}^{-1}(V)$ is open, $F_n(\operatorname{int}D^2)=(\operatorname{int}D^2)^n\cap F_n(D^2)$ is open in $F_n(D^2)$, and the saturated set $\bigcup_{\sigma\in S_n}\sigma(W)=p_{D^2}^{-1}(\iota^C(V))$ is open in $F_n(D^2)$, so $\iota^C(V)$ is open in $C_n(D^2)$; a continuous injective open map is a homeomorphism onto its image. [F1, L2, L5, L6, step 2.1]

3.3 *Injectivity for the ordered spaces.* Let $\delta$ be a loop in $F_n(\operatorname{int}D^2)$ at $q$ with $[\iota^F\circ\delta]$ trivial, and let $F:I\times I\to F_n(D^2)$ with $F(s,0)=\iota^F(\delta(s))$, $F(s,1)=q$ and $F(0,u)=F(1,u)=q$ be the nullhomotopy rel endpoints. Then $\rho^F\circ F$ is a nullhomotopy rel endpoints of $\rho^F\circ\delta$ in $F_n(\operatorname{int}D^2)$, so $[\rho^F\circ\delta]=1$. Apply step 1.4 to $G(s,u):=H_u(\delta(s))$, which by step 2.1 takes values in $F_n(\operatorname{int}D^2)$ and satisfies $G(0,u)=G(1,u)=c(u)$ for $c(u)=H_u(q)$: it gives $\delta*c\simeq c*(\rho^F\circ\delta)$ rel endpoints. Since $\rho^F\circ\delta$ is nullhomotopic, [L7] gives $c*(\rho^F\circ\delta)\simeq c$ and hence $\delta*c\simeq c$; right-concatenating with $\bar c$ and using that $c*\bar c$ is nullhomotopic with constants absorbed, $\delta\simeq\delta*(c*\bar c)\simeq c*\bar c\simeq c_q$. So $[\delta]=1$ and $\iota^F_*$ is injective. [step 1.4, step 2.1, L7, L8]

4.1 *Claim 1.* By steps 2.1 and 3.1, $H$ is a homotopy from $\operatorname{id}_{F_n(D^2)}=H_0$ to $H_1=\iota^F\circ\rho^F$, and its restriction to $F_n(\operatorname{int}D^2)\times I$ is a homotopy from $\operatorname{id}_{F_n(\operatorname{int}D^2)}$ to $\rho^F\circ\iota^F$; equivalently $\iota^F\circ\rho^F\simeq\operatorname{id}_{F_n(D^2)}$ and $\rho^F\circ\iota^F\simeq\operatorname{id}_{F_n(\operatorname{int}D^2)}$. By [L3], $\iota^F$ is a homotopy equivalence with homotopy inverse $\rho^F$. [step 2.1, step 3.1, L3]

4.2 *The descended scaling map $\rho^C$.* Since $\rho^F$ is continuous and $S_n$-equivariant by step 3.2, the continuous composite $p_{\operatorname{int}D^2}\circ\rho^F$ is constant on the fibres of $p_{D^2}$: equivariance makes the images of orbit representatives belong to the same target orbit. By [L6] this composite factors uniquely through a continuous map $\rho^{C}:C_n(D^2)\to C_n(\operatorname{int}D^2)$ with $p_{\operatorname{int}D^2}\circ\rho^F=\rho^{C}\circ p_{D^2}$. [L6, step 3.2]

4.3 *Surjectivity for the ordered spaces.* Let $\gamma$ be a loop in $F_n(D^2)$ at $q\in F_n(\operatorname{int}D^2)$ and put $c(u):=H_u(q)$ for $u\in I$. By steps 2.1 and 3.1, $c$ is a path in $F_n(\operatorname{int}D^2)$ from $q$ to $\rho^F(q)$ and $G(s,u):=H_u(\gamma(s))$ is a continuous map $I\times I\to F_n(D^2)$ with $G(0,u)=G(1,u)=c(u)$, $G_0=\gamma$ and $G_1=\rho^F\circ\gamma$, so step 1.4 gives $\gamma*c\simeq c*(\rho^F\circ\gamma)$ rel endpoints. Then $\eta:=c*(\rho^F\circ\gamma)*\bar c$ is a loop in $F_n(\operatorname{int}D^2)$ at $q$, and right-concatenating that homotopy with $\bar c$, using [L7] that concatenation respects path homotopy and that $c*\bar c$ is nullhomotopic with constants absorbed, gives $\gamma\simeq c*(\rho^F\circ\gamma)*\bar c=\iota^F\circ\eta$ rel endpoints. Hence $[\gamma]=\iota^F_*([\eta])$ by [L8] and $\iota^F_*$ is surjective. [step 1.4, step 2.1, step 3.1, L7, L8]

5.1 *The descended homotopy $H^{C}$.* Put $q:=p_{D^2}\times\operatorname{id}_I:F_n(D^2)\times I\to C_n(D^2)\times I$. This $q$ is continuous and surjective, and it is a quotient map: if $O\subseteq F_n(D^2)\times I$ is open and $(x,t)\in O$, the box basis [L5] gives a box $U\times J\subseteq O$ with $x\in U$ and $t\in J$, and by step 1.3 $p_{D^2}(U)$ is open, so the box $p_{D^2}(U)\times J$ is an open subset of $q(O)$ containing $q(x,t)$, since any $(y,t')$ in it equals $q(x',t')$ for some $x'\in U$. Hence $q(O)$ is open. The formula $H^{C}(y,t):=p_{D^2}(H_t(x))$ for $x\in p_{D^2}^{-1}(y)$ is well defined by the equivariance of $H$ (step 3.2), and $H^{C}\circ q=p_{D^2}\circ H$ is continuous, so [L6] makes $H^{C}:C_n(D^2)\times I\to C_n(D^2)$ continuous. It satisfies $H^{C}_0=\operatorname{id}_{C_n(D^2)}$, $p_{D^2}\circ H_t=H^{C}_t\circ p_{D^2}$, and $H^{C}_1=\iota^C\circ\rho^{C}$, the last because on classes $H^{C}_1([x])=[H_1(x)]=[\rho^F(x)]=\iota^C(\rho^{C}([x]))$ by steps 3.2 and 4.2. [L5, L6, step 1.3, step 3.2, step 4.2]

5.2 *Claim 3 for the ordered spaces.* Let $q\in F_n(\operatorname{int}D^2)$ and let $\iota^F_*$ be the induced homomorphism of [L8]. If $n=0$ then $F_0(\operatorname{int}D^2)$ and $F_0(D^2)$ are one-point spaces, all their loops are constant, so both fundamental groups are one-element groups and $\iota^F_*$ is a bijection. If $n\ge1$, steps 4.3 and 3.3 exhibit $\iota^F_*$ as surjective and injective. In both cases [L8] makes $\iota^F_*$ a group isomorphism. [step 4.3, step 3.3, L8]

6.1 *The restricted homotopy on $C_n(\operatorname{int}D^2)$.* Define $K:C_n(\operatorname{int}D^2)\times I\to C_n(\operatorname{int}D^2)$ by letting $K(y,t)$ be the orbit in $F_n(\operatorname{int}D^2)$ of $H_t(x)$ for any $x\in p_{\operatorname{int}D^2}^{-1}(y)$; this is well defined by step 3.2 and its values lie in $C_n(\operatorname{int}D^2)$ because $H_t$ maps $F_n(\operatorname{int}D^2)$ into itself (step 2.1). By the embedding property of step 3.2, $K$ is continuous if and only if $\iota^C\circ K$ is, and $\iota^C\circ K(y,t)=H^{C}_t(\iota^C(y))$ is the composite of the continuous map $\iota^C\times\operatorname{id}_I$ with the continuous $H^{C}$ of step 5.1; so $K$ is continuous, with $K_0=\operatorname{id}_{C_n(\operatorname{int}D^2)}$ and $K_1=\rho^{C}\circ\iota^{C}$. [step 2.1, step 3.2, step 5.1]

7.1 *Claim 2.* Steps 5.1 and 6.1 give $\iota^{C}\circ\rho^{C}=H^{C}_1\simeq H^{C}_0=\operatorname{id}_{C_n(D^2)}$ and $\rho^{C}\circ\iota^{C}=K_1\simeq K_0=\operatorname{id}_{C_n(\operatorname{int}D^2)}$, so by [L3] $\iota^{C}$ is a homotopy equivalence with homotopy inverse $\rho^{C}$, and the three compatibility identities of the statement hold by steps 3.2, 4.2 and 5.1. [step 3.2, step 4.2, step 5.1, step 6.1, L3]

7.2 *Claim 3 for the unordered spaces.* Let $y:=[q]\in C_n(\operatorname{int}D^2)$ and let $\gamma$ be a loop in $C_n(D^2)$ at $y$. Put $c(u):=H^{C}_u(y)$ and $G(s,u):=H^{C}_u(\gamma(s))$; by steps 5.1 and 6.1 these are continuous, $G(0,u)=G(1,u)=c(u)$, $G_0=\gamma$ and $G_1=\rho^{C}\circ\gamma$ because $H^{C}_1=\iota^{C}\circ\rho^{C}$, and $c$ is a path in $C_n(\operatorname{int}D^2)$ from $y$ to $\rho^{C}(y)$. Step 1.4 gives $\gamma*c\simeq c*(\rho^{C}\circ\gamma)$, and $\eta:=c*(\rho^{C}\circ\gamma)*\bar c$ is a loop in $C_n(\operatorname{int}D^2)$ at $y$ with $\iota^{C}\circ\eta\simeq\gamma$, so $\iota^{C}_*$ is surjective. For injectivity let $\delta$ be a loop in $C_n(\operatorname{int}D^2)$ at $y$ with $\iota^{C}_*([\delta])=1$, witnessed by a nullhomotopy $F$ of $\iota^{C}\circ\delta$; then $\rho^{C}\circ F$ nullhomotopes $\rho^{C}\circ\delta$, and step 1.4 applied to $G(s,u):=K_u(\delta(s))$ of step 6.1 gives $\delta*c\simeq c*(\rho^{C}\circ\delta)\simeq c$, whence $\delta\simeq c_q$ by the same cancellation as in step 3.3. So $\iota^{C}_*$ is injective, and for $n=0$ both groups are one-element as in step 5.2. By [L8], $\iota^{C}_*$ is an isomorphism. [step 1.4, step 5.1, step 6.1, step 3.3, step 5.2, L7, L8]

8.1 *Conclusion.* Claim 1 is step 4.1, claim 2 is step 7.1 and claim 3 is steps 5.2 and 7.2, so all the assertions of the statement hold. [step 4.1, step 7.1, step 5.2, step 7.2] ∎
