---
id: lem-timelike-cone-has-two-convex-components
kind: lemma
title: "The timelike set has exactly two convex components, described in orthonormal coordinates"
status: draft
origin: session
domain: mathematics
dependency_level: 3
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
deps: [def-causal-classification-of-lorentz-vectors, lem-lorentz-form-has-orthonormal-basis, def-time-orientation-and-future-causal-sets, def-convex-subset-of-euclidean-space, cor-triangle-inequality-for-inner-product-norm, ex-convex-subsets-of-rn-are-path-connected, thm-intermediate-value, thm-unique-coordinates-with-respect-to-an-ordered-basis, def-euclidean-inner-product, def-metric-space, def-metric-topology, def-connected-space, def-connected-component-and-quasicomponent, def-subspace-topology-top, thm-path-connected-implies-connected]
dependency_roles:
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  lem-lorentz-form-has-orthonormal-basis: mathematical-premise
  def-time-orientation-and-future-causal-sets: mathematical-premise
  def-convex-subset-of-euclidean-space: mathematical-premise
  cor-triangle-inequality-for-inner-product-norm: mathematical-premise
  ex-convex-subsets-of-rn-are-path-connected: mathematical-premise
  thm-intermediate-value: mathematical-premise
  thm-unique-coordinates-with-respect-to-an-ordered-basis: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-metric-space: mathematical-premise
  def-metric-topology: mathematical-premise
  def-connected-space: mathematical-premise
  def-connected-component-and-quasicomponent: mathematical-premise
  def-subspace-topology-top: mathematical-premise
  thm-path-connected-implies-connected: mathematical-premise
sources:
  references:
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), sections 2.1-2.2 pp. 25-28 (PDF pp. 26-29); Internet Archive copy of the original https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 1 pp. 2-7 (PDF pp. 9-14)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "B. Crowell, Special Relativity, rev. 2020-12-10, sections 1.3-1.4 pp. 23-31 and Ch. 2 pp. 43-51 (signature (+---) converted to (-+++))"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
verification:
  precheck: pass
---

## Statement

Let $(V,\eta)$ be a Lorentz vector space of signature $(-,+,+,+)$ and let
$(e_0,e_1,e_2,e_3)$ be an $\eta$-orthonormal ordered basis. Write
$v=v^0e_0+v^1e_1+v^2e_2+v^3e_3$ for the coordinates of $v$
([[thm-unique-coordinates-with-respect-to-an-ordered-basis]]) and

$$\lvert v_{\mathrm{vec}}\rvert:=\sqrt{(v^1)^2+(v^2)^2+(v^3)^2}.$$

Then $\eta(v,v)=-(v^0)^2+\lvert v_{\mathrm{vec}}\rvert^2$, and the timelike set
$T:=\{v\in V:\eta(v,v)<0\}$ satisfies

$$T=T_+\cup T_-,\qquad T_+:=\{v:v^0>\lvert v_{\mathrm{vec}}\rvert\},\qquad T_-:=\{v:v^0<-\lvert v_{\mathrm{vec}}\rvert\}.$$

The sets $T_+$ and $T_-$ are nonempty, disjoint, open in $V$ (for the metric
topology of the distance $d(u,w):=\lVert c(u)-c(w)\rVert_2$ induced by the
coordinates $c(v):=(v^0,v^1,v^2,v^3)$), convex and path-connected, and they are
exactly the two connected components of $T$. In every $\eta$-orthonormal
ordered basis the two displayed coordinate sets coincide with the two
components of $T$ in some order, and they may be interchanged relative to a
previously fixed naming of the components. Moreover

$$\operatorname{cl}(T_+)=\{v:v^0\ge\lvert v_{\mathrm{vec}}\rvert\},\qquad \operatorname{cl}(T_-)=\{v:v^0\le-\lvert v_{\mathrm{vec}}\rvert\},\qquad \operatorname{cl}(T_+)\cap\operatorname{cl}(T_-)=\{0\}.$$

## Facts & Assumptions

**Given:** A Lorentz vector space $(V,\eta)$ of signature $(-,+,+,+)$ and an
$\eta$-orthonormal ordered basis $(e_0,e_1,e_2,e_3)$ of $V$.

[L1] There is an ordered basis $(e_0,e_1,e_2,e_3)$ of $V$ with
$\eta(e_a,e_b)=\operatorname{diag}(-1,1,1,1)_{ab}$ for all $a,b$, and such a
basis is called $\eta$-orthonormal ([[lem-lorentz-form-has-orthonormal-basis]]).

