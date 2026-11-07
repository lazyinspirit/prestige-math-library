---
id: lem-finite-dirichlet-ideal-vertex-cycles-are-parabolic
kind: lemma
title: Finite Dirichlet ideal-vertex cycles are parabolic
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
- lem-cofinite-dirichlet-domains-have-finitely-many-sides
- lem-discrete-fuchsian-orbits-have-locally-finite-dirichlet-tilings
- lem-upper-half-plane-metric-and-polygon-area-calculus
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
  - title: Michael Kapovich, Hyperbolic Manifolds and Discrete Groups, §§4.10–4.11
      (Dirichlet domains and face/cycle background)
    url: https://www.math.ucdavis.edu/~kapovich/RFG/book.pdf
  - title: Carl Ludwig Siegel, Some Remarks on Discontinuous Groups, Annals of Mathematics
      46 (1945), 708–718 (bibliographic source; full-text reading not claimed here)
    url: https://doi.org/10.2307/1969206
  - title: William P. Thurston, The Geometry and Topology of Three-Manifolds, electronic
      version1.1 (2002)
    url: https://library.slmath.org/books/gt3m/PDF/Thurston-gt3m.pdf
    locator: 'Sections2.1-2.4 and3.8-3.9: models and the full two-dimensional ideal-triangle
      horocycle-cycle treatment. The finite-area⇒finite-polygon implication here is
      independently reconstructed, not imported.'
dependency_level: 4
---

## Statement

Let $\Delta\le\operatorname{PSL}_2(\mathbb R)$ be discrete, let $p\in\mathbb H$ have trivial stabilizer, and suppose $\Delta\backslash\mathbb H$ has finite area. Let $D$ be its Dirichlet domain centered at $p$. Every ideal closure point of $D$ is fixed by a nonidentity parabolic element of $\Delta$. Its full stabilizer is an infinite cyclic group of parabolic translations. More precisely, after an orientation-preserving normalization sending that point to infinity, the stabilizer consists of $z\mapsto z+n\ell$ for $n\in\mathbb Z$ and some $\ell>0$. No finite-generation or torsion-free assumption is made.

## Statement references

[[lem-cofinite-dirichlet-domains-have-finitely-many-sides]]

[[lem-discrete-fuchsian-orbits-have-locally-finite-dirichlet-tilings]]

[[lem-upper-half-plane-metric-and-polygon-area-calculus]]

## Facts & Assumptions

[F1] The domain is a finite-sided convex geodesic polygon with finitely many ideal points and finite area. [[lem-cofinite-dirichlet-domains-have-finitely-many-sides]]

[F2] A regular Dirichlet side has exactly one adjacent tile and a group side pairing. These pairings match the boundary sides with opposite interior sides. The center stabilizer is trivial and the tiling is locally finite in $\mathbb H$. [[lem-discrete-fuchsian-orbits-have-locally-finite-dirichlet-tilings]]

[F3] The distance formula is $\cosh d(x+iy,u+ia)=(x^2+y^2-2xu+u^2+a^2)/(2ya)$. Geodesics ending at infinity are vertical lines. An orientation-preserving real Möbius map fixing infinity is $z\mapsto\lambda z+b$ with $\lambda>0$. [[lem-upper-half-plane-metric-and-polygon-area-calculus]]

## Proof

**Given:** The data in the Statement and one ideal closure point $v$ of $D$. All coordinate and side choices concern finite sets; no choice axiom is used.

1.1 Conjugate the group and its domain by an orientation-preserving map sending $v$ to infinity, and keep the names $D,\Delta,p$ for the new data. Every nonvertical geodesic boundary is a semicircle of finite height. Its chosen half-plane must contain the exterior near infinity, since infinity is in the closure of $D$. Above the heights of all the finitely many such circles, only the vertical-side constraints remain. Their intersection is an interval in the real coordinate times a vertical half-line. This interval cannot be unbounded, since the resulting region would have infinite hyperbolic area; it cannot have zero width, since $D$ has nonempty interior. Thus the ideal corner is exactly a positive-width vertical strip between two adjacent vertical boundary rays, above a sufficiently large height. The same conclusion holds at each of the finitely many ideal points after its own normalization. [F1, F2, F3, construct, algebra]

