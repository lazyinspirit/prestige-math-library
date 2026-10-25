---
id: lem-attaching-handles-along-isotopic-attaching-embeddings-preserves-the-diffeomorphism-type
kind: lemma
title: Isotopic attaching embeddings give diffeomorphic handle attachments
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 5
deps:
- def-attaching-a-smooth-handle-with-corner-rounding
- def-k-handle-core-cocore-attaching-region-and-belt-sphere
- lem-smooth-handle-attachment-is-independent-of-corner-rounding-up-to-diffeomorphism
- def-smooth-collar-of-a-manifold-boundary
- thm-collar-neighborhood-theorem
- def-smooth-embedding
- def-diffeomorphism-and-local-diffeomorphism-of-manifolds
- def-countable-choice
- thm-smooth-inverse-function-theorem-on-manifolds
- def-time-dependent-vector-field-and-evolution-operator
- thm-compactly-supported-time-dependent-vector-fields-have-global-evolution-on-a-compact-time-interval
- prop-time-dependent-evolution-satisfies-the-two-time-cocycle-law
- lem-handles-of-equal-index-can-be-attached-on-one-level
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
  - title: Wolfgang Lück, A Basic Introduction to Surgery Theory (ICTP lecture notes; complete author PDF)
    url: https://him-lueck.uni-bonn.de/data/ictp.pdf
    locator: Ch. 1 §1.1, printed pp. 4-5 (Isotopy Lemma 1.8 and its diffeotopy-extension proof)
  - title: John Milnor, Lectures on the h-Cobordism Theorem (notes by L. Siebenmann and J. Sondow; scanned edition
      with text layer)
    url: https://webhomes.maths.ed.ac.uk/~v1ranick/surgery/hcobord.pdf
    locator: §5, printed pp. 45-66 (isotopies of attaching data in the proof of the First Cancellation Theorem;
      Theorem 5.8, Isotopy Extension, p. 64)
verification:
  precheck: pass
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $W^n$ be a compact smooth manifold with boundary, $0\le k\le n$, and let $\varphi_0,\varphi_1:S^{k-1}\times D^{n-k}\to\partial W$ be attaching embeddings that extend over a neighbourhood of the disk factor. Suppose there is a smooth isotopy $\varphi_t$ between them through such embeddings, constant for $t$ near $0$ and $1$. Then the handle attachments $W\cup_{\varphi_0}(D^k\times D^{n-k})$ and $W\cup_{\varphi_1}(D^k\times D^{n-k})$, with corners rounded, are diffeomorphic by a diffeomorphism that is the identity outside a collar of the swept attaching regions. If later handles of a presentation are attached to the swept region, the same diffeomorphism carries their attaching data, so the two total manifolds are diffeomorphic as well.

## Facts & Assumptions

**Given:** A compact smooth $n$-manifold $W$ with boundary, $0\le k\le n$, attaching embeddings $\varphi_0,\varphi_1:M\to\partial W$ of the attaching region $M=S^{k-1}\times D^{n-k}$ of the standard handle $H=D^k\times D^{n-k}$ that extend over a neighbourhood of the disk factor, an isotopy $\varphi_t$ between them through such embeddings, and $\varepsilon\in(0,\tfrac12)$ with $\varphi_t=\varphi_0$ for $t\le\varepsilon$ and $\varphi_t=\varphi_1$ for $t\ge1-\varepsilon$.

[F1] [[def-attaching-a-smooth-handle-with-corner-rounding]]: Attaching the handle of [[def-k-handle-core-cocore-attaching-region-and-belt-sphere]] along an embedding $\varphi:S^{k-1}\times D^{n-k}\to\partial X$ means forming the quotient of $X\sqcup H$ that identifies $z$ with $\varphi(z)$ in the attaching region; collars give the seam its product smooth charts and the compact codimension-two corner is rounded by a compatible monotone profile. The attaching embedding and its framing are part of the data, and there is no corner to round when $k=0$ or $k=n$.

[F2] [[thm-collar-neighborhood-theorem]] and [[def-smooth-collar-of-a-manifold-boundary]]: Assume $\mathrm{AC}_\omega$. Every smooth manifold $X$ with boundary has a smooth collar $c:\partial X\times[0,\eta)\to X$, an embedding with $c(p,0)=p$ whose image is an open neighbourhood of $\partial X$.

