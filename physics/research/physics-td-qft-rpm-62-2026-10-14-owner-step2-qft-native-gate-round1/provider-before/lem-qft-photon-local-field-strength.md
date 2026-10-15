---
id: lem-qft-photon-local-field-strength
kind: lemma
title: Local covariant physical field-strength observables
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 5
deps:
  - def-countable-choice
  - lem-qft-photon-smeared-potential
  - lem-qft-photon-covariance-spectrum
  - lem-qft-scalar-causal-commutator
dependency_roles:
  def-countable-choice: mathematical-premise
  lem-qft-photon-smeared-potential: mathematical-premise
  lem-qft-photon-covariance-spectrum: mathematical-premise
  lem-qft-scalar-causal-commutator: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: David Tong, Quantum Field Theory, Chapter 6, §§6.2.1–6.4
      url: https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S6.html
      locator: Complete author-hosted HTML chapter 6; transverse photon field, field strengths, Coulomb gauge and locality.
    - title: Mark Srednicki, Quantum Field Theory, author-hosted 2006 book draft, §§54–58
      url: https://www.physics.ucsb.edu/~mark/ms-qft-DRAFT.pdf
      locator: Complete 616-page book draft; electromagnetic field strength, transverse modes and gauge-invariant observables.
---

## Statement

Assume Countable Choice. Work in the fixed length coordinates $x=(x^0,\mathbf x)\in\mathbb R^4$ with $\eta=\operatorname{diag}(-1,1,1,1)$ and $\eta(v,w)=-v^0w^0+\mathbf v\cdot\mathbf w$; write $\partial_a:=\partial/\partial x^a$. For subsets $S,T\subseteq\mathbb R^4$, say they are **spacelike separated** when $\eta(x-y,x-y)=|\mathbf x-\mathbf y|^2-(x^0-y^0)^2>0$ for every $x\in S$ and $y\in T$. Let $A_0=0$ and let $A_i$ be the transverse potential operator-valued distribution of [[lem-qft-photon-smeared-potential]]. Set
$$F_{ab}=\partial_aA_b-\partial_bA_a,\qquad E_i=-\partial_0A_i,\qquad B_i=\epsilon_{irs}\partial_rA_s,$$
where $\epsilon_{irs}$ is the totally antisymmetric symbol with $\epsilon_{123}=1$. In the commutator formulas below, $\Delta=\sum_{r=1}^3\partial_r^2$ is the spatial Laplacian acting on $x-y$.
For a real antisymmetric test tensor $h=(h^{ab})$ with $h^{ab}\in C_c^\infty(\mathbb R^4;\mathbb R)$ and $h^{ab}=-h^{ba}$, define
$$F(h)=\frac12\int_{\mathbb R^4}F_{ab}(x)h^{ab}(x)\,d^4x =-A_b(\partial_a h^{ab}).$$
The effective test is conserved, $\partial_b\partial_a h^{ab}=0$, and $F(h)$ is unchanged by $A_b\mapsto A_b+\partial_b\lambda$ for smooth $\lambda$. Its one-particle coefficient $g_h$ is the vector $g_j$ of [[lem-qft-photon-smeared-potential]] for $j_i=-\partial_a h^{ai}$, so $F(h)=a(g_h)+a^\dagger(g_h)$ on $\mathcal D_{\rm fin}$.

Let $C_0=-i\Delta_0$, where $\Delta_0$ is the massless scalar causal commutator of [[lem-qft-scalar-causal-commutator]]. As distributions in $x-y$,
$$[E_i(x),E_j(y)]=[B_i(x),B_j(y)] =(-\delta_{ij}\Delta+\partial_i\partial_j)C_0(x-y),$$
$$[E_i(x),B_j(y)]=\epsilon_{jri}\partial_0\partial_rC_0(x-y).$$
Every right-hand side has support in the closed causal cone. Hence compactly supported tests whose supports are spacelike separated in the stated Minkowski sense give commuting field-strength operators on $\mathcal D_{\rm fin}$. The quotient representation of [[lem-qft-photon-covariance-spectrum]] makes these smeared field strengths Lorentz covariant: their on-shell coefficient depends on a polarization class only through $p_a\epsilon_b-p_b\epsilon_a$. These conclusions concern gauge-invariant free observables and do not assert locality of the Coulomb potential.

## Facts & Assumptions

**Given:** Countable Choice; the transverse smeared potential; its Lorentz quotient action; and the massless scalar commutator and causal-support statement.

[A1] Assume Countable Choice. [[def-countable-choice]]

