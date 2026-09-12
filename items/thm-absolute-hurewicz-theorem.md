---
id: "thm-absolute-hurewicz-theorem"
kind: "theorem"
title: "Absolute Hurewicz theorem at the first nonzero degree"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["thm-relative-hurewicz-theorem","prop-the-first-hurewicz-map-in-degree-one-is-abelianization","def-n-connected-space-and-n-connected-map","def-hurewicz-homomorphism","thm-long-exact-sequence-of-a-pair-in-singular-homology","cor-contractible-nonempty-spaces-have-the-homology-of-a-point","thm-singular-chain-homotopy-formula","def-relative-homotopy-group","def-n-connected-cw-pair","prop-higher-homotopy-basepoint-transport-and-moving-homotopies","def-zero-simplex-augmentation-and-reduced-singular-homology","prop-zero-th-singular-homology-is-free-on-path-components","lem-interval-exponential-law-and-quotient-homotopies","def-cw-complex-with-closure-finiteness-and-weak-topology","def-axiom-of-choice","lem-cw-quotient-induces-relative-singular-homology-isomorphisms"]
sources:
  references:
    - title: Hatcher, Algebraic Topology, Theorem4.32 pp366–367 and Hurewicz
        definition pp369–370; all-basepoint and actual CW-type transfer supplied
        locally
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

Let $n\ge2$ and assume the Axiom of Choice. If a CW complex $X$ is $(n-1)$-connected, then for every $x\in X$
$$\widetilde H_i(X;\mathbb Z)=0\quad(0\le i<n),\qquad h:\pi_n(X,x)\xrightarrow{\cong}H_n(X;\mathbb Z).$$
The same conclusion holds for an $(n-1)$-connected space already known to be homotopy equivalent to a CW complex, using an actual homotopy equivalence.

Separately, for $n=1$ and any nonempty path-connected space $X$, the map $h:\pi_1(X,x)\to H_1(X;\mathbb Z)$ is the abelianization map: it is surjective with kernel the commutator subgroup, and $\widetilde H_0(X;\mathbb Z)=0$. This degree-one assertion is choice-free and requires no CW-type assumption. A bare weak CW approximation is not the hypothesis used for the CW-type transfer above.

## Facts & Assumptions

[F1] [[thm-relative-hurewicz-theorem]] proves the AC-dependent isomorphism for an $(n-1)$-connected CW pair with nonempty simply connected subspace, including $n=2$.

[F2] [[prop-the-first-hurewicz-map-in-degree-one-is-abelianization]] proves the choice-free degree-one assertion for arbitrary path-connected based spaces.

[F3] [[def-n-connected-space-and-n-connected-map]] defines space connectivity with nonemptiness and path connectedness. [[def-relative-homotopy-group]] identifies a relative cube with subspace a point with an absolute based cube. [[def-n-connected-cw-pair]] also requires component-surjectivity.

[F4] [[def-hurewicz-homomorphism]] supplies naturality and the sphere and disk orientation formulas. [[thm-long-exact-sequence-of-a-pair-in-singular-homology]] with [[cor-contractible-nonempty-spaces-have-the-homology-of-a-point]] supplies the positive-degree point-relative comparison, and [[thm-singular-chain-homotopy-formula]] supplies homology invariance under unbased homotopies.

[F5] [[prop-higher-homotopy-basepoint-transport-and-moving-homotopies]] gives transport, its inverse, and the formula for an induced map under a moving-basepoint homotopy. Its radial-shell proof gives an actual homotopy from a cube to its transport with a moving constant boundary.

[F6] [[def-zero-simplex-augmentation-and-reduced-singular-homology]] defines reduced homology by the augmentation kernel in degree zero; it agrees with ordinary homology in positive degrees. [[prop-zero-th-singular-homology-is-free-on-path-components]] computes integral $H_0$, with augmentation sending each component generator to one.

[F7] [[lem-interval-exponential-law-and-quotient-homotopies]] permits a homotopy constant on each collapsed boundary at each time to descend through the sphere quotient times the interval. [[def-cw-complex-with-closure-finiteness-and-weak-topology]] supplies the CW cells and their skeleta.

[F8] [[lem-cw-quotient-induces-relative-singular-homology-isomorphisms]] applies to the standard CW disk-boundary pair and identifies its relative orientation generator with a generator of the point-relative sphere homology.

[A1] [[def-axiom-of-choice]] is assumed only for the $n\ge2$ theorem through [F1]. Its inherited uses are arbitrary-cell approximation and selection of compression disks for the relative model equivalence.

## Proof

**Given:** First let $n\ge2$, let $X$ be the $(n-1)$-connected CW complex, and assume [A1]. All homology coefficients are integers.

