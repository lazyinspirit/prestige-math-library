---
id: lem-the-punctured-disk-is-path-connected-locally-path-connected-and-semilocally-simply-connected
kind: lemma
title: "The punctured disk is path-connected, locally path-connected and semilocally simply connected"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 0
deps:
  - def-standard-meridians-of-a-punctured-disk
  - lem-the-standard-flower-is-a-deformation-retract-with-free-meridian-basis
  - thm-convex-subsets-have-trivial-fundamental-group
  - def-convex-subset-of-euclidean-space
  - ex-convex-subsets-of-rn-are-path-connected
  - def-retraction-and-deformation-retract
  - def-path-connected
  - def-locally-connected
  - def-semilocally-simply-connected-space
  - def-subspace-topology-top
  - def-euclidean-inner-product
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - def-euclidean-spheres-and-closed-balls
  - def-norm-and-normed-space
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Juan Gonzalez-Meneses, Basic results on braid groups, section 1.6 (printed pp. 8-10) and section 4 (Garside structure, printed pp. 26-30)"
      url: "https://arxiv.org/pdf/1010.0321"
      locator: "Section 1.6, printed pp. 8-10"
    - title: "Allen Hatcher, Algebraic Topology, section 1.3 (covering spaces) and section 2.2 (cellular homology and its agreement with singular homology)"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
      locator: "Section 1.3, printed pp. 56-64"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Let $n\ge0$, let $D^2=\{z\in\mathbb C:|z|\le1\}$ with the Euclidean subspace
topology, let $Q_n\subseteq\operatorname{int}D^2$ be the base configuration, and
put $X=D^2\setminus Q_n$. Then $X$ is nonempty and

(a) path-connected, (b) locally path-connected, (c) semilocally simply
connected.

Explicitly, for every $x\in X$ there is an open neighbourhood $U$ of $x$ in $X$
that is convex as a subset of $\mathbb R^2$: if $|x|<1$ take
$U=X\cap B(x,r)$ with
$$0<r<\min\bigl(\{|x-q_i|:1\le i\le n\}\cup\{1-|x|\}\bigr),$$
an intersection of convex sets; if $|x|=1$ and $n\ge1$ take
$U=D^2\cap B(x,r)$ with $0<r<\min_{1\le i\le n}|x-q_i|$; if $n=0$ take
$U=X=D^2$. A nonempty convex subset of $\mathbb R^2$ is path-connected and
simply connected, so loops in $U$ are null-homotopic in $U$, hence in $X$
([[thm-convex-subsets-have-trivial-fundamental-group]]). No choice principle is
used.

## Facts & Assumptions

**Given:** $n\ge0$, the closed disk $D^2$, the base configuration $Q_n=(q_1,\dots,q_n)\subseteq\operatorname{int}D^2$, the punctured disk $X=D^2\setminus Q_n$ with its subspace topology ([[def-subspace-topology-top]]), a point $x\in X$, and the standard flower $W$ with its truncated tethers $t_i$ and circles $C_i$ ([[def-standard-meridians-of-a-punctured-disk]]).

[F1] $W$ is a deformation retract of $X$ fixing the basepoint $d$, with deformation retraction $(r,H)$: $H:\operatorname{id}_X\simeq_W i\circ r$ is continuous with $H(a,0)=a$ and $H(a,1)=r(a)$ for all $a\in X$ ([[lem-the-standard-flower-is-a-deformation-retract-with-free-meridian-basis]], [[def-retraction-and-deformation-retract]]).

[F2] $W=\{d\}\cup\bigcup_{i=1}^n(t_i\cup C_i)$, and each $t_i\cup C_i$ meets $\{d\}$ in the tether endpoint $d$; a point of $t_i$ is joined to $d$ along $t_i$, and a point of $C_i$ is joined to $d$ along $C_i$ to $p_i$ and then $t_i$ ([[def-standard-meridians-of-a-punctured-disk]]).

[F3] Paths can be reversed and concatenated: $x\sim y$ iff $y\sim x$, and $x\sim y$, $y\sim z$ imply $x\sim z$, with the reversed and concatenated paths continuous and taking values in the same subspace ([[def-path-connected]]).

[F4] A subset of $\mathbb R^m$ is convex when it contains every segment between two of its points; every convex subset is path-connected, and every Euclidean open ball $B(c,r)=\{y:\lVert y-c\rVert_2<r\}$ is convex ([[def-convex-subset-of-euclidean-space]], [[ex-convex-subsets-of-rn-are-path-connected]], [[def-euclidean-spheres-and-closed-balls]], [[def-euclidean-inner-product]]). By [[thm-cauchy-schwarz-and-the-euclidean-norm]](2), the Euclidean norm satisfies the norm axioms used below. The closed unit disk $D^2$ is convex: for $u,v\in D^2$ and $t\in[0,1]$, the triangle inequality and absolute homogeneity of the Euclidean norm give $\lVert(1-t)u+tv\rVert_2\le(1-t)\lVert u\rVert_2+t\lVert v\rVert_2\le1$ ([[def-norm-and-normed-space]]).

