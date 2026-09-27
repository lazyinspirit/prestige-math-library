---
id: ex-the-whitehead-group-of-the-trivial-group-is-zero
kind: example
title: "The Whitehead group of the trivial group is zero"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-k-one-of-a-ring-and-the-whitehead-group-of-a-discrete-group, lem-the-stable-elementary-subgroup-is-normal-and-contains-the-commutator-subgroup, thm-bezout-identity, thm-division-algorithm-in-z, thm-a-finite-cw-homotopy-equivalence-is-simple-if-and-only-if-its-whitehead-torsion-vanishes]
proof_strategy: direct
verification:
  audited: 2026-09-27
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  scraped: []
  references:
    - title: "Lück, §2.1, printed p.25"
      url: "https://him-lueck.uni-bonn.de/data/ictp.pdf"
      locator: "§2.1, printed p.25"
    - title: "Lurie, Example 9, printed p.3"
      url: "https://people.math.harvard.edu/~lurie/281notes/Lecture4-Whitehead2.pdf"
      locator: "Example 9, printed p.3"
---
## Statement

For the trivial group $1$, one has $K_1(\mathbb Z[1])\cong\{\pm1\}$ by
the determinant and hence $\operatorname{Wh}(1)=0$. Consequently a homotopy
equivalence between finite simply connected CW complexes is simple.

## Facts & Assumptions

**Given:** The trivial group and finite simply connected CW complexes for the consequence.

[F1] $K_1(R)=GL(R)/E(R)$ and $\operatorname{Wh}(1)=K_1(\mathbb Z)/\langle[-1]\rangle$ ([[def-k-one-of-a-ring-and-the-whitehead-group-of-a-discrete-group]]).

[F2] Integer division and Bézout operations reduce a finite list of integers of gcd $1$ to a list with a single $\pm1$ by elementary additions and swaps ([[thm-division-algorithm-in-z]], [[thm-bezout-identity]]).

[F3] A finite CW homotopy equivalence is simple precisely when its Whitehead torsion vanishes ([[thm-a-finite-cw-homotopy-equivalence-is-simple-if-and-only-if-its-whitehead-torsion-vanishes]]).

## Proof

**Proof technique:** direct.

1.1 Since $\mathbb Z[1]=\mathbb Z$, integer determinant sends $GL_m(\mathbb Z)$ to $\{\pm1\}$ and sends each elementary matrix to $1$. It therefore induces a homomorphism $K_1(\mathbb Z)\to\{\pm1\}$, which is onto because the one-by-one matrices $(1)$ and $(-1)$ occur. [F1]

2.1 Let $A\in GL_m(\mathbb Z)$. Its first column is primitive: if an integer $d>1$ divided every entry, it would divide the determinant $\pm1$, a contradiction. By [F2], elementary integer row additions reduce this column to $(\pm1,0,\ldots,0)^{\mathsf T}$; a row swap is a product of elementary matrices and a diagonal $-1$, so its Whitehead class is accounted for by $[-1]$. Clear the remainder of the first row by elementary column additions and repeat on the invertible $(m-1)\times(m-1)$ minor. Induction gives an elementary-equivalent diagonal matrix with entries $\pm1$. Stabilized diagonal $-1$ entries add to a single $[-1]$ class, since $[-1]+[-1]=[1]=0$. Hence the determinant homomorphism is injective, and $K_1(\mathbb Z)\cong\{\pm1\}$. [F1, F2, step 1.1]

3.1 The quotient defining $\operatorname{Wh}(1)$ kills this entire two-element group, so $\operatorname{Wh}(1)=0$. A finite simply connected homotopy equivalence has torsion in $\operatorname{Wh}(1)$ on each connected component and thus has zero torsion; [F3] makes it simple. ∎ [F1, F3, step 2.1]