1.1 The space is nonempty and path connected by [F3]. It has a vertex $v$: take a cell containing a point; if its dimension is positive, its nonempty boundary maps to the preceding skeleton, so finite descent in dimension reaches a zero-cell. Thus $(X,\{v\})$ is a CW pair. Its point subspace is simply connected; its component map is surjective; and its relative groups in positive degrees are exactly the absolute based groups by [F3], so the pair is $(n-1)$-connected. Applying [F1] yields the relative Hurewicz isomorphism in degree $n$ and lower relative homology vanishing. In positive degrees the canonical $H_i(X)\to H_i(X,\{v\})$ is an isomorphism by [F4]. Under the corresponding homotopy identification, the relative disk representative is the sphere representative precomposed with $D^n\to D^n/S^{n-1}$; By [F8] for the standard finite CW pair $(D^n,S^{n-1})$, the image of the disk orientation is a generator of the point-relative sphere homology. Use the sphere orientation corresponding to that generator under [F4]. Evaluating the two pushforwards then gives the same Hurewicz map under that homology isomorphism. Hence $h$ is an isomorphism at $v$ and $H_i(X)=0$ for $0<i<n$. [F1, F3, F4, F7, F8, A1, given]

1.2 By [F6], a nonempty path-connected space has $H_0=\mathbb Z$, and its augmentation is the identity on the generator represented by any point. Its kernel is therefore zero. The degree-zero homology of the reduced complex is exactly this kernel: its cycles are the augmentation-zero chains and its boundaries are the same ordinary boundaries. Thus $\widetilde H_0(X)=0$. This degree-zero calculation holds for every nonempty path-connected space, without any higher connectivity. [F3, F6, given]

1.3 We record the transport check for an actual homotopy equivalence $f:T\to K$, with inverse $g$ and homotopies $\mathrm{id}_T\simeq gf$, $\mathrm{id}_K\simeq fg$. At $t\in T$, let $\alpha:t\to gf(t)$ be the first track and put $L=\beta_\alpha g_*:\pi_i(K,f(t))\to\pi_i(T,t)$ for $i\ge1$. By [F5], $Lf_*=1$. The radial-shell formula commutes pointwise with postcomposition, so $$f_*L=\beta_{f\alpha}(fg)_*.$$ The second inverse homotopy makes $(fg)_*:\pi_i(K,f(t))\to\pi_i(K,fgf(t))$ an isomorphism by [F5]: composing it with transport along that homotopy's track is the identity. Thus $f_*L$ is an isomorphism. The equation $Lf_*=1$ gives injectivity of $f_*$, and surjectivity of $f_*L$ gives surjectivity of $f_*$. The component functions of $f,g$ are inverse because the two homotopies join each point to its composite image. This proves component and all-basepoint homotopy invariance for this actual equivalence, without assuming its inverse is based. [F5, given]

2.1 For any $x\in X$, take one path $\gamma:v\to x$. The transport $\beta_\gamma:\pi_n(X,x)\to\pi_n(X,v)$ is an isomorphism by [F5]. Its moving-boundary radial-shell homotopy, including removal of the initial constant shell, descends by [F7] to a homotopy of sphere maps from a representative at $x$ to its transported representative at $v$. The basepoint may move, but [F4]'s absolute prism calculation makes their images of the sphere orientation class equal. Consequently $$h_v\beta_\gamma=h_x.$$ Since both $h_v$ and $\beta_\gamma$ are isomorphisms, so is $h_x$. No claim that $\{x\}$ is a CW subcomplex was used. For each $x$ only one path was instantiated, not a family over all points. [F4, F5, F7, step 1.1]


3.1 Now suppose $T$ is $(n-1)$-connected and is supplied with an actual homotopy equivalence $f:T\to K$ to a CW complex. Step 1.3 implies that $K$ is nonempty and path connected and has zero homotopy groups below $n$: at points in the image use the isomorphisms, and at any other point use a path from an image point and [F5]. Steps 1.1–2.1 apply to $K$. On homology the inverse maps and inverse homotopies give inverse induced maps by [F4]'s prism identity. The augmentations commute with continuous postcomposition on point simplices, so these isomorphisms also identify reduced degree-zero homology. Naturality [F4] gives $$h_{K,f(t)}f_*=f_*h_{T,t},$$ where both horizontal maps induced by $f$ are isomorphisms. Solving this equality with their inverses transfers the Hurewicz isomorphism to $T$ at each $t$, and the homology isomorphisms transfer all lower vanishing. This proof uses the stipulated inverse and inverse homotopies, not the weaker fact that some CW approximation is a weak equivalence. [F3, F4, F5, A1, step 1.1, step 1.2, step 1.3, step 2.1]

4.1 For the separate degree-one assertion, use [F2] directly at the given point of any path-connected space. It gives surjectivity and exactly the commutator subgroup as kernel, without AC. The argument of step 1.2 gives its reduced $H_0=0$ and uses no CW structure or choice. A point has trivial positive groups in these formulas. Empty spaces are excluded by nonemptiness or a supplied basepoint. At $n=2$ the point-pair application of [F1] satisfies its simple-connectivity hypothesis, while at $n=1$ only abelianization is claimed, not an isomorphism from an arbitrary nonabelian fundamental group. Constant maps, zero classes and moving basepoints were retained in the pushforward and transport formulas. For $n\ge2$ the sole inherited AC uses are those in [F1] stated in [A1]; the transfer through an already supplied equivalence adds none. This proves every assertion. [F1, F2, F3, F4, F5, A1, step 1.1, step 1.2, step 2.1, step 3.1] ∎
