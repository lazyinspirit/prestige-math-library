---
id: thm-faltings-isogeny-finiteness-theorem
kind: theorem
title: "Finiteness of isogeny classes of abelian varieties with good reduction outside a fixed finite set"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 23
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
  - lem-faltings-local-frobenius-factors-are-finite
  - thm-chebotarev-dirichlet-density
  - thm-faltings-semisimplicity-of-tate-module
  - thm-faltings-tate-hom-isomorphism
  - thm-unramified-galois-representation-has-well-defined-frobenius-characteristic-polynomial
  - thm-faltings-finite-extensions-unramified-outside-bounded-set
  - def-arith-tate-module-and-inertia
  - thm-good-reduction-and-smooth-proper-base-change
  - thm-nakayama-lemma
  - lem-compatible-finite-adic-modules-have-finite-complete-limits
  - lem-submodules-of-finite-modules-over-noetherian-rings-are-finite-direct
  - lem-faltings-semisimple-character-determines-isomorphism
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "G. Faltings, “Endlichkeitssätze für abelsche Varietäten über Zahlkörpern,” §6, Satz 5"
      url: "https://archive.ymsc.tsinghua.edu.cn/pacm_download/355/9132-elc.pdf"
      locator: "Printed pp. 362–363, finite local factors, Frobenius-separating places, Nakayama, and isogeny conclusion."
verification:
  precheck: pending
axiom_use: "The explicit axiom branches are AC, DC, CC; the displayed item-local proof is choice-free after the cited hypotheses unless its Proof status records an unresolved internal use."
---

## Statement

Assume AC, DC, and CC. Let $K$ be a number field, let $S$ be a finite set of finite places of $K$, and let $g\ge1$. There are only finitely many $K$-isogeny classes of abelian varieties of dimension $g$ over $K$ that have good reduction outside $S$.

## Statement references

[[lem-faltings-local-frobenius-factors-are-finite]]

[[thm-chebotarev-dirichlet-density]]

[[thm-faltings-semisimplicity-of-tate-module]]

[[thm-faltings-tate-hom-isomorphism]]

[[thm-unramified-galois-representation-has-well-defined-frobenius-characteristic-polynomial]]