[L2] For an ordered basis $v:n\to V$, every $x\in V$ has exactly one coordinate
list $\lambda$ with $x=\sum_{i<n}\lambda_iv_i$, and the coordinate list is attached
to the ordered basis ([[thm-unique-coordinates-with-respect-to-an-ordered-basis]]).

[L3] A vector $v$ is timelike when $q(v)<0$, null when $v\neq0$ and $q(v)=0$,
spacelike when $q(v)>0$, and causal when it is timelike or null, where
$q(v)=\eta(v,v)$ is the associated quadratic form
([[def-causal-classification-of-lorentz-vectors]]).

[L4] The Euclidean inner product of $x,y\in\mathbb R^n$ is
$\langle x,y\rangle=\sum_{k<n}x_ky_k$, with $\lVert x\rVert_2=\sqrt{\langle x,x\rangle}$,
and it is symmetric, bilinear and positive definite
([[def-euclidean-inner-product]]).

[L5] The function induced by an inner product satisfies
$\lVert v\rVert\ge0$ with $\lVert v\rVert=0$ if and only if $v=0$,
$\lVert\lambda v\rVert=|\lambda|\lVert v\rVert$, and
$\lVert u+v\rVert\le\lVert u\rVert+\lVert v\rVert$
([[cor-triangle-inequality-for-inner-product-norm]]).

[L6] A metric on a set $X$ is a function $d:X\times X\to\mathbb R$ with
$d(x,y)=0$ if and only if $x=y$, symmetry, and the triangle inequality
([[def-metric-space]]).

[L7] A subset $U\subseteq\mathbb R^m$ is convex when $(1-t)x+ty\in U$ for all
$x,y\in U$ and $t\in[0,1]$ ([[def-convex-subset-of-euclidean-space]]).

[L8] Every convex subset $C\subseteq\mathbb R^n$, $n\ge1$, is path-connected,
hence connected ([[ex-convex-subsets-of-rn-are-path-connected]], claim 1).

[L9] A subset $U$ of a metric space $(X,d)$ is open when for every $x\in U$
there is $r>0$ with $B(x,r)\subseteq U$, and the collection of these sets is the
metric topology; a set is closed when its complement is open
([[def-metric-topology]]).

[L10] A separation of a topological space is an ordered pair of open, nonempty,
disjoint subsets with union the whole space; a space is connected when no
separation exists, and a subset is connected when it is connected in the
subspace topology ([[def-connected-space]]).

[L11] The open sets of the subspace topology on $C\subseteq X$ are exactly the
intersections $C\cap U$ with $U$ open in $X$
([[def-subspace-topology-top]]).

[L12] The connected component $C_T(x)$ of a point $x$ in a space $T$ is the
union of all connected subsets of $T$ containing $x$, and it is the largest
connected subset of $T$ containing $x$
([[def-connected-component-and-quasicomponent]]).

[L13] If $X$ is path-connected then $X$ is connected, and a path-connected
subset of $X$ is a connected subset of $X$
([[thm-path-connected-implies-connected]], claim 2).

[L14] If $f:[a,b]\to\mathbb R$ is continuous on the closed bounded interval and
$y$ lies between $f(a)$ and $f(b)$, then $f(c)=y$ for some $c\in[a,b]$
([[thm-intermediate-value]]).

[L15] A time orientation of $(V,\eta)$ is a choice of one of the two components
of the timelike set $T$ ([[def-time-orientation-and-future-causal-sets]]).

## Proof

1.1 For $v=\sum_av^ae_a$ and $w=\sum_bw^be_b$, bilinearity of $\eta$ together with $\eta(e_a,e_b)=\operatorname{diag}(-1,1,1,1)_{ab}$ from [L1] give $\eta(v,w)=-v^0w^0+v^1w^1+v^2w^2+v^3w^3$, hence $\eta(v,v)=-(v^0)^2+\lvert v_{\mathrm{vec}}\rvert^2$, where $\lvert v_{\mathrm{vec}}\rvert^2=(v^1)^2+(v^2)^2+(v^3)^2=\lVert v_{\mathrm{vec}}\rVert_2^2$ by [L4]. The assignment $c(v):=(v^0,v^1,v^2,v^3)$ is a bijection $V\to\mathbb R^4$ by [L2]. By [L3] the timelike set is $T=\{v:\eta(v,v)<0\}=\{v:(v^0)^2>\lvert v_{\mathrm{vec}}\rvert^2\}=\{v:\lvert v^0\rvert>\lvert v_{\mathrm{vec}}\rvert\}=T_+\cup T_-$, because $\lvert v^0\rvert>\lvert v_{\mathrm{vec}}\rvert$ holds exactly when $v^0>\lvert v_{\mathrm{vec}}\rvert$ or $v^0<-\lvert v_{\mathrm{vec}}\rvert$. [L1, L2, L3, L4, algebra]

