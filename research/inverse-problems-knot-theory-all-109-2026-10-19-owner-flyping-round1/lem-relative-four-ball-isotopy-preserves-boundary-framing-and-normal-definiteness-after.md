---
id: lem-relative-four-ball-isotopy-preserves-boundary-framing-and-normal-definiteness
kind: lemma
title: "Relative four-ball isotopy preserves boundary framing and normal definiteness"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - def-one-variable-alexander-module-of-an-oriented-link
  - thm-choice-implies-dependent-implies-countable-choice
  - prop-normal-and-conormal-bundles-are-smooth-vector-bundles
  - thm-parametric-transversality
  - lem-oriented-boundary-of-a-compact-oriented-one-manifold-has-zero-signed-count
  - thm-general-stokes-theorem
  - cor-winding-number-is-the-normalized-argument-increment
  - lem-corrected-normal-signature-is-independent-of-spanning-surface
  - lem-normal-transfer-pairing-and-signature-under-component-connecting-tubes
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Full AC is inherited from the corrected-normal-signature and full-pairing suppliers. It implies countable choice for normal bundles, transversality, Stokes and signed compact one-manifold counts. The relative normal-index argument uses finite coordinate covers and finite perturbation families."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "C. McA. Gordon and R. A. Litherland, On the Signature of a Link (1978), printed pp.58–59, normal Euler count and Lemma4; disconnected-link relative-index extension proved here"
      url: "https://gdz.sub.uni-goettingen.de/download/pdf/PPN356556735_0047/PPN356556735_0047.pdf"
    - title: "Thomas Kindred, A geometric proof of the flyping theorem, Proposition2.34, PDF p.16; only its proper-isotopy input is considered here"
      url: "https://arxiv.org/pdf/2008.06490v3"
---

## Statement

Assume full AC. Let $F_0,F_1\subset S^3=\partial B^4$ be compact smooth embedded spanning surfaces for the same nonempty smooth link $L$, with no closed components, allowing disconnectedness and nonorientability. Fix the standard inward collar $S^3\times[0,\delta)$ of $B^4$. Push each surface to the graph $\widehat F_i=\{(x,\rho_i(x)):x\in F_i\}$, where $\rho_i$ is smooth, zero on the boundary, positive on the interior, has positive inward derivative on the boundary and is sufficiently small. Suppose an actual smooth ambient isotopy of $B^4$, fixed pointwise on $S^3$, carries $\widehat F_0$ to $\widehat F_1$.

Then the first Betti numbers and component counts of $F_0,F_1$ agree, and their total boundary normal framings agree:
$$\sum_{K\subset L}\operatorname{lk}(K,K^{F_0})=\sum_{K\subset L}\operatorname{lk}(K,K^{F_1}).$$
Here $K^{F_i}$ is a sufficiently small surface-normal push with compatible orientation; arbitrary orientations of the components give the same summands. The signatures of their full rational normal-transfer pairings agree. If either pairing is positive definite or negative definite, the other is definite with the same sign. The zero-dimensional definite form is included. No isometry of the full pairings or branched-cover intersection theorem is asserted or assumed.

## Statement references

[[def-axiom-of-choice]]

## Facts & Assumptions

**Given:** Full AC, the two spanning surfaces, their actual proper graph pushes and an ambient four-ball isotopy fixed on its entire boundary and carrying one push to the other.

[F1] The normal quotient of a smooth embedding is a smooth vector bundle under countable choice. Local slice charts give its frames. A transverse finite-dimensional family has arbitrarily small transverse slices. ([[prop-normal-and-conormal-bundles-are-smooth-vector-bundles]], [[thm-parametric-transversality]])

[F2] The outward-normal-first signed boundary count of a compact oriented one-manifold is zero. Full AC implies countable choice. ([[lem-oriented-boundary-of-a-compact-oriented-one-manifold-has-zero-signed-count]], [[thm-choice-implies-dependent-implies-countable-choice]])

