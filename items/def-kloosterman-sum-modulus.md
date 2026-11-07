---
id: def-kloosterman-sum-modulus
kind: definition
title: "Kloosterman Sum at a Modulus"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-congruence-subgroup-of-sl2-z
  - def-dirichlet-character-modulo-q
  - def-exponential-character-e
  - thm-complex-exponential-addition-and-real-extension
  - thm-kernel-and-fibres-of-complex-exponential
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: n/a
sources:
  references:
    - title: "A. Knightly and C. Li, Kuznetsov's Trace Formula and the Hecke Eigenvalues of Maass Forms, Memoirs of the AMS 224 (2012), arXiv:1202.0189v1"
      url: "https://arxiv.org/pdf/1202.0189v1"
      locator: "§7.5.2, equation (7.21), printed p. 81; the level restriction is c in N Z_{>0}."
    - title: "Dorian Goldfeld, Trace Formulae for SL(2,R), Columbia lecture notes"
      url: "https://www.math.columbia.edu/~goldfeld/TraceFormulae-4-12-2020.pdf"
      locator: "§8, definition of the classical Kloosterman sum; printed pp. 42–46."
---

## Definition

Let $N,c,n$ be positive integers with $N\mid c$ and $\gcd(n,N)=1$, and let
$\chi$ be a Dirichlet character modulo $N$. For integers $a,b$, define the
level-$N$ twisted Kloosterman sum
$$S_\chi(a,b;n;c):= \sum_{\substack{d,d'\in\mathbb Z/c\mathbb Z\\dd'\equiv n\ (\mathrm{mod}\ c)}} \chi(d)\,e\!\left(\frac{ad+bd'}{c}\right),$$
where the value $\chi(d)$ means the value on the residue of $d$ modulo $N$.
This is defined because $dd'\equiv n\pmod c$ and $N\mid c$ imply that both
$d$ and $d'$ are units modulo $N$. Changing representatives modulo $c$ does
not change the exponential factor. For the trivial character and $n=1$ this
is the classical Kloosterman sum at modulus $c$.

## Definition references

[[def-congruence-subgroup-of-sl2-z]]

[[def-dirichlet-character-modulo-q]]

[[def-exponential-character-e]]

[[thm-complex-exponential-addition-and-real-extension]]

[[thm-kernel-and-fibres-of-complex-exponential]]

## Facts & Assumptions

**Given:** $N\mid c$, $\gcd(n,N)=1$, integers $a,b$, and a Dirichlet
character $\chi$ modulo $N$.

[F1] A character modulo $N$ depends only on the residue class modulo $N$ and
is evaluated on units. ([[def-dirichlet-character-modulo-q]])

[F2] The complex exponential satisfies $\exp(z+w)=\exp(z)\exp(w)$.
([[thm-complex-exponential-addition-and-real-extension]])

[F3] $\exp(z)=1$ exactly when $z\in2\pi i\mathbb Z$.
([[thm-kernel-and-fibres-of-complex-exponential]])

## Verification

1.1 If a representative $d$ or $d'$ modulo $c$ is changed, its residue modulo $N$ is unchanged because $N\mid c$. Thus the character factor is independent of representatives by [F1]. [F1, given, algebra]

1.2 Replacing $d,d'$ by $d+rc,d'+sc$ changes $(ad+bd')/c$ by the integer $ar+bs$. By [F2] and [F3], $e(t+ar+bs)=e(t)$, so the exponential factor is independent of representatives. [F2, F3, given, algebra]

2.1 Reducing $dd'\equiv n\pmod c$ modulo $N$ gives $dd'\equiv n\pmod N$. Since $n$ is a unit modulo $N$, its factorization as $dd'$ forces both $d$ and $d'$ to be units modulo $N$. Hence every character value in the sum is defined. [F1, given, algebra] ∎

## Source convention dictionary

The library keeps $u(\gamma z)=\chi(d_\gamma)u(z)$. Knightly–Li use $u(\gamma z)=\overline{\omega'(d_\gamma)}u(z)$, so their parameter is $\omega'=\overline{\chi}$. The displayed character factors are translated by this dictionary, not quoted verbatim in the source notation. In the continuous branch the source auxiliary characters satisfy $\widetilde\chi_1\widetilde\chi_2=\overline{\chi}$; $\chi'_1$ induces $\widetilde\chi_1$ while $\chi'_2$ induces $\widetilde\chi_2$.
