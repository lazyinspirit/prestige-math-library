---
id: ex-critical-level-affine-sl2-vertex-algebra
kind: example
title: The critical-level sl2 affine vertex algebra and its current OPE
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 6
deps:
  - thm-universal-affine-vertex-algebra
  - lem-affine-current-fields-are-local
  - def-special-linear-lie-algebra-sl-two
  - def-dual-coxeter-number-for-normalized-form
  - def-sugawara-modes
  - def-residue-two-cocycle-on-a-loop-algebra
  - def-untwisted-affine-central-extension
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: Tomoyuki Arakawa and Anne Moreau, Arc spaces and vertex algebras, §§3.1 and 3.2
      url: https://www.imo.universite-paris-saclay.fr/~anne.moreau/Arc_space-vertex_algebras-BOOK_version.pdf
    - title: Christophe Nozaradan, Introduction to Vertex Algebras, §§3.2 and 4.2
      url: https://arxiv.org/pdf/0809.1380
---

## Example

Take $\mathfrak g=\mathfrak{sl}_2(\mathbb C)$ with the standard basis $e,f,h$ and level $k=-2$. The universal affine vertex algebra $V^{-2}(\mathfrak{sl}_2)$ exists. Its current fields satisfy
$$J^e(z)J^f(w)\sim\frac{J^h(w)}{z-w}-\frac{2\operatorname{id}}{(z-w)^2}.$$
For this normalized form $h^\vee=2$, so the denominator in the displayed normalized Sugawara formula is zero. The example separates existence of the affine vertex algebra from that particular conformal-vector formula; it asserts no alternative critical-level stress tensor.

## Facts & Assumptions

**Given:** The normalized $\mathfrak{sl}_2$ basis, the affine current bracket, the universal affine vertex algebra theorem, and the Sugawara formula convention.

[F1] [[thm-universal-affine-vertex-algebra]]: $V^k(\mathfrak g)$ is a vertex algebra for every complex level $k$.

[F2] [[def-special-linear-lie-algebra-sl-two]]: $[h,e]=2e$, $[h,f]=-2f$, and $[e,f]=h$.

[F3] [[def-residue-two-cocycle-on-a-loop-algebra]]: for normalized long-root-square-$2$ form, opposite root vectors with $[e,f]=h=\alpha^\vee$ satisfy $B(e,f)=1$.

[F4] [[def-dual-coxeter-number-for-normalized-form]]: $h^\vee=\gamma_B/2$, where the Casimir $\Omega_B$ for $B$ acts in the adjoint representation by $\gamma_B I$.

[F5] [[def-sugawara-modes]]: the normalized Sugawara formula has denominator $2(k+h^\vee)$ and is defined only when $k+h^\vee\ne0$.

[F6] [[lem-affine-current-fields-are-local]]: the singular OPE of currents is $J^x(z)J^y(w)\sim J^{[x,y]}(w)/(z-w)+kB(x,y)\operatorname{id}/(z-w)^2$.

## Proof

1.1 Since $-2\in\mathbb C$, [F1] gives the universal affine vertex algebra at this level; its construction does not divide by $k+h^\vee$. [F1, given]

1.2 By [F2] and [F3], invariance gives $B(h,h)=B([e,f],h)=B(e,[f,h])=2$. It also gives $B(h,e)=B(h,f)=B(e,e)=B(f,f)=0$: for example $2B(e,e)=B([h,e],e)=B(h,[e,e])=0$, and $2B(h,e)=B([h,e],h)=-B(e,[h,h])=0$; the $f$ identities follow from $[h,f]=-2f$ in the same way. Thus the $B$-dual basis to $(h,e,f)$ is $(h/2,f,e)$. The adjoint Casimir is therefore $\Omega_B=\tfrac12\operatorname{ad}(h)^2+\operatorname{ad}(e)\operatorname{ad}(f)+\operatorname{ad}(f)\operatorname{ad}(e)$. On $h$ its last two terms give $2h+2h=4h$; on $e$ its first two nonzero terms give $2e+2e=4e$; on $f$ its first and last nonzero terms give $2f+2f=4f$. Hence $\gamma_B=4$ and [F4] gives $h^\vee=2$. [F2, F3, F4, algebra]

1.3 Applying [F6] to $x=e,y=f$, with $[e,f]=h$, $B(e,f)=1$, and $k=-2$, gives the stated current OPE. [F2, F3, F6, algebra]

2.1 At $k=-2$ and $h^\vee=2$, the denominator in [F5] is $2(-2+2)=0$. Therefore this normalized Sugawara expression is undefined, even though step 1.1 supplies the affine vertex algebra. No Sugawara or Virasoro structure is inferred. [F1, F5, step 1.1, step 1.2, algebra] ∎
