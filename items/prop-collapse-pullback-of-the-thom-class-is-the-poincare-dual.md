---
id: prop-collapse-pullback-of-the-thom-class-is-the-poincare-dual
kind: proposition
title: "Collapse pulls the Thom class back to the Poincaré dual"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: ["def-pontryagin-thom-collapse-of-an-embedded-submanifold", "def-thom-class-and-thom-isomorphism-interface", "thm-poincare-duality-for-oriented-topological-manifolds", "def-fundamental-class-of-a-compact-oriented-manifold", "def-relative-cap-product", "prop-cap-product-naturality-and-projection-formula", "lem-cap-product-duality-is-an-isomorphism-on-euclidean-balls", "def-axiom-of-choice", "def-compactly-supported-singular-cohomology-of-a-locally-compact-space", "thm-excision-for-singular-cohomology", "thm-long-exact-sequence-of-a-pair-in-singular-cohomology", "thm-naturality-of-the-singular-cohomology-pair-sequence", "def-alexander-whitney-diagonal-approximation", "thm-alexander-whitney-and-eilenberg-zilber-are-chain-homotopy-inverses"]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Stanford Math 215B notes, Lectures 14–15, Theorems 138–139"
      url: "https://web.stanford.edu/~lindrew/math215B.pdf"
      locator: "printed pp.44–46; collapse pullback, compact-support duality and Thom normalization"
    - title: "May, A Concise Course in Algebraic Topology, Chapter 23 §5"
      url: "https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
      locator: "printed pp.194–196; disk/sphere models, Thom normalization; stabilization on p.196"
---

## Statement

Assume AC. Let $i:S^s\hookrightarrow M^m$ be an embedding of closed smooth oriented manifolds, $r=m-s$, and orient $\nu$ so that the normal orientation followed by the tangent orientation of $S$ gives the orientation of $M|_S$. With the cohomology-first, front-evaluation cap convention, the collapse $c:M_+\to\operatorname{Th}(\nu)$ satisfies
$$c^*u_\nu\cap[M]=i_*[S]\in H_s(M;\mathbb Z).$$
Thus $c^*u_\nu=\operatorname{PD}_M(i_*[S])$. The same formula holds over $\mathbb F_2$ without any orientation hypotheses. It also holds over a commutative ring with compatible supplied orientations. In rank zero use the corresponding component orientation generators and the based-quotient convention.

## Facts & Assumptions

**Given:** $S,M,i$ and compatible orientations as stated; the Thom class uses [[def-thom-class-and-thom-isomorphism-interface]], with AC from [[def-axiom-of-choice]].

[F1] [[def-pontryagin-thom-collapse-of-an-embedded-submanifold]] supplies a closed tube $D$ and open tube $U$, with $U$ identified with the open normal disk bundle.

[F2] [[thm-poincare-duality-for-oriented-topological-manifolds]] gives $D_U:H_c^r(U;R)\to H_s(U;R)$ and open-extension naturality $D_Me=j_*D_U$ for $j:U\hookrightarrow M$.

[F3] [[def-relative-cap-product]] and [[prop-cap-product-naturality-and-projection-formula]] identify the cap operations on restrictions, products and inclusions. [[lem-cap-product-duality-is-an-isomorphism-on-euclidean-balls]] gives the locally normalized cap isomorphism on coordinate balls.

[F4] The fundamental class of a compact oriented manifold is the unique class whose restriction to each point is the local orientation generator, with the empty and zero-ring cases as recorded there ([[def-fundamental-class-of-a-compact-oriented-manifold]]).

[F5] Compactly supported cohomology is the colimit of $H^k(U,U\setminus K;R)$ over compact $K$ ([[def-compactly-supported-singular-cohomology-of-a-locally-compact-space]]). Excision and the natural exact pair sequence compare these support groups with disk/sphere groups ([[thm-excision-for-singular-cohomology]], [[thm-long-exact-sequence-of-a-pair-in-singular-cohomology]], [[thm-naturality-of-the-singular-cohomology-pair-sequence]]).