[F3] Stokes applies to smooth compact oriented surfaces with boundary. The integral of the normalized angular form around a nonzero loop is its argument increment divided by $2\pi$. ([[thm-general-stokes-theorem]], [[cor-winding-number-is-the-normalized-argument-increment]])

[F4] For any two compact smooth spanning surfaces of the same link without closed components, including disconnected nonorientable surfaces, $\operatorname{sign}(B_F)-\frac12\sum_K\operatorname{lk}(K,K^F)$ is independent of $F$. The full pairing has dimension $b_1(F)$. ([[lem-corrected-normal-signature-is-independent-of-spanning-surface]], [[lem-normal-transfer-pairing-and-signature-under-component-connecting-tubes]])

[F5] Positive-meridian linking is a homomorphism on complement homology and assigns one to a positive meridian. Thus the framing change of two boundary normal fields is their relative angular degree in the oriented normal tube. ([[def-one-variable-alexander-module-of-an-oriented-link]])

## Proof

1.1 Work first with any compact proper smooth surface $P$ in the oriented four-ball, having the specified boundary $L$, and fix a nowhere-zero vector $v_K$ on $S^3$ normal to each oriented $K$. Its class in the normal quotient of $P$ is nonzero: neatness says $T P\cap T S^3=T L$, and $v_K$ is transverse to $T L$. Extend these boundary classes to a smooth normal section, fixed and nonzero on a boundary collar. Such an extension uses finitely many bundle charts and smooth cutoffs. Perturb it off that collar to have isolated transverse zeros: finitely many bump-supported local frame sections span every fiber on the compact remaining surface, so their addition gives a transverse evaluation family and [F1] supplies an arbitrarily small transverse slice. At a zero choose any local orientation of $P$, orient its normal plane by tangent-first ambient orientation, and count the sign of the two-by-two vertical derivative. Reversing the local surface orientation also reverses the normal orientation, so this sign is independent of that choice. The compact transverse zero set is finite. Denote its signed count by $e_v(P)$. [given, F1, F2, construct, algebra]

2.1 This count is independent of the extending section. Join two transverse sections by a smooth section homotopy, stationary near its end times and retaining the fixed boundary section. Make it transverse on the remaining compact part by the same finite-frame perturbation as in step 1.1, now with parameter and time cutoffs; its end slices and nonzero boundary collars stay fixed. The zero trace is a compact one-manifold, disjoint from the side boundary. It has a canonical orientation even when $P$ is nonorientable: choose a local orientation on $P$, hence on its normal plane, and use the kernel-first determinant rule on $T P\oplus\mathbb R_t$ mapping onto that normal plane. Reversing the surface orientation reverses both determinant factors and leaves the kernel orientation unchanged. Choose the common convention so at a regular time the time-positive tangent has the vertical-derivative sign of that slice. Its outward endpoint signs are then the positive slice indices at time one and their negatives at time zero. By [F2] their sum is zero, proving independence. All bundle and perturbation choices are finite. [step 1.1, F1, F2, construct, algebra]

2.2 Compute it for a graph push $P=\widehat F$. Use the round metric on $S^3$ and its product with the inward coordinate $r$. Its tangent plane is the graph of $d\rho$, and $W=(-\nabla_F\rho,1)$ is an everywhere nonzero normal field. Near a boundary component let $s$ follow its chosen orientation, let $u$ be inward distance on $F$, let $\nu$ be its inward unit conormal, and choose the local surface-normal $n$ in $S^3$ so $(\dot K,\nu,n)$ is positively oriented. Write $k=\partial_u\rho>0$ on the boundary. Then $W=(-k\nu,1)$ there, and $(n,W)$ is the positive normal frame when $(\dot K,\nu)$ is the surface orientation: in the ordered ambient frame $(\dot K,\nu,n,\partial_r)$ the relevant determinant is $1+k^2>0$. Write $v_K=|v_K|(\cos\alpha\,\nu+\sin\alpha\,n)$ on a cut boundary interval. Its normal projection has frame coordinates $|v_K|(\sin\alpha,-k\cos\alpha/(1+k^2))$. This ellipse has the same winding as $\alpha$, since $k>0$, including when $k$ varies with $s$. [step 1.1, construct, algebra]