2.1 Write $p=u+ia$. If an orbit point $p'=u'+ia'$ had $a'>a$, the formula in F3 would make $\cosh d(z,p)-\cosh d(z,p')$ positive for all sufficiently large Euclidean $|z|$. After multiplication by $2y$, its quadratic coefficient on $x^2+y^2$ is $1/a-1/a'>0$, whereas the remaining terms are linear in $x$ or constant. Such points could not satisfy the Dirichlet inequality against $p'$. This contradicts infinity being an ideal closure point. Hence no orbit point has height greater than $a$. [F3, step 1.1, algebra]

2.2 For each ideal vertex $w$ of $D$, fix an orientation-preserving real Möbius coordinate $N_w$ sending $w$ to infinity. There are finitely many vertices, so these are finite choices; explicitly one may take $N_w(z)=-1/(z-w)$ for finite $w$ and the identity for $w=\infty$. In this coordinate, designate the corner's left and right vertical sides by their increasing real coordinates. Cross its right side into the unique adjacent tile supplied by F2. That tile has an ideal corner at the same ideal point, coming from some ideal vertex $w'$ of $D$, and the common boundary is the adjacent tile's left side. The normalized transition between the two vertex coordinates fixes infinity and is a positive affine map by F3, so preserves this left-to-right convention. Crossing the left side reverses the operation. Thus crossing the right side gives a permutation of the finite set of oriented ideal-corner types. A type records the vertex and its designated left and right sides, so no ordering choice or cusp assumption is hidden here. [F1, F2, F3, step 1.1, construct, algebra]

3.1 Any $h\in\Delta$ fixing infinity has the affine form in F3. If its scale $\lambda$ were different from one, replace $h$ by $h^{-1}$ if necessary to get $\lambda>1$. Then $hp$ would have height $\lambda a>a$, contradicting step 2.1. Thus the whole stabilizer at infinity consists of translations; the remaining task is to prove it is nontrivial. [F3, step 2.1, algebra]

4.1 Starting at the normalized vertex $v=\infty$, follow this permutation to its first return, which occurs after finitely many crossings. Let $h$ be the product of the successive group face pairings. It sends the original vertex to itself, so fixes infinity. In the common infinity coordinate, the successive corner strips occupy consecutive intervals to the right. At each crossing the new left boundary equals the previous right boundary, and each interval has strictly positive width, because the coordinate transition has positive scale. The finitely many strips can all be compared above one common height. Therefore $h$ sends the starting left boundary to a vertical line strictly to its right, by the sum of those positive widths. In particular $h$ is nonidentity. By step 3.1 it is a nonzero translation, hence parabolic. [F2, F3, step 3.1, step 2.2, algebra]

5.1 Let $L\subseteq\mathbb R$ be the translation parameters of the full stabilizer. It is an additive subgroup and contains the positive translation obtained in step 4.1. Discreteness of $\Delta$ isolates zero in $L$, so there is $\epsilon>0$ with no element of $L$ in $(-\epsilon,\epsilon)\setminus\{0\}$. Distinct elements of $L$ are consequently separated by at least $\epsilon$. Below any fixed positive element $b\in L$, there are finitely many positive elements, so there is a least one $\ell>0$. For any $t\in L$, division by $\ell$ leaves a remainder in $[0,\ell)$ that still belongs to $L$, so the remainder is zero. Hence $L=\ell\mathbb Z$. Undoing the initial conjugation proves the complete stabilizer statement at every ideal point. [step 3.1, step 4.1, algebra] ∎

## Reading and reconstruction limits

The finite face-pairing language is checked against Kapovich §§4.10–4.11, printed pp.75–77 (PDF pp.96–98), read visually in the retrieved full book. No general Poincaré polygon theorem or its parabolic-cycle condition is imported. The finite corner permutation, nonidentity side-pairing product and exclusion of dilation are proved directly above. The Siegel citation is presently bibliographic only; no full-text or proof reading is claimed. The two local suppliers provide all metric and tiling premises. The primary author integrated this local proof with the staged model, tiling and compact-cusp suppliers. Exact reading of two retrieved primary treatments is recorded in the pair source record. Native authoring and independent acceptance remain separate; no acceptance stamp is supplied here.
