---
id: lem-a-cancelling-disk-triad-has-an-exact-c2-boundary-scalar
kind: lemma
title: "A cancelling disk triad has an exact C² boundary scalar"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-cancellation-modification-can-be-supported-in-a-trajectory-neighbourhood, thm-fundamental-theorem-on-flows, thm-smooth-inverse-function-theorem-on-manifolds, lem-manifold-bump-for-a-compact-set-inside-an-open-set, def-countable-choice]
justified_by: []
aliases: []
proof_strategy: direct
sources:
  references:
    - title: "John Milnor, Lectures on the h-Cobordism Theorem"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/surgery/hcobord.pdf"
      locator: "Theorem 5.4 and its Assertions 1–5; local field cancellation is used on an auxiliary annular slab, while the interval-face and exact C² full-boundary scalar adapters are proved here"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $W$ be a smooth compact disk with corners whose boundary consists, in cyclic order, of an incoming interval $E_-$, a trajectory side $S_0$, an outgoing interval $E_+$ and a trajectory side $S_1$. Let $f_0$ be smooth near $W$, with $f_0=a$ on $E_-$, $f_0=b$ on $E_+$, $a<b$, and exactly two interior critical points, a minimum $p$ and an index-one saddle $q$, with $a<f_0(p)<f_0(q)<b$. Let $Y$ be a smooth upward gradient-like field for $f_0$, in its adapted Morse forms near $p,q$, tangent to the sides and transverse to the faces. Suppose there is exactly one connecting trajectory from $p$ to $q$. Let $c$ be $C^2$ on an open neighbourhood of the entire boundary of $W$, with $dc(Y)>0$ there, and suppose $|c-f_0|<(b-a)/3$ on the two faces. Then there is a $C^2$ function $v$ on $W$ with $dv$ nowhere zero and $v=c$ on an open collar of the entire boundary. The same conclusion holds after rounding corners inside that collar.

## Facts & Assumptions

**Given:** The disk triad, smooth $f_0,Y$, unique connecting trajectory, and $C^2$ boundary scalar $c$ of the Statement.

[F1] [[lem-cancellation-modification-can-be-supported-in-a-trajectory-neighbourhood]] supplies a smooth nonzero replacement field supported near the unique connecting trajectory, all of whose trajectories cross a two-face compact slab; a smooth scalar increases strictly along that field. Its scalar is fixed near the two faces only, and no other scalar support assertion is used.

[F2] Smooth flows have smooth dependence and uniqueness ([[thm-fundamental-theorem-on-flows]]); transverse hitting times and local smooth product inverses follow from [[thm-smooth-inverse-function-theorem-on-manifolds]].

[F3] [[lem-manifold-bump-for-a-compact-set-inside-an-open-set]] supplies cutoffs with prescribed compact support. The standing assumption is [[def-countable-choice]].

## Proof

**Proof technique:** direct.

1.1 Extend the two sides slightly beyond their endpoints and take narrow regular flow strips around them. The coordinate $s=f_0$ increases along $Y$, and its normalized flow makes each strip a product with $s\in[a,b]$; a transverse coordinate labels its trajectories. Glue an auxiliary rectangle $[0,1]\times[a,b]$ along its two vertical edges to the two trajectory sides of $W$, using these product coordinates. On the rectangle put $f_0=s$ and extend the field as a positive multiple of $\partial_s$: on narrow edge strips use exactly the transported original coefficient, and interpolate the positive coefficients across the rectangle with a cutoff. The glued smooth surface $K$ is an annulus, whose lower and upper faces are circles formed by the respective actual interval faces and the horizontal rectangle edges. The function and field agree on open seam strips, not just on their edges; after extending the face collars, $K$ is a compact two-circle-face slab with exactly $p,q$ as critical points and the same unique connecting trajectory. A rectangle trajectory has no critical limit, so it creates no additional connecting trajectory. The rectangle is an abstract auxiliary piece, not a subset of the original source disk. [given, F2, F3, construct]