3.1 An orientation-preserving ambient diffeomorphism fixed on $S^3$ preserves $e_v(P)$. Its derivative induces an isomorphism of normal quotient bundles. On $S^3$ it is the identity on every tangent vector to $S^3$, so it carries the prescribed class of each $v_K$ to that same prescribed class. Transport a transverse section and its zeros. The tangent-first determinant comparison preserves every zero sign, since the ambient derivative preserves orientation; any arbitrary local orientation choices on the two surfaces cancel as in step 1.1. Step 2.1 therefore proves the claimed invariance of the count, without choosing an orientation of either whole surface. [step 1.1, step 2.1, construct, algebra]

3.2 Set the extending section equal to $W$ off disjoint boundary annuli, interpolating to the prescribed boundary projection on those annuli and perturbing in their interiors. Each annulus is orientable with the boundary frame from step 2.2; reversing the chosen component orientation reverses both its traversal and the frame orientation, so the resulting degree is unchanged. On the annulus with small zero disks removed, pull back the closed angular form $\omega=(-y\,dx+x\,dy)/(2\pi(x^2+y^2))$ by the nonzero section in that frame. By [F3] and Stokes its integral around the outside boundary minus its integral along the inner boundary equals the sum of the small zero-circle integrals. Each latter integral is the local zero sign: after shrinking, the invertible linear derivative is homotopic to the section on that circle without a zero, and an invertible real plane map has circle winding its determinant sign. The inner boundary section is $W$, of constant frame angle; the outer winding is that of $\alpha$ by step 2.2. Thus $e_v(\widehat F)$ equals the sum of those relative boundary angle windings. If $r_K=\operatorname{lk}(K,K^v)$ and $f_K(F)=\operatorname{lk}(K,K^F)$, that winding is $r_K-f_K(F)$. Indeed on a normal tube, subtracting the degree of two vector-angle loops leaves a periodic real angle; its straight interpolation is a homotopy of the push curves in the complement, while one full positive turn adds one positive meridian and hence adds one to linking. The surface conormal and its normal differ by a constant quarter-turn and have the same framing. Consequently $e_v(\widehat F)=\sum_K(r_K-f_K(F)).$ This computation used only boundary annuli and the global nonzero $W$, so it applies to disconnected and nonorientable $F$. [step 1.1, step 2.1, step 2.2, F3, F5, construct, algebra]

4.1 Choose the same fields $v_K$ for both original pushes, for example the smooth boundary normal of $F_0$ on each component. They are actual nonzero normal fields along each oriented boundary circle, whether or not the interior surface is orientable. The given ambient isotopy has orientation-preserving endpoint and is fixed on $S^3$, so step 3.1 gives $e_v(\widehat F_0)=e_v(\widehat F_1)$. Formula step 3.2 cancels the same $r_K$ terms and yields equality of the total $f_K$ sums. The endpoint also restricts to a diffeomorphism of the two pushed surfaces, hence preserves their first Betti numbers and component counts; the graph projections identify these with the original surfaces. [given, step 3.1, step 3.2, construct, algebra]

5.1 Apply [F4] to $F_0,F_1$. Their equal total framings in step 4.1 force their full normal-pairing signatures to be equal. Their pairing dimensions are also equal by step 4.1. A symmetric form of dimension $b$ has signature $b$ exactly when all its eigenvalues are positive, and signature $-b$ exactly when all are negative: if $p,n,z$ are its positive, negative and zero ranks, use $p+n+z=b$ and signature $p-n$. Thus either strict sign of definiteness is transported, including $b=0$. This proves precisely the assertion for an actual supplied relative isotopy, without substituting a re-plumbing assertion for that missing input. [step 4.1, F4, algebra] ∎