[Faltings 1983, §6, Satz 5, printed pp. 362–363](https://archive.ymsc.tsinghua.edu.cn/pacm_download/355/9132-elc.pdf)

[Faltings–Wüstholz, *Rational Points*, Chapter V, §2, Theorem 2.8](https://yhzhumath.github.io/Mordell2024/RP.pdf)

## Facts & Assumptions

**Given:** AC, DC, and CC; a number field $K$, a finite set $S$, and an integer $g\ge1$.

[A1] [[def-axiom-of-choice]]: AC is an explicit hypothesis inherited through the declared supplier chain; any internal use not reconstructed is recorded in Proof status.

[A2] [[def-dependent-choice]]: DC is an explicit hypothesis inherited through the declared supplier chain; any internal use not reconstructed is recorded in Proof status.

[A3] [[def-countable-choice]]: CC is an explicit hypothesis inherited through the declared supplier chain; any internal use not reconstructed is recorded in Proof status.

[F1] [[lem-faltings-local-frobenius-factors-are-finite]]: at each selected good-reduction place away from $\ell$, only finitely many Frobenius polynomials occur.

[F2] [[thm-chebotarev-dirichlet-density]]: every conjugacy class in a finite Galois group occurs as arithmetic Frobenius at a finite place outside any prescribed finite set, subject to the theorem's hypotheses.

[F3] [[thm-faltings-semisimplicity-of-tate-module]]: the rational Tate representations are semisimple.

[F4] [[thm-faltings-tate-hom-isomorphism]]: an isomorphism of rational Tate representations yields a $K$-isogeny.

[F5] [[def-arith-tate-module-and-inertia]]: $T_\ell(A)$ is free of rank $2g$ over $\mathbb Z_\ell$; [[thm-good-reduction-and-smooth-proper-base-change]] gives unramifiedness at good-reduction places away from $\ell$.

[F6] [[thm-faltings-finite-extensions-unramified-outside-bounded-set]]: for a fixed number field, finite ramification set, and degree bound, only finitely many extension fields occur.

[F7] [[lem-compatible-finite-adic-modules-have-finite-complete-limits]]: $\mathbb Z_\ell$ is a complete local principal ideal domain with maximal ideal $\ell\mathbb Z_\ell$.

[F8] [[lem-submodules-of-finite-modules-over-noetherian-rings-are-finite-direct]]: every submodule of a finite module over a commutative Noetherian ring is finitely generated.

[F9] [[thm-nakayama-lemma]]: if a finitely generated module $Q$ over a local ring satisfies $Q=\ell Q$, then $Q=0$.

[F10] [[lem-faltings-semisimple-character-determines-isomorphism]]: over a characteristic-zero field, equal trace characters determine isomorphic finite-dimensional semisimple representations, conditional on the stated Artin–Wedderburn argument.

[L1] [[thm-unramified-galois-representation-has-well-defined-frobenius-characteristic-polynomial]], [F6] and [F10] have recorded independently accepted local proofs at their literal hypotheses. The respective receipts under `research/number-theory-all-141-2026-10-25-escalations/` are `local-galois/residue72-weil-repair/representations72/owner-acceptance.json`, `faltings120/local-discriminant-repair/complete120/owner-acceptance.json` and `faltings120/semisimple-character-repair/owner-acceptance.json`. Their current source hashes match the receipts. These resolve the former local Frobenius-definedness, finite-extension-bound and characteristic-zero character-argument blockers only. Chebotarev, good-reduction/Weil weights, semisimplicity and the Tate homomorphism retain their actual proof holds, so this theorem remains held. None is imported as an external theorem or newly accepted here.

## Proof

**Proof technique:** finitely many Frobenius data distinguish all semisimple Tate representations.

**Given:** [F1]–[F10], AC, DC, CC, a number field $K$, a finite set $S$ of finite places, and $g\ge1$; the proof chooses a rational prime $\ell$ outside the rational primes below $S$.

1.1 Since $S$ is finite, choose a rational prime $\ell$ below no place of $S$. For each pair $A_1,A_2$ in the family, form the image $M$ of $\mathbb Z_\ell[G_K]$ in $\operatorname{End}_{\mathbb Z_\ell}(T_\ell(A_1))\times\operatorname{End}_{\mathbb Z_\ell}(T_\ell(A_2))$. The ambient module has rank $8g^2$ by [F5]. The ring $\mathbb Z_\ell$ is a PID and hence Noetherian by [F7], so [F8] makes the submodule $M$ finitely generated. Its reduction $M/\ell M$ has at most $\ell^{8g^2}$ elements. The joint representation modulo $\ell M$ has finite image and cuts out a finite Galois extension $L/K$ of degree at most $\ell^{8g^2}$. Since both abelian varieties have good reduction outside $S$, [F5] makes the representation unramified outside $S\cup\{v:v\mid\ell\}$. [F5, F7, F8, given, choose, algebra]

1.2 Apply [F6] with exceptional set $S\cup\{v:v\mid\ell\}$ and degree bound $D=\ell^{8g^2}$. It gives only finitely many $K$-isomorphism classes for the quotient fields $L$ from step 1.1. [F6, step 1.1, algebra]

2.1 For each representative $L/K$ from step 1.2, Chebotarev [F2] supplies one finite place outside $S$ and the places above $\ell$ for each conjugacy class in $\operatorname{Gal}(L/K)$. Take the union of these finite sets over the finite list of representative extensions. Any quotient field from step 1.1 is $K$-isomorphic to one of the representatives, so the resulting finite set $T$ covers all its conjugacy classes as well. [F2, step 1.2, construct]

2.2 At each $v\in T$, [F1] gives finitely many possible Frobenius polynomials. Hence the tuples of local polynomials indexed by $T$ take only finitely many values among all the abelian varieties in the family. [F1, step 2.1, algebra]

3.1 If $A_1,A_2$ have the same tuple, their Frobenius traces agree on a representative of every conjugacy class in the finite quotient acting on $M/\ell M$, because the first coefficient of each Frobenius polynomial is minus its trace. Trace is invariant under conjugation, so the two trace functionals agree on every element in each represented conjugacy class. Those classes cover the finite quotient, whose group elements span $M/\ell M$; hence the trace functionals agree modulo $\ell$ on all of $M$. [given, F1, step 2.1, algebra]

3.2 Let $N\subseteq M$ be the submodule generated by the selected Frobenius elements and all their Galois conjugates. By step 3.1 these images span $M/\ell M$, so $M=N+\ell M$ and the finitely generated quotient $Q=M/N$ satisfies $Q=\ell Q$. By [F9], $Q=0$, hence $N=M$. The trace functionals agree exactly on the selected Frobenius elements and, by conjugacy invariance, on their conjugates; therefore their linear extensions agree on $M$ and on every element of $G_K$. [F7, F9, step 3.1, algebra]

4.1 By [F3] the two Tate representations are semisimple, and [F10] turns the trace equality of step 3.2 into an isomorphism $V_\ell(A_1)\cong V_\ell(A_2)$ as $G_K$-representations. The Tate homomorphism [F4] realizes it by a $K$-homomorphism; its invertible action on Tate modules forces finite kernel and full-dimensional image, so it is an isogeny. [F3, F4, F10, step 3.2, algebra]

4.2 Thus each tuple of local polynomials determines at most one $K$-isogeny class. Since there are finitely many tuples by step 2.2, there are finitely many isogeny classes. [given, step 2.2, step 4.1, algebra] ∎