[F3] [[thm-smooth-inverse-function-theorem-on-manifolds]]: If $F:X\to Y$ is smooth and $dF_p:T_pX\to T_{F(p)}Y$ is an isomorphism, then $p$ has an open neighbourhood $U$ and $F(p)$ an open neighbourhood $V$ with $F|_U:U\to V$ a diffeomorphism.

[F4] [[def-time-dependent-vector-field-and-evolution-operator]], [[thm-compactly-supported-time-dependent-vector-fields-have-global-evolution-on-a-compact-time-interval]] and [[prop-time-dependent-evolution-satisfies-the-two-time-cocycle-law]]: Assume $\mathrm{AC}_\omega$. A time-dependent vector field $u_t$ on a manifold $U$ is a smooth map $(t,p)\mapsto u_t(p)\in T_pU$, and an evolution operator for it satisfies $\frac{d}{dr}\Psi_{r,s}(p)=u_r(\Psi_{r,s}(p))$ and $\Psi_{s,s}(p)=p$. If the union of the supports over a compact time interval is contained in a compact subset of $U$, a global evolution operator exists on that interval, it is smooth in $(t,s,p)$, and it satisfies the cocycle law $\Psi_{r,t}\circ\Psi_{t,s}=\Psi_{r,s}$; in particular each $\Psi_{t,s}$ is a diffeomorphism with inverse $\Psi_{s,t}$.

[F5] [[lem-smooth-handle-attachment-is-independent-of-corner-rounding-up-to-diffeomorphism]]: Two compatible smooth monotone roundings of the same attachment and collar data are diffeomorphic by an isotopy supported in the collar, and the diffeomorphism is the identity outside the collar.

[F6] [[def-smooth-embedding]] and [[def-diffeomorphism-and-local-diffeomorphism-of-manifolds]]: A smooth embedding is an injective immersion that is a homeomorphism onto its image with the subspace topology; a diffeomorphism is a bijective smooth map with smooth inverse.

[F7] [[def-countable-choice]]: $\mathrm{AC}_\omega$ is the countable axiom of choice, assumed throughout; in this proof it is used only through the collar and flow suppliers cited in [F2] and [F4].

[F8] The full-dimensional compact attaching-region graph admits a smooth compactly supported extension of its prescribed velocity, including source-boundary points; its ambient boundary diffeotopy carries every point of the attaching embedding along the given isotopy ([[lem-handles-of-equal-index-can-be-attached-on-one-level]], proof steps 1.2–1.3).

## Proof

**Proof technique:** direct.

1.1 Extend the isotopy by $\varphi_t:=\varphi_0$ for $t\le0$ and $\varphi_t:=\varphi_1$ for $t\ge1$; the constancy hypotheses make this a smooth map $M\times\mathbb R\to\partial W$ whose every time slice is an embedding. Define $\Psi(x,t):=(\varphi_t(x),t)$ on $M\times\mathbb R$; it is injective, since $(\varphi_t(x),t)=(\varphi_s(y),s)$ forces $t=s$ and then $x=y$. Its differential is $d\Psi(v,s)=(d\varphi_t(v)+s\,\partial_t\varphi_t,s)$, which is injective: $s=0$ from the second component and then $v=0$ from injectivity of $d\varphi_t$. At points with $x\in\operatorname{int}M$ the source $\operatorname{int}M\times\mathbb R$ and the target $\partial W\times\mathbb R$ both have dimension $n$, so $d\Psi$ is an isomorphism there, and the image $S^\circ:=\Psi(\operatorname{int}M\times\mathbb R)$ is an open subset of $\partial W\times\mathbb R$. [F3, F6, given]

2.1 Apply the compact full-dimensional graph-velocity construction of [F8] to the graph $\Psi$ of step 1.1. At a source-boundary point, extend the smooth graph map to an open coordinate neighborhood; its derivative is invertible, so [F3] gives the required local inverse and extends the velocity there. The finite partition and bump construction in [F8] gives a smooth compactly supported field $\widehat Y(p,t)=(u_t(p),0)$ on $\partial W\times\mathbb R$ with $u_t(\varphi_t(x))=\partial_t\varphi_t(x)$ for every $x\in M$, including $\partial M$. [F3, F8, step 1.1, construct]

3.1 Since the isotopy is stationary for $t$ near its endpoints, multiply this extension by a smooth temporal cutoff that is one wherever the prescribed velocity is nonzero and vanishes on smaller endpoint neighborhoods. This preserves its values on the graph and compact support and makes $u_t=0$ near $t=0,1$. Thus the boundary of the disk factor may move; no stationary spatial collar is required. [step 2.1, given, construct]

