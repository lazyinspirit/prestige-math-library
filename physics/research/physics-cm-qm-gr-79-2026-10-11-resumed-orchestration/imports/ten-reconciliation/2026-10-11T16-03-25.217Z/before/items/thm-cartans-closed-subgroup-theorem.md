---
id: thm-cartans-closed-subgroup-theorem
kind: theorem
title: Cartan closed subgroup theorem
status: published
origin: pipeline
pipeline_run: phase-2-next-21
deps: [def-countable-choice, cor-the-exponential-map-is-a-local-diffeomorphism-at-zero, thm-baker-campbell-hausdorff, def-baker-campbell-hausdorff-series, lem-local-convergence-of-the-baker-campbell-hausdorff-series, prop-exponential-scales-one-parameter-subgroups, thm-smooth-inverse-function-theorem-on-manifolds, lem-finite-dimensional-subspace-admits-a-linear-projection-without-choice, cor-bolzano-weierstrass-in-rn, def-embedded-submanifold-and-slice-chart, def-immersed-embedded-and-closed-lie-subgroup, prop-the-lie-algebra-of-a-lie-subgroup-is-a-lie-subalgebra]
landmark: true
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: John M. Lee, Introduction to Smooth Manifolds, 2nd ed.
      url: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf
      locator: Theorem 20.12 and complete proof, printed pages 523–525
    - title: Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed.
      url: https://www.math.stonybrook.edu/~aknapp/download/Beyond2.pdf
      locator: Chapter I §10, quotient and closed-subgroup discussion, printed page 77
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement

Assume $\mathrm{AC}_\omega$. Every subgroup $H$ of a finite-dimensional real
Lie group $G$ that is closed as a subset of $G$ has a unique smooth structure
making it an embedded Lie subgroup of $G$.

The countable-choice assumption is required by the currently available local
exponential and BCH interfaces and is used once more to select a sequence in
the local transverse contradiction. No connectedness assumption is made.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a finite-dimensional real Lie group $G$, and a subgroup $H\le G$ that is closed in $G$.

[A1] $\mathrm{AC}_\omega$ is countable choice. [[def-countable-choice]].

[F1] The exponential restricts to a diffeomorphism from a neighborhood of $0\in\mathfrak g$ onto an identity neighborhood in $G$. [[cor-the-exponential-map-is-a-local-diffeomorphism-at-zero]].

[F2] Locally, $\log(\exp X\exp Y)=\operatorname{BCH}(X,Y)$; the BCH series has linear term $X+Y$ and its terms of degree at least two converge uniformly on smaller balls. [[thm-baker-campbell-hausdorff]], [[def-baker-campbell-hausdorff-series]], [[lem-local-convergence-of-the-baker-campbell-hausdorff-series]].

[F3] Along a fixed line, $(\exp Z)^n=\exp(nZ)$ for every integer $n$. [[prop-exponential-scales-one-parameter-subgroups]].

[F4] A finite-dimensional subspace has a linear complement, and a smooth map with invertible differential has a smooth local inverse. [[lem-finite-dimensional-subspace-admits-a-linear-projection-without-choice]], [[thm-smooth-inverse-function-theorem-on-manifolds]].

[F5] A bounded sequence in a finite-dimensional real coordinate space has a convergent subsequence. [[cor-bolzano-weierstrass-in-rn]].

[F6] Slice charts define embedded submanifolds, and the tangent algebra of an immersed Lie subgroup is a Lie subalgebra. [[def-embedded-submanifold-and-slice-chart]], [[prop-the-lie-algebra-of-a-lie-subgroup-is-a-lie-subalgebra]].

## Proof

**Proof technique:** direct exponential-slice construction.

1.1 Put $\mathfrak g=T_eG$ and define $$\mathfrak h=\{X\in\mathfrak g:\exp(tX)\in H\text{ for every }t\in\mathbb R\}.$$ This set contains $0$ and is closed under real scalar multiplication. If $X,Y\in\mathfrak h$ and $t\in\mathbb R$, then for all sufficiently large positive integers $n$, [F2] gives $$\exp(tX/n)\exp(tY/n)=\exp Z_n,\qquad Z_n=\operatorname{BCH}(tX/n,tY/n).$$ Both factors lie in $H$. The homogeneous expansion and uniform convergence in [F2] give $nZ_n\to t(X+Y)$. By [F3], $\exp(nZ_n)=(\exp Z_n)^n\in H$; closedness of $H$ gives $\exp(t(X+Y))\in H$. Since $t$ was arbitrary, $X+Y\in\mathfrak h$. Thus $\mathfrak h$ is a linear subspace. [F2, F3, algebra]

