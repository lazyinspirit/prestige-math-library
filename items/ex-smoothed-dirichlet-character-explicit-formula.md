---
id: ex-smoothed-dirichlet-character-explicit-formula
kind: example
title: "Character orthogonality turns the twisted formula into an AP sum"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps:
  - thm-smoothed-explicit-formula-for-dirichlet-character-von-mangoldt-sums
  - def-dirichlet-character-von-mangoldt-sum
  - thm-dirichlet-character-orthogonality
  - def-dirichlet-character-modulo-q
  - def-primitive-dirichlet-character-and-conductor
  - def-induced-dirichlet-character
  - def-principal-dirichlet-character
  - def-prime
  - def-von-mangoldt-function
  - thm-fundamental-theorem-of-arithmetic
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Ben Green, The Prime Number Theorem, Chapter 7, §§7.1–7.4"
      url: "https://people.maths.ox.ac.uk/greenbj/papers/primenumbers.pdf"
    - title: "Harold Davenport, Multiplicative Number Theory, 2nd ed., §19, pp. 115–120"
      url: "https://link.springer.com/chapter/10.1007/978-1-4757-5927-3_19"
---

## Example

Let $p$ be a prime, let $G=(\mathbb Z/p\mathbb Z)^\times$, let $a\in G$,
put $\varphi(p):=|G|$, let $x>0$, and let $W:(0,\infty)\to\mathbb C$ be infinitely differentiable
and vanish outside a compact subset of $(0,\infty)$. Let $\chi_0$ be the
principal character modulo $p$, and let $\chi_1$ be the unique character
modulo $1$. Choose $c>1$, $\alpha<0$, and $T>0$ such that the rectangle
boundary avoids the zeros and poles of $L(s,\eta)$ for every nonprincipal
$\eta$ modulo $p$ and for $\eta=\chi_1$. Write
$\mathscr E_\eta(x,W;c,\alpha,T)$ for the finite-rectangle expression in the
smoothed explicit formula for each of those primitive characters. Then

$$\sum_{\substack{n\ge1\\ n\equiv a\ ({\rm mod}\ p)}}\Lambda(n)W(n/x)=\frac1{\varphi(p)}\left(\sum_{\substack{\chi\ ({\rm mod}\ p)\\\chi\ne\chi_0}}\overline{\chi(a)}\,\mathscr E_\chi(x,W;c,\alpha,T)+\mathscr E_{\chi_1}(x,W;c,\alpha,T)-\sum_{k\ge1}(\log p)W(p^k/x)\right).$$

The correction sum is finite because $W$ is compactly supported away from
$0$ and $\infty$. The coefficient $1/|G|$ and the conjugate weight
$\overline{\chi(a)}$ use the column-orthogonality normalization for all
characters modulo $p$.

## Example references

[[thm-smoothed-explicit-formula-for-dirichlet-character-von-mangoldt-sums]].

[[def-dirichlet-character-von-mangoldt-sum]].

[[thm-dirichlet-character-orthogonality]].

[[def-dirichlet-character-modulo-q]].

[[def-primitive-dirichlet-character-and-conductor]].

[[def-induced-dirichlet-character]].

[[def-principal-dirichlet-character]].

[[def-prime]].

[[def-von-mangoldt-function]].

[[thm-fundamental-theorem-of-arithmetic]].

## Facts & Assumptions

**Given:** A prime $p$, the unit group $G=(\mathbb Z/p\mathbb Z)^\times$, a
unit class $a\in G$, $x>0$, a smooth compactly supported test $W$, and
admissible common contour parameters $c,\alpha,T$.

[F1] For unit classes $u,a\in G$,
$\sum_{\chi\ ({\rm mod}\ p)}\chi(u)\overline{\chi(a)}=\varphi(p)=|G|$
when $u=a$, and it is $0$ otherwise
([[thm-dirichlet-character-orthogonality]]).

[F2] A Dirichlet character is zero on integers not coprime to its modulus
([[def-dirichlet-character-modulo-q]]).

[F3] A character modulo $q$ is primitive exactly when it is not induced from
a proper divisor of $q$
([[def-primitive-dirichlet-character-and-conductor]]).

[F4] Induction from modulus $d\mid q$ gives the same character values on
integers coprime to $q$ and zero on the others
([[def-induced-dirichlet-character]]).

[F5] The principal character modulo $p$ equals $1$ on integers coprime to
$p$ and $0$ on multiples of $p$
([[def-principal-dirichlet-character]]).

[F6] $\Lambda(n)=\log r$ when $n=r^j$ for a prime $r$ and $j\ge1$, and is
$0$ otherwise
([[def-von-mangoldt-function]]).

[F7] Every positive integer has a unique prime factorization
([[thm-fundamental-theorem-of-arithmetic]]).

[F8] The Mellin-smoothed twisted sum is defined by
$\psi_W(x,\chi)=\sum_{n\ge1}\Lambda(n)\chi(n)W(n/x)$
([[def-dirichlet-character-von-mangoldt-sum]]).

[F9] The finite-rectangle theorem states
$\psi_W(x,\eta)=\mathscr E_\eta(x,W;c,\alpha,T)$ for primitive $\eta$ and
admissible contour data
([[thm-smoothed-explicit-formula-for-dirichlet-character-von-mangoldt-sums]]).

## Verification

**Proof technique:** direct.

1.1 For $n$ coprime to $p$, [F1] with $u=n$ gives the residue-class indicator after division by $\varphi(p)=|G|$; if $p\mid n$, [F2] makes every character value zero. Multiplying by $\Lambda(n)W(n/x)$ and summing the finite support gives $\sum_{n\equiv a\ ({\rm mod}\ p)}\Lambda(n)W(n/x)=\frac1{\varphi(p)}\sum_{\chi\ ({\rm mod}\ p)}\overline{\chi(a)}\psi_W(x,\chi)$. [F1, F2, F8, given, algebra]

1.2 If a nonprincipal character modulo $p$ were induced from a proper divisor, primality of $p$ makes that divisor $1$; the unit group modulo $1$ has one element, so its only character is trivial, and by [F4] its induction is $\chi_0$, contrary to nonprincipality. Thus every nonprincipal character modulo $p$ is primitive by [F3], and the unique character $\chi_1$ modulo $1$ is primitive as well. [F2, F3, F4, given, algebra]

1.3 By [F5], $\psi_W(x,\chi_0)=\sum_{p\nmid n}\Lambda(n)W(n/x)$, while $\chi_1(n)=1$ for every positive integer. If $p\mid n$ and $\Lambda(n)\ne0$, [F6] writes $n=r^k$ for prime $r$; [F7] forces $r=p$, so the omitted terms are exactly $n=p^k$, each contributing $(\log p)W(p^k/x)$. Hence $\psi_W(x,\chi_0)=\psi_W(x,\chi_1)-\sum_{k\ge1}(\log p)W(p^k/x)$. [F5, F6, F7, given, algebra]

2.1 Substitute the principal-character identity from step 1.3 into step 1.1. Each nonprincipal character and $\chi_1$ is primitive by step 1.2, so [F9] replaces each smoothed twist by its finite-rectangle expression, giving the displayed example formula. [step 1.1, step 1.2, step 1.3, F9, algebra] ∎
