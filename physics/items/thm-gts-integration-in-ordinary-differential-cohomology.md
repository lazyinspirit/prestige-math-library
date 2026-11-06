---
id: thm-gts-integration-in-ordinary-differential-cohomology
kind: theorem
title: Ordinary differential-cohomology integration with explicit target degrees
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
dependency_level: 7
proof_strategy: direct
axiom_strength: ZF + full AC
deps:
  - def-gts-cheegersimons-differential-character
  - thm-gts-exact-sequences-for-ordinary-differential-cohomology
  - def-gts-ordinary-differential-cohomology-orientation
  - def-gts-oriented-submersion-chain-transfer-data
  - def-gts-degree-zero-differential-cohomology
  - thm-de-rham-theorem
  - thm-stokes-theorem-for-smooth-singular-chains
  - def-axiom-of-choice
dependency_roles:
  def-gts-cheegersimons-differential-character: mathematical-premise
  thm-gts-exact-sequences-for-ordinary-differential-cohomology: mathematical-premise
  def-gts-ordinary-differential-cohomology-orientation: mathematical-premise
  def-gts-oriented-submersion-chain-transfer-data: mathematical-premise
  def-gts-degree-zero-differential-cohomology: mathematical-premise
  thm-de-rham-theorem: mathematical-premise
  thm-stokes-theorem-for-smooth-singular-chains: mathematical-premise
  def-axiom-of-choice: mathematical-premise
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: Ulrich Bunke, Differential Cohomology, arXiv:1208.3961v6
      url: https://arxiv.org/pdf/1208.3961v6
      locator: Section 3.6, Definition 3.128 and Theorem 3.137, PDF pp. 68–71; Problems 3.138–3.139 remain explicit source exercises.
    - title: M. J. Hopkins and I. M. Singer, Quadratic Functions in Geometry, Topology, and M-Theory
      url: https://arxiv.org/pdf/math/0211216v2
      locator: Section 3.4, differential Thom cocycle and integration, PDF pp. 28–30.
---

## Statement

Use the character convention of [[def-gts-cheegersimons-differential-character]] for positive degrees. Set $\widehat H^0(M;\mathbb Z)=H^0(M;\mathbb Z)=\mathbb Z(M)$, the locally constant integer-valued functions, with $I$ the identity and $R$ the same function as a closed integral $0$-form; set $\widehat H^j=0$ for $j<0$. Let $\pi:W\to M$ be a proper oriented smooth submersion with closed compact $n$-dimensional fibers, $n\ge0$, a chosen differential-cohomology orientation, and a chain-transfer datum as in [[def-gts-oriented-submersion-chain-transfer-data]]. Then integration is defined in these cases for every integer $k$:

- If $k>n$, set $\widehat\pi_!h(z)=(-1)^nh(T_{\pi,k-n-1}z)$ for each smooth integral $(k-n-1)$-cycle $z$ on $M$.
- If $k=n\ge1$, set $\widehat\pi_!h=\pi_!I(h)\in H^0(M;\mathbb Z)$, identified with $\widehat H^0$, whose value at $m$ is $\int_{W_m}R(h)$.
- If $k=n=0$, then $\pi$ is a proper local diffeomorphism. Its image $S=\pi(W)$ is open and closed in $M$, and $\pi^{-1}(S)\to S$ is a finite covering. For $f\in\mathbb Z(W)$ set $\widehat\pi_!f(m)=\sum_{x\in W_m}\epsilon_x f(x)$, where an empty fiber gives zero and $\epsilon_x\in\{\pm1\}$ is the chosen orientation sign of the zero-dimensional fiber at $x$.
- If $k<n$, set the pushforward to zero in the stipulated zero group $\widehat H^{k-n}=0$.

These maps are natural under the pullbacks in the transfer datum, compose for composable oriented submersions, and commute with $I$ and $R$ (where negative integral and form targets are also zero).

## Statement references

[[def-gts-cheegersimons-differential-character]]

[[def-gts-ordinary-differential-cohomology-orientation]]

## Facts & Assumptions

**Given:** Full AC, a proper oriented smooth submersion with closed compact fibers, its chosen differential Thom orientation, the specified degree-zero/negative-degree conventions, and the chain-transfer datum of [[def-gts-oriented-submersion-chain-transfer-data]].

[F1] [[def-gts-cheegersimons-differential-character]] gives $h(\partial c)=\int_cR(h)\pmod{\mathbb Z}$ for positive-degree characters.

[F2] [[thm-gts-exact-sequences-for-ordinary-differential-cohomology]] gives $[R(h)]_{\mathrm{dR}}=I(h)_{\mathbb R}$ and the two maps are natural.

[F3] [[def-gts-oriented-submersion-chain-transfer-data]] supplies the signed chain identity, fiber-integral evaluation identity, naturality, composition coherence, and equality of the induced cohomology map with the oriented integral Gysin map. These are assumptions, not a proved general construction.

[F4] [[thm-de-rham-theorem]] identifies real de Rham classes with real singular cohomology by integration. Compatibility with the transfer is obtained from [F3]'s evaluation identity, not from an additional Gysin assertion in that theorem.

[F5] [[def-gts-degree-zero-differential-cohomology]] fixes $\widehat H^0=H^0(M;\mathbb Z)=\mathbb Z(M)$ and the identity curvature and characteristic maps; the negative groups are set to zero in the Statement.

[F6] [[thm-stokes-theorem-for-smooth-singular-chains]] supplies the chain Stokes identity.

[A1] Full AC is the choice-function principle [[def-axiom-of-choice]]; it is the declared assumption used by the differential-character exact-sequence and de Rham suppliers.

## Proof

