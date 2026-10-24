---
id: thm-primitive-tableau-idempotents-by-jucys-murphy-interpolation
kind: theorem
title: "Primitive tableau idempotents by Jucys-Murphy interpolation"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [thm-jucys-murphy-joint-spectrum-is-the-set-of-tableau-content-vectors, thm-gelfand-tsetlin-algebra-is-the-diagonal-algebra-in-the-young-basis, lem-addable-nodes-of-a-partition-have-distinct-contents, def-removable-and-addable-nodes-of-a-partition, def-content-vector-of-a-standard-tableau, def-young-tableau-standard-tableau-and-shape, def-jucys-murphy-elements-of-the-symmetric-group-algebra]
justified_by: []
aliases: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: induction
sources:
  scraped: []
  references:
    - title: "Garsia, Young Seminormal Representation, Murphy Elements and Content Evaluations, UCSD lecture notes (2003), Theorems 3.4-3.5, printed pp. 22-24"
      url: "https://www.math.ucsd.edu/~garsia/somepapers/Youngseminormal.pdf"
    - title: "Okounkov-Vershik, A New Approach to the Representation Theory of the Symmetric Groups, Selecta Math. (N.S.) 2 (1996) 581-605; complete arXiv repost math/0503040, sections 5-6, printed pp. 17-24"
      url: "https://arxiv.org/pdf/math/0503040"
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "completed-independent-mathematical-review"
    date: 2026-10-03
    scope: "Complete item claim and mathematical body read in delegated Step 5a reader; evidence: research/frontier-38-owner-30-reader-19.md; immutable carrier: research/frontier-38-owner-30-step5-hash-19-post.json; exact saved draft bytes in git d90f26208 match that carrier after exclusion of the later judge stamp. Current content matches the saved carrier except publication status and verification metadata. Source and supplier coverage is limited to the report."
    delegated_by: "owner via tools/autopilot frontier-38-owner-30 reader-19 dispatch"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
---

## Statement

Let $T$ be a standard tableau of size $n$, let $\mu$ be the shape of the
restriction of $T$ to $[n-1]$, and let $A(\mu)$ be the set of contents of the
addable nodes of $\mu$. Set $P_{[1]}:=1$ and define recursively, for $n\ge2$,
$$P_T:=P_{T\downarrow[n-1]}\prod_{\substack{c\in A(\mu)\\ c\ne c_T(n)}}\frac{X_n-c}{c_T(n)-c}\in\mathbb C[S_n].$$
Then all displayed denominators are nonzero, $P_T$ is the rank-one idempotent
projecting onto the Young line $\mathbb C v_T$, each $P_T$ is a polynomial in
$X_1,\dots,X_n$ with rational coefficients, and the $P_T$ over the standard
tableaux of size $n$ are pairwise orthogonal idempotents with $\sum_TP_T=1$.

## Facts & Assumptions

**Given:** The chain $S_1\subset\cdots\subset S_n$, the Jucys-Murphy elements $X_k$, and, for every standard tableau $T$ of size $n$, the Young line $\mathbb C v_T=\operatorname{im}P_T$ with the idempotents $P_T$ of the diagonal-algebra theorem ([[thm-gelfand-tsetlin-algebra-is-the-diagonal-algebra-in-the-young-basis]], [[def-jucys-murphy-elements-of-the-symmetric-group-algebra]]).

[F1] $\mathrm{GZ}(n)=\bigoplus_T\mathbb C P_T$ over the standard tableaux $T$ of size $n$; the $P_T$ are nonzero pairwise orthogonal idempotents with $\sum_TP_T=1$, and $\mathbb C v_T=\operatorname{im}P_T$ is one-dimensional ([[thm-gelfand-tsetlin-algebra-is-the-diagonal-algebra-in-the-young-basis]]).

[F2] $X_kv_T=c_T(k)v_T$ for every standard tableau $T$ and every $k$, with $c_T(k)$ the content of the node carrying $k$ ([[thm-jucys-murphy-joint-spectrum-is-the-set-of-tableau-content-vectors]], [[def-content-vector-of-a-standard-tableau]]).

[F3] For a partition $\mu$, the contents of distinct addable nodes are distinct, and the addable nodes of $\mu$ are the nodes $(i,\mu_i+1)$ with $i=1$ or $\mu_{i-1}>\mu_i$, together with the new-row node ([[lem-addable-nodes-of-a-partition-have-distinct-contents]], [[def-removable-and-addable-nodes-of-a-partition]]).

[F4] The restriction of $T$ to $[n-1]$ is a standard tableau of shape $\mu$ that is obtained by deleting the node carrying $n$; conversely every standard tableau $S$ of size $n$ with $S\downarrow[n-1]=T\downarrow[n-1]$ is obtained by placing $n$ in an addable node of $\mu$ ([[def-young-tableau-standard-tableau-and-shape]], [[def-removable-and-addable-nodes-of-a-partition]]).

## Proof

**Proof technique:** induction.

1.1 Base case. For $n=1$ the only standard tableau is $[1]$, the line is $\mathbb C v_{[1]}=\mathbb C\cdot1$, and $P_{[1]}:=1$ is the rank-one projection onto it with rational (indeed integer) coefficients. [F1, given, base]