2.1 Choose an open neighbourhood $U$ of the closed connecting orbit with closure in $\operatorname{int}(W)$. Apply [F1] on $K$, reversing its downward-field convention, to obtain a smooth nonzero $Y'$ equal to $Y$ off a compact subset of $U$ and a smooth scalar $g$ with $dg(Y')>0$. Both actual sides are still invariant: the field is unchanged on their open regular strips, and uniqueness prevents a trajectory from crossing a side. Consequently a trajectory starting in $W$ remains in $W$ until it meets one of the actual faces. The all-trajectories face-crossing conclusion on $K$ therefore implies face crossing on $W$ itself. Alternatively, the positive minimum of $dg(Y')$ on compact $W$ and the bounded range of $g$ bound the transit time; no trapped orbit is possible. [F1, F2, step 1.1, construct]

3.1 Parametrize $E_-$ by $y\in[0,1]$ with its endpoints on the two sides. Smooth dependence, transverse finite exit and [F2] make its transit time $\tau(y)$ smooth and positive. The normalized flow $G(t,y)=\Phi^{Y'}_{t\tau(y)}(G(0,y))$, for $(t,y)\in[0,1]^2$, is a smooth product diffeomorphism onto $W$: uniqueness gives injectivity and the face-crossing property gives surjectivity, while transversality and the flow inverse give its smooth inverse. Put $A(y)=c(G(0,y))$ and $B(y)=c(G(1,y))$. They are $C^2$ and $\Delta(y)=B(y)-A(y)>(b-a)/3$ by the two face error bounds, regardless of which outgoing point the modified trajectory reaches. Put $F=c\circ G$ wherever the boundary collar defines it. Its $t$ derivative is positive near both ends and on narrow full side strips because $Y'=Y$ there. Compactness gives uniform end neighbourhoods and full strips $y$ near $0,1$ on which these assertions hold. [given, F2, step 2.1, algebra]

4.1 Choose a smooth $\eta(t)\in[0,1]$, equal to one near $0,1$, supported in sufficiently short end neighbourhoods. The density $\eta\partial_tF$ is extended by zero over its middle gap; no undefined interior value of $F$ is used. Since the endpoint derivatives are bounded and $\min\Delta>0$, choose the support short enough that $E(y)=\int_0^1\eta(r)\partial_rF(r,y)\,dr<\Delta(y)$ for every $y$. Write $J=\int_0^1(1-\eta(r))\,dr>0$, $h(y)=(\Delta(y)-E(y))/J>0$, and $q_0=\eta\partial_tF+(1-\eta)h$. Then $q_0>0$, it equals $\partial_tF$ near both ends, and its integral along each fiber is $\Delta(y)$. Define $w_0(t,y)=A(y)+\int_0^t q_0(r,y)\,dr$. It equals $F$ near each end, using the common initial value $A$ and terminal value $B$. [F3, step 3.1, construct, algebra]

5.1 The regularity of this primitive is $C^2$, even though $\partial_tF$ is only $C^1$. On its end domains integration by parts gives $I(t,y)=\eta(t)F(t,y)-A(y)-\int_0^t\eta'(r)F(r,y)\,dr$. Here $\eta F$ and $\eta'F$ are extended by zero into the gap where their cutoffs vanish. They are jointly $C^2$; the displayed integral is jointly $C^2$, since its second $y$ derivatives integrate the continuous second derivatives of $F$, its mixed derivative uses $\eta'\partial_yF$, and its second $t$ derivative uses $\eta''F+\eta'\partial_tF$. Thus $I$, $E(y)=I(1,y)$, $h$, and $w_0=A+I+h\int_0^t(1-\eta(r))\,dr$ are $C^2$. No third derivative of $F$ has been assumed. [step 4.1, algebra]

6.1 Choose a smooth transverse cutoff $\lambda(y)\in[0,1]$, supported in the full side strips and equal to one on narrower strips. There set $w=(1-\lambda)w_0+\lambda F$, and elsewhere set $w=w_0$; the support condition makes this a jointly $C^2$ function. Both summands agree with $F$ near the ends, and on the narrower entire side strips $w=F$. Moreover $\partial_tw=(1-\lambda)q_0+\lambda\partial_tF>0$, because both densities are positive wherever used. Hence $v=w\circ G^{-1}$ is $C^2$, has $dv\ne0$, and agrees with $c$ on the union of a smaller pair of face collars and side collars, an open collar of the entire boundary. Restricting to a domain whose corners are rounded in this collar preserves all these conclusions. The choices of strips and cutoffs were finite; only the standing choice hypothesis in [F3] is used through [F1]. [F2, F3, step 3.1, step 4.1, step 5.1] ∎
