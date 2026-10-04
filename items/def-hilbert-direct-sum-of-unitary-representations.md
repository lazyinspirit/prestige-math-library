---
id: def-hilbert-direct-sum-of-unitary-representations
kind: definition
title: Hilbert direct sums of unitary representations
deps:
- def-square-summable-family-on-an-arbitrary-index-set
- thm-hilbert-space-with-a-given-orthonormal-basis-is-ell-two-of-the-index-set
- lem-square-summable-orthogonal-families-have-norm-convergent-finite-sums
- def-strongly-continuous-unitary-representation
- def-orthogonality-and-orthogonal-complement
- def-hilbert-space
- def-linear-isometry-and-orthogonal-or-unitary-operator
- def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
  - title: Emmanuel Kowalski, An Introduction to the Representation Theory of Groups (author-hosted draft, 338 pp.)
    url: https://people.math.ethz.ch/~kowalski/representation-theory.pdf
    locator: Ch. 3 §3.4 (orthogonal direct sums of unitary representations) and its use in Theorem 5.4.1(5.20), printed p. 230
  - title: David A. Vogan, Review of Harmonic Analysis on Compact Groups (MIT lecture notes, 12 pp.)
    url: https://math.mit.edu/~dav/compactrev.pdf
    locator: §2, printed pp. 3–4 (the algebra Op(K-hat) and direct sums over the dual)
status: published
origin: pipeline
---
## Definition

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $I$ be a set and let $(H_i)_{i\in I}$ be a family of complex Hilbert spaces ([[def-hilbert-space]]). A family $v=(v_i)_{i\in I}$ with $v_i\in H_i$ for every $i$ is **square summable** when
$$\sum_{i\in I}\|v_i\|^2<+\infty$$
in the finite-subset-supremum convention of [[def-square-summable-family-on-an-arbitrary-index-set]]: the sum is the supremum of the finite subsums $\sum_{i\in F}\|v_i\|^2$ over finite $F\subseteq I$. The **Hilbert direct sum** $\widehat\bigoplus_{i\in I}H_i$ is the set of all square-summable families, equipped with componentwise addition and scalar multiplication and with the pairing
$$\langle v,w\rangle:=\sum_{i\in I}\langle v_i,w_i\rangle ,$$
the scalar family on the right being summed as a finite-subset net in the sense of [[def-square-summable-family-on-an-arbitrary-index-set]]. By [[thm-hilbert-space-with-a-given-orthonormal-basis-is-ell-two-of-the-index-set]] and [[lem-square-summable-orthogonal-families-have-norm-convergent-finite-sums]] the resulting space is a complex Hilbert space whose norm is $\|v\|=\bigl(\sum_{i\in I}\|v_i\|^2\bigr)^{1/2}$, and the canonical maps $H_j\to\widehat\bigoplus_iH_i$ extending a vector by zero are linear isometries ([[def-linear-isometry-and-orthogonal-or-unitary-operator]]) with pairwise orthogonal closed images ([[def-orthogonality-and-orthogonal-complement]]) whose closed linear span is the whole space.

**The pairing is well defined.** For square-summable $v,w$ and every finite $F\subseteq I$ the finite Cauchy–Schwarz inequality applied to the scalar lists $(\|v_i\|)_{i\in F}$, $(\|w_i\|)_{i\in F}$ gives
$$\sum_{i\in F}|\langle v_i,w_i\rangle|\le\sum_{i\in F}\|v_i\|\,\|w_i\|\le\Bigl(\sum_{i\in F}\|v_i\|^2\Bigr)^{1/2}\Bigl(\sum_{i\in F}\|w_i\|^2\Bigr)^{1/2}\le\|v\|\,\|w\| ,$$
so the family $(\langle v_i,w_i\rangle)_{i\in I}$ is absolutely summable and its finite-subset net converges to a scalar $\langle v,w\rangle$ with $|\langle v,w\rangle|\le\|v\|\,\|w\|$; this is the scalar summation theory of [[def-square-summable-family-on-an-arbitrary-index-set]]. Componentwise sesquilinearity, conjugate symmetry and positive definiteness pass to the finite-subset net by linearity of the scalar sum, so the pairing is an inner product. For completeness let $(v^{(n)})_{n\ge1}$ be a Cauchy sequence and let $K$ be a bound for it; for each $i$ the components satisfy $\|v^{(n)}_i-v^{(m)}_i\|\le\|v^{(n)}-v^{(m)}\|$, so they converge to some $v_i\in H_i$, and for every finite $F$ the limit relation $\sum_{i\in F}\|v_i\|^2=\lim_n\sum_{i\in F}\|v^{(n)}_i\|^2\le K^2$ shows that $v=(v_i)$ is square summable; then $\|v^{(n)}-v\|^2=\sup_F\lim_m\sum_{i\in F}\|v^{(n)}_i-v^{(m)}_i\|^2$ is eventually below any prescribed $\varepsilon^2$, so $v^{(n)}\to v$ and $\widehat\bigoplus_iH_i$ is complete. Both arguments are choice-free beyond the completeness of the factors.