1.2 Define $d(u,w):=\lVert c(u)-c(w)\rVert_2$. By [L5] applied to the Euclidean inner product of [L4], the Euclidean norm is nonnegative, vanishes only at $0$, is absolutely homogeneous, and satisfies the triangle inequality; with $c$ a bijection [L2] this shows that $d$ is a metric on $V$ in the sense of [L6]: $d(u,w)=0$ if and only if $c(u)=c(w)$, if and only if $u=w$; $d(u,w)=d(w,u)$ by $\lVert-x\rVert=\lVert x\rVert$; and $d(u,w)\le d(u,z)+d(z,w)$ by the triangle inequality applied to $(c(u)-c(z))+(c(z)-c(w))$. [L2, L4, L5, L6, algebra]

2.1 The coordinate image $c(T_+)=\{x\in\mathbb R^4:x_0>\lVert x_{\mathrm{vec}}\rVert_2\}$ is convex in the sense of [L7]: if $x,y\in c(T_+)$ and $t\in[0,1]$, then the first coordinate of $z:=(1-t)x+ty$ is $z_0=(1-t)x_0+ty_0>(1-t)\lVert x_{\mathrm{vec}}\rVert_2+t\lVert y_{\mathrm{vec}}\rVert_2\ge\lVert(1-t)x_{\mathrm{vec}}+ty_{\mathrm{vec}}\rVert_2=\lVert z_{\mathrm{vec}}\rVert_2$, where the strict inequality uses $x_0>\lVert x_{\mathrm{vec}}\rVert_2$, $y_0>\lVert y_{\mathrm{vec}}\rVert_2$ and $t,1-t\ge0$ and the second inequality is the triangle inequality with homogeneity from [L5]; hence $z\in c(T_+)$. The same computation with reversed inequalities shows that $c(T_-)=\{x:x_0<-\lVert x_{\mathrm{vec}}\rVert_2\}$ is convex. [step 1.1, L5, L7, algebra]

2.2 The coordinate vector of $e_0$ is $(1,0,0,0)$ and that of $-e_0$ is $(-1,0,0,0)$, by uniqueness of coordinates [L2]; hence $e_0\in T_+$ and $-e_0\in T_-$, so both sets are nonempty. If $v\in T_+\cap T_-$, then $v^0>\lvert v_{\mathrm{vec}}\rvert\ge0$ and $v^0<-\lvert v_{\mathrm{vec}}\rvert\le0$ simultaneously, which is impossible; hence $T_+$ and $T_-$ are disjoint and $T=T_+\sqcup T_-$. [step 1.1, L2, algebra]

2.3 Let $f(v):=v^0-\lvert v_{\mathrm{vec}}\rvert$. For all $u,w\in V$ one has $\lvert u^0-w^0\rvert\le d(u,w)$, because $(u^0-w^0)^2$ is one term of the sum $\lVert c(u)-c(w)\rVert_2^2$, and $\bigl\lvert\lvert u_{\mathrm{vec}}\rvert-\lvert w_{\mathrm{vec}}\rvert\bigr\rvert\le\lVert u_{\mathrm{vec}}-w_{\mathrm{vec}}\rVert_2\le d(u,w)$, the first inequality from $\lvert u_{\mathrm{vec}}\rvert\le\lVert u_{\mathrm{vec}}-w_{\mathrm{vec}}\rVert_2+\lvert w_{\mathrm{vec}}\rvert$ and its symmetric partner by [L5] and the second because the last three coordinate squares form a sub-sum; hence $\lvert f(u)-f(w)\rvert\le2d(u,w)$. If $f(v)>0$ and $d(u,v)<f(v)/2$, then $f(u)\ge f(v)-2d(u,v)>0$; therefore $T_+=\{v:f(v)>0\}$ is open in the metric topology of [L9], since the ball of radius $f(v)/2$ about each of its points lies in it, and the same argument with $g(v):=-v^0-\lvert v_{\mathrm{vec}}\rvert$ shows that $T_-=\{v:g(v)>0\}$ is open. [step 1.2, L5, L9, algebra]

