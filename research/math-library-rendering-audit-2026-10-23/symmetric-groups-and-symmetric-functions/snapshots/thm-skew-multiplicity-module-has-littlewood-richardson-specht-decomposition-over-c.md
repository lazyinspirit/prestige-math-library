---
id: thm-skew-multiplicity-module-has-littlewood-richardson-specht-decomposition-over-c
kind: theorem
title: "The skew multiplicity module decomposes with Littlewood–Richardson multiplicities over $\\mathbb C$"
status: published
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
dependency_level: 3
deps:
  - def-skew-multiplicity-module-over-c
  - prop-restriction-coproduct-is-schur-skewing
  - thm-littlewood-richardson-schur-product-expansion
  - thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order
  - cor-multiplicity-of-an-irreducible-summand-is-a-character-inner-product
  - thm-hom-tensor-adjunction-for-modules
  - thm-character-inner-product-computes-intertwiner-dimension
  - def-frobenius-characteristic-map
  - thm-frobenius-characteristic-sends-specht-characters-to-schur-functions
  - thm-complex-irreducibles-of-symmetric-groups-are-specht-modules
  - thm-complex-specht-modules-are-irreducible
  - cor-distinct-specht-modules-are-inequivalent
  - def-column-antisymmetrizer-polytabloid-and-specht-module
  - def-external-direct-product-of-groups
  - thm-external-direct-product-is-a-group
  - lem-character-ring-of-a-direct-product-is-the-tensor-product
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: "2026-10-08"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: "I. G. Macdonald, Symmetric Functions and Hall Polynomials, 2nd ed., Oxford University Press, 1995"
      url: "https://math.berkeley.edu/~corteel/MATH249/macdonald.pdf"
      locator: "Chapter I §7, Example 3, printed pp. 116–117: the skew character defined by $s_{\\lambda/\\mu}$ and the restriction of $\\chi^\\lambda$ to $S_m\\times S_r$. The multiplicity-module identification is proved locally."
---

## Statement

Let $\mu\subseteq\lambda$, $m=|\mu|$, $r=|\lambda|-m$, and let $K^{\lambda/\mu}$ be the skew multiplicity module of [[def-skew-multiplicity-module-over-c]]. Then, as a complex $S_r$-module,

$$K^{\lambda/\mu}\cong\bigoplus_{\nu\vdash r}\bigl(S^\nu\bigr)^{\oplus c^\lambda_{\mu\nu}},$$

where $c^\lambda_{\mu\nu}$ is the Littlewood–Richardson coefficient; the Specht modules and their irreducibility are as in [[def-column-antisymmetrizer-polytabloid-and-specht-module]], [[thm-complex-specht-modules-are-irreducible]], and [[cor-distinct-specht-modules-are-inequivalent]]. Thus the multiplicity of $S^\nu$ in $K^{\lambda/\mu}$ is $c^\lambda_{\mu\nu}$, and its Frobenius characteristic is the skew Schur function $s_{\lambda/\mu}=\sum_{\nu\vdash r}c^\lambda_{\mu\nu}s_\nu$ ([[thm-frobenius-characteristic-sends-specht-characters-to-schur-functions]], [[thm-littlewood-richardson-schur-product-expansion]]). No choice principle is used.

## Facts & Assumptions

**Given:** Partitions $\mu\subseteq\lambda$, the integers $m=|\mu|$ and $r=|\lambda|-m$, and the module $K^{\lambda/\mu}$.

[F1] $K^{\lambda/\mu}=\operatorname{Hom}_{\mathbb C[S_m]}(S^\mu,V^\lambda_{m,r})$ is finite-dimensional; $S_r$ acts by postcomposition on the target, and the $S_m$ and $S_r$ actions on $V^\lambda_{m,r}$ commute ([[def-skew-multiplicity-module-over-c]]).

