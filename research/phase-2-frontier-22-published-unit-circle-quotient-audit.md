# Published unit-circle and quotient-circle audit — 2026-09-11

This is a bounded defect-focused audit of the published trigonometric
parametrization and the quotient-circle interfaces actually used by the active
22-pair frontier. It is not a certification of either transitive closure or an
exhaustive published-library audit. Published and draft items were read only.

## Deduplication and classification

Before classification, the complete canonical ledger was searched for all ten
published IDs below, their empty alias sets, the fibre-classification mechanism,
and the addition/subtraction/zero-set supplier IDs. None of the ten IDs already
had a classification row or item-specific finding. Broader references to the
trigonometric suppliers do not cover this mechanism. The transaction therefore
adds exactly two A-P rows and eight bounded-clear rows, with one row per ID.

| Published item | SHA-256 | Disposition |
|---|---|---|
| `thm-sine-and-cosine-parametrize-the-unit-circle` | `b524e8356aecb179727f3cafac9b26a020d8830713e64b553592248f3aabe2b5` | New A-P: proof 2.1 asserts an unsupported fibre classification. |
| `thm-real-line-mod-integers-is-homeomorphic-to-the-unit-circle` | `b325dfde1f9bc733eab352e28dba56b0d3e67b77bf36a9ce77f3009bc348c723` | New A-P impact: proof 3.1 directly spends the affected injectivity clause. |
| `thm-sine-cosine-zero-sets-and-fundamental-period` | `3c252f2785e59fe2861a1b9c2d410ce4e66f3c96ee8a42b0f36de92944df80d8` | New bounded clear. |
| `thm-sine-and-cosine-addition-formulas` | `2aa3ec57b5fd60744827be4caf726f375a26d0699c6fafccafb60a6b051875e4` | New bounded clear. |
| `thm-sine-and-cosine-subtraction-formulas` | `a124b8a4903bf5873f7c7cfd5319e5926ebc3f7b62d3ef3eeca7a6a2a0e7137d` | New bounded clear and an adequate repair supplier. |
| `def-circle-as-real-line-mod-integers` | `a96221931edf2dac66dd42ae19041b8e3ca27462a2524aa7608cb7a67b3fd4be` | New bounded clear. |
| `prop-real-line-mod-integers-is-compact-and-path-connected` | `80b6a97a98f5873acfbc6a67bbc9f6955e64edf3cd5df0fe65311140665a1a23` | New bounded clear. |
| `lem-open-quotient-arcs-in-real-line-mod-integers` | `bedb6b6ff6f4c386b91ce86af47f7f06e451627dbeb983b425c63c37608545a5` | New bounded clear. |
| `thm-real-line-covers-real-line-mod-integers` | `95f7c8bd411ea4ccab22e480d0b11f12a5d0761790ee88f8f84dfc7739b39922` | New bounded clear. |
| `cor-real-line-is-universal-cover-of-circle` | `54941184636f9d0b86f5b6777ddd8ca41f15799c6ca30bb13a131f6e25d606f2` | New bounded clear. |

## Exact defect and repair

Proof 2.1 of `thm-sine-and-cosine-parametrize-the-unit-circle` says that if
two parameters have the same sine/cosine pair, “the sine--cosine period theorem
says their difference is a multiple of $2\pi$.” Its declared supplier
`thm-sine-cosine-zero-sets-and-fundamental-period` proves the sine and cosine
zero sets and that $2\pi$ is the least positive *global common period*. A least
global period does not by itself classify fibres of the point map. Thus this is
an unsupported inference and inaccurate attribution, rather than merely a
missing repeated edge to a theorem whose stated clause already proves the
claim.

The result and its surjectivity argument remain correct. A short local repair
uses existing published material. Declare
`thm-sine-and-cosine-subtraction-formulas` and write: equality of the two pairs
gives

