---
id: def-qa-18-canonical-skip-list-for-element-distinctness
kind: definition
title: "Canonical hash-bucket and nested skip-list storage"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 15
deps:
  - def-qa-18-element-distinctness-johnson-walk
  - def-qa-18-random-access-gate-model
  - thm-existence-of-finite-fields
  - cor-irreducible-polynomials-exist-over-finite-fields-in-every-degree
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Andris Ambainis, Quantum walk algorithm for element distinctness, §6.2 and Lemmas 5–6"
      url: "https://arxiv.org/pdf/quant-ph/0311001"
---
## Definition

Let $N\ge4096$, $2\le r\le\lfloor N/2\rfloor$, and $f:[N]\to[M]$ with the injective value encoding in [[def-qa-18-element-distinctness-johnson-walk]]. Put $H=\lceil\log_2N\rceil$, $d=C=16\lceil\log_2(N+2)\rceil$, $R=2^{\lceil\log_2r\rceil}$, and $q=2^H$, and assume $d\le N$. Fix as part of the representation a monic irreducible polynomial of degree $H$ over $\mathbb F_2$ and its polynomial-basis field $\mathbb F_q$; the storage is canonical relative to this fixed field representation and the hash seed. Choose $H+1$ independent uniform coefficient tuples in $\mathbb F_q^d$ and use them as coefficients of degree-at-most-$(d-1)$ polynomials $p_{-1},p_0,\ldots,p_{H-1}$. For each $i\in[N]$, let $\mathsf{enc}(i)$ be the field element whose $H$-bit polynomial-basis coordinate string is the $H$-bit binary encoding of $i-1$; these elements are distinct. Let $h(i)$ be the integer represented by the low $\log_2R$ bits of $p_{-1}(\mathsf{enc}(i))$, and let $b_\ell(i)$ be the low bit of $p_\ell(\mathsf{enc}(i))$. The **height** of $i$ is the number of consecutive $1$ bits starting at $b_0(i)$, capped at $H$; equivalently, $\operatorname{height}(i)\ge\ell$ exactly when $b_0(i)=\cdots=b_{\ell-1}(i)=1$.

For a subset $S\in\binom{[N]}r$, the fixed memory word has $R$ hash buckets, each with $C$ slots, and one overflow bit. If no bucket exceeds capacity, every $i\in S$ is stored in bucket $h(i)$; occupied slots are sorted by index, and each record contains $i$, $f(i)$, and its skip-list fields. A node identifier is the input index $i$; resolving it means computing $h(i)$ and scanning that bucket. If any bucket would exceed capacity, set the overflow bit and put the same fixed sentinel in the data slots. Thus the represented word is a total, unique function of the subset and seed; the skip-list structure is valid exactly when the overflow bit is zero.

The storage also contains two **nested skip lists**, one in increasing index order and one in lexicographic order of $(f(i),i)$. Level $\ell$ of either list, for $0\le\ell\le H$, contains exactly the keys with height at least $\ell$; level $0$ contains all keys. Each forward pointer names a node identifier and stores its **span**, the difference between the source and target ranks in level $0$ (the head sentinel has rank $-1$). These spans support rank and select operations. The two lists, bucket positions, pointers, and spans are the unique ones determined by $(S,f|_S,p_{-1},p_0,\ldots,p_{H-1})$; they do not depend on the path used to reach $S$. A capped search inspects at most $D=2\lfloor d/2\rfloor+1$ forward entries at each level before raising an overrun flag. This definition specifies a finite representation and search convention; it does not assert a probability or cost bound.
