---
id: thm-gr-smooth-cauchy-temporal-splitting
kind: theorem
title: "Smooth Cauchy temporal splitting: a global temporal function with Cauchy levels and an orthogonal complete flow"
status: draft
origin: session
domain: mathematics
dependency_level: 29
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: constructive
deps: [lem-gr-strip-weak-steps, lem-gr-locally-finite-shell-sum, lem-gr-maximal-flow-escape, thm-gr-volume-time-function, lem-gr-causal-curve-conventions, lem-gr-temporal-functions-and-time-functions, thm-preimage-theorem-for-submanifolds-under-submersions, def-gr-spacelike-hypersurfaces-and-cauchy-sets, def-lorentz-orthogonality-and-orthogonal-complement, def-gr-inverse-metric-and-musical-isomorphisms, def-gr-smooth-lorentzian-objects, def-gr-causal-conditions-and-global-hyperbolicity, def-gr-causal-curves-and-reachability, thm-a-locally-finite-sum-of-smooth-functions-is-smooth, thm-unique-maximal-integral-curve-through-each-point, def-complete-vector-field, def-integral-curve-of-a-vector-field, prop-a-vector-field-is-complete-if-and-only-if-its-flow-is-global, def-local-and-global-flow, cor-zero-derivative-implies-constant, def-c-r-and-smooth-maps-between-smooth-manifolds, thm-chain-rule-for-total-derivatives, lem-timelike-cone-has-two-convex-components, def-causal-classification-of-lorentz-vectors, def-time-orientation-and-future-causal-sets, cor-intermediate-value-theorem-topological, def-continuity-real, def-countable-choice, def-dependent-choice]
dependency_roles:
  lem-gr-strip-weak-steps: mathematical-premise
  lem-gr-locally-finite-shell-sum: mathematical-premise
  lem-gr-maximal-flow-escape: mathematical-premise
  thm-gr-volume-time-function: mathematical-premise
  lem-gr-causal-curve-conventions: mathematical-premise
  lem-gr-temporal-functions-and-time-functions: mathematical-premise
  thm-preimage-theorem-for-submanifolds-under-submersions: mathematical-premise
  def-gr-spacelike-hypersurfaces-and-cauchy-sets: mathematical-premise
  def-lorentz-orthogonality-and-orthogonal-complement: mathematical-premise
  def-gr-inverse-metric-and-musical-isomorphisms: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-causal-conditions-and-global-hyperbolicity: mathematical-premise
  def-gr-causal-curves-and-reachability: mathematical-premise
  thm-a-locally-finite-sum-of-smooth-functions-is-smooth: mathematical-premise
  thm-unique-maximal-integral-curve-through-each-point: mathematical-premise
  def-complete-vector-field: mathematical-premise
  def-integral-curve-of-a-vector-field: mathematical-premise
  prop-a-vector-field-is-complete-if-and-only-if-its-flow-is-global: mathematical-premise
  def-local-and-global-flow: mathematical-premise
  cor-zero-derivative-implies-constant: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  lem-timelike-cone-has-two-convex-components: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-time-orientation-and-future-causal-sets: mathematical-premise
  cor-intermediate-value-theorem-topological: mathematical-premise
  def-continuity-real: mathematical-premise
  def-countable-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
sources:
  references:
    - title: "A. N. Bernal and M. Sanchez, Smooth globally hyperbolic splittings and temporal functions, arXiv:gr-qc/0308090 (2003): the existence of a smooth temporal function with Cauchy levels and its orthogonal flow, printed pp. 3-8; the companion paper arXiv:gr-qc/0401112 (2005), printed pp. 6-8"
      url: "https://arxiv.org/pdf/gr-qc/0308090"
    - title: "P. T. Chrusciel, Elements of causality theory, arXiv:1110.6706 (2011): volume and time functions and the smooth splitting of globally hyperbolic spacetimes, Theorem 2.11.1 and the discussion following it, printed pp. 57-60"
      url: "https://arxiv.org/pdf/1110.6706"
    - title: "E. Minguzzi, Lorentzian causality theory, Living Reviews in Relativity 22 (2019) 3: time and temporal functions, section 4.5 with Theorem 4.120 and its flow construction, printed pp. 142-148"
      url: "https://inspirehep.net/files/7a575d682fd15aaad8463a778fac1609"
verification:
  precheck: pending
---

## Statement

