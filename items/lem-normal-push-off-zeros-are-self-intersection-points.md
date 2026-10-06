---
id: lem-normal-push-off-zeros-are-self-intersection-points
kind: lemma
title: "Normal push-off zeros are the self-intersection points"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [def-self-intersection-number-of-an-oriented-submanifold, def-local-oriented-intersection-sign, def-oriented-intersection-number, def-tubular-neighbourhood-of-an-embedded-submanifold, thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold, def-normal-and-conormal-bundles-of-an-embedded-submanifold, def-differential-of-a-smooth-map, def-embedded-submanifold-and-slice-chart, prop-a-vector-bundle-section-with-surjective-vertical-differential-at-every-zero-has-a-submanifold-zero-set, cor-a-smooth-section-can-be-perturbed-transverse-to-the-zero-section, def-transverse-embedded-submanifolds, prop-a-transverse-oriented-normal-bundle-orients-an-embedded-submanifold]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Ralph L. Cohen, Bundles, Manifolds, and Homotopy (author draft bookR4)"
      url: https://math.stanford.edu/~ralph/bookR4.pdf
      locator: "Chapter 8 (Tubular Neighborhoods, more on Transversality, and Intersection Theory) and Chapter 9 (Poincare Duality, Intersection theory, and Linking numbers) Sections 9.1-9.3, printed pp. 249-263, PDF pp. 260-274: Definition 9.3 and Theorems 9.4-9.5 (the intersection product is Poincare dual to the cup product and is represented by transverse intersections), Theorems 9.2 and Corollary 9.3 (the Thom class of a normal bundle is dual to the submanifold), Theorem 9.9, Corollaries 9.10-9.11 and Theorem 9.12 (self-intersection, nowhere-zero sections, Euler characteristic), and the representability remark after Theorem 9.5. The design register cites the earlier bookR3 numbering Sections 8.3-9.3, pp. 244-260; the recovered current draft bookR4 renumbers these sections, so the named results above are the binding locator."
    - title: "John W. Milnor and James D. Stasheff, Characteristic Classes (Princeton University Press, 1974; complete PDF)"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf
      locator: "Sec. 9 Oriented Bundles and the Euler Class (printed pp. 95-104); Sec. 10 The Thom Isomorphism Theorem (pp. 105-114); Sec. 11 Computations in a Smooth Manifold (pp. 115-137, the dual-class intersection calculus); Sec. 12 Obstructions (pp. 139-146)."
    - title: "Victor Guillemin and Alan Pollack, Differential Topology (Prentice-Hall, 1974; complete 236-page PDF)"
      url: https://www.math.auckland.ac.nz/~hekmati/Books/GP.pdf
      locator: "Ch. 2 Sec. 4, printed pp. 79-80 (the Mobius central curve and the RP^1 in RP^2 boundary example, mod two); Ch. 3 Sec. 3, printed pp. 107-118 (orientation number, factor order, and the exercise I(Delta,Delta)=chi(M))."
dependency_level: 1
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $M$ be an oriented boundaryless smooth $n$-manifold, $A^a\subseteq M$ a compact boundaryless oriented embedded submanifold with $2a=n$, $\varphi:D(\nu_A)\to M$ a normalized tubular embedding with identity normal differential and $s:A\to\nu_A$ a small smooth section, transverse to the zero section, with push-off $A_s=\varphi(s(A))$ as in [[def-self-intersection-number-of-an-oriented-submanifold]]. Then, as sets, $$A\cap A_s=\varphi(Z(s)),\qquad Z(s)=\{x\in A:s(x)=0\},$$ and the intersection is transverse at each of these points. Moreover the local oriented intersection sign of [[def-local-oriented-intersection-sign]] at $\varphi(x)$ equals the local zero index of $s$ at $x$: in oriented local coordinates of the tube in which $M$ is written as $T_xA\oplus\nu_{A,x}$ (tangent first) and the vertical derivative of $s$ at $x$ is the square matrix $J=\partial_\nu s_x$, one has $$\varepsilon_{(A,A_s)}(\varphi(x))=\operatorname{sign}\det J,$$ with the determinant sign computed in the orientations of $A$ and of $\nu_A$ fixed in [[def-self-intersection-number-of-an-oriented-submanifold]]. Orient $A_s$ by its parametrization from $A$. For $a=0$ the sign means the comparison of the supplied determinant rays: it equals the ambient point sign, not necessarily the unsigned empty-matrix determinant $+1$. The set and transversality conclusions also hold without orientations. Here the local zero index of a transverse section means the determinant-ray sign of its vertical differential. In particular the self-intersection points are precisely the transverse zeros of the push-off section, with signs as displayed.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, the oriented boundaryless $M$, the closed oriented embedded $A$ with $2a=n$, the tubular embedding $\varphi:D(\nu_A)\to M$, the small smooth section $s$ transverse to the zero section and the push-off $A_s=\varphi(s(A))$.

