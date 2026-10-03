---
id: lem-projective-pure-cm-dualizing-complex-concentration
kind: lemma
title: "Concentration of the projective dualizing complex on a pure CM scheme"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: ["def-axiom-of-choice", "def-dualizing-complex-on-projective-cm-scheme", "lem-projective-embedding-dualizing-complex-existence", "lem-projective-dualizing-complex-trace-and-embedding-independence", "lem-cm-quotient-of-regular-local-ring-ext-concentration", "lem-affine-local-dimension-residue-transcendence", "thm-coherent-sheaves-abelian-noetherian-scheme", "thm-auslander-buchsbaum-formula", "cor-cohen-macaulayness-localises", "cor-depth-of-a-finite-local-module-at-most-its-dimension", "lem-finite-type-jacobson-residue-extension"]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Stacks, Lemma 48.27.5: CM pure-dimensional dualizing module and Ext duality"
      url: https://stacks.math.columbia.edu/tag/0FVZ
    - title: "Jeffries, Local Cohomology, Corollary 4.30, Proposition 4.36 and Proposition 4.40: quotient canonical module, CM property and localization"
      url: https://jack-jeffries.github.io/UM/LCnotes.pdf
    - title: "Vakil 2025, 29.3.14 and 29.4.3\u20136: coherent CM duality and ambient Ext"
      url: https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf
---

## Statement

Assume AC. If $X$ is projective over a field, Cohen–Macaulay and pure of dimension $d$, its normalized dualizing complex has the canonical concentration
$$D_X\cong\omega_X[d],\qquad \omega_X=\mathcal H^{-d}(D_X).$$
For $i:X\hookrightarrow\mathbb P^N_k$,
$$i_*\omega_X=\mathcal Ext_P^{N-d}(i_*\mathcal O_X,\omega_P).$$
The sheaf $\omega_X$ is coherent, has support $X$, and is CM. It need not be a line bundle.

## Facts & Assumptions

**Given:** the scheme, dimensions, embedding and AC.

[F1] The embedding complex and its biduality are [[lem-projective-embedding-dualizing-complex-existence]], and its normalization is [[lem-projective-dualizing-complex-trace-and-embedding-independence]].

[F2] Local Ext concentration at a closed point is [[lem-cm-quotient-of-regular-local-ring-ext-concentration]].

[F3] Local dimension plus residue transcendence equals the dimension of the components through the point ([[lem-affine-local-dimension-residue-transcendence]]); kernels and cokernels of coherent sheaves are coherent ([[thm-coherent-sheaves-abelian-noetherian-scheme]]).

[F4] Auslander–Buchsbaum and localization of CM modules are [[thm-auslander-buchsbaum-formula]] and [[cor-cohen-macaulayness-localises]].

## Proof

1.1 At a closed point $x\in X$, its residue field is finite algebraic over $k$ by [[lem-finite-type-jacobson-residue-extension]], so [F3] gives $\dim\mathcal O_{X,x}=d$ and $\dim\mathcal O_{P,x}=N$. The local ring of $P$ is a localization of a polynomial chart. CM gives depth $d$ for the quotient. Hence [F2], with the local trivialization of $\omega_P$, shows that $\mathcal H^a(D_X)_x=0$ unless $a=(N-d)-N=-d$. Every cohomology sheaf is coherent by [F1]. A nonzero coherent sheaf on a finite-type scheme over a field has a closed point in its support: on an affine chart its support is the vanishing locus of its annihilator, and a maximal ideal of this quotient has finite algebraic residue field; such points are closed in the finite-type scheme. Thus the asserted vanishing at closed points proves vanishing everywhere. Canonical truncation gives $D_X\cong\omega_X[d]$, and the construction gives the ambient sheaf Ext formula. [F1, F2, F3, given, algebra]

2.1 At a closed point set $R=\mathcal O_{P,x}$, $B=\mathcal O_{X,x}$ and $c=N-d$. The proof of [F2] gives a finite free resolution of $B$ of length $c$. Dualizing it over $R$ gives an exact sequence $0\to F_0^\vee\to\cdots\to F_c^\vee\to E\to0$, where $E=\operatorname{Ext}_R^c(B,R)$; for $c=0$ this means $E=B^\vee$. Thus $\operatorname{pd}_RE\le c$. The module $E$ is nonzero: $R\operatorname{Hom}_R(B,R)$ is nonzero, since if it vanished then the biduality $B\cong R\operatorname{Hom}_R(R\operatorname{Hom}_R(B,R),R)$ of [F1] would give $B=0$, contrary to $B\ne0$; and [F2] identifies this complex with $E[-c]$. It is annihilated by $I$, so its support has dimension at most $d$. By [F4], $\operatorname{depth}_RE=N-\operatorname{pd}_RE\ge d$; depth is at most support dimension by [[cor-depth-of-a-finite-local-module-at-most-its-dimension]], so both equal $d$. Regularity over $R$ and over $B$ is measured by the same multiplication maps; hence $E$ is CM over $B$. Its localizations are CM by [F4], and every point specializes to a closed point, so $\omega_X$ is CM everywhere. Finally at any point $y$, if $(\omega_X)_y$ vanished then $(D_X)_y$ would vanish, contradicting the local homothety for nonzero $\mathcal O_{X,y}$; therefore its support is all of $X$. AC is inherited through the dimension, resolution and CM suppliers. [F1, F2, F4, step 1.1, algebra] ∎