Assume the Axioms of Countable Choice and Dependent Choice
([[def-countable-choice]], [[def-dependent-choice]]). Let $(M,g,N)$ be a
globally hyperbolic time-oriented smooth Lorentzian four-manifold
([[def-gr-causal-conditions-and-global-hyperbolicity]] clause (c)), and let
$t$ be the volume time function of [[thm-gr-volume-time-function]]. Then
there exist a smooth function $T:M\to\mathbb R$ and, with $\nabla T$ the
gradient of [[def-gr-inverse-metric-and-musical-isomorphisms]], the
following hold.

**(a)** $T$ is a temporal function in the sense of
[[def-gr-causal-conditions-and-global-hyperbolicity]] clause (e): smooth,
$g(\nabla T,\nabla T)<0$ and $g(\nabla T,N)>0$ everywhere.

**(b)** Every level set $S_c:=T^{-1}(c)$, $c\in\mathbb R$, is a Cauchy
hypersurface ([[def-gr-spacelike-hypersurfaces-and-cauchy-sets]] clauses (a)
and (c)): it is a spacelike embedded hypersurface and every inextendible
causal curve meets it in exactly one parameter value. In particular $T$ is
surjective.

**(c)** Along every inextendible future-directed causal curve
$T\to+\infty$, and along every inextendible past-directed causal curve
$T\to-\infty$.

**(d)** The vector field $X:=\nabla T/g(\nabla T,\nabla T)$ is smooth,
future-directed timelike, satisfies $X(T)=1$, and is complete
([[def-complete-vector-field]]): every maximal integral curve of $X$ is
defined on all of $\mathbb R$, so by
[[prop-a-vector-field-is-complete-if-and-only-if-its-flow-is-global]] its
flow $\Phi:\mathbb R\times M\to M$ is a global smooth flow
([[def-local-and-global-flow]]).

**(e)** The map $\Psi:\mathbb R\times S_0\to M$, $\Psi(s,z):=\Phi(s,z)$, is
a diffeomorphism and $T(\Psi(s,z))=s$ for all $(s,z)$; equivalently $M$ is
foliated by the Cauchy hypersurfaces $S_c$, each flow line meeting each level
exactly once.

**(f)** Put $\beta:=-1/g(\nabla T,\nabla T)$, a smooth positive function, and
$h_T:=g+\beta\,dT\otimes dT$. Then $g=-\beta\,dT\otimes dT+h_T$;
$h_T(X,\cdot)=0$; and $h_T$ restricted to $\ker dT$ is a smooth Riemannian
metric, so the decomposition $T_pM=\mathbb RX_p\oplus\ker dT_p$ is
$g$-orthogonal with $g(X,X)=-\beta$. Consequently the pullback of $g$ by the
diffeomorphism $\Psi$ has no mixed terms,
$$\Psi^*g=-(\beta\circ\Psi)\,ds^2+h,\qquad h_{(s,z)}(v,w):=g_{\Phi(s,z)}\bigl((d\Phi_s)_zv,(d\Phi_s)_zw\bigr),$$
a sum of a negative definite one-dimensional form and the smooth family of
Riemannian metrics induced on the levels.

## Facts & Assumptions

**Given:** A globally hyperbolic $(M,g,N)$, its volume time $t$ with Cauchy levels $S_c^t=t^{-1}(c)$, and the cone algebra and curve conventions below.

[L1] Strip functions: for all reals $a<a'<c'<c$ there is a smooth $v:M\to[-1,1]$ with $v=-1$ on $\{t\le a\}$, $v=+1$ on $\{t\ge c\}$, $\nabla v$ past causal or zero everywhere, and $\nabla v$ past timelike on $\{a'\le t\le c'\}$ ([[lem-gr-strip-weak-steps]], which rests on the weak steps of [[lem-gr-locally-finite-shell-sum]]).

[L2] Volume time: $t$ is continuous and strictly increasing along causal relations; $t\to+\infty$ along every inextendible future-directed causal curve and $t\to-\infty$ along every inextendible past-directed one ([[thm-gr-volume-time-function]] clauses (a)-(c)).

[L3] Curve conventions: every future-directed causal curve is either inextendible or has a causal extension to an inextendible one, and a one-sided inextendible causal curve extends to an inextendible causal curve with the same endpoint of its parameter interval ([[lem-gr-causal-curve-conventions]], [[def-gr-causal-curves-and-reachability]]).

