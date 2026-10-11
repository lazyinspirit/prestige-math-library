---
id: def-murphy-elements-and-murphy-tableau-elements
kind: definition
title: "Murphy elements and Murphy tableau elements"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-generic-type-a-hecke-algebra, def-row-and-column-stabilizers-of-a-tableau, def-weyl-group-and-length-for-finite-gl-n, def-young-subgroup-tabloid-and-permutation-module, def-young-tableau-standard-tableau-and-shape, lem-finite-weyl-strong-exchange-and-deletion, lem-the-star-antiautomorphism-of-the-type-a-hecke-algebra, thm-standard-basis-of-the-generic-type-a-hecke-algebra]
justified_by: []
aliases: []
landmark: false
dependency_level: 1
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Andrew Mathas, Hecke algebras and Schur algebras of the symmetric group, complete prepublication manuscript (1998; expanded published edition: AMS University Lecture Series 15, 1999); complete 79-page manuscript, SHA-256 8cfeb611a95a3ff25cb95ad22bfd3a68475818301c34b04d131a8480a1b997e0"
      url: "https://web.math.ucsb.edu/~bigelow/books/mathas.pdf"
      locator: "Lemma 3.2, Proposition 3.3 and Corollary 3.4, printed pp. 17-20: the symmetrizer m_mu, the distinguished right-coset representatives d(s), the identity m_mu T_w=q^{l(w)}m_mu, and the definition m_st=T_{d(s)}^* m_mu T_{d(t)}"
---

## Definition

Let $R$ be a commutative ring, $q\in R^{\times}$, and $H=H_{R,q}(S_n)$ with
standard basis $\{T_w\}$ and star anti-automorphism $*$
([[def-generic-type-a-hecke-algebra]],
[[thm-standard-basis-of-the-generic-type-a-hecke-algebra]],
[[lem-the-star-antiautomorphism-of-the-type-a-hecke-algebra]]). For a
composition (in particular a partition) $\mu$ of $n$ put
$m_\mu:=\sum_{w\in S_\mu}T_w\in H$, the **row symmetrizer** of the standard
Young subgroup $S_\mu$
([[def-young-subgroup-tabloid-and-permutation-module]]); the sum has
$|S_\mu|=\prod_i\mu_i!$ terms.

A tableau is **row standard** when its entries increase along each row. Use the right tableau action $t\cdot w:=w^{-1}\cdot t$, where the left action applies $w$ to the entries. For a row-standard $\mu$-tableau $s$, let $d(s)$ be the unique permutation with $s=t^\mu\cdot d(s)$, where $t^\mu$ is filled by $1,2,\dots,n$ in row-major order. Explicitly, if $s$ carries entry $a$ in the $p$-th node in that order, then $d(s)(a)=p$: $d(s)$ is the **inverse** of the row-reading permutation. The action on tableaux is free; the stabilizer of the row tabloid of $t^\mu$ is $S_\mu$ ([[def-row-and-column-stabilizers-of-a-tableau]]).

Write $D_\mu$ for these distinguished permutations. Row-standardness says that $d^{-1}$ is increasing on each canonical row block. The coset $S_\mu d$ consists exactly of the tableaux with the same row sets, so sorting each row produces its unique representative in $D_\mu$. Moreover,
$$\ell(wd)=\ell(w)+\ell(d)\qquad(w\in S_\mu,\ d\in D_\mu).$$
To verify this, count inversions of $(wd)^{-1}=d^{-1}w^{-1}$. Pairs of labels within one canonical block contribute exactly the inversions of $w^{-1}$, since $d^{-1}$ is increasing there. For labels in different blocks, $w^{-1}$ permutes the labels within their respective blocks, so the total number of cross-block inversions equals that of $d^{-1}$. The two contributions give the displayed equality, using inversion invariance of length. It also proves minimality and uniqueness in $S_\mu d$. These conventions extend to compositions by using their consecutive row blocks.
For row-standard $\mu$-tableaux $s,t$ define the **Murphy element**
$$m_{st}:=T_{d(s)}^{*}\,m_{\mu}\,T_{d(t)}\in H,$$
and for a standard $\lambda$-tableau $t$ write the diagonal element as $m_{tt}=T_{d(t)}^{*}m_\lambda T_{d(t)}$;
the notation $m_t$ is reserved for a cell-module vector, rather than an element of $H$. Then $m_{st}^{*}=m_{ts}$ for all
row-standard $s,t$ of the same shape: applying the anti-automorphism, which
fixes $m_\mu$ because $m_\mu^*=\sum_{w\in S_\mu}T_{w^{-1}}=m_\mu$, gives
$$m_{st}^{*}=(T_{d(s)}^{*}m_\mu T_{d(t)})^{*}=T_{d(t)}^{*}m_\mu^{*}T_{d(s)}^{**}=T_{d(t)}^{*}m_\mu T_{d(s)}=m_{ts}.$$
Finally, $m_\mu T_w=q^{\ell(w)}m_\mu$ for every $w\in S_\mu$: it suffices to
prove this for $w=s_i$ a simple transposition with $i,i+1$ in the same block of
$\mu$, since any $w\in S_\mu\setminus\{1\}$ has a reduced expression
$w=w's_i$ with $\ell(w)=\ell(w')+1$ and the claim follows by induction,
$m_\mu T_w=m_\mu T_{w'}T_i=q^{\ell(w')}m_\mu T_i=q^{\ell(w)}m_\mu$. For such
$i$ the right multiplication $v\mapsto vs_i$ is an involution of the finite
group $S_\mu$, and pairing the summands of $m_\mu T_i=\sum_{v\in S_\mu}T_vT_i$
in twos gives, in the two cases of the standard-basis multiplication rule
$T_vT_i=T_{vs_i}$ if $\ell(vs_i)=\ell(v)+1$ and
$T_vT_i=(q-1)T_v+qT_{vs_i}$ if $\ell(vs_i)=\ell(v)-1$,
$$T_vT_i+T_{vs_i}T_i=q\,(T_v+T_{vs_i}),$$
so summing over the $\tfrac12|S_\mu|$ pairs yields $m_\mu T_i=qm_\mu$.
