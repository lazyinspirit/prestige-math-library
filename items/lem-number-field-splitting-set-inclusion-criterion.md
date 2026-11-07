---
id: lem-number-field-splitting-set-inclusion-criterion
kind: lemma
title: "Splitting-set inclusion detects containment in a Galois extension"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 24
deps:
  - thm-chebotarev-dirichlet-density
  - def-number-field
  - def-finite-galois-extension-and-galois-group
  - thm-fundamental-theorem-of-finite-galois-theory
  - def-arithmetic-frobenius-coset
  - thm-unramified-frobenius-element-exists-uniquely
  - cor-orders-of-decomposition-and-inertia-groups
  - thm-extensions-of-finite-fields-are-galois-with-cyclic-frobenius-group
  - def-split-inert-ramified-and-unramified-prime
  - lem-number-field-extension-ramified-at-finitely-many-places
  - lem-frobenius-fixed-cosets-detect-degree-one-primes
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "D. A. Cox, Primes of the Form x² + ny², 2nd ed."
      url: "https://www.math.utoronto.ca/~ila/Cox-Primes_of_the_form_x2%2Bny2.pdf"
      locator: "Proposition 8.20 and its use in the proof of Theorem 11.1"
verification: {}
---

## Statement

Assume that every nonempty conjugacy-stable subset of the Galois group of a
finite Galois extension of number fields has positive Dirichlet density of
unramified primes with Frobenius in that subset. Let $E/F$ be a finite Galois
extension of number fields and let $M/F$ be any finite extension in a common
algebraic closure. Write $S_E$ for the finite
primes unramified in $E$ that split completely in $E$, $S_M$ for the primes
unramified in the Galois closure of $M$ that split completely in that Galois
closure, and $T_M$ for the primes unramified in $M$ having at least one prime
of residue degree one in $M$. Up to finite sets, the following criteria hold:
$$M\subseteq E\quad\Longleftrightarrow\quad S_E\subseteq S_M,$$
and
$$E\subseteq M\quad\Longleftrightarrow\quad T_M\subseteq S_E.$$
Here inclusion of prime sets means inclusion after deleting finitely many
ramified primes.

## Statement references

[[thm-chebotarev-dirichlet-density|The needed input is positive density for each nonempty conjugacy-stable Frobenius subset.]]

