---
id: thm-l2-peter-weyl-orthonormal-basis
kind: theorem
title: The normalized matrix coefficients form an orthonormal basis of L2(K)
deps:
- thm-schurs-lemma-for-unitary-representations
- lem-compact-group-matrix-coefficients-separate-points
- thm-uniform-peter-weyl-density
- def-normalized-irreducible-matrix-coefficient-basis
- thm-schur-orthogonality-for-compact-groups
- thm-finite-dimensional-compact-group-representations-are-completely-reducible
- lem-complex-haar-l1-and-l2-are-complete-and-cc-dense
- thm-parseval-equivalences-for-a-complete-orthonormal-family
- thm-bessel-inequality-for-an-arbitrary-orthonormal-family
- def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis
- def-hilbert-space
- def-axiom-of-choice
- lem-unitary-invariant-subspaces-have-invariant-orthogonal-complements
- def-representative-function-on-a-compact-group
- lem-direct-sums-and-tensor-products-of-finite-dimensional-unitary-representations
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
  - title: Emmanuel Kowalski, An Introduction to the Representation Theory of Groups (author-hosted draft, 338 pp.)
    url: https://people.math.ethz.ch/~kowalski/representation-theory.pdf
    locator: Theorem 5.4.1 and Corollary 5.4.8(3), printed pp. 230 and 235
  - title: David A. Vogan, Review of Harmonic Analysis on Compact Groups (MIT lecture notes, 12 pp.)
    url: https://math.mit.edu/~dav/compactrev.pdf
    locator: Theorem 2.13(3)-(4), printed pp. 9–11
  - title: Constantin Teleman, Representation Theory (Berkeley lecture notes, 60 pp.)
    url: https://math.berkeley.edu/~teleman/math/RepThry.pdf
    locator: §19.7, printed p. 43
  - title: Terence Tao, 254A Notes 3 (author-hosted lecture notes, 2011)
    url: https://terrytao.wordpress.com/2011/09/27/254a-notes-3-haar-measure-and-the-peter-weyl-theorem/
    locator: Exercise22(i)–(iii), Fourier analysis on compact abelian groups
status: published
origin: pipeline
---
## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $K$ be a compact Hausdorff group with normalized Haar probability $\mu$ and let $\mathcal B=(u^\pi_{ij})$ be the normalized irreducible matrix coefficient family ([[def-normalized-irreducible-matrix-coefficient-basis]]). Then $\mathcal B$ is an orthonormal family in $L^2(K,\mu;\mathbb C)$ and its closed linear span is all of $L^2(K)$; equivalently, $\mathcal B$ is an orthonormal basis (Hilbert basis) of $L^2(K)$, and $\sum_{\pi,i,j}|\langle f,u^\pi_{ij}\rangle|^2=\|f\|_2^2$ for every $f\in L^2(K)$.

## Facts & Assumptions

[F1] The normalized family is $u^\pi_{ij}(k)=\sqrt{d_\pi}\langle\pi(k)e^\pi_i,e^\pi_j\rangle$, with one representative and one orthonormal basis fixed in each class $\pi\in\widehat K$, and $d_\pi\ge1$ is the dimension of the class. ([[def-normalized-irreducible-matrix-coefficient-basis]])

[F2] Schur orthogonality in the convention $\langle\pi(k)v,w\rangle$: for inequivalent irreducible classes the $L^2$ inner product of any two matrix coefficients is $0$, and for a single class $\pi$ one has $\int_K\langle\pi(k)v,w\rangle\overline{\langle\pi(k)v',w'\rangle}\,d\mu(k)=d_\pi^{-1}\langle v,v'\rangle\overline{\langle w,w'\rangle}$. ([[thm-schur-orthogonality-for-compact-groups]])

[F3] Every finite-dimensional continuous complex representation of $K$ is a direct sum of finitely many irreducible subrepresentations, and every closed invariant subspace of a unitary representation has a closed invariant orthogonal complement, so the decomposition may be taken orthogonal. ([[thm-finite-dimensional-compact-group-representations-are-completely-reducible]], [[lem-unitary-invariant-subspaces-have-invariant-orthogonal-complements]])

[F4] Coefficients split over orthogonal direct sums: for a finite orthogonal direct sum of subrepresentations, $c^{\pi}_{v,w}=\sum_mc^{\pi_m}_{v_m,w_m}$. ([[lem-direct-sums-and-tensor-products-of-finite-dimensional-unitary-representations]])

[F5] $R(K)$ is the span of the matrix coefficients of all finite-dimensional continuous unitary representations of $K$, and it is uniformly dense in $C(K,\mathbb C)$. ([[def-representative-function-on-a-compact-group]], [[thm-uniform-peter-weyl-density]])

[F6] $L^2(K,\mu;\mathbb C)$ is complete and $C(K,\mathbb C)$ is dense in it. ([[lem-complex-haar-l1-and-l2-are-complete-and-cc-dense]], [[def-hilbert-space]])