[L4] Temporal functions: a smooth $u$ with $g(\nabla u,\nabla u)<0$ and $g(\nabla u,N)>0$ satisfies $du(v)=g(\nabla u,v)>0$ for every nonzero future causal vector $v$, is a time function, and has achronal level sets ([[lem-gr-temporal-functions-and-time-functions]] clauses (a)-(c), [[def-gr-causal-conditions-and-global-hyperbolicity]] clauses (d)-(e)).

[L5] Cone algebra: in each tangent space the future timelike cone is open and convex, the future causal cone is its closure, finite sums of future causal or zero vectors are future causal or zero, and a finite sum with one future timelike summand is future timelike; the same holds for the past cones ([[lem-timelike-cone-has-two-convex-components]], [[def-causal-classification-of-lorentz-vectors]], [[def-time-orientation-and-future-causal-sets]]).

[L6] Level sets of submersions: if $u$ is smooth with $du\ne0$ everywhere then each $u^{-1}(c)$ is an embedded submanifold of codimension one ([[thm-preimage-theorem-for-submanifolds-under-submersions]], [[def-gr-spacelike-hypersurfaces-and-cauchy-sets]] clause (a)); and for a timelike vector $w$ the orthogonal complement $w^\perp=\{v:g(w,v)=0\}$ is a three-dimensional positive definite subspace ([[def-lorentz-orthogonality-and-orthogonal-complement]]).

[L7] Flow theory: maximal integral curves of a smooth vector field exist uniquely; a vector field is complete exactly when all its maximal integral curves are defined on $\mathbb R$, equivalently exactly when its flow is global, and a global flow is a smooth map $\Phi:\mathbb R\times M\to M$ with $\Phi(0,p)=p$, $\Phi(s,\Phi(r,p))=\Phi(s+r,p)$ and $s\mapsto\Phi(s,p)$ an integral curve ([[thm-unique-maximal-integral-curve-through-each-point]], [[def-complete-vector-field]], [[prop-a-vector-field-is-complete-if-and-only-if-its-flow-is-global]], [[def-local-and-global-flow]]).

[L8] Escape lemma: a maximal integral curve with a finite endpoint leaves every compact subset of $M$ near that endpoint ([[lem-gr-maximal-flow-escape]], which assumes $\mathrm{AC}_\omega$ and $\mathrm{DC}$). Calculus inputs: a differentiable function on an interval with identically vanishing derivative is constant, the chain rule holds, and a continuous function on a connected interval taking values tending to $-\infty$ and $+\infty$ at the ends attains every real value ([[cor-zero-derivative-implies-constant]], [[thm-chain-rule-for-total-derivatives]], [[cor-intermediate-value-theorem-topological]], [[def-continuity-real]]).

## Proof

**Proof technique:** constructive.

1.1 (Strip functions.) For every integer $j$ apply [L1] with the quadruple $a=j-2$, $a'=j-1$, $c'=j+1$, $c=j+2$, obtaining a smooth $\tau_j:M\to[-1,1]$ with $\tau_j=-1$ on $\{t\le j-2\}$, $\tau_j=+1$ on $\{t\ge j+2\}$ and $\nabla\tau_j$ past causal or zero everywhere and past timelike on the inner strip $\{j-1\le t\le j+1\}$. The countably many applications are made with $\mathrm{AC}_\omega$. [L1, choose, construct]

2.1 (The locally finite sum $T$.) Define $$T:=\tau_0+\sum_{j\ge1}\bigl(\tau_{-j}+\tau_j\bigr).$$ The series is locally finite: if $|t(x)|\le R$ at a point $x$ and $j>R+2$, then on a neighborhood of $x$ one has $t\le R<j-2$, so $\tau_j=-1$ and (because $t\ge-R>-j+2$) $\tau_{-j}=+1$ identically there, whence $\tau_{-j}+\tau_j=0$ on that neighborhood. By [[thm-a-locally-finite-sum-of-smooth-functions-is-smooth]] the sum $T$ is smooth, and $\nabla T=\nabla\tau_0+\sum_{j\ge1}(\nabla\tau_{-j}+\nabla\tau_j)$ with only finitely many nonzero terms near any point. Every term is past causal or zero, so every partial sum is past causal or zero and so is the limit [L5]; at a point with $t(x)\in[k-1,k+1]$ for some integer $k$ the summand $\tau_k$ has past timelike gradient and all others past causal or zero, so $\nabla T(x)$ is past timelike by [L5]. Since $\bigcup_{k\in\mathbb Z}[k-1,k+1]=\mathbb R$, the gradient $\nabla T$ is past timelike everywhere; in particular $g(\nabla T,\nabla T)<0$ and $g(\nabla T,N)>0$, so $T$ is a temporal function and (a) holds. [step 1.1, L5, construct]

