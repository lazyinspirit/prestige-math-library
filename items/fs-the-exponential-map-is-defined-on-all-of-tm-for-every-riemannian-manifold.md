---
id: "fs-the-exponential-map-is-defined-on-all-of-tm-for-every-riemannian-manifold"
kind: "false-statement"
title: "The exponential map is always defined on all of TM"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["def-countable-choice", "prop-open-subsets-of-euclidean-space-have-the-standard-smooth-structure", "def-riemannian-metric-and-riemannian-manifold", "prop-christoffel-formula-for-the-levi-civita-connection", "prop-coordinate-geodesic-equation", "def-domain-and-exponential-map-of-a-connection", "prop-components-of-a-topological-manifold-are-open-and-at-most-countable", "prop-an-open-subset-of-a-smooth-manifold-has-a-canonical-restricted-smooth-structure", "cor-connected-subsets-of-the-line", "thm-continuous-image-of-a-connected-space", "thm-hopf-rinow"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry, Definition 15.1.1, Example 15.1.3, Definition 17.1.2, and Theorem 19.2.1, pp. 113--114, 127--128, and 141--144
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
proof_strategy: "direct"
---

## Statement

**False claim:** for every Riemannian manifold without boundary, the
exponential map is defined on all of $TM$; equivalently, its domain satisfies
$\mathcal E=TM$.

The current library interfaces for maximal geodesics and exponential maps
assume $\mathrm{AC}_\omega$. Under that assumption, the correct statement is
componentwise: the exponential map is defined on the entire tangent bundle of
each nonempty connected component if and only if that component is
geodesically complete.

## Facts & Assumptions

**Given:** The open interval $M=(-1,1)\subset\mathbb R$, its global coordinate $x$, the Euclidean metric $g=dx^2$ and its Levi--Civita connection, the point $p=0$, and the tangent vector $v=\partial_x|_0\in T_0M$.

[A1] [[def-countable-choice]] is the assumed $\mathrm{AC}_\omega$.

[F1] [[prop-open-subsets-of-euclidean-space-have-the-standard-smooth-structure]] makes $M$ a boundaryless smooth one-manifold.

[F2] [[def-riemannian-metric-and-riemannian-manifold]] gives the criterion for $g$ to be a Riemannian metric.

[F3] [[prop-christoffel-formula-for-the-levi-civita-connection]] computes the Levi--Civita symbols from the coordinate metric coefficients.

[F4] [[prop-coordinate-geodesic-equation]] characterizes geodesics by the coordinate equations.

[F5] Under [A1], [[def-domain-and-exponential-map-of-a-connection]] assigns to $v\in T_pM$ its unique maximal geodesic $\gamma_{p,v}:I_{p,v}\to M$ and puts $v\in\mathcal E$ exactly when $1\in I_{p,v}$.

[F6] [[prop-components-of-a-topological-manifold-are-open-and-at-most-countable]] makes every connected component of a manifold open.

[F7] [[prop-an-open-subset-of-a-smooth-manifold-has-a-canonical-restricted-smooth-structure]] gives an open subset the restricted smooth structure.

[F8] Every real interval is connected and the continuous image of a connected space is connected ([[cor-connected-subsets-of-the-line]], [[thm-continuous-image-of-a-connected-space]]).

[F9] Under [A1], [[thm-hopf-rinow]] says for a nonempty connected boundaryless Riemannian manifold that geodesic completeness is equivalent to $\mathcal E_q=T_qM$ for every base point $q$.

## Refutation

**Proof technique:** direct.

1.1 The interval $M$ is open in $\mathbb R$, so [F1] gives its stated smooth one-manifold structure without boundary. In the coordinate $x$, the tensor $g=dx^2$ has the constant one-by-one matrix $(1)$, which is smooth, symmetric, and positive definite. Thus [F2] makes $(M,g)$ a Riemannian manifold in the class quantified over by the false claim. [F1, F2, given]

2.1 Since the sole metric coefficient of the Riemannian manifold from step 1.1 is $g_{11}=1$, all of its derivatives vanish, and [F3] gives $\Gamma^1{}_{11}=0$. The curve $\gamma:(-1,1)\to M$ given by $\gamma(t)=t$ has coordinate derivatives $\dot x=1$ and $\ddot x=0$. It therefore satisfies the equation in [F4], so it is a geodesic with $\gamma(0)=0$, $\dot\gamma(0)=v$, and constant speed one. [F3, F4, step 1.1, given, algebra]

3.1 Apply [F5] to the Levi--Civita connection and let $\gamma_{0,v}:I_{0,v}\to M$ be its unique maximal geodesic. Uniqueness makes $\gamma_{0,v}$ and the geodesic of step 2.1 agree on their common interval. Their union is therefore a geodesic on the interval $I_{0,v}\cup(-1,1)$, so maximality forces $(-1,1)\subseteq I_{0,v}$ and $\gamma_{0,v}(t)=t$ there. If $1\in I_{0,v}$, continuity in the coordinate $x$ would give $x(\gamma_{0,v}(1))=\lim_{t\uparrow1}t=1$, impossible because $x(M)=(-1,1)$. The same argument at $-1$ excludes $-1\in I_{0,v}$. Since $I_{0,v}$ is an interval containing $0$, it cannot contain a time beyond either excluded endpoint. Hence $I_{0,v}=(-1,1)$. [F5, step 2.1]

4.1 In particular $1\notin I_{0,v}$, so [F5] gives $v\notin\mathcal E$, although $v\in T_0M\subset TM$. Consequently $\mathcal E\ne TM$ for this explicit Riemannian manifold, which refutes the universal claim. [F5, step 3.1]

5.1 Step 4.1 shows that the unrestricted universal assertion needs a qualification. For the exact qualification in the Statement, let $C$ be a nonempty connected component of any boundaryless Riemannian manifold $N$. By [F6], $C$ is open, so [F7] gives its restricted smooth structure; restriction of the positive-definite tensor makes it a connected boundaryless Riemannian manifold. If $\sigma:I\to N$ is a geodesic whose initial point lies in $C$, then [F8] makes $\sigma[I]$ connected, so maximality of the connected component forces $\sigma[I]\subseteq C$. Conversely a geodesic in $C$ is a geodesic in $N$ because the connection and geodesic equation restrict on the open subset. Thus any extension in one manifold is an extension in the other, and uniqueness and maximality in [F5] show that the two maximal intervals agree. Consequently the ambient domain satisfies $\mathcal E_N\cap TC=TC$ exactly when the exponential domain of $C$ is all of $TC$. Applying [F9] to $C$ proves both directions of the componentwise corrected statement. [A1, F5, F6, F7, F8, F9, step 4.1]

6.1 The empty manifold has $TM=\mathcal E=\varnothing$ and therefore is not a counterexample; the corrected componentwise statement has no nonempty component to test. In dimension zero every tangent vector is zero and its geodesic is constant and global, so the false claim happens to hold there. The witness above is one-dimensional, nonempty, and uses the nonzero unit vector $v$; the degenerate zero vector remains in the exponential domain. Its maximal domain is the open interval $(-1,1)$, so time $1$ is an excluded finite endpoint rather than an included-endpoint convention. Assumption [A1] is used only through the current maximal-geodesic/exponential supplier [F5] and the equivalence supplier [F9]; the displayed manifold, vector, curve, Christoffel calculation, and extension obstruction are explicit and make no choices. The original claim contains no biconditional, while step 5.1 verifies both directions of the corrected one. [A1, F5, F9, step 2.1, step 3.1, step 4.1, step 5.1] ∎

## Source locators

- Datar, Definition 15.1.1 and Example 15.1.3, printed pp. 113--114 (PDF pp. 121--122), gives the coordinate geodesic equation and identifies Euclidean geodesics as straight lines.
- Datar, Definition 17.1.2, printed pp. 127--128 (PDF pp. 135--136), defines $\mathcal E$ by existence through time one and defines the exponential map there.
- Datar, Theorem 19.2.1 and its complete proof, printed pp. 141--144 (PDF pp. 149--152), includes the equivalence of geodesic completeness and global fibre exponential domains. The source does not state the open-interval counterexample above and does not discuss $\mathrm{AC}_\omega$; the witness, maximal-interval proof, componentwise formulation, and choice bookkeeping are supplied locally.