[F7] For an orthonormal family in a Hilbert space, completeness (closed linear span equal to the whole space) is equivalent to the Parseval identity $\sum_i|\langle x,e_i\rangle|^2=\|x\|^2$ for every $x$, and a complete orthonormal family is by definition a Hilbert basis. ([[thm-parseval-equivalences-for-a-complete-orthonormal-family]], [[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]])

[F8] Under AC every bounded self-intertwiner of a complex irreducible unitary representation is scalar. ([[thm-schurs-lemma-for-unitary-representations]])

[F9] Finite-dimensional continuous unitary matrix coefficients separate the points of a compact Hausdorff group. ([[lem-compact-group-matrix-coefficients-separate-points]])

## Proof

**Given:** AC, a compact Hausdorff group $K$ with normalized Haar probability $\mu$, and the normalized family $\mathcal B=(u^\pi_{ij})$ indexed by $\{(\pi,i,j):\pi\in\widehat K,\ 1\le i,j\le d_\pi\}$.

1.1 For classes $\pi,\sigma$ and indices, [F1] and [F2] give $\int_Ku^\pi_{ij}\overline{u^\sigma_{kl}}\,d\mu=\sqrt{d_\pi d_\sigma}\int_K\langle\pi(k)e^\pi_i,e^\pi_j\rangle\overline{\langle\sigma(k)e^\sigma_k,e^\sigma_l\rangle}\,d\mu(k)$, which is $0$ when $\pi\ne\sigma$ (the classes are inequivalent) and equals $\sqrt{d_\pi^2}\cdot d_\pi^{-1}\langle e^\pi_i,e^\pi_k\rangle\overline{\langle e^\pi_j,e^\pi_l\rangle}=\delta_{ik}\delta_{jl}$ when $\pi=\sigma$, by orthonormality of the fixed bases; hence $\mathcal B$ is an orthonormal family in $L^2(K)$. [F1, F2]

1.2 Let $f=c^\sigma_{v,w}$ be a coefficient of a finite-dimensional continuous unitary representation on $V$. By [F3] take an orthogonal decomposition $V=\bigoplus_{m=1}^r V_m$ into irreducible subrepresentations $\sigma_m$, with classes $\pi_m\in\widehat K$. Choose unitary intertwiners $T_m:H_{\pi_m}\to V_m$ and write $v=\sum_m v_m$, $w=\sum_m w_m$, $a_m=T_m^{-1}v_m$, $b_m=T_m^{-1}w_m$. Unitarity and intertwining give $\langle\sigma_m(k)v_m,w_m\rangle=\langle\pi_m(k)a_m,b_m\rangle$. Expanding $a_m,b_m$ in the fixed basis of $H_{\pi_m}$ and using [F4] gives $f(k)=\sum_{m,i,j}\langle a_m,e^{\pi_m}_i\rangle\overline{\langle b_m,e^{\pi_m}_j\rangle}\,u^{\pi_m}_{ij}(k)/\sqrt{d_{\pi_m}}$. Hence $R(K)\subseteq\operatorname{span}\mathcal B$. Since $\mu(K)=1$, uniform approximation implies $L^2$ approximation. The uniform density of $R(K)$ in $C(K)$ and the $L^2$ density of $C(K)$ [F5,F6] therefore show that the closed span of $\mathcal B$ is $L^2(K)$. [F1, F3, F4, F5, F6]

2.1 By the Parseval equivalences [F7] applied to the orthonormal family $\mathcal B$, completeness is equivalent to the identity $\sum_{\pi,i,j}|\langle f,u^\pi_{ij}\rangle|^2=\|f\|_2^2$ for every $f\in L^2(K)$ and to $\mathcal B$ being a Hilbert basis of $L^2(K)$; step 1.2 supplies completeness, so both conclusions hold. The Axiom of Choice is inherited through the fixed representatives and bases and the cited suppliers; this proof adds no further choice. [F7, step 1.2]

3.1 If $K$ is abelian, every irreducible $\pi$ is one dimensional: for each $g$, $\pi(g)$ commutes with every $\pi(h)$ and is a bounded self-intertwiner, hence scalar by [F8]. Every line would therefore be invariant, so irreducibility forces dimension one. The scalar $\chi_\pi(g)$ is a continuous unit-circle-valued homomorphism. Conversely each such character is an irreducible one-dimensional unitary representation, and two of these representations are equivalent exactly when their characters agree. By [F1] its sole normalized matrix coefficient is $\chi_\pi$. Finite complete reducibility and coefficient splitting [F3,F4] therefore identify $R(K)$ with the finite linear span of characters. This span is uniformly dense in $C(K)$ by [F5]. The characters separate points: if all had equal values at two points, every finite linear combination, and hence every finite-dimensional matrix coefficient, would also have equal values there, contradicting [F9]. Finally steps 1.1–2.1 identify the character family as an orthonormal Hilbert basis of $L^2(K)$, with Parseval. These are the three compact-abelian Fourier conclusions, derived without general LCA separation or biduality. [F1, F3, F4, F5, F8, F9, step 1.1, step 1.2, step 2.1] ∎
