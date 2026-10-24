---
id: lem-boundary-orientation-of-compactified-one-dimensional-morse-moduli
kind: lemma
title: "Boundary orientation of the compactified one-dimensional Morse moduli space"
status: published
origin: pipeline
deps: [def-axiom-of-choice, thm-choice-implies-dependent-implies-countable-choice, thm-index-two-compactification-is-a-compact-one-manifold-with-boundary, lem-gluing-broken-index-two-trajectories-gives-collar-ends, lem-unstable-orientations-induce-trajectory-moduli-orientations, def-product-orientation, def-induced-boundary-orientation, prop-boundary-orientation-is-independent-of-the-outward-vector-field, def-morse-smale-pair, def-downward-gradient-like-vector-field, thm-local-stable-unstable-manifold-theorem-for-a-morse-critical-point, thm-euclidean-inverse-function-theorem, thm-euclidean-implicit-function-theorem, thm-fundamental-theorem-on-flows]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - title: "Alberto Abbondandolo and Pietro Majer, Lectures on the Morse Complex for Infinite-Dimensional Manifolds, complete PDF"
      url: "https://people.dm.unipi.it/abbondandolo/preprints/montreal.pdf"
      locator: "Sec. 2.8, printed pp. 71-73 (orientation of $T_p\\gamma_i(D^{k-1})$ compared with the flow and the stable/unstable splitting)"
    - title: "Udhav Fowdar, A Functional Analytic Approach to Morse Homology (UCL 4th-year project, 2016, supervised by C. Wendl), complete PDF"
      url: "https://www.mathematik.hu-berlin.de/~wendl/pub/Fowdar.pdf"
      locator: "Theorem 7.5 and Sec. 8, printed pp. 64-72 (orientation compatible with gluing; opposite signs at the two ends)"
    - title: "Michele Audin and Mihai Damian, Morse Theory and Floer Homology, Part I Ch. 3, complete author PDF"
      url: "https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf"
      locator: "Ch. 3 Sec. 3.3-3.4, printed pp. 70-78 (orientation convention; boundary-orientation verification)"
    - title: "Liviu I. Nicolaescu, An Invitation to Morse Theory, 2nd ed., complete PDF"
      url: "https://www3.nd.edu/~lnicolae/Morse2nd.pdf"
      locator: "Remark 2.5.3(a), printed pp. 65-66 (comparison sign $\\epsilon$ against the flow orientation)"
dependency_level: 6
---

## Statement

Assume the Axiom of Choice. Let $(f,X)$ be Morse--Smale on a closed manifold, with $X$ downward gradient-like in the normalized Morse-coordinate sense, and let $\lambda(p)-\lambda(q)=2$. Choose unstable orientations, use the kernel-first intersection and flow-first quotient orientations of [[lem-unstable-orientations-induce-trajectory-moduli-orientations]], and extend the latter over the compactified one-manifold. With the outward-normal-first boundary convention, every once-broken point has sign
$$\operatorname{sign}_{\partial}(\gamma_1,\gamma_2)=-\epsilon(\gamma_1)\epsilon(\gamma_2).$$
In particular the products at the two ends of every interval component are opposite. No ambient orientation is needed.

## Facts & Assumptions

**Given:** AC, the pair, unstable orientations and a once-broken point through $r$, where $k=\lambda(r)=\lambda(p)-1$.

[A1] AC supplies the compactness and orientation suppliers ([[def-axiom-of-choice]], [[thm-choice-implies-dependent-implies-countable-choice]]).

[F1] The compactification is a compact one-manifold whose boundary consists of once-broken pairs ([[thm-index-two-compactification-is-a-compact-one-manifold-with-boundary]]).

[F2] Every once-broken point has a one-sided collar, smooth in its interior, whose parameter is the small entry radius ([[lem-gluing-broken-index-two-trajectories-gives-collar-ends]]).

[F3] The intersection exact sequence is ordered kernel first and normal quotient second, and the quotient by the positive flow line is ordered flow first. The comparison signs are $\epsilon_i=\epsilon(\gamma_i)$ ([[lem-unstable-orientations-induce-trajectory-moduli-orientations]], [[def-product-orientation]]).

[F4] An outward vector first defines the boundary orientation; in a half-interval coordinate $s\ge0$, the outward direction is $-\partial_s$ ([[def-induced-boundary-orientation]], [[prop-boundary-orientation-is-independent-of-the-outward-vector-field]]).

[F5] In normalized Morse coordinates at $r$, $f=f(r)-|u|^2+|v|^2$ and $X=2u\partial_u-2v\partial_v$; the local stable and unstable disks are $u=0$ and $v=0$ ([[def-downward-gradient-like-vector-field]], [[thm-local-stable-unstable-manifold-theorem-for-a-morse-critical-point]]).