[F1] For a real compact vector test $j$, the transverse potential has coefficient $g_j$ and equal-time commutator $[A_i,E_j]=-iP_{T,ij}\delta^3$. [[lem-qft-photon-smeared-potential]]

[F2] The Lorentz action on the physical quotient is induced by $[\epsilon(p)]\mapsto[\Lambda\epsilon(\Lambda^{-1}p)]$. [[lem-qft-photon-covariance-spectrum]]

[F3] The massless scalar distribution is $\Delta_0(t,\mathbf x)=\int d^3\mathbf k\,(2\pi)^{-3}\sin(|\mathbf k|t)|\mathbf k|^{-1}e^{i\mathbf k\cdot\mathbf x}$ and is supported in the closed causal cone. [[lem-qft-scalar-causal-commutator]]

## Proof

**Given:** [A1], [F1]–[F3], the real compactly supported antisymmetric test $h$, and commuting partial derivatives.

1.1 Antisymmetry gives
$$\frac12\int(\partial_aA_b-\partial_bA_a)h^{ab}\,d^4x =\int\partial_aA_b\,h^{ab}\,d^4x =-\int A_b\,\partial_a h^{ab}\,d^4x,$$
where integration by parts has no boundary term because $h$ is compactly supported. The current $j^b=-\partial_a h^{ab}$ obeys $\partial_bj^b=-\partial_b\partial_a h^{ab}=0$, since exchanging $a,b$ changes the sign of $h$. Adding $\partial_b\lambda$ to $A_b$ changes the last integral by $\int\lambda\,\partial_b\partial_a h^{ab}=0$. The spatial components of $j$ are compact smooth, so [F1] supplies the vector $g_h=g_j$ and the stated finite-particle operator. [A1, F1, given, algebra]

2.1 A null-cone polarization representative $\epsilon_b$ contributes to a field-strength coefficient through $p_a\epsilon_b-p_b\epsilon_a$. Replacing $\epsilon$ by $\epsilon+c p$ leaves this expression unchanged because $p_ap_b-p_bp_a=0$. Under a Lorentz transformation both $p$ and $\epsilon$ transform linearly, so their antisymmetric product transforms as a two-form. The unitary quotient action [F2] therefore intertwines the smeared tensor test with its Lorentz pullback, proving covariance without choosing a global polarization frame. [F2, step 1.1, given]

2.2 The mode formula in [F1] and the CCR give, after changing $\mathbf k$ to $-\mathbf k$ in the negative-frequency term,
$$[A_i(x),A_j(y)]=\left(\delta_{ij}-\frac{k_i k_j}{|\mathbf k|^2}\right)C_0(x-y)$$
as the spatial Fourier multiplier distribution. Differentiating, using $\partial_{x^0}\partial_{y^0}=-\partial_0^2$, gives $[E_i,E_j]=-\partial_0^2P_{T,ij}C_0$. The massless equation $\partial_0^2C_0=\Delta C_0$ follows by differentiating the sine-over-$|\mathbf k|$ integral in [F3]. The multiplier of $-\Delta P_{T,ij}$ is $\delta_{ij}|\mathbf k|^2-k_ik_j$, which is exactly the multiplier of $-\delta_{ij}\Delta+\partial_i\partial_j$; this proves the stated electric commutator. For magnetic fields, each curl kills the longitudinal multiplier $k_sk_u/|\mathbf k|^2$, and $\epsilon_{irs}\epsilon_{jts}k_rk_t=\delta_{ij}|\mathbf k|^2-k_ik_j$ gives the same expression. For the mixed commutator, translation invariance gives $\partial_{y^r}=-\partial_{x^r}$, so
$$[E_i(x),B_j(y)]=\epsilon_{jrs}\partial_0\partial_rP_{T,is}C_0.$$
The longitudinal term is zero because $\epsilon_{jrs}k_rk_s=0$, and relabeling the remaining indices gives $\epsilon_{jri}\partial_0\partial_rC_0$. [F1, F3, step 1.1, given, algebra]

3.1 If a test function is supported in the complement of $\operatorname{supp}C_0$, each of its derivatives has support contained in that of the test function, and the definition $\langle\partial_a C_0,f\rangle=-\langle C_0,\partial_af\rangle$ shows the derivative distribution also vanishes there. Thus every derivative in step 2.2 remains supported in the closed causal cone from [F3]. For spacelike-separated compact test supports, every point in their difference set lies outside that cone, so pairing each commutator with their tensor product gives zero. The smeared field strengths commute on $\mathcal D_{\rm fin}$. [F3, step 2.2, given] ∎
