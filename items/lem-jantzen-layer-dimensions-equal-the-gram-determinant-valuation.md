---
id: lem-jantzen-layer-dimensions-equal-the-gram-determinant-valuation
kind: lemma
title: "Jantzen layer dimensions sum to the Gram determinant valuation"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-jantzen-filtration-of-a-lifted-cell-module, thm-smith-normal-form-existence-over-a-pid]
justified_by: []
aliases: []
landmark: false
dependency_level: 11
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
sources:
  scraped: []
  references:
    - title: "Andrew Mathas, Hecke algebras and Schur algebras of the symmetric group, complete prepublication manuscript (1998; expanded published edition: AMS University Lecture Series 15, 1999); complete 79-page manuscript, SHA-256 8cfeb611a95a3ff25cb95ad22bfd3a68475818301c34b04d131a8480a1b997e0"
      url: "https://web.math.ucsb.edu/~bigelow/books/mathas.pdf"
      locator: "Lemma 5.29 (Jantzen), printed p. 58: the layer dimensions of the Jantzen filtration sum to the pi-adic valuation of the Gram determinant"
---

## Statement

In the setting of [[def-jantzen-filtration-of-a-lifted-cell-module]] ($R$ a PID,
$\pi$ a prime element, $F=R/\pi R$, $M$ free of finite rank with a form whose
extension to $K=\operatorname{Frac}(R)$ is non-degenerate), let $\nu_\pi$ be
the $\pi$-adic valuation normalised by $\nu_\pi(\pi)=1$ and let
$G\in R\setminus\{0\}$ be the Gram determinant of the form with respect to any
$R$-basis of $M$. Then
$$\nu_\pi(G)=\sum_{i>0}\dim_FM_F(i),$$
where $M_F(i)$ are the Jantzen layers of
[[def-jantzen-filtration-of-a-lifted-cell-module]]; in particular the sum is
finite and independent of the chosen basis.

## Facts & Assumptions

**Given:** A PID $R$ with prime element $\pi$, residue field $F=R/\pi R$, fraction field $K$, a free $R$-module $M$ of finite rank $d$ with a symmetric $R$-bilinear form $\langle\ ,\ \rangle$ that is non-degenerate over $K$, and its Jantzen filtration $M(i)\subseteq M$ with layers $M_F(i)=(M(i)+\pi M)/\pi M$ ([[def-jantzen-filtration-of-a-lifted-cell-module]]).

[F1] ([[def-jantzen-filtration-of-a-lifted-cell-module]]) The $M(i)$, $i\ge0$, are submodules with $M(0)=M$ and $M(i+1)\subseteq M(i)$, and $M_F(i)=0$ for all sufficiently large $i$.

[F2] ([[thm-smith-normal-form-existence-over-a-pid]]) There are $R$-bases $e_1,\dots,e_d$ of $M$ and $f_1,\dots,f_d$ of $M$ together with nonzero $r_1,\dots,r_d\in R$ such that $\langle e_i,f_j\rangle=\delta_{ij}r_i$ for all $i,j$; the $r_i$ are the elementary divisors of the Gram matrix.

[F3] For any $R$-basis of $M$ with Gram matrix $G$ one has $\det G=r_1\cdots r_d$ up to a unit, so $\nu_\pi(G)=\sum_i\nu_\pi(r_i)$, and $\nu_\pi$ is normalised by $\nu_\pi(\pi)=1$ and takes the value $0$ on units.



## Proof

**Proof technique:** direct.

1.1 Description of the Jantzen layers: write $x=\sum_ia_ie_i$ in the basis of [F2]. Since $f_1,\dots,f_d$ is an $R$-basis of $M$, the condition $\langle x,y\rangle\in\pi^kR$ for all $y\in M$ is equivalent to $\langle x,f_j\rangle\in\pi^kR$ for all $j$; as $\langle x,f_j\rangle=a_jr_j$, this gives $M(k)=\{\sum_ia_ie_i:\nu_\pi(a_ir_i)\ge k\ \text{for all }i\}$ with the convention $\nu_\pi(0)=\infty$. Reducing modulo $\pi M$, whose basis is $\pi e_1,\dots,\pi e_d$, shows that $M_F(k)$ has as an $F$-basis the images of those $e_i$ with $\nu_\pi(r_i)\ge k$: if $\nu_\pi(r_i)\ge k$ then the image of $e_i$ lies in $M_F(k)$, while if $\nu_\pi(r_i)<k$ then every element of $M(k)$ has $e_i$-coefficient divisible by $\pi$. Hence $\dim_FM_F(k)=\#\{i:\nu_\pi(r_i)\ge k\}$. [given, F1, F2]

2.1 Summation: since each $r_i$ is nonzero, the sets $\{k>0:\nu_\pi(r_i)\ge k\}$ are finite of cardinality $\nu_\pi(r_i)$; by step 1.1 and [F1], $$\sum_{k>0}\dim_FM_F(k)=\sum_{k>0}\#\{i:\nu_\pi(r_i)\ge k\}=\sum_i\nu_\pi(r_i).$$ [step 1.1, F1]

3.1 Conclusion: by [F3] the right-hand side is $\nu_\pi(G)$ for any Gram matrix $G$ of the form in any $R$-basis of $M$; the left-hand side is defined purely in terms of $M$ and the form, so the identity holds for every basis and the sum is finite and basis-independent. [step 2.1, F3] ∎