3.1 By step 2.1 the sets $c(T_+)$ and $c(T_-)$ are convex subsets of $\mathbb R^4$, hence path-connected by [L8]. Let $p:[0,1]\to c(T_+)$ be a path in $c(T_+)$ and put $\gamma(t):=c^{-1}(p(t))$, a map into $T_+$ because $c$ is a bijection; then $d(\gamma(s),\gamma(t))=\lVert p(s)-p(t)\rVert_2$ for all $s,t$, so for every $\eta>0$ the $\delta>0$ supplied by continuity of $p$ at $t$ gives $d(\gamma(s),\gamma(t))<\eta$ whenever $\lvert s-t\rvert<\delta$: thus $\gamma$ is a path in the metric space $(V,d)$, and $T_+$ is path-connected. The same argument gives that $T_-$ is path-connected. By [L13] the path-connected sets $T_+$ and $T_-$ are connected subsets of $T$, and by step 2.2 they are nonempty with $T=T_+\sqcup T_-$. [step 2.1, step 2.2, L5, L8, L13, algebra]

3.2 Suppose $C\subseteq T$ is a connected subset meeting both $T_+$ and $T_-$. The sets $C\cap T_+$ and $C\cap T_-$ are open in the subspace topology on $C$ by step 2.3 and [L11], they are nonempty because $C$ meets both, they are disjoint, and their union is $C$ because $C\subseteq T=T_+\sqcup T_-$ by step 1.1; thus $(C\cap T_+,C\cap T_-)$ is a separation of $C$ in the sense of [L10], contradicting connectedness of $C$. Hence every connected subset of $T$ is contained in $T_+$ or in $T_-$. [step 1.1, step 2.3, L10, L11, algebra]

3.3 The identity $\operatorname{cl}(T_+)=\{v:f(v)\ge0\}$ holds for the closure in the metric topology of [L9]: if $f(v)<0$, then every $u$ with $d(u,v)<-f(v)/2$ has $f(u)<0$ by the Lipschitz bound of step 2.3, so a ball about $v$ misses $T_+=\{f>0\}$ and $v\notin\operatorname{cl}(T_+)$; conversely, if $f(v)\ge0$, then for every real $t>0$ the point $v+te_0$ has coordinates $(v^0+t,v^1,v^2,v^3)$ by [L2], hence $f(v+te_0)=f(v)+t>0$, so $v+te_0\in T_+$ and $d(v+te_0,v)=t\to0$. The same argument with $g(v)=-v^0-\lvert v_{\mathrm{vec}}\rvert$ gives $\operatorname{cl}(T_-)=\{v:g(v)\ge0\}$; in coordinates these are the displayed sets $\{v:v^0\ge\lvert v_{\mathrm{vec}}\rvert\}$ and $\{v:v^0\le-\lvert v_{\mathrm{vec}}\rvert\}$. [step 2.3, L2, L9, algebra]

3.4 Let $\gamma:[0,1]\to T$ be a path with $\gamma(0)\in T_+$ and $\gamma(1)\in T_-$, and put $h(t):=(\gamma(t))^0$. Using the bound $\lvert u^0-w^0\rvert\le d(u,w)$ of step 2.3, for every $\eta>0$ the $\delta>0$ supplied by continuity of $\gamma$ at $t$ gives $\lvert h(s)-h(t)\rvert\le d(\gamma(s),\gamma(t))<\eta$ whenever $\lvert s-t\rvert<\delta$; hence $h$ is continuous on $[0,1]$ in the sense required by [L14], with $h(0)>0$ because $\gamma(0)\in T_+$ and $h(1)<0$ because $\gamma(1)\in T_-$. By [L14] there is $t\in[0,1]$ with $h(t)=0$; but $\gamma(t)\in T$ gives $(h(t))^2=(\gamma(t)^0)^2>\lvert\gamma(t)_{\mathrm{vec}}\rvert^2\ge0$ by step 1.1, so $h(t)\neq0$, a contradiction. Hence no path in $T$ joins $T_+$ to $T_-$. [step 1.1, step 2.3, L14, algebra]

4.1 By step 3.1 the sets $T_+$ and $T_-$ are connected, and by step 2.2 they are nonempty and disjoint with $T=T_+\sqcup T_-$. Let $x\in T_+$. By [L12] the component $C_T(x)$ is the largest connected subset of $T$ containing $x$; since $T_+$ is a connected subset of $T$ containing $x$, one has $T_+\subseteq C_T(x)$, while $C_T(x)$ is connected and contains $x\in T_+$, so step 3.2 gives $C_T(x)\subseteq T_+$; hence $C_T(x)=T_+$. The same argument with $x\in T_-$ gives $C_T(x)=T_-$. Therefore $T_+$ and $T_-$ are exactly the connected components of $T$, and since $T=T_+\sqcup T_-$ these are all of them. [step 2.2, step 3.1, step 3.2, L12]

