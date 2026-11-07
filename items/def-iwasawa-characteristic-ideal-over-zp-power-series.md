---
id: def-iwasawa-characteristic-ideal-over-zp-power-series
kind: definition
title: "Characteristic ideal of a finitely generated torsion p-adic power-series module"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-axiom-of-choice
  - def-p-adic-integers-as-compatible-residue-classes
  - def-height-of-a-prime-ideal
  - def-composition-series-and-length-of-a-module
  - thm-localisation-and-polynomial-extension-of-regular-rings
  - thm-completion-of-a-noetherian-local-ring
  - thm-completion-preserves-regular-local-rings
  - thm-nonaffine-regular-local-ring-is-ufd
  - thm-krull-principal-ideal-theorem
justified_by: []
axiom_use: "AC is used only through the regular-locality, completion, UFD and principal-ideal-theorem suppliers in the well-definedness proof. The coefficientwise DVR argument is choice-free."
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "J. Coates and R. Sujatha, The Main Conjecture"
      url: "https://www.repository.cam.ac.uk/bitstreams/7d2371af-7da1-466f-8ccd-f1c1420ed744/download"
      locator: "§3, printed pp. 117–118, characteristic ideal definition for Iwasawa modules"
    - title: "R. Sharifi, Iwasawa Theory lecture notes"
      url: "https://math.ucla.edu/~sharifi/notes/iwasawa-ch03.html"
      locator: "§3.2, printed pp. 77–82, characteristic ideals and Iwasawa modules"
verification: {}
---

## Definition

Assume the Axiom of Choice. Let $p$ be a prime, let $\mathbb Z_p=\varprojlim_n\mathbb Z/p^n\mathbb Z$, put $R=\mathbb Z_p[\![T]\!]$, and let $M$ be a finitely generated torsion $R$-module, meaning that it has a finite generating set and each element is killed by a nonzero element of $R$. A prime ideal $\mathfrak p$ has height one when the local ring $R_{\mathfrak p}$ has Krull dimension one. For each such $\mathfrak p$, let $M_{\mathfrak p}$ be the localization and let $\ell_{R_{\mathfrak p}}(M_{\mathfrak p})$ be the number of simple factors in a composition series. The **characteristic ideal** of $M$ is
$$\operatorname{char}_R(M)=\prod_{\operatorname{ht}(\mathfrak p)=1}\mathfrak p^{\ell_{R_{\mathfrak p}}(M_{\mathfrak p})},$$
where only primes with nonzero exponent are included. The ring $R$ is a Noetherian normal domain, and the product is finite.

## Definition references

