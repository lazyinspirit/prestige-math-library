---
id: lem-cft-laurent-determinant-virasoro-central-normalization
kind: lemma
title: The Laurent determinant cocycle has Virasoro central weight two
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: mathematics
proof_strategy: direct
deps:
- def-virasoro-algebra
dependency_roles:
  def-virasoro-algebra: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
  - title: Damiolini, Gibney and Tarasca, Conformal blocks from vertex algebras and
      their connections
    url: https://arxiv.org/pdf/1901.06981v3
    locator: Section6.2 explains the needed central weight two; the Laurent determinant-extension
      normalization is computed directly below; the global curve and Hodge-line comparison
      is a separate obligation.
dependency_level: 0
---

## Statement

Let $H=\mathbb C((z))=H_-\oplus H_+$, with $H_-=z^{-1}\mathbb C[z^{-1}]$ and $H_+=\mathbb C\llbracket z\rrbracket$. Let $D_f=-f(z)\partial_z$, for $f\in\mathbb C((z))$, act on $H$, and let $\mathfrak d=\{D_f:f\in\mathbb C((z))\}$ with the commutator bracket. For operators $A,B\in\mathfrak d$ define
$$\beta(A,B)=\operatorname{Tr}_{H_+}(B_{+-}A_{-+}-A_{+-}B_{-+}),$$
where $A_{\epsilon\delta}:H_\delta\to H_\epsilon$ is the block from source summand $H_\delta$ to target summand $H_\epsilon$, for $\epsilon,\delta\in\{-,+\}$. These products have finite rank, so their algebraic traces are defined. With no topology or continuity assertion, $\beta$ is an algebraic Lie-algebra two-cocycle. Its associated central extension is $\widehat{\mathfrak d}_\beta=\mathfrak d\oplus\mathbb C C$, with $C$ central and bracket $[A+aC,B+bC]=[A,B]+\beta(A,B)C$. For $D_m=-z^{m+1}\partial_z$,
$$\beta(D_m,D_n)=\frac{m^3-m}{6}\delta_{m+n,0}.$$
Thus its restriction to these modes is twice the central cocycle in the Virasoro convention $[L_m,L_n]=(m-n)L_{m+n}+(m^3-m)\delta_{m+n,0}C/12$ of [[def-virasoro-algebra|Virasoro algebra in the $L_m$ convention]]. This is a local Laurent-operator assertion; it does not itself identify a global Hodge-line extension.

## Facts & Assumptions

**Given:** The displayed Laurent series space, polarization, operator blocks and trace convention.

[F1] [[def-virasoro-algebra|Virasoro algebra in the $L_m$ convention]] fixes the bracket and its central normalization.

## Proof

1.1 Since f has a finite negative Laurent cutoff, $D_f$ maps $H_+$ into $H_+$ plus a fixed finite-dimensional negative-power space. Consequently its block $A_{-+}$ has finite rank. Its other off-diagonal block may have infinite rank, but each product in beta still has finite rank because its right factor does. Algebraic finite-rank trace is well defined: a factorization $F=uv$ through a finite-dimensional space gives $\operatorname{Tr}F=\operatorname{Tr}(vu)$, independent of the factorization by enlarging the finite-dimensional image; it satisfies $\operatorname{Tr}(CF)=\operatorname{Tr}(FC)$ whenever F has finite rank. No topology on $\mathbb C((z))$ is used. [given, algebra]

2.1 To verify the cocycle without manipulating traces of infinite operators, consider pairs $(A,Q)$ with $Q-A_{++}$ finite rank. Under componentwise commutator they form a Lie algebra, since
$$[A,B]_{++}=[A_{++},B_{++}]+A_{+-}B_{-+}-B_{+-}A_{-+}.$$
Its kernel over A is the Lie algebra of finite-rank operators. Its trace-zero subspace is an ideal: its bracket with Q is a finite-rank commutator of trace zero, by step 1.1. Quotienting by this ideal gives a central extension by the trace scalar. The section $A\mapsto(A,A_{++})$ has central bracket error exactly beta. Jacobi for the commutator Lie algebra and its quotient therefore proves the two-cocycle identity. This also specifies the sign of the extension, rather than invoking an unspecified determinant convention. [step 1.1, algebra]

3.1 A monomial operator satisfies $D_me_k=-k e_{k+m}$, where $e_k=z^k$, and $[D_m,D_n]=(m-n)D_{m+n}$. If $m+n\ne0$, either off-diagonal product has total shift m+n, so its finite-rank matrix has zero diagonal and zero trace. Suppose $m>0$ and $n=-m$. Then $(D_m)_{-+}=0$ and $(D_{-m})_{+-}=0$. The product $(D_m)_{+-}(D_{-m})_{-+}$ acts diagonally on $e_k$, $0\le k\le m-1$, by $k(k-m)$ and is zero on the other basis vectors. Thus
$$\beta(D_m,D_{-m})=-\sum_{k=0}^{m-1}k(k-m)=\frac{m(m-1)(m+1)}6.$$
Antisymmetry gives the negative-m cases and $m=0$ gives zero. This proves the formula on the Laurent modes. The cocycle on all $D_f$ is established algebraically in step 2.1; no continuity or passage to a topological completion is asserted. [step 1.1, step 2.1, algebra]

4.1 Comparing step 3.1 with F1 gives beta equal to twice the normalized Virasoro cocycle. In particular it vanishes on the three-dimensional span of $D_{-1},D_0,D_1$; the linear term has not been discarded as an unnamed coboundary. Any global use must still identify the determinant line and its isotropy splitting. The computation here proves precisely the asserted local central weight and no global descent claim. [F1, step 3.1, algebra] ∎
