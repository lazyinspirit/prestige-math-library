---
id: lem-steenrod-squares-commute-with-relative-cohomology-connectors
kind: lemma
title: "Steenrod squares commute with relative cohomology connectors"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps:
  - def-steenrod-squares-from-cup-i-products
  - def-higher-cup-i-products
  - thm-cup-i-coboundary-identity
  - thm-long-exact-sequence-of-a-pair-in-singular-cohomology
  - prop-steenrod-square-normalization-instability-and-top-square
dependency_level: 0
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Allen Hatcher, Spectral Sequences in Algebraic Topology, Chapter 1"
      url: "https://pi.math.cornell.edu/~hatcher/SSAT/SSch1.pdf"
      locator: "Lemma 1.35, printed p. 55: compatibility of squares with cohomological transgression; connector compatibility is proved cochain-wise in the local draft."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

For every pair $(E,F)$, the mod-two cohomology connector satisfies $\delta Sq^a(x)=Sq^a\delta(x)$ for every $x\in H^m(F;\mathbb F_2)$ and every nonnegative $a$. Relative squares use the published relative cup-$i$ construction.

## Facts & Assumptions

**Given:** a pair $(E,F)$, an integer $m\ge0$, a class $x\in H^m(F;\mathbb F_2)$ represented by a cocycle $u$, and a nonnegative integer $a$.

[F1] For $x\in H^n$ represented by a cocycle $a$, the square is $Sq^k(x)=[a\smile_{n-k}a]$ for $0\le k\le n$, using the cup-$i$ products with their relative variants and the convention $\smile_j=0$ for $j<0$ ([[def-steenrod-squares-from-cup-i-products]], [[def-higher-cup-i-products]]).

[F2] The cup-$i$ coboundary identity reads $\delta(a\smile_i b)=\delta a\smile_i b+a\smile_i\delta b+a\smile_{i-1}b+b\smile_{i-1}a$, in both relative variants ([[thm-cup-i-coboundary-identity]]).

[F3] The cohomology connector of a pair sends $[u]$ to $[\delta\tilde u]$ for any extension $\tilde u$ of a cocycle representative to the ambient space, and fits in the exact pair sequence ([[thm-long-exact-sequence-of-a-pair-in-singular-cohomology]]); instability gives $Sq^k=0$ above the degree of the class ([[prop-steenrod-square-normalization-instability-and-top-square]]).

## Proof

**Proof technique:** direct.

1.1 Represent $x$ by a cocycle $u$ and extend $u$ by zero on singular simplices of $E$ not in $F$, obtaining an absolute cochain $b$. Then $c=db$ restricts to zero on $F$ and represents $\delta x$. If $0\le a\le m$, set $j=m-a$ and $$b'=b\smile_{j+1}db+b\smile_jb.$$ [given, F1, F3, construct]

2.1 Its restriction to $F$ is $u\smile_ju$, which represents $Sq^a x$. The published cup-$i$ coboundary identity, $d^2=0$, and characteristic two give $$db'=db\smile_{j+1}db+ b\smile_jdb+db\smile_jb+ db\smile_jb+b\smile_jdb+ b\smile_{j-1}b+b\smile_{j-1}b =c\smile_{j+1}c.$$ [step 1.1, F1, F2, algebra]

3.1 This is the relative representative of $Sq^a[c]$, since $|c|=m+1$. Thus the two connector classes agree. For $a=m+1$, $Sq^{m+1}x=0$ by instability, and $c\smile_0c=d(b\smile_0db)$; the primitive restricts to zero on $F$, proving that the other side also vanishes relatively. For $a>m+1$ both sides vanish by instability. The relative-carrier property guarantees all relative cochains used above vanish on $F$; no representative-selection family or choice axiom is needed. [step 2.1, F2, F3, algebra] ∎