1.2 Choose a complement $\mathfrak b$ with $\mathfrak g=\mathfrak h\oplus\mathfrak b$ by [F4]. The smooth map $$\Psi:\mathfrak h\times\mathfrak b\longrightarrow G,\qquad \Psi(X,Y)=\exp X\exp Y,$$ has differential $(X,Y)\mapsto X+Y$ at $(0,0)$, an isomorphism. By [F4], after shrinking around $(0,0)$ it is a diffeomorphism onto an identity neighborhood. [F1, F4, algebra]

2.1 We claim that some exponential neighborhood $U\subseteq\mathfrak g$ satisfies $$H\cap\exp U=\exp(U\cap\mathfrak h).$$ The inclusion from right to left follows from the definition of $\mathfrak h$. If no such neighborhood existed, take a nested sequence of coordinate balls $U_n$ shrinking to $0$, all inside the injectivity domain in [F1] and with $\exp U_n$ inside the image in step 1.2. By [A1], select $$h_n\in(H\cap\exp U_n)\setminus\exp(U_n\cap\mathfrak h).$$ Write $h_n=\exp X_n\exp Y_n$ using the inverse in step 1.2. Then $(X_n,Y_n)\to(0,0)$, $X_n\in\mathfrak h$, and $\exp Y_n\in H$. For all sufficiently large $n$, $Y_n\ne0$: otherwise injectivity of the common exponential chart would put $h_n$ in $\exp(U_n\cap\mathfrak h)$. [A1, F1, step 1.2, assume-contra]

3.1 Fix a norm on $\mathfrak b$, put $c_n=\lVert Y_n\rVert$, and discard the finitely many zero terms. The unit vectors $c_n^{-1}Y_n$ have a convergent subsequence by [F5]; relabel it so that $c_n^{-1}Y_n\to Y\in\mathfrak b$ with $\lVert Y\rVert=1$. For arbitrary $t\in\mathbb R$, choose the integer $k_n=\lfloor t/c_n\rfloor$. Then $k_nc_n\to t$, so $k_nY_n\to tY$. By [F3], $$\exp(k_nY_n)=(\exp Y_n)^{k_n}\in H.$$ Closedness gives $\exp(tY)\in H$. Since this holds for every $t$, $Y\in\mathfrak h\cap\mathfrak b=\{0\}$, contradicting $\lVert Y\rVert=1$. The claim in step 2.1 follows. [F3, F5, step 2.1, discharge-contradiction]

3.2 Choose a linear coordinate isomorphism $E:\mathfrak g\to\mathbb R^m$ carrying $\mathfrak h$ to $\mathbb R^k\times\{0\}$. By step 2.1, the chart $E\circ\log$ on $\exp U$ sends $H\cap\exp U$ to the coordinate slice $E(U)\cap(\mathbb R^k\times\{0\})$. For each $h\in H$, left translation carries this chart to a slice chart at $h$ because $L_h(H)=H$. Hence [F6] makes $H$ an embedded submanifold with its subspace topology. [F1, F6, step 2.1, construct]

4.1 Ambient multiplication and inversion preserve $H$. In the slice charts from step 3.2 their restrictions have smooth coordinate representatives, so they make $H$ a Lie group and its inclusion into $G$ a smooth embedded homomorphism. Its tangent space at $e$ is $\mathfrak h$, and [F6] confirms that this space is bracket closed. [F6, step 3.2, algebra]

5.1 Any other smooth structure making the same subset $H$ an embedded Lie subgroup has the same subspace topology by definition. In every ambient slice chart from step 3.2, both intrinsic structures use the restriction to the same Euclidean slice, so the identity between them is locally a diffeomorphism and hence globally a diffeomorphism. This proves uniqueness. The cases $H=\{e\}$, $H=G$, dimensions zero and one, and disconnected $H$ are included. A subgroup contains the identity, so the empty case cannot occur; no metric, nondegeneracy, manifold-boundary, or interval-endpoint hypothesis occurs. Choice is used exactly as stated in [A1] and through [F1]–[F3]. [A1, F6, step 3.2, step 4.1] ∎
