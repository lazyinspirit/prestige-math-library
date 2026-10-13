---
id: def-hecke-jucys-murphy-elements-and-q-contents
kind: definition
title: "Hecke Jucys-Murphy elements and q-contents"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-content-vector-of-a-standard-tableau, def-generic-type-a-hecke-algebra, def-jucys-murphy-elements-of-the-symmetric-group-algebra, def-q-integer-q-factorial-and-q-multinomial, def-quantum-characteristic-of-an-invertible-hecke-parameter, lem-the-star-antiautomorphism-of-the-type-a-hecke-algebra, prop-group-algebra-and-finite-field-specializations-of-the-generic-hecke-algebra, thm-standard-basis-of-the-generic-type-a-hecke-algebra, thm-the-symmetric-group-has-the-coxeter-presentation]
justified_by: []
aliases: []
landmark: false
dependency_level: 1
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
sources:
  scraped: []
  references:
    - title: "Andrew Mathas, Hecke algebras and Schur algebras of the symmetric group, complete prepublication manuscript (1998; expanded published edition: AMS University Lecture Series 15, 1999); complete 79-page manuscript, SHA-256 8cfeb611a95a3ff25cb95ad22bfd3a68475818301c34b04d131a8480a1b997e0"
      url: "https://web.math.ucsb.edu/~bigelow/books/mathas.pdf"
      locator: "Equation (3.27) and Lemma 3.29, printed pp. 27-28: the Hecke Jucys-Murphy elements L_k and the q-content values"
    - title: "Jun Hu and Andrew Mathas, Seminormal forms and cyclotomic quiver Hecke algebras of type A, arXiv:1304.0906; complete 51-page preprint (v3, 2014), SHA-256 54b112868aef305ccbb8ba1608005ef84ee1457104ec41d3e69af6c22c2cf520"
      url: "https://arxiv.org/pdf/1304.0906"
      locator: "Section 3.1 equation (3.8), arXiv p. 15: the elements l_k and the residue/axial-distance conventions"
---

## Definition

Let $R$ be a commutative ring, $q\in R^{\times}$, and $H=H_{R,q}(S_n)$
([[def-generic-type-a-hecke-algebra]]). For $1\le k\le n$ define
$$L_1:=0,\qquad L_k:=q^{-1}T_{(k-1,k)}+q^{-2}T_{(k-2,k)}+\cdots+q^{1-k}T_{(1,k)}\in H\quad(k\ge2),$$
where $T_{(i,k)}$ is the standard basis element indexed by the transposition
$(i\ k)$ ([[thm-standard-basis-of-the-generic-type-a-hecke-algebra]]). The $L_k$
are the **Hecke Jucys-Murphy elements**. They are fixed by the star
anti-automorphism $T_w^*=T_{w^{-1}}$
([[lem-the-star-antiautomorphism-of-the-type-a-hecke-algebra]]): each
transposition $(i\ k)$ is its own inverse, so $T_{(i,k)}^*=T_{(i,k)}$, and the
coefficients $q^{i-k}$ are central, whence
$L_k^*=\sum_{i<k}q^{i-k}T_{(i,k)}=L_k$. They commute pairwise and every
symmetric polynomial in $L_1,\dots,L_n$ with coefficients in $R$ is central in
$H$ ([[thm-hecke-jucys-murphy-action-is-dominance-triangular]]).

**q-contents.** The quantum integers $[m]_q$ for $m\ge0$ are those of
[[def-q-integer-q-factorial-and-q-multinomial]]; extend the definition to
negative indices by $[-m]_q:=-q^{-m}[m]_q$ for $m>0$, so that
$(q-1)[m]_q=q^m-1$ for all $m\in\mathbb Z$. When $q-1$ is a unit this
may be written $[m]_q=(q^m-1)/(q-1)$; the polynomial definition requires no
such division. Also $[m]_1=m$ for all
$m\in\mathbb Z$, since $[-r]_1=-[r]_1=-r$. For a standard $\lambda$-tableau $t$
and $1\le k\le n$ let $\operatorname{content}_t(k)=c-r$ be the content of the
node carrying $k$ ([[def-content-vector-of-a-standard-tableau]]) and define the
**q-content value** $[\operatorname{content}_t(k)]_q$. If $e=e(F,q)<\infty$ for
a field $F$ then $[m+e]_q=[m]_q$ for every $m\in\mathbb Z$
([[def-quantum-characteristic-of-an-invertible-hecke-parameter]]), so the
q-content value depends only on the residue of the content modulo $e$. At $q=1$
the identification $H_{R,1}(S_n)\cong R[S_n]$ with $T_w\mapsto w$ — the
isomorphism given by the Coxeter presentation and the standard bases
([[thm-the-symmetric-group-has-the-coxeter-presentation]],
[[thm-standard-basis-of-the-generic-type-a-hecke-algebra]]) — sends $L_k$ to the ordinary Jucys-Murphy element
$X_k=\sum_{j<k}(j\ k)$
([[def-jucys-murphy-elements-of-the-symmetric-group-algebra]]), because each
coefficient $q^{j-k}$ specializes to $1$, and
$[\operatorname{content}_t(k)]_1=\operatorname{content}_t(k)$.