3.1 (The order bounds.) For every integer $k\ge0$ one has $T\ge2k+1$ on $\{t\ge k+2\}$ and $T\le-2k-1$ on $\{t\le-k-2\}$. Indeed on $\{t\ge k+2\}$ we have $\tau_0=+1$, $\tau_{-j}=+1$ for every $j\ge1$ (since $t\ge k+2\ge2\ge -j+2$), and $\tau_j=+1$ for $1\le j\le k$ (since $t\ge k+2\ge j+2$), while $\tau_j\ge-1$ always; hence $T\ge1+2k$. The past bound is the same computation with the signs reversed. [step 2.1]

3.2 (The gradient field.) Define $X:=\nabla T/g(\nabla T,\nabla T)$, smooth because the denominator is a nowhere-vanishing smooth function, and future-directed timelike because it is a negative multiple of the past-directed timelike $\nabla T$ [L5]. Moreover $X(T)=dT(X)=g(\nabla T,X)=g(\nabla T,\nabla T)/g(\nabla T,\nabla T)=1$. [step 2.1, L5]

4.1 (Divergence along causal curves.) Let $\gamma:I\to M$ be an inextendible future-directed causal curve. By [L2], $t(\gamma(s))\to+\infty$ as $s\to\sup I$; given an integer $k\ge0$, for all sufficiently large $s$ one has $t(\gamma(s))\ge k+2$, hence $T(\gamma(s))\ge2k+1$ by step 3.1. As $k$ is arbitrary, $T(\gamma(s))\to+\infty$; the past-directed case is dual. This is (c). [step 3.1, L2]

5.1 (Levels are Cauchy hypersurfaces.) By [L4] and step 2.1, $T$ is a time function: $T(\gamma(a))<T(\gamma(b))$ for every future causal curve not constant on $[a,b]$. Let $c\in\mathbb R$. Every inextendible causal curve meets $S_c:=T^{-1}(c)$ in at least one parameter value: for a future-directed curve, $s\mapsto T(\gamma(s))$ is continuous with limits $-\infty$ at the past end (dual of step 4.1) and $+\infty$ at the future end (step 4.1), so [L8] gives a parameter with value $c$; the past-directed case is dual. It meets $S_c$ at most once, because two distinct parameter values would give two causally related distinct points with equal $T$-value, contradicting strict monotonicity. Hence $S_c$ is a Cauchy set; in particular $T$ is surjective. Since $dT\ne0$ everywhere (the gradient is timelike), $S_c$ is an embedded hypersurface by [L6], and its tangent space at $p$ is $\ker dT_p=(\nabla T_p)^\perp$, which is positive definite because $\nabla T_p$ is timelike [L6]. Hence $S_c$ is a spacelike embedded hypersurface and a Cauchy set, that is, a Cauchy hypersurface; this is (b). [step 2.1, step 4.1, L4, L6, L8]

5.2 (Completeness of $X$.) Let $\gamma:(\alpha,\beta)\to M$ be a maximal integral curve of $X$ with $\gamma(0)=z$. By the chain rule, $\frac{d}{ds}T(\gamma(s))=dT(X)(\gamma(s))=1$, so by [L8] $T(\gamma(s))=T(z)+s$ for all $s\in(\alpha,\beta)$. Suppose $\beta<+\infty$. Since $\gamma$ is a smooth future-directed causal curve, the escape lemma [L8] applied to its maximal integral curve says that for every compact set $K$ the curve is eventually outside $K$; hence $\gamma$ admits no causal extension beyond $\beta$ (an extension would make $\gamma(s)$ converge to a point of $M$, so $\gamma$ would remain near that point inside a compact neighborhood), that is, $\gamma$ is one-sided future-inextendible. By [L3] it extends to an inextendible future-directed causal curve with the same future endpoint $\beta$ of its parameter interval, along which $t\to+\infty$ and hence $T\to+\infty$ by step 4.1; in particular $T(\gamma(s))\to+\infty$ as $s\to\beta$. But $T(\gamma(s))=T(z)+s\to T(z)+\beta<+\infty$, a contradiction. Hence $\beta=+\infty$, and dually $\alpha=-\infty$. Therefore every maximal integral curve of $X$ is defined on all of $\mathbb R$, so $X$ is complete [L7]; by [L7] its flow is global, giving the smooth map $\Phi:\mathbb R\times M\to M$ of (d). [step 3.2, step 4.1, L3, L5, L7, L8]

