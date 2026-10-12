---
id: lem-corner-adapted-strong-approximations-remain-in-the-same-orthant
kind: lemma
title: "Corner-adapted strong approximations preserve orthant sides"
status: draft
origin: session
deps: [def-relative-smooth-triangulation-and-projection-preserving-fitting, lem-piecewise-smooth-embeddings-are-stable-under-fine-c-one-approximation, cor-vector-valued-ftc-and-lipschitz-bound, thm-extreme-value-metric]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "James R. Munkres, Elementary Differential Topology, revised edition (1966)"
      url: https://www.maths.ed.ac.uk/~v1ranick/papers/munkresdiff.pdf
      locator: "§9.8(d)–(e), printed96, distinguishes affine-plane preservation from the unsupported half-plane extension; local additional orthant argument below"
---

## Statement

Let $F:K\to[0,\infty)^c\times\mathbb R^{n-c}$ be a finite whole-star smooth embedding, and write $\rho_iF$ for its first $c$ coordinate functions. Assume for each original simplex $\sigma$ and $i$ that $Z_{i,\sigma}=\{x\in\sigma:\rho_iF(x)=0\}$ is a union of faces and, at every $b\in Z_{i,\sigma}$, the linear form $d(\rho_iF)_b$ on the tangent cone of $\sigma$ is nonnegative with zero set precisely the tangent cone of $Z_{i,\sigma}$. These are the adapted face/tangent conditions, not merely simplex rank conditions.

There is $\delta>0$ such that every strong $\delta$-approximation $G$ preserving each of these coordinate planes on the specified zero subcomplexes maps all of $K$ into the same closed orthant and has exactly the same coordinate zero sets. It is an embedding for this choice of $\delta$. Thus plane-preserving fitting and extension can be used in corner charts when the initial pieces satisfy these adapted face conditions.

## Facts & Assumptions

**Given:** the finite embedding, face/tangent hypotheses and coordinate-plane constraints in the Statement.

[F1] Whole-star smooth embeddings are stable under sufficiently small strong approximation ([[lem-piecewise-smooth-embeddings-are-stable-under-fine-c-one-approximation]]).

[F2] Segment integration bounds changes by derivative norm times segment length, and continuous positive quantities on compact sets have positive minima ([[cor-vector-valued-ftc-and-lipschitz-bound]], [[thm-extreme-value-metric]]).

[F3] The strong approximation and corner-face notions are [[def-relative-smooth-triangulation-and-projection-preserving-fitting]].

## Proof

1.1 Fix $i$ and an original simplex $\sigma$. Near a point $b$ in the relative interior of one face of $Z_{i,\sigma}$, all faces of $Z_{i,\sigma}$ met in a sufficiently small neighbourhood contain that face. The assumed zero cone is convex, since it is the intersection of a convex tangent cone with the kernel of a nonnegative linear form. It therefore equals the cone of one face of $\sigma$ locally: a union of faces of a polyhedral cone which is itself convex is a face when it is the zero set of a supporting form. The supporting form is strictly positive on every generating ray outside that face. Its finitely many values on normalized such generators have positive minimum. By continuity this lower bound persists on a neighbourhood of $b$. Compactness of the finitely many zero faces gives finitely many such neighbourhoods and positive lower bounds. [F2, given, algebra]

2.1 Consequently there is $a>0$ with $\rho_iF(x)\ge a\operatorname{dist}(x,Z_{i,\sigma})$ on $\sigma$ whenever the zero set is nonempty. To justify this quantitatively near a zero face, project barycentric coordinates to that face by deleting the coordinates outside it and renormalizing those inside it. On a neighbourhood where the sum of the retained coordinates is at least $1/2$, the segment to this projected point has length at most a fixed constant times the distance to the face. The outward displacement is a nonnegative combination of the nonzero generating directions. Step 1.1's positive supporting-form bound controls that displacement from below; integrating along the segment, after shrinking the neighbourhood so the derivative varies by less than half the lower bound, gives the displayed lower bound. Finitely many faces give one constant. Away from these neighbourhoods the ratio $\rho_iF(x)/\operatorname{dist}(x,Z_{i,\sigma})$ is continuous and positive on a compact set, so it too has a positive minimum. [F2, step 1.1]

3.1 For $x\in\sigma$, choose a closest point $z\in Z_{i,\sigma}$; it exists by compactness, and the segment $zx$ lies in the convex simplex. Since $\rho_iG(z)=\rho_iF(z)=0$, segment integration of the piecewise smooth difference gives $|\rho_iG(x)-\rho_iF(x)|\le\delta|x-z|=\delta\operatorname{dist}(x,Z_{i,\sigma})$. Here the segment has finitely many refined pieces and [F2] is applied and added over them. Choose $\delta<a/2$. Then $\rho_iG(x)\ge(a/2)\operatorname{dist}(x,Z_{i,\sigma})$, with equality to zero possible only in the same zero set. If the zero set is empty, $\rho_iF$ has a positive compact minimum, and the $C^0$ error less than half this minimum makes $\rho_iG$ positive everywhere on that simplex. [F2, F3, step 2.1]

4.1 Take the minimum of these positive bounds over the finitely many coordinates and simplices, and also impose [F1]'s embedding bound. All coordinate functions of $G$ are then nonnegative, their zero sets are precisely the prescribed ones, and $G$ is an embedding. This is the asserted orthant preservation. It supplies the extra side-control argument which is not implied merely by the zero-component extension formula. [F1, step 3.1] ∎