**Strongly continuous unitary representations.** Suppose now that $K$ is a topological group and that each $H_i$ carries a strongly continuous unitary representation $\pi_i$ of $K$ ([[def-strongly-continuous-unitary-representation]]). The **Hilbert direct sum of the representations**, still written $\widehat\bigoplus_i\pi_i$, acts componentwise,
$$\Bigl(\widehat\bigoplus_i\pi_i\Bigr)(k)\,(v_i)_{i\in I}:=(\pi_i(k)v_i)_{i\in I},$$
which is again a square-summable family because every $\pi_i(k)$ is isometric, and which is a group homomorphism into the unitary group of the sum by componentwise computation. To see strong continuity let $v\in\widehat\bigoplus H_i$ and $\varepsilon>0$; choose a finite $F\subseteq I$ with $\sum_{i\notin F}\|v_i\|^2<\varepsilon^2/16$, possible by the tail-control property of the finite-subset-supremum convention, and, if $F=\varnothing$, take $U=K$, since the tail estimate alone is less than $\varepsilon/2$. Otherwise, for each $i\in F$ choose a neighbourhood $U_i$ of the identity with $\|\pi_i(k)v_i-v_i\|<\varepsilon/(2|F|)$ for $k\in U_i$, which is possible by the finitely many strong continuity assumptions; then $U=\bigcap_{i\in F}U_i$ is an identity neighbourhood and, using unitarity of each $\pi_i(k)$ to bound the tail of $\pi(k)v-v$ by twice the square root of the tail of $v$,
$$\Bigl\|\Bigl(\widehat\bigoplus_i\pi_i\Bigr)(k)v-v\Bigr\|\le\sum_{i\in F}\|\pi_i(k)v_i-v_i\|+2\Bigl(\sum_{i\notin F}\|v_i\|^2\Bigr)^{1/2}<\varepsilon$$
for every $k\in U$. Hence $\widehat\bigoplus_i\pi_i$ is a strongly continuous unitary representation of $K$.

**Direct sums of subrepresentations.** A strongly continuous unitary representation $\pi$ of $K$ on a complex Hilbert space $H$ is the **Hilbert direct sum of a family of subrepresentations** $(H_i,\pi_i)_{i\in I}$ when the $H_i$ are pairwise orthogonal closed $\pi(K)$-invariant subspaces of $H$ whose closed linear span is $H$ and $\pi|_{H_i}=\pi_i$ for every $i$. In that case the canonical map
$$\widehat\bigoplus_{i\in I}H_i\longrightarrow H,\qquad (v_i)_{i\in I}\mapsto\sum_{i\in I}v_i ,$$
is well defined by [[lem-square-summable-orthogonal-families-have-norm-convergent-finite-sums]], which makes the finite-subset net of the partial sums converge with squared norm $\sum_i\|v_i\|^2$; it is a linear isometry by orthogonality, its image is closed because $\widehat\bigoplus_iH_i$ is complete, and the image contains every $H_i$ and hence has closed linear span $H$, so the map is a unitary intertwiner. Conversely, if this canonical map is a unitary intertwiner for some pairwise orthogonal closed subspaces $H_i$ with closed linear span $H$ that are $\pi(K)$-invariant, then $\pi$ is the Hilbert direct sum of the subrepresentations $(H_i,\pi|_{H_i})$. The Axiom of Choice ([[def-axiom-of-choice]]) is declared for this development because the decomposition theorems select representatives in unitary-equivalence classes and apply the cited Hilbert-space suppliers; the construction of the direct sum and the verifications above use no choice beyond their inputs.