$$
\sin(s-t)=\sin s\cos t-\cos s\sin t=0,
\qquad
\cos(s-t)=\cos s\cos t+\sin s\sin t=1.
$$

The zero-set theorem gives $s-t=m\pi$. Its proved shift identity gives
$\cos(m\pi)=(-1)^m$, so the second equality forces $m$ even and
$s-t\in2\pi\mathbb Z$. The half-open interval then gives $s=t$. The published
addition-formula theorem is an equivalent adequate supplier. No new Phase-2
item or pair is needed.

Proof 3.1 of
`thm-real-line-mod-integers-is-homeomorphic-to-the-unit-circle` directly
invokes this affected injectivity clause after reducing representatives to
$[0,1)$. Its quotient descent, continuity, surjectivity, compactness and
Hausdorff arguments are sound. It is therefore an exact A-P downstream impact,
closed by the same local repair and revalidation rather than a second
independent mathematical defect.

## Bounded clears

The zero-set/period proof obtains all integer shifts, reduces a real parameter
to $[0,\pi)$, and correctly excludes $\pi$ as a common period. The harmonic-IVP
proof of the addition formulas and the parity specialization giving the
subtraction formulas supply the exact repair above.

The quotient definition proves the equivalence relation and exact fibres. The
compactness/path-connectedness proposition uses a surjective compact interval
and explicit affine paths. The open-arc lemma proves the saturation formula,
injectivity on intervals of length below one, and inverse continuity by an open
interval of radius at most half the remaining unit gap. The covering theorem
uses disjoint translated intervals of length $2/3$, and the universal-cover
corollary uses the simply connected convex real line. These arguments do not
spend the affected trigonometric injectivity clause.

These are bounded complete-item and used-interface reads. They do not certify
the full closures of the eight clear items.

## Exact active draft consumers

The four current draft consumers below were read in full. Each use is
load-bearing in the written proof, so the active run should retain a local
repair obligation until the two published A-P items are repaired or the short
fibre-classification argument above is supplied locally. This ledger records
published debt and impact evidence only; it does not alter draft decisions.

| Batch and page | Draft consumer and SHA-256 | Exact use |
|---|---|---|
| Batch 8, `fibrations-fiber-bundles-and-homotopy-exact-sequences-examples` | `ex-hopf-circle-fibration`, `2e5dce6c620bc59f774b11eb53cce16793247e0fe646cb20fde3388a97a70aae` | F7 and proof 1.3 use the quotient-to-geometric-circle homeomorphism to transfer the universal-cover/Hurewicz calculation and obtain the positive homotopy groups of the geometric circle. |
| Batch 8, same page | `ex-mobius-band-as-an-interval-bundle-with-monodromy`, `cff7d21a4b5434139f40f5a5895cfe6aeec259693699c334a3fa754a26ce55a3` | F9 and proof 1.2 use the homeomorphism to make $c([t])=\cos(2\pi t)$ a continuous quotient-circle coordinate and construct the finite partition/numerability input. |
| Batch 8, same page | `cex-a-surjective-map-need-not-be-a-fibration`, `e95c1cfc7cdf09e77131b48d450f03257482598f4a56017594db79a5d2684417` | F3 and proofs 1.1--1.2 use continuity, surjectivity and especially the exact equality-of-values modulo $\mathbb Z$ to define the quotient map and rule out a continuous lift. |
| Batch 15, `schwartz-space-and-the-plancherel-theorem` | `lem-periodic-continuous-functions-are-determined-by-their-fourier-coefficients`, `40f95aeca347fb3c51ea850bf76c58b3d532c250c075209c75e33a32006e8a4d` | F3 and proof 1.1 use onto/injective circle parametrization to characterize the cube endpoint fibres and descend a periodic function to the torus. This item also has a separately recorded integral/Fubini impact. |

The affected published path is therefore live in four current consumers, but
it has a complete two-line local repair from already-published suppliers. It
does not require a new frontier pair.