1.2 Induction hypothesis. For every standard tableau $S$ of size $n-1$ the recursively defined element $P_S\in\mathbb C[S_{n-1}]$ equals the idempotent $P_S$ of [F1], is the projection onto $\mathbb C v_S$, and is a polynomial in $X_1,\dots,X_{n-1}$ with rational coefficients. [F1, given, ih]

1.3 Let $T$ be a standard tableau of size $n$ and $\mu:=\operatorname{shape}(T\downarrow[n-1])$. The set $A(\mu)$ of contents of addable nodes is finite and $c_T(n)\in A(\mu)$: the node carrying $n$ is an addable node of $\mu$ by [F4]. By [F3] the denominators $c_T(n)-c$, $c\in A(\mu)$, $c\ne c_T(n)$, are nonzero integers, so the displayed product is a well-defined element of $\mathbb C[S_n]$. [F3, F4, given, algebra]

2.1 If $S$ is a standard tableau of size $n-1$ with $S\ne T\downarrow[n-1]$, then the factor $P_{T\downarrow[n-1]}$ acts as $0$ on the line $\mathbb C v_S$ by step 1.2; hence $P_T$ acts as $0$ on every Young line of size $n$ whose restriction to $[n-1]$ differs from $T\downarrow[n-1]$. [step 1.2, F1, algebra]

2.2 Now let $S$ be a standard tableau of size $n$ with $S\downarrow[n-1]=T\downarrow[n-1]$, and let $x$ be the addable node of $\mu$ carrying $n$ in $S$, so that $c_S(n)=c(x)$ by [F4] and [F2]. Then $P_{T\downarrow[n-1]}$ acts as the identity on $\mathbb C v_S$ by step 1.2, and the interpolation factor acts on $\mathbb C v_S$ by the scalar $$\prod_{\substack{c\in A(\mu)\\ c\ne c_T(n)}}\frac{c_S(n)-c}{c_T(n)-c},$$ because $X_n$ acts on $\mathbb C v_S$ by $c_S(n)$ by [F2]. [step 1.2, F2, F4, algebra]

2.3 Polynomial form. By step 1.2 the factor $P_{T\downarrow[n-1]}$ is a polynomial in $X_1,\dots,X_{n-1}$ with rational coefficients; each factor $(X_n-c)/(c_T(n)-c)$ is a polynomial in $X_n$ with rational coefficients because $c_T(n)-c\in\mathbb Z\setminus\{0\}$ by step 1.3; hence $P_T$ is a polynomial in $X_1,\dots,X_n$ with rational coefficients. [step 1.2, step 1.3, algebra]

3.1 The scalar of step 2.2 equals $1$ when $S=T$, and equals $0$ when $S\ne T$: if $S=T$ then $c_S(n)=c_T(n)$ and every factor is $(c_T(n)-c)/(c_T(n)-c)=1$; if $S\ne T$ then $S$ places $n$ in a different addable node of $\mu$, so $c_S(n)\ne c_T(n)$ by [F3], and the factor with $c=c_S(n)$ has numerator $0$ while the denominator is nonzero by step 1.3. [F3, step 1.3, step 2.2, algebra]

4.1 Steps 2.1-2.3 show that $P_T$ acts as the identity on the line $\mathbb C v_T$ and as $0$ on every other Young line of size $n$. Since $\mathrm{GZ}(n)=\bigoplus_S\mathbb C P_S$ is the algebra of operators diagonal in the Young basis by [F1], the element $P_T$ equals the idempotent $P_T$ of [F1], namely the rank-one projection onto $\mathbb C v_T$. In particular $P_T^2=P_T$ and $P_T\ne0$. [step 2.1, step 3.1, F1, algebra]

5.1 Orthogonality and the partition of unity are inherited from [F1]: for $T\ne T'$ the idempotents $P_T,P_{T'}$ of [F1] multiply to $0$, and $\sum_TP_T=1$ over the standard tableaux of size $n$. [step 4.1, F1]

6.1 Steps 1.1, 2.1-2.3, 3.1 and 4.1 are the base, the successor and the conclusions of an induction on $n$; therefore the recursive formula defines the tableau idempotents for every $n$, with all properties asserted. [step 1.1, step 4.1, step 5.1, step 2.3, discharge-induction] ∎

## Remarks

- **Interpolation at the spectrum.** The factor is the Lagrange polynomial that takes the value $1$ at the content $c_T(n)$ and vanishes at the other contents in $A(\mu)$; the contents in $A(\mu)$ are pairwise distinct by [F3], and they are the eigenvalues of $X_n$ on the lines over $T\downarrow[n-1]$ by [F2]. This is Garsia's recursion for the seminormal units, stated here for the tableau idempotents of the diagonal algebra.

- **Integrality fails only at the denominators.** Over $\mathbb Z$ the formula must be cleared of denominators; over $\mathbb C$ the rational coefficients are harmless. The first nontrivial denominator occurs for $n=2$: the addable contents of $(1)$ are $1,-1$, giving the projectors $(1+X_2)/2$ and $(1-X_2)/2$.

- **Choice.** The recursion selects no object: the addable node carrying $n$ in a given tableau is determined by that tableau, and the idempotents are built from the fixed chain.
