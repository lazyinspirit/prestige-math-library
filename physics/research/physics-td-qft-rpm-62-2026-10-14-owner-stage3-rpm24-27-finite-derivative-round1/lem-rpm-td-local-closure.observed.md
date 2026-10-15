---
id: lem-rpm-td-local-closure
kind: lemma
title: Admissible TD pole-dipole local closure
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 1
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
deps:
  - def-countable-choice
  - def-covariant-derivative-along-a-curve
  - def-gr-curvature-tensor-and-derived-tensors
  - def-gr-metric-selected-connection
  - def-gr-smooth-lorentzian-objects
  - def-gr-timelike-worldline-and-proper-time
  - lem-gr-observer-pairing-with-future-causal-vectors
  - lem-rpm-ssc-momentum-identity
  - thm-gr-curvature-algebraic-symmetries
  - thm-gr-nondegenerate-levi-civita-and-tensor-derivative
  - thm-picard-lindelof-local-existence-and-uniqueness
dependency_roles:
  def-countable-choice: mathematical-premise
  def-covariant-derivative-along-a-curve: mathematical-premise
  def-gr-curvature-tensor-and-derived-tensors: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-timelike-worldline-and-proper-time: mathematical-premise
  lem-gr-observer-pairing-with-future-causal-vectors: mathematical-premise
  lem-rpm-ssc-momentum-identity: mathematical-premise
  thm-gr-curvature-algebraic-symmetries: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  thm-picard-lindelof-local-existence-and-uniqueness: mathematical-premise
sources:
  references:
    - title: "L. Filipe Costa and José Natário, Center of mass, spin supplementary conditions, and the momentum of spinning particles, arXiv:1410.6443v2; published in Equations of Motion in Relativistic Gravity, Fundamental Theories of Physics 179 (Springer, 2015)"
      url: https://arxiv.org/html/1410.6443v2
      locator: Section 3, equations (14)–(16), for the TD supplementary condition and pole-dipole momentum–velocity relation. The admissible open domain, local vector field, constraint preservation and continuation limits are proved here.
    - title: Gerald Teschl, Ordinary Differential Equations and Dynamical Systems, American Mathematical Society, Graduate Studies in Mathematics 140 (2012)
      url: https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf
      locator: Complete author-hosted book, Chapter 2, Theorem 2.2, for local existence and uniqueness of a locally Lipschitz coordinate vector field.
verification: {}
---

## Statement

Assume Countable Choice and use a smooth time-oriented Lorentzian four-manifold $(M,g,N)$ of signature $(-,+,+,+)$ with its metric-compatible Levi–Civita connection. Use SI units: coordinates are metres, proper time is seconds, $c>0$ is in metres per second, $p$ is in kilogram metres per second, $S$ is in kilogram metres squared per second, and $R$ has inverse-square-metre components. Let $z:I\to M$ be a $C^2$ future timelike worldline parametrized by proper time, with $U=dz/d\tau$ and $g(U,U)=-c^2$. For $C^1$ tensor fields along this $C^2$ curve, use the chart-independent derivative defined in [[lem-rpm-ssc-momentum-identity]]: differentiate the components, add $+\Gamma^a{}_{bc}(z)U^b$ on each upper index, and add $-\Gamma^c{}_{ba}(z)U^b$ on each lower index. It obeys the product and contraction rules and $D_\tau g=0$, as proved there. Let $p$ be a $C^1$ future timelike vector field along $z$, let $S^{ab}=-S^{ba}$ be a $C^1$ bivector field, and suppose the displayed evolution equations hold:

$$D_\tau p^a=f^a:=-\frac12R^a{}_{bcd}U^bS^{cd},\qquad D_\tau S^{ab}=p^aU^b-p^bU^a.\tag{1}$$

Put $\mu:=\sqrt{-g(p,p)}>0$, $m:=-g(p,U)/c^2>0$, $C^a:=S^{ab}p_b$, and define the linear map