[F5] Every nonempty convex subset $C\subseteq\mathbb R^m$, $m\ge1$, is simply connected: for every basepoint $x_0\in C$ and every loop $\alpha$ at $x_0$ in $C$, the straight-line formula $H(s,t)=(1-t)\alpha(s)+tx_0$ is a path homotopy in $C$ from $\alpha$ to the constant loop ([[thm-convex-subsets-have-trivial-fundamental-group]]).

[F6] $X$ is semilocally simply connected at $x$ when some neighbourhood $U$ of $x$ has the basepoint-preserving inclusion $(U,x)\hookrightarrow(X,x)$ inducing the trivial map on fundamental groups, and locally path-connected at $x$ when every open neighbourhood of $x$ contains an open path-connected neighbourhood of $x$; here a subset of $X$ is open when it is $X\cap V$ for an open $V\subseteq\mathbb R^2$ ([[def-semilocally-simply-connected-space]], [[def-locally-connected]], [[def-subspace-topology-top]]).

## Proof

**Proof technique:** direct.

1.1 *Nonemptiness and paths to the flower.* The point $d=(0,1)$ lies in $X$, because $|q_i|<1$ for every $i$, so $X\ne\emptyset$. By [F1] the map $\gamma_a(t):=H(a,t)$ is a continuous path in $X$ from $a$ to $r(a)\in W$ for every $a\in X$. The flower $W$ is path-connected: a point of $W$ lies in some $t_i\cup C_i$ or equals $d$, and by [F2] it is joined to $d$ by a path inside $t_i\cup C_i\subseteq W$, the case $W=\{d\}$ (that is, $n=0$) being trivial. [F1, F2]

1.2 *Convex open neighbourhoods.* Fix $x\in X$. If $|x|<1$, the minimum in the statement is over the nonempty set $\{|x-q_i|\}\cup\{1-|x|\}$ and is positive, since $x\ne q_i$ and $|x|<1$; fix $0<r$ below it and put $U=X\cap B(x,r)$. Then $B(x,r)\subseteq\operatorname{int}D^2\subseteq D^2$ because $r<1-|x|$, and $q_i\notin B(x,r)$ for all $i$ because $r<|x-q_i|$; hence $U=B(x,r)$, an open ball. If $|x|=1$ and $n\ge1$, the finite minimum $\min_i|x-q_i|$ is positive because $x\notin Q_n$; fix $0<r$ below it and put $U=D^2\cap B(x,r)$. Then $q_i\notin B(x,r)$ for all $i$, so $U=X\cap B(x,r)\subseteq X$. If $n=0$, put $U=X=D^2$. In every case $x\in U\subseteq X$, and $U=X\cap V$ with $V$ open in $\mathbb R^2$ ($V=B(x,r)$, respectively $V=\mathbb R^2$ for $U=X$), so $U$ is open in $X$; and $U$ is convex, being either an open ball, the intersection $D^2\cap B(x,r)$ of two convex sets, or $D^2$. [F4, F6]

2.1 *$X$ is path-connected.* Let $a,b\in X$. Concatenate the path $\gamma_a$ from $a$ to $r(a)$, a path in $W$ from $r(a)$ to $d$, the reverse of a path in $W$ from $r(b)$ to $d$, and the reverse of $\gamma_b$; by [F3] the result is a path in $X$ from $a$ to $b$. This uses only the finitely many explicit paths of step 1.1 and no choice principle. [F3, step 1.1]

2.2 *Local path-connectedness and semilocal simple connectivity.* The set $U$ of step 1.2 is nonempty and convex, hence path-connected by [F4] and simply connected by [F5]; Given any open neighbourhood $O$ of $x$ in $X$, the subspace topology supplies $r_0>0$ with $X\cap B(x,r_0)\subseteq O$. Further restrict the radius in step 1.2 to be below $r_0$; when $n=0$ use $D^2\cap B(x,r_0/2)$ instead of the whole disk. This remains convex and open, and gives a path-connected neighbourhood contained in $O$. Thus these neighbourhoods form the required basis and $X$ is locally path-connected at $x$. Moreover every loop in $U$ is null-homotopic in $U$ by the explicit straight-line homotopy of [F5], so the map $\pi_1(U,x)\to\pi_1(X,x)$ induced by the inclusion is trivial; by [F6] the space $X$ is semilocally simply connected at $x$. Since $x\in X$ was arbitrary, (b) and (c) hold. No choice principle was used anywhere; all minima are over finite sets or over a finite set enlarged by one real number. [F4, F5, F6, step 1.2]

3.1 *Conclusion.* Step 1.1 gives $X\ne\emptyset$, step 2.1 gives (a), and step 2.2 gives (b) and (c); this is the assertion. [step 1.1, step 2.1, step 2.2] ∎