1.1 Suppose $k>n$ and put $j=k-n\ge1$. For a degree-$k$ character $h$ define $\widehat\pi_!h(z)=(-1)^nh(T_{\pi,j-1}z)$. The signed chain identity makes $Tz$ a $(k-1)$-cycle, and the formula is a homomorphism because $T$ and $h$ are homomorphisms. For a smooth integral $j$-chain $c$ on $M$, that identity gives $T(\partial c)=(-1)^n\partial(Tc)$. Hence
$$\widehat\pi_!h(\partial c)=(-1)^nh(T\partial c)=h(\partial Tc)=\int_{Tc}R(h)=\int_c\pi_!R(h)\pmod{\mathbb Z},$$
where the last equality is [F3]. For every $j$-cycle $c$, $Tc$ is a $k$-cycle, so this evaluation identity also proves integral periods of $\pi_!R(h)$. On local smooth $(j+1)$-simplices, Stokes and $\partial T=(-1)^nT\partial$ show that its exterior derivative integrates to zero, hence vanishes by shrinking simplices. It is therefore a permitted curvature. If $\widetilde h$ is a real lift of $h$, then $(-1)^n\widetilde h\circ T$ is a lift of the pushforward, and its characteristic cocycle is $\operatorname{Int}(R(h))\circ T-(\delta\widetilde h)\circ T$. The Gysin clause of [F3] identifies its class with $\pi_!I(h)$. [F1, F3, F6, given, algebra]

1.2 If $k=n\ge1$, then $\pi_!I(h)\in H^0(M;\mathbb Z)$ is locally constant integer-valued and represents the characteristic map by [F5]. Let $v=\operatorname{Int}(R(h))-\delta\widetilde h$ be its integral characteristic cocycle. For a point generator $[m]$, the transfer identity gives $\partial T_{\pi,0}[m]=0$, so $v(T_{\pi,0}[m])=\int_{T_{\pi,0}[m]}R(h)=\int_{W_m}R(h)$ by [F3]. The left side is exactly the degree-zero Gysin cocycle. Hence the fiber integral equals the same locally constant integer function pointwise, proving both compatibilities. [F1, F3, F5, given]

1.3 If $k=n=0$, the derivative of $\pi$ is an isomorphism at every point, so $\pi$ is a local diffeomorphism and its image $S$ is open. To see that $S$ is closed, let $m_j\in S$ converge to $m$ and choose $w_j$ over $m_j$; the set $K=\{m\}\cup\{m_j:j\ge1\}$ is compact, so properness makes $\pi^{-1}(K)$ compact, and a convergent subsequence gives a point over $m$. Each fiber is discrete and compact, hence finite. For $m\in S$, take disjoint local-diffeomorphism neighborhoods about its finitely many preimages. If no smaller neighborhood of $m$ has preimage contained in their union, a sequence of points outside that union over a sequence converging to $m$ has, by properness, a subsequence converging to a point of the fiber, contradicting that the neighborhoods cover that fiber. Shrinking to the common image neighborhood therefore gives an evenly covered set. Thus $\pi^{-1}(S)\to S$ is a finite covering, while fibers over $M\setminus S$ are empty. The sign $\epsilon_x$ is locally constant on each sheet, so the signed sum is locally constant on $S$ and extends by zero to the locally constant function on $M$ in the Statement. The degree-zero transfer normalization in [F3] gives exactly this sum as the integral Gysin map, and integration of $f$ over the oriented zero-dimensional fiber has the same value. Hence $I$ and $R$ compatibility holds, including for empty fibers. [F3, F5, given, algebra]

1.4 If $k<n$, the convention makes the target differential group zero; the ordinary Gysin target has negative degree and is zero, and fiber integration of a $k$-form over an $n$-dimensional fiber has negative form degree and is zero. Thus both compatibility identities hold. [F5, given, algebra]

2.1 For a transverse pullback square and $k>n$, naturality follows by substituting the naturality identity for $T$ into the defining evaluation. For $k=n\ge1$, it is naturality of the integral Gysin map; for $k=n=0$, a pullback covering square bijects the sheets over each lifted point and preserves the pulled-back orientation signs, so the signed sums commute with pullback. If $k<n$, both maps have zero target by step 1.4. [F3, F5, step 1.1, step 1.2, step 1.3, step 1.4]

3.1 Let $\pi:W\to M$ and $\kappa:M\to B$ have fiber dimensions $n$ and $m$. If $k>n+m$, both stages use step 1.1; composition of the transfers and $(-1)^{n+m}=(-1)^n(-1)^m$ gives the composite formula. If $k=n+m$ and $n,m>0$, the first push has positive degree $m$ and the second is the top-degree Gysin branch of step 1.2, so compatibility is composition of the transfer-induced and integral Gysin maps in [F3]. If $n=0<m$, the first stage is the degree-positive transfer along a finite covering and the second is top-degree Gysin; [F3] identifies their composite with the composite-submersion transfer. If $m=0<n$, the first stage is top-degree Gysin and the second is the signed finite sum of step 1.3; the Gysin and finite-cover composition clauses of [F3] give the composite map. If $n=m=0$, two signed finite sums compose by rearranging the finite sum over the composite fiber and multiplying the two orientation signs, which is the composite orientation sign. Finally, if $k<n+m$, then either the first push already has zero target, or it yields degree $k-n<m$ and the second push is zero; this agrees with the zero composite target in step 1.4. These cases exhaust all dimensions and input degrees. [F3, F5, step 1.1, step 1.2, step 1.3, step 1.4, step 2.1, algebra] ∎

## Remarks

Bunke's Theorem 3.137 gives a local construction but explicitly leaves compatibility, composition and uniqueness as Problems 3.138–3.139. The transfer data in [F3] makes the present proof conditional and identifies the unresolved supplier exactly; no unrestricted integration theorem is claimed ready.