$$K^a{}_b:=\mu^2\delta^a_b-\frac12S^{ac}R_{cbde}S^{de}.$$

At every state where $K$ is invertible and $W:=K^{-1}p$ is future timelike, the TD condition $C=0$ and (1) imply

$$KU=mc^2p,\qquad U=\frac{cW}{\sqrt{-g(W,W)}}.\tag{2}$$

Conversely, on the open state region where $p$ and $W$ are future timelike and $K$ is invertible, the normalized formula for $U$ in (2), together with (1), defines a smooth local ODE. A solution initialized with $C=0$ preserves $C=0$. While it remains in that admissible region, $\mu$ and $S_{ab}S^{ab}/2$ are constant. If $S=0$, then $p=(\mu/c)U$, $D_\tau p=0$, and $D_\tau U=0$. These are local statements; no continuation past loss of invertibility of $K$ or timelikeness of $W$ is asserted. Equations (1) are hypotheses of this mathematical lemma, not a physical derivation of a stress-energy moment model.

## Facts & Assumptions

**Given:** The stated Lorentzian background, proper-time curve, future timelike $p$, antisymmetric $S$, constant $c>0$, curvature convention, and equations (1). For the converse, the initial state satisfies $C=0$, $K$ is invertible and $W=K^{-1}p$ is future timelike.

[A1] Countable Choice $\mathrm{AC}_\omega$ is inherited by the smooth-structure and connection constructions used by the GR suppliers. [[def-countable-choice]]

[A2] The proper-time curve and antisymmetric fields satisfy the neutral pole-dipole equations (1), and the TD constraint is $C^a=S^{ab}p_b=0$ at the initial state.

[F1] Proper-time parametrization gives $g(U,U)=-c^2$; the Levi–Civita connection is metric-compatible and its derivative along a curve obeys the covariant product rule. [[def-gr-timelike-worldline-and-proper-time]]; [[def-covariant-derivative-along-a-curve]]; [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]

[F2] The curvature convention is $R(X,Y)Z=\nabla_X\nabla_YZ-\nabla_Y\nabla_XZ-\nabla_{[X,Y]}Z$, with $R_{abcd}=g_{ae}R^e{}_{bcd}$; in particular $R_{abcd}=-R_{bacd}$. [[def-gr-curvature-tensor-and-derived-tensors]]; [[thm-gr-curvature-algebraic-symmetries]]

[F3] For any future unit timelike $n$ and future unit timelike $U/c$, $-g(n,U/c)>0$. [[lem-gr-observer-pairing-with-future-causal-vectors]]

[F4] If $S^{ab}n_b=0$ and $D_\tau S^{ab}=p^aU^b-p^bU^a$, then with $\gamma=-g(n,U)/c$ and $E_n=-c g(p,n)$,
$$c\gamma p^a=\frac{E_n}{c}U^a+S^{ab}D_\tau n_b.$$
[[lem-rpm-ssc-momentum-identity]]

[F5] A locally Lipschitz vector field on an open Euclidean domain has a unique local solution through each initial state, with uniqueness on common intervals. [[thm-picard-lindelof-local-existence-and-uniqueness]]

[F6] The background is a smooth Lorentzian manifold and its metric-selected connection is the smooth Levi–Civita connection. [[def-gr-smooth-lorentzian-objects]]; [[def-gr-metric-selected-connection]]

## Proof

**Proof technique:** direct.

1.1 Under [A2]'s TD condition $C=0$, take $n=p/\mu$. Then $n$ is a future unit observer, $S^{ab}n_b=0$, $\gamma=-g(p,U)/(\mu c)=mc/\mu$, and $E_n=-cg(p,p/\mu)=c\mu$. Also $D_\tau n=D_\tau p/\mu-p\,D_\tau\mu/\mu^2$; contracting with $S$ removes the second term because $S^{ab}p_b=0$. Substitution in [F4] and multiplication by $\mu$ give $mc^2p=\mu^2U+S f$. The definition of $f$ in (1) now gives exactly $KU=mc^2p$. Positivity of $m$ follows from [F3]. [given, A1, A2, F3, F4, algebra]