[F6] The finite-dimensional inverse and implicit-function theorems give local graphs when the relevant derivative block is invertible. For smooth equations their derivative formulas give smooth graphs by repeated differentiation ([[thm-euclidean-inverse-function-theorem]], [[thm-euclidean-implicit-function-theorem]]).

[F7] Morse--Smale stable and unstable manifolds intersect transversely; finite-time flow maps are smooth diffeomorphisms ([[def-morse-smale-pair]], [[thm-fundamental-theorem-on-flows]]).

## Proof

**Proof technique:** direct, by ordered determinants in the radial passage chart.

1.1 Choose entry and exit levels $f(r)\pm\varepsilon$ in the chart of [F5]. The incoming sheet of $W^u(p)$ in the entry level is a $k$-disk transverse to the stable sphere: quotienting the Morse--Smale transversality by the common flow direction gives an isomorphism from its tangent space to the $u$-space. By [F6] it is $D=\{(u,h(u))\}$, with $|h(u)|^2=\varepsilon+|u|^2$. Integrating [F5] gives $(u,v)\mapsto(e^{2t}u,e^{-2t}v)$; writing $u=s\theta$ and $g=h/|h|$, its passage image is $H(s,\theta)=(\sqrt{\varepsilon+s^2}\theta,s g(s\theta))$. This extends smoothly to $s=0$. There $\partial_sH=(0,g(0))$ is nonzero and independent of the angular derivatives, which span the unstable sphere. For $s\ge0$ its parameters are recovered by $s=|v|$ and $\theta=u/|u|$, so its image $Q$ is an embedded collar of that sphere. [given, F5, F6, F7, construct, algebra]

2.1 At the outgoing crossing, the stable slice of $q$ has codimension $\lambda(q)=k-1$ in the exit level. Transversality of $W^u(r)$ and $W^s(q)$, after removing their common flow line, says that its defining equations restricted to the unstable sphere have invertible angular derivative. Extend $H$ to negative $s$ locally and apply [F6] to obtain a unique smooth solution $\theta=\theta(s)$; for $k=1$ there are no angular equations. Thus $Q\cap W^s(q)$ is a smooth half-interval $H(s,\theta(s))$ transverse in $Q$. For $s>0$ it represents ordinary trajectories, and its entry and exit points converge to those of the given broken pair. It is the collar end in [F2], by that collar's uniqueness and entry-radius parameter. [F2, F6, F7, step 1.1]

2.2 Orient the $u$-space by $or_r$. At the incoming crossing, [F3] gives $or_p=\epsilon_1(X_{\mathrm{in}},or_r)$, since the normal quotient to $W^s(r)$ is the $u$-space. Removing the positive flow direction orients $D$ as $\epsilon_1 or_r$. Write $\sigma$ for the sphere orientation with $(\text{positive radial direction},\sigma)=or_r$; then polar coordinates orient $D$ as $\epsilon_1(\partial_s,\sigma)$ for $s>0$. Flow passage preserves this slice orientation: its derivative is $D\Phi_t$ plus a multiple of $X$, and the added term disappears in the quotient by $X$. Hence $Q$ has orientation $\epsilon_1(\partial_s,\sigma)$, extending nonvanishingly to $s=0$ in the embedding of step 1.1. [A1, F3, F7, step 1.1, algebra]

3.1 At the outgoing crossing the positive flow direction on $W^u(r)$ is positive radial. If $N_q$ is the oriented normal quotient to $W^s(q)$, [F3] gives $or_r=\epsilon_2(X_{\mathrm{out}},N_q)$. Thus $\sigma$ maps to $\epsilon_2 N_q$ in that quotient. Step 2.1 yields $or_Q=\epsilon_1\epsilon_2(\partial_s,N_q)$ at the boundary. The kernel-first exact sequence for the transverse intersection in step 2.1 therefore orients its tangent as $\epsilon_1\epsilon_2\partial_s$; a lift tangent to the solution curve differs from $\partial_s$ by angular directions, which do not change this determinant. For $s>0$ this agrees with the flow-first moduli orientation, because the ordered splittings of $TW^u(p)$ are $(X,Q)$ and $(X,T\mathcal M(p,q),N_q)$. [F3, step 2.1, step 2.2, algebra]

4.1 The orientation in step 3.1 extends nonvanishingly to every collar endpoint of [F1]. Comparing its positive tangent ray $\epsilon_1\epsilon_2\partial_s$ with the outward ray $-\partial_s$ in [F4] gives boundary sign $-\epsilon_1\epsilon_2$. On an oriented interval the two outward boundary signs are opposite, so the products are opposite as well. Only unstable orientations and their normal quotients were used; no orientation of $M$ was used. [F1, F4, step 3.1] ∎
