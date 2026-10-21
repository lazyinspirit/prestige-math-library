---
id: thm-smooth-4-ball-embedded-in-s4-has-standard-complement
kind: theorem
title: A standard smooth ball embedded in the standard four-sphere has standard complement
status: draft
origin: session
deps: [lem-isotopies-of-a-compact-four-ball-in-the-standard-sphere-extend-in-zf, thm-euclidean-inverse-function-theorem]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Cochran, Davis and Ray, Injectivity of satellite operators in knot concordance, Proposition 3.2, printed pages 7–8
      url: https://arxiv.org/pdf/1205.5058v3
---

## Statement

Let $f:B^4\hookrightarrow S^4$ be a smooth embedding of the closed standard four-ball into the standard smooth four-sphere. Then $\overline{S^4\setminus f(B^4)}$ is diffeomorphic to the standard four-ball. More precisely, there is such a diffeomorphism $h$ satisfying $h(f(x))=x$ for $x\in\partial B^4$; this parametrized boundary assertion does not prescribe the orientation of $h$. No choice principle or smooth four-dimensional Poincaré or general smooth Schoenflies assertion is assumed.

## Statement references

[[lem-isotopies-of-a-compact-four-ball-in-the-standard-sphere-extend-in-zf]]

[CDR, Proposition 3.2](https://arxiv.org/pdf/1205.5058v3)

## Facts & Assumptions

**Given:** The smooth embedding of the whole standard ball, with its supplied parametrization.

[F1] A smooth isotopy of the compact four-ball in the standard four-sphere extends to an ambient isotopy without a choice assumption. [[lem-isotopies-of-a-compact-four-ball-in-the-standard-sphere-extend-in-zf]]

[F2] The Euclidean inverse function theorem makes a full-rank local embedding locally invertible. [[thm-euclidean-inverse-function-theorem]]

## Proof

1.1 For any fixed $0<\epsilon<1$, the maps $f_s(x)=f(((1-s)+s\epsilon)x)$ form a smooth isotopy of ball embeddings, with strictly positive scale throughout. By [F1] extend it ambiently. Its endpoint takes the originally embedded ball, with every point of its parametrization, to $f(\epsilon B^4)$. Thus one may work with an arbitrarily small ball about $f(0)$ without taking the inadmissible scale-zero limit of embeddings. [F1, given, construct]

2.1 Choose a standard stereographic chart $\varphi:S^4\setminus\{q\}\to\mathbb R^4$, with $q\ne f(0)$, and translate its coordinates so $\varphi(f(0))=0$. For small $\epsilon$, put $g(x)=\varphi(f(\epsilon x))$ and $L=D(\varphi f)(0)$, an invertible matrix. Let $\sigma>0$ be its least singular value. Continuity of the derivative permits $\epsilon$ so small that $\|Dg(x)-\epsilon L\|<\epsilon\sigma/2$ on $B^4$. For $0\le s\le1$ set $g_s(x)=(1-s)g(x)+s\epsilon Lx$. On the convex ball, integration along a segment gives $|g_s(x)-g_s(y)|\ge\epsilon\sigma|x-y|/2$, so every slice is injective; its derivative is invertible by the same bound. Compactness and [F2] therefore make each slice a smooth embedding. The images lie in the stereographic chart and depend smoothly on $s$, so [F1] extends this isotopy and takes $f(\epsilon x)$ to $\varphi^{-1}(\epsilon Lx)$ pointwise in $x$. [F1, F2, step 1.1, construct, algebra]

3.1 Apply Gram–Schmidt to the four columns of $L$, writing $L=QU$ with $Q$ orthogonal and $U$ upper triangular with strictly positive diagonal. The matrices $L_s=Q((1-s)U+sI)$ are invertible, since their triangular factors have positive diagonal. Thus $x\mapsto\varphi^{-1}(\epsilon L_sx)$ is another smooth isotopy of compact ball embeddings. Extend it by [F1]. Composing the three ambient endpoint diffeomorphisms constructed so far gives a diffeomorphism $H:S^4\to S^4$ such that $H(f(x))=\varphi^{-1}(\epsilon Qx)$ for every $x\in B^4$. In particular the image of the whole given ball is a round coordinate ball, not merely a hypersphere with an unspecified side. [F1, step 2.1, construct, algebra]

4.1 In the compactified stereographic coordinates, the complement of the open radius-$\epsilon$ ball is carried to $B^4$ by $y\mapsto\epsilon y/|y|^2$ for $|y|\ge\epsilon$, with the point at infinity mapped to zero. This is a diffeomorphism: in the standard chart $w=y/|y|^2$ at infinity it is the linear map $w\mapsto\epsilon w$, and its inverse off zero is the same inversion formula with the appropriate scale. Compose it with $H$ and then $Q^{-1}$. On $f(\partial B^4)$ the result sends $f(x)$ to $Q^{-1}(Qx)=x$. This proves the stated complement and its parametrized boundary conclusion. Only the already standard embedded side was shrunk; no assertion about an arbitrary smooth embedded three-sphere or a contractible four-manifold was used. [step 3.1, construct, algebra] ∎