[F2] For a finite group over $\mathbb C$, every subrepresentation of a finite-dimensional representation has an invariant complement, so finite-dimensional representations are completely reducible ([[thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order]]).

[F3] The Specht modules $S^\nu$ for $\nu\vdash r$ are a complete irredundant list of finite-dimensional irreducible complex $S_r$-representations; each is nonzero and irreducible, and distinct partitions give inequivalent modules ([[thm-complex-irreducibles-of-symmetric-groups-are-specht-modules]], [[thm-complex-specht-modules-are-irreducible]], [[cor-distinct-specht-modules-are-inequivalent]]).

[F4] For finite groups $G,H$, the external products of irreducible characters form an orthonormal $\mathbb Z$-basis of $R(G\times H)$; hence the external product of two irreducible complex representations is irreducible ([[lem-character-ring-of-a-direct-product-is-the-tensor-product]]).

[F5] The componentwise product $S_m\times S_r$ is a group, and the external tensor product has action $(\sigma,\tau)\cdot(u\otimes y)=\sigma u\otimes\tau y$ ([[def-external-direct-product-of-groups]], [[thm-external-direct-product-is-a-group]], [[lem-character-ring-of-a-direct-product-is-the-tensor-product]]).

[F6] For complex vector spaces, currying gives $\operatorname{Hom}_{\mathbb C}(S^\nu\otimes_{\mathbb C}S^\mu,V)\cong\operatorname{Hom}_{\mathbb C}(S^\nu,\operatorname{Hom}_{\mathbb C}(S^\mu,V))$ ([[thm-hom-tensor-adjunction-for-modules]] with $R=\mathbb C$).

[F7] For finite-dimensional complex representations $X,Y$ of a finite group $G$, $\dim\operatorname{Hom}_G(Y,X)=\langle\chi_X,\chi_Y\rangle$ ([[thm-character-inner-product-computes-intertwiner-dimension]]).

[F8] The multiplicity of an irreducible representation of a finite group in a finite-dimensional complex representation is the character inner product ([[cor-multiplicity-of-an-irreducible-summand-is-a-character-inner-product]]).

[F9] The restriction of $\chi^\lambda$ to the ordered block subgroup $S_m\times S_r$ has coefficient $c^\lambda_{\mu\nu}$ on $\chi^\mu\boxtimes\chi^\nu$ ([[prop-restriction-coproduct-is-schur-skewing]]).

[F10] The Frobenius characteristic is $\mathbb Z$-linear on character rings and sends the character of $S^\nu$ to $s_\nu$ ([[def-frobenius-characteristic-map]], [[thm-frobenius-characteristic-sends-specht-characters-to-schur-functions]]).

[F11] The skew Schur expansion is $s_{\lambda/\mu}=\sum_{\nu}c^\lambda_{\mu\nu}s_\nu$ ([[thm-littlewood-richardson-schur-product-expansion]]).

[F12] For $n=0$, the empty tableau has column antisymmetrizer $1$ and Specht module $S^\varnothing=\mathbb C$ ([[def-column-antisymmetrizer-polytabloid-and-specht-module]]).

## Proof

**Proof technique:** direct.

1.1 The module $K^{\lambda/\mu}$ is finite-dimensional by [F1], so Maschke's theorem [F2] gives a finite decomposition into irreducibles. By the complete irredundant classification [F3], write $K^{\lambda/\mu}\cong\bigoplus_{\nu\vdash r}(S^\nu)^{\oplus m_\nu}$. The character multiplicity formula [F8] gives $m_\nu=\langle\chi_K,\chi^\nu\rangle$, and the intertwiner-dimension formula [F7] makes this $\dim\operatorname{Hom}_{S_r}(S^\nu,K^{\lambda/\mu})$. [F1, F2, F3, F7, F8]

