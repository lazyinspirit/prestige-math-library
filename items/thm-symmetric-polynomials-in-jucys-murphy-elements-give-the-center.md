---
id: thm-symmetric-polynomials-in-jucys-murphy-elements-give-the-center
kind: theorem
title: "Symmetric polynomials in the Jucys-Murphy elements give exactly the centre"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [thm-jucys-murphy-elements-generate-the-gelfand-tsetlin-algebra, thm-jucys-murphy-joint-spectrum-is-the-set-of-tableau-content-vectors, lem-a-partition-is-determined-by-its-multiset-of-node-contents, thm-class-sums-form-a-basis-of-the-center-of-k-g, thm-group-algebra-decomposes-as-a-product-of-matrix-algebras-over-an-algebraically-closed-field, cor-endomorphisms-of-an-irreducible-over-an-algebraically-closed-field-are-scalars, def-elementary-symmetric-polynomials, def-symmetric-polynomial, def-power-sum-and-complete-homogeneous-symmetric-polynomials, cor-power-sums-generate-when-factorial-is-invertible, thm-newtons-identities, def-jucys-murphy-elements-of-the-symmetric-group-algebra, def-center-of-the-group-algebra]
justified_by: []
aliases: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Garsia, Young Seminormal Representation, Murphy Elements and Content Evaluations, UCSD lecture notes (2003), Theorem 5.1 with the converse discussion, printed pp. 32-36 and 51-52"
      url: "https://www.math.ucsd.edu/~garsia/somepapers/Youngseminormal.pdf"
    - title: "Okounkov-Vershik, A New Approach to the Representation Theory of the Symmetric Groups, Selecta Math. (N.S.) 2 (1996) 581-605; complete arXiv repost math/0503040, Corollary 2.6 and section 5, printed pp. 11 and 17-22"
      url: "https://arxiv.org/pdf/math/0503040"
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "amended_repair"
    date: 2026-10-03
    scope: "Complete item claim and mathematical body read in delegated Step 5a adjudication; evidence: research/frontier-38-owner-30-alpha-batch-19-5a.md; immutable carrier: research/frontier-38-owner-30-step5-hash-19-post-5a.json; exact saved draft bytes in git d90f26208 match that carrier after exclusion of the later judge stamp. Current content matches the saved carrier except publication status and verification metadata. Source and supplier coverage is limited to the report."
    delegated_by: "owner via tools/autopilot frontier-38-owner-30 5a-batch-19 dispatch"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
---

## Statement

Let $n\ge1$ and let $f\in\mathbb C[y_1,\dots,y_n]$ be a symmetric polynomial.
Then (i) $f(X_1,\dots,X_n)\in Z(\mathbb C[S_n])$; and (ii) conversely, for
every central element $z\in Z(\mathbb C[S_n])$ there is a symmetric polynomial
$f$ with $z=f(X_1,\dots,X_n)$. In other words, the symmetric polynomial
evaluations of the Jucys-Murphy elements are exactly the central elements of
the symmetric group algebra.

## Facts & Assumptions

**Given:** The Jucys-Murphy elements $X_1,\dots,X_n$, and for each standard tableau $T$ of size $n$ the Young line $\mathbb C v_T$ with $X_kv_T=c_T(k)v_T$ ([[def-jucys-murphy-elements-of-the-symmetric-group-algebra]], [[thm-jucys-murphy-joint-spectrum-is-the-set-of-tableau-content-vectors]]).

[F1] Hence for every polynomial $f\in\mathbb C[y_1,\dots,y_n]$ the element $f(X_1,\dots,X_n)$ acts on $\mathbb C v_T$ by the scalar $f(c_T(1),\dots,c_T(n))$ ([[thm-jucys-murphy-joint-spectrum-is-the-set-of-tableau-content-vectors]]).

[F2] $\mathbb C[S_n]\cong\prod_{\lambda\vdash n}\operatorname{End}(V^\lambda)$, the factors being indexed by the irreducible modules $V^\lambda$, and an element is central if and only if it acts by a scalar on each irreducible; the central elements form the centre $Z(\mathbb C[S_n])$ ([[thm-group-algebra-decomposes-as-a-product-of-matrix-algebras-over-an-algebraically-closed-field]], [[cor-endomorphisms-of-an-irreducible-over-an-algebraically-closed-field-are-scalars]], [[def-center-of-the-group-algebra]]).

[F3] The multiset of entries of $\operatorname{Cont}(T)$ is the multiset of contents of the shape of $T$; if $\lambda,\mu\vdash n$ have the same multiset of node contents, then $\lambda=\mu$ ([[thm-jucys-murphy-joint-spectrum-is-the-set-of-tableau-content-vectors]], [[lem-a-partition-is-determined-by-its-multiset-of-node-contents]]).

[F4] Over $\mathbb C$ the substitution $P_k\mapsto p_k$, $k=1,\dots,n$, is an isomorphism from the polynomial ring in $n$ variables onto the symmetric polynomials, so every symmetric polynomial in the variables is a polynomial in the first $n$ power sums; the power sums of a multiset are determined by its elementary symmetric polynomials through Newton's identities with $k\,e_k=\sum_{i=1}^k(-1)^{i-1}e_{k-i}p_i$ ([[cor-power-sums-generate-when-factorial-is-invertible]], [[thm-newtons-identities]], [[def-power-sum-and-complete-homogeneous-symmetric-polynomials]], [[def-symmetric-polynomial]]).