[F1] If a smooth section of a vector bundle has surjective vertical differential at every zero, then its zero set is an embedded submanifold whose normal direction is the vertical direction and whose codimension is the rank ([[prop-a-vector-bundle-section-with-surjective-vertical-differential-at-every-zero-has-a-submanifold-zero-set]], [[cor-a-smooth-section-can-be-perturbed-transverse-to-the-zero-section]]).

[F2] Two embedded submanifolds are transverse when their tangent spaces sum to the ambient tangent space at every intersection point; for the inclusion maps this is the transverse-embedded-submanifold condition ([[def-transverse-embedded-submanifolds]]).

[F3] The local oriented intersection sign of an ordered pair $(A,A_s)$ is the sign of the determinant comparing the product orientation of $T_pA\oplus T_pA_s$ with the ambient orientation, first factor first ([[def-local-oriented-intersection-sign]]).

[F4] The tube identifies the disc bundle diffeomorphically with a neighbourhood of $A$ and a section with its graph; a slice chart writes the total space as the ordered product of the tangent and normal directions ([[thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold]], [[def-embedded-submanifold-and-slice-chart]], [[def-differential-of-a-smooth-map]]).

## Proof

**Proof technique:** the tube identifies the push-off graph with a section graph, and the intersection sign is a determinant.

1.1 The sets. Because $s$ is small, $s(A)$ lies in the interior of the disc bundle, and $\varphi$ is injective on the disc bundle. For $p,q\in A$, $\varphi(p)=\varphi(s(q))$ holds iff $p=s(q)$ as points of the total space (with $p$ viewed as the zero vector over $p$), which forces $p=q$ and $s(p)=0$. Hence $A\cap A_s=\varphi(Z(s))$; transversality of $s$ to the zero section is exactly the statement that the vertical differential is surjective at each zero [F1], so the graph $A_s$ meets $A$ transversely there [F2] and by [F4] the tube is a slice chart in which the two submanifolds are the zero section and the graph of the local expression of $s$. [F1, F2, F4, given]

1.2 Local model. At $x\in Z(s)$ choose a slice chart of the tube with domain coordinates $(u,v)\in\mathbb R^a\oplus\mathbb R^a$ in which $A=\{v=0\}$, $\varphi$ is the identity chart, and the orientation of $M$ is the ordered product of the tangent orientation of $A$ and the normal orientation of $\nu_A$; this is the tangent-first convention of this pair ([[prop-a-transverse-oriented-normal-bundle-orients-an-embedded-submanifold]]). In these coordinates $A_s$ is the graph of $Ju+O(|u|^2)$, where $J=\partial_\nu s_x$ is the vertical derivative. The tangent space of $A_s$ at $x$ is spanned by the vectors $e_j+\sum_k J_{kj}e_{a+k}$; the map $T_xA\oplus T_xA_s\to T_xM$ written in the ordered ambient basis has matrix $\begin{pmatrix} I_a & I_a\\ 0 & J\end{pmatrix}$, whose determinant is $\det J$ (the matrix is square because $2a=n$). By [F3] the sign $\varepsilon_{(A,A_s)}(\varphi(x))$ is the sign of this determinant, proving the displayed identity, including the factor order (first $A$, then $A_s$). [F3, F4, algebra]

2.1 For $a=0$, each point of $A_s=A$ carries the transported point sign $\epsilon_A$. The local ordered intersection sign is $\epsilon_A^2\epsilon_M=\epsilon_M$. The tangent-first normal orientation is $\epsilon_\nu=\epsilon_M\epsilon_A$, so the vertical map has ray sign $\epsilon_A\epsilon_\nu=\epsilon_M$ as well. The set and transversality arguments in step 1.1 need no orientations. [F3, step 1.1, algebra]

3.1 Global statement. Adding the finitely many points of $Z(s)$ (finite because $A$ is compact and the zeros of a transverse section are isolated) gives $I(A,A_s)=\sum_{x\in Z(s)}\operatorname{sign}\det\partial_\nu s_x$, which is the self-intersection number of [[def-self-intersection-number-of-an-oriented-submanifold]]. The definition of $A\cdot A$ uses only transverse push-off sections, so no perturbation of a non-transverse section is needed here. [F1, step 1.1, step 1.2, step 2.1, algebra] ∎

## Remarks

Independence of the count from the choice of small transverse section is established in [[thm-self-intersection-is-the-euler-number-of-the-normal-bundle]], using this local calculation.