4.1 Writing $(u_t(p),0):=\widehat Y(p,t)$ defines a smooth time-dependent vector field $u_t$ on $\partial W$ whose support over the compact interval $[0,1]$ is a compact subset of $\partial W$. By [F4] it has a global evolution $H_t:=\Psi_{t,0}$, $t\in[0,1]$, with $H_0=\operatorname{id}_{\partial W}$; each $H_t$ is a diffeomorphism with inverse $\Psi_{0,t}$, $H_t$ is the identity outside the compact support of the family, and $H_t=\operatorname{id}$ for $t\le\varepsilon$ and $H_t=H_1$ for $t\ge1-\varepsilon$ because $u_t$ vanishes there. [F4, F7, step 3.1]

5.1 Extend the diffeotopy over the interior by a collar deformation. By [F2] fix a collar $c:\partial W\times[0,\eta)\to W$ and a smooth function $\chi:[0,\eta)\to[0,1]$ with $\chi\equiv1$ on $[0,\eta/4]$ and $\chi\equiv0$ on $[\eta/2,\eta)$. Define $K:W\to W$ by $K(c(p,s)):=c(H_{\chi(s)}(p),s)$ on the collar image and $K:=\operatorname{id}_W$ outside. The collar image $V:=c(\partial W\times[0,\eta))$ is open, $Z:=c(\partial W\times[0,\eta/2])$ is compact with $Z\subseteq V$, and on $V\setminus Z$ one has $\chi(s)=0$, so the collar formula is the identity there and agrees with the outside definition; hence $K$ is smooth. The same computation with $H_{\chi(s)}^{-1}=\Psi_{0,\chi(s)}$ in place of $H_{\chi(s)}$ gives a smooth inverse, so $K$ is a diffeomorphism of $W$ that is the identity outside the compact set $Z$ and satisfies $K|_{\partial W}=H_1$, since $\chi(0)=1$. [F2, F4, step 4.1, construct]

6.1 For every $x\in M$, including its boundary, step 2.1 gives $\frac{d}{dt}\varphi_t(x)=u_t(\varphi_t(x))$. Uniqueness in [F4] therefore yields $H_t(\varphi_0(x))=\varphi_t(x)$ on the whole attaching region. With step 5.1, $K(\varphi_0(x))=\varphi_1(x)$. [F4, step 2.1, step 4.1, step 5.1]

7.1 Define $\Phi:W\cup_{\varphi_0}H\to W\cup_{\varphi_1}H$ by $\Phi|_W:=K$ and $\Phi|_H:=\operatorname{id}_H$. It is compatible with the two identifications: for $z\in M$ one has $\Phi(z)=z$ and $\Phi(\varphi_0(z))=K(\varphi_0(z))=\varphi_1(z)$, and in the target $z$ is identified with $\varphi_1(z)$. In the seam charts given by the collar data of [F1] and the collar $c$, a source point $c(\varphi_0(z),s)$ with $s\le\eta/4$ is glued to the handle point $(z,s)$ and is mapped to $c(H_{\chi(s)}(\varphi_0(z)),s)=c(\varphi_1(z),s)$, which is glued to $(z,s)$ in the target; thus $\Phi$ reads as the identity on a neighbourhood of the seam. Hence $\Phi$ is smooth with smooth inverse $K^{-1}\sqcup\operatorname{id}_H$, and it is the identity on $H$ and outside a collar of the region swept by the isotopy. [F1, F2, step 5.1, step 6.1]

8.1 The attachments in the statement are formed with corners rounded. The map $\Phi$ preserves the collar data of the corner and therefore carries a compatible rounding of the first presentation to a compatible rounding of the second; by [F5] the rounded attachments are diffeomorphic, and the resulting diffeomorphism is still the identity outside a collar of the swept attaching region in $W$, which is what the swept region corresponds to under the two gluings. [F1, F5, step 7.1]

9.1 If further handles are attached to the outgoing boundary of the two presentations, then gluing the same handles along attaching data that correspond under $\Phi$ gives diffeomorphic total manifolds: the map $\Phi$ on the base together with the identity on the additional handles is compatible with the identifications, exactly as in step 7.1. In particular, attaching data carried into the swept region by the isotopy are transported by $\Phi$, so the two total manifolds are diffeomorphic. [F1, step 7.1, step 8.1] ∎
