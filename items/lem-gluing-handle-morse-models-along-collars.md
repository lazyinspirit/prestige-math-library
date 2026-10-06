---
id: lem-gluing-handle-morse-models-along-collars
kind: lemma
title: "Gluing handle Morse models along collars"
status: published
origin: pipeline
dependency_level: 2
deps: [def-handle-decomposition-relative-to-the-incoming-boundary, def-attaching-a-smooth-handle-with-corner-rounding, lem-standard-handle-admits-an-adapted-morse-function, lem-smooth-handle-attachment-is-independent-of-corner-rounding-up-to-diffeomorphism, thm-collar-neighborhood-theorem, thm-morse-lemma, def-morse-function-and-excellent-morse-function, def-downward-gradient-like-vector-field, def-countable-choice, thm-one-critical-point-handle-attachment, lem-local-morse-sublevel-pair-is-a-handle-pair, thm-regular-interval-diffeomorphism]
justified_by: []
provenance:
  statement: literature-derived
  proof: literature-derived
verification:
  precheck: pass
sources:
  references:
    - title: "C. T. C. Wall, Differential Topology (Cambridge Studies in Advanced Mathematics 156), Theorem 5.1.9, printed pp. 136–137"
      url: "https://www.math.auckland.ac.nz/~hekmati/Books/Wall.pdf"
    - title: "John Milnor, Lectures on the h-Cobordism Theorem (notes by L. Siebenmann and J. Sondow), Theorem 3.12, printed pp. 30–31"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/surgery/hcobord.pdf"
proof_strategy: "model handle inserted across a collar of the outgoing boundary"
---


## Statement

Assume $\mathrm{AC}_\omega$. Let $N$ be compact with $\partial N=\partial_-N\sqcup\partial_+N$, and let $f_N:N\to[0,1]$ be Morse, with $f_N^{-1}(1)=\partial_+N$ and $f_N=1-t$ on a critical-point-free outgoing collar. Attach a $k$-handle along an admissible framed embedding $h:S^{k-1}\times D^{n-k}\to\partial_+N$, obtaining $N'$. For every sufficiently small $\varepsilon>0$ there is a Morse $f':N'\to[0,1]$, equal to $f_N$ on the part of $N$ outside the outgoing collar strip $t<2\varepsilon$ and near $\partial_-N$, whose old critical points and critical values are unchanged and whose only new critical point has index $k$ and value $1-\varepsilon/2$. Its endpoint fibre at one is the new outgoing face, and $f'=1-t'$ on a smaller outgoing collar. Its handle attachment is the prescribed one, up to compatible collar and corner choices.

The height of the whole old outgoing face must be lowered before the new critical band is glued. Pointwise agreement on that face, or identification of every saddle level with a product attaching tube, is not asserted.


## Facts & Assumptions

[F1] [[def-attaching-a-smooth-handle-with-corner-rounding]] fixes the framed attaching embedding and seam collars.

[F2] [[lem-smooth-handle-attachment-is-independent-of-corner-rounding-up-to-diffeomorphism]] compares compatible roundings.

[F3] [[thm-morse-lemma]] identifies the index from the quadratic model.

[F4] [[thm-one-critical-point-handle-attachment]] gives the abstract rounded handle-attachment diffeomorphism type of a compact one-critical-point band on a boundaryless manifold; its Statement alone does not prescribe an attaching embedding or a relative diffeomorphism.

[F5] [[lem-local-morse-sublevel-pair-is-a-handle-pair]] constructs the local product handle with core $y=0$, attaching thickening in the $y$ coordinates, and a compactly supported modification with regular complementary collar.

[F6] [[thm-regular-interval-diffeomorphism]] identifies a compact regular band by normalized flow. An added finite collar can be absorbed by a smooth increasing interval reparametrization fixed near its inner end, as in [F5], Proof 5.1.



## Proof

**Given:** $N,f_N,h$ as stated, and $n=\dim N$.

1.1 By compactness and $f_N^{-1}(1)=\partial_+N$, choose $\varepsilon$ small enough that $f_N^{-1}[1-2\varepsilon,1]$ is exactly the prescribed outgoing collar strip $t\le2\varepsilon$ and every old critical value is below $1-2\varepsilon$. On $(1-2\varepsilon,1)$ choose a smooth $r$ with $0\le r<1$, vanishing near its ends and integral $\varepsilon$; a bump almost constant on most of this interval, then normalization, supplies it. Put $\theta(s)=s-\int_0^s r(x)\,dx$. Then $\theta\prime>0$, $\theta(s)=s$ for $s\le1-2\varepsilon$, and $\theta(s)=s-\varepsilon$ near one. Thus $\theta\circ f_N$ is unchanged outside that collar strip and at every old critical point and is $1-\varepsilon-t$ near the old outgoing face. [given, construct, algebra]

