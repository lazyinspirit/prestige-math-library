---
id: thm-iwasawa-p-ramified-module-finitely-generated-torsion
kind: theorem
title: "The p-ramified Iwasawa module is finitely generated and torsion"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
  - def-maximal-unramified-outside-p-iwasawa-module-over-cyclotomic-tower
  - def-iwasawa-algebra-of-profinite-abelian-group
  - def-countable-choice
  - def-axiom-of-choice
  - def-dependent-choice
  - lem-cyclotomic-galois-group-splits-into-finite-and-zp-parts
  - thm-cyclotomic-weak-leopoldt-by-kummer-splitting
  - lem-p-ramified-finite-layer-idelic-rank
  - lem-bounded-cyclotomic-coinvariant-ranks-force-torsion
axiom_use: "AC and Countable Choice remain the public hypotheses; Dependent Choice required by the finite class-field suppliers follows from AC, as shown in the proof."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "J. Coates and R. Sujatha, The Main Conjecture"
      url: "https://www.repository.cam.ac.uk/bitstreams/7d2371af-7da1-466f-8ccd-f1c1420ed744/download"
      locator: "§3, printed p. 116, finite generation paragraph and Theorem 3.1"
verification:
  precheck: pending
proof_strategy: constructive
---

## Statement

Assume AC and Countable Choice. Let $F$ be a totally real number field, let $p$ be an odd prime, and let $Y_\infty$ be the p-ramified Iwasawa module over the real cyclotomic tower $F_\infty/F$ with $G=\operatorname{Gal}(F_\infty/F)$. Then $Y_\infty$ is a finitely generated torsion module over $\Lambda(G)=\mathbb Z_p[\![G]\!]$.

## Statement references

[J. Coates and R. Sujatha, *The Main Conjecture*, §3, p. 116, Theorem 3.1](https://www.repository.cam.ac.uk/bitstreams/7d2371af-7da1-466f-8ccd-f1c1420ed744/download)


## Facts & Assumptions

**Given:** AC, Countable Choice, the totally real number field $F$, odd prime $p$, tower, group and module in the unchanged Statement.

[F1] The actual $Y_\infty$ is a compact abelian pro-$p$ Galois module with its continuous $G$-action. [[def-maximal-unramified-outside-p-iwasawa-module-over-cyclotomic-tower]] [[def-iwasawa-algebra-of-profinite-abelian-group]]

[F2] The real cyclotomic Galois group is a product $G=\Delta\times\Gamma$, where $|\Delta|$ divides $p-1$ and $\Gamma\cong\mathbb Z_p$. [[lem-cyclotomic-galois-group-splits-into-finite-and-zp-parts]]

[F3] Cyclotomic Leopoldt defects in the tower over any totally real base are uniformly bounded, under AC, Countable Choice and Dependent Choice. [[thm-cyclotomic-weak-leopoldt-by-kummer-splitting]]

[F4] For any finite number field $L$, its maximal abelian pro-$p$ extension unramified outside $p$ has finitely generated Galois group of $\mathbb Z_p$-rank $r_2(L)+1+\delta(L)$, with the same choice assumptions. [[lem-p-ramified-finite-layer-idelic-rank]]

[F5] A compact pro-$p$ $\mathbb Z_p\llbracket T\rrbracket$-module with one finitely generated coinvariant and uniformly bounded cyclotomic coinvariant ranks is finitely generated and torsion. [[lem-bounded-cyclotomic-coinvariant-ranks-force-torsion]]

[A1] AC and Countable Choice are the original public assumptions. [[def-axiom-of-choice]] [[def-countable-choice]]

## Proof

**Proof technique:** derive Dependent Choice from AC, identify the actual finite-layer coinvariants, and use the weak Leopoldt rank bound.

1.1 AC supplies Dependent Choice on any given nonempty set $S$ and serial relation: use AC once on the set of nonempty successor sets to choose a successor for each such set, choose the initial element, and iterate that function on $\mathbb N$. Thus the DC-qualified finite class-field inputs [F3] and [F4] are available under the unchanged assumptions [A1]. By [F2], put $E=F_\infty^\Gamma$; then $E/F$ is finite, $E$ is totally real, and $F_\infty/E$ is its cyclotomic $\mathbb Z_p$-extension. Choose a topological generator $\gamma$ of $\Gamma$ and let $E_n/E$ be its degree-$p^n$ layer. [F2, F3, F4, A1, given, construct, algebra]

2.1 Let $M_\infty/F_\infty$ be the maximal abelian pro-$p$ extension in [F1], put $Y=Y_\infty$, and put $P_n=\operatorname{Gal}(M_\infty/E_n)$. The tower is Galois over $E_n$ and $P_n$ is pro-$p$, as an extension of $\Gamma_n=\langle\gamma^{p^n}\rangle\cong\mathbb Z_p$ by the pro-$p$ group $Y$. Any finite abelian $p$-extension of $E_n$ unramified outside $p$, after compositum with $F_\infty$, is an abelian $p$-extension of $F_\infty$ unramified outside $p$ and hence lies in $M_\infty$. Conversely every finite abelian quotient of $P_n$ gives such an extension. Thus $P_n^{\rm ab}$ is the finite-layer $p$-ramified Galois group $X_{E_n}$ of [F4]. Use the tower fixed in step 1.1. [F1, F4, A1, step 1.1, construct, algebra]

3.1 Lift $\gamma^{p^n}$ to $\tau\in P_n$. Its closed procyclic subgroup maps surjectively to $\Gamma_n$ and is itself isomorphic to $\mathbb Z_p$: a finite procyclic group cannot map onto $\mathbb Z_p$, and a surjective continuous endomorphism of $\mathbb Z_p$ is multiplication by a unit. This gives $P_n=Y\rtimes\langle\tau\rangle$. Since $Y$ and $\Gamma_n$ are abelian, $[P_n,P_n]$ is the closed subgroup generated by $(\gamma^{p^n}-1)Y$. Passing to abelianizations yields the exact sequence $0\to Y/(\gamma^{p^n}-1)Y\to X_{E_n}\to\Gamma_n\to0$. Use the identification of step 2.1. [F1, F4, step 2.1, construct, algebra]

4.1 Each $E_n$ is totally real. By [F4] and the exact sequence of step 3.1, $Y/(\gamma^{p^n}-1)Y$ is finitely generated over $\mathbb Z_p$ and has rank $\delta(E_n)$. The ranks are uniformly bounded in $n$ by [F3]. In particular the $n=0$ coinvariant is finitely generated. Apply [F5] to $Y$ as a compact $\mathbb Z_p\llbracket\Gamma\rrbracket$-module: it is finitely generated and torsion over this subring. [F1, F3, F4, F5, step 3.1, construct, algebra]

5.1 A finite generating list over $\mathbb Z_p\llbracket\Gamma\rrbracket$ is also a generating list over the larger algebra $\Lambda(G)$. Multiplying nonzero annihilators of that finite list gives a single nonzero $f\in\mathbb Z_p\llbracket\Gamma\rrbracket$ annihilating $Y$. The decomposition in [F2] identifies $\Lambda(G)$ with the finite free $\mathbb Z_p\llbracket\Gamma\rrbracket$-module with basis $\Delta$, so multiplication by $f$ is injective on $\Lambda(G)$. Hence $f$ is a non-zero-divisor of $\Lambda(G)$ and $Y$ is torsion over $\Lambda(G)$. This proves the unchanged Statement using step 4.1. [F2, step 4.1, algebra, discharge-construct] ∎