6.1 (The flow diffeomorphism.) Define $\Psi:\mathbb R\times S_0\to M$ by $\Psi(s,z):=\Phi(s,z)$. For $z\in S_0$ the curve $s\mapsto\Phi(s,z)$ is an integral curve of $X$ with $\Phi(0,z)=z$, so $T(\Phi(s,z))=T(z)+s=s$ by step 5.2; hence $\Psi$ takes values in $M$ with $T\circ\Psi(s,z)=s$. It is surjective: given $p\in M$, the point $z:=\Phi(-T(p),p)$ satisfies $T(z)=T(p)-T(p)=0$, so $z\in S_0$, and the composition law of the global flow gives $\Psi(T(p),z)=\Phi(T(p),\Phi(-T(p),p))=\Phi(0,p)=p$. It is injective: if $\Phi(s,z)=\Phi(s',z')$, applying $T$ gives $s=s'$, and then $z=\Phi(-s,\Phi(s,z))=\Phi(0,z')=z'$ by the inverse-time law. The inverse $p\mapsto(-T(p),\Phi(-T(p),p))$ is smooth because $T$ and $\Phi$ are smooth. Hence $\Psi$ is a diffeomorphism, which is (e). [step 5.2, L7]

7.1 (The orthogonal product.) Put $\beta:=-1/g(\nabla T,\nabla T)$, a smooth positive function. Since $g(\nabla T,\nabla T)<0$ everywhere, $\beta>0$; and $X=\nabla T/g(\nabla T,\nabla T)=-\beta\nabla T$, so $g(X,\cdot)=-\beta\,g(\nabla T,\cdot)=-\beta\,dT$. Consequently $g(X,X)=-\beta$ and $g(X,v)=0$ for every $v\in\ker dT$. Define the smooth symmetric tensor field $h_T:=g+\beta\,dT\otimes dT$. Then $h_T(X,\cdot)=g(X,\cdot)+\beta\,dT=-\beta\,dT+\beta\,dT=0$, while for $v,w\in\ker dT$ one has $h_T(v,w)=g(v,w)$; since $\ker dT=(\nabla T)^\perp$ is positive definite by [L6], $h_T$ restricts to a Riemannian metric on $\ker dT$. This proves the identity $g=-\beta\,dT\otimes dT+h_T$ and the orthogonal decomposition of (f). Finally, differentiating $\Psi$ and using $d\Psi(\partial_s)=X$, $d\Psi(\partial_{z}v)=(d\Phi_s)_zv$ with $(d\Phi_s)_zv\in\ker dT$ by step 6.1, one obtains $\Psi^*g(\partial_s,\partial_s)=g(X,X)=-\beta\circ\Psi$, $\Psi^*g(\partial_s,\partial_zv)=g(X,(d\Phi_s)_zv)=0$, and $\Psi^*g(\partial_zv,\partial_zw)=h_{(s,z)}(v,w)$; the last expression is positive definite because $(d\Phi_s)_z$ is a linear isomorphism onto $\ker dT_{\Phi(s,z)}$. This is (f), and it completes the proof. [step 3.2, step 6.1, L5, L6, L7, discharge-construct] ∎

## Remarks

- **Scope of the choice assumptions.** The construction uses $\mathrm{AC}_\omega$ to select the countably many strip functions and their data, and $\mathrm{DC}$ enters through the escape lemma's compactness-to-sequences step and the limit curve conventions; no stronger form of choice is used.
- **Two time functions.** The continuous volume time $t$ of [[thm-gr-volume-time-function]] is the scaffold on which the smooth $T$ is built; $t$ itself is not smooth in general, and no smoothness of $t$ is claimed or used.
- **Use.** The splitting supplies the smooth Cauchy foliation and the complete orthogonal flow used by the GR14 symmetric-hyperbolic reduction and by the maximal globally hyperbolic development arguments of GR15.