4.2 If $v\in\operatorname{cl}(T_+)\cap\operatorname{cl}(T_-)$, then step 3.3 gives $v^0\ge\lvert v_{\mathrm{vec}}\rvert$ and $v^0\le-\lvert v_{\mathrm{vec}}\rvert$, hence $0\le2\lvert v_{\mathrm{vec}}\rvert\le0$, so $\lvert v_{\mathrm{vec}}\rvert=0$ and $v^0=0$; all coordinates of $v$ vanish, and uniqueness of coordinates [L2] gives $v=0$. Conversely $0$ lies in both displayed sets of step 3.3, hence in both closures. Therefore $\operatorname{cl}(T_+)\cap\operatorname{cl}(T_-)=\{0\}$. [step 3.3, L2, algebra]

4.3 The descriptions of step 3.3 also show that $\operatorname{cl}(T_+)$ and $\operatorname{cl}(T_-)$ are convex cones and that the nonzero causal vectors are exactly the nonzero points of their union. For the cone property, if $v,w\in\operatorname{cl}(T_+)$ and $\lambda\ge0$, then $(v+w)^0=v^0+w^0\ge\lvert v_{\mathrm{vec}}\rvert+\lvert w_{\mathrm{vec}}\rvert\ge\lvert v_{\mathrm{vec}}+w_{\mathrm{vec}}\rvert$ and $(\lambda v)^0=\lambda v^0\ge\lambda\lvert v_{\mathrm{vec}}\rvert=\lvert\lambda v_{\mathrm{vec}}\rvert$ by [L5], so $v+w,\lambda v\in\operatorname{cl}(T_+)$, and reversing the inequalities gives the same for $\operatorname{cl}(T_-)$. For the classification, every timelike vector lies in $T=T_+\cup T_-\subseteq\operatorname{cl}(T_+)\cup\operatorname{cl}(T_-)$ by step 1.1, and every null vector $v$ has $\lvert v^0\rvert=\lvert v_{\mathrm{vec}}\rvert$ by step 1.1, hence lies in $\operatorname{cl}(T_+)\cup\operatorname{cl}(T_-)$ by step 3.3; conversely a nonzero $v$ in that union satisfies $\lvert v^0\rvert\ge\lvert v_{\mathrm{vec}}\rvert$, hence $\eta(v,v)=-(v^0)^2+\lvert v_{\mathrm{vec}}\rvert^2\le0$ by step 1.1, and is therefore timelike or null, that is, causal, by [L3]. [step 1.1, step 3.3, L3, L5, algebra]

5.1 Let $(e'_0,e'_1,e'_2,e'_3)$ be another $\eta$-orthonormal ordered basis with coordinate map $c'$ and distance $d'(u,w):=\lVert c'(u)-c'(w)\rVert_2$; then $c'=Mc$ for the change-of-basis matrix $M$ between the two ordered bases, which is invertible because both are bases [L2]. For any real matrix $N$ put $K(N):=\bigl(\sum_a(\sum_b\lvert N_{ab}\rvert)^2\bigr)^{1/2}$; each component of $Nx$ satisfies $\lvert(Nx)_a\rvert\le(\max_b\lvert x_b\rvert)\sum_b\lvert N_{ab}\rvert\le\lVert x\rVert_2\sum_b\lvert N_{ab}\rvert$ by [L5], so $\lVert Nx\rVert_2\le K(N)\lVert x\rVert_2$, and applying this to $M$ and to $M^{-1}$ with $\kappa:=\max\bigl(K(M),K(M^{-1}),1\bigr)\ge1$ gives $\kappa^{-1}\lVert x\rVert_2\le\lVert Mx\rVert_2\le\kappa\lVert x\rVert_2$ for every $x$; hence $d'$ and $d$ determine the same open sets, the same closures and the same connected subsets, so the components of $T$ and the openness and closure claims of this lemma are intrinsic, independent of which $\eta$-orthonormal basis defines the coordinates. Since the argument of steps 1.1 through 4.3 used only that $(e'_0,e'_1,e'_2,e'_3)$ is $\eta$-orthonormal, it applies verbatim in the primed coordinates and shows that the primed coordinate sets $\{v:v'^0>\lvert v'_{\mathrm{vec}}\rvert\}$ and $\{v:v'^0<-\lvert v'_{\mathrm{vec}}\rvert\}$ are also exactly the two components of $T$; hence the primed pair coincides with the unordered pair $\{T_+,T_-\}$. By [L15] a time orientation is a choice of one of these two components, so the two displayed coordinate sets coincide with the chosen $C^+$ and its complement $C^-$ in some order, possibly the reverse of a previously fixed naming; in particular the description is basis-independent up to that interchange. [step 3.3, step 4.2, L2, L5, L15, algebra] ∎