1.2 Construct the elementary band explicitly. For $0<k<n$, use $Q(x,y)=-|x|^2+|y|^2$ on $H=\{-1\le Q\le1,\ |x|^2|y|^2\le2\}$. Put $a=|x|^2$, $b=|y|^2$. The incoming face $Q=-1$ is parametrized by $(u,y)\mapsto(\sqrt{1+|y|^2}\,u,y)$, $u\in S^{k-1}$, $|y|\le1$, since there $a=b+1$ and $ab\le2$ means $b\le1$. The outgoing face is similarly $D^k\times S^{n-k-1}$. On the side $ab=2$, the coordinates $(x/|x|,y/|y|,Q)$ identify it with $S^{k-1}\times S^{n-k-1}\times[-1,1]$: $a=(\sqrt{Q^2+8}-Q)/2$, $b=(\sqrt{Q^2+8}+Q)/2$. Thus the side is a product with height $Q$. The normalized ascending field $( -2x,2y)/(4(a+b))$ preserves $ab$ and has derivative one on $Q$; near the side it supplies the matching height collars. [F1, F3, construct, algebra]

2.1 Let $V=\partial_+N$ and $K=\overline{V\setminus h(S^{k-1}\times\operatorname{int}D^{n-k})}$. Glue $H$ to $K\times[-1,1]$ along the side via $h$ on its sphere factors and the common height coordinate. Step 1.2 gives smooth charts across the side; the height $q$, equal to $Q$ on $H$ and to the product coordinate elsewhere, is smooth. The incoming face is identified with $V$ by $h(u,y)$ on $Q=-1$ and by the identity on $K$; the outgoing face is its prescribed surgery. There is exactly one quadratic critical point. For $k=0<n$ use a disjoint disk with $q=|y|^2$ and the unchanged product on $V$; for $k=n>0$ use $q=-|x|^2$ on a disk capping the specified embedded sphere, with the product on the remaining part of $V$; for $n=0$ add a point at height zero. [F1, F3, step 1.2, construct]

3.1 Check the attaching data and relative comparison, rather than infer them from [F4]. In the quadratic model the descending flow is $(x,y)\mapsto(e^{2t}x,e^{-2t}y)$, preserves $|x|^2|y|^2$, and preserves both angular coordinates. The unstable core reaches $Q=-1$ at $(u,0)$, hence at $h(u,0)$ in $V$. The local handle of [F5] has attaching tube $(u,z)\mapsto(\sqrt{\eta+|z|^2}\,u,z)$ on $Q=-\eta$. Its transport to $Q=-1$ is $(u,z)\mapsto(\sqrt{1+|\psi(z)|^2}\,u,\psi(z))$, where $\psi$ is a smooth increasing radial diffeomorphism onto a small disk; the invariant $ab$ determines its radius and its derivative at zero is a positive scalar. Thus the attaching tube is $h(u,\psi(z))$ with precisely the $y$ framing. It can be expanded to the full prescribed tube by a radial diffeomorphism in the extended disk neighbourhood of $h$, equal to the identity outside that neighbourhood: interpolate its strictly increasing radial coordinate with the identity outside a slightly larger disk. The interpolation is a radial isotopy; extend it into a boundary collar by evaluating the isotopy at a scalar cutoff of the collar parameter. The local modification in [F5] and this adjustment are away from the incoming end of an added product collar. All remaining regions are regular flow collars by [F6]; absorb them by interval maps fixed near that incoming end. These maps and the local handle chart glue to a diffeomorphism from the prescribed attachment model to $C$, fixing its incoming $V$. The disk and point endpoint models have the same relative property directly. This proves the extra embedding and relative conclusions using the construction, not the abstract Statement of [F4]. [F1, F2, F5, F6, step 1.2, step 2.1, construct, algebra]

4.1 On $C$ set $f'=1-\varepsilon/2+(\varepsilon/2)q$. Its incoming height is $1-\varepsilon$, its outgoing height is one, and its critical value is $1-\varepsilon/2$ with index $k$, since the multiplying factor is positive. Join it to $\theta\circ f_N$ along the common incoming face using their signed height coordinates: on the old side the height is $1-\varepsilon-t$, and on the new side it is $1-\varepsilon+s$. These formulas are the same smooth signed collar coordinate across the seam. The union is $N$ with the prescribed handle and an absorbable outgoing collar, so it is identified with $N'$ fixing the deep part of $N$. Its upper collar has coordinate $t'=1-f'$, since $df'$ is nonzero there. [F1, F2, F3, step 1.1, step 2.1, step 3.1, construct]

5.1 The joined function is unchanged off the old collar strip and near the incoming face; its only new critical point is the quadratic origin, and every old critical point and value is unchanged. Its endpoint fibre at one is exactly the new outgoing face, since both pieces have smaller values elsewhere. The disk and point endpoint models give the same conclusions with empty faces interpreted literally. [step 1.1, step 2.1, step 4.1, algebra] ∎
