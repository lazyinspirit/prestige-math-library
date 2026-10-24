---
id: thm-homotopic-maps-induce-equal-maps-in-singular-cohomology
kind: theorem
title: Homotopic maps induce equal maps in singular cohomology
status: published
origin: pipeline
pipeline_run: phase-2-next-20
deps: [prop-singular-cohomology-is-contravariantly-functorial, thm-singular-chain-homotopy-formula, def-singular-cochain-complex-with-coefficients, def-singular-cohomology-with-coefficients]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Hatcher, section 3.1, Homotopy Invariance, printed page 201
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch3.pdf
---

## Statement

If $f,g:X\to Y$ are homotopic continuous maps, then $f^*=g^*:H^n(Y;G)\to H^n(X;G)$ for every integer $n$ and every abelian coefficient group $G$.

## Facts & Assumptions

[F1] [[thm-singular-chain-homotopy-formula]] supplies a prism $P_j:C_j(X;\mathbb Z)\to C_{j+1}(Y;\mathbb Z)$ with $g_\#-f_\#=\partial P+P\partial$, using $P_{-1}=0$ in degree zero.

[F2] [[def-singular-cochain-complex-with-coefficients]] uses $\delta\varphi=\varphi\partial$ and zero negative cochains. [[def-singular-cohomology-with-coefficients]] takes cocycles modulo coboundaries.

[F3] [[prop-singular-cohomology-is-contravariantly-functorial]] gives the induced maps by cochain precomposition.

## Proof

**Given:** A homotopy from $f$ to $g$, its prism $P$ from [F1], and coefficients $G$.

1.1 For $n\ge1$ define $K^n:C^n(Y;G)\to C^{n-1}(X;G)$ by $K^n\varphi=\varphi P_{n-1}$, and set $K^n=0$ for $n\le0$. For $n\ge0$, the composite maps on a cochain satisfy $$\delta_X^{n-1}K^n\varphi+K^{n+1}\delta_Y^n\varphi=\varphi P_{n-1}\partial_{X,n}+\varphi\partial_{Y,n+1}P_n=\varphi(g_{\#,n}-f_{\#,n}).$$ When $n=0$ the first term is zero and the identity is exactly [F1]'s degree-zero formula. Thus $g^\sharp-f^\sharp=\delta K+K\delta$ with the stated positive sign. [F1, F2, F3]

2.1 If $\varphi$ is a cocycle, the last summand $K\delta\varphi$ vanishes; hence $g^\sharp\varphi-f^\sharp\varphi=\delta K\varphi$ is a coboundary. It follows on [F2] quotients that $g^*[\varphi]=f^*[\varphi]$. In degree zero this is equality of the actual cocycles, since $K^0=0$. In negative degrees both induced maps are the unique map of zero groups. [F2, F3, step 1.1]

3.1 Step 2.1 proves equality in every degree. Empty source or target, zero coefficients, and a point cause no exception: where the maps exist, the same prism formula applies; zero cochains give zero maps. Constant homotopies need not have zero unnormalized prism, but step 1.1 still yields the correct equality. This proof composes explicitly given homomorphisms and uses no extension of homomorphisms, primitive selection or AC. [F1, F2, step 1.1, step 2.1] ∎
