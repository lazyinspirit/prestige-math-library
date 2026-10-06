---
id: lem-cancellation-modification-can-be-supported-in-a-trajectory-neighbourhood
kind: lemma
title: "The cancellation modification is supported in a trajectory neighbourhood"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 4
deps: [prop-morse-cancellation-criterion-via-a-unique-connecting-orbit, def-morse-function-adapted-to-a-cobordism, lem-adapted-descending-field-near-a-compact-morse-band, thm-regular-interval-diffeomorphism, thm-fundamental-theorem-on-flows, def-countable-choice, thm-smooth-inverse-function-theorem-on-manifolds, lem-manifold-bump-for-a-compact-set-inside-an-open-set, thm-compactly-supported-time-dependent-vector-fields-have-global-evolution-on-a-compact-time-interval]
justified_by: []
aliases: []
proof_strategy: "direct"
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - title: "John Milnor, Lectures on the h-Cobordism Theorem (notes by L. Siebenmann and J. Sondow; scanned edition with text layer)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/surgery/hcobord.pdf"
      locator: "Theorem 5.4 with Hypothesis 5.5 and Theorem 5.6, §5, printed pp. 48-66 (the modification is supported in an arbitrary neighbourhood of the single trajectory)"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume $\mathrm{AC}_\omega$. In the situation of the Morse cancellation criterion let $T$ be the unique connecting trajectory and let $U$ be an open neighbourhood of its closure, including $p,q$, in the interior of the slab $K$. There are a smooth function $f'$ and a smooth field $X'$ on $K$, extending the unchanged data near its two faces, such that $f'$ has no critical point, $df'(X')<0$ everywhere, and $X'=X$ outside a compact subset of $U$. The resulting product parametrization follows the trajectories of $X'$; any trajectory segment wholly outside $U$ follows an original $X$ trajectory, with the same unnormalized flow. The replacement function agrees with $f$ near the faces, but need not agree with $f$ outside $U$. Consequently the pair can be cancelled relative to the incoming boundary without changing the vector field away from the chosen trajectory neighbourhood. Extension by the original data gives an adapted pair on $W$ with this pair of critical points removed.

## Facts & Assumptions

**Given:** The situation of the Morse cancellation criterion: adapted $f,X$ on a compact collared triad, a compact slab with exactly two critical points $p,q$ of indices $k,k+1$, the unique trajectory $T$ from $q$ to $p$, and an open neighbourhood $U$ of $\overline T\cup\{p,q\}$ in the interior of the slab.

[F1] [[prop-morse-cancellation-criterion-via-a-unique-connecting-orbit]] gives the hypotheses and product conclusion. The local support assertion is established below, not inferred from the product diffeomorphism alone.

[F2] [[def-morse-function-adapted-to-a-cobordism]] supplies the boundary collars and the local form $X=(2u,-2v)$ in Morse charts. [[lem-adapted-descending-field-near-a-compact-morse-band]] supplies a complete compactly supported ambient realization; a change supported in the interior preserves the original data near the faces and other critical points.

[F3] [[thm-fundamental-theorem-on-flows]] gives smooth dependence and uniqueness of integral curves. [[thm-regular-interval-diffeomorphism]] provides flow product coordinates on the intervening regular strips; it is not applied to the original critical slab.

[F4] [[def-countable-choice]]: $\mathrm{AC}_\omega$ is assumed through the collar and flow suppliers.

[F5] [[thm-smooth-inverse-function-theorem-on-manifolds]] gives smooth local inverses. [[lem-manifold-bump-for-a-compact-set-inside-an-open-set]] provides compactly supported cutoffs. [[thm-compactly-supported-time-dependent-vector-fields-have-global-evolution-on-a-compact-time-interval]] integrates a compactly supported smooth time-dependent velocity.

## Proof

**Proof technique:** direct.

1.1 We use the upward field $Y=-X$ and then reverse its sign at the end. Prepare a chart along the closed orbit as follows (Milnor, cancellation theorem, Assertion 6, printed pp. 55–58). In the endpoint Morse charts choose the orbit as the first axis, and between two regular intermediate levels extend the lower chart by normalized flow [F3]. A model upward field is $(v(s),-2z,2w)$, with $z\in\mathbb R^k$, $w\in\mathbb R^{n-k-1}$, $v>0$ on $(0,1)$, $v=2s$ near $0$, $v=-2(s-1)$ near $1$, and $v<0$ just outside $[0,1]$. Choose its positive middle portion so $\int_0^1v(s)\,ds=f(q)-f(p)$; its potential is $f(p)+\int_0^s v(r)\,dr-|z|^2+|w|^2$. The endpoint models thus match the given Morse data. The transition of the two propagated charts fixes the crossing point and carries one coordinate sphere transversely to the other. The local adjustment below makes those transitions coincide. [F1, F2, F3, given, construct]

2.1 Here is the local adjustment, including its intersection control (Milnor local isotopy theorem and its quantitative localization lemmas, printed pp. 58–66). For a germ $h:(\mathbb R^{a+b},0)\to(\mathbb R^{a+b},0)$ with $h(\mathbb R^a)$ transverse to $\mathbb R^b$, dilation $h_t(x)=h(tx)/t$ extends smoothly at $t=0$ to $Dh_0x$, by $h(tx)/t=\int_0^1Dh_{rtx}x\,dr$. Adjust the endpoint chart orientations so the full determinant and the $a$-block determinant are positive. Eliminate the off-diagonal blocks by block shears and join the two positive-determinant diagonal blocks to the identity (orthonormalize and use plane rotations, then contract the positive triangular factors). This gives a smooth path of invertible germs whose $a$-projection on $\mathbb R^a$ stays invertible. On a uniform small ball its distance from $\mathbb R^b$ is at least $c|x|$ for $x\in\mathbb R^a$, with $c>0$; its time velocity is bounded by $C|x|$. Localize that velocity with a cutoff, using the smooth inverse germs and [F5], to agree with the path near zero and vanish outside the chosen chart. Over a sufficiently short time interval the displacement is less than $c|x|/2$, so no new intersection with $\mathbb R^b$ appears in the cutoff annulus; inside the smaller ball the original germ path already has that property, and outside the support nothing moves. Subdivide the compact path into finitely many such intervals, shrinking the inner ball at each interval. The resulting compactly supported isotopy makes $h$ the identity near zero and preserves the single transverse crossing. The cases $a=0$ or $b=0$ use the same argument with the empty block omitted. [F5, step 1.1, construct, algebra]

3.1 Suspend this local isotopy over the regular strip: in its flow coordinates $(y,t)$ use $(H_{\chi(t)}(y),t)$, where $\chi$ is zero near the lower level and one near the upper level. Transport the strip field through this diffeomorphism and join to the unchanged endpoint fields. The level component remains positive; near the two strip ends the coordinates coincide with the prescribed charts. Thus the fields glue smoothly and remain gradient-like for $f$. A positive time rescaling, equal to one outside the chart, makes their trajectories agree with the model in step 1.1. All chart balls, cutoffs and the strip can be chosen in $U$. We have obtained a prepared field equal to $Y$ off a compact subset of $U$, with the mixed-sign normal form $(v(s),-2z,2w)$ on a neighbourhood of the closed orbit. [F2, F3, F5, step 1.1, step 2.1, construct]

4.1 Choose nested neighbourhoods $V'\Subset V\Subset U$ of the closed orbit so that an original prepared-field trajectory cannot leave $V$ and later reenter $V'$. Such a choice follows from compactness and the unique connecting orbit: otherwise choose departure-and-return segments with endpoints approaching the closed orbit and middle points outside $V$. A convergent subsequence of the middle points gives a point whose complete trajectory either reaches one slab face or joins the two critical points. Reaching a face is stable under small changes of the initial point, by smooth flow dependence and transversality, and its compact segment is separated from the closed orbit, contradicting the approaching endpoint. The remaining possibility would be a second connecting orbit outside $V$, also a contradiction. Every other limit is a critical point, because outside small critical charts the decrease of $f$ is bounded away from zero on the compact slab; the local linear Morse field then supplies the limiting critical point. This is Milnor's safe-neighbourhood argument, Assertion 1, printed pp. 50–51. [F2, F3, step 3.1, given]

5.1 In the normal-form chart replace $v(s)$ by a smooth $\widetilde v(s,|z|^2+|w|^2)$ which equals $v$ off a compact subset of $V'$ and is strictly negative everywhere on the axis. For example subtract a sufficiently large positive bump equal to one on the axis segment where $v\ge0$, supported in $V'$. The field $(\widetilde v,-2z,2w)$ has no zero: on the axis its first component is negative, and off the axis a transverse component is nonzero. Every trajectory in the bounded chart leaves $V$ in both time directions. In forward time, a nonzero $w$ grows exponentially; if $w=0$, $z$ decays and eventually the first component is uniformly negative on the compact chart, so $s$ exits. Backward time is the same argument with $z,w$ interchanged. Extend by the prepared field outside the support. By step 4.1, after leaving $V$ a trajectory cannot return to the modified region; thereafter the original Morse flow reaches the appropriate face. Thus every trajectory of the new upward field $Y'$ proceeds from the lower face to the upper face, with no trapped orbit. [F3, F5, step 4.1, construct]

6.1 Transversality to the faces and the inverse-function theorem make the entry and exit times smooth. Rescale the time on each complete face-to-face trajectory to $[0,1]$; uniqueness gives a product diffeomorphism $G:L_a\times[0,1]\to K$. Set $F(t,x)=f(G(x,t))$. It has $F(0,x)=a$, $F(1,x)=b$, and $\partial_tF>0$ near both ends, uniformly by compactness. Choose $\eta(t)$ equal to one near the ends and zero in the middle, with support so short that $A(x)=\int_0^1\eta(t)\partial_tF(t,x)\,dt<b-a$. Put $H(x)=(b-a-A(x))/\int_0^1(1-\eta(t))\,dt>0$ and $$F'(t,x)=a+\int_0^t\bigl(\eta(r)\partial_rF(r,x)+(1-\eta(r))H(x)\bigr)\,dr.$$ Its derivative is positive, and it equals $F$ near both ends, using the endpoint values and the integral $b-a$. Hence $f'=F'\circ G^{-1}$ is critical-point-free and agrees with $f$ near the faces. This constructs the new function; it does not assume that changing a field removes critical points of the old function. [F3, F5, step 5.1, construct, algebra]

7.1 Put $X'=-Y'$. Then $df'(X')<0$, $X'=X$ outside a compact subset of $U$, and the data agree near the slab faces. Extend by the original data on the rest of $W$; the old local Morse models at other critical points are preserved, and compactly supported ambient extension supplies completeness as in [F2]. Flow uniqueness identifies any segment wholly outside $U$ with the old unnormalized $X$ flow. A product time normalization may change its speed, and the function from step 6.1 may change outside $U$; neither equality is asserted. [F2, F3, F4, step 3.1, step 5.1, step 6.1] ∎

## Remarks

The distinction between field support and function support is essential. On $[-3,3]$ take $f(x)=(x^3-3x+18)/36$ and $X=-f'(x)\partial_x$. The maximum at $-1$ and minimum at $1$ have a unique connecting orbit. Near these critical points a smooth positive rescaling gives the required local gradient-like Morse models without changing the orbit. For $U=(-1.1,1.1)$ one has $f(-1.1)>f(1.1)$, while $f$ increases near both slab faces. Any critical-point-free replacement agreeing with $f$ outside $U$ would have positive derivative throughout and hence $f'(-1.1)<f'(1.1)$, a contradiction. The original cubic can therefore not be kept fixed off every prescribed trajectory neighbourhood.