1.2 Fix $\nu\vdash r$ and write $V=V^\lambda_{m,r}$. The definition [F1] identifies $\operatorname{Hom}_{S_r}(S^\nu,K^{\lambda/\mu})$ with $\operatorname{Hom}_{S_r}(S^\nu,\operatorname{Hom}_{S_m}(S^\mu,V))$. Under the $\mathbb C$-linear currying isomorphism [F6], a map $f$ corresponds to $g:S^\nu\otimes_{\mathbb C}S^\mu\to V$, $g(y\otimes u)=f(y)(u)$. The condition that each $f(y)$ is $S_m$-linear is $g(y\otimes\sigma u)=\iota_{m,r}(\sigma,1)g(y\otimes u)$; the $S_r$-equivariance of $f$ is $g(\tau y\otimes u)=\iota_{m,r}(1,\tau)g(y\otimes u)$. Since the two actions commute by [F1], these are exactly the equivariance conditions for the product group after flipping $y\otimes u$ to $u\otimes y$. By [F5] the flipped source is $S^\mu\boxtimes S^\nu$, so currying restricts to an isomorphism $\operatorname{Hom}_{S_r}(S^\nu,K^{\lambda/\mu})\cong\operatorname{Hom}_{S_m\times S_r}(S^\mu\boxtimes S^\nu,V)$. [F1, F5, F6]

2.1 The character $\theta=\chi^\mu\boxtimes\chi^\nu$ is honest by [F3, F5] and has norm one by [F4]. Maschke's theorem [F2] gives a finite decomposition $\theta=\sum_i n_i\eta_i$ into irreducible characters. By the multiplicity formula [F8], $n_i=\langle\theta,\eta_i\rangle$; therefore $1=\langle\theta,\theta\rangle=\sum_i n_i\langle\theta,\eta_i\rangle=\sum_i n_i^2$, so exactly one constituent occurs once and $S^\mu\boxtimes S^\nu$ is irreducible. Apply [F7] to the Hom space in step 1.2: its dimension is $\langle\chi_V,\chi^\mu\boxtimes\chi^\nu\rangle_{S_m\times S_r}$. The restriction formula [F9] expands $\chi_V$ in the orthonormal external-product basis [F4], with coefficient $c^\lambda_{\mu\nu}$ on this term. Thus $\dim\operatorname{Hom}_{S_r}(S^\nu,K^{\lambda/\mu})=c^\lambda_{\mu\nu}$. [F2, F3, F4, F5, F7, F8, F9, step 1.2]

3.1 Comparing steps 1.1 and 2.1 gives $m_\nu=c^\lambda_{\mu\nu}$ for every $\nu\vdash r$, which proves the displayed $S_r$-module decomposition. A zero coefficient means the corresponding irreducible does not occur; a coefficient one gives exactly one copy. [F3, step 1.1, step 2.1]

4.1 Additivity of the Frobenius characteristic and [F10] give $\operatorname{ch}(K^{\lambda/\mu})=\sum_{\nu\vdash r}m_\nu s_\nu$; substituting step 3.1 and using the skew expansion [F11] yields $\operatorname{ch}(K^{\lambda/\mu})=s_{\lambda/\mu}$. If $\mu=\lambda=\varnothing$, then $m=r=0$ and [F1, F12] give $K=\operatorname{Hom}_{\mathbb C}(\mathbb C,\mathbb C)=\mathbb C=S^\varnothing$, with coefficient one. At the endpoints, if $m=0$, evaluation at $1\in S^\varnothing$ identifies $K$ with $S^\lambda$ as an $S_r$-module; if $r=0$, then $\mu=\lambda$ and $K=\operatorname{End}_{S_m}(S^\lambda)$ is one-dimensional by steps 1.1 and 2.1, matching the empty-factor coefficient. These cases also show the result at degree zero. All direct sums are finite, indexed by partitions of $r$, and use Maschke's finite-group decomposition; no choice principle is used. [F1, F7, F9, F10, F11, F12, step 1.1, step 2.1, step 3.1] ∎
