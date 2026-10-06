---
id: lem-arith-special-fibre-torsion-growth-detects-properness
kind: lemma
title: "Special fibre torsion growth detects properness"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - def-group-scheme-over-a-scheme
  - lem-nonaffine-geometric-properness-field-descent
  - lem-arith-prime-to-characteristic-multiplication-etale
  - thm-barsotti-chevalley-perfect-field-group-variety
  - lem-arith-field-prime-to-characteristic-torsion-and-tate-module
  - lem-arith-affine-commutative-prime-to-characteristic-torsion-bound
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Bosch, Lutkebohmert, Raynaud, Neron Models (1990), 7.4 (component growth and properness detection); proof in owner-arithmetic-models/etale-source/closure-packet.md"
      url: "https://www.math.stonybrook.edu/~kamenova/homepage_files/Bosch_Raynaud_Neron_Model_tc.pdf"
---

## Statement

Assume AC and DC as inherited from the stated suppliers. Let $k$ be a field and let $G$ be a smooth commutative finite-type $k$-group scheme of dimension $g$. Fix a prime $\ell\ne\operatorname{char}k$. If $|G[\ell^\nu](\bar k)|=\ell^{2g\nu}$ for every $\nu\ge1$, then the identity component $G^0$ is an abelian variety over $k$ (in particular $G^0$ is proper).

## Facts & Assumptions

**Given:** AC and DC, a field $k$, a smooth commutative finite-type $k$-group scheme $G$ of dimension $g$, and a prime $\ell\ne\operatorname{char}k$ with $|G[\ell^\nu](\bar k)|=\ell^{2g\nu}$ for all $\nu$.

[F1] Over the algebraic closure, the identity component of a smooth connected commutative group variety is an extension of an abelian variety by a smooth connected affine group ([[thm-barsotti-chevalley-perfect-field-group-variety]]); the affine part has a prime-to-characteristic torsion bound $|N[\ell^\nu]|\le\ell^{\nu\dim N}$ ([[lem-arith-affine-commutative-prime-to-characteristic-torsion-bound]], assuming AC and DC).

[F2] On an abelian variety of dimension $b$, $|B[\ell^\nu](\bar k)|=\ell^{2b\nu}$ ([[lem-arith-field-prime-to-characteristic-torsion-and-tate-module]]). For a finite-type group scheme over a field, the identity is a closed rational point and the diagonal is the inverse image of the identity under $(x,y)\mapsto xy^{-1}$, so the group scheme is separated ([[def-group-scheme-over-a-scheme]]); consequently prime-to-characteristic multiplication has etale finite-type kernel by [[lem-arith-prime-to-characteristic-multiplication-etale]], and over a field that kernel is finite etale. Thus passage from $k^{\mathrm{sep}}$ to $\bar k$ changes no torsion points. Geometric properness descends through field extensions ([[lem-nonaffine-geometric-properness-field-descent]]).

## Proof

**Proof technique:** direct: split the identity component into abelian and affine parts, bound torsion componentwise, and let $\nu\to\infty$.

1.1 Over $\bar k$ write $0\to N\to G^0_{\bar k}\to B\to0$ with $N$ smooth connected affine of dimension $a$ and $B$ an abelian variety of dimension $b$, so that $g=a+b$; this is the Barsotti-Chevalley decomposition of [F1]. The torsion of $G^0_{\bar k}[\ell^\nu]$ maps to $B[\ell^\nu]$ with fibres that are torsors under $N[\ell^\nu]$, of cardinal at most $|N[\ell^\nu]|\le\ell^{a\nu}$ by [F1], while $|B[\ell^\nu]|=\ell^{2b\nu}$ by [F2]. Hence $|G^0[\ell^\nu](\bar k)|\le\ell^{(2b+a)\nu}=\ell^{(2g-a)\nu}$. [F1, F2, given, algebra]

2.1 The group $G$ has finitely many connected components, say $C$ of them, and translation by a torsion point in a component embeds that component's torsion into $G^0[\ell^\nu]$ (subtracting a torsion point identifies the component with $G^0$ and preserves torsion), so $|G[\ell^\nu](\bar k)|\le C\cdot|G^0[\ell^\nu](\bar k)|\le C\ell^{(2g-a)\nu}$. Comparing with the hypothesis $\ell^{2g\nu}$ gives $\ell^{a\nu}\le C$ for all $\nu\ge1$, which forces $a=0$. [F1, step 1.1, algebra]

3.1 Therefore $N$ is trivial and $G^0_{\bar k}=B$ is an abelian variety. By [F2], each $G[\ell^\nu]$ is finite etale, so passage from $k^{\mathrm{sep}}$ to $\bar k$ changes no torsion points; the count is therefore already available over $k^{\mathrm{sep}}$. Geometric properness of $G^0$ descends from $\bar k$ to $k$ by [F2], so $G^0$ is proper over $k$ and, being smooth connected commutative and proper, is an abelian variety over $k$. This bound suffices for the arithmetic applications and avoids asserting a stronger exact exponent. [F1, F2, step 2.1, algebra] ∎