[Cox, Proposition 8.20](https://www.math.utoronto.ca/~ila/Cox-Primes_of_the_form_x2%2Bny2.pdf)

## Facts & Assumptions

**Given:** Finite extensions $E/F$ and $M/F$ with $E/F$ Galois and the indicated prime-set inclusions.

[A1] [[thm-chebotarev-dirichlet-density]]: for every finite Galois extension $N/F$ and every nonempty conjugacy-stable subset $C\subseteq\operatorname{Gal}(N/F)$, the unramified primes with Frobenius conjugacy class in $C$ have positive Dirichlet density. The item is present in batch 111 at dependency level 23. Its proof remains conditional on the batch-111 abelian-Chebotarev input, whose actual CFT and ray-class-density suppliers remain proof-open. The complete independent proof in Milne, *Class Field Theory*, Chapter VIII §7, Theorem 7.4, pp. 258–260, was read and supports this interface; no acceptance or proof closure is inferred.

[F1] [[def-number-field]]: all extensions under discussion are finite extensions of number fields.

[F2] [[def-finite-galois-extension-and-galois-group]]: a finite Galois extension has a finite Galois group and is the fixed field of its identity subgroup.

[F3] [[thm-fundamental-theorem-of-finite-galois-theory]]: fixed fields reverse subgroup inclusion, and the fixed field of $\bigcap_{g\in G}gUg^{-1}$ is the compositum of the conjugate fixed fields $g(N^U)$.

[F4] [[def-arithmetic-frobenius-coset]] and [[thm-unramified-frobenius-element-exists-uniquely]]: at an unramified prime, arithmetic Frobenius is the unique element inducing $x\mapsto x^{N\mathfrak p}$ on the residue field.

[F5] [[cor-orders-of-decomposition-and-inertia-groups]] and [[thm-extensions-of-finite-fields-are-galois-with-cyclic-frobenius-group]]: for an unramified prime in a finite Galois extension, the Frobenius element has order equal to the residue degree, so it is the identity exactly when that degree is one.

[F6] [[def-split-inert-ramified-and-unramified-prime]]: complete splitting means unramifiedness and residue degree one at every prime above the base prime.

[F7] [[lem-frobenius-fixed-cosets-detect-degree-one-primes]]: outside a finite exceptional set and ramified primes, a prime has a degree-one prime in $M$ exactly when its Frobenius conjugacy class in $G$ intersects $U$.

[F8] [[lem-number-field-extension-ramified-at-finitely-many-places]]: a finite extension of number fields ramifies at only finitely many finite primes.

## Proof

1.1 Let $N/F$ be the Galois closure of $EM$, put $G=\operatorname{Gal}(N/F)$, and set $H=\operatorname{Gal}(N/E)$ and $U=\operatorname{Gal}(N/M)$. Since $E/F$ is Galois, $H$ is normal in $G$. By [F3], the fixed field of $\operatorname{core}_G(U)=\bigcap_{g\in G}gUg^{-1}$ is the compositum of the conjugates of $M$, hence the Galois closure of $M$. Let $\mathfrak p$ be unramified in $N$ and choose an arithmetic Frobenius $\tau\in G$. For any intermediate Galois field $L=N^V$, restriction of $\tau$ acts on its residue field by $x\mapsto x^{N\mathfrak p}$, so uniqueness in [F4] identifies the restriction with the Frobenius in $L/F$. By [F5], this element is the identity exactly when the residue degree is one; because $\mathfrak p$ is unramified, [F6] makes that equivalent to complete splitting in $L$. Galois correspondence [F3] says the restriction is the identity exactly when $\tau\in V$. Applying this to $L=E$ and $L=N^{\operatorname{core}_G(U)}$ proves that complete splitting corresponds respectively to Frobenius in $H$ and in $\operatorname{core}_G(U)$. [F1, F2, F3, F4, F5, F6, given, algebra]

1.2 Suppose $T_M\subseteq S_E$ up to finite sets. If some $u\in U$ were outside $H$, then its conjugacy class would be disjoint from the normal subgroup $H$. By [A1], infinitely many primes have Frobenius class that of $u$; after deleting the finite ramified set [F8] and the finite exceptional set in [F7], each such prime lies in $T_M$ by [F7] and does not split completely in $E$ by [F4]–[F6]. This contradicts the assumed inclusion, so $U\subseteq H$. By [F3], $E=N^H\subseteq N^U=M$. [A1, F3, F4, F6, F7, F8, given]

2.1 If $M\not\subseteq E$, the Galois closure of $M$ is not contained in $E$ because $E/F$ is normal; by [F3] this implies $H\not\subseteq\operatorname{core}_G(U)$. The difference $H\setminus\operatorname{core}_G(U)$ is nonempty and conjugacy-stable because both subgroups are normal. By [A1], infinitely many primes have Frobenius conjugacy class in that difference. After deleting the finite set ramified in $N$ by [F8], each such prime belongs to $S_E$ and not to $S_M$, contradicting inclusion up to finite sets. Conversely, if $M\subseteq E$, every conjugate of $M$ is contained in $E$ because $E/F$ is normal, so [F3] gives $H\subseteq\operatorname{core}_G(U)$; outside the finite ramified set, every prime splitting completely in $E$ splits in the Galois closure of $M$. This proves the first criterion. [A1, F3, F8, step 1.1, given, algebra]

3.1 Conversely, if $E\subseteq M$, then $U\subseteq H$ by [F3]. For every prime in $T_M$ outside the finite exclusions in [F7]–[F8], [F7] says its Frobenius class intersects $U$; because $H$ is normal and contains $U$, the full class lies in $H$, so the prime splits completely in $E$ by [F4]–[F6]. This proves the second criterion conditional on [A1]. [A1, F3, F4, F6, F7, F8, given] ∎