## Proof

**Proof technique:** direct.

1.1 Part (i). Let $f$ be symmetric and let $T,T'$ be standard tableaux of the same shape $\lambda$. By [F3] the vectors $\operatorname{Cont}(T)$ and $\operatorname{Cont}(T')$ are permutations of the same multiset, so symmetry of $f$ gives $f(\operatorname{Cont}(T))=f(\operatorname{Cont}(T'))$; by [F1] the element $f(X)$ acts on every Young line of shape $\lambda$ by the same scalar, hence on the whole irreducible $V^\lambda$ by that scalar. By [F2] an element acting by scalars on every irreducible is central, so $f(X_1,\dots,X_n)\in Z(\mathbb C[S_n])$. [F1, F2, F3, algebra]

1.2 Part (ii), coordinates and their distinctness. For a partition $\lambda\vdash n$ put $q_\lambda:=(p_1(\lambda),\dots,p_n(\lambda))\in\mathbb C^n$, where $p_k(\lambda):=\sum_{x\in[\lambda]}c(x)^k$ is the $k$-th power sum of the multiset of node contents. If $q_\lambda=q_\mu$, then $p_k(\lambda)=p_k(\mu)$ for $k\le n$, and Newton's identities of [F4] recursively express $e_k$ in terms of $p_1,\dots,p_k$ over $\mathbb C$, so $e_k(\lambda)=e_k(\mu)$ for $k\le n$; the monic polynomial $\prod_{x\in[\lambda]}(t-c(x))=t^n-e_1(\lambda)t^{n-1}+\cdots+(-1)^ne_n(\lambda)$ then equals $\prod_{x\in[\mu]}(t-c(x))$, so the two content multisets coincide and $\lambda=\mu$ by [F3]. Hence the $p(n)$ points $q_\lambda$ are pairwise distinct. [F3, F4, algebra]

2.1 Lagrange interpolation. Let $z\in Z(\mathbb C[S_n])$ act on $V^\lambda$ by $\zeta_\lambda$, as in [F2]. For each ordered pair $\lambda\ne\mu$, let $j(\lambda,\mu)$ be the least index with $q_{\lambda,j}\ne q_{\mu,j}$; it exists by step 1.2. Define $$F(y_1,\dots,y_n):=\sum_{\lambda\vdash n}\zeta_\lambda\prod_{\mu\ne\lambda}\frac{y_{j(\lambda,\mu)}-q_{\mu,j(\lambda,\mu)}}{q_{\lambda,j(\lambda,\mu)}-q_{\mu,j(\lambda,\mu)}}.$$ Every denominator is nonzero by its selection. The product indexed by $\lambda$ is $1$ at $q_\lambda$ and $0$ at every $q_\nu$ with $\nu\ne\lambda$, because its factor indexed by $\mu=\nu$ vanishes there. Thus $F(q_\lambda)=\zeta_\lambda$ for every partition, including $n=1$, when the product is empty. [step 1.2, F2, algebra]

3.1 Substitution. By [F4] the power sums $p_1,\dots,p_n$ in the variables $X_1,\dots,X_n$ generate the symmetric polynomials; define $f$ to be the symmetric polynomial $F(p_1,\dots,p_n)$ obtained by substituting $P_k\mapsto p_k$ in the polynomial $F(P_1,\dots,P_n)$. Then $f$ is symmetric and $f(X_1,\dots,X_n)$ acts on $\mathbb C v_T$ by $F(p_1(\lambda),\dots,p_n(\lambda))=F(q_\lambda)=\zeta_\lambda$, where $\lambda=\operatorname{shape}(T)$ and $p_k(\lambda)=\sum_jc_T(j)^k$ by [F3]. [F1, F3, F4, step 2.1, algebra]

4.1 The difference $f(X_1,\dots,X_n)-z$ acts by $\zeta_\lambda-\zeta_\lambda=0$ on every $V^\lambda$, hence is zero by [F2]; therefore $z=f(X_1,\dots,X_n)$ with $f$ symmetric. With step 1.1 this proves both directions. [step 1.1, step 3.1, F2, algebra] ∎

## Remarks

- **The finite coordinates.** Only the $p(n)$ points $q_\lambda$ of the partitions of $n$ are used; the interpolation degree can be bounded by $p(n)-1$ in each variable, and the construction is the converse of Garsia's Theorem 5.1 in the form recorded by the source.

- **Where the content lemma enters.** The distinctness of the points $q_\lambda$ uses that the content multiset determines the partition; this is the only place where the shape is recovered, and it fails for nothing: the lemma is exactly a partition-level statement.

- **Elementary symmetric coordinates.** The same argument works with the elementary symmetric polynomials of the contents in place of the power sums, since the two coordinate systems determine each other over $\mathbb C$; the power sums are used because the substitution theorem for them is recorded in the library.
