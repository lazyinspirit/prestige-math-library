---
id: def-reed-solomon-outer-code-and-binary-linear-inner-code
kind: definition
title: "Reed-Solomon outer code and binary linear inner code"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-explicit-constant-rate-constant-distance-code, thm-existence-of-finite-fields, cor-irreducible-polynomials-exist-over-finite-fields-in-every-degree, thm-simple-algebraic-extension-quotient-power-basis-and-degree]
justified_by: []
aliases: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-27
  precheck: n/a
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  scraped: []
  references:
    - title: "Arora and Barak, Computational Complexity: A Modern Approach, §17.5.2 Definition 17.17 (Reed-Solomon code) and §17.5.3 Definition 17.19 (concatenation), printed pp. 347-348."
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
    - title: "Irit Dinur, The PCP theorem by gap amplification, §9 (Reed-Solomon concatenated with a binary inner code), printed pp. 29-30."
      url: "https://www.cs.umd.edu/users/gasarch/TOPICS/pcp/dinur.pdf"
---

## Definition

Fix an integer $m\ge1$ and put $q:=2^m$ and $K:=q/2$. Choose, by scanning the monic polynomials of degree $m$ over $\mathbb F_2$ in a fixed order and testing each for irreducibility by trial division against all monic polynomials of positive degree at most $\lfloor m/2\rfloor$, the first monic irreducible $f\in\mathbb F_2[z]$ of degree $m$; by [[cor-irreducible-polynomials-exist-over-finite-fields-in-every-degree]] such an $f$ exists, and the scan is deterministic and takes time polynomial in $2^m$. Set
$$\mathbb F_q:=\mathbb F_2[z]/(f),$$
a field with exactly $q$ elements by [[thm-existence-of-finite-fields]] and [[thm-simple-algebraic-extension-quotient-power-basis-and-degree]], in which the classes of $1,z,\dots,z^{m-1}$ form a **power basis**; write
$$\mathrm{enc}:\mathbb F_q\to\mathbb F_2^m,\qquad \mathrm{enc}\Bigl(\sum_{j<m}c_jz^j+(f)\Bigr):=(c_0,\dots,c_{m-1}),$$
for the resulting bit encoding, which is a bijection, and list the elements of $\mathbb F_q$ in the order induced by $\mathrm{enc}$ on the binary representations $0,1,\dots,q-1$ of the exponents.

**The outer code.** The **Reed-Solomon outer code** $\mathrm{RS}_{q,K}$ encodes a message $(c_0,\dots,c_{K-1})\in\mathbb F_q^K$, read as the polynomial $P(X):=\sum_{i<K}c_iX^i$ of degree less than $K$, into the word
$$\mathrm{RS}_{q,K}(c):=\bigl(P(\alpha)\bigr)_{\alpha\in\mathbb F_q}\in\mathbb F_q^{\,q},$$
the evaluation at all $q$ field elements in the fixed order above. It is $\mathbb F_q$-linear of dimension $K$ over $\mathbb F_q$, hence $K m$ bits of message and $qm$ bits of outer codeword.

**The inner code.** A **binary linear inner code** of rate $1/16$ is a fixed injective $\mathbb F_2$-linear map
$$E_{\rm in}:\mathbb F_2^m\to\mathbb F_2^{16m},$$
written on messages as $u\mapsto Mu$ for a binary $16m\times m$ matrix $M$, the **generator matrix**; its existence with relative distance at least $1/4$ is the content of [[lem-conditional-expectation-constructs-the-inner-code-in-polynomial-time]] and the construction is uniform in $m$.

**The concatenated code.** Let $M$ be the generator matrix of an inner code as above. The **concatenation** $\mathrm{RS}_{q,K}\circ M$ encodes a message $u\in\mathbb F_2^{Km}$, split as $u=(u_1,\dots,u_K)$ with $u_j\in\mathbb F_2^m$, in two steps: form the outer word $(\alpha_1,\dots,\alpha_q):=\mathrm{RS}_{q,K}(\mathrm{enc}^{-1}(u_1),\dots,\mathrm{enc}^{-1}(u_K))$, and output the concatenation of $M\,\mathrm{enc}(\alpha_1),\dots,M\,\mathrm{enc}(\alpha_q)$. Its output is a string of $16qm$ bits, its input is $Km=q m/2$ bits, and it is injective because $\mathrm{RS}_{q,K}$ and each of $\mathrm{enc},E_{\rm in},\mathrm{enc}^{-1}$ is. It is the code used by [[thm-explicit-code-construction-and-distance]].

## Remarks

- **Determinism.** The field $\mathbb F_q$ is not presupposed: the definition names the first irreducible polynomial of degree $m$ in a fixed enumeration, so the field, its power basis, the order of its elements, the Reed-Solomon evaluation points and the bit encoding are all functions of $m$ alone and involve no choice. The time to find $f$ is polynomial in $2^m$, because testing irreducibility of one degree-$m$ polynomial by trial division costs $O(2^m)$ field operations and at most $2^m$ polynomials are tried.
- **Two different alphabets.** The outer code is linear over $\mathbb F_q$ and the inner code over $\mathbb F_2$; the concatenation is a binary code, and its parameters are computed in [[lem-concatenated-code-multiplies-rate-and-distance]]. The rate of the outer code is $K/q=1/2$ and the rate of the inner code is $m/16m=1/16$, so the concatenation has rate $1/32$.
- The inner code is part of the *data* of the definition rather than a canonical object: any matrix $M$ produced by the uniform procedure of [[lem-conditional-expectation-constructs-the-inner-code-in-polynomial-time]] gives the same parameters, so all statements of this page are independent of which of these matrices is used. The convention of [[def-explicit-constant-rate-constant-distance-code]] is used for rate and relative distance.