2.1 Since $K$ is invertible, step 1.1 gives $U=mc^2W$. The coefficient is positive, so $W$ is future timelike. Its normalization is $-c^2=g(U,U)=m^2c^4g(W,W)$, hence $m=1/(c\sqrt{-g(W,W)})$ and the second formula in (2) follows. Conversely, on $C=0$, contraction of $K^a{}_b$ with $p_a$ gives $p_aK^a{}_b=\mu^2p_b$ because $p_aS^{ac}=-C^c=0$. Multiplying by $W^b$ yields $g(p,W)=-1$, so the normalized formula has $m=-g(p,U)/c^2=1/(c\sqrt{-g(W,W)})$ and satisfies the first formula in (2). [given, A2, F1, step 1.1, algebra]

3.1 On the open region stated in the theorem, the inverse $K^{-1}$ and the positive square root $\sqrt{-g(W,W)}$ depend smoothly on the state coordinates. The smooth Lorentzian background, curvature and metric-selected connection [F2, F6] make the coordinate form of $z'=U$, (1) a smooth, hence locally Lipschitz, vector field. [F5] gives unique local solutions. For constraint preservation, set $\lambda:=c/\sqrt{-g(W,W)}$, so $KU=\lambda p$ throughout this open region. The product rule [F1] gives
$$D_\tau C^a=p^a g(p,U)+\mu^2U^a+S^{ab}f_b=p^a(g(p,U)+\lambda).$$
Moreover, $p_aK^a{}_bU^b=\mu^2g(p,U)-C^bf_b=\lambda g(p,p)=-\lambda\mu^2$, so $\mu^2(g(p,U)+\lambda)=C^bf_b$. Therefore
$$D_\tau C^a=\frac{p^a f_b}{\mu^2}C^b.$$
This is a homogeneous linear ODE for $C$ along the solution. Its unique solution with $C(\tau_0)=0$ is $C\equiv0$, proving preservation. [given, A2, F1, F2, F5, F6, step 2.1, algebra]

4.1 On the preserved constraint, step 1.1 gives $\mu^2U=mc^2p-Sf$. The curvature antisymmetry [F2] yields $g(U,f)=-\tfrac12R_{abcd}U^aU^bS^{cd}=0$. Contract the displayed relation with $f_a$: the left side is zero and $f_aS^{ab}f_b=0$ by antisymmetry of $S$, so $mc^2g(p,f)=0$. Since step 1.1 gives $m>0$ and $c>0$, $g(p,f)=0$, hence $D_\tau g(p,p)=2g(p,f)=0$ and $\mu$ is constant. Also
$$\frac12D_\tau(S_{ab}S^{ab})=S_{ab}(p^aU^b-p^bU^a)=2S_{ab}p^aU^b=0$$
by $C=0$ from step 3.1. [given, A2, F1, F2, step 1.1, step 3.1, algebra]

5.1 If $S=0$, then $f=0$, $K=\mu^2\operatorname{Id}$, and $W=p/\mu^2$ with $g(W,W)=-1/\mu^2$. The normalized formula (2) gives $U=cp/\mu$, equivalently $p=(\mu/c)U$. Equation (1) gives $D_\tau p=0$; since $\mu$ is constant by step 4.1, $D_\tau U=0$. [given, A2, F1, step 2.1, step 4.1, algebra] ∎

## Remarks

The matrix $K$ need not be invertible on every TD state, and $K^{-1}p$ need not remain timelike. The theorem supplies a local closure only on the explicitly stated admissible region; it proves neither global existence nor physical adequacy of a multipole truncation.