[J. Coates and R. Sujatha, *The Main Conjecture*, §3, pp. 117–118](https://www.repository.cam.ac.uk/bitstreams/7d2371af-7da1-466f-8ccd-f1c1420ed744/download)

[R. Sharifi, *Iwasawa Theory*, §3.2, pp. 77–82](https://math.ucla.edu/~sharifi/notes/iwasawa-ch03.html)

## Facts & Assumptions

**Given:** AC, a prime $p$, the power-series ring $R=\mathbb Z_p[\![T]\!]$, and a finitely generated torsion $R$-module $M$.

[F1] $\mathbb Z_p$ is the inverse limit of the compatible residue rings $\mathbb Z/p^n\mathbb Z$. [[def-p-adic-integers-as-compatible-residue-classes]]

[F2] Localizations and finite polynomial extensions of a commutative regular Noetherian ring are regular. [[thm-localisation-and-polynomial-extension-of-regular-rings]]

[F3] The maximal-ideal completion of a Noetherian local ring is again Noetherian local. [[thm-completion-of-a-noetherian-local-ring]]

[F4] A Noetherian local ring is regular exactly when its maximal-ideal completion is regular. [[thm-completion-preserves-regular-local-rings]]

[F5] Every regular local ring is a unique factorization domain. [[thm-nonaffine-regular-local-ring-is-ufd]]

[F6] If a prime ideal is minimal over a principal ideal in a Noetherian ring, its height is at most one. [[thm-krull-principal-ideal-theorem]]

[F7] The height of a prime ideal $\mathfrak p$ is $\dim(R_{\mathfrak p})$. [[def-height-of-a-prime-ideal]]

[F8] The composition length of a module is the number of simple factors in a finite composition series; the zero module has length zero. [[def-composition-series-and-length-of-a-module]]

[A1] AC is used by [F2], [F3], [F4], [F5], and [F6]; no choice principle enters the inverse-limit coefficient argument in step 1.1. [[def-axiom-of-choice]] [[thm-localisation-and-polynomial-extension-of-regular-rings]] [[thm-completion-of-a-noetherian-local-ring]] [[thm-completion-preserves-regular-local-rings]] [[thm-nonaffine-regular-local-ring-is-ufd]] [[thm-krull-principal-ideal-theorem]]

## Proof

1.1 Every nonzero $x\in\mathbb Z_p$ is divisible by a largest power $p^r$: some residue coordinate of $x$ is nonzero, so divisibility stops, and $x=p^r u$ with $u$ having nonzero residue modulo $p$. Such a $u$ is a unit because its inverses modulo $p^n$ are unique and compatible. In any nonzero ideal, choose an element with least such $r$; it generates the ideal. Thus $\mathbb Z_p$ is a discrete valuation ring: its only prime ideals are $(0)$ and $(p)$, so its dimension and the dimension of $(p)/(p^2)$ over $\mathbb F_p$ are both one. It is therefore a regular Noetherian local domain with maximal ideal $(p)$. [F1, given, algebra]

2.1 Let $A=\mathbb Z_p[T]_{(p,T)}$. By [F2] and step 1.1, $A$ is a regular Noetherian local ring. [F2, step 1.1, algebra]

3.1 The $(p,T)$-adic completion of $A$ is $R$: every polynomial outside $(p,T)$ has unit constant term and is a unit modulo $(p,T)^n$, so localization does not change these quotients. Modulo $(p,T)^n$, coefficients of $T^j$ are taken modulo $p^{n-j}$ for $0\le j<n$; therefore a compatible sequence of truncations is exactly a sequence of coefficients in $\mathbb Z_p$, with the usual formal-series addition and convolution product. By [F3] the completion is Noetherian local; by [F4] it is regular; and by [F5] it is a domain and a UFD. It is normal as well: write an integral fraction as $a/b$ with $a,b$ coprime in the UFD. Its monic integral equation implies $b\mid a^n$; any irreducible factor of $b$ would divide $a$, a contradiction. Thus $b$ is a unit. Hence $R$ is a Noetherian normal domain. [F3, F4, F5, A1, step 2.1, algebra]

4.1 Choose finite generators $m_1,\ldots,m_s$ for $M$. Since $M$ is torsion, choose nonzero $a_j\in R$ with $a_jm_j=0$. Their product $a=\prod_j a_j$ is nonzero because $R$ is a domain and annihilates all of $M$. [given, step 3.1, construct]

5.1 If $a$ is a unit, then it annihilates $M$ only when $M=0$, so no prime supports $M$. Otherwise, factor $a$ into finitely many irreducibles in the UFD $R$. If a height-one prime $\mathfrak p$ supports $M$, then $a\in\mathfrak p$, since otherwise $a$ is a unit in $R_{\mathfrak p}$ and would force $M_{\mathfrak p}=0$. Primality of $\mathfrak p$ places at least one irreducible factor $f$ in $\mathfrak p$. The element $f$ is prime in a UFD, so $(f)$ is prime; [F6] and nonzeroness give $\operatorname{ht}(f)=1$. Since $(f)\subseteq\mathfrak p$ and both have height one, they are equal. Thus only finitely many height-one primes can support $M$. [F5, F6, F7, step 3.1, step 4.1, algebra]

6.1 For such a prime $\mathfrak p=(f)$, the localized module $M_{\mathfrak p}$ is finitely generated over $R_{\mathfrak p}$ and is killed by $a$. In $R_{\mathfrak p}$ every factor of $a$ not associated to $f$ is a unit, so some power $f^e$ kills $M_{\mathfrak p}$. The filtration $M_{\mathfrak p}\supseteq fM_{\mathfrak p}\supseteq\cdots\supseteq f^eM_{\mathfrak p}=0$ has finitely many quotients; each is a finitely generated vector space over the residue field $R_{\mathfrak p}/(f)$, hence finite-dimensional. A finite basis gives a finite composition series for each quotient, and concatenating these series along the finite filtration gives a finite composition series for $M_{\mathfrak p}$. Thus $\ell_{R_{\mathfrak p}}(M_{\mathfrak p})$ is finite by [F8]. [F5, F8, step 4.1, step 5.1, algebra]

7.1 Step 5.1 gives only finitely many nonzero factors in the displayed product, and step 6.1 gives a finite nonnegative exponent for each. Their product is therefore a well-defined ideal of the Noetherian domain $R$, as stated. [step 5.1, step 6.1, algebra] ∎