[F6] The Alexander–Whitney map takes a simplex in $N\times T$ to the sum of its projected front/back tensors ([[def-alexander-whitney-diagonal-approximation]]). It and the signed shuffle map are natural chain-homotopy inverses, also on ordinary unnormalized chains ([[thm-alexander-whitney-and-eilenberg-zilber-are-chain-homotopy-inverses]]); naturality preserves the subcomplexes coming from either factor's relative subspace.

## Proof

1.1 For $r>0$ and nonempty $S$, choose $0<a<b<\rho$ inside the supplied tube and put $K=\Phi(D_a(\nu))\subset U$. This is compact. Excision identifies $H^r(U,U\setminus K;R)$ with $H^r(D_b(\nu),D_b(\nu)\setminus D_a(\nu);R)$. The outer annulus retracts onto $S_b(\nu)$, so the natural pair sequence identifies this group with $H^r(D_b(\nu),S_b(\nu);R)$. Scaling gives the normalized Thom class, hence a supported class $u\in H_c^r(U;R)$. In $Y=\operatorname{Th}(\nu)$, the complement of the image of $D_{a/\rho}(\nu)$ contracts radially to the basepoint, fixing that point; thus the same pair-sequence argument lifts $u_\nu$ uniquely to that support pair. The collapse pulls this lift back to $(M,M\setminus K)$, and its restriction to $U$ is the class just constructed. Excision for the open inclusion $U\subset M$, with compact support $K\subset U$, therefore gives $c^*u_\nu=e(u)$ after forgetting the disjoint basepoint. The rank-zero collapse instead extends the Thom multiplier from the clopen tube $U=S$, giving the same equality directly. [F1, F5, given, construct]

2.1 The zero-section inclusion $z:S\to U$ is a homotopy equivalence, with inverse the bundle projection $p$ and homotopy $(x,v)\mapsto(x,tv)$. Put $b=p_*D_U(u)\in H_s(S;R)$. To find its image in $H_s(S,S\setminus\{x\};R)$, localize the relative cap calculation [F3] over an oriented trivializing ball about $x$. Write its coordinates in normal-first order $N\times T$. Thom uniqueness identifies the local class with the pullback of a normal cocycle $\eta$, normalized to evaluate to $1$ on the oriented normal relative cycle $a$; let $d$ be the tangent relative orientation cycle. The product orientation is represented by the signed shuffle $\operatorname{sh}(a\otimes d)$. For any product chain $z_0$, the front-evaluation formula gives $$\operatorname{pr}_{T\#}(\operatorname{pr}_N^*\eta\cap z_0)=(\eta\otimes\mathrm{id})\operatorname{AW}_{r,s}(z_0),$$ where contraction is zero on tensor summands of normal degree other than $r$. On the excisive disk-product triad, relative naturality in [F6] gives $\operatorname{AW}\operatorname{sh}\simeq\mathrm{id}$. Contracting that homotopy by the cocycle $\eta$ leaves equal relative homology classes, so the displayed cap sends the product orientation to $\eta(a)d=d$. This computes the image of $b$ as the chosen local orientation generator of $S$; no restriction of ordinary homology to an open set is used. The normal-first order accounts for the positive sign. [F3, F6, given, step 1.1, algebra]

3.1 By [F4] a compact oriented manifold's fundamental class is the unique class with these local restrictions, so $b=[S]$ componentwise, also when $S$ is disconnected. Since $z_*p_*$ is the identity on $H_s(U;R)$, step 2.1 gives $D_U(u)=z_*[S]$. Open-extension naturality [F2] now gives $c^*u_\nu\cap[M]=D_Me(u)=j_*D_U(u)=j_*z_*[S]=i_*[S]$. The isomorphism $D_M$ makes its cohomological reformulation unique. [F2, F4, step 1.1, step 2.1]

4.1 Over $\mathbb F_2$ every fiber and tangent orientation has its canonical generator, and the same local computation proves the formula without orientability. For $r=0$, $S$ is a union of components and the collapse extends the componentwise orientation multiplier; cap sends it to the specified $[S]$. Empty $S$ gives the zero class and empty manifolds give zero groups. AC is used only through the general Thom and duality suppliers. This proves the collapse application, retaining AT ownership of those suppliers. [F2, F3, step 3.1] ∎
